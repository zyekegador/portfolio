<template>
  <!-- Floating button -->
  <button
    @click="open = true"
    class="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-gray-900 text-white text-sm font-medium rounded-full shadow-lg hover:bg-gray-800 transition-all active:scale-95"
  >
    <MessageCircleIcon class="w-4 h-4" />
    <span>Chat with Zyeke</span>
  </button>

  <!-- Popup -->
  <Teleport to="body">
    <transition name="popup">
      <div v-if="open" class="fixed bottom-20 right-6 z-50 w-72">
        <!-- Card -->
        <div
          class="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
        >
          <!-- Accent bar -->
          <div
            class="h-1 w-full bg-gradient-to-r from-gray-700 via-gray-500 to-gray-300"
          />

          <!-- Header -->
          <div class="flex items-center justify-between px-4 pt-3 pb-2">
            <div class="flex items-center gap-2">
              <div class="relative">
                <div
                  class="w-7 h-7 rounded-full bg-gray-900 dark:bg-gray-100 flex items-center justify-center"
                >
                  <MessageCircleIcon
                    class="w-3.5 h-3.5 text-white dark:text-gray-900"
                  />
                </div>
                <span
                  class="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 border-2 border-white dark:border-gray-900 rounded-full"
                />
              </div>
              <div>
                <p
                  class="text-xs font-semibold text-gray-900 dark:text-white leading-none"
                >
                  Zyeke Gador
                </p>
                <p class="text-[10px] text-gray-400 mt-0.5">
                  Usually replies instantly
                </p>
              </div>
            </div>
            <button
              @click="open = false"
              class="w-6 h-6 flex items-center justify-center rounded-full text-gray-300 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <XIcon class="w-3.5 h-3.5" />
            </button>
          </div>

          <!-- Divider -->
          <div class="mx-4 border-t border-gray-100 dark:border-gray-800" />

          <!-- Body -->
          <div class="px-4 py-3 space-y-2.5">
            <p
              class="text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed"
            >
              Drop a message — I'll get back to you asap. 👋
            </p>

            <input
              v-model="form.name"
              type="text"
              placeholder="Your name"
              maxlength="100"
              class="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-gray-600 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors"
            />

            <textarea
              v-model="form.message"
              placeholder="Your message..."
              maxlength="500"
              rows="3"
              class="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-gray-600 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors resize-none"
            />

            <p v-if="error" class="text-[10px] text-red-400">{{ error }}</p>
          </div>

          <!-- Footer -->
          <div class="px-4 pb-4 flex gap-2">
            <a
              :href="gmailLink"
              target="_blank"
              rel="noopener noreferrer"
              @click="handleSend"
              class="flex-1 inline-flex items-center justify-center gap-1.5 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-semibold rounded-lg hover:bg-gray-700 dark:hover:bg-gray-100 active:scale-95 transition"
            >
              <MailIcon class="w-3.5 h-3.5" />
              Send Email
            </a>
            <a
              :href="telegramLink"
              target="_blank"
              rel="noopener noreferrer"
              @click="handleSend"
              class="inline-flex items-center justify-center gap-1.5 px-3 py-2 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-95 transition"
            >
              <SendIcon class="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <!-- Tail -->
        <div class="flex justify-end pr-5">
          <div
            class="w-3 h-3 bg-white dark:bg-gray-900 border-r border-b border-gray-100 dark:border-gray-800 rotate-45 -mt-1.5"
          />
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref, computed } from "vue";
import { MessageCircleIcon, XIcon, MailIcon, SendIcon } from "lucide-vue-next";
import { profile } from "../data/portfolio.js";

const open = ref(false);
const error = ref("");
const form = ref({ name: "", message: "" });

function sanitize(val) {
  return val.replace(/<[^>]*>/g, "").trim();
}

function validate() {
  const name = sanitize(form.value.name);
  const message = sanitize(form.value.message);
  if (!name) {
    error.value = "Please enter your name.";
    return null;
  }
  if (!message) {
    error.value = "Please write a message.";
    return null;
  }
  error.value = "";
  return { name, message };
}

const gmailLink = computed(() => {
  const name = sanitize(form.value.name);
  const message = sanitize(form.value.message);
  return `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(profile.contact.email)}&su=${encodeURIComponent(`Message from ${name}`)}&body=${encodeURIComponent(`Hi Zyeke,\n\nI'm ${name}.\n\n${message}`)}`;
});

const telegramLink = computed(() => {
  const name = sanitize(form.value.name);
  const message = sanitize(form.value.message);
  return `https://t.me/+639660733911?text=${encodeURIComponent(`Hi Zyeke! I'm ${name}.\n\n${message}`)}`;
});

function handleSend(e) {
  if (!validate()) e.preventDefault();
}
</script>

<style scoped>
.popup-enter-active {
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.popup-leave-active {
  transition: all 0.15s ease-in;
}
.popup-enter-from {
  opacity: 0;
  transform: translateY(12px) scale(0.95);
}
.popup-leave-to {
  opacity: 0;
  transform: translateY(8px) scale(0.97);
}
</style>
