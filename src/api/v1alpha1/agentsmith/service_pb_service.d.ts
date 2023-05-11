// package: api.v1alpha1.agentsmith
// file: api/v1alpha1/agentsmith/service.proto

import * as api_v1alpha1_agentsmith_service_pb from "../../../api/v1alpha1/agentsmith/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AgentSmithFollowAgent = {
  readonly methodName: string;
  readonly service: typeof AgentSmith;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_agentsmith_service_pb.FollowAgentReq;
  readonly responseType: typeof api_v1alpha1_agentsmith_service_pb.FollowAgentRes;
};

export class AgentSmith {
  static readonly serviceName: string;
  static readonly FollowAgent: AgentSmithFollowAgent;
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

export class AgentSmithClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  followAgent(requestMessage: api_v1alpha1_agentsmith_service_pb.FollowAgentReq, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_agentsmith_service_pb.FollowAgentRes>;
}

