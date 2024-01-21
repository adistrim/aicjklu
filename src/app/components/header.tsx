"use client";
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const sidebarRef = useRef(null);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeSidebar = (e: MouseEvent) => {
        if (sidebarRef.current && !(sidebarRef.current as Node).contains(e.target as Node)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener('click', closeSidebar);
        }

        return () => {
            document.removeEventListener('click', closeSidebar);
        };
    }, [menuOpen]);

    return (
        <header className="bg-white p-4 border-b border-gray-200">
            {/* Logo on the left */}
            <div className='mx-auto md:mx-[5rem] lg:mx-[10rem] flex justify-between items-center'>
                <div className="flex items-center">
                    <a href="/">
                        <img
                            src="aic-logo-text.png"
                            alt="Logo"
                            className="h-14 m-1 my-0.5"
                        />
                    </a>
                </div>

                {/* Hamburger menu */}
                <div className="block md:hidden lg:hidden">
                    <button onClick={toggleMenu} className="navbar-burger flex flex-col items-center py-2 px-3 text-[#f5b051] rounded border border-[#f5b051]">
                        <span className="block w-6 h-1 bg-[#f5b051] rounded"></span>
                        <span className="block w-6 h-1 bg-[#f5b051] mt-1 rounded"></span>
                        <span className="block w-6 h-1 bg-[#f5b051] mt-1 rounded"></span>
                    </button>
                </div>

                {/* Links on the right - Desktop View */}
                <nav className="hidden md:flex lg:flex items-center space-x-10">
                    <a href="/about" className={`cursor-pointer ${pathname === '/about' ? 'text-[#f5b051]' : 'hover:text-[#f5b051]'}`}>About</a>
                    <a href="/team" className={`cursor-pointer ${pathname === '/team' ? 'text-[#f5b051]' : 'hover:text-[#f5b051]'}`}>Team</a>
                    <a href="/mentors" className={`cursor-pointer ${pathname === '/mentors' ? 'text-[#f5b051]' : 'hover:text-[#f5b051]'}`}>Mentors</a>
                    <a href="/partners" className={`cursor-pointer ${pathname === '/partners' ? 'text-[#f5b051]' : 'hover:text-[#f5b051]'}`}>Partners</a>

                    {/* Dropdown */}
                    <div className="relative group">
                        <p className={`cursor-pointer ${pathname === '/incubation-program' ? 'text-[#f5b051]' : 'hover:text-[#f5b051]'}`}>
                            Programs
                        </p>
                        <ul className="absolute hidden bg-white text-black p-3 space-y-2 group-hover:block shadow-md rounded-md transition-all duration-300">
                            <li>
                                <a href="/incubation-program" className="block px-2 py-2 hover:text-[#f5b051] whitespace-nowrap">Incubation Program</a>
                            </li>
                            <li>
                                <a href="/accelerator-program" className="block px-2 py-2 hover:text-[#f5b051] whitespace-nowrap">Accelerator Program</a>
                            </li>
                            <li>
                                <a href="/SAIP" className="block px-2 py-2 hover:text-[#f5b051] whitespace-nowrap">SAIP</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Sidebar - Mobile View */}
            {menuOpen && (
                <div ref={sidebarRef} className=" md:hidden lg:hidden fixed top-0 right-0 h-full w-1/2 bg-white p-4 shadow-md z-50 overflow-y-auto">
                    <a href="/about" className="block py-2 hover:text-[#f5b051]">About</a>
                    <a href="/team" className="block py-2 hover:text-[#f5b051]">Team</a>
                    <a href="/mentors" className="block py-2 hover:text-[#f5b051]">Mentors</a>
                    <a href="/partners" className="block py-2 hover:text-[#f5b051]">Partners</a>
                    <a href="/incubation-program" className="block py-2 hover:text-[#f5b051] whitespace-nowrap">Incubation Program</a>
                    <a href="/accelerator-program" className="block py-2 hover:text-[#f5b051] whitespace-nowrap">Accelerator Program</a>
                    <a href="/SAIP" className="block py-2 hover:text-[#f5b051] whitespace-nowrap">SAIP</a>
                </div>
            )}
        </header>
    );
};

export default Header;
