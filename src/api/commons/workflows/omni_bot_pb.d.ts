// package: api.commons.workflows
// file: api/commons/workflows/omni_bot.proto

import * as jspb from "google-protobuf";

export class OmniBotNodeTestStart extends jspb.Message {
  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniBotNodeTestStart.AsObject;
  static toObject(includeInstance: boolean, msg: OmniBotNodeTestStart): OmniBotNodeTestStart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniBotNodeTestStart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniBotNodeTestStart;
  static deserializeBinaryFromReader(message: OmniBotNodeTestStart, reader: jspb.BinaryReader): OmniBotNodeTestStart;
}

export namespace OmniBotNodeTestStart {
  export type AsObject = {
    data: string,
  }
}

export class OmniBotNodeTestStep extends jspb.Message {
  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniBotNodeTestStep.AsObject;
  static toObject(includeInstance: boolean, msg: OmniBotNodeTestStep): OmniBotNodeTestStep.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniBotNodeTestStep, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniBotNodeTestStep;
  static deserializeBinaryFromReader(message: OmniBotNodeTestStep, reader: jspb.BinaryReader): OmniBotNodeTestStep;
}

export namespace OmniBotNodeTestStep {
  export type AsObject = {
    data: string,
  }
}

export class OmniBotNodeTestEnd extends jspb.Message {
  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniBotNodeTestEnd.AsObject;
  static toObject(includeInstance: boolean, msg: OmniBotNodeTestEnd): OmniBotNodeTestEnd.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniBotNodeTestEnd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniBotNodeTestEnd;
  static deserializeBinaryFromReader(message: OmniBotNodeTestEnd, reader: jspb.BinaryReader): OmniBotNodeTestEnd;
}

export namespace OmniBotNodeTestEnd {
  export type AsObject = {
    error: string,
  }
}

