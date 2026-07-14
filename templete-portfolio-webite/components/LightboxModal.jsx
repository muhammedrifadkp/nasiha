"use client";
import { useEffect } from "react";
import Image from "next/image";
import { TbX, TbChevronLeft, TbChevronRight, TbDownload, TbExternalLink } from "react-icons/tb";

export default function LightboxModal({ isOpen, onClose, activeImage, onPrev, onNext, imagesList }) {
    // Keyboard listeners
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") onPrev();
            if (e.key === "ArrowRight") onNext();
        };

        window.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden"; // Disable scroll when modal is open

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose, onPrev, onNext]);

    if (!isOpen || !activeImage) return null;

    // Check if the current project has a related PDF
    const hasPdf = activeImage.pdfPath ? true : false;
    const isLayoutFile = activeImage.image.endsWith(".png") && activeImage.category.toLowerCase().includes("cad");

    return (
        <div className="fixed inset-0 z-[999] flex flex-col justify-between bg-brand-dark/95 backdrop-blur-md transition-all duration-300">
            {/* Top Toolbar */}
            <div className="flex justify-between items-center w-full px-6 py-4 bg-brand-dark/80 border-b border-brand-gold/10 z-20">
                <div>
                    <h3 className="text-sm font-serif font-bold text-brand-light tracking-wide">{activeImage.name}</h3>
                    <p className="text-[10px] font-sans tracking-widest text-brand-gold uppercase">{activeImage.category}</p>
                </div>
                <div className="flex items-center gap-4">
                    {hasPdf && (
                        <a 
                            href={activeImage.pdfPath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold tracking-wider text-brand-dark bg-brand-gold hover:bg-brand-gold-hover rounded transition-colors uppercase"
                        >
                            Open PDF Drawing <TbExternalLink className="text-sm" />
                        </a>
                    )}
                    <button 
                        onClick={onClose}
                        className="p-2 text-brand-light hover:text-brand-gold transition-colors rounded-full hover:bg-brand-card/50"
                        aria-label="Close Lightbox"
                    >
                        <TbX className="text-xl md:text-2xl" />
                    </button>
                </div>
            </div>

            {/* Central Area: Image and Navigation */}
            <div className="relative flex-grow flex items-center justify-center p-4 md:p-8 z-10">
                {/* Back button */}
                <button 
                    onClick={onPrev}
                    className="absolute left-4 md:left-8 p-3 text-brand-light/70 hover:text-brand-gold transition-all bg-brand-card/30 hover:bg-brand-card/85 backdrop-blur-sm rounded-full z-20 hover:scale-105 border border-brand-gold/5"
                    aria-label="Previous Image"
                >
                    <TbChevronLeft className="text-2xl md:text-3xl" />
                </button>

                {/* Main Visual Frame */}
                <div className="relative max-w-full max-h-[75vh] aspect-[16/10] w-[1000px] h-[600px] overflow-hidden rounded-lg shadow-2xl border border-brand-gold/10 select-none">
                    <Image
                        src={activeImage.image}
                        alt={activeImage.name}
                        fill
                        className="object-contain"
                        sizes="100vw"
                        priority
                    />
                </div>

                {/* Next button */}
                <button 
                    onClick={onNext}
                    className="absolute right-4 md:right-8 p-3 text-brand-light/70 hover:text-brand-gold transition-all bg-brand-card/30 hover:bg-brand-card/85 backdrop-blur-sm rounded-full z-20 hover:scale-105 border border-brand-gold/5"
                    aria-label="Next Image"
                >
                    <TbChevronRight className="text-2xl md:text-3xl" />
                </button>
            </div>

            {/* Bottom Panel with Descriptions */}
            <div className="w-full px-6 py-6 bg-brand-dark/80 border-t border-brand-gold/10 text-center z-20">
                <div className="max-w-2xl mx-auto">
                    {activeImage.description && (
                        <p className="text-xs md:text-sm text-brand-muted leading-relaxed mb-3 font-light">
                            {activeImage.description}
                        </p>
                    )}
                    <div className="flex flex-wrap justify-center gap-2 items-center text-[10px] font-sans font-bold tracking-widest text-brand-gold/80 uppercase">
                        {activeImage.tools && (
                            <>
                                <span>Software: {activeImage.tools}</span>
                                {activeImage.location && (
                                    <>
                                        <span className="w-1.5 h-1.5 bg-brand-gold/30 rounded-full mx-1"></span>
                                        <span>Location: {activeImage.location}</span>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
