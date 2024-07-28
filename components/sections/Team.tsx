import React from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const teamMembers = [
  {
    name: "Dr. Aden Siyat",
    profession: "CEO",
    imageSrc: "/aden.jpg",
  },
  {
    name: "Dr. Ahmed Feisal",
    profession: "COO",
    imageSrc: "https://i.ibb.co/30tGtjP/image-01-1.jpg",
  },
  {
      name: "Dr. AbdulQafar",
      profession: "Head of Research",
      imageSrc: "https://i.ibb.co/yVVT0Dp/image-02-2.jpg",
    },
    {
      name: "Ms. christine ",
      profession: "Customer Service",
      imageSrc: "https://i.ibb.co/8P6cvVy/image-04.jpg",
    },
];

const Team = () => {
  return (
    <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
       <SectionHeading tagline="Our Team" title="Our Awesome Team" description="We are a team of dedicated professionals who are passionate about delivering exceptional results." />

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamMembers.map((teamMember, index) => (
            <TeamCard
              key={index}
              name={teamMember.name}
              profession={teamMember.profession}
              imageSrc={teamMember.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

const TeamCard = ({ imageSrc, name, profession }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 xl:w-1/4">
        <div className="mx-auto mb-10 w-full max-w-[370px] ">
          <div className="relative overflow-hidden rounded-lg">
            <Image src={imageSrc} alt={name} width={370} height={370} className="w-[500px] h-[500px]" />
            <div className="absolute bottom-5 left-0 w-full text-center">
              <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5">
                <h3 className="text-base font-semibold text-dark ">{name}</h3>
                <p className="text-xs text-body-color ">{profession}</p>
                <div>
                  <span className="absolute bottom-0 left-0">
                    <svg
                      width={61}
                      height={30}
                      viewBox="0 0 61 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={16} cy={45} r={45} fill="#13C296" fillOpacity="0.11" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
