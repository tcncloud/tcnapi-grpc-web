// package: api.commons
// file: api/commons/tickets.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Ticket extends jspb.Message {
  getTicketSid(): string;
  setTicketSid(value: string): void;

  getProjectSid(): string;
  setProjectSid(value: string): void;

  getProjectTitle(): string;
  setProjectTitle(value: string): void;

  getTicketCode(): string;
  setTicketCode(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getCreatedById(): string;
  setCreatedById(value: string): void;

  getCreatedByName(): string;
  setCreatedByName(value: string): void;

  hasCreatedByDate(): boolean;
  clearCreatedByDate(): void;
  getCreatedByDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedByDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDueDate(): boolean;
  clearDueDate(): void;
  getDueDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDueDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAssigneeList(): string;
  setAssigneeList(value: string): void;

  clearMetadataList(): void;
  getMetadataList(): Array<Metadata>;
  setMetadataList(value: Array<Metadata>): void;
  addMetadata(value?: Metadata, index?: number): Metadata;

  clearTicketSkillsList(): void;
  getTicketSkillsList(): Array<Skills>;
  setTicketSkillsList(value: Array<Skills>): void;
  addTicketSkills(value?: Skills, index?: number): Skills;

  getStatus(): number;
  setStatus(value: number): void;

  clearTicketSlaList(): void;
  getTicketSlaList(): Array<Sla>;
  setTicketSlaList(value: Array<Sla>): void;
  addTicketSla(value?: Sla, index?: number): Sla;

  getAssignee(): string;
  setAssignee(value: string): void;

  clearTicketActionList(): void;
  getTicketActionList(): Array<TicketAction>;
  setTicketActionList(value: Array<TicketAction>): void;
  addTicketAction(value?: TicketAction, index?: number): TicketAction;

  getTicketStatus(): TicketStatusMap[keyof TicketStatusMap];
  setTicketStatus(value: TicketStatusMap[keyof TicketStatusMap]): void;

  clearTicketAssigneeList(): void;
  getTicketAssigneeList(): Array<string>;
  setTicketAssigneeList(value: Array<string>): void;
  addTicketAssignee(value: string, index?: number): string;

  clearTicketParticipantList(): void;
  getTicketParticipantList(): Array<string>;
  setTicketParticipantList(value: Array<string>): void;
  addTicketParticipant(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ticket.AsObject;
  static toObject(includeInstance: boolean, msg: Ticket): Ticket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Ticket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ticket;
  static deserializeBinaryFromReader(message: Ticket, reader: jspb.BinaryReader): Ticket;
}

export namespace Ticket {
  export type AsObject = {
    ticketSid: string,
    projectSid: string,
    projectTitle: string,
    ticketCode: string,
    title: string,
    description: string,
    orgId: string,
    createdById: string,
    createdByName: string,
    createdByDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dueDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    assigneeList: string,
    metadataList: Array<Metadata.AsObject>,
    ticketSkillsList: Array<Skills.AsObject>,
    status: number,
    ticketSlaList: Array<Sla.AsObject>,
    assignee: string,
    ticketActionList: Array<TicketAction.AsObject>,
    ticketStatus: TicketStatusMap[keyof TicketStatusMap],
    ticketAssigneeList: Array<string>,
    ticketParticipantList: Array<string>,
  }
}

export class TicketTemplate extends jspb.Message {
  getTicketTemplateId(): number;
  setTicketTemplateId(value: number): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getTemplate(): string;
  setTemplate(value: string): void;

  getTemplateEntityVersion(): string;
  setTemplateEntityVersion(value: string): void;

  getTemplateName(): string;
  setTemplateName(value: string): void;

  getCreatedById(): string;
  setCreatedById(value: string): void;

  getModifiedBy(): string;
  setModifiedBy(value: string): void;

  hasCreatedDate(): boolean;
  clearCreatedDate(): void;
  getCreatedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasModifiedDate(): boolean;
  clearModifiedDate(): void;
  getModifiedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIsActive(): boolean;
  setIsActive(value: boolean): void;

  getTemplateId(): string;
  setTemplateId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: TicketTemplate): TicketTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketTemplate;
  static deserializeBinaryFromReader(message: TicketTemplate, reader: jspb.BinaryReader): TicketTemplate;
}

