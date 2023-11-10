// package: api.v0alpha
// file: api/v0alpha/dashboards.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../annotations/authz_pb";
import * as api_commons_org_pb from "../../api/commons/org_pb";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class PublishDashboardRequest extends jspb.Message {
  getResourceId(): string;
  setResourceId(value: string): void;

  getDestinationResourceId(): string;
  setDestinationResourceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishDashboardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublishDashboardRequest): PublishDashboardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishDashboardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishDashboardRequest;
  static deserializeBinaryFromReader(message: PublishDashboardRequest, reader: jspb.BinaryReader): PublishDashboardRequest;
}

export namespace PublishDashboardRequest {
  export type AsObject = {
    resourceId: string,
    destinationResourceId: string,
  }
}

export class PublishDashboardResponse extends jspb.Message {
  getResourceId(): string;
  setResourceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishDashboardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublishDashboardResponse): PublishDashboardResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishDashboardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishDashboardResponse;
  static deserializeBinaryFromReader(message: PublishDashboardResponse, reader: jspb.BinaryReader): PublishDashboardResponse;
}

export namespace PublishDashboardResponse {
  export type AsObject = {
    resourceId: string,
  }
}

export class ListDashboardsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDashboardsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDashboardsRequest): ListDashboardsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDashboardsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDashboardsRequest;
  static deserializeBinaryFromReader(message: ListDashboardsRequest, reader: jspb.BinaryReader): ListDashboardsRequest;
}

export namespace ListDashboardsRequest {
  export type AsObject = {
  }
}

export class ListDashboardsResponse extends jspb.Message {
  clearDashboardSummariesList(): void;
  getDashboardSummariesList(): Array<DashboardSummary>;
  setDashboardSummariesList(value: Array<DashboardSummary>): void;
  addDashboardSummaries(value?: DashboardSummary, index?: number): DashboardSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDashboardsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDashboardsResponse): ListDashboardsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDashboardsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDashboardsResponse;
  static deserializeBinaryFromReader(message: ListDashboardsResponse, reader: jspb.BinaryReader): ListDashboardsResponse;
}

export namespace ListDashboardsResponse {
  export type AsObject = {
    dashboardSummariesList: Array<DashboardSummary.AsObject>,
  }
}

export class DashboardSummary extends jspb.Message {
  getDashboardId(): string;
  setDashboardId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getPanelCount(): number;
  setPanelCount(value: number): void;

  getResourceId(): string;
  setResourceId(value: string): void;

  getStandardDashboard(): boolean;
  setStandardDashboard(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardSummary.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardSummary): DashboardSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardSummary;
  static deserializeBinaryFromReader(message: DashboardSummary, reader: jspb.BinaryReader): DashboardSummary;
}

export namespace DashboardSummary {
  export type AsObject = {
    dashboardId: string,
    title: string,
    description: string,
    panelCount: number,
    resourceId: string,
    standardDashboard: boolean,
  }
}

export class GetDefaultDashboardRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefaultDashboardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefaultDashboardRequest): GetDefaultDashboardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefaultDashboardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefaultDashboardRequest;
  static deserializeBinaryFromReader(message: GetDefaultDashboardRequest, reader: jspb.BinaryReader): GetDefaultDashboardRequest;
}

export namespace GetDefaultDashboardRequest {
  export type AsObject = {
  }
}

export class SetDefaultDashboardRequest extends jspb.Message {
  getDashboardId(): string;
  setDashboardId(value: string): void;

  getResourceId(): string;
  setResourceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDefaultDashboardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetDefaultDashboardRequest): SetDefaultDashboardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDefaultDashboardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDefaultDashboardRequest;
  static deserializeBinaryFromReader(message: SetDefaultDashboardRequest, reader: jspb.BinaryReader): SetDefaultDashboardRequest;
}

export namespace SetDefaultDashboardRequest {
  export type AsObject = {
    dashboardId: string,
    resourceId: string,
  }
}

export class ListProductTypesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProductTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProductTypesRequest): ListProductTypesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProductTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProductTypesRequest;
  static deserializeBinaryFromReader(message: ListProductTypesRequest, reader: jspb.BinaryReader): ListProductTypesRequest;
}

export namespace ListProductTypesRequest {
  export type AsObject = {
  }
}

export class ListProductTypesResult extends jspb.Message {
  clearTypesList(): void;
  getTypesList(): Array<ProductType>;
  setTypesList(value: Array<ProductType>): void;
  addTypes(value?: ProductType, index?: number): ProductType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProductTypesResult.AsObject;
  static toObject(includeInstance: boolean, msg: ListProductTypesResult): ListProductTypesResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProductTypesResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProductTypesResult;
  static deserializeBinaryFromReader(message: ListProductTypesResult, reader: jspb.BinaryReader): ListProductTypesResult;
}

