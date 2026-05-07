function Container() {
  return (
    <div className="absolute content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[40px] items-center leading-[20px] left-[898px] not-italic text-[14px] top-[30px] tracking-[1.2px] whitespace-nowrap" data-name="Container">
      <p className="relative shrink-0 text-[#00d661]">HOME</p>
      <p className="relative shrink-0 text-white">PRODUCTS</p>
      <p className="relative shrink-0 text-white">SHOWCASES</p>
      <p className="relative shrink-0 text-white">PARTNER</p>
      <p className="relative shrink-0 text-white">ABOUT</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#00d661] h-[40px] left-[1460px] rounded-[16777200px] top-[20px] w-[140px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[70.5px] not-italic text-[#001222] text-[14px] text-center top-[11px] uppercase whitespace-nowrap">contact us</p>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-black h-[80px] left-0 top-0 w-[1920px]" />
      <Container />
      <Button />
    </div>
  );
}