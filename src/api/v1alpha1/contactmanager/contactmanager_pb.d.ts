// package: api.v1alpha1.contactmanager
// file: api/v1alpha1/contactmanager/contactmanager.proto

import * as jspb from "google-protobuf";
import * as api_commons_audit_audit_pb from "../../../api/commons/audit/audit_pb";
import * as api_commons_classifier_pb from "../../../api/commons/classifier_pb";
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
  clearContactManagerListList(): void;
  getContactManagerListList(): Array<ContactManagerList>;
  setContactManagerListList(value: Array<ContactManagerList>): void;
  addContactManagerList(value?: ContactManagerList, index?: number): ContactManagerList;

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
    contactManagerListList: Array<ContactManagerList.AsObject>,
  }
}

export class ListContactEntryListRequest extends jspb.Message {
  hasContactManagerListId(): boolean;
  clearContactManagerListId(): void;
  getContactManagerListId(): string;
  setContactManagerListId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

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
    pageSize: number,
    pageToken: string,
  }
}

export class ListContactEntryListResponse extends jspb.Message {
  clearContactManagerEntryList(): void;
  getContactManagerEntryList(): Array<ContactManagerEntry>;
  setContactManagerEntryList(value: Array<ContactManagerEntry>): void;
  addContactManagerEntry(value?: ContactManagerEntry, index?: number): ContactManagerEntry;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  clearCmEntryList(): void;
  getCmEntryList(): Array<ContactManagerEntry>;
  setCmEntryList(value: Array<ContactManagerEntry>): void;
  addCmEntry(value?: ContactManagerEntry, index?: number): ContactManagerEntry;

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
    contactManagerEntryList: Array<ContactManagerEntry.AsObject>,
    nextPageToken: string,
    cmEntryList: Array<ContactManagerEntry.AsObject>,
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
  clearContactManagerEntryList(): void;
  getContactManagerEntryList(): Array<ContactManagerEntry>;
  setContactManagerEntryList(value: Array<ContactManagerEntry>): void;
  addContactManagerEntry(value?: ContactManagerEntry, index?: number): ContactManagerEntry;

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
    contactManagerEntryList: Array<ContactManagerEntry.AsObject>,
  }
}

export class GetKYCEncContactEntryRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

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
  getProjectSid(): string;
  setProjectSid(value: string): void;

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
    projectSid: string,
  }
}

export class GetKYCKeysResponse extends jspb.Message {
  clearEntryTypeList(): void;
  getEntryTypeList(): Array<string>;
  setEntryTypeList(value: Array<string>): void;
  addEntryType(value: string, index?: number): string;

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

  getStatus(): api_commons_contactmanager_pb.ContactEntryStatusMap[keyof api_commons_contactmanager_pb.ContactEntryStatusMap];
  setStatus(value: api_commons_contactmanager_pb.ContactEntryStatusMap[keyof api_commons_contactmanager_pb.ContactEntryStatusMap]): void;

  hasDateModified(): boolean;
  clearDateModified(): void;
  getDateModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTtl(): number;
  setTtl(value: number): void;

  clearFileNameList(): void;
  getFileNameList(): Array<string>;
  setFileNameList(value: Array<string>): void;
  addFileName(value: string, index?: number): string;

  clearFieldList(): void;
  getFieldList(): Array<ContactField>;
  setFieldList(value: Array<ContactField>): void;
  addField(value?: ContactField, index?: number): ContactField;

  hasExpiryDate(): boolean;
  clearExpiryDate(): void;
  getExpiryDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiryDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

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
    status: api_commons_contactmanager_pb.ContactEntryStatusMap[keyof api_commons_contactmanager_pb.ContactEntryStatusMap],
    dateModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ttl: number,
    fileNameList: Array<string>,
    fieldList: Array<ContactField.AsObject>,
    expiryDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
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

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): void;

  getStatus(): api_commons_contactmanager_pb.ContactListStatusMap[keyof api_commons_contactmanager_pb.ContactListStatusMap];
  setStatus(value: api_commons_contactmanager_pb.ContactListStatusMap[keyof api_commons_contactmanager_pb.ContactListStatusMap]): void;

  getContactManagerListName(): string;
  setContactManagerListName(value: string): void;

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
    isDeleted: boolean,
    status: api_commons_contactmanager_pb.ContactListStatusMap[keyof api_commons_contactmanager_pb.ContactListStatusMap],
    contactManagerListName: string,
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

export class AddContactEntryRequest extends jspb.Message {
  hasContactManagerListId(): boolean;
  clearContactManagerListId(): void;
  getContactManagerListId(): string;
  setContactManagerListId(value: string): void;

  clearEntryList(): void;
  getEntryList(): Array<Entry>;
  setEntryList(value: Array<Entry>): void;
  addEntry(value?: Entry, index?: number): Entry;

