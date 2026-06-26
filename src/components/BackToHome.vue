<template>
  <router-link
    to="/"
    class="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-6 group"
  >
    <ArrowLeftIcon
      class="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
    />
    Back to Home
  </router-link>
</template>

<script setup>
import { ArrowLeftIcon } from "lucide-vue-next";
</script>
