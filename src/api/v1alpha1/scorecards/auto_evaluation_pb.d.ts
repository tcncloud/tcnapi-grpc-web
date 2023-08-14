// package: api.v1alpha1.scorecards
// file: api/v1alpha1/scorecards/auto_evaluation.proto

import * as jspb from "google-protobuf";
import * as api_commons_scorecards_pb from "../../../api/commons/scorecards_pb";

export class GetAutoEvaluationRequest extends jspb.Message {
  getAutoEvaluationId(): number;
  setAutoEvaluationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAutoEvaluationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAutoEvaluationRequest): GetAutoEvaluationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAutoEvaluationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAutoEvaluationRequest;
  static deserializeBinaryFromReader(message: GetAutoEvaluationRequest, reader: jspb.BinaryReader): GetAutoEvaluationRequest;
}

export namespace GetAutoEvaluationRequest {
  export type AsObject = {
    autoEvaluationId: number,
  }
}

export class GetAutoEvaluationResponse extends jspb.Message {
  hasAutoEvaluation(): boolean;
  clearAutoEvaluation(): void;
  getAutoEvaluation(): api_commons_scorecards_pb.AutoEvaluation | undefined;
  setAutoEvaluation(value?: api_commons_scorecards_pb.AutoEvaluation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAutoEvaluationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAutoEvaluationResponse): GetAutoEvaluationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAutoEvaluationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAutoEvaluationResponse;
  static deserializeBinaryFromReader(message: GetAutoEvaluationResponse, reader: jspb.BinaryReader): GetAutoEvaluationResponse;
}

export namespace GetAutoEvaluationResponse {
  export type AsObject = {
    autoEvaluation?: api_commons_scorecards_pb.AutoEvaluation.AsObject,
  }
}

export class ListAutoEvaluationsRequest extends jspb.Message {
  clearScorecardIdsList(): void;
  getScorecardIdsList(): Array<number>;
  setScorecardIdsList(value: Array<number>): void;
  addScorecardIds(value: number, index?: number): number;

  hasCompletedAt(): boolean;
  clearCompletedAt(): void;
  getCompletedAt(): api_commons_scorecards_pb.TimeFilter | undefined;
  setCompletedAt(value?: api_commons_scorecards_pb.TimeFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAutoEvaluationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAutoEvaluationsRequest): ListAutoEvaluationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAutoEvaluationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAutoEvaluationsRequest;
  static deserializeBinaryFromReader(message: ListAutoEvaluationsRequest, reader: jspb.BinaryReader): ListAutoEvaluationsRequest;
}

export namespace ListAutoEvaluationsRequest {
  export type AsObject = {
    scorecardIdsList: Array<number>,
    completedAt?: api_commons_scorecards_pb.TimeFilter.AsObject,
  }
}

export class ListAutoEvaluationsResponse extends jspb.Message {
  clearAutoEvaluationsList(): void;
  getAutoEvaluationsList(): Array<api_commons_scorecards_pb.AutoEvaluation>;
  setAutoEvaluationsList(value: Array<api_commons_scorecards_pb.AutoEvaluation>): void;
  addAutoEvaluations(value?: api_commons_scorecards_pb.AutoEvaluation, index?: number): api_commons_scorecards_pb.AutoEvaluation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAutoEvaluationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAutoEvaluationsResponse): ListAutoEvaluationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAutoEvaluationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAutoEvaluationsResponse;
  static deserializeBinaryFromReader(message: ListAutoEvaluationsResponse, reader: jspb.BinaryReader): ListAutoEvaluationsResponse;
}

export namespace ListAutoEvaluationsResponse {
  export type AsObject = {
    autoEvaluationsList: Array<api_commons_scorecards_pb.AutoEvaluation.AsObject>,
  }
}

export class DeleteAutoEvaluationRequest extends jspb.Message {
  getAutoEvaluationId(): number;
  setAutoEvaluationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAutoEvaluationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAutoEvaluationRequest): DeleteAutoEvaluationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAutoEvaluationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAutoEvaluationRequest;
  static deserializeBinaryFromReader(message: DeleteAutoEvaluationRequest, reader: jspb.BinaryReader): DeleteAutoEvaluationRequest;
}

export namespace DeleteAutoEvaluationRequest {
  export type AsObject = {
    autoEvaluationId: number,
  }
}

export class DeleteAutoEvaluationResponse extends jspb.Message {
  hasAutoEvaluation(): boolean;
  clearAutoEvaluation(): void;
  getAutoEvaluation(): api_commons_scorecards_pb.AutoEvaluation | undefined;
  setAutoEvaluation(value?: api_commons_scorecards_pb.AutoEvaluation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAutoEvaluationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAutoEvaluationResponse): DeleteAutoEvaluationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAutoEvaluationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAutoEvaluationResponse;
  static deserializeBinaryFromReader(message: DeleteAutoEvaluationResponse, reader: jspb.BinaryReader): DeleteAutoEvaluationResponse;
}

export namespace DeleteAutoEvaluationResponse {
  export type AsObject = {
    autoEvaluation?: api_commons_scorecards_pb.AutoEvaluation.AsObject,
  }
}

