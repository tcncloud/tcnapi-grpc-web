// package: tcnapi.omni.campaigns.v1
// file: tcnapi/omni/campaigns/v1/entities.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as tcnapi_omni_campaigns_v1_campaigns_pb from "../../../../tcnapi/omni/campaigns/v1/campaigns_pb";

export class ListCampaignsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCampaignsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCampaignsRequest): ListCampaignsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCampaignsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCampaignsRequest;
  static deserializeBinaryFromReader(message: ListCampaignsRequest, reader: jspb.BinaryReader): ListCampaignsRequest;
}

export namespace ListCampaignsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    filter: string,
  }
}

export class ListCampaignsResponse extends jspb.Message {
  clearCampaignsList(): void;
  getCampaignsList(): Array<tcnapi_omni_campaigns_v1_campaigns_pb.Campaign>;
  setCampaignsList(value: Array<tcnapi_omni_campaigns_v1_campaigns_pb.Campaign>): void;
  addCampaigns(value?: tcnapi_omni_campaigns_v1_campaigns_pb.Campaign, index?: number): tcnapi_omni_campaigns_v1_campaigns_pb.Campaign;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCampaignsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCampaignsResponse): ListCampaignsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCampaignsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCampaignsResponse;
  static deserializeBinaryFromReader(message: ListCampaignsResponse, reader: jspb.BinaryReader): ListCampaignsResponse;
}

export namespace ListCampaignsResponse {
  export type AsObject = {
    campaignsList: Array<tcnapi_omni_campaigns_v1_campaigns_pb.Campaign.AsObject>,
    nextPageToken: string,
  }
}

export class GetCampaignRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCampaignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCampaignRequest): GetCampaignRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCampaignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCampaignRequest;
  static deserializeBinaryFromReader(message: GetCampaignRequest, reader: jspb.BinaryReader): GetCampaignRequest;
}

export namespace GetCampaignRequest {
  export type AsObject = {
    name: string,
  }
}

