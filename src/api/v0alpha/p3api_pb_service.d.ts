// package: api.v0alpha
// file: api/v0alpha/p3api.proto

import * as api_v0alpha_p3api_pb from "../../api/v0alpha/p3api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type P3ApiGetAgentHuntGroup = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.GetAgentHuntGroupReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.HuntGroup;
};

type P3ApiGetAgentSession = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.GetAgentSessionReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.AgentSession;
};

type P3ApiGetAgentSkills = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.GetAgentSkillsReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.GetAgentSkillsRes;
};

type P3ApiCreateAgentSkill = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.CreateAgentSkillReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.CreateAgentSkillRes;
};

type P3ApiUpdateAgentSkill = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.UpdateAgentSkillReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.UpdateAgentSkillRes;
};

type P3ApiDeleteAgentSkill = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.DeleteAgentSkillReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.DeleteAgentSkillRes;
};

type P3ApiListAgentSkills = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListAgentSkillsReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListAgentSkillsRes;
};

type P3ApiListSkillsForCurrentAgent = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListSkillsForCurrentAgentReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListSkillsForCurrentAgentRes;
};

type P3ApiListSkills = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListSkillsReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListSkillsRes;
};

type P3ApiUpdateAgentSkills = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.UpdateAgentSkillsReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.UpdateAgentSkillsRes;
};

type P3ApiGetCurrentAgent = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.GetCurrentAgentReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.Agent;
};

type P3ApiGetClientInfoData = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.GetClientInfoDataReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.GetClientInfoDataRes;
};

type P3ApiGetClientInfoDisplayTemplate = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.GetClientInfoDisplayTemplateReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.GetClientInfoDisplayTemplateRes;
};

type P3ApiListAgentStatisticsData = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListAgentStatisticsDataReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListAgentStatisticsDataRes;
};

type P3ApiListPBXExtensions = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListPBXExtensionsReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListPBXExtensionsRes;
};

type P3ApiListAgentExtensions = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListAgentExtensionsReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListAgentExtensionsRes;
};

type P3ApiListHuntGroupExtensions = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListHuntGroupExtensionsReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListHuntGroupExtensionsRes;
};

type P3ApiCreateExtension = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.CreateExtensionReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.CreateExtensionRes;
};

type P3ApiDeleteExtension = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.DeleteExtensionReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.DeleteExtensionRes;
};

type P3ApiUpdateExtension = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.UpdateExtensionReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.UpdateExtensionRes;
};

type P3ApiUpdatePBXExtension = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.UpdatePBXExtensionReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.UpdatePBXExtensionRes;
};

type P3ApiCreateDNCLNumbers = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.CreateDNCLNumbersReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.CreateDNCLNumbersRes;
};

type P3ApiGetScriptOrResponses = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.GetScriptOrResponsesReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.GetScriptOrResponsesRes;
};

type P3ApiGetHuntGroupAgentSettings = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.GetHuntGroupAgentSettingsReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.HuntGroupAgentSettings;
};

type P3ApiListHuntGroupWebLinks = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListHuntGroupWebLinksReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListHuntGroupWebLinksRes;
};

type P3ApiGetHuntGroupPauseCodes = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.GetHuntGroupPauseCodesReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.GetHuntGroupPauseCodesRes;
};

type P3ApiListAgentCallHistory = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListAgentCallHistoryReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListAgentCallHistoryRes;
};

type P3ApiListClientPhoneBookEntries = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListClientPhoneBookEntriesReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListClientPhoneBookEntriesRes;
};

type P3ApiListHuntGroupPhoneBookEntries = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListHuntGroupPhoneBookEntriesReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListHuntGroupPhoneBookEntriesRes;
};

type P3ApiCreatePhoneBookEntry = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.CreatePhoneBookEntryReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.CreatePhoneBookEntryRes;
};

type P3ApiUpdatePhoneBookEntry = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.UpdatePhoneBookEntryReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.UpdatePhoneBookEntryRes;
};

type P3ApiDeletePhoneBookEntry = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.DeletePhoneBookEntryReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.DeletePhoneBookEntryRes;
};

type P3ApiListPhoneBooks = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListPhoneBooksReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListPhoneBooksRes;
};

type P3ApiListAgentTriggers = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListAgentTriggersReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListAgentTriggersRes;
};

type P3ApiGetCampaignCompletionStatus = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.GetCampaignCompletionStatusReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.GetCampaignCompletionStatusRes;
};

type P3ApiGetLostPeerInfo = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.GetLostPeerInfoReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.GetLostPeerInfoRes;
};

type P3ApiGetDispositionKeys = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.GetDispositionKeysReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.GetDispositionKeysRes;
};

type P3ApiGetReadyAgents = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.GetReadyAgentsReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.GetReadyAgentsRes;
};

type P3ApiListAgentQueueAndOnHoldCallData = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListAgentQueueAndOnHoldCallDataReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListAgentQueueAndOnHoldCallDataRes;
};

type P3ApiSaveAgentCallResponses = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.SaveAgentCallResponsesReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.SaveAgentCallResponsesRes;
};

type P3ApiListAgentTransferOptions = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListAgentTransferOptionsReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListAgentTransferOptionsRes;
};

type P3ApiUpdateAgentCallResponseValue = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.UpdateAgentCallResponseValueReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.UpdateAgentCallResponseValueRes;
};

type P3ApiGetIntercomPeerInfo = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.GetIntercomPeerInfoReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.GetIntercomPeerInfoRes;
};

type P3ApiListOrgResponseEvaluators = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListOrgResponseEvaluatorsReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListOrgResponseEvaluatorsRes;
};

type P3ApiGetQueueConfigurationOptionsArray = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.GetQueueConfigurationOptionsArrayReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.GetQueueConfigurationOptionsArrayRes;
};

type P3ApiGetConditionalDNCLRules = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.GetConditionalDNCLRulesReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.GetConditionalDNCLRulesRes;
};

type P3ApiManualDialStart = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ManualDialStartReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ManualDialStartRes;
};

type P3ApiListExtendedCallHistory = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListExtendedCallHistoryReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListExtendedCallHistoryRes;
};

type P3ApiListWhiteListPhoneBooks = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListWhiteListPhoneBooksReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListWhiteListPhoneBooksRes;
};

type P3ApiDownloadCallRecording = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.DownloadCallRecordingReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.DownloadRecordingRes;
};

type P3ApiDownloadCallRecordings = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.DownloadCallRecordingsReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.DownloadRecordingRes;
};

type P3ApiPlacePreviewDialCall = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.PlacePreviewDialCallReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.PlacePreviewDialCallRes;
};

type P3ApiCancelPreviewDialCall = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.CancelPreviewDialCallReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.CancelPreviewDialCallRes;
};

type P3ApiUpdateTaskStatus = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.UpdateTaskStatusReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.Nil;
};

type P3ApiListCallbackRoutingAgents = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListCallbackRoutingAgentsReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListCallbackRoutingAgentsRes;
};

type P3ApiListCallbackRoutingSkills = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListCallbackRoutingSkillsReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListCallbackRoutingSkillsRes;
};

type P3ApiHandleRecordingDelay = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.HandleRecordingDelayReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.HandleRecordingDelayRes;
};

type P3ApiUpdateAgentAssignedHuntGroup = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.UpdateAgentAssignedHuntGroupReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.UpdateAgentAssignedHuntGroupRes;
};

type P3ApiGetCallData = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.GetCallDataReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.GetCallDataRes;
};