export namespace TicketTemplate {
  export type AsObject = {
    ticketTemplateId: number,
    orgId: string,
    template: string,
    templateEntityVersion: string,
    templateName: string,
    createdById: string,
    modifiedBy: string,
    createdDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isActive: boolean,
    templateId: string,
  }
}

export class TicketProjectTemplate extends jspb.Message {
  hasTicketTemplate(): boolean;
  clearTicketTemplate(): void;
  getTicketTemplate(): TicketTemplate | undefined;
  setTicketTemplate(value?: TicketTemplate): void;

  clearProjectDescriptionList(): void;
  getProjectDescriptionList(): Array<ProjectDescription>;
  setProjectDescriptionList(value: Array<ProjectDescription>): void;
  addProjectDescription(value?: ProjectDescription, index?: number): ProjectDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketProjectTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: TicketProjectTemplate): TicketProjectTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketProjectTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketProjectTemplate;
  static deserializeBinaryFromReader(message: TicketProjectTemplate, reader: jspb.BinaryReader): TicketProjectTemplate;
}

export namespace TicketProjectTemplate {
  export type AsObject = {
    ticketTemplate?: TicketTemplate.AsObject,
    projectDescriptionList: Array<ProjectDescription.AsObject>,
  }
}

export class ProjectDescription extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getProjectTitle(): string;
  setProjectTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectDescription.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectDescription): ProjectDescription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProjectDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectDescription;
  static deserializeBinaryFromReader(message: ProjectDescription, reader: jspb.BinaryReader): ProjectDescription;
}

export namespace ProjectDescription {
  export type AsObject = {
    projectId: string,
    projectTitle: string,
  }
}

export class ListTemplate extends jspb.Message {
  getTicketTemplateId(): string;
  setTicketTemplateId(value: string): void;

  getTemplateName(): string;
  setTemplateName(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getTemplate(): string;
  setTemplate(value: string): void;

  getTemplateEntityVersion(): string;
  setTemplateEntityVersion(value: string): void;

  getIsActive(): boolean;
  setIsActive(value: boolean): void;

  getCreatedById(): string;
  setCreatedById(value: string): void;

  hasCreatedDate(): boolean;
  clearCreatedDate(): void;
  getCreatedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getProjectTitle(): string;
  setProjectTitle(value: string): void;

  clearAssignedProjectList(): void;
  getAssignedProjectList(): Array<number>;
  setAssignedProjectList(value: Array<number>): void;
  addAssignedProject(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: ListTemplate): ListTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTemplate;
  static deserializeBinaryFromReader(message: ListTemplate, reader: jspb.BinaryReader): ListTemplate;
}

export namespace ListTemplate {
  export type AsObject = {
    ticketTemplateId: string,
    templateName: string,
    projectId: string,
    template: string,
    templateEntityVersion: string,
    isActive: boolean,
    createdById: string,
    createdDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    projectTitle: string,
    assignedProjectList: Array<number>,
  }
}

export class AssignProjectTemplate extends jspb.Message {
  clearTicketTemplateIdList(): void;
  getTicketTemplateIdList(): Array<string>;
  setTicketTemplateIdList(value: Array<string>): void;
  addTicketTemplateId(value: string, index?: number): string;

  getProjectId(): string;
  setProjectId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignProjectTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: AssignProjectTemplate): AssignProjectTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignProjectTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignProjectTemplate;
  static deserializeBinaryFromReader(message: AssignProjectTemplate, reader: jspb.BinaryReader): AssignProjectTemplate;
}

export namespace AssignProjectTemplate {
  export type AsObject = {
    ticketTemplateIdList: Array<string>,
    projectId: string,
  }
}

