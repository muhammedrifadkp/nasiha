import Image from "next/image";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";

export default function AboutComponent() {
    return (
        <div className="bg-brand-card/50 border-y border-brand-gold/5 py-20 lg:py-28">
            <div className="container">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between pb-10 border-b border-brand-gold/10 mb-12">
                    <h2 className="text-3xl sm:text-4xl font-serif font-medium text-brand-light max-w-xl">
                        Blending technical precision <br className="hidden sm:block" /> with artistic vision.
                    </h2>
                    <p className="tracking-widest text-brand-gold font-bold text-xs uppercase mt-4 md:mt-0">DESIGN PHILOSOPHY</p>
                </div>
                
                <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                    {/* Left: Rendering Image Showcase */}
                    <div className="w-full lg:col-span-6 order-2 lg:order-1">
                        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-brand-gold/10 group aspect-[16/10]">
                            <Image
                                src="/portfolio_assets/works/bedroom/bedroom_02_v1.jpg.jpeg"
                                fill
                                alt="Residential Interior Design Rendering"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-w-768px) 100vw, 600px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent"></div>
                            <span className="absolute bottom-4 left-4 px-3 py-1 text-2xs tracking-widest text-brand-gold bg-brand-dark/80 backdrop-blur-md rounded border border-brand-gold/20 font-bold uppercase">
                                Bedroom Rendering - Corona
                            </span>
                        </div>
                    </div>

                    {/* Right: Intro & Statistics */}
                    <div className="w-full lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
                        <p className="text-brand-muted text-base md:text-lg mb-8 font-light">
                            As an Architectural Designer and 3D Visualizer, my work sits at the intersection of structural intelligence and aesthetic storytelling. I leverage advanced tools like Autodesk Revit and Corona Renderer to construct highly accurate models and photorealistic visualizations, ensuring every layout, material texture, and light source is meticulously designed and executed.
                        </p>
                        
                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            <div className="p-4 bg-brand-dark/40 border border-brand-gold/5 rounded-lg text-center">
                                <span className="block text-2xl md:text-3xl font-serif font-bold text-brand-gold">25+</span>
                                <span className="text-[10px] md:text-xs tracking-wider text-brand-muted uppercase">Interiors Designed</span>
                            </div>
                            <div className="p-4 bg-brand-dark/40 border border-brand-gold/5 rounded-lg text-center">
                                <span className="block text-2xl md:text-3xl font-serif font-bold text-brand-gold">60+</span>
                                <span className="text-[10px] md:text-xs tracking-wider text-brand-muted uppercase">Renders Produced</span>
                            </div>
                            <div className="p-4 bg-brand-dark/40 border border-brand-gold/5 rounded-lg text-center">
                                <span className="block text-2xl md:text-3xl font-serif font-bold text-brand-gold">15+</span>
                                <span className="text-[10px] md:text-xs tracking-wider text-brand-muted uppercase">BIM Models</span>
                            </div>
                        </div>

                        <div>
                            <Link href="/about" className="inline-flex items-center text-sm font-bold text-brand-gold hover:text-brand-gold-hover transition-colors">
                                Learn More About My Journey <TbArrowUpRight className="ml-1 text-lg" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}