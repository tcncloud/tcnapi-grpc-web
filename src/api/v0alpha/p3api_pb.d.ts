// package: api.v0alpha
// file: api/v0alpha/p3api.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../annotations/authz_pb";
import * as api_commons_acd_pb from "../../api/commons/acd_pb";
import * as api_commons_broadcasts_pb from "../../api/commons/broadcasts_pb";
import * as api_commons_call_pb from "../../api/commons/call_pb";
import * as api_commons_omnichannel_pb from "../../api/commons/omnichannel_pb";
import * as api_commons_p3api_pb from "../../api/commons/p3api_pb";
import * as api_commons_task_pb from "../../api/commons/task_pb";
import * as api_commons_wfm_pb from "../../api/commons/wfm_pb";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class GetAgentHuntGroupReq extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentHuntGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentHuntGroupReq): GetAgentHuntGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentHuntGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentHuntGroupReq;
  static deserializeBinaryFromReader(message: GetAgentHuntGroupReq, reader: jspb.BinaryReader): GetAgentHuntGroupReq;
}

export namespace GetAgentHuntGroupReq {
  export type AsObject = {
    huntGroupSid: number,
  }
}

export class HuntGroup extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getClientSid(): number;
  setClientSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasModifyDate(): boolean;
  clearModifyDate(): void;
  getModifyDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifyDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getType(): api_commons_acd_pb.HuntGroupType.EnumMap[keyof api_commons_acd_pb.HuntGroupType.EnumMap];
  setType(value: api_commons_acd_pb.HuntGroupType.EnumMap[keyof api_commons_acd_pb.HuntGroupType.EnumMap]): void;

  getAgentCount(): number;
  setAgentCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HuntGroup.AsObject;
  static toObject(includeInstance: boolean, msg: HuntGroup): HuntGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HuntGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HuntGroup;
  static deserializeBinaryFromReader(message: HuntGroup, reader: jspb.BinaryReader): HuntGroup;
}

export namespace HuntGroup {
  export type AsObject = {
    huntGroupSid: number,
    clientSid: number,
    name: string,
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
    modifyDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    type: api_commons_acd_pb.HuntGroupType.EnumMap[keyof api_commons_acd_pb.HuntGroupType.EnumMap],
    agentCount: number,
  }
}

export class GetAgentSkillsReq extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentSkillsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentSkillsReq): GetAgentSkillsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentSkillsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentSkillsReq;
  static deserializeBinaryFromReader(message: GetAgentSkillsReq, reader: jspb.BinaryReader): GetAgentSkillsReq;
}

export namespace GetAgentSkillsReq {
  export type AsObject = {
    huntGroupSid: number,
  }
}

export class GetAgentSkillsRes extends jspb.Message {
  getSkillsMap(): jspb.Map<string, number>;
  clearSkillsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentSkillsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentSkillsRes): GetAgentSkillsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentSkillsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentSkillsRes;
  static deserializeBinaryFromReader(message: GetAgentSkillsRes, reader: jspb.BinaryReader): GetAgentSkillsRes;
}

export namespace GetAgentSkillsRes {
  export type AsObject = {
    skillsMap: Array<[string, number]>,
  }
}

export class CreateAgentSkillReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAgentSkillReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAgentSkillReq): CreateAgentSkillReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAgentSkillReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAgentSkillReq;
  static deserializeBinaryFromReader(message: CreateAgentSkillReq, reader: jspb.BinaryReader): CreateAgentSkillReq;
}

export namespace CreateAgentSkillReq {
  export type AsObject = {
    name: string,
    description: string,
  }
}

export class CreateAgentSkillRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAgentSkillRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAgentSkillRes): CreateAgentSkillRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAgentSkillRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAgentSkillRes;
  static deserializeBinaryFromReader(message: CreateAgentSkillRes, reader: jspb.BinaryReader): CreateAgentSkillRes;
}

export namespace CreateAgentSkillRes {
  export type AsObject = {
  }
}

export class UpdateAgentSkillReq extends jspb.Message {
  getAgentSkillSid(): number;
  setAgentSkillSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentSkillReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentSkillReq): UpdateAgentSkillReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentSkillReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentSkillReq;
  static deserializeBinaryFromReader(message: UpdateAgentSkillReq, reader: jspb.BinaryReader): UpdateAgentSkillReq;
}

export namespace UpdateAgentSkillReq {
  export type AsObject = {
    agentSkillSid: number,
    name: string,
    description: string,
  }
}

export class UpdateAgentSkillRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentSkillRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentSkillRes): UpdateAgentSkillRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentSkillRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentSkillRes;
  static deserializeBinaryFromReader(message: UpdateAgentSkillRes, reader: jspb.BinaryReader): UpdateAgentSkillRes;
}

export namespace UpdateAgentSkillRes {
  export type AsObject = {
  }
}

export class DeleteAgentSkillReq extends jspb.Message {
  getAgentSkillSid(): number;
  setAgentSkillSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAgentSkillReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAgentSkillReq): DeleteAgentSkillReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAgentSkillReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAgentSkillReq;
  static deserializeBinaryFromReader(message: DeleteAgentSkillReq, reader: jspb.BinaryReader): DeleteAgentSkillReq;
}

export namespace DeleteAgentSkillReq {
  export type AsObject = {
    agentSkillSid: number,
  }
}

export class DeleteAgentSkillRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAgentSkillRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAgentSkillRes): DeleteAgentSkillRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAgentSkillRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAgentSkillRes;
  static deserializeBinaryFromReader(message: DeleteAgentSkillRes, reader: jspb.BinaryReader): DeleteAgentSkillRes;
}

export namespace DeleteAgentSkillRes {
  export type AsObject = {
  }
}

export class ListAgentSkillsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentSkillsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentSkillsReq): ListAgentSkillsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentSkillsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentSkillsReq;
  static deserializeBinaryFromReader(message: ListAgentSkillsReq, reader: jspb.BinaryReader): ListAgentSkillsReq;
}

export namespace ListAgentSkillsReq {
  export type AsObject = {
  }
}

export class ListAgentSkillsRes extends jspb.Message {
  clearSkillsList(): void;
  getSkillsList(): Array<AgentSkill>;
  setSkillsList(value: Array<AgentSkill>): void;
  addSkills(value?: AgentSkill, index?: number): AgentSkill;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentSkillsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentSkillsRes): ListAgentSkillsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentSkillsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentSkillsRes;
  static deserializeBinaryFromReader(message: ListAgentSkillsRes, reader: jspb.BinaryReader): ListAgentSkillsRes;
}

export namespace ListAgentSkillsRes {
  export type AsObject = {
    skillsList: Array<AgentSkill.AsObject>,
  }
}

export class ListSkillsForCurrentAgentReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSkillsForCurrentAgentReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSkillsForCurrentAgentReq): ListSkillsForCurrentAgentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSkillsForCurrentAgentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSkillsForCurrentAgentReq;
  static deserializeBinaryFromReader(message: ListSkillsForCurrentAgentReq, reader: jspb.BinaryReader): ListSkillsForCurrentAgentReq;
}

export namespace ListSkillsForCurrentAgentReq {
  export type AsObject = {
  }
}

export class ListSkillsForCurrentAgentRes extends jspb.Message {
  clearSkillsList(): void;
  getSkillsList(): Array<AgentSkill>;
  setSkillsList(value: Array<AgentSkill>): void;
  addSkills(value?: AgentSkill, index?: number): AgentSkill;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSkillsForCurrentAgentRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSkillsForCurrentAgentRes): ListSkillsForCurrentAgentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSkillsForCurrentAgentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSkillsForCurrentAgentRes;
  static deserializeBinaryFromReader(message: ListSkillsForCurrentAgentRes, reader: jspb.BinaryReader): ListSkillsForCurrentAgentRes;
}

export namespace ListSkillsForCurrentAgentRes {
  export type AsObject = {
    skillsList: Array<AgentSkill.AsObject>,
  }
}

export class GetAgentSessionReq extends jspb.Message {
  getAgentSessionSid(): number;
  setAgentSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentSessionReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentSessionReq): GetAgentSessionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentSessionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentSessionReq;
  static deserializeBinaryFromReader(message: GetAgentSessionReq, reader: jspb.BinaryReader): GetAgentSessionReq;
}

export namespace GetAgentSessionReq {
  export type AsObject = {
    agentSessionSid: number,
  }
}

export class AgentSession extends jspb.Message {
  getAgentSessionSid(): number;
  setAgentSessionSid(value: number): void;

