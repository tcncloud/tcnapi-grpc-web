// package: services.omnichannel.tasks.v1alpha1
// file: services/omnichannel/tasks/v1alpha1/entities.proto

import * as jspb from "google-protobuf";
import * as api_commons_omnichannel_pb from "../../../../api/commons/omnichannel_pb";

export class CancelTasksRequest extends jspb.Message {
  clearTaskSidList(): void;
  getTaskSidList(): Array<string>;
  setTaskSidList(value: Array<string>): void;
  addTaskSid(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelTasksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelTasksRequest): CancelTasksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelTasksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelTasksRequest;
  static deserializeBinaryFromReader(message: CancelTasksRequest, reader: jspb.BinaryReader): CancelTasksRequest;
}

export namespace CancelTasksRequest {
  export type AsObject = {
    taskSidList: Array<string>,
  }
}

export class CancelTasksResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelTasksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelTasksResponse): CancelTasksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelTasksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelTasksResponse;
  static deserializeBinaryFromReader(message: CancelTasksResponse, reader: jspb.BinaryReader): CancelTasksResponse;
}

export namespace CancelTasksResponse {
  export type AsObject = {
  }
}

export class CancelAllTasksRequest extends jspb.Message {
  hasCampaignSid(): boolean;
  clearCampaignSid(): void;
  getCampaignSid(): CancelAllTasksRequest.ByCampaignSid | undefined;
  setCampaignSid(value?: CancelAllTasksRequest.ByCampaignSid): void;

  getFilterCase(): CancelAllTasksRequest.FilterCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelAllTasksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelAllTasksRequest): CancelAllTasksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelAllTasksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelAllTasksRequest;
  static deserializeBinaryFromReader(message: CancelAllTasksRequest, reader: jspb.BinaryReader): CancelAllTasksRequest;
}

export namespace CancelAllTasksRequest {
  export type AsObject = {
    campaignSid?: CancelAllTasksRequest.ByCampaignSid.AsObject,
  }

  export class ByCampaignSid extends jspb.Message {
    getCampaignSid(): string;
    setCampaignSid(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ByCampaignSid.AsObject;
    static toObject(includeInstance: boolean, msg: ByCampaignSid): ByCampaignSid.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ByCampaignSid, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ByCampaignSid;
    static deserializeBinaryFromReader(message: ByCampaignSid, reader: jspb.BinaryReader): ByCampaignSid;
  }

  export namespace ByCampaignSid {
    export type AsObject = {
      campaignSid: string,
    }
  }

  export enum FilterCase {
    FILTER_NOT_SET = 0,
    CAMPAIGN_SID = 100,
  }
}

export class CancelAllTasksResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelAllTasksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelAllTasksResponse): CancelAllTasksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelAllTasksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelAllTasksResponse;
  static deserializeBinaryFromReader(message: CancelAllTasksResponse, reader: jspb.BinaryReader): CancelAllTasksResponse;
}

export namespace CancelAllTasksResponse {
  export type AsObject = {
  }
}

