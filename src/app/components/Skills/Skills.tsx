'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaServer, FaMobileAlt, FaCode, FaDatabase, FaCloud, FaTools, FaMicrosoft } from 'react-icons/fa';
import { SiDotnet, SiPostgresql, SiTypescript, SiTailwindcss, SiNextdotjs, SiGraphql, SiMongodb } from 'react-icons/si';
import React from 'react';

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    icon: React.ReactNode;
    description: string;
  }[];
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <FaCode className="w-6 h-6 text-[#3399FF]" />,
    skills: [
      {
        name: 'React',
        icon: <FaReact className="w-8 h-8 text-[#61DAFB]"/>,
        description: 'Building interactive UIs with React and Next.js'
      },
      {
        name: 'TypeScript',
        icon: <SiTypescript className="w-8 h-8 text-[#3178C6]"/>,
        description: 'Type-safe JavaScript for better developer experience'
      },
      {
        name: 'Next.js',
        icon: <SiNextdotjs className="w-8 h-8 text-white"/>,
        description: 'Server-side rendering and static site generation'
      },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]"/>,
        description: 'Utility-first CSS framework for rapid UI development'
      }
    ]
  },
  {
    title: 'Backend',
    icon: <FaServer className="w-6 h-6 text-[#3399FF]"/>,
    skills: [
      {
        name: '.NET Core',
        icon: <SiDotnet className="w-8 h-8 text-[#512BD4]"/>,
        description: 'Building scalable APIs and microservices'
      },
      {
        name: 'Node.js',
        icon: <FaNodeJs className="w-8 h-8 text-[#68A063]"/>,
        description: 'JavaScript runtime for server-side applications'
      },
      {
        name: 'GraphQL',
        icon: <SiGraphql className="w-8 h-8 text-[#E10098]"/>,
        description: 'Query language for APIs with efficient data loading'
      }
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: <FaCloud className="w-6 h-6 text-[#3399FF]"/>,
    skills: [
      {
        name: 'Azure',
        icon: <FaMicrosoft className="w-8 h-8 text-[#0089D6]" />,
        description: 'Cloud services and infrastructure'
      },
      {
        name: 'AWS',
        icon: <FaAws className="w-8 h-8 text-[#FF9900]"/>,
        description: 'Cloud computing services'
      },
      {
        name: 'Docker',
        icon: <FaDocker className="w-8 h-8 text-[#2496ED]"/>,
        description: 'Containerization and deployment'
      }
    ]
  },
  {
    title: 'Mobile',
    icon: <FaMobileAlt className="w-6 h-6 text-[#3399FF]"/>,
    skills: [
      {
        name: 'React Native',
        icon: <FaReact className="w-8 h-8 text-[#61DAFB]"/>,
        description: 'Cross-platform mobile development'
      }
    ]
  },
  {
    title: 'Database',
    icon: <FaDatabase className="w-6 h-6 text-[#3399FF]"/>,
    skills: [
      {
        name: 'PostgreSQL',
        icon: <SiPostgresql className="w-8 h-8 text-[#336791]"/>,
        description: 'Relational database management'
      },
      {
        name: 'MongoDB',
        icon: <FaDatabase className="w-8 h-8 text-[#47A248]"/>,
        description: 'NoSQL database for flexible schemas'
      }
    ]
  },
  {
    title: 'Tools',
    icon: <FaTools className="w-6 h-6 text-[#3399FF]"/>,
    skills: [
      {
        name: 'Git',
        icon: <FaGitAlt className="w-8 h-8 text-[#F05032]"/>,
        description: 'Version control and collaboration'
      }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#001a33] to-[#000d1a] relative overflow-hidden">
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
            Technical Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className="bg-[#001a33] bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-[#003366] hover:border-[#007FFF] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#007FFF]/10"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-[#003366] rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-start space-x-3 group">
                    <div className="p-2 bg-[#00264d] rounded-lg mt-0.5 group-hover:bg-[#007FFF] transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{skill.name}</h4>
                      <p className="text-sm text-gray-400">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
