// package: api.commons
// file: api/commons/insights.proto

import * as jspb from "google-protobuf";

export class TableVisualization extends jspb.Message {
  getTableColumnDetailsMap(): jspb.Map<string, TableColumnConfig>;
  clearTableColumnDetailsMap(): void;
  getDefaultColumnWidth(): number;
  setDefaultColumnWidth(value: number): void;

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
    tableColumnDetailsMap: Array<[string, TableColumnConfig.AsObject]>,
    defaultColumnWidth: number,
  }
}

export class TableColumnConfig extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getColumnWidth(): number;
  setColumnWidth(value: number): void;

  getHideColumn(): boolean;
  setHideColumn(value: boolean): void;

  getLabel(): string;
  setLabel(value: string): void;

  getColumnFormatType(): OutputConfigurationColumnFormatTypeMap[keyof OutputConfigurationColumnFormatTypeMap];
  setColumnFormatType(value: OutputConfigurationColumnFormatTypeMap[keyof OutputConfigurationColumnFormatTypeMap]): void;

  clearColumnFormatValuesList(): void;
  getColumnFormatValuesList(): Array<string>;
  setColumnFormatValuesList(value: Array<string>): void;
  addColumnFormatValues(value: string, index?: number): string;

  getColumnSummary(): OutputConfigurationColumnSummaryTypeMap[keyof OutputConfigurationColumnSummaryTypeMap];
  setColumnSummary(value: OutputConfigurationColumnSummaryTypeMap[keyof OutputConfigurationColumnSummaryTypeMap]): void;

  getDescription(): string;
  setDescription(value: string): void;

  getOrder(): number;
  setOrder(value: number): void;

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
    key: string,
    columnWidth: number,
    hideColumn: boolean,
    label: string,
    columnFormatType: OutputConfigurationColumnFormatTypeMap[keyof OutputConfigurationColumnFormatTypeMap],
    columnFormatValuesList: Array<string>,
    columnSummary: OutputConfigurationColumnSummaryTypeMap[keyof OutputConfigurationColumnSummaryTypeMap],
    description: string,
    order: number,
    sortDirection: ColumnSortMap[keyof ColumnSortMap],
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
}

export const OutputConfigurationType: OutputConfigurationTypeMap;

export interface OutputConfigurationColumnFormatTypeMap {
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_UNSPECIFIED: 0;
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_PERCENTAGE: 1;
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_DOLLARS: 2;
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_DATE: 3;
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_PREFIX: 4;
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_SUFFIX: 5;
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_DURATION: 6;
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_DURATION_SECONDS: 7;
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_NUMBER: 8;
}

export const OutputConfigurationColumnFormatType: OutputConfigurationColumnFormatTypeMap;

export interface ColumnSortMap {
  COLUMN_SORT_ASCENDING: 0;
  COLUMN_SORT_DESCENDING: 1;
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

