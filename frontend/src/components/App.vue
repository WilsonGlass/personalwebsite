<template>
  <v-app>
    <v-main>
      <a href="#home" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-gray-800 text-white px-3 py-1 rounded">
        Skip to content
      </a>

      <div id="wrapper" class="flex flex-col min-h-screen bg-gray-900 text-gray-100">
        <MyNavBar />

        <main class="flex-1 w-full">
          <!-- ============== HERO ============== -->
          <section id="home" class="container mx-auto px-4 py-16 md:py-20 scroll-mt-24">
            <div class="flex flex-col-reverse md:flex-row items-start md:items-center gap-10">
              <!-- Left: intro + CTAs -->
              <div class="flex-1">
                <p class="text-xs tracking-wider text-gray-400 uppercase">Software Engineer • AI/ML</p>
                <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mt-2">Wilson Glass</h1>
                <p class="mt-3 max-w-2xl text-gray-300">
                  CS & Math @ Northeastern · AI SWE Intern @ Nasdaq · D-I coxswain. I build agentic/ML-driven systems.
                </p>

                <div class="mt-6 flex flex-wrap gap-3">
                  <a href="#projects" class="inline-flex items-center rounded-xl border border-gray-600 px-3 py-2 text-sm hover:bg-gray-800">
                    View projects
                  </a>
                  <a href="mailto:wilsonglass1@gmail.com" class="inline-flex items-center rounded-xl bg-white/10 hover:bg-white/20 px-3 py-2 text-sm">
                    Email me
                  </a>
                  <a href="https://github.com/WilsonGlass" target="_blank" rel="noopener noreferrer"
                     class="inline-flex items-center rounded-xl border border-gray-600 px-3 py-2 text-sm hover:bg-gray-800">
                    GitHub
                  </a>
                </div>
              </div>

              <!-- Right: headshot (replace src below) -->
              <div class="w-full md:w-[320px]">
                <div class="relative rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-gradient-to-tr from-gray-800 to-gray-700">
                  <img
                    :src="headshotUrl"
                    alt="headshot"
                    class="w-full h-full object-cover aspect-[4/5]"
                    loading="eager"
                  />
                </div>
                <!-- optional caption -->
              </div>
            </div>
          </section>

          <!-- ============== PROJECTS ============== -->
          <section id="projects" class="container mx-auto px-4 py-14 scroll-mt-24">
            <h2 class="text-xl font-mono text-green-400 mb-2">$ projects</h2>
            <p class="text-gray-300 mb-6">Selected work (no PGVector here — that’s work experience).</p>

            <div class="grid md:grid-cols-2 gap-6">
              <!-- Q -->
              <article class="rounded-2xl bg-gray-800/70 border border-gray-700 p-5 shadow">
                <h3 class="text-lg font-semibold">Q — Networked Board Game &amp; AI Players</h3>
                <p class="mt-2 text-sm text-gray-300">
                  Game management system for remote AI players: referee supervises turns, eliminates cheaters, emits rankings; observers can watch.
                </p>
                <ul class="mt-3 space-y-1 text-sm text-gray-300 list-disc list-inside">
                  <li>Player–referee interface covers setup, turns, and end-game reporting</li>
                  <li>JSON over TCP; comms sign-up vs logical sign-up via manager</li>
                  <li>Non-functional: player/observer bugs cannot crash servers</li>
                </ul>
                <div class="mt-4 flex gap-3">
                  <a
                    href="https://github.com/WilsonGlass/Q"
                    target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center rounded-xl border border-gray-600 px-3 py-2 text-sm hover:bg-gray-700"
                  >View Repo</a>
                </div>
              </article>

              <!-- Explainers -->
              <article class="rounded-2xl bg-gray-800/70 border border-gray-700 p-5 shadow">
                <h3 class="text-lg font-semibold">Explainers — L2X vs SHAP on MNIST</h3>
                <p class="mt-2 text-sm text-gray-300">
                  Empirical comparison of two post-hoc methods on a logistic-regression baseline: what pixels matter and why.
                </p>
                <ul class="mt-3 space-y-1 text-sm text-gray-300 list-disc list-inside">
                  <li>Dataset: MNIST (70k, 28×28)</li>
                  <li>L2X: MI-maximizing subset selector (top-K)</li>
                  <li>SHAP: game-theoretic per-pixel attributions</li>
                  <li>Finding: SHAP favors ink; L2X often uses informative “absence”</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/WilsonGlass/Explainers/blob/master/report.pdf"
                    target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center rounded-xl border border-gray-600 px-3 py-2 text-sm hover:bg-gray-700"
                  >Read Report (PDF)</a>
                  <a
                    href="https://github.com/WilsonGlass/Explainers"
                    target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center rounded-xl border border-gray-600 px-3 py-2 text-sm hover:bg-gray-700"
                  >View Repo</a>
                </div>
              </article>
            </div>
          </section>

          <!-- ============== EXPERIENCE ============== -->
          <section id="experience" class="container mx-auto px-4 py-14 scroll-mt-24">
            <h2 class="text-xl font-mono text-green-400 mb-6">$ experience</h2>

            <div class="space-y-6">
              <article v-for="(job, i) in experience" :key="i" class="rounded-xl border border-white/10 p-5 bg-white/5">
                <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 class="font-semibold text-gray-100">
                      {{ job.role }}<span class="text-gray-400"> · {{ job.company }}</span>
                    </h3>
                    <div class="text-xs text-gray-400">
                      {{ job.location }} · {{ job.dates }}
                      <span v-if="job.type" class="ml-2 inline-block rounded bg-white/10 px-2 py-0.5">
                        {{ job.type }}
                      </span>
                    </div>
                  </div>
                </div>

                <ul class="mt-3 text-sm text-gray-300 space-y-1 list-disc list-inside">
                  <li v-for="(b, j) in job.bullets" :key="j">{{ b }}</li>
                </ul>

                <div v-if="job.tech?.length" class="mt-3 flex flex-wrap gap-2 text-xs">
                  <span v-for="t in job.tech" :key="t" class="px-2 py-0.5 rounded bg-white/10">{{ t }}</span>
                </div>
              </article>
            </div>
          </section>

          <!-- ============== SKILLS (logo wall) ============== -->
          <section id="skills" class="container mx-auto px-4 py-14 scroll-mt-24">
            <h2 class="text-xl font-mono text-green-400 mb-4">$ skills</h2>
            <p class="text-sm text-gray-400 mb-4">Technologies I use (logos only):</p>
            <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center">
              <div
                v-for="logo in logos"
                :key="logo.name"
                class="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-3 hover:bg-white/10 transition"
              >
                <img
                  :src="logo.src"
                  :alt="logo.name"
                  :title="logo.name"
                  class="h-8 md:h-10 w-auto opacity-90"
                  loading="lazy"
                />
              </div>
            </div>
            <!-- Add your SVG/PNG files to /public/logos; see script for file names -->
          </section>

          <!-- ============== SPORT (as requested) ============== -->
          <section id="sport" class="container mx-auto px-4 py-14 scroll-mt-24">
            <h2 class="text-xl font-mono text-green-400 mb-6">$ sport</h2>
            <div class="rounded-xl border border-white/10 p-5 bg-white/5">
              <h3 class="font-semibold">Division I Coxing — Northeastern Men’s Rowing</h3>
              <p class="text-sm text-gray-300 mt-1">
                After transferring from the University of San Diego, where I was also on their Division I rowing team,
                I joined Northeastern Men's Crew. I had the opportunity to cox world-class athletes and gain a great deal
                of knowledge about communication and leadership. I do believe that my career as a coxswain
                translates very well to my professional experiences leading teams and explaining technical concepts.
              </p>
            </div>
          </section>

          <!-- ============== EDUCATION ============== -->
          <section id="education" class="container mx-auto px-4 py-14 scroll-mt-24">
            <h2 class="text-xl font-mono text-green-400 mb-2">$ education</h2>
            <p class="text-sm text-gray-400 mb-6">
              Northeastern University — B.S. Computer Science & Mathematics · Boston, MA · May 2025 · GPA 3.52
            </p>

            <div class="rounded-xl border border-white/10 bg-white/5">
              <button
                @click="coursesOpen = !coursesOpen"
                class="w-full flex items-center justify-between p-4 text-left"
                :aria-expanded="coursesOpen ? 'true' : 'false'"
              >
                <span class="text-xs uppercase tracking-wide text-gray-400">Relevant Courses</span>
                <svg class="h-4 w-4 text-gray-400 transition-transform duration-200" :class="coursesOpen ? 'rotate-180' : ''" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </button>

              <div class="border-t border-white/10 overflow-hidden transition-all duration-300" :class="coursesOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'">
                <ul class="divide-y divide-white/10">
                  <li v-for="c in courses" :key="c.code">
                    <component
                      :is="c.url ? 'a' : 'div'"
                      :href="c.url || undefined"
                      v-bind="c.url ? { target:'_blank', rel:'noopener noreferrer' } : {}"
                      class="block p-4 transition-colors"
                      :class="c.url ? 'hover:bg-white/5' : 'opacity-90 cursor-default'"
                    >
                      <div class="flex items-start justify-between gap-4">
                        <div class="min-w-0">
                          <div class="text-xs text-gray-400">{{ c.code }}</div>
                          <div class="font-semibold text-gray-100 truncate">{{ c.title }}</div>
                          <div class="mt-2 flex flex-wrap gap-2">
                            <span v-for="t in c.tags" :key="t" class="px-2 py-0.5 rounded-md text-[11px] bg-white/10 text-gray-200">{{ t }}</span>
                          </div>
                          <p v-if="c.note" class="mt-2 text-xs text-gray-400">{{ c.note }}</p>
                        </div>
                        <svg v-if="c.url" class="shrink-0 h-4 w-4 text-gray-400 mt-1" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M7 17l10-10M17 7h-6m6 0v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                      </div>
                    </component>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <!-- ============== CONTACT ============== -->
          <section id="contact" class="container mx-auto px-4 pb-16 scroll-mt-24">
            <div class="rounded-2xl bg-gradient-to-r from-gray-800/80 to-gray-700/60 border border-gray-700 p-6 md:flex md:items-center md:justify-between">
              <div>
                <h2 class="text-lg font-semibold">Let’s talk</h2>
                <p class="text-sm text-gray-300 mt-1">Open to AI/ML and systems roles. Happy to share code, design docs, and experiment logs.</p>
              </div>
              <div class="mt-4 md:mt-0 flex gap-3">
                <a href="mailto:wilsonglass1@gmail.com" class="inline-flex items-center rounded-xl bg-white/10 hover:bg-white/20 px-3 py-2 text-sm">Email</a>
                <a href="https://github.com/WilsonGlass" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-xl border border-gray-600 px-3 py-2 text-sm hover:bg-gray-800">GitHub</a>
                <a href="#projects" class="inline-flex items-center rounded-xl border border-gray-600 px-3 py-2 text-sm hover:bg-gray-800">Projects</a>
              </div>
            </div>
          </section>
        </main>

        <footer class="container mx-auto px-4 pb-8 text-xs text-gray-500">
          © {{ currentYear }} Wilson Glass
        </footer>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MyNavBar from '@/components/MyNavBar.vue'

