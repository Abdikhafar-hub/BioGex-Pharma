"use client";
import { useRouter } from 'next/navigation'
import { FaWhatsapp } from 'react-icons/fa6'



const Whatsapp = () => {

  const router = useRouter();

  
  const phone_no = '254720945563';

 const  handleClick = () => { 
  // const isAndroid = navigator.userAgent.toLowerCase().indexOf("android") !== -1;
  const isMobile = navigator.userAgent.toLowerCase().indexOf("mobile") !== -1;
  // const isIphone = navigator.userAgent.toLowerCase().indexOf("iphone") !== -1;
  if (!isMobile) {
    window.open(`https://api.whatsapp.com/send/?phone=${phone_no}&text&type=phone_number&app_absent=0`)
     window.open(`https://web.whatsapp.com/send?phone=${phone_no}`) } 
 else {
     window.open(`https://api.whatsapp.com/send/?phone=${phone_no}&text&type=phone_number&app_absent=0`)
     }
     } 

  return (
    <>
      <div className='bg-green-600 w-min p-2 rounded-full fixed 
          bottom-10 right-4 cursor-pointer md:right-8' onClick={handleClick}>
        <FaWhatsapp color='white' className='w-7 h-7 md:w-10 md:h-10' />
      </div>
    </>
  )
}

export default Whatsapp