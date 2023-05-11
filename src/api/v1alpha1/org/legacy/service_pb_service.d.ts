// package: api.v1alpha1.org.legacy
// file: api/v1alpha1/org/legacy/service.proto

import * as api_v1alpha1_org_legacy_service_pb from "../../../../api/v1alpha1/org/legacy/service_pb";
import * as api_v1alpha1_org_legacy_entities_pb from "../../../../api/v1alpha1/org/legacy/entities_pb";
import {grpc} from "@improbable-eng/grpc-web";

type OrgLegacyRegisterOrganization = {
  readonly methodName: string;
  readonly service: typeof OrgLegacy;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_legacy_entities_pb.RegisterOrganizationRequest;
  readonly responseType: typeof api_v1alpha1_org_legacy_entities_pb.RegisterOrganizationResponse;
};

export class OrgLegacy {
  static readonly serviceName: string;
  static readonly RegisterOrganization: OrgLegacyRegisterOrganization;
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

export class OrgLegacyClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  registerOrganization(
    requestMessage: api_v1alpha1_org_legacy_entities_pb.RegisterOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_legacy_entities_pb.RegisterOrganizationResponse|null) => void
  ): UnaryResponse;
  registerOrganization(
    requestMessage: api_v1alpha1_org_legacy_entities_pb.RegisterOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_legacy_entities_pb.RegisterOrganizationResponse|null) => void
  ): UnaryResponse;
}

