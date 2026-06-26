<template>
  <main class="max-w-5xl mx-auto px-4 sm:px-6 py-8 pb-24">
    <BackToHome />

    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
      Certifications
    </h1>
    <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-8">
      Professional credentials and specialized training in cybersecurity, UX
      design, AI, and software development.
    </p>

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div
        v-for="(cert, index) in paginated"
        :key="cert.id"
        class="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-500"
        @click="openAt((page - 1) * PER_PAGE + index)"
      >
        <!-- Image -->
        <div class="w-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
          <img
            :src="cert.image"
            :alt="cert.title"
            class="w-full object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <!-- Info -->
        <div class="p-4 flex items-start justify-between gap-2">
          <div>
            <h3
              class="text-base font-semibold text-gray-900 dark:text-white leading-snug"
            >
              {{ cert.title }}
            </h3>
            <p
              v-if="cert.year"
              class="text-sm text-gray-500 dark:text-gray-400 mt-0.5"
            >
              {{ cert.year }}
            </p>
          </div>
          <div
            class="flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <EyeIcon class="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="flex items-center justify-center gap-2 mt-10">
      <button
        @click="prev"
        :disabled="page === 1"
        class="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeftIcon class="w-4 h-4" />
      </button>

      <button
        v-for="p in totalPages"
        :key="p"
        @click="page = p"
        class="w-9 h-9 flex items-center justify-center rounded-lg border text-sm font-medium transition-colors"
        :class="
          p === page
            ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900 dark:border-white'
            : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
        "
      >
        {{ p }}
      </button>

      <button
        @click="next"
        :disabled="page === totalPages"
        class="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRightIcon class="w-4 h-4" />
      </button>
    </div>

    <p class="text-center text-xs text-gray-400 dark:text-gray-500 mt-3">
      Showing {{ paginated.length }} of
      {{ certifications.length }} certifications
    </p>

    <!-- Lightbox -->
    <Teleport to="body">
      <div
        v-if="lightboxIndex !== null"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        @click.self="lightboxIndex = null"
        @keydown.esc="lightboxIndex = null"
        @keydown.left="swipePrev"
        @keydown.right="swipeNext"
        tabindex="0"
        ref="lightboxEl"
      >
        <!-- Close -->
        <button
          @click="lightboxIndex = null"
          class="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <XIcon class="w-5 h-5" />
        </button>

        <!-- Counter -->
        <div
          class="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium"
        >
          {{ lightboxIndex + 1 }} / {{ certifications.length }}
        </div>

        <!-- Prev arrow -->
        <button
          @click="swipePrev"
          :disabled="lightboxIndex === 0"
          class="absolute left-3 sm:left-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeftIcon class="w-5 h-5" />
        </button>

        <!-- Image -->
        <div
          class="mx-16 sm:mx-24 max-w-2xl w-full"
          @touchstart="onTouchStart"
          @touchend="onTouchEnd"
        >
          <transition :name="slideDir" mode="out-in">
            <div
              :key="lightboxIndex"
              class="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                :src="certifications[lightboxIndex].image"
                :alt="certifications[lightboxIndex].title"
                class="w-full object-contain"
              />
              <div class="p-4 border-t border-gray-100 dark:border-gray-700">
                <h3
                  class="text-base font-semibold text-gray-900 dark:text-white"
                >
                  {{ certifications[lightboxIndex].title }}
                </h3>
                <p
                  v-if="certifications[lightboxIndex].year"
                  class="text-sm text-gray-500 dark:text-gray-400 mt-0.5"
                >
                  {{ certifications[lightboxIndex].year }}
                </p>
              </div>
            </div>
          </transition>
        </div>

        <!-- Next arrow -->
        <button
          @click="swipeNext"
          :disabled="lightboxIndex === certifications.length - 1"
          class="absolute right-3 sm:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRightIcon class="w-5 h-5" />
        </button>

        <!-- Dot indicators -->
        <div
          class="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5"
        >
          <button
            v-for="(_, i) in certifications"
            :key="i"
            @click="goTo(i)"
            class="rounded-full transition-all duration-200"
            :class="
              i === lightboxIndex
                ? 'w-5 h-1.5 bg-white'
                : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
            "
          />
        </div>
      </div>
    </Teleport>
  </main>
</template>

<script setup>
import { ref, computed, nextTick } from "vue";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EyeIcon,
  XIcon,
} from "lucide-vue-next";
import BackToHome from "../components/BackToHome.vue";
import { certifications } from "../data/portfolio.js";

// ── Pagination ───────────────────────────────────────────────────────────────
const PER_PAGE = 4;
const page = ref(1);
const totalPages = computed(() => Math.ceil(certifications.length / PER_PAGE));
const paginated = computed(() => {
  const start = (page.value - 1) * PER_PAGE;
  return certifications.slice(start, start + PER_PAGE);
});
function prev() {
  if (page.value > 1) page.value--;
}
function next() {
  if (page.value < totalPages.value) page.value++;
}

// ── Lightbox ─────────────────────────────────────────────────────────────────
const lightboxIndex = ref(null);
const slideDir = ref("slide-left");
const lightboxEl = ref(null);

function openAt(index) {
  lightboxIndex.value = index;
  nextTick(() => lightboxEl.value?.focus());
}

function goTo(index) {
  slideDir.value = index > lightboxIndex.value ? "slide-left" : "slide-right";
  lightboxIndex.value = index;
}

function swipePrev() {
  if (lightboxIndex.value > 0) {
    slideDir.value = "slide-right";
    lightboxIndex.value--;
  }
}

function swipeNext() {
  if (lightboxIndex.value < certifications.length - 1) {
    slideDir.value = "slide-left";
    lightboxIndex.value++;
  }
}

// ── Touch swipe ──────────────────────────────────────────────────────────────
let touchStartX = 0;
function onTouchStart(e) {
  touchStartX = e.touches[0].clientX;
}
function onTouchEnd(e) {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) diff > 0 ? swipeNext() : swipePrev();
}
</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.25s ease;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(40px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
</style>
