'use client'

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

export default function Home() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  return (
    <main className="min-h-screen w-screen bg-[#eeeeee] font-lexend">
      <Navbar />
      <div className="flex flex-col items-center justify-center my-10 sm:my-20 gap-8 sm:gap-12 px-4">
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
          <Image src="/logo.png" width={200} height={200} alt="Hintersight Studios Logo" layout="responsive" />
        </div>
        <h1 className="text-2xl sm:text-lg lg:text-4xl font-bold text-center">Hintersight Studios</h1>
        <div className="text-center text-xs sm:text-md lg:text-3xl">
          <div>Be one of the first people to hear about <span className="font-bold">Project "AUTO-COMBAT"</span></div>
          <div>our upcoming hybrid board game based on the auto-battler genre!</div>
        </div>
        {/* Embedding the URL as an iframe */}
        <div className="w-full">
          {!iframeLoaded && (
            <div className="w-full h-96 flex items-center justify-center">
              <div className="text-lg">Loading...</div>
            </div>
          )}
          <iframe
            src="https://eepurl.com/iGJZu-/"
            width="100%"
            height="600"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
            className='rounded-md w-full'
            onLoad={handleIframeLoad}
          ></iframe>
        </div>
      </div>
    </main>
  );
}