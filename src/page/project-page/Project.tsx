"use client";
import Navbar from "@/common/navbar/Navbar";
import PageHead from "@/common/page-head/Head";
import { useEffect, useState } from "react";
import projectData from "../../../public/dataProject.json";
import { motion } from "motion/react";

type Project = {
  projectName: string;
  projectCategory: string;
  projectDetail: string;
  projectImage: string;
  projectLink: string;
};

const CATEGORIES = ["ALL", "IOT", "WEBSITE"];

export default function Project() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setProjects(projectData as Project[]);
  }, []);

  const filtered =
    activeCategory === "ALL"
      ? projects
      : projects.filter(
          (p) => p.projectCategory.toUpperCase() === activeCategory
        );

  return (
    <>
      <PageHead />
      <Navbar />
      <motion.main
        className="min-h-screen bg-white text-[#111]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section */}
        <section className="md:pt-24 pt-16 pb-12 px-6 md:px-12 lg:px-20 border-b border-[#e8e8e8]">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-[#aaa] uppercase font-mono mb-4">
              Portfolio — Selected Works
            </p>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-[#111] leading-none mb-6">
              Projects
            </h1>
            <p className="text-[#888] text-base max-w-md leading-relaxed">
              A collection of things I've built — from IoT systems to full-stack
              web applications.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="px-6 md:px-12 lg:px-20 py-8 border-b border-[#e8e8e8]">
          <div className="max-w-6xl mx-auto flex items-center gap-2 flex-wrap">
            <span className="text-xs text-[#bbb] font-mono mr-2 tracking-widest uppercase">
              Filter:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-[#111] text-white border-[#111]"
                    : "bg-transparent text-[#888] border-[#ddd] hover:border-[#999] hover:text-[#333]"
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-xs font-mono text-[#bbb]">
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </section>

        {/* Project Grid */}
        <section className="px-6 md:px-12 lg:px-20 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, index) => (
              <motion.a
                key={index}
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group block rounded-2xl border overflow-hidden transition-all duration-300 bg-[#fafafa] ${
                  hoveredIndex === index
                    ? "border-[#bbb] -translate-y-1 shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
                    : "border-[#ebebeb]"
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48 bg-[#f0f0f0]">
                  <img
                    src={project.projectImage}
                    alt={project.projectName}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredIndex === index ? "scale-105" : "scale-100"
                    }`}
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-white/85 text-[#555] border border-[#ddd] backdrop-blur-sm">
                      {project.projectCategory}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h2 className="text-[#111] font-medium text-sm leading-snug">
                      {project.projectName}
                    </h2>
                    {/* Arrow icon */}
                    <svg
                      className={`w-4 h-4 shrink-0 transition-all duration-200 mt-0.5 ${
                        hoveredIndex === index
                          ? "text-[#111] translate-x-0.5 -translate-y-0.5"
                          : "text-[#ccc]"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25"
                      />
                    </svg>
                  </div>
                  <p className="text-[#999] text-xs leading-relaxed line-clamp-3">
                    {project.projectDetail}
                  </p>

                  {/* Footer */}
                  <div className="mt-4 pt-4 border-t border-[#f0f0f0] flex items-center gap-1.5">
                    <svg
                      className="w-3 h-3 text-[#bbb]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="text-[10px] font-mono text-[#bbb] truncate">
                      {project.projectLink.replace("https://github.com/", "")}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-[#ccc] font-mono text-sm">
              No projects found.
            </div>
          )}
        </section>
      </motion.main>
    </>
  );
}
