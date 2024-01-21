import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className="mx-[1rem] md:mx-[5rem] lg:mx-[10rem] border-t border-[#f5b051] text-white py-12">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between">
                <div className="lg:w-1/2 bg-white mb-8 p-10">
                    <div className="flex items-center mb-4">
                        <Image
                            src="/aic-logo-text.png"
                            alt="Logo"
                            width={80}
                            height={80}
                            className="mr-2"
                        />
                    </div>
                    <p className="text-black">
                        Atal Incubation Centre (AIC) is an initiative of the Atal Innovation Mission, NITI Aayog to promote a culture of innovation and entrepreneurship. The AIC serves as a platform for nurturing innovative ideas, promoting entrepreneurship, supporting innovators, and mentoring youth in general and women in particular.
                    </p>
                </div>

                <div className="lg:w-1/2 mb-8 p-10">
                    <h3 className="text-3xl text-black font-bold mb-4">Contact Us</h3>
                    <p className="text-black">
                        AIC-JKLU, JK Lakshmipat University, Mahapura,<br />
                        Jaipur - 302026
                    </p>
                    <p className="mt-4">
                        <span className="block text-black">
                            Mail -{' '}
                            <a href="mailto:info@aicjklu.in" className="text-[#f5b051]">
                                info@aicjklu.in
                            </a>
                        </span>
                        <span className="text-black">Phone - </span>
                        <span className="text-[#f5b051]">0141-7107-589</span>
                    </p>
                </div>
            </div>

            <div className="border-t border-[#f5b051] mx-[1rem] mt-8 pt-4">
                <div className='text-center flex justify-between'>
                    <p className="text-sm text-black">
                        © 2024 Atal Incubation Center (AIC)
                    </p>
                    <div className="mb-4 flex">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/Facebook-icon.png"
                                alt="Facebook"
                                width={30}
                                height={30}
                                className="mx-2"
                            />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/x-icon.png"
                                alt="X"
                                width={30}
                                height={30}
                                className="mx-2"
                            />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/Instagram-icon.png"
                                alt="Instagram"
                                width={30}
                                height={30}
                                className="mx-2"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
