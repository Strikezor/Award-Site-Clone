<div align="center">
  <br />
    <img src="https://github.com/user-attachments/assets/ab600f24-f4d9-4cef-8f1e-3fd9194afb30" alt="Project Banner">
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-GSAP-black?style=for-the-badge&logoColor=white&logo=greensock&color=88CE02" alt="greensock" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">A Clone of Zentry's Award-Winning Website created by Akshay Chaturvedi</h3>
</div>

---

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋  [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 🔗 [Assets](#links)

---

## 🤖 Introduction

This project replicates the stunning design and animations of Zentry's award-winning website. It showcases smooth scroll-triggered animations, geometric transitions, and video elements, aiming to deliver a luxurious and modern user experience. The clone focuses on building engaging UI/UX, responsive layouts, and advanced animation techniques using GSAP.

---

## ⚙️ Tech Stack

- **GSAP**: For creating animations and transitions.
- **React.js**: For building the user interface.
- **Tailwind CSS**: For styling and layout responsiveness.

---

## 🔋 Features

- **Scroll-Based Animations**: Dynamic animations triggered by scrolling to enhance interactivity.
- **Clip Path Transitions**: Geometric CSS transitions for unique visual effects.
- **3D Hover Effects**: Interactive 3D transformations for a cutting-edge feel.
- **Video Transitions**: Seamlessly integrated videos for storytelling.
- **Smooth UI/UX**: High-quality interfaces with smooth transitions.
- **Responsive Design**: Optimized for a consistent experience across all devices.

---

## 🤸 Quick Start

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following tools installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Strikezor/Award-Site-Clone.git
   cd Award-Site-Clone
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Project**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

---

## 🕸️ Snippets

<details>
<summary><code>index.css</code></summary>

@import url("https://fonts.cdnfonts.com/css/general-sans");

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  width: 100vw;
  overflow-x: hidden;
  background-color: #dfdff0;
  font-family: "General Sans", sans-serif;
}

@layer base {
  @font-face {
    font-family: "zentry";
    src: url("/fonts/zentry-regular.woff2") format("woff2");
  }
}

@layer utilities {
  .clip-path {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}
```

</details>

<details>
<summary><code>components/RoundedCorners.jsx</code></summary>

import React from "react";

const RoundedCorners = () => {
  return (
    <svg
      className="invisible absolute size-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="flt_tag">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="flt_tag"
          />
          <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};

export default RoundedCorners;
```

</details>

---

## 🔗 Assets

All the assets used in this project are placeholders and should be replaced with your own assets if using this project commercially. Fonts and images are for educational use only.

---

This project is a great opportunity to learn advanced web animations, responsive design, and GSAP techniques, inspired by Zentry's amazing work.
