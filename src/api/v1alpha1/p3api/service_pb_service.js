// package: api.v1alpha1.p3api
// file: api/v1alpha1/p3api/service.proto

var api_v1alpha1_p3api_service_pb = require("../../../api/v1alpha1/p3api/service_pb");
var api_v0alpha_p3api_pb = require("../../../api/v0alpha/p3api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var P3Api = (function () {
  function P3Api() {}
  P3Api.serviceName = "api.v1alpha1.p3api.P3Api";
  return P3Api;
}());

P3Api.GetAgentHuntGroup = {
  methodName: "GetAgentHuntGroup",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.GetAgentHuntGroupReq,
  responseType: api_v0alpha_p3api_pb.HuntGroup
};

P3Api.GetAgentSession = {
  methodName: "GetAgentSession",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.GetAgentSessionReq,
  responseType: api_v0alpha_p3api_pb.AgentSession
};

P3Api.GetAgentSkills = {
  methodName: "GetAgentSkills",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.GetAgentSkillsReq,
  responseType: api_v0alpha_p3api_pb.GetAgentSkillsRes
};

P3Api.CreateAgentSkill = {
  methodName: "CreateAgentSkill",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.CreateAgentSkillReq,
  responseType: api_v0alpha_p3api_pb.CreateAgentSkillRes
};

P3Api.UpdateAgentSkill = {
  methodName: "UpdateAgentSkill",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.UpdateAgentSkillReq,
  responseType: api_v0alpha_p3api_pb.UpdateAgentSkillRes
};

P3Api.DeleteAgentSkill = {
  methodName: "DeleteAgentSkill",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.DeleteAgentSkillReq,
  responseType: api_v0alpha_p3api_pb.DeleteAgentSkillRes
};

P3Api.ListSkillsForCurrentAgent = {
  methodName: "ListSkillsForCurrentAgent",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListSkillsForCurrentAgentReq,
  responseType: api_v0alpha_p3api_pb.ListSkillsForCurrentAgentRes
};

P3Api.ListSkills = {
  methodName: "ListSkills",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListSkillsReq,
  responseType: api_v0alpha_p3api_pb.ListSkillsRes
};

P3Api.UpdateAgentSkills = {
  methodName: "UpdateAgentSkills",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.UpdateAgentSkillsReq,
  responseType: api_v0alpha_p3api_pb.UpdateAgentSkillsRes
};

P3Api.GetCurrentAgent = {
  methodName: "GetCurrentAgent",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.GetCurrentAgentReq,
  responseType: api_v0alpha_p3api_pb.Agent
};

P3Api.GetClientInfoData = {
  methodName: "GetClientInfoData",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.GetClientInfoDataReq,
  responseType: api_v0alpha_p3api_pb.GetClientInfoDataRes
};

P3Api.GetClientInfoDisplayTemplate = {
  methodName: "GetClientInfoDisplayTemplate",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.GetClientInfoDisplayTemplateReq,
  responseType: api_v0alpha_p3api_pb.GetClientInfoDisplayTemplateRes
};

P3Api.ListAgentStatisticsData = {
  methodName: "ListAgentStatisticsData",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListAgentStatisticsDataReq,
  responseType: api_v0alpha_p3api_pb.ListAgentStatisticsDataRes
};

P3Api.ListPBXExtensions = {
  methodName: "ListPBXExtensions",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListPBXExtensionsReq,
  responseType: api_v0alpha_p3api_pb.ListPBXExtensionsRes
};

P3Api.ListAgentExtensions = {
  methodName: "ListAgentExtensions",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListAgentExtensionsReq,
  responseType: api_v0alpha_p3api_pb.ListAgentExtensionsRes
};

P3Api.ListHuntGroupExtensions = {
  methodName: "ListHuntGroupExtensions",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListHuntGroupExtensionsReq,
  responseType: api_v0alpha_p3api_pb.ListHuntGroupExtensionsRes
};

P3Api.CreateExtension = {
  methodName: "CreateExtension",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.CreateExtensionReq,
  responseType: api_v0alpha_p3api_pb.CreateExtensionRes
};

