import { Particle } from './particle';

/** Logo图片类 */
export class LogoImg {
  src: string;
  name: string;
  particleData: Particle[]; // 用于保存筛选后的粒子
  constructor(src: string, name: string) {
    this.src = src;
    this.name = name;
    this.particleData = [];
    const img = new Image();
    img.crossOrigin = '';
    img.src = src;
    // canvas 解析数据源获取粒子数据
    img.onload = () => {
      // 获取图片像素数据
      const tmp_canvas = document.createElement('canvas'); // 创建一个空的canvas
      const tmp_ctx = tmp_canvas.getContext('2d');
      const imgW = 400;
      const imgH = ~~(400 * (img.height / img.width));
      tmp_canvas.width = imgW;
      tmp_canvas.height = imgH;
      tmp_ctx?.drawImage(img, 0, 0, imgW, imgH); // 将图片绘制到canvas中
      const imgData = tmp_ctx?.getImageData(0, 0, imgW, imgH).data; // 获取像素点数据
      tmp_ctx?.clearRect(0, 0, 400, 400);

      // 筛选像素点
      for (let y = 0; y < imgH; y += 5) {
        for (let x = 0; x < imgW; x += 5) {
          // 像素点的序号
          const index = (x + y * imgW) * 4;
          // 在数组中对应的值
          const r = imgData![index];
          const g = imgData![index + 1];
          const b = imgData![index + 2];
          const a = imgData![index + 3];
          const sum = r + g + b + a;
          // 筛选条件
          if (sum >= 100) {
            const particle = new Particle(x, y, 400, [r, g, b, a]);
            this.particleData.push(particle);
          }
        }
      }
    };
  }
}
