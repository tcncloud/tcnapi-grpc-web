// package: api.v0alpha
// file: api/v0alpha/emailapi.proto

import * as jspb from "google-protobuf";
import * as api_commons_email_pb from "../../api/commons/email_pb";
import * as api_commons_omnichannel_pb from "../../api/commons/omnichannel_pb";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class CustomUnsubscribeSettingsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomUnsubscribeSettingsReq.AsObject;
  static toObject(includeInstance: boolean, msg: CustomUnsubscribeSettingsReq): CustomUnsubscribeSettingsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomUnsubscribeSettingsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomUnsubscribeSettingsReq;
  static deserializeBinaryFromReader(message: CustomUnsubscribeSettingsReq, reader: jspb.BinaryReader): CustomUnsubscribeSettingsReq;
}

export namespace CustomUnsubscribeSettingsReq {
  export type AsObject = {
  }
}

export class CustomUnsubscribeSettingsRes extends jspb.Message {
  getEmailUseCustomUnsubscribeLinks(): boolean;
  setEmailUseCustomUnsubscribeLinks(value: boolean): void;

  getEmailClientAcknowledgesThatTheyAreResponsibleForOptOuts(): boolean;
  setEmailClientAcknowledgesThatTheyAreResponsibleForOptOuts(value: boolean): void;

  getEmailDefaultUnsubscribeLink(): boolean;
  setEmailDefaultUnsubscribeLink(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomUnsubscribeSettingsRes.AsObject;
  static toObject(includeInstance: boolean, msg: CustomUnsubscribeSettingsRes): CustomUnsubscribeSettingsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomUnsubscribeSettingsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomUnsubscribeSettingsRes;
  static deserializeBinaryFromReader(message: CustomUnsubscribeSettingsRes, reader: jspb.BinaryReader): CustomUnsubscribeSettingsRes;
}

export namespace CustomUnsubscribeSettingsRes {
  export type AsObject = {
    emailUseCustomUnsubscribeLinks: boolean,
    emailClientAcknowledgesThatTheyAreResponsibleForOptOuts: boolean,
    emailDefaultUnsubscribeLink: boolean,
  }
}

export class CreateEmailTemplateReq extends jspb.Message {
  getEmailSubject(): string;
  setEmailSubject(value: string): void;

  getEmailBody(): string;
  setEmailBody(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEmailTemplateReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEmailTemplateReq): CreateEmailTemplateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEmailTemplateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEmailTemplateReq;
  static deserializeBinaryFromReader(message: CreateEmailTemplateReq, reader: jspb.BinaryReader): CreateEmailTemplateReq;
}

export namespace CreateEmailTemplateReq {
  export type AsObject = {
    emailSubject: string,
    emailBody: string,
  }
}

export class CreateEmailTemplateRes extends jspb.Message {
  getEmailTemplateSid(): number;
  setEmailTemplateSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEmailTemplateRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEmailTemplateRes): CreateEmailTemplateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEmailTemplateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEmailTemplateRes;
  static deserializeBinaryFromReader(message: CreateEmailTemplateRes, reader: jspb.BinaryReader): CreateEmailTemplateRes;
}

export namespace CreateEmailTemplateRes {
  export type AsObject = {
    emailTemplateSid: number,
  }
}

export class UpdateEmailTemplateReq extends jspb.Message {
  getEmailTemplateSid(): number;
  setEmailTemplateSid(value: number): void;

  getEmailSubject(): string;
  setEmailSubject(value: string): void;

  getEmailBody(): string;
  setEmailBody(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEmailTemplateReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEmailTemplateReq): UpdateEmailTemplateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEmailTemplateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEmailTemplateReq;
  static deserializeBinaryFromReader(message: UpdateEmailTemplateReq, reader: jspb.BinaryReader): UpdateEmailTemplateReq;
}

export namespace UpdateEmailTemplateReq {
  export type AsObject = {
    emailTemplateSid: number,
    emailSubject: string,
    emailBody: string,
  }
}

export class UpdateEmailTemplateRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEmailTemplateRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEmailTemplateRes): UpdateEmailTemplateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEmailTemplateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEmailTemplateRes;
  static deserializeBinaryFromReader(message: UpdateEmailTemplateRes, reader: jspb.BinaryReader): UpdateEmailTemplateRes;
}

export namespace UpdateEmailTemplateRes {
  export type AsObject = {
    result: boolean,
  }
}

export class DeleteEmailTemplateReq extends jspb.Message {
  getEmailTemplateSid(): number;
  setEmailTemplateSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEmailTemplateReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEmailTemplateReq): DeleteEmailTemplateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEmailTemplateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEmailTemplateReq;
  static deserializeBinaryFromReader(message: DeleteEmailTemplateReq, reader: jspb.BinaryReader): DeleteEmailTemplateReq;
}

export namespace DeleteEmailTemplateReq {
  export type AsObject = {
    emailTemplateSid: number,
  }
}

export class DeleteEmailTemplateRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEmailTemplateRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEmailTemplateRes): DeleteEmailTemplateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEmailTemplateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEmailTemplateRes;
  static deserializeBinaryFromReader(message: DeleteEmailTemplateRes, reader: jspb.BinaryReader): DeleteEmailTemplateRes;
}

export namespace DeleteEmailTemplateRes {
  export type AsObject = {
    result: boolean,
  }
}

export class EmailTemplateDetails extends jspb.Message {
  getEmailTemplateSid(): number;
  setEmailTemplateSid(value: number): void;

  getEmailSubject(): string;
  setEmailSubject(value: string): void;

  getEmailBody(): string;
  setEmailBody(value: string): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailTemplateDetails.AsObject;
  static toObject(includeInstance: boolean, msg: EmailTemplateDetails): EmailTemplateDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailTemplateDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailTemplateDetails;
  static deserializeBinaryFromReader(message: EmailTemplateDetails, reader: jspb.BinaryReader): EmailTemplateDetails;
}

export namespace EmailTemplateDetails {
  export type AsObject = {
    emailTemplateSid: number,
    emailSubject: string,
    emailBody: string,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class EmailGroupStatusReq extends jspb.Message {
  getStatusId(): number;
  setStatusId(value: number): void;

  clearEmailGroupIdsList(): void;
  getEmailGroupIdsList(): Array<string>;
  setEmailGroupIdsList(value: Array<string>): void;
  addEmailGroupIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailGroupStatusReq.AsObject;
  static toObject(includeInstance: boolean, msg: EmailGroupStatusReq): EmailGroupStatusReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailGroupStatusReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailGroupStatusReq;
  static deserializeBinaryFromReader(message: EmailGroupStatusReq, reader: jspb.BinaryReader): EmailGroupStatusReq;
}

export namespace EmailGroupStatusReq {
  export type AsObject = {
    statusId: number,
    emailGroupIdsList: Array<string>,
  }
}

export class EmailGroupStatusRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailGroupStatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: EmailGroupStatusRes): EmailGroupStatusRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailGroupStatusRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailGroupStatusRes;
  static deserializeBinaryFromReader(message: EmailGroupStatusRes, reader: jspb.BinaryReader): EmailGroupStatusRes;
}

export namespace EmailGroupStatusRes {
  export type AsObject = {
    result: boolean,
  }
}

export class EmailGroupSendsPerMinuteReq extends jspb.Message {
  getEmailGroupSid(): number;
  setEmailGroupSid(value: number): void;

  getSendsPerMinute(): number;
  setSendsPerMinute(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailGroupSendsPerMinuteReq.AsObject;
  static toObject(includeInstance: boolean, msg: EmailGroupSendsPerMinuteReq): EmailGroupSendsPerMinuteReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailGroupSendsPerMinuteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailGroupSendsPerMinuteReq;
  static deserializeBinaryFromReader(message: EmailGroupSendsPerMinuteReq, reader: jspb.BinaryReader): EmailGroupSendsPerMinuteReq;
}

export namespace EmailGroupSendsPerMinuteReq {
  export type AsObject = {
    emailGroupSid: number,
    sendsPerMinute: number,
  }
}

export class EmailGroupSendsPerMinuteRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailGroupSendsPerMinuteRes.AsObject;
  static toObject(includeInstance: boolean, msg: EmailGroupSendsPerMinuteRes): EmailGroupSendsPerMinuteRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailGroupSendsPerMinuteRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailGroupSendsPerMinuteRes;
  static deserializeBinaryFromReader(message: EmailGroupSendsPerMinuteRes, reader: jspb.BinaryReader): EmailGroupSendsPerMinuteRes;
}

export namespace EmailGroupSendsPerMinuteRes {
  export type AsObject = {
    result: boolean,
  }
}

export class EmailGroupScheduleTimesReq extends jspb.Message {
  getEmailGroupSid(): number;
  setEmailGroupSid(value: number): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStopTime(): boolean;
  clearStopTime(): void;
  getStopTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStopTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailGroupScheduleTimesReq.AsObject;
  static toObject(includeInstance: boolean, msg: EmailGroupScheduleTimesReq): EmailGroupScheduleTimesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailGroupScheduleTimesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailGroupScheduleTimesReq;
  static deserializeBinaryFromReader(message: EmailGroupScheduleTimesReq, reader: jspb.BinaryReader): EmailGroupScheduleTimesReq;
}

export namespace EmailGroupScheduleTimesReq {
  export type AsObject = {
    emailGroupSid: number,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stopTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class EmailGroupScheduleTimesRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailGroupScheduleTimesRes.AsObject;
  static toObject(includeInstance: boolean, msg: EmailGroupScheduleTimesRes): EmailGroupScheduleTimesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailGroupScheduleTimesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailGroupScheduleTimesRes;
  static deserializeBinaryFromReader(message: EmailGroupScheduleTimesRes, reader: jspb.BinaryReader): EmailGroupScheduleTimesRes;
}

export namespace EmailGroupScheduleTimesRes {
  export type AsObject = {
    result: boolean,
  }
}

export class GetAllCustomUnsubscribeLinksReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllCustomUnsubscribeLinksReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllCustomUnsubscribeLinksReq): GetAllCustomUnsubscribeLinksReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllCustomUnsubscribeLinksReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllCustomUnsubscribeLinksReq;
  static deserializeBinaryFromReader(message: GetAllCustomUnsubscribeLinksReq, reader: jspb.BinaryReader): GetAllCustomUnsubscribeLinksReq;
}

export namespace GetAllCustomUnsubscribeLinksReq {
  export type AsObject = {
  }
}

export class EmailCustomUnsubscribeLink extends jspb.Message {
  getEmailCustomUnsubscribeLinkSid(): number;
  setEmailCustomUnsubscribeLinkSid(value: number): void;

  getLinkName(): string;
  setLinkName(value: string): void;

  getLinkUrl(): string;
  setLinkUrl(value: string): void;

  getValidated(): boolean;
  setValidated(value: boolean): void;

  hasDateValidated(): boolean;
  clearDateValidated(): void;
  getDateValidated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateValidated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailCustomUnsubscribeLink.AsObject;
  static toObject(includeInstance: boolean, msg: EmailCustomUnsubscribeLink): EmailCustomUnsubscribeLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailCustomUnsubscribeLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailCustomUnsubscribeLink;
  static deserializeBinaryFromReader(message: EmailCustomUnsubscribeLink, reader: jspb.BinaryReader): EmailCustomUnsubscribeLink;
}

export namespace EmailCustomUnsubscribeLink {
  export type AsObject = {
    emailCustomUnsubscribeLinkSid: number,
    linkName: string,
    linkUrl: string,
    validated: boolean,
    dateValidated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetAllCustomUnsubscribeLinksRes extends jspb.Message {
  clearEmailCustomUnsubscribeLinkList(): void;
  getEmailCustomUnsubscribeLinkList(): Array<EmailCustomUnsubscribeLink>;
  setEmailCustomUnsubscribeLinkList(value: Array<EmailCustomUnsubscribeLink>): void;
  addEmailCustomUnsubscribeLink(value?: EmailCustomUnsubscribeLink, index?: number): EmailCustomUnsubscribeLink;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllCustomUnsubscribeLinksRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllCustomUnsubscribeLinksRes): GetAllCustomUnsubscribeLinksRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllCustomUnsubscribeLinksRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllCustomUnsubscribeLinksRes;
  static deserializeBinaryFromReader(message: GetAllCustomUnsubscribeLinksRes, reader: jspb.BinaryReader): GetAllCustomUnsubscribeLinksRes;
}

export namespace GetAllCustomUnsubscribeLinksRes {
  export type AsObject = {
    emailCustomUnsubscribeLinkList: Array<EmailCustomUnsubscribeLink.AsObject>,
  }
}

export class GetAllEmailTemplatesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllEmailTemplatesReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllEmailTemplatesReq): GetAllEmailTemplatesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllEmailTemplatesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllEmailTemplatesReq;
  static deserializeBinaryFromReader(message: GetAllEmailTemplatesReq, reader: jspb.BinaryReader): GetAllEmailTemplatesReq;
}

export namespace GetAllEmailTemplatesReq {
  export type AsObject = {
  }
}

export class GetAllEmailTemplatesRes extends jspb.Message {
  clearEmailTemplateWithAttachmentsList(): void;
  getEmailTemplateWithAttachmentsList(): Array<EmailTemplateWithAttachments>;
  setEmailTemplateWithAttachmentsList(value: Array<EmailTemplateWithAttachments>): void;
  addEmailTemplateWithAttachments(value?: EmailTemplateWithAttachments, index?: number): EmailTemplateWithAttachments;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllEmailTemplatesRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllEmailTemplatesRes): GetAllEmailTemplatesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllEmailTemplatesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllEmailTemplatesRes;
  static deserializeBinaryFromReader(message: GetAllEmailTemplatesRes, reader: jspb.BinaryReader): GetAllEmailTemplatesRes;
}

export namespace GetAllEmailTemplatesRes {
  export type AsObject = {
    emailTemplateWithAttachmentsList: Array<EmailTemplateWithAttachments.AsObject>,
  }
}

export class GetEmailTemplateByTemplateSidReq extends jspb.Message {
  getEmailTemplateSid(): number;
  setEmailTemplateSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmailTemplateByTemplateSidReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmailTemplateByTemplateSidReq): GetEmailTemplateByTemplateSidReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmailTemplateByTemplateSidReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmailTemplateByTemplateSidReq;
  static deserializeBinaryFromReader(message: GetEmailTemplateByTemplateSidReq, reader: jspb.BinaryReader): GetEmailTemplateByTemplateSidReq;
}

export namespace GetEmailTemplateByTemplateSidReq {
  export type AsObject = {
    emailTemplateSid: number,
  }
}

export class EmailTemplateWithAttachments extends jspb.Message {
  getEmailTemplateSid(): number;
  setEmailTemplateSid(value: number): void;

  getEmailSubject(): string;
  setEmailSubject(value: string): void;

  getEmailBody(): string;
  setEmailBody(value: string): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearEmailTemplateAttachmentDetailsList(): void;
  getEmailTemplateAttachmentDetailsList(): Array<EmailTemplateAttachmentDetails>;
  setEmailTemplateAttachmentDetailsList(value: Array<EmailTemplateAttachmentDetails>): void;
  addEmailTemplateAttachmentDetails(value?: EmailTemplateAttachmentDetails, index?: number): EmailTemplateAttachmentDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailTemplateWithAttachments.AsObject;
  static toObject(includeInstance: boolean, msg: EmailTemplateWithAttachments): EmailTemplateWithAttachments.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailTemplateWithAttachments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailTemplateWithAttachments;
  static deserializeBinaryFromReader(message: EmailTemplateWithAttachments, reader: jspb.BinaryReader): EmailTemplateWithAttachments;
}

