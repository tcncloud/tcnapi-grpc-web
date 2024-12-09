// package: services.omnichannel.instant.v1alpha1
// file: services/omnichannel/instant/v1alpha1/service.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../../annotations/authz_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class StreamContactCenterSnapshotRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamContactCenterSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamContactCenterSnapshotRequest): StreamContactCenterSnapshotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamContactCenterSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamContactCenterSnapshotRequest;
  static deserializeBinaryFromReader(message: StreamContactCenterSnapshotRequest, reader: jspb.BinaryReader): StreamContactCenterSnapshotRequest;
}

export namespace StreamContactCenterSnapshotRequest {
  export type AsObject = {
  }
}

export class StreamContactCenterSnapshotResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamContactCenterSnapshotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamContactCenterSnapshotResponse): StreamContactCenterSnapshotResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamContactCenterSnapshotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamContactCenterSnapshotResponse;
  static deserializeBinaryFromReader(message: StreamContactCenterSnapshotResponse, reader: jspb.BinaryReader): StreamContactCenterSnapshotResponse;
}

export namespace StreamContactCenterSnapshotResponse {
  export type AsObject = {
  }
}

