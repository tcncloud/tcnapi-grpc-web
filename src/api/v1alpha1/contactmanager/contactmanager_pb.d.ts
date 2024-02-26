// package: api.v1alpha1.contactmanager
// file: api/v1alpha1/contactmanager/contactmanager.proto

import * as jspb from "google-protobuf";
import * as api_commons_contactmanager_pb from "../../../api/commons/contactmanager_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetContactListRequest extends jspb.Message {
  hasRequestMask(): boolean;
  clearRequestMask(): void;
  getRequestMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setRequestMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContactListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContactListRequest): GetContactListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContactListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContactListRequest;
  static deserializeBinaryFromReader(message: GetContactListRequest, reader: jspb.BinaryReader): GetContactListRequest;
}

export namespace GetContactListRequest {
  export type AsObject = {
    requestMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    orgId: string,
    projectId: string,
  }
}

export class GetContactListResponse extends jspb.Message {
  clearContactListList(): void;
  getContactListList(): Array<api_commons_contactmanager_pb.ContactManagerList>;
  setContactListList(value: Array<api_commons_contactmanager_pb.ContactManagerList>): void;
  addContactList(value?: api_commons_contactmanager_pb.ContactManagerList, index?: number): api_commons_contactmanager_pb.ContactManagerList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContactListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContactListResponse): GetContactListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContactListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContactListResponse;
  static deserializeBinaryFromReader(message: GetContactListResponse, reader: jspb.BinaryReader): GetContactListResponse;
}

export namespace GetContactListResponse {
  export type AsObject = {
    contactListList: Array<api_commons_contactmanager_pb.ContactManagerList.AsObject>,
  }
}

export class ListContactEntryListRequest extends jspb.Message {
  getContactManagerListId(): number;
  setContactManagerListId(value: number): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContactEntryListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListContactEntryListRequest): ListContactEntryListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListContactEntryListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContactEntryListRequest;
  static deserializeBinaryFromReader(message: ListContactEntryListRequest, reader: jspb.BinaryReader): ListContactEntryListRequest;
}

export namespace ListContactEntryListRequest {
  export type AsObject = {
    contactManagerListId: number,
    orgId: string,
    projectId: string,
  }
}

export class ListContactEntryListResponse extends jspb.Message {
  clearContactEntryList(): void;
  getContactEntryList(): Array<api_commons_contactmanager_pb.ContactManagerEntry>;
  setContactEntryList(value: Array<api_commons_contactmanager_pb.ContactManagerEntry>): void;
  addContactEntry(value?: api_commons_contactmanager_pb.ContactManagerEntry, index?: number): api_commons_contactmanager_pb.ContactManagerEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContactEntryListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListContactEntryListResponse): ListContactEntryListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListContactEntryListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContactEntryListResponse;
  static deserializeBinaryFromReader(message: ListContactEntryListResponse, reader: jspb.BinaryReader): ListContactEntryListResponse;
}

export namespace ListContactEntryListResponse {
  export type AsObject = {
    contactEntryList: Array<api_commons_contactmanager_pb.ContactManagerEntry.AsObject>,
  }
}

export class GetEncContactEntryRequest extends jspb.Message {
  getContactManagerEntryId(): number;
  setContactManagerEntryId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEncContactEntryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEncContactEntryRequest): GetEncContactEntryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEncContactEntryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEncContactEntryRequest;
  static deserializeBinaryFromReader(message: GetEncContactEntryRequest, reader: jspb.BinaryReader): GetEncContactEntryRequest;
}

export namespace GetEncContactEntryRequest {
  export type AsObject = {
    contactManagerEntryId: number,
  }
}

export class GetEncContactEntryResponse extends jspb.Message {
  clearContactEntryList(): void;
  getContactEntryList(): Array<api_commons_contactmanager_pb.ContactManagerEntry>;
  setContactEntryList(value: Array<api_commons_contactmanager_pb.ContactManagerEntry>): void;
  addContactEntry(value?: api_commons_contactmanager_pb.ContactManagerEntry, index?: number): api_commons_contactmanager_pb.ContactManagerEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEncContactEntryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEncContactEntryResponse): GetEncContactEntryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEncContactEntryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEncContactEntryResponse;
  static deserializeBinaryFromReader(message: GetEncContactEntryResponse, reader: jspb.BinaryReader): GetEncContactEntryResponse;
}

export namespace GetEncContactEntryResponse {
  export type AsObject = {
    contactEntryList: Array<api_commons_contactmanager_pb.ContactManagerEntry.AsObject>,
  }
}