export namespace EmailTemplateWithAttachments {
  export type AsObject = {
    emailTemplateSid: number,
    emailSubject: string,
    emailBody: string,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    emailTemplateAttachmentDetailsList: Array<EmailTemplateAttachmentDetails.AsObject>,
  }
}

export class EmailTaskMstrDetails extends jspb.Message {
  getEmailTaskSid(): number;
  setEmailTaskSid(value: number): void;

  getEmailGroupSid(): number;
  setEmailGroupSid(value: number): void;

  getDeliveryStatus(): number;
  setDeliveryStatus(value: number): void;

  getDeliveryStatusMessage(): string;
  setDeliveryStatusMessage(value: string): void;

  getData(): string;
  setData(value: string): void;

  getCost(): number;
  setCost(value: number): void;

  hasMessageId(): boolean;
  clearMessageId(): void;
  getMessageId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMessageId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasEmailedTime(): boolean;
  clearEmailedTime(): void;
  getEmailedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEmailedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): number;
  setStatus(value: number): void;

  hasEmailColName(): boolean;
  clearEmailColName(): void;
  getEmailColName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEmailColName(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailTaskMstrDetails.AsObject;
  static toObject(includeInstance: boolean, msg: EmailTaskMstrDetails): EmailTaskMstrDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailTaskMstrDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailTaskMstrDetails;
  static deserializeBinaryFromReader(message: EmailTaskMstrDetails, reader: jspb.BinaryReader): EmailTaskMstrDetails;
}

export namespace EmailTaskMstrDetails {
  export type AsObject = {
    emailTaskSid: number,
    emailGroupSid: number,
    deliveryStatus: number,
    deliveryStatusMessage: string,
    data: string,
    cost: number,
    messageId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    emailedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: number,
    emailColName?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class EmailGroupSearchDetailsRes extends jspb.Message {
  getEmailGroupSid(): number;
  setEmailGroupSid(value: number): void;

  getEmailMessageSid(): number;
  setEmailMessageSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStopTime(): boolean;
  clearStopTime(): void;
  getStopTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStopTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSendsPerMinute(): number;
  setSendsPerMinute(value: number): void;

  getStatus(): api_commons_email_pb.EmailStatusMap[keyof api_commons_email_pb.EmailStatusMap];
  setStatus(value: api_commons_email_pb.EmailStatusMap[keyof api_commons_email_pb.EmailStatusMap]): void;

  getTotalCost(): number;
  setTotalCost(value: number): void;

  getFromAddress(): string;
  setFromAddress(value: string): void;

  hasEmailColName(): boolean;
  clearEmailColName(): void;
  getEmailColName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEmailColName(value?: google_protobuf_wrappers_pb.StringValue): void;

  getTotalScheduled(): number;
  setTotalScheduled(value: number): void;

  getTotalCompleted(): number;
  setTotalCompleted(value: number): void;

  hasContactGroupSidStr(): boolean;
  clearContactGroupSidStr(): void;
  getContactGroupSidStr(): google_protobuf_wrappers_pb.StringValue | undefined;
  setContactGroupSidStr(value?: google_protobuf_wrappers_pb.StringValue): void;

  getContactGroupSid(): number;
  setContactGroupSid(value: number): void;

  getClientName(): string;
  setClientName(value: string): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEmailGroupId(): boolean;
  clearEmailGroupId(): void;
  getEmailGroupId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEmailGroupId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasSlaTimeouts(): boolean;
  clearSlaTimeouts(): void;
  getSlaTimeouts(): api_commons_omnichannel_pb.SLATimeouts | undefined;
  setSlaTimeouts(value?: api_commons_omnichannel_pb.SLATimeouts): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailGroupSearchDetailsRes.AsObject;
  static toObject(includeInstance: boolean, msg: EmailGroupSearchDetailsRes): EmailGroupSearchDetailsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailGroupSearchDetailsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailGroupSearchDetailsRes;
  static deserializeBinaryFromReader(message: EmailGroupSearchDetailsRes, reader: jspb.BinaryReader): EmailGroupSearchDetailsRes;
}

export namespace EmailGroupSearchDetailsRes {
  export type AsObject = {
    emailGroupSid: number,
    emailMessageSid: number,
    name: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stopTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    sendsPerMinute: number,
    status: api_commons_email_pb.EmailStatusMap[keyof api_commons_email_pb.EmailStatusMap],
    totalCost: number,
    fromAddress: string,
    emailColName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    totalScheduled: number,
    totalCompleted: number,
    contactGroupSidStr?: google_protobuf_wrappers_pb.StringValue.AsObject,
    contactGroupSid: number,
    clientName: string,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    emailGroupId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description: string,
    slaTimeouts?: api_commons_omnichannel_pb.SLATimeouts.AsObject,
  }
}

export class EmailGroupSearchReq extends jspb.Message {
  hasSearchFrom(): boolean;
  clearSearchFrom(): void;
  getSearchFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSearchFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasSearchTo(): boolean;
  clearSearchTo(): void;
  getSearchTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSearchTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatusStr(): string;
  setStatusStr(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailGroupSearchReq.AsObject;
  static toObject(includeInstance: boolean, msg: EmailGroupSearchReq): EmailGroupSearchReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailGroupSearchReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailGroupSearchReq;
  static deserializeBinaryFromReader(message: EmailGroupSearchReq, reader: jspb.BinaryReader): EmailGroupSearchReq;
}

export namespace EmailGroupSearchReq {
  export type AsObject = {
    searchFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    searchTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    statusStr: string,
    name: string,
  }
}

export class EmailGroupSearchRes extends jspb.Message {
  clearEmailGroupSearchDetailsResList(): void;
  getEmailGroupSearchDetailsResList(): Array<EmailGroupSearchDetailsRes>;
  setEmailGroupSearchDetailsResList(value: Array<EmailGroupSearchDetailsRes>): void;
  addEmailGroupSearchDetailsRes(value?: EmailGroupSearchDetailsRes, index?: number): EmailGroupSearchDetailsRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailGroupSearchRes.AsObject;
  static toObject(includeInstance: boolean, msg: EmailGroupSearchRes): EmailGroupSearchRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailGroupSearchRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailGroupSearchRes;
  static deserializeBinaryFromReader(message: EmailGroupSearchRes, reader: jspb.BinaryReader): EmailGroupSearchRes;
}

export namespace EmailGroupSearchRes {
  export type AsObject = {
    emailGroupSearchDetailsResList: Array<EmailGroupSearchDetailsRes.AsObject>,
  }
}

export class GetEmailGroupsByGroupSidsReq extends jspb.Message {
  clearEmailGroupSidsArrList(): void;
  getEmailGroupSidsArrList(): Array<number>;
  setEmailGroupSidsArrList(value: Array<number>): void;
  addEmailGroupSidsArr(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmailGroupsByGroupSidsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmailGroupsByGroupSidsReq): GetEmailGroupsByGroupSidsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmailGroupsByGroupSidsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmailGroupsByGroupSidsReq;
  static deserializeBinaryFromReader(message: GetEmailGroupsByGroupSidsReq, reader: jspb.BinaryReader): GetEmailGroupsByGroupSidsReq;
}

export namespace GetEmailGroupsByGroupSidsReq {
  export type AsObject = {
    emailGroupSidsArrList: Array<number>,
  }
}

export class GetEmailGroupsByGroupSidsRes extends jspb.Message {
  clearEmailGroupSearchDetailsResList(): void;
  getEmailGroupSearchDetailsResList(): Array<EmailGroupSearchDetailsRes>;
  setEmailGroupSearchDetailsResList(value: Array<EmailGroupSearchDetailsRes>): void;
  addEmailGroupSearchDetailsRes(value?: EmailGroupSearchDetailsRes, index?: number): EmailGroupSearchDetailsRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmailGroupsByGroupSidsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmailGroupsByGroupSidsRes): GetEmailGroupsByGroupSidsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmailGroupsByGroupSidsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmailGroupsByGroupSidsRes;
  static deserializeBinaryFromReader(message: GetEmailGroupsByGroupSidsRes, reader: jspb.BinaryReader): GetEmailGroupsByGroupSidsRes;
}

export namespace GetEmailGroupsByGroupSidsRes {
  export type AsObject = {
    emailGroupSearchDetailsResList: Array<EmailGroupSearchDetailsRes.AsObject>,
  }
}

export class GetEmailGroupByGroupSidReq extends jspb.Message {
  getEmailGroupSid(): number;
  setEmailGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmailGroupByGroupSidReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmailGroupByGroupSidReq): GetEmailGroupByGroupSidReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmailGroupByGroupSidReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmailGroupByGroupSidReq;
  static deserializeBinaryFromReader(message: GetEmailGroupByGroupSidReq, reader: jspb.BinaryReader): GetEmailGroupByGroupSidReq;
}

export namespace GetEmailGroupByGroupSidReq {
  export type AsObject = {
    emailGroupSid: number,
  }
}

export class EmailGroupDetailsWithAttachments extends jspb.Message {
  getEmailGroupSid(): number;
  setEmailGroupSid(value: number): void;

  getEmailMessageSid(): number;
  setEmailMessageSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStopTime(): boolean;
  clearStopTime(): void;
  getStopTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStopTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSendsPerMinute(): number;
  setSendsPerMinute(value: number): void;

  getStatus(): api_commons_email_pb.EmailStatusMap[keyof api_commons_email_pb.EmailStatusMap];
  setStatus(value: api_commons_email_pb.EmailStatusMap[keyof api_commons_email_pb.EmailStatusMap]): void;

  getTotalCost(): number;
  setTotalCost(value: number): void;

  getFromAddress(): string;
  setFromAddress(value: string): void;

  hasEmailColName(): boolean;
  clearEmailColName(): void;
  getEmailColName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEmailColName(value?: google_protobuf_wrappers_pb.StringValue): void;

  getTotalScheduled(): number;
  setTotalScheduled(value: number): void;

  getTotalCompleted(): number;
  setTotalCompleted(value: number): void;

  hasContactGroupSidStr(): boolean;
  clearContactGroupSidStr(): void;
  getContactGroupSidStr(): google_protobuf_wrappers_pb.StringValue | undefined;
  setContactGroupSidStr(value?: google_protobuf_wrappers_pb.StringValue): void;

  getContactGroupSid(): number;
  setContactGroupSid(value: number): void;

  getClientName(): string;
  setClientName(value: string): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEmailGroupId(): boolean;
  clearEmailGroupId(): void;
  getEmailGroupId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEmailGroupId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getDescription(): string;
  setDescription(value: string): void;

  getEmailSubject(): string;
  setEmailSubject(value: string): void;

  getEmailBody(): string;
  setEmailBody(value: string): void;

  clearEmailMessageAttachmentsList(): void;
  getEmailMessageAttachmentsList(): Array<EmailMessageAttachment>;
  setEmailMessageAttachmentsList(value: Array<EmailMessageAttachment>): void;
  addEmailMessageAttachments(value?: EmailMessageAttachment, index?: number): EmailMessageAttachment;

  hasSlaTimeouts(): boolean;
  clearSlaTimeouts(): void;
  getSlaTimeouts(): api_commons_omnichannel_pb.SLATimeouts | undefined;
  setSlaTimeouts(value?: api_commons_omnichannel_pb.SLATimeouts): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailGroupDetailsWithAttachments.AsObject;
  static toObject(includeInstance: boolean, msg: EmailGroupDetailsWithAttachments): EmailGroupDetailsWithAttachments.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailGroupDetailsWithAttachments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailGroupDetailsWithAttachments;
  static deserializeBinaryFromReader(message: EmailGroupDetailsWithAttachments, reader: jspb.BinaryReader): EmailGroupDetailsWithAttachments;
}

export namespace EmailGroupDetailsWithAttachments {
  export type AsObject = {
    emailGroupSid: number,
    emailMessageSid: number,
    name: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stopTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    sendsPerMinute: number,
    status: api_commons_email_pb.EmailStatusMap[keyof api_commons_email_pb.EmailStatusMap],
    totalCost: number,
    fromAddress: string,
    emailColName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    totalScheduled: number,
    totalCompleted: number,
    contactGroupSidStr?: google_protobuf_wrappers_pb.StringValue.AsObject,
    contactGroupSid: number,
    clientName: string,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    emailGroupId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description: string,
    emailSubject: string,
    emailBody: string,
    emailMessageAttachmentsList: Array<EmailMessageAttachment.AsObject>,
    slaTimeouts?: api_commons_omnichannel_pb.SLATimeouts.AsObject,
  }
}

export class GetEmailGroupByGroupIdReq extends jspb.Message {
  getEmailGroupId(): string;
  setEmailGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmailGroupByGroupIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmailGroupByGroupIdReq): GetEmailGroupByGroupIdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmailGroupByGroupIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmailGroupByGroupIdReq;
  static deserializeBinaryFromReader(message: GetEmailGroupByGroupIdReq, reader: jspb.BinaryReader): GetEmailGroupByGroupIdReq;
}

export namespace GetEmailGroupByGroupIdReq {
  export type AsObject = {
    emailGroupId: string,
  }
}

export class GetEmailTasksByGroupSidsReq extends jspb.Message {
  clearEmailGroupSidsArrList(): void;
  getEmailGroupSidsArrList(): Array<number>;
  setEmailGroupSidsArrList(value: Array<number>): void;
  addEmailGroupSidsArr(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmailTasksByGroupSidsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmailTasksByGroupSidsReq): GetEmailTasksByGroupSidsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmailTasksByGroupSidsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmailTasksByGroupSidsReq;
  static deserializeBinaryFromReader(message: GetEmailTasksByGroupSidsReq, reader: jspb.BinaryReader): GetEmailTasksByGroupSidsReq;
}

export namespace GetEmailTasksByGroupSidsReq {
  export type AsObject = {
    emailGroupSidsArrList: Array<number>,
  }
}

export class GetEmailTasksByGroupSidsRes extends jspb.Message {
  clearEmailTaskMstrDetailsList(): void;
  getEmailTaskMstrDetailsList(): Array<EmailTaskMstrDetails>;
  setEmailTaskMstrDetailsList(value: Array<EmailTaskMstrDetails>): void;
  addEmailTaskMstrDetails(value?: EmailTaskMstrDetails, index?: number): EmailTaskMstrDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmailTasksByGroupSidsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmailTasksByGroupSidsRes): GetEmailTasksByGroupSidsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmailTasksByGroupSidsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmailTasksByGroupSidsRes;
  static deserializeBinaryFromReader(message: GetEmailTasksByGroupSidsRes, reader: jspb.BinaryReader): GetEmailTasksByGroupSidsRes;
}

export namespace GetEmailTasksByGroupSidsRes {
  export type AsObject = {
    emailTaskMstrDetailsList: Array<EmailTaskMstrDetails.AsObject>,
  }
}

export class EmailTemplateAttachmentDetails extends jspb.Message {
  getEmailTemplateAttachmentSid(): number;
  setEmailTemplateAttachmentSid(value: number): void;

  getEmailTemplateSid(): number;
  setEmailTemplateSid(value: number): void;

  getFileName(): string;
  setFileName(value: string): void;

  getFileSize(): number;
  setFileSize(value: number): void;

  getContentType(): string;
  setContentType(value: string): void;

  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailTemplateAttachmentDetails.AsObject;
  static toObject(includeInstance: boolean, msg: EmailTemplateAttachmentDetails): EmailTemplateAttachmentDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailTemplateAttachmentDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailTemplateAttachmentDetails;
  static deserializeBinaryFromReader(message: EmailTemplateAttachmentDetails, reader: jspb.BinaryReader): EmailTemplateAttachmentDetails;
}

