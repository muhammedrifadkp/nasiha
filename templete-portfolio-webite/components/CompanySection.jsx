import Image from "next/image";

export default function CompanySection() { // Renamed function would be ClientsSection, but keeping for compatibility
    return (
        <div className="py-8 md:py-10 bg-zinc-100">
            <p className="py-4 text-base md:text-lg font-medium text-center opacity-40">Proud to have worked with these clients</p>
            <div className="container grid grid-cols-2 md:flex md:flex-wrap items-center justify-center md:justify-between gap-8 md:gap-4">
                <div className="flex justify-center">
                    <Image src="/image/air-company-logo.png" width={100} height={100} alt="Air Company" className="opacity-40 w-auto h-8 md:h-10 lg:h-12" />
                </div>
                <div className="flex justify-center">
                    <Image src="/image/nike.png" width={100} height={100} alt="Nike" className="opacity-40 w-auto h-8 md:h-10 lg:h-12" />
                </div>
                <div className="flex justify-center">
                    <Image src="/image/samsung.png" width={100} height={100} alt="Samsung" className="opacity-40 w-auto h-8 md:h-10 lg:h-12" />
                </div>
                <div className="flex justify-center">
                    <Image src="/image/amazon-pay.png" width={100} height={100} alt="Amazon Pay" className="opacity-40 w-auto h-8 md:h-10 lg:h-12" />
                </div>
            </div>
        </div>
    );
}
