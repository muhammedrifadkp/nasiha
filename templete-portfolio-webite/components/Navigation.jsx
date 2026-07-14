"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import MobileMenu from "./MobileMenu";
import { AnimatePresence } from "framer-motion";

const nav = [
    { href: '/', label: 'HOME' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/services', label: 'SERVICES' },
    { href: '/about', label: 'ABOUT ME' },
    { href: '/gallery', label: 'GALLERY' },
]

export default function Navigation() {
    const pathname = usePathname()
    const [isOpen, setOpen] = useState(false)

    // Close menu when route changes
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Mobile menu toggle button */}
            <button
                className={`flex items-center justify-center w-11 h-11 p-2 rounded-full lg:hidden focus:outline-none focus:ring-2 focus:ring-brand-gold z-50 fixed top-4 right-4 shadow-lg border border-brand-gold/20 ${isOpen ? 'bg-brand-dark text-brand-gold' : 'bg-brand-card text-brand-light'}`}
                onClick={() => setOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <svg
                    className={`fill-current h-5 w-5 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-90 scale-90" : ""}`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {isOpen ? (
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    ) : (
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    )}
                </svg>
            </button>

            {/* Desktop navigation */}
            <div className="hidden lg:flex gap-x-8 items-center">
                {nav.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`text-xs tracking-widest font-medium transition-colors duration-300 hover:text-brand-gold ${
                            pathname === href ? 'text-brand-gold font-bold' : 'text-brand-light/80'
                        }`}
                    >
                        {label}
                    </Link>
                ))}
            </div>

            {/* Mobile menu with animation */}
            <AnimatePresence>
                {isOpen && <MobileMenu isOpen={isOpen} toggleMenu={() => setOpen(false)} />}
            </AnimatePresence>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-30 bg-black transition-opacity duration-300 ease-in-out lg:hidden ${
                    isOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
                }`}
                onClick={() => setOpen(false)}
            ></div>

            {/* Desktop contact button */}
            <Link
                href="/contact"
                className="items-center hidden px-6 py-2.5 text-xs tracking-widest font-bold text-brand-dark bg-brand-gold hover:bg-brand-gold-hover rounded-full shadow transition-all duration-300 lg:inline-flex"
            >
                CONTACT <TbArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
        </>
    )
}