export namespace EmailTemplateAttachmentDetails {
  export type AsObject = {
    emailTemplateAttachmentSid: number,
    emailTemplateSid: number,
    fileName: string,
    fileSize: number,
    contentType: string,
    hash: string,
  }
}

export class GetAllEmailTemplateAttachmentRes extends jspb.Message {
  clearEmailTemplateAttachmentDetailsList(): void;
  getEmailTemplateAttachmentDetailsList(): Array<EmailTemplateAttachmentDetails>;
  setEmailTemplateAttachmentDetailsList(value: Array<EmailTemplateAttachmentDetails>): void;
  addEmailTemplateAttachmentDetails(value?: EmailTemplateAttachmentDetails, index?: number): EmailTemplateAttachmentDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllEmailTemplateAttachmentRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllEmailTemplateAttachmentRes): GetAllEmailTemplateAttachmentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllEmailTemplateAttachmentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllEmailTemplateAttachmentRes;
  static deserializeBinaryFromReader(message: GetAllEmailTemplateAttachmentRes, reader: jspb.BinaryReader): GetAllEmailTemplateAttachmentRes;
}

export namespace GetAllEmailTemplateAttachmentRes {
  export type AsObject = {
    emailTemplateAttachmentDetailsList: Array<EmailTemplateAttachmentDetails.AsObject>,
  }
}

export class CreateEmailTemplateAttachmentReq extends jspb.Message {
  getEmailTemplateSid(): number;
  setEmailTemplateSid(value: number): void;

  getFileName(): string;
  setFileName(value: string): void;

  getFileSize(): number;
  setFileSize(value: number): void;

  getContentType(): string;
  setContentType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEmailTemplateAttachmentReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEmailTemplateAttachmentReq): CreateEmailTemplateAttachmentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEmailTemplateAttachmentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEmailTemplateAttachmentReq;
  static deserializeBinaryFromReader(message: CreateEmailTemplateAttachmentReq, reader: jspb.BinaryReader): CreateEmailTemplateAttachmentReq;
}

export namespace CreateEmailTemplateAttachmentReq {
  export type AsObject = {
    emailTemplateSid: number,
    fileName: string,
    fileSize: number,
    contentType: string,
  }
}

export class CreateEmailTemplateAttachmentRes extends jspb.Message {
  getEmailTemplateAttachmentSid(): number;
  setEmailTemplateAttachmentSid(value: number): void;

  getUrlPath(): string;
  setUrlPath(value: string): void;

  getGsPath(): string;
  setGsPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEmailTemplateAttachmentRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEmailTemplateAttachmentRes): CreateEmailTemplateAttachmentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEmailTemplateAttachmentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEmailTemplateAttachmentRes;
  static deserializeBinaryFromReader(message: CreateEmailTemplateAttachmentRes, reader: jspb.BinaryReader): CreateEmailTemplateAttachmentRes;
}

export namespace CreateEmailTemplateAttachmentRes {
  export type AsObject = {
    emailTemplateAttachmentSid: number,
    urlPath: string,
    gsPath: string,
  }
}

export class CopyEmailTemplateWithAttachmentsReq extends jspb.Message {
  getEmailTemplateSid(): number;
  setEmailTemplateSid(value: number): void;

  getEmailBody(): string;
  setEmailBody(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyEmailTemplateWithAttachmentsReq.AsObject;
  static toObject(includeInstance: boolean, msg: CopyEmailTemplateWithAttachmentsReq): CopyEmailTemplateWithAttachmentsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyEmailTemplateWithAttachmentsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyEmailTemplateWithAttachmentsReq;
  static deserializeBinaryFromReader(message: CopyEmailTemplateWithAttachmentsReq, reader: jspb.BinaryReader): CopyEmailTemplateWithAttachmentsReq;
}

export namespace CopyEmailTemplateWithAttachmentsReq {
  export type AsObject = {
    emailTemplateSid: number,
    emailBody: string,
  }
}

export class CopyEmailTemplateWithAttachmentsRes extends jspb.Message {
  getEmailTemplateSid(): number;
  setEmailTemplateSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyEmailTemplateWithAttachmentsRes.AsObject;
  static toObject(includeInstance: boolean, msg: CopyEmailTemplateWithAttachmentsRes): CopyEmailTemplateWithAttachmentsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyEmailTemplateWithAttachmentsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyEmailTemplateWithAttachmentsRes;
  static deserializeBinaryFromReader(message: CopyEmailTemplateWithAttachmentsRes, reader: jspb.BinaryReader): CopyEmailTemplateWithAttachmentsRes;
}

export namespace CopyEmailTemplateWithAttachmentsRes {
  export type AsObject = {
    emailTemplateSid: number,
  }
}

export class GetEmailMessageReq extends jspb.Message {
  getEmailMessageSid(): number;
  setEmailMessageSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmailMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmailMessageReq): GetEmailMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmailMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmailMessageReq;
  static deserializeBinaryFromReader(message: GetEmailMessageReq, reader: jspb.BinaryReader): GetEmailMessageReq;
}

export namespace GetEmailMessageReq {
  export type AsObject = {
    emailMessageSid: number,
  }
}

export class GetEmailMessageRes extends jspb.Message {
  getEmailMessageSid(): number;
  setEmailMessageSid(value: number): void;

  getEmailSubject(): string;
  setEmailSubject(value: string): void;

  getEmailBody(): string;
  setEmailBody(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmailMessageRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmailMessageRes): GetEmailMessageRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmailMessageRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmailMessageRes;
  static deserializeBinaryFromReader(message: GetEmailMessageRes, reader: jspb.BinaryReader): GetEmailMessageRes;
}

export namespace GetEmailMessageRes {
  export type AsObject = {
    emailMessageSid: number,
    emailSubject: string,
    emailBody: string,
  }
}

export class ScheduleReq extends jspb.Message {
  getEmailTemplateSid(): number;
  setEmailTemplateSid(value: number): void;

  getInitialPace(): number;
  setInitialPace(value: number): void;

  getSelectedEmailCol(): string;
  setSelectedEmailCol(value: string): void;

  getFromAddress(): string;
  setFromAddress(value: string): void;

  getAllowDuplicates(): boolean;
  setAllowDuplicates(value: boolean): void;

  getGroupName(): string;
  setGroupName(value: string): void;

  getContactGroupSid(): number;
  setContactGroupSid(value: number): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStopTime(): boolean;
  clearStopTime(): void;
  getStopTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStopTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasProjectId(): boolean;
  clearProjectId(): void;
  getProjectId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProjectId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleReq.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleReq): ScheduleReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleReq;
  static deserializeBinaryFromReader(message: ScheduleReq, reader: jspb.BinaryReader): ScheduleReq;
}

export namespace ScheduleReq {
  export type AsObject = {
    emailTemplateSid: number,
    initialPace: number,
    selectedEmailCol: string,
    fromAddress: string,
    allowDuplicates: boolean,
    groupName: string,
    contactGroupSid: number,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stopTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    projectId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description: string,
  }
}

export class ScheduleRes extends jspb.Message {
  getEmailGroupSid(): number;
  setEmailGroupSid(value: number): void;

  getEmailGroupId(): string;
  setEmailGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleRes.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleRes): ScheduleRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleRes;
  static deserializeBinaryFromReader(message: ScheduleRes, reader: jspb.BinaryReader): ScheduleRes;
}

export namespace ScheduleRes {
  export type AsObject = {
    emailGroupSid: number,
    emailGroupId: string,
  }
}

export class ScheduleOutboundEmailGroupReq extends jspb.Message {
  getInitialPace(): number;
  setInitialPace(value: number): void;

  getSelectedEmailCol(): string;
  setSelectedEmailCol(value: string): void;

  getFromAddress(): string;
  setFromAddress(value: string): void;

  getAllowDuplicates(): boolean;
  setAllowDuplicates(value: boolean): void;

  getGroupName(): string;
  setGroupName(value: string): void;

  getContactGroupSid(): number;
  setContactGroupSid(value: number): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStopTime(): boolean;
  clearStopTime(): void;
  getStopTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStopTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasProjectId(): boolean;
  clearProjectId(): void;
  getProjectId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProjectId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getDescription(): string;
  setDescription(value: string): void;

  getEmailSubject(): string;
  setEmailSubject(value: string): void;

  getEmailBody(): string;
  setEmailBody(value: string): void;

  clearEmailMessageAttachmentSidsList(): void;
  getEmailMessageAttachmentSidsList(): Array<number>;
  setEmailMessageAttachmentSidsList(value: Array<number>): void;
  addEmailMessageAttachmentSids(value: number, index?: number): number;

  hasSlaTimeouts(): boolean;
  clearSlaTimeouts(): void;
  getSlaTimeouts(): api_commons_omnichannel_pb.SLATimeouts | undefined;
  setSlaTimeouts(value?: api_commons_omnichannel_pb.SLATimeouts): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleOutboundEmailGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleOutboundEmailGroupReq): ScheduleOutboundEmailGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleOutboundEmailGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleOutboundEmailGroupReq;
  static deserializeBinaryFromReader(message: ScheduleOutboundEmailGroupReq, reader: jspb.BinaryReader): ScheduleOutboundEmailGroupReq;
}

export namespace ScheduleOutboundEmailGroupReq {
  export type AsObject = {
    initialPace: number,
    selectedEmailCol: string,
    fromAddress: string,
    allowDuplicates: boolean,
    groupName: string,
    contactGroupSid: number,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stopTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    projectId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description: string,
    emailSubject: string,
    emailBody: string,
    emailMessageAttachmentSidsList: Array<number>,
    slaTimeouts?: api_commons_omnichannel_pb.SLATimeouts.AsObject,
  }
}

export class ScheduleOutboundEmailGroupRes extends jspb.Message {
  getEmailGroupSid(): number;
  setEmailGroupSid(value: number): void;

  getEmailGroupId(): string;
  setEmailGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleOutboundEmailGroupRes.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleOutboundEmailGroupRes): ScheduleOutboundEmailGroupRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleOutboundEmailGroupRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleOutboundEmailGroupRes;
  static deserializeBinaryFromReader(message: ScheduleOutboundEmailGroupRes, reader: jspb.BinaryReader): ScheduleOutboundEmailGroupRes;
}

export namespace ScheduleOutboundEmailGroupRes {
  export type AsObject = {
    emailGroupSid: number,
    emailGroupId: string,
  }
}

export class EmailMessageDetails extends jspb.Message {
  getEmailMessageSid(): number;
  setEmailMessageSid(value: number): void;

  getEmailSubject(): string;
  setEmailSubject(value: string): void;

  getEmailBody(): string;
  setEmailBody(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailMessageDetails.AsObject;
  static toObject(includeInstance: boolean, msg: EmailMessageDetails): EmailMessageDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailMessageDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailMessageDetails;
  static deserializeBinaryFromReader(message: EmailMessageDetails, reader: jspb.BinaryReader): EmailMessageDetails;
}

export namespace EmailMessageDetails {
  export type AsObject = {
    emailMessageSid: number,
    emailSubject: string,
    emailBody: string,
  }
}

export class ConnectedInbox extends jspb.Message {
  hasConnectedInboxId(): boolean;
  clearConnectedInboxId(): void;
  getConnectedInboxId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConnectedInboxId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getEmailAddress(): string;
  setEmailAddress(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getCheckFrequencyMinutes(): number;
  setCheckFrequencyMinutes(value: number): void;

  getServerName(): string;
  setServerName(value: string): void;

  getServerPort(): number;
  setServerPort(value: number): void;

  hasLastScheduledTime(): boolean;
  clearLastScheduledTime(): void;
  getLastScheduledTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastScheduledTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastChecked(): boolean;
  clearLastChecked(): void;
  getLastChecked(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastChecked(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPurgeThreshold(): number;
  setPurgeThreshold(value: number): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getNumConsecutiveFailures(): number;
  setNumConsecutiveFailures(value: number): void;

  hasLastError(): boolean;
  clearLastError(): void;
  getLastError(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLastError(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasStandbyErrorTime(): boolean;
  clearStandbyErrorTime(): void;
  getStandbyErrorTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStandbyErrorTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMaxMessageSize(): number;
  setMaxMessageSize(value: number): void;

  getMaxMessages(): number;
  setMaxMessages(value: number): void;

  getMessageCount(): number;
  setMessageCount(value: number): void;

  getAuthenticationType(): api_commons_omnichannel_pb.ConnectedInboxAuthenticationTypeMap[keyof api_commons_omnichannel_pb.ConnectedInboxAuthenticationTypeMap];
  setAuthenticationType(value: api_commons_omnichannel_pb.ConnectedInboxAuthenticationTypeMap[keyof api_commons_omnichannel_pb.ConnectedInboxAuthenticationTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectedInbox.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectedInbox): ConnectedInbox.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectedInbox, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectedInbox;
  static deserializeBinaryFromReader(message: ConnectedInbox, reader: jspb.BinaryReader): ConnectedInbox;
}

export namespace ConnectedInbox {
  export type AsObject = {
    connectedInboxId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    emailAddress: string,
    username: string,
    password: string,
    checkFrequencyMinutes: number,
    serverName: string,
    serverPort: number,
    lastScheduledTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastChecked?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    purgeThreshold: number,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    numConsecutiveFailures: number,
    lastError?: google_protobuf_wrappers_pb.StringValue.AsObject,
    standbyErrorTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    maxMessageSize: number,
    maxMessages: number,
    messageCount: number,
    authenticationType: api_commons_omnichannel_pb.ConnectedInboxAuthenticationTypeMap[keyof api_commons_omnichannel_pb.ConnectedInboxAuthenticationTypeMap],
  }
}

export class CreateInboundEmailTemplateReq extends jspb.Message {
  getConnectedInboxId(): string;
  setConnectedInboxId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasSkills(): boolean;
  clearSkills(): void;
  getSkills(): EmailConversationSkills | undefined;
  setSkills(value?: EmailConversationSkills): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInboundEmailTemplateReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInboundEmailTemplateReq): CreateInboundEmailTemplateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateInboundEmailTemplateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInboundEmailTemplateReq;
  static deserializeBinaryFromReader(message: CreateInboundEmailTemplateReq, reader: jspb.BinaryReader): CreateInboundEmailTemplateReq;
}

export namespace CreateInboundEmailTemplateReq {
  export type AsObject = {
    connectedInboxId: string,
    name: string,
    skills?: EmailConversationSkills.AsObject,
  }
}

export class EmailConversationSkills extends jspb.Message {
  getSkillsMap(): jspb.Map<string, boolean>;
  clearSkillsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailConversationSkills.AsObject;
  static toObject(includeInstance: boolean, msg: EmailConversationSkills): EmailConversationSkills.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailConversationSkills, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailConversationSkills;
  static deserializeBinaryFromReader(message: EmailConversationSkills, reader: jspb.BinaryReader): EmailConversationSkills;
}

export namespace EmailConversationSkills {
  export type AsObject = {
    skillsMap: Array<[string, boolean]>,
  }
}

export class CreateInboundEmailTemplateRes extends jspb.Message {
  hasInboundEmailTemplateId(): boolean;
  clearInboundEmailTemplateId(): void;
  getInboundEmailTemplateId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setInboundEmailTemplateId(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInboundEmailTemplateRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInboundEmailTemplateRes): CreateInboundEmailTemplateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateInboundEmailTemplateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInboundEmailTemplateRes;
  static deserializeBinaryFromReader(message: CreateInboundEmailTemplateRes, reader: jspb.BinaryReader): CreateInboundEmailTemplateRes;
}

export namespace CreateInboundEmailTemplateRes {
  export type AsObject = {
    inboundEmailTemplateId?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class UpdateInboundEmailTemplateReq extends jspb.Message {
  getInboundEmailTemplateId(): string;
  setInboundEmailTemplateId(value: string): void;

  getConnectedInboxId(): string;
  setConnectedInboxId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasSkills(): boolean;
  clearSkills(): void;
  getSkills(): EmailConversationSkills | undefined;
  setSkills(value?: EmailConversationSkills): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInboundEmailTemplateReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInboundEmailTemplateReq): UpdateInboundEmailTemplateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateInboundEmailTemplateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInboundEmailTemplateReq;
  static deserializeBinaryFromReader(message: UpdateInboundEmailTemplateReq, reader: jspb.BinaryReader): UpdateInboundEmailTemplateReq;
}

export namespace UpdateInboundEmailTemplateReq {
  export type AsObject = {
    inboundEmailTemplateId: string,
    connectedInboxId: string,
    name: string,
    skills?: EmailConversationSkills.AsObject,
  }
}

export class UpdateInboundEmailTemplateRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInboundEmailTemplateRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInboundEmailTemplateRes): UpdateInboundEmailTemplateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateInboundEmailTemplateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInboundEmailTemplateRes;
  static deserializeBinaryFromReader(message: UpdateInboundEmailTemplateRes, reader: jspb.BinaryReader): UpdateInboundEmailTemplateRes;
}

export namespace UpdateInboundEmailTemplateRes {
  export type AsObject = {
    result: boolean,
  }
}

export class DeleteInboundEmailTemplateByIdReq extends jspb.Message {
  getInboundEmailTemplateId(): string;
  setInboundEmailTemplateId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInboundEmailTemplateByIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInboundEmailTemplateByIdReq): DeleteInboundEmailTemplateByIdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteInboundEmailTemplateByIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInboundEmailTemplateByIdReq;
  static deserializeBinaryFromReader(message: DeleteInboundEmailTemplateByIdReq, reader: jspb.BinaryReader): DeleteInboundEmailTemplateByIdReq;
}

export namespace DeleteInboundEmailTemplateByIdReq {
  export type AsObject = {
    inboundEmailTemplateId: string,
  }
}

export class DeleteInboundEmailTemplateByIdRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInboundEmailTemplateByIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInboundEmailTemplateByIdRes): DeleteInboundEmailTemplateByIdRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteInboundEmailTemplateByIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInboundEmailTemplateByIdRes;
  static deserializeBinaryFromReader(message: DeleteInboundEmailTemplateByIdRes, reader: jspb.BinaryReader): DeleteInboundEmailTemplateByIdRes;
}

export namespace DeleteInboundEmailTemplateByIdRes {
  export type AsObject = {
    result: boolean,
  }
}

export class InboundEmailTemplate extends jspb.Message {
  hasInboundEmailTemplateId(): boolean;
  clearInboundEmailTemplateId(): void;
  getInboundEmailTemplateId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setInboundEmailTemplateId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasConnectedInboxId(): boolean;
  clearConnectedInboxId(): void;
  getConnectedInboxId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConnectedInboxId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getName(): string;
  setName(value: string): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasSkills(): boolean;
  clearSkills(): void;
  getSkills(): EmailConversationSkills | undefined;
  setSkills(value?: EmailConversationSkills): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InboundEmailTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: InboundEmailTemplate): InboundEmailTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InboundEmailTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InboundEmailTemplate;
  static deserializeBinaryFromReader(message: InboundEmailTemplate, reader: jspb.BinaryReader): InboundEmailTemplate;
}

export namespace InboundEmailTemplate {
  export type AsObject = {
    inboundEmailTemplateId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    connectedInboxId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    name: string,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    skills?: EmailConversationSkills.AsObject,
  }
}

export class ListInboundEmailTemplatesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInboundEmailTemplatesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListInboundEmailTemplatesReq): ListInboundEmailTemplatesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInboundEmailTemplatesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInboundEmailTemplatesReq;
  static deserializeBinaryFromReader(message: ListInboundEmailTemplatesReq, reader: jspb.BinaryReader): ListInboundEmailTemplatesReq;
}

