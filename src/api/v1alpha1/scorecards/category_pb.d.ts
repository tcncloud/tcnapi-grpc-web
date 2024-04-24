// package: api.v1alpha1.scorecards
// file: api/v1alpha1/scorecards/category.proto

import * as jspb from "google-protobuf";
import * as api_commons_acd_pb from "../../../api/commons/acd_pb";
import * as api_commons_scorecards_pb from "../../../api/commons/scorecards_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CreateCategoryRequest extends jspb.Message {
  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): api_commons_scorecards_pb.Category | undefined;
  setCategory(value?: api_commons_scorecards_pb.Category): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCategoryRequest): CreateCategoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCategoryRequest;
  static deserializeBinaryFromReader(message: CreateCategoryRequest, reader: jspb.BinaryReader): CreateCategoryRequest;
}

export namespace CreateCategoryRequest {
  export type AsObject = {
    category?: api_commons_scorecards_pb.Category.AsObject,
  }
}

export class CreateCategoryResponse extends jspb.Message {
  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): api_commons_scorecards_pb.Category | undefined;
  setCategory(value?: api_commons_scorecards_pb.Category): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCategoryResponse): CreateCategoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCategoryResponse;
  static deserializeBinaryFromReader(message: CreateCategoryResponse, reader: jspb.BinaryReader): CreateCategoryResponse;
}

export namespace CreateCategoryResponse {
  export type AsObject = {
    category?: api_commons_scorecards_pb.Category.AsObject,
  }
}

export class ListCategoriesRequest extends jspb.Message {
  clearAuthorIdsList(): void;
  getAuthorIdsList(): Array<string>;
  setAuthorIdsList(value: Array<string>): void;
  addAuthorIds(value: string, index?: number): string;

  clearSkillProfilesList(): void;
  getSkillProfilesList(): Array<number>;
  setSkillProfilesList(value: Array<number>): void;
  addSkillProfiles(value: number, index?: number): number;

  clearCallTypesList(): void;
  getCallTypesList(): Array<api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]>;
  setCallTypesList(value: Array<api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]>): void;
  addCallTypes(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap], index?: number): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];

  getCategoryType(): ListCategoriesRequest.CategoryTypeMap[keyof ListCategoriesRequest.CategoryTypeMap];
  setCategoryType(value: ListCategoriesRequest.CategoryTypeMap[keyof ListCategoriesRequest.CategoryTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCategoriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCategoriesRequest): ListCategoriesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCategoriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCategoriesRequest;
  static deserializeBinaryFromReader(message: ListCategoriesRequest, reader: jspb.BinaryReader): ListCategoriesRequest;
}

export namespace ListCategoriesRequest {
  export type AsObject = {
    authorIdsList: Array<string>,
    skillProfilesList: Array<number>,
    callTypesList: Array<api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]>,
    categoryType: ListCategoriesRequest.CategoryTypeMap[keyof ListCategoriesRequest.CategoryTypeMap],
  }

  export interface CategoryTypeMap {
    ANY: 0;
    SYSTEM: 1;
    USER: 2;
  }

  export const CategoryType: CategoryTypeMap;
}

export class ListCategoriesResponse extends jspb.Message {
  clearCategoriesList(): void;
  getCategoriesList(): Array<api_commons_scorecards_pb.Category>;
  setCategoriesList(value: Array<api_commons_scorecards_pb.Category>): void;
  addCategories(value?: api_commons_scorecards_pb.Category, index?: number): api_commons_scorecards_pb.Category;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCategoriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCategoriesResponse): ListCategoriesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCategoriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCategoriesResponse;
  static deserializeBinaryFromReader(message: ListCategoriesResponse, reader: jspb.BinaryReader): ListCategoriesResponse;
}

export namespace ListCategoriesResponse {
  export type AsObject = {
    categoriesList: Array<api_commons_scorecards_pb.Category.AsObject>,
  }
}

