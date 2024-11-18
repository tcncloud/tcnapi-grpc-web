// package: services.callmonitor.v1alpha1
// file: services/callmonitor/v1alpha1/service.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../annotations/authz_pb";
import * as api_commons_callmonitor_pb from "../../../api/commons/callmonitor_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetHoldQueueStatsRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): GetHoldQueueStatsRequest.Filter | undefined;
  setFilter(value?: GetHoldQueueStatsRequest.Filter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHoldQueueStatsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHoldQueueStatsRequest): GetHoldQueueStatsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHoldQueueStatsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHoldQueueStatsRequest;
  static deserializeBinaryFromReader(message: GetHoldQueueStatsRequest, reader: jspb.BinaryReader): GetHoldQueueStatsRequest;
}

export namespace GetHoldQueueStatsRequest {
  export type AsObject = {
    orgId: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    filter?: GetHoldQueueStatsRequest.Filter.AsObject,
  }

  export class Filter extends jspb.Message {
    getStatus(): api_commons_callmonitor_pb.HoldQueueMonitorStatusMap[keyof api_commons_callmonitor_pb.HoldQueueMonitorStatusMap];
    setStatus(value: api_commons_callmonitor_pb.HoldQueueMonitorStatusMap[keyof api_commons_callmonitor_pb.HoldQueueMonitorStatusMap]): void;

    getCampaignId(): string;
    setCampaignId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Filter.AsObject;
    static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Filter;
    static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
  }

  export namespace Filter {
    export type AsObject = {
      status: api_commons_callmonitor_pb.HoldQueueMonitorStatusMap[keyof api_commons_callmonitor_pb.HoldQueueMonitorStatusMap],
      campaignId: string,
    }
  }
}

export class GetHoldQueueStatsResponse extends jspb.Message {
  clearStatsList(): void;
  getStatsList(): Array<api_commons_callmonitor_pb.HoldQueueCallStats>;
  setStatsList(value: Array<api_commons_callmonitor_pb.HoldQueueCallStats>): void;
  addStats(value?: api_commons_callmonitor_pb.HoldQueueCallStats, index?: number): api_commons_callmonitor_pb.HoldQueueCallStats;

  getTotalNumCalls(): number;
  setTotalNumCalls(value: number): void;

  getTotalNumSuccessful(): number;
  setTotalNumSuccessful(value: number): void;

  getTotalNumFailed(): number;
  setTotalNumFailed(value: number): void;

  getAvgMonitorDurationMs(): number;
  setAvgMonitorDurationMs(value: number): void;

  getTotalNumMonitoring(): number;
  setTotalNumMonitoring(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHoldQueueStatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHoldQueueStatsResponse): GetHoldQueueStatsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHoldQueueStatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHoldQueueStatsResponse;
  static deserializeBinaryFromReader(message: GetHoldQueueStatsResponse, reader: jspb.BinaryReader): GetHoldQueueStatsResponse;
}

export namespace GetHoldQueueStatsResponse {
  export type AsObject = {
    statsList: Array<api_commons_callmonitor_pb.HoldQueueCallStats.AsObject>,
    totalNumCalls: number,
    totalNumSuccessful: number,
    totalNumFailed: number,
    avgMonitorDurationMs: number,
    totalNumMonitoring: number,
  }
}

