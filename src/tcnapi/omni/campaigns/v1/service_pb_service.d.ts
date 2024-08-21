// package: tcnapi.omni.campaigns.v1
// file: tcnapi/omni/campaigns/v1/service.proto

import * as tcnapi_omni_campaigns_v1_service_pb from "../../../../tcnapi/omni/campaigns/v1/service_pb";
import * as tcnapi_omni_campaigns_v1_entities_pb from "../../../../tcnapi/omni/campaigns/v1/entities_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CampaignsListCampaigns = {
  readonly methodName: string;
  readonly service: typeof Campaigns;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tcnapi_omni_campaigns_v1_entities_pb.ListcampaignsRequest;
  readonly responseType: typeof tcnapi_omni_campaigns_v1_entities_pb.ListcampaignsResponse;
};

export class Campaigns {
  static readonly serviceName: string;
  static readonly ListCampaigns: CampaignsListCampaigns;
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

export class CampaignsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listCampaigns(
    requestMessage: tcnapi_omni_campaigns_v1_entities_pb.ListcampaignsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tcnapi_omni_campaigns_v1_entities_pb.ListcampaignsResponse|null) => void
  ): UnaryResponse;
  listCampaigns(
    requestMessage: tcnapi_omni_campaigns_v1_entities_pb.ListcampaignsRequest,
    callback: (error: ServiceError|null, responseMessage: tcnapi_omni_campaigns_v1_entities_pb.ListcampaignsResponse|null) => void
  ): UnaryResponse;
}

