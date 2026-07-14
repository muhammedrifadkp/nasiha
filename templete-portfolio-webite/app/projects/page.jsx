"use client";

import Image from "next/image";
import { useState } from "react";
import { TbArrowUpRight, TbExternalLink, TbEye } from "react-icons/tb";
import LightboxModal from "@/components/LightboxModal";

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [lightboxState, setLightboxState] = useState({
        isOpen: false,
        activeIndex: 0
    });

    const projectsList = [
        {
            id: 1,
            name: 'Mangalore International Airport Female Toilet Layout',
            description: 'Professional architectural plan detailing space configuration, plumbing partitions, and structural measurements for airport restrooms.',
            image: '/portfolio_assets/works/commercial_toilets/mangalore_airport_female_toilet_layout.png',
            pdfPath: '/portfolio_assets/works/commercial_toilets/mangalore_airport_female_toilet_layout.pdf',
            category: 'commercial',
            tools: 'Autodesk Revit, AutoCAD',
            location: 'Mangalore, India'
        },
        {
            id: 2,
            name: 'Mangalore International Airport Toilet Reflected Ceiling Plan',
            description: 'Precise reflected ceiling layout plan showing electrical layouts, false ceiling details, and light fixture arrangements.',
            image: '/portfolio_assets/works/commercial_toilets/mangalore_airport_toilet_ceiling_layout.png',
            pdfPath: '/portfolio_assets/works/commercial_toilets/mangalore_airport_toilet_ceiling_layout.pdf',
            category: 'commercial',
            tools: 'AutoCAD',
            location: 'Mangalore, India'
        },
        {
            id: 3,
            name: 'Mangalore International Airport Male Toilet Layout',
            description: 'Detailed architectural space and partition plan for male toilet facilities, drafted in accordance with commercial building codes.',
            image: '/portfolio_assets/works/commercial_toilets/mangalore_airport_male_toilet_layout.png',
            pdfPath: '/portfolio_assets/works/commercial_toilets/mangalore_airport_male_toilet_layout.pdf',
            category: 'commercial',
            tools: 'Autodesk Revit, AutoCAD',
            location: 'Mangalore, India'
        },
        {
            id: 4,
            name: 'Contemporary Master Bedroom (Corona Renderer)',
            description: 'Photorealistic interior design visualization with custom wood slatted paneling, embedded LED strip lighting, and a warm, cohesive material scheme.',
            image: '/portfolio_assets/works/bedroom/bedroom_02_v1.jpg.jpeg',
            category: 'interior',
            tools: '3ds Max, Corona Renderer, Photoshop',
            location: 'Kasaragod, India'
        },
        {
            id: 5,
            name: 'Modern Double-Story Villa Exterior (Lumion sunset)',
            description: 'Luxurious modern residence facade visualization. Rendered in Lumion under dramatic sunset skies, highlighting ambient wall lights and landscape textures.',
            image: '/portfolio_assets/projects/lumion/lumion_render_04_sunset.jpg.jpeg',
            category: 'exterior',
            tools: 'SketchUp, Lumion, Photoshop',
            location: 'Kasaragod, India'
        },
        {
            id: 6,
            name: 'Residential Exterior facade (Sunny Day)',
            description: 'Daylight architectural visualization highlighting concrete textures, glass railings, and modern geometric structures under clear skies.',
            image: '/portfolio_assets/projects/lumion/lumion_render_01_sunny_day.jpg.jpeg',
            category: 'exterior',
            tools: 'SketchUp, Lumion',
            location: 'Kasaragod, India'
        },
        {
            id: 7,
            name: 'Sleek Modular Kitchen Design (V-Ray)',
            description: 'High-end modular kitchen interior layout rendering, showing integrated cabinet storage, quartz countertops, and modern lighting fixtures.',
            image: '/portfolio_assets/works/modular/shb_modular_v1.jpg.jpeg',
            category: 'interior',
            tools: '3ds Max, V-Ray, Photoshop',
            location: 'Kasaragod, India'
        },
        {
            id: 8,
            name: 'Modern Ensuite Bathroom Concept (Corona)',
            description: 'Luxury residential toilet layout with marble cladding, floating vanity drawer structures, and physically accurate water reflections.',
            image: '/portfolio_assets/works/bathroom/bedroom_02_bathroom_v1.jpg.jpeg',
            category: 'interior',
            tools: '3ds Max, Corona Renderer',
            location: 'Kasaragod, India'
        },
        {
            id: 9,
            name: 'SketchUp Architectural Layout Concept (Page 1)',
            description: 'Detailed presentation drawing board displaying model perspective views and conceptual plan layouts.',
            image: '/portfolio_assets/projects/sketchup/sketchup_project_page_1.png',
            pdfPath: '/portfolio_assets/projects/sketchup/sketchup_project.pdf',
            category: 'technical',
            tools: 'SketchUp, LayOut',
            location: 'Kasaragod, India'
        },
        {
            id: 10,
            name: 'Photoshop Render Enhancement Presentation',
            description: 'Architectural illustration showing extensive digital post-processing, entourage composition, and color grading.',
            image: '/portfolio_assets/projects/photoshop/nasiha_sara_photoshop_project.png',
            pdfPath: '/portfolio_assets/projects/photoshop/nasiha_sara_photoshop_project.pdf',
            category: 'technical',
            tools: 'Adobe Photoshop',
            location: 'Kerala, India'
        },
        {
            id: 11,
            name: 'Cozy Residential Mother\'s Bedroom',
            description: 'Peaceful bedroom interior with textured paneling, gold divider lines, and custom upholstery details.',
            image: '/portfolio_assets/works/bedroom/mothers_bedroom_v1.jpg.jpeg',
            category: 'interior',
            tools: '3ds Max, Corona Renderer',
            location: 'Kasaragod, India'
        },
        {
            id: 12,
            name: 'Architectural Facade - Overcast Day (Lumion)',
            description: 'Exterior rendering of a modern residence framed by moody overcast skies, detailing the interaction of flat lighting on raw concrete.',
            image: '/portfolio_assets/projects/lumion/lumion_render_02_cloudy_day.jpg.jpeg',
            category: 'exterior',
            tools: 'SketchUp, Lumion',
            location: 'Kasaragod, India'
        }
    ];

    // Filter projects based on active category
    const filteredProjects = activeCategory === 'all'
        ? projectsList
        : projectsList.filter(proj => proj.category === activeCategory);

    // Lightbox handlers
    const openLightbox = (index) => {
        setLightboxState({
            isOpen: true,
            activeIndex: index
        });
    };

    const closeLightbox = () => {
        setLightboxState({
            isOpen: false,
            activeIndex: 0
        });
    };

    const handlePrev = () => {
        setLightboxState(prev => ({
            ...prev,
            activeIndex: (prev.activeIndex - 1 + filteredProjects.length) % filteredProjects.length
        }));
    };

    const handleNext = () => {
        setLightboxState(prev => ({
            ...prev,
            activeIndex: (prev.activeIndex + 1) % filteredProjects.length
        }));
    };

    return (
        <div className="bg-brand-dark min-h-screen">
            {/* Page Header */}
            <div className="relative py-24 md:py-32 border-b border-brand-gold/10 bg-[url('/portfolio_assets/projects/lumion/lumion_render_04_sunset.jpg.jpeg')] bg-cover bg-center overflow-hidden">
                {/* Dark Sapphire Overlay for contrast */}
                <div className="absolute inset-0 bg-brand-dark/85"></div>
                <div className="absolute top-[-50%] left-[-20%] w-[60%] h-[100%] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none"></div>
                <div className="container relative z-10 text-center lg:text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">Portfolio Showcase</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-light mt-2">MY PROJECTS</h1>
                </div>
            </div>

            {/* Category Filter */}
            <div className="container py-12 md:py-16">
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {[
                        { id: 'all', label: 'All Projects' },
                        { id: 'interior', label: 'Interior Designs' },
                        { id: 'exterior', label: 'Exterior Designs' },
                        { id: 'commercial', label: 'Commercial Spaces' },
                        { id: 'technical', label: 'Technical Layouts' }
                    ].map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-3.5 py-2 sm:px-5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-widest uppercase rounded-full transition-all duration-300 whitespace-nowrap ${
                                activeCategory === cat.id 
                                    ? 'bg-brand-gold text-brand-dark shadow-lg shadow-brand-gold/15' 
                                    : 'bg-brand-card text-brand-muted hover:text-brand-light border border-brand-gold/5 hover:border-brand-gold/20'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, index) => (
                        <div 
                            key={project.id} 
                            className="group relative bg-brand-card rounded-xl overflow-hidden border border-brand-gold/5 shadow-xl hover:border-brand-gold/25 transition-all duration-300"
                        >
                            {/* Visual Box */}
                            <div className="aspect-[4/3] relative overflow-hidden bg-brand-dark">
                                <Image
                                    src={project.image}
                                    fill
                                    alt={project.name}
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-w-768px) 100vw, 400px"
                                />
                                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors duration-300"></div>
                                
                                {/* Hover interactive tools overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                    <button 
                                        onClick={() => openLightbox(index)}
                                        className="p-3 bg-brand-gold text-brand-dark rounded-full shadow-lg hover:scale-110 transition-transform"
                                        aria-label={`View ${project.name}`}
                                    >
                                        <TbEye className="text-xl font-bold" />
                                    </button>
                                </div>
                            </div>

                            {/* Text Details */}
                            <div className="p-6">
                                <span className="text-[9px] font-bold tracking-widest text-brand-gold uppercase block mb-1.5">{project.category}</span>
                                <h3 className="text-lg font-serif font-bold text-brand-light leading-snug mb-2 line-clamp-1">{project.name}</h3>
                                <p className="text-xs text-brand-muted font-light mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
                                
                                <div className="flex justify-between items-center pt-4 border-t border-brand-gold/5">
                                    <span className="text-[10px] text-brand-muted font-mono tracking-wider font-light">{project.tools}</span>
                                    {project.pdfPath && (
                                        <a 
                                            href={project.pdfPath}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[10px] font-bold text-brand-gold hover:text-brand-gold-hover flex items-center gap-1 uppercase tracking-wider"
                                        >
                                            View PDF Plan <TbExternalLink className="text-sm" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal Integration */}
            <LightboxModal 
                isOpen={lightboxState.isOpen}
                onClose={closeLightbox}
                activeImage={filteredProjects[lightboxState.activeIndex]}
                onPrev={handlePrev}
                onNext={handleNext}
                imagesList={filteredProjects}
            />
        </div>
    )
}