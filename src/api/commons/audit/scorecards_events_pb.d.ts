// package: api.commons.audit
// file: api/commons/audit/scorecards_events.proto

import * as jspb from "google-protobuf";
import * as api_commons_acd_pb from "../../../api/commons/acd_pb";
import * as api_commons_scorecards_pb from "../../../api/commons/scorecards_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ScorecardsCreateQuestionEvent extends jspb.Message {
  getAuthorId(): string;
  setAuthorId(value: string): void;

  getQuestionText(): string;
  setQuestionText(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasQuestion(): boolean;
  clearQuestion(): void;
  getQuestion(): api_commons_scorecards_pb.Question | undefined;
  setQuestion(value?: api_commons_scorecards_pb.Question): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsCreateQuestionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsCreateQuestionEvent): ScorecardsCreateQuestionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsCreateQuestionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsCreateQuestionEvent;
  static deserializeBinaryFromReader(message: ScorecardsCreateQuestionEvent, reader: jspb.BinaryReader): ScorecardsCreateQuestionEvent;
}

export namespace ScorecardsCreateQuestionEvent {
  export type AsObject = {
    authorId: string,
    questionText: string,
    description: string,
    question?: api_commons_scorecards_pb.Question.AsObject,
  }
}

export class ScorecardsUpdateQuestionEvent extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getQuestionText(): string;
  setQuestionText(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasQuestion(): boolean;
  clearQuestion(): void;
  getQuestion(): api_commons_scorecards_pb.Question | undefined;
  setQuestion(value?: api_commons_scorecards_pb.Question): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsUpdateQuestionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsUpdateQuestionEvent): ScorecardsUpdateQuestionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsUpdateQuestionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsUpdateQuestionEvent;
  static deserializeBinaryFromReader(message: ScorecardsUpdateQuestionEvent, reader: jspb.BinaryReader): ScorecardsUpdateQuestionEvent;
}

export namespace ScorecardsUpdateQuestionEvent {
  export type AsObject = {
    userId: string,
    questionText: string,
    description: string,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    question?: api_commons_scorecards_pb.Question.AsObject,
  }
}

export class ScorecardsDeleteQuestionEvent extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getQuestionText(): string;
  setQuestionText(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearCategoryIdsList(): void;
  getCategoryIdsList(): Array<number>;
  setCategoryIdsList(value: Array<number>): void;
  addCategoryIds(value: number, index?: number): number;

  hasQuestion(): boolean;
  clearQuestion(): void;
  getQuestion(): api_commons_scorecards_pb.Question | undefined;
  setQuestion(value?: api_commons_scorecards_pb.Question): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsDeleteQuestionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsDeleteQuestionEvent): ScorecardsDeleteQuestionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsDeleteQuestionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsDeleteQuestionEvent;
  static deserializeBinaryFromReader(message: ScorecardsDeleteQuestionEvent, reader: jspb.BinaryReader): ScorecardsDeleteQuestionEvent;
}

export namespace ScorecardsDeleteQuestionEvent {
  export type AsObject = {
    userId: string,
    questionText: string,
    description: string,
    categoryIdsList: Array<number>,
    question?: api_commons_scorecards_pb.Question.AsObject,
  }
}

export class ScorecardsCreateScorecardEvent extends jspb.Message {
  getAuthorId(): string;
  setAuthorId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getPassScore(): number;
  setPassScore(value: number): void;

  getScoreType(): api_commons_scorecards_pb.ScoreTypeMap[keyof api_commons_scorecards_pb.ScoreTypeMap];
  setScoreType(value: api_commons_scorecards_pb.ScoreTypeMap[keyof api_commons_scorecards_pb.ScoreTypeMap]): void;

  getEvaluationType(): api_commons_scorecards_pb.EvaluationTypeMap[keyof api_commons_scorecards_pb.EvaluationTypeMap];
  setEvaluationType(value: api_commons_scorecards_pb.EvaluationTypeMap[keyof api_commons_scorecards_pb.EvaluationTypeMap]): void;

  hasScorecard(): boolean;
  clearScorecard(): void;
  getScorecard(): api_commons_scorecards_pb.Scorecard | undefined;
  setScorecard(value?: api_commons_scorecards_pb.Scorecard): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsCreateScorecardEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsCreateScorecardEvent): ScorecardsCreateScorecardEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsCreateScorecardEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsCreateScorecardEvent;
  static deserializeBinaryFromReader(message: ScorecardsCreateScorecardEvent, reader: jspb.BinaryReader): ScorecardsCreateScorecardEvent;
}

