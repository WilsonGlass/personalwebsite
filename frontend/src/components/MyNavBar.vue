<template>
  <div id="wrapper" class="bg-gray-800 text-white">
    <div class="flex justify-between items-center p-4 gap-4">
      <!-- Brand -->
      <div class="flex-1">
        <router-link to="/" class="text-lg font-bold"></router-link>
      </div>

      <!-- Center nav -->
      <nav class="hidden md:flex items-center justify-center gap-6 text-sm flex-1">
        <!-- If your page has sections with these IDs, anchors are perfect -->
        <a href="#home" class="hover:text-blue-400">Home</a>
        <a href="#experience" class="hover:text-blue-400">Experience</a>
        <a href="#projects" class="hover:text-blue-400">Projects</a>
        <a href="#sport" class="hover:text-blue-400">Sport</a>
        <a href="#education" class="hover:text-blue-400">Education</a>

        <!-- Résumé download -->
        <a
          :href="resumeUrl"
          download
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
          title="Download resume"
        >
          <svg viewBox="0 0 24 24" class="h-4 w-4" aria-hidden="true">
            <path fill="currentColor"
              d="M12 3a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 12.586V4a1 1 0 0 1 1-1zM5 19a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5z"/>
          </svg>
          <span>Resume</span>
        </a>
      </nav>

      <!-- Right: If I wanted to add functionality here -->
      <div class="flex-1 flex justify-end">
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
const resumeUrl = "/resume.pdf";
</script>
