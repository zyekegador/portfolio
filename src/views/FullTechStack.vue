<template>
  <main class="max-w-5xl mx-auto px-4 sm:px-6 py-8 pb-24">
    <BackToHome />

    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
      Full Tech Stack
    </h1>
    <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-8">
      Comprehensive list of tools and technologies I use.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div
        v-for="category in categories"
        :key="category.id"
        class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5"
      >
        <h2
          class="flex items-center gap-2 text-base font-semibold text-gray-900 dark:text-white mb-4"
        >
          <component
            :is="category.icon"
            class="w-4 h-4 text-gray-600 dark:text-gray-400"
          />
          {{ category.label }}
        </h2>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in sanitizedStack[category.dataKey]"
            :key="tag"
            class="px-3 py-1.5 text-sm border border-gray-200 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from "vue";
import {
  LayoutIcon,
  ServerIcon,
  TargetIcon,
  TrendingUpIcon,
} from "lucide-vue-next";
import BackToHome from "../components/BackToHome.vue";
import { techStack } from "../data/portfolio.js";

const categories = [
  { id: "frontend", label: "Frontend", icon: LayoutIcon, dataKey: "frontend" },
  {
    id: "backend",
    label: "Backend & Database",
    icon: ServerIcon,
    dataKey: "backend",
  },
  { id: "cms", label: "CMS & Marketing", icon: TargetIcon, dataKey: "cms" },
  { id: "data", label: "Data Analysis", icon: TrendingUpIcon, dataKey: "data" },
];

/**
 * Sanitize each tag string: strip any HTML, trim whitespace,
 * and drop blank or non-string entries so injected markup
 * can never reach the DOM even if portfolio.js is tampered with.
 */
function sanitizeTag(value) {
  if (typeof value !== "string") return null;
  const trimmed = value.replace(/<[^>]*>/g, "").trim();
  return trimmed.length > 0 ? trimmed : null;
}

function sanitizeList(list) {
  if (!Array.isArray(list)) return [];
  return list.map(sanitizeTag).filter(Boolean);
}

const sanitizedStack = computed(() => ({
  frontend: sanitizeList(techStack.frontend),
  backend: sanitizeList(techStack.backend),
  cms: sanitizeList(techStack.cms),
  data: sanitizeList(techStack.data),
}));
</script>