export namespace ScorecardsCreateScorecardEvent {
  export type AsObject = {
    authorId: string,
    title: string,
    description: string,
    passScore: number,
    scoreType: api_commons_scorecards_pb.ScoreTypeMap[keyof api_commons_scorecards_pb.ScoreTypeMap],
    evaluationType: api_commons_scorecards_pb.EvaluationTypeMap[keyof api_commons_scorecards_pb.EvaluationTypeMap],
    scorecard?: api_commons_scorecards_pb.Scorecard.AsObject,
  }
}

export class ScorecardsUpdateScorecardEvent extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getPassScore(): number;
  setPassScore(value: number): void;

  getScoreType(): api_commons_scorecards_pb.ScoreTypeMap[keyof api_commons_scorecards_pb.ScoreTypeMap];
  setScoreType(value: api_commons_scorecards_pb.ScoreTypeMap[keyof api_commons_scorecards_pb.ScoreTypeMap]): void;

  getEvaluationType(): api_commons_scorecards_pb.EvaluationTypeMap[keyof api_commons_scorecards_pb.EvaluationTypeMap];
  setEvaluationType(value: api_commons_scorecards_pb.EvaluationTypeMap[keyof api_commons_scorecards_pb.EvaluationTypeMap]): void;

  getAllowFeedback(): boolean;
  setAllowFeedback(value: boolean): void;

  getState(): api_commons_scorecards_pb.ScorecardStateMap[keyof api_commons_scorecards_pb.ScorecardStateMap];
  setState(value: api_commons_scorecards_pb.ScorecardStateMap[keyof api_commons_scorecards_pb.ScorecardStateMap]): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasScorecard(): boolean;
  clearScorecard(): void;
  getScorecard(): api_commons_scorecards_pb.Scorecard | undefined;
  setScorecard(value?: api_commons_scorecards_pb.Scorecard): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsUpdateScorecardEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsUpdateScorecardEvent): ScorecardsUpdateScorecardEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsUpdateScorecardEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsUpdateScorecardEvent;
  static deserializeBinaryFromReader(message: ScorecardsUpdateScorecardEvent, reader: jspb.BinaryReader): ScorecardsUpdateScorecardEvent;
}

export namespace ScorecardsUpdateScorecardEvent {
  export type AsObject = {
    userId: string,
    title: string,
    description: string,
    passScore: number,
    scoreType: api_commons_scorecards_pb.ScoreTypeMap[keyof api_commons_scorecards_pb.ScoreTypeMap],
    evaluationType: api_commons_scorecards_pb.EvaluationTypeMap[keyof api_commons_scorecards_pb.EvaluationTypeMap],
    allowFeedback: boolean,
    state: api_commons_scorecards_pb.ScorecardStateMap[keyof api_commons_scorecards_pb.ScorecardStateMap],
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    scorecard?: api_commons_scorecards_pb.Scorecard.AsObject,
  }
}

export class ScorecardsDeleteScorecardEvent extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getPassScore(): number;
  setPassScore(value: number): void;

  getScoreType(): api_commons_scorecards_pb.ScoreTypeMap[keyof api_commons_scorecards_pb.ScoreTypeMap];
  setScoreType(value: api_commons_scorecards_pb.ScoreTypeMap[keyof api_commons_scorecards_pb.ScoreTypeMap]): void;

  getEvaluationType(): api_commons_scorecards_pb.EvaluationTypeMap[keyof api_commons_scorecards_pb.EvaluationTypeMap];
  setEvaluationType(value: api_commons_scorecards_pb.EvaluationTypeMap[keyof api_commons_scorecards_pb.EvaluationTypeMap]): void;

  getState(): api_commons_scorecards_pb.ScorecardStateMap[keyof api_commons_scorecards_pb.ScorecardStateMap];
  setState(value: api_commons_scorecards_pb.ScorecardStateMap[keyof api_commons_scorecards_pb.ScorecardStateMap]): void;

  hasScorecard(): boolean;
  clearScorecard(): void;
  getScorecard(): api_commons_scorecards_pb.Scorecard | undefined;
  setScorecard(value?: api_commons_scorecards_pb.Scorecard): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsDeleteScorecardEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsDeleteScorecardEvent): ScorecardsDeleteScorecardEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsDeleteScorecardEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsDeleteScorecardEvent;
  static deserializeBinaryFromReader(message: ScorecardsDeleteScorecardEvent, reader: jspb.BinaryReader): ScorecardsDeleteScorecardEvent;
}