P3Api.DeleteExtension = {
  methodName: "DeleteExtension",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.DeleteExtensionReq,
  responseType: api_v0alpha_p3api_pb.DeleteExtensionRes
};

P3Api.UpdateExtension = {
  methodName: "UpdateExtension",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.UpdateExtensionReq,
  responseType: api_v0alpha_p3api_pb.UpdateExtensionRes
};

P3Api.UpdatePBXExtension = {
  methodName: "UpdatePBXExtension",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.UpdatePBXExtensionReq,
  responseType: api_v0alpha_p3api_pb.UpdatePBXExtensionRes
};

P3Api.CreateDNCLNumbers = {
  methodName: "CreateDNCLNumbers",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.CreateDNCLNumbersReq,
  responseType: api_v0alpha_p3api_pb.CreateDNCLNumbersRes
};

P3Api.GetScriptOrResponses = {
  methodName: "GetScriptOrResponses",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.GetScriptOrResponsesReq,
  responseType: api_v0alpha_p3api_pb.GetScriptOrResponsesRes
};

P3Api.GetHuntGroupAgentSettings = {
  methodName: "GetHuntGroupAgentSettings",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.GetHuntGroupAgentSettingsReq,
  responseType: api_v0alpha_p3api_pb.HuntGroupAgentSettings
};

P3Api.ListHuntGroupWebLinks = {
  methodName: "ListHuntGroupWebLinks",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListHuntGroupWebLinksReq,
  responseType: api_v0alpha_p3api_pb.ListHuntGroupWebLinksRes
};

P3Api.GetHuntGroupPauseCodes = {
  methodName: "GetHuntGroupPauseCodes",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.GetHuntGroupPauseCodesReq,
  responseType: api_v0alpha_p3api_pb.GetHuntGroupPauseCodesRes
};

P3Api.ListAgentCallHistory = {
  methodName: "ListAgentCallHistory",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListAgentCallHistoryReq,
  responseType: api_v0alpha_p3api_pb.ListAgentCallHistoryRes
};

P3Api.ListClientPhoneBookEntries = {
  methodName: "ListClientPhoneBookEntries",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListClientPhoneBookEntriesReq,
  responseType: api_v0alpha_p3api_pb.ListClientPhoneBookEntriesRes
};

P3Api.ListHuntGroupPhoneBookEntries = {
  methodName: "ListHuntGroupPhoneBookEntries",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListHuntGroupPhoneBookEntriesReq,
  responseType: api_v0alpha_p3api_pb.ListHuntGroupPhoneBookEntriesRes
};

P3Api.CreatePhoneBookEntry = {
  methodName: "CreatePhoneBookEntry",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.CreatePhoneBookEntryReq,
  responseType: api_v0alpha_p3api_pb.CreatePhoneBookEntryRes
};

P3Api.UpdatePhoneBookEntry = {
  methodName: "UpdatePhoneBookEntry",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.UpdatePhoneBookEntryReq,
  responseType: api_v0alpha_p3api_pb.UpdatePhoneBookEntryRes
};

P3Api.DeletePhoneBookEntry = {
  methodName: "DeletePhoneBookEntry",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.DeletePhoneBookEntryReq,
  responseType: api_v0alpha_p3api_pb.DeletePhoneBookEntryRes
};

P3Api.ListPhoneBooks = {
  methodName: "ListPhoneBooks",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListPhoneBooksReq,
  responseType: api_v0alpha_p3api_pb.ListPhoneBooksRes
};

P3Api.ListAgentTriggers = {
  methodName: "ListAgentTriggers",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListAgentTriggersReq,
  responseType: api_v0alpha_p3api_pb.ListAgentTriggersRes
};

P3Api.GetCampaignCompletionStatus = {
  methodName: "GetCampaignCompletionStatus",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.GetCampaignCompletionStatusReq,
  responseType: api_v0alpha_p3api_pb.GetCampaignCompletionStatusRes
};

