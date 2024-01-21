import React from "react";
import Image from "next/image";
import NextLink from "next/link";

const Partners: React.FC = () => {
    return (
        <div className="ml-[10rem] mr-[10rem] mt-[34rem] flex flex-col items-center">
            <div className="flex space-x-16 justify-center">
                <div className="flex-none">
                    <Image
                        src={"/niti-aayog.png"}
                        alt={""}
                        width={125}
                        height={125}
                    />
                </div>
                <div className="flex-none">
                    <Image
                        src={"/aim.png"}
                        alt={""}
                        width={125}
                        height={125}
                    />
                </div>
                <div className="flex-none">
                    <Image
                        src={"/msme.png"}
                        alt={""}
                        width={125}
                        height={125}
                    />
                </div>
                <div className="flex-none">
                    <Image
                        src={"/DoITM.png"}
                        alt={""}
                        width={125}
                        height={125}
                    />
                </div>
                <div className="flex-none">
                    <Image
                        src={"/startup-himachal.png"}
                        alt={""}
                        width={125}
                        height={125}
                    />
                </div>
                <div className="flex-none">
                    <Image
                        src={"/seed-fund.png"}
                        alt={""}
                        width={125}
                        height={125}
                    />
                </div>
            </div>
            <div className="self-end mr-[1rem]">
                <NextLink href="/partners" passHref>
                    <p className="relative text-[#f5b051] flex items-center px-4 py-2 rounded-md overflow-hidden group hover:text-white">
                        <span className="absolute inset-0 bg-[#f5b051] w-0 transition-all duration-300 group-hover:w-full"></span>
                        <span className="z-10">See More &#8594;</span>
                    </p>
                </NextLink>
            </div>
        </div>
    );
};

export default Partners;
