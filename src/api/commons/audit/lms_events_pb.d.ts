// package: api.commons.audit
// file: api/commons/audit/lms_events.proto

import * as jspb from "google-protobuf";

export class LMSPipelineFailureEvent extends jspb.Message {
  getElementId(): string;
  setElementId(value: string): void;

  getElementName(): string;
  setElementName(value: string): void;

  clearFileNamesList(): void;
  getFileNamesList(): Array<string>;
  setFileNamesList(value: Array<string>): void;
  addFileNames(value: string, index?: number): string;

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
    fileNamesList: Array<string>,
    failureMessage: string,
  }
}

