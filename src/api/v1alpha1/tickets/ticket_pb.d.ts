// package: api.v1alpha1.tickets
// file: api/v1alpha1/tickets/ticket.proto

import * as jspb from "google-protobuf";
import * as api_commons_tickets_pb from "../../../api/commons/tickets_pb";
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

