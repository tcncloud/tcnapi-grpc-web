// package: api.v1alpha1.scorecards
// file: api/v1alpha1/scorecards/evaluation_question.proto

import * as jspb from "google-protobuf";
import * as api_commons_scorecards_pb from "../../../api/commons/scorecards_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class CreateEvaluationQuestionRequest extends jspb.Message {
  hasEvaluationQuestion(): boolean;
  clearEvaluationQuestion(): void;
  getEvaluationQuestion(): api_commons_scorecards_pb.EvaluationQuestion | undefined;
  setEvaluationQuestion(value?: api_commons_scorecards_pb.EvaluationQuestion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEvaluationQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEvaluationQuestionRequest): CreateEvaluationQuestionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEvaluationQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEvaluationQuestionRequest;
  static deserializeBinaryFromReader(message: CreateEvaluationQuestionRequest, reader: jspb.BinaryReader): CreateEvaluationQuestionRequest;
}

export namespace CreateEvaluationQuestionRequest {
  export type AsObject = {
    evaluationQuestion?: api_commons_scorecards_pb.EvaluationQuestion.AsObject,
  }
}

export class CreateEvaluationQuestionResponse extends jspb.Message {
  hasEvaluationQuestion(): boolean;
  clearEvaluationQuestion(): void;
  getEvaluationQuestion(): api_commons_scorecards_pb.EvaluationQuestion | undefined;
  setEvaluationQuestion(value?: api_commons_scorecards_pb.EvaluationQuestion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEvaluationQuestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEvaluationQuestionResponse): CreateEvaluationQuestionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEvaluationQuestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEvaluationQuestionResponse;
  static deserializeBinaryFromReader(message: CreateEvaluationQuestionResponse, reader: jspb.BinaryReader): CreateEvaluationQuestionResponse;
}

export namespace CreateEvaluationQuestionResponse {
  export type AsObject = {
    evaluationQuestion?: api_commons_scorecards_pb.EvaluationQuestion.AsObject,
  }
}

export class UpdateEvaluationQuestionRequest extends jspb.Message {
  hasEvaluationQuestion(): boolean;
  clearEvaluationQuestion(): void;
  getEvaluationQuestion(): api_commons_scorecards_pb.EvaluationQuestion | undefined;
  setEvaluationQuestion(value?: api_commons_scorecards_pb.EvaluationQuestion): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEvaluationQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEvaluationQuestionRequest): UpdateEvaluationQuestionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEvaluationQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEvaluationQuestionRequest;
  static deserializeBinaryFromReader(message: UpdateEvaluationQuestionRequest, reader: jspb.BinaryReader): UpdateEvaluationQuestionRequest;
}

export namespace UpdateEvaluationQuestionRequest {
  export type AsObject = {
    evaluationQuestion?: api_commons_scorecards_pb.EvaluationQuestion.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateEvaluationQuestionResponse extends jspb.Message {
  hasEvaluationQuestion(): boolean;
  clearEvaluationQuestion(): void;
  getEvaluationQuestion(): api_commons_scorecards_pb.EvaluationQuestion | undefined;
  setEvaluationQuestion(value?: api_commons_scorecards_pb.EvaluationQuestion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEvaluationQuestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEvaluationQuestionResponse): UpdateEvaluationQuestionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEvaluationQuestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEvaluationQuestionResponse;
  static deserializeBinaryFromReader(message: UpdateEvaluationQuestionResponse, reader: jspb.BinaryReader): UpdateEvaluationQuestionResponse;
}

export namespace UpdateEvaluationQuestionResponse {
  export type AsObject = {
    evaluationQuestion?: api_commons_scorecards_pb.EvaluationQuestion.AsObject,
  }
}

export class DeleteEvaluationQuestionRequest extends jspb.Message {
  getEvaluationQuestionId(): number;
  setEvaluationQuestionId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEvaluationQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEvaluationQuestionRequest): DeleteEvaluationQuestionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEvaluationQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEvaluationQuestionRequest;
  static deserializeBinaryFromReader(message: DeleteEvaluationQuestionRequest, reader: jspb.BinaryReader): DeleteEvaluationQuestionRequest;
}

export namespace DeleteEvaluationQuestionRequest {
  export type AsObject = {
    evaluationQuestionId: number,
  }
}

export class DeleteEvaluationQuestionResponse extends jspb.Message {
  hasEvaluationQuestion(): boolean;
  clearEvaluationQuestion(): void;
  getEvaluationQuestion(): api_commons_scorecards_pb.EvaluationQuestion | undefined;
  setEvaluationQuestion(value?: api_commons_scorecards_pb.EvaluationQuestion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEvaluationQuestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEvaluationQuestionResponse): DeleteEvaluationQuestionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEvaluationQuestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEvaluationQuestionResponse;
  static deserializeBinaryFromReader(message: DeleteEvaluationQuestionResponse, reader: jspb.BinaryReader): DeleteEvaluationQuestionResponse;
}

export namespace DeleteEvaluationQuestionResponse {
  export type AsObject = {
    evaluationQuestion?: api_commons_scorecards_pb.EvaluationQuestion.AsObject,
  }
}

