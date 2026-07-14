"use client";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link";


export default function CatalogSwiperSection() {
    const slides = [
        { src: "/portfolio_assets/projects/exterior/exterior_01.jpg.jpeg", alt: "Modern Villa Exterior Rendering" },
        { src: "/portfolio_assets/works/bedroom/bedroom_02_v1.jpg.jpeg", alt: "Master Bedroom Visualization" },
        { src: "/portfolio_assets/projects/lumion/lumion_render_04_sunset.jpg.jpeg", alt: "Lumion Sunset Exterior Design" },
        { src: "/portfolio_assets/works/modular/shb_modular_v1.jpg.jpeg", alt: "Modular Kitchen Concept" },
        { src: "/portfolio_assets/works/bathroom/bedroom_02_bathroom_v1.jpg.jpeg", alt: "Modern Bathroom Interior" },
        { src: "/portfolio_assets/projects/rendering/render_01.jpg.jpeg", alt: "Interior Living Room Render" }
    ];

    return (
        <div className="py-16 lg:py-24 bg-brand-dark border-b border-brand-gold/10">
            <div className="container grid pb-12 lg:grid-cols-2 gap-8 items-end">
                <div className="text-left">
                    <h2 className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-2">Portfolio Highlights</h2>
                    <h1 className="text-4xl lg:text-6xl font-serif font-bold text-brand-light">Visual Excellence</h1>
                </div>
                <div>
                    <h3 className="pb-4 text-lg font-serif font-semibold text-brand-gold tracking-wide uppercase">
                        PHOTOREALISTIC SPATIAL DESIGN
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 text-brand-muted gap-6 text-sm font-light">
                        <div>
                            <p>
                                I orchestrate natural lighting, detailed material textures, and custom spatial layouts to create immersive and highly-realistic design visualizations.
                            </p>
                        </div>
                        <div>
                            <p>
                                I deliver bespoke interior and exterior concepts that help clients and builders align on the project vision long before ground is broken.
                            </p>
                            <Link href="/gallery" className="inline-flex items-center pt-4 text-brand-gold hover:text-brand-gold-hover transition-colors font-bold underline">
                                View Full Gallery <TbArrowUpRight className="ml-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 md:px-12">
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Autoplay]}
                    className="w-full"
                >
                    {slides.map((slide, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-brand-gold/10 group shadow-lg">
                                <Image 
                                    src={slide.src} 
                                    alt={slide.alt} 
                                    fill
                                    className="object-cover transition-transform duration-750 group-hover:scale-105" 
                                    sizes="(max-w-768px) 100vw, 400px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
