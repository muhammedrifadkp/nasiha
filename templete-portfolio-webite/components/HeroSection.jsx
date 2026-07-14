import Image from "next/image";
import { TbArrowUpRight, TbDownload } from "react-icons/tb";
import Link from "next/link";

export default function HeroSection() {
    return (
        <div 
            className="relative overflow-hidden bg-brand-dark py-16 md:py-24 lg:py-32 border-b border-brand-gold/10"
            style={{ 
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(229, 197, 149, 0.07) 1px, transparent 0)", 
                backgroundSize: "32px 32px" 
            }}
        >
            {/* Background Light Gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none"></div>

            <div className="container relative z-10 grid gap-12 lg:grid-cols-12 lg:items-center">
                {/* Text Content */}
                <div className="w-full lg:col-span-6 text-left">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-2.5 h-2.5 bg-brand-gold rounded-full animate-pulse"></span>
                        <span className="text-xs font-bold tracking-widest text-brand-gold font-sans uppercase">
                            Junior Architect & 3D Visualizer
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-[1.1] mb-6 text-brand-light">
                        Crafting spaces where <br />
                        <span className="text-brand-gold italic">architecture</span> meets emotion.
                    </h1>
                    <p className="text-brand-muted text-base md:text-lg mb-8 max-w-xl font-sans font-light leading-relaxed">
                        Hi, I am <strong className="text-brand-light font-medium">Nasiha Sara</strong>. I specialize in transforming complex design concepts into immersive visual experiences and highly accurate Revit BIM models. From residential spaces to major commercial facilities, I bring photorealistic precision and aesthetic functionality to every project.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/projects">
                            <span className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-xs font-bold tracking-widest uppercase text-brand-dark bg-brand-gold hover:bg-brand-gold-hover rounded-full shadow-lg hover:shadow-brand-gold/20 transition-all duration-300 cursor-pointer">
                                Explore Projects <TbArrowUpRight className="w-4 h-4 ml-2" />
                            </span>
                        </Link>
                        <a 
                            href="/portfolio_assets/cv/nasiha-sara-cv.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-xs font-bold tracking-widest uppercase text-brand-light border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/5 rounded-full transition-all duration-300"
                        >
                            Download CV <TbDownload className="w-4 h-4 ml-2" />
                        </a>
                    </div>
                </div>

                {/* Showcase Visual */}
                <div className="w-full lg:col-span-6 flex justify-center lg:justify-end">
                    <div className="relative group w-full max-w-[380px] sm:max-w-[420px]">
                        {/* Decorative golden glow and lines */}
                        <div className="absolute inset-0 bg-brand-gold/5 rounded-2xl blur-xl transition-all duration-500 group-hover:bg-brand-gold/10 pointer-events-none"></div>
                        <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-brand-gold/30 group-hover:border-brand-gold/80 transition-colors duration-300"></div>
                        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-brand-gold/30 group-hover:border-brand-gold/80 transition-colors duration-300"></div>
                        
                        <div className="relative glass-panel rounded-2xl p-3 shadow-2xl overflow-hidden border border-brand-gold/10">
                            {/* Profile Image Wrapper */}
                            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-brand-dark">
                                <Image
                                    src="/portfolio_assets/profile/nasiha-sara.png"
                                    fill
                                    alt="Nasiha Sara - Junior Architect & 3D Visualizer"
                                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                                    priority
                                    sizes="(max-w-768px) 100vw, 400px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent opacity-60"></div>
                            </div>
                            
                            {/* Details inside the card */}
                            <div className="mt-4 p-3 bg-brand-dark/60 rounded-lg border border-brand-gold/5 flex justify-between items-center">
                                <div>
                                    <p className="text-[10px] text-brand-gold font-bold tracking-wider font-sans">Nasiha Sara</p>
                                    <p className="text-xs text-brand-light font-medium mt-0.5">Junior Architect</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] text-brand-gold font-bold tracking-wider font-sans">SPECIALIZATION</p>
                                    <p className="text-xs text-brand-light font-medium mt-0.5">3D Visualization & BIM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}