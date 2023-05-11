// package: api.v1alpha1.scorecards
// file: api/v1alpha1/scorecards/auto_question.proto

import * as jspb from "google-protobuf";
import * as api_commons_scorecards_pb from "../../../api/commons/scorecards_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class GetAutoQuestionRequest extends jspb.Message {
  getAutoQuestionId(): number;
  setAutoQuestionId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAutoQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAutoQuestionRequest): GetAutoQuestionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAutoQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAutoQuestionRequest;
  static deserializeBinaryFromReader(message: GetAutoQuestionRequest, reader: jspb.BinaryReader): GetAutoQuestionRequest;
}

export namespace GetAutoQuestionRequest {
  export type AsObject = {
    autoQuestionId: number,
  }
}

export class GetAutoQuestionResponse extends jspb.Message {
  hasAutoQuestion(): boolean;
  clearAutoQuestion(): void;
  getAutoQuestion(): api_commons_scorecards_pb.AutoQuestion | undefined;
  setAutoQuestion(value?: api_commons_scorecards_pb.AutoQuestion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAutoQuestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAutoQuestionResponse): GetAutoQuestionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAutoQuestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAutoQuestionResponse;
  static deserializeBinaryFromReader(message: GetAutoQuestionResponse, reader: jspb.BinaryReader): GetAutoQuestionResponse;
}

export namespace GetAutoQuestionResponse {
  export type AsObject = {
    autoQuestion?: api_commons_scorecards_pb.AutoQuestion.AsObject,
  }
}

export class CreateAutoQuestionRequest extends jspb.Message {
  hasAutoQuestion(): boolean;
  clearAutoQuestion(): void;
  getAutoQuestion(): api_commons_scorecards_pb.AutoQuestion | undefined;
  setAutoQuestion(value?: api_commons_scorecards_pb.AutoQuestion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAutoQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAutoQuestionRequest): CreateAutoQuestionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAutoQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAutoQuestionRequest;
  static deserializeBinaryFromReader(message: CreateAutoQuestionRequest, reader: jspb.BinaryReader): CreateAutoQuestionRequest;
}

export namespace CreateAutoQuestionRequest {
  export type AsObject = {
    autoQuestion?: api_commons_scorecards_pb.AutoQuestion.AsObject,
  }
}

export class CreateAutoQuestionResponse extends jspb.Message {
  hasAutoQuestion(): boolean;
  clearAutoQuestion(): void;
  getAutoQuestion(): api_commons_scorecards_pb.AutoQuestion | undefined;
  setAutoQuestion(value?: api_commons_scorecards_pb.AutoQuestion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAutoQuestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAutoQuestionResponse): CreateAutoQuestionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAutoQuestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAutoQuestionResponse;
  static deserializeBinaryFromReader(message: CreateAutoQuestionResponse, reader: jspb.BinaryReader): CreateAutoQuestionResponse;
}

export namespace CreateAutoQuestionResponse {
  export type AsObject = {
    autoQuestion?: api_commons_scorecards_pb.AutoQuestion.AsObject,
  }
}

export class UpdateAutoQuestionRequest extends jspb.Message {
  hasAutoQuestion(): boolean;
  clearAutoQuestion(): void;
  getAutoQuestion(): api_commons_scorecards_pb.AutoQuestion | undefined;
  setAutoQuestion(value?: api_commons_scorecards_pb.AutoQuestion): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAutoQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAutoQuestionRequest): UpdateAutoQuestionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAutoQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAutoQuestionRequest;
  static deserializeBinaryFromReader(message: UpdateAutoQuestionRequest, reader: jspb.BinaryReader): UpdateAutoQuestionRequest;
}

export namespace UpdateAutoQuestionRequest {
  export type AsObject = {
    autoQuestion?: api_commons_scorecards_pb.AutoQuestion.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateAutoQuestionResponse extends jspb.Message {
  hasAutoQuestion(): boolean;
  clearAutoQuestion(): void;
  getAutoQuestion(): api_commons_scorecards_pb.AutoQuestion | undefined;
  setAutoQuestion(value?: api_commons_scorecards_pb.AutoQuestion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAutoQuestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAutoQuestionResponse): UpdateAutoQuestionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAutoQuestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAutoQuestionResponse;
  static deserializeBinaryFromReader(message: UpdateAutoQuestionResponse, reader: jspb.BinaryReader): UpdateAutoQuestionResponse;
}

export namespace UpdateAutoQuestionResponse {
  export type AsObject = {
    autoQuestion?: api_commons_scorecards_pb.AutoQuestion.AsObject,
  }
}

export class DeleteAutoQuestionRequest extends jspb.Message {
  getAutoQuestionId(): number;
  setAutoQuestionId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAutoQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAutoQuestionRequest): DeleteAutoQuestionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAutoQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAutoQuestionRequest;
  static deserializeBinaryFromReader(message: DeleteAutoQuestionRequest, reader: jspb.BinaryReader): DeleteAutoQuestionRequest;
}

export namespace DeleteAutoQuestionRequest {
  export type AsObject = {
    autoQuestionId: number,
  }
}

export class DeleteAutoQuestionResponse extends jspb.Message {
  hasAutoQuestion(): boolean;
  clearAutoQuestion(): void;
  getAutoQuestion(): api_commons_scorecards_pb.AutoQuestion | undefined;
  setAutoQuestion(value?: api_commons_scorecards_pb.AutoQuestion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAutoQuestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAutoQuestionResponse): DeleteAutoQuestionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAutoQuestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAutoQuestionResponse;
  static deserializeBinaryFromReader(message: DeleteAutoQuestionResponse, reader: jspb.BinaryReader): DeleteAutoQuestionResponse;
}

export namespace DeleteAutoQuestionResponse {
  export type AsObject = {
    autoQuestion?: api_commons_scorecards_pb.AutoQuestion.AsObject,
  }
}

