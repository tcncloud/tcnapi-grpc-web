// package: api.v1alpha1.org
// file: api/v1alpha1/org/organizations/service.proto

import * as api_v1alpha1_org_organizations_service_pb from "../../../../api/v1alpha1/org/organizations/service_pb";
import * as api_v1alpha1_org_organization_pb from "../../../../api/v1alpha1/org/organization_pb";
import * as api_v1alpha1_org_preferences_pb from "../../../../api/v1alpha1/org/preferences_pb";
import {grpc} from "@improbable-eng/grpc-web";

type OrganizationsServiceCreateOrganization = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_organization_pb.CreateOrganizationRequest;
  readonly responseType: typeof api_v1alpha1_org_organization_pb.CreateOrganizationResponse;
};

type OrganizationsServiceGetOrganization = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_organization_pb.GetOrganizationRequest;
  readonly responseType: typeof api_v1alpha1_org_organization_pb.GetOrganizationResponse;
};

type OrganizationsServiceGetOrganizationById = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_organization_pb.GetOrganizationByIdRequest;
  readonly responseType: typeof api_v1alpha1_org_organization_pb.GetOrganizationByIdResponse;
};

type OrganizationsServiceUpdateOrganization = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_organization_pb.UpdateOrganizationRequest;
  readonly responseType: typeof api_v1alpha1_org_organization_pb.UpdateOrganizationResponse;
};

type OrganizationsServiceArchiveOrganization = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_organization_pb.ArchiveOrganizationRequest;
  readonly responseType: typeof api_v1alpha1_org_organization_pb.ArchiveOrganizationResponse;
};

type OrganizationsServiceUnArchiveOrganization = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_organization_pb.UnArchiveOrganizationRequest;
  readonly responseType: typeof api_v1alpha1_org_organization_pb.UnArchiveOrganizationResponse;
};

type OrganizationsServiceListAllOrganizationsGlobally = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_org_organization_pb.ListAllOrganizationsGloballyRequest;
  readonly responseType: typeof api_v1alpha1_org_organization_pb.ListAllOrganizationsGloballyResponse;
};

type OrganizationsServiceListOrganizationsByRegion = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_org_organization_pb.ListOrganizationsByRegionRequest;
  readonly responseType: typeof api_v1alpha1_org_organization_pb.ListOrganizationsByRegionResponse;
};

type OrganizationsServiceListArchivedOrganizations = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_org_organization_pb.ListArchivedOrganizationsRequest;
  readonly responseType: typeof api_v1alpha1_org_organization_pb.ListArchivedOrganizationsResponse;
};

type OrganizationsServiceConvertOrgToManual = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_organization_pb.ConvertOrgToManualRequest;
  readonly responseType: typeof api_v1alpha1_org_organization_pb.ConvertOrgToManualResponse;
};

type OrganizationsServiceListOwnedOrgs = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_org_organization_pb.ListOwnedOrgsRequest;
  readonly responseType: typeof api_v1alpha1_org_organization_pb.ListOwnedOrgsResponse;
};

type OrganizationsServiceGetOrganizationPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetOrganizationPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetOrganizationPreferencesResponse;
};

type OrganizationsServiceUpdateOrganizationPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateOrganizationPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateOrganizationPreferencesResponse;
};

type OrganizationsServiceGetAgentPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetAgentPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetAgentPreferencesResponse;
};

type OrganizationsServiceUpdateAgentPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateAgentPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateAgentPreferencesResponse;
};

type OrganizationsServiceGetContactPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetContactPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetContactPreferencesResponse;
};

type OrganizationsServiceUpdateContactPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateContactPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateContactPreferencesResponse;
};

type OrganizationsServiceGetAuthenticationPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetAuthenticationPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetAuthenticationPreferencesResponse;
};

type OrganizationsServiceUpdateAuthenticationPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateAuthenticationPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateAuthenticationPreferencesResponse;
};

type OrganizationsServiceGetWebhookPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetWebhookPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetWebhookPreferencesResponse;
};

type OrganizationsServiceUpdateWebhookPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateWebhookPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateWebhookPreferencesResponse;
};

type OrganizationsServiceGetDashboardGeneralPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetDashboardGeneralPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetDashboardGeneralPreferencesResponse;
};

