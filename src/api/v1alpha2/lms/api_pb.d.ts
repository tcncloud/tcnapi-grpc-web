// package: protos.lms.v2
// file: api/v1alpha2/lms/api.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../annotations/authz_pb";
import * as api_v1alpha2_lms_entities_pb from "../../../api/v1alpha2/lms/entities_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";

export class CreateFileTemplateRequest extends jspb.Message {
  hasFileTemplate(): boolean;
  clearFileTemplate(): void;
  getFileTemplate(): api_v1alpha2_lms_entities_pb.FileTemplateV2 | undefined;
  setFileTemplate(value?: api_v1alpha2_lms_entities_pb.FileTemplateV2): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFileTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFileTemplateRequest): CreateFileTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFileTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFileTemplateRequest;
  static deserializeBinaryFromReader(message: CreateFileTemplateRequest, reader: jspb.BinaryReader): CreateFileTemplateRequest;
}

export namespace CreateFileTemplateRequest {
  export type AsObject = {
    fileTemplate?: api_v1alpha2_lms_entities_pb.FileTemplateV2.AsObject,
  }
}

export class CreateFileTemplateResponse extends jspb.Message {
  hasFileTemplate(): boolean;
  clearFileTemplate(): void;
  getFileTemplate(): api_v1alpha2_lms_entities_pb.FileTemplateV2 | undefined;
  setFileTemplate(value?: api_v1alpha2_lms_entities_pb.FileTemplateV2): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFileTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFileTemplateResponse): CreateFileTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFileTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFileTemplateResponse;
  static deserializeBinaryFromReader(message: CreateFileTemplateResponse, reader: jspb.BinaryReader): CreateFileTemplateResponse;
}

export namespace CreateFileTemplateResponse {
  export type AsObject = {
    fileTemplate?: api_v1alpha2_lms_entities_pb.FileTemplateV2.AsObject,
  }
}

export class DeleteFileTemplateRequest extends jspb.Message {
  hasFileTemplate(): boolean;
  clearFileTemplate(): void;
  getFileTemplate(): api_v1alpha2_lms_entities_pb.FileTemplateV2 | undefined;
  setFileTemplate(value?: api_v1alpha2_lms_entities_pb.FileTemplateV2): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFileTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFileTemplateRequest): DeleteFileTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFileTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFileTemplateRequest;
  static deserializeBinaryFromReader(message: DeleteFileTemplateRequest, reader: jspb.BinaryReader): DeleteFileTemplateRequest;
}

export namespace DeleteFileTemplateRequest {
  export type AsObject = {
    fileTemplate?: api_v1alpha2_lms_entities_pb.FileTemplateV2.AsObject,
  }
}

export class DeleteFileTemplateResponse extends jspb.Message {
  hasFileTemplate(): boolean;
  clearFileTemplate(): void;
  getFileTemplate(): api_v1alpha2_lms_entities_pb.FileTemplateV2 | undefined;
  setFileTemplate(value?: api_v1alpha2_lms_entities_pb.FileTemplateV2): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFileTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFileTemplateResponse): DeleteFileTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFileTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFileTemplateResponse;
  static deserializeBinaryFromReader(message: DeleteFileTemplateResponse, reader: jspb.BinaryReader): DeleteFileTemplateResponse;
}

export namespace DeleteFileTemplateResponse {
  export type AsObject = {
    fileTemplate?: api_v1alpha2_lms_entities_pb.FileTemplateV2.AsObject,
  }
}

export class GetFileTemplateRequest extends jspb.Message {
  hasFileTemplate(): boolean;
  clearFileTemplate(): void;
  getFileTemplate(): api_v1alpha2_lms_entities_pb.FileTemplateV2 | undefined;
  setFileTemplate(value?: api_v1alpha2_lms_entities_pb.FileTemplateV2): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileTemplateRequest): GetFileTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFileTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileTemplateRequest;
  static deserializeBinaryFromReader(message: GetFileTemplateRequest, reader: jspb.BinaryReader): GetFileTemplateRequest;
}

export namespace GetFileTemplateRequest {
  export type AsObject = {
    fileTemplate?: api_v1alpha2_lms_entities_pb.FileTemplateV2.AsObject,
  }
}

export class GetFileTemplateResponse extends jspb.Message {
  hasFileTemplate(): boolean;
  clearFileTemplate(): void;
  getFileTemplate(): api_v1alpha2_lms_entities_pb.FileTemplateV2 | undefined;
  setFileTemplate(value?: api_v1alpha2_lms_entities_pb.FileTemplateV2): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileTemplateResponse): GetFileTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFileTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileTemplateResponse;
  static deserializeBinaryFromReader(message: GetFileTemplateResponse, reader: jspb.BinaryReader): GetFileTemplateResponse;
}

export namespace GetFileTemplateResponse {
  export type AsObject = {
    fileTemplate?: api_v1alpha2_lms_entities_pb.FileTemplateV2.AsObject,
  }
}

export class UpdateFileTemplateRequest extends jspb.Message {
  hasFileTemplate(): boolean;
  clearFileTemplate(): void;
  getFileTemplate(): api_v1alpha2_lms_entities_pb.FileTemplateV2 | undefined;
  setFileTemplate(value?: api_v1alpha2_lms_entities_pb.FileTemplateV2): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFileTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFileTemplateRequest): UpdateFileTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFileTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFileTemplateRequest;
  static deserializeBinaryFromReader(message: UpdateFileTemplateRequest, reader: jspb.BinaryReader): UpdateFileTemplateRequest;
}

export namespace UpdateFileTemplateRequest {
  export type AsObject = {
    fileTemplate?: api_v1alpha2_lms_entities_pb.FileTemplateV2.AsObject,
  }
}

export class UpdateFileTemplateResponse extends jspb.Message {
  hasFileTemplate(): boolean;
  clearFileTemplate(): void;
  getFileTemplate(): api_v1alpha2_lms_entities_pb.FileTemplateV2 | undefined;
  setFileTemplate(value?: api_v1alpha2_lms_entities_pb.FileTemplateV2): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFileTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFileTemplateResponse): UpdateFileTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFileTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFileTemplateResponse;
  static deserializeBinaryFromReader(message: UpdateFileTemplateResponse, reader: jspb.BinaryReader): UpdateFileTemplateResponse;
}

export namespace UpdateFileTemplateResponse {
  export type AsObject = {
    fileTemplate?: api_v1alpha2_lms_entities_pb.FileTemplateV2.AsObject,
  }
}

