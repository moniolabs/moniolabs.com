import svgPaths from "./svg-vijh8f7xto";

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-[161px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[36px] left-[0.21px] text-[#00d661] text-[24px] top-0 tracking-[0.6px] uppercase whitespace-nowrap">Our license</p>
      </div>
    </div>
  );
}

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

function Container2() {
  return (
    <div className="h-[140px] relative shrink-0 w-[425px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[196px] items-start left-[48px] pl-[-0.219px] top-[6.87px] w-[500px]" data-name="Container">
      <Heading />
      <Container2 />
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

function Container4() {
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

function Container5() {
  return (
    <div className="absolute h-[40px] left-0 top-[72px] w-[362px]" data-name="Container">
      <CheckmarkIcon1 />
      <Text1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[112px] left-[870.13px] top-[70px] w-[362px]" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-y-1/2 absolute h-[196px] left-[251.71px] top-1/2 w-[1280px]" data-name="Container">
      <Container1 />
      <Container3 />
    </div>
  );
}

export default function OurLicense() {
  return (
    <div className="bg-black relative size-full" data-name="OurLicense">
      <Container />
      <div className="-translate-x-1/2 absolute flex h-[120px] items-center justify-center left-[calc(50%+47px)] top-[108px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[120px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 1">
                <line id="Line 16" stroke="var(--stroke-0, white)" x2="120" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}