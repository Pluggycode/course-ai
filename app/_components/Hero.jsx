'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import Header from './Header';
import BlurText from './Blurtext';
import GradientText from './GradientText';
import SpotlightCard from './SpotlightCard';
import DotGrid from './DotGrid';
import ScrollVelocity from './ScrollVelocity';

const Hero = () => {
  const { isSignedIn, isLoaded } = useUser();
  const velocity = 50;

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div className="grid items-center">
      <section className="relative h-screen overflow-hidden">
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

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-30" />

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4">
          <BlurText
            text="AI Course Generator"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white"
          />
          <span className="block font-bold text-secondary mt-2 text-sm sm:text-base">
            Custom Learning Path Powered by AI
          </span>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-xl sm:max-w-2xl">
            Unlock personalized education with AI-driven course creation. Tailor your learning journey to fit your unique goals and pace.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <Link href="/create-course">
              <Button className="px-8 py-3 bg-secondary text-text1 rounded-md hover:bg-black transition duration-200">
                Get Started
              </Button>
            </Link>
            <Link href="/dashboard/explore">
              <Button className="w-36 border border-secondary">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class"
                >
                  Explore
                </GradientText>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-20 bg-primary max-w-7xl mx-auto">
        <SpotlightCard className="w-full border border-green-500" spotlightColor="rgba(0, 229, 255, 0.7)">
          <h2 className="text-[#25D366] font-bold text-xl mt-4">AI-Powered Learning</h2>
          <p className="text-white mt-2">Generate complete courses from a single idea with cutting-edge AI.</p>
        </SpotlightCard>
        <SpotlightCard className="w-full" spotlightColor="rgba(0, 229, 255, 0.7)">
          <h2 className="text-[#25D366] font-bold text-xl mt-4">Customize Chapters</h2>
          <p className="text-white mt-2">Edit, reorganize, and personalize every chapter your way.</p>
        </SpotlightCard>
        <SpotlightCard className="w-full" spotlightColor="rgba(0, 229, 255, 0.7)">
          <h2 className="text-[#25D366] font-bold text-xl mt-4">Minimalist UI</h2>
          <p className="text-white mt-2">Designed for focus. No distractions, just pure learning.</p>
        </SpotlightCard>
      </div>

      {/* How It Works Section */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <DotGrid
            dotSize={6}
            gap={15}
            baseColor="#25D366"
            activeColor="#00d8ff"
            proximity={100}
            shockRadius={200}
            shockStrength={6}
            resistance={750}
            returnDuration={1.0}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <section className="bg-[#0F1A1C]/60 px-6 py-10 rounded-lg mb-30 max-w-xl">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class text-2xl sm:text-3xl font-bold"
            >
              How It Works?
            </GradientText>
            <p className="text-base sm:text-lg text-gray-400 mb-10">
              Just input your course idea. Magna AI structures it into chapters, generates content, and even creates videos.
            </p>
            <Link href="/dashboard">
              <Button variant="outline" className="bg-primary text-gray-100 hover:bg-white hover:text-primary transition">
                Try It Now
              </Button>
            </Link>
          </section>

          <ScrollVelocity
            texts={['Magna-AI', 'AI Powered E-Learning Platform']}
            velocity={velocity}
            className="custom-scroll-text text-white mt-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
