'use client'
import React, { useContext, useEffect, useState } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { Chapters, CourseList } from '@/configs/Schema'
import { UserCourseListContext } from '@/app/_context/UserCourseList'
import { eq } from 'drizzle-orm'
import { useRouter } from 'next/navigation'
import DropDownOption from '../_components/DropDownOption'
import Upgrade from '../_components/Upgrade'

const page = () => {

  return (
    
    <div className="">
        <Upgrade />
    </div>
  )
}

export default page