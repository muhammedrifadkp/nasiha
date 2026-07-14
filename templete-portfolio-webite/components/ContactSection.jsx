import { TbArrowUpRight } from "react-icons/tb";

export default function ContactSection() {
    return (
        <div className="bg-brand-dark border-t border-brand-gold/10">
            <div className="container flex flex-col items-center justify-between gap-6 py-12 text-center md:py-16 lg:flex-row lg:text-left">
                <div className="py-2 md:py-4">
                    <p className="text-brand-gold text-sm tracking-widest font-bold uppercase mb-1 font-sans">Let&apos;s collaborate</p>
                    <h1 className="text-3xl font-serif font-bold md:text-4xl lg:text-5xl text-brand-light">Get in touch</h1>
                </div>
                <a
                    className="inline-flex items-center gap-1.5 px-8 py-3.5 text-xs font-bold tracking-widest uppercase text-brand-dark bg-brand-gold hover:bg-brand-gold-hover rounded-full shadow-lg transition-all duration-300"
                    href="/contact"
                >
                    CONTACT ME <TbArrowUpRight className="text-base" />
                </a>
            </div>
        </div>
    )
}