import svgPaths from "./svg-doe659q5be";

function Group() {
  return (
    <div className="absolute h-[21.333px] left-0 top-[7.22px] w-[27.369px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.3691 21.3333">
        <g id="Group 296">
          <g id="Subtract" />
          <path clipRule="evenodd" d={svgPaths.p29f21480} fill="var(--fill-0, #00D16A)" fillRule="evenodd" id="Union" />
          <path clipRule="evenodd" d={svgPaths.pb513b80} fill="var(--fill-0, #00D16A)" fillRule="evenodd" id="Union_2" />
          <path d={svgPaths.p16f9a040} fill="var(--fill-0, #00D16A)" id="Union_3" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-[7.22px]">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-[6.91px]">
      <Group1 />
      <div className="absolute h-[14.349px] left-[31.84px] top-[6.91px] w-[91.504px]" data-name="Union">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91.5039 14.3486">
          <path d={svgPaths.p33470200} fill="var(--fill-0, white)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

export default function MoniolabsLogo() {
  return (
    <div className="relative shrink-0 w-[124px] h-[32px]">
      <Group2 />
    </div>
  );
}