const fs = require('fs');

const path = '../src/imports/Group1010108362-67-4147.tsx';
let content = fs.readFileSync(path, 'utf-8');

// Colors replacement mapping
const replacements = [
  // Backgrounds
  ['bg-white', 'bg-[#000000]'],
  ['bg-[#f7f9fc]', 'bg-[#000000]'],
  ['bg-[#fafafa]', 'bg-[#111111]'],
  ['#fafafa', '#111111'],
  ['#FEF3F2', '#2A1111'],
  ['#ECFDF3', '#112A11'],
  ['#F9F5FF', '#112A11'],
  ['var(--fill-0, white)', 'var(--fill-0, #000000)'],
  ['var(--fill-0, #ffffff)', 'var(--fill-0, #000000)'],
  ['fill="white"', 'fill="#000000"'],
  ['fill="url(#paint0_linear_67_3790)"', 'fill="url(#paint0_linear_67_3790)"'], // wait, linear gradient to white...
  
  // Texts
  ['text-[#181d27]', 'text-[#ffffff]'],
  ['text-[#181D27]', 'text-[#ffffff]'],
  ['text-[#101B29]', 'text-[#ffffff]'],
  ['text-[#535862]', 'text-[#a0a0a0]'],
  ['text-[#717680]', 'text-[#a0a0a0]'],
  ['text-[#A4A7AE]', 'text-[#666666]'],
  
  // Borders
  ['border-[#e9eaeb]', 'border-[#222222]'],
  ['border-[#E9EAEB]', 'border-[#222222]'],
  ['border-[#f5f5f5]', 'border-[#222222]'],
  ['border-[#F5F5F5]', 'border-[#222222]'],
  ['border-[#dddee1]', 'border-[#222222]'],
  ['border-[#d5d7da]', 'border-[#222222]'],
  ['border-[#CACDD5]', 'border-[#222222]'],
  ['border-[#e2e7ee]', 'border-[#222222]'],
  ['border-[#eaecf0]', 'border-[#222222]'],

  // SVG fills and strokes
  ['fill="var(--fill-0, #181D27)"', 'fill="var(--fill-0, #ffffff)"'],
  ['fill="var(--fill-0, #101B29)"', 'fill="var(--fill-0, #ffffff)"'],
  ['fill="var(--fill-0, #717680)"', 'fill="var(--fill-0, #a0a0a0)"'],
  ['fill="var(--fill-0, #A4A7AE)"', 'fill="var(--fill-0, #666666)"'],
  ['fill="var(--fill-0, #535862)"', 'fill="var(--fill-0, #a0a0a0)"'],
  ['fill="var(--fill-0, #E9EAEB)"', 'fill="var(--fill-0, #222222)"'],
  ['fill="var(--fill-0, #F5F5F5)"', 'fill="var(--fill-0, #222222)"'],
  ['stroke="var(--stroke-0, #181D27)"', 'stroke="var(--stroke-0, #ffffff)"'],
  ['stroke="var(--stroke-0, #e9eaeb)"', 'stroke="var(--stroke-0, #222222)"'],
  
  // Purples to Brand Green
  ['text-[#8758F9]', 'text-[#00D661]'],
  ['text-[#8B6CD4]', 'text-[#00D661]'],
  ['text-[#7F56D9]', 'text-[#00D661]'],
  ['bg-[#8758F9]', 'bg-[#00D661]'],
  ['bg-[#8B6CD4]', 'bg-[#00D661]'],
  ['bg-[#7F56D9]', 'bg-[#00D661]'],
  ['border-[#8758F9]', 'border-[#00D661]'],
  ['border-[#8B6CD4]', 'border-[#00D661]'],
  ['border-[#7F56D9]', 'border-[#00D661]'],
  ['fill="var(--fill-0, #8758F9)"', 'fill="var(--fill-0, #00D661)"'],
  ['stroke="var(--stroke-0, #8758F9)"', 'stroke="var(--stroke-0, #00D661)"'],
  ['fill="var(--fill-0, #7F56D9)"', 'fill="var(--fill-0, #00D661)"'],
  ['stroke="var(--stroke-0, #7F56D9)"', 'stroke="var(--stroke-0, #00D661)"'],
  ['fill="var(--fill-0, #8B6CD4)"', 'fill="var(--fill-0, #00D661)"'],
  ['stroke="var(--stroke-0, #8B6CD4)"', 'stroke="var(--stroke-0, #00D661)"'],

  // Gradients
  ['stopColor="white"', 'stopColor="#000000"'],
  
  // Custom shadows (remove or darkify)
  ['rgba(16,24,40,0.05)', 'rgba(0,0,0,0.5)'],
  ['rgba(10,13,18,0.05)', 'rgba(0,0,0,0.5)'],
];

for (const [search, replace] of replacements) {
  content = content.split(search).join(replace);
}

fs.writeFileSync(path, content, 'utf-8');
console.log('Replacements completed.');
