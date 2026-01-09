import React, { useEffect, useRef, useState } from "react";
import GalaxyBackground from "./GalaxyBackground";

function About() {
  // Intersection observer for scroll animations
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const workExperienceRef = useRef(null);
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [workExperienceVisible, setWorkExperienceVisible] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    email: "",
    query: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (aboutMeRef.current) {
        const rect = aboutMeRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) setAboutMeVisible(true);
      }
      if (skillsRef.current) {
        const rect = skillsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) setSkillsVisible(true);
      }
      if (workExperienceRef.current) {
        const rect = workExperienceRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) setWorkExperienceVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Typewriter effect logic
  const text = "Hello,I am Alok Sisodiya.";
  const [displayedText, setDisplayedText] = useState("");
  const idx = useRef(0);

  useEffect(() => {
    if (displayedText === text) return;
    if (idx.current < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, idx.current + 1));
        idx.current += 1;
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, text]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link
      const subject = encodeURIComponent("Portfolio Contact Form Submission");
      const body = encodeURIComponent(
        `Hello Alok,\n\nYou have received a new message from your portfolio website:\n\nFrom: ${formData.email}\n\nMessage:\n${formData.query}\n\nBest regards,\n${formData.email}`
      );
      const mailtoLink = `mailto:aloksisodiya07@gmail.com?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoLink;

      // Reset form and show success message
      setFormData({ email: "", query: "" });
      setSubmitMessage(
        "Thank you! Your email client has been opened with the message."
      );
    } catch (error) {
      setSubmitMessage("Sorry, there was an error. Please try again.");
    } finally {
      setIsSubmitting(false);
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(""), 5000);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-black relative">
      <GalaxyBackground />
      <section
        id="home"
        className="w-full flex flex-col md:flex-row items-center justify-center min-h-[500px] py-12 px-4"
      >
        {/* Profile Picture */}
        <div className="flex items-center justify-center w-full md:w-1/2 mb-8 md:mb-0">
          <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center overflow-hidden shadow-2xl border-8 border-gray-800">
            {/* Replace src with your profile image path */}
            <img
              src="/src/assets/profile.jpg"
              alt="Profile"
              className="w-[370px] h-[370px] object-cover rounded-full"
            />
          </div>
        </div>
        {/* Info Section */}
        <div className="flex flex-col justify-center w-full md:w-1/2 bg-black rounded-2xl shadow-2xl p-10 text-white mr-0 md:mr-10 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 flex items-center">
            {displayedText}
            <span className="animate-pulse ml-1">|</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">
            Software Developer
          </h2>
          <p className="mb-6 text-gray-300 text-base md:text-lg">
            I am a full-stack software developer with a strong command of the
            MERN stack (MongoDB, Express.js, React, and Node.js), dedicated to
            building robust, scalable, and high-performance web applications. I
            specialize in delivering intuitive, user-centric solutions that
            align with modern business needs—balancing clean architecture,
            responsive design, and backend efficiency. My focus is on crafting
            production-grade systems that are both technically sound and
            optimized for real-world impact.
          </p>
        </div>
      </section>
      {/* About Me Section */}
      <section
        id="about"
        ref={aboutMeRef}
        className={`w-full flex flex-col items-center justify-center py-8 px-4 min-h-[300px] transition-all duration-1000 ${
          aboutMeVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-2 text-white">
          About Me
        </h2>
        <p className="text-gray-300 text-base md:text-lg text-center max-w-3xl mb-4">
          I'm a full-stack software developer specializing in the MERN
          stack—MongoDB, Express.js, React, and Node.js. I build scalable,
          high-performance web applications that solve real-world problems for
          modern businesses. My focus is on crafting clean, maintainable code
          and intuitive user experiences, backed by robust backend architecture
          and responsive frontend design. Whether it's optimizing API
          performance, implementing secure data flows, or designing seamless
          interfaces, I bring a product-first mindset and a passion for
          engineering excellence to every project I take on.
        </p>
      </section>
      {/* Skills Section */}
      <section
        id="skills"
        ref={skillsRef}
        className={`w-full flex flex-col items-center justify-center py-8 px-4 min-h-[400px] transition-all duration-1000 ${
          skillsVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Languages,Tools,Technology and Framework
        </h2>
        <div className="flex flex-wrap gap-6 justify-center max-w-4xl">
          <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 transform hover:bg-gray-900 hover:scale-110 hover:text-white cursor-pointer">
            C
          </span>
          <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 transform hover:bg-gray-900 hover:scale-110 hover:text-white cursor-pointer">
            C++
          </span>
          <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 transform hover:bg-gray-900 hover:scale-110 hover:text-white cursor-pointer">
            Java
          </span>
          <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 transform hover:bg-gray-900 hover:scale-110 hover:text-white cursor-pointer">
            HTML
          </span>
          <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 transform hover:bg-gray-900 hover:scale-110 hover:text-white cursor-pointer">
            CSS
          </span>
          <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 transform hover:bg-gray-900 hover:scale-110 hover:text-white cursor-pointer">
            Bootstrap
          </span>
          <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 transform hover:bg-gray-900 hover:scale-110 hover:text-white cursor-pointer">
            Tailwind CSS
          </span>
          <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 transform hover:bg-gray-900 hover:scale-110 hover:text-white cursor-pointer">
            JavaScript
          </span>
          <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 transform hover:bg-gray-900 hover:scale-110 hover:text-white cursor-pointer">
            React.js
          </span>
          <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 transform hover:bg-gray-900 hover:scale-110 hover:text-white cursor-pointer">
            Node.js
          </span>
          <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 transform hover:bg-gray-900 hover:scale-110 hover:text-white cursor-pointer">
            Express.js
          </span>
          <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 transform hover:bg-gray-900 hover:scale-110 hover:text-white cursor-pointer">
            SQL
          </span>
          <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 transform hover:bg-gray-900 hover:scale-110 hover:text-white cursor-pointer">
            NoSQL
          </span>
          <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 transform hover:bg-gray-900 hover:scale-110 hover:text-white cursor-pointer">
            PostgreSQL
          </span>
          <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 transform hover:bg-gray-900 hover:scale-110 hover:text-white cursor-pointer">
            KnexJS
          </span>
          <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 transform hover:bg-gray-900 hover:scale-110 hover:text-white cursor-pointer">
            MongoDB
          </span>
          <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 transform hover:bg-gray-900 hover:scale-110 hover:text-white cursor-pointer">
            REST APIs
          </span>
          <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 transform hover:bg-gray-900 hover:scale-110 hover:text-white cursor-pointer">
            Git & GitHub
          </span>
          <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 transform hover:bg-gray-900 hover:scale-110 hover:text-white cursor-pointer">
            Postman
          </span>
          <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 transform hover:bg-gray-900 hover:scale-110 hover:text-white cursor-pointer">
            Swagger UI
          </span>
          <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 transform hover:bg-gray-900 hover:scale-110 hover:text-white cursor-pointer">
            Data Structures & Algorithm
          </span>
          <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 transform hover:bg-gray-900 hover:scale-110 hover:text-white cursor-pointer">
            DBMS
          </span>
          <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 transform hover:bg-gray-900 hover:scale-110 hover:text-white cursor-pointer">
            Computer Networks
          </span>
          <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 transform hover:bg-gray-900 hover:scale-110 hover:text-white cursor-pointer">
            Operating System
          </span>
        </div>
      </section>

      {/* Work Experience Section */}
      <section
        id="experience"
        ref={workExperienceRef}
        className={`w-full flex flex-col items-center justify-center py-8 px-4 min-h-[400px] transition-all duration-1000 ${
          workExperienceVisible
            ? "opacity-100 translate-y-0"
            : "opacity-100 translate-y-0"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Work Experience
        </h2>

        <div className="max-w-6xl w-full">
          {/* Timeline Item 1 - InDhanPay */}
          <div className="flex flex-col md:flex-row items-start mb-12 relative">
            {/* Left side - Company Info */}
            <div className="md:w-1/2 pr-8 mb-6 md:mb-0">
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-white mb-2">
                  InDhanPay Pvt. Ltd. (Intern)
                </h3>
                <p className="text-gray-400 text-sm mb-1">Indore</p>
                <p className="text-green-400 font-semibold mb-2">
                  Backend Developer
                </p>
                <p className="text-gray-300 text-sm">May 2025 - Nov 2025</p>
              </div>
            </div>

            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-600 transform -translate-x-1/2"></div>
            <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-green-500 rounded-full transform -translate-x-1/2 border-4 border-gray-900"></div>

            {/* Right side - Work Description */}
            <div className="md:w-1/2 pl-8">
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-green-400 mb-3">
                  Key Contributions
                </h4>
                <ul className="text-gray-300 mb-4 space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>
                      Applied core engineering principles to solve complex
                      system challenges, contributing to more reliable and
                      maintainable software solutions.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>
                      Developed and documented RESTful APIs using Swagger,
                      enhancing team collaboration and onboarding efficiency.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>
                      Reduced API latency by 80% through optimization
                      techniques, improving system responsiveness for users.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>
                      Designed and implemented a scalable service-based
                      architecture to enhance system modularity and
                      maintainability.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>
                      Integrated a push notification system using AWS SNS and
                      Firebase Cloud Messaging (FCM) for real-time alerts.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>
                      Utilized AWS S3 for secure storage of images and
                      documents, incorporating custom file and image compression
                      logic to minimize storage costs.
                    </span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">
                    Node.js
                  </span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">
                    Express.js
                  </span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">
                    PostgreSQL
                  </span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">
                    Knex.js
                  </span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">
                    Git
                  </span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">
                    GitHub
                  </span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">
                    AWS SNS
                  </span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">
                    AWS S3
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Item 2 - E-Notebook Project */}
          <div className="flex flex-col md:flex-row items-start relative">
            {/* Left side - Company Info */}
            <div className="md:w-1/2 pr-8 mb-6 md:mb-0">
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-white mb-2">
                  E-Notebook Project
                </h3>
                <p className="text-blue-400 font-semibold mb-2">
                  Frontend Developer Intern
                </p>
                <p className="text-gray-300 text-sm">Jan 2025 - Feb 2025</p>
              </div>
            </div>

            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-600 transform -translate-x-1/2"></div>
            <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 border-4 border-gray-900"></div>

            {/* Right side - Work Description */}
            <div className="md:w-1/2 pl-8">
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">
                  Key Contributions
                </h4>
                <p className="text-gray-300 mb-4">
                  Developed responsive and interactive user interfaces for the
                  E-Notebook project, focusing on creating seamless user
                  experiences. Implemented modern frontend technologies to build
                  dynamic web components and enhanced the overall application
                  performance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                    HTML
                  </span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                    CSS
                  </span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                    JavaScript
                  </span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                    Git
                  </span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                    GitHub
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="w-full flex flex-col items-center justify-center py-8 px-4 min-h-[400px]"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Projects
        </h2>

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 - E-commerce */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-2">
                E-commerce Platform
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                A full-featured e-commerce platform with product catalog,
                shopping cart, secure payment processing, order management, and
                admin dashboard. Includes user authentication, product search
                and filtering, wishlist functionality, and responsive design for
                optimal shopping experience.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold text-purple-400 mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                  React.js
                </span>
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                  Node.js
                </span>
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                  Express.js
                </span>
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                  PostgreSQL
                </span>
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                  Stripe API
                </span>
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                  Redux
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/aloksisodiya/ECommerce"
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-center transition duration-300 text-sm"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Project 2 - Resume Sync */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-2">Resume Sync</h3>
              <p className="text-gray-300 text-sm mb-4">
                A full-stack web application that simulates real Applicant
                Tracking Systems (ATS). The platform analyzes resumes against
                job descriptions using keyword matching algorithms and provides
                AI-powered suggestions via Ollama (llama3.2) for optimal keyword
                placement. Built with MERN stack, implemented JWT
                authentication, optimized AI response time by 3x (from 4s to
                ~1s), and created secure file processing for PDF/DOCX/TXT
                formats with automatic cleanup.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold text-blue-400 mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                  React 19
                </span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                  Vite
                </span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                  Node.js
                </span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                  Express.js
                </span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                  MongoDB
                </span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                  Ollama AI
                </span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                  Tailwind CSS
                </span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                  JWT
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/aloksisodiya/AI-Resume-Job-Description-Matcher"
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-center transition duration-300 text-sm"
              >
                GitHub
              </a>
              <a
                href="https://ai-resume-job-description-matcher-v.vercel.app/"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center transition duration-300 text-sm"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section
        id="contact"
        className="w-full flex flex-col items-center justify-center py-12 px-4 min-h-[400px]"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Connect With Me
        </h2>

        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/alok-sisodiya-095431218/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center text-center group"
          >
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-700 transition duration-300">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
            <p className="text-gray-300 text-sm">Connect professionally</p>
          </a>

          {/* Twitter Card */}
          <a
            href="https://x.com/AlokSisodiya10"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center text-center group"
          >
            <div className="w-20 h-20 bg-sky-500 rounded-full flex items-center justify-center mb-4 group-hover:bg-sky-600 transition duration-300">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Twitter</h3>
            <p className="text-gray-300 text-sm">Follow my journey</p>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/aloksisodiya"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center text-center group"
          >
            <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-600 transition duration-300">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
            <p className="text-gray-300 text-sm">View my code</p>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 border-t border-gray-700 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* About Section */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-white mb-3">
                Alok Sisodiya
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                MERN Stack Developer passionate about creating scalable web
                applications and delivering exceptional user experiences.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://www.linkedin.com/in/alok-sisodiya-095431218"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition duration-200"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/aloksisodiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition duration-200"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://x.com/AlokSisodiya10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition duration-200"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-bold text-white mb-3">
                Get In Touch
              </h3>
              <div className="space-y-2">
                <a
                  href="mailto:alok.sisodiya07@gmail.com"
                  className="flex items-center justify-center md:justify-end text-gray-400 hover:text-white transition duration-200 text-sm"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  aloksisodiya07@gmail.com
                </a>
                <p className="text-gray-400 text-sm">
                  Available for freelance opportunities
                </p>
                <p className="text-gray-400 text-sm">
                  Currently based in India
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Alok Sisodiya. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
