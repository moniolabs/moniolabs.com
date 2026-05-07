function Hero() {
  return (
    <div className="absolute h-[1080px] left-0 top-0 w-[1920px]" data-name="Hero">
      <div className="absolute bg-black h-[1080px] left-0 top-0 w-[1920px]" />
      <div className="absolute bg-[#121212] h-[80px] left-0 top-0 w-[1920px]" />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Hero />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[320px] not-italic text-[#ababba] text-[20px] top-[468px] w-[670px]">A premier partnership dedicated to bridging visionary digital innovation with unwavering institutional excellence, ensuring secure and seamless access to the next frontier of global finance.</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[320px] not-italic text-[70px] text-white top-[233px] whitespace-nowrap">
        <p className="leading-[normal] mb-0">Defining the New Era</p>
        <p className="leading-[normal]">of Institutional Finance.</p>
      </div>
    </div>
  );
}