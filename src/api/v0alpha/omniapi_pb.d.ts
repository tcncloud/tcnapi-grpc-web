// package: api.v0alpha
// file: api/v0alpha/omniapi.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../annotations/authz_pb";
import * as api_commons_omnichannel_pb from "../../api/commons/omnichannel_pb";
import * as api_commons_types_pb from "../../api/commons/types_pb";
import * as api_commons_wfm_pb from "../../api/commons/wfm_pb";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class SuggestResponseReq extends jspb.Message {
  getConversationId(): string;
  setConversationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuggestResponseReq.AsObject;
  static toObject(includeInstance: boolean, msg: SuggestResponseReq): SuggestResponseReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SuggestResponseReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuggestResponseReq;
  static deserializeBinaryFromReader(message: SuggestResponseReq, reader: jspb.BinaryReader): SuggestResponseReq;
}

export namespace SuggestResponseReq {
  export type AsObject = {
    conversationId: string,
  }
}

export class SuggestResponseRes extends jspb.Message {
  getSuggestedResponse(): string;
  setSuggestedResponse(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuggestResponseRes.AsObject;
  static toObject(includeInstance: boolean, msg: SuggestResponseRes): SuggestResponseRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SuggestResponseRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuggestResponseRes;
  static deserializeBinaryFromReader(message: SuggestResponseRes, reader: jspb.BinaryReader): SuggestResponseRes;
}

export namespace SuggestResponseRes {
  export type AsObject = {
    suggestedResponse: string,
  }
}

export class CreateCampaignReq extends jspb.Message {
  hasCampaign(): boolean;
  clearCampaign(): void;
  getCampaign(): api_commons_omnichannel_pb.OmniCampaign | undefined;
  setCampaign(value?: api_commons_omnichannel_pb.OmniCampaign): void;

  clearModulesList(): void;
  getModulesList(): Array<CreateCampaignReq.CampaignModule>;
  setModulesList(value: Array<CreateCampaignReq.CampaignModule>): void;
  addModules(value?: CreateCampaignReq.CampaignModule, index?: number): CreateCampaignReq.CampaignModule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCampaignReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCampaignReq): CreateCampaignReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCampaignReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCampaignReq;
  static deserializeBinaryFromReader(message: CreateCampaignReq, reader: jspb.BinaryReader): CreateCampaignReq;
}

export namespace CreateCampaignReq {
  export type AsObject = {
    campaign?: api_commons_omnichannel_pb.OmniCampaign.AsObject,
    modulesList: Array<CreateCampaignReq.CampaignModule.AsObject>,
  }

  export class CampaignModule extends jspb.Message {
    hasModule(): boolean;
    clearModule(): void;
    getModule(): api_commons_omnichannel_pb.OmniCampaignModule | undefined;
    setModule(value?: api_commons_omnichannel_pb.OmniCampaignModule): void;

    hasOmniContactList(): boolean;
    clearOmniContactList(): void;
    getOmniContactList(): ContactListsDataSource | undefined;
    setOmniContactList(value?: ContactListsDataSource): void;

    getDataSourceCase(): CampaignModule.DataSourceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CampaignModule.AsObject;
    static toObject(includeInstance: boolean, msg: CampaignModule): CampaignModule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CampaignModule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CampaignModule;
    static deserializeBinaryFromReader(message: CampaignModule, reader: jspb.BinaryReader): CampaignModule;
  }

  export namespace CampaignModule {
    export type AsObject = {
      module?: api_commons_omnichannel_pb.OmniCampaignModule.AsObject,
      omniContactList?: ContactListsDataSource.AsObject,
    }

    export enum DataSourceCase {
      DATA_SOURCE_NOT_SET = 0,
      OMNI_CONTACT_LIST = 100,
    }
  }
}

export class ContactListsDataSource extends jspb.Message {
  clearContactListsDataSourceList(): void;
  getContactListsDataSourceList(): Array<ContactListDataSource>;
  setContactListsDataSourceList(value: Array<ContactListDataSource>): void;
  addContactListsDataSource(value?: ContactListDataSource, index?: number): ContactListDataSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactListsDataSource.AsObject;
  static toObject(includeInstance: boolean, msg: ContactListsDataSource): ContactListsDataSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactListsDataSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactListsDataSource;
  static deserializeBinaryFromReader(message: ContactListsDataSource, reader: jspb.BinaryReader): ContactListsDataSource;
}

export namespace ContactListsDataSource {
  export type AsObject = {
    contactListsDataSourceList: Array<ContactListDataSource.AsObject>,
  }
}

export class ContactListDataSource extends jspb.Message {
  getContactListSid(): string;
  setContactListSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactListDataSource.AsObject;
  static toObject(includeInstance: boolean, msg: ContactListDataSource): ContactListDataSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactListDataSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactListDataSource;
  static deserializeBinaryFromReader(message: ContactListDataSource, reader: jspb.BinaryReader): ContactListDataSource;
}

export namespace ContactListDataSource {
  export type AsObject = {
    contactListSid: string,
  }
}

export class ListCampaignsReq extends jspb.Message {
  clearStatusesList(): void;
  getStatusesList(): Array<api_commons_omnichannel_pb.OmniCampaignStatusMap[keyof api_commons_omnichannel_pb.OmniCampaignStatusMap]>;
  setStatusesList(value: Array<api_commons_omnichannel_pb.OmniCampaignStatusMap[keyof api_commons_omnichannel_pb.OmniCampaignStatusMap]>): void;
  addStatuses(value: api_commons_omnichannel_pb.OmniCampaignStatusMap[keyof api_commons_omnichannel_pb.OmniCampaignStatusMap], index?: number): api_commons_omnichannel_pb.OmniCampaignStatusMap[keyof api_commons_omnichannel_pb.OmniCampaignStatusMap];

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasByIds(): boolean;
  clearByIds(): void;
  getByIds(): ListCampaignsReq.ByIds | undefined;
  setByIds(value?: ListCampaignsReq.ByIds): void;

  hasByProject(): boolean;
  clearByProject(): void;
  getByProject(): ListCampaignsReq.ByProject | undefined;
  setByProject(value?: ListCampaignsReq.ByProject): void;

  hasByTime(): boolean;
  clearByTime(): void;
  getByTime(): ListCampaignsReq.ByTime | undefined;
  setByTime(value?: ListCampaignsReq.ByTime): void;

  hasByUnsubscribeLink(): boolean;
  clearByUnsubscribeLink(): void;
  getByUnsubscribeLink(): ListCampaignsReq.ByUnsubscribeLink | undefined;
  setByUnsubscribeLink(value?: ListCampaignsReq.ByUnsubscribeLink): void;

  hasByConnectedInbox(): boolean;
  clearByConnectedInbox(): void;
  getByConnectedInbox(): ListCampaignsReq.ByConnectedInbox | undefined;
  setByConnectedInbox(value?: ListCampaignsReq.ByConnectedInbox): void;

  hasByVerifiedEmail(): boolean;
  clearByVerifiedEmail(): void;
  getByVerifiedEmail(): ListCampaignsReq.ByVerifiedEmail | undefined;
  setByVerifiedEmail(value?: ListCampaignsReq.ByVerifiedEmail): void;

  hasBySmsNumber(): boolean;
  clearBySmsNumber(): void;
  getBySmsNumber(): ListCampaignsReq.BySmsNumber | undefined;
  setBySmsNumber(value?: ListCampaignsReq.BySmsNumber): void;

  hasByWhatsappNumber(): boolean;
  clearByWhatsappNumber(): void;
  getByWhatsappNumber(): ListCampaignsReq.ByWhatsAppNumber | undefined;
  setByWhatsappNumber(value?: ListCampaignsReq.ByWhatsAppNumber): void;

  hasByWhatsApp(): boolean;
  clearByWhatsApp(): void;
  getByWhatsApp(): ListCampaignsReq.ByWhatsApp | undefined;
  setByWhatsApp(value?: ListCampaignsReq.ByWhatsApp): void;

  getFilterCase(): ListCampaignsReq.FilterCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCampaignsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListCampaignsReq): ListCampaignsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCampaignsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCampaignsReq;
  static deserializeBinaryFromReader(message: ListCampaignsReq, reader: jspb.BinaryReader): ListCampaignsReq;
}

export namespace ListCampaignsReq {
  export type AsObject = {
    statusesList: Array<api_commons_omnichannel_pb.OmniCampaignStatusMap[keyof api_commons_omnichannel_pb.OmniCampaignStatusMap]>,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    byIds?: ListCampaignsReq.ByIds.AsObject,
    byProject?: ListCampaignsReq.ByProject.AsObject,
    byTime?: ListCampaignsReq.ByTime.AsObject,
    byUnsubscribeLink?: ListCampaignsReq.ByUnsubscribeLink.AsObject,
    byConnectedInbox?: ListCampaignsReq.ByConnectedInbox.AsObject,
    byVerifiedEmail?: ListCampaignsReq.ByVerifiedEmail.AsObject,
    bySmsNumber?: ListCampaignsReq.BySmsNumber.AsObject,
    byWhatsappNumber?: ListCampaignsReq.ByWhatsAppNumber.AsObject,
    byWhatsApp?: ListCampaignsReq.ByWhatsApp.AsObject,
  }

  export class ByConnectedInbox extends jspb.Message {
    getInboxSid(): string;
    setInboxSid(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ByConnectedInbox.AsObject;
    static toObject(includeInstance: boolean, msg: ByConnectedInbox): ByConnectedInbox.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ByConnectedInbox, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ByConnectedInbox;
    static deserializeBinaryFromReader(message: ByConnectedInbox, reader: jspb.BinaryReader): ByConnectedInbox;
  }

  export namespace ByConnectedInbox {
    export type AsObject = {
      inboxSid: string,
    }
  }

  export class ByIds extends jspb.Message {
    clearCampaignSidsList(): void;
    getCampaignSidsList(): Array<string>;
    setCampaignSidsList(value: Array<string>): void;
    addCampaignSids(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ByIds.AsObject;
    static toObject(includeInstance: boolean, msg: ByIds): ByIds.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ByIds, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ByIds;
    static deserializeBinaryFromReader(message: ByIds, reader: jspb.BinaryReader): ByIds;
  }

  export namespace ByIds {
    export type AsObject = {
      campaignSidsList: Array<string>,
    }
  }

  export class ByProject extends jspb.Message {
    getProjectSid(): string;
    setProjectSid(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ByProject.AsObject;
    static toObject(includeInstance: boolean, msg: ByProject): ByProject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ByProject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ByProject;
    static deserializeBinaryFromReader(message: ByProject, reader: jspb.BinaryReader): ByProject;
  }

  export namespace ByProject {
    export type AsObject = {
      projectSid: string,
    }
  }

  export class ByTime extends jspb.Message {
    hasSearchFrom(): boolean;
    clearSearchFrom(): void;
    getSearchFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setSearchFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasSearchTo(): boolean;
    clearSearchTo(): void;
    getSearchTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setSearchTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ByTime.AsObject;
    static toObject(includeInstance: boolean, msg: ByTime): ByTime.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ByTime, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ByTime;
    static deserializeBinaryFromReader(message: ByTime, reader: jspb.BinaryReader): ByTime;
  }

