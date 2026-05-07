import svgPaths from "./svg-wih83fooap";

function Group() {
  return (
    <div className="absolute h-[24.381px] left-0 top-[6.07px] w-[31.279px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.2788 24.3809">
        <g id="Group 296">
          <g id="Subtract" />
          <path clipRule="evenodd" d={svgPaths.p32faa200} fill="var(--fill-0, #00D16A)" fillRule="evenodd" id="Union" />
          <path clipRule="evenodd" d={svgPaths.p2dde06f0} fill="var(--fill-0, #00D16A)" fillRule="evenodd" id="Union_2" />
          <path d={svgPaths.p61f5300} fill="var(--fill-0, #00D16A)" id="Union_3" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-[6.07px]">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-[6px]">
      <Group1 />
      <div className="absolute h-[16.113px] left-[41.14px] top-[6px] w-[104.574px]" data-name="Union">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.574 16.1133">
          <path d={svgPaths.p3a77f100} fill="var(--fill-0, white)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

export default function MoniolabsLogo() {
  return (
    <div className="relative shrink-0 w-[146px] h-[31px]">
      <Group2 />
    </div>
  );
}