export namespace ListInboundEmailTemplatesReq {
  export type AsObject = {
  }
}

export class ListInboundEmailTemplatesRes extends jspb.Message {
  clearInboundEmailTemplateList(): void;
  getInboundEmailTemplateList(): Array<InboundEmailTemplate>;
  setInboundEmailTemplateList(value: Array<InboundEmailTemplate>): void;
  addInboundEmailTemplate(value?: InboundEmailTemplate, index?: number): InboundEmailTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInboundEmailTemplatesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListInboundEmailTemplatesRes): ListInboundEmailTemplatesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInboundEmailTemplatesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInboundEmailTemplatesRes;
  static deserializeBinaryFromReader(message: ListInboundEmailTemplatesRes, reader: jspb.BinaryReader): ListInboundEmailTemplatesRes;
}

export namespace ListInboundEmailTemplatesRes {
  export type AsObject = {
    inboundEmailTemplateList: Array<InboundEmailTemplate.AsObject>,
  }
}

export class GetInboundEmailTemplateByIdReq extends jspb.Message {
  getInboundEmailTemplateId(): string;
  setInboundEmailTemplateId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInboundEmailTemplateByIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetInboundEmailTemplateByIdReq): GetInboundEmailTemplateByIdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInboundEmailTemplateByIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInboundEmailTemplateByIdReq;
  static deserializeBinaryFromReader(message: GetInboundEmailTemplateByIdReq, reader: jspb.BinaryReader): GetInboundEmailTemplateByIdReq;
}

export namespace GetInboundEmailTemplateByIdReq {
  export type AsObject = {
    inboundEmailTemplateId: string,
  }
}

export class UpdateInboundEmailGroupStatusReq extends jspb.Message {
  getInboundEmailGroupId(): string;
  setInboundEmailGroupId(value: string): void;

  getStatus(): api_commons_email_pb.EmailIBGroupStatusMap[keyof api_commons_email_pb.EmailIBGroupStatusMap];
  setStatus(value: api_commons_email_pb.EmailIBGroupStatusMap[keyof api_commons_email_pb.EmailIBGroupStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInboundEmailGroupStatusReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInboundEmailGroupStatusReq): UpdateInboundEmailGroupStatusReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateInboundEmailGroupStatusReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInboundEmailGroupStatusReq;
  static deserializeBinaryFromReader(message: UpdateInboundEmailGroupStatusReq, reader: jspb.BinaryReader): UpdateInboundEmailGroupStatusReq;
}

export namespace UpdateInboundEmailGroupStatusReq {
  export type AsObject = {
    inboundEmailGroupId: string,
    status: api_commons_email_pb.EmailIBGroupStatusMap[keyof api_commons_email_pb.EmailIBGroupStatusMap],
  }
}

export class UpdateInboundEmailGroupStatusRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInboundEmailGroupStatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInboundEmailGroupStatusRes): UpdateInboundEmailGroupStatusRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateInboundEmailGroupStatusRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInboundEmailGroupStatusRes;
  static deserializeBinaryFromReader(message: UpdateInboundEmailGroupStatusRes, reader: jspb.BinaryReader): UpdateInboundEmailGroupStatusRes;
}

export namespace UpdateInboundEmailGroupStatusRes {
  export type AsObject = {
    result: boolean,
  }
}

export class StopInboundEmailGroupReq extends jspb.Message {
  getInboundEmailGroupId(): string;
  setInboundEmailGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopInboundEmailGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: StopInboundEmailGroupReq): StopInboundEmailGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopInboundEmailGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopInboundEmailGroupReq;
  static deserializeBinaryFromReader(message: StopInboundEmailGroupReq, reader: jspb.BinaryReader): StopInboundEmailGroupReq;
}

export namespace StopInboundEmailGroupReq {
  export type AsObject = {
    inboundEmailGroupId: string,
  }
}

export class StopInboundEmailGroupRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopInboundEmailGroupRes.AsObject;
  static toObject(includeInstance: boolean, msg: StopInboundEmailGroupRes): StopInboundEmailGroupRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopInboundEmailGroupRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopInboundEmailGroupRes;
  static deserializeBinaryFromReader(message: StopInboundEmailGroupRes, reader: jspb.BinaryReader): StopInboundEmailGroupRes;
}

export namespace StopInboundEmailGroupRes {
  export type AsObject = {
    result: boolean,
  }
}

export class StopAllInboundEmailGroupsReq extends jspb.Message {
  clearInboundEmailGroupIdsList(): void;
  getInboundEmailGroupIdsList(): Array<string>;
  setInboundEmailGroupIdsList(value: Array<string>): void;
  addInboundEmailGroupIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopAllInboundEmailGroupsReq.AsObject;
  static toObject(includeInstance: boolean, msg: StopAllInboundEmailGroupsReq): StopAllInboundEmailGroupsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopAllInboundEmailGroupsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopAllInboundEmailGroupsReq;
  static deserializeBinaryFromReader(message: StopAllInboundEmailGroupsReq, reader: jspb.BinaryReader): StopAllInboundEmailGroupsReq;
}

export namespace StopAllInboundEmailGroupsReq {
  export type AsObject = {
    inboundEmailGroupIdsList: Array<string>,
  }
}

export class StopAllOutboundEmailGroupsReq extends jspb.Message {
  clearOutboundEmailGroupIdsList(): void;
  getOutboundEmailGroupIdsList(): Array<string>;
  setOutboundEmailGroupIdsList(value: Array<string>): void;
  addOutboundEmailGroupIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopAllOutboundEmailGroupsReq.AsObject;
  static toObject(includeInstance: boolean, msg: StopAllOutboundEmailGroupsReq): StopAllOutboundEmailGroupsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopAllOutboundEmailGroupsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopAllOutboundEmailGroupsReq;
  static deserializeBinaryFromReader(message: StopAllOutboundEmailGroupsReq, reader: jspb.BinaryReader): StopAllOutboundEmailGroupsReq;
}

export namespace StopAllOutboundEmailGroupsReq {
  export type AsObject = {
    outboundEmailGroupIdsList: Array<string>,
  }
}

export class StopAllOutboundEmailGroupsRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopAllOutboundEmailGroupsRes.AsObject;
  static toObject(includeInstance: boolean, msg: StopAllOutboundEmailGroupsRes): StopAllOutboundEmailGroupsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopAllOutboundEmailGroupsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopAllOutboundEmailGroupsRes;
  static deserializeBinaryFromReader(message: StopAllOutboundEmailGroupsRes, reader: jspb.BinaryReader): StopAllOutboundEmailGroupsRes;
}

export namespace StopAllOutboundEmailGroupsRes {
  export type AsObject = {
    result: boolean,
  }
}

export class InboundEmailGroup extends jspb.Message {
  hasInboundEmailGroupId(): boolean;
  clearInboundEmailGroupId(): void;
  getInboundEmailGroupId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setInboundEmailGroupId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasConnectedInboxId(): boolean;
  clearConnectedInboxId(): void;
  getConnectedInboxId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConnectedInboxId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getStatus(): api_commons_email_pb.EmailIBGroupStatusMap[keyof api_commons_email_pb.EmailIBGroupStatusMap];
  setStatus(value: api_commons_email_pb.EmailIBGroupStatusMap[keyof api_commons_email_pb.EmailIBGroupStatusMap]): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStopTime(): boolean;
  clearStopTime(): void;
  getStopTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStopTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTotalCost(): number;
  setTotalCost(value: number): void;

  getName(): string;
  setName(value: string): void;

  getMessageCount(): number;
  setMessageCount(value: number): void;

  hasInboundEmailTemplateId(): boolean;
  clearInboundEmailTemplateId(): void;
  getInboundEmailTemplateId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setInboundEmailTemplateId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getTodaysMessageCount(): number;
  setTodaysMessageCount(value: number): void;

  hasSkills(): boolean;
  clearSkills(): void;
  getSkills(): EmailConversationSkills | undefined;
  setSkills(value?: EmailConversationSkills): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasSlaTimeouts(): boolean;
  clearSlaTimeouts(): void;
  getSlaTimeouts(): api_commons_omnichannel_pb.SLATimeouts | undefined;
  setSlaTimeouts(value?: api_commons_omnichannel_pb.SLATimeouts): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InboundEmailGroup.AsObject;
  static toObject(includeInstance: boolean, msg: InboundEmailGroup): InboundEmailGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InboundEmailGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InboundEmailGroup;
  static deserializeBinaryFromReader(message: InboundEmailGroup, reader: jspb.BinaryReader): InboundEmailGroup;
}

export namespace InboundEmailGroup {
  export type AsObject = {
    inboundEmailGroupId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    connectedInboxId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    status: api_commons_email_pb.EmailIBGroupStatusMap[keyof api_commons_email_pb.EmailIBGroupStatusMap],
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stopTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    totalCost: number,
    name: string,
    messageCount: number,
    inboundEmailTemplateId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    todaysMessageCount: number,
    skills?: EmailConversationSkills.AsObject,
    description: string,
    slaTimeouts?: api_commons_omnichannel_pb.SLATimeouts.AsObject,
  }
}

export class PureInboundEmailGroup extends jspb.Message {
  hasInboundEmailGroupId(): boolean;
  clearInboundEmailGroupId(): void;
  getInboundEmailGroupId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setInboundEmailGroupId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasConnectedInboxId(): boolean;
  clearConnectedInboxId(): void;
  getConnectedInboxId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConnectedInboxId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getStatus(): api_commons_email_pb.EmailIBGroupStatusMap[keyof api_commons_email_pb.EmailIBGroupStatusMap];
  setStatus(value: api_commons_email_pb.EmailIBGroupStatusMap[keyof api_commons_email_pb.EmailIBGroupStatusMap]): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStopTime(): boolean;
  clearStopTime(): void;
  getStopTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStopTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTotalCost(): number;
  setTotalCost(value: number): void;

  getName(): string;
  setName(value: string): void;

  getMessageCount(): number;
  setMessageCount(value: number): void;

  hasInboundEmailTemplateId(): boolean;
  clearInboundEmailTemplateId(): void;
  getInboundEmailTemplateId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setInboundEmailTemplateId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getTodaysMessageCount(): number;
  setTodaysMessageCount(value: number): void;

  hasSkills(): boolean;
  clearSkills(): void;
  getSkills(): EmailConversationSkills | undefined;
  setSkills(value?: EmailConversationSkills): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PureInboundEmailGroup.AsObject;
  static toObject(includeInstance: boolean, msg: PureInboundEmailGroup): PureInboundEmailGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PureInboundEmailGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PureInboundEmailGroup;
  static deserializeBinaryFromReader(message: PureInboundEmailGroup, reader: jspb.BinaryReader): PureInboundEmailGroup;
}

export namespace PureInboundEmailGroup {
  export type AsObject = {
    inboundEmailGroupId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    connectedInboxId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    status: api_commons_email_pb.EmailIBGroupStatusMap[keyof api_commons_email_pb.EmailIBGroupStatusMap],
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stopTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    totalCost: number,
    name: string,
    messageCount: number,
    inboundEmailTemplateId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    todaysMessageCount: number,
    skills?: EmailConversationSkills.AsObject,
    description: string,
  }
}

