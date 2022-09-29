function Drag() {
  return (
    <>
      <div
        style={{ width: 100, height: 100, backgroundColor: 'red' }}
        draggable
        onDragStart={e => {
          // e.dataTransfer.effectAllowed = 'move';
          // event.dataTransfer.setData 默认只能传递 string 类型数据，如果是一个对象，可以使用 JSON.stringify 转换。
          e.dataTransfer.setData('value', '数据传递');
          console.log('被拖动', e);
        }}
        onDragEnd={e => {
          console.log('拖拽结束', e);
        }}
      ></div>
      <div
        style={{ width: 400, height: 400, border: '1px solid black' }}
        onDragEnter={() => {
          console.log('有东西进来');
        }}
        onDragLeave={() => {
          console.log('那东西离开了');
        }}
        onDrop={e => {
          const value = e.dataTransfer.getData('value');
          console.log('那东西在我这放下了！！！', value);
        }}
        onDragOver={event => {
          //
          // 通过在目标元素的 ondragover 事件中取消默认事件, 才能触发onDrop
          event.preventDefault();
        }}
      ></div>
    </>
  );
}

export default Drag;
