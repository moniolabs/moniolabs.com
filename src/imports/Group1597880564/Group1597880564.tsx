import svgPaths from "./svg-eyoxe3ier4";

function Group() {
  return (
    <div className="absolute h-[30px] left-0 top-[0.15px] w-[38.488px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.4878 30">
        <g id="Group 296">
          <g id="Subtract" />
          <path clipRule="evenodd" d={svgPaths.p3f9c5080} fill="var(--fill-0, #00D16A)" fillRule="evenodd" id="Union" />
          <path clipRule="evenodd" d={svgPaths.p23c4a580} fill="var(--fill-0, #00D16A)" fillRule="evenodd" id="Union_2" />
          <path d={svgPaths.p1b99f180} fill="var(--fill-0, #00D16A)" id="Union_3" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-[0.15px]">
      <Group />
    </div>
  );
}

export default function MoniolabsLogo() {
  return (
    <div className="relative shrink-0 w-[173.45px] h-[30.15px]" data-name="Moniolabs Logo">
      <Group1 />
      <div className="absolute h-[19.897px] left-[44.78px] top-0 w-[128.677px]" data-name="Union">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128.677 19.8975">
          <path d={svgPaths.p93f7400} fill="var(--fill-0, white)" id="Union" />
        </svg>
      </div>
    </div>
  );
}