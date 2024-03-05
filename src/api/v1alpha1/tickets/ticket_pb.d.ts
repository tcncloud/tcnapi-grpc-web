// package: api.v1alpha1.tickets
// file: api/v1alpha1/tickets/ticket.proto

import * as jspb from "google-protobuf";
import * as api_commons_tickets_pb from "../../../api/commons/tickets_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class PingReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingReq.AsObject;
  static toObject(includeInstance: boolean, msg: PingReq): PingReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingReq;
  static deserializeBinaryFromReader(message: PingReq, reader: jspb.BinaryReader): PingReq;
}

export namespace PingReq {
  export type AsObject = {
  }
}

export class PingRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingRes.AsObject;
  static toObject(includeInstance: boolean, msg: PingRes): PingRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingRes;
  static deserializeBinaryFromReader(message: PingRes, reader: jspb.BinaryReader): PingRes;
}

export namespace PingRes {
  export type AsObject = {
  }
}

export class CreateTicketReq extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getProjectSid(): string;
  setProjectSid(value: string): void;

  hasDueDate(): boolean;
  clearDueDate(): void;
  getDueDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDueDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearMetadataList(): void;
  getMetadataList(): Array<api_commons_tickets_pb.Metadata>;
  setMetadataList(value: Array<api_commons_tickets_pb.Metadata>): void;
  addMetadata(value?: api_commons_tickets_pb.Metadata, index?: number): api_commons_tickets_pb.Metadata;

  clearTicketSkillsList(): void;
  getTicketSkillsList(): Array<api_commons_tickets_pb.Skills>;
  setTicketSkillsList(value: Array<api_commons_tickets_pb.Skills>): void;
  addTicketSkills(value?: api_commons_tickets_pb.Skills, index?: number): api_commons_tickets_pb.Skills;

  getStatus(): number;
  setStatus(value: number): void;

  clearTicketSlaList(): void;
  getTicketSlaList(): Array<api_commons_tickets_pb.Sla>;
  setTicketSlaList(value: Array<api_commons_tickets_pb.Sla>): void;
  addTicketSla(value?: api_commons_tickets_pb.Sla, index?: number): api_commons_tickets_pb.Sla;

  getAssignSelf(): boolean;
  setAssignSelf(value: boolean): void;

  getAssignOther(): string;
  setAssignOther(value: string): void;

  clearTicketActionList(): void;
  getTicketActionList(): Array<api_commons_tickets_pb.TicketAction>;
  setTicketActionList(value: Array<api_commons_tickets_pb.TicketAction>): void;
  addTicketAction(value?: api_commons_tickets_pb.TicketAction, index?: number): api_commons_tickets_pb.TicketAction;

  clearTicketAssigneeList(): void;
  getTicketAssigneeList(): Array<string>;
  setTicketAssigneeList(value: Array<string>): void;
  addTicketAssignee(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTicketReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTicketReq): CreateTicketReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTicketReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTicketReq;
  static deserializeBinaryFromReader(message: CreateTicketReq, reader: jspb.BinaryReader): CreateTicketReq;
}

export namespace CreateTicketReq {
  export type AsObject = {
    title: string,
    description: string,
    projectSid: string,
    dueDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    metadataList: Array<api_commons_tickets_pb.Metadata.AsObject>,
    ticketSkillsList: Array<api_commons_tickets_pb.Skills.AsObject>,
    status: number,
    ticketSlaList: Array<api_commons_tickets_pb.Sla.AsObject>,
    assignSelf: boolean,
    assignOther: string,
    ticketActionList: Array<api_commons_tickets_pb.TicketAction.AsObject>,
    ticketAssigneeList: Array<string>,
  }
}

export class CreateTicketTemplateRequest extends jspb.Message {
  hasTicketTemplate(): boolean;
  clearTicketTemplate(): void;
  getTicketTemplate(): api_commons_tickets_pb.TicketTemplate | undefined;
  setTicketTemplate(value?: api_commons_tickets_pb.TicketTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTicketTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTicketTemplateRequest): CreateTicketTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTicketTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTicketTemplateRequest;
  static deserializeBinaryFromReader(message: CreateTicketTemplateRequest, reader: jspb.BinaryReader): CreateTicketTemplateRequest;
}

export namespace CreateTicketTemplateRequest {
  export type AsObject = {
    ticketTemplate?: api_commons_tickets_pb.TicketTemplate.AsObject,
  }
}

export class CreateTicketTemplateResponse extends jspb.Message {
  hasTicketTemplate(): boolean;
  clearTicketTemplate(): void;
  getTicketTemplate(): api_commons_tickets_pb.TicketTemplate | undefined;
  setTicketTemplate(value?: api_commons_tickets_pb.TicketTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTicketTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTicketTemplateResponse): CreateTicketTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTicketTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTicketTemplateResponse;
  static deserializeBinaryFromReader(message: CreateTicketTemplateResponse, reader: jspb.BinaryReader): CreateTicketTemplateResponse;
}

export namespace CreateTicketTemplateResponse {
  export type AsObject = {
    ticketTemplate?: api_commons_tickets_pb.TicketTemplate.AsObject,
  }
}

