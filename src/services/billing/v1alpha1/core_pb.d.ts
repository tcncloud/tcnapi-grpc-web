// package: services.billing.v1alpha1
// file: services/billing/v1alpha1/core.proto

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
  clearFieldsList(): void;
  getFieldsList(): Array<SortField>;
  setFieldsList(value: Array<SortField>): void;
  addFields(value?: SortField, index?: number): SortField;

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
    fieldsList: Array<SortField.AsObject>,
  }
}

export class SortField extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  getDirection(): SortDirectionMap[keyof SortDirectionMap];
  setDirection(value: SortDirectionMap[keyof SortDirectionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SortField.AsObject;
  static toObject(includeInstance: boolean, msg: SortField): SortField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SortField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SortField;
  static deserializeBinaryFromReader(message: SortField, reader: jspb.BinaryReader): SortField;
}

export namespace SortField {
  export type AsObject = {
    field: string,
    direction: SortDirectionMap[keyof SortDirectionMap],
  }
}

export interface SortDirectionMap {
  SORT_DIRECTION_UNSPECIFIED: 0;
  SORT_DIRECTION_DESC: 1;
}

export const SortDirection: SortDirectionMap;

