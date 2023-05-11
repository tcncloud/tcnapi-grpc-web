// package: api.v1alpha1.scorecards
// file: api/v1alpha1/scorecards/question.proto

import * as jspb from "google-protobuf";
import * as api_commons_scorecards_pb from "../../../api/commons/scorecards_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class CreateQuestionRequest extends jspb.Message {
  hasQuestion(): boolean;
  clearQuestion(): void;
  getQuestion(): api_commons_scorecards_pb.Question | undefined;
  setQuestion(value?: api_commons_scorecards_pb.Question): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateQuestionRequest): CreateQuestionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateQuestionRequest;
  static deserializeBinaryFromReader(message: CreateQuestionRequest, reader: jspb.BinaryReader): CreateQuestionRequest;
}

export namespace CreateQuestionRequest {
  export type AsObject = {
    question?: api_commons_scorecards_pb.Question.AsObject,
  }
}

export class CreateQuestionResponse extends jspb.Message {
  hasQuestion(): boolean;
  clearQuestion(): void;
  getQuestion(): api_commons_scorecards_pb.Question | undefined;
  setQuestion(value?: api_commons_scorecards_pb.Question): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateQuestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateQuestionResponse): CreateQuestionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateQuestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateQuestionResponse;
  static deserializeBinaryFromReader(message: CreateQuestionResponse, reader: jspb.BinaryReader): CreateQuestionResponse;
}

export namespace CreateQuestionResponse {
  export type AsObject = {
    question?: api_commons_scorecards_pb.Question.AsObject,
  }
}

export class ListQuestionsRequest extends jspb.Message {
  clearAuthorIdsList(): void;
  getAuthorIdsList(): Array<string>;
  setAuthorIdsList(value: Array<string>): void;
  addAuthorIds(value: string, index?: number): string;

  clearCategoryIdsList(): void;
  getCategoryIdsList(): Array<number>;
  setCategoryIdsList(value: Array<number>): void;
  addCategoryIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListQuestionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListQuestionsRequest): ListQuestionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListQuestionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListQuestionsRequest;
  static deserializeBinaryFromReader(message: ListQuestionsRequest, reader: jspb.BinaryReader): ListQuestionsRequest;
}

export namespace ListQuestionsRequest {
  export type AsObject = {
    authorIdsList: Array<string>,
    categoryIdsList: Array<number>,
  }
}

export class ListQuestionsResponse extends jspb.Message {
  clearQuestionsList(): void;
  getQuestionsList(): Array<api_commons_scorecards_pb.Question>;
  setQuestionsList(value: Array<api_commons_scorecards_pb.Question>): void;
  addQuestions(value?: api_commons_scorecards_pb.Question, index?: number): api_commons_scorecards_pb.Question;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListQuestionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListQuestionsResponse): ListQuestionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListQuestionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListQuestionsResponse;
  static deserializeBinaryFromReader(message: ListQuestionsResponse, reader: jspb.BinaryReader): ListQuestionsResponse;
}

export namespace ListQuestionsResponse {
  export type AsObject = {
    questionsList: Array<api_commons_scorecards_pb.Question.AsObject>,
  }
}

export class UpdateQuestionRequest extends jspb.Message {
  hasQuestion(): boolean;
  clearQuestion(): void;
  getQuestion(): api_commons_scorecards_pb.Question | undefined;
  setQuestion(value?: api_commons_scorecards_pb.Question): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateQuestionRequest): UpdateQuestionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateQuestionRequest;
  static deserializeBinaryFromReader(message: UpdateQuestionRequest, reader: jspb.BinaryReader): UpdateQuestionRequest;
}

