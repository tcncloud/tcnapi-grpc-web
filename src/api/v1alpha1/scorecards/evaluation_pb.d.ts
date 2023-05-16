// package: api.v1alpha1.scorecards
// file: api/v1alpha1/scorecards/evaluation.proto

import * as jspb from "google-protobuf";
import * as api_commons_scorecards_pb from "../../../api/commons/scorecards_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class CreateEvaluationRequest extends jspb.Message {
  hasEvaluation(): boolean;
  clearEvaluation(): void;
  getEvaluation(): api_commons_scorecards_pb.Evaluation | undefined;
  setEvaluation(value?: api_commons_scorecards_pb.Evaluation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEvaluationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEvaluationRequest): CreateEvaluationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEvaluationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEvaluationRequest;
  static deserializeBinaryFromReader(message: CreateEvaluationRequest, reader: jspb.BinaryReader): CreateEvaluationRequest;
}

export namespace CreateEvaluationRequest {
  export type AsObject = {
    evaluation?: api_commons_scorecards_pb.Evaluation.AsObject,
  }
}

export class CreateEvaluationResponse extends jspb.Message {
  hasEvaluation(): boolean;
  clearEvaluation(): void;
  getEvaluation(): api_commons_scorecards_pb.Evaluation | undefined;
  setEvaluation(value?: api_commons_scorecards_pb.Evaluation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEvaluationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEvaluationResponse): CreateEvaluationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEvaluationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEvaluationResponse;
  static deserializeBinaryFromReader(message: CreateEvaluationResponse, reader: jspb.BinaryReader): CreateEvaluationResponse;
}

export namespace CreateEvaluationResponse {
  export type AsObject = {
    evaluation?: api_commons_scorecards_pb.Evaluation.AsObject,
  }
}

export class UpdateEvaluationRequest extends jspb.Message {
  hasEvaluation(): boolean;
  clearEvaluation(): void;
  getEvaluation(): api_commons_scorecards_pb.Evaluation | undefined;
  setEvaluation(value?: api_commons_scorecards_pb.Evaluation): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEvaluationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEvaluationRequest): UpdateEvaluationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEvaluationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEvaluationRequest;
  static deserializeBinaryFromReader(message: UpdateEvaluationRequest, reader: jspb.BinaryReader): UpdateEvaluationRequest;
}

export namespace UpdateEvaluationRequest {
  export type AsObject = {
    evaluation?: api_commons_scorecards_pb.Evaluation.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateEvaluationResponse extends jspb.Message {
  hasEvaluation(): boolean;
  clearEvaluation(): void;
  getEvaluation(): api_commons_scorecards_pb.Evaluation | undefined;
  setEvaluation(value?: api_commons_scorecards_pb.Evaluation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEvaluationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEvaluationResponse): UpdateEvaluationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEvaluationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEvaluationResponse;
  static deserializeBinaryFromReader(message: UpdateEvaluationResponse, reader: jspb.BinaryReader): UpdateEvaluationResponse;
}

export namespace UpdateEvaluationResponse {
  export type AsObject = {
    evaluation?: api_commons_scorecards_pb.Evaluation.AsObject,
  }
}

export class DeleteEvaluationRequest extends jspb.Message {
  getEvaluationId(): number;
  setEvaluationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEvaluationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEvaluationRequest): DeleteEvaluationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEvaluationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEvaluationRequest;
  static deserializeBinaryFromReader(message: DeleteEvaluationRequest, reader: jspb.BinaryReader): DeleteEvaluationRequest;
}

export namespace DeleteEvaluationRequest {
  export type AsObject = {
    evaluationId: number,
  }
}

export class DeleteEvaluationResponse extends jspb.Message {
  hasEvaluation(): boolean;
  clearEvaluation(): void;
  getEvaluation(): api_commons_scorecards_pb.Evaluation | undefined;
  setEvaluation(value?: api_commons_scorecards_pb.Evaluation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEvaluationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEvaluationResponse): DeleteEvaluationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEvaluationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEvaluationResponse;
  static deserializeBinaryFromReader(message: DeleteEvaluationResponse, reader: jspb.BinaryReader): DeleteEvaluationResponse;
}

export namespace DeleteEvaluationResponse {
  export type AsObject = {
    evaluation?: api_commons_scorecards_pb.Evaluation.AsObject,
  }
}

export class GetEvaluationRequest extends jspb.Message {
  getEvaluationId(): number;
  setEvaluationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEvaluationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEvaluationRequest): GetEvaluationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEvaluationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEvaluationRequest;
  static deserializeBinaryFromReader(message: GetEvaluationRequest, reader: jspb.BinaryReader): GetEvaluationRequest;
}

