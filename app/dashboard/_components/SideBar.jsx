'use client';
import React, { useContext } from 'react';
import Image from 'next/image';
import { HomeIcon, Layers, ShieldPlus, LogOut } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';
import { UserCourseListContext } from '@/app/_context/UserCourseList';

function SideBar() {
  const { userCourseList } = useContext(UserCourseListContext);
  const path = usePathname();

  const Menu = [
    {
      id: 1,
      name: 'Home',
      icon: HomeIcon,
      path: '/dashboard',
    },
    {
      id: 2,
      name: 'Explore',
      icon: Layers,
      path: '/dashboard/explore',
    },
    {
      id: 3,
      name: 'Upgrade',
      icon: ShieldPlus,
      path: '/dashboard/upgrade',
    },
    {
      id: 4,
      name: 'Logout',
      icon: LogOut,
      path: '/dashboard/logout',
    },
  ];

  return (
    <div className="fixed h-full md:w-64 p-6 max-h-screen bg-[#0B141A] border border-[#0B141A] shadow-xl">
      <Image src={'/ai12.png'} width={30} height={30} alt="logo" />
      <hr className="my-5 border border-[#25D366]" />
      <ul>
        {Menu.map((item) => (
          <li key={item.id}>
            <Link href={item.path}>
              <div
                className={`flex items-center gap-2 text-gray-500 p-3 cursor-pointer rounded-lg mb-2 
                ${item.path === path ? 'border-[#25D366] border bg-[#25D366] text-text1' : 'hover:bg-[#2A3942] border border-[#2E3B45]'}`}
              >
                <item.icon size={18} />
                <h2>{item.name}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-10 w-[80%]">
        <Progress value={(userCourseList?.length / 5) * 100} className="bg-secondary border border-secondary" />
        <h2 className="text-sm my-2 text-text1">
          {userCourseList?.length} out of 5 courses created
        </h2>
        <h2 className="text-xs text-gray-500">Upgrade your plan for unlimited course generation</h2>
      </div>
    </div>
  );
}

export default SideBar;
