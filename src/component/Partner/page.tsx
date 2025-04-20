import React from 'react';
import Image from 'next/image';
import Partner1 from '@/../../public/assets/image 5.svg';
import Partner2 from '@/../../public/assets/image 17.svg';
import Partner3 from '@/../../public/assets/image 16.png';
import Partner4 from '@/../../public/assets/image 12.svg';

import Partner5 from '@/../../public/assets/image 9.svg';
import Partner6 from '@/../../public/assets/image 10.svg';
import Partner7 from '@/../../public/assets/image 14.svg';
import Partner8 from '@/../../public/assets/image 9.svg';
import Partner9 from '@/../../public/assets/image 15.svg';


import Partner10 from '@/../../public/assets/image 21.svg';
import Partner11 from '@/../../public/assets/image 7(1).svg';
import Partner12 from '@/../../public/assets/image 13.svg';
import Partner13 from '@/../../public/assets/image 19.svg';
import Partner14 from '@/../../public/assets/image 8.svg';
import Partner15 from '@/../../public/assets/image 20.svg';



function Partner() {
  return (
    <>
     <main className='mt-20 '>
        <h2 className='text-[#282828] font-extrabold text-center text-2xl mb-10'>
        OUR GLOBAL PARTNERS
            </h2>
            <div className='flex items-center justify-center gap-4 max-sm:grid max-sm:grid-cols-2 '>
                <Image src={Partner1} width={100} height={100} alt='' className='inset-0 saturate-50'  />
                <Image src={Partner2} width={150} height={150} alt='' />
                <Image src={Partner3} width={100} height={100} alt='' />
                <Image src={Partner4} width={150} height={150} alt='' />
            </div>

            <div className='flex items-center justify-center gap-4 py-3 max-sm:grid max-sm:grid-cols-2 '>
                <Image src={Partner5} width={150} height={150} alt='' />
                <Image src={Partner6} width={150} height={150} alt='' />
                <Image src={Partner7} width={150} height={150} alt='' />
                <Image src={Partner8} width={150} height={150} alt='' />
                <Image src={Partner9} width={150} height={150} alt='' />

            </div>

            <div className='flex items-center justify-center gap-4 py-3 max-sm:grid max-sm:grid-cols-2 '>
                <Image src={Partner10} width={100} height={100} alt='' />
                <Image src={Partner11} width={150} height={150} alt='' />
                <Image src={Partner12} width={100} height={100} alt='' />
                <Image src={Partner13} width={150} height={150} alt='' />
                <Image src={Partner14} width={130} height={130} alt='' />
                <Image src={Partner15} width={130} height={130} alt='' />

            </div>
        </main> 
    </>
  )
}

export default Partner
