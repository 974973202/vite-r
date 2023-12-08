/*
 * @Author: liangzx liangzx@chinacscs.com
 * @Date: 2023-02-09 15:59:29
 * @LastEditors: liangzx liangzx@chinacscs.com
 * @LastEditTime: 2023-02-09 15:59:43
 * @FilePath: \micro-react-library\src\financial-operation\xlsx\interface.ts
 * @Description:
 *
 */
export type DefaultValueType = Record<string, any>;
export type DataIndex =
  | string
  | number
  | undefined
  | readonly (string | number)[];

export interface MergesArrType {
  s: {
    c: number;
    r: number;
  };
  e: {
    c: number;
    r: number;
  };
}

export interface MergesObjType {
  [key: string]: {
    colSpan?: number;
    rowSpan?: number;
  };
}

export interface ColumnType {
  key?: string;
  title?: string;
  dataIndex?: string;
  mergesObj?: MergesObjType;
  render?: (value: any, row: DefaultValueType, rowIndex: number) => any;
  onTxBodyCell?: (
    row: DefaultValueType,
    rowIndex: number
  ) => { style: CellStyleType };
  children?: ColumnType[];

  [key: string]: any;
}

export interface DataType {
  [key: string]: any;
}

export interface TableType {
  sheetName?: string;
  dataSource?: DataType[];
  columns?: ColumnType[];
}

export interface CellStyleType {
  fontBold?: boolean;
  fontName?: string;
  fontColorRgb?: string;
  fillFgColorRgb?: string;
  borderStyle?: string;
  borderColorRgb?: string;
  alignmentHorizontal?: string;
  alignmentVertical?: string;
}

export interface SheetType {
  '!ref'?: string;
  '!cols'?: { wpx?: number }[];
  '!rows'?: { hpx?: number }[];
  '!merges'?: MergesArrType[];

  [key: string]:
    | {
        t?: string;
        v?: string | number;
        s?: DefaultValueType;
      }
    | undefined
    | string
    | { wpx?: number }[]
    | { hpx?: number }[]
    | MergesArrType[];
}

export interface HeaderCellType {
  title?: string;
  merges?: MergesArrType;
  txHeaderCellStyle?: CellStyleType;
}

export interface ExportProps {
  fileName?: string;
  sheetNames?: (string | number)[];
  columns: ColumnType[][];
  dataSource: DataType[][];
  showHeader?: boolean;
  raw?: boolean;
  cellStyle?: CellStyleType;
  headerCellStyle?: CellStyleType;
  bodyCellStyle?: CellStyleType;
  useRender?: boolean;
  onTxBodyRow?: (
    row: DefaultValueType,
    rowIndex: number
  ) => { style: CellStyleType };
}

export interface FormatToSheetProps {
  columns: ColumnType[];
  dataSource: DataType[];
  showHeader: boolean;
  raw: boolean;
  cellStyle?: CellStyleType;
  headerCellStyle?: CellStyleType;
  bodyCellStyle?: CellStyleType;
  useRender?: boolean;
  onTxBodyRow?: (
    row: DefaultValueType,
    rowIndex: number
  ) => { style: CellStyleType };
}

export interface GetHeaderDataProps {
  columns: ColumnType[];
  headerLevel: number;
  cellStyle?: CellStyleType;
  headerCellStyle?: CellStyleType;
}

export interface GetMergeProps {
  renderResult: {
    props: { colSpan: number; rowSpan: number };
  };
  colIndex: number;
  rowIndex: number;
  headerLevel: number;
}
