// package: api.v1alpha1.ghostnotifier
// file: api/v1alpha1/ghostnotifier/service.proto

import * as jspb from "google-protobuf";
import * as api_commons_ghostnotifier_pb from "../../../api/commons/ghostnotifier_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";

export class ListNotificationsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotificationsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotificationsReq): ListNotificationsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNotificationsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotificationsReq;
  static deserializeBinaryFromReader(message: ListNotificationsReq, reader: jspb.BinaryReader): ListNotificationsReq;
}

export namespace ListNotificationsReq {
  export type AsObject = {
  }
}