  export namespace ByTime {
    export type AsObject = {
      searchFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      searchTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

  export class ByUnsubscribeLink extends jspb.Message {
    getLinkSid(): string;
    setLinkSid(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ByUnsubscribeLink.AsObject;
    static toObject(includeInstance: boolean, msg: ByUnsubscribeLink): ByUnsubscribeLink.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ByUnsubscribeLink, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ByUnsubscribeLink;
    static deserializeBinaryFromReader(message: ByUnsubscribeLink, reader: jspb.BinaryReader): ByUnsubscribeLink;
  }

  export namespace ByUnsubscribeLink {
    export type AsObject = {
      linkSid: string,
    }
  }

  export class ByVerifiedEmail extends jspb.Message {
    getEmailSid(): string;
    setEmailSid(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ByVerifiedEmail.AsObject;
    static toObject(includeInstance: boolean, msg: ByVerifiedEmail): ByVerifiedEmail.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ByVerifiedEmail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ByVerifiedEmail;
    static deserializeBinaryFromReader(message: ByVerifiedEmail, reader: jspb.BinaryReader): ByVerifiedEmail;
  }

  export namespace ByVerifiedEmail {
    export type AsObject = {
      emailSid: string,
    }
  }

  export class BySmsNumber extends jspb.Message {
    getNumber(): string;
    setNumber(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BySmsNumber.AsObject;
    static toObject(includeInstance: boolean, msg: BySmsNumber): BySmsNumber.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BySmsNumber, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BySmsNumber;
    static deserializeBinaryFromReader(message: BySmsNumber, reader: jspb.BinaryReader): BySmsNumber;
  }

  export namespace BySmsNumber {
    export type AsObject = {
      number: string,
    }
  }

  export class ByWhatsAppNumber extends jspb.Message {
    getNumber(): string;
    setNumber(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ByWhatsAppNumber.AsObject;
    static toObject(includeInstance: boolean, msg: ByWhatsAppNumber): ByWhatsAppNumber.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ByWhatsAppNumber, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ByWhatsAppNumber;
    static deserializeBinaryFromReader(message: ByWhatsAppNumber, reader: jspb.BinaryReader): ByWhatsAppNumber;
  }

  export namespace ByWhatsAppNumber {
    export type AsObject = {
      number: string,
    }
  }

  export class ByWhatsApp extends jspb.Message {
    getNumber(): string;
    setNumber(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ByWhatsApp.AsObject;
    static toObject(includeInstance: boolean, msg: ByWhatsApp): ByWhatsApp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ByWhatsApp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ByWhatsApp;
    static deserializeBinaryFromReader(message: ByWhatsApp, reader: jspb.BinaryReader): ByWhatsApp;
  }

  export namespace ByWhatsApp {
    export type AsObject = {
      number: string,
    }
  }

  export enum FilterCase {
    FILTER_NOT_SET = 0,
    BY_IDS = 100,
    BY_PROJECT = 101,
    BY_TIME = 102,
    BY_UNSUBSCRIBE_LINK = 103,
    BY_CONNECTED_INBOX = 104,
    BY_VERIFIED_EMAIL = 105,
    BY_SMS_NUMBER = 106,
    BY_WHATSAPP_NUMBER = 107,
    BY_WHATS_APP = 108,
  }
}

export class ListCampaignsRes extends jspb.Message {
  clearCampaignsList(): void;
  getCampaignsList(): Array<api_commons_omnichannel_pb.OmniCampaign>;
  setCampaignsList(value: Array<api_commons_omnichannel_pb.OmniCampaign>): void;
  addCampaigns(value?: api_commons_omnichannel_pb.OmniCampaign, index?: number): api_commons_omnichannel_pb.OmniCampaign;

  clearModulesList(): void;
  getModulesList(): Array<api_commons_omnichannel_pb.OmniCampaignModule>;
  setModulesList(value: Array<api_commons_omnichannel_pb.OmniCampaignModule>): void;
  addModules(value?: api_commons_omnichannel_pb.OmniCampaignModule, index?: number): api_commons_omnichannel_pb.OmniCampaignModule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCampaignsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListCampaignsRes): ListCampaignsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCampaignsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCampaignsRes;
  static deserializeBinaryFromReader(message: ListCampaignsRes, reader: jspb.BinaryReader): ListCampaignsRes;
}

export namespace ListCampaignsRes {
  export type AsObject = {
    campaignsList: Array<api_commons_omnichannel_pb.OmniCampaign.AsObject>,
    modulesList: Array<api_commons_omnichannel_pb.OmniCampaignModule.AsObject>,
  }
}

export class GetCampaignByIdReq extends jspb.Message {
  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCampaignByIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCampaignByIdReq): GetCampaignByIdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCampaignByIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCampaignByIdReq;
  static deserializeBinaryFromReader(message: GetCampaignByIdReq, reader: jspb.BinaryReader): GetCampaignByIdReq;
}

export namespace GetCampaignByIdReq {
  export type AsObject = {
    campaignSid: string,
  }
}

export class GetOffLoadedTextMessageReq extends jspb.Message {
  getLocation(): string;
  setLocation(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOffLoadedTextMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetOffLoadedTextMessageReq): GetOffLoadedTextMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOffLoadedTextMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOffLoadedTextMessageReq;
  static deserializeBinaryFromReader(message: GetOffLoadedTextMessageReq, reader: jspb.BinaryReader): GetOffLoadedTextMessageReq;
}

export namespace GetOffLoadedTextMessageReq {
  export type AsObject = {
    location: string,
  }
}

export class GetOffLoadedTextMessageRes extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOffLoadedTextMessageRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetOffLoadedTextMessageRes): GetOffLoadedTextMessageRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOffLoadedTextMessageRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOffLoadedTextMessageRes;
  static deserializeBinaryFromReader(message: GetOffLoadedTextMessageRes, reader: jspb.BinaryReader): GetOffLoadedTextMessageRes;
}

export namespace GetOffLoadedTextMessageRes {
  export type AsObject = {
    message: string,
  }
}

export class ManagerListMessagesReq extends jspb.Message {
  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getUserId(): string;
  setUserId(value: string): void;

  getLive(): boolean;
  setLive(value: boolean): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  hasByConversationSid(): boolean;
  clearByConversationSid(): void;
  getByConversationSid(): ManagerListMessagesReq.ByConversationSid | undefined;
  setByConversationSid(value?: ManagerListMessagesReq.ByConversationSid): void;

  hasByTaskSid(): boolean;
  clearByTaskSid(): void;
  getByTaskSid(): ManagerListMessagesReq.ByTaskSid | undefined;
  setByTaskSid(value?: ManagerListMessagesReq.ByTaskSid): void;

  getFilterCase(): ManagerListMessagesReq.FilterCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManagerListMessagesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ManagerListMessagesReq): ManagerListMessagesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManagerListMessagesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManagerListMessagesReq;
  static deserializeBinaryFromReader(message: ManagerListMessagesReq, reader: jspb.BinaryReader): ManagerListMessagesReq;
}

export namespace ManagerListMessagesReq {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    userId: string,
    live: boolean,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    byConversationSid?: ManagerListMessagesReq.ByConversationSid.AsObject,
    byTaskSid?: ManagerListMessagesReq.ByTaskSid.AsObject,
  }

  export class ByConversationSid extends jspb.Message {
    getConversationSid(): string;
    setConversationSid(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ByConversationSid.AsObject;
    static toObject(includeInstance: boolean, msg: ByConversationSid): ByConversationSid.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ByConversationSid, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ByConversationSid;
    static deserializeBinaryFromReader(message: ByConversationSid, reader: jspb.BinaryReader): ByConversationSid;
  }

  export namespace ByConversationSid {
    export type AsObject = {
      conversationSid: string,
    }
  }

  export class ByTaskSid extends jspb.Message {
    getTaskSid(): string;
    setTaskSid(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ByTaskSid.AsObject;
    static toObject(includeInstance: boolean, msg: ByTaskSid): ByTaskSid.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ByTaskSid, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ByTaskSid;
    static deserializeBinaryFromReader(message: ByTaskSid, reader: jspb.BinaryReader): ByTaskSid;
  }

  export namespace ByTaskSid {
    export type AsObject = {
      taskSid: string,
    }
  }

  export enum FilterCase {
    FILTER_NOT_SET = 0,
    BY_CONVERSATION_SID = 101,
    BY_TASK_SID = 102,
  }
}

export class ListMessagesReq extends jspb.Message {
  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getLive(): boolean;
  setLive(value: boolean): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  hasByConversationSid(): boolean;
  clearByConversationSid(): void;
  getByConversationSid(): ListMessagesReq.ByConversationSid | undefined;
  setByConversationSid(value?: ListMessagesReq.ByConversationSid): void;

  getFilterCase(): ListMessagesReq.FilterCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMessagesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListMessagesReq): ListMessagesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMessagesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMessagesReq;
  static deserializeBinaryFromReader(message: ListMessagesReq, reader: jspb.BinaryReader): ListMessagesReq;
}

export namespace ListMessagesReq {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    live: boolean,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    byConversationSid?: ListMessagesReq.ByConversationSid.AsObject,
  }

  export class ByConversationSid extends jspb.Message {
    getConversationSid(): string;
    setConversationSid(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ByConversationSid.AsObject;
    static toObject(includeInstance: boolean, msg: ByConversationSid): ByConversationSid.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ByConversationSid, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ByConversationSid;
    static deserializeBinaryFromReader(message: ByConversationSid, reader: jspb.BinaryReader): ByConversationSid;
  }

  export namespace ByConversationSid {
    export type AsObject = {
      conversationSid: string,
    }
  }

  export enum FilterCase {
    FILTER_NOT_SET = 0,
    BY_CONVERSATION_SID = 101,
  }
}

export class ChatMessageUserInformation extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessageUserInformation.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessageUserInformation): ChatMessageUserInformation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatMessageUserInformation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessageUserInformation;
  static deserializeBinaryFromReader(message: ChatMessageUserInformation, reader: jspb.BinaryReader): ChatMessageUserInformation;
}

export namespace ChatMessageUserInformation {
  export type AsObject = {
    userId: string,
    name: string,
  }
}

export class SendOmniMessageReq extends jspb.Message {
  getConversationSid(): string;
  setConversationSid(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): api_commons_omnichannel_pb.OmniMessagePayload | undefined;
  setPayload(value?: api_commons_omnichannel_pb.OmniMessagePayload): void;

  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  getUiReferenceId(): string;
  setUiReferenceId(value: string): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendOmniMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: SendOmniMessageReq): SendOmniMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendOmniMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendOmniMessageReq;
  static deserializeBinaryFromReader(message: SendOmniMessageReq, reader: jspb.BinaryReader): SendOmniMessageReq;
}

export namespace SendOmniMessageReq {
  export type AsObject = {
    conversationSid: string,
    payload?: api_commons_omnichannel_pb.OmniMessagePayload.AsObject,
    campaignSid: string,
    uiReferenceId: string,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
  }
}

export class UpdateCampaignReq extends jspb.Message {
  hasCampaign(): boolean;
  clearCampaign(): void;
  getCampaign(): api_commons_omnichannel_pb.OmniCampaign | undefined;
  setCampaign(value?: api_commons_omnichannel_pb.OmniCampaign): void;

  getUserId(): string;
  setUserId(value: string): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCampaignReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCampaignReq): UpdateCampaignReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCampaignReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCampaignReq;
  static deserializeBinaryFromReader(message: UpdateCampaignReq, reader: jspb.BinaryReader): UpdateCampaignReq;
}

export namespace UpdateCampaignReq {
  export type AsObject = {
    campaign?: api_commons_omnichannel_pb.OmniCampaign.AsObject,
    userId: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateCampaignRes extends jspb.Message {
  getNotifierId(): string;
  setNotifierId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCampaignRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCampaignRes): UpdateCampaignRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCampaignRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCampaignRes;
  static deserializeBinaryFromReader(message: UpdateCampaignRes, reader: jspb.BinaryReader): UpdateCampaignRes;
}

export namespace UpdateCampaignRes {
  export type AsObject = {
    notifierId: string,
  }
}

export class ListConversationsReq extends jspb.Message {
  clearChannelTypesList(): void;
  getChannelTypesList(): Array<api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]>;
  setChannelTypesList(value: Array<api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]>): void;
  addChannelTypes(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap], index?: number): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  clearStatusesList(): void;
  getStatusesList(): Array<api_commons_omnichannel_pb.ConversationStatusMap[keyof api_commons_omnichannel_pb.ConversationStatusMap]>;
  setStatusesList(value: Array<api_commons_omnichannel_pb.ConversationStatusMap[keyof api_commons_omnichannel_pb.ConversationStatusMap]>): void;
  addStatuses(value: api_commons_omnichannel_pb.ConversationStatusMap[keyof api_commons_omnichannel_pb.ConversationStatusMap], index?: number): api_commons_omnichannel_pb.ConversationStatusMap[keyof api_commons_omnichannel_pb.ConversationStatusMap];

  hasByTime(): boolean;
  clearByTime(): void;
  getByTime(): ListConversationsReq.ByTime | undefined;
  setByTime(value?: ListConversationsReq.ByTime): void;

  hasByAssignedUser(): boolean;
  clearByAssignedUser(): void;
  getByAssignedUser(): ListConversationsReq.ByAssignedUser | undefined;
  setByAssignedUser(value?: ListConversationsReq.ByAssignedUser): void;

  getFilterCase(): ListConversationsReq.FilterCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConversationsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListConversationsReq): ListConversationsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListConversationsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConversationsReq;
  static deserializeBinaryFromReader(message: ListConversationsReq, reader: jspb.BinaryReader): ListConversationsReq;
}

