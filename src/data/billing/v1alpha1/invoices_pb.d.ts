// package: data.billing.v1alpha1
// file: data/billing/v1alpha1/invoices.proto

import * as jspb from "google-protobuf";
import * as data_billing_v1alpha1_products_pb from "../../../data/billing/v1alpha1/products_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Invoice extends jspb.Message {
  getInvoiceId(): string;
  setInvoiceId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getBillingCycle(): string;
  setBillingCycle(value: string): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearItemsList(): void;
  getItemsList(): Array<InvoiceItem>;
  setItemsList(value: Array<InvoiceItem>): void;
  addItems(value?: InvoiceItem, index?: number): InvoiceItem;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Invoice.AsObject;
  static toObject(includeInstance: boolean, msg: Invoice): Invoice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Invoice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Invoice;
  static deserializeBinaryFromReader(message: Invoice, reader: jspb.BinaryReader): Invoice;
}

export namespace Invoice {
  export type AsObject = {
    invoiceId: string,
    orgId: string,
    billingCycle: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    itemsList: Array<InvoiceItem.AsObject>,
    url: string,
  }
}

export class InvoiceItem extends jspb.Message {
  getInvoiceItemId(): string;
  setInvoiceItemId(value: string): void;

  getInvoiceId(): string;
  setInvoiceId(value: string): void;

  getProduct(): data_billing_v1alpha1_products_pb.ProductMap[keyof data_billing_v1alpha1_products_pb.ProductMap];
  setProduct(value: data_billing_v1alpha1_products_pb.ProductMap[keyof data_billing_v1alpha1_products_pb.ProductMap]): void;

  getPrice(): number;
  setPrice(value: number): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoiceItem.AsObject;
  static toObject(includeInstance: boolean, msg: InvoiceItem): InvoiceItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoiceItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoiceItem;
  static deserializeBinaryFromReader(message: InvoiceItem, reader: jspb.BinaryReader): InvoiceItem;
}

export namespace InvoiceItem {
  export type AsObject = {
    invoiceItemId: string,
    invoiceId: string,
    product: data_billing_v1alpha1_products_pb.ProductMap[keyof data_billing_v1alpha1_products_pb.ProductMap],
    price: number,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

