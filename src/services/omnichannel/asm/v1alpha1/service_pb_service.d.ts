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
  readonly requestType: typeof services_omnichannel_asm_v1alpha1_entities_pb.CreateSessionReq;
  readonly responseType: typeof services_omnichannel_asm_v1alpha1_entities_pb.CreateSessionRes;
};

type AsmServiceEndSession = {
  readonly methodName: string;
  readonly service: typeof AsmService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_omnichannel_asm_v1alpha1_entities_pb.EndSessionReq;
  readonly responseType: typeof services_omnichannel_asm_v1alpha1_entities_pb.EndSessionRes;
};

type AsmServiceGetCurrentSession = {
  readonly methodName: string;
  readonly service: typeof AsmService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_omnichannel_asm_v1alpha1_entities_pb.GetCurrentSessionReq;
  readonly responseType: typeof services_omnichannel_asm_v1alpha1_entities_pb.GetCurrentSessionRes;
};

type AsmServiceEnableVoice = {
  readonly methodName: string;
  readonly service: typeof AsmService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_omnichannel_asm_v1alpha1_entities_pb.EnableVoiceReq;
  readonly responseType: typeof services_omnichannel_asm_v1alpha1_entities_pb.EnableVoiceRes;
};

type AsmServiceDisableVoice = {
  readonly methodName: string;
  readonly service: typeof AsmService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_omnichannel_asm_v1alpha1_entities_pb.DisableVoiceReq;
  readonly responseType: typeof services_omnichannel_asm_v1alpha1_entities_pb.DisableVoiceRes;
};

type AsmServiceListAsmUserDetails = {
  readonly methodName: string;
  readonly service: typeof AsmService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_omnichannel_asm_v1alpha1_entities_pb.ListAsmUserDetailsReq;
  readonly responseType: typeof services_omnichannel_asm_v1alpha1_entities_pb.ListAsmUserDetailsRes;
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
    requestMessage: services_omnichannel_asm_v1alpha1_entities_pb.CreateSessionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_asm_v1alpha1_entities_pb.CreateSessionRes|null) => void
  ): UnaryResponse;
  createSession(
    requestMessage: services_omnichannel_asm_v1alpha1_entities_pb.CreateSessionReq,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_asm_v1alpha1_entities_pb.CreateSessionRes|null) => void
  ): UnaryResponse;
  endSession(
    requestMessage: services_omnichannel_asm_v1alpha1_entities_pb.EndSessionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_asm_v1alpha1_entities_pb.EndSessionRes|null) => void
  ): UnaryResponse;
  endSession(
    requestMessage: services_omnichannel_asm_v1alpha1_entities_pb.EndSessionReq,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_asm_v1alpha1_entities_pb.EndSessionRes|null) => void
  ): UnaryResponse;
  getCurrentSession(
    requestMessage: services_omnichannel_asm_v1alpha1_entities_pb.GetCurrentSessionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_asm_v1alpha1_entities_pb.GetCurrentSessionRes|null) => void
  ): UnaryResponse;
  getCurrentSession(
    requestMessage: services_omnichannel_asm_v1alpha1_entities_pb.GetCurrentSessionReq,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_asm_v1alpha1_entities_pb.GetCurrentSessionRes|null) => void
  ): UnaryResponse;
  enableVoice(
    requestMessage: services_omnichannel_asm_v1alpha1_entities_pb.EnableVoiceReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_asm_v1alpha1_entities_pb.EnableVoiceRes|null) => void
  ): UnaryResponse;
  enableVoice(
    requestMessage: services_omnichannel_asm_v1alpha1_entities_pb.EnableVoiceReq,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_asm_v1alpha1_entities_pb.EnableVoiceRes|null) => void
  ): UnaryResponse;
  disableVoice(
    requestMessage: services_omnichannel_asm_v1alpha1_entities_pb.DisableVoiceReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_asm_v1alpha1_entities_pb.DisableVoiceRes|null) => void
  ): UnaryResponse;
  disableVoice(
    requestMessage: services_omnichannel_asm_v1alpha1_entities_pb.DisableVoiceReq,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_asm_v1alpha1_entities_pb.DisableVoiceRes|null) => void
  ): UnaryResponse;
  listAsmUserDetails(
    requestMessage: services_omnichannel_asm_v1alpha1_entities_pb.ListAsmUserDetailsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_asm_v1alpha1_entities_pb.ListAsmUserDetailsRes|null) => void
  ): UnaryResponse;
  listAsmUserDetails(
    requestMessage: services_omnichannel_asm_v1alpha1_entities_pb.ListAsmUserDetailsReq,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_asm_v1alpha1_entities_pb.ListAsmUserDetailsRes|null) => void
  ): UnaryResponse;
}