export namespace ScorecardsDeleteScorecardEvent {
  export type AsObject = {
    userId: string,
    title: string,
    description: string,
    passScore: number,
    scoreType: api_commons_scorecards_pb.ScoreTypeMap[keyof api_commons_scorecards_pb.ScoreTypeMap],
    evaluationType: api_commons_scorecards_pb.EvaluationTypeMap[keyof api_commons_scorecards_pb.EvaluationTypeMap],
    state: api_commons_scorecards_pb.ScorecardStateMap[keyof api_commons_scorecards_pb.ScorecardStateMap],
    scorecard?: api_commons_scorecards_pb.Scorecard.AsObject,
  }
}

export class ScorecardsCloneScorecardEvent extends jspb.Message {
  getAuthorId(): string;
  setAuthorId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getPassScore(): number;
  setPassScore(value: number): void;

  getScoreType(): api_commons_scorecards_pb.ScoreTypeMap[keyof api_commons_scorecards_pb.ScoreTypeMap];
  setScoreType(value: api_commons_scorecards_pb.ScoreTypeMap[keyof api_commons_scorecards_pb.ScoreTypeMap]): void;

  getEvaluationType(): api_commons_scorecards_pb.EvaluationTypeMap[keyof api_commons_scorecards_pb.EvaluationTypeMap];
  setEvaluationType(value: api_commons_scorecards_pb.EvaluationTypeMap[keyof api_commons_scorecards_pb.EvaluationTypeMap]): void;

  hasScorecard(): boolean;
  clearScorecard(): void;
  getScorecard(): api_commons_scorecards_pb.Scorecard | undefined;
  setScorecard(value?: api_commons_scorecards_pb.Scorecard): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsCloneScorecardEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsCloneScorecardEvent): ScorecardsCloneScorecardEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsCloneScorecardEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsCloneScorecardEvent;
  static deserializeBinaryFromReader(message: ScorecardsCloneScorecardEvent, reader: jspb.BinaryReader): ScorecardsCloneScorecardEvent;
}

export namespace ScorecardsCloneScorecardEvent {
  export type AsObject = {
    authorId: string,
    title: string,
    description: string,
    passScore: number,
    scoreType: api_commons_scorecards_pb.ScoreTypeMap[keyof api_commons_scorecards_pb.ScoreTypeMap],
    evaluationType: api_commons_scorecards_pb.EvaluationTypeMap[keyof api_commons_scorecards_pb.EvaluationTypeMap],
    scorecard?: api_commons_scorecards_pb.Scorecard.AsObject,
  }
}

export class ScorecardsCreateEvaluationEvent extends jspb.Message {
  getEvaluationId(): number;
  setEvaluationId(value: number): void;

  getScorecardId(): number;
  setScorecardId(value: number): void;

  getScorerId(): string;
  setScorerId(value: string): void;

  getAgentUserId(): string;
  setAgentUserId(value: string): void;

  getCallSid(): number;
  setCallSid(value: number): void;

  hasEvaluation(): boolean;
  clearEvaluation(): void;
  getEvaluation(): api_commons_scorecards_pb.Evaluation | undefined;
  setEvaluation(value?: api_commons_scorecards_pb.Evaluation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsCreateEvaluationEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsCreateEvaluationEvent): ScorecardsCreateEvaluationEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsCreateEvaluationEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsCreateEvaluationEvent;
  static deserializeBinaryFromReader(message: ScorecardsCreateEvaluationEvent, reader: jspb.BinaryReader): ScorecardsCreateEvaluationEvent;
}

export namespace ScorecardsCreateEvaluationEvent {
  export type AsObject = {
    evaluationId: number,
    scorecardId: number,
    scorerId: string,
    agentUserId: string,
    callSid: number,
    evaluation?: api_commons_scorecards_pb.Evaluation.AsObject,
  }
}

export class ScorecardsUpdateEvaluationEvent extends jspb.Message {
  getEvaluationId(): number;
  setEvaluationId(value: number): void;

  getScorecardId(): number;
  setScorecardId(value: number): void;

  getScorerId(): string;
  setScorerId(value: string): void;

