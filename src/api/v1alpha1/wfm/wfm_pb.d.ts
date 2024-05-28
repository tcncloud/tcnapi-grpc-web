// package: api.v1alpha1.wfm
// file: api/v1alpha1/wfm/wfm.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../annotations/authz_pb";
import * as api_commons_org_pb from "../../../api/commons/org_pb";
import * as api_commons_wfm_pb from "../../../api/commons/wfm_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class PerformInitialClientSetupRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PerformInitialClientSetupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PerformInitialClientSetupRequest): PerformInitialClientSetupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PerformInitialClientSetupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PerformInitialClientSetupRequest;
  static deserializeBinaryFromReader(message: PerformInitialClientSetupRequest, reader: jspb.BinaryReader): PerformInitialClientSetupRequest;
}

export namespace PerformInitialClientSetupRequest {
  export type AsObject = {
  }
}

export class PerformInitialClientSetupResponse extends jspb.Message {
  hasSetupStatus(): boolean;
  clearSetupStatus(): void;
  getSetupStatus(): api_commons_wfm_pb.InitialSetupStatus | undefined;
  setSetupStatus(value?: api_commons_wfm_pb.InitialSetupStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PerformInitialClientSetupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PerformInitialClientSetupResponse): PerformInitialClientSetupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PerformInitialClientSetupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PerformInitialClientSetupResponse;
  static deserializeBinaryFromReader(message: PerformInitialClientSetupResponse, reader: jspb.BinaryReader): PerformInitialClientSetupResponse;
}

export namespace PerformInitialClientSetupResponse {
  export type AsObject = {
    setupStatus?: api_commons_wfm_pb.InitialSetupStatus.AsObject,
  }
}

export class Skill extends jspb.Message {
  getSkillSid(): number;
  setSkillSid(value: number): void;

  getClientSkillType(): api_commons_wfm_pb.SkillType.EnumMap[keyof api_commons_wfm_pb.SkillType.EnumMap];
  setClientSkillType(value: api_commons_wfm_pb.SkillType.EnumMap[keyof api_commons_wfm_pb.SkillType.EnumMap]): void;

  getName(): string;
  setName(value: string): void;

  hasDeleteDate(): boolean;
  clearDeleteDate(): void;
  getDeleteDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeleteDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getClientSkillSid(): number;
  setClientSkillSid(value: number): void;

  getProficiency(): number;
  setProficiency(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Skill.AsObject;
  static toObject(includeInstance: boolean, msg: Skill): Skill.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Skill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Skill;
  static deserializeBinaryFromReader(message: Skill, reader: jspb.BinaryReader): Skill;
}

export namespace Skill {
  export type AsObject = {
    skillSid: number,
    clientSkillType: api_commons_wfm_pb.SkillType.EnumMap[keyof api_commons_wfm_pb.SkillType.EnumMap],
    name: string,
    deleteDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    clientSkillSid: number,
    proficiency: number,
  }
}

export class SkillProfile extends jspb.Message {
  getSkillProfileSid(): number;
  setSkillProfileSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasCreateDate(): boolean;
  clearCreateDate(): void;
  getCreateDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getUnnamed(): boolean;
  setUnnamed(value: boolean): void;

  hasInactiveAsOfDate(): boolean;
  clearInactiveAsOfDate(): void;
  getInactiveAsOfDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setInactiveAsOfDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearSkillsList(): void;
  getSkillsList(): Array<Skill>;
  setSkillsList(value: Array<Skill>): void;
  addSkills(value?: Skill, index?: number): Skill;

  getSkillsCount(): number;
  setSkillsCount(value: number): void;

  getOccurrence(): number;
  setOccurrence(value: number): void;

  getAverageSpeedOfAnswerInSeconds(): number;
  setAverageSpeedOfAnswerInSeconds(value: number): void;

  getAverageHandleTimeInSeconds(): number;
  setAverageHandleTimeInSeconds(value: number): void;

  getAverageAfterCallWorkInSeconds(): number;
  setAverageAfterCallWorkInSeconds(value: number): void;

  getAverageTimeToAbortInSeconds(): number;
  setAverageTimeToAbortInSeconds(value: number): void;

  getAreAveragesManual(): boolean;
  setAreAveragesManual(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkillProfile.AsObject;
  static toObject(includeInstance: boolean, msg: SkillProfile): SkillProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SkillProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkillProfile;
  static deserializeBinaryFromReader(message: SkillProfile, reader: jspb.BinaryReader): SkillProfile;
}

export namespace SkillProfile {
  export type AsObject = {
    skillProfileSid: number,
    name: string,
    description: string,
    createDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    unnamed: boolean,
    inactiveAsOfDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    skillsList: Array<Skill.AsObject>,
    skillsCount: number,
    occurrence: number,
    averageSpeedOfAnswerInSeconds: number,
    averageHandleTimeInSeconds: number,
    averageAfterCallWorkInSeconds: number,
    averageTimeToAbortInSeconds: number,
    areAveragesManual: boolean,
  }
}

export class SkillProfileGroup extends jspb.Message {
  getSkillProfileGroupSid(): string;
  setSkillProfileGroupSid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAverageSpeedOfAnswerInSeconds(): number;
  setAverageSpeedOfAnswerInSeconds(value: number): void;

  getAverageHandleTimeInSeconds(): number;
  setAverageHandleTimeInSeconds(value: number): void;

  getAverageAfterCallWorkInSeconds(): number;
  setAverageAfterCallWorkInSeconds(value: number): void;

  getAverageTimeToAbortInSeconds(): number;
  setAverageTimeToAbortInSeconds(value: number): void;

  getAreAveragesManual(): boolean;
  setAreAveragesManual(value: boolean): void;

  clearSkillProfileSidsList(): void;
  getSkillProfileSidsList(): Array<number>;
  setSkillProfileSidsList(value: Array<number>): void;
  addSkillProfileSids(value: number, index?: number): number;

  hasDatetimeSetToInactive(): boolean;
  clearDatetimeSetToInactive(): void;
  getDatetimeSetToInactive(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDatetimeSetToInactive(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkillProfileGroup.AsObject;
  static toObject(includeInstance: boolean, msg: SkillProfileGroup): SkillProfileGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SkillProfileGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkillProfileGroup;
  static deserializeBinaryFromReader(message: SkillProfileGroup, reader: jspb.BinaryReader): SkillProfileGroup;
}

export namespace SkillProfileGroup {
  export type AsObject = {
    skillProfileGroupSid: string,
    name: string,
    description: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    averageSpeedOfAnswerInSeconds: number,
    averageHandleTimeInSeconds: number,
    averageAfterCallWorkInSeconds: number,
    averageTimeToAbortInSeconds: number,
    areAveragesManual: boolean,
    skillProfileSidsList: Array<number>,
    datetimeSetToInactive?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListSkillProfilesReq extends jspb.Message {
  getActiveOnly(): boolean;
  setActiveOnly(value: boolean): void;

  getWithSkills(): boolean;
  setWithSkills(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSkillProfilesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSkillProfilesReq): ListSkillProfilesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSkillProfilesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSkillProfilesReq;
  static deserializeBinaryFromReader(message: ListSkillProfilesReq, reader: jspb.BinaryReader): ListSkillProfilesReq;
}

export namespace ListSkillProfilesReq {
  export type AsObject = {
    activeOnly: boolean,
    withSkills: boolean,
  }
}

export class ListSkillProfilesRes extends jspb.Message {
  clearSkillProfilesList(): void;
  getSkillProfilesList(): Array<SkillProfile>;
  setSkillProfilesList(value: Array<SkillProfile>): void;
  addSkillProfiles(value?: SkillProfile, index?: number): SkillProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSkillProfilesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSkillProfilesRes): ListSkillProfilesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSkillProfilesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSkillProfilesRes;
  static deserializeBinaryFromReader(message: ListSkillProfilesRes, reader: jspb.BinaryReader): ListSkillProfilesRes;
}

export namespace ListSkillProfilesRes {
  export type AsObject = {
    skillProfilesList: Array<SkillProfile.AsObject>,
  }
}

export class UpdateSkillProfileReq extends jspb.Message {
  getSkillProfileSid(): number;
  setSkillProfileSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getAverageSpeedOfAnswerInSeconds(): number;
  setAverageSpeedOfAnswerInSeconds(value: number): void;

  getAverageHandleTimeInSeconds(): number;
  setAverageHandleTimeInSeconds(value: number): void;

  getAverageAfterCallWorkInSeconds(): number;
  setAverageAfterCallWorkInSeconds(value: number): void;

  getAverageTimeToAbortInSeconds(): number;
  setAverageTimeToAbortInSeconds(value: number): void;

  getAreAveragesManual(): boolean;
  setAreAveragesManual(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSkillProfileReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSkillProfileReq): UpdateSkillProfileReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSkillProfileReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSkillProfileReq;
  static deserializeBinaryFromReader(message: UpdateSkillProfileReq, reader: jspb.BinaryReader): UpdateSkillProfileReq;
}

export namespace UpdateSkillProfileReq {
  export type AsObject = {
    skillProfileSid: number,
    name: string,
    description: string,
    averageSpeedOfAnswerInSeconds: number,
    averageHandleTimeInSeconds: number,
    averageAfterCallWorkInSeconds: number,
    averageTimeToAbortInSeconds: number,
    areAveragesManual: boolean,
  }
}

export class UpdateSkillProfileRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSkillProfileRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSkillProfileRes): UpdateSkillProfileRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSkillProfileRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSkillProfileRes;
  static deserializeBinaryFromReader(message: UpdateSkillProfileRes, reader: jspb.BinaryReader): UpdateSkillProfileRes;
}

export namespace UpdateSkillProfileRes {
  export type AsObject = {
  }
}

export class UpdateSkillProfileProficienciesReq extends jspb.Message {
  clearProficienciesList(): void;
  getProficienciesList(): Array<UpdateSkillProfileProficienciesReq.Proficiency>;
  setProficienciesList(value: Array<UpdateSkillProfileProficienciesReq.Proficiency>): void;
  addProficiencies(value?: UpdateSkillProfileProficienciesReq.Proficiency, index?: number): UpdateSkillProfileProficienciesReq.Proficiency;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSkillProfileProficienciesReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSkillProfileProficienciesReq): UpdateSkillProfileProficienciesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSkillProfileProficienciesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSkillProfileProficienciesReq;
  static deserializeBinaryFromReader(message: UpdateSkillProfileProficienciesReq, reader: jspb.BinaryReader): UpdateSkillProfileProficienciesReq;
}

export namespace UpdateSkillProfileProficienciesReq {
  export type AsObject = {
    proficienciesList: Array<UpdateSkillProfileProficienciesReq.Proficiency.AsObject>,
  }

  export class Proficiency extends jspb.Message {
    getSkillProfileSid(): number;
    setSkillProfileSid(value: number): void;

    getSkillSid(): number;
    setSkillSid(value: number): void;

    getProficiency(): number;
    setProficiency(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Proficiency.AsObject;
    static toObject(includeInstance: boolean, msg: Proficiency): Proficiency.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Proficiency, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Proficiency;
    static deserializeBinaryFromReader(message: Proficiency, reader: jspb.BinaryReader): Proficiency;
  }

  export namespace Proficiency {
    export type AsObject = {
      skillProfileSid: number,
      skillSid: number,
      proficiency: number,
    }
  }
}

export class UpdateSkillProfileProficienciesRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSkillProfileProficienciesRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSkillProfileProficienciesRes): UpdateSkillProfileProficienciesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSkillProfileProficienciesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSkillProfileProficienciesRes;
  static deserializeBinaryFromReader(message: UpdateSkillProfileProficienciesRes, reader: jspb.BinaryReader): UpdateSkillProfileProficienciesRes;
}

export namespace UpdateSkillProfileProficienciesRes {
  export type AsObject = {
  }
}

export class GetSkillProfileReq extends jspb.Message {
  getSkillProfileSid(): number;
  setSkillProfileSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSkillProfileReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSkillProfileReq): GetSkillProfileReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSkillProfileReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSkillProfileReq;
  static deserializeBinaryFromReader(message: GetSkillProfileReq, reader: jspb.BinaryReader): GetSkillProfileReq;
}

export namespace GetSkillProfileReq {
  export type AsObject = {
    skillProfileSid: number,
  }
}

export class GetSkillProfileRes extends jspb.Message {
  hasSkillProfile(): boolean;
  clearSkillProfile(): void;
  getSkillProfile(): SkillProfile | undefined;
  setSkillProfile(value?: SkillProfile): void;

  clearMappingsList(): void;
  getMappingsList(): Array<GetSkillProfileRes.Mapping>;
  setMappingsList(value: Array<GetSkillProfileRes.Mapping>): void;
  addMappings(value?: GetSkillProfileRes.Mapping, index?: number): GetSkillProfileRes.Mapping;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSkillProfileRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetSkillProfileRes): GetSkillProfileRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSkillProfileRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSkillProfileRes;
  static deserializeBinaryFromReader(message: GetSkillProfileRes, reader: jspb.BinaryReader): GetSkillProfileRes;
}

export namespace GetSkillProfileRes {
  export type AsObject = {
    skillProfile?: SkillProfile.AsObject,
    mappingsList: Array<GetSkillProfileRes.Mapping.AsObject>,
  }

  export class Mapping extends jspb.Message {
    getSkillProfileSid(): number;
    setSkillProfileSid(value: number): void;

    getName(): string;
    setName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Mapping.AsObject;
    static toObject(includeInstance: boolean, msg: Mapping): Mapping.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Mapping, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Mapping;
    static deserializeBinaryFromReader(message: Mapping, reader: jspb.BinaryReader): Mapping;
  }

  export namespace Mapping {
    export type AsObject = {
      skillProfileSid: number,
      name: string,
    }
  }
}

export class ResyncSkillProfilesReq extends jspb.Message {
  getFromHistoricalRangeStartDate(): boolean;
  setFromHistoricalRangeStartDate(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResyncSkillProfilesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ResyncSkillProfilesReq): ResyncSkillProfilesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResyncSkillProfilesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResyncSkillProfilesReq;
  static deserializeBinaryFromReader(message: ResyncSkillProfilesReq, reader: jspb.BinaryReader): ResyncSkillProfilesReq;
}

export namespace ResyncSkillProfilesReq {
  export type AsObject = {
    fromHistoricalRangeStartDate: boolean,
  }
}

export class ResyncSkillProfilesRes extends jspb.Message {
  clearCreatedSkillProfileSidsList(): void;
  getCreatedSkillProfileSidsList(): Array<number>;
  setCreatedSkillProfileSidsList(value: Array<number>): void;
  addCreatedSkillProfileSids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResyncSkillProfilesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ResyncSkillProfilesRes): ResyncSkillProfilesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResyncSkillProfilesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResyncSkillProfilesRes;
  static deserializeBinaryFromReader(message: ResyncSkillProfilesRes, reader: jspb.BinaryReader): ResyncSkillProfilesRes;
}

export namespace ResyncSkillProfilesRes {
  export type AsObject = {
    createdSkillProfileSidsList: Array<number>,
  }
}

export class GetLastSkillProfileResyncDateReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLastSkillProfileResyncDateReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetLastSkillProfileResyncDateReq): GetLastSkillProfileResyncDateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLastSkillProfileResyncDateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLastSkillProfileResyncDateReq;
  static deserializeBinaryFromReader(message: GetLastSkillProfileResyncDateReq, reader: jspb.BinaryReader): GetLastSkillProfileResyncDateReq;
}

export namespace GetLastSkillProfileResyncDateReq {
  export type AsObject = {
  }
}

export class GetLastSkillProfileResyncDateRes extends jspb.Message {
  hasResyncDate(): boolean;
  clearResyncDate(): void;
  getResyncDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setResyncDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLastSkillProfileResyncDateRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetLastSkillProfileResyncDateRes): GetLastSkillProfileResyncDateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLastSkillProfileResyncDateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLastSkillProfileResyncDateRes;
  static deserializeBinaryFromReader(message: GetLastSkillProfileResyncDateRes, reader: jspb.BinaryReader): GetLastSkillProfileResyncDateRes;
}

export namespace GetLastSkillProfileResyncDateRes {
  export type AsObject = {
    resyncDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpsertForecastingParametersReq extends jspb.Message {
  hasForecastingParameters(): boolean;
  clearForecastingParameters(): void;
  getForecastingParameters(): api_commons_wfm_pb.ForecastingParameters | undefined;
  setForecastingParameters(value?: api_commons_wfm_pb.ForecastingParameters): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertForecastingParametersReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertForecastingParametersReq): UpsertForecastingParametersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertForecastingParametersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertForecastingParametersReq;
  static deserializeBinaryFromReader(message: UpsertForecastingParametersReq, reader: jspb.BinaryReader): UpsertForecastingParametersReq;
}

export namespace UpsertForecastingParametersReq {
  export type AsObject = {
    forecastingParameters?: api_commons_wfm_pb.ForecastingParameters.AsObject,
  }
}

export class UpsertForecastingParametersRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertForecastingParametersRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertForecastingParametersRes): UpsertForecastingParametersRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertForecastingParametersRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertForecastingParametersRes;
  static deserializeBinaryFromReader(message: UpsertForecastingParametersRes, reader: jspb.BinaryReader): UpsertForecastingParametersRes;
}

export namespace UpsertForecastingParametersRes {
  export type AsObject = {
  }
}

export class GetForecastingParametersReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetForecastingParametersReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetForecastingParametersReq): GetForecastingParametersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetForecastingParametersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetForecastingParametersReq;
  static deserializeBinaryFromReader(message: GetForecastingParametersReq, reader: jspb.BinaryReader): GetForecastingParametersReq;
}

export namespace GetForecastingParametersReq {
  export type AsObject = {
  }
}

export class GetForecastingParametersRes extends jspb.Message {
  hasForecastingParameters(): boolean;
  clearForecastingParameters(): void;
  getForecastingParameters(): api_commons_wfm_pb.ForecastingParameters | undefined;
  setForecastingParameters(value?: api_commons_wfm_pb.ForecastingParameters): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetForecastingParametersRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetForecastingParametersRes): GetForecastingParametersRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetForecastingParametersRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetForecastingParametersRes;
  static deserializeBinaryFromReader(message: GetForecastingParametersRes, reader: jspb.BinaryReader): GetForecastingParametersRes;
}

export namespace GetForecastingParametersRes {
  export type AsObject = {
    forecastingParameters?: api_commons_wfm_pb.ForecastingParameters.AsObject,
  }
}

export class HistoricalDataInterval extends jspb.Message {
  hasStartDatetime(): boolean;
  clearStartDatetime(): void;
  getStartDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDatetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSkillProfileSid(): number;
  setSkillProfileSid(value: number): void;

  hasAverageSpeedOfAnswerInSeconds(): boolean;
  clearAverageSpeedOfAnswerInSeconds(): void;
  getAverageSpeedOfAnswerInSeconds(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setAverageSpeedOfAnswerInSeconds(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasAverageHandleTimeInSeconds(): boolean;
  clearAverageHandleTimeInSeconds(): void;
  getAverageHandleTimeInSeconds(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setAverageHandleTimeInSeconds(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasAverageAfterCallWorkInSeconds(): boolean;
  clearAverageAfterCallWorkInSeconds(): void;
  getAverageAfterCallWorkInSeconds(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setAverageAfterCallWorkInSeconds(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasAverageTimeToAbortInSeconds(): boolean;
  clearAverageTimeToAbortInSeconds(): void;
  getAverageTimeToAbortInSeconds(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setAverageTimeToAbortInSeconds(value?: google_protobuf_wrappers_pb.FloatValue): void;

  getTotalCalls(): number;
  setTotalCalls(value: number): void;

  getTotalAbandonedCalls(): number;
  setTotalAbandonedCalls(value: number): void;

  getIsDelta(): boolean;
  setIsDelta(value: boolean): void;

  hasOriginalAverageSpeedOfAnswerInSeconds(): boolean;
  clearOriginalAverageSpeedOfAnswerInSeconds(): void;
  getOriginalAverageSpeedOfAnswerInSeconds(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setOriginalAverageSpeedOfAnswerInSeconds(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasOriginalAverageHandleTimeInSeconds(): boolean;
  clearOriginalAverageHandleTimeInSeconds(): void;
  getOriginalAverageHandleTimeInSeconds(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setOriginalAverageHandleTimeInSeconds(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasOriginalAverageAfterCallWorkInSeconds(): boolean;
  clearOriginalAverageAfterCallWorkInSeconds(): void;
  getOriginalAverageAfterCallWorkInSeconds(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setOriginalAverageAfterCallWorkInSeconds(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasOriginalAverageTimeToAbortInSeconds(): boolean;
  clearOriginalAverageTimeToAbortInSeconds(): void;
  getOriginalAverageTimeToAbortInSeconds(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setOriginalAverageTimeToAbortInSeconds(value?: google_protobuf_wrappers_pb.FloatValue): void;

  getOriginalTotalCalls(): number;
  setOriginalTotalCalls(value: number): void;

  getOriginalTotalAbandonedCalls(): number;
  setOriginalTotalAbandonedCalls(value: number): void;

  hasSkillProfileCategory(): boolean;
  clearSkillProfileCategory(): void;
  getSkillProfileCategory(): api_commons_wfm_pb.SkillProfileCategory | undefined;
  setSkillProfileCategory(value?: api_commons_wfm_pb.SkillProfileCategory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistoricalDataInterval.AsObject;
  static toObject(includeInstance: boolean, msg: HistoricalDataInterval): HistoricalDataInterval.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HistoricalDataInterval, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistoricalDataInterval;
  static deserializeBinaryFromReader(message: HistoricalDataInterval, reader: jspb.BinaryReader): HistoricalDataInterval;
}

export namespace HistoricalDataInterval {
  export type AsObject = {
    startDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    skillProfileSid: number,
    averageSpeedOfAnswerInSeconds?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    averageHandleTimeInSeconds?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    averageAfterCallWorkInSeconds?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    averageTimeToAbortInSeconds?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    totalCalls: number,
    totalAbandonedCalls: number,
    isDelta: boolean,
    originalAverageSpeedOfAnswerInSeconds?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    originalAverageHandleTimeInSeconds?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    originalAverageAfterCallWorkInSeconds?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    originalAverageTimeToAbortInSeconds?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    originalTotalCalls: number,
    originalTotalAbandonedCalls: number,
    skillProfileCategory?: api_commons_wfm_pb.SkillProfileCategory.AsObject,
  }
}

export class GetClientHistoryCacheInfoReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClientHistoryCacheInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetClientHistoryCacheInfoReq): GetClientHistoryCacheInfoReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetClientHistoryCacheInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClientHistoryCacheInfoReq;
  static deserializeBinaryFromReader(message: GetClientHistoryCacheInfoReq, reader: jspb.BinaryReader): GetClientHistoryCacheInfoReq;
}

export namespace GetClientHistoryCacheInfoReq {
  export type AsObject = {
  }
}

export class GetClientHistoryCacheInfoRes extends jspb.Message {
  hasCacheInfo(): boolean;
  clearCacheInfo(): void;
  getCacheInfo(): api_commons_wfm_pb.ClientHistoryCacheInfo | undefined;
  setCacheInfo(value?: api_commons_wfm_pb.ClientHistoryCacheInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClientHistoryCacheInfoRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetClientHistoryCacheInfoRes): GetClientHistoryCacheInfoRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetClientHistoryCacheInfoRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClientHistoryCacheInfoRes;
  static deserializeBinaryFromReader(message: GetClientHistoryCacheInfoRes, reader: jspb.BinaryReader): GetClientHistoryCacheInfoRes;
}

export namespace GetClientHistoryCacheInfoRes {
  export type AsObject = {
    cacheInfo?: api_commons_wfm_pb.ClientHistoryCacheInfo.AsObject,
  }
}

export class ListHistoricalDataReq extends jspb.Message {
  getSkillProfileSid(): number;
  setSkillProfileSid(value: number): void;

  hasSkillProfileCategory(): boolean;
  clearSkillProfileCategory(): void;
  getSkillProfileCategory(): api_commons_wfm_pb.SkillProfileCategory | undefined;
  setSkillProfileCategory(value?: api_commons_wfm_pb.SkillProfileCategory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHistoricalDataReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListHistoricalDataReq): ListHistoricalDataReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListHistoricalDataReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHistoricalDataReq;
  static deserializeBinaryFromReader(message: ListHistoricalDataReq, reader: jspb.BinaryReader): ListHistoricalDataReq;
}

export namespace ListHistoricalDataReq {
  export type AsObject = {
    skillProfileSid: number,
    skillProfileCategory?: api_commons_wfm_pb.SkillProfileCategory.AsObject,
  }
}

export class ListHistoricalDataRes extends jspb.Message {
  clearHistoricalDataIntervalsList(): void;
  getHistoricalDataIntervalsList(): Array<HistoricalDataInterval>;
  setHistoricalDataIntervalsList(value: Array<HistoricalDataInterval>): void;
  addHistoricalDataIntervals(value?: HistoricalDataInterval, index?: number): HistoricalDataInterval;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHistoricalDataRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListHistoricalDataRes): ListHistoricalDataRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListHistoricalDataRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHistoricalDataRes;
  static deserializeBinaryFromReader(message: ListHistoricalDataRes, reader: jspb.BinaryReader): ListHistoricalDataRes;
}

export namespace ListHistoricalDataRes {
  export type AsObject = {
    historicalDataIntervalsList: Array<HistoricalDataInterval.AsObject>,
  }
}

export class UpsertHistoricalDataDeltaReq extends jspb.Message {
  hasDelta(): boolean;
  clearDelta(): void;
  getDelta(): HistoricalDataInterval | undefined;
  setDelta(value?: HistoricalDataInterval): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertHistoricalDataDeltaReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertHistoricalDataDeltaReq): UpsertHistoricalDataDeltaReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertHistoricalDataDeltaReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertHistoricalDataDeltaReq;
  static deserializeBinaryFromReader(message: UpsertHistoricalDataDeltaReq, reader: jspb.BinaryReader): UpsertHistoricalDataDeltaReq;
}

export namespace UpsertHistoricalDataDeltaReq {
  export type AsObject = {
    delta?: HistoricalDataInterval.AsObject,
  }
}

export class UpsertHistoricalDataDeltaRes extends jspb.Message {
  hasDelta(): boolean;
  clearDelta(): void;
  getDelta(): HistoricalDataInterval | undefined;
  setDelta(value?: HistoricalDataInterval): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertHistoricalDataDeltaRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertHistoricalDataDeltaRes): UpsertHistoricalDataDeltaRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertHistoricalDataDeltaRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertHistoricalDataDeltaRes;
  static deserializeBinaryFromReader(message: UpsertHistoricalDataDeltaRes, reader: jspb.BinaryReader): UpsertHistoricalDataDeltaRes;
}

export namespace UpsertHistoricalDataDeltaRes {
  export type AsObject = {
    delta?: HistoricalDataInterval.AsObject,
  }
}

export class UpsertHistoricalDataDeltasReq extends jspb.Message {
  clearDeltasList(): void;
  getDeltasList(): Array<HistoricalDataInterval>;
  setDeltasList(value: Array<HistoricalDataInterval>): void;
  addDeltas(value?: HistoricalDataInterval, index?: number): HistoricalDataInterval;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertHistoricalDataDeltasReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertHistoricalDataDeltasReq): UpsertHistoricalDataDeltasReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertHistoricalDataDeltasReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertHistoricalDataDeltasReq;
  static deserializeBinaryFromReader(message: UpsertHistoricalDataDeltasReq, reader: jspb.BinaryReader): UpsertHistoricalDataDeltasReq;
}

export namespace UpsertHistoricalDataDeltasReq {
  export type AsObject = {
    deltasList: Array<HistoricalDataInterval.AsObject>,
  }
}

export class UpsertHistoricalDataDeltasRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertHistoricalDataDeltasRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertHistoricalDataDeltasRes): UpsertHistoricalDataDeltasRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertHistoricalDataDeltasRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertHistoricalDataDeltasRes;
  static deserializeBinaryFromReader(message: UpsertHistoricalDataDeltasRes, reader: jspb.BinaryReader): UpsertHistoricalDataDeltasRes;
}

export namespace UpsertHistoricalDataDeltasRes {
  export type AsObject = {
  }
}

export class ListSkillsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSkillsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSkillsReq): ListSkillsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSkillsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSkillsReq;
  static deserializeBinaryFromReader(message: ListSkillsReq, reader: jspb.BinaryReader): ListSkillsReq;
}

export namespace ListSkillsReq {
  export type AsObject = {
  }
}

export class ListSkillsRes extends jspb.Message {
  clearSkillsList(): void;
  getSkillsList(): Array<Skill>;
  setSkillsList(value: Array<Skill>): void;
  addSkills(value?: Skill, index?: number): Skill;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSkillsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSkillsRes): ListSkillsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSkillsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSkillsRes;
  static deserializeBinaryFromReader(message: ListSkillsRes, reader: jspb.BinaryReader): ListSkillsRes;
}

export namespace ListSkillsRes {
  export type AsObject = {
    skillsList: Array<Skill.AsObject>,
  }
}

export class CallProfileTemplate extends jspb.Message {
  getCallProfileTemplateSid(): number;
  setCallProfileTemplateSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasTotalCallsProfile(): boolean;
  clearTotalCallsProfile(): void;
  getTotalCallsProfile(): api_commons_wfm_pb.CallProfileGroupCalls | undefined;
  setTotalCallsProfile(value?: api_commons_wfm_pb.CallProfileGroupCalls): void;

  hasTotalAbandonedCallsProfile(): boolean;
  clearTotalAbandonedCallsProfile(): void;
  getTotalAbandonedCallsProfile(): api_commons_wfm_pb.CallProfileGroupCalls | undefined;
  setTotalAbandonedCallsProfile(value?: api_commons_wfm_pb.CallProfileGroupCalls): void;

  hasAverageSpeedOfAnswerProfile(): boolean;
  clearAverageSpeedOfAnswerProfile(): void;
  getAverageSpeedOfAnswerProfile(): api_commons_wfm_pb.CallProfileGroupAvgs | undefined;
  setAverageSpeedOfAnswerProfile(value?: api_commons_wfm_pb.CallProfileGroupAvgs): void;

  hasAverageHandleTimeProfile(): boolean;
  clearAverageHandleTimeProfile(): void;
  getAverageHandleTimeProfile(): api_commons_wfm_pb.CallProfileGroupAvgs | undefined;
  setAverageHandleTimeProfile(value?: api_commons_wfm_pb.CallProfileGroupAvgs): void;

  hasAverageAfterCallWorkProfile(): boolean;
  clearAverageAfterCallWorkProfile(): void;
  getAverageAfterCallWorkProfile(): api_commons_wfm_pb.CallProfileGroupAvgs | undefined;
  setAverageAfterCallWorkProfile(value?: api_commons_wfm_pb.CallProfileGroupAvgs): void;

  hasAverageTimeToAbortProfile(): boolean;
  clearAverageTimeToAbortProfile(): void;
  getAverageTimeToAbortProfile(): api_commons_wfm_pb.CallProfileGroupAvgs | undefined;
  setAverageTimeToAbortProfile(value?: api_commons_wfm_pb.CallProfileGroupAvgs): void;

  getFixedAverageSpeedOfAnswer(): number;
  setFixedAverageSpeedOfAnswer(value: number): void;

  getFixedAverageHandleTime(): number;
  setFixedAverageHandleTime(value: number): void;

  getFixedAverageAfterCallWork(): number;
  setFixedAverageAfterCallWork(value: number): void;

  getFixedAverageTimeToAbort(): number;
  setFixedAverageTimeToAbort(value: number): void;

  getDefaultToFixedAveragesForecast(): boolean;
  setDefaultToFixedAveragesForecast(value: boolean): void;

  getTimeZone(): string;
  setTimeZone(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallProfileTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: CallProfileTemplate): CallProfileTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallProfileTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallProfileTemplate;
  static deserializeBinaryFromReader(message: CallProfileTemplate, reader: jspb.BinaryReader): CallProfileTemplate;
}

export namespace CallProfileTemplate {
  export type AsObject = {
    callProfileTemplateSid: number,
    name: string,
    totalCallsProfile?: api_commons_wfm_pb.CallProfileGroupCalls.AsObject,
    totalAbandonedCallsProfile?: api_commons_wfm_pb.CallProfileGroupCalls.AsObject,
    averageSpeedOfAnswerProfile?: api_commons_wfm_pb.CallProfileGroupAvgs.AsObject,
    averageHandleTimeProfile?: api_commons_wfm_pb.CallProfileGroupAvgs.AsObject,
    averageAfterCallWorkProfile?: api_commons_wfm_pb.CallProfileGroupAvgs.AsObject,
    averageTimeToAbortProfile?: api_commons_wfm_pb.CallProfileGroupAvgs.AsObject,
    fixedAverageSpeedOfAnswer: number,
    fixedAverageHandleTime: number,
    fixedAverageAfterCallWork: number,
    fixedAverageTimeToAbort: number,
    defaultToFixedAveragesForecast: boolean,
    timeZone: string,
  }
}

export class BuildCallProfileTemplateForSkillProfileReq extends jspb.Message {
  getSkillProfileSid(): number;
  setSkillProfileSid(value: number): void;

  getTimeZone(): string;
  setTimeZone(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildCallProfileTemplateForSkillProfileReq.AsObject;
  static toObject(includeInstance: boolean, msg: BuildCallProfileTemplateForSkillProfileReq): BuildCallProfileTemplateForSkillProfileReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildCallProfileTemplateForSkillProfileReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildCallProfileTemplateForSkillProfileReq;
  static deserializeBinaryFromReader(message: BuildCallProfileTemplateForSkillProfileReq, reader: jspb.BinaryReader): BuildCallProfileTemplateForSkillProfileReq;
}

export namespace BuildCallProfileTemplateForSkillProfileReq {
  export type AsObject = {
    skillProfileSid: number,
    timeZone: string,
  }
}

export class BuildCallProfileTemplateForSkillProfileRes extends jspb.Message {
  hasCallProfileTemplate(): boolean;
  clearCallProfileTemplate(): void;
  getCallProfileTemplate(): CallProfileTemplate | undefined;
  setCallProfileTemplate(value?: CallProfileTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildCallProfileTemplateForSkillProfileRes.AsObject;
  static toObject(includeInstance: boolean, msg: BuildCallProfileTemplateForSkillProfileRes): BuildCallProfileTemplateForSkillProfileRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildCallProfileTemplateForSkillProfileRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildCallProfileTemplateForSkillProfileRes;
  static deserializeBinaryFromReader(message: BuildCallProfileTemplateForSkillProfileRes, reader: jspb.BinaryReader): BuildCallProfileTemplateForSkillProfileRes;
}

export namespace BuildCallProfileTemplateForSkillProfileRes {
  export type AsObject = {
    callProfileTemplate?: CallProfileTemplate.AsObject,
  }
}

export class BuildCallProfileTemplateReq extends jspb.Message {
  hasSkillProfileCategory(): boolean;
  clearSkillProfileCategory(): void;
  getSkillProfileCategory(): api_commons_wfm_pb.SkillProfileCategory | undefined;
  setSkillProfileCategory(value?: api_commons_wfm_pb.SkillProfileCategory): void;

  getTimeZone(): string;
  setTimeZone(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildCallProfileTemplateReq.AsObject;
  static toObject(includeInstance: boolean, msg: BuildCallProfileTemplateReq): BuildCallProfileTemplateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildCallProfileTemplateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildCallProfileTemplateReq;
  static deserializeBinaryFromReader(message: BuildCallProfileTemplateReq, reader: jspb.BinaryReader): BuildCallProfileTemplateReq;
}

export namespace BuildCallProfileTemplateReq {
  export type AsObject = {
    skillProfileCategory?: api_commons_wfm_pb.SkillProfileCategory.AsObject,
    timeZone: string,
  }
}

export class BuildCallProfileTemplateRes extends jspb.Message {
  hasCallProfileTemplate(): boolean;
  clearCallProfileTemplate(): void;
  getCallProfileTemplate(): CallProfileTemplate | undefined;
  setCallProfileTemplate(value?: CallProfileTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildCallProfileTemplateRes.AsObject;
  static toObject(includeInstance: boolean, msg: BuildCallProfileTemplateRes): BuildCallProfileTemplateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildCallProfileTemplateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildCallProfileTemplateRes;
  static deserializeBinaryFromReader(message: BuildCallProfileTemplateRes, reader: jspb.BinaryReader): BuildCallProfileTemplateRes;
}

export namespace BuildCallProfileTemplateRes {
  export type AsObject = {
    callProfileTemplate?: CallProfileTemplate.AsObject,
  }
}

export class CreateInactiveSkillProfileMappingReq extends jspb.Message {
  getInactiveSkillProfileSid(): number;
  setInactiveSkillProfileSid(value: number): void;

  getActiveSkillProfileSid(): number;
  setActiveSkillProfileSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInactiveSkillProfileMappingReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInactiveSkillProfileMappingReq): CreateInactiveSkillProfileMappingReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateInactiveSkillProfileMappingReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInactiveSkillProfileMappingReq;
  static deserializeBinaryFromReader(message: CreateInactiveSkillProfileMappingReq, reader: jspb.BinaryReader): CreateInactiveSkillProfileMappingReq;
}

export namespace CreateInactiveSkillProfileMappingReq {
  export type AsObject = {
    inactiveSkillProfileSid: number,
    activeSkillProfileSid: number,
  }
}

export class CreateInactiveSkillProfileMappingRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInactiveSkillProfileMappingRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInactiveSkillProfileMappingRes): CreateInactiveSkillProfileMappingRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateInactiveSkillProfileMappingRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInactiveSkillProfileMappingRes;
  static deserializeBinaryFromReader(message: CreateInactiveSkillProfileMappingRes, reader: jspb.BinaryReader): CreateInactiveSkillProfileMappingRes;
}

export namespace CreateInactiveSkillProfileMappingRes {
  export type AsObject = {
  }
}

export class GetAvailableRegressionForecasterModelTypesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAvailableRegressionForecasterModelTypesReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAvailableRegressionForecasterModelTypesReq): GetAvailableRegressionForecasterModelTypesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAvailableRegressionForecasterModelTypesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAvailableRegressionForecasterModelTypesReq;
  static deserializeBinaryFromReader(message: GetAvailableRegressionForecasterModelTypesReq, reader: jspb.BinaryReader): GetAvailableRegressionForecasterModelTypesReq;
}

export namespace GetAvailableRegressionForecasterModelTypesReq {
  export type AsObject = {
  }
}

export class GetAvailableRegressionForecasterModelTypesRes extends jspb.Message {
  clearModelTypesList(): void;
  getModelTypesList(): Array<api_commons_wfm_pb.RegressionForecasterModelTypesMap[keyof api_commons_wfm_pb.RegressionForecasterModelTypesMap]>;
  setModelTypesList(value: Array<api_commons_wfm_pb.RegressionForecasterModelTypesMap[keyof api_commons_wfm_pb.RegressionForecasterModelTypesMap]>): void;
  addModelTypes(value: api_commons_wfm_pb.RegressionForecasterModelTypesMap[keyof api_commons_wfm_pb.RegressionForecasterModelTypesMap], index?: number): api_commons_wfm_pb.RegressionForecasterModelTypesMap[keyof api_commons_wfm_pb.RegressionForecasterModelTypesMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAvailableRegressionForecasterModelTypesRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetAvailableRegressionForecasterModelTypesRes): GetAvailableRegressionForecasterModelTypesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAvailableRegressionForecasterModelTypesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAvailableRegressionForecasterModelTypesRes;
  static deserializeBinaryFromReader(message: GetAvailableRegressionForecasterModelTypesRes, reader: jspb.BinaryReader): GetAvailableRegressionForecasterModelTypesRes;
}

export namespace GetAvailableRegressionForecasterModelTypesRes {
  export type AsObject = {
    modelTypesList: Array<api_commons_wfm_pb.RegressionForecasterModelTypesMap[keyof api_commons_wfm_pb.RegressionForecasterModelTypesMap]>,
  }
}

export class DisconnectInactiveSkillProfileMappingReq extends jspb.Message {
  getInactiveSkillProfileSid(): number;
  setInactiveSkillProfileSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectInactiveSkillProfileMappingReq.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectInactiveSkillProfileMappingReq): DisconnectInactiveSkillProfileMappingReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisconnectInactiveSkillProfileMappingReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectInactiveSkillProfileMappingReq;
  static deserializeBinaryFromReader(message: DisconnectInactiveSkillProfileMappingReq, reader: jspb.BinaryReader): DisconnectInactiveSkillProfileMappingReq;
}

export namespace DisconnectInactiveSkillProfileMappingReq {
  export type AsObject = {
    inactiveSkillProfileSid: number,
  }
}

export class DisconnectInactiveSkillProfileMappingRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectInactiveSkillProfileMappingRes.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectInactiveSkillProfileMappingRes): DisconnectInactiveSkillProfileMappingRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisconnectInactiveSkillProfileMappingRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectInactiveSkillProfileMappingRes;
  static deserializeBinaryFromReader(message: DisconnectInactiveSkillProfileMappingRes, reader: jspb.BinaryReader): DisconnectInactiveSkillProfileMappingRes;
}

export namespace DisconnectInactiveSkillProfileMappingRes {
  export type AsObject = {
  }
}

export class CreateSkillProfileGroupReq extends jspb.Message {
  hasSkillProfileGroup(): boolean;
  clearSkillProfileGroup(): void;
  getSkillProfileGroup(): SkillProfileGroup | undefined;
  setSkillProfileGroup(value?: SkillProfileGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSkillProfileGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSkillProfileGroupReq): CreateSkillProfileGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSkillProfileGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSkillProfileGroupReq;
  static deserializeBinaryFromReader(message: CreateSkillProfileGroupReq, reader: jspb.BinaryReader): CreateSkillProfileGroupReq;
}

export namespace CreateSkillProfileGroupReq {
  export type AsObject = {
    skillProfileGroup?: SkillProfileGroup.AsObject,
  }
}

export class CreateSkillProfileGroupRes extends jspb.Message {
  getSkillProfileGroupSid(): string;
  setSkillProfileGroupSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSkillProfileGroupRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSkillProfileGroupRes): CreateSkillProfileGroupRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSkillProfileGroupRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSkillProfileGroupRes;
  static deserializeBinaryFromReader(message: CreateSkillProfileGroupRes, reader: jspb.BinaryReader): CreateSkillProfileGroupRes;
}

export namespace CreateSkillProfileGroupRes {
  export type AsObject = {
    skillProfileGroupSid: string,
  }
}

export class UpdateSkillProfileGroupReq extends jspb.Message {
  hasSkillProfileGroup(): boolean;
  clearSkillProfileGroup(): void;
  getSkillProfileGroup(): SkillProfileGroup | undefined;
  setSkillProfileGroup(value?: SkillProfileGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSkillProfileGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSkillProfileGroupReq): UpdateSkillProfileGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSkillProfileGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSkillProfileGroupReq;
  static deserializeBinaryFromReader(message: UpdateSkillProfileGroupReq, reader: jspb.BinaryReader): UpdateSkillProfileGroupReq;
}

export namespace UpdateSkillProfileGroupReq {
  export type AsObject = {
    skillProfileGroup?: SkillProfileGroup.AsObject,
  }
}

export class UpdateSkillProfileGroupRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSkillProfileGroupRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSkillProfileGroupRes): UpdateSkillProfileGroupRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSkillProfileGroupRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSkillProfileGroupRes;
  static deserializeBinaryFromReader(message: UpdateSkillProfileGroupRes, reader: jspb.BinaryReader): UpdateSkillProfileGroupRes;
}

export namespace UpdateSkillProfileGroupRes {
  export type AsObject = {
  }
}

export class ListSkillProfileGroupsReq extends jspb.Message {
  clearSkillProfileGroupSidsList(): void;
  getSkillProfileGroupSidsList(): Array<string>;
  setSkillProfileGroupSidsList(value: Array<string>): void;
  addSkillProfileGroupSids(value: string, index?: number): string;

  getIncludeInactive(): boolean;
  setIncludeInactive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSkillProfileGroupsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSkillProfileGroupsReq): ListSkillProfileGroupsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSkillProfileGroupsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSkillProfileGroupsReq;
  static deserializeBinaryFromReader(message: ListSkillProfileGroupsReq, reader: jspb.BinaryReader): ListSkillProfileGroupsReq;
}

export namespace ListSkillProfileGroupsReq {
  export type AsObject = {
    skillProfileGroupSidsList: Array<string>,
    includeInactive: boolean,
  }
}

export class ListSkillProfileGroupsRes extends jspb.Message {
  clearSkillProfileGroupsList(): void;
  getSkillProfileGroupsList(): Array<SkillProfileGroup>;
  setSkillProfileGroupsList(value: Array<SkillProfileGroup>): void;
  addSkillProfileGroups(value?: SkillProfileGroup, index?: number): SkillProfileGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSkillProfileGroupsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSkillProfileGroupsRes): ListSkillProfileGroupsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSkillProfileGroupsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSkillProfileGroupsRes;
  static deserializeBinaryFromReader(message: ListSkillProfileGroupsRes, reader: jspb.BinaryReader): ListSkillProfileGroupsRes;
}

export namespace ListSkillProfileGroupsRes {
  export type AsObject = {
    skillProfileGroupsList: Array<SkillProfileGroup.AsObject>,
  }
}

export class UpdateSkillProfileGroupAssociationsReq extends jspb.Message {
  getSkillProfileGroupSid(): string;
  setSkillProfileGroupSid(value: string): void;

  clearSkillProfileSidsToAssociateList(): void;
  getSkillProfileSidsToAssociateList(): Array<number>;
  setSkillProfileSidsToAssociateList(value: Array<number>): void;
  addSkillProfileSidsToAssociate(value: number, index?: number): number;

  clearSkillProfileSidsToDisassociateList(): void;
  getSkillProfileSidsToDisassociateList(): Array<number>;
  setSkillProfileSidsToDisassociateList(value: Array<number>): void;
  addSkillProfileSidsToDisassociate(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSkillProfileGroupAssociationsReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSkillProfileGroupAssociationsReq): UpdateSkillProfileGroupAssociationsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSkillProfileGroupAssociationsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSkillProfileGroupAssociationsReq;
  static deserializeBinaryFromReader(message: UpdateSkillProfileGroupAssociationsReq, reader: jspb.BinaryReader): UpdateSkillProfileGroupAssociationsReq;
}

export namespace UpdateSkillProfileGroupAssociationsReq {
  export type AsObject = {
    skillProfileGroupSid: string,
    skillProfileSidsToAssociateList: Array<number>,
    skillProfileSidsToDisassociateList: Array<number>,
  }
}

export class UpdateSkillProfileGroupAssociationsRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSkillProfileGroupAssociationsRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSkillProfileGroupAssociationsRes): UpdateSkillProfileGroupAssociationsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSkillProfileGroupAssociationsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSkillProfileGroupAssociationsRes;
  static deserializeBinaryFromReader(message: UpdateSkillProfileGroupAssociationsRes, reader: jspb.BinaryReader): UpdateSkillProfileGroupAssociationsRes;
}

export namespace UpdateSkillProfileGroupAssociationsRes {
  export type AsObject = {
  }
}

export class DeleteHistoricalDataDeltasReq extends jspb.Message {
  getSkillProfileSid(): number;
  setSkillProfileSid(value: number): void;

  clearStartDatetimesList(): void;
  getStartDatetimesList(): Array<google_protobuf_timestamp_pb.Timestamp>;
  setStartDatetimesList(value: Array<google_protobuf_timestamp_pb.Timestamp>): void;
  addStartDatetimes(value?: google_protobuf_timestamp_pb.Timestamp, index?: number): google_protobuf_timestamp_pb.Timestamp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteHistoricalDataDeltasReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteHistoricalDataDeltasReq): DeleteHistoricalDataDeltasReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteHistoricalDataDeltasReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteHistoricalDataDeltasReq;
  static deserializeBinaryFromReader(message: DeleteHistoricalDataDeltasReq, reader: jspb.BinaryReader): DeleteHistoricalDataDeltasReq;
}

export namespace DeleteHistoricalDataDeltasReq {
  export type AsObject = {
    skillProfileSid: number,
    startDatetimesList: Array<google_protobuf_timestamp_pb.Timestamp.AsObject>,
  }
}

export class DeleteHistoricalDataDeltasRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteHistoricalDataDeltasRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteHistoricalDataDeltasRes): DeleteHistoricalDataDeltasRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteHistoricalDataDeltasRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteHistoricalDataDeltasRes;
  static deserializeBinaryFromReader(message: DeleteHistoricalDataDeltasRes, reader: jspb.BinaryReader): DeleteHistoricalDataDeltasRes;
}

export namespace DeleteHistoricalDataDeltasRes {
  export type AsObject = {
  }
}

export class ListTopSkillProfilesReq extends jspb.Message {
  getMaxNumberOfProfiles(): number;
  setMaxNumberOfProfiles(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopSkillProfilesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopSkillProfilesReq): ListTopSkillProfilesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTopSkillProfilesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopSkillProfilesReq;
  static deserializeBinaryFromReader(message: ListTopSkillProfilesReq, reader: jspb.BinaryReader): ListTopSkillProfilesReq;
}

export namespace ListTopSkillProfilesReq {
  export type AsObject = {
    maxNumberOfProfiles: number,
  }
}

export class ListTopSkillProfilesRes extends jspb.Message {
  clearSkillProfilesList(): void;
  getSkillProfilesList(): Array<SkillProfile>;
  setSkillProfilesList(value: Array<SkillProfile>): void;
  addSkillProfiles(value?: SkillProfile, index?: number): SkillProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopSkillProfilesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopSkillProfilesRes): ListTopSkillProfilesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTopSkillProfilesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopSkillProfilesRes;
  static deserializeBinaryFromReader(message: ListTopSkillProfilesRes, reader: jspb.BinaryReader): ListTopSkillProfilesRes;
}

export namespace ListTopSkillProfilesRes {
  export type AsObject = {
    skillProfilesList: Array<SkillProfile.AsObject>,
  }
}

export class GetSkillProfilesCountReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSkillProfilesCountReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSkillProfilesCountReq): GetSkillProfilesCountReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSkillProfilesCountReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSkillProfilesCountReq;
  static deserializeBinaryFromReader(message: GetSkillProfilesCountReq, reader: jspb.BinaryReader): GetSkillProfilesCountReq;
}

export namespace GetSkillProfilesCountReq {
  export type AsObject = {
  }
}

export class GetSkillProfilesCountRes extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSkillProfilesCountRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetSkillProfilesCountRes): GetSkillProfilesCountRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSkillProfilesCountRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSkillProfilesCountRes;
  static deserializeBinaryFromReader(message: GetSkillProfilesCountRes, reader: jspb.BinaryReader): GetSkillProfilesCountRes;
}

export namespace GetSkillProfilesCountRes {
  export type AsObject = {
    count: number,
  }
}

export class BuildProfileForecastByIntervalReq extends jspb.Message {
  hasCallProfileTemplate(): boolean;
  clearCallProfileTemplate(): void;
  getCallProfileTemplate(): CallProfileTemplate | undefined;
  setCallProfileTemplate(value?: CallProfileTemplate): void;

  getFixedAveragesForecast(): boolean;
  setFixedAveragesForecast(value: boolean): void;

  getSkillProfileSid(): number;
  setSkillProfileSid(value: number): void;

  hasSkillProfileCategory(): boolean;
  clearSkillProfileCategory(): void;
  getSkillProfileCategory(): api_commons_wfm_pb.SkillProfileCategory | undefined;
  setSkillProfileCategory(value?: api_commons_wfm_pb.SkillProfileCategory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildProfileForecastByIntervalReq.AsObject;
  static toObject(includeInstance: boolean, msg: BuildProfileForecastByIntervalReq): BuildProfileForecastByIntervalReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildProfileForecastByIntervalReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildProfileForecastByIntervalReq;
  static deserializeBinaryFromReader(message: BuildProfileForecastByIntervalReq, reader: jspb.BinaryReader): BuildProfileForecastByIntervalReq;
}

export namespace BuildProfileForecastByIntervalReq {
  export type AsObject = {
    callProfileTemplate?: CallProfileTemplate.AsObject,
    fixedAveragesForecast: boolean,
    skillProfileSid: number,
    skillProfileCategory?: api_commons_wfm_pb.SkillProfileCategory.AsObject,
  }
}

export class CallDataByInterval extends jspb.Message {
  hasStartDatetime(): boolean;
  clearStartDatetime(): void;
  getStartDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDatetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSkillProfileSid(): number;
  setSkillProfileSid(value: number): void;

  getTotalCalls(): number;
  setTotalCalls(value: number): void;

  getAverageSpeedOfAnswerInSeconds(): number;
  setAverageSpeedOfAnswerInSeconds(value: number): void;

  getAverageHandleTimeInSeconds(): number;
  setAverageHandleTimeInSeconds(value: number): void;

  getAverageAfterCallWorkInSeconds(): number;
  setAverageAfterCallWorkInSeconds(value: number): void;

  getAverageTimeToAbortInSeconds(): number;
  setAverageTimeToAbortInSeconds(value: number): void;

  getTotalAbandonedCalls(): number;
  setTotalAbandonedCalls(value: number): void;

  getIsDelta(): boolean;
  setIsDelta(value: boolean): void;

  getForecastDataIntervalSid(): number;
  setForecastDataIntervalSid(value: number): void;

  getIntervalWidthInMinutes(): number;
  setIntervalWidthInMinutes(value: number): void;

  hasSkillProfileCategory(): boolean;
  clearSkillProfileCategory(): void;
  getSkillProfileCategory(): api_commons_wfm_pb.SkillProfileCategory | undefined;
  setSkillProfileCategory(value?: api_commons_wfm_pb.SkillProfileCategory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallDataByInterval.AsObject;
  static toObject(includeInstance: boolean, msg: CallDataByInterval): CallDataByInterval.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallDataByInterval, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallDataByInterval;
  static deserializeBinaryFromReader(message: CallDataByInterval, reader: jspb.BinaryReader): CallDataByInterval;
}

export namespace CallDataByInterval {
  export type AsObject = {
    startDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    skillProfileSid: number,
    totalCalls: number,
    averageSpeedOfAnswerInSeconds: number,
    averageHandleTimeInSeconds: number,
    averageAfterCallWorkInSeconds: number,
    averageTimeToAbortInSeconds: number,
    totalAbandonedCalls: number,
    isDelta: boolean,
    forecastDataIntervalSid: number,
    intervalWidthInMinutes: number,
    skillProfileCategory?: api_commons_wfm_pb.SkillProfileCategory.AsObject,
  }
}

export class BuildProfileForecastByIntervalWithStatsReq extends jspb.Message {
  hasCallProfileTemplate(): boolean;
  clearCallProfileTemplate(): void;
  getCallProfileTemplate(): CallProfileTemplate | undefined;
  setCallProfileTemplate(value?: CallProfileTemplate): void;

  getFixedAveragesForecast(): boolean;
  setFixedAveragesForecast(value: boolean): void;

  getSkillProfileSid(): number;
  setSkillProfileSid(value: number): void;

  hasSkillProfileCategory(): boolean;
  clearSkillProfileCategory(): void;
  getSkillProfileCategory(): api_commons_wfm_pb.SkillProfileCategory | undefined;
  setSkillProfileCategory(value?: api_commons_wfm_pb.SkillProfileCategory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildProfileForecastByIntervalWithStatsReq.AsObject;
  static toObject(includeInstance: boolean, msg: BuildProfileForecastByIntervalWithStatsReq): BuildProfileForecastByIntervalWithStatsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildProfileForecastByIntervalWithStatsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildProfileForecastByIntervalWithStatsReq;
  static deserializeBinaryFromReader(message: BuildProfileForecastByIntervalWithStatsReq, reader: jspb.BinaryReader): BuildProfileForecastByIntervalWithStatsReq;
}

export namespace BuildProfileForecastByIntervalWithStatsReq {
  export type AsObject = {
    callProfileTemplate?: CallProfileTemplate.AsObject,
    fixedAveragesForecast: boolean,
    skillProfileSid: number,
    skillProfileCategory?: api_commons_wfm_pb.SkillProfileCategory.AsObject,
  }
}

export class BuildProfileForecastByIntervalWithStatsRes extends jspb.Message {
  hasCallData(): boolean;
  clearCallData(): void;
  getCallData(): CallDataByInterval | undefined;
  setCallData(value?: CallDataByInterval): void;

  hasForecastStats(): boolean;
  clearForecastStats(): void;
  getForecastStats(): GetForecastStatisticsRes | undefined;
  setForecastStats(value?: GetForecastStatisticsRes): void;

  getResultOneofCase(): BuildProfileForecastByIntervalWithStatsRes.ResultOneofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildProfileForecastByIntervalWithStatsRes.AsObject;
  static toObject(includeInstance: boolean, msg: BuildProfileForecastByIntervalWithStatsRes): BuildProfileForecastByIntervalWithStatsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildProfileForecastByIntervalWithStatsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildProfileForecastByIntervalWithStatsRes;
  static deserializeBinaryFromReader(message: BuildProfileForecastByIntervalWithStatsRes, reader: jspb.BinaryReader): BuildProfileForecastByIntervalWithStatsRes;
}

export namespace BuildProfileForecastByIntervalWithStatsRes {
  export type AsObject = {
    callData?: CallDataByInterval.AsObject,
    forecastStats?: GetForecastStatisticsRes.AsObject,
  }

  export enum ResultOneofCase {
    RESULT_ONEOF_NOT_SET = 0,
    CALL_DATA = 1,
    FORECAST_STATS = 2,
  }
}

export class UpsertProfileForecastReq extends jspb.Message {
  getSkillProfileSid(): number;
  setSkillProfileSid(value: number): void;

  hasCallProfileTemplate(): boolean;
  clearCallProfileTemplate(): void;
  getCallProfileTemplate(): CallProfileTemplate | undefined;
  setCallProfileTemplate(value?: CallProfileTemplate): void;

  getFixedAveragesForecast(): boolean;
  setFixedAveragesForecast(value: boolean): void;

  hasSkillProfileCategory(): boolean;
  clearSkillProfileCategory(): void;
  getSkillProfileCategory(): api_commons_wfm_pb.SkillProfileCategory | undefined;
  setSkillProfileCategory(value?: api_commons_wfm_pb.SkillProfileCategory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertProfileForecastReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertProfileForecastReq): UpsertProfileForecastReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertProfileForecastReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertProfileForecastReq;
  static deserializeBinaryFromReader(message: UpsertProfileForecastReq, reader: jspb.BinaryReader): UpsertProfileForecastReq;
}

export namespace UpsertProfileForecastReq {
  export type AsObject = {
    skillProfileSid: number,
    callProfileTemplate?: CallProfileTemplate.AsObject,
    fixedAveragesForecast: boolean,
    skillProfileCategory?: api_commons_wfm_pb.SkillProfileCategory.AsObject,
  }
}

export class UpsertProfileForecastRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertProfileForecastRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertProfileForecastRes): UpsertProfileForecastRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertProfileForecastRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertProfileForecastRes;
  static deserializeBinaryFromReader(message: UpsertProfileForecastRes, reader: jspb.BinaryReader): UpsertProfileForecastRes;
}

export namespace UpsertProfileForecastRes {
  export type AsObject = {
  }
}

export class CreateCallProfileTemplateReq extends jspb.Message {
  hasCallProfileTemplate(): boolean;
  clearCallProfileTemplate(): void;
  getCallProfileTemplate(): CallProfileTemplate | undefined;
  setCallProfileTemplate(value?: CallProfileTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCallProfileTemplateReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCallProfileTemplateReq): CreateCallProfileTemplateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCallProfileTemplateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCallProfileTemplateReq;
  static deserializeBinaryFromReader(message: CreateCallProfileTemplateReq, reader: jspb.BinaryReader): CreateCallProfileTemplateReq;
}

export namespace CreateCallProfileTemplateReq {
  export type AsObject = {
    callProfileTemplate?: CallProfileTemplate.AsObject,
  }
}

export class CreateCallProfileTemplateRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCallProfileTemplateRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCallProfileTemplateRes): CreateCallProfileTemplateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCallProfileTemplateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCallProfileTemplateRes;
  static deserializeBinaryFromReader(message: CreateCallProfileTemplateRes, reader: jspb.BinaryReader): CreateCallProfileTemplateRes;
}

export namespace CreateCallProfileTemplateRes {
  export type AsObject = {
  }
}

export class DeleteCallProfileTemplateReq extends jspb.Message {
  getCallProfileTemplateSid(): number;
  setCallProfileTemplateSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCallProfileTemplateReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCallProfileTemplateReq): DeleteCallProfileTemplateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCallProfileTemplateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCallProfileTemplateReq;
  static deserializeBinaryFromReader(message: DeleteCallProfileTemplateReq, reader: jspb.BinaryReader): DeleteCallProfileTemplateReq;
}

export namespace DeleteCallProfileTemplateReq {
  export type AsObject = {
    callProfileTemplateSid: number,
  }
}

export class DeleteCallProfileTemplateRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCallProfileTemplateRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCallProfileTemplateRes): DeleteCallProfileTemplateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCallProfileTemplateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCallProfileTemplateRes;
  static deserializeBinaryFromReader(message: DeleteCallProfileTemplateRes, reader: jspb.BinaryReader): DeleteCallProfileTemplateRes;
}

export namespace DeleteCallProfileTemplateRes {
  export type AsObject = {
  }
}

export class RegressionTemplate extends jspb.Message {
  getRegressionTemplateSid(): number;
  setRegressionTemplateSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getModelType(): api_commons_wfm_pb.RegressionForecasterModelTypesMap[keyof api_commons_wfm_pb.RegressionForecasterModelTypesMap];
  setModelType(value: api_commons_wfm_pb.RegressionForecasterModelTypesMap[keyof api_commons_wfm_pb.RegressionForecasterModelTypesMap]): void;

  getExcludeCallDataForNWeeks(): number;
  setExcludeCallDataForNWeeks(value: number): void;

  getNumWeeksAgoToEmphasize(): number;
  setNumWeeksAgoToEmphasize(value: number): void;

  getMaxDeviation(): number;
  setMaxDeviation(value: number): void;

  getTrendSensitivity(): number;
  setTrendSensitivity(value: number): void;

  getExcludeIntervalsWithNoCalls(): boolean;
  setExcludeIntervalsWithNoCalls(value: boolean): void;

  getAvgsProcessingType(): api_commons_wfm_pb.RegressionForecasterAvgsProcessingTypeMap[keyof api_commons_wfm_pb.RegressionForecasterAvgsProcessingTypeMap];
  setAvgsProcessingType(value: api_commons_wfm_pb.RegressionForecasterAvgsProcessingTypeMap[keyof api_commons_wfm_pb.RegressionForecasterAvgsProcessingTypeMap]): void;

  getIncludeSeasonality(): boolean;
  setIncludeSeasonality(value: boolean): void;

  getIncludeTrend(): boolean;
  setIncludeTrend(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegressionTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: RegressionTemplate): RegressionTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegressionTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegressionTemplate;
  static deserializeBinaryFromReader(message: RegressionTemplate, reader: jspb.BinaryReader): RegressionTemplate;
}

export namespace RegressionTemplate {
  export type AsObject = {
    regressionTemplateSid: number,
    name: string,
    modelType: api_commons_wfm_pb.RegressionForecasterModelTypesMap[keyof api_commons_wfm_pb.RegressionForecasterModelTypesMap],
    excludeCallDataForNWeeks: number,
    numWeeksAgoToEmphasize: number,
    maxDeviation: number,
    trendSensitivity: number,
    excludeIntervalsWithNoCalls: boolean,
    avgsProcessingType: api_commons_wfm_pb.RegressionForecasterAvgsProcessingTypeMap[keyof api_commons_wfm_pb.RegressionForecasterAvgsProcessingTypeMap],
    includeSeasonality: boolean,
    includeTrend: boolean,
  }
}

export class CreateRegressionTemplateReq extends jspb.Message {
  hasRegressionTemplate(): boolean;
  clearRegressionTemplate(): void;
  getRegressionTemplate(): RegressionTemplate | undefined;
  setRegressionTemplate(value?: RegressionTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRegressionTemplateReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRegressionTemplateReq): CreateRegressionTemplateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRegressionTemplateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRegressionTemplateReq;
  static deserializeBinaryFromReader(message: CreateRegressionTemplateReq, reader: jspb.BinaryReader): CreateRegressionTemplateReq;
}

export namespace CreateRegressionTemplateReq {
  export type AsObject = {
    regressionTemplate?: RegressionTemplate.AsObject,
  }
}

export class CreateRegressionTemplateRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRegressionTemplateRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRegressionTemplateRes): CreateRegressionTemplateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRegressionTemplateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRegressionTemplateRes;
  static deserializeBinaryFromReader(message: CreateRegressionTemplateRes, reader: jspb.BinaryReader): CreateRegressionTemplateRes;
}

export namespace CreateRegressionTemplateRes {
  export type AsObject = {
  }
}

export class DeleteRegressionTemplateReq extends jspb.Message {
  getRegressionTemplateSid(): number;
  setRegressionTemplateSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRegressionTemplateReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRegressionTemplateReq): DeleteRegressionTemplateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRegressionTemplateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRegressionTemplateReq;
  static deserializeBinaryFromReader(message: DeleteRegressionTemplateReq, reader: jspb.BinaryReader): DeleteRegressionTemplateReq;
}

export namespace DeleteRegressionTemplateReq {
  export type AsObject = {
    regressionTemplateSid: number,
  }
}

export class DeleteRegressionTemplateRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRegressionTemplateRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRegressionTemplateRes): DeleteRegressionTemplateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRegressionTemplateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRegressionTemplateRes;
  static deserializeBinaryFromReader(message: DeleteRegressionTemplateRes, reader: jspb.BinaryReader): DeleteRegressionTemplateRes;
}

export namespace DeleteRegressionTemplateRes {
  export type AsObject = {
  }
}

export class ListRegressionTemplatesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRegressionTemplatesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListRegressionTemplatesReq): ListRegressionTemplatesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRegressionTemplatesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRegressionTemplatesReq;
  static deserializeBinaryFromReader(message: ListRegressionTemplatesReq, reader: jspb.BinaryReader): ListRegressionTemplatesReq;
}

export namespace ListRegressionTemplatesReq {
  export type AsObject = {
  }
}

export class ListRegressionTemplatesRes extends jspb.Message {
  clearRegressionTemplatesList(): void;
  getRegressionTemplatesList(): Array<RegressionTemplate>;
  setRegressionTemplatesList(value: Array<RegressionTemplate>): void;
  addRegressionTemplates(value?: RegressionTemplate, index?: number): RegressionTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRegressionTemplatesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListRegressionTemplatesRes): ListRegressionTemplatesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRegressionTemplatesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRegressionTemplatesRes;
  static deserializeBinaryFromReader(message: ListRegressionTemplatesRes, reader: jspb.BinaryReader): ListRegressionTemplatesRes;
}

export namespace ListRegressionTemplatesRes {
  export type AsObject = {
    regressionTemplatesList: Array<RegressionTemplate.AsObject>,
  }
}

export class BuildRegressionForecastByIntervalReq extends jspb.Message {
  getAverageSpeedOfAnswerInSeconds(): number;
  setAverageSpeedOfAnswerInSeconds(value: number): void;

  getAverageHandleTimeInSeconds(): number;
  setAverageHandleTimeInSeconds(value: number): void;

  getAverageAfterCallWorkInSeconds(): number;
  setAverageAfterCallWorkInSeconds(value: number): void;

  getAverageTimeToAbortInSeconds(): number;
  setAverageTimeToAbortInSeconds(value: number): void;

  hasRegressionTemplate(): boolean;
  clearRegressionTemplate(): void;
  getRegressionTemplate(): RegressionTemplate | undefined;
  setRegressionTemplate(value?: RegressionTemplate): void;

  clearSkillProfileSidsToForecastList(): void;
  getSkillProfileSidsToForecastList(): Array<number>;
  setSkillProfileSidsToForecastList(value: Array<number>): void;
  addSkillProfileSidsToForecast(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildRegressionForecastByIntervalReq.AsObject;
  static toObject(includeInstance: boolean, msg: BuildRegressionForecastByIntervalReq): BuildRegressionForecastByIntervalReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildRegressionForecastByIntervalReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildRegressionForecastByIntervalReq;
  static deserializeBinaryFromReader(message: BuildRegressionForecastByIntervalReq, reader: jspb.BinaryReader): BuildRegressionForecastByIntervalReq;
}

export namespace BuildRegressionForecastByIntervalReq {
  export type AsObject = {
    averageSpeedOfAnswerInSeconds: number,
    averageHandleTimeInSeconds: number,
    averageAfterCallWorkInSeconds: number,
    averageTimeToAbortInSeconds: number,
    regressionTemplate?: RegressionTemplate.AsObject,
    skillProfileSidsToForecastList: Array<number>,
  }
}

export class BuildRegressionForecastByIntervalWithStatsReq extends jspb.Message {
  getAverageSpeedOfAnswerInSeconds(): number;
  setAverageSpeedOfAnswerInSeconds(value: number): void;

  getAverageHandleTimeInSeconds(): number;
  setAverageHandleTimeInSeconds(value: number): void;

  getAverageAfterCallWorkInSeconds(): number;
  setAverageAfterCallWorkInSeconds(value: number): void;

  getAverageTimeToAbortInSeconds(): number;
  setAverageTimeToAbortInSeconds(value: number): void;

  hasRegressionTemplate(): boolean;
  clearRegressionTemplate(): void;
  getRegressionTemplate(): RegressionTemplate | undefined;
  setRegressionTemplate(value?: RegressionTemplate): void;

  clearSkillProfileSidsToForecastList(): void;
  getSkillProfileSidsToForecastList(): Array<number>;
  setSkillProfileSidsToForecastList(value: Array<number>): void;
  addSkillProfileSidsToForecast(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildRegressionForecastByIntervalWithStatsReq.AsObject;
  static toObject(includeInstance: boolean, msg: BuildRegressionForecastByIntervalWithStatsReq): BuildRegressionForecastByIntervalWithStatsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildRegressionForecastByIntervalWithStatsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildRegressionForecastByIntervalWithStatsReq;
  static deserializeBinaryFromReader(message: BuildRegressionForecastByIntervalWithStatsReq, reader: jspb.BinaryReader): BuildRegressionForecastByIntervalWithStatsReq;
}

export namespace BuildRegressionForecastByIntervalWithStatsReq {
  export type AsObject = {
    averageSpeedOfAnswerInSeconds: number,
    averageHandleTimeInSeconds: number,
    averageAfterCallWorkInSeconds: number,
    averageTimeToAbortInSeconds: number,
    regressionTemplate?: RegressionTemplate.AsObject,
    skillProfileSidsToForecastList: Array<number>,
  }
}

export class GetForecastStatisticsRes extends jspb.Message {
  getNumIntervalsMeasured(): number;
  setNumIntervalsMeasured(value: number): void;

  getTotalCallsHistorical(): number;
  setTotalCallsHistorical(value: number): void;

  getTotalCallsPredicted(): number;
  setTotalCallsPredicted(value: number): void;

  getPercentCallsOverUnder(): number;
  setPercentCallsOverUnder(value: number): void;

  getRmsErrorCalls(): number;
  setRmsErrorCalls(value: number): void;

  getRmsErrorAtab(): number;
  setRmsErrorAtab(value: number): void;

  getRmsErrorAsa(): number;
  setRmsErrorAsa(value: number): void;

  getRmsErrorAcw(): number;
  setRmsErrorAcw(value: number): void;

  getRmsErrorAht(): number;
  setRmsErrorAht(value: number): void;

  getAreStatsInvalid(): boolean;
  setAreStatsInvalid(value: boolean): void;

  getInvalidReason(): string;
  setInvalidReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetForecastStatisticsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetForecastStatisticsRes): GetForecastStatisticsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetForecastStatisticsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetForecastStatisticsRes;
  static deserializeBinaryFromReader(message: GetForecastStatisticsRes, reader: jspb.BinaryReader): GetForecastStatisticsRes;
}

export namespace GetForecastStatisticsRes {
  export type AsObject = {
    numIntervalsMeasured: number,
    totalCallsHistorical: number,
    totalCallsPredicted: number,
    percentCallsOverUnder: number,
    rmsErrorCalls: number,
    rmsErrorAtab: number,
    rmsErrorAsa: number,
    rmsErrorAcw: number,
    rmsErrorAht: number,
    areStatsInvalid: boolean,
    invalidReason: string,
  }
}

export class BuildRegressionForecastByIntervalWithStatsRes extends jspb.Message {
  hasCallData(): boolean;
  clearCallData(): void;
  getCallData(): CallDataByInterval | undefined;
  setCallData(value?: CallDataByInterval): void;

  hasForecastStats(): boolean;
  clearForecastStats(): void;
  getForecastStats(): GetForecastStatisticsRes | undefined;
  setForecastStats(value?: GetForecastStatisticsRes): void;

  getResultOneofCase(): BuildRegressionForecastByIntervalWithStatsRes.ResultOneofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildRegressionForecastByIntervalWithStatsRes.AsObject;
  static toObject(includeInstance: boolean, msg: BuildRegressionForecastByIntervalWithStatsRes): BuildRegressionForecastByIntervalWithStatsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildRegressionForecastByIntervalWithStatsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildRegressionForecastByIntervalWithStatsRes;
  static deserializeBinaryFromReader(message: BuildRegressionForecastByIntervalWithStatsRes, reader: jspb.BinaryReader): BuildRegressionForecastByIntervalWithStatsRes;
}

export namespace BuildRegressionForecastByIntervalWithStatsRes {
  export type AsObject = {
    callData?: CallDataByInterval.AsObject,
    forecastStats?: GetForecastStatisticsRes.AsObject,
  }

  export enum ResultOneofCase {
    RESULT_ONEOF_NOT_SET = 0,
    CALL_DATA = 1,
    FORECAST_STATS = 2,
  }
}

export class ListCallProfileTemplatesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCallProfileTemplatesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListCallProfileTemplatesReq): ListCallProfileTemplatesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCallProfileTemplatesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCallProfileTemplatesReq;
  static deserializeBinaryFromReader(message: ListCallProfileTemplatesReq, reader: jspb.BinaryReader): ListCallProfileTemplatesReq;
}

export namespace ListCallProfileTemplatesReq {
  export type AsObject = {
  }
}

export class ListCallProfileTemplatesRes extends jspb.Message {
  clearCallProfileTemplatesList(): void;
  getCallProfileTemplatesList(): Array<CallProfileTemplate>;
  setCallProfileTemplatesList(value: Array<CallProfileTemplate>): void;
  addCallProfileTemplates(value?: CallProfileTemplate, index?: number): CallProfileTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCallProfileTemplatesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListCallProfileTemplatesRes): ListCallProfileTemplatesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCallProfileTemplatesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCallProfileTemplatesRes;
  static deserializeBinaryFromReader(message: ListCallProfileTemplatesRes, reader: jspb.BinaryReader): ListCallProfileTemplatesRes;
}

export namespace ListCallProfileTemplatesRes {
  export type AsObject = {
    callProfileTemplatesList: Array<CallProfileTemplate.AsObject>,
  }
}

export class ListForecastIntervalsForSkillProfileReq extends jspb.Message {
  getSkillProfileSid(): number;
  setSkillProfileSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListForecastIntervalsForSkillProfileReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListForecastIntervalsForSkillProfileReq): ListForecastIntervalsForSkillProfileReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListForecastIntervalsForSkillProfileReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListForecastIntervalsForSkillProfileReq;
  static deserializeBinaryFromReader(message: ListForecastIntervalsForSkillProfileReq, reader: jspb.BinaryReader): ListForecastIntervalsForSkillProfileReq;
}

export namespace ListForecastIntervalsForSkillProfileReq {
  export type AsObject = {
    skillProfileSid: number,
  }
}

export class ListForecastIntervalsReq extends jspb.Message {
  hasSkillProfileCategory(): boolean;
  clearSkillProfileCategory(): void;
  getSkillProfileCategory(): api_commons_wfm_pb.SkillProfileCategory | undefined;
  setSkillProfileCategory(value?: api_commons_wfm_pb.SkillProfileCategory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListForecastIntervalsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListForecastIntervalsReq): ListForecastIntervalsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListForecastIntervalsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListForecastIntervalsReq;
  static deserializeBinaryFromReader(message: ListForecastIntervalsReq, reader: jspb.BinaryReader): ListForecastIntervalsReq;
}

export namespace ListForecastIntervalsReq {
  export type AsObject = {
    skillProfileCategory?: api_commons_wfm_pb.SkillProfileCategory.AsObject,
  }
}

export class UpsertRegressionForecastReq extends jspb.Message {
  hasRegressionTemplate(): boolean;
  clearRegressionTemplate(): void;
  getRegressionTemplate(): RegressionTemplate | undefined;
  setRegressionTemplate(value?: RegressionTemplate): void;

  getAverageSpeedOfAnswerInSeconds(): number;
  setAverageSpeedOfAnswerInSeconds(value: number): void;

  getAverageHandleTimeInSeconds(): number;
  setAverageHandleTimeInSeconds(value: number): void;

  getAverageAfterCallWorkInSeconds(): number;
  setAverageAfterCallWorkInSeconds(value: number): void;

  getAverageTimeToAbortInSeconds(): number;
  setAverageTimeToAbortInSeconds(value: number): void;

  clearSkillProfileSidsToForecastList(): void;
  getSkillProfileSidsToForecastList(): Array<number>;
  setSkillProfileSidsToForecastList(value: Array<number>): void;
  addSkillProfileSidsToForecast(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertRegressionForecastReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertRegressionForecastReq): UpsertRegressionForecastReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertRegressionForecastReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertRegressionForecastReq;
  static deserializeBinaryFromReader(message: UpsertRegressionForecastReq, reader: jspb.BinaryReader): UpsertRegressionForecastReq;
}

export namespace UpsertRegressionForecastReq {
  export type AsObject = {
    regressionTemplate?: RegressionTemplate.AsObject,
    averageSpeedOfAnswerInSeconds: number,
    averageHandleTimeInSeconds: number,
    averageAfterCallWorkInSeconds: number,
    averageTimeToAbortInSeconds: number,
    skillProfileSidsToForecastList: Array<number>,
  }
}

export class UpsertRegressionForecastRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertRegressionForecastRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertRegressionForecastRes): UpsertRegressionForecastRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertRegressionForecastRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertRegressionForecastRes;
  static deserializeBinaryFromReader(message: UpsertRegressionForecastRes, reader: jspb.BinaryReader): UpsertRegressionForecastRes;
}

export namespace UpsertRegressionForecastRes {
  export type AsObject = {
  }
}

export class UpsertForecastDataDeltaReq extends jspb.Message {
  hasDelta(): boolean;
  clearDelta(): void;
  getDelta(): CallDataByInterval | undefined;
  setDelta(value?: CallDataByInterval): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertForecastDataDeltaReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertForecastDataDeltaReq): UpsertForecastDataDeltaReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertForecastDataDeltaReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertForecastDataDeltaReq;
  static deserializeBinaryFromReader(message: UpsertForecastDataDeltaReq, reader: jspb.BinaryReader): UpsertForecastDataDeltaReq;
}

export namespace UpsertForecastDataDeltaReq {
  export type AsObject = {
    delta?: CallDataByInterval.AsObject,
  }
}

export class UpsertForecastDataDeltaRes extends jspb.Message {
  hasDelta(): boolean;
  clearDelta(): void;
  getDelta(): CallDataByInterval | undefined;
  setDelta(value?: CallDataByInterval): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertForecastDataDeltaRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertForecastDataDeltaRes): UpsertForecastDataDeltaRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertForecastDataDeltaRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertForecastDataDeltaRes;
  static deserializeBinaryFromReader(message: UpsertForecastDataDeltaRes, reader: jspb.BinaryReader): UpsertForecastDataDeltaRes;
}

export namespace UpsertForecastDataDeltaRes {
  export type AsObject = {
    delta?: CallDataByInterval.AsObject,
  }
}

export class UpsertForecastDataDeltasReq extends jspb.Message {
  clearDeltasList(): void;
  getDeltasList(): Array<CallDataByInterval>;
  setDeltasList(value: Array<CallDataByInterval>): void;
  addDeltas(value?: CallDataByInterval, index?: number): CallDataByInterval;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertForecastDataDeltasReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertForecastDataDeltasReq): UpsertForecastDataDeltasReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertForecastDataDeltasReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertForecastDataDeltasReq;
  static deserializeBinaryFromReader(message: UpsertForecastDataDeltasReq, reader: jspb.BinaryReader): UpsertForecastDataDeltasReq;
}

export namespace UpsertForecastDataDeltasReq {
  export type AsObject = {
    deltasList: Array<CallDataByInterval.AsObject>,
  }
}

export class UpsertForecastDataDeltasRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertForecastDataDeltasRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertForecastDataDeltasRes): UpsertForecastDataDeltasRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertForecastDataDeltasRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertForecastDataDeltasRes;
  static deserializeBinaryFromReader(message: UpsertForecastDataDeltasRes, reader: jspb.BinaryReader): UpsertForecastDataDeltasRes;
}

export namespace UpsertForecastDataDeltasRes {
  export type AsObject = {
  }
}

export class DeleteForecastIntervalsReq extends jspb.Message {
  hasSkillProfileSid(): boolean;
  clearSkillProfileSid(): void;
  getSkillProfileSid(): number;
  setSkillProfileSid(value: number): void;

  hasForecastIntervalSids(): boolean;
  clearForecastIntervalSids(): void;
  getForecastIntervalSids(): DeleteForecastIntervalsReq.IntervalSids | undefined;
  setForecastIntervalSids(value?: DeleteForecastIntervalsReq.IntervalSids): void;

  hasSkillProfileCategory(): boolean;
  clearSkillProfileCategory(): void;
  getSkillProfileCategory(): api_commons_wfm_pb.SkillProfileCategory | undefined;
  setSkillProfileCategory(value?: api_commons_wfm_pb.SkillProfileCategory): void;

  getForecastIntervalDeleteType(): DeleteForecastIntervalsReq.ForecastIntervalDeleteTypeMap[keyof DeleteForecastIntervalsReq.ForecastIntervalDeleteTypeMap];
  setForecastIntervalDeleteType(value: DeleteForecastIntervalsReq.ForecastIntervalDeleteTypeMap[keyof DeleteForecastIntervalsReq.ForecastIntervalDeleteTypeMap]): void;

  getDeleteParamCase(): DeleteForecastIntervalsReq.DeleteParamCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteForecastIntervalsReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteForecastIntervalsReq): DeleteForecastIntervalsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteForecastIntervalsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteForecastIntervalsReq;
  static deserializeBinaryFromReader(message: DeleteForecastIntervalsReq, reader: jspb.BinaryReader): DeleteForecastIntervalsReq;
}

export namespace DeleteForecastIntervalsReq {
  export type AsObject = {
    skillProfileSid: number,
    forecastIntervalSids?: DeleteForecastIntervalsReq.IntervalSids.AsObject,
    skillProfileCategory?: api_commons_wfm_pb.SkillProfileCategory.AsObject,
    forecastIntervalDeleteType: DeleteForecastIntervalsReq.ForecastIntervalDeleteTypeMap[keyof DeleteForecastIntervalsReq.ForecastIntervalDeleteTypeMap],
  }

  export class IntervalSids extends jspb.Message {
    clearSidsList(): void;
    getSidsList(): Array<number>;
    setSidsList(value: Array<number>): void;
    addSids(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IntervalSids.AsObject;
    static toObject(includeInstance: boolean, msg: IntervalSids): IntervalSids.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IntervalSids, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IntervalSids;
    static deserializeBinaryFromReader(message: IntervalSids, reader: jspb.BinaryReader): IntervalSids;
  }

  export namespace IntervalSids {
    export type AsObject = {
      sidsList: Array<number>,
    }
  }

  export interface ForecastIntervalDeleteTypeMap {
    INTERVALS_AND_DELTAS: 0;
    DELTAS: 1;
  }

  export const ForecastIntervalDeleteType: ForecastIntervalDeleteTypeMap;

  export enum DeleteParamCase {
    DELETE_PARAM_NOT_SET = 0,
    SKILL_PROFILE_SID = 1,
    FORECAST_INTERVAL_SIDS = 2,
    SKILL_PROFILE_CATEGORY = 4,
  }
}

export class DeleteForecastIntervalsRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteForecastIntervalsRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteForecastIntervalsRes): DeleteForecastIntervalsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteForecastIntervalsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteForecastIntervalsRes;
  static deserializeBinaryFromReader(message: DeleteForecastIntervalsRes, reader: jspb.BinaryReader): DeleteForecastIntervalsRes;
}

export namespace DeleteForecastIntervalsRes {
  export type AsObject = {
  }
}

export class ListHistoricalDataForAllSkillProfilesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHistoricalDataForAllSkillProfilesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListHistoricalDataForAllSkillProfilesReq): ListHistoricalDataForAllSkillProfilesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListHistoricalDataForAllSkillProfilesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHistoricalDataForAllSkillProfilesReq;
  static deserializeBinaryFromReader(message: ListHistoricalDataForAllSkillProfilesReq, reader: jspb.BinaryReader): ListHistoricalDataForAllSkillProfilesReq;
}

export namespace ListHistoricalDataForAllSkillProfilesReq {
  export type AsObject = {
  }
}

export class ListHistoricalDataForAllSkillProfilesRes extends jspb.Message {
  clearHistoryList(): void;
  getHistoryList(): Array<HistoricalDataInterval>;
  setHistoryList(value: Array<HistoricalDataInterval>): void;
  addHistory(value?: HistoricalDataInterval, index?: number): HistoricalDataInterval;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHistoricalDataForAllSkillProfilesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListHistoricalDataForAllSkillProfilesRes): ListHistoricalDataForAllSkillProfilesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListHistoricalDataForAllSkillProfilesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHistoricalDataForAllSkillProfilesRes;
  static deserializeBinaryFromReader(message: ListHistoricalDataForAllSkillProfilesRes, reader: jspb.BinaryReader): ListHistoricalDataForAllSkillProfilesRes;
}

export namespace ListHistoricalDataForAllSkillProfilesRes {
  export type AsObject = {
    historyList: Array<HistoricalDataInterval.AsObject>,
  }
}

export class BuildDOWAndMOYProfilesReq extends jspb.Message {
  hasProfileTod(): boolean;
  clearProfileTod(): void;
  getProfileTod(): api_commons_wfm_pb.ProfileTOD | undefined;
  setProfileTod(value?: api_commons_wfm_pb.ProfileTOD): void;

  hasProfileWoms(): boolean;
  clearProfileWoms(): void;
  getProfileWoms(): api_commons_wfm_pb.ProfileWOMS | undefined;
  setProfileWoms(value?: api_commons_wfm_pb.ProfileWOMS): void;

  getIsAverageProfile(): boolean;
  setIsAverageProfile(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildDOWAndMOYProfilesReq.AsObject;
  static toObject(includeInstance: boolean, msg: BuildDOWAndMOYProfilesReq): BuildDOWAndMOYProfilesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildDOWAndMOYProfilesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildDOWAndMOYProfilesReq;
  static deserializeBinaryFromReader(message: BuildDOWAndMOYProfilesReq, reader: jspb.BinaryReader): BuildDOWAndMOYProfilesReq;
}

export namespace BuildDOWAndMOYProfilesReq {
  export type AsObject = {
    profileTod?: api_commons_wfm_pb.ProfileTOD.AsObject,
    profileWoms?: api_commons_wfm_pb.ProfileWOMS.AsObject,
    isAverageProfile: boolean,
  }
}

export class BuildDOWAndMOYProfilesRes extends jspb.Message {
  hasProfileDow(): boolean;
  clearProfileDow(): void;
  getProfileDow(): api_commons_wfm_pb.ProfileDOW | undefined;
  setProfileDow(value?: api_commons_wfm_pb.ProfileDOW): void;

  hasProfileMoy(): boolean;
  clearProfileMoy(): void;
  getProfileMoy(): api_commons_wfm_pb.ProfileMOY | undefined;
  setProfileMoy(value?: api_commons_wfm_pb.ProfileMOY): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildDOWAndMOYProfilesRes.AsObject;
  static toObject(includeInstance: boolean, msg: BuildDOWAndMOYProfilesRes): BuildDOWAndMOYProfilesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildDOWAndMOYProfilesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildDOWAndMOYProfilesRes;
  static deserializeBinaryFromReader(message: BuildDOWAndMOYProfilesRes, reader: jspb.BinaryReader): BuildDOWAndMOYProfilesRes;
}

export namespace BuildDOWAndMOYProfilesRes {
  export type AsObject = {
    profileDow?: api_commons_wfm_pb.ProfileDOW.AsObject,
    profileMoy?: api_commons_wfm_pb.ProfileMOY.AsObject,
  }
}

export class CalculateTrainingDataAveragesForSkillProfileReq extends jspb.Message {
  getSkillProfileSid(): number;
  setSkillProfileSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalculateTrainingDataAveragesForSkillProfileReq.AsObject;
  static toObject(includeInstance: boolean, msg: CalculateTrainingDataAveragesForSkillProfileReq): CalculateTrainingDataAveragesForSkillProfileReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalculateTrainingDataAveragesForSkillProfileReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalculateTrainingDataAveragesForSkillProfileReq;
  static deserializeBinaryFromReader(message: CalculateTrainingDataAveragesForSkillProfileReq, reader: jspb.BinaryReader): CalculateTrainingDataAveragesForSkillProfileReq;
}

export namespace CalculateTrainingDataAveragesForSkillProfileReq {
  export type AsObject = {
    skillProfileSid: number,
  }
}

export class CalculateTrainingDataAveragesForSkillProfileRes extends jspb.Message {
  getAverageSpeedOfAnswerInSeconds(): number;
  setAverageSpeedOfAnswerInSeconds(value: number): void;

  getAverageHandleTimeInSeconds(): number;
  setAverageHandleTimeInSeconds(value: number): void;

  getAverageAfterCallWorkInSeconds(): number;
  setAverageAfterCallWorkInSeconds(value: number): void;

  getAverageTimeToAbortInSeconds(): number;
  setAverageTimeToAbortInSeconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalculateTrainingDataAveragesForSkillProfileRes.AsObject;
  static toObject(includeInstance: boolean, msg: CalculateTrainingDataAveragesForSkillProfileRes): CalculateTrainingDataAveragesForSkillProfileRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalculateTrainingDataAveragesForSkillProfileRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalculateTrainingDataAveragesForSkillProfileRes;
  static deserializeBinaryFromReader(message: CalculateTrainingDataAveragesForSkillProfileRes, reader: jspb.BinaryReader): CalculateTrainingDataAveragesForSkillProfileRes;
}

export namespace CalculateTrainingDataAveragesForSkillProfileRes {
  export type AsObject = {
    averageSpeedOfAnswerInSeconds: number,
    averageHandleTimeInSeconds: number,
    averageAfterCallWorkInSeconds: number,
    averageTimeToAbortInSeconds: number,
  }
}

export class UpdateSkillProfileAveragesUsingHistoricalDataReq extends jspb.Message {
  clearSkillProfileSidsList(): void;
  getSkillProfileSidsList(): Array<number>;
  setSkillProfileSidsList(value: Array<number>): void;
  addSkillProfileSids(value: number, index?: number): number;

  hasDatetimeRange(): boolean;
  clearDatetimeRange(): void;
  getDatetimeRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setDatetimeRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  getExcludeSkillProfilesWithManualAverages(): boolean;
  setExcludeSkillProfilesWithManualAverages(value: boolean): void;

  clearSkillProfileGroupSidsList(): void;
  getSkillProfileGroupSidsList(): Array<string>;
  setSkillProfileGroupSidsList(value: Array<string>): void;
  addSkillProfileGroupSids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSkillProfileAveragesUsingHistoricalDataReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSkillProfileAveragesUsingHistoricalDataReq): UpdateSkillProfileAveragesUsingHistoricalDataReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSkillProfileAveragesUsingHistoricalDataReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSkillProfileAveragesUsingHistoricalDataReq;
  static deserializeBinaryFromReader(message: UpdateSkillProfileAveragesUsingHistoricalDataReq, reader: jspb.BinaryReader): UpdateSkillProfileAveragesUsingHistoricalDataReq;
}

export namespace UpdateSkillProfileAveragesUsingHistoricalDataReq {
  export type AsObject = {
    skillProfileSidsList: Array<number>,
    datetimeRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    excludeSkillProfilesWithManualAverages: boolean,
    skillProfileGroupSidsList: Array<string>,
  }
}

export class UpdateSkillProfileAveragesUsingHistoricalDataRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSkillProfileAveragesUsingHistoricalDataRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSkillProfileAveragesUsingHistoricalDataRes): UpdateSkillProfileAveragesUsingHistoricalDataRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSkillProfileAveragesUsingHistoricalDataRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSkillProfileAveragesUsingHistoricalDataRes;
  static deserializeBinaryFromReader(message: UpdateSkillProfileAveragesUsingHistoricalDataRes, reader: jspb.BinaryReader): UpdateSkillProfileAveragesUsingHistoricalDataRes;
}

export namespace UpdateSkillProfileAveragesUsingHistoricalDataRes {
  export type AsObject = {
  }
}

export class UserCapability extends jspb.Message {
  getCanDisplay(): boolean;
  setCanDisplay(value: boolean): void;

  getCanEdit(): boolean;
  setCanEdit(value: boolean): void;

  getIsMoveTarget(): boolean;
  setIsMoveTarget(value: boolean): void;

  getCanMove(): boolean;
  setCanMove(value: boolean): void;

  getCanDelete(): boolean;
  setCanDelete(value: boolean): void;

  getCanUndelete(): boolean;
  setCanUndelete(value: boolean): void;

  getCanAddChild(): boolean;
  setCanAddChild(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserCapability.AsObject;
  static toObject(includeInstance: boolean, msg: UserCapability): UserCapability.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserCapability, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserCapability;
  static deserializeBinaryFromReader(message: UserCapability, reader: jspb.BinaryReader): UserCapability;
}

export namespace UserCapability {
  export type AsObject = {
    canDisplay: boolean,
    canEdit: boolean,
    isMoveTarget: boolean,
    canMove: boolean,
    canDelete: boolean,
    canUndelete: boolean,
    canAddChild: boolean,
  }
}

export class CallCenterNode extends jspb.Message {
  getCallCenterNodeSid(): number;
  setCallCenterNodeSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasDatetimeSetToInactive(): boolean;
  clearDatetimeSetToInactive(): void;
  getDatetimeSetToInactive(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDatetimeSetToInactive(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTimeZoneVal(): api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap];
  setTimeZoneVal(value: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap]): void;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  clearMemberClientNodesList(): void;
  getMemberClientNodesList(): Array<ClientNode>;
  setMemberClientNodesList(value: Array<ClientNode>): void;
  addMemberClientNodes(value?: ClientNode, index?: number): ClientNode;

  clearMemberNonSkillActivitiesList(): void;
  getMemberNonSkillActivitiesList(): Array<NonSkillActivity>;
  setMemberNonSkillActivitiesList(value: Array<NonSkillActivity>): void;
  addMemberNonSkillActivities(value?: NonSkillActivity, index?: number): NonSkillActivity;

  clearMemberOpenTimesPatternsList(): void;
  getMemberOpenTimesPatternsList(): Array<OpenTimesPattern>;
  setMemberOpenTimesPatternsList(value: Array<OpenTimesPattern>): void;
  addMemberOpenTimesPatterns(value?: OpenTimesPattern, index?: number): OpenTimesPattern;

  clearMemberAgentAvailabilityPatternsList(): void;
  getMemberAgentAvailabilityPatternsList(): Array<AgentAvailabilityPattern>;
  setMemberAgentAvailabilityPatternsList(value: Array<AgentAvailabilityPattern>): void;
  addMemberAgentAvailabilityPatterns(value?: AgentAvailabilityPattern, index?: number): AgentAvailabilityPattern;

  clearMemberConstraintRulesList(): void;
  getMemberConstraintRulesList(): Array<ConstraintRule>;
  setMemberConstraintRulesList(value: Array<ConstraintRule>): void;
  addMemberConstraintRules(value?: ConstraintRule, index?: number): ConstraintRule;

  clearMemberAgentGroupsList(): void;
  getMemberAgentGroupsList(): Array<AgentGroup>;
  setMemberAgentGroupsList(value: Array<AgentGroup>): void;
  addMemberAgentGroups(value?: AgentGroup, index?: number): AgentGroup;

  hasOriginSid(): boolean;
  clearOriginSid(): void;
  getOriginSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setOriginSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasShrinkage(): boolean;
  clearShrinkage(): void;
  getShrinkage(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setShrinkage(value?: google_protobuf_wrappers_pb.FloatValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallCenterNode.AsObject;
  static toObject(includeInstance: boolean, msg: CallCenterNode): CallCenterNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallCenterNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallCenterNode;
  static deserializeBinaryFromReader(message: CallCenterNode, reader: jspb.BinaryReader): CallCenterNode;
}

export namespace CallCenterNode {
  export type AsObject = {
    callCenterNodeSid: number,
    name: string,
    description: string,
    datetimeSetToInactive?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timeZoneVal: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap],
    scheduleScenarioSid: number,
    memberClientNodesList: Array<ClientNode.AsObject>,
    memberNonSkillActivitiesList: Array<NonSkillActivity.AsObject>,
    memberOpenTimesPatternsList: Array<OpenTimesPattern.AsObject>,
    memberAgentAvailabilityPatternsList: Array<AgentAvailabilityPattern.AsObject>,
    memberConstraintRulesList: Array<ConstraintRule.AsObject>,
    memberAgentGroupsList: Array<AgentGroup.AsObject>,
    originSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    shrinkage?: google_protobuf_wrappers_pb.FloatValue.AsObject,
  }
}

export class UpdateCallCenterNodeReq extends jspb.Message {
  hasNode(): boolean;
  clearNode(): void;
  getNode(): CallCenterNode | undefined;
  setNode(value?: CallCenterNode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCallCenterNodeReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCallCenterNodeReq): UpdateCallCenterNodeReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCallCenterNodeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCallCenterNodeReq;
  static deserializeBinaryFromReader(message: UpdateCallCenterNodeReq, reader: jspb.BinaryReader): UpdateCallCenterNodeReq;
}

export namespace UpdateCallCenterNodeReq {
  export type AsObject = {
    node?: CallCenterNode.AsObject,
  }
}

export class UpdateCallCenterNodeRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCallCenterNodeRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCallCenterNodeRes): UpdateCallCenterNodeRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCallCenterNodeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCallCenterNodeRes;
  static deserializeBinaryFromReader(message: UpdateCallCenterNodeRes, reader: jspb.BinaryReader): UpdateCallCenterNodeRes;
}

export namespace UpdateCallCenterNodeRes {
  export type AsObject = {
  }
}

export class ClientNode extends jspb.Message {
  getClientNodeSid(): number;
  setClientNodeSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getParentSid(): number;
  setParentSid(value: number): void;

  hasDatetimeSetToInactive(): boolean;
  clearDatetimeSetToInactive(): void;
  getDatetimeSetToInactive(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDatetimeSetToInactive(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTimeZoneVal(): api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap];
  setTimeZoneVal(value: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap]): void;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  clearMemberLocationNodesList(): void;
  getMemberLocationNodesList(): Array<LocationNode>;
  setMemberLocationNodesList(value: Array<LocationNode>): void;
  addMemberLocationNodes(value?: LocationNode, index?: number): LocationNode;

  clearMemberNonSkillActivitiesList(): void;
  getMemberNonSkillActivitiesList(): Array<NonSkillActivity>;
  setMemberNonSkillActivitiesList(value: Array<NonSkillActivity>): void;
  addMemberNonSkillActivities(value?: NonSkillActivity, index?: number): NonSkillActivity;

  clearMemberOpenTimesPatternsList(): void;
  getMemberOpenTimesPatternsList(): Array<OpenTimesPattern>;
  setMemberOpenTimesPatternsList(value: Array<OpenTimesPattern>): void;
  addMemberOpenTimesPatterns(value?: OpenTimesPattern, index?: number): OpenTimesPattern;

  clearMemberAgentAvailabilityPatternsList(): void;
  getMemberAgentAvailabilityPatternsList(): Array<AgentAvailabilityPattern>;
  setMemberAgentAvailabilityPatternsList(value: Array<AgentAvailabilityPattern>): void;
  addMemberAgentAvailabilityPatterns(value?: AgentAvailabilityPattern, index?: number): AgentAvailabilityPattern;

  clearMemberConstraintRulesList(): void;
  getMemberConstraintRulesList(): Array<ConstraintRule>;
  setMemberConstraintRulesList(value: Array<ConstraintRule>): void;
  addMemberConstraintRules(value?: ConstraintRule, index?: number): ConstraintRule;

  clearMemberAgentGroupsList(): void;
  getMemberAgentGroupsList(): Array<AgentGroup>;
  setMemberAgentGroupsList(value: Array<AgentGroup>): void;
  addMemberAgentGroups(value?: AgentGroup, index?: number): AgentGroup;

  hasOriginSid(): boolean;
  clearOriginSid(): void;
  getOriginSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setOriginSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasShrinkage(): boolean;
  clearShrinkage(): void;
  getShrinkage(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setShrinkage(value?: google_protobuf_wrappers_pb.FloatValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientNode.AsObject;
  static toObject(includeInstance: boolean, msg: ClientNode): ClientNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientNode;
  static deserializeBinaryFromReader(message: ClientNode, reader: jspb.BinaryReader): ClientNode;
}

export namespace ClientNode {
  export type AsObject = {
    clientNodeSid: number,
    name: string,
    description: string,
    parentSid: number,
    datetimeSetToInactive?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timeZoneVal: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap],
    scheduleScenarioSid: number,
    memberLocationNodesList: Array<LocationNode.AsObject>,
    memberNonSkillActivitiesList: Array<NonSkillActivity.AsObject>,
    memberOpenTimesPatternsList: Array<OpenTimesPattern.AsObject>,
    memberAgentAvailabilityPatternsList: Array<AgentAvailabilityPattern.AsObject>,
    memberConstraintRulesList: Array<ConstraintRule.AsObject>,
    memberAgentGroupsList: Array<AgentGroup.AsObject>,
    originSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    shrinkage?: google_protobuf_wrappers_pb.FloatValue.AsObject,
  }
}

export class CreateClientNodeReq extends jspb.Message {
  hasNode(): boolean;
  clearNode(): void;
  getNode(): ClientNode | undefined;
  setNode(value?: ClientNode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateClientNodeReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateClientNodeReq): CreateClientNodeReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateClientNodeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateClientNodeReq;
  static deserializeBinaryFromReader(message: CreateClientNodeReq, reader: jspb.BinaryReader): CreateClientNodeReq;
}

export namespace CreateClientNodeReq {
  export type AsObject = {
    node?: ClientNode.AsObject,
  }
}

export class CreateClientNodeRes extends jspb.Message {
  getClientNodeSid(): number;
  setClientNodeSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateClientNodeRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateClientNodeRes): CreateClientNodeRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateClientNodeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateClientNodeRes;
  static deserializeBinaryFromReader(message: CreateClientNodeRes, reader: jspb.BinaryReader): CreateClientNodeRes;
}

export namespace CreateClientNodeRes {
  export type AsObject = {
    clientNodeSid: number,
  }
}

export class UpdateClientNodeReq extends jspb.Message {
  hasNode(): boolean;
  clearNode(): void;
  getNode(): ClientNode | undefined;
  setNode(value?: ClientNode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateClientNodeReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateClientNodeReq): UpdateClientNodeReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateClientNodeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateClientNodeReq;
  static deserializeBinaryFromReader(message: UpdateClientNodeReq, reader: jspb.BinaryReader): UpdateClientNodeReq;
}

export namespace UpdateClientNodeReq {
  export type AsObject = {
    node?: ClientNode.AsObject,
  }
}

export class UpdateClientNodeRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateClientNodeRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateClientNodeRes): UpdateClientNodeRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateClientNodeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateClientNodeRes;
  static deserializeBinaryFromReader(message: UpdateClientNodeRes, reader: jspb.BinaryReader): UpdateClientNodeRes;
}

export namespace UpdateClientNodeRes {
  export type AsObject = {
  }
}

export class LocationNode extends jspb.Message {
  getLocationNodeSid(): number;
  setLocationNodeSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getClientNodeSid(): number;
  setClientNodeSid(value: number): void;

  hasDatetimeSetToInactive(): boolean;
  clearDatetimeSetToInactive(): void;
  getDatetimeSetToInactive(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDatetimeSetToInactive(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTimeZoneVal(): api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap];
  setTimeZoneVal(value: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap]): void;

  getShrinkageIsPercentage(): boolean;
  setShrinkageIsPercentage(value: boolean): void;

  getShrinkageValue(): number;
  setShrinkageValue(value: number): void;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  clearMemberProgramNodesList(): void;
  getMemberProgramNodesList(): Array<ProgramNode>;
  setMemberProgramNodesList(value: Array<ProgramNode>): void;
  addMemberProgramNodes(value?: ProgramNode, index?: number): ProgramNode;

  clearMemberNonSkillActivitiesList(): void;
  getMemberNonSkillActivitiesList(): Array<NonSkillActivity>;
  setMemberNonSkillActivitiesList(value: Array<NonSkillActivity>): void;
  addMemberNonSkillActivities(value?: NonSkillActivity, index?: number): NonSkillActivity;

  clearMemberOpenTimesPatternsList(): void;
  getMemberOpenTimesPatternsList(): Array<OpenTimesPattern>;
  setMemberOpenTimesPatternsList(value: Array<OpenTimesPattern>): void;
  addMemberOpenTimesPatterns(value?: OpenTimesPattern, index?: number): OpenTimesPattern;

  clearMemberAgentAvailabilityPatternsList(): void;
  getMemberAgentAvailabilityPatternsList(): Array<AgentAvailabilityPattern>;
  setMemberAgentAvailabilityPatternsList(value: Array<AgentAvailabilityPattern>): void;
  addMemberAgentAvailabilityPatterns(value?: AgentAvailabilityPattern, index?: number): AgentAvailabilityPattern;

  clearMemberConstraintRulesList(): void;
  getMemberConstraintRulesList(): Array<ConstraintRule>;
  setMemberConstraintRulesList(value: Array<ConstraintRule>): void;
  addMemberConstraintRules(value?: ConstraintRule, index?: number): ConstraintRule;

  clearMemberAgentGroupsList(): void;
  getMemberAgentGroupsList(): Array<AgentGroup>;
  setMemberAgentGroupsList(value: Array<AgentGroup>): void;
  addMemberAgentGroups(value?: AgentGroup, index?: number): AgentGroup;

  hasOriginSid(): boolean;
  clearOriginSid(): void;
  getOriginSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setOriginSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasShrinkage(): boolean;
  clearShrinkage(): void;
  getShrinkage(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setShrinkage(value?: google_protobuf_wrappers_pb.FloatValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationNode.AsObject;
  static toObject(includeInstance: boolean, msg: LocationNode): LocationNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationNode;
  static deserializeBinaryFromReader(message: LocationNode, reader: jspb.BinaryReader): LocationNode;
}

export namespace LocationNode {
  export type AsObject = {
    locationNodeSid: number,
    name: string,
    description: string,
    clientNodeSid: number,
    datetimeSetToInactive?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timeZoneVal: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap],
    shrinkageIsPercentage: boolean,
    shrinkageValue: number,
    scheduleScenarioSid: number,
    memberProgramNodesList: Array<ProgramNode.AsObject>,
    memberNonSkillActivitiesList: Array<NonSkillActivity.AsObject>,
    memberOpenTimesPatternsList: Array<OpenTimesPattern.AsObject>,
    memberAgentAvailabilityPatternsList: Array<AgentAvailabilityPattern.AsObject>,
    memberConstraintRulesList: Array<ConstraintRule.AsObject>,
    memberAgentGroupsList: Array<AgentGroup.AsObject>,
    originSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    shrinkage?: google_protobuf_wrappers_pb.FloatValue.AsObject,
  }
}

export class CreateLocationNodeReq extends jspb.Message {
  hasNode(): boolean;
  clearNode(): void;
  getNode(): LocationNode | undefined;
  setNode(value?: LocationNode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLocationNodeReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLocationNodeReq): CreateLocationNodeReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLocationNodeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLocationNodeReq;
  static deserializeBinaryFromReader(message: CreateLocationNodeReq, reader: jspb.BinaryReader): CreateLocationNodeReq;
}

export namespace CreateLocationNodeReq {
  export type AsObject = {
    node?: LocationNode.AsObject,
  }
}

export class CreateLocationNodeRes extends jspb.Message {
  getLocationNodeSid(): number;
  setLocationNodeSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLocationNodeRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLocationNodeRes): CreateLocationNodeRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLocationNodeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLocationNodeRes;
  static deserializeBinaryFromReader(message: CreateLocationNodeRes, reader: jspb.BinaryReader): CreateLocationNodeRes;
}

export namespace CreateLocationNodeRes {
  export type AsObject = {
    locationNodeSid: number,
  }
}

export class UpdateLocationNodeReq extends jspb.Message {
  hasLocationNode(): boolean;
  clearLocationNode(): void;
  getLocationNode(): LocationNode | undefined;
  setLocationNode(value?: LocationNode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLocationNodeReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLocationNodeReq): UpdateLocationNodeReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLocationNodeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLocationNodeReq;
  static deserializeBinaryFromReader(message: UpdateLocationNodeReq, reader: jspb.BinaryReader): UpdateLocationNodeReq;
}

export namespace UpdateLocationNodeReq {
  export type AsObject = {
    locationNode?: LocationNode.AsObject,
  }
}

export class UpdateLocationNodeRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLocationNodeRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLocationNodeRes): UpdateLocationNodeRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLocationNodeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLocationNodeRes;
  static deserializeBinaryFromReader(message: UpdateLocationNodeRes, reader: jspb.BinaryReader): UpdateLocationNodeRes;
}

export namespace UpdateLocationNodeRes {
  export type AsObject = {
  }
}

export class ProgramNode extends jspb.Message {
  getProgramNodeSid(): number;
  setProgramNodeSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getLocationNodeSid(): number;
  setLocationNodeSid(value: number): void;

  hasDatetimeSetToInactive(): boolean;
  clearDatetimeSetToInactive(): void;
  getDatetimeSetToInactive(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDatetimeSetToInactive(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getShrinkageIsPercentage(): boolean;
  setShrinkageIsPercentage(value: boolean): void;

  getShrinkageValue(): number;
  setShrinkageValue(value: number): void;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  clearMemberShiftTemplatesList(): void;
  getMemberShiftTemplatesList(): Array<ShiftTemplate>;
  setMemberShiftTemplatesList(value: Array<ShiftTemplate>): void;
  addMemberShiftTemplates(value?: ShiftTemplate, index?: number): ShiftTemplate;

  clearMemberNonSkillActivitiesList(): void;
  getMemberNonSkillActivitiesList(): Array<NonSkillActivity>;
  setMemberNonSkillActivitiesList(value: Array<NonSkillActivity>): void;
  addMemberNonSkillActivities(value?: NonSkillActivity, index?: number): NonSkillActivity;

  clearMemberOpenTimesPatternsList(): void;
  getMemberOpenTimesPatternsList(): Array<OpenTimesPattern>;
  setMemberOpenTimesPatternsList(value: Array<OpenTimesPattern>): void;
  addMemberOpenTimesPatterns(value?: OpenTimesPattern, index?: number): OpenTimesPattern;

  clearMemberAgentAvailabilityPatternsList(): void;
  getMemberAgentAvailabilityPatternsList(): Array<AgentAvailabilityPattern>;
  setMemberAgentAvailabilityPatternsList(value: Array<AgentAvailabilityPattern>): void;
  addMemberAgentAvailabilityPatterns(value?: AgentAvailabilityPattern, index?: number): AgentAvailabilityPattern;

  clearMemberConstraintRulesList(): void;
  getMemberConstraintRulesList(): Array<ConstraintRule>;
  setMemberConstraintRulesList(value: Array<ConstraintRule>): void;
  addMemberConstraintRules(value?: ConstraintRule, index?: number): ConstraintRule;

  clearMemberAgentGroupsList(): void;
  getMemberAgentGroupsList(): Array<AgentGroup>;
  setMemberAgentGroupsList(value: Array<AgentGroup>): void;
  addMemberAgentGroups(value?: AgentGroup, index?: number): AgentGroup;

  clearMemberSkillProficienciesList(): void;
  getMemberSkillProficienciesList(): Array<SkillProficiency>;
  setMemberSkillProficienciesList(value: Array<SkillProficiency>): void;
  addMemberSkillProficiencies(value?: SkillProficiency, index?: number): SkillProficiency;

  hasOriginSid(): boolean;
  clearOriginSid(): void;
  getOriginSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setOriginSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasSkillProfileCategory(): boolean;
  clearSkillProfileCategory(): void;
  getSkillProfileCategory(): api_commons_wfm_pb.SkillProfileCategory | undefined;
  setSkillProfileCategory(value?: api_commons_wfm_pb.SkillProfileCategory): void;

  hasShrinkage(): boolean;
  clearShrinkage(): void;
  getShrinkage(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setShrinkage(value?: google_protobuf_wrappers_pb.FloatValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProgramNode.AsObject;
  static toObject(includeInstance: boolean, msg: ProgramNode): ProgramNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProgramNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProgramNode;
  static deserializeBinaryFromReader(message: ProgramNode, reader: jspb.BinaryReader): ProgramNode;
}

export namespace ProgramNode {
  export type AsObject = {
    programNodeSid: number,
    name: string,
    description: string,
    locationNodeSid: number,
    datetimeSetToInactive?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    shrinkageIsPercentage: boolean,
    shrinkageValue: number,
    scheduleScenarioSid: number,
    memberShiftTemplatesList: Array<ShiftTemplate.AsObject>,
    memberNonSkillActivitiesList: Array<NonSkillActivity.AsObject>,
    memberOpenTimesPatternsList: Array<OpenTimesPattern.AsObject>,
    memberAgentAvailabilityPatternsList: Array<AgentAvailabilityPattern.AsObject>,
    memberConstraintRulesList: Array<ConstraintRule.AsObject>,
    memberAgentGroupsList: Array<AgentGroup.AsObject>,
    memberSkillProficienciesList: Array<SkillProficiency.AsObject>,
    originSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    skillProfileCategory?: api_commons_wfm_pb.SkillProfileCategory.AsObject,
    shrinkage?: google_protobuf_wrappers_pb.FloatValue.AsObject,
  }
}

export class CreateProgramNodeReq extends jspb.Message {
  hasNode(): boolean;
  clearNode(): void;
  getNode(): ProgramNode | undefined;
  setNode(value?: ProgramNode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProgramNodeReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProgramNodeReq): CreateProgramNodeReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProgramNodeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProgramNodeReq;
  static deserializeBinaryFromReader(message: CreateProgramNodeReq, reader: jspb.BinaryReader): CreateProgramNodeReq;
}

export namespace CreateProgramNodeReq {
  export type AsObject = {
    node?: ProgramNode.AsObject,
  }
}

export class CreateProgramNodeRes extends jspb.Message {
  getProgramNodeSid(): number;
  setProgramNodeSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProgramNodeRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProgramNodeRes): CreateProgramNodeRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProgramNodeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProgramNodeRes;
  static deserializeBinaryFromReader(message: CreateProgramNodeRes, reader: jspb.BinaryReader): CreateProgramNodeRes;
}

export namespace CreateProgramNodeRes {
  export type AsObject = {
    programNodeSid: number,
  }
}

export class UpdateProgramNodeReq extends jspb.Message {
  hasProgramNode(): boolean;
  clearProgramNode(): void;
  getProgramNode(): ProgramNode | undefined;
  setProgramNode(value?: ProgramNode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProgramNodeReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProgramNodeReq): UpdateProgramNodeReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProgramNodeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProgramNodeReq;
  static deserializeBinaryFromReader(message: UpdateProgramNodeReq, reader: jspb.BinaryReader): UpdateProgramNodeReq;
}

export namespace UpdateProgramNodeReq {
  export type AsObject = {
    programNode?: ProgramNode.AsObject,
  }
}

export class UpdateProgramNodeRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProgramNodeRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProgramNodeRes): UpdateProgramNodeRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProgramNodeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProgramNodeRes;
  static deserializeBinaryFromReader(message: UpdateProgramNodeRes, reader: jspb.BinaryReader): UpdateProgramNodeRes;
}

export namespace UpdateProgramNodeRes {
  export type AsObject = {
  }
}

export class ListProgramNodesBySidReq extends jspb.Message {
  clearProgramNodeSidsList(): void;
  getProgramNodeSidsList(): Array<number>;
  setProgramNodeSidsList(value: Array<number>): void;
  addProgramNodeSids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProgramNodesBySidReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListProgramNodesBySidReq): ListProgramNodesBySidReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProgramNodesBySidReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProgramNodesBySidReq;
  static deserializeBinaryFromReader(message: ListProgramNodesBySidReq, reader: jspb.BinaryReader): ListProgramNodesBySidReq;
}

export namespace ListProgramNodesBySidReq {
  export type AsObject = {
    programNodeSidsList: Array<number>,
  }
}

export class ListProgramNodesBySidRes extends jspb.Message {
  clearProgramNodesList(): void;
  getProgramNodesList(): Array<ProgramNode>;
  setProgramNodesList(value: Array<ProgramNode>): void;
  addProgramNodes(value?: ProgramNode, index?: number): ProgramNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProgramNodesBySidRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListProgramNodesBySidRes): ListProgramNodesBySidRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProgramNodesBySidRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProgramNodesBySidRes;
  static deserializeBinaryFromReader(message: ListProgramNodesBySidRes, reader: jspb.BinaryReader): ListProgramNodesBySidRes;
}

export namespace ListProgramNodesBySidRes {
  export type AsObject = {
    programNodesList: Array<ProgramNode.AsObject>,
  }
}

export class ParentEntity extends jspb.Message {
  getParentSid(): number;
  setParentSid(value: number): void;

  getParentType(): api_commons_wfm_pb.ConfigEntityTypeMap[keyof api_commons_wfm_pb.ConfigEntityTypeMap];
  setParentType(value: api_commons_wfm_pb.ConfigEntityTypeMap[keyof api_commons_wfm_pb.ConfigEntityTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParentEntity.AsObject;
  static toObject(includeInstance: boolean, msg: ParentEntity): ParentEntity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParentEntity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParentEntity;
  static deserializeBinaryFromReader(message: ParentEntity, reader: jspb.BinaryReader): ParentEntity;
}

export namespace ParentEntity {
  export type AsObject = {
    parentSid: number,
    parentType: api_commons_wfm_pb.ConfigEntityTypeMap[keyof api_commons_wfm_pb.ConfigEntityTypeMap],
  }
}

export class ConstraintRule extends jspb.Message {
  getConstraintRuleSid(): number;
  setConstraintRuleSid(value: number): void;

  hasParentEntity(): boolean;
  clearParentEntity(): void;
  getParentEntity(): ParentEntity | undefined;
  setParentEntity(value?: ParentEntity): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getValCount(): number;
  setValCount(value: number): void;

  getValUnit(): api_commons_wfm_pb.ConstraintTimeUnitMap[keyof api_commons_wfm_pb.ConstraintTimeUnitMap];
  setValUnit(value: api_commons_wfm_pb.ConstraintTimeUnitMap[keyof api_commons_wfm_pb.ConstraintTimeUnitMap]): void;

  getPerCount(): number;
  setPerCount(value: number): void;

  getPerUnit(): api_commons_wfm_pb.ConstraintTimeUnitMap[keyof api_commons_wfm_pb.ConstraintTimeUnitMap];
  setPerUnit(value: api_commons_wfm_pb.ConstraintTimeUnitMap[keyof api_commons_wfm_pb.ConstraintTimeUnitMap]): void;

  getPriority(): number;
  setPriority(value: number): void;

  getIsPriorityInfinite(): boolean;
  setIsPriorityInfinite(value: boolean): void;

  getRuleType(): api_commons_wfm_pb.ConstraintRuleTypeMap[keyof api_commons_wfm_pb.ConstraintRuleTypeMap];
  setRuleType(value: api_commons_wfm_pb.ConstraintRuleTypeMap[keyof api_commons_wfm_pb.ConstraintRuleTypeMap]): void;

  getTargetSid(): number;
  setTargetSid(value: number): void;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  hasSchedulingActivity(): boolean;
  clearSchedulingActivity(): void;
  getSchedulingActivity(): SchedulingActivity | undefined;
  setSchedulingActivity(value?: SchedulingActivity): void;

  hasSkillProficiency(): boolean;
  clearSkillProficiency(): void;
  getSkillProficiency(): SkillProficiency | undefined;
  setSkillProficiency(value?: SkillProficiency): void;

  getMemberTargetEntityCase(): ConstraintRule.MemberTargetEntityCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConstraintRule.AsObject;
  static toObject(includeInstance: boolean, msg: ConstraintRule): ConstraintRule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConstraintRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConstraintRule;
  static deserializeBinaryFromReader(message: ConstraintRule, reader: jspb.BinaryReader): ConstraintRule;
}

export namespace ConstraintRule {
  export type AsObject = {
    constraintRuleSid: number,
    parentEntity?: ParentEntity.AsObject,
    name: string,
    description: string,
    valCount: number,
    valUnit: api_commons_wfm_pb.ConstraintTimeUnitMap[keyof api_commons_wfm_pb.ConstraintTimeUnitMap],
    perCount: number,
    perUnit: api_commons_wfm_pb.ConstraintTimeUnitMap[keyof api_commons_wfm_pb.ConstraintTimeUnitMap],
    priority: number,
    isPriorityInfinite: boolean,
    ruleType: api_commons_wfm_pb.ConstraintRuleTypeMap[keyof api_commons_wfm_pb.ConstraintRuleTypeMap],
    targetSid: number,
    scheduleScenarioSid: number,
    schedulingActivity?: SchedulingActivity.AsObject,
    skillProficiency?: SkillProficiency.AsObject,
  }

  export enum MemberTargetEntityCase {
    MEMBER_TARGET_ENTITY_NOT_SET = 0,
    SCHEDULING_ACTIVITY = 14,
    SKILL_PROFICIENCY = 15,
  }
}

export class CreateConstraintRuleReq extends jspb.Message {
  hasConstraintRule(): boolean;
  clearConstraintRule(): void;
  getConstraintRule(): ConstraintRule | undefined;
  setConstraintRule(value?: ConstraintRule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConstraintRuleReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConstraintRuleReq): CreateConstraintRuleReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateConstraintRuleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConstraintRuleReq;
  static deserializeBinaryFromReader(message: CreateConstraintRuleReq, reader: jspb.BinaryReader): CreateConstraintRuleReq;
}

export namespace CreateConstraintRuleReq {
  export type AsObject = {
    constraintRule?: ConstraintRule.AsObject,
  }
}

export class CreateConstraintRuleRes extends jspb.Message {
  getConstraintRuleSid(): number;
  setConstraintRuleSid(value: number): void;

  getSkillProficiencySid(): number;
  setSkillProficiencySid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConstraintRuleRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConstraintRuleRes): CreateConstraintRuleRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateConstraintRuleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConstraintRuleRes;
  static deserializeBinaryFromReader(message: CreateConstraintRuleRes, reader: jspb.BinaryReader): CreateConstraintRuleRes;
}

export namespace CreateConstraintRuleRes {
  export type AsObject = {
    constraintRuleSid: number,
    skillProficiencySid: number,
  }
}

export class UpdateConstraintRuleReq extends jspb.Message {
  hasConstraintRule(): boolean;
  clearConstraintRule(): void;
  getConstraintRule(): ConstraintRule | undefined;
  setConstraintRule(value?: ConstraintRule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateConstraintRuleReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateConstraintRuleReq): UpdateConstraintRuleReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateConstraintRuleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateConstraintRuleReq;
  static deserializeBinaryFromReader(message: UpdateConstraintRuleReq, reader: jspb.BinaryReader): UpdateConstraintRuleReq;
}

export namespace UpdateConstraintRuleReq {
  export type AsObject = {
    constraintRule?: ConstraintRule.AsObject,
  }
}

export class UpdateConstraintRuleRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateConstraintRuleRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateConstraintRuleRes): UpdateConstraintRuleRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateConstraintRuleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateConstraintRuleRes;
  static deserializeBinaryFromReader(message: UpdateConstraintRuleRes, reader: jspb.BinaryReader): UpdateConstraintRuleRes;
}

export namespace UpdateConstraintRuleRes {
  export type AsObject = {
  }
}

export class DeleteConstraintRuleReq extends jspb.Message {
  getConstraintRuleSid(): number;
  setConstraintRuleSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConstraintRuleReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConstraintRuleReq): DeleteConstraintRuleReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteConstraintRuleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConstraintRuleReq;
  static deserializeBinaryFromReader(message: DeleteConstraintRuleReq, reader: jspb.BinaryReader): DeleteConstraintRuleReq;
}

export namespace DeleteConstraintRuleReq {
  export type AsObject = {
    constraintRuleSid: number,
  }
}

export class DeleteConstraintRuleRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConstraintRuleRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConstraintRuleRes): DeleteConstraintRuleRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteConstraintRuleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConstraintRuleRes;
  static deserializeBinaryFromReader(message: DeleteConstraintRuleRes, reader: jspb.BinaryReader): DeleteConstraintRuleRes;
}

export namespace DeleteConstraintRuleRes {
  export type AsObject = {
  }
}

export class NonSkillActivity extends jspb.Message {
  getNonSkillActivitySid(): number;
  setNonSkillActivitySid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasDatetimeSetToInactive(): boolean;
  clearDatetimeSetToInactive(): void;
  getDatetimeSetToInactive(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDatetimeSetToInactive(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getRed(): number;
  setRed(value: number): void;

  getGreen(): number;
  setGreen(value: number): void;

  getBlue(): number;
  setBlue(value: number): void;

  getTransparency(): number;
  setTransparency(value: number): void;

  hasInheritedFromEntity(): boolean;
  clearInheritedFromEntity(): void;
  getInheritedFromEntity(): ParentEntity | undefined;
  setInheritedFromEntity(value?: ParentEntity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NonSkillActivity.AsObject;
  static toObject(includeInstance: boolean, msg: NonSkillActivity): NonSkillActivity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NonSkillActivity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NonSkillActivity;
  static deserializeBinaryFromReader(message: NonSkillActivity, reader: jspb.BinaryReader): NonSkillActivity;
}

export namespace NonSkillActivity {
  export type AsObject = {
    nonSkillActivitySid: number,
    name: string,
    description: string,
    datetimeSetToInactive?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    red: number,
    green: number,
    blue: number,
    transparency: number,
    inheritedFromEntity?: ParentEntity.AsObject,
  }
}

export class CreateNonSkillActivityReq extends jspb.Message {
  hasNonSkillActivity(): boolean;
  clearNonSkillActivity(): void;
  getNonSkillActivity(): NonSkillActivity | undefined;
  setNonSkillActivity(value?: NonSkillActivity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNonSkillActivityReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNonSkillActivityReq): CreateNonSkillActivityReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateNonSkillActivityReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNonSkillActivityReq;
  static deserializeBinaryFromReader(message: CreateNonSkillActivityReq, reader: jspb.BinaryReader): CreateNonSkillActivityReq;
}

export namespace CreateNonSkillActivityReq {
  export type AsObject = {
    nonSkillActivity?: NonSkillActivity.AsObject,
  }
}

export class CreateNonSkillActivityRes extends jspb.Message {
  getNonSkillActivitySid(): number;
  setNonSkillActivitySid(value: number): void;

  getSchedulingActivitySid(): number;
  setSchedulingActivitySid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNonSkillActivityRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNonSkillActivityRes): CreateNonSkillActivityRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateNonSkillActivityRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNonSkillActivityRes;
  static deserializeBinaryFromReader(message: CreateNonSkillActivityRes, reader: jspb.BinaryReader): CreateNonSkillActivityRes;
}

export namespace CreateNonSkillActivityRes {
  export type AsObject = {
    nonSkillActivitySid: number,
    schedulingActivitySid: number,
  }
}

export class UpdateNonSkillActivityReq extends jspb.Message {
  hasNonSkillActivity(): boolean;
  clearNonSkillActivity(): void;
  getNonSkillActivity(): NonSkillActivity | undefined;
  setNonSkillActivity(value?: NonSkillActivity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNonSkillActivityReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNonSkillActivityReq): UpdateNonSkillActivityReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNonSkillActivityReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNonSkillActivityReq;
  static deserializeBinaryFromReader(message: UpdateNonSkillActivityReq, reader: jspb.BinaryReader): UpdateNonSkillActivityReq;
}

export namespace UpdateNonSkillActivityReq {
  export type AsObject = {
    nonSkillActivity?: NonSkillActivity.AsObject,
  }
}

export class UpdateNonSkillActivityRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNonSkillActivityRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNonSkillActivityRes): UpdateNonSkillActivityRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNonSkillActivityRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNonSkillActivityRes;
  static deserializeBinaryFromReader(message: UpdateNonSkillActivityRes, reader: jspb.BinaryReader): UpdateNonSkillActivityRes;
}

export namespace UpdateNonSkillActivityRes {
  export type AsObject = {
  }
}

export class ListNonSkillActivitiesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNonSkillActivitiesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListNonSkillActivitiesReq): ListNonSkillActivitiesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNonSkillActivitiesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNonSkillActivitiesReq;
  static deserializeBinaryFromReader(message: ListNonSkillActivitiesReq, reader: jspb.BinaryReader): ListNonSkillActivitiesReq;
}

export namespace ListNonSkillActivitiesReq {
  export type AsObject = {
  }
}

export class ListNonSkillActivitiesRes extends jspb.Message {
  clearNonSkillActivitiesList(): void;
  getNonSkillActivitiesList(): Array<NonSkillActivity>;
  setNonSkillActivitiesList(value: Array<NonSkillActivity>): void;
  addNonSkillActivities(value?: NonSkillActivity, index?: number): NonSkillActivity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNonSkillActivitiesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListNonSkillActivitiesRes): ListNonSkillActivitiesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNonSkillActivitiesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNonSkillActivitiesRes;
  static deserializeBinaryFromReader(message: ListNonSkillActivitiesRes, reader: jspb.BinaryReader): ListNonSkillActivitiesRes;
}

export namespace ListNonSkillActivitiesRes {
  export type AsObject = {
    nonSkillActivitiesList: Array<NonSkillActivity.AsObject>,
  }
}

export class ListNonSkillActivityAssociationsReq extends jspb.Message {
  hasAssociatedEntity(): boolean;
  clearAssociatedEntity(): void;
  getAssociatedEntity(): ParentEntity | undefined;
  setAssociatedEntity(value?: ParentEntity): void;

  getRelationshipType(): api_commons_wfm_pb.ConfigRelationshipTypeMap[keyof api_commons_wfm_pb.ConfigRelationshipTypeMap];
  setRelationshipType(value: api_commons_wfm_pb.ConfigRelationshipTypeMap[keyof api_commons_wfm_pb.ConfigRelationshipTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNonSkillActivityAssociationsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListNonSkillActivityAssociationsReq): ListNonSkillActivityAssociationsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNonSkillActivityAssociationsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNonSkillActivityAssociationsReq;
  static deserializeBinaryFromReader(message: ListNonSkillActivityAssociationsReq, reader: jspb.BinaryReader): ListNonSkillActivityAssociationsReq;
}

export namespace ListNonSkillActivityAssociationsReq {
  export type AsObject = {
    associatedEntity?: ParentEntity.AsObject,
    relationshipType: api_commons_wfm_pb.ConfigRelationshipTypeMap[keyof api_commons_wfm_pb.ConfigRelationshipTypeMap],
  }
}

export class ListNonSkillActivityAssociationsRes extends jspb.Message {
  clearNonSkillActivitySidsList(): void;
  getNonSkillActivitySidsList(): Array<number>;
  setNonSkillActivitySidsList(value: Array<number>): void;
  addNonSkillActivitySids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNonSkillActivityAssociationsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListNonSkillActivityAssociationsRes): ListNonSkillActivityAssociationsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNonSkillActivityAssociationsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNonSkillActivityAssociationsRes;
  static deserializeBinaryFromReader(message: ListNonSkillActivityAssociationsRes, reader: jspb.BinaryReader): ListNonSkillActivityAssociationsRes;
}

export namespace ListNonSkillActivityAssociationsRes {
  export type AsObject = {
    nonSkillActivitySidsList: Array<number>,
  }
}

export class SchedulingActivity extends jspb.Message {
  getSchedulingActivitySid(): number;
  setSchedulingActivitySid(value: number): void;

  getIsSkillActivity(): boolean;
  setIsSkillActivity(value: boolean): void;

  hasActivitySid(): boolean;
  clearActivitySid(): void;
  getActivitySid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setActivitySid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasMemberNonSkillActivity(): boolean;
  clearMemberNonSkillActivity(): void;
  getMemberNonSkillActivity(): NonSkillActivity | undefined;
  setMemberNonSkillActivity(value?: NonSkillActivity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchedulingActivity.AsObject;
  static toObject(includeInstance: boolean, msg: SchedulingActivity): SchedulingActivity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SchedulingActivity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchedulingActivity;
  static deserializeBinaryFromReader(message: SchedulingActivity, reader: jspb.BinaryReader): SchedulingActivity;
}

export namespace SchedulingActivity {
  export type AsObject = {
    schedulingActivitySid: number,
    isSkillActivity: boolean,
    activitySid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    memberNonSkillActivity?: NonSkillActivity.AsObject,
  }
}

export class ListCandidateSchedulingActivitiesReq extends jspb.Message {
  hasParentOfRule(): boolean;
  clearParentOfRule(): void;
  getParentOfRule(): ParentEntity | undefined;
  setParentOfRule(value?: ParentEntity): void;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCandidateSchedulingActivitiesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListCandidateSchedulingActivitiesReq): ListCandidateSchedulingActivitiesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCandidateSchedulingActivitiesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCandidateSchedulingActivitiesReq;
  static deserializeBinaryFromReader(message: ListCandidateSchedulingActivitiesReq, reader: jspb.BinaryReader): ListCandidateSchedulingActivitiesReq;
}

export namespace ListCandidateSchedulingActivitiesReq {
  export type AsObject = {
    parentOfRule?: ParentEntity.AsObject,
    scheduleScenarioSid: number,
  }
}

export class ListCandidateSchedulingActivitiesRes extends jspb.Message {
  clearSchedulingActivitiesList(): void;
  getSchedulingActivitiesList(): Array<SchedulingActivity>;
  setSchedulingActivitiesList(value: Array<SchedulingActivity>): void;
  addSchedulingActivities(value?: SchedulingActivity, index?: number): SchedulingActivity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCandidateSchedulingActivitiesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListCandidateSchedulingActivitiesRes): ListCandidateSchedulingActivitiesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCandidateSchedulingActivitiesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCandidateSchedulingActivitiesRes;
  static deserializeBinaryFromReader(message: ListCandidateSchedulingActivitiesRes, reader: jspb.BinaryReader): ListCandidateSchedulingActivitiesRes;
}

export namespace ListCandidateSchedulingActivitiesRes {
  export type AsObject = {
    schedulingActivitiesList: Array<SchedulingActivity.AsObject>,
  }
}

export class AgentGroup extends jspb.Message {
  getAgentGroupSid(): number;
  setAgentGroupSid(value: number): void;

  hasParentEntity(): boolean;
  clearParentEntity(): void;
  getParentEntity(): ParentEntity | undefined;
  setParentEntity(value?: ParentEntity): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasDatetimeSetToInactive(): boolean;
  clearDatetimeSetToInactive(): void;
  getDatetimeSetToInactive(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDatetimeSetToInactive(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  clearMemberConstraintRulesList(): void;
  getMemberConstraintRulesList(): Array<ConstraintRule>;
  setMemberConstraintRulesList(value: Array<ConstraintRule>): void;
  addMemberConstraintRules(value?: ConstraintRule, index?: number): ConstraintRule;

  clearMemberWfmAgentsList(): void;
  getMemberWfmAgentsList(): Array<WFMAgent>;
  setMemberWfmAgentsList(value: Array<WFMAgent>): void;
  addMemberWfmAgents(value?: WFMAgent, index?: number): WFMAgent;

  clearMemberSkillProficienciesList(): void;
  getMemberSkillProficienciesList(): Array<SkillProficiency>;
  setMemberSkillProficienciesList(value: Array<SkillProficiency>): void;
  addMemberSkillProficiencies(value?: SkillProficiency, index?: number): SkillProficiency;

  clearMemberAgentAvailabilityPatternsList(): void;
  getMemberAgentAvailabilityPatternsList(): Array<AgentAvailabilityPattern>;
  setMemberAgentAvailabilityPatternsList(value: Array<AgentAvailabilityPattern>): void;
  addMemberAgentAvailabilityPatterns(value?: AgentAvailabilityPattern, index?: number): AgentAvailabilityPattern;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentGroup.AsObject;
  static toObject(includeInstance: boolean, msg: AgentGroup): AgentGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentGroup;
  static deserializeBinaryFromReader(message: AgentGroup, reader: jspb.BinaryReader): AgentGroup;
}

export namespace AgentGroup {
  export type AsObject = {
    agentGroupSid: number,
    parentEntity?: ParentEntity.AsObject,
    name: string,
    description: string,
    datetimeSetToInactive?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    scheduleScenarioSid: number,
    memberConstraintRulesList: Array<ConstraintRule.AsObject>,
    memberWfmAgentsList: Array<WFMAgent.AsObject>,
    memberSkillProficienciesList: Array<SkillProficiency.AsObject>,
    memberAgentAvailabilityPatternsList: Array<AgentAvailabilityPattern.AsObject>,
  }
}

export class CreateAgentGroupReq extends jspb.Message {
  hasAgentGroup(): boolean;
  clearAgentGroup(): void;
  getAgentGroup(): AgentGroup | undefined;
  setAgentGroup(value?: AgentGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAgentGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAgentGroupReq): CreateAgentGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAgentGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAgentGroupReq;
  static deserializeBinaryFromReader(message: CreateAgentGroupReq, reader: jspb.BinaryReader): CreateAgentGroupReq;
}

export namespace CreateAgentGroupReq {
  export type AsObject = {
    agentGroup?: AgentGroup.AsObject,
  }
}

export class CreateAgentGroupRes extends jspb.Message {
  getAgentGroupSid(): number;
  setAgentGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAgentGroupRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAgentGroupRes): CreateAgentGroupRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAgentGroupRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAgentGroupRes;
  static deserializeBinaryFromReader(message: CreateAgentGroupRes, reader: jspb.BinaryReader): CreateAgentGroupRes;
}

export namespace CreateAgentGroupRes {
  export type AsObject = {
    agentGroupSid: number,
  }
}

export class ListAgentScheduleGroupsRequest extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): ParentEntity | undefined;
  setEntity(value?: ParentEntity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentScheduleGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentScheduleGroupsRequest): ListAgentScheduleGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentScheduleGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentScheduleGroupsRequest;
  static deserializeBinaryFromReader(message: ListAgentScheduleGroupsRequest, reader: jspb.BinaryReader): ListAgentScheduleGroupsRequest;
}

export namespace ListAgentScheduleGroupsRequest {
  export type AsObject = {
    entity?: ParentEntity.AsObject,
  }
}

export class ListAgentScheduleGroupsResponse extends jspb.Message {
  clearAgentGroupsList(): void;
  getAgentGroupsList(): Array<AgentGroup>;
  setAgentGroupsList(value: Array<AgentGroup>): void;
  addAgentGroups(value?: AgentGroup, index?: number): AgentGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentScheduleGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentScheduleGroupsResponse): ListAgentScheduleGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentScheduleGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentScheduleGroupsResponse;
  static deserializeBinaryFromReader(message: ListAgentScheduleGroupsResponse, reader: jspb.BinaryReader): ListAgentScheduleGroupsResponse;
}

export namespace ListAgentScheduleGroupsResponse {
  export type AsObject = {
    agentGroupsList: Array<AgentGroup.AsObject>,
  }
}

export class UpdateAgentGroupReq extends jspb.Message {
  hasAgentGroup(): boolean;
  clearAgentGroup(): void;
  getAgentGroup(): AgentGroup | undefined;
  setAgentGroup(value?: AgentGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentGroupReq): UpdateAgentGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentGroupReq;
  static deserializeBinaryFromReader(message: UpdateAgentGroupReq, reader: jspb.BinaryReader): UpdateAgentGroupReq;
}

export namespace UpdateAgentGroupReq {
  export type AsObject = {
    agentGroup?: AgentGroup.AsObject,
  }
}

export class UpdateAgentGroupRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentGroupRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentGroupRes): UpdateAgentGroupRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentGroupRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentGroupRes;
  static deserializeBinaryFromReader(message: UpdateAgentGroupRes, reader: jspb.BinaryReader): UpdateAgentGroupRes;
}

export namespace UpdateAgentGroupRes {
  export type AsObject = {
  }
}

export class WFMAgent extends jspb.Message {
  getWfmAgentSid(): number;
  setWfmAgentSid(value: number): void;

  hasTcnAgentSid(): boolean;
  clearTcnAgentSid(): void;
  getTcnAgentSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTcnAgentSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getName(): string;
  setName(value: string): void;

  hasDatetimeSetToInactive(): boolean;
  clearDatetimeSetToInactive(): void;
  getDatetimeSetToInactive(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDatetimeSetToInactive(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearMemberConstraintRulesList(): void;
  getMemberConstraintRulesList(): Array<ConstraintRule>;
  setMemberConstraintRulesList(value: Array<ConstraintRule>): void;
  addMemberConstraintRules(value?: ConstraintRule, index?: number): ConstraintRule;

  clearMemberSkillProficienciesList(): void;
  getMemberSkillProficienciesList(): Array<SkillProficiency>;
  setMemberSkillProficienciesList(value: Array<SkillProficiency>): void;
  addMemberSkillProficiencies(value?: SkillProficiency, index?: number): SkillProficiency;

  clearMemberAgentAvailabilityPatternsList(): void;
  getMemberAgentAvailabilityPatternsList(): Array<AgentAvailabilityPattern>;
  setMemberAgentAvailabilityPatternsList(value: Array<AgentAvailabilityPattern>): void;
  addMemberAgentAvailabilityPatterns(value?: AgentAvailabilityPattern, index?: number): AgentAvailabilityPattern;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTcnAgentIsEnabled(): boolean;
  setTcnAgentIsEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WFMAgent.AsObject;
  static toObject(includeInstance: boolean, msg: WFMAgent): WFMAgent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WFMAgent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WFMAgent;
  static deserializeBinaryFromReader(message: WFMAgent, reader: jspb.BinaryReader): WFMAgent;
}

export namespace WFMAgent {
  export type AsObject = {
    wfmAgentSid: number,
    tcnAgentSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name: string,
    datetimeSetToInactive?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    memberConstraintRulesList: Array<ConstraintRule.AsObject>,
    memberSkillProficienciesList: Array<SkillProficiency.AsObject>,
    memberAgentAvailabilityPatternsList: Array<AgentAvailabilityPattern.AsObject>,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    tcnAgentIsEnabled: boolean,
  }
}

export class CreateUnassignedWFMAgentRequest extends jspb.Message {
  hasWfmAgentSidToCopyAgentGroupAssociations(): boolean;
  clearWfmAgentSidToCopyAgentGroupAssociations(): void;
  getWfmAgentSidToCopyAgentGroupAssociations(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setWfmAgentSidToCopyAgentGroupAssociations(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUnassignedWFMAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUnassignedWFMAgentRequest): CreateUnassignedWFMAgentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUnassignedWFMAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUnassignedWFMAgentRequest;
  static deserializeBinaryFromReader(message: CreateUnassignedWFMAgentRequest, reader: jspb.BinaryReader): CreateUnassignedWFMAgentRequest;
}

export namespace CreateUnassignedWFMAgentRequest {
  export type AsObject = {
    wfmAgentSidToCopyAgentGroupAssociations?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name: string,
  }
}

export class CreateUnassignedWFMAgentResponse extends jspb.Message {
  getWfmAgentSid(): number;
  setWfmAgentSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUnassignedWFMAgentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUnassignedWFMAgentResponse): CreateUnassignedWFMAgentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUnassignedWFMAgentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUnassignedWFMAgentResponse;
  static deserializeBinaryFromReader(message: CreateUnassignedWFMAgentResponse, reader: jspb.BinaryReader): CreateUnassignedWFMAgentResponse;
}

export namespace CreateUnassignedWFMAgentResponse {
  export type AsObject = {
    wfmAgentSid: number,
  }
}

export class UpdateWFMAgentReq extends jspb.Message {
  hasWfmAgent(): boolean;
  clearWfmAgent(): void;
  getWfmAgent(): WFMAgent | undefined;
  setWfmAgent(value?: WFMAgent): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWFMAgentReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWFMAgentReq): UpdateWFMAgentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateWFMAgentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWFMAgentReq;
  static deserializeBinaryFromReader(message: UpdateWFMAgentReq, reader: jspb.BinaryReader): UpdateWFMAgentReq;
}

export namespace UpdateWFMAgentReq {
  export type AsObject = {
    wfmAgent?: WFMAgent.AsObject,
  }
}

export class UpdateWFMAgentRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWFMAgentRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWFMAgentRes): UpdateWFMAgentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateWFMAgentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWFMAgentRes;
  static deserializeBinaryFromReader(message: UpdateWFMAgentRes, reader: jspb.BinaryReader): UpdateWFMAgentRes;
}

export namespace UpdateWFMAgentRes {
  export type AsObject = {
  }
}

export class ListAllWFMAgentsReq extends jspb.Message {
  getIncludeInactive(): boolean;
  setIncludeInactive(value: boolean): void;

  getIncludeSkillProficiencies(): boolean;
  setIncludeSkillProficiencies(value: boolean): void;

  getIncludeAgentGroups(): boolean;
  setIncludeAgentGroups(value: boolean): void;

  getAgentGroupScheduleScenarioSid(): number;
  setAgentGroupScheduleScenarioSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllWFMAgentsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllWFMAgentsReq): ListAllWFMAgentsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAllWFMAgentsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllWFMAgentsReq;
  static deserializeBinaryFromReader(message: ListAllWFMAgentsReq, reader: jspb.BinaryReader): ListAllWFMAgentsReq;
}

export namespace ListAllWFMAgentsReq {
  export type AsObject = {
    includeInactive: boolean,
    includeSkillProficiencies: boolean,
    includeAgentGroups: boolean,
    agentGroupScheduleScenarioSid: number,
  }
}

export class ListAllWFMAgentsRes extends jspb.Message {
  clearWfmAgentsList(): void;
  getWfmAgentsList(): Array<WFMAgent>;
  setWfmAgentsList(value: Array<WFMAgent>): void;
  addWfmAgents(value?: WFMAgent, index?: number): WFMAgent;

  clearAgentGroupsByAgentList(): void;
  getAgentGroupsByAgentList(): Array<ListAllWFMAgentsRes.AgentGroupsByAgent>;
  setAgentGroupsByAgentList(value: Array<ListAllWFMAgentsRes.AgentGroupsByAgent>): void;
  addAgentGroupsByAgent(value?: ListAllWFMAgentsRes.AgentGroupsByAgent, index?: number): ListAllWFMAgentsRes.AgentGroupsByAgent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllWFMAgentsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllWFMAgentsRes): ListAllWFMAgentsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAllWFMAgentsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllWFMAgentsRes;
  static deserializeBinaryFromReader(message: ListAllWFMAgentsRes, reader: jspb.BinaryReader): ListAllWFMAgentsRes;
}

export namespace ListAllWFMAgentsRes {
  export type AsObject = {
    wfmAgentsList: Array<WFMAgent.AsObject>,
    agentGroupsByAgentList: Array<ListAllWFMAgentsRes.AgentGroupsByAgent.AsObject>,
  }

  export class AgentGroupsByAgent extends jspb.Message {
    clearAgentGroupsList(): void;
    getAgentGroupsList(): Array<AgentGroup>;
    setAgentGroupsList(value: Array<AgentGroup>): void;
    addAgentGroups(value?: AgentGroup, index?: number): AgentGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentGroupsByAgent.AsObject;
    static toObject(includeInstance: boolean, msg: AgentGroupsByAgent): AgentGroupsByAgent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentGroupsByAgent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentGroupsByAgent;
    static deserializeBinaryFromReader(message: AgentGroupsByAgent, reader: jspb.BinaryReader): AgentGroupsByAgent;
  }

  export namespace AgentGroupsByAgent {
    export type AsObject = {
      agentGroupsList: Array<AgentGroup.AsObject>,
    }
  }
}

export class ListCandidateWFMAgentsReq extends jspb.Message {
  getAgentGroupSid(): number;
  setAgentGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCandidateWFMAgentsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListCandidateWFMAgentsReq): ListCandidateWFMAgentsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCandidateWFMAgentsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCandidateWFMAgentsReq;
  static deserializeBinaryFromReader(message: ListCandidateWFMAgentsReq, reader: jspb.BinaryReader): ListCandidateWFMAgentsReq;
}

export namespace ListCandidateWFMAgentsReq {
  export type AsObject = {
    agentGroupSid: number,
  }
}

export class ListCandidateWFMAgentsRes extends jspb.Message {
  clearWfmAgentsList(): void;
  getWfmAgentsList(): Array<WFMAgent>;
  setWfmAgentsList(value: Array<WFMAgent>): void;
  addWfmAgents(value?: WFMAgent, index?: number): WFMAgent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCandidateWFMAgentsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListCandidateWFMAgentsRes): ListCandidateWFMAgentsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCandidateWFMAgentsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCandidateWFMAgentsRes;
  static deserializeBinaryFromReader(message: ListCandidateWFMAgentsRes, reader: jspb.BinaryReader): ListCandidateWFMAgentsRes;
}

export namespace ListCandidateWFMAgentsRes {
  export type AsObject = {
    wfmAgentsList: Array<WFMAgent.AsObject>,
  }
}

export class ListUngroupedWFMAgentsReq extends jspb.Message {
  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  hasCreatedAfterDatetime(): boolean;
  clearCreatedAfterDatetime(): void;
  getCreatedAfterDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAfterDatetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIncludeSkillProficiencies(): boolean;
  setIncludeSkillProficiencies(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUngroupedWFMAgentsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListUngroupedWFMAgentsReq): ListUngroupedWFMAgentsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUngroupedWFMAgentsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUngroupedWFMAgentsReq;
  static deserializeBinaryFromReader(message: ListUngroupedWFMAgentsReq, reader: jspb.BinaryReader): ListUngroupedWFMAgentsReq;
}

export namespace ListUngroupedWFMAgentsReq {
  export type AsObject = {
    scheduleScenarioSid: number,
    createdAfterDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    includeSkillProficiencies: boolean,
  }
}

export class ListUngroupedWFMAgentsRes extends jspb.Message {
  clearWfmAgentsList(): void;
  getWfmAgentsList(): Array<WFMAgent>;
  setWfmAgentsList(value: Array<WFMAgent>): void;
  addWfmAgents(value?: WFMAgent, index?: number): WFMAgent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUngroupedWFMAgentsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListUngroupedWFMAgentsRes): ListUngroupedWFMAgentsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUngroupedWFMAgentsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUngroupedWFMAgentsRes;
  static deserializeBinaryFromReader(message: ListUngroupedWFMAgentsRes, reader: jspb.BinaryReader): ListUngroupedWFMAgentsRes;
}

export namespace ListUngroupedWFMAgentsRes {
  export type AsObject = {
    wfmAgentsList: Array<WFMAgent.AsObject>,
  }
}

export class ListWFMAgentSidsReq extends jspb.Message {
  clearTcnAgentSidsList(): void;
  getTcnAgentSidsList(): Array<number>;
  setTcnAgentSidsList(value: Array<number>): void;
  addTcnAgentSids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWFMAgentSidsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListWFMAgentSidsReq): ListWFMAgentSidsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWFMAgentSidsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWFMAgentSidsReq;
  static deserializeBinaryFromReader(message: ListWFMAgentSidsReq, reader: jspb.BinaryReader): ListWFMAgentSidsReq;
}

export namespace ListWFMAgentSidsReq {
  export type AsObject = {
    tcnAgentSidsList: Array<number>,
  }
}

export class ListWFMAgentSidsRes extends jspb.Message {
  getSidsMap(): jspb.Map<number, number>;
  clearSidsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWFMAgentSidsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListWFMAgentSidsRes): ListWFMAgentSidsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWFMAgentSidsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWFMAgentSidsRes;
  static deserializeBinaryFromReader(message: ListWFMAgentSidsRes, reader: jspb.BinaryReader): ListWFMAgentSidsRes;
}

export namespace ListWFMAgentSidsRes {
  export type AsObject = {
    sidsMap: Array<[number, number]>,
  }
}

export class ListUnassignedWFMAgentsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUnassignedWFMAgentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUnassignedWFMAgentsRequest): ListUnassignedWFMAgentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUnassignedWFMAgentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUnassignedWFMAgentsRequest;
  static deserializeBinaryFromReader(message: ListUnassignedWFMAgentsRequest, reader: jspb.BinaryReader): ListUnassignedWFMAgentsRequest;
}

export namespace ListUnassignedWFMAgentsRequest {
  export type AsObject = {
  }
}

export class ListUnassignedWFMAgentsResponse extends jspb.Message {
  clearWfmAgentsList(): void;
  getWfmAgentsList(): Array<WFMAgent>;
  setWfmAgentsList(value: Array<WFMAgent>): void;
  addWfmAgents(value?: WFMAgent, index?: number): WFMAgent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUnassignedWFMAgentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUnassignedWFMAgentsResponse): ListUnassignedWFMAgentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUnassignedWFMAgentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUnassignedWFMAgentsResponse;
  static deserializeBinaryFromReader(message: ListUnassignedWFMAgentsResponse, reader: jspb.BinaryReader): ListUnassignedWFMAgentsResponse;
}

export namespace ListUnassignedWFMAgentsResponse {
  export type AsObject = {
    wfmAgentsList: Array<WFMAgent.AsObject>,
  }
}

export class ListWFMAgentsAssociatedWithAgentGroupReq extends jspb.Message {
  getAgentGroupSid(): number;
  setAgentGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWFMAgentsAssociatedWithAgentGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListWFMAgentsAssociatedWithAgentGroupReq): ListWFMAgentsAssociatedWithAgentGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWFMAgentsAssociatedWithAgentGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWFMAgentsAssociatedWithAgentGroupReq;
  static deserializeBinaryFromReader(message: ListWFMAgentsAssociatedWithAgentGroupReq, reader: jspb.BinaryReader): ListWFMAgentsAssociatedWithAgentGroupReq;
}

export namespace ListWFMAgentsAssociatedWithAgentGroupReq {
  export type AsObject = {
    agentGroupSid: number,
  }
}

export class ListWFMAgentsAssociatedWithAgentGroupRes extends jspb.Message {
  clearWfmAgentSidsList(): void;
  getWfmAgentSidsList(): Array<number>;
  setWfmAgentSidsList(value: Array<number>): void;
  addWfmAgentSids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWFMAgentsAssociatedWithAgentGroupRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListWFMAgentsAssociatedWithAgentGroupRes): ListWFMAgentsAssociatedWithAgentGroupRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWFMAgentsAssociatedWithAgentGroupRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWFMAgentsAssociatedWithAgentGroupRes;
  static deserializeBinaryFromReader(message: ListWFMAgentsAssociatedWithAgentGroupRes, reader: jspb.BinaryReader): ListWFMAgentsAssociatedWithAgentGroupRes;
}

export namespace ListWFMAgentsAssociatedWithAgentGroupRes {
  export type AsObject = {
    wfmAgentSidsList: Array<number>,
  }
}

export class BuildAgentDiagnosticsReq extends jspb.Message {
  getWfmAgentSid(): number;
  setWfmAgentSid(value: number): void;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  getAgentGroupSid(): number;
  setAgentGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildAgentDiagnosticsReq.AsObject;
  static toObject(includeInstance: boolean, msg: BuildAgentDiagnosticsReq): BuildAgentDiagnosticsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildAgentDiagnosticsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildAgentDiagnosticsReq;
  static deserializeBinaryFromReader(message: BuildAgentDiagnosticsReq, reader: jspb.BinaryReader): BuildAgentDiagnosticsReq;
}

export namespace BuildAgentDiagnosticsReq {
  export type AsObject = {
    wfmAgentSid: number,
    scheduleScenarioSid: number,
    agentGroupSid: number,
  }
}

export class BuildAgentDiagnosticsRes extends jspb.Message {
  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<Diagnostics>;
  setDiagnosticsList(value: Array<Diagnostics>): void;
  addDiagnostics(value?: Diagnostics, index?: number): Diagnostics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildAgentDiagnosticsRes.AsObject;
  static toObject(includeInstance: boolean, msg: BuildAgentDiagnosticsRes): BuildAgentDiagnosticsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildAgentDiagnosticsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildAgentDiagnosticsRes;
  static deserializeBinaryFromReader(message: BuildAgentDiagnosticsRes, reader: jspb.BinaryReader): BuildAgentDiagnosticsRes;
}

export namespace BuildAgentDiagnosticsRes {
  export type AsObject = {
    diagnosticsList: Array<Diagnostics.AsObject>,
  }
}

export class CreateWFMAgentMembershipsReq extends jspb.Message {
  clearWfmAgentSidsList(): void;
  getWfmAgentSidsList(): Array<number>;
  setWfmAgentSidsList(value: Array<number>): void;
  addWfmAgentSids(value: number, index?: number): number;

  getAgentGroupSid(): number;
  setAgentGroupSid(value: number): void;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWFMAgentMembershipsReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWFMAgentMembershipsReq): CreateWFMAgentMembershipsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateWFMAgentMembershipsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWFMAgentMembershipsReq;
  static deserializeBinaryFromReader(message: CreateWFMAgentMembershipsReq, reader: jspb.BinaryReader): CreateWFMAgentMembershipsReq;
}

export namespace CreateWFMAgentMembershipsReq {
  export type AsObject = {
    wfmAgentSidsList: Array<number>,
    agentGroupSid: number,
    scheduleScenarioSid: number,
  }
}

export class CreateWFMAgentMembershipsRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWFMAgentMembershipsRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWFMAgentMembershipsRes): CreateWFMAgentMembershipsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateWFMAgentMembershipsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWFMAgentMembershipsRes;
  static deserializeBinaryFromReader(message: CreateWFMAgentMembershipsRes, reader: jspb.BinaryReader): CreateWFMAgentMembershipsRes;
}

export namespace CreateWFMAgentMembershipsRes {
  export type AsObject = {
  }
}

export class CopyWFMAgentMembershipsRequest extends jspb.Message {
  getOriginatingWfmAgentSid(): number;
  setOriginatingWfmAgentSid(value: number): void;

  getTargetWfmAgentSid(): number;
  setTargetWfmAgentSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyWFMAgentMembershipsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CopyWFMAgentMembershipsRequest): CopyWFMAgentMembershipsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyWFMAgentMembershipsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyWFMAgentMembershipsRequest;
  static deserializeBinaryFromReader(message: CopyWFMAgentMembershipsRequest, reader: jspb.BinaryReader): CopyWFMAgentMembershipsRequest;
}

export namespace CopyWFMAgentMembershipsRequest {
  export type AsObject = {
    originatingWfmAgentSid: number,
    targetWfmAgentSid: number,
  }
}

export class CopyWFMAgentMembershipsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyWFMAgentMembershipsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CopyWFMAgentMembershipsResponse): CopyWFMAgentMembershipsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyWFMAgentMembershipsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyWFMAgentMembershipsResponse;
  static deserializeBinaryFromReader(message: CopyWFMAgentMembershipsResponse, reader: jspb.BinaryReader): CopyWFMAgentMembershipsResponse;
}

export namespace CopyWFMAgentMembershipsResponse {
  export type AsObject = {
  }
}

export class DeleteWFMAgentMembershipsReq extends jspb.Message {
  clearWfmAgentSidsList(): void;
  getWfmAgentSidsList(): Array<number>;
  setWfmAgentSidsList(value: Array<number>): void;
  addWfmAgentSids(value: number, index?: number): number;

  getAgentGroupSid(): number;
  setAgentGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWFMAgentMembershipsReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWFMAgentMembershipsReq): DeleteWFMAgentMembershipsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteWFMAgentMembershipsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWFMAgentMembershipsReq;
  static deserializeBinaryFromReader(message: DeleteWFMAgentMembershipsReq, reader: jspb.BinaryReader): DeleteWFMAgentMembershipsReq;
}

export namespace DeleteWFMAgentMembershipsReq {
  export type AsObject = {
    wfmAgentSidsList: Array<number>,
    agentGroupSid: number,
  }
}

export class DeleteWFMAgentMembershipsRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWFMAgentMembershipsRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWFMAgentMembershipsRes): DeleteWFMAgentMembershipsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteWFMAgentMembershipsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWFMAgentMembershipsRes;
  static deserializeBinaryFromReader(message: DeleteWFMAgentMembershipsRes, reader: jspb.BinaryReader): DeleteWFMAgentMembershipsRes;
}

export namespace DeleteWFMAgentMembershipsRes {
  export type AsObject = {
  }
}

export class DeleteWFMAgentsMembershipsReq extends jspb.Message {
  clearWfmAgentSidsList(): void;
  getWfmAgentSidsList(): Array<number>;
  setWfmAgentSidsList(value: Array<number>): void;
  addWfmAgentSids(value: number, index?: number): number;

  clearAgentGroupSidsList(): void;
  getAgentGroupSidsList(): Array<number>;
  setAgentGroupSidsList(value: Array<number>): void;
  addAgentGroupSids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWFMAgentsMembershipsReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWFMAgentsMembershipsReq): DeleteWFMAgentsMembershipsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteWFMAgentsMembershipsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWFMAgentsMembershipsReq;
  static deserializeBinaryFromReader(message: DeleteWFMAgentsMembershipsReq, reader: jspb.BinaryReader): DeleteWFMAgentsMembershipsReq;
}

export namespace DeleteWFMAgentsMembershipsReq {
  export type AsObject = {
    wfmAgentSidsList: Array<number>,
    agentGroupSidsList: Array<number>,
  }
}

export class DeleteWFMAgentsMembershipsRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWFMAgentsMembershipsRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWFMAgentsMembershipsRes): DeleteWFMAgentsMembershipsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteWFMAgentsMembershipsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWFMAgentsMembershipsRes;
  static deserializeBinaryFromReader(message: DeleteWFMAgentsMembershipsRes, reader: jspb.BinaryReader): DeleteWFMAgentsMembershipsRes;
}

export namespace DeleteWFMAgentsMembershipsRes {
  export type AsObject = {
  }
}

export class RemoveAgentFromFutureShiftsRequest extends jspb.Message {
  getWfmAgentSidToRemove(): number;
  setWfmAgentSidToRemove(value: number): void;

  getReplaceWithNewUnassignedAgent(): boolean;
  setReplaceWithNewUnassignedAgent(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveAgentFromFutureShiftsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveAgentFromFutureShiftsRequest): RemoveAgentFromFutureShiftsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveAgentFromFutureShiftsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveAgentFromFutureShiftsRequest;
  static deserializeBinaryFromReader(message: RemoveAgentFromFutureShiftsRequest, reader: jspb.BinaryReader): RemoveAgentFromFutureShiftsRequest;
}

export namespace RemoveAgentFromFutureShiftsRequest {
  export type AsObject = {
    wfmAgentSidToRemove: number,
    replaceWithNewUnassignedAgent: boolean,
  }
}

export class RemoveAgentFromFutureShiftsResponse extends jspb.Message {
  hasUnassignedAgentSid(): boolean;
  clearUnassignedAgentSid(): void;
  getUnassignedAgentSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setUnassignedAgentSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveAgentFromFutureShiftsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveAgentFromFutureShiftsResponse): RemoveAgentFromFutureShiftsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveAgentFromFutureShiftsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveAgentFromFutureShiftsResponse;
  static deserializeBinaryFromReader(message: RemoveAgentFromFutureShiftsResponse, reader: jspb.BinaryReader): RemoveAgentFromFutureShiftsResponse;
}

export namespace RemoveAgentFromFutureShiftsResponse {
  export type AsObject = {
    unassignedAgentSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class DOWPlacement extends jspb.Message {
  getStartMinute(): number;
  setStartMinute(value: number): void;

  getEndMinute(): number;
  setEndMinute(value: number): void;

  getPlacementType(): api_commons_wfm_pb.DOWPlacementTypeMap[keyof api_commons_wfm_pb.DOWPlacementTypeMap];
  setPlacementType(value: api_commons_wfm_pb.DOWPlacementTypeMap[keyof api_commons_wfm_pb.DOWPlacementTypeMap]): void;

  getDayOfWeek(): api_commons_wfm_pb.DayOfWeekMap[keyof api_commons_wfm_pb.DayOfWeekMap];
  setDayOfWeek(value: api_commons_wfm_pb.DayOfWeekMap[keyof api_commons_wfm_pb.DayOfWeekMap]): void;

  getWeekNumber(): number;
  setWeekNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DOWPlacement.AsObject;
  static toObject(includeInstance: boolean, msg: DOWPlacement): DOWPlacement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DOWPlacement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DOWPlacement;
  static deserializeBinaryFromReader(message: DOWPlacement, reader: jspb.BinaryReader): DOWPlacement;
}

export namespace DOWPlacement {
  export type AsObject = {
    startMinute: number,
    endMinute: number,
    placementType: api_commons_wfm_pb.DOWPlacementTypeMap[keyof api_commons_wfm_pb.DOWPlacementTypeMap],
    dayOfWeek: api_commons_wfm_pb.DayOfWeekMap[keyof api_commons_wfm_pb.DayOfWeekMap],
    weekNumber: number,
  }
}

export class ShiftTemplate extends jspb.Message {
  getShiftTemplateSid(): number;
  setShiftTemplateSid(value: number): void;

  getProgramNodeSid(): number;
  setProgramNodeSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasDatetimeSetToInactive(): boolean;
  clearDatetimeSetToInactive(): void;
  getDatetimeSetToInactive(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDatetimeSetToInactive(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIsTourshift(): boolean;
  setIsTourshift(value: boolean): void;

  getMinShiftWidth(): number;
  setMinShiftWidth(value: number): void;

  getMaxShiftWidth(): number;
  setMaxShiftWidth(value: number): void;

  getMinAgents(): number;
  setMinAgents(value: number): void;

  getMaxAgents(): number;
  setMaxAgents(value: number): void;

  getShiftStartBoundaryMinutes(): number;
  setShiftStartBoundaryMinutes(value: number): void;

  getSameTimeEachDow(): boolean;
  setSameTimeEachDow(value: boolean): void;

  getSameLengthPerAgent(): boolean;
  setSameLengthPerAgent(value: boolean): void;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  clearMemberPlacementRulesList(): void;
  getMemberPlacementRulesList(): Array<PlacementRule>;
  setMemberPlacementRulesList(value: Array<PlacementRule>): void;
  addMemberPlacementRules(value?: PlacementRule, index?: number): PlacementRule;

  clearDowPlacementsList(): void;
  getDowPlacementsList(): Array<DOWPlacement>;
  setDowPlacementsList(value: Array<DOWPlacement>): void;
  addDowPlacements(value?: DOWPlacement, index?: number): DOWPlacement;

  clearMemberAgentGroupsList(): void;
  getMemberAgentGroupsList(): Array<AgentGroup>;
  setMemberAgentGroupsList(value: Array<AgentGroup>): void;
  addMemberAgentGroups(value?: AgentGroup, index?: number): AgentGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShiftTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: ShiftTemplate): ShiftTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShiftTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShiftTemplate;
  static deserializeBinaryFromReader(message: ShiftTemplate, reader: jspb.BinaryReader): ShiftTemplate;
}

export namespace ShiftTemplate {
  export type AsObject = {
    shiftTemplateSid: number,
    programNodeSid: number,
    name: string,
    description: string,
    datetimeSetToInactive?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isTourshift: boolean,
    minShiftWidth: number,
    maxShiftWidth: number,
    minAgents: number,
    maxAgents: number,
    shiftStartBoundaryMinutes: number,
    sameTimeEachDow: boolean,
    sameLengthPerAgent: boolean,
    scheduleScenarioSid: number,
    memberPlacementRulesList: Array<PlacementRule.AsObject>,
    dowPlacementsList: Array<DOWPlacement.AsObject>,
    memberAgentGroupsList: Array<AgentGroup.AsObject>,
  }
}

export class CreateShiftTemplateReq extends jspb.Message {
  hasShiftTemplate(): boolean;
  clearShiftTemplate(): void;
  getShiftTemplate(): ShiftTemplate | undefined;
  setShiftTemplate(value?: ShiftTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateShiftTemplateReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateShiftTemplateReq): CreateShiftTemplateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateShiftTemplateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateShiftTemplateReq;
  static deserializeBinaryFromReader(message: CreateShiftTemplateReq, reader: jspb.BinaryReader): CreateShiftTemplateReq;
}

export namespace CreateShiftTemplateReq {
  export type AsObject = {
    shiftTemplate?: ShiftTemplate.AsObject,
  }
}

export class CreateShiftTemplateRes extends jspb.Message {
  getShiftTemplateSid(): number;
  setShiftTemplateSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateShiftTemplateRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateShiftTemplateRes): CreateShiftTemplateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateShiftTemplateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateShiftTemplateRes;
  static deserializeBinaryFromReader(message: CreateShiftTemplateRes, reader: jspb.BinaryReader): CreateShiftTemplateRes;
}

export namespace CreateShiftTemplateRes {
  export type AsObject = {
    shiftTemplateSid: number,
  }
}

export class UpdateShiftTemplateReq extends jspb.Message {
  hasShiftTemplate(): boolean;
  clearShiftTemplate(): void;
  getShiftTemplate(): ShiftTemplate | undefined;
  setShiftTemplate(value?: ShiftTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateShiftTemplateReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateShiftTemplateReq): UpdateShiftTemplateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateShiftTemplateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateShiftTemplateReq;
  static deserializeBinaryFromReader(message: UpdateShiftTemplateReq, reader: jspb.BinaryReader): UpdateShiftTemplateReq;
}

export namespace UpdateShiftTemplateReq {
  export type AsObject = {
    shiftTemplate?: ShiftTemplate.AsObject,
  }
}

export class UpdateShiftTemplateRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateShiftTemplateRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateShiftTemplateRes): UpdateShiftTemplateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateShiftTemplateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateShiftTemplateRes;
  static deserializeBinaryFromReader(message: UpdateShiftTemplateRes, reader: jspb.BinaryReader): UpdateShiftTemplateRes;
}

export namespace UpdateShiftTemplateRes {
  export type AsObject = {
  }
}

export class ListShiftTemplatesBySidsReq extends jspb.Message {
  clearShiftTemplateSidsList(): void;
  getShiftTemplateSidsList(): Array<number>;
  setShiftTemplateSidsList(value: Array<number>): void;
  addShiftTemplateSids(value: number, index?: number): number;

  getIncludePlacementRules(): boolean;
  setIncludePlacementRules(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListShiftTemplatesBySidsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListShiftTemplatesBySidsReq): ListShiftTemplatesBySidsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListShiftTemplatesBySidsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListShiftTemplatesBySidsReq;
  static deserializeBinaryFromReader(message: ListShiftTemplatesBySidsReq, reader: jspb.BinaryReader): ListShiftTemplatesBySidsReq;
}

export namespace ListShiftTemplatesBySidsReq {
  export type AsObject = {
    shiftTemplateSidsList: Array<number>,
    includePlacementRules: boolean,
  }
}

export class ListShiftTemplatesBySidsRes extends jspb.Message {
  clearShiftTemplatesList(): void;
  getShiftTemplatesList(): Array<ShiftTemplate>;
  setShiftTemplatesList(value: Array<ShiftTemplate>): void;
  addShiftTemplates(value?: ShiftTemplate, index?: number): ShiftTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListShiftTemplatesBySidsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListShiftTemplatesBySidsRes): ListShiftTemplatesBySidsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListShiftTemplatesBySidsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListShiftTemplatesBySidsRes;
  static deserializeBinaryFromReader(message: ListShiftTemplatesBySidsRes, reader: jspb.BinaryReader): ListShiftTemplatesBySidsRes;
}

export namespace ListShiftTemplatesBySidsRes {
  export type AsObject = {
    shiftTemplatesList: Array<ShiftTemplate.AsObject>,
  }
}

export class BuildShiftTemplateDiagnosticsReq extends jspb.Message {
  getShiftTemplateSid(): number;
  setShiftTemplateSid(value: number): void;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildShiftTemplateDiagnosticsReq.AsObject;
  static toObject(includeInstance: boolean, msg: BuildShiftTemplateDiagnosticsReq): BuildShiftTemplateDiagnosticsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildShiftTemplateDiagnosticsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildShiftTemplateDiagnosticsReq;
  static deserializeBinaryFromReader(message: BuildShiftTemplateDiagnosticsReq, reader: jspb.BinaryReader): BuildShiftTemplateDiagnosticsReq;
}

export namespace BuildShiftTemplateDiagnosticsReq {
  export type AsObject = {
    shiftTemplateSid: number,
    scheduleScenarioSid: number,
  }
}

export class BuildShiftTemplateDiagnosticsRes extends jspb.Message {
  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<Diagnostic>;
  setDiagnosticsList(value: Array<Diagnostic>): void;
  addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildShiftTemplateDiagnosticsRes.AsObject;
  static toObject(includeInstance: boolean, msg: BuildShiftTemplateDiagnosticsRes): BuildShiftTemplateDiagnosticsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildShiftTemplateDiagnosticsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildShiftTemplateDiagnosticsRes;
  static deserializeBinaryFromReader(message: BuildShiftTemplateDiagnosticsRes, reader: jspb.BinaryReader): BuildShiftTemplateDiagnosticsRes;
}

export namespace BuildShiftTemplateDiagnosticsRes {
  export type AsObject = {
    diagnosticsList: Array<Diagnostic.AsObject>,
  }
}

export class PlacementRule extends jspb.Message {
  getPlacementRuleSid(): number;
  setPlacementRuleSid(value: number): void;

  getShiftTemplateSid(): number;
  setShiftTemplateSid(value: number): void;

  getActivityOrder(): number;
  setActivityOrder(value: number): void;

  getMinDurationMinutes(): number;
  setMinDurationMinutes(value: number): void;

  getMaxDurationMinutes(): number;
  setMaxDurationMinutes(value: number): void;

  getSchedulingActivitySid(): number;
  setSchedulingActivitySid(value: number): void;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  hasMemberSchedulingActivity(): boolean;
  clearMemberSchedulingActivity(): void;
  getMemberSchedulingActivity(): SchedulingActivity | undefined;
  setMemberSchedulingActivity(value?: SchedulingActivity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlacementRule.AsObject;
  static toObject(includeInstance: boolean, msg: PlacementRule): PlacementRule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlacementRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlacementRule;
  static deserializeBinaryFromReader(message: PlacementRule, reader: jspb.BinaryReader): PlacementRule;
}

export namespace PlacementRule {
  export type AsObject = {
    placementRuleSid: number,
    shiftTemplateSid: number,
    activityOrder: number,
    minDurationMinutes: number,
    maxDurationMinutes: number,
    schedulingActivitySid: number,
    scheduleScenarioSid: number,
    memberSchedulingActivity?: SchedulingActivity.AsObject,
  }
}

export class CreatePlacementRuleReq extends jspb.Message {
  hasPlacementRule(): boolean;
  clearPlacementRule(): void;
  getPlacementRule(): PlacementRule | undefined;
  setPlacementRule(value?: PlacementRule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePlacementRuleReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePlacementRuleReq): CreatePlacementRuleReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePlacementRuleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePlacementRuleReq;
  static deserializeBinaryFromReader(message: CreatePlacementRuleReq, reader: jspb.BinaryReader): CreatePlacementRuleReq;
}

export namespace CreatePlacementRuleReq {
  export type AsObject = {
    placementRule?: PlacementRule.AsObject,
  }
}

export class CreatePlacementRuleRes extends jspb.Message {
  getPlacementRuleSid(): number;
  setPlacementRuleSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePlacementRuleRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePlacementRuleRes): CreatePlacementRuleRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePlacementRuleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePlacementRuleRes;
  static deserializeBinaryFromReader(message: CreatePlacementRuleRes, reader: jspb.BinaryReader): CreatePlacementRuleRes;
}

export namespace CreatePlacementRuleRes {
  export type AsObject = {
    placementRuleSid: number,
  }
}

export class UpdatePlacementRuleReq extends jspb.Message {
  hasPlacementRule(): boolean;
  clearPlacementRule(): void;
  getPlacementRule(): PlacementRule | undefined;
  setPlacementRule(value?: PlacementRule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePlacementRuleReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePlacementRuleReq): UpdatePlacementRuleReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePlacementRuleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePlacementRuleReq;
  static deserializeBinaryFromReader(message: UpdatePlacementRuleReq, reader: jspb.BinaryReader): UpdatePlacementRuleReq;
}

export namespace UpdatePlacementRuleReq {
  export type AsObject = {
    placementRule?: PlacementRule.AsObject,
  }
}

export class UpdatePlacementRuleRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePlacementRuleRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePlacementRuleRes): UpdatePlacementRuleRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePlacementRuleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePlacementRuleRes;
  static deserializeBinaryFromReader(message: UpdatePlacementRuleRes, reader: jspb.BinaryReader): UpdatePlacementRuleRes;
}

export namespace UpdatePlacementRuleRes {
  export type AsObject = {
  }
}

export class DeletePlacementRuleReq extends jspb.Message {
  getPlacementRuleSid(): number;
  setPlacementRuleSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePlacementRuleReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePlacementRuleReq): DeletePlacementRuleReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePlacementRuleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePlacementRuleReq;
  static deserializeBinaryFromReader(message: DeletePlacementRuleReq, reader: jspb.BinaryReader): DeletePlacementRuleReq;
}

export namespace DeletePlacementRuleReq {
  export type AsObject = {
    placementRuleSid: number,
  }
}

export class DeletePlacementRuleRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePlacementRuleRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePlacementRuleRes): DeletePlacementRuleRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePlacementRuleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePlacementRuleRes;
  static deserializeBinaryFromReader(message: DeletePlacementRuleRes, reader: jspb.BinaryReader): DeletePlacementRuleRes;
}

export namespace DeletePlacementRuleRes {
  export type AsObject = {
  }
}

export class DatetimePattern extends jspb.Message {
  clearWeekMapsList(): void;
  getWeekMapsList(): Array<DatetimePattern.WeekMap>;
  setWeekMapsList(value: Array<DatetimePattern.WeekMap>): void;
  addWeekMaps(value?: DatetimePattern.WeekMap, index?: number): DatetimePattern.WeekMap;

  clearCalendarItemsList(): void;
  getCalendarItemsList(): Array<DatetimePattern.CalendarItem>;
  setCalendarItemsList(value: Array<DatetimePattern.CalendarItem>): void;
  addCalendarItems(value?: DatetimePattern.CalendarItem, index?: number): DatetimePattern.CalendarItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatetimePattern.AsObject;
  static toObject(includeInstance: boolean, msg: DatetimePattern): DatetimePattern.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DatetimePattern, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatetimePattern;
  static deserializeBinaryFromReader(message: DatetimePattern, reader: jspb.BinaryReader): DatetimePattern;
}

export namespace DatetimePattern {
  export type AsObject = {
    weekMapsList: Array<DatetimePattern.WeekMap.AsObject>,
    calendarItemsList: Array<DatetimePattern.CalendarItem.AsObject>,
  }

  export class WeekMap extends jspb.Message {
    hasDatetimeRange(): boolean;
    clearDatetimeRange(): void;
    getDatetimeRange(): api_commons_wfm_pb.DatetimeRange | undefined;
    setDatetimeRange(value?: api_commons_wfm_pb.DatetimeRange): void;

    clearDayMapsList(): void;
    getDayMapsList(): Array<DatetimePattern.WeekMap.WeekMapDOW>;
    setDayMapsList(value: Array<DatetimePattern.WeekMap.WeekMapDOW>): void;
    addDayMaps(value?: DatetimePattern.WeekMap.WeekMapDOW, index?: number): DatetimePattern.WeekMap.WeekMapDOW;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WeekMap.AsObject;
    static toObject(includeInstance: boolean, msg: WeekMap): WeekMap.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WeekMap, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WeekMap;
    static deserializeBinaryFromReader(message: WeekMap, reader: jspb.BinaryReader): WeekMap;
  }

  export namespace WeekMap {
    export type AsObject = {
      datetimeRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
      dayMapsList: Array<DatetimePattern.WeekMap.WeekMapDOW.AsObject>,
    }

    export class WeekMapDOW extends jspb.Message {
      getDayOfWeek(): api_commons_wfm_pb.DayOfWeekMap[keyof api_commons_wfm_pb.DayOfWeekMap];
      setDayOfWeek(value: api_commons_wfm_pb.DayOfWeekMap[keyof api_commons_wfm_pb.DayOfWeekMap]): void;

      getStartMinuteInDay(): number;
      setStartMinuteInDay(value: number): void;

      getEndMinuteInDay(): number;
      setEndMinuteInDay(value: number): void;

      hasValue(): boolean;
      clearValue(): void;
      getValue(): api_commons_wfm_pb.OptionTypes | undefined;
      setValue(value?: api_commons_wfm_pb.OptionTypes): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): WeekMapDOW.AsObject;
      static toObject(includeInstance: boolean, msg: WeekMapDOW): WeekMapDOW.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: WeekMapDOW, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): WeekMapDOW;
      static deserializeBinaryFromReader(message: WeekMapDOW, reader: jspb.BinaryReader): WeekMapDOW;
    }

    export namespace WeekMapDOW {
      export type AsObject = {
        dayOfWeek: api_commons_wfm_pb.DayOfWeekMap[keyof api_commons_wfm_pb.DayOfWeekMap],
        startMinuteInDay: number,
        endMinuteInDay: number,
        value?: api_commons_wfm_pb.OptionTypes.AsObject,
      }
    }
  }

  export class CalendarItem extends jspb.Message {
    hasDatetimeRange(): boolean;
    clearDatetimeRange(): void;
    getDatetimeRange(): api_commons_wfm_pb.DatetimeRange | undefined;
    setDatetimeRange(value?: api_commons_wfm_pb.DatetimeRange): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): api_commons_wfm_pb.OptionTypes | undefined;
    setValue(value?: api_commons_wfm_pb.OptionTypes): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalendarItem.AsObject;
    static toObject(includeInstance: boolean, msg: CalendarItem): CalendarItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalendarItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalendarItem;
    static deserializeBinaryFromReader(message: CalendarItem, reader: jspb.BinaryReader): CalendarItem;
  }

  export namespace CalendarItem {
    export type AsObject = {
      datetimeRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
      value?: api_commons_wfm_pb.OptionTypes.AsObject,
    }
  }
}

export class OpenTimesPattern extends jspb.Message {
  getOpenTimesPatternSid(): number;
  setOpenTimesPatternSid(value: number): void;

  hasParentEntity(): boolean;
  clearParentEntity(): void;
  getParentEntity(): ParentEntity | undefined;
  setParentEntity(value?: ParentEntity): void;

  hasDatetimePattern(): boolean;
  clearDatetimePattern(): void;
  getDatetimePattern(): DatetimePattern | undefined;
  setDatetimePattern(value?: DatetimePattern): void;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenTimesPattern.AsObject;
  static toObject(includeInstance: boolean, msg: OpenTimesPattern): OpenTimesPattern.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenTimesPattern, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenTimesPattern;
  static deserializeBinaryFromReader(message: OpenTimesPattern, reader: jspb.BinaryReader): OpenTimesPattern;
}

export namespace OpenTimesPattern {
  export type AsObject = {
    openTimesPatternSid: number,
    parentEntity?: ParentEntity.AsObject,
    datetimePattern?: DatetimePattern.AsObject,
    scheduleScenarioSid: number,
  }
}

export class CreateOpenTimesPatternReq extends jspb.Message {
  hasOpenTimesPattern(): boolean;
  clearOpenTimesPattern(): void;
  getOpenTimesPattern(): OpenTimesPattern | undefined;
  setOpenTimesPattern(value?: OpenTimesPattern): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOpenTimesPatternReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOpenTimesPatternReq): CreateOpenTimesPatternReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOpenTimesPatternReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOpenTimesPatternReq;
  static deserializeBinaryFromReader(message: CreateOpenTimesPatternReq, reader: jspb.BinaryReader): CreateOpenTimesPatternReq;
}

export namespace CreateOpenTimesPatternReq {
  export type AsObject = {
    openTimesPattern?: OpenTimesPattern.AsObject,
  }
}

export class CreateOpenTimesPatternRes extends jspb.Message {
  getOpenTimesPatternSid(): number;
  setOpenTimesPatternSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOpenTimesPatternRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOpenTimesPatternRes): CreateOpenTimesPatternRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOpenTimesPatternRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOpenTimesPatternRes;
  static deserializeBinaryFromReader(message: CreateOpenTimesPatternRes, reader: jspb.BinaryReader): CreateOpenTimesPatternRes;
}

export namespace CreateOpenTimesPatternRes {
  export type AsObject = {
    openTimesPatternSid: number,
  }
}

export class UpdateOpenTimesPatternReq extends jspb.Message {
  hasOpenTimesPattern(): boolean;
  clearOpenTimesPattern(): void;
  getOpenTimesPattern(): OpenTimesPattern | undefined;
  setOpenTimesPattern(value?: OpenTimesPattern): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOpenTimesPatternReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOpenTimesPatternReq): UpdateOpenTimesPatternReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOpenTimesPatternReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOpenTimesPatternReq;
  static deserializeBinaryFromReader(message: UpdateOpenTimesPatternReq, reader: jspb.BinaryReader): UpdateOpenTimesPatternReq;
}

export namespace UpdateOpenTimesPatternReq {
  export type AsObject = {
    openTimesPattern?: OpenTimesPattern.AsObject,
  }
}

export class UpdateOpenTimesPatternRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOpenTimesPatternRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOpenTimesPatternRes): UpdateOpenTimesPatternRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOpenTimesPatternRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOpenTimesPatternRes;
  static deserializeBinaryFromReader(message: UpdateOpenTimesPatternRes, reader: jspb.BinaryReader): UpdateOpenTimesPatternRes;
}

export namespace UpdateOpenTimesPatternRes {
  export type AsObject = {
  }
}

export class DeleteOpenTimesPatternReq extends jspb.Message {
  getOpenTimesPatternSid(): number;
  setOpenTimesPatternSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOpenTimesPatternReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOpenTimesPatternReq): DeleteOpenTimesPatternReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteOpenTimesPatternReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOpenTimesPatternReq;
  static deserializeBinaryFromReader(message: DeleteOpenTimesPatternReq, reader: jspb.BinaryReader): DeleteOpenTimesPatternReq;
}

export namespace DeleteOpenTimesPatternReq {
  export type AsObject = {
    openTimesPatternSid: number,
  }
}

export class DeleteOpenTimesPatternRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOpenTimesPatternRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOpenTimesPatternRes): DeleteOpenTimesPatternRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteOpenTimesPatternRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOpenTimesPatternRes;
  static deserializeBinaryFromReader(message: DeleteOpenTimesPatternRes, reader: jspb.BinaryReader): DeleteOpenTimesPatternRes;
}

export namespace DeleteOpenTimesPatternRes {
  export type AsObject = {
  }
}

export class GetOpenTimesBitmapsReq extends jspb.Message {
  hasNodeToCheck(): boolean;
  clearNodeToCheck(): void;
  getNodeToCheck(): ParentEntity | undefined;
  setNodeToCheck(value?: ParentEntity): void;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  getIncludeInactive(): boolean;
  setIncludeInactive(value: boolean): void;

  hasDatetimeRange(): boolean;
  clearDatetimeRange(): void;
  getDatetimeRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setDatetimeRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  getBitmapType(): api_commons_wfm_pb.BitmapTypeMap[keyof api_commons_wfm_pb.BitmapTypeMap];
  setBitmapType(value: api_commons_wfm_pb.BitmapTypeMap[keyof api_commons_wfm_pb.BitmapTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOpenTimesBitmapsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetOpenTimesBitmapsReq): GetOpenTimesBitmapsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOpenTimesBitmapsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOpenTimesBitmapsReq;
  static deserializeBinaryFromReader(message: GetOpenTimesBitmapsReq, reader: jspb.BinaryReader): GetOpenTimesBitmapsReq;
}

export namespace GetOpenTimesBitmapsReq {
  export type AsObject = {
    nodeToCheck?: ParentEntity.AsObject,
    scheduleScenarioSid: number,
    includeInactive: boolean,
    datetimeRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    bitmapType: api_commons_wfm_pb.BitmapTypeMap[keyof api_commons_wfm_pb.BitmapTypeMap],
  }
}

export class GetOpenTimesBitmapsRes extends jspb.Message {
  clearInheritedBitmapList(): void;
  getInheritedBitmapList(): Array<api_commons_wfm_pb.OpenTimesOptionMap[keyof api_commons_wfm_pb.OpenTimesOptionMap]>;
  setInheritedBitmapList(value: Array<api_commons_wfm_pb.OpenTimesOptionMap[keyof api_commons_wfm_pb.OpenTimesOptionMap]>): void;
  addInheritedBitmap(value: api_commons_wfm_pb.OpenTimesOptionMap[keyof api_commons_wfm_pb.OpenTimesOptionMap], index?: number): api_commons_wfm_pb.OpenTimesOptionMap[keyof api_commons_wfm_pb.OpenTimesOptionMap];

  clearOwnBitmapList(): void;
  getOwnBitmapList(): Array<api_commons_wfm_pb.OpenTimesOptionMap[keyof api_commons_wfm_pb.OpenTimesOptionMap]>;
  setOwnBitmapList(value: Array<api_commons_wfm_pb.OpenTimesOptionMap[keyof api_commons_wfm_pb.OpenTimesOptionMap]>): void;
  addOwnBitmap(value: api_commons_wfm_pb.OpenTimesOptionMap[keyof api_commons_wfm_pb.OpenTimesOptionMap], index?: number): api_commons_wfm_pb.OpenTimesOptionMap[keyof api_commons_wfm_pb.OpenTimesOptionMap];

  clearResultingBitmapList(): void;
  getResultingBitmapList(): Array<api_commons_wfm_pb.OpenTimesOptionMap[keyof api_commons_wfm_pb.OpenTimesOptionMap]>;
  setResultingBitmapList(value: Array<api_commons_wfm_pb.OpenTimesOptionMap[keyof api_commons_wfm_pb.OpenTimesOptionMap]>): void;
  addResultingBitmap(value: api_commons_wfm_pb.OpenTimesOptionMap[keyof api_commons_wfm_pb.OpenTimesOptionMap], index?: number): api_commons_wfm_pb.OpenTimesOptionMap[keyof api_commons_wfm_pb.OpenTimesOptionMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOpenTimesBitmapsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetOpenTimesBitmapsRes): GetOpenTimesBitmapsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOpenTimesBitmapsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOpenTimesBitmapsRes;
  static deserializeBinaryFromReader(message: GetOpenTimesBitmapsRes, reader: jspb.BinaryReader): GetOpenTimesBitmapsRes;
}

export namespace GetOpenTimesBitmapsRes {
  export type AsObject = {
    inheritedBitmapList: Array<api_commons_wfm_pb.OpenTimesOptionMap[keyof api_commons_wfm_pb.OpenTimesOptionMap]>,
    ownBitmapList: Array<api_commons_wfm_pb.OpenTimesOptionMap[keyof api_commons_wfm_pb.OpenTimesOptionMap]>,
    resultingBitmapList: Array<api_commons_wfm_pb.OpenTimesOptionMap[keyof api_commons_wfm_pb.OpenTimesOptionMap]>,
  }
}

export class ListOpenDateRangesForNodeOpenTimesBitmapsRequest extends jspb.Message {
  hasDatetimeRange(): boolean;
  clearDatetimeRange(): void;
  getDatetimeRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setDatetimeRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  hasNodeSelector(): boolean;
  clearNodeSelector(): void;
  getNodeSelector(): ParentEntity | undefined;
  setNodeSelector(value?: ParentEntity): void;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOpenDateRangesForNodeOpenTimesBitmapsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOpenDateRangesForNodeOpenTimesBitmapsRequest): ListOpenDateRangesForNodeOpenTimesBitmapsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOpenDateRangesForNodeOpenTimesBitmapsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOpenDateRangesForNodeOpenTimesBitmapsRequest;
  static deserializeBinaryFromReader(message: ListOpenDateRangesForNodeOpenTimesBitmapsRequest, reader: jspb.BinaryReader): ListOpenDateRangesForNodeOpenTimesBitmapsRequest;
}

export namespace ListOpenDateRangesForNodeOpenTimesBitmapsRequest {
  export type AsObject = {
    datetimeRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    nodeSelector?: ParentEntity.AsObject,
    scheduleScenarioSid: number,
  }
}

export class ListOpenDateRangesForNodeOpenTimesBitmapsResponse extends jspb.Message {
  clearOpenCloseRangesList(): void;
  getOpenCloseRangesList(): Array<api_commons_wfm_pb.DatetimeRange>;
  setOpenCloseRangesList(value: Array<api_commons_wfm_pb.DatetimeRange>): void;
  addOpenCloseRanges(value?: api_commons_wfm_pb.DatetimeRange, index?: number): api_commons_wfm_pb.DatetimeRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOpenDateRangesForNodeOpenTimesBitmapsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOpenDateRangesForNodeOpenTimesBitmapsResponse): ListOpenDateRangesForNodeOpenTimesBitmapsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOpenDateRangesForNodeOpenTimesBitmapsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOpenDateRangesForNodeOpenTimesBitmapsResponse;
  static deserializeBinaryFromReader(message: ListOpenDateRangesForNodeOpenTimesBitmapsResponse, reader: jspb.BinaryReader): ListOpenDateRangesForNodeOpenTimesBitmapsResponse;
}

export namespace ListOpenDateRangesForNodeOpenTimesBitmapsResponse {
  export type AsObject = {
    openCloseRangesList: Array<api_commons_wfm_pb.DatetimeRange.AsObject>,
  }
}

export class AgentAvailabilityPattern extends jspb.Message {
  getAgentAvailabilityPatternSid(): number;
  setAgentAvailabilityPatternSid(value: number): void;

  hasParentEntity(): boolean;
  clearParentEntity(): void;
  getParentEntity(): ParentEntity | undefined;
  setParentEntity(value?: ParentEntity): void;

  hasDatetimePattern(): boolean;
  clearDatetimePattern(): void;
  getDatetimePattern(): DatetimePattern | undefined;
  setDatetimePattern(value?: DatetimePattern): void;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentAvailabilityPattern.AsObject;
  static toObject(includeInstance: boolean, msg: AgentAvailabilityPattern): AgentAvailabilityPattern.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentAvailabilityPattern, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentAvailabilityPattern;
  static deserializeBinaryFromReader(message: AgentAvailabilityPattern, reader: jspb.BinaryReader): AgentAvailabilityPattern;
}

export namespace AgentAvailabilityPattern {
  export type AsObject = {
    agentAvailabilityPatternSid: number,
    parentEntity?: ParentEntity.AsObject,
    datetimePattern?: DatetimePattern.AsObject,
    scheduleScenarioSid: number,
  }
}

export class CreateAgentAvailabilityPatternReq extends jspb.Message {
  hasAgentAvailabilityPattern(): boolean;
  clearAgentAvailabilityPattern(): void;
  getAgentAvailabilityPattern(): AgentAvailabilityPattern | undefined;
  setAgentAvailabilityPattern(value?: AgentAvailabilityPattern): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAgentAvailabilityPatternReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAgentAvailabilityPatternReq): CreateAgentAvailabilityPatternReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAgentAvailabilityPatternReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAgentAvailabilityPatternReq;
  static deserializeBinaryFromReader(message: CreateAgentAvailabilityPatternReq, reader: jspb.BinaryReader): CreateAgentAvailabilityPatternReq;
}

export namespace CreateAgentAvailabilityPatternReq {
  export type AsObject = {
    agentAvailabilityPattern?: AgentAvailabilityPattern.AsObject,
  }
}

export class CreateAgentAvailabilityPatternRes extends jspb.Message {
  getAgentAvailabilityPatternSid(): number;
  setAgentAvailabilityPatternSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAgentAvailabilityPatternRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAgentAvailabilityPatternRes): CreateAgentAvailabilityPatternRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAgentAvailabilityPatternRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAgentAvailabilityPatternRes;
  static deserializeBinaryFromReader(message: CreateAgentAvailabilityPatternRes, reader: jspb.BinaryReader): CreateAgentAvailabilityPatternRes;
}

export namespace CreateAgentAvailabilityPatternRes {
  export type AsObject = {
    agentAvailabilityPatternSid: number,
  }
}

export class UpdateAgentAvailabilityPatternReq extends jspb.Message {
  hasAgentAvailabilityPattern(): boolean;
  clearAgentAvailabilityPattern(): void;
  getAgentAvailabilityPattern(): AgentAvailabilityPattern | undefined;
  setAgentAvailabilityPattern(value?: AgentAvailabilityPattern): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentAvailabilityPatternReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentAvailabilityPatternReq): UpdateAgentAvailabilityPatternReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentAvailabilityPatternReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentAvailabilityPatternReq;
  static deserializeBinaryFromReader(message: UpdateAgentAvailabilityPatternReq, reader: jspb.BinaryReader): UpdateAgentAvailabilityPatternReq;
}

export namespace UpdateAgentAvailabilityPatternReq {
  export type AsObject = {
    agentAvailabilityPattern?: AgentAvailabilityPattern.AsObject,
  }
}

export class UpdateAgentAvailabilityPatternRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentAvailabilityPatternRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentAvailabilityPatternRes): UpdateAgentAvailabilityPatternRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentAvailabilityPatternRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentAvailabilityPatternRes;
  static deserializeBinaryFromReader(message: UpdateAgentAvailabilityPatternRes, reader: jspb.BinaryReader): UpdateAgentAvailabilityPatternRes;
}

export namespace UpdateAgentAvailabilityPatternRes {
  export type AsObject = {
  }
}

export class DeleteAgentAvailabilityPatternReq extends jspb.Message {
  getAgentAvailabilityPatternSid(): number;
  setAgentAvailabilityPatternSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAgentAvailabilityPatternReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAgentAvailabilityPatternReq): DeleteAgentAvailabilityPatternReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAgentAvailabilityPatternReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAgentAvailabilityPatternReq;
  static deserializeBinaryFromReader(message: DeleteAgentAvailabilityPatternReq, reader: jspb.BinaryReader): DeleteAgentAvailabilityPatternReq;
}

export namespace DeleteAgentAvailabilityPatternReq {
  export type AsObject = {
    agentAvailabilityPatternSid: number,
  }
}

export class DeleteAgentAvailabilityPatternRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAgentAvailabilityPatternRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAgentAvailabilityPatternRes): DeleteAgentAvailabilityPatternRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAgentAvailabilityPatternRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAgentAvailabilityPatternRes;
  static deserializeBinaryFromReader(message: DeleteAgentAvailabilityPatternRes, reader: jspb.BinaryReader): DeleteAgentAvailabilityPatternRes;
}

export namespace DeleteAgentAvailabilityPatternRes {
  export type AsObject = {
  }
}

export class AvailabilityBitmapSet extends jspb.Message {
  clearOwnBitmapList(): void;
  getOwnBitmapList(): Array<api_commons_wfm_pb.AvailabilityOptionMap[keyof api_commons_wfm_pb.AvailabilityOptionMap]>;
  setOwnBitmapList(value: Array<api_commons_wfm_pb.AvailabilityOptionMap[keyof api_commons_wfm_pb.AvailabilityOptionMap]>): void;
  addOwnBitmap(value: api_commons_wfm_pb.AvailabilityOptionMap[keyof api_commons_wfm_pb.AvailabilityOptionMap], index?: number): api_commons_wfm_pb.AvailabilityOptionMap[keyof api_commons_wfm_pb.AvailabilityOptionMap];

  clearInheritedBitmapList(): void;
  getInheritedBitmapList(): Array<api_commons_wfm_pb.AvailabilityOptionMap[keyof api_commons_wfm_pb.AvailabilityOptionMap]>;
  setInheritedBitmapList(value: Array<api_commons_wfm_pb.AvailabilityOptionMap[keyof api_commons_wfm_pb.AvailabilityOptionMap]>): void;
  addInheritedBitmap(value: api_commons_wfm_pb.AvailabilityOptionMap[keyof api_commons_wfm_pb.AvailabilityOptionMap], index?: number): api_commons_wfm_pb.AvailabilityOptionMap[keyof api_commons_wfm_pb.AvailabilityOptionMap];

  clearResultingBitmapList(): void;
  getResultingBitmapList(): Array<api_commons_wfm_pb.AvailabilityOptionMap[keyof api_commons_wfm_pb.AvailabilityOptionMap]>;
  setResultingBitmapList(value: Array<api_commons_wfm_pb.AvailabilityOptionMap[keyof api_commons_wfm_pb.AvailabilityOptionMap]>): void;
  addResultingBitmap(value: api_commons_wfm_pb.AvailabilityOptionMap[keyof api_commons_wfm_pb.AvailabilityOptionMap], index?: number): api_commons_wfm_pb.AvailabilityOptionMap[keyof api_commons_wfm_pb.AvailabilityOptionMap];

  hasParentEntity(): boolean;
  clearParentEntity(): void;
  getParentEntity(): ParentEntity | undefined;
  setParentEntity(value?: ParentEntity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailabilityBitmapSet.AsObject;
  static toObject(includeInstance: boolean, msg: AvailabilityBitmapSet): AvailabilityBitmapSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AvailabilityBitmapSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailabilityBitmapSet;
  static deserializeBinaryFromReader(message: AvailabilityBitmapSet, reader: jspb.BinaryReader): AvailabilityBitmapSet;
}

export namespace AvailabilityBitmapSet {
  export type AsObject = {
    ownBitmapList: Array<api_commons_wfm_pb.AvailabilityOptionMap[keyof api_commons_wfm_pb.AvailabilityOptionMap]>,
    inheritedBitmapList: Array<api_commons_wfm_pb.AvailabilityOptionMap[keyof api_commons_wfm_pb.AvailabilityOptionMap]>,
    resultingBitmapList: Array<api_commons_wfm_pb.AvailabilityOptionMap[keyof api_commons_wfm_pb.AvailabilityOptionMap]>,
    parentEntity?: ParentEntity.AsObject,
  }
}

export class GetAvailabilityBitmapsReq extends jspb.Message {
  clearEntitiesToCheckList(): void;
  getEntitiesToCheckList(): Array<ParentEntity>;
  setEntitiesToCheckList(value: Array<ParentEntity>): void;
  addEntitiesToCheck(value?: ParentEntity, index?: number): ParentEntity;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  getIncludeInactive(): boolean;
  setIncludeInactive(value: boolean): void;

  hasDatetimeRange(): boolean;
  clearDatetimeRange(): void;
  getDatetimeRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setDatetimeRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  getBitmapType(): api_commons_wfm_pb.BitmapTypeMap[keyof api_commons_wfm_pb.BitmapTypeMap];
  setBitmapType(value: api_commons_wfm_pb.BitmapTypeMap[keyof api_commons_wfm_pb.BitmapTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAvailabilityBitmapsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAvailabilityBitmapsReq): GetAvailabilityBitmapsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAvailabilityBitmapsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAvailabilityBitmapsReq;
  static deserializeBinaryFromReader(message: GetAvailabilityBitmapsReq, reader: jspb.BinaryReader): GetAvailabilityBitmapsReq;
}

export namespace GetAvailabilityBitmapsReq {
  export type AsObject = {
    entitiesToCheckList: Array<ParentEntity.AsObject>,
    scheduleScenarioSid: number,
    includeInactive: boolean,
    datetimeRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    bitmapType: api_commons_wfm_pb.BitmapTypeMap[keyof api_commons_wfm_pb.BitmapTypeMap],
  }
}

export class GetAvailabilityBitmapsRes extends jspb.Message {
  clearBitmapsList(): void;
  getBitmapsList(): Array<AvailabilityBitmapSet>;
  setBitmapsList(value: Array<AvailabilityBitmapSet>): void;
  addBitmaps(value?: AvailabilityBitmapSet, index?: number): AvailabilityBitmapSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAvailabilityBitmapsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetAvailabilityBitmapsRes): GetAvailabilityBitmapsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAvailabilityBitmapsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAvailabilityBitmapsRes;
  static deserializeBinaryFromReader(message: GetAvailabilityBitmapsRes, reader: jspb.BinaryReader): GetAvailabilityBitmapsRes;
}

export namespace GetAvailabilityBitmapsRes {
  export type AsObject = {
    bitmapsList: Array<AvailabilityBitmapSet.AsObject>,
  }
}

export class UpsertNonSkillActivityAssociationReq extends jspb.Message {
  getNonSkillActivitySid(): number;
  setNonSkillActivitySid(value: number): void;

  hasNode(): boolean;
  clearNode(): void;
  getNode(): ParentEntity | undefined;
  setNode(value?: ParentEntity): void;

  getAssociationType(): api_commons_wfm_pb.ConfigRelationshipTypeMap[keyof api_commons_wfm_pb.ConfigRelationshipTypeMap];
  setAssociationType(value: api_commons_wfm_pb.ConfigRelationshipTypeMap[keyof api_commons_wfm_pb.ConfigRelationshipTypeMap]): void;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertNonSkillActivityAssociationReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertNonSkillActivityAssociationReq): UpsertNonSkillActivityAssociationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertNonSkillActivityAssociationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertNonSkillActivityAssociationReq;
  static deserializeBinaryFromReader(message: UpsertNonSkillActivityAssociationReq, reader: jspb.BinaryReader): UpsertNonSkillActivityAssociationReq;
}

export namespace UpsertNonSkillActivityAssociationReq {
  export type AsObject = {
    nonSkillActivitySid: number,
    node?: ParentEntity.AsObject,
    associationType: api_commons_wfm_pb.ConfigRelationshipTypeMap[keyof api_commons_wfm_pb.ConfigRelationshipTypeMap],
    scheduleScenarioSid: number,
  }
}

export class UpsertNonSkillActivityAssociationRes extends jspb.Message {
  getUpsertSucceeded(): boolean;
  setUpsertSucceeded(value: boolean): void;

  clearNodesAffectedList(): void;
  getNodesAffectedList(): Array<ParentEntity>;
  setNodesAffectedList(value: Array<ParentEntity>): void;
  addNodesAffected(value?: ParentEntity, index?: number): ParentEntity;

  clearRulesUsingActivityList(): void;
  getRulesUsingActivityList(): Array<UpsertNonSkillActivityAssociationRes.EntityMapping>;
  setRulesUsingActivityList(value: Array<UpsertNonSkillActivityAssociationRes.EntityMapping>): void;
  addRulesUsingActivity(value?: UpsertNonSkillActivityAssociationRes.EntityMapping, index?: number): UpsertNonSkillActivityAssociationRes.EntityMapping;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertNonSkillActivityAssociationRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertNonSkillActivityAssociationRes): UpsertNonSkillActivityAssociationRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertNonSkillActivityAssociationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertNonSkillActivityAssociationRes;
  static deserializeBinaryFromReader(message: UpsertNonSkillActivityAssociationRes, reader: jspb.BinaryReader): UpsertNonSkillActivityAssociationRes;
}

export namespace UpsertNonSkillActivityAssociationRes {
  export type AsObject = {
    upsertSucceeded: boolean,
    nodesAffectedList: Array<ParentEntity.AsObject>,
    rulesUsingActivityList: Array<UpsertNonSkillActivityAssociationRes.EntityMapping.AsObject>,
  }

  export class EntityMapping extends jspb.Message {
    hasLeftEntity(): boolean;
    clearLeftEntity(): void;
    getLeftEntity(): ParentEntity | undefined;
    setLeftEntity(value?: ParentEntity): void;

    hasRightEntity(): boolean;
    clearRightEntity(): void;
    getRightEntity(): ParentEntity | undefined;
    setRightEntity(value?: ParentEntity): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EntityMapping.AsObject;
    static toObject(includeInstance: boolean, msg: EntityMapping): EntityMapping.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EntityMapping, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EntityMapping;
    static deserializeBinaryFromReader(message: EntityMapping, reader: jspb.BinaryReader): EntityMapping;
  }

  export namespace EntityMapping {
    export type AsObject = {
      leftEntity?: ParentEntity.AsObject,
      rightEntity?: ParentEntity.AsObject,
    }
  }
}

export class SkillProficiency extends jspb.Message {
  getSkillProficiencySid(): number;
  setSkillProficiencySid(value: number): void;

  getSkillSid(): number;
  setSkillSid(value: number): void;

  hasPreferredSkillProfileSid(): boolean;
  clearPreferredSkillProfileSid(): void;
  getPreferredSkillProfileSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPreferredSkillProfileSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getManualProficiencyValue(): number;
  setManualProficiencyValue(value: number): void;

  hasParentEntity(): boolean;
  clearParentEntity(): void;
  getParentEntity(): ParentEntity | undefined;
  setParentEntity(value?: ParentEntity): void;

  getSkillName(): string;
  setSkillName(value: string): void;

  getSkillProfileName(): string;
  setSkillProfileName(value: string): void;

  getSkillProfileProficiencyValue(): number;
  setSkillProfileProficiencyValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkillProficiency.AsObject;
  static toObject(includeInstance: boolean, msg: SkillProficiency): SkillProficiency.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SkillProficiency, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkillProficiency;
  static deserializeBinaryFromReader(message: SkillProficiency, reader: jspb.BinaryReader): SkillProficiency;
}

export namespace SkillProficiency {
  export type AsObject = {
    skillProficiencySid: number,
    skillSid: number,
    preferredSkillProfileSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    manualProficiencyValue: number,
    parentEntity?: ParentEntity.AsObject,
    skillName: string,
    skillProfileName: string,
    skillProfileProficiencyValue: number,
  }
}

export class CreateSkillProficienciesReq extends jspb.Message {
  clearProficienciesList(): void;
  getProficienciesList(): Array<SkillProficiency>;
  setProficienciesList(value: Array<SkillProficiency>): void;
  addProficiencies(value?: SkillProficiency, index?: number): SkillProficiency;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSkillProficienciesReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSkillProficienciesReq): CreateSkillProficienciesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSkillProficienciesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSkillProficienciesReq;
  static deserializeBinaryFromReader(message: CreateSkillProficienciesReq, reader: jspb.BinaryReader): CreateSkillProficienciesReq;
}

export namespace CreateSkillProficienciesReq {
  export type AsObject = {
    proficienciesList: Array<SkillProficiency.AsObject>,
    scheduleScenarioSid: number,
  }
}

export class CreateSkillProficienciesRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSkillProficienciesRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSkillProficienciesRes): CreateSkillProficienciesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSkillProficienciesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSkillProficienciesRes;
  static deserializeBinaryFromReader(message: CreateSkillProficienciesRes, reader: jspb.BinaryReader): CreateSkillProficienciesRes;
}

export namespace CreateSkillProficienciesRes {
  export type AsObject = {
  }
}

export class UpdateSkillProficienciesReq extends jspb.Message {
  clearSkillProficienciesList(): void;
  getSkillProficienciesList(): Array<SkillProficiency>;
  setSkillProficienciesList(value: Array<SkillProficiency>): void;
  addSkillProficiencies(value?: SkillProficiency, index?: number): SkillProficiency;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSkillProficienciesReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSkillProficienciesReq): UpdateSkillProficienciesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSkillProficienciesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSkillProficienciesReq;
  static deserializeBinaryFromReader(message: UpdateSkillProficienciesReq, reader: jspb.BinaryReader): UpdateSkillProficienciesReq;
}

export namespace UpdateSkillProficienciesReq {
  export type AsObject = {
    skillProficienciesList: Array<SkillProficiency.AsObject>,
  }
}

export class UpdateSkillProficienciesRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSkillProficienciesRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSkillProficienciesRes): UpdateSkillProficienciesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSkillProficienciesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSkillProficienciesRes;
  static deserializeBinaryFromReader(message: UpdateSkillProficienciesRes, reader: jspb.BinaryReader): UpdateSkillProficienciesRes;
}

export namespace UpdateSkillProficienciesRes {
  export type AsObject = {
  }
}

export class DeleteSkillProficiencyReq extends jspb.Message {
  getSkillProficiencySid(): number;
  setSkillProficiencySid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSkillProficiencyReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSkillProficiencyReq): DeleteSkillProficiencyReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSkillProficiencyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSkillProficiencyReq;
  static deserializeBinaryFromReader(message: DeleteSkillProficiencyReq, reader: jspb.BinaryReader): DeleteSkillProficiencyReq;
}

export namespace DeleteSkillProficiencyReq {
  export type AsObject = {
    skillProficiencySid: number,
  }
}

export class DeleteSkillProficiencyRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSkillProficiencyRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSkillProficiencyRes): DeleteSkillProficiencyRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSkillProficiencyRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSkillProficiencyRes;
  static deserializeBinaryFromReader(message: DeleteSkillProficiencyRes, reader: jspb.BinaryReader): DeleteSkillProficiencyRes;
}

export namespace DeleteSkillProficiencyRes {
  export type AsObject = {
  }
}

export class ScheduleScenario extends jspb.Message {
  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasCreationDatetime(): boolean;
  clearCreationDatetime(): void;
  getCreationDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDatetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCreatedByUserId(): string;
  setCreatedByUserId(value: string): void;

  getIsDefault(): boolean;
  setIsDefault(value: boolean): void;

  hasCopiedFromScenarioSid(): boolean;
  clearCopiedFromScenarioSid(): void;
  getCopiedFromScenarioSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCopiedFromScenarioSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasScheduleRange(): boolean;
  clearScheduleRange(): void;
  getScheduleRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setScheduleRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  hasDatetimeSetToInactive(): boolean;
  clearDatetimeSetToInactive(): void;
  getDatetimeSetToInactive(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDatetimeSetToInactive(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIsActive(): boolean;
  setIsActive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleScenario.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleScenario): ScheduleScenario.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleScenario, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleScenario;
  static deserializeBinaryFromReader(message: ScheduleScenario, reader: jspb.BinaryReader): ScheduleScenario;
}

export namespace ScheduleScenario {
  export type AsObject = {
    scheduleScenarioSid: number,
    name: string,
    description: string,
    creationDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdByUserId: string,
    isDefault: boolean,
    copiedFromScenarioSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    scheduleRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    datetimeSetToInactive?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isActive: boolean,
  }
}

export class CopyScenarioReq extends jspb.Message {
  getScenarioSidToCopy(): number;
  setScenarioSidToCopy(value: number): void;

  getIncludeInactive(): boolean;
  setIncludeInactive(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasScheduleRange(): boolean;
  clearScheduleRange(): void;
  getScheduleRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setScheduleRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyScenarioReq.AsObject;
  static toObject(includeInstance: boolean, msg: CopyScenarioReq): CopyScenarioReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyScenarioReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyScenarioReq;
  static deserializeBinaryFromReader(message: CopyScenarioReq, reader: jspb.BinaryReader): CopyScenarioReq;
}

export namespace CopyScenarioReq {
  export type AsObject = {
    scenarioSidToCopy: number,
    includeInactive: boolean,
    name: string,
    description: string,
    scheduleRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
  }
}

export class CopyScenarioRes extends jspb.Message {
  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyScenarioRes.AsObject;
  static toObject(includeInstance: boolean, msg: CopyScenarioRes): CopyScenarioRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyScenarioRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyScenarioRes;
  static deserializeBinaryFromReader(message: CopyScenarioRes, reader: jspb.BinaryReader): CopyScenarioRes;
}

export namespace CopyScenarioRes {
  export type AsObject = {
    scheduleScenarioSid: number,
  }
}

export class CreateScheduleScenarioWithNodesReq extends jspb.Message {
  hasScheduleScenario(): boolean;
  clearScheduleScenario(): void;
  getScheduleScenario(): ScheduleScenario | undefined;
  setScheduleScenario(value?: ScheduleScenario): void;

  getCallCenterNodeName(): string;
  setCallCenterNodeName(value: string): void;

  getCallCenterNodeDescription(): string;
  setCallCenterNodeDescription(value: string): void;

  getClientNodeName(): string;
  setClientNodeName(value: string): void;

  getClientNodeDescription(): string;
  setClientNodeDescription(value: string): void;

  getLocationNodeName(): string;
  setLocationNodeName(value: string): void;

  getLocationNodeDescription(): string;
  setLocationNodeDescription(value: string): void;

  getProgramNodeName(): string;
  setProgramNodeName(value: string): void;

  getProgramNodeDescription(): string;
  setProgramNodeDescription(value: string): void;

  getTimeZoneVal(): api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap];
  setTimeZoneVal(value: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap]): void;

  hasSkillProfileCategory(): boolean;
  clearSkillProfileCategory(): void;
  getSkillProfileCategory(): api_commons_wfm_pb.SkillProfileCategory | undefined;
  setSkillProfileCategory(value?: api_commons_wfm_pb.SkillProfileCategory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateScheduleScenarioWithNodesReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateScheduleScenarioWithNodesReq): CreateScheduleScenarioWithNodesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateScheduleScenarioWithNodesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateScheduleScenarioWithNodesReq;
  static deserializeBinaryFromReader(message: CreateScheduleScenarioWithNodesReq, reader: jspb.BinaryReader): CreateScheduleScenarioWithNodesReq;
}

export namespace CreateScheduleScenarioWithNodesReq {
  export type AsObject = {
    scheduleScenario?: ScheduleScenario.AsObject,
    callCenterNodeName: string,
    callCenterNodeDescription: string,
    clientNodeName: string,
    clientNodeDescription: string,
    locationNodeName: string,
    locationNodeDescription: string,
    programNodeName: string,
    programNodeDescription: string,
    timeZoneVal: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap],
    skillProfileCategory?: api_commons_wfm_pb.SkillProfileCategory.AsObject,
  }
}

export class CreateScheduleScenarioWithNodesRes extends jspb.Message {
  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateScheduleScenarioWithNodesRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateScheduleScenarioWithNodesRes): CreateScheduleScenarioWithNodesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateScheduleScenarioWithNodesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateScheduleScenarioWithNodesRes;
  static deserializeBinaryFromReader(message: CreateScheduleScenarioWithNodesRes, reader: jspb.BinaryReader): CreateScheduleScenarioWithNodesRes;
}

export namespace CreateScheduleScenarioWithNodesRes {
  export type AsObject = {
    scheduleScenarioSid: number,
  }
}

export class UpdateScheduleScenarioReq extends jspb.Message {
  hasSchedulescenario(): boolean;
  clearSchedulescenario(): void;
  getSchedulescenario(): ScheduleScenario | undefined;
  setSchedulescenario(value?: ScheduleScenario): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScheduleScenarioReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScheduleScenarioReq): UpdateScheduleScenarioReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScheduleScenarioReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScheduleScenarioReq;
  static deserializeBinaryFromReader(message: UpdateScheduleScenarioReq, reader: jspb.BinaryReader): UpdateScheduleScenarioReq;
}

export namespace UpdateScheduleScenarioReq {
  export type AsObject = {
    schedulescenario?: ScheduleScenario.AsObject,
  }
}

export class UpdateScheduleScenarioRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScheduleScenarioRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScheduleScenarioRes): UpdateScheduleScenarioRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScheduleScenarioRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScheduleScenarioRes;
  static deserializeBinaryFromReader(message: UpdateScheduleScenarioRes, reader: jspb.BinaryReader): UpdateScheduleScenarioRes;
}

export namespace UpdateScheduleScenarioRes {
  export type AsObject = {
  }
}

export class ListConfigEntitiesReq extends jspb.Message {
  getEntityType(): api_commons_wfm_pb.ConfigEntityTypeMap[keyof api_commons_wfm_pb.ConfigEntityTypeMap];
  setEntityType(value: api_commons_wfm_pb.ConfigEntityTypeMap[keyof api_commons_wfm_pb.ConfigEntityTypeMap]): void;

  hasBelongsToEntity(): boolean;
  clearBelongsToEntity(): void;
  getBelongsToEntity(): ParentEntity | undefined;
  setBelongsToEntity(value?: ParentEntity): void;

  getIncludeInactive(): boolean;
  setIncludeInactive(value: boolean): void;

  getMemberDepth(): number;
  setMemberDepth(value: number): void;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConfigEntitiesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListConfigEntitiesReq): ListConfigEntitiesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListConfigEntitiesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConfigEntitiesReq;
  static deserializeBinaryFromReader(message: ListConfigEntitiesReq, reader: jspb.BinaryReader): ListConfigEntitiesReq;
}

export namespace ListConfigEntitiesReq {
  export type AsObject = {
    entityType: api_commons_wfm_pb.ConfigEntityTypeMap[keyof api_commons_wfm_pb.ConfigEntityTypeMap],
    belongsToEntity?: ParentEntity.AsObject,
    includeInactive: boolean,
    memberDepth: number,
    scheduleScenarioSid: number,
  }
}

export class ListConfigEntitiesRes extends jspb.Message {
  hasCallCenterNode(): boolean;
  clearCallCenterNode(): void;
  getCallCenterNode(): CallCenterNode | undefined;
  setCallCenterNode(value?: CallCenterNode): void;

  hasClientNodes(): boolean;
  clearClientNodes(): void;
  getClientNodes(): ListConfigEntitiesRes.ClientNodeEntities | undefined;
  setClientNodes(value?: ListConfigEntitiesRes.ClientNodeEntities): void;

  hasLocationNodes(): boolean;
  clearLocationNodes(): void;
  getLocationNodes(): ListConfigEntitiesRes.LocationNodeEntities | undefined;
  setLocationNodes(value?: ListConfigEntitiesRes.LocationNodeEntities): void;

  hasProgramNodes(): boolean;
  clearProgramNodes(): void;
  getProgramNodes(): ListConfigEntitiesRes.ProgramNodeEntities | undefined;
  setProgramNodes(value?: ListConfigEntitiesRes.ProgramNodeEntities): void;

  hasAgentGroups(): boolean;
  clearAgentGroups(): void;
  getAgentGroups(): ListConfigEntitiesRes.AgentGroupEntities | undefined;
  setAgentGroups(value?: ListConfigEntitiesRes.AgentGroupEntities): void;

  hasShiftTemplates(): boolean;
  clearShiftTemplates(): void;
  getShiftTemplates(): ListConfigEntitiesRes.ShiftTemplateEntities | undefined;
  setShiftTemplates(value?: ListConfigEntitiesRes.ShiftTemplateEntities): void;

  hasWfmAgents(): boolean;
  clearWfmAgents(): void;
  getWfmAgents(): ListConfigEntitiesRes.WFMAgentEntities | undefined;
  setWfmAgents(value?: ListConfigEntitiesRes.WFMAgentEntities): void;

  hasPlacementRules(): boolean;
  clearPlacementRules(): void;
  getPlacementRules(): ListConfigEntitiesRes.PlacementRuleEntities | undefined;
  setPlacementRules(value?: ListConfigEntitiesRes.PlacementRuleEntities): void;

  hasConstraintRules(): boolean;
  clearConstraintRules(): void;
  getConstraintRules(): ListConfigEntitiesRes.ConstraintRuleEntities | undefined;
  setConstraintRules(value?: ListConfigEntitiesRes.ConstraintRuleEntities): void;

  hasNonSkillActivities(): boolean;
  clearNonSkillActivities(): void;
  getNonSkillActivities(): ListConfigEntitiesRes.NonSkillActivityEntities | undefined;
  setNonSkillActivities(value?: ListConfigEntitiesRes.NonSkillActivityEntities): void;

  hasAgentAvailabilityPatterns(): boolean;
  clearAgentAvailabilityPatterns(): void;
  getAgentAvailabilityPatterns(): ListConfigEntitiesRes.AgentAvailabilityPatternEntities | undefined;
  setAgentAvailabilityPatterns(value?: ListConfigEntitiesRes.AgentAvailabilityPatternEntities): void;

  hasOpenTimesPatterns(): boolean;
  clearOpenTimesPatterns(): void;
  getOpenTimesPatterns(): ListConfigEntitiesRes.OpenTimesPatternEntities | undefined;
  setOpenTimesPatterns(value?: ListConfigEntitiesRes.OpenTimesPatternEntities): void;

  hasSchedulingActivity(): boolean;
  clearSchedulingActivity(): void;
  getSchedulingActivity(): SchedulingActivity | undefined;
  setSchedulingActivity(value?: SchedulingActivity): void;

  hasSkillProficiencies(): boolean;
  clearSkillProficiencies(): void;
  getSkillProficiencies(): ListConfigEntitiesRes.SkillProficiencyEntities | undefined;
  setSkillProficiencies(value?: ListConfigEntitiesRes.SkillProficiencyEntities): void;

  hasScheduleScenarios(): boolean;
  clearScheduleScenarios(): void;
  getScheduleScenarios(): ListConfigEntitiesRes.ScheduleScenarioEntities | undefined;
  setScheduleScenarios(value?: ListConfigEntitiesRes.ScheduleScenarioEntities): void;

  getEntitiesCase(): ListConfigEntitiesRes.EntitiesCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConfigEntitiesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListConfigEntitiesRes): ListConfigEntitiesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListConfigEntitiesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConfigEntitiesRes;
  static deserializeBinaryFromReader(message: ListConfigEntitiesRes, reader: jspb.BinaryReader): ListConfigEntitiesRes;
}

export namespace ListConfigEntitiesRes {
  export type AsObject = {
    callCenterNode?: CallCenterNode.AsObject,
    clientNodes?: ListConfigEntitiesRes.ClientNodeEntities.AsObject,
    locationNodes?: ListConfigEntitiesRes.LocationNodeEntities.AsObject,
    programNodes?: ListConfigEntitiesRes.ProgramNodeEntities.AsObject,
    agentGroups?: ListConfigEntitiesRes.AgentGroupEntities.AsObject,
    shiftTemplates?: ListConfigEntitiesRes.ShiftTemplateEntities.AsObject,
    wfmAgents?: ListConfigEntitiesRes.WFMAgentEntities.AsObject,
    placementRules?: ListConfigEntitiesRes.PlacementRuleEntities.AsObject,
    constraintRules?: ListConfigEntitiesRes.ConstraintRuleEntities.AsObject,
    nonSkillActivities?: ListConfigEntitiesRes.NonSkillActivityEntities.AsObject,
    agentAvailabilityPatterns?: ListConfigEntitiesRes.AgentAvailabilityPatternEntities.AsObject,
    openTimesPatterns?: ListConfigEntitiesRes.OpenTimesPatternEntities.AsObject,
    schedulingActivity?: SchedulingActivity.AsObject,
    skillProficiencies?: ListConfigEntitiesRes.SkillProficiencyEntities.AsObject,
    scheduleScenarios?: ListConfigEntitiesRes.ScheduleScenarioEntities.AsObject,
  }

  export class ClientNodeEntities extends jspb.Message {
    clearEntitiesList(): void;
    getEntitiesList(): Array<ClientNode>;
    setEntitiesList(value: Array<ClientNode>): void;
    addEntities(value?: ClientNode, index?: number): ClientNode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClientNodeEntities.AsObject;
    static toObject(includeInstance: boolean, msg: ClientNodeEntities): ClientNodeEntities.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClientNodeEntities, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClientNodeEntities;
    static deserializeBinaryFromReader(message: ClientNodeEntities, reader: jspb.BinaryReader): ClientNodeEntities;
  }

  export namespace ClientNodeEntities {
    export type AsObject = {
      entitiesList: Array<ClientNode.AsObject>,
    }
  }

  export class LocationNodeEntities extends jspb.Message {
    clearEntitiesList(): void;
    getEntitiesList(): Array<LocationNode>;
    setEntitiesList(value: Array<LocationNode>): void;
    addEntities(value?: LocationNode, index?: number): LocationNode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LocationNodeEntities.AsObject;
    static toObject(includeInstance: boolean, msg: LocationNodeEntities): LocationNodeEntities.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LocationNodeEntities, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LocationNodeEntities;
    static deserializeBinaryFromReader(message: LocationNodeEntities, reader: jspb.BinaryReader): LocationNodeEntities;
  }

  export namespace LocationNodeEntities {
    export type AsObject = {
      entitiesList: Array<LocationNode.AsObject>,
    }
  }

  export class ProgramNodeEntities extends jspb.Message {
    clearEntitiesList(): void;
    getEntitiesList(): Array<ProgramNode>;
    setEntitiesList(value: Array<ProgramNode>): void;
    addEntities(value?: ProgramNode, index?: number): ProgramNode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProgramNodeEntities.AsObject;
    static toObject(includeInstance: boolean, msg: ProgramNodeEntities): ProgramNodeEntities.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProgramNodeEntities, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProgramNodeEntities;
    static deserializeBinaryFromReader(message: ProgramNodeEntities, reader: jspb.BinaryReader): ProgramNodeEntities;
  }

  export namespace ProgramNodeEntities {
    export type AsObject = {
      entitiesList: Array<ProgramNode.AsObject>,
    }
  }

  export class AgentGroupEntities extends jspb.Message {
    clearEntitiesList(): void;
    getEntitiesList(): Array<AgentGroup>;
    setEntitiesList(value: Array<AgentGroup>): void;
    addEntities(value?: AgentGroup, index?: number): AgentGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentGroupEntities.AsObject;
    static toObject(includeInstance: boolean, msg: AgentGroupEntities): AgentGroupEntities.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentGroupEntities, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentGroupEntities;
    static deserializeBinaryFromReader(message: AgentGroupEntities, reader: jspb.BinaryReader): AgentGroupEntities;
  }

  export namespace AgentGroupEntities {
    export type AsObject = {
      entitiesList: Array<AgentGroup.AsObject>,
    }
  }

  export class ShiftTemplateEntities extends jspb.Message {
    clearEntitiesList(): void;
    getEntitiesList(): Array<ShiftTemplate>;
    setEntitiesList(value: Array<ShiftTemplate>): void;
    addEntities(value?: ShiftTemplate, index?: number): ShiftTemplate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShiftTemplateEntities.AsObject;
    static toObject(includeInstance: boolean, msg: ShiftTemplateEntities): ShiftTemplateEntities.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShiftTemplateEntities, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShiftTemplateEntities;
    static deserializeBinaryFromReader(message: ShiftTemplateEntities, reader: jspb.BinaryReader): ShiftTemplateEntities;
  }

  export namespace ShiftTemplateEntities {
    export type AsObject = {
      entitiesList: Array<ShiftTemplate.AsObject>,
    }
  }

  export class WFMAgentEntities extends jspb.Message {
    clearEntitiesList(): void;
    getEntitiesList(): Array<WFMAgent>;
    setEntitiesList(value: Array<WFMAgent>): void;
    addEntities(value?: WFMAgent, index?: number): WFMAgent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WFMAgentEntities.AsObject;
    static toObject(includeInstance: boolean, msg: WFMAgentEntities): WFMAgentEntities.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WFMAgentEntities, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WFMAgentEntities;
    static deserializeBinaryFromReader(message: WFMAgentEntities, reader: jspb.BinaryReader): WFMAgentEntities;
  }

  export namespace WFMAgentEntities {
    export type AsObject = {
      entitiesList: Array<WFMAgent.AsObject>,
    }
  }

  export class PlacementRuleEntities extends jspb.Message {
    clearEntitiesList(): void;
    getEntitiesList(): Array<PlacementRule>;
    setEntitiesList(value: Array<PlacementRule>): void;
    addEntities(value?: PlacementRule, index?: number): PlacementRule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlacementRuleEntities.AsObject;
    static toObject(includeInstance: boolean, msg: PlacementRuleEntities): PlacementRuleEntities.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlacementRuleEntities, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlacementRuleEntities;
    static deserializeBinaryFromReader(message: PlacementRuleEntities, reader: jspb.BinaryReader): PlacementRuleEntities;
  }

  export namespace PlacementRuleEntities {
    export type AsObject = {
      entitiesList: Array<PlacementRule.AsObject>,
    }
  }

  export class ConstraintRuleEntities extends jspb.Message {
    clearEntitiesList(): void;
    getEntitiesList(): Array<ConstraintRule>;
    setEntitiesList(value: Array<ConstraintRule>): void;
    addEntities(value?: ConstraintRule, index?: number): ConstraintRule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConstraintRuleEntities.AsObject;
    static toObject(includeInstance: boolean, msg: ConstraintRuleEntities): ConstraintRuleEntities.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConstraintRuleEntities, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConstraintRuleEntities;
    static deserializeBinaryFromReader(message: ConstraintRuleEntities, reader: jspb.BinaryReader): ConstraintRuleEntities;
  }

  export namespace ConstraintRuleEntities {
    export type AsObject = {
      entitiesList: Array<ConstraintRule.AsObject>,
    }
  }

  export class NonSkillActivityEntities extends jspb.Message {
    clearEntitiesList(): void;
    getEntitiesList(): Array<NonSkillActivity>;
    setEntitiesList(value: Array<NonSkillActivity>): void;
    addEntities(value?: NonSkillActivity, index?: number): NonSkillActivity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NonSkillActivityEntities.AsObject;
    static toObject(includeInstance: boolean, msg: NonSkillActivityEntities): NonSkillActivityEntities.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NonSkillActivityEntities, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NonSkillActivityEntities;
    static deserializeBinaryFromReader(message: NonSkillActivityEntities, reader: jspb.BinaryReader): NonSkillActivityEntities;
  }

  export namespace NonSkillActivityEntities {
    export type AsObject = {
      entitiesList: Array<NonSkillActivity.AsObject>,
    }
  }

  export class AgentAvailabilityPatternEntities extends jspb.Message {
    clearEntitiesList(): void;
    getEntitiesList(): Array<AgentAvailabilityPattern>;
    setEntitiesList(value: Array<AgentAvailabilityPattern>): void;
    addEntities(value?: AgentAvailabilityPattern, index?: number): AgentAvailabilityPattern;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentAvailabilityPatternEntities.AsObject;
    static toObject(includeInstance: boolean, msg: AgentAvailabilityPatternEntities): AgentAvailabilityPatternEntities.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentAvailabilityPatternEntities, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentAvailabilityPatternEntities;
    static deserializeBinaryFromReader(message: AgentAvailabilityPatternEntities, reader: jspb.BinaryReader): AgentAvailabilityPatternEntities;
  }

  export namespace AgentAvailabilityPatternEntities {
    export type AsObject = {
      entitiesList: Array<AgentAvailabilityPattern.AsObject>,
    }
  }

  export class OpenTimesPatternEntities extends jspb.Message {
    clearEntitiesList(): void;
    getEntitiesList(): Array<OpenTimesPattern>;
    setEntitiesList(value: Array<OpenTimesPattern>): void;
    addEntities(value?: OpenTimesPattern, index?: number): OpenTimesPattern;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OpenTimesPatternEntities.AsObject;
    static toObject(includeInstance: boolean, msg: OpenTimesPatternEntities): OpenTimesPatternEntities.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OpenTimesPatternEntities, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OpenTimesPatternEntities;
    static deserializeBinaryFromReader(message: OpenTimesPatternEntities, reader: jspb.BinaryReader): OpenTimesPatternEntities;
  }

  export namespace OpenTimesPatternEntities {
    export type AsObject = {
      entitiesList: Array<OpenTimesPattern.AsObject>,
    }
  }

  export class SkillProficiencyEntities extends jspb.Message {
    clearEntitiesList(): void;
    getEntitiesList(): Array<SkillProficiency>;
    setEntitiesList(value: Array<SkillProficiency>): void;
    addEntities(value?: SkillProficiency, index?: number): SkillProficiency;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SkillProficiencyEntities.AsObject;
    static toObject(includeInstance: boolean, msg: SkillProficiencyEntities): SkillProficiencyEntities.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SkillProficiencyEntities, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SkillProficiencyEntities;
    static deserializeBinaryFromReader(message: SkillProficiencyEntities, reader: jspb.BinaryReader): SkillProficiencyEntities;
  }

  export namespace SkillProficiencyEntities {
    export type AsObject = {
      entitiesList: Array<SkillProficiency.AsObject>,
    }
  }

  export class ScheduleScenarioEntities extends jspb.Message {
    clearEntitiesList(): void;
    getEntitiesList(): Array<ScheduleScenario>;
    setEntitiesList(value: Array<ScheduleScenario>): void;
    addEntities(value?: ScheduleScenario, index?: number): ScheduleScenario;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScheduleScenarioEntities.AsObject;
    static toObject(includeInstance: boolean, msg: ScheduleScenarioEntities): ScheduleScenarioEntities.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScheduleScenarioEntities, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScheduleScenarioEntities;
    static deserializeBinaryFromReader(message: ScheduleScenarioEntities, reader: jspb.BinaryReader): ScheduleScenarioEntities;
  }

  export namespace ScheduleScenarioEntities {
    export type AsObject = {
      entitiesList: Array<ScheduleScenario.AsObject>,
    }
  }

  export enum EntitiesCase {
    ENTITIES_NOT_SET = 0,
    CALL_CENTER_NODE = 1,
    CLIENT_NODES = 2,
    LOCATION_NODES = 3,
    PROGRAM_NODES = 4,
    AGENT_GROUPS = 5,
    SHIFT_TEMPLATES = 6,
    WFM_AGENTS = 7,
    PLACEMENT_RULES = 8,
    CONSTRAINT_RULES = 9,
    NON_SKILL_ACTIVITIES = 10,
    AGENT_AVAILABILITY_PATTERNS = 11,
    OPEN_TIMES_PATTERNS = 12,
    SCHEDULING_ACTIVITY = 13,
    SKILL_PROFICIENCIES = 14,
    SCHEDULE_SCENARIOS = 15,
  }
}

export class Diagnostic extends jspb.Message {
  getLevel(): api_commons_wfm_pb.DiagnosticLevelMap[keyof api_commons_wfm_pb.DiagnosticLevelMap];
  setLevel(value: api_commons_wfm_pb.DiagnosticLevelMap[keyof api_commons_wfm_pb.DiagnosticLevelMap]): void;

  getCode(): api_commons_wfm_pb.DiagnosticCodeMap[keyof api_commons_wfm_pb.DiagnosticCodeMap];
  setCode(value: api_commons_wfm_pb.DiagnosticCodeMap[keyof api_commons_wfm_pb.DiagnosticCodeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasSourceEntity(): boolean;
  clearSourceEntity(): void;
  getSourceEntity(): ParentEntity | undefined;
  setSourceEntity(value?: ParentEntity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Diagnostic.AsObject;
  static toObject(includeInstance: boolean, msg: Diagnostic): Diagnostic.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Diagnostic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Diagnostic;
  static deserializeBinaryFromReader(message: Diagnostic, reader: jspb.BinaryReader): Diagnostic;
}

export namespace Diagnostic {
  export type AsObject = {
    level: api_commons_wfm_pb.DiagnosticLevelMap[keyof api_commons_wfm_pb.DiagnosticLevelMap],
    code: api_commons_wfm_pb.DiagnosticCodeMap[keyof api_commons_wfm_pb.DiagnosticCodeMap],
    message: string,
    sourceEntity?: ParentEntity.AsObject,
  }
}

export class Diagnostics extends jspb.Message {
  hasSourceEntity(): boolean;
  clearSourceEntity(): void;
  getSourceEntity(): ParentEntity | undefined;
  setSourceEntity(value?: ParentEntity): void;

  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<Diagnostic>;
  setDiagnosticsList(value: Array<Diagnostic>): void;
  addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Diagnostics.AsObject;
  static toObject(includeInstance: boolean, msg: Diagnostics): Diagnostics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Diagnostics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Diagnostics;
  static deserializeBinaryFromReader(message: Diagnostics, reader: jspb.BinaryReader): Diagnostics;
}

export namespace Diagnostics {
  export type AsObject = {
    sourceEntity?: ParentEntity.AsObject,
    diagnosticsList: Array<Diagnostic.AsObject>,
  }
}

export class DeleteShiftInstancesReq extends jspb.Message {
  clearShiftInstanceSidsList(): void;
  getShiftInstanceSidsList(): Array<number>;
  setShiftInstanceSidsList(value: Array<number>): void;
  addShiftInstanceSids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteShiftInstancesReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteShiftInstancesReq): DeleteShiftInstancesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteShiftInstancesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteShiftInstancesReq;
  static deserializeBinaryFromReader(message: DeleteShiftInstancesReq, reader: jspb.BinaryReader): DeleteShiftInstancesReq;
}

export namespace DeleteShiftInstancesReq {
  export type AsObject = {
    shiftInstanceSidsList: Array<number>,
  }
}

export class DeleteShiftInstancesRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteShiftInstancesRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteShiftInstancesRes): DeleteShiftInstancesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteShiftInstancesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteShiftInstancesRes;
  static deserializeBinaryFromReader(message: DeleteShiftInstancesRes, reader: jspb.BinaryReader): DeleteShiftInstancesRes;
}

export namespace DeleteShiftInstancesRes {
  export type AsObject = {
  }
}

export class BuildNodeDiagnosticsReq extends jspb.Message {
  hasNodeToCheck(): boolean;
  clearNodeToCheck(): void;
  getNodeToCheck(): ParentEntity | undefined;
  setNodeToCheck(value?: ParentEntity): void;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildNodeDiagnosticsReq.AsObject;
  static toObject(includeInstance: boolean, msg: BuildNodeDiagnosticsReq): BuildNodeDiagnosticsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildNodeDiagnosticsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildNodeDiagnosticsReq;
  static deserializeBinaryFromReader(message: BuildNodeDiagnosticsReq, reader: jspb.BinaryReader): BuildNodeDiagnosticsReq;
}

export namespace BuildNodeDiagnosticsReq {
  export type AsObject = {
    nodeToCheck?: ParentEntity.AsObject,
    scheduleScenarioSid: number,
  }
}

export class BuildNodeDiagnosticsRes extends jspb.Message {
  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<Diagnostic>;
  setDiagnosticsList(value: Array<Diagnostic>): void;
  addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

  clearNodesCheckedList(): void;
  getNodesCheckedList(): Array<ParentEntity>;
  setNodesCheckedList(value: Array<ParentEntity>): void;
  addNodesChecked(value?: ParentEntity, index?: number): ParentEntity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildNodeDiagnosticsRes.AsObject;
  static toObject(includeInstance: boolean, msg: BuildNodeDiagnosticsRes): BuildNodeDiagnosticsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildNodeDiagnosticsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildNodeDiagnosticsRes;
  static deserializeBinaryFromReader(message: BuildNodeDiagnosticsRes, reader: jspb.BinaryReader): BuildNodeDiagnosticsRes;
}

export namespace BuildNodeDiagnosticsRes {
  export type AsObject = {
    diagnosticsList: Array<Diagnostic.AsObject>,
    nodesCheckedList: Array<ParentEntity.AsObject>,
  }
}

export class BuildGlobalDiagnosticsReq extends jspb.Message {
  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildGlobalDiagnosticsReq.AsObject;
  static toObject(includeInstance: boolean, msg: BuildGlobalDiagnosticsReq): BuildGlobalDiagnosticsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildGlobalDiagnosticsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildGlobalDiagnosticsReq;
  static deserializeBinaryFromReader(message: BuildGlobalDiagnosticsReq, reader: jspb.BinaryReader): BuildGlobalDiagnosticsReq;
}

export namespace BuildGlobalDiagnosticsReq {
  export type AsObject = {
    scheduleScenarioSid: number,
  }
}

export class BuildGlobalDiagnosticsRes extends jspb.Message {
  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<Diagnostic>;
  setDiagnosticsList(value: Array<Diagnostic>): void;
  addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

  clearNodesCheckedList(): void;
  getNodesCheckedList(): Array<ParentEntity>;
  setNodesCheckedList(value: Array<ParentEntity>): void;
  addNodesChecked(value?: ParentEntity, index?: number): ParentEntity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildGlobalDiagnosticsRes.AsObject;
  static toObject(includeInstance: boolean, msg: BuildGlobalDiagnosticsRes): BuildGlobalDiagnosticsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildGlobalDiagnosticsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildGlobalDiagnosticsRes;
  static deserializeBinaryFromReader(message: BuildGlobalDiagnosticsRes, reader: jspb.BinaryReader): BuildGlobalDiagnosticsRes;
}

export namespace BuildGlobalDiagnosticsRes {
  export type AsObject = {
    diagnosticsList: Array<Diagnostic.AsObject>,
    nodesCheckedList: Array<ParentEntity.AsObject>,
  }
}

export class PublishedSchedule extends jspb.Message {
  getPublishedScheduleSid(): number;
  setPublishedScheduleSid(value: number): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastUpdatedAt(): boolean;
  clearLastUpdatedAt(): void;
  getLastUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearShiftInstancesList(): void;
  getShiftInstancesList(): Array<ShiftInstance>;
  setShiftInstancesList(value: Array<ShiftInstance>): void;
  addShiftInstances(value?: ShiftInstance, index?: number): ShiftInstance;

  clearPerformanceMetricsList(): void;
  getPerformanceMetricsList(): Array<PerformanceMetric>;
  setPerformanceMetricsList(value: Array<PerformanceMetric>): void;
  addPerformanceMetrics(value?: PerformanceMetric, index?: number): PerformanceMetric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishedSchedule.AsObject;
  static toObject(includeInstance: boolean, msg: PublishedSchedule): PublishedSchedule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishedSchedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishedSchedule;
  static deserializeBinaryFromReader(message: PublishedSchedule, reader: jspb.BinaryReader): PublishedSchedule;
}

export namespace PublishedSchedule {
  export type AsObject = {
    publishedScheduleSid: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastUpdatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    shiftInstancesList: Array<ShiftInstance.AsObject>,
    performanceMetricsList: Array<PerformanceMetric.AsObject>,
  }
}

export class DraftSchedule extends jspb.Message {
  getDraftScheduleSid(): number;
  setDraftScheduleSid(value: number): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastUpdatedAt(): boolean;
  clearLastUpdatedAt(): void;
  getLastUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasDatetimeRange(): boolean;
  clearDatetimeRange(): void;
  getDatetimeRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setDatetimeRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  getCreatedByUserId(): string;
  setCreatedByUserId(value: string): void;

  clearShiftInstancesList(): void;
  getShiftInstancesList(): Array<ShiftInstance>;
  setShiftInstancesList(value: Array<ShiftInstance>): void;
  addShiftInstances(value?: ShiftInstance, index?: number): ShiftInstance;

  clearPerformanceMetricsList(): void;
  getPerformanceMetricsList(): Array<PerformanceMetric>;
  setPerformanceMetricsList(value: Array<PerformanceMetric>): void;
  addPerformanceMetrics(value?: PerformanceMetric, index?: number): PerformanceMetric;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DraftSchedule.AsObject;
  static toObject(includeInstance: boolean, msg: DraftSchedule): DraftSchedule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DraftSchedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DraftSchedule;
  static deserializeBinaryFromReader(message: DraftSchedule, reader: jspb.BinaryReader): DraftSchedule;
}

export namespace DraftSchedule {
  export type AsObject = {
    draftScheduleSid: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastUpdatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name: string,
    description: string,
    datetimeRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    createdByUserId: string,
    shiftInstancesList: Array<ShiftInstance.AsObject>,
    performanceMetricsList: Array<PerformanceMetric.AsObject>,
    scheduleScenarioSid: number,
  }
}

export class PerformanceMetricForSkillCollection extends jspb.Message {
  hasDateRange(): boolean;
  clearDateRange(): void;
  getDateRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setDateRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  getTotalCallsRequired(): number;
  setTotalCallsRequired(value: number): void;

  getTotalFtesAchieved(): number;
  setTotalFtesAchieved(value: number): void;

  getNumIntervalsWithRequiredCalls(): number;
  setNumIntervalsWithRequiredCalls(value: number): void;

  getNumIntervalsWithFtesButNoSchedules(): number;
  setNumIntervalsWithFtesButNoSchedules(value: number): void;

  getNumIntervalsWithFtesButNoForecastedCalls(): number;
  setNumIntervalsWithFtesButNoForecastedCalls(value: number): void;

  getTotalUnscheduledCalls(): number;
  setTotalUnscheduledCalls(value: number): void;

  getTotalUnnecessaryFtes(): number;
  setTotalUnnecessaryFtes(value: number): void;

  getIntervalWidthInMinutes(): number;
  setIntervalWidthInMinutes(value: number): void;

  getMetricType(): api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap];
  setMetricType(value: api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap]): void;

  clearFteIntervalsList(): void;
  getFteIntervalsList(): Array<FTERequiredVsAchievedInterval>;
  setFteIntervalsList(value: Array<FTERequiredVsAchievedInterval>): void;
  addFteIntervals(value?: FTERequiredVsAchievedInterval, index?: number): FTERequiredVsAchievedInterval;

  clearServiceLevelIntervalsList(): void;
  getServiceLevelIntervalsList(): Array<ServiceLevelInterval>;
  setServiceLevelIntervalsList(value: Array<ServiceLevelInterval>): void;
  addServiceLevelIntervals(value?: ServiceLevelInterval, index?: number): ServiceLevelInterval;

  hasSkillCollection(): boolean;
  clearSkillCollection(): void;
  getSkillCollection(): api_commons_wfm_pb.SkillProfileCategory | undefined;
  setSkillCollection(value?: api_commons_wfm_pb.SkillProfileCategory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PerformanceMetricForSkillCollection.AsObject;
  static toObject(includeInstance: boolean, msg: PerformanceMetricForSkillCollection): PerformanceMetricForSkillCollection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PerformanceMetricForSkillCollection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PerformanceMetricForSkillCollection;
  static deserializeBinaryFromReader(message: PerformanceMetricForSkillCollection, reader: jspb.BinaryReader): PerformanceMetricForSkillCollection;
}

export namespace PerformanceMetricForSkillCollection {
  export type AsObject = {
    dateRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    totalCallsRequired: number,
    totalFtesAchieved: number,
    numIntervalsWithRequiredCalls: number,
    numIntervalsWithFtesButNoSchedules: number,
    numIntervalsWithFtesButNoForecastedCalls: number,
    totalUnscheduledCalls: number,
    totalUnnecessaryFtes: number,
    intervalWidthInMinutes: number,
    metricType: api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap],
    fteIntervalsList: Array<FTERequiredVsAchievedInterval.AsObject>,
    serviceLevelIntervalsList: Array<ServiceLevelInterval.AsObject>,
    skillCollection?: api_commons_wfm_pb.SkillProfileCategory.AsObject,
  }
}

export class PerformanceMetric extends jspb.Message {
  hasDateRange(): boolean;
  clearDateRange(): void;
  getDateRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setDateRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  getTotalCallsRequired(): number;
  setTotalCallsRequired(value: number): void;

  getTotalFtesAchieved(): number;
  setTotalFtesAchieved(value: number): void;

  getNumIntervalsWithRequiredCalls(): number;
  setNumIntervalsWithRequiredCalls(value: number): void;

  getNumIntervalsWithFtesButNoSchedules(): number;
  setNumIntervalsWithFtesButNoSchedules(value: number): void;

  getNumIntervalsWithFtesButNoForecastedCalls(): number;
  setNumIntervalsWithFtesButNoForecastedCalls(value: number): void;

  getTotalUnscheduledCalls(): number;
  setTotalUnscheduledCalls(value: number): void;

  getTotalUnnecessaryFtes(): number;
  setTotalUnnecessaryFtes(value: number): void;

  getIntervalWidthInMinutes(): number;
  setIntervalWidthInMinutes(value: number): void;

  getMetricType(): api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap];
  setMetricType(value: api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap]): void;

  clearFteIntervalsList(): void;
  getFteIntervalsList(): Array<FTERequiredVsAchievedInterval>;
  setFteIntervalsList(value: Array<FTERequiredVsAchievedInterval>): void;
  addFteIntervals(value?: FTERequiredVsAchievedInterval, index?: number): FTERequiredVsAchievedInterval;

  clearServiceLevelIntervalsList(): void;
  getServiceLevelIntervalsList(): Array<ServiceLevelInterval>;
  setServiceLevelIntervalsList(value: Array<ServiceLevelInterval>): void;
  addServiceLevelIntervals(value?: ServiceLevelInterval, index?: number): ServiceLevelInterval;

  clearMetricsBySkillCollectionList(): void;
  getMetricsBySkillCollectionList(): Array<PerformanceMetricForSkillCollection>;
  setMetricsBySkillCollectionList(value: Array<PerformanceMetricForSkillCollection>): void;
  addMetricsBySkillCollection(value?: PerformanceMetricForSkillCollection, index?: number): PerformanceMetricForSkillCollection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PerformanceMetric.AsObject;
  static toObject(includeInstance: boolean, msg: PerformanceMetric): PerformanceMetric.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PerformanceMetric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PerformanceMetric;
  static deserializeBinaryFromReader(message: PerformanceMetric, reader: jspb.BinaryReader): PerformanceMetric;
}

export namespace PerformanceMetric {
  export type AsObject = {
    dateRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    totalCallsRequired: number,
    totalFtesAchieved: number,
    numIntervalsWithRequiredCalls: number,
    numIntervalsWithFtesButNoSchedules: number,
    numIntervalsWithFtesButNoForecastedCalls: number,
    totalUnscheduledCalls: number,
    totalUnnecessaryFtes: number,
    intervalWidthInMinutes: number,
    metricType: api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap],
    fteIntervalsList: Array<FTERequiredVsAchievedInterval.AsObject>,
    serviceLevelIntervalsList: Array<ServiceLevelInterval.AsObject>,
    metricsBySkillCollectionList: Array<PerformanceMetricForSkillCollection.AsObject>,
  }
}

export class PerformanceMetricForSkillCollectionV2 extends jspb.Message {
  hasDateRange(): boolean;
  clearDateRange(): void;
  getDateRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setDateRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  getTotalFteIntervalsRequired(): number;
  setTotalFteIntervalsRequired(value: number): void;

  getTotalFteIntervalsAchieved(): number;
  setTotalFteIntervalsAchieved(value: number): void;

  getNumIntervalsWithCallFtes(): number;
  setNumIntervalsWithCallFtes(value: number): void;

  getNumIntervalsWithShiftFtes(): number;
  setNumIntervalsWithShiftFtes(value: number): void;

  getNumIntervalsWithCallFtesButNoShifts(): number;
  setNumIntervalsWithCallFtesButNoShifts(value: number): void;

  getNumIntervalsWithShiftsButNoCallFtes(): number;
  setNumIntervalsWithShiftsButNoCallFtes(value: number): void;

  getTotalUnderscheduledCallFtes(): number;
  setTotalUnderscheduledCallFtes(value: number): void;

  getTotalOverscheduledCallFtes(): number;
  setTotalOverscheduledCallFtes(value: number): void;

  getIntervalWidthInMinutes(): number;
  setIntervalWidthInMinutes(value: number): void;

  getMetricType(): api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap];
  setMetricType(value: api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap]): void;

  clearFteOccupancyIntervalsList(): void;
  getFteOccupancyIntervalsList(): Array<FTERequiredVsAchievedOccupancyInterval>;
  setFteOccupancyIntervalsList(value: Array<FTERequiredVsAchievedOccupancyInterval>): void;
  addFteOccupancyIntervals(value?: FTERequiredVsAchievedOccupancyInterval, index?: number): FTERequiredVsAchievedOccupancyInterval;

  clearServiceLevelIntervalsList(): void;
  getServiceLevelIntervalsList(): Array<ServiceLevelInterval>;
  setServiceLevelIntervalsList(value: Array<ServiceLevelInterval>): void;
  addServiceLevelIntervals(value?: ServiceLevelInterval, index?: number): ServiceLevelInterval;

  hasSkillCollection(): boolean;
  clearSkillCollection(): void;
  getSkillCollection(): api_commons_wfm_pb.SkillProfileCategory | undefined;
  setSkillCollection(value?: api_commons_wfm_pb.SkillProfileCategory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PerformanceMetricForSkillCollectionV2.AsObject;
  static toObject(includeInstance: boolean, msg: PerformanceMetricForSkillCollectionV2): PerformanceMetricForSkillCollectionV2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PerformanceMetricForSkillCollectionV2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PerformanceMetricForSkillCollectionV2;
  static deserializeBinaryFromReader(message: PerformanceMetricForSkillCollectionV2, reader: jspb.BinaryReader): PerformanceMetricForSkillCollectionV2;
}

export namespace PerformanceMetricForSkillCollectionV2 {
  export type AsObject = {
    dateRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    totalFteIntervalsRequired: number,
    totalFteIntervalsAchieved: number,
    numIntervalsWithCallFtes: number,
    numIntervalsWithShiftFtes: number,
    numIntervalsWithCallFtesButNoShifts: number,
    numIntervalsWithShiftsButNoCallFtes: number,
    totalUnderscheduledCallFtes: number,
    totalOverscheduledCallFtes: number,
    intervalWidthInMinutes: number,
    metricType: api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap],
    fteOccupancyIntervalsList: Array<FTERequiredVsAchievedOccupancyInterval.AsObject>,
    serviceLevelIntervalsList: Array<ServiceLevelInterval.AsObject>,
    skillCollection?: api_commons_wfm_pb.SkillProfileCategory.AsObject,
  }
}

export class PerformanceMetricV2 extends jspb.Message {
  hasDateRange(): boolean;
  clearDateRange(): void;
  getDateRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setDateRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  getTotalFteIntervalsRequired(): number;
  setTotalFteIntervalsRequired(value: number): void;

  getTotalFteIntervalsAchieved(): number;
  setTotalFteIntervalsAchieved(value: number): void;

  getNumIntervalsWithCallFtes(): number;
  setNumIntervalsWithCallFtes(value: number): void;

  getNumIntervalsWithShiftFtes(): number;
  setNumIntervalsWithShiftFtes(value: number): void;

  getNumIntervalsWithCallFtesButNoShifts(): number;
  setNumIntervalsWithCallFtesButNoShifts(value: number): void;

  getNumIntervalsWithShiftsButNoCallFtes(): number;
  setNumIntervalsWithShiftsButNoCallFtes(value: number): void;

  getTotalUnderscheduledCallFtes(): number;
  setTotalUnderscheduledCallFtes(value: number): void;

  getTotalOverscheduledCallFtes(): number;
  setTotalOverscheduledCallFtes(value: number): void;

  getIntervalWidthInMinutes(): number;
  setIntervalWidthInMinutes(value: number): void;

  getMetricType(): api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap];
  setMetricType(value: api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap]): void;

  clearFteOccupancyIntervalsList(): void;
  getFteOccupancyIntervalsList(): Array<FTERequiredVsAchievedOccupancyInterval>;
  setFteOccupancyIntervalsList(value: Array<FTERequiredVsAchievedOccupancyInterval>): void;
  addFteOccupancyIntervals(value?: FTERequiredVsAchievedOccupancyInterval, index?: number): FTERequiredVsAchievedOccupancyInterval;

  clearServiceLevelIntervalsList(): void;
  getServiceLevelIntervalsList(): Array<ServiceLevelInterval>;
  setServiceLevelIntervalsList(value: Array<ServiceLevelInterval>): void;
  addServiceLevelIntervals(value?: ServiceLevelInterval, index?: number): ServiceLevelInterval;

  clearMetricsBySkillCollectionList(): void;
  getMetricsBySkillCollectionList(): Array<PerformanceMetricForSkillCollectionV2>;
  setMetricsBySkillCollectionList(value: Array<PerformanceMetricForSkillCollectionV2>): void;
  addMetricsBySkillCollection(value?: PerformanceMetricForSkillCollectionV2, index?: number): PerformanceMetricForSkillCollectionV2;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PerformanceMetricV2.AsObject;
  static toObject(includeInstance: boolean, msg: PerformanceMetricV2): PerformanceMetricV2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PerformanceMetricV2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PerformanceMetricV2;
  static deserializeBinaryFromReader(message: PerformanceMetricV2, reader: jspb.BinaryReader): PerformanceMetricV2;
}

export namespace PerformanceMetricV2 {
  export type AsObject = {
    dateRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    totalFteIntervalsRequired: number,
    totalFteIntervalsAchieved: number,
    numIntervalsWithCallFtes: number,
    numIntervalsWithShiftFtes: number,
    numIntervalsWithCallFtesButNoShifts: number,
    numIntervalsWithShiftsButNoCallFtes: number,
    totalUnderscheduledCallFtes: number,
    totalOverscheduledCallFtes: number,
    intervalWidthInMinutes: number,
    metricType: api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap],
    fteOccupancyIntervalsList: Array<FTERequiredVsAchievedOccupancyInterval.AsObject>,
    serviceLevelIntervalsList: Array<ServiceLevelInterval.AsObject>,
    metricsBySkillCollectionList: Array<PerformanceMetricForSkillCollectionV2.AsObject>,
  }
}

export class ServiceLevelInterval extends jspb.Message {
  hasStartDatetime(): boolean;
  clearStartDatetime(): void;
  getStartDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDatetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getServiceLevelAchieved(): number;
  setServiceLevelAchieved(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceLevelInterval.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceLevelInterval): ServiceLevelInterval.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceLevelInterval, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceLevelInterval;
  static deserializeBinaryFromReader(message: ServiceLevelInterval, reader: jspb.BinaryReader): ServiceLevelInterval;
}

export namespace ServiceLevelInterval {
  export type AsObject = {
    startDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    serviceLevelAchieved: number,
  }
}

export class FTERequiredVsAchievedInterval extends jspb.Message {
  hasStartDatetime(): boolean;
  clearStartDatetime(): void;
  getStartDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDatetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getRequiredCalls(): number;
  setRequiredCalls(value: number): void;

  getAchievedFtes(): number;
  setAchievedFtes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FTERequiredVsAchievedInterval.AsObject;
  static toObject(includeInstance: boolean, msg: FTERequiredVsAchievedInterval): FTERequiredVsAchievedInterval.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FTERequiredVsAchievedInterval, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FTERequiredVsAchievedInterval;
  static deserializeBinaryFromReader(message: FTERequiredVsAchievedInterval, reader: jspb.BinaryReader): FTERequiredVsAchievedInterval;
}

export namespace FTERequiredVsAchievedInterval {
  export type AsObject = {
    startDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    requiredCalls: number,
    achievedFtes: number,
  }
}

export class FTERequiredVsAchievedOccupancyInterval extends jspb.Message {
  hasStartDatetime(): boolean;
  clearStartDatetime(): void;
  getStartDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDatetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getRequiredFteOccupancy(): number;
  setRequiredFteOccupancy(value: number): void;

  getAchievedFteOccupancy(): number;
  setAchievedFteOccupancy(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FTERequiredVsAchievedOccupancyInterval.AsObject;
  static toObject(includeInstance: boolean, msg: FTERequiredVsAchievedOccupancyInterval): FTERequiredVsAchievedOccupancyInterval.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FTERequiredVsAchievedOccupancyInterval, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FTERequiredVsAchievedOccupancyInterval;
  static deserializeBinaryFromReader(message: FTERequiredVsAchievedOccupancyInterval, reader: jspb.BinaryReader): FTERequiredVsAchievedOccupancyInterval;
}

export namespace FTERequiredVsAchievedOccupancyInterval {
  export type AsObject = {
    startDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    requiredFteOccupancy: number,
    achievedFteOccupancy: number,
  }
}

export class RequiredCallsInterval extends jspb.Message {
  hasStartDatetime(): boolean;
  clearStartDatetime(): void;
  getStartDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDatetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getRequiredCalls(): number;
  setRequiredCalls(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequiredCallsInterval.AsObject;
  static toObject(includeInstance: boolean, msg: RequiredCallsInterval): RequiredCallsInterval.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequiredCallsInterval, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequiredCallsInterval;
  static deserializeBinaryFromReader(message: RequiredCallsInterval, reader: jspb.BinaryReader): RequiredCallsInterval;
}

export namespace RequiredCallsInterval {
  export type AsObject = {
    startDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    requiredCalls: number,
  }
}

export class ShiftInstance extends jspb.Message {
  getShiftInstanceSid(): number;
  setShiftInstanceSid(value: number): void;

  hasStartDatetime(): boolean;
  clearStartDatetime(): void;
  getStartDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDatetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIsLocked(): boolean;
  setIsLocked(value: boolean): void;

  getWidthInMinutes(): number;
  setWidthInMinutes(value: number): void;

  getShiftTemplateSid(): number;
  setShiftTemplateSid(value: number): void;

  getOriginatingProgramNodeSid(): number;
  setOriginatingProgramNodeSid(value: number): void;

  getScheduleSid(): number;
  setScheduleSid(value: number): void;

  getWfmAgentSid(): number;
  setWfmAgentSid(value: number): void;

  getScheduleType(): api_commons_wfm_pb.ScheduleTypeMap[keyof api_commons_wfm_pb.ScheduleTypeMap];
  setScheduleType(value: api_commons_wfm_pb.ScheduleTypeMap[keyof api_commons_wfm_pb.ScheduleTypeMap]): void;

  clearShiftSegmentsList(): void;
  getShiftSegmentsList(): Array<ShiftSegment>;
  setShiftSegmentsList(value: Array<ShiftSegment>): void;
  addShiftSegments(value?: ShiftSegment, index?: number): ShiftSegment;

  hasShiftTemplate(): boolean;
  clearShiftTemplate(): void;
  getShiftTemplate(): ShiftTemplate | undefined;
  setShiftTemplate(value?: ShiftTemplate): void;

  getPlannedShrinkagePercent(): number;
  setPlannedShrinkagePercent(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShiftInstance.AsObject;
  static toObject(includeInstance: boolean, msg: ShiftInstance): ShiftInstance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShiftInstance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShiftInstance;
  static deserializeBinaryFromReader(message: ShiftInstance, reader: jspb.BinaryReader): ShiftInstance;
}

export namespace ShiftInstance {
  export type AsObject = {
    shiftInstanceSid: number,
    startDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isLocked: boolean,
    widthInMinutes: number,
    shiftTemplateSid: number,
    originatingProgramNodeSid: number,
    scheduleSid: number,
    wfmAgentSid: number,
    scheduleType: api_commons_wfm_pb.ScheduleTypeMap[keyof api_commons_wfm_pb.ScheduleTypeMap],
    shiftSegmentsList: Array<ShiftSegment.AsObject>,
    shiftTemplate?: ShiftTemplate.AsObject,
    plannedShrinkagePercent: number,
  }
}

export class ShiftSegmentCallStat extends jspb.Message {
  getNumCalls(): number;
  setNumCalls(value: number): void;

  getPercentFit(): number;
  setPercentFit(value: number): void;

  hasSkillCollection(): boolean;
  clearSkillCollection(): void;
  getSkillCollection(): api_commons_wfm_pb.SkillProfileCategory | undefined;
  setSkillCollection(value?: api_commons_wfm_pb.SkillProfileCategory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShiftSegmentCallStat.AsObject;
  static toObject(includeInstance: boolean, msg: ShiftSegmentCallStat): ShiftSegmentCallStat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShiftSegmentCallStat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShiftSegmentCallStat;
  static deserializeBinaryFromReader(message: ShiftSegmentCallStat, reader: jspb.BinaryReader): ShiftSegmentCallStat;
}

export namespace ShiftSegmentCallStat {
  export type AsObject = {
    numCalls: number,
    percentFit: number,
    skillCollection?: api_commons_wfm_pb.SkillProfileCategory.AsObject,
  }
}

export class ShiftSegment extends jspb.Message {
  getShiftSegmentSid(): number;
  setShiftSegmentSid(value: number): void;

  getShiftInstanceSid(): number;
  setShiftInstanceSid(value: number): void;

  getOrderInShiftInstance(): number;
  setOrderInShiftInstance(value: number): void;

  getWidthInMinutes(): number;
  setWidthInMinutes(value: number): void;

  getStartMinuteInShift(): number;
  setStartMinuteInShift(value: number): void;

  getSchedulingActivitySid(): number;
  setSchedulingActivitySid(value: number): void;

  hasSchedulingActivity(): boolean;
  clearSchedulingActivity(): void;
  getSchedulingActivity(): SchedulingActivity | undefined;
  setSchedulingActivity(value?: SchedulingActivity): void;

  clearCallStatsBySkillCollectionList(): void;
  getCallStatsBySkillCollectionList(): Array<ShiftSegmentCallStat>;
  setCallStatsBySkillCollectionList(value: Array<ShiftSegmentCallStat>): void;
  addCallStatsBySkillCollection(value?: ShiftSegmentCallStat, index?: number): ShiftSegmentCallStat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShiftSegment.AsObject;
  static toObject(includeInstance: boolean, msg: ShiftSegment): ShiftSegment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShiftSegment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShiftSegment;
  static deserializeBinaryFromReader(message: ShiftSegment, reader: jspb.BinaryReader): ShiftSegment;
}

export namespace ShiftSegment {
  export type AsObject = {
    shiftSegmentSid: number,
    shiftInstanceSid: number,
    orderInShiftInstance: number,
    widthInMinutes: number,
    startMinuteInShift: number,
    schedulingActivitySid: number,
    schedulingActivity?: SchedulingActivity.AsObject,
    callStatsBySkillCollectionList: Array<ShiftSegmentCallStat.AsObject>,
  }
}

export class GetPublishedScheduleReq extends jspb.Message {
  hasDatetimeRange(): boolean;
  clearDatetimeRange(): void;
  getDatetimeRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setDatetimeRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  getIncludeShiftInstances(): boolean;
  setIncludeShiftInstances(value: boolean): void;

  getIncludeShiftTemplate(): boolean;
  setIncludeShiftTemplate(value: boolean): void;

  getIncludeShiftSegments(): boolean;
  setIncludeShiftSegments(value: boolean): void;

  getIncludeSchedulingActivity(): boolean;
  setIncludeSchedulingActivity(value: boolean): void;

  getIncludeActivity(): boolean;
  setIncludeActivity(value: boolean): void;

  hasNodeSelector(): boolean;
  clearNodeSelector(): void;
  getNodeSelector(): ParentEntity | undefined;
  setNodeSelector(value?: ParentEntity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublishedScheduleReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublishedScheduleReq): GetPublishedScheduleReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPublishedScheduleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublishedScheduleReq;
  static deserializeBinaryFromReader(message: GetPublishedScheduleReq, reader: jspb.BinaryReader): GetPublishedScheduleReq;
}

export namespace GetPublishedScheduleReq {
  export type AsObject = {
    datetimeRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    includeShiftInstances: boolean,
    includeShiftTemplate: boolean,
    includeShiftSegments: boolean,
    includeSchedulingActivity: boolean,
    includeActivity: boolean,
    nodeSelector?: ParentEntity.AsObject,
  }
}

export class GetPublishedScheduleRes extends jspb.Message {
  hasPublishedSchedule(): boolean;
  clearPublishedSchedule(): void;
  getPublishedSchedule(): PublishedSchedule | undefined;
  setPublishedSchedule(value?: PublishedSchedule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublishedScheduleRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublishedScheduleRes): GetPublishedScheduleRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPublishedScheduleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublishedScheduleRes;
  static deserializeBinaryFromReader(message: GetPublishedScheduleRes, reader: jspb.BinaryReader): GetPublishedScheduleRes;
}

export namespace GetPublishedScheduleRes {
  export type AsObject = {
    publishedSchedule?: PublishedSchedule.AsObject,
  }
}

export class GetPublishedScheduleRequiredCallsReq extends jspb.Message {
  hasViewingRange(): boolean;
  clearViewingRange(): void;
  getViewingRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setViewingRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  getIntervalWidthInMinutes(): number;
  setIntervalWidthInMinutes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublishedScheduleRequiredCallsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublishedScheduleRequiredCallsReq): GetPublishedScheduleRequiredCallsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPublishedScheduleRequiredCallsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublishedScheduleRequiredCallsReq;
  static deserializeBinaryFromReader(message: GetPublishedScheduleRequiredCallsReq, reader: jspb.BinaryReader): GetPublishedScheduleRequiredCallsReq;
}

export namespace GetPublishedScheduleRequiredCallsReq {
  export type AsObject = {
    viewingRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    intervalWidthInMinutes: number,
  }
}

export class GetPublishedScheduleRequiredCallsRes extends jspb.Message {
  getIntervalWidthInMinutes(): number;
  setIntervalWidthInMinutes(value: number): void;

  clearRequiredCallsIntervalsList(): void;
  getRequiredCallsIntervalsList(): Array<RequiredCallsInterval>;
  setRequiredCallsIntervalsList(value: Array<RequiredCallsInterval>): void;
  addRequiredCallsIntervals(value?: RequiredCallsInterval, index?: number): RequiredCallsInterval;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublishedScheduleRequiredCallsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublishedScheduleRequiredCallsRes): GetPublishedScheduleRequiredCallsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPublishedScheduleRequiredCallsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublishedScheduleRequiredCallsRes;
  static deserializeBinaryFromReader(message: GetPublishedScheduleRequiredCallsRes, reader: jspb.BinaryReader): GetPublishedScheduleRequiredCallsRes;
}

export namespace GetPublishedScheduleRequiredCallsRes {
  export type AsObject = {
    intervalWidthInMinutes: number,
    requiredCallsIntervalsList: Array<RequiredCallsInterval.AsObject>,
  }
}

export class GetDraftScheduleRequiredCallsReq extends jspb.Message {
  getDraftScheduleSid(): number;
  setDraftScheduleSid(value: number): void;

  hasViewingRange(): boolean;
  clearViewingRange(): void;
  getViewingRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setViewingRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  getIntervalWidthInMinutes(): number;
  setIntervalWidthInMinutes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDraftScheduleRequiredCallsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetDraftScheduleRequiredCallsReq): GetDraftScheduleRequiredCallsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDraftScheduleRequiredCallsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDraftScheduleRequiredCallsReq;
  static deserializeBinaryFromReader(message: GetDraftScheduleRequiredCallsReq, reader: jspb.BinaryReader): GetDraftScheduleRequiredCallsReq;
}

export namespace GetDraftScheduleRequiredCallsReq {
  export type AsObject = {
    draftScheduleSid: number,
    viewingRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    intervalWidthInMinutes: number,
  }
}

export class GetDraftScheduleRequiredCallsRes extends jspb.Message {
  getIntervalWidthInMinutes(): number;
  setIntervalWidthInMinutes(value: number): void;

  clearRequiredCallsIntervalsList(): void;
  getRequiredCallsIntervalsList(): Array<RequiredCallsInterval>;
  setRequiredCallsIntervalsList(value: Array<RequiredCallsInterval>): void;
  addRequiredCallsIntervals(value?: RequiredCallsInterval, index?: number): RequiredCallsInterval;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDraftScheduleRequiredCallsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetDraftScheduleRequiredCallsRes): GetDraftScheduleRequiredCallsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDraftScheduleRequiredCallsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDraftScheduleRequiredCallsRes;
  static deserializeBinaryFromReader(message: GetDraftScheduleRequiredCallsRes, reader: jspb.BinaryReader): GetDraftScheduleRequiredCallsRes;
}

export namespace GetDraftScheduleRequiredCallsRes {
  export type AsObject = {
    intervalWidthInMinutes: number,
    requiredCallsIntervalsList: Array<RequiredCallsInterval.AsObject>,
  }
}

export class CreateDraftScheduleReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasSchedulingRange(): boolean;
  clearSchedulingRange(): void;
  getSchedulingRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setSchedulingRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDraftScheduleReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDraftScheduleReq): CreateDraftScheduleReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDraftScheduleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDraftScheduleReq;
  static deserializeBinaryFromReader(message: CreateDraftScheduleReq, reader: jspb.BinaryReader): CreateDraftScheduleReq;
}

export namespace CreateDraftScheduleReq {
  export type AsObject = {
    name: string,
    description: string,
    schedulingRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    scheduleScenarioSid: number,
  }
}

export class CreateDraftScheduleRes extends jspb.Message {
  getDraftScheduleSid(): number;
  setDraftScheduleSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDraftScheduleRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDraftScheduleRes): CreateDraftScheduleRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDraftScheduleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDraftScheduleRes;
  static deserializeBinaryFromReader(message: CreateDraftScheduleRes, reader: jspb.BinaryReader): CreateDraftScheduleRes;
}

export namespace CreateDraftScheduleRes {
  export type AsObject = {
    draftScheduleSid: number,
  }
}

export class UpdateDraftScheduleReq extends jspb.Message {
  getDraftScheduleSid(): number;
  setDraftScheduleSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasDatetimeRange(): boolean;
  clearDatetimeRange(): void;
  getDatetimeRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setDatetimeRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  getDeleteShiftsNotInRange(): boolean;
  setDeleteShiftsNotInRange(value: boolean): void;

  getCopyShiftsIntoNewRange(): boolean;
  setCopyShiftsIntoNewRange(value: boolean): void;

  getGetUpdatedShifts(): boolean;
  setGetUpdatedShifts(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDraftScheduleReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDraftScheduleReq): UpdateDraftScheduleReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDraftScheduleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDraftScheduleReq;
  static deserializeBinaryFromReader(message: UpdateDraftScheduleReq, reader: jspb.BinaryReader): UpdateDraftScheduleReq;
}

export namespace UpdateDraftScheduleReq {
  export type AsObject = {
    draftScheduleSid: number,
    name: string,
    description: string,
    datetimeRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    deleteShiftsNotInRange: boolean,
    copyShiftsIntoNewRange: boolean,
    getUpdatedShifts: boolean,
  }
}

export class UpdateDraftScheduleRes extends jspb.Message {
  hasDraftSchedule(): boolean;
  clearDraftSchedule(): void;
  getDraftSchedule(): DraftSchedule | undefined;
  setDraftSchedule(value?: DraftSchedule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDraftScheduleRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDraftScheduleRes): UpdateDraftScheduleRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDraftScheduleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDraftScheduleRes;
  static deserializeBinaryFromReader(message: UpdateDraftScheduleRes, reader: jspb.BinaryReader): UpdateDraftScheduleRes;
}

export namespace UpdateDraftScheduleRes {
  export type AsObject = {
    draftSchedule?: DraftSchedule.AsObject,
  }
}

export class BuildDraftScheduleReq extends jspb.Message {
  getDraftScheduleSid(): number;
  setDraftScheduleSid(value: number): void;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  hasScheduleScenarioSchedulingRange(): boolean;
  clearScheduleScenarioSchedulingRange(): void;
  getScheduleScenarioSchedulingRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setScheduleScenarioSchedulingRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  hasNodeSelector(): boolean;
  clearNodeSelector(): void;
  getNodeSelector(): ParentEntity | undefined;
  setNodeSelector(value?: ParentEntity): void;

  getIncludeShiftInstances(): boolean;
  setIncludeShiftInstances(value: boolean): void;

  getIncludeShiftTemplate(): boolean;
  setIncludeShiftTemplate(value: boolean): void;

  getIncludeShiftSegments(): boolean;
  setIncludeShiftSegments(value: boolean): void;

  getIncludeSchedulingActivity(): boolean;
  setIncludeSchedulingActivity(value: boolean): void;

  getIncludeActivity(): boolean;
  setIncludeActivity(value: boolean): void;

  getAutoGenerateAgents(): boolean;
  setAutoGenerateAgents(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildDraftScheduleReq.AsObject;
  static toObject(includeInstance: boolean, msg: BuildDraftScheduleReq): BuildDraftScheduleReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildDraftScheduleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildDraftScheduleReq;
  static deserializeBinaryFromReader(message: BuildDraftScheduleReq, reader: jspb.BinaryReader): BuildDraftScheduleReq;
}

export namespace BuildDraftScheduleReq {
  export type AsObject = {
    draftScheduleSid: number,
    scheduleScenarioSid: number,
    scheduleScenarioSchedulingRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    nodeSelector?: ParentEntity.AsObject,
    includeShiftInstances: boolean,
    includeShiftTemplate: boolean,
    includeShiftSegments: boolean,
    includeSchedulingActivity: boolean,
    includeActivity: boolean,
    autoGenerateAgents: boolean,
  }
}

export class BuildDraftScheduleRes extends jspb.Message {
  hasDraftSchedule(): boolean;
  clearDraftSchedule(): void;
  getDraftSchedule(): DraftSchedule | undefined;
  setDraftSchedule(value?: DraftSchedule): void;

  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<Diagnostic>;
  setDiagnosticsList(value: Array<Diagnostic>): void;
  addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

  hasSchedulingResultMetric(): boolean;
  clearSchedulingResultMetric(): void;
  getSchedulingResultMetric(): api_commons_wfm_pb.SchedulingResultMetric | undefined;
  setSchedulingResultMetric(value?: api_commons_wfm_pb.SchedulingResultMetric): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildDraftScheduleRes.AsObject;
  static toObject(includeInstance: boolean, msg: BuildDraftScheduleRes): BuildDraftScheduleRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildDraftScheduleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildDraftScheduleRes;
  static deserializeBinaryFromReader(message: BuildDraftScheduleRes, reader: jspb.BinaryReader): BuildDraftScheduleRes;
}

export namespace BuildDraftScheduleRes {
  export type AsObject = {
    draftSchedule?: DraftSchedule.AsObject,
    diagnosticsList: Array<Diagnostic.AsObject>,
    schedulingResultMetric?: api_commons_wfm_pb.SchedulingResultMetric.AsObject,
  }
}

export class PublishDraftScheduleReq extends jspb.Message {
  getDraftScheduleSid(): number;
  setDraftScheduleSid(value: number): void;

  hasNodeSelector(): boolean;
  clearNodeSelector(): void;
  getNodeSelector(): ParentEntity | undefined;
  setNodeSelector(value?: ParentEntity): void;

  hasDatetimeRange(): boolean;
  clearDatetimeRange(): void;
  getDatetimeRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setDatetimeRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  getIncludeShiftInstances(): boolean;
  setIncludeShiftInstances(value: boolean): void;

  getIncludeShiftTemplate(): boolean;
  setIncludeShiftTemplate(value: boolean): void;

  getIncludeShiftSegments(): boolean;
  setIncludeShiftSegments(value: boolean): void;

  getIncludeSchedulingActivity(): boolean;
  setIncludeSchedulingActivity(value: boolean): void;

  getIncludeActivity(): boolean;
  setIncludeActivity(value: boolean): void;

  getIgnoreDiagnosticsErrors(): boolean;
  setIgnoreDiagnosticsErrors(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishDraftScheduleReq.AsObject;
  static toObject(includeInstance: boolean, msg: PublishDraftScheduleReq): PublishDraftScheduleReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishDraftScheduleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishDraftScheduleReq;
  static deserializeBinaryFromReader(message: PublishDraftScheduleReq, reader: jspb.BinaryReader): PublishDraftScheduleReq;
}

export namespace PublishDraftScheduleReq {
  export type AsObject = {
    draftScheduleSid: number,
    nodeSelector?: ParentEntity.AsObject,
    datetimeRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    includeShiftInstances: boolean,
    includeShiftTemplate: boolean,
    includeShiftSegments: boolean,
    includeSchedulingActivity: boolean,
    includeActivity: boolean,
    ignoreDiagnosticsErrors: boolean,
  }
}

export class PublishDraftScheduleRes extends jspb.Message {
  hasPublishedSchedule(): boolean;
  clearPublishedSchedule(): void;
  getPublishedSchedule(): PublishedSchedule | undefined;
  setPublishedSchedule(value?: PublishedSchedule): void;

  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<Diagnostic>;
  setDiagnosticsList(value: Array<Diagnostic>): void;
  addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishDraftScheduleRes.AsObject;
  static toObject(includeInstance: boolean, msg: PublishDraftScheduleRes): PublishDraftScheduleRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishDraftScheduleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishDraftScheduleRes;
  static deserializeBinaryFromReader(message: PublishDraftScheduleRes, reader: jspb.BinaryReader): PublishDraftScheduleRes;
}

export namespace PublishDraftScheduleRes {
  export type AsObject = {
    publishedSchedule?: PublishedSchedule.AsObject,
    diagnosticsList: Array<Diagnostic.AsObject>,
  }
}

export class ResetDraftScheduleReq extends jspb.Message {
  getDraftScheduleSid(): number;
  setDraftScheduleSid(value: number): void;

  hasDatetimeRange(): boolean;
  clearDatetimeRange(): void;
  getDatetimeRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setDatetimeRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  getUnlockedOnly(): boolean;
  setUnlockedOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetDraftScheduleReq.AsObject;
  static toObject(includeInstance: boolean, msg: ResetDraftScheduleReq): ResetDraftScheduleReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetDraftScheduleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetDraftScheduleReq;
  static deserializeBinaryFromReader(message: ResetDraftScheduleReq, reader: jspb.BinaryReader): ResetDraftScheduleReq;
}

export namespace ResetDraftScheduleReq {
  export type AsObject = {
    draftScheduleSid: number,
    datetimeRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    unlockedOnly: boolean,
  }
}

export class ResetDraftScheduleRes extends jspb.Message {
  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<Diagnostic>;
  setDiagnosticsList(value: Array<Diagnostic>): void;
  addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetDraftScheduleRes.AsObject;
  static toObject(includeInstance: boolean, msg: ResetDraftScheduleRes): ResetDraftScheduleRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetDraftScheduleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetDraftScheduleRes;
  static deserializeBinaryFromReader(message: ResetDraftScheduleRes, reader: jspb.BinaryReader): ResetDraftScheduleRes;
}

export namespace ResetDraftScheduleRes {
  export type AsObject = {
    diagnosticsList: Array<Diagnostic.AsObject>,
  }
}

export class GetDraftScheduleReq extends jspb.Message {
  getDraftScheduleSid(): number;
  setDraftScheduleSid(value: number): void;

  hasDatetimeRange(): boolean;
  clearDatetimeRange(): void;
  getDatetimeRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setDatetimeRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  getIncludeShiftInstances(): boolean;
  setIncludeShiftInstances(value: boolean): void;

  getIncludeShiftTemplate(): boolean;
  setIncludeShiftTemplate(value: boolean): void;

  getIncludeShiftSegments(): boolean;
  setIncludeShiftSegments(value: boolean): void;

  getIncludeSchedulingActivity(): boolean;
  setIncludeSchedulingActivity(value: boolean): void;

  getIncludeActivity(): boolean;
  setIncludeActivity(value: boolean): void;

  hasNodeSelector(): boolean;
  clearNodeSelector(): void;
  getNodeSelector(): ParentEntity | undefined;
  setNodeSelector(value?: ParentEntity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDraftScheduleReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetDraftScheduleReq): GetDraftScheduleReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDraftScheduleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDraftScheduleReq;
  static deserializeBinaryFromReader(message: GetDraftScheduleReq, reader: jspb.BinaryReader): GetDraftScheduleReq;
}

export namespace GetDraftScheduleReq {
  export type AsObject = {
    draftScheduleSid: number,
    datetimeRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    includeShiftInstances: boolean,
    includeShiftTemplate: boolean,
    includeShiftSegments: boolean,
    includeSchedulingActivity: boolean,
    includeActivity: boolean,
    nodeSelector?: ParentEntity.AsObject,
  }
}

export class GetDraftScheduleRes extends jspb.Message {
  hasDraftSchedule(): boolean;
  clearDraftSchedule(): void;
  getDraftSchedule(): DraftSchedule | undefined;
  setDraftSchedule(value?: DraftSchedule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDraftScheduleRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetDraftScheduleRes): GetDraftScheduleRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDraftScheduleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDraftScheduleRes;
  static deserializeBinaryFromReader(message: GetDraftScheduleRes, reader: jspb.BinaryReader): GetDraftScheduleRes;
}

export namespace GetDraftScheduleRes {
  export type AsObject = {
    draftSchedule?: DraftSchedule.AsObject,
  }
}

export class ListDraftSchedulesReq extends jspb.Message {
  hasDatetimeRange(): boolean;
  clearDatetimeRange(): void;
  getDatetimeRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setDatetimeRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDraftSchedulesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListDraftSchedulesReq): ListDraftSchedulesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDraftSchedulesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDraftSchedulesReq;
  static deserializeBinaryFromReader(message: ListDraftSchedulesReq, reader: jspb.BinaryReader): ListDraftSchedulesReq;
}

export namespace ListDraftSchedulesReq {
  export type AsObject = {
    datetimeRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
  }
}

export class ListDraftSchedulesRes extends jspb.Message {
  clearDraftSchedulesList(): void;
  getDraftSchedulesList(): Array<DraftSchedule>;
  setDraftSchedulesList(value: Array<DraftSchedule>): void;
  addDraftSchedules(value?: DraftSchedule, index?: number): DraftSchedule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDraftSchedulesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListDraftSchedulesRes): ListDraftSchedulesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDraftSchedulesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDraftSchedulesRes;
  static deserializeBinaryFromReader(message: ListDraftSchedulesRes, reader: jspb.BinaryReader): ListDraftSchedulesRes;
}

export namespace ListDraftSchedulesRes {
  export type AsObject = {
    draftSchedulesList: Array<DraftSchedule.AsObject>,
  }
}

export class ClearScheduleReq extends jspb.Message {
  hasScheduleSelector(): boolean;
  clearScheduleSelector(): void;
  getScheduleSelector(): api_commons_wfm_pb.ScheduleSelector | undefined;
  setScheduleSelector(value?: api_commons_wfm_pb.ScheduleSelector): void;

  hasNodeSelector(): boolean;
  clearNodeSelector(): void;
  getNodeSelector(): ParentEntity | undefined;
  setNodeSelector(value?: ParentEntity): void;

  hasDatetimeRange(): boolean;
  clearDatetimeRange(): void;
  getDatetimeRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setDatetimeRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  getInvertDatetimeRange(): boolean;
  setInvertDatetimeRange(value: boolean): void;

  getStartDatetimesOnly(): boolean;
  setStartDatetimesOnly(value: boolean): void;

  getDeleteLocked(): boolean;
  setDeleteLocked(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearScheduleReq.AsObject;
  static toObject(includeInstance: boolean, msg: ClearScheduleReq): ClearScheduleReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClearScheduleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearScheduleReq;
  static deserializeBinaryFromReader(message: ClearScheduleReq, reader: jspb.BinaryReader): ClearScheduleReq;
}

export namespace ClearScheduleReq {
  export type AsObject = {
    scheduleSelector?: api_commons_wfm_pb.ScheduleSelector.AsObject,
    nodeSelector?: ParentEntity.AsObject,
    datetimeRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    invertDatetimeRange: boolean,
    startDatetimesOnly: boolean,
    deleteLocked: boolean,
  }
}

export class ClearScheduleRes extends jspb.Message {
  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<Diagnostic>;
  setDiagnosticsList(value: Array<Diagnostic>): void;
  addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearScheduleRes.AsObject;
  static toObject(includeInstance: boolean, msg: ClearScheduleRes): ClearScheduleRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClearScheduleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearScheduleRes;
  static deserializeBinaryFromReader(message: ClearScheduleRes, reader: jspb.BinaryReader): ClearScheduleRes;
}

export namespace ClearScheduleRes {
  export type AsObject = {
    diagnosticsList: Array<Diagnostic.AsObject>,
  }
}

export class DeleteDraftScheduleReq extends jspb.Message {
  getDraftScheduleSid(): number;
  setDraftScheduleSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDraftScheduleReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDraftScheduleReq): DeleteDraftScheduleReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDraftScheduleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDraftScheduleReq;
  static deserializeBinaryFromReader(message: DeleteDraftScheduleReq, reader: jspb.BinaryReader): DeleteDraftScheduleReq;
}

export namespace DeleteDraftScheduleReq {
  export type AsObject = {
    draftScheduleSid: number,
  }
}

export class DeleteDraftScheduleRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDraftScheduleRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDraftScheduleRes): DeleteDraftScheduleRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDraftScheduleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDraftScheduleRes;
  static deserializeBinaryFromReader(message: DeleteDraftScheduleRes, reader: jspb.BinaryReader): DeleteDraftScheduleRes;
}

export namespace DeleteDraftScheduleRes {
  export type AsObject = {
  }
}

export class ListShiftInstancesBySidReq extends jspb.Message {
  clearShiftInstanceSidsList(): void;
  getShiftInstanceSidsList(): Array<number>;
  setShiftInstanceSidsList(value: Array<number>): void;
  addShiftInstanceSids(value: number, index?: number): number;

  getIncludeShiftSegments(): boolean;
  setIncludeShiftSegments(value: boolean): void;

  getIncludeShiftTemplate(): boolean;
  setIncludeShiftTemplate(value: boolean): void;

  getIncludeSchedulingActivity(): boolean;
  setIncludeSchedulingActivity(value: boolean): void;

  getIncludeActivity(): boolean;
  setIncludeActivity(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListShiftInstancesBySidReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListShiftInstancesBySidReq): ListShiftInstancesBySidReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListShiftInstancesBySidReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListShiftInstancesBySidReq;
  static deserializeBinaryFromReader(message: ListShiftInstancesBySidReq, reader: jspb.BinaryReader): ListShiftInstancesBySidReq;
}

export namespace ListShiftInstancesBySidReq {
  export type AsObject = {
    shiftInstanceSidsList: Array<number>,
    includeShiftSegments: boolean,
    includeShiftTemplate: boolean,
    includeSchedulingActivity: boolean,
    includeActivity: boolean,
  }
}

export class ListShiftInstancesBySidRes extends jspb.Message {
  clearShiftInstancesList(): void;
  getShiftInstancesList(): Array<ShiftInstance>;
  setShiftInstancesList(value: Array<ShiftInstance>): void;
  addShiftInstances(value?: ShiftInstance, index?: number): ShiftInstance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListShiftInstancesBySidRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListShiftInstancesBySidRes): ListShiftInstancesBySidRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListShiftInstancesBySidRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListShiftInstancesBySidRes;
  static deserializeBinaryFromReader(message: ListShiftInstancesBySidRes, reader: jspb.BinaryReader): ListShiftInstancesBySidRes;
}

export namespace ListShiftInstancesBySidRes {
  export type AsObject = {
    shiftInstancesList: Array<ShiftInstance.AsObject>,
  }
}

export class CopyScheduleToScheduleReq extends jspb.Message {
  hasSourceScheduleSelector(): boolean;
  clearSourceScheduleSelector(): void;
  getSourceScheduleSelector(): api_commons_wfm_pb.ScheduleSelector | undefined;
  setSourceScheduleSelector(value?: api_commons_wfm_pb.ScheduleSelector): void;

  hasDestinationScheduleSelector(): boolean;
  clearDestinationScheduleSelector(): void;
  getDestinationScheduleSelector(): api_commons_wfm_pb.ScheduleSelector | undefined;
  setDestinationScheduleSelector(value?: api_commons_wfm_pb.ScheduleSelector): void;

  hasNodeSelector(): boolean;
  clearNodeSelector(): void;
  getNodeSelector(): ParentEntity | undefined;
  setNodeSelector(value?: ParentEntity): void;

  hasDatetimeRange(): boolean;
  clearDatetimeRange(): void;
  getDatetimeRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setDatetimeRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  getStartDatetimesOnly(): boolean;
  setStartDatetimesOnly(value: boolean): void;

  getOverlapAsWarning(): boolean;
  setOverlapAsWarning(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyScheduleToScheduleReq.AsObject;
  static toObject(includeInstance: boolean, msg: CopyScheduleToScheduleReq): CopyScheduleToScheduleReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyScheduleToScheduleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyScheduleToScheduleReq;
  static deserializeBinaryFromReader(message: CopyScheduleToScheduleReq, reader: jspb.BinaryReader): CopyScheduleToScheduleReq;
}

export namespace CopyScheduleToScheduleReq {
  export type AsObject = {
    sourceScheduleSelector?: api_commons_wfm_pb.ScheduleSelector.AsObject,
    destinationScheduleSelector?: api_commons_wfm_pb.ScheduleSelector.AsObject,
    nodeSelector?: ParentEntity.AsObject,
    datetimeRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    startDatetimesOnly: boolean,
    overlapAsWarning: boolean,
  }
}

export class CopyScheduleToScheduleRes extends jspb.Message {
  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<Diagnostic>;
  setDiagnosticsList(value: Array<Diagnostic>): void;
  addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyScheduleToScheduleRes.AsObject;
  static toObject(includeInstance: boolean, msg: CopyScheduleToScheduleRes): CopyScheduleToScheduleRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyScheduleToScheduleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyScheduleToScheduleRes;
  static deserializeBinaryFromReader(message: CopyScheduleToScheduleRes, reader: jspb.BinaryReader): CopyScheduleToScheduleRes;
}

export namespace CopyScheduleToScheduleRes {
  export type AsObject = {
    diagnosticsList: Array<Diagnostic.AsObject>,
  }
}

export class CreateShiftInstanceReq extends jspb.Message {
  getDraftScheduleSid(): number;
  setDraftScheduleSid(value: number): void;

  getShiftTemplateSid(): number;
  setShiftTemplateSid(value: number): void;

  hasStartDatetime(): boolean;
  clearStartDatetime(): void;
  getStartDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDatetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getWidthInMinutes(): number;
  setWidthInMinutes(value: number): void;

  getIsLocked(): boolean;
  setIsLocked(value: boolean): void;

  hasWfmAgentSid(): boolean;
  clearWfmAgentSid(): void;
  getWfmAgentSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setWfmAgentSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  clearMetricTypesList(): void;
  getMetricTypesList(): Array<api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap]>;
  setMetricTypesList(value: Array<api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap]>): void;
  addMetricTypes(value: api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap], index?: number): api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateShiftInstanceReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateShiftInstanceReq): CreateShiftInstanceReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateShiftInstanceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateShiftInstanceReq;
  static deserializeBinaryFromReader(message: CreateShiftInstanceReq, reader: jspb.BinaryReader): CreateShiftInstanceReq;
}

export namespace CreateShiftInstanceReq {
  export type AsObject = {
    draftScheduleSid: number,
    shiftTemplateSid: number,
    startDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    widthInMinutes: number,
    isLocked: boolean,
    wfmAgentSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    metricTypesList: Array<api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap]>,
  }
}

export class CreateShiftInstanceRes extends jspb.Message {
  hasShiftInstance(): boolean;
  clearShiftInstance(): void;
  getShiftInstance(): ShiftInstance | undefined;
  setShiftInstance(value?: ShiftInstance): void;

  clearPerformanceMetricsList(): void;
  getPerformanceMetricsList(): Array<PerformanceMetric>;
  setPerformanceMetricsList(value: Array<PerformanceMetric>): void;
  addPerformanceMetrics(value?: PerformanceMetric, index?: number): PerformanceMetric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateShiftInstanceRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateShiftInstanceRes): CreateShiftInstanceRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateShiftInstanceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateShiftInstanceRes;
  static deserializeBinaryFromReader(message: CreateShiftInstanceRes, reader: jspb.BinaryReader): CreateShiftInstanceRes;
}

export namespace CreateShiftInstanceRes {
  export type AsObject = {
    shiftInstance?: ShiftInstance.AsObject,
    performanceMetricsList: Array<PerformanceMetric.AsObject>,
  }
}

export class CreateShiftInstanceV2Req extends jspb.Message {
  getDraftScheduleSid(): number;
  setDraftScheduleSid(value: number): void;

  getShiftTemplateSid(): number;
  setShiftTemplateSid(value: number): void;

  hasStartDatetime(): boolean;
  clearStartDatetime(): void;
  getStartDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDatetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIsLocked(): boolean;
  setIsLocked(value: boolean): void;

  clearWfmAgentSidsList(): void;
  getWfmAgentSidsList(): Array<number>;
  setWfmAgentSidsList(value: Array<number>): void;
  addWfmAgentSids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateShiftInstanceV2Req.AsObject;
  static toObject(includeInstance: boolean, msg: CreateShiftInstanceV2Req): CreateShiftInstanceV2Req.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateShiftInstanceV2Req, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateShiftInstanceV2Req;
  static deserializeBinaryFromReader(message: CreateShiftInstanceV2Req, reader: jspb.BinaryReader): CreateShiftInstanceV2Req;
}

export namespace CreateShiftInstanceV2Req {
  export type AsObject = {
    draftScheduleSid: number,
    shiftTemplateSid: number,
    startDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isLocked: boolean,
    wfmAgentSidsList: Array<number>,
  }
}

export class CreateShiftInstanceV2Res extends jspb.Message {
  clearShiftInstancesList(): void;
  getShiftInstancesList(): Array<ShiftInstance>;
  setShiftInstancesList(value: Array<ShiftInstance>): void;
  addShiftInstances(value?: ShiftInstance, index?: number): ShiftInstance;

  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<Diagnostic>;
  setDiagnosticsList(value: Array<Diagnostic>): void;
  addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateShiftInstanceV2Res.AsObject;
  static toObject(includeInstance: boolean, msg: CreateShiftInstanceV2Res): CreateShiftInstanceV2Res.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateShiftInstanceV2Res, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateShiftInstanceV2Res;
  static deserializeBinaryFromReader(message: CreateShiftInstanceV2Res, reader: jspb.BinaryReader): CreateShiftInstanceV2Res;
}

export namespace CreateShiftInstanceV2Res {
  export type AsObject = {
    shiftInstancesList: Array<ShiftInstance.AsObject>,
    diagnosticsList: Array<Diagnostic.AsObject>,
  }
}

export class CreateShiftInstanceWithSegmentsRequest extends jspb.Message {
  hasShiftInstance(): boolean;
  clearShiftInstance(): void;
  getShiftInstance(): ShiftInstance | undefined;
  setShiftInstance(value?: ShiftInstance): void;

  getIgnoreDiagnosticsErrors(): boolean;
  setIgnoreDiagnosticsErrors(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateShiftInstanceWithSegmentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateShiftInstanceWithSegmentsRequest): CreateShiftInstanceWithSegmentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateShiftInstanceWithSegmentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateShiftInstanceWithSegmentsRequest;
  static deserializeBinaryFromReader(message: CreateShiftInstanceWithSegmentsRequest, reader: jspb.BinaryReader): CreateShiftInstanceWithSegmentsRequest;
}

export namespace CreateShiftInstanceWithSegmentsRequest {
  export type AsObject = {
    shiftInstance?: ShiftInstance.AsObject,
    ignoreDiagnosticsErrors: boolean,
  }
}

export class CreateShiftInstanceWithSegmentsResponse extends jspb.Message {
  hasShiftInstance(): boolean;
  clearShiftInstance(): void;
  getShiftInstance(): ShiftInstance | undefined;
  setShiftInstance(value?: ShiftInstance): void;

  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<Diagnostic>;
  setDiagnosticsList(value: Array<Diagnostic>): void;
  addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateShiftInstanceWithSegmentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateShiftInstanceWithSegmentsResponse): CreateShiftInstanceWithSegmentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateShiftInstanceWithSegmentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateShiftInstanceWithSegmentsResponse;
  static deserializeBinaryFromReader(message: CreateShiftInstanceWithSegmentsResponse, reader: jspb.BinaryReader): CreateShiftInstanceWithSegmentsResponse;
}

export namespace CreateShiftInstanceWithSegmentsResponse {
  export type AsObject = {
    shiftInstance?: ShiftInstance.AsObject,
    diagnosticsList: Array<Diagnostic.AsObject>,
  }
}

export class SplitShiftInstanceReq extends jspb.Message {
  getShiftInstanceSid(): number;
  setShiftInstanceSid(value: number): void;

  hasTimeToSplit(): boolean;
  clearTimeToSplit(): void;
  getTimeToSplit(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeToSplit(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SplitShiftInstanceReq.AsObject;
  static toObject(includeInstance: boolean, msg: SplitShiftInstanceReq): SplitShiftInstanceReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SplitShiftInstanceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SplitShiftInstanceReq;
  static deserializeBinaryFromReader(message: SplitShiftInstanceReq, reader: jspb.BinaryReader): SplitShiftInstanceReq;
}

export namespace SplitShiftInstanceReq {
  export type AsObject = {
    shiftInstanceSid: number,
    timeToSplit?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class SplitShiftInstanceRes extends jspb.Message {
  clearShiftInstancesList(): void;
  getShiftInstancesList(): Array<ShiftInstance>;
  setShiftInstancesList(value: Array<ShiftInstance>): void;
  addShiftInstances(value?: ShiftInstance, index?: number): ShiftInstance;

  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<Diagnostic>;
  setDiagnosticsList(value: Array<Diagnostic>): void;
  addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SplitShiftInstanceRes.AsObject;
  static toObject(includeInstance: boolean, msg: SplitShiftInstanceRes): SplitShiftInstanceRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SplitShiftInstanceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SplitShiftInstanceRes;
  static deserializeBinaryFromReader(message: SplitShiftInstanceRes, reader: jspb.BinaryReader): SplitShiftInstanceRes;
}

export namespace SplitShiftInstanceRes {
  export type AsObject = {
    shiftInstancesList: Array<ShiftInstance.AsObject>,
    diagnosticsList: Array<Diagnostic.AsObject>,
  }
}

export class SwapShiftInstancesReq extends jspb.Message {
  getWfmAgentSid1(): number;
  setWfmAgentSid1(value: number): void;

  getWfmAgentSid2(): number;
  setWfmAgentSid2(value: number): void;

  clearShiftInstanceSidsList(): void;
  getShiftInstanceSidsList(): Array<number>;
  setShiftInstanceSidsList(value: Array<number>): void;
  addShiftInstanceSids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapShiftInstancesReq.AsObject;
  static toObject(includeInstance: boolean, msg: SwapShiftInstancesReq): SwapShiftInstancesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwapShiftInstancesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapShiftInstancesReq;
  static deserializeBinaryFromReader(message: SwapShiftInstancesReq, reader: jspb.BinaryReader): SwapShiftInstancesReq;
}

export namespace SwapShiftInstancesReq {
  export type AsObject = {
    wfmAgentSid1: number,
    wfmAgentSid2: number,
    shiftInstanceSidsList: Array<number>,
  }
}

export class SwapShiftInstancesRes extends jspb.Message {
  clearShiftInstancesList(): void;
  getShiftInstancesList(): Array<ShiftInstance>;
  setShiftInstancesList(value: Array<ShiftInstance>): void;
  addShiftInstances(value?: ShiftInstance, index?: number): ShiftInstance;

  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<Diagnostic>;
  setDiagnosticsList(value: Array<Diagnostic>): void;
  addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapShiftInstancesRes.AsObject;
  static toObject(includeInstance: boolean, msg: SwapShiftInstancesRes): SwapShiftInstancesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwapShiftInstancesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapShiftInstancesRes;
  static deserializeBinaryFromReader(message: SwapShiftInstancesRes, reader: jspb.BinaryReader): SwapShiftInstancesRes;
}

export namespace SwapShiftInstancesRes {
  export type AsObject = {
    shiftInstancesList: Array<ShiftInstance.AsObject>,
    diagnosticsList: Array<Diagnostic.AsObject>,
  }
}

export class UpdateShiftInstanceReq extends jspb.Message {
  getShiftInstanceSid(): number;
  setShiftInstanceSid(value: number): void;

  hasStartDatetime(): boolean;
  clearStartDatetime(): void;
  getStartDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDatetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIsLocked(): boolean;
  setIsLocked(value: boolean): void;

  getWidthInMinutes(): number;
  setWidthInMinutes(value: number): void;

  hasWfmAgentSid(): boolean;
  clearWfmAgentSid(): void;
  getWfmAgentSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setWfmAgentSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  clearMetricTypesList(): void;
  getMetricTypesList(): Array<api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap]>;
  setMetricTypesList(value: Array<api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap]>): void;
  addMetricTypes(value: api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap], index?: number): api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateShiftInstanceReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateShiftInstanceReq): UpdateShiftInstanceReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateShiftInstanceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateShiftInstanceReq;
  static deserializeBinaryFromReader(message: UpdateShiftInstanceReq, reader: jspb.BinaryReader): UpdateShiftInstanceReq;
}

export namespace UpdateShiftInstanceReq {
  export type AsObject = {
    shiftInstanceSid: number,
    startDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isLocked: boolean,
    widthInMinutes: number,
    wfmAgentSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    metricTypesList: Array<api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap]>,
  }
}

export class UpdateShiftInstanceRes extends jspb.Message {
  hasShiftInstance(): boolean;
  clearShiftInstance(): void;
  getShiftInstance(): ShiftInstance | undefined;
  setShiftInstance(value?: ShiftInstance): void;

  clearPerformanceMetricsList(): void;
  getPerformanceMetricsList(): Array<PerformanceMetric>;
  setPerformanceMetricsList(value: Array<PerformanceMetric>): void;
  addPerformanceMetrics(value?: PerformanceMetric, index?: number): PerformanceMetric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateShiftInstanceRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateShiftInstanceRes): UpdateShiftInstanceRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateShiftInstanceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateShiftInstanceRes;
  static deserializeBinaryFromReader(message: UpdateShiftInstanceRes, reader: jspb.BinaryReader): UpdateShiftInstanceRes;
}

export namespace UpdateShiftInstanceRes {
  export type AsObject = {
    shiftInstance?: ShiftInstance.AsObject,
    performanceMetricsList: Array<PerformanceMetric.AsObject>,
  }
}

export class UpdateShiftInstanceV2Req extends jspb.Message {
  getShiftInstanceSid(): number;
  setShiftInstanceSid(value: number): void;

  hasStartDatetime(): boolean;
  clearStartDatetime(): void;
  getStartDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDatetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getWidthInMinutes(): number;
  setWidthInMinutes(value: number): void;

  getWfmAgentSid(): number;
  setWfmAgentSid(value: number): void;

  getIsLocked(): boolean;
  setIsLocked(value: boolean): void;

  getPlannedShrinkagePercent(): number;
  setPlannedShrinkagePercent(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateShiftInstanceV2Req.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateShiftInstanceV2Req): UpdateShiftInstanceV2Req.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateShiftInstanceV2Req, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateShiftInstanceV2Req;
  static deserializeBinaryFromReader(message: UpdateShiftInstanceV2Req, reader: jspb.BinaryReader): UpdateShiftInstanceV2Req;
}

export namespace UpdateShiftInstanceV2Req {
  export type AsObject = {
    shiftInstanceSid: number,
    startDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    widthInMinutes: number,
    wfmAgentSid: number,
    isLocked: boolean,
    plannedShrinkagePercent: number,
  }
}

export class UpdateShiftInstanceV2Res extends jspb.Message {
  hasShiftInstance(): boolean;
  clearShiftInstance(): void;
  getShiftInstance(): ShiftInstance | undefined;
  setShiftInstance(value?: ShiftInstance): void;

  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<Diagnostic>;
  setDiagnosticsList(value: Array<Diagnostic>): void;
  addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateShiftInstanceV2Res.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateShiftInstanceV2Res): UpdateShiftInstanceV2Res.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateShiftInstanceV2Res, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateShiftInstanceV2Res;
  static deserializeBinaryFromReader(message: UpdateShiftInstanceV2Res, reader: jspb.BinaryReader): UpdateShiftInstanceV2Res;
}

export namespace UpdateShiftInstanceV2Res {
  export type AsObject = {
    shiftInstance?: ShiftInstance.AsObject,
    diagnosticsList: Array<Diagnostic.AsObject>,
  }
}

export class UpdateShiftInstanceWithSegmentsRequest extends jspb.Message {
  hasShiftInstance(): boolean;
  clearShiftInstance(): void;
  getShiftInstance(): ShiftInstance | undefined;
  setShiftInstance(value?: ShiftInstance): void;

  getIgnoreDiagnosticsErrors(): boolean;
  setIgnoreDiagnosticsErrors(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateShiftInstanceWithSegmentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateShiftInstanceWithSegmentsRequest): UpdateShiftInstanceWithSegmentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateShiftInstanceWithSegmentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateShiftInstanceWithSegmentsRequest;
  static deserializeBinaryFromReader(message: UpdateShiftInstanceWithSegmentsRequest, reader: jspb.BinaryReader): UpdateShiftInstanceWithSegmentsRequest;
}

export namespace UpdateShiftInstanceWithSegmentsRequest {
  export type AsObject = {
    shiftInstance?: ShiftInstance.AsObject,
    ignoreDiagnosticsErrors: boolean,
  }
}

export class UpdateShiftInstanceWithSegmentsResponse extends jspb.Message {
  hasShiftInstance(): boolean;
  clearShiftInstance(): void;
  getShiftInstance(): ShiftInstance | undefined;
  setShiftInstance(value?: ShiftInstance): void;

  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<Diagnostic>;
  setDiagnosticsList(value: Array<Diagnostic>): void;
  addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateShiftInstanceWithSegmentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateShiftInstanceWithSegmentsResponse): UpdateShiftInstanceWithSegmentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateShiftInstanceWithSegmentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateShiftInstanceWithSegmentsResponse;
  static deserializeBinaryFromReader(message: UpdateShiftInstanceWithSegmentsResponse, reader: jspb.BinaryReader): UpdateShiftInstanceWithSegmentsResponse;
}

export namespace UpdateShiftInstanceWithSegmentsResponse {
  export type AsObject = {
    shiftInstance?: ShiftInstance.AsObject,
    diagnosticsList: Array<Diagnostic.AsObject>,
  }
}

export class CopyShiftInstancesToScheduleReq extends jspb.Message {
  hasDestinationSchedule(): boolean;
  clearDestinationSchedule(): void;
  getDestinationSchedule(): api_commons_wfm_pb.ScheduleSelector | undefined;
  setDestinationSchedule(value?: api_commons_wfm_pb.ScheduleSelector): void;

  clearShiftInstanceSidsList(): void;
  getShiftInstanceSidsList(): Array<number>;
  setShiftInstanceSidsList(value: Array<number>): void;
  addShiftInstanceSids(value: number, index?: number): number;

  getOverlapAsWarning(): boolean;
  setOverlapAsWarning(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyShiftInstancesToScheduleReq.AsObject;
  static toObject(includeInstance: boolean, msg: CopyShiftInstancesToScheduleReq): CopyShiftInstancesToScheduleReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyShiftInstancesToScheduleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyShiftInstancesToScheduleReq;
  static deserializeBinaryFromReader(message: CopyShiftInstancesToScheduleReq, reader: jspb.BinaryReader): CopyShiftInstancesToScheduleReq;
}

export namespace CopyShiftInstancesToScheduleReq {
  export type AsObject = {
    destinationSchedule?: api_commons_wfm_pb.ScheduleSelector.AsObject,
    shiftInstanceSidsList: Array<number>,
    overlapAsWarning: boolean,
  }
}

export class CopyShiftInstancesToScheduleRes extends jspb.Message {
  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<Diagnostic>;
  setDiagnosticsList(value: Array<Diagnostic>): void;
  addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyShiftInstancesToScheduleRes.AsObject;
  static toObject(includeInstance: boolean, msg: CopyShiftInstancesToScheduleRes): CopyShiftInstancesToScheduleRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyShiftInstancesToScheduleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyShiftInstancesToScheduleRes;
  static deserializeBinaryFromReader(message: CopyShiftInstancesToScheduleRes, reader: jspb.BinaryReader): CopyShiftInstancesToScheduleRes;
}

export namespace CopyShiftInstancesToScheduleRes {
  export type AsObject = {
    diagnosticsList: Array<Diagnostic.AsObject>,
  }
}

export class ListShiftInstanceSidsForAgentReq extends jspb.Message {
  hasScheduleSelector(): boolean;
  clearScheduleSelector(): void;
  getScheduleSelector(): api_commons_wfm_pb.ScheduleSelector | undefined;
  setScheduleSelector(value?: api_commons_wfm_pb.ScheduleSelector): void;

  hasDatetimeRange(): boolean;
  clearDatetimeRange(): void;
  getDatetimeRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setDatetimeRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  getWfmAgentSid(): number;
  setWfmAgentSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListShiftInstanceSidsForAgentReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListShiftInstanceSidsForAgentReq): ListShiftInstanceSidsForAgentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListShiftInstanceSidsForAgentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListShiftInstanceSidsForAgentReq;
  static deserializeBinaryFromReader(message: ListShiftInstanceSidsForAgentReq, reader: jspb.BinaryReader): ListShiftInstanceSidsForAgentReq;
}

export namespace ListShiftInstanceSidsForAgentReq {
  export type AsObject = {
    scheduleSelector?: api_commons_wfm_pb.ScheduleSelector.AsObject,
    datetimeRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    wfmAgentSid: number,
  }
}

export class ListShiftInstanceSidsForAgentRes extends jspb.Message {
  clearShiftInstanceSidsList(): void;
  getShiftInstanceSidsList(): Array<number>;
  setShiftInstanceSidsList(value: Array<number>): void;
  addShiftInstanceSids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListShiftInstanceSidsForAgentRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListShiftInstanceSidsForAgentRes): ListShiftInstanceSidsForAgentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListShiftInstanceSidsForAgentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListShiftInstanceSidsForAgentRes;
  static deserializeBinaryFromReader(message: ListShiftInstanceSidsForAgentRes, reader: jspb.BinaryReader): ListShiftInstanceSidsForAgentRes;
}

export namespace ListShiftInstanceSidsForAgentRes {
  export type AsObject = {
    shiftInstanceSidsList: Array<number>,
  }
}

export class ListShiftSegmentsByShiftInstanceSidsReq extends jspb.Message {
  clearShiftInstanceSidsList(): void;
  getShiftInstanceSidsList(): Array<number>;
  setShiftInstanceSidsList(value: Array<number>): void;
  addShiftInstanceSids(value: number, index?: number): number;

  getIncludeSchedulingActivity(): boolean;
  setIncludeSchedulingActivity(value: boolean): void;

  getIncludeActivity(): boolean;
  setIncludeActivity(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListShiftSegmentsByShiftInstanceSidsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListShiftSegmentsByShiftInstanceSidsReq): ListShiftSegmentsByShiftInstanceSidsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListShiftSegmentsByShiftInstanceSidsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListShiftSegmentsByShiftInstanceSidsReq;
  static deserializeBinaryFromReader(message: ListShiftSegmentsByShiftInstanceSidsReq, reader: jspb.BinaryReader): ListShiftSegmentsByShiftInstanceSidsReq;
}

export namespace ListShiftSegmentsByShiftInstanceSidsReq {
  export type AsObject = {
    shiftInstanceSidsList: Array<number>,
    includeSchedulingActivity: boolean,
    includeActivity: boolean,
  }
}

export class ListShiftSegmentsByShiftInstanceSidsRes extends jspb.Message {
  clearShiftSegmentsList(): void;
  getShiftSegmentsList(): Array<ShiftSegment>;
  setShiftSegmentsList(value: Array<ShiftSegment>): void;
  addShiftSegments(value?: ShiftSegment, index?: number): ShiftSegment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListShiftSegmentsByShiftInstanceSidsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListShiftSegmentsByShiftInstanceSidsRes): ListShiftSegmentsByShiftInstanceSidsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListShiftSegmentsByShiftInstanceSidsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListShiftSegmentsByShiftInstanceSidsRes;
  static deserializeBinaryFromReader(message: ListShiftSegmentsByShiftInstanceSidsRes, reader: jspb.BinaryReader): ListShiftSegmentsByShiftInstanceSidsRes;
}

export namespace ListShiftSegmentsByShiftInstanceSidsRes {
  export type AsObject = {
    shiftSegmentsList: Array<ShiftSegment.AsObject>,
  }
}

export class PerformanceMetricParameter extends jspb.Message {
  getMetricType(): api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap];
  setMetricType(value: api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap]): void;

  hasServiceLevelTargetDurationSeconds(): boolean;
  clearServiceLevelTargetDurationSeconds(): void;
  getServiceLevelTargetDurationSeconds(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setServiceLevelTargetDurationSeconds(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PerformanceMetricParameter.AsObject;
  static toObject(includeInstance: boolean, msg: PerformanceMetricParameter): PerformanceMetricParameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PerformanceMetricParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PerformanceMetricParameter;
  static deserializeBinaryFromReader(message: PerformanceMetricParameter, reader: jspb.BinaryReader): PerformanceMetricParameter;
}

export namespace PerformanceMetricParameter {
  export type AsObject = {
    metricType: api_commons_wfm_pb.PerformanceMetricTypeMap[keyof api_commons_wfm_pb.PerformanceMetricTypeMap],
    serviceLevelTargetDurationSeconds?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class GetPerformanceMetricsReq extends jspb.Message {
  hasScheduleSelector(): boolean;
  clearScheduleSelector(): void;
  getScheduleSelector(): api_commons_wfm_pb.ScheduleSelector | undefined;
  setScheduleSelector(value?: api_commons_wfm_pb.ScheduleSelector): void;

  hasNodeSelector(): boolean;
  clearNodeSelector(): void;
  getNodeSelector(): ParentEntity | undefined;
  setNodeSelector(value?: ParentEntity): void;

  hasDatetimeRange(): boolean;
  clearDatetimeRange(): void;
  getDatetimeRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setDatetimeRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  clearMetricParamsList(): void;
  getMetricParamsList(): Array<PerformanceMetricParameter>;
  setMetricParamsList(value: Array<PerformanceMetricParameter>): void;
  addMetricParams(value?: PerformanceMetricParameter, index?: number): PerformanceMetricParameter;

  getIntervalWidthInMinutes(): number;
  setIntervalWidthInMinutes(value: number): void;

  getResyncCallStats(): boolean;
  setResyncCallStats(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPerformanceMetricsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetPerformanceMetricsReq): GetPerformanceMetricsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPerformanceMetricsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPerformanceMetricsReq;
  static deserializeBinaryFromReader(message: GetPerformanceMetricsReq, reader: jspb.BinaryReader): GetPerformanceMetricsReq;
}

export namespace GetPerformanceMetricsReq {
  export type AsObject = {
    scheduleSelector?: api_commons_wfm_pb.ScheduleSelector.AsObject,
    nodeSelector?: ParentEntity.AsObject,
    datetimeRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    metricParamsList: Array<PerformanceMetricParameter.AsObject>,
    intervalWidthInMinutes: number,
    resyncCallStats: boolean,
  }
}

export class GetPerformanceMetricsRes extends jspb.Message {
  clearPerformanceMetricsList(): void;
  getPerformanceMetricsList(): Array<PerformanceMetric>;
  setPerformanceMetricsList(value: Array<PerformanceMetric>): void;
  addPerformanceMetrics(value?: PerformanceMetric, index?: number): PerformanceMetric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPerformanceMetricsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetPerformanceMetricsRes): GetPerformanceMetricsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPerformanceMetricsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPerformanceMetricsRes;
  static deserializeBinaryFromReader(message: GetPerformanceMetricsRes, reader: jspb.BinaryReader): GetPerformanceMetricsRes;
}

export namespace GetPerformanceMetricsRes {
  export type AsObject = {
    performanceMetricsList: Array<PerformanceMetric.AsObject>,
  }
}

export class SchedulingTarget extends jspb.Message {
  getSchedulingTargetSid(): number;
  setSchedulingTargetSid(value: number): void;

  getSchedulingTargetType(): api_commons_wfm_pb.SchedulingTargetTypeMap[keyof api_commons_wfm_pb.SchedulingTargetTypeMap];
  setSchedulingTargetType(value: api_commons_wfm_pb.SchedulingTargetTypeMap[keyof api_commons_wfm_pb.SchedulingTargetTypeMap]): void;

  getSchedulingTargetPercentage(): number;
  setSchedulingTargetPercentage(value: number): void;

  hasServiceLevelTargetDurationSeconds(): boolean;
  clearServiceLevelTargetDurationSeconds(): void;
  getServiceLevelTargetDurationSeconds(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setServiceLevelTargetDurationSeconds(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasNodeEntity(): boolean;
  clearNodeEntity(): void;
  getNodeEntity(): ParentEntity | undefined;
  setNodeEntity(value?: ParentEntity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchedulingTarget.AsObject;
  static toObject(includeInstance: boolean, msg: SchedulingTarget): SchedulingTarget.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SchedulingTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchedulingTarget;
  static deserializeBinaryFromReader(message: SchedulingTarget, reader: jspb.BinaryReader): SchedulingTarget;
}

export namespace SchedulingTarget {
  export type AsObject = {
    schedulingTargetSid: number,
    schedulingTargetType: api_commons_wfm_pb.SchedulingTargetTypeMap[keyof api_commons_wfm_pb.SchedulingTargetTypeMap],
    schedulingTargetPercentage: number,
    serviceLevelTargetDurationSeconds?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    nodeEntity?: ParentEntity.AsObject,
  }
}

export class SetSchedulingTargetReq extends jspb.Message {
  hasSchedulingTarget(): boolean;
  clearSchedulingTarget(): void;
  getSchedulingTarget(): SchedulingTarget | undefined;
  setSchedulingTarget(value?: SchedulingTarget): void;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSchedulingTargetReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetSchedulingTargetReq): SetSchedulingTargetReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetSchedulingTargetReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSchedulingTargetReq;
  static deserializeBinaryFromReader(message: SetSchedulingTargetReq, reader: jspb.BinaryReader): SetSchedulingTargetReq;
}

export namespace SetSchedulingTargetReq {
  export type AsObject = {
    schedulingTarget?: SchedulingTarget.AsObject,
    scheduleScenarioSid: number,
  }
}

export class SetSchedulingTargetRes extends jspb.Message {
  getSchedulingTargetSid(): number;
  setSchedulingTargetSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSchedulingTargetRes.AsObject;
  static toObject(includeInstance: boolean, msg: SetSchedulingTargetRes): SetSchedulingTargetRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetSchedulingTargetRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSchedulingTargetRes;
  static deserializeBinaryFromReader(message: SetSchedulingTargetRes, reader: jspb.BinaryReader): SetSchedulingTargetRes;
}

export namespace SetSchedulingTargetRes {
  export type AsObject = {
    schedulingTargetSid: number,
  }
}

export class GetSchedulingTargetReq extends jspb.Message {
  hasNodeSelector(): boolean;
  clearNodeSelector(): void;
  getNodeSelector(): ParentEntity | undefined;
  setNodeSelector(value?: ParentEntity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSchedulingTargetReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSchedulingTargetReq): GetSchedulingTargetReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSchedulingTargetReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSchedulingTargetReq;
  static deserializeBinaryFromReader(message: GetSchedulingTargetReq, reader: jspb.BinaryReader): GetSchedulingTargetReq;
}

export namespace GetSchedulingTargetReq {
  export type AsObject = {
    nodeSelector?: ParentEntity.AsObject,
  }
}

export class GetSchedulingTargetRes extends jspb.Message {
  hasInheritedSchedulingTarget(): boolean;
  clearInheritedSchedulingTarget(): void;
  getInheritedSchedulingTarget(): SchedulingTarget | undefined;
  setInheritedSchedulingTarget(value?: SchedulingTarget): void;

  hasOwnSchedulingTarget(): boolean;
  clearOwnSchedulingTarget(): void;
  getOwnSchedulingTarget(): SchedulingTarget | undefined;
  setOwnSchedulingTarget(value?: SchedulingTarget): void;

  hasResultingSchedulingTarget(): boolean;
  clearResultingSchedulingTarget(): void;
  getResultingSchedulingTarget(): SchedulingTarget | undefined;
  setResultingSchedulingTarget(value?: SchedulingTarget): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSchedulingTargetRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetSchedulingTargetRes): GetSchedulingTargetRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSchedulingTargetRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSchedulingTargetRes;
  static deserializeBinaryFromReader(message: GetSchedulingTargetRes, reader: jspb.BinaryReader): GetSchedulingTargetRes;
}

export namespace GetSchedulingTargetRes {
  export type AsObject = {
    inheritedSchedulingTarget?: SchedulingTarget.AsObject,
    ownSchedulingTarget?: SchedulingTarget.AsObject,
    resultingSchedulingTarget?: SchedulingTarget.AsObject,
  }
}

export class DeleteSchedulingTargetReq extends jspb.Message {
  hasNodeSelector(): boolean;
  clearNodeSelector(): void;
  getNodeSelector(): ParentEntity | undefined;
  setNodeSelector(value?: ParentEntity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSchedulingTargetReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSchedulingTargetReq): DeleteSchedulingTargetReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSchedulingTargetReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSchedulingTargetReq;
  static deserializeBinaryFromReader(message: DeleteSchedulingTargetReq, reader: jspb.BinaryReader): DeleteSchedulingTargetReq;
}

export namespace DeleteSchedulingTargetReq {
  export type AsObject = {
    nodeSelector?: ParentEntity.AsObject,
  }
}

export class DeleteSchedulingTargetRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSchedulingTargetRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSchedulingTargetRes): DeleteSchedulingTargetRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSchedulingTargetRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSchedulingTargetRes;
  static deserializeBinaryFromReader(message: DeleteSchedulingTargetRes, reader: jspb.BinaryReader): DeleteSchedulingTargetRes;
}

export namespace DeleteSchedulingTargetRes {
  export type AsObject = {
  }
}

export class GetDefaultSchedulingTargetReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefaultSchedulingTargetReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefaultSchedulingTargetReq): GetDefaultSchedulingTargetReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefaultSchedulingTargetReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefaultSchedulingTargetReq;
  static deserializeBinaryFromReader(message: GetDefaultSchedulingTargetReq, reader: jspb.BinaryReader): GetDefaultSchedulingTargetReq;
}

export namespace GetDefaultSchedulingTargetReq {
  export type AsObject = {
  }
}

export class GetDefaultSchedulingTargetRes extends jspb.Message {
  hasSchedulingTarget(): boolean;
  clearSchedulingTarget(): void;
  getSchedulingTarget(): SchedulingTarget | undefined;
  setSchedulingTarget(value?: SchedulingTarget): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefaultSchedulingTargetRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefaultSchedulingTargetRes): GetDefaultSchedulingTargetRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefaultSchedulingTargetRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefaultSchedulingTargetRes;
  static deserializeBinaryFromReader(message: GetDefaultSchedulingTargetRes, reader: jspb.BinaryReader): GetDefaultSchedulingTargetRes;
}

export namespace GetDefaultSchedulingTargetRes {
  export type AsObject = {
    schedulingTarget?: SchedulingTarget.AsObject,
  }
}

export class SetDefaultSchedulingTargetReq extends jspb.Message {
  hasSchedulingTarget(): boolean;
  clearSchedulingTarget(): void;
  getSchedulingTarget(): SchedulingTarget | undefined;
  setSchedulingTarget(value?: SchedulingTarget): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDefaultSchedulingTargetReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetDefaultSchedulingTargetReq): SetDefaultSchedulingTargetReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDefaultSchedulingTargetReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDefaultSchedulingTargetReq;
  static deserializeBinaryFromReader(message: SetDefaultSchedulingTargetReq, reader: jspb.BinaryReader): SetDefaultSchedulingTargetReq;
}

export namespace SetDefaultSchedulingTargetReq {
  export type AsObject = {
    schedulingTarget?: SchedulingTarget.AsObject,
  }
}

export class SetDefaultSchedulingTargetRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDefaultSchedulingTargetRes.AsObject;
  static toObject(includeInstance: boolean, msg: SetDefaultSchedulingTargetRes): SetDefaultSchedulingTargetRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDefaultSchedulingTargetRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDefaultSchedulingTargetRes;
  static deserializeBinaryFromReader(message: SetDefaultSchedulingTargetRes, reader: jspb.BinaryReader): SetDefaultSchedulingTargetRes;
}

export namespace SetDefaultSchedulingTargetRes {
  export type AsObject = {
  }
}

export class ListRequiredCallsIntervalsReq extends jspb.Message {
  hasNodeSelector(): boolean;
  clearNodeSelector(): void;
  getNodeSelector(): ParentEntity | undefined;
  setNodeSelector(value?: ParentEntity): void;

  hasDatetimeRange(): boolean;
  clearDatetimeRange(): void;
  getDatetimeRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setDatetimeRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  getIntervalWidthInMinutes(): number;
  setIntervalWidthInMinutes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequiredCallsIntervalsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequiredCallsIntervalsReq): ListRequiredCallsIntervalsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRequiredCallsIntervalsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequiredCallsIntervalsReq;
  static deserializeBinaryFromReader(message: ListRequiredCallsIntervalsReq, reader: jspb.BinaryReader): ListRequiredCallsIntervalsReq;
}

export namespace ListRequiredCallsIntervalsReq {
  export type AsObject = {
    nodeSelector?: ParentEntity.AsObject,
    datetimeRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    intervalWidthInMinutes: number,
  }
}

export class ListRequiredCallsIntervalsRes extends jspb.Message {
  getIntervalWidthInMinutes(): number;
  setIntervalWidthInMinutes(value: number): void;

  clearRequiredCallsIntervalsList(): void;
  getRequiredCallsIntervalsList(): Array<RequiredCallsInterval>;
  setRequiredCallsIntervalsList(value: Array<RequiredCallsInterval>): void;
  addRequiredCallsIntervals(value?: RequiredCallsInterval, index?: number): RequiredCallsInterval;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequiredCallsIntervalsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequiredCallsIntervalsRes): ListRequiredCallsIntervalsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRequiredCallsIntervalsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequiredCallsIntervalsRes;
  static deserializeBinaryFromReader(message: ListRequiredCallsIntervalsRes, reader: jspb.BinaryReader): ListRequiredCallsIntervalsRes;
}

export namespace ListRequiredCallsIntervalsRes {
  export type AsObject = {
    intervalWidthInMinutes: number,
    requiredCallsIntervalsList: Array<RequiredCallsInterval.AsObject>,
  }
}

export class TourShiftSegmentConfig extends jspb.Message {
  getTourShiftSegmentConfigSid(): string;
  setTourShiftSegmentConfigSid(value: string): void;

  getTourShiftInstanceConfigSid(): string;
  setTourShiftInstanceConfigSid(value: string): void;

  getStartMinuteInShift(): number;
  setStartMinuteInShift(value: number): void;

  getWidthInMinutes(): number;
  setWidthInMinutes(value: number): void;

  getSchedulingActivitySid(): number;
  setSchedulingActivitySid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TourShiftSegmentConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TourShiftSegmentConfig): TourShiftSegmentConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TourShiftSegmentConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TourShiftSegmentConfig;
  static deserializeBinaryFromReader(message: TourShiftSegmentConfig, reader: jspb.BinaryReader): TourShiftSegmentConfig;
}

export namespace TourShiftSegmentConfig {
  export type AsObject = {
    tourShiftSegmentConfigSid: string,
    tourShiftInstanceConfigSid: string,
    startMinuteInShift: number,
    widthInMinutes: number,
    schedulingActivitySid: number,
  }
}

export class TourShiftInstanceConfig extends jspb.Message {
  getTourShiftInstanceConfigSid(): string;
  setTourShiftInstanceConfigSid(value: string): void;

  getTourWeekPatternSid(): string;
  setTourWeekPatternSid(value: string): void;

  getStartMinuteInWeek(): number;
  setStartMinuteInWeek(value: number): void;

  getWidthInMinutes(): number;
  setWidthInMinutes(value: number): void;

  clearMemberTourShiftSegmentConfigsList(): void;
  getMemberTourShiftSegmentConfigsList(): Array<TourShiftSegmentConfig>;
  setMemberTourShiftSegmentConfigsList(value: Array<TourShiftSegmentConfig>): void;
  addMemberTourShiftSegmentConfigs(value?: TourShiftSegmentConfig, index?: number): TourShiftSegmentConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TourShiftInstanceConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TourShiftInstanceConfig): TourShiftInstanceConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TourShiftInstanceConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TourShiftInstanceConfig;
  static deserializeBinaryFromReader(message: TourShiftInstanceConfig, reader: jspb.BinaryReader): TourShiftInstanceConfig;
}

export namespace TourShiftInstanceConfig {
  export type AsObject = {
    tourShiftInstanceConfigSid: string,
    tourWeekPatternSid: string,
    startMinuteInWeek: number,
    widthInMinutes: number,
    memberTourShiftSegmentConfigsList: Array<TourShiftSegmentConfig.AsObject>,
  }
}

export class TourWeekPattern extends jspb.Message {
  getTourWeekPatternSid(): string;
  setTourWeekPatternSid(value: string): void;

  getTourPatternSid(): string;
  setTourPatternSid(value: string): void;

  getWeekPatternNumber(): number;
  setWeekPatternNumber(value: number): void;

  clearMemberTourShiftInstanceConfigsList(): void;
  getMemberTourShiftInstanceConfigsList(): Array<TourShiftInstanceConfig>;
  setMemberTourShiftInstanceConfigsList(value: Array<TourShiftInstanceConfig>): void;
  addMemberTourShiftInstanceConfigs(value?: TourShiftInstanceConfig, index?: number): TourShiftInstanceConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TourWeekPattern.AsObject;
  static toObject(includeInstance: boolean, msg: TourWeekPattern): TourWeekPattern.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TourWeekPattern, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TourWeekPattern;
  static deserializeBinaryFromReader(message: TourWeekPattern, reader: jspb.BinaryReader): TourWeekPattern;
}

export namespace TourWeekPattern {
  export type AsObject = {
    tourWeekPatternSid: string,
    tourPatternSid: string,
    weekPatternNumber: number,
    memberTourShiftInstanceConfigsList: Array<TourShiftInstanceConfig.AsObject>,
  }
}

export class TourAgentCollection extends jspb.Message {
  getTourAgentCollectionSid(): string;
  setTourAgentCollectionSid(value: string): void;

  getTourPatternSid(): string;
  setTourPatternSid(value: string): void;

  getMinAgentsToSchedule(): number;
  setMinAgentsToSchedule(value: number): void;

  getMaxAgentsToSchedule(): number;
  setMaxAgentsToSchedule(value: number): void;

  getFirstWeekPatternNumber(): number;
  setFirstWeekPatternNumber(value: number): void;

  getName(): string;
  setName(value: string): void;

  clearWfmAgentSidsList(): void;
  getWfmAgentSidsList(): Array<number>;
  setWfmAgentSidsList(value: Array<number>): void;
  addWfmAgentSids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TourAgentCollection.AsObject;
  static toObject(includeInstance: boolean, msg: TourAgentCollection): TourAgentCollection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TourAgentCollection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TourAgentCollection;
  static deserializeBinaryFromReader(message: TourAgentCollection, reader: jspb.BinaryReader): TourAgentCollection;
}

export namespace TourAgentCollection {
  export type AsObject = {
    tourAgentCollectionSid: string,
    tourPatternSid: string,
    minAgentsToSchedule: number,
    maxAgentsToSchedule: number,
    firstWeekPatternNumber: number,
    name: string,
    wfmAgentSidsList: Array<number>,
  }
}

export class TourPattern extends jspb.Message {
  getTourPatternSid(): string;
  setTourPatternSid(value: string): void;

  getShiftTemplateSid(): number;
  setShiftTemplateSid(value: number): void;

  clearMemberTourWeekPatternsList(): void;
  getMemberTourWeekPatternsList(): Array<TourWeekPattern>;
  setMemberTourWeekPatternsList(value: Array<TourWeekPattern>): void;
  addMemberTourWeekPatterns(value?: TourWeekPattern, index?: number): TourWeekPattern;

  clearMemberTourAgentCollectionsList(): void;
  getMemberTourAgentCollectionsList(): Array<TourAgentCollection>;
  setMemberTourAgentCollectionsList(value: Array<TourAgentCollection>): void;
  addMemberTourAgentCollections(value?: TourAgentCollection, index?: number): TourAgentCollection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TourPattern.AsObject;
  static toObject(includeInstance: boolean, msg: TourPattern): TourPattern.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TourPattern, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TourPattern;
  static deserializeBinaryFromReader(message: TourPattern, reader: jspb.BinaryReader): TourPattern;
}

export namespace TourPattern {
  export type AsObject = {
    tourPatternSid: string,
    shiftTemplateSid: number,
    memberTourWeekPatternsList: Array<TourWeekPattern.AsObject>,
    memberTourAgentCollectionsList: Array<TourAgentCollection.AsObject>,
  }
}

export class CreateTourPatternReq extends jspb.Message {
  getShiftTemplateSid(): number;
  setShiftTemplateSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTourPatternReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTourPatternReq): CreateTourPatternReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTourPatternReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTourPatternReq;
  static deserializeBinaryFromReader(message: CreateTourPatternReq, reader: jspb.BinaryReader): CreateTourPatternReq;
}

export namespace CreateTourPatternReq {
  export type AsObject = {
    shiftTemplateSid: number,
  }
}

export class CreateTourPatternRes extends jspb.Message {
  getTourPatternSid(): string;
  setTourPatternSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTourPatternRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTourPatternRes): CreateTourPatternRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTourPatternRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTourPatternRes;
  static deserializeBinaryFromReader(message: CreateTourPatternRes, reader: jspb.BinaryReader): CreateTourPatternRes;
}

export namespace CreateTourPatternRes {
  export type AsObject = {
    tourPatternSid: string,
  }
}

export class GetTourPatternDiagnosticsReq extends jspb.Message {
  hasTourPattern(): boolean;
  clearTourPattern(): void;
  getTourPattern(): TourPattern | undefined;
  setTourPattern(value?: TourPattern): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTourPatternDiagnosticsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetTourPatternDiagnosticsReq): GetTourPatternDiagnosticsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTourPatternDiagnosticsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTourPatternDiagnosticsReq;
  static deserializeBinaryFromReader(message: GetTourPatternDiagnosticsReq, reader: jspb.BinaryReader): GetTourPatternDiagnosticsReq;
}

export namespace GetTourPatternDiagnosticsReq {
  export type AsObject = {
    tourPattern?: TourPattern.AsObject,
  }
}

export class GetTourPatternDiagnosticsRes extends jspb.Message {
  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<Diagnostic>;
  setDiagnosticsList(value: Array<Diagnostic>): void;
  addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTourPatternDiagnosticsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetTourPatternDiagnosticsRes): GetTourPatternDiagnosticsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTourPatternDiagnosticsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTourPatternDiagnosticsRes;
  static deserializeBinaryFromReader(message: GetTourPatternDiagnosticsRes, reader: jspb.BinaryReader): GetTourPatternDiagnosticsRes;
}

export namespace GetTourPatternDiagnosticsRes {
  export type AsObject = {
    diagnosticsList: Array<Diagnostic.AsObject>,
  }
}

export class UpsertTourPatternWithMembersReq extends jspb.Message {
  hasTourPattern(): boolean;
  clearTourPattern(): void;
  getTourPattern(): TourPattern | undefined;
  setTourPattern(value?: TourPattern): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertTourPatternWithMembersReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertTourPatternWithMembersReq): UpsertTourPatternWithMembersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertTourPatternWithMembersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertTourPatternWithMembersReq;
  static deserializeBinaryFromReader(message: UpsertTourPatternWithMembersReq, reader: jspb.BinaryReader): UpsertTourPatternWithMembersReq;
}

export namespace UpsertTourPatternWithMembersReq {
  export type AsObject = {
    tourPattern?: TourPattern.AsObject,
  }
}

export class UpsertTourPatternWithMembersRes extends jspb.Message {
  hasTourPattern(): boolean;
  clearTourPattern(): void;
  getTourPattern(): TourPattern | undefined;
  setTourPattern(value?: TourPattern): void;

  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<Diagnostic>;
  setDiagnosticsList(value: Array<Diagnostic>): void;
  addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertTourPatternWithMembersRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertTourPatternWithMembersRes): UpsertTourPatternWithMembersRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertTourPatternWithMembersRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertTourPatternWithMembersRes;
  static deserializeBinaryFromReader(message: UpsertTourPatternWithMembersRes, reader: jspb.BinaryReader): UpsertTourPatternWithMembersRes;
}

export namespace UpsertTourPatternWithMembersRes {
  export type AsObject = {
    tourPattern?: TourPattern.AsObject,
    diagnosticsList: Array<Diagnostic.AsObject>,
  }
}

export class GetTourPatternReq extends jspb.Message {
  getShiftTemplateSid(): number;
  setShiftTemplateSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTourPatternReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetTourPatternReq): GetTourPatternReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTourPatternReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTourPatternReq;
  static deserializeBinaryFromReader(message: GetTourPatternReq, reader: jspb.BinaryReader): GetTourPatternReq;
}

export namespace GetTourPatternReq {
  export type AsObject = {
    shiftTemplateSid: number,
  }
}

export class GetTourPatternRes extends jspb.Message {
  hasTourPattern(): boolean;
  clearTourPattern(): void;
  getTourPattern(): TourPattern | undefined;
  setTourPattern(value?: TourPattern): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTourPatternRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetTourPatternRes): GetTourPatternRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTourPatternRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTourPatternRes;
  static deserializeBinaryFromReader(message: GetTourPatternRes, reader: jspb.BinaryReader): GetTourPatternRes;
}

export namespace GetTourPatternRes {
  export type AsObject = {
    tourPattern?: TourPattern.AsObject,
  }
}

export class GetTourPatternWithMembersReq extends jspb.Message {
  getShiftTemplateSid(): number;
  setShiftTemplateSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTourPatternWithMembersReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetTourPatternWithMembersReq): GetTourPatternWithMembersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTourPatternWithMembersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTourPatternWithMembersReq;
  static deserializeBinaryFromReader(message: GetTourPatternWithMembersReq, reader: jspb.BinaryReader): GetTourPatternWithMembersReq;
}

export namespace GetTourPatternWithMembersReq {
  export type AsObject = {
    shiftTemplateSid: number,
  }
}

export class GetTourPatternWithMembersRes extends jspb.Message {
  hasTourPattern(): boolean;
  clearTourPattern(): void;
  getTourPattern(): TourPattern | undefined;
  setTourPattern(value?: TourPattern): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTourPatternWithMembersRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetTourPatternWithMembersRes): GetTourPatternWithMembersRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTourPatternWithMembersRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTourPatternWithMembersRes;
  static deserializeBinaryFromReader(message: GetTourPatternWithMembersRes, reader: jspb.BinaryReader): GetTourPatternWithMembersRes;
}

export namespace GetTourPatternWithMembersRes {
  export type AsObject = {
    tourPattern?: TourPattern.AsObject,
  }
}

export class DeleteTourPatternReq extends jspb.Message {
  getTourPatternSid(): string;
  setTourPatternSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTourPatternReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTourPatternReq): DeleteTourPatternReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTourPatternReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTourPatternReq;
  static deserializeBinaryFromReader(message: DeleteTourPatternReq, reader: jspb.BinaryReader): DeleteTourPatternReq;
}

export namespace DeleteTourPatternReq {
  export type AsObject = {
    tourPatternSid: string,
  }
}

export class DeleteTourPatternRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTourPatternRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTourPatternRes): DeleteTourPatternRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTourPatternRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTourPatternRes;
  static deserializeBinaryFromReader(message: DeleteTourPatternRes, reader: jspb.BinaryReader): DeleteTourPatternRes;
}

export namespace DeleteTourPatternRes {
  export type AsObject = {
  }
}

export class CreateTourWeekPatternReq extends jspb.Message {
  getTourPatternSid(): string;
  setTourPatternSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTourWeekPatternReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTourWeekPatternReq): CreateTourWeekPatternReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTourWeekPatternReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTourWeekPatternReq;
  static deserializeBinaryFromReader(message: CreateTourWeekPatternReq, reader: jspb.BinaryReader): CreateTourWeekPatternReq;
}

export namespace CreateTourWeekPatternReq {
  export type AsObject = {
    tourPatternSid: string,
  }
}

export class CreateTourWeekPatternRes extends jspb.Message {
  getTourWeekPatternSid(): string;
  setTourWeekPatternSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTourWeekPatternRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTourWeekPatternRes): CreateTourWeekPatternRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTourWeekPatternRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTourWeekPatternRes;
  static deserializeBinaryFromReader(message: CreateTourWeekPatternRes, reader: jspb.BinaryReader): CreateTourWeekPatternRes;
}

export namespace CreateTourWeekPatternRes {
  export type AsObject = {
    tourWeekPatternSid: string,
  }
}

export class ListTourWeekPatternsReq extends jspb.Message {
  getTourPatternSid(): string;
  setTourPatternSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTourWeekPatternsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListTourWeekPatternsReq): ListTourWeekPatternsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTourWeekPatternsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTourWeekPatternsReq;
  static deserializeBinaryFromReader(message: ListTourWeekPatternsReq, reader: jspb.BinaryReader): ListTourWeekPatternsReq;
}

export namespace ListTourWeekPatternsReq {
  export type AsObject = {
    tourPatternSid: string,
  }
}

export class ListTourWeekPatternsRes extends jspb.Message {
  clearTourWeekPatternsList(): void;
  getTourWeekPatternsList(): Array<TourWeekPattern>;
  setTourWeekPatternsList(value: Array<TourWeekPattern>): void;
  addTourWeekPatterns(value?: TourWeekPattern, index?: number): TourWeekPattern;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTourWeekPatternsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListTourWeekPatternsRes): ListTourWeekPatternsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTourWeekPatternsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTourWeekPatternsRes;
  static deserializeBinaryFromReader(message: ListTourWeekPatternsRes, reader: jspb.BinaryReader): ListTourWeekPatternsRes;
}

export namespace ListTourWeekPatternsRes {
  export type AsObject = {
    tourWeekPatternsList: Array<TourWeekPattern.AsObject>,
  }
}

export class DeleteTourWeekPatternsReq extends jspb.Message {
  clearTourWeekPatternSidsList(): void;
  getTourWeekPatternSidsList(): Array<string>;
  setTourWeekPatternSidsList(value: Array<string>): void;
  addTourWeekPatternSids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTourWeekPatternsReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTourWeekPatternsReq): DeleteTourWeekPatternsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTourWeekPatternsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTourWeekPatternsReq;
  static deserializeBinaryFromReader(message: DeleteTourWeekPatternsReq, reader: jspb.BinaryReader): DeleteTourWeekPatternsReq;
}

export namespace DeleteTourWeekPatternsReq {
  export type AsObject = {
    tourWeekPatternSidsList: Array<string>,
  }
}

export class DeleteTourWeekPatternsRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTourWeekPatternsRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTourWeekPatternsRes): DeleteTourWeekPatternsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTourWeekPatternsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTourWeekPatternsRes;
  static deserializeBinaryFromReader(message: DeleteTourWeekPatternsRes, reader: jspb.BinaryReader): DeleteTourWeekPatternsRes;
}

export namespace DeleteTourWeekPatternsRes {
  export type AsObject = {
  }
}

export class CreateTourShiftInstanceConfigReq extends jspb.Message {
  hasTourShiftInstanceConfig(): boolean;
  clearTourShiftInstanceConfig(): void;
  getTourShiftInstanceConfig(): TourShiftInstanceConfig | undefined;
  setTourShiftInstanceConfig(value?: TourShiftInstanceConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTourShiftInstanceConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTourShiftInstanceConfigReq): CreateTourShiftInstanceConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTourShiftInstanceConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTourShiftInstanceConfigReq;
  static deserializeBinaryFromReader(message: CreateTourShiftInstanceConfigReq, reader: jspb.BinaryReader): CreateTourShiftInstanceConfigReq;
}

export namespace CreateTourShiftInstanceConfigReq {
  export type AsObject = {
    tourShiftInstanceConfig?: TourShiftInstanceConfig.AsObject,
  }
}

export class CreateTourShiftInstanceConfigRes extends jspb.Message {
  getTourShiftInstanceConfigSid(): string;
  setTourShiftInstanceConfigSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTourShiftInstanceConfigRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTourShiftInstanceConfigRes): CreateTourShiftInstanceConfigRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTourShiftInstanceConfigRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTourShiftInstanceConfigRes;
  static deserializeBinaryFromReader(message: CreateTourShiftInstanceConfigRes, reader: jspb.BinaryReader): CreateTourShiftInstanceConfigRes;
}

export namespace CreateTourShiftInstanceConfigRes {
  export type AsObject = {
    tourShiftInstanceConfigSid: string,
  }
}

export class UpdateTourShiftInstanceConfigReq extends jspb.Message {
  hasTourShiftInstanceConfig(): boolean;
  clearTourShiftInstanceConfig(): void;
  getTourShiftInstanceConfig(): TourShiftInstanceConfig | undefined;
  setTourShiftInstanceConfig(value?: TourShiftInstanceConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTourShiftInstanceConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTourShiftInstanceConfigReq): UpdateTourShiftInstanceConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTourShiftInstanceConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTourShiftInstanceConfigReq;
  static deserializeBinaryFromReader(message: UpdateTourShiftInstanceConfigReq, reader: jspb.BinaryReader): UpdateTourShiftInstanceConfigReq;
}

export namespace UpdateTourShiftInstanceConfigReq {
  export type AsObject = {
    tourShiftInstanceConfig?: TourShiftInstanceConfig.AsObject,
  }
}

export class UpdateTourShiftInstanceConfigRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTourShiftInstanceConfigRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTourShiftInstanceConfigRes): UpdateTourShiftInstanceConfigRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTourShiftInstanceConfigRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTourShiftInstanceConfigRes;
  static deserializeBinaryFromReader(message: UpdateTourShiftInstanceConfigRes, reader: jspb.BinaryReader): UpdateTourShiftInstanceConfigRes;
}

export namespace UpdateTourShiftInstanceConfigRes {
  export type AsObject = {
  }
}

export class ListTourShiftInstanceConfigsReq extends jspb.Message {
  clearTourWeekPatternSidsList(): void;
  getTourWeekPatternSidsList(): Array<string>;
  setTourWeekPatternSidsList(value: Array<string>): void;
  addTourWeekPatternSids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTourShiftInstanceConfigsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListTourShiftInstanceConfigsReq): ListTourShiftInstanceConfigsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTourShiftInstanceConfigsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTourShiftInstanceConfigsReq;
  static deserializeBinaryFromReader(message: ListTourShiftInstanceConfigsReq, reader: jspb.BinaryReader): ListTourShiftInstanceConfigsReq;
}

export namespace ListTourShiftInstanceConfigsReq {
  export type AsObject = {
    tourWeekPatternSidsList: Array<string>,
  }
}

export class ListTourShiftInstanceConfigsRes extends jspb.Message {
  clearTourShiftInstanceConfigsList(): void;
  getTourShiftInstanceConfigsList(): Array<TourShiftInstanceConfig>;
  setTourShiftInstanceConfigsList(value: Array<TourShiftInstanceConfig>): void;
  addTourShiftInstanceConfigs(value?: TourShiftInstanceConfig, index?: number): TourShiftInstanceConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTourShiftInstanceConfigsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListTourShiftInstanceConfigsRes): ListTourShiftInstanceConfigsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTourShiftInstanceConfigsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTourShiftInstanceConfigsRes;
  static deserializeBinaryFromReader(message: ListTourShiftInstanceConfigsRes, reader: jspb.BinaryReader): ListTourShiftInstanceConfigsRes;
}

export namespace ListTourShiftInstanceConfigsRes {
  export type AsObject = {
    tourShiftInstanceConfigsList: Array<TourShiftInstanceConfig.AsObject>,
  }
}

export class DeleteTourShiftInstanceConfigsReq extends jspb.Message {
  clearTourShiftInstanceConfigSidsList(): void;
  getTourShiftInstanceConfigSidsList(): Array<string>;
  setTourShiftInstanceConfigSidsList(value: Array<string>): void;
  addTourShiftInstanceConfigSids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTourShiftInstanceConfigsReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTourShiftInstanceConfigsReq): DeleteTourShiftInstanceConfigsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTourShiftInstanceConfigsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTourShiftInstanceConfigsReq;
  static deserializeBinaryFromReader(message: DeleteTourShiftInstanceConfigsReq, reader: jspb.BinaryReader): DeleteTourShiftInstanceConfigsReq;
}

export namespace DeleteTourShiftInstanceConfigsReq {
  export type AsObject = {
    tourShiftInstanceConfigSidsList: Array<string>,
  }
}

export class DeleteTourShiftInstanceConfigsRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTourShiftInstanceConfigsRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTourShiftInstanceConfigsRes): DeleteTourShiftInstanceConfigsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTourShiftInstanceConfigsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTourShiftInstanceConfigsRes;
  static deserializeBinaryFromReader(message: DeleteTourShiftInstanceConfigsRes, reader: jspb.BinaryReader): DeleteTourShiftInstanceConfigsRes;
}

export namespace DeleteTourShiftInstanceConfigsRes {
  export type AsObject = {
  }
}

export class CreateTourShiftSegmentConfigReq extends jspb.Message {
  hasTourShiftSegmentConfig(): boolean;
  clearTourShiftSegmentConfig(): void;
  getTourShiftSegmentConfig(): TourShiftSegmentConfig | undefined;
  setTourShiftSegmentConfig(value?: TourShiftSegmentConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTourShiftSegmentConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTourShiftSegmentConfigReq): CreateTourShiftSegmentConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTourShiftSegmentConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTourShiftSegmentConfigReq;
  static deserializeBinaryFromReader(message: CreateTourShiftSegmentConfigReq, reader: jspb.BinaryReader): CreateTourShiftSegmentConfigReq;
}

export namespace CreateTourShiftSegmentConfigReq {
  export type AsObject = {
    tourShiftSegmentConfig?: TourShiftSegmentConfig.AsObject,
  }
}

export class CreateTourShiftSegmentConfigRes extends jspb.Message {
  getTourShiftSegmentConfigSid(): string;
  setTourShiftSegmentConfigSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTourShiftSegmentConfigRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTourShiftSegmentConfigRes): CreateTourShiftSegmentConfigRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTourShiftSegmentConfigRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTourShiftSegmentConfigRes;
  static deserializeBinaryFromReader(message: CreateTourShiftSegmentConfigRes, reader: jspb.BinaryReader): CreateTourShiftSegmentConfigRes;
}

export namespace CreateTourShiftSegmentConfigRes {
  export type AsObject = {
    tourShiftSegmentConfigSid: string,
  }
}

export class UpdateTourShiftSegmentConfigReq extends jspb.Message {
  hasTourShiftSegmentConfig(): boolean;
  clearTourShiftSegmentConfig(): void;
  getTourShiftSegmentConfig(): TourShiftSegmentConfig | undefined;
  setTourShiftSegmentConfig(value?: TourShiftSegmentConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTourShiftSegmentConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTourShiftSegmentConfigReq): UpdateTourShiftSegmentConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTourShiftSegmentConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTourShiftSegmentConfigReq;
  static deserializeBinaryFromReader(message: UpdateTourShiftSegmentConfigReq, reader: jspb.BinaryReader): UpdateTourShiftSegmentConfigReq;
}

export namespace UpdateTourShiftSegmentConfigReq {
  export type AsObject = {
    tourShiftSegmentConfig?: TourShiftSegmentConfig.AsObject,
  }
}

export class UpdateTourShiftSegmentConfigRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTourShiftSegmentConfigRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTourShiftSegmentConfigRes): UpdateTourShiftSegmentConfigRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTourShiftSegmentConfigRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTourShiftSegmentConfigRes;
  static deserializeBinaryFromReader(message: UpdateTourShiftSegmentConfigRes, reader: jspb.BinaryReader): UpdateTourShiftSegmentConfigRes;
}

export namespace UpdateTourShiftSegmentConfigRes {
  export type AsObject = {
  }
}

export class ListTourShiftSegmentConfigsReq extends jspb.Message {
  clearTourShiftInstanceConfigSidsList(): void;
  getTourShiftInstanceConfigSidsList(): Array<string>;
  setTourShiftInstanceConfigSidsList(value: Array<string>): void;
  addTourShiftInstanceConfigSids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTourShiftSegmentConfigsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListTourShiftSegmentConfigsReq): ListTourShiftSegmentConfigsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTourShiftSegmentConfigsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTourShiftSegmentConfigsReq;
  static deserializeBinaryFromReader(message: ListTourShiftSegmentConfigsReq, reader: jspb.BinaryReader): ListTourShiftSegmentConfigsReq;
}

export namespace ListTourShiftSegmentConfigsReq {
  export type AsObject = {
    tourShiftInstanceConfigSidsList: Array<string>,
  }
}

export class ListTourShiftSegmentConfigsRes extends jspb.Message {
  clearTourShiftSegmentConfigsList(): void;
  getTourShiftSegmentConfigsList(): Array<TourShiftSegmentConfig>;
  setTourShiftSegmentConfigsList(value: Array<TourShiftSegmentConfig>): void;
  addTourShiftSegmentConfigs(value?: TourShiftSegmentConfig, index?: number): TourShiftSegmentConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTourShiftSegmentConfigsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListTourShiftSegmentConfigsRes): ListTourShiftSegmentConfigsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTourShiftSegmentConfigsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTourShiftSegmentConfigsRes;
  static deserializeBinaryFromReader(message: ListTourShiftSegmentConfigsRes, reader: jspb.BinaryReader): ListTourShiftSegmentConfigsRes;
}

export namespace ListTourShiftSegmentConfigsRes {
  export type AsObject = {
    tourShiftSegmentConfigsList: Array<TourShiftSegmentConfig.AsObject>,
  }
}

export class DeleteTourShiftSegmentConfigsReq extends jspb.Message {
  clearTourShiftSegmentConfigSidsList(): void;
  getTourShiftSegmentConfigSidsList(): Array<string>;
  setTourShiftSegmentConfigSidsList(value: Array<string>): void;
  addTourShiftSegmentConfigSids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTourShiftSegmentConfigsReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTourShiftSegmentConfigsReq): DeleteTourShiftSegmentConfigsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTourShiftSegmentConfigsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTourShiftSegmentConfigsReq;
  static deserializeBinaryFromReader(message: DeleteTourShiftSegmentConfigsReq, reader: jspb.BinaryReader): DeleteTourShiftSegmentConfigsReq;
}

export namespace DeleteTourShiftSegmentConfigsReq {
  export type AsObject = {
    tourShiftSegmentConfigSidsList: Array<string>,
  }
}

export class DeleteTourShiftSegmentConfigsRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTourShiftSegmentConfigsRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTourShiftSegmentConfigsRes): DeleteTourShiftSegmentConfigsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTourShiftSegmentConfigsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTourShiftSegmentConfigsRes;
  static deserializeBinaryFromReader(message: DeleteTourShiftSegmentConfigsRes, reader: jspb.BinaryReader): DeleteTourShiftSegmentConfigsRes;
}

export namespace DeleteTourShiftSegmentConfigsRes {
  export type AsObject = {
  }
}

export class CreateTourAgentCollectionReq extends jspb.Message {
  hasTourAgentCollection(): boolean;
  clearTourAgentCollection(): void;
  getTourAgentCollection(): TourAgentCollection | undefined;
  setTourAgentCollection(value?: TourAgentCollection): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTourAgentCollectionReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTourAgentCollectionReq): CreateTourAgentCollectionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTourAgentCollectionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTourAgentCollectionReq;
  static deserializeBinaryFromReader(message: CreateTourAgentCollectionReq, reader: jspb.BinaryReader): CreateTourAgentCollectionReq;
}

export namespace CreateTourAgentCollectionReq {
  export type AsObject = {
    tourAgentCollection?: TourAgentCollection.AsObject,
  }
}

export class CreateTourAgentCollectionRes extends jspb.Message {
  getTourAgentCollectionSid(): string;
  setTourAgentCollectionSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTourAgentCollectionRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTourAgentCollectionRes): CreateTourAgentCollectionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTourAgentCollectionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTourAgentCollectionRes;
  static deserializeBinaryFromReader(message: CreateTourAgentCollectionRes, reader: jspb.BinaryReader): CreateTourAgentCollectionRes;
}

export namespace CreateTourAgentCollectionRes {
  export type AsObject = {
    tourAgentCollectionSid: string,
  }
}

export class UpdateTourAgentCollectionReq extends jspb.Message {
  hasTourAgentCollection(): boolean;
  clearTourAgentCollection(): void;
  getTourAgentCollection(): TourAgentCollection | undefined;
  setTourAgentCollection(value?: TourAgentCollection): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTourAgentCollectionReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTourAgentCollectionReq): UpdateTourAgentCollectionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTourAgentCollectionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTourAgentCollectionReq;
  static deserializeBinaryFromReader(message: UpdateTourAgentCollectionReq, reader: jspb.BinaryReader): UpdateTourAgentCollectionReq;
}

export namespace UpdateTourAgentCollectionReq {
  export type AsObject = {
    tourAgentCollection?: TourAgentCollection.AsObject,
  }
}

export class UpdateTourAgentCollectionRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTourAgentCollectionRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTourAgentCollectionRes): UpdateTourAgentCollectionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTourAgentCollectionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTourAgentCollectionRes;
  static deserializeBinaryFromReader(message: UpdateTourAgentCollectionRes, reader: jspb.BinaryReader): UpdateTourAgentCollectionRes;
}

export namespace UpdateTourAgentCollectionRes {
  export type AsObject = {
  }
}

export class ListTourAgentCollectionsReq extends jspb.Message {
  getTourPatternSid(): string;
  setTourPatternSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTourAgentCollectionsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListTourAgentCollectionsReq): ListTourAgentCollectionsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTourAgentCollectionsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTourAgentCollectionsReq;
  static deserializeBinaryFromReader(message: ListTourAgentCollectionsReq, reader: jspb.BinaryReader): ListTourAgentCollectionsReq;
}

export namespace ListTourAgentCollectionsReq {
  export type AsObject = {
    tourPatternSid: string,
  }
}

export class ListTourAgentCollectionsRes extends jspb.Message {
  clearTourAgentCollectionsList(): void;
  getTourAgentCollectionsList(): Array<TourAgentCollection>;
  setTourAgentCollectionsList(value: Array<TourAgentCollection>): void;
  addTourAgentCollections(value?: TourAgentCollection, index?: number): TourAgentCollection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTourAgentCollectionsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListTourAgentCollectionsRes): ListTourAgentCollectionsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTourAgentCollectionsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTourAgentCollectionsRes;
  static deserializeBinaryFromReader(message: ListTourAgentCollectionsRes, reader: jspb.BinaryReader): ListTourAgentCollectionsRes;
}

export namespace ListTourAgentCollectionsRes {
  export type AsObject = {
    tourAgentCollectionsList: Array<TourAgentCollection.AsObject>,
  }
}

export class DeleteTourAgentCollectionsReq extends jspb.Message {
  clearTourAgentCollectionSidsList(): void;
  getTourAgentCollectionSidsList(): Array<string>;
  setTourAgentCollectionSidsList(value: Array<string>): void;
  addTourAgentCollectionSids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTourAgentCollectionsReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTourAgentCollectionsReq): DeleteTourAgentCollectionsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTourAgentCollectionsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTourAgentCollectionsReq;
  static deserializeBinaryFromReader(message: DeleteTourAgentCollectionsReq, reader: jspb.BinaryReader): DeleteTourAgentCollectionsReq;
}

export namespace DeleteTourAgentCollectionsReq {
  export type AsObject = {
    tourAgentCollectionSidsList: Array<string>,
  }
}

export class DeleteTourAgentCollectionsRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTourAgentCollectionsRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTourAgentCollectionsRes): DeleteTourAgentCollectionsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTourAgentCollectionsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTourAgentCollectionsRes;
  static deserializeBinaryFromReader(message: DeleteTourAgentCollectionsRes, reader: jspb.BinaryReader): DeleteTourAgentCollectionsRes;
}

export namespace DeleteTourAgentCollectionsRes {
  export type AsObject = {
  }
}

export class CreateTourAgentCollectionWFMAgentsReq extends jspb.Message {
  clearWfmAgentSidsList(): void;
  getWfmAgentSidsList(): Array<number>;
  setWfmAgentSidsList(value: Array<number>): void;
  addWfmAgentSids(value: number, index?: number): number;

  getTourAgentCollectionSid(): string;
  setTourAgentCollectionSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTourAgentCollectionWFMAgentsReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTourAgentCollectionWFMAgentsReq): CreateTourAgentCollectionWFMAgentsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTourAgentCollectionWFMAgentsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTourAgentCollectionWFMAgentsReq;
  static deserializeBinaryFromReader(message: CreateTourAgentCollectionWFMAgentsReq, reader: jspb.BinaryReader): CreateTourAgentCollectionWFMAgentsReq;
}

export namespace CreateTourAgentCollectionWFMAgentsReq {
  export type AsObject = {
    wfmAgentSidsList: Array<number>,
    tourAgentCollectionSid: string,
  }
}

export class CreateTourAgentCollectionWFMAgentsRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTourAgentCollectionWFMAgentsRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTourAgentCollectionWFMAgentsRes): CreateTourAgentCollectionWFMAgentsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTourAgentCollectionWFMAgentsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTourAgentCollectionWFMAgentsRes;
  static deserializeBinaryFromReader(message: CreateTourAgentCollectionWFMAgentsRes, reader: jspb.BinaryReader): CreateTourAgentCollectionWFMAgentsRes;
}

export namespace CreateTourAgentCollectionWFMAgentsRes {
  export type AsObject = {
  }
}

export class ListTourAgentCollectionWFMAgentsReq extends jspb.Message {
  clearTourAgentCollectionSidsList(): void;
  getTourAgentCollectionSidsList(): Array<string>;
  setTourAgentCollectionSidsList(value: Array<string>): void;
  addTourAgentCollectionSids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTourAgentCollectionWFMAgentsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListTourAgentCollectionWFMAgentsReq): ListTourAgentCollectionWFMAgentsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTourAgentCollectionWFMAgentsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTourAgentCollectionWFMAgentsReq;
  static deserializeBinaryFromReader(message: ListTourAgentCollectionWFMAgentsReq, reader: jspb.BinaryReader): ListTourAgentCollectionWFMAgentsReq;
}

export namespace ListTourAgentCollectionWFMAgentsReq {
  export type AsObject = {
    tourAgentCollectionSidsList: Array<string>,
  }
}

export class ListTourAgentCollectionWFMAgentsRes extends jspb.Message {
  clearWfmAgentPairingsList(): void;
  getWfmAgentPairingsList(): Array<ListTourAgentCollectionWFMAgentsRes.SidMapping>;
  setWfmAgentPairingsList(value: Array<ListTourAgentCollectionWFMAgentsRes.SidMapping>): void;
  addWfmAgentPairings(value?: ListTourAgentCollectionWFMAgentsRes.SidMapping, index?: number): ListTourAgentCollectionWFMAgentsRes.SidMapping;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTourAgentCollectionWFMAgentsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListTourAgentCollectionWFMAgentsRes): ListTourAgentCollectionWFMAgentsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTourAgentCollectionWFMAgentsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTourAgentCollectionWFMAgentsRes;
  static deserializeBinaryFromReader(message: ListTourAgentCollectionWFMAgentsRes, reader: jspb.BinaryReader): ListTourAgentCollectionWFMAgentsRes;
}

export namespace ListTourAgentCollectionWFMAgentsRes {
  export type AsObject = {
    wfmAgentPairingsList: Array<ListTourAgentCollectionWFMAgentsRes.SidMapping.AsObject>,
  }

  export class SidMapping extends jspb.Message {
    getAgentCollectionSid(): string;
    setAgentCollectionSid(value: string): void;

    clearWfmAgentSidsList(): void;
    getWfmAgentSidsList(): Array<number>;
    setWfmAgentSidsList(value: Array<number>): void;
    addWfmAgentSids(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SidMapping.AsObject;
    static toObject(includeInstance: boolean, msg: SidMapping): SidMapping.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SidMapping, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SidMapping;
    static deserializeBinaryFromReader(message: SidMapping, reader: jspb.BinaryReader): SidMapping;
  }

  export namespace SidMapping {
    export type AsObject = {
      agentCollectionSid: string,
      wfmAgentSidsList: Array<number>,
    }
  }
}

export class DeleteTourAgentCollectionWFMAgentsReq extends jspb.Message {
  clearWfmAgentSidsList(): void;
  getWfmAgentSidsList(): Array<number>;
  setWfmAgentSidsList(value: Array<number>): void;
  addWfmAgentSids(value: number, index?: number): number;

  getTourAgentCollectionSid(): string;
  setTourAgentCollectionSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTourAgentCollectionWFMAgentsReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTourAgentCollectionWFMAgentsReq): DeleteTourAgentCollectionWFMAgentsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTourAgentCollectionWFMAgentsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTourAgentCollectionWFMAgentsReq;
  static deserializeBinaryFromReader(message: DeleteTourAgentCollectionWFMAgentsReq, reader: jspb.BinaryReader): DeleteTourAgentCollectionWFMAgentsReq;
}

export namespace DeleteTourAgentCollectionWFMAgentsReq {
  export type AsObject = {
    wfmAgentSidsList: Array<number>,
    tourAgentCollectionSid: string,
  }
}

export class DeleteTourAgentCollectionWFMAgentsRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTourAgentCollectionWFMAgentsRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTourAgentCollectionWFMAgentsRes): DeleteTourAgentCollectionWFMAgentsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTourAgentCollectionWFMAgentsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTourAgentCollectionWFMAgentsRes;
  static deserializeBinaryFromReader(message: DeleteTourAgentCollectionWFMAgentsRes, reader: jspb.BinaryReader): DeleteTourAgentCollectionWFMAgentsRes;
}

export namespace DeleteTourAgentCollectionWFMAgentsRes {
  export type AsObject = {
  }
}

export class GenerateTourWeekPatternsReq extends jspb.Message {
  getTargetShiftTemplateSid(): number;
  setTargetShiftTemplateSid(value: number): void;

  getNumWeeksInTour(): number;
  setNumWeeksInTour(value: number): void;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateTourWeekPatternsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateTourWeekPatternsReq): GenerateTourWeekPatternsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateTourWeekPatternsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateTourWeekPatternsReq;
  static deserializeBinaryFromReader(message: GenerateTourWeekPatternsReq, reader: jspb.BinaryReader): GenerateTourWeekPatternsReq;
}

export namespace GenerateTourWeekPatternsReq {
  export type AsObject = {
    targetShiftTemplateSid: number,
    numWeeksInTour: number,
    scheduleScenarioSid: number,
  }
}

export class GenerateTourWeekPatternsRes extends jspb.Message {
  clearTourWeekPatternsList(): void;
  getTourWeekPatternsList(): Array<TourWeekPattern>;
  setTourWeekPatternsList(value: Array<TourWeekPattern>): void;
  addTourWeekPatterns(value?: TourWeekPattern, index?: number): TourWeekPattern;

  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<Diagnostic>;
  setDiagnosticsList(value: Array<Diagnostic>): void;
  addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateTourWeekPatternsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateTourWeekPatternsRes): GenerateTourWeekPatternsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateTourWeekPatternsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateTourWeekPatternsRes;
  static deserializeBinaryFromReader(message: GenerateTourWeekPatternsRes, reader: jspb.BinaryReader): GenerateTourWeekPatternsRes;
}

export namespace GenerateTourWeekPatternsRes {
  export type AsObject = {
    tourWeekPatternsList: Array<TourWeekPattern.AsObject>,
    diagnosticsList: Array<Diagnostic.AsObject>,
  }
}

export class RemoveAgentFromScheduleRequest extends jspb.Message {
  hasDatetimeRange(): boolean;
  clearDatetimeRange(): void;
  getDatetimeRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setDatetimeRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  getWfmAgentSid(): number;
  setWfmAgentSid(value: number): void;

  hasScheduleSelector(): boolean;
  clearScheduleSelector(): void;
  getScheduleSelector(): api_commons_wfm_pb.ScheduleSelector | undefined;
  setScheduleSelector(value?: api_commons_wfm_pb.ScheduleSelector): void;

  hasNodeSelector(): boolean;
  clearNodeSelector(): void;
  getNodeSelector(): ParentEntity | undefined;
  setNodeSelector(value?: ParentEntity): void;

  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveAgentFromScheduleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveAgentFromScheduleRequest): RemoveAgentFromScheduleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveAgentFromScheduleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveAgentFromScheduleRequest;
  static deserializeBinaryFromReader(message: RemoveAgentFromScheduleRequest, reader: jspb.BinaryReader): RemoveAgentFromScheduleRequest;
}

export namespace RemoveAgentFromScheduleRequest {
  export type AsObject = {
    datetimeRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    wfmAgentSid: number,
    scheduleSelector?: api_commons_wfm_pb.ScheduleSelector.AsObject,
    nodeSelector?: ParentEntity.AsObject,
    scheduleScenarioSid: number,
  }
}

export class RemoveAgentFromScheduleResponse extends jspb.Message {
  getUnassignedWfmAgentSid(): number;
  setUnassignedWfmAgentSid(value: number): void;

  clearUpdatedShiftsList(): void;
  getUpdatedShiftsList(): Array<ShiftInstance>;
  setUpdatedShiftsList(value: Array<ShiftInstance>): void;
  addUpdatedShifts(value?: ShiftInstance, index?: number): ShiftInstance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveAgentFromScheduleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveAgentFromScheduleResponse): RemoveAgentFromScheduleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveAgentFromScheduleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveAgentFromScheduleResponse;
  static deserializeBinaryFromReader(message: RemoveAgentFromScheduleResponse, reader: jspb.BinaryReader): RemoveAgentFromScheduleResponse;
}

export namespace RemoveAgentFromScheduleResponse {
  export type AsObject = {
    unassignedWfmAgentSid: number,
    updatedShiftsList: Array<ShiftInstance.AsObject>,
  }
}

export class ListValidAgentsForReplacementReq extends jspb.Message {
  getScheduleScenarioSid(): number;
  setScheduleScenarioSid(value: number): void;

  hasDatetimeRange(): boolean;
  clearDatetimeRange(): void;
  getDatetimeRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setDatetimeRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  hasScheduleSelector(): boolean;
  clearScheduleSelector(): void;
  getScheduleSelector(): api_commons_wfm_pb.ScheduleSelector | undefined;
  setScheduleSelector(value?: api_commons_wfm_pb.ScheduleSelector): void;

  hasNodeSelector(): boolean;
  clearNodeSelector(): void;
  getNodeSelector(): ParentEntity | undefined;
  setNodeSelector(value?: ParentEntity): void;

  getWfmAgentSidToReplace(): number;
  setWfmAgentSidToReplace(value: number): void;

  getSkipSkillProficiencySort(): boolean;
  setSkipSkillProficiencySort(value: boolean): void;

  getIncludeSkillMismatches(): boolean;
  setIncludeSkillMismatches(value: boolean): void;

  getSkipForceSameAgentGroups(): boolean;
  setSkipForceSameAgentGroups(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListValidAgentsForReplacementReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListValidAgentsForReplacementReq): ListValidAgentsForReplacementReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListValidAgentsForReplacementReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListValidAgentsForReplacementReq;
  static deserializeBinaryFromReader(message: ListValidAgentsForReplacementReq, reader: jspb.BinaryReader): ListValidAgentsForReplacementReq;
}

export namespace ListValidAgentsForReplacementReq {
  export type AsObject = {
    scheduleScenarioSid: number,
    datetimeRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    scheduleSelector?: api_commons_wfm_pb.ScheduleSelector.AsObject,
    nodeSelector?: ParentEntity.AsObject,
    wfmAgentSidToReplace: number,
    skipSkillProficiencySort: boolean,
    includeSkillMismatches: boolean,
    skipForceSameAgentGroups: boolean,
  }
}

export class ListValidAgentsForReplacementRes extends jspb.Message {
  clearWfmAgentSidsList(): void;
  getWfmAgentSidsList(): Array<number>;
  setWfmAgentSidsList(value: Array<number>): void;
  addWfmAgentSids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListValidAgentsForReplacementRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListValidAgentsForReplacementRes): ListValidAgentsForReplacementRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListValidAgentsForReplacementRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListValidAgentsForReplacementRes;
  static deserializeBinaryFromReader(message: ListValidAgentsForReplacementRes, reader: jspb.BinaryReader): ListValidAgentsForReplacementRes;
}

export namespace ListValidAgentsForReplacementRes {
  export type AsObject = {
    wfmAgentSidsList: Array<number>,
  }
}

export class ReplaceAgentOnScheduleReq extends jspb.Message {
  hasDatetimeRange(): boolean;
  clearDatetimeRange(): void;
  getDatetimeRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setDatetimeRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  hasScheduleSelector(): boolean;
  clearScheduleSelector(): void;
  getScheduleSelector(): api_commons_wfm_pb.ScheduleSelector | undefined;
  setScheduleSelector(value?: api_commons_wfm_pb.ScheduleSelector): void;

  hasNodeSelector(): boolean;
  clearNodeSelector(): void;
  getNodeSelector(): ParentEntity | undefined;
  setNodeSelector(value?: ParentEntity): void;

  getWfmAgentSidToRemove(): number;
  setWfmAgentSidToRemove(value: number): void;

  getWfmAgentSidToAdd(): number;
  setWfmAgentSidToAdd(value: number): void;

  getSkipOverlappingShifts(): boolean;
  setSkipOverlappingShifts(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplaceAgentOnScheduleReq.AsObject;
  static toObject(includeInstance: boolean, msg: ReplaceAgentOnScheduleReq): ReplaceAgentOnScheduleReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReplaceAgentOnScheduleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplaceAgentOnScheduleReq;
  static deserializeBinaryFromReader(message: ReplaceAgentOnScheduleReq, reader: jspb.BinaryReader): ReplaceAgentOnScheduleReq;
}

export namespace ReplaceAgentOnScheduleReq {
  export type AsObject = {
    datetimeRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    scheduleSelector?: api_commons_wfm_pb.ScheduleSelector.AsObject,
    nodeSelector?: ParentEntity.AsObject,
    wfmAgentSidToRemove: number,
    wfmAgentSidToAdd: number,
    skipOverlappingShifts: boolean,
  }
}

export class ReplaceAgentOnScheduleRes extends jspb.Message {
  clearUpdatedShiftInstancesList(): void;
  getUpdatedShiftInstancesList(): Array<ShiftInstance>;
  setUpdatedShiftInstancesList(value: Array<ShiftInstance>): void;
  addUpdatedShiftInstances(value?: ShiftInstance, index?: number): ShiftInstance;

  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<Diagnostic>;
  setDiagnosticsList(value: Array<Diagnostic>): void;
  addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplaceAgentOnScheduleRes.AsObject;
  static toObject(includeInstance: boolean, msg: ReplaceAgentOnScheduleRes): ReplaceAgentOnScheduleRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReplaceAgentOnScheduleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplaceAgentOnScheduleRes;
  static deserializeBinaryFromReader(message: ReplaceAgentOnScheduleRes, reader: jspb.BinaryReader): ReplaceAgentOnScheduleRes;
}

export namespace ReplaceAgentOnScheduleRes {
  export type AsObject = {
    updatedShiftInstancesList: Array<ShiftInstance.AsObject>,
    diagnosticsList: Array<Diagnostic.AsObject>,
  }
}

export class RgbaColor extends jspb.Message {
  getRed(): number;
  setRed(value: number): void;

  getGreen(): number;
  setGreen(value: number): void;

  getBlue(): number;
  setBlue(value: number): void;

  getAlpha(): number;
  setAlpha(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RgbaColor.AsObject;
  static toObject(includeInstance: boolean, msg: RgbaColor): RgbaColor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RgbaColor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RgbaColor;
  static deserializeBinaryFromReader(message: RgbaColor, reader: jspb.BinaryReader): RgbaColor;
}

export namespace RgbaColor {
  export type AsObject = {
    red: number,
    green: number,
    blue: number,
    alpha: number,
    name: string,
  }
}

export class HelloWorldWFMAdherenceRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloWorldWFMAdherenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HelloWorldWFMAdherenceRequest): HelloWorldWFMAdherenceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelloWorldWFMAdherenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloWorldWFMAdherenceRequest;
  static deserializeBinaryFromReader(message: HelloWorldWFMAdherenceRequest, reader: jspb.BinaryReader): HelloWorldWFMAdherenceRequest;
}

export namespace HelloWorldWFMAdherenceRequest {
  export type AsObject = {
  }
}

export class HelloWorldWFMAdherenceResponse extends jspb.Message {
  getHelloMessage(): string;
  setHelloMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloWorldWFMAdherenceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HelloWorldWFMAdherenceResponse): HelloWorldWFMAdherenceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelloWorldWFMAdherenceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloWorldWFMAdherenceResponse;
  static deserializeBinaryFromReader(message: HelloWorldWFMAdherenceResponse, reader: jspb.BinaryReader): HelloWorldWFMAdherenceResponse;
}

export namespace HelloWorldWFMAdherenceResponse {
  export type AsObject = {
    helloMessage: string,
  }
}

export class ListAgentStatesForDayRequest extends jspb.Message {
  hasStartDatetime(): boolean;
  clearStartDatetime(): void;
  getStartDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDatetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndDatetime(): boolean;
  clearEndDatetime(): void;
  getEndDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndDatetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentStatesForDayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentStatesForDayRequest): ListAgentStatesForDayRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentStatesForDayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentStatesForDayRequest;
  static deserializeBinaryFromReader(message: ListAgentStatesForDayRequest, reader: jspb.BinaryReader): ListAgentStatesForDayRequest;
}

export namespace ListAgentStatesForDayRequest {
  export type AsObject = {
    startDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListAgentStatesForDayResponse extends jspb.Message {
  clearAgentStatesList(): void;
  getAgentStatesList(): Array<api_commons_wfm_pb.AgentStateSequence>;
  setAgentStatesList(value: Array<api_commons_wfm_pb.AgentStateSequence>): void;
  addAgentStates(value?: api_commons_wfm_pb.AgentStateSequence, index?: number): api_commons_wfm_pb.AgentStateSequence;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentStatesForDayResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentStatesForDayResponse): ListAgentStatesForDayResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentStatesForDayResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentStatesForDayResponse;
  static deserializeBinaryFromReader(message: ListAgentStatesForDayResponse, reader: jspb.BinaryReader): ListAgentStatesForDayResponse;
}

export namespace ListAgentStatesForDayResponse {
  export type AsObject = {
    agentStatesList: Array<api_commons_wfm_pb.AgentStateSequence.AsObject>,
  }
}

export class ListRealTimeManagementStatesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRealTimeManagementStatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRealTimeManagementStatesRequest): ListRealTimeManagementStatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRealTimeManagementStatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRealTimeManagementStatesRequest;
  static deserializeBinaryFromReader(message: ListRealTimeManagementStatesRequest, reader: jspb.BinaryReader): ListRealTimeManagementStatesRequest;
}

export namespace ListRealTimeManagementStatesRequest {
  export type AsObject = {
  }
}

export class ListRealTimeManagementStatesResponse extends jspb.Message {
  clearStatesList(): void;
  getStatesList(): Array<api_commons_wfm_pb.RealTimeManagementStateMap[keyof api_commons_wfm_pb.RealTimeManagementStateMap]>;
  setStatesList(value: Array<api_commons_wfm_pb.RealTimeManagementStateMap[keyof api_commons_wfm_pb.RealTimeManagementStateMap]>): void;
  addStates(value: api_commons_wfm_pb.RealTimeManagementStateMap[keyof api_commons_wfm_pb.RealTimeManagementStateMap], index?: number): api_commons_wfm_pb.RealTimeManagementStateMap[keyof api_commons_wfm_pb.RealTimeManagementStateMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRealTimeManagementStatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRealTimeManagementStatesResponse): ListRealTimeManagementStatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRealTimeManagementStatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRealTimeManagementStatesResponse;
  static deserializeBinaryFromReader(message: ListRealTimeManagementStatesResponse, reader: jspb.BinaryReader): ListRealTimeManagementStatesResponse;
}

export namespace ListRealTimeManagementStatesResponse {
  export type AsObject = {
    statesList: Array<api_commons_wfm_pb.RealTimeManagementStateMap[keyof api_commons_wfm_pb.RealTimeManagementStateMap]>,
  }
}

export class RealTimeManagementStateColor extends jspb.Message {
  getState(): api_commons_wfm_pb.RealTimeManagementStateMap[keyof api_commons_wfm_pb.RealTimeManagementStateMap];
  setState(value: api_commons_wfm_pb.RealTimeManagementStateMap[keyof api_commons_wfm_pb.RealTimeManagementStateMap]): void;

  hasColor(): boolean;
  clearColor(): void;
  getColor(): RgbaColor | undefined;
  setColor(value?: RgbaColor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RealTimeManagementStateColor.AsObject;
  static toObject(includeInstance: boolean, msg: RealTimeManagementStateColor): RealTimeManagementStateColor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RealTimeManagementStateColor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RealTimeManagementStateColor;
  static deserializeBinaryFromReader(message: RealTimeManagementStateColor, reader: jspb.BinaryReader): RealTimeManagementStateColor;
}

export namespace RealTimeManagementStateColor {
  export type AsObject = {
    state: api_commons_wfm_pb.RealTimeManagementStateMap[keyof api_commons_wfm_pb.RealTimeManagementStateMap],
    color?: RgbaColor.AsObject,
  }
}

export class ListRealTimeManagementStateColorsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRealTimeManagementStateColorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRealTimeManagementStateColorsRequest): ListRealTimeManagementStateColorsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRealTimeManagementStateColorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRealTimeManagementStateColorsRequest;
  static deserializeBinaryFromReader(message: ListRealTimeManagementStateColorsRequest, reader: jspb.BinaryReader): ListRealTimeManagementStateColorsRequest;
}

export namespace ListRealTimeManagementStateColorsRequest {
  export type AsObject = {
  }
}

export class ListRealTimeManagementStateColorsResponse extends jspb.Message {
  clearStateColorsList(): void;
  getStateColorsList(): Array<RealTimeManagementStateColor>;
  setStateColorsList(value: Array<RealTimeManagementStateColor>): void;
  addStateColors(value?: RealTimeManagementStateColor, index?: number): RealTimeManagementStateColor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRealTimeManagementStateColorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRealTimeManagementStateColorsResponse): ListRealTimeManagementStateColorsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRealTimeManagementStateColorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRealTimeManagementStateColorsResponse;
  static deserializeBinaryFromReader(message: ListRealTimeManagementStateColorsResponse, reader: jspb.BinaryReader): ListRealTimeManagementStateColorsResponse;
}

export namespace ListRealTimeManagementStateColorsResponse {
  export type AsObject = {
    stateColorsList: Array<RealTimeManagementStateColor.AsObject>,
  }
}

export class CreateAgentLeavePetitionRequest extends jspb.Message {
  clearRequestedDatetimeRangesList(): void;
  getRequestedDatetimeRangesList(): Array<api_commons_wfm_pb.DatetimeRange>;
  setRequestedDatetimeRangesList(value: Array<api_commons_wfm_pb.DatetimeRange>): void;
  addRequestedDatetimeRanges(value?: api_commons_wfm_pb.DatetimeRange, index?: number): api_commons_wfm_pb.DatetimeRange;

  getPetitionComment(): string;
  setPetitionComment(value: string): void;

  getWfmAgentSid(): number;
  setWfmAgentSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAgentLeavePetitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAgentLeavePetitionRequest): CreateAgentLeavePetitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAgentLeavePetitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAgentLeavePetitionRequest;
  static deserializeBinaryFromReader(message: CreateAgentLeavePetitionRequest, reader: jspb.BinaryReader): CreateAgentLeavePetitionRequest;
}

export namespace CreateAgentLeavePetitionRequest {
  export type AsObject = {
    requestedDatetimeRangesList: Array<api_commons_wfm_pb.DatetimeRange.AsObject>,
    petitionComment: string,
    wfmAgentSid: number,
  }
}

export class CreateAgentLeavePetitionResponse extends jspb.Message {
  hasAgentLeavePetition(): boolean;
  clearAgentLeavePetition(): void;
  getAgentLeavePetition(): api_commons_wfm_pb.AgentLeavePetition | undefined;
  setAgentLeavePetition(value?: api_commons_wfm_pb.AgentLeavePetition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAgentLeavePetitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAgentLeavePetitionResponse): CreateAgentLeavePetitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAgentLeavePetitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAgentLeavePetitionResponse;
  static deserializeBinaryFromReader(message: CreateAgentLeavePetitionResponse, reader: jspb.BinaryReader): CreateAgentLeavePetitionResponse;
}

export namespace CreateAgentLeavePetitionResponse {
  export type AsObject = {
    agentLeavePetition?: api_commons_wfm_pb.AgentLeavePetition.AsObject,
  }
}

export class ListAgentLeavePetitionsRequest extends jspb.Message {
  clearWfmAgentSidsList(): void;
  getWfmAgentSidsList(): Array<number>;
  setWfmAgentSidsList(value: Array<number>): void;
  addWfmAgentSids(value: number, index?: number): number;

  hasDatetimeRange(): boolean;
  clearDatetimeRange(): void;
  getDatetimeRange(): api_commons_wfm_pb.DatetimeRange | undefined;
  setDatetimeRange(value?: api_commons_wfm_pb.DatetimeRange): void;

  getIncludeArchived(): boolean;
  setIncludeArchived(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentLeavePetitionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentLeavePetitionsRequest): ListAgentLeavePetitionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentLeavePetitionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentLeavePetitionsRequest;
  static deserializeBinaryFromReader(message: ListAgentLeavePetitionsRequest, reader: jspb.BinaryReader): ListAgentLeavePetitionsRequest;
}

export namespace ListAgentLeavePetitionsRequest {
  export type AsObject = {
    wfmAgentSidsList: Array<number>,
    datetimeRange?: api_commons_wfm_pb.DatetimeRange.AsObject,
    includeArchived: boolean,
  }
}

export class ListAgentLeavePetitionsResponse extends jspb.Message {
  clearAgentLeavePetitionsList(): void;
  getAgentLeavePetitionsList(): Array<api_commons_wfm_pb.AgentLeavePetition>;
  setAgentLeavePetitionsList(value: Array<api_commons_wfm_pb.AgentLeavePetition>): void;
  addAgentLeavePetitions(value?: api_commons_wfm_pb.AgentLeavePetition, index?: number): api_commons_wfm_pb.AgentLeavePetition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentLeavePetitionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentLeavePetitionsResponse): ListAgentLeavePetitionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentLeavePetitionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentLeavePetitionsResponse;
  static deserializeBinaryFromReader(message: ListAgentLeavePetitionsResponse, reader: jspb.BinaryReader): ListAgentLeavePetitionsResponse;
}

export namespace ListAgentLeavePetitionsResponse {
  export type AsObject = {
    agentLeavePetitionsList: Array<api_commons_wfm_pb.AgentLeavePetition.AsObject>,
  }
}

