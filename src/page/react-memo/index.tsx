import React, { useState, useCallback, useMemo } from 'react';

// 类组件 PureComponent
// class Test extends React.PureComponent<any, any> {
//   render() {
//     console.log('Test Render');
//     return (
//       <div>
//         <h1>{this.props.text}</h1>
//         <button onClick={this.props.onClick}>改变文本</button>
//       </div>
//     );
//   }
// }

// 函数式组件 memo
function T(props: any) {
  console.log('Test Render');
  return (
    <div>
      <h1>{props.text}</h1>
      <button onClick={props.onClick}>改变文本</button>
    </div>
  );
}
const Test = React.memo(T);

function Parent() {
  console.log('Parent Render');
  const [txt, setTxt] = useState(1);
  const [n, setN] = useState(0);
  const handleClick = useCallback(() => {
    setTxt(txt + 1);
  }, [txt]);
  // const handleClick = () => {
  //   setTxt(txt + 1);
  // };

  // 3. 使用useMemo缓存组件， 让T只渲染一次
  const BTest = useMemo(() => {
    console.log('useMemo');
    return <T text={txt} onClick={handleClick} />;
  }, [txt]);

  return (
    <div>
      {/* 函数的地址每次渲染都发生了变化，导致了子组件跟着重新渲染，若子组件是经过优化的组件，则可能导致优化失效 */}
      <Test text={txt} onClick={handleClick} />

      {/* {BTest} */}

      <input
        type="number"
        value={n}
        onChange={e => {
          setN(parseInt(e.target.value));
        }}
      />
    </div>
  );
}

export default Parent;
