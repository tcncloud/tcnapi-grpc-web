// package: api.v1alpha1.insights
// file: api/v1alpha1/insights/insight.proto

import * as jspb from "google-protobuf";
import * as api_commons_insights_pb from "../../../api/commons/insights_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

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

