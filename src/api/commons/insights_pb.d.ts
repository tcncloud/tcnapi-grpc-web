// package: api.commons
// file: api/commons/insights.proto

import * as jspb from "google-protobuf";

export class TableVisualization extends jspb.Message {
  clearTableColumnDetailsList(): void;
  getTableColumnDetailsList(): Array<TableColumnConfig>;
  setTableColumnDetailsList(value: Array<TableColumnConfig>): void;
  addTableColumnDetails(value?: TableColumnConfig, index?: number): TableColumnConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableVisualization.AsObject;
  static toObject(includeInstance: boolean, msg: TableVisualization): TableVisualization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableVisualization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableVisualization;
  static deserializeBinaryFromReader(message: TableVisualization, reader: jspb.BinaryReader): TableVisualization;
}

export namespace TableVisualization {
  export type AsObject = {
    tableColumnDetailsList: Array<TableColumnConfig.AsObject>,
  }
}

export class TableColumnConfig extends jspb.Message {
  getColumnName(): string;
  setColumnName(value: string): void;

  getColumnWidth(): number;
  setColumnWidth(value: number): void;

  getHideColumn(): boolean;
  setHideColumn(value: boolean): void;

  getRenamedAs(): string;
  setRenamedAs(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<ColumnOperation>;
  setOperationsList(value: Array<ColumnOperation>): void;
  addOperations(value?: ColumnOperation, index?: number): ColumnOperation;

  getColumnSummary(): OutputConfigurationColumnSummaryTypeMap[keyof OutputConfigurationColumnSummaryTypeMap];
  setColumnSummary(value: OutputConfigurationColumnSummaryTypeMap[keyof OutputConfigurationColumnSummaryTypeMap]): void;

  getDescription(): string;
  setDescription(value: string): void;

  getSortDirection(): ColumnSortMap[keyof ColumnSortMap];
  setSortDirection(value: ColumnSortMap[keyof ColumnSortMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableColumnConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TableColumnConfig): TableColumnConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableColumnConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableColumnConfig;
  static deserializeBinaryFromReader(message: TableColumnConfig, reader: jspb.BinaryReader): TableColumnConfig;
}

export namespace TableColumnConfig {
  export type AsObject = {
    columnName: string,
    columnWidth: number,
    hideColumn: boolean,
    renamedAs: string,
    operationsList: Array<ColumnOperation.AsObject>,
    columnSummary: OutputConfigurationColumnSummaryTypeMap[keyof OutputConfigurationColumnSummaryTypeMap],
    description: string,
    sortDirection: ColumnSortMap[keyof ColumnSortMap],
  }
}

export class FormatSeries extends jspb.Message {
  clearFormatPartsList(): void;
  getFormatPartsList(): Array<string>;
  setFormatPartsList(value: Array<string>): void;
  addFormatParts(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FormatSeries.AsObject;
  static toObject(includeInstance: boolean, msg: FormatSeries): FormatSeries.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FormatSeries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FormatSeries;
  static deserializeBinaryFromReader(message: FormatSeries, reader: jspb.BinaryReader): FormatSeries;
}

export namespace FormatSeries {
  export type AsObject = {
    formatPartsList: Array<string>,
  }
}

export class ColumnOperation extends jspb.Message {
  getOperationType(): OperationTypeMap[keyof OperationTypeMap];
  setOperationType(value: OperationTypeMap[keyof OperationTypeMap]): void;

  hasFloatValue(): boolean;
  clearFloatValue(): void;
  getFloatValue(): number;
  setFloatValue(value: number): void;

  hasFormatSeries(): boolean;
  clearFormatSeries(): void;
  getFormatSeries(): FormatSeries | undefined;
  setFormatSeries(value?: FormatSeries): void;

  getOperationValueCase(): ColumnOperation.OperationValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColumnOperation.AsObject;
  static toObject(includeInstance: boolean, msg: ColumnOperation): ColumnOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ColumnOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColumnOperation;
  static deserializeBinaryFromReader(message: ColumnOperation, reader: jspb.BinaryReader): ColumnOperation;
}

export namespace ColumnOperation {
  export type AsObject = {
    operationType: OperationTypeMap[keyof OperationTypeMap],
    floatValue: number,
    formatSeries?: FormatSeries.AsObject,
  }

  export enum OperationValueCase {
    OPERATION_VALUE_NOT_SET = 0,
    FLOAT_VALUE = 2,
    FORMAT_SERIES = 3,
  }
}

export interface InsightPermissionTypeMap {
  INSIGHT_PERMISSION_TYPE_COMMON_LIBRARY: 0;
  INSIGHT_PERMISSION_TYPE_ORG: 1;
}

export const InsightPermissionType: InsightPermissionTypeMap;

export interface InsightTypeMap {
  INSIGHT_TYPE_TABLE_VIEW: 0;
}

export const InsightType: InsightTypeMap;

export interface InsightVfsSchemaTypeMap {
  INSIGHT_VFS_SCHEMA_TYPE_STRING: 0;
  INSIGHT_VFS_SCHEMA_TYPE_INT64: 1;
  INSIGHT_VFS_SCHEMA_TYPE_FLOAT64: 2;
  INSIGHT_VFS_SCHEMA_TYPE_BOOLEAN: 3;
  INSIGHT_VFS_SCHEMA_TYPE_DATETIME: 4;
}

export const InsightVfsSchemaType: InsightVfsSchemaTypeMap;

export interface OutputConfigurationTypeMap {
  OUTPUT_CONFIGURATION_TYPE_UNSPECIFIED: 0;
  OUTPUT_CONFIGURATION_TYPE_TABLE: 1;
  OUTPUT_CONFIGURATION_TYPE_MULTI_SERIES: 2;
  OUTPUT_CONFIGURATION_TYPE_PIE_CHART: 3;
}

export const OutputConfigurationType: OutputConfigurationTypeMap;

export interface OperationTypeMap {
  OPERATION_TYPE_UNSPECIFIED: 0;
  OPERATION_TYPE_DATE: 1;
  OPERATION_TYPE_PREFIX: 2;
  OPERATION_TYPE_SUFFIX: 3;
  OPERATION_TYPE_DURATION: 4;
  OPERATION_TYPE_ADD: 5;
  OPERATION_TYPE_SUBTRACT: 6;
  OPERATION_TYPE_MULTIPLY: 7;
  OPERATION_TYPE_DIVIDE: 8;
  OPERATION_TYPE_FORMAT_NUMBER: 9;
  OPERATION_TYPE_PRECISION: 10;
}

export const OperationType: OperationTypeMap;

export interface ColumnSortMap {
  COLUMN_SORT_UNSPECIFIED: 0;
  COLUMN_SORT_ASCENDING: 1;
  COLUMN_SORT_DESCENDING: 2;
}

export const ColumnSort: ColumnSortMap;

export interface OutputConfigurationColumnSummaryTypeMap {
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_UNSPECIFIED: 0;
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_AVG: 1;
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_SUM: 2;
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_MIN: 3;
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_MAX: 4;
}

export const OutputConfigurationColumnSummaryType: OutputConfigurationColumnSummaryTypeMap;

