// 设置画布大小
/** 粒子类 */
export class Particle {
  ctx: CanvasRenderingContext2D;
  x: number; // 粒子x轴的初始位置
  y: number; // 粒子y轴的初始位置
  totalX: number; // 粒子x轴的目标位置
  totalY: number; // 粒子y轴的目标位置
  mx?: number; // 粒子x轴需要移动的距离
  my?: number; // 粒子y轴需要移动的距离
  vx?: number; // 粒子x轴移动速度
  vy?: number; // 粒子y轴移动速度
  time: number; // 粒子移动耗时
  r: number; // 粒子的半径
  color: number[]; // 粒子的颜色
  opacity: number; // 粒子的透明度
  Radius: number; // 中心影响的半径
  Inten: number; // 排斥/吸引 力度
  constructor(
    totalX: number,
    totalY: number,
    time: number,
    color: number[],
    target?: HTMLCanvasElement
  ) {
    this.Radius = 40; /** 中心影响的半径 */
    this.Inten = 0.95; /** 排斥/吸引 力度 */
    this.ctx = target?.getContext('2d') as CanvasRenderingContext2D;
    // 设置粒子的初始位置x、y，目标位置totalX、totalY，总耗时time
    this.x = (Math.random() * (target?.width || 0)) >> 0;
    this.y = (Math.random() * (target?.height || 0)) >> 0;
    this.totalX = totalX;
    this.totalY = totalY;
    this.time = time;
    // 设置粒子的颜色和半径
    this.r = 1.2;
    this.color = [...color];
    this.opacity = 0;
  }
  // 在画布中绘制粒子
  draw() {
    this.ctx.fillStyle = `rgba(${this.color.toString()})`;
    this.ctx.fillRect(this.x, this.y, this.r * 2, this.r * 2);
    this.ctx.fill();
  }
  /** 更新粒子
   * @param {number} mouseX 鼠标X位置
   * @param {number} mouseY 鼠标Y位置
   */
  update(mouseX?: number, mouseY?: number) {
    // 设置粒子需要移动的距离
    this.mx = this.totalX - this.x;
    this.my = this.totalY - this.y;
    // 设置粒子移动速度
    this.vx = this.mx / this.time;
    this.vy = this.my / this.time;
    // 计算粒子与鼠标的距离
    if (mouseX && mouseY) {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx ** 2 + dy ** 2);
      // 粒子相对鼠标距离的比例 判断受到的力度比例
      let disPercent = this.Radius / distance;
      // 设置阈值 避免粒子受到的斥力过大
      disPercent = disPercent > 7 ? 7 : disPercent;
      // 获得夹角值 正弦值 余弦值
      const angle = Math.atan2(dy, dx);
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      // 将力度转换为速度 并重新计算vx vy
      const repX = cos * disPercent * -this.Inten;
      const repY = sin * disPercent * -this.Inten;
      this.vx += repX;
      this.vy += repY;
    }
    this.x += this.vx;
    this.y += this.vy;
    if (this.opacity < 1) this.opacity += 1 / this.time;
  }
  // 切换粒子
  change(x: number, y: number, color: number[]) {
    this.totalX = x;
    this.totalY = y;
    this.color = [...color];
  }
}
