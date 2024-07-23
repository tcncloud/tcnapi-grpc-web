// package: api.v1alpha1.explorer
// file: api/v1alpha1/explorer/service.proto

import * as jspb from "google-protobuf";
import * as api_v1alpha1_explorer_entities_pb from "../../../api/v1alpha1/explorer/entities_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ListDatasourceSchemasRequest extends jspb.Message {
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

