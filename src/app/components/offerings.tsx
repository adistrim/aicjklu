import React from 'react';
import Image from 'next/image';

const Offerings: React.FC = () => {
    return (
        <div className='mx-[1rem] md:mx-[5rem] lg:mx-[10rem] border-t border-[#f5b051]'>
            <div className="my-[5rem]">
                <h2 className="text-3xl font-bold mb-6 text-center">Our Offerings</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7">
                    <div className="p-4 bg-white rounded-md shadow-md h-full">
                        <div className="mb-4 h-40 relative">
                            <Image
                                src="/deep-industry.png"
                                alt="Deep Industry Connects"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <h3 className="text-xl text-[#f7a028] font-bold mb-2">Deep Industry Connects</h3>
                        <p className='font-thin text-sm'>Association with leading Industries Across India</p>
                    </div>

                    <div className="p-4 bg-white rounded-md shadow-md h-full">
                        <div className="mb-4 h-40 relative">
                            <Image
                                src="/strategic-mentors.png"
                                alt="Deep Industry Connects"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <h3 className="text-xl text-[#f7a028] font-bold mb-2">Strategic Mentors</h3>
                        <p className='font-thin text-sm'>Sector Agnostic experts with proven track records & Experience</p>
                    </div>

                    <div className="p-4 bg-white rounded-md shadow-md h-full">
                        <div className="mb-4 h-40 relative">
                            <Image
                                src="/disciplined-follows.png"
                                alt="Deep Industry Connects"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <h3 className="text-xl text-[#f7a028] font-bold mb-2">Disciplined Follow-ups</h3>
                        <p className='font-thin text-sm'>Aggressive weekly follow-ups, to enrich the speed of the growth for star-ups</p>
                    </div>

                    <div className="p-4 bg-white rounded-md shadow-md h-full">
                        <div className="mb-4 h-40 relative">
                            <Image
                                src="/media-visibility.png"
                                alt="Deep Industry Connects"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <h3 className="text-xl text-[#f7a028] font-bold mb-2">Media Visibility</h3>
                        <p className='font-thin text-sm'>Access to PR Agency of the Organisation & visibility through various events and media interaction</p>
                    </div>

                    <div className="p-4 bg-white rounded-md shadow-md h-full">
                        <div className="mb-4 h-40 relative">
                            <Image
                                src="/design-support.png"
                                alt="Deep Industry Connects"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <h3 className="text-xl text-[#f7a028] font-bold mb-2">Design Support</h3>
                        <p className='font-thin text-sm'>Association with leading Industries Across India</p>
                    </div>

                    <div className="p-4 bg-white rounded-md shadow-md h-full">
                        <div className="mb-4 h-40 relative">
                            <Image
                                src="/investment-support.png"
                                alt="Deep Industry Connects"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <h3 className="text-xl text-[#f7a028] font-bold mb-2">Investment Support</h3>
                        <p className='font-thin text-sm'>Access to Financial Assistance services, pitch preparation, Network Leverage for startups</p>
                    </div>

                    <div className="p-4 bg-white rounded-md shadow-md h-full">
                        <div className="mb-4 h-40 relative">
                            <Image
                                src="/government-schemes.png"
                                alt="Deep Industry Connects"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <h3 className="text-xl text-[#f7a028] font-bold mb-2">Accesses to Government Schemes</h3>
                        <p className='font-thin text-sm'>Association with leading Industries Across India</p>
                    </div>


                    <div className="p-4 bg-white rounded-md shadow-md h-full">
                        <div className="mb-4 h-40 relative">
                            <Image
                                src="/legal-support.png"
                                alt="Deep Industry Connects"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <h3 className="text-xl text-[#f7a028] font-bold mb-2">Legal & Statutory Support</h3>
                        <p className='font-thin text-sm'>Access to the Legal team, helping with due Diligence, Company registration, IPR Filling, etc.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Offerings;
