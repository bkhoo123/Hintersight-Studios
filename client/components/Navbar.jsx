import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="h-[200px] w-full flex items-center p-12 px-32 justify-between">
      <div className="">
        <Link href="/">
          <img 
            src="/Logo.png"
            width={50}
            height={50}
          />
        </Link>
      </div>

      <div className="space-x-12 font-bold sm:text-lg lg:text-xl">
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