// package: api.v1alpha1.tickets
// file: api/v1alpha1/tickets/project.proto

import * as jspb from "google-protobuf";
import * as api_commons_audit_audit_pb from "../../../api/commons/audit/audit_pb";
import * as api_commons_tickets_pb from "../../../api/commons/tickets_pb";

export class EnableProjectReq extends jspb.Message {
  getProjectSid(): string;
  setProjectSid(value: string): void;

  getProjectCode(): string;
  setProjectCode(value: string): void;

  getProjectTitle(): string;
  setProjectTitle(value: string): void;

  getIsActive(): boolean;
  setIsActive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableProjectReq.AsObject;
  static toObject(includeInstance: boolean, msg: EnableProjectReq): EnableProjectReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnableProjectReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableProjectReq;
  static deserializeBinaryFromReader(message: EnableProjectReq, reader: jspb.BinaryReader): EnableProjectReq;
}

export namespace EnableProjectReq {
  export type AsObject = {
    projectSid: string,
    projectCode: string,
    projectTitle: string,
    isActive: boolean,
  }
}

export class EnableProjectRes extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableProjectRes.AsObject;
  static toObject(includeInstance: boolean, msg: EnableProjectRes): EnableProjectRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnableProjectRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableProjectRes;
  static deserializeBinaryFromReader(message: EnableProjectRes, reader: jspb.BinaryReader): EnableProjectRes;
}

export namespace EnableProjectRes {
  export type AsObject = {
    success: boolean,
  }
}

export class ListEnabledProjectsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEnabledProjectsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListEnabledProjectsReq): ListEnabledProjectsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListEnabledProjectsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEnabledProjectsReq;
  static deserializeBinaryFromReader(message: ListEnabledProjectsReq, reader: jspb.BinaryReader): ListEnabledProjectsReq;
}

export namespace ListEnabledProjectsReq {
  export type AsObject = {
  }
}

export class ListEnabledProjectsRes extends jspb.Message {
  clearProjectsList(): void;
  getProjectsList(): Array<api_commons_tickets_pb.TicketProject>;
  setProjectsList(value: Array<api_commons_tickets_pb.TicketProject>): void;
  addProjects(value?: api_commons_tickets_pb.TicketProject, index?: number): api_commons_tickets_pb.TicketProject;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEnabledProjectsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListEnabledProjectsRes): ListEnabledProjectsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListEnabledProjectsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEnabledProjectsRes;
  static deserializeBinaryFromReader(message: ListEnabledProjectsRes, reader: jspb.BinaryReader): ListEnabledProjectsRes;
}

export namespace ListEnabledProjectsRes {
  export type AsObject = {
    projectsList: Array<api_commons_tickets_pb.TicketProject.AsObject>,
  }
}

export class ListTicketAuditLogReq extends jspb.Message {
  getTicketSid(): string;
  setTicketSid(value: string): void;

  getTicketCode(): string;
  setTicketCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTicketAuditLogReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListTicketAuditLogReq): ListTicketAuditLogReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTicketAuditLogReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTicketAuditLogReq;
  static deserializeBinaryFromReader(message: ListTicketAuditLogReq, reader: jspb.BinaryReader): ListTicketAuditLogReq;
}

export namespace ListTicketAuditLogReq {
  export type AsObject = {
    ticketSid: string,
    ticketCode: string,
  }
}

export class ListTicketAuditLogRes extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<api_commons_audit_audit_pb.AuditEvent>;
  setEventsList(value: Array<api_commons_audit_audit_pb.AuditEvent>): void;
  addEvents(value?: api_commons_audit_audit_pb.AuditEvent, index?: number): api_commons_audit_audit_pb.AuditEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTicketAuditLogRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListTicketAuditLogRes): ListTicketAuditLogRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTicketAuditLogRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTicketAuditLogRes;
  static deserializeBinaryFromReader(message: ListTicketAuditLogRes, reader: jspb.BinaryReader): ListTicketAuditLogRes;
}

export namespace ListTicketAuditLogRes {
  export type AsObject = {
    eventsList: Array<api_commons_audit_audit_pb.AuditEvent.AsObject>,
  }
}

