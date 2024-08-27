// package: api.v1alpha1.scorecards
// file: api/v1alpha1/scorecards/smart_question.proto

import * as jspb from "google-protobuf";
import * as api_commons_scorecards_pb from "../../../api/commons/scorecards_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class CreateSmartQuestionRequest extends jspb.Message {
  hasSmartQuestion(): boolean;
  clearSmartQuestion(): void;
  getSmartQuestion(): api_commons_scorecards_pb.SmartQuestion | undefined;
  setSmartQuestion(value?: api_commons_scorecards_pb.SmartQuestion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSmartQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSmartQuestionRequest): CreateSmartQuestionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSmartQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSmartQuestionRequest;
  static deserializeBinaryFromReader(message: CreateSmartQuestionRequest, reader: jspb.BinaryReader): CreateSmartQuestionRequest;
}

export namespace CreateSmartQuestionRequest {
  export type AsObject = {
    smartQuestion?: api_commons_scorecards_pb.SmartQuestion.AsObject,
  }
}

export class CreateSmartQuestionResponse extends jspb.Message {
  hasSmartQuestion(): boolean;
  clearSmartQuestion(): void;
  getSmartQuestion(): api_commons_scorecards_pb.SmartQuestion | undefined;
  setSmartQuestion(value?: api_commons_scorecards_pb.SmartQuestion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSmartQuestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSmartQuestionResponse): CreateSmartQuestionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSmartQuestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSmartQuestionResponse;
  static deserializeBinaryFromReader(message: CreateSmartQuestionResponse, reader: jspb.BinaryReader): CreateSmartQuestionResponse;
}

export namespace CreateSmartQuestionResponse {
  export type AsObject = {
    smartQuestion?: api_commons_scorecards_pb.SmartQuestion.AsObject,
  }
}

export class UpdateSmartQuestionRequest extends jspb.Message {
  hasSmartQuestion(): boolean;
  clearSmartQuestion(): void;
  getSmartQuestion(): api_commons_scorecards_pb.SmartQuestion | undefined;
  setSmartQuestion(value?: api_commons_scorecards_pb.SmartQuestion): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSmartQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSmartQuestionRequest): UpdateSmartQuestionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSmartQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSmartQuestionRequest;
  static deserializeBinaryFromReader(message: UpdateSmartQuestionRequest, reader: jspb.BinaryReader): UpdateSmartQuestionRequest;
}

export namespace UpdateSmartQuestionRequest {
  export type AsObject = {
    smartQuestion?: api_commons_scorecards_pb.SmartQuestion.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateSmartQuestionResponse extends jspb.Message {
  hasSmartQuestion(): boolean;
  clearSmartQuestion(): void;
  getSmartQuestion(): api_commons_scorecards_pb.SmartQuestion | undefined;
  setSmartQuestion(value?: api_commons_scorecards_pb.SmartQuestion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSmartQuestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSmartQuestionResponse): UpdateSmartQuestionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSmartQuestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSmartQuestionResponse;
  static deserializeBinaryFromReader(message: UpdateSmartQuestionResponse, reader: jspb.BinaryReader): UpdateSmartQuestionResponse;
}

export namespace UpdateSmartQuestionResponse {
  export type AsObject = {
    smartQuestion?: api_commons_scorecards_pb.SmartQuestion.AsObject,
  }
}

export class DeleteSmartQuestionRequest extends jspb.Message {
  getSmartQuestionId(): number;
  setSmartQuestionId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSmartQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSmartQuestionRequest): DeleteSmartQuestionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSmartQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSmartQuestionRequest;
  static deserializeBinaryFromReader(message: DeleteSmartQuestionRequest, reader: jspb.BinaryReader): DeleteSmartQuestionRequest;
}

export namespace DeleteSmartQuestionRequest {
  export type AsObject = {
    smartQuestionId: number,
  }
}

export class DeleteSmartQuestionResponse extends jspb.Message {
  hasSmartQuestion(): boolean;
  clearSmartQuestion(): void;
  getSmartQuestion(): api_commons_scorecards_pb.SmartQuestion | undefined;
  setSmartQuestion(value?: api_commons_scorecards_pb.SmartQuestion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSmartQuestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSmartQuestionResponse): DeleteSmartQuestionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSmartQuestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSmartQuestionResponse;
  static deserializeBinaryFromReader(message: DeleteSmartQuestionResponse, reader: jspb.BinaryReader): DeleteSmartQuestionResponse;
}

export namespace DeleteSmartQuestionResponse {
  export type AsObject = {
    smartQuestion?: api_commons_scorecards_pb.SmartQuestion.AsObject,
  }
}

