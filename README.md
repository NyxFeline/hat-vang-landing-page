# 🌾 Hạt Vàng (Golden Grain)

### A Premium Vietnamese Rice & Agriculture Landing Page

<p align="center">
  A modern, responsive landing page concept celebrating Vietnamese rice, local farmers, and sustainable agriculture.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-Animation-black?style=for-the-badge&logo=framer&logoColor=blue" alt="Framer Motion" />
</p>

<p align="center">
  <a href="https://hat-vang.netlify.app/"><strong>Live Demo</strong></a> ·
  <a href="https://github.com/NyxFeline/hat-vang-landing-page.git"><strong>Source Code</strong></a>
</p>

---

## 📖 About The Project

**Hạt Vàng (Golden Grain)** is a premium agriculture landing page concept designed to showcase Vietnamese rice varieties, connect consumers with local farmers, and communicate the value of sustainable rice cultivation.

The project combines modern web design with an organic, nature-inspired visual identity to create an engaging browsing experience.

Rather than following conventional agricultural website layouts, Hạt Vàng focuses on clean typography, warm natural colors, immersive imagery, smooth animations, and interactive components.

**Project Type:** Frontend Development / Landing Page  
**Development:** Solo Project  
**Target Audience:** Consumers interested in quality Vietnamese rice and agricultural products.

## ✨ Key Features

### 1. Modern & Responsive UI

- Clean and modern landing page layout.
- Nature-inspired color palette and typography.
- Responsive layouts for desktop, tablet, and mobile devices.
- Glassmorphism effects for floating UI elements.
- Rounded cards, soft shadows, and smooth visual transitions.

### 2. Interactive Components

- **Responsive Navigation:** Navigation bar with a collapsible mobile menu.
- **Hero Section:** Engaging introduction with animated text and call-to-action buttons.
- **Floating Search Bar:** Search interface integrated into the hero section.
- **Statistics Section:** Animated numerical counters.
- **Mission Cards:** Interactive cards that expand on hover or selection.
- **Product Showcase:** Horizontally scrollable carousel featuring five Vietnamese rice varieties.
- **Product Favorites:** Toggle favorite state on individual product cards.
- **Video Modal:** YouTube video displayed in an animated modal with keyboard dismissal support.
- **Newsletter Form:** Email validation, submission feedback, and loading states.
- **Language Switcher:** Switch between Vietnamese and English.

### 3. Animation & User Experience

Powered by Framer Motion:

- Scroll-triggered reveal animations.
- Staggered animations for cards and content.
- Hero entrance animations.
- Interactive hover and transition effects.
- Animated number counters.
- Smooth modal opening and closing.
- Reduced-motion support for users who prefer fewer animations.

### 4. Performance & Accessibility

- Next.js Image component for local image assets.
- Optimized font loading with `next/font`.
- Image optimization through Next.js.
- Semantic HTML and accessible labels.
- Keyboard interaction support for the video modal.
- Responsive layouts using Tailwind CSS.

## 🎨 Design Concept

Hạt Vàng combines two complementary design directions:

### Modern UI

- Clean layouts with generous whitespace.
- Floating interface elements.
- Glassmorphism and subtle shadows.
- Smooth transitions and micro-interactions.

### Eco & Nature UI

- Warm, earthy visual identity.
- Agricultural imagery and organic shapes.
- Natural colors inspired by rice fields and golden harvests.
- Typography that balances elegance and readability.

### Color Palette

| Color        | Hex       | Usage                |
| ------------ | --------- | -------------------- |
| Cream        | `#FCFBF6` | Main background      |
| Green        | `#15803D` | Primary color        |
| Harvest Gold | `#EAB308` | Accent and CTA       |
| Ink          | `#1F2937` | Main text            |
| Sand         | `#F4F1E6` | Secondary background |
| Forest       | `#14532D` | Dark green accents   |

### Typography

- **Playfair Display:** Headings and prominent titles.
- **Inter:** Body text and interface elements.

## 🛠️ Tech Stack

