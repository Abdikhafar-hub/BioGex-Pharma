import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { Navbar1 } from './NavBar'

function Hero() {
  return (
    // <div
    // className='flex bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-green-200  via-transparent to-transparent text-white  w-full h-screen'
    // >
    <div
    className="bg-[url('/pillbottlespill.jpg')] bg-no-repeat bg-cover bg-center relative  text-white  px-10 md:px-20 lg:px-40 w-full h-screen pt-4 py-28 md:pb-32"
    >
        <div className="absolute inset-0 bg-black/40  w-full"></div>
    
        {/* <Image
            src="/pillbottlespill.jpg"
            alt="hero"
            width={1000}
            height={500}
            className=" w-full h-full"
        /> */}
        {/* // inset dark overlay div */}
        {/* <Navbar1 /> */}

        <div className='flex flex-col items-center justify-center h-full z-20 pt-10 gap-6'>
            {/* badge that says welcome to biogex */}
            <div className='flex  items-center justify-around w-fit z-20 bg-emerald-600/10 border border-emerald-300/50 rounded-lg h-fit p-1 px-2'>
            
              <p className='text-sm font-mono bg-gradient-to-r from-white to-white bg-clip-text text-transparent'>Welcome to BioGex Pharma</p>

            </div>
            <div className="flex flex-col gap-5 w-full">
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-center z-20'>
              Empowering Healthcare for a Better Tomorrow
              </h1>
              <p className='mt-4 text-md md:text-lg lg:text-xl font-normal text-center z-20'>
              We are a trusted provider of high-quality affordable pharmaceutical products.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-around gap-4">
              <Button
              title='Get a quote now'
              variant='primary'
              
               />
               <Button
              title='Explore Our Products'
              variant='link'
              
               />
            </div>
            </div>

    </div>
  )
}

export default Hero