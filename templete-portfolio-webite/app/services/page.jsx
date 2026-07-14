"use client";
import Image from "next/image";
import { TbArrowUpRight, TbCpu, TbBox, TbCompass, TbPalette, TbLayout, TbSun, TbBuilding, TbPhoto } from "react-icons/tb";

export default function Services() {
    // Services data using Nasiha Sara's tools and actual renderings
    const services = [
        {
            id: 1,
            name: "Autodesk Revit Architecture",
            icon: <TbBuilding className="text-3xl text-brand-gold" />,
            description: "Building Information Modeling (BIM) suite used to create fully integrated 3D architectural models, coordinate engineering services, and generate accurate construction documentation.",
            image: "/portfolio_assets/services/service_revit.png",
            features: [
                "Intelligent 3D architectural modeling",
                "Parametric family and component creation",
                "Automated plan, section, and elevation generation",
                "Construction documentation and scheduling",
                "BIM collaboration and coordination workflows"
            ]
        },
        {
            id: 2,
            name: "AutoCAD (2D Drafting & Detailing)",
            icon: <TbCompass className="text-3xl text-brand-gold" />,
            description: "Precision computer-aided design drafting to develop technical layouts, floor plans, electrical schematics, and ceiling plans for construction teams.",
            image: "/portfolio_assets/services/service_autocad.png",
            features: [
                "Highly accurate 2D floor plans and site layouts",
                "Reflected Ceiling Plans (RCP) and lighting designs",
                "Technical joinery and custom cabinetry details",
                "Construction-ready layout detailing",
                "Exact scaling, dimensioning, and annotations"
            ]
        },
        {
            id: 3,
            name: "Corona Renderer",
            icon: <TbSun className="text-3xl text-brand-gold" />,
            description: "High-performance physical rendering engine optimized for interior visualizations, creating soft, realistic lighting and physically accurate materials.",
            image: "/portfolio_assets/services/service_corona.png",
            features: [
                "Photorealistic interior global illumination",
                "Interactive LightMix to tweak lighting setups in real-time",
                "Advanced physical materials (fabrics, woods, metals)",
                "Soft, high-fidelity shadow structures",
                "Natural depth of field and bloom rendering"
            ]
        },
        {
            id: 4,
            name: "3ds Max Modeling",
            icon: <TbBox className="text-3xl text-brand-gold" />,
            description: "Industry-standard 3D modeling environment utilized to build detailed room structures, organic assets, and bespoke furniture concepts.",
            image: "/portfolio_assets/services/service_3dsmax.png",
            features: [
                "Bespoke modular furniture and cabinet modeling",
                "Complex organic geometry drafting",
                "Import/export pipeline optimization with CAD/Revit",
                "Accurate spatial volume and perspective staging",
                "Custom proxy assets configuration for heavy scenes"
            ]
        },
        {
            id: 5,
            name: "V-Ray Rendering",
            icon: <TbCpu className="text-3xl text-brand-gold" />,
            description: "Advanced global illumination renderer used to compute complex lighting paths, reflections, and material properties for interior and exterior scenes.",
            image: "/portfolio_assets/services/service_vray.png",
            features: [
                "High-performance CPU/GPU hybrid rendering",
                "Physically accurate light scattering (subsurface)",
                "Complex material layer stacking (carpentry finishes, varnishes)",
                "Detailed material displacement mapping",
                "Panoramic 360-degree virtual tour rendering"
            ]
        },
        {
            id: 6,
            name: "Lumion Visualization",
            icon: <TbLayout className="text-3xl text-brand-gold" />,
            description: "Real-time rendering tool ideal for architectural exterior visualizations, providing realistic skies, foliage, terrains, and atmospheric lighting.",
            image: "/portfolio_assets/services/service_lumion.png",
            features: [
                "Stunning sunset, morning, and overcast exterior renders",
                "Realistic landscaping, foliage, and environment creation",
                "Animated walk-through video creation (4K resolution)",
                "Real-time materials and immediate visual feedback",
                "Rich human, vehicle, and decoration library placement"
            ]
        },
        {
            id: 7,
            name: "SketchUp Concept Modeling",
            icon: <TbCompass className="text-3xl text-brand-gold" />,
            description: "Efficient 3D sketching platform utilized for rapid conceptual models, architectural massing, and initial volume drafts.",
            image: "/portfolio_assets/services/service_sketchup.png",
            features: [
                "Fast, iterative structural drafting and prototyping",
                "Volumetric building block analysis",
                "Clean schematic architectural elevations",
                "Lightweight modeling for quick client reviews",
                "Rich 3D warehouse asset integration"
            ]
        },
        {
            id: 8,
            name: "Adobe Photoshop Post-Processing",
            icon: <TbPhoto className="text-3xl text-brand-gold" />,
            description: "Advanced image processing software used to perform color grading, render enhancement, matte painting, and layout sheet compositing.",
            image: "/portfolio_assets/services/service_photoshop.png",
            features: [
                "Render color correction and exposure balancing",
                "Entourage addition (humans, background skies, decals)",
                "Matte painting and ambient occlusion accentuation",
                "Editorial presentation board composition",
                "Texture overlay and texture seam editing"
            ]
        }
    ];

    return (
        <div className="bg-brand-dark min-h-screen">
            {/* Header banner */}
            <div className="relative py-24 md:py-32 border-b border-brand-gold/10 bg-[url('/portfolio_assets/backgrounds/services_bg.png')] bg-cover bg-center overflow-hidden">
                {/* Dark Sapphire Overlay */}
                <div className="absolute inset-0 bg-brand-dark/85"></div>
                <div className="absolute top-[-50%] left-[-20%] w-[60%] h-[100%] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none"></div>
                <div className="container relative z-10 text-center lg:text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">Tools of the Trade</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-light mt-2">SERVICES & EXPERTISE</h1>
                </div>
            </div>

            {/* Services Overview */}
            <div className="container py-16">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-light mb-6">Professional Design Toolkit</h2>
                    <p className="text-brand-muted text-base md:text-lg font-light leading-relaxed">
                        I utilize a robust suite of industry-standard architecture, BIM, and rendering tools. By combining structural drafting tools like Revit and AutoCAD with premium engines like Corona and Lumion, I provide design teams and clients with absolute clarity, from blueprint to high-fidelity visualization.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="space-y-24">
                    {services.map((service, index) => (
                        <div 
                            key={service.id} 
                            className={`grid items-center gap-12 lg:grid-cols-12 ${
                                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                            }`}
                        >
                            {/* Image Section (lg:col-span-7) */}
                            <div className={`w-full lg:col-span-7 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                <div className="relative aspect-[16/10] overflow-hidden rounded-xl shadow-2xl border border-brand-gold/10 group">
                                    <Image
                                        src={service.image}
                                        fill
                                        alt={service.name}
                                        className="object-cover transition-transform duration-700 group-hover:scale-103"
                                        sizes="(max-w-768px) 100vw, 700px"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
                                </div>
                            </div>

                            {/* Content Section (lg:col-span-5) */}
                            <div className={`w-full lg:col-span-5 p-8 bg-brand-card/30 rounded-xl border border-brand-gold/5 shadow-lg ${
                                index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                            }`}>
                                <div className="flex items-center gap-3 mb-4">
                                    {service.icon}
                                    <h3 className="text-2xl font-serif font-bold text-brand-light leading-tight">{service.name}</h3>
                                </div>
                                <p className="text-brand-muted text-sm mb-6 font-light leading-relaxed">{service.description}</p>

                                <h4 className="text-xs font-bold text-brand-gold tracking-widest uppercase mb-3">Capabilities</h4>
                                <ul className="space-y-2.5 text-xs text-brand-muted font-light">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 mt-1.5 bg-brand-gold rounded-full shrink-0"></span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-20 bg-brand-card/40 border-t border-brand-gold/10">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-light mb-6">Need Technical Drawings or 3D Visualization?</h2>
                    <p className="max-w-2xl mx-auto mb-10 text-brand-muted font-light text-sm md:text-base leading-relaxed">
                        Whether you need a full Revit BIM model, complex AutoCAD floor plans, or photorealistic interior renders, let&apos;s collaborate to achieve your goals.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold tracking-widest uppercase text-brand-dark bg-brand-gold hover:bg-brand-gold-hover rounded-full shadow-lg transition-all duration-300"
                    >
                        Start Your Project <TbArrowUpRight className="text-base" />
                    </a>
                </div>
            </div>
        </div>
    );
}
