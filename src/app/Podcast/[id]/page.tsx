'use client';
import React,{useState, useEffect, Suspense} from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useParams  } from 'next/navigation';
import Banner2 from '@/../../public/assets/Rectangle 55.png';
import Banner3 from '@/../../public/assets/Rectangle 56@2x.png';
import Woka from '@/../../public/assets/woka.png';
import Spotify from '@/../../public/assets/Group 1147.png';
import Apple from '@/../../public/assets/Group 1148.png';
import Google from '@/../../public/assets/Group 1149.png';

interface PodcastType {
  id: number | string;
  title: string;
  description: string;
  picture_url: string;
  created_at: string;
  [key: string]: any;
}

interface EpisodeType {
  id: number | string;
  title: string;
  description: string;
  duration: string | number;
  [key: string]: any;
}


function PodcastDetails() {
    const params = useParams();
    const id = params?.id
    const router = useRouter()
    const searchParams = useSearchParams();
  const [podcast, setPodcast] = useState<PodcastType | null>(null);
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentEpisode, setCurrentEpisode] = useState<EpisodeType | null>(null);
  const episodeId = searchParams.get('episode');
  const episodesPerPage = 3;
  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        const res = await fetch(`https://api.wokpa.app/api/listeners/top-podcasts?page=1&per_page=100`);
        const data = await res.json();
        const allData = data.data.data;

        const single = allData.find((item: PodcastType) => item.id == id);
        setPodcast(single);
      } catch (error) {
        console.error('Failed to fetch podcast:', error);
      } finally {
        setLoading(false);
      }
    };
    const fetchEpisodes = async () => {
      try {
        const res = await fetch(`https://api.wokpa.app/api/listeners/podcasts/${id}/episodes?page=1&per_page=100`);
        const data = await res.json();
        const allData: EpisodeType[] = data.data.data || [];
        setEpisodes(allData);
        if (episodeId) {
          const selected = allData.find((ep) => ep.id == episodeId);
          setCurrentEpisode(selected || null);
        } else {
          setCurrentEpisode(allData[0] || null);
        }
      } catch (error) {
        console.error('Failed to fetch episodes:', error);
      } finally {
        setLoading(false);
      }
    };
    console.log('Episodes updated:', episodes);
    if (id) {
      fetchPodcast();
      fetchEpisodes()
    }
  }, [id, episodeId]);

  if (loading || !podcast) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#5A5A5A]"></div>
      </div>
    );
  }
  
 

  //format date
  const formattedDate = new Date(podcast.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const handleNavigate = (episodeId: string | number) => {
    router.push(`/Podcast/Details/${id}?episode=${episodeId}`);
  };
  const durationInMinutes = currentEpisode ? Math.round(parseFloat(currentEpisode.duration.toString()) / 60) : 0;
 
  //handle pagination
  const totalEpisodes = episodes.length;
    const totalPages = Math.ceil(totalEpisodes / episodesPerPage);

    const indexOfLastEpisode = currentPage * episodesPerPage;
    const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
    const currentEpisodes = episodes.slice(indexOfFirstEpisode, indexOfLastEpisode);

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };
    const shortenedPodcastDesc = podcast.description.length > 250 
    ? podcast.description.slice(0, 250) + '...'
    : podcast.description;
  const cleanDes = shortenedPodcastDesc.replace(/<br\s*\/?>/gi, '');


  // Pagination display window size
const pageWindowSize = 9;
const startPage = Math.floor((currentPage - 1) / pageWindowSize) * pageWindowSize + 1;
const endPage = Math.min(startPage + pageWindowSize - 1, totalPages);

// Create an array of visible page numbers
const visiblePages = [];
for (let i = startPage; i <= endPage; i++) {
  visiblePages.push(i);
}


    return (
    <>
      <main className='h-full'>
        <div 
        className='bg-opacity-50 bg-gradient-to-br from-[#2B3221] via-[#2B3221] to-[#F2F2F200] px-10 max-md:px-3 max-sm:px-3 max-sm:flex-col  flex items-center justify-center gap-5 relative py-6'>
            <Image src={podcast.picture_url} width={400} height={400} alt='' />
            <div className='flex flex-col max-sm:items-center md:items-center lg:items-start'>
                <p className='text-[#BFBFBF] uppercase text-sm font-extrabold pb-12'>Podcast</p>
                <h1 className='text-[28px] font-extrabold text-white'>{podcast.title}</h1>
                <p className='text-base font-medium mb-14 text-white w-[60%] leading-[26px] max-sm:w-full md:w-[65%]'>
                {cleanDes}
                    </p>
                    <p className='text-[#BFBFBF] font-semibold text-sm'>Available on</p>
                    <div className='flex gap-4 mt-3'>
<Image src={Spotify} width={30} height={30} alt='spotify logo' />
<Image src={Apple} width={30} height={30} alt='' />
<Image src={Google} width={30} height={30} alt='' />
<Image src={Woka} width={90} height={30} alt='' />



                    </div>
            </div>
            <div className='absolute right-10 top-8'>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_1471)">
