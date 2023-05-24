// package: api.v0alpha
// file: api/v0alpha/compliance.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../annotations/authz_pb";
import * as api_commons_acd_pb from "../../api/commons/acd_pb";
import * as api_commons_communication_pb from "../../api/commons/communication_pb";
import * as api_commons_compliance_pb from "../../api/commons/compliance_pb";
import * as api_commons_enums_pb from "../../api/commons/enums_pb";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as google_longrunning_operations_pb from "../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class ProcessOutboundCallReq extends jspb.Message {
  getRuleSetName(): string;
  setRuleSetName(value: string): void;

  getCountryCode(): string;
  setCountryCode(value: string): void;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): void;

  getCallMetadataMap(): jspb.Map<string, string>;
  clearCallMetadataMap(): void;
  getSourceId(): number;
  setSourceId(value: number): void;

  getSourceField(): string;
  setSourceField(value: string): void;

  getCallerId(): string;
  setCallerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessOutboundCallReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessOutboundCallReq): ProcessOutboundCallReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessOutboundCallReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessOutboundCallReq;
  static deserializeBinaryFromReader(message: ProcessOutboundCallReq, reader: jspb.BinaryReader): ProcessOutboundCallReq;
}

export namespace ProcessOutboundCallReq {
  export type AsObject = {
    ruleSetName: string,
    countryCode: string,
    phoneNumber: string,
    callMetadataMap: Array<[string, string]>,
    sourceId: number,
    sourceField: string,
    callerId: string,
  }
}

export class ProcessRes extends jspb.Message {
  getPermit(): boolean;
  setPermit(value: boolean): void;

  clearRuleResponsesList(): void;
  getRuleResponsesList(): Array<api_commons_compliance_pb.RuleResponse>;
  setRuleResponsesList(value: Array<api_commons_compliance_pb.RuleResponse>): void;
  addRuleResponses(value?: api_commons_compliance_pb.RuleResponse, index?: number): api_commons_compliance_pb.RuleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessRes.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessRes): ProcessRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessRes;
  static deserializeBinaryFromReader(message: ProcessRes, reader: jspb.BinaryReader): ProcessRes;
}

export namespace ProcessRes {
  export type AsObject = {
    permit: boolean,
    ruleResponsesList: Array<api_commons_compliance_pb.RuleResponse.AsObject>,
  }
}

export class ScrubList extends jspb.Message {
  getListId(): string;
  setListId(value: string): void;

  clearEntriesList(): void;
  getEntriesList(): Array<ScrubEntry>;
  setEntriesList(value: Array<ScrubEntry>): void;
  addEntries(value?: ScrubEntry, index?: number): ScrubEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScrubList.AsObject;
  static toObject(includeInstance: boolean, msg: ScrubList): ScrubList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScrubList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScrubList;
  static deserializeBinaryFromReader(message: ScrubList, reader: jspb.BinaryReader): ScrubList;
}

export namespace ScrubList {
  export type AsObject = {
    listId: string,
    entriesList: Array<ScrubEntry.AsObject>,
  }
}

export class CreateScrubListReq extends jspb.Message {
  getListId(): string;
  setListId(value: string): void;

  clearListList(): void;
  getListList(): Array<string>;
  setListList(value: Array<string>): void;
  addList(value: string, index?: number): string;

  getContentType(): api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap];
  setContentType(value: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap]): void;

  getCountryCode(): string;
  setCountryCode(value: string): void;

  clearScrubEntryDetailsList(): void;
  getScrubEntryDetailsList(): Array<api_commons_compliance_pb.ScrubEntryDetails>;
  setScrubEntryDetailsList(value: Array<api_commons_compliance_pb.ScrubEntryDetails>): void;
  addScrubEntryDetails(value?: api_commons_compliance_pb.ScrubEntryDetails, index?: number): api_commons_compliance_pb.ScrubEntryDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateScrubListReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateScrubListReq): CreateScrubListReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateScrubListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateScrubListReq;
  static deserializeBinaryFromReader(message: CreateScrubListReq, reader: jspb.BinaryReader): CreateScrubListReq;
}

export namespace CreateScrubListReq {
  export type AsObject = {
    listId: string,
    listList: Array<string>,
    contentType: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap],
    countryCode: string,
    scrubEntryDetailsList: Array<api_commons_compliance_pb.ScrubEntryDetails.AsObject>,
  }
}

export class AddScrubListEntriesReq extends jspb.Message {
  getListId(): string;
  setListId(value: string): void;

  clearListList(): void;
  getListList(): Array<string>;
  setListList(value: Array<string>): void;
  addList(value: string, index?: number): string;

  getContentType(): api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap];
  setContentType(value: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap]): void;

  getCountryCode(): string;
  setCountryCode(value: string): void;

  clearScrubEntryDetailsList(): void;
  getScrubEntryDetailsList(): Array<api_commons_compliance_pb.ScrubEntryDetails>;
  setScrubEntryDetailsList(value: Array<api_commons_compliance_pb.ScrubEntryDetails>): void;
  addScrubEntryDetails(value?: api_commons_compliance_pb.ScrubEntryDetails, index?: number): api_commons_compliance_pb.ScrubEntryDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddScrubListEntriesReq.AsObject;
  static toObject(includeInstance: boolean, msg: AddScrubListEntriesReq): AddScrubListEntriesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddScrubListEntriesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddScrubListEntriesReq;
  static deserializeBinaryFromReader(message: AddScrubListEntriesReq, reader: jspb.BinaryReader): AddScrubListEntriesReq;
}

export namespace AddScrubListEntriesReq {
  export type AsObject = {
    listId: string,
    listList: Array<string>,
    contentType: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap],
    countryCode: string,
    scrubEntryDetailsList: Array<api_commons_compliance_pb.ScrubEntryDetails.AsObject>,
  }
}

export class UpdateScrubEntryReq extends jspb.Message {
  getListId(): string;
  setListId(value: string): void;

  hasNotes(): boolean;
  clearNotes(): void;
  getNotes(): google_protobuf_wrappers_pb.StringValue | undefined;
  setNotes(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): google_protobuf_wrappers_pb.StringValue | undefined;
  setContent(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasExpirationDate(): boolean;
  clearExpirationDate(): void;
  getExpirationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirationDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCountryCode(): boolean;
  clearCountryCode(): void;
  getCountryCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScrubEntryReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScrubEntryReq): UpdateScrubEntryReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScrubEntryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScrubEntryReq;
  static deserializeBinaryFromReader(message: UpdateScrubEntryReq, reader: jspb.BinaryReader): UpdateScrubEntryReq;
}

export namespace UpdateScrubEntryReq {
  export type AsObject = {
    listId: string,
    notes?: google_protobuf_wrappers_pb.StringValue.AsObject,
    content?: google_protobuf_wrappers_pb.StringValue.AsObject,
    expirationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    countryCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class UpdateScrubEntryRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScrubEntryRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScrubEntryRes): UpdateScrubEntryRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScrubEntryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScrubEntryRes;
  static deserializeBinaryFromReader(message: UpdateScrubEntryRes, reader: jspb.BinaryReader): UpdateScrubEntryRes;
}

export namespace UpdateScrubEntryRes {
  export type AsObject = {
  }
}

export class DeleteScrubListEntriesReq extends jspb.Message {
  getListId(): string;
  setListId(value: string): void;

  clearListList(): void;
  getListList(): Array<string>;
  setListList(value: Array<string>): void;
  addList(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteScrubListEntriesReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteScrubListEntriesReq): DeleteScrubListEntriesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteScrubListEntriesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteScrubListEntriesReq;
  static deserializeBinaryFromReader(message: DeleteScrubListEntriesReq, reader: jspb.BinaryReader): DeleteScrubListEntriesReq;
}

export namespace DeleteScrubListEntriesReq {
  export type AsObject = {
    listId: string,
    listList: Array<string>,
  }
}

export class GetScrubListReq extends jspb.Message {
  getListId(): string;
  setListId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScrubListReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetScrubListReq): GetScrubListReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScrubListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScrubListReq;
  static deserializeBinaryFromReader(message: GetScrubListReq, reader: jspb.BinaryReader): GetScrubListReq;
}

export namespace GetScrubListReq {
  export type AsObject = {
    listId: string,
  }
}

export class GetScrubListsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScrubListsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetScrubListsReq): GetScrubListsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScrubListsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScrubListsReq;
  static deserializeBinaryFromReader(message: GetScrubListsReq, reader: jspb.BinaryReader): GetScrubListsReq;
}

export namespace GetScrubListsReq {
  export type AsObject = {
  }
}

export class ScrubListsRes extends jspb.Message {
  clearListsList(): void;
  getListsList(): Array<ScrubListRes>;
  setListsList(value: Array<ScrubListRes>): void;
  addLists(value?: ScrubListRes, index?: number): ScrubListRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScrubListsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ScrubListsRes): ScrubListsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScrubListsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScrubListsRes;
  static deserializeBinaryFromReader(message: ScrubListsRes, reader: jspb.BinaryReader): ScrubListsRes;
}

export namespace ScrubListsRes {
  export type AsObject = {
    listsList: Array<ScrubListRes.AsObject>,
  }
}

export class ScrubListRes extends jspb.Message {
  getListId(): string;
  setListId(value: string): void;

  getReadOnly(): boolean;
  setReadOnly(value: boolean): void;

  getContentType(): api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap];
  setContentType(value: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap]): void;

  getEntriesAdded(): number;
  setEntriesAdded(value: number): void;

  clearInvalidEntriesList(): void;
  getInvalidEntriesList(): Array<string>;
  setInvalidEntriesList(value: Array<string>): void;
  addInvalidEntries(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScrubListRes.AsObject;
  static toObject(includeInstance: boolean, msg: ScrubListRes): ScrubListRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScrubListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScrubListRes;
  static deserializeBinaryFromReader(message: ScrubListRes, reader: jspb.BinaryReader): ScrubListRes;
}

export namespace ScrubListRes {
  export type AsObject = {
    listId: string,
    readOnly: boolean,
    contentType: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap],
    entriesAdded: number,
    invalidEntriesList: Array<string>,
  }
}

export class DeleteScrubListReq extends jspb.Message {
  getListId(): string;
  setListId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteScrubListReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteScrubListReq): DeleteScrubListReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteScrubListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteScrubListReq;
  static deserializeBinaryFromReader(message: DeleteScrubListReq, reader: jspb.BinaryReader): DeleteScrubListReq;
}

