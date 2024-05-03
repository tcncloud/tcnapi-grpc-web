// package: wfo.vanalytics.v2
// file: wfo/vanalytics/v2/flag_transcript.proto

import * as jspb from "google-protobuf";
import * as wfo_vanalytics_v2_flag_pb from "../../../wfo/vanalytics/v2/flag_pb";
import * as wfo_vanalytics_v2_transcript_pb from "../../../wfo/vanalytics/v2/transcript_pb";

export class CreateFlagTranscriptRequest extends jspb.Message {
  clearTranscriptSidsList(): void;
  getTranscriptSidsList(): Array<number>;
  setTranscriptSidsList(value: Array<number>): void;
  addTranscriptSids(value: number, index?: number): number;

  hasFlag(): boolean;
  clearFlag(): void;
  getFlag(): wfo_vanalytics_v2_flag_pb.Flag | undefined;
  setFlag(value?: wfo_vanalytics_v2_flag_pb.Flag): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFlagTranscriptRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFlagTranscriptRequest): CreateFlagTranscriptRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFlagTranscriptRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFlagTranscriptRequest;
  static deserializeBinaryFromReader(message: CreateFlagTranscriptRequest, reader: jspb.BinaryReader): CreateFlagTranscriptRequest;
}

export namespace CreateFlagTranscriptRequest {
  export type AsObject = {
    transcriptSidsList: Array<number>,
    flag?: wfo_vanalytics_v2_flag_pb.Flag.AsObject,
  }
}

export class CreateFlagTranscriptResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFlagTranscriptResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFlagTranscriptResponse): CreateFlagTranscriptResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFlagTranscriptResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFlagTranscriptResponse;
  static deserializeBinaryFromReader(message: CreateFlagTranscriptResponse, reader: jspb.BinaryReader): CreateFlagTranscriptResponse;
}

export namespace CreateFlagTranscriptResponse {
  export type AsObject = {
  }
}

