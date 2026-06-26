<template>
  <div class="bg-white rounded-2xl border border-gray-200 p-5">
    <h2
      class="flex items-center gap-2 text-base font-semibold text-gray-900 mb-5"
    >
      <BriefcaseIcon class="w-4 h-4 text-gray-600" />
      Experience
    </h2>

    <div class="space-y-5">
      <div
        v-for="(exp, i) in experience"
        :key="i"
        class="flex items-start gap-3"
      >
        <!-- Bullet -->
        <div class="mt-1 flex-shrink-0">
          <div v-if="exp.active" class="w-2.5 h-2.5 rounded-full bg-gray-900" />
          <div
            v-else
            class="w-2.5 h-2.5 rounded-full border-2 border-gray-400"
          />
        </div>

        <!-- Content -->
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between gap-2 flex-wrap">
            <p class="text-sm font-semibold text-gray-900 leading-snug">
              {{ exp.title }}
            </p>
            <span
              class="text-xs text-gray-500 whitespace-nowrap flex-shrink-0"
              >{{ exp.period }}</span
            >
          </div>
          <p class="text-xs text-gray-500 mt-0.5">{{ exp.company }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BriefcaseIcon } from "lucide-vue-next";
import { experience } from "../data/portfolio.js";
</script>
