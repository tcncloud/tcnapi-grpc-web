// package: services.billing.entities.v1alpha1
// file: services/billing/entities/v1alpha1/invoice.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as services_billing_entities_v1alpha1_product_pb from "../../../../services/billing/entities/v1alpha1/product_pb";

export class Invoice extends jspb.Message {
  getInvoiceId(): string;
  setInvoiceId(value: string): void;

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

  hasDeleteTime(): boolean;
  clearDeleteTime(): void;
  getDeleteTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeleteTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearItemsList(): void;
  getItemsList(): Array<InvoiceItem>;
  setItemsList(value: Array<InvoiceItem>): void;
  addItems(value?: InvoiceItem, index?: number): InvoiceItem;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUrl(value?: google_protobuf_wrappers_pb.StringValue): void;

  getClientId(): string;
  setClientId(value: string): void;

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
    billingCycle: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deleteTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    itemsList: Array<InvoiceItem.AsObject>,
    url?: google_protobuf_wrappers_pb.StringValue.AsObject,
    clientId: string,
  }
}

export class InvoiceItem extends jspb.Message {
  getInvoiceItemId(): string;
  setInvoiceItemId(value: string): void;

  getProduct(): services_billing_entities_v1alpha1_product_pb.ProductMap[keyof services_billing_entities_v1alpha1_product_pb.ProductMap];
  setProduct(value: services_billing_entities_v1alpha1_product_pb.ProductMap[keyof services_billing_entities_v1alpha1_product_pb.ProductMap]): void;

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

  getDescription(): string;
  setDescription(value: string): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearColumnsList(): void;
  getColumnsList(): Array<InvoiceItemColumn>;
  setColumnsList(value: Array<InvoiceItemColumn>): void;
  addColumns(value?: InvoiceItemColumn, index?: number): InvoiceItemColumn;

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
    product: services_billing_entities_v1alpha1_product_pb.ProductMap[keyof services_billing_entities_v1alpha1_product_pb.ProductMap],
    price: number,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    description: string,
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    columnsList: Array<InvoiceItemColumn.AsObject>,
  }
}

export class InvoiceItemColumn extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): number;
  setValue(value: number): void;

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
    value: number,
  }
}

