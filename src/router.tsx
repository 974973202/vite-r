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