export class UpdateCategoryRequest extends jspb.Message {
  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): api_commons_scorecards_pb.Category | undefined;
  setCategory(value?: api_commons_scorecards_pb.Category): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCategoryRequest): UpdateCategoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCategoryRequest;
  static deserializeBinaryFromReader(message: UpdateCategoryRequest, reader: jspb.BinaryReader): UpdateCategoryRequest;
}

export namespace UpdateCategoryRequest {
  export type AsObject = {
    category?: api_commons_scorecards_pb.Category.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateCategoryResponse extends jspb.Message {
  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): api_commons_scorecards_pb.Category | undefined;
  setCategory(value?: api_commons_scorecards_pb.Category): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCategoryResponse): UpdateCategoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCategoryResponse;
  static deserializeBinaryFromReader(message: UpdateCategoryResponse, reader: jspb.BinaryReader): UpdateCategoryResponse;
}

export namespace UpdateCategoryResponse {
  export type AsObject = {
    category?: api_commons_scorecards_pb.Category.AsObject,
  }
}

export class DeleteCategoryRequest extends jspb.Message {
  getCategoryId(): number;
  setCategoryId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCategoryRequest): DeleteCategoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCategoryRequest;
  static deserializeBinaryFromReader(message: DeleteCategoryRequest, reader: jspb.BinaryReader): DeleteCategoryRequest;
}

export namespace DeleteCategoryRequest {
  export type AsObject = {
    categoryId: number,
  }
}

export class DeleteCategoryResponse extends jspb.Message {
  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): api_commons_scorecards_pb.Category | undefined;
  setCategory(value?: api_commons_scorecards_pb.Category): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCategoryResponse): DeleteCategoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCategoryResponse;
  static deserializeBinaryFromReader(message: DeleteCategoryResponse, reader: jspb.BinaryReader): DeleteCategoryResponse;
}

export namespace DeleteCategoryResponse {
  export type AsObject = {
    category?: api_commons_scorecards_pb.Category.AsObject,
  }
}

export class GetCategoryRequest extends jspb.Message {
  getCategoryId(): number;
  setCategoryId(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCategoryRequest): GetCategoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCategoryRequest;
  static deserializeBinaryFromReader(message: GetCategoryRequest, reader: jspb.BinaryReader): GetCategoryRequest;
}

export namespace GetCategoryRequest {
  export type AsObject = {
    categoryId: number,
    title: string,
  }
}

export class GetCategoryResponse extends jspb.Message {
  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): api_commons_scorecards_pb.Category | undefined;
  setCategory(value?: api_commons_scorecards_pb.Category): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCategoryResponse): GetCategoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCategoryResponse;
  static deserializeBinaryFromReader(message: GetCategoryResponse, reader: jspb.BinaryReader): GetCategoryResponse;
}

export namespace GetCategoryResponse {
  export type AsObject = {
    category?: api_commons_scorecards_pb.Category.AsObject,
  }
}

export class SampleCallsByCategoryRequest extends jspb.Message {
  getCategoryId(): number;
  setCategoryId(value: number): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getScorerMaxEvaluations(): number;
  setScorerMaxEvaluations(value: number): void;

  getSamplePercentage(): number;
  setSamplePercentage(value: number): void;

  clearAgentUserIdsList(): void;
  getAgentUserIdsList(): Array<string>;
  setAgentUserIdsList(value: Array<string>): void;
  addAgentUserIds(value: string, index?: number): string;

  getScorecardId(): number;
  setScorecardId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SampleCallsByCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SampleCallsByCategoryRequest): SampleCallsByCategoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SampleCallsByCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SampleCallsByCategoryRequest;
  static deserializeBinaryFromReader(message: SampleCallsByCategoryRequest, reader: jspb.BinaryReader): SampleCallsByCategoryRequest;
}

export namespace SampleCallsByCategoryRequest {
  export type AsObject = {
    categoryId: number,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    scorerMaxEvaluations: number,
    samplePercentage: number,
    agentUserIdsList: Array<string>,
    scorecardId: number,
  }
}

