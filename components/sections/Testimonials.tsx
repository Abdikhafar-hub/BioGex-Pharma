"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./infintecards";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <div className="h-[28rem] rounded-md flex flex-col antialiased bg-gradient-to-t from-green-200 via-green-100 to-white bg-no-repeat bg-cover items-center justify-center relative overflow-hidden">
      <SectionHeading tagline="a trusted partner" title="Testimonials" description="Hear from our satisfied customers" />
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    </div>
  );
}

// Updated testimonials content relevant to Biogex
const testimonials = [
  {
    quote:
      "Biogex Pharmaceuticals provides top-notch service. Their products are always delivered on time and are of the highest quality.",
    name: "Dr. John Smith",
    title: "Pharmacist",
  },
  {
    quote:
      "We have been working with Biogex for several years. Their commitment to quality and customer service is unmatched.",
    name: "Jane Doe",
    title: "Healthcare Provider",
  },
  {
    quote: 
      "Biogex's distribution network is incredibly efficient. We can rely on them for timely deliveries, every time!",
    name: "Michael Johnson",
    title: "Hospital Administrator",
  },
  {
    quote:
      "Their products meet all our quality standards, and their customer support is exceptional. Highly recommended!",
    name: "Emily Wilson",
    title: "Clinic Manager",
  },
  {
    quote:
      "Biogex is a trusted partner for pharmaceutical import. Their products are of excellent quality and competitively priced.",
    name: "Sarah Brown",
    title: "Procurement Officer",
  },
];