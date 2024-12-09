// package: services.omnichannel.instant.v1alpha1
// file: services/omnichannel/instant/v1alpha1/service.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../../annotations/authz_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class StreamContantCenterSnapshotRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamContantCenterSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamContantCenterSnapshotRequest): StreamContantCenterSnapshotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamContantCenterSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamContantCenterSnapshotRequest;
  static deserializeBinaryFromReader(message: StreamContantCenterSnapshotRequest, reader: jspb.BinaryReader): StreamContantCenterSnapshotRequest;
}

export namespace StreamContantCenterSnapshotRequest {
  export type AsObject = {
  }
}

export class StreamContantCenterSnapshotResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamContantCenterSnapshotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamContantCenterSnapshotResponse): StreamContantCenterSnapshotResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamContantCenterSnapshotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamContantCenterSnapshotResponse;
  static deserializeBinaryFromReader(message: StreamContantCenterSnapshotResponse, reader: jspb.BinaryReader): StreamContantCenterSnapshotResponse;
}

export namespace StreamContantCenterSnapshotResponse {
  export type AsObject = {
  }
}

