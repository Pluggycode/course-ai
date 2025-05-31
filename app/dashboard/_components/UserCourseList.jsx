'use client'
import React, { useContext, useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { CourseList } from '@/configs/Schema'
import { db } from '@/configs/db'
import { eq } from 'drizzle-orm'
import CourseCard from './CourseCard'
import { UserCourseListContext } from '@/app/_context/UserCourseList'
import { Mic } from 'lucide-react'

const UserCourseList = () => {
  const [courseList, setCourseList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);
  const { userCourseList, setUserCourseList } = useContext(UserCourseListContext);
  const { user } = useUser();

  // Fetch courses on load
  useEffect(() => {
    if (user) getUserCourse();
  }, [user]);

  const getUserCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress));
    setCourseList(result);
    setFilteredCourses(result); // initially show all
    setUserCourseList(result);
  };

  // Handle search with debounce
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchTerm.trim() === '') {
        setFilteredCourses(courseList); // show all if search is empty
      } else {
        const filtered = courseList.filter(course =>
          course?.name?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCourses(filtered);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchTerm, courseList]);

  // Optional: Voice search (Chrome only)
  const handleVoiceSearch = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';

    recognition.onresult = function (event) {
      const voiceInput = event.results[0][0].transcript;
      setSearchTerm(voiceInput);
    };

    recognition.start();
  };

  return (
    <div>
      <h2 className='font-bold text-medium mt-4 text-[#E9EDEF]'>My AI-Courses</h2>

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
              course={course}
              key={index}
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
