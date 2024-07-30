// package: services.billing.entities.v1alpha4
// file: services/billing/entities/v1alpha4/rates.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as services_billing_entities_v1alpha4_products_pb from "../../../../services/billing/entities/v1alpha4/products_pb";
import * as services_billing_entities_v1alpha4_tags_pb from "../../../../services/billing/entities/v1alpha4/tags_pb";

export class RateDefinition extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  getSkuId(): string;
  setSkuId(value: string): void;

  hasBillingTag(): boolean;
  clearBillingTag(): void;
  getBillingTag(): services_billing_entities_v1alpha4_tags_pb.BillingTag | undefined;
  setBillingTag(value?: services_billing_entities_v1alpha4_tags_pb.BillingTag): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): services_billing_entities_v1alpha4_products_pb.ProductConfig | undefined;
  setConfig(value?: services_billing_entities_v1alpha4_products_pb.ProductConfig): void;

  getIsDraft(): boolean;
  setIsDraft(value: boolean): void;

  getIsOverwrite(): boolean;
  setIsOverwrite(value: boolean): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDeleteTime(): boolean;
  clearDeleteTime(): void;
  getDeleteTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeleteTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RateDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: RateDefinition): RateDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RateDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RateDefinition;
  static deserializeBinaryFromReader(message: RateDefinition, reader: jspb.BinaryReader): RateDefinition;
}

export namespace RateDefinition {
  export type AsObject = {
    rateDefinitionId: string,
    skuId: string,
    billingTag?: services_billing_entities_v1alpha4_tags_pb.BillingTag.AsObject,
    config?: services_billing_entities_v1alpha4_products_pb.ProductConfig.AsObject,
    isDraft: boolean,
    isOverwrite: boolean,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deleteTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class MatchingRule extends jspb.Message {
  getMatchingRuleId(): string;
  setMatchingRuleId(value: string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): services_billing_entities_v1alpha4_products_pb.ProductConfig | undefined;
  setConfig(value?: services_billing_entities_v1alpha4_products_pb.ProductConfig): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDeleteTime(): boolean;
  clearDeleteTime(): void;
  getDeleteTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeleteTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchingRule.AsObject;
  static toObject(includeInstance: boolean, msg: MatchingRule): MatchingRule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchingRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchingRule;
  static deserializeBinaryFromReader(message: MatchingRule, reader: jspb.BinaryReader): MatchingRule;
}

export namespace MatchingRule {
  export type AsObject = {
    matchingRuleId: string,
    config?: services_billing_entities_v1alpha4_products_pb.ProductConfig.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deleteTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

