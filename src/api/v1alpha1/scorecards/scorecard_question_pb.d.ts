// package: api.v1alpha1.scorecards
// file: api/v1alpha1/scorecards/scorecard_question.proto

import * as jspb from "google-protobuf";
import * as api_commons_scorecards_pb from "../../../api/commons/scorecards_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class GetScorecardQuestionRequest extends jspb.Message {
  getScorecardQuestionId(): number;
  setScorecardQuestionId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScorecardQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetScorecardQuestionRequest): GetScorecardQuestionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScorecardQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScorecardQuestionRequest;
  static deserializeBinaryFromReader(message: GetScorecardQuestionRequest, reader: jspb.BinaryReader): GetScorecardQuestionRequest;
}

export namespace GetScorecardQuestionRequest {
  export type AsObject = {
    scorecardQuestionId: number,
  }
}

export class GetScorecardQuestionResponse extends jspb.Message {
  hasScorecardQuestion(): boolean;
  clearScorecardQuestion(): void;
  getScorecardQuestion(): api_commons_scorecards_pb.ScorecardQuestion | undefined;
  setScorecardQuestion(value?: api_commons_scorecards_pb.ScorecardQuestion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScorecardQuestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetScorecardQuestionResponse): GetScorecardQuestionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScorecardQuestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScorecardQuestionResponse;
  static deserializeBinaryFromReader(message: GetScorecardQuestionResponse, reader: jspb.BinaryReader): GetScorecardQuestionResponse;
}

export namespace GetScorecardQuestionResponse {
  export type AsObject = {
    scorecardQuestion?: api_commons_scorecards_pb.ScorecardQuestion.AsObject,
  }
}

export class CreateScorecardQuestionRequest extends jspb.Message {
  hasScorecardQuestion(): boolean;
  clearScorecardQuestion(): void;
  getScorecardQuestion(): api_commons_scorecards_pb.ScorecardQuestion | undefined;
  setScorecardQuestion(value?: api_commons_scorecards_pb.ScorecardQuestion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateScorecardQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateScorecardQuestionRequest): CreateScorecardQuestionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateScorecardQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateScorecardQuestionRequest;
  static deserializeBinaryFromReader(message: CreateScorecardQuestionRequest, reader: jspb.BinaryReader): CreateScorecardQuestionRequest;
}

export namespace CreateScorecardQuestionRequest {
  export type AsObject = {
    scorecardQuestion?: api_commons_scorecards_pb.ScorecardQuestion.AsObject,
  }
}

export class CreateScorecardQuestionResponse extends jspb.Message {
  hasScorecardQuestion(): boolean;
  clearScorecardQuestion(): void;
  getScorecardQuestion(): api_commons_scorecards_pb.ScorecardQuestion | undefined;
  setScorecardQuestion(value?: api_commons_scorecards_pb.ScorecardQuestion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateScorecardQuestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateScorecardQuestionResponse): CreateScorecardQuestionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateScorecardQuestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateScorecardQuestionResponse;
  static deserializeBinaryFromReader(message: CreateScorecardQuestionResponse, reader: jspb.BinaryReader): CreateScorecardQuestionResponse;
}

export namespace CreateScorecardQuestionResponse {
  export type AsObject = {
    scorecardQuestion?: api_commons_scorecards_pb.ScorecardQuestion.AsObject,
  }
}

export class UpdateScorecardQuestionRequest extends jspb.Message {
  hasScorecardQuestion(): boolean;
  clearScorecardQuestion(): void;
  getScorecardQuestion(): api_commons_scorecards_pb.ScorecardQuestion | undefined;
  setScorecardQuestion(value?: api_commons_scorecards_pb.ScorecardQuestion): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScorecardQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScorecardQuestionRequest): UpdateScorecardQuestionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScorecardQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScorecardQuestionRequest;
  static deserializeBinaryFromReader(message: UpdateScorecardQuestionRequest, reader: jspb.BinaryReader): UpdateScorecardQuestionRequest;
}

export namespace UpdateScorecardQuestionRequest {
  export type AsObject = {
    scorecardQuestion?: api_commons_scorecards_pb.ScorecardQuestion.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateScorecardQuestionResponse extends jspb.Message {
  hasScorecardQuestion(): boolean;
  clearScorecardQuestion(): void;
  getScorecardQuestion(): api_commons_scorecards_pb.ScorecardQuestion | undefined;
  setScorecardQuestion(value?: api_commons_scorecards_pb.ScorecardQuestion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScorecardQuestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScorecardQuestionResponse): UpdateScorecardQuestionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScorecardQuestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScorecardQuestionResponse;
  static deserializeBinaryFromReader(message: UpdateScorecardQuestionResponse, reader: jspb.BinaryReader): UpdateScorecardQuestionResponse;
}

export namespace UpdateScorecardQuestionResponse {
  export type AsObject = {
    scorecardQuestion?: api_commons_scorecards_pb.ScorecardQuestion.AsObject,
  }
}

export class DeleteScorecardQuestionRequest extends jspb.Message {
  getScorecardQuestionId(): number;
  setScorecardQuestionId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteScorecardQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteScorecardQuestionRequest): DeleteScorecardQuestionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteScorecardQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteScorecardQuestionRequest;
  static deserializeBinaryFromReader(message: DeleteScorecardQuestionRequest, reader: jspb.BinaryReader): DeleteScorecardQuestionRequest;
}

export namespace DeleteScorecardQuestionRequest {
  export type AsObject = {
    scorecardQuestionId: number,
  }
}

export class DeleteScorecardQuestionResponse extends jspb.Message {
  hasScorecardQuestion(): boolean;
  clearScorecardQuestion(): void;
  getScorecardQuestion(): api_commons_scorecards_pb.ScorecardQuestion | undefined;
  setScorecardQuestion(value?: api_commons_scorecards_pb.ScorecardQuestion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteScorecardQuestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteScorecardQuestionResponse): DeleteScorecardQuestionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteScorecardQuestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteScorecardQuestionResponse;
  static deserializeBinaryFromReader(message: DeleteScorecardQuestionResponse, reader: jspb.BinaryReader): DeleteScorecardQuestionResponse;
}

export namespace DeleteScorecardQuestionResponse {
  export type AsObject = {
    scorecardQuestion?: api_commons_scorecards_pb.ScorecardQuestion.AsObject,
  }
}

