import svgPaths from "./svg-bs6a6ootgg";
import { imgGroup } from "./svg-jo5se";

function Group1() {
  return (
    <div className="absolute inset-[7.56%_7.71%_0_1.43%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-33px_-55.088px] mask-size-[2308px_729px] mix-blend-lighten opacity-74" style={{ maskImage: `url('${imgGroup}')` }} data-name="Group">
      <div className="absolute inset-[-38.26%_-12.29%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2612.62 1189.54">
          <g filter="url(#filter0_f_2093_21)" id="Group">
            <path d={svgPaths.p1e305180} fill="var(--fill-0, #001633)" id="Vector" />
            <path d={svgPaths.p1d530900} fill="var(--fill-0, #00DFD4)" id="Vector_2" />
            <path d={svgPaths.p3168c300} fill="var(--fill-0, #00DFD4)" id="Vector_3" />
            <path d={svgPaths.p15617df0} fill="var(--fill-0, #00D661)" id="Vector_4" />
            <path d={svgPaths.p106b8100} fill="var(--fill-0, #00172A)" id="Vector_5" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1189.54" id="filter0_f_2093_21" width="2612.62" x="0" y="1.05703e-05">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_2093_21" stdDeviation="128.906" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[7.56%_7.71%_0_1.43%] mix-blend-lighten" data-name="Group">
      <Group1 />
    </div>
  );
}

export default function ClipPathGroup() {
  return (
    <div className="relative size-full" data-name="Clip path group">
      <Group />
    </div>
  );
}