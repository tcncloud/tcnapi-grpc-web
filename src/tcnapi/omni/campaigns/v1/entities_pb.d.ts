// package: tcnapi.omni.campaigns.v1
// file: tcnapi/omni/campaigns/v1/entities.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as tcnapi_omni_campaigns_v1_campaigns_pb from "../../../../tcnapi/omni/campaigns/v1/campaigns_pb";

export class ListcampaignsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListcampaignsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListcampaignsRequest): ListcampaignsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListcampaignsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListcampaignsRequest;
  static deserializeBinaryFromReader(message: ListcampaignsRequest, reader: jspb.BinaryReader): ListcampaignsRequest;
}

export namespace ListcampaignsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListcampaignsResponse extends jspb.Message {
  clearCampaignsList(): void;
  getCampaignsList(): Array<tcnapi_omni_campaigns_v1_campaigns_pb.Campaign>;
  setCampaignsList(value: Array<tcnapi_omni_campaigns_v1_campaigns_pb.Campaign>): void;
  addCampaigns(value?: tcnapi_omni_campaigns_v1_campaigns_pb.Campaign, index?: number): tcnapi_omni_campaigns_v1_campaigns_pb.Campaign;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListcampaignsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListcampaignsResponse): ListcampaignsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListcampaignsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListcampaignsResponse;
  static deserializeBinaryFromReader(message: ListcampaignsResponse, reader: jspb.BinaryReader): ListcampaignsResponse;
}

export namespace ListcampaignsResponse {
  export type AsObject = {
    campaignsList: Array<tcnapi_omni_campaigns_v1_campaigns_pb.Campaign.AsObject>,
    nextPageToken: string,
  }
}

