'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaAws, FaDocker } from 'react-icons/fa';
import { SiDotnet, SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import React from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  live?: string;
  icon: React.ReactNode;
  gradient: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with product management, cart functionality, and secure payment processing.',
    tags: ['.NET Core', 'React', 'PostgreSQL', 'Docker'],
    image: '/project1.jpg',
    github: 'https://github.com',
    live: 'https://example.com',
    icon: <FaReact className="w-8 h-8" />,
    gradient: 'from-[#007FFF] to-[#0059B2]'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Real-time collaborative task management with instant updates and team collaboration features.',
    tags: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    image: '/project2.jpg',
    github: 'https://github.com',
    icon: <FaNodeJs className="w-8 h-8" />,
    gradient: 'from-[#68A063] to-[#3D7A35]'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A modern, performant portfolio website with smooth animations and responsive design.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/project3.jpg',
    github: 'https://github.com',
    live: 'https://example.com',
    icon: <SiNextdotjs className="w-8 h-8" />,
    gradient: 'from-[#000000] to-[#333333]'
  },
  {
    id: 4,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud infrastructure with CI/CD pipelines and automated deployments.',
    tags: ['AWS', 'Terraform', 'Docker', 'Kubernetes'],
    image: '/project4.jpg',
    github: 'https://github.com',
    icon: <FaAws className="w-8 h-8" />,
    gradient: 'from-[#FF9900] to-[#FF6B00]'
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-[#000d1a] to-[#001a33] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#007FFF] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#3399FF] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#3399FF] to-[#66B2FF] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work. Each project showcases different aspects of my skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-[#001a33] border border-[#003366] hover:border-[#007FFF] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#007FFF]/10"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`}></div>
              
              <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-[#003366] rounded-xl mr-4 group-hover:bg-[#007FFF] transition-colors duration-300">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs bg-[#00264d] text-[#66B2FF] rounded-full border border-[#003366]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 pt-4 border-t border-[#003366]">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-[#66B2FF] transition-colors group-hover:translate-x-1 duration-300"
                      aria-label="View code on GitHub"
                    >
                      <FiGithub className="mr-2" /> Code
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-[#66B2FF] transition-colors group-hover:translate-x-1 duration-300"
                      aria-label="View live demo"
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#007FFF] to-[#3399FF] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiCode className="mr-2" />
            Have a project in mind? Let's talk
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
