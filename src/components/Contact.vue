<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5"
  >
    <div class="flex flex-col sm:flex-row gap-6">
      <!-- Left -->
      <div class="flex-1">
        <h2 class="text-xl font-bold text-gray-900 dark:text-white">
          Let's work <span class="text-gray-400">together.</span>
        </h2>
        <p
          class="text-sm text-gray-500 dark:text-gray-400 mt-3 leading-relaxed"
        >
          Available for system and web development freelance projects, with
          added support in UI/UX design, database management, Google Sheets
          automation, and technical documentation.
        </p>

        <div class="mt-4">
          <p
            class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3"
          >
            Follow Me
          </p>
          <div class="flex items-center gap-3 flex-wrap">
            <a
              v-for="link in socialLinks"
              :key="link.title"
              :href="link.href"
              :title="link.title"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors flex-shrink-0"
            >
              <!-- Lucide icons -->
              <component v-if="link.icon" :is="link.icon" class="w-4 h-4" />
              <!-- Custom SVG icons (Instagram / Facebook) -->
              <svg
                v-else-if="link.svg"
                v-html="link.svg"
                class="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              />
            </a>
          </div>
        </div>
      </div>

      <!-- Right -->
      <div class="flex flex-col gap-2 w-full sm:w-64">
        <p
          class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1"
        >
          Get in Touch
        </p>

        <!-- Email card → opens Gmail compose in browser -->
        <a
          :href="GMAIL_COMPOSE"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer min-w-0"
        >
          <MailIcon
            class="w-4 h-4 text-gray-500 dark:text-gray-400 flex-shrink-0 mt-0.5"
          />
          <div class="min-w-0">
            <p
              class="text-xs text-gray-400 uppercase font-semibold tracking-wider"
            >
              Email
            </p>
            <p
              class="text-sm text-gray-900 dark:text-white font-medium truncate"
            >
              {{ EMAIL }}
            </p>
          </div>
        </a>

        <!-- Phone & Telegram cards -->
        <a
          v-for="card in contactCards"
          :key="card.label"
          :href="card.href"
          v-bind="
            card.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {}
          "
          class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer min-w-0"
        >
          <component
            :is="card.icon"
            class="w-4 h-4 text-gray-500 dark:text-gray-400 flex-shrink-0 mt-0.5"
          />
          <div class="min-w-0">
            <p
              class="text-xs text-gray-400 uppercase font-semibold tracking-wider"
            >
              {{ card.label }}
            </p>
            <p
              class="text-sm text-gray-900 dark:text-white font-medium truncate"
            >
              {{ card.value }}
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  MailIcon,
  PhoneIcon,
  SendIcon,
  LinkedinIcon,
  GithubIcon,
} from "lucide-vue-next";
import { profile } from "../data/portfolio.js";

// ── Security helpers ────────────────────────────────────────────────────────

function safeUrl(url) {
  if (typeof url !== "string") return "#";
  const trimmed = url.trim();
  return /^https?:\/\//i.test(trimmed) ? trimmed : "#";
}

function safeTel(number) {
  if (typeof number !== "string") return "#";
  const digits = number.trim().replace(/\s+/g, "");
  return /^\+?[\d\-]{7,15}$/.test(digits) ? `tel:${digits}` : "#";
}

// Convert PH local 09XXXXXXXXX → https://t.me/+639XXXXXXXXX
function toTelegramLink(number) {
  if (typeof number !== "string") return "#";
  const digits = number.trim().replace(/\s+/g, "");
  return /^09\d{9}$/.test(digits) ? `https://t.me/+63${digits.slice(1)}` : "#";
}

// ── Constants ───────────────────────────────────────────────────────────────

const EMAIL = "gadorzyekeaira@gmail.com";
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&to=${EMAIL}`;
const PHONE = "09660733911";

// ── Social links ─────────────────────────────────────────────────────────────
// Lucide doesn't have Instagram/Facebook — using minimal brand-accurate SVG paths.

const socialLinks = [
  {
    title: "LinkedIn",
    href: safeUrl(profile.social.linkedin),
    icon: LinkedinIcon,
  },
  { title: "GitHub", href: "https://github.com/zyekegador", icon: GithubIcon },
  {
    title: "Instagram",
    href: "https://www.instagram.com/gzykair_/",
    icon: null,
    svg: `<path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038C23.986 15.668 24 15.259 24 12s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>`,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/gzykair.19",
    icon: null,
    svg: `<path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.258h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>`,
  },
];

// ── Contact cards (Phone + Telegram only — Email handled separately above) ──

const contactCards = [
  {
    label: "Phone",
    href: safeTel(PHONE),
    value: PHONE,
    icon: PhoneIcon,
    newTab: false,
  },
  {
    label: "Telegram",
    href: toTelegramLink(PHONE),
    value: "Message on Telegram",
    icon: SendIcon,
    newTab: true,
  },
];
</script>
