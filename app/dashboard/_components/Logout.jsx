'use client';

import React from 'react';
import Image from 'next/image';
import { SignOutButton, useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

const Logout = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-[#0B141A] text-white px-4 py-8 sm:px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/ai12.png"
            width={40}
            height={40}
            alt="Magna AI Logo"
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold text-[#25D366]">Magna AI</h1>
        </div>
        {user && (
          <SignOutButton>
            <Button className="bg-[#25D366] text-primary hover:bg-white hover:text-[#25D366]">
              Sign Out
            </Button>
          </SignOutButton>
        )}
      </div>

      <p className="text-gray-300 text-sm mb-8 max-w-3xl">
        Unlock personalized education with AI-driven course creation. Tailor your learning journey to fit your unique goals and pace.
      </p>

      {/* Privacy Policy */}
      <div className="bg-[#1E2A33] p-6 sm:p-8 rounded-lg shadow-md max-w-4xl">
        <h2 className="text-2xl font-bold text-[#25D366] mb-4">Privacy Policy</h2>
        <p className="text-gray-300 text-sm mb-6">
          Effective Date: <span className="italic">[Insert Date]</span>
        </p>

        {[
          {
            title: '1. Information We Collect',
            content: (
              <>
                When you use Magna AI, we collect the following information:
                <br />• Text Input: The text you provide for course creation using the Gemini API.
              </>
            ),
          },
          {
            title: '2. How We Use Your Information',
            content: (
              <>
                We use collected data to:
                <br />• Generate personalized courses.
                <br />• Improve our services and user experience.
              </>
            ),
          },
          {
            title: '3. How We Share Your Information',
            content: (
              <>
                We do not sell or rent your personal data. Information may be shared with:
                <br />• Gemini API: Only the necessary data is passed to generate your course content.
              </>
            ),
          },
          {
            title: '4. Data Security',
            content:
              'We use encryption and secure communication, but please note no method is 100% secure.',
          },
          {
            title: '5. Your Rights',
            content: (
              <>
                • Access: View data we’ve collected.
                <br />• Correction: Fix inaccuracies.
                <br />• Deletion: Request data removal (subject to legal requirements).
              </>
            ),
          },
          {
            title: '6. Third-Party Links',
            content:
              'Magna AI may link to third-party websites. We are not responsible for their privacy practices.',
          },
          {
            title: '7. Changes to This Privacy Policy',
            content:
              'We may update this Privacy Policy from time to time. Updates will be posted here with a new "Effective Date".',
          },
          {
            title: '8. Contact Us',
            content: (
              <>
                If you have any questions, please contact us at: <br />
                <span className="text-[#25D366]">Email: [Insert Email]</span>
              </>
            ),
          },
        ].map((section, idx) => (
          <div className="mb-6" key={idx}>
            <h3 className="tex
