import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";

const About = () => {
    return (
        <div>
            <Header />
            <div className="mx-[10rem]">
                <div className="flex flex-col items-center m-[4.5rem]">
                    <h1 className="text-[6rem] text-[#f58b40] font-bold">About US</h1>
                    <p className="font-thin">Preparing every startup to be business ready</p>
                </div>
                <div className="border-t border-[#f5b051]">
                    <div className="flex items-center my-[6rem]">
                        <div className="w-1/2 flex items-center justify-center">
                            <Image
                                src="/aic-logo-text.png"
                                alt=""
                                width={300}
                                height={300}
                            />
                        </div>
                        <div className="w-1/2 p-8 leading-relaxed">
                            <h2 className="text-6xl text-[#f58b40] font-bold mb-4">About AIC-JKLU</h2>
                            <p className="tracking-wide font-thin">
                                Atal Incubation Center - JK Lakshmipat University is established with
                                the support of AIM, NITI Aayog, and JK Lakshmipat University in 2019.
                                In the last 3 years, AIC-JKLU has supported 43 startups in various
                                sectors including Fintech, Ed-tech, EVs, Agritech, and more. It has
                                been consistently rated as one of the top-performing Incubation
                                Centers in the AIM network. The AIC, due to its association with JKLU,
                                is uniquely able to provide start-ups access to interdisciplinary
                                resources such as high-end computing facilities, design facilities,
                                and engineering labs (33+ labs) coupled with expert resources in the
                                areas of business, technology, and design (45+ mentors & 35+
                                partners). In the coming years, AIC-JKLU aims to build an eco-system
                                to focus specifically on Longevity Economy & Energy.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#f5b051]">
                    <div className="flex items-center my-[4rem]">
                        <div className="w-1/2 p-8 leading-relaxed">
                            <h2 className="text-6xl text-[#f58b40] font-bold mb-4">About AIM</h2>
                            <p className="tracking-wide font-thin">
                                Atal Innovation Mission (AIM) – It is a Government of India endeavour to promote the culture of innovation and entrepreneurship, driven by Niti Aayog. AIM supports the establishment of new incubation centres called Atal Incubation Centres. JK Lakshmipat University was selected as Atal Incubation Centre- JKLU (AIC- JKLU), for turning the vision of the Atal Innovation Mission into reality. The institute was one of the ten selections out of the 3658 first-round applicants. AIC- JKLU is one of a kind academia-industry- government partnership, driven by Atal Innovation Mission to create high-class incubation facilities with suitable infrastructure in terms of capital equipment and operating facilities. It is coupled with the availability of sector-wise experts for mentoring the start-ups so that these startup businesses can become successful entrepreneurs and enterprises.
                            </p>
                        </div>
                        <div className="w-1/2 flex items-center justify-center">
                            <Image
                                src="/niti-aim-logo.png"
                                alt=""
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#f5b051]">
                    <div className="flex items-center my-[6rem]">
                        <div className="w-1/2 flex items-center justify-center">
                            <Image
                                src="/jklu-logo.png"
                                alt=""
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className="w-1/2 p-8 leading-relaxed">
                            <h2 className="text-6xl text-[#f58b40] font-bold mb-4">About JKLU</h2>
                            <p className="tracking-wide font-thin">
                                Established in 2011, JK Lakshmipat University (JKLU) is located in the historic city of Jaipur, Rajasthan. Supported by the 125 years old legacy of contributions to nation-building by the JK Organisation, at JKLU we are passionate about building the country’s most innovative higher education institution. The 30-acre campus is a modern, environmentally conscious, and inviting space designed to help students live, work and play in a setting that is safe, productive, and student-centric.
                                <br />
                                <br />
                                As the world of business and jobs changes rapidly, we are evolving to make our students not just job-ready but also life-ready, to help them see learning as a continuous process, and to become future-ready professionals with 21st-century skills.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
