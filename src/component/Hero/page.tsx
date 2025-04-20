import React from 'react';
import Image from 'next/image';
import Banner1 from '@/../../public/assets/FBN-ADVERT-2 1.png';
import Banner2 from '@/../../public/assets/Rectangle 55.png';
import Banner3 from '@/../../public/assets/Rectangle 56@2x.png';
import Banner4 from '@/../../public/assets/Rectangle 57.png';
import Editor from '../Editor/page';
import Trending from '../Trending/page';
import Added from '../Added-episode/page';
import News from '../News/page';
import Education from '../Education/page';
import Tech from '../Tech/page';
import Other from '../Other/page';
import Lifestyle from '../Lifestyle/page';
import Subscribe from '../Subscribe/page';
import Partner from '../Partner/page';



function Hero() {
  return (
    <>
    <div className='flex items-center justify-center bg-white py-10 max-sm:py-5'>
    <Image src={Banner1} width={1000} height={1000} alt='first bank banner' className=' max-sm:h-[6rem]' />
    </div>
    <Editor />
    <Trending />
    <Added />
    <div className='bg-[#F0E4FF]  px-5 mx-14 py-3 my-20 rounded-sm max-sm:mx-3 max-sm:px-3'>
      <h2 className='uppercase text-2xl max-sm:text-xl text-[#282828] font-extrabold text-left'>Listen by ABR categories</h2>
    </div>
    <News />
    <div className='flex items-center  justify-center mx-14 gap-14 my-10 max-sm:mx-4 max-sm:flex-col max-sm:gap-4'>
    <Image src={Banner2} width={300} height={300} alt='first bank banner' />
    <Image src={Banner3} width={300} height={300} alt='first bank banner' />
    <Image src={Banner4} width={300} height={300} alt='first bank banner' />

    </div>
    <Education />
    <Lifestyle />
    <Tech />
    <Other />
    <Subscribe />
    <Partner />

    </>
  )
}

export default Hero