  getAgentUserId(): string;
  setAgentUserId(value: string): void;

  getCallSid(): number;
  setCallSid(value: number): void;

  hasEvaluation(): boolean;
  clearEvaluation(): void;
  getEvaluation(): api_commons_scorecards_pb.Evaluation | undefined;
  setEvaluation(value?: api_commons_scorecards_pb.Evaluation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsUpdateEvaluationEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsUpdateEvaluationEvent): ScorecardsUpdateEvaluationEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsUpdateEvaluationEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsUpdateEvaluationEvent;
  static deserializeBinaryFromReader(message: ScorecardsUpdateEvaluationEvent, reader: jspb.BinaryReader): ScorecardsUpdateEvaluationEvent;
}

export namespace ScorecardsUpdateEvaluationEvent {
  export type AsObject = {
    evaluationId: number,
    scorecardId: number,
    scorerId: string,
    agentUserId: string,
    callSid: number,
    evaluation?: api_commons_scorecards_pb.Evaluation.AsObject,
  }
}

export class ScorecardsDeleteEvaluationEvent extends jspb.Message {
  getEvaluationId(): number;
  setEvaluationId(value: number): void;

  getScorecardId(): number;
  setScorecardId(value: number): void;

  getUserId(): string;
  setUserId(value: string): void;

  getAgentUserId(): string;
  setAgentUserId(value: string): void;

  getCallSid(): number;
  setCallSid(value: number): void;

  hasEvaluation(): boolean;
  clearEvaluation(): void;
  getEvaluation(): api_commons_scorecards_pb.Evaluation | undefined;
  setEvaluation(value?: api_commons_scorecards_pb.Evaluation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsDeleteEvaluationEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsDeleteEvaluationEvent): ScorecardsDeleteEvaluationEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsDeleteEvaluationEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsDeleteEvaluationEvent;
  static deserializeBinaryFromReader(message: ScorecardsDeleteEvaluationEvent, reader: jspb.BinaryReader): ScorecardsDeleteEvaluationEvent;
}

export namespace ScorecardsDeleteEvaluationEvent {
  export type AsObject = {
    evaluationId: number,
    scorecardId: number,
    userId: string,
    agentUserId: string,
    callSid: number,
    evaluation?: api_commons_scorecards_pb.Evaluation.AsObject,
  }
}

export class ScorecardsCreateSectionEvent extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getWeight(): number;
  setWeight(value: number): void;

  hasSection(): boolean;
  clearSection(): void;
  getSection(): api_commons_scorecards_pb.Section | undefined;
  setSection(value?: api_commons_scorecards_pb.Section): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsCreateSectionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsCreateSectionEvent): ScorecardsCreateSectionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsCreateSectionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsCreateSectionEvent;
  static deserializeBinaryFromReader(message: ScorecardsCreateSectionEvent, reader: jspb.BinaryReader): ScorecardsCreateSectionEvent;
}

export namespace ScorecardsCreateSectionEvent {
  export type AsObject = {
    userId: string,
    title: string,
    description: string,
    weight: number,
    section?: api_commons_scorecards_pb.Section.AsObject,
  }
}

export class ScorecardsUpdateSectionEvent extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getWeight(): number;
  setWeight(value: number): void;

  getSortOrder(): number;
  setSortOrder(value: number): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasSection(): boolean;
  clearSection(): void;
  getSection(): api_commons_scorecards_pb.Section | undefined;
  setSection(value?: api_commons_scorecards_pb.Section): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsUpdateSectionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsUpdateSectionEvent): ScorecardsUpdateSectionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsUpdateSectionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsUpdateSectionEvent;
  static deserializeBinaryFromReader(message: ScorecardsUpdateSectionEvent, reader: jspb.BinaryReader): ScorecardsUpdateSectionEvent;
}

export namespace ScorecardsUpdateSectionEvent {
  export type AsObject = {
    userId: string,
    title: string,
    description: string,
    weight: number,
    sortOrder: number,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    section?: api_commons_scorecards_pb.Section.AsObject,
  }
}

export class ScorecardsDeleteSectionEvent extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getWeight(): number;
  setWeight(value: number): void;

  hasSection(): boolean;
  clearSection(): void;
  getSection(): api_commons_scorecards_pb.Section | undefined;
  setSection(value?: api_commons_scorecards_pb.Section): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsDeleteSectionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsDeleteSectionEvent): ScorecardsDeleteSectionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsDeleteSectionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsDeleteSectionEvent;
  static deserializeBinaryFromReader(message: ScorecardsDeleteSectionEvent, reader: jspb.BinaryReader): ScorecardsDeleteSectionEvent;
}

