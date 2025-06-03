'use client'
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import Header from './Header';

const Hero = () => {
    const { isSignedIn, isLoaded } = useUser();

  return (
    <section className="relative  h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/my-videos.mp4" type="video/mp4" />
      </video>

      <Header />
      {/* Overlay (Darken the video a bit for better contrast) */}
      <div className="absolute top-0 left-0 w-full h-full  z-10" />

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          AI Course Generator
          <span className="block font-bold text-secondary mt-2">
            Custom Learning Path Powered by AI
          </span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-200 max-w-2xl">
          Unlock personalized education with AI-driven course creation. Tailor your learning journey to fit your unique goals and pace.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/dashboard/create-course">
            <Button className="px-8 py-3 bg-secondary text-text1 rounded-md hover:bg-black transition duration-200">
              Get Started
            </Button>
          </Link>
          
        </div>
      </div>
    </section>

  );
};

export default Hero;