export class PureInboundEmailGroupSearchReq extends jspb.Message {
  hasSearchFrom(): boolean;
  clearSearchFrom(): void;
  getSearchFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSearchFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasSearchTo(): boolean;
  clearSearchTo(): void;
  getSearchTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSearchTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatusStr(): string;
  setStatusStr(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PureInboundEmailGroupSearchReq.AsObject;
  static toObject(includeInstance: boolean, msg: PureInboundEmailGroupSearchReq): PureInboundEmailGroupSearchReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PureInboundEmailGroupSearchReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PureInboundEmailGroupSearchReq;
  static deserializeBinaryFromReader(message: PureInboundEmailGroupSearchReq, reader: jspb.BinaryReader): PureInboundEmailGroupSearchReq;
}

export namespace PureInboundEmailGroupSearchReq {
  export type AsObject = {
    searchFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    searchTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    statusStr: string,
    name: string,
  }
}

export class PureInboundEmailGroupSearchRes extends jspb.Message {
  clearPureInboundEmailGroupList(): void;
  getPureInboundEmailGroupList(): Array<PureInboundEmailGroup>;
  setPureInboundEmailGroupList(value: Array<PureInboundEmailGroup>): void;
  addPureInboundEmailGroup(value?: PureInboundEmailGroup, index?: number): PureInboundEmailGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PureInboundEmailGroupSearchRes.AsObject;
  static toObject(includeInstance: boolean, msg: PureInboundEmailGroupSearchRes): PureInboundEmailGroupSearchRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PureInboundEmailGroupSearchRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PureInboundEmailGroupSearchRes;
  static deserializeBinaryFromReader(message: PureInboundEmailGroupSearchRes, reader: jspb.BinaryReader): PureInboundEmailGroupSearchRes;
}

export namespace PureInboundEmailGroupSearchRes {
  export type AsObject = {
    pureInboundEmailGroupList: Array<PureInboundEmailGroup.AsObject>,
  }
}

export class InboundEmailGroupSearchReq extends jspb.Message {
  hasSearchFrom(): boolean;
  clearSearchFrom(): void;
  getSearchFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSearchFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasSearchTo(): boolean;
  clearSearchTo(): void;
  getSearchTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSearchTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatusStr(): string;
  setStatusStr(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InboundEmailGroupSearchReq.AsObject;
  static toObject(includeInstance: boolean, msg: InboundEmailGroupSearchReq): InboundEmailGroupSearchReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InboundEmailGroupSearchReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InboundEmailGroupSearchReq;
  static deserializeBinaryFromReader(message: InboundEmailGroupSearchReq, reader: jspb.BinaryReader): InboundEmailGroupSearchReq;
}

export namespace InboundEmailGroupSearchReq {
  export type AsObject = {
    searchFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    searchTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    statusStr: string,
    name: string,
  }
}

export class InboundEmailGroupSearchRes extends jspb.Message {
  clearInboundEmailGroupList(): void;
  getInboundEmailGroupList(): Array<InboundEmailGroup>;
  setInboundEmailGroupList(value: Array<InboundEmailGroup>): void;
  addInboundEmailGroup(value?: InboundEmailGroup, index?: number): InboundEmailGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InboundEmailGroupSearchRes.AsObject;
  static toObject(includeInstance: boolean, msg: InboundEmailGroupSearchRes): InboundEmailGroupSearchRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InboundEmailGroupSearchRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InboundEmailGroupSearchRes;
  static deserializeBinaryFromReader(message: InboundEmailGroupSearchRes, reader: jspb.BinaryReader): InboundEmailGroupSearchRes;
}

export namespace InboundEmailGroupSearchRes {
  export type AsObject = {
    inboundEmailGroupList: Array<InboundEmailGroup.AsObject>,
  }
}

export class ListInboundEmailGroupsByGroupIdsReq extends jspb.Message {
  clearInboundEmailGroupIdsArrList(): void;
  getInboundEmailGroupIdsArrList(): Array<string>;
  setInboundEmailGroupIdsArrList(value: Array<string>): void;
  addInboundEmailGroupIdsArr(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInboundEmailGroupsByGroupIdsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListInboundEmailGroupsByGroupIdsReq): ListInboundEmailGroupsByGroupIdsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInboundEmailGroupsByGroupIdsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInboundEmailGroupsByGroupIdsReq;
  static deserializeBinaryFromReader(message: ListInboundEmailGroupsByGroupIdsReq, reader: jspb.BinaryReader): ListInboundEmailGroupsByGroupIdsReq;
}

export namespace ListInboundEmailGroupsByGroupIdsReq {
  export type AsObject = {
    inboundEmailGroupIdsArrList: Array<string>,
  }
}

export class ListInboundEmailGroupsByGroupIdsRes extends jspb.Message {
  clearInboundEmailGroupList(): void;
  getInboundEmailGroupList(): Array<InboundEmailGroup>;
  setInboundEmailGroupList(value: Array<InboundEmailGroup>): void;
  addInboundEmailGroup(value?: InboundEmailGroup, index?: number): InboundEmailGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInboundEmailGroupsByGroupIdsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListInboundEmailGroupsByGroupIdsRes): ListInboundEmailGroupsByGroupIdsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInboundEmailGroupsByGroupIdsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInboundEmailGroupsByGroupIdsRes;
  static deserializeBinaryFromReader(message: ListInboundEmailGroupsByGroupIdsRes, reader: jspb.BinaryReader): ListInboundEmailGroupsByGroupIdsRes;
}

export namespace ListInboundEmailGroupsByGroupIdsRes {
  export type AsObject = {
    inboundEmailGroupList: Array<InboundEmailGroup.AsObject>,
  }
}

export class InboundEmailTaskDetails extends jspb.Message {
  hasEmailMessageReplyId(): boolean;
  clearEmailMessageReplyId(): void;
  getEmailMessageReplyId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEmailMessageReplyId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getFromAddress(): string;
  setFromAddress(value: string): void;

  getToAddress(): string;
  setToAddress(value: string): void;

  getSubject(): string;
  setSubject(value: string): void;

  hasReceivedTime(): boolean;
  clearReceivedTime(): void;
  getReceivedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReceivedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasInboundEmailGroupId(): boolean;
  clearInboundEmailGroupId(): void;
  getInboundEmailGroupId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setInboundEmailGroupId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getCost(): number;
  setCost(value: number): void;

  getStatus(): api_commons_email_pb.EmailIBReplyStatusMap[keyof api_commons_email_pb.EmailIBReplyStatusMap];
  setStatus(value: api_commons_email_pb.EmailIBReplyStatusMap[keyof api_commons_email_pb.EmailIBReplyStatusMap]): void;

  hasMessageId(): boolean;
  clearMessageId(): void;
  getMessageId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMessageId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasEmailConversationId(): boolean;
  clearEmailConversationId(): void;
  getEmailConversationId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEmailConversationId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getRawDataLocation(): string;
  setRawDataLocation(value: string): void;

  hasEmailTaskSid(): boolean;
  clearEmailTaskSid(): void;
  getEmailTaskSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setEmailTaskSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getReplyType(): api_commons_email_pb.EmailIBReplyTypeMap[keyof api_commons_email_pb.EmailIBReplyTypeMap];
  setReplyType(value: api_commons_email_pb.EmailIBReplyTypeMap[keyof api_commons_email_pb.EmailIBReplyTypeMap]): void;

  hasDeliveryStatus(): boolean;
  clearDeliveryStatus(): void;
  getDeliveryStatus(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setDeliveryStatus(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasDeliveryStatusMessage(): boolean;
  clearDeliveryStatusMessage(): void;
  getDeliveryStatusMessage(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDeliveryStatusMessage(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearEmailMessageReplyAttachmentList(): void;
  getEmailMessageReplyAttachmentList(): Array<EmailMessageReplyAttachment>;
  setEmailMessageReplyAttachmentList(value: Array<EmailMessageReplyAttachment>): void;
  addEmailMessageReplyAttachment(value?: EmailMessageReplyAttachment, index?: number): EmailMessageReplyAttachment;

  hasUserId(): boolean;
  clearUserId(): void;
  getUserId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUserId(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InboundEmailTaskDetails.AsObject;
  static toObject(includeInstance: boolean, msg: InboundEmailTaskDetails): InboundEmailTaskDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InboundEmailTaskDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InboundEmailTaskDetails;
  static deserializeBinaryFromReader(message: InboundEmailTaskDetails, reader: jspb.BinaryReader): InboundEmailTaskDetails;
}

export namespace InboundEmailTaskDetails {
  export type AsObject = {
    emailMessageReplyId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    fromAddress: string,
    toAddress: string,
    subject: string,
    receivedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    message: string,
    inboundEmailGroupId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    cost: number,
    status: api_commons_email_pb.EmailIBReplyStatusMap[keyof api_commons_email_pb.EmailIBReplyStatusMap],
    messageId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    emailConversationId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    rawDataLocation: string,
    emailTaskSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    replyType: api_commons_email_pb.EmailIBReplyTypeMap[keyof api_commons_email_pb.EmailIBReplyTypeMap],
    deliveryStatus?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    deliveryStatusMessage?: google_protobuf_wrappers_pb.StringValue.AsObject,
    emailMessageReplyAttachmentList: Array<EmailMessageReplyAttachment.AsObject>,
    userId?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ListInboundEmailTasksByGroupIdsReq extends jspb.Message {
  clearInboundEmailGroupIdsArrList(): void;
  getInboundEmailGroupIdsArrList(): Array<string>;
  setInboundEmailGroupIdsArrList(value: Array<string>): void;
  addInboundEmailGroupIdsArr(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInboundEmailTasksByGroupIdsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListInboundEmailTasksByGroupIdsReq): ListInboundEmailTasksByGroupIdsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInboundEmailTasksByGroupIdsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInboundEmailTasksByGroupIdsReq;
  static deserializeBinaryFromReader(message: ListInboundEmailTasksByGroupIdsReq, reader: jspb.BinaryReader): ListInboundEmailTasksByGroupIdsReq;
}

export namespace ListInboundEmailTasksByGroupIdsReq {
  export type AsObject = {
    inboundEmailGroupIdsArrList: Array<string>,
  }
}

export class ListInboundEmailTasksByGroupIdsRes extends jspb.Message {
  clearInboundEmailTaskDetailsList(): void;
  getInboundEmailTaskDetailsList(): Array<InboundEmailTaskDetails>;
  setInboundEmailTaskDetailsList(value: Array<InboundEmailTaskDetails>): void;
  addInboundEmailTaskDetails(value?: InboundEmailTaskDetails, index?: number): InboundEmailTaskDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInboundEmailTasksByGroupIdsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListInboundEmailTasksByGroupIdsRes): ListInboundEmailTasksByGroupIdsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInboundEmailTasksByGroupIdsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInboundEmailTasksByGroupIdsRes;
  static deserializeBinaryFromReader(message: ListInboundEmailTasksByGroupIdsRes, reader: jspb.BinaryReader): ListInboundEmailTasksByGroupIdsRes;
}

export namespace ListInboundEmailTasksByGroupIdsRes {
  export type AsObject = {
    inboundEmailTaskDetailsList: Array<InboundEmailTaskDetails.AsObject>,
  }
}

export class InboundEmailGroupByIdReq extends jspb.Message {
  getInboundEmailGroupId(): string;
  setInboundEmailGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InboundEmailGroupByIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: InboundEmailGroupByIdReq): InboundEmailGroupByIdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InboundEmailGroupByIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InboundEmailGroupByIdReq;
  static deserializeBinaryFromReader(message: InboundEmailGroupByIdReq, reader: jspb.BinaryReader): InboundEmailGroupByIdReq;
}

export namespace InboundEmailGroupByIdReq {
  export type AsObject = {
    inboundEmailGroupId: string,
  }
}

export class DownloadInboundEmailAttachmentReq extends jspb.Message {
  getEmailMessageReplyId(): string;
  setEmailMessageReplyId(value: string): void;

  getEmailMessageReplyAttachmentId(): string;
  setEmailMessageReplyAttachmentId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadInboundEmailAttachmentReq.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadInboundEmailAttachmentReq): DownloadInboundEmailAttachmentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadInboundEmailAttachmentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadInboundEmailAttachmentReq;
  static deserializeBinaryFromReader(message: DownloadInboundEmailAttachmentReq, reader: jspb.BinaryReader): DownloadInboundEmailAttachmentReq;
}

export namespace DownloadInboundEmailAttachmentReq {
  export type AsObject = {
    emailMessageReplyId: string,
    emailMessageReplyAttachmentId: string,
  }
}

export class DownloadInboundEmailAttachmentRes extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getFileName(): string;
  setFileName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadInboundEmailAttachmentRes.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadInboundEmailAttachmentRes): DownloadInboundEmailAttachmentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadInboundEmailAttachmentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadInboundEmailAttachmentRes;
  static deserializeBinaryFromReader(message: DownloadInboundEmailAttachmentRes, reader: jspb.BinaryReader): DownloadInboundEmailAttachmentRes;
}

export namespace DownloadInboundEmailAttachmentRes {
  export type AsObject = {
    url: string,
    fileName: string,
  }
}

export class DeleteEmailTemplateAttachmentByIdReq extends jspb.Message {
  getEmailTemplateAttachmentSid(): number;
  setEmailTemplateAttachmentSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEmailTemplateAttachmentByIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEmailTemplateAttachmentByIdReq): DeleteEmailTemplateAttachmentByIdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEmailTemplateAttachmentByIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEmailTemplateAttachmentByIdReq;
  static deserializeBinaryFromReader(message: DeleteEmailTemplateAttachmentByIdReq, reader: jspb.BinaryReader): DeleteEmailTemplateAttachmentByIdReq;
}

export namespace DeleteEmailTemplateAttachmentByIdReq {
  export type AsObject = {
    emailTemplateAttachmentSid: number,
  }
}

export class DeleteEmailTemplateAttachmentByIdRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEmailTemplateAttachmentByIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEmailTemplateAttachmentByIdRes): DeleteEmailTemplateAttachmentByIdRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEmailTemplateAttachmentByIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEmailTemplateAttachmentByIdRes;
  static deserializeBinaryFromReader(message: DeleteEmailTemplateAttachmentByIdRes, reader: jspb.BinaryReader): DeleteEmailTemplateAttachmentByIdRes;
}

export namespace DeleteEmailTemplateAttachmentByIdRes {
  export type AsObject = {
    result: boolean,
  }
}

export class UpdateEmailTemplateAttachmentReq extends jspb.Message {
  getEmailTemplateSid(): number;
  setEmailTemplateSid(value: number): void;

  getEmailTemplateAttachmentSid(): number;
  setEmailTemplateAttachmentSid(value: number): void;

  getFileName(): string;
  setFileName(value: string): void;

  getFileSize(): number;
  setFileSize(value: number): void;

  getContentType(): string;
  setContentType(value: string): void;

  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEmailTemplateAttachmentReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEmailTemplateAttachmentReq): UpdateEmailTemplateAttachmentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEmailTemplateAttachmentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEmailTemplateAttachmentReq;
  static deserializeBinaryFromReader(message: UpdateEmailTemplateAttachmentReq, reader: jspb.BinaryReader): UpdateEmailTemplateAttachmentReq;
}

export namespace UpdateEmailTemplateAttachmentReq {
  export type AsObject = {
    emailTemplateSid: number,
    emailTemplateAttachmentSid: number,
    fileName: string,
    fileSize: number,
    contentType: string,
    hash: string,
  }
}

export class UpdateEmailTemplateAttachmentRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEmailTemplateAttachmentRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEmailTemplateAttachmentRes): UpdateEmailTemplateAttachmentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEmailTemplateAttachmentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEmailTemplateAttachmentRes;
  static deserializeBinaryFromReader(message: UpdateEmailTemplateAttachmentRes, reader: jspb.BinaryReader): UpdateEmailTemplateAttachmentRes;
}

export namespace UpdateEmailTemplateAttachmentRes {
  export type AsObject = {
    result: boolean,
  }
}

export class ListActiveInboundEmailGroupsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListActiveInboundEmailGroupsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListActiveInboundEmailGroupsReq): ListActiveInboundEmailGroupsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListActiveInboundEmailGroupsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListActiveInboundEmailGroupsReq;
  static deserializeBinaryFromReader(message: ListActiveInboundEmailGroupsReq, reader: jspb.BinaryReader): ListActiveInboundEmailGroupsReq;
}

