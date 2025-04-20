'use client'
import React, {useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import PodcatImage from '@/../../public/Rectangle 40.png';
import Banner2 from '@/../../public/assets/Rectangle 40.png';
import Banner3 from '@/../../public/assets/Rectangle 40(1).png';
import Subscribe from '../../../../component/Subscribe/page';
import { useParams  } from 'next/navigation';
import AudioPlayer from '../../../../component/Recording/page';
import Link from 'next/link';

interface Episode {
  id: string;
  title: string;
  description: string;
  created_at: string;
  duration: string;
  content_url: string;
  [key: string]: any;
}
function Details() {
  const params = useParams();
  const id = params?.id as string;
     
    const [episode, setEpisode] = useState<Episode | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchEpisode = async () => {
      try {
        const res = await fetch(`https://api.wokpa.app/api/listeners/episodes/${id}`);
        const data = await res.json();
        
        setEpisode(data?.data);
        

      } catch (error) {
        console.error('Failed to fetch episode:', error);
      } finally {
        setLoading(false);
      }
    };
    useEffect(() => {
      if (id) {
        fetchEpisode();
      }

    }, [id]);
  
  
    if (loading || !episode) return <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#5A5A5A]"></div>
  </div>;
 //format date
 const formattedDate = new Date(episode.created_at).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});
const durationInMinutes = Math.round(parseFloat(episode.duration) / 60);
const shortenedTitle = episode.description.length > 250 
  ? episode.description.slice(0, 250) + '...'
  : episode.description;
const cleanTitle = shortenedTitle.replace(/<br\s*\/?>/gi, '');

const recording = {
  url:episode.content_url

};


  return (
    <>
      <main className='h-full'>
      <div
  className='relative w-full py-5 bg-cover bg-no-repeat bg-center text-[15px] flex items-center justify-between'
  style={{ backgroundImage: `url(${episode.picture_url})` }}
>

<div
    className='absolute inset-0 z-0 '
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)',backdropFilter: 'blur(10px)' }} 
  />

  {/* Content */}
  <div className='relative z-10 w-full px-10 max-sm:px-3 max-md:px-3 max-lg:px-3'>
    <Link href='/Podcast'>
    <h2 className='text-left font-semibold text-[13px] text-white flex items-center gap-3 pb-6'>
    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L1 5L6 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      Back to podcast</h2>
      </Link>

          <div className=' flex items-start justify-center  gap-4 mr-44 max-sm:mr-0 max-sm:flex-col max-md:mr-0 max-md:flex'>
            <Image src={episode.picture_url} width={150} height={150} alt='' className='max-sm:w-[20rem] max-md:w-[20rem]'/>
      <div className="flex flex-col items-start">
      <div className='pt-3 flex items-center justify-center gap-3 text-[#828282] text-[13px] font-bold'>
                        <p className='text-shadow-sm text-shadow-black'>{formattedDate}</p>
                        <div className='w-2 h-2 bg-[#828282] rounded-full' />
                        <p className='text-shadow-sm text-shadow-black' >{durationInMinutes} mins</p>
                    </div>
        <h2 className='font-bold text-xl text-white py-2'>
        {episode.title}
        </h2>
        <p className="font-medium text-[15px] text-white pb-20">
       {cleanTitle}
        </p>
        {/* audio**/}
        <AudioPlayer recording={{ url: episode.content_url }} />
 
        {/*audio **/}
        
      </div>
      </div>
      


    </div>
    


</div>

<h2 className='uppercase border-b-2 border-b-gray-200 mt-10 text-left mx-10 text-[#5A5A5A] font-semibold text-sm py-3'>
    Next Episode in Queue
</h2>
<div className='flex items-start justify-start gap-4 mt-5 mx-10 max-sm:flex-col  max-sm:px-3   max-md:px-3'>
                    <div className='flex flex-col '>
                    <Image src={Banner2} width={300} height={300} alt='' />
<div className='flex items-start justify-start bg-white gap-2 py-2 shadow-xl'>
    <div  className='bg-[#CC0001] px-4 py-3 rounded-full relative ml-2'>
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
<div className='flex items-start justify-start bg-white gap-2 py-2 shadow-xl'>
<div  className='bg-[#CC0001] px-4 py-3 rounded-full relative ml-2'>
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
                <Subscribe />
      </main>
    </>
  )
}

export default Details

