import React from 'react'
import { GoClock } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { BsBarChart } from "react-icons/bs";

const CourseDetails = ({course}) => {
  return (
    <div className='hover:border hover:border-[#25D366] p-6 rounded-xl shadow-md mt-3 bg-[#1E2A33] '>
        <div className="grid grid-cols-2 md:grid-cols-4 ">
            <div className="flex gap-2"><BsBarChart  className='text-4xl text-[#25D366] mt-1'/>
            <div className="f">
                <h2 className='text-xs text-[#25D366]'>Skill level</h2>
                <h2 className='font-medium text-lg text-text1'>{course?.level}</h2>
            </div>
            </div>
            <div className="flex gap-2"><GoClock className='text-4xl text-[#25D366] mt-1'/>
            <div className="f">
                <h2 className='text-xs text-[#25D366]'>Duration</h2>
                <h2 className='font-medium text-lg text-text1'>{course?.courseOutput?.duration}</h2>
            </div>
            </div>
            <div className="flex gap-2"><IoBookOutline className='text-4xl text-[#25D366] mt-1'/>
            <div className="f">
                <h2 className='text-xs text-[#25D366]'>NO of chapters</h2>
                <h2 className='font-medium text-lg text-text1'>{course?.courseOutput?.noOfChapters}</h2>
            </div>
            </div>
            <div className="flex gap-2"><IoVideocamOutline  className='text-4xl text-[#25D366] mt-1'/>
            <div className="f">
                <h2 className='text-xs text-[#25D366]'>Video Included!</h2>
                <h2 className='font-medium text-lg text-text1'>{course?.includeVideo}</h2>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CourseDetails