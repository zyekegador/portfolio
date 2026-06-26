<template>
  <div class="bg-white rounded-2xl border border-gray-200 p-5">
    <h2 class="text-base font-semibold text-gray-900 mb-5">Recommendations</h2>

    <div class="relative overflow-hidden">
      <transition name="fade" mode="out-in">
        <div :key="current" class="px-1">
          <p class="text-sm text-gray-700 italic leading-relaxed">
            "{{ recommendations[current].quote }}"
          </p>
          <p class="text-xs text-gray-500 mt-3 font-medium">
            — {{ recommendations[current].author }}
          </p>
        </div>
      </transition>

      <!-- Dots -->
      <div class="flex items-center gap-1.5 mt-5">
        <button
          v-for="(_, i) in recommendations"
          :key="i"
          @click="current = i"
          class="h-2 rounded-full transition-all duration-300"
          :class="i === current ? 'w-5 bg-gray-900' : 'w-2 bg-gray-300'"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { recommendations } from "../data/portfolio.js";

const current = ref(0);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
