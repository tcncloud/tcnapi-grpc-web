// package: api.commons.audit
// file: api/commons/audit/lms_events.proto

import * as jspb from "google-protobuf";

export class LMSPipelineFailureEvent extends jspb.Message {
  getElementId(): string;
  setElementId(value: string): void;

  getElementName(): string;
  setElementName(value: string): void;

  getFileName(): string;
  setFileName(value: string): void;

  getFailureMessage(): string;
  setFailureMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LMSPipelineFailureEvent.AsObject;
  static toObject(includeInstance: boolean, msg: LMSPipelineFailureEvent): LMSPipelineFailureEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LMSPipelineFailureEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LMSPipelineFailureEvent;
  static deserializeBinaryFromReader(message: LMSPipelineFailureEvent, reader: jspb.BinaryReader): LMSPipelineFailureEvent;
}

export namespace LMSPipelineFailureEvent {
  export type AsObject = {
    elementId: string,
    elementName: string,
    fileName: string,
    failureMessage: string,
  }
}

export class LMSPipelineNoOutputEvent extends jspb.Message {
  getElementId(): string;
  setElementId(value: string): void;

  getElementName(): string;
  setElementName(value: string): void;

  getFileName(): string;
  setFileName(value: string): void;

  getEventMessage(): string;
  setEventMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LMSPipelineNoOutputEvent.AsObject;
  static toObject(includeInstance: boolean, msg: LMSPipelineNoOutputEvent): LMSPipelineNoOutputEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LMSPipelineNoOutputEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LMSPipelineNoOutputEvent;
  static deserializeBinaryFromReader(message: LMSPipelineNoOutputEvent, reader: jspb.BinaryReader): LMSPipelineNoOutputEvent;
}

export namespace LMSPipelineNoOutputEvent {
  export type AsObject = {
    elementId: string,
    elementName: string,
    fileName: string,
    eventMessage: string,
  }
}

export class LMSPipelineSuccessfulEvent extends jspb.Message {
  getElementId(): string;
  setElementId(value: string): void;

  getElementName(): string;
  setElementName(value: string): void;

  getFileName(): string;
  setFileName(value: string): void;

  getEventMessage(): string;
  setEventMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LMSPipelineSuccessfulEvent.AsObject;
  static toObject(includeInstance: boolean, msg: LMSPipelineSuccessfulEvent): LMSPipelineSuccessfulEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LMSPipelineSuccessfulEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LMSPipelineSuccessfulEvent;
  static deserializeBinaryFromReader(message: LMSPipelineSuccessfulEvent, reader: jspb.BinaryReader): LMSPipelineSuccessfulEvent;
}

export namespace LMSPipelineSuccessfulEvent {
  export type AsObject = {
    elementId: string,
    elementName: string,
    fileName: string,
    eventMessage: string,
  }
}

