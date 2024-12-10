// package: api.commons.audit
// file: api/commons/audit/contactmanager_events.proto

import * as jspb from "google-protobuf";
import * as api_commons_classifier_pb from "../../../api/commons/classifier_pb";
import * as api_commons_contactmanager_pb from "../../../api/commons/contactmanager_pb";

export class ContactManagerEntryAddEvent extends jspb.Message {
  hasAddevent(): boolean;
  clearAddevent(): void;
  getAddevent(): ContactManagerEntryEvent | undefined;
  setAddevent(value?: ContactManagerEntryEvent): void;

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
    addevent?: ContactManagerEntryEvent.AsObject,
  }
}

export class ContactManagerEntryGetEncEvent extends jspb.Message {
  hasViewevent(): boolean;
  clearViewevent(): void;
  getViewevent(): ContactManagerEntryEvent | undefined;
  setViewevent(value?: ContactManagerEntryEvent): void;

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
    viewevent?: ContactManagerEntryEvent.AsObject,
  }
}

export class ContactManagerEntryEditEvent extends jspb.Message {
  hasEditevent(): boolean;
  clearEditevent(): void;
  getEditevent(): ContactManagerEntryEvent | undefined;
  setEditevent(value?: ContactManagerEntryEvent): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactManagerEntryEditEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ContactManagerEntryEditEvent): ContactManagerEntryEditEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactManagerEntryEditEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactManagerEntryEditEvent;
  static deserializeBinaryFromReader(message: ContactManagerEntryEditEvent, reader: jspb.BinaryReader): ContactManagerEntryEditEvent;
}

export namespace ContactManagerEntryEditEvent {
  export type AsObject = {
    editevent?: ContactManagerEntryEvent.AsObject,
  }
}

export class ContactManagerDeleteEvent extends jspb.Message {
  hasDeleteevent(): boolean;
  clearDeleteevent(): void;
  getDeleteevent(): ContactManagerEntryEvent | undefined;
  setDeleteevent(value?: ContactManagerEntryEvent): void;

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
    deleteevent?: ContactManagerEntryEvent.AsObject,
  }
}

export class ContactManagerEntryEvent extends jspb.Message {
  getContactmanagerlistid(): number;
  setContactmanagerlistid(value: number): void;

  getContactmanagerentryid(): number;
  setContactmanagerentryid(value: number): void;

  clearContactmanagerentrylistidsList(): void;
  getContactmanagerentrylistidsList(): Array<number>;
  setContactmanagerentrylistidsList(value: Array<number>): void;
  addContactmanagerentrylistids(value: number, index?: number): number;

  clearFieldChangesList(): void;
  getFieldChangesList(): Array<ContactFieldChanges>;
  setFieldChangesList(value: Array<ContactFieldChanges>): void;
  addFieldChanges(value?: ContactFieldChanges, index?: number): ContactFieldChanges;

  hasContactUpdateTaskId(): boolean;
  clearContactUpdateTaskId(): void;
  getContactUpdateTaskId(): string;
  setContactUpdateTaskId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactManagerEntryEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ContactManagerEntryEvent): ContactManagerEntryEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactManagerEntryEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactManagerEntryEvent;
  static deserializeBinaryFromReader(message: ContactManagerEntryEvent, reader: jspb.BinaryReader): ContactManagerEntryEvent;
}

export namespace ContactManagerEntryEvent {
  export type AsObject = {
    contactmanagerlistid: number,
    contactmanagerentryid: number,
    contactmanagerentrylistidsList: Array<number>,
    fieldChangesList: Array<ContactFieldChanges.AsObject>,
    contactUpdateTaskId: string,
  }
}

export class ContactFieldChanges extends jspb.Message {
  hasFromValue(): boolean;
  clearFromValue(): void;
  getFromValue(): AuditedContactField | undefined;
  setFromValue(value?: AuditedContactField): void;

  hasToValue(): boolean;
  clearToValue(): void;
  getToValue(): AuditedContactField | undefined;
  setToValue(value?: AuditedContactField): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactFieldChanges.AsObject;
  static toObject(includeInstance: boolean, msg: ContactFieldChanges): ContactFieldChanges.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactFieldChanges, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactFieldChanges;
  static deserializeBinaryFromReader(message: ContactFieldChanges, reader: jspb.BinaryReader): ContactFieldChanges;
}

export namespace ContactFieldChanges {
  export type AsObject = {
    fromValue?: AuditedContactField.AsObject,
    toValue?: AuditedContactField.AsObject,
  }
}