export class Duration extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  getScale(): TimeScaleMap[keyof TimeScaleMap];
  setScale(value: TimeScaleMap[keyof TimeScaleMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Duration.AsObject;
  static toObject(includeInstance: boolean, msg: Duration): Duration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Duration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Duration;
  static deserializeBinaryFromReader(message: Duration, reader: jspb.BinaryReader): Duration;
}

export namespace Duration {
  export type AsObject = {
    value: string,
    scale: TimeScaleMap[keyof TimeScaleMap],
  }
}

export class TicketAction extends jspb.Message {
  getTicketActionId(): string;
  setTicketActionId(value: string): void;

  getActionId(): string;
  setActionId(value: string): void;

  hasCallbackContext(): boolean;
  clearCallbackContext(): void;
  getCallbackContext(): CallbackContext | undefined;
  setCallbackContext(value?: CallbackContext): void;

  getTicketId(): string;
  setTicketId(value: string): void;

  hasStartTs(): boolean;
  clearStartTs(): void;
  getStartTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExpiryTs(): boolean;
  clearExpiryTs(): void;
  getExpiryTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiryTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getState(): number;
  setState(value: number): void;

  clearActionSkillsList(): void;
  getActionSkillsList(): Array<string>;
  setActionSkillsList(value: Array<string>): void;
  addActionSkills(value: string, index?: number): string;

  clearActionSlaIdList(): void;
  getActionSlaIdList(): Array<Sla>;
  setActionSlaIdList(value: Array<Sla>): void;
  addActionSlaId(value?: Sla, index?: number): Sla;

  getWorkDoneBy(): string;
  setWorkDoneBy(value: string): void;

  hasVoiceContext(): boolean;
  clearVoiceContext(): void;
  getVoiceContext(): CallbackContext | undefined;
  setVoiceContext(value?: CallbackContext): void;

  hasSmsContext(): boolean;
  clearSmsContext(): void;
  getSmsContext(): SmsbackContext | undefined;
  setSmsContext(value?: SmsbackContext): void;

  hasEmailContext(): boolean;
  clearEmailContext(): void;
  getEmailContext(): EmailbackContext | undefined;
  setEmailContext(value?: EmailbackContext): void;

  hasActionType(): boolean;
  clearActionType(): void;
  getActionType(): ActionType | undefined;
  setActionType(value?: ActionType): void;

  getTicketCode(): string;
  setTicketCode(value: string): void;

  getContextCase(): TicketAction.ContextCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketAction.AsObject;
  static toObject(includeInstance: boolean, msg: TicketAction): TicketAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketAction;
  static deserializeBinaryFromReader(message: TicketAction, reader: jspb.BinaryReader): TicketAction;
}

export namespace TicketAction {
  export type AsObject = {
    ticketActionId: string,
    actionId: string,
    callbackContext?: CallbackContext.AsObject,
    ticketId: string,
    startTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expiryTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: number,
    actionSkillsList: Array<string>,
    actionSlaIdList: Array<Sla.AsObject>,
    workDoneBy: string,
    voiceContext?: CallbackContext.AsObject,
    smsContext?: SmsbackContext.AsObject,
    emailContext?: EmailbackContext.AsObject,
    actionType?: ActionType.AsObject,
    ticketCode: string,
  }

  export enum ContextCase {
    CONTEXT_NOT_SET = 0,
    VOICE_CONTEXT = 12,
    SMS_CONTEXT = 13,
    EMAIL_CONTEXT = 14,
  }
}

export class CallbackContext extends jspb.Message {
  getCallerId(): string;
  setCallerId(value: string): void;

  getPhoneNo(): string;
  setPhoneNo(value: string): void;

  getCountryCode(): string;
  setCountryCode(value: string): void;

  getCallerName(): string;
  setCallerName(value: string): void;

  getCallerCountryCode(): string;
  setCallerCountryCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallbackContext.AsObject;
  static toObject(includeInstance: boolean, msg: CallbackContext): CallbackContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallbackContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallbackContext;
  static deserializeBinaryFromReader(message: CallbackContext, reader: jspb.BinaryReader): CallbackContext;
}

export namespace CallbackContext {
  export type AsObject = {
    callerId: string,
    phoneNo: string,
    countryCode: string,
    callerName: string,
    callerCountryCode: string,
  }
}

export class SmsbackContext extends jspb.Message {
  getContactName(): string;
  setContactName(value: string): void;

  getToSms(): string;
  setToSms(value: string): void;

  getFromSms(): string;
  setFromSms(value: string): void;

  getToCountryCode(): string;
  setToCountryCode(value: string): void;

  getFromCountryCode(): string;
  setFromCountryCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsbackContext.AsObject;
  static toObject(includeInstance: boolean, msg: SmsbackContext): SmsbackContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsbackContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsbackContext;
  static deserializeBinaryFromReader(message: SmsbackContext, reader: jspb.BinaryReader): SmsbackContext;
}

export namespace SmsbackContext {
  export type AsObject = {
    contactName: string,
    toSms: string,
    fromSms: string,
    toCountryCode: string,
    fromCountryCode: string,
  }
}

export class ActionType extends jspb.Message {
  getActionTypeId(): string;
  setActionTypeId(value: string): void;

  getActionName(): string;
  setActionName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionType.AsObject;
  static toObject(includeInstance: boolean, msg: ActionType): ActionType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionType;
  static deserializeBinaryFromReader(message: ActionType, reader: jspb.BinaryReader): ActionType;
}

export namespace ActionType {
  export type AsObject = {
    actionTypeId: string,
    actionName: string,
  }
}

export class EmailbackContext extends jspb.Message {
  getContactName(): string;
  setContactName(value: string): void;

  getToEmail(): string;
  setToEmail(value: string): void;

  getFromEmail(): string;
  setFromEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailbackContext.AsObject;
  static toObject(includeInstance: boolean, msg: EmailbackContext): EmailbackContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailbackContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailbackContext;
  static deserializeBinaryFromReader(message: EmailbackContext, reader: jspb.BinaryReader): EmailbackContext;
}

export namespace EmailbackContext {
  export type AsObject = {
    contactName: string,
    toEmail: string,
    fromEmail: string,
  }
}

export class Metadata extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metadata;
  static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
  export type AsObject = {
    name: string,
    value: string,
  }
}