P3Api.GetLostPeerInfo = {
  methodName: "GetLostPeerInfo",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.GetLostPeerInfoReq,
  responseType: api_v0alpha_p3api_pb.GetLostPeerInfoRes
};

P3Api.GetDispositionKeys = {
  methodName: "GetDispositionKeys",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.GetDispositionKeysReq,
  responseType: api_v0alpha_p3api_pb.GetDispositionKeysRes
};

P3Api.GetReadyAgents = {
  methodName: "GetReadyAgents",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.GetReadyAgentsReq,
  responseType: api_v0alpha_p3api_pb.GetReadyAgentsRes
};

P3Api.ListAgentQueueAndOnHoldCallData = {
  methodName: "ListAgentQueueAndOnHoldCallData",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListAgentQueueAndOnHoldCallDataReq,
  responseType: api_v0alpha_p3api_pb.ListAgentQueueAndOnHoldCallDataRes
};

P3Api.SaveAgentCallResponses = {
  methodName: "SaveAgentCallResponses",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.SaveAgentCallResponsesReq,
  responseType: api_v0alpha_p3api_pb.SaveAgentCallResponsesRes
};

P3Api.ListAgentTransferOptions = {
  methodName: "ListAgentTransferOptions",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListAgentTransferOptionsReq,
  responseType: api_v0alpha_p3api_pb.ListAgentTransferOptionsRes
};

P3Api.UpdateAgentCallResponseValue = {
  methodName: "UpdateAgentCallResponseValue",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.UpdateAgentCallResponseValueReq,
  responseType: api_v0alpha_p3api_pb.UpdateAgentCallResponseValueRes
};

P3Api.GetIntercomPeerInfo = {
  methodName: "GetIntercomPeerInfo",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.GetIntercomPeerInfoReq,
  responseType: api_v0alpha_p3api_pb.GetIntercomPeerInfoRes
};

P3Api.ListOrgResponseEvaluators = {
  methodName: "ListOrgResponseEvaluators",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListOrgResponseEvaluatorsReq,
  responseType: api_v0alpha_p3api_pb.ListOrgResponseEvaluatorsRes
};

P3Api.GetQueueConfigurationOptionsArray = {
  methodName: "GetQueueConfigurationOptionsArray",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.GetQueueConfigurationOptionsArrayReq,
  responseType: api_v0alpha_p3api_pb.GetQueueConfigurationOptionsArrayRes
};

P3Api.GetConditionalDNCLRules = {
  methodName: "GetConditionalDNCLRules",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.GetConditionalDNCLRulesReq,
  responseType: api_v0alpha_p3api_pb.GetConditionalDNCLRulesRes
};

P3Api.ManualDialStart = {
  methodName: "ManualDialStart",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ManualDialStartReq,
  responseType: api_v0alpha_p3api_pb.ManualDialStartRes
};

P3Api.GetExtendedCallHistories = {
  methodName: "GetExtendedCallHistories",
  service: P3Api,
  requestStream: false,
  responseStream: true,
  requestType: api_v0alpha_p3api_pb.ListExtendedCallHistoryReq,
  responseType: api_v0alpha_p3api_pb.ListExtendedCallHistoryRes
};

P3Api.ListWhiteListPhoneBooks = {
  methodName: "ListWhiteListPhoneBooks",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListWhiteListPhoneBooksReq,
  responseType: api_v0alpha_p3api_pb.ListWhiteListPhoneBooksRes
};

P3Api.DownloadCallRecording = {
  methodName: "DownloadCallRecording",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.DownloadCallRecordingReq,
  responseType: api_v0alpha_p3api_pb.DownloadRecordingRes
};

P3Api.DownloadCallRecordings = {
  methodName: "DownloadCallRecordings",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.DownloadCallRecordingsReq,
  responseType: api_v0alpha_p3api_pb.DownloadRecordingRes
};

P3Api.PlacePreviewDialCall = {
  methodName: "PlacePreviewDialCall",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.PlacePreviewDialCallReq,
  responseType: api_v0alpha_p3api_pb.PlacePreviewDialCallRes
};

