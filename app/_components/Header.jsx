'use client';

import { Button } from '@/components/ui/button';
import { useUser, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  const { isSignedIn, isLoaded } = useUser();

  return (
    <header className="fixed top-0 left-0 w-full z-30 flex justify-between items-center px-4 py-3 md:px-8 bg-gray-900 shadow-md">
      {/* Logo + Title */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/ai12.png" alt="Magna AI Logo" width={35} height={35} />
        <span className="text-base md:text-lg font-bold text-white">Magna AI</span>
      </Link>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-2 flex-wrap">
        {isLoaded ? (
          isSignedIn ? (
            <>
              <Link href="/dashboard">
                <Button className="bg-[#25D366] text-white text-sm md:text-base hover:bg-black">
                  Dashboard
                </Button>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <Link href="/sign-in">
              <Button className="bg-[#25D366] text-white text-sm md:text-base hover:bg-black">
                Login
              </Button>
            </Link>
          )
        ) : (
          <span className="text-sm text-gray-400">Loading...</span>
        )}
      </div>
    </header>
  );
};

export default Header;
