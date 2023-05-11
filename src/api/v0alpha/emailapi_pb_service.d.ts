// package: api.v0alpha
// file: api/v0alpha/emailapi.proto

import * as api_v0alpha_emailapi_pb from "../../api/v0alpha/emailapi_pb";
import {grpc} from "@improbable-eng/grpc-web";

type EmailApiCreateEmailTemplate = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.CreateEmailTemplateReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.CreateEmailTemplateRes;
};

type EmailApiUpdateEmailTemplate = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.UpdateEmailTemplateReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.UpdateEmailTemplateRes;
};

type EmailApiCreateEmailTemplateAttachment = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.CreateEmailTemplateAttachmentReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.CreateEmailTemplateAttachmentRes;
};

type EmailApiCopyEmailTemplateWithAttachments = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.CopyEmailTemplateWithAttachmentsReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.CopyEmailTemplateWithAttachmentsRes;
};

type EmailApiUpdateEmailTemplateAttachment = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.UpdateEmailTemplateAttachmentReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.UpdateEmailTemplateAttachmentRes;
};

type EmailApiGetEmailTemplateByTemplateSid = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.GetEmailTemplateByTemplateSidReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.EmailTemplateWithAttachments;
};

type EmailApiGetAllEmailTemplates = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.GetAllEmailTemplatesReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.GetAllEmailTemplatesRes;
};

type EmailApiDeleteEmailTemplate = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.DeleteEmailTemplateReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.DeleteEmailTemplateRes;
};

type EmailApiDeleteEmailTemplateAttachmentById = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.DeleteEmailTemplateAttachmentByIdReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.DeleteEmailTemplateAttachmentByIdRes;
};

type EmailApiDownloadInboundEmailAttachment = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.DownloadInboundEmailAttachmentReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.DownloadInboundEmailAttachmentRes;
};

type EmailApiPureEmailGroupSearch = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.EmailGroupSearchReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.EmailGroupSearchRes;
};

type EmailApiManagerListNewEmailMessageReplies = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.ListNewEmailMessageRepliesReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.ListNewEmailMessageRepliesRes;
};

type EmailApiListNewEmailMessageReplies = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.ListNewEmailMessageRepliesReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.ListNewEmailMessageRepliesRes;
};

type EmailApiGetEmailTasksByGroupSids = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.GetEmailTasksByGroupSidsReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.GetEmailTasksByGroupSidsRes;
};

type EmailApiUpdateEmailGroupStatus = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.EmailGroupStatusReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.EmailGroupStatusRes;
};

type EmailApiGetEmailMessageDetails = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.GetEmailMessageReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.GetEmailMessageRes;
};

type EmailApiCreateInboundEmailTemplate = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.CreateInboundEmailTemplateReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.CreateInboundEmailTemplateRes;
};

type EmailApiUpdateInboundEmailTemplate = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.UpdateInboundEmailTemplateReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.UpdateInboundEmailTemplateRes;
};

type EmailApiDeleteInboundEmailTemplateById = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.DeleteInboundEmailTemplateByIdReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.DeleteInboundEmailTemplateByIdRes;
};

type EmailApiListInboundEmailTemplates = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.ListInboundEmailTemplatesReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.ListInboundEmailTemplatesRes;
};

type EmailApiGetInboundEmailTemplateById = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.GetInboundEmailTemplateByIdReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.InboundEmailTemplate;
};

type EmailApiUpdateInboundEmailGroupStatus = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.UpdateInboundEmailGroupStatusReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.UpdateInboundEmailGroupStatusRes;
};

type EmailApiStopInboundEmailGroup = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.StopInboundEmailGroupReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.StopInboundEmailGroupRes;
};

type EmailApiStopAllInboundEmailGroups = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.StopAllInboundEmailGroupsReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.StopInboundEmailGroupRes;
};

type EmailApiPureInboundEmailGroupSearch = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.PureInboundEmailGroupSearchReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.PureInboundEmailGroupSearchRes;
};

type EmailApiInboundEmailGroupSearch = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.InboundEmailGroupSearchReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.InboundEmailGroupSearchRes;
};

type EmailApiListInboundEmailGroupsByGroupIds = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.ListInboundEmailGroupsByGroupIdsReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.ListInboundEmailGroupsByGroupIdsRes;
};

type EmailApiListInboundEmailTasksByGroupIds = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.ListInboundEmailTasksByGroupIdsReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.ListInboundEmailTasksByGroupIdsRes;
};

