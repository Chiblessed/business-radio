'use client';
import React,{useState} from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 




interface PodcastItem {
  id: number;
  title: string;
  description: string;
  created_at: string;
  duration: string;
  picture_url: string;
  category_type: string;
}



function Other() {
    const [isVisible] = useState<number>(5); 
        const router = useRouter();

    const fetchData = async (): Promise<PodcastItem[]> => {
      try {
        const res = await fetch('https://api.wokpa.app/api/listeners/top-podcasts?page=1&per_page=100');
        const response = await res.json();
        const getData: PodcastItem[] = response?.data?.data || [];

      const result: PodcastItem[] = [];
    for (let i = 0; i < getData.length; i++) {
      const item = getData[i];
      if (item.category_type === "KIDS & FAMILY" || 
        item.category_type === "RELIGION & SPIRITUALITY"
       ) {
        result.push(item);
      }
      if (result.length === isVisible) break;
    }

    return result;

      } catch (error) {
        console.error('An error occurred:', error);
        return [];
      }
    };
    
    const { data: displayData = [], isLoading } = useQuery({
      queryFn: fetchData,
      queryKey: ['displayData'],
    });
    
    
    const handleNavigate = (id:number) => {
      router.push(`/Podcast/${id}`);
    };
  return (
    <>
     <main className='mx-14 pb-10 max-sm:mx-4 mx-md:mx-4'>
        <div className='flex items-center justify-between'> 
        <p className='text-[#5A5A5A] text-base  font-semibold flex items-center justify-start gap-1 py-2'>
        <svg width="4" height="13" viewBox="0 0 4 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 0V13" stroke="#CC0001" stroke-width="3"/>
</svg>
Other Podcasts
        </p>
        <Link href='/Podcast'>
        <button className='border border-[#9747FF] cursor-pointer flex items-center justify-center gap-3 px-5 py-1 rounded-3xl text-[15px] font-medium text-[#9747FF]'>
            View all
            <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 9L6 5L1 1" stroke="#9747FF" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </button>
        </Link> 
       
        </div>
     {isLoading ?  <div className="flex justify-center items-center h-1/2">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#5A5A5A]"></div>
    </div> : 
        <div className='flex items-start justify-start gap-7 max-sm:flex-col max-md:flex-col mt-5  max-md:grid max-md:grid-cols-1'>

            {displayData?.map((item, index) => {
                return(
                    <div
                    onClick={() => handleNavigate(item.id)}
                     key={index} className='bg-[#F4F4F4] max-sm:w-full sm:w-full max-sm:items-center sm:items-center flex flex-col items-start justify-start shadow-lg rounded-xl py-5 px-4'>
                    <Image src={item.picture_url} width={250} height={250} alt='' />
                    <p className='text-lg font-bold py-5 text-[#282828]'>{item.title}</p>
                    <div className=' flex items-center justify-center gap-4 '>
                <div className='px-2 py-2 rounded-full bg-[#E1E1E1]' >
                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1_464)">
    <path d="M0.000269969 8.99032C-0.0067468 10.7533 1.41679 12.1882 3.17983 12.1952C3.99178 12.1985 4.77447 11.8922 5.36855 11.3387L10.1257 13.4866C10.0926 13.6644 10.0745 13.8447 10.0715 14.0256C10.0659 15.8008 11.5003 17.2444 13.2755 17.25C15.0507 17.2556 16.4943 15.8211 16.4999 14.0459C16.5056 12.2708 15.071 10.8272 13.2959 10.8215C12.2353 10.8182 11.2413 11.3382 10.6393 12.2114L6.16988 10.1933C6.48734 9.42678 6.48856 8.56574 6.17332 7.79828L10.6366 5.76988C11.6416 7.22348 13.6348 7.58707 15.0884 6.58203C16.542 5.57699 16.9055 3.5839 15.9005 2.1303C14.8954 0.676706 12.9023 0.313121 11.4487 1.31816C10.583 1.91671 10.0671 2.90263 10.0687 3.95508C10.0716 4.13623 10.09 4.31677 10.1236 4.49479L5.37885 6.65087C4.09333 5.44376 2.07266 5.50733 0.865554 6.79285C0.306884 7.38786 -0.00275561 8.17416 0.000269969 8.99032Z" fill="#5A5A5A"/>
    </g>
    <defs>
    <clipPath id="clip0_1_464">
    <rect width="16.5" height="16.5" fill="white" transform="translate(0 0.75)"/>
    </clipPath>
    </defs>
    </svg>
                    </div>
                    <div className='px-2 py-2 rounded-full bg-[#E1E1E1]' >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1_494)">
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
                )
            })}


           

            








        </div> 
}
        </main> 
    </>
  )
}

export default Other
