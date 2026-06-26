<template>
  <div class="bg-white rounded-2xl border border-gray-200 p-5">
    <h2
      class="flex items-center gap-2 text-base font-semibold text-gray-900 mb-4"
    >
      <GraduationCapIcon class="w-4 h-4 text-gray-600" />
      Education
    </h2>
    <div class="space-y-4">
      <div v-for="(edu, i) in education" :key="i">
        <p class="text-sm font-semibold text-gray-900">{{ edu.degree }}</p>
        <p class="text-sm font-semibold text-gray-900">{{ edu.strand }}</p>
        <p class="text-sm text-gray-500 mt-0.5">{{ edu.school }}</p>
        <p class="text-sm text-gray-400 mt-0.5">{{ edu.years }}</p>
        <p
          v-if="edu.honors"
          class="text-sm text-gray-400 dark:text-gray-400 mt-0.5"
        >
          {{ edu.honors }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { GraduationCapIcon } from "lucide-vue-next";
import { education } from "../data/portfolio.js";
</script>