type EmailApiListActiveInboundEmailGroups = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.ListActiveInboundEmailGroupsReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.ListActiveInboundEmailGroupsRes;
};

type EmailApiSchedule = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.ScheduleReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.ScheduleRes;
};

type EmailApiScheduleOutboundEmailGroup = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.ScheduleOutboundEmailGroupReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.ScheduleOutboundEmailGroupRes;
};

type EmailApiSchedulePureInboundEmail = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.SchedulePureInboundEmailReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.SchedulePureInboundEmailRes;
};

type EmailApiCreateEmailMessageAgentReply = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.CreateEmailMessageAgentReplyReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.EmailMessageReplyWithAttachments;
};

type EmailApiCreateEmailMessageAgentReplyAttachment = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.CreateEmailMessageAgentReplyAttachmentReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.CreateEmailMessageAgentReplyAttachmentRes;
};

type EmailApiSendReply = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.SendReplyReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.EmailMessageReplyWithAttachments;
};

type EmailApiGetEmailGroupsByGroupSids = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.GetEmailGroupsByGroupSidsReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.GetEmailGroupsByGroupSidsRes;
};

type EmailApiGetEmailGroupByGroupSid = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.GetEmailGroupByGroupSidReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.EmailGroupDetailsWithAttachments;
};

type EmailApiGetEmailGroupByGroupId = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.GetEmailGroupByGroupIdReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.EmailGroupDetailsWithAttachments;
};

type EmailApiSchedulePureOmniLinkInboundEmail = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.SchedulePureOmniLinkInboundEmailReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.SchedulePureOmniLinkInboundEmailRes;
};

type EmailApiUpdateInboundEmailGroup = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.UpdateInboundEmailGroupReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.UpdateInboundEmailGroupRes;
};

type EmailApiUpdateEmailGroupMstrSendsPerMinute = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.EmailGroupSendsPerMinuteReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.EmailGroupSendsPerMinuteRes;
};

type EmailApiUpdateOutboundEmailGroup = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.UpdateOutboundEmailGroupReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.UpdateOutboundEmailGroupRes;
};

type EmailApiGetInboundEmailGroupById = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.InboundEmailGroupByIdReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.InboundEmailGroup;
};

type EmailApiCreateEmailMessageAttachment = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.CreateEmailMessageAttachmentReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.CreateEmailMessageAttachmentRes;
};

type EmailApiListEmailMessageAttachments = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.ListEmailMessageAttachmentsReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.ListEmailMessageAttachmentsRes;
};

type EmailApiUnassignCurrentUserFromEmailConversation = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.UnassignCurrentUserFromEmailConversationReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.UnassignUserFromEmailConversationRes;
};

type EmailApiDashboardEmailConversationSearch = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.DashboardEmailConversationSearchReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.DashboardEmailConversationSearchRes;
};

type EmailApiReassignEmailConversation = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.ReassignEmailConversationReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.ReassignEmailConversationRes;
};

type EmailApiAssignEmailConversation = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.AssignEmailConversationReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.AssignEmailConversationRes;
};

type EmailApiSuspendEmailConversation = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.SuspendEmailConversationReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.SuspendEmailConversationRes;
};

type EmailApiListCampaignsByConnectedInboxId = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.ListCampaignsByConnectedInboxIdReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.ListCampaignsByConnectedInboxIdRes;
};

type EmailApiCloseEmailConversation = {
  readonly methodName: string;
  readonly service: typeof EmailApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_emailapi_pb.CloseEmailConversationReq;
  readonly responseType: typeof api_v0alpha_emailapi_pb.CloseEmailConversationRes;
};

