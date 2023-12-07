/*
 * @Author: liangzx liangzx@chinacscs.com
 * @Date: 2022-09-07 15:44:08
 * @LastEditors: liangzx liangzx@chinacscs.com
 * @LastEditTime: 2023-03-30 10:04:41
 * @FilePath: \vite-r\src\router.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Suspense } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import LoadingSword from './loading-sword';
import { RouteType, routesPath } from './router-path';

const syncRouter = (routes: RouteType[]): any => {
  return routes.map(route => ({
    path: route.path ?? '',
    index: route.index ?? false,
    caseSensitive: route.caseSensitive ?? false,
    element: (
      <Suspense fallback={<LoadingSword />}>
        {route.component ? <route.component /> : <Outlet />}
      </Suspense>
    ),
    children: route.children && syncRouter(route.children),
  }));
};

export default () => useRoutes(syncRouter(routesPath));