  hasWebLoginTime(): boolean;
  clearWebLoginTime(): void;
  getWebLoginTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setWebLoginTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasWebLogoutTime(): boolean;
  clearWebLogoutTime(): void;
  getWebLogoutTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setWebLogoutTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasIvrLoginTime(): boolean;
  clearIvrLoginTime(): void;
  getIvrLoginTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setIvrLoginTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasIvrLogoutTime(): boolean;
  clearIvrLogoutTime(): void;
  getIvrLogoutTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setIvrLogoutTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasIvrDuration(): boolean;
  clearIvrDuration(): void;
  getIvrDuration(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setIvrDuration(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasIvrBilledDuration(): boolean;
  clearIvrBilledDuration(): void;
  getIvrBilledDuration(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setIvrBilledDuration(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasCost(): boolean;
  clearCost(): void;
  getCost(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setCost(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasAgentSid(): boolean;
  clearAgentSid(): void;
  getAgentSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAgentSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setStatus(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasSoftphoneUser(): boolean;
  clearSoftphoneUser(): void;
  getSoftphoneUser(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setSoftphoneUser(value?: google_protobuf_wrappers_pb.BoolValue): void;

  getAgentDialIn(): api_commons_acd_pb.AgentDialIn.EnumMap[keyof api_commons_acd_pb.AgentDialIn.EnumMap];
  setAgentDialIn(value: api_commons_acd_pb.AgentDialIn.EnumMap[keyof api_commons_acd_pb.AgentDialIn.EnumMap]): void;

  hasAgentCallerid(): boolean;
  clearAgentCallerid(): void;
  getAgentCallerid(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAgentCallerid(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAgentDialedNumber(): boolean;
  clearAgentDialedNumber(): void;
  getAgentDialedNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAgentDialedNumber(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasWorker(): boolean;
  clearWorker(): void;
  getWorker(): google_protobuf_wrappers_pb.StringValue | undefined;
  setWorker(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasHuntGroupSid(): boolean;
  clearHuntGroupSid(): void;
  getHuntGroupSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setHuntGroupSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasWaitDuration(): boolean;
  clearWaitDuration(): void;
  getWaitDuration(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setWaitDuration(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasPauseDuration(): boolean;
  clearPauseDuration(): void;
  getPauseDuration(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setPauseDuration(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasTransferDuration(): boolean;
  clearTransferDuration(): void;
  getTransferDuration(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setTransferDuration(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasWrapUpDuration(): boolean;
  clearWrapUpDuration(): void;
  getWrapUpDuration(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setWrapUpDuration(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasTalkDuration(): boolean;
  clearTalkDuration(): void;
  getTalkDuration(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setTalkDuration(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasManualDuration(): boolean;
  clearManualDuration(): void;
  getManualDuration(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setManualDuration(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasPreviewDuration(): boolean;
  clearPreviewDuration(): void;
  getPreviewDuration(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setPreviewDuration(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasHoldDuration(): boolean;
  clearHoldDuration(): void;
  getHoldDuration(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setHoldDuration(value?: google_protobuf_wrappers_pb.Int32Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentSession.AsObject;
  static toObject(includeInstance: boolean, msg: AgentSession): AgentSession.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentSession, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentSession;
  static deserializeBinaryFromReader(message: AgentSession, reader: jspb.BinaryReader): AgentSession;
}

export namespace AgentSession {
  export type AsObject = {
    agentSessionSid: number,
    webLoginTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    webLogoutTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ivrLoginTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ivrLogoutTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ivrDuration?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    ivrBilledDuration?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    cost?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    agentSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    status?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    softphoneUser?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    agentDialIn: api_commons_acd_pb.AgentDialIn.EnumMap[keyof api_commons_acd_pb.AgentDialIn.EnumMap],
    agentCallerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    agentDialedNumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
    worker?: google_protobuf_wrappers_pb.StringValue.AsObject,
    huntGroupSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    waitDuration?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    pauseDuration?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    transferDuration?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    wrapUpDuration?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    talkDuration?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    manualDuration?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    previewDuration?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    holdDuration?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }
}

export class GetCurrentAgentReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentAgentReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentAgentReq): GetCurrentAgentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrentAgentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentAgentReq;
  static deserializeBinaryFromReader(message: GetCurrentAgentReq, reader: jspb.BinaryReader): GetCurrentAgentReq;
}

export namespace GetCurrentAgentReq {
  export type AsObject = {
  }
}

export class Agent extends jspb.Message {
  getAgentSid(): number;
  setAgentSid(value: number): void;

  getClientSid(): number;
  setClientSid(value: number): void;

  getAgentProfileSid(): number;
  setAgentProfileSid(value: number): void;

  getWebLogin(): string;
  setWebLogin(value: string): void;

  hasAgentId(): boolean;
  clearAgentId(): void;
  getAgentId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAgentId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasAgentPin(): boolean;
  clearAgentPin(): void;
  getAgentPin(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAgentPin(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasAddDate(): boolean;
  clearAddDate(): void;
  getAddDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAddDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasModifyDate(): boolean;
  clearModifyDate(): void;
  getModifyDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifyDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCallbackNumber(): boolean;
  clearCallbackNumber(): void;
  getCallbackNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCallbackNumber(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCallbackExtension(): boolean;
  clearCallbackExtension(): void;
  getCallbackExtension(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCallbackExtension(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasHuntGroupSid(): boolean;
  clearHuntGroupSid(): void;
  getHuntGroupSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setHuntGroupSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasSubscriberUsername(): boolean;
  clearSubscriberUsername(): void;
  getSubscriberUsername(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSubscriberUsername(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasPartnerAgentId(): boolean;
  clearPartnerAgentId(): void;
  getPartnerAgentId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPartnerAgentId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasLastPasswordChangeDate(): boolean;
  clearLastPasswordChangeDate(): void;
  getLastPasswordChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastPasswordChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Agent.AsObject;
  static toObject(includeInstance: boolean, msg: Agent): Agent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Agent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Agent;
  static deserializeBinaryFromReader(message: Agent, reader: jspb.BinaryReader): Agent;
}

export namespace Agent {
  export type AsObject = {
    agentSid: number,
    clientSid: number,
    agentProfileSid: number,
    webLogin: string,
    agentId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    agentPin?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    addDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifyDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    callbackNumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
    callbackExtension?: google_protobuf_wrappers_pb.StringValue.AsObject,
    huntGroupSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    subscriberUsername?: google_protobuf_wrappers_pb.StringValue.AsObject,
    partnerAgentId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    lastPasswordChangeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetClientInfoDataReq extends jspb.Message {
  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getTaskSid(): number;
  setTaskSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClientInfoDataReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetClientInfoDataReq): GetClientInfoDataReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetClientInfoDataReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClientInfoDataReq;
  static deserializeBinaryFromReader(message: GetClientInfoDataReq, reader: jspb.BinaryReader): GetClientInfoDataReq;
}

export namespace GetClientInfoDataReq {
  export type AsObject = {
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    taskSid: number,
  }
}

export class GetClientInfoDataRes extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): void;

  getCallerId(): string;
  setCallerId(value: string): void;

  clearRowsList(): void;
  getRowsList(): Array<api_commons_p3api_pb.ClientInfoDataRow>;
  setRowsList(value: Array<api_commons_p3api_pb.ClientInfoDataRow>): void;
  addRows(value?: api_commons_p3api_pb.ClientInfoDataRow, index?: number): api_commons_p3api_pb.ClientInfoDataRow;

  getCountrySid(): number;
  setCountrySid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClientInfoDataRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetClientInfoDataRes): GetClientInfoDataRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetClientInfoDataRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClientInfoDataRes;
  static deserializeBinaryFromReader(message: GetClientInfoDataRes, reader: jspb.BinaryReader): GetClientInfoDataRes;
}

export namespace GetClientInfoDataRes {
  export type AsObject = {
    phoneNumber: string,
    callerId: string,
    rowsList: Array<api_commons_p3api_pb.ClientInfoDataRow.AsObject>,
    countrySid: number,
  }
}

export class GetClientInfoDisplayTemplateReq extends jspb.Message {
  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClientInfoDisplayTemplateReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetClientInfoDisplayTemplateReq): GetClientInfoDisplayTemplateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetClientInfoDisplayTemplateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClientInfoDisplayTemplateReq;
  static deserializeBinaryFromReader(message: GetClientInfoDisplayTemplateReq, reader: jspb.BinaryReader): GetClientInfoDisplayTemplateReq;
}

export namespace GetClientInfoDisplayTemplateReq {
  export type AsObject = {
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    huntGroupSid: number,
  }
}

export class GetClientInfoDisplayTemplateRes extends jspb.Message {
  getDisplayAllFields(): boolean;
  setDisplayAllFields(value: boolean): void;

  hasDialedNumberSettings(): boolean;
  clearDialedNumberSettings(): void;
  getDialedNumberSettings(): api_commons_p3api_pb.DialedNumberFieldSettings | undefined;
  setDialedNumberSettings(value?: api_commons_p3api_pb.DialedNumberFieldSettings): void;

  clearRowsList(): void;
  getRowsList(): Array<api_commons_p3api_pb.ClientInfoDisplayTemplateRow>;
  setRowsList(value: Array<api_commons_p3api_pb.ClientInfoDisplayTemplateRow>): void;
  addRows(value?: api_commons_p3api_pb.ClientInfoDisplayTemplateRow, index?: number): api_commons_p3api_pb.ClientInfoDisplayTemplateRow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClientInfoDisplayTemplateRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetClientInfoDisplayTemplateRes): GetClientInfoDisplayTemplateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetClientInfoDisplayTemplateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClientInfoDisplayTemplateRes;
  static deserializeBinaryFromReader(message: GetClientInfoDisplayTemplateRes, reader: jspb.BinaryReader): GetClientInfoDisplayTemplateRes;
}

export namespace GetClientInfoDisplayTemplateRes {
  export type AsObject = {
    displayAllFields: boolean,
    dialedNumberSettings?: api_commons_p3api_pb.DialedNumberFieldSettings.AsObject,
    rowsList: Array<api_commons_p3api_pb.ClientInfoDisplayTemplateRow.AsObject>,
  }
}

export class ListAgentStatisticsDataReq extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentStatisticsDataReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentStatisticsDataReq): ListAgentStatisticsDataReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentStatisticsDataReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentStatisticsDataReq;
  static deserializeBinaryFromReader(message: ListAgentStatisticsDataReq, reader: jspb.BinaryReader): ListAgentStatisticsDataReq;
}

export namespace ListAgentStatisticsDataReq {
  export type AsObject = {
    huntGroupSid: number,
    sessionSid: number,
  }
}

export class StatisticsData extends jspb.Message {
  hasAgentSessionCount(): boolean;
  clearAgentSessionCount(): void;
  getAgentSessionCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAgentSessionCount(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasIvrDuration(): boolean;
  clearIvrDuration(): void;
  getIvrDuration(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setIvrDuration(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasAgentWaitDuration(): boolean;
  clearAgentWaitDuration(): void;
  getAgentWaitDuration(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAgentWaitDuration(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasCallWaitDuration(): boolean;
  clearCallWaitDuration(): void;
  getCallWaitDuration(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCallWaitDuration(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasHoldDuration(): boolean;
  clearHoldDuration(): void;
  getHoldDuration(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setHoldDuration(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasManualDuration(): boolean;
  clearManualDuration(): void;
  getManualDuration(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setManualDuration(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasPauseDuration(): boolean;
  clearPauseDuration(): void;
  getPauseDuration(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPauseDuration(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasPreviewDuration(): boolean;
  clearPreviewDuration(): void;
  getPreviewDuration(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPreviewDuration(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasSuspendedDuration(): boolean;
  clearSuspendedDuration(): void;
  getSuspendedDuration(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setSuspendedDuration(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTalkDuration(): boolean;
  clearTalkDuration(): void;
  getTalkDuration(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTalkDuration(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTransferDuration(): boolean;
  clearTransferDuration(): void;
  getTransferDuration(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTransferDuration(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasWrapUpDuration(): boolean;
  clearWrapUpDuration(): void;
  getWrapUpDuration(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setWrapUpDuration(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getAgentName(): string;
  setAgentName(value: string): void;

  getHuntGroupName(): string;
  setHuntGroupName(value: string): void;

  getCallCount(): number;
  setCallCount(value: number): void;

  hasWebLoginTime(): boolean;
  clearWebLoginTime(): void;
  getWebLoginTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setWebLoginTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAgentSid(): number;
  setAgentSid(value: number): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatisticsData.AsObject;
  static toObject(includeInstance: boolean, msg: StatisticsData): StatisticsData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatisticsData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatisticsData;
  static deserializeBinaryFromReader(message: StatisticsData, reader: jspb.BinaryReader): StatisticsData;
}

export namespace StatisticsData {
  export type AsObject = {
    agentSessionCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    ivrDuration?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    agentWaitDuration?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    callWaitDuration?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    holdDuration?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    manualDuration?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    pauseDuration?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    previewDuration?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    suspendedDuration?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    talkDuration?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    transferDuration?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    wrapUpDuration?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    agentName: string,
    huntGroupName: string,
    callCount: number,
    webLoginTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    agentSid: number,
    huntGroupSid: number,
  }
}

export class StatisticsColumnDefinition extends jspb.Message {
  getHeaderLabel(): string;
  setHeaderLabel(value: string): void;

  getStatisticId(): string;
  setStatisticId(value: string): void;

  getToolTip(): string;
  setToolTip(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatisticsColumnDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: StatisticsColumnDefinition): StatisticsColumnDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatisticsColumnDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatisticsColumnDefinition;
  static deserializeBinaryFromReader(message: StatisticsColumnDefinition, reader: jspb.BinaryReader): StatisticsColumnDefinition;
}

export namespace StatisticsColumnDefinition {
  export type AsObject = {
    headerLabel: string,
    statisticId: string,
    toolTip: string,
  }
}

export class ListAgentStatisticsDataRes extends jspb.Message {
  clearStatisticsDataList(): void;
  getStatisticsDataList(): Array<StatisticsData>;
  setStatisticsDataList(value: Array<StatisticsData>): void;
  addStatisticsData(value?: StatisticsData, index?: number): StatisticsData;

  clearShownColumnsList(): void;
  getShownColumnsList(): Array<StatisticsColumnDefinition>;
  setShownColumnsList(value: Array<StatisticsColumnDefinition>): void;
  addShownColumns(value?: StatisticsColumnDefinition, index?: number): StatisticsColumnDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentStatisticsDataRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentStatisticsDataRes): ListAgentStatisticsDataRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentStatisticsDataRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentStatisticsDataRes;
  static deserializeBinaryFromReader(message: ListAgentStatisticsDataRes, reader: jspb.BinaryReader): ListAgentStatisticsDataRes;
}

export namespace ListAgentStatisticsDataRes {
  export type AsObject = {
    statisticsDataList: Array<StatisticsData.AsObject>,
    shownColumnsList: Array<StatisticsColumnDefinition.AsObject>,
  }
}

export class PhoneBook extends jspb.Message {
  getEntryType(): string;
  setEntryType(value: string): void;

  getEntryName(): string;
  setEntryName(value: string): void;

  hasHuntGroupSid(): boolean;
  clearHuntGroupSid(): void;
  getHuntGroupSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setHuntGroupSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): void;

  hasPhoneNumberType(): boolean;
  clearPhoneNumberType(): void;
  getPhoneNumberType(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPhoneNumberType(value?: google_protobuf_wrappers_pb.StringValue): void;

  getPhoneNumberHidden(): boolean;
  setPhoneNumberHidden(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhoneBook.AsObject;
  static toObject(includeInstance: boolean, msg: PhoneBook): PhoneBook.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PhoneBook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhoneBook;
  static deserializeBinaryFromReader(message: PhoneBook, reader: jspb.BinaryReader): PhoneBook;
}

export namespace PhoneBook {
  export type AsObject = {
    entryType: string,
    entryName: string,
    huntGroupSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    phoneNumber: string,
    phoneNumberType?: google_protobuf_wrappers_pb.StringValue.AsObject,
    phoneNumberHidden: boolean,
  }
}

export class PhoneBookEntry extends jspb.Message {
  getPhoneBookSid(): number;
  setPhoneBookSid(value: number): void;

  getEntryName(): string;
  setEntryName(value: string): void;

  hasStandard(): boolean;
  clearStandard(): void;
  getStandard(): PhoneBookStandardNumber | undefined;
  setStandard(value?: PhoneBookStandardNumber): void;

  hasSipUri(): boolean;
  clearSipUri(): void;
  getSipUri(): PhoneBookSIPURI | undefined;
  setSipUri(value?: PhoneBookSIPURI): void;

  getPhoneNumberHidden(): boolean;
  setPhoneNumberHidden(value: boolean): void;

  getPhoneBookEntryCase(): PhoneBookEntry.PhoneBookEntryCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhoneBookEntry.AsObject;
  static toObject(includeInstance: boolean, msg: PhoneBookEntry): PhoneBookEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PhoneBookEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhoneBookEntry;
  static deserializeBinaryFromReader(message: PhoneBookEntry, reader: jspb.BinaryReader): PhoneBookEntry;
}

export namespace PhoneBookEntry {
  export type AsObject = {
    phoneBookSid: number,
    entryName: string,
    standard?: PhoneBookStandardNumber.AsObject,
    sipUri?: PhoneBookSIPURI.AsObject,
    phoneNumberHidden: boolean,
  }

  export enum PhoneBookEntryCase {
    PHONE_BOOK_ENTRY_NOT_SET = 0,
    STANDARD = 3,
    SIP_URI = 4,
  }
}

export class PhoneBookStandardNumber extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): void;

  clearPhoneNumberTypesList(): void;
  getPhoneNumberTypesList(): Array<api_commons_p3api_pb.PhoneBookPhoneNumberTypeMap[keyof api_commons_p3api_pb.PhoneBookPhoneNumberTypeMap]>;
  setPhoneNumberTypesList(value: Array<api_commons_p3api_pb.PhoneBookPhoneNumberTypeMap[keyof api_commons_p3api_pb.PhoneBookPhoneNumberTypeMap]>): void;
  addPhoneNumberTypes(value: api_commons_p3api_pb.PhoneBookPhoneNumberTypeMap[keyof api_commons_p3api_pb.PhoneBookPhoneNumberTypeMap], index?: number): api_commons_p3api_pb.PhoneBookPhoneNumberTypeMap[keyof api_commons_p3api_pb.PhoneBookPhoneNumberTypeMap];

  getWhiteList(): boolean;
  setWhiteList(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhoneBookStandardNumber.AsObject;
  static toObject(includeInstance: boolean, msg: PhoneBookStandardNumber): PhoneBookStandardNumber.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PhoneBookStandardNumber, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhoneBookStandardNumber;
  static deserializeBinaryFromReader(message: PhoneBookStandardNumber, reader: jspb.BinaryReader): PhoneBookStandardNumber;
}

export namespace PhoneBookStandardNumber {
  export type AsObject = {
    phoneNumber: string,
    phoneNumberTypesList: Array<api_commons_p3api_pb.PhoneBookPhoneNumberTypeMap[keyof api_commons_p3api_pb.PhoneBookPhoneNumberTypeMap]>,
    whiteList: boolean,
  }
}

export class PhoneBookSIPURI extends jspb.Message {
  getSipUriLeft(): string;
  setSipUriLeft(value: string): void;

  getSipUriRight(): string;
  setSipUriRight(value: string): void;

  clearSipTypesList(): void;
  getSipTypesList(): Array<api_commons_p3api_pb.PhoneBookSIPTypeMap[keyof api_commons_p3api_pb.PhoneBookSIPTypeMap]>;
  setSipTypesList(value: Array<api_commons_p3api_pb.PhoneBookSIPTypeMap[keyof api_commons_p3api_pb.PhoneBookSIPTypeMap]>): void;
  addSipTypes(value: api_commons_p3api_pb.PhoneBookSIPTypeMap[keyof api_commons_p3api_pb.PhoneBookSIPTypeMap], index?: number): api_commons_p3api_pb.PhoneBookSIPTypeMap[keyof api_commons_p3api_pb.PhoneBookSIPTypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhoneBookSIPURI.AsObject;
  static toObject(includeInstance: boolean, msg: PhoneBookSIPURI): PhoneBookSIPURI.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PhoneBookSIPURI, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhoneBookSIPURI;
  static deserializeBinaryFromReader(message: PhoneBookSIPURI, reader: jspb.BinaryReader): PhoneBookSIPURI;
}

export namespace PhoneBookSIPURI {
  export type AsObject = {
    sipUriLeft: string,
    sipUriRight: string,
    sipTypesList: Array<api_commons_p3api_pb.PhoneBookSIPTypeMap[keyof api_commons_p3api_pb.PhoneBookSIPTypeMap]>,
  }
}

export class ListClientPhoneBookEntriesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListClientPhoneBookEntriesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListClientPhoneBookEntriesReq): ListClientPhoneBookEntriesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListClientPhoneBookEntriesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListClientPhoneBookEntriesReq;
  static deserializeBinaryFromReader(message: ListClientPhoneBookEntriesReq, reader: jspb.BinaryReader): ListClientPhoneBookEntriesReq;
}

export namespace ListClientPhoneBookEntriesReq {
  export type AsObject = {
  }
}

export class ListClientPhoneBookEntriesRes extends jspb.Message {
  clearPhoneBookEntriesList(): void;
  getPhoneBookEntriesList(): Array<PhoneBookEntry>;
  setPhoneBookEntriesList(value: Array<PhoneBookEntry>): void;
  addPhoneBookEntries(value?: PhoneBookEntry, index?: number): PhoneBookEntry;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListClientPhoneBookEntriesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListClientPhoneBookEntriesRes): ListClientPhoneBookEntriesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListClientPhoneBookEntriesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListClientPhoneBookEntriesRes;
  static deserializeBinaryFromReader(message: ListClientPhoneBookEntriesRes, reader: jspb.BinaryReader): ListClientPhoneBookEntriesRes;
}

export namespace ListClientPhoneBookEntriesRes {
  export type AsObject = {
    phoneBookEntriesList: Array<PhoneBookEntry.AsObject>,
    huntGroupSid: number,
  }
}

export class ListHuntGroupPhoneBookEntriesReq extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHuntGroupPhoneBookEntriesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListHuntGroupPhoneBookEntriesReq): ListHuntGroupPhoneBookEntriesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListHuntGroupPhoneBookEntriesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHuntGroupPhoneBookEntriesReq;
  static deserializeBinaryFromReader(message: ListHuntGroupPhoneBookEntriesReq, reader: jspb.BinaryReader): ListHuntGroupPhoneBookEntriesReq;
}

export namespace ListHuntGroupPhoneBookEntriesReq {
  export type AsObject = {
    huntGroupSid: number,
  }
}

export class ListHuntGroupPhoneBookEntriesRes extends jspb.Message {
  clearPhoneBookEntriesList(): void;
  getPhoneBookEntriesList(): Array<PhoneBookEntry>;
  setPhoneBookEntriesList(value: Array<PhoneBookEntry>): void;
  addPhoneBookEntries(value?: PhoneBookEntry, index?: number): PhoneBookEntry;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHuntGroupPhoneBookEntriesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListHuntGroupPhoneBookEntriesRes): ListHuntGroupPhoneBookEntriesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListHuntGroupPhoneBookEntriesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHuntGroupPhoneBookEntriesRes;
  static deserializeBinaryFromReader(message: ListHuntGroupPhoneBookEntriesRes, reader: jspb.BinaryReader): ListHuntGroupPhoneBookEntriesRes;
}

export namespace ListHuntGroupPhoneBookEntriesRes {
  export type AsObject = {
    phoneBookEntriesList: Array<PhoneBookEntry.AsObject>,
    huntGroupSid: number,
  }
}

export class CreatePhoneBookEntryReq extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getEntryName(): string;
  setEntryName(value: string): void;

  hasStandard(): boolean;
  clearStandard(): void;
  getStandard(): PhoneBookStandardNumber | undefined;
  setStandard(value?: PhoneBookStandardNumber): void;

  hasSipUri(): boolean;
  clearSipUri(): void;
  getSipUri(): PhoneBookSIPURI | undefined;
  setSipUri(value?: PhoneBookSIPURI): void;

  getPhoneNumberHidden(): boolean;
  setPhoneNumberHidden(value: boolean): void;

  getPhoneBookEntryCase(): CreatePhoneBookEntryReq.PhoneBookEntryCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePhoneBookEntryReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePhoneBookEntryReq): CreatePhoneBookEntryReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePhoneBookEntryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePhoneBookEntryReq;
  static deserializeBinaryFromReader(message: CreatePhoneBookEntryReq, reader: jspb.BinaryReader): CreatePhoneBookEntryReq;
}

export namespace CreatePhoneBookEntryReq {
  export type AsObject = {
    huntGroupSid: number,
    entryName: string,
    standard?: PhoneBookStandardNumber.AsObject,
    sipUri?: PhoneBookSIPURI.AsObject,
    phoneNumberHidden: boolean,
  }

  export enum PhoneBookEntryCase {
    PHONE_BOOK_ENTRY_NOT_SET = 0,
    STANDARD = 3,
    SIP_URI = 4,
  }
}

export class CreatePhoneBookEntryRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePhoneBookEntryRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePhoneBookEntryRes): CreatePhoneBookEntryRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePhoneBookEntryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePhoneBookEntryRes;
  static deserializeBinaryFromReader(message: CreatePhoneBookEntryRes, reader: jspb.BinaryReader): CreatePhoneBookEntryRes;
}

export namespace CreatePhoneBookEntryRes {
  export type AsObject = {
  }
}

export class UpdatePhoneBookEntryReq extends jspb.Message {
  getPhoneBookSid(): number;
  setPhoneBookSid(value: number): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getEntryName(): string;
  setEntryName(value: string): void;

  hasStandard(): boolean;
  clearStandard(): void;
  getStandard(): PhoneBookStandardNumber | undefined;
  setStandard(value?: PhoneBookStandardNumber): void;

  hasSipUri(): boolean;
  clearSipUri(): void;
  getSipUri(): PhoneBookSIPURI | undefined;
  setSipUri(value?: PhoneBookSIPURI): void;

  getPhoneNumberHidden(): boolean;
  setPhoneNumberHidden(value: boolean): void;

  getPhoneBookEntryCase(): UpdatePhoneBookEntryReq.PhoneBookEntryCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePhoneBookEntryReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePhoneBookEntryReq): UpdatePhoneBookEntryReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePhoneBookEntryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePhoneBookEntryReq;
  static deserializeBinaryFromReader(message: UpdatePhoneBookEntryReq, reader: jspb.BinaryReader): UpdatePhoneBookEntryReq;
}

export namespace UpdatePhoneBookEntryReq {
  export type AsObject = {
    phoneBookSid: number,
    huntGroupSid: number,
    entryName: string,
    standard?: PhoneBookStandardNumber.AsObject,
    sipUri?: PhoneBookSIPURI.AsObject,
    phoneNumberHidden: boolean,
  }

  export enum PhoneBookEntryCase {
    PHONE_BOOK_ENTRY_NOT_SET = 0,
    STANDARD = 4,
    SIP_URI = 5,
  }
}

export class UpdatePhoneBookEntryRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePhoneBookEntryRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePhoneBookEntryRes): UpdatePhoneBookEntryRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePhoneBookEntryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePhoneBookEntryRes;
  static deserializeBinaryFromReader(message: UpdatePhoneBookEntryRes, reader: jspb.BinaryReader): UpdatePhoneBookEntryRes;
}

export namespace UpdatePhoneBookEntryRes {
  export type AsObject = {
  }
}

export class DeletePhoneBookEntryReq extends jspb.Message {
  getPhoneBookSid(): number;
  setPhoneBookSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePhoneBookEntryReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePhoneBookEntryReq): DeletePhoneBookEntryReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePhoneBookEntryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePhoneBookEntryReq;
  static deserializeBinaryFromReader(message: DeletePhoneBookEntryReq, reader: jspb.BinaryReader): DeletePhoneBookEntryReq;
}

export namespace DeletePhoneBookEntryReq {
  export type AsObject = {
    phoneBookSid: number,
  }
}

export class DeletePhoneBookEntryRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePhoneBookEntryRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePhoneBookEntryRes): DeletePhoneBookEntryRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePhoneBookEntryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePhoneBookEntryRes;
  static deserializeBinaryFromReader(message: DeletePhoneBookEntryRes, reader: jspb.BinaryReader): DeletePhoneBookEntryRes;
}

export namespace DeletePhoneBookEntryRes {
  export type AsObject = {
  }
}

export class ListPhoneBooksReq extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPhoneBooksReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListPhoneBooksReq): ListPhoneBooksReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPhoneBooksReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPhoneBooksReq;
  static deserializeBinaryFromReader(message: ListPhoneBooksReq, reader: jspb.BinaryReader): ListPhoneBooksReq;
}

export namespace ListPhoneBooksReq {
  export type AsObject = {
    huntGroupSid: number,
  }
}

export class ListPhoneBooksRes extends jspb.Message {
  clearCallerIdPhoneBooksList(): void;
  getCallerIdPhoneBooksList(): Array<PhoneBook>;
  setCallerIdPhoneBooksList(value: Array<PhoneBook>): void;
  addCallerIdPhoneBooks(value?: PhoneBook, index?: number): PhoneBook;

  clearOutboundPhoneBooksList(): void;
  getOutboundPhoneBooksList(): Array<PhoneBook>;
  setOutboundPhoneBooksList(value: Array<PhoneBook>): void;
  addOutboundPhoneBooks(value?: PhoneBook, index?: number): PhoneBook;

  clearTransferPhoneBooksList(): void;
  getTransferPhoneBooksList(): Array<PhoneBook>;
  setTransferPhoneBooksList(value: Array<PhoneBook>): void;
  addTransferPhoneBooks(value?: PhoneBook, index?: number): PhoneBook;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPhoneBooksRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListPhoneBooksRes): ListPhoneBooksRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPhoneBooksRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPhoneBooksRes;
  static deserializeBinaryFromReader(message: ListPhoneBooksRes, reader: jspb.BinaryReader): ListPhoneBooksRes;
}

export namespace ListPhoneBooksRes {
  export type AsObject = {
    callerIdPhoneBooksList: Array<PhoneBook.AsObject>,
    outboundPhoneBooksList: Array<PhoneBook.AsObject>,
    transferPhoneBooksList: Array<PhoneBook.AsObject>,
  }
}

export class ListAgentTriggersReq extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentTriggersReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentTriggersReq): ListAgentTriggersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentTriggersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentTriggersReq;
  static deserializeBinaryFromReader(message: ListAgentTriggersReq, reader: jspb.BinaryReader): ListAgentTriggersReq;
}

export namespace ListAgentTriggersReq {
  export type AsObject = {
    huntGroupSid: number,
  }
}

export class TriggerParameters extends jspb.Message {
  getActionKey(): string;
  setActionKey(value: string): void;

  getActionString(): string;
  setActionString(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerParameters.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerParameters): TriggerParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerParameters;
  static deserializeBinaryFromReader(message: TriggerParameters, reader: jspb.BinaryReader): TriggerParameters;
}

export namespace TriggerParameters {
  export type AsObject = {
    actionKey: string,
    actionString: string,
  }
}

export class TriggerDetails extends jspb.Message {
  getTriggerName(): string;
  setTriggerName(value: string): void;

  getTriggerDesc(): string;
  setTriggerDesc(value: string): void;

  getTriggerStatus(): number;
  setTriggerStatus(value: number): void;

  getTriggerDuration(): number;
  setTriggerDuration(value: number): void;

  clearCallTypesList(): void;
  getCallTypesList(): Array<api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]>;
  setCallTypesList(value: Array<api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]>): void;
  addCallTypes(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap], index?: number): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];

  clearTriggerParametersList(): void;
  getTriggerParametersList(): Array<TriggerParameters>;
  setTriggerParametersList(value: Array<TriggerParameters>): void;
  addTriggerParameters(value?: TriggerParameters, index?: number): TriggerParameters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerDetails.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerDetails): TriggerDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerDetails;
  static deserializeBinaryFromReader(message: TriggerDetails, reader: jspb.BinaryReader): TriggerDetails;
}

export namespace TriggerDetails {
  export type AsObject = {
    triggerName: string,
    triggerDesc: string,
    triggerStatus: number,
    triggerDuration: number,
    callTypesList: Array<api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]>,
    triggerParametersList: Array<TriggerParameters.AsObject>,
  }
}

export class ListAgentTriggersRes extends jspb.Message {
  clearTriggerDetailsList(): void;
  getTriggerDetailsList(): Array<TriggerDetails>;
  setTriggerDetailsList(value: Array<TriggerDetails>): void;
  addTriggerDetails(value?: TriggerDetails, index?: number): TriggerDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentTriggersRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentTriggersRes): ListAgentTriggersRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentTriggersRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentTriggersRes;
  static deserializeBinaryFromReader(message: ListAgentTriggersRes, reader: jspb.BinaryReader): ListAgentTriggersRes;
}

export namespace ListAgentTriggersRes {
  export type AsObject = {
    triggerDetailsList: Array<TriggerDetails.AsObject>,
  }
}

export class PBXExtension extends jspb.Message {
  getPbxExtensionSid(): number;
  setPbxExtensionSid(value: number): void;

  getPbxExtension(): string;
  setPbxExtension(value: string): void;

  getJoinSid(): number;
  setJoinSid(value: number): void;

  getJoinType(): string;
  setJoinType(value: string): void;

  getEmailSubject(): string;
  setEmailSubject(value: string): void;

  getEmailBody(): string;
  setEmailBody(value: string): void;

  getEmailAddresses(): string;
  setEmailAddresses(value: string): void;

  getAgentAccess(): boolean;
  setAgentAccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PBXExtension.AsObject;
  static toObject(includeInstance: boolean, msg: PBXExtension): PBXExtension.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PBXExtension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PBXExtension;
  static deserializeBinaryFromReader(message: PBXExtension, reader: jspb.BinaryReader): PBXExtension;
}

export namespace PBXExtension {
  export type AsObject = {
    pbxExtensionSid: number,
    pbxExtension: string,
    joinSid: number,
    joinType: string,
    emailSubject: string,
    emailBody: string,
    emailAddresses: string,
    agentAccess: boolean,
  }
}

export class ListPBXExtensionsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPBXExtensionsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListPBXExtensionsReq): ListPBXExtensionsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPBXExtensionsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPBXExtensionsReq;
  static deserializeBinaryFromReader(message: ListPBXExtensionsReq, reader: jspb.BinaryReader): ListPBXExtensionsReq;
}

export namespace ListPBXExtensionsReq {
  export type AsObject = {
  }
}

export class ListPBXExtensionsRes extends jspb.Message {
  clearAgentExtensionsList(): void;
  getAgentExtensionsList(): Array<ListPBXExtensionsRes.AgentExtension>;
  setAgentExtensionsList(value: Array<ListPBXExtensionsRes.AgentExtension>): void;
  addAgentExtensions(value?: ListPBXExtensionsRes.AgentExtension, index?: number): ListPBXExtensionsRes.AgentExtension;

  clearHuntGroupExtensionsList(): void;
  getHuntGroupExtensionsList(): Array<ListPBXExtensionsRes.HuntGroupExtension>;
  setHuntGroupExtensionsList(value: Array<ListPBXExtensionsRes.HuntGroupExtension>): void;
  addHuntGroupExtensions(value?: ListPBXExtensionsRes.HuntGroupExtension, index?: number): ListPBXExtensionsRes.HuntGroupExtension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPBXExtensionsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListPBXExtensionsRes): ListPBXExtensionsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPBXExtensionsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPBXExtensionsRes;
  static deserializeBinaryFromReader(message: ListPBXExtensionsRes, reader: jspb.BinaryReader): ListPBXExtensionsRes;
}

export namespace ListPBXExtensionsRes {
  export type AsObject = {
    agentExtensionsList: Array<ListPBXExtensionsRes.AgentExtension.AsObject>,
    huntGroupExtensionsList: Array<ListPBXExtensionsRes.HuntGroupExtension.AsObject>,
  }

  export class AgentExtension extends jspb.Message {
    getPbxExtension(): string;
    setPbxExtension(value: string): void;

    getGreetingLocation(): string;
    setGreetingLocation(value: string): void;

    hasEmail(): boolean;
    clearEmail(): void;
    getEmail(): EmailResponse | undefined;
    setEmail(value?: EmailResponse): void;

    getAgentName(): string;
    setAgentName(value: string): void;

    getHasGreeting(): boolean;
    setHasGreeting(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentExtension.AsObject;
    static toObject(includeInstance: boolean, msg: AgentExtension): AgentExtension.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentExtension, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentExtension;
    static deserializeBinaryFromReader(message: AgentExtension, reader: jspb.BinaryReader): AgentExtension;
  }

  export namespace AgentExtension {
    export type AsObject = {
      pbxExtension: string,
      greetingLocation: string,
      email?: EmailResponse.AsObject,
      agentName: string,
      hasGreeting: boolean,
    }
  }

  export class HuntGroupExtension extends jspb.Message {
    getPbxExtension(): string;
    setPbxExtension(value: string): void;

    getGreetingLocation(): string;
    setGreetingLocation(value: string): void;

    hasEmail(): boolean;
    clearEmail(): void;
    getEmail(): EmailResponse | undefined;
    setEmail(value?: EmailResponse): void;

    getHuntGroupName(): string;
    setHuntGroupName(value: string): void;

    getHasGreeting(): boolean;
    setHasGreeting(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HuntGroupExtension.AsObject;
    static toObject(includeInstance: boolean, msg: HuntGroupExtension): HuntGroupExtension.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HuntGroupExtension, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HuntGroupExtension;
    static deserializeBinaryFromReader(message: HuntGroupExtension, reader: jspb.BinaryReader): HuntGroupExtension;
  }

  export namespace HuntGroupExtension {
    export type AsObject = {
      pbxExtension: string,
      greetingLocation: string,
      email?: EmailResponse.AsObject,
      huntGroupName: string,
      hasGreeting: boolean,
    }
  }
}

export class EmailResponse extends jspb.Message {
  getSubject(): string;
  setSubject(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  clearAddressesList(): void;
  getAddressesList(): Array<string>;
  setAddressesList(value: Array<string>): void;
  addAddresses(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EmailResponse): EmailResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailResponse;
  static deserializeBinaryFromReader(message: EmailResponse, reader: jspb.BinaryReader): EmailResponse;
}

export namespace EmailResponse {
  export type AsObject = {
    subject: string,
    body: string,
    addressesList: Array<string>,
  }
}

export class MailMergeData extends jspb.Message {
  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getScheduledCallbackId(): string;
  setScheduledCallbackId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MailMergeData.AsObject;
  static toObject(includeInstance: boolean, msg: MailMergeData): MailMergeData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MailMergeData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MailMergeData;
  static deserializeBinaryFromReader(message: MailMergeData, reader: jspb.BinaryReader): MailMergeData;
}

export namespace MailMergeData {
  export type AsObject = {
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    scheduledCallbackId: string,
  }
}

export class HuntGroupResponse extends jspb.Message {
  getHuntGroupResponseSid(): number;
  setHuntGroupResponseSid(value: number): void;

  hasHuntGroupSid(): boolean;
  clearHuntGroupSid(): void;
  getHuntGroupSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setHuntGroupSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasType(): boolean;
  clearType(): void;
  getType(): google_protobuf_wrappers_pb.StringValue | undefined;
  setType(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearOptionsList(): void;
  getOptionsList(): Array<string>;
  setOptionsList(value: Array<string>): void;
  addOptions(value: string, index?: number): string;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setOrder(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasRequired(): boolean;
  clearRequired(): void;
  getRequired(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setRequired(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasDefaultValue(): boolean;
  clearDefaultValue(): void;
  getDefaultValue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDefaultValue(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasManualDial(): boolean;
  clearManualDial(): void;
  getManualDial(): ManualDialSettings | undefined;
  setManualDial(value?: ManualDialSettings): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HuntGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HuntGroupResponse): HuntGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HuntGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HuntGroupResponse;
  static deserializeBinaryFromReader(message: HuntGroupResponse, reader: jspb.BinaryReader): HuntGroupResponse;
}

export namespace HuntGroupResponse {
  export type AsObject = {
    huntGroupResponseSid: number,
    huntGroupSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    type?: google_protobuf_wrappers_pb.StringValue.AsObject,
    optionsList: Array<string>,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
    order?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    required?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    defaultValue?: google_protobuf_wrappers_pb.StringValue.AsObject,
    manualDial?: ManualDialSettings.AsObject,
  }
}

export class DNCL extends jspb.Message {
  hasCountrySid(): boolean;
  clearCountrySid(): void;
  getCountrySid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCountrySid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasDnclNotes(): boolean;
  clearDnclNotes(): void;
  getDnclNotes(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDnclNotes(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasDnclNumber(): boolean;
  clearDnclNumber(): void;
  getDnclNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDnclNumber(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasExpirationDate(): boolean;
  clearExpirationDate(): void;
  getExpirationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirationDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DNCL.AsObject;
  static toObject(includeInstance: boolean, msg: DNCL): DNCL.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DNCL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DNCL;
  static deserializeBinaryFromReader(message: DNCL, reader: jspb.BinaryReader): DNCL;
}

export namespace DNCL {
  export type AsObject = {
    countrySid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    dnclNotes?: google_protobuf_wrappers_pb.StringValue.AsObject,
    dnclNumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
    expirationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AgentLoggingData extends jspb.Message {
  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getActionValueSuffix(): string;
  setActionValueSuffix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentLoggingData.AsObject;
  static toObject(includeInstance: boolean, msg: AgentLoggingData): AgentLoggingData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentLoggingData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentLoggingData;
  static deserializeBinaryFromReader(message: AgentLoggingData, reader: jspb.BinaryReader): AgentLoggingData;
}

export namespace AgentLoggingData {
  export type AsObject = {
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    actionValueSuffix: string,
  }
}

export class CreateDNCLNumbersReq extends jspb.Message {
  clearDnclsList(): void;
  getDnclsList(): Array<DNCL>;
  setDnclsList(value: Array<DNCL>): void;
  addDncls(value?: DNCL, index?: number): DNCL;

  hasAgentLoggingData(): boolean;
  clearAgentLoggingData(): void;
  getAgentLoggingData(): AgentLoggingData | undefined;
  setAgentLoggingData(value?: AgentLoggingData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDNCLNumbersReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDNCLNumbersReq): CreateDNCLNumbersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDNCLNumbersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDNCLNumbersReq;
  static deserializeBinaryFromReader(message: CreateDNCLNumbersReq, reader: jspb.BinaryReader): CreateDNCLNumbersReq;
}

export namespace CreateDNCLNumbersReq {
  export type AsObject = {
    dnclsList: Array<DNCL.AsObject>,
    agentLoggingData?: AgentLoggingData.AsObject,
  }
}

export class CreateDNCLNumbersRes extends jspb.Message {
  getSuccessCount(): number;
  setSuccessCount(value: number): void;

  getInvalidCount(): number;
  setInvalidCount(value: number): void;

  getFailureCount(): number;
  setFailureCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDNCLNumbersRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDNCLNumbersRes): CreateDNCLNumbersRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDNCLNumbersRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDNCLNumbersRes;
  static deserializeBinaryFromReader(message: CreateDNCLNumbersRes, reader: jspb.BinaryReader): CreateDNCLNumbersRes;
}

export namespace CreateDNCLNumbersRes {
  export type AsObject = {
    successCount: number,
    invalidCount: number,
    failureCount: number,
  }
}

export class GetHuntGroupAgentSettingsReq extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHuntGroupAgentSettingsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetHuntGroupAgentSettingsReq): GetHuntGroupAgentSettingsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHuntGroupAgentSettingsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHuntGroupAgentSettingsReq;
  static deserializeBinaryFromReader(message: GetHuntGroupAgentSettingsReq, reader: jspb.BinaryReader): GetHuntGroupAgentSettingsReq;
}

export namespace GetHuntGroupAgentSettingsReq {
  export type AsObject = {
    huntGroupSid: number,
  }
}

export class HuntGroupAgentSettings extends jspb.Message {
  getKeypadEnabled(): boolean;
  setKeypadEnabled(value: boolean): void;

  getKeypadDelimiter(): string;
  setKeypadDelimiter(value: string): void;

  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): AgentStatisticsSettings | undefined;
  setStatistics(value?: AgentStatisticsSettings): void;

  getEndCallConfirmation(): boolean;
  setEndCallConfirmation(value: boolean): void;

  hasPause(): boolean;
  clearPause(): void;
  getPause(): PauseSettings | undefined;
  setPause(value?: PauseSettings): void;

  hasHqm(): boolean;
  clearHqm(): void;
  getHqm(): HoldQueueMonitorSettings | undefined;
  setHqm(value?: HoldQueueMonitorSettings): void;

  hasManualDial(): boolean;
  clearManualDial(): void;
  getManualDial(): ManualDialSettings | undefined;
  setManualDial(value?: ManualDialSettings): void;

  hasTransfer(): boolean;
  clearTransfer(): void;
  getTransfer(): TransferSettings | undefined;
  setTransfer(value?: TransferSettings): void;

  hasPreviewDial(): boolean;
  clearPreviewDial(): void;
  getPreviewDial(): PreviewDialSettings | undefined;
  setPreviewDial(value?: PreviewDialSettings): void;

  hasPhoneNumberActivity(): boolean;
  clearPhoneNumberActivity(): void;
  getPhoneNumberActivity(): PhoneNumberActivitySettings | undefined;
  setPhoneNumberActivity(value?: PhoneNumberActivitySettings): void;

  hasDncl(): boolean;
  clearDncl(): void;
  getDncl(): DnclSettings | undefined;
  setDncl(value?: DnclSettings): void;

  hasHold(): boolean;
  clearHold(): void;
  getHold(): AgentHoldSettings | undefined;
  setHold(value?: AgentHoldSettings): void;

  hasManualApproval(): boolean;
  clearManualApproval(): void;
  getManualApproval(): ManualApprovalSettings | undefined;
  setManualApproval(value?: ManualApprovalSettings): void;

  getDisplayLinkbackHuntgroup(): boolean;
  setDisplayLinkbackHuntgroup(value: boolean): void;

  hasScheduleCallback(): boolean;
  clearScheduleCallback(): void;
  getScheduleCallback(): ScheduleCallBackSettings | undefined;
  setScheduleCallback(value?: ScheduleCallBackSettings): void;

  hasRecording(): boolean;
  clearRecording(): void;
  getRecording(): RecordingSettings | undefined;
  setRecording(value?: RecordingSettings): void;

  getDisplayPhoneZipMetadata(): boolean;
  setDisplayPhoneZipMetadata(value: boolean): void;

  clearPhoneZipMetadataKeysList(): void;
  getPhoneZipMetadataKeysList(): Array<string>;
  setPhoneZipMetadataKeysList(value: Array<string>): void;
  addPhoneZipMetadataKeys(value: string, index?: number): string;

  getDisplayMachineDeliver(): boolean;
  setDisplayMachineDeliver(value: boolean): void;

  getAllowAgentIntercom(): boolean;
  setAllowAgentIntercom(value: boolean): void;

  hasDisplayDataSettings(): boolean;
  clearDisplayDataSettings(): void;
  getDisplayDataSettings(): DisplayDataSettings | undefined;
  setDisplayDataSettings(value?: DisplayDataSettings): void;

  getAllowChangeHuntGroup(): boolean;
  setAllowChangeHuntGroup(value: boolean): void;

  getAgentScreenRecording(): boolean;
  setAgentScreenRecording(value: boolean): void;

  clearInboundComplianceMetadataList(): void;
  getInboundComplianceMetadataList(): Array<ComplianceMetadata>;
  setInboundComplianceMetadataList(value: Array<ComplianceMetadata>): void;
  addInboundComplianceMetadata(value?: ComplianceMetadata, index?: number): ComplianceMetadata;

  getNotifyQueuedCalls(): boolean;
  setNotifyQueuedCalls(value: boolean): void;

  getDisplayJourneyRetrievedData(): boolean;
  setDisplayJourneyRetrievedData(value: boolean): void;

  clearLimitJourneyRetrievedDataList(): void;
  getLimitJourneyRetrievedDataList(): Array<string>;
  setLimitJourneyRetrievedDataList(value: Array<string>): void;
  addLimitJourneyRetrievedData(value: string, index?: number): string;

  getInitialAgentStatus(): number;
  setInitialAgentStatus(value: number): void;

  getDisplayWebLinks(): boolean;
  setDisplayWebLinks(value: boolean): void;

  getDisplaySkills(): boolean;
  setDisplaySkills(value: boolean): void;

  clearInterruptPeeringList(): void;
  getInterruptPeeringList(): Array<api_commons_p3api_pb.InterruptedPeeringStatusMap[keyof api_commons_p3api_pb.InterruptedPeeringStatusMap]>;
  setInterruptPeeringList(value: Array<api_commons_p3api_pb.InterruptedPeeringStatusMap[keyof api_commons_p3api_pb.InterruptedPeeringStatusMap]>): void;
  addInterruptPeering(value: api_commons_p3api_pb.InterruptedPeeringStatusMap[keyof api_commons_p3api_pb.InterruptedPeeringStatusMap], index?: number): api_commons_p3api_pb.InterruptedPeeringStatusMap[keyof api_commons_p3api_pb.InterruptedPeeringStatusMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HuntGroupAgentSettings.AsObject;
  static toObject(includeInstance: boolean, msg: HuntGroupAgentSettings): HuntGroupAgentSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HuntGroupAgentSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HuntGroupAgentSettings;
  static deserializeBinaryFromReader(message: HuntGroupAgentSettings, reader: jspb.BinaryReader): HuntGroupAgentSettings;
}

export namespace HuntGroupAgentSettings {
  export type AsObject = {
    keypadEnabled: boolean,
    keypadDelimiter: string,
    statistics?: AgentStatisticsSettings.AsObject,
    endCallConfirmation: boolean,
    pause?: PauseSettings.AsObject,
    hqm?: HoldQueueMonitorSettings.AsObject,
    manualDial?: ManualDialSettings.AsObject,
    transfer?: TransferSettings.AsObject,
    previewDial?: PreviewDialSettings.AsObject,
    phoneNumberActivity?: PhoneNumberActivitySettings.AsObject,
    dncl?: DnclSettings.AsObject,
    hold?: AgentHoldSettings.AsObject,
    manualApproval?: ManualApprovalSettings.AsObject,
    displayLinkbackHuntgroup: boolean,
    scheduleCallback?: ScheduleCallBackSettings.AsObject,
    recording?: RecordingSettings.AsObject,
    displayPhoneZipMetadata: boolean,
    phoneZipMetadataKeysList: Array<string>,
    displayMachineDeliver: boolean,
    allowAgentIntercom: boolean,
    displayDataSettings?: DisplayDataSettings.AsObject,
    allowChangeHuntGroup: boolean,
    agentScreenRecording: boolean,
    inboundComplianceMetadataList: Array<ComplianceMetadata.AsObject>,
    notifyQueuedCalls: boolean,
    displayJourneyRetrievedData: boolean,
    limitJourneyRetrievedDataList: Array<string>,
    initialAgentStatus: number,
    displayWebLinks: boolean,
    displaySkills: boolean,
    interruptPeeringList: Array<api_commons_p3api_pb.InterruptedPeeringStatusMap[keyof api_commons_p3api_pb.InterruptedPeeringStatusMap]>,
  }
}

export class AgentStatisticsSettings extends jspb.Message {
  getShowStatistics(): boolean;
  setShowStatistics(value: boolean): void;

  getShowCallHistory(): boolean;
  setShowCallHistory(value: boolean): void;

  getFilterCallHistory(): AgentStatisticsSettings.HistoryFilterMap[keyof AgentStatisticsSettings.HistoryFilterMap];
  setFilterCallHistory(value: AgentStatisticsSettings.HistoryFilterMap[keyof AgentStatisticsSettings.HistoryFilterMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentStatisticsSettings.AsObject;
  static toObject(includeInstance: boolean, msg: AgentStatisticsSettings): AgentStatisticsSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentStatisticsSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentStatisticsSettings;
  static deserializeBinaryFromReader(message: AgentStatisticsSettings, reader: jspb.BinaryReader): AgentStatisticsSettings;
}

export namespace AgentStatisticsSettings {
  export type AsObject = {
    showStatistics: boolean,
    showCallHistory: boolean,
    filterCallHistory: AgentStatisticsSettings.HistoryFilterMap[keyof AgentStatisticsSettings.HistoryFilterMap],
  }

  export interface HistoryFilterMap {
    TODAY: 0;
    SESSION: 1;
  }

  export const HistoryFilter: HistoryFilterMap;
}

export class PauseSettings extends jspb.Message {
  getAllowAgentPause(): boolean;
  setAllowAgentPause(value: boolean): void;

  getAllowAgentPauseReset(): boolean;
  setAllowAgentPauseReset(value: boolean): void;

  getUseAgentPauseCodes(): boolean;
  setUseAgentPauseCodes(value: boolean): void;

  getDefaultAgentPauseCode(): string;
  setDefaultAgentPauseCode(value: string): void;

  getRecordingPauseConfirmation(): boolean;
  setRecordingPauseConfirmation(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseSettings.AsObject;
  static toObject(includeInstance: boolean, msg: PauseSettings): PauseSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PauseSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseSettings;
  static deserializeBinaryFromReader(message: PauseSettings, reader: jspb.BinaryReader): PauseSettings;
}

export namespace PauseSettings {
  export type AsObject = {
    allowAgentPause: boolean,
    allowAgentPauseReset: boolean,
    useAgentPauseCodes: boolean,
    defaultAgentPauseCode: string,
    recordingPauseConfirmation: boolean,
  }
}

export class PhoneNumberActivitySettings extends jspb.Message {
  getAllowPhoneNumberActivity(): boolean;
  setAllowPhoneNumberActivity(value: boolean): void;

  getAllowExportPhoneNumberActivity(): boolean;
  setAllowExportPhoneNumberActivity(value: boolean): void;

  getAllowPnaRecordingsDownload(): boolean;
  setAllowPnaRecordingsDownload(value: boolean): void;

  getAllowPnaEditResponses(): boolean;
  setAllowPnaEditResponses(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhoneNumberActivitySettings.AsObject;
  static toObject(includeInstance: boolean, msg: PhoneNumberActivitySettings): PhoneNumberActivitySettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PhoneNumberActivitySettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhoneNumberActivitySettings;
  static deserializeBinaryFromReader(message: PhoneNumberActivitySettings, reader: jspb.BinaryReader): PhoneNumberActivitySettings;
}

export namespace PhoneNumberActivitySettings {
  export type AsObject = {
    allowPhoneNumberActivity: boolean,
    allowExportPhoneNumberActivity: boolean,
    allowPnaRecordingsDownload: boolean,
    allowPnaEditResponses: boolean,
  }
}

export class PreviewDialSettings extends jspb.Message {
  getRequireConfirmation(): boolean;
  setRequireConfirmation(value: boolean): void;

  getTimeoutMinutes(): number;
  setTimeoutMinutes(value: number): void;

  getAllowCancel(): boolean;
  setAllowCancel(value: boolean): void;

  getPauseOnCancel(): boolean;
  setPauseOnCancel(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreviewDialSettings.AsObject;
  static toObject(includeInstance: boolean, msg: PreviewDialSettings): PreviewDialSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PreviewDialSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreviewDialSettings;
  static deserializeBinaryFromReader(message: PreviewDialSettings, reader: jspb.BinaryReader): PreviewDialSettings;
}

export namespace PreviewDialSettings {
  export type AsObject = {
    requireConfirmation: boolean,
    timeoutMinutes: number,
    allowCancel: boolean,
    pauseOnCancel: boolean,
  }
}

export class HoldQueueMonitoringAgentRouting extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HoldQueueMonitoringAgentRouting.AsObject;
  static toObject(includeInstance: boolean, msg: HoldQueueMonitoringAgentRouting): HoldQueueMonitoringAgentRouting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HoldQueueMonitoringAgentRouting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HoldQueueMonitoringAgentRouting;
  static deserializeBinaryFromReader(message: HoldQueueMonitoringAgentRouting, reader: jspb.BinaryReader): HoldQueueMonitoringAgentRouting;
}

export namespace HoldQueueMonitoringAgentRouting {
  export type AsObject = {
  }

  export interface EnumMap {
    UNKNOWN: 0;
    ORIGINAL_AGENT_REQUIRED: 1;
    ORIGINAL_AGENT_PREFERRED: 2;
    ANY_AGENT: 3;
  }

  export const Enum: EnumMap;
}

export class HoldQueueMonitorSettings extends jspb.Message {
  getMonitor(): boolean;
  setMonitor(value: boolean): void;

  getRequiredGroup(): number;
  setRequiredGroup(value: number): void;

  getPreferredGroup(): number;
  setPreferredGroup(value: number): void;

  getAgentRouting(): HoldQueueMonitoringAgentRouting.EnumMap[keyof HoldQueueMonitoringAgentRouting.EnumMap];
  setAgentRouting(value: HoldQueueMonitoringAgentRouting.EnumMap[keyof HoldQueueMonitoringAgentRouting.EnumMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HoldQueueMonitorSettings.AsObject;
  static toObject(includeInstance: boolean, msg: HoldQueueMonitorSettings): HoldQueueMonitorSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HoldQueueMonitorSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HoldQueueMonitorSettings;
  static deserializeBinaryFromReader(message: HoldQueueMonitorSettings, reader: jspb.BinaryReader): HoldQueueMonitorSettings;
}

export namespace HoldQueueMonitorSettings {
  export type AsObject = {
    monitor: boolean,
    requiredGroup: number,
    preferredGroup: number,
    agentRouting: HoldQueueMonitoringAgentRouting.EnumMap[keyof HoldQueueMonitoringAgentRouting.EnumMap],
  }
}

export class ComplianceMetadata extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getRequired(): boolean;
  setRequired(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComplianceMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ComplianceMetadata): ComplianceMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComplianceMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComplianceMetadata;
  static deserializeBinaryFromReader(message: ComplianceMetadata, reader: jspb.BinaryReader): ComplianceMetadata;
}

export namespace ComplianceMetadata {
  export type AsObject = {
    name: string,
    required: boolean,
  }
}

export class ManualDialSettings extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getShowOutboundPhoneBook(): boolean;
  setShowOutboundPhoneBook(value: boolean): void;

  getShowCallerIdPhoneBook(): boolean;
  setShowCallerIdPhoneBook(value: boolean): void;

  getHasCustomCallerId(): boolean;
  setHasCustomCallerId(value: boolean): void;

  getDefaultCallerId(): string;
  setDefaultCallerId(value: string): void;

  getDefaultCountrySid(): number;
  setDefaultCountrySid(value: number): void;

  getShowCountrySelector(): boolean;
  setShowCountrySelector(value: boolean): void;

  getTimezoneRestrictions(): boolean;
  setTimezoneRestrictions(value: boolean): void;

  getScrubCellPhones(): boolean;
  setScrubCellPhones(value: boolean): void;

  getCallRecording(): boolean;
  setCallRecording(value: boolean): void;

  getAgentOverrideCell(): boolean;
  setAgentOverrideCell(value: boolean): void;

  getAgentOverrideCcr(): boolean;
  setAgentOverrideCcr(value: boolean): void;

  getAgentOverrideDncl(): boolean;
  setAgentOverrideDncl(value: boolean): void;

  getAgentOverrideTimezone(): boolean;
  setAgentOverrideTimezone(value: boolean): void;

  getUseWhiteList(): boolean;
  setUseWhiteList(value: boolean): void;

  getUseRandomCallerId(): boolean;
  setUseRandomCallerId(value: boolean): void;

  getRandomCallerIdBucket(): number;
  setRandomCallerIdBucket(value: number): void;

  getDefaultCallerIdCountrySid(): number;
  setDefaultCallerIdCountrySid(value: number): void;

  getDisplayCallerIdCountrySelect(): boolean;
  setDisplayCallerIdCountrySelect(value: boolean): void;

  getUseCallerIdBucket(): boolean;
  setUseCallerIdBucket(value: boolean): void;

  getAgentOverrideNaturalCompliance(): boolean;
  setAgentOverrideNaturalCompliance(value: boolean): void;

  getNaturalComplianceRuleSetName(): string;
  setNaturalComplianceRuleSetName(value: string): void;

  clearComplianceMetadataList(): void;
  getComplianceMetadataList(): Array<ComplianceMetadata>;
  setComplianceMetadataList(value: Array<ComplianceMetadata>): void;
  addComplianceMetadata(value?: ComplianceMetadata, index?: number): ComplianceMetadata;

  getEnableMetadata(): boolean;
  setEnableMetadata(value: boolean): void;

  getUseTimezoneValidationZip(): ManualDialSettings.ZipCodeValidationMap[keyof ManualDialSettings.ZipCodeValidationMap];
  setUseTimezoneValidationZip(value: ManualDialSettings.ZipCodeValidationMap[keyof ManualDialSettings.ZipCodeValidationMap]): void;

  getEnableSipAddress(): boolean;
  setEnableSipAddress(value: boolean): void;

  getMaskManualDialCallerId(): boolean;
  setMaskManualDialCallerId(value: boolean): void;

  getEnableManualDialDataDip(): string;
  setEnableManualDialDataDip(value: string): void;

  getManualDialDataDipConfig(): number;
  setManualDialDataDipConfig(value: number): void;

  getManualDialDataDipResultHandling(): ManualDialDataDipHandling.EnumMap[keyof ManualDialDataDipHandling.EnumMap];
  setManualDialDataDipResultHandling(value: ManualDialDataDipHandling.EnumMap[keyof ManualDialDataDipHandling.EnumMap]): void;

  getDataDipManualDialIntegrationMap(): jspb.Map<string, string>;
  clearDataDipManualDialIntegrationMap(): void;
  getDataDipManualDialIntegrationHandling(): ManualDialDataDipHandling.EnumMap[keyof ManualDialDataDipHandling.EnumMap];
  setDataDipManualDialIntegrationHandling(value: ManualDialDataDipHandling.EnumMap[keyof ManualDialDataDipHandling.EnumMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualDialSettings.AsObject;
  static toObject(includeInstance: boolean, msg: ManualDialSettings): ManualDialSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManualDialSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualDialSettings;
  static deserializeBinaryFromReader(message: ManualDialSettings, reader: jspb.BinaryReader): ManualDialSettings;
}

export namespace ManualDialSettings {
  export type AsObject = {
    enabled: boolean,
    showOutboundPhoneBook: boolean,
    showCallerIdPhoneBook: boolean,
    hasCustomCallerId: boolean,
    defaultCallerId: string,
    defaultCountrySid: number,
    showCountrySelector: boolean,
    timezoneRestrictions: boolean,
    scrubCellPhones: boolean,
    callRecording: boolean,
    agentOverrideCell: boolean,
    agentOverrideCcr: boolean,
    agentOverrideDncl: boolean,
    agentOverrideTimezone: boolean,
    useWhiteList: boolean,
    useRandomCallerId: boolean,
    randomCallerIdBucket: number,
    defaultCallerIdCountrySid: number,
    displayCallerIdCountrySelect: boolean,
    useCallerIdBucket: boolean,
    agentOverrideNaturalCompliance: boolean,
    naturalComplianceRuleSetName: string,
    complianceMetadataList: Array<ComplianceMetadata.AsObject>,
    enableMetadata: boolean,
    useTimezoneValidationZip: ManualDialSettings.ZipCodeValidationMap[keyof ManualDialSettings.ZipCodeValidationMap],
    enableSipAddress: boolean,
    maskManualDialCallerId: boolean,
    enableManualDialDataDip: string,
    manualDialDataDipConfig: number,
    manualDialDataDipResultHandling: ManualDialDataDipHandling.EnumMap[keyof ManualDialDataDipHandling.EnumMap],
    dataDipManualDialIntegrationMap: Array<[string, string]>,
    dataDipManualDialIntegrationHandling: ManualDialDataDipHandling.EnumMap[keyof ManualDialDataDipHandling.EnumMap],
  }

  export interface ZipCodeValidationMap {
    FALSE: 0;
    TRUE: 1;
    REQUIRED: 2;
  }

  export const ZipCodeValidation: ZipCodeValidationMap;
}

export class ManualDialDataDipHandling extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualDialDataDipHandling.AsObject;
  static toObject(includeInstance: boolean, msg: ManualDialDataDipHandling): ManualDialDataDipHandling.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManualDialDataDipHandling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualDialDataDipHandling;
  static deserializeBinaryFromReader(message: ManualDialDataDipHandling, reader: jspb.BinaryReader): ManualDialDataDipHandling;
}

export namespace ManualDialDataDipHandling {
  export type AsObject = {
  }

  export interface EnumMap {
    NONE: 0;
    CANCEL: 1;
    NOTIFY_AND_CANCEL: 2;
    NOTIFY_AND_ALLOW_CALL: 3;
    CALL_WITH_ORIGINAL_VALUES: 4;
  }

  export const Enum: EnumMap;
}

export class ScrubListsAutoAdd extends jspb.Message {
  getScrubList(): string;
  setScrubList(value: string): void;

  getFieldId(): string;
  setFieldId(value: string): void;

  getFieldName(): string;
  setFieldName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScrubListsAutoAdd.AsObject;
  static toObject(includeInstance: boolean, msg: ScrubListsAutoAdd): ScrubListsAutoAdd.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScrubListsAutoAdd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScrubListsAutoAdd;
  static deserializeBinaryFromReader(message: ScrubListsAutoAdd, reader: jspb.BinaryReader): ScrubListsAutoAdd;
}

export namespace ScrubListsAutoAdd {
  export type AsObject = {
    scrubList: string,
    fieldId: string,
    fieldName: string,
  }
}

export class ScrubListsExpirationLimits extends jspb.Message {
  clearOutboundExpirationLimitList(): void;
  getOutboundExpirationLimitList(): Array<number>;
  setOutboundExpirationLimitList(value: Array<number>): void;
  addOutboundExpirationLimit(value: number, index?: number): number;

  clearInboundExpirationLimitList(): void;
  getInboundExpirationLimitList(): Array<number>;
  setInboundExpirationLimitList(value: Array<number>): void;
  addInboundExpirationLimit(value: number, index?: number): number;

  clearManualDialExpirationLimitList(): void;
  getManualDialExpirationLimitList(): Array<number>;
  setManualDialExpirationLimitList(value: Array<number>): void;
  addManualDialExpirationLimit(value: number, index?: number): number;

  clearPreviewDialExpirationLimitList(): void;
  getPreviewDialExpirationLimitList(): Array<number>;
  setPreviewDialExpirationLimitList(value: Array<number>): void;
  addPreviewDialExpirationLimit(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScrubListsExpirationLimits.AsObject;
  static toObject(includeInstance: boolean, msg: ScrubListsExpirationLimits): ScrubListsExpirationLimits.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScrubListsExpirationLimits, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScrubListsExpirationLimits;
  static deserializeBinaryFromReader(message: ScrubListsExpirationLimits, reader: jspb.BinaryReader): ScrubListsExpirationLimits;
}

export namespace ScrubListsExpirationLimits {
  export type AsObject = {
    outboundExpirationLimitList: Array<number>,
    inboundExpirationLimitList: Array<number>,
    manualDialExpirationLimitList: Array<number>,
    previewDialExpirationLimitList: Array<number>,
  }
}

export class DnclSettings extends jspb.Message {
  getAllowDnclAdd(): boolean;
  setAllowDnclAdd(value: boolean): void;

  getManualDialAutoDnclAdd(): boolean;
  setManualDialAutoDnclAdd(value: boolean): void;

  getPreviewDialAutoDnclAdd(): boolean;
  setPreviewDialAutoDnclAdd(value: boolean): void;

  getAgentResponsesAutoDnclAdd(): boolean;
  setAgentResponsesAutoDnclAdd(value: boolean): void;

  getDefaultManualDnclExpireHours(): number;
  setDefaultManualDnclExpireHours(value: number): void;

  getDefaultPreviewDnclExpireHours(): number;
  setDefaultPreviewDnclExpireHours(value: number): void;

  getDefaultDnclCountry(): number;
  setDefaultDnclCountry(value: number): void;

  getDefaultOutboundDnclExpireHours(): number;
  setDefaultOutboundDnclExpireHours(value: number): void;

  getDefaultInboundDnclExpireHours(): number;
  setDefaultInboundDnclExpireHours(value: number): void;

  clearHuntGroupComplianceScrubListsList(): void;
  getHuntGroupComplianceScrubListsList(): Array<string>;
  setHuntGroupComplianceScrubListsList(value: Array<string>): void;
  addHuntGroupComplianceScrubLists(value: string, index?: number): string;

  clearScrubListsAutoAddOptionsList(): void;
  getScrubListsAutoAddOptionsList(): Array<ScrubListsAutoAdd>;
  setScrubListsAutoAddOptionsList(value: Array<ScrubListsAutoAdd>): void;
  addScrubListsAutoAddOptions(value?: ScrubListsAutoAdd, index?: number): ScrubListsAutoAdd;

  getDisplayDnclOptionsInWrapup(): boolean;
  setDisplayDnclOptionsInWrapup(value: boolean): void;

  getAllowDnclRemove(): boolean;
  setAllowDnclRemove(value: boolean): void;

  clearHuntGroupComplianceScrubListsRemovalAllowedList(): void;
  getHuntGroupComplianceScrubListsRemovalAllowedList(): Array<string>;
  setHuntGroupComplianceScrubListsRemovalAllowedList(value: Array<string>): void;
  addHuntGroupComplianceScrubListsRemovalAllowed(value: string, index?: number): string;

  hasScrubListsExpirationLimits(): boolean;
  clearScrubListsExpirationLimits(): void;
  getScrubListsExpirationLimits(): ScrubListsExpirationLimits | undefined;
  setScrubListsExpirationLimits(value?: ScrubListsExpirationLimits): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DnclSettings.AsObject;
  static toObject(includeInstance: boolean, msg: DnclSettings): DnclSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DnclSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DnclSettings;
  static deserializeBinaryFromReader(message: DnclSettings, reader: jspb.BinaryReader): DnclSettings;
}

export namespace DnclSettings {
  export type AsObject = {
    allowDnclAdd: boolean,
    manualDialAutoDnclAdd: boolean,
    previewDialAutoDnclAdd: boolean,
    agentResponsesAutoDnclAdd: boolean,
    defaultManualDnclExpireHours: number,
    defaultPreviewDnclExpireHours: number,
    defaultDnclCountry: number,
    defaultOutboundDnclExpireHours: number,
    defaultInboundDnclExpireHours: number,
    huntGroupComplianceScrubListsList: Array<string>,
    scrubListsAutoAddOptionsList: Array<ScrubListsAutoAdd.AsObject>,
    displayDnclOptionsInWrapup: boolean,
    allowDnclRemove: boolean,
    huntGroupComplianceScrubListsRemovalAllowedList: Array<string>,
    scrubListsExpirationLimits?: ScrubListsExpirationLimits.AsObject,
  }
}

export class TransferSettings extends jspb.Message {
  getAllowed(): boolean;
  setAllowed(value: boolean): void;

  getShowFiltering(): boolean;
  setShowFiltering(value: boolean): void;

  getRequeueType(): RequeueTransferQueueConfigType.EnumMap[keyof RequeueTransferQueueConfigType.EnumMap];
  setRequeueType(value: RequeueTransferQueueConfigType.EnumMap[keyof RequeueTransferQueueConfigType.EnumMap]): void;

  clearTypeList(): void;
  getTypeList(): Array<TransferSettingsType.EnumMap[keyof TransferSettingsType.EnumMap]>;
  setTypeList(value: Array<TransferSettingsType.EnumMap[keyof TransferSettingsType.EnumMap]>): void;
  addType(value: TransferSettingsType.EnumMap[keyof TransferSettingsType.EnumMap], index?: number): TransferSettingsType.EnumMap[keyof TransferSettingsType.EnumMap];

  getDefaultCountrySid(): number;
  setDefaultCountrySid(value: number): void;

  getShowCountrySelector(): boolean;
  setShowCountrySelector(value: boolean): void;

  getHasCustomTransferNumber(): boolean;
  setHasCustomTransferNumber(value: boolean): void;

  getDefaultTransferNumber(): string;
  setDefaultTransferNumber(value: string): void;

  getHasCustomCallerId(): boolean;
  setHasCustomCallerId(value: boolean): void;

  getDefaultCallerId(): string;
  setDefaultCallerId(value: string): void;

  getShowTransfersPhoneBook(): boolean;
  setShowTransfersPhoneBook(value: boolean): void;

  getShowCallerIdPhoneBook(): boolean;
  setShowCallerIdPhoneBook(value: boolean): void;

  clearHandOffTypeList(): void;
  getHandOffTypeList(): Array<TransferSettingsHandOffType.EnumMap[keyof TransferSettingsHandOffType.EnumMap]>;
  setHandOffTypeList(value: Array<TransferSettingsHandOffType.EnumMap[keyof TransferSettingsHandOffType.EnumMap]>): void;
  addHandOffType(value: TransferSettingsHandOffType.EnumMap[keyof TransferSettingsHandOffType.EnumMap], index?: number): TransferSettingsHandOffType.EnumMap[keyof TransferSettingsHandOffType.EnumMap];

  getRecordingStatus(): RecordingStatus.EnumMap[keyof RecordingStatus.EnumMap];
  setRecordingStatus(value: RecordingStatus.EnumMap[keyof RecordingStatus.EnumMap]): void;

  getDefaultCallerIdCountrySid(): number;
  setDefaultCallerIdCountrySid(value: number): void;

  getShowCallerIdCountrySelector(): boolean;
  setShowCallerIdCountrySelector(value: boolean): void;

  clearStartRecordTransferTargetsList(): void;
  getStartRecordTransferTargetsList(): Array<string>;
  setStartRecordTransferTargetsList(value: Array<string>): void;
  addStartRecordTransferTargets(value: string, index?: number): string;

  clearStopRecordTransferTargetsList(): void;
  getStopRecordTransferTargetsList(): Array<string>;
  setStopRecordTransferTargetsList(value: Array<string>): void;
  addStopRecordTransferTargets(value: string, index?: number): string;

  getDefaultFilteringIncludeAllOnlineAgents(): boolean;
  setDefaultFilteringIncludeAllOnlineAgents(value: boolean): void;

  getRequeueTypeCustomValue(): string;
  setRequeueTypeCustomValue(value: string): void;

  getAgentTransferHuntGroupFilter(): boolean;
  setAgentTransferHuntGroupFilter(value: boolean): void;

  getAgentTransferRecordingStatus(): RecordingStatus.EnumMap[keyof RecordingStatus.EnumMap];
  setAgentTransferRecordingStatus(value: RecordingStatus.EnumMap[keyof RecordingStatus.EnumMap]): void;

  getRequeueTransferRecordingStatus(): RecordingStatus.EnumMap[keyof RecordingStatus.EnumMap];
  setRequeueTransferRecordingStatus(value: RecordingStatus.EnumMap[keyof RecordingStatus.EnumMap]): void;

  getOpenTransferRecordingStatus(): RecordingStatus.EnumMap[keyof RecordingStatus.EnumMap];
  setOpenTransferRecordingStatus(value: RecordingStatus.EnumMap[keyof RecordingStatus.EnumMap]): void;

  getNaturalComplianceOverride(): boolean;
  setNaturalComplianceOverride(value: boolean): void;

  getTransferNaturalComplianceRuleSetName(): string;
  setTransferNaturalComplianceRuleSetName(value: string): void;

  clearComplianceMetadataList(): void;
  getComplianceMetadataList(): Array<ComplianceMetadata>;
  setComplianceMetadataList(value: Array<ComplianceMetadata>): void;
  addComplianceMetadata(value?: ComplianceMetadata, index?: number): ComplianceMetadata;

  getCallWhitelist(): boolean;
  setCallWhitelist(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferSettings.AsObject;
  static toObject(includeInstance: boolean, msg: TransferSettings): TransferSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferSettings;
  static deserializeBinaryFromReader(message: TransferSettings, reader: jspb.BinaryReader): TransferSettings;
}

export namespace TransferSettings {
  export type AsObject = {
    allowed: boolean,
    showFiltering: boolean,
    requeueType: RequeueTransferQueueConfigType.EnumMap[keyof RequeueTransferQueueConfigType.EnumMap],
    typeList: Array<TransferSettingsType.EnumMap[keyof TransferSettingsType.EnumMap]>,
    defaultCountrySid: number,
    showCountrySelector: boolean,
    hasCustomTransferNumber: boolean,
    defaultTransferNumber: string,
    hasCustomCallerId: boolean,
    defaultCallerId: string,
    showTransfersPhoneBook: boolean,
    showCallerIdPhoneBook: boolean,
    handOffTypeList: Array<TransferSettingsHandOffType.EnumMap[keyof TransferSettingsHandOffType.EnumMap]>,
    recordingStatus: RecordingStatus.EnumMap[keyof RecordingStatus.EnumMap],
    defaultCallerIdCountrySid: number,
    showCallerIdCountrySelector: boolean,
    startRecordTransferTargetsList: Array<string>,
    stopRecordTransferTargetsList: Array<string>,
    defaultFilteringIncludeAllOnlineAgents: boolean,
    requeueTypeCustomValue: string,
    agentTransferHuntGroupFilter: boolean,
    agentTransferRecordingStatus: RecordingStatus.EnumMap[keyof RecordingStatus.EnumMap],
    requeueTransferRecordingStatus: RecordingStatus.EnumMap[keyof RecordingStatus.EnumMap],
    openTransferRecordingStatus: RecordingStatus.EnumMap[keyof RecordingStatus.EnumMap],
    naturalComplianceOverride: boolean,
    transferNaturalComplianceRuleSetName: string,
    complianceMetadataList: Array<ComplianceMetadata.AsObject>,
    callWhitelist: boolean,
  }
}

export class RecordingSettings extends jspb.Message {
  getDisplayIndicator(): boolean;
  setDisplayIndicator(value: boolean): void;

  getEnablePause(): boolean;
  setEnablePause(value: boolean): void;

  getEnableDelay(): boolean;
  setEnableDelay(value: boolean): void;

  getDelay(): number;
  setDelay(value: number): void;

  getPauseRecordingOnHold(): boolean;
  setPauseRecordingOnHold(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingSettings.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingSettings): RecordingSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingSettings;
  static deserializeBinaryFromReader(message: RecordingSettings, reader: jspb.BinaryReader): RecordingSettings;
}

export namespace RecordingSettings {
  export type AsObject = {
    displayIndicator: boolean,
    enablePause: boolean,
    enableDelay: boolean,
    delay: number,
    pauseRecordingOnHold: boolean,
  }
}

export class SimpleHuntGroup extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getHuntGroupName(): string;
  setHuntGroupName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleHuntGroup.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleHuntGroup): SimpleHuntGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimpleHuntGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleHuntGroup;
  static deserializeBinaryFromReader(message: SimpleHuntGroup, reader: jspb.BinaryReader): SimpleHuntGroup;
}

export namespace SimpleHuntGroup {
  export type AsObject = {
    huntGroupSid: number,
    huntGroupName: string,
  }
}

export class DisplayDataSettings extends jspb.Message {
  getDisplayDataDip(): DisplayDataSettings.DisplayDataDipMap[keyof DisplayDataSettings.DisplayDataDipMap];
  setDisplayDataDip(value: DisplayDataSettings.DisplayDataDipMap[keyof DisplayDataSettings.DisplayDataDipMap]): void;

  clearDisplayDataDipKeysList(): void;
  getDisplayDataDipKeysList(): Array<string>;
  setDisplayDataDipKeysList(value: Array<string>): void;
  addDisplayDataDipKeys(value: string, index?: number): string;

  getDisplayDataCollect(): boolean;
  setDisplayDataCollect(value: boolean): void;

  getDisplayIvrNavigation(): boolean;
  setDisplayIvrNavigation(value: boolean): void;

  getDisplaySipHeaderData(): boolean;
  setDisplaySipHeaderData(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisplayDataSettings.AsObject;
  static toObject(includeInstance: boolean, msg: DisplayDataSettings): DisplayDataSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisplayDataSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisplayDataSettings;
  static deserializeBinaryFromReader(message: DisplayDataSettings, reader: jspb.BinaryReader): DisplayDataSettings;
}

export namespace DisplayDataSettings {
  export type AsObject = {
    displayDataDip: DisplayDataSettings.DisplayDataDipMap[keyof DisplayDataSettings.DisplayDataDipMap],
    displayDataDipKeysList: Array<string>,
    displayDataCollect: boolean,
    displayIvrNavigation: boolean,
    displaySipHeaderData: boolean,
  }

  export interface DisplayDataDipMap {
    NONE: 0;
    ALL: 1;
    LIMITED: 2;
  }

  export const DisplayDataDip: DisplayDataDipMap;
}

export class RequeueTransferQueueConfigType extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequeueTransferQueueConfigType.AsObject;
  static toObject(includeInstance: boolean, msg: RequeueTransferQueueConfigType): RequeueTransferQueueConfigType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequeueTransferQueueConfigType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequeueTransferQueueConfigType;
  static deserializeBinaryFromReader(message: RequeueTransferQueueConfigType, reader: jspb.BinaryReader): RequeueTransferQueueConfigType;
}

export namespace RequeueTransferQueueConfigType {
  export type AsObject = {
  }

  export interface EnumMap {
    UNKNOWN: 0;
    DEFAULT: 1;
    CURRENT: 2;
    CUSTOM: 3;
  }

  export const Enum: EnumMap;
}

export class RecordingStatus extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingStatus.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingStatus): RecordingStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingStatus;
  static deserializeBinaryFromReader(message: RecordingStatus, reader: jspb.BinaryReader): RecordingStatus;
}

export namespace RecordingStatus {
  export type AsObject = {
  }

  export interface EnumMap {
    UNKNOWN: 0;
    KEEP_RECORDING: 1;
    STOP_RECORDING: 2;
    START_RECORDING: 3;
  }

  export const Enum: EnumMap;
}

export class TransferSettingsType extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferSettingsType.AsObject;
  static toObject(includeInstance: boolean, msg: TransferSettingsType): TransferSettingsType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferSettingsType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferSettingsType;
  static deserializeBinaryFromReader(message: TransferSettingsType, reader: jspb.BinaryReader): TransferSettingsType;
}

export namespace TransferSettingsType {
  export type AsObject = {
  }

  export interface EnumMap {
    UNKNOWN: 0;
    AGENT: 1;
    OPEN: 2;
    REQUEUE: 3;
    VOICE_MAIL: 4;
    PBX_EXTENSION: 5;
  }

  export const Enum: EnumMap;
}

export class TransferSettingsHandOffType extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferSettingsHandOffType.AsObject;
  static toObject(includeInstance: boolean, msg: TransferSettingsHandOffType): TransferSettingsHandOffType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferSettingsHandOffType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferSettingsHandOffType;
  static deserializeBinaryFromReader(message: TransferSettingsHandOffType, reader: jspb.BinaryReader): TransferSettingsHandOffType;
}

export namespace TransferSettingsHandOffType {
  export type AsObject = {
  }

  export interface EnumMap {
    UNKNOWN: 0;
    CONFERENCE: 1;
    WARM: 2;
    COLD: 3;
  }

  export const Enum: EnumMap;
}

export class AgentHoldSettings extends jspb.Message {
  getAllowed(): AllowedHoldType.EnumMap[keyof AllowedHoldType.EnumMap];
  setAllowed(value: AllowedHoldType.EnumMap[keyof AllowedHoldType.EnumMap]): void;

  getAutoPauseOnMultiHold(): boolean;
  setAutoPauseOnMultiHold(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentHoldSettings.AsObject;
  static toObject(includeInstance: boolean, msg: AgentHoldSettings): AgentHoldSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentHoldSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentHoldSettings;
  static deserializeBinaryFromReader(message: AgentHoldSettings, reader: jspb.BinaryReader): AgentHoldSettings;
}

export namespace AgentHoldSettings {
  export type AsObject = {
    allowed: AllowedHoldType.EnumMap[keyof AllowedHoldType.EnumMap],
    autoPauseOnMultiHold: boolean,
  }
}

export class AllowedHoldType extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllowedHoldType.AsObject;
  static toObject(includeInstance: boolean, msg: AllowedHoldType): AllowedHoldType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllowedHoldType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllowedHoldType;
  static deserializeBinaryFromReader(message: AllowedHoldType, reader: jspb.BinaryReader): AllowedHoldType;
}

export namespace AllowedHoldType {
  export type AsObject = {
  }

  export interface EnumMap {
    NONE: 0;
    SIMPLE: 1;
    MULTI: 2;
    BOTH: 3;
  }

  export const Enum: EnumMap;
}

export class ManualApprovalSettings extends jspb.Message {
  getAllowed(): boolean;
  setAllowed(value: boolean): void;

  getConfirm(): boolean;
  setConfirm(value: boolean): void;

  getSmsAllowed(): boolean;
  setSmsAllowed(value: boolean): void;

  getSmsNumberConfirmation(): boolean;
  setSmsNumberConfirmation(value: boolean): void;

  getDisableRejectOptionForApprovers(): boolean;
  setDisableRejectOptionForApprovers(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualApprovalSettings.AsObject;
  static toObject(includeInstance: boolean, msg: ManualApprovalSettings): ManualApprovalSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManualApprovalSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualApprovalSettings;
  static deserializeBinaryFromReader(message: ManualApprovalSettings, reader: jspb.BinaryReader): ManualApprovalSettings;
}

export namespace ManualApprovalSettings {
  export type AsObject = {
    allowed: boolean,
    confirm: boolean,
    smsAllowed: boolean,
    smsNumberConfirmation: boolean,
    disableRejectOptionForApprovers: boolean,
  }
}

export class ListHuntGroupWebLinksReq extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getServiceId(): string;
  setServiceId(value: string): void;

  getScheduledCallbackId(): string;
  setScheduledCallbackId(value: string): void;

  getSessionSid(): number;
  setSessionSid(value: number): void;

  getIsinitialpreview(): boolean;
  setIsinitialpreview(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHuntGroupWebLinksReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListHuntGroupWebLinksReq): ListHuntGroupWebLinksReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListHuntGroupWebLinksReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHuntGroupWebLinksReq;
  static deserializeBinaryFromReader(message: ListHuntGroupWebLinksReq, reader: jspb.BinaryReader): ListHuntGroupWebLinksReq;
}

export namespace ListHuntGroupWebLinksReq {
  export type AsObject = {
    huntGroupSid: number,
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    serviceId: string,
    scheduledCallbackId: string,
    sessionSid: number,
    isinitialpreview: boolean,
  }
}

export class ListHuntGroupWebLinksRes extends jspb.Message {
  clearWebLinksList(): void;
  getWebLinksList(): Array<WebLink>;
  setWebLinksList(value: Array<WebLink>): void;
  addWebLinks(value?: WebLink, index?: number): WebLink;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHuntGroupWebLinksRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListHuntGroupWebLinksRes): ListHuntGroupWebLinksRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListHuntGroupWebLinksRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHuntGroupWebLinksRes;
  static deserializeBinaryFromReader(message: ListHuntGroupWebLinksRes, reader: jspb.BinaryReader): ListHuntGroupWebLinksRes;
}

export namespace ListHuntGroupWebLinksRes {
  export type AsObject = {
    webLinksList: Array<WebLink.AsObject>,
  }
}

export class WebLink extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getLinkUrl(): string;
  setLinkUrl(value: string): void;

  getIsJsLink(): boolean;
  setIsJsLink(value: boolean): void;

  clearTooltipMissingFieldsList(): void;
  getTooltipMissingFieldsList(): Array<string>;
  setTooltipMissingFieldsList(value: Array<string>): void;
  addTooltipMissingFields(value: string, index?: number): string;

  getHuntGroupParameterSid(): number;
  setHuntGroupParameterSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebLink.AsObject;
  static toObject(includeInstance: boolean, msg: WebLink): WebLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebLink;
  static deserializeBinaryFromReader(message: WebLink, reader: jspb.BinaryReader): WebLink;
}

export namespace WebLink {
  export type AsObject = {
    displayName: string,
    description: string,
    linkUrl: string,
    isJsLink: boolean,
    tooltipMissingFieldsList: Array<string>,
    huntGroupParameterSid: number,
  }
}

export class GetHuntGroupPauseCodesReq extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHuntGroupPauseCodesReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetHuntGroupPauseCodesReq): GetHuntGroupPauseCodesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHuntGroupPauseCodesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHuntGroupPauseCodesReq;
  static deserializeBinaryFromReader(message: GetHuntGroupPauseCodesReq, reader: jspb.BinaryReader): GetHuntGroupPauseCodesReq;
}

export namespace GetHuntGroupPauseCodesReq {
  export type AsObject = {
    huntGroupSid: number,
  }
}

export class GetHuntGroupPauseCodesRes extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearPauseCodesList(): void;
  getPauseCodesList(): Array<string>;
  setPauseCodesList(value: Array<string>): void;
  addPauseCodes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHuntGroupPauseCodesRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetHuntGroupPauseCodesRes): GetHuntGroupPauseCodesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHuntGroupPauseCodesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHuntGroupPauseCodesRes;
  static deserializeBinaryFromReader(message: GetHuntGroupPauseCodesRes, reader: jspb.BinaryReader): GetHuntGroupPauseCodesRes;
}

export namespace GetHuntGroupPauseCodesRes {
  export type AsObject = {
    name: string,
    description: string,
    pauseCodesList: Array<string>,
  }
}

export class ListAgentCallHistoryReq extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  getHistoryFilter(): AgentStatisticsSettings.HistoryFilterMap[keyof AgentStatisticsSettings.HistoryFilterMap];
  setHistoryFilter(value: AgentStatisticsSettings.HistoryFilterMap[keyof AgentStatisticsSettings.HistoryFilterMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentCallHistoryReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentCallHistoryReq): ListAgentCallHistoryReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentCallHistoryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentCallHistoryReq;
  static deserializeBinaryFromReader(message: ListAgentCallHistoryReq, reader: jspb.BinaryReader): ListAgentCallHistoryReq;
}

export namespace ListAgentCallHistoryReq {
  export type AsObject = {
    sessionSid: number,
    historyFilter: AgentStatisticsSettings.HistoryFilterMap[keyof AgentStatisticsSettings.HistoryFilterMap],
  }
}

export class ListAgentCallHistoryRes extends jspb.Message {
  clearHistoryList(): void;
  getHistoryList(): Array<ListAgentCallHistoryRes.Entry>;
  setHistoryList(value: Array<ListAgentCallHistoryRes.Entry>): void;
  addHistory(value?: ListAgentCallHistoryRes.Entry, index?: number): ListAgentCallHistoryRes.Entry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentCallHistoryRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentCallHistoryRes): ListAgentCallHistoryRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentCallHistoryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentCallHistoryRes;
  static deserializeBinaryFromReader(message: ListAgentCallHistoryRes, reader: jspb.BinaryReader): ListAgentCallHistoryRes;
}

export namespace ListAgentCallHistoryRes {
  export type AsObject = {
    historyList: Array<ListAgentCallHistoryRes.Entry.AsObject>,
  }

  export class Entry extends jspb.Message {
    getCallSid(): number;
    setCallSid(value: number): void;

    getScheduleTime(): string;
    setScheduleTime(value: string): void;

    getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
    setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

    getPhoneNumber(): string;
    setPhoneNumber(value: string): void;

    getCallerId(): string;
    setCallerId(value: string): void;

    getResult(): number;
    setResult(value: number): void;

    getDuration(): number;
    setDuration(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entry.AsObject;
    static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entry;
    static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
  }

  export namespace Entry {
    export type AsObject = {
      callSid: number,
      scheduleTime: string,
      callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
      phoneNumber: string,
      callerId: string,
      result: number,
      duration: number,
    }
  }
}

export class GetCampaignCompletionStatusReq extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCampaignCompletionStatusReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCampaignCompletionStatusReq): GetCampaignCompletionStatusReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCampaignCompletionStatusReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCampaignCompletionStatusReq;
  static deserializeBinaryFromReader(message: GetCampaignCompletionStatusReq, reader: jspb.BinaryReader): GetCampaignCompletionStatusReq;
}

export namespace GetCampaignCompletionStatusReq {
  export type AsObject = {
    huntGroupSid: number,
  }
}

export class GetCampaignCompletionStatusRes extends jspb.Message {
  getBroadcastsExist(): boolean;
  setBroadcastsExist(value: boolean): void;

  getPercentComplete(): number;
  setPercentComplete(value: number): void;

  getCompletionStatusMap(): jspb.Map<number, GetCampaignCompletionStatusRes.TaskGroupCompletionStatus>;
  clearCompletionStatusMap(): void;
  getTotalTasks(): number;
  setTotalTasks(value: number): void;

  getTotalTasksCompleted(): number;
  setTotalTasksCompleted(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCampaignCompletionStatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetCampaignCompletionStatusRes): GetCampaignCompletionStatusRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCampaignCompletionStatusRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCampaignCompletionStatusRes;
  static deserializeBinaryFromReader(message: GetCampaignCompletionStatusRes, reader: jspb.BinaryReader): GetCampaignCompletionStatusRes;
}

export namespace GetCampaignCompletionStatusRes {
  export type AsObject = {
    broadcastsExist: boolean,
    percentComplete: number,
    completionStatusMap: Array<[number, GetCampaignCompletionStatusRes.TaskGroupCompletionStatus.AsObject]>,
    totalTasks: number,
    totalTasksCompleted: number,
  }

  export class TaskGroupCompletionStatus extends jspb.Message {
    getTaskGroupSid(): number;
    setTaskGroupSid(value: number): void;

    getName(): string;
    setName(value: string): void;

    getPercentComplete(): number;
    setPercentComplete(value: number): void;

    getTotalTasks(): number;
    setTotalTasks(value: number): void;

    getTotalTasksCompleted(): number;
    setTotalTasksCompleted(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskGroupCompletionStatus.AsObject;
    static toObject(includeInstance: boolean, msg: TaskGroupCompletionStatus): TaskGroupCompletionStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskGroupCompletionStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskGroupCompletionStatus;
    static deserializeBinaryFromReader(message: TaskGroupCompletionStatus, reader: jspb.BinaryReader): TaskGroupCompletionStatus;
  }

  export namespace TaskGroupCompletionStatus {
    export type AsObject = {
      taskGroupSid: number,
      name: string,
      percentComplete: number,
      totalTasks: number,
      totalTasksCompleted: number,
    }
  }
}

export class GetLostPeerInfoReq extends jspb.Message {
  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLostPeerInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetLostPeerInfoReq): GetLostPeerInfoReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLostPeerInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLostPeerInfoReq;
  static deserializeBinaryFromReader(message: GetLostPeerInfoReq, reader: jspb.BinaryReader): GetLostPeerInfoReq;
}

export namespace GetLostPeerInfoReq {
  export type AsObject = {
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
  }
}

export class GetLostPeerInfoRes extends jspb.Message {
  getFormerAgentSid(): number;
  setFormerAgentSid(value: number): void;

  getFormerAgentName(): string;
  setFormerAgentName(value: string): void;

  getFormerHuntGroupName(): string;
  setFormerHuntGroupName(value: string): void;

  clearHuntGroupsList(): void;
  getHuntGroupsList(): Array<string>;
  setHuntGroupsList(value: Array<string>): void;
  addHuntGroups(value: string, index?: number): string;

  clearAgentsList(): void;
  getAgentsList(): Array<string>;
  setAgentsList(value: Array<string>): void;
  addAgents(value: string, index?: number): string;

  clearAgentSkillsList(): void;
  getAgentSkillsList(): Array<string>;
  setAgentSkillsList(value: Array<string>): void;
  addAgentSkills(value: string, index?: number): string;

  clearPbxExtensionsList(): void;
  getPbxExtensionsList(): Array<string>;
  setPbxExtensionsList(value: Array<string>): void;
  addPbxExtensions(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLostPeerInfoRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetLostPeerInfoRes): GetLostPeerInfoRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLostPeerInfoRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLostPeerInfoRes;
  static deserializeBinaryFromReader(message: GetLostPeerInfoRes, reader: jspb.BinaryReader): GetLostPeerInfoRes;
}

export namespace GetLostPeerInfoRes {
  export type AsObject = {
    formerAgentSid: number,
    formerAgentName: string,
    formerHuntGroupName: string,
    huntGroupsList: Array<string>,
    agentsList: Array<string>,
    agentSkillsList: Array<string>,
    pbxExtensionsList: Array<string>,
  }
}

export class GetDispositionKeysReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDispositionKeysReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetDispositionKeysReq): GetDispositionKeysReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDispositionKeysReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDispositionKeysReq;
  static deserializeBinaryFromReader(message: GetDispositionKeysReq, reader: jspb.BinaryReader): GetDispositionKeysReq;
}

export namespace GetDispositionKeysReq {
  export type AsObject = {
  }
}

export class GetDispositionKeysRes extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): void;
  addValues(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDispositionKeysRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetDispositionKeysRes): GetDispositionKeysRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDispositionKeysRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDispositionKeysRes;
  static deserializeBinaryFromReader(message: GetDispositionKeysRes, reader: jspb.BinaryReader): GetDispositionKeysRes;
}

export namespace GetDispositionKeysRes {
  export type AsObject = {
    valuesList: Array<string>,
  }
}

export class GetScriptOrResponsesReq extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): MailMergeData | undefined;
  setData(value?: MailMergeData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScriptOrResponsesReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetScriptOrResponsesReq): GetScriptOrResponsesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScriptOrResponsesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScriptOrResponsesReq;
  static deserializeBinaryFromReader(message: GetScriptOrResponsesReq, reader: jspb.BinaryReader): GetScriptOrResponsesReq;
}

export namespace GetScriptOrResponsesReq {
  export type AsObject = {
    data?: MailMergeData.AsObject,
  }
}

export class GetScriptOrResponsesRes extends jspb.Message {
  hasScripts(): boolean;
  clearScripts(): void;
  getScripts(): HuntGroupScript | undefined;
  setScripts(value?: HuntGroupScript): void;

  clearResponsesList(): void;
  getResponsesList(): Array<HuntGroupResponse>;
  setResponsesList(value: Array<HuntGroupResponse>): void;
  addResponses(value?: HuntGroupResponse, index?: number): HuntGroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScriptOrResponsesRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetScriptOrResponsesRes): GetScriptOrResponsesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScriptOrResponsesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScriptOrResponsesRes;
  static deserializeBinaryFromReader(message: GetScriptOrResponsesRes, reader: jspb.BinaryReader): GetScriptOrResponsesRes;
}

export namespace GetScriptOrResponsesRes {
  export type AsObject = {
    scripts?: HuntGroupScript.AsObject,
    responsesList: Array<HuntGroupResponse.AsObject>,
  }
}

export class GetReadyAgentsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReadyAgentsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetReadyAgentsReq): GetReadyAgentsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReadyAgentsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReadyAgentsReq;
  static deserializeBinaryFromReader(message: GetReadyAgentsReq, reader: jspb.BinaryReader): GetReadyAgentsReq;
}

export namespace GetReadyAgentsReq {
  export type AsObject = {
  }
}

export class GetReadyAgentsRes extends jspb.Message {
  clearReadyAgentsList(): void;
  getReadyAgentsList(): Array<AgentsByAgentSidShort>;
  setReadyAgentsList(value: Array<AgentsByAgentSidShort>): void;
  addReadyAgents(value?: AgentsByAgentSidShort, index?: number): AgentsByAgentSidShort;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReadyAgentsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetReadyAgentsRes): GetReadyAgentsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReadyAgentsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReadyAgentsRes;
  static deserializeBinaryFromReader(message: GetReadyAgentsRes, reader: jspb.BinaryReader): GetReadyAgentsRes;
}

export namespace GetReadyAgentsRes {
  export type AsObject = {
    readyAgentsList: Array<AgentsByAgentSidShort.AsObject>,
  }
}

export class AgentsByAgentSidShort extends jspb.Message {
  getAgentSid(): number;
  setAgentSid(value: number): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentsByAgentSidShort.AsObject;
  static toObject(includeInstance: boolean, msg: AgentsByAgentSidShort): AgentsByAgentSidShort.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentsByAgentSidShort, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentsByAgentSidShort;
  static deserializeBinaryFromReader(message: AgentsByAgentSidShort, reader: jspb.BinaryReader): AgentsByAgentSidShort;
}

export namespace AgentsByAgentSidShort {
  export type AsObject = {
    agentSid: number,
    firstName: string,
    lastName: string,
  }
}

export class ListAgentQueueAndOnHoldCallDataReq extends jspb.Message {
  getAgentSessionSid(): number;
  setAgentSessionSid(value: number): void;

  clearAgentSkillsList(): void;
  getAgentSkillsList(): Array<string>;
  setAgentSkillsList(value: Array<string>): void;
  addAgentSkills(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentQueueAndOnHoldCallDataReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentQueueAndOnHoldCallDataReq): ListAgentQueueAndOnHoldCallDataReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentQueueAndOnHoldCallDataReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentQueueAndOnHoldCallDataReq;
  static deserializeBinaryFromReader(message: ListAgentQueueAndOnHoldCallDataReq, reader: jspb.BinaryReader): ListAgentQueueAndOnHoldCallDataReq;
}

export namespace ListAgentQueueAndOnHoldCallDataReq {
  export type AsObject = {
    agentSessionSid: number,
    agentSkillsList: Array<string>,
  }
}

export class ListAgentQueueAndOnHoldCallDataRes extends jspb.Message {
  clearAgentQueueCallsList(): void;
  getAgentQueueCallsList(): Array<ListAgentQueueAndOnHoldCallDataRes.CallData>;
  setAgentQueueCallsList(value: Array<ListAgentQueueAndOnHoldCallDataRes.CallData>): void;
  addAgentQueueCalls(value?: ListAgentQueueAndOnHoldCallDataRes.CallData, index?: number): ListAgentQueueAndOnHoldCallDataRes.CallData;

  clearOnHoldCallsList(): void;
  getOnHoldCallsList(): Array<ListAgentQueueAndOnHoldCallDataRes.CallData>;
  setOnHoldCallsList(value: Array<ListAgentQueueAndOnHoldCallDataRes.CallData>): void;
  addOnHoldCalls(value?: ListAgentQueueAndOnHoldCallDataRes.CallData, index?: number): ListAgentQueueAndOnHoldCallDataRes.CallData;

  clearHqmCallsList(): void;
  getHqmCallsList(): Array<ListAgentQueueAndOnHoldCallDataRes.CallData>;
  setHqmCallsList(value: Array<ListAgentQueueAndOnHoldCallDataRes.CallData>): void;
  addHqmCalls(value?: ListAgentQueueAndOnHoldCallDataRes.CallData, index?: number): ListAgentQueueAndOnHoldCallDataRes.CallData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentQueueAndOnHoldCallDataRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentQueueAndOnHoldCallDataRes): ListAgentQueueAndOnHoldCallDataRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentQueueAndOnHoldCallDataRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentQueueAndOnHoldCallDataRes;
  static deserializeBinaryFromReader(message: ListAgentQueueAndOnHoldCallDataRes, reader: jspb.BinaryReader): ListAgentQueueAndOnHoldCallDataRes;
}

export namespace ListAgentQueueAndOnHoldCallDataRes {
  export type AsObject = {
    agentQueueCallsList: Array<ListAgentQueueAndOnHoldCallDataRes.CallData.AsObject>,
    onHoldCallsList: Array<ListAgentQueueAndOnHoldCallDataRes.CallData.AsObject>,
    hqmCallsList: Array<ListAgentQueueAndOnHoldCallDataRes.CallData.AsObject>,
  }

  export class CallData extends jspb.Message {
    getCallSid(): number;
    setCallSid(value: number): void;

    getPhoneNumber(): string;
    setPhoneNumber(value: string): void;

    getCallerId(): string;
    setCallerId(value: string): void;

    getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
    setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

    hasStartDate(): boolean;
    clearStartDate(): void;
    getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasHoldDate(): boolean;
    clearHoldDate(): void;
    getHoldDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setHoldDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

    clearSkillsList(): void;
    getSkillsList(): Array<string>;
    setSkillsList(value: Array<string>): void;
    addSkills(value: string, index?: number): string;

    getAgentSpecific(): boolean;
    setAgentSpecific(value: boolean): void;

    getQueuedNotificationType(): api_commons_acd_pb.QueuedNotificationTypeMap[keyof api_commons_acd_pb.QueuedNotificationTypeMap];
    setQueuedNotificationType(value: api_commons_acd_pb.QueuedNotificationTypeMap[keyof api_commons_acd_pb.QueuedNotificationTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallData.AsObject;
    static toObject(includeInstance: boolean, msg: CallData): CallData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallData;
    static deserializeBinaryFromReader(message: CallData, reader: jspb.BinaryReader): CallData;
  }

  export namespace CallData {
    export type AsObject = {
      callSid: number,
      phoneNumber: string,
      callerId: string,
      callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
      startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      holdDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      skillsList: Array<string>,
      agentSpecific: boolean,
      queuedNotificationType: api_commons_acd_pb.QueuedNotificationTypeMap[keyof api_commons_acd_pb.QueuedNotificationTypeMap],
    }
  }
}

export class AgentCallResponseDetails extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getOrder(): number;
  setOrder(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentCallResponseDetails.AsObject;
  static toObject(includeInstance: boolean, msg: AgentCallResponseDetails): AgentCallResponseDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentCallResponseDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentCallResponseDetails;
  static deserializeBinaryFromReader(message: AgentCallResponseDetails, reader: jspb.BinaryReader): AgentCallResponseDetails;
}

export namespace AgentCallResponseDetails {
  export type AsObject = {
    key: string,
    value: string,
    order: number,
  }
}

export class SaveAgentCallResponsesReq extends jspb.Message {
  getCallSid(): number;
  setCallSid(value: number): void;

  getAgentSessionSid(): number;
  setAgentSessionSid(value: number): void;

  clearAgentCallResponseDetailsList(): void;
  getAgentCallResponseDetailsList(): Array<AgentCallResponseDetails>;
  setAgentCallResponseDetailsList(value: Array<AgentCallResponseDetails>): void;
  addAgentCallResponseDetails(value?: AgentCallResponseDetails, index?: number): AgentCallResponseDetails;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  clearComplianceMetadataList(): void;
  getComplianceMetadataList(): Array<api_commons_call_pb.SimpleKeyValue>;
  setComplianceMetadataList(value: Array<api_commons_call_pb.SimpleKeyValue>): void;
  addComplianceMetadata(value?: api_commons_call_pb.SimpleKeyValue, index?: number): api_commons_call_pb.SimpleKeyValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveAgentCallResponsesReq.AsObject;
  static toObject(includeInstance: boolean, msg: SaveAgentCallResponsesReq): SaveAgentCallResponsesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveAgentCallResponsesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveAgentCallResponsesReq;
  static deserializeBinaryFromReader(message: SaveAgentCallResponsesReq, reader: jspb.BinaryReader): SaveAgentCallResponsesReq;
}

export namespace SaveAgentCallResponsesReq {
  export type AsObject = {
    callSid: number,
    agentSessionSid: number,
    agentCallResponseDetailsList: Array<AgentCallResponseDetails.AsObject>,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    complianceMetadataList: Array<api_commons_call_pb.SimpleKeyValue.AsObject>,
  }
}

export class SaveAgentCallResponsesRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveAgentCallResponsesRes.AsObject;
  static toObject(includeInstance: boolean, msg: SaveAgentCallResponsesRes): SaveAgentCallResponsesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveAgentCallResponsesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveAgentCallResponsesRes;
  static deserializeBinaryFromReader(message: SaveAgentCallResponsesRes, reader: jspb.BinaryReader): SaveAgentCallResponsesRes;
}

export namespace SaveAgentCallResponsesRes {
  export type AsObject = {
  }
}

export class AgentCallLog extends jspb.Message {
  getAgentCallLogSid(): number;
  setAgentCallLogSid(value: number): void;

  hasCallSid(): boolean;
  clearCallSid(): void;
  getCallSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCallSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  hasActionDate(): boolean;
  clearActionDate(): void;
  getActionDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setActionDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasActionKey(): boolean;
  clearActionKey(): void;
  getActionKey(): google_protobuf_wrappers_pb.StringValue | undefined;
  setActionKey(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasActionValue(): boolean;
  clearActionValue(): void;
  getActionValue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setActionValue(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentCallLog.AsObject;
  static toObject(includeInstance: boolean, msg: AgentCallLog): AgentCallLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentCallLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentCallLog;
  static deserializeBinaryFromReader(message: AgentCallLog, reader: jspb.BinaryReader): AgentCallLog;
}

export namespace AgentCallLog {
  export type AsObject = {
    agentCallLogSid: number,
    callSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    actionDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    actionKey?: google_protobuf_wrappers_pb.StringValue.AsObject,
    actionValue?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class AgentSkill extends jspb.Message {
  getAgentSkillSid(): number;
  setAgentSkillSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentSkill.AsObject;
  static toObject(includeInstance: boolean, msg: AgentSkill): AgentSkill.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentSkill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentSkill;
  static deserializeBinaryFromReader(message: AgentSkill, reader: jspb.BinaryReader): AgentSkill;
}

export namespace AgentSkill {
  export type AsObject = {
    agentSkillSid: number,
    name: string,
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ListAgentTransferOptionsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentTransferOptionsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentTransferOptionsReq): ListAgentTransferOptionsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentTransferOptionsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentTransferOptionsReq;
  static deserializeBinaryFromReader(message: ListAgentTransferOptionsReq, reader: jspb.BinaryReader): ListAgentTransferOptionsReq;
}

export namespace ListAgentTransferOptionsReq {
  export type AsObject = {
  }
}

export class ListAgentTransferOptionsRes extends jspb.Message {
  clearAgentInfoList(): void;
  getAgentInfoList(): Array<Agent>;
  setAgentInfoList(value: Array<Agent>): void;
  addAgentInfo(value?: Agent, index?: number): Agent;

  clearHuntGroupList(): void;
  getHuntGroupList(): Array<HuntGroup>;
  setHuntGroupList(value: Array<HuntGroup>): void;
  addHuntGroup(value?: HuntGroup, index?: number): HuntGroup;

  clearPbxExtensionsList(): void;
  getPbxExtensionsList(): Array<PBXExtension>;
  setPbxExtensionsList(value: Array<PBXExtension>): void;
  addPbxExtensions(value?: PBXExtension, index?: number): PBXExtension;

  clearAgentSkillsList(): void;
  getAgentSkillsList(): Array<AgentSkill>;
  setAgentSkillsList(value: Array<AgentSkill>): void;
  addAgentSkills(value?: AgentSkill, index?: number): AgentSkill;

  clearAgentProfileList(): void;
  getAgentProfileList(): Array<AgentsByAgentSidShort>;
  setAgentProfileList(value: Array<AgentsByAgentSidShort>): void;
  addAgentProfile(value?: AgentsByAgentSidShort, index?: number): AgentsByAgentSidShort;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentTransferOptionsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentTransferOptionsRes): ListAgentTransferOptionsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentTransferOptionsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentTransferOptionsRes;
  static deserializeBinaryFromReader(message: ListAgentTransferOptionsRes, reader: jspb.BinaryReader): ListAgentTransferOptionsRes;
}

export namespace ListAgentTransferOptionsRes {
  export type AsObject = {
    agentInfoList: Array<Agent.AsObject>,
    huntGroupList: Array<HuntGroup.AsObject>,
    pbxExtensionsList: Array<PBXExtension.AsObject>,
    agentSkillsList: Array<AgentSkill.AsObject>,
    agentProfileList: Array<AgentsByAgentSidShort.AsObject>,
  }
}

export class GetIntercomPeerInfoReq extends jspb.Message {
  getAgentSessionSid(): number;
  setAgentSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIntercomPeerInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetIntercomPeerInfoReq): GetIntercomPeerInfoReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIntercomPeerInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIntercomPeerInfoReq;
  static deserializeBinaryFromReader(message: GetIntercomPeerInfoReq, reader: jspb.BinaryReader): GetIntercomPeerInfoReq;
}

export namespace GetIntercomPeerInfoReq {
  export type AsObject = {
    agentSessionSid: number,
  }
}

export class GetIntercomPeerInfoRes extends jspb.Message {
  getPeerSid(): number;
  setPeerSid(value: number): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIntercomPeerInfoRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetIntercomPeerInfoRes): GetIntercomPeerInfoRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIntercomPeerInfoRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIntercomPeerInfoRes;
  static deserializeBinaryFromReader(message: GetIntercomPeerInfoRes, reader: jspb.BinaryReader): GetIntercomPeerInfoRes;
}

export namespace GetIntercomPeerInfoRes {
  export type AsObject = {
    peerSid: number,
    firstName: string,
    lastName: string,
  }
}

export class ListOrgResponseEvaluatorsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrgResponseEvaluatorsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrgResponseEvaluatorsReq): ListOrgResponseEvaluatorsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrgResponseEvaluatorsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrgResponseEvaluatorsReq;
  static deserializeBinaryFromReader(message: ListOrgResponseEvaluatorsReq, reader: jspb.BinaryReader): ListOrgResponseEvaluatorsReq;
}

export namespace ListOrgResponseEvaluatorsReq {
  export type AsObject = {
  }
}

export class ListOrgResponseEvaluatorsRes extends jspb.Message {
  clearEvaluatorsList(): void;
  getEvaluatorsList(): Array<ResponseEvaluator>;
  setEvaluatorsList(value: Array<ResponseEvaluator>): void;
  addEvaluators(value?: ResponseEvaluator, index?: number): ResponseEvaluator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrgResponseEvaluatorsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrgResponseEvaluatorsRes): ListOrgResponseEvaluatorsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrgResponseEvaluatorsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrgResponseEvaluatorsRes;
  static deserializeBinaryFromReader(message: ListOrgResponseEvaluatorsRes, reader: jspb.BinaryReader): ListOrgResponseEvaluatorsRes;
}

export namespace ListOrgResponseEvaluatorsRes {
  export type AsObject = {
    evaluatorsList: Array<ResponseEvaluator.AsObject>,
  }
}

export class ResponseEvaluator extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getRegularExpression(): string;
  setRegularExpression(value: string): void;

  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseEvaluator.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseEvaluator): ResponseEvaluator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseEvaluator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseEvaluator;
  static deserializeBinaryFromReader(message: ResponseEvaluator, reader: jspb.BinaryReader): ResponseEvaluator;
}

export namespace ResponseEvaluator {
  export type AsObject = {
    name: string,
    description: string,
    regularExpression: string,
    xmlClientPropertySid: number,
  }
}

export class GetQueueConfigurationOptionsArrayReq extends jspb.Message {
  getLocalizedAccountDefaultString(): string;
  setLocalizedAccountDefaultString(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQueueConfigurationOptionsArrayReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetQueueConfigurationOptionsArrayReq): GetQueueConfigurationOptionsArrayReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetQueueConfigurationOptionsArrayReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQueueConfigurationOptionsArrayReq;
  static deserializeBinaryFromReader(message: GetQueueConfigurationOptionsArrayReq, reader: jspb.BinaryReader): GetQueueConfigurationOptionsArrayReq;
}

export namespace GetQueueConfigurationOptionsArrayReq {
  export type AsObject = {
    localizedAccountDefaultString: string,
  }
}

export class GetQueueConfigurationOptionsArrayRes extends jspb.Message {
  clearFilenamesList(): void;
  getFilenamesList(): Array<string>;
  setFilenamesList(value: Array<string>): void;
  addFilenames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQueueConfigurationOptionsArrayRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetQueueConfigurationOptionsArrayRes): GetQueueConfigurationOptionsArrayRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetQueueConfigurationOptionsArrayRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQueueConfigurationOptionsArrayRes;
  static deserializeBinaryFromReader(message: GetQueueConfigurationOptionsArrayRes, reader: jspb.BinaryReader): GetQueueConfigurationOptionsArrayRes;
}

export namespace GetQueueConfigurationOptionsArrayRes {
  export type AsObject = {
    filenamesList: Array<string>,
  }
}

export class AgentCallActivityDetails extends jspb.Message {
  getAgentSid(): number;
  setAgentSid(value: number): void;

  hasAgentName(): boolean;
  clearAgentName(): void;
  getAgentName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAgentName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAgentSessionSid(): boolean;
  clearAgentSessionSid(): void;
  getAgentSessionSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAgentSessionSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasHuntGroupSid(): boolean;
  clearHuntGroupSid(): void;
  getHuntGroupSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setHuntGroupSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasHuntGroupName(): boolean;
  clearHuntGroupName(): void;
  getHuntGroupName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHuntGroupName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAgentCallCost(): boolean;
  clearAgentCallCost(): void;
  getAgentCallCost(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAgentCallCost(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasAgentWaitDuration(): boolean;
  clearAgentWaitDuration(): void;
  getAgentWaitDuration(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAgentWaitDuration(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasCallWaitDuration(): boolean;
  clearCallWaitDuration(): void;
  getCallWaitDuration(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCallWaitDuration(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasHoldDuration(): boolean;
  clearHoldDuration(): void;
  getHoldDuration(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setHoldDuration(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasManualDuration(): boolean;
  clearManualDuration(): void;
  getManualDuration(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setManualDuration(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasPauseDuration(): boolean;
  clearPauseDuration(): void;
  getPauseDuration(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPauseDuration(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasPreviewDuration(): boolean;
  clearPreviewDuration(): void;
  getPreviewDuration(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPreviewDuration(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasSuspendedDuration(): boolean;
  clearSuspendedDuration(): void;
  getSuspendedDuration(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setSuspendedDuration(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTalkDuration(): boolean;
  clearTalkDuration(): void;
  getTalkDuration(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTalkDuration(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTransferDuration(): boolean;
  clearTransferDuration(): void;
  getTransferDuration(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTransferDuration(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasWrapUpDuration(): boolean;
  clearWrapUpDuration(): void;
  getWrapUpDuration(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setWrapUpDuration(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasAgentCallSid(): boolean;
  clearAgentCallSid(): void;
  getAgentCallSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAgentCallSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getHuntGroupType(): api_commons_acd_pb.HuntGroupType.EnumMap[keyof api_commons_acd_pb.HuntGroupType.EnumMap];
  setHuntGroupType(value: api_commons_acd_pb.HuntGroupType.EnumMap[keyof api_commons_acd_pb.HuntGroupType.EnumMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentCallActivityDetails.AsObject;
  static toObject(includeInstance: boolean, msg: AgentCallActivityDetails): AgentCallActivityDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentCallActivityDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentCallActivityDetails;
  static deserializeBinaryFromReader(message: AgentCallActivityDetails, reader: jspb.BinaryReader): AgentCallActivityDetails;
}

export namespace AgentCallActivityDetails {
  export type AsObject = {
    agentSid: number,
    agentName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    agentSessionSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    huntGroupSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    huntGroupName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    agentCallCost?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    agentWaitDuration?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    callWaitDuration?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    holdDuration?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    manualDuration?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    pauseDuration?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    previewDuration?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    suspendedDuration?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    talkDuration?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    transferDuration?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    wrapUpDuration?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    agentCallSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    huntGroupType: api_commons_acd_pb.HuntGroupType.EnumMap[keyof api_commons_acd_pb.HuntGroupType.EnumMap],
  }
}

export class GetConditionalDNCLRulesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConditionalDNCLRulesReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetConditionalDNCLRulesReq): GetConditionalDNCLRulesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConditionalDNCLRulesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConditionalDNCLRulesReq;
  static deserializeBinaryFromReader(message: GetConditionalDNCLRulesReq, reader: jspb.BinaryReader): GetConditionalDNCLRulesReq;
}

export namespace GetConditionalDNCLRulesReq {
  export type AsObject = {
  }
}

export class GetConditionalDNCLRulesRes extends jspb.Message {
  clearDispositionRulesList(): void;
  getDispositionRulesList(): Array<AgentDispositionConditionalDncl.DispositionRulesTable>;
  setDispositionRulesList(value: Array<AgentDispositionConditionalDncl.DispositionRulesTable>): void;
  addDispositionRules(value?: AgentDispositionConditionalDncl.DispositionRulesTable, index?: number): AgentDispositionConditionalDncl.DispositionRulesTable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConditionalDNCLRulesRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetConditionalDNCLRulesRes): GetConditionalDNCLRulesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConditionalDNCLRulesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConditionalDNCLRulesRes;
  static deserializeBinaryFromReader(message: GetConditionalDNCLRulesRes, reader: jspb.BinaryReader): GetConditionalDNCLRulesRes;
}

export namespace GetConditionalDNCLRulesRes {
  export type AsObject = {
    dispositionRulesList: Array<AgentDispositionConditionalDncl.DispositionRulesTable.AsObject>,
  }
}

export class ManualDialStartReq extends jspb.Message {
  hasSimpleCallData(): boolean;
  clearSimpleCallData(): void;
  getSimpleCallData(): api_commons_call_pb.SimpleCallData | undefined;
  setSimpleCallData(value?: api_commons_call_pb.SimpleCallData): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getAgentSessionSid(): number;
  setAgentSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualDialStartReq.AsObject;
  static toObject(includeInstance: boolean, msg: ManualDialStartReq): ManualDialStartReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManualDialStartReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualDialStartReq;
  static deserializeBinaryFromReader(message: ManualDialStartReq, reader: jspb.BinaryReader): ManualDialStartReq;
}

export namespace ManualDialStartReq {
  export type AsObject = {
    simpleCallData?: api_commons_call_pb.SimpleCallData.AsObject,
    huntGroupSid: number,
    agentSessionSid: number,
  }
}

export class ManualDialStartRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualDialStartRes.AsObject;
  static toObject(includeInstance: boolean, msg: ManualDialStartRes): ManualDialStartRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManualDialStartRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualDialStartRes;
  static deserializeBinaryFromReader(message: ManualDialStartRes, reader: jspb.BinaryReader): ManualDialStartRes;
}

export namespace ManualDialStartRes {
  export type AsObject = {
  }
}

export class ListExtendedCallHistoryReq extends jspb.Message {
  getSearchType(): api_commons_p3api_pb.CallHistorySearchType.EnumMap[keyof api_commons_p3api_pb.CallHistorySearchType.EnumMap];
  setSearchType(value: api_commons_p3api_pb.CallHistorySearchType.EnumMap[keyof api_commons_p3api_pb.CallHistorySearchType.EnumMap]): void;

  clearCallTypesList(): void;
  getCallTypesList(): Array<api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]>;
  setCallTypesList(value: Array<api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]>): void;
  addCallTypes(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap], index?: number): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];

  getCustomerNumber(): string;
  setCustomerNumber(value: string): void;

  getSearchScope(): api_commons_p3api_pb.CallHistorySearchScope.EnumMap[keyof api_commons_p3api_pb.CallHistorySearchScope.EnumMap];
  setSearchScope(value: api_commons_p3api_pb.CallHistorySearchScope.EnumMap[keyof api_commons_p3api_pb.CallHistorySearchScope.EnumMap]): void;

  getCallSid(): number;
  setCallSid(value: number): void;

  getCallerId(): string;
  setCallerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExtendedCallHistoryReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListExtendedCallHistoryReq): ListExtendedCallHistoryReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListExtendedCallHistoryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExtendedCallHistoryReq;
  static deserializeBinaryFromReader(message: ListExtendedCallHistoryReq, reader: jspb.BinaryReader): ListExtendedCallHistoryReq;
}

export namespace ListExtendedCallHistoryReq {
  export type AsObject = {
    searchType: api_commons_p3api_pb.CallHistorySearchType.EnumMap[keyof api_commons_p3api_pb.CallHistorySearchType.EnumMap],
    callTypesList: Array<api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]>,
    customerNumber: string,
    searchScope: api_commons_p3api_pb.CallHistorySearchScope.EnumMap[keyof api_commons_p3api_pb.CallHistorySearchScope.EnumMap],
    callSid: number,
    callerId: string,
  }
}

export class ListExtendedCallHistoryRes extends jspb.Message {
  getGroupSid(): number;
  setGroupSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getCallSid(): number;
  setCallSid(value: number): void;

  getCustomerNumber(): string;
  setCustomerNumber(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getDate(): string;
  setDate(value: string): void;

  getResult(): number;
  setResult(value: number): void;

  getLength(): number;
  setLength(value: number): void;

  hasCost(): boolean;
  clearCost(): void;
  getCost(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setCost(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasKeys(): boolean;
  clearKeys(): void;
  getKeys(): google_protobuf_wrappers_pb.StringValue | undefined;
  setKeys(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCallDetails(): boolean;
  clearCallDetails(): void;
  getCallDetails(): GetCallDetailsRes | undefined;
  setCallDetails(value?: GetCallDetailsRes): void;

  getLinkbackLength(): number;
  setLinkbackLength(value: number): void;

  getIsCallRecorded(): boolean;
  setIsCallRecorded(value: boolean): void;

  getRecordingFilename(): string;
  setRecordingFilename(value: string): void;

  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCountrySid(): number;
  setCountrySid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExtendedCallHistoryRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListExtendedCallHistoryRes): ListExtendedCallHistoryRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListExtendedCallHistoryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExtendedCallHistoryRes;
  static deserializeBinaryFromReader(message: ListExtendedCallHistoryRes, reader: jspb.BinaryReader): ListExtendedCallHistoryRes;
}

export namespace ListExtendedCallHistoryRes {
  export type AsObject = {
    groupSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    callSid: number,
    customerNumber: string,
    phone: string,
    date: string,
    result: number,
    length: number,
    cost?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    keys?: google_protobuf_wrappers_pb.StringValue.AsObject,
    callDetails?: GetCallDetailsRes.AsObject,
    linkbackLength: number,
    isCallRecorded: boolean,
    recordingFilename: string,
    startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    countrySid: number,
  }
}

export class ListWhiteListPhoneBooksReq extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getIncludeNullPhoneNumberTypes(): boolean;
  setIncludeNullPhoneNumberTypes(value: boolean): void;

  clearOrderBysList(): void;
  getOrderBysList(): Array<api_commons_p3api_pb.ListPhoneBookOrderBy.EnumMap[keyof api_commons_p3api_pb.ListPhoneBookOrderBy.EnumMap]>;
  setOrderBysList(value: Array<api_commons_p3api_pb.ListPhoneBookOrderBy.EnumMap[keyof api_commons_p3api_pb.ListPhoneBookOrderBy.EnumMap]>): void;
  addOrderBys(value: api_commons_p3api_pb.ListPhoneBookOrderBy.EnumMap[keyof api_commons_p3api_pb.ListPhoneBookOrderBy.EnumMap], index?: number): api_commons_p3api_pb.ListPhoneBookOrderBy.EnumMap[keyof api_commons_p3api_pb.ListPhoneBookOrderBy.EnumMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWhiteListPhoneBooksReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListWhiteListPhoneBooksReq): ListWhiteListPhoneBooksReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWhiteListPhoneBooksReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWhiteListPhoneBooksReq;
  static deserializeBinaryFromReader(message: ListWhiteListPhoneBooksReq, reader: jspb.BinaryReader): ListWhiteListPhoneBooksReq;
}

export namespace ListWhiteListPhoneBooksReq {
  export type AsObject = {
    huntGroupSid: number,
    includeNullPhoneNumberTypes: boolean,
    orderBysList: Array<api_commons_p3api_pb.ListPhoneBookOrderBy.EnumMap[keyof api_commons_p3api_pb.ListPhoneBookOrderBy.EnumMap]>,
  }
}

export class ListWhiteListPhoneBooksRes extends jspb.Message {
  clearWhiteListPhoneBooksList(): void;
  getWhiteListPhoneBooksList(): Array<PhoneBook>;
  setWhiteListPhoneBooksList(value: Array<PhoneBook>): void;
  addWhiteListPhoneBooks(value?: PhoneBook, index?: number): PhoneBook;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWhiteListPhoneBooksRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListWhiteListPhoneBooksRes): ListWhiteListPhoneBooksRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWhiteListPhoneBooksRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWhiteListPhoneBooksRes;
  static deserializeBinaryFromReader(message: ListWhiteListPhoneBooksRes, reader: jspb.BinaryReader): ListWhiteListPhoneBooksRes;
}

export namespace ListWhiteListPhoneBooksRes {
  export type AsObject = {
    whiteListPhoneBooksList: Array<PhoneBook.AsObject>,
  }
}

export class UpdateAgentCallResponseValueReq extends jspb.Message {
  getResponseId(): number;
  setResponseId(value: number): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentCallResponseValueReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentCallResponseValueReq): UpdateAgentCallResponseValueReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentCallResponseValueReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentCallResponseValueReq;
  static deserializeBinaryFromReader(message: UpdateAgentCallResponseValueReq, reader: jspb.BinaryReader): UpdateAgentCallResponseValueReq;
}

export namespace UpdateAgentCallResponseValueReq {
  export type AsObject = {
    responseId: number,
    value: string,
  }
}

export class UpdateAgentCallResponseValueRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentCallResponseValueRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentCallResponseValueRes): UpdateAgentCallResponseValueRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentCallResponseValueRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentCallResponseValueRes;
  static deserializeBinaryFromReader(message: UpdateAgentCallResponseValueRes, reader: jspb.BinaryReader): UpdateAgentCallResponseValueRes;
}

export namespace UpdateAgentCallResponseValueRes {
  export type AsObject = {
  }
}

export class PlacePreviewDialCallReq extends jspb.Message {
  hasCall(): boolean;
  clearCall(): void;
  getCall(): api_commons_call_pb.SimpleCallData | undefined;
  setCall(value?: api_commons_call_pb.SimpleCallData): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getAgentSessionSid(): number;
  setAgentSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlacePreviewDialCallReq.AsObject;
  static toObject(includeInstance: boolean, msg: PlacePreviewDialCallReq): PlacePreviewDialCallReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlacePreviewDialCallReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlacePreviewDialCallReq;
  static deserializeBinaryFromReader(message: PlacePreviewDialCallReq, reader: jspb.BinaryReader): PlacePreviewDialCallReq;
}

export namespace PlacePreviewDialCallReq {
  export type AsObject = {
    call?: api_commons_call_pb.SimpleCallData.AsObject,
    huntGroupSid: number,
    agentSessionSid: number,
  }
}

export class PlacePreviewDialCallRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlacePreviewDialCallRes.AsObject;
  static toObject(includeInstance: boolean, msg: PlacePreviewDialCallRes): PlacePreviewDialCallRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlacePreviewDialCallRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlacePreviewDialCallRes;
  static deserializeBinaryFromReader(message: PlacePreviewDialCallRes, reader: jspb.BinaryReader): PlacePreviewDialCallRes;
}

export namespace PlacePreviewDialCallRes {
  export type AsObject = {
  }
}

export class CancelPreviewDialCallReq extends jspb.Message {
  hasCall(): boolean;
  clearCall(): void;
  getCall(): api_commons_call_pb.SimpleCallData | undefined;
  setCall(value?: api_commons_call_pb.SimpleCallData): void;

  getAgentSessionSid(): number;
  setAgentSessionSid(value: number): void;

  getReportScrubOverride(): boolean;
  setReportScrubOverride(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelPreviewDialCallReq.AsObject;
  static toObject(includeInstance: boolean, msg: CancelPreviewDialCallReq): CancelPreviewDialCallReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelPreviewDialCallReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelPreviewDialCallReq;
  static deserializeBinaryFromReader(message: CancelPreviewDialCallReq, reader: jspb.BinaryReader): CancelPreviewDialCallReq;
}

export namespace CancelPreviewDialCallReq {
  export type AsObject = {
    call?: api_commons_call_pb.SimpleCallData.AsObject,
    agentSessionSid: number,
    reportScrubOverride: boolean,
  }
}

export class CancelPreviewDialCallRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelPreviewDialCallRes.AsObject;
  static toObject(includeInstance: boolean, msg: CancelPreviewDialCallRes): CancelPreviewDialCallRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelPreviewDialCallRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelPreviewDialCallRes;
  static deserializeBinaryFromReader(message: CancelPreviewDialCallRes, reader: jspb.BinaryReader): CancelPreviewDialCallRes;
}

export namespace CancelPreviewDialCallRes {
  export type AsObject = {
  }
}

export class DownloadRecordingRes extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getFilename(): string;
  setFilename(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadRecordingRes.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadRecordingRes): DownloadRecordingRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadRecordingRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadRecordingRes;
  static deserializeBinaryFromReader(message: DownloadRecordingRes, reader: jspb.BinaryReader): DownloadRecordingRes;
}

export namespace DownloadRecordingRes {
  export type AsObject = {
    url: string,
    filename: string,
  }
}

export class DownloadCallRecordingReq extends jspb.Message {
  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadCallRecordingReq.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadCallRecordingReq): DownloadCallRecordingReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadCallRecordingReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadCallRecordingReq;
  static deserializeBinaryFromReader(message: DownloadCallRecordingReq, reader: jspb.BinaryReader): DownloadCallRecordingReq;
}

export namespace DownloadCallRecordingReq {
  export type AsObject = {
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
  }
}

export class DownloadCallRecordingsReq extends jspb.Message {
  clearCallParamsList(): void;
  getCallParamsList(): Array<DownloadCallRecordingsReq.CallParams>;
  setCallParamsList(value: Array<DownloadCallRecordingsReq.CallParams>): void;
  addCallParams(value?: DownloadCallRecordingsReq.CallParams, index?: number): DownloadCallRecordingsReq.CallParams;

  getHtmlFileName(): string;
  setHtmlFileName(value: string): void;

  getHtmlFileContent(): string;
  setHtmlFileContent(value: string): void;

  hasGroupSid(): boolean;
  clearGroupSid(): void;
  getGroupSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setGroupSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadCallRecordingsReq.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadCallRecordingsReq): DownloadCallRecordingsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadCallRecordingsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadCallRecordingsReq;
  static deserializeBinaryFromReader(message: DownloadCallRecordingsReq, reader: jspb.BinaryReader): DownloadCallRecordingsReq;
}

export namespace DownloadCallRecordingsReq {
  export type AsObject = {
    callParamsList: Array<DownloadCallRecordingsReq.CallParams.AsObject>,
    htmlFileName: string,
    htmlFileContent: string,
    groupSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class CallParams extends jspb.Message {
    getCallSid(): number;
    setCallSid(value: number): void;

    getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
    setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallParams.AsObject;
    static toObject(includeInstance: boolean, msg: CallParams): CallParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallParams;
    static deserializeBinaryFromReader(message: CallParams, reader: jspb.BinaryReader): CallParams;
  }

  export namespace CallParams {
    export type AsObject = {
      callSid: number,
      callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    }
  }
}

export class AgentDispositionConditionalDncl extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getCountrySid(): number;
  setCountrySid(value: number): void;

  clearDispositionRulesTableList(): void;
  getDispositionRulesTableList(): Array<AgentDispositionConditionalDncl.DispositionRulesTable>;
  setDispositionRulesTableList(value: Array<AgentDispositionConditionalDncl.DispositionRulesTable>): void;
  addDispositionRulesTable(value?: AgentDispositionConditionalDncl.DispositionRulesTable, index?: number): AgentDispositionConditionalDncl.DispositionRulesTable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentDispositionConditionalDncl.AsObject;
  static toObject(includeInstance: boolean, msg: AgentDispositionConditionalDncl): AgentDispositionConditionalDncl.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentDispositionConditionalDncl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentDispositionConditionalDncl;
  static deserializeBinaryFromReader(message: AgentDispositionConditionalDncl, reader: jspb.BinaryReader): AgentDispositionConditionalDncl;
}

export namespace AgentDispositionConditionalDncl {
  export type AsObject = {
    name: string,
    description: string,
    countrySid: number,
    dispositionRulesTableList: Array<AgentDispositionConditionalDncl.DispositionRulesTable.AsObject>,
  }

  export class DispositionRulesTable extends jspb.Message {
    getDispositionKey(): string;
    setDispositionKey(value: string): void;

    clearDispositionExpirationTableList(): void;
    getDispositionExpirationTableList(): Array<AgentDispositionConditionalDncl.DispositionExpirationTable>;
    setDispositionExpirationTableList(value: Array<AgentDispositionConditionalDncl.DispositionExpirationTable>): void;
    addDispositionExpirationTable(value?: AgentDispositionConditionalDncl.DispositionExpirationTable, index?: number): AgentDispositionConditionalDncl.DispositionExpirationTable;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DispositionRulesTable.AsObject;
    static toObject(includeInstance: boolean, msg: DispositionRulesTable): DispositionRulesTable.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DispositionRulesTable, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DispositionRulesTable;
    static deserializeBinaryFromReader(message: DispositionRulesTable, reader: jspb.BinaryReader): DispositionRulesTable;
  }

  export namespace DispositionRulesTable {
    export type AsObject = {
      dispositionKey: string,
      dispositionExpirationTableList: Array<AgentDispositionConditionalDncl.DispositionExpirationTable.AsObject>,
    }
  }

  export class DispositionExpirationTable extends jspb.Message {
    getDispositionValue(): string;
    setDispositionValue(value: string): void;

    getInteger(): number;
    setInteger(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DispositionExpirationTable.AsObject;
    static toObject(includeInstance: boolean, msg: DispositionExpirationTable): DispositionExpirationTable.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DispositionExpirationTable, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DispositionExpirationTable;
    static deserializeBinaryFromReader(message: DispositionExpirationTable, reader: jspb.BinaryReader): DispositionExpirationTable;
  }

  export namespace DispositionExpirationTable {
    export type AsObject = {
      dispositionValue: string,
      integer: number,
    }
  }
}

export class UpdateTaskStatusReq extends jspb.Message {
  getTaskSid(): number;
  setTaskSid(value: number): void;

  getStatus(): api_commons_task_pb.TaskStatusMap[keyof api_commons_task_pb.TaskStatusMap];
  setStatus(value: api_commons_task_pb.TaskStatusMap[keyof api_commons_task_pb.TaskStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTaskStatusReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTaskStatusReq): UpdateTaskStatusReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTaskStatusReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTaskStatusReq;
  static deserializeBinaryFromReader(message: UpdateTaskStatusReq, reader: jspb.BinaryReader): UpdateTaskStatusReq;
}

export namespace UpdateTaskStatusReq {
  export type AsObject = {
    taskSid: number,
    status: api_commons_task_pb.TaskStatusMap[keyof api_commons_task_pb.TaskStatusMap],
  }
}

export class Nil extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Nil.AsObject;
  static toObject(includeInstance: boolean, msg: Nil): Nil.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Nil, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Nil;
  static deserializeBinaryFromReader(message: Nil, reader: jspb.BinaryReader): Nil;
}

export namespace Nil {
  export type AsObject = {
  }
}

export class ListCallbackRoutingAgentsReq extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCallbackRoutingAgentsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListCallbackRoutingAgentsReq): ListCallbackRoutingAgentsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCallbackRoutingAgentsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCallbackRoutingAgentsReq;
  static deserializeBinaryFromReader(message: ListCallbackRoutingAgentsReq, reader: jspb.BinaryReader): ListCallbackRoutingAgentsReq;
}

export namespace ListCallbackRoutingAgentsReq {
  export type AsObject = {
    huntGroupSid: number,
  }
}

export class ListCallbackRoutingAgentsRes extends jspb.Message {
  clearAgentShortList(): void;
  getAgentShortList(): Array<AgentsByAgentSidShort>;
  setAgentShortList(value: Array<AgentsByAgentSidShort>): void;
  addAgentShort(value?: AgentsByAgentSidShort, index?: number): AgentsByAgentSidShort;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCallbackRoutingAgentsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListCallbackRoutingAgentsRes): ListCallbackRoutingAgentsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCallbackRoutingAgentsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCallbackRoutingAgentsRes;
  static deserializeBinaryFromReader(message: ListCallbackRoutingAgentsRes, reader: jspb.BinaryReader): ListCallbackRoutingAgentsRes;
}

export namespace ListCallbackRoutingAgentsRes {
  export type AsObject = {
    agentShortList: Array<AgentsByAgentSidShort.AsObject>,
  }
}

export class ListCallbackRoutingSkillsReq extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCallbackRoutingSkillsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListCallbackRoutingSkillsReq): ListCallbackRoutingSkillsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCallbackRoutingSkillsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCallbackRoutingSkillsReq;
  static deserializeBinaryFromReader(message: ListCallbackRoutingSkillsReq, reader: jspb.BinaryReader): ListCallbackRoutingSkillsReq;
}

export namespace ListCallbackRoutingSkillsReq {
  export type AsObject = {
    huntGroupSid: number,
  }
}

export class ListCallbackRoutingSkillsRes extends jspb.Message {
  clearAgentSkillsList(): void;
  getAgentSkillsList(): Array<AgentSkill>;
  setAgentSkillsList(value: Array<AgentSkill>): void;
  addAgentSkills(value?: AgentSkill, index?: number): AgentSkill;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCallbackRoutingSkillsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListCallbackRoutingSkillsRes): ListCallbackRoutingSkillsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCallbackRoutingSkillsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCallbackRoutingSkillsRes;
  static deserializeBinaryFromReader(message: ListCallbackRoutingSkillsRes, reader: jspb.BinaryReader): ListCallbackRoutingSkillsRes;
}

export namespace ListCallbackRoutingSkillsRes {
  export type AsObject = {
    agentSkillsList: Array<AgentSkill.AsObject>,
  }
}

export class HandleRecordingDelayReq extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getAgentSessionSid(): number;
  setAgentSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandleRecordingDelayReq.AsObject;
  static toObject(includeInstance: boolean, msg: HandleRecordingDelayReq): HandleRecordingDelayReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HandleRecordingDelayReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandleRecordingDelayReq;
  static deserializeBinaryFromReader(message: HandleRecordingDelayReq, reader: jspb.BinaryReader): HandleRecordingDelayReq;
}

export namespace HandleRecordingDelayReq {
  export type AsObject = {
    huntGroupSid: number,
    agentSessionSid: number,
  }
}

export class HandleRecordingDelayRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandleRecordingDelayRes.AsObject;
  static toObject(includeInstance: boolean, msg: HandleRecordingDelayRes): HandleRecordingDelayRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HandleRecordingDelayRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandleRecordingDelayRes;
  static deserializeBinaryFromReader(message: HandleRecordingDelayRes, reader: jspb.BinaryReader): HandleRecordingDelayRes;
}

export namespace HandleRecordingDelayRes {
  export type AsObject = {
  }
}

export class ScheduleCallBackSettings extends jspb.Message {
  getAllowCallbackScheduling(): boolean;
  setAllowCallbackScheduling(value: boolean): void;

  getAllowScheduledCallbackCalling(): boolean;
  setAllowScheduledCallbackCalling(value: boolean): void;

  getAllowAutomaticCallbackRetrievalMode(): boolean;
  setAllowAutomaticCallbackRetrievalMode(value: boolean): void;

  getAllowDefaultCallbackRouting(): boolean;
  setAllowDefaultCallbackRouting(value: boolean): void;

  getCallbacksRetrievalModeSettings(): string;
  setCallbacksRetrievalModeSettings(value: string): void;

  getDefaultCallbackRoutingSettings(): string;
  setDefaultCallbackRoutingSettings(value: string): void;

  getCallbacksServiceId(): string;
  setCallbacksServiceId(value: string): void;

  getHasCustomCallerId(): boolean;
  setHasCustomCallerId(value: boolean): void;

  getDefaultCallerId(): string;
  setDefaultCallerId(value: string): void;

  getAllowScheduledCallbackCalendar(): boolean;
  setAllowScheduledCallbackCalendar(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleCallBackSettings.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleCallBackSettings): ScheduleCallBackSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleCallBackSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleCallBackSettings;
  static deserializeBinaryFromReader(message: ScheduleCallBackSettings, reader: jspb.BinaryReader): ScheduleCallBackSettings;
}

export namespace ScheduleCallBackSettings {
  export type AsObject = {
    allowCallbackScheduling: boolean,
    allowScheduledCallbackCalling: boolean,
    allowAutomaticCallbackRetrievalMode: boolean,
    allowDefaultCallbackRouting: boolean,
    callbacksRetrievalModeSettings: string,
    defaultCallbackRoutingSettings: string,
    callbacksServiceId: string,
    hasCustomCallerId: boolean,
    defaultCallerId: string,
    allowScheduledCallbackCalendar: boolean,
  }
}

export class UpdateAgentAssignedHuntGroupReq extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getSkillsMap(): jspb.Map<string, number>;
  clearSkillsMap(): void;
  getReplaceSkills(): boolean;
  setReplaceSkills(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentAssignedHuntGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentAssignedHuntGroupReq): UpdateAgentAssignedHuntGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentAssignedHuntGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentAssignedHuntGroupReq;
  static deserializeBinaryFromReader(message: UpdateAgentAssignedHuntGroupReq, reader: jspb.BinaryReader): UpdateAgentAssignedHuntGroupReq;
}

export namespace UpdateAgentAssignedHuntGroupReq {
  export type AsObject = {
    huntGroupSid: number,
    skillsMap: Array<[string, number]>,
    replaceSkills: boolean,
  }
}

export class UpdateAgentAssignedHuntGroupRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentAssignedHuntGroupRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentAssignedHuntGroupRes): UpdateAgentAssignedHuntGroupRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentAssignedHuntGroupRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentAssignedHuntGroupRes;
  static deserializeBinaryFromReader(message: UpdateAgentAssignedHuntGroupRes, reader: jspb.BinaryReader): UpdateAgentAssignedHuntGroupRes;
}

export namespace UpdateAgentAssignedHuntGroupRes {
  export type AsObject = {
  }
}

export class ListHuntGroupsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHuntGroupsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListHuntGroupsReq): ListHuntGroupsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListHuntGroupsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHuntGroupsReq;
  static deserializeBinaryFromReader(message: ListHuntGroupsReq, reader: jspb.BinaryReader): ListHuntGroupsReq;
}

export namespace ListHuntGroupsReq {
  export type AsObject = {
  }
}

export class ListHuntGroupsRes extends jspb.Message {
  clearHuntGroupList(): void;
  getHuntGroupList(): Array<HuntGroup>;
  setHuntGroupList(value: Array<HuntGroup>): void;
  addHuntGroup(value?: HuntGroup, index?: number): HuntGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHuntGroupsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListHuntGroupsRes): ListHuntGroupsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListHuntGroupsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHuntGroupsRes;
  static deserializeBinaryFromReader(message: ListHuntGroupsRes, reader: jspb.BinaryReader): ListHuntGroupsRes;
}

export namespace ListHuntGroupsRes {
  export type AsObject = {
    huntGroupList: Array<HuntGroup.AsObject>,
  }
}

export class ListReassignmentHuntGroupsReq extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReassignmentHuntGroupsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListReassignmentHuntGroupsReq): ListReassignmentHuntGroupsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListReassignmentHuntGroupsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReassignmentHuntGroupsReq;
  static deserializeBinaryFromReader(message: ListReassignmentHuntGroupsReq, reader: jspb.BinaryReader): ListReassignmentHuntGroupsReq;
}

