// package: api.v0alpha
// file: api/v0alpha/vmds.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../annotations/authz_pb";
import * as api_commons_acd_pb from "../../api/commons/acd_pb";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";

export class GetVoicemailMetadataReq extends jspb.Message {
  clearMailBoxesList(): void;
  getMailBoxesList(): Array<string>;
  setMailBoxesList(value: Array<string>): void;
  addMailBoxes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVoicemailMetadataReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetVoicemailMetadataReq): GetVoicemailMetadataReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVoicemailMetadataReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVoicemailMetadataReq;
  static deserializeBinaryFromReader(message: GetVoicemailMetadataReq, reader: jspb.BinaryReader): GetVoicemailMetadataReq;
}

export namespace GetVoicemailMetadataReq {
  export type AsObject = {
    mailBoxesList: Array<string>,
  }
}

export class GetVoicemailMetadataRes extends jspb.Message {
  getCallerId(): string;
  setCallerId(value: string): void;

  getCallerSid(): string;
  setCallerSid(value: string): void;

  getCallerType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallerType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getDialedNumber(): string;
  setDialedNumber(value: string): void;

  getDurationSeconds(): number;
  setDurationSeconds(value: number): void;

  getFlagRead(): boolean;
  setFlagRead(value: boolean): void;

  getMailBox(): string;
  setMailBox(value: string): void;

  getRecordingFilename(): string;
  setRecordingFilename(value: string): void;

  getRecordingStart(): number;
  setRecordingStart(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVoicemailMetadataRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetVoicemailMetadataRes): GetVoicemailMetadataRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVoicemailMetadataRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVoicemailMetadataRes;
  static deserializeBinaryFromReader(message: GetVoicemailMetadataRes, reader: jspb.BinaryReader): GetVoicemailMetadataRes;
}

export namespace GetVoicemailMetadataRes {
  export type AsObject = {
    callerId: string,
    callerSid: string,
    callerType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    dialedNumber: string,
    durationSeconds: number,
    flagRead: boolean,
    mailBox: string,
    recordingFilename: string,
    recordingStart: number,
  }
}

export class DeleteVoicemailReq extends jspb.Message {
  getMailBox(): string;
  setMailBox(value: string): void;

  getCallerSid(): string;
  setCallerSid(value: string): void;

  getCallerType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallerType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVoicemailReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVoicemailReq): DeleteVoicemailReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteVoicemailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVoicemailReq;
  static deserializeBinaryFromReader(message: DeleteVoicemailReq, reader: jspb.BinaryReader): DeleteVoicemailReq;
}

export namespace DeleteVoicemailReq {
  export type AsObject = {
    mailBox: string,
    callerSid: string,
    callerType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
  }
}

export class DeleteVoicemailRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVoicemailRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVoicemailRes): DeleteVoicemailRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteVoicemailRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVoicemailRes;
  static deserializeBinaryFromReader(message: DeleteVoicemailRes, reader: jspb.BinaryReader): DeleteVoicemailRes;
}

export namespace DeleteVoicemailRes {
  export type AsObject = {
  }
}

export class DeleteGreetingReq extends jspb.Message {
  getFilename(): string;
  setFilename(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGreetingReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGreetingReq): DeleteGreetingReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteGreetingReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGreetingReq;
  static deserializeBinaryFromReader(message: DeleteGreetingReq, reader: jspb.BinaryReader): DeleteGreetingReq;
}

export namespace DeleteGreetingReq {
  export type AsObject = {
    filename: string,
  }
}

export class DeleteGreetingRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGreetingRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGreetingRes): DeleteGreetingRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteGreetingRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGreetingRes;
  static deserializeBinaryFromReader(message: DeleteGreetingRes, reader: jspb.BinaryReader): DeleteGreetingRes;
}

export namespace DeleteGreetingRes {
  export type AsObject = {
  }
}

export class UpdateUploadNameReq extends jspb.Message {
  getCurrentFileName(): string;
  setCurrentFileName(value: string): void;

  getNewFileName(): string;
  setNewFileName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUploadNameReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUploadNameReq): UpdateUploadNameReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUploadNameReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUploadNameReq;
  static deserializeBinaryFromReader(message: UpdateUploadNameReq, reader: jspb.BinaryReader): UpdateUploadNameReq;
}

export namespace UpdateUploadNameReq {
  export type AsObject = {
    currentFileName: string,
    newFileName: string,
  }
}