export class EditTicketTemplateRequest extends jspb.Message {
  getTicketTemplateId(): string;
  setTicketTemplateId(value: string): void;

  hasEditValue(): boolean;
  clearEditValue(): void;
  getEditValue(): api_commons_tickets_pb.TicketTemplate | undefined;
  setEditValue(value?: api_commons_tickets_pb.TicketTemplate): void;

  hasEditedFieldsMask(): boolean;
  clearEditedFieldsMask(): void;
  getEditedFieldsMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setEditedFieldsMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditTicketTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditTicketTemplateRequest): EditTicketTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditTicketTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditTicketTemplateRequest;
  static deserializeBinaryFromReader(message: EditTicketTemplateRequest, reader: jspb.BinaryReader): EditTicketTemplateRequest;
}

export namespace EditTicketTemplateRequest {
  export type AsObject = {
    ticketTemplateId: string,
    editValue?: api_commons_tickets_pb.TicketTemplate.AsObject,
    editedFieldsMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class EditTicketTemplateResponse extends jspb.Message {
  getIsEdited(): boolean;
  setIsEdited(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditTicketTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EditTicketTemplateResponse): EditTicketTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditTicketTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditTicketTemplateResponse;
  static deserializeBinaryFromReader(message: EditTicketTemplateResponse, reader: jspb.BinaryReader): EditTicketTemplateResponse;
}

export namespace EditTicketTemplateResponse {
  export type AsObject = {
    isEdited: boolean,
  }
}

export class ListTicketTemplateRequest extends jspb.Message {
  getTicketTemplateId(): number;
  setTicketTemplateId(value: number): void;

  getProjectId(): number;
  setProjectId(value: number): void;

  hasRequestMask(): boolean;
  clearRequestMask(): void;
  getRequestMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setRequestMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getTemplateId(): string;
  setTemplateId(value: string): void;

  getTemplateProjectId(): string;
  setTemplateProjectId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTicketTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTicketTemplateRequest): ListTicketTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTicketTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTicketTemplateRequest;
  static deserializeBinaryFromReader(message: ListTicketTemplateRequest, reader: jspb.BinaryReader): ListTicketTemplateRequest;
}

export namespace ListTicketTemplateRequest {
  export type AsObject = {
    ticketTemplateId: number,
    projectId: number,
    requestMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    templateId: string,
    templateProjectId: string,
  }
}

export class ListTicketTemplateResponse extends jspb.Message {
  clearEnabledTemplatesList(): void;
  getEnabledTemplatesList(): Array<api_commons_tickets_pb.ListTemplate>;
  setEnabledTemplatesList(value: Array<api_commons_tickets_pb.ListTemplate>): void;
  addEnabledTemplates(value?: api_commons_tickets_pb.ListTemplate, index?: number): api_commons_tickets_pb.ListTemplate;

  clearTicketProjectTemplateList(): void;
  getTicketProjectTemplateList(): Array<api_commons_tickets_pb.TicketProjectTemplate>;
  setTicketProjectTemplateList(value: Array<api_commons_tickets_pb.TicketProjectTemplate>): void;
  addTicketProjectTemplate(value?: api_commons_tickets_pb.TicketProjectTemplate, index?: number): api_commons_tickets_pb.TicketProjectTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTicketTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTicketTemplateResponse): ListTicketTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTicketTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTicketTemplateResponse;
  static deserializeBinaryFromReader(message: ListTicketTemplateResponse, reader: jspb.BinaryReader): ListTicketTemplateResponse;
}

export namespace ListTicketTemplateResponse {
  export type AsObject = {
    enabledTemplatesList: Array<api_commons_tickets_pb.ListTemplate.AsObject>,
    ticketProjectTemplateList: Array<api_commons_tickets_pb.TicketProjectTemplate.AsObject>,
  }
}

export class AssignProjectTemplateRequest extends jspb.Message {
  hasProjectTemplate(): boolean;
  clearProjectTemplate(): void;
  getProjectTemplate(): api_commons_tickets_pb.AssignProjectTemplate | undefined;
  setProjectTemplate(value?: api_commons_tickets_pb.AssignProjectTemplate): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  clearTemplateDescriptionList(): void;
  getTemplateDescriptionList(): Array<api_commons_tickets_pb.TemplateDescription>;
  setTemplateDescriptionList(value: Array<api_commons_tickets_pb.TemplateDescription>): void;
  addTemplateDescription(value?: api_commons_tickets_pb.TemplateDescription, index?: number): api_commons_tickets_pb.TemplateDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignProjectTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignProjectTemplateRequest): AssignProjectTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignProjectTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignProjectTemplateRequest;
  static deserializeBinaryFromReader(message: AssignProjectTemplateRequest, reader: jspb.BinaryReader): AssignProjectTemplateRequest;
}

export namespace AssignProjectTemplateRequest {
  export type AsObject = {
    projectTemplate?: api_commons_tickets_pb.AssignProjectTemplate.AsObject,
    projectId: string,
    templateDescriptionList: Array<api_commons_tickets_pb.TemplateDescription.AsObject>,
  }
}