export namespace ListReassignmentHuntGroupsReq {
  export type AsObject = {
    huntGroupSid: number,
  }
}

export class ListReassignmentHuntGroupsRes extends jspb.Message {
  clearHuntGroupsList(): void;
  getHuntGroupsList(): Array<SimpleHuntGroup>;
  setHuntGroupsList(value: Array<SimpleHuntGroup>): void;
  addHuntGroups(value?: SimpleHuntGroup, index?: number): SimpleHuntGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReassignmentHuntGroupsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListReassignmentHuntGroupsRes): ListReassignmentHuntGroupsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListReassignmentHuntGroupsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReassignmentHuntGroupsRes;
  static deserializeBinaryFromReader(message: ListReassignmentHuntGroupsRes, reader: jspb.BinaryReader): ListReassignmentHuntGroupsRes;
}

export namespace ListReassignmentHuntGroupsRes {
  export type AsObject = {
    huntGroupsList: Array<SimpleHuntGroup.AsObject>,
  }
}

export class GetOrgAgentSettingsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrgAgentSettingsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrgAgentSettingsReq): GetOrgAgentSettingsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrgAgentSettingsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrgAgentSettingsReq;
  static deserializeBinaryFromReader(message: GetOrgAgentSettingsReq, reader: jspb.BinaryReader): GetOrgAgentSettingsReq;
}

