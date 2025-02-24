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

  hasTicketcustomfieldauditlog(): boolean;
  clearTicketcustomfieldauditlog(): void;
  getTicketcustomfieldauditlog(): api_commons_tickets_pb.TicketCustomFieldAuditLog | undefined;
  setTicketcustomfieldauditlog(value?: api_commons_tickets_pb.TicketCustomFieldAuditLog): void;

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
    ticketcustomfieldauditlog?: api_commons_tickets_pb.TicketCustomFieldAuditLog.AsObject,
  }
}

