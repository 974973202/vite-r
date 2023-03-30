import React, { MutableRefObject, useImperativeHandle, useRef } from 'react';
import Prism from 'prismjs';

function StyleEditor(props: { code: any }, _ref: any) {
  const { code } = props; // 原代码展示渲染 css
  const saveRef: MutableRefObject<any> = useRef<any>(null);

  // 转义后的css文本样式
  const highlightCode = Prism.highlight(code, Prism.languages.css, 'css');

  useImperativeHandle(
    _ref,
    () => {
      //如果不给依赖项，则每次运行函数组件都会调用该方法
      //如果使用了依赖项，则第一次调用后，会进行缓存，只有依赖项发生变化时才会重新调用函数
      //相当于给 ref.current = 1
      return {
        // 只给App父组件method方法
        toBottom() {
          if (saveRef.current) {
            saveRef.current.scrollTop = 1000000;
          }
        },
      };
    },
    []
  );

  return (
    <div
      ref={saveRef}
      style={{ overflowAnchor: 'none', paddingBottom: 50 }}
      className="styleEditor"
    >
      <style dangerouslySetInnerHTML={{ __html: code }}></style>
      <pre dangerouslySetInnerHTML={{ __html: highlightCode }}></pre>
    </div>
  );
}

export default React.forwardRef(StyleEditor);