export class AuditedContactField extends jspb.Message {
  getContactFieldId(): number;
  setContactFieldId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getType(): string;
  setType(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditedContactField.AsObject;
  static toObject(includeInstance: boolean, msg: AuditedContactField): AuditedContactField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditedContactField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditedContactField;
  static deserializeBinaryFromReader(message: AuditedContactField, reader: jspb.BinaryReader): AuditedContactField;
}

export namespace AuditedContactField {
  export type AsObject = {
    contactFieldId: number,
    name: string,
    type: string,
    value: string,
  }
}

export class ContactManagerListUploadEvent extends jspb.Message {
  getContactmanagerlistid(): number;
  setContactmanagerlistid(value: number): void;

  getNumberofcontactsuploaded(): number;
  setNumberofcontactsuploaded(value: number): void;

  getNumberofsuccessfulcontactsuploaded(): number;
  setNumberofsuccessfulcontactsuploaded(value: number): void;

  getNumberoffailedcontacts(): number;
  setNumberoffailedcontacts(value: number): void;

  getNumberofnewcontacts(): number;
  setNumberofnewcontacts(value: number): void;

  getNumberofduplicatecontacts(): number;
  setNumberofduplicatecontacts(value: number): void;

  getDedupfieldtype(): api_commons_classifier_pb.ClassifierEntityTypeMap[keyof api_commons_classifier_pb.ClassifierEntityTypeMap];
  setDedupfieldtype(value: api_commons_classifier_pb.ClassifierEntityTypeMap[keyof api_commons_classifier_pb.ClassifierEntityTypeMap]): void;

  getDedupmergestrategy(): api_commons_contactmanager_pb.DeDuplicationMergeStrategyMap[keyof api_commons_contactmanager_pb.DeDuplicationMergeStrategyMap];
  setDedupmergestrategy(value: api_commons_contactmanager_pb.DeDuplicationMergeStrategyMap[keyof api_commons_contactmanager_pb.DeDuplicationMergeStrategyMap]): void;

  getContactManagerListName(): string;
  setContactManagerListName(value: string): void;

  hasFileName(): boolean;
  clearFileName(): void;
  getFileName(): string;
  setFileName(value: string): void;

  getUploadTaskId(): number;
  setUploadTaskId(value: number): void;

  getTtl(): number;
  setTtl(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactManagerListUploadEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ContactManagerListUploadEvent): ContactManagerListUploadEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactManagerListUploadEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactManagerListUploadEvent;
  static deserializeBinaryFromReader(message: ContactManagerListUploadEvent, reader: jspb.BinaryReader): ContactManagerListUploadEvent;
}

export namespace ContactManagerListUploadEvent {
  export type AsObject = {
    contactmanagerlistid: number,
    numberofcontactsuploaded: number,
    numberofsuccessfulcontactsuploaded: number,
    numberoffailedcontacts: number,
    numberofnewcontacts: number,
    numberofduplicatecontacts: number,
    dedupfieldtype: api_commons_classifier_pb.ClassifierEntityTypeMap[keyof api_commons_classifier_pb.ClassifierEntityTypeMap],
    dedupmergestrategy: api_commons_contactmanager_pb.DeDuplicationMergeStrategyMap[keyof api_commons_contactmanager_pb.DeDuplicationMergeStrategyMap],
    contactManagerListName: string,
    fileName: string,
    uploadTaskId: number,
    ttl: number,
  }
}

export class ContactManagerKycEvent extends jspb.Message {
  getContactmanagerlistid(): number;
  setContactmanagerlistid(value: number): void;

  getContactmanagerentryid(): number;
  setContactmanagerentryid(value: number): void;

  clearTypesList(): void;
  getTypesList(): Array<string>;
  setTypesList(value: Array<string>): void;
  addTypes(value: string, index?: number): string;

  clearContactmanagerentrylistidsList(): void;
  getContactmanagerentrylistidsList(): Array<number>;
  setContactmanagerentrylistidsList(value: Array<number>): void;
  addContactmanagerentrylistids(value: number, index?: number): number;

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
    contactmanagerlistid: number,
    contactmanagerentryid: number,
    typesList: Array<string>,
    contactmanagerentrylistidsList: Array<number>,
  }
}

export class ContactManagerEntityAssociationEvent extends jspb.Message {
  getContactManagerEntryId(): number;
  setContactManagerEntryId(value: number): void;

  getFromEntity(): string;
  setFromEntity(value: string): void;

  getToEntity(): string;
  setToEntity(value: string): void;

  getEntityType(): string;
  setEntityType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactManagerEntityAssociationEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ContactManagerEntityAssociationEvent): ContactManagerEntityAssociationEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactManagerEntityAssociationEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactManagerEntityAssociationEvent;
  static deserializeBinaryFromReader(message: ContactManagerEntityAssociationEvent, reader: jspb.BinaryReader): ContactManagerEntityAssociationEvent;
}

export namespace ContactManagerEntityAssociationEvent {
  export type AsObject = {
    contactManagerEntryId: number,
    fromEntity: string,
    toEntity: string,
    entityType: string,
  }
}

