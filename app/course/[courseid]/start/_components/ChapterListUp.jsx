'use client';
import React, { useEffect, useState } from 'react';
import { GoClock } from "react-icons/go";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdCheck } from 'react-icons/md';
import EditChapters from '@/app/create-course/[courseid]/_components/EditChapters';
import toast from 'react-hot-toast';
import { Progress } from '@/components/ui/progress';

const ChapterList = ({ course, edit = false }) => {
  const chapters = course?.courseOutput?.chapters || [];
  const [markedChapters, setMarkedChapters] = useState([]);

  // Initialize state only once
  useEffect(() => {
    setMarkedChapters(new Array(chapters.length).fill(false));
  }, [chapters.length]);

  const handleMark = (index) => {
    if (!markedChapters[index]) {
      const updatedMarks = [...markedChapters];
      updatedMarks[index] = true;
      setMarkedChapters(updatedMarks);
      toast.success("Chapter marked as completed");
    }
  };

  const completedCount = markedChapters.filter(Boolean).length;
  const progress = chapters.length ? (completedCount / chapters.length) * 100 : 0;

  return (
    <div className="mt-5">
      <h2 className="font-medium text-xl text-text1">Chapters</h2>

      {/* Progress Bar */}
      <div className="mt-3">
        <Progress value={progress} />
        <p className="text-sm text-[#25D366] mt-1">
          {completedCount} of {chapters.length} chapters completed ({Math.round(progress)}%)
        </p>
      </div>

      {/* Chapter List */}
      <div className="mt-2">
        {chapters.map((chapter, index) => (
          <div
            key={index}
            className="hover:border hover:border-[#25D366] bg-[#1E2A33] mt-3 p-5 rounded-lg mb-2 shadow-md flex items-center justify-between"
          >
            <div className="flex gap-4 items-center">
              <h2 className="bg-[#25D366] flex-none text-text1 h-10 w-10 rounded-full text-center p-2">
                {index + 1}
              </h2>
              <div>
                <h2 className="font-medium text-lg text-[#25D366] flex items-center gap-2">
                  {chapter.chapterName}
                  {edit && (
                    <EditChapters
                      course={course}
                      index={index}
                      refreshData={() => {}}
                    />
                  )}
                </h2>
                <p className="text-sm text-text1">{chapter.about}</p>
                <p className="flex gap-2 text-gray-400">
                  <GoClock className="mt-1" />
                  {chapter.duration}
                </p>
              </div>
            </div>

           {!markedChapters[index] ? (
              <IoIosCheckmarkCircleOutline
                className="h-10 w-10 text-white cursor-pointer hover:text-[#25D366] "
                onClick={() => handleMark(index)}
              />
            ) : (
              <div className="flex items-center gap-2">
                <MdCheck className="h-10 w-10 text-green-400" />
                <span className="text-green-400 text-sm">Completed</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterList;
