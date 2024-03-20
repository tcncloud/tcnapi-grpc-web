// package: api.v1alpha1.lms
// file: api/v1alpha1/lms/api.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../annotations/authz_pb";
import * as api_v1alpha1_lms_entities_pb from "../../../api/v1alpha1/lms/entities_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";

export class DeleteFileTemplateRequest extends jspb.Message {
  hasFileTemplate(): boolean;
  clearFileTemplate(): void;
  getFileTemplate(): api_v1alpha1_lms_entities_pb.FileTemplateV2 | undefined;
  setFileTemplate(value?: api_v1alpha1_lms_entities_pb.FileTemplateV2): void;

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
    fileTemplate?: api_v1alpha1_lms_entities_pb.FileTemplateV2.AsObject,
  }
}

export class DeleteFileTemplateResponse extends jspb.Message {
  hasFileTemplate(): boolean;
  clearFileTemplate(): void;
  getFileTemplate(): api_v1alpha1_lms_entities_pb.FileTemplateV2 | undefined;
  setFileTemplate(value?: api_v1alpha1_lms_entities_pb.FileTemplateV2): void;

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
    fileTemplate?: api_v1alpha1_lms_entities_pb.FileTemplateV2.AsObject,
  }
}

export class GetFileTemplateRequest extends jspb.Message {
  hasFileTemplate(): boolean;
  clearFileTemplate(): void;
  getFileTemplate(): api_v1alpha1_lms_entities_pb.FileTemplateV2 | undefined;
  setFileTemplate(value?: api_v1alpha1_lms_entities_pb.FileTemplateV2): void;

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
    fileTemplate?: api_v1alpha1_lms_entities_pb.FileTemplateV2.AsObject,
  }
}

export class GetFileTemplateResponse extends jspb.Message {
  hasFileTemplate(): boolean;
  clearFileTemplate(): void;
  getFileTemplate(): api_v1alpha1_lms_entities_pb.FileTemplateV2 | undefined;
  setFileTemplate(value?: api_v1alpha1_lms_entities_pb.FileTemplateV2): void;

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
    fileTemplate?: api_v1alpha1_lms_entities_pb.FileTemplateV2.AsObject,
  }
}

export class ListFileTemplatesRequest extends jspb.Message {
  hasValue(): boolean;
  clearValue(): void;
  getValue(): api_v1alpha1_lms_entities_pb.FileTemplateV2 | undefined;
  setValue(value?: api_v1alpha1_lms_entities_pb.FileTemplateV2): void;

  getLastId(): string;
  setLastId(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFileTemplatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFileTemplatesRequest): ListFileTemplatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFileTemplatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFileTemplatesRequest;
  static deserializeBinaryFromReader(message: ListFileTemplatesRequest, reader: jspb.BinaryReader): ListFileTemplatesRequest;
}

export namespace ListFileTemplatesRequest {
  export type AsObject = {
    value?: api_v1alpha1_lms_entities_pb.FileTemplateV2.AsObject,
    lastId: string,
    pageSize: number,
  }
}

export class ListFileTemplatesResponse extends jspb.Message {
  clearFileTemplatesList(): void;
  getFileTemplatesList(): Array<api_v1alpha1_lms_entities_pb.FileTemplateV2>;
  setFileTemplatesList(value: Array<api_v1alpha1_lms_entities_pb.FileTemplateV2>): void;
  addFileTemplates(value?: api_v1alpha1_lms_entities_pb.FileTemplateV2, index?: number): api_v1alpha1_lms_entities_pb.FileTemplateV2;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFileTemplatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFileTemplatesResponse): ListFileTemplatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFileTemplatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFileTemplatesResponse;
  static deserializeBinaryFromReader(message: ListFileTemplatesResponse, reader: jspb.BinaryReader): ListFileTemplatesResponse;
}

export namespace ListFileTemplatesResponse {
  export type AsObject = {
    fileTemplatesList: Array<api_v1alpha1_lms_entities_pb.FileTemplateV2.AsObject>,
  }
}

export class ParseFileTemplateRequest extends jspb.Message {
  hasNewTemplate(): boolean;
  clearNewTemplate(): void;
  getNewTemplate(): api_v1alpha1_lms_entities_pb.NewTemplate | undefined;
  setNewTemplate(value?: api_v1alpha1_lms_entities_pb.NewTemplate): void;

  hasExistingTemplate(): boolean;
  clearExistingTemplate(): void;
  getExistingTemplate(): api_v1alpha1_lms_entities_pb.ExistingTemplate | undefined;
  setExistingTemplate(value?: api_v1alpha1_lms_entities_pb.ExistingTemplate): void;

  getRetrieveByCase(): ParseFileTemplateRequest.RetrieveByCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParseFileTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ParseFileTemplateRequest): ParseFileTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParseFileTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParseFileTemplateRequest;
  static deserializeBinaryFromReader(message: ParseFileTemplateRequest, reader: jspb.BinaryReader): ParseFileTemplateRequest;
}

export namespace ParseFileTemplateRequest {
  export type AsObject = {
    newTemplate?: api_v1alpha1_lms_entities_pb.NewTemplate.AsObject,
    existingTemplate?: api_v1alpha1_lms_entities_pb.ExistingTemplate.AsObject,
  }

  export enum RetrieveByCase {
    RETRIEVE_BY_NOT_SET = 0,
    NEW_TEMPLATE = 1,
    EXISTING_TEMPLATE = 2,
  }
}

export class ParseFileTemplateResult extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParseFileTemplateResult.AsObject;
  static toObject(includeInstance: boolean, msg: ParseFileTemplateResult): ParseFileTemplateResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParseFileTemplateResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParseFileTemplateResult;
  static deserializeBinaryFromReader(message: ParseFileTemplateResult, reader: jspb.BinaryReader): ParseFileTemplateResult;
}

export namespace ParseFileTemplateResult {
  export type AsObject = {
  }
}

export class UpdateFileTemplateRequest extends jspb.Message {
  hasFileTemplate(): boolean;
  clearFileTemplate(): void;
  getFileTemplate(): api_v1alpha1_lms_entities_pb.FileTemplateV2 | undefined;
  setFileTemplate(value?: api_v1alpha1_lms_entities_pb.FileTemplateV2): void;

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
    fileTemplate?: api_v1alpha1_lms_entities_pb.FileTemplateV2.AsObject,
  }
}

export class UpdateFileTemplateResponse extends jspb.Message {
  hasFileTemplate(): boolean;
  clearFileTemplate(): void;
  getFileTemplate(): api_v1alpha1_lms_entities_pb.FileTemplateV2 | undefined;
  setFileTemplate(value?: api_v1alpha1_lms_entities_pb.FileTemplateV2): void;

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
    fileTemplate?: api_v1alpha1_lms_entities_pb.FileTemplateV2.AsObject,
  }
}

