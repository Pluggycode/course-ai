'use client';

import React, { useContext, useEffect, useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { CourseList } from '@/configs/Schema';
import { UserCourseListContext } from '@/app/_context/UserCourseList';
import { eq } from 'drizzle-orm';
import { db } from '@/configs/db';
import { useRouter } from 'next/navigation';

const Upgrade = () => {
  const Options = [
    { id: 1, price: 1.99, credits: 15 },
    { id: 2, price: 2.99, credits: 30 },
    { id: 3, price: 5.99, credits: 75 },
    { id: 4, price: 9.99, credits: 150 }
  ];

  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const { userCourseList, setUserCourseList } = useContext(UserCourseListContext);
  const router = useRouter();

  useEffect(() => {
    if (selectedOption !== null && Options[selectedOption - 1]) {
      setSelectedPrice(Options[selectedOption - 1].price);
    }
  }, [selectedOption]);

  const onPaymentSuccess = async () => {
    if (!userCourseList?.userName) return;

    try {
      const creditsToAdd = Options[selectedOption - 1]?.credits || 0;

      await db.update(CourseList)
        .set({
          credits: creditsToAdd + (userCourseList?.credits || 0)
        })
        .where(eq(CourseList.userName, userCourseList.userName));

      setUserCourseList(prev => ({
        ...prev,
        credits: (prev.credits || 0) + creditsToAdd
      }));

      router.replace('/dashboard');
    } catch (err) {
      console.error("Payment success but DB update failed:", err);
      alert("An error occurred.");
    }
  };

  return (
    <div className='min-h-screen text-center p-10 md:px-20 lg:px-44'>
      <h2 className='text-3xl font-bold text-text1'>Add More Courses</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 items-center justify-center">
        <div>
          {Options.map((option) => (
            <div
              key={option.id}
              className={`p-6 my-3 cursor-pointer text-white rounded-lg text-center transition-all
                ${selectedOption === option.id ? 'bg-black border border-[#25D366]' : 'bg-[#25D366] hover:bg-[#1E2A33]'}
              `}
              onClick={() => setSelectedOption(option.id)}
            >
              <h2>Get {option.credits} credits</h2>
              <h2 className='font-bold text-2xl'>${option.price}</h2>
            </div>
          ))}
        </div>

        <div className='p-6 border border-[#25D366] rounded-lg bg-[#1E2A33] text-white'>
          {typeof window !== 'undefined' && selectedPrice ? (
            <PayPalButtons
              style={{ layout: 'vertical', color: 'blue', shape: 'pill', label: 'pay' }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: selectedPrice.toFixed(2),
                      },
                      description: `${Options[selectedOption - 1].credits} Credits Purchase`
                    },
                  ],
                });
              }}
              onApprove={async (data, actions) => {
                const details = await actions.order.capture();
                console.log('Payment approved:', details);
                onPaymentSuccess();
              }}
              onError={(err) => {
                console.error("PayPal Checkout onError", err);
                alert("Payment failed. Please try again.");
              }}
            />
          ) : (
            <p className='text-sm'>Select a credit pack to continue</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Upgrade;
