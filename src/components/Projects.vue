<template>
  <div class="bg-white rounded-2xl border border-gray-200 p-5">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-base font-semibold text-gray-900">Projects</h2>
      <router-link
        to="/projects"
        class="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 transition-colors"
      >
        View All
        <ChevronRightIcon class="w-3.5 h-3.5" />
      </router-link>
    </div>

    <div class="grid grid-cols-2 gap-3">
      <div
        v-for="project in projects.slice(0, 4)"
        :key="project.id"
        @click="openModal(project)"
        class="rounded-xl overflow-hidden border border-gray-100 group cursor-pointer hover:shadow-lg transition-shadow"
      >
        <!-- Thumbnail -->
        <div v-if="project.image" class="aspect-[4/3] overflow-hidden">
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <div
          v-else
          class="aspect-[4/3] flex items-center justify-center relative overflow-hidden"
          :style="{ backgroundColor: project.bgColor }"
        >
          <div class="text-center px-3">
            <p
              class="text-sm font-bold leading-tight"
              :class="isDark(project.bgColor) ? 'text-white' : 'text-gray-900'"
            >
              {{ project.title }}
            </p>
          </div>
        </div>

        <!-- Info -->
        <div class="p-3 bg-white">
          <p class="text-xs font-semibold text-gray-900 truncate">
            {{ project.title }}
          </p>
          <p class="text-xs text-gray-500 mt-0.5 line-clamp-2 leading-snug">
            {{ project.description }}
          </p>
          <div class="mt-2">
            <a
              v-if="project.link"
              :href="`https://${project.link}`"
              target="_blank"
              @click.stop
              class="text-xs text-gray-500 hover:text-gray-900 underline transition-colors"
            >
              {{ project.link }}
            </a>
            <button
              v-else-if="project.caseStudy"
              @click.stop
              class="text-xs border border-gray-200 rounded-md px-2.5 py-1 text-gray-700 hover:bg-gray-50 transition-colors"
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ChevronRightIcon } from "lucide-vue-next";
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
