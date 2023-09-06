// package: services.billing.v1alpha1
// file: services/billing/v1alpha1/invoices.proto

import * as jspb from "google-protobuf";
import * as data_billing_v1alpha1_invoices_pb from "../../../data/billing/v1alpha1/invoices_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as services_billing_v1alpha1_core_pb from "../../../services/billing/v1alpha1/core_pb";

export class CreateInvoiceRequest extends jspb.Message {
  hasInvoice(): boolean;
  clearInvoice(): void;
  getInvoice(): data_billing_v1alpha1_invoices_pb.Invoice | undefined;
  setInvoice(value?: data_billing_v1alpha1_invoices_pb.Invoice): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInvoiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInvoiceRequest): CreateInvoiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateInvoiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInvoiceRequest;
  static deserializeBinaryFromReader(message: CreateInvoiceRequest, reader: jspb.BinaryReader): CreateInvoiceRequest;
}

export namespace CreateInvoiceRequest {
  export type AsObject = {
    invoice?: data_billing_v1alpha1_invoices_pb.Invoice.AsObject,
  }
}

export class CreateInvoiceResponse extends jspb.Message {
  hasInvoice(): boolean;
  clearInvoice(): void;
  getInvoice(): data_billing_v1alpha1_invoices_pb.Invoice | undefined;
  setInvoice(value?: data_billing_v1alpha1_invoices_pb.Invoice): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInvoiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInvoiceResponse): CreateInvoiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateInvoiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInvoiceResponse;
  static deserializeBinaryFromReader(message: CreateInvoiceResponse, reader: jspb.BinaryReader): CreateInvoiceResponse;
}

export namespace CreateInvoiceResponse {
  export type AsObject = {
    invoice?: data_billing_v1alpha1_invoices_pb.Invoice.AsObject,
  }
}

export class DeleteInvoiceRequest extends jspb.Message {
  getInvoiceId(): string;
  setInvoiceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInvoiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInvoiceRequest): DeleteInvoiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteInvoiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInvoiceRequest;
  static deserializeBinaryFromReader(message: DeleteInvoiceRequest, reader: jspb.BinaryReader): DeleteInvoiceRequest;
}

export namespace DeleteInvoiceRequest {
  export type AsObject = {
    invoiceId: string,
  }
}

export class DeleteInvoiceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInvoiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInvoiceResponse): DeleteInvoiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteInvoiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInvoiceResponse;
  static deserializeBinaryFromReader(message: DeleteInvoiceResponse, reader: jspb.BinaryReader): DeleteInvoiceResponse;
}

export namespace DeleteInvoiceResponse {
  export type AsObject = {
  }
}

export class GetInvoiceRequest extends jspb.Message {
  getInvoiceId(): string;
  setInvoiceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInvoiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInvoiceRequest): GetInvoiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInvoiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInvoiceRequest;
  static deserializeBinaryFromReader(message: GetInvoiceRequest, reader: jspb.BinaryReader): GetInvoiceRequest;
}

export namespace GetInvoiceRequest {
  export type AsObject = {
    invoiceId: string,
  }
}

export class GetInvoiceResponse extends jspb.Message {
  hasInvoice(): boolean;
  clearInvoice(): void;
  getInvoice(): data_billing_v1alpha1_invoices_pb.Invoice | undefined;
  setInvoice(value?: data_billing_v1alpha1_invoices_pb.Invoice): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInvoiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInvoiceResponse): GetInvoiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInvoiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInvoiceResponse;
  static deserializeBinaryFromReader(message: GetInvoiceResponse, reader: jspb.BinaryReader): GetInvoiceResponse;
}

export namespace GetInvoiceResponse {
  export type AsObject = {
    invoice?: data_billing_v1alpha1_invoices_pb.Invoice.AsObject,
  }
}

export class ListInvoicesRequest extends jspb.Message {
  hasInvoice(): boolean;
  clearInvoice(): void;
  getInvoice(): data_billing_v1alpha1_invoices_pb.Invoice | undefined;
  setInvoice(value?: data_billing_v1alpha1_invoices_pb.Invoice): void;

  hasSelectorFields(): boolean;
  clearSelectorFields(): void;
  getSelectorFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setSelectorFields(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasReturnFields(): boolean;
  clearReturnFields(): void;
  getReturnFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReturnFields(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasOrderBy(): boolean;
  clearOrderBy(): void;
  getOrderBy(): services_billing_v1alpha1_core_pb.OrderBy | undefined;
  setOrderBy(value?: services_billing_v1alpha1_core_pb.OrderBy): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInvoicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInvoicesRequest): ListInvoicesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInvoicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInvoicesRequest;
  static deserializeBinaryFromReader(message: ListInvoicesRequest, reader: jspb.BinaryReader): ListInvoicesRequest;
}

export namespace ListInvoicesRequest {
  export type AsObject = {
    invoice?: data_billing_v1alpha1_invoices_pb.Invoice.AsObject,
    selectorFields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    returnFields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    orderBy?: services_billing_v1alpha1_core_pb.OrderBy.AsObject,
  }
}

export class ListInvoicesResponse extends jspb.Message {
  clearInvoicesList(): void;
  getInvoicesList(): Array<data_billing_v1alpha1_invoices_pb.Invoice>;
  setInvoicesList(value: Array<data_billing_v1alpha1_invoices_pb.Invoice>): void;
  addInvoices(value?: data_billing_v1alpha1_invoices_pb.Invoice, index?: number): data_billing_v1alpha1_invoices_pb.Invoice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInvoicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListInvoicesResponse): ListInvoicesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInvoicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInvoicesResponse;
  static deserializeBinaryFromReader(message: ListInvoicesResponse, reader: jspb.BinaryReader): ListInvoicesResponse;
}

export namespace ListInvoicesResponse {
  export type AsObject = {
    invoicesList: Array<data_billing_v1alpha1_invoices_pb.Invoice.AsObject>,
  }
}

export class UpdateInvoiceRequest extends jspb.Message {
  hasInvoice(): boolean;
  clearInvoice(): void;
  getInvoice(): data_billing_v1alpha1_invoices_pb.Invoice | undefined;
  setInvoice(value?: data_billing_v1alpha1_invoices_pb.Invoice): void;

  hasUpdateFields(): boolean;
  clearUpdateFields(): void;
  getUpdateFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateFields(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInvoiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInvoiceRequest): UpdateInvoiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateInvoiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInvoiceRequest;
  static deserializeBinaryFromReader(message: UpdateInvoiceRequest, reader: jspb.BinaryReader): UpdateInvoiceRequest;
}

export namespace UpdateInvoiceRequest {
  export type AsObject = {
    invoice?: data_billing_v1alpha1_invoices_pb.Invoice.AsObject,
    updateFields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateInvoiceResponse extends jspb.Message {
  hasInvoice(): boolean;
  clearInvoice(): void;
  getInvoice(): data_billing_v1alpha1_invoices_pb.Invoice | undefined;
  setInvoice(value?: data_billing_v1alpha1_invoices_pb.Invoice): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInvoiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInvoiceResponse): UpdateInvoiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateInvoiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInvoiceResponse;
  static deserializeBinaryFromReader(message: UpdateInvoiceResponse, reader: jspb.BinaryReader): UpdateInvoiceResponse;
}

export namespace UpdateInvoiceResponse {
  export type AsObject = {
    invoice?: data_billing_v1alpha1_invoices_pb.Invoice.AsObject,
  }
}