export class AssignProjectTemplateResponse extends jspb.Message {
  getIsAssigned(): boolean;
  setIsAssigned(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignProjectTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignProjectTemplateResponse): AssignProjectTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignProjectTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignProjectTemplateResponse;
  static deserializeBinaryFromReader(message: AssignProjectTemplateResponse, reader: jspb.BinaryReader): AssignProjectTemplateResponse;
}

export namespace AssignProjectTemplateResponse {
  export type AsObject = {
    isAssigned: boolean,
  }
}

export class CreateTicketRes extends jspb.Message {
  hasTicket(): boolean;
  clearTicket(): void;
  getTicket(): api_commons_tickets_pb.Ticket | undefined;
  setTicket(value?: api_commons_tickets_pb.Ticket): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTicketRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTicketRes): CreateTicketRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTicketRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTicketRes;
  static deserializeBinaryFromReader(message: CreateTicketRes, reader: jspb.BinaryReader): CreateTicketRes;
}

export namespace CreateTicketRes {
  export type AsObject = {
    ticket?: api_commons_tickets_pb.Ticket.AsObject,
  }
}

export class GetActionTypeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetActionTypeRequest): GetActionTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetActionTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActionTypeRequest;
  static deserializeBinaryFromReader(message: GetActionTypeRequest, reader: jspb.BinaryReader): GetActionTypeRequest;
}

export namespace GetActionTypeRequest {
  export type AsObject = {
  }
}

export class GetActionTypeResponse extends jspb.Message {
  clearActionTypeList(): void;
  getActionTypeList(): Array<api_commons_tickets_pb.ActionType>;
  setActionTypeList(value: Array<api_commons_tickets_pb.ActionType>): void;
  addActionType(value?: api_commons_tickets_pb.ActionType, index?: number): api_commons_tickets_pb.ActionType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetActionTypeResponse): GetActionTypeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetActionTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActionTypeResponse;
  static deserializeBinaryFromReader(message: GetActionTypeResponse, reader: jspb.BinaryReader): GetActionTypeResponse;
}

export namespace GetActionTypeResponse {
  export type AsObject = {
    actionTypeList: Array<api_commons_tickets_pb.ActionType.AsObject>,
  }
}

export class GetPhoneNumberTypeRequest extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPhoneNumberTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPhoneNumberTypeRequest): GetPhoneNumberTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPhoneNumberTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPhoneNumberTypeRequest;
  static deserializeBinaryFromReader(message: GetPhoneNumberTypeRequest, reader: jspb.BinaryReader): GetPhoneNumberTypeRequest;
}

export namespace GetPhoneNumberTypeRequest {
  export type AsObject = {
    phoneNumber: string,
  }
}

export class GetPhoneNumberTypeResponse extends jspb.Message {
  getPhoneType(): api_commons_tickets_pb.PhoneNumberTypeMap[keyof api_commons_tickets_pb.PhoneNumberTypeMap];
  setPhoneType(value: api_commons_tickets_pb.PhoneNumberTypeMap[keyof api_commons_tickets_pb.PhoneNumberTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPhoneNumberTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPhoneNumberTypeResponse): GetPhoneNumberTypeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPhoneNumberTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPhoneNumberTypeResponse;
  static deserializeBinaryFromReader(message: GetPhoneNumberTypeResponse, reader: jspb.BinaryReader): GetPhoneNumberTypeResponse;
}

export namespace GetPhoneNumberTypeResponse {
  export type AsObject = {
    phoneType: api_commons_tickets_pb.PhoneNumberTypeMap[keyof api_commons_tickets_pb.PhoneNumberTypeMap],
  }
}

export class EditTicketReq extends jspb.Message {
  getTicketSid(): string;
  setTicketSid(value: string): void;

  hasEditValue(): boolean;
  clearEditValue(): void;
  getEditValue(): api_commons_tickets_pb.EditAttribute | undefined;
  setEditValue(value?: api_commons_tickets_pb.EditAttribute): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditTicketReq.AsObject;
  static toObject(includeInstance: boolean, msg: EditTicketReq): EditTicketReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditTicketReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditTicketReq;
  static deserializeBinaryFromReader(message: EditTicketReq, reader: jspb.BinaryReader): EditTicketReq;
}

export namespace EditTicketReq {
  export type AsObject = {
    ticketSid: string,
    editValue?: api_commons_tickets_pb.EditAttribute.AsObject,
  }
}

export class EditMaskTicketReq extends jspb.Message {
  getTicketSid(): string;
  setTicketSid(value: string): void;

  hasEditValue(): boolean;
  clearEditValue(): void;
  getEditValue(): api_commons_tickets_pb.Ticket | undefined;
  setEditValue(value?: api_commons_tickets_pb.Ticket): void;

