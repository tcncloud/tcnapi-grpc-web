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

type TicketsAssignSelf = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.CreateSelfAssignReq;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.CreateSelfAssignRes;
};

type TicketsEditMaskTicket = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.EditMaskTicketReq;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.EditMaskTicketRes;
};

type TicketsListAllocatedTickets = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.ListAllocatedTicketReq;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.ListAllocatedTicketRes;
};

type TicketsListAvailableAgentTickets = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.ListAvailableAgentTicketsRequest;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.ListAvailableAgentTicketsResponse;
};

type TicketsListSkills = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.ListSkillsRequest;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.ListSkillsResponse;
};

type TicketsListUsers = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.ListUsersRequest;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.ListUsersResponse;
};

type TicketsCloseTicketAction = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.CloseTicketActionRequest;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.CloseTicketActionResponse;
};

type TicketsAssignTicketAction = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.AssignTicketActionRequest;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.AssignTicketActionResponse;
};

type TicketsCreateTicketAction = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.CreateTicketActionRequest;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.CreateTicketActionResponse;
};

type TicketsChangeTicketStatus = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.ChangeTicketStatusRequest;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.ChangeTicketStatusResponse;
};

type TicketsCreateTicketTemplate = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.CreateTicketTemplateRequest;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.CreateTicketTemplateResponse;
};

type TicketsEditTicketTemplate = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.EditTicketTemplateRequest;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.EditTicketTemplateResponse;
};

type TicketsListTicketTemplate = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.ListTicketTemplateRequest;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.ListTicketTemplateResponse;
};

type TicketsAssignTicketTemplate = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.AssignProjectTemplateRequest;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.AssignProjectTemplateResponse;
};

type TicketsGetAllActionType = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.GetActionTypeRequest;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.GetActionTypeResponse;
};

