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

  hasReturnFields(): boolean;
  clearReturnFields(): void;
  getReturnFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReturnFields(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): void;

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
    returnFields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    isDeleted: boolean,
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

export class PreviewEvaluationScoreRequest extends jspb.Message {
  hasEvaluation(): boolean;
  clearEvaluation(): void;
  getEvaluation(): api_commons_scorecards_pb.Evaluation | undefined;
  setEvaluation(value?: api_commons_scorecards_pb.Evaluation): void;

  hasScorecard(): boolean;
  clearScorecard(): void;
  getScorecard(): api_commons_scorecards_pb.Scorecard | undefined;
  setScorecard(value?: api_commons_scorecards_pb.Scorecard): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreviewEvaluationScoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PreviewEvaluationScoreRequest): PreviewEvaluationScoreRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PreviewEvaluationScoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreviewEvaluationScoreRequest;
  static deserializeBinaryFromReader(message: PreviewEvaluationScoreRequest, reader: jspb.BinaryReader): PreviewEvaluationScoreRequest;
}

export namespace PreviewEvaluationScoreRequest {
  export type AsObject = {
    evaluation?: api_commons_scorecards_pb.Evaluation.AsObject,
    scorecard?: api_commons_scorecards_pb.Scorecard.AsObject,
  }
}

export class PreviewEvaluationScoreResponse extends jspb.Message {
  hasEvaluation(): boolean;
  clearEvaluation(): void;
  getEvaluation(): api_commons_scorecards_pb.Evaluation | undefined;
  setEvaluation(value?: api_commons_scorecards_pb.Evaluation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreviewEvaluationScoreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PreviewEvaluationScoreResponse): PreviewEvaluationScoreResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PreviewEvaluationScoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreviewEvaluationScoreResponse;
  static deserializeBinaryFromReader(message: PreviewEvaluationScoreResponse, reader: jspb.BinaryReader): PreviewEvaluationScoreResponse;
}

export namespace PreviewEvaluationScoreResponse {
  export type AsObject = {
    evaluation?: api_commons_scorecards_pb.Evaluation.AsObject,
  }
}

export class ListEvaluationsByOrgIdRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

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

  hasReturnFields(): boolean;
  clearReturnFields(): void;
  getReturnFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReturnFields(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEvaluationsByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEvaluationsByOrgIdRequest): ListEvaluationsByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListEvaluationsByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEvaluationsByOrgIdRequest;
  static deserializeBinaryFromReader(message: ListEvaluationsByOrgIdRequest, reader: jspb.BinaryReader): ListEvaluationsByOrgIdRequest;
}

export namespace ListEvaluationsByOrgIdRequest {
  export type AsObject = {
    orgId: string,
    scorerIdList: Array<string>,
    completedAt?: api_commons_scorecards_pb.TimeFilter.AsObject,
    categoryIdsList: Array<number>,
    agentUserIdsList: Array<string>,
    scorecardIdsList: Array<number>,
    returnFields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteEvaluationByOrgIdRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getEvaluationId(): number;
  setEvaluationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEvaluationByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEvaluationByOrgIdRequest): DeleteEvaluationByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEvaluationByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEvaluationByOrgIdRequest;
  static deserializeBinaryFromReader(message: DeleteEvaluationByOrgIdRequest, reader: jspb.BinaryReader): DeleteEvaluationByOrgIdRequest;
}

export namespace DeleteEvaluationByOrgIdRequest {
  export type AsObject = {
    orgId: string,
    evaluationId: number,
  }
}

export class RestoreEvaluationRequest extends jspb.Message {
  getEvaluationId(): number;
  setEvaluationId(value: number): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreEvaluationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreEvaluationRequest): RestoreEvaluationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestoreEvaluationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreEvaluationRequest;
  static deserializeBinaryFromReader(message: RestoreEvaluationRequest, reader: jspb.BinaryReader): RestoreEvaluationRequest;
}

export namespace RestoreEvaluationRequest {
  export type AsObject = {
    evaluationId: number,
    userId: string,
  }
}

export class RestoreEvaluationResponse extends jspb.Message {
  hasEvaluation(): boolean;
  clearEvaluation(): void;
  getEvaluation(): api_commons_scorecards_pb.Evaluation | undefined;
  setEvaluation(value?: api_commons_scorecards_pb.Evaluation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreEvaluationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreEvaluationResponse): RestoreEvaluationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestoreEvaluationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreEvaluationResponse;
  static deserializeBinaryFromReader(message: RestoreEvaluationResponse, reader: jspb.BinaryReader): RestoreEvaluationResponse;
}

export namespace RestoreEvaluationResponse {
  export type AsObject = {
    evaluation?: api_commons_scorecards_pb.Evaluation.AsObject,
  }
}