  clearEditedFieldsMaskList(): void;
  getEditedFieldsMaskList(): Array<google_protobuf_field_mask_pb.FieldMask>;
  setEditedFieldsMaskList(value: Array<google_protobuf_field_mask_pb.FieldMask>): void;
  addEditedFieldsMask(value?: google_protobuf_field_mask_pb.FieldMask, index?: number): google_protobuf_field_mask_pb.FieldMask;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditMaskTicketReq.AsObject;
  static toObject(includeInstance: boolean, msg: EditMaskTicketReq): EditMaskTicketReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditMaskTicketReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditMaskTicketReq;
  static deserializeBinaryFromReader(message: EditMaskTicketReq, reader: jspb.BinaryReader): EditMaskTicketReq;
}

export namespace EditMaskTicketReq {
  export type AsObject = {
    ticketSid: string,
    editValue?: api_commons_tickets_pb.Ticket.AsObject,
    editedFieldsMaskList: Array<google_protobuf_field_mask_pb.FieldMask.AsObject>,
  }
}

export class EditMaskTicketRes extends jspb.Message {
  getIsEdited(): boolean;
  setIsEdited(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditMaskTicketRes.AsObject;
  static toObject(includeInstance: boolean, msg: EditMaskTicketRes): EditMaskTicketRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditMaskTicketRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditMaskTicketRes;
  static deserializeBinaryFromReader(message: EditMaskTicketRes, reader: jspb.BinaryReader): EditMaskTicketRes;
}

export namespace EditMaskTicketRes {
  export type AsObject = {
    isEdited: boolean,
  }
}

export class ListAllocatedTicketRes extends jspb.Message {
  clearTicketSidList(): void;
  getTicketSidList(): Array<string>;
  setTicketSidList(value: Array<string>): void;
  addTicketSid(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllocatedTicketRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllocatedTicketRes): ListAllocatedTicketRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAllocatedTicketRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllocatedTicketRes;
  static deserializeBinaryFromReader(message: ListAllocatedTicketRes, reader: jspb.BinaryReader): ListAllocatedTicketRes;
}

export namespace ListAllocatedTicketRes {
  export type AsObject = {
    ticketSidList: Array<string>,
  }
}

export class ListAllocatedTicketReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllocatedTicketReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllocatedTicketReq): ListAllocatedTicketReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAllocatedTicketReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllocatedTicketReq;
  static deserializeBinaryFromReader(message: ListAllocatedTicketReq, reader: jspb.BinaryReader): ListAllocatedTicketReq;
}

export namespace ListAllocatedTicketReq {
  export type AsObject = {
  }
}

export class ListAvailableAgentTicketsResponse extends jspb.Message {
  clearTicketSidList(): void;
  getTicketSidList(): Array<string>;
  setTicketSidList(value: Array<string>): void;
  addTicketSid(value: string, index?: number): string;

  clearTicketList(): void;
  getTicketList(): Array<api_commons_tickets_pb.Ticket>;
  setTicketList(value: Array<api_commons_tickets_pb.Ticket>): void;
  addTicket(value?: api_commons_tickets_pb.Ticket, index?: number): api_commons_tickets_pb.Ticket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAvailableAgentTicketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAvailableAgentTicketsResponse): ListAvailableAgentTicketsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAvailableAgentTicketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAvailableAgentTicketsResponse;
  static deserializeBinaryFromReader(message: ListAvailableAgentTicketsResponse, reader: jspb.BinaryReader): ListAvailableAgentTicketsResponse;
}

export namespace ListAvailableAgentTicketsResponse {
  export type AsObject = {
    ticketSidList: Array<string>,
    ticketList: Array<api_commons_tickets_pb.Ticket.AsObject>,
  }
}

export class ListAvailableAgentTicketsRequest extends jspb.Message {
  hasSelectFieldMask(): boolean;
  clearSelectFieldMask(): void;
  getSelectFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setSelectFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasAvailableFilter(): boolean;
  clearAvailableFilter(): void;
  getAvailableFilter(): AvailableTicketsFilter | undefined;
  setAvailableFilter(value?: AvailableTicketsFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAvailableAgentTicketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAvailableAgentTicketsRequest): ListAvailableAgentTicketsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAvailableAgentTicketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAvailableAgentTicketsRequest;
  static deserializeBinaryFromReader(message: ListAvailableAgentTicketsRequest, reader: jspb.BinaryReader): ListAvailableAgentTicketsRequest;
}

export namespace ListAvailableAgentTicketsRequest {
  export type AsObject = {
    selectFieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    availableFilter?: AvailableTicketsFilter.AsObject,
  }
}

export class AvailableTicketsFilter extends jspb.Message {
  clearAgentSkillIdList(): void;
  getAgentSkillIdList(): Array<string>;
  setAgentSkillIdList(value: Array<string>): void;
  addAgentSkillId(value: string, index?: number): string;

  getAgentViewLimit(): number;
  setAgentViewLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableTicketsFilter.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableTicketsFilter): AvailableTicketsFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AvailableTicketsFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableTicketsFilter;
  static deserializeBinaryFromReader(message: AvailableTicketsFilter, reader: jspb.BinaryReader): AvailableTicketsFilter;
}

export namespace AvailableTicketsFilter {
  export type AsObject = {
    agentSkillIdList: Array<string>,
    agentViewLimit: number,
  }
}

export class EditTicketRes extends jspb.Message {
  getIsEdited(): boolean;
  setIsEdited(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditTicketRes.AsObject;
  static toObject(includeInstance: boolean, msg: EditTicketRes): EditTicketRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditTicketRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditTicketRes;
  static deserializeBinaryFromReader(message: EditTicketRes, reader: jspb.BinaryReader): EditTicketRes;
}

export namespace EditTicketRes {
  export type AsObject = {
    isEdited: boolean,
  }
}

export class ListTicketsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTicketsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListTicketsReq): ListTicketsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTicketsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTicketsReq;
  static deserializeBinaryFromReader(message: ListTicketsReq, reader: jspb.BinaryReader): ListTicketsReq;
}

