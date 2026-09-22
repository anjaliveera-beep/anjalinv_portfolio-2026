import React, { useState } from 'react';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowUpRight, CheckCircle2, ChevronRight, Layers, Sparkles, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ProjectWork {
  id: string;
  year: string;
  category: string;
  client: string;
  title: string;
  aspectRatio: string;
  headline: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  imageUrl: string;
  deliverables: string[];
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }
  }
};

const projectReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export const EditorialSelectedWork: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'spotlight' | 'grid'>('spotlight');

  const projects: ProjectWork[] = [
    {
      id: 'disney-gaming',
      year: '2008 – 2014',
      category: 'SYSTEMS & PERFORMANCE',
      client: 'Disney Interactive',
      title: 'Disney Real-Time Gaming Engine & Core Loop Architecture',
      aspectRatio: 'aspect-[16/9] lg:aspect-[21/9]',
      headline: 'Sub-16ms render frames on 64MB hardware constraints for 300 published titles.',
      description: 'Architected and optimized low-level rendering loops, texture atlases, memory allocators, and deterministic game states across 200–300 mobile titles distributed globally. Established the bare-metal intuition for hardware bottlenecks and zero-alloc memory management.',
      metrics: [
        { label: 'TITLES SHIPPED', value: '200–300' },
        { label: 'RENDER FRAME TIME', value: '< 16ms' },
        { label: 'DEVICE TARGETS', value: '1,000+' }
      ],
      tags: ['C++', 'Java ME', 'OpenGL ES', 'Low-Latency Loops', 'Memory Optimization'],
      imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80',
      deliverables: [
        'Custom memory pooling eliminating garbage collection pauses during gameplay',
        'Multi-threaded audio and render decoupling for constant 60 FPS gameplay',
        'Automated multi-device build and regression test pipeline'
      ]
    },
    {
      id: 'lets-fight-back',
      year: '2016 – PRESENT',
      category: 'SOCIAL INNOVATION & NGO',
      client: "Let's Fight Back Foundation",
      title: 'Grassroots Self-Defense & Legal Rights Infrastructure',
      aspectRatio: 'aspect-[4/5]',
      headline: 'Equipping 5,000+ girls in remote tribal villages with martial arts and constitutional literacy.',
      description: 'Founded and self-funded a grassroots NGO delivering hands-on martial arts kickboxing training, legal rights awareness, and abuse intervention protocols across remote hamlets (Bhimdongri, Malai Talao) and municipal schools.',
      metrics: [
        { label: 'GIRLS TRAINED', value: '5,000+' },
        { label: 'TRIBAL VILLAGES', value: '15+' },
        { label: 'WORKSHOPS DELIVERED', value: '120+' }
      ],
      tags: ['Grassroots Activism', 'Martial Arts Kickboxing', 'Constitutional Rights', 'Nonprofit'],
      imageUrl: '/assets/letsfightback.jpg',
      deliverables: [
        'Curriculum combining physical self-defense with Indian Penal Code legal literacy',
        'Direct community engagement overcoming systemic socio-cultural barriers',
        'Mentorship network fostering psychological confidence and bodily sovereignty'
      ]
    },
    {
      id: 'enterprise-genai',
      year: '2020 – PRESENT',
      category: 'ENTERPRISE SCALE & GENAI',
      client: 'TCS • Verizon • Wells Fargo • EPAM • Apply Digital',
      title: 'Enterprise Multi-Agent GenAI & Cloud Reliability Hub',
      aspectRatio: 'aspect-[16/10]',
      headline: 'Directing 125+ engineers across 80+ AI deployments with zero SLA breaches.',
      description: 'Building on foundational enterprise engineering spanning TCS, Verizon, Wells Fargo, and EPAM Systems, established the center of excellence for enterprise generative AI at Apply Digital. Orchestrating multi-agent RAG, tool-calling systems, and compliance on Google Vertex AI with a 98% team retention rate.',
      metrics: [
        { label: 'ENGINEERS DIRECTED', value: '125+' },
        { label: 'TEAM RETENTION', value: '98%' },
        { label: 'SLA BREACHES', value: '0' }
      ],
      tags: ['Enterprise Scale', 'Google Vertex AI', 'Agentic Systems', 'GCP', 'Kubernetes'],
      imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80',
      deliverables: [
        'Multi-agent RAG pipeline delivering 45% customer satisfaction improvement',
        'Mission-critical financial systems and cloud reliability handling millions of daily events',
        'Psychological safety leadership framework yielding 98% retention across 3 global regions'
      ]
    },
    {
      id: 'civic-diplomacy',
      year: '2024 – 2026',
      category: 'INTERNATIONAL RECOGNITION',
      client: 'United Nations & INvolve Worldwide',
      title: 'Global Civic Leadership & International Delegation',
      aspectRatio: 'aspect-[21/9]',
      headline: '#2 Future Leader Global Leadership Awardee supported by YouTube & INvolve Worldwide.',
      description: 'Recognized as #2 Future Leader on the prestigious global INvolve list supported by YouTube. Selected as a fully funded delegate to the United Nations and Young Professional Fellowship Canada; 2026 Canadian Women Empowerment Awards finalist representing women engineering leaders internationally.',
      metrics: [
        { label: 'GLOBAL RANKING', value: '#2' },
        { label: 'ORGANIZATION', value: 'INvolve & YouTube' },
        { label: 'RECOGNITION', value: 'UN Youth Fellow' }
      ],
      tags: ['Diplomatic Delegation', 'Global Women Leaders', 'UN SDGs', 'Keynote Speaker'],
      imageUrl: '/assets/ypf_conference.jpeg',
      deliverables: [
        'Represented Canada at high-level international civic forums on youth empowerment',
        'Published thought leadership on the intersection of AI governance and gender equity',
        'Recognized among top global changemakers as #2 Future Leader worldwide'
      ]
    }
  ];

  const currentProject = projects[activeProjectIndex];

  return (
    <div className="w-full h-full flex flex-col justify-center py-20 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto overflow-y-auto">
      
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-6 shrink-0">
        <div>
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#D49354] mb-2">
            <span className="w-8 h-px bg-[#D49354]"></span>
            <span className="uppercase">Selected Work & Architecture</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl text-[#FAF7F2] tracking-tight">
            Case Studies & Proven Impact
          </h2>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2 bg-[#15171E] border border-[#FAF7F2]/10 p-1 rounded-lg self-start sm:self-auto shrink-0">
          <button
            onClick={() => setViewMode('spotlight')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all cursor-pointer ${
              viewMode === 'spotlight'
                ? 'bg-[#D49354] text-[#0D0E12] font-semibold shadow'
                : 'text-[#D6D0C5] hover:text-[#FAF7F2]'
            }`}
          >
            Spotlight View
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-[#D49354] text-[#0D0E12] font-semibold shadow'
                : 'text-[#D6D0C5] hover:text-[#FAF7F2]'
            }`}
          >
            All 4 Cases
          </button>
        </div>
      </div>

      {/* Project Selector Pills */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-6 shrink-0">
        {projects.map((proj, idx) => {
          const isActive = idx === activeProjectIndex;
          return (
            <button
              key={proj.id}
              onClick={() => {
                setActiveProjectIndex(idx);
                if (viewMode !== 'spotlight') setViewMode('spotlight');
              }}
              className={`p-3 rounded-lg text-left transition-all border cursor-pointer ${
                isActive
                  ? 'bg-[#1D1F28] border-[#D49354] shadow-[0_0_16px_rgba(212,147,84,0.15)]'
                  : 'bg-[#15171E] border-[#FAF7F2]/10 hover:border-[#FAF7F2]/25'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] font-mono mb-0.5">
                <span className={isActive ? 'text-[#D49354] font-bold' : 'text-[#FAF7F2]/50'}>
                  0{idx + 1}
                </span>
                <span className="text-[10px] text-[#D6D0C5]/60 truncate ml-2">
                  {proj.year}
                </span>
              </div>
              <span className="text-xs font-serif font-medium text-[#FAF7F2] line-clamp-1 block">
                {proj.client}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mode 1: Spotlight View */}
      {viewMode === 'spotlight' && (
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="bg-[#15171E] border border-[#FAF7F2]/10 rounded-xl p-6 sm:p-8 lg:p-10 shadow-2xl shrink-0"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="text-[#D49354] font-bold uppercase tracking-wider">
                  WORK / 0{activeProjectIndex + 1}
                </span>
                <span className="text-[#FAF7F2]/30">&bull;</span>
                <span className="text-[#FAF7F2]/70 uppercase tracking-widest text-[11px]">
                  {currentProject.category}
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-[#D49354] uppercase tracking-wider block mb-1">
                  {currentProject.client}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF7F2] leading-tight">
                  {currentProject.title}
                </h3>
              </div>

              <blockquote className="font-serif text-sm sm:text-base italic text-[#D49354] border-l-2 border-[#D49354] pl-3 leading-snug">
                &ldquo;{currentProject.headline}&rdquo;
              </blockquote>

              <p className="text-xs sm:text-sm text-[#D6D0C5] font-sans font-light leading-relaxed">
                {currentProject.description}
              </p>

              {/* Key Deliverables */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#FAF7F2]/70 block">
                  Key Milestones & Outcomes:
                </span>
                <div className="space-y-1">
                  {currentProject.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-[#D6D0C5]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D49354] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-3 gap-2.5 pt-2 hairline-t">
                {currentProject.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="bg-[#1D1F28] p-2.5 rounded border border-[#FAF7F2]/10">
                    <span className="text-[9px] font-mono text-[#FAF7F2]/70 uppercase tracking-widest block truncate">
                      {m.label}
                    </span>
                    <span className="font-serif text-base text-[#FAF7F2] font-semibold block mt-0.5 truncate">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tags & Verification Link */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {currentProject.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono text-[#FAF7F2]/85 bg-[#1D1F28] border border-[#FAF7F2]/15 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {currentProject.id === 'civic-diplomacy' && (
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#D49354] hover:text-[#FAF7F2] flex items-center gap-1 transition-colors"
                  >
                    <span>Verify LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Image & Navigation Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-lg overflow-hidden border border-[#FAF7F2]/10 aspect-[16/10] bg-[#0D0E12] group">
                <img
                  src={currentProject.imageUrl}
                  alt={currentProject.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale contrast-125 opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E12] via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-3 right-3 bg-[#0D0E12]/90 border border-[#D49354]/40 px-3 py-1 rounded text-xs font-mono text-[#D49354] backdrop-blur-md">
                  {currentProject.year}
                </div>
              </div>

              {/* Prev / Next Spotlight Controls */}
              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => setActiveProjectIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1))}
                  className="px-3.5 py-1.5 bg-[#1D1F28] hover:bg-[#252835] text-xs font-mono text-[#FAF7F2] rounded border border-[#FAF7F2]/10 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  &larr; Prev Case
                </button>

                <div className="text-xs font-mono text-[#FAF7F2]/50">
                  {activeProjectIndex + 1} of {projects.length}
                </div>

                <button
                  onClick={() => setActiveProjectIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0))}
                  className="px-3.5 py-1.5 bg-[#1D1F28] hover:bg-[#252835] text-xs font-mono text-[#FAF7F2] rounded border border-[#FAF7F2]/10 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  Next Case &rarr;
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      )}

      {/* Mode 2: Bento Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 shrink-0">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="bg-[#15171E] border border-[#FAF7F2]/10 hover:border-[#D49354]/50 rounded-xl p-5 flex flex-col justify-between space-y-3 shadow-xl transition-all group cursor-pointer"
              onClick={() => {
                setActiveProjectIndex(idx);
                setViewMode('spotlight');
              }}
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#D49354] font-bold">WORK / 0{idx + 1}</span>
                  <span className="text-[#FAF7F2]/50">{proj.year}</span>
                </div>

                <h4 className="font-serif text-lg text-[#FAF7F2] group-hover:text-[#D49354] transition-colors leading-snug">
                  {proj.title}
                </h4>

                <p className="text-xs text-[#D6D0C5] line-clamp-2 font-light leading-relaxed">
                  {proj.description}
                </p>

                <div className="grid grid-cols-3 gap-2 pt-2 hairline-t">
                  {proj.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="text-[9px] font-mono text-[#FAF7F2]/70 block uppercase truncate">
                        {m.label}
                      </span>
                      <span className="font-serif text-sm text-[#FAF7F2] font-semibold block truncate">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-[#D49354] pt-1">
                <span>VIEW CASE STUDY</span>
                <span>&rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}

    </div>
  );
};