export namespace ScorecardsDeleteSectionEvent {
  export type AsObject = {
    userId: string,
    title: string,
    description: string,
    weight: number,
    section?: api_commons_scorecards_pb.Section.AsObject,
  }
}

export class ScorecardsCreateCategoryEvent extends jspb.Message {
  getAuthorId(): string;
  setAuthorId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): api_commons_scorecards_pb.Category | undefined;
  setCategory(value?: api_commons_scorecards_pb.Category): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsCreateCategoryEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsCreateCategoryEvent): ScorecardsCreateCategoryEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsCreateCategoryEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsCreateCategoryEvent;
  static deserializeBinaryFromReader(message: ScorecardsCreateCategoryEvent, reader: jspb.BinaryReader): ScorecardsCreateCategoryEvent;
}

export namespace ScorecardsCreateCategoryEvent {
  export type AsObject = {
    authorId: string,
    title: string,
    description: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    category?: api_commons_scorecards_pb.Category.AsObject,
  }
}

export class ScorecardsUpdateCategoryEvent extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): api_commons_scorecards_pb.Category | undefined;
  setCategory(value?: api_commons_scorecards_pb.Category): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsUpdateCategoryEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsUpdateCategoryEvent): ScorecardsUpdateCategoryEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsUpdateCategoryEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsUpdateCategoryEvent;
  static deserializeBinaryFromReader(message: ScorecardsUpdateCategoryEvent, reader: jspb.BinaryReader): ScorecardsUpdateCategoryEvent;
}

export namespace ScorecardsUpdateCategoryEvent {
  export type AsObject = {
    userId: string,
    title: string,
    description: string,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    category?: api_commons_scorecards_pb.Category.AsObject,
  }
}

export class ScorecardsDeleteCategoryEvent extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasDeletedAt(): boolean;
  clearDeletedAt(): void;
  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): api_commons_scorecards_pb.Category | undefined;
  setCategory(value?: api_commons_scorecards_pb.Category): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsDeleteCategoryEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsDeleteCategoryEvent): ScorecardsDeleteCategoryEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsDeleteCategoryEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsDeleteCategoryEvent;
  static deserializeBinaryFromReader(message: ScorecardsDeleteCategoryEvent, reader: jspb.BinaryReader): ScorecardsDeleteCategoryEvent;
}

export namespace ScorecardsDeleteCategoryEvent {
  export type AsObject = {
    userId: string,
    title: string,
    description: string,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    category?: api_commons_scorecards_pb.Category.AsObject,
  }
}

export class ScorecardsCreateEvaluationQuestionEvent extends jspb.Message {
  getEvaluationQuestionId(): number;
  setEvaluationQuestionId(value: number): void;

  getEvaluationId(): number;
  setEvaluationId(value: number): void;

  getScorecardQuestionId(): number;
  setScorecardQuestionId(value: number): void;

  getUserId(): string;
  setUserId(value: string): void;

  hasEvaluationQuestion(): boolean;
  clearEvaluationQuestion(): void;
  getEvaluationQuestion(): api_commons_scorecards_pb.EvaluationQuestion | undefined;
  setEvaluationQuestion(value?: api_commons_scorecards_pb.EvaluationQuestion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsCreateEvaluationQuestionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsCreateEvaluationQuestionEvent): ScorecardsCreateEvaluationQuestionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsCreateEvaluationQuestionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsCreateEvaluationQuestionEvent;
  static deserializeBinaryFromReader(message: ScorecardsCreateEvaluationQuestionEvent, reader: jspb.BinaryReader): ScorecardsCreateEvaluationQuestionEvent;
}

export namespace ScorecardsCreateEvaluationQuestionEvent {
  export type AsObject = {
    evaluationQuestionId: number,
    evaluationId: number,
    scorecardQuestionId: number,
    userId: string,
    evaluationQuestion?: api_commons_scorecards_pb.EvaluationQuestion.AsObject,
  }
}

export class ScorecardsUpdateEvaluationQuestionEvent extends jspb.Message {
  getEvaluationQuestionId(): number;
  setEvaluationQuestionId(value: number): void;

  getEvaluationId(): number;
  setEvaluationId(value: number): void;

