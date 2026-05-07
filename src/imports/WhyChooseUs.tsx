function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[28px] items-start justify-center left-[320px] top-[237px] w-[1280px]">
      <div className="bg-black h-[283px] relative rounded-[24px] shrink-0 w-[408px]">
        <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[24px]" />
      </div>
      <div className="bg-black h-[283px] relative rounded-[24px] shrink-0 w-[408px]">
        <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[24px]" />
      </div>
      <div className="bg-black h-[283px] relative rounded-[24px] shrink-0 w-[408px]">
        <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[24px]" />
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <div className="bg-black relative size-full" data-name="Why choose us?">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+0.5px)] not-italic text-[#00d661] text-[32px] text-center top-[64px] whitespace-nowrap">Why choose Moniolabs?</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%+0.5px)] not-italic text-[36px] text-center text-white top-[126px] whitespace-nowrap">Deep Liquidity · Global Settlement · Total Compliance.</p>
      <Frame />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[320px] not-italic text-[32px] text-white top-[555px] whitespace-nowrap">24/7 Global Trading</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[756px] not-italic text-[32px] text-white top-[555px] whitespace-nowrap">Multi-Currency Support</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[1192px] not-italic text-[32px] text-white top-[555px] whitespace-nowrap">Accelerated Settlement</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[320px] not-italic text-[20px] text-white top-[618px] w-[408px]">Round-the-clock execution for major digital assets and fiat pairs.</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[756px] not-italic text-[20px] text-white top-[618px] w-[408px]">Settlement in HKD, USD, EUR, GBP, AUD, CAD, CHF, and JPY.</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1192px] not-italic text-[20px] text-white top-[618px] w-[408px]">Instant for crypto-to-crypto; same-day for US fiat and next-day for EU/Asia.</p>
    </div>
  );
}