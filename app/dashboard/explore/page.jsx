'use client'
import { db } from '@/configs/db'
import { CourseList } from '@/configs/Schema'
import React, { useEffect, useState } from 'react'
import CourseCard from '../_components/CourseCard'
import { Button } from '@/components/ui/button'
import { Mic } from 'lucide-react'

const Explore = () => {
  const [courseList, setCourseList] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [pageIndex, setPageIndex] = useState(0);

  // Load all courses for search filtering
  useEffect(() => {
    getAllCoursesForSearch();
  }, []);

  // Load paginated courses for display
  useEffect(() => {
    getPaginatedCourses();
  }, [pageIndex]);

  const getPaginatedCourses = async () => {
    const result = await db.select().from(CourseList)
      .limit(9)
      .offset(pageIndex * 9);
    setCourseList(result);
  };

  const getAllCoursesForSearch = async () => {
    const result = await db.select().from(CourseList);
    setAllCourses(result);
  };

  // Filter courses by title
  useEffect(() => {
    if (searchTerm.trim() === '') {
      getPaginatedCourses(); // reset to paginated view
    } else {
      const filtered = allCourses.filter(course =>
        course.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCourseList(filtered);
    }
  }, [searchTerm]);

  // Voice search handler
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
      <h2 className='font-bold text-3xl text-text1'>Explore More Projects</h2>
      <p className='text-gray-500'>Explore more projects built with AI by other users</p>

      {/* Search Bar */}
      <div className="my-4 relative">
        <input
          type="text"
          placeholder="Search course titles..."
          className="w-full h-12 rounded px-4 bg-[#1E2A33] border border-[#25D366] text-white placeholder:text-gray-400 pr-12"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleVoiceSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#25D366] p-2 rounded-full"
        >
          <Mic className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {courseList.length > 0 ? (
          courseList.map((course, index) => (
            <div key={index}>
              <CourseCard course={course} displayUser={true} />
            </div>
          ))
        ) : (
          <p className="text-gray-400 col-span-3 text-center">No courses found.</p>
        )}
      </div>

      {/* Pagination (only if no search term) */}
      {searchTerm.trim() === '' && (
        <div className="flex justify-between mt-4">
          {pageIndex > 0 && (
            <Button onClick={() => setPageIndex(pageIndex - 1)}>Prev Page</Button>
          )}
          <Button onClick={() => setPageIndex(pageIndex + 1)}>Next Page</Button>
        </div>
      )}
    </div>
  );
};

export default Explore;