P3Api.CancelPreviewDialCall = {
  methodName: "CancelPreviewDialCall",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.CancelPreviewDialCallReq,
  responseType: api_v0alpha_p3api_pb.CancelPreviewDialCallRes
};

P3Api.UpdateTaskStatus = {
  methodName: "UpdateTaskStatus",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.UpdateTaskStatusReq,
  responseType: api_v0alpha_p3api_pb.Nil
};

P3Api.ListCallbackRoutingAgents = {
  methodName: "ListCallbackRoutingAgents",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListCallbackRoutingAgentsReq,
  responseType: api_v0alpha_p3api_pb.ListCallbackRoutingAgentsRes
};

P3Api.ListCallbackRoutingSkills = {
  methodName: "ListCallbackRoutingSkills",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListCallbackRoutingSkillsReq,
  responseType: api_v0alpha_p3api_pb.ListCallbackRoutingSkillsRes
};

P3Api.HandleRecordingDelay = {
  methodName: "HandleRecordingDelay",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.HandleRecordingDelayReq,
  responseType: api_v0alpha_p3api_pb.HandleRecordingDelayRes
};

P3Api.UpdateAgentAssignedHuntGroup = {
  methodName: "UpdateAgentAssignedHuntGroup",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.UpdateAgentAssignedHuntGroupReq,
  responseType: api_v0alpha_p3api_pb.UpdateAgentAssignedHuntGroupRes
};

P3Api.GetCallData = {
  methodName: "GetCallData",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.GetCallDataReq,
  responseType: api_v0alpha_p3api_pb.GetCallDataRes
};

P3Api.ListHuntGroups = {
  methodName: "ListHuntGroups",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListHuntGroupsReq,
  responseType: api_v0alpha_p3api_pb.ListHuntGroupsRes
};

P3Api.ListReassignmentHuntGroups = {
  methodName: "ListReassignmentHuntGroups",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListReassignmentHuntGroupsReq,
  responseType: api_v0alpha_p3api_pb.ListReassignmentHuntGroupsRes
};

P3Api.GetOrgAgentSettings = {
  methodName: "GetOrgAgentSettings",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.GetOrgAgentSettingsReq,
  responseType: api_v0alpha_p3api_pb.GetOrgAgentSettingsRes
};

P3Api.ListCallerIdsFromBucket = {
  methodName: "ListCallerIdsFromBucket",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListCallerIdsFromBucketReq,
  responseType: api_v0alpha_p3api_pb.ListCallerIdsFromBucketRes
};

P3Api.SaveLastCallResponse = {
  methodName: "SaveLastCallResponse",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.SaveLastCallResponseReq,
  responseType: api_v0alpha_p3api_pb.SaveLastCallResponseRes
};

P3Api.ListAgentCallLogsByCallSidAndType = {
  methodName: "ListAgentCallLogsByCallSidAndType",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListAgentCallLogsByCallSidAndTypeReq,
  responseType: api_v0alpha_p3api_pb.ListAgentCallLogsByCallSidAndTypeRes
};

P3Api.ListAgentCallResponseValues = {
  methodName: "ListAgentCallResponseValues",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListAgentCallResponseValuesReq,
  responseType: api_v0alpha_p3api_pb.ListAgentCallResponseValuesRes
};

P3Api.GetContactSchemaByContactGroup = {
  methodName: "GetContactSchemaByContactGroup",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.GetContactSchemaByContactGroupReq,
  responseType: api_v0alpha_p3api_pb.ContactSchema
};

P3Api.ListContactGroupDetailsByClientSid = {
  methodName: "ListContactGroupDetailsByClientSid",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListContactGroupDetailsByClientSidReq,
  responseType: api_v0alpha_p3api_pb.ListContactGroupDetailsByClientSidRes
};

P3Api.GetContactGroupDetails = {
  methodName: "GetContactGroupDetails",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.GetContactGroupReq,
  responseType: api_v0alpha_p3api_pb.ContactGroup
};

