'use client'
import React, { useState } from 'react'
import SideBar from './_components/SideBar'
import Header from './_components/Header'
import UserCourseList from './_components/UserCourseList'
import { UserCourseListContext } from '../_context/UserCourseList'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const DashboardLayout = ({ children }) => {

    const [userCourseList, setUserCourseList ] = useState([]);
    return (

        <UserCourseListContext.Provider value={{userCourseList, setUserCourseList}}>
            <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}>
        <div className="bg-[#121B22] min-h-screen">
            <div className="md:w-64 hidden md:block">
                <SideBar />
            </div>
            <div className='md:ml-64 '>
                <Header />
                <div className="p-10">{children}</div>
            </div>
        </div>
        </PayPalScriptProvider>
        </UserCourseListContext.Provider>
    )
}

export default DashboardLayout