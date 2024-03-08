// package: services.omnichannel.api.entities.v1alpha1
// file: services/omnichannel/api/entities/v1alpha1/flows.proto

import * as jspb from "google-protobuf";

export class FlowPayload extends jspb.Message {
  clearFieldsList(): void;
  getFieldsList(): Array<FlowField>;
  setFieldsList(value: Array<FlowField>): void;
  addFields(value?: FlowField, index?: number): FlowField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlowPayload.AsObject;
  static toObject(includeInstance: boolean, msg: FlowPayload): FlowPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlowPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlowPayload;
  static deserializeBinaryFromReader(message: FlowPayload, reader: jspb.BinaryReader): FlowPayload;
}

export namespace FlowPayload {
  export type AsObject = {
    fieldsList: Array<FlowField.AsObject>,
  }
}

export class FlowField extends jspb.Message {
  getName(): FlowFieldNameMap[keyof FlowFieldNameMap];
  setName(value: FlowFieldNameMap[keyof FlowFieldNameMap]): void;

  hasUserInput(): boolean;
  clearUserInput(): void;
  getUserInput(): string;
  setUserInput(value: string): void;

  getValueCase(): FlowField.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlowField.AsObject;
  static toObject(includeInstance: boolean, msg: FlowField): FlowField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlowField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlowField;
  static deserializeBinaryFromReader(message: FlowField, reader: jspb.BinaryReader): FlowField;
}

export namespace FlowField {
  export type AsObject = {
    name: FlowFieldNameMap[keyof FlowFieldNameMap],
    userInput: string,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    USER_INPUT = 100,
  }
}

export interface FlowFieldNameMap {
  FIELD_NAME_UNSPECIFIED: 0;
  FIELD_NAME_USER_INPUT: 1;
}

export const FlowFieldName: FlowFieldNameMap;