P3Api.GetContactGroupSize = {
  methodName: "GetContactGroupSize",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.GetContactGroupReq,
  responseType: api_v0alpha_p3api_pb.GetContactGroupSizeRes
};

P3Api.CreateContactFieldDescription = {
  methodName: "CreateContactFieldDescription",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.CreateContactFieldDescriptionReq,
  responseType: api_v0alpha_p3api_pb.CreateContactFieldDescriptionRes
};

P3Api.DeleteContactFieldDescription = {
  methodName: "DeleteContactFieldDescription",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.DeleteContactFieldDescriptionReq,
  responseType: api_v0alpha_p3api_pb.DeleteContactFieldDescriptionRes
};

P3Api.ListContactFieldDescriptions = {
  methodName: "ListContactFieldDescriptions",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListContactFieldDescriptionsReq,
  responseType: api_v0alpha_p3api_pb.ListContactFieldDescriptionsRes
};

P3Api.ListContactFieldDescriptionsByCGSid = {
  methodName: "ListContactFieldDescriptionsByCGSid",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListContactFieldDescriptionsByCGSidReq,
  responseType: api_v0alpha_p3api_pb.ListContactFieldDescriptionsByCGSidRes
};

P3Api.ListContactImportTemplates = {
  methodName: "ListContactImportTemplates",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListContactImportTemplatesReq,
  responseType: api_v0alpha_p3api_pb.ListContactImportTemplatesRes
};

P3Api.UpdatePreviewRecordToFinished = {
  methodName: "UpdatePreviewRecordToFinished",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.UpdatePreviewRecordToFinishedReq,
  responseType: api_v0alpha_p3api_pb.UpdatePreviewRecordToFinishedRes
};

P3Api.UpdateAgentHuntGroup = {
  methodName: "UpdateAgentHuntGroup",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.UpdateAgentHuntGroupReq,
  responseType: api_v0alpha_p3api_pb.UpdateAgentHuntGroupRes
};

P3Api.MultiAgentHuntGroupAssignment = {
  methodName: "MultiAgentHuntGroupAssignment",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.MultiAgentHuntGroupAssignmentReq,
  responseType: api_v0alpha_p3api_pb.MultiAgentHuntGroupAssignmentRes
};

P3Api.GetAgentProfile = {
  methodName: "GetAgentProfile",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.GetAgentProfileReq,
  responseType: api_v0alpha_p3api_pb.AgentProfile
};

P3Api.RecalculateBilling = {
  methodName: "RecalculateBilling",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.RecalculateBillingReq,
  responseType: api_v0alpha_p3api_pb.RecalculateBillingRes
};

P3Api.ListOutboundBroadcastTemplateData = {
  methodName: "ListOutboundBroadcastTemplateData",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListOutboundBroadcastTemplateDataReq,
  responseType: api_v0alpha_p3api_pb.ListOutboundBroadcastTemplateDataRes
};

P3Api.MultiAgentSkillAssignment = {
  methodName: "MultiAgentSkillAssignment",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.MultiAgentSkillAssignmentReq,
  responseType: api_v0alpha_p3api_pb.MultiAgentSkillAssignmentRes
};

P3Api.MultiAgentSkillUnassignment = {
  methodName: "MultiAgentSkillUnassignment",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.MultiAgentSkillUnassignmentReq,
  responseType: api_v0alpha_p3api_pb.MultiAgentSkillUnassignmentRes
};

P3Api.ListMAMAgentHuntGroupsByClientSid = {
  methodName: "ListMAMAgentHuntGroupsByClientSid",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListMAMAgentHuntGroupsByClientSidReq,
  responseType: api_v0alpha_p3api_pb.ListMAMAgentHuntGroupsByClientSidRes
};

P3Api.ListTtsVoices = {
  methodName: "ListTtsVoices",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListTtsVoicesReq,
  responseType: api_v0alpha_p3api_pb.ListTtsVoicesRes
};