export namespace ListConversationsReq {
  export type AsObject = {
    channelTypesList: Array<api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]>,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    statusesList: Array<api_commons_omnichannel_pb.ConversationStatusMap[keyof api_commons_omnichannel_pb.ConversationStatusMap]>,
    byTime?: ListConversationsReq.ByTime.AsObject,
    byAssignedUser?: ListConversationsReq.ByAssignedUser.AsObject,
  }

  export class ByTime extends jspb.Message {
    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getPageSize(): number;
    setPageSize(value: number): void;

    getPageToken(): string;
    setPageToken(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ByTime.AsObject;
    static toObject(includeInstance: boolean, msg: ByTime): ByTime.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ByTime, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ByTime;
    static deserializeBinaryFromReader(message: ByTime, reader: jspb.BinaryReader): ByTime;
  }

  export namespace ByTime {
    export type AsObject = {
      startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      pageSize: number,
      pageToken: string,
    }
  }

  export class ByAssignedUser extends jspb.Message {
    getUserId(): string;
    setUserId(value: string): void;

    clearStatusesList(): void;
    getStatusesList(): Array<api_commons_omnichannel_pb.ConversationStatusMap[keyof api_commons_omnichannel_pb.ConversationStatusMap]>;
    setStatusesList(value: Array<api_commons_omnichannel_pb.ConversationStatusMap[keyof api_commons_omnichannel_pb.ConversationStatusMap]>): void;
    addStatuses(value: api_commons_omnichannel_pb.ConversationStatusMap[keyof api_commons_omnichannel_pb.ConversationStatusMap], index?: number): api_commons_omnichannel_pb.ConversationStatusMap[keyof api_commons_omnichannel_pb.ConversationStatusMap];

    getPageSize(): number;
    setPageSize(value: number): void;

    getPageToken(): string;
    setPageToken(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ByAssignedUser.AsObject;
    static toObject(includeInstance: boolean, msg: ByAssignedUser): ByAssignedUser.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ByAssignedUser, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ByAssignedUser;
    static deserializeBinaryFromReader(message: ByAssignedUser, reader: jspb.BinaryReader): ByAssignedUser;
  }

  export namespace ByAssignedUser {
    export type AsObject = {
      userId: string,
      statusesList: Array<api_commons_omnichannel_pb.ConversationStatusMap[keyof api_commons_omnichannel_pb.ConversationStatusMap]>,
      pageSize: number,
      pageToken: string,
    }
  }

  export enum FilterCase {
    FILTER_NOT_SET = 0,
    BY_TIME = 100,
    BY_ASSIGNED_USER = 101,
  }
}

export class ListConversationsRes extends jspb.Message {
  clearConversationsList(): void;
  getConversationsList(): Array<api_commons_omnichannel_pb.OmniConversation>;
  setConversationsList(value: Array<api_commons_omnichannel_pb.OmniConversation>): void;
  addConversations(value?: api_commons_omnichannel_pb.OmniConversation, index?: number): api_commons_omnichannel_pb.OmniConversation;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConversationsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListConversationsRes): ListConversationsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListConversationsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConversationsRes;
  static deserializeBinaryFromReader(message: ListConversationsRes, reader: jspb.BinaryReader): ListConversationsRes;
}

export namespace ListConversationsRes {
  export type AsObject = {
    conversationsList: Array<api_commons_omnichannel_pb.OmniConversation.AsObject>,
    nextPageToken: string,
  }
}

export class CreateDispositionReq extends jspb.Message {
  getDisposition(): string;
  setDisposition(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDispositionReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDispositionReq): CreateDispositionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDispositionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDispositionReq;
  static deserializeBinaryFromReader(message: CreateDispositionReq, reader: jspb.BinaryReader): CreateDispositionReq;
}

export namespace CreateDispositionReq {
  export type AsObject = {
    disposition: string,
  }
}

export class CreateDispositionRes extends jspb.Message {
  getDispositionSid(): string;
  setDispositionSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDispositionRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDispositionRes): CreateDispositionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDispositionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDispositionRes;
  static deserializeBinaryFromReader(message: CreateDispositionRes, reader: jspb.BinaryReader): CreateDispositionRes;
}

export namespace CreateDispositionRes {
  export type AsObject = {
    dispositionSid: string,
  }
}

export class DeleteDispositionReq extends jspb.Message {
  hasDisposition(): boolean;
  clearDisposition(): void;
  getDisposition(): api_commons_omnichannel_pb.Disposition | undefined;
  setDisposition(value?: api_commons_omnichannel_pb.Disposition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDispositionReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDispositionReq): DeleteDispositionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDispositionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDispositionReq;
  static deserializeBinaryFromReader(message: DeleteDispositionReq, reader: jspb.BinaryReader): DeleteDispositionReq;
}

export namespace DeleteDispositionReq {
  export type AsObject = {
    disposition?: api_commons_omnichannel_pb.Disposition.AsObject,
  }
}

export class ListDispositionsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDispositionsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListDispositionsReq): ListDispositionsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDispositionsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDispositionsReq;
  static deserializeBinaryFromReader(message: ListDispositionsReq, reader: jspb.BinaryReader): ListDispositionsReq;
}

export namespace ListDispositionsReq {
  export type AsObject = {
  }
}

export class ListDispositionsRes extends jspb.Message {
  clearDispositionsList(): void;
  getDispositionsList(): Array<api_commons_omnichannel_pb.Disposition>;
  setDispositionsList(value: Array<api_commons_omnichannel_pb.Disposition>): void;
  addDispositions(value?: api_commons_omnichannel_pb.Disposition, index?: number): api_commons_omnichannel_pb.Disposition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDispositionsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListDispositionsRes): ListDispositionsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDispositionsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDispositionsRes;
  static deserializeBinaryFromReader(message: ListDispositionsRes, reader: jspb.BinaryReader): ListDispositionsRes;
}

export namespace ListDispositionsRes {
  export type AsObject = {
    dispositionsList: Array<api_commons_omnichannel_pb.Disposition.AsObject>,
  }
}

export class UpdateDispositionReq extends jspb.Message {
  getDispositionSid(): string;
  setDispositionSid(value: string): void;

  getDisposition(): string;
  setDisposition(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDispositionReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDispositionReq): UpdateDispositionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDispositionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDispositionReq;
  static deserializeBinaryFromReader(message: UpdateDispositionReq, reader: jspb.BinaryReader): UpdateDispositionReq;
}

export namespace UpdateDispositionReq {
  export type AsObject = {
    dispositionSid: string,
    disposition: string,
  }
}

export class ListCustomUnsubscribeLinksRes extends jspb.Message {
  clearCustomUnsubscribeLinksList(): void;
  getCustomUnsubscribeLinksList(): Array<api_commons_omnichannel_pb.OmniCustomUnsubscribeLink>;
  setCustomUnsubscribeLinksList(value: Array<api_commons_omnichannel_pb.OmniCustomUnsubscribeLink>): void;
  addCustomUnsubscribeLinks(value?: api_commons_omnichannel_pb.OmniCustomUnsubscribeLink, index?: number): api_commons_omnichannel_pb.OmniCustomUnsubscribeLink;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomUnsubscribeLinksRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomUnsubscribeLinksRes): ListCustomUnsubscribeLinksRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCustomUnsubscribeLinksRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomUnsubscribeLinksRes;
  static deserializeBinaryFromReader(message: ListCustomUnsubscribeLinksRes, reader: jspb.BinaryReader): ListCustomUnsubscribeLinksRes;
}

export namespace ListCustomUnsubscribeLinksRes {
  export type AsObject = {
    customUnsubscribeLinksList: Array<api_commons_omnichannel_pb.OmniCustomUnsubscribeLink.AsObject>,
  }
}

export class CreateCustomUnsubscribeLinkRes extends jspb.Message {
  getCustomUnsubscribeLinkSid(): string;
  setCustomUnsubscribeLinkSid(value: string): void;

  getValidated(): boolean;
  setValidated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomUnsubscribeLinkRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomUnsubscribeLinkRes): CreateCustomUnsubscribeLinkRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCustomUnsubscribeLinkRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomUnsubscribeLinkRes;
  static deserializeBinaryFromReader(message: CreateCustomUnsubscribeLinkRes, reader: jspb.BinaryReader): CreateCustomUnsubscribeLinkRes;
}

export namespace CreateCustomUnsubscribeLinkRes {
  export type AsObject = {
    customUnsubscribeLinkSid: string,
    validated: boolean,
  }
}

export class UpdateCustomUnsubscribeLinkReq extends jspb.Message {
  getCustomUnsubscribeLinkSid(): string;
  setCustomUnsubscribeLinkSid(value: string): void;

  getLinkName(): string;
  setLinkName(value: string): void;

  getLinkUrl(): string;
  setLinkUrl(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomUnsubscribeLinkReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomUnsubscribeLinkReq): UpdateCustomUnsubscribeLinkReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCustomUnsubscribeLinkReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomUnsubscribeLinkReq;
  static deserializeBinaryFromReader(message: UpdateCustomUnsubscribeLinkReq, reader: jspb.BinaryReader): UpdateCustomUnsubscribeLinkReq;
}

export namespace UpdateCustomUnsubscribeLinkReq {
  export type AsObject = {
    customUnsubscribeLinkSid: string,
    linkName: string,
    linkUrl: string,
    description: string,
  }
}

export class UpdateCustomUnsubscribeLinkRes extends jspb.Message {
  getValidated(): boolean;
  setValidated(value: boolean): void;

  hasDateValidated(): boolean;
  clearDateValidated(): void;
  getDateValidated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateValidated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomUnsubscribeLinkRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomUnsubscribeLinkRes): UpdateCustomUnsubscribeLinkRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCustomUnsubscribeLinkRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomUnsubscribeLinkRes;
  static deserializeBinaryFromReader(message: UpdateCustomUnsubscribeLinkRes, reader: jspb.BinaryReader): UpdateCustomUnsubscribeLinkRes;
}

export namespace UpdateCustomUnsubscribeLinkRes {
  export type AsObject = {
    validated: boolean,
    dateValidated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class DeleteCustomUnsubscribeLinkReq extends jspb.Message {
  getCustomUnsubscribeLinkSid(): string;
  setCustomUnsubscribeLinkSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomUnsubscribeLinkReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomUnsubscribeLinkReq): DeleteCustomUnsubscribeLinkReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCustomUnsubscribeLinkReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomUnsubscribeLinkReq;
  static deserializeBinaryFromReader(message: DeleteCustomUnsubscribeLinkReq, reader: jspb.BinaryReader): DeleteCustomUnsubscribeLinkReq;
}

export namespace DeleteCustomUnsubscribeLinkReq {
  export type AsObject = {
    customUnsubscribeLinkSid: string,
  }
}

export class PauseCampaignReq extends jspb.Message {
  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  getCampaignDirection(): api_commons_omnichannel_pb.OmniCampaignDirectionMap[keyof api_commons_omnichannel_pb.OmniCampaignDirectionMap];
  setCampaignDirection(value: api_commons_omnichannel_pb.OmniCampaignDirectionMap[keyof api_commons_omnichannel_pb.OmniCampaignDirectionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseCampaignReq.AsObject;
  static toObject(includeInstance: boolean, msg: PauseCampaignReq): PauseCampaignReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PauseCampaignReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseCampaignReq;
  static deserializeBinaryFromReader(message: PauseCampaignReq, reader: jspb.BinaryReader): PauseCampaignReq;
}

export namespace PauseCampaignReq {
  export type AsObject = {
    campaignSid: string,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    campaignDirection: api_commons_omnichannel_pb.OmniCampaignDirectionMap[keyof api_commons_omnichannel_pb.OmniCampaignDirectionMap],
  }
}

export class PauseCampaignRes extends jspb.Message {
  getReferenceId(): string;
  setReferenceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseCampaignRes.AsObject;
  static toObject(includeInstance: boolean, msg: PauseCampaignRes): PauseCampaignRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PauseCampaignRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseCampaignRes;
  static deserializeBinaryFromReader(message: PauseCampaignRes, reader: jspb.BinaryReader): PauseCampaignRes;
}

export namespace PauseCampaignRes {
  export type AsObject = {
    referenceId: string,
  }
}

export class ResumeCampaignReq extends jspb.Message {
  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  getCampaignDirection(): api_commons_omnichannel_pb.OmniCampaignDirectionMap[keyof api_commons_omnichannel_pb.OmniCampaignDirectionMap];
  setCampaignDirection(value: api_commons_omnichannel_pb.OmniCampaignDirectionMap[keyof api_commons_omnichannel_pb.OmniCampaignDirectionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeCampaignReq.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeCampaignReq): ResumeCampaignReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResumeCampaignReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeCampaignReq;
  static deserializeBinaryFromReader(message: ResumeCampaignReq, reader: jspb.BinaryReader): ResumeCampaignReq;
}

export namespace ResumeCampaignReq {
  export type AsObject = {
    campaignSid: string,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    campaignDirection: api_commons_omnichannel_pb.OmniCampaignDirectionMap[keyof api_commons_omnichannel_pb.OmniCampaignDirectionMap],
  }
}

export class ResumeCampaignRes extends jspb.Message {
  getReferenceId(): string;
  setReferenceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeCampaignRes.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeCampaignRes): ResumeCampaignRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResumeCampaignRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeCampaignRes;
  static deserializeBinaryFromReader(message: ResumeCampaignRes, reader: jspb.BinaryReader): ResumeCampaignRes;
}

export namespace ResumeCampaignRes {
  export type AsObject = {
    referenceId: string,
  }
}

export class ArchiveCampaignReq extends jspb.Message {
  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  getCampaignDirection(): api_commons_omnichannel_pb.OmniCampaignDirectionMap[keyof api_commons_omnichannel_pb.OmniCampaignDirectionMap];
  setCampaignDirection(value: api_commons_omnichannel_pb.OmniCampaignDirectionMap[keyof api_commons_omnichannel_pb.OmniCampaignDirectionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveCampaignReq.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveCampaignReq): ArchiveCampaignReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchiveCampaignReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveCampaignReq;
  static deserializeBinaryFromReader(message: ArchiveCampaignReq, reader: jspb.BinaryReader): ArchiveCampaignReq;
}

export namespace ArchiveCampaignReq {
  export type AsObject = {
    campaignSid: string,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    campaignDirection: api_commons_omnichannel_pb.OmniCampaignDirectionMap[keyof api_commons_omnichannel_pb.OmniCampaignDirectionMap],
  }
}

export class ArchiveCampaignRes extends jspb.Message {
  getReferenceId(): string;
  setReferenceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveCampaignRes.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveCampaignRes): ArchiveCampaignRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchiveCampaignRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveCampaignRes;
  static deserializeBinaryFromReader(message: ArchiveCampaignRes, reader: jspb.BinaryReader): ArchiveCampaignRes;
}

export namespace ArchiveCampaignRes {
  export type AsObject = {
    referenceId: string,
  }
}

export class UpdateCampaignPacingSpeedReq extends jspb.Message {
  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  getCampaignDirection(): api_commons_omnichannel_pb.OmniCampaignDirectionMap[keyof api_commons_omnichannel_pb.OmniCampaignDirectionMap];
  setCampaignDirection(value: api_commons_omnichannel_pb.OmniCampaignDirectionMap[keyof api_commons_omnichannel_pb.OmniCampaignDirectionMap]): void;

  getSendsPerHour(): number;
  setSendsPerHour(value: number): void;

  getCampaignModuleSid(): string;
  setCampaignModuleSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCampaignPacingSpeedReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCampaignPacingSpeedReq): UpdateCampaignPacingSpeedReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCampaignPacingSpeedReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCampaignPacingSpeedReq;
  static deserializeBinaryFromReader(message: UpdateCampaignPacingSpeedReq, reader: jspb.BinaryReader): UpdateCampaignPacingSpeedReq;
}

export namespace UpdateCampaignPacingSpeedReq {
  export type AsObject = {
    campaignSid: string,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    campaignDirection: api_commons_omnichannel_pb.OmniCampaignDirectionMap[keyof api_commons_omnichannel_pb.OmniCampaignDirectionMap],
    sendsPerHour: number,
    campaignModuleSid: string,
  }
}

export class UpdateCampaignPacingSpeedRes extends jspb.Message {
  getReferenceId(): string;
  setReferenceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCampaignPacingSpeedRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCampaignPacingSpeedRes): UpdateCampaignPacingSpeedRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCampaignPacingSpeedRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCampaignPacingSpeedRes;
  static deserializeBinaryFromReader(message: UpdateCampaignPacingSpeedRes, reader: jspb.BinaryReader): UpdateCampaignPacingSpeedRes;
}

export namespace UpdateCampaignPacingSpeedRes {
  export type AsObject = {
    referenceId: string,
  }
}

export class ListContactListsReq extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasByProject(): boolean;
  clearByProject(): void;
  getByProject(): ListContactListsReq.ByProject | undefined;
  setByProject(value?: ListContactListsReq.ByProject): void;