export namespace DeleteScrubListReq {
  export type AsObject = {
    listId: string,
  }
}

export class SearchScrubListReq extends jspb.Message {
  getListId(): string;
  setListId(value: string): void;

  getTerm(): string;
  setTerm(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchScrubListReq.AsObject;
  static toObject(includeInstance: boolean, msg: SearchScrubListReq): SearchScrubListReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchScrubListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchScrubListReq;
  static deserializeBinaryFromReader(message: SearchScrubListReq, reader: jspb.BinaryReader): SearchScrubListReq;
}

export namespace SearchScrubListReq {
  export type AsObject = {
    listId: string,
    term: string,
  }
}

export class ScrubEntry extends jspb.Message {
  getCountrySid(): number;
  setCountrySid(value: number): void;

  getListId(): string;
  setListId(value: string): void;

  getSourceId(): number;
  setSourceId(value: number): void;

  getSourceField(): string;
  setSourceField(value: string): void;

  hasNotes(): boolean;
  clearNotes(): void;
  getNotes(): google_protobuf_wrappers_pb.StringValue | undefined;
  setNotes(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): google_protobuf_wrappers_pb.StringValue | undefined;
  setContent(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasExpirationDate(): boolean;
  clearExpirationDate(): void;
  getExpirationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirationDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): google_protobuf_wrappers_pb.StringValue | undefined;
  setResult(value?: google_protobuf_wrappers_pb.StringValue): void;

  getType(): api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap];
  setType(value: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap]): void;

  hasCountryCode(): boolean;
  clearCountryCode(): void;
  getCountryCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCreatedBy(): boolean;
  clearCreatedBy(): void;
  getCreatedBy(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCreatedBy(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScrubEntry.AsObject;
  static toObject(includeInstance: boolean, msg: ScrubEntry): ScrubEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScrubEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScrubEntry;
  static deserializeBinaryFromReader(message: ScrubEntry, reader: jspb.BinaryReader): ScrubEntry;
}

export namespace ScrubEntry {
  export type AsObject = {
    countrySid: number,
    listId: string,
    sourceId: number,
    sourceField: string,
    notes?: google_protobuf_wrappers_pb.StringValue.AsObject,
    content?: google_protobuf_wrappers_pb.StringValue.AsObject,
    expirationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    result?: google_protobuf_wrappers_pb.StringValue.AsObject,
    type: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap],
    countryCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class RuleAutoCompleteReq extends jspb.Message {
  getPhrase(): string;
  setPhrase(value: string): void;

  getCursor(): number;
  setCursor(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RuleAutoCompleteReq.AsObject;
  static toObject(includeInstance: boolean, msg: RuleAutoCompleteReq): RuleAutoCompleteReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RuleAutoCompleteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RuleAutoCompleteReq;
  static deserializeBinaryFromReader(message: RuleAutoCompleteReq, reader: jspb.BinaryReader): RuleAutoCompleteReq;
}

export namespace RuleAutoCompleteReq {
  export type AsObject = {
    phrase: string,
    cursor: number,
  }
}

export class RuleAutoCompleteRes extends jspb.Message {
  clearOptionsList(): void;
  getOptionsList(): Array<string>;
  setOptionsList(value: Array<string>): void;
  addOptions(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RuleAutoCompleteRes.AsObject;
  static toObject(includeInstance: boolean, msg: RuleAutoCompleteRes): RuleAutoCompleteRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RuleAutoCompleteRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RuleAutoCompleteRes;
  static deserializeBinaryFromReader(message: RuleAutoCompleteRes, reader: jspb.BinaryReader): RuleAutoCompleteRes;
}

export namespace RuleAutoCompleteRes {
  export type AsObject = {
    optionsList: Array<string>,
  }
}

export class CheckRuleSetReq extends jspb.Message {
  getPhrase(): string;
  setPhrase(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckRuleSetReq.AsObject;
  static toObject(includeInstance: boolean, msg: CheckRuleSetReq): CheckRuleSetReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckRuleSetReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckRuleSetReq;
  static deserializeBinaryFromReader(message: CheckRuleSetReq, reader: jspb.BinaryReader): CheckRuleSetReq;
}

export namespace CheckRuleSetReq {
  export type AsObject = {
    phrase: string,
  }
}

export class CheckRuleSetRes extends jspb.Message {
  clearRulesList(): void;
  getRulesList(): Array<api_commons_compliance_pb.Rule>;
  setRulesList(value: Array<api_commons_compliance_pb.Rule>): void;
  addRules(value?: api_commons_compliance_pb.Rule, index?: number): api_commons_compliance_pb.Rule;

  clearWarningsList(): void;
  getWarningsList(): Array<string>;
  setWarningsList(value: Array<string>): void;
  addWarnings(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckRuleSetRes.AsObject;
  static toObject(includeInstance: boolean, msg: CheckRuleSetRes): CheckRuleSetRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckRuleSetRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckRuleSetRes;
  static deserializeBinaryFromReader(message: CheckRuleSetRes, reader: jspb.BinaryReader): CheckRuleSetRes;
}

export namespace CheckRuleSetRes {
  export type AsObject = {
    rulesList: Array<api_commons_compliance_pb.Rule.AsObject>,
    warningsList: Array<string>,
  }
}

export class ListRuleSetsReq extends jspb.Message {
  getIncludeDisabled(): boolean;
  setIncludeDisabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRuleSetsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListRuleSetsReq): ListRuleSetsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRuleSetsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRuleSetsReq;
  static deserializeBinaryFromReader(message: ListRuleSetsReq, reader: jspb.BinaryReader): ListRuleSetsReq;
}

export namespace ListRuleSetsReq {
  export type AsObject = {
    includeDisabled: boolean,
  }
}

export class ListRuleSetsRes extends jspb.Message {
  getRuleSetId(): string;
  setRuleSetId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getRuleCount(): number;
  setRuleCount(value: number): void;

  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRuleSetsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListRuleSetsRes): ListRuleSetsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRuleSetsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRuleSetsRes;
  static deserializeBinaryFromReader(message: ListRuleSetsRes, reader: jspb.BinaryReader): ListRuleSetsRes;
}

export namespace ListRuleSetsRes {
  export type AsObject = {
    ruleSetId: string,
    name: string,
    ruleCount: number,
    disabled: boolean,
  }
}

export class GetRuleSetReq extends jspb.Message {
  getRuleSetId(): string;
  setRuleSetId(value: string): void;

  getRuleSetSha(): string;
  setRuleSetSha(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRuleSetReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetRuleSetReq): GetRuleSetReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRuleSetReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRuleSetReq;
  static deserializeBinaryFromReader(message: GetRuleSetReq, reader: jspb.BinaryReader): GetRuleSetReq;
}

export namespace GetRuleSetReq {
  export type AsObject = {
    ruleSetId: string,
    ruleSetSha: string,
  }
}

export class GetRuleSetByNameReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRuleSetByNameReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetRuleSetByNameReq): GetRuleSetByNameReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRuleSetByNameReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRuleSetByNameReq;
  static deserializeBinaryFromReader(message: GetRuleSetByNameReq, reader: jspb.BinaryReader): GetRuleSetByNameReq;
}

export namespace GetRuleSetByNameReq {
  export type AsObject = {
    name: string,
  }
}

export class AssignRuleSetReq extends jspb.Message {
  hasCommType(): boolean;
  clearCommType(): void;
  getCommType(): api_commons_communication_pb.CommType | undefined;
  setCommType(value?: api_commons_communication_pb.CommType): void;

  getCommId(): string;
  setCommId(value: string): void;

  getRuleSetId(): string;
  setRuleSetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignRuleSetReq.AsObject;
  static toObject(includeInstance: boolean, msg: AssignRuleSetReq): AssignRuleSetReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignRuleSetReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignRuleSetReq;
  static deserializeBinaryFromReader(message: AssignRuleSetReq, reader: jspb.BinaryReader): AssignRuleSetReq;
}

export namespace AssignRuleSetReq {
  export type AsObject = {
    commType?: api_commons_communication_pb.CommType.AsObject,
    commId: string,
    ruleSetId: string,
  }
}

export class AssignRuleSetRes extends jspb.Message {
  getCplRuleSetAssignmentId(): string;
  setCplRuleSetAssignmentId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignRuleSetRes.AsObject;
  static toObject(includeInstance: boolean, msg: AssignRuleSetRes): AssignRuleSetRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignRuleSetRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignRuleSetRes;
  static deserializeBinaryFromReader(message: AssignRuleSetRes, reader: jspb.BinaryReader): AssignRuleSetRes;
}

export namespace AssignRuleSetRes {
  export type AsObject = {
    cplRuleSetAssignmentId: string,
  }
}

export class RenameRuleSetReq extends jspb.Message {
  getRuleSetId(): string;
  setRuleSetId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameRuleSetReq.AsObject;
  static toObject(includeInstance: boolean, msg: RenameRuleSetReq): RenameRuleSetReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenameRuleSetReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameRuleSetReq;
  static deserializeBinaryFromReader(message: RenameRuleSetReq, reader: jspb.BinaryReader): RenameRuleSetReq;
}

export namespace RenameRuleSetReq {
  export type AsObject = {
    ruleSetId: string,
    name: string,
  }
}

export class RenameRuleSetRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameRuleSetRes.AsObject;
  static toObject(includeInstance: boolean, msg: RenameRuleSetRes): RenameRuleSetRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenameRuleSetRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameRuleSetRes;
  static deserializeBinaryFromReader(message: RenameRuleSetRes, reader: jspb.BinaryReader): RenameRuleSetRes;
}

export namespace RenameRuleSetRes {
  export type AsObject = {
  }
}

export class CreateRuleSetReq extends jspb.Message {
  getRuleSetId(): string;
  setRuleSetId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getRulesText(): string;
  setRulesText(value: string): void;

  clearRulesList(): void;
  getRulesList(): Array<api_commons_compliance_pb.Rule>;
  setRulesList(value: Array<api_commons_compliance_pb.Rule>): void;
  addRules(value?: api_commons_compliance_pb.Rule, index?: number): api_commons_compliance_pb.Rule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRuleSetReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRuleSetReq): CreateRuleSetReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRuleSetReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRuleSetReq;
  static deserializeBinaryFromReader(message: CreateRuleSetReq, reader: jspb.BinaryReader): CreateRuleSetReq;
}

