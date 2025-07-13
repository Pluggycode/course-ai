'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import { IoBookOutline } from 'react-icons/io5';
import { FiMoreVertical } from 'react-icons/fi';
import DropDownOption from './DropDownOption';
import { db } from '@/configs/db';
import { CourseList } from '@/configs/Schema';
import { eq } from 'drizzle-orm';
import Link from 'next/link';

function CourseCard({ course, refreshdata, displayUser = false }) {
  const handleOnDelete = async () => {
    const res = await db
      .delete(CourseList)
      .where(eq(CourseList?.id, course?.id))
      .returning({ id: CourseList?.id });
    if (res) {
      refreshdata();
    }
  };

  useEffect(() => {
    course && getUserName();
  }, [course]);

  const getUserName = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(eq(CourseList?.id, course?.id));
    console.log(result);
  };

  return (
    <div className="rounded-lg border my-4 hover:border-[#25D366] p-3 transition-all cursor-pointer bg-[#1E2A33] border-[#1E2A33] text-white w-full max-w-sm mx-auto sm:mx-0">
      <Link href={`/course/${course?.courseId}`}>
        <Image
          src={course?.courseBanner}
          alt={course?.courseOutput?.courseName || 'Course Banner'}
          width={600}
          height={300}
          className="w-full h-48 sm:h-52 md:h-56 object-cover rounded-md"
        />
      </Link>

      <div className="mt-3 space-y-2">
        <div className="flex justify-between items-start">
          <h2 className="font-semibold text-base sm:text-lg text-[#E9EDEF] leading-snug line-clamp-2">
            {course?.courseOutput?.courseName}
          </h2>
          {!displayUser && (
            <DropDownOption handleOnDelete={handleOnDelete}>
              <FiMoreVertical />
            </DropDownOption>
          )}
        </div>

        <p className="text-sm text-[#8696A0]">{course?.category}</p>

        <div className="flex flex-wrap gap-2 mt-2 justify-between sm:justify-start">
          <span className="flex items-center gap-1 px-2 py-1 border bg-[#0a2f18] border-[#25D366] text-[#25D366] text-xs rounded-sm">
            <IoBookOutline className="text-sm" />
            {course?.courseOutput?.noOfChapters} chapters
          </span>
          <span className="text-xs border border-[#25D366] bg-[#0a2f18] text-[#25D366] px-2 py-1 rounded-sm">
            {course?.level}
          </span>
        </div>

        {displayUser && (
          <div className="flex items-center gap-2 mt-3">
            <Image
              src={course?.userProfileImage}
              alt="User Profile"
              width={28}
              height={28}
              className="rounded-full"
            />
            <span className="text-sm font-medium">{course?.userName}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseCard;
