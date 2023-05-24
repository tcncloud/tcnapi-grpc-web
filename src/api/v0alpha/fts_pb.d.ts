// package: api.v0alpha
// file: api/v0alpha/fts.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../annotations/authz_pb";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";

export class GetUploadFileUrlReq extends jspb.Message {
  getPrefix(): string;
  setPrefix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUploadFileUrlReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetUploadFileUrlReq): GetUploadFileUrlReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUploadFileUrlReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUploadFileUrlReq;
  static deserializeBinaryFromReader(message: GetUploadFileUrlReq, reader: jspb.BinaryReader): GetUploadFileUrlReq;
}

export namespace GetUploadFileUrlReq {
  export type AsObject = {
    prefix: string,
  }
}

export class GetUploadFileUrlRes extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUploadFileUrlRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetUploadFileUrlRes): GetUploadFileUrlRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUploadFileUrlRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUploadFileUrlRes;
  static deserializeBinaryFromReader(message: GetUploadFileUrlRes, reader: jspb.BinaryReader): GetUploadFileUrlRes;
}

export namespace GetUploadFileUrlRes {
  export type AsObject = {
    url: string,
    id: string,
  }
}

