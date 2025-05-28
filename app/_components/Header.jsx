'use client'

import { Button } from '@/components/ui/button';
import { useUser, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <header className='flex justify-between items-center p-5 shadow-md bg-header'>
      <Link href="/" className='flex items-center gap-2'>
        <Image src={'/ai12.png'} alt="Magna AI Logo" width={35} height={35} />
        <span className="text-lg font-bold text-secondary">Magna AI</span>
      </Link>

      <div className="flex items-center gap-4">
        {  isSignedIn &&
        <Link href="/dashboard">
          <Button className="bg-[#25D366]  text-text1 hover:bg-black">
            dashboard
          </Button>
        </Link> || 
        <Link href="/dashboard">
          <Button className="bg-[#25D366]  text-text1 hover:bg-black">
            Login
          </Button>
        </Link>
        }
        {isSignedIn &&
          <UserButton afterSignOutUrl="/" />}
      </div>
    </header>
  );
};

export default Header;
