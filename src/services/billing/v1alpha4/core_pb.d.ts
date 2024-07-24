// package: services.billing.v1alpha4
// file: services/billing/v1alpha4/core.proto

import * as jspb from "google-protobuf";

export class Page extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Page.AsObject;
  static toObject(includeInstance: boolean, msg: Page): Page.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Page, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Page;
  static deserializeBinaryFromReader(message: Page, reader: jspb.BinaryReader): Page;
}

export namespace Page {
  export type AsObject = {
    limit: number,
    token: string,
  }
}

export class Sort extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getDirection(): OrderMap[keyof OrderMap];
  setDirection(value: OrderMap[keyof OrderMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sort.AsObject;
  static toObject(includeInstance: boolean, msg: Sort): Sort.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Sort, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sort;
  static deserializeBinaryFromReader(message: Sort, reader: jspb.BinaryReader): Sort;
}

export namespace Sort {
  export type AsObject = {
    key: string,
    direction: OrderMap[keyof OrderMap],
  }
}

export interface OrderMap {
  ORDER_UNSPECIFIED: 0;
  ORDER_DESC: 1;
}

export const Order: OrderMap;

