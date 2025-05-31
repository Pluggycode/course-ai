
import React from 'react'
import AddCourse from './_components/AddCourse'
import UserCourseList from './_components/UserCourseList'


const page = () => {
  return (
    <div className='bg-[#121B22]'> 
      <AddCourse />
      {/* Display List of Courses */}
      < UserCourseList/>
      </div>
  )
}

export default page