export class SampleCallsByCategoryResponse extends jspb.Message {
  clearAgentCallsList(): void;
  getAgentCallsList(): Array<SampleAgentCall>;
  setAgentCallsList(value: Array<SampleAgentCall>): void;
  addAgentCalls(value?: SampleAgentCall, index?: number): SampleAgentCall;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SampleCallsByCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SampleCallsByCategoryResponse): SampleCallsByCategoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SampleCallsByCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SampleCallsByCategoryResponse;
  static deserializeBinaryFromReader(message: SampleCallsByCategoryResponse, reader: jspb.BinaryReader): SampleCallsByCategoryResponse;
}

export namespace SampleCallsByCategoryResponse {
  export type AsObject = {
    agentCallsList: Array<SampleAgentCall.AsObject>,
  }
}

export class SampleAgentCall extends jspb.Message {
  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  hasCallStart(): boolean;
  clearCallStart(): void;
  getCallStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCallStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCallDuration(): boolean;
  clearCallDuration(): void;
  getCallDuration(): google_protobuf_duration_pb.Duration | undefined;
  setCallDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasSpeech(): boolean;
  clearSpeech(): void;
  getSpeech(): google_protobuf_duration_pb.Duration | undefined;
  setSpeech(value?: google_protobuf_duration_pb.Duration): void;

  hasSilence(): boolean;
  clearSilence(): void;
  getSilence(): google_protobuf_duration_pb.Duration | undefined;
  setSilence(value?: google_protobuf_duration_pb.Duration): void;

  getAgentUserId(): string;
  setAgentUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SampleAgentCall.AsObject;
  static toObject(includeInstance: boolean, msg: SampleAgentCall): SampleAgentCall.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SampleAgentCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SampleAgentCall;
  static deserializeBinaryFromReader(message: SampleAgentCall, reader: jspb.BinaryReader): SampleAgentCall;
}

export namespace SampleAgentCall {
  export type AsObject = {
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    callStart?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    callDuration?: google_protobuf_duration_pb.Duration.AsObject,
    speech?: google_protobuf_duration_pb.Duration.AsObject,
    silence?: google_protobuf_duration_pb.Duration.AsObject,
    agentUserId: string,
  }
}

export class ListCategoriesByOrgIdRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  clearAuthorIdsList(): void;
  getAuthorIdsList(): Array<string>;
  setAuthorIdsList(value: Array<string>): void;
  addAuthorIds(value: string, index?: number): string;

  clearSkillProfilesList(): void;
  getSkillProfilesList(): Array<number>;
  setSkillProfilesList(value: Array<number>): void;
  addSkillProfiles(value: number, index?: number): number;

  getCategoryType(): ListCategoriesByOrgIdRequest.CategoryTypeMap[keyof ListCategoriesByOrgIdRequest.CategoryTypeMap];
  setCategoryType(value: ListCategoriesByOrgIdRequest.CategoryTypeMap[keyof ListCategoriesByOrgIdRequest.CategoryTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCategoriesByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCategoriesByOrgIdRequest): ListCategoriesByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCategoriesByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCategoriesByOrgIdRequest;
  static deserializeBinaryFromReader(message: ListCategoriesByOrgIdRequest, reader: jspb.BinaryReader): ListCategoriesByOrgIdRequest;
}

export namespace ListCategoriesByOrgIdRequest {
  export type AsObject = {
    orgId: string,
    authorIdsList: Array<string>,
    skillProfilesList: Array<number>,
    categoryType: ListCategoriesByOrgIdRequest.CategoryTypeMap[keyof ListCategoriesByOrgIdRequest.CategoryTypeMap],
  }

  export interface CategoryTypeMap {
    ANY: 0;
    SYSTEM: 1;
    USER: 2;
  }

  export const CategoryType: CategoryTypeMap;
}

