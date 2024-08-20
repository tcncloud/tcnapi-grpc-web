// package: api.v1alpha1.scorecards
// file: api/v1alpha1/scorecards/smart_question.proto

import * as jspb from "google-protobuf";
import * as api_commons_scorecards_pb from "../../../api/commons/scorecards_pb";

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

