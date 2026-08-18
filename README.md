# Samay Gandhi — Portfolio Website

My personal developer portfolio, built with React and Vite. It showcases my profile, skills, projects, education, certificates, and contact/social links in a single-page site with a dark, modern UI.

## Live Demo

[portfolio-nine-omega-eow5hp0ocr.vercel.app](portfolio-nine-omega-eow5hp0ocr.vercel.app)

## Features

- Hero / introduction section with animated typing effect
- About Me section
- Skills section (organized by category: Languages, Frontend, Backend, Database, Tools)
- Projects section with filtering
- Project details modal with a screenshot gallery/image preview
- Education section
- Certificates section
- Contact form (powered by EmailJS)
- Social links
- Responsive design, including a desktop-recommendation prompt for mobile visitors
- Smooth section animations using Framer Motion
- GitHub and Live Demo links for projects where available

## Tech Stack

| Category | Technology |
|---|---|
| Core | React.js, Vite, JavaScript |
| Markup / Styling | HTML5, CSS3, Tailwind CSS |
| Animation | Framer Motion |
| Icons | React Icons |
| Smooth Scroll | React Scroll |
| Typing Effect | React Simple Typewriter |
| Contact Form | EmailJS |
| Notifications | React Toastify |

## Project Structure

portfolio-website/
├── public/
│ ├── projects/ # Project screenshots
│ ├── resume.pdf
│ └── profile.png
├── src/
│ ├── api/
│ │ └── githubApi.js # GitHub API integration
│ ├── assets/ # Images/icons used in the UI
│ ├── components/ # Hero, About, Skills, Projects, ProjectModal, Education, Certificates, Contact, Footer, etc.
│ ├── data/ # Site content (see Customization below)
│ ├── hooks/
│ │ └── useGithub.js
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm

### Installation

```bash
git clone [Add your repository link]
cd portfolio-website
npm install
```

### Run locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

## Environment Variables

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages. Create a `.env` file in the project root with:

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key


You can get these values from your EmailJS dashboard. The same variables must also be configured in your Vercel project settings for the deployed contact form to work.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the app for production |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs the linter |

## Project Sections

| Section | Description |
|---|---|
| Hero | Introduction with name, role, and a typing animation |
| About | Brief background/summary |
| Skills | Technical skills grouped by category |
| Projects | Project cards with category filtering |
| Project Modal | Detailed view of a project with a screenshot gallery |
| Education | Academic background |
| Certificates | Certifications with credential links |
| Contact | Contact form + social links |

## Customization / How to Update Portfolio Information

All content is data-driven, so the site can be updated without touching component code:

| What to update | File |
|---|---|
| Personal info & social links | `src/data/siteConfig.js` |
| Skills | `src/data/skills.jsx` |
| Projects | `src/data/projects.jsx` |
| Education | `src/data/education.jsx` |
| Certificates | `src/data/certificates.jsx` |
| Experience | `src/data/experience.js` |
| Stats | `src/data/stats.js` |
| Images/assets | `public/` and `src/assets/` |
| Resume | `public/resume.pdf` |

## Deployment

This project is deployed on [Vercel](https://vercel.com/).

1. Connect the GitHub repository to a Vercel project.
2. Configure the required environment variables (see [Environment Variables](#environment-variables)) in the Vercel project settings.
3. Deploy the project.
4. Future pushes to the connected GitHub branch automatically trigger a new deployment.


## Author

**Samay Gandhi**

- GitHub: [https://github.com/SamayGandhi](https://github.com/SamayGandhi)
- LinkedIn: [https://www.linkedin.com/in/samay-gandhi-1b468b2b8](https://www.linkedin.com/in/samay-gandhi-1b468b2b8)
- Portfolio: [portfolio-nine-omega-eow5hp0ocr.vercel.app](portfolio-nine-omega-eow5hp0ocr.vercel.app)
