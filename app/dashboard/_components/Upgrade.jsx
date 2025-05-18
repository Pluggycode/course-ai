'use client'
import React, { useContext, useEffect, useState } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { Chapters, CourseList } from '@/configs/Schema'
import { UserCourseListContext } from '@/app/_context/UserCourseList'
import { eq } from 'drizzle-orm'
import { useRouter } from 'next/navigation'
import DropDownOption from '../_components/DropDownOption'

const Upgrade = () => {
    const Options = [
        {
            id:1,
            price:1.99,
            credits:15
        },
        {
            id:2,
            price:2.99,
            credits:30
        },
        {
            id:3,
            price:5.99,
            credits:75
        },
        {
            id:4,
            price:9.99,
            credits:150
        }
    ]
    const [selectedPrice,setSelectedprice] = useState(null);
    const [selectedOption,setSelectedOption] = useState(null);
    const {userCourseList,setUserCourseList} = useContext(UserCourseListContext);
    const router = useRouter()
    useEffect(() => {
        if(selectedOption!== null && Options[selectedOption])
        {
            const price = Options[selectedOption-1].price
            console.log(price)
            setSelectedprice(price)
                   }
    },[selectedOption])

    const onPaymentSuccess = async() => {
        const result = await db.update(CourseList)
        .set({
            credits:Options[selectedOption].credits+userCourseList.length
        }).where(eq(CourseList.userName,userCourseList.userName));
        router.replace('/dashboard')
        if(result)
        {
            <DropDownOption />
            // setUserCourseList={}=((prev)=>({
            //     ...prev,
            //     ['credits']:Options[selectedOption]?.credits+userCourseList.credits
            // }))
        }
        else{
            alert("server error")
        }
    }

  return (
    <div className='min-h-screen text-center p-10 md:px-20 lg:px-44'>
    <h2 className='text-3xl font-bold'> add more courses</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 items-center justify-center">
        <div className="">
            {Options.map((option,index)=>(
                <div key={index} className={`p-6 my-3 border bg-gradient-to-br from-primary to-blue-300 bg-[length:200%_200%] animate-gradient-move text-center rounded-lg
                     text-white cursor-pointer hover:scale-105 transition-all
                    ${selectedOption==option.id&&'bg-black'}
                    `}
                onClick={() => setSelectedOption(option.id)}>
                    <h2>Get {option.credits} credits {option.credits} course</h2>
                    <h2 className='font-bold text-2xl'>${option.price}</h2>
                </div>
            ))}
        </div>

        </div>
    </div>
  )
}

export default Upgrade