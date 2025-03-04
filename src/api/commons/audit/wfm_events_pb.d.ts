// package: api.commons.audit
// file: api/commons/audit/wfm_events.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class WFMPublishScheduleEvent extends jspb.Message {
  getPublishedScheduleSid(): number;
  setPublishedScheduleSid(value: number): void;

  clearUserIdsList(): void;
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  addUserIds(value: string, index?: number): string;

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
    userIdsList: Array<string>,
  }
}