export namespace CreateRuleSetReq {
  export type AsObject = {
    ruleSetId: string,
    name: string,
    rulesText: string,
    rulesList: Array<api_commons_compliance_pb.Rule.AsObject>,
  }
}

export class EnableRuleSetReq extends jspb.Message {
  getRuleSetId(): string;
  setRuleSetId(value: string): void;

  getRuleSetSha(): string;
  setRuleSetSha(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableRuleSetReq.AsObject;
  static toObject(includeInstance: boolean, msg: EnableRuleSetReq): EnableRuleSetReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnableRuleSetReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableRuleSetReq;
  static deserializeBinaryFromReader(message: EnableRuleSetReq, reader: jspb.BinaryReader): EnableRuleSetReq;
}

export namespace EnableRuleSetReq {
  export type AsObject = {
    ruleSetId: string,
    ruleSetSha: string,
  }
}

export class DisableRuleSetReq extends jspb.Message {
  getRuleSetId(): string;
  setRuleSetId(value: string): void;

  getRuleSetSha(): string;
  setRuleSetSha(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisableRuleSetReq.AsObject;
  static toObject(includeInstance: boolean, msg: DisableRuleSetReq): DisableRuleSetReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisableRuleSetReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisableRuleSetReq;
  static deserializeBinaryFromReader(message: DisableRuleSetReq, reader: jspb.BinaryReader): DisableRuleSetReq;
}

export namespace DisableRuleSetReq {
  export type AsObject = {
    ruleSetId: string,
    ruleSetSha: string,
  }
}

export class EnableRuleSetRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableRuleSetRes.AsObject;
  static toObject(includeInstance: boolean, msg: EnableRuleSetRes): EnableRuleSetRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnableRuleSetRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableRuleSetRes;
  static deserializeBinaryFromReader(message: EnableRuleSetRes, reader: jspb.BinaryReader): EnableRuleSetRes;
}

export namespace EnableRuleSetRes {
  export type AsObject = {
  }
}

export class DisableRuleSetRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisableRuleSetRes.AsObject;
  static toObject(includeInstance: boolean, msg: DisableRuleSetRes): DisableRuleSetRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisableRuleSetRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisableRuleSetRes;
  static deserializeBinaryFromReader(message: DisableRuleSetRes, reader: jspb.BinaryReader): DisableRuleSetRes;
}

export namespace DisableRuleSetRes {
  export type AsObject = {
  }
}

export class EvaluationResults extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvaluationResults.AsObject;
  static toObject(includeInstance: boolean, msg: EvaluationResults): EvaluationResults.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EvaluationResults, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvaluationResults;
  static deserializeBinaryFromReader(message: EvaluationResults, reader: jspb.BinaryReader): EvaluationResults;
}

export namespace EvaluationResults {
  export type AsObject = {
  }
}

export class RuleSet extends jspb.Message {
  getRuleSetId(): string;
  setRuleSetId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getHead(): boolean;
  setHead(value: boolean): void;

  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  getRulesText(): string;
  setRulesText(value: string): void;

  getSha(): string;
  setSha(value: string): void;

  clearRulesList(): void;
  getRulesList(): Array<api_commons_compliance_pb.Rule>;
  setRulesList(value: Array<api_commons_compliance_pb.Rule>): void;
  addRules(value?: api_commons_compliance_pb.Rule, index?: number): api_commons_compliance_pb.Rule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RuleSet.AsObject;
  static toObject(includeInstance: boolean, msg: RuleSet): RuleSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RuleSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RuleSet;
  static deserializeBinaryFromReader(message: RuleSet, reader: jspb.BinaryReader): RuleSet;
}

export namespace RuleSet {
  export type AsObject = {
    ruleSetId: string,
    name: string,
    head: boolean,
    disabled: boolean,
    rulesText: string,
    sha: string,
    rulesList: Array<api_commons_compliance_pb.Rule.AsObject>,
  }
}

export class GetDefaultRulesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefaultRulesReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefaultRulesReq): GetDefaultRulesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefaultRulesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefaultRulesReq;
  static deserializeBinaryFromReader(message: GetDefaultRulesReq, reader: jspb.BinaryReader): GetDefaultRulesReq;
}

export namespace GetDefaultRulesReq {
  export type AsObject = {
  }
}

export class GetDefaultRulesRes extends jspb.Message {
  clearRulesList(): void;
  getRulesList(): Array<string>;
  setRulesList(value: Array<string>): void;
  addRules(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefaultRulesRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefaultRulesRes): GetDefaultRulesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefaultRulesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefaultRulesRes;
  static deserializeBinaryFromReader(message: GetDefaultRulesRes, reader: jspb.BinaryReader): GetDefaultRulesRes;
}

export namespace GetDefaultRulesRes {
  export type AsObject = {
    rulesList: Array<string>,
  }
}

export class GetScrubListUploadUrlReq extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScrubListUploadUrlReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetScrubListUploadUrlReq): GetScrubListUploadUrlReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScrubListUploadUrlReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScrubListUploadUrlReq;
  static deserializeBinaryFromReader(message: GetScrubListUploadUrlReq, reader: jspb.BinaryReader): GetScrubListUploadUrlReq;
}

export namespace GetScrubListUploadUrlReq {
  export type AsObject = {
    orgId: string,
  }
}

export class GetScrubListUploadUrlRes extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getFilename(): string;
  setFilename(value: string): void;

  getBucket(): string;
  setBucket(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScrubListUploadUrlRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetScrubListUploadUrlRes): GetScrubListUploadUrlRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScrubListUploadUrlRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScrubListUploadUrlRes;
  static deserializeBinaryFromReader(message: GetScrubListUploadUrlRes, reader: jspb.BinaryReader): GetScrubListUploadUrlRes;
}

export namespace GetScrubListUploadUrlRes {
  export type AsObject = {
    url: string,
    filename: string,
    bucket: string,
  }
}

export class ProcessScrubListUploadReq extends jspb.Message {
  getFilename(): string;
  setFilename(value: string): void;

  getListId(): string;
  setListId(value: string): void;

  getContentType(): api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap];
  setContentType(value: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap]): void;

  getNotificationMessage(): string;
  setNotificationMessage(value: string): void;

  getCountryCode(): string;
  setCountryCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessScrubListUploadReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessScrubListUploadReq): ProcessScrubListUploadReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessScrubListUploadReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessScrubListUploadReq;
  static deserializeBinaryFromReader(message: ProcessScrubListUploadReq, reader: jspb.BinaryReader): ProcessScrubListUploadReq;
}

export namespace ProcessScrubListUploadReq {
  export type AsObject = {
    filename: string,
    listId: string,
    contentType: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap],
    notificationMessage: string,
    countryCode: string,
  }
}

export class ProcessScrubListUploadRes extends jspb.Message {
  getEntriesAdded(): number;
  setEntriesAdded(value: number): void;

  clearInvalidEntriesList(): void;
  getInvalidEntriesList(): Array<string>;
  setInvalidEntriesList(value: Array<string>): void;
  addInvalidEntries(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessScrubListUploadRes.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessScrubListUploadRes): ProcessScrubListUploadRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessScrubListUploadRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessScrubListUploadRes;
  static deserializeBinaryFromReader(message: ProcessScrubListUploadRes, reader: jspb.BinaryReader): ProcessScrubListUploadRes;
}

export namespace ProcessScrubListUploadRes {
  export type AsObject = {
    entriesAdded: number,
    invalidEntriesList: Array<string>,
  }
}

export class ProcessScrubListDeleteUploadReq extends jspb.Message {
  getListId(): string;
  setListId(value: string): void;

  getFilename(): string;
  setFilename(value: string): void;

  getNotificationMessage(): string;
  setNotificationMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessScrubListDeleteUploadReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessScrubListDeleteUploadReq): ProcessScrubListDeleteUploadReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessScrubListDeleteUploadReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessScrubListDeleteUploadReq;
  static deserializeBinaryFromReader(message: ProcessScrubListDeleteUploadReq, reader: jspb.BinaryReader): ProcessScrubListDeleteUploadReq;
}

export namespace ProcessScrubListDeleteUploadReq {
  export type AsObject = {
    listId: string,
    filename: string,
    notificationMessage: string,
  }
}

export class ProcessScrubListDeleteUploadRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessScrubListDeleteUploadRes.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessScrubListDeleteUploadRes): ProcessScrubListDeleteUploadRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessScrubListDeleteUploadRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessScrubListDeleteUploadRes;
  static deserializeBinaryFromReader(message: ProcessScrubListDeleteUploadRes, reader: jspb.BinaryReader): ProcessScrubListDeleteUploadRes;
}

export namespace ProcessScrubListDeleteUploadRes {
  export type AsObject = {
  }
}

export class ExportScrubListReq extends jspb.Message {
  getListId(): string;
  setListId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportScrubListReq.AsObject;
  static toObject(includeInstance: boolean, msg: ExportScrubListReq): ExportScrubListReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportScrubListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportScrubListReq;
  static deserializeBinaryFromReader(message: ExportScrubListReq, reader: jspb.BinaryReader): ExportScrubListReq;
}

export namespace ExportScrubListReq {
  export type AsObject = {
    listId: string,
  }
}

export class ExportScrubListRes extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportScrubListRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExportScrubListRes): ExportScrubListRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportScrubListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportScrubListRes;
  static deserializeBinaryFromReader(message: ExportScrubListRes, reader: jspb.BinaryReader): ExportScrubListRes;
}

export namespace ExportScrubListRes {
  export type AsObject = {
    url: string,
  }
}

export class Scenario extends jspb.Message {
  getCplScenarioId(): number;
  setCplScenarioId(value: number): void;

  hasShouldAllow(): boolean;
  clearShouldAllow(): void;
  getShouldAllow(): api_commons_compliance_pb.ScenarioData | undefined;
  setShouldAllow(value?: api_commons_compliance_pb.ScenarioData): void;

  hasShouldDeny(): boolean;
  clearShouldDeny(): void;
  getShouldDeny(): api_commons_compliance_pb.ScenarioData | undefined;
  setShouldDeny(value?: api_commons_compliance_pb.ScenarioData): void;