export namespace ListProductTypesResult {
  export type AsObject = {
    typesList: Array<ProductType.AsObject>,
  }
}

export class ProductType extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductType.AsObject;
  static toObject(includeInstance: boolean, msg: ProductType): ProductType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductType;
  static deserializeBinaryFromReader(message: ProductType, reader: jspb.BinaryReader): ProductType;
}

export namespace ProductType {
  export type AsObject = {
    name: string,
    id: string,
  }
}

export class DeleteDashboardRequest extends jspb.Message {
  getDashboardId(): string;
  setDashboardId(value: string): void;

  getResourceId(): string;
  setResourceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDashboardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDashboardRequest): DeleteDashboardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDashboardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDashboardRequest;
  static deserializeBinaryFromReader(message: DeleteDashboardRequest, reader: jspb.BinaryReader): DeleteDashboardRequest;
}

export namespace DeleteDashboardRequest {
  export type AsObject = {
    dashboardId: string,
    resourceId: string,
  }
}

export class GetDashboardRequest extends jspb.Message {
  getDashboardId(): string;
  setDashboardId(value: string): void;

  getResourceId(): string;
  setResourceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDashboardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDashboardRequest): GetDashboardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDashboardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDashboardRequest;
  static deserializeBinaryFromReader(message: GetDashboardRequest, reader: jspb.BinaryReader): GetDashboardRequest;
}

export namespace GetDashboardRequest {
  export type AsObject = {
    dashboardId: string,
    resourceId: string,
  }
}

export class CreateDashboardRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasLayout(): boolean;
  clearLayout(): void;
  getLayout(): DashboardLayout | undefined;
  setLayout(value?: DashboardLayout): void;

  hasView(): boolean;
  clearView(): void;
  getView(): DashboardView | undefined;
  setView(value?: DashboardView): void;

  hasType(): boolean;
  clearType(): void;
  getType(): DashboardType | undefined;
  setType(value?: DashboardType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDashboardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDashboardRequest): CreateDashboardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDashboardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDashboardRequest;
  static deserializeBinaryFromReader(message: CreateDashboardRequest, reader: jspb.BinaryReader): CreateDashboardRequest;
}

export namespace CreateDashboardRequest {
  export type AsObject = {
    title: string,
    description: string,
    layout?: DashboardLayout.AsObject,
    view?: DashboardView.AsObject,
    type?: DashboardType.AsObject,
  }
}

export class CreateDashboardResponse extends jspb.Message {
  getDashboardId(): string;
  setDashboardId(value: string): void;

  getResourceId(): string;
  setResourceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDashboardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDashboardResponse): CreateDashboardResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDashboardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDashboardResponse;
  static deserializeBinaryFromReader(message: CreateDashboardResponse, reader: jspb.BinaryReader): CreateDashboardResponse;
}

export namespace CreateDashboardResponse {
  export type AsObject = {
    dashboardId: string,
    resourceId: string,
  }
}

export class DashboardLayout extends jspb.Message {
  clearPanelsList(): void;
  getPanelsList(): Array<DashboardPanel>;
  setPanelsList(value: Array<DashboardPanel>): void;
  addPanels(value?: DashboardPanel, index?: number): DashboardPanel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardLayout.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardLayout): DashboardLayout.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardLayout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardLayout;
  static deserializeBinaryFromReader(message: DashboardLayout, reader: jspb.BinaryReader): DashboardLayout;
}

export namespace DashboardLayout {
  export type AsObject = {
    panelsList: Array<DashboardPanel.AsObject>,
  }
}

export class DashboardPanel extends jspb.Message {
  hasPanelSource(): boolean;
  clearPanelSource(): void;
  getPanelSource(): PanelSource | undefined;
  setPanelSource(value?: PanelSource): void;

  getRowLength(): number;
  setRowLength(value: number): void;

  getColumnLength(): number;
  setColumnLength(value: number): void;

  getRowStart(): number;
  setRowStart(value: number): void;

  getColumnStart(): number;
  setColumnStart(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardPanel.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardPanel): DashboardPanel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardPanel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardPanel;
  static deserializeBinaryFromReader(message: DashboardPanel, reader: jspb.BinaryReader): DashboardPanel;
}

export namespace DashboardPanel {
  export type AsObject = {
    panelSource?: PanelSource.AsObject,
    rowLength: number,
    columnLength: number,
    rowStart: number,
    columnStart: number,
  }
}

export class PanelSource extends jspb.Message {
  hasInsightId(): boolean;
  clearInsightId(): void;
  getInsightId(): string;
  setInsightId(value: string): void;

  hasLegacyInsightId(): boolean;
  clearLegacyInsightId(): void;
  getLegacyInsightId(): string;
  setLegacyInsightId(value: string): void;

