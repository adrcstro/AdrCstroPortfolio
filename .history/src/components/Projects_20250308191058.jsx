import React from 'react';
import { FaGithub, FaArrowUpRightFromSquare, FaHtml5, FaJs, FaGitAlt, FaBootstrap, FaJava, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPhp, SiMysql, SiJquery } from "react-icons/si";
import { DiNetbeans } from "react-icons/di";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import thumb1 from '../assets/ProjectsAsset/ResiThumbnail.png';
import thumb2 from '../assets/ProjectsAsset/CoffeeThumbnail.png';
import thumb3 from '../assets/ProjectsAsset/TricycleThumbnail.png';
import thumb4 from '../assets/ProjectsAsset/LangsysThumbnail.png';
import thumb5 from '../assets/ProjectsAsset/reactp1thumbnaikl.png';
import thumb6 from '../assets/ProjectsAsset/reactp2thumbnail.png';
import resiImages from '../assets/ProjectsAsset/IndividualProjectAssets/resi';
import coffeImages from '../assets/ProjectsAsset/IndividualProjectAssets/coffe';
import triImages from '../assets/ProjectsAsset/IndividualProjectAssets/tri';
import langsyImages from '../assets/ProjectsAsset/IndividualProjectAssets/langsy';
import analiImages from '../assets/ProjectsAsset/IndividualProjectAssets/anali';
import cloudImages from '../assets/ProjectsAsset/IndividualProjectAssets/cloud';

