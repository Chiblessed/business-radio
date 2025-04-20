'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function Search() {
    const [text, setText] = useState<string>('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text.trim()) {
            router.push(`/Podcast?q=${encodeURIComponent(text)}`);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="bg-[#00000052] bg-opacity-30 text-white rounded-full px-4 py-2 flex items-center justify-start gap-2">
            <button type="submit" className="bg-transparent">
                    <svg width="15" height="12" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.47368 11.9474C9.49672 11.9474 11.9474 9.49672 11.9474 6.47368C11.9474 3.45065 9.49672 1 6.47368 1C3.45065 1 1 3.45065 1 6.47368C1 9.49672 3.45065 11.9474 6.47368 11.9474Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 13L10.579 9.57898" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <input
                    type="text"
                    placeholder="Search"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="placeholder:font-bold placeholder:text-white text-white py-1 outline-none focus:outline-none bg-transparent w-28"
                />
               
            </form>
        </>
    );
}

export default Search;
