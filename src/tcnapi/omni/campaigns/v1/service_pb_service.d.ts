// package: tcnapi.omni.campaigns.v1
// file: tcnapi/omni/campaigns/v1/service.proto

import * as tcnapi_omni_campaigns_v1_service_pb from "../../../../tcnapi/omni/campaigns/v1/service_pb";
import * as tcnapi_omni_campaigns_v1_campaigns_pb from "../../../../tcnapi/omni/campaigns/v1/campaigns_pb";
import * as tcnapi_omni_campaigns_v1_entities_pb from "../../../../tcnapi/omni/campaigns/v1/entities_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CampaignsListCampaigns = {
  readonly methodName: string;
  readonly service: typeof Campaigns;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tcnapi_omni_campaigns_v1_entities_pb.ListCampaignsRequest;
  readonly responseType: typeof tcnapi_omni_campaigns_v1_entities_pb.ListCampaignsResponse;
};

type CampaignsGetCampaign = {
  readonly methodName: string;
  readonly service: typeof Campaigns;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tcnapi_omni_campaigns_v1_entities_pb.GetCampaignRequest;
  readonly responseType: typeof tcnapi_omni_campaigns_v1_campaigns_pb.Campaign;
};

export class Campaigns {
  static readonly serviceName: string;
  static readonly ListCampaigns: CampaignsListCampaigns;
  static readonly GetCampaign: CampaignsGetCampaign;
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
    requestMessage: tcnapi_omni_campaigns_v1_entities_pb.ListCampaignsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tcnapi_omni_campaigns_v1_entities_pb.ListCampaignsResponse|null) => void
  ): UnaryResponse;
  listCampaigns(
    requestMessage: tcnapi_omni_campaigns_v1_entities_pb.ListCampaignsRequest,
    callback: (error: ServiceError|null, responseMessage: tcnapi_omni_campaigns_v1_entities_pb.ListCampaignsResponse|null) => void
  ): UnaryResponse;
  getCampaign(
    requestMessage: tcnapi_omni_campaigns_v1_entities_pb.GetCampaignRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tcnapi_omni_campaigns_v1_campaigns_pb.Campaign|null) => void
  ): UnaryResponse;
  getCampaign(
    requestMessage: tcnapi_omni_campaigns_v1_entities_pb.GetCampaignRequest,
    callback: (error: ServiceError|null, responseMessage: tcnapi_omni_campaigns_v1_campaigns_pb.Campaign|null) => void
  ): UnaryResponse;
}

