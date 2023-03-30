export type InputParam = {
  prefixString: string; // 前缀文字
  texts: Array<string>; // 需要做动效的文字
  defaultRun: boolean; // 在初始化组件时是否默认运行
  infinite: boolean; // 是否无限循环运行
  frameTime: number; // 每一帧所用时间
  textWaitStep: number; // 每个文字停留多久
  paragraphWaitStep: number; // 每段文字停留多久
};

export class ColorAnimateTextInstance {
  private runTexts = [''];
  private colorTextLength = 5;
  private colors = [
    'rgb(110,64,170)',
    'rgb(150,61,179)',
    'rgb(191,60,175)',
    'rgb(228,65,157)',
    'rgb(254,75,131)',
    'rgb(255,94,99)',
    'rgb(255,120,71)',
    'rgb(251,150,51)',
    'rgb(226,183,47)',
    'rgb(198,214,60)',
    'rgb(175,240,91)',
    'rgb(127,246,88)',
    'rgb(82,246,103)',
    'rgb(48,239,130)',
    'rgb(29,223,163)',
    'rgb(26,199,194)',
    'rgb(35,171,216)',
    'rgb(54,140,225)',
    'rgb(76,110,219)',
    'rgb(96,84,200)',
  ];
  private config;

  private destroyed = false;
  private continue = false;
  private infinite0 = true;

  constructor(private param: InputParam) {
    this.config = {
      text: '',
      prefix: -(this.param.prefixString.length + this.colorTextLength),
      skillI: 0,
      skillP: 0,
      step: this.param.textWaitStep,
      direction: 'forward',
      delay: this.param.paragraphWaitStep,
    };
  }

  setParam(param: InputParam) {
    this.param = param;
  }

  ngOnInit(): void {
    this.runTexts = [...this.param.texts];
    this.continue = this.param.defaultRun;
    this.infinite0 = this.param.infinite;
    if (!this.infinite0) {
      if (this.runTexts.length > 1) {
        console.warn(
          '在设置infinite=false的情况下，仅第一个字符串生效，后续字符串不再显示。'
        );
      }
    }
  }

  ngAfterViewInit(dom: HTMLDivElement | null): void {
    dom && this.init(dom);
  }

  ngOnDestroy(): void {
    this.destroyed = true;
  }

  private init(dom: HTMLDivElement): void {
    this.loop(dom);
  }

  /** 循环 */
  private loop(dom: HTMLDivElement): void {
    setTimeout(() => {
      if (this.continue) {
        if (this.destroyed) {
          return;
        }
        const index = this.config.skillI;
        if (this.param.texts.toString() != this.runTexts.toString()) {
          // 文字已更新
          const currentText = this.runTexts[index]; // 原始
          let updateText = this.param.texts[index]; // 变化的
          if (updateText == null) {
            updateText = this.param.texts[this.param.texts.length - 1];
            this.config.skillI = this.param.texts.length - 1;
          }
          this.render(dom, currentText, updateText);
          this.runTexts = [...this.param.texts];
        } else {
          // 文字未更新
          const currentText = this.runTexts[index];
          this.render(dom, currentText);
        }
      }
      if (this.infinite0) {
        this.loop(dom);
      } else {
        if (this.config.skillP < this.runTexts[0].length) {
          this.loop(dom);
        }
      }
    }, this.param.frameTime);
  }

  /** 继续 */
  resume(): void {
    this.continue = true;
  }

  /** 暂停 */
  suspend(): void {
    this.continue = false;
  }

  private getNextColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  private getNextChar(): string {
    return String.fromCharCode(94 * Math.random() + 33);
  }

  private fragment(value: number): DocumentFragment {
    const f = document.createDocumentFragment();
    for (let i = 0; value > i; i++) {
      const span = document.createElement('span');
      span.textContent = this.getNextChar();
      span.style.color = this.getNextColor();
      f.appendChild(span);
    }
    return f;
  }

  private render(
    dom: HTMLDivElement,
    currentText: string,
    updateText?: string
  ): void {
    if (this.config.step) {
      this.config.step--;
    } else {
      this.config.step = this.param.textWaitStep;
      if (this.config.prefix < this.param.prefixString.length) {
        this.config.prefix >= 0 &&
          (this.config.text += this.param.prefixString[this.config.prefix]);
        this.config.prefix++;
      } else {
        switch (this.config.direction) {
          case 'forward':
            if (this.config.skillP < currentText.length) {
              this.config.text += currentText[this.config.skillP];
              this.config.skillP++;
            } else {
              if (this.config.delay) {
                this.config.delay--;
              } else {
                this.config.direction = 'backward';
                this.config.delay = this.param.paragraphWaitStep;
              }
            }
            break;
          case 'backward':
            if (this.config.skillP > 0) {
              this.config.text = this.config.text.slice(0, -1);
              this.config.skillP--;
            } else {
              this.config.skillI =
                (this.config.skillI + 1) % this.runTexts.length;
              this.config.direction = 'forward';
            }
            break;
          default:
            break;
        }
      }
    }
    if (updateText != null) {
      this.config.text = updateText.substring(0, this.config.skillP);
      if (this.config.skillP > updateText.length) {
        this.config.skillP = updateText.length;
      }
    }
    dom.textContent = this.config.text;
    let value;
    if (this.config.prefix < this.param.prefixString.length) {
      value = Math.min(
        this.colorTextLength,
        this.colorTextLength + this.config.prefix
      );
    } else {
      value = Math.min(
        this.colorTextLength,
        currentText.length - this.config.skillP
      );
    }
    dom.appendChild(this.fragment(value));
  }
}
