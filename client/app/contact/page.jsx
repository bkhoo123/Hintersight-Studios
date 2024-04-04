import React from 'react'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

const page = () => {
  return (
    <div className="min-h-screen w-screen bg-[#eeeeee] font-lexend">
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
         <div className="font-bold md:text-3xl">
            Contact Page Coming Soon...
         </div>
        </div>
    </div>
  )
}

export default page