const ProjectCard = ({ thumb, title, description, githubLink, modalId, isDarkMode }) => (
  <motion.div
    variants={fadeIn("right", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.7 }}
    className={`card w-full shadow-xl flex flex-col ${isDarkMode ? 'bg-slate-800' : 'text-primary-800'}`}
  >
    <figure className="px-4 pt-10">
      <img src={thumb} alt={title} className="rounded-xl transition-transform transform hover:scale-105" />
    </figure>
    <div className="py-2 px-4 flex-grow items-center text-first">
      <h2 className={`font-bold text-md px-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{title}</h2>
      <p className={`px-4 text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>{description}</p>
    </div>
    <div className='flex justify-end p-4 gap-2 mt-auto'>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'>
        <a href={githubLink} target="_blank" rel='noreferrer'>
          <FaGithub className='w-4 h-4 text-white' />
        </a>
      </div>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'>
        <FaArrowUpRightFromSquare className='w-4 h-4 text-white' onClick={() => document.getElementById(modalId).showModal()} />
      </div>
    </div>
  </motion.div>
);

const ProjectModal = ({ modalId, images, title, role, description, activities, technologies, isDarkMode }) => (
  <dialog id={modalId} className="modal">
    <div className={`modal-box w-11/12 max-w-6xl h-auto md:h-[600px] ${isDarkMode ? 'bg-slate-800' : 'text-primary-800'}`}>
      <form method="dialog">
        <button className={`btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>✕</button>
      </form>
      <div className="flex flex-col h-full p-4 overflow-hidden">
        <div className={`w-full h-full overflow-y-auto ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
          <div className="carousel w-full h-full border-2 rounded-lg border-slate-400">
            {images.map((img, index) => (
              <div key={index} id={`${modalId}${index}`} className="carousel-item relative w-full h-full">
                <img src={img} className="w-full h-full object-contain" alt="Slide" />
                <div className="absolute inset-y-1/2 left-5 right-5 flex justify-between transform -translate-y-1/2">
                  <a href={`#${modalId}${(index - 1 + images.length) % images.length}`} className="btn btn-circle">❮</a>
                  <a href={`#${modalId}${(index + 1) % images.length}`} className="btn btn-circle">❯</a>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full p-4 mt-4">
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{title}</h2>
            <p className={`mt-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
              <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Project Role: </span> {role}
            </p>
            <p className={`text-justify ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
              <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Description:</span> {description}
            </p>
            <p className={`text-justify ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
              <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Activities:</span>
              <ul className="list-disc list-inside">
                {activities.map((activity, index) => <li key={index}>{activity}</li>)}
              </ul>
            </p>
            <p className={`text-justify ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
              <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Technology Used:</span>
            </p>
            <div className={`flex p-2 gap-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
              {technologies.map((TechIcon, index) => <TechIcon key={index} className="w-10 h-10" />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </dialog>
);

function Projects({ isDarkMode }) {
  return (
    <div name="Projects" className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} w-full`}>
      <div className="max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6">
        <div className="text-center mb-10">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className={`text-4xl tracking-tight font-bold ${isDarkMode ? 'text-white' : 'text-primary-800'}`}
          >
            Proj<span className='text-[#570df8] text-3xl'>ects.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='text-md font-bold mt-2 text-slate-400'
          >
            Personal Projects & Prototype
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            thumb={thumb1}
            title="ResiQuest: (Automated Document Request Management System Web-Application)"
            description="Brgy-409 Document Request Management System (DRMS)"
            githubLink="https://github.com/adrcstro/ResiQuest-BRGY409"
            modalId="my_modal_3"
            isDarkMode={isDarkMode}
          />
          <ProjectModal
            modalId="my_modal_3"
            images={[resi1, resi2, resi3, resi4, resi5, resi6]}
            title="RESIQUEST: An Automated Document Request Management System"
            role="Full Stack Developer"
            description="ResiQuest is a software solution designed to streamline and automate the process of requesting, managing, and tracking documents in residential or organizational settings."
            activities={[
              "Automated the process of requesting documents",
              "Managed document tracking and notifications",
              "Improved efficiency in document handling",
              "Integrated with existing systems",
              "Enhanced user interface for ease of use",
              "Provided real-time updates on request status"
            ]}
            technologies={[SiPhp, FaHtml5, IoLogoCss3, FaJs, RiTailwindCssFill, SiMysql, SiJquery, FaGitAlt]}
            isDarkMode={isDarkMode}
          />

          <ProjectCard
            thumb={thumb2}
            title="BEANtoCUP: A Coffee Shop Order and Tracking Management System Web-Application"
            description="A comprehensive solution for managing coffee shop operations"
            githubLink="https://github.com/adrcstro/BeantoCUp"
            modalId="my_modal_4"
            isDarkMode={isDarkMode}
          />
          <ProjectModal
            modalId="my_modal_4"
            images={[coffe1, coffe2, coffe3, coffe4, coffe5, coffe6]}
            title="BEANtoCUP: A Coffee Shop Order and Tracking Management System"
            role="Full Stack Developer"
            description="BEANtoCUP: A Coffee Shop Order and Tracking Management System is a comprehensive solution for managing coffee shop operations, including order processing, inventory tracking, and customer management."
            activities={[
              "Designed and managed database schema for orders and inventory",
              "Integrated third-party payment gateways for secure transactions",
              "Implemented user authentication and role-based access control",
              "Created responsive user interfaces for customers and admin",
              "Optimized performance with caching and load testing",
              "Ensured security with encryption and vulnerability protection"
            ]}
            technologies={[SiPhp, FaHtml5, IoLogoCss3, FaJs, SiMysql, FaBootstrap, SiJquery, FaGitAlt]}
            isDarkMode={isDarkMode}
          />

          <ProjectCard
            thumb={thumb3}
            title="Plate-to-Place: Tricycle Tracking Management System"
            description="Strengthening Safety Measures for Tricycle Transportation"
            githubLink="https://github.com/adrcstro/TrackingManagement"
            modalId="my_modal_5"
            isDarkMode={isDarkMode}
          />
          <ProjectModal
            modalId="my_modal_5"
            images={[tri1, tri2, tri3, tri4, tri5, tri6]}
            title="Plate-to-Place: Tricycle Tracking Management System"
            role="Full Stack Developer"
            description="The 'Plate-to-Place' is an innovative web application designed to manage and track tricycles within a specific area or fleet. This system allows administrators to monitor tricycle locations in real-time, manage driver assignments, and ensure efficient operation across routes."
            activities={[
              "Developed real-time tricycle tracking and route monitoring features",
              "Integrated Google Maps API for geolocation and route visualization",
              "Built a driver management module with scheduling and assignment capabilities",
              "Created responsive user interfaces for drivers and dispatchers",
              "Implemented notifications and alerts for drivers and dispatchers",
              "Conducted end-to-end testing and deployment on Web"
            ]}
            technologies={[SiPhp, FaHtml5, IoLogoCss3, FaJs, SiMysql, FaBootstrap, SiJquery, FaGitAlt]}
            isDarkMode={isDarkMode}
          />

          <ProjectCard
            thumb={thumb4}
            title="LANGSYS: Language Learning System (20 Foreign Language to Learn)"
            description="A Java-based application designed to facilitate language learning through interactive lessons"
            githubLink="https://github.com/adrcstro/LANGUAGELEARNINGSYSTEM"
            modalId="my_modal_6"
            isDarkMode={isDarkMode}
          />
          <ProjectModal
            modalId="my_modal_6"
            images={[langsy1, langsy2, langsy3, langsy4, langsy5, langsy6]}
            title="LANGSYS: Language Learning System (20 Foreign Language to Learn)"
            role="Full Stack Java Developer"
            description="LANGSYS is an innovative Java application designed to facilitate language acquisition across 20 different foreign languages. This user-friendly platform provides a comprehensive suite of tools and resources tailored for learners at all levels, from beginners to advanced speakers."
            activities={[
              "Developed an interactive language lesson module with multimedia content for engaging learning experiences.",
              "Integrated speech recognition technology to provide real-time feedback on pronunciation and speaking skills.",
              "Implemented a user progress tracking system to monitor learning milestones and performance analytics.",
              "Created responsive web interfaces for learners and instructors, ensuring a seamless user experience across devices.",
              "Developed a community forum feature for users to connect, collaborate, and share language learning tips and resources.",
              "Conducted thorough testing and deployment of the application to ensure functionality, performance, and security."
            ]}
            technologies={[FaJava, DiNetbeans, SiMysql]}
            isDarkMode={isDarkMode}
          />

          <ProjectCard
            thumb={thumb5}
            title="React Analytics Landing Page (Cloned)"
            description="Dynamic Landing Page for Data Analytics Composed of financial Growth"
            githubLink="https://github.com/adrcstro/react-project-1"
            modalId="my_modal_2"
            isDarkMode={isDarkMode}
          />
          <ProjectModal
            modalId="my_modal_2"
            images={[anali1, anali2, anali3, anali4]}
            title="React Analytics Landing Page (Cloned)"
            role="Front-End Developer"
            description="The React Analytics Landing Page project is a fully responsive web application that replicates a modern analytics dashboard interface using React. Designed to showcase data visualization and user interaction, this landing page serves as a demonstration of key web development skills, including component-based architecture, state management, and API integration."
            activities={[
              "Cloned the landing page layout using React to ensure a responsive and visually appealing design.",
              "Implemented data visualization components using charting libraries to display analytics effectively.",
              "Developed reusable React components for navigation, headers, and footers to promote code modularity.",
              "Integrated mock data sources to simulate real-time analytics, enhancing the user experience.",
              "Optimized the application for performance by implementing lazy loading and code-splitting techniques.",
              "Conducted thorough testing and debugging to ensure functionality across different browsers and devices."
            ]}
            technologies={[FaHtml5, IoLogoCss3, FaJs, FaReact, FaGitAlt]}
            isDarkMode={isDarkMode}
          />

          <ProjectCard
            thumb={thumb6}
            title="Cloud Management Landing Page (Cloned)"
            description="Dynamic Landing Page for Cloud Computing and API Development"
            githubLink="https://github.com/adrcstro/react-project-2"
            modalId="my_modal_1"
            isDarkMode={isDarkMode}
          />
          <ProjectModal
            modalId="my_modal_1"
            images={[cloud1, cloud2, cloud3, cloud4, cloud5, cloud6]}
            title="Cloud Management Landing Page (Cloned)"
            role="Front-End Developer"
            description="The Cloud Management Landing Page (Cloned) project is a React-based web application that replicates the design and functionality of a modern cloud management platform's landing page."
            activities={[
              "Developed a fully responsive hero section with a modern design, including a call-to-action button that adapts to different screen sizes.",
              "Implemented service offerings section using reusable React components, ensuring consistency and easy maintenance across the application.",
              "Created client testimonials carousel with smooth transitions and optimized performance using Framer Motion.",
              "Integrated Tailwind CSS to style the landing page, achieving a clean and consistent design throughout the project.",
              "Optimized the page load time by implementing lazy loading for images and code-splitting techniques.",
              "Ensured cross-browser compatibility and accessibility by testing and debugging the landing page on various devices and browsers."
            ]}
            technologies={[FaHtml5, IoLogoCss3, FaJs, FaReact, FaGitAlt]}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;