P3Api.CreateTtsVoice = {
  methodName: "CreateTtsVoice",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.CreateTtsVoiceReq,
  responseType: api_v0alpha_p3api_pb.CreateTtsVoiceRes
};

P3Api.DeleteTtsVoice = {
  methodName: "DeleteTtsVoice",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.DeleteTtsVoiceReq,
  responseType: api_v0alpha_p3api_pb.DeleteTtsVoiceRes
};

P3Api.ListCustomDataKeys = {
  methodName: "ListCustomDataKeys",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListCustomDataKeysReq,
  responseType: api_v0alpha_p3api_pb.ListCustomDataKeysRes
};

P3Api.CreateCustomDataKey = {
  methodName: "CreateCustomDataKey",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.CreateCustomDataKeyReq,
  responseType: api_v0alpha_p3api_pb.CreateCustomDataKeyRes
};

P3Api.DeleteCustomDataKey = {
  methodName: "DeleteCustomDataKey",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.DeleteCustomDataKeyReq,
  responseType: api_v0alpha_p3api_pb.DeleteCustomDataKeyRes
};

P3Api.UpdateCustomDataKey = {
  methodName: "UpdateCustomDataKey",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.UpdateCustomDataKeyReq,
  responseType: api_v0alpha_p3api_pb.UpdateCustomDataKeyRes
};

P3Api.GetActivityLogHistories = {
  methodName: "GetActivityLogHistories",
  service: P3Api,
  requestStream: false,
  responseStream: true,
  requestType: api_v0alpha_p3api_pb.GetActivityLogHistoryReq,
  responseType: api_v0alpha_p3api_pb.GetActivityLogHistoryRes
};

P3Api.ListTableTemplateProperties = {
  methodName: "ListTableTemplateProperties",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListTableTemplatePropertiesReq,
  responseType: api_v0alpha_p3api_pb.ListTableTemplatePropertiesRes
};

P3Api.ListAgentSkillsFilters = {
  methodName: "ListAgentSkillsFilters",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListAgentSkillsFiltersReq,
  responseType: api_v0alpha_p3api_pb.ListAgentSkillsFiltersRes
};

P3Api.ListScheduleRules = {
  methodName: "ListScheduleRules",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListScheduleRulesRequest,
  responseType: api_v0alpha_p3api_pb.ListScheduleRulesResult
};

P3Api.ListCustomReportFilters = {
  methodName: "ListCustomReportFilters",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListCustomReportFiltersReq,
  responseType: api_v0alpha_p3api_pb.ListCustomReportFiltersRes
};

P3Api.ListSmsNumbers = {
  methodName: "ListSmsNumbers",
  service: P3Api,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_p3api_pb.ListSmsNumbersReq,
  responseType: api_v0alpha_p3api_pb.ListSmsNumbersRes
};

exports.P3Api = P3Api;

function P3ApiClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

