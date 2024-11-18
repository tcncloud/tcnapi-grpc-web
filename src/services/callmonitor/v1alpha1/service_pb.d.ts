// package: services.callmonitor.v1alpha1
// file: services/callmonitor/v1alpha1/service.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../annotations/authz_pb";
import * as api_commons_callmonitor_pb from "../../../api/commons/callmonitor_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetStatsRequest extends jspb.Message {
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
  getFilter(): GetStatsRequest.Filter | undefined;
  setFilter(value?: GetStatsRequest.Filter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStatsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatsRequest): GetStatsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStatsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatsRequest;
  static deserializeBinaryFromReader(message: GetStatsRequest, reader: jspb.BinaryReader): GetStatsRequest;
}

export namespace GetStatsRequest {
  export type AsObject = {
    orgId: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    filter?: GetStatsRequest.Filter.AsObject,
  }

  export class Filter extends jspb.Message {
    getStatus(): api_commons_callmonitor_pb.MonitorStatusMap[keyof api_commons_callmonitor_pb.MonitorStatusMap];
    setStatus(value: api_commons_callmonitor_pb.MonitorStatusMap[keyof api_commons_callmonitor_pb.MonitorStatusMap]): void;

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
      status: api_commons_callmonitor_pb.MonitorStatusMap[keyof api_commons_callmonitor_pb.MonitorStatusMap],
      campaignId: string,
    }
  }
}

export class GetStatsResponse extends jspb.Message {
  clearStatsList(): void;
  getStatsList(): Array<api_commons_callmonitor_pb.CallStats>;
  setStatsList(value: Array<api_commons_callmonitor_pb.CallStats>): void;
  addStats(value?: api_commons_callmonitor_pb.CallStats, index?: number): api_commons_callmonitor_pb.CallStats;

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
  toObject(includeInstance?: boolean): GetStatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatsResponse): GetStatsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatsResponse;
  static deserializeBinaryFromReader(message: GetStatsResponse, reader: jspb.BinaryReader): GetStatsResponse;
}

export namespace GetStatsResponse {
  export type AsObject = {
    statsList: Array<api_commons_callmonitor_pb.CallStats.AsObject>,
    totalNumCalls: number,
    totalNumSuccessful: number,
    totalNumFailed: number,
    avgMonitorDurationMs: number,
    totalNumMonitoring: number,
  }
}