  hasLastExecutionResult(): boolean;
  clearLastExecutionResult(): void;
  getLastExecutionResult(): api_commons_compliance_pb.ScenarioResult | undefined;
  setLastExecutionResult(value?: api_commons_compliance_pb.ScenarioResult): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Scenario.AsObject;
  static toObject(includeInstance: boolean, msg: Scenario): Scenario.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Scenario, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Scenario;
  static deserializeBinaryFromReader(message: Scenario, reader: jspb.BinaryReader): Scenario;
}

export namespace Scenario {
  export type AsObject = {
    cplScenarioId: number,
    shouldAllow?: api_commons_compliance_pb.ScenarioData.AsObject,
    shouldDeny?: api_commons_compliance_pb.ScenarioData.AsObject,
    lastExecutionResult?: api_commons_compliance_pb.ScenarioResult.AsObject,
    name: string,
  }
}

export class CreateScenarioReq extends jspb.Message {
  hasShouldAllow(): boolean;
  clearShouldAllow(): void;
  getShouldAllow(): api_commons_compliance_pb.ScenarioData | undefined;
  setShouldAllow(value?: api_commons_compliance_pb.ScenarioData): void;

  hasShouldDeny(): boolean;
  clearShouldDeny(): void;
  getShouldDeny(): api_commons_compliance_pb.ScenarioData | undefined;
  setShouldDeny(value?: api_commons_compliance_pb.ScenarioData): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateScenarioReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateScenarioReq): CreateScenarioReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateScenarioReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateScenarioReq;
  static deserializeBinaryFromReader(message: CreateScenarioReq, reader: jspb.BinaryReader): CreateScenarioReq;
}

export namespace CreateScenarioReq {
  export type AsObject = {
    shouldAllow?: api_commons_compliance_pb.ScenarioData.AsObject,
    shouldDeny?: api_commons_compliance_pb.ScenarioData.AsObject,
    name: string,
  }
}

export class CreateScenarioRes extends jspb.Message {
  hasScenario(): boolean;
  clearScenario(): void;
  getScenario(): Scenario | undefined;
  setScenario(value?: Scenario): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateScenarioRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateScenarioRes): CreateScenarioRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateScenarioRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateScenarioRes;
  static deserializeBinaryFromReader(message: CreateScenarioRes, reader: jspb.BinaryReader): CreateScenarioRes;
}

export namespace CreateScenarioRes {
  export type AsObject = {
    scenario?: Scenario.AsObject,
  }
}

export class GetScenarioReq extends jspb.Message {
  getCplScenarioId(): number;
  setCplScenarioId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScenarioReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetScenarioReq): GetScenarioReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScenarioReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScenarioReq;
  static deserializeBinaryFromReader(message: GetScenarioReq, reader: jspb.BinaryReader): GetScenarioReq;
}

export namespace GetScenarioReq {
  export type AsObject = {
    cplScenarioId: number,
  }
}

export class GetScenarioRes extends jspb.Message {
  hasScenario(): boolean;
  clearScenario(): void;
  getScenario(): Scenario | undefined;
  setScenario(value?: Scenario): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScenarioRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetScenarioRes): GetScenarioRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScenarioRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScenarioRes;
  static deserializeBinaryFromReader(message: GetScenarioRes, reader: jspb.BinaryReader): GetScenarioRes;
}

export namespace GetScenarioRes {
  export type AsObject = {
    scenario?: Scenario.AsObject,
  }
}

export class UpdateScenarioReq extends jspb.Message {
  hasScenario(): boolean;
  clearScenario(): void;
  getScenario(): Scenario | undefined;
  setScenario(value?: Scenario): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScenarioReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScenarioReq): UpdateScenarioReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScenarioReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScenarioReq;
  static deserializeBinaryFromReader(message: UpdateScenarioReq, reader: jspb.BinaryReader): UpdateScenarioReq;
}

export namespace UpdateScenarioReq {
  export type AsObject = {
    scenario?: Scenario.AsObject,
  }
}

export class UpdateScenarioRes extends jspb.Message {
  hasScenario(): boolean;
  clearScenario(): void;
  getScenario(): Scenario | undefined;
  setScenario(value?: Scenario): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScenarioRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScenarioRes): UpdateScenarioRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScenarioRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScenarioRes;
  static deserializeBinaryFromReader(message: UpdateScenarioRes, reader: jspb.BinaryReader): UpdateScenarioRes;
}

export namespace UpdateScenarioRes {
  export type AsObject = {
    scenario?: Scenario.AsObject,
  }
}

export class DeleteScenarioReq extends jspb.Message {
  getCplScenarioId(): number;
  setCplScenarioId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteScenarioReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteScenarioReq): DeleteScenarioReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteScenarioReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteScenarioReq;
  static deserializeBinaryFromReader(message: DeleteScenarioReq, reader: jspb.BinaryReader): DeleteScenarioReq;
}

export namespace DeleteScenarioReq {
  export type AsObject = {
    cplScenarioId: number,
  }
}

export class DeleteScenarioRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteScenarioRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteScenarioRes): DeleteScenarioRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteScenarioRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteScenarioRes;
  static deserializeBinaryFromReader(message: DeleteScenarioRes, reader: jspb.BinaryReader): DeleteScenarioRes;
}

export namespace DeleteScenarioRes {
  export type AsObject = {
  }
}

export class RunAssignedScenariosReq extends jspb.Message {
  getCplRuleSetId(): string;
  setCplRuleSetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunAssignedScenariosReq.AsObject;
  static toObject(includeInstance: boolean, msg: RunAssignedScenariosReq): RunAssignedScenariosReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunAssignedScenariosReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunAssignedScenariosReq;
  static deserializeBinaryFromReader(message: RunAssignedScenariosReq, reader: jspb.BinaryReader): RunAssignedScenariosReq;
}

export namespace RunAssignedScenariosReq {
  export type AsObject = {
    cplRuleSetId: string,
  }
}

export class RunAssignedScenariosRes extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<api_commons_compliance_pb.ScenarioResult>;
  setResultsList(value: Array<api_commons_compliance_pb.ScenarioResult>): void;
  addResults(value?: api_commons_compliance_pb.ScenarioResult, index?: number): api_commons_compliance_pb.ScenarioResult;

  getPassedValue(): boolean;
  setPassedValue(value: boolean): void;

  getCplRuleSetName(): string;
  setCplRuleSetName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunAssignedScenariosRes.AsObject;
  static toObject(includeInstance: boolean, msg: RunAssignedScenariosRes): RunAssignedScenariosRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunAssignedScenariosRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunAssignedScenariosRes;
  static deserializeBinaryFromReader(message: RunAssignedScenariosRes, reader: jspb.BinaryReader): RunAssignedScenariosRes;
}

export namespace RunAssignedScenariosRes {
  export type AsObject = {
    resultsList: Array<api_commons_compliance_pb.ScenarioResult.AsObject>,
    passedValue: boolean,
    cplRuleSetName: string,
  }
}

export class ListAllScenariosReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllScenariosReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllScenariosReq): ListAllScenariosReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAllScenariosReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllScenariosReq;
  static deserializeBinaryFromReader(message: ListAllScenariosReq, reader: jspb.BinaryReader): ListAllScenariosReq;
}

export namespace ListAllScenariosReq {
  export type AsObject = {
  }
}

export class ListAllScenariosRes extends jspb.Message {
  clearScenariosList(): void;
  getScenariosList(): Array<Scenario>;
  setScenariosList(value: Array<Scenario>): void;
  addScenarios(value?: Scenario, index?: number): Scenario;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllScenariosRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllScenariosRes): ListAllScenariosRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAllScenariosRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllScenariosRes;
  static deserializeBinaryFromReader(message: ListAllScenariosRes, reader: jspb.BinaryReader): ListAllScenariosRes;
}

export namespace ListAllScenariosRes {
  export type AsObject = {
    scenariosList: Array<Scenario.AsObject>,
  }
}

export class ListAssignedRuleSetsReq extends jspb.Message {
  getCplScenarioId(): number;
  setCplScenarioId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAssignedRuleSetsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListAssignedRuleSetsReq): ListAssignedRuleSetsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAssignedRuleSetsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAssignedRuleSetsReq;
  static deserializeBinaryFromReader(message: ListAssignedRuleSetsReq, reader: jspb.BinaryReader): ListAssignedRuleSetsReq;
}

export namespace ListAssignedRuleSetsReq {
  export type AsObject = {
    cplScenarioId: number,
  }
}

export class ListAssignedRuleSetsRes extends jspb.Message {
  clearRuleSetsList(): void;
  getRuleSetsList(): Array<RuleSet>;
  setRuleSetsList(value: Array<RuleSet>): void;
  addRuleSets(value?: RuleSet, index?: number): RuleSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAssignedRuleSetsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListAssignedRuleSetsRes): ListAssignedRuleSetsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAssignedRuleSetsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAssignedRuleSetsRes;
  static deserializeBinaryFromReader(message: ListAssignedRuleSetsRes, reader: jspb.BinaryReader): ListAssignedRuleSetsRes;
}

export namespace ListAssignedRuleSetsRes {
  export type AsObject = {
    ruleSetsList: Array<RuleSet.AsObject>,
  }
}

export class ListAssignedScenariosReq extends jspb.Message {
  getCplRuleSetId(): string;
  setCplRuleSetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAssignedScenariosReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListAssignedScenariosReq): ListAssignedScenariosReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAssignedScenariosReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAssignedScenariosReq;
  static deserializeBinaryFromReader(message: ListAssignedScenariosReq, reader: jspb.BinaryReader): ListAssignedScenariosReq;
}

export namespace ListAssignedScenariosReq {
  export type AsObject = {
    cplRuleSetId: string,
  }
}

