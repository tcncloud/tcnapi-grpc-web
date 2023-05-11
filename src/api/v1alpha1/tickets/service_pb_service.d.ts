// package: api.v1alpha1.tickets
// file: api/v1alpha1/tickets/service.proto

import * as api_v1alpha1_tickets_service_pb from "../../../api/v1alpha1/tickets/service_pb";
import * as api_v1alpha1_tickets_project_pb from "../../../api/v1alpha1/tickets/project_pb";
import * as api_v1alpha1_tickets_ticket_pb from "../../../api/v1alpha1/tickets/ticket_pb";
import {grpc} from "@improbable-eng/grpc-web";

type TicketsCreateTicket = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.CreateTicketReq;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.CreateTicketRes;
};

type TicketsEditTicket = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.EditTicketReq;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.EditTicketRes;
};

type TicketsListTickets = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.ListTicketsReq;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.ListTicketsRes;
};

type TicketsAssignTicket = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.AssignTicketReq;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.AssignTicketRes;
};

type TicketsCloseTicket = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.CloseTicketReq;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.CloseTicketRes;
};

type TicketsViewTicket = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.ViewTicketReq;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.ViewTicketRes;
};

type TicketsCreateComment = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.CreateCommentReq;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.CreateCommentRes;
};

type TicketsEnableProject = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_project_pb.EnableProjectReq;
  readonly responseType: typeof api_v1alpha1_tickets_project_pb.EnableProjectRes;
};

type TicketsListEnabledProjects = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_project_pb.ListEnabledProjectsReq;
  readonly responseType: typeof api_v1alpha1_tickets_project_pb.ListEnabledProjectsRes;
};

type TicketsCreateSLA = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.CreateSlaReq;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.CreateSlaRes;
};

type TicketsListSLA = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.ListSlaReq;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.ListSlaRes;
};

type TicketsUpdateSLA = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.UpdateSlaReq;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.UpdateSlaRes;
};

type TicketsListSLACondition = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.ListSlaConditionReq;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.ListSlaConditionRes;
};

type TicketsReplyComment = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.ReplyCommentReq;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.ReplyCommentRes;
};

type TicketsListTicketAuditLog = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_project_pb.ListTicketAuditLogReq;
  readonly responseType: typeof api_v1alpha1_tickets_project_pb.ListTicketAuditLogRes;
};

