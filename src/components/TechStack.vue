<template>
  <div class="bg-white rounded-2xl border border-gray-200 p-5">
    <div class="flex items-center justify-between mb-4">
      <h2 class="flex items-center gap-2 text-base font-semibold text-gray-900">
        <SettingsIcon class="w-4 h-4 text-gray-600" />
        Tech Stack
      </h2>
      <router-link
        to="/tech-stack"
        class="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 transition-colors"
      >
        View All
        <ChevronRightIcon class="w-3.5 h-3.5" />
      </router-link>
    </div>

    <div class="space-y-4">
      <div>
        <p class="text-xs font-semibold text-gray-900 mb-2">Frontend</p>
        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="tag in techStack.frontend"
            :key="tag"
            class="px-2.5 py-1 text-xs border border-gray-200 rounded-md text-gray-700 bg-gray-50"
            >{{ tag }}</span
          >
        </div>
      </div>

      <div>
        <p class="text-xs font-semibold text-gray-900 mb-2">
          Backend &amp; Database
        </p>
        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="tag in techStack.backend.slice(0, 7)"
            :key="tag"
            class="px-2.5 py-1 text-xs border border-gray-200 rounded-md text-gray-700 bg-gray-50"
            >{{ tag }}</span
          >
        </div>
      </div>

      <div>
        <p class="text-xs font-semibold text-gray-900 mb-2">
          Tools &amp; Specialized
        </p>
        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="tag in techStack.tools"
            :key="tag"
            class="px-2.5 py-1 text-xs border border-gray-200 rounded-md text-gray-700 bg-gray-50"
            >{{ tag }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { SettingsIcon, ChevronRightIcon } from "lucide-vue-next";
import { techStack } from "../data/portfolio.js";
</script>
