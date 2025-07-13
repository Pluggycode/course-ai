'use client';

import React, { useContext, useState } from 'react';
import Image from 'next/image';
import {
  HomeIcon,
  Layers,
  ShieldPlus,
  Info,
  LogOut,
  Menu as MenuIcon,
  X as CloseIcon,
} from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';
import { UserCourseListContext } from '@/app/_context/UserCourseList';
import { useClerk } from '@clerk/nextjs';

function SideBar() {
  const { userCourseList } = useContext(UserCourseListContext);
  const path = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();
  const [isOpen, setIsOpen] = useState(false);

  const Menu = [
    { id: 1, name: 'Home', icon: HomeIcon, path: '/dashboard' },
    { id: 2, name: 'Explore', icon: Layers, path: '/dashboard/explore' },
    { id: 3, name: 'Upgrade', icon: ShieldPlus, path: '/dashboard/upgrade' },
    { id: 4, name: 'About', icon: Info, path: '/dashboard/logout' },
  ];

  const handleLogout = async () => {
    await signOut();
    router.push('/');
  };

  const renderSidebar = () => (
    <div className="flex flex-col justify-between h-full p-6 bg-[#0B141A] border-r border-[#1F2B33] shadow-xl w-full md:w-64">
      {/* Top Logo and Menu */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <Image src="/ai12.png" width={30} height={30} alt="logo" />
          <button className="md:hidden text-white" onClick={() => setIsOpen(false)}>
            <CloseIcon size={20} />
          </button>
        </div>
        <hr className="mb-5 border-[#25D366]" />

        <ul>
          {Menu.map((item) => (
            <li key={item.id}>
              <Link href={item.path}>
                <div
                  className={`flex items-center gap-2 p-3 mb-2 rounded-lg cursor-pointer transition-all
                    ${item.path === path
                      ? 'bg-[#25D366] text-black'
                      : 'text-gray-400 hover:bg-[#2A3942] border border-[#2E3B45]'
                    }`}
                >
                  <item.icon size={18} />
                  <h2 className="text-sm">{item.name}</h2>
                </div>
              </Link>
            </li>
          ))}

          {/* Logout Button */}
          <li>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 p-3 mb-2 rounded-lg text-gray-400 hover:bg-[#2A3942] border border-[#2E3B45] w-full"
            >
              <LogOut size={18} />
              <h2 className="text-sm">Logout</h2>
            </button>
          </li>
        </ul>
      </div>

      {/* Bottom Progress */}
      <div className="mt-8">
        <Progress value={(userCourseList?.length / 5) * 100} className="bg-secondary border border-secondary" />
        <h2 className="text-sm mt-2 text-text1">
          {userCourseList?.length} out of 5 courses created
        </h2>
        <h2 className="text-xs text-gray-500">
          Upgrade your plan for unlimited course generation
        </h2>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Header with Menu Icon */}
      <div className="md:hidden flex items-center justify-between bg-[#0B141A] text-white px-4 py-3 shadow-lg">
        <div className="flex items-center gap-2">
          <Image src="/ai12.png" width={30} height={30} alt="logo" />
          <span className="font-bold text-lg">Magna AI</span>
        </div>
        <button onClick={() => setIsOpen(true)}>
          <MenuIcon size={22} />
        </button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed top-0 left-0 h-screen w-64 z-40">
        {renderSidebar()}
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex">
          <div className="w-3/4 sm:w-2/3 max-w-xs bg-[#0B141A]">
            {renderSidebar()}
          </div>
          <div className="flex-1" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
}

export default SideBar;
