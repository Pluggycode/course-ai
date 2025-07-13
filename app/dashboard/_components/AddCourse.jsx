'use client';

import { UserCourseListContext } from '@/app/_context/UserCourseList';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';

const AddCourse = () => {
  const { user } = useUser();
  const { userCourseList } = useContext(UserCourseListContext);
  const router = useRouter();

  const MAX_COURSES = 5;
  const userReachedLimit = userCourseList?.length >= MAX_COURSES;

  const handleCreateCourse = () => {
    if (userReachedLimit) {
      router.push('/upgrade');
    } else {
      router.push('/create-course');
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-4 py-4 bg-[#111B21] rounded-lg">
      {/* Text Section */}
      <div>
        <h2 className="text-2xl sm:text-3xl text-[#E9EDEF]">
          Hello, <span className="font-bold">{user?.fullName}</span>
        </h2>
        <p className="text-sm text-[#8696A0] mt-1 max-w-sm">
          Create a new course with AI, share it with friends, and earn from it.
        </p>
      </div>

      {/* Button */}
      <Button
        onClick={handleCreateCourse}
        disabled={userReachedLimit}
        className={`w-full sm:w-auto text-white transition ${
          userReachedLimit
            ? 'bg-gray-500 cursor-not-allowed'
            : 'bg-[#25D366] hover:bg-black'
        }`}
      >
        {userReachedLimit ? 'Limit Reached - Upgrade' : '+ Create AI Course'}
      </Button>
    </div>
  );
};

export default AddCourse;
