// package: api.commons.audit
// file: api/commons/audit/billing_events.proto

import * as jspb from "google-protobuf";

export class BillingCreateBillingPlanEvent extends jspb.Message {
  getBillingPlan(): string;
  setBillingPlan(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingCreateBillingPlanEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BillingCreateBillingPlanEvent): BillingCreateBillingPlanEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingCreateBillingPlanEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingCreateBillingPlanEvent;
  static deserializeBinaryFromReader(message: BillingCreateBillingPlanEvent, reader: jspb.BinaryReader): BillingCreateBillingPlanEvent;
}

export namespace BillingCreateBillingPlanEvent {
  export type AsObject = {
    billingPlan: string,
    userId: string,
  }
}

export class BillingCreateInvoiceEvent extends jspb.Message {
  getInvoice(): string;
  setInvoice(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingCreateInvoiceEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BillingCreateInvoiceEvent): BillingCreateInvoiceEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingCreateInvoiceEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingCreateInvoiceEvent;
  static deserializeBinaryFromReader(message: BillingCreateInvoiceEvent, reader: jspb.BinaryReader): BillingCreateInvoiceEvent;
}

export namespace BillingCreateInvoiceEvent {
  export type AsObject = {
    invoice: string,
    userId: string,
  }
}

export class BillingCreateRateDefinitionEvent extends jspb.Message {
  getRateDefinition(): string;
  setRateDefinition(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingCreateRateDefinitionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BillingCreateRateDefinitionEvent): BillingCreateRateDefinitionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingCreateRateDefinitionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingCreateRateDefinitionEvent;
  static deserializeBinaryFromReader(message: BillingCreateRateDefinitionEvent, reader: jspb.BinaryReader): BillingCreateRateDefinitionEvent;
}

export namespace BillingCreateRateDefinitionEvent {
  export type AsObject = {
    rateDefinition: string,
    userId: string,
  }
}

export class BillingDeleteBillingPlanEvent extends jspb.Message {
  getBillingPlan(): string;
  setBillingPlan(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingDeleteBillingPlanEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BillingDeleteBillingPlanEvent): BillingDeleteBillingPlanEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingDeleteBillingPlanEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingDeleteBillingPlanEvent;
  static deserializeBinaryFromReader(message: BillingDeleteBillingPlanEvent, reader: jspb.BinaryReader): BillingDeleteBillingPlanEvent;
}

export namespace BillingDeleteBillingPlanEvent {
  export type AsObject = {
    billingPlan: string,
    userId: string,
  }
}

export class BillingDeleteInvoiceEvent extends jspb.Message {
  getInvoice(): string;
  setInvoice(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingDeleteInvoiceEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BillingDeleteInvoiceEvent): BillingDeleteInvoiceEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingDeleteInvoiceEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingDeleteInvoiceEvent;
  static deserializeBinaryFromReader(message: BillingDeleteInvoiceEvent, reader: jspb.BinaryReader): BillingDeleteInvoiceEvent;
}

export namespace BillingDeleteInvoiceEvent {
  export type AsObject = {
    invoice: string,
    userId: string,
  }
}

export class BillingDeleteRateDefinitionEvent extends jspb.Message {
  getRateDefinition(): string;
  setRateDefinition(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingDeleteRateDefinitionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BillingDeleteRateDefinitionEvent): BillingDeleteRateDefinitionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingDeleteRateDefinitionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingDeleteRateDefinitionEvent;
  static deserializeBinaryFromReader(message: BillingDeleteRateDefinitionEvent, reader: jspb.BinaryReader): BillingDeleteRateDefinitionEvent;
}

export namespace BillingDeleteRateDefinitionEvent {
  export type AsObject = {
    rateDefinition: string,
    userId: string,
  }
}

export class BillingExportInvoiceEvent extends jspb.Message {
  getInvoice(): string;
  setInvoice(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingExportInvoiceEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BillingExportInvoiceEvent): BillingExportInvoiceEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingExportInvoiceEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingExportInvoiceEvent;
  static deserializeBinaryFromReader(message: BillingExportInvoiceEvent, reader: jspb.BinaryReader): BillingExportInvoiceEvent;
}

export namespace BillingExportInvoiceEvent {
  export type AsObject = {
    invoice: string,
    userId: string,
  }
}

export class BillingUpdateBillingPlanEvent extends jspb.Message {
  getBillingPlan(): string;
  setBillingPlan(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingUpdateBillingPlanEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BillingUpdateBillingPlanEvent): BillingUpdateBillingPlanEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingUpdateBillingPlanEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingUpdateBillingPlanEvent;
  static deserializeBinaryFromReader(message: BillingUpdateBillingPlanEvent, reader: jspb.BinaryReader): BillingUpdateBillingPlanEvent;
}

export namespace BillingUpdateBillingPlanEvent {
  export type AsObject = {
    billingPlan: string,
    userId: string,
  }
}

export class BillingUpdateInvoiceEvent extends jspb.Message {
  getInvoice(): string;
  setInvoice(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingUpdateInvoiceEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BillingUpdateInvoiceEvent): BillingUpdateInvoiceEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingUpdateInvoiceEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingUpdateInvoiceEvent;
  static deserializeBinaryFromReader(message: BillingUpdateInvoiceEvent, reader: jspb.BinaryReader): BillingUpdateInvoiceEvent;
}

export namespace BillingUpdateInvoiceEvent {
  export type AsObject = {
    invoice: string,
    userId: string,
  }
}

export class BillingUpdateRateDefinitionEvent extends jspb.Message {
  getRateDefinition(): string;
  setRateDefinition(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingUpdateRateDefinitionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BillingUpdateRateDefinitionEvent): BillingUpdateRateDefinitionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingUpdateRateDefinitionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingUpdateRateDefinitionEvent;
  static deserializeBinaryFromReader(message: BillingUpdateRateDefinitionEvent, reader: jspb.BinaryReader): BillingUpdateRateDefinitionEvent;
}

export namespace BillingUpdateRateDefinitionEvent {
  export type AsObject = {
    rateDefinition: string,
    userId: string,
  }
}

