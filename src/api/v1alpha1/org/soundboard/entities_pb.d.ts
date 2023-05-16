// package: api.v1alpha1.soundboard
// file: api/v1alpha1/org/soundboard/entities.proto

import * as jspb from "google-protobuf";
import * as api_commons_org_pb from "../../../../api/commons/org_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class SoundboardDetails extends jspb.Message {
  getSoundboardId(): string;
  setSoundboardId(value: string): void;

  getFileName(): string;
  setFileName(value: string): void;

  getFileType(): api_commons_org_pb.RecordingFileTypeMap[keyof api_commons_org_pb.RecordingFileTypeMap];
  setFileType(value: api_commons_org_pb.RecordingFileTypeMap[keyof api_commons_org_pb.RecordingFileTypeMap]): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastModified(): boolean;
  clearLastModified(): void;
  getLastModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getFileSize(): number;
  setFileSize(value: number): void;

  getRecordingLength(): number;
  setRecordingLength(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SoundboardDetails.AsObject;
  static toObject(includeInstance: boolean, msg: SoundboardDetails): SoundboardDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SoundboardDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SoundboardDetails;
  static deserializeBinaryFromReader(message: SoundboardDetails, reader: jspb.BinaryReader): SoundboardDetails;
}

export namespace SoundboardDetails {
  export type AsObject = {
    soundboardId: string,
    fileName: string,
    fileType: api_commons_org_pb.RecordingFileTypeMap[keyof api_commons_org_pb.RecordingFileTypeMap],
    title: string,
    description: string,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    fileSize: number,
    recordingLength: number,
  }
}

export class GetSoundboardFileReq extends jspb.Message {
  getSoundboardId(): string;
  setSoundboardId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSoundboardFileReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSoundboardFileReq): GetSoundboardFileReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSoundboardFileReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSoundboardFileReq;
  static deserializeBinaryFromReader(message: GetSoundboardFileReq, reader: jspb.BinaryReader): GetSoundboardFileReq;
}

export namespace GetSoundboardFileReq {
  export type AsObject = {
    soundboardId: string,
  }
}

export class GetSoundboardFileRes extends jspb.Message {
  getSoundboardFile(): Uint8Array | string;
  getSoundboardFile_asU8(): Uint8Array;
  getSoundboardFile_asB64(): string;
  setSoundboardFile(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSoundboardFileRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetSoundboardFileRes): GetSoundboardFileRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSoundboardFileRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSoundboardFileRes;
  static deserializeBinaryFromReader(message: GetSoundboardFileRes, reader: jspb.BinaryReader): GetSoundboardFileRes;
}

export namespace GetSoundboardFileRes {
  export type AsObject = {
    soundboardFile: Uint8Array | string,
  }
}

export class GetSoundboardReq extends jspb.Message {
  getSoundboardId(): string;
  setSoundboardId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSoundboardReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSoundboardReq): GetSoundboardReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSoundboardReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSoundboardReq;
  static deserializeBinaryFromReader(message: GetSoundboardReq, reader: jspb.BinaryReader): GetSoundboardReq;
}

export namespace GetSoundboardReq {
  export type AsObject = {
    soundboardId: string,
  }
}

export class GetSoundboardRes extends jspb.Message {
  hasSoundboard(): boolean;
  clearSoundboard(): void;
  getSoundboard(): SoundboardDetails | undefined;
  setSoundboard(value?: SoundboardDetails): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSoundboardRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetSoundboardRes): GetSoundboardRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSoundboardRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSoundboardRes;
  static deserializeBinaryFromReader(message: GetSoundboardRes, reader: jspb.BinaryReader): GetSoundboardRes;
}

export namespace GetSoundboardRes {
  export type AsObject = {
    soundboard?: SoundboardDetails.AsObject,
  }
}

export class CreateSoundboardReq extends jspb.Message {
  hasSoundboard(): boolean;
  clearSoundboard(): void;
  getSoundboard(): SoundboardDetails | undefined;
  setSoundboard(value?: SoundboardDetails): void;

