// package: tcnapi.omni.campaigns.v1
// file: tcnapi/omni/campaigns/v1/campaigns.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

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

  getState(): Campaign.CampaignStateMap[keyof Campaign.CampaignStateMap];
  setState(value: Campaign.CampaignStateMap[keyof Campaign.CampaignStateMap]): void;

  getChannelType(): ChannelTypeMap[keyof ChannelTypeMap];
  setChannelType(value: ChannelTypeMap[keyof ChannelTypeMap]): void;

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

  hasTimeZone(): boolean;
  clearTimeZone(): void;
  getTimeZone(): TimeZoneWrapper | undefined;
  setTimeZone(value?: TimeZoneWrapper): void;

  getShortenUrl(): boolean;
  setShortenUrl(value: boolean): void;

  clearModuleList(): void;
  getModuleList(): Array<Campaign.Module>;
  setModuleList(value: Array<Campaign.Module>): void;
  addModule(value?: Campaign.Module, index?: number): Campaign.Module;

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
    state: Campaign.CampaignStateMap[keyof Campaign.CampaignStateMap],
    channelType: ChannelTypeMap[keyof ChannelTypeMap],
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    projectSid: number,
    timeZone?: TimeZoneWrapper.AsObject,
    shortenUrl: boolean,
    moduleList: Array<Campaign.Module.AsObject>,
  }

  export class Module extends jspb.Message {
    getCampaignModuleSid(): number;
    setCampaignModuleSid(value: number): void;

    getCampaignSid(): number;
    setCampaignSid(value: number): void;

    getModuleType(): ModuleTypeMap[keyof ModuleTypeMap];
    setModuleType(value: ModuleTypeMap[keyof ModuleTypeMap]): void;

    getState(): Campaign.Module.ModuleStateMap[keyof Campaign.Module.ModuleStateMap];
    setState(value: Campaign.Module.ModuleStateMap[keyof Campaign.Module.ModuleStateMap]): void;

    hasDateCreated(): boolean;
    clearDateCreated(): void;
    getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasDateModified(): boolean;
    clearDateModified(): void;
    getDateModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDateModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasScheduledStopDate(): boolean;
    clearScheduledStopDate(): void;
    getScheduledStopDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setScheduledStopDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasActualStopDate(): boolean;
    clearActualStopDate(): void;
    getActualStopDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setActualStopDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

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
      campaignModuleSid: number,
      campaignSid: number,
      moduleType: ModuleTypeMap[keyof ModuleTypeMap],
      state: Campaign.Module.ModuleStateMap[keyof Campaign.Module.ModuleStateMap],
      dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      dateModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      scheduledStopDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      actualStopDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export interface ModuleStateMap {
      MODULE_PREPARING: 0;
      MODULE_SCHEDULING: 100;
      MODULE_RUNNING: 200;
      MODULE_RUNNING_ERROR: 250;
      MODULE_ERROR_STANDBY: 300;
      MODULE_PAUSED: 400;
      MODULE_RESUMING: 500;
      MODULE_COMPLETED: 600;
      MODULE_ARCHIVED: 700;
    }

    export const ModuleState: ModuleStateMap;
  }

  export interface CampaignStateMap {
    SCHEDULING: 0;
    RUNNING: 200;
    PAUSED: 400;
    COMPLETED: 600;
    ARCHIVED: 800;
  }

  export const CampaignState: CampaignStateMap;
}