export class UpdateUploadNameRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUploadNameRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUploadNameRes): UpdateUploadNameRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUploadNameRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUploadNameRes;
  static deserializeBinaryFromReader(message: UpdateUploadNameRes, reader: jspb.BinaryReader): UpdateUploadNameRes;
}

export namespace UpdateUploadNameRes {
  export type AsObject = {
  }
}

export class GetVoicemailCountReq extends jspb.Message {
  clearMailBoxesList(): void;
  getMailBoxesList(): Array<string>;
  setMailBoxesList(value: Array<string>): void;
  addMailBoxes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVoicemailCountReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetVoicemailCountReq): GetVoicemailCountReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVoicemailCountReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVoicemailCountReq;
  static deserializeBinaryFromReader(message: GetVoicemailCountReq, reader: jspb.BinaryReader): GetVoicemailCountReq;
}

export namespace GetVoicemailCountReq {
  export type AsObject = {
    mailBoxesList: Array<string>,
  }
}

export class GetVoicemailCountRes extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): void;

  getUnheard(): number;
  setUnheard(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVoicemailCountRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetVoicemailCountRes): GetVoicemailCountRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVoicemailCountRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVoicemailCountRes;
  static deserializeBinaryFromReader(message: GetVoicemailCountRes, reader: jspb.BinaryReader): GetVoicemailCountRes;
}

export namespace GetVoicemailCountRes {
  export type AsObject = {
    total: number,
    unheard: number,
  }
}

export class UpdateVoicemailFlagReadReq extends jspb.Message {
  getMailBox(): string;
  setMailBox(value: string): void;

  getCallerSid(): string;
  setCallerSid(value: string): void;

  getCallerType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallerType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getFlagRead(): boolean;
  setFlagRead(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVoicemailFlagReadReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVoicemailFlagReadReq): UpdateVoicemailFlagReadReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateVoicemailFlagReadReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVoicemailFlagReadReq;
  static deserializeBinaryFromReader(message: UpdateVoicemailFlagReadReq, reader: jspb.BinaryReader): UpdateVoicemailFlagReadReq;
}

export namespace UpdateVoicemailFlagReadReq {
  export type AsObject = {
    mailBox: string,
    callerSid: string,
    callerType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    flagRead: boolean,
  }
}

export class UpdateVoicemailFlagReadRes extends jspb.Message {
  getFlagRead(): boolean;
  setFlagRead(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVoicemailFlagReadRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVoicemailFlagReadRes): UpdateVoicemailFlagReadRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateVoicemailFlagReadRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVoicemailFlagReadRes;
  static deserializeBinaryFromReader(message: UpdateVoicemailFlagReadRes, reader: jspb.BinaryReader): UpdateVoicemailFlagReadRes;
}

export namespace UpdateVoicemailFlagReadRes {
  export type AsObject = {
    flagRead: boolean,
  }
}

export class DownloadMessageReq extends jspb.Message {
  getMailBox(): string;
  setMailBox(value: string): void;

  getCallerSid(): string;
  setCallerSid(value: string): void;

  getCallerType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallerType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadMessageReq): DownloadMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadMessageReq;
  static deserializeBinaryFromReader(message: DownloadMessageReq, reader: jspb.BinaryReader): DownloadMessageReq;
}

export namespace DownloadMessageReq {
  export type AsObject = {
    mailBox: string,
    callerSid: string,
    callerType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
  }
}

export class DownloadMessageRes extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadMessageRes.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadMessageRes): DownloadMessageRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadMessageRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadMessageRes;
  static deserializeBinaryFromReader(message: DownloadMessageRes, reader: jspb.BinaryReader): DownloadMessageRes;
}

export namespace DownloadMessageRes {
  export type AsObject = {
    url: string,
  }
}

export class DownloadSpecifiedMessagesReq extends jspb.Message {
  clearMessagesList(): void;
  getMessagesList(): Array<DownloadSpecifiedMessagesReq.MessageReq>;
  setMessagesList(value: Array<DownloadSpecifiedMessagesReq.MessageReq>): void;
  addMessages(value?: DownloadSpecifiedMessagesReq.MessageReq, index?: number): DownloadSpecifiedMessagesReq.MessageReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadSpecifiedMessagesReq.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadSpecifiedMessagesReq): DownloadSpecifiedMessagesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadSpecifiedMessagesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadSpecifiedMessagesReq;
  static deserializeBinaryFromReader(message: DownloadSpecifiedMessagesReq, reader: jspb.BinaryReader): DownloadSpecifiedMessagesReq;
}

export namespace DownloadSpecifiedMessagesReq {
  export type AsObject = {
    messagesList: Array<DownloadSpecifiedMessagesReq.MessageReq.AsObject>,
  }