| Technology                                                | Purpose                        |
| --------------------------------------------------------- | ------------------------------ |
| [Next.js 16](https://nextjs.org/)                         | React framework and App Router |
| [React 19](https://react.dev/)                            | Component-based UI             |
| [TypeScript](https://www.typescriptlang.org/)             | Static typing                  |
| [Tailwind CSS 4](https://tailwindcss.com/)                | Utility-first styling          |
| [Framer Motion](https://motion.dev/)                      | Animations and interactions    |
| [React Hook Form](https://react-hook-form.com/)           | Form handling and validation   |
| [Lucide React](https://lucide.dev/)                       | Interface icons                |
| [React Icons](https://react-icons.github.io/react-icons/) | Additional icons               |
| [Netlify](https://www.netlify.com/)                       | Deployment platform            |
| [Vercel](https://vercel.com/)                             | Alternative deployment platform |

## 📂 Project Structure

```text
hat-vang-landing-page/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── art/
│   │   └── FieldScene.tsx
│   ├── CountUp.tsx
│   ├── CTABanner.tsx
│   ├── Farmers.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── icons.tsx
│   ├── LanguageProvider.tsx
│   ├── Mission.tsx
│   ├── MissionCards.tsx
│   ├── Navbar.tsx
│   ├── NewsletterForm.tsx
│   ├── ProductCard.tsx
│   ├── Products.tsx
│   ├── Reveal.tsx
│   ├── SearchBar.tsx
│   ├── SectionBadge.tsx
│   ├── Stats.tsx
│   └── VideoModal.tsx
│
├── hooks/
│   └── useDragScroll.ts
│
├── lib/
│   ├── motion.ts
│   └── translations.ts
│
├── public/
│   └── images/
│       ├── hero-farmer.png
│       ├── logo.png
│       ├── mission-fair-pay.png
│       ├── mission-harvest.png
│       ├── mission-paddy.png
│       ├── product-brown-rice.png
│       ├── product-glutinous-rice.png
│       ├── product-jasmine.png
│       ├── product-st25.png
│       └── product-white-rice.png
│
├── .gitignore
├── .prettierrc
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (Node.js 20.9 or later).
- npm (included with Node.js).
- Git.

### Installation

**1. Clone the repository**

```bash
git clone [YOUR_GITHUB_REPOSITORY_URL]
```

**2. Navigate to the project directory**

```bash
cd hat-vang-landing-page
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Visit:

```text
http://localhost:3000
```

The application will automatically reload when you make changes to the source code.

### Available Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server          |
| `npm run lint`  | Run ESLint to check code quality     |

## 🌐 Deployment

The project can be deployed on [Netlify](https://www.netlify.com/) or
[Vercel](https://vercel.com/). No environment variables are required for the
current version.

### Deploy with Netlify

1. Push the project to GitHub.
2. Sign in to Netlify and choose **Add new site** → **Import an existing project**.
3. Connect the GitHub repository
   [`NyxFeline/hat-vang-landing-page`](https://github.com/NyxFeline/hat-vang-landing-page).
4. Use these build settings:

   | Setting | Value |
   | --- | --- |
   | Build command | `npm run build` |
   | Publish directory | `.next` |
   | Node version | `20` or later |

5. Click **Deploy site**.

Netlify detects the Next.js project and uses its Next.js runtime for pages,
images, and other framework features. Every new commit pushed to the selected
branch will trigger a new deployment.

### Deploy with Vercel

1. Push the project to GitHub.
2. Sign in to Vercel with GitHub.
3. Import the
   [`NyxFeline/hat-vang-landing-page`](https://github.com/NyxFeline/hat-vang-landing-page)
   repository.
4. Keep the default Next.js settings and click **Deploy**.

For more information, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)
and [Netlify's Next.js documentation](https://docs.netlify.com/frameworks/next-js/overview/).

## 🖼️ Image Sources & Licensing

The website uses agricultural, rice field, farmer, and rice product imagery to support its visual identity.

The following platforms are provided as image source references.

### 1. Hero Section

| Image                  | Source                                                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Golden rice fields     | [Pexels – Rice Field](https://www.pexels.com/search/rice%20field/)                                                 |
| Golden rice fields     | [Pixabay – Rice Fields](https://pixabay.com/images/search/rice%20field/)                                           |
| Rice field landscapes  | [Unsplash – Rice Fields](https://unsplash.com/s/photos/rice-fields)                                                |
| Vietnamese rice fields | [Wikimedia Commons – Paddy Fields in Vietnam](https://commons.wikimedia.org/wiki/Category:Paddy_fields_in_Vietnam) |

### 2. Mission Section

| Image                          | Source                                                                                                             |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| Vietnamese farmers             | [Pexels – Vietnamese Farmers](https://www.pexels.com/search/vietnam%20farmer/)                                     |
| Rice planting process          | [Pexels – Rice Planting](https://www.pexels.com/search/rice%20planting/)                                           |
| Rice harvesting                | [Pixabay – Rice Harvest](https://pixabay.com/images/search/rice%20harvest/)                                        |
| Rice farmers in Vietnam        | [Wikimedia Commons – Rice Farming in Vietnam](https://commons.wikimedia.org/wiki/Category:Rice_farming_in_Vietnam) |
| Farmers working in rice fields | [Pexels – Farmers in Rice Fields](https://www.pexels.com/search/farmers%20rice%20field/)                           |
| Rice cultivation               | [Wikimedia Commons – Rice Farming](https://commons.wikimedia.org/wiki/Category:Rice_farming)                       |

### 3. Products Section

| Product                       | Source                                                                                             |
| ----------------------------- | -------------------------------------------------------------------------------------------------- |
| ST25 Rice                     | [Pixabay – ST25 Rice](https://pixabay.com/images/search/ST25%20rice/)                              |
| Brown Rice (Gạo lứt)          | [Pixabay – Brown Rice](https://pixabay.com/images/search/brown%20rice/)                            |
| Glutinous Rice (Gạo nếp)      | [Pexels – Glutinous Rice](https://www.pexels.com/search/glutinous%20rice/)                         |
| Jasmine Rice                  | [Pexels – Jasmine Rice](https://www.pexels.com/search/jasmine%20rice/)                             |
| White Rice                    | [Pixabay – White Rice](https://pixabay.com/images/search/white%20rice/)                            |
| Rice grains and rice products | [Unsplash – Rice](https://unsplash.com/s/photos/rice)                                              |
| Brown Rice                    | [Unsplash – Brown Rice](https://unsplash.com/s/photos/brown-rice)                                  |
| Jasmine Rice                  | [Unsplash – Jasmine Rice](https://unsplash.com/s/photos/jasmine-rice)                              |
| White Rice                    | [Unsplash – White Rice](https://unsplash.com/s/photos/white-rice)                                  |
| Vietnamese rice varieties     | [Wikimedia Commons – Rice of Vietnam](https://commons.wikimedia.org/wiki/Category:Rice_of_Vietnam) |

### 4. Additional Image Resources

| Platform          | Image Resources                                                          |
| ----------------- | ------------------------------------------------------------------------ |
| Pexels            | [Rice Field Images](https://www.pexels.com/search/rice%20field/)         |
| Pixabay           | [Rice Field Images](https://pixabay.com/images/search/rice%20field/)     |
| Unsplash          | [Rice Field Images](https://unsplash.com/s/photos/rice-fields)           |
| Wikimedia Commons | [Rice Farming](https://commons.wikimedia.org/wiki/Category:Rice_farming) |
| Openverse         | [Rice Field Images](https://openverse.org/search/image?q=rice%20field)   |

### Image Licensing

- Image references are collected from Pexels, Pixabay, Unsplash, Wikimedia Commons, and Openverse.
- Always check the license of each individual image before using it in the final project.
- For Wikimedia Commons and Openverse, review the individual file's license, creator information, and attribution requirements.
- Replace image search pages with the exact image URLs and creator names when selecting the final assets.
- Keep a record of image sources and licenses to ensure proper attribution.

**Note:** The links above are source references and search pages. They do not indicate that every image on those platforms has the same license or attribution requirements.

## ⚠️ Project Scope & Limitations

Hạt Vàng is a frontend-focused landing page concept.

Some displayed content is illustrative and intended for demonstration purposes.

- Product prices, ratings, and review counts are sample data.
- The search bar currently provides a visual search interface without actual search functionality.
- Newsletter submission uses simulated client-side behavior; no email service or backend is connected.
- Product favorites are managed locally in component state and are not persisted.
- Navigation and social links are primarily presentation links and are not connected to a complete business platform.
- There is no real shopping cart, payment gateway, or order management system.

These limitations are intentional within the current project scope.

## 👨‍💻 Author

**ConCaLoiChoi**

- **GitHub:** [@NyxFeline](https://github.com/NyxFeline)
- **Portfolio:** [nyxfeline-dothieuvy.netlify.app](https://nyxfeline-dothieuvy.netlify.app/)

---

<p align="center">
  Made with care for Vietnamese rice and agriculture 🌾
</p>