export namespace GetOrgAgentSettingsReq {
  export type AsObject = {
  }
}

export class GetOrgAgentSettingsRes extends jspb.Message {
  getDefaultTimeZone(): string;
  setDefaultTimeZone(value: string): void;

  getDefaultSoftphoneVolumeIn(): number;
  setDefaultSoftphoneVolumeIn(value: number): void;

  getDefaultSoftphoneVolumeOut(): number;
  setDefaultSoftphoneVolumeOut(value: number): void;

  getLinkbackRecording(): boolean;
  setLinkbackRecording(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrgAgentSettingsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrgAgentSettingsRes): GetOrgAgentSettingsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrgAgentSettingsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrgAgentSettingsRes;
  static deserializeBinaryFromReader(message: GetOrgAgentSettingsRes, reader: jspb.BinaryReader): GetOrgAgentSettingsRes;
}

export namespace GetOrgAgentSettingsRes {
  export type AsObject = {
    defaultTimeZone: string,
    defaultSoftphoneVolumeIn: number,
    defaultSoftphoneVolumeOut: number,
    linkbackRecording: boolean,
  }
}

export class ListCallerIdsFromBucketReq extends jspb.Message {
  getBucketNumber(): number;
  setBucketNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCallerIdsFromBucketReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListCallerIdsFromBucketReq): ListCallerIdsFromBucketReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCallerIdsFromBucketReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCallerIdsFromBucketReq;
  static deserializeBinaryFromReader(message: ListCallerIdsFromBucketReq, reader: jspb.BinaryReader): ListCallerIdsFromBucketReq;
}

