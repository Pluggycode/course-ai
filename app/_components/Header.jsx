import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='flex justify-between items-center p-5 shadow-md bg-header'>
      <Link href="/" className='flex items-center gap-2'>
        <Image src={'/ai1.png'} alt="Magna AI Logo" width={35} height={35} />
        <span className="text-lg font-bold text-secondary">Magna AI</span>
      </Link>
      <Link href="/dashboard">
        <Button className="bg-secondary text-text1 hover:bg-black">Get Started</Button>
      </Link>
    </header>
  );
};

export default Header;