export namespace ListActiveInboundEmailGroupsReq {
  export type AsObject = {
  }
}

export class ListActiveInboundEmailGroupsRes extends jspb.Message {
  clearInboundEmailGroupList(): void;
  getInboundEmailGroupList(): Array<InboundEmailGroup>;
  setInboundEmailGroupList(value: Array<InboundEmailGroup>): void;
  addInboundEmailGroup(value?: InboundEmailGroup, index?: number): InboundEmailGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListActiveInboundEmailGroupsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListActiveInboundEmailGroupsRes): ListActiveInboundEmailGroupsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListActiveInboundEmailGroupsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListActiveInboundEmailGroupsRes;
  static deserializeBinaryFromReader(message: ListActiveInboundEmailGroupsRes, reader: jspb.BinaryReader): ListActiveInboundEmailGroupsRes;
}

export namespace ListActiveInboundEmailGroupsRes {
  export type AsObject = {
    inboundEmailGroupList: Array<InboundEmailGroup.AsObject>,
  }
}

export class EmailMessageReply extends jspb.Message {
  hasEmailMessageReplyId(): boolean;
  clearEmailMessageReplyId(): void;
  getEmailMessageReplyId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEmailMessageReplyId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getFromAddress(): string;
  setFromAddress(value: string): void;

  getToAddress(): string;
  setToAddress(value: string): void;

  getSubject(): string;
  setSubject(value: string): void;

  hasReceivedTime(): boolean;
  clearReceivedTime(): void;
  getReceivedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReceivedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasEmailTaskSid(): boolean;
  clearEmailTaskSid(): void;
  getEmailTaskSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setEmailTaskSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasInboundEmailGroupId(): boolean;
  clearInboundEmailGroupId(): void;
  getInboundEmailGroupId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setInboundEmailGroupId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getStatus(): api_commons_email_pb.EmailIBReplyStatusMap[keyof api_commons_email_pb.EmailIBReplyStatusMap];
  setStatus(value: api_commons_email_pb.EmailIBReplyStatusMap[keyof api_commons_email_pb.EmailIBReplyStatusMap]): void;

  getCost(): number;
  setCost(value: number): void;

  hasMessageId(): boolean;
  clearMessageId(): void;
  getMessageId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMessageId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasEmailConversationId(): boolean;
  clearEmailConversationId(): void;
  getEmailConversationId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEmailConversationId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getRawDataLocation(): string;
  setRawDataLocation(value: string): void;

  getReplyType(): api_commons_email_pb.EmailIBReplyTypeMap[keyof api_commons_email_pb.EmailIBReplyTypeMap];
  setReplyType(value: api_commons_email_pb.EmailIBReplyTypeMap[keyof api_commons_email_pb.EmailIBReplyTypeMap]): void;

  hasDeliveryStatus(): boolean;
  clearDeliveryStatus(): void;
  getDeliveryStatus(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setDeliveryStatus(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasDeliveryStatusMessage(): boolean;
  clearDeliveryStatusMessage(): void;
  getDeliveryStatusMessage(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDeliveryStatusMessage(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasUserId(): boolean;
  clearUserId(): void;
  getUserId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUserId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailMessageReply.AsObject;
  static toObject(includeInstance: boolean, msg: EmailMessageReply): EmailMessageReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailMessageReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailMessageReply;
  static deserializeBinaryFromReader(message: EmailMessageReply, reader: jspb.BinaryReader): EmailMessageReply;
}

export namespace EmailMessageReply {
  export type AsObject = {
    emailMessageReplyId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    fromAddress: string,
    toAddress: string,
    subject: string,
    receivedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    message: string,
    emailTaskSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    inboundEmailGroupId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    status: api_commons_email_pb.EmailIBReplyStatusMap[keyof api_commons_email_pb.EmailIBReplyStatusMap],
    cost: number,
    messageId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    emailConversationId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    rawDataLocation: string,
    replyType: api_commons_email_pb.EmailIBReplyTypeMap[keyof api_commons_email_pb.EmailIBReplyTypeMap],
    deliveryStatus?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    deliveryStatusMessage?: google_protobuf_wrappers_pb.StringValue.AsObject,
    userId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    name: string,
  }
}

export class EmailMessageReplyAttachment extends jspb.Message {
  hasEmailMessageReplyAttachmentId(): boolean;
  clearEmailMessageReplyAttachmentId(): void;
  getEmailMessageReplyAttachmentId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEmailMessageReplyAttachmentId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasEmailMessageReplyId(): boolean;
  clearEmailMessageReplyId(): void;
  getEmailMessageReplyId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEmailMessageReplyId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getFileName(): string;
  setFileName(value: string): void;

  getFileSize(): number;
  setFileSize(value: number): void;

  getContentType(): string;
  setContentType(value: string): void;

  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailMessageReplyAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: EmailMessageReplyAttachment): EmailMessageReplyAttachment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailMessageReplyAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailMessageReplyAttachment;
  static deserializeBinaryFromReader(message: EmailMessageReplyAttachment, reader: jspb.BinaryReader): EmailMessageReplyAttachment;
}

export namespace EmailMessageReplyAttachment {
  export type AsObject = {
    emailMessageReplyAttachmentId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    emailMessageReplyId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    fileName: string,
    fileSize: number,
    contentType: string,
    hash: string,
  }
}

export class ListEmailMessageReplyAttachmentsByReplyIdReq extends jspb.Message {
  getEmailMessageReplyId(): string;
  setEmailMessageReplyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEmailMessageReplyAttachmentsByReplyIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListEmailMessageReplyAttachmentsByReplyIdReq): ListEmailMessageReplyAttachmentsByReplyIdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListEmailMessageReplyAttachmentsByReplyIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEmailMessageReplyAttachmentsByReplyIdReq;
  static deserializeBinaryFromReader(message: ListEmailMessageReplyAttachmentsByReplyIdReq, reader: jspb.BinaryReader): ListEmailMessageReplyAttachmentsByReplyIdReq;
}

export namespace ListEmailMessageReplyAttachmentsByReplyIdReq {
  export type AsObject = {
    emailMessageReplyId: string,
  }
}

export class ListEmailMessageReplyAttachmentsByReplyIdRes extends jspb.Message {
  clearEmailMessageReplyAttachmentList(): void;
  getEmailMessageReplyAttachmentList(): Array<EmailMessageReplyAttachment>;
  setEmailMessageReplyAttachmentList(value: Array<EmailMessageReplyAttachment>): void;
  addEmailMessageReplyAttachment(value?: EmailMessageReplyAttachment, index?: number): EmailMessageReplyAttachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEmailMessageReplyAttachmentsByReplyIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListEmailMessageReplyAttachmentsByReplyIdRes): ListEmailMessageReplyAttachmentsByReplyIdRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListEmailMessageReplyAttachmentsByReplyIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEmailMessageReplyAttachmentsByReplyIdRes;
  static deserializeBinaryFromReader(message: ListEmailMessageReplyAttachmentsByReplyIdRes, reader: jspb.BinaryReader): ListEmailMessageReplyAttachmentsByReplyIdRes;
}

export namespace ListEmailMessageReplyAttachmentsByReplyIdRes {
  export type AsObject = {
    emailMessageReplyAttachmentList: Array<EmailMessageReplyAttachment.AsObject>,
  }
}

export class InboundEmailGroupReplyAttachments extends jspb.Message {
  hasEmailMessageReply(): boolean;
  clearEmailMessageReply(): void;
  getEmailMessageReply(): EmailMessageReply | undefined;
  setEmailMessageReply(value?: EmailMessageReply): void;

  clearEmailMessageReplyAttachmentList(): void;
  getEmailMessageReplyAttachmentList(): Array<EmailMessageReplyAttachment>;
  setEmailMessageReplyAttachmentList(value: Array<EmailMessageReplyAttachment>): void;
  addEmailMessageReplyAttachment(value?: EmailMessageReplyAttachment, index?: number): EmailMessageReplyAttachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InboundEmailGroupReplyAttachments.AsObject;
  static toObject(includeInstance: boolean, msg: InboundEmailGroupReplyAttachments): InboundEmailGroupReplyAttachments.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InboundEmailGroupReplyAttachments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InboundEmailGroupReplyAttachments;
  static deserializeBinaryFromReader(message: InboundEmailGroupReplyAttachments, reader: jspb.BinaryReader): InboundEmailGroupReplyAttachments;
}

export namespace InboundEmailGroupReplyAttachments {
  export type AsObject = {
    emailMessageReply?: EmailMessageReply.AsObject,
    emailMessageReplyAttachmentList: Array<EmailMessageReplyAttachment.AsObject>,
  }
}

export class ListInboundEmailGroupReplyAttachmentsByIdRes extends jspb.Message {
  hasInboundEmailGroup(): boolean;
  clearInboundEmailGroup(): void;
  getInboundEmailGroup(): InboundEmailGroup | undefined;
  setInboundEmailGroup(value?: InboundEmailGroup): void;

  clearInboundEmailGroupReplyAttachmentsList(): void;
  getInboundEmailGroupReplyAttachmentsList(): Array<InboundEmailGroupReplyAttachments>;
  setInboundEmailGroupReplyAttachmentsList(value: Array<InboundEmailGroupReplyAttachments>): void;
  addInboundEmailGroupReplyAttachments(value?: InboundEmailGroupReplyAttachments, index?: number): InboundEmailGroupReplyAttachments;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInboundEmailGroupReplyAttachmentsByIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListInboundEmailGroupReplyAttachmentsByIdRes): ListInboundEmailGroupReplyAttachmentsByIdRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInboundEmailGroupReplyAttachmentsByIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInboundEmailGroupReplyAttachmentsByIdRes;
  static deserializeBinaryFromReader(message: ListInboundEmailGroupReplyAttachmentsByIdRes, reader: jspb.BinaryReader): ListInboundEmailGroupReplyAttachmentsByIdRes;
}

export namespace ListInboundEmailGroupReplyAttachmentsByIdRes {
  export type AsObject = {
    inboundEmailGroup?: InboundEmailGroup.AsObject,
    inboundEmailGroupReplyAttachmentsList: Array<InboundEmailGroupReplyAttachments.AsObject>,
  }
}

export class SchedulePureInboundEmailReq extends jspb.Message {
  getInboundEmailTemplateId(): string;
  setInboundEmailTemplateId(value: string): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStopTime(): boolean;
  clearStopTime(): void;
  getStopTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStopTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getGroupName(): string;
  setGroupName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchedulePureInboundEmailReq.AsObject;
  static toObject(includeInstance: boolean, msg: SchedulePureInboundEmailReq): SchedulePureInboundEmailReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SchedulePureInboundEmailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchedulePureInboundEmailReq;
  static deserializeBinaryFromReader(message: SchedulePureInboundEmailReq, reader: jspb.BinaryReader): SchedulePureInboundEmailReq;
}

export namespace SchedulePureInboundEmailReq {
  export type AsObject = {
    inboundEmailTemplateId: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stopTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    groupName: string,
    description: string,
  }
}

export class SchedulePureInboundEmailRes extends jspb.Message {
  getInboundEmailGroupId(): string;
  setInboundEmailGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchedulePureInboundEmailRes.AsObject;
  static toObject(includeInstance: boolean, msg: SchedulePureInboundEmailRes): SchedulePureInboundEmailRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SchedulePureInboundEmailRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchedulePureInboundEmailRes;
  static deserializeBinaryFromReader(message: SchedulePureInboundEmailRes, reader: jspb.BinaryReader): SchedulePureInboundEmailRes;
}

export namespace SchedulePureInboundEmailRes {
  export type AsObject = {
    inboundEmailGroupId: string,
  }
}

export class CreateEmailMessageAgentReplyReq extends jspb.Message {
  getToAddress(): string;
  setToAddress(value: string): void;

  getSubject(): string;
  setSubject(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getInboundEmailGroupId(): string;
  setInboundEmailGroupId(value: string): void;

  getEmailConversationId(): string;
  setEmailConversationId(value: string): void;

  clearAttachmentIdsList(): void;
  getAttachmentIdsList(): Array<string>;
  setAttachmentIdsList(value: Array<string>): void;
  addAttachmentIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEmailMessageAgentReplyReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEmailMessageAgentReplyReq): CreateEmailMessageAgentReplyReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEmailMessageAgentReplyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEmailMessageAgentReplyReq;
  static deserializeBinaryFromReader(message: CreateEmailMessageAgentReplyReq, reader: jspb.BinaryReader): CreateEmailMessageAgentReplyReq;
}

export namespace CreateEmailMessageAgentReplyReq {
  export type AsObject = {
    toAddress: string,
    subject: string,
    content: string,
    inboundEmailGroupId: string,
    emailConversationId: string,
    attachmentIdsList: Array<string>,
  }
}

export class CreateEmailMessageAgentReplyAttachmentReq extends jspb.Message {
  getFileName(): string;
  setFileName(value: string): void;

  getFileSize(): number;
  setFileSize(value: number): void;

  getFileType(): string;
  setFileType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEmailMessageAgentReplyAttachmentReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEmailMessageAgentReplyAttachmentReq): CreateEmailMessageAgentReplyAttachmentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEmailMessageAgentReplyAttachmentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEmailMessageAgentReplyAttachmentReq;
  static deserializeBinaryFromReader(message: CreateEmailMessageAgentReplyAttachmentReq, reader: jspb.BinaryReader): CreateEmailMessageAgentReplyAttachmentReq;
}

export namespace CreateEmailMessageAgentReplyAttachmentReq {
  export type AsObject = {
    fileName: string,
    fileSize: number,
    fileType: string,
  }
}

export class CreateEmailMessageAgentReplyAttachmentRes extends jspb.Message {
  getEmailMessageReplyAttachmentId(): string;
  setEmailMessageReplyAttachmentId(value: string): void;

  getUrlPath(): string;
  setUrlPath(value: string): void;

  getGsPath(): string;
  setGsPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEmailMessageAgentReplyAttachmentRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEmailMessageAgentReplyAttachmentRes): CreateEmailMessageAgentReplyAttachmentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEmailMessageAgentReplyAttachmentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEmailMessageAgentReplyAttachmentRes;
  static deserializeBinaryFromReader(message: CreateEmailMessageAgentReplyAttachmentRes, reader: jspb.BinaryReader): CreateEmailMessageAgentReplyAttachmentRes;
}

export namespace CreateEmailMessageAgentReplyAttachmentRes {
  export type AsObject = {
    emailMessageReplyAttachmentId: string,
    urlPath: string,
    gsPath: string,
  }
}

export class SendReplyReq extends jspb.Message {
  getEmailMessageReplyId(): string;
  setEmailMessageReplyId(value: string): void;

  getInReplyTo(): string;
  setInReplyTo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendReplyReq.AsObject;
  static toObject(includeInstance: boolean, msg: SendReplyReq): SendReplyReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendReplyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendReplyReq;
  static deserializeBinaryFromReader(message: SendReplyReq, reader: jspb.BinaryReader): SendReplyReq;
}

export namespace SendReplyReq {
  export type AsObject = {
    emailMessageReplyId: string,
    inReplyTo: string,
  }
}

export class ListNewEmailMessageRepliesReq extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getEmailConversationId(): string;
  setEmailConversationId(value: string): void;

  hasLastTimestamp(): boolean;
  clearLastTimestamp(): void;
  getLastTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNewEmailMessageRepliesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListNewEmailMessageRepliesReq): ListNewEmailMessageRepliesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNewEmailMessageRepliesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNewEmailMessageRepliesReq;
  static deserializeBinaryFromReader(message: ListNewEmailMessageRepliesReq, reader: jspb.BinaryReader): ListNewEmailMessageRepliesReq;
}