export namespace ListCallerIdsFromBucketReq {
  export type AsObject = {
    bucketNumber: number,
  }
}

export class ListCallerIdsFromBucketRes extends jspb.Message {
  clearCallerIdInfoList(): void;
  getCallerIdInfoList(): Array<CallerIdInfo>;
  setCallerIdInfoList(value: Array<CallerIdInfo>): void;
  addCallerIdInfo(value?: CallerIdInfo, index?: number): CallerIdInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCallerIdsFromBucketRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListCallerIdsFromBucketRes): ListCallerIdsFromBucketRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCallerIdsFromBucketRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCallerIdsFromBucketRes;
  static deserializeBinaryFromReader(message: ListCallerIdsFromBucketRes, reader: jspb.BinaryReader): ListCallerIdsFromBucketRes;
}

export namespace ListCallerIdsFromBucketRes {
  export type AsObject = {
    callerIdInfoList: Array<CallerIdInfo.AsObject>,
  }
}

export class CallerIdInfo extends jspb.Message {
  getNumber(): string;
  setNumber(value: string): void;

  getRegionCode(): string;
  setRegionCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallerIdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CallerIdInfo): CallerIdInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallerIdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallerIdInfo;
  static deserializeBinaryFromReader(message: CallerIdInfo, reader: jspb.BinaryReader): CallerIdInfo;
}

