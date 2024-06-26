// package: services.billing.entities.v1alpha2
// file: services/billing/entities/v1alpha2/invoice.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_type_decimal_pb from "../../../../google/type/decimal_pb";

export class Invoice extends jspb.Message {
  getBillingCycle(): string;
  setBillingCycle(value: string): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearItemsList(): void;
  getItemsList(): Array<InvoiceItem>;
  setItemsList(value: Array<InvoiceItem>): void;
  addItems(value?: InvoiceItem, index?: number): InvoiceItem;

  hasDownloadUrl(): boolean;
  clearDownloadUrl(): void;
  getDownloadUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDownloadUrl(value?: google_protobuf_wrappers_pb.StringValue): void;

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
    billingCycle: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    itemsList: Array<InvoiceItem.AsObject>,
    downloadUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class InvoiceItem extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  getProduct(): ProductMap[keyof ProductMap];
  setProduct(value: ProductMap[keyof ProductMap]): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPrice(): number;
  setPrice(value: number): void;

  clearColumnsList(): void;
  getColumnsList(): Array<InvoiceItemColumn>;
  setColumnsList(value: Array<InvoiceItemColumn>): void;
  addColumns(value?: InvoiceItemColumn, index?: number): InvoiceItemColumn;

  hasRatedAmount(): boolean;
  clearRatedAmount(): void;
  getRatedAmount(): google_type_decimal_pb.Decimal | undefined;
  setRatedAmount(value?: google_type_decimal_pb.Decimal): void;

  getProductId(): string;
  setProductId(value: string): void;

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
    clientId: string,
    product: ProductMap[keyof ProductMap],
    description: string,
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    price: number,
    columnsList: Array<InvoiceItemColumn.AsObject>,
    ratedAmount?: google_type_decimal_pb.Decimal.AsObject,
    productId: string,
  }
}

export class InvoiceItemColumn extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoiceItemColumn.AsObject;
  static toObject(includeInstance: boolean, msg: InvoiceItemColumn): InvoiceItemColumn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoiceItemColumn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoiceItemColumn;
  static deserializeBinaryFromReader(message: InvoiceItemColumn, reader: jspb.BinaryReader): InvoiceItemColumn;
}

export namespace InvoiceItemColumn {
  export type AsObject = {
    name: string,
    value: string,
  }
}

export interface ProductMap {
  PRODUCT_UNSPECIFIED: 0;
  PRODUCT_OMNI: 200;
  PRODUCT_OMNI_SEATS: 201;
  PRODUCT_OMNI_CHAT_SENT: 202;
  PRODUCT_OMNI_CHAT_RECEIVED: 203;
  PRODUCT_OMNI_EMAILS_SENT: 204;
  PRODUCT_OMNI_EMAILS_RECEIVED: 205;
  PRODUCT_OMNI_SMS_SENT: 206;
  PRODUCT_OMNI_SMS_RECEIVED: 207;
  PRODUCT_COMPLIANCE: 300;
}

export const Product: ProductMap;