type OrganizationsServiceUpdateDashboardGeneralPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateDashboardGeneralPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateDashboardGeneralPreferencesResponse;
};

type OrganizationsServiceGetDashboardQueuePreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetDashboardQueuePreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetDashboardQueuePreferencesResponse;
};

type OrganizationsServiceUpdateDashboardQueuePreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateDashboardQueuePreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateDashboardQueuePreferencesResponse;
};

type OrganizationsServiceGetPhonePreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetPhonePreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetPhonePreferencesResponse;
};

type OrganizationsServiceUpdatePhonePreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdatePhonePreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdatePhonePreferencesResponse;
};

type OrganizationsServiceGetCompliancePreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetCompliancePreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetCompliancePreferencesResponse;
};

type OrganizationsServiceUpdateCompliancePreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateCompliancePreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateCompliancePreferencesResponse;
};

type OrganizationsServiceGetBroadcastPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetBroadcastPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetBroadcastPreferencesResponse;
};

type OrganizationsServiceUpdateBroadcastPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateBroadcastPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateBroadcastPreferencesResponse;
};

type OrganizationsServiceGetSchedulePreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetSchedulePreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetSchedulePreferencesResponse;
};

type OrganizationsServiceUpdateSchedulePreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateSchedulePreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateSchedulePreferencesResponse;
};

type OrganizationsServiceGetEmailSmsPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetEmailSmsPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetEmailSmsPreferencesResponse;
};

type OrganizationsServiceUpdateEmailSmsPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateEmailSmsPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateEmailSmsPreferencesResponse;
};

type OrganizationsServiceGetBusinessPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetBusinessPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetBusinessPreferencesResponse;
};

type OrganizationsServiceUpdateBusinessPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateBusinessPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateBusinessPreferencesResponse;
};

type OrganizationsServiceUpdateAdminBusinessPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateAdminBusinessPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateAdminBusinessPreferencesResponse;
};

type OrganizationsServiceGetScorecardsPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetScorecardsPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetScorecardsPreferencesResponse;
};

type OrganizationsServiceUpdateScorecardsPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateScorecardsPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateScorecardsPreferencesResponse;
};

type OrganizationsServiceGetVoiceAnalyticsPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetVoiceAnalyticsPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetVoiceAnalyticsPreferencesResponse;
};

type OrganizationsServiceListVoiceAnalyticsPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.ListVoiceAnalyticsPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.ListVoiceAnalyticsPreferencesResponse;
};

type OrganizationsServiceUpdateVoiceAnalyticsPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateVoiceAnalyticsPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateVoiceAnalyticsPreferencesResponse;
};

type OrganizationsServiceGetEndOfDayPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetEndOfDayPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetEndOfDayPreferencesResponse;
};

type OrganizationsServiceUpdateEndOfDayPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateEndOfDayPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateEndOfDayPreferencesResponse;
};

type OrganizationsServiceGetReportFilterPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetFilterPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetFilterPreferencesResponse;
};

type OrganizationsServiceUpdateReportFilterPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateFilterPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateFilterPreferencesResponse;
};

type OrganizationsServiceGetRecordingPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetRecordingPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetRecordingPreferencesResponse;
};

type OrganizationsServiceUpdateRecordingPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateRecordingPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateRecordingPreferencesResponse;
};

type OrganizationsServiceGetAdminClientPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetAdminClientPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetAdminClientPreferencesResponse;
};

type OrganizationsServiceUpdateAdminClientPreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateAdminClientPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateAdminClientPreferencesResponse;
};

type OrganizationsServiceAcceptLinkbackRecordingTerms = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.AcceptLinkbackRecordingTermsRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.AcceptLinkbackRecordingTermsResponse;
};

type OrganizationsServiceLinkbackUpdateBroadcastTemplates = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.LinkbackUpdateBroadcastTemplatesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.LinkbackUpdateBroadcastTemplatesResponse;
};

type OrganizationsServiceRecordEmailUnsubscribeAcknowledgement = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.RecordEmailUnsubscribeAcknowledgementRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.RecordEmailUnsubscribeAcknowledgementResponse;
};

type OrganizationsServiceClearEmailUnsubscribeAcknowledgement = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.ClearEmailUnsubscribeAcknowledgementRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.ClearEmailUnsubscribeAcknowledgementResponse;
};

