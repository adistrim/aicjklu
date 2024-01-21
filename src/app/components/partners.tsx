import React from "react";
import Image from "next/image";
import NextLink from "next/link";

const Partners: React.FC = () => {
    return (
        <div className="mx-[1rem] md:mx-[10rem] md:mt-[20rem] mt-[12rem] lg:mt-[34rem] flex flex-col items-center">
            <div className="flex flex-wrap md:flex-nowrap space-y-4 space-x-4 md:space-y-0 md:space-x-16 justify-center">
                <div className="flex-none relative">
                    <Image
                        src={"/niti-aayog.png"}
                        alt={""}
                        width={100}
                        height={100}
                        className="w-20 h-20 lg:w-32 lg:h-32"
                    />
                </div>
                <div className="flex-none relative">
                    <Image
                        src={"/aim.png"}
                        alt={""}
                        width={100}
                        height={100}
                        className="w-20 h-20 lg:w-32 lg:h-32"
                    />
                </div>
                <div className="flex-none relative">
                    <Image
                        src={"/msme.png"}
                        alt={""}
                        width={100}
                        height={100}
                        className="w-20 h-20 lg:w-32 lg:h-32"
                    />
                </div>
                <div className="flex-none relative">
                    <Image
                        src={"/DoITM.png"}
                        alt={""}
                        width={100}
                        height={100}
                        className="w-20 h-20 lg:w-32 lg:h-32"
                    />
                </div>
                <div className="flex-none relative">
                    <Image
                        src={"/startup-himachal.png"}
                        alt={""}
                        width={100}
                        height={100}
                        className="w-20 h-20 lg:w-32 lg:h-32"
                    />
                </div>
                <div className="flex-none relative">
                    <Image
                        src={"/seed-fund.png"}
                        alt={""}
                        width={100}
                        height={100}
                        className="w-20 h-20 lg:w-32 lg:h-32"
                    />
                </div>
            </div>
            <div className="self-end mr-[1rem]">
                <NextLink href="/partners" passHref>
                    <p className="relative text-sm lg:text-normal text-[#f5b051] flex items-center px-4 py-2 rounded-md overflow-hidden group hover:text-white">
                        <span className="absolute inset-0 bg-[#f5b051] w-0 transition-all duration-300 group-hover:w-full"></span>
                        <span className="z-10">See More &#8594;</span>
                    </p>
                </NextLink>
            </div>
        </div>
    );
};

export default Partners;
