// package: services.billing.entities.v1alpha3
// file: services/billing/entities/v1alpha3/matching.proto

import * as jspb from "google-protobuf";

export class MatchingConfig extends jspb.Message {
  getType(): MatchingConfigTypeMap[keyof MatchingConfigTypeMap];
  setType(value: MatchingConfigTypeMap[keyof MatchingConfigTypeMap]): void;

  hasCountryPrefix(): boolean;
  clearCountryPrefix(): void;
  getCountryPrefix(): CountryPrefixMatchingConfig | undefined;
  setCountryPrefix(value?: CountryPrefixMatchingConfig): void;

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
    type: MatchingConfigTypeMap[keyof MatchingConfigTypeMap],
    countryPrefix?: CountryPrefixMatchingConfig.AsObject,
  }

  export enum ConfigCase {
    CONFIG_NOT_SET = 0,
    COUNTRY_PREFIX = 2,
  }
}

export class CountryPrefixMatchingConfig extends jspb.Message {
  getCountryCode(): number;
  setCountryCode(value: number): void;

  clearPrefixesList(): void;
  getPrefixesList(): Array<string>;
  setPrefixesList(value: Array<string>): void;
  addPrefixes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountryPrefixMatchingConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CountryPrefixMatchingConfig): CountryPrefixMatchingConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CountryPrefixMatchingConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountryPrefixMatchingConfig;
  static deserializeBinaryFromReader(message: CountryPrefixMatchingConfig, reader: jspb.BinaryReader): CountryPrefixMatchingConfig;
}

export namespace CountryPrefixMatchingConfig {
  export type AsObject = {
    countryCode: number,
    prefixesList: Array<string>,
  }
}

export interface MatchingConfigTypeMap {
  MATCHING_CONFIG_TYPE_UNSPECIFIED: 0;
  MATCHING_CONFIG_TYPE_COUNTRY_PREFIX: 1;
}

export const MatchingConfigType: MatchingConfigTypeMap;

