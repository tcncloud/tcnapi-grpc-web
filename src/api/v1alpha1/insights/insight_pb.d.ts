// package: api.v1alpha1.insights
// file: api/v1alpha1/insights/insight.proto

import * as jspb from "google-protobuf";
import * as api_commons_insights_pb from "../../../api/commons/insights_pb";
import * as api_v1alpha1_explorer_entities_pb from "../../../api/v1alpha1/explorer/entities_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Insight extends jspb.Message {
  getInsightId(): string;
  setInsightId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getInsightType(): api_commons_insights_pb.InsightTypeMap[keyof api_commons_insights_pb.InsightTypeMap];
  setInsightType(value: api_commons_insights_pb.InsightTypeMap[keyof api_commons_insights_pb.InsightTypeMap]): void;

  getInsightVersion(): number;
  setInsightVersion(value: number): void;

  getBody(): string;
  setBody(value: string): void;

  getInsightPermissionType(): api_commons_insights_pb.InsightPermissionTypeMap[keyof api_commons_insights_pb.InsightPermissionTypeMap];
  setInsightPermissionType(value: api_commons_insights_pb.InsightPermissionTypeMap[keyof api_commons_insights_pb.InsightPermissionTypeMap]): void;

  getResourceId(): string;
  setResourceId(value: string): void;

  getStandardInsight(): boolean;
  setStandardInsight(value: boolean): void;

  getDatasourceType(): api_v1alpha1_explorer_entities_pb.DatasourceTypeMap[keyof api_v1alpha1_explorer_entities_pb.DatasourceTypeMap];
  setDatasourceType(value: api_v1alpha1_explorer_entities_pb.DatasourceTypeMap[keyof api_v1alpha1_explorer_entities_pb.DatasourceTypeMap]): void;

  getDatasourceName(): string;
  setDatasourceName(value: string): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPipelineNode(): boolean;
  clearPipelineNode(): void;
  getPipelineNode(): PipelineNode | undefined;
  setPipelineNode(value?: PipelineNode): void;

  getInsightContentCase(): Insight.InsightContentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Insight.AsObject;
  static toObject(includeInstance: boolean, msg: Insight): Insight.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Insight, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Insight;
  static deserializeBinaryFromReader(message: Insight, reader: jspb.BinaryReader): Insight;
}

export namespace Insight {
  export type AsObject = {
    insightId: string,
    name: string,
    description: string,
    insightType: api_commons_insights_pb.InsightTypeMap[keyof api_commons_insights_pb.InsightTypeMap],
    insightVersion: number,
    body: string,
    insightPermissionType: api_commons_insights_pb.InsightPermissionTypeMap[keyof api_commons_insights_pb.InsightPermissionTypeMap],
    resourceId: string,
    standardInsight: boolean,
    datasourceType: api_v1alpha1_explorer_entities_pb.DatasourceTypeMap[keyof api_v1alpha1_explorer_entities_pb.DatasourceTypeMap],
    datasourceName: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    pipelineNode?: PipelineNode.AsObject,
  }

  export enum InsightContentCase {
    INSIGHT_CONTENT_NOT_SET = 0,
    PIPELINE_NODE = 16,
  }
}

export class PublishInsightRequest extends jspb.Message {
  getResourceId(): string;
  setResourceId(value: string): void;

  getDestinationResourceId(): string;
  setDestinationResourceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishInsightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublishInsightRequest): PublishInsightRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishInsightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishInsightRequest;
  static deserializeBinaryFromReader(message: PublishInsightRequest, reader: jspb.BinaryReader): PublishInsightRequest;
}

export namespace PublishInsightRequest {
  export type AsObject = {
    resourceId: string,
    destinationResourceId: string,
  }
}

export class PublishInsightResponse extends jspb.Message {
  hasInsight(): boolean;
  clearInsight(): void;
  getInsight(): Insight | undefined;
  setInsight(value?: Insight): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishInsightResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublishInsightResponse): PublishInsightResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishInsightResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishInsightResponse;
  static deserializeBinaryFromReader(message: PublishInsightResponse, reader: jspb.BinaryReader): PublishInsightResponse;
}

export namespace PublishInsightResponse {
  export type AsObject = {
    insight?: Insight.AsObject,
  }
}

export class CreateInsightRequest extends jspb.Message {
  hasInsight(): boolean;
  clearInsight(): void;
  getInsight(): Insight | undefined;
  setInsight(value?: Insight): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInsightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInsightRequest): CreateInsightRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateInsightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInsightRequest;
  static deserializeBinaryFromReader(message: CreateInsightRequest, reader: jspb.BinaryReader): CreateInsightRequest;
}

export namespace CreateInsightRequest {
  export type AsObject = {
    insight?: Insight.AsObject,
  }
}

export class CreateInsightResponse extends jspb.Message {
  hasInsight(): boolean;
  clearInsight(): void;
  getInsight(): Insight | undefined;
  setInsight(value?: Insight): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInsightResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInsightResponse): CreateInsightResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateInsightResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInsightResponse;
  static deserializeBinaryFromReader(message: CreateInsightResponse, reader: jspb.BinaryReader): CreateInsightResponse;
}

export namespace CreateInsightResponse {
  export type AsObject = {
    insight?: Insight.AsObject,
  }
}

export class ListInsightsRequest extends jspb.Message {
  clearInsightPermissionTypesList(): void;
  getInsightPermissionTypesList(): Array<api_commons_insights_pb.InsightPermissionTypeMap[keyof api_commons_insights_pb.InsightPermissionTypeMap]>;
  setInsightPermissionTypesList(value: Array<api_commons_insights_pb.InsightPermissionTypeMap[keyof api_commons_insights_pb.InsightPermissionTypeMap]>): void;
  addInsightPermissionTypes(value: api_commons_insights_pb.InsightPermissionTypeMap[keyof api_commons_insights_pb.InsightPermissionTypeMap], index?: number): api_commons_insights_pb.InsightPermissionTypeMap[keyof api_commons_insights_pb.InsightPermissionTypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInsightsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInsightsRequest): ListInsightsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInsightsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInsightsRequest;
  static deserializeBinaryFromReader(message: ListInsightsRequest, reader: jspb.BinaryReader): ListInsightsRequest;
}

export namespace ListInsightsRequest {
  export type AsObject = {
    insightPermissionTypesList: Array<api_commons_insights_pb.InsightPermissionTypeMap[keyof api_commons_insights_pb.InsightPermissionTypeMap]>,
  }
}

export class ListInsightsStreamResponse extends jspb.Message {
  hasInsights(): boolean;
  clearInsights(): void;
  getInsights(): Insight | undefined;
  setInsights(value?: Insight): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInsightsStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListInsightsStreamResponse): ListInsightsStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInsightsStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInsightsStreamResponse;
  static deserializeBinaryFromReader(message: ListInsightsStreamResponse, reader: jspb.BinaryReader): ListInsightsStreamResponse;
}

export namespace ListInsightsStreamResponse {
  export type AsObject = {
    insights?: Insight.AsObject,
  }
}

export class ListInsightsResponse extends jspb.Message {
  clearInsightsList(): void;
  getInsightsList(): Array<Insight>;
  setInsightsList(value: Array<Insight>): void;
  addInsights(value?: Insight, index?: number): Insight;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInsightsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListInsightsResponse): ListInsightsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInsightsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInsightsResponse;
  static deserializeBinaryFromReader(message: ListInsightsResponse, reader: jspb.BinaryReader): ListInsightsResponse;
}

