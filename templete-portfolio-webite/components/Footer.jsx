"use client";

import { useState } from "react";
import Link from "next/link";
import { TbMail, TbPhone, TbMapPin } from "react-icons/tb";

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        if (email.trim()) {
            // Clear input after subscription
            setEmail("");
        }
    };
    return (
        <div className="bg-brand-dark/95 border-t border-brand-gold/10 text-brand-light">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h2 className="pb-4 text-sm font-serif font-bold text-brand-gold tracking-widest uppercase">Navigation</h2>
                        <div className="flex flex-col space-y-2 text-sm font-light text-brand-muted">
                            <Link className="hover:text-brand-gold transition-colors" href="/">Home</Link>
                            <Link className="hover:text-brand-gold transition-colors" href="/projects">Projects</Link>
                            <Link className="hover:text-brand-gold transition-colors" href="/services">Services</Link>
                            <Link className="hover:text-brand-gold transition-colors" href="/about">About Me</Link>
                            <Link className="hover:text-brand-gold transition-colors" href="/gallery">Gallery</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="pb-4 text-sm font-serif font-bold text-brand-gold tracking-widest uppercase">Expertise</h2>
                        <div className="flex flex-col space-y-2 text-sm font-light text-brand-muted">
                            <span className="cursor-default">Revit BIM & Drafting</span>
                            <span className="cursor-default">3ds Max & SketchUp Modeling</span>
                            <span className="cursor-default">Corona & V-Ray Rendering</span>
                            <span className="cursor-default">Post-Processing (Photoshop)</span>
                            <span className="cursor-default">Lumion Visualization</span>
                        </div>
                    </div>
                    <div>
                        <h2 className="pb-4 text-sm font-serif font-bold text-brand-gold tracking-widest uppercase">Contact</h2>
                        <div className="flex flex-col space-y-3 text-sm font-light text-brand-muted">
                            <div className="flex items-center gap-2">
                                <TbMail className="text-brand-gold" />
                                <a className="hover:text-brand-gold transition-colors" href="mailto:naziyashihab6@gmail.com">naziyashihab6@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <TbPhone className="text-brand-gold" />
                                <a className="hover:text-brand-gold transition-colors" href="tel:+918547158843">+91 85471 58843</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <TbMapPin className="text-brand-gold" />
                                <span>Kasaragod, Kerala, India</span>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4 md:pt-0">
                        <h2 className="pb-4 text-sm font-serif font-bold text-brand-gold tracking-widest uppercase">Stay Updated</h2>
                        <form onSubmit={(e) => { e.preventDefault(); handleSubscribe(); }} className="relative mb-4">
                            <input
                                className="w-full px-4 pr-24 border border-brand-gold/20 bg-brand-card text-brand-light rounded-full h-11 text-xs focus:outline-none focus:border-brand-gold"
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button 
                                type="submit"
                                className="absolute h-8 px-4 text-xs font-bold text-brand-dark bg-brand-gold rounded-full top-1.5 right-1.5 hover:bg-brand-gold-hover transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-[10px] leading-relaxed text-brand-muted font-light">
                            By subscribing, you agree to receive design insights and architectural updates from me. Your data remains completely private.
                        </p>
                    </div>
                </div>

                <div className="pt-8 mt-8 text-center text-xs text-brand-muted border-t border-brand-gold/10 font-light">
                    <p>© {new Date().getFullYear()} Nasiha Sara. All rights reserved. Designed for architectural elegance.</p>
                </div>
            </div>
        </div>
    )
}
