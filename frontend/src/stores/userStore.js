import axios from "axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    verified: false,
    steamId: null,
    profilePicture: null,
    inventory: null,
    inventoryImages: [],
  }),
  actions: {
    async fetchSteamId() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/user/profile",
          {
            withCredentials: true,
          }
        );
        this.steamId = response.data.steam_id;
        this.verified = true;
        console.log("Steam ID updated in store:", this.steamId);
        return this.steamId; // Return the steamId to use in subsequent calls
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    },
    async fetchProfilePicture() {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/player_summary",
          {
            withCredentials: true,
          }
        );
        this.profilePicture = response.data.player.avatarmedium;
        console.log("Profile picture updated in store", this.profilePicture);
      } catch (error) {
        console.error("Error fetching user's profile picture", error);
      }
    },
    async fetchUserInventory() {
      if (!this.steamId) {
        await this.fetchSteamId();
      }
      if (this.steamId) {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/user/inventory`,
            {
              withCredentials: true,
            }
          );
          this.inventory = response.data;
          console.log("Inventory updated in store", this.inventory);
        } catch (error) {
          console.error("Error fetching user inventory:", error);
        }
      } else {
        console.log("No Steam ID provided for fetching inventory.");
      }
    },
    async fetchUserInventoryImages() {
      if (!this.steamId) {
        await this.fetchSteamId();
      }
      if (this.steamId) {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/user/inventory/images`,
            {
              withCredentials: true,
            }
          );
          this.inventoryImages = response.data;
          console.log("Inventory updated in store", this.inventoryImages);
        } catch (error) {
          console.error("Error fetching user inventory:", error);
        }
      } else {
        console.log("No Steam ID provided for fetching inventory.");
      }
    },
  },
});