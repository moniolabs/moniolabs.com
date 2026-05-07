function Container() {
  return (
    <div className="bg-[#0b1f30] col-1 content-stretch flex h-[15px] items-center justify-center ml-[30.5px] mt-[4.25px] px-[5px] py-[3px] relative rounded-[2px] row-1 w-[76px]" data-name="Container">
      <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[9px] relative shrink-0 text-[#6e7f9e] text-[9px] uppercase whitespace-nowrap">Coming soon</p>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="col-1 font-['Nunito:Regular',sans-serif] font-normal leading-[22.5px] ml-0 mt-0 relative row-1 text-[14px] text-white uppercase whitespace-nowrap">API</p>
      <Container />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[40px] items-center left-[1038px] top-[36px]">
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[22.5px] relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">Service</p>
      <Group />
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[22.5px] relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">About Us</p>
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[22.5px] relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">{`Terms & Privacy`}</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents font-['Nunito:Regular',sans-serif] font-normal leading-[21.75px] left-[339px] text-[#6e7f9e] text-[14px] top-[72px] whitespace-nowrap">
      <p className="absolute left-[339px] top-[72px]">Email:</p>
      <p className="absolute decoration-solid left-[383.15px] top-[72px] underline">enquiry@moniolabs.com</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[339px] top-[72px]">
      <Group1 />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#001222] relative size-full" data-name="Footer">
      <Frame />
      <p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[21px] left-[calc(50%-592px)] text-[#6e7f9e] text-[14px] top-[36px] whitespace-nowrap">© 2026 Moniolabs. All rights reserved.</p>
      <Group2 />
    </div>
  );
}