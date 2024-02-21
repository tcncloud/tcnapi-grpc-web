// package: services.omnichannel.asm.v1alpha1
// file: services/omnichannel/asm/v1alpha1/entities.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as services_omnichannel_asm_entities_v1alpha1_session_pb from "../../../../services/omnichannel/asm/entities/v1alpha1/session_pb";

export class CreateSessionReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSessionReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSessionReq): CreateSessionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSessionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSessionReq;
  static deserializeBinaryFromReader(message: CreateSessionReq, reader: jspb.BinaryReader): CreateSessionReq;
}

export namespace CreateSessionReq {
  export type AsObject = {
  }
}

export class CreateSessionRes extends jspb.Message {
  hasAsmSession(): boolean;
  clearAsmSession(): void;
  getAsmSession(): services_omnichannel_asm_entities_v1alpha1_session_pb.AsmSession | undefined;
  setAsmSession(value?: services_omnichannel_asm_entities_v1alpha1_session_pb.AsmSession): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSessionRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSessionRes): CreateSessionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSessionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSessionRes;
  static deserializeBinaryFromReader(message: CreateSessionRes, reader: jspb.BinaryReader): CreateSessionRes;
}

export namespace CreateSessionRes {
  export type AsObject = {
    asmSession?: services_omnichannel_asm_entities_v1alpha1_session_pb.AsmSession.AsObject,
  }
}

export class EndSessionReq extends jspb.Message {
  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndSessionReq.AsObject;
  static toObject(includeInstance: boolean, msg: EndSessionReq): EndSessionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndSessionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndSessionReq;
  static deserializeBinaryFromReader(message: EndSessionReq, reader: jspb.BinaryReader): EndSessionReq;
}

export namespace EndSessionReq {
  export type AsObject = {
    asmSessionSid: number,
    reason: string,
  }
}

export class EndSessionRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndSessionRes.AsObject;
  static toObject(includeInstance: boolean, msg: EndSessionRes): EndSessionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndSessionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndSessionRes;
  static deserializeBinaryFromReader(message: EndSessionRes, reader: jspb.BinaryReader): EndSessionRes;
}

export namespace EndSessionRes {
  export type AsObject = {
  }
}

export class GetCurrentSessionReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentSessionReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentSessionReq): GetCurrentSessionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrentSessionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentSessionReq;
  static deserializeBinaryFromReader(message: GetCurrentSessionReq, reader: jspb.BinaryReader): GetCurrentSessionReq;
}

export namespace GetCurrentSessionReq {
  export type AsObject = {
  }
}

export class GetCurrentSessionRes extends jspb.Message {
  hasAsmSession(): boolean;
  clearAsmSession(): void;
  getAsmSession(): services_omnichannel_asm_entities_v1alpha1_session_pb.AsmSession | undefined;
  setAsmSession(value?: services_omnichannel_asm_entities_v1alpha1_session_pb.AsmSession): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentSessionRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentSessionRes): GetCurrentSessionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrentSessionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentSessionRes;
  static deserializeBinaryFromReader(message: GetCurrentSessionRes, reader: jspb.BinaryReader): GetCurrentSessionRes;
}

export namespace GetCurrentSessionRes {
  export type AsObject = {
    asmSession?: services_omnichannel_asm_entities_v1alpha1_session_pb.AsmSession.AsObject,
  }
}

export class EnableVoiceReq extends jspb.Message {
  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getSkillsMap(): jspb.Map<string, number>;
  clearSkillsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableVoiceReq.AsObject;
  static toObject(includeInstance: boolean, msg: EnableVoiceReq): EnableVoiceReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnableVoiceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableVoiceReq;
  static deserializeBinaryFromReader(message: EnableVoiceReq, reader: jspb.BinaryReader): EnableVoiceReq;
}

export namespace EnableVoiceReq {
  export type AsObject = {
    asmSessionSid: number,
    huntGroupSid: number,
    skillsMap: Array<[string, number]>,
  }
}

export class EnableVoiceRes extends jspb.Message {
  hasVoiceSession(): boolean;
  clearVoiceSession(): void;
  getVoiceSession(): services_omnichannel_asm_entities_v1alpha1_session_pb.VoiceSession | undefined;
  setVoiceSession(value?: services_omnichannel_asm_entities_v1alpha1_session_pb.VoiceSession): void;

  hasVoiceRegistration(): boolean;
  clearVoiceRegistration(): void;
  getVoiceRegistration(): services_omnichannel_asm_entities_v1alpha1_session_pb.VoiceRegistration | undefined;
  setVoiceRegistration(value?: services_omnichannel_asm_entities_v1alpha1_session_pb.VoiceRegistration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableVoiceRes.AsObject;
  static toObject(includeInstance: boolean, msg: EnableVoiceRes): EnableVoiceRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnableVoiceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableVoiceRes;
  static deserializeBinaryFromReader(message: EnableVoiceRes, reader: jspb.BinaryReader): EnableVoiceRes;
}

export namespace EnableVoiceRes {
  export type AsObject = {
    voiceSession?: services_omnichannel_asm_entities_v1alpha1_session_pb.VoiceSession.AsObject,
    voiceRegistration?: services_omnichannel_asm_entities_v1alpha1_session_pb.VoiceRegistration.AsObject,
  }
}

export class DisableVoiceReq extends jspb.Message {
  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisableVoiceReq.AsObject;
  static toObject(includeInstance: boolean, msg: DisableVoiceReq): DisableVoiceReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisableVoiceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisableVoiceReq;
  static deserializeBinaryFromReader(message: DisableVoiceReq, reader: jspb.BinaryReader): DisableVoiceReq;
}

export namespace DisableVoiceReq {
  export type AsObject = {
    asmSessionSid: number,
  }
}

export class DisableVoiceRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisableVoiceRes.AsObject;
  static toObject(includeInstance: boolean, msg: DisableVoiceRes): DisableVoiceRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisableVoiceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisableVoiceRes;
  static deserializeBinaryFromReader(message: DisableVoiceRes, reader: jspb.BinaryReader): DisableVoiceRes;
}

export namespace DisableVoiceRes {
  export type AsObject = {
  }
}

export class ListAsmUserDetailsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAsmUserDetailsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListAsmUserDetailsReq): ListAsmUserDetailsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAsmUserDetailsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAsmUserDetailsReq;
  static deserializeBinaryFromReader(message: ListAsmUserDetailsReq, reader: jspb.BinaryReader): ListAsmUserDetailsReq;
}

export namespace ListAsmUserDetailsReq {
  export type AsObject = {
  }
}

export class ListAsmUserDetailsRes extends jspb.Message {
  clearSessionsList(): void;
  getSessionsList(): Array<services_omnichannel_asm_entities_v1alpha1_session_pb.ListAsmUserDetails>;
  setSessionsList(value: Array<services_omnichannel_asm_entities_v1alpha1_session_pb.ListAsmUserDetails>): void;
  addSessions(value?: services_omnichannel_asm_entities_v1alpha1_session_pb.ListAsmUserDetails, index?: number): services_omnichannel_asm_entities_v1alpha1_session_pb.ListAsmUserDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAsmUserDetailsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListAsmUserDetailsRes): ListAsmUserDetailsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAsmUserDetailsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAsmUserDetailsRes;
  static deserializeBinaryFromReader(message: ListAsmUserDetailsRes, reader: jspb.BinaryReader): ListAsmUserDetailsRes;
}

export namespace ListAsmUserDetailsRes {
  export type AsObject = {
    sessionsList: Array<services_omnichannel_asm_entities_v1alpha1_session_pb.ListAsmUserDetails.AsObject>,
  }
}

