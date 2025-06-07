import Link from "next/link";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { Button } from "@/components/ui/button";
import SplashCursor from './SplashCursor'


export default function LandingPage() {
  return (
    <main className="min-h-screen text-gray-900 bg-primary">
      <Hero />

      {/* Features */}
      

      {/* How It Works */}
      <SplashCursor />

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-500 border-t">
        &copy; {new Date().getFullYear()} Magna AI. All rights reserved.
      </footer>
    </main>
  );
}

