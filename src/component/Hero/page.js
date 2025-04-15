import React from 'react';
import Image from 'next/image';
import Banner1 from '@/../../public/assets/FBN-ADVERT-2 1.png';
import Editor from '@/../../src/component/Editor/page';

function Hero() {
  return (
    <>
    <div className='flex items-center justify-center bg-white py-10'>
    <Image src={Banner1} width={1000} height={1000} alt='first bank banner' />
    </div>
    <Editor />
    </>
  )
}

export default Hero