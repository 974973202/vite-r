import { useEffect, useRef } from 'react';
import { LogoImg } from './logo-img';
import { ParticleCanvas } from './particle-canvas';
import './index.less';

// 准备logo数据
const logos = [
  {
    label: 'kazimierz',
    url: '/static/img/logo_kazimierz.png',
  },
  { label: 'rhine', url: '/static/img/logo_rhine.png' },
  { label: 'rhodes', url: '/static/img/logo_rhodes.png' },
  { label: 'victoria', url: '/static/img/logo_victoria.png' },
  { label: 'yan', url: '/static/img/logo_yan.png' },
];

/** 存储由logos生成的logoImg对象 */
const logoImgs: LogoImg[] = [];

// 将logo数据实例化为logoImg对象
for (const item of logos) {
  logoImgs.push(new LogoImg(item.url, item.label));
}

// 设置粒子动画时长
const animateTime = 30;

function DynamicLogo() {
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const particleCanvas = useRef<ParticleCanvas>();

  useEffect(() => {
    const body: any = document.querySelector('body');
    const element: any = document.getElementById('pointer');

    function setPosition(x: number, y: number) {
      element.style.top = y - 1 + 'px';
      element.style.left = x - 1 + 'px';
    }

    body.onmousemove = (e: { clientX: number; clientY: number }) =>
      window.requestAnimationFrame(() => setPosition(e.clientX, e.clientY));

    body.onmouseenter = () => element.classList.remove('hidden');
    body.onmouseleave = () => element.classList.add('hidden');

    body.onmouseover = (e: {
      target: { dataset: { cursor: any } };
      fromElement: { dataset: { cursor: any } };
    }) =>
      e.target.dataset.cursor || e?.fromElement?.dataset.cursor
        ? element.classList.add('hover')
        : element.classList.remove('hover');
  }, []);

  useEffect(() => {
    if (canvas.current) {
      particleCanvas.current = new ParticleCanvas(canvas.current, animateTime);
      particleCanvas.current.drawCanvas();
    }
  }, []);

  return (
    <div className="bg">
      <div id="pointer"></div>
      <div className="canvas-container">
        <canvas ref={canvas} width="400" height="400"></canvas>
      </div>
      <ul className="logo-options-container">
        {logoImgs.map((item: LogoImg) => {
          return (
            <li
              key={item.src}
              className={`logo-item`}
              // 激活logo
              onClick={() => particleCanvas.current?.changeImg(item)}
              data-cursor="pointer"
            >
              <img src={item.src} className="item-picture" />
              <div className="item-desc">{item.name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DynamicLogo;