export class AssignedScenario extends jspb.Message {
  hasScenario(): boolean;
  clearScenario(): void;
  getScenario(): Scenario | undefined;
  setScenario(value?: Scenario): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  hasLastExecutionResult(): boolean;
  clearLastExecutionResult(): void;
  getLastExecutionResult(): api_commons_compliance_pb.ScenarioResult | undefined;
  setLastExecutionResult(value?: api_commons_compliance_pb.ScenarioResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignedScenario.AsObject;
  static toObject(includeInstance: boolean, msg: AssignedScenario): AssignedScenario.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignedScenario, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignedScenario;
  static deserializeBinaryFromReader(message: AssignedScenario, reader: jspb.BinaryReader): AssignedScenario;
}

export namespace AssignedScenario {
  export type AsObject = {
    scenario?: Scenario.AsObject,
    enabled: boolean,
    lastExecutionResult?: api_commons_compliance_pb.ScenarioResult.AsObject,
  }
}

export class ListAssignedScenariosRes extends jspb.Message {
  clearAssignedScenariosList(): void;
  getAssignedScenariosList(): Array<AssignedScenario>;
  setAssignedScenariosList(value: Array<AssignedScenario>): void;
  addAssignedScenarios(value?: AssignedScenario, index?: number): AssignedScenario;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAssignedScenariosRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListAssignedScenariosRes): ListAssignedScenariosRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAssignedScenariosRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAssignedScenariosRes;
  static deserializeBinaryFromReader(message: ListAssignedScenariosRes, reader: jspb.BinaryReader): ListAssignedScenariosRes;
}

export namespace ListAssignedScenariosRes {
  export type AsObject = {
    assignedScenariosList: Array<AssignedScenario.AsObject>,
  }
}

export class ListUnassignedScenariosReq extends jspb.Message {
  getCplRuleSetId(): string;
  setCplRuleSetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUnassignedScenariosReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListUnassignedScenariosReq): ListUnassignedScenariosReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUnassignedScenariosReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUnassignedScenariosReq;
  static deserializeBinaryFromReader(message: ListUnassignedScenariosReq, reader: jspb.BinaryReader): ListUnassignedScenariosReq;
}

export namespace ListUnassignedScenariosReq {
  export type AsObject = {
    cplRuleSetId: string,
  }
}

export class ListUnassignedScenariosRes extends jspb.Message {
  clearScenariosList(): void;
  getScenariosList(): Array<Scenario>;
  setScenariosList(value: Array<Scenario>): void;
  addScenarios(value?: Scenario, index?: number): Scenario;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUnassignedScenariosRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListUnassignedScenariosRes): ListUnassignedScenariosRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUnassignedScenariosRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUnassignedScenariosRes;
  static deserializeBinaryFromReader(message: ListUnassignedScenariosRes, reader: jspb.BinaryReader): ListUnassignedScenariosRes;
}

export namespace ListUnassignedScenariosRes {
  export type AsObject = {
    scenariosList: Array<Scenario.AsObject>,
  }
}

export class AssignScenarioReq extends jspb.Message {
  getCplRuleSetId(): string;
  setCplRuleSetId(value: string): void;

  getCplScenarioId(): number;
  setCplScenarioId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignScenarioReq.AsObject;
  static toObject(includeInstance: boolean, msg: AssignScenarioReq): AssignScenarioReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignScenarioReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignScenarioReq;
  static deserializeBinaryFromReader(message: AssignScenarioReq, reader: jspb.BinaryReader): AssignScenarioReq;
}

export namespace AssignScenarioReq {
  export type AsObject = {
    cplRuleSetId: string,
    cplScenarioId: number,
  }
}

export class UnassignScenarioReq extends jspb.Message {
  getCplRuleSetId(): string;
  setCplRuleSetId(value: string): void;

  getCplScenarioId(): number;
  setCplScenarioId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnassignScenarioReq.AsObject;
  static toObject(includeInstance: boolean, msg: UnassignScenarioReq): UnassignScenarioReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnassignScenarioReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnassignScenarioReq;
  static deserializeBinaryFromReader(message: UnassignScenarioReq, reader: jspb.BinaryReader): UnassignScenarioReq;
}

export namespace UnassignScenarioReq {
  export type AsObject = {
    cplRuleSetId: string,
    cplScenarioId: number,
  }
}

export class EnableScenarioReq extends jspb.Message {
  getCplRuleSetId(): string;
  setCplRuleSetId(value: string): void;

  getCplScenarioId(): number;
  setCplScenarioId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableScenarioReq.AsObject;
  static toObject(includeInstance: boolean, msg: EnableScenarioReq): EnableScenarioReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnableScenarioReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableScenarioReq;
  static deserializeBinaryFromReader(message: EnableScenarioReq, reader: jspb.BinaryReader): EnableScenarioReq;
}

export namespace EnableScenarioReq {
  export type AsObject = {
    cplRuleSetId: string,
    cplScenarioId: number,
  }
}

export class DisableScenarioReq extends jspb.Message {
  getCplRuleSetId(): string;
  setCplRuleSetId(value: string): void;

  getCplScenarioId(): number;
  setCplScenarioId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisableScenarioReq.AsObject;
  static toObject(includeInstance: boolean, msg: DisableScenarioReq): DisableScenarioReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisableScenarioReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisableScenarioReq;
  static deserializeBinaryFromReader(message: DisableScenarioReq, reader: jspb.BinaryReader): DisableScenarioReq;
}

export namespace DisableScenarioReq {
  export type AsObject = {
    cplRuleSetId: string,
    cplScenarioId: number,
  }
}

export class CreateConsentProfileReq extends jspb.Message {
  getConsentProfileId(): string;
  setConsentProfileId(value: string): void;

  getProfileName(): string;
  setProfileName(value: string): void;

  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  hasChannel(): boolean;
  clearChannel(): void;
  getChannel(): api_commons_communication_pb.CommType | undefined;
  setChannel(value?: api_commons_communication_pb.CommType): void;

  getCreatedBy(): string;
  setCreatedBy(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConsentProfileReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConsentProfileReq): CreateConsentProfileReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateConsentProfileReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConsentProfileReq;
  static deserializeBinaryFromReader(message: CreateConsentProfileReq, reader: jspb.BinaryReader): CreateConsentProfileReq;
}

export namespace CreateConsentProfileReq {
  export type AsObject = {
    consentProfileId: string,
    profileName: string,
    disabled: boolean,
    channel?: api_commons_communication_pb.CommType.AsObject,
    createdBy: string,
  }
}

export class CreateConsentProfileRes extends jspb.Message {
  getConsentProfileId(): string;
  setConsentProfileId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConsentProfileRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConsentProfileRes): CreateConsentProfileRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateConsentProfileRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConsentProfileRes;
  static deserializeBinaryFromReader(message: CreateConsentProfileRes, reader: jspb.BinaryReader): CreateConsentProfileRes;
}

export namespace CreateConsentProfileRes {
  export type AsObject = {
    consentProfileId: string,
  }
}

export class GetConsentReq extends jspb.Message {
  getConsentId(): number;
  setConsentId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConsentReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetConsentReq): GetConsentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConsentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConsentReq;
  static deserializeBinaryFromReader(message: GetConsentReq, reader: jspb.BinaryReader): GetConsentReq;
}

export namespace GetConsentReq {
  export type AsObject = {
    consentId: number,
  }
}

export class CreateConsentReq extends jspb.Message {
  getConsentProfileId(): string;
  setConsentProfileId(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  hasRecorded(): boolean;
  clearRecorded(): void;
  getRecorded(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRecorded(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExpire(): boolean;
  clearExpire(): void;
  getExpire(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpire(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getReferringUrl(): string;
  setReferringUrl(value: string): void;

  hasChannel(): boolean;
  clearChannel(): void;
  getChannel(): api_commons_communication_pb.CommType | undefined;
  setChannel(value?: api_commons_communication_pb.CommType): void;

  getTopic(): string;
  setTopic(value: string): void;

  getRevokedReason(): string;
  setRevokedReason(value: string): void;

  getGrantedReason(): string;
  setGrantedReason(value: string): void;

  getProof(): string;
  setProof(value: string): void;

  clearConditionDaysOfTheWeekList(): void;
  getConditionDaysOfTheWeekList(): Array<api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap]>;
  setConditionDaysOfTheWeekList(value: Array<api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap]>): void;
  addConditionDaysOfTheWeek(value: api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap], index?: number): api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap];

  getConditionTimeOfDayFrom(): string;
  setConditionTimeOfDayFrom(value: string): void;

  getConditionTimeOfDayTo(): string;
  setConditionTimeOfDayTo(value: string): void;

  hasConditionFrom(): boolean;
  clearConditionFrom(): void;
  getConditionFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setConditionFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasConditionTo(): boolean;
  clearConditionTo(): void;
  getConditionTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setConditionTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getNotes(): string;
  setNotes(value: string): void;

  clearConditionsList(): void;
  getConditionsList(): Array<api_commons_compliance_pb.ConsentCondition>;
  setConditionsList(value: Array<api_commons_compliance_pb.ConsentCondition>): void;
  addConditions(value?: api_commons_compliance_pb.ConsentCondition, index?: number): api_commons_compliance_pb.ConsentCondition;

  getContentType(): api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap];
  setContentType(value: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap]): void;

  getChannelType(): api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap];
  setChannelType(value: api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConsentReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConsentReq): CreateConsentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateConsentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConsentReq;
  static deserializeBinaryFromReader(message: CreateConsentReq, reader: jspb.BinaryReader): CreateConsentReq;
}

export namespace CreateConsentReq {
  export type AsObject = {
    consentProfileId: string,
    content: string,
    recorded?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expire?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    referringUrl: string,
    channel?: api_commons_communication_pb.CommType.AsObject,
    topic: string,
    revokedReason: string,
    grantedReason: string,
    proof: string,
    conditionDaysOfTheWeekList: Array<api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap]>,
    conditionTimeOfDayFrom: string,
    conditionTimeOfDayTo: string,
    conditionFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    conditionTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    notes: string,
    conditionsList: Array<api_commons_compliance_pb.ConsentCondition.AsObject>,
    contentType: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap],
    channelType: api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap],
  }
}

export class CreateConsentRes extends jspb.Message {
  getConsentId(): number;
  setConsentId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConsentRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConsentRes): CreateConsentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateConsentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConsentRes;
  static deserializeBinaryFromReader(message: CreateConsentRes, reader: jspb.BinaryReader): CreateConsentRes;
}

export namespace CreateConsentRes {
  export type AsObject = {
    consentId: number,
  }
}

export class ConsentProfile extends jspb.Message {
  getConsentProfileId(): string;
  setConsentProfileId(value: string): void;

  getProfileName(): string;
  setProfileName(value: string): void;

  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  clearConsentsList(): void;
  getConsentsList(): Array<Consent>;
  setConsentsList(value: Array<Consent>): void;
  addConsents(value?: Consent, index?: number): Consent;

