// package: api.v1alpha1.vanalytics
// file: api/v1alpha1/vanalytics/correction.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class UpdateCorrectionRequest extends jspb.Message {
  hasCorrection(): boolean;
  clearCorrection(): void;
  getCorrection(): Correction | undefined;
  setCorrection(value?: Correction): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCorrectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCorrectionRequest): UpdateCorrectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCorrectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCorrectionRequest;
  static deserializeBinaryFromReader(message: UpdateCorrectionRequest, reader: jspb.BinaryReader): UpdateCorrectionRequest;
}

export namespace UpdateCorrectionRequest {
  export type AsObject = {
    correction?: Correction.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateCorrectionResponse extends jspb.Message {
  hasCorrection(): boolean;
  clearCorrection(): void;
  getCorrection(): Correction | undefined;
  setCorrection(value?: Correction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCorrectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCorrectionResponse): UpdateCorrectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCorrectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCorrectionResponse;
  static deserializeBinaryFromReader(message: UpdateCorrectionResponse, reader: jspb.BinaryReader): UpdateCorrectionResponse;
}

export namespace UpdateCorrectionResponse {
  export type AsObject = {
    correction?: Correction.AsObject,
  }
}

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

export class GetCorrectionRequest extends jspb.Message {
  getCorrectionSid(): number;
  setCorrectionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCorrectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCorrectionRequest): GetCorrectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCorrectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCorrectionRequest;
  static deserializeBinaryFromReader(message: GetCorrectionRequest, reader: jspb.BinaryReader): GetCorrectionRequest;
}

export namespace GetCorrectionRequest {
  export type AsObject = {
    correctionSid: number,
  }
}

export class ListCorrectionsRequest extends jspb.Message {
  getTranscriptSid(): number;
  setTranscriptSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCorrectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCorrectionsRequest): ListCorrectionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCorrectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCorrectionsRequest;
  static deserializeBinaryFromReader(message: ListCorrectionsRequest, reader: jspb.BinaryReader): ListCorrectionsRequest;
}

export namespace ListCorrectionsRequest {
  export type AsObject = {
    transcriptSid: number,
  }
}

export class ListCorrectionsResponse extends jspb.Message {
  clearCorrectionsList(): void;
  getCorrectionsList(): Array<Correction>;
  setCorrectionsList(value: Array<Correction>): void;
  addCorrections(value?: Correction, index?: number): Correction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCorrectionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCorrectionsResponse): ListCorrectionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCorrectionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCorrectionsResponse;
  static deserializeBinaryFromReader(message: ListCorrectionsResponse, reader: jspb.BinaryReader): ListCorrectionsResponse;
}

export namespace ListCorrectionsResponse {
  export type AsObject = {
    correctionsList: Array<Correction.AsObject>,
  }
}

export class DeleteCorrectionRequest extends jspb.Message {
  getCorrectionSid(): number;
  setCorrectionSid(value: number): void;

  getReturn(): boolean;
  setReturn(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCorrectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCorrectionRequest): DeleteCorrectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCorrectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCorrectionRequest;
  static deserializeBinaryFromReader(message: DeleteCorrectionRequest, reader: jspb.BinaryReader): DeleteCorrectionRequest;
}

export namespace DeleteCorrectionRequest {
  export type AsObject = {
    correctionSid: number,
    pb_return: boolean,
  }
}

export class DeleteCorrectionResponse extends jspb.Message {
  hasCorrection(): boolean;
  clearCorrection(): void;
  getCorrection(): Correction | undefined;
  setCorrection(value?: Correction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCorrectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCorrectionResponse): DeleteCorrectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCorrectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCorrectionResponse;
  static deserializeBinaryFromReader(message: DeleteCorrectionResponse, reader: jspb.BinaryReader): DeleteCorrectionResponse;
}

export namespace DeleteCorrectionResponse {
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

