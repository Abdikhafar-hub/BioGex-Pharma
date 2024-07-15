import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'
import { Home } from '@/components/sections/Home'

import { HomePage } from '@/components/pages/home/HomePage'
import { studioUrl } from '@/sanity/lib/api'
import { loadHomePage } from '@/sanity/loader/loadQuery'
import Hero from '@/components/sections/Hero'
import { InfiniteLogos, Logo3 } from '@/components/sections/LogoSlider'
import { WhoWeAre } from '@/components/sections/WhoWeAre'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import ContactUs from '@/components/sections/contactus'
import { InfiniteMovingCards } from '@/components/sections/infintecards'
import { InfiniteMovingCardsDemo } from '@/components/sections/test2'
const HomePagePreview = dynamic(
  () => import('@/components/pages/home/HomePagePreview'),
)

export default async function IndexRoute() {
  const initial = await loadHomePage()

  if (draftMode().isEnabled) {
    return <HomePagePreview initial={initial} />
  }

  if (!initial.data) {
    return (
      <div className="text-center">
        You don&rsquo;t have a homepage yet,{' '}
        <Link href={`${studioUrl}/structure/home`} className="underline">
          create one now
        </Link>
        !
      </div>
    )
  }

  return (
    <>

      <Hero />
      <InfiniteLogos items={[
        { logosrc: "/gsk.png" },
        { logosrc: "/sanofi.png" },
        { logosrc: "/Pfizer.png" },
        { logosrc: "/astrz.png" },
        { logosrc: "/bayerlogo.png" },
        { logosrc: "/gsk.png" },
        { logosrc: "/sanofi.png" },
        { logosrc: "/Pfizer.png" },
        { logosrc: "/astrz.png" },
        { logosrc: "/bayerlogo.png" },
       
      
        ]} />
      <WhoWeAre />
      <Services />
      <Testimonials />
      <ContactUs />
    </>
  )
}
