import Image from 'next/image'
import React from 'react';
import Banner1 from '@/../../public/assets/editor1.png';
import Banner2 from '@/../../public/assets/Rectangle 40.png';
import Banner3 from '@/../../public/assets/Rectangle 40(1).png';
import Banner4 from '@/../../public/assets/Rectangle 44.png';



function Editor() {
  return (
    <>
<<<<<<< HEAD
    <main className='bg-gray-100 flex flex-col px-5 py-8 max-sm:px-3 max-lg:bg-green-500 '>
=======
    <main className='bg-gray-100 flex flex-col px-5 py-8 max-sm:px-3 lg:bg-green-500 '>
>>>>>>> 99b5df0e909c38ff651d8a6e7f325e3c290fcb38
        <h2 className='uppercase text-[#282828] font-bold text-2xl text-left'>
            Editor's picks
        </h2>
        <p className='text-[#5A5A5A] text-base  font-semibold flex items-center justify-start gap-1 py-2'>
        <svg width="4" height="13" viewBox="0 0 4 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 0V13" stroke="#CC0001" strokeWidth="3"/>
</svg>
            Featured Epsiodes
        </p>
<<<<<<< HEAD
        <div className='flex items-start justify-start gap-10 max-sm:gap-4 max-sm:flex-col max-md:flex-col lg:flex max-md:bg-red-500 md:flex'>
=======
        <div className='flex items-start justify-start gap-10 max-sm:gap-4 max-sm:flex-col sm:flex-col lg:flex md:bg-red-500 md:flex'>
>>>>>>> 99b5df0e909c38ff651d8a6e7f325e3c290fcb38
            <div className='relative'>
            <Image src={Banner1} width={680} height={500} alt='' />
<div className='bg-[#00000080] bg-opacity-50 w-full flex items-start justify-start gap-6 px-4 py-2 absolute bottom-0' >
<div  className='bg-[#CC0001] px-3 py-3 rounded-full relative ml-2'>
    <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5 11.866C19.1667 11.4811 19.1667 10.5189 18.5 10.134L2 0.607693C1.33333 0.222794 0.5 0.703918 0.5 1.47372V20.5263C0.5 21.2961 1.33333 21.7772 2 21.3923L18.5 11.866Z" fill="white"/>
</svg>
        </div>
        <h2
        className='font-extrabold text-2xl text-white'
        >Bridging the Financing Gap in Nigeria’s<br /> off-grid sector</h2>
</div>
            </div>
            <div className='flex flex-col items-end justify-center'>
                <div className='flex items-center justify-center max-sm:flex-col gap-8'>
                    <div className='flex flex-col'>
                    <Image src={Banner2} width={300} height={300} alt='' />
<div className='flex items-start justify-start bg-white gap-2 py-1 shadow-xl'>
    <div  className='bg-[#CC0001] px-3 py-3 rounded-full relative ml-2'>
    <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5 11.866C19.1667 11.4811 19.1667 10.5189 18.5 10.134L2 0.607693C1.33333 0.222794 0.5 0.703918 0.5 1.47372V20.5263C0.5 21.2961 1.33333 21.7772 2 21.3923L18.5 11.866Z" fill="white"/>
</svg>
        </div>
    <div className='flex flex-col text-[#282828] '>
    <h2 className='text-lg font-semibold'>The Future of Work:<br />
     Embracing Remote and<br /> Hybrid Workforces </h2>
     <div className='flex items-start justify-start gap-3 pt-4 pb-2 text-[13px] font-normal'>
    <p> Sept 7, 2023</p>
<svg width="2" height="12" viewBox="0 0 2 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0V12" stroke="#979797"/>
</svg>
 
   <p> 53 mins</p> 
    </div>    </div>

</div>
                    </div>

                    <div className=' flex flex-col'>
                    <Image src={Banner3} width={300} height={300} alt='' />
<div className='flex items-start justify-start bg-white gap-2 py-1 shadow-xl'>
<div  className='bg-[#CC0001] px-3 py-3 rounded-full relative ml-2'>
    <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5 11.866C19.1667 11.4811 19.1667 10.5189 18.5 10.134L2 0.607693C1.33333 0.222794 0.5 0.703918 0.5 1.47372V20.5263C0.5 21.2961 1.33333 21.7772 2 21.3923L18.5 11.866Z" fill="white"/>
</svg>
        </div>
    <div className='flex flex-col'>
    <h2 className='text-lg text-[#282828] font-semibold'>Compatibility in<br /> Relationship </h2>
<div className='flex items-start justify-center gap-3 pt-10 pb-3 text-[13px] font-normal'>
    <p> Sept 5, 2023</p>
<svg width="2" height="12" viewBox="0 0 2 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0V12" stroke="#979797"/>
</svg>
 
   <p> 55 mins</p> 
    </div>
    </div>

</div>
                    </div>

                </div>

                <p className='uppercase text-left text-[11px] font-bold mt-5 pb-1'>Advertisement</p>
             
                <Image src={Banner4} width={650} height={300} alt='' className='max-sm:w-[26rem]' />

            </div>

        </div>
        
    </main>
    </>
  )
}

export default Editor