// package: data.billing.v1alpha1
// file: data/billing/v1alpha1/matching.proto

import * as jspb from "google-protobuf";

export class MatchingConfig extends jspb.Message {
  hasAreaCode(): boolean;
  clearAreaCode(): void;
  getAreaCode(): MatchingConfigAreaCode | undefined;
  setAreaCode(value?: MatchingConfigAreaCode): void;

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
    areaCode?: MatchingConfigAreaCode.AsObject,
  }

  export enum ConfigCase {
    CONFIG_NOT_SET = 0,
    AREA_CODE = 1,
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

export interface MatchingRuleMap {
  MATCHING_RULE_UNSPECIFIED: 0;
  MATCHING_RULE_AREA_CODE: 1;
}

export const MatchingRule: MatchingRuleMap;

