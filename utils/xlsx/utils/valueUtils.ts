import { DataIndex } from '../interface';

import { sameType } from './base';

function toArray<T>(arr: T | readonly T[]): T[] {
  if (arr === undefined || arr === null) {
    return [];
  }
  return (Array.isArray(arr) ? arr : [arr]) as T[];
}

/**
 * 通过path获取值
 */
export const getPathValue = (record: any, path: DataIndex): string | number => {
  // Skip if path is empty
  if (!path && typeof path !== 'number') {
    return '';
  }
  const pathList = toArray(path);
  let current = record;
  for (const prop of pathList) {
    if (!current) {
      return '';
    }
    current = current[prop];
  }
  return current;
};

/**
 * 获取render值
 */
export const getRenderValue = (renderResult: any) => {
  const values: string[] = [];
  const dealChildren = (child: any) => {
    if (sameType(child, 'String') || sameType(child, 'Number')) {
      values.push(child);
    }
    if (sameType(child, 'Object')) {
      const { children } = child.props || child;
      if (sameType(children, 'String') || sameType(children, 'Number')) {
        values.push(children);
      }
      if (sameType(children, 'Object')) {
        dealChildren(children);
      }
      if (sameType(children, 'Array')) {
        for (const _child of children) {
          dealChildren(_child);
        }
      }
    }
    if (sameType(child, 'Array')) {
      for (const _child of child) {
        dealChildren(_child);
      }
    }
  };
  if (renderResult?.children) {
    dealChildren(renderResult.children);
  } else {
    dealChildren(renderResult);
  }
  return values.join('');
};
