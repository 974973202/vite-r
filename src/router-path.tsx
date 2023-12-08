import { lazy, LazyExoticComponent } from 'react';

export type RouteType = {
  path?: string;
  component?: LazyExoticComponent<any>;
  children?: RouteType[];
  caseSensitive?: boolean; // 路径大小写敏感属性，默认是不敏感
  index?: boolean;
  label?: string;
  disabled?: boolean;
};

export const routesPath: Array<RouteType> = [
  {
    path: '/',
    component: lazy(() => import('./App')),
    children: [
      // {
      //   index: true,
      //   label: 'index',
      //   disabled: true,
      //   component: lazy(() => import('./page/index')),
      // },
      {
        path: '/css',
        label: 'css',
        component: lazy(() => import('./page/css')),
      },
      {
        path: '/leet-code',
        label: 'leetCode',
        disabled: true,
        component: lazy(() => import('./page/leet-code')),
      },
      {
        path: '/drag',
        label: 'drag',
        disabled: true,
        component: lazy(() => import('./page/drag')),
      },
      {
        path: '/react',
        label: 'react',
        children: [
          {
            path: '/react/react-memo',
            label: 'react-memo',
            component: lazy(() => import('./page/react-memo')),
          },
          {
            path: '/react/use-callback',
            label: 'use-callback',
            component: lazy(() => import('./page/use-callback')),
          },
        ],
      },
      {
        path: '/wave',
        label: 'wave',
        disabled: true,
        component: lazy(() => import('./page/wave')),
      },
      {
        path: '/prismjs',
        label: 'prismjs',
        component: lazy(() => import('./page/prismjs')),
      },
      {
        path: '/code-HighLight',
        label: 'code-HighLight',
        component: lazy(() => import('./page/prismjs/code-highLight')),
      },
      {
        path: '/bytemd',
        label: 'bytemd',
        component: lazy(() => import('./page/bytemd')),
      },
      {
        path: '/canvas/dynamic-logo',
        label: 'dynamicLogo',
        component: lazy(() => import('./page/canvas/dynamic-logo')),
      },
      {
        path: '/three',
        label: 'three',
        component: lazy(() => import('./page/three')),
      },
      {
        path: '/text-styles',
        label: 'textStyles',
        component: lazy(() => import('./page/text-styles')),
      },
      {
        path: '/await-test',
        label: 'awaitTest',
        disabled: true,
        component: lazy(() => import('./page/await-test')),
      },
      {
        path: '/export-xlsx',
        label: 'export-xlsx',
        component: lazy(() => import('./page/export-xlsx')),
      },
      {
        path: '*',
        component: lazy(() => import('./page/404')),
      },
    ],
  },
];
