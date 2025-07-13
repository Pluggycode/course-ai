import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
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

      {/* Optional: Dark overlay for better readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Centered SignUp Form */}
      <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
        <div className="max-w-sm w-full bg-white/90 rounded-xl p-6 shadow-lg">
          <SignUp redirectUrl="/dashboard" />
        </div>
      </div>
    </div>
  );
}