  getPanelTypeCase(): PanelSource.PanelTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PanelSource.AsObject;
  static toObject(includeInstance: boolean, msg: PanelSource): PanelSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PanelSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PanelSource;
  static deserializeBinaryFromReader(message: PanelSource, reader: jspb.BinaryReader): PanelSource;
}

export namespace PanelSource {
  export type AsObject = {
    insightId: string,
    legacyInsightId: string,
  }

  export enum PanelTypeCase {
    PANEL_TYPE_NOT_SET = 0,
    INSIGHT_ID = 1,
    LEGACY_INSIGHT_ID = 2,
  }
}

export class Dashboard extends jspb.Message {
  getDashboardId(): string;
  setDashboardId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasLayout(): boolean;
  clearLayout(): void;
  getLayout(): DashboardLayout | undefined;
  setLayout(value?: DashboardLayout): void;

  hasView(): boolean;
  clearView(): void;
  getView(): DashboardView | undefined;
  setView(value?: DashboardView): void;

  hasType(): boolean;
  clearType(): void;
  getType(): DashboardType | undefined;
  setType(value?: DashboardType): void;

  getResourceId(): string;
  setResourceId(value: string): void;

  getStandardDashboard(): boolean;
  setStandardDashboard(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dashboard.AsObject;
  static toObject(includeInstance: boolean, msg: Dashboard): Dashboard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dashboard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dashboard;
  static deserializeBinaryFromReader(message: Dashboard, reader: jspb.BinaryReader): Dashboard;
}

export namespace Dashboard {
  export type AsObject = {
    dashboardId: string,
    title: string,
    description: string,
    layout?: DashboardLayout.AsObject,
    view?: DashboardView.AsObject,
    type?: DashboardType.AsObject,
    resourceId: string,
    standardDashboard: boolean,
  }
}

export class DashboardType extends jspb.Message {
  hasHistoric(): boolean;
  clearHistoric(): void;
  getHistoric(): HistoricConfig | undefined;
  setHistoric(value?: HistoricConfig): void;

  hasRealTime(): boolean;
  clearRealTime(): void;
  getRealTime(): RealTimeConfig | undefined;
  setRealTime(value?: RealTimeConfig): void;

  getTypeCase(): DashboardType.TypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardType.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardType): DashboardType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardType;
  static deserializeBinaryFromReader(message: DashboardType, reader: jspb.BinaryReader): DashboardType;
}

export namespace DashboardType {
  export type AsObject = {
    historic?: HistoricConfig.AsObject,
    realTime?: RealTimeConfig.AsObject,
  }

  export enum TypeCase {
    TYPE_NOT_SET = 0,
    HISTORIC = 6,
    REAL_TIME = 7,
  }
}

export class HistoricConfig extends jspb.Message {
  hasTimeSpanSimple(): boolean;
  clearTimeSpanSimple(): void;
  getTimeSpanSimple(): TimeSpan.IntervalMap[keyof TimeSpan.IntervalMap];
  setTimeSpanSimple(value: TimeSpan.IntervalMap[keyof TimeSpan.IntervalMap]): void;

  hasTimeSpanRange(): boolean;
  clearTimeSpanRange(): void;
  getTimeSpanRange(): TimeSpan.Range | undefined;
  setTimeSpanRange(value?: TimeSpan.Range): void;

  getTimeZone(): api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap];
  setTimeZone(value: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap]): void;

  getTimeSpanCase(): HistoricConfig.TimeSpanCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistoricConfig.AsObject;
  static toObject(includeInstance: boolean, msg: HistoricConfig): HistoricConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HistoricConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistoricConfig;
  static deserializeBinaryFromReader(message: HistoricConfig, reader: jspb.BinaryReader): HistoricConfig;
}

export namespace HistoricConfig {
  export type AsObject = {
    timeSpanSimple: TimeSpan.IntervalMap[keyof TimeSpan.IntervalMap],
    timeSpanRange?: TimeSpan.Range.AsObject,
    timeZone: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap],
  }

  export enum TimeSpanCase {
    TIME_SPAN_NOT_SET = 0,
    TIME_SPAN_SIMPLE = 1,
    TIME_SPAN_RANGE = 3,
  }
}

export class RealTimeConfig extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RealTimeConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RealTimeConfig): RealTimeConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RealTimeConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RealTimeConfig;
  static deserializeBinaryFromReader(message: RealTimeConfig, reader: jspb.BinaryReader): RealTimeConfig;
}

export namespace RealTimeConfig {
  export type AsObject = {
  }
}

export class UpdateDashboardRequest extends jspb.Message {
  getDashboardId(): string;
  setDashboardId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasLayout(): boolean;
  clearLayout(): void;
  getLayout(): DashboardLayout | undefined;
  setLayout(value?: DashboardLayout): void;

