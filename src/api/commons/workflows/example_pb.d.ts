// package: api.commons.workflows
// file: api/commons/workflows/example.proto

import * as jspb from "google-protobuf";

export class NodePrint extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodePrint.AsObject;
  static toObject(includeInstance: boolean, msg: NodePrint): NodePrint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodePrint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodePrint;
  static deserializeBinaryFromReader(message: NodePrint, reader: jspb.BinaryReader): NodePrint;
}

export namespace NodePrint {
  export type AsObject = {
    message: string,
  }
}

export class NodeRandom extends jspb.Message {
  getMin(): number;
  setMin(value: number): void;

  getMax(): number;
  setMax(value: number): void;

  getSingleOutput(): boolean;
  setSingleOutput(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeRandom.AsObject;
  static toObject(includeInstance: boolean, msg: NodeRandom): NodeRandom.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeRandom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeRandom;
  static deserializeBinaryFromReader(message: NodeRandom, reader: jspb.BinaryReader): NodeRandom;
}

export namespace NodeRandom {
  export type AsObject = {
    min: number,
    max: number,
    singleOutput: boolean,
  }
}

export class NodeConsoleInput extends jspb.Message {
  getPrompt(): string;
  setPrompt(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeConsoleInput.AsObject;
  static toObject(includeInstance: boolean, msg: NodeConsoleInput): NodeConsoleInput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeConsoleInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeConsoleInput;
  static deserializeBinaryFromReader(message: NodeConsoleInput, reader: jspb.BinaryReader): NodeConsoleInput;
}

export namespace NodeConsoleInput {
  export type AsObject = {
    prompt: string,
  }
}

export class NodeStoreInput extends jspb.Message {
  getStoreTo(): string;
  setStoreTo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeStoreInput.AsObject;
  static toObject(includeInstance: boolean, msg: NodeStoreInput): NodeStoreInput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeStoreInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeStoreInput;
  static deserializeBinaryFromReader(message: NodeStoreInput, reader: jspb.BinaryReader): NodeStoreInput;
}

export namespace NodeStoreInput {
  export type AsObject = {
    storeTo: string,
  }
}

export class NodeComparator extends jspb.Message {
  getFirstField(): string;
  setFirstField(value: string): void;

  getSecondField(): string;
  setSecondField(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeComparator.AsObject;
  static toObject(includeInstance: boolean, msg: NodeComparator): NodeComparator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeComparator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeComparator;
  static deserializeBinaryFromReader(message: NodeComparator, reader: jspb.BinaryReader): NodeComparator;
}

export namespace NodeComparator {
  export type AsObject = {
    firstField: string,
    secondField: string,
  }
}

export class NodeChatbot extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeChatbot.AsObject;
  static toObject(includeInstance: boolean, msg: NodeChatbot): NodeChatbot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeChatbot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeChatbot;
  static deserializeBinaryFromReader(message: NodeChatbot, reader: jspb.BinaryReader): NodeChatbot;
}

export namespace NodeChatbot {
  export type AsObject = {
    message: string,
  }
}

export class DiceDocument extends jspb.Message {
  getDiceValue(): number;
  setDiceValue(value: number): void;

  getDiceValueMax(): number;
  setDiceValueMax(value: number): void;

  getDiceValueMin(): number;
  setDiceValueMin(value: number): void;

  getLastMessage(): string;
  setLastMessage(value: string): void;

  getVariablesMap(): jspb.Map<string, string>;
  clearVariablesMap(): void;
  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiceDocument.AsObject;
  static toObject(includeInstance: boolean, msg: DiceDocument): DiceDocument.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiceDocument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiceDocument;
  static deserializeBinaryFromReader(message: DiceDocument, reader: jspb.BinaryReader): DiceDocument;
}

export namespace DiceDocument {
  export type AsObject = {
    diceValue: number,
    diceValueMax: number,
    diceValueMin: number,
    lastMessage: string,
    variablesMap: Array<[string, string]>,
    error: string,
  }
}

export class ChatbotDocument extends jspb.Message {
  getInMessage(): string;
  setInMessage(value: string): void;

  getOutMessage(): string;
  setOutMessage(value: string): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatbotDocument.AsObject;
  static toObject(includeInstance: boolean, msg: ChatbotDocument): ChatbotDocument.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatbotDocument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatbotDocument;
  static deserializeBinaryFromReader(message: ChatbotDocument, reader: jspb.BinaryReader): ChatbotDocument;
}

export namespace ChatbotDocument {
  export type AsObject = {
    inMessage: string,
    outMessage: string,
    error: string,
  }
}

