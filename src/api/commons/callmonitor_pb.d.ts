// package: api.commons
// file: api/commons/callmonitor.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class HoldQueueCallStats extends jspb.Message {
  getCallId(): string;
  setCallId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getCampaignId(): string;
  setCampaignId(value: string): void;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): void;

  getStatus(): HoldQueueMonitorStatusMap[keyof HoldQueueMonitorStatusMap];
  setStatus(value: HoldQueueMonitorStatusMap[keyof HoldQueueMonitorStatusMap]): void;

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
  toObject(includeInstance?: boolean): HoldQueueCallStats.AsObject;
  static toObject(includeInstance: boolean, msg: HoldQueueCallStats): HoldQueueCallStats.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HoldQueueCallStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HoldQueueCallStats;
  static deserializeBinaryFromReader(message: HoldQueueCallStats, reader: jspb.BinaryReader): HoldQueueCallStats;
}

export namespace HoldQueueCallStats {
  export type AsObject = {
    callId: string,
    orgId: string,
    campaignId: string,
    phoneNumber: string,
    status: HoldQueueMonitorStatusMap[keyof HoldQueueMonitorStatusMap],
    monitorDurationMillis: number,
    monitorStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    monitorEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export interface HoldQueueMonitorStatusMap {
  HOLD_QUEUE_MONITOR_STATUS_UNSPECIFIED: 0;
  HOLD_QUEUE_MONITOR_STATUS_MONITORING: 1;
  HOLD_QUEUE_MONITOR_STATUS_SUCCESS: 2;
  HOLD_QUEUE_MONITOR_STATUS_FAILED: 3;
}

export const HoldQueueMonitorStatus: HoldQueueMonitorStatusMap;

