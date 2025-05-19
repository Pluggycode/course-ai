'use client'
import { UserCourseListContext } from '@/app/_context/UserCourseList';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React, { useContext, useEffect } from 'react'


const AddCourse = () => {
    const {user} = useUser();
    const {userCourseList,setuserCourseList} = useContext(UserCourseListContext)
    const router  = useRouter()

    useEffect(()=>{
      creditsCheck()
    },[])

    const creditsCheck = () => {
      if (userCourseList.credits == 5){
        router.push('/upgrade')
      } 
    }
  return (
    <div className='flex items-center justify-between'>
        <div className="">
        <h2 className='text-3xl text-[#E9EDEF]'>Hello, <span className='font-bold'>{user?.fullName}</span></h2>
        <p className='text-sm text-[#8696A0]'>Create New course with Ai, share with friends and earn from it..</p>
        </div>
        <Link href={userCourseList>=4?'/dashboard/upgrade':'/create-course'}>
        <Button className="hover:bg-black hover:border-spacing-2 bg-[#25D366]  text-white">+Create Ai Course</Button>
        </Link>
    </div>
  )
}

export default AddCourse
