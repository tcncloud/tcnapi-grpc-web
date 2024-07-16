// package: api.v1alpha1.insights
// file: api/v1alpha1/insights/output_configuration.proto

import * as jspb from "google-protobuf";
import * as api_commons_insights_pb from "../../../api/commons/insights_pb";

export class OutputConfiguration extends jspb.Message {
  getOutputConfigurationId(): string;
  setOutputConfigurationId(value: string): void;

  getOutputConfigurationTitle(): string;
  setOutputConfigurationTitle(value: string): void;

  getOutputConfigurationType(): api_commons_insights_pb.OutputConfigurationTypeMap[keyof api_commons_insights_pb.OutputConfigurationTypeMap];
  setOutputConfigurationType(value: api_commons_insights_pb.OutputConfigurationTypeMap[keyof api_commons_insights_pb.OutputConfigurationTypeMap]): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getInsightId(): string;
  setInsightId(value: string): void;

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
    outputConfigurationId: string,
    outputConfigurationTitle: string,
    outputConfigurationType: api_commons_insights_pb.OutputConfigurationTypeMap[keyof api_commons_insights_pb.OutputConfigurationTypeMap],
    orgId: string,
    insightId: string,
    blob: string,
    tableVisualization?: TableVisualization.AsObject,
  }

  export enum BodyCase {
    BODY_NOT_SET = 0,
    BLOB = 6,
    TABLE_VISUALIZATION = 7,
  }
}

export class TableVisualization extends jspb.Message {
  getTableColumnDetailsMap(): jspb.Map<string, TableColumnConfig>;
  clearTableColumnDetailsMap(): void;
  getDefaultColumnWidth(): number;
  setDefaultColumnWidth(value: number): void;

  getSingleColumnSort(): boolean;
  setSingleColumnSort(value: boolean): void;

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
    tableColumnDetailsMap: Array<[string, TableColumnConfig.AsObject]>,
    defaultColumnWidth: number,
    singleColumnSort: boolean,
  }
}

export class TableColumnConfig extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getColumnWidth(): number;
  setColumnWidth(value: number): void;

  getHideColumn(): boolean;
  setHideColumn(value: boolean): void;

  getLabel(): string;
  setLabel(value: string): void;

  getColumnFormatType(): api_commons_insights_pb.OutputConfigurationColumnFormatTypeMap[keyof api_commons_insights_pb.OutputConfigurationColumnFormatTypeMap];
  setColumnFormatType(value: api_commons_insights_pb.OutputConfigurationColumnFormatTypeMap[keyof api_commons_insights_pb.OutputConfigurationColumnFormatTypeMap]): void;

  clearColumnFormatValuesList(): void;
  getColumnFormatValuesList(): Array<string>;
  setColumnFormatValuesList(value: Array<string>): void;
  addColumnFormatValues(value: string, index?: number): string;

  getColumnSummary(): api_commons_insights_pb.OutputConfigurationColumnSummaryTypeMap[keyof api_commons_insights_pb.OutputConfigurationColumnSummaryTypeMap];
  setColumnSummary(value: api_commons_insights_pb.OutputConfigurationColumnSummaryTypeMap[keyof api_commons_insights_pb.OutputConfigurationColumnSummaryTypeMap]): void;

  getDescription(): string;
  setDescription(value: string): void;

  getOrder(): number;
  setOrder(value: number): void;

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
    key: string,
    columnWidth: number,
    hideColumn: boolean,
    label: string,
    columnFormatType: api_commons_insights_pb.OutputConfigurationColumnFormatTypeMap[keyof api_commons_insights_pb.OutputConfigurationColumnFormatTypeMap],
    columnFormatValuesList: Array<string>,
    columnSummary: api_commons_insights_pb.OutputConfigurationColumnSummaryTypeMap[keyof api_commons_insights_pb.OutputConfigurationColumnSummaryTypeMap],
    description: string,
    order: number,
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