export namespace ListInsightsResponse {
  export type AsObject = {
    insightsList: Array<Insight.AsObject>,
  }
}

export class ListOrgInsightsRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrgInsightsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrgInsightsRequest): ListOrgInsightsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrgInsightsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrgInsightsRequest;
  static deserializeBinaryFromReader(message: ListOrgInsightsRequest, reader: jspb.BinaryReader): ListOrgInsightsRequest;
}

export namespace ListOrgInsightsRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class ListOrgInsightsResponse extends jspb.Message {
  clearInsightsList(): void;
  getInsightsList(): Array<Insight>;
  setInsightsList(value: Array<Insight>): void;
  addInsights(value?: Insight, index?: number): Insight;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrgInsightsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrgInsightsResponse): ListOrgInsightsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrgInsightsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrgInsightsResponse;
  static deserializeBinaryFromReader(message: ListOrgInsightsResponse, reader: jspb.BinaryReader): ListOrgInsightsResponse;
}

export namespace ListOrgInsightsResponse {
  export type AsObject = {
    insightsList: Array<Insight.AsObject>,
  }
}

export class UpdateInsightRequest extends jspb.Message {
  hasInsight(): boolean;
  clearInsight(): void;
  getInsight(): Insight | undefined;
  setInsight(value?: Insight): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInsightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInsightRequest): UpdateInsightRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateInsightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInsightRequest;
  static deserializeBinaryFromReader(message: UpdateInsightRequest, reader: jspb.BinaryReader): UpdateInsightRequest;
}

export namespace UpdateInsightRequest {
  export type AsObject = {
    insight?: Insight.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateInsightResponse extends jspb.Message {
  hasInsight(): boolean;
  clearInsight(): void;
  getInsight(): Insight | undefined;
  setInsight(value?: Insight): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInsightResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInsightResponse): UpdateInsightResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateInsightResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInsightResponse;
  static deserializeBinaryFromReader(message: UpdateInsightResponse, reader: jspb.BinaryReader): UpdateInsightResponse;
}

export namespace UpdateInsightResponse {
  export type AsObject = {
    insight?: Insight.AsObject,
  }
}

export class DeleteInsightRequest extends jspb.Message {
  getInsightId(): string;
  setInsightId(value: string): void;

  getResourceId(): string;
  setResourceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInsightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInsightRequest): DeleteInsightRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteInsightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInsightRequest;
  static deserializeBinaryFromReader(message: DeleteInsightRequest, reader: jspb.BinaryReader): DeleteInsightRequest;
}

export namespace DeleteInsightRequest {
  export type AsObject = {
    insightId: string,
    resourceId: string,
  }
}

export class DeleteInsightResponse extends jspb.Message {
  hasInsight(): boolean;
  clearInsight(): void;
  getInsight(): Insight | undefined;
  setInsight(value?: Insight): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInsightResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInsightResponse): DeleteInsightResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteInsightResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInsightResponse;
  static deserializeBinaryFromReader(message: DeleteInsightResponse, reader: jspb.BinaryReader): DeleteInsightResponse;
}

export namespace DeleteInsightResponse {
  export type AsObject = {
    insight?: Insight.AsObject,
  }
}

export class GetInsightRequest extends jspb.Message {
  getInsightId(): string;
  setInsightId(value: string): void;

  getResourceId(): string;
  setResourceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInsightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInsightRequest): GetInsightRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInsightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInsightRequest;
  static deserializeBinaryFromReader(message: GetInsightRequest, reader: jspb.BinaryReader): GetInsightRequest;
}

export namespace GetInsightRequest {
  export type AsObject = {
    insightId: string,
    resourceId: string,
  }
}

export class GetInsightResponse extends jspb.Message {
  hasInsight(): boolean;
  clearInsight(): void;
  getInsight(): Insight | undefined;
  setInsight(value?: Insight): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInsightResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInsightResponse): GetInsightResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInsightResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInsightResponse;
  static deserializeBinaryFromReader(message: GetInsightResponse, reader: jspb.BinaryReader): GetInsightResponse;
}

export namespace GetInsightResponse {
  export type AsObject = {
    insight?: Insight.AsObject,
  }
}

export class GetVfsSchemaRequest extends jspb.Message {
  getAliasName(): string;
  setAliasName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVfsSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVfsSchemaRequest): GetVfsSchemaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVfsSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVfsSchemaRequest;
  static deserializeBinaryFromReader(message: GetVfsSchemaRequest, reader: jspb.BinaryReader): GetVfsSchemaRequest;
}

export namespace GetVfsSchemaRequest {
  export type AsObject = {
    aliasName: string,
  }
}

export class GetVfsSchemaResponse extends jspb.Message {
  clearFieldsList(): void;
  getFieldsList(): Array<GetVfsSchemaResponse.Field>;
  setFieldsList(value: Array<GetVfsSchemaResponse.Field>): void;
  addFields(value?: GetVfsSchemaResponse.Field, index?: number): GetVfsSchemaResponse.Field;

  getVfsDescription(): string;
  setVfsDescription(value: string): void;

  getAliasName(): string;
  setAliasName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVfsSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVfsSchemaResponse): GetVfsSchemaResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVfsSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVfsSchemaResponse;
  static deserializeBinaryFromReader(message: GetVfsSchemaResponse, reader: jspb.BinaryReader): GetVfsSchemaResponse;
}

export namespace GetVfsSchemaResponse {
  export type AsObject = {
    fieldsList: Array<GetVfsSchemaResponse.Field.AsObject>,
    vfsDescription: string,
    aliasName: string,
  }

  export class Field extends jspb.Message {
    getColumnName(): string;
    setColumnName(value: string): void;

    getColumnType(): api_commons_insights_pb.InsightVfsSchemaTypeMap[keyof api_commons_insights_pb.InsightVfsSchemaTypeMap];
    setColumnType(value: api_commons_insights_pb.InsightVfsSchemaTypeMap[keyof api_commons_insights_pb.InsightVfsSchemaTypeMap]): void;

    getColumnDescription(): string;
    setColumnDescription(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Field.AsObject;
    static toObject(includeInstance: boolean, msg: Field): Field.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Field, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Field;
    static deserializeBinaryFromReader(message: Field, reader: jspb.BinaryReader): Field;
  }

  export namespace Field {
    export type AsObject = {
      columnName: string,
      columnType: api_commons_insights_pb.InsightVfsSchemaTypeMap[keyof api_commons_insights_pb.InsightVfsSchemaTypeMap],
      columnDescription: string,
    }
  }
}

export class ListVfsesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVfsesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListVfsesRequest): ListVfsesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListVfsesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVfsesRequest;
  static deserializeBinaryFromReader(message: ListVfsesRequest, reader: jspb.BinaryReader): ListVfsesRequest;
}

export namespace ListVfsesRequest {
  export type AsObject = {
  }
}

export class ListVfsesResponse extends jspb.Message {
  clearAliasesList(): void;
  getAliasesList(): Array<string>;
  setAliasesList(value: Array<string>): void;
  addAliases(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVfsesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListVfsesResponse): ListVfsesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListVfsesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVfsesResponse;
  static deserializeBinaryFromReader(message: ListVfsesResponse, reader: jspb.BinaryReader): ListVfsesResponse;
}

export namespace ListVfsesResponse {
  export type AsObject = {
    aliasesList: Array<string>,
  }
}