  getScorecardQuestionId(): number;
  setScorecardQuestionId(value: number): void;

  getUserId(): string;
  setUserId(value: string): void;

  getSkipped(): boolean;
  setSkipped(value: boolean): void;

  getPoints(): number;
  setPoints(value: number): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasEvaluationQuestion(): boolean;
  clearEvaluationQuestion(): void;
  getEvaluationQuestion(): api_commons_scorecards_pb.EvaluationQuestion | undefined;
  setEvaluationQuestion(value?: api_commons_scorecards_pb.EvaluationQuestion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsUpdateEvaluationQuestionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsUpdateEvaluationQuestionEvent): ScorecardsUpdateEvaluationQuestionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsUpdateEvaluationQuestionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsUpdateEvaluationQuestionEvent;
  static deserializeBinaryFromReader(message: ScorecardsUpdateEvaluationQuestionEvent, reader: jspb.BinaryReader): ScorecardsUpdateEvaluationQuestionEvent;
}

export namespace ScorecardsUpdateEvaluationQuestionEvent {
  export type AsObject = {
    evaluationQuestionId: number,
    evaluationId: number,
    scorecardQuestionId: number,
    userId: string,
    skipped: boolean,
    points: number,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    evaluationQuestion?: api_commons_scorecards_pb.EvaluationQuestion.AsObject,
  }
}

export class ScorecardsDeleteEvaluationQuestionEvent extends jspb.Message {
  getEvaluationQuestionId(): number;
  setEvaluationQuestionId(value: number): void;

  getEvaluationId(): number;
  setEvaluationId(value: number): void;

  getScorecardQuestionId(): number;
  setScorecardQuestionId(value: number): void;

  getUserId(): string;
  setUserId(value: string): void;

  hasEvaluationQuestions(): boolean;
  clearEvaluationQuestions(): void;
  getEvaluationQuestions(): api_commons_scorecards_pb.EvaluationQuestion | undefined;
  setEvaluationQuestions(value?: api_commons_scorecards_pb.EvaluationQuestion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsDeleteEvaluationQuestionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsDeleteEvaluationQuestionEvent): ScorecardsDeleteEvaluationQuestionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsDeleteEvaluationQuestionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsDeleteEvaluationQuestionEvent;
  static deserializeBinaryFromReader(message: ScorecardsDeleteEvaluationQuestionEvent, reader: jspb.BinaryReader): ScorecardsDeleteEvaluationQuestionEvent;
}

export namespace ScorecardsDeleteEvaluationQuestionEvent {
  export type AsObject = {
    evaluationQuestionId: number,
    evaluationId: number,
    scorecardQuestionId: number,
    userId: string,
    evaluationQuestions?: api_commons_scorecards_pb.EvaluationQuestion.AsObject,
  }
}

export class ScorecardsCreateScorecardQuestionEvent extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getQuestion(): string;
  setQuestion(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getAllowSkip(): boolean;
  setAllowSkip(value: boolean): void;

  getMaxPoints(): number;
  setMaxPoints(value: number): void;

  getAllowMultiSelect(): boolean;
  setAllowMultiSelect(value: boolean): void;

  hasScorecardQuestion(): boolean;
  clearScorecardQuestion(): void;
  getScorecardQuestion(): api_commons_scorecards_pb.ScorecardQuestion | undefined;
  setScorecardQuestion(value?: api_commons_scorecards_pb.ScorecardQuestion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsCreateScorecardQuestionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsCreateScorecardQuestionEvent): ScorecardsCreateScorecardQuestionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsCreateScorecardQuestionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsCreateScorecardQuestionEvent;
  static deserializeBinaryFromReader(message: ScorecardsCreateScorecardQuestionEvent, reader: jspb.BinaryReader): ScorecardsCreateScorecardQuestionEvent;
}

export namespace ScorecardsCreateScorecardQuestionEvent {
  export type AsObject = {
    userId: string,
    question: string,
    description: string,
    allowSkip: boolean,
    maxPoints: number,
    allowMultiSelect: boolean,
    scorecardQuestion?: api_commons_scorecards_pb.ScorecardQuestion.AsObject,
  }
}