export namespace UpdateQuestionRequest {
  export type AsObject = {
    question?: api_commons_scorecards_pb.Question.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateQuestionResponse extends jspb.Message {
  hasQuestion(): boolean;
  clearQuestion(): void;
  getQuestion(): api_commons_scorecards_pb.Question | undefined;
  setQuestion(value?: api_commons_scorecards_pb.Question): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateQuestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateQuestionResponse): UpdateQuestionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateQuestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateQuestionResponse;
  static deserializeBinaryFromReader(message: UpdateQuestionResponse, reader: jspb.BinaryReader): UpdateQuestionResponse;
}

export namespace UpdateQuestionResponse {
  export type AsObject = {
    question?: api_commons_scorecards_pb.Question.AsObject,
  }
}

export class DeleteQuestionRequest extends jspb.Message {
  getQuestionId(): number;
  setQuestionId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteQuestionRequest): DeleteQuestionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteQuestionRequest;
  static deserializeBinaryFromReader(message: DeleteQuestionRequest, reader: jspb.BinaryReader): DeleteQuestionRequest;
}

export namespace DeleteQuestionRequest {
  export type AsObject = {
    questionId: number,
  }
}

export class DeleteQuestionResponse extends jspb.Message {
  hasQuestion(): boolean;
  clearQuestion(): void;
  getQuestion(): api_commons_scorecards_pb.Question | undefined;
  setQuestion(value?: api_commons_scorecards_pb.Question): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteQuestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteQuestionResponse): DeleteQuestionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteQuestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteQuestionResponse;
  static deserializeBinaryFromReader(message: DeleteQuestionResponse, reader: jspb.BinaryReader): DeleteQuestionResponse;
}

export namespace DeleteQuestionResponse {
  export type AsObject = {
    question?: api_commons_scorecards_pb.Question.AsObject,
  }
}

export class GetQuestionRequest extends jspb.Message {
  getQuestionId(): number;
  setQuestionId(value: number): void;

  getQuestion(): string;
  setQuestion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetQuestionRequest): GetQuestionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQuestionRequest;
  static deserializeBinaryFromReader(message: GetQuestionRequest, reader: jspb.BinaryReader): GetQuestionRequest;
}

export namespace GetQuestionRequest {
  export type AsObject = {
    questionId: number,
    question: string,
  }
}

export class GetQuestionResponse extends jspb.Message {
  hasQuestion(): boolean;
  clearQuestion(): void;
  getQuestion(): api_commons_scorecards_pb.Question | undefined;
  setQuestion(value?: api_commons_scorecards_pb.Question): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQuestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetQuestionResponse): GetQuestionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetQuestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQuestionResponse;
  static deserializeBinaryFromReader(message: GetQuestionResponse, reader: jspb.BinaryReader): GetQuestionResponse;
}

export namespace GetQuestionResponse {
  export type AsObject = {
    question?: api_commons_scorecards_pb.Question.AsObject,
  }
}

export class CreateQuestionCategoryRequest extends jspb.Message {
  getQuestionId(): number;
  setQuestionId(value: number): void;

  getCategoryId(): number;
  setCategoryId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateQuestionCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateQuestionCategoryRequest): CreateQuestionCategoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateQuestionCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateQuestionCategoryRequest;
  static deserializeBinaryFromReader(message: CreateQuestionCategoryRequest, reader: jspb.BinaryReader): CreateQuestionCategoryRequest;
}

export namespace CreateQuestionCategoryRequest {
  export type AsObject = {
    questionId: number,
    categoryId: number,
  }
}

export class CreateQuestionCategoryResponse extends jspb.Message {
  getQuestionId(): number;
  setQuestionId(value: number): void;

  getCategoryId(): number;
  setCategoryId(value: number): void;

  getQuestionCategoryId(): number;
  setQuestionCategoryId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateQuestionCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateQuestionCategoryResponse): CreateQuestionCategoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateQuestionCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateQuestionCategoryResponse;
  static deserializeBinaryFromReader(message: CreateQuestionCategoryResponse, reader: jspb.BinaryReader): CreateQuestionCategoryResponse;
}

export namespace CreateQuestionCategoryResponse {
  export type AsObject = {
    questionId: number,
    categoryId: number,
    questionCategoryId: number,
  }
}

