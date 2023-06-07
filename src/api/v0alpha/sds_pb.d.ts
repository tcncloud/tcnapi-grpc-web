// package: api.v0alpha
// file: api/v0alpha/sds.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../annotations/authz_pb";
import * as api_commons_acd_pb from "../../api/commons/acd_pb";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetAgentResponseDataReq extends jspb.Message {
  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentResponseDataReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentResponseDataReq): GetAgentResponseDataReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentResponseDataReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentResponseDataReq;
  static deserializeBinaryFromReader(message: GetAgentResponseDataReq, reader: jspb.BinaryReader): GetAgentResponseDataReq;
}

export namespace GetAgentResponseDataReq {
  export type AsObject = {
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
  }
}

export class GetAgentResponseDataRes extends jspb.Message {
  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getResponsesMap(): jspb.Map<string, string>;
  clearResponsesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentResponseDataRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentResponseDataRes): GetAgentResponseDataRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentResponseDataRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentResponseDataRes;
  static deserializeBinaryFromReader(message: GetAgentResponseDataRes, reader: jspb.BinaryReader): GetAgentResponseDataRes;
}

export namespace GetAgentResponseDataRes {
  export type AsObject = {
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    responsesMap: Array<[string, string]>,
  }
}

export class GetCallReq extends jspb.Message {
  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCallReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCallReq): GetCallReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCallReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCallReq;
  static deserializeBinaryFromReader(message: GetCallReq, reader: jspb.BinaryReader): GetCallReq;
}

export namespace GetCallReq {
  export type AsObject = {
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
  }
}

export class UpdateVoicemailBoxReq extends jspb.Message {
  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getPbxExtension(): string;
  setPbxExtension(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVoicemailBoxReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVoicemailBoxReq): UpdateVoicemailBoxReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateVoicemailBoxReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVoicemailBoxReq;
  static deserializeBinaryFromReader(message: UpdateVoicemailBoxReq, reader: jspb.BinaryReader): UpdateVoicemailBoxReq;
}

export namespace UpdateVoicemailBoxReq {
  export type AsObject = {
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    pbxExtension: string,
  }
}

export class UpdateVoicemailBoxRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVoicemailBoxRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVoicemailBoxRes): UpdateVoicemailBoxRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateVoicemailBoxRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVoicemailBoxRes;
  static deserializeBinaryFromReader(message: UpdateVoicemailBoxRes, reader: jspb.BinaryReader): UpdateVoicemailBoxRes;
}

export namespace UpdateVoicemailBoxRes {
  export type AsObject = {
  }
}

export class CallObject extends jspb.Message {
  getOid(): string;
  setOid(value: string): void;

  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getUpdated(): number;
  setUpdated(value: number): void;

  getSkillsMap(): jspb.Map<string, boolean>;
  clearSkillsMap(): void;
  getRecordingFile(): string;
  setRecordingFile(value: string): void;

  hasUpdatedDate(): boolean;
  clearUpdatedDate(): void;
  getUpdatedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSrcNumber(): string;
  setSrcNumber(value: string): void;

  getDstNumber(): string;
  setDstNumber(value: string): void;

  getCallerIdName(): string;
  setCallerIdName(value: string): void;

  getAgentWorker(): string;
  setAgentWorker(value: string): void;

  clearEventsList(): void;
  getEventsList(): Array<string>;
  setEventsList(value: Array<string>): void;
  addEvents(value: string, index?: number): string;

  getCallData(): string;
  setCallData(value: string): void;

  getAgentResponseDataMap(): jspb.Map<string, string>;
  clearAgentResponseDataMap(): void;
  getRecorded(): boolean;
  setRecorded(value: boolean): void;

  getConnected(): boolean;
  setConnected(value: boolean): void;

  getSuspended(): boolean;
  setSuspended(value: boolean): void;

  getDisconnectReason(): string;
  setDisconnectReason(value: string): void;

  getVoicemailed(): boolean;
  setVoicemailed(value: boolean): void;

  getVoicemailBox(): string;
  setVoicemailBox(value: string): void;

  getOriginated(): string;
  setOriginated(value: string): void;

  getFolder(): string;
  setFolder(value: string): void;

  getRtpInfo(): string;
  setRtpInfo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallObject.AsObject;
  static toObject(includeInstance: boolean, msg: CallObject): CallObject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallObject;
  static deserializeBinaryFromReader(message: CallObject, reader: jspb.BinaryReader): CallObject;
}

export namespace CallObject {
  export type AsObject = {
    oid: string,
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    updated: number,
    skillsMap: Array<[string, boolean]>,
    recordingFile: string,
    updatedDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    srcNumber: string,
    dstNumber: string,
    callerIdName: string,
    agentWorker: string,
    eventsList: Array<string>,
    callData: string,
    agentResponseDataMap: Array<[string, string]>,
    recorded: boolean,
    connected: boolean,
    suspended: boolean,
    disconnectReason: string,
    voicemailed: boolean,
    voicemailBox: string,
    originated: string,
    folder: string,
    rtpInfo: string,
  }
}

export class UpdateAgentResponseDataReq extends jspb.Message {
  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getResponsesMap(): jspb.Map<string, string>;
  clearResponsesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentResponseDataReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentResponseDataReq): UpdateAgentResponseDataReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentResponseDataReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentResponseDataReq;
  static deserializeBinaryFromReader(message: UpdateAgentResponseDataReq, reader: jspb.BinaryReader): UpdateAgentResponseDataReq;
}

export namespace UpdateAgentResponseDataReq {
  export type AsObject = {
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    responsesMap: Array<[string, string]>,
  }
}

export class UpdateAgentResponseDataRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentResponseDataRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentResponseDataRes): UpdateAgentResponseDataRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentResponseDataRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentResponseDataRes;
  static deserializeBinaryFromReader(message: UpdateAgentResponseDataRes, reader: jspb.BinaryReader): UpdateAgentResponseDataRes;
}

export namespace UpdateAgentResponseDataRes {
  export type AsObject = {
  }
}

