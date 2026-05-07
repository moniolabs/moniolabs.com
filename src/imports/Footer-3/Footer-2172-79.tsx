import svgPaths from "./svg-ho45wsmhbg";

function Paragraph() {
  return <div className="absolute h-[21px] left-[350.17px] opacity-90 top-[191.96px] w-[243.797px]" data-name="Paragraph" />;
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
    <div className="absolute content-stretch flex flex-col h-[31.461px] items-start left-[347.41px] opacity-90 pr-[5.899px] top-[44px] w-[149.439px]" data-name="Container">
      <MoniolabsLogo />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[960.28px] top-[154.87px]">
      <div className="absolute bg-[#0b1f30] h-[11.255px] left-[960.28px] opacity-90 rounded-[2px] top-[154.87px] w-[48.934px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] left-[965.25px] opacity-90 text-[#6e7f9e] text-[5.383px] top-[161.07px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Coming soon</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[931.3px] top-[149px]">
      <p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[22.5px] left-[931.3px] opacity-90 text-[#6e7f9e] text-[14px] top-[149px] whitespace-nowrap">API</p>
      <Group3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1358.3px] opacity-90 top-[44px] w-[101px]">
      <p className="font-['Nunito:SemiBold',sans-serif] font-semibold leading-[19.5px] relative shrink-0 text-[14px] text-white tracking-[1.04px] uppercase w-full">Contact us</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-[1358.3px] opacity-90 size-[14px] top-[99.96px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame" opacity="0.98">
          <path d={svgPaths.p3093fe00} fill="var(--fill-0, #6E7F9E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[1358.3px] top-[94.96px]">
      <p className="absolute decoration-solid font-['Nunito:Regular',sans-serif] font-normal leading-[21.75px] left-[1379.3px] opacity-90 text-[#6e7f9e] text-[14px] top-[94.96px] underline whitespace-nowrap">service@moniolabs.com</p>
      <Frame />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#001222] relative size-full" data-name="Footer">
      <Paragraph />
      <Container />
      <p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[21px] left-[347.41px] opacity-90 text-[#6e7f9e] text-[14px] top-[236.7px] whitespace-nowrap">© 2026 Moniolabs. All rights reserved.</p>
      <p className="absolute font-['Nunito:SemiBold',sans-serif] font-semibold leading-[19.5px] left-[931.3px] opacity-90 text-[14px] text-white top-[44px] tracking-[1.04px] uppercase w-[93px]">Moniolabs</p>
      <p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[22.5px] left-[931.3px] opacity-90 text-[#6e7f9e] text-[14px] top-[94.96px] w-[93px]">Service</p>
      <Group4 />
      <p className="absolute font-['Nunito:SemiBold',sans-serif] font-semibold leading-[19.5px] left-[1147.47px] opacity-90 text-[14px] text-white top-[44px] tracking-[1.04px] uppercase w-[101px]">ABOUT</p>
      <p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[22.5px] left-[1147.47px] opacity-90 text-[#6e7f9e] text-[14px] top-[94.96px] w-[101px]">About Us</p>
      <p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[22.5px] left-[1147.47px] opacity-90 text-[#6e7f9e] text-[14px] top-[149px] w-[101px]">{`Terms & Privacy`}</p>
      <Frame1 />
      <p className="absolute font-['Nunito:SemiBold',sans-serif] font-semibold leading-[normal] left-[347.41px] opacity-90 text-[28px] text-white top-[95.29px] whitespace-nowrap">{`Borderless OTC `}</p>
      <p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[normal] left-[347.41px] opacity-90 text-[28px] text-white top-[132.42px] whitespace-nowrap">for Business Treasury</p>
      <Group5 />
    </div>
  );
}