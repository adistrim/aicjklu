import React from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

const Team: React.FC = () => {
    const boardMembers = [
        {
            name: "Prof. Dheeraj Sanghi",
            photo: "/dheeraj-sanghi.png",
            linkedin: "https://www.linkedin.com/in/dheerajsanghi/",
        },
        {
            name: "Mr. Keshav Sharma",
            photo: "/keshav-sharma.png",
            linkedin: "https://www.linkedin.com/in/kesharma/",
        },
        {
            name: "Mr. Asheesh Gupta",
            photo: "/asheesh-gupta.png",
            linkedin: "https://in.linkedin.com/in/asheesh-gupta-5866a33",
        },
        {
            name: "Mr. Sundeep Tibrewal",
            photo: "/sundeep-tibrewal.png",
            linkedin: "https://in.linkedin.com/in/sundeeptibrewal",
        },

    ];

    const teamMembers = [
        {
            role: "CEO",
            name: "Nidhi Kachhawa",
            photo: "/nidhi-kachhawa.png",
            mobile: "+91 7597556768",
            email: "Nidhi@aicjklu.in",
            linkedin: "https://in.linkedin.com/in/nidhi-kachhawa",
        },
        {
            role: "Senior Manager",
            name: "Sumit Srivastava",
            photo: "/sumit-srivastava.webp",
            mobile: "+91 9829040595",
            email: "Sumit@aicjklu.in",
            linkedin: "https://www.linkedin.com/in/sumit-srivastava-166094158/",
        },
        {
            role: "Associate Manager",
            name: "Paritosh",
            photo: "/paritosh.jpeg",
            mobile: "+91 7073696294",
            email: "Paritosh@aicjklu.in",
            linkedin: "https://www.linkedin.com/in/paritosh-prasad1999/",
        },
        {
            role: "Executive",
            name: "Bismanpreet Singh",
            photo: "/bismanpreet-singh.webp",
            mobile: "+91 8302647966",
            email: "Bisman@aicjklu.in",
            linkedin: "https://www.linkedin.com/in/bismanpreetsingh/",
        },
    ];

    return (
        <div>
            <Header />
            <div className="mx-[1rem] md:mx-[5rem] lg:mx-[10rem] mt-4 md:mt-16">
                <section className="mb-16">
                    <h3 className="text-xl md:text-3xl font-bold mb-6 text-[#f58b40]">Board of Directors</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {boardMembers.map((member) => (
                            <div key={member.name} className="text-center">
                                <div className="mb-4 relative h-40 w-40 md:h-60 md:w-60 overflow-hidden rounded-full shadow-lg mx-auto">
                                    <Image
                                        src={member.photo}
                                        alt={member.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-full"
                                    />
                                </div>
                                <p className="font-bold text-base md:text-lg mb-2">{member.name}</p>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex justify-center text-blue-500 hover:underline">
                                    <img src="/linkedin.png" alt="LinkedIn" className="h-6 w-6 mr-2" />
                                    LinkedIn
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-16">
                    <h3 className="text-xl md:text-3xl font-bold mb-6 text-[#f58b40]">Team Members</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="text-center">
                                <div className="mb-4 relative h-40 w-40 md:h-60 md:w-60 overflow-hidden rounded-full shadow-lg mx-auto">
                                    <Image
                                        src={member.photo}
                                        alt={member.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-full"
                                    />
                                </div>
                                <p className="font-bold text-base md:text-lg mb-2">{member.name}</p>
                                <p className="mb-2 text-base text-[#f58b40]">{member.role}</p>
                                <p className="mb-2">{member.mobile}</p>
                                <a href={`mailto:${member.email}`}><p className="mb-2">{member.email}</p></a>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex justify-center text-blue-500 hover:underline">
                                    <img src="/linkedin.png" alt="LinkedIn" className="h-6 w-6 mr-2" />
                                    LinkedIn
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Team;
