// package: api.commons.audit
// file: api/commons/audit/contactmanager_events.proto

import * as jspb from "google-protobuf";
import * as api_v1alpha1_contactmanager_contactmanager_pb from "../../../api/v1alpha1/contactmanager/contactmanager_pb";

export class ContactManagerEntryAddEvent extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactManagerEntryAddEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ContactManagerEntryAddEvent): ContactManagerEntryAddEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactManagerEntryAddEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactManagerEntryAddEvent;
  static deserializeBinaryFromReader(message: ContactManagerEntryAddEvent, reader: jspb.BinaryReader): ContactManagerEntryAddEvent;
}

export namespace ContactManagerEntryAddEvent {
  export type AsObject = {
  }
}

export class ContactManagerEntryGetEncEvent extends jspb.Message {
  getContactManagerListId(): number;
  setContactManagerListId(value: number): void;

  getContactManagerEntryId(): number;
  setContactManagerEntryId(value: number): void;

  getCreatedById(): string;
  setCreatedById(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactManagerEntryGetEncEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ContactManagerEntryGetEncEvent): ContactManagerEntryGetEncEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactManagerEntryGetEncEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactManagerEntryGetEncEvent;
  static deserializeBinaryFromReader(message: ContactManagerEntryGetEncEvent, reader: jspb.BinaryReader): ContactManagerEntryGetEncEvent;
}

export namespace ContactManagerEntryGetEncEvent {
  export type AsObject = {
    contactManagerListId: number,
    contactManagerEntryId: number,
    createdById: string,
  }
}

export class ContactManagerDeleteEvent extends jspb.Message {
  getContactManagerListId(): number;
  setContactManagerListId(value: number): void;

  getDeletedBy(): string;
  setDeletedBy(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactManagerDeleteEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ContactManagerDeleteEvent): ContactManagerDeleteEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactManagerDeleteEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactManagerDeleteEvent;
  static deserializeBinaryFromReader(message: ContactManagerDeleteEvent, reader: jspb.BinaryReader): ContactManagerDeleteEvent;
}

export namespace ContactManagerDeleteEvent {
  export type AsObject = {
    contactManagerListId: number,
    deletedBy: string,
  }
}

export class ContactManagerKycEvent extends jspb.Message {
  getContactManagerListId(): number;
  setContactManagerListId(value: number): void;

  clearKycDetailsList(): void;
  getKycDetailsList(): Array<api_v1alpha1_contactmanager_contactmanager_pb.ContactManagerEntryVal>;
  setKycDetailsList(value: Array<api_v1alpha1_contactmanager_contactmanager_pb.ContactManagerEntryVal>): void;
  addKycDetails(value?: api_v1alpha1_contactmanager_contactmanager_pb.ContactManagerEntryVal, index?: number): api_v1alpha1_contactmanager_contactmanager_pb.ContactManagerEntryVal;

  getProjectId(): string;
  setProjectId(value: string): void;

  getCreatedById(): string;
  setCreatedById(value: string): void;

  getIsEncrypted(): boolean;
  setIsEncrypted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactManagerKycEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ContactManagerKycEvent): ContactManagerKycEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactManagerKycEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactManagerKycEvent;
  static deserializeBinaryFromReader(message: ContactManagerKycEvent, reader: jspb.BinaryReader): ContactManagerKycEvent;
}

export namespace ContactManagerKycEvent {
  export type AsObject = {
    contactManagerListId: number,
    kycDetailsList: Array<api_v1alpha1_contactmanager_contactmanager_pb.ContactManagerEntryVal.AsObject>,
    projectId: string,
    createdById: string,
    isEncrypted: boolean,
  }
}

