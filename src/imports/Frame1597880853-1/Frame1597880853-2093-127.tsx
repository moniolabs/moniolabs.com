import svgPaths from "./svg-rjq5m1pnlt";

function Group1() {
  return (
    <div className="absolute inset-[13.26%_-3.79%_15.27%_-6.16%] mix-blend-lighten opacity-74" data-name="Group">
      <div className="absolute inset-[-32.5%_-12.59%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2562.94 1308.88">
          <g filter="url(#filter0_f_2093_132)" id="Group">
            <path d={svgPaths.p2440df00} fill="var(--fill-0, #001633)" id="Vector" />
            <path d={svgPaths.p35102000} fill="var(--fill-0, #0055FF)" id="Vector_2" />
            <path d={svgPaths.p2fb5c780} fill="var(--fill-0, #00DFD4)" id="Vector_3" />
            <path d={svgPaths.p221919a0} fill="var(--fill-0, #00A661)" id="Vector_4" />
            <path d={svgPaths.pd5b7780} fill="var(--fill-0, #00172A)" id="Vector_5" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1308.88" id="filter0_f_2093_132" width="2562.94" x="0" y="1.05703e-05">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_2093_132" stdDeviation="128.906" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[13.26%_-3.79%_15.27%_-6.16%] mix-blend-lighten" data-name="Group">
      <Group1 />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[13.26%_-3.79%_15.27%_-6.16%]" data-name="Clip path group">
      <Group />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <ClipPathGroup />
    </div>
  );
}