  hasChannel(): boolean;
  clearChannel(): void;
  getChannel(): api_commons_communication_pb.CommType | undefined;
  setChannel(value?: api_commons_communication_pb.CommType): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCreatedBy(): string;
  setCreatedBy(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsentProfile.AsObject;
  static toObject(includeInstance: boolean, msg: ConsentProfile): ConsentProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsentProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsentProfile;
  static deserializeBinaryFromReader(message: ConsentProfile, reader: jspb.BinaryReader): ConsentProfile;
}

export namespace ConsentProfile {
  export type AsObject = {
    consentProfileId: string,
    profileName: string,
    disabled: boolean,
    consentsList: Array<Consent.AsObject>,
    channel?: api_commons_communication_pb.CommType.AsObject,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
  }
}

export class Consent extends jspb.Message {
  getConsentId(): number;
  setConsentId(value: number): void;

  getConsentProfileId(): string;
  setConsentProfileId(value: string): void;

  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  hasDeletedOn(): boolean;
  clearDeletedOn(): void;
  getDeletedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getContent(): string;
  setContent(value: string): void;

  hasRecorded(): boolean;
  clearRecorded(): void;
  getRecorded(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRecorded(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasRevoked(): boolean;
  clearRevoked(): void;
  getRevoked(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRevoked(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExpire(): boolean;
  clearExpire(): void;
  getExpire(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpire(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getReferringUrl(): string;
  setReferringUrl(value: string): void;

  hasChannel(): boolean;
  clearChannel(): void;
  getChannel(): api_commons_communication_pb.CommType | undefined;
  setChannel(value?: api_commons_communication_pb.CommType): void;

  getTopic(): string;
  setTopic(value: string): void;

  getRevokedReason(): string;
  setRevokedReason(value: string): void;

  getGrantedReason(): string;
  setGrantedReason(value: string): void;

  getProof(): string;
  setProof(value: string): void;

  clearConditionDaysOfTheWeekList(): void;
  getConditionDaysOfTheWeekList(): Array<api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap]>;
  setConditionDaysOfTheWeekList(value: Array<api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap]>): void;
  addConditionDaysOfTheWeek(value: api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap], index?: number): api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap];

  getConditionTimeOfDayFrom(): string;
  setConditionTimeOfDayFrom(value: string): void;

  getConditionTimeOfDayTo(): string;
  setConditionTimeOfDayTo(value: string): void;

  hasConditionFrom(): boolean;
  clearConditionFrom(): void;
  getConditionFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setConditionFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasConditionTo(): boolean;
  clearConditionTo(): void;
  getConditionTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setConditionTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getNotes(): string;
  setNotes(value: string): void;

  clearConditionsList(): void;
  getConditionsList(): Array<api_commons_compliance_pb.ConsentCondition>;
  setConditionsList(value: Array<api_commons_compliance_pb.ConsentCondition>): void;
  addConditions(value?: api_commons_compliance_pb.ConsentCondition, index?: number): api_commons_compliance_pb.ConsentCondition;

  getContentType(): api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap];
  setContentType(value: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap]): void;

  getChannelType(): api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap];
  setChannelType(value: api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Consent.AsObject;
  static toObject(includeInstance: boolean, msg: Consent): Consent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Consent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Consent;
  static deserializeBinaryFromReader(message: Consent, reader: jspb.BinaryReader): Consent;
}

export namespace Consent {
  export type AsObject = {
    consentId: number,
    consentProfileId: string,
    deleted: boolean,
    deletedOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    content: string,
    recorded?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    revoked?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expire?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    referringUrl: string,
    channel?: api_commons_communication_pb.CommType.AsObject,
    topic: string,
    revokedReason: string,
    grantedReason: string,
    proof: string,
    conditionDaysOfTheWeekList: Array<api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap]>,
    conditionTimeOfDayFrom: string,
    conditionTimeOfDayTo: string,
    conditionFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    conditionTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    notes: string,
    conditionsList: Array<api_commons_compliance_pb.ConsentCondition.AsObject>,
    contentType: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap],
    channelType: api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap],
  }
}

export class GetConsentProfileReq extends jspb.Message {
  getConsentProfileId(): string;
  setConsentProfileId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConsentProfileReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetConsentProfileReq): GetConsentProfileReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConsentProfileReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConsentProfileReq;
  static deserializeBinaryFromReader(message: GetConsentProfileReq, reader: jspb.BinaryReader): GetConsentProfileReq;
}

export namespace GetConsentProfileReq {
  export type AsObject = {
    consentProfileId: string,
  }
}

export class UpdateConsentReq extends jspb.Message {
  getConsentId(): number;
  setConsentId(value: number): void;

  getConsentProfileId(): string;
  setConsentProfileId(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  hasRecorded(): boolean;
  clearRecorded(): void;
  getRecorded(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRecorded(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasRevoked(): boolean;
  clearRevoked(): void;
  getRevoked(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRevoked(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExpire(): boolean;
  clearExpire(): void;
  getExpire(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpire(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getReferringUrl(): string;
  setReferringUrl(value: string): void;

  hasChannel(): boolean;
  clearChannel(): void;
  getChannel(): api_commons_communication_pb.CommType | undefined;
  setChannel(value?: api_commons_communication_pb.CommType): void;

  getTopic(): string;
  setTopic(value: string): void;

  getRevokedReason(): string;
  setRevokedReason(value: string): void;

  getGrantedReason(): string;
  setGrantedReason(value: string): void;

  getProof(): string;
  setProof(value: string): void;

  clearConditionDaysOfTheWeekList(): void;
  getConditionDaysOfTheWeekList(): Array<api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap]>;
  setConditionDaysOfTheWeekList(value: Array<api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap]>): void;
  addConditionDaysOfTheWeek(value: api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap], index?: number): api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap];

  getConditionTimeOfDayFrom(): string;
  setConditionTimeOfDayFrom(value: string): void;

  getConditionTimeOfDayTo(): string;
  setConditionTimeOfDayTo(value: string): void;

  hasConditionFrom(): boolean;
  clearConditionFrom(): void;
  getConditionFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setConditionFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasConditionTo(): boolean;
  clearConditionTo(): void;
  getConditionTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setConditionTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getNotes(): string;
  setNotes(value: string): void;

  clearConditionsList(): void;
  getConditionsList(): Array<api_commons_compliance_pb.ConsentCondition>;
  setConditionsList(value: Array<api_commons_compliance_pb.ConsentCondition>): void;
  addConditions(value?: api_commons_compliance_pb.ConsentCondition, index?: number): api_commons_compliance_pb.ConsentCondition;

  getContentType(): api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap];
  setContentType(value: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap]): void;

  getChannelType(): api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap];
  setChannelType(value: api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateConsentReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateConsentReq): UpdateConsentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateConsentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateConsentReq;
  static deserializeBinaryFromReader(message: UpdateConsentReq, reader: jspb.BinaryReader): UpdateConsentReq;
}

export namespace UpdateConsentReq {
  export type AsObject = {
    consentId: number,
    consentProfileId: string,
    content: string,
    recorded?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    revoked?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expire?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    referringUrl: string,
    channel?: api_commons_communication_pb.CommType.AsObject,
    topic: string,
    revokedReason: string,
    grantedReason: string,
    proof: string,
    conditionDaysOfTheWeekList: Array<api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap]>,
    conditionTimeOfDayFrom: string,
    conditionTimeOfDayTo: string,
    conditionFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    conditionTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    notes: string,
    conditionsList: Array<api_commons_compliance_pb.ConsentCondition.AsObject>,
    contentType: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap],
    channelType: api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap],
  }
}

export class ExpireConsentReq extends jspb.Message {
  getConsentId(): number;
  setConsentId(value: number): void;

  hasExpire(): boolean;
  clearExpire(): void;
  getExpire(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpire(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpireConsentReq.AsObject;
  static toObject(includeInstance: boolean, msg: ExpireConsentReq): ExpireConsentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExpireConsentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpireConsentReq;
  static deserializeBinaryFromReader(message: ExpireConsentReq, reader: jspb.BinaryReader): ExpireConsentReq;
}

export namespace ExpireConsentReq {
  export type AsObject = {
    consentId: number,
    expire?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class RevokeConsentReq extends jspb.Message {
  getConsentId(): number;
  setConsentId(value: number): void;

  hasRevoked(): boolean;
  clearRevoked(): void;
  getRevoked(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRevoked(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getConsentProfileId(): string;
  setConsentProfileId(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getChannelType(): api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap];
  setChannelType(value: api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap]): void;

  getRevokedReason(): string;
  setRevokedReason(value: string): void;

  getContentType(): api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap];
  setContentType(value: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeConsentReq.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeConsentReq): RevokeConsentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeConsentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeConsentReq;
  static deserializeBinaryFromReader(message: RevokeConsentReq, reader: jspb.BinaryReader): RevokeConsentReq;
}

export namespace RevokeConsentReq {
  export type AsObject = {
    consentId: number,
    revoked?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    consentProfileId: string,
    content: string,
    channelType: api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap],
    revokedReason: string,
    contentType: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap],
  }
}

export class EnableConsentProfileReq extends jspb.Message {
  getConsentProfileId(): string;
  setConsentProfileId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableConsentProfileReq.AsObject;
  static toObject(includeInstance: boolean, msg: EnableConsentProfileReq): EnableConsentProfileReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnableConsentProfileReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableConsentProfileReq;
  static deserializeBinaryFromReader(message: EnableConsentProfileReq, reader: jspb.BinaryReader): EnableConsentProfileReq;
}

export namespace EnableConsentProfileReq {
  export type AsObject = {
    consentProfileId: string,
  }
}

export class DisableConsentProfileReq extends jspb.Message {
  getConsentProfileId(): string;
  setConsentProfileId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisableConsentProfileReq.AsObject;
  static toObject(includeInstance: boolean, msg: DisableConsentProfileReq): DisableConsentProfileReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisableConsentProfileReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisableConsentProfileReq;
  static deserializeBinaryFromReader(message: DisableConsentProfileReq, reader: jspb.BinaryReader): DisableConsentProfileReq;
}

export namespace DisableConsentProfileReq {
  export type AsObject = {
    consentProfileId: string,
  }
}

export class ListConsentProfilesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConsentProfilesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListConsentProfilesReq): ListConsentProfilesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListConsentProfilesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConsentProfilesReq;
  static deserializeBinaryFromReader(message: ListConsentProfilesReq, reader: jspb.BinaryReader): ListConsentProfilesReq;
}

