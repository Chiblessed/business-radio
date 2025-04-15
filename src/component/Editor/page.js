import Image from 'next/image'
import React from 'react';
import Banner1 from '@/../../public/assets/editor1.png';
import Banner2 from '@/../../public/assets/Rectangle 40.png';
import Banner3 from '@/../../public/assets/Rectangle 40(1).png';


function Editor() {
  return (
    <>
    <main className='bg-gray-100 flex flex-col px-5'>
        <h2 className='uppercase text-[#282828] font-extrabold text-2xl text-left'>
            Editor's picks
        </h2>
        <p className='text-[#5A5A5A] text-base  font-semibold flex items-start justify-start'>
            <div className='w-2 h-8 bg-[#CC0001]' />
            Featured Epsiodes
        </p>
        <div className='flex items-center justify-center'>
            <Image src={Banner1} width={600} height={600} alt='' />
            <div className='flex flex-col'>
                <div className='flex items-center justify-center'>
                    <div className='flex flex-col'>
                    <Image src={Banner2} width={400} height={400} alt='' />
<div className='flex items-center justify-center bg-white'>
    <div  className='bg-red-500 w-10 h-10 rounded-full'/>
    <div className='flex flex-col'>
    <h2 className='text-lg text-[#282828] font-semibold'>The Future of Work: Embracing Remote and Hybrid Workforces </h2>
<p className='text-[#282828] font-medium'>Sept 7, 2023 <span>35 mins</span></p>
    </div>

</div>
                    </div>

                    <div className=' flex flex-col'>
                    <Image src={Banner3} width={400} height={400} alt='' />
<div className='flex items-center justify-center bg-white'>
    <div  className='bg-red-500 w-10 h-10 rounded-full'/>
    <div className='flex flex-col'>
    <h2>Compatibility inRelationship </h2>
<p className='flex items-center justify-center'>Sept 5, 2023 <span>55 mins</span></p>
    </div>

</div>
                    </div>

                </div>

            </div>

        </div>
        
    </main>
    </>
  )
}

export default Editor