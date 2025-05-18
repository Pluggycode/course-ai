'use client'
import React from 'react'
import { SignOutButton,SignedIn, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

const Logout = () => {
  return (
    <div className="mt-10 grid gap-5 justify-start bg-gradient-to-br from-primary to-blue-300
    bg-[length:200%_200%] animate-gradient-move rounded-md p-20">
        <div className="grid  ">
          <div className="flex">
          <Image src={'/favicon.ico'} width={40} height={40} alt='logo' className='bg-white'/>
          <h2 className='mt-3 ml-2 text-white'>Magna AI.</h2>
          </div>
          <p className="mt-2">
        Unlock personalized education with AI-driven course creation.Tailor your learning journey to fit your unique goals and pace...
      </p>
        </div> 
        <div className=" gap-2">
          <h2 className='text-2xl text-white font-bold'>COMPANY</h2>
          <h3>Privacy Policy for Magna AI Effective Date: [Insert Date]</h3>
          <h3 className='font-bold mt-2'>Introduction</h3>
          <p>Magna AI,we is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our application.
            By using Magna AI, you agree to the collection and use of information as outlined in this policy. <br/>
            <h3 className='font-bold mt-2'>1. Information We Collect</h3>
            When you use Magna AI, we collect the following information:<br />
            Text Input: We collect the text input you provide when requesting the creation of a course.<br />
            This information is collected solely to generate course content using the Gemini API.<br/>
            <h3 className='font-bold mt-2'>2. How We Use Your Information</h3>
            The data collected is used for the following purposes:<br/>
            To generate a course based on the text input you provide.<br/>
            To improve our services and user experience.<br/>
            <h3 className='font-bold mt-2'>3. How We Share Your Information</h3>
            We do not sell, rent, or share your personal information with third parties, except as necessary to provide you with the services of Magna AI. Specifically:We take reasonable steps to protect your information from unauthorized access, disclosure, or misuse. This includes using encryption and secure communication channels.
            However, please be aware that no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
            Gemini API: Your text input is processed through the Gemini API to create the course content. The information shared with this service is strictly limited to what is necessary for generating the course.<br/>
            <h3 className='font-bold mt-2'>4. Data Security</h3>
            We take reasonable steps to protect your information from unauthorized access, disclosure, or misuse. This includes using encryption and secure communication channels.<br />
            However, please be aware that no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.<br />
            <h3 className='font-bold mt-2'>5. Your Rights</h3>
            You have the following rights concerning your data:<br />
            Access: You can request access to the information we collect about you.<br />
            Correction: You can request corrections to any inaccuracies in your information.<br />
            Deletion: You may request the deletion of your data, subject to any legal obligations we may have to retain it.<br />
            <h3 className='font-bold mt-2'>6. Third-Party Links</h3>
            Magna AI may contain links to third-party websites or services that are not operated by us. We are not responsible for the privacy practices of these third-party sites.<br/>
            <h3 className='font-bold mt-2'>7. Changes to This Privacy Policy</h3>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page, with the "Effective Date" updated accordingly.<br />
            <h3 className='font-bold mt-2'>8. Contact Us</h3>
            If you have any questions about this Privacy Policy, please contact us at:<br />
            Email: [Inse] <br />

            </p>

          </div> 
    </div>
  )
}

export default Logout