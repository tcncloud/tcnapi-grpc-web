// package: tcnapi.omni.campaigns.v1
// file: tcnapi/omni/campaigns/v1/campaigns.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Campaign extends jspb.Message {
  getName(): number;
  setName(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): Campaign.CampaignStatusMap[keyof Campaign.CampaignStatusMap];
  setStatus(value: Campaign.CampaignStatusMap[keyof Campaign.CampaignStatusMap]): void;

  getChannelType(): Campaign.ChannelTypeMap[keyof Campaign.ChannelTypeMap];
  setChannelType(value: Campaign.ChannelTypeMap[keyof Campaign.ChannelTypeMap]): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getProjectSid(): number;
  setProjectSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Campaign.AsObject;
  static toObject(includeInstance: boolean, msg: Campaign): Campaign.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Campaign, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Campaign;
  static deserializeBinaryFromReader(message: Campaign, reader: jspb.BinaryReader): Campaign;
}

export namespace Campaign {
  export type AsObject = {
    name: number,
    title: string,
    description: string,
    startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: Campaign.CampaignStatusMap[keyof Campaign.CampaignStatusMap],
    channelType: Campaign.ChannelTypeMap[keyof Campaign.ChannelTypeMap],
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    projectSid: number,
  }

  export class Module extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Module.AsObject;
    static toObject(includeInstance: boolean, msg: Module): Module.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Module, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Module;
    static deserializeBinaryFromReader(message: Module, reader: jspb.BinaryReader): Module;
  }

  export namespace Module {
    export type AsObject = {
    }
  }

  export interface ChannelTypeMap {
    CHANNEL_TYPE_EMAIL: 0;
    CHANNEL_TYPE_SMS: 1;
    CHANNEL_TYPE_CHAT: 2;
    CHANNEL_TYPE_VOICE: 3;
    CHANNEL_TYPE_WHATSAPP: 4;
  }

  export const ChannelType: ChannelTypeMap;

  export interface CampaignStatusMap {
    SCHEDULING: 0;
    RUNNING: 200;
    PAUSED: 400;
    COMPLETED: 600;
    ARCHIVED: 800;
  }

  export const CampaignStatus: CampaignStatusMap;
}