  getFilterCase(): ListContactListsReq.FilterCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContactListsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListContactListsReq): ListContactListsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListContactListsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContactListsReq;
  static deserializeBinaryFromReader(message: ListContactListsReq, reader: jspb.BinaryReader): ListContactListsReq;
}

export namespace ListContactListsReq {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    byProject?: ListContactListsReq.ByProject.AsObject,
  }

  export class ByProject extends jspb.Message {
    getProjectSid(): string;
    setProjectSid(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ByProject.AsObject;
    static toObject(includeInstance: boolean, msg: ByProject): ByProject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ByProject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ByProject;
    static deserializeBinaryFromReader(message: ByProject, reader: jspb.BinaryReader): ByProject;
  }

  export namespace ByProject {
    export type AsObject = {
      projectSid: string,
    }
  }

  export enum FilterCase {
    FILTER_NOT_SET = 0,
    BY_PROJECT = 100,
  }
}

export class ListContactListsRes extends jspb.Message {
  clearContactListsList(): void;
  getContactListsList(): Array<api_commons_omnichannel_pb.ContactList>;
  setContactListsList(value: Array<api_commons_omnichannel_pb.ContactList>): void;
  addContactLists(value?: api_commons_omnichannel_pb.ContactList, index?: number): api_commons_omnichannel_pb.ContactList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContactListsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListContactListsRes): ListContactListsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListContactListsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContactListsRes;
  static deserializeBinaryFromReader(message: ListContactListsRes, reader: jspb.BinaryReader): ListContactListsRes;
}

export namespace ListContactListsRes {
  export type AsObject = {
    contactListsList: Array<api_commons_omnichannel_pb.ContactList.AsObject>,
  }
}

export class GetAvailableHeadersReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAvailableHeadersReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAvailableHeadersReq): GetAvailableHeadersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAvailableHeadersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAvailableHeadersReq;
  static deserializeBinaryFromReader(message: GetAvailableHeadersReq, reader: jspb.BinaryReader): GetAvailableHeadersReq;
}

export namespace GetAvailableHeadersReq {
  export type AsObject = {
  }
}

export class GetAvailableHeadersRes extends jspb.Message {
  clearHeadersList(): void;
  getHeadersList(): Array<HeaderGroup>;
  setHeadersList(value: Array<HeaderGroup>): void;
  addHeaders(value?: HeaderGroup, index?: number): HeaderGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAvailableHeadersRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetAvailableHeadersRes): GetAvailableHeadersRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAvailableHeadersRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAvailableHeadersRes;
  static deserializeBinaryFromReader(message: GetAvailableHeadersRes, reader: jspb.BinaryReader): GetAvailableHeadersRes;
}

export namespace GetAvailableHeadersRes {
  export type AsObject = {
    headersList: Array<HeaderGroup.AsObject>,
  }
}

export class HeaderGroup extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearHeadersList(): void;
  getHeadersList(): Array<string>;
  setHeadersList(value: Array<string>): void;
  addHeaders(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeaderGroup.AsObject;
  static toObject(includeInstance: boolean, msg: HeaderGroup): HeaderGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HeaderGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeaderGroup;
  static deserializeBinaryFromReader(message: HeaderGroup, reader: jspb.BinaryReader): HeaderGroup;
}

export namespace HeaderGroup {
  export type AsObject = {
    name: string,
    headersList: Array<string>,
  }
}

export class ApproveTaskRequest extends jspb.Message {
  getTaskSid(): string;
  setTaskSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApproveTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApproveTaskRequest): ApproveTaskRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApproveTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApproveTaskRequest;
  static deserializeBinaryFromReader(message: ApproveTaskRequest, reader: jspb.BinaryReader): ApproveTaskRequest;
}

export namespace ApproveTaskRequest {
  export type AsObject = {
    taskSid: string,
  }
}

export class ApproveTaskResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApproveTaskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApproveTaskResponse): ApproveTaskResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApproveTaskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApproveTaskResponse;
  static deserializeBinaryFromReader(message: ApproveTaskResponse, reader: jspb.BinaryReader): ApproveTaskResponse;
}

export namespace ApproveTaskResponse {
  export type AsObject = {
  }
}

export class GetNextQueuedTaskRequest extends jspb.Message {
  hasSkills(): boolean;
  clearSkills(): void;
  getSkills(): api_commons_omnichannel_pb.OmniConversationSkills | undefined;
  setSkills(value?: api_commons_omnichannel_pb.OmniConversationSkills): void;

  getAgentSkillsMap(): jspb.Map<string, number>;
  clearAgentSkillsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNextQueuedTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNextQueuedTaskRequest): GetNextQueuedTaskRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNextQueuedTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNextQueuedTaskRequest;
  static deserializeBinaryFromReader(message: GetNextQueuedTaskRequest, reader: jspb.BinaryReader): GetNextQueuedTaskRequest;
}

export namespace GetNextQueuedTaskRequest {
  export type AsObject = {
    skills?: api_commons_omnichannel_pb.OmniConversationSkills.AsObject,
    agentSkillsMap: Array<[string, number]>,
  }
}

export class GetNextQueuedTaskResponse extends jspb.Message {
  hasTask(): boolean;
  clearTask(): void;
  getTask(): api_commons_omnichannel_pb.OmniTask | undefined;
  setTask(value?: api_commons_omnichannel_pb.OmniTask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNextQueuedTaskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNextQueuedTaskResponse): GetNextQueuedTaskResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNextQueuedTaskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNextQueuedTaskResponse;
  static deserializeBinaryFromReader(message: GetNextQueuedTaskResponse, reader: jspb.BinaryReader): GetNextQueuedTaskResponse;
}

export namespace GetNextQueuedTaskResponse {
  export type AsObject = {
    task?: api_commons_omnichannel_pb.OmniTask.AsObject,
  }
}

export class GetTaskReq extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasByConversation(): boolean;
  clearByConversation(): void;
  getByConversation(): GetTaskReq.ByConversation | undefined;
  setByConversation(value?: GetTaskReq.ByConversation): void;

  getFilterCase(): GetTaskReq.FilterCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTaskReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetTaskReq): GetTaskReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTaskReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTaskReq;
  static deserializeBinaryFromReader(message: GetTaskReq, reader: jspb.BinaryReader): GetTaskReq;
}

export namespace GetTaskReq {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    byConversation?: GetTaskReq.ByConversation.AsObject,
  }

  export class ByConversation extends jspb.Message {
    getConversationSid(): string;
    setConversationSid(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ByConversation.AsObject;
    static toObject(includeInstance: boolean, msg: ByConversation): ByConversation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ByConversation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ByConversation;
    static deserializeBinaryFromReader(message: ByConversation, reader: jspb.BinaryReader): ByConversation;
  }

  export namespace ByConversation {
    export type AsObject = {
      conversationSid: string,
    }
  }

  export enum FilterCase {
    FILTER_NOT_SET = 0,
    BY_CONVERSATION = 100,
  }
}

export class ListTasksReq extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasByCampaign(): boolean;
  clearByCampaign(): void;
  getByCampaign(): ListTasksReq.ByCampaign | undefined;
  setByCampaign(value?: ListTasksReq.ByCampaign): void;

  getFilterCase(): ListTasksReq.FilterCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTasksReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListTasksReq): ListTasksReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTasksReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTasksReq;
  static deserializeBinaryFromReader(message: ListTasksReq, reader: jspb.BinaryReader): ListTasksReq;
}

export namespace ListTasksReq {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    byCampaign?: ListTasksReq.ByCampaign.AsObject,
  }

  export class ByCampaign extends jspb.Message {
    getCampaignSid(): string;
    setCampaignSid(value: string): void;

    getPageSize(): number;
    setPageSize(value: number): void;

    getPageToken(): string;
    setPageToken(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ByCampaign.AsObject;
    static toObject(includeInstance: boolean, msg: ByCampaign): ByCampaign.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ByCampaign, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ByCampaign;
    static deserializeBinaryFromReader(message: ByCampaign, reader: jspb.BinaryReader): ByCampaign;
  }

  export namespace ByCampaign {
    export type AsObject = {
      campaignSid: string,
      pageSize: number,
      pageToken: string,
    }
  }

  export enum FilterCase {
    FILTER_NOT_SET = 0,
    BY_CAMPAIGN = 100,
  }
}

export class ListTasksRes extends jspb.Message {
  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  clearTasksList(): void;
  getTasksList(): Array<api_commons_omnichannel_pb.OmniTask>;
  setTasksList(value: Array<api_commons_omnichannel_pb.OmniTask>): void;
  addTasks(value?: api_commons_omnichannel_pb.OmniTask, index?: number): api_commons_omnichannel_pb.OmniTask;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTasksRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListTasksRes): ListTasksRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTasksRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTasksRes;
  static deserializeBinaryFromReader(message: ListTasksRes, reader: jspb.BinaryReader): ListTasksRes;
}

export namespace ListTasksRes {
  export type AsObject = {
    nextPageToken: string,
    tasksList: Array<api_commons_omnichannel_pb.OmniTask.AsObject>,
  }
}

export class RejectTaskRequest extends jspb.Message {
  getTaskSid(): string;
  setTaskSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RejectTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RejectTaskRequest): RejectTaskRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RejectTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RejectTaskRequest;
  static deserializeBinaryFromReader(message: RejectTaskRequest, reader: jspb.BinaryReader): RejectTaskRequest;
}

