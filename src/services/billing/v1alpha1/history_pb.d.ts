// package: services.billing.v1alpha1
// file: services/billing/v1alpha1/history.proto

import * as jspb from "google-protobuf";
import * as services_billing_entities_v1alpha1_history_pb from "../../../services/billing/entities/v1alpha1/history_pb";

export class GetRateHistoryRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRateHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRateHistoryRequest): GetRateHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRateHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRateHistoryRequest;
  static deserializeBinaryFromReader(message: GetRateHistoryRequest, reader: jspb.BinaryReader): GetRateHistoryRequest;
}

export namespace GetRateHistoryRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class GetRateHistoryResponse extends jspb.Message {
  clearHistoryList(): void;
  getHistoryList(): Array<services_billing_entities_v1alpha1_history_pb.RateHistoryItem>;
  setHistoryList(value: Array<services_billing_entities_v1alpha1_history_pb.RateHistoryItem>): void;
  addHistory(value?: services_billing_entities_v1alpha1_history_pb.RateHistoryItem, index?: number): services_billing_entities_v1alpha1_history_pb.RateHistoryItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRateHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRateHistoryResponse): GetRateHistoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRateHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRateHistoryResponse;
  static deserializeBinaryFromReader(message: GetRateHistoryResponse, reader: jspb.BinaryReader): GetRateHistoryResponse;
}

export namespace GetRateHistoryResponse {
  export type AsObject = {
    historyList: Array<services_billing_entities_v1alpha1_history_pb.RateHistoryItem.AsObject>,
  }
}