export class Skills extends jspb.Message {
  getSkillId(): string;
  setSkillId(value: string): void;

  getIsPreferred(): boolean;
  setIsPreferred(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Skills.AsObject;
  static toObject(includeInstance: boolean, msg: Skills): Skills.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Skills, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Skills;
  static deserializeBinaryFromReader(message: Skills, reader: jspb.BinaryReader): Skills;
}

export namespace Skills {
  export type AsObject = {
    skillId: string,
    isPreferred: boolean,
  }
}

export class Sla extends jspb.Message {
  getConditionSid(): string;
  setConditionSid(value: string): void;

  getSlaSid(): string;
  setSlaSid(value: string): void;

  getSlaMin(): string;
  setSlaMin(value: string): void;

  hasSlaDuration(): boolean;
  clearSlaDuration(): void;
  getSlaDuration(): Duration | undefined;
  setSlaDuration(value?: Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sla.AsObject;
  static toObject(includeInstance: boolean, msg: Sla): Sla.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Sla, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sla;
  static deserializeBinaryFromReader(message: Sla, reader: jspb.BinaryReader): Sla;
}

export namespace Sla {
  export type AsObject = {
    conditionSid: string,
    slaSid: string,
    slaMin: string,
    slaDuration?: Duration.AsObject,
  }
}

export class Comment extends jspb.Message {
  getCommentSid(): string;
  setCommentSid(value: string): void;

  getTicketSid(): string;
  setTicketSid(value: string): void;

  getComment(): string;
  setComment(value: string): void;

  getCreatedById(): string;
  setCreatedById(value: string): void;

  getCreatedByName(): string;
  setCreatedByName(value: string): void;

  hasCreatedByDate(): boolean;
  clearCreatedByDate(): void;
  getCreatedByDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedByDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTicketCode(): string;
  setTicketCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Comment.AsObject;
  static toObject(includeInstance: boolean, msg: Comment): Comment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Comment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Comment;
  static deserializeBinaryFromReader(message: Comment, reader: jspb.BinaryReader): Comment;
}

export namespace Comment {
  export type AsObject = {
    commentSid: string,
    ticketSid: string,
    comment: string,
    createdById: string,
    createdByName: string,
    createdByDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ticketCode: string,
  }
}

export class CloseTicket extends jspb.Message {
  getTicketSid(): string;
  setTicketSid(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  getComment(): string;
  setComment(value: string): void;

  getFromStatus(): number;
  setFromStatus(value: number): void;

  getCreatedById(): string;
  setCreatedById(value: string): void;

  getTicketCode(): string;
  setTicketCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseTicket.AsObject;
  static toObject(includeInstance: boolean, msg: CloseTicket): CloseTicket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloseTicket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseTicket;
  static deserializeBinaryFromReader(message: CloseTicket, reader: jspb.BinaryReader): CloseTicket;
}

export namespace CloseTicket {
  export type AsObject = {
    ticketSid: string,
    status: number,
    comment: string,
    fromStatus: number,
    createdById: string,
    ticketCode: string,
  }
}

export class ConfirmClose extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmClose.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmClose): ConfirmClose.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfirmClose, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmClose;
  static deserializeBinaryFromReader(message: ConfirmClose, reader: jspb.BinaryReader): ConfirmClose;
}

export namespace ConfirmClose {
  export type AsObject = {
    status: number,
  }
}

export class TicketProject extends jspb.Message {
  getTicketProjectId(): string;
  setTicketProjectId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getProjectSid(): string;
  setProjectSid(value: string): void;