export class OrganizationsService {
  static readonly serviceName: string;
  static readonly CreateOrganization: OrganizationsServiceCreateOrganization;
  static readonly GetOrganization: OrganizationsServiceGetOrganization;
  static readonly GetOrganizationById: OrganizationsServiceGetOrganizationById;
  static readonly UpdateOrganization: OrganizationsServiceUpdateOrganization;
  static readonly ArchiveOrganization: OrganizationsServiceArchiveOrganization;
  static readonly UnArchiveOrganization: OrganizationsServiceUnArchiveOrganization;
  static readonly ListAllOrganizationsGlobally: OrganizationsServiceListAllOrganizationsGlobally;
  static readonly ListOrganizationsByRegion: OrganizationsServiceListOrganizationsByRegion;
  static readonly ListArchivedOrganizations: OrganizationsServiceListArchivedOrganizations;
  static readonly ConvertOrgToManual: OrganizationsServiceConvertOrgToManual;
  static readonly ListOwnedOrgs: OrganizationsServiceListOwnedOrgs;
  static readonly GetOrganizationPreferences: OrganizationsServiceGetOrganizationPreferences;
  static readonly UpdateOrganizationPreferences: OrganizationsServiceUpdateOrganizationPreferences;
  static readonly GetAgentPreferences: OrganizationsServiceGetAgentPreferences;
  static readonly UpdateAgentPreferences: OrganizationsServiceUpdateAgentPreferences;
  static readonly GetContactPreferences: OrganizationsServiceGetContactPreferences;
  static readonly UpdateContactPreferences: OrganizationsServiceUpdateContactPreferences;
  static readonly GetAuthenticationPreferences: OrganizationsServiceGetAuthenticationPreferences;
  static readonly UpdateAuthenticationPreferences: OrganizationsServiceUpdateAuthenticationPreferences;
  static readonly GetWebhookPreferences: OrganizationsServiceGetWebhookPreferences;
  static readonly UpdateWebhookPreferences: OrganizationsServiceUpdateWebhookPreferences;
  static readonly GetDashboardGeneralPreferences: OrganizationsServiceGetDashboardGeneralPreferences;
  static readonly UpdateDashboardGeneralPreferences: OrganizationsServiceUpdateDashboardGeneralPreferences;
  static readonly GetDashboardQueuePreferences: OrganizationsServiceGetDashboardQueuePreferences;
  static readonly UpdateDashboardQueuePreferences: OrganizationsServiceUpdateDashboardQueuePreferences;
  static readonly GetPhonePreferences: OrganizationsServiceGetPhonePreferences;
  static readonly UpdatePhonePreferences: OrganizationsServiceUpdatePhonePreferences;
  static readonly GetCompliancePreferences: OrganizationsServiceGetCompliancePreferences;
  static readonly UpdateCompliancePreferences: OrganizationsServiceUpdateCompliancePreferences;
  static readonly GetBroadcastPreferences: OrganizationsServiceGetBroadcastPreferences;
  static readonly UpdateBroadcastPreferences: OrganizationsServiceUpdateBroadcastPreferences;
  static readonly GetSchedulePreferences: OrganizationsServiceGetSchedulePreferences;
  static readonly UpdateSchedulePreferences: OrganizationsServiceUpdateSchedulePreferences;
  static readonly GetEmailSmsPreferences: OrganizationsServiceGetEmailSmsPreferences;
  static readonly UpdateEmailSmsPreferences: OrganizationsServiceUpdateEmailSmsPreferences;
  static readonly GetBusinessPreferences: OrganizationsServiceGetBusinessPreferences;
  static readonly UpdateBusinessPreferences: OrganizationsServiceUpdateBusinessPreferences;
  static readonly UpdateAdminBusinessPreferences: OrganizationsServiceUpdateAdminBusinessPreferences;
  static readonly GetScorecardsPreferences: OrganizationsServiceGetScorecardsPreferences;
  static readonly UpdateScorecardsPreferences: OrganizationsServiceUpdateScorecardsPreferences;
  static readonly GetVoiceAnalyticsPreferences: OrganizationsServiceGetVoiceAnalyticsPreferences;
  static readonly ListVoiceAnalyticsPreferences: OrganizationsServiceListVoiceAnalyticsPreferences;
  static readonly UpdateVoiceAnalyticsPreferences: OrganizationsServiceUpdateVoiceAnalyticsPreferences;
  static readonly GetEndOfDayPreferences: OrganizationsServiceGetEndOfDayPreferences;
  static readonly UpdateEndOfDayPreferences: OrganizationsServiceUpdateEndOfDayPreferences;
  static readonly GetReportFilterPreferences: OrganizationsServiceGetReportFilterPreferences;
  static readonly UpdateReportFilterPreferences: OrganizationsServiceUpdateReportFilterPreferences;
  static readonly GetRecordingPreferences: OrganizationsServiceGetRecordingPreferences;
  static readonly UpdateRecordingPreferences: OrganizationsServiceUpdateRecordingPreferences;
  static readonly GetAdminClientPreferences: OrganizationsServiceGetAdminClientPreferences;
  static readonly UpdateAdminClientPreferences: OrganizationsServiceUpdateAdminClientPreferences;
  static readonly AcceptLinkbackRecordingTerms: OrganizationsServiceAcceptLinkbackRecordingTerms;
  static readonly LinkbackUpdateBroadcastTemplates: OrganizationsServiceLinkbackUpdateBroadcastTemplates;
  static readonly RecordEmailUnsubscribeAcknowledgement: OrganizationsServiceRecordEmailUnsubscribeAcknowledgement;
  static readonly ClearEmailUnsubscribeAcknowledgement: OrganizationsServiceClearEmailUnsubscribeAcknowledgement;
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

export class OrganizationsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createOrganization(
    requestMessage: api_v1alpha1_org_organization_pb.CreateOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.CreateOrganizationResponse|null) => void
  ): UnaryResponse;
  createOrganization(
    requestMessage: api_v1alpha1_org_organization_pb.CreateOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.CreateOrganizationResponse|null) => void
  ): UnaryResponse;
  getOrganization(
    requestMessage: api_v1alpha1_org_organization_pb.GetOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.GetOrganizationResponse|null) => void
  ): UnaryResponse;
  getOrganization(
    requestMessage: api_v1alpha1_org_organization_pb.GetOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.GetOrganizationResponse|null) => void
  ): UnaryResponse;
  getOrganizationById(
    requestMessage: api_v1alpha1_org_organization_pb.GetOrganizationByIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.GetOrganizationByIdResponse|null) => void
  ): UnaryResponse;
  getOrganizationById(
    requestMessage: api_v1alpha1_org_organization_pb.GetOrganizationByIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.GetOrganizationByIdResponse|null) => void
  ): UnaryResponse;
  updateOrganization(
    requestMessage: api_v1alpha1_org_organization_pb.UpdateOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.UpdateOrganizationResponse|null) => void
  ): UnaryResponse;
  updateOrganization(
    requestMessage: api_v1alpha1_org_organization_pb.UpdateOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.UpdateOrganizationResponse|null) => void
  ): UnaryResponse;
  archiveOrganization(
    requestMessage: api_v1alpha1_org_organization_pb.ArchiveOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.ArchiveOrganizationResponse|null) => void
  ): UnaryResponse;
  archiveOrganization(
    requestMessage: api_v1alpha1_org_organization_pb.ArchiveOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.ArchiveOrganizationResponse|null) => void
  ): UnaryResponse;
  unArchiveOrganization(
    requestMessage: api_v1alpha1_org_organization_pb.UnArchiveOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.UnArchiveOrganizationResponse|null) => void
  ): UnaryResponse;
  unArchiveOrganization(
    requestMessage: api_v1alpha1_org_organization_pb.UnArchiveOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.UnArchiveOrganizationResponse|null) => void
  ): UnaryResponse;
  listAllOrganizationsGlobally(requestMessage: api_v1alpha1_org_organization_pb.ListAllOrganizationsGloballyRequest, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_org_organization_pb.ListAllOrganizationsGloballyResponse>;
  listOrganizationsByRegion(requestMessage: api_v1alpha1_org_organization_pb.ListOrganizationsByRegionRequest, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_org_organization_pb.ListOrganizationsByRegionResponse>;
  listArchivedOrganizations(requestMessage: api_v1alpha1_org_organization_pb.ListArchivedOrganizationsRequest, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_org_organization_pb.ListArchivedOrganizationsResponse>;
  convertOrgToManual(
    requestMessage: api_v1alpha1_org_organization_pb.ConvertOrgToManualRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.ConvertOrgToManualResponse|null) => void
  ): UnaryResponse;
  convertOrgToManual(
    requestMessage: api_v1alpha1_org_organization_pb.ConvertOrgToManualRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.ConvertOrgToManualResponse|null) => void
  ): UnaryResponse;
  listOwnedOrgs(requestMessage: api_v1alpha1_org_organization_pb.ListOwnedOrgsRequest, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_org_organization_pb.ListOwnedOrgsResponse>;
  getOrganizationPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetOrganizationPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetOrganizationPreferencesResponse|null) => void
  ): UnaryResponse;
  getOrganizationPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetOrganizationPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetOrganizationPreferencesResponse|null) => void
  ): UnaryResponse;
  updateOrganizationPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateOrganizationPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateOrganizationPreferencesResponse|null) => void
  ): UnaryResponse;
  updateOrganizationPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateOrganizationPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateOrganizationPreferencesResponse|null) => void
  ): UnaryResponse;
  getAgentPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetAgentPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetAgentPreferencesResponse|null) => void
  ): UnaryResponse;
  getAgentPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetAgentPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetAgentPreferencesResponse|null) => void
  ): UnaryResponse;
  updateAgentPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateAgentPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateAgentPreferencesResponse|null) => void
  ): UnaryResponse;
  updateAgentPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateAgentPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateAgentPreferencesResponse|null) => void
  ): UnaryResponse;
  getContactPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetContactPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetContactPreferencesResponse|null) => void
  ): UnaryResponse;
  getContactPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetContactPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetContactPreferencesResponse|null) => void
  ): UnaryResponse;
  updateContactPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateContactPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateContactPreferencesResponse|null) => void
  ): UnaryResponse;
  updateContactPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateContactPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateContactPreferencesResponse|null) => void
  ): UnaryResponse;
  getAuthenticationPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetAuthenticationPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetAuthenticationPreferencesResponse|null) => void
  ): UnaryResponse;
  getAuthenticationPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetAuthenticationPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetAuthenticationPreferencesResponse|null) => void
  ): UnaryResponse;
  updateAuthenticationPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateAuthenticationPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateAuthenticationPreferencesResponse|null) => void
  ): UnaryResponse;
  updateAuthenticationPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateAuthenticationPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateAuthenticationPreferencesResponse|null) => void
  ): UnaryResponse;
  getWebhookPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetWebhookPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetWebhookPreferencesResponse|null) => void
  ): UnaryResponse;
  getWebhookPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetWebhookPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetWebhookPreferencesResponse|null) => void
  ): UnaryResponse;
  updateWebhookPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateWebhookPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateWebhookPreferencesResponse|null) => void
  ): UnaryResponse;
  updateWebhookPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateWebhookPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateWebhookPreferencesResponse|null) => void
  ): UnaryResponse;
  getDashboardGeneralPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetDashboardGeneralPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetDashboardGeneralPreferencesResponse|null) => void
  ): UnaryResponse;
  getDashboardGeneralPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetDashboardGeneralPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetDashboardGeneralPreferencesResponse|null) => void
  ): UnaryResponse;
  updateDashboardGeneralPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateDashboardGeneralPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateDashboardGeneralPreferencesResponse|null) => void
  ): UnaryResponse;
  updateDashboardGeneralPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateDashboardGeneralPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateDashboardGeneralPreferencesResponse|null) => void
  ): UnaryResponse;
  getDashboardQueuePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetDashboardQueuePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetDashboardQueuePreferencesResponse|null) => void
  ): UnaryResponse;
  getDashboardQueuePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetDashboardQueuePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetDashboardQueuePreferencesResponse|null) => void
  ): UnaryResponse;
  updateDashboardQueuePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateDashboardQueuePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateDashboardQueuePreferencesResponse|null) => void
  ): UnaryResponse;
  updateDashboardQueuePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateDashboardQueuePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateDashboardQueuePreferencesResponse|null) => void
  ): UnaryResponse;
  getPhonePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetPhonePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetPhonePreferencesResponse|null) => void
  ): UnaryResponse;
  getPhonePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetPhonePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetPhonePreferencesResponse|null) => void
  ): UnaryResponse;
  updatePhonePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdatePhonePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdatePhonePreferencesResponse|null) => void
  ): UnaryResponse;
  updatePhonePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdatePhonePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdatePhonePreferencesResponse|null) => void
  ): UnaryResponse;
  getCompliancePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetCompliancePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetCompliancePreferencesResponse|null) => void
  ): UnaryResponse;
  getCompliancePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetCompliancePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetCompliancePreferencesResponse|null) => void
  ): UnaryResponse;
  updateCompliancePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateCompliancePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateCompliancePreferencesResponse|null) => void
  ): UnaryResponse;
  updateCompliancePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateCompliancePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateCompliancePreferencesResponse|null) => void
  ): UnaryResponse;
  getBroadcastPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetBroadcastPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetBroadcastPreferencesResponse|null) => void
  ): UnaryResponse;
  getBroadcastPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetBroadcastPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetBroadcastPreferencesResponse|null) => void
  ): UnaryResponse;
  updateBroadcastPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateBroadcastPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateBroadcastPreferencesResponse|null) => void
  ): UnaryResponse;
  updateBroadcastPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateBroadcastPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateBroadcastPreferencesResponse|null) => void
  ): UnaryResponse;
  getSchedulePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetSchedulePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetSchedulePreferencesResponse|null) => void
  ): UnaryResponse;
  getSchedulePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetSchedulePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetSchedulePreferencesResponse|null) => void
  ): UnaryResponse;
  updateSchedulePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateSchedulePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateSchedulePreferencesResponse|null) => void
  ): UnaryResponse;
  updateSchedulePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateSchedulePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateSchedulePreferencesResponse|null) => void
  ): UnaryResponse;
  getEmailSmsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetEmailSmsPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetEmailSmsPreferencesResponse|null) => void
  ): UnaryResponse;
  getEmailSmsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetEmailSmsPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetEmailSmsPreferencesResponse|null) => void
  ): UnaryResponse;
  updateEmailSmsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateEmailSmsPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateEmailSmsPreferencesResponse|null) => void
  ): UnaryResponse;
  updateEmailSmsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateEmailSmsPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateEmailSmsPreferencesResponse|null) => void
  ): UnaryResponse;
  getBusinessPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetBusinessPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetBusinessPreferencesResponse|null) => void
  ): UnaryResponse;
  getBusinessPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetBusinessPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetBusinessPreferencesResponse|null) => void
  ): UnaryResponse;
  updateBusinessPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateBusinessPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateBusinessPreferencesResponse|null) => void
  ): UnaryResponse;
  updateBusinessPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateBusinessPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateBusinessPreferencesResponse|null) => void
  ): UnaryResponse;
  updateAdminBusinessPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateAdminBusinessPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateAdminBusinessPreferencesResponse|null) => void
  ): UnaryResponse;
  updateAdminBusinessPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateAdminBusinessPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateAdminBusinessPreferencesResponse|null) => void
  ): UnaryResponse;
  getScorecardsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetScorecardsPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetScorecardsPreferencesResponse|null) => void
  ): UnaryResponse;
  getScorecardsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetScorecardsPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetScorecardsPreferencesResponse|null) => void
  ): UnaryResponse;
  updateScorecardsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateScorecardsPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateScorecardsPreferencesResponse|null) => void
  ): UnaryResponse;
  updateScorecardsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateScorecardsPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateScorecardsPreferencesResponse|null) => void
  ): UnaryResponse;
  getVoiceAnalyticsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetVoiceAnalyticsPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetVoiceAnalyticsPreferencesResponse|null) => void
  ): UnaryResponse;
  getVoiceAnalyticsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetVoiceAnalyticsPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetVoiceAnalyticsPreferencesResponse|null) => void
  ): UnaryResponse;
  listVoiceAnalyticsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.ListVoiceAnalyticsPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.ListVoiceAnalyticsPreferencesResponse|null) => void
  ): UnaryResponse;
  listVoiceAnalyticsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.ListVoiceAnalyticsPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.ListVoiceAnalyticsPreferencesResponse|null) => void
  ): UnaryResponse;
  updateVoiceAnalyticsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateVoiceAnalyticsPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateVoiceAnalyticsPreferencesResponse|null) => void
  ): UnaryResponse;
  updateVoiceAnalyticsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateVoiceAnalyticsPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateVoiceAnalyticsPreferencesResponse|null) => void
  ): UnaryResponse;
  getEndOfDayPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetEndOfDayPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetEndOfDayPreferencesResponse|null) => void
  ): UnaryResponse;
  getEndOfDayPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetEndOfDayPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetEndOfDayPreferencesResponse|null) => void
  ): UnaryResponse;
  updateEndOfDayPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateEndOfDayPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateEndOfDayPreferencesResponse|null) => void
  ): UnaryResponse;
  updateEndOfDayPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateEndOfDayPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateEndOfDayPreferencesResponse|null) => void
  ): UnaryResponse;
  getReportFilterPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetFilterPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetFilterPreferencesResponse|null) => void
  ): UnaryResponse;
  getReportFilterPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetFilterPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetFilterPreferencesResponse|null) => void
  ): UnaryResponse;
  updateReportFilterPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateFilterPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateFilterPreferencesResponse|null) => void
  ): UnaryResponse;
  updateReportFilterPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateFilterPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateFilterPreferencesResponse|null) => void
  ): UnaryResponse;
  getRecordingPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetRecordingPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetRecordingPreferencesResponse|null) => void
  ): UnaryResponse;
  getRecordingPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetRecordingPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetRecordingPreferencesResponse|null) => void
  ): UnaryResponse;
  updateRecordingPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateRecordingPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateRecordingPreferencesResponse|null) => void
  ): UnaryResponse;
  updateRecordingPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateRecordingPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateRecordingPreferencesResponse|null) => void
  ): UnaryResponse;
  getAdminClientPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetAdminClientPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetAdminClientPreferencesResponse|null) => void
  ): UnaryResponse;
  getAdminClientPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetAdminClientPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetAdminClientPreferencesResponse|null) => void
  ): UnaryResponse;
  updateAdminClientPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateAdminClientPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateAdminClientPreferencesResponse|null) => void
  ): UnaryResponse;
  updateAdminClientPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateAdminClientPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateAdminClientPreferencesResponse|null) => void
  ): UnaryResponse;
  acceptLinkbackRecordingTerms(
    requestMessage: api_v1alpha1_org_preferences_pb.AcceptLinkbackRecordingTermsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.AcceptLinkbackRecordingTermsResponse|null) => void
  ): UnaryResponse;
  acceptLinkbackRecordingTerms(
    requestMessage: api_v1alpha1_org_preferences_pb.AcceptLinkbackRecordingTermsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.AcceptLinkbackRecordingTermsResponse|null) => void
  ): UnaryResponse;
  linkbackUpdateBroadcastTemplates(
    requestMessage: api_v1alpha1_org_preferences_pb.LinkbackUpdateBroadcastTemplatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.LinkbackUpdateBroadcastTemplatesResponse|null) => void
  ): UnaryResponse;
  linkbackUpdateBroadcastTemplates(
    requestMessage: api_v1alpha1_org_preferences_pb.LinkbackUpdateBroadcastTemplatesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.LinkbackUpdateBroadcastTemplatesResponse|null) => void
  ): UnaryResponse;
  recordEmailUnsubscribeAcknowledgement(
    requestMessage: api_v1alpha1_org_preferences_pb.RecordEmailUnsubscribeAcknowledgementRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.RecordEmailUnsubscribeAcknowledgementResponse|null) => void
  ): UnaryResponse;
  recordEmailUnsubscribeAcknowledgement(
    requestMessage: api_v1alpha1_org_preferences_pb.RecordEmailUnsubscribeAcknowledgementRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.RecordEmailUnsubscribeAcknowledgementResponse|null) => void
  ): UnaryResponse;
  clearEmailUnsubscribeAcknowledgement(
    requestMessage: api_v1alpha1_org_preferences_pb.ClearEmailUnsubscribeAcknowledgementRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.ClearEmailUnsubscribeAcknowledgementResponse|null) => void
  ): UnaryResponse;
  clearEmailUnsubscribeAcknowledgement(
    requestMessage: api_v1alpha1_org_preferences_pb.ClearEmailUnsubscribeAcknowledgementRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.ClearEmailUnsubscribeAcknowledgementResponse|null) => void
  ): UnaryResponse;
}

