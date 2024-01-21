import React from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

const Partners: React.FC = () => {
    return (
        <div className="bg-gray-100">
            <Header />
            <div className="container mx-auto mx-[10rem] mt-[3rem] p-8 bg-white rounded-lg shadow-md mb-[3rem]">
                <h2 className="text-4xl font-bold mb-8 text-center bg-[#f5b051] text-white p-4 rounded-md">Meet Our Partners</h2>

                {/* Corporate & Academic Partners */}
                <section className="mb-12">
                <h3 className="text-2xl mx-[20rem] font-bold mb-4 bg-blue-400 text-white p-2 rounded-md text-center">Corporate & Academic Partners</h3>
                    <div className="flex flex-wrap items-center justify-center space-x-8">
                        <Image src="/niti-aayog.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/aim.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/DoITM.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/startup-himachal.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/msme.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/seed-fund.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/jk-tyre.jpg" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/jk-fenner.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/jk-paper.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/jk-cement.jpg" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/umang-dairies.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/startup-oasis.jpg" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/innocity.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/ingenious.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/startup-buddy.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/fundnest.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/boudhik-ventures.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/mentor-kart.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/jaipur-chalo.jpg" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/headstart.jpg" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/moraka-organic.jpg" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/samarth.jpg" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/hdfc-bank.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/suits-space.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/irm.jpg" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/iiim.jpg" alt="" width={100} height={100} className="m-2 rounded-lg" />
                    </div>
                </section>

                {/* Investment Partners */}
                <section className="mb-12">
                    <h3 className="text-2xl mx-[20rem] font-bold mb-4 bg-[#8cc152] text-white p-2 rounded-md text-center">Investment Partners</h3>
                    <div className="flex flex-wrap items-center justify-center space-x-8">
                        <Image src="/fundnest.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/rain.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/sinbe.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/arthayan.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/rvcf.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                    </div>
                </section>

                {/* Peer Incubators */}
                <section>
                    <h3 className="text-2xl mx-[20rem] font-bold mb-4 bg-[#f36f6f] text-white p-2 rounded-md text-center">Peer Incubators</h3>
                    <div className="flex flex-wrap items-center justify-center space-x-8">
                        <Image src="/aic-muj.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/aic-gtu.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/ciie.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/upes.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/ditu.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                    </div>
                </section>

                {/* Technological Partners */}
                <section className="mb-12">
                    <h3 className="text-2xl mx-[20rem] font-bold mb-4 bg-[#65a9d7] text-white p-2 rounded-md text-center">Technological Partners</h3>
                    <div className="flex flex-wrap items-center justify-center space-x-8">
                        <Image src="/zoho-one.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/aws.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/my-operator.png" alt="" width={100} height={100} className="m-2 rounded-lg" />
                        <Image src="/f6s.jpeg" alt="" width={100} height={100} className="m-2 rounded-lg" />
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Partners;
