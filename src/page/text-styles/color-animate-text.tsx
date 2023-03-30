import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import {
  ColorAnimateTextInstance,
  InputParam,
} from './color-animate-text-instance';

const ColorAnimateTextComponent = forwardRef<any, Partial<InputParam>>(
  (
    {
      prefixString = '', // 前缀文字
      texts = [''], // 需要做动效的文字
      defaultRun = true, // 在初始化组件时是否默认运行
      infinite = true, // 是否无限循环运行
      frameTime = 75, // 每一帧所用时间
      textWaitStep = 1, // 每个文字停留多久
      paragraphWaitStep = 2, // 每段文字停留多久
    },
    ref: React.Ref<unknown> | undefined
  ) => {
    const param = {
      prefixString: prefixString,
      texts: texts,
      defaultRun: defaultRun,
      infinite: infinite,
      frameTime: frameTime,
      textWaitStep: textWaitStep,
      paragraphWaitStep: paragraphWaitStep,
    };

    const container = useRef(null);
    const instance = useRef<ColorAnimateTextInstance>();

    instance.current?.setParam(param);

    useImperativeHandle(ref, () => ({
      getInstance: () => {
        return instance.current;
      },
    }));

    useEffect(() => {
      // 创建组件
      instance.current = new ColorAnimateTextInstance(param);
      instance.current.ngOnInit();
      instance.current.ngAfterViewInit(container.current);
      return () => {
        // 销毁组件
        instance.current?.ngOnDestroy();
      };
    }, []);

    return <div ref={container}></div>;
  }
);

export default ColorAnimateTextComponent;
