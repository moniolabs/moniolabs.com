import svgPaths from "./svg-y8zosfh7us";

function Frame() {
  return (
    <div className="absolute h-[39.901px] left-[1109px] top-[161.31px] w-[40px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 39.9007">
        <g id="Frame">
          <path d={svgPaths.p2f883300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeWidth="2" />
          <path d={svgPaths.pa9cf100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[39.901px] left-[1109px] top-[231.14px] w-[40px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 39.9007">
        <g id="Frame">
          <path d={svgPaths.p2f883300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeWidth="2" />
          <path d={svgPaths.pa9cf100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[339px] top-[85px]">
      <p className="absolute font-['Nunito:Regular',sans-serif] font-normal h-[41.896px] leading-[42px] left-[339px] text-[#00d661] text-[24px] top-[85px] uppercase w-[154px]">Our license</p>
      <p className="absolute font-['Nunito:Bold',sans-serif] font-bold h-[69.826px] leading-[70px] left-[339px] text-[48px] text-white top-[146.35px] w-[438px]">{`Regulated Security `}</p>
      <p className="absolute font-['Nunito:Light',sans-serif] font-light h-[69.826px] leading-[70px] left-[339px] text-[48px] text-white top-[216.17px] w-[280px]">Verified Trust</p>
      <div className="-translate-x-1/2 absolute bg-gradient-to-b from-[#00d661] h-[139.653px] left-[calc(50%+102.5px)] to-[#004674] top-[146.35px] via-1/2 via-[#027fa8] w-[5px]" />
      <div className="absolute font-['Nunito:Light',sans-serif] font-light h-[139.653px] leading-[0] left-[1180px] text-[32px] text-white top-[146.35px] w-[318px] whitespace-pre-wrap">
        <p className="leading-[70px] mb-0">{`USA MSB Registered  `}</p>
        <p className="leading-[70px]">HK TCSP Licensed</p>
      </div>
      <Frame />
      <Frame1 />
    </div>
  );
}

export default function OurPartners() {
  return (
    <div className="bg-black relative size-full" data-name="OurPartners">
      <Group />
    </div>
  );
}