export namespace ListNewEmailMessageRepliesReq {
  export type AsObject = {
    userId: string,
    emailConversationId: string,
    lastTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListNewEmailMessageRepliesRes extends jspb.Message {
  clearEmailMessageRepliesWithAttachmentsList(): void;
  getEmailMessageRepliesWithAttachmentsList(): Array<EmailMessageReplyWithAttachments>;
  setEmailMessageRepliesWithAttachmentsList(value: Array<EmailMessageReplyWithAttachments>): void;
  addEmailMessageRepliesWithAttachments(value?: EmailMessageReplyWithAttachments, index?: number): EmailMessageReplyWithAttachments;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNewEmailMessageRepliesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListNewEmailMessageRepliesRes): ListNewEmailMessageRepliesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNewEmailMessageRepliesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNewEmailMessageRepliesRes;
  static deserializeBinaryFromReader(message: ListNewEmailMessageRepliesRes, reader: jspb.BinaryReader): ListNewEmailMessageRepliesRes;
}

export namespace ListNewEmailMessageRepliesRes {
  export type AsObject = {
    emailMessageRepliesWithAttachmentsList: Array<EmailMessageReplyWithAttachments.AsObject>,
  }
}

export class EmailMessageReplyWithAttachments extends jspb.Message {
  hasEmailMessageReply(): boolean;
  clearEmailMessageReply(): void;
  getEmailMessageReply(): EmailMessageReply | undefined;
  setEmailMessageReply(value?: EmailMessageReply): void;

  clearAttachmentsList(): void;
  getAttachmentsList(): Array<EmailMessageReplyAttachment>;
  setAttachmentsList(value: Array<EmailMessageReplyAttachment>): void;
  addAttachments(value?: EmailMessageReplyAttachment, index?: number): EmailMessageReplyAttachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailMessageReplyWithAttachments.AsObject;
  static toObject(includeInstance: boolean, msg: EmailMessageReplyWithAttachments): EmailMessageReplyWithAttachments.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailMessageReplyWithAttachments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailMessageReplyWithAttachments;
  static deserializeBinaryFromReader(message: EmailMessageReplyWithAttachments, reader: jspb.BinaryReader): EmailMessageReplyWithAttachments;
}

export namespace EmailMessageReplyWithAttachments {
  export type AsObject = {
    emailMessageReply?: EmailMessageReply.AsObject,
    attachmentsList: Array<EmailMessageReplyAttachment.AsObject>,
  }
}

export class SchedulePureOmniLinkInboundEmailReq extends jspb.Message {
  getGroupName(): string;
  setGroupName(value: string): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStopTime(): boolean;
  clearStopTime(): void;
  getStopTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStopTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getConnectedInboxId(): string;
  setConnectedInboxId(value: string): void;

  hasSkills(): boolean;
  clearSkills(): void;
  getSkills(): EmailConversationSkills | undefined;
  setSkills(value?: EmailConversationSkills): void;

  hasProjectId(): boolean;
  clearProjectId(): void;
  getProjectId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProjectId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasSlaTimeouts(): boolean;
  clearSlaTimeouts(): void;
  getSlaTimeouts(): api_commons_omnichannel_pb.SLATimeouts | undefined;
  setSlaTimeouts(value?: api_commons_omnichannel_pb.SLATimeouts): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchedulePureOmniLinkInboundEmailReq.AsObject;
  static toObject(includeInstance: boolean, msg: SchedulePureOmniLinkInboundEmailReq): SchedulePureOmniLinkInboundEmailReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SchedulePureOmniLinkInboundEmailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchedulePureOmniLinkInboundEmailReq;
  static deserializeBinaryFromReader(message: SchedulePureOmniLinkInboundEmailReq, reader: jspb.BinaryReader): SchedulePureOmniLinkInboundEmailReq;
}

export namespace SchedulePureOmniLinkInboundEmailReq {
  export type AsObject = {
    groupName: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stopTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    connectedInboxId: string,
    skills?: EmailConversationSkills.AsObject,
    projectId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description: string,
    slaTimeouts?: api_commons_omnichannel_pb.SLATimeouts.AsObject,
  }
}

export class SchedulePureOmniLinkInboundEmailRes extends jspb.Message {
  getInboundEmailGroupId(): string;
  setInboundEmailGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchedulePureOmniLinkInboundEmailRes.AsObject;
  static toObject(includeInstance: boolean, msg: SchedulePureOmniLinkInboundEmailRes): SchedulePureOmniLinkInboundEmailRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SchedulePureOmniLinkInboundEmailRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchedulePureOmniLinkInboundEmailRes;
  static deserializeBinaryFromReader(message: SchedulePureOmniLinkInboundEmailRes, reader: jspb.BinaryReader): SchedulePureOmniLinkInboundEmailRes;
}

export namespace SchedulePureOmniLinkInboundEmailRes {
  export type AsObject = {
    inboundEmailGroupId: string,
  }
}

export class UpdateInboundEmailGroupReq extends jspb.Message {
  getInboundEmailGroupId(): string;
  setInboundEmailGroupId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasStopTime(): boolean;
  clearStopTime(): void;
  getStopTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStopTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasSkills(): boolean;
  clearSkills(): void;
  getSkills(): EmailConversationSkills | undefined;
  setSkills(value?: EmailConversationSkills): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasSlaTimeouts(): boolean;
  clearSlaTimeouts(): void;
  getSlaTimeouts(): api_commons_omnichannel_pb.SLATimeouts | undefined;
  setSlaTimeouts(value?: api_commons_omnichannel_pb.SLATimeouts): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInboundEmailGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInboundEmailGroupReq): UpdateInboundEmailGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateInboundEmailGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInboundEmailGroupReq;
  static deserializeBinaryFromReader(message: UpdateInboundEmailGroupReq, reader: jspb.BinaryReader): UpdateInboundEmailGroupReq;
}

export namespace UpdateInboundEmailGroupReq {
  export type AsObject = {
    inboundEmailGroupId: string,
    name: string,
    stopTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    skills?: EmailConversationSkills.AsObject,
    description: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    slaTimeouts?: api_commons_omnichannel_pb.SLATimeouts.AsObject,
  }
}

export class UpdateInboundEmailGroupRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInboundEmailGroupRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInboundEmailGroupRes): UpdateInboundEmailGroupRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateInboundEmailGroupRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInboundEmailGroupRes;
  static deserializeBinaryFromReader(message: UpdateInboundEmailGroupRes, reader: jspb.BinaryReader): UpdateInboundEmailGroupRes;
}

export namespace UpdateInboundEmailGroupRes {
  export type AsObject = {
  }
}

export class UpdateOutboundEmailGroupReq extends jspb.Message {
  getEmailGroupSid(): number;
  setEmailGroupSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStopTime(): boolean;
  clearStopTime(): void;
  getStopTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStopTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasSlaTimeouts(): boolean;
  clearSlaTimeouts(): void;
  getSlaTimeouts(): api_commons_omnichannel_pb.SLATimeouts | undefined;
  setSlaTimeouts(value?: api_commons_omnichannel_pb.SLATimeouts): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOutboundEmailGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOutboundEmailGroupReq): UpdateOutboundEmailGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOutboundEmailGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOutboundEmailGroupReq;
  static deserializeBinaryFromReader(message: UpdateOutboundEmailGroupReq, reader: jspb.BinaryReader): UpdateOutboundEmailGroupReq;
}

export namespace UpdateOutboundEmailGroupReq {
  export type AsObject = {
    emailGroupSid: number,
    name: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stopTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    description: string,
    slaTimeouts?: api_commons_omnichannel_pb.SLATimeouts.AsObject,
  }
}

export class UpdateOutboundEmailGroupRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOutboundEmailGroupRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOutboundEmailGroupRes): UpdateOutboundEmailGroupRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOutboundEmailGroupRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOutboundEmailGroupRes;
  static deserializeBinaryFromReader(message: UpdateOutboundEmailGroupRes, reader: jspb.BinaryReader): UpdateOutboundEmailGroupRes;
}

export namespace UpdateOutboundEmailGroupRes {
  export type AsObject = {
  }
}

export class CreateEmailMessageAttachmentReq extends jspb.Message {
  getFileName(): string;
  setFileName(value: string): void;

  getFileSize(): number;
  setFileSize(value: number): void;

  getContentType(): string;
  setContentType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEmailMessageAttachmentReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEmailMessageAttachmentReq): CreateEmailMessageAttachmentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEmailMessageAttachmentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEmailMessageAttachmentReq;
  static deserializeBinaryFromReader(message: CreateEmailMessageAttachmentReq, reader: jspb.BinaryReader): CreateEmailMessageAttachmentReq;
}

export namespace CreateEmailMessageAttachmentReq {
  export type AsObject = {
    fileName: string,
    fileSize: number,
    contentType: string,
  }
}

export class CreateEmailMessageAttachmentRes extends jspb.Message {
  getEmailMessageAttachmentSid(): number;
  setEmailMessageAttachmentSid(value: number): void;

  getUrlPath(): string;
  setUrlPath(value: string): void;

  getGsPath(): string;
  setGsPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEmailMessageAttachmentRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEmailMessageAttachmentRes): CreateEmailMessageAttachmentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEmailMessageAttachmentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEmailMessageAttachmentRes;
  static deserializeBinaryFromReader(message: CreateEmailMessageAttachmentRes, reader: jspb.BinaryReader): CreateEmailMessageAttachmentRes;
}

export namespace CreateEmailMessageAttachmentRes {
  export type AsObject = {
    emailMessageAttachmentSid: number,
    urlPath: string,
    gsPath: string,
  }
}

export class ListEmailMessageAttachmentsReq extends jspb.Message {
  getEmailMessageSid(): number;
  setEmailMessageSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEmailMessageAttachmentsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListEmailMessageAttachmentsReq): ListEmailMessageAttachmentsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListEmailMessageAttachmentsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEmailMessageAttachmentsReq;
  static deserializeBinaryFromReader(message: ListEmailMessageAttachmentsReq, reader: jspb.BinaryReader): ListEmailMessageAttachmentsReq;
}

export namespace ListEmailMessageAttachmentsReq {
  export type AsObject = {
    emailMessageSid: number,
  }
}

export class ListEmailMessageAttachmentsRes extends jspb.Message {
  clearEmailMessageAttachmentsList(): void;
  getEmailMessageAttachmentsList(): Array<EmailMessageAttachment>;
  setEmailMessageAttachmentsList(value: Array<EmailMessageAttachment>): void;
  addEmailMessageAttachments(value?: EmailMessageAttachment, index?: number): EmailMessageAttachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEmailMessageAttachmentsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListEmailMessageAttachmentsRes): ListEmailMessageAttachmentsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListEmailMessageAttachmentsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEmailMessageAttachmentsRes;
  static deserializeBinaryFromReader(message: ListEmailMessageAttachmentsRes, reader: jspb.BinaryReader): ListEmailMessageAttachmentsRes;
}

export namespace ListEmailMessageAttachmentsRes {
  export type AsObject = {
    emailMessageAttachmentsList: Array<EmailMessageAttachment.AsObject>,
  }
}

export class EmailMessageAttachment extends jspb.Message {
  getEmailMessageAttachmentSid(): number;
  setEmailMessageAttachmentSid(value: number): void;

  getEmailMessageSid(): number;
  setEmailMessageSid(value: number): void;

  getFileName(): string;
  setFileName(value: string): void;

  getFileSize(): number;
  setFileSize(value: number): void;

  getContentType(): string;
  setContentType(value: string): void;

  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailMessageAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: EmailMessageAttachment): EmailMessageAttachment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailMessageAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailMessageAttachment;
  static deserializeBinaryFromReader(message: EmailMessageAttachment, reader: jspb.BinaryReader): EmailMessageAttachment;
}

export namespace EmailMessageAttachment {
  export type AsObject = {
    emailMessageAttachmentSid: number,
    emailMessageSid: number,
    fileName: string,
    fileSize: number,
    contentType: string,
    hash: string,
  }
}

export class UnassignCurrentUserFromEmailConversationReq extends jspb.Message {
  getEmailConversationId(): string;
  setEmailConversationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnassignCurrentUserFromEmailConversationReq.AsObject;
  static toObject(includeInstance: boolean, msg: UnassignCurrentUserFromEmailConversationReq): UnassignCurrentUserFromEmailConversationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnassignCurrentUserFromEmailConversationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnassignCurrentUserFromEmailConversationReq;
  static deserializeBinaryFromReader(message: UnassignCurrentUserFromEmailConversationReq, reader: jspb.BinaryReader): UnassignCurrentUserFromEmailConversationReq;
}

export namespace UnassignCurrentUserFromEmailConversationReq {
  export type AsObject = {
    emailConversationId: string,
  }
}

export class UnassignUserFromEmailConversationRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnassignUserFromEmailConversationRes.AsObject;
  static toObject(includeInstance: boolean, msg: UnassignUserFromEmailConversationRes): UnassignUserFromEmailConversationRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnassignUserFromEmailConversationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnassignUserFromEmailConversationRes;
  static deserializeBinaryFromReader(message: UnassignUserFromEmailConversationRes, reader: jspb.BinaryReader): UnassignUserFromEmailConversationRes;
}

export namespace UnassignUserFromEmailConversationRes {
  export type AsObject = {
  }
}

export class DashboardEmailConversationSearchReq extends jspb.Message {
  hasSearchFrom(): boolean;
  clearSearchFrom(): void;
  getSearchFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSearchFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasSearchTo(): boolean;
  clearSearchTo(): void;
  getSearchTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSearchTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardEmailConversationSearchReq.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardEmailConversationSearchReq): DashboardEmailConversationSearchReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardEmailConversationSearchReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardEmailConversationSearchReq;
  static deserializeBinaryFromReader(message: DashboardEmailConversationSearchReq, reader: jspb.BinaryReader): DashboardEmailConversationSearchReq;
}

export namespace DashboardEmailConversationSearchReq {
  export type AsObject = {
    searchFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    searchTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class DashboardEmailConversationSearchRes extends jspb.Message {
  clearDashboardEmailConversationResEntrysList(): void;
  getDashboardEmailConversationResEntrysList(): Array<DashboardEmailConversationResEntry>;
  setDashboardEmailConversationResEntrysList(value: Array<DashboardEmailConversationResEntry>): void;
  addDashboardEmailConversationResEntrys(value?: DashboardEmailConversationResEntry, index?: number): DashboardEmailConversationResEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardEmailConversationSearchRes.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardEmailConversationSearchRes): DashboardEmailConversationSearchRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardEmailConversationSearchRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardEmailConversationSearchRes;
  static deserializeBinaryFromReader(message: DashboardEmailConversationSearchRes, reader: jspb.BinaryReader): DashboardEmailConversationSearchRes;
}

export namespace DashboardEmailConversationSearchRes {
  export type AsObject = {
    dashboardEmailConversationResEntrysList: Array<DashboardEmailConversationResEntry.AsObject>,
  }
}

export class DashboardEmailConversationResEntry extends jspb.Message {
  hasEmailConversation(): boolean;
  clearEmailConversation(): void;
  getEmailConversation(): EmailConversation | undefined;
  setEmailConversation(value?: EmailConversation): void;

  clearEmailConversationAssignedUsersList(): void;
  getEmailConversationAssignedUsersList(): Array<EmailConversationAssignedUser>;
  setEmailConversationAssignedUsersList(value: Array<EmailConversationAssignedUser>): void;
  addEmailConversationAssignedUsers(value?: EmailConversationAssignedUser, index?: number): EmailConversationAssignedUser;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardEmailConversationResEntry.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardEmailConversationResEntry): DashboardEmailConversationResEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardEmailConversationResEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardEmailConversationResEntry;
  static deserializeBinaryFromReader(message: DashboardEmailConversationResEntry, reader: jspb.BinaryReader): DashboardEmailConversationResEntry;
}

