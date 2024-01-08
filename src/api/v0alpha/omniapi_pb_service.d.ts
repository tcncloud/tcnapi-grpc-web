// package: api.v0alpha
// file: api/v0alpha/omniapi.proto

import * as api_v0alpha_omniapi_pb from "../../api/v0alpha/omniapi_pb";
import * as api_commons_omnichannel_pb from "../../api/commons/omnichannel_pb";
import * as api_commons_types_pb from "../../api/commons/types_pb";
import {grpc} from "@improbable-eng/grpc-web";

type OmniApiArchiveCampaign = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.ArchiveCampaignReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.ArchiveCampaignRes;
};

type OmniApiCreateCampaign = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.CreateCampaignReq;
  readonly responseType: typeof api_commons_omnichannel_pb.OmniCampaign;
};

type OmniApiGetCampaignById = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.GetCampaignByIdReq;
  readonly responseType: typeof api_commons_omnichannel_pb.OmniCampaign;
};

type OmniApiPauseCampaign = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.PauseCampaignReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.PauseCampaignRes;
};

type OmniApiResumeCampaign = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.ResumeCampaignReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.ResumeCampaignRes;
};

type OmniApiUpdateCampaign = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.UpdateCampaignReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.UpdateCampaignRes;
};

type OmniApiUpdateCampaignPacingSpeed = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.UpdateCampaignPacingSpeedReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.UpdateCampaignPacingSpeedRes;
};

type OmniApiSendOmniMessage = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.SendOmniMessageReq;
  readonly responseType: typeof api_commons_types_pb.Empty;
};

type OmniApiManagerSendOmniMessage = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.SendOmniMessageReq;
  readonly responseType: typeof api_commons_types_pb.Empty;
};

type OmniApiCreateDisposition = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.CreateDispositionReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.CreateDispositionRes;
};

type OmniApiDeleteDisposition = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.DeleteDispositionReq;
  readonly responseType: typeof api_commons_types_pb.Empty;
};

type OmniApiListDispositions = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.ListDispositionsReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.ListDispositionsRes;
};

type OmniApiUpdateDisposition = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.UpdateDispositionReq;
  readonly responseType: typeof api_commons_types_pb.Empty;
};

type OmniApiListCustomUnsubscribeLinks = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_commons_types_pb.Empty;
  readonly responseType: typeof api_v0alpha_omniapi_pb.ListCustomUnsubscribeLinksRes;
};

type OmniApiCreateCustomUnsubscribeLink = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_commons_omnichannel_pb.OmniCustomUnsubscribeLink;
  readonly responseType: typeof api_v0alpha_omniapi_pb.CreateCustomUnsubscribeLinkRes;
};

type OmniApiUpdateCustomUnsubscribeLink = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.UpdateCustomUnsubscribeLinkReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.UpdateCustomUnsubscribeLinkRes;
};

type OmniApiDeleteCustomUnsubscribeLink = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.DeleteCustomUnsubscribeLinkReq;
  readonly responseType: typeof api_commons_types_pb.Empty;
};

type OmniApiListCampaigns = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.ListCampaignsReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.ListCampaignsRes;
};

type OmniApiManagerListMessages = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v0alpha_omniapi_pb.ManagerListMessagesReq;
  readonly responseType: typeof api_commons_omnichannel_pb.OmniMessage;
};

type OmniApiListMessages = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v0alpha_omniapi_pb.ListMessagesReq;
  readonly responseType: typeof api_commons_omnichannel_pb.OmniMessage;
};

type OmniApiManagerListConversations = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.ListConversationsReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.ListConversationsRes;
};

type OmniApiListContactLists = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.ListContactListsReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.ListContactListsRes;
};

type OmniApiGetAvailableHeaders = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.GetAvailableHeadersReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.GetAvailableHeadersRes;
};

type OmniApiApproveTask = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.ApproveTaskRequest;
  readonly responseType: typeof api_v0alpha_omniapi_pb.ApproveTaskResponse;
};

type OmniApiGetNextQueuedTask = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.GetNextQueuedTaskRequest;
  readonly responseType: typeof api_v0alpha_omniapi_pb.GetNextQueuedTaskResponse;
};

type OmniApiGetTask = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.GetTaskReq;
  readonly responseType: typeof api_commons_omnichannel_pb.OmniTask;
};

type OmniApiListTasks = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.ListTasksReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.ListTasksRes;
};

type OmniApiRejectTask = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.RejectTaskRequest;
  readonly responseType: typeof api_v0alpha_omniapi_pb.RejectTaskResponse;
};

type OmniApiRequeueTask = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.RequeueTaskRequest;
  readonly responseType: typeof api_v0alpha_omniapi_pb.RequeueTaskResponse;
};

type OmniApiCreateConnectedInbox = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_commons_omnichannel_pb.ConnectedInbox;
  readonly responseType: typeof api_v0alpha_omniapi_pb.CreateConnectedInboxRes;
};

type OmniApiDeleteConnectedInboxBySid = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.DeleteConnectedInboxBySidReq;
  readonly responseType: typeof api_commons_types_pb.Empty;
};

type OmniApiGetConnectedInboxBySid = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.GetConnectedInboxBySidReq;
  readonly responseType: typeof api_commons_omnichannel_pb.ConnectedInbox;
};

type OmniApiPerformSendgridAccountChecks = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.SendgridAccountByClientReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.SendgridAccountByClientRes;
};

type OmniApiListConnectedInboxes = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.ListConnectedInboxesReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.ListConnectedInboxesRes;
};