export namespace CallerIdInfo {
  export type AsObject = {
    number: string,
    regionCode: string,
  }
}

export class SaveLastCallResponseReq extends jspb.Message {
  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getCallSid(): number;
  setCallSid(value: number): void;

  getResponseName(): string;
  setResponseName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveLastCallResponseReq.AsObject;
  static toObject(includeInstance: boolean, msg: SaveLastCallResponseReq): SaveLastCallResponseReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveLastCallResponseReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveLastCallResponseReq;
  static deserializeBinaryFromReader(message: SaveLastCallResponseReq, reader: jspb.BinaryReader): SaveLastCallResponseReq;
}

export namespace SaveLastCallResponseReq {
  export type AsObject = {
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    callSid: number,
    responseName: string,
  }
}

export class SaveLastCallResponseRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveLastCallResponseRes.AsObject;
  static toObject(includeInstance: boolean, msg: SaveLastCallResponseRes): SaveLastCallResponseRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveLastCallResponseRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveLastCallResponseRes;
  static deserializeBinaryFromReader(message: SaveLastCallResponseRes, reader: jspb.BinaryReader): SaveLastCallResponseRes;
}

export namespace SaveLastCallResponseRes {
  export type AsObject = {
  }
}

export class AgentCallResponse extends jspb.Message {
  getAgentCallResponseSid(): number;
  setAgentCallResponseSid(value: number): void;

  hasAgentCallSid(): boolean;
  clearAgentCallSid(): void;
  getAgentCallSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAgentCallSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasKey(): boolean;
  clearKey(): void;
  getKey(): google_protobuf_wrappers_pb.StringValue | undefined;
  setKey(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setValue(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setOrder(value?: google_protobuf_wrappers_pb.Int32Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentCallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AgentCallResponse): AgentCallResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentCallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentCallResponse;
  static deserializeBinaryFromReader(message: AgentCallResponse, reader: jspb.BinaryReader): AgentCallResponse;
}

export namespace AgentCallResponse {
  export type AsObject = {
    agentCallResponseSid: number,
    agentCallSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    key?: google_protobuf_wrappers_pb.StringValue.AsObject,
    value?: google_protobuf_wrappers_pb.StringValue.AsObject,
    order?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }
}

export class GetCallDetailsRes extends jspb.Message {
  clearContactFieldDataList(): void;
  getContactFieldDataList(): Array<ContactFieldDataRow>;
  setContactFieldDataList(value: Array<ContactFieldDataRow>): void;
  addContactFieldData(value?: ContactFieldDataRow, index?: number): ContactFieldDataRow;

  clearAgentCallActivityDetailsList(): void;
  getAgentCallActivityDetailsList(): Array<AgentCallActivityDetails>;
  setAgentCallActivityDetailsList(value: Array<AgentCallActivityDetails>): void;
  addAgentCallActivityDetails(value?: AgentCallActivityDetails, index?: number): AgentCallActivityDetails;

  clearAgentCallResponsesList(): void;
  getAgentCallResponsesList(): Array<AgentCallResponse>;
  setAgentCallResponsesList(value: Array<AgentCallResponse>): void;
  addAgentCallResponses(value?: AgentCallResponse, index?: number): AgentCallResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCallDetailsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetCallDetailsRes): GetCallDetailsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCallDetailsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCallDetailsRes;
  static deserializeBinaryFromReader(message: GetCallDetailsRes, reader: jspb.BinaryReader): GetCallDetailsRes;
}

export namespace GetCallDetailsRes {
  export type AsObject = {
    contactFieldDataList: Array<ContactFieldDataRow.AsObject>,
    agentCallActivityDetailsList: Array<AgentCallActivityDetails.AsObject>,
    agentCallResponsesList: Array<AgentCallResponse.AsObject>,
  }
}

export class ListAgentCallLogsByCallSidAndTypeReq extends jspb.Message {
  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentCallLogsByCallSidAndTypeReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentCallLogsByCallSidAndTypeReq): ListAgentCallLogsByCallSidAndTypeReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentCallLogsByCallSidAndTypeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentCallLogsByCallSidAndTypeReq;
  static deserializeBinaryFromReader(message: ListAgentCallLogsByCallSidAndTypeReq, reader: jspb.BinaryReader): ListAgentCallLogsByCallSidAndTypeReq;
}

export namespace ListAgentCallLogsByCallSidAndTypeReq {
  export type AsObject = {
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
  }
}

export class ListAgentCallLogsByCallSidAndTypeRes extends jspb.Message {
  clearAgentCallLogsList(): void;
  getAgentCallLogsList(): Array<AgentCallLog>;
  setAgentCallLogsList(value: Array<AgentCallLog>): void;
  addAgentCallLogs(value?: AgentCallLog, index?: number): AgentCallLog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentCallLogsByCallSidAndTypeRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentCallLogsByCallSidAndTypeRes): ListAgentCallLogsByCallSidAndTypeRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentCallLogsByCallSidAndTypeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentCallLogsByCallSidAndTypeRes;
  static deserializeBinaryFromReader(message: ListAgentCallLogsByCallSidAndTypeRes, reader: jspb.BinaryReader): ListAgentCallLogsByCallSidAndTypeRes;
}

export namespace ListAgentCallLogsByCallSidAndTypeRes {
  export type AsObject = {
    agentCallLogsList: Array<AgentCallLog.AsObject>,
  }
}

export class ContactFieldDataRow extends jspb.Message {
  getFieldLabel(): string;
  setFieldLabel(value: string): void;

  getFieldValue(): string;
  setFieldValue(value: string): void;

  getIsPhone(): boolean;
  setIsPhone(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactFieldDataRow.AsObject;
  static toObject(includeInstance: boolean, msg: ContactFieldDataRow): ContactFieldDataRow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactFieldDataRow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactFieldDataRow;
  static deserializeBinaryFromReader(message: ContactFieldDataRow, reader: jspb.BinaryReader): ContactFieldDataRow;
}

export namespace ContactFieldDataRow {
  export type AsObject = {
    fieldLabel: string,
    fieldValue: string,
    isPhone: boolean,
  }
}

export class GetCallDataReq extends jspb.Message {
  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCallDataReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCallDataReq): GetCallDataReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCallDataReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCallDataReq;
  static deserializeBinaryFromReader(message: GetCallDataReq, reader: jspb.BinaryReader): GetCallDataReq;
}

export namespace GetCallDataReq {
  export type AsObject = {
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
  }
}

export class GetCallDataRes extends jspb.Message {
  getIvrDataMap(): jspb.Map<string, string>;
  clearIvrDataMap(): void;
  getPhoneEnhancedDataMap(): jspb.Map<string, string>;
  clearPhoneEnhancedDataMap(): void;
  getDataCollectDataMap(): jspb.Map<string, string>;
  clearDataCollectDataMap(): void;
  getDataDipDataMap(): jspb.Map<string, string>;
  clearDataDipDataMap(): void;
  getCallerIdName(): string;
  setCallerIdName(value: string): void;

  getLinkbackHuntGroup(): string;
  setLinkbackHuntGroup(value: string): void;

  getSipHeaderDataMap(): jspb.Map<string, string>;
  clearSipHeaderDataMap(): void;
  getQueuedCallbackDataMap(): jspb.Map<string, string>;
  clearQueuedCallbackDataMap(): void;
  getJourneyRetrievedDataMap(): jspb.Map<string, string>;
  clearJourneyRetrievedDataMap(): void;
  getIntegrationDataMap(): jspb.Map<string, string>;
  clearIntegrationDataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCallDataRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetCallDataRes): GetCallDataRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCallDataRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCallDataRes;
  static deserializeBinaryFromReader(message: GetCallDataRes, reader: jspb.BinaryReader): GetCallDataRes;
}

export namespace GetCallDataRes {
  export type AsObject = {
    ivrDataMap: Array<[string, string]>,
    phoneEnhancedDataMap: Array<[string, string]>,
    dataCollectDataMap: Array<[string, string]>,
    dataDipDataMap: Array<[string, string]>,
    callerIdName: string,
    linkbackHuntGroup: string,
    sipHeaderDataMap: Array<[string, string]>,
    queuedCallbackDataMap: Array<[string, string]>,
    journeyRetrievedDataMap: Array<[string, string]>,
    integrationDataMap: Array<[string, string]>,
  }
}

export class UpdatePBXExtensionReq extends jspb.Message {
  getPbxExtension(): string;
  setPbxExtension(value: string): void;

  getEmailSubject(): string;
  setEmailSubject(value: string): void;

  getEmailBody(): string;
  setEmailBody(value: string): void;

  getEmailAddresses(): string;
  setEmailAddresses(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePBXExtensionReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePBXExtensionReq): UpdatePBXExtensionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePBXExtensionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePBXExtensionReq;
  static deserializeBinaryFromReader(message: UpdatePBXExtensionReq, reader: jspb.BinaryReader): UpdatePBXExtensionReq;
}

export namespace UpdatePBXExtensionReq {
  export type AsObject = {
    pbxExtension: string,
    emailSubject: string,
    emailBody: string,
    emailAddresses: string,
  }
}

export class UpdatePBXExtensionRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePBXExtensionRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePBXExtensionRes): UpdatePBXExtensionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePBXExtensionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePBXExtensionRes;
  static deserializeBinaryFromReader(message: UpdatePBXExtensionRes, reader: jspb.BinaryReader): UpdatePBXExtensionRes;
}

export namespace UpdatePBXExtensionRes {
  export type AsObject = {
  }
}

export class HuntGroupScript extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getAutoScriptProgression(): boolean;
  setAutoScriptProgression(value: boolean): void;

  getScriptCategory(): string;
  setScriptCategory(value: string): void;

  clearActList(): void;
  getActList(): Array<Act>;
  setActList(value: Array<Act>): void;
  addAct(value?: Act, index?: number): Act;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HuntGroupScript.AsObject;
  static toObject(includeInstance: boolean, msg: HuntGroupScript): HuntGroupScript.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HuntGroupScript, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HuntGroupScript;
  static deserializeBinaryFromReader(message: HuntGroupScript, reader: jspb.BinaryReader): HuntGroupScript;
}

export namespace HuntGroupScript {
  export type AsObject = {
    name: string,
    description: string,
    autoScriptProgression: boolean,
    scriptCategory: string,
    actList: Array<Act.AsObject>,
  }
}

export class Act extends jspb.Message {
  clearDispositionList(): void;
  getDispositionList(): Array<Disposition>;
  setDispositionList(value: Array<Disposition>): void;
  addDisposition(value?: Disposition, index?: number): Disposition;

  clearVerbiageList(): void;
  getVerbiageList(): Array<Verbiage>;
  setVerbiageList(value: Array<Verbiage>): void;
  addVerbiage(value?: Verbiage, index?: number): Verbiage;

  getDefaultConditionalNavigationTarget(): number;
  setDefaultConditionalNavigationTarget(value: number): void;

  clearConditionalNavigationList(): void;
  getConditionalNavigationList(): Array<ConditionalNavigation>;
  setConditionalNavigationList(value: Array<ConditionalNavigation>): void;
  addConditionalNavigation(value?: ConditionalNavigation, index?: number): ConditionalNavigation;

  getPageArrivalRecordingControl(): number;
  setPageArrivalRecordingControl(value: number): void;

  getPageExitRecordingControl(): number;
  setPageExitRecordingControl(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Act.AsObject;
  static toObject(includeInstance: boolean, msg: Act): Act.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Act, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Act;
  static deserializeBinaryFromReader(message: Act, reader: jspb.BinaryReader): Act;
}

export namespace Act {
  export type AsObject = {
    dispositionList: Array<Disposition.AsObject>,
    verbiageList: Array<Verbiage.AsObject>,
    defaultConditionalNavigationTarget: number,
    conditionalNavigationList: Array<ConditionalNavigation.AsObject>,
    pageArrivalRecordingControl: number,
    pageExitRecordingControl: number,
  }
}

export class Disposition extends jspb.Message {
  getRequired(): boolean;
  setRequired(value: boolean): void;

  getOrder(): number;
  setOrder(value: number): void;

  getType(): string;
  setType(value: string): void;

  getHeader(): string;
  setHeader(value: string): void;

  getPrompt(): string;
  setPrompt(value: string): void;

  getDefaultvalue(): string;
  setDefaultvalue(value: string): void;

  clearResponseOptionsList(): void;
  getResponseOptionsList(): Array<string>;
  setResponseOptionsList(value: Array<string>): void;
  addResponseOptions(value: string, index?: number): string;

  getBypassAutoScriptProgression(): boolean;
  setBypassAutoScriptProgression(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Disposition.AsObject;
  static toObject(includeInstance: boolean, msg: Disposition): Disposition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Disposition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Disposition;
  static deserializeBinaryFromReader(message: Disposition, reader: jspb.BinaryReader): Disposition;
}

export namespace Disposition {
  export type AsObject = {
    required: boolean,
    order: number,
    type: string,
    header: string,
    prompt: string,
    defaultvalue: string,
    responseOptionsList: Array<string>,
    bypassAutoScriptProgression: boolean,
  }
}

export class Verbiage extends jspb.Message {
  getOrder(): number;
  setOrder(value: number): void;

  getHeader(): string;
  setHeader(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Verbiage.AsObject;
  static toObject(includeInstance: boolean, msg: Verbiage): Verbiage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Verbiage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Verbiage;
  static deserializeBinaryFromReader(message: Verbiage, reader: jspb.BinaryReader): Verbiage;
}

export namespace Verbiage {
  export type AsObject = {
    order: number,
    header: string,
    body: string,
  }
}

export class ConditionalNavigation extends jspb.Message {
  hasComplexBooleanExpressionList(): boolean;
  clearComplexBooleanExpressionList(): void;
  getComplexBooleanExpressionList(): ComplexBooleanExpressionList | undefined;
  setComplexBooleanExpressionList(value?: ComplexBooleanExpressionList): void;

  getTargetActIndex(): number;
  setTargetActIndex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionalNavigation.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionalNavigation): ConditionalNavigation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionalNavigation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionalNavigation;
  static deserializeBinaryFromReader(message: ConditionalNavigation, reader: jspb.BinaryReader): ConditionalNavigation;
}

export namespace ConditionalNavigation {
  export type AsObject = {
    complexBooleanExpressionList?: ComplexBooleanExpressionList.AsObject,
    targetActIndex: number,
  }
}

export class ComplexBooleanExpressionList extends jspb.Message {
  clearComplexBooleanExpressionList(): void;
  getComplexBooleanExpressionList(): Array<ComplexBooleanExpression>;
  setComplexBooleanExpressionList(value: Array<ComplexBooleanExpression>): void;
  addComplexBooleanExpression(value?: ComplexBooleanExpression, index?: number): ComplexBooleanExpression;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComplexBooleanExpressionList.AsObject;
  static toObject(includeInstance: boolean, msg: ComplexBooleanExpressionList): ComplexBooleanExpressionList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComplexBooleanExpressionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComplexBooleanExpressionList;
  static deserializeBinaryFromReader(message: ComplexBooleanExpressionList, reader: jspb.BinaryReader): ComplexBooleanExpressionList;
}

export namespace ComplexBooleanExpressionList {
  export type AsObject = {
    complexBooleanExpressionList: Array<ComplexBooleanExpression.AsObject>,
  }
}

export class ComplexBooleanExpression extends jspb.Message {
  hasCompareExpressionList(): boolean;
  clearCompareExpressionList(): void;
  getCompareExpressionList(): CompareExpressionList | undefined;
  setCompareExpressionList(value?: CompareExpressionList): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComplexBooleanExpression.AsObject;
  static toObject(includeInstance: boolean, msg: ComplexBooleanExpression): ComplexBooleanExpression.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComplexBooleanExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComplexBooleanExpression;
  static deserializeBinaryFromReader(message: ComplexBooleanExpression, reader: jspb.BinaryReader): ComplexBooleanExpression;
}

export namespace ComplexBooleanExpression {
  export type AsObject = {
    compareExpressionList?: CompareExpressionList.AsObject,
  }
}

export class CompareExpressionList extends jspb.Message {
  clearSimpleCompareExpressionList(): void;
  getSimpleCompareExpressionList(): Array<CompareExpression>;
  setSimpleCompareExpressionList(value: Array<CompareExpression>): void;
  addSimpleCompareExpression(value?: CompareExpression, index?: number): CompareExpression;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompareExpressionList.AsObject;
  static toObject(includeInstance: boolean, msg: CompareExpressionList): CompareExpressionList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompareExpressionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompareExpressionList;
  static deserializeBinaryFromReader(message: CompareExpressionList, reader: jspb.BinaryReader): CompareExpressionList;
}

export namespace CompareExpressionList {
  export type AsObject = {
    simpleCompareExpressionList: Array<CompareExpression.AsObject>,
  }
}

export class CompareExpression extends jspb.Message {
  getOperatorType(): string;
  setOperatorType(value: string): void;

  getValueKey(): string;
  setValueKey(value: string): void;

  getCompareValue(): string;
  setCompareValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompareExpression.AsObject;
  static toObject(includeInstance: boolean, msg: CompareExpression): CompareExpression.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompareExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompareExpression;
  static deserializeBinaryFromReader(message: CompareExpression, reader: jspb.BinaryReader): CompareExpression;
}

export namespace CompareExpression {
  export type AsObject = {
    operatorType: string,
    valueKey: string,
    compareValue: string,
  }
}

export class ListAgentCallResponseValuesReq extends jspb.Message {
  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentCallResponseValuesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentCallResponseValuesReq): ListAgentCallResponseValuesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentCallResponseValuesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentCallResponseValuesReq;
  static deserializeBinaryFromReader(message: ListAgentCallResponseValuesReq, reader: jspb.BinaryReader): ListAgentCallResponseValuesReq;
}

export namespace ListAgentCallResponseValuesReq {
  export type AsObject = {
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
  }
}

export class ListAgentCallResponseValuesRes extends jspb.Message {
  clearResponsesList(): void;
  getResponsesList(): Array<ListAgentCallResponseValuesRes.Response>;
  setResponsesList(value: Array<ListAgentCallResponseValuesRes.Response>): void;
  addResponses(value?: ListAgentCallResponseValuesRes.Response, index?: number): ListAgentCallResponseValuesRes.Response;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentCallResponseValuesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentCallResponseValuesRes): ListAgentCallResponseValuesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentCallResponseValuesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentCallResponseValuesRes;
  static deserializeBinaryFromReader(message: ListAgentCallResponseValuesRes, reader: jspb.BinaryReader): ListAgentCallResponseValuesRes;
}

export namespace ListAgentCallResponseValuesRes {
  export type AsObject = {
    responsesList: Array<ListAgentCallResponseValuesRes.Response.AsObject>,
  }

  export class Response extends jspb.Message {
    getKey(): string;
    setKey(value: string): void;

    getValue(): string;
    setValue(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
  }

  export namespace Response {
    export type AsObject = {
      key: string,
      value: string,
    }
  }
}

export class ContactSchema extends jspb.Message {
  getContactSchemaSid(): number;
  setContactSchemaSid(value: number): void;

  getContactGroupSid(): number;
  setContactGroupSid(value: number): void;

