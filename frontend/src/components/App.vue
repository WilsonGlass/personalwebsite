<template>
  <v-app>
    <v-main>
      <a href="#home" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-gray-800 text-white px-3 py-1 rounded">
        Skip to content
      </a>

      <div id="wrapper" class="flex flex-col min-h-screen bg-gray-900 text-gray-100">
        <MyNavBar />

        <main class="flex-1 w-full readable pt-6 md:pt-10 px-4 sm:px-6 lg:px-8">
          <HeroSection :headshot-url="headshotUrl" />
          <ExperienceSection :experience="experience" />
          <ProjectsSection :projects="projects" />
          <SportSection />
          <EducationSection :courses="courses" />
          <ContactSection />
        </main>

        <PageFooter :year="currentYear" />
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import MyNavBar from '@/components/MyNavBar.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
import ExperienceSection from '@/components/sections/ExperienceSection.vue';
import SportSection from '@/components/sections/SportSection.vue';
import EducationSection from '@/components/sections/EducationSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
import PageFooter from '@/components/layout/PageFooter.vue';

import { projects } from '@/data/projects';
import { experience } from '@/data/experience';
import { courses } from '@/data/courses';

const headshotUrl = '/headshot.jpg';
const currentYear = new Date().getFullYear();
</script>

<style>
/* Legibility preset */
html { font-size: 16.5px; }
@media (min-width: 768px) { html { font-size: 17.5px; } }
body { line-height: 1.65; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }
.readable { letter-spacing: 0.01em; }
.readable p, .readable li { font-size: 1.02rem; line-height: 1.75; color: #e5e7eb; }
.readable small, .readable .text-xs { font-size: 0.85rem; color: #9ca3af; }
.readable h2 { font-size: 1.4rem; line-height: 1.3; }
.readable .p-5 { padding: 1.5rem; }
.readable a:focus-visible, .readable button:focus-visible { outline: 2px solid #22c55e; outline-offset: 2px; border-radius: 0.75rem; }
</style>