// package: api.v1alpha1.explorer
// file: api/v1alpha1/explorer/service.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../annotations/authz_pb";
import * as api_commons_bireportgenerator_pb from "../../../api/commons/bireportgenerator_pb";
import * as api_v1alpha1_explorer_entities_pb from "../../../api/v1alpha1/explorer/entities_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetWeeksOfDataRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWeeksOfDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWeeksOfDataRequest): GetWeeksOfDataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWeeksOfDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWeeksOfDataRequest;
  static deserializeBinaryFromReader(message: GetWeeksOfDataRequest, reader: jspb.BinaryReader): GetWeeksOfDataRequest;
}

export namespace GetWeeksOfDataRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class GetWeeksOfDataResponse extends jspb.Message {
  getWeeksOfData(): number;
  setWeeksOfData(value: number): void;

  hasAccessStartDate(): boolean;
  clearAccessStartDate(): void;
  getAccessStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAccessStartDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWeeksOfDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWeeksOfDataResponse): GetWeeksOfDataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWeeksOfDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWeeksOfDataResponse;
  static deserializeBinaryFromReader(message: GetWeeksOfDataResponse, reader: jspb.BinaryReader): GetWeeksOfDataResponse;
}

export namespace GetWeeksOfDataResponse {
  export type AsObject = {
    weeksOfData: number,
    accessStartDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListDatasourceSchemasRequest extends jspb.Message {
  clearDatasourceNamesList(): void;
  getDatasourceNamesList(): Array<string>;
  setDatasourceNamesList(value: Array<string>): void;
  addDatasourceNames(value: string, index?: number): string;

  getDatasourceType(): api_v1alpha1_explorer_entities_pb.DatasourceTypeMap[keyof api_v1alpha1_explorer_entities_pb.DatasourceTypeMap];
  setDatasourceType(value: api_v1alpha1_explorer_entities_pb.DatasourceTypeMap[keyof api_v1alpha1_explorer_entities_pb.DatasourceTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasourceSchemasRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasourceSchemasRequest): ListDatasourceSchemasRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDatasourceSchemasRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasourceSchemasRequest;
  static deserializeBinaryFromReader(message: ListDatasourceSchemasRequest, reader: jspb.BinaryReader): ListDatasourceSchemasRequest;
}

export namespace ListDatasourceSchemasRequest {
  export type AsObject = {
    datasourceNamesList: Array<string>,
    datasourceType: api_v1alpha1_explorer_entities_pb.DatasourceTypeMap[keyof api_v1alpha1_explorer_entities_pb.DatasourceTypeMap],
  }
}

export class ListDatasourceSchemasResponse extends jspb.Message {
  clearSchemasList(): void;
  getSchemasList(): Array<api_v1alpha1_explorer_entities_pb.Schema>;
  setSchemasList(value: Array<api_v1alpha1_explorer_entities_pb.Schema>): void;
  addSchemas(value?: api_v1alpha1_explorer_entities_pb.Schema, index?: number): api_v1alpha1_explorer_entities_pb.Schema;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasourceSchemasResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasourceSchemasResponse): ListDatasourceSchemasResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDatasourceSchemasResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasourceSchemasResponse;
  static deserializeBinaryFromReader(message: ListDatasourceSchemasResponse, reader: jspb.BinaryReader): ListDatasourceSchemasResponse;
}

export namespace ListDatasourceSchemasResponse {
  export type AsObject = {
    schemasList: Array<api_v1alpha1_explorer_entities_pb.Schema.AsObject>,
  }
}

export class QueryRequest extends jspb.Message {
  getDatasourceName(): string;
  setDatasourceName(value: string): void;

  getDatasourceType(): api_v1alpha1_explorer_entities_pb.DatasourceTypeMap[keyof api_v1alpha1_explorer_entities_pb.DatasourceTypeMap];
  setDatasourceType(value: api_v1alpha1_explorer_entities_pb.DatasourceTypeMap[keyof api_v1alpha1_explorer_entities_pb.DatasourceTypeMap]): void;

  hasPipeline(): boolean;
  clearPipeline(): void;
  getPipeline(): string;
  setPipeline(value: string): void;

  hasPrql(): boolean;
  clearPrql(): void;
  getPrql(): string;
  setPrql(value: string): void;

  clearOrgIdsList(): void;
  getOrgIdsList(): Array<string>;
  setOrgIdsList(value: Array<string>): void;
  addOrgIds(value: string, index?: number): string;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTimezone(): string;
  setTimezone(value: string): void;

  hasPipelineParameters(): boolean;
  clearPipelineParameters(): void;
  getPipelineParameters(): api_v1alpha1_explorer_entities_pb.Parameters | undefined;
  setPipelineParameters(value?: api_v1alpha1_explorer_entities_pb.Parameters): void;

  getUiTraceId(): string;
  setUiTraceId(value: string): void;

  getComment(): string;
  setComment(value: string): void;

  getFormat(): api_v1alpha1_explorer_entities_pb.ExportFormatMap[keyof api_v1alpha1_explorer_entities_pb.ExportFormatMap];
  setFormat(value: api_v1alpha1_explorer_entities_pb.ExportFormatMap[keyof api_v1alpha1_explorer_entities_pb.ExportFormatMap]): void;

  getTimePeriod(): api_commons_bireportgenerator_pb.TimePeriodMap[keyof api_commons_bireportgenerator_pb.TimePeriodMap];
  setTimePeriod(value: api_commons_bireportgenerator_pb.TimePeriodMap[keyof api_commons_bireportgenerator_pb.TimePeriodMap]): void;

  hasReportDate(): boolean;
  clearReportDate(): void;
  getReportDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReportDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getQueryCase(): QueryRequest.QueryCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRequest): QueryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRequest;
  static deserializeBinaryFromReader(message: QueryRequest, reader: jspb.BinaryReader): QueryRequest;
}

export namespace QueryRequest {
  export type AsObject = {
    datasourceName: string,
    datasourceType: api_v1alpha1_explorer_entities_pb.DatasourceTypeMap[keyof api_v1alpha1_explorer_entities_pb.DatasourceTypeMap],
    pipeline: string,
    prql: string,
    orgIdsList: Array<string>,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timezone: string,
    pipelineParameters?: api_v1alpha1_explorer_entities_pb.Parameters.AsObject,
    uiTraceId: string,
    comment: string,
    format: api_v1alpha1_explorer_entities_pb.ExportFormatMap[keyof api_v1alpha1_explorer_entities_pb.ExportFormatMap],
    timePeriod: api_commons_bireportgenerator_pb.TimePeriodMap[keyof api_commons_bireportgenerator_pb.TimePeriodMap],
    reportDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum QueryCase {
    QUERY_NOT_SET = 0,
    PIPELINE = 3,
    PRQL = 4,
  }
}

export class QueryResponse extends jspb.Message {
  getResultUrl(): string;
  setResultUrl(value: string): void;

