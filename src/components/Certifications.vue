<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5"
  >
    <div class="flex items-center justify-between mb-4">
      <h2
        class="flex items-center gap-2 text-base font-semibold text-gray-900 dark:text-white"
      >
        <AwardIcon class="w-4 h-4 text-gray-600 dark:text-gray-400" />
        Certifications
      </h2>
      <router-link
        to="/certifications"
        class="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
      >
        View All
        <ChevronRightIcon class="w-3.5 h-3.5" />
      </router-link>
    </div>

    <div class="space-y-2">
      <div
        v-for="cert in certifications.slice(0, 3)"
        :key="cert.id"
        class="px-3 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600"
      >
        <p class="text-sm font-medium text-gray-900 dark:text-white">
          {{ cert.title }}
        </p>
        <p
          v-if="cert.year"
          class="text-xs text-gray-500 dark:text-gray-400 mt-0.5"
        >
          {{ cert.year }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { AwardIcon, ChevronRightIcon } from "lucide-vue-next";
import { certifications } from "../data/portfolio.js";
</script>
