'use client';
import React, { useContext, useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { CourseList } from '@/configs/Schema';
import { db } from '@/configs/db';
import { eq } from 'drizzle-orm';
import CourseCard from './CourseCard';
import { UserCourseListContext } from '@/app/_context/UserCourseList';
import { Mic } from 'lucide-react';

const UserCourseList = () => {
  const [courseList, setCourseList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);
  const { userCourseList, setUserCourseList } = useContext(UserCourseListContext);
  const { user } = useUser();

  // ✅ Fetch user courses
  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      getUserCourse();
    }
  }, [user]);

  const getUserCourse = async () => {
    const email = user?.primaryEmailAddress?.emailAddress;
    if (!email) return;

    try {
      const result = await db
        .select()
        .from(CourseList)
        .where(eq(CourseList?.createdBy, email));
      setCourseList(result);
      setFilteredCourses(result);
      setUserCourseList(result);
    } catch (error) {
      console.error("Failed to fetch user courses:", error);
    }
  };

  // ✅ Debounced search
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchTerm.trim() === '') {
        setFilteredCourses(courseList);
      } else {
        const filtered = courseList.filter(course =>
          course?.name?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCourses(filtered);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchTerm, courseList]);

  // ✅ Voice search
  const handleVoiceSearch = () => {
    if (typeof window === 'undefined' || !('webkitSpeechRecognition' in window)) {
      alert("Your browser doesn't support voice search.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';

    recognition.onresult = function (event) {
      const voiceInput = event.results[0][0].transcript;
      setSearchTerm(voiceInput);
    };

    recognition.onerror = function (event) {
      console.error('Speech recognition error:', event);
    };

    recognition.start();
  };

  return (
    <div>
      <h2 className="font-bold text-medium mt-4 text-[#E9EDEF]">My AI-Courses</h2>

      {/* Search input */}
      <div className="my-4 relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search your courses..."
          className="w-full h-12 rounded px-4 bg-[#1E2A33] border border-[#25D366] text-white placeholder:text-gray-400 pr-12"
        />
        <button
          onClick={handleVoiceSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#25D366] p-2 rounded-full"
        >
          <Mic className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Course list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <CourseCard
              key={index}
              course={course}
              refreshdata={getUserCourse}
            />
          ))
        ) : (
          <p className="text-gray-400 col-span-3 text-center">No courses found.</p>
        )}
      </div>
    </div>
  );
};

export default UserCourseList;
