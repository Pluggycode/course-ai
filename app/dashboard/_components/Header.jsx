'use client';

import React from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 bg-[#0B141A] shadow-md gap-2 sm:gap-0">
      {/* Logo and App Name */}
      <div className="flex items-center gap-2">
        <Image
          src="/ai12.png"
          width={35}
          height={35}
          alt="Magna AI Logo"
          className="rounded-sm"
        />
        <h2 className="text-lg font-bold text-[#E9EDEF]">Magna-AI</h2>
      </div>

      {/* User Button */}
      <div className="border border-[#25D366] rounded-full p-1 hover:shadow-lg transition">
        <UserButton />
      </div>
    </header>
  );
};

export default Header;
