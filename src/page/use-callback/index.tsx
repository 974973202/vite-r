import React, { useCallback, useEffect, useRef, useState } from 'react';

// memo和useCallback需要配合使用

// eslint-disable-next-line react/display-name
const ExpensiveTree: React.MemoExoticComponent<any> = React.memo(
  (props: { onSubmit: () => void }) => {
    console.log('子组件渲染');
    return (
      <div>
        <span>子组件：</span>
        <button onClick={props?.onSubmit}>点击弹出</button>
      </div>
    );
  }
);

function UseRefDemof() {
  const [text, updateText] = useState('初始值');
  const textRef = useRef<string | null>();

  useEffect(() => {
    textRef.current = text;
  });

  const handleSubmit = useCallback(() => {
    const currentText = textRef.current;
    alert(currentText);
  }, [textRef]);

  return (
    <>
      <span>父组件：</span>
      <input value={text} onChange={e => updateText(e.target.value)} />
      <ExpensiveTree onSubmit={handleSubmit} />
    </>
  );
}

export default UseRefDemof;
