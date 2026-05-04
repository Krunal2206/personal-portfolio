const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      {/* Animated logo placeholder */}
      <div className="relative w-16 h-16">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#b49bff] border-r-[#b49bff] animate-spin" />
        {/* Inner pulsing dot */}
        <div className="absolute inset-3 rounded-full bg-[#b49bff] opacity-20 animate-pulse" />
      </div>

      {/* Skeleton for hero section */}
      <div className="w-full max-w-6xl px-6 mt-8 flex flex-col lg:flex-row items-center gap-10">
        {/* Left skeleton */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <div className="h-6 w-32 rounded-full bg-white/10 animate-pulse" />
          <div className="h-10 w-64 rounded-lg bg-white/10 animate-pulse" />
          <div className="h-10 w-48 rounded-lg bg-white/10 animate-pulse" />
          <div className="h-4 w-full rounded bg-white/10 animate-pulse" />
          <div className="h-4 w-5/6 rounded bg-white/10 animate-pulse" />
          <div className="h-4 w-4/6 rounded bg-white/10 animate-pulse" />
          <div className="h-10 w-36 rounded-full bg-white/10 animate-pulse mt-2" />
        </div>

        {/* Right skeleton */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-[300px] h-[300px] rounded-full bg-white/5 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
