// package: services.translations.v1alpha1
// file: services/translations/v1alpha1/service.proto

import * as services_translations_v1alpha1_service_pb from "../../../services/translations/v1alpha1/service_pb";
import * as services_translations_v1alpha1_entities_pb from "../../../services/translations/v1alpha1/entities_pb";
import {grpc} from "@improbable-eng/grpc-web";

type TranslationsServiceTranslateTemplate = {
  readonly methodName: string;
  readonly service: typeof TranslationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_translations_v1alpha1_entities_pb.TranslateTemplateRequest;
  readonly responseType: typeof services_translations_v1alpha1_entities_pb.TranslateTemplateResponse;
};

type TranslationsServiceListTranslations = {
  readonly methodName: string;
  readonly service: typeof TranslationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_translations_v1alpha1_entities_pb.ListTranslationsRequest;
  readonly responseType: typeof services_translations_v1alpha1_entities_pb.ListTranslationsResponse;
};

type TranslationsServiceListLanguages = {
  readonly methodName: string;
  readonly service: typeof TranslationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_translations_v1alpha1_entities_pb.ListLanguagesRequest;
  readonly responseType: typeof services_translations_v1alpha1_entities_pb.ListLanguagesResponse;
};

type TranslationsServiceListContexts = {
  readonly methodName: string;
  readonly service: typeof TranslationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_translations_v1alpha1_entities_pb.ListContextsRequest;
  readonly responseType: typeof services_translations_v1alpha1_entities_pb.ListContextsResponse;
};

type TranslationsServiceUpdateTranslation = {
  readonly methodName: string;
  readonly service: typeof TranslationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_translations_v1alpha1_entities_pb.UpdateTranslationRequest;
  readonly responseType: typeof services_translations_v1alpha1_entities_pb.UpdateTranslationResponse;
};

type TranslationsServiceTriggerLLMTranslation = {
  readonly methodName: string;
  readonly service: typeof TranslationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_translations_v1alpha1_entities_pb.TriggerLLMTranslationRequest;
  readonly responseType: typeof services_translations_v1alpha1_entities_pb.TriggerLLMTranslationResponse;
};

type TranslationsServiceTriggerLLMTranslations = {
  readonly methodName: string;
  readonly service: typeof TranslationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_translations_v1alpha1_entities_pb.TriggerLLMTranslationsRequest;
  readonly responseType: typeof services_translations_v1alpha1_entities_pb.TriggerLLMTranslationsResponse;
};

type TranslationsServiceSetSystemMessage = {
  readonly methodName: string;
  readonly service: typeof TranslationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_translations_v1alpha1_entities_pb.SetSystemMessageRequest;
  readonly responseType: typeof services_translations_v1alpha1_entities_pb.SetSystemMessageResponse;
};

type TranslationsServiceGetSystemMessage = {
  readonly methodName: string;
  readonly service: typeof TranslationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_translations_v1alpha1_entities_pb.GetSystemMessageRequest;
  readonly responseType: typeof services_translations_v1alpha1_entities_pb.GetSystemMessageResponse;
};

type TranslationsServiceTestSystemMessage = {
  readonly methodName: string;
  readonly service: typeof TranslationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_translations_v1alpha1_entities_pb.TestSystemMessageRequest;
  readonly responseType: typeof services_translations_v1alpha1_entities_pb.TestSystemMessageResponse;
};

