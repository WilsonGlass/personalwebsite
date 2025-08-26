<template>
  <!-- wrapper (bare by default; set encased=true for a subtle tray) -->
  <div
    class="inline-flex items-center gap-3 sm:gap-4"
    :class="encased ? 'rounded-2xl border border-gray-700/70 bg-white/5 px-2 py-2' : ''"
  >
    <!-- Email -->
    <a
      :href="`mailto:${email}`"
      class="group rounded-xl p-1.5 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
      aria-label="Email"
      title="Email"
    >
      <img
        :src="emailLogo"
        alt="Email"
        class="transition-transform group-hover:scale-105"
        :class="iconSizeClass"
        loading="eager"
        decoding="async"
      />
      <span class="sr-only">{{ email }}</span>
    </a>

    <!-- GitHub -->
    <a
      :href="github"
      target="_blank"
      rel="noopener noreferrer"
      class="group rounded-xl p-1.5 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
      aria-label="GitHub"
      title="GitHub"
    >
      <img
        :src="githubLogo"
        alt="GitHub"
        class="transition-transform group-hover:scale-105"
        :class="iconSizeClass"
        loading="lazy"
        decoding="async"
      />
    </a>

    <!-- LinkedIn -->
    <a
      :href="linkedin"
      target="_blank"
      rel="noopener noreferrer"
      class="group rounded-xl p-1.5 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
      aria-label="LinkedIn"
      title="LinkedIn"
    >
      <img
        :src="linkedinLogo"
        alt="LinkedIn"
        class="transition-transform group-hover:scale-105"
        :class="iconSizeClass"
        loading="lazy"
        decoding="async"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(defineProps<{
  email: string
  github: string
  linkedin: string
  emailLogo?: string
  githubLogo?: string
  linkedinLogo?: string
  size?: Size
  encased?: boolean
}>(), {
  emailLogo: '/logos/mail.svg',
  githubLogo: '/logos/github.svg',
  linkedinLogo: '/logos/linkedin.svg',
  size: 'md',
  encased: false
})

const iconSizeClass =
  props.size === 'sm' ? 'h-6 w-6' :
  props.size === 'lg' ? 'h-8 w-8' :
  'h-7 w-7' // md
</script>
