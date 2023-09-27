export const isPc = (function () {
  const userAgentInfo = navigator.userAgent;
  const Agents = [
    'Android',
    'iPhone',
    'SymbianOS',
    'Windows Phone',
    'iPad',
    'iPod',
  ];
  return !Agents.some(agent => userAgentInfo.indexOf(agent) > -1);
})();

export const styleText = [
  `/*
    * 我是个前端工程师。
    * 看这个空白的页面。
    * 我的工作就是给这种空白的页面加点儿东西。
    * 说起来手机和电脑还得区分一下。
    * 你现在用的是————${isPc ? '电脑' : '手机'}
  */
  
  /* 首先给所有元素加上过渡效果 */
  * {
    -webkit-transition: all .5s;
    transition: all .5s;
  }
  /* 白色背景太单调了。来点背景 */
  .styleEditor {
    color: #fff;
    background-color: darkslategray;
    overflow: auto;
  ${
    isPc
      ? `width: 48vw;
    height: calc(100vh - 112px);`
      : `width: 96vw;
    height: 48vh;`
  }
    border: 1px solid;
  /* 文字太近了，我们来调一下 */

    font-size: 14px;
    line-height: 1.5;
    padding: 10px;
  }
  
  /* 这些代码颜色都一样。加点儿高亮区别来 */
  .token.selector{ color: rgb(133,153,0) }
  .token.property{ color: rgb(187,137,0) }
  .token.punctuation{ color: yellow }
  .token.function{ color: rgb(42,161,152) }
  .token.comment{ color: rgb(177,177,177) }
  
  /* 加个 3D 效果 */
  .wrapper {
    perspective: 1000px;
    -webkit-perspective: 1000px;
  }
  
  .styleEditor {
  ${
    isPc
      ? `transform: rotateY(10deg);
  -webkit-transform: rotateY(10deg);`
      : `transform: rotateX(-10deg);
  -webkit-transform: rotateX(-10deg);`
  } ${
    isPc
      ? ''
      : `
    transform-origin: 50% 0% 0;
    -webkit-transform-origin: 50% 0% 0;`
  }
  }
  
  /*
  * 用代码画一个爱心。
  */
  
  /* 首先，来一个画板 */
  .heartWrapper {
  ${
    isPc
      ? `width: 48vw;
    height: calc(100vh - 112px);`
      : `width: 96vw;
    height: 48vh;`
  }
    position: relative;
    border: 1px solid;
    background-color: white;
  ${
    isPc
      ? ''
      : `
    transform-origin: 50% 0% 0;
    -webkit-transform-origin: 50% 0% 0;`
  }
  }
  
  /* 画一个方块，当左心室和右心室 */
  .heart {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -50px 0 0 -50px;
    border-radius: 20px;
    background: #E88D8D;
    transform: rotate(45deg);
  }
  
  /* 画上左心房 */
  .heart::before {
    content: '';
    background: #E88D8D;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    position: absolute;
    left: -38px;
    top: 1px;
  }
  
  /* 再画上右心房 */
  .heart::after {
    content: '';
    background: #E88D8D;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    position: absolute;
    right: -1px;
    top: -38px;
  }
  
  /* 太单调了，让心跳动起来 */
  @keyframes throb {
  0% {
    transform: scale(1) rotate(45deg);
    opacity: 1;
  }
  
  100% {
    transform: scale(1.65) rotate(45deg);
    opacity: 0
  }
  }
  
  .bounce {
    opacity: 0.2;
    animation: throb 1s infinite linear;
  }
  /*
  * Ok，完成！
  * XX，XXXX！
  */
  
  `,
];
