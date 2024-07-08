// package: api.commons
// file: api/commons/dashboards.proto

import * as jspb from "google-protobuf";

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

