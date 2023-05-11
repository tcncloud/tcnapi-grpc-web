// package: api.v1alpha1.asm
// file: api/v1alpha1/asm/service.proto

import * as api_v1alpha1_asm_service_pb from "../../../api/v1alpha1/asm/service_pb";
import * as api_commons_omnichannel_pb from "../../../api/commons/omnichannel_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AsmApiCreateSession = {
  readonly methodName: string;
  readonly service: typeof AsmApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_asm_service_pb.CreateSessionReq;
  readonly responseType: typeof api_v1alpha1_asm_service_pb.CreateSessionRes;
};

type AsmApiGetStatus = {
  readonly methodName: string;
  readonly service: typeof AsmApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_asm_service_pb.GetStatusReq;
  readonly responseType: typeof api_v1alpha1_asm_service_pb.GetStatusRes;
};

type AsmApiEndSession = {
  readonly methodName: string;
  readonly service: typeof AsmApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_asm_service_pb.EndSessionReq;
  readonly responseType: typeof api_v1alpha1_asm_service_pb.EndSessionRes;
};

type AsmApiGetCurrentSession = {
  readonly methodName: string;
  readonly service: typeof AsmApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_asm_service_pb.GetCurrentSessionReq;
  readonly responseType: typeof api_v1alpha1_asm_service_pb.AsmSession;
};

type AsmApiSwitchSubsession = {
  readonly methodName: string;
  readonly service: typeof AsmApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_asm_service_pb.SwitchSubsessionReq;
  readonly responseType: typeof api_v1alpha1_asm_service_pb.SwitchSubsessionRes;
};

type AsmApiListConversations = {
  readonly methodName: string;
  readonly service: typeof AsmApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_asm_service_pb.ListConversationsReq;
  readonly responseType: typeof api_v1alpha1_asm_service_pb.ListConversationsRes;
};

type AsmApiAssignNewConversation = {
  readonly methodName: string;
  readonly service: typeof AsmApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_asm_service_pb.AssignNewConversationReq;
  readonly responseType: typeof api_v1alpha1_asm_service_pb.AssignNewConversationRes;
};

type AsmApiListAgents = {
  readonly methodName: string;
  readonly service: typeof AsmApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_asm_service_pb.ListAgentsReq;
  readonly responseType: typeof api_v1alpha1_asm_service_pb.ListAgentsRes;
};

type AsmApiSetConversationCollectedData = {
  readonly methodName: string;
  readonly service: typeof AsmApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_asm_service_pb.SetConversationCollectedDataReq;
  readonly responseType: typeof api_v1alpha1_asm_service_pb.SetConversationCollectedDataRes;
};

type AsmApiGetQueuesDetails = {
  readonly methodName: string;
  readonly service: typeof AsmApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_asm_service_pb.GetQueuesDetailsReq;
  readonly responseType: typeof api_commons_omnichannel_pb.GetQueuesDetailsRes;
};

export class AsmApi {
  static readonly serviceName: string;
  static readonly CreateSession: AsmApiCreateSession;
  static readonly GetStatus: AsmApiGetStatus;
  static readonly EndSession: AsmApiEndSession;
  static readonly GetCurrentSession: AsmApiGetCurrentSession;
  static readonly SwitchSubsession: AsmApiSwitchSubsession;
  static readonly ListConversations: AsmApiListConversations;
  static readonly AssignNewConversation: AsmApiAssignNewConversation;
  static readonly ListAgents: AsmApiListAgents;
  static readonly SetConversationCollectedData: AsmApiSetConversationCollectedData;
  static readonly GetQueuesDetails: AsmApiGetQueuesDetails;
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

export class AsmApiClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createSession(
    requestMessage: api_v1alpha1_asm_service_pb.CreateSessionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.CreateSessionRes|null) => void
  ): UnaryResponse;
  createSession(
    requestMessage: api_v1alpha1_asm_service_pb.CreateSessionReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.CreateSessionRes|null) => void
  ): UnaryResponse;
  getStatus(
    requestMessage: api_v1alpha1_asm_service_pb.GetStatusReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.GetStatusRes|null) => void
  ): UnaryResponse;
  getStatus(
    requestMessage: api_v1alpha1_asm_service_pb.GetStatusReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.GetStatusRes|null) => void
  ): UnaryResponse;
  endSession(
    requestMessage: api_v1alpha1_asm_service_pb.EndSessionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.EndSessionRes|null) => void
  ): UnaryResponse;
  endSession(
    requestMessage: api_v1alpha1_asm_service_pb.EndSessionReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.EndSessionRes|null) => void
  ): UnaryResponse;
  getCurrentSession(
    requestMessage: api_v1alpha1_asm_service_pb.GetCurrentSessionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.AsmSession|null) => void
  ): UnaryResponse;
  getCurrentSession(
    requestMessage: api_v1alpha1_asm_service_pb.GetCurrentSessionReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.AsmSession|null) => void
  ): UnaryResponse;
  switchSubsession(
    requestMessage: api_v1alpha1_asm_service_pb.SwitchSubsessionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.SwitchSubsessionRes|null) => void
  ): UnaryResponse;
  switchSubsession(
    requestMessage: api_v1alpha1_asm_service_pb.SwitchSubsessionReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.SwitchSubsessionRes|null) => void
  ): UnaryResponse;
  listConversations(
    requestMessage: api_v1alpha1_asm_service_pb.ListConversationsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.ListConversationsRes|null) => void
  ): UnaryResponse;
  listConversations(
    requestMessage: api_v1alpha1_asm_service_pb.ListConversationsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.ListConversationsRes|null) => void
  ): UnaryResponse;
  assignNewConversation(
    requestMessage: api_v1alpha1_asm_service_pb.AssignNewConversationReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.AssignNewConversationRes|null) => void
  ): UnaryResponse;
  assignNewConversation(
    requestMessage: api_v1alpha1_asm_service_pb.AssignNewConversationReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.AssignNewConversationRes|null) => void
  ): UnaryResponse;
  listAgents(
    requestMessage: api_v1alpha1_asm_service_pb.ListAgentsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.ListAgentsRes|null) => void
  ): UnaryResponse;
  listAgents(
    requestMessage: api_v1alpha1_asm_service_pb.ListAgentsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.ListAgentsRes|null) => void
  ): UnaryResponse;
  setConversationCollectedData(
    requestMessage: api_v1alpha1_asm_service_pb.SetConversationCollectedDataReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.SetConversationCollectedDataRes|null) => void
  ): UnaryResponse;
  setConversationCollectedData(
    requestMessage: api_v1alpha1_asm_service_pb.SetConversationCollectedDataReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.SetConversationCollectedDataRes|null) => void
  ): UnaryResponse;
  getQueuesDetails(
    requestMessage: api_v1alpha1_asm_service_pb.GetQueuesDetailsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_omnichannel_pb.GetQueuesDetailsRes|null) => void
  ): UnaryResponse;
  getQueuesDetails(
    requestMessage: api_v1alpha1_asm_service_pb.GetQueuesDetailsReq,
    callback: (error: ServiceError|null, responseMessage: api_commons_omnichannel_pb.GetQueuesDetailsRes|null) => void
  ): UnaryResponse;
}

