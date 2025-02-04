// package: api.commons.audit
// file: api/commons/audit/billing_events.proto

import * as jspb from "google-protobuf";

export class BillingAccumulateItemsEvent extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getProductType(): number;
  setProductType(value: number): void;

  clearEventLogIdsList(): void;
  getEventLogIdsList(): Array<number>;
  setEventLogIdsList(value: Array<number>): void;
  addEventLogIds(value: number, index?: number): number;

  getBillingCycle(): string;
  setBillingCycle(value: string): void;

  clearEventDataList(): void;
  getEventDataList(): Array<Uint8Array | string>;
  getEventDataList_asU8(): Array<Uint8Array>;
  getEventDataList_asB64(): Array<string>;
  setEventDataList(value: Array<Uint8Array | string>): void;
  addEventData(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingAccumulateItemsEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BillingAccumulateItemsEvent): BillingAccumulateItemsEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingAccumulateItemsEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingAccumulateItemsEvent;
  static deserializeBinaryFromReader(message: BillingAccumulateItemsEvent, reader: jspb.BinaryReader): BillingAccumulateItemsEvent;
}

export namespace BillingAccumulateItemsEvent {
  export type AsObject = {
    orgId: string,
    productType: number,
    eventLogIdsList: Array<number>,
    billingCycle: string,
    eventDataList: Array<Uint8Array | string>,
  }
}

export class BillingCommitBillingPlanEvent extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingCommitBillingPlanEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BillingCommitBillingPlanEvent): BillingCommitBillingPlanEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingCommitBillingPlanEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingCommitBillingPlanEvent;
  static deserializeBinaryFromReader(message: BillingCommitBillingPlanEvent, reader: jspb.BinaryReader): BillingCommitBillingPlanEvent;
}

export namespace BillingCommitBillingPlanEvent {
  export type AsObject = {
    billingPlanId: string,
    userId: string,
  }
}

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
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

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
    billingPlanId: string,
    userId: string,
  }
}

export class BillingDeleteInvoiceEvent extends jspb.Message {
  getInvoiceId(): string;
  setInvoiceId(value: string): void;

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
    invoiceId: string,
    userId: string,
  }
}

export class BillingDeleteRateDefinitionEvent extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

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
    rateDefinitionId: string,
    userId: string,
  }
}

export class BillingExportInvoiceEvent extends jspb.Message {
  getInvoiceId(): string;
  setInvoiceId(value: string): void;

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
    invoiceId: string,
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

export class BillingRatedItemsGeneratedEvent extends jspb.Message {
  clearRatedItemsList(): void;
  getRatedItemsList(): Array<BillingRatedItemsGeneratedEvent.RatedItem>;
  setRatedItemsList(value: Array<BillingRatedItemsGeneratedEvent.RatedItem>): void;
  addRatedItems(value?: BillingRatedItemsGeneratedEvent.RatedItem, index?: number): BillingRatedItemsGeneratedEvent.RatedItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingRatedItemsGeneratedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BillingRatedItemsGeneratedEvent): BillingRatedItemsGeneratedEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingRatedItemsGeneratedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingRatedItemsGeneratedEvent;
  static deserializeBinaryFromReader(message: BillingRatedItemsGeneratedEvent, reader: jspb.BinaryReader): BillingRatedItemsGeneratedEvent;
}

export namespace BillingRatedItemsGeneratedEvent {
  export type AsObject = {
    ratedItemsList: Array<BillingRatedItemsGeneratedEvent.RatedItem.AsObject>,
  }

  export class RatedItem extends jspb.Message {
    getRatedItemId(): string;
    setRatedItemId(value: string): void;

    getBillingCycle(): string;
    setBillingCycle(value: string): void;

    getEventLogId(): string;
    setEventLogId(value: string): void;

    getModuleName(): string;
    setModuleName(value: string): void;

    getOrgId(): string;
    setOrgId(value: string): void;

    getRateDefinitionId(): string;
    setRateDefinitionId(value: string): void;

    getSkuId(): string;
    setSkuId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RatedItem.AsObject;
    static toObject(includeInstance: boolean, msg: RatedItem): RatedItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RatedItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RatedItem;
    static deserializeBinaryFromReader(message: RatedItem, reader: jspb.BinaryReader): RatedItem;
  }

  export namespace RatedItem {
    export type AsObject = {
      ratedItemId: string,
      billingCycle: string,
      eventLogId: string,
      moduleName: string,
      orgId: string,
      rateDefinitionId: string,
      skuId: string,
    }
  }
}

