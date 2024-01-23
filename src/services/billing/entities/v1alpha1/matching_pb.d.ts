// package: services.billing.entities.v1alpha1
// file: services/billing/entities/v1alpha1/matching.proto

import * as jspb from "google-protobuf";

export class MatchingConfig extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasAreaCode(): boolean;
  clearAreaCode(): void;
  getAreaCode(): MatchingConfigAreaCode | undefined;
  setAreaCode(value?: MatchingConfigAreaCode): void;

  hasCountryPrefix(): boolean;
  clearCountryPrefix(): void;
  getCountryPrefix(): MatchingConfigCountryPrefix | undefined;
  setCountryPrefix(value?: MatchingConfigCountryPrefix): void;

  getConfigCase(): MatchingConfig.ConfigCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchingConfig.AsObject;
  static toObject(includeInstance: boolean, msg: MatchingConfig): MatchingConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchingConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchingConfig;
  static deserializeBinaryFromReader(message: MatchingConfig, reader: jspb.BinaryReader): MatchingConfig;
}

export namespace MatchingConfig {
  export type AsObject = {
    name: string,
    areaCode?: MatchingConfigAreaCode.AsObject,
    countryPrefix?: MatchingConfigCountryPrefix.AsObject,
  }

  export enum ConfigCase {
    CONFIG_NOT_SET = 0,
    AREA_CODE = 1,
    COUNTRY_PREFIX = 100,
  }
}

export class MatchingConfigAreaCode extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearAreaCodesList(): void;
  getAreaCodesList(): Array<string>;
  setAreaCodesList(value: Array<string>): void;
  addAreaCodes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchingConfigAreaCode.AsObject;
  static toObject(includeInstance: boolean, msg: MatchingConfigAreaCode): MatchingConfigAreaCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchingConfigAreaCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchingConfigAreaCode;
  static deserializeBinaryFromReader(message: MatchingConfigAreaCode, reader: jspb.BinaryReader): MatchingConfigAreaCode;
}

export namespace MatchingConfigAreaCode {
  export type AsObject = {
    name: string,
    areaCodesList: Array<string>,
  }
}

export class MatchingConfigCountryPrefix extends jspb.Message {
  getCountryCode(): number;
  setCountryCode(value: number): void;

  clearPrefixesList(): void;
  getPrefixesList(): Array<string>;
  setPrefixesList(value: Array<string>): void;
  addPrefixes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchingConfigCountryPrefix.AsObject;
  static toObject(includeInstance: boolean, msg: MatchingConfigCountryPrefix): MatchingConfigCountryPrefix.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchingConfigCountryPrefix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchingConfigCountryPrefix;
  static deserializeBinaryFromReader(message: MatchingConfigCountryPrefix, reader: jspb.BinaryReader): MatchingConfigCountryPrefix;
}

export namespace MatchingConfigCountryPrefix {
  export type AsObject = {
    countryCode: number,
    prefixesList: Array<string>,
  }
}

export interface MatchingRuleMap {
  MATCHING_RULE_UNSPECIFIED: 0;
  MATCHING_RULE_AREA_CODE: 1;
  MATCHING_RULE_COUNTRY_PREFIX: 2;
}

export const MatchingRule: MatchingRuleMap;