<path d="M7.00028 19.9861C6.99008 22.5504 9.06067 24.6376 11.6251 24.6478C12.8061 24.6525 13.9446 24.2069 14.8087 23.4019L21.7282 26.526C21.6801 26.7848 21.6537 27.047 21.6493 27.3101C21.6411 29.8922 23.7277 31.9919 26.3097 32.0001C28.8918 32.0083 30.9916 29.9218 30.9998 27.3397C31.008 24.7576 28.9214 22.6578 26.3393 22.6496C24.7966 22.6448 23.3509 23.4012 22.4753 24.6713L15.9743 21.7359C16.436 20.6209 16.4378 19.3685 15.9793 18.2522L22.4713 15.3018C23.9332 17.4161 26.8323 17.945 28.9466 16.4831C31.0609 15.0212 31.5897 12.1222 30.1278 10.0079C28.666 7.89353 25.7669 7.36468 23.6526 8.82655C22.3934 9.69717 21.6429 11.1312 21.6453 12.6621C21.6495 12.9256 21.6762 13.1882 21.7252 13.4471L14.8237 16.5832C12.9538 14.8274 10.0147 14.9199 8.25888 16.7897C7.44627 17.6552 6.99588 18.7989 7.00028 19.9861Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1_1471">
<rect width="24" height="24" fill="white" transform="translate(7 8)"/>
</clipPath>
</defs>
</svg>

            </div>
        </div>
        {/*more podcast **/}
        <div className='flex items-start justify-between gap-44 px-10 mt-20 max-sm:flex-col max-md:flex-col lg:flex'>
            <div className='flex flex-col '>
                <h2 className='flex gap-3 pb-3 font-extrabold text-sm text-[#5A5A5A]'>
                    All Epsiodes
                    <span className='font-medium'>
                        ({episodes.length} Available)
                    </span>
                </h2>
                {currentEpisodes.map((episode) => {
            const durationInMinutes = Math.round(parseFloat(episode.duration.toLocaleString()) / 60);
            const shortenedTitle = episode.description.length > 250 
              ? episode.description.slice(0, 250) + '...'
              : episode.description;
            const cleanTitle = shortenedTitle.replace(/<br\s*\/?>/gi, '');

            return (
              <div key={episode.id} onClick={() => handleNavigate(episode.id)}
                className='cursor-pointer max-sm:flex-col max-md:flex-col lg:flex flex items-start justify-start gap-3 py-3 border-t border-t-[#DCDCDC]'>
                <Image src={podcast.picture_url} width={100} height={100} alt='' className='max-md:w-[20rem] max-sm:w-[20rem]'/>
                <div className='flex flex-col items-start'>
                  <div className='pt-3 flex items-center justify-center gap-3 text-[#828282] text-[13px] font-bold'>
                    <p>{formattedDate}</p>
                    <div className='w-2 h-2 bg-[#828282] rounded-full' />
                    <p>{durationInMinutes} mins</p>
                  </div>
                  <h2 className='text-[#282828] font-bold text-xl py-2'>{episode.title}</h2>
                  <p className='text-[15px] font-medium text-[#282828] w-[75%] pb-3 max-sm:w-full max-md:w-full'>
                    {cleanTitle}
                  </p>
                  <div className='flex items-start justify-center gap-3'>
                    <div  className='bg-[#CC0001] px-3 py-3 rounded-full relative ml-2'>
    <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5 11.866C19.1667 11.4811 19.1667 10.5189 18.5 10.134L2 0.607693C1.33333 0.222794 0.5 0.703918 0.5 1.47372V20.5263C0.5 21.2961 1.33333 21.7772 2 21.3923L18.5 11.866Z" fill="white"/>
</svg>
        </div>
                    <div className='px-3 py-3 rounded-full bg-[#E1E1E1]' >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_1391)">
<path d="M16 0H8C5.243 0 3 2.243 3 5V19C3 21.757 5.243 24 8 24H16C18.757 24 21 21.757 21 19V5C21 2.243 18.757 0 16 0ZM19 19C19 20.654 17.654 22 16 22H8C6.346 22 5 20.654 5 19V5C5 3.346 6.346 2 8 2H16C17.654 2 19 3.346 19 5V19ZM17 6C17 6.553 16.553 7 16 7H8C7.447 7 7 6.553 7 6C7 5.447 7.447 5 8 5H16C16.553 5 17 5.447 17 6ZM17 11C17 11.553 16.553 12 16 12H8C7.447 12 7 11.553 7 11C7 10.447 7.447 10 8 10H16C16.553 10 17 10.447 17 11ZM13 16C13 16.553 12.553 17 12 17H8C7.447 17 7 16.553 7 16C7 15.447 7.447 15 8 15H12C12.553 15 13 15.447 13 16Z" fill="#5A5A5A"/>
</g>
<defs>
<clipPath id="clip0_1_1391">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
         </div>
                <div className='px-3 py-3 rounded-full bg-[#E1E1E1]' >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_1_494)">
<path d="M14.25 4.49985H13.3305C14.3903 3.46485 14.5522 2.1036 13.7393 1.01985C13.3305 0.473852 12.7343 0.121352 12.06 0.0253521C11.3835 -0.0728979 10.7137 0.101852 10.1693 0.509852C9.66075 0.890852 9.28575 1.3761 9.009 1.8696C8.73225 1.37535 8.35725 0.890852 7.84875 0.509852C7.30425 0.101102 6.633 -0.0728979 5.95875 0.0253521C5.2845 0.121352 4.68825 0.474602 4.2795 1.01985C3.471 2.0976 3.627 3.44985 4.68975 4.49985H3.75C1.68225 4.49985 0 6.1821 0 8.24985V14.2499C0 16.3176 1.68225 17.9999 3.75 17.9999H14.25C16.3177 17.9999 18 16.3176 18 14.2499V8.24985C18 6.1821 16.3177 4.49985 14.25 4.49985ZM11.07 1.70985C11.2537 1.57185 11.4727 1.49985 11.6978 1.49985C12 1.49985 12.3712 1.6956 12.54 1.91985C13.0207 2.56035 12.5723 3.15285 12.2828 3.4296C11.112 4.46835 9.87 4.49985 9.76425 4.5006H9.7545C9.76875 4.43235 9.77325 4.3611 9.76725 4.28835L9.76575 4.2726C9.8325 3.8241 10.1115 2.42835 11.07 1.70985ZM5.757 3.44685C5.4465 3.1506 4.99875 2.56035 5.4795 1.9191C5.64825 1.69485 5.8935 1.54935 6.171 1.5096C6.45075 1.4736 6.72525 1.54185 6.9495 1.70985C7.90875 2.4291 8.18775 3.82635 8.2545 4.27185L8.253 4.2876C8.247 4.36035 8.2515 4.4316 8.26575 4.49985H8.256C8.15025 4.49985 6.90825 4.4676 5.757 3.44685ZM3.75 5.9991H8.118C7.55475 7.46235 5.3685 7.49835 5.2485 7.4991C4.8345 7.4991 4.49925 7.8351 4.49925 8.2491C4.49925 8.6631 4.83525 8.9991 5.24925 8.9991C6.312 8.9991 8.022 8.6331 8.99925 7.4571C9.9765 8.63385 11.6865 8.9991 12.7493 8.9991C13.1632 8.9991 13.4993 8.66385 13.4993 8.2491C13.4993 7.83435 13.1632 7.4991 12.7493 7.4991C12.6428 7.4991 10.4408 7.4796 9.879 5.9991H14.2493C15.4898 5.9991 16.4993 7.0086 16.4993 8.2491V12.7491H1.5V8.2491C1.5 7.0086 2.5095 5.9991 3.75 5.9991ZM14.25 16.4991H3.75C2.5095 16.4991 1.5 15.4896 1.5 14.2491H16.5C16.5 15.4896 15.4905 16.4991 14.25 16.4991Z" fill="#5A5A5A"/>
</g>
<defs>
<clipPath id="clip0_1_494">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg>

                </div>
                    </div>
                </div>
              </div>
            );
          })}

               

               
                

            </div>


            {/*Advertisement **/}
            <div className='flex flex-col items-end justify-end'>
                <h2 className='uppercase text-[#5A5A5A] font-bold text-[11px]'>Advertisement</h2>
    <Image src={Banner3} width={500} height={500} alt='first bank banner' className='mb-6' />
    <Image src={Banner2} width={500} height={500} alt='first bank banner' />

            </div>
        </div>
      {/*more podcast **/}
     
  {/* Pagination **/}
                  <div className="flex gap-2 mt-10 items-center ml-[20%] max-sm:ml-0 max-md:ml-0 ">
  
  <button
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
    className="px-3 py-2 rounded bg-gray-200 text-gray-800 disabled:opacity-50"
  >
          <svg width="10" height="15" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 1L1 9L14 17V1Z" fill="#E0E0E0" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  </button>

  {/* Page Numbers */}
  {visiblePages.map((page) => (
    <button
      key={page}
      onClick={() => handlePageChange(page)}
      className={`px-3 py-1 rounded ${
        page === currentPage ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'
      }`}
    >
      {page}
    </button>
  ))}


  {endPage < totalPages && (
    <>
      <span className="px-2 text-gray-500">...</span>
      <button
        onClick={() => handlePageChange(totalPages)}
        className={`px-3 py-1 rounded ${
          totalPages === currentPage ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        {totalPages}
      </button>
    </>
  )}


  <button
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="px-3 py-1 rounded bg-gray-200 text-gray-800 disabled:opacity-50"
  >
        <svg width="10" height="15" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L14 9L1 17V1Z" fill="#5A5A5A" stroke="#5A5A5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  </button>
</div>
                {/* Pagination **/}
        </main>
    </>
  )
}

export function PodcastDetailPage() {
  return (
    
    <Suspense>
      <PodcastDetails />
    </Suspense>
  )
}