export namespace ListTicketsReq {
  export type AsObject = {
  }
}

export class ListTicketsRes extends jspb.Message {
  clearTicketsList(): void;
  getTicketsList(): Array<api_commons_tickets_pb.Ticket>;
  setTicketsList(value: Array<api_commons_tickets_pb.Ticket>): void;
  addTickets(value?: api_commons_tickets_pb.Ticket, index?: number): api_commons_tickets_pb.Ticket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTicketsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListTicketsRes): ListTicketsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTicketsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTicketsRes;
  static deserializeBinaryFromReader(message: ListTicketsRes, reader: jspb.BinaryReader): ListTicketsRes;
}

export namespace ListTicketsRes {
  export type AsObject = {
    ticketsList: Array<api_commons_tickets_pb.Ticket.AsObject>,
  }
}

export class AssignTicketReq extends jspb.Message {
  getTicketSid(): string;
  setTicketSid(value: string): void;

  getAssigneeList(): string;
  setAssigneeList(value: string): void;

  getAssignedId(): string;
  setAssignedId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignTicketReq.AsObject;
  static toObject(includeInstance: boolean, msg: AssignTicketReq): AssignTicketReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignTicketReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignTicketReq;
  static deserializeBinaryFromReader(message: AssignTicketReq, reader: jspb.BinaryReader): AssignTicketReq;
}

export namespace AssignTicketReq {
  export type AsObject = {
    ticketSid: string,
    assigneeList: string,
    assignedId: string,
  }
}

export class AssignTicketRes extends jspb.Message {
  getTicketSid(): string;
  setTicketSid(value: string): void;

  getAssigneeList(): string;
  setAssigneeList(value: string): void;

  getAssignedId(): string;
  setAssignedId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignTicketRes.AsObject;
  static toObject(includeInstance: boolean, msg: AssignTicketRes): AssignTicketRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignTicketRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignTicketRes;
  static deserializeBinaryFromReader(message: AssignTicketRes, reader: jspb.BinaryReader): AssignTicketRes;
}

export namespace AssignTicketRes {
  export type AsObject = {
    ticketSid: string,
    assigneeList: string,
    assignedId: string,
  }
}

export class ViewTicketReq extends jspb.Message {
  getTicketSid(): string;
  setTicketSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViewTicketReq.AsObject;
  static toObject(includeInstance: boolean, msg: ViewTicketReq): ViewTicketReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ViewTicketReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViewTicketReq;
  static deserializeBinaryFromReader(message: ViewTicketReq, reader: jspb.BinaryReader): ViewTicketReq;
}

export namespace ViewTicketReq {
  export type AsObject = {
    ticketSid: string,
  }
}

export class ViewTicketRes extends jspb.Message {
  hasTicket(): boolean;
  clearTicket(): void;
  getTicket(): api_commons_tickets_pb.Ticket | undefined;
  setTicket(value?: api_commons_tickets_pb.Ticket): void;

  clearCommentsList(): void;
  getCommentsList(): Array<api_commons_tickets_pb.Comment>;
  setCommentsList(value: Array<api_commons_tickets_pb.Comment>): void;
  addComments(value?: api_commons_tickets_pb.Comment, index?: number): api_commons_tickets_pb.Comment;

  clearReplyCommentList(): void;
  getReplyCommentList(): Array<api_commons_tickets_pb.ReplyComment>;
  setReplyCommentList(value: Array<api_commons_tickets_pb.ReplyComment>): void;
  addReplyComment(value?: api_commons_tickets_pb.ReplyComment, index?: number): api_commons_tickets_pb.ReplyComment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViewTicketRes.AsObject;
  static toObject(includeInstance: boolean, msg: ViewTicketRes): ViewTicketRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ViewTicketRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViewTicketRes;
  static deserializeBinaryFromReader(message: ViewTicketRes, reader: jspb.BinaryReader): ViewTicketRes;
}

export namespace ViewTicketRes {
  export type AsObject = {
    ticket?: api_commons_tickets_pb.Ticket.AsObject,
    commentsList: Array<api_commons_tickets_pb.Comment.AsObject>,
    replyCommentList: Array<api_commons_tickets_pb.ReplyComment.AsObject>,
  }
}

export class CreateCommentReq extends jspb.Message {
  getTicketSid(): string;
  setTicketSid(value: string): void;

  getComment(): string;
  setComment(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCommentReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCommentReq): CreateCommentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCommentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCommentReq;
  static deserializeBinaryFromReader(message: CreateCommentReq, reader: jspb.BinaryReader): CreateCommentReq;
}

export namespace CreateCommentReq {
  export type AsObject = {
    ticketSid: string,
    comment: string,
  }
}

export class CreateCommentRes extends jspb.Message {
  hasComment(): boolean;
  clearComment(): void;
  getComment(): api_commons_tickets_pb.Comment | undefined;
  setComment(value?: api_commons_tickets_pb.Comment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCommentRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCommentRes): CreateCommentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCommentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCommentRes;
  static deserializeBinaryFromReader(message: CreateCommentRes, reader: jspb.BinaryReader): CreateCommentRes;
}

