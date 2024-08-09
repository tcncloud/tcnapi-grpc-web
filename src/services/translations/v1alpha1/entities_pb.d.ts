// package: services.translations.v1alpha1
// file: services/translations/v1alpha1/entities.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

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

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

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
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class LocalizationLanguage extends jspb.Message {
  getLanguageTag(): string;
  setLanguageTag(value: string): void;

  getEnglishName(): string;
  setEnglishName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalizationLanguage.AsObject;
  static toObject(includeInstance: boolean, msg: LocalizationLanguage): LocalizationLanguage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocalizationLanguage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalizationLanguage;
  static deserializeBinaryFromReader(message: LocalizationLanguage, reader: jspb.BinaryReader): LocalizationLanguage;
}

export namespace LocalizationLanguage {
  export type AsObject = {
    languageTag: string,
    englishName: string,
  }
}

export class LocalizationContext extends jspb.Message {
  getContext(): string;
  setContext(value: string): void;

  getSystemMessage(): string;
  setSystemMessage(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalizationContext.AsObject;
  static toObject(includeInstance: boolean, msg: LocalizationContext): LocalizationContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocalizationContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalizationContext;
  static deserializeBinaryFromReader(message: LocalizationContext, reader: jspb.BinaryReader): LocalizationContext;
}

export namespace LocalizationContext {
  export type AsObject = {
    context: string,
    systemMessage: string,
    enabled: boolean,
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

export class TestSystemMessageRequest extends jspb.Message {
  getSystemMessage(): string;
  setSystemMessage(value: string): void;

  getTemplate(): string;
  setTemplate(value: string): void;

  getLanguageTag(): string;
  setLanguageTag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestSystemMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TestSystemMessageRequest): TestSystemMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestSystemMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestSystemMessageRequest;
  static deserializeBinaryFromReader(message: TestSystemMessageRequest, reader: jspb.BinaryReader): TestSystemMessageRequest;
}

export namespace TestSystemMessageRequest {
  export type AsObject = {
    systemMessage: string,
    template: string,
    languageTag: string,
  }
}

export class TestSystemMessageResponse extends jspb.Message {
  getTranslation(): string;
  setTranslation(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestSystemMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TestSystemMessageResponse): TestSystemMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestSystemMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestSystemMessageResponse;
  static deserializeBinaryFromReader(message: TestSystemMessageResponse, reader: jspb.BinaryReader): TestSystemMessageResponse;
}

export namespace TestSystemMessageResponse {
  export type AsObject = {
    translation: string,
  }
}

export class TriggerLLMTranslationsRequest extends jspb.Message {
  getContext(): string;
  setContext(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerLLMTranslationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerLLMTranslationsRequest): TriggerLLMTranslationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerLLMTranslationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerLLMTranslationsRequest;
  static deserializeBinaryFromReader(message: TriggerLLMTranslationsRequest, reader: jspb.BinaryReader): TriggerLLMTranslationsRequest;
}

export namespace TriggerLLMTranslationsRequest {
  export type AsObject = {
    context: string,
  }
}

export class TriggerLLMTranslationsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerLLMTranslationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerLLMTranslationsResponse): TriggerLLMTranslationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerLLMTranslationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerLLMTranslationsResponse;
  static deserializeBinaryFromReader(message: TriggerLLMTranslationsResponse, reader: jspb.BinaryReader): TriggerLLMTranslationsResponse;
}

export namespace TriggerLLMTranslationsResponse {
  export type AsObject = {
  }
}

export class ListLanguagesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLanguagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLanguagesRequest): ListLanguagesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLanguagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLanguagesRequest;
  static deserializeBinaryFromReader(message: ListLanguagesRequest, reader: jspb.BinaryReader): ListLanguagesRequest;
}

export namespace ListLanguagesRequest {
  export type AsObject = {
  }
}

export class ListLanguagesResponse extends jspb.Message {
  clearLanguagesList(): void;
  getLanguagesList(): Array<LocalizationLanguage>;
  setLanguagesList(value: Array<LocalizationLanguage>): void;
  addLanguages(value?: LocalizationLanguage, index?: number): LocalizationLanguage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLanguagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLanguagesResponse): ListLanguagesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLanguagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLanguagesResponse;
  static deserializeBinaryFromReader(message: ListLanguagesResponse, reader: jspb.BinaryReader): ListLanguagesResponse;
}

