"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { TbArrowUpRight } from "react-icons/tb";

const menuVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { 
      duration: 0.3,
      staggerChildren: 0.1,
      delayChildren: 0.2
    },
  },
  closed: {
    x: "100%",
    opacity: 0,
    transition: { 
      duration: 0.3,
      staggerChildren: 0.05,
      staggerDirection: -1
    },
  },
};

const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4 }
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: { duration: 0.4 }
  }
};

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/projects', label: 'PROJECTS' },
  { href: '/services', label: 'SERVICES' },
  { href: '/about', label: 'ABOUT ME' },
  { href: '/gallery', label: 'GALLERY' },
];

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const pathname = usePathname();
  
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="fixed top-0 right-0 w-[80%] max-w-[280px] h-screen bg-brand-dark/95 border-l border-brand-gold/10 backdrop-blur-xl text-brand-light z-45 flex flex-col items-start px-8 py-24 shadow-2xl"
    >
      <div className="flex flex-col w-full gap-y-1">
        {navLinks.map(({ href, label }) => (
          <motion.div key={href} variants={linkVariants}>
            <Link
              href={href}
              className={`text-sm tracking-widest py-4 block w-full border-b border-brand-border/40 transition-colors duration-300 hover:text-brand-gold ${
                pathname === href 
                  ? 'text-brand-gold font-bold' 
                  : 'text-brand-light/80'
              }`}
              onClick={toggleMenu}
            >
              {label}
            </Link>
          </motion.div>
        ))}
        
        <motion.div variants={linkVariants} className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-full px-6 py-3 text-xs tracking-widest font-bold text-brand-dark bg-brand-gold hover:bg-brand-gold-hover rounded-full shadow-lg transition-all duration-300"
            onClick={toggleMenu}
          >
            CONTACT <TbArrowUpRight className="w-4 h-4 ml-1.5" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
