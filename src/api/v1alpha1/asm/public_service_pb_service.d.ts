// package: api.v1alpha1.asm
// file: api/v1alpha1/asm/public_service.proto

import * as api_v1alpha1_asm_public_service_pb from "../../../api/v1alpha1/asm/public_service_pb";
import * as api_commons_acd_pb from "../../../api/commons/acd_pb";
import * as api_commons_asm_pb from "../../../api/commons/asm_pb";
import * as api_commons_omnichannel_pb from "../../../api/commons/omnichannel_pb";
import * as api_v1alpha1_asm_service_pb from "../../../api/v1alpha1/asm/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AsmStreamAgentState = {
  readonly methodName: string;
  readonly service: typeof Asm;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_asm_service_pb.StreamAgentStateReq;
  readonly responseType: typeof api_commons_asm_pb.StreamAgentStateRes;
};

type AsmManagerStreamAgentState = {
  readonly methodName: string;
  readonly service: typeof Asm;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_asm_service_pb.ManagerStreamAgentStateReq;
  readonly responseType: typeof api_commons_acd_pb.AgentState;
};

type AsmPushEvents = {
  readonly methodName: string;
  readonly service: typeof Asm;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_asm_service_pb.PushEventsReq;
  readonly responseType: typeof api_v1alpha1_asm_service_pb.PushEventsRes;
};

type AsmCreateSession = {
  readonly methodName: string;
  readonly service: typeof Asm;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_asm_service_pb.CreateSessionReq;
  readonly responseType: typeof api_v1alpha1_asm_service_pb.CreateSessionRes;
};

type AsmEndSession = {
  readonly methodName: string;
  readonly service: typeof Asm;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_asm_service_pb.EndSessionReq;
  readonly responseType: typeof api_v1alpha1_asm_service_pb.EndSessionRes;
};

type AsmGetCurrentSession = {
  readonly methodName: string;
  readonly service: typeof Asm;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_asm_service_pb.GetCurrentSessionReq;
  readonly responseType: typeof api_v1alpha1_asm_service_pb.AsmSession;
};

type AsmEnableVoice = {
  readonly methodName: string;
  readonly service: typeof Asm;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_asm_service_pb.EnableVoiceReq;
  readonly responseType: typeof api_v1alpha1_asm_service_pb.EnableVoiceRes;
};

type AsmDisableVoice = {
  readonly methodName: string;
  readonly service: typeof Asm;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_asm_service_pb.DisableVoiceReq;
  readonly responseType: typeof api_v1alpha1_asm_service_pb.DisableVoiceRes;
};

type AsmListConversations = {
  readonly methodName: string;
  readonly service: typeof Asm;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_asm_service_pb.ListConversationsReq;
  readonly responseType: typeof api_v1alpha1_asm_service_pb.ListConversationsRes;
};

type AsmAssignNewConversation = {
  readonly methodName: string;
  readonly service: typeof Asm;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_asm_service_pb.AssignNewConversationReq;
  readonly responseType: typeof api_v1alpha1_asm_service_pb.AssignNewConversationRes;
};

type AsmListAgents = {
  readonly methodName: string;
  readonly service: typeof Asm;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_asm_service_pb.ListAgentsReq;
  readonly responseType: typeof api_v1alpha1_asm_service_pb.ListAgentsRes;
};

type AsmSetConversationCollectedData = {
  readonly methodName: string;
  readonly service: typeof Asm;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_asm_service_pb.SetConversationCollectedDataReq;
  readonly responseType: typeof api_v1alpha1_asm_service_pb.SetConversationCollectedDataRes;
};

type AsmGetQueuesDetails = {
  readonly methodName: string;
  readonly service: typeof Asm;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_asm_service_pb.GetQueuesDetailsReq;
  readonly responseType: typeof api_commons_omnichannel_pb.GetQueuesDetailsRes;
};

export class Asm {
  static readonly serviceName: string;
  static readonly StreamAgentState: AsmStreamAgentState;
  static readonly ManagerStreamAgentState: AsmManagerStreamAgentState;
  static readonly PushEvents: AsmPushEvents;
  static readonly CreateSession: AsmCreateSession;
  static readonly EndSession: AsmEndSession;
  static readonly GetCurrentSession: AsmGetCurrentSession;
  static readonly EnableVoice: AsmEnableVoice;
  static readonly DisableVoice: AsmDisableVoice;
  static readonly ListConversations: AsmListConversations;
  static readonly AssignNewConversation: AsmAssignNewConversation;
  static readonly ListAgents: AsmListAgents;
  static readonly SetConversationCollectedData: AsmSetConversationCollectedData;
  static readonly GetQueuesDetails: AsmGetQueuesDetails;
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

export class AsmClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  streamAgentState(requestMessage: api_v1alpha1_asm_service_pb.StreamAgentStateReq, metadata?: grpc.Metadata): ResponseStream<api_commons_asm_pb.StreamAgentStateRes>;
  managerStreamAgentState(requestMessage: api_v1alpha1_asm_service_pb.ManagerStreamAgentStateReq, metadata?: grpc.Metadata): ResponseStream<api_commons_acd_pb.AgentState>;
  pushEvents(
    requestMessage: api_v1alpha1_asm_service_pb.PushEventsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.PushEventsRes|null) => void
  ): UnaryResponse;
  pushEvents(
    requestMessage: api_v1alpha1_asm_service_pb.PushEventsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.PushEventsRes|null) => void
  ): UnaryResponse;
  createSession(
    requestMessage: api_v1alpha1_asm_service_pb.CreateSessionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.CreateSessionRes|null) => void
  ): UnaryResponse;
  createSession(
    requestMessage: api_v1alpha1_asm_service_pb.CreateSessionReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.CreateSessionRes|null) => void
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
  enableVoice(
    requestMessage: api_v1alpha1_asm_service_pb.EnableVoiceReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.EnableVoiceRes|null) => void
  ): UnaryResponse;
  enableVoice(
    requestMessage: api_v1alpha1_asm_service_pb.EnableVoiceReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.EnableVoiceRes|null) => void
  ): UnaryResponse;
  disableVoice(
    requestMessage: api_v1alpha1_asm_service_pb.DisableVoiceReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.DisableVoiceRes|null) => void
  ): UnaryResponse;
  disableVoice(
    requestMessage: api_v1alpha1_asm_service_pb.DisableVoiceReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_asm_service_pb.DisableVoiceRes|null) => void
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

