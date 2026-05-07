import React, { useMemo } from 'react';

export function LightBeamDivider() {
  // 增加光束总量至 60 条，让光束密度更高，更有数据流穿梭的视觉冲击力
  const beams = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => {
      // 使用简单的确定性算法生成伪随机属性，避免 SSR 渲染不一致
      const randomWidth = 5 + ((i * 17) % 25); // 长度短一点: 5% - 30%
      // 使用更无序的伪随机数（通过正弦函数），打乱垂直分布，避免规律性的斜线感
      const randomTop = 50 + Math.sin(i * 1234.567) * 48; // 高度分布: 2% - 98%
      // 取消恒定速度，让每根光束的速度(持续时间)产生差异，范围大概在 3s 到 6.5s 之间
      const duration = 2.5 + ((i * 29) % 35) / 10; 
      // 使用负数延迟，并稍微扩大范围至 -20s，保证随着数量的增加，页面加载时整体能均匀布满整个容器
      const delay = -(((i * 17) % 200) / 10); 
      const thickness = ((i * 7) % 6) === 0 ? 2 : 1; // 偶尔为 2px，绝大部分为 1px
      const baseOpacity = 0.5 + ((i * 19) % 5) * 0.1; // 透明度: 0.5 - 0.9
      const colorType = i % 10; // 颜色变化: 0-3为绿，4-6为蓝，7为白，8-9为紫

      return { 
        id: i, 
        top: `${randomTop}%`, 
        width: `${randomWidth}%`, 
        thickness, 
        duration, 
        delay, 
        colorType,
        baseOpacity
      };
    });
  }, []);

  const getGradient = (type: number) => {
    // 增加透明度渐变梯度，实现更长的拖尾和向运动方向的自然渐隐
    if (type >= 4 && type <= 6) {
      // 蓝色
      return 'linear-gradient(90deg, transparent 0%, rgba(0, 163, 255, 0) 25%, rgba(0, 163, 255, 0.5) 75%, rgba(128, 212, 255, 0.9) 95%, rgba(255, 255, 255, 1) 100%)';
    } else if (type === 7) {
      // 白色
      return 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0.5) 75%, rgba(255, 255, 255, 0.9) 95%, rgba(255, 255, 255, 1) 100%)';
    } else if (type === 8 || type === 9) {
      // 紫色
      return 'linear-gradient(90deg, transparent 0%, rgba(157, 0, 255, 0) 25%, rgba(157, 0, 255, 0.5) 75%, rgba(200, 128, 255, 0.9) 95%, rgba(255, 255, 255, 1) 100%)';
    } else {
      // 绿色
      return 'linear-gradient(90deg, transparent 0%, rgba(0, 255, 128, 0) 25%, rgba(0, 255, 128, 0.5) 75%, rgba(128, 255, 170, 0.9) 95%, rgba(255, 255, 255, 1) 100%)';
    }
  };

  const getShadow = (type: number, thickness: number) => {
    // 明显增大发光面积（增加 blur 半径）
    const blur1 = thickness === 2 ? '6px' : '4px';
    const blur2 = thickness === 2 ? '12px' : '8px';
    const blur3 = thickness === 2 ? '24px' : '16px';
    
    if (type >= 4 && type <= 6) {
      return `0 0 ${blur1} rgba(0, 163, 255, 0.9), 0 0 ${blur2} rgba(0, 163, 255, 0.6), 0 0 ${blur3} rgba(0, 163, 255, 0.4)`;
    } else if (type === 7) {
      return `0 0 ${blur1} rgba(255, 255, 255, 0.9), 0 0 ${blur2} rgba(255, 255, 255, 0.6), 0 0 ${blur3} rgba(255, 255, 255, 0.4)`;
    } else if (type === 8 || type === 9) {
      return `0 0 ${blur1} rgba(157, 0, 255, 0.9), 0 0 ${blur2} rgba(157, 0, 255, 0.6), 0 0 ${blur3} rgba(157, 0, 255, 0.4)`;
    } else {
      return `0 0 ${blur1} rgba(0, 255, 128, 0.9), 0 0 ${blur2} rgba(0, 255, 128, 0.6), 0 0 ${blur3} rgba(0, 214, 97, 0.4)`;
    }
  };

  return (
    <div className="w-full relative h-[160px] md:h-[160px] -my-[80px] md:-my-[80px] z-20 pointer-events-none overflow-hidden translate-y-[40px] md:translate-y-[120px]">
      <style>{`
        @keyframes fly-beam {
          0% {
            left: -30%;
            opacity: 0;
            transform: scaleX(0) translateY(-50%);
          }
          15% {
            opacity: var(--beam-opacity);
            transform: scaleX(1) translateY(-50%);
          }
          80% {
            opacity: var(--beam-opacity);
            transform: scaleX(1) translateY(-50%);
          }
          95% {
            opacity: 0;
            transform: scaleX(0) translateY(-50%);
          }
          100% {
            left: 120%;
            opacity: 0;
            transform: scaleX(0) translateY(-50%);
          }
        }
      `}</style>
      
      {beams.map((beam) => (
        <div
          key={beam.id}
          className="absolute flex items-center mix-blend-screen"
          style={{
            top: beam.top,
            width: beam.width,
            transformOrigin: 'right center', // 改为右侧对齐：这样在屏幕右侧渐隐时，是从尾部向头部收缩，符合向前飞行的消失感
            animation: `fly-beam ${beam.duration}s linear infinite`,
            animationDelay: `${beam.delay}s`,
            left: '-30%',
            opacity: 0,
            transform: 'translateY(-50%)',
            willChange: 'left, opacity, transform',
            '--beam-opacity': beam.baseOpacity,
          } as React.CSSProperties}
        >
          {/* 光束是一条直线，去掉了首端的所有光斑点缀 */}
          <div 
            className="w-full rounded-full"
            style={{
              height: `${beam.thickness}px`,
              background: getGradient(beam.colorType),
              boxShadow: getShadow(beam.colorType, beam.thickness)
            }}
          />
        </div>
      ))}
    </div>
  );
}