type OmniApiTestConnectedInbox = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_commons_omnichannel_pb.ConnectedInbox;
  readonly responseType: typeof api_v0alpha_omniapi_pb.TestConnectedInboxRes;
};

type OmniApiUpdateConnectedInbox = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.UpdateConnectedInboxReq;
  readonly responseType: typeof api_commons_types_pb.Empty;
};

type OmniApiCreateVerifiedEmail = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_commons_omnichannel_pb.VerifiedEmail;
  readonly responseType: typeof api_v0alpha_omniapi_pb.CreateVerifiedEmailRes;
};

type OmniApiDeleteVerifiedEmail = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.DeleteVerifiedEmailReq;
  readonly responseType: typeof api_commons_types_pb.Empty;
};

type OmniApiGetVerifiedEmailBySid = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.GetVerifiedEmailBySidReq;
  readonly responseType: typeof api_commons_omnichannel_pb.VerifiedEmail;
};

type OmniApiListVerifiedEmails = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.ListVerifiedEmailsReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.ListVerifiedEmailsRes;
};

type OmniApiResendVerifiedEmail = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.ResendVerifiedEmailReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.ResendVerifiedEmailRes;
};

type OmniApiUpdateVerifiedEmail = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.UpdateVerifiedEmailReq;
  readonly responseType: typeof api_commons_types_pb.Empty;
};

type OmniApiGetPendingGoogleXOAuth2Data = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.GetPendingGoogleXOAuth2DataReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.GetPendingGoogleXOAuth2DataRes;
};

type OmniApiSendEmailNotification = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.SendEmailNotificationReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.SendEmailNotificationRes;
};

type OmniApiSendFeedbackEmail = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.SendFeedbackEmailReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.SendFeedbackEmailRes;
};

type OmniApiGetOmniAttachment = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.GetOmniAttachmentReq;
  readonly responseType: typeof api_commons_omnichannel_pb.OmniAttachment;
};

type OmniApiCreateTasks = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.CreateTasksReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.CreateTasksRes;
};

type OmniApiCreateSignature = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.CreateSignatureReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.CreateSignatureRes;
};

type OmniApiDeleteSignature = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.DeleteSignatureReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.DeleteSignatureRes;
};

type OmniApiListSignatures = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.ListSignaturesReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.ListSignaturesRes;
};

type OmniApiUpdateSignature = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.UpdateSignatureReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.UpdateSignatureRes;
};

type OmniApiSuggestResponse = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.SuggestResponseReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.SuggestResponseRes;
};

type OmniApiCreateProject = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.CreateProjectReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.CreateProjectRes;
};

type OmniApiListProjects = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.ListProjectsReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.ListProjectsRes;
};

type OmniApiEditProjectById = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.EditProjectByIdReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.EditProjectByIdRes;
};

type OmniApiCloseProjectById = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.CloseProjectByIdReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.CloseProjectByIdRes;
};

type OmniApiGetProjectById = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.GetProjectByIdReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.Project;
};

type OmniApiCreateCannedMessage = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.CreateCannedMessageReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.CannedMessage;
};

type OmniApiListCannedMessages = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.ListCannedMessagesReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.ListCannedMessagesRes;
};

type OmniApiUpdateCannedMessage = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.UpdateCannedMessageReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.CannedMessage;
};

type OmniApiGetCannedMessageById = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.GetCannedMessageByIdReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.CannedMessageWithGroup;
};

type OmniApiDeleteCannedMessageById = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.DeleteCannedMessageByIdReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.DeleteCannedMessageByIdRes;
};

type OmniApiCreateCannedMessageGroup = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.CreateCannedMessageGroupReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.CannedMessageGroup;
};

type OmniApiListCannedMessageGroups = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.ListCannedMessageGroupsReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.ListCannedMessageGroupsRes;
};

type OmniApiUpdateCannedMessageGroup = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.UpdateCannedMessageGroupReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.UpdateCannedMessageGroupRes;
};

type OmniApiDeleteCannedMessageGroup = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.DeleteCannedMessageGroupReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.DeleteCannedMessageGroupRes;
};

type OmniApiListCannedMessagesByGroupId = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.ListCannedMessagesByGroupIdReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.ListCannedMessagesByGroupIdRes;
};

type OmniApiGetCannedMessageGroupById = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.GetCannedMessageGroupByIdReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.CannedMessageGroup;
};

type OmniApiListUserSkills = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.ListUserSkillsReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.ListUserSkillsRes;
};

type OmniApiListWhatsAppNumbers = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.ListWhatsAppNumbersReq;
  readonly responseType: typeof api_v0alpha_omniapi_pb.ListWhatsAppNumbersRes;
};

type OmniApiCreateWhatsAppNumber = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.CreateWhatsAppNumberRequest;
  readonly responseType: typeof api_v0alpha_omniapi_pb.CreateWhatsAppNumberResponse;
};

type OmniApiUpdateWhatsAppNumber = {
  readonly methodName: string;
  readonly service: typeof OmniApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_omniapi_pb.UpdateWhatsAppNumberRequest;
  readonly responseType: typeof api_v0alpha_omniapi_pb.UpdateWhatsAppNumberResponse;
};