  export class MessageReq extends jspb.Message {
    getMailBox(): string;
    setMailBox(value: string): void;

    getCallerSid(): string;
    setCallerSid(value: string): void;

    getCallerType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
    setCallerType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MessageReq.AsObject;
    static toObject(includeInstance: boolean, msg: MessageReq): MessageReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MessageReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MessageReq;
    static deserializeBinaryFromReader(message: MessageReq, reader: jspb.BinaryReader): MessageReq;
  }

  export namespace MessageReq {
    export type AsObject = {
      mailBox: string,
      callerSid: string,
      callerType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    }
  }
}

export class DownloadSpecifiedMessagesRes extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadSpecifiedMessagesRes.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadSpecifiedMessagesRes): DownloadSpecifiedMessagesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadSpecifiedMessagesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadSpecifiedMessagesRes;
  static deserializeBinaryFromReader(message: DownloadSpecifiedMessagesRes, reader: jspb.BinaryReader): DownloadSpecifiedMessagesRes;
}

export namespace DownloadSpecifiedMessagesRes {
  export type AsObject = {
    url: string,
  }
}

export class GetUploadGreetingUrlReq extends jspb.Message {
  getPbxExtension(): string;
  setPbxExtension(value: string): void;

  getFilename(): string;
  setFilename(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUploadGreetingUrlReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetUploadGreetingUrlReq): GetUploadGreetingUrlReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUploadGreetingUrlReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUploadGreetingUrlReq;
  static deserializeBinaryFromReader(message: GetUploadGreetingUrlReq, reader: jspb.BinaryReader): GetUploadGreetingUrlReq;
}

export namespace GetUploadGreetingUrlReq {
  export type AsObject = {
    pbxExtension: string,
    filename: string,
  }
}

export class GetUploadGreetingUrlRes extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUploadGreetingUrlRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetUploadGreetingUrlRes): GetUploadGreetingUrlRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUploadGreetingUrlRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUploadGreetingUrlRes;
  static deserializeBinaryFromReader(message: GetUploadGreetingUrlRes, reader: jspb.BinaryReader): GetUploadGreetingUrlRes;
}

export namespace GetUploadGreetingUrlRes {
  export type AsObject = {
    url: string,
  }
}

export class DownloadMessagesReq extends jspb.Message {
  clearMailBoxesList(): void;
  getMailBoxesList(): Array<string>;
  setMailBoxesList(value: Array<string>): void;
  addMailBoxes(value: string, index?: number): string;

  getUnheardOnly(): boolean;
  setUnheardOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadMessagesReq.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadMessagesReq): DownloadMessagesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadMessagesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadMessagesReq;
  static deserializeBinaryFromReader(message: DownloadMessagesReq, reader: jspb.BinaryReader): DownloadMessagesReq;
}

export namespace DownloadMessagesReq {
  export type AsObject = {
    mailBoxesList: Array<string>,
    unheardOnly: boolean,
  }
}

export class DownloadMessagesRes extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadMessagesRes.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadMessagesRes): DownloadMessagesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadMessagesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadMessagesRes;
  static deserializeBinaryFromReader(message: DownloadMessagesRes, reader: jspb.BinaryReader): DownloadMessagesRes;
}

export namespace DownloadMessagesRes {
  export type AsObject = {
    url: string,
  }
}

export class DownloadGreetingForExtensionReq extends jspb.Message {
  getMailBox(): string;
  setMailBox(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadGreetingForExtensionReq.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadGreetingForExtensionReq): DownloadGreetingForExtensionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadGreetingForExtensionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadGreetingForExtensionReq;
  static deserializeBinaryFromReader(message: DownloadGreetingForExtensionReq, reader: jspb.BinaryReader): DownloadGreetingForExtensionReq;
}

export namespace DownloadGreetingForExtensionReq {
  export type AsObject = {
    mailBox: string,
  }
}

export class DownloadGreetingForExtensionRes extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadGreetingForExtensionRes.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadGreetingForExtensionRes): DownloadGreetingForExtensionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadGreetingForExtensionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadGreetingForExtensionRes;
  static deserializeBinaryFromReader(message: DownloadGreetingForExtensionRes, reader: jspb.BinaryReader): DownloadGreetingForExtensionRes;
}

export namespace DownloadGreetingForExtensionRes {
  export type AsObject = {
    url: string,
  }
}

export class DownloadGreetingReq extends jspb.Message {
  getFilename(): string;
  setFilename(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadGreetingReq.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadGreetingReq): DownloadGreetingReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadGreetingReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadGreetingReq;
  static deserializeBinaryFromReader(message: DownloadGreetingReq, reader: jspb.BinaryReader): DownloadGreetingReq;
}

