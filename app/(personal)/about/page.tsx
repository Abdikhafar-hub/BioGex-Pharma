'use client'
import { Header62 } from '@/components/sections/shortHeader';
import React from 'react';
import { motion } from 'framer-motion';

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
        <section className="mb-12 bg-gray-100 p-6 rounded-lg shadow-lg">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <img src="/about-us.jpg" alt="About Us" className="w-full h-64 object-cover rounded-lg mb-6" />
            <h1 className="text-4xl font-bold mb-4">About Biogex Pharmaceuticals</h1>
            <p className="text-lg text-gray-700">
              Founded in 2024, Biogex Pharmaceuticals has quickly established itself as a leader in the pharmaceutical industry.
              Specializing in the distribution, import, and local manufacturing of high-quality pharmaceutical products,
              we are committed to improving the health and wellbeing of communities across Africa. 
              Our state-of-the-art facilities and dedicated team of professionals ensure that we consistently deliver excellence in every aspect of our operations.
            </p>
          </motion.div>
        </section>
        <section className="mb-12 p-6 rounded-lg shadow-lg bg-green-50">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h2 className="text-3xl font-bold mb-4">Our Mission and Vision</h2>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Mission:</h3>
              <p className="text-lg text-gray-700">To provide quality, affordable pharmaceutical products to improve the wellbeing of communities.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Vision:</h3>
              <p className="text-lg text-gray-700">To be the leading end-to-end pharmaceutical distributor in Africa, building for a better and healthier future.</p>
            </div>
          </motion.div>
        </section>
        <section className="mb-12 p-6 rounded-lg shadow-lg bg-blue-50">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li className="mb-2"><strong>Customer Focus:</strong> We prioritize the needs of our customers and strive to exceed their expectations.</li>
              <li className="mb-2"><strong>Innovation:</strong> We embrace innovation to enhance our products and services continuously.</li>
              <li className="mb-2"><strong>Teamwork:</strong> We believe in the power of teamwork and collaboration to achieve our goals.</li>
              <li className="mb-2"><strong>Excellence:</strong> We are committed to excellence in everything we do.</li>
            </ul>
          </motion.div>
        </section>
        <section className="p-6 rounded-lg shadow-lg bg-purple-50">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="team-member bg-white p-4 rounded-lg shadow-md">
                <img src="/john-doe.jpg" alt="John Doe" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-semibold mb-2">John Doe</h3>
                <p className="text-lg text-gray-700">CEO</p>
                <p className="text-lg text-gray-700">John has over 20 years of experience in the pharmaceutical industry, leading Biogex with a vision for innovation and excellence.</p>
              </div>
              <div className="team-member bg-white p-4 rounded-lg shadow-md">
                <img src="/jane-smith.jpg" alt="Jane Smith" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Jane Smith</h3>
                <p className="text-lg text-gray-700">Head of Research</p>
                <p className="text-lg text-gray-700">Jane leads our research and development team, focusing on bringing new and effective pharmaceutical products to market.</p>
              </div>
              {/* Add more team members as needed */}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
