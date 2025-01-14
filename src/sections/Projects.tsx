import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";

const portfolioProjects = [
  {
    "company": "PatientPro",
    "year": "2024",
    "title": "Healthcare Management Platform",
    "results": [
      { "title": "Implemented secure user authentication with Appwrite" },
      { "title": "Developed appointment scheduling system for patients and doctors" },
      { "title": "Created detailed doctor profiles with specialties, schedules, and reviews" },
      { "title": "Enabled real-time communication with Twilio-powered notifications" },
      { "title": "Integrated medical records for patients to access their health history" },
      { "title": "Implemented error tracking and monitoring using Sentry" },
      { "title": "Built admin dashboard for managing users and appointments" }
    ],
    link: "https://github.com/kousar-coder/PatientPro-Platform",
    image: aiStartupLandingPage
    // image: "https://via.placeholder.com/600x400?text=PatientPro+Platform", // Replace with a relevant image or API image
  },
  {
    "company": "AI Prompt Hub",
    "year": "2024",
    "title": "AI Prompt Sharing Platform",
    "results": [
      { "title": "Built a modern AI prompt discovery platform" },
      { "title": "Implemented user authentication with Google via NextAuth.js" },
      { "title": "Introduced tag-based prompt search and filtering" },
      { "title": "Created responsive UI with TailwindCSS and Glassmorphism design" },
      { "title": "Enabled easy sharing and copying of AI prompts" }
    ],
    "link": "https://github.com/kousar-coder/AI-Prompt-Sharing-Platform",
    image: aiStartupLandingPage
    // "image": "https://via.placeholder.com/600x400?text=AI+Prompt+Hub" // Replace with a relevant image or API image
  },
  {
    "company": "BlockbusterX",
    "year": "2024",
    "title": "Movie Search Application",
    "results": [
      { "title": "Implemented real-time movie search with OMDB API" },
      { "title": "Responsive design optimized for mobile and desktop" },
      { "title": "Streamlined user interface for an engaging movie browsing experience" },
      { "title": "Future feature: Added detailed movie pages for in-depth information" },
      { "title": "Enabled easy movie discovery and exploration" }
    ],
    "link": "https://github.com/kousar-coder/blockbusterx-movie-search-app",
    image: aiStartupLandingPage
    // "image": "https://via.placeholder.com/600x400?text=BlockbusterX+Movie+Search" // Replace with a relevant image or API image
  },
];

export const ProjectsSection = () => {
  return <div>
    <div className="container">
      <div className="flext justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">Real-world Results</p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6">Featured Projects</h2>
      <p>Watch how I turn abstract ideas into functional, engaging web applications.</p>
      <div>
        {portfolioProjects.map((project) => (
          <div key={project.title}>
            <div>
              <span>{project.company}</span>
              <span>{project.year}</span>
            </div>
            <h3>{project.title} </h3>
            <hr />
            <ul>
              {project.results.map((result) => (
                <li>{result.title}</li>
              )
              )}
            </ul>
            <a href={project.link}>
              <button>View Live Site</button>
            </a>
            <Image src={project.image} alt={project.title} />
          </div>
        ))}
      </div>
    </div>
  </div>;
};
