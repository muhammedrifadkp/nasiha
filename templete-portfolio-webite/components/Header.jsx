import Navigation from "./Navigation";
import Link from "next/link";

export default function Header() {
    return (
        <div className="sticky inset-x-0 top-0 z-header bg-brand-dark/80 border-b border-brand-gold/10 backdrop-blur-lg shadow-lg">
            <div className="container flex items-center justify-between py-4 md:py-6">
                <Link href="/" className="relative z-50 flex items-baseline">
                    <span className="text-xl md:text-2xl font-serif font-bold tracking-widest text-brand-light">
                        NASIHA SARA
                    </span>
                    <span className="w-1.5 h-1.5 ml-1 bg-brand-gold rounded-full inline-block"></span>
                </Link>

                <Navigation />
            </div>
        </div>
    );
}