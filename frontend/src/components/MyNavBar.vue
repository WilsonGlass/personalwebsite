<template>
  <div id="wrapper" class="bg-gray-800 text-white">
    <div class="flex justify-between items-center p-4 gap-4">
      <!-- Brand -->
      <div class="flex-1">
        <router-link to="/" class="text-lg font-bold">Wilson Glass</router-link>
      </div>

      <!-- Center nav -->
      <nav class="hidden md:flex items-center justify-center gap-6 text-sm flex-1">
        <!-- If your page has sections with these IDs, anchors are perfect -->
        <a href="#home" class="hover:text-blue-400">Home</a>
        <a href="#experience" class="hover:text-blue-400">Experience</a>
        <a href="#education" class="hover:text-blue-400">Education</a>
        <a href="#projects" class="hover:text-blue-400">Projects</a>

        <!-- Résumé download -->
        <a
          :href="resumeUrl"
          download
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
          title="Download résumé"
        >
          <!-- optional: tiny download glyph (pure CSS/SVG, no deps) -->
          <svg viewBox="0 0 24 24" class="h-4 w-4" aria-hidden="true">
            <path fill="currentColor"
              d="M12 3a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 12.586V4a1 1 0 0 1 1-1zM5 19a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5z"/>
          </svg>
          <span>Résumé</span>
        </a>
      </nav>

      <!-- Right: Sign In / Avatar -->
      <div class="flex-1 flex justify-end">
        <MyButton
          v-if="!userStore.verified"
          @click="handleSignIn"
          class="inline-flex items-center gap-2 text-sm py-2 px-4 rounded bg-blue-500 hover:bg-blue-700 transition-colors"
        >
          <!-- Steam logo (Font Awesome) -->
          <font-awesome-icon :icon="['fab','steam']" class="h-4 w-4 text-white" />
          <span>Sign In With Steam</span>
        </MyButton>

        <div v-else class="relative">
          <img
            src="https://avatars.steamstatic.com/fc5a424c3c5685f6bd04fec9615a1e64754accf5_medium.jpg"
            alt="Steam Profile Avatar"
            class="cursor-pointer rounded-full h-8 w-8"
            @click="toggleDropdown"
          />
          <div
            v-if="isDropdownVisible"
            class="absolute right-0 top-10 w-48 bg-white text-gray-900 rounded-md shadow-lg z-50"
          >
            <MyProfileDropdown />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import MyButton from "@/components/MyButton.vue";
import { useUserStore } from "@/stores/userStore";
import { ref } from "vue";
import MyProfileDropdown from "@/components/MyProfileDropdown.vue";

const userStore = useUserStore();
const isDropdownVisible = ref(false);

// serve /public/resume.pdf at /resume.pdf
const resumeUrl = "/resume.pdf";

function toggleDropdown() {
  isDropdownVisible.value = !isDropdownVisible.value;
}

function handleSignIn() {
  const steamLoginUrl = "https://steamcommunity.com/openid/login";
  const queryParams = new URLSearchParams({
    'openid.ns': "http://specs.openid.net/auth/2.0",
    'openid.claimed_id': "http://specs.openid.net/auth/2.0/identifier_select",
    'openid.identity': "http://specs.openid.net/auth/2.0/identifier_select",
    'openid.return_to': "http://localhost:5000/verify",
    'openid.realm': "http://localhost:5000",
    'openid.mode': "checkid_setup"
  });
  window.location.href = `${steamLoginUrl}?${queryParams.toString()}`;
}
</script>
