"use client";
import React from 'react';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
    const pathname = usePathname()

    return (
        <header className="bg-white p-4">
            {/* Logo on the left */}
            <div className='ml-[10rem] mr-[10rem] flex justify-between items-center'>
                <div className="flex items-center">
                    <img
                        src="aic-logo-text.png"
                        alt="Logo"
                        className="h-14 m-1 my-0.5"
                    />
                </div>

                {/* Links on the right */}
                <nav className="flex items-center space-x-10">
                    <a href="#" className={`cursor-pointer ${pathname === '/' ? 'text-[#f5b051]' : 'hover:text-[#f5b051]'}`}>Home</a>
                    <a href="#" className={`cursor-pointer ${pathname === '/about' ? 'text-[#f5b051]' : 'hover:text-[#f5b051]'}`}>About</a>

                    {/* Dropdown */}
                    <div className="relative group">
                        <p className={`cursor-pointer ${pathname === '/programs' ? 'text-[#f5b051]' : 'hover:text-[#f5b051]'}`}>
                            Program
                        </p>
                        <ul className="absolute hidden bg-white text-black p-3 space-y-2 group-hover:block shadow-md rounded-md transition-all duration-300">
                            <li>
                                <a href="#" className="block px-2 py-2 hover:text-[#f5b051] whitespace-nowrap">Incubation Program</a>
                            </li>
                            <li>
                                <a href="#" className="block px-2 py-2 hover:text-[#f5b051] whitespace-nowrap">Accelerator Program</a>
                            </li>
                            <li>
                                <a href="#" className="block px-2 py-2 hover:text-[#f5b051] whitespace-nowrap">SAIP</a>
                            </li>
                        </ul>
                    </div>

                    <div className="relative group">
                        <a href="#" className={`cursor-pointer ${pathname === '/stakeholders' ? 'text-[#f5b051]' : 'hover:text-[#f5b051]'}`}>
                            Stakeholders
                        </a>
                        <ul className="absolute hidden bg-white text-black p-3 space-y-2 group-hover:block shadow-md rounded-md transition-all duration-300">
                            <li>
                                <a href="#" className="block px-2 py-1 hover:text-[#f5b051] whitespace-nowrap">Mentors</a>
                            </li>
                            <li>
                                <a href="#" className="block px-2 py-1 hover:text-[#f5b051] whitespace-nowrap">Team</a>
                            </li>
                            <li>
                                <a href="#" className="block px-2 py-1 hover:text-[#f5b051] whitespace-nowrap">Partners</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