export class ListVfsSchemasRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVfsSchemasRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListVfsSchemasRequest): ListVfsSchemasRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListVfsSchemasRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVfsSchemasRequest;
  static deserializeBinaryFromReader(message: ListVfsSchemasRequest, reader: jspb.BinaryReader): ListVfsSchemasRequest;
}

export namespace ListVfsSchemasRequest {
  export type AsObject = {
  }
}

export class ListVfsSchemasResponse extends jspb.Message {
  clearVfsSchemasList(): void;
  getVfsSchemasList(): Array<GetVfsSchemaResponse>;
  setVfsSchemasList(value: Array<GetVfsSchemaResponse>): void;
  addVfsSchemas(value?: GetVfsSchemaResponse, index?: number): GetVfsSchemaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVfsSchemasResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListVfsSchemasResponse): ListVfsSchemasResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListVfsSchemasResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVfsSchemasResponse;
  static deserializeBinaryFromReader(message: ListVfsSchemasResponse, reader: jspb.BinaryReader): ListVfsSchemasResponse;
}

export namespace ListVfsSchemasResponse {
  export type AsObject = {
    vfsSchemasList: Array<GetVfsSchemaResponse.AsObject>,
  }
}

export class TableVisualization extends jspb.Message {
  clearTableColumnDetailsList(): void;
  getTableColumnDetailsList(): Array<TableColumnConfig>;
  setTableColumnDetailsList(value: Array<TableColumnConfig>): void;
  addTableColumnDetails(value?: TableColumnConfig, index?: number): TableColumnConfig;

  getDelimiter(): string;
  setDelimiter(value: string): void;

  getQuoteCharacter(): QuoteCharacterMap[keyof QuoteCharacterMap];
  setQuoteCharacter(value: QuoteCharacterMap[keyof QuoteCharacterMap]): void;

  getNoHeader(): boolean;
  setNoHeader(value: boolean): void;

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
    delimiter: string,
    quoteCharacter: QuoteCharacterMap[keyof QuoteCharacterMap],
    noHeader: boolean,
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

  hasInsightContextualAction(): boolean;
  clearInsightContextualAction(): void;
  getInsightContextualAction(): InsightContextualAction | undefined;
  setInsightContextualAction(value?: InsightContextualAction): void;

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
    insightContextualAction?: InsightContextualAction.AsObject,
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

export class PadOperation extends jspb.Message {
  getPadCharacter(): string;
  setPadCharacter(value: string): void;

  getPadLeft(): boolean;
  setPadLeft(value: boolean): void;

  getPadSize(): number;
  setPadSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PadOperation.AsObject;
  static toObject(includeInstance: boolean, msg: PadOperation): PadOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PadOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PadOperation;
  static deserializeBinaryFromReader(message: PadOperation, reader: jspb.BinaryReader): PadOperation;
}

export namespace PadOperation {
  export type AsObject = {
    padCharacter: string,
    padLeft: boolean,
    padSize: number,
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

  hasPadOperation(): boolean;
  clearPadOperation(): void;
  getPadOperation(): PadOperation | undefined;
  setPadOperation(value?: PadOperation): void;

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
    padOperation?: PadOperation.AsObject,
  }

  export enum OperationValueCase {
    OPERATION_VALUE_NOT_SET = 0,
    FLOAT_VALUE = 2,
    FORMAT_SERIES = 3,
    PAD_OPERATION = 4,
  }
}

export class InsightContextualAction extends jspb.Message {
  getType(): InsightContextualActionTypeMap[keyof InsightContextualActionTypeMap];
  setType(value: InsightContextualActionTypeMap[keyof InsightContextualActionTypeMap]): void;

  hasLink(): boolean;
  clearLink(): void;
  getLink(): LinkAction | undefined;
  setLink(value?: LinkAction): void;

  hasComponent(): boolean;
  clearComponent(): void;
  getComponent(): ComponentAction | undefined;
  setComponent(value?: ComponentAction): void;

  hasDrillThrough(): boolean;
  clearDrillThrough(): void;
  getDrillThrough(): DrillThroughAction | undefined;
  setDrillThrough(value?: DrillThroughAction): void;

  getActionCase(): InsightContextualAction.ActionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsightContextualAction.AsObject;
  static toObject(includeInstance: boolean, msg: InsightContextualAction): InsightContextualAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InsightContextualAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsightContextualAction;
  static deserializeBinaryFromReader(message: InsightContextualAction, reader: jspb.BinaryReader): InsightContextualAction;
}

export namespace InsightContextualAction {
  export type AsObject = {
    type: InsightContextualActionTypeMap[keyof InsightContextualActionTypeMap],
    link?: LinkAction.AsObject,
    component?: ComponentAction.AsObject,
    drillThrough?: DrillThroughAction.AsObject,
  }

  export enum ActionCase {
    ACTION_NOT_SET = 0,
    LINK = 2,
    COMPONENT = 3,
    DRILL_THROUGH = 4,
  }
}

export class LinkAction extends jspb.Message {
  clearLinkElementsList(): void;
  getLinkElementsList(): Array<string>;
  setLinkElementsList(value: Array<string>): void;
  addLinkElements(value: string, index?: number): string;

  getComponentValueMap(): jspb.Map<string, string>;
  clearComponentValueMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkAction.AsObject;
  static toObject(includeInstance: boolean, msg: LinkAction): LinkAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinkAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkAction;
  static deserializeBinaryFromReader(message: LinkAction, reader: jspb.BinaryReader): LinkAction;
}

export namespace LinkAction {
  export type AsObject = {
    linkElementsList: Array<string>,
    componentValueMap: Array<[string, string]>,
  }
}

export class ComponentAction extends jspb.Message {
  getComponentName(): string;
  setComponentName(value: string): void;

  getComponentValueMap(): jspb.Map<string, string>;
  clearComponentValueMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComponentAction.AsObject;
  static toObject(includeInstance: boolean, msg: ComponentAction): ComponentAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComponentAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComponentAction;
  static deserializeBinaryFromReader(message: ComponentAction, reader: jspb.BinaryReader): ComponentAction;
}

export namespace ComponentAction {
  export type AsObject = {
    componentName: string,
    componentValueMap: Array<[string, string]>,
  }
}

export class DrillThroughAction extends jspb.Message {
  getInsightResourceId(): string;
  setInsightResourceId(value: string): void;

  clearDrillThroughParametersList(): void;
  getDrillThroughParametersList(): Array<DrillThroughParameter>;
  setDrillThroughParametersList(value: Array<DrillThroughParameter>): void;
  addDrillThroughParameters(value?: DrillThroughParameter, index?: number): DrillThroughParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DrillThroughAction.AsObject;
  static toObject(includeInstance: boolean, msg: DrillThroughAction): DrillThroughAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DrillThroughAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DrillThroughAction;
  static deserializeBinaryFromReader(message: DrillThroughAction, reader: jspb.BinaryReader): DrillThroughAction;
}

export namespace DrillThroughAction {
  export type AsObject = {
    insightResourceId: string,
    drillThroughParametersList: Array<DrillThroughParameter.AsObject>,
  }
}

export class DrillThroughParameter extends jspb.Message {
  getParameterName(): string;
  setParameterName(value: string): void;

