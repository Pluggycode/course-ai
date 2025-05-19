import { SignIn } from '@clerk/nextjs';

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

      {/* SignIn Form Centered */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <SignIn redirectUrl="/dashboard" />
      </div>
    </div>
  );
}
