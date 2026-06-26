<template>
  <div class="min-h-screen bg-gray-50 font-sans">
    <router-view />
    <ChatWidget />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import ChatWidget from "./components/ChatWidget.vue";
import Footer from "./components/Footer.vue";

function applyTheme(theme) {
  const el = document.documentElement;
  if (theme === "dark") el.classList.add("dark");
  else el.classList.remove("dark");
}

onMounted(() => {
  const saved = localStorage.getItem("theme");
  if (
    saved === "dark" ||
    (!saved &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    applyTheme("dark");
  } else {
    applyTheme("light");
  }
});
</script>
