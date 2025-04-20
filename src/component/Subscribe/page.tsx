import React from 'react';
import Image from 'next/image';
import Banner1 from '@/../../public/assets/Ellipse 39.png';
import Banner2 from '@/../../public/assets/Ellipse 40.png';
import Banner3 from '@/../../public/assets/image 22.png';
import Banner4 from '@/../../public/assets/image 23.png';




function Subscribe() {
  return (
    <>
     <main className='mt-20 bg-[#F6E8E8] mx-3 flex max-sm:flex-col max-md:flex-col items-center justify-around gap-10 py-8'>
        <div
         className='flex flex-col items-start justify-start'>
            <h1 className='font-extrabold text-[32px] text-[#282828]'>Never stop listening!</h1>
            <p className='text-2xl text-[#282828] font-medium pb-20'>
                Every episodes is a journey<br /> you don’t wanna miss out on. </p>
            <p className='text-base text-[#282828] font-medium pb-2'>
                Get the latest headlines and unique ABR stories, sent every<br /> weekday.</p>
            <div className='flex items-center justify-start w-full'>
                <input type='email'
                 placeholder='Enter your email'
                 className='bg-[#D9D9D9] w-[70%] max-sm:w-[60%] py-3 px-3 rounded-sm text-sm text-[#5A5A5A] outline-none '
                  />
                <button
                className='bg-[#CC0001] px-4 max-sm:px-1 py-3 mr-1 font-bold text-white text-base rounded-sm'
                >Get me in</button>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_1_612)">
<path d="M9.00043 16.5005C13.1426 16.5005 16.5004 13.1426 16.5004 9.00049C16.5004 4.85835 13.1426 1.50049 9.00043 1.50049C4.85829 1.50049 1.50043 4.85835 1.50043 9.00049C1.50043 13.1426 4.85829 16.5005 9.00043 16.5005Z" stroke="#5A5A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 6V9" stroke="#5A5A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 12H9.00696" stroke="#5A5A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_612">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg>

            </div>
        </div>

        {/* Image Container className='absolute top-0' **/}
        <div className='relative'>
            <Image src={Banner1} width={450} height={300} alt='' />
            <Image src={Banner2} width={200} height={200} alt='' className='absolute bottom-0 -left-20' />
            <Image src={Banner3} width={50} height={50} alt='' className='absolute top-0 right-12' />
            <Image src={Banner4} width={50} height={50} alt='' className='absolute top-[65%] -left-28' />


        </div>

        </main> 
    </>
  )
}

export default Subscribe
