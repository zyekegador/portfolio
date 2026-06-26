<template>
  <main class="max-w-5xl mx-auto px-4 sm:px-6 py-8 pb-24">
    <BackToHome />

    <h1 class="text-3xl font-bold text-gray-900">Selected Projects</h1>
    <p class="text-sm text-gray-500 mt-2 mb-8">
      A detailed gallery of my work in UI/UX and Development.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div
        v-for="project in projects"
        :key="project.id"
        @click="openModal(project)"
        class="bg-white rounded-2xl border border-gray-200 overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
      >
        <!-- Thumbnail -->
        <div v-if="project.image" class="h-52 overflow-hidden">
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <div
          v-else
          class="h-52 flex items-center justify-center relative overflow-hidden"
          :style="{ backgroundColor: project.bgColor }"
        >
          <p
            class="text-lg font-bold text-center px-4 leading-tight"
            :class="isDark(project.bgColor) ? 'text-white' : 'text-gray-900'"
          >
            {{ project.title }}
          </p>
        </div>

        <!-- Info -->
        <div class="p-5">
          <h3 class="text-base font-semibold text-gray-900">
            {{ project.title }}
          </h3>
          <p class="text-sm text-gray-500 mt-1 leading-relaxed">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-1.5 mt-3">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="px-2 py-0.5 text-xs border border-gray-200 rounded-md text-gray-600 bg-gray-50"
              >{{ tag }}</span
            >
          </div>

          <div class="mt-4">
            <a
              v-if="project.link"
              :href="`https://${project.link}`"
              target="_blank"
              @click.stop
              class="text-sm text-gray-500 hover:text-gray-900 underline transition-colors"
            >
              {{ project.link }}
            </a>
            <button
              v-else-if="project.caseStudy"
              @click.stop
              class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              View Case Study
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="selectedProject"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      @click="closeModal"
    >
      <div
        class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <!-- Close Button -->
        <div
          class="sticky top-0 flex items-center justify-between p-4 bg-white border-b border-gray-200"
        >
          <h2 class="text-xl font-bold text-gray-900">
            {{ selectedProject.title }}
          </h2>
          <button
            @click="closeModal"
            class="text-gray-500 hover:text-gray-900 text-2xl"
          >
            ×
          </button>
        </div>

        <!-- Modal Content -->
        <div class="p-6">
          <!-- Image -->
          <img
            v-if="selectedProject.image"
            :src="selectedProject.image"
            :alt="selectedProject.title"
            class="w-full rounded-xl mb-4 object-cover max-h-96"
          />
          <div
            v-else
            class="w-full h-64 rounded-xl mb-4 flex items-center justify-center"
            :style="{ backgroundColor: selectedProject.bgColor }"
          >
            <p
              class="text-2xl font-bold text-center px-6"
              :class="
                isDark(selectedProject.bgColor) ? 'text-white' : 'text-gray-900'
              "
            >
              {{ selectedProject.title }}
            </p>
          </div>

          <!-- Description -->
          <p class="text-gray-700 mb-4 leading-relaxed">
            {{ selectedProject.description }}
          </p>

          <!-- Tags -->
          <div v-if="selectedProject.tags" class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tag in selectedProject.tags"
              :key="tag"
              class="px-3 py-1 text-xs border border-gray-200 rounded-lg text-gray-600 bg-gray-50"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Links -->
          <div class="flex gap-3">
            <a
              v-if="selectedProject.link"
              :href="`https://${selectedProject.link}`"
              target="_blank"
              class="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Visit Project
            </a>
            <button
              v-else-if="selectedProject.caseStudy"
              class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import BackToHome from "../components/BackToHome.vue";
import { projects } from "../data/portfolio.js";

const selectedProject = ref(null);

const openModal = (project) => {
  selectedProject.value = project;
};

const closeModal = () => {
  selectedProject.value = null;
};

const isDark = (hex) => {
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.5;
};
</script>