export namespace ListConsentProfilesReq {
  export type AsObject = {
  }
}

export class ListConsentProfile extends jspb.Message {
  getConsentProfileId(): string;
  setConsentProfileId(value: string): void;

  getProfileName(): string;
  setProfileName(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  hasChannel(): boolean;
  clearChannel(): void;
  getChannel(): api_commons_communication_pb.CommType | undefined;
  setChannel(value?: api_commons_communication_pb.CommType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConsentProfile.AsObject;
  static toObject(includeInstance: boolean, msg: ListConsentProfile): ListConsentProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListConsentProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConsentProfile;
  static deserializeBinaryFromReader(message: ListConsentProfile, reader: jspb.BinaryReader): ListConsentProfile;
}

export namespace ListConsentProfile {
  export type AsObject = {
    consentProfileId: string,
    profileName: string,
    count: number,
    disabled: boolean,
    channel?: api_commons_communication_pb.CommType.AsObject,
  }
}

export class ListConsentProfilesRes extends jspb.Message {
  clearConsentProfilesList(): void;
  getConsentProfilesList(): Array<ListConsentProfile>;
  setConsentProfilesList(value: Array<ListConsentProfile>): void;
  addConsentProfiles(value?: ListConsentProfile, index?: number): ListConsentProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConsentProfilesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListConsentProfilesRes): ListConsentProfilesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListConsentProfilesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConsentProfilesRes;
  static deserializeBinaryFromReader(message: ListConsentProfilesRes, reader: jspb.BinaryReader): ListConsentProfilesRes;
}

export namespace ListConsentProfilesRes {
  export type AsObject = {
    consentProfilesList: Array<ListConsentProfile.AsObject>,
  }
}

export class GetConsentUploadUrlReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConsentUploadUrlReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetConsentUploadUrlReq): GetConsentUploadUrlReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConsentUploadUrlReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConsentUploadUrlReq;
  static deserializeBinaryFromReader(message: GetConsentUploadUrlReq, reader: jspb.BinaryReader): GetConsentUploadUrlReq;
}

export namespace GetConsentUploadUrlReq {
  export type AsObject = {
  }
}

export class GetConsentUploadUrlRes extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getFilename(): string;
  setFilename(value: string): void;

  getBucket(): string;
  setBucket(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConsentUploadUrlRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetConsentUploadUrlRes): GetConsentUploadUrlRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConsentUploadUrlRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConsentUploadUrlRes;
  static deserializeBinaryFromReader(message: GetConsentUploadUrlRes, reader: jspb.BinaryReader): GetConsentUploadUrlRes;
}

export namespace GetConsentUploadUrlRes {
  export type AsObject = {
    url: string,
    filename: string,
    bucket: string,
  }
}

export class DeleteConsentReq extends jspb.Message {
  getConsentId(): number;
  setConsentId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConsentReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConsentReq): DeleteConsentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteConsentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConsentReq;
  static deserializeBinaryFromReader(message: DeleteConsentReq, reader: jspb.BinaryReader): DeleteConsentReq;
}

export namespace DeleteConsentReq {
  export type AsObject = {
    consentId: number,
  }
}

export class ProcessConsentUploadReq extends jspb.Message {
  getFilename(): string;
  setFilename(value: string): void;

  getConsentProfileId(): string;
  setConsentProfileId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessConsentUploadReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessConsentUploadReq): ProcessConsentUploadReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessConsentUploadReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessConsentUploadReq;
  static deserializeBinaryFromReader(message: ProcessConsentUploadReq, reader: jspb.BinaryReader): ProcessConsentUploadReq;
}

export namespace ProcessConsentUploadReq {
  export type AsObject = {
    filename: string,
    consentProfileId: string,
    userId: string,
  }
}

export class ProcessConsentUploadRes extends jspb.Message {
  getEntriesAdded(): number;
  setEntriesAdded(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessConsentUploadRes.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessConsentUploadRes): ProcessConsentUploadRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessConsentUploadRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessConsentUploadRes;
  static deserializeBinaryFromReader(message: ProcessConsentUploadRes, reader: jspb.BinaryReader): ProcessConsentUploadRes;
}

export namespace ProcessConsentUploadRes {
  export type AsObject = {
    entriesAdded: number,
  }
}

export class GetFieldNamesReq extends jspb.Message {
  getPhoneOnly(): boolean;
  setPhoneOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFieldNamesReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetFieldNamesReq): GetFieldNamesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFieldNamesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFieldNamesReq;
  static deserializeBinaryFromReader(message: GetFieldNamesReq, reader: jspb.BinaryReader): GetFieldNamesReq;
}

export namespace GetFieldNamesReq {
  export type AsObject = {
    phoneOnly: boolean,
  }
}

export class FieldNames extends jspb.Message {
  clearNamesList(): void;
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): void;
  addNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldNames.AsObject;
  static toObject(includeInstance: boolean, msg: FieldNames): FieldNames.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldNames, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldNames;
  static deserializeBinaryFromReader(message: FieldNames, reader: jspb.BinaryReader): FieldNames;
}

export namespace FieldNames {
  export type AsObject = {
    namesList: Array<string>,
  }
}

export class GetResultDescriptionsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResultDescriptionsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetResultDescriptionsReq): GetResultDescriptionsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetResultDescriptionsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResultDescriptionsReq;
  static deserializeBinaryFromReader(message: GetResultDescriptionsReq, reader: jspb.BinaryReader): GetResultDescriptionsReq;
}

export namespace GetResultDescriptionsReq {
  export type AsObject = {
  }
}

export class PurgeScrubListReq extends jspb.Message {
  getListId(): string;
  setListId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurgeScrubListReq.AsObject;
  static toObject(includeInstance: boolean, msg: PurgeScrubListReq): PurgeScrubListReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PurgeScrubListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurgeScrubListReq;
  static deserializeBinaryFromReader(message: PurgeScrubListReq, reader: jspb.BinaryReader): PurgeScrubListReq;
}

export namespace PurgeScrubListReq {
  export type AsObject = {
    listId: string,
  }
}

export class PurgeScrubListRes extends jspb.Message {
  getEntriesFound(): number;
  setEntriesFound(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurgeScrubListRes.AsObject;
  static toObject(includeInstance: boolean, msg: PurgeScrubListRes): PurgeScrubListRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PurgeScrubListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurgeScrubListRes;
  static deserializeBinaryFromReader(message: PurgeScrubListRes, reader: jspb.BinaryReader): PurgeScrubListRes;
}

export namespace PurgeScrubListRes {
  export type AsObject = {
    entriesFound: number,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class ConsentTopic extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsentTopic.AsObject;
  static toObject(includeInstance: boolean, msg: ConsentTopic): ConsentTopic.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsentTopic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsentTopic;
  static deserializeBinaryFromReader(message: ConsentTopic, reader: jspb.BinaryReader): ConsentTopic;
}

export namespace ConsentTopic {
  export type AsObject = {
    topic: string,
    orgId: string,
    deleted: boolean,
  }
}

export class ListConsentTopicsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConsentTopicsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListConsentTopicsReq): ListConsentTopicsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListConsentTopicsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConsentTopicsReq;
  static deserializeBinaryFromReader(message: ListConsentTopicsReq, reader: jspb.BinaryReader): ListConsentTopicsReq;
}

export namespace ListConsentTopicsReq {
  export type AsObject = {
  }
}

export class ListConsentTopicsRes extends jspb.Message {
  clearTopicsList(): void;
  getTopicsList(): Array<ConsentTopic>;
  setTopicsList(value: Array<ConsentTopic>): void;
  addTopics(value?: ConsentTopic, index?: number): ConsentTopic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConsentTopicsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListConsentTopicsRes): ListConsentTopicsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListConsentTopicsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConsentTopicsRes;
  static deserializeBinaryFromReader(message: ListConsentTopicsRes, reader: jspb.BinaryReader): ListConsentTopicsRes;
}

export namespace ListConsentTopicsRes {
  export type AsObject = {
    topicsList: Array<ConsentTopic.AsObject>,
  }
}

export class GetConsentTopicReq extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConsentTopicReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetConsentTopicReq): GetConsentTopicReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConsentTopicReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConsentTopicReq;
  static deserializeBinaryFromReader(message: GetConsentTopicReq, reader: jspb.BinaryReader): GetConsentTopicReq;
}

export namespace GetConsentTopicReq {
  export type AsObject = {
    topic: string,
  }
}

export class UpdateConsentTopicReq extends jspb.Message {
  getOriginalTopic(): string;
  setOriginalTopic(value: string): void;

  getNewTopic(): string;
  setNewTopic(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateConsentTopicReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateConsentTopicReq): UpdateConsentTopicReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateConsentTopicReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateConsentTopicReq;
  static deserializeBinaryFromReader(message: UpdateConsentTopicReq, reader: jspb.BinaryReader): UpdateConsentTopicReq;
}

export namespace UpdateConsentTopicReq {
  export type AsObject = {
    originalTopic: string,
    newTopic: string,
  }
}

export class SearchConsentByContentReq extends jspb.Message {
  getContent(): string;
  setContent(value: string): void;

  getConsentProfileId(): string;
  setConsentProfileId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchConsentByContentReq.AsObject;
  static toObject(includeInstance: boolean, msg: SearchConsentByContentReq): SearchConsentByContentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchConsentByContentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchConsentByContentReq;
  static deserializeBinaryFromReader(message: SearchConsentByContentReq, reader: jspb.BinaryReader): SearchConsentByContentReq;
}

export namespace SearchConsentByContentReq {
  export type AsObject = {
    content: string,
    consentProfileId: string,
  }
}

