### handlesontable

```js
// 安装
yarn add handsontable@6.2.2 @handsontable/react@8.x

// 使用
import { HotTable } from '@handsontable/react';
import 'handsontable/dist/handsontable.full.min.css';
<HotTable
    data={[
        ['', 'Tesla', 'Volvo', 'Toyota', 'Ford'],
        ['2019', 10, 11, 12, 13],
        ['2020', 20, 11, 14, 13],
        ['2021', 30, 15, 12, 13],
    ]}
    rowHeaders={true}
    colHeaders={true}
    height="auto"
    licenseKey="non-commercial-and-evaluation" // for non-commercial use only
    />
```

```js
import { HotTable, HotColumn } from '@handsontable/react';
import { Button } from 'antd';
import 'handsontable/dist/handsontable.full.min.css';
import 'handsontable/languages/zh-CN';
import { useRef, useState } from 'react';
import { data } from './config';
import './index.css';

function customHandsontable() {
  const hotTableRef = useRef<any>(null);

  return (
    <>
      <Button
        onClick={() => {
          const hotInstance = hotTableRef?.current?.hotInstance;
          const data = hotInstance.getData();
          console.log(data);
        }}
      >
        获取数据
      </Button>
      {/* 基础使用 */}
      <HotTable
        settings={{
          data: [
            ['', 'Tesla', 'Volvo', 'Toyota', 'Ford'],
            ['2019', 10, 11, 12, 13],
            ['2020', 20, 11, 14, 13],
            ['2021', 30, 15, 12, 13],
          ],
          nestedHeaders: [['Tesla', { label: 'Volvo', colspan: 2 }, 'Ford']],
          // mergeCells: [
          //   { row: 0, col: 0, rowspan: 1, colspan: 2 }, // 合并第一级表头的两列
          //   { row: 0, col: 2, rowspan: 1, colspan: 2 }, // 合并第二级表头的两列
          // ],
          // columns: [
          //   { data: 'name', title: 'Name' },
          //   { data: 'age', title: 'Age' },
          //   { data: 'address', title: 'Address' },
          //   { data: 'phone', title: 'Phone' },
          // ],
          rowHeaders: false,
          colHeaders: false,
          // colHeaders: true,
        }}
      />
      <HotTable
        // data={[
        //   ['2017-01', '北京', '冰箱', '3399', 530],
        //   ['2017-01', '天津', '空调', '4299', 522],
        //   ['2017-01', '上海', '洗衣机', '1299', 544],
        //   ['2017-01', '广州', '彩电', '4599', 562],
        //   ['2017-01', '深圳', '热水器', '1099', 430],
        //   ['2017-02', '重庆', '笔记本电脑', '4999', 666],
        //   ['2017-02', '厦门', '油烟机', '2899', 438],
        //   ['2017-02', '青岛', '饮水机', '899', 620],
        //   ['2017-02', '大连', '手机', '1999', 500],
        // ]}
        fillHandle={false} // 不允许拖动复制
        ref={hotTableRef}
        data={[
          {
            date1: '日期',
            date: '日期',
            place: '地址',
            goods: '商品',
            price: '价格',
            销量: '销量',
          },
          {
            date1: '日期1',
            date: '日期1',
            place: '地址1',
            goods: '商品1',
            price: '价格1',
            销量: '销量1',
          },
          {
            date: '2017-01',
            date1: '2017-01',
            place: '北京',
            goods: '冰箱',
            price: 3399,
            销量: 530,
          },
          {
            date: '2017-01',
            place: '天津',
            goods: '空调',
            price: 4299,
            销量: 522,
          },
          {
            date: '2017-01',
            place: '上海',
            goods: '洗衣机',
            price: 1299,
            销量: 544,
          },
          {
            date: '2017-01',
            place: '广州',
            goods: '彩电',
            price: 4599,
            销量: 562,
          },
          {
            date: '2017-01',
            place: '',
            goods: '热水器',
            price: 1099,
            销量: 430,
          },
          {
            date: '2017-02',
            place: '重庆',
            goods: '笔记本电脑',
            price: 4999,
            销量: 666,
          },
          {
            date: '2017-02',
            goods: '油烟机',
            price: 2899,
            销量: 438,
          },
          {
            date: '2017-02',
            place: '青岛',
            goods: '饮水机',
            price: 1099,
            销量: 620,
          },
          {
            date: '2017-02',
            place: '大连',
            goods: '手机',
            price: 1999,
            销量: 500,
          },
        ]}
        // rowHeaders={true}
        manualColumnResize={true}
        // colHeaders={['日期', '销售地点', '销售商品', '单价', '销量']}
        mergeCells={[
          // {row: 起始行数, col: 起始列数, rowspan: 合并行数, colspan:合并列数 }
          { row: 0, col: 0, rowspan: 1, colspan: 2 },
          { row: 5, col: 0, rowspan: 4, colspan: 1 },
          { row: 0, col: 5, rowspan: 2, colspan: 1 },
        ]}
        className="htCenter htMiddle" // 居中 垂直
        customBorders={[
          {
            range: {
              //多个单元格
              from: {
                //起始位置
                row: 1,
                col: 1,
              },
              to: {
                row: 3,
                col: 4,
              },
            },
            top: {
              //结束位置
              width: 2,
              color: '#5292F7',
              background: 'red',
            },
            left: {
              width: 2,
              color: 'orange',
            },
            bottom: {
              width: 2,
              color: 'red',
            },
            right: {
              width: 2,
              color: 'magenta',
            },
          },
          {
            //单一单元格
            row: 2,
            col: 2,
            left: {
              width: 2,
              color: 'red',
            },
            right: {
              width: 1,
              color: 'green',
            },
          },
        ]}
        // readOnly={true}
        cell={[
          {
            row: 0,
            col: 4,
            className: 'htCenter htMiddle colHeadersClassName',
            readOnly: true,
          }, // 右对齐垂直居中，只读
          {
            row: 0,
            col: 1,
            className: 'htCenter htMiddle colHeadersClassName',
            readOnly: true,
          }, // 右对齐垂直居中，只读
        ]}
        settings={{
          cells: (row, col) => {
            if ((row === 0 || row === 1) && hotTableRef?.current?.hotInstance) {
              //设置单元格背景色
              const cell = hotTableRef?.current?.hotInstance.getCell(row, col);
              cell.style.background = '#00FF90';
            }
          },
        }}
      ></HotTable>
      <HotTable
        data={data}
        height={450}
        colWidths={[140, 192, 100, 90, 90, 110, 97, 100, 126]}
        colHeaders={[
          'Company name',
          'Name',
          'Sell date',
          'In stock',
          'Qty',
          'Progress',
          'Rating',
          'Order ID',
          'Country',
        ]}
        dropdownMenu={true}
        hiddenColumns={{
          indicators: true,
        }}
        contextMenu={true}
        multiColumnSorting={true}
        filters={true}
        rowHeaders={true}
        // afterGetColHeader={alignHeaders}
        // beforeRenderer={addClassesToRows}
        // afterGetRowHeader={drawCheckboxInRowHeaders}
        // afterOnCellMouseDown={changeCheckboxCell}
        manualRowMove={true}
      >
        <HotColumn columnSettings={{ data: 1 }} />
        <HotColumn data={3} />
        <HotColumn data={4} type="date" allowInvalid={false} />
        <HotColumn data={6} type="checkbox" className="htCenter" />
        <HotColumn data={7} type="numeric" />
        <HotColumn data={8} readOnly={true} className="htMiddle"></HotColumn>
        <HotColumn data={9} readOnly={true} className="htCenter"></HotColumn>
        <HotColumn data={5} />
        <HotColumn data={2} />
      </HotTable>
    </>
  );
}
export default customHandsontable;
```

### API 解析
