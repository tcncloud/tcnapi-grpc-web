// package: services.omnichannel.asm.entities.v1alpha1
// file: services/omnichannel/asm/entities/v1alpha1/session.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class AsmSession extends jspb.Message {
  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  hasAsmSessionStart(): boolean;
  clearAsmSessionStart(): void;
  getAsmSessionStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAsmSessionStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasAsmSessionEnd(): boolean;
  clearAsmSessionEnd(): void;
  getAsmSessionEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAsmSessionEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasVoiceSession(): boolean;
  clearVoiceSession(): void;
  getVoiceSession(): VoiceSession | undefined;
  setVoiceSession(value?: VoiceSession): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsmSession.AsObject;
  static toObject(includeInstance: boolean, msg: AsmSession): AsmSession.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AsmSession, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsmSession;
  static deserializeBinaryFromReader(message: AsmSession, reader: jspb.BinaryReader): AsmSession;
}

export namespace AsmSession {
  export type AsObject = {
    asmSessionSid: number,
    asmSessionStart?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    asmSessionEnd?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    voiceSession?: VoiceSession.AsObject,
  }
}

export class VoiceSession extends jspb.Message {
  getVoiceSessionSid(): number;
  setVoiceSessionSid(value: number): void;

  hasVoiceSessionStart(): boolean;
  clearVoiceSessionStart(): void;
  getVoiceSessionStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setVoiceSessionStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasVoiceSessionEnd(): boolean;
  clearVoiceSessionEnd(): void;
  getVoiceSessionEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setVoiceSessionEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoiceSession.AsObject;
  static toObject(includeInstance: boolean, msg: VoiceSession): VoiceSession.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VoiceSession, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoiceSession;
  static deserializeBinaryFromReader(message: VoiceSession, reader: jspb.BinaryReader): VoiceSession;
}

export namespace VoiceSession {
  export type AsObject = {
    voiceSessionSid: number,
    voiceSessionStart?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    voiceSessionEnd?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class VoiceRegistration extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getDialUrl(): string;
  setDialUrl(value: string): void;

  getPstnPhone(): string;
  setPstnPhone(value: string): void;

  getDefaultTimeZone(): string;
  setDefaultTimeZone(value: string): void;

  getExpirationTimestamp(): number;
  setExpirationTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoiceRegistration.AsObject;
  static toObject(includeInstance: boolean, msg: VoiceRegistration): VoiceRegistration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VoiceRegistration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoiceRegistration;
  static deserializeBinaryFromReader(message: VoiceRegistration, reader: jspb.BinaryReader): VoiceRegistration;
}

export namespace VoiceRegistration {
  export type AsObject = {
    username: string,
    password: string,
    dialUrl: string,
    pstnPhone: string,
    defaultTimeZone: string,
    expirationTimestamp: number,
  }
}

export class ListAsmUserDetails extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAsmUserDetails.AsObject;
  static toObject(includeInstance: boolean, msg: ListAsmUserDetails): ListAsmUserDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAsmUserDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAsmUserDetails;
  static deserializeBinaryFromReader(message: ListAsmUserDetails, reader: jspb.BinaryReader): ListAsmUserDetails;
}

export namespace ListAsmUserDetails {
  export type AsObject = {
  }
}