export namespace ListLanguagesResponse {
  export type AsObject = {
    languagesList: Array<LocalizationLanguage.AsObject>,
  }
}

export class ListContextsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContextsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListContextsRequest): ListContextsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListContextsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContextsRequest;
  static deserializeBinaryFromReader(message: ListContextsRequest, reader: jspb.BinaryReader): ListContextsRequest;
}

export namespace ListContextsRequest {
  export type AsObject = {
  }
}

export class ListContextsResponse extends jspb.Message {
  clearContextsList(): void;
  getContextsList(): Array<string>;
  setContextsList(value: Array<string>): void;
  addContexts(value: string, index?: number): string;

  clearLocalizationContextsList(): void;
  getLocalizationContextsList(): Array<LocalizationContext>;
  setLocalizationContextsList(value: Array<LocalizationContext>): void;
  addLocalizationContexts(value?: LocalizationContext, index?: number): LocalizationContext;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContextsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListContextsResponse): ListContextsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListContextsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContextsResponse;
  static deserializeBinaryFromReader(message: ListContextsResponse, reader: jspb.BinaryReader): ListContextsResponse;
}

export namespace ListContextsResponse {
  export type AsObject = {
    contextsList: Array<string>,
    localizationContextsList: Array<LocalizationContext.AsObject>,
  }
}

export class EnableContextRequest extends jspb.Message {
  getContext(): string;
  setContext(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableContextRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnableContextRequest): EnableContextRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnableContextRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableContextRequest;
  static deserializeBinaryFromReader(message: EnableContextRequest, reader: jspb.BinaryReader): EnableContextRequest;
}

export namespace EnableContextRequest {
  export type AsObject = {
    context: string,
  }
}

export class EnableContextResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableContextResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EnableContextResponse): EnableContextResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnableContextResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableContextResponse;
  static deserializeBinaryFromReader(message: EnableContextResponse, reader: jspb.BinaryReader): EnableContextResponse;
}

export namespace EnableContextResponse {
  export type AsObject = {
  }
}

export class DisableContextRequest extends jspb.Message {
  getContext(): string;
  setContext(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisableContextRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DisableContextRequest): DisableContextRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisableContextRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisableContextRequest;
  static deserializeBinaryFromReader(message: DisableContextRequest, reader: jspb.BinaryReader): DisableContextRequest;
}

export namespace DisableContextRequest {
  export type AsObject = {
    context: string,
  }
}

export class DisableContextResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisableContextResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DisableContextResponse): DisableContextResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisableContextResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisableContextResponse;
  static deserializeBinaryFromReader(message: DisableContextResponse, reader: jspb.BinaryReader): DisableContextResponse;
}

export namespace DisableContextResponse {
  export type AsObject = {
  }
}

export class BulkDeleteTranslationsRequest extends jspb.Message {
  clearTranslationIdsList(): void;
  getTranslationIdsList(): Array<string>;
  setTranslationIdsList(value: Array<string>): void;
  addTranslationIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulkDeleteTranslationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BulkDeleteTranslationsRequest): BulkDeleteTranslationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BulkDeleteTranslationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulkDeleteTranslationsRequest;
  static deserializeBinaryFromReader(message: BulkDeleteTranslationsRequest, reader: jspb.BinaryReader): BulkDeleteTranslationsRequest;
}

export namespace BulkDeleteTranslationsRequest {
  export type AsObject = {
    translationIdsList: Array<string>,
  }
}

export class BulkDeleteTranslationsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulkDeleteTranslationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BulkDeleteTranslationsResponse): BulkDeleteTranslationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BulkDeleteTranslationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulkDeleteTranslationsResponse;
  static deserializeBinaryFromReader(message: BulkDeleteTranslationsResponse, reader: jspb.BinaryReader): BulkDeleteTranslationsResponse;
}

export namespace BulkDeleteTranslationsResponse {
  export type AsObject = {
  }
}