const headshotUrl = '/headshot.jpg'

// ===== Experience =====
const experience = [
  {
    company: 'Nasdaq',
    role: 'AI Software Engineer Intern — Nasdaq Labs',
    location: 'Boston, MA',
    type: 'Internship',
    dates: 'Jun 2025 – Aug 2025',
    bullets: [
      'Built a RAG multi-agent pipeline to automate product development workflows for the GENAI platform.',
      'Prototyped a multi-agent RL environment with a research group; modeled tasks as MDPs to validate feasibility.'
    ],
    tech: []
  },
  {
    company: 'GALT Aero',
    role: 'Software Engineering Intern',
    location: 'San Diego, CA',
    type: 'Internship',
    dates: 'Feb 2023 – Aug 2023',
    bullets: [
      'Prototyped SkyTower II features that helped secure a shortlist for a $150M DoD unmanned-systems contract.',
      'Built a Python/pytest suite with 100+ checks per merge; automated Jenkins emails and cut manual QA time ~80%.',
      'Shipped an operator-feedback microservice (Autobahn + Redis) used at live flight-test events.'
    ],
    tech: []
  },
  {
    company: 'GALT Aero',
    role: 'Software Engineering Intern',
    location: 'San Diego, CA',
    type: 'Internship',
    dates: 'Jun 2022 – Aug 2022',
    bullets: [
      'Integrated, tested, and deployed software to aircraft pods; validated features on production hardware.',
      'Supported an $8.4M prototype UAV pod; wrote Selenium front-end tests and Ansible build playbooks.',
      'Improved a custom AWS speech-recognition model for pilot voice commands.'
    ],
    tech: []
  }
]

