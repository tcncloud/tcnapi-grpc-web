// package: services.translation.v1alpha1
// file: services/translation/v1alpha1/entities.proto

import * as jspb from "google-protobuf";

export class TranslateTemplateRequest extends jspb.Message {
  getTemplate(): string;
  setTemplate(value: string): void;

  getContext(): string;
  setContext(value: string): void;

  getLanguage(): LanguageMap[keyof LanguageMap];
  setLanguage(value: LanguageMap[keyof LanguageMap]): void;

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
    language: LanguageMap[keyof LanguageMap],
  }
}

export class TranslateTemplateResponse extends jspb.Message {
  hasTranslation(): boolean;
  clearTranslation(): void;
  getTranslation(): Translation | undefined;
  setTranslation(value?: Translation): void;

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
    translation?: Translation.AsObject,
  }
}

export class Translation extends jspb.Message {
  getTranslationId(): string;
  setTranslationId(value: string): void;

  getOriginalTemplate(): string;
  setOriginalTemplate(value: string): void;

  getContext(): string;
  setContext(value: string): void;

  getLanguage(): LanguageMap[keyof LanguageMap];
  setLanguage(value: LanguageMap[keyof LanguageMap]): void;

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
    language: LanguageMap[keyof LanguageMap],
    llmTranslation: string,
    manualTranslation: string,
  }
}

export interface LanguageMap {
  LANGUAGE_UNSPECIFIED: 0;
  AR_SA: 1;
  CS_CZ: 2;
  DA_DK: 3;
  DE_DE: 4;
  EL_GR: 5;
  EN_AU: 6;
  EN_GB: 7;
  EN_IE: 8;
  EN_US: 9;
  EN_ZA: 10;
  ES_ES: 11;
  ES_MX: 12;
  FI_FI: 13;
  FR_CA: 14;
  FR_FR: 15;
  HE_IL: 16;
  HI_IN: 17;
  HU_HU: 18;
  ID_ID: 19;
  IT_IT: 20;
  JA_JP: 21;
  KO_KR: 22;
  NL_BE: 23;
  NL_NL: 24;
  NO_NO: 25;
  PL_PL: 26;
  PT_BR: 27;
  PT_PT: 28;
  RO_RO: 29;
  RU_RU: 30;
  SK_SK: 31;
  SV_SE: 32;
  TH_TH: 33;
  TR_TR: 34;
  ZH_CN: 35;
  ZH_HK: 36;
  ZH_TW: 37;
}

export const Language: LanguageMap;

