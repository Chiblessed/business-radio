'use client';


import { useEffect, useRef, useState, MouseEvent } from 'react';

interface AudioPlayerProps {
  recording: {
    url: string;
  };
}

export default function AudioPlayer({ recording }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);


  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time:number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: MouseEvent<HTMLDivElement>) => {
    const progress = progressRef.current;
    if (!progress || !audioRef.current) return;

    const rect = progress.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    audioRef.current.currentTime = newTime;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="mt-6 w-full ">
      
<div className='relative flex items-center justify-center gap-5 '>
<span className='max-sm:text-white sm:text-white md:text-white'> {formatTime(currentTime)}</span>
      <div
        className="relative w-full h-1 bg-gray-300 rounded cursor-pointer"
        onClick={handleSeek}
        ref={progressRef}
      >
        <div
          className="absolute top-0  left-0 h-1 bg-red-500 rounded"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <span className='max-sm:text-white sm:text-white md:text-white'> {formatTime(duration)}</span>
</div>
      
      
      <div className='flex items-center justify-between w-full pt-3'>
            <div className='flex items-center gap-3'>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_1653)">
<path d="M1.301 15C1.93329 14.9917 2.46843 15.4652 2.53727 16.0938C3.12081 22.9934 9.18714 28.1136 16.0868 27.53C22.9864 26.9465 28.1066 20.8801 27.523 13.9805C26.9394 7.08082 20.8731 1.96066 13.9735 2.5442C10.9862 2.79686 8.18835 4.11158 6.08723 6.24996H9.98975C10.6801 6.24996 11.2397 6.80959 11.2397 7.49994C11.2397 8.19029 10.6801 8.74992 9.98975 8.74992H4.811C3.52932 8.74922 2.49046 7.71035 2.48975 6.42867V1.24998C2.48975 0.559629 3.04938 0 3.73973 0C4.43009 0 4.98972 0.559629 4.98972 1.24998V3.8475C11.1593 -1.66553 20.63 -1.13326 26.1431 5.03637C31.6561 11.206 31.1238 20.6766 24.9542 26.1896C18.7846 31.7027 9.31393 31.1704 3.80091 25.0008C1.65784 22.6025 0.343464 19.5781 0.0522537 16.375C-0.0119648 15.6827 0.497156 15.0696 1.18938 15.0053C1.22647 15.0019 1.26368 15.0001 1.301 15Z" fill="white"/>
<path d="M11.9206 19V11.85L12.5476 12.499H10.2926V11.3H13.3506V19H11.9206ZM18.09 19.11C17.4814 19.11 16.9314 18.956 16.44 18.648C15.956 18.34 15.5747 17.8927 15.296 17.306C15.0174 16.712 14.878 15.9933 14.878 15.15C14.878 14.3067 15.0174 13.5917 15.296 13.005C15.5747 12.411 15.956 11.96 16.44 11.652C16.9314 11.344 17.4814 11.19 18.09 11.19C18.706 11.19 19.256 11.344 19.74 11.652C20.224 11.96 20.6054 12.411 20.884 13.005C21.17 13.5917 21.313 14.3067 21.313 15.15C21.313 15.9933 21.17 16.712 20.884 17.306C20.6054 17.8927 20.224 18.34 19.74 18.648C19.256 18.956 18.706 19.11 18.09 19.11ZM18.09 17.867C18.4494 17.867 18.761 17.7717 19.025 17.581C19.289 17.383 19.4944 17.0823 19.641 16.679C19.795 16.2757 19.872 15.766 19.872 15.15C19.872 14.5267 19.795 14.017 19.641 13.621C19.4944 13.2177 19.289 12.9207 19.025 12.73C18.761 12.532 18.4494 12.433 18.09 12.433C17.7454 12.433 17.4374 12.532 17.166 12.73C16.902 12.9207 16.693 13.2177 16.539 13.621C16.3924 14.017 16.319 14.5267 16.319 15.15C16.319 15.766 16.3924 16.2757 16.539 16.679C16.693 17.0823 16.902 17.383 17.166 17.581C17.4374 17.7717 17.7454 17.867 18.09 17.867Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1_1653">
<rect width="30" height="30" fill="white" transform="matrix(-1 0 0 1 30 0)"/>
</clipPath>
</defs>
</svg>



<div onClick={togglePlay} className='bg-[#CC0001] rounded-full px-3 py-3'>
    {isPlaying ?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
  <rect x="6" y="4" width="4" height="16" rx="1" />
  <rect x="14" y="4" width="4" height="16" rx="1" />
</svg>
 : <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5 11.866C19.1667 11.4811 19.1667 10.5189 18.5 10.134L2 0.607693C1.33333 0.222794 0.5 0.703918 0.5 1.47372V20.5263C0.5 21.2961 1.33333 21.7772 2 21.3923L18.5 11.866Z" fill="white"/>
</svg>}
      
      

      </div>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_1658)">
