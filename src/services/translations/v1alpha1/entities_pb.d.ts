// package: services.translations.v1alpha1
// file: services/translations/v1alpha1/entities.proto

import * as jspb from "google-protobuf";

export class Translation extends jspb.Message {
  getTranslationId(): string;
  setTranslationId(value: string): void;

  getTemplate(): string;
  setTemplate(value: string): void;

  getContext(): string;
  setContext(value: string): void;

  getLanguageTag(): string;
  setLanguageTag(value: string): void;

  getLlmTranslation(): string;
  setLlmTranslation(value: string): void;

  getManualTranslation(): string;
  setManualTranslation(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Translation.AsObject;
  static toObject(includeInstance: boolean, msg: Translation): Translation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Translation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Translation;
  static deserializeBinaryFromReader(message: Translation, reader: jspb.BinaryReader): Translation;
}

export namespace Translation {
  export type AsObject = {
    translationId: string,
    template: string,
    context: string,
    languageTag: string,
    llmTranslation: string,
    manualTranslation: string,
  }
}

export class TranslateTemplateRequest extends jspb.Message {
  getTemplate(): string;
  setTemplate(value: string): void;

  getContext(): string;
  setContext(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranslateTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TranslateTemplateRequest): TranslateTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TranslateTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranslateTemplateRequest;
  static deserializeBinaryFromReader(message: TranslateTemplateRequest, reader: jspb.BinaryReader): TranslateTemplateRequest;
}

export namespace TranslateTemplateRequest {
  export type AsObject = {
    template: string,
    context: string,
  }
}

export class TranslateTemplateResponse extends jspb.Message {
  clearTranslationsList(): void;
  getTranslationsList(): Array<Translation>;
  setTranslationsList(value: Array<Translation>): void;
  addTranslations(value?: Translation, index?: number): Translation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranslateTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TranslateTemplateResponse): TranslateTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TranslateTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranslateTemplateResponse;
  static deserializeBinaryFromReader(message: TranslateTemplateResponse, reader: jspb.BinaryReader): TranslateTemplateResponse;
}

export namespace TranslateTemplateResponse {
  export type AsObject = {
    translationsList: Array<Translation.AsObject>,
  }
}

export class ListTranslationsRequest extends jspb.Message {
  getContext(): string;
  setContext(value: string): void;

  getLanguageTag(): string;
  setLanguageTag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTranslationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTranslationsRequest): ListTranslationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTranslationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTranslationsRequest;
  static deserializeBinaryFromReader(message: ListTranslationsRequest, reader: jspb.BinaryReader): ListTranslationsRequest;
}

export namespace ListTranslationsRequest {
  export type AsObject = {
    context: string,
    languageTag: string,
  }
}

export class ListTranslationsResponse extends jspb.Message {
  clearTranslationsList(): void;
  getTranslationsList(): Array<Translation>;
  setTranslationsList(value: Array<Translation>): void;
  addTranslations(value?: Translation, index?: number): Translation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTranslationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTranslationsResponse): ListTranslationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTranslationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTranslationsResponse;
  static deserializeBinaryFromReader(message: ListTranslationsResponse, reader: jspb.BinaryReader): ListTranslationsResponse;
}

export namespace ListTranslationsResponse {
  export type AsObject = {
    translationsList: Array<Translation.AsObject>,
  }
}

export class UpdateTranslationRequest extends jspb.Message {
  getTranslationId(): string;
  setTranslationId(value: string): void;

  getTranslation(): string;
  setTranslation(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTranslationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTranslationRequest): UpdateTranslationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTranslationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTranslationRequest;
  static deserializeBinaryFromReader(message: UpdateTranslationRequest, reader: jspb.BinaryReader): UpdateTranslationRequest;
}

export namespace UpdateTranslationRequest {
  export type AsObject = {
    translationId: string,
    translation: string,
  }
}

export class UpdateTranslationResponse extends jspb.Message {
  hasTranslation(): boolean;
  clearTranslation(): void;
  getTranslation(): Translation | undefined;
  setTranslation(value?: Translation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTranslationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTranslationResponse): UpdateTranslationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTranslationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTranslationResponse;
  static deserializeBinaryFromReader(message: UpdateTranslationResponse, reader: jspb.BinaryReader): UpdateTranslationResponse;
}

export namespace UpdateTranslationResponse {
  export type AsObject = {
    translation?: Translation.AsObject,
  }
}

export class TriggerLLMTranslationRequest extends jspb.Message {
  getTranslationId(): string;
  setTranslationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerLLMTranslationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerLLMTranslationRequest): TriggerLLMTranslationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerLLMTranslationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerLLMTranslationRequest;
  static deserializeBinaryFromReader(message: TriggerLLMTranslationRequest, reader: jspb.BinaryReader): TriggerLLMTranslationRequest;
}

export namespace TriggerLLMTranslationRequest {
  export type AsObject = {
    translationId: string,
  }
}

export class TriggerLLMTranslationResponse extends jspb.Message {
  hasTranslation(): boolean;
  clearTranslation(): void;
  getTranslation(): Translation | undefined;
  setTranslation(value?: Translation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerLLMTranslationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerLLMTranslationResponse): TriggerLLMTranslationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerLLMTranslationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerLLMTranslationResponse;
  static deserializeBinaryFromReader(message: TriggerLLMTranslationResponse, reader: jspb.BinaryReader): TriggerLLMTranslationResponse;
}

export namespace TriggerLLMTranslationResponse {
  export type AsObject = {
    translation?: Translation.AsObject,
  }
}

export class SetSystemMessageRequest extends jspb.Message {
  getContext(): string;
  setContext(value: string): void;

  getSystemMessage(): string;
  setSystemMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSystemMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetSystemMessageRequest): SetSystemMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetSystemMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSystemMessageRequest;
  static deserializeBinaryFromReader(message: SetSystemMessageRequest, reader: jspb.BinaryReader): SetSystemMessageRequest;
}

export namespace SetSystemMessageRequest {
  export type AsObject = {
    context: string,
    systemMessage: string,
  }
}

export class SetSystemMessageResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSystemMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetSystemMessageResponse): SetSystemMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetSystemMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSystemMessageResponse;
  static deserializeBinaryFromReader(message: SetSystemMessageResponse, reader: jspb.BinaryReader): SetSystemMessageResponse;
}

export namespace SetSystemMessageResponse {
  export type AsObject = {
  }
}

export class GetSystemMessageRequest extends jspb.Message {
  getContext(): string;
  setContext(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSystemMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSystemMessageRequest): GetSystemMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSystemMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSystemMessageRequest;
  static deserializeBinaryFromReader(message: GetSystemMessageRequest, reader: jspb.BinaryReader): GetSystemMessageRequest;
}

export namespace GetSystemMessageRequest {
  export type AsObject = {
    context: string,
  }
}

export class GetSystemMessageResponse extends jspb.Message {
  getSystemMessage(): string;
  setSystemMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSystemMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSystemMessageResponse): GetSystemMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSystemMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSystemMessageResponse;
  static deserializeBinaryFromReader(message: GetSystemMessageResponse, reader: jspb.BinaryReader): GetSystemMessageResponse;
}

export namespace GetSystemMessageResponse {
  export type AsObject = {
    systemMessage: string,
  }
}

