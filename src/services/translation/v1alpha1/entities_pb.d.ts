// package: services.translation.v1alpha1
// file: services/translation/v1alpha1/entities.proto

import * as jspb from "google-protobuf";

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

export class Translation extends jspb.Message {
  getTranslationId(): string;
  setTranslationId(value: string): void;

  getOriginalTemplate(): string;
  setOriginalTemplate(value: string): void;

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
    originalTemplate: string,
    context: string,
    languageTag: string,
    llmTranslation: string,
    manualTranslation: string,
  }
}