export namespace RejectTaskRequest {
  export type AsObject = {
    taskSid: string,
  }
}

export class RejectTaskResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RejectTaskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RejectTaskResponse): RejectTaskResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RejectTaskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RejectTaskResponse;
  static deserializeBinaryFromReader(message: RejectTaskResponse, reader: jspb.BinaryReader): RejectTaskResponse;
}

export namespace RejectTaskResponse {
  export type AsObject = {
  }
}

export class RequeueTaskRequest extends jspb.Message {
  getTaskSid(): string;
  setTaskSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequeueTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RequeueTaskRequest): RequeueTaskRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequeueTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequeueTaskRequest;
  static deserializeBinaryFromReader(message: RequeueTaskRequest, reader: jspb.BinaryReader): RequeueTaskRequest;
}

export namespace RequeueTaskRequest {
  export type AsObject = {
    taskSid: string,
  }
}

export class RequeueTaskResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequeueTaskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RequeueTaskResponse): RequeueTaskResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequeueTaskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequeueTaskResponse;
  static deserializeBinaryFromReader(message: RequeueTaskResponse, reader: jspb.BinaryReader): RequeueTaskResponse;
}

export namespace RequeueTaskResponse {
  export type AsObject = {
  }
}

export class CreateConnectedInboxRes extends jspb.Message {
  getConnectedInboxSid(): string;
  setConnectedInboxSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConnectedInboxRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConnectedInboxRes): CreateConnectedInboxRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateConnectedInboxRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConnectedInboxRes;
  static deserializeBinaryFromReader(message: CreateConnectedInboxRes, reader: jspb.BinaryReader): CreateConnectedInboxRes;
}

export namespace CreateConnectedInboxRes {
  export type AsObject = {
    connectedInboxSid: string,
  }
}

export class DeleteConnectedInboxBySidReq extends jspb.Message {
  getConnectedInboxSid(): string;
  setConnectedInboxSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConnectedInboxBySidReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConnectedInboxBySidReq): DeleteConnectedInboxBySidReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteConnectedInboxBySidReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConnectedInboxBySidReq;
  static deserializeBinaryFromReader(message: DeleteConnectedInboxBySidReq, reader: jspb.BinaryReader): DeleteConnectedInboxBySidReq;
}

export namespace DeleteConnectedInboxBySidReq {
  export type AsObject = {
    connectedInboxSid: string,
  }
}

export class GetConnectedInboxBySidReq extends jspb.Message {
  getConnectedInboxSid(): string;
  setConnectedInboxSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectedInboxBySidReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectedInboxBySidReq): GetConnectedInboxBySidReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConnectedInboxBySidReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectedInboxBySidReq;
  static deserializeBinaryFromReader(message: GetConnectedInboxBySidReq, reader: jspb.BinaryReader): GetConnectedInboxBySidReq;
}

export namespace GetConnectedInboxBySidReq {
  export type AsObject = {
    connectedInboxSid: string,
  }
}

export class SendgridAccountByClientReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendgridAccountByClientReq.AsObject;
  static toObject(includeInstance: boolean, msg: SendgridAccountByClientReq): SendgridAccountByClientReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendgridAccountByClientReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendgridAccountByClientReq;
  static deserializeBinaryFromReader(message: SendgridAccountByClientReq, reader: jspb.BinaryReader): SendgridAccountByClientReq;
}

export namespace SendgridAccountByClientReq {
  export type AsObject = {
  }
}

export class SendgridAccountByClientRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendgridAccountByClientRes.AsObject;
  static toObject(includeInstance: boolean, msg: SendgridAccountByClientRes): SendgridAccountByClientRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendgridAccountByClientRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendgridAccountByClientRes;
  static deserializeBinaryFromReader(message: SendgridAccountByClientRes, reader: jspb.BinaryReader): SendgridAccountByClientRes;
}

export namespace SendgridAccountByClientRes {
  export type AsObject = {
    result: boolean,
  }
}

export class ListConnectedInboxesReq extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConnectedInboxesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListConnectedInboxesReq): ListConnectedInboxesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListConnectedInboxesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConnectedInboxesReq;
  static deserializeBinaryFromReader(message: ListConnectedInboxesReq, reader: jspb.BinaryReader): ListConnectedInboxesReq;
}

export namespace ListConnectedInboxesReq {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListConnectedInboxesRes extends jspb.Message {
  clearConnectedInboxesList(): void;
  getConnectedInboxesList(): Array<ListConnectedInboxesRes.ListConnectedInbox>;
  setConnectedInboxesList(value: Array<ListConnectedInboxesRes.ListConnectedInbox>): void;
  addConnectedInboxes(value?: ListConnectedInboxesRes.ListConnectedInbox, index?: number): ListConnectedInboxesRes.ListConnectedInbox;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConnectedInboxesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListConnectedInboxesRes): ListConnectedInboxesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListConnectedInboxesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConnectedInboxesRes;
  static deserializeBinaryFromReader(message: ListConnectedInboxesRes, reader: jspb.BinaryReader): ListConnectedInboxesRes;
}

export namespace ListConnectedInboxesRes {
  export type AsObject = {
    connectedInboxesList: Array<ListConnectedInboxesRes.ListConnectedInbox.AsObject>,
  }

  export class ListConnectedInbox extends jspb.Message {
    hasConnectedInbox(): boolean;
    clearConnectedInbox(): void;
    getConnectedInbox(): api_commons_omnichannel_pb.ConnectedInbox | undefined;
    setConnectedInbox(value?: api_commons_omnichannel_pb.ConnectedInbox): void;

    clearCampaignsList(): void;
    getCampaignsList(): Array<api_commons_omnichannel_pb.OmniCampaign>;
    setCampaignsList(value: Array<api_commons_omnichannel_pb.OmniCampaign>): void;
    addCampaigns(value?: api_commons_omnichannel_pb.OmniCampaign, index?: number): api_commons_omnichannel_pb.OmniCampaign;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListConnectedInbox.AsObject;
    static toObject(includeInstance: boolean, msg: ListConnectedInbox): ListConnectedInbox.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListConnectedInbox, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListConnectedInbox;
    static deserializeBinaryFromReader(message: ListConnectedInbox, reader: jspb.BinaryReader): ListConnectedInbox;
  }

  export namespace ListConnectedInbox {
    export type AsObject = {
      connectedInbox?: api_commons_omnichannel_pb.ConnectedInbox.AsObject,
      campaignsList: Array<api_commons_omnichannel_pb.OmniCampaign.AsObject>,
    }
  }
}

export class TestConnectedInboxRes extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getDetails(): string;
  setDetails(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestConnectedInboxRes.AsObject;
  static toObject(includeInstance: boolean, msg: TestConnectedInboxRes): TestConnectedInboxRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestConnectedInboxRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestConnectedInboxRes;
  static deserializeBinaryFromReader(message: TestConnectedInboxRes, reader: jspb.BinaryReader): TestConnectedInboxRes;
}

export namespace TestConnectedInboxRes {
  export type AsObject = {
    success: boolean,
    details: string,
  }
}

export class UpdateConnectedInboxReq extends jspb.Message {
  hasConnectedInbox(): boolean;
  clearConnectedInbox(): void;
  getConnectedInbox(): api_commons_omnichannel_pb.ConnectedInbox | undefined;
  setConnectedInbox(value?: api_commons_omnichannel_pb.ConnectedInbox): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateConnectedInboxReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateConnectedInboxReq): UpdateConnectedInboxReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateConnectedInboxReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateConnectedInboxReq;
  static deserializeBinaryFromReader(message: UpdateConnectedInboxReq, reader: jspb.BinaryReader): UpdateConnectedInboxReq;
}

export namespace UpdateConnectedInboxReq {
  export type AsObject = {
    connectedInbox?: api_commons_omnichannel_pb.ConnectedInbox.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class CreateVerifiedEmailRes extends jspb.Message {
  getVerifiedEmailSid(): string;
  setVerifiedEmailSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVerifiedEmailRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVerifiedEmailRes): CreateVerifiedEmailRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateVerifiedEmailRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVerifiedEmailRes;
  static deserializeBinaryFromReader(message: CreateVerifiedEmailRes, reader: jspb.BinaryReader): CreateVerifiedEmailRes;
}

export namespace CreateVerifiedEmailRes {
  export type AsObject = {
    verifiedEmailSid: string,
  }
}

export class SendEmailNotificationReq extends jspb.Message {
  getSubject(): string;
  setSubject(value: string): void;

  getData(): string;
  setData(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  clearToEmailAddressArrList(): void;
  getToEmailAddressArrList(): Array<string>;
  setToEmailAddressArrList(value: Array<string>): void;
  addToEmailAddressArr(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendEmailNotificationReq.AsObject;
  static toObject(includeInstance: boolean, msg: SendEmailNotificationReq): SendEmailNotificationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendEmailNotificationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendEmailNotificationReq;
  static deserializeBinaryFromReader(message: SendEmailNotificationReq, reader: jspb.BinaryReader): SendEmailNotificationReq;
}

export namespace SendEmailNotificationReq {
  export type AsObject = {
    subject: string,
    data: string,
    message: string,
    toEmailAddressArrList: Array<string>,
  }
}

export class SendEmailNotificationRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendEmailNotificationRes.AsObject;
  static toObject(includeInstance: boolean, msg: SendEmailNotificationRes): SendEmailNotificationRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendEmailNotificationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendEmailNotificationRes;
  static deserializeBinaryFromReader(message: SendEmailNotificationRes, reader: jspb.BinaryReader): SendEmailNotificationRes;
}

export namespace SendEmailNotificationRes {
  export type AsObject = {
  }
}

export class GetVerifiedEmailBySidReq extends jspb.Message {
  getVerifiedEmailSid(): string;
  setVerifiedEmailSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVerifiedEmailBySidReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetVerifiedEmailBySidReq): GetVerifiedEmailBySidReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVerifiedEmailBySidReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVerifiedEmailBySidReq;
  static deserializeBinaryFromReader(message: GetVerifiedEmailBySidReq, reader: jspb.BinaryReader): GetVerifiedEmailBySidReq;
}

export namespace GetVerifiedEmailBySidReq {
  export type AsObject = {
    verifiedEmailSid: string,
  }
}

export class DeleteVerifiedEmailReq extends jspb.Message {
  getVerifiedEmailSid(): string;
  setVerifiedEmailSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVerifiedEmailReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVerifiedEmailReq): DeleteVerifiedEmailReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteVerifiedEmailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVerifiedEmailReq;
  static deserializeBinaryFromReader(message: DeleteVerifiedEmailReq, reader: jspb.BinaryReader): DeleteVerifiedEmailReq;
}

export namespace DeleteVerifiedEmailReq {
  export type AsObject = {
    verifiedEmailSid: string,
  }
}

export class ListVerifiedEmailsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVerifiedEmailsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListVerifiedEmailsReq): ListVerifiedEmailsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListVerifiedEmailsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVerifiedEmailsReq;
  static deserializeBinaryFromReader(message: ListVerifiedEmailsReq, reader: jspb.BinaryReader): ListVerifiedEmailsReq;
}

export namespace ListVerifiedEmailsReq {
  export type AsObject = {
  }
}

export class ListVerifiedEmailsRes extends jspb.Message {
  clearVerifiedEmailsList(): void;
  getVerifiedEmailsList(): Array<api_commons_omnichannel_pb.VerifiedEmail>;
  setVerifiedEmailsList(value: Array<api_commons_omnichannel_pb.VerifiedEmail>): void;
  addVerifiedEmails(value?: api_commons_omnichannel_pb.VerifiedEmail, index?: number): api_commons_omnichannel_pb.VerifiedEmail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVerifiedEmailsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListVerifiedEmailsRes): ListVerifiedEmailsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListVerifiedEmailsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVerifiedEmailsRes;
  static deserializeBinaryFromReader(message: ListVerifiedEmailsRes, reader: jspb.BinaryReader): ListVerifiedEmailsRes;
}

export namespace ListVerifiedEmailsRes {
  export type AsObject = {
    verifiedEmailsList: Array<api_commons_omnichannel_pb.VerifiedEmail.AsObject>,
  }
}

export class ResendVerifiedEmailReq extends jspb.Message {
  getVerifiedEmailSid(): string;
  setVerifiedEmailSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResendVerifiedEmailReq.AsObject;
  static toObject(includeInstance: boolean, msg: ResendVerifiedEmailReq): ResendVerifiedEmailReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResendVerifiedEmailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResendVerifiedEmailReq;
  static deserializeBinaryFromReader(message: ResendVerifiedEmailReq, reader: jspb.BinaryReader): ResendVerifiedEmailReq;
}

export namespace ResendVerifiedEmailReq {
  export type AsObject = {
    verifiedEmailSid: string,
  }
}