export class ConsentByContent extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getProfileId(): string;
  setProfileId(value: string): void;

  getProfileName(): string;
  setProfileName(value: string): void;

  getConsentId(): number;
  setConsentId(value: number): void;

  getContent(): string;
  setContent(value: string): void;

  hasRevoked(): boolean;
  clearRevoked(): void;
  getRevoked(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRevoked(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExpire(): boolean;
  clearExpire(): void;
  getExpire(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpire(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  hasChannel(): boolean;
  clearChannel(): void;
  getChannel(): api_commons_communication_pb.CommType | undefined;
  setChannel(value?: api_commons_communication_pb.CommType): void;

  getTopic(): string;
  setTopic(value: string): void;

  clearConditionDaysOfTheWeekList(): void;
  getConditionDaysOfTheWeekList(): Array<api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap]>;
  setConditionDaysOfTheWeekList(value: Array<api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap]>): void;
  addConditionDaysOfTheWeek(value: api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap], index?: number): api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap];

  getConditionTimeOfDayFrom(): string;
  setConditionTimeOfDayFrom(value: string): void;

  getConditionTimeOfDayTo(): string;
  setConditionTimeOfDayTo(value: string): void;

  hasConditionFrom(): boolean;
  clearConditionFrom(): void;
  getConditionFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setConditionFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasConditionTo(): boolean;
  clearConditionTo(): void;
  getConditionTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setConditionTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getNotes(): string;
  setNotes(value: string): void;

  getContentType(): api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap];
  setContentType(value: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap]): void;

  clearConditionsList(): void;
  getConditionsList(): Array<api_commons_compliance_pb.ConsentCondition>;
  setConditionsList(value: Array<api_commons_compliance_pb.ConsentCondition>): void;
  addConditions(value?: api_commons_compliance_pb.ConsentCondition, index?: number): api_commons_compliance_pb.ConsentCondition;

  getChannelType(): api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap];
  setChannelType(value: api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsentByContent.AsObject;
  static toObject(includeInstance: boolean, msg: ConsentByContent): ConsentByContent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsentByContent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsentByContent;
  static deserializeBinaryFromReader(message: ConsentByContent, reader: jspb.BinaryReader): ConsentByContent;
}

export namespace ConsentByContent {
  export type AsObject = {
    orgId: string,
    profileId: string,
    profileName: string,
    consentId: number,
    content: string,
    revoked?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expire?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    disabled: boolean,
    channel?: api_commons_communication_pb.CommType.AsObject,
    topic: string,
    conditionDaysOfTheWeekList: Array<api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap]>,
    conditionTimeOfDayFrom: string,
    conditionTimeOfDayTo: string,
    conditionFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    conditionTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    notes: string,
    contentType: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap],
    conditionsList: Array<api_commons_compliance_pb.ConsentCondition.AsObject>,
    channelType: api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap],
  }
}

export class SearchConsentByContentRes extends jspb.Message {
  clearConsentsList(): void;
  getConsentsList(): Array<ConsentByContent>;
  setConsentsList(value: Array<ConsentByContent>): void;
  addConsents(value?: ConsentByContent, index?: number): ConsentByContent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchConsentByContentRes.AsObject;
  static toObject(includeInstance: boolean, msg: SearchConsentByContentRes): SearchConsentByContentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchConsentByContentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchConsentByContentRes;
  static deserializeBinaryFromReader(message: SearchConsentByContentRes, reader: jspb.BinaryReader): SearchConsentByContentRes;
}

export namespace SearchConsentByContentRes {
  export type AsObject = {
    consentsList: Array<ConsentByContent.AsObject>,
  }
}

export class GetConsentByProfileAndContentReq extends jspb.Message {
  getProfileName(): string;
  setProfileName(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getProfileId(): string;
  setProfileId(value: string): void;

  getContentType(): api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap];
  setContentType(value: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap]): void;

  getChannelType(): api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap];
  setChannelType(value: api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConsentByProfileAndContentReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetConsentByProfileAndContentReq): GetConsentByProfileAndContentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConsentByProfileAndContentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConsentByProfileAndContentReq;
  static deserializeBinaryFromReader(message: GetConsentByProfileAndContentReq, reader: jspb.BinaryReader): GetConsentByProfileAndContentReq;
}

export namespace GetConsentByProfileAndContentReq {
  export type AsObject = {
    profileName: string,
    content: string,
    profileId: string,
    contentType: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap],
    channelType: api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap],
  }
}

export class GetConsentByProfileAndContentRes extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getProfileId(): string;
  setProfileId(value: string): void;

  getProfileName(): string;
  setProfileName(value: string): void;

  getConsentId(): number;
  setConsentId(value: number): void;

  hasRevoked(): boolean;
  clearRevoked(): void;
  getRevoked(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRevoked(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExpire(): boolean;
  clearExpire(): void;
  getExpire(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpire(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  hasChannel(): boolean;
  clearChannel(): void;
  getChannel(): api_commons_communication_pb.CommType | undefined;
  setChannel(value?: api_commons_communication_pb.CommType): void;

  getTopic(): string;
  setTopic(value: string): void;

  clearConditionDaysOfTheWeekList(): void;
  getConditionDaysOfTheWeekList(): Array<api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap]>;
  setConditionDaysOfTheWeekList(value: Array<api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap]>): void;
  addConditionDaysOfTheWeek(value: api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap], index?: number): api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap];

  getConditionTimeOfDayFrom(): string;
  setConditionTimeOfDayFrom(value: string): void;

  getConditionTimeOfDayTo(): string;
  setConditionTimeOfDayTo(value: string): void;

  hasConditionFrom(): boolean;
  clearConditionFrom(): void;
  getConditionFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setConditionFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasConditionTo(): boolean;
  clearConditionTo(): void;
  getConditionTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setConditionTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getNotes(): string;
  setNotes(value: string): void;

  getContentType(): api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap];
  setContentType(value: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap]): void;

  clearConditionsList(): void;
  getConditionsList(): Array<api_commons_compliance_pb.ConsentCondition>;
  setConditionsList(value: Array<api_commons_compliance_pb.ConsentCondition>): void;
  addConditions(value?: api_commons_compliance_pb.ConsentCondition, index?: number): api_commons_compliance_pb.ConsentCondition;

  getChannelType(): api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap];
  setChannelType(value: api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap]): void;

  getRevokedReason(): string;
  setRevokedReason(value: string): void;

  getGrantedReason(): string;
  setGrantedReason(value: string): void;

  getProof(): string;
  setProof(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConsentByProfileAndContentRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetConsentByProfileAndContentRes): GetConsentByProfileAndContentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConsentByProfileAndContentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConsentByProfileAndContentRes;
  static deserializeBinaryFromReader(message: GetConsentByProfileAndContentRes, reader: jspb.BinaryReader): GetConsentByProfileAndContentRes;
}

export namespace GetConsentByProfileAndContentRes {
  export type AsObject = {
    orgId: string,
    profileId: string,
    profileName: string,
    consentId: number,
    revoked?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expire?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    disabled: boolean,
    channel?: api_commons_communication_pb.CommType.AsObject,
    topic: string,
    conditionDaysOfTheWeekList: Array<api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap]>,
    conditionTimeOfDayFrom: string,
    conditionTimeOfDayTo: string,
    conditionFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    conditionTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    notes: string,
    contentType: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap],
    conditionsList: Array<api_commons_compliance_pb.ConsentCondition.AsObject>,
    channelType: api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap],
    revokedReason: string,
    grantedReason: string,
    proof: string,
  }
}

export class GetConsentByContentReq extends jspb.Message {
  getProfileName(): string;
  setProfileName(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getProfileId(): string;
  setProfileId(value: string): void;

  getChannelType(): api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap];
  setChannelType(value: api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConsentByContentReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetConsentByContentReq): GetConsentByContentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConsentByContentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConsentByContentReq;
  static deserializeBinaryFromReader(message: GetConsentByContentReq, reader: jspb.BinaryReader): GetConsentByContentReq;
}

export namespace GetConsentByContentReq {
  export type AsObject = {
    profileName: string,
    content: string,
    profileId: string,
    channelType: api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap],
  }
}

export class GetConsentByContentRes extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getProfileName(): string;
  setProfileName(value: string): void;

  hasConsent(): boolean;
  clearConsent(): void;
  getConsent(): Consent | undefined;
  setConsent(value?: Consent): void;

  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConsentByContentRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetConsentByContentRes): GetConsentByContentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConsentByContentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConsentByContentRes;
  static deserializeBinaryFromReader(message: GetConsentByContentRes, reader: jspb.BinaryReader): GetConsentByContentRes;
}

export namespace GetConsentByContentRes {
  export type AsObject = {
    orgId: string,
    profileName: string,
    consent?: Consent.AsObject,
    disabled: boolean,
  }
}

export class ProcessConsentListDeleteUploadReq extends jspb.Message {
  getConsentProfileId(): string;
  setConsentProfileId(value: string): void;

  getFilename(): string;
  setFilename(value: string): void;

  getNotificationMessage(): string;
  setNotificationMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessConsentListDeleteUploadReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessConsentListDeleteUploadReq): ProcessConsentListDeleteUploadReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessConsentListDeleteUploadReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessConsentListDeleteUploadReq;
  static deserializeBinaryFromReader(message: ProcessConsentListDeleteUploadReq, reader: jspb.BinaryReader): ProcessConsentListDeleteUploadReq;
}

export namespace ProcessConsentListDeleteUploadReq {
  export type AsObject = {
    consentProfileId: string,
    filename: string,
    notificationMessage: string,
  }
}

export class ProcessConsentListDeleteUploadRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessConsentListDeleteUploadRes.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessConsentListDeleteUploadRes): ProcessConsentListDeleteUploadRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessConsentListDeleteUploadRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessConsentListDeleteUploadRes;
  static deserializeBinaryFromReader(message: ProcessConsentListDeleteUploadRes, reader: jspb.BinaryReader): ProcessConsentListDeleteUploadRes;
}

export namespace ProcessConsentListDeleteUploadRes {
  export type AsObject = {
  }
}

export class ProcessConsentListDeleteUploadMeta extends jspb.Message {
  hasTimeStarted(): boolean;
  clearTimeStarted(): void;
  getTimeStarted(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeStarted(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessConsentListDeleteUploadMeta.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessConsentListDeleteUploadMeta): ProcessConsentListDeleteUploadMeta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessConsentListDeleteUploadMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessConsentListDeleteUploadMeta;
  static deserializeBinaryFromReader(message: ProcessConsentListDeleteUploadMeta, reader: jspb.BinaryReader): ProcessConsentListDeleteUploadMeta;
}

export namespace ProcessConsentListDeleteUploadMeta {
  export type AsObject = {
    timeStarted?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

