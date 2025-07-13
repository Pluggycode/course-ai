'use client'
import React from 'react';
import Image from 'next/image';

const Logout = () => {
  const sections = [
    {
      title: '1. Information We Collect',
      content: `When you use Magna AI, we collect the following information:
• Text Input: The text you provide for course creation using the Gemini API.`
    },
    {
      title: '2. How We Use Your Information',
      content: `We use collected data to:
• Generate personalized courses.
• Improve our services and user experience.`
    },
    {
      title: '3. How We Share Your Information',
      content: `We do not sell or rent your personal data. Information may be shared with:
• Gemini API: Only the necessary data is passed to generate your course content.`
    },
    {
      title: '4. Data Security',
      content: `We use encryption and secure communication, but please note no method is 100% secure.`
    },
    {
      title: '5. Your Rights',
      content: `• Access: View data we’ve collected.
• Correction: Fix inaccuracies.
• Deletion: Request data removal (subject to legal requirements).`
    },
    {
      title: '6. Third-Party Links',
      content: `Magna AI may link to third-party websites. We are not responsible for their privacy practices.`
    },
    {
      title: '7. Changes to This Privacy Policy',
      content: `We may update this Privacy Policy from time to time. Updates will be posted here with a new "Effective Date".`
    },
    {
      title: '8. Contact Us',
      content: `If you have any questions, please contact us at:
Email: [Insert Email]`
    },
  ];

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

      {/* Privacy Policy Sections */}
      <div className="bg-[#1E2A33] p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-[#25D366] mb-6">Privacy Policy</h2>
        <p className="text-gray-300 text-sm mb-10">Effective Date: <span className="italic">[Insert Date]</span></p>

        {sections.map((section, idx) => (
          <div className="mb-6" key={idx}>
            <h3 className="text-lg font-semibold text-[#25D366] mb-2">{section.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logout;
