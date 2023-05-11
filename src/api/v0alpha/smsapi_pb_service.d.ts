// package: api.v0alpha
// file: api/v0alpha/smsapi.proto

import * as api_v0alpha_smsapi_pb from "../../api/v0alpha/smsapi_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SmsApiListSmsTemplates = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.ListSmsTemplatesReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.ListSmsTemplatesRes;
};

type SmsApiCreateSmsTemplate = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.CreateSmsTemplateReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.CreateSmsTemplateRes;
};

type SmsApiUpdateSmsTemplate = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.UpdateSmsTemplateReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.UpdateSmsTemplateRes;
};

type SmsApiDeleteSmsTemplate = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.DeleteSmsTemplateReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.DeleteSmsTemplateRes;
};

type SmsApiGetSmsTemplateBySid = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.GetSmsTemplateBySidReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.GetSmsTemplateBySidRes;
};

type SmsApiListSmsIntentTemplates = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.ListSmsIntentTemplatesReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.ListSmsIntentTemplatesRes;
};

type SmsApiCreateSmsIntentTemplate = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.SmsIntentTemplate;
  readonly responseType: typeof api_v0alpha_smsapi_pb.CreateSmsIntentTemplateRes;
};

type SmsApiUpdateSmsIntentTemplate = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.SmsIntentTemplate;
  readonly responseType: typeof api_v0alpha_smsapi_pb.UpdateSmsIntentTemplateRes;
};

type SmsApiDeleteSmsIntentTemplate = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.DeleteSmsIntentTemplateReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.DeleteSmsIntentTemplateRes;
};

type SmsApiGetSmsIntentTemplateBySid = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.GetSmsIntentTemplateBySidReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.SmsIntentTemplate;
};

type SmsApiListSmsSourceNumbers = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.ListSmsSourceNumbersReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.ListSmsSourceNumbersRes;
};

type SmsApiCreateSmsSourceNumber = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.CreateSmsSourceNumberReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.CreateSmsSourceNumberRes;
};

type SmsApiUpdateSmsSourceNumber = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.UpdateSmsSourceNumberReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.UpdateSmsSourceNumberRes;
};

type SmsApiDeleteSmsSourceNumber = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.DeleteSmsSourceNumberReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.DeleteSmsSourceNumberRes;
};

type SmsApiGetSmsSourceNumberBySid = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.GetSmsSourceNumberBySidReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.SmsNumbers;
};

type SmsApiSendSmsNotification = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.SendSmsNotificationReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.SendSmsNotificationRes;
};

type SmsApiListSmsGroupByFilters = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.ListSmsGroupByFiltersReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.ListSmsGroupByFiltersRes;
};

type SmsApiListSmsGroupsByGroupSids = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.ListSmsGroupsByGroupSidsReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.ListSmsGroupsByGroupSidsRes;
};

type SmsApiListSmsTasksByGroupSids = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.ListSmsTasksByGroupSidsReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.ListSmsTasksByGroupSidsRes;
};

type SmsApiListSmsGroupByFiltersForAudit = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.ListSmsGroupByFiltersReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.ListSmsGroupByFiltersRes;
};

type SmsApiListSmsGroupsByGroupSidsForAudit = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.ListSmsGroupsByGroupSidsReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.ListSmsGroupsByGroupSidsRes;
};

type SmsApiListSmsTasksByGroupSidsForAudit = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.ListSmsTasksByGroupSidsReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.ListSmsTasksByGroupSidsRes;
};

type SmsApiListSmsTasksWithDetailedStatus = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.ListSmsTasksWithDetailedStatusReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.ListSmsTasksWithDetailedStatusRes;
};

type SmsApiUpdateSmsGroupStatus = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.SmsGroupInfo;
  readonly responseType: typeof api_v0alpha_smsapi_pb.UpdateSmsGroupRes;
};

type SmsApiUpdateSmsGroupSendsPerMinute = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.SmsGroupInfo;
  readonly responseType: typeof api_v0alpha_smsapi_pb.UpdateSmsGroupRes;
};

type SmsApiUpdateSmsGroupScheduleTimes = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.SmsGroupInfo;
  readonly responseType: typeof api_v0alpha_smsapi_pb.UpdateSmsGroupRes;
};

type SmsApiScheduleSms = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.ScheduleSmsReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.ScheduleSmsRes;
};

type SmsApiResendUnconnectedSms = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.ResendUnconnectedSmsReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.ResendUnconnectedSmsRes;
};

type SmsApiSmsActivitySearch = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.SmsActivitySearchReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.SmsActivitySearchRes;
};

type SmsApiCreateInboundSmsTemplate = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.CreateInboundSmsTemplateReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.CreateInboundSmsTemplateRes;
};