export namespace DashboardEmailConversationResEntry {
  export type AsObject = {
    emailConversation?: EmailConversation.AsObject,
    emailConversationAssignedUsersList: Array<EmailConversationAssignedUser.AsObject>,
    name: string,
  }
}

export class EmailConversationAssignedUser extends jspb.Message {
  getAssignmentType(): api_commons_omnichannel_pb.AgentConversationAssignmentTypeMap[keyof api_commons_omnichannel_pb.AgentConversationAssignmentTypeMap];
  setAssignmentType(value: api_commons_omnichannel_pb.AgentConversationAssignmentTypeMap[keyof api_commons_omnichannel_pb.AgentConversationAssignmentTypeMap]): void;

  getNotify(): boolean;
  setNotify(value: boolean): void;

  getConversationId(): string;
  setConversationId(value: string): void;

  hasAssignedLastUpdatedTime(): boolean;
  clearAssignedLastUpdatedTime(): void;
  getAssignedLastUpdatedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAssignedLastUpdatedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAssignmentStatus(): api_commons_omnichannel_pb.AgentConversationAssignmentStatusMap[keyof api_commons_omnichannel_pb.AgentConversationAssignmentStatusMap];
  setAssignmentStatus(value: api_commons_omnichannel_pb.AgentConversationAssignmentStatusMap[keyof api_commons_omnichannel_pb.AgentConversationAssignmentStatusMap]): void;

  hasUserName(): boolean;
  clearUserName(): void;
  getUserName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUserName(value?: google_protobuf_wrappers_pb.StringValue): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailConversationAssignedUser.AsObject;
  static toObject(includeInstance: boolean, msg: EmailConversationAssignedUser): EmailConversationAssignedUser.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailConversationAssignedUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailConversationAssignedUser;
  static deserializeBinaryFromReader(message: EmailConversationAssignedUser, reader: jspb.BinaryReader): EmailConversationAssignedUser;
}

export namespace EmailConversationAssignedUser {
  export type AsObject = {
    assignmentType: api_commons_omnichannel_pb.AgentConversationAssignmentTypeMap[keyof api_commons_omnichannel_pb.AgentConversationAssignmentTypeMap],
    notify: boolean,
    conversationId: string,
    assignedLastUpdatedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    assignmentStatus: api_commons_omnichannel_pb.AgentConversationAssignmentStatusMap[keyof api_commons_omnichannel_pb.AgentConversationAssignmentStatusMap],
    userName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    userId: string,
  }
}

export class EmailConversation extends jspb.Message {
  hasConversationId(): boolean;
  clearConversationId(): void;
  getConversationId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConversationId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getRegionId(): string;
  setRegionId(value: string): void;

  hasEmailInboundGroupId(): boolean;
  clearEmailInboundGroupId(): void;
  getEmailInboundGroupId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEmailInboundGroupId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasConversationCreatedTime(): boolean;
  clearConversationCreatedTime(): void;
  getConversationCreatedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setConversationCreatedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasSkills(): boolean;
  clearSkills(): void;
  getSkills(): EmailConversationSkills | undefined;
  setSkills(value?: EmailConversationSkills): void;

  getConversationStatus(): api_commons_omnichannel_pb.ConversationStatusMap[keyof api_commons_omnichannel_pb.ConversationStatusMap];
  setConversationStatus(value: api_commons_omnichannel_pb.ConversationStatusMap[keyof api_commons_omnichannel_pb.ConversationStatusMap]): void;

  hasLastMessageTime(): boolean;
  clearLastMessageTime(): void;
  getLastMessageTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastMessageTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCustomerEmail(): string;
  setCustomerEmail(value: string): void;

  getCustomerName(): string;
  setCustomerName(value: string): void;

  hasEmailGroupId(): boolean;
  clearEmailGroupId(): void;
  getEmailGroupId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEmailGroupId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasSlaTimeouts(): boolean;
  clearSlaTimeouts(): void;
  getSlaTimeouts(): api_commons_omnichannel_pb.SLATimeouts | undefined;
  setSlaTimeouts(value?: api_commons_omnichannel_pb.SLATimeouts): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailConversation.AsObject;
  static toObject(includeInstance: boolean, msg: EmailConversation): EmailConversation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailConversation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailConversation;
  static deserializeBinaryFromReader(message: EmailConversation, reader: jspb.BinaryReader): EmailConversation;
}

export namespace EmailConversation {
  export type AsObject = {
    conversationId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    orgId: string,
    regionId: string,
    emailInboundGroupId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    conversationCreatedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    skills?: EmailConversationSkills.AsObject,
    conversationStatus: api_commons_omnichannel_pb.ConversationStatusMap[keyof api_commons_omnichannel_pb.ConversationStatusMap],
    lastMessageTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    customerEmail: string,
    customerName: string,
    emailGroupId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    slaTimeouts?: api_commons_omnichannel_pb.SLATimeouts.AsObject,
  }
}

export class ReassignEmailConversationReq extends jspb.Message {
  getEmailConversationId(): string;
  setEmailConversationId(value: string): void;

  getCurrentAssignedUser(): string;
  setCurrentAssignedUser(value: string): void;

  getNewAssignedUser(): string;
  setNewAssignedUser(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReassignEmailConversationReq.AsObject;
  static toObject(includeInstance: boolean, msg: ReassignEmailConversationReq): ReassignEmailConversationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReassignEmailConversationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReassignEmailConversationReq;
  static deserializeBinaryFromReader(message: ReassignEmailConversationReq, reader: jspb.BinaryReader): ReassignEmailConversationReq;
}

export namespace ReassignEmailConversationReq {
  export type AsObject = {
    emailConversationId: string,
    currentAssignedUser: string,
    newAssignedUser: string,
  }
}

export class ReassignEmailConversationRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReassignEmailConversationRes.AsObject;
  static toObject(includeInstance: boolean, msg: ReassignEmailConversationRes): ReassignEmailConversationRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReassignEmailConversationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReassignEmailConversationRes;
  static deserializeBinaryFromReader(message: ReassignEmailConversationRes, reader: jspb.BinaryReader): ReassignEmailConversationRes;
}

export namespace ReassignEmailConversationRes {
  export type AsObject = {
  }
}

export class AssignEmailConversationReq extends jspb.Message {
  getEmailConversationId(): string;
  setEmailConversationId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getAssignmentType(): api_commons_omnichannel_pb.AgentConversationAssignmentTypeMap[keyof api_commons_omnichannel_pb.AgentConversationAssignmentTypeMap];
  setAssignmentType(value: api_commons_omnichannel_pb.AgentConversationAssignmentTypeMap[keyof api_commons_omnichannel_pb.AgentConversationAssignmentTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignEmailConversationReq.AsObject;
  static toObject(includeInstance: boolean, msg: AssignEmailConversationReq): AssignEmailConversationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignEmailConversationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignEmailConversationReq;
  static deserializeBinaryFromReader(message: AssignEmailConversationReq, reader: jspb.BinaryReader): AssignEmailConversationReq;
}

export namespace AssignEmailConversationReq {
  export type AsObject = {
    emailConversationId: string,
    userId: string,
    assignmentType: api_commons_omnichannel_pb.AgentConversationAssignmentTypeMap[keyof api_commons_omnichannel_pb.AgentConversationAssignmentTypeMap],
  }
}

export class AssignEmailConversationRes extends jspb.Message {
  getReferenceId(): string;
  setReferenceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignEmailConversationRes.AsObject;
  static toObject(includeInstance: boolean, msg: AssignEmailConversationRes): AssignEmailConversationRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignEmailConversationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignEmailConversationRes;
  static deserializeBinaryFromReader(message: AssignEmailConversationRes, reader: jspb.BinaryReader): AssignEmailConversationRes;
}

export namespace AssignEmailConversationRes {
  export type AsObject = {
    referenceId: string,
  }
}

export class SuspendEmailConversationReq extends jspb.Message {
  getEmailConversationId(): string;
  setEmailConversationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuspendEmailConversationReq.AsObject;
  static toObject(includeInstance: boolean, msg: SuspendEmailConversationReq): SuspendEmailConversationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SuspendEmailConversationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuspendEmailConversationReq;
  static deserializeBinaryFromReader(message: SuspendEmailConversationReq, reader: jspb.BinaryReader): SuspendEmailConversationReq;
}

export namespace SuspendEmailConversationReq {
  export type AsObject = {
    emailConversationId: string,
  }
}

export class SuspendEmailConversationRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuspendEmailConversationRes.AsObject;
  static toObject(includeInstance: boolean, msg: SuspendEmailConversationRes): SuspendEmailConversationRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SuspendEmailConversationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuspendEmailConversationRes;
  static deserializeBinaryFromReader(message: SuspendEmailConversationRes, reader: jspb.BinaryReader): SuspendEmailConversationRes;
}

export namespace SuspendEmailConversationRes {
  export type AsObject = {
  }
}

export class ListCampaignsByConnectedInboxIdReq extends jspb.Message {
  getConnectedInboxId(): string;
  setConnectedInboxId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCampaignsByConnectedInboxIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListCampaignsByConnectedInboxIdReq): ListCampaignsByConnectedInboxIdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCampaignsByConnectedInboxIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCampaignsByConnectedInboxIdReq;
  static deserializeBinaryFromReader(message: ListCampaignsByConnectedInboxIdReq, reader: jspb.BinaryReader): ListCampaignsByConnectedInboxIdReq;
}

export namespace ListCampaignsByConnectedInboxIdReq {
  export type AsObject = {
    connectedInboxId: string,
  }
}

export class ListCampaignsByConnectedInboxIdRes extends jspb.Message {
  hasConnectedInbox(): boolean;
  clearConnectedInbox(): void;
  getConnectedInbox(): ConnectedInbox | undefined;
  setConnectedInbox(value?: ConnectedInbox): void;

  clearInboundEmailCampaignsList(): void;
  getInboundEmailCampaignsList(): Array<InboundEmailCampaignWithProjectDetails>;
  setInboundEmailCampaignsList(value: Array<InboundEmailCampaignWithProjectDetails>): void;
  addInboundEmailCampaigns(value?: InboundEmailCampaignWithProjectDetails, index?: number): InboundEmailCampaignWithProjectDetails;

  clearOutboundEmailCampaignsList(): void;
  getOutboundEmailCampaignsList(): Array<OutboundEmailCampaignWithProjectDetails>;
  setOutboundEmailCampaignsList(value: Array<OutboundEmailCampaignWithProjectDetails>): void;
  addOutboundEmailCampaigns(value?: OutboundEmailCampaignWithProjectDetails, index?: number): OutboundEmailCampaignWithProjectDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCampaignsByConnectedInboxIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListCampaignsByConnectedInboxIdRes): ListCampaignsByConnectedInboxIdRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCampaignsByConnectedInboxIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCampaignsByConnectedInboxIdRes;
  static deserializeBinaryFromReader(message: ListCampaignsByConnectedInboxIdRes, reader: jspb.BinaryReader): ListCampaignsByConnectedInboxIdRes;
}

export namespace ListCampaignsByConnectedInboxIdRes {
  export type AsObject = {
    connectedInbox?: ConnectedInbox.AsObject,
    inboundEmailCampaignsList: Array<InboundEmailCampaignWithProjectDetails.AsObject>,
    outboundEmailCampaignsList: Array<OutboundEmailCampaignWithProjectDetails.AsObject>,
  }
}

export class InboundEmailCampaignWithProjectDetails extends jspb.Message {
  getCampaignId(): string;
  setCampaignId(value: string): void;

  getCampaignName(): string;
  setCampaignName(value: string): void;

  getStatus(): api_commons_email_pb.EmailIBGroupStatusMap[keyof api_commons_email_pb.EmailIBGroupStatusMap];
  setStatus(value: api_commons_email_pb.EmailIBGroupStatusMap[keyof api_commons_email_pb.EmailIBGroupStatusMap]): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getProjectName(): string;
  setProjectName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InboundEmailCampaignWithProjectDetails.AsObject;
  static toObject(includeInstance: boolean, msg: InboundEmailCampaignWithProjectDetails): InboundEmailCampaignWithProjectDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InboundEmailCampaignWithProjectDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InboundEmailCampaignWithProjectDetails;
  static deserializeBinaryFromReader(message: InboundEmailCampaignWithProjectDetails, reader: jspb.BinaryReader): InboundEmailCampaignWithProjectDetails;
}

export namespace InboundEmailCampaignWithProjectDetails {
  export type AsObject = {
    campaignId: string,
    campaignName: string,
    status: api_commons_email_pb.EmailIBGroupStatusMap[keyof api_commons_email_pb.EmailIBGroupStatusMap],
    projectId: string,
    projectName: string,
  }
}

export class OutboundEmailCampaignWithProjectDetails extends jspb.Message {
  getCampaignId(): string;
  setCampaignId(value: string): void;

  getCampaignSid(): number;
  setCampaignSid(value: number): void;

  getCampaignName(): string;
  setCampaignName(value: string): void;

  getStatus(): api_commons_email_pb.EmailStatusMap[keyof api_commons_email_pb.EmailStatusMap];
  setStatus(value: api_commons_email_pb.EmailStatusMap[keyof api_commons_email_pb.EmailStatusMap]): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getProjectName(): string;
  setProjectName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutboundEmailCampaignWithProjectDetails.AsObject;
  static toObject(includeInstance: boolean, msg: OutboundEmailCampaignWithProjectDetails): OutboundEmailCampaignWithProjectDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OutboundEmailCampaignWithProjectDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutboundEmailCampaignWithProjectDetails;
  static deserializeBinaryFromReader(message: OutboundEmailCampaignWithProjectDetails, reader: jspb.BinaryReader): OutboundEmailCampaignWithProjectDetails;
}

export namespace OutboundEmailCampaignWithProjectDetails {
  export type AsObject = {
    campaignId: string,
    campaignSid: number,
    campaignName: string,
    status: api_commons_email_pb.EmailStatusMap[keyof api_commons_email_pb.EmailStatusMap],
    projectId: string,
    projectName: string,
  }
}

export class CloseEmailConversationReq extends jspb.Message {
  getEmailConversationId(): string;
  setEmailConversationId(value: string): void;

  getStatus(): api_commons_omnichannel_pb.ConversationStatusMap[keyof api_commons_omnichannel_pb.ConversationStatusMap];
  setStatus(value: api_commons_omnichannel_pb.ConversationStatusMap[keyof api_commons_omnichannel_pb.ConversationStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseEmailConversationReq.AsObject;
  static toObject(includeInstance: boolean, msg: CloseEmailConversationReq): CloseEmailConversationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloseEmailConversationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseEmailConversationReq;
  static deserializeBinaryFromReader(message: CloseEmailConversationReq, reader: jspb.BinaryReader): CloseEmailConversationReq;
}

export namespace CloseEmailConversationReq {
  export type AsObject = {
    emailConversationId: string,
    status: api_commons_omnichannel_pb.ConversationStatusMap[keyof api_commons_omnichannel_pb.ConversationStatusMap],
  }
}

export class CloseEmailConversationRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseEmailConversationRes.AsObject;
  static toObject(includeInstance: boolean, msg: CloseEmailConversationRes): CloseEmailConversationRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloseEmailConversationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseEmailConversationRes;
  static deserializeBinaryFromReader(message: CloseEmailConversationRes, reader: jspb.BinaryReader): CloseEmailConversationRes;
}

export namespace CloseEmailConversationRes {
  export type AsObject = {
  }
}