export class ResendVerifiedEmailRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResendVerifiedEmailRes.AsObject;
  static toObject(includeInstance: boolean, msg: ResendVerifiedEmailRes): ResendVerifiedEmailRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResendVerifiedEmailRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResendVerifiedEmailRes;
  static deserializeBinaryFromReader(message: ResendVerifiedEmailRes, reader: jspb.BinaryReader): ResendVerifiedEmailRes;
}

export namespace ResendVerifiedEmailRes {
  export type AsObject = {
  }
}

export class UpdateVerifiedEmailReq extends jspb.Message {
  getVerifiedEmailSid(): string;
  setVerifiedEmailSid(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVerifiedEmailReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVerifiedEmailReq): UpdateVerifiedEmailReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateVerifiedEmailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVerifiedEmailReq;
  static deserializeBinaryFromReader(message: UpdateVerifiedEmailReq, reader: jspb.BinaryReader): UpdateVerifiedEmailReq;
}

export namespace UpdateVerifiedEmailReq {
  export type AsObject = {
    verifiedEmailSid: string,
    description: string,
  }
}

export class GetPendingGoogleXOAuth2DataReq extends jspb.Message {
  getIdentificationToken(): string;
  setIdentificationToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPendingGoogleXOAuth2DataReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetPendingGoogleXOAuth2DataReq): GetPendingGoogleXOAuth2DataReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPendingGoogleXOAuth2DataReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPendingGoogleXOAuth2DataReq;
  static deserializeBinaryFromReader(message: GetPendingGoogleXOAuth2DataReq, reader: jspb.BinaryReader): GetPendingGoogleXOAuth2DataReq;
}

export namespace GetPendingGoogleXOAuth2DataReq {
  export type AsObject = {
    identificationToken: string,
  }
}

export class GetPendingGoogleXOAuth2DataRes extends jspb.Message {
  getEmailAddress(): string;
  setEmailAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPendingGoogleXOAuth2DataRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetPendingGoogleXOAuth2DataRes): GetPendingGoogleXOAuth2DataRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPendingGoogleXOAuth2DataRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPendingGoogleXOAuth2DataRes;
  static deserializeBinaryFromReader(message: GetPendingGoogleXOAuth2DataRes, reader: jspb.BinaryReader): GetPendingGoogleXOAuth2DataRes;
}

export namespace GetPendingGoogleXOAuth2DataRes {
  export type AsObject = {
    emailAddress: string,
  }
}

export class SendFeedbackEmailReq extends jspb.Message {
  getFromEmail(): string;
  setFromEmail(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  getScreenshot(): string;
  setScreenshot(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendFeedbackEmailReq.AsObject;
  static toObject(includeInstance: boolean, msg: SendFeedbackEmailReq): SendFeedbackEmailReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendFeedbackEmailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendFeedbackEmailReq;
  static deserializeBinaryFromReader(message: SendFeedbackEmailReq, reader: jspb.BinaryReader): SendFeedbackEmailReq;
}

export namespace SendFeedbackEmailReq {
  export type AsObject = {
    fromEmail: string,
    description: string,
    sessionId: string,
    screenshot: string,
  }
}

export class SendFeedbackEmailRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendFeedbackEmailRes.AsObject;
  static toObject(includeInstance: boolean, msg: SendFeedbackEmailRes): SendFeedbackEmailRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendFeedbackEmailRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendFeedbackEmailRes;
  static deserializeBinaryFromReader(message: SendFeedbackEmailRes, reader: jspb.BinaryReader): SendFeedbackEmailRes;
}

export namespace SendFeedbackEmailRes {
  export type AsObject = {
  }
}

export class GetOmniAttachmentReq extends jspb.Message {
  getIncludeDownloadUrl(): boolean;
  setIncludeDownloadUrl(value: boolean): void;

  hasByOmniAttachmentSid(): boolean;
  clearByOmniAttachmentSid(): void;
  getByOmniAttachmentSid(): GetOmniAttachmentReq.ByOmniAttachmentSid | undefined;
  setByOmniAttachmentSid(value?: GetOmniAttachmentReq.ByOmniAttachmentSid): void;

  getFilterCase(): GetOmniAttachmentReq.FilterCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOmniAttachmentReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetOmniAttachmentReq): GetOmniAttachmentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOmniAttachmentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOmniAttachmentReq;
  static deserializeBinaryFromReader(message: GetOmniAttachmentReq, reader: jspb.BinaryReader): GetOmniAttachmentReq;
}

export namespace GetOmniAttachmentReq {
  export type AsObject = {
    includeDownloadUrl: boolean,
    byOmniAttachmentSid?: GetOmniAttachmentReq.ByOmniAttachmentSid.AsObject,
  }

  export class ByOmniAttachmentSid extends jspb.Message {
    getOmniAttachmentSid(): string;
    setOmniAttachmentSid(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ByOmniAttachmentSid.AsObject;
    static toObject(includeInstance: boolean, msg: ByOmniAttachmentSid): ByOmniAttachmentSid.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ByOmniAttachmentSid, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ByOmniAttachmentSid;
    static deserializeBinaryFromReader(message: ByOmniAttachmentSid, reader: jspb.BinaryReader): ByOmniAttachmentSid;
  }

  export namespace ByOmniAttachmentSid {
    export type AsObject = {
      omniAttachmentSid: string,
    }
  }

  export enum FilterCase {
    FILTER_NOT_SET = 0,
    BY_OMNI_ATTACHMENT_SID = 100,
  }
}

export class CreateTasksReq extends jspb.Message {
  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  getCampaignModuleSid(): string;
  setCampaignModuleSid(value: string): void;

  hasContactListDataSource(): boolean;
  clearContactListDataSource(): void;
  getContactListDataSource(): ContactListDataSource | undefined;
  setContactListDataSource(value?: ContactListDataSource): void;

  getDataSourceCase(): CreateTasksReq.DataSourceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTasksReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTasksReq): CreateTasksReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTasksReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTasksReq;
  static deserializeBinaryFromReader(message: CreateTasksReq, reader: jspb.BinaryReader): CreateTasksReq;
}

export namespace CreateTasksReq {
  export type AsObject = {
    campaignSid: string,
    campaignModuleSid: string,
    contactListDataSource?: ContactListDataSource.AsObject,
  }

  export enum DataSourceCase {
    DATA_SOURCE_NOT_SET = 0,
    CONTACT_LIST_DATA_SOURCE = 100,
  }
}

export class CreateTasksRes extends jspb.Message {
  getReferenceId(): string;
  setReferenceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTasksRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTasksRes): CreateTasksRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTasksRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTasksRes;
  static deserializeBinaryFromReader(message: CreateTasksRes, reader: jspb.BinaryReader): CreateTasksRes;
}

export namespace CreateTasksRes {
  export type AsObject = {
    referenceId: string,
  }
}

export class CreateSignatureReq extends jspb.Message {
  getSignature(): string;
  setSignature(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSignatureReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSignatureReq): CreateSignatureReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSignatureReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSignatureReq;
  static deserializeBinaryFromReader(message: CreateSignatureReq, reader: jspb.BinaryReader): CreateSignatureReq;
}

export namespace CreateSignatureReq {
  export type AsObject = {
    signature: string,
    name: string,
    description: string,
  }
}

export class CreateSignatureRes extends jspb.Message {
  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): api_commons_omnichannel_pb.Signature | undefined;
  setSignature(value?: api_commons_omnichannel_pb.Signature): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSignatureRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSignatureRes): CreateSignatureRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSignatureRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSignatureRes;
  static deserializeBinaryFromReader(message: CreateSignatureRes, reader: jspb.BinaryReader): CreateSignatureRes;
}

export namespace CreateSignatureRes {
  export type AsObject = {
    signature?: api_commons_omnichannel_pb.Signature.AsObject,
  }
}

export class DeleteSignatureReq extends jspb.Message {
  getSignatureSid(): string;
  setSignatureSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSignatureReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSignatureReq): DeleteSignatureReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSignatureReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSignatureReq;
  static deserializeBinaryFromReader(message: DeleteSignatureReq, reader: jspb.BinaryReader): DeleteSignatureReq;
}

export namespace DeleteSignatureReq {
  export type AsObject = {
    signatureSid: string,
  }
}

export class DeleteSignatureRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSignatureRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSignatureRes): DeleteSignatureRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSignatureRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSignatureRes;
  static deserializeBinaryFromReader(message: DeleteSignatureRes, reader: jspb.BinaryReader): DeleteSignatureRes;
}

export namespace DeleteSignatureRes {
  export type AsObject = {
  }
}

export class ListSignaturesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSignaturesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSignaturesReq): ListSignaturesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSignaturesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSignaturesReq;
  static deserializeBinaryFromReader(message: ListSignaturesReq, reader: jspb.BinaryReader): ListSignaturesReq;
}

export namespace ListSignaturesReq {
  export type AsObject = {
  }
}

export class ListSignaturesRes extends jspb.Message {
  clearSignaturesList(): void;
  getSignaturesList(): Array<api_commons_omnichannel_pb.Signature>;
  setSignaturesList(value: Array<api_commons_omnichannel_pb.Signature>): void;
  addSignatures(value?: api_commons_omnichannel_pb.Signature, index?: number): api_commons_omnichannel_pb.Signature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSignaturesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSignaturesRes): ListSignaturesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSignaturesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSignaturesRes;
  static deserializeBinaryFromReader(message: ListSignaturesRes, reader: jspb.BinaryReader): ListSignaturesRes;
}

export namespace ListSignaturesRes {
  export type AsObject = {
    signaturesList: Array<api_commons_omnichannel_pb.Signature.AsObject>,
  }
}

export class UpdateSignatureReq extends jspb.Message {
  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): api_commons_omnichannel_pb.Signature | undefined;
  setSignature(value?: api_commons_omnichannel_pb.Signature): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSignatureReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSignatureReq): UpdateSignatureReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSignatureReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSignatureReq;
  static deserializeBinaryFromReader(message: UpdateSignatureReq, reader: jspb.BinaryReader): UpdateSignatureReq;
}

export namespace UpdateSignatureReq {
  export type AsObject = {
    signature?: api_commons_omnichannel_pb.Signature.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateSignatureRes extends jspb.Message {
  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): api_commons_omnichannel_pb.Signature | undefined;
  setSignature(value?: api_commons_omnichannel_pb.Signature): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSignatureRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSignatureRes): UpdateSignatureRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSignatureRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSignatureRes;
  static deserializeBinaryFromReader(message: UpdateSignatureRes, reader: jspb.BinaryReader): UpdateSignatureRes;
}

export namespace UpdateSignatureRes {
  export type AsObject = {
    signature?: api_commons_omnichannel_pb.Signature.AsObject,
  }
}

export class CreateProjectReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasComplianceConfig(): boolean;
  clearComplianceConfig(): void;
  getComplianceConfig(): api_commons_omnichannel_pb.OmniProjectComplianceConfig | undefined;
  setComplianceConfig(value?: api_commons_omnichannel_pb.OmniProjectComplianceConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectReq): CreateProjectReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProjectReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectReq;
  static deserializeBinaryFromReader(message: CreateProjectReq, reader: jspb.BinaryReader): CreateProjectReq;
}

export namespace CreateProjectReq {
  export type AsObject = {
    name: string,
    description: string,
    complianceConfig?: api_commons_omnichannel_pb.OmniProjectComplianceConfig.AsObject,
  }
}

export class CreateProjectRes extends jspb.Message {
  hasProject(): boolean;
  clearProject(): void;
  getProject(): Project | undefined;
  setProject(value?: Project): void;

  getReferenceId(): string;
  setReferenceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectRes): CreateProjectRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProjectRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectRes;
  static deserializeBinaryFromReader(message: CreateProjectRes, reader: jspb.BinaryReader): CreateProjectRes;
}

export namespace CreateProjectRes {
  export type AsObject = {
    project?: Project.AsObject,
    referenceId: string,
  }
}

export class Project extends jspb.Message {
  getProjectSid(): string;
  setProjectSid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getStatus(): api_commons_omnichannel_pb.ProjectStatusMap[keyof api_commons_omnichannel_pb.ProjectStatusMap];
  setStatus(value: api_commons_omnichannel_pb.ProjectStatusMap[keyof api_commons_omnichannel_pb.ProjectStatusMap]): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasComplianceConfig(): boolean;
  clearComplianceConfig(): void;
  getComplianceConfig(): api_commons_omnichannel_pb.OmniProjectComplianceConfig | undefined;
  setComplianceConfig(value?: api_commons_omnichannel_pb.OmniProjectComplianceConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Project.AsObject;
  static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Project;
  static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

export namespace Project {
  export type AsObject = {
    projectSid: string,
    name: string,
    description: string,
    status: api_commons_omnichannel_pb.ProjectStatusMap[keyof api_commons_omnichannel_pb.ProjectStatusMap],
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    complianceConfig?: api_commons_omnichannel_pb.OmniProjectComplianceConfig.AsObject,
  }
}

export class ListProjectsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectsReq): ListProjectsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProjectsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectsReq;
  static deserializeBinaryFromReader(message: ListProjectsReq, reader: jspb.BinaryReader): ListProjectsReq;
}