  getColumnName(): string;
  setColumnName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DrillThroughParameter.AsObject;
  static toObject(includeInstance: boolean, msg: DrillThroughParameter): DrillThroughParameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DrillThroughParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DrillThroughParameter;
  static deserializeBinaryFromReader(message: DrillThroughParameter, reader: jspb.BinaryReader): DrillThroughParameter;
}

export namespace DrillThroughParameter {
  export type AsObject = {
    parameterName: string,
    columnName: string,
  }
}

export class OutputConfiguration extends jspb.Message {
  getResourceId(): string;
  setResourceId(value: string): void;

  getOutputConfigurationTitle(): string;
  setOutputConfigurationTitle(value: string): void;

  getOutputConfigurationType(): OutputConfigurationTypeMap[keyof OutputConfigurationTypeMap];
  setOutputConfigurationType(value: OutputConfigurationTypeMap[keyof OutputConfigurationTypeMap]): void;

  getInsightResourceId(): string;
  setInsightResourceId(value: string): void;

  getIsDefault(): boolean;
  setIsDefault(value: boolean): void;

  hasBlob(): boolean;
  clearBlob(): void;
  getBlob(): string;
  setBlob(value: string): void;

  hasTableVisualization(): boolean;
  clearTableVisualization(): void;
  getTableVisualization(): TableVisualization | undefined;
  setTableVisualization(value?: TableVisualization): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getBodyCase(): OutputConfiguration.BodyCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: OutputConfiguration): OutputConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OutputConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputConfiguration;
  static deserializeBinaryFromReader(message: OutputConfiguration, reader: jspb.BinaryReader): OutputConfiguration;
}

export namespace OutputConfiguration {
  export type AsObject = {
    resourceId: string,
    outputConfigurationTitle: string,
    outputConfigurationType: OutputConfigurationTypeMap[keyof OutputConfigurationTypeMap],
    insightResourceId: string,
    isDefault: boolean,
    blob: string,
    tableVisualization?: TableVisualization.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum BodyCase {
    BODY_NOT_SET = 0,
    BLOB = 7,
    TABLE_VISUALIZATION = 8,
  }
}

export class CreateOutputConfigurationRequest extends jspb.Message {
  hasOutputConfiguration(): boolean;
  clearOutputConfiguration(): void;
  getOutputConfiguration(): OutputConfiguration | undefined;
  setOutputConfiguration(value?: OutputConfiguration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOutputConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOutputConfigurationRequest): CreateOutputConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOutputConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOutputConfigurationRequest;
  static deserializeBinaryFromReader(message: CreateOutputConfigurationRequest, reader: jspb.BinaryReader): CreateOutputConfigurationRequest;
}

export namespace CreateOutputConfigurationRequest {
  export type AsObject = {
    outputConfiguration?: OutputConfiguration.AsObject,
  }
}

export class CreateOutputConfigurationResponse extends jspb.Message {
  hasOutputConfiguration(): boolean;
  clearOutputConfiguration(): void;
  getOutputConfiguration(): OutputConfiguration | undefined;
  setOutputConfiguration(value?: OutputConfiguration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOutputConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOutputConfigurationResponse): CreateOutputConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOutputConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOutputConfigurationResponse;
  static deserializeBinaryFromReader(message: CreateOutputConfigurationResponse, reader: jspb.BinaryReader): CreateOutputConfigurationResponse;
}

export namespace CreateOutputConfigurationResponse {
  export type AsObject = {
    outputConfiguration?: OutputConfiguration.AsObject,
  }
}

export class ListOutputConfigurationsRequest extends jspb.Message {
  getInsightResourceId(): string;
  setInsightResourceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOutputConfigurationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOutputConfigurationsRequest): ListOutputConfigurationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOutputConfigurationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOutputConfigurationsRequest;
  static deserializeBinaryFromReader(message: ListOutputConfigurationsRequest, reader: jspb.BinaryReader): ListOutputConfigurationsRequest;
}

export namespace ListOutputConfigurationsRequest {
  export type AsObject = {
    insightResourceId: string,
  }
}

export class ListOutputConfigurationsResponse extends jspb.Message {
  clearOutputConfigurationsList(): void;
  getOutputConfigurationsList(): Array<OutputConfiguration>;
  setOutputConfigurationsList(value: Array<OutputConfiguration>): void;
  addOutputConfigurations(value?: OutputConfiguration, index?: number): OutputConfiguration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOutputConfigurationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOutputConfigurationsResponse): ListOutputConfigurationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOutputConfigurationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOutputConfigurationsResponse;
  static deserializeBinaryFromReader(message: ListOutputConfigurationsResponse, reader: jspb.BinaryReader): ListOutputConfigurationsResponse;
}

export namespace ListOutputConfigurationsResponse {
  export type AsObject = {
    outputConfigurationsList: Array<OutputConfiguration.AsObject>,
  }
}

export class UpdateOutputConfigurationRequest extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasOutputConfiguration(): boolean;
  clearOutputConfiguration(): void;
  getOutputConfiguration(): OutputConfiguration | undefined;
  setOutputConfiguration(value?: OutputConfiguration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOutputConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOutputConfigurationRequest): UpdateOutputConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOutputConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOutputConfigurationRequest;
  static deserializeBinaryFromReader(message: UpdateOutputConfigurationRequest, reader: jspb.BinaryReader): UpdateOutputConfigurationRequest;
}

export namespace UpdateOutputConfigurationRequest {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    outputConfiguration?: OutputConfiguration.AsObject,
  }
}

export class UpdateOutputConfigurationResponse extends jspb.Message {
  hasOutputConfiguration(): boolean;
  clearOutputConfiguration(): void;
  getOutputConfiguration(): OutputConfiguration | undefined;
  setOutputConfiguration(value?: OutputConfiguration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOutputConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOutputConfigurationResponse): UpdateOutputConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOutputConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOutputConfigurationResponse;
  static deserializeBinaryFromReader(message: UpdateOutputConfigurationResponse, reader: jspb.BinaryReader): UpdateOutputConfigurationResponse;
}

export namespace UpdateOutputConfigurationResponse {
  export type AsObject = {
    outputConfiguration?: OutputConfiguration.AsObject,
  }
}

export class DeleteOutputConfigurationRequest extends jspb.Message {
  getResourceId(): string;
  setResourceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOutputConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOutputConfigurationRequest): DeleteOutputConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteOutputConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOutputConfigurationRequest;
  static deserializeBinaryFromReader(message: DeleteOutputConfigurationRequest, reader: jspb.BinaryReader): DeleteOutputConfigurationRequest;
}

export namespace DeleteOutputConfigurationRequest {
  export type AsObject = {
    resourceId: string,
  }
}

export class DeleteOutputConfigurationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOutputConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOutputConfigurationResponse): DeleteOutputConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteOutputConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOutputConfigurationResponse;
  static deserializeBinaryFromReader(message: DeleteOutputConfigurationResponse, reader: jspb.BinaryReader): DeleteOutputConfigurationResponse;
}

export namespace DeleteOutputConfigurationResponse {
  export type AsObject = {
  }
}

export class GetOutputConfigurationRequest extends jspb.Message {
  getResourceId(): string;
  setResourceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOutputConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOutputConfigurationRequest): GetOutputConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOutputConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOutputConfigurationRequest;
  static deserializeBinaryFromReader(message: GetOutputConfigurationRequest, reader: jspb.BinaryReader): GetOutputConfigurationRequest;
}

export namespace GetOutputConfigurationRequest {
  export type AsObject = {
    resourceId: string,
  }
}

