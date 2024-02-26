// package: api.commons
// file: api/commons/contactmanager.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ContactManagerEntry extends jspb.Message {
  getContactManagerEntryId(): number;
  setContactManagerEntryId(value: number): void;

  getContactManagerEntryListId(): number;
  setContactManagerEntryListId(value: number): void;

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
    contactManagerEntryId: number,
    contactManagerEntryListId: number,
    key: string,
    value: string,
    type: string,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ContactManagerList extends jspb.Message {
  getContactManagerListId(): number;
  setContactManagerListId(value: number): void;

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

  getTtl(): number;
  setTtl(value: number): void;

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
    contactManagerListId: number,
    orgId: string,
    projectId: string,
    fileName: string,
    description: string,
    listDetailsList: Array<string>,
    ttl: number,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

