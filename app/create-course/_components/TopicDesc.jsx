import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useContext } from 'react'
import { UserInputContext } from '@/app/_context/UserInputContext'

import React from 'react'

const TopicDesc = () => {

  const {userCourseInput,setUserCourseInput}=useContext(UserInputContext);
  const handleInputChange=(fieldName,value) =>{

    setUserCourseInput(prev=>({
      ...prev,
      [fieldName]:value
    }))
  }
  return (
    <div className='mx-20 mt-5 lg:mx-44'>
        {/* topic */}
        <div className="mt-5">
            <label className='text-text1 mb-3'>Write the topic for which you want to Generate a course (e.g.., Python course, Yoga, etc..):</label>
            <Input placeholder="Topic" defaultValue={userCourseInput?.topic}
            onChange={(e) =>handleInputChange('topic',e.target.value)} className="h-14 text-xl mt-3 border border-[#25D366] text-text1 shadow-lg shadow-[#25D366] bg-[#1E2A33]"/>
        </div>
        <div className="mt-5">
            <label htmlFor="" className='text-text1 mb-3'>Tell us more about your course, what you want to include in the course </label>
            <Textarea placeholder='About your course'
            defaultValue={userCourseInput?.description} 
            onChange={(e) =>handleInputChange('description',e.target.value)} 
              className="h-24 text-xl border border-[#25D366] text-text1  shadow-lg shadow-[#25D366] bg-[#1E2A33] mt-3"/>
        </div>

        {/* text area */}
    </div>
  )
}

export default TopicDesc