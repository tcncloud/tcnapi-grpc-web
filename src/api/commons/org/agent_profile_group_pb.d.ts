// package: api.commons.org
// file: api/commons/org/agent_profile_group.proto

import * as jspb from "google-protobuf";
import * as api_commons_omnichannel_pb from "../../../api/commons/omnichannel_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class AgentProfileGroup extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearPriorityGroupsList(): void;
  getPriorityGroupsList(): Array<PriorityGroup>;
  setPriorityGroupsList(value: Array<PriorityGroup>): void;
  addPriorityGroups(value?: PriorityGroup, index?: number): PriorityGroup;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDefaultGroup(): boolean;
  setDefaultGroup(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentProfileGroup.AsObject;
  static toObject(includeInstance: boolean, msg: AgentProfileGroup): AgentProfileGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentProfileGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentProfileGroup;
  static deserializeBinaryFromReader(message: AgentProfileGroup, reader: jspb.BinaryReader): AgentProfileGroup;
}

export namespace AgentProfileGroup {
  export type AsObject = {
    id: string,
    orgId: string,
    name: string,
    priorityGroupsList: Array<PriorityGroup.AsObject>,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    defaultGroup: boolean,
  }
}

export class PriorityGroup extends jspb.Message {
  getThreshold(): number;
  setThreshold(value: number): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriorityGroup.AsObject;
  static toObject(includeInstance: boolean, msg: PriorityGroup): PriorityGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriorityGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriorityGroup;
  static deserializeBinaryFromReader(message: PriorityGroup, reader: jspb.BinaryReader): PriorityGroup;
}

export namespace PriorityGroup {
  export type AsObject = {
    threshold: number,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
  }
}

