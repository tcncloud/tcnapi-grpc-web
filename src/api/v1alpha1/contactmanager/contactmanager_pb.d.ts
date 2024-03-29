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
  getContactManagerListId(): string;
  setContactManagerListId(value: string): void;

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
    contactManagerListId: string,
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
  getContactManagerEntryId(): string;
  setContactManagerEntryId(value: string): void;

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
    contactManagerEntryId: string,
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

export class GetKYCEncContactEntryRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  clearEntryValList(): void;
  getEntryValList(): Array<api_commons_contactmanager_pb.ContactManagerEntryVal>;
  setEntryValList(value: Array<api_commons_contactmanager_pb.ContactManagerEntryVal>): void;
  addEntryVal(value?: api_commons_contactmanager_pb.ContactManagerEntryVal, index?: number): api_commons_contactmanager_pb.ContactManagerEntryVal;

  getMinKycLimit(): number;
  setMinKycLimit(value: number): void;

  clearKycResponseList(): void;
  getKycResponseList(): Array<ContactManagerEntryVal>;
  setKycResponseList(value: Array<ContactManagerEntryVal>): void;
  addKycResponse(value?: ContactManagerEntryVal, index?: number): ContactManagerEntryVal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKYCEncContactEntryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKYCEncContactEntryRequest): GetKYCEncContactEntryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKYCEncContactEntryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKYCEncContactEntryRequest;
  static deserializeBinaryFromReader(message: GetKYCEncContactEntryRequest, reader: jspb.BinaryReader): GetKYCEncContactEntryRequest;
}

export namespace GetKYCEncContactEntryRequest {
  export type AsObject = {
    projectId: string,
    entryValList: Array<api_commons_contactmanager_pb.ContactManagerEntryVal.AsObject>,
    minKycLimit: number,
    kycResponseList: Array<ContactManagerEntryVal.AsObject>,
  }
}

export class GetKYCEncContactEntryResponse extends jspb.Message {
  getVerified(): boolean;
  setVerified(value: boolean): void;

  clearContactEntryList(): void;
  getContactEntryList(): Array<ContactManagerEntry>;
  setContactEntryList(value: Array<ContactManagerEntry>): void;
  addContactEntry(value?: ContactManagerEntry, index?: number): ContactManagerEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKYCEncContactEntryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetKYCEncContactEntryResponse): GetKYCEncContactEntryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKYCEncContactEntryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKYCEncContactEntryResponse;
  static deserializeBinaryFromReader(message: GetKYCEncContactEntryResponse, reader: jspb.BinaryReader): GetKYCEncContactEntryResponse;
}

export namespace GetKYCEncContactEntryResponse {
  export type AsObject = {
    verified: boolean,
    contactEntryList: Array<ContactManagerEntry.AsObject>,
  }
}

export class GetKYCKeysRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKYCKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKYCKeysRequest): GetKYCKeysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKYCKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKYCKeysRequest;
  static deserializeBinaryFromReader(message: GetKYCKeysRequest, reader: jspb.BinaryReader): GetKYCKeysRequest;
}

export namespace GetKYCKeysRequest {
  export type AsObject = {
  }
}

export class GetKYCKeysResponse extends jspb.Message {
  clearEntryTypeList(): void;
  getEntryTypeList(): Array<string>;
  setEntryTypeList(value: Array<string>): void;
  addEntryType(value: string, index?: number): string;

  getKycLimit(): number;
  setKycLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKYCKeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetKYCKeysResponse): GetKYCKeysResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKYCKeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKYCKeysResponse;
  static deserializeBinaryFromReader(message: GetKYCKeysResponse, reader: jspb.BinaryReader): GetKYCKeysResponse;
}

export namespace GetKYCKeysResponse {
  export type AsObject = {
    entryTypeList: Array<string>,
    kycLimit: number,
  }
}

export class ContactManagerEntry extends jspb.Message {
  getContactManagerEntryId(): string;
  setContactManagerEntryId(value: string): void;

  getContactManagerEntryListId(): string;
  setContactManagerEntryListId(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getType(): string;
  setType(value: string): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactManagerEntry.AsObject;
  static toObject(includeInstance: boolean, msg: ContactManagerEntry): ContactManagerEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactManagerEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactManagerEntry;
  static deserializeBinaryFromReader(message: ContactManagerEntry, reader: jspb.BinaryReader): ContactManagerEntry;
}

export namespace ContactManagerEntry {
  export type AsObject = {
    contactManagerEntryId: string,
    contactManagerEntryListId: string,
    key: string,
    value: string,
    type: string,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ContactManagerList extends jspb.Message {
  getContactManagerListId(): string;
  setContactManagerListId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getFileName(): string;
  setFileName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearListDetailsList(): void;
  getListDetailsList(): Array<string>;
  setListDetailsList(value: Array<string>): void;
  addListDetails(value: string, index?: number): string;

  getTtl(): string;
  setTtl(value: string): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactManagerList.AsObject;
  static toObject(includeInstance: boolean, msg: ContactManagerList): ContactManagerList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactManagerList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactManagerList;
  static deserializeBinaryFromReader(message: ContactManagerList, reader: jspb.BinaryReader): ContactManagerList;
}

export namespace ContactManagerList {
  export type AsObject = {
    contactManagerListId: string,
    orgId: string,
    projectId: string,
    fileName: string,
    description: string,
    listDetailsList: Array<string>,
    ttl: string,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ContactManagerEntryVal extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactManagerEntryVal.AsObject;
  static toObject(includeInstance: boolean, msg: ContactManagerEntryVal): ContactManagerEntryVal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactManagerEntryVal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactManagerEntryVal;
  static deserializeBinaryFromReader(message: ContactManagerEntryVal, reader: jspb.BinaryReader): ContactManagerEntryVal;
}

export namespace ContactManagerEntryVal {
  export type AsObject = {
    type: string,
    value: string,
  }
}

