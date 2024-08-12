'use client'
import { Header62 } from '@/components/sections/shortHeader';
import React from 'react';
import { motion } from 'framer-motion';
import { WhoWeAre } from '@/components/sections/WhoWeAre';
import { MissionVision } from '@/components/sections/MissionandVision';
import { CorValues } from '@/components/sections/CoreValues';
import Team from '@/components/sections/Team';
import Testimonials from '@/components/sections/Testimonials';

const AboutUsPage: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Header62
        heading="Our Story"
        description="Discover the story behind Biogex Pharmaceuticals and our commitment to excellence."
        tagline="Biogex Pharmaceuticals is a trusted partner for pharmaceutical import. Their products are of excellent quality and competitively priced."
        bgSrc="/pillsinbowlsgreenbg.jpg"
        // buttons = {[
        //   {
        //     title: "Get A quote",
        //     variant: "primary",
        //   },
        //   {
        //     title: "Contact Us",
        //     variant: "secondary",
        //   },
        // ]}
      />
      <div className="container mx-auto p-8">
        <WhoWeAre />
        {/* <MissionVision /> */}
        <CorValues />
        <Testimonials />
        <Team />
      </div>
    </div>
  );
};

export default AboutUsPage;
