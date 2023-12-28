import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="h-screen w-screen bg-[#eeeeee] font-lexend">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-20 gap-12">
        <Image 
          src="/logo.png"
          width={200}
          height={200}
          alt="Hinterlight Studios Logo"
        />
        <h1 className="sm:text-lg lg:text-4xl font-bold">Hintersight Studios</h1>
        <div className="sm:text-md lg:text-3xl">
          <div>Be one of the first people to hear about <span className="font-bold">Project "AUTO-COMBAT"</span></div>
          <div>our upcoming hybrid board game based on the auto-battler genre!</div>
        </div>
        {/* Embedding the URL as an iframe */}
        <iframe 
          src="https://eepurl.com/iGJZu-/" 
          width="100%" 
          height="500" 
          frameBorder="0"
          allowTransparency="true"
          allow="encrypted-media"
          className='rounded-md'
        ></iframe>
      </div>
    </main>
  );
}