export class EmailApi {
  static readonly serviceName: string;
  static readonly CreateEmailTemplate: EmailApiCreateEmailTemplate;
  static readonly UpdateEmailTemplate: EmailApiUpdateEmailTemplate;
  static readonly CreateEmailTemplateAttachment: EmailApiCreateEmailTemplateAttachment;
  static readonly CopyEmailTemplateWithAttachments: EmailApiCopyEmailTemplateWithAttachments;
  static readonly UpdateEmailTemplateAttachment: EmailApiUpdateEmailTemplateAttachment;
  static readonly GetEmailTemplateByTemplateSid: EmailApiGetEmailTemplateByTemplateSid;
  static readonly GetAllEmailTemplates: EmailApiGetAllEmailTemplates;
  static readonly DeleteEmailTemplate: EmailApiDeleteEmailTemplate;
  static readonly DeleteEmailTemplateAttachmentById: EmailApiDeleteEmailTemplateAttachmentById;
  static readonly DownloadInboundEmailAttachment: EmailApiDownloadInboundEmailAttachment;
  static readonly PureEmailGroupSearch: EmailApiPureEmailGroupSearch;
  static readonly ManagerListNewEmailMessageReplies: EmailApiManagerListNewEmailMessageReplies;
  static readonly ListNewEmailMessageReplies: EmailApiListNewEmailMessageReplies;
  static readonly GetEmailTasksByGroupSids: EmailApiGetEmailTasksByGroupSids;
  static readonly UpdateEmailGroupStatus: EmailApiUpdateEmailGroupStatus;
  static readonly GetEmailMessageDetails: EmailApiGetEmailMessageDetails;
  static readonly CreateInboundEmailTemplate: EmailApiCreateInboundEmailTemplate;
  static readonly UpdateInboundEmailTemplate: EmailApiUpdateInboundEmailTemplate;
  static readonly DeleteInboundEmailTemplateById: EmailApiDeleteInboundEmailTemplateById;
  static readonly ListInboundEmailTemplates: EmailApiListInboundEmailTemplates;
  static readonly GetInboundEmailTemplateById: EmailApiGetInboundEmailTemplateById;
  static readonly UpdateInboundEmailGroupStatus: EmailApiUpdateInboundEmailGroupStatus;
  static readonly StopInboundEmailGroup: EmailApiStopInboundEmailGroup;
  static readonly StopAllInboundEmailGroups: EmailApiStopAllInboundEmailGroups;
  static readonly PureInboundEmailGroupSearch: EmailApiPureInboundEmailGroupSearch;
  static readonly InboundEmailGroupSearch: EmailApiInboundEmailGroupSearch;
  static readonly ListInboundEmailGroupsByGroupIds: EmailApiListInboundEmailGroupsByGroupIds;
  static readonly ListInboundEmailTasksByGroupIds: EmailApiListInboundEmailTasksByGroupIds;
  static readonly ListActiveInboundEmailGroups: EmailApiListActiveInboundEmailGroups;
  static readonly Schedule: EmailApiSchedule;
  static readonly ScheduleOutboundEmailGroup: EmailApiScheduleOutboundEmailGroup;
  static readonly SchedulePureInboundEmail: EmailApiSchedulePureInboundEmail;
  static readonly CreateEmailMessageAgentReply: EmailApiCreateEmailMessageAgentReply;
  static readonly CreateEmailMessageAgentReplyAttachment: EmailApiCreateEmailMessageAgentReplyAttachment;
  static readonly SendReply: EmailApiSendReply;
  static readonly GetEmailGroupsByGroupSids: EmailApiGetEmailGroupsByGroupSids;
  static readonly GetEmailGroupByGroupSid: EmailApiGetEmailGroupByGroupSid;
  static readonly GetEmailGroupByGroupId: EmailApiGetEmailGroupByGroupId;
  static readonly SchedulePureOmniLinkInboundEmail: EmailApiSchedulePureOmniLinkInboundEmail;
  static readonly UpdateInboundEmailGroup: EmailApiUpdateInboundEmailGroup;
  static readonly UpdateEmailGroupMstrSendsPerMinute: EmailApiUpdateEmailGroupMstrSendsPerMinute;
  static readonly UpdateOutboundEmailGroup: EmailApiUpdateOutboundEmailGroup;
  static readonly GetInboundEmailGroupById: EmailApiGetInboundEmailGroupById;
  static readonly CreateEmailMessageAttachment: EmailApiCreateEmailMessageAttachment;
  static readonly ListEmailMessageAttachments: EmailApiListEmailMessageAttachments;
  static readonly UnassignCurrentUserFromEmailConversation: EmailApiUnassignCurrentUserFromEmailConversation;
  static readonly DashboardEmailConversationSearch: EmailApiDashboardEmailConversationSearch;
  static readonly ReassignEmailConversation: EmailApiReassignEmailConversation;
  static readonly AssignEmailConversation: EmailApiAssignEmailConversation;
  static readonly SuspendEmailConversation: EmailApiSuspendEmailConversation;
  static readonly ListCampaignsByConnectedInboxId: EmailApiListCampaignsByConnectedInboxId;
  static readonly CloseEmailConversation: EmailApiCloseEmailConversation;
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

export class EmailApiClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createEmailTemplate(
    requestMessage: api_v0alpha_emailapi_pb.CreateEmailTemplateReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.CreateEmailTemplateRes|null) => void
  ): UnaryResponse;
  createEmailTemplate(
    requestMessage: api_v0alpha_emailapi_pb.CreateEmailTemplateReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.CreateEmailTemplateRes|null) => void
  ): UnaryResponse;
  updateEmailTemplate(
    requestMessage: api_v0alpha_emailapi_pb.UpdateEmailTemplateReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.UpdateEmailTemplateRes|null) => void
  ): UnaryResponse;
  updateEmailTemplate(
    requestMessage: api_v0alpha_emailapi_pb.UpdateEmailTemplateReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.UpdateEmailTemplateRes|null) => void
  ): UnaryResponse;
  createEmailTemplateAttachment(
    requestMessage: api_v0alpha_emailapi_pb.CreateEmailTemplateAttachmentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.CreateEmailTemplateAttachmentRes|null) => void
  ): UnaryResponse;
  createEmailTemplateAttachment(
    requestMessage: api_v0alpha_emailapi_pb.CreateEmailTemplateAttachmentReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.CreateEmailTemplateAttachmentRes|null) => void
  ): UnaryResponse;
  copyEmailTemplateWithAttachments(
    requestMessage: api_v0alpha_emailapi_pb.CopyEmailTemplateWithAttachmentsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.CopyEmailTemplateWithAttachmentsRes|null) => void
  ): UnaryResponse;
  copyEmailTemplateWithAttachments(
    requestMessage: api_v0alpha_emailapi_pb.CopyEmailTemplateWithAttachmentsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.CopyEmailTemplateWithAttachmentsRes|null) => void
  ): UnaryResponse;
  updateEmailTemplateAttachment(
    requestMessage: api_v0alpha_emailapi_pb.UpdateEmailTemplateAttachmentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.UpdateEmailTemplateAttachmentRes|null) => void
  ): UnaryResponse;
  updateEmailTemplateAttachment(
    requestMessage: api_v0alpha_emailapi_pb.UpdateEmailTemplateAttachmentReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.UpdateEmailTemplateAttachmentRes|null) => void
  ): UnaryResponse;
  getEmailTemplateByTemplateSid(
    requestMessage: api_v0alpha_emailapi_pb.GetEmailTemplateByTemplateSidReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.EmailTemplateWithAttachments|null) => void
  ): UnaryResponse;
  getEmailTemplateByTemplateSid(
    requestMessage: api_v0alpha_emailapi_pb.GetEmailTemplateByTemplateSidReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.EmailTemplateWithAttachments|null) => void
  ): UnaryResponse;
  getAllEmailTemplates(
    requestMessage: api_v0alpha_emailapi_pb.GetAllEmailTemplatesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.GetAllEmailTemplatesRes|null) => void
  ): UnaryResponse;
  getAllEmailTemplates(
    requestMessage: api_v0alpha_emailapi_pb.GetAllEmailTemplatesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.GetAllEmailTemplatesRes|null) => void
  ): UnaryResponse;
  deleteEmailTemplate(
    requestMessage: api_v0alpha_emailapi_pb.DeleteEmailTemplateReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.DeleteEmailTemplateRes|null) => void
  ): UnaryResponse;
  deleteEmailTemplate(
    requestMessage: api_v0alpha_emailapi_pb.DeleteEmailTemplateReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.DeleteEmailTemplateRes|null) => void
  ): UnaryResponse;
  deleteEmailTemplateAttachmentById(
    requestMessage: api_v0alpha_emailapi_pb.DeleteEmailTemplateAttachmentByIdReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.DeleteEmailTemplateAttachmentByIdRes|null) => void
  ): UnaryResponse;
  deleteEmailTemplateAttachmentById(
    requestMessage: api_v0alpha_emailapi_pb.DeleteEmailTemplateAttachmentByIdReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.DeleteEmailTemplateAttachmentByIdRes|null) => void
  ): UnaryResponse;
  downloadInboundEmailAttachment(
    requestMessage: api_v0alpha_emailapi_pb.DownloadInboundEmailAttachmentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.DownloadInboundEmailAttachmentRes|null) => void
  ): UnaryResponse;
  downloadInboundEmailAttachment(
    requestMessage: api_v0alpha_emailapi_pb.DownloadInboundEmailAttachmentReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.DownloadInboundEmailAttachmentRes|null) => void
  ): UnaryResponse;
  pureEmailGroupSearch(
    requestMessage: api_v0alpha_emailapi_pb.EmailGroupSearchReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.EmailGroupSearchRes|null) => void
  ): UnaryResponse;
  pureEmailGroupSearch(
    requestMessage: api_v0alpha_emailapi_pb.EmailGroupSearchReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.EmailGroupSearchRes|null) => void
  ): UnaryResponse;
  managerListNewEmailMessageReplies(
    requestMessage: api_v0alpha_emailapi_pb.ListNewEmailMessageRepliesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.ListNewEmailMessageRepliesRes|null) => void
  ): UnaryResponse;
  managerListNewEmailMessageReplies(
    requestMessage: api_v0alpha_emailapi_pb.ListNewEmailMessageRepliesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.ListNewEmailMessageRepliesRes|null) => void
  ): UnaryResponse;
  listNewEmailMessageReplies(
    requestMessage: api_v0alpha_emailapi_pb.ListNewEmailMessageRepliesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.ListNewEmailMessageRepliesRes|null) => void
  ): UnaryResponse;
  listNewEmailMessageReplies(
    requestMessage: api_v0alpha_emailapi_pb.ListNewEmailMessageRepliesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.ListNewEmailMessageRepliesRes|null) => void
  ): UnaryResponse;
  getEmailTasksByGroupSids(
    requestMessage: api_v0alpha_emailapi_pb.GetEmailTasksByGroupSidsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.GetEmailTasksByGroupSidsRes|null) => void
  ): UnaryResponse;
  getEmailTasksByGroupSids(
    requestMessage: api_v0alpha_emailapi_pb.GetEmailTasksByGroupSidsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.GetEmailTasksByGroupSidsRes|null) => void
  ): UnaryResponse;
  updateEmailGroupStatus(
    requestMessage: api_v0alpha_emailapi_pb.EmailGroupStatusReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.EmailGroupStatusRes|null) => void
  ): UnaryResponse;
  updateEmailGroupStatus(
    requestMessage: api_v0alpha_emailapi_pb.EmailGroupStatusReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.EmailGroupStatusRes|null) => void
  ): UnaryResponse;
  getEmailMessageDetails(
    requestMessage: api_v0alpha_emailapi_pb.GetEmailMessageReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.GetEmailMessageRes|null) => void
  ): UnaryResponse;
  getEmailMessageDetails(
    requestMessage: api_v0alpha_emailapi_pb.GetEmailMessageReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.GetEmailMessageRes|null) => void
  ): UnaryResponse;
  createInboundEmailTemplate(
    requestMessage: api_v0alpha_emailapi_pb.CreateInboundEmailTemplateReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.CreateInboundEmailTemplateRes|null) => void
  ): UnaryResponse;
  createInboundEmailTemplate(
    requestMessage: api_v0alpha_emailapi_pb.CreateInboundEmailTemplateReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.CreateInboundEmailTemplateRes|null) => void
  ): UnaryResponse;
  updateInboundEmailTemplate(
    requestMessage: api_v0alpha_emailapi_pb.UpdateInboundEmailTemplateReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.UpdateInboundEmailTemplateRes|null) => void
  ): UnaryResponse;
  updateInboundEmailTemplate(
    requestMessage: api_v0alpha_emailapi_pb.UpdateInboundEmailTemplateReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.UpdateInboundEmailTemplateRes|null) => void
  ): UnaryResponse;
  deleteInboundEmailTemplateById(
    requestMessage: api_v0alpha_emailapi_pb.DeleteInboundEmailTemplateByIdReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.DeleteInboundEmailTemplateByIdRes|null) => void
  ): UnaryResponse;
  deleteInboundEmailTemplateById(
    requestMessage: api_v0alpha_emailapi_pb.DeleteInboundEmailTemplateByIdReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.DeleteInboundEmailTemplateByIdRes|null) => void
  ): UnaryResponse;
  listInboundEmailTemplates(
    requestMessage: api_v0alpha_emailapi_pb.ListInboundEmailTemplatesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.ListInboundEmailTemplatesRes|null) => void
  ): UnaryResponse;
  listInboundEmailTemplates(
    requestMessage: api_v0alpha_emailapi_pb.ListInboundEmailTemplatesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.ListInboundEmailTemplatesRes|null) => void
  ): UnaryResponse;
  getInboundEmailTemplateById(
    requestMessage: api_v0alpha_emailapi_pb.GetInboundEmailTemplateByIdReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.InboundEmailTemplate|null) => void
  ): UnaryResponse;
  getInboundEmailTemplateById(
    requestMessage: api_v0alpha_emailapi_pb.GetInboundEmailTemplateByIdReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.InboundEmailTemplate|null) => void
  ): UnaryResponse;
  updateInboundEmailGroupStatus(
    requestMessage: api_v0alpha_emailapi_pb.UpdateInboundEmailGroupStatusReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.UpdateInboundEmailGroupStatusRes|null) => void
  ): UnaryResponse;
  updateInboundEmailGroupStatus(
    requestMessage: api_v0alpha_emailapi_pb.UpdateInboundEmailGroupStatusReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.UpdateInboundEmailGroupStatusRes|null) => void
  ): UnaryResponse;
  stopInboundEmailGroup(
    requestMessage: api_v0alpha_emailapi_pb.StopInboundEmailGroupReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.StopInboundEmailGroupRes|null) => void
  ): UnaryResponse;
  stopInboundEmailGroup(
    requestMessage: api_v0alpha_emailapi_pb.StopInboundEmailGroupReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.StopInboundEmailGroupRes|null) => void
  ): UnaryResponse;
  stopAllInboundEmailGroups(
    requestMessage: api_v0alpha_emailapi_pb.StopAllInboundEmailGroupsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.StopInboundEmailGroupRes|null) => void
  ): UnaryResponse;
  stopAllInboundEmailGroups(
    requestMessage: api_v0alpha_emailapi_pb.StopAllInboundEmailGroupsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.StopInboundEmailGroupRes|null) => void
  ): UnaryResponse;
  pureInboundEmailGroupSearch(
    requestMessage: api_v0alpha_emailapi_pb.PureInboundEmailGroupSearchReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.PureInboundEmailGroupSearchRes|null) => void
  ): UnaryResponse;
  pureInboundEmailGroupSearch(
    requestMessage: api_v0alpha_emailapi_pb.PureInboundEmailGroupSearchReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.PureInboundEmailGroupSearchRes|null) => void
  ): UnaryResponse;
  inboundEmailGroupSearch(
    requestMessage: api_v0alpha_emailapi_pb.InboundEmailGroupSearchReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.InboundEmailGroupSearchRes|null) => void
  ): UnaryResponse;
  inboundEmailGroupSearch(
    requestMessage: api_v0alpha_emailapi_pb.InboundEmailGroupSearchReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.InboundEmailGroupSearchRes|null) => void
  ): UnaryResponse;
  listInboundEmailGroupsByGroupIds(
    requestMessage: api_v0alpha_emailapi_pb.ListInboundEmailGroupsByGroupIdsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.ListInboundEmailGroupsByGroupIdsRes|null) => void
  ): UnaryResponse;
  listInboundEmailGroupsByGroupIds(
    requestMessage: api_v0alpha_emailapi_pb.ListInboundEmailGroupsByGroupIdsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.ListInboundEmailGroupsByGroupIdsRes|null) => void
  ): UnaryResponse;
  listInboundEmailTasksByGroupIds(
    requestMessage: api_v0alpha_emailapi_pb.ListInboundEmailTasksByGroupIdsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.ListInboundEmailTasksByGroupIdsRes|null) => void
  ): UnaryResponse;
  listInboundEmailTasksByGroupIds(
    requestMessage: api_v0alpha_emailapi_pb.ListInboundEmailTasksByGroupIdsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.ListInboundEmailTasksByGroupIdsRes|null) => void
  ): UnaryResponse;
  listActiveInboundEmailGroups(
    requestMessage: api_v0alpha_emailapi_pb.ListActiveInboundEmailGroupsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.ListActiveInboundEmailGroupsRes|null) => void
  ): UnaryResponse;
  listActiveInboundEmailGroups(
    requestMessage: api_v0alpha_emailapi_pb.ListActiveInboundEmailGroupsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.ListActiveInboundEmailGroupsRes|null) => void
  ): UnaryResponse;
  schedule(
    requestMessage: api_v0alpha_emailapi_pb.ScheduleReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.ScheduleRes|null) => void
  ): UnaryResponse;
  schedule(
    requestMessage: api_v0alpha_emailapi_pb.ScheduleReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.ScheduleRes|null) => void
  ): UnaryResponse;
  scheduleOutboundEmailGroup(
    requestMessage: api_v0alpha_emailapi_pb.ScheduleOutboundEmailGroupReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.ScheduleOutboundEmailGroupRes|null) => void
  ): UnaryResponse;
  scheduleOutboundEmailGroup(
    requestMessage: api_v0alpha_emailapi_pb.ScheduleOutboundEmailGroupReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.ScheduleOutboundEmailGroupRes|null) => void
  ): UnaryResponse;
  schedulePureInboundEmail(
    requestMessage: api_v0alpha_emailapi_pb.SchedulePureInboundEmailReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.SchedulePureInboundEmailRes|null) => void
  ): UnaryResponse;
  schedulePureInboundEmail(
    requestMessage: api_v0alpha_emailapi_pb.SchedulePureInboundEmailReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.SchedulePureInboundEmailRes|null) => void
  ): UnaryResponse;
  createEmailMessageAgentReply(
    requestMessage: api_v0alpha_emailapi_pb.CreateEmailMessageAgentReplyReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.EmailMessageReplyWithAttachments|null) => void
  ): UnaryResponse;
  createEmailMessageAgentReply(
    requestMessage: api_v0alpha_emailapi_pb.CreateEmailMessageAgentReplyReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.EmailMessageReplyWithAttachments|null) => void
  ): UnaryResponse;
  createEmailMessageAgentReplyAttachment(
    requestMessage: api_v0alpha_emailapi_pb.CreateEmailMessageAgentReplyAttachmentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.CreateEmailMessageAgentReplyAttachmentRes|null) => void
  ): UnaryResponse;
  createEmailMessageAgentReplyAttachment(
    requestMessage: api_v0alpha_emailapi_pb.CreateEmailMessageAgentReplyAttachmentReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.CreateEmailMessageAgentReplyAttachmentRes|null) => void
  ): UnaryResponse;
  sendReply(
    requestMessage: api_v0alpha_emailapi_pb.SendReplyReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.EmailMessageReplyWithAttachments|null) => void
  ): UnaryResponse;
  sendReply(
    requestMessage: api_v0alpha_emailapi_pb.SendReplyReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.EmailMessageReplyWithAttachments|null) => void
  ): UnaryResponse;
  getEmailGroupsByGroupSids(
    requestMessage: api_v0alpha_emailapi_pb.GetEmailGroupsByGroupSidsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.GetEmailGroupsByGroupSidsRes|null) => void
  ): UnaryResponse;
  getEmailGroupsByGroupSids(
    requestMessage: api_v0alpha_emailapi_pb.GetEmailGroupsByGroupSidsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.GetEmailGroupsByGroupSidsRes|null) => void
  ): UnaryResponse;
  getEmailGroupByGroupSid(
    requestMessage: api_v0alpha_emailapi_pb.GetEmailGroupByGroupSidReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.EmailGroupDetailsWithAttachments|null) => void
  ): UnaryResponse;
  getEmailGroupByGroupSid(
    requestMessage: api_v0alpha_emailapi_pb.GetEmailGroupByGroupSidReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.EmailGroupDetailsWithAttachments|null) => void
  ): UnaryResponse;
  getEmailGroupByGroupId(
    requestMessage: api_v0alpha_emailapi_pb.GetEmailGroupByGroupIdReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.EmailGroupDetailsWithAttachments|null) => void
  ): UnaryResponse;
  getEmailGroupByGroupId(
    requestMessage: api_v0alpha_emailapi_pb.GetEmailGroupByGroupIdReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.EmailGroupDetailsWithAttachments|null) => void
  ): UnaryResponse;
  schedulePureOmniLinkInboundEmail(
    requestMessage: api_v0alpha_emailapi_pb.SchedulePureOmniLinkInboundEmailReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.SchedulePureOmniLinkInboundEmailRes|null) => void
  ): UnaryResponse;
  schedulePureOmniLinkInboundEmail(
    requestMessage: api_v0alpha_emailapi_pb.SchedulePureOmniLinkInboundEmailReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.SchedulePureOmniLinkInboundEmailRes|null) => void
  ): UnaryResponse;
  updateInboundEmailGroup(
    requestMessage: api_v0alpha_emailapi_pb.UpdateInboundEmailGroupReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.UpdateInboundEmailGroupRes|null) => void
  ): UnaryResponse;
  updateInboundEmailGroup(
    requestMessage: api_v0alpha_emailapi_pb.UpdateInboundEmailGroupReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.UpdateInboundEmailGroupRes|null) => void
  ): UnaryResponse;
  updateEmailGroupMstrSendsPerMinute(
    requestMessage: api_v0alpha_emailapi_pb.EmailGroupSendsPerMinuteReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.EmailGroupSendsPerMinuteRes|null) => void
  ): UnaryResponse;
  updateEmailGroupMstrSendsPerMinute(
    requestMessage: api_v0alpha_emailapi_pb.EmailGroupSendsPerMinuteReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.EmailGroupSendsPerMinuteRes|null) => void
  ): UnaryResponse;
  updateOutboundEmailGroup(
    requestMessage: api_v0alpha_emailapi_pb.UpdateOutboundEmailGroupReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.UpdateOutboundEmailGroupRes|null) => void
  ): UnaryResponse;
  updateOutboundEmailGroup(
    requestMessage: api_v0alpha_emailapi_pb.UpdateOutboundEmailGroupReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.UpdateOutboundEmailGroupRes|null) => void
  ): UnaryResponse;
  getInboundEmailGroupById(
    requestMessage: api_v0alpha_emailapi_pb.InboundEmailGroupByIdReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.InboundEmailGroup|null) => void
  ): UnaryResponse;
  getInboundEmailGroupById(
    requestMessage: api_v0alpha_emailapi_pb.InboundEmailGroupByIdReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.InboundEmailGroup|null) => void
  ): UnaryResponse;
  createEmailMessageAttachment(
    requestMessage: api_v0alpha_emailapi_pb.CreateEmailMessageAttachmentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.CreateEmailMessageAttachmentRes|null) => void
  ): UnaryResponse;
  createEmailMessageAttachment(
    requestMessage: api_v0alpha_emailapi_pb.CreateEmailMessageAttachmentReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.CreateEmailMessageAttachmentRes|null) => void
  ): UnaryResponse;
  listEmailMessageAttachments(
    requestMessage: api_v0alpha_emailapi_pb.ListEmailMessageAttachmentsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.ListEmailMessageAttachmentsRes|null) => void
  ): UnaryResponse;
  listEmailMessageAttachments(
    requestMessage: api_v0alpha_emailapi_pb.ListEmailMessageAttachmentsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.ListEmailMessageAttachmentsRes|null) => void
  ): UnaryResponse;
  unassignCurrentUserFromEmailConversation(
    requestMessage: api_v0alpha_emailapi_pb.UnassignCurrentUserFromEmailConversationReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.UnassignUserFromEmailConversationRes|null) => void
  ): UnaryResponse;
  unassignCurrentUserFromEmailConversation(
    requestMessage: api_v0alpha_emailapi_pb.UnassignCurrentUserFromEmailConversationReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.UnassignUserFromEmailConversationRes|null) => void
  ): UnaryResponse;
  dashboardEmailConversationSearch(
    requestMessage: api_v0alpha_emailapi_pb.DashboardEmailConversationSearchReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.DashboardEmailConversationSearchRes|null) => void
  ): UnaryResponse;
  dashboardEmailConversationSearch(
    requestMessage: api_v0alpha_emailapi_pb.DashboardEmailConversationSearchReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.DashboardEmailConversationSearchRes|null) => void
  ): UnaryResponse;
  reassignEmailConversation(
    requestMessage: api_v0alpha_emailapi_pb.ReassignEmailConversationReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.ReassignEmailConversationRes|null) => void
  ): UnaryResponse;
  reassignEmailConversation(
    requestMessage: api_v0alpha_emailapi_pb.ReassignEmailConversationReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.ReassignEmailConversationRes|null) => void
  ): UnaryResponse;
  assignEmailConversation(
    requestMessage: api_v0alpha_emailapi_pb.AssignEmailConversationReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.AssignEmailConversationRes|null) => void
  ): UnaryResponse;
  assignEmailConversation(
    requestMessage: api_v0alpha_emailapi_pb.AssignEmailConversationReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.AssignEmailConversationRes|null) => void
  ): UnaryResponse;
  suspendEmailConversation(
    requestMessage: api_v0alpha_emailapi_pb.SuspendEmailConversationReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.SuspendEmailConversationRes|null) => void
  ): UnaryResponse;
  suspendEmailConversation(
    requestMessage: api_v0alpha_emailapi_pb.SuspendEmailConversationReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.SuspendEmailConversationRes|null) => void
  ): UnaryResponse;
  listCampaignsByConnectedInboxId(
    requestMessage: api_v0alpha_emailapi_pb.ListCampaignsByConnectedInboxIdReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.ListCampaignsByConnectedInboxIdRes|null) => void
  ): UnaryResponse;
  listCampaignsByConnectedInboxId(
    requestMessage: api_v0alpha_emailapi_pb.ListCampaignsByConnectedInboxIdReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.ListCampaignsByConnectedInboxIdRes|null) => void
  ): UnaryResponse;
  closeEmailConversation(
    requestMessage: api_v0alpha_emailapi_pb.CloseEmailConversationReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.CloseEmailConversationRes|null) => void
  ): UnaryResponse;
  closeEmailConversation(
    requestMessage: api_v0alpha_emailapi_pb.CloseEmailConversationReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_emailapi_pb.CloseEmailConversationRes|null) => void
  ): UnaryResponse;
}