export class DeleteQuestionCategoryRequest extends jspb.Message {
  hasQuestionCategoryId(): boolean;
  clearQuestionCategoryId(): void;
  getQuestionCategoryId(): number;
  setQuestionCategoryId(value: number): void;

  hasBothIds(): boolean;
  clearBothIds(): void;
  getBothIds(): DeleteQuestionCategoryRequest.BothIds | undefined;
  setBothIds(value?: DeleteQuestionCategoryRequest.BothIds): void;

  getWhereCase(): DeleteQuestionCategoryRequest.WhereCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteQuestionCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteQuestionCategoryRequest): DeleteQuestionCategoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteQuestionCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteQuestionCategoryRequest;
  static deserializeBinaryFromReader(message: DeleteQuestionCategoryRequest, reader: jspb.BinaryReader): DeleteQuestionCategoryRequest;
}

export namespace DeleteQuestionCategoryRequest {
  export type AsObject = {
    questionCategoryId: number,
    bothIds?: DeleteQuestionCategoryRequest.BothIds.AsObject,
  }

  export class BothIds extends jspb.Message {
    getQuestionId(): number;
    setQuestionId(value: number): void;

    getCategoryId(): number;
    setCategoryId(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BothIds.AsObject;
    static toObject(includeInstance: boolean, msg: BothIds): BothIds.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BothIds, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BothIds;
    static deserializeBinaryFromReader(message: BothIds, reader: jspb.BinaryReader): BothIds;
  }

  export namespace BothIds {
    export type AsObject = {
      questionId: number,
      categoryId: number,
    }
  }

  export enum WhereCase {
    WHERE_NOT_SET = 0,
    QUESTION_CATEGORY_ID = 2,
    BOTH_IDS = 3,
  }
}

export class DeleteQuestionCategoryResponse extends jspb.Message {
  getQuestionId(): number;
  setQuestionId(value: number): void;

  getCategoryId(): number;
  setCategoryId(value: number): void;

  getQuestionCategoryId(): number;
  setQuestionCategoryId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteQuestionCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteQuestionCategoryResponse): DeleteQuestionCategoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteQuestionCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteQuestionCategoryResponse;
  static deserializeBinaryFromReader(message: DeleteQuestionCategoryResponse, reader: jspb.BinaryReader): DeleteQuestionCategoryResponse;
}

export namespace DeleteQuestionCategoryResponse {
  export type AsObject = {
    questionId: number,
    categoryId: number,
    questionCategoryId: number,
  }
}

export class BulkCreateQuestionsRequest extends jspb.Message {
  getScorecardId(): number;
  setScorecardId(value: number): void;

  getUseDefault(): boolean;
  setUseDefault(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulkCreateQuestionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BulkCreateQuestionsRequest): BulkCreateQuestionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BulkCreateQuestionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulkCreateQuestionsRequest;
  static deserializeBinaryFromReader(message: BulkCreateQuestionsRequest, reader: jspb.BinaryReader): BulkCreateQuestionsRequest;
}

export namespace BulkCreateQuestionsRequest {
  export type AsObject = {
    scorecardId: number,
    useDefault: boolean,
  }
}

export class BulkCreateQuestionsResponse extends jspb.Message {
  clearQuestionsList(): void;
  getQuestionsList(): Array<api_commons_scorecards_pb.Question>;
  setQuestionsList(value: Array<api_commons_scorecards_pb.Question>): void;
  addQuestions(value?: api_commons_scorecards_pb.Question, index?: number): api_commons_scorecards_pb.Question;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulkCreateQuestionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BulkCreateQuestionsResponse): BulkCreateQuestionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BulkCreateQuestionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulkCreateQuestionsResponse;
  static deserializeBinaryFromReader(message: BulkCreateQuestionsResponse, reader: jspb.BinaryReader): BulkCreateQuestionsResponse;
}

export namespace BulkCreateQuestionsResponse {
  export type AsObject = {
    questionsList: Array<api_commons_scorecards_pb.Question.AsObject>,
  }
}

