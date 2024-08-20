// package: api.v1alpha1.explorer
// file: api/v1alpha1/explorer/entities.proto

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

  getColumnDescription(): string;
  setColumnDescription(value: string): void;

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
    columnDescription: string,
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

  getTableDescription(): string;
  setTableDescription(value: string): void;

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
    tableDescription: string,
  }
}

export class Parameters extends jspb.Message {
  getParametersMap(): jspb.Map<string, Parameters.Parameter>;
  clearParametersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Parameters.AsObject;
  static toObject(includeInstance: boolean, msg: Parameters): Parameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Parameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Parameters;
  static deserializeBinaryFromReader(message: Parameters, reader: jspb.BinaryReader): Parameters;
}

export namespace Parameters {
  export type AsObject = {
    parametersMap: Array<[string, Parameters.Parameter.AsObject]>,
  }

  export class Parameter extends jspb.Message {
    getValue(): string;
    setValue(value: string): void;

    getDataType(): string;
    setDataType(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Parameter.AsObject;
    static toObject(includeInstance: boolean, msg: Parameter): Parameter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Parameter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Parameter;
    static deserializeBinaryFromReader(message: Parameter, reader: jspb.BinaryReader): Parameter;
  }

  export namespace Parameter {
    export type AsObject = {
      value: string,
      dataType: string,
    }
  }
}

export interface ExportFormatMap {
  REPORT_FORMAT_UNSPECIFIED: 0;
  REPORT_FORMAT_CSV: 1;
  REPORT_FORMAT_PARQUET: 2;
}

export const ExportFormat: ExportFormatMap;

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
  SCHEMA_TYPE_MAP: 12;
}

export const SchemaType: SchemaTypeMap;

export interface DatasourceTypeMap {
  DATASOURCE_TYPE_UNSPECIFIED: 0;
  DATASOURCE_TYPE_VFS: 1;
  DATASOURCE_TYPE_CLICKHOUSE: 2;
}

export const DatasourceType: DatasourceTypeMap;

