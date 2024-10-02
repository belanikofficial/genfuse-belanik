"use client";

export default function Home() {
  return (
    <div className="bg-background bg-blend-screen text-black flex flex-col selection:bg-black/30 min-h-screen">
      {/* container */}
      <div className="container mx-auto px-8 flex flex-col items-center justify-center space-y-10 lg:flex-row lg:px-0 lg:space-x-8 lg:pb-10 xl:space-x-24">
        {/* top/left section */}
        <div className="flex flex-col space-y-2">
          {/* page title */}
          <h1 className="font-bold text-4xl lg:text-5xl">GenFuse AI</h1>

          {/* page description */}
          <p className="opacity-75 text-xl max-w-md lg:text-2xl">
            No-Code Generative AI builder
          </p>
          <p className="text-gray-600 pt-4 text-lg">
            Drag, drop and build GenAI chatbots, search engines, automations and
            more. <br /> Publish instantly. No coding required.
          </p>
        </div>

        {/* bottom/right section */}
        <div className="relative w-full max-w-md lg:max-w-lg">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdRkWA1J1xXZ4X7fGK_DXcS24YNv01cG6ahlI00Yi-zfnstcw/viewform?embedded=true"
            width="640"
            height="800"
          >
            Loading…
          </iframe>
          {/* card */}

          {/* background elements */}
          <div>
            <div className="absolute -z-10 -top-20 -right-20 aspect-square w-52 rounded-full bg-[#ffcdb2] blur-3xl"></div>
            <div className="absolute -z-10 -bottom-28 -left-32 aspect-square w-80 rounded-full bg-[#ffcdb2] blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