export class OmniApi {
  static readonly serviceName: string;
  static readonly ArchiveCampaign: OmniApiArchiveCampaign;
  static readonly CreateCampaign: OmniApiCreateCampaign;
  static readonly GetCampaignById: OmniApiGetCampaignById;
  static readonly PauseCampaign: OmniApiPauseCampaign;
  static readonly ResumeCampaign: OmniApiResumeCampaign;
  static readonly UpdateCampaign: OmniApiUpdateCampaign;
  static readonly UpdateCampaignPacingSpeed: OmniApiUpdateCampaignPacingSpeed;
  static readonly SendOmniMessage: OmniApiSendOmniMessage;
  static readonly ManagerSendOmniMessage: OmniApiManagerSendOmniMessage;
  static readonly CreateDisposition: OmniApiCreateDisposition;
  static readonly DeleteDisposition: OmniApiDeleteDisposition;
  static readonly ListDispositions: OmniApiListDispositions;
  static readonly UpdateDisposition: OmniApiUpdateDisposition;
  static readonly ListCustomUnsubscribeLinks: OmniApiListCustomUnsubscribeLinks;
  static readonly CreateCustomUnsubscribeLink: OmniApiCreateCustomUnsubscribeLink;
  static readonly UpdateCustomUnsubscribeLink: OmniApiUpdateCustomUnsubscribeLink;
  static readonly DeleteCustomUnsubscribeLink: OmniApiDeleteCustomUnsubscribeLink;
  static readonly ListCampaigns: OmniApiListCampaigns;
  static readonly ManagerListMessages: OmniApiManagerListMessages;
  static readonly ListMessages: OmniApiListMessages;
  static readonly ManagerListConversations: OmniApiManagerListConversations;
  static readonly ListContactLists: OmniApiListContactLists;
  static readonly GetAvailableHeaders: OmniApiGetAvailableHeaders;
  static readonly ApproveTask: OmniApiApproveTask;
  static readonly GetNextQueuedTask: OmniApiGetNextQueuedTask;
  static readonly GetTask: OmniApiGetTask;
  static readonly ListTasks: OmniApiListTasks;
  static readonly RejectTask: OmniApiRejectTask;
  static readonly RequeueTask: OmniApiRequeueTask;
  static readonly CreateConnectedInbox: OmniApiCreateConnectedInbox;
  static readonly DeleteConnectedInboxBySid: OmniApiDeleteConnectedInboxBySid;
  static readonly GetConnectedInboxBySid: OmniApiGetConnectedInboxBySid;
  static readonly PerformSendgridAccountChecks: OmniApiPerformSendgridAccountChecks;
  static readonly ListConnectedInboxes: OmniApiListConnectedInboxes;
  static readonly TestConnectedInbox: OmniApiTestConnectedInbox;
  static readonly UpdateConnectedInbox: OmniApiUpdateConnectedInbox;
  static readonly CreateVerifiedEmail: OmniApiCreateVerifiedEmail;
  static readonly DeleteVerifiedEmail: OmniApiDeleteVerifiedEmail;
  static readonly GetVerifiedEmailBySid: OmniApiGetVerifiedEmailBySid;
  static readonly ListVerifiedEmails: OmniApiListVerifiedEmails;
  static readonly ResendVerifiedEmail: OmniApiResendVerifiedEmail;
  static readonly UpdateVerifiedEmail: OmniApiUpdateVerifiedEmail;
  static readonly GetPendingGoogleXOAuth2Data: OmniApiGetPendingGoogleXOAuth2Data;
  static readonly SendEmailNotification: OmniApiSendEmailNotification;
  static readonly SendFeedbackEmail: OmniApiSendFeedbackEmail;
  static readonly GetOmniAttachment: OmniApiGetOmniAttachment;
  static readonly CreateTasks: OmniApiCreateTasks;
  static readonly CreateSignature: OmniApiCreateSignature;
  static readonly DeleteSignature: OmniApiDeleteSignature;
  static readonly ListSignatures: OmniApiListSignatures;
  static readonly UpdateSignature: OmniApiUpdateSignature;
  static readonly SuggestResponse: OmniApiSuggestResponse;
  static readonly CreateProject: OmniApiCreateProject;
  static readonly ListProjects: OmniApiListProjects;
  static readonly EditProjectById: OmniApiEditProjectById;
  static readonly CloseProjectById: OmniApiCloseProjectById;
  static readonly GetProjectById: OmniApiGetProjectById;
  static readonly CreateCannedMessage: OmniApiCreateCannedMessage;
  static readonly ListCannedMessages: OmniApiListCannedMessages;
  static readonly UpdateCannedMessage: OmniApiUpdateCannedMessage;
  static readonly GetCannedMessageById: OmniApiGetCannedMessageById;
  static readonly DeleteCannedMessageById: OmniApiDeleteCannedMessageById;
  static readonly CreateCannedMessageGroup: OmniApiCreateCannedMessageGroup;
  static readonly ListCannedMessageGroups: OmniApiListCannedMessageGroups;
  static readonly UpdateCannedMessageGroup: OmniApiUpdateCannedMessageGroup;
  static readonly DeleteCannedMessageGroup: OmniApiDeleteCannedMessageGroup;
  static readonly ListCannedMessagesByGroupId: OmniApiListCannedMessagesByGroupId;
  static readonly GetCannedMessageGroupById: OmniApiGetCannedMessageGroupById;
  static readonly ListUserSkills: OmniApiListUserSkills;
  static readonly ListWhatsAppNumbers: OmniApiListWhatsAppNumbers;
  static readonly CreateWhatsAppNumber: OmniApiCreateWhatsAppNumber;
  static readonly UpdateWhatsAppNumber: OmniApiUpdateWhatsAppNumber;
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

export class OmniApiClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  archiveCampaign(
    requestMessage: api_v0alpha_omniapi_pb.ArchiveCampaignReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ArchiveCampaignRes|null) => void
  ): UnaryResponse;
  archiveCampaign(
    requestMessage: api_v0alpha_omniapi_pb.ArchiveCampaignReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ArchiveCampaignRes|null) => void
  ): UnaryResponse;
  createCampaign(
    requestMessage: api_v0alpha_omniapi_pb.CreateCampaignReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_omnichannel_pb.OmniCampaign|null) => void
  ): UnaryResponse;
  createCampaign(
    requestMessage: api_v0alpha_omniapi_pb.CreateCampaignReq,
    callback: (error: ServiceError|null, responseMessage: api_commons_omnichannel_pb.OmniCampaign|null) => void
  ): UnaryResponse;
  getCampaignById(
    requestMessage: api_v0alpha_omniapi_pb.GetCampaignByIdReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_omnichannel_pb.OmniCampaign|null) => void
  ): UnaryResponse;
  getCampaignById(
    requestMessage: api_v0alpha_omniapi_pb.GetCampaignByIdReq,
    callback: (error: ServiceError|null, responseMessage: api_commons_omnichannel_pb.OmniCampaign|null) => void
  ): UnaryResponse;
  pauseCampaign(
    requestMessage: api_v0alpha_omniapi_pb.PauseCampaignReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.PauseCampaignRes|null) => void
  ): UnaryResponse;
  pauseCampaign(
    requestMessage: api_v0alpha_omniapi_pb.PauseCampaignReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.PauseCampaignRes|null) => void
  ): UnaryResponse;
  resumeCampaign(
    requestMessage: api_v0alpha_omniapi_pb.ResumeCampaignReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ResumeCampaignRes|null) => void
  ): UnaryResponse;
  resumeCampaign(
    requestMessage: api_v0alpha_omniapi_pb.ResumeCampaignReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ResumeCampaignRes|null) => void
  ): UnaryResponse;
  updateCampaign(
    requestMessage: api_v0alpha_omniapi_pb.UpdateCampaignReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.UpdateCampaignRes|null) => void
  ): UnaryResponse;
  updateCampaign(
    requestMessage: api_v0alpha_omniapi_pb.UpdateCampaignReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.UpdateCampaignRes|null) => void
  ): UnaryResponse;
  updateCampaignPacingSpeed(
    requestMessage: api_v0alpha_omniapi_pb.UpdateCampaignPacingSpeedReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.UpdateCampaignPacingSpeedRes|null) => void
  ): UnaryResponse;
  updateCampaignPacingSpeed(
    requestMessage: api_v0alpha_omniapi_pb.UpdateCampaignPacingSpeedReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.UpdateCampaignPacingSpeedRes|null) => void
  ): UnaryResponse;
  sendOmniMessage(
    requestMessage: api_v0alpha_omniapi_pb.SendOmniMessageReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_types_pb.Empty|null) => void
  ): UnaryResponse;
  sendOmniMessage(
    requestMessage: api_v0alpha_omniapi_pb.SendOmniMessageReq,
    callback: (error: ServiceError|null, responseMessage: api_commons_types_pb.Empty|null) => void
  ): UnaryResponse;
  managerSendOmniMessage(
    requestMessage: api_v0alpha_omniapi_pb.SendOmniMessageReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_types_pb.Empty|null) => void
  ): UnaryResponse;
  managerSendOmniMessage(
    requestMessage: api_v0alpha_omniapi_pb.SendOmniMessageReq,
    callback: (error: ServiceError|null, responseMessage: api_commons_types_pb.Empty|null) => void
  ): UnaryResponse;
  createDisposition(
    requestMessage: api_v0alpha_omniapi_pb.CreateDispositionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CreateDispositionRes|null) => void
  ): UnaryResponse;
  createDisposition(
    requestMessage: api_v0alpha_omniapi_pb.CreateDispositionReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CreateDispositionRes|null) => void
  ): UnaryResponse;
  deleteDisposition(
    requestMessage: api_v0alpha_omniapi_pb.DeleteDispositionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_types_pb.Empty|null) => void
  ): UnaryResponse;
  deleteDisposition(
    requestMessage: api_v0alpha_omniapi_pb.DeleteDispositionReq,
    callback: (error: ServiceError|null, responseMessage: api_commons_types_pb.Empty|null) => void
  ): UnaryResponse;
  listDispositions(
    requestMessage: api_v0alpha_omniapi_pb.ListDispositionsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListDispositionsRes|null) => void
  ): UnaryResponse;
  listDispositions(
    requestMessage: api_v0alpha_omniapi_pb.ListDispositionsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListDispositionsRes|null) => void
  ): UnaryResponse;
  updateDisposition(
    requestMessage: api_v0alpha_omniapi_pb.UpdateDispositionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_types_pb.Empty|null) => void
  ): UnaryResponse;
  updateDisposition(
    requestMessage: api_v0alpha_omniapi_pb.UpdateDispositionReq,
    callback: (error: ServiceError|null, responseMessage: api_commons_types_pb.Empty|null) => void
  ): UnaryResponse;
  listCustomUnsubscribeLinks(
    requestMessage: api_commons_types_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListCustomUnsubscribeLinksRes|null) => void
  ): UnaryResponse;
  listCustomUnsubscribeLinks(
    requestMessage: api_commons_types_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListCustomUnsubscribeLinksRes|null) => void
  ): UnaryResponse;
  createCustomUnsubscribeLink(
    requestMessage: api_commons_omnichannel_pb.OmniCustomUnsubscribeLink,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CreateCustomUnsubscribeLinkRes|null) => void
  ): UnaryResponse;
  createCustomUnsubscribeLink(
    requestMessage: api_commons_omnichannel_pb.OmniCustomUnsubscribeLink,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CreateCustomUnsubscribeLinkRes|null) => void
  ): UnaryResponse;
  updateCustomUnsubscribeLink(
    requestMessage: api_v0alpha_omniapi_pb.UpdateCustomUnsubscribeLinkReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.UpdateCustomUnsubscribeLinkRes|null) => void
  ): UnaryResponse;
  updateCustomUnsubscribeLink(
    requestMessage: api_v0alpha_omniapi_pb.UpdateCustomUnsubscribeLinkReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.UpdateCustomUnsubscribeLinkRes|null) => void
  ): UnaryResponse;
  deleteCustomUnsubscribeLink(
    requestMessage: api_v0alpha_omniapi_pb.DeleteCustomUnsubscribeLinkReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_types_pb.Empty|null) => void
  ): UnaryResponse;
  deleteCustomUnsubscribeLink(
    requestMessage: api_v0alpha_omniapi_pb.DeleteCustomUnsubscribeLinkReq,
    callback: (error: ServiceError|null, responseMessage: api_commons_types_pb.Empty|null) => void
  ): UnaryResponse;
  listCampaigns(
    requestMessage: api_v0alpha_omniapi_pb.ListCampaignsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListCampaignsRes|null) => void
  ): UnaryResponse;
  listCampaigns(
    requestMessage: api_v0alpha_omniapi_pb.ListCampaignsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListCampaignsRes|null) => void
  ): UnaryResponse;
  managerListMessages(requestMessage: api_v0alpha_omniapi_pb.ManagerListMessagesReq, metadata?: grpc.Metadata): ResponseStream<api_commons_omnichannel_pb.OmniMessage>;
  listMessages(requestMessage: api_v0alpha_omniapi_pb.ListMessagesReq, metadata?: grpc.Metadata): ResponseStream<api_commons_omnichannel_pb.OmniMessage>;
  managerListConversations(
    requestMessage: api_v0alpha_omniapi_pb.ListConversationsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListConversationsRes|null) => void
  ): UnaryResponse;
  managerListConversations(
    requestMessage: api_v0alpha_omniapi_pb.ListConversationsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListConversationsRes|null) => void
  ): UnaryResponse;
  listContactLists(
    requestMessage: api_v0alpha_omniapi_pb.ListContactListsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListContactListsRes|null) => void
  ): UnaryResponse;
  listContactLists(
    requestMessage: api_v0alpha_omniapi_pb.ListContactListsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListContactListsRes|null) => void
  ): UnaryResponse;
  getAvailableHeaders(
    requestMessage: api_v0alpha_omniapi_pb.GetAvailableHeadersReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.GetAvailableHeadersRes|null) => void
  ): UnaryResponse;
  getAvailableHeaders(
    requestMessage: api_v0alpha_omniapi_pb.GetAvailableHeadersReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.GetAvailableHeadersRes|null) => void
  ): UnaryResponse;
  approveTask(
    requestMessage: api_v0alpha_omniapi_pb.ApproveTaskRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ApproveTaskResponse|null) => void
  ): UnaryResponse;
  approveTask(
    requestMessage: api_v0alpha_omniapi_pb.ApproveTaskRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ApproveTaskResponse|null) => void
  ): UnaryResponse;
  getNextQueuedTask(
    requestMessage: api_v0alpha_omniapi_pb.GetNextQueuedTaskRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.GetNextQueuedTaskResponse|null) => void
  ): UnaryResponse;
  getNextQueuedTask(
    requestMessage: api_v0alpha_omniapi_pb.GetNextQueuedTaskRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.GetNextQueuedTaskResponse|null) => void
  ): UnaryResponse;
  getTask(
    requestMessage: api_v0alpha_omniapi_pb.GetTaskReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_omnichannel_pb.OmniTask|null) => void
  ): UnaryResponse;
  getTask(
    requestMessage: api_v0alpha_omniapi_pb.GetTaskReq,
    callback: (error: ServiceError|null, responseMessage: api_commons_omnichannel_pb.OmniTask|null) => void
  ): UnaryResponse;
  listTasks(
    requestMessage: api_v0alpha_omniapi_pb.ListTasksReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListTasksRes|null) => void
  ): UnaryResponse;
  listTasks(
    requestMessage: api_v0alpha_omniapi_pb.ListTasksReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListTasksRes|null) => void
  ): UnaryResponse;
  rejectTask(
    requestMessage: api_v0alpha_omniapi_pb.RejectTaskRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.RejectTaskResponse|null) => void
  ): UnaryResponse;
  rejectTask(
    requestMessage: api_v0alpha_omniapi_pb.RejectTaskRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.RejectTaskResponse|null) => void
  ): UnaryResponse;
  requeueTask(
    requestMessage: api_v0alpha_omniapi_pb.RequeueTaskRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.RequeueTaskResponse|null) => void
  ): UnaryResponse;
  requeueTask(
    requestMessage: api_v0alpha_omniapi_pb.RequeueTaskRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.RequeueTaskResponse|null) => void
  ): UnaryResponse;
  createConnectedInbox(
    requestMessage: api_commons_omnichannel_pb.ConnectedInbox,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CreateConnectedInboxRes|null) => void
  ): UnaryResponse;
  createConnectedInbox(
    requestMessage: api_commons_omnichannel_pb.ConnectedInbox,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CreateConnectedInboxRes|null) => void
  ): UnaryResponse;
  deleteConnectedInboxBySid(
    requestMessage: api_v0alpha_omniapi_pb.DeleteConnectedInboxBySidReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_types_pb.Empty|null) => void
  ): UnaryResponse;
  deleteConnectedInboxBySid(
    requestMessage: api_v0alpha_omniapi_pb.DeleteConnectedInboxBySidReq,
    callback: (error: ServiceError|null, responseMessage: api_commons_types_pb.Empty|null) => void
  ): UnaryResponse;
  getConnectedInboxBySid(
    requestMessage: api_v0alpha_omniapi_pb.GetConnectedInboxBySidReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_omnichannel_pb.ConnectedInbox|null) => void
  ): UnaryResponse;
  getConnectedInboxBySid(
    requestMessage: api_v0alpha_omniapi_pb.GetConnectedInboxBySidReq,
    callback: (error: ServiceError|null, responseMessage: api_commons_omnichannel_pb.ConnectedInbox|null) => void
  ): UnaryResponse;
  performSendgridAccountChecks(
    requestMessage: api_v0alpha_omniapi_pb.SendgridAccountByClientReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.SendgridAccountByClientRes|null) => void
  ): UnaryResponse;
  performSendgridAccountChecks(
    requestMessage: api_v0alpha_omniapi_pb.SendgridAccountByClientReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.SendgridAccountByClientRes|null) => void
  ): UnaryResponse;
  listConnectedInboxes(
    requestMessage: api_v0alpha_omniapi_pb.ListConnectedInboxesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListConnectedInboxesRes|null) => void
  ): UnaryResponse;
  listConnectedInboxes(
    requestMessage: api_v0alpha_omniapi_pb.ListConnectedInboxesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListConnectedInboxesRes|null) => void
  ): UnaryResponse;
  testConnectedInbox(
    requestMessage: api_commons_omnichannel_pb.ConnectedInbox,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.TestConnectedInboxRes|null) => void
  ): UnaryResponse;
  testConnectedInbox(
    requestMessage: api_commons_omnichannel_pb.ConnectedInbox,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.TestConnectedInboxRes|null) => void
  ): UnaryResponse;
  updateConnectedInbox(
    requestMessage: api_v0alpha_omniapi_pb.UpdateConnectedInboxReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_types_pb.Empty|null) => void
  ): UnaryResponse;
  updateConnectedInbox(
    requestMessage: api_v0alpha_omniapi_pb.UpdateConnectedInboxReq,
    callback: (error: ServiceError|null, responseMessage: api_commons_types_pb.Empty|null) => void
  ): UnaryResponse;
  createVerifiedEmail(
    requestMessage: api_commons_omnichannel_pb.VerifiedEmail,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CreateVerifiedEmailRes|null) => void
  ): UnaryResponse;
  createVerifiedEmail(
    requestMessage: api_commons_omnichannel_pb.VerifiedEmail,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CreateVerifiedEmailRes|null) => void
  ): UnaryResponse;
  deleteVerifiedEmail(
    requestMessage: api_v0alpha_omniapi_pb.DeleteVerifiedEmailReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_types_pb.Empty|null) => void
  ): UnaryResponse;
  deleteVerifiedEmail(
    requestMessage: api_v0alpha_omniapi_pb.DeleteVerifiedEmailReq,
    callback: (error: ServiceError|null, responseMessage: api_commons_types_pb.Empty|null) => void
  ): UnaryResponse;
  getVerifiedEmailBySid(
    requestMessage: api_v0alpha_omniapi_pb.GetVerifiedEmailBySidReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_omnichannel_pb.VerifiedEmail|null) => void
  ): UnaryResponse;
  getVerifiedEmailBySid(
    requestMessage: api_v0alpha_omniapi_pb.GetVerifiedEmailBySidReq,
    callback: (error: ServiceError|null, responseMessage: api_commons_omnichannel_pb.VerifiedEmail|null) => void
  ): UnaryResponse;
  listVerifiedEmails(
    requestMessage: api_v0alpha_omniapi_pb.ListVerifiedEmailsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListVerifiedEmailsRes|null) => void
  ): UnaryResponse;
  listVerifiedEmails(
    requestMessage: api_v0alpha_omniapi_pb.ListVerifiedEmailsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListVerifiedEmailsRes|null) => void
  ): UnaryResponse;
  resendVerifiedEmail(
    requestMessage: api_v0alpha_omniapi_pb.ResendVerifiedEmailReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ResendVerifiedEmailRes|null) => void
  ): UnaryResponse;
  resendVerifiedEmail(
    requestMessage: api_v0alpha_omniapi_pb.ResendVerifiedEmailReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ResendVerifiedEmailRes|null) => void
  ): UnaryResponse;
  updateVerifiedEmail(
    requestMessage: api_v0alpha_omniapi_pb.UpdateVerifiedEmailReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_types_pb.Empty|null) => void
  ): UnaryResponse;
  updateVerifiedEmail(
    requestMessage: api_v0alpha_omniapi_pb.UpdateVerifiedEmailReq,
    callback: (error: ServiceError|null, responseMessage: api_commons_types_pb.Empty|null) => void
  ): UnaryResponse;
  getPendingGoogleXOAuth2Data(
    requestMessage: api_v0alpha_omniapi_pb.GetPendingGoogleXOAuth2DataReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.GetPendingGoogleXOAuth2DataRes|null) => void
  ): UnaryResponse;
  getPendingGoogleXOAuth2Data(
    requestMessage: api_v0alpha_omniapi_pb.GetPendingGoogleXOAuth2DataReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.GetPendingGoogleXOAuth2DataRes|null) => void
  ): UnaryResponse;
  sendEmailNotification(
    requestMessage: api_v0alpha_omniapi_pb.SendEmailNotificationReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.SendEmailNotificationRes|null) => void
  ): UnaryResponse;
  sendEmailNotification(
    requestMessage: api_v0alpha_omniapi_pb.SendEmailNotificationReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.SendEmailNotificationRes|null) => void
  ): UnaryResponse;
  sendFeedbackEmail(
    requestMessage: api_v0alpha_omniapi_pb.SendFeedbackEmailReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.SendFeedbackEmailRes|null) => void
  ): UnaryResponse;
  sendFeedbackEmail(
    requestMessage: api_v0alpha_omniapi_pb.SendFeedbackEmailReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.SendFeedbackEmailRes|null) => void
  ): UnaryResponse;
  getOmniAttachment(
    requestMessage: api_v0alpha_omniapi_pb.GetOmniAttachmentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_omnichannel_pb.OmniAttachment|null) => void
  ): UnaryResponse;
  getOmniAttachment(
    requestMessage: api_v0alpha_omniapi_pb.GetOmniAttachmentReq,
    callback: (error: ServiceError|null, responseMessage: api_commons_omnichannel_pb.OmniAttachment|null) => void
  ): UnaryResponse;
  createTasks(
    requestMessage: api_v0alpha_omniapi_pb.CreateTasksReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CreateTasksRes|null) => void
  ): UnaryResponse;
  createTasks(
    requestMessage: api_v0alpha_omniapi_pb.CreateTasksReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CreateTasksRes|null) => void
  ): UnaryResponse;
  createSignature(
    requestMessage: api_v0alpha_omniapi_pb.CreateSignatureReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CreateSignatureRes|null) => void
  ): UnaryResponse;
  createSignature(
    requestMessage: api_v0alpha_omniapi_pb.CreateSignatureReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CreateSignatureRes|null) => void
  ): UnaryResponse;
  deleteSignature(
    requestMessage: api_v0alpha_omniapi_pb.DeleteSignatureReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.DeleteSignatureRes|null) => void
  ): UnaryResponse;
  deleteSignature(
    requestMessage: api_v0alpha_omniapi_pb.DeleteSignatureReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.DeleteSignatureRes|null) => void
  ): UnaryResponse;
  listSignatures(
    requestMessage: api_v0alpha_omniapi_pb.ListSignaturesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListSignaturesRes|null) => void
  ): UnaryResponse;
  listSignatures(
    requestMessage: api_v0alpha_omniapi_pb.ListSignaturesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListSignaturesRes|null) => void
  ): UnaryResponse;
  updateSignature(
    requestMessage: api_v0alpha_omniapi_pb.UpdateSignatureReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.UpdateSignatureRes|null) => void
  ): UnaryResponse;
  updateSignature(
    requestMessage: api_v0alpha_omniapi_pb.UpdateSignatureReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.UpdateSignatureRes|null) => void
  ): UnaryResponse;
  suggestResponse(
    requestMessage: api_v0alpha_omniapi_pb.SuggestResponseReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.SuggestResponseRes|null) => void
  ): UnaryResponse;
  suggestResponse(
    requestMessage: api_v0alpha_omniapi_pb.SuggestResponseReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.SuggestResponseRes|null) => void
  ): UnaryResponse;
  createProject(
    requestMessage: api_v0alpha_omniapi_pb.CreateProjectReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CreateProjectRes|null) => void
  ): UnaryResponse;
  createProject(
    requestMessage: api_v0alpha_omniapi_pb.CreateProjectReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CreateProjectRes|null) => void
  ): UnaryResponse;
  listProjects(
    requestMessage: api_v0alpha_omniapi_pb.ListProjectsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListProjectsRes|null) => void
  ): UnaryResponse;
  listProjects(
    requestMessage: api_v0alpha_omniapi_pb.ListProjectsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListProjectsRes|null) => void
  ): UnaryResponse;
  editProjectById(
    requestMessage: api_v0alpha_omniapi_pb.EditProjectByIdReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.EditProjectByIdRes|null) => void
  ): UnaryResponse;
  editProjectById(
    requestMessage: api_v0alpha_omniapi_pb.EditProjectByIdReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.EditProjectByIdRes|null) => void
  ): UnaryResponse;
  closeProjectById(
    requestMessage: api_v0alpha_omniapi_pb.CloseProjectByIdReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CloseProjectByIdRes|null) => void
  ): UnaryResponse;
  closeProjectById(
    requestMessage: api_v0alpha_omniapi_pb.CloseProjectByIdReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CloseProjectByIdRes|null) => void
  ): UnaryResponse;
  getProjectById(
    requestMessage: api_v0alpha_omniapi_pb.GetProjectByIdReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.Project|null) => void
  ): UnaryResponse;
  getProjectById(
    requestMessage: api_v0alpha_omniapi_pb.GetProjectByIdReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.Project|null) => void
  ): UnaryResponse;
  createCannedMessage(
    requestMessage: api_v0alpha_omniapi_pb.CreateCannedMessageReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CannedMessage|null) => void
  ): UnaryResponse;
  createCannedMessage(
    requestMessage: api_v0alpha_omniapi_pb.CreateCannedMessageReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CannedMessage|null) => void
  ): UnaryResponse;
  listCannedMessages(
    requestMessage: api_v0alpha_omniapi_pb.ListCannedMessagesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListCannedMessagesRes|null) => void
  ): UnaryResponse;
  listCannedMessages(
    requestMessage: api_v0alpha_omniapi_pb.ListCannedMessagesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListCannedMessagesRes|null) => void
  ): UnaryResponse;
  updateCannedMessage(
    requestMessage: api_v0alpha_omniapi_pb.UpdateCannedMessageReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CannedMessage|null) => void
  ): UnaryResponse;
  updateCannedMessage(
    requestMessage: api_v0alpha_omniapi_pb.UpdateCannedMessageReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CannedMessage|null) => void
  ): UnaryResponse;
  getCannedMessageById(
    requestMessage: api_v0alpha_omniapi_pb.GetCannedMessageByIdReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CannedMessageWithGroup|null) => void
  ): UnaryResponse;
  getCannedMessageById(
    requestMessage: api_v0alpha_omniapi_pb.GetCannedMessageByIdReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CannedMessageWithGroup|null) => void
  ): UnaryResponse;
  deleteCannedMessageById(
    requestMessage: api_v0alpha_omniapi_pb.DeleteCannedMessageByIdReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.DeleteCannedMessageByIdRes|null) => void
  ): UnaryResponse;
  deleteCannedMessageById(
    requestMessage: api_v0alpha_omniapi_pb.DeleteCannedMessageByIdReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.DeleteCannedMessageByIdRes|null) => void
  ): UnaryResponse;
  createCannedMessageGroup(
    requestMessage: api_v0alpha_omniapi_pb.CreateCannedMessageGroupReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CannedMessageGroup|null) => void
  ): UnaryResponse;
  createCannedMessageGroup(
    requestMessage: api_v0alpha_omniapi_pb.CreateCannedMessageGroupReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CannedMessageGroup|null) => void
  ): UnaryResponse;
  listCannedMessageGroups(
    requestMessage: api_v0alpha_omniapi_pb.ListCannedMessageGroupsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListCannedMessageGroupsRes|null) => void
  ): UnaryResponse;
  listCannedMessageGroups(
    requestMessage: api_v0alpha_omniapi_pb.ListCannedMessageGroupsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListCannedMessageGroupsRes|null) => void
  ): UnaryResponse;
  updateCannedMessageGroup(
    requestMessage: api_v0alpha_omniapi_pb.UpdateCannedMessageGroupReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.UpdateCannedMessageGroupRes|null) => void
  ): UnaryResponse;
  updateCannedMessageGroup(
    requestMessage: api_v0alpha_omniapi_pb.UpdateCannedMessageGroupReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.UpdateCannedMessageGroupRes|null) => void
  ): UnaryResponse;
  deleteCannedMessageGroup(
    requestMessage: api_v0alpha_omniapi_pb.DeleteCannedMessageGroupReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.DeleteCannedMessageGroupRes|null) => void
  ): UnaryResponse;
  deleteCannedMessageGroup(
    requestMessage: api_v0alpha_omniapi_pb.DeleteCannedMessageGroupReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.DeleteCannedMessageGroupRes|null) => void
  ): UnaryResponse;
  listCannedMessagesByGroupId(
    requestMessage: api_v0alpha_omniapi_pb.ListCannedMessagesByGroupIdReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListCannedMessagesByGroupIdRes|null) => void
  ): UnaryResponse;
  listCannedMessagesByGroupId(
    requestMessage: api_v0alpha_omniapi_pb.ListCannedMessagesByGroupIdReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListCannedMessagesByGroupIdRes|null) => void
  ): UnaryResponse;
  getCannedMessageGroupById(
    requestMessage: api_v0alpha_omniapi_pb.GetCannedMessageGroupByIdReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CannedMessageGroup|null) => void
  ): UnaryResponse;
  getCannedMessageGroupById(
    requestMessage: api_v0alpha_omniapi_pb.GetCannedMessageGroupByIdReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CannedMessageGroup|null) => void
  ): UnaryResponse;
  listUserSkills(
    requestMessage: api_v0alpha_omniapi_pb.ListUserSkillsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListUserSkillsRes|null) => void
  ): UnaryResponse;
  listUserSkills(
    requestMessage: api_v0alpha_omniapi_pb.ListUserSkillsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListUserSkillsRes|null) => void
  ): UnaryResponse;
  listWhatsAppNumbers(
    requestMessage: api_v0alpha_omniapi_pb.ListWhatsAppNumbersReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListWhatsAppNumbersRes|null) => void
  ): UnaryResponse;
  listWhatsAppNumbers(
    requestMessage: api_v0alpha_omniapi_pb.ListWhatsAppNumbersReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.ListWhatsAppNumbersRes|null) => void
  ): UnaryResponse;
  createWhatsAppNumber(
    requestMessage: api_v0alpha_omniapi_pb.CreateWhatsAppNumberRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CreateWhatsAppNumberResponse|null) => void
  ): UnaryResponse;
  createWhatsAppNumber(
    requestMessage: api_v0alpha_omniapi_pb.CreateWhatsAppNumberRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.CreateWhatsAppNumberResponse|null) => void
  ): UnaryResponse;
  updateWhatsAppNumber(
    requestMessage: api_v0alpha_omniapi_pb.UpdateWhatsAppNumberRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.UpdateWhatsAppNumberResponse|null) => void
  ): UnaryResponse;
  updateWhatsAppNumber(
    requestMessage: api_v0alpha_omniapi_pb.UpdateWhatsAppNumberRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_omniapi_pb.UpdateWhatsAppNumberResponse|null) => void
  ): UnaryResponse;
}

