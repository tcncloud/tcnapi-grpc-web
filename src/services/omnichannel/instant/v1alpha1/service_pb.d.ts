// package: services.omnichannel.instant.v1alpha1
// file: services/omnichannel/instant/v1alpha1/service.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../../annotations/authz_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class GetContantCenterSnapshotRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContantCenterSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContantCenterSnapshotRequest): GetContantCenterSnapshotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContantCenterSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContantCenterSnapshotRequest;
  static deserializeBinaryFromReader(message: GetContantCenterSnapshotRequest, reader: jspb.BinaryReader): GetContantCenterSnapshotRequest;
}

export namespace GetContantCenterSnapshotRequest {
  export type AsObject = {
  }
}

export class GetContantCenterSnapshotResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContantCenterSnapshotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContantCenterSnapshotResponse): GetContantCenterSnapshotResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContantCenterSnapshotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContantCenterSnapshotResponse;
  static deserializeBinaryFromReader(message: GetContantCenterSnapshotResponse, reader: jspb.BinaryReader): GetContantCenterSnapshotResponse;
}

export namespace GetContantCenterSnapshotResponse {
  export type AsObject = {
  }
}