export class TimeZoneWrapper extends jspb.Message {
  getValue(): TimeZoneMap[keyof TimeZoneMap];
  setValue(value: TimeZoneMap[keyof TimeZoneMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeZoneWrapper.AsObject;
  static toObject(includeInstance: boolean, msg: TimeZoneWrapper): TimeZoneWrapper.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeZoneWrapper, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeZoneWrapper;
  static deserializeBinaryFromReader(message: TimeZoneWrapper, reader: jspb.BinaryReader): TimeZoneWrapper;
}

export namespace TimeZoneWrapper {
  export type AsObject = {
    value: TimeZoneMap[keyof TimeZoneMap],
  }
}

export class WeekdayTimeRange extends jspb.Message {
  clearEntriesList(): void;
  getEntriesList(): Array<WeekdayTimeRangeEntry>;
  setEntriesList(value: Array<WeekdayTimeRangeEntry>): void;
  addEntries(value?: WeekdayTimeRangeEntry, index?: number): WeekdayTimeRangeEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeekdayTimeRange.AsObject;
  static toObject(includeInstance: boolean, msg: WeekdayTimeRange): WeekdayTimeRange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WeekdayTimeRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeekdayTimeRange;
  static deserializeBinaryFromReader(message: WeekdayTimeRange, reader: jspb.BinaryReader): WeekdayTimeRange;
}

export namespace WeekdayTimeRange {
  export type AsObject = {
    entriesList: Array<WeekdayTimeRangeEntry.AsObject>,
  }
}

export class WeekdayTimeRangeEntry extends jspb.Message {
  getStartDay(): Weekday.EnumMap[keyof Weekday.EnumMap];
  setStartDay(value: Weekday.EnumMap[keyof Weekday.EnumMap]): void;

  getStartHour(): number;
  setStartHour(value: number): void;

  getStartMinute(): number;
  setStartMinute(value: number): void;

  getEndDay(): Weekday.EnumMap[keyof Weekday.EnumMap];
  setEndDay(value: Weekday.EnumMap[keyof Weekday.EnumMap]): void;

  getEndHour(): number;
  setEndHour(value: number): void;

  getEndMinute(): number;
  setEndMinute(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeekdayTimeRangeEntry.AsObject;
  static toObject(includeInstance: boolean, msg: WeekdayTimeRangeEntry): WeekdayTimeRangeEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WeekdayTimeRangeEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeekdayTimeRangeEntry;
  static deserializeBinaryFromReader(message: WeekdayTimeRangeEntry, reader: jspb.BinaryReader): WeekdayTimeRangeEntry;
}

export namespace WeekdayTimeRangeEntry {
  export type AsObject = {
    startDay: Weekday.EnumMap[keyof Weekday.EnumMap],
    startHour: number,
    startMinute: number,
    endDay: Weekday.EnumMap[keyof Weekday.EnumMap],
    endHour: number,
    endMinute: number,
  }
}

export class Weekday extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Weekday.AsObject;
  static toObject(includeInstance: boolean, msg: Weekday): Weekday.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Weekday, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Weekday;
  static deserializeBinaryFromReader(message: Weekday, reader: jspb.BinaryReader): Weekday;
}

export namespace Weekday {
  export type AsObject = {
  }

  export interface EnumMap {
    SUNDAY: 0;
    MONDAY: 1;
    TUESDAY: 2;
    WEDNESDAY: 3;
    THURSDAY: 4;
    FRIDAY: 5;
    SATURDAY: 6;
  }

  export const Enum: EnumMap;
}

export interface ChannelTypeMap {
  CHANNEL_TYPE_EMAIL: 0;
  CHANNEL_TYPE_SMS: 1;
  CHANNEL_TYPE_CHAT: 2;
  CHANNEL_TYPE_VOICE: 3;
  CHANNEL_TYPE_WHATSAPP: 4;
}

export const ChannelType: ChannelTypeMap;

export interface ModuleTypeMap {
  MODULE_TYPE_INBOUND: 0;
  MODULE_TYPE_OUTBOUND: 1;
  MODULE_TYPE_MANUAL_APPROVAL: 2;
  MODULE_TYPE_MANUAL: 3;
}

export const ModuleType: ModuleTypeMap;

export interface TimeZoneMap {
  TIME_ZONE_AMERICA_PUERTO_RICO: 0;
  TIME_ZONE_AMERICA_NEW_YORK: 1;
  TIME_ZONE_AMERICA_INDIANAPOLIS: 2;
  TIME_ZONE_AMERICA_CHICAGO: 3;
  TIME_ZONE_AMERICA_PHOENIX: 4;
  TIME_ZONE_AMERICA_DENVER: 5;
  TIME_ZONE_AMERICA_LOS_ANGELES: 6;
  TIME_ZONE_AMERICA_ANCHORAGE: 7;
  TIME_ZONE_ASIA_MANILA: 8;
  TIME_ZONE_ASIA_CALCUTTA: 9;
  TIME_ZONE_ASIA_COLOMBO: 10;
  TIME_ZONE_PACIFIC_HONOLULU: 11;
  TIME_ZONE_CANADA_NEWFOUNDLAND: 12;
  TIME_ZONE_CANADA_ATLANTIC: 13;
  TIME_ZONE_CANADA_CENTRAL: 14;
  TIME_ZONE_CANADA_EAST_SASKATCHEWAN: 15;
  TIME_ZONE_CANADA_EASTERN: 16;
  TIME_ZONE_CANADA_MOUNTAIN: 17;
  TIME_ZONE_CANADA_PACIFIC: 18;
  TIME_ZONE_CANADA_SASKATCHEWAN: 19;
  TIME_ZONE_CANADA_YUKON: 20;
  TIME_ZONE_ETC_GREENWICH: 21;
  TIME_ZONE_ETC_UNIVERSAL: 22;
  TIME_ZONE_EUROPE_LONDON: 23;
  TIME_ZONE_EUROPE_MADRID: 24;
  TIME_ZONE_EUROPE_BERLIN: 25;
  TIME_ZONE_EUROPE_BUCHAREST: 26;
  TIME_ZONE_AMERICA_MEXICO_CITY: 27;
  TIME_ZONE_MEXICO_BAJASUR: 28;
  TIME_ZONE_MEXICO_BAJANORTE: 29;
  TIME_ZONE_BRAZIL_ACRE: 30;
  TIME_ZONE_BRAZIL_WEST: 31;
  TIME_ZONE_BRAZIL_EAST: 32;
  TIME_ZONE_BRAZIL_DENORONHA: 33;
  TIME_ZONE_AUSTRALIA_DARWIN: 34;
  TIME_ZONE_AUSTRALIA_ADELAIDE: 35;
  TIME_ZONE_AUSTRALIA_SYDNEY: 36;
  TIME_ZONE_AUSTRALIA_BRISBANE: 37;
  TIME_ZONE_AUSTRALIA_MELBOURNE: 38;
  TIME_ZONE_AUSTRALIA_PERTH: 39;
  TIME_ZONE_PACIFIC_AUCKLAND: 40;
  TIME_ZONE_PACIFIC_CHATHAM: 41;
  TIME_ZONE_ASIA_SINGAPORE: 42;
  TIME_ZONE_ASIA_JAPAN: 43;
}

export const TimeZone: TimeZoneMap;

