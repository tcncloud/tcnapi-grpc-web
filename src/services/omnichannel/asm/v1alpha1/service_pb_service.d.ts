// package: services.omnichannel.asm.v1alpha1
// file: services/omnichannel/asm/v1alpha1/service.proto

import * as services_omnichannel_asm_v1alpha1_service_pb from "../../../../services/omnichannel/asm/v1alpha1/service_pb";
import * as services_omnichannel_asm_v1alpha1_entities_pb from "../../../../services/omnichannel/asm/v1alpha1/entities_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AsmServiceCreateSession = {
  readonly methodName: string;
  readonly service: typeof AsmService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_omnichannel_asm_v1alpha1_entities_pb.CreateSessionRequest;
  readonly responseType: typeof services_omnichannel_asm_v1alpha1_entities_pb.CreateSessionResponse;
};

type AsmServiceEndSession = {
  readonly methodName: string;
  readonly service: typeof AsmService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_omnichannel_asm_v1alpha1_entities_pb.EndSessionRequest;
  readonly responseType: typeof services_omnichannel_asm_v1alpha1_entities_pb.EndSessionResponse;
};

type AsmServiceGetCurrentSession = {
  readonly methodName: string;
  readonly service: typeof AsmService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_omnichannel_asm_v1alpha1_entities_pb.GetCurrentSessionRequest;
  readonly responseType: typeof services_omnichannel_asm_v1alpha1_entities_pb.GetCurrentSessionResponse;
};

type AsmServiceEnableVoice = {
  readonly methodName: string;
  readonly service: typeof AsmService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_omnichannel_asm_v1alpha1_entities_pb.EnableVoiceRequest;
  readonly responseType: typeof services_omnichannel_asm_v1alpha1_entities_pb.EnableVoiceResponse;
};

type AsmServiceDisableVoice = {
  readonly methodName: string;
  readonly service: typeof AsmService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_omnichannel_asm_v1alpha1_entities_pb.DisableVoiceRequest;
  readonly responseType: typeof services_omnichannel_asm_v1alpha1_entities_pb.DisableVoiceResponse;
};

type AsmServiceListAsmUserDetails = {
  readonly methodName: string;
  readonly service: typeof AsmService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_omnichannel_asm_v1alpha1_entities_pb.ListAsmUserDetailsRequest;
  readonly responseType: typeof services_omnichannel_asm_v1alpha1_entities_pb.ListAsmUserDetailsResponse;
};

export class AsmService {
  static readonly serviceName: string;
  static readonly CreateSession: AsmServiceCreateSession;
  static readonly EndSession: AsmServiceEndSession;
  static readonly GetCurrentSession: AsmServiceGetCurrentSession;
  static readonly EnableVoice: AsmServiceEnableVoice;
  static readonly DisableVoice: AsmServiceDisableVoice;
  static readonly ListAsmUserDetails: AsmServiceListAsmUserDetails;
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

export class AsmServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createSession(
    requestMessage: services_omnichannel_asm_v1alpha1_entities_pb.CreateSessionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_asm_v1alpha1_entities_pb.CreateSessionResponse|null) => void
  ): UnaryResponse;
  createSession(
    requestMessage: services_omnichannel_asm_v1alpha1_entities_pb.CreateSessionRequest,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_asm_v1alpha1_entities_pb.CreateSessionResponse|null) => void
  ): UnaryResponse;
  endSession(
    requestMessage: services_omnichannel_asm_v1alpha1_entities_pb.EndSessionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_asm_v1alpha1_entities_pb.EndSessionResponse|null) => void
  ): UnaryResponse;
  endSession(
    requestMessage: services_omnichannel_asm_v1alpha1_entities_pb.EndSessionRequest,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_asm_v1alpha1_entities_pb.EndSessionResponse|null) => void
  ): UnaryResponse;
  getCurrentSession(
    requestMessage: services_omnichannel_asm_v1alpha1_entities_pb.GetCurrentSessionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_asm_v1alpha1_entities_pb.GetCurrentSessionResponse|null) => void
  ): UnaryResponse;
  getCurrentSession(
    requestMessage: services_omnichannel_asm_v1alpha1_entities_pb.GetCurrentSessionRequest,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_asm_v1alpha1_entities_pb.GetCurrentSessionResponse|null) => void
  ): UnaryResponse;
  enableVoice(
    requestMessage: services_omnichannel_asm_v1alpha1_entities_pb.EnableVoiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_asm_v1alpha1_entities_pb.EnableVoiceResponse|null) => void
  ): UnaryResponse;
  enableVoice(
    requestMessage: services_omnichannel_asm_v1alpha1_entities_pb.EnableVoiceRequest,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_asm_v1alpha1_entities_pb.EnableVoiceResponse|null) => void
  ): UnaryResponse;
  disableVoice(
    requestMessage: services_omnichannel_asm_v1alpha1_entities_pb.DisableVoiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_asm_v1alpha1_entities_pb.DisableVoiceResponse|null) => void
  ): UnaryResponse;
  disableVoice(
    requestMessage: services_omnichannel_asm_v1alpha1_entities_pb.DisableVoiceRequest,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_asm_v1alpha1_entities_pb.DisableVoiceResponse|null) => void
  ): UnaryResponse;
  listAsmUserDetails(
    requestMessage: services_omnichannel_asm_v1alpha1_entities_pb.ListAsmUserDetailsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_asm_v1alpha1_entities_pb.ListAsmUserDetailsResponse|null) => void
  ): UnaryResponse;
  listAsmUserDetails(
    requestMessage: services_omnichannel_asm_v1alpha1_entities_pb.ListAsmUserDetailsRequest,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_asm_v1alpha1_entities_pb.ListAsmUserDetailsResponse|null) => void
  ): UnaryResponse;
}

