// package: services.billing.v1alpha4
// file: services/billing/v1alpha4/invoice.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as services_billing_entities_v1alpha4_invoice_pb from "../../../services/billing/entities/v1alpha4/invoice_pb";

export class ExportInvoiceRequest extends jspb.Message {
  getFormat(): InvoiceFormatMap[keyof InvoiceFormatMap];
  setFormat(value: InvoiceFormatMap[keyof InvoiceFormatMap]): void;

  hasInvoiceDate(): boolean;
  clearInvoiceDate(): void;
  getInvoiceDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setInvoiceDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportInvoiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportInvoiceRequest): ExportInvoiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportInvoiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportInvoiceRequest;
  static deserializeBinaryFromReader(message: ExportInvoiceRequest, reader: jspb.BinaryReader): ExportInvoiceRequest;
}

export namespace ExportInvoiceRequest {
  export type AsObject = {
    format: InvoiceFormatMap[keyof InvoiceFormatMap],
    invoiceDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ExportInvoiceResponse extends jspb.Message {
  hasInvoice(): boolean;
  clearInvoice(): void;
  getInvoice(): services_billing_entities_v1alpha4_invoice_pb.Invoice | undefined;
  setInvoice(value?: services_billing_entities_v1alpha4_invoice_pb.Invoice): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportInvoiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExportInvoiceResponse): ExportInvoiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportInvoiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportInvoiceResponse;
  static deserializeBinaryFromReader(message: ExportInvoiceResponse, reader: jspb.BinaryReader): ExportInvoiceResponse;
}

export namespace ExportInvoiceResponse {
  export type AsObject = {
    invoice?: services_billing_entities_v1alpha4_invoice_pb.Invoice.AsObject,
  }
}

export interface InvoiceFormatMap {
  INVOICE_FORMAT_UNSPECIFIED: 0;
  INVOICE_FORMAT_CSV: 1;
}

export const InvoiceFormat: InvoiceFormatMap;

