<template>
  <div class="bg-white rounded-2xl border border-gray-200 p-5">
    <h2
      class="flex items-center gap-2 text-base font-semibold text-gray-900 mb-3"
    >
      <BookOpenIcon class="w-4 h-4 text-gray-600" />
      A Life Away From Screens
    </h2>
    <p class="text-sm text-gray-600 leading-relaxed mb-4">
      {{ profile.beyond }}
    </p>

    <!-- Carousel Slideshow -->
    <div class="relative group">
      <div
        class="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center"
      >
        <img
          :src="beyondImages[currentIndex].image"
          :alt="beyondImages[currentIndex].alt"
          @click="openModal(beyondImages[currentIndex])"
          class="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
        />
      </div>

      <!-- Navigation Buttons -->
      <button
        @click="prevImage"
        class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <svg
          class="w-4 h-4 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        @click="nextImage"
        class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <svg
          class="w-4 h-4 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <!-- Indicators -->
      <div class="flex justify-center gap-2 mt-3">
        <button
          v-for="(_, index) in beyondImages"
          :key="index"
          @click="currentIndex = index"
          :class="[
            'h-2 rounded-full transition-all',
            currentIndex === index ? 'bg-gray-800 w-6' : 'bg-gray-300 w-2',
          ]"
        />
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="selectedImage"
      class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      @click="closeModal"
    >
      <div class="relative max-w-2xl w-full" @click.stop>
        <img
          :src="selectedImage.image"
          :alt="selectedImage.alt"
          class="w-full rounded-lg"
        />

        <button
          @click="closeModal"
          class="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 text-gray-900"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { BookOpenIcon } from "lucide-vue-next";
import { profile, beyondImages } from "../data/portfolio.js";

const currentIndex = ref(0);
const selectedImage = ref(null);
let autoplayInterval = null;

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % beyondImages.length;
};

const prevImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + beyondImages.length) % beyondImages.length;
};

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextImage();
  }, 4000); // Change image every 4 seconds
};

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
};

const openModal = (image) => {
  selectedImage.value = image;
  stopAutoplay();
};

const closeModal = () => {
  selectedImage.value = null;
  startAutoplay();
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>