export class Tickets {
  static readonly serviceName: string;
  static readonly CreateTicket: TicketsCreateTicket;
  static readonly EditTicket: TicketsEditTicket;
  static readonly ListTickets: TicketsListTickets;
  static readonly AssignTicket: TicketsAssignTicket;
  static readonly CloseTicket: TicketsCloseTicket;
  static readonly ViewTicket: TicketsViewTicket;
  static readonly CreateComment: TicketsCreateComment;
  static readonly EnableProject: TicketsEnableProject;
  static readonly ListEnabledProjects: TicketsListEnabledProjects;
  static readonly CreateSLA: TicketsCreateSLA;
  static readonly ListSLA: TicketsListSLA;
  static readonly UpdateSLA: TicketsUpdateSLA;
  static readonly ListSLACondition: TicketsListSLACondition;
  static readonly ReplyComment: TicketsReplyComment;
  static readonly ListTicketAuditLog: TicketsListTicketAuditLog;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class TicketsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createTicket(
    requestMessage: api_v1alpha1_tickets_ticket_pb.CreateTicketReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.CreateTicketRes|null) => void
  ): UnaryResponse;
  createTicket(
    requestMessage: api_v1alpha1_tickets_ticket_pb.CreateTicketReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.CreateTicketRes|null) => void
  ): UnaryResponse;
  editTicket(
    requestMessage: api_v1alpha1_tickets_ticket_pb.EditTicketReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.EditTicketRes|null) => void
  ): UnaryResponse;
  editTicket(
    requestMessage: api_v1alpha1_tickets_ticket_pb.EditTicketReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.EditTicketRes|null) => void
  ): UnaryResponse;
  listTickets(
    requestMessage: api_v1alpha1_tickets_ticket_pb.ListTicketsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.ListTicketsRes|null) => void
  ): UnaryResponse;
  listTickets(
    requestMessage: api_v1alpha1_tickets_ticket_pb.ListTicketsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.ListTicketsRes|null) => void
  ): UnaryResponse;
  assignTicket(
    requestMessage: api_v1alpha1_tickets_ticket_pb.AssignTicketReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.AssignTicketRes|null) => void
  ): UnaryResponse;
  assignTicket(
    requestMessage: api_v1alpha1_tickets_ticket_pb.AssignTicketReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.AssignTicketRes|null) => void
  ): UnaryResponse;
  closeTicket(
    requestMessage: api_v1alpha1_tickets_ticket_pb.CloseTicketReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.CloseTicketRes|null) => void
  ): UnaryResponse;
  closeTicket(
    requestMessage: api_v1alpha1_tickets_ticket_pb.CloseTicketReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.CloseTicketRes|null) => void
  ): UnaryResponse;
  viewTicket(
    requestMessage: api_v1alpha1_tickets_ticket_pb.ViewTicketReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.ViewTicketRes|null) => void
  ): UnaryResponse;
  viewTicket(
    requestMessage: api_v1alpha1_tickets_ticket_pb.ViewTicketReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.ViewTicketRes|null) => void
  ): UnaryResponse;
  createComment(
    requestMessage: api_v1alpha1_tickets_ticket_pb.CreateCommentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.CreateCommentRes|null) => void
  ): UnaryResponse;
  createComment(
    requestMessage: api_v1alpha1_tickets_ticket_pb.CreateCommentReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.CreateCommentRes|null) => void
  ): UnaryResponse;
  enableProject(
    requestMessage: api_v1alpha1_tickets_project_pb.EnableProjectReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_project_pb.EnableProjectRes|null) => void
  ): UnaryResponse;
  enableProject(
    requestMessage: api_v1alpha1_tickets_project_pb.EnableProjectReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_project_pb.EnableProjectRes|null) => void
  ): UnaryResponse;
  listEnabledProjects(
    requestMessage: api_v1alpha1_tickets_project_pb.ListEnabledProjectsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_project_pb.ListEnabledProjectsRes|null) => void
  ): UnaryResponse;
  listEnabledProjects(
    requestMessage: api_v1alpha1_tickets_project_pb.ListEnabledProjectsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_project_pb.ListEnabledProjectsRes|null) => void
  ): UnaryResponse;
  createSLA(
    requestMessage: api_v1alpha1_tickets_ticket_pb.CreateSlaReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.CreateSlaRes|null) => void
  ): UnaryResponse;
  createSLA(
    requestMessage: api_v1alpha1_tickets_ticket_pb.CreateSlaReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.CreateSlaRes|null) => void
  ): UnaryResponse;
  listSLA(
    requestMessage: api_v1alpha1_tickets_ticket_pb.ListSlaReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.ListSlaRes|null) => void
  ): UnaryResponse;
  listSLA(
    requestMessage: api_v1alpha1_tickets_ticket_pb.ListSlaReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.ListSlaRes|null) => void
  ): UnaryResponse;
  updateSLA(
    requestMessage: api_v1alpha1_tickets_ticket_pb.UpdateSlaReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.UpdateSlaRes|null) => void
  ): UnaryResponse;
  updateSLA(
    requestMessage: api_v1alpha1_tickets_ticket_pb.UpdateSlaReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.UpdateSlaRes|null) => void
  ): UnaryResponse;
  listSLACondition(
    requestMessage: api_v1alpha1_tickets_ticket_pb.ListSlaConditionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.ListSlaConditionRes|null) => void
  ): UnaryResponse;
  listSLACondition(
    requestMessage: api_v1alpha1_tickets_ticket_pb.ListSlaConditionReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.ListSlaConditionRes|null) => void
  ): UnaryResponse;
  replyComment(
    requestMessage: api_v1alpha1_tickets_ticket_pb.ReplyCommentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.ReplyCommentRes|null) => void
  ): UnaryResponse;
  replyComment(
    requestMessage: api_v1alpha1_tickets_ticket_pb.ReplyCommentReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.ReplyCommentRes|null) => void
  ): UnaryResponse;
  listTicketAuditLog(
    requestMessage: api_v1alpha1_tickets_project_pb.ListTicketAuditLogReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_project_pb.ListTicketAuditLogRes|null) => void
  ): UnaryResponse;
  listTicketAuditLog(
    requestMessage: api_v1alpha1_tickets_project_pb.ListTicketAuditLogReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_project_pb.ListTicketAuditLogRes|null) => void
  ): UnaryResponse;
}

