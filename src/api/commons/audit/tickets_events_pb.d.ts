// package: api.commons.audit
// file: api/commons/audit/tickets_events.proto

import * as jspb from "google-protobuf";
import * as api_commons_tickets_pb from "../../../api/commons/tickets_pb";

export class TicketEvent extends jspb.Message {
  hasEditticket(): boolean;
  clearEditticket(): void;
  getEditticket(): api_commons_tickets_pb.EditTicket | undefined;
  setEditticket(value?: api_commons_tickets_pb.EditTicket): void;

  getCreatedById(): string;
  setCreatedById(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketEvent.AsObject;
  static toObject(includeInstance: boolean, msg: TicketEvent): TicketEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketEvent;
  static deserializeBinaryFromReader(message: TicketEvent, reader: jspb.BinaryReader): TicketEvent;
}

export namespace TicketEvent {
  export type AsObject = {
    editticket?: api_commons_tickets_pb.EditTicket.AsObject,
    createdById: string,
  }
}

export class TicketCustomFieldCreateEvent extends jspb.Message {
  hasTicketCustomFieldAuditLog(): boolean;
  clearTicketCustomFieldAuditLog(): void;
  getTicketCustomFieldAuditLog(): api_commons_tickets_pb.TicketCustomFieldAuditLog | undefined;
  setTicketCustomFieldAuditLog(value?: api_commons_tickets_pb.TicketCustomFieldAuditLog): void;

  getCreatedById(): string;
  setCreatedById(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketCustomFieldCreateEvent.AsObject;
  static toObject(includeInstance: boolean, msg: TicketCustomFieldCreateEvent): TicketCustomFieldCreateEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketCustomFieldCreateEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketCustomFieldCreateEvent;
  static deserializeBinaryFromReader(message: TicketCustomFieldCreateEvent, reader: jspb.BinaryReader): TicketCustomFieldCreateEvent;
}

export namespace TicketCustomFieldCreateEvent {
  export type AsObject = {
    ticketCustomFieldAuditLog?: api_commons_tickets_pb.TicketCustomFieldAuditLog.AsObject,
    createdById: string,
  }
}

export class TicketCustomFieldEditEvent extends jspb.Message {
  hasTicketCustomFieldAuditLog(): boolean;
  clearTicketCustomFieldAuditLog(): void;
  getTicketCustomFieldAuditLog(): api_commons_tickets_pb.TicketCustomFieldAuditLog | undefined;
  setTicketCustomFieldAuditLog(value?: api_commons_tickets_pb.TicketCustomFieldAuditLog): void;

  getCreatedById(): string;
  setCreatedById(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketCustomFieldEditEvent.AsObject;
  static toObject(includeInstance: boolean, msg: TicketCustomFieldEditEvent): TicketCustomFieldEditEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketCustomFieldEditEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketCustomFieldEditEvent;
  static deserializeBinaryFromReader(message: TicketCustomFieldEditEvent, reader: jspb.BinaryReader): TicketCustomFieldEditEvent;
}

export namespace TicketCustomFieldEditEvent {
  export type AsObject = {
    ticketCustomFieldAuditLog?: api_commons_tickets_pb.TicketCustomFieldAuditLog.AsObject,
    createdById: string,
  }
}

