// package: api.v1alpha1.srec
// file: api/v1alpha1/srec/service.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../annotations/authz_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ListScreenRecordingsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListScreenRecordingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListScreenRecordingsRequest): ListScreenRecordingsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListScreenRecordingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListScreenRecordingsRequest;
  static deserializeBinaryFromReader(message: ListScreenRecordingsRequest, reader: jspb.BinaryReader): ListScreenRecordingsRequest;
}

export namespace ListScreenRecordingsRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
  }
}

export class ListScreenRecordingsResponse extends jspb.Message {
  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  clearRecordingsList(): void;
  getRecordingsList(): Array<ScreenRecording>;
  setRecordingsList(value: Array<ScreenRecording>): void;
  addRecordings(value?: ScreenRecording, index?: number): ScreenRecording;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListScreenRecordingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListScreenRecordingsResponse): ListScreenRecordingsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListScreenRecordingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListScreenRecordingsResponse;
  static deserializeBinaryFromReader(message: ListScreenRecordingsResponse, reader: jspb.BinaryReader): ListScreenRecordingsResponse;
}

export namespace ListScreenRecordingsResponse {
  export type AsObject = {
    nextPageToken: string,
    recordingsList: Array<ScreenRecording.AsObject>,
  }
}

export class ScreenRecording extends jspb.Message {
  getSessionId(): number;
  setSessionId(value: number): void;

  getAgentFirstName(): string;
  setAgentFirstName(value: string): void;

  getAgentLastName(): string;
  setAgentLastName(value: string): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAudioTime(): number;
  setAudioTime(value: number): void;

  getAudioBytes(): number;
  setAudioBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScreenRecording.AsObject;
  static toObject(includeInstance: boolean, msg: ScreenRecording): ScreenRecording.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScreenRecording, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScreenRecording;
  static deserializeBinaryFromReader(message: ScreenRecording, reader: jspb.BinaryReader): ScreenRecording;
}

export namespace ScreenRecording {
  export type AsObject = {
    sessionId: number,
    agentFirstName: string,
    agentLastName: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    audioTime: number,
    audioBytes: number,
  }
}

export class GetScreenRecordingURLRequest extends jspb.Message {
  getSessionId(): number;
  setSessionId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScreenRecordingURLRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetScreenRecordingURLRequest): GetScreenRecordingURLRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScreenRecordingURLRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScreenRecordingURLRequest;
  static deserializeBinaryFromReader(message: GetScreenRecordingURLRequest, reader: jspb.BinaryReader): GetScreenRecordingURLRequest;
}

export namespace GetScreenRecordingURLRequest {
  export type AsObject = {
    sessionId: number,
  }
}

export class GetScreenRecordingURLResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScreenRecordingURLResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetScreenRecordingURLResponse): GetScreenRecordingURLResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScreenRecordingURLResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScreenRecordingURLResponse;
  static deserializeBinaryFromReader(message: GetScreenRecordingURLResponse, reader: jspb.BinaryReader): GetScreenRecordingURLResponse;
}

export namespace GetScreenRecordingURLResponse {
  export type AsObject = {
    url: string,
  }
}

export class DeleteScreenRecordingRequest extends jspb.Message {
  getSessionId(): number;
  setSessionId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteScreenRecordingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteScreenRecordingRequest): DeleteScreenRecordingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteScreenRecordingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteScreenRecordingRequest;
  static deserializeBinaryFromReader(message: DeleteScreenRecordingRequest, reader: jspb.BinaryReader): DeleteScreenRecordingRequest;
}

export namespace DeleteScreenRecordingRequest {
  export type AsObject = {
    sessionId: number,
  }
}

export class DeleteScreenRecordingResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteScreenRecordingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteScreenRecordingResponse): DeleteScreenRecordingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteScreenRecordingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteScreenRecordingResponse;
  static deserializeBinaryFromReader(message: DeleteScreenRecordingResponse, reader: jspb.BinaryReader): DeleteScreenRecordingResponse;
}

export namespace DeleteScreenRecordingResponse {
  export type AsObject = {
  }
}