  hasView(): boolean;
  clearView(): void;
  getView(): DashboardView | undefined;
  setView(value?: DashboardView): void;

  hasType(): boolean;
  clearType(): void;
  getType(): DashboardType | undefined;
  setType(value?: DashboardType): void;

  getResourceId(): string;
  setResourceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDashboardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDashboardRequest): UpdateDashboardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDashboardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDashboardRequest;
  static deserializeBinaryFromReader(message: UpdateDashboardRequest, reader: jspb.BinaryReader): UpdateDashboardRequest;
}

export namespace UpdateDashboardRequest {
  export type AsObject = {
    dashboardId: string,
    title: string,
    description: string,
    layout?: DashboardLayout.AsObject,
    view?: DashboardView.AsObject,
    type?: DashboardType.AsObject,
    resourceId: string,
  }
}

export class UpdateDashboardTitleAndDescriptionRequest extends jspb.Message {
  getDashboardId(): string;
  setDashboardId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getResourceId(): string;
  setResourceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDashboardTitleAndDescriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDashboardTitleAndDescriptionRequest): UpdateDashboardTitleAndDescriptionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDashboardTitleAndDescriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDashboardTitleAndDescriptionRequest;
  static deserializeBinaryFromReader(message: UpdateDashboardTitleAndDescriptionRequest, reader: jspb.BinaryReader): UpdateDashboardTitleAndDescriptionRequest;
}

export namespace UpdateDashboardTitleAndDescriptionRequest {
  export type AsObject = {
    dashboardId: string,
    title: string,
    description: string,
    resourceId: string,
  }
}

export class UpdateDashboardLayoutRequest extends jspb.Message {
  getDashboardId(): string;
  setDashboardId(value: string): void;

  hasLayout(): boolean;
  clearLayout(): void;
  getLayout(): DashboardLayout | undefined;
  setLayout(value?: DashboardLayout): void;

  getResourceId(): string;
  setResourceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDashboardLayoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDashboardLayoutRequest): UpdateDashboardLayoutRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDashboardLayoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDashboardLayoutRequest;
  static deserializeBinaryFromReader(message: UpdateDashboardLayoutRequest, reader: jspb.BinaryReader): UpdateDashboardLayoutRequest;
}

export namespace UpdateDashboardLayoutRequest {
  export type AsObject = {
    dashboardId: string,
    layout?: DashboardLayout.AsObject,
    resourceId: string,
  }
}

export class UpdateDashboardViewRequest extends jspb.Message {
  getDashboardId(): string;
  setDashboardId(value: string): void;

  hasView(): boolean;
  clearView(): void;
  getView(): DashboardView | undefined;
  setView(value?: DashboardView): void;

  getResourceId(): string;
  setResourceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDashboardViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDashboardViewRequest): UpdateDashboardViewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDashboardViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDashboardViewRequest;
  static deserializeBinaryFromReader(message: UpdateDashboardViewRequest, reader: jspb.BinaryReader): UpdateDashboardViewRequest;
}

export namespace UpdateDashboardViewRequest {
  export type AsObject = {
    dashboardId: string,
    view?: DashboardView.AsObject,
    resourceId: string,
  }
}

export class DashboardView extends jspb.Message {
  clearOrgIdsList(): void;
  getOrgIdsList(): Array<string>;
  setOrgIdsList(value: Array<string>): void;
  addOrgIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardView.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardView): DashboardView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardView;
  static deserializeBinaryFromReader(message: DashboardView, reader: jspb.BinaryReader): DashboardView;
}

export namespace DashboardView {
  export type AsObject = {
    orgIdsList: Array<string>,
  }
}

export class TimeSpan extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeSpan.AsObject;
  static toObject(includeInstance: boolean, msg: TimeSpan): TimeSpan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeSpan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeSpan;
  static deserializeBinaryFromReader(message: TimeSpan, reader: jspb.BinaryReader): TimeSpan;
}

export namespace TimeSpan {
  export type AsObject = {
  }

  export class Range extends jspb.Message {
    hasStart(): boolean;
    clearStart(): void;
    getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasEnd(): boolean;
    clearEnd(): void;
    getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Range.AsObject;
    static toObject(includeInstance: boolean, msg: Range): Range.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Range, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Range;
    static deserializeBinaryFromReader(message: Range, reader: jspb.BinaryReader): Range;
  }

  export namespace Range {
    export type AsObject = {
      start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      end?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

  export interface IntervalMap {
    TODAY: 0;
    YESTERDAY: 1;
    LAST_30_DAYS: 2;
    MONTH_TO_DATE: 3;
    LAST_2_WEEKS: 4;
    THIS_WEEK: 5;
    THIS_MONTH: 6;
    THIS_DAY_LAST_WEEK: 7;
    PREVIOUS_MONTH: 8;
  }

  export const Interval: IntervalMap;
}

