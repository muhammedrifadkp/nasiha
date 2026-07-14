"use client";

import { useState } from "react";
import { TbEye, TbDownload, TbExternalLink } from "react-icons/tb";
import LightboxModal from "@/components/LightboxModal";

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [lightboxState, setLightboxState] = useState({
        isOpen: false,
        activeIndex: 0
    });

    const galleryItems = [
        // Commercial Restrooms (Mangalore Airport layouts)
        {
            id: 1,
            name: "Mangalore Airport Female Toilet Plan",
            category: "commercial",
            image: "/portfolio_assets/works/commercial_toilets/mangalore_airport_female_toilet_layout.png",
            pdfPath: "/portfolio_assets/works/commercial_toilets/mangalore_airport_female_toilet_layout.pdf",
            tools: "Autodesk Revit, AutoCAD",
            description: "Full architectural layout plan for female toilet amenities at Mangalore Airport."
        },
        {
            id: 2,
            name: "Mangalore Airport Toilet Reflected Ceiling Plan",
            category: "commercial",
            image: "/portfolio_assets/works/commercial_toilets/mangalore_airport_toilet_ceiling_layout.png",
            pdfPath: "/portfolio_assets/works/commercial_toilets/mangalore_airport_toilet_ceiling_layout.pdf",
            tools: "AutoCAD",
            description: "Reflected ceiling schematic detailing false ceiling divisions and lighting grids."
        },
        {
            id: 3,
            name: "Mangalore Airport Male Toilet Plan",
            category: "commercial",
            image: "/portfolio_assets/works/commercial_toilets/mangalore_airport_male_toilet_layout.png",
            pdfPath: "/portfolio_assets/works/commercial_toilets/mangalore_airport_male_toilet_layout.pdf",
            tools: "Autodesk Revit, AutoCAD",
            description: "Full architectural layout plan for male toilet amenities at Mangalore Airport."
        },

        // Residential Interiors - BedRooms
        {
            id: 4,
            name: "Master Bedroom Visualization (Corona)",
            category: "interior",
            image: "/portfolio_assets/works/bedroom/bedroom_02_v1.jpg.jpeg",
            tools: "3ds Max, Corona Renderer",
            description: "Contemporary bedroom interior rendering, showing custom joinery, backlighting, and textile design."
        },
        {
            id: 5,
            name: "Contemporary Bedroom Concept (V2)",
            category: "interior",
            image: "/portfolio_assets/works/bedroom/bedroom_02_v2.jpg.jpeg",
            tools: "3ds Max, Corona Renderer",
            description: "Alternate rendering view of the master bedroom, showcasing study desk integration."
        },
        {
            id: 6,
            name: "Master Bedroom Wardrobe Elevation (V3)",
            category: "interior",
            image: "/portfolio_assets/works/bedroom/bedroom_02_v3.jpg.jpeg",
            tools: "3ds Max, Corona Renderer",
            description: "Close-up perspective rendering highlighting customized sliding glass wardrobes and textures."
        },
        {
            id: 7,
            name: "Guest Bedroom Layout - Soft Tones (V1)",
            category: "interior",
            image: "/portfolio_assets/works/bedroom/guest_bedroom_v1.jpg.jpeg",
            tools: "3ds Max, Corona Renderer",
            description: "Minimalist guest bedroom rendering utilizing neutral fabric palettes and warm walnut timber highlights."
        },
        {
            id: 8,
            name: "Guest Bedroom Alternative Angle (V2)",
            category: "interior",
            image: "/portfolio_assets/works/bedroom/guest_bedroom_v2.jpg.jpeg",
            tools: "3ds Max, Corona Renderer",
            description: "Staging perspective showing large bay windows and natural morning light dynamics."
        },
        {
            id: 9,
            name: "Mother's Bedroom Interior Design (V1)",
            category: "interior",
            image: "/portfolio_assets/works/bedroom/mothers_bedroom_v1.jpg.jpeg",
            tools: "3ds Max, Corona Renderer",
            description: "Elegant residential bedroom layout, featuring cream headboard upholstery and gold decorative profile strips."
        },
        {
            id: 10,
            name: "Mother's Bedroom Wardrobe & Vanity (V2)",
            category: "interior",
            image: "/portfolio_assets/works/bedroom/mothers_bedroom_v2.jpg.jpeg",
            tools: "3ds Max, Corona Renderer",
            description: "Opposite view of mother's room detailing wall panel cladding and vanity desk."
        },

        // Residential Interiors - Bathrooms
        {
            id: 11,
            name: "Ensuite Bathroom Layout - Marble Finish (V1)",
            category: "interior",
            image: "/portfolio_assets/works/bathroom/bedroom_02_bathroom_v1.jpg.jpeg",
            tools: "3ds Max, Corona Renderer",
            description: "Ensuite bathroom visualization with floor-to-ceiling calacatta marble textures and a backlit mirror."
        },
        {
            id: 12,
            name: "Ensuite Bathroom Shower Partition (V2)",
            category: "interior",
            image: "/portfolio_assets/works/bathroom/bedroom_02_bathroom_v2.jpg.jpeg",
            tools: "3ds Max, Corona Renderer",
            description: "Visual highlighting the shower enclosure partition and custom black hardware details."
        },
        {
            id: 13,
            name: "Compact Residential Bathroom Design (V1)",
            category: "interior",
            image: "/portfolio_assets/works/bathroom/shb_bathroom_v1.jpg.jpeg",
            tools: "3ds Max, Corona Renderer",
            description: "Bathroom spatial layout optimization featuring grey slate wall tiles and timber vanity cabinetry."
        },

        // Residential Interiors - Modular Systems
        {
            id: 14,
            name: "Premium Modular Kitchen Elevation (V1)",
            category: "interior",
            image: "/portfolio_assets/works/modular/shb_modular_v1.jpg.jpeg",
            tools: "3ds Max, V-Ray, Photoshop",
            description: "L-shaped modular kitchen layout visualization with charcoal acrylic cabinet doors and gold accents."
        },
        {
            id: 15,
            name: "Modular Kitchen Breakfast Counter (V2)",
            category: "interior",
            image: "/portfolio_assets/works/modular/shb_modular_v2.jpg.jpeg",
            tools: "3ds Max, V-Ray",
            description: "Visual detailing the breakfast bar Counter, customized barstools, and linear lighting profiles."
        },
        {
            id: 16,
            name: "Modular Kitchen Opposite Perspective (V3)",
            category: "interior",
            image: "/portfolio_assets/works/modular/shb_modular_v3.jpg.jpeg",
            tools: "3ds Max, V-Ray",
            description: "Perspective highlighting custom pantry storage tower and refrigerator integration."
        },

        // Exterior Architecture & Visualizations
        {
            id: 17,
            name: "Modern Double-Story Villa (Lumion Sunset)",
            category: "exterior",
            image: "/portfolio_assets/projects/lumion/lumion_render_04_sunset.jpg.jpeg",
            tools: "SketchUp, Lumion, Photoshop",
            description: "Luxury villa exterior visualization displaying facade projections, wall lights, and landscape features."
        },
        {
            id: 18,
            name: "Modern Residential Villa (Lumion Sunny Day)",
            category: "exterior",
            image: "/portfolio_assets/projects/lumion/lumion_render_01_sunny_day.jpg.jpeg",
            tools: "SketchUp, Lumion",
            description: "Façade visualization under crisp daylight, showcasing timber ceiling profiles on exterior balconies."
        },
        {
            id: 19,
            name: "Villa Exterior in Overcast Weather",
            category: "exterior",
            image: "/portfolio_assets/projects/lumion/lumion_render_02_cloudy_day.jpg.jpeg",
            tools: "SketchUp, Lumion",
            description: "Overcast weather visual displaying diffused lighting patterns on raw concrete facade walls."
        },
        {
            id: 20,
            name: "Exterior facade - Morning on Vacation",
            category: "exterior",
            image: "/portfolio_assets/projects/lumion/lumion_render_03_morning_on_vacation.jpg.jpeg",
            tools: "SketchUp, Lumion",
            description: "Fresh morning atmosphere render, focusing on soft shadows, landscape vegetation, and entry gate structures."
        },
        {
            id: 21,
            name: "Contemporary Residence Facade (Corona Render)",
            category: "exterior",
            image: "/portfolio_assets/projects/exterior/exterior_01.jpg.jpeg",
            tools: "3ds Max, Corona Renderer",
            description: "3D architectural render focusing on texture combinations: timber screening, concrete, and black metal."
        },
        {
            id: 22,
            name: "Modern Exterior Elevation View",
            category: "exterior",
            image: "/portfolio_assets/projects/exterior/exterior_02.jpg.jpeg",
            tools: "3ds Max, Corona Renderer",
            description: "Architectural exterior elevation showing building volumes and entry facade steps."
        },

        // Technical Drawings (AutoCAD, SketchUp LayOut, Photoshop sheets)
        {
            id: 23,
            name: "SketchUp Conceptual Design Board",
            category: "technical",
            image: "/portfolio_assets/projects/sketchup/sketchup_project_page_1.png",
            pdfPath: "/portfolio_assets/projects/sketchup/sketchup_project.pdf",
            tools: "SketchUp, LayOut",
            description: "Detailed 3D conceptual modeling presentation sheet containing plans and isometric volumes."
        },
        {
            id: 24,
            name: "SketchUp Floor Layout Elevation Plan",
            category: "technical",
            image: "/portfolio_assets/projects/sketchup/sketchup_project_page_2.png",
            pdfPath: "/portfolio_assets/projects/sketchup/sketchup_project.pdf",
            tools: "SketchUp, LayOut",
            description: "2D elevation plans and layout specifications compiled in SketchUp LayOut."
        },
        {
            id: 25,
            name: "General Architectural Layout Plan",
            category: "technical",
            image: "/portfolio_assets/projects/general/nasiha_sara_general_project.png",
            pdfPath: "/portfolio_assets/projects/general/nasiha_sara_general_project.pdf",
            tools: "AutoCAD",
            description: "2D general layout floor plan outlining interior partitions and dimensions."
        },
        {
            id: 26,
            name: "Photoshop Post-Processed Elevation Board",
            category: "technical",
            image: "/portfolio_assets/projects/photoshop/nasiha_sara_photoshop_project.png",
            pdfPath: "/portfolio_assets/projects/photoshop/nasiha_sara_photoshop_project.pdf",
            tools: "Adobe Photoshop",
            description: "Enhanced architectural presentation board outlining facade materials and post-processing entourage."
        },

        // Additional Renders for Density
        {
            id: 27,
            name: "Luxury Living Room Corner render",
            category: "interior",
            image: "/portfolio_assets/projects/rendering/render_01.jpg.jpeg",
            tools: "3ds Max, V-Ray",
            description: "Detail visualization focusing on custom lounge seating, side table, and physical fabric textures."
        },
        {
            id: 28,
            name: "Contemporary Interior Foyer (V-Ray)",
            category: "interior",
            image: "/portfolio_assets/projects/rendering/render_02.jpg.jpeg",
            tools: "3ds Max, V-Ray",
            description: "Minimalist foyer visualization highlighting architectural lighting panels and timber detailing."
        },
        {
            id: 29,
            name: "Luxury Dining Room Visual",
            category: "interior",
            image: "/portfolio_assets/projects/rendering/render_03.jpg.jpeg",
            tools: "3ds Max, V-Ray",
            description: "Spacious dining area visualization, showcasing table textures and custom light pendants."
        },
        {
            id: 30,
            name: "Living Space Corona Render (01)",
            category: "interior",
            image: "/portfolio_assets/projects/corona/corona_render_01.jpg.jpeg",
            tools: "3ds Max, Corona Renderer",
            description: "Photorealistic rendering of a living space focusing on realistic leather and carpet textures."
        },
        {
            id: 31,
            name: "Living Space Corona Render (02)",
            category: "interior",
            image: "/portfolio_assets/projects/corona/corona_render_02.jpg.jpeg",
            tools: "3ds Max, Corona Renderer",
            description: "Alternate camera angle of living area visualization under afternoon sun shading conditions."
        }
    ];

    // Filter items based on active category
    const filteredItems = activeCategory === "all" 
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    // Lightbox triggers
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
            activeIndex: (prev.activeIndex - 1 + filteredItems.length) % filteredItems.length
        }));
    };

    const handleNext = () => {
        setLightboxState(prev => ({
            ...prev,
            activeIndex: (prev.activeIndex + 1) % filteredItems.length
        }));
    };

    return (
        <div className="bg-brand-dark min-h-screen">
            {/* Header banner */}
            <div className="relative py-24 md:py-32 border-b border-brand-gold/10 bg-[url('/portfolio_assets/projects/exterior/exterior_01.jpg.jpeg')] bg-cover bg-center overflow-hidden">
                {/* Dark Sapphire Overlay */}
                <div className="absolute inset-0 bg-brand-dark/85"></div>
                <div className="absolute top-[-50%] left-[-20%] w-[60%] h-[100%] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none"></div>
                <div className="container relative z-10 text-center lg:text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">Design Gallery</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-light mt-2">PORTFOLIO GALLERY</h1>
                </div>
            </div>

            <div className="container py-12 md:py-16">
                {/* Category selectors */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {[
                        { id: "all", label: "All Items" },
                        { id: "interior", label: "Residential Interiors" },
                        { id: "exterior", label: "Exterior Architecture" },
                        { id: "commercial", label: "Commercial Spaces" },
                        { id: "technical", label: "Technical Drawings" }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveCategory(tab.id)}
                            className={`px-3.5 py-2 sm:px-5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-widest uppercase rounded-full transition-all duration-300 whitespace-nowrap ${
                                activeCategory === tab.id
                                    ? "bg-brand-gold text-brand-dark shadow-lg shadow-brand-gold/15"
                                    : "bg-brand-card text-brand-muted hover:text-brand-light border border-brand-gold/5 hover:border-brand-gold/20"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="group relative bg-brand-card rounded-lg overflow-hidden border border-brand-gold/5 shadow-md hover:border-brand-gold/20 transition-all duration-300 cursor-pointer h-fit"
                            onClick={() => openLightbox(index)}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-103"
                                loading="lazy"
                            />
                            
                            {/* Hover info panel */}
                            <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between items-start z-10">
                                <span className="text-[8px] font-bold tracking-widest text-brand-gold uppercase bg-brand-dark/50 px-2 py-0.5 border border-brand-gold/10 rounded">
                                    {item.category}
                                </span>
                                <div className="w-full">
                                    <h3 className="text-xs font-serif font-bold text-brand-light mb-1 line-clamp-1">
                                        {item.name}
                                    </h3>
                                    <p className="text-[10px] text-brand-muted line-clamp-2 mb-2 font-light">
                                        {item.description}
                                    </p>
                                    <div className="flex justify-between items-center text-[8px] text-brand-gold/80 font-bold uppercase tracking-wider font-sans border-t border-brand-gold/10 pt-2">
                                        <span>{item.tools.split(",")[0]}</span>
                                        <div className="flex items-center gap-1">
                                            <TbEye className="text-sm text-brand-gold" />
                                            <span>View Zoom</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <LightboxModal
                isOpen={lightboxState.isOpen}
                onClose={closeLightbox}
                activeImage={filteredItems[lightboxState.activeIndex]}
                onPrev={handlePrev}
                onNext={handleNext}
                imagesList={filteredItems}
            />
        </div>
    );
}