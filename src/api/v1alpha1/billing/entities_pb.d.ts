// package: api.v1alpha1.billing
// file: api/v1alpha1/billing/entities.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../annotations/authz_pb";
import * as api_commons_billing_detail_pb from "../../../api/commons/billing/detail_pb";
import * as api_commons_billing_invoice_pb from "../../../api/commons/billing/invoice_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetBillingPlanReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillingPlanReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillingPlanReq): GetBillingPlanReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillingPlanReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillingPlanReq;
  static deserializeBinaryFromReader(message: GetBillingPlanReq, reader: jspb.BinaryReader): GetBillingPlanReq;
}

export namespace GetBillingPlanReq {
  export type AsObject = {
  }
}

export class GetBillingPlanRes extends jspb.Message {
  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): api_commons_billing_detail_pb.Plan | undefined;
  setBillingPlan(value?: api_commons_billing_detail_pb.Plan): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillingPlanRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillingPlanRes): GetBillingPlanRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillingPlanRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillingPlanRes;
  static deserializeBinaryFromReader(message: GetBillingPlanRes, reader: jspb.BinaryReader): GetBillingPlanRes;
}

export namespace GetBillingPlanRes {
  export type AsObject = {
    billingPlan?: api_commons_billing_detail_pb.Plan.AsObject,
  }
}

export class UpdateBillingPlanReq extends jspb.Message {
  clearBillingDetailsList(): void;
  getBillingDetailsList(): Array<api_commons_billing_detail_pb.Detail>;
  setBillingDetailsList(value: Array<api_commons_billing_detail_pb.Detail>): void;
  addBillingDetails(value?: api_commons_billing_detail_pb.Detail, index?: number): api_commons_billing_detail_pb.Detail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBillingPlanReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBillingPlanReq): UpdateBillingPlanReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBillingPlanReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBillingPlanReq;
  static deserializeBinaryFromReader(message: UpdateBillingPlanReq, reader: jspb.BinaryReader): UpdateBillingPlanReq;
}

export namespace UpdateBillingPlanReq {
  export type AsObject = {
    billingDetailsList: Array<api_commons_billing_detail_pb.Detail.AsObject>,
  }
}

export class UpdateBillingPlanRes extends jspb.Message {
  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): api_commons_billing_detail_pb.Plan | undefined;
  setBillingPlan(value?: api_commons_billing_detail_pb.Plan): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBillingPlanRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBillingPlanRes): UpdateBillingPlanRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBillingPlanRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBillingPlanRes;
  static deserializeBinaryFromReader(message: UpdateBillingPlanRes, reader: jspb.BinaryReader): UpdateBillingPlanRes;
}

export namespace UpdateBillingPlanRes {
  export type AsObject = {
    billingPlan?: api_commons_billing_detail_pb.Plan.AsObject,
  }
}

export class GetInvoiceReq extends jspb.Message {
  hasInvoiceDate(): boolean;
  clearInvoiceDate(): void;
  getInvoiceDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setInvoiceDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInvoiceReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetInvoiceReq): GetInvoiceReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInvoiceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInvoiceReq;
  static deserializeBinaryFromReader(message: GetInvoiceReq, reader: jspb.BinaryReader): GetInvoiceReq;
}

export namespace GetInvoiceReq {
  export type AsObject = {
    invoiceDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetInvoiceRes extends jspb.Message {
  hasInvoice(): boolean;
  clearInvoice(): void;
  getInvoice(): api_commons_billing_invoice_pb.Invoice | undefined;
  setInvoice(value?: api_commons_billing_invoice_pb.Invoice): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInvoiceRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetInvoiceRes): GetInvoiceRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInvoiceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInvoiceRes;
  static deserializeBinaryFromReader(message: GetInvoiceRes, reader: jspb.BinaryReader): GetInvoiceRes;
}

export namespace GetInvoiceRes {
  export type AsObject = {
    invoice?: api_commons_billing_invoice_pb.Invoice.AsObject,
  }
}

