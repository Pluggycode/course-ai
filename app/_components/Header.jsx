'use client'

import { Button } from '@/components/ui/button';
import { useUser, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  const { isSignedIn, isLoaded } = useUser();

  return (
    <header className="absolute top-0 left-0 w-full z-30 flex justify-between items-center p-5 bg-gray/01 ">
      <Link href="/" className='flex items-center gap-2'>
        <Image src={'/ai12.png'} alt="Magna AI Logo" width={35} height={35} />
        <span className="text-lg font-bold text-secondary">Magna AI</span>
      </Link>

      <div className="flex items-center gap-4">
        {isLoaded ? (
          isSignedIn ? (
            <>
              <Link href="/dashboard">
                <Button className="bg-[#25D366] text-text1 hover:bg-black">
                  Dasbaord
                </Button>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <Link href="/sign-in">
              <Button className="bg-[#25D366] text-text1 hover:bg-black">
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
