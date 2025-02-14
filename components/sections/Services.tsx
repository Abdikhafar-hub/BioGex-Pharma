'use client'
import React from "react";
import { IoMdPricetags } from "react-icons/io";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {IoPricetagsOutline, IoAirplaneOutline} from "react-icons/io5";
import {LiaPlaneArrivalSolid , LiaShippingFastSolid, LiaFlaskSolid, LiaFileInvoiceDollarSolid} from "react-icons/lia";
type Service = {
  icon: React.ComponentType;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: LiaShippingFastSolid,
    title: "Distribution",
    description: "Efficient distribution network ensuring timely delivery of pharmaceutical products."
  },
  {
    icon: LiaPlaneArrivalSolid ,
    title: "Import",
    description: "Importing high-quality pharmaceutical products from trusted global suppliers."
  },
  {
    icon: LiaFlaskSolid,
    title: "Manufacturing",
    description: "Our state-of-the-art facilities for the local manufacturing of pharmaceutical products."
  },
  {
    icon: LiaFileInvoiceDollarSolid,
    title: "Competitive Pricing",
    description: "Offering competitive pricing without compromising on quality."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 bg-gradient-to-t from-green-100 via-green-50 to-white bg-no-repeat bg-cover">
      <div className="container mx-auto px-6 text-center">
       <SectionHeading tagline="quality services" title="Our Services" description="We offer a wide range of services to meet your needs." />
        <div className="flex flex-wrap justify-center gap-6 mt-4 ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="max-w-96 min-h-60 w-fit bg-white rounded-lg shadow-small p-6  flex flex-col items-center justify-center gap-4 border border-slate-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex justify-center text-4xl text-emerald-500  bg-black p-2 rounded-lg w-fit mb-4">
                <service.icon />
              </div>
              <h3 className="text-slate-500 font-bold mb-2  text-lg">{service.title}</h3>
              <p className="text-slate-600 text-md">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;