  getFtsId(): string;
  setFtsId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSoundboardReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSoundboardReq): CreateSoundboardReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSoundboardReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSoundboardReq;
  static deserializeBinaryFromReader(message: CreateSoundboardReq, reader: jspb.BinaryReader): CreateSoundboardReq;
}

export namespace CreateSoundboardReq {
  export type AsObject = {
    soundboard?: SoundboardDetails.AsObject,
    ftsId: string,
  }
}

export class CreateSoundboardRes extends jspb.Message {
  getSoundboardId(): string;
  setSoundboardId(value: string): void;

  getFtsId(): string;
  setFtsId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSoundboardRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSoundboardRes): CreateSoundboardRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSoundboardRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSoundboardRes;
  static deserializeBinaryFromReader(message: CreateSoundboardRes, reader: jspb.BinaryReader): CreateSoundboardRes;
}

export namespace CreateSoundboardRes {
  export type AsObject = {
    soundboardId: string,
    ftsId: string,
  }
}

export class ListSoundboardsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSoundboardsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSoundboardsReq): ListSoundboardsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSoundboardsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSoundboardsReq;
  static deserializeBinaryFromReader(message: ListSoundboardsReq, reader: jspb.BinaryReader): ListSoundboardsReq;
}

export namespace ListSoundboardsReq {
  export type AsObject = {
  }
}

export class ListSoundboardsRes extends jspb.Message {
  clearSoundboardsList(): void;
  getSoundboardsList(): Array<SoundboardDetails>;
  setSoundboardsList(value: Array<SoundboardDetails>): void;
  addSoundboards(value?: SoundboardDetails, index?: number): SoundboardDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSoundboardsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSoundboardsRes): ListSoundboardsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSoundboardsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSoundboardsRes;
  static deserializeBinaryFromReader(message: ListSoundboardsRes, reader: jspb.BinaryReader): ListSoundboardsRes;
}

export namespace ListSoundboardsRes {
  export type AsObject = {
    soundboardsList: Array<SoundboardDetails.AsObject>,
  }
}

export class UpdateSoundboardReq extends jspb.Message {
  hasSoundboard(): boolean;
  clearSoundboard(): void;
  getSoundboard(): SoundboardDetails | undefined;
  setSoundboard(value?: SoundboardDetails): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSoundboardReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSoundboardReq): UpdateSoundboardReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSoundboardReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSoundboardReq;
  static deserializeBinaryFromReader(message: UpdateSoundboardReq, reader: jspb.BinaryReader): UpdateSoundboardReq;
}

export namespace UpdateSoundboardReq {
  export type AsObject = {
    soundboard?: SoundboardDetails.AsObject,
  }
}

export class UpdateSoundboardRes extends jspb.Message {
  getSoundboardId(): string;
  setSoundboardId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSoundboardRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSoundboardRes): UpdateSoundboardRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSoundboardRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSoundboardRes;
  static deserializeBinaryFromReader(message: UpdateSoundboardRes, reader: jspb.BinaryReader): UpdateSoundboardRes;
}

export namespace UpdateSoundboardRes {
  export type AsObject = {
    soundboardId: string,
  }
}

export class DeleteSoundboardReq extends jspb.Message {
  getSoundboardId(): string;
  setSoundboardId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSoundboardReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSoundboardReq): DeleteSoundboardReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSoundboardReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSoundboardReq;
  static deserializeBinaryFromReader(message: DeleteSoundboardReq, reader: jspb.BinaryReader): DeleteSoundboardReq;
}

export namespace DeleteSoundboardReq {
  export type AsObject = {
    soundboardId: string,
  }
}

export class DeleteSoundboardRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSoundboardRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSoundboardRes): DeleteSoundboardRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSoundboardRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSoundboardRes;
  static deserializeBinaryFromReader(message: DeleteSoundboardRes, reader: jspb.BinaryReader): DeleteSoundboardRes;
}

export namespace DeleteSoundboardRes {
  export type AsObject = {
  }
}

