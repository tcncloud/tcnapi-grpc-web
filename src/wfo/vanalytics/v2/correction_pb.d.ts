// package: wfo.vanalytics.v2
// file: wfo/vanalytics/v2/correction.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class CreateCorrectionRequest extends jspb.Message {
  hasCorrection(): boolean;
  clearCorrection(): void;
  getCorrection(): Correction | undefined;
  setCorrection(value?: Correction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCorrectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCorrectionRequest): CreateCorrectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCorrectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCorrectionRequest;
  static deserializeBinaryFromReader(message: CreateCorrectionRequest, reader: jspb.BinaryReader): CreateCorrectionRequest;
}

export namespace CreateCorrectionRequest {
  export type AsObject = {
    correction?: Correction.AsObject,
  }
}

export class CreateCorrectionResponse extends jspb.Message {
  hasCorrection(): boolean;
  clearCorrection(): void;
  getCorrection(): Correction | undefined;
  setCorrection(value?: Correction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCorrectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCorrectionResponse): CreateCorrectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCorrectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCorrectionResponse;
  static deserializeBinaryFromReader(message: CreateCorrectionResponse, reader: jspb.BinaryReader): CreateCorrectionResponse;
}

export namespace CreateCorrectionResponse {
  export type AsObject = {
    correction?: Correction.AsObject,
  }
}

export class Correction extends jspb.Message {
  getCorrectionSid(): number;
  setCorrectionSid(value: number): void;

  getTranscriptSid(): number;
  setTranscriptSid(value: number): void;

  hasStartOffset(): boolean;
  clearStartOffset(): void;
  getStartOffset(): google_protobuf_duration_pb.Duration | undefined;
  setStartOffset(value?: google_protobuf_duration_pb.Duration): void;

  hasEndOffset(): boolean;
  clearEndOffset(): void;
  getEndOffset(): google_protobuf_duration_pb.Duration | undefined;
  setEndOffset(value?: google_protobuf_duration_pb.Duration): void;

  getProposedText(): string;
  setProposedText(value: string): void;

  getChannel(): number;
  setChannel(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Correction.AsObject;
  static toObject(includeInstance: boolean, msg: Correction): Correction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Correction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Correction;
  static deserializeBinaryFromReader(message: Correction, reader: jspb.BinaryReader): Correction;
}

export namespace Correction {
  export type AsObject = {
    correctionSid: number,
    transcriptSid: number,
    startOffset?: google_protobuf_duration_pb.Duration.AsObject,
    endOffset?: google_protobuf_duration_pb.Duration.AsObject,
    proposedText: string,
    channel: number,
  }
}