export class GetOutputConfigurationResponse extends jspb.Message {
  hasOutputConfiguration(): boolean;
  clearOutputConfiguration(): void;
  getOutputConfiguration(): OutputConfiguration | undefined;
  setOutputConfiguration(value?: OutputConfiguration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOutputConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOutputConfigurationResponse): GetOutputConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOutputConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOutputConfigurationResponse;
  static deserializeBinaryFromReader(message: GetOutputConfigurationResponse, reader: jspb.BinaryReader): GetOutputConfigurationResponse;
}

export namespace GetOutputConfigurationResponse {
  export type AsObject = {
    outputConfiguration?: OutputConfiguration.AsObject,
  }
}

export class SetDefaultOutputConfigurationRequest extends jspb.Message {
  getResourceId(): string;
  setResourceId(value: string): void;

  getInsightResourceId(): string;
  setInsightResourceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDefaultOutputConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetDefaultOutputConfigurationRequest): SetDefaultOutputConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDefaultOutputConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDefaultOutputConfigurationRequest;
  static deserializeBinaryFromReader(message: SetDefaultOutputConfigurationRequest, reader: jspb.BinaryReader): SetDefaultOutputConfigurationRequest;
}

export namespace SetDefaultOutputConfigurationRequest {
  export type AsObject = {
    resourceId: string,
    insightResourceId: string,
  }
}

export class SetDefaultOutputConfigurationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDefaultOutputConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetDefaultOutputConfigurationResponse): SetDefaultOutputConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDefaultOutputConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDefaultOutputConfigurationResponse;
  static deserializeBinaryFromReader(message: SetDefaultOutputConfigurationResponse, reader: jspb.BinaryReader): SetDefaultOutputConfigurationResponse;
}

export namespace SetDefaultOutputConfigurationResponse {
  export type AsObject = {
  }
}

export class GetDefaultOutputConfigurationRequest extends jspb.Message {
  getInsightResourceId(): string;
  setInsightResourceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefaultOutputConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefaultOutputConfigurationRequest): GetDefaultOutputConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefaultOutputConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefaultOutputConfigurationRequest;
  static deserializeBinaryFromReader(message: GetDefaultOutputConfigurationRequest, reader: jspb.BinaryReader): GetDefaultOutputConfigurationRequest;
}

export namespace GetDefaultOutputConfigurationRequest {
  export type AsObject = {
    insightResourceId: string,
  }
}

export class GetDefaultOutputConfigurationResponse extends jspb.Message {
  hasOutputConfiguration(): boolean;
  clearOutputConfiguration(): void;
  getOutputConfiguration(): OutputConfiguration | undefined;
  setOutputConfiguration(value?: OutputConfiguration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefaultOutputConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefaultOutputConfigurationResponse): GetDefaultOutputConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefaultOutputConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefaultOutputConfigurationResponse;
  static deserializeBinaryFromReader(message: GetDefaultOutputConfigurationResponse, reader: jspb.BinaryReader): GetDefaultOutputConfigurationResponse;
}

export namespace GetDefaultOutputConfigurationResponse {
  export type AsObject = {
    outputConfiguration?: OutputConfiguration.AsObject,
  }
}

export class PipelineNode extends jspb.Message {
  clearNodesList(): void;
  getNodesList(): Array<Node>;
  setNodesList(value: Array<Node>): void;
  addNodes(value?: Node, index?: number): Node;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PipelineNode.AsObject;
  static toObject(includeInstance: boolean, msg: PipelineNode): PipelineNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PipelineNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PipelineNode;
  static deserializeBinaryFromReader(message: PipelineNode, reader: jspb.BinaryReader): PipelineNode;
}

export namespace PipelineNode {
  export type AsObject = {
    nodesList: Array<Node.AsObject>,
  }
}

export class Node extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): string;
  setType(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  clearInputIdsList(): void;
  getInputIdsList(): Array<string>;
  setInputIdsList(value: Array<string>): void;
  addInputIds(value: string, index?: number): string;

  clearOutputIdsList(): void;
  getOutputIdsList(): Array<string>;
  setOutputIdsList(value: Array<string>): void;
  addOutputIds(value: string, index?: number): string;

  hasFromNode(): boolean;
  clearFromNode(): void;
  getFromNode(): FromNode | undefined;
  setFromNode(value?: FromNode): void;

  hasFilterNode(): boolean;
  clearFilterNode(): void;
  getFilterNode(): FilterNode | undefined;
  setFilterNode(value?: FilterNode): void;

  hasDeriveNode(): boolean;
  clearDeriveNode(): void;
  getDeriveNode(): DeriveNode | undefined;
  setDeriveNode(value?: DeriveNode): void;

  hasGroupNode(): boolean;
  clearGroupNode(): void;
  getGroupNode(): GroupNode | undefined;
  setGroupNode(value?: GroupNode): void;

  hasJoinNode(): boolean;
  clearJoinNode(): void;
  getJoinNode(): JoinNode | undefined;
  setJoinNode(value?: JoinNode): void;

  hasSelectNode(): boolean;
  clearSelectNode(): void;
  getSelectNode(): SelectNode | undefined;
  setSelectNode(value?: SelectNode): void;

  hasAggregateNode(): boolean;
  clearAggregateNode(): void;
  getAggregateNode(): AggregateNode | undefined;
  setAggregateNode(value?: AggregateNode): void;

  hasTakeNode(): boolean;
  clearTakeNode(): void;
  getTakeNode(): TakeNode | undefined;
  setTakeNode(value?: TakeNode): void;

  hasJsonNode(): boolean;
  clearJsonNode(): void;
  getJsonNode(): JsonNode | undefined;
  setJsonNode(value?: JsonNode): void;

  hasMapNode(): boolean;
  clearMapNode(): void;
  getMapNode(): MapNode | undefined;
  setMapNode(value?: MapNode): void;

  hasReplaceNode(): boolean;
  clearReplaceNode(): void;
  getReplaceNode(): ReplaceNode | undefined;
  setReplaceNode(value?: ReplaceNode): void;

  hasSortNode(): boolean;
  clearSortNode(): void;
  getSortNode(): SortNode | undefined;
  setSortNode(value?: SortNode): void;

  hasStringManipulationNode(): boolean;
  clearStringManipulationNode(): void;
  getStringManipulationNode(): StringManipulationNode | undefined;
  setStringManipulationNode(value?: StringManipulationNode): void;

  getBodyCase(): Node.BodyCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Node.AsObject;
  static toObject(includeInstance: boolean, msg: Node): Node.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Node, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Node;
  static deserializeBinaryFromReader(message: Node, reader: jspb.BinaryReader): Node;
}

export namespace Node {
  export type AsObject = {
    id: string,
    type: string,
    title: string,
    inputIdsList: Array<string>,
    outputIdsList: Array<string>,
    fromNode?: FromNode.AsObject,
    filterNode?: FilterNode.AsObject,
    deriveNode?: DeriveNode.AsObject,
    groupNode?: GroupNode.AsObject,
    joinNode?: JoinNode.AsObject,
    selectNode?: SelectNode.AsObject,
    aggregateNode?: AggregateNode.AsObject,
    takeNode?: TakeNode.AsObject,
    jsonNode?: JsonNode.AsObject,
    mapNode?: MapNode.AsObject,
    replaceNode?: ReplaceNode.AsObject,
    sortNode?: SortNode.AsObject,
    stringManipulationNode?: StringManipulationNode.AsObject,
  }