export namespace ListProjectsReq {
  export type AsObject = {
  }
}

export class ListProjectsRes extends jspb.Message {
  clearProjectsList(): void;
  getProjectsList(): Array<Project>;
  setProjectsList(value: Array<Project>): void;
  addProjects(value?: Project, index?: number): Project;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectsRes): ListProjectsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProjectsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectsRes;
  static deserializeBinaryFromReader(message: ListProjectsRes, reader: jspb.BinaryReader): ListProjectsRes;
}

export namespace ListProjectsRes {
  export type AsObject = {
    projectsList: Array<Project.AsObject>,
  }
}

export class EditProjectByIdReq extends jspb.Message {
  hasProject(): boolean;
  clearProject(): void;
  getProject(): Project | undefined;
  setProject(value?: Project): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditProjectByIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: EditProjectByIdReq): EditProjectByIdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditProjectByIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditProjectByIdReq;
  static deserializeBinaryFromReader(message: EditProjectByIdReq, reader: jspb.BinaryReader): EditProjectByIdReq;
}

export namespace EditProjectByIdReq {
  export type AsObject = {
    project?: Project.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class EditProjectByIdRes extends jspb.Message {
  hasProject(): boolean;
  clearProject(): void;
  getProject(): Project | undefined;
  setProject(value?: Project): void;

  getReferenceId(): string;
  setReferenceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditProjectByIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: EditProjectByIdRes): EditProjectByIdRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditProjectByIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditProjectByIdRes;
  static deserializeBinaryFromReader(message: EditProjectByIdRes, reader: jspb.BinaryReader): EditProjectByIdRes;
}

export namespace EditProjectByIdRes {
  export type AsObject = {
    project?: Project.AsObject,
    referenceId: string,
  }
}

export class CloseProjectByIdReq extends jspb.Message {
  getProjectSid(): string;
  setProjectSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseProjectByIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: CloseProjectByIdReq): CloseProjectByIdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloseProjectByIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseProjectByIdReq;
  static deserializeBinaryFromReader(message: CloseProjectByIdReq, reader: jspb.BinaryReader): CloseProjectByIdReq;
}

export namespace CloseProjectByIdReq {
  export type AsObject = {
    projectSid: string,
  }
}

export class CloseProjectByIdRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseProjectByIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: CloseProjectByIdRes): CloseProjectByIdRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloseProjectByIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseProjectByIdRes;
  static deserializeBinaryFromReader(message: CloseProjectByIdRes, reader: jspb.BinaryReader): CloseProjectByIdRes;
}

export namespace CloseProjectByIdRes {
  export type AsObject = {
  }
}

export class GetProjectByIdReq extends jspb.Message {
  getProjectSid(): string;
  setProjectSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectByIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectByIdReq): GetProjectByIdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProjectByIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectByIdReq;
  static deserializeBinaryFromReader(message: GetProjectByIdReq, reader: jspb.BinaryReader): GetProjectByIdReq;
}

export namespace GetProjectByIdReq {
  export type AsObject = {
    projectSid: string,
  }
}

export class CreateCannedMessageReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getMessageBody(): string;
  setMessageBody(value: string): void;

  getCannedMessageGroupId(): string;
  setCannedMessageGroupId(value: string): void;

  getAllowsHtml(): boolean;
  setAllowsHtml(value: boolean): void;

  clearAttachmentsList(): void;
  getAttachmentsList(): Array<api_commons_omnichannel_pb.OmniAttachment>;
  setAttachmentsList(value: Array<api_commons_omnichannel_pb.OmniAttachment>): void;
  addAttachments(value?: api_commons_omnichannel_pb.OmniAttachment, index?: number): api_commons_omnichannel_pb.OmniAttachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCannedMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCannedMessageReq): CreateCannedMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCannedMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCannedMessageReq;
  static deserializeBinaryFromReader(message: CreateCannedMessageReq, reader: jspb.BinaryReader): CreateCannedMessageReq;
}

export namespace CreateCannedMessageReq {
  export type AsObject = {
    name: string,
    description: string,
    messageBody: string,
    cannedMessageGroupId: string,
    allowsHtml: boolean,
    attachmentsList: Array<api_commons_omnichannel_pb.OmniAttachment.AsObject>,
  }
}

export class CannedMessage extends jspb.Message {
  getCannedMessageId(): string;
  setCannedMessageId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getMessageBody(): string;
  setMessageBody(value: string): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCannedMessageGroupId(): string;
  setCannedMessageGroupId(value: string): void;

  getAllowsHtml(): boolean;
  setAllowsHtml(value: boolean): void;

  clearAttachmentsList(): void;
  getAttachmentsList(): Array<api_commons_omnichannel_pb.OmniAttachment>;
  setAttachmentsList(value: Array<api_commons_omnichannel_pb.OmniAttachment>): void;
  addAttachments(value?: api_commons_omnichannel_pb.OmniAttachment, index?: number): api_commons_omnichannel_pb.OmniAttachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CannedMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CannedMessage): CannedMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CannedMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CannedMessage;
  static deserializeBinaryFromReader(message: CannedMessage, reader: jspb.BinaryReader): CannedMessage;
}

export namespace CannedMessage {
  export type AsObject = {
    cannedMessageId: string,
    name: string,
    description: string,
    messageBody: string,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    cannedMessageGroupId: string,
    allowsHtml: boolean,
    attachmentsList: Array<api_commons_omnichannel_pb.OmniAttachment.AsObject>,
  }
}

export class ListCannedMessagesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCannedMessagesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListCannedMessagesReq): ListCannedMessagesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCannedMessagesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCannedMessagesReq;
  static deserializeBinaryFromReader(message: ListCannedMessagesReq, reader: jspb.BinaryReader): ListCannedMessagesReq;
}

export namespace ListCannedMessagesReq {
  export type AsObject = {
  }
}

export class ListCannedMessagesRes extends jspb.Message {
  clearCannedMessagesWithGroupList(): void;
  getCannedMessagesWithGroupList(): Array<CannedMessageWithGroup>;
  setCannedMessagesWithGroupList(value: Array<CannedMessageWithGroup>): void;
  addCannedMessagesWithGroup(value?: CannedMessageWithGroup, index?: number): CannedMessageWithGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCannedMessagesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListCannedMessagesRes): ListCannedMessagesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCannedMessagesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCannedMessagesRes;
  static deserializeBinaryFromReader(message: ListCannedMessagesRes, reader: jspb.BinaryReader): ListCannedMessagesRes;
}

export namespace ListCannedMessagesRes {
  export type AsObject = {
    cannedMessagesWithGroupList: Array<CannedMessageWithGroup.AsObject>,
  }
}

export class UpdateCannedMessageReq extends jspb.Message {
  getCannedMessageId(): string;
  setCannedMessageId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getMessageBody(): string;
  setMessageBody(value: string): void;

  getCannedMessageGroupId(): string;
  setCannedMessageGroupId(value: string): void;

  getAllowsHtml(): boolean;
  setAllowsHtml(value: boolean): void;

  clearAttachmentsList(): void;
  getAttachmentsList(): Array<api_commons_omnichannel_pb.OmniAttachment>;
  setAttachmentsList(value: Array<api_commons_omnichannel_pb.OmniAttachment>): void;
  addAttachments(value?: api_commons_omnichannel_pb.OmniAttachment, index?: number): api_commons_omnichannel_pb.OmniAttachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCannedMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCannedMessageReq): UpdateCannedMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCannedMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCannedMessageReq;
  static deserializeBinaryFromReader(message: UpdateCannedMessageReq, reader: jspb.BinaryReader): UpdateCannedMessageReq;
}

export namespace UpdateCannedMessageReq {
  export type AsObject = {
    cannedMessageId: string,
    name: string,
    description: string,
    messageBody: string,
    cannedMessageGroupId: string,
    allowsHtml: boolean,
    attachmentsList: Array<api_commons_omnichannel_pb.OmniAttachment.AsObject>,
  }
}

export class GetCannedMessageByIdReq extends jspb.Message {
  getCannedMessageId(): string;
  setCannedMessageId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCannedMessageByIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCannedMessageByIdReq): GetCannedMessageByIdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCannedMessageByIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCannedMessageByIdReq;
  static deserializeBinaryFromReader(message: GetCannedMessageByIdReq, reader: jspb.BinaryReader): GetCannedMessageByIdReq;
}

export namespace GetCannedMessageByIdReq {
  export type AsObject = {
    cannedMessageId: string,
  }
}

export class DeleteCannedMessageByIdReq extends jspb.Message {
  getCannedMessageId(): string;
  setCannedMessageId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCannedMessageByIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCannedMessageByIdReq): DeleteCannedMessageByIdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCannedMessageByIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCannedMessageByIdReq;
  static deserializeBinaryFromReader(message: DeleteCannedMessageByIdReq, reader: jspb.BinaryReader): DeleteCannedMessageByIdReq;
}

export namespace DeleteCannedMessageByIdReq {
  export type AsObject = {
    cannedMessageId: string,
  }
}

export class DeleteCannedMessageByIdRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCannedMessageByIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCannedMessageByIdRes): DeleteCannedMessageByIdRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCannedMessageByIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCannedMessageByIdRes;
  static deserializeBinaryFromReader(message: DeleteCannedMessageByIdRes, reader: jspb.BinaryReader): DeleteCannedMessageByIdRes;
}

export namespace DeleteCannedMessageByIdRes {
  export type AsObject = {
    result: boolean,
  }
}

export class CreateCannedMessageGroupReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCannedMessageGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCannedMessageGroupReq): CreateCannedMessageGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCannedMessageGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCannedMessageGroupReq;
  static deserializeBinaryFromReader(message: CreateCannedMessageGroupReq, reader: jspb.BinaryReader): CreateCannedMessageGroupReq;
}

export namespace CreateCannedMessageGroupReq {
  export type AsObject = {
    name: string,
    description: string,
  }
}

export class CannedMessageGroup extends jspb.Message {
  getCannedMessageGroupId(): string;
  setCannedMessageGroupId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CannedMessageGroup.AsObject;
  static toObject(includeInstance: boolean, msg: CannedMessageGroup): CannedMessageGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CannedMessageGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CannedMessageGroup;
  static deserializeBinaryFromReader(message: CannedMessageGroup, reader: jspb.BinaryReader): CannedMessageGroup;
}

export namespace CannedMessageGroup {
  export type AsObject = {
    cannedMessageGroupId: string,
    name: string,
    description: string,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CannedMessageWithGroup extends jspb.Message {
  getCannedMessageId(): string;
  setCannedMessageId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getMessageBody(): string;
  setMessageBody(value: string): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCannedMessageGroupId(): string;
  setCannedMessageGroupId(value: string): void;

  getGroupName(): string;
  setGroupName(value: string): void;

  getGroupDescription(): string;
  setGroupDescription(value: string): void;

  hasGroupDateCreated(): boolean;
  clearGroupDateCreated(): void;
  getGroupDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setGroupDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasGroupLastUpdated(): boolean;
  clearGroupLastUpdated(): void;
  getGroupLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setGroupLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAllowsHtml(): boolean;
  setAllowsHtml(value: boolean): void;

  clearAttachmentsList(): void;
  getAttachmentsList(): Array<api_commons_omnichannel_pb.OmniAttachment>;
  setAttachmentsList(value: Array<api_commons_omnichannel_pb.OmniAttachment>): void;
  addAttachments(value?: api_commons_omnichannel_pb.OmniAttachment, index?: number): api_commons_omnichannel_pb.OmniAttachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CannedMessageWithGroup.AsObject;
  static toObject(includeInstance: boolean, msg: CannedMessageWithGroup): CannedMessageWithGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CannedMessageWithGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CannedMessageWithGroup;
  static deserializeBinaryFromReader(message: CannedMessageWithGroup, reader: jspb.BinaryReader): CannedMessageWithGroup;
}

export namespace CannedMessageWithGroup {
  export type AsObject = {
    cannedMessageId: string,
    name: string,
    description: string,
    messageBody: string,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    cannedMessageGroupId: string,
    groupName: string,
    groupDescription: string,
    groupDateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    groupLastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    allowsHtml: boolean,
    attachmentsList: Array<api_commons_omnichannel_pb.OmniAttachment.AsObject>,
  }
}

export class ListCannedMessageGroupsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCannedMessageGroupsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListCannedMessageGroupsReq): ListCannedMessageGroupsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCannedMessageGroupsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCannedMessageGroupsReq;
  static deserializeBinaryFromReader(message: ListCannedMessageGroupsReq, reader: jspb.BinaryReader): ListCannedMessageGroupsReq;
}

