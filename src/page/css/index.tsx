import React from 'react';
import { Tabs } from 'antd';
import C1 from './c1';
import C2 from './c2';
import C3 from './c3';
import C4 from './c4';
import C5 from './c5';
import C6 from './c6';
import C7 from './c7';
import C8 from './c8';
import C9 from './c9';
import C10 from './c10';

const CSS: React.FC = () => {
  const tabItems = [
    {
      label: 'Tab 1',
      key: '1',
      children: <C1 />,
    },
    {
      label: 'Tab 2',
      key: '2',
      children: <C2 />,
    },
    {
      label: 'Tab 3',
      key: '3',
      children: <C3 />,
    },
    {
      label: 'Tab 4',
      key: '4',
      children: <C4 />,
    },
    {
      label: 'Tab 5',
      key: '5',
      children: <C5 />,
    },
    {
      label: 'Tab 6',
      key: '6',
      children: <C6 />,
    },
    {
      label: 'Tab 7',
      key: '7',
      children: <C7 />,
    },
    {
      label: 'Tab 8',
      key: '8',
      children: <C8 />,
    },
    {
      label: 'Tab 9',
      key: '9',
      children: <C9 />,
    },
    {
      label: 'Tab 10',
      key: '10',
      children: <C10 />,
    },
  ];

  return (
    <Tabs type="card">
      {tabItems.map(item => (
        <Tabs.TabPane key={item.key} tab={item.label}>
          {item.children}
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
};

export default CSS;