type SmsApiUpdateInboundSmsTemplate = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.UpdateInboundSmsTemplateReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.UpdateInboundSmsTemplateRes;
};

type SmsApiDeleteInboundSmsTemplate = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.DeleteInboundSmsTemplateReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.DeleteInboundSmsTemplateRes;
};

type SmsApiListInboundSmsTemplates = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.ListInboundSmsTemplatesReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.ListInboundSmsTemplatesRes;
};

type SmsApiGetInboundSmsTemplateById = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.GetInboundSmsTemplateByIdReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.GetInboundSmsTemplateByIdRes;
};

type SmsApiCreateInboundSmsGroup = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.CreateInboundSmsGroupReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.CreateInboundSmsGroupRes;
};

type SmsApiUpdateInboundSmsGroup = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.UpdateInboundSmsGroupReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.UpdateInboundSmsGroupRes;
};

type SmsApiDeleteInboundSmsGroup = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.DeleteInboundSmsGroupReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.DeleteInboundSmsGroupRes;
};

type SmsApiListInboundSmsGroups = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.ListInboundSmsGroupsReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.ListInboundSmsGroupsRes;
};

type SmsApiListActiveInboundSmsGroups = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.ListActiveInboundSmsGroupsReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.ListActiveInboundSmsGroupsRes;
};

type SmsApiListInboundSmsGroupByFilters = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.ListInboundSmsGroupByFiltersReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.ListInboundSmsGroupByFiltersRes;
};

type SmsApiGetInboundSmsGroupById = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.GetInboundSmsGroupByIdReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.GetInboundSmsGroupByIdRes;
};

type SmsApiListInboundSmsGroupsByGroupIds = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.ListInboundSmsGroupsByGroupIdsReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.ListInboundSmsGroupsByGroupIdsRes;
};

type SmsApiStopInboundSmsGroup = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.StopInboundSmsGroupReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.StopInboundSmsGroupRes;
};

type SmsApiScheduleInboundSms = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.ScheduleInboundSmsReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.ScheduleInboundSmsRes;
};

type SmsApiCreateSmsConversation = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.CreateSmsConversationReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.CreateSmsConversationRes;
};

type SmsApiUpdateSmsConversation = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.UpdateSmsConversationReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.UpdateSmsConversationRes;
};

type SmsApiDeleteSmsConversation = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.DeleteSmsConversationReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.DeleteSmsConversationRes;
};

type SmsApiListSmsConversations = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.ListSmsConversationsReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.ListSmsConversationsRes;
};

type SmsApiGetSmsConversationById = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.GetSmsConversationByIdReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.GetSmsConversationByIdRes;
};

type SmsApiGetSmsMessage = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.GetSmsMessageReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.GetSmsMessageRes;
};

type SmsApiCreateSmsConversationAudit = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.SmsConversationAudit;
  readonly responseType: typeof api_v0alpha_smsapi_pb.CreateSmsConversationAuditRes;
};

type SmsApiListSmsConversationAudits = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.ListSmsConversationAuditsReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.ListSmsConversationAuditsRes;
};

type SmsApiGetSmsConversationAuditById = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.GetSmsConversationAuditByIdReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.GetSmsConversationAuditByIdRes;
};

type SmsApiCreateSmsConversationAssignedAgent = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.SmsConversationAssignedAgent;
  readonly responseType: typeof api_v0alpha_smsapi_pb.CreateSmsConversationAssignedAgentRes;
};

type SmsApiListSmsConversationAssignedAgents = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.ListSmsConversationAssignedAgentsReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.ListSmsConversationAssignedAgentsRes;
};

type SmsApiGetSmsConversationAssignedAgentById = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.GetSmsConversationAssignedAgentByIdReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.GetSmsConversationAssignedAgentByIdRes;
};

type SmsApiListInboundSmsTasksByGroupIds = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.ListInboundSmsTasksByGroupIdsReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.ListInboundSmsTasksByGroupIdsRes;
};

type SmsApiStopAllOutboundSmsGroups = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.StopAllOutboundSmsGroupsReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.StopAllOutboundSmsGroupsRes;
};

type SmsApiStopAllInboundSmsGroups = {
  readonly methodName: string;
  readonly service: typeof SmsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_smsapi_pb.StopAllInboundSmsGroupsReq;
  readonly responseType: typeof api_v0alpha_smsapi_pb.StopAllInboundSmsGroupsRes;
};