type TicketsGetPhoneNumberType = {
  readonly methodName: string;
  readonly service: typeof Tickets;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_tickets_ticket_pb.GetPhoneNumberTypeRequest;
  readonly responseType: typeof api_v1alpha1_tickets_ticket_pb.GetPhoneNumberTypeResponse;
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
  static readonly AssignSelf: TicketsAssignSelf;
  static readonly EditMaskTicket: TicketsEditMaskTicket;
  static readonly ListAllocatedTickets: TicketsListAllocatedTickets;
  static readonly ListAvailableAgentTickets: TicketsListAvailableAgentTickets;
  static readonly ListSkills: TicketsListSkills;
  static readonly ListUsers: TicketsListUsers;
  static readonly CloseTicketAction: TicketsCloseTicketAction;
  static readonly AssignTicketAction: TicketsAssignTicketAction;
  static readonly CreateTicketAction: TicketsCreateTicketAction;
  static readonly ChangeTicketStatus: TicketsChangeTicketStatus;
  static readonly CreateTicketTemplate: TicketsCreateTicketTemplate;
  static readonly EditTicketTemplate: TicketsEditTicketTemplate;
  static readonly ListTicketTemplate: TicketsListTicketTemplate;
  static readonly AssignTicketTemplate: TicketsAssignTicketTemplate;
  static readonly GetAllActionType: TicketsGetAllActionType;
  static readonly GetPhoneNumberType: TicketsGetPhoneNumberType;
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
  assignSelf(
    requestMessage: api_v1alpha1_tickets_ticket_pb.CreateSelfAssignReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.CreateSelfAssignRes|null) => void
  ): UnaryResponse;
  assignSelf(
    requestMessage: api_v1alpha1_tickets_ticket_pb.CreateSelfAssignReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.CreateSelfAssignRes|null) => void
  ): UnaryResponse;
  editMaskTicket(
    requestMessage: api_v1alpha1_tickets_ticket_pb.EditMaskTicketReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.EditMaskTicketRes|null) => void
  ): UnaryResponse;
  editMaskTicket(
    requestMessage: api_v1alpha1_tickets_ticket_pb.EditMaskTicketReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.EditMaskTicketRes|null) => void
  ): UnaryResponse;
  listAllocatedTickets(
    requestMessage: api_v1alpha1_tickets_ticket_pb.ListAllocatedTicketReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.ListAllocatedTicketRes|null) => void
  ): UnaryResponse;
  listAllocatedTickets(
    requestMessage: api_v1alpha1_tickets_ticket_pb.ListAllocatedTicketReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.ListAllocatedTicketRes|null) => void
  ): UnaryResponse;
  listAvailableAgentTickets(
    requestMessage: api_v1alpha1_tickets_ticket_pb.ListAvailableAgentTicketsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.ListAvailableAgentTicketsResponse|null) => void
  ): UnaryResponse;
  listAvailableAgentTickets(
    requestMessage: api_v1alpha1_tickets_ticket_pb.ListAvailableAgentTicketsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.ListAvailableAgentTicketsResponse|null) => void
  ): UnaryResponse;
  listSkills(
    requestMessage: api_v1alpha1_tickets_ticket_pb.ListSkillsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.ListSkillsResponse|null) => void
  ): UnaryResponse;
  listSkills(
    requestMessage: api_v1alpha1_tickets_ticket_pb.ListSkillsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.ListSkillsResponse|null) => void
  ): UnaryResponse;
  listUsers(
    requestMessage: api_v1alpha1_tickets_ticket_pb.ListUsersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.ListUsersResponse|null) => void
  ): UnaryResponse;
  listUsers(
    requestMessage: api_v1alpha1_tickets_ticket_pb.ListUsersRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.ListUsersResponse|null) => void
  ): UnaryResponse;
  closeTicketAction(
    requestMessage: api_v1alpha1_tickets_ticket_pb.CloseTicketActionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.CloseTicketActionResponse|null) => void
  ): UnaryResponse;
  closeTicketAction(
    requestMessage: api_v1alpha1_tickets_ticket_pb.CloseTicketActionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.CloseTicketActionResponse|null) => void
  ): UnaryResponse;
  assignTicketAction(
    requestMessage: api_v1alpha1_tickets_ticket_pb.AssignTicketActionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.AssignTicketActionResponse|null) => void
  ): UnaryResponse;
  assignTicketAction(
    requestMessage: api_v1alpha1_tickets_ticket_pb.AssignTicketActionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.AssignTicketActionResponse|null) => void
  ): UnaryResponse;
  createTicketAction(
    requestMessage: api_v1alpha1_tickets_ticket_pb.CreateTicketActionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.CreateTicketActionResponse|null) => void
  ): UnaryResponse;
  createTicketAction(
    requestMessage: api_v1alpha1_tickets_ticket_pb.CreateTicketActionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.CreateTicketActionResponse|null) => void
  ): UnaryResponse;
  changeTicketStatus(
    requestMessage: api_v1alpha1_tickets_ticket_pb.ChangeTicketStatusRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.ChangeTicketStatusResponse|null) => void
  ): UnaryResponse;
  changeTicketStatus(
    requestMessage: api_v1alpha1_tickets_ticket_pb.ChangeTicketStatusRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.ChangeTicketStatusResponse|null) => void
  ): UnaryResponse;
  createTicketTemplate(
    requestMessage: api_v1alpha1_tickets_ticket_pb.CreateTicketTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.CreateTicketTemplateResponse|null) => void
  ): UnaryResponse;
  createTicketTemplate(
    requestMessage: api_v1alpha1_tickets_ticket_pb.CreateTicketTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.CreateTicketTemplateResponse|null) => void
  ): UnaryResponse;
  editTicketTemplate(
    requestMessage: api_v1alpha1_tickets_ticket_pb.EditTicketTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.EditTicketTemplateResponse|null) => void
  ): UnaryResponse;
  editTicketTemplate(
    requestMessage: api_v1alpha1_tickets_ticket_pb.EditTicketTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.EditTicketTemplateResponse|null) => void
  ): UnaryResponse;
  listTicketTemplate(
    requestMessage: api_v1alpha1_tickets_ticket_pb.ListTicketTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.ListTicketTemplateResponse|null) => void
  ): UnaryResponse;
  listTicketTemplate(
    requestMessage: api_v1alpha1_tickets_ticket_pb.ListTicketTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.ListTicketTemplateResponse|null) => void
  ): UnaryResponse;
  assignTicketTemplate(
    requestMessage: api_v1alpha1_tickets_ticket_pb.AssignProjectTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.AssignProjectTemplateResponse|null) => void
  ): UnaryResponse;
  assignTicketTemplate(
    requestMessage: api_v1alpha1_tickets_ticket_pb.AssignProjectTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.AssignProjectTemplateResponse|null) => void
  ): UnaryResponse;
  getAllActionType(
    requestMessage: api_v1alpha1_tickets_ticket_pb.GetActionTypeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.GetActionTypeResponse|null) => void
  ): UnaryResponse;
  getAllActionType(
    requestMessage: api_v1alpha1_tickets_ticket_pb.GetActionTypeRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.GetActionTypeResponse|null) => void
  ): UnaryResponse;
  getPhoneNumberType(
    requestMessage: api_v1alpha1_tickets_ticket_pb.GetPhoneNumberTypeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.GetPhoneNumberTypeResponse|null) => void
  ): UnaryResponse;
  getPhoneNumberType(
    requestMessage: api_v1alpha1_tickets_ticket_pb.GetPhoneNumberTypeRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_tickets_ticket_pb.GetPhoneNumberTypeResponse|null) => void
  ): UnaryResponse;
}

