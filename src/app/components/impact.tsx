import React from 'react';

const Impact: React.FC = () => {
    return (
        <div className="py-12 mt-[2rem] mx-[1rem] md:mx-[5rem] lg:mx-[10rem] border-t border-[#f5b051] bg-white">
            <div className="container mx-auto">
                <h2 className="text-2xl lg:text-4xl font-bold mb-8 text-center">Our Impact</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-gray-100 rounded-md shadow-md">
                        <p className="text-xl lg:text-3xl font-bold text-[#f5b051] mb-2">200+</p>
                        <p className="text-gray-700 text-normal lg:text-lg">Startups</p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-md shadow-md">
                        <p className="text-xl lg:text-3xl font-bold text-[#f5b051] mb-2">₹3.2 Cr</p>
                        <p className="text-gray-700 text-normal lg:text-lg">Raised by incubated startups</p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-md shadow-md">
                        <p className="text-xl lg:text-3xl font-bold text-[#f5b051] mb-2">45+</p>
                        <p className="text-gray-700 text-normal lg:text-lg">Mentors</p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-md shadow-md">
                        <p className="text-xl lg:text-3xl font-bold text-[#f5b051] mb-2">600+</p>
                        <p className="text-gray-700 text-normal lg:text-lg">Events</p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-md shadow-md">
                        <p className="text-xl lg:text-3xl font-bold text-[#f5b051] mb-2">100+</p>
                        <p className="text-gray-700 text-normal lg:text-lg">Exclusive programs</p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-md shadow-md">
                        <p className="text-xl lg:text-3xl font-bold text-[#f5b051] mb-2">35+</p>
                        <p className="text-gray-700 text-normal lg:text-lg">Partners</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Impact;
