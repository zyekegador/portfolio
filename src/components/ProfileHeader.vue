<template>
  <div class="flex flex-col sm:flex-row items-start gap-6 mb-8">
    <div
      class="group w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-200 border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="relative w-full h-full">
        <img
          :src="`${base}pic1.png`"
          :alt="`${profile.name} profile photo`"
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        <img
          :src="`${base}pic2.png`"
          :alt="`${profile.name} profile photo alternate`"
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />
      </div>
    </div>

    <div class="flex-1 min-w-0">
      <div class="flex items-start justify-between gap-2">
        <h1
          class="flex items-center gap-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white truncate"
        >
          <span>{{ profile.name }}</span>
          <span
            v-if="profile.verified"
            title="Verified"
            class="flex items-center justify-center flex-shrink-0 ml-0.5"
          >
            <img
              :src="`${base}verified.png`"
              alt="Verified"
              class="w-5 h-5 sm:w-6 sm:h-6 object-contain -mt-0.5"
            />
          </span>
        </h1>

        <button
          @click="toggleTheme"
          class="p-2 rounded-lg border border-gray-200 bg-white dark:bg-gray-800"
          :title="isDark ? 'Switch to light' : 'Switch to dark'"
        >
          <SunIcon v-if="isDark" class="w-4 h-4 text-yellow-400" />
          <MoonIcon v-else class="w-4 h-4 text-gray-600" />
        </button>
      </div>

      <div
        class="flex items-center gap-2 mt-2 text-sm text-gray-600 dark:text-gray-300"
      >
        <MapPinIcon class="w-4 h-4 flex-shrink-0" />
        <span>{{ profile.location }}</span>
      </div>

      <p
        class="mt-1 text-base sm:text-lg font-semibold text-gray-900 dark:text-white"
      >
        {{ profile.title }}
      </p>

      <div class="mt-4 flex items-center gap-3 flex-wrap">
        <!-- Send Email -->
        <a
          :href="gmailCompose"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-700 dark:hover:bg-gray-100 transition active:scale-95 active:brightness-75"
        >
          <MailIcon class="w-4 h-4" />
          Send Email
        </a>

        <!-- Download Resume -->
        <a
          :href="resumeHref"
          :download="resumeFileName"
          class="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition active:scale-95 active:bg-gray-100 dark:active:bg-gray-600"
        >
          <DownloadIcon class="w-4 h-4" />
          Resume
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import {
  SunIcon,
  MoonIcon,
  MapPinIcon,
  MailIcon,
  DownloadIcon,
} from "lucide-vue-next";
import { profile } from "../data/portfolio.js";

const base = import.meta.env.BASE_URL;
const resumeFileName = "Gador_Zyeke_Aira_CV.pdf";
const resumeHref = computed(() => `${base}${resumeFileName}?v=20260629`);

const gmailCompose = computed(
  () =>
    `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(profile.contact.email)}`,
);

const isDark = ref(false);

onMounted(() => {
  try {
    const saved = localStorage.getItem("theme");
    isDark.value = saved
      ? saved === "dark"
      : document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", isDark.value);
  } catch {
    isDark.value = document.documentElement.classList.contains("dark");
  }
});

function toggleTheme() {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
  try {
    localStorage.setItem("theme", isDark.value ? "dark" : "light");
  } catch {
    /* silent */
  }
}
</script>
