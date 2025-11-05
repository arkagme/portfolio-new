import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Award, Code, Briefcase, GraduationCap, Terminal , Link , FileUser , Rss } from 'lucide-react';
//import './App.css';

export default function Portfolio() {
  const skills = {
    languages: ['Python', 'JavaScript', 'TypeScript', 'C++', 'C', 'Java'],
    frameworks: ['React.js', 'Express.js', 'FastAPI', 'Django', 'Flask', 'Passport.js'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'ChromaDB'],
    tools: ['GitHub', 'Firebase', 'Supabase', 'Unity', 'Blender', 'Figma', 'Nginx'],
    cloud: ['AWS EC2', 'AWS RDS', 'Microsoft Azure']
  };

  const projects = [
    {
      name: 'Inbox Insight',
      tech: 'Node.js, MongoDB, React.js, AWS EC2, Nginx',
      description: 'Email deliverability analyzer with real-time monitoring and automated folder detection',
      highlights: [
        'REST APIs for email monitoring with shareable reports within 2 minutes',
        'Deployed on AWS EC2 with Netlify frontend'
      ],
      link: 'https://email.arkagme.me',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Dynamic QR Tool',
      tech: 'Node.js, PostgreSQL, React.js, AWS RDS',
      description: 'Dynamic QR code generator with Google OAuth and real-time analytics',
      highlights: [
        'Handles 300+ daily requests with user-specific logo uploads via CDN',
        'Deployed on Azure VM with 99.9% uptime and custom domain'
      ],
      link: 'https://qr.arkagme.me',
      color: 'from-orange-500 to-red-500'
    },
        {
      name: 'QueryFlow',
      tech: 'React.js, FastAPI, PostgreSQL, ChromaDB, Gemini AI',
      description: 'No-code AI workflow automation platform with drag-and-drop interface for visual AI pipeline design',
      highlights: [
        'Integrated intelligent document processing with web search capabilities',
        'REST APIs handling document uploads, vector embeddings, and workflow orchestration'
      ],
      github: 'https://github.com/arkagme/queryflow-backend',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'GeoAR',
      tech: 'Unity, Vuforia, Android',
      description: 'AR geography app - 4th Place at Mercer Mettl Visionary Hackathon',
      highlights: [
        'Built with Unity/Vuforia featuring 3D terrain, rivers, and cultural overlays',
        'Intuitive touch controls enhancing accessibility for Indian students'
      ],
      github: 'https://github.com/arkagme/GeoAR-Proj',
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  const experience = [
    {
      role: 'Backend Developer Intern',
      company: 'TARS',
      period: 'Jan 2025 - May 2025',
      achievements: [
        'Co-designed system architecture and database models using PostgreSQL',
        'Developed 3 key REST APIs in TypeScript with test writing and QA methodologies',
        'Engineered comprehensive database schema with optimized tables',
        'Documented API endpoints with Postman and Swagger'
      ]
    }
  ];

  const achievements = [
    '🥇 4th Position - National Mercer Mettl Hackathon (Oct 2024)',
    '🥉 3rd Position - Intel One API Hackathon, KPR College (Nov 2024)',
    '🎓 Bertelsmann Tech Booster Scholar - Udacity GenAI Nanodegree (2025)'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-orange-900/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-8 h-8 text-cyan-400" />
            <span className="text-cyan-400 font-mono text-sm">~/arkaprava-gaine</span>
          </div>
          
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
            Arkaprava Gaine
          </h1>
          
          <p className="text-2xl text-gray-300 mb-6 font-light">
            Backend Developer & AI Enthusiast
          </p>
          
          <p className="text-gray-400 max-w-2xl mb-8 text-lg">
            Computer Science student specializing in IoT & Automation at SASTRA University. 
            Passionate about building scalable backend systems, AI workflows, and immersive AR experiences.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="mailto:codearka2002@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 border border-gray-700 rounded-lg transition-all">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span className="text-sm">codearka2002@gmail.com</span>
            </a>
            <a href="tel:9007481188" className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 border border-gray-700 rounded-lg transition-all">
              <Phone className="w-4 h-4 text-green-400" />
              <span className="text-sm">9007481188</span>
            </a>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span className="text-sm">Kolkata, West Bengal</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/arkagme" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-600 rounded-lg transition-all">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/arkagme" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg transition-all">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a href="https://drive.google.com/file/d/1Vv3SWGD4YOQMVlCh3y9hbt5ZSnUIqwd9/view?usp=sharing" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-600 rounded-lg transition-all">
              <FileUser className="w-5 h-5" />
              <span>Resume</span>
            </a>
            <a href="https://blog.arkagme.me/" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-600 rounded-lg transition-all">
              <Rss className="w-5 h-5" />
              <span>Blog</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Education */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-2xl font-semibold text-white">Bachelor of Technology</h3>
                <p className="text-cyan-400 text-lg">Computer Science & Engineering (IoT & Automation)</p>
              </div>
              <span className="text-gray-400 text-sm">Oct 2022 - Jun 2026</span>
            </div>
            <p className="text-gray-300 mb-2">SASTRA Deemed to be University, Thanjavur</p>
            <p className="text-gray-400">Academic Project: Behavioural Rhythm Insider Threat Detection using Bi-LSTMs</p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-green-400" />
            <h2 className="text-4xl font-bold">Experience</h2>
          </div>
          
          {experience.map((exp, idx) => (
            <div key={idx} className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-green-400 text-lg">{exp.company}</p>
                </div>
                <span className="text-gray-400 text-sm">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-2">
                    <span className="text-green-400 mt-1">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-8 h-8 text-orange-400" />
            <h2 className="text-4xl font-bold">Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all rounded-lg p-6 group">
                <div className={`h-1 w-20 bg-gradient-to-r ${project.color} rounded-full mb-4`}></div>
                
                <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-3 font-mono">{project.tech}</p>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm">
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm">
                    <Link className="w-4 h-4" />
                    <span>Live Link</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Terminal className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold">Skills</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4 capitalize">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-cyan-400 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-yellow-400" />
            <h2 className="text-4xl font-bold">Achievements & Certifications</h2>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <ul className="space-y-4">
              {achievements.map((achievement, idx) => (
                <li key={idx} className="text-gray-300 text-lg flex items-start gap-3">
                  <span className="text-2xl">{achievement.split(' ')[0]}</span>
                  <span>{achievement.substring(achievement.indexOf(' ') + 1)}</span>
                </li>
              ))}
              <li className="text-gray-300 text-lg flex items-start gap-3 pt-4 border-t border-gray-800">
                <span className="text-cyan-400">📚</span>
                <div>
                  <span className="text-cyan-400 font-semibold">Udacity GenAI Nanodegree</span>
                  <span className="text-gray-400"> - Hands-on experience with fine-tuning foundation models, LLMs, RAG, Transformers, Vision models, LangChain, and Vector databases</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Leadership */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-red-400" />
            <h2 className="text-4xl font-bold">Leadership</h2>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">Head of AR & VR Cluster</h3>
                <p className="text-red-400 text-lg">Developer Community Sastra, SASTRA University</p>
              </div>
              <span className="text-gray-400 text-sm">Aug 2024 - Jun 2025</span>
            </div>
            <ul className="space-y-2">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-red-400 mt-1">▹</span>
                <span>Led teams with 20+ members building apps, websites, and AR experiences</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-red-400 mt-1">▹</span>
                <span>3D modeling in Blender, game development in Unity, and AR filters using Google AR Core</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-red-400 mt-1">▹</span>
                <span>Conducted and organized multiple workshops with 100+ participants</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p className="mb-2">Built with React & Tailwind CSS</p>
          <p className="text-sm">© 2025 Arkaprava Gaine. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Add Users icon
function Users(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}