import svgPaths from "./svg-pnrw6acksa";

function Paragraph() {
  return <div className="absolute h-[21px] left-[350.17px] top-[174.63px] w-[243.797px]" data-name="Paragraph" />;
}

function Group2() {
  return (
    <div className="absolute contents inset-[0_-0.02%_0_0]">
      <div className="absolute inset-[0_17.63%_0_36.6%]" data-name="Union">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.3643 38.086">
          <path clipRule="evenodd" d={svgPaths.p313ff470} fill="var(--fill-0, #00D16A)" fillRule="evenodd" id="Union" />
        </svg>
      </div>
      <div className="absolute inset-[0.18%_55.18%_33.99%_0]" data-name="Union_2">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9015 25.0733">
          <path clipRule="evenodd" d={svgPaths.p359de500} fill="var(--fill-0, #00D16A)" fillRule="evenodd" id="Union_2" />
        </svg>
      </div>
      <div className="absolute inset-[37%_-0.01%_34.1%_74.96%]" data-name="Union_3">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2393 11.0064">
          <path d={svgPaths.p384298c0} fill="var(--fill-0, #00D16A)" id="Union_3" />
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[38.086px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute content-stretch flex flex-col h-[38.086px] items-start left-0 top-[9.47px] w-[48.865px]" data-name="Group">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[25.171px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 163.391 25.1709">
        <path d={svgPaths.p3e743f00} fill="var(--fill-0, white)" id="Union" />
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[25.171px] items-start left-[64.27px] top-[9.38px] w-[163.391px]" data-name="Group2">
      <Icon1 />
    </div>
  );
}

function MoniolabsLogo() {
  return (
    <div className="h-[48.438px] relative shrink-0 w-full" data-name="MoniolabsLogo">
      <Group />
      <Group1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50px] items-start left-[812.25px] pr-[9.375px] top-[66px] w-[237.5px]" data-name="Container">
      <MoniolabsLogo />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[794.5px] top-[177.38px]">
      <div className="absolute bg-[#0b1f30] h-[11.255px] left-[794.5px] rounded-[2px] top-[177.38px] w-[48.934px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] left-[799.47px] text-[#6e7f9e] text-[5.383px] top-[183.58px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Coming soon</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[764.57px] top-[174.63px]">
      <p className="absolute font-['Nunito:SemiBold',sans-serif] font-semibold leading-[19.5px] left-[764.57px] text-[14px] text-white top-[174.63px] tracking-[1.04px] uppercase whitespace-nowrap">API</p>
      <Group3 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[21.75px] relative shrink-0 w-[38.148px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[21.75px] left-0 text-[#6e7f9e] text-[14px] top-0 whitespace-nowrap">Email:</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[21.75px] relative shrink-0 w-[151.25px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute decoration-solid font-['Nunito:Regular',sans-serif] font-normal leading-[21.75px] left-0 text-[#6e7f9e] text-[14px] top-0 underline whitespace-nowrap">enquiry@moniolabs.com</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[21.75px] items-center left-[833.3px] top-[277.63px]" data-name="Container">
      <Text />
      <Link />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#001222] relative size-full" data-name="Footer">
      <Paragraph />
      <Container />
      <p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[21px] left-[809px] text-[#6e7f9e] text-[14px] top-[321.37px] whitespace-nowrap">© 2026 Moniolabs. All rights reserved.</p>
      <p className="absolute font-['Nunito:SemiBold',sans-serif] font-semibold leading-[19.5px] left-[600.57px] text-[14px] text-white top-[174.63px] tracking-[1.04px] uppercase whitespace-nowrap">Service</p>
      <Group4 />
      <p className="absolute font-['Nunito:SemiBold',sans-serif] font-semibold leading-[19.5px] left-[943.43px] text-[14px] text-white top-[174.63px] tracking-[1.04px] uppercase whitespace-nowrap">ABOUT US</p>
      <p className="absolute font-['Nunito:SemiBold',sans-serif] font-semibold leading-[19.5px] left-[1123.43px] text-[14px] text-white top-[174.63px] tracking-[1.04px] uppercase whitespace-nowrap">{`Terms & Privacy`}</p>
      <Container1 />
    </div>
  );
}