<path d="M28.699 15C28.0667 14.9917 27.5316 15.4652 27.4627 16.0938C26.8792 22.9934 20.8129 28.1136 13.9132 27.53C7.01357 26.9465 1.89341 20.8801 2.477 13.9805C3.0606 7.08082 9.12687 1.96066 16.0265 2.5442C19.0138 2.79686 21.8117 4.11158 23.9128 6.24996H20.0102C19.3199 6.24996 18.7603 6.80959 18.7603 7.49994C18.7603 8.19029 19.3199 8.74992 20.0102 8.74992H25.189C26.4707 8.74922 27.5095 7.71035 27.5102 6.42867V1.24998C27.5102 0.559629 26.9506 0 26.2603 0C25.5699 0 25.0103 0.559629 25.0103 1.24998V3.8475C18.8407 -1.66553 9.36997 -1.13326 3.85694 5.03637C-1.65608 11.206 -1.12382 20.6766 5.04581 26.1896C11.2154 31.7027 20.6861 31.1704 26.1991 25.0008C28.3422 22.6025 29.6565 19.5781 29.9477 16.375C30.012 15.6827 29.5028 15.0696 28.8106 15.0053C28.7735 15.0019 28.7363 15.0001 28.699 15Z" fill="white"/>
<path d="M11.9206 19V11.85L12.5476 12.499H10.2926V11.3H13.3506V19H11.9206ZM18.09 19.11C17.4814 19.11 16.9314 18.956 16.44 18.648C15.956 18.34 15.5747 17.8927 15.296 17.306C15.0174 16.712 14.878 15.9933 14.878 15.15C14.878 14.3067 15.0174 13.5917 15.296 13.005C15.5747 12.411 15.956 11.96 16.44 11.652C16.9314 11.344 17.4814 11.19 18.09 11.19C18.706 11.19 19.256 11.344 19.74 11.652C20.224 11.96 20.6054 12.411 20.884 13.005C21.17 13.5917 21.313 14.3067 21.313 15.15C21.313 15.9933 21.17 16.712 20.884 17.306C20.6054 17.8927 20.224 18.34 19.74 18.648C19.256 18.956 18.706 19.11 18.09 19.11ZM18.09 17.867C18.4494 17.867 18.761 17.7717 19.025 17.581C19.289 17.383 19.4944 17.0823 19.641 16.679C19.795 16.2757 19.872 15.766 19.872 15.15C19.872 14.5267 19.795 14.017 19.641 13.621C19.4944 13.2177 19.289 12.9207 19.025 12.73C18.761 12.532 18.4494 12.433 18.09 12.433C17.7454 12.433 17.4374 12.532 17.166 12.73C16.902 12.9207 16.693 13.2177 16.539 13.621C16.3924 14.017 16.319 14.5267 16.319 15.15C16.319 15.766 16.3924 16.2757 16.539 16.679C16.693 17.0823 16.902 17.383 17.166 17.581C17.4374 17.7717 17.7454 17.867 18.09 17.867Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1_1658">
<rect width="30" height="30" fill="white" transform="matrix(-1 0 0 1 30 0)"/>
</clipPath>
</defs>
</svg>
            </div>
 <div className='flex items-center gap-3 '>
 <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#E1E1E1"/>
<g clip-path="url(#clip0_1_1622)">
<path d="M8.00028 19.9871C7.99092 22.3378 9.88897 24.251 12.2397 24.2603C13.3223 24.2646 14.3659 23.8562 15.158 23.1182L21.5008 25.9821C21.4568 26.2192 21.4326 26.4596 21.4285 26.7008C21.4211 29.0677 23.3337 30.9925 25.7006 31C28.0675 31.0075 29.9923 29.0948 29.9998 26.7279C30.0073 24.361 28.0946 22.4362 25.7277 22.4287C24.3136 22.4243 22.9883 23.1176 22.1857 24.2819L16.2264 21.5911C16.6497 20.569 16.6513 19.421 16.231 18.3977L22.1821 15.6932C23.5221 17.6313 26.1796 18.1161 28.1177 16.776C30.0559 15.436 30.5406 12.7785 29.2005 10.8404C27.8605 8.90227 25.203 8.41749 23.2649 9.75755C22.1106 10.5556 21.4227 11.8702 21.4248 13.2734C21.4287 13.515 21.4532 13.7557 21.4981 13.9931L15.1717 16.8678C13.4577 15.2584 10.7635 15.3431 9.15399 17.0571C8.4091 17.8505 7.99624 18.8989 8.00028 19.9871Z" fill="#5A5A5A"/>
</g>
<defs>
<clipPath id="clip0_1_1622">
<rect width="22" height="22" fill="white" transform="translate(8 9)"/>
</clipPath>
</defs>
</svg>

<svg  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#E1E1E1"/>
</svg>



    </div>

  


        </div>

      <audio ref={audioRef} src={recording.url} />
    </div>
  );
}
