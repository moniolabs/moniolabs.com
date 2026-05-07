export default function Group() {
  return (
    <div className="relative size-full">
      <div className="-translate-x-1/2 absolute bg-gradient-to-b from-white h-[800px] left-1/2 rounded-[24px] to-[rgba(0,0,0,0)] top-0 w-[1280px]" />
      <p className="absolute font-['Nunito:Regular',sans-serif] font-normal h-[42px] leading-[normal] left-[calc(50%-640px)] text-[#00d661] text-[32px] top-[595px] w-[367px]">Our Solutions</p>
      <div className="absolute font-['Nunito:SemiBold',sans-serif] font-semibold h-[143px] leading-[0] left-[calc(50%-640px)] text-[48px] text-white top-[657px] w-[1059px] whitespace-pre-wrap">
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[70px] mb-0">{`All-in-One Infrastructure `}</p>
        <p className="font-['Nunito:Light',sans-serif] font-light leading-[70px]">Accelerating the Future of Digital Payments</p>
      </div>
    </div>
  );
}