// ===== Courses =====
const coursesOpen = ref(false)
const courses = [
  { code: 'MATH 4571', title: 'Advanced Linear Algebra', url: 'https://dummit.cos.northeastern.edu/teaching_sp25_4571', tags: ['Vector Spaces', 'Lin. Transforms', 'Inner Products', 'Eigen/Diag', 'Jordan Form', 'SVD'] },
  { code: 'CS 4500', title: 'Software Development', url: 'https://course.ccs.neu.edu/cs4500f23/', tags: ['Client-Server', 'API Creation', 'Remote Proxy', 'Protocol Design', 'TDD'] },
  { code: 'CS 4100', title: 'Artificial Intelligence', url: 'https://www.ccs.neu.edu/home/camato/4100summaryS25.html', tags: ['Adversarial', 'MDPs', 'Bayes Nets', 'HMMs', 'RL'] },
  { code: 'CS 3000', title: 'Algorithms', url: 'http://behnezhad.com/cs3000-spr24/', tags: ['Greedy', 'DP', 'Graphs'] },
  { code: 'MATH 3175', title: 'Group Theory', url: null, tags: ['Abstract Algebra'], note: 'No public course page available' },
  { code: 'MATH 4581', title: 'Statistics and Stochastic Processes', url: null, tags: ['Probability', 'Markov', 'Inference'] },
  { code: 'CS 3800', title: 'Theory of Computation', url: null, tags: ['Automata', 'Turing', 'Decidability', 'Reduction', 'P vs NP'] }
]

// ===== Skills (logo wall) =====
// Place matching SVG/PNG files in /public/logos (e.g., /public/logos/python.svg)
const logos = [
  { name: 'Python',        src: '/logos/python.png' },
  { name: 'PyTorch',       src: '/logos/pytorch.png' },
  { name: 'Flask',         src: '/logos/flask.png' },
  { name: 'PostgreSQL',    src: '/logos/postgres.svg' },
  { name: 'Redis',         src: '/logos/redis.png' },
  { name: 'Docker',        src: '/logos/docker.png' },
  { name: 'Linux',         src: '/logos/linux.png' },
  { name: 'Vue',           src: '/logos/vue.png' },
  { name: 'TypeScript',    src: '/logos/typescript.png' },
  { name: 'TailwindCSS',   src: '/logos/tailwind.png' },
  { name: 'Jenkins',       src: '/logos/jenkins.png' },
  { name: 'Ansible',       src: '/logos/ansible.png' },
  { name: 'Node.js',       src: '/logos/node.png' }
]

const currentYear = new Date().getFullYear()
</script>

<style scoped>
/* Tailwind handles layout; no extra CSS required */
</style>
