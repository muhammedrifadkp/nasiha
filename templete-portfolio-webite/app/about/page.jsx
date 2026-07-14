"use client";
import Image from 'next/image';
import Link from 'next/link';
import { TbArrowUpRight, TbDownload, TbMail, TbPhone, TbMapPin } from "react-icons/tb";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useState } from 'react';

export default function About() {
    const [activeTab, setActiveTab] = useState('profile');

    // Technical skills with ratings
    const skills = [
        { name: "Autodesk Revit Architecture", rating: 5 },
        { name: "AutoCAD (2D/3D Drafting)", rating: 5 },
        { name: "3ds Max Modeling", rating: 5 },
        { name: "Corona Renderer", rating: 5 },
        { name: "V-Ray Rendering", rating: 4 },
        { name: "Lumion Visualization", rating: 5 },
        { name: "SketchUp Concept Design", rating: 4 },
        { name: "Adobe Photoshop Post-Processing", rating: 4 },
        { name: "BIM Coordination & Layouts", rating: 5 },
        { name: "Space Planning & Anthropometrics", rating: 5 }
    ];

    // Education timeline
    const education = [
        {
            period: "2025",
            degree: "Diploma in Architectural Design & 3D Visualizer with Autodesk Revit",
            institution: "CADD Centre Training Services"
        },
        {
            period: "2026",
            degree: "AI Powered Smart Building Certificate",
            institution: "Professional BIM Seminar"
        }
    ];

    // Experience timeline
    const experience = [
        {
            period: "Jan 2026 - Present",
            position: "Interior Designer",
            company: "Iman Interior Design and Furniture",
            location: "Kasaragod, India",
            points: [
                "Designed 25+ high-quality residential interiors, establishing distinct design concepts, functional layouts, and bespoke material palettes.",
                "Produced 60+ photorealistic renders using advanced software to accurately communicate spatial volume, material finishes, and lighting aesthetics.",
                "Coordinated closely with 10+ contractors, furniture fabricators, and specialized vendors to oversee the seamless transition from design concepts to on-site execution."
            ]
        },
        {
            period: "June 2025 - Dec 2025",
            position: "Interior Design Intern (Freelance)",
            company: "Urban Interiors",
            location: "India / Dubai (Remote)",
            points: [
                "Developed precise Revit models for 15+ complex architectural and interior projects, streamlining the collaborative workflow and structural documentation pipeline.",
                "Assisted in the conceptualization of mood boards, material selections, and detailed 2D space planning for international residential and commercial spaces."
            ]
        }
    ];

    // Core Competencies
    const competencies = [
        "Creative Design & Spatial Thinking",
        "Attention to Detail & Material Selection",
        "Problem Solving & Space Optimization",
        "Client Communication & Presentation",
        "Team Collaboration & Project Coordination",
        "BIM Coordination & RCP Planning"
    ];

    // Languages
    const languages = [
        { name: "English", proficiency: 4 },
        { name: "Malayalam", proficiency: 5 }
    ];

    return (
        <div className="bg-brand-dark min-h-screen">
            {/* Header banner */}
            <div className="relative py-24 md:py-32 border-b border-brand-gold/10 bg-[url('/portfolio_assets/works/bedroom/bedroom_02_v1.jpg.jpeg')] bg-cover bg-center overflow-hidden">
                {/* Dark Sapphire Overlay */}
                <div className="absolute inset-0 bg-brand-dark/85"></div>
                <div className="absolute top-[-50%] left-[-20%] w-[60%] h-[100%] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none"></div>
                <div className="container relative z-10 text-center lg:text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">Discover My Journey</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-light mt-2">ABOUT ME</h1>
                </div>
            </div>

            <div className="container py-16">
                {/* Profile Card and Summary Section */}
                <div className="grid gap-12 lg:grid-cols-3 items-start min-w-0">
                    
                    {/* Left: Profile Card */}
                    <div className="group min-w-0">
                        <div className="relative overflow-hidden transition-all duration-500 rounded-xl bg-brand-card border border-brand-gold/15 p-4 shadow-xl hover:border-brand-gold/30">
                            {/* Profile Image */}
                            <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-brand-dark mb-6">
                                <Image
                                    src="/portfolio_assets/profile/nasiha-sara.png"
                                    fill
                                    style={{objectFit: "cover"}}
                                    alt="Nasiha Sara - Architectural Designer"
                                    className="transition-transform duration-700 group-hover:scale-102"
                                    sizes="(max-w-768px) 100vw, 400px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
                            </div>

                            {/* Profile Info */}
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-brand-light mb-1">Nasiha Sara</h2>
                                <p className="text-xs font-semibold text-brand-gold tracking-widest uppercase mb-4">Architectural Designer & Visualizer</p>

                                <div className="flex flex-col gap-3 text-sm text-brand-muted border-t border-brand-gold/10 pt-4">
                                    <div className="flex items-center gap-3">
                                        <TbMapPin className="text-brand-gold text-lg shrink-0" />
                                        <span>Kasaragod, Kerala, India</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <TbPhone className="text-brand-gold text-lg shrink-0" />
                                        <a href="tel:+918547158843" className="hover:text-brand-gold transition-colors">+91 85471 58843</a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <TbMail className="text-brand-gold text-lg shrink-0" />
                                        <a href="mailto:naziyashihab6@gmail.com" className="hover:text-brand-gold transition-colors">naziyashihab6@gmail.com</a>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <a 
                                        href="/portfolio_assets/cv/nasiha-sara-cv.pdf" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold tracking-widest uppercase text-brand-dark bg-brand-gold hover:bg-brand-gold-hover rounded-full shadow transition-all duration-300"
                                    >
                                        Download CV <TbDownload className="text-base" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Tabbed Info Section */}
                    <div className="lg:col-span-2 space-y-8 min-w-0">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-brand-light mb-4">Professional Summary</h2>
                            <p className="text-brand-muted text-base md:text-lg mb-4 font-light leading-relaxed">
                                Detail-oriented and creative Architectural Designer, 3D Visualizer, and Revit Architect with a strong background in architectural drafting, high-end 3D modeling, and realistic rendering. I specialize in transforming complex design concepts into immersive visual experiences and highly accurate building models.
                            </p>
                            <p className="text-brand-muted text-base md:text-lg mb-6 font-light leading-relaxed">
                                With proven experience in residential interior modeling and commercial drafting, I bring a keen eye for detail, spatial planning, and aesthetic functionality to professional design projects. I seek to contribute fresh, creative BIM and visualization solutions to collaborative design teams.
                            </p>
                        </div>

                        {/* Tab Buttons */}
                        <div className="flex flex-row overflow-x-auto whitespace-nowrap no-scrollbar gap-2 border-b border-brand-gold/10 pb-px">
                            {[
                                { id: 'profile', label: 'About Me' },
                                { id: 'skills', label: 'Technical Skills' },
                                { id: 'experience', label: 'Work Experience' },
                                { id: 'education', label: 'Education & Certificates' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-5 py-2.5 text-xs font-bold tracking-wider uppercase transition-colors rounded-t-lg shrink-0 ${
                                        activeTab === tab.id 
                                            ? 'bg-brand-gold text-brand-dark' 
                                            : 'bg-brand-card/50 text-brand-muted hover:text-brand-light hover:bg-brand-card'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Tab Contents */}
                        <div className="p-6 bg-brand-card/40 border border-brand-gold/5 rounded-xl min-h-[350px]">
                            
                            {/* Profile Tab */}
                            {activeTab === 'profile' && (
                                <div className="space-y-6 animate-fadeIn">
                                    <div>
                                        <h3 className="text-xl font-serif font-semibold text-brand-gold mb-3">Core Competencies</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {competencies.map((comp, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-sm text-brand-muted font-light">
                                                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0"></span>
                                                    <span>{comp}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-brand-gold/10">
                                        <h3 className="text-xl font-serif font-semibold text-brand-gold mb-4">Languages</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {languages.map((lang, idx) => (
                                                <div key={idx} className="p-4 bg-brand-card rounded-lg border border-brand-gold/5">
                                                    <p className="font-semibold text-brand-light mb-2">{lang.name}</p>
                                                    <div className="flex gap-1">
                                                        {[...Array(5)].map((_, i) => (
                                                            i < lang.proficiency ?
                                                            <FaStar key={i} className="text-brand-gold text-sm" /> :
                                                            <FaRegStar key={i} className="text-brand-muted/20 text-sm" />
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Skills Tab */}
                            {activeTab === 'skills' && (
                                <div className="space-y-6 animate-fadeIn">
                                    <h3 className="text-xl font-serif font-semibold text-brand-gold">Software & Architecture Suite</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {skills.map((skill, idx) => (
                                            <div key={idx} className="p-4 bg-brand-card rounded-lg border border-brand-gold/5">
                                                <div className="flex justify-between mb-2">
                                                    <h4 className="text-sm font-semibold text-brand-light">{skill.name}</h4>
                                                    <div className="flex gap-0.5">
                                                        {[...Array(5)].map((_, i) => (
                                                            i < skill.rating ?
                                                            <FaStar key={i} className="text-brand-gold text-[10px]" /> :
                                                            <FaRegStar key={i} className="text-brand-muted/20 text-[10px]" />
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="w-full h-1 bg-brand-dark rounded-full overflow-hidden">
                                                    <div 
                                                        className="h-full bg-brand-gold rounded-full"
                                                        style={{ width: `${skill.rating * 20}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Experience Tab */}
                            {activeTab === 'experience' && (
                                <div className="space-y-6 animate-fadeIn">
                                    <h3 className="text-xl font-serif font-semibold text-brand-gold">Career Timeline</h3>
                                    <div className="relative pl-6 border-l border-brand-gold/10 space-y-8">
                                        {experience.map((exp, idx) => (
                                            <div key={idx} className="relative">
                                                {/* timeline dot */}
                                                <div className="absolute w-3 h-3 bg-brand-gold rounded-full -left-[32px] top-1.5 border-4 border-brand-dark"></div>
                                                
                                                <div className="bg-brand-card p-5 rounded-lg border border-brand-gold/5 shadow-md">
                                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-3">
                                                        <h4 className="text-lg font-serif font-bold text-brand-light">{exp.position}</h4>
                                                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider text-brand-dark bg-brand-gold/80 rounded-full font-sans uppercase">
                                                            {exp.period}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm font-medium text-brand-gold mb-3">{exp.company} &bull; <span className="text-xs text-brand-muted">{exp.location}</span></p>
                                                    <ul className="space-y-2 text-xs font-light text-brand-muted list-disc pl-4 leading-relaxed">
                                                        {exp.points.map((pt, i) => (
                                                            <li key={i}>{pt}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Education Tab */}
                            {activeTab === 'education' && (
                                <div className="space-y-6 animate-fadeIn">
                                    <h3 className="text-xl font-serif font-semibold text-brand-gold">Credentials & Training</h3>
                                    <div className="relative pl-6 border-l border-brand-gold/10 space-y-6">
                                        {education.map((edu, idx) => (
                                            <div key={idx} className="relative">
                                                <div className="absolute w-3 h-3 bg-brand-gold rounded-full -left-[32px] top-1.5 border-4 border-brand-dark"></div>
                                                <div className="bg-brand-card p-4 rounded-lg border border-brand-gold/5">
                                                    <span className="text-[10px] font-bold text-brand-gold tracking-widest uppercase block mb-1">{edu.period}</span>
                                                    <h4 className="text-base font-serif font-bold text-brand-light mb-1">{edu.degree}</h4>
                                                    <p className="text-xs text-brand-muted font-light">{edu.institution}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>

                {/* Portfolio Philosophy Highlight Section */}
                <div className="py-16 mt-20 border-t border-brand-gold/10">
                    <h2 className="text-3xl font-serif font-bold text-center text-brand-light mb-12">My Core Philosophy</h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="p-6 bg-brand-card rounded-xl border border-brand-gold/5 shadow-md hover:border-brand-gold/20 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-serif font-semibold text-brand-gold mb-3">01 / Aesthetic Impact</h3>
                            <p className="text-sm font-light text-brand-muted leading-relaxed">
                                Every rendering and structural model should evoke emotional resonance. I compose spaces with visual balance, sophisticated textures, and precise lighting.
                            </p>
                        </div>
                        <div className="p-6 bg-brand-card rounded-xl border border-brand-gold/5 shadow-md hover:border-brand-gold/20 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-serif font-semibold text-brand-gold mb-3">02 / Technical Precision</h3>
                            <p className="text-sm font-light text-brand-muted leading-relaxed">
                                Beyond beauty lies logic. I develop robust Revit models and clean AutoCAD layouts that strictly conform to structural dimensions, building codes, and drafting standard guidelines.
                            </p>
                        </div>
                        <div className="p-6 bg-brand-card rounded-xl border border-brand-gold/5 shadow-md hover:border-brand-gold/20 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-serif font-semibold text-brand-gold mb-3">03 / Collaborative Trust</h3>
                            <p className="text-sm font-light text-brand-muted leading-relaxed">
                                Architectural projects require teamwork. I support engineering and construction partners with precise documentation to ensure seamless design-to-execution handover.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action & CV Showcase */}
                <div className="relative p-8 md:p-12 mt-16 rounded-2xl bg-gradient-to-r from-brand-card to-brand-dark border border-brand-gold/10 overflow-hidden text-center">
                    <div className="absolute top-[-30%] right-[-10%] w-[300px] h-[300px] rounded-full bg-brand-gold/5 blur-[80px] pointer-events-none"></div>
                    <h2 className="text-3xl font-serif font-bold text-brand-light mb-4">View My Full Professional Resume</h2>
                    <p className="max-w-2xl mx-auto mb-8 text-brand-muted font-light text-sm md:text-base leading-relaxed">
                        To see a detailed catalog of my professional credentials, software skills, and completed architectural and design projects, you can view or download my complete CV.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/portfolio_assets/cv/nasiha-sara-cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold tracking-widest uppercase text-brand-dark bg-brand-gold hover:bg-brand-gold-hover rounded-full shadow-lg transition-all duration-300"
                        >
                            Open CV Document <TbArrowUpRight className="text-base" />
                        </a>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold tracking-widest uppercase text-brand-light border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/5 rounded-full transition-all duration-300"
                        >
                            Get In Touch <TbMail className="text-base" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}