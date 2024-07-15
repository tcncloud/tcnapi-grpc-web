// package: api.commons
// file: api/commons/dem_explorer.proto

import * as jspb from "google-protobuf";

export class SchemaField extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getColumnType(): SchemaTypeMap[keyof SchemaTypeMap];
  setColumnType(value: SchemaTypeMap[keyof SchemaTypeMap]): void;

  getIsPrimaryKey(): boolean;
  setIsPrimaryKey(value: boolean): void;

  getIsLowCardinality(): boolean;
  setIsLowCardinality(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchemaField.AsObject;
  static toObject(includeInstance: boolean, msg: SchemaField): SchemaField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SchemaField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchemaField;
  static deserializeBinaryFromReader(message: SchemaField, reader: jspb.BinaryReader): SchemaField;
}

export namespace SchemaField {
  export type AsObject = {
    name: string,
    columnType: SchemaTypeMap[keyof SchemaTypeMap],
    isPrimaryKey: boolean,
    isLowCardinality: boolean,
  }
}

export class Schema extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDatasourceType(): DatasourceTypeMap[keyof DatasourceTypeMap];
  setDatasourceType(value: DatasourceTypeMap[keyof DatasourceTypeMap]): void;

  clearFieldsList(): void;
  getFieldsList(): Array<SchemaField>;
  setFieldsList(value: Array<SchemaField>): void;
  addFields(value?: SchemaField, index?: number): SchemaField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Schema.AsObject;
  static toObject(includeInstance: boolean, msg: Schema): Schema.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Schema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Schema;
  static deserializeBinaryFromReader(message: Schema, reader: jspb.BinaryReader): Schema;
}

export namespace Schema {
  export type AsObject = {
    name: string,
    datasourceType: DatasourceTypeMap[keyof DatasourceTypeMap],
    fieldsList: Array<SchemaField.AsObject>,
  }
}

export interface SchemaTypeMap {
  SCHEMA_TYPE_UNSPECIFIED: 0;
  SCHEMA_TYPE_INT: 2;
  SCHEMA_TYPE_FLOAT: 3;
  SCHEMA_TYPE_STRING: 5;
  SCHEMA_TYPE_BOOL: 6;
  SCHEMA_TYPE_TIMESTAMP: 7;
  SCHEMA_TYPE_INT_ARRAY: 8;
  SCHEMA_TYPE_FLOAT_ARRAY: 9;
  SCHEMA_TYPE_STRING_ARRAY: 10;
  SCHEMA_TYPE_BOOL_ARRAY: 11;
}

export const SchemaType: SchemaTypeMap;

export interface DatasourceTypeMap {
  DATASOURCE_TYPE_UNSPECIFIED: 0;
  DATASOURCE_TYPE_VFS: 1;
  DATASOURCE_TYPE_CLICKHOUSE: 2;
}

export const DatasourceType: DatasourceTypeMap;