P3ApiClient.prototype.getAgentHuntGroup = function getAgentHuntGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.GetAgentHuntGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.getAgentSession = function getAgentSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.GetAgentSession, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.getAgentSkills = function getAgentSkills(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.GetAgentSkills, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.createAgentSkill = function createAgentSkill(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.CreateAgentSkill, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.updateAgentSkill = function updateAgentSkill(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.UpdateAgentSkill, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.deleteAgentSkill = function deleteAgentSkill(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.DeleteAgentSkill, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listSkillsForCurrentAgent = function listSkillsForCurrentAgent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListSkillsForCurrentAgent, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listSkills = function listSkills(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListSkills, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.updateAgentSkills = function updateAgentSkills(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.UpdateAgentSkills, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.getCurrentAgent = function getCurrentAgent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.GetCurrentAgent, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.getClientInfoData = function getClientInfoData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.GetClientInfoData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.getClientInfoDisplayTemplate = function getClientInfoDisplayTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.GetClientInfoDisplayTemplate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listAgentStatisticsData = function listAgentStatisticsData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListAgentStatisticsData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listPBXExtensions = function listPBXExtensions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListPBXExtensions, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listAgentExtensions = function listAgentExtensions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListAgentExtensions, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listHuntGroupExtensions = function listHuntGroupExtensions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListHuntGroupExtensions, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.createExtension = function createExtension(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.CreateExtension, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.deleteExtension = function deleteExtension(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.DeleteExtension, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.updateExtension = function updateExtension(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.UpdateExtension, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.updatePBXExtension = function updatePBXExtension(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.UpdatePBXExtension, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.createDNCLNumbers = function createDNCLNumbers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.CreateDNCLNumbers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.getScriptOrResponses = function getScriptOrResponses(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.GetScriptOrResponses, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.getHuntGroupAgentSettings = function getHuntGroupAgentSettings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.GetHuntGroupAgentSettings, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listHuntGroupWebLinks = function listHuntGroupWebLinks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListHuntGroupWebLinks, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.getHuntGroupPauseCodes = function getHuntGroupPauseCodes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.GetHuntGroupPauseCodes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listAgentCallHistory = function listAgentCallHistory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListAgentCallHistory, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listClientPhoneBookEntries = function listClientPhoneBookEntries(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListClientPhoneBookEntries, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listHuntGroupPhoneBookEntries = function listHuntGroupPhoneBookEntries(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListHuntGroupPhoneBookEntries, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.createPhoneBookEntry = function createPhoneBookEntry(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.CreatePhoneBookEntry, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.updatePhoneBookEntry = function updatePhoneBookEntry(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.UpdatePhoneBookEntry, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.deletePhoneBookEntry = function deletePhoneBookEntry(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.DeletePhoneBookEntry, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listPhoneBooks = function listPhoneBooks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListPhoneBooks, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listAgentTriggers = function listAgentTriggers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListAgentTriggers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.getCampaignCompletionStatus = function getCampaignCompletionStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.GetCampaignCompletionStatus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.getLostPeerInfo = function getLostPeerInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.GetLostPeerInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.getDispositionKeys = function getDispositionKeys(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.GetDispositionKeys, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.getReadyAgents = function getReadyAgents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.GetReadyAgents, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listAgentQueueAndOnHoldCallData = function listAgentQueueAndOnHoldCallData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListAgentQueueAndOnHoldCallData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.saveAgentCallResponses = function saveAgentCallResponses(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.SaveAgentCallResponses, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listAgentTransferOptions = function listAgentTransferOptions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListAgentTransferOptions, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.updateAgentCallResponseValue = function updateAgentCallResponseValue(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.UpdateAgentCallResponseValue, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.getIntercomPeerInfo = function getIntercomPeerInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.GetIntercomPeerInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listOrgResponseEvaluators = function listOrgResponseEvaluators(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListOrgResponseEvaluators, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.getQueueConfigurationOptionsArray = function getQueueConfigurationOptionsArray(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.GetQueueConfigurationOptionsArray, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.getConditionalDNCLRules = function getConditionalDNCLRules(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.GetConditionalDNCLRules, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.manualDialStart = function manualDialStart(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ManualDialStart, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.getExtendedCallHistories = function getExtendedCallHistories(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(P3Api.GetExtendedCallHistories, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listWhiteListPhoneBooks = function listWhiteListPhoneBooks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListWhiteListPhoneBooks, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.downloadCallRecording = function downloadCallRecording(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.DownloadCallRecording, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.downloadCallRecordings = function downloadCallRecordings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.DownloadCallRecordings, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.placePreviewDialCall = function placePreviewDialCall(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.PlacePreviewDialCall, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.cancelPreviewDialCall = function cancelPreviewDialCall(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.CancelPreviewDialCall, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.updateTaskStatus = function updateTaskStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.UpdateTaskStatus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listCallbackRoutingAgents = function listCallbackRoutingAgents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListCallbackRoutingAgents, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listCallbackRoutingSkills = function listCallbackRoutingSkills(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListCallbackRoutingSkills, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.handleRecordingDelay = function handleRecordingDelay(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.HandleRecordingDelay, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.updateAgentAssignedHuntGroup = function updateAgentAssignedHuntGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.UpdateAgentAssignedHuntGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.getCallData = function getCallData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.GetCallData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listHuntGroups = function listHuntGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListHuntGroups, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listReassignmentHuntGroups = function listReassignmentHuntGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListReassignmentHuntGroups, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.getOrgAgentSettings = function getOrgAgentSettings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.GetOrgAgentSettings, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listCallerIdsFromBucket = function listCallerIdsFromBucket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListCallerIdsFromBucket, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.saveLastCallResponse = function saveLastCallResponse(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.SaveLastCallResponse, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listAgentCallLogsByCallSidAndType = function listAgentCallLogsByCallSidAndType(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListAgentCallLogsByCallSidAndType, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listAgentCallResponseValues = function listAgentCallResponseValues(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListAgentCallResponseValues, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.getContactSchemaByContactGroup = function getContactSchemaByContactGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.GetContactSchemaByContactGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listContactGroupDetailsByClientSid = function listContactGroupDetailsByClientSid(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListContactGroupDetailsByClientSid, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.getContactGroupDetails = function getContactGroupDetails(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.GetContactGroupDetails, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.getContactGroupSize = function getContactGroupSize(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.GetContactGroupSize, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.createContactFieldDescription = function createContactFieldDescription(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.CreateContactFieldDescription, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.deleteContactFieldDescription = function deleteContactFieldDescription(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.DeleteContactFieldDescription, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listContactFieldDescriptions = function listContactFieldDescriptions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListContactFieldDescriptions, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listContactFieldDescriptionsByCGSid = function listContactFieldDescriptionsByCGSid(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListContactFieldDescriptionsByCGSid, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listContactImportTemplates = function listContactImportTemplates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListContactImportTemplates, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.updatePreviewRecordToFinished = function updatePreviewRecordToFinished(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.UpdatePreviewRecordToFinished, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.updateAgentHuntGroup = function updateAgentHuntGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.UpdateAgentHuntGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.multiAgentHuntGroupAssignment = function multiAgentHuntGroupAssignment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.MultiAgentHuntGroupAssignment, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.getAgentProfile = function getAgentProfile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.GetAgentProfile, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.recalculateBilling = function recalculateBilling(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.RecalculateBilling, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listOutboundBroadcastTemplateData = function listOutboundBroadcastTemplateData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListOutboundBroadcastTemplateData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.multiAgentSkillAssignment = function multiAgentSkillAssignment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.MultiAgentSkillAssignment, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.multiAgentSkillUnassignment = function multiAgentSkillUnassignment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.MultiAgentSkillUnassignment, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listMAMAgentHuntGroupsByClientSid = function listMAMAgentHuntGroupsByClientSid(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListMAMAgentHuntGroupsByClientSid, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listTtsVoices = function listTtsVoices(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListTtsVoices, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.createTtsVoice = function createTtsVoice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.CreateTtsVoice, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.deleteTtsVoice = function deleteTtsVoice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.DeleteTtsVoice, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listCustomDataKeys = function listCustomDataKeys(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListCustomDataKeys, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.createCustomDataKey = function createCustomDataKey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.CreateCustomDataKey, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.deleteCustomDataKey = function deleteCustomDataKey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.DeleteCustomDataKey, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.updateCustomDataKey = function updateCustomDataKey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.UpdateCustomDataKey, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.getActivityLogHistories = function getActivityLogHistories(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(P3Api.GetActivityLogHistories, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listTableTemplateProperties = function listTableTemplateProperties(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListTableTemplateProperties, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listAgentSkillsFilters = function listAgentSkillsFilters(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListAgentSkillsFilters, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listScheduleRules = function listScheduleRules(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListScheduleRules, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listCustomReportFilters = function listCustomReportFilters(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListCustomReportFilters, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

P3ApiClient.prototype.listSmsNumbers = function listSmsNumbers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(P3Api.ListSmsNumbers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.P3ApiClient = P3ApiClient;

