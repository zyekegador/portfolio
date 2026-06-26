# Zyeke Portfolio — Vue.js

A clean, responsive portfolio website built with Vue 3, Vue Router, and Tailwind CSS.

## 🗂 Project Structure

```
zyeke-portfolio/
├── index.html                    # Entry HTML
├── package.json                  # Dependencies
├── vite.config.js                # Vite config
├── tailwind.config.js            # Tailwind config
├── postcss.config.js             # PostCSS config
└── src/
    ├── main.js                   # App entry + Router setup
    ├── App.vue                   # Root component
    ├── style.css                 # Global styles (Tailwind)
    ├── data/
    │   └── portfolio.js          # ✏️  ALL YOUR CONTENT (edit here)
    ├── components/
    │   ├── ProfileHeader.vue     # Name, photo, buttons
    │   ├── AboutMe.vue           # About section
    │   ├── Education.vue         # Education card
    │   ├── TechStack.vue         # Tech stack (home preview)
    │   ├── Certifications.vue    # Certifications (home preview)
    │   ├── BeyondScreen.vue      # Hobbies section
    │   ├── Experience.vue        # Work experience timeline
    │   ├── Projects.vue          # Projects grid (home preview)
    │   ├── Recommendations.vue   # Testimonials carousel
    │   ├── Contact.vue           # Contact + social links
    │   ├── ChatWidget.vue        # Floating chat button
    │   └── BackToHome.vue        # Back navigation
    └── views/
        ├── Home.vue              # Main portfolio page (/)
        ├── AllProjects.vue       # All projects (/projects)
        ├── AllCertifications.vue # All certs (/certifications)
        └── FullTechStack.vue     # Full tech stack (/tech-stack)
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## ✏️ Customizing Your Content

All content lives in **`src/data/portfolio.js`**. Edit that one file to update:
- Profile info (name, location, title, about text)
- Experience entries
- Projects
- Certifications
- Tech stack categories
- Contact details & social links

## 🖼 Adding Your Profile Photo

Replace the placeholder avatar in `ProfileHeader.vue`:

```vue
<!-- Replace the placeholder div with: -->
<img src="/your-photo.jpg" alt="Zyeke" class="w-full h-full object-cover" />
```

Place your photo in the `/public` folder.

## 📦 Tech Stack

- **Vue 3** (Composition API with `<script setup>`)
- **Vue Router 4** (hash history)
- **Tailwind CSS 3**
- **Lucide Vue Next** (icons)
- **Vite** (build tool)
