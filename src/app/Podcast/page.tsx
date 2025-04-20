'use client';

import React, { Suspense, useState } from 'react';
import PodcastCard from '../../component/Podcast-card/page';
import { useRouter, useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Banner1 from '@/../../public/assets/Rectangle 157.png';
import Banner2 from '@/../../public/assets/Rectangle 157 (1).png';
import Banner3 from '@/../../public/assets/Rectangle 157 (2).png';
import Banner4 from '@/../../public/assets/Rectangle 157 (3).png';

interface PodcastType {
  id: number;
  title: string;
  description: string;
  created_at: string;
  duration: string;
  category_type: string;
  time: number;
  picture_url: string;
}

function Podcast() {
  const [isVisible] = useState<number>(20);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>('popular');
  const [category, setCategory] = useState<string>('all');
  const episodesPerPage = 25;

  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q');

  const fetchData = async (): Promise<PodcastType[]> => {
    const baseURL = 'https://api.wokpa.app/api/listeners/';
    const endpoint = searchQuery
      ? `podcast-search?q=${searchQuery}&page=1&per_page=100`
      : `top-podcasts?page=1&per_page=100`;

    const res = await fetch(`${baseURL}${endpoint}`);
    const response = await res.json();
    return response?.data?.data || [];
    
  };

  const { data: allData = [], isLoading } = useQuery<PodcastType[]>({
    queryFn: fetchData,
    queryKey: ['allData', searchQuery],
  });

  const handleNavigate = (id: number) => {
    router.push(`/Podcast/${id}`);
  };

  const totalEpisodes = allData.length;
  const totalPages = Math.ceil(totalEpisodes / episodesPerPage);
  const indexOfLastEpisode = currentPage * episodesPerPage;
  const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
  const currentEpisodes = allData.slice(indexOfFirstEpisode, indexOfLastEpisode);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  
  const filteredEpisodes = category == 'all' 
    ? currentEpisodes 
    : currentEpisodes.filter(podcast => podcast.category_type.toUpperCase() === category.toUpperCase());


  return(
    <>
    <Suspense>
    <main className="mx-10 mt-20 h-full max-sm:mx-4 sm:mx-4">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-[#5A5A5A] uppercase font-extrabold text-[28px]">
            All Podcasts
          </h1>
          <div className="bg-[#DCDCDC] w-full h-[1px] mt-3" />
          <div className="flex items-start justify-around gap-8 py-7 max-sm:gap-2 sm:gap-2">
            <div className="flex items-start justify-start gap-3 max-sm:flex-col sm:flex-col">
              <p className="font-medium text-base  max-sm:flex-col max-sm:w-full sm:flex-col sm:w-full">
                Sort by: 
                <select
                id="sort-by"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border rounded"
              >
                <option value="recent">All</option>
                <option value="popular">Popular</option>
                <option value="recent">Recent</option>
              </select>
              </p>
              
            </div>
            <svg className='max-sm:hidden' width="2" height="20" viewBox="0 0 2 20" fill="none">
              <path d="M1 0V20" stroke="#5A5A5A" strokeWidth="1.5" />
            </svg>
            <div className="flex items-start justify-start gap-3 max-sm:flex-col ">
              <p className="font-medium text-base flex  max-sm:flex-col max-sm:w-full">
                Sort by category:
                <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-3 py-2 border rounded"
              >
                <option value="all">All</option>
                <option value="news">News</option>
                <option value="Business">Business</option>
                <option value="kids & family">Kids & Family</option>
                <option value="Religion & Spirituality">Religion & Spirituality</option>
                <option value="SOCIETY & CULTURE">Society & culture</option>

                

              </select>
              </p>
              <button>...</button>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#5A5A5A]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-5 place-content-center max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
            {filteredEpisodes.map((podcast) => {
              const formattedDate = new Date(podcast.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              });

              const durationInMinutes = Math.round(parseFloat(podcast.duration) / 60);

              const shortenedTitle =
                podcast.description.length > 50
                  ? podcast.description.slice(0, 50) + '...'
                  : podcast.description;

              const cleanTitle = shortenedTitle.replace(/<br\s*\/?>/gi, '');

              return (
                <PodcastCard
                  key={podcast.id}
                  id={podcast.id}
                  image={podcast.picture_url}
                  title={podcast.title}
                  epides={cleanTitle}
                  date={formattedDate}
                  time={durationInMinutes.toString()}
                  onNavigate={() => handleNavigate(podcast.id)}
                />
              );
            })}
          </div>
        )}

        <div className="flex items-center justify-center gap-2 text-[15px] text-white font-medium my-20">
          <button
            className="px-3 py-2 bg-[#AEAEAE] rounded-lg"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <svg width="10" height="15" viewBox="0 0 15 18" fill="none">
              <path
                d="M14 1L1 9L14 17V1Z"
                fill="#E0E0E0"
                stroke="#E0E0E0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`px-3 py-1 rounded-lg ${
                    currentPage === pageNumber
                      ? 'bg-[#2C2C2C] text-white'
                      : 'bg-[#AEAEAE]'
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>

          <button
            className="px-3 py-2 bg-[#AEAEAE] rounded-lg"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <svg width="10" height="15" viewBox="0 0 15 18" fill="none">
              <path
                d="M1 1L14 9L1 17V1Z"
                fill="#5A5A5A"
                stroke="#5A5A5A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="bg-[#DCDCDC] w-full h-[1px] my-10" />
        <h2 className="text-[#5A5A5A] font-extrabold text-2xl">Explore other categories</h2>
        <div className="flex items-center justify-center gap-3 relative mt-6 max-sm:flex-col ">
          {[Banner1, Banner2, Banner3, Banner4].map((banner, i) => (
            <div key={i} className="flex flex-col relative">
              <Image src={banner} width={400} height={200} alt="banner" />
              <p className="font-semibold text-lg absolute bottom-0 px-4 bg-opacity-50 bg-gradient-to-b from-[#F2F2F200] to-[#2B3221] py-4 text-white w-[24.4%] max-sm:w-full sm:w-full">
                {['News & Storytelling', 'Entertainment & Lifestyle', 'Tech, Sport & Business', 'Other podcasts'][i]}
              </p>
            </div>
          ))}
        </div>
      </main>
    </Suspense>
      
    </>
  );
}

export default Podcast;
