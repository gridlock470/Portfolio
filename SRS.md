# Software Requirements Specification (SRS)
**For:** Personal Portfolio Website – Arjun Ahlawat  
**Version:** 1.0  
**Date:** August 2026  
**Status:** Draft / In Development  

---

## 1. Introduction
### 1.1 Purpose
The purpose of this document is to outline the functional and non-functional requirements for the personal portfolio website of **Arjun Ahlawat** (GitHub: gridlock470). This SRS serves as a blueprint for the development of a static, high-performance web presence that introduces Arjun to the professional world.

### 1.2 Scope
This project involves the development of a **fully static** portfolio website built with pure **HTML5** and **CSS3**. The website will act as a central digital hub, showcasing Arjun's projects, technical skills, and professional background. It will provide seamless navigation across sections, external links to professional platforms (LinkedIn, LeetCode), contact information, and a downloadable resume. No server-side logic or databases are required for Version 1.0.

### 1.3 Intended Audience
- Recruiters and hiring managers.
- Technical peers and fellow developers.
- Freelance clients or anyone interested in Arjun's professional profile.

---

## 2. Overall Description
### 2.1 User Characteristics
Users will range from non-technical recruiters to highly technical developers. Therefore, the interface must be:
- **Visually intuitive** – requiring zero instructions to navigate.
- **Accessible** – adhering to basic contrast and semantic HTML standards.
- **Fast** – catering to users on varying network speeds.

### 2.2 Operating Environment
The website must operate flawlessly across the following:
- **Browsers:** Latest versions of Google Chrome, Mozilla Firefox, Microsoft Edge, and Apple Safari.
- **Devices:** Desktops, tablets, and mobile phones (all screen sizes).
- **Network:** Works offline after initial load (due to static nature), but optimally loads under 3 seconds on 4G.

### 2.3 User Assumptions
- Users have JavaScript enabled (though the site will remain functional even if it's not, as it's built on HTML/CSS).
- Users are viewing the site with a modern, standards-compliant browser.

---

## 3. Functional Requirements (FR)

| ID | Requirement | Priority |
| :--- | :--- | :--- |
| **FR-01** | **Navigation:** The site must feature a fixed or sticky navigation menu that allows seamless scrolling/jumping to the **Home**, **About**, **Projects**, and **Skills** sections. The current active section must be visually indicated. | High |
| **FR-02** | **Home Section:** Must feature a hero introduction with Arjun's name, a professional tagline (e.g., "Developer \| Designer \| Problem Solver"), and a prominent call-to-action (CTA) button linking to the Projects section or the resume download. | High |
| **FR-03** | **About Section:** Must contain a brief biography, a professional headshot (or avatar), and a short narrative about Arjun's journey, interests, and development philosophy. | High |
| **FR-04** | **Projects Section:** Must display a grid/card layout of Arjun's featured GitHub repositories/projects. Each card must include: Project Title, Short Description, Tech Stack tags (e.g., HTML, CSS, JS), and a link to the Live Demo / GitHub repository. | High |
| **FR-05** | **Skills Section:** Must visually represent Arjun's technical proficiencies. This should include front-end skills (HTML, CSS), tools (Git, VS Code), and any other relevant platforms. A visual representation (e.g., progress bars, icon grids, or tag clouds) is preferred. | High |
| **FR-06** | **Contact & Footer:** The footer must statically display Arjun's professional email address. Additionally, it must contain clearly identifiable icon links to external platforms: **LinkedIn**, **LeetCode**, and **GitHub**. | High |
| **FR-07** | **Resume Download:** A "Download Resume" button (or link) must be present (typically in the Home section, About section, or Footer) that triggers the download of a PDF file of Arjun's resume. | Medium |

---

## 4. Non-Functional Requirements (NFR)

| ID | Requirement | Priority |
| :--- | :--- | :--- |
| **NFR-01** | **Performance (Smoothness):** All CSS animations (transitions, keyframes, hover effects) must run at **60 frames per second (60fps)**. Animations should feel buttery smooth and must not cause layout shifts (cumulative layout shift should be minimized). | High |
| **NFR-02** | **Interactivity:** The site must feel alive. This includes subtle animations on scroll (e.g., fade-in elements as they enter the viewport), micro-interactions on card hover (e.g., lift/elevate effects), and smooth anchor scrolling between sections. | High |
| **NFR-03** | **Cross-Browser Compatibility:** The site must display consistently and correctly on all modern browsers (Chrome, Firefox, Edge, Safari) without breaking. CSS prefixes (via Autoprefixer or manual) should be applied where needed. | High |
| **NFR-04** | **Responsiveness (Mobile-First):** The layout must adapt gracefully to *all* screen widths (320px to 1920px+). The navigation must collapse into a hamburger menu (or similar mobile pattern) on smaller screens. The project grid must stack vertically on mobile. | High |
| **NFR-05** | **Load Speed:** The initial page load must complete in **under 2 seconds** on a standard 4G connection. This will be achieved by optimizing image assets (compressing to WebP/JPEG), minifying CSS, and avoiding external render-blocking resources where possible. | Medium |
| **NFR-06** | **Usability:** All interactive elements (buttons, links, nav items) must be easily tappable/clickable on mobile devices (minimum touch target size of 44px). | High |
| **NFR-07** | **Maintainability:** The codebase must be well-organized with clear comments, logical file structure (`/css`, `/assets`, `/js` if used), and consistent naming conventions (e.g., BEM for CSS classes). | Medium |

---

## 5. Future Scope (Version 2.0 & Beyond)
While out of scope for the initial release, the following features are planned for future iterations:

- **Working Contact Form:** Integration of a third-party service (e.g., Formspree, EmailJS, or Netlify Forms) to allow visitors to send messages directly without exposing the email.
- **Dynamic Project Filtering:** Adding JavaScript-based category filters to the Projects section (e.g., "Frontend," "Fullstack," "UI/UX").
- **Dark/Light Mode Toggle:** A theme switcher to improve user experience in low-light environments.
- **Additional Sections:** A "Blog" or "Case Studies" section to demonstrate deeper technical writing and problem-solving skills.
- **CMS Integration:** Using a headless CMS (like Decap CMS) to allow Arjun to update projects without touching code.

---

## 6. Appendices
### 6.1. Tools & Technologies (Confirmed)
- **Core:** HTML5, CSS3 (No frameworks).
- **Icons:** Font Awesome / Material Icons / Custom SVG icons.
- **Fonts:** Google Fonts (e.g., Inter, Poppins, or Fira Code).
- **Version Control:** Git & GitHub (gridlock470/Portfolio).
- **Hosting:** [To be decided, e.g., GitHub Pages, Netlify, or Vercel].

---

## 7. Revision History
| Version | Date | Author | Description |
| :--- | :--- | :--- | :--- |
| 1.0 | August 2026 | Arjun Ahlawat | Initial SRS creation. |
