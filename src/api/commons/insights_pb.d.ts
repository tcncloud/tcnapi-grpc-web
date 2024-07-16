// package: api.commons
// file: api/commons/insights.proto

import * as jspb from "google-protobuf";

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

export interface OutputConfigurationColumnSummaryTypeMap {
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_UNSPECIFIED: 0;
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_AVG: 1;
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_SUM: 2;
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_MIN: 3;
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_MAX: 4;
}

export const OutputConfigurationColumnSummaryType: OutputConfigurationColumnSummaryTypeMap;

