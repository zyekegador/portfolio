<template>
  <main class="max-w-5xl mx-auto px-4 sm:px-6 py-8 pb-24">
    <!-- Profile Header -->
    <ProfileHeader />

    <!-- Two-column layout -->
    <div class="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-5">
      <!-- Left Column -->
      <div class="space-y-5">
        <AboutMe />
        <Education />
        <TechStack />
        <Certifications />
        <BeyondScreen />
      </div>

      <!-- Right Column -->
      <div class="space-y-5">
        <Projects />
        <Experience />
        <Recommendations />
        <Contact />
      </div>
    </div>
  </main>
</template>

<script setup>
import ProfileHeader from "../components/ProfileHeader.vue";
import AboutMe from "../components/AboutMe.vue";
import Education from "../components/Education.vue";
import TechStack from "../components/TechStack.vue";
import Certifications from "../components/Certifications.vue";
import BeyondScreen from "../components/BeyondScreen.vue";
import Experience from "../components/Experience.vue";
import Projects from "../components/Projects.vue";
import Recommendations from "../components/Recommendations.vue";
import Contact from "../components/Contact.vue";
</script>
