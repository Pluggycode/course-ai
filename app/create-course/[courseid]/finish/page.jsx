'use client'
import React, { useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { db } from '@/configs/db';
import { eq, and } from 'drizzle-orm';
import { CourseList } from '@/configs/Schema';
import CourseBasicInfo from '../_components/CourseBasicInfo';
import { MdContentCopy, MdCheck } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';

const FinishScreen = ({ params }) => {
  const { user } = useUser();
  const [course, setCourse] = useState([]);
  const [copied, setCopied] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (params && user) getCourse();
  }, [params, user]);

  const getCourse = async () => {
    const result2 = await db.select().from(CourseList).where(
      and(
        eq(CourseList.courseId, params?.courseid),
        eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)
      )
    );
    setCourse(result2[0]);
    console.log(result2);
  };

  const handleCopy = async () => {
    const url = `${process.env.NEXT_PUBLIC_HOST_NAME}course/${course?.courseId}/start`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    toast.success('Link copied to clipboard!');
  };

  return (
    <div className='px-10 md:px-20 lg:px-44 my-7'>
      {/* Toast container */}
      <Toaster position="top-right" />

      <h2 className='text-center font-bold text-2xl my-3 text-text1'>
        Congrats! Your course is Ready.
      </h2>

      <CourseBasicInfo course={course} refreshData={() => console.log()} />

      <h2 className='mt-3 text-text1'>Course URL</h2>

      <div className='text-center text-gray-400  mt-2 rounded-md p-2 hover:border hover:border-[#25D366] bg-[#1E2A33] flex gap-3 items-center justify-center'>
        <span className="truncate">
          {process.env.NEXT_PUBLIC_HOST_NAME}course/{course?.courseId}/start
        </span>

        {!copied ? (
          <MdContentCopy
            className='h-5 w-5 cursor-pointer'
            onClick={handleCopy}
          />
        ) : (
          <div className='flex items-center gap-2'>
            <MdCheck className='h-5 w-5 text-green-400' />
            <span className='text-green-400 text-sm'>Link Copied</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinishScreen;
