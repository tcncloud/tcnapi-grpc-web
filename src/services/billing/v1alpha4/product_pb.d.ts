// package: services.billing.v1alpha4
// file: services/billing/v1alpha4/product.proto

import * as jspb from "google-protobuf";
import * as services_billing_entities_v1alpha4_rates_pb from "../../../services/billing/entities/v1alpha4/rates_pb";

export class ListProductsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProductsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProductsRequest): ListProductsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProductsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProductsRequest;
  static deserializeBinaryFromReader(message: ListProductsRequest, reader: jspb.BinaryReader): ListProductsRequest;
}

export namespace ListProductsRequest {
  export type AsObject = {
  }
}

export class ListProductsResponse extends jspb.Message {
  clearProductsList(): void;
  getProductsList(): Array<services_billing_entities_v1alpha4_rates_pb.Product>;
  setProductsList(value: Array<services_billing_entities_v1alpha4_rates_pb.Product>): void;
  addProducts(value?: services_billing_entities_v1alpha4_rates_pb.Product, index?: number): services_billing_entities_v1alpha4_rates_pb.Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProductsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProductsResponse): ListProductsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProductsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProductsResponse;
  static deserializeBinaryFromReader(message: ListProductsResponse, reader: jspb.BinaryReader): ListProductsResponse;
}

export namespace ListProductsResponse {
  export type AsObject = {
    productsList: Array<services_billing_entities_v1alpha4_rates_pb.Product.AsObject>,
  }
}