  getProjectCode(): string;
  setProjectCode(value: string): void;

  getProjectTitle(): string;
  setProjectTitle(value: string): void;

  getIsActive(): boolean;
  setIsActive(value: boolean): void;

  clearTemplateDescList(): void;
  getTemplateDescList(): Array<TemplateDescription>;
  setTemplateDescList(value: Array<TemplateDescription>): void;
  addTemplateDesc(value?: TemplateDescription, index?: number): TemplateDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketProject.AsObject;
  static toObject(includeInstance: boolean, msg: TicketProject): TicketProject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketProject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketProject;
  static deserializeBinaryFromReader(message: TicketProject, reader: jspb.BinaryReader): TicketProject;
}

export namespace TicketProject {
  export type AsObject = {
    ticketProjectId: string,
    orgId: string,
    projectSid: string,
    projectCode: string,
    projectTitle: string,
    isActive: boolean,
    templateDescList: Array<TemplateDescription.AsObject>,
  }
}

export class TemplateDescription extends jspb.Message {
  getTicketTemplateId(): string;
  setTicketTemplateId(value: string): void;

  getTemplateName(): string;
  setTemplateName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemplateDescription.AsObject;
  static toObject(includeInstance: boolean, msg: TemplateDescription): TemplateDescription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TemplateDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemplateDescription;
  static deserializeBinaryFromReader(message: TemplateDescription, reader: jspb.BinaryReader): TemplateDescription;
}

export namespace TemplateDescription {
  export type AsObject = {
    ticketTemplateId: string,
    templateName: string,
  }
}

export class TicketSla extends jspb.Message {
  getSlaSid(): string;
  setSlaSid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getInterval(): number;
  setInterval(value: number): void;

  getIsActive(): number;
  setIsActive(value: number): void;

  hasTicketSlaDuration(): boolean;
  clearTicketSlaDuration(): void;
  getTicketSlaDuration(): Duration | undefined;
  setTicketSlaDuration(value?: Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketSla.AsObject;
  static toObject(includeInstance: boolean, msg: TicketSla): TicketSla.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketSla, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketSla;
  static deserializeBinaryFromReader(message: TicketSla, reader: jspb.BinaryReader): TicketSla;
}

export namespace TicketSla {
  export type AsObject = {
    slaSid: string,
    name: string,
    description: string,
    interval: number,
    isActive: number,
    ticketSlaDuration?: Duration.AsObject,
  }
}

export class SlaConditions extends jspb.Message {
  getSlaConditionSid(): string;
  setSlaConditionSid(value: string): void;

  getSlaConditionName(): string;
  setSlaConditionName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SlaConditions.AsObject;
  static toObject(includeInstance: boolean, msg: SlaConditions): SlaConditions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SlaConditions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SlaConditions;
  static deserializeBinaryFromReader(message: SlaConditions, reader: jspb.BinaryReader): SlaConditions;
}

export namespace SlaConditions {
  export type AsObject = {
    slaConditionSid: string,
    slaConditionName: string,
  }
}

export class ReplyComment extends jspb.Message {
  getCommentSid(): string;
  setCommentSid(value: string): void;

  getTicketSid(): string;
  setTicketSid(value: string): void;

  getReply(): string;
  setReply(value: string): void;

  getCreatedById(): string;
  setCreatedById(value: string): void;

