import { Particle } from './particle';

const baseW = 500;

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
      const imgW = baseW;
      /**
       * 使用位运算符（~~）将计算结果舍去小数部分，得到最终的图片高度。
       * 这种使用位运算符进行取整的方式相对于使用Math.floor()或Math.round()等函数更加高效。
       * 位运算符会直接截断小数部分，不需要进行浮点数运算，因此可以提高性能
       * 这种取整方式只适用于正数
       */
      const imgH = ~~(baseW * (img.height / img.width));
      tmp_canvas.width = imgW;
      tmp_canvas.height = imgH;
      tmp_ctx?.drawImage(img, 0, 0, imgW, imgH); // 将图片绘制到canvas中
      const imgData = tmp_ctx?.getImageData(0, 0, imgW, imgH).data; // 获取像素点数据
      tmp_ctx?.clearRect(0, 0, baseW, baseW);

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
            const particle = new Particle(x, y, baseW, [r, g, b, a]);
            this.particleData.push(particle);
          }
        }
      }
    };
  }
}
