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

  getResourceId(): string;
  setResourceId(value: string): void;

  getStandardInsight(): boolean;
  setStandardInsight(value: boolean): void;

  clearOutputConfigurationsList(): void;
  getOutputConfigurationsList(): Array<OutputConfiguration>;
  setOutputConfigurationsList(value: Array<OutputConfiguration>): void;
  addOutputConfigurations(value?: OutputConfiguration, index?: number): OutputConfiguration;

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
    outputConfigurationsList: Array<OutputConfiguration.AsObject>,
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

export class OutputConfiguration extends jspb.Message {
  getOutputConfigurationId(): string;
  setOutputConfigurationId(value: string): void;

  getOutputConfigurationTitle(): string;
  setOutputConfigurationTitle(value: string): void;

  getOutputConfigurationType(): api_commons_insights_pb.OutputConfigurationTypeMap[keyof api_commons_insights_pb.OutputConfigurationTypeMap];
  setOutputConfigurationType(value: api_commons_insights_pb.OutputConfigurationTypeMap[keyof api_commons_insights_pb.OutputConfigurationTypeMap]): void;

  getInsightId(): string;
  setInsightId(value: string): void;

  hasBlob(): boolean;
  clearBlob(): void;
  getBlob(): string;
  setBlob(value: string): void;

  hasTableVisualization(): boolean;
  clearTableVisualization(): void;
  getTableVisualization(): api_commons_insights_pb.TableVisualization | undefined;
  setTableVisualization(value?: api_commons_insights_pb.TableVisualization): void;

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
    outputConfigurationId: string,
    outputConfigurationTitle: string,
    outputConfigurationType: api_commons_insights_pb.OutputConfigurationTypeMap[keyof api_commons_insights_pb.OutputConfigurationTypeMap],
    insightId: string,
    blob: string,
    tableVisualization?: api_commons_insights_pb.TableVisualization.AsObject,
  }

  export enum BodyCase {
    BODY_NOT_SET = 0,
    BLOB = 6,
    TABLE_VISUALIZATION = 7,
  }
}

export class ListOutputConfigurationsRequest extends jspb.Message {
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

export class GetOutputConfigurationRequest extends jspb.Message {
  getOutputConfigurationId(): string;
  setOutputConfigurationId(value: string): void;

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
    outputConfigurationId: string,
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
  }
}

export class UpdateOutputConfigurationRequest extends jspb.Message {
  getOutputConfigurationId(): string;
  setOutputConfigurationId(value: string): void;

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
    outputConfigurationId: string,
    outputConfiguration?: OutputConfiguration.AsObject,
  }
}

export class UpdateOutputConfigurationResponse extends jspb.Message {
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
  }
}

export class DeleteOutputConfigurationRequest extends jspb.Message {
  getOutputConfigurationId(): string;
  setOutputConfigurationId(value: string): void;

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
    outputConfigurationId: string,
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