  hasCreatedByDate(): boolean;
  clearCreatedByDate(): void;
  getCreatedByDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedByDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTicketCode(): string;
  setTicketCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplyComment.AsObject;
  static toObject(includeInstance: boolean, msg: ReplyComment): ReplyComment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReplyComment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplyComment;
  static deserializeBinaryFromReader(message: ReplyComment, reader: jspb.BinaryReader): ReplyComment;
}

export namespace ReplyComment {
  export type AsObject = {
    commentSid: string,
    ticketSid: string,
    reply: string,
    createdById: string,
    createdByDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ticketCode: string,
  }
}

export class ConfirmReplyComment extends jspb.Message {
  getIsCreated(): boolean;
  setIsCreated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmReplyComment.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmReplyComment): ConfirmReplyComment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfirmReplyComment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmReplyComment;
  static deserializeBinaryFromReader(message: ConfirmReplyComment, reader: jspb.BinaryReader): ConfirmReplyComment;
}

export namespace ConfirmReplyComment {
  export type AsObject = {
    isCreated: boolean,
  }
}

export class TicketAuditLog extends jspb.Message {
  getTicketAuditEventLogId(): string;
  setTicketAuditEventLogId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getEvent(): string;
  setEvent(value: string): void;

  getTicketSid(): string;
  setTicketSid(value: string): void;

  getEventType(): string;
  setEventType(value: string): void;

  getCreatedById(): string;
  setCreatedById(value: string): void;

  hasCreatedByDate(): boolean;
  clearCreatedByDate(): void;
  getCreatedByDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedByDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTicketCode(): string;
  setTicketCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketAuditLog.AsObject;
  static toObject(includeInstance: boolean, msg: TicketAuditLog): TicketAuditLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketAuditLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketAuditLog;
  static deserializeBinaryFromReader(message: TicketAuditLog, reader: jspb.BinaryReader): TicketAuditLog;
}

export namespace TicketAuditLog {
  export type AsObject = {
    ticketAuditEventLogId: string,
    orgId: string,
    event: string,
    ticketSid: string,
    eventType: string,
    createdById: string,
    createdByDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ticketCode: string,
  }
}

export class EditTicket extends jspb.Message {
  getTicketSid(): string;
  setTicketSid(value: string): void;

  hasEditValue(): boolean;
  clearEditValue(): void;
  getEditValue(): EditAttribute | undefined;
  setEditValue(value?: EditAttribute): void;

  getTicketCode(): string;
  setTicketCode(value: string): void;

  getTicketActionId(): number;
  setTicketActionId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditTicket.AsObject;
  static toObject(includeInstance: boolean, msg: EditTicket): EditTicket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditTicket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditTicket;
  static deserializeBinaryFromReader(message: EditTicket, reader: jspb.BinaryReader): EditTicket;
}

export namespace EditTicket {
  export type AsObject = {
    ticketSid: string,
    editValue?: EditAttribute.AsObject,
    ticketCode: string,
    ticketActionId: number,
  }
}

export class EditAttribute extends jspb.Message {
  getColDesc(): string;
  setColDesc(value: string): void;

  getFromVal(): string;
  setFromVal(value: string): void;

  getToVal(): string;
  setToVal(value: string): void;

  getIsEdited(): boolean;
  setIsEdited(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: EditAttribute): EditAttribute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditAttribute;
  static deserializeBinaryFromReader(message: EditAttribute, reader: jspb.BinaryReader): EditAttribute;
}

export namespace EditAttribute {
  export type AsObject = {
    colDesc: string,
    fromVal: string,
    toVal: string,
    isEdited: boolean,
  }
}

export interface TimeScaleMap {
  TIME_SCALE_MINUTE: 0;
  TIME_SCALE_HOUR: 1;
  TIME_SCALE_DAY: 2;
  TIME_SCALE_WEEK: 3;
  TIME_SCALE_MONTH: 4;
  TIME_SCALE_YEAR: 5;
}

export const TimeScale: TimeScaleMap;

export interface TicketStatusMap {
  TICKET_STATUS_NEW: 0;
  TICKET_STATUS_OPEN: 1;
  TICKET_STATUS_CLOSE: 2;
}

export const TicketStatus: TicketStatusMap;

export interface PhoneNumberTypeMap {
  MOBILE: 0;
  OTHER: 1;
  INVALID_ERROR: 2;
}

export const PhoneNumberType: PhoneNumberTypeMap;

