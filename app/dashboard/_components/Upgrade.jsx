'use client';
import React, { useContext, useEffect, useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { UserCourseListContext } from '@/app/_context/UserCourseList';
import { useRouter } from 'next/navigation';
import { db } from '@/configs/db';
import { eq } from 'drizzle-orm';
import { CourseList } from '@/configs/Schema';

const Upgrade = () => {
  const Options = [
    { id: 1, price: 1.99, credits: 15 },
    { id: 2, price: 2.99, credits: 30 },
    { id: 3, price: 5.99, credits: 75 },
    { id: 4, price: 9.99, credits: 150 }
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { userCourseList, setUserCourseList } = useContext(UserCourseListContext);
  const router = useRouter();

  const selectedPrice = selectedOption ? Options.find(opt => opt.id === selectedOption)?.price : null;

  const onPaymentSuccess = async () => {
    try {
      if (!userCourseList || selectedOption === null) return;

      setIsProcessing(true);
      const creditsToAdd = Options.find(opt => opt.id === selectedOption)?.credits || 0;

      const updateRes = await db.update(CourseList)
        .set({
          credits: creditsToAdd + (userCourseList?.credits || 0)
        })
        .where(eq(CourseList.userName, userCourseList?.userName));

      if (updateRes) {
