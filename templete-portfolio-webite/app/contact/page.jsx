"use client";
import { TbArrowUpRight, TbBrandWhatsapp, TbMail, TbPhone, TbMapPin, TbClock } from "react-icons/tb";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });

        // Clear error when user starts typing
        if (formErrors[id]) {
            setFormErrors({ ...formErrors, [id]: "" });
        }
    };

    // Validate form
    const validateForm = () => {
        const errors = {};

        if (!formData.name.trim()) {
            errors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }

        if (!formData.subject.trim()) {
            errors.subject = "Subject is required";
        }

        if (!formData.message.trim()) {
            errors.message = "Message is required";
        }

        return errors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validate form
        const errors = validateForm();
        setFormErrors(errors);

        // If no errors, proceed with WhatsApp redirect
        if (Object.keys(errors).length === 0) {
            // Format the message for WhatsApp
            const whatsappMessage = `
*New Portfolio Contact Submission*
---------------------------
*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}
*Message:* ${formData.message}
---------------------------
            `.trim();

            // Encode the message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // Nasiha Sara's WhatsApp number (with country code)
            const phoneNumber = "918547158843"; // 91 is India's country code

            // Create WhatsApp URL
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            // Open WhatsApp in a new tab
            window.open(whatsappURL, "_blank");

            // Reset form after submission
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        }

        setIsSubmitting(false);
    };

    return (
        <div className="bg-brand-dark min-h-screen">
            {/* Header banner */}
            <div className="relative py-24 md:py-32 border-b border-brand-gold/10 bg-[url('/portfolio_assets/backgrounds/contact_bg.png')] bg-cover bg-center overflow-hidden">
                {/* Dark Sapphire Overlay */}
                <div className="absolute inset-0 bg-brand-dark/85"></div>
                <div className="absolute top-[-50%] left-[-20%] w-[60%] h-[100%] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none"></div>
                <div className="container relative z-10 text-center lg:text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">Get In Touch</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-light mt-2">CONTACT ME</h1>
                </div>
            </div>

            {/* Contact Form and Info Section */}
            <div className="container py-16">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
                    {/* Contact Form (lg:col-span-7) */}
                    <div className="lg:col-span-7 p-8 bg-brand-card border border-brand-gold/10 rounded-xl shadow-2xl">
                        <h2 className="text-2xl font-serif font-bold text-brand-light mb-4">Start a Conversation</h2>
                        <p className="text-sm text-brand-muted mb-8 font-light leading-relaxed">
                            Have an architectural plan to draft, a layout sheet to compile, or a residential space requiring photorealistic 3D visualization? Reach out using the form below, and it will direct you to my WhatsApp.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-xs font-bold uppercase tracking-wider text-brand-gold">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border bg-brand-dark text-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold/50 ${
                                            formErrors.name ? 'border-red-500' : 'border-brand-gold/10'
                                        }`}
                                        placeholder="Your name"
                                    />
                                    {formErrors.name && <p className="mt-1 text-xs text-red-500">{formErrors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-xs font-bold uppercase tracking-wider text-brand-gold">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border bg-brand-dark text-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold/50 ${
                                            formErrors.email ? 'border-red-500' : 'border-brand-gold/10'
                                        }`}
                                        placeholder="Your email"
                                    />
                                    {formErrors.email && <p className="mt-1 text-xs text-red-500">{formErrors.email}</p>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-xs font-bold uppercase tracking-wider text-brand-gold">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border bg-brand-dark text-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold/50 ${
                                        formErrors.subject ? 'border-red-500' : 'border-brand-gold/10'
                                    }`}
                                    placeholder="Project subject"
                                />
                                {formErrors.subject && <p className="mt-1 text-xs text-red-500">{formErrors.subject}</p>}
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 text-xs font-bold uppercase tracking-wider text-brand-gold">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border bg-brand-dark text-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold/50 ${
                                        formErrors.message ? 'border-red-500' : 'border-brand-gold/10'
                                    }`}
                                    placeholder="Your project description or requirements"
                                ></textarea>
                                {formErrors.message && <p className="mt-1 text-xs text-red-500">{formErrors.message}</p>}
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold tracking-widest uppercase text-brand-dark bg-brand-gold hover:bg-brand-gold-hover rounded-full shadow-lg transition-all duration-300"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'} <TbArrowUpRight className="text-base" />
                                </button>
                                <div className="flex items-center gap-2 text-brand-muted">
                                    <TbBrandWhatsapp className="text-xl text-green-500" />
                                    <span className="text-[10px] tracking-wide uppercase font-bold text-green-500">Form redirects to WhatsApp</span>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Contact Information (lg:col-span-5) */}
                    <div className="lg:col-span-5 flex flex-col gap-8 w-full">
                        <div className="p-8 bg-brand-card border border-brand-gold/10 rounded-xl">
                            <h2 className="text-xl font-serif font-bold text-brand-gold mb-6 uppercase tracking-wider">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 text-brand-dark bg-brand-gold rounded-full">
                                        <TbMapPin className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-wider text-brand-light">Location</h3>
                                        <p className="text-xs text-brand-muted font-light mt-1">Kasaragod, Kerala, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 text-brand-dark bg-brand-gold rounded-full">
                                        <TbPhone className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-wider text-brand-light">Phone & WhatsApp</h3>
                                        <p className="text-xs text-brand-muted font-light mt-1">+91 85471 58843</p>
                                        <a
                                            href="https://wa.me/918547158843"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-4 py-1.5 mt-2.5 text-[10px] font-bold text-brand-dark bg-green-500 hover:bg-green-600 rounded-full transition-colors uppercase tracking-wider"
                                        >
                                            <TbBrandWhatsapp className="text-sm" />
                                            WhatsApp Chat
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 text-brand-dark bg-brand-gold rounded-full">
                                        <TbMail className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-wider text-brand-light">Email Address</h3>
                                        <p className="text-xs text-brand-muted font-light mt-1">naziyashihab6@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 text-brand-dark bg-brand-gold rounded-full">
                                        <TbClock className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-wider text-brand-light">Working Hours</h3>
                                        <p className="text-xs text-brand-muted font-light mt-1">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                                        <p className="text-xs text-brand-muted font-light mt-0.5">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="container py-8 pb-20">
                <div className="overflow-hidden rounded-xl border border-brand-gold/10 shadow-2xl h-[400px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62304.59599540026!2d74.9602494!3d12.5020967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4864147743d5d%3A0xe1065f419c8f3521!2sKasaragod%2C%20Kerala!5e0!3m2!1sen!2sin!4v1746856120882!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Kasaragod Kerala Map Location"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}