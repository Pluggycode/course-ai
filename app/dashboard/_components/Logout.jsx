'use client'
import React from 'react'
import { SignOutButton,SignedIn, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

const Logout = () => {
  return (
   <div className="min-h-screen bg-[#0B141A] text-white px-6 py-10 md:px-20 lg:px-40">
  {/* Header */}
  <div className="flex items-center space-x-3 mb-6">
    <Image src="/ai12.png" width={40} height={40} alt="logo" className="rounded-full" />
    <h1 className="text-2xl font-bold text-[#25D366]">Magna AI</h1>
  </div>

  <p className="text-gray-300 text-sm mb-8">
    Unlock personalized education with AI-driven course creation. Tailor your learning journey to fit your unique goals and pace.
  </p>

  {/* Privacy Policy */}
  <div className="bg-[#1E2A33] p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold text-[#25D366] mb-4">Privacy Policy</h2>
    <p className="text-gray-300 text-sm mb-6">Effective Date: <span className="italic">[Insert Date]</span></p>

    {/* Section 1 */}
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-[#25D366] mb-2">1. Information We Collect</h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        When you use Magna AI, we collect the following information:
        <br />• Text Input: The text you provide for course creation using the Gemini API.
      </p>
    </div>

    {/* Section 2 */}
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-[#25D366] mb-2">2. How We Use Your Information</h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        We use collected data to:
        <br />• Generate personalized courses.
        <br />• Improve our services and user experience.
      </p>
    </div>

    {/* Section 3 */}
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-[#25D366] mb-2">3. How We Share Your Information</h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        We do not sell or rent your personal data. Information may be shared with:
        <br />• Gemini API: Only the necessary data is passed to generate your course content.
      </p>
    </div>

    {/* Section 4 */}
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-[#25D366] mb-2">4. Data Security</h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        We use encryption and secure communication, but please note no method is 100% secure.
      </p>
    </div>

    {/* Section 5 */}
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-[#25D366] mb-2">5. Your Rights</h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        • Access: View data we’ve collected.
        <br />• Correction: Fix inaccuracies.
        <br />• Deletion: Request data removal (subject to legal requirements).
      </p>
    </div>

    {/* Section 6 */}
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-[#25D366] mb-2">6. Third-Party Links</h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        Magna AI may link to third-party websites. We are not responsible for their privacy practices.
      </p>
    </div>

    {/* Section 7 */}
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-[#25D366] mb-2">7. Changes to This Privacy Policy</h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        We may update this Privacy Policy from time to time. Updates will be posted here with a new "Effective Date".
      </p>
    </div>

    {/* Section 8 */}
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-[#25D366] mb-2">8. Contact Us</h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        If you have any questions, please contact us at: <br />
        <span className="text-[#25D366]">Email: [Insert Email]</span>
      </p>
    </div>
  </div>
</div>

  )
}

export default Logout