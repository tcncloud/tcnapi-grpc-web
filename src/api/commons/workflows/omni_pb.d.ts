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

export class OmniNodeWebhook extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getMethod(): string;
  setMethod(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  getHeadersMap(): jspb.Map<string, string>;
  clearHeadersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniNodeWebhook.AsObject;
  static toObject(includeInstance: boolean, msg: OmniNodeWebhook): OmniNodeWebhook.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniNodeWebhook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniNodeWebhook;
  static deserializeBinaryFromReader(message: OmniNodeWebhook, reader: jspb.BinaryReader): OmniNodeWebhook;
}

export namespace OmniNodeWebhook {
  export type AsObject = {
    url: string,
    method: string,
    body: string,
    headersMap: Array<[string, string]>,
  }
}

export class OmniNodeScrublist extends jspb.Message {
  getAction(): ScrublistActionMap[keyof ScrublistActionMap];
  setAction(value: ScrublistActionMap[keyof ScrublistActionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniNodeScrublist.AsObject;
  static toObject(includeInstance: boolean, msg: OmniNodeScrublist): OmniNodeScrublist.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniNodeScrublist, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniNodeScrublist;
  static deserializeBinaryFromReader(message: OmniNodeScrublist, reader: jspb.BinaryReader): OmniNodeScrublist;
}

export namespace OmniNodeScrublist {
  export type AsObject = {
    action: ScrublistActionMap[keyof ScrublistActionMap],
  }
}

export class OmniNodeEndConversation extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniNodeEndConversation.AsObject;
  static toObject(includeInstance: boolean, msg: OmniNodeEndConversation): OmniNodeEndConversation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniNodeEndConversation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniNodeEndConversation;
  static deserializeBinaryFromReader(message: OmniNodeEndConversation, reader: jspb.BinaryReader): OmniNodeEndConversation;
}

export namespace OmniNodeEndConversation {
  export type AsObject = {
  }
}

export interface ScrublistActionMap {
  ADD: 0;
  REMOVE: 1;
}

export const ScrublistAction: ScrublistActionMap;