export class SmsApi {
  static readonly serviceName: string;
  static readonly ListSmsTemplates: SmsApiListSmsTemplates;
  static readonly CreateSmsTemplate: SmsApiCreateSmsTemplate;
  static readonly UpdateSmsTemplate: SmsApiUpdateSmsTemplate;
  static readonly DeleteSmsTemplate: SmsApiDeleteSmsTemplate;
  static readonly GetSmsTemplateBySid: SmsApiGetSmsTemplateBySid;
  static readonly ListSmsIntentTemplates: SmsApiListSmsIntentTemplates;
  static readonly CreateSmsIntentTemplate: SmsApiCreateSmsIntentTemplate;
  static readonly UpdateSmsIntentTemplate: SmsApiUpdateSmsIntentTemplate;
  static readonly DeleteSmsIntentTemplate: SmsApiDeleteSmsIntentTemplate;
  static readonly GetSmsIntentTemplateBySid: SmsApiGetSmsIntentTemplateBySid;
  static readonly ListSmsSourceNumbers: SmsApiListSmsSourceNumbers;
  static readonly CreateSmsSourceNumber: SmsApiCreateSmsSourceNumber;
  static readonly UpdateSmsSourceNumber: SmsApiUpdateSmsSourceNumber;
  static readonly DeleteSmsSourceNumber: SmsApiDeleteSmsSourceNumber;
  static readonly GetSmsSourceNumberBySid: SmsApiGetSmsSourceNumberBySid;
  static readonly SendSmsNotification: SmsApiSendSmsNotification;
  static readonly ListSmsGroupByFilters: SmsApiListSmsGroupByFilters;
  static readonly ListSmsGroupsByGroupSids: SmsApiListSmsGroupsByGroupSids;
  static readonly ListSmsTasksByGroupSids: SmsApiListSmsTasksByGroupSids;
  static readonly ListSmsGroupByFiltersForAudit: SmsApiListSmsGroupByFiltersForAudit;
  static readonly ListSmsGroupsByGroupSidsForAudit: SmsApiListSmsGroupsByGroupSidsForAudit;
  static readonly ListSmsTasksByGroupSidsForAudit: SmsApiListSmsTasksByGroupSidsForAudit;
  static readonly ListSmsTasksWithDetailedStatus: SmsApiListSmsTasksWithDetailedStatus;
  static readonly UpdateSmsGroupStatus: SmsApiUpdateSmsGroupStatus;
  static readonly UpdateSmsGroupSendsPerMinute: SmsApiUpdateSmsGroupSendsPerMinute;
  static readonly UpdateSmsGroupScheduleTimes: SmsApiUpdateSmsGroupScheduleTimes;
  static readonly ScheduleSms: SmsApiScheduleSms;
  static readonly ResendUnconnectedSms: SmsApiResendUnconnectedSms;
  static readonly SmsActivitySearch: SmsApiSmsActivitySearch;
  static readonly CreateInboundSmsTemplate: SmsApiCreateInboundSmsTemplate;
  static readonly UpdateInboundSmsTemplate: SmsApiUpdateInboundSmsTemplate;
  static readonly DeleteInboundSmsTemplate: SmsApiDeleteInboundSmsTemplate;
  static readonly ListInboundSmsTemplates: SmsApiListInboundSmsTemplates;
  static readonly GetInboundSmsTemplateById: SmsApiGetInboundSmsTemplateById;
  static readonly CreateInboundSmsGroup: SmsApiCreateInboundSmsGroup;
  static readonly UpdateInboundSmsGroup: SmsApiUpdateInboundSmsGroup;
  static readonly DeleteInboundSmsGroup: SmsApiDeleteInboundSmsGroup;
  static readonly ListInboundSmsGroups: SmsApiListInboundSmsGroups;
  static readonly ListActiveInboundSmsGroups: SmsApiListActiveInboundSmsGroups;
  static readonly ListInboundSmsGroupByFilters: SmsApiListInboundSmsGroupByFilters;
  static readonly GetInboundSmsGroupById: SmsApiGetInboundSmsGroupById;
  static readonly ListInboundSmsGroupsByGroupIds: SmsApiListInboundSmsGroupsByGroupIds;
  static readonly StopInboundSmsGroup: SmsApiStopInboundSmsGroup;
  static readonly ScheduleInboundSms: SmsApiScheduleInboundSms;
  static readonly CreateSmsConversation: SmsApiCreateSmsConversation;
  static readonly UpdateSmsConversation: SmsApiUpdateSmsConversation;
  static readonly DeleteSmsConversation: SmsApiDeleteSmsConversation;
  static readonly ListSmsConversations: SmsApiListSmsConversations;
  static readonly GetSmsConversationById: SmsApiGetSmsConversationById;
  static readonly GetSmsMessage: SmsApiGetSmsMessage;
  static readonly CreateSmsConversationAudit: SmsApiCreateSmsConversationAudit;
  static readonly ListSmsConversationAudits: SmsApiListSmsConversationAudits;
  static readonly GetSmsConversationAuditById: SmsApiGetSmsConversationAuditById;
  static readonly CreateSmsConversationAssignedAgent: SmsApiCreateSmsConversationAssignedAgent;
  static readonly ListSmsConversationAssignedAgents: SmsApiListSmsConversationAssignedAgents;
  static readonly GetSmsConversationAssignedAgentById: SmsApiGetSmsConversationAssignedAgentById;
  static readonly ListInboundSmsTasksByGroupIds: SmsApiListInboundSmsTasksByGroupIds;
  static readonly StopAllOutboundSmsGroups: SmsApiStopAllOutboundSmsGroups;
  static readonly StopAllInboundSmsGroups: SmsApiStopAllInboundSmsGroups;
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

export class SmsApiClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listSmsTemplates(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsTemplatesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsTemplatesRes|null) => void
  ): UnaryResponse;
  listSmsTemplates(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsTemplatesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsTemplatesRes|null) => void
  ): UnaryResponse;
  createSmsTemplate(
    requestMessage: api_v0alpha_smsapi_pb.CreateSmsTemplateReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.CreateSmsTemplateRes|null) => void
  ): UnaryResponse;
  createSmsTemplate(
    requestMessage: api_v0alpha_smsapi_pb.CreateSmsTemplateReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.CreateSmsTemplateRes|null) => void
  ): UnaryResponse;
  updateSmsTemplate(
    requestMessage: api_v0alpha_smsapi_pb.UpdateSmsTemplateReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.UpdateSmsTemplateRes|null) => void
  ): UnaryResponse;
  updateSmsTemplate(
    requestMessage: api_v0alpha_smsapi_pb.UpdateSmsTemplateReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.UpdateSmsTemplateRes|null) => void
  ): UnaryResponse;
  deleteSmsTemplate(
    requestMessage: api_v0alpha_smsapi_pb.DeleteSmsTemplateReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.DeleteSmsTemplateRes|null) => void
  ): UnaryResponse;
  deleteSmsTemplate(
    requestMessage: api_v0alpha_smsapi_pb.DeleteSmsTemplateReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.DeleteSmsTemplateRes|null) => void
  ): UnaryResponse;
  getSmsTemplateBySid(
    requestMessage: api_v0alpha_smsapi_pb.GetSmsTemplateBySidReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.GetSmsTemplateBySidRes|null) => void
  ): UnaryResponse;
  getSmsTemplateBySid(
    requestMessage: api_v0alpha_smsapi_pb.GetSmsTemplateBySidReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.GetSmsTemplateBySidRes|null) => void
  ): UnaryResponse;
  listSmsIntentTemplates(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsIntentTemplatesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsIntentTemplatesRes|null) => void
  ): UnaryResponse;
  listSmsIntentTemplates(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsIntentTemplatesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsIntentTemplatesRes|null) => void
  ): UnaryResponse;
  createSmsIntentTemplate(
    requestMessage: api_v0alpha_smsapi_pb.SmsIntentTemplate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.CreateSmsIntentTemplateRes|null) => void
  ): UnaryResponse;
  createSmsIntentTemplate(
    requestMessage: api_v0alpha_smsapi_pb.SmsIntentTemplate,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.CreateSmsIntentTemplateRes|null) => void
  ): UnaryResponse;
  updateSmsIntentTemplate(
    requestMessage: api_v0alpha_smsapi_pb.SmsIntentTemplate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.UpdateSmsIntentTemplateRes|null) => void
  ): UnaryResponse;
  updateSmsIntentTemplate(
    requestMessage: api_v0alpha_smsapi_pb.SmsIntentTemplate,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.UpdateSmsIntentTemplateRes|null) => void
  ): UnaryResponse;
  deleteSmsIntentTemplate(
    requestMessage: api_v0alpha_smsapi_pb.DeleteSmsIntentTemplateReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.DeleteSmsIntentTemplateRes|null) => void
  ): UnaryResponse;
  deleteSmsIntentTemplate(
    requestMessage: api_v0alpha_smsapi_pb.DeleteSmsIntentTemplateReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.DeleteSmsIntentTemplateRes|null) => void
  ): UnaryResponse;
  getSmsIntentTemplateBySid(
    requestMessage: api_v0alpha_smsapi_pb.GetSmsIntentTemplateBySidReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.SmsIntentTemplate|null) => void
  ): UnaryResponse;
  getSmsIntentTemplateBySid(
    requestMessage: api_v0alpha_smsapi_pb.GetSmsIntentTemplateBySidReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.SmsIntentTemplate|null) => void
  ): UnaryResponse;
  listSmsSourceNumbers(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsSourceNumbersReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsSourceNumbersRes|null) => void
  ): UnaryResponse;
  listSmsSourceNumbers(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsSourceNumbersReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsSourceNumbersRes|null) => void
  ): UnaryResponse;
  createSmsSourceNumber(
    requestMessage: api_v0alpha_smsapi_pb.CreateSmsSourceNumberReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.CreateSmsSourceNumberRes|null) => void
  ): UnaryResponse;
  createSmsSourceNumber(
    requestMessage: api_v0alpha_smsapi_pb.CreateSmsSourceNumberReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.CreateSmsSourceNumberRes|null) => void
  ): UnaryResponse;
  updateSmsSourceNumber(
    requestMessage: api_v0alpha_smsapi_pb.UpdateSmsSourceNumberReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.UpdateSmsSourceNumberRes|null) => void
  ): UnaryResponse;
  updateSmsSourceNumber(
    requestMessage: api_v0alpha_smsapi_pb.UpdateSmsSourceNumberReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.UpdateSmsSourceNumberRes|null) => void
  ): UnaryResponse;
  deleteSmsSourceNumber(
    requestMessage: api_v0alpha_smsapi_pb.DeleteSmsSourceNumberReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.DeleteSmsSourceNumberRes|null) => void
  ): UnaryResponse;
  deleteSmsSourceNumber(
    requestMessage: api_v0alpha_smsapi_pb.DeleteSmsSourceNumberReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.DeleteSmsSourceNumberRes|null) => void
  ): UnaryResponse;
  getSmsSourceNumberBySid(
    requestMessage: api_v0alpha_smsapi_pb.GetSmsSourceNumberBySidReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.SmsNumbers|null) => void
  ): UnaryResponse;
  getSmsSourceNumberBySid(
    requestMessage: api_v0alpha_smsapi_pb.GetSmsSourceNumberBySidReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.SmsNumbers|null) => void
  ): UnaryResponse;
  sendSmsNotification(
    requestMessage: api_v0alpha_smsapi_pb.SendSmsNotificationReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.SendSmsNotificationRes|null) => void
  ): UnaryResponse;
  sendSmsNotification(
    requestMessage: api_v0alpha_smsapi_pb.SendSmsNotificationReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.SendSmsNotificationRes|null) => void
  ): UnaryResponse;
  listSmsGroupByFilters(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsGroupByFiltersReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsGroupByFiltersRes|null) => void
  ): UnaryResponse;
  listSmsGroupByFilters(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsGroupByFiltersReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsGroupByFiltersRes|null) => void
  ): UnaryResponse;
  listSmsGroupsByGroupSids(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsGroupsByGroupSidsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsGroupsByGroupSidsRes|null) => void
  ): UnaryResponse;
  listSmsGroupsByGroupSids(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsGroupsByGroupSidsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsGroupsByGroupSidsRes|null) => void
  ): UnaryResponse;
  listSmsTasksByGroupSids(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsTasksByGroupSidsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsTasksByGroupSidsRes|null) => void
  ): UnaryResponse;
  listSmsTasksByGroupSids(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsTasksByGroupSidsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsTasksByGroupSidsRes|null) => void
  ): UnaryResponse;
  listSmsGroupByFiltersForAudit(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsGroupByFiltersReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsGroupByFiltersRes|null) => void
  ): UnaryResponse;
  listSmsGroupByFiltersForAudit(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsGroupByFiltersReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsGroupByFiltersRes|null) => void
  ): UnaryResponse;
  listSmsGroupsByGroupSidsForAudit(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsGroupsByGroupSidsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsGroupsByGroupSidsRes|null) => void
  ): UnaryResponse;
  listSmsGroupsByGroupSidsForAudit(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsGroupsByGroupSidsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsGroupsByGroupSidsRes|null) => void
  ): UnaryResponse;
  listSmsTasksByGroupSidsForAudit(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsTasksByGroupSidsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsTasksByGroupSidsRes|null) => void
  ): UnaryResponse;
  listSmsTasksByGroupSidsForAudit(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsTasksByGroupSidsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsTasksByGroupSidsRes|null) => void
  ): UnaryResponse;
  listSmsTasksWithDetailedStatus(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsTasksWithDetailedStatusReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsTasksWithDetailedStatusRes|null) => void
  ): UnaryResponse;
  listSmsTasksWithDetailedStatus(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsTasksWithDetailedStatusReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsTasksWithDetailedStatusRes|null) => void
  ): UnaryResponse;
  updateSmsGroupStatus(
    requestMessage: api_v0alpha_smsapi_pb.SmsGroupInfo,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.UpdateSmsGroupRes|null) => void
  ): UnaryResponse;
  updateSmsGroupStatus(
    requestMessage: api_v0alpha_smsapi_pb.SmsGroupInfo,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.UpdateSmsGroupRes|null) => void
  ): UnaryResponse;
  updateSmsGroupSendsPerMinute(
    requestMessage: api_v0alpha_smsapi_pb.SmsGroupInfo,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.UpdateSmsGroupRes|null) => void
  ): UnaryResponse;
  updateSmsGroupSendsPerMinute(
    requestMessage: api_v0alpha_smsapi_pb.SmsGroupInfo,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.UpdateSmsGroupRes|null) => void
  ): UnaryResponse;
  updateSmsGroupScheduleTimes(
    requestMessage: api_v0alpha_smsapi_pb.SmsGroupInfo,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.UpdateSmsGroupRes|null) => void
  ): UnaryResponse;
  updateSmsGroupScheduleTimes(
    requestMessage: api_v0alpha_smsapi_pb.SmsGroupInfo,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.UpdateSmsGroupRes|null) => void
  ): UnaryResponse;
  scheduleSms(
    requestMessage: api_v0alpha_smsapi_pb.ScheduleSmsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ScheduleSmsRes|null) => void
  ): UnaryResponse;
  scheduleSms(
    requestMessage: api_v0alpha_smsapi_pb.ScheduleSmsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ScheduleSmsRes|null) => void
  ): UnaryResponse;
  resendUnconnectedSms(
    requestMessage: api_v0alpha_smsapi_pb.ResendUnconnectedSmsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ResendUnconnectedSmsRes|null) => void
  ): UnaryResponse;
  resendUnconnectedSms(
    requestMessage: api_v0alpha_smsapi_pb.ResendUnconnectedSmsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ResendUnconnectedSmsRes|null) => void
  ): UnaryResponse;
  smsActivitySearch(
    requestMessage: api_v0alpha_smsapi_pb.SmsActivitySearchReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.SmsActivitySearchRes|null) => void
  ): UnaryResponse;
  smsActivitySearch(
    requestMessage: api_v0alpha_smsapi_pb.SmsActivitySearchReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.SmsActivitySearchRes|null) => void
  ): UnaryResponse;
  createInboundSmsTemplate(
    requestMessage: api_v0alpha_smsapi_pb.CreateInboundSmsTemplateReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.CreateInboundSmsTemplateRes|null) => void
  ): UnaryResponse;
  createInboundSmsTemplate(
    requestMessage: api_v0alpha_smsapi_pb.CreateInboundSmsTemplateReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.CreateInboundSmsTemplateRes|null) => void
  ): UnaryResponse;
  updateInboundSmsTemplate(
    requestMessage: api_v0alpha_smsapi_pb.UpdateInboundSmsTemplateReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.UpdateInboundSmsTemplateRes|null) => void
  ): UnaryResponse;
  updateInboundSmsTemplate(
    requestMessage: api_v0alpha_smsapi_pb.UpdateInboundSmsTemplateReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.UpdateInboundSmsTemplateRes|null) => void
  ): UnaryResponse;
  deleteInboundSmsTemplate(
    requestMessage: api_v0alpha_smsapi_pb.DeleteInboundSmsTemplateReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.DeleteInboundSmsTemplateRes|null) => void
  ): UnaryResponse;
  deleteInboundSmsTemplate(
    requestMessage: api_v0alpha_smsapi_pb.DeleteInboundSmsTemplateReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.DeleteInboundSmsTemplateRes|null) => void
  ): UnaryResponse;
  listInboundSmsTemplates(
    requestMessage: api_v0alpha_smsapi_pb.ListInboundSmsTemplatesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListInboundSmsTemplatesRes|null) => void
  ): UnaryResponse;
  listInboundSmsTemplates(
    requestMessage: api_v0alpha_smsapi_pb.ListInboundSmsTemplatesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListInboundSmsTemplatesRes|null) => void
  ): UnaryResponse;
  getInboundSmsTemplateById(
    requestMessage: api_v0alpha_smsapi_pb.GetInboundSmsTemplateByIdReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.GetInboundSmsTemplateByIdRes|null) => void
  ): UnaryResponse;
  getInboundSmsTemplateById(
    requestMessage: api_v0alpha_smsapi_pb.GetInboundSmsTemplateByIdReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.GetInboundSmsTemplateByIdRes|null) => void
  ): UnaryResponse;
  createInboundSmsGroup(
    requestMessage: api_v0alpha_smsapi_pb.CreateInboundSmsGroupReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.CreateInboundSmsGroupRes|null) => void
  ): UnaryResponse;
  createInboundSmsGroup(
    requestMessage: api_v0alpha_smsapi_pb.CreateInboundSmsGroupReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.CreateInboundSmsGroupRes|null) => void
  ): UnaryResponse;
  updateInboundSmsGroup(
    requestMessage: api_v0alpha_smsapi_pb.UpdateInboundSmsGroupReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.UpdateInboundSmsGroupRes|null) => void
  ): UnaryResponse;
  updateInboundSmsGroup(
    requestMessage: api_v0alpha_smsapi_pb.UpdateInboundSmsGroupReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.UpdateInboundSmsGroupRes|null) => void
  ): UnaryResponse;
  deleteInboundSmsGroup(
    requestMessage: api_v0alpha_smsapi_pb.DeleteInboundSmsGroupReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.DeleteInboundSmsGroupRes|null) => void
  ): UnaryResponse;
  deleteInboundSmsGroup(
    requestMessage: api_v0alpha_smsapi_pb.DeleteInboundSmsGroupReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.DeleteInboundSmsGroupRes|null) => void
  ): UnaryResponse;
  listInboundSmsGroups(
    requestMessage: api_v0alpha_smsapi_pb.ListInboundSmsGroupsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListInboundSmsGroupsRes|null) => void
  ): UnaryResponse;
  listInboundSmsGroups(
    requestMessage: api_v0alpha_smsapi_pb.ListInboundSmsGroupsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListInboundSmsGroupsRes|null) => void
  ): UnaryResponse;
  listActiveInboundSmsGroups(
    requestMessage: api_v0alpha_smsapi_pb.ListActiveInboundSmsGroupsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListActiveInboundSmsGroupsRes|null) => void
  ): UnaryResponse;
  listActiveInboundSmsGroups(
    requestMessage: api_v0alpha_smsapi_pb.ListActiveInboundSmsGroupsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListActiveInboundSmsGroupsRes|null) => void
  ): UnaryResponse;
  listInboundSmsGroupByFilters(
    requestMessage: api_v0alpha_smsapi_pb.ListInboundSmsGroupByFiltersReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListInboundSmsGroupByFiltersRes|null) => void
  ): UnaryResponse;
  listInboundSmsGroupByFilters(
    requestMessage: api_v0alpha_smsapi_pb.ListInboundSmsGroupByFiltersReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListInboundSmsGroupByFiltersRes|null) => void
  ): UnaryResponse;
  getInboundSmsGroupById(
    requestMessage: api_v0alpha_smsapi_pb.GetInboundSmsGroupByIdReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.GetInboundSmsGroupByIdRes|null) => void
  ): UnaryResponse;
  getInboundSmsGroupById(
    requestMessage: api_v0alpha_smsapi_pb.GetInboundSmsGroupByIdReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.GetInboundSmsGroupByIdRes|null) => void
  ): UnaryResponse;
  listInboundSmsGroupsByGroupIds(
    requestMessage: api_v0alpha_smsapi_pb.ListInboundSmsGroupsByGroupIdsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListInboundSmsGroupsByGroupIdsRes|null) => void
  ): UnaryResponse;
  listInboundSmsGroupsByGroupIds(
    requestMessage: api_v0alpha_smsapi_pb.ListInboundSmsGroupsByGroupIdsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListInboundSmsGroupsByGroupIdsRes|null) => void
  ): UnaryResponse;
  stopInboundSmsGroup(
    requestMessage: api_v0alpha_smsapi_pb.StopInboundSmsGroupReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.StopInboundSmsGroupRes|null) => void
  ): UnaryResponse;
  stopInboundSmsGroup(
    requestMessage: api_v0alpha_smsapi_pb.StopInboundSmsGroupReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.StopInboundSmsGroupRes|null) => void
  ): UnaryResponse;
  scheduleInboundSms(
    requestMessage: api_v0alpha_smsapi_pb.ScheduleInboundSmsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ScheduleInboundSmsRes|null) => void
  ): UnaryResponse;
  scheduleInboundSms(
    requestMessage: api_v0alpha_smsapi_pb.ScheduleInboundSmsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ScheduleInboundSmsRes|null) => void
  ): UnaryResponse;
  createSmsConversation(
    requestMessage: api_v0alpha_smsapi_pb.CreateSmsConversationReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.CreateSmsConversationRes|null) => void
  ): UnaryResponse;
  createSmsConversation(
    requestMessage: api_v0alpha_smsapi_pb.CreateSmsConversationReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.CreateSmsConversationRes|null) => void
  ): UnaryResponse;
  updateSmsConversation(
    requestMessage: api_v0alpha_smsapi_pb.UpdateSmsConversationReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.UpdateSmsConversationRes|null) => void
  ): UnaryResponse;
  updateSmsConversation(
    requestMessage: api_v0alpha_smsapi_pb.UpdateSmsConversationReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.UpdateSmsConversationRes|null) => void
  ): UnaryResponse;
  deleteSmsConversation(
    requestMessage: api_v0alpha_smsapi_pb.DeleteSmsConversationReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.DeleteSmsConversationRes|null) => void
  ): UnaryResponse;
  deleteSmsConversation(
    requestMessage: api_v0alpha_smsapi_pb.DeleteSmsConversationReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.DeleteSmsConversationRes|null) => void
  ): UnaryResponse;
  listSmsConversations(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsConversationsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsConversationsRes|null) => void
  ): UnaryResponse;
  listSmsConversations(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsConversationsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsConversationsRes|null) => void
  ): UnaryResponse;
  getSmsConversationById(
    requestMessage: api_v0alpha_smsapi_pb.GetSmsConversationByIdReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.GetSmsConversationByIdRes|null) => void
  ): UnaryResponse;
  getSmsConversationById(
    requestMessage: api_v0alpha_smsapi_pb.GetSmsConversationByIdReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.GetSmsConversationByIdRes|null) => void
  ): UnaryResponse;
  getSmsMessage(
    requestMessage: api_v0alpha_smsapi_pb.GetSmsMessageReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.GetSmsMessageRes|null) => void
  ): UnaryResponse;
  getSmsMessage(
    requestMessage: api_v0alpha_smsapi_pb.GetSmsMessageReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.GetSmsMessageRes|null) => void
  ): UnaryResponse;
  createSmsConversationAudit(
    requestMessage: api_v0alpha_smsapi_pb.SmsConversationAudit,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.CreateSmsConversationAuditRes|null) => void
  ): UnaryResponse;
  createSmsConversationAudit(
    requestMessage: api_v0alpha_smsapi_pb.SmsConversationAudit,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.CreateSmsConversationAuditRes|null) => void
  ): UnaryResponse;
  listSmsConversationAudits(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsConversationAuditsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsConversationAuditsRes|null) => void
  ): UnaryResponse;
  listSmsConversationAudits(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsConversationAuditsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsConversationAuditsRes|null) => void
  ): UnaryResponse;
  getSmsConversationAuditById(
    requestMessage: api_v0alpha_smsapi_pb.GetSmsConversationAuditByIdReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.GetSmsConversationAuditByIdRes|null) => void
  ): UnaryResponse;
  getSmsConversationAuditById(
    requestMessage: api_v0alpha_smsapi_pb.GetSmsConversationAuditByIdReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.GetSmsConversationAuditByIdRes|null) => void
  ): UnaryResponse;
  createSmsConversationAssignedAgent(
    requestMessage: api_v0alpha_smsapi_pb.SmsConversationAssignedAgent,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.CreateSmsConversationAssignedAgentRes|null) => void
  ): UnaryResponse;
  createSmsConversationAssignedAgent(
    requestMessage: api_v0alpha_smsapi_pb.SmsConversationAssignedAgent,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.CreateSmsConversationAssignedAgentRes|null) => void
  ): UnaryResponse;
  listSmsConversationAssignedAgents(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsConversationAssignedAgentsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsConversationAssignedAgentsRes|null) => void
  ): UnaryResponse;
  listSmsConversationAssignedAgents(
    requestMessage: api_v0alpha_smsapi_pb.ListSmsConversationAssignedAgentsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListSmsConversationAssignedAgentsRes|null) => void
  ): UnaryResponse;
  getSmsConversationAssignedAgentById(
    requestMessage: api_v0alpha_smsapi_pb.GetSmsConversationAssignedAgentByIdReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.GetSmsConversationAssignedAgentByIdRes|null) => void
  ): UnaryResponse;
  getSmsConversationAssignedAgentById(
    requestMessage: api_v0alpha_smsapi_pb.GetSmsConversationAssignedAgentByIdReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.GetSmsConversationAssignedAgentByIdRes|null) => void
  ): UnaryResponse;
  listInboundSmsTasksByGroupIds(
    requestMessage: api_v0alpha_smsapi_pb.ListInboundSmsTasksByGroupIdsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListInboundSmsTasksByGroupIdsRes|null) => void
  ): UnaryResponse;
  listInboundSmsTasksByGroupIds(
    requestMessage: api_v0alpha_smsapi_pb.ListInboundSmsTasksByGroupIdsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.ListInboundSmsTasksByGroupIdsRes|null) => void
  ): UnaryResponse;
  stopAllOutboundSmsGroups(
    requestMessage: api_v0alpha_smsapi_pb.StopAllOutboundSmsGroupsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.StopAllOutboundSmsGroupsRes|null) => void
  ): UnaryResponse;
  stopAllOutboundSmsGroups(
    requestMessage: api_v0alpha_smsapi_pb.StopAllOutboundSmsGroupsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.StopAllOutboundSmsGroupsRes|null) => void
  ): UnaryResponse;
  stopAllInboundSmsGroups(
    requestMessage: api_v0alpha_smsapi_pb.StopAllInboundSmsGroupsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.StopAllInboundSmsGroupsRes|null) => void
  ): UnaryResponse;
  stopAllInboundSmsGroups(
    requestMessage: api_v0alpha_smsapi_pb.StopAllInboundSmsGroupsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_smsapi_pb.StopAllInboundSmsGroupsRes|null) => void
  ): UnaryResponse;
}

