import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function CatalogueSection() {
    const items = [
        {
            id: "01",
            category: "BIM MODELING",
            title: "Revit BIM & Architecture",
            image: "/portfolio_assets/catalogue/catalogue_revit.png",
            description: "Detailed 2D documentation and 3D architectural models in Revit, following professional BIM standards.",
            link: "/services"
        },
        {
            id: "02",
            category: "3D VISUALIZATION",
            title: "Photorealistic Rendering",
            image: "/portfolio_assets/catalogue/catalogue_render.png",
            description: "Stunning 3D visualizations using Corona and V-Ray that capture accurate materials and lighting dynamics.",
            link: "/services"
        },
        {
            id: "03",
            category: "TECHNICAL DRAWINGS",
            title: "AutoCAD Space Layouts",
            image: "/portfolio_assets/services/service_autocad.png",
            description: "Precise 2D CAD drafting, furniture space planning, ceiling layouts, and construction documentation.",
            link: "/services"
        },
        {
            id: "04",
            category: "INTERIOR DESIGN",
            title: "Residential Space Planning",
            image: "/portfolio_assets/services/service_vray.png",
            description: "Custom residential spatial designs, modular kitchen cabinetry, and premium material selection.",
            link: "/services"
        },
    ]

    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-brand-dark p-6 border-b border-brand-gold/10">
            {items.map((item) => (
                <div key={item.id} className="relative overflow-hidden group shadow-xl rounded-xl border border-brand-gold/10">
                    <div className="overflow-hidden aspect-[3/4] relative w-full h-full min-h-[450px]">
                        <Image
                            src={item.image}
                            fill
                            alt={item.title}
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-w-768px) 100vw, 300px"
                        />
                    </div>
                    {/* Glass Overlay Info Card */}
                    <div className="absolute bottom-4 left-4 right-4 p-5 bg-brand-card/90 border border-brand-gold/10 backdrop-blur-md transition-all duration-300 group-hover:bg-brand-dark/95 rounded-lg z-10">
                        <div className="flex justify-between pb-1.5 items-center">
                            <p className="text-[10px] tracking-widest font-bold text-brand-gold font-sans uppercase">{item.category}</p>
                            <span className="text-sm font-serif font-semibold text-brand-gold/80">{item.id}</span>
                        </div>
                        <a className="block text-base font-serif font-bold text-brand-light transition-colors hover:text-brand-gold mb-2" href={item.link}>
                            {item.title}
                        </a>
                        <p className="pb-3 text-xs text-brand-muted leading-relaxed line-clamp-3">{item.description}</p>
                        <a
                            className="inline-flex items-center text-xs font-bold text-brand-gold transition-all hover:text-brand-gold-hover hover:translate-x-1 uppercase tracking-wider"
                            href={item.link}
                        >
                            See Details <TbArrowNarrowRight className="ml-1.5 text-sm" />
                        </a>
                    </div>

                    {/* Architectural slide-up decorative overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-end gap-16 pb-16 text-brand-light transition duration-500 ease-in-out translate-y-0 group-hover:translate-y-full bg-brand-dark/85 z-0">
                        <p className="tracking-widest font-bold text-xs uppercase -rotate-90 text-brand-gold font-sans">{item.category}</p>
                        <span className="font-serif font-bold text-2xl">
                            {item.id}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}