  export enum BodyCase {
    BODY_NOT_SET = 0,
    FROM_NODE = 6,
    FILTER_NODE = 7,
    DERIVE_NODE = 8,
    GROUP_NODE = 9,
    JOIN_NODE = 10,
    SELECT_NODE = 11,
    AGGREGATE_NODE = 12,
    TAKE_NODE = 13,
    JSON_NODE = 14,
    MAP_NODE = 15,
    REPLACE_NODE = 16,
    SORT_NODE = 17,
    STRING_MANIPULATION_NODE = 18,
  }
}

export class FromNode extends jspb.Message {
  getDataset(): string;
  setDataset(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FromNode.AsObject;
  static toObject(includeInstance: boolean, msg: FromNode): FromNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FromNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FromNode;
  static deserializeBinaryFromReader(message: FromNode, reader: jspb.BinaryReader): FromNode;
}

export namespace FromNode {
  export type AsObject = {
    dataset: string,
  }
}

export class FilterNode extends jspb.Message {
  hasExpression(): boolean;
  clearExpression(): void;
  getExpression(): ExpressionNode | undefined;
  setExpression(value?: ExpressionNode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterNode.AsObject;
  static toObject(includeInstance: boolean, msg: FilterNode): FilterNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilterNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterNode;
  static deserializeBinaryFromReader(message: FilterNode, reader: jspb.BinaryReader): FilterNode;
}

export namespace FilterNode {
  export type AsObject = {
    expression?: ExpressionNode.AsObject,
  }
}

export class DeriveNode extends jspb.Message {
  getColumnName(): string;
  setColumnName(value: string): void;

  hasExpression(): boolean;
  clearExpression(): void;
  getExpression(): ExpressionNode | undefined;
  setExpression(value?: ExpressionNode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeriveNode.AsObject;
  static toObject(includeInstance: boolean, msg: DeriveNode): DeriveNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeriveNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeriveNode;
  static deserializeBinaryFromReader(message: DeriveNode, reader: jspb.BinaryReader): DeriveNode;
}

export namespace DeriveNode {
  export type AsObject = {
    columnName: string,
    expression?: ExpressionNode.AsObject,
  }
}

export class GroupNode extends jspb.Message {
  clearGroupByColumnsList(): void;
  getGroupByColumnsList(): Array<string>;
  setGroupByColumnsList(value: Array<string>): void;
  addGroupByColumns(value: string, index?: number): string;

  clearAggregationColumnsList(): void;
  getAggregationColumnsList(): Array<AggregationColumn>;
  setAggregationColumnsList(value: Array<AggregationColumn>): void;
  addAggregationColumns(value?: AggregationColumn, index?: number): AggregationColumn;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupNode.AsObject;
  static toObject(includeInstance: boolean, msg: GroupNode): GroupNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupNode;
  static deserializeBinaryFromReader(message: GroupNode, reader: jspb.BinaryReader): GroupNode;
}

export namespace GroupNode {
  export type AsObject = {
    groupByColumnsList: Array<string>,
    aggregationColumnsList: Array<AggregationColumn.AsObject>,
  }
}

export class TakeNode extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TakeNode.AsObject;
  static toObject(includeInstance: boolean, msg: TakeNode): TakeNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TakeNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TakeNode;
  static deserializeBinaryFromReader(message: TakeNode, reader: jspb.BinaryReader): TakeNode;
}

export namespace TakeNode {
  export type AsObject = {
    limit: number,
  }
}

export class AggregateNode extends jspb.Message {
  clearAggregationColumnsList(): void;
  getAggregationColumnsList(): Array<AggregationColumn>;
  setAggregationColumnsList(value: Array<AggregationColumn>): void;
  addAggregationColumns(value?: AggregationColumn, index?: number): AggregationColumn;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AggregateNode.AsObject;
  static toObject(includeInstance: boolean, msg: AggregateNode): AggregateNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AggregateNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AggregateNode;
  static deserializeBinaryFromReader(message: AggregateNode, reader: jspb.BinaryReader): AggregateNode;
}

export namespace AggregateNode {
  export type AsObject = {
    aggregationColumnsList: Array<AggregationColumn.AsObject>,
  }
}

export class AggregationColumn extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearGroupByColumnsList(): void;
  getGroupByColumnsList(): Array<string>;
  setGroupByColumnsList(value: Array<string>): void;
  addGroupByColumns(value: string, index?: number): string;

  getColumnToAggregate(): string;
  setColumnToAggregate(value: string): void;

  getAggregationFunction(): string;
  setAggregationFunction(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AggregationColumn.AsObject;
  static toObject(includeInstance: boolean, msg: AggregationColumn): AggregationColumn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AggregationColumn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AggregationColumn;
  static deserializeBinaryFromReader(message: AggregationColumn, reader: jspb.BinaryReader): AggregationColumn;
}

export namespace AggregationColumn {
  export type AsObject = {
    name: string,
    groupByColumnsList: Array<string>,
    columnToAggregate: string,
    aggregationFunction: string,
  }
}

export class Column extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getDataType(): string;
  setDataType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Column.AsObject;
  static toObject(includeInstance: boolean, msg: Column): Column.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Column, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Column;
  static deserializeBinaryFromReader(message: Column, reader: jspb.BinaryReader): Column;
}

export namespace Column {
  export type AsObject = {
    key: string,
    dataType: string,
  }
}

export class ExpressionNode extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  clearChildrenList(): void;
  getChildrenList(): Array<ExpressionNode>;
  setChildrenList(value: Array<ExpressionNode>): void;
  addChildren(value?: ExpressionNode, index?: number): ExpressionNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpressionNode.AsObject;
  static toObject(includeInstance: boolean, msg: ExpressionNode): ExpressionNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExpressionNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpressionNode;
  static deserializeBinaryFromReader(message: ExpressionNode, reader: jspb.BinaryReader): ExpressionNode;
}

export namespace ExpressionNode {
  export type AsObject = {
    type: string,
    value: string,
    childrenList: Array<ExpressionNode.AsObject>,
  }
}

export class MapNode extends jspb.Message {
  hasNewColumn(): boolean;
  clearNewColumn(): void;
  getNewColumn(): Column | undefined;
  setNewColumn(value?: Column): void;

  hasColumnToMap(): boolean;
  clearColumnToMap(): void;
  getColumnToMap(): Column | undefined;
  setColumnToMap(value?: Column): void;

  clearMappingsList(): void;
  getMappingsList(): Array<MapNode.Mapping>;
  setMappingsList(value: Array<MapNode.Mapping>): void;
  addMappings(value?: MapNode.Mapping, index?: number): MapNode.Mapping;

  hasDefaultValue(): boolean;
  clearDefaultValue(): void;
  getDefaultValue(): ExpressionNode | undefined;
  setDefaultValue(value?: ExpressionNode): void;

  getIsComplex(): boolean;
  setIsComplex(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapNode.AsObject;
  static toObject(includeInstance: boolean, msg: MapNode): MapNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapNode;
  static deserializeBinaryFromReader(message: MapNode, reader: jspb.BinaryReader): MapNode;
}

export namespace MapNode {
  export type AsObject = {
    newColumn?: Column.AsObject,
    columnToMap?: Column.AsObject,
    mappingsList: Array<MapNode.Mapping.AsObject>,
    defaultValue?: ExpressionNode.AsObject,
    isComplex: boolean,
  }

