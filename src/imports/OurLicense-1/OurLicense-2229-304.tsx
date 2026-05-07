import svgPaths from "./svg-xx7bzwiccr";

function Paragraph() {
  return (
    <div className="h-[70px] relative shrink-0 w-[425px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Nunito:Bold',sans-serif] font-bold leading-[70px] left-[0.22px] text-[48px] text-white top-[-1.43px] whitespace-nowrap">Regulated Security</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[425px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Nunito:Light',sans-serif] font-light leading-[70px] left-[0.22px] text-[48px] text-white top-[-1.43px] whitespace-nowrap">Verified Trust</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[140px] items-start left-[299.5px] top-[104.87px] w-[425px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute inset-[7.66%_14.16%_10.22%_14.17%]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.667 32.8477">
        <g id="Frame">
          <path d={svgPaths.p29090800} fill="url(#paint0_linear_2228_243)" id="Union" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2228_243" x1="14.3335" x2="14.3335" y1="0" y2="32.8477">
            <stop stopColor="#00FF74" />
            <stop offset="0.0714286" stopColor="#01E07E" />
            <stop offset="0.142857" stopColor="#00D36D" />
            <stop offset="0.214286" stopColor="#03DEAC" />
            <stop offset="0.285714" stopColor="#01C6AF" />
            <stop offset="0.357143" stopColor="#00999A" />
            <stop offset="0.428571" stopColor="#008CA2" />
            <stop offset="0.5" stopColor="#027FA8" />
            <stop offset="0.571429" stopColor="#0177A0" />
            <stop offset="0.642857" stopColor="#006E99" />
            <stop offset="0.714286" stopColor="#006691" />
            <stop offset="0.785714" stopColor="#005E8A" />
            <stop offset="0.857143" stopColor="#005683" />
            <stop offset="0.928571" stopColor="#004E7B" />
            <stop offset="1" stopColor="#004674" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Frame />
    </div>
  );
}

function CheckmarkIcon() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[0.13px] size-[40px] top-0" data-name="CheckmarkIcon">
      <Icon />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[40px] left-[60px] top-0 w-[302px]" data-name="Text">
      <p className="absolute font-['Nunito:Light',sans-serif] font-light leading-[40px] left-[0.13px] text-[32px] text-white top-[0.21px] whitespace-nowrap">USA MSB Registered</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[362px]" data-name="Container">
      <CheckmarkIcon />
      <Text />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute inset-[7.66%_14.16%_10.22%_14.17%]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.667 32.8477">
        <g id="Frame">
          <path d={svgPaths.p29090800} fill="url(#paint0_linear_2228_238)" id="Union" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2228_238" x1="14.3335" x2="14.3335" y1="0" y2="32.8477">
            <stop stopColor="#00FF74" />
            <stop offset="0.0714286" stopColor="#01E07E" />
            <stop offset="0.142857" stopColor="#00D36D" />
            <stop offset="0.214286" stopColor="#03DEAC" />
            <stop offset="0.285714" stopColor="#01C6AF" />
            <stop offset="0.357143" stopColor="#00999A" />
            <stop offset="0.428571" stopColor="#008CA2" />
            <stop offset="0.5" stopColor="#027FA8" />
            <stop offset="0.571429" stopColor="#0177A0" />
            <stop offset="0.642857" stopColor="#006E99" />
            <stop offset="0.714286" stopColor="#006691" />
            <stop offset="0.785714" stopColor="#005E8A" />
            <stop offset="0.857143" stopColor="#005683" />
            <stop offset="0.928571" stopColor="#004E7B" />
            <stop offset="1" stopColor="#004674" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Frame1 />
    </div>
  );
}

function CheckmarkIcon1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[0.13px] size-[40px] top-0" data-name="CheckmarkIcon">
      <Icon1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[40px] left-[60px] top-0 w-[262px]" data-name="Text">
      <p className="absolute font-['Nunito:Light',sans-serif] font-light leading-[40px] left-[0.13px] text-[32px] text-white top-[0.21px] whitespace-nowrap">HK TCSP Licensed</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[40px] left-0 top-[72px] w-[362px]" data-name="Container">
      <CheckmarkIcon1 />
      <Text1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[112px] left-[1122px] top-[118.87px] w-[362px]" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

export default function OurLicense() {
  return (
    <div className="bg-black relative size-full" data-name="OurLicense">
      <p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[36px] left-[299.5px] text-[#00d661] text-[24px] top-[48.87px] tracking-[0.6px] uppercase whitespace-nowrap">Our license</p>
      <Container />
      <Container1 />
      <div className="-translate-x-1/2 absolute flex h-[120px] items-center justify-center left-[calc(50%+47px)] top-[114.87px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[120px]">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 1.5">
                <line id="Line 16" opacity="0.52" stroke="url(#paint0_linear_2229_309)" strokeWidth="1.5" x2="120" y1="0.75" y2="0.75" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2229_309" x1="0" x2="120" y1="2" y2="2">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.25" stopColor="#169AFF" stopOpacity="0.5" />
                    <stop offset="0.7" stopColor="#00D661" />
                    <stop offset="1" stopColor="#999999" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}