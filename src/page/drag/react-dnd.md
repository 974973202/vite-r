### react-dnd 排序

```js
function DragBox({
  index,
  list,
  changePosition,
}: {
  index: number;
  list: any[];
  changePosition: (dragIndex: number, hoverIndex: number) => void;
}) {
  const ref = useRef(null);

  const [{ isOver, dropClassName }, drop] = useDrop({
    accept: 'DragBox',
    // hover: (item: { index: number }, monitor) => {
    //   // 这里用节流可能会导致拖动排序不灵敏
    //   if (!ref.current) return;

    //   let dragIndex = item.index;
    //   let hoverIndex = index;
    //   if (dragIndex === hoverIndex) return; // 如果回到自己的坑，那就什么都不做
    //   changePosition(dragIndex, hoverIndex); // 调用传入的方法完成交换
    //   item.index = hoverIndex; // 将当前当前移动到Box的index赋值给当前拖动的box，不然会出现两个盒子疯狂抖动！
    // },
    collect: (monitor) => {
      const { key } = monitor.getItem() || {};
      console.log(index, key);

      if (index === key) {
        return {};
      }
      const newIndex = list.findIndex((x: any) => x.id === index);
      const oldIndex = list.findIndex((x: any) => x.id === key);
      return {
        isOver: monitor.isOver(),
        dropClassName: oldIndex < newIndex ? ' ruleDrop-over-downward' : ' ruleDrop-over-upward',
      };
    },
    // 放下回调
    drop: (item: { key: number }) => {
      const newIndex = list.findIndex((x: any) => x.id === index);
      const oldIndex = list.findIndex((x: any) => x.id === item.key);
      if (oldIndex !== newIndex) {
        changePosition(newIndex, oldIndex);
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'DragBox',
    item: {
      key: index,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(), // css样式需要
    }),
  });

  drop(drag(ref));

  return (
    <div style={{ opacity: isDragging ? 0.5 : 1 }} className={`${styles.addRuleInfo}${isOver ? dropClassName : ''}`}>
      <DragOutlined ref={ref} style={{ marginLeft: 32 }} />
      <DeleteOutlined style={{ margin: '0 8px' }} />
      <Select
        options={[
          { label: 1, value: 1 },
          { label: 2, value: 2 },
        ]}
        size="small"
        style={{
          width: 150,
          marginRight: 8,
        }}
      ></Select>
      <Input size="small" />
    </div>
  );
}
```