  export class Mapping extends jspb.Message {
    hasCondition(): boolean;
    clearCondition(): void;
    getCondition(): ExpressionNode | undefined;
    setCondition(value?: ExpressionNode): void;

    hasResult(): boolean;
    clearResult(): void;
    getResult(): ExpressionNode | undefined;
    setResult(value?: ExpressionNode): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Mapping.AsObject;
    static toObject(includeInstance: boolean, msg: Mapping): Mapping.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Mapping, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Mapping;
    static deserializeBinaryFromReader(message: Mapping, reader: jspb.BinaryReader): Mapping;
  }

  export namespace Mapping {
    export type AsObject = {
      condition?: ExpressionNode.AsObject,
      result?: ExpressionNode.AsObject,
    }
  }
}

export class JoinNode extends jspb.Message {
  getSide(): string;
  setSide(value: string): void;

  clearJoinColumnsList(): void;
  getJoinColumnsList(): Array<JoinColumn>;
  setJoinColumnsList(value: Array<JoinColumn>): void;
  addJoinColumns(value?: JoinColumn, index?: number): JoinColumn;

  hasFirstParent(): boolean;
  clearFirstParent(): void;
  getFirstParent(): Parent | undefined;
  setFirstParent(value?: Parent): void;

  hasSecondParent(): boolean;
  clearSecondParent(): void;
  getSecondParent(): Parent | undefined;
  setSecondParent(value?: Parent): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinNode.AsObject;
  static toObject(includeInstance: boolean, msg: JoinNode): JoinNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinNode;
  static deserializeBinaryFromReader(message: JoinNode, reader: jspb.BinaryReader): JoinNode;
}

export namespace JoinNode {
  export type AsObject = {
    side: string,
    joinColumnsList: Array<JoinColumn.AsObject>,
    firstParent?: Parent.AsObject,
    secondParent?: Parent.AsObject,
  }
}

export class JoinColumn extends jspb.Message {
  getFirstParentColumn(): string;
  setFirstParentColumn(value: string): void;

  getSecondParentColumn(): string;
  setSecondParentColumn(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinColumn.AsObject;
  static toObject(includeInstance: boolean, msg: JoinColumn): JoinColumn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinColumn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinColumn;
  static deserializeBinaryFromReader(message: JoinColumn, reader: jspb.BinaryReader): JoinColumn;
}

export namespace JoinColumn {
  export type AsObject = {
    firstParentColumn: string,
    secondParentColumn: string,
  }
}

export class Parent extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getRenamedColumnsMap(): jspb.Map<string, string>;
  clearRenamedColumnsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Parent.AsObject;
  static toObject(includeInstance: boolean, msg: Parent): Parent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Parent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Parent;
  static deserializeBinaryFromReader(message: Parent, reader: jspb.BinaryReader): Parent;
}

export namespace Parent {
  export type AsObject = {
    id: string,
    title: string,
    renamedColumnsMap: Array<[string, string]>,
  }
}

export class SelectNode extends jspb.Message {
  clearColumnsList(): void;
  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): void;
  addColumns(value: string, index?: number): string;

  getRenamedColumnsMap(): jspb.Map<string, string>;
  clearRenamedColumnsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SelectNode.AsObject;
  static toObject(includeInstance: boolean, msg: SelectNode): SelectNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SelectNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SelectNode;
  static deserializeBinaryFromReader(message: SelectNode, reader: jspb.BinaryReader): SelectNode;
}

export namespace SelectNode {
  export type AsObject = {
    columnsList: Array<string>,
    renamedColumnsMap: Array<[string, string]>,
  }
}

export class JsonTarget extends jspb.Message {
  clearPathPartsList(): void;
  getPathPartsList(): Array<string>;
  setPathPartsList(value: Array<string>): void;
  addPathParts(value: string, index?: number): string;

  getColumnName(): string;
  setColumnName(value: string): void;

  getResultType(): string;
  setResultType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JsonTarget.AsObject;
  static toObject(includeInstance: boolean, msg: JsonTarget): JsonTarget.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JsonTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JsonTarget;
  static deserializeBinaryFromReader(message: JsonTarget, reader: jspb.BinaryReader): JsonTarget;
}

export namespace JsonTarget {
  export type AsObject = {
    pathPartsList: Array<string>,
    columnName: string,
    resultType: string,
  }
}

export class JsonNode extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getJsonColumn(): string;
  setJsonColumn(value: string): void;

  clearTargetsList(): void;
  getTargetsList(): Array<JsonTarget>;
  setTargetsList(value: Array<JsonTarget>): void;
  addTargets(value?: JsonTarget, index?: number): JsonTarget;

  hasUnnestToColumnsNode(): boolean;
  clearUnnestToColumnsNode(): void;
  getUnnestToColumnsNode(): UnnestToColumnsNode | undefined;
  setUnnestToColumnsNode(value?: UnnestToColumnsNode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JsonNode.AsObject;
  static toObject(includeInstance: boolean, msg: JsonNode): JsonNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JsonNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JsonNode;
  static deserializeBinaryFromReader(message: JsonNode, reader: jspb.BinaryReader): JsonNode;
}

export namespace JsonNode {
  export type AsObject = {
    type: string,
    jsonColumn: string,
    targetsList: Array<JsonTarget.AsObject>,
    unnestToColumnsNode?: UnnestToColumnsNode.AsObject,
  }
}

export class UnnestToColumnsNode extends jspb.Message {
  hasUnnestTarget(): boolean;
  clearUnnestTarget(): void;
  getUnnestTarget(): JsonTarget | undefined;
  setUnnestTarget(value?: JsonTarget): void;

  hasKeyTarget(): boolean;
  clearKeyTarget(): void;
  getKeyTarget(): JsonTarget | undefined;
  setKeyTarget(value?: JsonTarget): void;

  hasValueTarget(): boolean;
  clearValueTarget(): void;
  getValueTarget(): JsonTarget | undefined;
  setValueTarget(value?: JsonTarget): void;

  clearColumnsList(): void;
  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): void;
  addColumns(value: string, index?: number): string;

  clearPrimaryKeysList(): void;
  getPrimaryKeysList(): Array<string>;
  setPrimaryKeysList(value: Array<string>): void;
  addPrimaryKeys(value: string, index?: number): string;

  clearJsonColumnsList(): void;
  getJsonColumnsList(): Array<Column>;
  setJsonColumnsList(value: Array<Column>): void;
  addJsonColumns(value?: Column, index?: number): Column;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnnestToColumnsNode.AsObject;
  static toObject(includeInstance: boolean, msg: UnnestToColumnsNode): UnnestToColumnsNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnnestToColumnsNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnnestToColumnsNode;
  static deserializeBinaryFromReader(message: UnnestToColumnsNode, reader: jspb.BinaryReader): UnnestToColumnsNode;
}

