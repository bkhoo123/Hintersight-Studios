import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between p-4 md:p-12 lg:px-32">
      <div>
        <Link href="/">
          
            <Image 
              src="/logo.png"
              width={50}
              height={50}
              alt="Hinterlight Studios Logo"
              layout="fixed"
            />
          
        </Link>
      </div>

      <div className="md:flex space-x-4 lg:space-x-8 font-bold text-sm md:text-lg lg:text-xl">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link> {/* Assuming '/blog' is the correct path */}
        <Link href="/contact">Contact</Link> {/* Assuming '/contact' is the correct path */}
      </div>
    </nav>
  );
};

export default Navbar;