type P3ApiListHuntGroups = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListHuntGroupsReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListHuntGroupsRes;
};

type P3ApiListReassignmentHuntGroups = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListReassignmentHuntGroupsReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListReassignmentHuntGroupsRes;
};

type P3ApiGetOrgAgentSettings = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.GetOrgAgentSettingsReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.GetOrgAgentSettingsRes;
};

type P3ApiListCallerIdsFromBucket = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListCallerIdsFromBucketReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListCallerIdsFromBucketRes;
};

type P3ApiSaveLastCallResponse = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.SaveLastCallResponseReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.SaveLastCallResponseRes;
};

type P3ApiListAgentCallLogsByCallSidAndType = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListAgentCallLogsByCallSidAndTypeReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListAgentCallLogsByCallSidAndTypeRes;
};

type P3ApiListAgentCallResponseValues = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListAgentCallResponseValuesReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListAgentCallResponseValuesRes;
};

type P3ApiGetContactSchemaByContactGroup = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.GetContactSchemaByContactGroupReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ContactSchema;
};

type P3ApiListContactGroupDetailsByClientSid = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListContactGroupDetailsByClientSidReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListContactGroupDetailsByClientSidRes;
};

type P3ApiGetContactGroupDetails = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.GetContactGroupReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ContactGroup;
};

type P3ApiGetContactGroupSize = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.GetContactGroupReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.GetContactGroupSizeRes;
};

type P3ApiCreateContactFieldDescription = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.CreateContactFieldDescriptionReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.CreateContactFieldDescriptionRes;
};

type P3ApiUpdateContactFieldDescription = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.UpdateContactFieldDescriptionReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.UpdateContactFieldDescriptionRes;
};

type P3ApiDeleteContactFieldDescription = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.DeleteContactFieldDescriptionReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.DeleteContactFieldDescriptionRes;
};

type P3ApiListContactFieldDescriptions = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListContactFieldDescriptionsReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListContactFieldDescriptionsRes;
};

type P3ApiListContactFieldDescriptionsByCGSid = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListContactFieldDescriptionsByCGSidReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListContactFieldDescriptionsByCGSidRes;
};

type P3ApiListContactImportTemplates = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListContactImportTemplatesReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListContactImportTemplatesRes;
};

type P3ApiUpdatePreviewRecordToFinished = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.UpdatePreviewRecordToFinishedReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.UpdatePreviewRecordToFinishedRes;
};

type P3ApiUpdateAgentHuntGroup = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.UpdateAgentHuntGroupReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.UpdateAgentHuntGroupRes;
};

type P3ApiMultiAgentHuntGroupAssignment = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.MultiAgentHuntGroupAssignmentReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.MultiAgentHuntGroupAssignmentRes;
};

type P3ApiGetAgentProfile = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.GetAgentProfileReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.AgentProfile;
};

type P3ApiRecalculateBilling = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.RecalculateBillingReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.RecalculateBillingRes;
};

type P3ApiListOutboundBroadcastTemplateData = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListOutboundBroadcastTemplateDataReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListOutboundBroadcastTemplateDataRes;
};

type P3ApiMultiAgentSkillAssignment = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.MultiAgentSkillAssignmentReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.MultiAgentSkillAssignmentRes;
};

type P3ApiMultiAgentSkillUnassignment = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.MultiAgentSkillUnassignmentReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.MultiAgentSkillUnassignmentRes;
};

type P3ApiListMAMAgentHuntGroupsByClientSid = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListMAMAgentHuntGroupsByClientSidReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListMAMAgentHuntGroupsByClientSidRes;
};

type P3ApiListTtsVoices = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListTtsVoicesReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListTtsVoicesRes;
};

type P3ApiCreateTtsVoice = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.CreateTtsVoiceReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.CreateTtsVoiceRes;
};

type P3ApiDeleteTtsVoice = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.DeleteTtsVoiceReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.DeleteTtsVoiceRes;
};

type P3ApiListCustomDataKeys = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListCustomDataKeysReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListCustomDataKeysRes;
};

type P3ApiCreateCustomDataKey = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.CreateCustomDataKeyReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.CreateCustomDataKeyRes;
};

type P3ApiDeleteCustomDataKey = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.DeleteCustomDataKeyReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.DeleteCustomDataKeyRes;
};

type P3ApiUpdateCustomDataKey = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.UpdateCustomDataKeyReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.UpdateCustomDataKeyRes;
};

type P3ApiGetActivityLogHistory = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v0alpha_p3api_pb.GetActivityLogHistoryReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.GetActivityLogHistoryRes;
};

type P3ApiListTableTemplateProperties = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListTableTemplatePropertiesReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListTableTemplatePropertiesRes;
};

type P3ApiListAgentSkillsFilters = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListAgentSkillsFiltersReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListAgentSkillsFiltersRes;
};

type P3ApiListScheduleRules = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListScheduleRulesRequest;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListScheduleRulesResult;
};

type P3ApiListCustomReportFilters = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListCustomReportFiltersReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListCustomReportFiltersRes;
};

type P3ApiListSmsNumbers = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListSmsNumbersReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListSmsNumbersRes;
};

type P3ApiGetMailMerge = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.GetMailMergeReq;
  readonly responseType: typeof api_v0alpha_p3api_pb.GetMailMergeRes;
};

type P3ApiListDistinctPauseCodes = {
  readonly methodName: string;
  readonly service: typeof P3Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_p3api_pb.ListDistinctPauseCodesRequest;
  readonly responseType: typeof api_v0alpha_p3api_pb.ListDistinctPauseCodesResponse;
};

