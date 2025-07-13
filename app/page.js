import Link from "next/link";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { Button } from "@/components/ui/button";
import SplashCursor from "./SplashCursor";

export default function LandingPage() {
  return (
    <main className="min-h-screen text-gray-900 bg-primary flex flex-col justify-between">
      {/* Hero Section */}
      <Hero />

      {/* Future Sections: Features, Testimonials, etc. */}
      {/* <Features /> */}
      {/* <HowItWorks /> */}

      {/* Footer */}
      <footer className="w-full px-4 sm:px-8 py-6 text-center text-sm text-gray-400 border-t border-gray-600 bg-primary">
        &copy; {new Date().getFullYear()} Magna AI. All rights reserved.
        <div className="mt-2">
          <Link href="/privacy-policy" className="underline hover:text-white">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="/terms" className="underline hover:text-white">
            Terms of Service
          </Link>
        </div>
      </footer>
    </main>
  );
}
