<template>
  <div class="bg-white rounded-2xl border border-gray-200 p-5">
    <h2
      class="flex items-center gap-2 text-base font-semibold text-gray-900 mb-4"
    >
      <InfoIcon class="w-4 h-4 text-gray-600" />
      About Me
    </h2>
    <div class="space-y-3">
      <p
        v-for="(para, i) in profile.about"
        :key="i"
        class="text-sm text-gray-600 leading-relaxed"
      >
        {{ para }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { InfoIcon } from "lucide-vue-next";
import { profile } from "../data/portfolio.js";
</script>