  hasDfcSid01(): boolean;
  clearDfcSid01(): void;
  getDfcSid01(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid01(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid02(): boolean;
  clearDfcSid02(): void;
  getDfcSid02(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid02(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid03(): boolean;
  clearDfcSid03(): void;
  getDfcSid03(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid03(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid04(): boolean;
  clearDfcSid04(): void;
  getDfcSid04(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid04(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid05(): boolean;
  clearDfcSid05(): void;
  getDfcSid05(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid05(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid06(): boolean;
  clearDfcSid06(): void;
  getDfcSid06(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid06(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid07(): boolean;
  clearDfcSid07(): void;
  getDfcSid07(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid07(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid08(): boolean;
  clearDfcSid08(): void;
  getDfcSid08(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid08(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid09(): boolean;
  clearDfcSid09(): void;
  getDfcSid09(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid09(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid10(): boolean;
  clearDfcSid10(): void;
  getDfcSid10(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid10(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid11(): boolean;
  clearDfcSid11(): void;
  getDfcSid11(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid11(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid12(): boolean;
  clearDfcSid12(): void;
  getDfcSid12(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid12(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid13(): boolean;
  clearDfcSid13(): void;
  getDfcSid13(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid13(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid14(): boolean;
  clearDfcSid14(): void;
  getDfcSid14(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid14(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid15(): boolean;
  clearDfcSid15(): void;
  getDfcSid15(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid15(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid16(): boolean;
  clearDfcSid16(): void;
  getDfcSid16(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid16(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid17(): boolean;
  clearDfcSid17(): void;
  getDfcSid17(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid17(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid18(): boolean;
  clearDfcSid18(): void;
  getDfcSid18(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid18(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid19(): boolean;
  clearDfcSid19(): void;
  getDfcSid19(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid19(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid20(): boolean;
  clearDfcSid20(): void;
  getDfcSid20(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid20(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid21(): boolean;
  clearDfcSid21(): void;
  getDfcSid21(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid21(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid22(): boolean;
  clearDfcSid22(): void;
  getDfcSid22(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid22(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid23(): boolean;
  clearDfcSid23(): void;
  getDfcSid23(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid23(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid24(): boolean;
  clearDfcSid24(): void;
  getDfcSid24(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid24(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid25(): boolean;
  clearDfcSid25(): void;
  getDfcSid25(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid25(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid26(): boolean;
  clearDfcSid26(): void;
  getDfcSid26(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid26(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid27(): boolean;
  clearDfcSid27(): void;
  getDfcSid27(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid27(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid28(): boolean;
  clearDfcSid28(): void;
  getDfcSid28(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid28(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid29(): boolean;
  clearDfcSid29(): void;
  getDfcSid29(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid29(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid30(): boolean;
  clearDfcSid30(): void;
  getDfcSid30(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid30(value?: google_protobuf_wrappers_pb.Int32Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactSchema.AsObject;
  static toObject(includeInstance: boolean, msg: ContactSchema): ContactSchema.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactSchema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactSchema;
  static deserializeBinaryFromReader(message: ContactSchema, reader: jspb.BinaryReader): ContactSchema;
}

export namespace ContactSchema {
  export type AsObject = {
    contactSchemaSid: number,
    contactGroupSid: number,
    dfcSid01?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid02?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid03?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid04?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid05?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid06?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid07?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid08?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid09?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid10?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid11?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid12?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid13?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid14?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid15?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid16?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid17?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid18?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid19?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid20?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid21?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid22?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid23?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid24?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid25?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid26?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid27?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid28?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid29?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid30?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }
}

export class GetContactSchemaByContactGroupReq extends jspb.Message {
  getContactGroupSid(): number;
  setContactGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContactSchemaByContactGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetContactSchemaByContactGroupReq): GetContactSchemaByContactGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContactSchemaByContactGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContactSchemaByContactGroupReq;
  static deserializeBinaryFromReader(message: GetContactSchemaByContactGroupReq, reader: jspb.BinaryReader): GetContactSchemaByContactGroupReq;
}

export namespace GetContactSchemaByContactGroupReq {
  export type AsObject = {
    contactGroupSid: number,
  }
}

export class ContactFieldDescription extends jspb.Message {
  getContactFieldDescriptionSid(): number;
  setContactFieldDescriptionSid(value: number): void;

  getFieldName(): string;
  setFieldName(value: string): void;

  getIsPhone(): boolean;
  setIsPhone(value: boolean): void;

  hasDisplayFormatString(): boolean;
  clearDisplayFormatString(): void;
  getDisplayFormatString(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDisplayFormatString(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactFieldDescription.AsObject;
  static toObject(includeInstance: boolean, msg: ContactFieldDescription): ContactFieldDescription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactFieldDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactFieldDescription;
  static deserializeBinaryFromReader(message: ContactFieldDescription, reader: jspb.BinaryReader): ContactFieldDescription;
}

export namespace ContactFieldDescription {
  export type AsObject = {
    contactFieldDescriptionSid: number,
    fieldName: string,
    isPhone: boolean,
    displayFormatString?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ContactGroup extends jspb.Message {
  getContactGroupSid(): number;
  setContactGroupSid(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  getCountrySid(): number;
  setCountrySid(value: number): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasShaDigest(): boolean;
  clearShaDigest(): void;
  getShaDigest(): google_protobuf_wrappers_pb.StringValue | undefined;
  setShaDigest(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactGroup.AsObject;
  static toObject(includeInstance: boolean, msg: ContactGroup): ContactGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactGroup;
  static deserializeBinaryFromReader(message: ContactGroup, reader: jspb.BinaryReader): ContactGroup;
}

export namespace ContactGroup {
  export type AsObject = {
    contactGroupSid: number,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    countrySid: number,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    shaDigest?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class GetContactGroupReq extends jspb.Message {
  getContactGroupSid(): number;
  setContactGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContactGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetContactGroupReq): GetContactGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContactGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContactGroupReq;
  static deserializeBinaryFromReader(message: GetContactGroupReq, reader: jspb.BinaryReader): GetContactGroupReq;
}

export namespace GetContactGroupReq {
  export type AsObject = {
    contactGroupSid: number,
  }
}

export class GetContactGroupSizeRes extends jspb.Message {
  getContactGroupSize(): number;
  setContactGroupSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContactGroupSizeRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetContactGroupSizeRes): GetContactGroupSizeRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContactGroupSizeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContactGroupSizeRes;
  static deserializeBinaryFromReader(message: GetContactGroupSizeRes, reader: jspb.BinaryReader): GetContactGroupSizeRes;
}

export namespace GetContactGroupSizeRes {
  export type AsObject = {
    contactGroupSize: number,
  }
}

export class ListContactGroupDetailsByClientSidReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContactGroupDetailsByClientSidReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListContactGroupDetailsByClientSidReq): ListContactGroupDetailsByClientSidReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListContactGroupDetailsByClientSidReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContactGroupDetailsByClientSidReq;
  static deserializeBinaryFromReader(message: ListContactGroupDetailsByClientSidReq, reader: jspb.BinaryReader): ListContactGroupDetailsByClientSidReq;
}

export namespace ListContactGroupDetailsByClientSidReq {
  export type AsObject = {
  }
}

export class ListContactGroupDetailsByClientSidRes extends jspb.Message {
  clearContactGroupList(): void;
  getContactGroupList(): Array<ContactGroup>;
  setContactGroupList(value: Array<ContactGroup>): void;
  addContactGroup(value?: ContactGroup, index?: number): ContactGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContactGroupDetailsByClientSidRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListContactGroupDetailsByClientSidRes): ListContactGroupDetailsByClientSidRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListContactGroupDetailsByClientSidRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContactGroupDetailsByClientSidRes;
  static deserializeBinaryFromReader(message: ListContactGroupDetailsByClientSidRes, reader: jspb.BinaryReader): ListContactGroupDetailsByClientSidRes;
}

export namespace ListContactGroupDetailsByClientSidRes {
  export type AsObject = {
    contactGroupList: Array<ContactGroup.AsObject>,
  }
}

export class CreateContactFieldDescriptionReq extends jspb.Message {
  getFieldName(): string;
  setFieldName(value: string): void;

  getIsPhone(): boolean;
  setIsPhone(value: boolean): void;

  hasDisplayFormatString(): boolean;
  clearDisplayFormatString(): void;
  getDisplayFormatString(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDisplayFormatString(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateContactFieldDescriptionReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateContactFieldDescriptionReq): CreateContactFieldDescriptionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateContactFieldDescriptionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateContactFieldDescriptionReq;
  static deserializeBinaryFromReader(message: CreateContactFieldDescriptionReq, reader: jspb.BinaryReader): CreateContactFieldDescriptionReq;
}

export namespace CreateContactFieldDescriptionReq {
  export type AsObject = {
    fieldName: string,
    isPhone: boolean,
    displayFormatString?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class CreateContactFieldDescriptionRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateContactFieldDescriptionRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateContactFieldDescriptionRes): CreateContactFieldDescriptionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateContactFieldDescriptionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateContactFieldDescriptionRes;
  static deserializeBinaryFromReader(message: CreateContactFieldDescriptionRes, reader: jspb.BinaryReader): CreateContactFieldDescriptionRes;
}

export namespace CreateContactFieldDescriptionRes {
  export type AsObject = {
  }
}

export class DeleteContactFieldDescriptionReq extends jspb.Message {
  getContactFieldDescriptionSid(): number;
  setContactFieldDescriptionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteContactFieldDescriptionReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteContactFieldDescriptionReq): DeleteContactFieldDescriptionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteContactFieldDescriptionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteContactFieldDescriptionReq;
  static deserializeBinaryFromReader(message: DeleteContactFieldDescriptionReq, reader: jspb.BinaryReader): DeleteContactFieldDescriptionReq;
}

export namespace DeleteContactFieldDescriptionReq {
  export type AsObject = {
    contactFieldDescriptionSid: number,
  }
}

export class DeleteContactFieldDescriptionRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteContactFieldDescriptionRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteContactFieldDescriptionRes): DeleteContactFieldDescriptionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteContactFieldDescriptionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteContactFieldDescriptionRes;
  static deserializeBinaryFromReader(message: DeleteContactFieldDescriptionRes, reader: jspb.BinaryReader): DeleteContactFieldDescriptionRes;
}

export namespace DeleteContactFieldDescriptionRes {
  export type AsObject = {
  }
}

export class ListContactFieldDescriptionsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContactFieldDescriptionsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListContactFieldDescriptionsReq): ListContactFieldDescriptionsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListContactFieldDescriptionsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContactFieldDescriptionsReq;
  static deserializeBinaryFromReader(message: ListContactFieldDescriptionsReq, reader: jspb.BinaryReader): ListContactFieldDescriptionsReq;
}

export namespace ListContactFieldDescriptionsReq {
  export type AsObject = {
  }
}

export class ListContactFieldDescriptionsRes extends jspb.Message {
  clearContactFieldDescriptionList(): void;
  getContactFieldDescriptionList(): Array<ContactFieldDescription>;
  setContactFieldDescriptionList(value: Array<ContactFieldDescription>): void;
  addContactFieldDescription(value?: ContactFieldDescription, index?: number): ContactFieldDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContactFieldDescriptionsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListContactFieldDescriptionsRes): ListContactFieldDescriptionsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListContactFieldDescriptionsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContactFieldDescriptionsRes;
  static deserializeBinaryFromReader(message: ListContactFieldDescriptionsRes, reader: jspb.BinaryReader): ListContactFieldDescriptionsRes;
}

export namespace ListContactFieldDescriptionsRes {
  export type AsObject = {
    contactFieldDescriptionList: Array<ContactFieldDescription.AsObject>,
  }
}

export class ListContactFieldDescriptionsByCGSidReq extends jspb.Message {
  getContactGroupSid(): number;
  setContactGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContactFieldDescriptionsByCGSidReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListContactFieldDescriptionsByCGSidReq): ListContactFieldDescriptionsByCGSidReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListContactFieldDescriptionsByCGSidReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContactFieldDescriptionsByCGSidReq;
  static deserializeBinaryFromReader(message: ListContactFieldDescriptionsByCGSidReq, reader: jspb.BinaryReader): ListContactFieldDescriptionsByCGSidReq;
}

export namespace ListContactFieldDescriptionsByCGSidReq {
  export type AsObject = {
    contactGroupSid: number,
  }
}

export class ListContactFieldDescriptionsByCGSidRes extends jspb.Message {
  clearContactFieldDescriptionList(): void;
  getContactFieldDescriptionList(): Array<ContactFieldDescription>;
  setContactFieldDescriptionList(value: Array<ContactFieldDescription>): void;
  addContactFieldDescription(value?: ContactFieldDescription, index?: number): ContactFieldDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContactFieldDescriptionsByCGSidRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListContactFieldDescriptionsByCGSidRes): ListContactFieldDescriptionsByCGSidRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListContactFieldDescriptionsByCGSidRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContactFieldDescriptionsByCGSidRes;
  static deserializeBinaryFromReader(message: ListContactFieldDescriptionsByCGSidRes, reader: jspb.BinaryReader): ListContactFieldDescriptionsByCGSidRes;
}

export namespace ListContactFieldDescriptionsByCGSidRes {
  export type AsObject = {
    contactFieldDescriptionList: Array<ContactFieldDescription.AsObject>,
  }
}

export class ListTableTemplatePropertiesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTableTemplatePropertiesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListTableTemplatePropertiesReq): ListTableTemplatePropertiesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTableTemplatePropertiesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTableTemplatePropertiesReq;
  static deserializeBinaryFromReader(message: ListTableTemplatePropertiesReq, reader: jspb.BinaryReader): ListTableTemplatePropertiesReq;
}

export namespace ListTableTemplatePropertiesReq {
  export type AsObject = {
  }
}

export class ListTableTemplatePropertiesRes extends jspb.Message {
  clearAgentTableTemplatesList(): void;
  getAgentTableTemplatesList(): Array<TableTemplateProperty>;
  setAgentTableTemplatesList(value: Array<TableTemplateProperty>): void;
  addAgentTableTemplates(value?: TableTemplateProperty, index?: number): TableTemplateProperty;

  clearQueueTableTemplatesList(): void;
  getQueueTableTemplatesList(): Array<TableTemplateProperty>;
  setQueueTableTemplatesList(value: Array<TableTemplateProperty>): void;
  addQueueTableTemplates(value?: TableTemplateProperty, index?: number): TableTemplateProperty;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTableTemplatePropertiesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListTableTemplatePropertiesRes): ListTableTemplatePropertiesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTableTemplatePropertiesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTableTemplatePropertiesRes;
  static deserializeBinaryFromReader(message: ListTableTemplatePropertiesRes, reader: jspb.BinaryReader): ListTableTemplatePropertiesRes;
}

export namespace ListTableTemplatePropertiesRes {
  export type AsObject = {
    agentTableTemplatesList: Array<TableTemplateProperty.AsObject>,
    queueTableTemplatesList: Array<TableTemplateProperty.AsObject>,
  }
}

export class TableTemplateProperty extends jspb.Message {
  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableTemplateProperty.AsObject;
  static toObject(includeInstance: boolean, msg: TableTemplateProperty): TableTemplateProperty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableTemplateProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableTemplateProperty;
  static deserializeBinaryFromReader(message: TableTemplateProperty, reader: jspb.BinaryReader): TableTemplateProperty;
}

export namespace TableTemplateProperty {
  export type AsObject = {
    xmlClientPropertySid: number,
    name: string,
  }
}

export class ListAgentSkillsFiltersReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentSkillsFiltersReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentSkillsFiltersReq): ListAgentSkillsFiltersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentSkillsFiltersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentSkillsFiltersReq;
  static deserializeBinaryFromReader(message: ListAgentSkillsFiltersReq, reader: jspb.BinaryReader): ListAgentSkillsFiltersReq;
}

export namespace ListAgentSkillsFiltersReq {
  export type AsObject = {
  }
}

export class ListAgentSkillsFiltersRes extends jspb.Message {
  clearAgentSkillsFiltersList(): void;
  getAgentSkillsFiltersList(): Array<AgentSkillsFilter>;
  setAgentSkillsFiltersList(value: Array<AgentSkillsFilter>): void;
  addAgentSkillsFilters(value?: AgentSkillsFilter, index?: number): AgentSkillsFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentSkillsFiltersRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentSkillsFiltersRes): ListAgentSkillsFiltersRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentSkillsFiltersRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentSkillsFiltersRes;
  static deserializeBinaryFromReader(message: ListAgentSkillsFiltersRes, reader: jspb.BinaryReader): ListAgentSkillsFiltersRes;
}

export namespace ListAgentSkillsFiltersRes {
  export type AsObject = {
    agentSkillsFiltersList: Array<AgentSkillsFilter.AsObject>,
  }
}

export class AgentSkillsFilter extends jspb.Message {
  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentSkillsFilter.AsObject;
  static toObject(includeInstance: boolean, msg: AgentSkillsFilter): AgentSkillsFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentSkillsFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentSkillsFilter;
  static deserializeBinaryFromReader(message: AgentSkillsFilter, reader: jspb.BinaryReader): AgentSkillsFilter;
}

export namespace AgentSkillsFilter {
  export type AsObject = {
    xmlClientPropertySid: number,
    name: string,
  }
}

export class ListCustomReportFiltersReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomReportFiltersReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomReportFiltersReq): ListCustomReportFiltersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCustomReportFiltersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomReportFiltersReq;
  static deserializeBinaryFromReader(message: ListCustomReportFiltersReq, reader: jspb.BinaryReader): ListCustomReportFiltersReq;
}

export namespace ListCustomReportFiltersReq {
  export type AsObject = {
  }
}

export class ListCustomReportFiltersRes extends jspb.Message {
  clearCustomReportFiltersList(): void;
  getCustomReportFiltersList(): Array<CustomReportFilterProperty>;
  setCustomReportFiltersList(value: Array<CustomReportFilterProperty>): void;
  addCustomReportFilters(value?: CustomReportFilterProperty, index?: number): CustomReportFilterProperty;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomReportFiltersRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomReportFiltersRes): ListCustomReportFiltersRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCustomReportFiltersRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomReportFiltersRes;
  static deserializeBinaryFromReader(message: ListCustomReportFiltersRes, reader: jspb.BinaryReader): ListCustomReportFiltersRes;
}

export namespace ListCustomReportFiltersRes {
  export type AsObject = {
    customReportFiltersList: Array<CustomReportFilterProperty.AsObject>,
  }
}

export class CustomReportFilterProperty extends jspb.Message {
  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomReportFilterProperty.AsObject;
  static toObject(includeInstance: boolean, msg: CustomReportFilterProperty): CustomReportFilterProperty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomReportFilterProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomReportFilterProperty;
  static deserializeBinaryFromReader(message: CustomReportFilterProperty, reader: jspb.BinaryReader): CustomReportFilterProperty;
}

export namespace CustomReportFilterProperty {
  export type AsObject = {
    xmlClientPropertySid: number,
    name: string,
  }
}

export class ContactImportTemplate extends jspb.Message {
  getContactImportTemplateSid(): number;
  setContactImportTemplateSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasDelimiter(): boolean;
  clearDelimiter(): void;
  getDelimiter(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDelimiter(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasQuote(): boolean;
  clearQuote(): void;
  getQuote(): google_protobuf_wrappers_pb.StringValue | undefined;
  setQuote(value?: google_protobuf_wrappers_pb.StringValue): void;

  getIsFixedWidth(): boolean;
  setIsFixedWidth(value: boolean): void;

  hasDfcSid01(): boolean;
  clearDfcSid01(): void;
  getDfcSid01(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid01(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid02(): boolean;
  clearDfcSid02(): void;
  getDfcSid02(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid02(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid03(): boolean;
  clearDfcSid03(): void;
  getDfcSid03(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid03(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid04(): boolean;
  clearDfcSid04(): void;
  getDfcSid04(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid04(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid05(): boolean;
  clearDfcSid05(): void;
  getDfcSid05(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid05(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid06(): boolean;
  clearDfcSid06(): void;
  getDfcSid06(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid06(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid07(): boolean;
  clearDfcSid07(): void;
  getDfcSid07(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid07(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid08(): boolean;
  clearDfcSid08(): void;
  getDfcSid08(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid08(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid09(): boolean;
  clearDfcSid09(): void;
  getDfcSid09(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid09(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid10(): boolean;
  clearDfcSid10(): void;
  getDfcSid10(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid10(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid11(): boolean;
  clearDfcSid11(): void;
  getDfcSid11(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid11(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid12(): boolean;
  clearDfcSid12(): void;
  getDfcSid12(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid12(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid13(): boolean;
  clearDfcSid13(): void;
  getDfcSid13(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid13(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid14(): boolean;
  clearDfcSid14(): void;
  getDfcSid14(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid14(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid15(): boolean;
  clearDfcSid15(): void;
  getDfcSid15(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid15(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid16(): boolean;
  clearDfcSid16(): void;
  getDfcSid16(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid16(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid17(): boolean;
  clearDfcSid17(): void;
  getDfcSid17(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid17(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid18(): boolean;
  clearDfcSid18(): void;
  getDfcSid18(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid18(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid19(): boolean;
  clearDfcSid19(): void;
  getDfcSid19(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid19(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid20(): boolean;
  clearDfcSid20(): void;
  getDfcSid20(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid20(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid21(): boolean;
  clearDfcSid21(): void;
  getDfcSid21(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid21(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid22(): boolean;
  clearDfcSid22(): void;
  getDfcSid22(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid22(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid23(): boolean;
  clearDfcSid23(): void;
  getDfcSid23(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid23(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid24(): boolean;
  clearDfcSid24(): void;
  getDfcSid24(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid24(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid25(): boolean;
  clearDfcSid25(): void;
  getDfcSid25(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid25(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid26(): boolean;
  clearDfcSid26(): void;
  getDfcSid26(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid26(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid27(): boolean;
  clearDfcSid27(): void;
  getDfcSid27(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid27(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid28(): boolean;
  clearDfcSid28(): void;
  getDfcSid28(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid28(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid29(): boolean;
  clearDfcSid29(): void;
  getDfcSid29(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid29(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDfcSid30(): boolean;
  clearDfcSid30(): void;
  getDfcSid30(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDfcSid30(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength01(): boolean;
  clearFieldLength01(): void;
  getFieldLength01(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength01(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength02(): boolean;
  clearFieldLength02(): void;
  getFieldLength02(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength02(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength03(): boolean;
  clearFieldLength03(): void;
  getFieldLength03(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength03(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength04(): boolean;
  clearFieldLength04(): void;
  getFieldLength04(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength04(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength05(): boolean;
  clearFieldLength05(): void;
  getFieldLength05(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength05(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength06(): boolean;
  clearFieldLength06(): void;
  getFieldLength06(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength06(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength07(): boolean;
  clearFieldLength07(): void;
  getFieldLength07(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength07(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength08(): boolean;
  clearFieldLength08(): void;
  getFieldLength08(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength08(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength09(): boolean;
  clearFieldLength09(): void;
  getFieldLength09(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength09(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength10(): boolean;
  clearFieldLength10(): void;
  getFieldLength10(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength10(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength11(): boolean;
  clearFieldLength11(): void;
  getFieldLength11(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength11(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength12(): boolean;
  clearFieldLength12(): void;
  getFieldLength12(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength12(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength13(): boolean;
  clearFieldLength13(): void;
  getFieldLength13(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength13(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength14(): boolean;
  clearFieldLength14(): void;
  getFieldLength14(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength14(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength15(): boolean;
  clearFieldLength15(): void;
  getFieldLength15(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength15(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength16(): boolean;
  clearFieldLength16(): void;
  getFieldLength16(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength16(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength17(): boolean;
  clearFieldLength17(): void;
  getFieldLength17(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength17(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength18(): boolean;
  clearFieldLength18(): void;
  getFieldLength18(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength18(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength19(): boolean;
  clearFieldLength19(): void;
  getFieldLength19(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength19(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength20(): boolean;
  clearFieldLength20(): void;
  getFieldLength20(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength20(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength21(): boolean;
  clearFieldLength21(): void;
  getFieldLength21(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength21(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength22(): boolean;
  clearFieldLength22(): void;
  getFieldLength22(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength22(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength23(): boolean;
  clearFieldLength23(): void;
  getFieldLength23(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength23(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength24(): boolean;
  clearFieldLength24(): void;
  getFieldLength24(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength24(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength25(): boolean;
  clearFieldLength25(): void;
  getFieldLength25(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength25(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength26(): boolean;
  clearFieldLength26(): void;
  getFieldLength26(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength26(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength27(): boolean;
  clearFieldLength27(): void;
  getFieldLength27(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength27(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength28(): boolean;
  clearFieldLength28(): void;
  getFieldLength28(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength28(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength29(): boolean;
  clearFieldLength29(): void;
  getFieldLength29(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength29(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasFieldLength30(): boolean;
  clearFieldLength30(): void;
  getFieldLength30(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setFieldLength30(value?: google_protobuf_wrappers_pb.Int32Value): void;

  getTemplateNumber(): number;
  setTemplateNumber(value: number): void;

  hasExcludeFirstRow(): boolean;
  clearExcludeFirstRow(): void;
  getExcludeFirstRow(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setExcludeFirstRow(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactImportTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: ContactImportTemplate): ContactImportTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactImportTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactImportTemplate;
  static deserializeBinaryFromReader(message: ContactImportTemplate, reader: jspb.BinaryReader): ContactImportTemplate;
}

export namespace ContactImportTemplate {
  export type AsObject = {
    contactImportTemplateSid: number,
    name: string,
    description: string,
    delimiter?: google_protobuf_wrappers_pb.StringValue.AsObject,
    quote?: google_protobuf_wrappers_pb.StringValue.AsObject,
    isFixedWidth: boolean,
    dfcSid01?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid02?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid03?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid04?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid05?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid06?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid07?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid08?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid09?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid10?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid11?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid12?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid13?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid14?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid15?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid16?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid17?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid18?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid19?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid20?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid21?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid22?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid23?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid24?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid25?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid26?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid27?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid28?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid29?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dfcSid30?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength01?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength02?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength03?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength04?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength05?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength06?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength07?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength08?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength09?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength10?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength11?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength12?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength13?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength14?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength15?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength16?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength17?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength18?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength19?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength20?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength21?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength22?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength23?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength24?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength25?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength26?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength27?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength28?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength29?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    fieldLength30?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    templateNumber: number,
    excludeFirstRow?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

export class ListContactImportTemplatesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContactImportTemplatesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListContactImportTemplatesReq): ListContactImportTemplatesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListContactImportTemplatesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContactImportTemplatesReq;
  static deserializeBinaryFromReader(message: ListContactImportTemplatesReq, reader: jspb.BinaryReader): ListContactImportTemplatesReq;
}

export namespace ListContactImportTemplatesReq {
  export type AsObject = {
  }
}

export class ListContactImportTemplatesRes extends jspb.Message {
  clearContactImportTemplateList(): void;
  getContactImportTemplateList(): Array<ContactImportTemplate>;
  setContactImportTemplateList(value: Array<ContactImportTemplate>): void;
  addContactImportTemplate(value?: ContactImportTemplate, index?: number): ContactImportTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContactImportTemplatesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListContactImportTemplatesRes): ListContactImportTemplatesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListContactImportTemplatesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContactImportTemplatesRes;
  static deserializeBinaryFromReader(message: ListContactImportTemplatesRes, reader: jspb.BinaryReader): ListContactImportTemplatesRes;
}

export namespace ListContactImportTemplatesRes {
  export type AsObject = {
    contactImportTemplateList: Array<ContactImportTemplate.AsObject>,
  }
}

export class UpdatePreviewRecordToFinishedReq extends jspb.Message {
  getAgentSessionSid(): number;
  setAgentSessionSid(value: number): void;

  getTaskSid(): number;
  setTaskSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePreviewRecordToFinishedReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePreviewRecordToFinishedReq): UpdatePreviewRecordToFinishedReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePreviewRecordToFinishedReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePreviewRecordToFinishedReq;
  static deserializeBinaryFromReader(message: UpdatePreviewRecordToFinishedReq, reader: jspb.BinaryReader): UpdatePreviewRecordToFinishedReq;
}

export namespace UpdatePreviewRecordToFinishedReq {
  export type AsObject = {
    agentSessionSid: number,
    taskSid: number,
  }
}

export class UpdatePreviewRecordToFinishedRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePreviewRecordToFinishedRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePreviewRecordToFinishedRes): UpdatePreviewRecordToFinishedRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePreviewRecordToFinishedRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePreviewRecordToFinishedRes;
  static deserializeBinaryFromReader(message: UpdatePreviewRecordToFinishedRes, reader: jspb.BinaryReader): UpdatePreviewRecordToFinishedRes;
}

export namespace UpdatePreviewRecordToFinishedRes {
  export type AsObject = {
  }
}

export class UpdateAgentHuntGroupReq extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentHuntGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentHuntGroupReq): UpdateAgentHuntGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentHuntGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentHuntGroupReq;
  static deserializeBinaryFromReader(message: UpdateAgentHuntGroupReq, reader: jspb.BinaryReader): UpdateAgentHuntGroupReq;
}

export namespace UpdateAgentHuntGroupReq {
  export type AsObject = {
    huntGroupSid: number,
    userId: string,
  }
}

export class UpdateAgentHuntGroupRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentHuntGroupRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentHuntGroupRes): UpdateAgentHuntGroupRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentHuntGroupRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentHuntGroupRes;
  static deserializeBinaryFromReader(message: UpdateAgentHuntGroupRes, reader: jspb.BinaryReader): UpdateAgentHuntGroupRes;
}

export namespace UpdateAgentHuntGroupRes {
  export type AsObject = {
  }
}

export class MultiAgentHuntGroupAssignmentReq extends jspb.Message {
  clearUserIdsList(): void;
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  addUserIds(value: string, index?: number): string;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiAgentHuntGroupAssignmentReq.AsObject;
  static toObject(includeInstance: boolean, msg: MultiAgentHuntGroupAssignmentReq): MultiAgentHuntGroupAssignmentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiAgentHuntGroupAssignmentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiAgentHuntGroupAssignmentReq;
  static deserializeBinaryFromReader(message: MultiAgentHuntGroupAssignmentReq, reader: jspb.BinaryReader): MultiAgentHuntGroupAssignmentReq;
}

export namespace MultiAgentHuntGroupAssignmentReq {
  export type AsObject = {
    userIdsList: Array<string>,
    huntGroupSid: number,
  }
}

export class MultiAgentHuntGroupAssignmentRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiAgentHuntGroupAssignmentRes.AsObject;
  static toObject(includeInstance: boolean, msg: MultiAgentHuntGroupAssignmentRes): MultiAgentHuntGroupAssignmentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiAgentHuntGroupAssignmentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiAgentHuntGroupAssignmentRes;
  static deserializeBinaryFromReader(message: MultiAgentHuntGroupAssignmentRes, reader: jspb.BinaryReader): MultiAgentHuntGroupAssignmentRes;
}

export namespace MultiAgentHuntGroupAssignmentRes {
  export type AsObject = {
  }
}

export class GetAgentProfileReq extends jspb.Message {
  getAgentSid(): number;
  setAgentSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentProfileReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentProfileReq): GetAgentProfileReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentProfileReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentProfileReq;
  static deserializeBinaryFromReader(message: GetAgentProfileReq, reader: jspb.BinaryReader): GetAgentProfileReq;
}

export namespace GetAgentProfileReq {
  export type AsObject = {
    agentSid: number,
  }
}

export class AgentProfile extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentProfile.AsObject;
  static toObject(includeInstance: boolean, msg: AgentProfile): AgentProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentProfile;
  static deserializeBinaryFromReader(message: AgentProfile, reader: jspb.BinaryReader): AgentProfile;
}

export namespace AgentProfile {
  export type AsObject = {
    firstName: string,
    lastName: string,
  }
}

export class RecalculateBillingReq extends jspb.Message {
  getMonth(): api_commons_p3api_pb.RecalculateBillingMonthMap[keyof api_commons_p3api_pb.RecalculateBillingMonthMap];
  setMonth(value: api_commons_p3api_pb.RecalculateBillingMonthMap[keyof api_commons_p3api_pb.RecalculateBillingMonthMap]): void;

  clearTypesList(): void;
  getTypesList(): Array<api_commons_p3api_pb.RecalculateBillingTypeMap[keyof api_commons_p3api_pb.RecalculateBillingTypeMap]>;
  setTypesList(value: Array<api_commons_p3api_pb.RecalculateBillingTypeMap[keyof api_commons_p3api_pb.RecalculateBillingTypeMap]>): void;
  addTypes(value: api_commons_p3api_pb.RecalculateBillingTypeMap[keyof api_commons_p3api_pb.RecalculateBillingTypeMap], index?: number): api_commons_p3api_pb.RecalculateBillingTypeMap[keyof api_commons_p3api_pb.RecalculateBillingTypeMap];

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecalculateBillingReq.AsObject;
  static toObject(includeInstance: boolean, msg: RecalculateBillingReq): RecalculateBillingReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecalculateBillingReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecalculateBillingReq;
  static deserializeBinaryFromReader(message: RecalculateBillingReq, reader: jspb.BinaryReader): RecalculateBillingReq;
}

export namespace RecalculateBillingReq {
  export type AsObject = {
    month: api_commons_p3api_pb.RecalculateBillingMonthMap[keyof api_commons_p3api_pb.RecalculateBillingMonthMap],
    typesList: Array<api_commons_p3api_pb.RecalculateBillingTypeMap[keyof api_commons_p3api_pb.RecalculateBillingTypeMap]>,
    orgId: string,
  }
}

export class RecalculateBillingRes extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<RecalculateBillingRes.Result>;
  setResultsList(value: Array<RecalculateBillingRes.Result>): void;
  addResults(value?: RecalculateBillingRes.Result, index?: number): RecalculateBillingRes.Result;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecalculateBillingRes.AsObject;
  static toObject(includeInstance: boolean, msg: RecalculateBillingRes): RecalculateBillingRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecalculateBillingRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecalculateBillingRes;
  static deserializeBinaryFromReader(message: RecalculateBillingRes, reader: jspb.BinaryReader): RecalculateBillingRes;
}

export namespace RecalculateBillingRes {
  export type AsObject = {
    resultsList: Array<RecalculateBillingRes.Result.AsObject>,
  }

  export class Result extends jspb.Message {
    getType(): api_commons_p3api_pb.RecalculateBillingTypeMap[keyof api_commons_p3api_pb.RecalculateBillingTypeMap];
    setType(value: api_commons_p3api_pb.RecalculateBillingTypeMap[keyof api_commons_p3api_pb.RecalculateBillingTypeMap]): void;

    hasUpdated(): boolean;
    clearUpdated(): void;
    getUpdated(): number;
    setUpdated(value: number): void;

    hasErrorMessage(): boolean;
    clearErrorMessage(): void;
    getErrorMessage(): string;
    setErrorMessage(value: string): void;

    getResultTypeCase(): Result.ResultTypeCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Result.AsObject;
    static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Result;
    static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
  }

  export namespace Result {
    export type AsObject = {
      type: api_commons_p3api_pb.RecalculateBillingTypeMap[keyof api_commons_p3api_pb.RecalculateBillingTypeMap],
      updated: number,
      errorMessage: string,
    }

    export enum ResultTypeCase {
      RESULT_TYPE_NOT_SET = 0,
      UPDATED = 2,
      ERROR_MESSAGE = 3,
    }
  }
}

export class ListOutboundBroadcastTemplateDataReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOutboundBroadcastTemplateDataReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListOutboundBroadcastTemplateDataReq): ListOutboundBroadcastTemplateDataReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOutboundBroadcastTemplateDataReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOutboundBroadcastTemplateDataReq;
  static deserializeBinaryFromReader(message: ListOutboundBroadcastTemplateDataReq, reader: jspb.BinaryReader): ListOutboundBroadcastTemplateDataReq;
}

export namespace ListOutboundBroadcastTemplateDataReq {
  export type AsObject = {
  }
}

export class ListOutboundBroadcastTemplateDataRes extends jspb.Message {
  clearTemplatesList(): void;
  getTemplatesList(): Array<ListOutboundBroadcastTemplateDataRes.Data>;
  setTemplatesList(value: Array<ListOutboundBroadcastTemplateDataRes.Data>): void;
  addTemplates(value?: ListOutboundBroadcastTemplateDataRes.Data, index?: number): ListOutboundBroadcastTemplateDataRes.Data;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOutboundBroadcastTemplateDataRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListOutboundBroadcastTemplateDataRes): ListOutboundBroadcastTemplateDataRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOutboundBroadcastTemplateDataRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOutboundBroadcastTemplateDataRes;
  static deserializeBinaryFromReader(message: ListOutboundBroadcastTemplateDataRes, reader: jspb.BinaryReader): ListOutboundBroadcastTemplateDataRes;
}

export namespace ListOutboundBroadcastTemplateDataRes {
  export type AsObject = {
    templatesList: Array<ListOutboundBroadcastTemplateDataRes.Data.AsObject>,
  }

  export class Data extends jspb.Message {
    getTemplateNumber(): number;
    setTemplateNumber(value: number): void;

    getTemplateName(): string;
    setTemplateName(value: string): void;

    getTemplateType(): api_commons_broadcasts_pb.TemplateType.EnumMap[keyof api_commons_broadcasts_pb.TemplateType.EnumMap];
    setTemplateType(value: api_commons_broadcasts_pb.TemplateType.EnumMap[keyof api_commons_broadcasts_pb.TemplateType.EnumMap]): void;

    hasModifyDate(): boolean;
    clearModifyDate(): void;
    getModifyDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifyDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Data.AsObject;
    static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Data;
    static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
  }

  export namespace Data {
    export type AsObject = {
      templateNumber: number,
      templateName: string,
      templateType: api_commons_broadcasts_pb.TemplateType.EnumMap[keyof api_commons_broadcasts_pb.TemplateType.EnumMap],
      modifyDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }
}

export class MultiAgentSkillAssignmentReq extends jspb.Message {
  clearUserIdsList(): void;
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  addUserIds(value: string, index?: number): string;

  clearSkillsList(): void;
  getSkillsList(): Array<SkillUpdate>;
  setSkillsList(value: Array<SkillUpdate>): void;
  addSkills(value?: SkillUpdate, index?: number): SkillUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiAgentSkillAssignmentReq.AsObject;
  static toObject(includeInstance: boolean, msg: MultiAgentSkillAssignmentReq): MultiAgentSkillAssignmentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiAgentSkillAssignmentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiAgentSkillAssignmentReq;
  static deserializeBinaryFromReader(message: MultiAgentSkillAssignmentReq, reader: jspb.BinaryReader): MultiAgentSkillAssignmentReq;
}

export namespace MultiAgentSkillAssignmentReq {
  export type AsObject = {
    userIdsList: Array<string>,
    skillsList: Array<SkillUpdate.AsObject>,
  }
}

export class MultiAgentSkillAssignmentRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiAgentSkillAssignmentRes.AsObject;
  static toObject(includeInstance: boolean, msg: MultiAgentSkillAssignmentRes): MultiAgentSkillAssignmentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiAgentSkillAssignmentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiAgentSkillAssignmentRes;
  static deserializeBinaryFromReader(message: MultiAgentSkillAssignmentRes, reader: jspb.BinaryReader): MultiAgentSkillAssignmentRes;
}

export namespace MultiAgentSkillAssignmentRes {
  export type AsObject = {
  }
}

export class MultiAgentSkillUnassignmentReq extends jspb.Message {
  clearUserIdsList(): void;
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  addUserIds(value: string, index?: number): string;

  clearSkillSidsList(): void;
  getSkillSidsList(): Array<number>;
  setSkillSidsList(value: Array<number>): void;
  addSkillSids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiAgentSkillUnassignmentReq.AsObject;
  static toObject(includeInstance: boolean, msg: MultiAgentSkillUnassignmentReq): MultiAgentSkillUnassignmentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiAgentSkillUnassignmentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiAgentSkillUnassignmentReq;
  static deserializeBinaryFromReader(message: MultiAgentSkillUnassignmentReq, reader: jspb.BinaryReader): MultiAgentSkillUnassignmentReq;
}

export namespace MultiAgentSkillUnassignmentReq {
  export type AsObject = {
    userIdsList: Array<string>,
    skillSidsList: Array<number>,
  }
}

export class MultiAgentSkillUnassignmentRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiAgentSkillUnassignmentRes.AsObject;
  static toObject(includeInstance: boolean, msg: MultiAgentSkillUnassignmentRes): MultiAgentSkillUnassignmentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiAgentSkillUnassignmentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiAgentSkillUnassignmentRes;
  static deserializeBinaryFromReader(message: MultiAgentSkillUnassignmentRes, reader: jspb.BinaryReader): MultiAgentSkillUnassignmentRes;
}

export namespace MultiAgentSkillUnassignmentRes {
  export type AsObject = {
  }
}

export class ListMAMAgentHuntGroupsByClientSidReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMAMAgentHuntGroupsByClientSidReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListMAMAgentHuntGroupsByClientSidReq): ListMAMAgentHuntGroupsByClientSidReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMAMAgentHuntGroupsByClientSidReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMAMAgentHuntGroupsByClientSidReq;
  static deserializeBinaryFromReader(message: ListMAMAgentHuntGroupsByClientSidReq, reader: jspb.BinaryReader): ListMAMAgentHuntGroupsByClientSidReq;
}

export namespace ListMAMAgentHuntGroupsByClientSidReq {
  export type AsObject = {
  }
}

export class ListMAMAgentHuntGroupsByClientSidRes extends jspb.Message {
  clearHuntGroupList(): void;
  getHuntGroupList(): Array<HuntGroup>;
  setHuntGroupList(value: Array<HuntGroup>): void;
  addHuntGroup(value?: HuntGroup, index?: number): HuntGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMAMAgentHuntGroupsByClientSidRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListMAMAgentHuntGroupsByClientSidRes): ListMAMAgentHuntGroupsByClientSidRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMAMAgentHuntGroupsByClientSidRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMAMAgentHuntGroupsByClientSidRes;
  static deserializeBinaryFromReader(message: ListMAMAgentHuntGroupsByClientSidRes, reader: jspb.BinaryReader): ListMAMAgentHuntGroupsByClientSidRes;
}

export namespace ListMAMAgentHuntGroupsByClientSidRes {
  export type AsObject = {
    huntGroupList: Array<HuntGroup.AsObject>,
  }
}

export class UpdateAgentSkillsReq extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  clearSkillsList(): void;
  getSkillsList(): Array<SkillUpdate>;
  setSkillsList(value: Array<SkillUpdate>): void;
  addSkills(value?: SkillUpdate, index?: number): SkillUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentSkillsReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentSkillsReq): UpdateAgentSkillsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentSkillsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentSkillsReq;
  static deserializeBinaryFromReader(message: UpdateAgentSkillsReq, reader: jspb.BinaryReader): UpdateAgentSkillsReq;
}

export namespace UpdateAgentSkillsReq {
  export type AsObject = {
    userId: string,
    skillsList: Array<SkillUpdate.AsObject>,
  }
}

export class SkillUpdate extends jspb.Message {
  getSkillSid(): number;
  setSkillSid(value: number): void;

  getLevel(): number;
  setLevel(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkillUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: SkillUpdate): SkillUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SkillUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkillUpdate;
  static deserializeBinaryFromReader(message: SkillUpdate, reader: jspb.BinaryReader): SkillUpdate;
}

export namespace SkillUpdate {
  export type AsObject = {
    skillSid: number,
    level: number,
  }
}

export class UpdateAgentSkillsRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentSkillsRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentSkillsRes): UpdateAgentSkillsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentSkillsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentSkillsRes;
  static deserializeBinaryFromReader(message: UpdateAgentSkillsRes, reader: jspb.BinaryReader): UpdateAgentSkillsRes;
}

export namespace UpdateAgentSkillsRes {
  export type AsObject = {
  }
}

export class ListTtsVoicesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTtsVoicesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListTtsVoicesReq): ListTtsVoicesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTtsVoicesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTtsVoicesReq;
  static deserializeBinaryFromReader(message: ListTtsVoicesReq, reader: jspb.BinaryReader): ListTtsVoicesReq;
}

export namespace ListTtsVoicesReq {
  export type AsObject = {
  }
}

export class ListTtsVoicesRes extends jspb.Message {
  clearVoicesList(): void;
  getVoicesList(): Array<TtsVoice>;
  setVoicesList(value: Array<TtsVoice>): void;
  addVoices(value?: TtsVoice, index?: number): TtsVoice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTtsVoicesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListTtsVoicesRes): ListTtsVoicesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTtsVoicesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTtsVoicesRes;
  static deserializeBinaryFromReader(message: ListTtsVoicesRes, reader: jspb.BinaryReader): ListTtsVoicesRes;
}

export namespace ListTtsVoicesRes {
  export type AsObject = {
    voicesList: Array<TtsVoice.AsObject>,
  }
}

export class TtsVoice extends jspb.Message {
  getTtsVoiceSid(): number;
  setTtsVoiceSid(value: number): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getActualName(): string;
  setActualName(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TtsVoice.AsObject;
  static toObject(includeInstance: boolean, msg: TtsVoice): TtsVoice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TtsVoice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TtsVoice;
  static deserializeBinaryFromReader(message: TtsVoice, reader: jspb.BinaryReader): TtsVoice;
}

export namespace TtsVoice {
  export type AsObject = {
    ttsVoiceSid: number,
    displayName: string,
    actualName: string,
    port: number,
  }
}

export class CreateTtsVoiceReq extends jspb.Message {
  getActualName(): string;
  setActualName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTtsVoiceReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTtsVoiceReq): CreateTtsVoiceReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTtsVoiceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTtsVoiceReq;
  static deserializeBinaryFromReader(message: CreateTtsVoiceReq, reader: jspb.BinaryReader): CreateTtsVoiceReq;
}

export namespace CreateTtsVoiceReq {
  export type AsObject = {
    actualName: string,
    displayName: string,
    port: number,
  }
}

export class CreateTtsVoiceRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTtsVoiceRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTtsVoiceRes): CreateTtsVoiceRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTtsVoiceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTtsVoiceRes;
  static deserializeBinaryFromReader(message: CreateTtsVoiceRes, reader: jspb.BinaryReader): CreateTtsVoiceRes;
}

export namespace CreateTtsVoiceRes {
  export type AsObject = {
  }
}

export class DeleteTtsVoiceReq extends jspb.Message {
  getTtsVoiceSid(): number;
  setTtsVoiceSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTtsVoiceReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTtsVoiceReq): DeleteTtsVoiceReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTtsVoiceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTtsVoiceReq;
  static deserializeBinaryFromReader(message: DeleteTtsVoiceReq, reader: jspb.BinaryReader): DeleteTtsVoiceReq;
}

export namespace DeleteTtsVoiceReq {
  export type AsObject = {
    ttsVoiceSid: number,
  }
}

export class DeleteTtsVoiceRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTtsVoiceRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTtsVoiceRes): DeleteTtsVoiceRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTtsVoiceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTtsVoiceRes;
  static deserializeBinaryFromReader(message: DeleteTtsVoiceRes, reader: jspb.BinaryReader): DeleteTtsVoiceRes;
}

export namespace DeleteTtsVoiceRes {
  export type AsObject = {
  }
}

export class CustomDataKey extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getClientPropertiesSid(): number;
  setClientPropertiesSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomDataKey.AsObject;
  static toObject(includeInstance: boolean, msg: CustomDataKey): CustomDataKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomDataKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomDataKey;
  static deserializeBinaryFromReader(message: CustomDataKey, reader: jspb.BinaryReader): CustomDataKey;
}

export namespace CustomDataKey {
  export type AsObject = {
    name: string,
    value: string,
    clientPropertiesSid: number,
  }
}

export class ListCustomDataKeysReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomDataKeysReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomDataKeysReq): ListCustomDataKeysReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCustomDataKeysReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomDataKeysReq;
  static deserializeBinaryFromReader(message: ListCustomDataKeysReq, reader: jspb.BinaryReader): ListCustomDataKeysReq;
}

export namespace ListCustomDataKeysReq {
  export type AsObject = {
  }
}

export class ListCustomDataKeysRes extends jspb.Message {
  clearDataKeysList(): void;
  getDataKeysList(): Array<CustomDataKey>;
  setDataKeysList(value: Array<CustomDataKey>): void;
  addDataKeys(value?: CustomDataKey, index?: number): CustomDataKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomDataKeysRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomDataKeysRes): ListCustomDataKeysRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCustomDataKeysRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomDataKeysRes;
  static deserializeBinaryFromReader(message: ListCustomDataKeysRes, reader: jspb.BinaryReader): ListCustomDataKeysRes;
}

export namespace ListCustomDataKeysRes {
  export type AsObject = {
    dataKeysList: Array<CustomDataKey.AsObject>,
  }
}

export class CreateCustomDataKeyReq extends jspb.Message {
  hasDataKey(): boolean;
  clearDataKey(): void;
  getDataKey(): CustomDataKey | undefined;
  setDataKey(value?: CustomDataKey): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomDataKeyReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomDataKeyReq): CreateCustomDataKeyReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCustomDataKeyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomDataKeyReq;
  static deserializeBinaryFromReader(message: CreateCustomDataKeyReq, reader: jspb.BinaryReader): CreateCustomDataKeyReq;
}

export namespace CreateCustomDataKeyReq {
  export type AsObject = {
    dataKey?: CustomDataKey.AsObject,
  }
}

export class CreateCustomDataKeyRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomDataKeyRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomDataKeyRes): CreateCustomDataKeyRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCustomDataKeyRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomDataKeyRes;
  static deserializeBinaryFromReader(message: CreateCustomDataKeyRes, reader: jspb.BinaryReader): CreateCustomDataKeyRes;
}

export namespace CreateCustomDataKeyRes {
  export type AsObject = {
  }
}

export class DeleteCustomDataKeyReq extends jspb.Message {
  getClientPropertiesSid(): number;
  setClientPropertiesSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomDataKeyReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomDataKeyReq): DeleteCustomDataKeyReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCustomDataKeyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomDataKeyReq;
  static deserializeBinaryFromReader(message: DeleteCustomDataKeyReq, reader: jspb.BinaryReader): DeleteCustomDataKeyReq;
}

export namespace DeleteCustomDataKeyReq {
  export type AsObject = {
    clientPropertiesSid: number,
  }
}

export class DeleteCustomDataKeyRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomDataKeyRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomDataKeyRes): DeleteCustomDataKeyRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCustomDataKeyRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomDataKeyRes;
  static deserializeBinaryFromReader(message: DeleteCustomDataKeyRes, reader: jspb.BinaryReader): DeleteCustomDataKeyRes;
}

export namespace DeleteCustomDataKeyRes {
  export type AsObject = {
  }
}

export class UpdateCustomDataKeyReq extends jspb.Message {
  hasDatakey(): boolean;
  clearDatakey(): void;
  getDatakey(): CustomDataKey | undefined;
  setDatakey(value?: CustomDataKey): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomDataKeyReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomDataKeyReq): UpdateCustomDataKeyReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCustomDataKeyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomDataKeyReq;
  static deserializeBinaryFromReader(message: UpdateCustomDataKeyReq, reader: jspb.BinaryReader): UpdateCustomDataKeyReq;
}

export namespace UpdateCustomDataKeyReq {
  export type AsObject = {
    datakey?: CustomDataKey.AsObject,
  }
}

export class UpdateCustomDataKeyRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomDataKeyRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomDataKeyRes): UpdateCustomDataKeyRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCustomDataKeyRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomDataKeyRes;
  static deserializeBinaryFromReader(message: UpdateCustomDataKeyRes, reader: jspb.BinaryReader): UpdateCustomDataKeyRes;
}

export namespace UpdateCustomDataKeyRes {
  export type AsObject = {
  }
}

export class Extension extends jspb.Message {
  getPbxExtensionSid(): number;
  setPbxExtensionSid(value: number): void;

  getExtensionNumber(): string;
  setExtensionNumber(value: string): void;

  hasAgent(): boolean;
  clearAgent(): void;
  getAgent(): Extension.Agent | undefined;
  setAgent(value?: Extension.Agent): void;

  hasHuntGroup(): boolean;
  clearHuntGroup(): void;
  getHuntGroup(): Extension.HuntGroup | undefined;
  setHuntGroup(value?: Extension.HuntGroup): void;

  getAgentAccess(): boolean;
  setAgentAccess(value: boolean): void;

  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): Extension.Email | undefined;
  setEmail(value?: Extension.Email): void;

  getGreeting(): string;
  setGreeting(value: string): void;

  getHasGreeting(): boolean;
  setHasGreeting(value: boolean): void;

  getUnheardMessages(): number;
  setUnheardMessages(value: number): void;

  getTotalMessages(): number;
  setTotalMessages(value: number): void;

  getExtensionTypeCase(): Extension.ExtensionTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Extension.AsObject;
  static toObject(includeInstance: boolean, msg: Extension): Extension.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Extension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Extension;
  static deserializeBinaryFromReader(message: Extension, reader: jspb.BinaryReader): Extension;
}

export namespace Extension {
  export type AsObject = {
    pbxExtensionSid: number,
    extensionNumber: string,
    agent?: Extension.Agent.AsObject,
    huntGroup?: Extension.HuntGroup.AsObject,
    agentAccess: boolean,
    email?: Extension.Email.AsObject,
    greeting: string,
    hasGreeting: boolean,
    unheardMessages: number,
    totalMessages: number,
  }

  export class Agent extends jspb.Message {
    getFirstName(): string;
    setFirstName(value: string): void;

    getLastName(): string;
    setLastName(value: string): void;

    getUserId(): string;
    setUserId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Agent.AsObject;
    static toObject(includeInstance: boolean, msg: Agent): Agent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Agent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Agent;
    static deserializeBinaryFromReader(message: Agent, reader: jspb.BinaryReader): Agent;
  }

  export namespace Agent {
    export type AsObject = {
      firstName: string,
      lastName: string,
      userId: string,
    }
  }

  export class HuntGroup extends jspb.Message {
    getHuntGroupSid(): number;
    setHuntGroupSid(value: number): void;

    getHuntGroupName(): string;
    setHuntGroupName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HuntGroup.AsObject;
    static toObject(includeInstance: boolean, msg: HuntGroup): HuntGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HuntGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HuntGroup;
    static deserializeBinaryFromReader(message: HuntGroup, reader: jspb.BinaryReader): HuntGroup;
  }

  export namespace HuntGroup {
    export type AsObject = {
      huntGroupSid: number,
      huntGroupName: string,
    }
  }

  export class Email extends jspb.Message {
    getSubject(): string;
    setSubject(value: string): void;

    getBody(): string;
    setBody(value: string): void;

    clearAddressesList(): void;
    getAddressesList(): Array<string>;
    setAddressesList(value: Array<string>): void;
    addAddresses(value: string, index?: number): string;

    getAttachVm(): boolean;
    setAttachVm(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Email.AsObject;
    static toObject(includeInstance: boolean, msg: Email): Email.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Email, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Email;
    static deserializeBinaryFromReader(message: Email, reader: jspb.BinaryReader): Email;
  }

  export namespace Email {
    export type AsObject = {
      subject: string,
      body: string,
      addressesList: Array<string>,
      attachVm: boolean,
    }
  }

  export enum ExtensionTypeCase {
    EXTENSION_TYPE_NOT_SET = 0,
    AGENT = 3,
    HUNT_GROUP = 4,
  }
}

export class ListAgentExtensionsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentExtensionsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentExtensionsReq): ListAgentExtensionsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentExtensionsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentExtensionsReq;
  static deserializeBinaryFromReader(message: ListAgentExtensionsReq, reader: jspb.BinaryReader): ListAgentExtensionsReq;
}

export namespace ListAgentExtensionsReq {
  export type AsObject = {
  }
}

export class ListAgentExtensionsRes extends jspb.Message {
  clearExtensionsList(): void;
  getExtensionsList(): Array<Extension>;
  setExtensionsList(value: Array<Extension>): void;
  addExtensions(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentExtensionsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentExtensionsRes): ListAgentExtensionsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentExtensionsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentExtensionsRes;
  static deserializeBinaryFromReader(message: ListAgentExtensionsRes, reader: jspb.BinaryReader): ListAgentExtensionsRes;
}

export namespace ListAgentExtensionsRes {
  export type AsObject = {
    extensionsList: Array<Extension.AsObject>,
  }
}

export class ListHuntGroupExtensionsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHuntGroupExtensionsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListHuntGroupExtensionsReq): ListHuntGroupExtensionsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListHuntGroupExtensionsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHuntGroupExtensionsReq;
  static deserializeBinaryFromReader(message: ListHuntGroupExtensionsReq, reader: jspb.BinaryReader): ListHuntGroupExtensionsReq;
}

export namespace ListHuntGroupExtensionsReq {
  export type AsObject = {
  }
}

export class ListHuntGroupExtensionsRes extends jspb.Message {
  clearExtensionsList(): void;
  getExtensionsList(): Array<Extension>;
  setExtensionsList(value: Array<Extension>): void;
  addExtensions(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHuntGroupExtensionsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListHuntGroupExtensionsRes): ListHuntGroupExtensionsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListHuntGroupExtensionsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHuntGroupExtensionsRes;
  static deserializeBinaryFromReader(message: ListHuntGroupExtensionsRes, reader: jspb.BinaryReader): ListHuntGroupExtensionsRes;
}

export namespace ListHuntGroupExtensionsRes {
  export type AsObject = {
    extensionsList: Array<Extension.AsObject>,
  }
}

export class CreateExtensionReq extends jspb.Message {
  hasExtensionMessage(): boolean;
  clearExtensionMessage(): void;
  getExtensionMessage(): Extension | undefined;
  setExtensionMessage(value?: Extension): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateExtensionReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateExtensionReq): CreateExtensionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateExtensionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateExtensionReq;
  static deserializeBinaryFromReader(message: CreateExtensionReq, reader: jspb.BinaryReader): CreateExtensionReq;
}

export namespace CreateExtensionReq {
  export type AsObject = {
    extensionMessage?: Extension.AsObject,
  }
}

export class CreateExtensionRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateExtensionRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateExtensionRes): CreateExtensionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateExtensionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateExtensionRes;
  static deserializeBinaryFromReader(message: CreateExtensionRes, reader: jspb.BinaryReader): CreateExtensionRes;
}

export namespace CreateExtensionRes {
  export type AsObject = {
  }
}

export class UpdateExtensionReq extends jspb.Message {
  hasExtensionMessage(): boolean;
  clearExtensionMessage(): void;
  getExtensionMessage(): Extension | undefined;
  setExtensionMessage(value?: Extension): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateExtensionReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateExtensionReq): UpdateExtensionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateExtensionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateExtensionReq;
  static deserializeBinaryFromReader(message: UpdateExtensionReq, reader: jspb.BinaryReader): UpdateExtensionReq;
}

export namespace UpdateExtensionReq {
  export type AsObject = {
    extensionMessage?: Extension.AsObject,
  }
}

export class UpdateExtensionRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateExtensionRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateExtensionRes): UpdateExtensionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateExtensionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateExtensionRes;
  static deserializeBinaryFromReader(message: UpdateExtensionRes, reader: jspb.BinaryReader): UpdateExtensionRes;
}

export namespace UpdateExtensionRes {
  export type AsObject = {
  }
}

export class DeleteExtensionReq extends jspb.Message {
  getPbxExtensionSid(): number;
  setPbxExtensionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteExtensionReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteExtensionReq): DeleteExtensionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteExtensionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteExtensionReq;
  static deserializeBinaryFromReader(message: DeleteExtensionReq, reader: jspb.BinaryReader): DeleteExtensionReq;
}

export namespace DeleteExtensionReq {
  export type AsObject = {
    pbxExtensionSid: number,
  }
}

export class DeleteExtensionRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteExtensionRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteExtensionRes): DeleteExtensionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteExtensionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteExtensionRes;
  static deserializeBinaryFromReader(message: DeleteExtensionRes, reader: jspb.BinaryReader): DeleteExtensionRes;
}

export namespace DeleteExtensionRes {
  export type AsObject = {
  }
}

export class GetActivityLogHistoryReq extends jspb.Message {
  getDayFilter(): number;
  setDayFilter(value: number): void;

  getUserName(): string;
  setUserName(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActivityLogHistoryReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetActivityLogHistoryReq): GetActivityLogHistoryReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetActivityLogHistoryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActivityLogHistoryReq;
  static deserializeBinaryFromReader(message: GetActivityLogHistoryReq, reader: jspb.BinaryReader): GetActivityLogHistoryReq;
}

export namespace GetActivityLogHistoryReq {
  export type AsObject = {
    dayFilter: number,
    userName: string,
    orgId: string,
  }
}

export class GetActivityLogHistoryRes extends jspb.Message {
  clearActivityLogsList(): void;
  getActivityLogsList(): Array<ActivityLog>;
  setActivityLogsList(value: Array<ActivityLog>): void;
  addActivityLogs(value?: ActivityLog, index?: number): ActivityLog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActivityLogHistoryRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetActivityLogHistoryRes): GetActivityLogHistoryRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetActivityLogHistoryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActivityLogHistoryRes;
  static deserializeBinaryFromReader(message: GetActivityLogHistoryRes, reader: jspb.BinaryReader): GetActivityLogHistoryRes;
}

export namespace GetActivityLogHistoryRes {
  export type AsObject = {
    activityLogsList: Array<ActivityLog.AsObject>,
  }
}

export class ActivityLog extends jspb.Message {
  hasUserName(): boolean;
  clearUserName(): void;
  getUserName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUserName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasOriginationIp(): boolean;
  clearOriginationIp(): void;
  getOriginationIp(): google_protobuf_wrappers_pb.StringValue | undefined;
  setOriginationIp(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasActionDate(): boolean;
  clearActionDate(): void;
  getActionDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setActionDate(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAction(): boolean;
  clearAction(): void;
  getAction(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAction(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasNotes(): boolean;
  clearNotes(): void;
  getNotes(): google_protobuf_wrappers_pb.StringValue | undefined;
  setNotes(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityLog.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityLog): ActivityLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivityLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityLog;
  static deserializeBinaryFromReader(message: ActivityLog, reader: jspb.BinaryReader): ActivityLog;
}

export namespace ActivityLog {
  export type AsObject = {
    userName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    originationIp?: google_protobuf_wrappers_pb.StringValue.AsObject,
    actionDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    action?: google_protobuf_wrappers_pb.StringValue.AsObject,
    notes?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ListSkillsReq extends jspb.Message {
  clearTypeFiltersList(): void;
  getTypeFiltersList(): Array<api_commons_wfm_pb.SkillType.EnumMap[keyof api_commons_wfm_pb.SkillType.EnumMap]>;
  setTypeFiltersList(value: Array<api_commons_wfm_pb.SkillType.EnumMap[keyof api_commons_wfm_pb.SkillType.EnumMap]>): void;
  addTypeFilters(value: api_commons_wfm_pb.SkillType.EnumMap[keyof api_commons_wfm_pb.SkillType.EnumMap], index?: number): api_commons_wfm_pb.SkillType.EnumMap[keyof api_commons_wfm_pb.SkillType.EnumMap];

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
    typeFiltersList: Array<api_commons_wfm_pb.SkillType.EnumMap[keyof api_commons_wfm_pb.SkillType.EnumMap]>,
  }
}

export class ListSkillsRes extends jspb.Message {
  clearSkillsList(): void;
  getSkillsList(): Array<P3Skill>;
  setSkillsList(value: Array<P3Skill>): void;
  addSkills(value?: P3Skill, index?: number): P3Skill;

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
    skillsList: Array<P3Skill.AsObject>,
  }
}

export class P3Skill extends jspb.Message {
  getRegion(): string;
  setRegion(value: string): void;

  getP3Id(): string;
  setP3Id(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getType(): api_commons_wfm_pb.SkillType.EnumMap[keyof api_commons_wfm_pb.SkillType.EnumMap];
  setType(value: api_commons_wfm_pb.SkillType.EnumMap[keyof api_commons_wfm_pb.SkillType.EnumMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): P3Skill.AsObject;
  static toObject(includeInstance: boolean, msg: P3Skill): P3Skill.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: P3Skill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): P3Skill;
  static deserializeBinaryFromReader(message: P3Skill, reader: jspb.BinaryReader): P3Skill;
}

export namespace P3Skill {
  export type AsObject = {
    region: string,
    p3Id: string,
    name: string,
    description: string,
    type: api_commons_wfm_pb.SkillType.EnumMap[keyof api_commons_wfm_pb.SkillType.EnumMap],
  }
}

export class ListScheduleRulesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListScheduleRulesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListScheduleRulesRequest): ListScheduleRulesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListScheduleRulesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListScheduleRulesRequest;
  static deserializeBinaryFromReader(message: ListScheduleRulesRequest, reader: jspb.BinaryReader): ListScheduleRulesRequest;
}

export namespace ListScheduleRulesRequest {
  export type AsObject = {
  }
}

export class ListScheduleRulesResult extends jspb.Message {
  clearScheduleRulesList(): void;
  getScheduleRulesList(): Array<ScheduleRule>;
  setScheduleRulesList(value: Array<ScheduleRule>): void;
  addScheduleRules(value?: ScheduleRule, index?: number): ScheduleRule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListScheduleRulesResult.AsObject;
  static toObject(includeInstance: boolean, msg: ListScheduleRulesResult): ListScheduleRulesResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListScheduleRulesResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListScheduleRulesResult;
  static deserializeBinaryFromReader(message: ListScheduleRulesResult, reader: jspb.BinaryReader): ListScheduleRulesResult;
}

export namespace ListScheduleRulesResult {
  export type AsObject = {
    scheduleRulesList: Array<ScheduleRule.AsObject>,
  }
}

export class ScheduleRule extends jspb.Message {
  getScheduleRuleSid(): number;
  setScheduleRuleSid(value: number): void;

  hasClientSid(): boolean;
  clearClientSid(): void;
  getClientSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setClientSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasRuleTimeZone(): boolean;
  clearRuleTimeZone(): void;
  getRuleTimeZone(): google_protobuf_wrappers_pb.StringValue | undefined;
  setRuleTimeZone(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleRule.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleRule): ScheduleRule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleRule;
  static deserializeBinaryFromReader(message: ScheduleRule, reader: jspb.BinaryReader): ScheduleRule;
}

export namespace ScheduleRule {
  export type AsObject = {
    scheduleRuleSid: number,
    clientSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    ruleTimeZone?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ListSmsNumbersReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSmsNumbersReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSmsNumbersReq): ListSmsNumbersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSmsNumbersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSmsNumbersReq;
  static deserializeBinaryFromReader(message: ListSmsNumbersReq, reader: jspb.BinaryReader): ListSmsNumbersReq;
}

export namespace ListSmsNumbersReq {
  export type AsObject = {
  }
}

export class ListSmsNumbersRes extends jspb.Message {
  clearSmsNumbersList(): void;
  getSmsNumbersList(): Array<api_commons_omnichannel_pb.SmsNumber>;
  setSmsNumbersList(value: Array<api_commons_omnichannel_pb.SmsNumber>): void;
  addSmsNumbers(value?: api_commons_omnichannel_pb.SmsNumber, index?: number): api_commons_omnichannel_pb.SmsNumber;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSmsNumbersRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSmsNumbersRes): ListSmsNumbersRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSmsNumbersRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSmsNumbersRes;
  static deserializeBinaryFromReader(message: ListSmsNumbersRes, reader: jspb.BinaryReader): ListSmsNumbersRes;
}

export namespace ListSmsNumbersRes {
  export type AsObject = {
    smsNumbersList: Array<api_commons_omnichannel_pb.SmsNumber.AsObject>,
  }
}