  getResultSizeBytes(): number;
  setResultSizeBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryResponse): QueryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryResponse;
  static deserializeBinaryFromReader(message: QueryResponse, reader: jspb.BinaryReader): QueryResponse;
}

export namespace QueryResponse {
  export type AsObject = {
    resultUrl: string,
    resultSizeBytes: number,
  }
}

export class SupportQueryRequest extends jspb.Message {
  hasQueryRequest(): boolean;
  clearQueryRequest(): void;
  getQueryRequest(): QueryRequest | undefined;
  setQueryRequest(value?: QueryRequest): void;

  getDebug(): boolean;
  setDebug(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupportQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SupportQueryRequest): SupportQueryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SupportQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupportQueryRequest;
  static deserializeBinaryFromReader(message: SupportQueryRequest, reader: jspb.BinaryReader): SupportQueryRequest;
}

export namespace SupportQueryRequest {
  export type AsObject = {
    queryRequest?: QueryRequest.AsObject,
    debug: boolean,
  }
}

export class SupportQueryResponse extends jspb.Message {
  getResultUrl(): string;
  setResultUrl(value: string): void;

  getResultSizeBytes(): number;
  setResultSizeBytes(value: number): void;

  getPrql(): string;
  setPrql(value: string): void;

  getSql(): string;
  setSql(value: string): void;

  getExplain(): string;
  setExplain(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupportQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SupportQueryResponse): SupportQueryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SupportQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupportQueryResponse;
  static deserializeBinaryFromReader(message: SupportQueryResponse, reader: jspb.BinaryReader): SupportQueryResponse;
}

export namespace SupportQueryResponse {
  export type AsObject = {
    resultUrl: string,
    resultSizeBytes: number,
    prql: string,
    sql: string,
    explain: string,
  }
}

export class QueryExplainRequest extends jspb.Message {
  hasQueryRequest(): boolean;
  clearQueryRequest(): void;
  getQueryRequest(): QueryRequest | undefined;
  setQueryRequest(value?: QueryRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryExplainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryExplainRequest): QueryExplainRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryExplainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryExplainRequest;
  static deserializeBinaryFromReader(message: QueryExplainRequest, reader: jspb.BinaryReader): QueryExplainRequest;
}

export namespace QueryExplainRequest {
  export type AsObject = {
    queryRequest?: QueryRequest.AsObject,
  }
}

export class QueryExplainResponse extends jspb.Message {
  getResultUrl(): string;
  setResultUrl(value: string): void;

  getResultSizeBytes(): number;
  setResultSizeBytes(value: number): void;

  getPrql(): string;
  setPrql(value: string): void;

  getSql(): string;
  setSql(value: string): void;

  getExplain(): string;
  setExplain(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryExplainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryExplainResponse): QueryExplainResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryExplainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryExplainResponse;
  static deserializeBinaryFromReader(message: QueryExplainResponse, reader: jspb.BinaryReader): QueryExplainResponse;
}

export namespace QueryExplainResponse {
  export type AsObject = {
    resultUrl: string,
    resultSizeBytes: number,
    prql: string,
    sql: string,
    explain: string,
  }
}

