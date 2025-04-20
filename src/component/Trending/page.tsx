import React from 'react';
import Banner1 from '@/../../public/assets/Rectangle 40(2).png';
import Banner2 from '@/../../public/assets/Rectangle 40(3).png';
import Banner3 from '@/../../public/assets/Rectangle 44(1).png';
import Banner4 from '@/../../public/assets/Rectangle 45.png';
import Banner5 from '@/../../public/assets/Rectangle 185(12).png';
import Link from 'next/link';
import Image from 'next/image';

function Trending() {
  return (
    <>
      <main className=' px-14 flex flex-col relative  max-sm:px-4'>
        <h2 className='uppercase text-[#282828] font-bold text-2xl text-left pt-3'>Trending this week</h2>
        <p className='text-[#5A5A5A] text-base  font-semibold flex items-center justify-start gap-1 py-2'>
        <svg width="4" height="13" viewBox="0 0 4 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 0V13" stroke="#CC0001" strokeWidth="3"/>
</svg>
            Featured Epsiodes
        </p>
        <div className='flex items-start justify-start gap-6 py-4  overflow-hidden max-sm:flex-col max-md:grid max-md:grid-cols-2'>
 <div className='relative cursor-pointer'>
       
            <Image src={Banner1} width={650} height={300} alt='' />
<div className='bg-[#00000080] bg-opacity-60 w-full flex flex-col items-start justify-start gap-2 shadow-dark-900 px-4  absolute bottom-0' >
<p className='text-[13px] font-bold text-white'>8 Epsiodes</p>
        <h2
        className='font-extrabold text-xl text-white'
        >Hope for Widow</h2>
</div>

            </div>

            <div className='relative'>
            <Image src={Banner2} width={650} height={300} alt='' />
<div className=' bg-[#00000080] bg-opacity-90 box w-full flex flex-col items-start justify-start gap-2 px-4 absolute bottom-0' >
<p className='text-[13px] font-bold text-white'>22 Epsiodes</p>
        <h2
        className='font-extrabold text-xl text-white'
        >Policy Sphere by Agora Policy</h2>
</div>
            </div>

            <div className='relative'>
            <Image src={Banner3} width={650} height={300} alt='' />
<div className='bg-[#00000080] bg-opacity-50 w-full flex flex-col items-start justify-start gap-2 px-4  absolute bottom-0' >
<p className='text-[13px] font-bold text-white'>18 Epsiodes</p>
        <h2
        className='font-extrabold text-xl text-white'
        >The Harmonised Life</h2>
</div>
            </div>

            <div className='relative'>
            <Image src={Banner4} width={650} height={300} alt='' />
<div className='bg-[#00000080] bg-opacity-50  w-full flex flex-col items-start justify-start gap-2 px-4  absolute bottom-0' >
<p className='text-[13px] font-bold text-white'>12 Epsiodes</p>
        <h2
        className='font-extrabold text-xl text-white'
        >Lifestyle Central</h2>
</div>
            </div>

            <div className='relative'>
            <Image src={Banner4} width={650} height={500} alt='' />
<div className='bg-[#00000080] bg-opacity-50 w-full flex flex-col items-start justify-start gap-2 px-4 absolute bottom-0' >
<p className='text-[13px] font-bold text-white'>35 Epsiodes</p>
        <h2
        className='font-extrabold text-xl text-white'
        >Wellness in 60 Sec</h2>
</div>
            </div>



           
        </div>
 {/* prev and next btn**/}
 <div className='max-sm:hidden bg-[#F9F9F9] px-3 flex items-center justify-center max-md:hidden gap-5 py-3 rounded-xl absolute -right-0 bottom-1/2'>
                {/*prev btn **/}
                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 1L1 9L14 17V1Z" fill="#E0E0E0" stroke="#E0E0E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                {/* next btn **/}
                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L14 9L1 17V1Z" fill="#5A5A5A" stroke="#5A5A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

            </div>
        </main>
    </>
  )
}

export default Trending