export namespace UnnestToColumnsNode {
  export type AsObject = {
    unnestTarget?: JsonTarget.AsObject,
    keyTarget?: JsonTarget.AsObject,
    valueTarget?: JsonTarget.AsObject,
    columnsList: Array<string>,
    primaryKeysList: Array<string>,
    jsonColumnsList: Array<Column.AsObject>,
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

export class ValuesReplacement extends jspb.Message {
  getTargetValue(): string;
  setTargetValue(value: string): void;

  getTargetDataType(): string;
  setTargetDataType(value: string): void;

  hasReplacementValue(): boolean;
  clearReplacementValue(): void;
  getReplacementValue(): ExpressionNode | undefined;
  setReplacementValue(value?: ExpressionNode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValuesReplacement.AsObject;
  static toObject(includeInstance: boolean, msg: ValuesReplacement): ValuesReplacement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValuesReplacement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValuesReplacement;
  static deserializeBinaryFromReader(message: ValuesReplacement, reader: jspb.BinaryReader): ValuesReplacement;
}

export namespace ValuesReplacement {
  export type AsObject = {
    targetValue: string,
    targetDataType: string,
    replacementValue?: ExpressionNode.AsObject,
  }
}

export class ColumnReplacement extends jspb.Message {
  clearColumnNamesList(): void;
  getColumnNamesList(): Array<string>;
  setColumnNamesList(value: Array<string>): void;
  addColumnNames(value: string, index?: number): string;

  clearValuesReplacementsList(): void;
  getValuesReplacementsList(): Array<ValuesReplacement>;
  setValuesReplacementsList(value: Array<ValuesReplacement>): void;
  addValuesReplacements(value?: ValuesReplacement, index?: number): ValuesReplacement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColumnReplacement.AsObject;
  static toObject(includeInstance: boolean, msg: ColumnReplacement): ColumnReplacement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ColumnReplacement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColumnReplacement;
  static deserializeBinaryFromReader(message: ColumnReplacement, reader: jspb.BinaryReader): ColumnReplacement;
}

export namespace ColumnReplacement {
  export type AsObject = {
    columnNamesList: Array<string>,
    valuesReplacementsList: Array<ValuesReplacement.AsObject>,
  }
}

export class ReplaceNode extends jspb.Message {
  clearColumnReplacementsList(): void;
  getColumnReplacementsList(): Array<ColumnReplacement>;
  setColumnReplacementsList(value: Array<ColumnReplacement>): void;
  addColumnReplacements(value?: ColumnReplacement, index?: number): ColumnReplacement;

  getIsComplex(): boolean;
  setIsComplex(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplaceNode.AsObject;
  static toObject(includeInstance: boolean, msg: ReplaceNode): ReplaceNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReplaceNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplaceNode;
  static deserializeBinaryFromReader(message: ReplaceNode, reader: jspb.BinaryReader): ReplaceNode;
}

export namespace ReplaceNode {
  export type AsObject = {
    columnReplacementsList: Array<ColumnReplacement.AsObject>,
    isComplex: boolean,
  }
}

export class SortColumn extends jspb.Message {
  getColumnName(): string;
  setColumnName(value: string): void;

  getAscending(): boolean;
  setAscending(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SortColumn.AsObject;
  static toObject(includeInstance: boolean, msg: SortColumn): SortColumn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SortColumn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SortColumn;
  static deserializeBinaryFromReader(message: SortColumn, reader: jspb.BinaryReader): SortColumn;
}

export namespace SortColumn {
  export type AsObject = {
    columnName: string,
    ascending: boolean,
  }
}

export class SortNode extends jspb.Message {
  clearSortColumnsList(): void;
  getSortColumnsList(): Array<SortColumn>;
  setSortColumnsList(value: Array<SortColumn>): void;
  addSortColumns(value?: SortColumn, index?: number): SortColumn;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SortNode.AsObject;
  static toObject(includeInstance: boolean, msg: SortNode): SortNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SortNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SortNode;
  static deserializeBinaryFromReader(message: SortNode, reader: jspb.BinaryReader): SortNode;
}

export namespace SortNode {
  export type AsObject = {
    sortColumnsList: Array<SortColumn.AsObject>,
  }
}

export class StringManipulationSplit extends jspb.Message {
  getSplitBy(): string;
  setSplitBy(value: string): void;

  getIsIndexExtraction(): boolean;
  setIsIndexExtraction(value: boolean): void;

  getIndexExtraction(): number;
  setIndexExtraction(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringManipulationSplit.AsObject;
  static toObject(includeInstance: boolean, msg: StringManipulationSplit): StringManipulationSplit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringManipulationSplit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringManipulationSplit;
  static deserializeBinaryFromReader(message: StringManipulationSplit, reader: jspb.BinaryReader): StringManipulationSplit;
}

export namespace StringManipulationSplit {
  export type AsObject = {
    splitBy: string,
    isIndexExtraction: boolean,
    indexExtraction: number,
  }
}

export class StringManipulationReplace extends jspb.Message {
  getTarget(): string;
  setTarget(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringManipulationReplace.AsObject;
  static toObject(includeInstance: boolean, msg: StringManipulationReplace): StringManipulationReplace.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringManipulationReplace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringManipulationReplace;
  static deserializeBinaryFromReader(message: StringManipulationReplace, reader: jspb.BinaryReader): StringManipulationReplace;
}

export namespace StringManipulationReplace {
  export type AsObject = {
    target: string,
    value: string,
  }
}

export class StringManipulationNode extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getSourceColumnName(): string;
  setSourceColumnName(value: string): void;

  getTargetColumnName(): string;
  setTargetColumnName(value: string): void;

  hasStringManipulationSplit(): boolean;
  clearStringManipulationSplit(): void;
  getStringManipulationSplit(): StringManipulationSplit | undefined;
  setStringManipulationSplit(value?: StringManipulationSplit): void;

  hasStringManipulationReplace(): boolean;
  clearStringManipulationReplace(): void;
  getStringManipulationReplace(): StringManipulationReplace | undefined;
  setStringManipulationReplace(value?: StringManipulationReplace): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringManipulationNode.AsObject;
  static toObject(includeInstance: boolean, msg: StringManipulationNode): StringManipulationNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringManipulationNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringManipulationNode;
  static deserializeBinaryFromReader(message: StringManipulationNode, reader: jspb.BinaryReader): StringManipulationNode;
}

export namespace StringManipulationNode {
  export type AsObject = {
    type: string,
    sourceColumnName: string,
    targetColumnName: string,
    stringManipulationSplit?: StringManipulationSplit.AsObject,
    stringManipulationReplace?: StringManipulationReplace.AsObject,
  }
}

export interface OutputConfigurationTypeMap {
  OUTPUT_CONFIGURATION_TYPE_UNSPECIFIED: 0;
  OUTPUT_CONFIGURATION_TYPE_TABLE: 1;
  OUTPUT_CONFIGURATION_TYPE_MULTI_SERIES: 2;
  OUTPUT_CONFIGURATION_TYPE_PIE_CHART: 3;
  OUTPUT_CONFIGURATION_TYPE_FIXED_WIDTH: 4;
  OUTPUT_CONFIGURATION_TYPE_TIMELINE: 5;
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
  OPERATION_TYPE_PAD: 11;
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

export interface InsightContextualActionTypeMap {
  INSIGHT_CONTEXTUAL_ACTION_TYPE_UNSPECIFIED: 0;
  INSIGHT_CONTEXTUAL_ACTION_TYPE_LINK: 1;
  INSIGHT_CONTEXTUAL_ACTION_TYPE_COMPONENT: 2;
  INSIGHT_CONTEXTUAL_ACTION_TYPE_DRILL_THROUGH: 3;
}

export const InsightContextualActionType: InsightContextualActionTypeMap;

export interface QuoteCharacterMap {
  QUOTE_CHARACTER_UNSPECIFIED: 0;
  QUOTE_CHARACTER_DOUBLE_QUOTE: 1;
  QUOTE_CHARACTER_SINGLE_QUOTE: 2;
}

export const QuoteCharacter: QuoteCharacterMap;

