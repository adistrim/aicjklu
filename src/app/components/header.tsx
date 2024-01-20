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
                        src="aic-logo.png"
                        alt="Logo"
                        className="h-14 m-1 my-0.5"
                    />
                </div>

                {/* Links on the right */}
                <nav className="flex items-center space-x-10">
                    <a href="#" className={`cursor-pointer text-black ${pathname === '/' ? 'text-[#f5b051]' : 'hover:text-[#f5b051]'}`}>Home</a>
                    <a href="#" className={`cursor-pointer text-black ${pathname === '/about' ? 'text-[#f5b051]' : 'hover:text-[#f5b051]'}`}>About</a>

                    {/* Dropdown */}
                    <div className="relative group">
                        <a href="#" className={`cursor-pointer text-black ${pathname === '/programs' ? 'text-[#f5b051]' : 'hover:text-[#f5b051]'}`}>
                            Program
                        </a>
                        <ul className="absolute hidden bg-gray-700 text-black p-2 space-y-2 group-hover:block">
                            <li><a href="#">Option 1</a></li>
                            <li><a href="#">Option 2</a></li>
                            <li><a href="#">Option 3</a></li>
                        </ul>
                    </div>

                    <div className="relative group">
                        <a href="#" className={`cursor-pointer text-black ${pathname === '/stakeholders' ? 'text-[#f5b051]' : 'hover:text-[#f5b051]'}`}>
                            Stakeholders
                        </a>
                        <ul className="absolute hidden bg-gray-700 text-black p-2 space-y-2 group-hover:block">
                            <li><a href="#">Option 1</a></li>
                            <li><a href="#">Option 2</a></li>
                            <li><a href="#">Option 3</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
