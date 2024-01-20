import React from "react";
import Image from "next/image";

const Partners: React.FC = () => {
    return (
        <div className="ml-[10rem] mr-[10rem] mt-[34rem] flex space-x-16 justify-center">
            <div className="flex-none">
                <Image
                    src={"/niti-aayog.png"}
                    alt={""}
                    width={125}
                    height={125}
                    layout="fixed"
                />
            </div>
            <div className="flex-none">
                <Image
                    src={"/aim.png"}
                    alt={""}
                    width={125}
                    height={125}
                    layout="fixed"
                />
            </div>
            <div className="flex-none">
                <Image
                    src={"/msme.png"}
                    alt={""}
                    width={125}
                    height={125}
                    layout="fixed"
                />
            </div>
            <div className="flex-none">
                <Image
                    src={"/DoITM.png"}
                    alt={""}
                    width={125}
                    height={125}
                    layout="fixed"
                />
            </div>
            <div className="flex-none">
                <Image
                    src={"/startup-himachal.png"}
                    alt={""}
                    width={125}
                    height={125}
                    layout="fixed"
                />
            </div>
            <div className="flex-none">
                <Image
                    src={"/seed-fund.png"}
                    alt={""}
                    width={125}
                    height={125}
                    layout="fixed"
                />
            </div>
        </div>
    );
};

export default Partners;