  getProjectSid(): string;
  setProjectSid(value: string): void;

  clearFieldList(): void;
  getFieldList(): Array<ContactField>;
  setFieldList(value: Array<ContactField>): void;
  addField(value?: ContactField, index?: number): ContactField;

  getCountryCode(): string;
  setCountryCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddContactEntryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddContactEntryRequest): AddContactEntryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddContactEntryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddContactEntryRequest;
  static deserializeBinaryFromReader(message: AddContactEntryRequest, reader: jspb.BinaryReader): AddContactEntryRequest;
}

export namespace AddContactEntryRequest {
  export type AsObject = {
    contactManagerListId: string,
    entryList: Array<Entry.AsObject>,
    projectSid: string,
    fieldList: Array<ContactField.AsObject>,
    countryCode: string,
  }
}

export class Entry extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Entry.AsObject;
  static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Entry;
  static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
}

export namespace Entry {
  export type AsObject = {
    name: string,
    value: string,
    type: string,
  }
}

export class AddContactEntryResponse extends jspb.Message {
  getContactId(): string;
  setContactId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddContactEntryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddContactEntryResponse): AddContactEntryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddContactEntryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddContactEntryResponse;
  static deserializeBinaryFromReader(message: AddContactEntryResponse, reader: jspb.BinaryReader): AddContactEntryResponse;
}

export namespace AddContactEntryResponse {
  export type AsObject = {
    contactId: string,
  }
}

export class EditContactEntryRequest extends jspb.Message {
  hasContactManagerListId(): boolean;
  clearContactManagerListId(): void;
  getContactManagerListId(): number;
  setContactManagerListId(value: number): void;

  getContactManagerEntryId(): number;
  setContactManagerEntryId(value: number): void;

  clearEditedEntryList(): void;
  getEditedEntryList(): Array<EditedEntry>;
  setEditedEntryList(value: Array<EditedEntry>): void;
  addEditedEntry(value?: EditedEntry, index?: number): EditedEntry;

  clearFieldList(): void;
  getFieldList(): Array<ContactField>;
  setFieldList(value: Array<ContactField>): void;
  addField(value?: ContactField, index?: number): ContactField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditContactEntryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditContactEntryRequest): EditContactEntryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditContactEntryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditContactEntryRequest;
  static deserializeBinaryFromReader(message: EditContactEntryRequest, reader: jspb.BinaryReader): EditContactEntryRequest;
}

export namespace EditContactEntryRequest {
  export type AsObject = {
    contactManagerListId: number,
    contactManagerEntryId: number,
    editedEntryList: Array<EditedEntry.AsObject>,
    fieldList: Array<ContactField.AsObject>,
  }
}

export class EditedEntry extends jspb.Message {
  getContactManagerEntryListId(): number;
  setContactManagerEntryListId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditedEntry.AsObject;
  static toObject(includeInstance: boolean, msg: EditedEntry): EditedEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditedEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditedEntry;
  static deserializeBinaryFromReader(message: EditedEntry, reader: jspb.BinaryReader): EditedEntry;
}

export namespace EditedEntry {
  export type AsObject = {
    contactManagerEntryListId: number,
    name: string,
    value: string,
    type: string,
  }
}

export class ContactField extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactField.AsObject;
  static toObject(includeInstance: boolean, msg: ContactField): ContactField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactField;
  static deserializeBinaryFromReader(message: ContactField, reader: jspb.BinaryReader): ContactField;
}

export namespace ContactField {
  export type AsObject = {
    name: string,
    value: string,
    type: string,
  }
}

export class EditContactEntryResponse extends jspb.Message {
  clearFieldList(): void;
  getFieldList(): Array<ContactField>;
  setFieldList(value: Array<ContactField>): void;
  addField(value?: ContactField, index?: number): ContactField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditContactEntryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EditContactEntryResponse): EditContactEntryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditContactEntryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditContactEntryResponse;
  static deserializeBinaryFromReader(message: EditContactEntryResponse, reader: jspb.BinaryReader): EditContactEntryResponse;
}

export namespace EditContactEntryResponse {
  export type AsObject = {
    fieldList: Array<ContactField.AsObject>,
  }
}

export class ListContactsByEntityRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getEntityId(): string;
  setEntityId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContactsByEntityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListContactsByEntityRequest): ListContactsByEntityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListContactsByEntityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContactsByEntityRequest;
  static deserializeBinaryFromReader(message: ListContactsByEntityRequest, reader: jspb.BinaryReader): ListContactsByEntityRequest;
}

export namespace ListContactsByEntityRequest {
  export type AsObject = {
    projectId: string,
    entityId: string,
  }
}

