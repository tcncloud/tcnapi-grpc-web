// package: services.org.hunt_groups.v1alpha1
// file: services/org/hunt_groups/v1alpha1/service.proto

import * as services_org_hunt_groups_v1alpha1_service_pb from "../../../../services/org/hunt_groups/v1alpha1/service_pb";
import * as services_org_hunt_groups_v1alpha1_entities_pb from "../../../../services/org/hunt_groups/v1alpha1/entities_pb";
import {grpc} from "@improbable-eng/grpc-web";

type HuntGroupsServiceListHuntGroupExileLinks = {
  readonly methodName: string;
  readonly service: typeof HuntGroupsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_hunt_groups_v1alpha1_entities_pb.ListHuntGroupExileLinksRequest;
  readonly responseType: typeof services_org_hunt_groups_v1alpha1_entities_pb.ListHuntGroupExileLinksResponse;
};

export class HuntGroupsService {
  static readonly serviceName: string;
  static readonly ListHuntGroupExileLinks: HuntGroupsServiceListHuntGroupExileLinks;
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

export class HuntGroupsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listHuntGroupExileLinks(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.ListHuntGroupExileLinksRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.ListHuntGroupExileLinksResponse|null) => void
  ): UnaryResponse;
  listHuntGroupExileLinks(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.ListHuntGroupExileLinksRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.ListHuntGroupExileLinksResponse|null) => void
  ): UnaryResponse;
}

