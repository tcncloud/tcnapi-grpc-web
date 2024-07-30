// package: services.billing.entities.v1alpha4
// file: services/billing/entities/v1alpha4/invoice.proto

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

  clearRowsList(): void;
  getRowsList(): Array<InvoiceRow>;
  setRowsList(value: Array<InvoiceRow>): void;
  addRows(value?: InvoiceRow, index?: number): InvoiceRow;

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
    rowsList: Array<InvoiceRow.AsObject>,
    downloadUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class InvoiceRow extends jspb.Message {
  clearColumnsList(): void;
  getColumnsList(): Array<InvoiceColumn>;
  setColumnsList(value: Array<InvoiceColumn>): void;
  addColumns(value?: InvoiceColumn, index?: number): InvoiceColumn;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoiceRow.AsObject;
  static toObject(includeInstance: boolean, msg: InvoiceRow): InvoiceRow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoiceRow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoiceRow;
  static deserializeBinaryFromReader(message: InvoiceRow, reader: jspb.BinaryReader): InvoiceRow;
}

export namespace InvoiceRow {
  export type AsObject = {
    columnsList: Array<InvoiceColumn.AsObject>,
  }
}

export class InvoiceColumn extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoiceColumn.AsObject;
  static toObject(includeInstance: boolean, msg: InvoiceColumn): InvoiceColumn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoiceColumn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoiceColumn;
  static deserializeBinaryFromReader(message: InvoiceColumn, reader: jspb.BinaryReader): InvoiceColumn;
}

export namespace InvoiceColumn {
  export type AsObject = {
    name: string,
    value: string,
  }
}

