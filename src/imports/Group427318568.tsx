import svgPaths from "./svg-mmrupoyoch";

function Group() {
  return (
    <div className="absolute h-[36.335px] left-0 top-[3.66px] w-[46.615px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.6155 36.3353">
        <g id="Group 296">
          <g id="Subtract" />
          <path clipRule="evenodd" d={svgPaths.p20da6300} fill="var(--fill-0, #00D661)" fillRule="evenodd" id="Union" />
          <path clipRule="evenodd" d={svgPaths.p25ac0280} fill="var(--fill-0, #00D661)" fillRule="evenodd" id="Union_2" />
          <path d={svgPaths.p25372fb0} fill="var(--fill-0, #00D661)" id="Union_3" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-[3.66px]">
      <Group />
    </div>
  );
}

export default function Group2() {
  return (
    <div className="relative size-full">
      <Group1 />
      <p className="absolute font-['Nunito:Bold',sans-serif] font-bold leading-[normal] left-[50.78px] text-[27.493px] text-white top-0 tracking-[-0.5499px] whitespace-nowrap">Monio</p>
      <p className="absolute font-['Nunito:Light',sans-serif] font-light leading-[normal] left-[128.51px] text-[27.493px] text-white top-0 tracking-[-0.5499px] whitespace-nowrap">Labs</p>
    </div>
  );
}