// package: api.commons.billing
// file: api/commons/billing/invoice.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Invoice extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<InvoiceItem>;
  setItemsList(value: Array<InvoiceItem>): void;
  addItems(value?: InvoiceItem, index?: number): InvoiceItem;

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
    itemsList: Array<InvoiceItem.AsObject>,
  }
}

export class InvoiceItem extends jspb.Message {
  getInvoiceItemSid(): number;
  setInvoiceItemSid(value: number): void;

  getProduct(): ProductMap[keyof ProductMap];
  setProduct(value: ProductMap[keyof ProductMap]): void;

  getAmount(): number;
  setAmount(value: number): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDateModified(): boolean;
  clearDateModified(): void;
  getDateModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

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
    invoiceItemSid: number,
    product: ProductMap[keyof ProductMap],
    amount: number,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export interface ProductMap {
  PRODUCT_UNSPECIFIED: 0;
  PRODUCT_OTHER: 1;
  PRODUCT_AGENT_SEATS: 100;
  PRODUCT_EMAILS_SENT: 200;
  PRODUCT_EMAILS_RECEIVED: 201;
  PRODUCT_SMS_SENT: 202;
  PRODUCT_SMS_RECEIVED: 203;
  PRODUCT_CHAT_SENT: 204;
  PRODUCT_CHAT_RECEIVED: 205;
  PRODUCT_OMNI: 300;
  PRODUCT_VANA: 400;
  PRODUCT_COMPLIANCE: 500;
}

export const Product: ProductMap;

export interface InvoiceFormatMap {
  INVOICE_FORMAT_UNSPECIFIED: 0;
  INVOICE_FORMAT_PROTO: 1;
  INVOICE_FORMAT_CSV: 2;
}

export const InvoiceFormat: InvoiceFormatMap;

