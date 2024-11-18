// package: api.commons
// file: api/commons/callmonitor.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CallStats extends jspb.Message {
  getCallId(): string;
  setCallId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getCampaignId(): string;
  setCampaignId(value: string): void;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): void;

  getStatus(): MonitorStatusMap[keyof MonitorStatusMap];
  setStatus(value: MonitorStatusMap[keyof MonitorStatusMap]): void;

  getMonitorDurationMillis(): number;
  setMonitorDurationMillis(value: number): void;

  hasMonitorStartTime(): boolean;
  clearMonitorStartTime(): void;
  getMonitorStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMonitorStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasMonitorEndTime(): boolean;
  clearMonitorEndTime(): void;
  getMonitorEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMonitorEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallStats.AsObject;
  static toObject(includeInstance: boolean, msg: CallStats): CallStats.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallStats;
  static deserializeBinaryFromReader(message: CallStats, reader: jspb.BinaryReader): CallStats;
}

export namespace CallStats {
  export type AsObject = {
    callId: string,
    orgId: string,
    campaignId: string,
    phoneNumber: string,
    status: MonitorStatusMap[keyof MonitorStatusMap],
    monitorDurationMillis: number,
    monitorStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    monitorEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export interface MonitorStatusMap {
  MONITOR_STATUS_UNSPECIFIED: 0;
  MONITOR_STATUS_MONITORING: 1;
  MONITOR_STATUS_SUCCESS: 2;
  MONITOR_STATUS_FAILED: 3;
}

export const MonitorStatus: MonitorStatusMap;

