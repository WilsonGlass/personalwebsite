import json
import os
from datetime import timedelta

from flask import Flask, request, redirect, jsonify, session
from flask_cors import CORS
from steam_web_api import Steam
import requests
from urllib.parse import urlencode
from dotenv import load_dotenv

# TODO I want to make it so that you can log into steam and see your inventory on my website because I had another private repo that had similar logic.
# Would be cool to show off live and would not be too hard.

load_dotenv()

app = Flask("My Website", static_folder="dist")
app.secret_key = os.getenv("SECRET_KEY")
steam_api_key = secret_data["steam_web_api_key"]
app.permanent_session_lifetime = timedelta(days=7)
app.config["SESSION_PERMANENT"] = True
CORS(app, support_credentials=True, origins=["http://localhost:8080"])


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response


@app.route('/api/player_summary')
def player_summary():
    try:
        steam = Steam(secret_data["steam_api_key"])
        print("HIHIIH", session["steam_id"])
        response = steam.users.get_user_details(session["steam_id"])
        return jsonify(response), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


# Steam OpenID URL
STEAM_OPENID_URL = "https://steamcommunity.com/openid/login"

@app.route('/login/steam')
def login_steam():
    # Parameters for the Steam OpenID login URL
    params = {
        'openid.ns': "http://specs.openid.net/auth/2.0",
        'openid.mode': "checkid_setup",
        'openid.return_to': "http://localhost:5000/verify",
        'openid.realm': "http://localhost:5000",
        'openid.identity': "http://specs.openid.net/auth/2.0/identifier_select",
        'openid.claimed_id': "http://specs.openid.net/auth/2.0/identifier_select"
    }
    login_url = f"{STEAM_OPENID_URL}?{urlencode(params)}"
    return redirect(login_url)


@app.route('/verify')
def verify():
    # Verify the response from Steam
    steam_data = request.args.to_dict()
    print(steam_data)
    if steam_data.get("openid.mode") == "id_res" and verify_steam_login(steam_data):
        steam_id = steam_data['openid.claimed_id'].split('/')[-1]
        session['steam_id'] = steam_id
        return redirect("http://localhost:8080/dashboard")
    return jsonify(success=False, message="Invalid request."), 400


@app.route('/api/user/profile')
def get_user_profile():
    print(session)
    if 'steam_id' in session:
        # Fetch more data from Steam if necessary, or simply return the steam_id
        return jsonify(steam_id=session["steam_id"])
    return jsonify(message="User not logged in"), 401

@app.route('/api/user/inventory')
def get_user_inventory():
    print("THIS IS SESSION", session)
    if 'steam_id' not in session:
        return jsonify(message="User not logged in"), 401
    response = requests.get(
        f"https://www.steamwebapi.com/steam/api/inventory?key={steam_api_key}&steam_id={session['steam_id']}").json()

    return jsonify(response), 200

@app.route('/api/user/inventory/images')
def get_user_inventory_images():
    print("THIS IS SESSION", session)
    if 'steam_id' not in session:
        return jsonify(message="User not logged in"), 401
    response = requests.get(
        f"https://www.steamwebapi.com/steam/api/inventory?key={steam_api_key}&steam_id={session['steam_id']}").json()

    item_images = []
    for item_info in response:
        item_images.append(item_info["image"])

    return jsonify(item_images), 200


def verify_steam_login(params):
    params["openid.mode"] = "check_authentication"
    response = requests.post(STEAM_OPENID_URL, params=params)
    return "is_valid:true" in response.text


if __name__ == '__main__':
    app.run(debug=True)