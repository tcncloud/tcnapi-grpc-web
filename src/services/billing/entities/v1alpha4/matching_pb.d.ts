// package: services.billing.entities.v1alpha4
// file: services/billing/entities/v1alpha4/matching.proto

import * as jspb from "google-protobuf";

export class MatchingConfig extends jspb.Message {
  hasCountryCodePrefix(): boolean;
  clearCountryCodePrefix(): void;
  getCountryCodePrefix(): CountryCodePrefix | undefined;
  setCountryCodePrefix(value?: CountryCodePrefix): void;

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
    countryCodePrefix?: CountryCodePrefix.AsObject,
  }

  export enum ConfigCase {
    CONFIG_NOT_SET = 0,
    COUNTRY_CODE_PREFIX = 1,
  }
}

export class CountryCodePrefix extends jspb.Message {
  getCountryCode(): number;
  setCountryCode(value: number): void;

  clearPrefixesList(): void;
  getPrefixesList(): Array<string>;
  setPrefixesList(value: Array<string>): void;
  addPrefixes(value: string, index?: number): string;

  getMatchingRuleId(): string;
  setMatchingRuleId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountryCodePrefix.AsObject;
  static toObject(includeInstance: boolean, msg: CountryCodePrefix): CountryCodePrefix.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CountryCodePrefix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountryCodePrefix;
  static deserializeBinaryFromReader(message: CountryCodePrefix, reader: jspb.BinaryReader): CountryCodePrefix;
}

export namespace CountryCodePrefix {
  export type AsObject = {
    countryCode: number,
    prefixesList: Array<string>,
    matchingRuleId: string,
    name: string,
  }
}

