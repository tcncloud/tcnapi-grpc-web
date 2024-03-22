// package: services.billing.entities.v1alpha1
// file: services/billing/entities/v1alpha1/history.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as services_billing_entities_v1alpha1_rates_pb from "../../../../services/billing/entities/v1alpha1/rates_pb";

export class RateHistoryItem extends jspb.Message {
  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndDate(): boolean;
  clearEndDate(): void;
  getEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearRatesList(): void;
  getRatesList(): Array<services_billing_entities_v1alpha1_rates_pb.RateDefinition>;
  setRatesList(value: Array<services_billing_entities_v1alpha1_rates_pb.RateDefinition>): void;
  addRates(value?: services_billing_entities_v1alpha1_rates_pb.RateDefinition, index?: number): services_billing_entities_v1alpha1_rates_pb.RateDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RateHistoryItem.AsObject;
  static toObject(includeInstance: boolean, msg: RateHistoryItem): RateHistoryItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RateHistoryItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RateHistoryItem;
  static deserializeBinaryFromReader(message: RateHistoryItem, reader: jspb.BinaryReader): RateHistoryItem;
}

export namespace RateHistoryItem {
  export type AsObject = {
    startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ratesList: Array<services_billing_entities_v1alpha1_rates_pb.RateDefinition.AsObject>,
  }
}