export namespace DownloadGreetingReq {
  export type AsObject = {
    filename: string,
  }
}

export class DownloadGreetingRes extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadGreetingRes.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadGreetingRes): DownloadGreetingRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadGreetingRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadGreetingRes;
  static deserializeBinaryFromReader(message: DownloadGreetingRes, reader: jspb.BinaryReader): DownloadGreetingRes;
}

export namespace DownloadGreetingRes {
  export type AsObject = {
    url: string,
  }
}

export class ProcessGreetingUploadReq extends jspb.Message {
  getPbxExtension(): string;
  setPbxExtension(value: string): void;

  getFilename(): string;
  setFilename(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessGreetingUploadReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessGreetingUploadReq): ProcessGreetingUploadReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessGreetingUploadReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessGreetingUploadReq;
  static deserializeBinaryFromReader(message: ProcessGreetingUploadReq, reader: jspb.BinaryReader): ProcessGreetingUploadReq;
}

export namespace ProcessGreetingUploadReq {
  export type AsObject = {
    pbxExtension: string,
    filename: string,
  }
}

export class ProcessGreetingUploadRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessGreetingUploadRes.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessGreetingUploadRes): ProcessGreetingUploadRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessGreetingUploadRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessGreetingUploadRes;
  static deserializeBinaryFromReader(message: ProcessGreetingUploadRes, reader: jspb.BinaryReader): ProcessGreetingUploadRes;
}

export namespace ProcessGreetingUploadRes {
  export type AsObject = {
  }
}

export class UpdateGreetingForExtensionReq extends jspb.Message {
  getPbxExtension(): string;
  setPbxExtension(value: string): void;

  getFilename(): string;
  setFilename(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGreetingForExtensionReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGreetingForExtensionReq): UpdateGreetingForExtensionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateGreetingForExtensionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGreetingForExtensionReq;
  static deserializeBinaryFromReader(message: UpdateGreetingForExtensionReq, reader: jspb.BinaryReader): UpdateGreetingForExtensionReq;
}

export namespace UpdateGreetingForExtensionReq {
  export type AsObject = {
    pbxExtension: string,
    filename: string,
  }
}

export class UpdateGreetingForExtensionRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGreetingForExtensionRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGreetingForExtensionRes): UpdateGreetingForExtensionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateGreetingForExtensionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGreetingForExtensionRes;
  static deserializeBinaryFromReader(message: UpdateGreetingForExtensionRes, reader: jspb.BinaryReader): UpdateGreetingForExtensionRes;
}

export namespace UpdateGreetingForExtensionRes {
  export type AsObject = {
  }
}

export class ListAvailableGreetingsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAvailableGreetingsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListAvailableGreetingsReq): ListAvailableGreetingsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAvailableGreetingsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAvailableGreetingsReq;
  static deserializeBinaryFromReader(message: ListAvailableGreetingsReq, reader: jspb.BinaryReader): ListAvailableGreetingsReq;
}

export namespace ListAvailableGreetingsReq {
  export type AsObject = {
  }
}

export class ListAvailableGreetingsRes extends jspb.Message {
  clearGreetingsList(): void;
  getGreetingsList(): Array<ListAvailableGreetingsRes.FileInfo>;
  setGreetingsList(value: Array<ListAvailableGreetingsRes.FileInfo>): void;
  addGreetings(value?: ListAvailableGreetingsRes.FileInfo, index?: number): ListAvailableGreetingsRes.FileInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAvailableGreetingsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListAvailableGreetingsRes): ListAvailableGreetingsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAvailableGreetingsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAvailableGreetingsRes;
  static deserializeBinaryFromReader(message: ListAvailableGreetingsRes, reader: jspb.BinaryReader): ListAvailableGreetingsRes;
}

export namespace ListAvailableGreetingsRes {
  export type AsObject = {
    greetingsList: Array<ListAvailableGreetingsRes.FileInfo.AsObject>,
  }

  export class FileInfo extends jspb.Message {
    getFilename(): string;
    setFilename(value: string): void;

    getSize(): number;
    setSize(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileInfo.AsObject;
    static toObject(includeInstance: boolean, msg: FileInfo): FileInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileInfo;
    static deserializeBinaryFromReader(message: FileInfo, reader: jspb.BinaryReader): FileInfo;
  }

  export namespace FileInfo {
    export type AsObject = {
      filename: string,
      size: number,
    }
  }
}

