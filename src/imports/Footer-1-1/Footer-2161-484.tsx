import svgPaths from "./svg-mqhfed8qj9";

function Paragraph() {
  return <div className="absolute h-[21px] left-[350.17px] top-[201px] w-[243.797px]" data-name="Paragraph" />;
}

function Group2() {
  return (
    <div className="absolute contents inset-[0_-0.02%_0_0]">
      <div className="absolute inset-[0_17.63%_0_36.6%]" data-name="Union">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0721 23.9644">
          <path clipRule="evenodd" d={svgPaths.p33e62f80} fill="var(--fill-0, #00D16A)" fillRule="evenodd" id="Union" />
        </svg>
      </div>
      <div className="absolute inset-[0.18%_55.18%_33.99%_0]" data-name="Union_2">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.7809 15.7766">
          <path clipRule="evenodd" d={svgPaths.p2d39ae00} fill="var(--fill-0, #00D16A)" fillRule="evenodd" id="Union_2" />
        </svg>
      </div>
      <div className="absolute inset-[37%_-0.02%_34.1%_74.97%]" data-name="Union_3">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.70121 6.92541">
          <path d={svgPaths.p31d23a00} fill="var(--fill-0, #00D16A)" id="Union_3" />
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[23.964px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute content-stretch flex flex-col h-[23.964px] items-start left-0 top-[5.96px] w-[30.747px]" data-name="Group">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[15.838px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 102.808 15.838">
        <path d={svgPaths.p3a6ea880} fill="var(--fill-0, white)" id="Union" />
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[15.838px] items-start left-[40.44px] top-[5.9px] w-[102.809px]" data-name="Group2">
      <Icon1 />
    </div>
  );
}

function MoniolabsLogo() {
  return (
    <div className="h-[30.478px] relative shrink-0 w-full" data-name="MoniolabsLogo">
      <Group />
      <Group1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[31.461px] items-start left-[347.41px] pr-[5.899px] top-[53.04px] w-[149.439px]" data-name="Container">
      <MoniolabsLogo />
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
        <p className="absolute decoration-solid font-['Nunito:Regular',sans-serif] font-normal leading-[21.75px] left-[-9.26px] text-[#6e7f9e] text-[14px] top-0 underline whitespace-nowrap">service@moniolabs.com</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[21.75px] relative shrink-0 w-[576px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text />
        <Link />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[347.41px] top-[213px] w-[576px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[28.97px] mt-[5.87px] place-items-start relative row-1">
      <div className="bg-[#0b1f30] col-1 h-[11.255px] ml-0 mt-0 rounded-[2px] row-1 w-[48.934px]" />
      <div className="col-1 flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center ml-[4.97px] mt-[2.7px] relative row-1 text-[#6e7f9e] text-[5.383px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Coming soon</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="col-1 font-['Nunito:Regular',sans-serif] font-normal leading-[22.5px] ml-0 mt-0 relative row-1 text-[#6e7f9e] text-[14px] whitespace-nowrap">API</p>
      <Group3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[31px] items-start left-[1220.48px] top-[53.04px] w-[93px]">
      <p className="font-['Nunito:SemiBold',sans-serif] font-semibold leading-[19.5px] min-w-full relative shrink-0 text-[14px] text-white tracking-[1.04px] uppercase w-[min-content]">Moniolabs</p>
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[22.5px] min-w-full relative shrink-0 text-[#6e7f9e] text-[14px] w-[min-content]">Service</p>
      <Group4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[31px] items-start left-[1436.65px] text-[14px] top-[53.04px] w-[101px]">
      <p className="font-['Nunito:SemiBold',sans-serif] font-semibold leading-[19.5px] relative shrink-0 text-white tracking-[1.04px] uppercase w-full">ABOUT</p>
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[22.5px] relative shrink-0 text-[#6e7f9e] w-full">About Us</p>
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[22.5px] relative shrink-0 text-[#6e7f9e] w-full">{`Terms & Privacy`}</p>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#001222] relative size-full" data-name="Footer">
      <Paragraph />
      <Container />
      <p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[21px] left-[347.41px] text-[#6e7f9e] text-[14px] top-[245.74px] whitespace-nowrap">© 2026 Moniolabs. All rights reserved.</p>
      <Container1 />
      <Frame />
      <Frame1 />
      <p className="absolute font-['Nunito:SemiBold',sans-serif] font-semibold leading-[normal] left-[347.41px] text-[28px] text-white top-[104.33px] whitespace-nowrap">{`Borderless OTC `}</p>
      <p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[normal] left-[347.41px] text-[28px] text-white top-[141.46px] whitespace-nowrap">for Business Treasury</p>
      <p className="absolute font-['Nunito:SemiBold',sans-serif] font-semibold leading-[normal] left-[1218.93px] text-[14px] text-white top-[214.38px] whitespace-nowrap">Our License</p>
      <p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[normal] left-[1218.93px] text-[#6e7f9e] text-[14px] top-[247.74px] whitespace-pre">{`USA MSB Registered  |  HK TCSP Licensed`}</p>
    </div>
  );
}