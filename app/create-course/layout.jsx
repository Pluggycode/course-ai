'use client'
import React, { children, useState } from 'react'
import Header from '../dashboard/_components/Header'
import { UserInputContext } from '../_context/UserInputContext'

const CreateCourseLayout = ({children}) => {
  const [userCourseInput, setUserCourseInput] = useState([]);
  return (
    <div className='bg-[#121B22] h-screen'>
      <UserInputContext.Provider value={{userCourseInput,setUserCourseInput}}>
        <div className="bg-[#121B22]">
        <Header/>
        {children}
        </div>
        </UserInputContext.Provider>
        </div>
  )
}

export default CreateCourseLayout