export namespace ListCannedMessageGroupsReq {
  export type AsObject = {
  }
}

export class ListCannedMessageGroupsRes extends jspb.Message {
  clearCannedMessageGroupsList(): void;
  getCannedMessageGroupsList(): Array<CannedMessageGroup>;
  setCannedMessageGroupsList(value: Array<CannedMessageGroup>): void;
  addCannedMessageGroups(value?: CannedMessageGroup, index?: number): CannedMessageGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCannedMessageGroupsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListCannedMessageGroupsRes): ListCannedMessageGroupsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCannedMessageGroupsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCannedMessageGroupsRes;
  static deserializeBinaryFromReader(message: ListCannedMessageGroupsRes, reader: jspb.BinaryReader): ListCannedMessageGroupsRes;
}

export namespace ListCannedMessageGroupsRes {
  export type AsObject = {
    cannedMessageGroupsList: Array<CannedMessageGroup.AsObject>,
  }
}

export class UpdateCannedMessageGroupReq extends jspb.Message {
  getCannedMessageGroupId(): string;
  setCannedMessageGroupId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCannedMessageGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCannedMessageGroupReq): UpdateCannedMessageGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCannedMessageGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCannedMessageGroupReq;
  static deserializeBinaryFromReader(message: UpdateCannedMessageGroupReq, reader: jspb.BinaryReader): UpdateCannedMessageGroupReq;
}

export namespace UpdateCannedMessageGroupReq {
  export type AsObject = {
    cannedMessageGroupId: string,
    name: string,
    description: string,
  }
}

export class UpdateCannedMessageGroupRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCannedMessageGroupRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCannedMessageGroupRes): UpdateCannedMessageGroupRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCannedMessageGroupRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCannedMessageGroupRes;
  static deserializeBinaryFromReader(message: UpdateCannedMessageGroupRes, reader: jspb.BinaryReader): UpdateCannedMessageGroupRes;
}

export namespace UpdateCannedMessageGroupRes {
  export type AsObject = {
  }
}

export class DeleteCannedMessageGroupReq extends jspb.Message {
  getCannedMessageGroupId(): string;
  setCannedMessageGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCannedMessageGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCannedMessageGroupReq): DeleteCannedMessageGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCannedMessageGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCannedMessageGroupReq;
  static deserializeBinaryFromReader(message: DeleteCannedMessageGroupReq, reader: jspb.BinaryReader): DeleteCannedMessageGroupReq;
}

export namespace DeleteCannedMessageGroupReq {
  export type AsObject = {
    cannedMessageGroupId: string,
  }
}

export class DeleteCannedMessageGroupRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCannedMessageGroupRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCannedMessageGroupRes): DeleteCannedMessageGroupRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCannedMessageGroupRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCannedMessageGroupRes;
  static deserializeBinaryFromReader(message: DeleteCannedMessageGroupRes, reader: jspb.BinaryReader): DeleteCannedMessageGroupRes;
}

export namespace DeleteCannedMessageGroupRes {
  export type AsObject = {
  }
}

export class ListCannedMessagesByGroupIdReq extends jspb.Message {
  getCannedMessageGroupId(): string;
  setCannedMessageGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCannedMessagesByGroupIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListCannedMessagesByGroupIdReq): ListCannedMessagesByGroupIdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCannedMessagesByGroupIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCannedMessagesByGroupIdReq;
  static deserializeBinaryFromReader(message: ListCannedMessagesByGroupIdReq, reader: jspb.BinaryReader): ListCannedMessagesByGroupIdReq;
}

export namespace ListCannedMessagesByGroupIdReq {
  export type AsObject = {
    cannedMessageGroupId: string,
  }
}

export class ListCannedMessagesByGroupIdRes extends jspb.Message {
  clearCannedMessagesWithGroupList(): void;
  getCannedMessagesWithGroupList(): Array<CannedMessageWithGroup>;
  setCannedMessagesWithGroupList(value: Array<CannedMessageWithGroup>): void;
  addCannedMessagesWithGroup(value?: CannedMessageWithGroup, index?: number): CannedMessageWithGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCannedMessagesByGroupIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListCannedMessagesByGroupIdRes): ListCannedMessagesByGroupIdRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCannedMessagesByGroupIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCannedMessagesByGroupIdRes;
  static deserializeBinaryFromReader(message: ListCannedMessagesByGroupIdRes, reader: jspb.BinaryReader): ListCannedMessagesByGroupIdRes;
}

export namespace ListCannedMessagesByGroupIdRes {
  export type AsObject = {
    cannedMessagesWithGroupList: Array<CannedMessageWithGroup.AsObject>,
  }
}

export class GetCannedMessageGroupByIdReq extends jspb.Message {
  getCannedMessageGroupId(): string;
  setCannedMessageGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCannedMessageGroupByIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCannedMessageGroupByIdReq): GetCannedMessageGroupByIdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCannedMessageGroupByIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCannedMessageGroupByIdReq;
  static deserializeBinaryFromReader(message: GetCannedMessageGroupByIdReq, reader: jspb.BinaryReader): GetCannedMessageGroupByIdReq;
}

export namespace GetCannedMessageGroupByIdReq {
  export type AsObject = {
    cannedMessageGroupId: string,
  }
}

export class ListUserSkillsReq extends jspb.Message {
  clearTypeFiltersList(): void;
  getTypeFiltersList(): Array<api_commons_wfm_pb.SkillType.EnumMap[keyof api_commons_wfm_pb.SkillType.EnumMap]>;
  setTypeFiltersList(value: Array<api_commons_wfm_pb.SkillType.EnumMap[keyof api_commons_wfm_pb.SkillType.EnumMap]>): void;
  addTypeFilters(value: api_commons_wfm_pb.SkillType.EnumMap[keyof api_commons_wfm_pb.SkillType.EnumMap], index?: number): api_commons_wfm_pb.SkillType.EnumMap[keyof api_commons_wfm_pb.SkillType.EnumMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserSkillsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserSkillsReq): ListUserSkillsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUserSkillsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserSkillsReq;
  static deserializeBinaryFromReader(message: ListUserSkillsReq, reader: jspb.BinaryReader): ListUserSkillsReq;
}

export namespace ListUserSkillsReq {
  export type AsObject = {
    typeFiltersList: Array<api_commons_wfm_pb.SkillType.EnumMap[keyof api_commons_wfm_pb.SkillType.EnumMap]>,
  }
}

export class ListUserSkillsRes extends jspb.Message {
  clearSkillsList(): void;
  getSkillsList(): Array<OmniSkill>;
  setSkillsList(value: Array<OmniSkill>): void;
  addSkills(value?: OmniSkill, index?: number): OmniSkill;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserSkillsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserSkillsRes): ListUserSkillsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUserSkillsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserSkillsRes;
  static deserializeBinaryFromReader(message: ListUserSkillsRes, reader: jspb.BinaryReader): ListUserSkillsRes;
}

export namespace ListUserSkillsRes {
  export type AsObject = {
    skillsList: Array<OmniSkill.AsObject>,
  }
}

export class OmniSkill extends jspb.Message {
  getRegion(): string;
  setRegion(value: string): void;

  getP3Id(): string;
  setP3Id(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getType(): api_commons_wfm_pb.SkillType.EnumMap[keyof api_commons_wfm_pb.SkillType.EnumMap];
  setType(value: api_commons_wfm_pb.SkillType.EnumMap[keyof api_commons_wfm_pb.SkillType.EnumMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniSkill.AsObject;
  static toObject(includeInstance: boolean, msg: OmniSkill): OmniSkill.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniSkill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniSkill;
  static deserializeBinaryFromReader(message: OmniSkill, reader: jspb.BinaryReader): OmniSkill;
}

export namespace OmniSkill {
  export type AsObject = {
    region: string,
    p3Id: string,
    name: string,
    description: string,
    type: api_commons_wfm_pb.SkillType.EnumMap[keyof api_commons_wfm_pb.SkillType.EnumMap],
  }
}

export class ListWhatsAppNumbersReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWhatsAppNumbersReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListWhatsAppNumbersReq): ListWhatsAppNumbersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWhatsAppNumbersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWhatsAppNumbersReq;
  static deserializeBinaryFromReader(message: ListWhatsAppNumbersReq, reader: jspb.BinaryReader): ListWhatsAppNumbersReq;
}

export namespace ListWhatsAppNumbersReq {
  export type AsObject = {
  }
}

export class ListWhatsAppNumbersRes extends jspb.Message {
  clearWhatsappNumbersList(): void;
  getWhatsappNumbersList(): Array<api_commons_omnichannel_pb.WhatsAppNumber>;
  setWhatsappNumbersList(value: Array<api_commons_omnichannel_pb.WhatsAppNumber>): void;
  addWhatsappNumbers(value?: api_commons_omnichannel_pb.WhatsAppNumber, index?: number): api_commons_omnichannel_pb.WhatsAppNumber;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWhatsAppNumbersRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListWhatsAppNumbersRes): ListWhatsAppNumbersRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWhatsAppNumbersRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWhatsAppNumbersRes;
  static deserializeBinaryFromReader(message: ListWhatsAppNumbersRes, reader: jspb.BinaryReader): ListWhatsAppNumbersRes;
}

export namespace ListWhatsAppNumbersRes {
  export type AsObject = {
    whatsappNumbersList: Array<api_commons_omnichannel_pb.WhatsAppNumber.AsObject>,
  }
}

export class CreateWhatsAppNumberReq extends jspb.Message {
  hasWhatsappNumber(): boolean;
  clearWhatsappNumber(): void;
  getWhatsappNumber(): api_commons_omnichannel_pb.WhatsAppNumber | undefined;
  setWhatsappNumber(value?: api_commons_omnichannel_pb.WhatsAppNumber): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWhatsAppNumberReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWhatsAppNumberReq): CreateWhatsAppNumberReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateWhatsAppNumberReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWhatsAppNumberReq;
  static deserializeBinaryFromReader(message: CreateWhatsAppNumberReq, reader: jspb.BinaryReader): CreateWhatsAppNumberReq;
}

export namespace CreateWhatsAppNumberReq {
  export type AsObject = {
    whatsappNumber?: api_commons_omnichannel_pb.WhatsAppNumber.AsObject,
  }
}

export class CreateWhatsAppNumberRes extends jspb.Message {
  hasWhatsappNumber(): boolean;
  clearWhatsappNumber(): void;
  getWhatsappNumber(): api_commons_omnichannel_pb.WhatsAppNumber | undefined;
  setWhatsappNumber(value?: api_commons_omnichannel_pb.WhatsAppNumber): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWhatsAppNumberRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWhatsAppNumberRes): CreateWhatsAppNumberRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateWhatsAppNumberRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWhatsAppNumberRes;
  static deserializeBinaryFromReader(message: CreateWhatsAppNumberRes, reader: jspb.BinaryReader): CreateWhatsAppNumberRes;
}

export namespace CreateWhatsAppNumberRes {
  export type AsObject = {
    whatsappNumber?: api_commons_omnichannel_pb.WhatsAppNumber.AsObject,
  }
}

export class UpdateWhatsAppNumberReq extends jspb.Message {
  hasWhatsappNumber(): boolean;
  clearWhatsappNumber(): void;
  getWhatsappNumber(): api_commons_omnichannel_pb.WhatsAppNumber | undefined;
  setWhatsappNumber(value?: api_commons_omnichannel_pb.WhatsAppNumber): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWhatsAppNumberReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWhatsAppNumberReq): UpdateWhatsAppNumberReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateWhatsAppNumberReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWhatsAppNumberReq;
  static deserializeBinaryFromReader(message: UpdateWhatsAppNumberReq, reader: jspb.BinaryReader): UpdateWhatsAppNumberReq;
}

export namespace UpdateWhatsAppNumberReq {
  export type AsObject = {
    whatsappNumber?: api_commons_omnichannel_pb.WhatsAppNumber.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateWhatsAppNumberRes extends jspb.Message {
  hasWhatsappNumber(): boolean;
  clearWhatsappNumber(): void;
  getWhatsappNumber(): api_commons_omnichannel_pb.WhatsAppNumber | undefined;
  setWhatsappNumber(value?: api_commons_omnichannel_pb.WhatsAppNumber): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWhatsAppNumberRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWhatsAppNumberRes): UpdateWhatsAppNumberRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateWhatsAppNumberRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWhatsAppNumberRes;
  static deserializeBinaryFromReader(message: UpdateWhatsAppNumberRes, reader: jspb.BinaryReader): UpdateWhatsAppNumberRes;
}

export namespace UpdateWhatsAppNumberRes {
  export type AsObject = {
    whatsappNumber?: api_commons_omnichannel_pb.WhatsAppNumber.AsObject,
  }
}

