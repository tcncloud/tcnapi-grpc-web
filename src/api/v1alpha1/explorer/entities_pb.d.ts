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

  getIsTimeFilter(): boolean;
  setIsTimeFilter(value: boolean): void;

  getIsDefaultTimeFilter(): boolean;
  setIsDefaultTimeFilter(value: boolean): void;

  getIsJoinColumn(): boolean;
  setIsJoinColumn(value: boolean): void;

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
    isTimeFilter: boolean,
    isDefaultTimeFilter: boolean,
    isJoinColumn: boolean,
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

  getCategory(): string;
  setCategory(value: string): void;

  getSubCategory(): string;
  setSubCategory(value: string): void;

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
    category: string,
    subCategory: string,
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

export class ResultFile extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getSizeBytes(): number;
  setSizeBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResultFile.AsObject;
  static toObject(includeInstance: boolean, msg: ResultFile): ResultFile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResultFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResultFile;
  static deserializeBinaryFromReader(message: ResultFile, reader: jspb.BinaryReader): ResultFile;
}

export namespace ResultFile {
  export type AsObject = {
    url: string,
    sizeBytes: number,
  }
}

export class ExportOptions extends jspb.Message {
  getDelimiter(): string;
  setDelimiter(value: string): void;

  getQuoteCharacter(): QuoteCharacterMap[keyof QuoteCharacterMap];
  setQuoteCharacter(value: QuoteCharacterMap[keyof QuoteCharacterMap]): void;

  getNoHeader(): boolean;
  setNoHeader(value: boolean): void;

  getExportFormat(): ExportFormatMap[keyof ExportFormatMap];
  setExportFormat(value: ExportFormatMap[keyof ExportFormatMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportOptions.AsObject;
  static toObject(includeInstance: boolean, msg: ExportOptions): ExportOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportOptions;
  static deserializeBinaryFromReader(message: ExportOptions, reader: jspb.BinaryReader): ExportOptions;
}

export namespace ExportOptions {
  export type AsObject = {
    delimiter: string,
    quoteCharacter: QuoteCharacterMap[keyof QuoteCharacterMap],
    noHeader: boolean,
    exportFormat: ExportFormatMap[keyof ExportFormatMap],
  }
}

export interface ExportFormatMap {
  REPORT_FORMAT_UNSPECIFIED: 0;
  REPORT_FORMAT_CSV: 1;
  REPORT_FORMAT_PARQUET: 2;
  REPORT_FORMAT_TSV: 3;
  REPORT_FORMAT_TXT: 4;
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
  DATASOURCE_TYPE_INSTANT_DATA: 3;
}

export const DatasourceType: DatasourceTypeMap;

export interface ResultTypeMap {
  RESULT_TYPE_UNSPECIFIED: 0;
  RESULT_TYPE_RAW: 1;
  RESULT_TYPE_FORMAT: 2;
  RESULT_TYPE_SUMMARY: 3;
  RESULT_TYPE_REPORT: 4;
}

export const ResultType: ResultTypeMap;

export interface QuoteCharacterMap {
  QUOTE_CHARACTER_UNSPECIFIED: 0;
  QUOTE_CHARACTER_DOUBLE_QUOTE: 1;
  QUOTE_CHARACTER_SINGLE_QUOTE: 2;
}

export const QuoteCharacter: QuoteCharacterMap;

