// package: data.billing.v1alpha1
// file: data/billing/v1alpha1/matching.proto

import * as jspb from "google-protobuf";

export class MatchingConfig extends jspb.Message {
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
  }
}

export interface MatchingRuleMap {
  MATCHING_RULE_UNSPECIFIED: 0;
}

export const MatchingRule: MatchingRuleMap;

