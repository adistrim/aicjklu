import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProgramCard: React.FC<{ title: string; description: string; href: string; imagePath: string }> = ({
    title,
    description,
    href,
    imagePath,
}) => (
    <Link href={href} passHref>
        <div className="block p-4 mb-4 bg-white rounded-md shadow-md hover:shadow-lg transition duration-300">
            <div className="mb-4 relative h-56">
                <Image
                    src={imagePath}
                    alt={title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-md"
                />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-lg">{title}</h3>
            <p className="text-gray-700 font-thin text-sm">{description}</p>
        </div>
    </Link>
);

const Programs: React.FC = () => {
    return (
        <div className="mx-[1rem] md:mx-[5rem]lg:mx-[10rem] mt-16 border-t border-[#f5b051]">
            <div className='my-[4rem]'>


                <h2 className="text-3xl text-center font-bold mb-8">Our Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Accelerator Program */}
                    <ProgramCard
                        title="Accelerator Program"
                        description="Sustainable Biomaterial-based Solutions - Accelerator Program"
                        href="/accelerator-program"
                        imagePath="/accelerator-program.png"
                    />

                    {/* Incubation Program */}
                    <ProgramCard
                        title="Incubation Program"
                        description="Engage with us to enlighten and empower the next generation of entrepreneurs"
                        href="/incubation-program"
                        imagePath="/incubation-program.png"
                    />

                    {/* SAIP */}
                    <ProgramCard
                        title="SAIP"
                        description="Entrepreneurs who want to work on innovative products and services."
                        href="/SAIP"
                        imagePath="/saip.png"
                    />
                </div>
            </div>
        </div>
    );
};

export default Programs;