export namespace CreateCommentRes {
  export type AsObject = {
    comment?: api_commons_tickets_pb.Comment.AsObject,
  }
}

export class CloseTicketReq extends jspb.Message {
  getTicketSid(): string;
  setTicketSid(value: string): void;

  getComment(): string;
  setComment(value: string): void;

  getFromStatus(): string;
  setFromStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseTicketReq.AsObject;
  static toObject(includeInstance: boolean, msg: CloseTicketReq): CloseTicketReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloseTicketReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseTicketReq;
  static deserializeBinaryFromReader(message: CloseTicketReq, reader: jspb.BinaryReader): CloseTicketReq;
}

export namespace CloseTicketReq {
  export type AsObject = {
    ticketSid: string,
    comment: string,
    fromStatus: string,
  }
}

export class CloseTicketRes extends jspb.Message {
  getIsStatus(): boolean;
  setIsStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseTicketRes.AsObject;
  static toObject(includeInstance: boolean, msg: CloseTicketRes): CloseTicketRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloseTicketRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseTicketRes;
  static deserializeBinaryFromReader(message: CloseTicketRes, reader: jspb.BinaryReader): CloseTicketRes;
}

export namespace CloseTicketRes {
  export type AsObject = {
    isStatus: boolean,
  }
}

export class CreateSlaReq extends jspb.Message {
  getSlaSid(): string;
  setSlaSid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getInterval(): number;
  setInterval(value: number): void;

  hasDuration(): boolean;
  clearDuration(): void;
  getDuration(): api_commons_tickets_pb.Duration | undefined;
  setDuration(value?: api_commons_tickets_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSlaReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSlaReq): CreateSlaReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSlaReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSlaReq;
  static deserializeBinaryFromReader(message: CreateSlaReq, reader: jspb.BinaryReader): CreateSlaReq;
}

export namespace CreateSlaReq {
  export type AsObject = {
    slaSid: string,
    name: string,
    description: string,
    interval: number,
    duration?: api_commons_tickets_pb.Duration.AsObject,
  }
}

export class CreateSlaRes extends jspb.Message {
  hasSla(): boolean;
  clearSla(): void;
  getSla(): api_commons_tickets_pb.TicketSla | undefined;
  setSla(value?: api_commons_tickets_pb.TicketSla): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSlaRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSlaRes): CreateSlaRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSlaRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSlaRes;
  static deserializeBinaryFromReader(message: CreateSlaRes, reader: jspb.BinaryReader): CreateSlaRes;
}

export namespace CreateSlaRes {
  export type AsObject = {
    sla?: api_commons_tickets_pb.TicketSla.AsObject,
  }
}

export class ListSlaReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSlaReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSlaReq): ListSlaReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSlaReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSlaReq;
  static deserializeBinaryFromReader(message: ListSlaReq, reader: jspb.BinaryReader): ListSlaReq;
}

export namespace ListSlaReq {
  export type AsObject = {
  }
}

export class ListSlaRes extends jspb.Message {
  clearTicketsslaList(): void;
  getTicketsslaList(): Array<api_commons_tickets_pb.TicketSla>;
  setTicketsslaList(value: Array<api_commons_tickets_pb.TicketSla>): void;
  addTicketssla(value?: api_commons_tickets_pb.TicketSla, index?: number): api_commons_tickets_pb.TicketSla;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSlaRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSlaRes): ListSlaRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSlaRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSlaRes;
  static deserializeBinaryFromReader(message: ListSlaRes, reader: jspb.BinaryReader): ListSlaRes;
}

export namespace ListSlaRes {
  export type AsObject = {
    ticketsslaList: Array<api_commons_tickets_pb.TicketSla.AsObject>,
  }
}

export class UpdateSlaReq extends jspb.Message {
  getSlaSid(): string;
  setSlaSid(value: string): void;

  getIsActive(): number;
  setIsActive(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSlaReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSlaReq): UpdateSlaReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSlaReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSlaReq;
  static deserializeBinaryFromReader(message: UpdateSlaReq, reader: jspb.BinaryReader): UpdateSlaReq;
}

export namespace UpdateSlaReq {
  export type AsObject = {
    slaSid: string,
    isActive: number,
  }
}

export class UpdateSlaRes extends jspb.Message {
  hasTicketssla(): boolean;
  clearTicketssla(): void;
  getTicketssla(): api_commons_tickets_pb.TicketSla | undefined;
  setTicketssla(value?: api_commons_tickets_pb.TicketSla): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSlaRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSlaRes): UpdateSlaRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSlaRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSlaRes;
  static deserializeBinaryFromReader(message: UpdateSlaRes, reader: jspb.BinaryReader): UpdateSlaRes;
}

export namespace UpdateSlaRes {
  export type AsObject = {
    ticketssla?: api_commons_tickets_pb.TicketSla.AsObject,
  }
}

export class ListSlaConditionReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSlaConditionReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSlaConditionReq): ListSlaConditionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSlaConditionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSlaConditionReq;
  static deserializeBinaryFromReader(message: ListSlaConditionReq, reader: jspb.BinaryReader): ListSlaConditionReq;
}

