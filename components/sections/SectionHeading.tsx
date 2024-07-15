import React from 'react'

function SectionHeading({
    tagline, title, description
}: {
    tagline: string;
    title: string;
    description: string;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center  text-center w-full"
    >
        <p className="text-xs md:text-sm text-emerald-500  bg-emerald-600/10 border border-emerald-300/50 px-1 py-0.5 w-fit rounded-lg font-semibold">{tagline}</p>
              <h2 className="mb-3 text-xl font-bold  md:text-2xl lg:text-4xl text-slate-600">{title}</h2>
              <p className="text-sm mb-4 md:text-md text-slate-500 max-w-lg">{description}</p>
    </div>
  )
}

export default SectionHeading