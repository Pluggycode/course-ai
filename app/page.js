import Link from "next/link";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <main className="min-h-screen text-gray-900 bg-primary">
      <Header />
      <Hero />

      {/* Features */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 bg-primary">
        <Feature
          title="AI-Powered Learning"
          description="Generate complete courses from a single idea with cutting-edge AI."
        />
        <Feature
          title="Customize Chapters"
          description="Edit, reorganize, and personalize every chapter your way."
        />
        <Feature
          title="Minimalist UI"
          description="Designed for focus. No distractions, just pure learning."
        />
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 text-center bg-[#25D366]">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <p className="max-w-2xl mx-auto text-lg mb-10">
          Just input your course idea. Magna AI structures it into chapters, generates content, and even creates videos.
        </p>
        <Link href="/dashboard">

        <Button variant="outline" className='bg-primary text-gray-300'>Try It Now</Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-500 border-t">
        &copy; {new Date().getFullYear()} Magna AI. All rights reserved.
      </footer>
    </main>
  );
}

function Feature({ title, description }) {
  return (
    <div className="text-center shadow-xl bg-[#1E2A33] rounded-md border border-[#25D366]">
      <h3 className="text-xl font-semibold mb-2 mt-3 bg-[#25D366] rounded-md text-primary mr-10 ml-10">{title}</h3>
      <p className="text-text1">{description}</p>
    </div>
  );
}