export namespace ListSlaConditionReq {
  export type AsObject = {
  }
}

export class ListSlaConditionRes extends jspb.Message {
  clearSlaconditionList(): void;
  getSlaconditionList(): Array<api_commons_tickets_pb.SlaConditions>;
  setSlaconditionList(value: Array<api_commons_tickets_pb.SlaConditions>): void;
  addSlacondition(value?: api_commons_tickets_pb.SlaConditions, index?: number): api_commons_tickets_pb.SlaConditions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSlaConditionRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSlaConditionRes): ListSlaConditionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSlaConditionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSlaConditionRes;
  static deserializeBinaryFromReader(message: ListSlaConditionRes, reader: jspb.BinaryReader): ListSlaConditionRes;
}

export namespace ListSlaConditionRes {
  export type AsObject = {
    slaconditionList: Array<api_commons_tickets_pb.SlaConditions.AsObject>,
  }
}

export class ReplyCommentReq extends jspb.Message {
  getCommentSid(): string;
  setCommentSid(value: string): void;

  getTicketSid(): string;
  setTicketSid(value: string): void;

  getReply(): string;
  setReply(value: string): void;

  getCreatedById(): string;
  setCreatedById(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplyCommentReq.AsObject;
  static toObject(includeInstance: boolean, msg: ReplyCommentReq): ReplyCommentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReplyCommentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplyCommentReq;
  static deserializeBinaryFromReader(message: ReplyCommentReq, reader: jspb.BinaryReader): ReplyCommentReq;
}

export namespace ReplyCommentReq {
  export type AsObject = {
    commentSid: string,
    ticketSid: string,
    reply: string,
    createdById: string,
  }
}

export class ReplyCommentRes extends jspb.Message {
  hasIsCreated(): boolean;
  clearIsCreated(): void;
  getIsCreated(): api_commons_tickets_pb.ConfirmReplyComment | undefined;
  setIsCreated(value?: api_commons_tickets_pb.ConfirmReplyComment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplyCommentRes.AsObject;
  static toObject(includeInstance: boolean, msg: ReplyCommentRes): ReplyCommentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReplyCommentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplyCommentRes;
  static deserializeBinaryFromReader(message: ReplyCommentRes, reader: jspb.BinaryReader): ReplyCommentRes;
}

export namespace ReplyCommentRes {
  export type AsObject = {
    isCreated?: api_commons_tickets_pb.ConfirmReplyComment.AsObject,
  }
}

export class CreateSelfAssignReq extends jspb.Message {
  getTicketSid(): string;
  setTicketSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSelfAssignReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSelfAssignReq): CreateSelfAssignReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSelfAssignReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSelfAssignReq;
  static deserializeBinaryFromReader(message: CreateSelfAssignReq, reader: jspb.BinaryReader): CreateSelfAssignReq;
}

export namespace CreateSelfAssignReq {
  export type AsObject = {
    ticketSid: string,
  }
}

export class CreateSelfAssignRes extends jspb.Message {
  getIsAssigned(): boolean;
  setIsAssigned(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSelfAssignRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSelfAssignRes): CreateSelfAssignRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSelfAssignRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSelfAssignRes;
  static deserializeBinaryFromReader(message: CreateSelfAssignRes, reader: jspb.BinaryReader): CreateSelfAssignRes;
}

export namespace CreateSelfAssignRes {
  export type AsObject = {
    isAssigned: boolean,
  }
}

export class ListSkillsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSkillsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSkillsRequest): ListSkillsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSkillsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSkillsRequest;
  static deserializeBinaryFromReader(message: ListSkillsRequest, reader: jspb.BinaryReader): ListSkillsRequest;
}

export namespace ListSkillsRequest {
  export type AsObject = {
  }
}

export class ListSkillsResponse extends jspb.Message {
  clearSkillsList(): void;
  getSkillsList(): Array<Skill>;
  setSkillsList(value: Array<Skill>): void;
  addSkills(value?: Skill, index?: number): Skill;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSkillsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSkillsResponse): ListSkillsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSkillsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSkillsResponse;
  static deserializeBinaryFromReader(message: ListSkillsResponse, reader: jspb.BinaryReader): ListSkillsResponse;
}

export namespace ListSkillsResponse {
  export type AsObject = {
    skillsList: Array<Skill.AsObject>,
  }
}

export class Skill extends jspb.Message {
  getSkillId(): string;
  setSkillId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Skill.AsObject;
  static toObject(includeInstance: boolean, msg: Skill): Skill.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Skill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Skill;
  static deserializeBinaryFromReader(message: Skill, reader: jspb.BinaryReader): Skill;
}

export namespace Skill {
  export type AsObject = {
    skillId: string,
    name: string,
  }
}

export class ListUsersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersRequest): ListUsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersRequest;
  static deserializeBinaryFromReader(message: ListUsersRequest, reader: jspb.BinaryReader): ListUsersRequest;
}

export namespace ListUsersRequest {
  export type AsObject = {
  }
}

export class ListUsersResponse extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): void;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersResponse): ListUsersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersResponse;
  static deserializeBinaryFromReader(message: ListUsersResponse, reader: jspb.BinaryReader): ListUsersResponse;
}

