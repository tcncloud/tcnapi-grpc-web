// package: api.commons.workflows
// file: api/commons/workflows/omni.proto

import * as jspb from "google-protobuf";

export class OmniNodePrompt extends jspb.Message {
  getPrompt(): string;
  setPrompt(value: string): void;

  getStoreTo(): string;
  setStoreTo(value: string): void;

  clearOptionsList(): void;
  getOptionsList(): Array<string>;
  setOptionsList(value: Array<string>): void;
  addOptions(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniNodePrompt.AsObject;
  static toObject(includeInstance: boolean, msg: OmniNodePrompt): OmniNodePrompt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniNodePrompt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniNodePrompt;
  static deserializeBinaryFromReader(message: OmniNodePrompt, reader: jspb.BinaryReader): OmniNodePrompt;
}

export namespace OmniNodePrompt {
  export type AsObject = {
    prompt: string,
    storeTo: string,
    optionsList: Array<string>,
  }
}

export class OmniNodeOptions extends jspb.Message {
  getStoreTo(): string;
  setStoreTo(value: string): void;

  clearOptionsList(): void;
  getOptionsList(): Array<string>;
  setOptionsList(value: Array<string>): void;
  addOptions(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniNodeOptions.AsObject;
  static toObject(includeInstance: boolean, msg: OmniNodeOptions): OmniNodeOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniNodeOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniNodeOptions;
  static deserializeBinaryFromReader(message: OmniNodeOptions, reader: jspb.BinaryReader): OmniNodeOptions;
}

export namespace OmniNodeOptions {
  export type AsObject = {
    storeTo: string,
    optionsList: Array<string>,
  }
}

export class OmniNodeSendMessage extends jspb.Message {
  getPrompt(): string;
  setPrompt(value: string): void;

  getOptions(): string;
  setOptions(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniNodeSendMessage.AsObject;
  static toObject(includeInstance: boolean, msg: OmniNodeSendMessage): OmniNodeSendMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniNodeSendMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniNodeSendMessage;
  static deserializeBinaryFromReader(message: OmniNodeSendMessage, reader: jspb.BinaryReader): OmniNodeSendMessage;
}

export namespace OmniNodeSendMessage {
  export type AsObject = {
    prompt: string,
    options: string,
  }
}

export class OmniNodeStore extends jspb.Message {
  getStoreTo(): string;
  setStoreTo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniNodeStore.AsObject;
  static toObject(includeInstance: boolean, msg: OmniNodeStore): OmniNodeStore.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniNodeStore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniNodeStore;
  static deserializeBinaryFromReader(message: OmniNodeStore, reader: jspb.BinaryReader): OmniNodeStore;
}

export namespace OmniNodeStore {
  export type AsObject = {
    storeTo: string,
  }
}

export class OmniNodeDecision extends jspb.Message {
  getOptions(): string;
  setOptions(value: string): void;

  getInput(): string;
  setInput(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniNodeDecision.AsObject;
  static toObject(includeInstance: boolean, msg: OmniNodeDecision): OmniNodeDecision.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniNodeDecision, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniNodeDecision;
  static deserializeBinaryFromReader(message: OmniNodeDecision, reader: jspb.BinaryReader): OmniNodeDecision;
}

export namespace OmniNodeDecision {
  export type AsObject = {
    options: string,
    input: string,
  }
}

export class OmniNodeSetSkill extends jspb.Message {
  getSkill(): string;
  setSkill(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniNodeSetSkill.AsObject;
  static toObject(includeInstance: boolean, msg: OmniNodeSetSkill): OmniNodeSetSkill.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniNodeSetSkill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniNodeSetSkill;
  static deserializeBinaryFromReader(message: OmniNodeSetSkill, reader: jspb.BinaryReader): OmniNodeSetSkill;
}

export namespace OmniNodeSetSkill {
  export type AsObject = {
    skill: string,
  }
}

export class OmniNodeToAgent extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniNodeToAgent.AsObject;
  static toObject(includeInstance: boolean, msg: OmniNodeToAgent): OmniNodeToAgent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniNodeToAgent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniNodeToAgent;
  static deserializeBinaryFromReader(message: OmniNodeToAgent, reader: jspb.BinaryReader): OmniNodeToAgent;
}

export namespace OmniNodeToAgent {
  export type AsObject = {
  }
}

export class OmniNodeError extends jspb.Message {
  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniNodeError.AsObject;
  static toObject(includeInstance: boolean, msg: OmniNodeError): OmniNodeError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniNodeError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniNodeError;
  static deserializeBinaryFromReader(message: OmniNodeError, reader: jspb.BinaryReader): OmniNodeError;
}

export namespace OmniNodeError {
  export type AsObject = {
    error: string,
  }
}

