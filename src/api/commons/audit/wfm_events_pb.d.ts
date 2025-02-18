// package: api.commons.audit
// file: api/commons/audit/wfm_events.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class WFMPublishScheduleEvent extends jspb.Message {
  getPublishedScheduleSid(): number;
  setPublishedScheduleSid(value: number): void;

  clearAgentUserIdsList(): void;
  getAgentUserIdsList(): Array<string>;
  setAgentUserIdsList(value: Array<string>): void;
  addAgentUserIds(value: string, index?: number): string;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WFMPublishScheduleEvent.AsObject;
  static toObject(includeInstance: boolean, msg: WFMPublishScheduleEvent): WFMPublishScheduleEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WFMPublishScheduleEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WFMPublishScheduleEvent;
  static deserializeBinaryFromReader(message: WFMPublishScheduleEvent, reader: jspb.BinaryReader): WFMPublishScheduleEvent;
}

export namespace WFMPublishScheduleEvent {
  export type AsObject = {
    publishedScheduleSid: number,
    agentUserIdsList: Array<string>,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

