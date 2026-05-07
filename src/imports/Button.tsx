function Icon() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="icon">
          <circle cx="15" cy="15" fill="var(--fill-0, #001222)" id="Ellipse 1" r="15" />
          <path d="M9 15H21" id="Vector" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="1.71429" />
          <path d="M15 9L21 15L15 21" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="1.71429" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[12px] top-[5px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#001222] text-[14px] text-center uppercase whitespace-nowrap">contact us</p>
      <Icon />
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-white relative rounded-[16777200px] size-full" data-name="Button">
      <Frame />
    </div>
  );
}