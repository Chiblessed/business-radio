import React from 'react';
import Image from 'next/image';
import Logo from '@/../../public/assets/image 24.png';
import Instagram from '@/../../public/assets/image 25.svg';
import Facebook from '@/../../public/assets/image 26.svg';
import Twitter from '@/../../public/assets/image 27.svg';
import Logo2 from '@/../../public/assets/image 28.svg';
import Linkedin from '@/../../public/assets/image 29.svg';


function Footer() {
  return (
    <>
      <footer className='bg-[#282828] w-full text-[#C9C9C9] mt-10  flex flex-col items-start max-sm:items-center justify-start py-5 pl-10'>
<Image src={Logo} width={100} height={100} alt='company logo'/>
<div className="flex items-center justify-center gap-8 py-14 max-sm:flex-col max-md:flex-col max-md:items-center">
    <div className='flex items-center justify-center gap-3'>
    <p className='font-bold text-base uppercase'>Home </p>
    <svg width="2" height="35" viewBox="0 0 2 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.5V34.5" stroke="#C9C9C9"/>
</svg>
 
 <p className='font-bold text-base uppercase'>About </p>
 <svg width="2" height="35" viewBox="0 0 2 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.5V34.5" stroke="#C9C9C9"/>
</svg>

    </div>
  <div className='flex items-center justify-center gap-3'>
  <p className='font-bold text-base uppercase'>Contact us </p>
    <svg width="2" height="35" viewBox="0 0 2 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.5V34.5" stroke="#C9C9C9"/>
</svg>

    <p className='font-bold text-base uppercase'>All podcast </p>
    <svg width="2" height="35" viewBox="0 0 2 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.5V34.5" stroke="#C9C9C9"/>
</svg>

  </div>
 <div className='flex items-center justify-center gap-3'>
 <p  className='font-bold text-base uppercase'>Advertise </p>
    <svg width="2" height="35" viewBox="0 0 2 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.5V34.5" stroke="#C9C9C9"/>
</svg>

    <p className='font-bold text-base uppercase'> Resources </p>
    <svg width="2" height="35" viewBox="0 0 2 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.5V34.5" stroke="#C9C9C9"/>
</svg>
 
 </div>
  
    <div className='flex items-center justify-center font-bold text-base gap-3'>CONNECT WITH ABR
    <Image src={Instagram} width={20} height={20} alt='instagram'/>
    <Image src={Facebook} width={20} height={20} alt='facebook'/>
    <Image src={Twitter} width={20} height={20} alt='twitter'/>
    <Image src={Logo2} width={20} height={20} alt='logo'/>
    <Image src={Linkedin} width={20} height={20} alt='linkedin'/>

         </div>
    
    
</div>
<div className='flex items-center justify-around gap-32 max-md:gap-10 max-sm:justify-center max-sm:gap-3 text-sm font-medium pb-3'>
    <p>.© Copyright 2021. All Rights Reserved.</p>
    <p>Terms & conditions</p>
    <p>Privacy policy</p>

</div>

      </footer>
    </>
  )
}

export default Footer
