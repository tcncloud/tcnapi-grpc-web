// package: wfo.vanalytics.v2
// file: wfo/vanalytics/v2/transcript_summary.proto

import * as jspb from "google-protobuf";

export class GetTranscriptSummaryRequest extends jspb.Message {
  getTranscriptSid(): number;
  setTranscriptSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTranscriptSummaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTranscriptSummaryRequest): GetTranscriptSummaryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTranscriptSummaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTranscriptSummaryRequest;
  static deserializeBinaryFromReader(message: GetTranscriptSummaryRequest, reader: jspb.BinaryReader): GetTranscriptSummaryRequest;
}

export namespace GetTranscriptSummaryRequest {
  export type AsObject = {
    transcriptSid: number,
  }
}

export class GetTranscriptSummaryResponse extends jspb.Message {
  hasTranscriptSummary(): boolean;
  clearTranscriptSummary(): void;
  getTranscriptSummary(): TranscriptSummary | undefined;
  setTranscriptSummary(value?: TranscriptSummary): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTranscriptSummaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTranscriptSummaryResponse): GetTranscriptSummaryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTranscriptSummaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTranscriptSummaryResponse;
  static deserializeBinaryFromReader(message: GetTranscriptSummaryResponse, reader: jspb.BinaryReader): GetTranscriptSummaryResponse;
}

export namespace GetTranscriptSummaryResponse {
  export type AsObject = {
    transcriptSummary?: TranscriptSummary.AsObject,
  }
}

export class TranscriptSummary extends jspb.Message {
  clearBulletPointsList(): void;
  getBulletPointsList(): Array<string>;
  setBulletPointsList(value: Array<string>): void;
  addBulletPoints(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranscriptSummary.AsObject;
  static toObject(includeInstance: boolean, msg: TranscriptSummary): TranscriptSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TranscriptSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranscriptSummary;
  static deserializeBinaryFromReader(message: TranscriptSummary, reader: jspb.BinaryReader): TranscriptSummary;
}

export namespace TranscriptSummary {
  export type AsObject = {
    bulletPointsList: Array<string>,
  }
}

