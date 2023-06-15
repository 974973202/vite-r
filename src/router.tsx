/*
 * @Author: liangzx liangzx@chinacscs.com
 * @Date: 2022-09-07 15:44:08
 * @LastEditors: liangzx liangzx@chinacscs.com
 * @LastEditTime: 2023-03-30 10:04:41
 * @FilePath: \vite-r\src\router.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { lazy, Suspense, LazyExoticComponent } from 'react';
import {
  BrowserRouter,
  Routes,
  useRoutes,
  LayoutRouteProps,
  PathRouteProps,
  IndexRouteProps,
  RouteObject,
} from 'react-router-dom';

type RouteType = {
  path?: string;
  component: LazyExoticComponent<any>;
  children?: RouteType[];
  caseSensitive?: boolean; // 路径大小写敏感属性，默认是不敏感
  index?: boolean;
};

const routes: Array<RouteType> = [
  {
    path: '/',
    component: lazy(() => import('./App')),
    children: [
      {
        index: true,
        component: lazy(() => import('./page/index')),
      },
      {
        path: '/css',
        component: lazy(() => import('./page/css')),
      },
      {
        path: '/leet-code',
        component: lazy(() => import('./page/leet-code')),
      },
      {
        path: '/drag',
        component: lazy(() => import('./page/drag')),
      },
      {
        path: '/react-memo',
        component: lazy(() => import('./page/react-memo')),
      },
      {
        path: '/use-callback',
        component: lazy(() => import('./page/use-callback')),
      },
      {
        path: '/wave',
        component: lazy(() => import('./page/wave')),
      },
      {
        path: '/prismjs',
        component: lazy(() => import('./page/prismjs')),
      },
      {
        path: '/bytemd',
        component: lazy(() => import('./page/bytemd')),
      },
      {
        path: '/canvas/dynamic-logo',
        component: lazy(() => import('./page/canvas/dynamic-logo')),
      },
      {
        path: '/three',
        component: lazy(() => import('./page/three')),
      },
      {
        path: '/text-styles',
        component: lazy(() => import('./page/text-styles')),
      },
      {
        path: '/handsontable',
        component: lazy(() => import('./page/handsontable')),
      },
    ],
  },
];

const syncRouter = (routes: RouteType[]): RouteObject[] => {
  const routers: RouteObject[] = [];
  routes.forEach(route => {
    routers.push({
      path: route.path ?? '',
      index: route.index ?? false,
      caseSensitive: route.caseSensitive ?? false,
      element: (
        <Suspense fallback={<div>loading...</div>}>
          <route.component />
        </Suspense>
      ),
      children: route.children && syncRouter(route.children),
    });
  });
  return routers;
};

export default () => useRoutes(syncRouter(routes));
