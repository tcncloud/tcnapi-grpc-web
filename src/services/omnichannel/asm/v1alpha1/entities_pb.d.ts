// package: services.omnichannel.asm.v1alpha1
// file: services/omnichannel/asm/v1alpha1/entities.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as services_omnichannel_asm_entities_v1alpha1_session_pb from "../../../../services/omnichannel/asm/entities/v1alpha1/session_pb";

export class CreateSessionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSessionRequest): CreateSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSessionRequest;
  static deserializeBinaryFromReader(message: CreateSessionRequest, reader: jspb.BinaryReader): CreateSessionRequest;
}

export namespace CreateSessionRequest {
  export type AsObject = {
  }
}

export class CreateSessionResponse extends jspb.Message {
  hasAsmSession(): boolean;
  clearAsmSession(): void;
  getAsmSession(): services_omnichannel_asm_entities_v1alpha1_session_pb.AsmSession | undefined;
  setAsmSession(value?: services_omnichannel_asm_entities_v1alpha1_session_pb.AsmSession): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSessionResponse): CreateSessionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSessionResponse;
  static deserializeBinaryFromReader(message: CreateSessionResponse, reader: jspb.BinaryReader): CreateSessionResponse;
}

export namespace CreateSessionResponse {
  export type AsObject = {
    asmSession?: services_omnichannel_asm_entities_v1alpha1_session_pb.AsmSession.AsObject,
  }
}

export class EndSessionRequest extends jspb.Message {
  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EndSessionRequest): EndSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndSessionRequest;
  static deserializeBinaryFromReader(message: EndSessionRequest, reader: jspb.BinaryReader): EndSessionRequest;
}

export namespace EndSessionRequest {
  export type AsObject = {
    asmSessionSid: number,
    reason: string,
  }
}

export class EndSessionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EndSessionResponse): EndSessionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndSessionResponse;
  static deserializeBinaryFromReader(message: EndSessionResponse, reader: jspb.BinaryReader): EndSessionResponse;
}

export namespace EndSessionResponse {
  export type AsObject = {
  }
}

export class GetCurrentSessionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentSessionRequest): GetCurrentSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrentSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentSessionRequest;
  static deserializeBinaryFromReader(message: GetCurrentSessionRequest, reader: jspb.BinaryReader): GetCurrentSessionRequest;
}

export namespace GetCurrentSessionRequest {
  export type AsObject = {
  }
}

export class GetCurrentSessionResponse extends jspb.Message {
  hasAsmSession(): boolean;
  clearAsmSession(): void;
  getAsmSession(): services_omnichannel_asm_entities_v1alpha1_session_pb.AsmSession | undefined;
  setAsmSession(value?: services_omnichannel_asm_entities_v1alpha1_session_pb.AsmSession): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentSessionResponse): GetCurrentSessionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrentSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentSessionResponse;
  static deserializeBinaryFromReader(message: GetCurrentSessionResponse, reader: jspb.BinaryReader): GetCurrentSessionResponse;
}

export namespace GetCurrentSessionResponse {
  export type AsObject = {
    asmSession?: services_omnichannel_asm_entities_v1alpha1_session_pb.AsmSession.AsObject,
  }
}

export class EnableVoiceRequest extends jspb.Message {
  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getSkillsMap(): jspb.Map<string, number>;
  clearSkillsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableVoiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnableVoiceRequest): EnableVoiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnableVoiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableVoiceRequest;
  static deserializeBinaryFromReader(message: EnableVoiceRequest, reader: jspb.BinaryReader): EnableVoiceRequest;
}

export namespace EnableVoiceRequest {
  export type AsObject = {
    asmSessionSid: number,
    huntGroupSid: number,
    skillsMap: Array<[string, number]>,
  }
}

export class EnableVoiceResponse extends jspb.Message {
  hasVoiceSession(): boolean;
  clearVoiceSession(): void;
  getVoiceSession(): services_omnichannel_asm_entities_v1alpha1_session_pb.VoiceSession | undefined;
  setVoiceSession(value?: services_omnichannel_asm_entities_v1alpha1_session_pb.VoiceSession): void;

  hasVoiceRegistration(): boolean;
  clearVoiceRegistration(): void;
  getVoiceRegistration(): services_omnichannel_asm_entities_v1alpha1_session_pb.VoiceRegistration | undefined;
  setVoiceRegistration(value?: services_omnichannel_asm_entities_v1alpha1_session_pb.VoiceRegistration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableVoiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EnableVoiceResponse): EnableVoiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnableVoiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableVoiceResponse;
  static deserializeBinaryFromReader(message: EnableVoiceResponse, reader: jspb.BinaryReader): EnableVoiceResponse;
}

export namespace EnableVoiceResponse {
  export type AsObject = {
    voiceSession?: services_omnichannel_asm_entities_v1alpha1_session_pb.VoiceSession.AsObject,
    voiceRegistration?: services_omnichannel_asm_entities_v1alpha1_session_pb.VoiceRegistration.AsObject,
  }
}

export class DisableVoiceRequest extends jspb.Message {
  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisableVoiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DisableVoiceRequest): DisableVoiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisableVoiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisableVoiceRequest;
  static deserializeBinaryFromReader(message: DisableVoiceRequest, reader: jspb.BinaryReader): DisableVoiceRequest;
}

export namespace DisableVoiceRequest {
  export type AsObject = {
    asmSessionSid: number,
  }
}

export class DisableVoiceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisableVoiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DisableVoiceResponse): DisableVoiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisableVoiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisableVoiceResponse;
  static deserializeBinaryFromReader(message: DisableVoiceResponse, reader: jspb.BinaryReader): DisableVoiceResponse;
}

export namespace DisableVoiceResponse {
  export type AsObject = {
  }
}

export class ListAsmUserDetailsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAsmUserDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAsmUserDetailsRequest): ListAsmUserDetailsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAsmUserDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAsmUserDetailsRequest;
  static deserializeBinaryFromReader(message: ListAsmUserDetailsRequest, reader: jspb.BinaryReader): ListAsmUserDetailsRequest;
}

export namespace ListAsmUserDetailsRequest {
  export type AsObject = {
  }
}

export class ListAsmUserDetailsResponse extends jspb.Message {
  clearSessionsList(): void;
  getSessionsList(): Array<services_omnichannel_asm_entities_v1alpha1_session_pb.ListAsmUserDetails>;
  setSessionsList(value: Array<services_omnichannel_asm_entities_v1alpha1_session_pb.ListAsmUserDetails>): void;
  addSessions(value?: services_omnichannel_asm_entities_v1alpha1_session_pb.ListAsmUserDetails, index?: number): services_omnichannel_asm_entities_v1alpha1_session_pb.ListAsmUserDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAsmUserDetailsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAsmUserDetailsResponse): ListAsmUserDetailsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAsmUserDetailsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAsmUserDetailsResponse;
  static deserializeBinaryFromReader(message: ListAsmUserDetailsResponse, reader: jspb.BinaryReader): ListAsmUserDetailsResponse;
}

export namespace ListAsmUserDetailsResponse {
  export type AsObject = {
    sessionsList: Array<services_omnichannel_asm_entities_v1alpha1_session_pb.ListAsmUserDetails.AsObject>,
  }
}

