### handlesontable

```js
// 安装
yarn add handsontable @handsontable/react

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

### API 解析
