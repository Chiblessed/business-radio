import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/../../public/assets/ABR Logo 1.svg';

function Navbar() {
  return (
    <>
    <nav className='flex items-center justify-between mx-10 py-5'>
        <Link href="">
        <Image src={Logo} width={100} height={100} alt='' />
        </Link>
        <div className='flex items-center justify-between gap-6'>
        <ul className='flex items-center justify-center gap-6 text-[#282828]'>
            <li className='font-extrabold text-[15px]'>
                <Link href='/'>Home</Link>
            </li>
            <li className='font-extrabold text-[15px]'>
                <Link href='/'>Company</Link>
            </li>
            <li className='font-extrabold text-[15px]'>
                <Link href='/'>Resources</Link>
            </li>
            <li className='font-extrabold text-[15px]'>
                <Link href='/'>Contact us</Link>
            </li>
            <li className='font-extrabold text-[15px]'>
                <Link href='/'>Advertise</Link>
            </li>
        </ul>
        <div className='bg-gray-300 text-white rounded-full px-4 w-44 py-3 font-extrabold text-[15px]'>
                Search
            </div>
        </div>
    </nav>
    <div className="bg-[#1B1B1B] w-full flex items-center justify-between">
<div className='relative bg-[url("/assets/Mask group.png")] bg-cover bg-center flex items-center justify-between w-[40rem] py-5 px-4  text-[15px]'>
<div className='absolute inset-0 bg-black bg-opacity-10' />
<div className=''>
<div className='flex items-center justify-center gap-3'>
<div className='bg-red-500 rounded-full w-10 h-10'></div>
<div className="flex flex-col items-start">
    <h2 className='font-extrabold text-white '>
        Listen to ABR Live Radio
    </h2>
    <p className="font-semibold text-center text-green-400">ON AIR</p>
</div>
    </div>
    <p className='font-semibold text-white'>View schedules</p>
</div>
    
</div>
<div className="text-white flex items-center justify-center gap-5 pr-20">
    <p className='text-white font-extrabold text-[15px]'>Latest News</p>
    <p className='text-white font-extrabold text-[15px]'>New Epsiodes</p>
    <p className='text-white font-extrabold text-[15px]'>Our Services</p>
    <p className='text-white font-extrabold text-[15px]'>All Products</p>

    </div>
    </div>
    </>
  )
}

export default Navbar