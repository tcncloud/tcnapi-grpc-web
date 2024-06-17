// package: services.billing.entities.v1alpha3
// file: services/billing/entities/v1alpha3/plans.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class Plan extends jspb.Message {
  getPlanId(): string;
  setPlanId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getType(): PlanTypeMap[keyof PlanTypeMap];
  setType(value: PlanTypeMap[keyof PlanTypeMap]): void;

  getIsDraft(): boolean;
  setIsDraft(value: boolean): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Plan.AsObject;
  static toObject(includeInstance: boolean, msg: Plan): Plan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Plan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Plan;
  static deserializeBinaryFromReader(message: Plan, reader: jspb.BinaryReader): Plan;
}

export namespace Plan {
  export type AsObject = {
    planId: string,
    title: string,
    type: PlanTypeMap[keyof PlanTypeMap],
    isDraft: boolean,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    userId: string,
  }
}

export interface PlanTypeMap {
  PLAN_TYPE_UNSPECIFIED: 0;
  PLAN_TYPE_TEMPLATE: 1;
  PLAN_TYPE_ORG: 2;
}

export const PlanType: PlanTypeMap;