export class P3Api {
  static readonly serviceName: string;
  static readonly GetAgentHuntGroup: P3ApiGetAgentHuntGroup;
  static readonly GetAgentSession: P3ApiGetAgentSession;
  static readonly GetAgentSkills: P3ApiGetAgentSkills;
  static readonly CreateAgentSkill: P3ApiCreateAgentSkill;
  static readonly UpdateAgentSkill: P3ApiUpdateAgentSkill;
  static readonly DeleteAgentSkill: P3ApiDeleteAgentSkill;
  static readonly ListAgentSkills: P3ApiListAgentSkills;
  static readonly ListSkillsForCurrentAgent: P3ApiListSkillsForCurrentAgent;
  static readonly ListSkills: P3ApiListSkills;
  static readonly UpdateAgentSkills: P3ApiUpdateAgentSkills;
  static readonly GetCurrentAgent: P3ApiGetCurrentAgent;
  static readonly GetClientInfoData: P3ApiGetClientInfoData;
  static readonly GetClientInfoDisplayTemplate: P3ApiGetClientInfoDisplayTemplate;
  static readonly ListAgentStatisticsData: P3ApiListAgentStatisticsData;
  static readonly ListPBXExtensions: P3ApiListPBXExtensions;
  static readonly ListAgentExtensions: P3ApiListAgentExtensions;
  static readonly ListHuntGroupExtensions: P3ApiListHuntGroupExtensions;
  static readonly CreateExtension: P3ApiCreateExtension;
  static readonly DeleteExtension: P3ApiDeleteExtension;
  static readonly UpdateExtension: P3ApiUpdateExtension;
  static readonly UpdatePBXExtension: P3ApiUpdatePBXExtension;
  static readonly CreateDNCLNumbers: P3ApiCreateDNCLNumbers;
  static readonly GetScriptOrResponses: P3ApiGetScriptOrResponses;
  static readonly GetHuntGroupAgentSettings: P3ApiGetHuntGroupAgentSettings;
  static readonly ListHuntGroupWebLinks: P3ApiListHuntGroupWebLinks;
  static readonly GetHuntGroupPauseCodes: P3ApiGetHuntGroupPauseCodes;
  static readonly ListAgentCallHistory: P3ApiListAgentCallHistory;
  static readonly ListClientPhoneBookEntries: P3ApiListClientPhoneBookEntries;
  static readonly ListHuntGroupPhoneBookEntries: P3ApiListHuntGroupPhoneBookEntries;
  static readonly CreatePhoneBookEntry: P3ApiCreatePhoneBookEntry;
  static readonly UpdatePhoneBookEntry: P3ApiUpdatePhoneBookEntry;
  static readonly DeletePhoneBookEntry: P3ApiDeletePhoneBookEntry;
  static readonly ListPhoneBooks: P3ApiListPhoneBooks;
  static readonly ListAgentTriggers: P3ApiListAgentTriggers;
  static readonly GetCampaignCompletionStatus: P3ApiGetCampaignCompletionStatus;
  static readonly GetLostPeerInfo: P3ApiGetLostPeerInfo;
  static readonly GetDispositionKeys: P3ApiGetDispositionKeys;
  static readonly GetReadyAgents: P3ApiGetReadyAgents;
  static readonly ListAgentQueueAndOnHoldCallData: P3ApiListAgentQueueAndOnHoldCallData;
  static readonly SaveAgentCallResponses: P3ApiSaveAgentCallResponses;
  static readonly ListAgentTransferOptions: P3ApiListAgentTransferOptions;
  static readonly UpdateAgentCallResponseValue: P3ApiUpdateAgentCallResponseValue;
  static readonly GetIntercomPeerInfo: P3ApiGetIntercomPeerInfo;
  static readonly ListOrgResponseEvaluators: P3ApiListOrgResponseEvaluators;
  static readonly GetQueueConfigurationOptionsArray: P3ApiGetQueueConfigurationOptionsArray;
  static readonly GetConditionalDNCLRules: P3ApiGetConditionalDNCLRules;
  static readonly ManualDialStart: P3ApiManualDialStart;
  static readonly ListExtendedCallHistory: P3ApiListExtendedCallHistory;
  static readonly ListWhiteListPhoneBooks: P3ApiListWhiteListPhoneBooks;
  static readonly DownloadCallRecording: P3ApiDownloadCallRecording;
  static readonly DownloadCallRecordings: P3ApiDownloadCallRecordings;
  static readonly PlacePreviewDialCall: P3ApiPlacePreviewDialCall;
  static readonly CancelPreviewDialCall: P3ApiCancelPreviewDialCall;
  static readonly UpdateTaskStatus: P3ApiUpdateTaskStatus;
  static readonly ListCallbackRoutingAgents: P3ApiListCallbackRoutingAgents;
  static readonly ListCallbackRoutingSkills: P3ApiListCallbackRoutingSkills;
  static readonly HandleRecordingDelay: P3ApiHandleRecordingDelay;
  static readonly UpdateAgentAssignedHuntGroup: P3ApiUpdateAgentAssignedHuntGroup;
  static readonly GetCallData: P3ApiGetCallData;
  static readonly ListHuntGroups: P3ApiListHuntGroups;
  static readonly ListReassignmentHuntGroups: P3ApiListReassignmentHuntGroups;
  static readonly GetOrgAgentSettings: P3ApiGetOrgAgentSettings;
  static readonly ListCallerIdsFromBucket: P3ApiListCallerIdsFromBucket;
  static readonly SaveLastCallResponse: P3ApiSaveLastCallResponse;
  static readonly ListAgentCallLogsByCallSidAndType: P3ApiListAgentCallLogsByCallSidAndType;
  static readonly ListAgentCallResponseValues: P3ApiListAgentCallResponseValues;
  static readonly GetContactSchemaByContactGroup: P3ApiGetContactSchemaByContactGroup;
  static readonly ListContactGroupDetailsByClientSid: P3ApiListContactGroupDetailsByClientSid;
  static readonly GetContactGroupDetails: P3ApiGetContactGroupDetails;
  static readonly GetContactGroupSize: P3ApiGetContactGroupSize;
  static readonly CreateContactFieldDescription: P3ApiCreateContactFieldDescription;
  static readonly UpdateContactFieldDescription: P3ApiUpdateContactFieldDescription;
  static readonly DeleteContactFieldDescription: P3ApiDeleteContactFieldDescription;
  static readonly ListContactFieldDescriptions: P3ApiListContactFieldDescriptions;
  static readonly ListContactFieldDescriptionsByCGSid: P3ApiListContactFieldDescriptionsByCGSid;
  static readonly ListContactImportTemplates: P3ApiListContactImportTemplates;
  static readonly UpdatePreviewRecordToFinished: P3ApiUpdatePreviewRecordToFinished;
  static readonly UpdateAgentHuntGroup: P3ApiUpdateAgentHuntGroup;
  static readonly MultiAgentHuntGroupAssignment: P3ApiMultiAgentHuntGroupAssignment;
  static readonly GetAgentProfile: P3ApiGetAgentProfile;
  static readonly RecalculateBilling: P3ApiRecalculateBilling;
  static readonly ListOutboundBroadcastTemplateData: P3ApiListOutboundBroadcastTemplateData;
  static readonly MultiAgentSkillAssignment: P3ApiMultiAgentSkillAssignment;
  static readonly MultiAgentSkillUnassignment: P3ApiMultiAgentSkillUnassignment;
  static readonly ListMAMAgentHuntGroupsByClientSid: P3ApiListMAMAgentHuntGroupsByClientSid;
  static readonly ListTtsVoices: P3ApiListTtsVoices;
  static readonly CreateTtsVoice: P3ApiCreateTtsVoice;
  static readonly DeleteTtsVoice: P3ApiDeleteTtsVoice;
  static readonly ListCustomDataKeys: P3ApiListCustomDataKeys;
  static readonly CreateCustomDataKey: P3ApiCreateCustomDataKey;
  static readonly DeleteCustomDataKey: P3ApiDeleteCustomDataKey;
  static readonly UpdateCustomDataKey: P3ApiUpdateCustomDataKey;
  static readonly GetActivityLogHistory: P3ApiGetActivityLogHistory;
  static readonly ListTableTemplateProperties: P3ApiListTableTemplateProperties;
  static readonly ListAgentSkillsFilters: P3ApiListAgentSkillsFilters;
  static readonly ListScheduleRules: P3ApiListScheduleRules;
  static readonly ListCustomReportFilters: P3ApiListCustomReportFilters;
  static readonly ListSmsNumbers: P3ApiListSmsNumbers;
  static readonly GetMailMerge: P3ApiGetMailMerge;
  static readonly ListDistinctPauseCodes: P3ApiListDistinctPauseCodes;
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

export class P3ApiClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAgentHuntGroup(
    requestMessage: api_v0alpha_p3api_pb.GetAgentHuntGroupReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.HuntGroup|null) => void
  ): UnaryResponse;
  getAgentHuntGroup(
    requestMessage: api_v0alpha_p3api_pb.GetAgentHuntGroupReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.HuntGroup|null) => void
  ): UnaryResponse;
  getAgentSession(
    requestMessage: api_v0alpha_p3api_pb.GetAgentSessionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.AgentSession|null) => void
  ): UnaryResponse;
  getAgentSession(
    requestMessage: api_v0alpha_p3api_pb.GetAgentSessionReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.AgentSession|null) => void
  ): UnaryResponse;
  getAgentSkills(
    requestMessage: api_v0alpha_p3api_pb.GetAgentSkillsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetAgentSkillsRes|null) => void
  ): UnaryResponse;
  getAgentSkills(
    requestMessage: api_v0alpha_p3api_pb.GetAgentSkillsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetAgentSkillsRes|null) => void
  ): UnaryResponse;
  createAgentSkill(
    requestMessage: api_v0alpha_p3api_pb.CreateAgentSkillReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.CreateAgentSkillRes|null) => void
  ): UnaryResponse;
  createAgentSkill(
    requestMessage: api_v0alpha_p3api_pb.CreateAgentSkillReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.CreateAgentSkillRes|null) => void
  ): UnaryResponse;
  updateAgentSkill(
    requestMessage: api_v0alpha_p3api_pb.UpdateAgentSkillReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.UpdateAgentSkillRes|null) => void
  ): UnaryResponse;
  updateAgentSkill(
    requestMessage: api_v0alpha_p3api_pb.UpdateAgentSkillReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.UpdateAgentSkillRes|null) => void
  ): UnaryResponse;
  deleteAgentSkill(
    requestMessage: api_v0alpha_p3api_pb.DeleteAgentSkillReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.DeleteAgentSkillRes|null) => void
  ): UnaryResponse;
  deleteAgentSkill(
    requestMessage: api_v0alpha_p3api_pb.DeleteAgentSkillReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.DeleteAgentSkillRes|null) => void
  ): UnaryResponse;
  listAgentSkills(
    requestMessage: api_v0alpha_p3api_pb.ListAgentSkillsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListAgentSkillsRes|null) => void
  ): UnaryResponse;
  listAgentSkills(
    requestMessage: api_v0alpha_p3api_pb.ListAgentSkillsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListAgentSkillsRes|null) => void
  ): UnaryResponse;
  listSkillsForCurrentAgent(
    requestMessage: api_v0alpha_p3api_pb.ListSkillsForCurrentAgentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListSkillsForCurrentAgentRes|null) => void
  ): UnaryResponse;
  listSkillsForCurrentAgent(
    requestMessage: api_v0alpha_p3api_pb.ListSkillsForCurrentAgentReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListSkillsForCurrentAgentRes|null) => void
  ): UnaryResponse;
  listSkills(
    requestMessage: api_v0alpha_p3api_pb.ListSkillsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListSkillsRes|null) => void
  ): UnaryResponse;
  listSkills(
    requestMessage: api_v0alpha_p3api_pb.ListSkillsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListSkillsRes|null) => void
  ): UnaryResponse;
  updateAgentSkills(
    requestMessage: api_v0alpha_p3api_pb.UpdateAgentSkillsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.UpdateAgentSkillsRes|null) => void
  ): UnaryResponse;
  updateAgentSkills(
    requestMessage: api_v0alpha_p3api_pb.UpdateAgentSkillsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.UpdateAgentSkillsRes|null) => void
  ): UnaryResponse;
  getCurrentAgent(
    requestMessage: api_v0alpha_p3api_pb.GetCurrentAgentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.Agent|null) => void
  ): UnaryResponse;
  getCurrentAgent(
    requestMessage: api_v0alpha_p3api_pb.GetCurrentAgentReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.Agent|null) => void
  ): UnaryResponse;
  getClientInfoData(
    requestMessage: api_v0alpha_p3api_pb.GetClientInfoDataReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetClientInfoDataRes|null) => void
  ): UnaryResponse;
  getClientInfoData(
    requestMessage: api_v0alpha_p3api_pb.GetClientInfoDataReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetClientInfoDataRes|null) => void
  ): UnaryResponse;
  getClientInfoDisplayTemplate(
    requestMessage: api_v0alpha_p3api_pb.GetClientInfoDisplayTemplateReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetClientInfoDisplayTemplateRes|null) => void
  ): UnaryResponse;
  getClientInfoDisplayTemplate(
    requestMessage: api_v0alpha_p3api_pb.GetClientInfoDisplayTemplateReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetClientInfoDisplayTemplateRes|null) => void
  ): UnaryResponse;
  listAgentStatisticsData(
    requestMessage: api_v0alpha_p3api_pb.ListAgentStatisticsDataReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListAgentStatisticsDataRes|null) => void
  ): UnaryResponse;
  listAgentStatisticsData(
    requestMessage: api_v0alpha_p3api_pb.ListAgentStatisticsDataReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListAgentStatisticsDataRes|null) => void
  ): UnaryResponse;
  listPBXExtensions(
    requestMessage: api_v0alpha_p3api_pb.ListPBXExtensionsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListPBXExtensionsRes|null) => void
  ): UnaryResponse;
  listPBXExtensions(
    requestMessage: api_v0alpha_p3api_pb.ListPBXExtensionsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListPBXExtensionsRes|null) => void
  ): UnaryResponse;
  listAgentExtensions(
    requestMessage: api_v0alpha_p3api_pb.ListAgentExtensionsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListAgentExtensionsRes|null) => void
  ): UnaryResponse;
  listAgentExtensions(
    requestMessage: api_v0alpha_p3api_pb.ListAgentExtensionsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListAgentExtensionsRes|null) => void
  ): UnaryResponse;
  listHuntGroupExtensions(
    requestMessage: api_v0alpha_p3api_pb.ListHuntGroupExtensionsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListHuntGroupExtensionsRes|null) => void
  ): UnaryResponse;
  listHuntGroupExtensions(
    requestMessage: api_v0alpha_p3api_pb.ListHuntGroupExtensionsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListHuntGroupExtensionsRes|null) => void
  ): UnaryResponse;
  createExtension(
    requestMessage: api_v0alpha_p3api_pb.CreateExtensionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.CreateExtensionRes|null) => void
  ): UnaryResponse;
  createExtension(
    requestMessage: api_v0alpha_p3api_pb.CreateExtensionReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.CreateExtensionRes|null) => void
  ): UnaryResponse;
  deleteExtension(
    requestMessage: api_v0alpha_p3api_pb.DeleteExtensionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.DeleteExtensionRes|null) => void
  ): UnaryResponse;
  deleteExtension(
    requestMessage: api_v0alpha_p3api_pb.DeleteExtensionReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.DeleteExtensionRes|null) => void
  ): UnaryResponse;
  updateExtension(
    requestMessage: api_v0alpha_p3api_pb.UpdateExtensionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.UpdateExtensionRes|null) => void
  ): UnaryResponse;
  updateExtension(
    requestMessage: api_v0alpha_p3api_pb.UpdateExtensionReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.UpdateExtensionRes|null) => void
  ): UnaryResponse;
  updatePBXExtension(
    requestMessage: api_v0alpha_p3api_pb.UpdatePBXExtensionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.UpdatePBXExtensionRes|null) => void
  ): UnaryResponse;
  updatePBXExtension(
    requestMessage: api_v0alpha_p3api_pb.UpdatePBXExtensionReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.UpdatePBXExtensionRes|null) => void
  ): UnaryResponse;
  createDNCLNumbers(
    requestMessage: api_v0alpha_p3api_pb.CreateDNCLNumbersReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.CreateDNCLNumbersRes|null) => void
  ): UnaryResponse;
  createDNCLNumbers(
    requestMessage: api_v0alpha_p3api_pb.CreateDNCLNumbersReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.CreateDNCLNumbersRes|null) => void
  ): UnaryResponse;
  getScriptOrResponses(
    requestMessage: api_v0alpha_p3api_pb.GetScriptOrResponsesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetScriptOrResponsesRes|null) => void
  ): UnaryResponse;
  getScriptOrResponses(
    requestMessage: api_v0alpha_p3api_pb.GetScriptOrResponsesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetScriptOrResponsesRes|null) => void
  ): UnaryResponse;
  getHuntGroupAgentSettings(
    requestMessage: api_v0alpha_p3api_pb.GetHuntGroupAgentSettingsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.HuntGroupAgentSettings|null) => void
  ): UnaryResponse;
  getHuntGroupAgentSettings(
    requestMessage: api_v0alpha_p3api_pb.GetHuntGroupAgentSettingsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.HuntGroupAgentSettings|null) => void
  ): UnaryResponse;
  listHuntGroupWebLinks(
    requestMessage: api_v0alpha_p3api_pb.ListHuntGroupWebLinksReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListHuntGroupWebLinksRes|null) => void
  ): UnaryResponse;
  listHuntGroupWebLinks(
    requestMessage: api_v0alpha_p3api_pb.ListHuntGroupWebLinksReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListHuntGroupWebLinksRes|null) => void
  ): UnaryResponse;
  getHuntGroupPauseCodes(
    requestMessage: api_v0alpha_p3api_pb.GetHuntGroupPauseCodesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetHuntGroupPauseCodesRes|null) => void
  ): UnaryResponse;
  getHuntGroupPauseCodes(
    requestMessage: api_v0alpha_p3api_pb.GetHuntGroupPauseCodesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetHuntGroupPauseCodesRes|null) => void
  ): UnaryResponse;
  listAgentCallHistory(
    requestMessage: api_v0alpha_p3api_pb.ListAgentCallHistoryReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListAgentCallHistoryRes|null) => void
  ): UnaryResponse;
  listAgentCallHistory(
    requestMessage: api_v0alpha_p3api_pb.ListAgentCallHistoryReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListAgentCallHistoryRes|null) => void
  ): UnaryResponse;
  listClientPhoneBookEntries(
    requestMessage: api_v0alpha_p3api_pb.ListClientPhoneBookEntriesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListClientPhoneBookEntriesRes|null) => void
  ): UnaryResponse;
  listClientPhoneBookEntries(
    requestMessage: api_v0alpha_p3api_pb.ListClientPhoneBookEntriesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListClientPhoneBookEntriesRes|null) => void
  ): UnaryResponse;
  listHuntGroupPhoneBookEntries(
    requestMessage: api_v0alpha_p3api_pb.ListHuntGroupPhoneBookEntriesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListHuntGroupPhoneBookEntriesRes|null) => void
  ): UnaryResponse;
  listHuntGroupPhoneBookEntries(
    requestMessage: api_v0alpha_p3api_pb.ListHuntGroupPhoneBookEntriesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListHuntGroupPhoneBookEntriesRes|null) => void
  ): UnaryResponse;
  createPhoneBookEntry(
    requestMessage: api_v0alpha_p3api_pb.CreatePhoneBookEntryReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.CreatePhoneBookEntryRes|null) => void
  ): UnaryResponse;
  createPhoneBookEntry(
    requestMessage: api_v0alpha_p3api_pb.CreatePhoneBookEntryReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.CreatePhoneBookEntryRes|null) => void
  ): UnaryResponse;
  updatePhoneBookEntry(
    requestMessage: api_v0alpha_p3api_pb.UpdatePhoneBookEntryReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.UpdatePhoneBookEntryRes|null) => void
  ): UnaryResponse;
  updatePhoneBookEntry(
    requestMessage: api_v0alpha_p3api_pb.UpdatePhoneBookEntryReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.UpdatePhoneBookEntryRes|null) => void
  ): UnaryResponse;
  deletePhoneBookEntry(
    requestMessage: api_v0alpha_p3api_pb.DeletePhoneBookEntryReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.DeletePhoneBookEntryRes|null) => void
  ): UnaryResponse;
  deletePhoneBookEntry(
    requestMessage: api_v0alpha_p3api_pb.DeletePhoneBookEntryReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.DeletePhoneBookEntryRes|null) => void
  ): UnaryResponse;
  listPhoneBooks(
    requestMessage: api_v0alpha_p3api_pb.ListPhoneBooksReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListPhoneBooksRes|null) => void
  ): UnaryResponse;
  listPhoneBooks(
    requestMessage: api_v0alpha_p3api_pb.ListPhoneBooksReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListPhoneBooksRes|null) => void
  ): UnaryResponse;
  listAgentTriggers(
    requestMessage: api_v0alpha_p3api_pb.ListAgentTriggersReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListAgentTriggersRes|null) => void
  ): UnaryResponse;
  listAgentTriggers(
    requestMessage: api_v0alpha_p3api_pb.ListAgentTriggersReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListAgentTriggersRes|null) => void
  ): UnaryResponse;
  getCampaignCompletionStatus(
    requestMessage: api_v0alpha_p3api_pb.GetCampaignCompletionStatusReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetCampaignCompletionStatusRes|null) => void
  ): UnaryResponse;
  getCampaignCompletionStatus(
    requestMessage: api_v0alpha_p3api_pb.GetCampaignCompletionStatusReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetCampaignCompletionStatusRes|null) => void
  ): UnaryResponse;
  getLostPeerInfo(
    requestMessage: api_v0alpha_p3api_pb.GetLostPeerInfoReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetLostPeerInfoRes|null) => void
  ): UnaryResponse;
  getLostPeerInfo(
    requestMessage: api_v0alpha_p3api_pb.GetLostPeerInfoReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetLostPeerInfoRes|null) => void
  ): UnaryResponse;
  getDispositionKeys(
    requestMessage: api_v0alpha_p3api_pb.GetDispositionKeysReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetDispositionKeysRes|null) => void
  ): UnaryResponse;
  getDispositionKeys(
    requestMessage: api_v0alpha_p3api_pb.GetDispositionKeysReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetDispositionKeysRes|null) => void
  ): UnaryResponse;
  getReadyAgents(
    requestMessage: api_v0alpha_p3api_pb.GetReadyAgentsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetReadyAgentsRes|null) => void
  ): UnaryResponse;
  getReadyAgents(
    requestMessage: api_v0alpha_p3api_pb.GetReadyAgentsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetReadyAgentsRes|null) => void
  ): UnaryResponse;
  listAgentQueueAndOnHoldCallData(
    requestMessage: api_v0alpha_p3api_pb.ListAgentQueueAndOnHoldCallDataReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListAgentQueueAndOnHoldCallDataRes|null) => void
  ): UnaryResponse;
  listAgentQueueAndOnHoldCallData(
    requestMessage: api_v0alpha_p3api_pb.ListAgentQueueAndOnHoldCallDataReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListAgentQueueAndOnHoldCallDataRes|null) => void
  ): UnaryResponse;
  saveAgentCallResponses(
    requestMessage: api_v0alpha_p3api_pb.SaveAgentCallResponsesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.SaveAgentCallResponsesRes|null) => void
  ): UnaryResponse;
  saveAgentCallResponses(
    requestMessage: api_v0alpha_p3api_pb.SaveAgentCallResponsesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.SaveAgentCallResponsesRes|null) => void
  ): UnaryResponse;
  listAgentTransferOptions(
    requestMessage: api_v0alpha_p3api_pb.ListAgentTransferOptionsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListAgentTransferOptionsRes|null) => void
  ): UnaryResponse;
  listAgentTransferOptions(
    requestMessage: api_v0alpha_p3api_pb.ListAgentTransferOptionsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListAgentTransferOptionsRes|null) => void
  ): UnaryResponse;
  updateAgentCallResponseValue(
    requestMessage: api_v0alpha_p3api_pb.UpdateAgentCallResponseValueReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.UpdateAgentCallResponseValueRes|null) => void
  ): UnaryResponse;
  updateAgentCallResponseValue(
    requestMessage: api_v0alpha_p3api_pb.UpdateAgentCallResponseValueReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.UpdateAgentCallResponseValueRes|null) => void
  ): UnaryResponse;
  getIntercomPeerInfo(
    requestMessage: api_v0alpha_p3api_pb.GetIntercomPeerInfoReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetIntercomPeerInfoRes|null) => void
  ): UnaryResponse;
  getIntercomPeerInfo(
    requestMessage: api_v0alpha_p3api_pb.GetIntercomPeerInfoReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetIntercomPeerInfoRes|null) => void
  ): UnaryResponse;
  listOrgResponseEvaluators(
    requestMessage: api_v0alpha_p3api_pb.ListOrgResponseEvaluatorsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListOrgResponseEvaluatorsRes|null) => void
  ): UnaryResponse;
  listOrgResponseEvaluators(
    requestMessage: api_v0alpha_p3api_pb.ListOrgResponseEvaluatorsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListOrgResponseEvaluatorsRes|null) => void
  ): UnaryResponse;
  getQueueConfigurationOptionsArray(
    requestMessage: api_v0alpha_p3api_pb.GetQueueConfigurationOptionsArrayReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetQueueConfigurationOptionsArrayRes|null) => void
  ): UnaryResponse;
  getQueueConfigurationOptionsArray(
    requestMessage: api_v0alpha_p3api_pb.GetQueueConfigurationOptionsArrayReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetQueueConfigurationOptionsArrayRes|null) => void
  ): UnaryResponse;
  getConditionalDNCLRules(
    requestMessage: api_v0alpha_p3api_pb.GetConditionalDNCLRulesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetConditionalDNCLRulesRes|null) => void
  ): UnaryResponse;
  getConditionalDNCLRules(
    requestMessage: api_v0alpha_p3api_pb.GetConditionalDNCLRulesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetConditionalDNCLRulesRes|null) => void
  ): UnaryResponse;
  manualDialStart(
    requestMessage: api_v0alpha_p3api_pb.ManualDialStartReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ManualDialStartRes|null) => void
  ): UnaryResponse;
  manualDialStart(
    requestMessage: api_v0alpha_p3api_pb.ManualDialStartReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ManualDialStartRes|null) => void
  ): UnaryResponse;
  listExtendedCallHistory(requestMessage: api_v0alpha_p3api_pb.ListExtendedCallHistoryReq, metadata?: grpc.Metadata): ResponseStream<api_v0alpha_p3api_pb.ListExtendedCallHistoryRes>;
  listWhiteListPhoneBooks(
    requestMessage: api_v0alpha_p3api_pb.ListWhiteListPhoneBooksReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListWhiteListPhoneBooksRes|null) => void
  ): UnaryResponse;
  listWhiteListPhoneBooks(
    requestMessage: api_v0alpha_p3api_pb.ListWhiteListPhoneBooksReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListWhiteListPhoneBooksRes|null) => void
  ): UnaryResponse;
  downloadCallRecording(
    requestMessage: api_v0alpha_p3api_pb.DownloadCallRecordingReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.DownloadRecordingRes|null) => void
  ): UnaryResponse;
  downloadCallRecording(
    requestMessage: api_v0alpha_p3api_pb.DownloadCallRecordingReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.DownloadRecordingRes|null) => void
  ): UnaryResponse;
  downloadCallRecordings(
    requestMessage: api_v0alpha_p3api_pb.DownloadCallRecordingsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.DownloadRecordingRes|null) => void
  ): UnaryResponse;
  downloadCallRecordings(
    requestMessage: api_v0alpha_p3api_pb.DownloadCallRecordingsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.DownloadRecordingRes|null) => void
  ): UnaryResponse;
  placePreviewDialCall(
    requestMessage: api_v0alpha_p3api_pb.PlacePreviewDialCallReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.PlacePreviewDialCallRes|null) => void
  ): UnaryResponse;
  placePreviewDialCall(
    requestMessage: api_v0alpha_p3api_pb.PlacePreviewDialCallReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.PlacePreviewDialCallRes|null) => void
  ): UnaryResponse;
  cancelPreviewDialCall(
    requestMessage: api_v0alpha_p3api_pb.CancelPreviewDialCallReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.CancelPreviewDialCallRes|null) => void
  ): UnaryResponse;
  cancelPreviewDialCall(
    requestMessage: api_v0alpha_p3api_pb.CancelPreviewDialCallReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.CancelPreviewDialCallRes|null) => void
  ): UnaryResponse;
  updateTaskStatus(
    requestMessage: api_v0alpha_p3api_pb.UpdateTaskStatusReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.Nil|null) => void
  ): UnaryResponse;
  updateTaskStatus(
    requestMessage: api_v0alpha_p3api_pb.UpdateTaskStatusReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.Nil|null) => void
  ): UnaryResponse;
  listCallbackRoutingAgents(
    requestMessage: api_v0alpha_p3api_pb.ListCallbackRoutingAgentsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListCallbackRoutingAgentsRes|null) => void
  ): UnaryResponse;
  listCallbackRoutingAgents(
    requestMessage: api_v0alpha_p3api_pb.ListCallbackRoutingAgentsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListCallbackRoutingAgentsRes|null) => void
  ): UnaryResponse;
  listCallbackRoutingSkills(
    requestMessage: api_v0alpha_p3api_pb.ListCallbackRoutingSkillsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListCallbackRoutingSkillsRes|null) => void
  ): UnaryResponse;
  listCallbackRoutingSkills(
    requestMessage: api_v0alpha_p3api_pb.ListCallbackRoutingSkillsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListCallbackRoutingSkillsRes|null) => void
  ): UnaryResponse;
  handleRecordingDelay(
    requestMessage: api_v0alpha_p3api_pb.HandleRecordingDelayReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.HandleRecordingDelayRes|null) => void
  ): UnaryResponse;
  handleRecordingDelay(
    requestMessage: api_v0alpha_p3api_pb.HandleRecordingDelayReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.HandleRecordingDelayRes|null) => void
  ): UnaryResponse;
  updateAgentAssignedHuntGroup(
    requestMessage: api_v0alpha_p3api_pb.UpdateAgentAssignedHuntGroupReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.UpdateAgentAssignedHuntGroupRes|null) => void
  ): UnaryResponse;
  updateAgentAssignedHuntGroup(
    requestMessage: api_v0alpha_p3api_pb.UpdateAgentAssignedHuntGroupReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.UpdateAgentAssignedHuntGroupRes|null) => void
  ): UnaryResponse;
  getCallData(
    requestMessage: api_v0alpha_p3api_pb.GetCallDataReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetCallDataRes|null) => void
  ): UnaryResponse;
  getCallData(
    requestMessage: api_v0alpha_p3api_pb.GetCallDataReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetCallDataRes|null) => void
  ): UnaryResponse;
  listHuntGroups(
    requestMessage: api_v0alpha_p3api_pb.ListHuntGroupsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListHuntGroupsRes|null) => void
  ): UnaryResponse;
  listHuntGroups(
    requestMessage: api_v0alpha_p3api_pb.ListHuntGroupsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListHuntGroupsRes|null) => void
  ): UnaryResponse;
  listReassignmentHuntGroups(
    requestMessage: api_v0alpha_p3api_pb.ListReassignmentHuntGroupsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListReassignmentHuntGroupsRes|null) => void
  ): UnaryResponse;
  listReassignmentHuntGroups(
    requestMessage: api_v0alpha_p3api_pb.ListReassignmentHuntGroupsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListReassignmentHuntGroupsRes|null) => void
  ): UnaryResponse;
  getOrgAgentSettings(
    requestMessage: api_v0alpha_p3api_pb.GetOrgAgentSettingsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetOrgAgentSettingsRes|null) => void
  ): UnaryResponse;
  getOrgAgentSettings(
    requestMessage: api_v0alpha_p3api_pb.GetOrgAgentSettingsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetOrgAgentSettingsRes|null) => void
  ): UnaryResponse;
  listCallerIdsFromBucket(
    requestMessage: api_v0alpha_p3api_pb.ListCallerIdsFromBucketReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListCallerIdsFromBucketRes|null) => void
  ): UnaryResponse;
  listCallerIdsFromBucket(
    requestMessage: api_v0alpha_p3api_pb.ListCallerIdsFromBucketReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListCallerIdsFromBucketRes|null) => void
  ): UnaryResponse;
  saveLastCallResponse(
    requestMessage: api_v0alpha_p3api_pb.SaveLastCallResponseReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.SaveLastCallResponseRes|null) => void
  ): UnaryResponse;
  saveLastCallResponse(
    requestMessage: api_v0alpha_p3api_pb.SaveLastCallResponseReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.SaveLastCallResponseRes|null) => void
  ): UnaryResponse;
  listAgentCallLogsByCallSidAndType(
    requestMessage: api_v0alpha_p3api_pb.ListAgentCallLogsByCallSidAndTypeReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListAgentCallLogsByCallSidAndTypeRes|null) => void
  ): UnaryResponse;
  listAgentCallLogsByCallSidAndType(
    requestMessage: api_v0alpha_p3api_pb.ListAgentCallLogsByCallSidAndTypeReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListAgentCallLogsByCallSidAndTypeRes|null) => void
  ): UnaryResponse;
  listAgentCallResponseValues(
    requestMessage: api_v0alpha_p3api_pb.ListAgentCallResponseValuesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListAgentCallResponseValuesRes|null) => void
  ): UnaryResponse;
  listAgentCallResponseValues(
    requestMessage: api_v0alpha_p3api_pb.ListAgentCallResponseValuesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListAgentCallResponseValuesRes|null) => void
  ): UnaryResponse;
  getContactSchemaByContactGroup(
    requestMessage: api_v0alpha_p3api_pb.GetContactSchemaByContactGroupReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ContactSchema|null) => void
  ): UnaryResponse;
  getContactSchemaByContactGroup(
    requestMessage: api_v0alpha_p3api_pb.GetContactSchemaByContactGroupReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ContactSchema|null) => void
  ): UnaryResponse;
  listContactGroupDetailsByClientSid(
    requestMessage: api_v0alpha_p3api_pb.ListContactGroupDetailsByClientSidReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListContactGroupDetailsByClientSidRes|null) => void
  ): UnaryResponse;
  listContactGroupDetailsByClientSid(
    requestMessage: api_v0alpha_p3api_pb.ListContactGroupDetailsByClientSidReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListContactGroupDetailsByClientSidRes|null) => void
  ): UnaryResponse;
  getContactGroupDetails(
    requestMessage: api_v0alpha_p3api_pb.GetContactGroupReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ContactGroup|null) => void
  ): UnaryResponse;
  getContactGroupDetails(
    requestMessage: api_v0alpha_p3api_pb.GetContactGroupReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ContactGroup|null) => void
  ): UnaryResponse;
  getContactGroupSize(
    requestMessage: api_v0alpha_p3api_pb.GetContactGroupReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetContactGroupSizeRes|null) => void
  ): UnaryResponse;
  getContactGroupSize(
    requestMessage: api_v0alpha_p3api_pb.GetContactGroupReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetContactGroupSizeRes|null) => void
  ): UnaryResponse;
  createContactFieldDescription(
    requestMessage: api_v0alpha_p3api_pb.CreateContactFieldDescriptionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.CreateContactFieldDescriptionRes|null) => void
  ): UnaryResponse;
  createContactFieldDescription(
    requestMessage: api_v0alpha_p3api_pb.CreateContactFieldDescriptionReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.CreateContactFieldDescriptionRes|null) => void
  ): UnaryResponse;
  updateContactFieldDescription(
    requestMessage: api_v0alpha_p3api_pb.UpdateContactFieldDescriptionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.UpdateContactFieldDescriptionRes|null) => void
  ): UnaryResponse;
  updateContactFieldDescription(
    requestMessage: api_v0alpha_p3api_pb.UpdateContactFieldDescriptionReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.UpdateContactFieldDescriptionRes|null) => void
  ): UnaryResponse;
  deleteContactFieldDescription(
    requestMessage: api_v0alpha_p3api_pb.DeleteContactFieldDescriptionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.DeleteContactFieldDescriptionRes|null) => void
  ): UnaryResponse;
  deleteContactFieldDescription(
    requestMessage: api_v0alpha_p3api_pb.DeleteContactFieldDescriptionReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.DeleteContactFieldDescriptionRes|null) => void
  ): UnaryResponse;
  listContactFieldDescriptions(
    requestMessage: api_v0alpha_p3api_pb.ListContactFieldDescriptionsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListContactFieldDescriptionsRes|null) => void
  ): UnaryResponse;
  listContactFieldDescriptions(
    requestMessage: api_v0alpha_p3api_pb.ListContactFieldDescriptionsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListContactFieldDescriptionsRes|null) => void
  ): UnaryResponse;
  listContactFieldDescriptionsByCGSid(
    requestMessage: api_v0alpha_p3api_pb.ListContactFieldDescriptionsByCGSidReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListContactFieldDescriptionsByCGSidRes|null) => void
  ): UnaryResponse;
  listContactFieldDescriptionsByCGSid(
    requestMessage: api_v0alpha_p3api_pb.ListContactFieldDescriptionsByCGSidReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListContactFieldDescriptionsByCGSidRes|null) => void
  ): UnaryResponse;
  listContactImportTemplates(
    requestMessage: api_v0alpha_p3api_pb.ListContactImportTemplatesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListContactImportTemplatesRes|null) => void
  ): UnaryResponse;
  listContactImportTemplates(
    requestMessage: api_v0alpha_p3api_pb.ListContactImportTemplatesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListContactImportTemplatesRes|null) => void
  ): UnaryResponse;
  updatePreviewRecordToFinished(
    requestMessage: api_v0alpha_p3api_pb.UpdatePreviewRecordToFinishedReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.UpdatePreviewRecordToFinishedRes|null) => void
  ): UnaryResponse;
  updatePreviewRecordToFinished(
    requestMessage: api_v0alpha_p3api_pb.UpdatePreviewRecordToFinishedReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.UpdatePreviewRecordToFinishedRes|null) => void
  ): UnaryResponse;
  updateAgentHuntGroup(
    requestMessage: api_v0alpha_p3api_pb.UpdateAgentHuntGroupReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.UpdateAgentHuntGroupRes|null) => void
  ): UnaryResponse;
  updateAgentHuntGroup(
    requestMessage: api_v0alpha_p3api_pb.UpdateAgentHuntGroupReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.UpdateAgentHuntGroupRes|null) => void
  ): UnaryResponse;
  multiAgentHuntGroupAssignment(
    requestMessage: api_v0alpha_p3api_pb.MultiAgentHuntGroupAssignmentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.MultiAgentHuntGroupAssignmentRes|null) => void
  ): UnaryResponse;
  multiAgentHuntGroupAssignment(
    requestMessage: api_v0alpha_p3api_pb.MultiAgentHuntGroupAssignmentReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.MultiAgentHuntGroupAssignmentRes|null) => void
  ): UnaryResponse;
  getAgentProfile(
    requestMessage: api_v0alpha_p3api_pb.GetAgentProfileReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.AgentProfile|null) => void
  ): UnaryResponse;
  getAgentProfile(
    requestMessage: api_v0alpha_p3api_pb.GetAgentProfileReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.AgentProfile|null) => void
  ): UnaryResponse;
  recalculateBilling(
    requestMessage: api_v0alpha_p3api_pb.RecalculateBillingReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.RecalculateBillingRes|null) => void
  ): UnaryResponse;
  recalculateBilling(
    requestMessage: api_v0alpha_p3api_pb.RecalculateBillingReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.RecalculateBillingRes|null) => void
  ): UnaryResponse;
  listOutboundBroadcastTemplateData(
    requestMessage: api_v0alpha_p3api_pb.ListOutboundBroadcastTemplateDataReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListOutboundBroadcastTemplateDataRes|null) => void
  ): UnaryResponse;
  listOutboundBroadcastTemplateData(
    requestMessage: api_v0alpha_p3api_pb.ListOutboundBroadcastTemplateDataReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListOutboundBroadcastTemplateDataRes|null) => void
  ): UnaryResponse;
  multiAgentSkillAssignment(
    requestMessage: api_v0alpha_p3api_pb.MultiAgentSkillAssignmentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.MultiAgentSkillAssignmentRes|null) => void
  ): UnaryResponse;
  multiAgentSkillAssignment(
    requestMessage: api_v0alpha_p3api_pb.MultiAgentSkillAssignmentReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.MultiAgentSkillAssignmentRes|null) => void
  ): UnaryResponse;
  multiAgentSkillUnassignment(
    requestMessage: api_v0alpha_p3api_pb.MultiAgentSkillUnassignmentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.MultiAgentSkillUnassignmentRes|null) => void
  ): UnaryResponse;
  multiAgentSkillUnassignment(
    requestMessage: api_v0alpha_p3api_pb.MultiAgentSkillUnassignmentReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.MultiAgentSkillUnassignmentRes|null) => void
  ): UnaryResponse;
  listMAMAgentHuntGroupsByClientSid(
    requestMessage: api_v0alpha_p3api_pb.ListMAMAgentHuntGroupsByClientSidReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListMAMAgentHuntGroupsByClientSidRes|null) => void
  ): UnaryResponse;
  listMAMAgentHuntGroupsByClientSid(
    requestMessage: api_v0alpha_p3api_pb.ListMAMAgentHuntGroupsByClientSidReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListMAMAgentHuntGroupsByClientSidRes|null) => void
  ): UnaryResponse;
  listTtsVoices(
    requestMessage: api_v0alpha_p3api_pb.ListTtsVoicesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListTtsVoicesRes|null) => void
  ): UnaryResponse;
  listTtsVoices(
    requestMessage: api_v0alpha_p3api_pb.ListTtsVoicesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListTtsVoicesRes|null) => void
  ): UnaryResponse;
  createTtsVoice(
    requestMessage: api_v0alpha_p3api_pb.CreateTtsVoiceReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.CreateTtsVoiceRes|null) => void
  ): UnaryResponse;
  createTtsVoice(
    requestMessage: api_v0alpha_p3api_pb.CreateTtsVoiceReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.CreateTtsVoiceRes|null) => void
  ): UnaryResponse;
  deleteTtsVoice(
    requestMessage: api_v0alpha_p3api_pb.DeleteTtsVoiceReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.DeleteTtsVoiceRes|null) => void
  ): UnaryResponse;
  deleteTtsVoice(
    requestMessage: api_v0alpha_p3api_pb.DeleteTtsVoiceReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.DeleteTtsVoiceRes|null) => void
  ): UnaryResponse;
  listCustomDataKeys(
    requestMessage: api_v0alpha_p3api_pb.ListCustomDataKeysReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListCustomDataKeysRes|null) => void
  ): UnaryResponse;
  listCustomDataKeys(
    requestMessage: api_v0alpha_p3api_pb.ListCustomDataKeysReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListCustomDataKeysRes|null) => void
  ): UnaryResponse;
  createCustomDataKey(
    requestMessage: api_v0alpha_p3api_pb.CreateCustomDataKeyReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.CreateCustomDataKeyRes|null) => void
  ): UnaryResponse;
  createCustomDataKey(
    requestMessage: api_v0alpha_p3api_pb.CreateCustomDataKeyReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.CreateCustomDataKeyRes|null) => void
  ): UnaryResponse;
  deleteCustomDataKey(
    requestMessage: api_v0alpha_p3api_pb.DeleteCustomDataKeyReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.DeleteCustomDataKeyRes|null) => void
  ): UnaryResponse;
  deleteCustomDataKey(
    requestMessage: api_v0alpha_p3api_pb.DeleteCustomDataKeyReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.DeleteCustomDataKeyRes|null) => void
  ): UnaryResponse;
  updateCustomDataKey(
    requestMessage: api_v0alpha_p3api_pb.UpdateCustomDataKeyReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.UpdateCustomDataKeyRes|null) => void
  ): UnaryResponse;
  updateCustomDataKey(
    requestMessage: api_v0alpha_p3api_pb.UpdateCustomDataKeyReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.UpdateCustomDataKeyRes|null) => void
  ): UnaryResponse;
  getActivityLogHistory(requestMessage: api_v0alpha_p3api_pb.GetActivityLogHistoryReq, metadata?: grpc.Metadata): ResponseStream<api_v0alpha_p3api_pb.GetActivityLogHistoryRes>;
  listTableTemplateProperties(
    requestMessage: api_v0alpha_p3api_pb.ListTableTemplatePropertiesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListTableTemplatePropertiesRes|null) => void
  ): UnaryResponse;
  listTableTemplateProperties(
    requestMessage: api_v0alpha_p3api_pb.ListTableTemplatePropertiesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListTableTemplatePropertiesRes|null) => void
  ): UnaryResponse;
  listAgentSkillsFilters(
    requestMessage: api_v0alpha_p3api_pb.ListAgentSkillsFiltersReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListAgentSkillsFiltersRes|null) => void
  ): UnaryResponse;
  listAgentSkillsFilters(
    requestMessage: api_v0alpha_p3api_pb.ListAgentSkillsFiltersReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListAgentSkillsFiltersRes|null) => void
  ): UnaryResponse;
  listScheduleRules(
    requestMessage: api_v0alpha_p3api_pb.ListScheduleRulesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListScheduleRulesResult|null) => void
  ): UnaryResponse;
  listScheduleRules(
    requestMessage: api_v0alpha_p3api_pb.ListScheduleRulesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListScheduleRulesResult|null) => void
  ): UnaryResponse;
  listCustomReportFilters(
    requestMessage: api_v0alpha_p3api_pb.ListCustomReportFiltersReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListCustomReportFiltersRes|null) => void
  ): UnaryResponse;
  listCustomReportFilters(
    requestMessage: api_v0alpha_p3api_pb.ListCustomReportFiltersReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListCustomReportFiltersRes|null) => void
  ): UnaryResponse;
  listSmsNumbers(
    requestMessage: api_v0alpha_p3api_pb.ListSmsNumbersReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListSmsNumbersRes|null) => void
  ): UnaryResponse;
  listSmsNumbers(
    requestMessage: api_v0alpha_p3api_pb.ListSmsNumbersReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListSmsNumbersRes|null) => void
  ): UnaryResponse;
  getMailMerge(
    requestMessage: api_v0alpha_p3api_pb.GetMailMergeReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetMailMergeRes|null) => void
  ): UnaryResponse;
  getMailMerge(
    requestMessage: api_v0alpha_p3api_pb.GetMailMergeReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.GetMailMergeRes|null) => void
  ): UnaryResponse;
  listDistinctPauseCodes(
    requestMessage: api_v0alpha_p3api_pb.ListDistinctPauseCodesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListDistinctPauseCodesResponse|null) => void
  ): UnaryResponse;
  listDistinctPauseCodes(
    requestMessage: api_v0alpha_p3api_pb.ListDistinctPauseCodesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_p3api_pb.ListDistinctPauseCodesResponse|null) => void
  ): UnaryResponse;
}

