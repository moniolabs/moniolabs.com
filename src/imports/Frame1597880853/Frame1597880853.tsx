import svgPaths from "./svg-1zmhcvdty1";
import { imgGroup } from "./svg-3wk55";

function Group1() {
  return (
    <div className="absolute inset-[13.26%_-3.79%_15.27%_-6.16%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-32.218px_-50.239px] mask-size-[2253.312px_664.836px] mix-blend-lighten opacity-74" style={{ maskImage: `url('${imgGroup}')` }} data-name="Group">
      <div className="absolute inset-[-41.95%_-12.59%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2562.94 1130.22">
          <g filter="url(#filter0_f_2093_62)" id="Group">
            <path d={svgPaths.p1a308000} fill="var(--fill-0, #001633)" id="Vector" />
            <path d={svgPaths.p33a7e00} fill="var(--fill-0, #00DFD4)" id="Vector_2" />
            <path d={svgPaths.pb637e00} fill="var(--fill-0, #00DFD4)" id="Vector_3" />
            <path d={svgPaths.p38b36280} fill="var(--fill-0, #00D661)" id="Vector_4" />
            <path d={svgPaths.p20644b00} fill="var(--fill-0, #00172A)" id="Vector_5" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1130.22" id="filter0_f_2093_62" width="2562.94" x="0" y="1.05703e-05">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_2093_62" stdDeviation="128.906" />
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
    <div className="absolute contents inset-[7.42%_-13.13%_15.27%_-7.89%]" data-name="Clip path group">
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