export namespace ListUsersResponse {
  export type AsObject = {
    usersList: Array<User.AsObject>,
  }
}

export class User extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getIsActive(): boolean;
  setIsActive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    userId: string,
    firstName: string,
    lastName: string,
    isActive: boolean,
  }
}

export class CreateTicketActionRequest extends jspb.Message {
  hasTicketAction(): boolean;
  clearTicketAction(): void;
  getTicketAction(): api_commons_tickets_pb.TicketAction | undefined;
  setTicketAction(value?: api_commons_tickets_pb.TicketAction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTicketActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTicketActionRequest): CreateTicketActionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTicketActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTicketActionRequest;
  static deserializeBinaryFromReader(message: CreateTicketActionRequest, reader: jspb.BinaryReader): CreateTicketActionRequest;
}

export namespace CreateTicketActionRequest {
  export type AsObject = {
    ticketAction?: api_commons_tickets_pb.TicketAction.AsObject,
  }
}

export class CreateTicketActionResponse extends jspb.Message {
  hasTicketAction(): boolean;
  clearTicketAction(): void;
  getTicketAction(): api_commons_tickets_pb.TicketAction | undefined;
  setTicketAction(value?: api_commons_tickets_pb.TicketAction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTicketActionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTicketActionResponse): CreateTicketActionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTicketActionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTicketActionResponse;
  static deserializeBinaryFromReader(message: CreateTicketActionResponse, reader: jspb.BinaryReader): CreateTicketActionResponse;
}

export namespace CreateTicketActionResponse {
  export type AsObject = {
    ticketAction?: api_commons_tickets_pb.TicketAction.AsObject,
  }
}

export class CloseTicketActionRequest extends jspb.Message {
  getTicketActionId(): string;
  setTicketActionId(value: string): void;

  getTicketId(): string;
  setTicketId(value: string): void;

  getComment(): string;
  setComment(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseTicketActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CloseTicketActionRequest): CloseTicketActionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloseTicketActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseTicketActionRequest;
  static deserializeBinaryFromReader(message: CloseTicketActionRequest, reader: jspb.BinaryReader): CloseTicketActionRequest;
}

export namespace CloseTicketActionRequest {
  export type AsObject = {
    ticketActionId: string,
    ticketId: string,
    comment: string,
  }
}

export class CloseTicketActionResponse extends jspb.Message {
  getIsClosed(): boolean;
  setIsClosed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseTicketActionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CloseTicketActionResponse): CloseTicketActionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloseTicketActionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseTicketActionResponse;
  static deserializeBinaryFromReader(message: CloseTicketActionResponse, reader: jspb.BinaryReader): CloseTicketActionResponse;
}

export namespace CloseTicketActionResponse {
  export type AsObject = {
    isClosed: boolean,
  }
}

export class AssignTicketActionRequest extends jspb.Message {
  getTicketActionId(): string;
  setTicketActionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignTicketActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignTicketActionRequest): AssignTicketActionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignTicketActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignTicketActionRequest;
  static deserializeBinaryFromReader(message: AssignTicketActionRequest, reader: jspb.BinaryReader): AssignTicketActionRequest;
}

export namespace AssignTicketActionRequest {
  export type AsObject = {
    ticketActionId: string,
  }
}

export class AssignTicketActionResponse extends jspb.Message {
  getIsAssigned(): boolean;
  setIsAssigned(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignTicketActionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignTicketActionResponse): AssignTicketActionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignTicketActionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignTicketActionResponse;
  static deserializeBinaryFromReader(message: AssignTicketActionResponse, reader: jspb.BinaryReader): AssignTicketActionResponse;
}

export namespace AssignTicketActionResponse {
  export type AsObject = {
    isAssigned: boolean,
  }
}

export class ChangeTicketStatusRequest extends jspb.Message {
  getTicketId(): string;
  setTicketId(value: string): void;

  getStatusId(): string;
  setStatusId(value: string): void;

  getTicketStatus(): api_commons_tickets_pb.TicketStatusMap[keyof api_commons_tickets_pb.TicketStatusMap];
  setTicketStatus(value: api_commons_tickets_pb.TicketStatusMap[keyof api_commons_tickets_pb.TicketStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeTicketStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeTicketStatusRequest): ChangeTicketStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeTicketStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeTicketStatusRequest;
  static deserializeBinaryFromReader(message: ChangeTicketStatusRequest, reader: jspb.BinaryReader): ChangeTicketStatusRequest;
}

export namespace ChangeTicketStatusRequest {
  export type AsObject = {
    ticketId: string,
    statusId: string,
    ticketStatus: api_commons_tickets_pb.TicketStatusMap[keyof api_commons_tickets_pb.TicketStatusMap],
  }
}

export class ChangeTicketStatusResponse extends jspb.Message {
  getIsStatusEdited(): boolean;
  setIsStatusEdited(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeTicketStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeTicketStatusResponse): ChangeTicketStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeTicketStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeTicketStatusResponse;
  static deserializeBinaryFromReader(message: ChangeTicketStatusResponse, reader: jspb.BinaryReader): ChangeTicketStatusResponse;
}

export namespace ChangeTicketStatusResponse {
  export type AsObject = {
    isStatusEdited: boolean,
  }
}

