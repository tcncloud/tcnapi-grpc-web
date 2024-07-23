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

export class TableVisualization extends jspb.Message {
  clearTableColumnDetailsList(): void;
  getTableColumnDetailsList(): Array<TableColumnConfig>;
  setTableColumnDetailsList(value: Array<TableColumnConfig>): void;
  addTableColumnDetails(value?: TableColumnConfig, index?: number): TableColumnConfig;

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
  }

  export enum OperationValueCase {
    OPERATION_VALUE_NOT_SET = 0,
    FLOAT_VALUE = 2,
    FORMAT_SERIES = 3,
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

export interface OutputConfigurationTypeMap {
  OUTPUT_CONFIGURATION_TYPE_UNSPECIFIED: 0;
  OUTPUT_CONFIGURATION_TYPE_TABLE: 1;
  OUTPUT_CONFIGURATION_TYPE_MULTI_SERIES: 2;
  OUTPUT_CONFIGURATION_TYPE_PIE_CHART: 3;
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