export class ScorecardsUpdateScorecardQuestionEvent extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getQuestion(): string;
  setQuestion(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getAllowSkip(): boolean;
  setAllowSkip(value: boolean): void;

  getMaxPoints(): number;
  setMaxPoints(value: number): void;

  getAllowMultiSelect(): boolean;
  setAllowMultiSelect(value: boolean): void;

  getSortOrder(): number;
  setSortOrder(value: number): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasScorecardQuestion(): boolean;
  clearScorecardQuestion(): void;
  getScorecardQuestion(): api_commons_scorecards_pb.ScorecardQuestion | undefined;
  setScorecardQuestion(value?: api_commons_scorecards_pb.ScorecardQuestion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsUpdateScorecardQuestionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsUpdateScorecardQuestionEvent): ScorecardsUpdateScorecardQuestionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsUpdateScorecardQuestionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsUpdateScorecardQuestionEvent;
  static deserializeBinaryFromReader(message: ScorecardsUpdateScorecardQuestionEvent, reader: jspb.BinaryReader): ScorecardsUpdateScorecardQuestionEvent;
}

export namespace ScorecardsUpdateScorecardQuestionEvent {
  export type AsObject = {
    userId: string,
    question: string,
    description: string,
    allowSkip: boolean,
    maxPoints: number,
    allowMultiSelect: boolean,
    sortOrder: number,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    scorecardQuestion?: api_commons_scorecards_pb.ScorecardQuestion.AsObject,
  }
}

export class ScorecardsDeleteScorecardQuestionEvent extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getQuestion(): string;
  setQuestion(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getAllowSkip(): boolean;
  setAllowSkip(value: boolean): void;

  getMaxPoints(): number;
  setMaxPoints(value: number): void;

  getAllowMultiSelect(): boolean;
  setAllowMultiSelect(value: boolean): void;

  hasScorecardQuestion(): boolean;
  clearScorecardQuestion(): void;
  getScorecardQuestion(): api_commons_scorecards_pb.ScorecardQuestion | undefined;
  setScorecardQuestion(value?: api_commons_scorecards_pb.ScorecardQuestion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsDeleteScorecardQuestionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsDeleteScorecardQuestionEvent): ScorecardsDeleteScorecardQuestionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsDeleteScorecardQuestionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsDeleteScorecardQuestionEvent;
  static deserializeBinaryFromReader(message: ScorecardsDeleteScorecardQuestionEvent, reader: jspb.BinaryReader): ScorecardsDeleteScorecardQuestionEvent;
}

export namespace ScorecardsDeleteScorecardQuestionEvent {
  export type AsObject = {
    userId: string,
    question: string,
    description: string,
    allowSkip: boolean,
    maxPoints: number,
    allowMultiSelect: boolean,
    scorecardQuestion?: api_commons_scorecards_pb.ScorecardQuestion.AsObject,
  }
}

export class ScorecardsCreateAutoEvaluationEvent extends jspb.Message {
  getAutoEvaluationId(): number;
  setAutoEvaluationId(value: number): void;

  getScorecardId(): number;
  setScorecardId(value: number): void;

  getAgentUserId(): string;
  setAgentUserId(value: string): void;

  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getTranscriptSid(): number;
  setTranscriptSid(value: number): void;

  getRiskLevel(): api_commons_scorecards_pb.RiskLevelMap[keyof api_commons_scorecards_pb.RiskLevelMap];
  setRiskLevel(value: api_commons_scorecards_pb.RiskLevelMap[keyof api_commons_scorecards_pb.RiskLevelMap]): void;

  hasAutoEvaluation(): boolean;
  clearAutoEvaluation(): void;
  getAutoEvaluation(): api_commons_scorecards_pb.AutoEvaluation | undefined;
  setAutoEvaluation(value?: api_commons_scorecards_pb.AutoEvaluation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsCreateAutoEvaluationEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsCreateAutoEvaluationEvent): ScorecardsCreateAutoEvaluationEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsCreateAutoEvaluationEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsCreateAutoEvaluationEvent;
  static deserializeBinaryFromReader(message: ScorecardsCreateAutoEvaluationEvent, reader: jspb.BinaryReader): ScorecardsCreateAutoEvaluationEvent;
}

export namespace ScorecardsCreateAutoEvaluationEvent {
  export type AsObject = {
    autoEvaluationId: number,
    scorecardId: number,
    agentUserId: string,
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    transcriptSid: number,
    riskLevel: api_commons_scorecards_pb.RiskLevelMap[keyof api_commons_scorecards_pb.RiskLevelMap],
    autoEvaluation?: api_commons_scorecards_pb.AutoEvaluation.AsObject,
  }
}

