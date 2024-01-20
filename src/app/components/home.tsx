import React from "react";
import Image from "next/image";

const HomeArea: React.FC = () => {
    return (
        <div className="bg-white">
            <Image
                className="absolute top-0 left-0 z-[-1]"
                src={"/banner.png"}
                alt={""}
                width={1920}
                height={1080}
            >
            </Image>

            <div className="absolute ml-[10rem] mt-[10rem]">
                <h1 className="text-[4rem] font-bold text-black">
                    Driving
                </h1>
                <h1 className="text-[4rem] font-bold text-black">
                    Innovation for
                </h1>
                <h1 className="text-[4rem] font-bold text-black">
                    a Better Future
                </h1>
            </div>
        </div>
    );
};

export default HomeArea;
