// package: data.billing.v1alpha1
// file: data/billing/v1alpha1/plans.proto

import * as jspb from "google-protobuf";
import * as data_billing_v1alpha1_rates_pb from "../../../data/billing/v1alpha1/rates_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class BillingPlan extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearRateDefinitionsList(): void;
  getRateDefinitionsList(): Array<data_billing_v1alpha1_rates_pb.RateDefinition>;
  setRateDefinitionsList(value: Array<data_billing_v1alpha1_rates_pb.RateDefinition>): void;
  addRateDefinitions(value?: data_billing_v1alpha1_rates_pb.RateDefinition, index?: number): data_billing_v1alpha1_rates_pb.RateDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingPlan.AsObject;
  static toObject(includeInstance: boolean, msg: BillingPlan): BillingPlan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingPlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingPlan;
  static deserializeBinaryFromReader(message: BillingPlan, reader: jspb.BinaryReader): BillingPlan;
}

export namespace BillingPlan {
  export type AsObject = {
    billingPlanId: string,
    orgId: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    rateDefinitionsList: Array<data_billing_v1alpha1_rates_pb.RateDefinition.AsObject>,
  }
}

