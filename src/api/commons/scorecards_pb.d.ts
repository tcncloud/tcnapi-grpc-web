// package: api.commons
// file: api/commons/scorecards.proto

import * as jspb from "google-protobuf";
import * as api_commons_acd_pb from "../../api/commons/acd_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class TimeFilter extends jspb.Message {
  hasEq(): boolean;
  clearEq(): void;
  getEq(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEq(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasGte(): boolean;
  clearGte(): void;
  getGte(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setGte(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLte(): boolean;
  clearLte(): void;
  getLte(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLte(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasGt(): boolean;
  clearGt(): void;
  getGt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setGt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLt(): boolean;
  clearLt(): void;
  getLt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeFilter.AsObject;
  static toObject(includeInstance: boolean, msg: TimeFilter): TimeFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeFilter;
  static deserializeBinaryFromReader(message: TimeFilter, reader: jspb.BinaryReader): TimeFilter;
}

export namespace TimeFilter {
  export type AsObject = {
    eq?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    gte?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lte?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    gt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Category extends jspb.Message {
  getCategoryId(): number;
  setCategoryId(value: number): void;

  getAuthorId(): string;
  setAuthorId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearSkillProfilesList(): void;
  getSkillProfilesList(): Array<number>;
  setSkillProfilesList(value: Array<number>): void;
  addSkillProfiles(value: number, index?: number): number;

  getVersion(): number;
  setVersion(value: number): void;

  clearCallTypesList(): void;
  getCallTypesList(): Array<api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]>;
  setCallTypesList(value: Array<api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]>): void;
  addCallTypes(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap], index?: number): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];

  getIsSystem(): boolean;
  setIsSystem(value: boolean): void;

  getCategoryType(): CategoryTypeMap[keyof CategoryTypeMap];
  setCategoryType(value: CategoryTypeMap[keyof CategoryTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Category.AsObject;
  static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Category;
  static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
  export type AsObject = {
    categoryId: number,
    authorId: string,
    title: string,
    description: string,
    skillProfilesList: Array<number>,
    version: number,
    callTypesList: Array<api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]>,
    isSystem: boolean,
    categoryType: CategoryTypeMap[keyof CategoryTypeMap],
  }
}

export class Evaluation extends jspb.Message {
  getEvaluationId(): number;
  setEvaluationId(value: number): void;

  getScorecardId(): number;
  setScorecardId(value: number): void;

  getScorerId(): string;
  setScorerId(value: string): void;

  getCallSid(): number;
  setCallSid(value: number): void;

  getScore(): number;
  setScore(value: number): void;

  getEvaluationState(): EvaluationStateMap[keyof EvaluationStateMap];
  setEvaluationState(value: EvaluationStateMap[keyof EvaluationStateMap]): void;

  clearEvaluationSectionsList(): void;
  getEvaluationSectionsList(): Array<EvaluationSection>;
  setEvaluationSectionsList(value: Array<EvaluationSection>): void;
  addEvaluationSections(value?: EvaluationSection, index?: number): EvaluationSection;

  hasCompletedAt(): boolean;
  clearCompletedAt(): void;
  getCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDeletedAt(): boolean;
  clearDeletedAt(): void;
  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAgentUserId(): string;
  setAgentUserId(value: string): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getTranscriptSid(): number;
  setTranscriptSid(value: number): void;

  clearCustomFieldsList(): void;
  getCustomFieldsList(): Array<Evaluation.CustomField>;
  setCustomFieldsList(value: Array<Evaluation.CustomField>): void;
  addCustomFields(value?: Evaluation.CustomField, index?: number): Evaluation.CustomField;

  getDeletedBy(): string;
  setDeletedBy(value: string): void;

  getIsRecoverable(): boolean;
  setIsRecoverable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Evaluation.AsObject;
  static toObject(includeInstance: boolean, msg: Evaluation): Evaluation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Evaluation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Evaluation;
  static deserializeBinaryFromReader(message: Evaluation, reader: jspb.BinaryReader): Evaluation;
}

export namespace Evaluation {
  export type AsObject = {
    evaluationId: number,
    scorecardId: number,
    scorerId: string,
    callSid: number,
    score: number,
    evaluationState: EvaluationStateMap[keyof EvaluationStateMap],
    evaluationSectionsList: Array<EvaluationSection.AsObject>,
    completedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    agentUserId: string,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    transcriptSid: number,
    customFieldsList: Array<Evaluation.CustomField.AsObject>,
    deletedBy: string,
    isRecoverable: boolean,
  }

  export class CustomField extends jspb.Message {
    getKey(): string;
    setKey(value: string): void;

    getField(): string;
    setField(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomField.AsObject;
    static toObject(includeInstance: boolean, msg: CustomField): CustomField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomField;
    static deserializeBinaryFromReader(message: CustomField, reader: jspb.BinaryReader): CustomField;
  }

  export namespace CustomField {
    export type AsObject = {
      key: string,
      field: string,
    }
  }
}

export class EvaluationSection extends jspb.Message {
  getEvaluationSectionId(): number;
  setEvaluationSectionId(value: number): void;

  getEvaluationId(): number;
  setEvaluationId(value: number): void;

  getSectionId(): number;
  setSectionId(value: number): void;

  getPoints(): number;
  setPoints(value: number): void;

  getPossiblePoints(): number;
  setPossiblePoints(value: number): void;

  getSortOrder(): number;
  setSortOrder(value: number): void;

  hasDeletedAt(): boolean;
  clearDeletedAt(): void;
  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearEvaluationQuestionsList(): void;
  getEvaluationQuestionsList(): Array<EvaluationQuestion>;
  setEvaluationQuestionsList(value: Array<EvaluationQuestion>): void;
  addEvaluationQuestions(value?: EvaluationQuestion, index?: number): EvaluationQuestion;

  clearAutoEvaluationQuestionsList(): void;
  getAutoEvaluationQuestionsList(): Array<AutoEvaluationQuestion>;
  setAutoEvaluationQuestionsList(value: Array<AutoEvaluationQuestion>): void;
  addAutoEvaluationQuestions(value?: AutoEvaluationQuestion, index?: number): AutoEvaluationQuestion;

  getSkipped(): boolean;
  setSkipped(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvaluationSection.AsObject;
  static toObject(includeInstance: boolean, msg: EvaluationSection): EvaluationSection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EvaluationSection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvaluationSection;
  static deserializeBinaryFromReader(message: EvaluationSection, reader: jspb.BinaryReader): EvaluationSection;
}

export namespace EvaluationSection {
  export type AsObject = {
    evaluationSectionId: number,
    evaluationId: number,
    sectionId: number,
    points: number,
    possiblePoints: number,
    sortOrder: number,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    evaluationQuestionsList: Array<EvaluationQuestion.AsObject>,
    autoEvaluationQuestionsList: Array<AutoEvaluationQuestion.AsObject>,
    skipped: boolean,
  }
}

export class EvaluationQuestion extends jspb.Message {
  getEvaluationQuestionId(): number;
  setEvaluationQuestionId(value: number): void;

  getEvaluationId(): number;
  setEvaluationId(value: number): void;

  getScorecardQuestionId(): number;
  setScorecardQuestionId(value: number): void;

  getSkipped(): boolean;
  setSkipped(value: boolean): void;

  getPoints(): number;
  setPoints(value: number): void;

  clearAnswersList(): void;
  getAnswersList(): Array<EvaluationQuestion.Answer>;
  setAnswersList(value: Array<EvaluationQuestion.Answer>): void;
  addAnswers(value?: EvaluationQuestion.Answer, index?: number): EvaluationQuestion.Answer;

  getEvaluationSectionId(): number;
  setEvaluationSectionId(value: number): void;

  getComment(): string;
  setComment(value: string): void;

  getSortOrder(): number;
  setSortOrder(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvaluationQuestion.AsObject;
  static toObject(includeInstance: boolean, msg: EvaluationQuestion): EvaluationQuestion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EvaluationQuestion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvaluationQuestion;
  static deserializeBinaryFromReader(message: EvaluationQuestion, reader: jspb.BinaryReader): EvaluationQuestion;
}

export namespace EvaluationQuestion {
  export type AsObject = {
    evaluationQuestionId: number,
    evaluationId: number,
    scorecardQuestionId: number,
    skipped: boolean,
    points: number,
    answersList: Array<EvaluationQuestion.Answer.AsObject>,
    evaluationSectionId: number,
    comment: string,
    sortOrder: number,
  }

  export class Answer extends jspb.Message {
    getAnswerOption(): string;
    setAnswerOption(value: string): void;

    hasPoints(): boolean;
    clearPoints(): void;
    getPoints(): number;
    setPoints(value: number): void;

    hasFailType(): boolean;
    clearFailType(): void;
    getFailType(): FailTypeMap[keyof FailTypeMap];
    setFailType(value: FailTypeMap[keyof FailTypeMap]): void;

    getResultCase(): Answer.ResultCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Answer.AsObject;
    static toObject(includeInstance: boolean, msg: Answer): Answer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Answer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Answer;
    static deserializeBinaryFromReader(message: Answer, reader: jspb.BinaryReader): Answer;
  }

  export namespace Answer {
    export type AsObject = {
      answerOption: string,
      points: number,
      failType: FailTypeMap[keyof FailTypeMap],
    }

    export enum ResultCase {
      RESULT_NOT_SET = 0,
      POINTS = 2,
      FAIL_TYPE = 3,
    }
  }
}

export class AutoEvaluation extends jspb.Message {
  getAutoEvaluationId(): number;
  setAutoEvaluationId(value: number): void;

  getScorecardId(): number;
  setScorecardId(value: number): void;

  getCallSid(): number;
  setCallSid(value: number): void;

  getAgentUserId(): string;
  setAgentUserId(value: string): void;

  clearAutoEvaluationSectionsList(): void;
  getAutoEvaluationSectionsList(): Array<AutoEvaluationSection>;
  setAutoEvaluationSectionsList(value: Array<AutoEvaluationSection>): void;
  addAutoEvaluationSections(value?: AutoEvaluationSection, index?: number): AutoEvaluationSection;

  hasCompletedAt(): boolean;
  clearCompletedAt(): void;
  getCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDeletedAt(): boolean;
  clearDeletedAt(): void;
  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getTranscriptSid(): number;
  setTranscriptSid(value: number): void;

  getExpressionMatched(): boolean;
  setExpressionMatched(value: boolean): void;

  getRiskLevel(): RiskLevelMap[keyof RiskLevelMap];
  setRiskLevel(value: RiskLevelMap[keyof RiskLevelMap]): void;

  getCallLength(): number;
  setCallLength(value: number): void;

  hasScorecardInfo(): boolean;
  clearScorecardInfo(): void;
  getScorecardInfo(): AutoEvaluation.ScorecardInfo | undefined;
  setScorecardInfo(value?: AutoEvaluation.ScorecardInfo): void;

  hasCategoryInfo(): boolean;
  clearCategoryInfo(): void;
  getCategoryInfo(): AutoEvaluation.CategoryInfo | undefined;
  setCategoryInfo(value?: AutoEvaluation.CategoryInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AutoEvaluation.AsObject;
  static toObject(includeInstance: boolean, msg: AutoEvaluation): AutoEvaluation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AutoEvaluation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AutoEvaluation;
  static deserializeBinaryFromReader(message: AutoEvaluation, reader: jspb.BinaryReader): AutoEvaluation;
}

export namespace AutoEvaluation {
  export type AsObject = {
    autoEvaluationId: number,
    scorecardId: number,
    callSid: number,
    agentUserId: string,
    autoEvaluationSectionsList: Array<AutoEvaluationSection.AsObject>,
    completedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    transcriptSid: number,
    expressionMatched: boolean,
    riskLevel: RiskLevelMap[keyof RiskLevelMap],
    callLength: number,
    scorecardInfo?: AutoEvaluation.ScorecardInfo.AsObject,
    categoryInfo?: AutoEvaluation.CategoryInfo.AsObject,
  }

  export class ScorecardInfo extends jspb.Message {
    getTitle(): string;
    setTitle(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScorecardInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ScorecardInfo): ScorecardInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScorecardInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScorecardInfo;
    static deserializeBinaryFromReader(message: ScorecardInfo, reader: jspb.BinaryReader): ScorecardInfo;
  }

  export namespace ScorecardInfo {
    export type AsObject = {
      title: string,
    }
  }

  export class CategoryInfo extends jspb.Message {
    getTitle(): string;
    setTitle(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CategoryInfo.AsObject;
    static toObject(includeInstance: boolean, msg: CategoryInfo): CategoryInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CategoryInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CategoryInfo;
    static deserializeBinaryFromReader(message: CategoryInfo, reader: jspb.BinaryReader): CategoryInfo;
  }

  export namespace CategoryInfo {
    export type AsObject = {
      title: string,
    }
  }
}

export class AutoEvaluationQuestion extends jspb.Message {
  getAutoEvaluationQuestionId(): number;
  setAutoEvaluationQuestionId(value: number): void;

  getAutoEvaluationId(): number;
  setAutoEvaluationId(value: number): void;

  getAutoEvaluationSectionId(): number;
  setAutoEvaluationSectionId(value: number): void;

  getAutoQuestionId(): number;
  setAutoQuestionId(value: number): void;

  clearFlaggedList(): void;
  getFlaggedList(): Array<number>;
  setFlaggedList(value: Array<number>): void;
  addFlagged(value: number, index?: number): number;

  getPassed(): boolean;
  setPassed(value: boolean): void;

  getSortOrder(): number;
  setSortOrder(value: number): void;

  getRiskLevel(): RiskLevelMap[keyof RiskLevelMap];
  setRiskLevel(value: RiskLevelMap[keyof RiskLevelMap]): void;

  getExpressionMatched(): boolean;
  setExpressionMatched(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AutoEvaluationQuestion.AsObject;
  static toObject(includeInstance: boolean, msg: AutoEvaluationQuestion): AutoEvaluationQuestion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AutoEvaluationQuestion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AutoEvaluationQuestion;
  static deserializeBinaryFromReader(message: AutoEvaluationQuestion, reader: jspb.BinaryReader): AutoEvaluationQuestion;
}

export namespace AutoEvaluationQuestion {
  export type AsObject = {
    autoEvaluationQuestionId: number,
    autoEvaluationId: number,
    autoEvaluationSectionId: number,
    autoQuestionId: number,
    flaggedList: Array<number>,
    passed: boolean,
    sortOrder: number,
    riskLevel: RiskLevelMap[keyof RiskLevelMap],
    expressionMatched: boolean,
  }
}

export class AutoEvaluationSection extends jspb.Message {
  getAutoEvaluationSectionId(): number;
  setAutoEvaluationSectionId(value: number): void;

  getAutoEvaluationId(): number;
  setAutoEvaluationId(value: number): void;

  getSectionId(): number;
  setSectionId(value: number): void;

  getSortOrder(): number;
  setSortOrder(value: number): void;

  hasDeletedAt(): boolean;
  clearDeletedAt(): void;
  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearAutoEvaluationQuestionsList(): void;
  getAutoEvaluationQuestionsList(): Array<AutoEvaluationQuestion>;
  setAutoEvaluationQuestionsList(value: Array<AutoEvaluationQuestion>): void;
  addAutoEvaluationQuestions(value?: AutoEvaluationQuestion, index?: number): AutoEvaluationQuestion;

  getRiskLevel(): RiskLevelMap[keyof RiskLevelMap];
  setRiskLevel(value: RiskLevelMap[keyof RiskLevelMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AutoEvaluationSection.AsObject;
  static toObject(includeInstance: boolean, msg: AutoEvaluationSection): AutoEvaluationSection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AutoEvaluationSection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AutoEvaluationSection;
  static deserializeBinaryFromReader(message: AutoEvaluationSection, reader: jspb.BinaryReader): AutoEvaluationSection;
}

export namespace AutoEvaluationSection {
  export type AsObject = {
    autoEvaluationSectionId: number,
    autoEvaluationId: number,
    sectionId: number,
    sortOrder: number,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    autoEvaluationQuestionsList: Array<AutoEvaluationQuestion.AsObject>,
    riskLevel: RiskLevelMap[keyof RiskLevelMap],
  }
}

export class Question extends jspb.Message {
  getQuestionId(): number;
  setQuestionId(value: number): void;

  getAuthorId(): string;
  setAuthorId(value: string): void;

  getQuestion(): string;
  setQuestion(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearCategoriesList(): void;
  getCategoriesList(): Array<Category>;
  setCategoriesList(value: Array<Category>): void;
  addCategories(value?: Category, index?: number): Category;

  getFocus(): QuestionFocusMap[keyof QuestionFocusMap];
  setFocus(value: QuestionFocusMap[keyof QuestionFocusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Question.AsObject;
  static toObject(includeInstance: boolean, msg: Question): Question.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Question, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Question;
  static deserializeBinaryFromReader(message: Question, reader: jspb.BinaryReader): Question;
}

export namespace Question {
  export type AsObject = {
    questionId: number,
    authorId: string,
    question: string,
    description: string,
    categoriesList: Array<Category.AsObject>,
    focus: QuestionFocusMap[keyof QuestionFocusMap],
  }
}

export class ScorecardQuestion extends jspb.Message {
  getScorecardQuestionId(): number;
  setScorecardQuestionId(value: number): void;

  getQuestion(): string;
  setQuestion(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getQuestionId(): number;
  setQuestionId(value: number): void;

  getAllowSkip(): boolean;
  setAllowSkip(value: boolean): void;

  clearAnswersList(): void;
  getAnswersList(): Array<ScorecardQuestion.Answer>;
  setAnswersList(value: Array<ScorecardQuestion.Answer>): void;
  addAnswers(value?: ScorecardQuestion.Answer, index?: number): ScorecardQuestion.Answer;

  hasMultiSelect(): boolean;
  clearMultiSelect(): void;
  getMultiSelect(): ScorecardQuestion.MultiSelect | undefined;
  setMultiSelect(value?: ScorecardQuestion.MultiSelect): void;

  getScorecardId(): number;
  setScorecardId(value: number): void;

  getSectionId(): number;
  setSectionId(value: number): void;

  getVersion(): number;
  setVersion(value: number): void;

  getSortOrder(): number;
  setSortOrder(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardQuestion.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardQuestion): ScorecardQuestion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardQuestion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardQuestion;
  static deserializeBinaryFromReader(message: ScorecardQuestion, reader: jspb.BinaryReader): ScorecardQuestion;
}

export namespace ScorecardQuestion {
  export type AsObject = {
    scorecardQuestionId: number,
    question: string,
    description: string,
    questionId: number,
    allowSkip: boolean,
    answersList: Array<ScorecardQuestion.Answer.AsObject>,
    multiSelect?: ScorecardQuestion.MultiSelect.AsObject,
    scorecardId: number,
    sectionId: number,
    version: number,
    sortOrder: number,
  }

  export class Answer extends jspb.Message {
    getAnswerOption(): string;
    setAnswerOption(value: string): void;

    hasPoints(): boolean;
    clearPoints(): void;
    getPoints(): number;
    setPoints(value: number): void;

    hasFailType(): boolean;
    clearFailType(): void;
    getFailType(): FailTypeMap[keyof FailTypeMap];
    setFailType(value: FailTypeMap[keyof FailTypeMap]): void;

    getResultCase(): Answer.ResultCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Answer.AsObject;
    static toObject(includeInstance: boolean, msg: Answer): Answer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Answer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Answer;
    static deserializeBinaryFromReader(message: Answer, reader: jspb.BinaryReader): Answer;
  }

  export namespace Answer {
    export type AsObject = {
      answerOption: string,
      points: number,
      failType: FailTypeMap[keyof FailTypeMap],
    }

    export enum ResultCase {
      RESULT_NOT_SET = 0,
      POINTS = 2,
      FAIL_TYPE = 3,
    }
  }

  export class MultiSelect extends jspb.Message {
    getMaxPoints(): number;
    setMaxPoints(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiSelect.AsObject;
    static toObject(includeInstance: boolean, msg: MultiSelect): MultiSelect.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiSelect, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiSelect;
    static deserializeBinaryFromReader(message: MultiSelect, reader: jspb.BinaryReader): MultiSelect;
  }

  export namespace MultiSelect {
    export type AsObject = {
      maxPoints: number,
    }
  }
}

export class Section extends jspb.Message {
  getSectionId(): number;
  setSectionId(value: number): void;

  getScorecardId(): number;
  setScorecardId(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getWeight(): number;
  setWeight(value: number): void;

  clearQuestionsList(): void;
  getQuestionsList(): Array<ScorecardQuestion>;
  setQuestionsList(value: Array<ScorecardQuestion>): void;
  addQuestions(value?: ScorecardQuestion, index?: number): ScorecardQuestion;

  getVersion(): number;
  setVersion(value: number): void;

  getSortOrder(): number;
  setSortOrder(value: number): void;

  clearAutoQuestionsList(): void;
  getAutoQuestionsList(): Array<AutoQuestion>;
  setAutoQuestionsList(value: Array<AutoQuestion>): void;
  addAutoQuestions(value?: AutoQuestion, index?: number): AutoQuestion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Section.AsObject;
  static toObject(includeInstance: boolean, msg: Section): Section.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Section, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Section;
  static deserializeBinaryFromReader(message: Section, reader: jspb.BinaryReader): Section;
}

export namespace Section {
  export type AsObject = {
    sectionId: number,
    scorecardId: number,
    title: string,
    description: string,
    weight: number,
    questionsList: Array<ScorecardQuestion.AsObject>,
    version: number,
    sortOrder: number,
    autoQuestionsList: Array<AutoQuestion.AsObject>,
  }
}

export class Scorecard extends jspb.Message {
  getScorecardId(): number;
  setScorecardId(value: number): void;

  getAuthorId(): string;
  setAuthorId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getPassScore(): number;
  setPassScore(value: number): void;

  getScoreType(): ScoreTypeMap[keyof ScoreTypeMap];
  setScoreType(value: ScoreTypeMap[keyof ScoreTypeMap]): void;

  getEvaluationType(): EvaluationTypeMap[keyof EvaluationTypeMap];
  setEvaluationType(value: EvaluationTypeMap[keyof EvaluationTypeMap]): void;

  getAllowFeedback(): boolean;
  setAllowFeedback(value: boolean): void;

  getDistributeWeights(): boolean;
  setDistributeWeights(value: boolean): void;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): Category | undefined;
  setCategory(value?: Category): void;

  clearSectionsList(): void;
  getSectionsList(): Array<Section>;
  setSectionsList(value: Array<Section>): void;
  addSections(value?: Section, index?: number): Section;

  getVersion(): number;
  setVersion(value: number): void;

  getState(): ScorecardStateMap[keyof ScorecardStateMap];
  setState(value: ScorecardStateMap[keyof ScorecardStateMap]): void;

  getIsAdHoc(): boolean;
  setIsAdHoc(value: boolean): void;

  clearCustomFieldKeysList(): void;
  getCustomFieldKeysList(): Array<string>;
  setCustomFieldKeysList(value: Array<string>): void;
  addCustomFieldKeys(value: string, index?: number): string;

  clearCallTypesList(): void;
  getCallTypesList(): Array<api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]>;
  setCallTypesList(value: Array<api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]>): void;
  addCallTypes(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap], index?: number): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Scorecard.AsObject;
  static toObject(includeInstance: boolean, msg: Scorecard): Scorecard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Scorecard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Scorecard;
  static deserializeBinaryFromReader(message: Scorecard, reader: jspb.BinaryReader): Scorecard;
}

export namespace Scorecard {
  export type AsObject = {
    scorecardId: number,
    authorId: string,
    title: string,
    description: string,
    passScore: number,
    scoreType: ScoreTypeMap[keyof ScoreTypeMap],
    evaluationType: EvaluationTypeMap[keyof EvaluationTypeMap],
    allowFeedback: boolean,
    distributeWeights: boolean,
    category?: Category.AsObject,
    sectionsList: Array<Section.AsObject>,
    version: number,
    state: ScorecardStateMap[keyof ScorecardStateMap],
    isAdHoc: boolean,
    customFieldKeysList: Array<string>,
    callTypesList: Array<api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]>,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AutoQuestion extends jspb.Message {
  getAutoQuestionId(): number;
  setAutoQuestionId(value: number): void;

  getFlagSid(): number;
  setFlagSid(value: number): void;

  getScorecardId(): number;
  setScorecardId(value: number): void;

  getAutoSectionId(): number;
  setAutoSectionId(value: number): void;

  getSortOrder(): number;
  setSortOrder(value: number): void;

  hasFlagExpression(): boolean;
  clearFlagExpression(): void;
  getFlagExpression(): AutoQuestion.FlagExpr | undefined;
  setFlagExpression(value?: AutoQuestion.FlagExpr): void;

  getQuestion(): string;
  setQuestion(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getQuestionId(): number;
  setQuestionId(value: number): void;

  getRiskLevel(): RiskLevelMap[keyof RiskLevelMap];
  setRiskLevel(value: RiskLevelMap[keyof RiskLevelMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AutoQuestion.AsObject;
  static toObject(includeInstance: boolean, msg: AutoQuestion): AutoQuestion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AutoQuestion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AutoQuestion;
  static deserializeBinaryFromReader(message: AutoQuestion, reader: jspb.BinaryReader): AutoQuestion;
}

export namespace AutoQuestion {
  export type AsObject = {
    autoQuestionId: number,
    flagSid: number,
    scorecardId: number,
    autoSectionId: number,
    sortOrder: number,
    flagExpression?: AutoQuestion.FlagExpr.AsObject,
    question: string,
    description: string,
    questionId: number,
    riskLevel: RiskLevelMap[keyof RiskLevelMap],
  }

  export class FlagExpr extends jspb.Message {
    clearAndList(): void;
    getAndList(): Array<AutoQuestion.FlagExpr>;
    setAndList(value: Array<AutoQuestion.FlagExpr>): void;
    addAnd(value?: AutoQuestion.FlagExpr, index?: number): AutoQuestion.FlagExpr;

    clearOrList(): void;
    getOrList(): Array<AutoQuestion.FlagExpr>;
    setOrList(value: Array<AutoQuestion.FlagExpr>): void;
    addOr(value?: AutoQuestion.FlagExpr, index?: number): AutoQuestion.FlagExpr;

    hasFlag(): boolean;
    clearFlag(): void;
    getFlag(): AutoQuestion.FlagExpr.Flag | undefined;
    setFlag(value?: AutoQuestion.FlagExpr.Flag): void;

    hasNot(): boolean;
    clearNot(): void;
    getNot(): AutoQuestion.FlagExpr | undefined;
    setNot(value?: AutoQuestion.FlagExpr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlagExpr.AsObject;
    static toObject(includeInstance: boolean, msg: FlagExpr): FlagExpr.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlagExpr, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlagExpr;
    static deserializeBinaryFromReader(message: FlagExpr, reader: jspb.BinaryReader): FlagExpr;
  }

  export namespace FlagExpr {
    export type AsObject = {
      andList: Array<AutoQuestion.FlagExpr.AsObject>,
      orList: Array<AutoQuestion.FlagExpr.AsObject>,
      flag?: AutoQuestion.FlagExpr.Flag.AsObject,
      not?: AutoQuestion.FlagExpr.AsObject,
    }

    export class Flag extends jspb.Message {
      getFlagSid(): number;
      setFlagSid(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Flag.AsObject;
      static toObject(includeInstance: boolean, msg: Flag): Flag.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Flag, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Flag;
      static deserializeBinaryFromReader(message: Flag, reader: jspb.BinaryReader): Flag;
    }

    export namespace Flag {
      export type AsObject = {
        flagSid: number,
      }
    }
  }
}

export interface CategoryTypeMap {
  INVALID: 0;
  SKILL_CALLS: 1;
  MANUAL_DIAL: 2;
}

export const CategoryType: CategoryTypeMap;

export interface EvaluationTypeMap {
  EVALUATE_MANUAL: 0;
  EVALUATE_AUTO: 1;
  EVALUATE_SMART: 2;
}

export const EvaluationType: EvaluationTypeMap;

export interface ScoreTypeMap {
  SCORE_SIMPLE_SUM: 0;
  SCORE_WEIGHTED_SUM: 1;
  SCORE_EVEN_WEIGHTED_SUM: 2;
}

export const ScoreType: ScoreTypeMap;

export interface FailTypeMap {
  FAIL_QUESTION: 0;
  FAIL_SECTION: 1;
  FAIL_SCORECARD: 2;
}

export const FailType: FailTypeMap;

export interface QuestionFocusMap {
  QUESTION_FOCUS_UNSPECIFIED: 0;
  QUESTION_FOCUS_AGENT: 1;
  QUESTION_FOCUS_CUSTOMER: 2;
}

export const QuestionFocus: QuestionFocusMap;

export interface ScorecardStateMap {
  SCORECARD_IS_DRAFT: 0;
  SCORECARD_IS_READY: 1;
  SCORECARD_IS_IN_USE: 2;
  SCORECARD_IS_TEMPLATE: 3;
  SCORECARD_IS_READY_DISABLED: 4;
  SCORECARD_IS_IN_USE_DISABLED: 5;
}

export const ScorecardState: ScorecardStateMap;

export interface EvaluationStateMap {
  EVALUATION_IN_PROGRESS: 0;
  EVALUATION_PASSED: 1;
  EVALUATION_FAILED: 2;
}

export const EvaluationState: EvaluationStateMap;

export interface RiskLevelMap {
  RISK_LEVEL_NONE: 0;
  RISK_LEVEL_LOW: 1;
  RISK_LEVEL_MEDIUM: 2;
  RISK_LEVEL_HIGH: 3;
  RISK_LEVEL_RISK_FREE: 4;
}

export const RiskLevel: RiskLevelMap;