export class TranslationsService {
  static readonly serviceName: string;
  static readonly TranslateTemplate: TranslationsServiceTranslateTemplate;
  static readonly ListTranslations: TranslationsServiceListTranslations;
  static readonly ListLanguages: TranslationsServiceListLanguages;
  static readonly ListContexts: TranslationsServiceListContexts;
  static readonly UpdateTranslation: TranslationsServiceUpdateTranslation;
  static readonly TriggerLLMTranslation: TranslationsServiceTriggerLLMTranslation;
  static readonly TriggerLLMTranslations: TranslationsServiceTriggerLLMTranslations;
  static readonly SetSystemMessage: TranslationsServiceSetSystemMessage;
  static readonly GetSystemMessage: TranslationsServiceGetSystemMessage;
  static readonly TestSystemMessage: TranslationsServiceTestSystemMessage;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class TranslationsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  translateTemplate(
    requestMessage: services_translations_v1alpha1_entities_pb.TranslateTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_translations_v1alpha1_entities_pb.TranslateTemplateResponse|null) => void
  ): UnaryResponse;
  translateTemplate(
    requestMessage: services_translations_v1alpha1_entities_pb.TranslateTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: services_translations_v1alpha1_entities_pb.TranslateTemplateResponse|null) => void
  ): UnaryResponse;
  listTranslations(
    requestMessage: services_translations_v1alpha1_entities_pb.ListTranslationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_translations_v1alpha1_entities_pb.ListTranslationsResponse|null) => void
  ): UnaryResponse;
  listTranslations(
    requestMessage: services_translations_v1alpha1_entities_pb.ListTranslationsRequest,
    callback: (error: ServiceError|null, responseMessage: services_translations_v1alpha1_entities_pb.ListTranslationsResponse|null) => void
  ): UnaryResponse;
  listLanguages(
    requestMessage: services_translations_v1alpha1_entities_pb.ListLanguagesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_translations_v1alpha1_entities_pb.ListLanguagesResponse|null) => void
  ): UnaryResponse;
  listLanguages(
    requestMessage: services_translations_v1alpha1_entities_pb.ListLanguagesRequest,
    callback: (error: ServiceError|null, responseMessage: services_translations_v1alpha1_entities_pb.ListLanguagesResponse|null) => void
  ): UnaryResponse;
  listContexts(
    requestMessage: services_translations_v1alpha1_entities_pb.ListContextsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_translations_v1alpha1_entities_pb.ListContextsResponse|null) => void
  ): UnaryResponse;
  listContexts(
    requestMessage: services_translations_v1alpha1_entities_pb.ListContextsRequest,
    callback: (error: ServiceError|null, responseMessage: services_translations_v1alpha1_entities_pb.ListContextsResponse|null) => void
  ): UnaryResponse;
  updateTranslation(
    requestMessage: services_translations_v1alpha1_entities_pb.UpdateTranslationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_translations_v1alpha1_entities_pb.UpdateTranslationResponse|null) => void
  ): UnaryResponse;
  updateTranslation(
    requestMessage: services_translations_v1alpha1_entities_pb.UpdateTranslationRequest,
    callback: (error: ServiceError|null, responseMessage: services_translations_v1alpha1_entities_pb.UpdateTranslationResponse|null) => void
  ): UnaryResponse;
  triggerLLMTranslation(
    requestMessage: services_translations_v1alpha1_entities_pb.TriggerLLMTranslationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_translations_v1alpha1_entities_pb.TriggerLLMTranslationResponse|null) => void
  ): UnaryResponse;
  triggerLLMTranslation(
    requestMessage: services_translations_v1alpha1_entities_pb.TriggerLLMTranslationRequest,
    callback: (error: ServiceError|null, responseMessage: services_translations_v1alpha1_entities_pb.TriggerLLMTranslationResponse|null) => void
  ): UnaryResponse;
  triggerLLMTranslations(
    requestMessage: services_translations_v1alpha1_entities_pb.TriggerLLMTranslationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_translations_v1alpha1_entities_pb.TriggerLLMTranslationsResponse|null) => void
  ): UnaryResponse;
  triggerLLMTranslations(
    requestMessage: services_translations_v1alpha1_entities_pb.TriggerLLMTranslationsRequest,
    callback: (error: ServiceError|null, responseMessage: services_translations_v1alpha1_entities_pb.TriggerLLMTranslationsResponse|null) => void
  ): UnaryResponse;
  setSystemMessage(
    requestMessage: services_translations_v1alpha1_entities_pb.SetSystemMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_translations_v1alpha1_entities_pb.SetSystemMessageResponse|null) => void
  ): UnaryResponse;
  setSystemMessage(
    requestMessage: services_translations_v1alpha1_entities_pb.SetSystemMessageRequest,
    callback: (error: ServiceError|null, responseMessage: services_translations_v1alpha1_entities_pb.SetSystemMessageResponse|null) => void
  ): UnaryResponse;
  getSystemMessage(
    requestMessage: services_translations_v1alpha1_entities_pb.GetSystemMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_translations_v1alpha1_entities_pb.GetSystemMessageResponse|null) => void
  ): UnaryResponse;
  getSystemMessage(
    requestMessage: services_translations_v1alpha1_entities_pb.GetSystemMessageRequest,
    callback: (error: ServiceError|null, responseMessage: services_translations_v1alpha1_entities_pb.GetSystemMessageResponse|null) => void
  ): UnaryResponse;
  testSystemMessage(
    requestMessage: services_translations_v1alpha1_entities_pb.TestSystemMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_translations_v1alpha1_entities_pb.TestSystemMessageResponse|null) => void
  ): UnaryResponse;
  testSystemMessage(
    requestMessage: services_translations_v1alpha1_entities_pb.TestSystemMessageRequest,
    callback: (error: ServiceError|null, responseMessage: services_translations_v1alpha1_entities_pb.TestSystemMessageResponse|null) => void
  ): UnaryResponse;
}

