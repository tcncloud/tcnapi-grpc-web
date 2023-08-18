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
  getOptionsId(): string;
  setOptionsId(value: string): void;

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
    optionsId: string,
    optionsList: Array<string>,
  }
}

export class OmniNodeSendMessage extends jspb.Message {
  getPrompt(): string;
  setPrompt(value: string): void;

  getOptionsId(): string;
  setOptionsId(value: string): void;

  clearOptionsList(): void;
  getOptionsList(): Array<string>;
  setOptionsList(value: Array<string>): void;
  addOptions(value: string, index?: number): string;

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
    optionsId: string,
    optionsList: Array<string>,
  }
}

export class OmniNodeUserInput extends jspb.Message {
  getStoreId(): string;
  setStoreId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniNodeUserInput.AsObject;
  static toObject(includeInstance: boolean, msg: OmniNodeUserInput): OmniNodeUserInput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniNodeUserInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniNodeUserInput;
  static deserializeBinaryFromReader(message: OmniNodeUserInput, reader: jspb.BinaryReader): OmniNodeUserInput;
}

export namespace OmniNodeUserInput {
  export type AsObject = {
    storeId: string,
  }
}

export class OmniNodeBranching extends jspb.Message {
  getOptionsId(): string;
  setOptionsId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  clearOptionsList(): void;
  getOptionsList(): Array<string>;
  setOptionsList(value: Array<string>): void;
  addOptions(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniNodeBranching.AsObject;
  static toObject(includeInstance: boolean, msg: OmniNodeBranching): OmniNodeBranching.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniNodeBranching, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniNodeBranching;
  static deserializeBinaryFromReader(message: OmniNodeBranching, reader: jspb.BinaryReader): OmniNodeBranching;
}

export namespace OmniNodeBranching {
  export type AsObject = {
    optionsId: string,
    storeId: string,
    optionsList: Array<string>,
  }
}

export class OmniNodeSetSkill extends jspb.Message {
  getSkill(): string;
  setSkill(value: string): void;

  clearSkillsList(): void;
  getSkillsList(): Array<string>;
  setSkillsList(value: Array<string>): void;
  addSkills(value: string, index?: number): string;

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
    skillsList: Array<string>,
  }
}

export class OmniNodeSetSkills extends jspb.Message {
  clearSkillsList(): void;
  getSkillsList(): Array<string>;
  setSkillsList(value: Array<string>): void;
  addSkills(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniNodeSetSkills.AsObject;
  static toObject(includeInstance: boolean, msg: OmniNodeSetSkills): OmniNodeSetSkills.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniNodeSetSkills, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniNodeSetSkills;
  static deserializeBinaryFromReader(message: OmniNodeSetSkills, reader: jspb.BinaryReader): OmniNodeSetSkills;
}

export namespace OmniNodeSetSkills {
  export type AsObject = {
    skillsList: Array<string>,
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

export class OmniNodeToMatcher extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniNodeToMatcher.AsObject;
  static toObject(includeInstance: boolean, msg: OmniNodeToMatcher): OmniNodeToMatcher.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniNodeToMatcher, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniNodeToMatcher;
  static deserializeBinaryFromReader(message: OmniNodeToMatcher, reader: jspb.BinaryReader): OmniNodeToMatcher;
}

export namespace OmniNodeToMatcher {
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

