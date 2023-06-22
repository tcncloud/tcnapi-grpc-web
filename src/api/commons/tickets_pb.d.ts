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
  }
}

export class EditTicket extends jspb.Message {
  getTicketSid(): string;
  setTicketSid(value: string): void;

  hasEditValue(): boolean;
  clearEditValue(): void;
  getEditValue(): EditAttribute | undefined;
  setEditValue(value?: EditAttribute): void;

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