export namespace GetEvaluationRequest {
  export type AsObject = {
    evaluationId: number,
  }
}

export class GetEvaluationResponse extends jspb.Message {
  hasEvaluation(): boolean;
  clearEvaluation(): void;
  getEvaluation(): api_commons_scorecards_pb.Evaluation | undefined;
  setEvaluation(value?: api_commons_scorecards_pb.Evaluation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEvaluationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEvaluationResponse): GetEvaluationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEvaluationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEvaluationResponse;
  static deserializeBinaryFromReader(message: GetEvaluationResponse, reader: jspb.BinaryReader): GetEvaluationResponse;
}

export namespace GetEvaluationResponse {
  export type AsObject = {
    evaluation?: api_commons_scorecards_pb.Evaluation.AsObject,
  }
}

export class ScoreEvaluationRequest extends jspb.Message {
  getEvaluationId(): number;
  setEvaluationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScoreEvaluationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ScoreEvaluationRequest): ScoreEvaluationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScoreEvaluationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScoreEvaluationRequest;
  static deserializeBinaryFromReader(message: ScoreEvaluationRequest, reader: jspb.BinaryReader): ScoreEvaluationRequest;
}

export namespace ScoreEvaluationRequest {
  export type AsObject = {
    evaluationId: number,
  }
}

export class ScoreEvaluationResponse extends jspb.Message {
  hasEvaluation(): boolean;
  clearEvaluation(): void;
  getEvaluation(): api_commons_scorecards_pb.Evaluation | undefined;
  setEvaluation(value?: api_commons_scorecards_pb.Evaluation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScoreEvaluationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ScoreEvaluationResponse): ScoreEvaluationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScoreEvaluationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScoreEvaluationResponse;
  static deserializeBinaryFromReader(message: ScoreEvaluationResponse, reader: jspb.BinaryReader): ScoreEvaluationResponse;
}

export namespace ScoreEvaluationResponse {
  export type AsObject = {
    evaluation?: api_commons_scorecards_pb.Evaluation.AsObject,
  }
}

export class ListEvaluationsRequest extends jspb.Message {
  clearScorerIdList(): void;
  getScorerIdList(): Array<string>;
  setScorerIdList(value: Array<string>): void;
  addScorerId(value: string, index?: number): string;

  hasCompletedAt(): boolean;
  clearCompletedAt(): void;
  getCompletedAt(): api_commons_scorecards_pb.TimeFilter | undefined;
  setCompletedAt(value?: api_commons_scorecards_pb.TimeFilter): void;

  clearCategoryIdsList(): void;
  getCategoryIdsList(): Array<number>;
  setCategoryIdsList(value: Array<number>): void;
  addCategoryIds(value: number, index?: number): number;

  clearAgentUserIdsList(): void;
  getAgentUserIdsList(): Array<string>;
  setAgentUserIdsList(value: Array<string>): void;
  addAgentUserIds(value: string, index?: number): string;

  clearScorecardIdsList(): void;
  getScorecardIdsList(): Array<number>;
  setScorecardIdsList(value: Array<number>): void;
  addScorecardIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEvaluationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEvaluationsRequest): ListEvaluationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListEvaluationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEvaluationsRequest;
  static deserializeBinaryFromReader(message: ListEvaluationsRequest, reader: jspb.BinaryReader): ListEvaluationsRequest;
}

export namespace ListEvaluationsRequest {
  export type AsObject = {
    scorerIdList: Array<string>,
    completedAt?: api_commons_scorecards_pb.TimeFilter.AsObject,
    categoryIdsList: Array<number>,
    agentUserIdsList: Array<string>,
    scorecardIdsList: Array<number>,
  }
}

export class ListEvaluationsResponse extends jspb.Message {
  clearEvaluationsList(): void;
  getEvaluationsList(): Array<api_commons_scorecards_pb.Evaluation>;
  setEvaluationsList(value: Array<api_commons_scorecards_pb.Evaluation>): void;
  addEvaluations(value?: api_commons_scorecards_pb.Evaluation, index?: number): api_commons_scorecards_pb.Evaluation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEvaluationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEvaluationsResponse): ListEvaluationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListEvaluationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEvaluationsResponse;
  static deserializeBinaryFromReader(message: ListEvaluationsResponse, reader: jspb.BinaryReader): ListEvaluationsResponse;
}

export namespace ListEvaluationsResponse {
  export type AsObject = {
    evaluationsList: Array<api_commons_scorecards_pb.Evaluation.AsObject>,
  }
}

