// package: services.billing.v1alpha3
// file: services/billing/v1alpha3/rating_module.proto

import * as jspb from "google-protobuf";
import * as services_billing_entities_v1alpha3_sku_pb from "../../../services/billing/entities/v1alpha3/sku_pb";

export class ListRatingModulesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRatingModulesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRatingModulesRequest): ListRatingModulesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRatingModulesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRatingModulesRequest;
  static deserializeBinaryFromReader(message: ListRatingModulesRequest, reader: jspb.BinaryReader): ListRatingModulesRequest;
}

export namespace ListRatingModulesRequest {
  export type AsObject = {
  }
}

export class ListRatingModulesResponse extends jspb.Message {
  clearRatingModulesList(): void;
  getRatingModulesList(): Array<services_billing_entities_v1alpha3_sku_pb.RatingModule>;
  setRatingModulesList(value: Array<services_billing_entities_v1alpha3_sku_pb.RatingModule>): void;
  addRatingModules(value?: services_billing_entities_v1alpha3_sku_pb.RatingModule, index?: number): services_billing_entities_v1alpha3_sku_pb.RatingModule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRatingModulesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRatingModulesResponse): ListRatingModulesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRatingModulesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRatingModulesResponse;
  static deserializeBinaryFromReader(message: ListRatingModulesResponse, reader: jspb.BinaryReader): ListRatingModulesResponse;
}

export namespace ListRatingModulesResponse {
  export type AsObject = {
    ratingModulesList: Array<services_billing_entities_v1alpha3_sku_pb.RatingModule.AsObject>,
  }
}

