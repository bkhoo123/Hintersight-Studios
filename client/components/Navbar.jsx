import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="h-[200px] w-full flex items-center p-12 px-32 justify-between">
      <div className="">
        <Link href="/">
          <Image 
            src="/logo.png"
            width={50}
            height={50}
            alt="Hinterlight Studios Logo"
          />
        </Link>
      </div>

      <div className="sm:space-x-4 lg:space-x-12 font-bold sm:text-lg lg:text-xl">
        <Link href="/">
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
        <Link href="/about">
          Blog
        </Link>
        <Link href="/about">
          Contact
        </Link>

      </div>
    </div>
  )
}

export default Navbar