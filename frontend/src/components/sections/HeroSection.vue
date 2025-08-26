<template>
  <section id="home" class="container mx-auto px-6 md:px-8 scroll-mt-24">
    <div class="flex flex-col-reverse md:flex-row items-start md:items-center gap-10">
      <div class="flex-1">
        <p class="text-sm tracking-wide text-gray-400 uppercase">Software Engineer • AI/ML</p>
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mt-2">Wilson Glass</h1>
        <p class="mt-4 max-w-2xl">
          CS & Math @ Northeastern · AI SWE Intern @ Nasdaq · D-I coxswain. I build agentic/ML-driven systems.
        </p>
        <p class="mt-4 max-w-2xl">
          Contact Me!
        </p>
        <ContactLogos
          email="wilsonglass1@gmail.com"
          github="https://github.com/WilsonGlass"
          linkedin="https://www.linkedin.com/in/wilsonglass"
          email-logo="/logos/gmail.png"
          github-logo="/logos/github.png"
          linkedin-logo="/logos/linkedin.png"
          size="md"
          :encased="false"
        />
      </div>

      <div class="w-full md:w-[320px]">
        <div class="relative rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-gradient-to-tr from-gray-800 to-gray-700">
          <img :src="headshotUrl" alt="headshot" class="w-full h-full object-cover aspect-[4/5]" loading="eager" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactLogos from "@/components/layout/ContactLogos.vue";

defineProps<{ headshotUrl: string }>();
</script>
>