export class ListContactsByEntityResponse extends jspb.Message {
  clearContactManagerEntryList(): void;
  getContactManagerEntryList(): Array<ContactManagerEntry>;
  setContactManagerEntryList(value: Array<ContactManagerEntry>): void;
  addContactManagerEntry(value?: ContactManagerEntry, index?: number): ContactManagerEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContactsByEntityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListContactsByEntityResponse): ListContactsByEntityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListContactsByEntityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContactsByEntityResponse;
  static deserializeBinaryFromReader(message: ListContactsByEntityResponse, reader: jspb.BinaryReader): ListContactsByEntityResponse;
}

export namespace ListContactsByEntityResponse {
  export type AsObject = {
    contactManagerEntryList: Array<ContactManagerEntry.AsObject>,
  }
}

export class GetContactFieldTypeRequest extends jspb.Message {
  getFieldName(): string;
  setFieldName(value: string): void;

  getFieldValue(): string;
  setFieldValue(value: string): void;

  hasFieldType(): boolean;
  clearFieldType(): void;
  getFieldType(): api_commons_classifier_pb.ClassifierEntityTypeMap[keyof api_commons_classifier_pb.ClassifierEntityTypeMap];
  setFieldType(value: api_commons_classifier_pb.ClassifierEntityTypeMap[keyof api_commons_classifier_pb.ClassifierEntityTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContactFieldTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContactFieldTypeRequest): GetContactFieldTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContactFieldTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContactFieldTypeRequest;
  static deserializeBinaryFromReader(message: GetContactFieldTypeRequest, reader: jspb.BinaryReader): GetContactFieldTypeRequest;
}

export namespace GetContactFieldTypeRequest {
  export type AsObject = {
    fieldName: string,
    fieldValue: string,
    fieldType: api_commons_classifier_pb.ClassifierEntityTypeMap[keyof api_commons_classifier_pb.ClassifierEntityTypeMap],
  }
}

export class GetContactFieldTypeResponse extends jspb.Message {
  getFieldType(): api_commons_classifier_pb.ClassifierEntityTypeMap[keyof api_commons_classifier_pb.ClassifierEntityTypeMap];
  setFieldType(value: api_commons_classifier_pb.ClassifierEntityTypeMap[keyof api_commons_classifier_pb.ClassifierEntityTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContactFieldTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContactFieldTypeResponse): GetContactFieldTypeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContactFieldTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContactFieldTypeResponse;
  static deserializeBinaryFromReader(message: GetContactFieldTypeResponse, reader: jspb.BinaryReader): GetContactFieldTypeResponse;
}

export namespace GetContactFieldTypeResponse {
  export type AsObject = {
    fieldType: api_commons_classifier_pb.ClassifierEntityTypeMap[keyof api_commons_classifier_pb.ClassifierEntityTypeMap],
  }
}

export class ListContactActivityLogRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getContactManagerEntryId(): string;
  setContactManagerEntryId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContactActivityLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListContactActivityLogRequest): ListContactActivityLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListContactActivityLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContactActivityLogRequest;
  static deserializeBinaryFromReader(message: ListContactActivityLogRequest, reader: jspb.BinaryReader): ListContactActivityLogRequest;
}

export namespace ListContactActivityLogRequest {
  export type AsObject = {
    orgId: string,
    projectId: string,
    contactManagerEntryId: string,
  }
}

export class ListContactActivityLogResponse extends jspb.Message {
  clearContactActivityLogList(): void;
  getContactActivityLogList(): Array<ContactActivityLog>;
  setContactActivityLogList(value: Array<ContactActivityLog>): void;
  addContactActivityLog(value?: ContactActivityLog, index?: number): ContactActivityLog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContactActivityLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListContactActivityLogResponse): ListContactActivityLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListContactActivityLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContactActivityLogResponse;
  static deserializeBinaryFromReader(message: ListContactActivityLogResponse, reader: jspb.BinaryReader): ListContactActivityLogResponse;
}

export namespace ListContactActivityLogResponse {
  export type AsObject = {
    contactActivityLogList: Array<ContactActivityLog.AsObject>,
  }
}

export class ContactActivityLog extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getContactManagerEntryId(): string;
  setContactManagerEntryId(value: string): void;

  getEventUser(): string;
  setEventUser(value: string): void;

  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): api_commons_audit_audit_pb.AuditEvent | undefined;
  setEvent(value?: api_commons_audit_audit_pb.AuditEvent): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactActivityLog.AsObject;
  static toObject(includeInstance: boolean, msg: ContactActivityLog): ContactActivityLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactActivityLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactActivityLog;
  static deserializeBinaryFromReader(message: ContactActivityLog, reader: jspb.BinaryReader): ContactActivityLog;
}

export namespace ContactActivityLog {
  export type AsObject = {
    orgId: string,
    projectId: string,
    contactManagerEntryId: string,
    eventUser: string,
    event?: api_commons_audit_audit_pb.AuditEvent.AsObject,
  }
}

