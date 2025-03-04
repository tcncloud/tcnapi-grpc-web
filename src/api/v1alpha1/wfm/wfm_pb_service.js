// package: api.v1alpha1.wfm
// file: api/v1alpha1/wfm/wfm.proto

var api_v1alpha1_wfm_wfm_pb = require("../../../api/v1alpha1/wfm/wfm_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WFM = (function () {
  function WFM() {}
  WFM.serviceName = "api.v1alpha1.wfm.WFM";
  return WFM;
}());

WFM.PerformInitialClientSetup = {
  methodName: "PerformInitialClientSetup",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.PerformInitialClientSetupRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.PerformInitialClientSetupResponse
};

WFM.CreateInitialDemoActivities = {
  methodName: "CreateInitialDemoActivities",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateInitialDemoActivitiesRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateInitialDemoActivitiesResponse
};

WFM.ListSkillProfiles = {
  methodName: "ListSkillProfiles",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListSkillProfilesReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListSkillProfilesRes
};

WFM.UpdateSkillProfile = {
  methodName: "UpdateSkillProfile",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileRes
};

WFM.UpdateSkillProfileProficiencies = {
  methodName: "UpdateSkillProfileProficiencies",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileProficienciesReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileProficienciesRes
};

WFM.GetSkillProfile = {
  methodName: "GetSkillProfile",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.GetSkillProfileReq,
  responseType: api_v1alpha1_wfm_wfm_pb.GetSkillProfileRes
};

WFM.ResyncSkillProfiles = {
  methodName: "ResyncSkillProfiles",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ResyncSkillProfilesReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ResyncSkillProfilesRes
};

WFM.GetLastSkillProfileResyncDate = {
  methodName: "GetLastSkillProfileResyncDate",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.GetLastSkillProfileResyncDateReq,
  responseType: api_v1alpha1_wfm_wfm_pb.GetLastSkillProfileResyncDateRes
};

WFM.UpsertForecastingParameters = {
  methodName: "UpsertForecastingParameters",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpsertForecastingParametersReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpsertForecastingParametersRes
};

WFM.GetForecastingParameters = {
  methodName: "GetForecastingParameters",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.GetForecastingParametersReq,
  responseType: api_v1alpha1_wfm_wfm_pb.GetForecastingParametersRes
};

WFM.GetClientHistoryCacheInfo = {
  methodName: "GetClientHistoryCacheInfo",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.GetClientHistoryCacheInfoReq,
  responseType: api_v1alpha1_wfm_wfm_pb.GetClientHistoryCacheInfoRes
};

WFM.ListHistoricalData = {
  methodName: "ListHistoricalData",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListHistoricalDataReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListHistoricalDataRes
};

WFM.UpsertHistoricalDataDelta = {
  methodName: "UpsertHistoricalDataDelta",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpsertHistoricalDataDeltaReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpsertHistoricalDataDeltaRes
};

WFM.UpsertHistoricalDataDeltas = {
  methodName: "UpsertHistoricalDataDeltas",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpsertHistoricalDataDeltasReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpsertHistoricalDataDeltasRes
};

WFM.ListSkills = {
  methodName: "ListSkills",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListSkillsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListSkillsRes
};

WFM.BuildCallProfileTemplateForSkillProfile = {
  methodName: "BuildCallProfileTemplateForSkillProfile",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.BuildCallProfileTemplateForSkillProfileReq,
  responseType: api_v1alpha1_wfm_wfm_pb.BuildCallProfileTemplateForSkillProfileRes
};

WFM.BuildCallProfileTemplate = {
  methodName: "BuildCallProfileTemplate",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.BuildCallProfileTemplateReq,
  responseType: api_v1alpha1_wfm_wfm_pb.BuildCallProfileTemplateRes
};

WFM.CreateInactiveSkillProfileMapping = {
  methodName: "CreateInactiveSkillProfileMapping",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateInactiveSkillProfileMappingReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateInactiveSkillProfileMappingRes
};

WFM.GetAvailableRegressionForecasterModelTypes = {
  methodName: "GetAvailableRegressionForecasterModelTypes",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.GetAvailableRegressionForecasterModelTypesReq,
  responseType: api_v1alpha1_wfm_wfm_pb.GetAvailableRegressionForecasterModelTypesRes
};

WFM.DisconnectInactiveSkillProfileMapping = {
  methodName: "DisconnectInactiveSkillProfileMapping",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DisconnectInactiveSkillProfileMappingReq,
  responseType: api_v1alpha1_wfm_wfm_pb.DisconnectInactiveSkillProfileMappingRes
};

WFM.CreateSkillProfileGroup = {
  methodName: "CreateSkillProfileGroup",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateSkillProfileGroupReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateSkillProfileGroupRes
};

WFM.UpdateSkillProfileGroup = {
  methodName: "UpdateSkillProfileGroup",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileGroupReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileGroupRes
};

WFM.ListSkillProfileGroups = {
  methodName: "ListSkillProfileGroups",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListSkillProfileGroupsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListSkillProfileGroupsRes
};

WFM.UpdateSkillProfileGroupAssociations = {
  methodName: "UpdateSkillProfileGroupAssociations",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileGroupAssociationsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileGroupAssociationsRes
};

WFM.DeleteHistoricalDataDeltas = {
  methodName: "DeleteHistoricalDataDeltas",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteHistoricalDataDeltasReq,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteHistoricalDataDeltasRes
};

WFM.ListTopSkillProfiles = {
  methodName: "ListTopSkillProfiles",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListTopSkillProfilesReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListTopSkillProfilesRes
};

WFM.GetSkillProfilesCount = {
  methodName: "GetSkillProfilesCount",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.GetSkillProfilesCountReq,
  responseType: api_v1alpha1_wfm_wfm_pb.GetSkillProfilesCountRes
};

WFM.BuildProfileForecastByInterval = {
  methodName: "BuildProfileForecastByInterval",
  service: WFM,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_wfm_wfm_pb.BuildProfileForecastByIntervalReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CallDataByInterval
};

WFM.BuildProfileForecastByIntervalWithStats = {
  methodName: "BuildProfileForecastByIntervalWithStats",
  service: WFM,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_wfm_wfm_pb.BuildProfileForecastByIntervalWithStatsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.BuildProfileForecastByIntervalWithStatsRes
};

WFM.UpsertProfileForecast = {
  methodName: "UpsertProfileForecast",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpsertProfileForecastReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpsertProfileForecastRes
};

WFM.CreateCallProfileTemplate = {
  methodName: "CreateCallProfileTemplate",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateCallProfileTemplateReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateCallProfileTemplateRes
};

WFM.DeleteCallProfileTemplate = {
  methodName: "DeleteCallProfileTemplate",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteCallProfileTemplateReq,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteCallProfileTemplateRes
};

WFM.CreateRegressionTemplate = {
  methodName: "CreateRegressionTemplate",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateRegressionTemplateReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateRegressionTemplateRes
};

WFM.DeleteRegressionTemplate = {
  methodName: "DeleteRegressionTemplate",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteRegressionTemplateReq,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteRegressionTemplateRes
};

WFM.ListRegressionTemplates = {
  methodName: "ListRegressionTemplates",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListRegressionTemplatesReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListRegressionTemplatesRes
};

WFM.ListForecastIntervalsForSkillProfile = {
  methodName: "ListForecastIntervalsForSkillProfile",
  service: WFM,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_wfm_wfm_pb.ListForecastIntervalsForSkillProfileReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CallDataByInterval
};

WFM.ListForecastIntervals = {
  methodName: "ListForecastIntervals",
  service: WFM,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_wfm_wfm_pb.ListForecastIntervalsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CallDataByInterval
};

WFM.ListForecastIntervalsV2 = {
  methodName: "ListForecastIntervalsV2",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListForecastIntervalsV2Request,
  responseType: api_v1alpha1_wfm_wfm_pb.ListForecastIntervalsV2Response
};

WFM.BuildRegressionForecastByInterval = {
  methodName: "BuildRegressionForecastByInterval",
  service: WFM,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_wfm_wfm_pb.BuildRegressionForecastByIntervalReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CallDataByInterval
};

WFM.BuildRegressionForecastByIntervalWithStats = {
  methodName: "BuildRegressionForecastByIntervalWithStats",
  service: WFM,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_wfm_wfm_pb.BuildRegressionForecastByIntervalWithStatsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.BuildRegressionForecastByIntervalWithStatsRes
};

WFM.ListCallProfileTemplates = {
  methodName: "ListCallProfileTemplates",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListCallProfileTemplatesReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListCallProfileTemplatesRes
};

WFM.UpsertRegressionForecast = {
  methodName: "UpsertRegressionForecast",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpsertRegressionForecastReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpsertRegressionForecastRes
};

WFM.UpsertForecastDataDelta = {
  methodName: "UpsertForecastDataDelta",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpsertForecastDataDeltaReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpsertForecastDataDeltaRes
};

WFM.UpsertForecastDataDeltas = {
  methodName: "UpsertForecastDataDeltas",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpsertForecastDataDeltasReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpsertForecastDataDeltasRes
};

WFM.DeleteForecastIntervals = {
  methodName: "DeleteForecastIntervals",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteForecastIntervalsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteForecastIntervalsRes
};

WFM.ListHistoricalDataForAllSkillProfiles = {
  methodName: "ListHistoricalDataForAllSkillProfiles",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListHistoricalDataForAllSkillProfilesReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListHistoricalDataForAllSkillProfilesRes
};

WFM.BuildDOWAndMOYProfiles = {
  methodName: "BuildDOWAndMOYProfiles",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.BuildDOWAndMOYProfilesReq,
  responseType: api_v1alpha1_wfm_wfm_pb.BuildDOWAndMOYProfilesRes
};

WFM.CalculateTrainingDataAveragesForSkillProfile = {
  methodName: "CalculateTrainingDataAveragesForSkillProfile",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CalculateTrainingDataAveragesForSkillProfileReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CalculateTrainingDataAveragesForSkillProfileRes
};

WFM.UpdateSkillProfileAveragesUsingHistoricalData = {
  methodName: "UpdateSkillProfileAveragesUsingHistoricalData",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileAveragesUsingHistoricalDataReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileAveragesUsingHistoricalDataRes
};

WFM.UpdateCallCenterNode = {
  methodName: "UpdateCallCenterNode",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateCallCenterNodeReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateCallCenterNodeRes
};

WFM.CreateClientNode = {
  methodName: "CreateClientNode",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateClientNodeReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateClientNodeRes
};

WFM.UpdateClientNode = {
  methodName: "UpdateClientNode",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateClientNodeReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateClientNodeRes
};

WFM.CreateLocationNode = {
  methodName: "CreateLocationNode",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateLocationNodeReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateLocationNodeRes
};

WFM.UpdateLocationNode = {
  methodName: "UpdateLocationNode",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateLocationNodeReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateLocationNodeRes
};

WFM.CreateProgramNode = {
  methodName: "CreateProgramNode",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateProgramNodeReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateProgramNodeRes
};

WFM.UpdateProgramNode = {
  methodName: "UpdateProgramNode",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateProgramNodeReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateProgramNodeRes
};

WFM.ListProgramNodesBySid = {
  methodName: "ListProgramNodesBySid",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListProgramNodesBySidReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListProgramNodesBySidRes
};

WFM.CreateConstraintRule = {
  methodName: "CreateConstraintRule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateConstraintRuleReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateConstraintRuleRes
};

WFM.UpdateConstraintRule = {
  methodName: "UpdateConstraintRule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateConstraintRuleReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateConstraintRuleRes
};

WFM.DeleteConstraintRule = {
  methodName: "DeleteConstraintRule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteConstraintRuleReq,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteConstraintRuleRes
};

WFM.CreateNonSkillActivity = {
  methodName: "CreateNonSkillActivity",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateNonSkillActivityReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateNonSkillActivityRes
};

WFM.UpdateNonSkillActivity = {
  methodName: "UpdateNonSkillActivity",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateNonSkillActivityReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateNonSkillActivityRes
};

WFM.ListNonSkillActivities = {
  methodName: "ListNonSkillActivities",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListNonSkillActivitiesReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListNonSkillActivitiesRes
};

WFM.ListNonSkillActivityAssociations = {
  methodName: "ListNonSkillActivityAssociations",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListNonSkillActivityAssociationsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListNonSkillActivityAssociationsRes
};

WFM.ListCandidateSchedulingActivities = {
  methodName: "ListCandidateSchedulingActivities",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListCandidateSchedulingActivitiesReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListCandidateSchedulingActivitiesRes
};

WFM.ListSchedulingActivities = {
  methodName: "ListSchedulingActivities",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListSchedulingActivitiesRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.ListSchedulingActivitiesResponse
};

WFM.GetOnCallSchedulingActivity = {
  methodName: "GetOnCallSchedulingActivity",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.GetOnCallSchedulingActivityReq,
  responseType: api_v1alpha1_wfm_wfm_pb.GetOnCallSchedulingActivityRes
};

WFM.CreateSchedulingActivityPauseCodes = {
  methodName: "CreateSchedulingActivityPauseCodes",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateSchedulingActivityPauseCodesRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateSchedulingActivityPauseCodesResponse
};

WFM.DeleteSchedulingActivityPauseCodes = {
  methodName: "DeleteSchedulingActivityPauseCodes",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteSchedulingActivityPauseCodesRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteSchedulingActivityPauseCodesResponse
};

WFM.ListPatternsForSchedulingActivityClassifications = {
  methodName: "ListPatternsForSchedulingActivityClassifications",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListPatternsForSchedulingActivityClassificationsRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.ListPatternsForSchedulingActivityClassificationsResponse
};

WFM.GetTimeOffSchedulingActivity = {
  methodName: "GetTimeOffSchedulingActivity",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.GetTimeOffSchedulingActivityRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.GetTimeOffSchedulingActivityResponse
};

WFM.CreateAgentGroup = {
  methodName: "CreateAgentGroup",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateAgentGroupReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateAgentGroupRes
};

WFM.ListAgentScheduleGroups = {
  methodName: "ListAgentScheduleGroups",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListAgentScheduleGroupsRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.ListAgentScheduleGroupsResponse
};

WFM.UpdateAgentGroup = {
  methodName: "UpdateAgentGroup",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateAgentGroupReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateAgentGroupRes
};

WFM.CreateUnassignedWFMAgent = {
  methodName: "CreateUnassignedWFMAgent",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateUnassignedWFMAgentRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateUnassignedWFMAgentResponse
};

WFM.UpdateWFMAgent = {
  methodName: "UpdateWFMAgent",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateWFMAgentReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateWFMAgentRes
};

WFM.ListAllWFMAgents = {
  methodName: "ListAllWFMAgents",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListAllWFMAgentsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListAllWFMAgentsRes
};

WFM.ListCandidateWFMAgents = {
  methodName: "ListCandidateWFMAgents",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListCandidateWFMAgentsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListCandidateWFMAgentsRes
};

WFM.ListUngroupedWFMAgents = {
  methodName: "ListUngroupedWFMAgents",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListUngroupedWFMAgentsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListUngroupedWFMAgentsRes
};

WFM.ListWFMAgentSids = {
  methodName: "ListWFMAgentSids",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListWFMAgentSidsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListWFMAgentSidsRes
};

WFM.ListUnassignedWFMAgents = {
  methodName: "ListUnassignedWFMAgents",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListUnassignedWFMAgentsRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.ListUnassignedWFMAgentsResponse
};

WFM.ListWFMAgentsAssociatedWithAgentGroup = {
  methodName: "ListWFMAgentsAssociatedWithAgentGroup",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListWFMAgentsAssociatedWithAgentGroupReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListWFMAgentsAssociatedWithAgentGroupRes
};

WFM.CreateWFMAgentMemberships = {
  methodName: "CreateWFMAgentMemberships",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateWFMAgentMembershipsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateWFMAgentMembershipsRes
};

WFM.CopyWFMAgentMemberships = {
  methodName: "CopyWFMAgentMemberships",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CopyWFMAgentMembershipsRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.CopyWFMAgentMembershipsResponse
};

WFM.DeleteWFMAgentMemberships = {
  methodName: "DeleteWFMAgentMemberships",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteWFMAgentMembershipsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteWFMAgentMembershipsRes
};

WFM.DeleteWFMAgentsMemberships = {
  methodName: "DeleteWFMAgentsMemberships",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteWFMAgentsMembershipsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteWFMAgentsMembershipsRes
};

WFM.RemoveAgentFromFutureShifts = {
  methodName: "RemoveAgentFromFutureShifts",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.RemoveAgentFromFutureShiftsRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.RemoveAgentFromFutureShiftsResponse
};

WFM.BuildAgentDiagnostics = {
  methodName: "BuildAgentDiagnostics",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.BuildAgentDiagnosticsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.BuildAgentDiagnosticsRes
};

WFM.CreateShiftTemplate = {
  methodName: "CreateShiftTemplate",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateShiftTemplateReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateShiftTemplateRes
};

WFM.UpdateShiftTemplate = {
  methodName: "UpdateShiftTemplate",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateShiftTemplateReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateShiftTemplateRes
};

WFM.ListShiftTemplatesBySids = {
  methodName: "ListShiftTemplatesBySids",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListShiftTemplatesBySidsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListShiftTemplatesBySidsRes
};

WFM.BuildShiftTemplateDiagnostics = {
  methodName: "BuildShiftTemplateDiagnostics",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.BuildShiftTemplateDiagnosticsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.BuildShiftTemplateDiagnosticsRes
};

WFM.CreatePlacementRule = {
  methodName: "CreatePlacementRule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreatePlacementRuleReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreatePlacementRuleRes
};

WFM.UpdatePlacementRule = {
  methodName: "UpdatePlacementRule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdatePlacementRuleReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdatePlacementRuleRes
};

WFM.DeletePlacementRule = {
  methodName: "DeletePlacementRule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeletePlacementRuleReq,
  responseType: api_v1alpha1_wfm_wfm_pb.DeletePlacementRuleRes
};

WFM.CreateOpenTimesPattern = {
  methodName: "CreateOpenTimesPattern",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateOpenTimesPatternReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateOpenTimesPatternRes
};

WFM.UpdateOpenTimesPattern = {
  methodName: "UpdateOpenTimesPattern",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateOpenTimesPatternReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateOpenTimesPatternRes
};

WFM.DeleteOpenTimesPattern = {
  methodName: "DeleteOpenTimesPattern",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteOpenTimesPatternReq,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteOpenTimesPatternRes
};

WFM.GetOpenTimesBitmaps = {
  methodName: "GetOpenTimesBitmaps",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.GetOpenTimesBitmapsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.GetOpenTimesBitmapsRes
};

WFM.ListOpenDateRangesForNodeOpenTimesBitmaps = {
  methodName: "ListOpenDateRangesForNodeOpenTimesBitmaps",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListOpenDateRangesForNodeOpenTimesBitmapsRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.ListOpenDateRangesForNodeOpenTimesBitmapsResponse
};

WFM.CreateAgentAvailabilityPattern = {
  methodName: "CreateAgentAvailabilityPattern",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateAgentAvailabilityPatternReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateAgentAvailabilityPatternRes
};

WFM.UpdateAgentAvailabilityPattern = {
  methodName: "UpdateAgentAvailabilityPattern",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateAgentAvailabilityPatternReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateAgentAvailabilityPatternRes
};

WFM.DeleteAgentAvailabilityPattern = {
  methodName: "DeleteAgentAvailabilityPattern",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteAgentAvailabilityPatternReq,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteAgentAvailabilityPatternRes
};

WFM.GetAvailabilityBitmaps = {
  methodName: "GetAvailabilityBitmaps",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.GetAvailabilityBitmapsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.GetAvailabilityBitmapsRes
};

WFM.UpsertNonSkillActivityAssociation = {
  methodName: "UpsertNonSkillActivityAssociation",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpsertNonSkillActivityAssociationReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpsertNonSkillActivityAssociationRes
};

WFM.CreateSkillProficiencies = {
  methodName: "CreateSkillProficiencies",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateSkillProficienciesReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateSkillProficienciesRes
};

WFM.UpdateSkillProficiencies = {
  methodName: "UpdateSkillProficiencies",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateSkillProficienciesReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateSkillProficienciesRes
};

WFM.DeleteSkillProficiency = {
  methodName: "DeleteSkillProficiency",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteSkillProficiencyReq,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteSkillProficiencyRes
};

WFM.CopyScenario = {
  methodName: "CopyScenario",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CopyScenarioReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CopyScenarioRes
};

WFM.CreateScheduleScenarioWithNodes = {
  methodName: "CreateScheduleScenarioWithNodes",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateScheduleScenarioWithNodesReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateScheduleScenarioWithNodesRes
};

WFM.UpdateScheduleScenario = {
  methodName: "UpdateScheduleScenario",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateScheduleScenarioReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateScheduleScenarioRes
};

WFM.ListConfigEntities = {
  methodName: "ListConfigEntities",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListConfigEntitiesReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListConfigEntitiesRes
};

WFM.CreateReasonCode = {
  methodName: "CreateReasonCode",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateReasonCodeRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateReasonCodeResponse
};

WFM.UpdateReasonCode = {
  methodName: "UpdateReasonCode",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateReasonCodeRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateReasonCodeResponse
};

WFM.GetDefaultReasonCode = {
  methodName: "GetDefaultReasonCode",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.GetDefaultReasonCodeRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.GetDefaultReasonCodeResponse
};

WFM.ListReasonCodes = {
  methodName: "ListReasonCodes",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListReasonCodesRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.ListReasonCodesResponse
};

WFM.DeleteShiftInstances = {
  methodName: "DeleteShiftInstances",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteShiftInstancesReq,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteShiftInstancesRes
};

WFM.BuildNodeDiagnostics = {
  methodName: "BuildNodeDiagnostics",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.BuildNodeDiagnosticsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.BuildNodeDiagnosticsRes
};

WFM.BuildGlobalDiagnostics = {
  methodName: "BuildGlobalDiagnostics",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.BuildGlobalDiagnosticsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.BuildGlobalDiagnosticsRes
};

WFM.GetPublishedSchedule = {
  methodName: "GetPublishedSchedule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.GetPublishedScheduleReq,
  responseType: api_v1alpha1_wfm_wfm_pb.GetPublishedScheduleRes
};

WFM.GetPublishedScheduleRequiredCalls = {
  methodName: "GetPublishedScheduleRequiredCalls",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.GetPublishedScheduleRequiredCallsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.GetPublishedScheduleRequiredCallsRes
};

WFM.GetDraftScheduleRequiredCalls = {
  methodName: "GetDraftScheduleRequiredCalls",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.GetDraftScheduleRequiredCallsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.GetDraftScheduleRequiredCallsRes
};

WFM.CreateDraftSchedule = {
  methodName: "CreateDraftSchedule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateDraftScheduleReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateDraftScheduleRes
};

WFM.UpdateDraftSchedule = {
  methodName: "UpdateDraftSchedule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateDraftScheduleReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateDraftScheduleRes
};

WFM.BuildDraftSchedule = {
  methodName: "BuildDraftSchedule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.BuildDraftScheduleReq,
  responseType: api_v1alpha1_wfm_wfm_pb.BuildDraftScheduleRes
};

WFM.PollBuildInProgress = {
  methodName: "PollBuildInProgress",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.PollBuildInProgressRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.PollBuildInProgressResponse
};

WFM.CancelBuildInProgress = {
  methodName: "CancelBuildInProgress",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CancelBuildInProgressRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.CancelBuildInProgressResponse
};

WFM.PublishDraftSchedule = {
  methodName: "PublishDraftSchedule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.PublishDraftScheduleReq,
  responseType: api_v1alpha1_wfm_wfm_pb.PublishDraftScheduleRes
};

WFM.ResetDraftSchedule = {
  methodName: "ResetDraftSchedule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ResetDraftScheduleReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ResetDraftScheduleRes
};

WFM.GetDraftSchedule = {
  methodName: "GetDraftSchedule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.GetDraftScheduleReq,
  responseType: api_v1alpha1_wfm_wfm_pb.GetDraftScheduleRes
};

WFM.ListDraftSchedules = {
  methodName: "ListDraftSchedules",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListDraftSchedulesReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListDraftSchedulesRes
};

WFM.ClearSchedule = {
  methodName: "ClearSchedule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ClearScheduleReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ClearScheduleRes
};

WFM.DeleteDraftSchedule = {
  methodName: "DeleteDraftSchedule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteDraftScheduleReq,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteDraftScheduleRes
};

WFM.ListShiftInstancesBySid = {
  methodName: "ListShiftInstancesBySid",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListShiftInstancesBySidReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListShiftInstancesBySidRes
};

WFM.CopyScheduleToSchedule = {
  methodName: "CopyScheduleToSchedule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CopyScheduleToScheduleReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CopyScheduleToScheduleRes
};

WFM.CreateShiftInstance = {
  methodName: "CreateShiftInstance",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceRes
};

WFM.CreateShiftInstanceV2 = {
  methodName: "CreateShiftInstanceV2",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceV2Req,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceV2Res
};

WFM.CreateShiftInstanceWithSegments = {
  methodName: "CreateShiftInstanceWithSegments",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceWithSegmentsRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceWithSegmentsResponse
};

WFM.SplitShiftInstance = {
  methodName: "SplitShiftInstance",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.SplitShiftInstanceReq,
  responseType: api_v1alpha1_wfm_wfm_pb.SplitShiftInstanceRes
};

WFM.SwapShiftInstances = {
  methodName: "SwapShiftInstances",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.SwapShiftInstancesReq,
  responseType: api_v1alpha1_wfm_wfm_pb.SwapShiftInstancesRes
};

WFM.UpdateShiftInstance = {
  methodName: "UpdateShiftInstance",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateShiftInstanceReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateShiftInstanceRes
};

WFM.UpdateShiftInstanceV2 = {
  methodName: "UpdateShiftInstanceV2",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateShiftInstanceV2Req,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateShiftInstanceV2Res
};

WFM.UpdateShiftInstanceWithSegments = {
  methodName: "UpdateShiftInstanceWithSegments",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateShiftInstanceWithSegmentsRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateShiftInstanceWithSegmentsResponse
};

WFM.CopyShiftInstancesToSchedule = {
  methodName: "CopyShiftInstancesToSchedule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CopyShiftInstancesToScheduleReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CopyShiftInstancesToScheduleRes
};

WFM.ListShiftInstanceSidsForAgent = {
  methodName: "ListShiftInstanceSidsForAgent",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListShiftInstanceSidsForAgentReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListShiftInstanceSidsForAgentRes
};

WFM.ListShiftInstanceSidsForSchedule = {
  methodName: "ListShiftInstanceSidsForSchedule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListShiftInstanceSidsForScheduleRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.ListShiftInstanceSidsForScheduleResponse
};

WFM.ListShiftSegmentsByShiftInstanceSids = {
  methodName: "ListShiftSegmentsByShiftInstanceSids",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListShiftSegmentsByShiftInstanceSidsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListShiftSegmentsByShiftInstanceSidsRes
};

WFM.SetSchedulingTarget = {
  methodName: "SetSchedulingTarget",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.SetSchedulingTargetReq,
  responseType: api_v1alpha1_wfm_wfm_pb.SetSchedulingTargetRes
};

WFM.GetSchedulingTarget = {
  methodName: "GetSchedulingTarget",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.GetSchedulingTargetReq,
  responseType: api_v1alpha1_wfm_wfm_pb.GetSchedulingTargetRes
};

WFM.DeleteSchedulingTarget = {
  methodName: "DeleteSchedulingTarget",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteSchedulingTargetReq,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteSchedulingTargetRes
};

WFM.GetDefaultSchedulingTarget = {
  methodName: "GetDefaultSchedulingTarget",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.GetDefaultSchedulingTargetReq,
  responseType: api_v1alpha1_wfm_wfm_pb.GetDefaultSchedulingTargetRes
};

WFM.SetDefaultSchedulingTarget = {
  methodName: "SetDefaultSchedulingTarget",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.SetDefaultSchedulingTargetReq,
  responseType: api_v1alpha1_wfm_wfm_pb.SetDefaultSchedulingTargetRes
};

WFM.GetPerformanceMetrics = {
  methodName: "GetPerformanceMetrics",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.GetPerformanceMetricsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.GetPerformanceMetricsRes
};

WFM.ListRequiredCallsIntervals = {
  methodName: "ListRequiredCallsIntervals",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListRequiredCallsIntervalsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListRequiredCallsIntervalsRes
};

WFM.CreateTourPattern = {
  methodName: "CreateTourPattern",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateTourPatternReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateTourPatternRes
};

WFM.GetTourPatternDiagnostics = {
  methodName: "GetTourPatternDiagnostics",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.GetTourPatternDiagnosticsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.GetTourPatternDiagnosticsRes
};

WFM.UpsertTourPatternWithMembers = {
  methodName: "UpsertTourPatternWithMembers",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpsertTourPatternWithMembersReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpsertTourPatternWithMembersRes
};

WFM.GetTourPattern = {
  methodName: "GetTourPattern",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.GetTourPatternReq,
  responseType: api_v1alpha1_wfm_wfm_pb.GetTourPatternRes
};

WFM.GetTourPatternWithMembers = {
  methodName: "GetTourPatternWithMembers",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.GetTourPatternWithMembersReq,
  responseType: api_v1alpha1_wfm_wfm_pb.GetTourPatternWithMembersRes
};

WFM.DeleteTourPattern = {
  methodName: "DeleteTourPattern",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteTourPatternReq,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteTourPatternRes
};

WFM.CreateTourWeekPattern = {
  methodName: "CreateTourWeekPattern",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateTourWeekPatternReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateTourWeekPatternRes
};

WFM.ListTourWeekPatterns = {
  methodName: "ListTourWeekPatterns",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListTourWeekPatternsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListTourWeekPatternsRes
};

WFM.DeleteTourWeekPatterns = {
  methodName: "DeleteTourWeekPatterns",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteTourWeekPatternsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteTourWeekPatternsRes
};

WFM.CreateTourShiftInstanceConfig = {
  methodName: "CreateTourShiftInstanceConfig",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateTourShiftInstanceConfigReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateTourShiftInstanceConfigRes
};

WFM.UpdateTourShiftInstanceConfig = {
  methodName: "UpdateTourShiftInstanceConfig",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateTourShiftInstanceConfigReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateTourShiftInstanceConfigRes
};

WFM.ListTourShiftInstanceConfigs = {
  methodName: "ListTourShiftInstanceConfigs",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListTourShiftInstanceConfigsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListTourShiftInstanceConfigsRes
};

WFM.DeleteTourShiftInstanceConfigs = {
  methodName: "DeleteTourShiftInstanceConfigs",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteTourShiftInstanceConfigsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteTourShiftInstanceConfigsRes
};

WFM.CreateTourShiftSegmentConfig = {
  methodName: "CreateTourShiftSegmentConfig",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateTourShiftSegmentConfigReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateTourShiftSegmentConfigRes
};

WFM.UpdateTourShiftSegmentConfig = {
  methodName: "UpdateTourShiftSegmentConfig",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateTourShiftSegmentConfigReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateTourShiftSegmentConfigRes
};

WFM.ListTourShiftSegmentConfigs = {
  methodName: "ListTourShiftSegmentConfigs",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListTourShiftSegmentConfigsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListTourShiftSegmentConfigsRes
};

WFM.DeleteTourShiftSegmentConfigs = {
  methodName: "DeleteTourShiftSegmentConfigs",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteTourShiftSegmentConfigsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteTourShiftSegmentConfigsRes
};

WFM.CreateTourAgentCollection = {
  methodName: "CreateTourAgentCollection",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateTourAgentCollectionReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateTourAgentCollectionRes
};

WFM.UpdateTourAgentCollection = {
  methodName: "UpdateTourAgentCollection",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateTourAgentCollectionReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateTourAgentCollectionRes
};

WFM.ListTourAgentCollections = {
  methodName: "ListTourAgentCollections",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListTourAgentCollectionsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListTourAgentCollectionsRes
};

WFM.DeleteTourAgentCollections = {
  methodName: "DeleteTourAgentCollections",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteTourAgentCollectionsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteTourAgentCollectionsRes
};

WFM.CreateTourAgentCollectionWFMAgents = {
  methodName: "CreateTourAgentCollectionWFMAgents",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateTourAgentCollectionWFMAgentsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateTourAgentCollectionWFMAgentsRes
};

WFM.ListTourAgentCollectionWFMAgents = {
  methodName: "ListTourAgentCollectionWFMAgents",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListTourAgentCollectionWFMAgentsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListTourAgentCollectionWFMAgentsRes
};

WFM.DeleteTourAgentCollectionWFMAgents = {
  methodName: "DeleteTourAgentCollectionWFMAgents",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteTourAgentCollectionWFMAgentsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteTourAgentCollectionWFMAgentsRes
};

WFM.GenerateTourWeekPatterns = {
  methodName: "GenerateTourWeekPatterns",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.GenerateTourWeekPatternsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.GenerateTourWeekPatternsRes
};

WFM.ListValidAgentsForReplacement = {
  methodName: "ListValidAgentsForReplacement",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListValidAgentsForReplacementReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ListValidAgentsForReplacementRes
};

WFM.ReplaceAgentOnSchedule = {
  methodName: "ReplaceAgentOnSchedule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ReplaceAgentOnScheduleRes,
  responseType: api_v1alpha1_wfm_wfm_pb.ReplaceAgentOnScheduleRes
};

WFM.ReplaceAgentOnScheduleV1 = {
  methodName: "ReplaceAgentOnScheduleV1",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ReplaceAgentOnScheduleReq,
  responseType: api_v1alpha1_wfm_wfm_pb.ReplaceAgentOnScheduleRes
};

WFM.RemoveAgentFromSchedule = {
  methodName: "RemoveAgentFromSchedule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.RemoveAgentFromScheduleRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.RemoveAgentFromScheduleResponse
};

WFM.CreatePublishedShift = {
  methodName: "CreatePublishedShift",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreatePublishedShiftRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.CreatePublishedShiftResponse
};

WFM.CreatePublishedShiftWithSegments = {
  methodName: "CreatePublishedShiftWithSegments",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreatePublishedShiftWithSegmentsRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.CreatePublishedShiftWithSegmentsResponse
};

WFM.UpdatePublishedShift = {
  methodName: "UpdatePublishedShift",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdatePublishedShiftRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdatePublishedShiftResponse
};

WFM.UpdatePublishedShiftWithSegments = {
  methodName: "UpdatePublishedShiftWithSegments",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdatePublishedShiftWithSegmentsRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdatePublishedShiftWithSegmentsResponse
};

WFM.SplitPublishedShift = {
  methodName: "SplitPublishedShift",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.SplitPublishedShiftRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.SplitPublishedShiftResponse
};

WFM.SwapPublishedShifts = {
  methodName: "SwapPublishedShifts",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.SwapPublishedShiftsRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.SwapPublishedShiftsResponse
};

WFM.DeletePublishedShifts = {
  methodName: "DeletePublishedShifts",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeletePublishedShiftsRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.DeletePublishedShiftsResponse
};

WFM.ReplaceAgentOnPublishedSchedule = {
  methodName: "ReplaceAgentOnPublishedSchedule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ReplaceAgentOnPublishedScheduleRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.ReplaceAgentOnPublishedScheduleResponse
};

WFM.RemoveAgentFromPublishedSchedule = {
  methodName: "RemoveAgentFromPublishedSchedule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.RemoveAgentFromPublishedScheduleRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.RemoveAgentFromPublishedScheduleResponse
};

WFM.CopyShiftsToPublishedSchedule = {
  methodName: "CopyShiftsToPublishedSchedule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CopyShiftsToPublishedScheduleRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.CopyShiftsToPublishedScheduleResponse
};

WFM.CreateAgentLeavePetition = {
  methodName: "CreateAgentLeavePetition",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateAgentLeavePetitionRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateAgentLeavePetitionResponse
};

WFM.ListAgentLeavePetitions = {
  methodName: "ListAgentLeavePetitions",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListAgentLeavePetitionsRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.ListAgentLeavePetitionsResponse
};

WFM.ArchiveAgentLeavePetition = {
  methodName: "ArchiveAgentLeavePetition",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ArchiveAgentLeavePetitionRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.ArchiveAgentLeavePetitionResponse
};

WFM.ResolveAgentLeavePetition = {
  methodName: "ResolveAgentLeavePetition",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ResolveAgentLeavePetitionRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.ResolveAgentLeavePetitionResponse
};

WFM.CancelAgentLeavePetition = {
  methodName: "CancelAgentLeavePetition",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CancelAgentLeavePetitionRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.CancelAgentLeavePetitionResponse
};

WFM.HelloWorldWFMAdherence = {
  methodName: "HelloWorldWFMAdherence",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.HelloWorldWFMAdherenceRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.HelloWorldWFMAdherenceResponse
};

WFM.ListAdherenceDiagnostics = {
  methodName: "ListAdherenceDiagnostics",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListAdherenceDiagnosticsRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.ListAdherenceDiagnosticsResponse
};

WFM.ListAgentStatesForDay = {
  methodName: "ListAgentStatesForDay",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListAgentStatesForDayRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.ListAgentStatesForDayResponse
};

WFM.ListRealTimeManagementStates = {
  methodName: "ListRealTimeManagementStates",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListRealTimeManagementStatesRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.ListRealTimeManagementStatesResponse
};

WFM.ListAdherenceAgentStates = {
  methodName: "ListAdherenceAgentStates",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListAdherenceAgentStatesRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.ListAdherenceAgentStatesResponse
};

WFM.ListAdherenceAgentStateViolations = {
  methodName: "ListAdherenceAgentStateViolations",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListAdherenceAgentStateViolationsRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.ListAdherenceAgentStateViolationsResponse
};

WFM.ResolveAdherenceAgentStateViolation = {
  methodName: "ResolveAdherenceAgentStateViolation",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ResolveAdherenceAgentStateViolationRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.ResolveAdherenceAgentStateViolationResponse
};

WFM.UpsertRealTimeManagementStateColor = {
  methodName: "UpsertRealTimeManagementStateColor",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpsertRealTimeManagementStateColorRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.UpsertRealTimeManagementStateColorResponse
};

WFM.ListRealTimeManagementStateColors = {
  methodName: "ListRealTimeManagementStateColors",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListRealTimeManagementStateColorsRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.ListRealTimeManagementStateColorsResponse
};

WFM.DeleteRealTimeManagementStateColor = {
  methodName: "DeleteRealTimeManagementStateColor",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteRealTimeManagementStateColorRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteRealTimeManagementStateColorResponse
};

WFM.CreateRgbaColor = {
  methodName: "CreateRgbaColor",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateRgbaColorRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateRgbaColorResponse
};

WFM.ListRgbaColors = {
  methodName: "ListRgbaColors",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListRgbaColorsRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.ListRgbaColorsResponse
};

WFM.UpdateRgbaColor = {
  methodName: "UpdateRgbaColor",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateRgbaColorRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateRgbaColorResponse
};

WFM.DeleteRgbaColor = {
  methodName: "DeleteRgbaColor",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteRgbaColorRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteRgbaColorResponse
};

WFM.CreateAdherenceRuleNotificationConfig = {
  methodName: "CreateAdherenceRuleNotificationConfig",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateAdherenceRuleNotificationConfigRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateAdherenceRuleNotificationConfigResponse
};

WFM.UpdateAdherenceRuleNotificationConfig = {
  methodName: "UpdateAdherenceRuleNotificationConfig",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateAdherenceRuleNotificationConfigRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateAdherenceRuleNotificationConfigResponse
};

WFM.CreateAdherenceRuleNotificationConfigEntry = {
  methodName: "CreateAdherenceRuleNotificationConfigEntry",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateAdherenceRuleNotificationConfigEntryRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateAdherenceRuleNotificationConfigEntryResponse
};

WFM.UpdateAdherenceRuleNotificationConfigEntry = {
  methodName: "UpdateAdherenceRuleNotificationConfigEntry",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateAdherenceRuleNotificationConfigEntryRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateAdherenceRuleNotificationConfigEntryResponse
};

WFM.DeleteAdherenceRuleNotificationConfigEntry = {
  methodName: "DeleteAdherenceRuleNotificationConfigEntry",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteAdherenceRuleNotificationConfigEntryRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteAdherenceRuleNotificationConfigEntryResponse
};

WFM.ListAdherenceRuleNotificationConfigs = {
  methodName: "ListAdherenceRuleNotificationConfigs",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListAdherenceRuleNotificationConfigsRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.ListAdherenceRuleNotificationConfigsResponse
};

WFM.CreateAdherenceDepartmentalRule = {
  methodName: "CreateAdherenceDepartmentalRule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateAdherenceDepartmentalRuleRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateAdherenceDepartmentalRuleResponse
};

WFM.UpdateAdherenceDepartmentalRule = {
  methodName: "UpdateAdherenceDepartmentalRule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateAdherenceDepartmentalRuleRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateAdherenceDepartmentalRuleResponse
};

WFM.CreateAdherenceDepartmentalRuleClause = {
  methodName: "CreateAdherenceDepartmentalRuleClause",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateAdherenceDepartmentalRuleClauseRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateAdherenceDepartmentalRuleClauseResponse
};

WFM.UpdateAdherenceDepartmentalRuleClause = {
  methodName: "UpdateAdherenceDepartmentalRuleClause",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateAdherenceDepartmentalRuleClauseRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateAdherenceDepartmentalRuleClauseResponse
};

WFM.DeleteAdherenceDepartmentalRuleClause = {
  methodName: "DeleteAdherenceDepartmentalRuleClause",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteAdherenceDepartmentalRuleClauseRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteAdherenceDepartmentalRuleClauseResponse
};

WFM.ListAdherenceDepartmentalRules = {
  methodName: "ListAdherenceDepartmentalRules",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListAdherenceDepartmentalRulesRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.ListAdherenceDepartmentalRulesResponse
};

WFM.CreateAdherenceAgentRule = {
  methodName: "CreateAdherenceAgentRule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateAdherenceAgentRuleRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateAdherenceAgentRuleResponse
};

WFM.UpdateAdherenceAgentRule = {
  methodName: "UpdateAdherenceAgentRule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateAdherenceAgentRuleRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateAdherenceAgentRuleResponse
};

WFM.CreateAdherenceAgentRuleClause = {
  methodName: "CreateAdherenceAgentRuleClause",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateAdherenceAgentRuleClauseRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateAdherenceAgentRuleClauseResponse
};

WFM.UpdateAdherenceAgentRuleClause = {
  methodName: "UpdateAdherenceAgentRuleClause",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateAdherenceAgentRuleClauseRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateAdherenceAgentRuleClauseResponse
};

WFM.ListAdherenceAgentRules = {
  methodName: "ListAdherenceAgentRules",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.ListAdherenceAgentRulesRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.ListAdherenceAgentRulesResponse
};

WFM.DeleteAdherenceAgentRuleClause = {
  methodName: "DeleteAdherenceAgentRuleClause",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteAdherenceAgentRuleClauseRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteAdherenceAgentRuleClauseResponse
};

WFM.AgentGetSchedule = {
  methodName: "AgentGetSchedule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.AgentGetScheduleRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.AgentGetScheduleResponse
};

WFM.AgentListLeavePetitions = {
  methodName: "AgentListLeavePetitions",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.AgentListLeavePetitionsRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.AgentListLeavePetitionsResponse
};

WFM.AgentCreateLeavePetition = {
  methodName: "AgentCreateLeavePetition",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.AgentCreateLeavePetitionRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.AgentCreateLeavePetitionResponse
};

WFM.AgentCancelLeavePetition = {
  methodName: "AgentCancelLeavePetition",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.AgentCancelLeavePetitionRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.AgentCancelLeavePetitionResponse
};

WFM.SetAgentStateSimulationLevelForOrg = {
  methodName: "SetAgentStateSimulationLevelForOrg",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.SetAgentStateSimulationLevelForOrgRequest,
  responseType: api_v1alpha1_wfm_wfm_pb.SetAgentStateSimulationLevelForOrgResponse
};

exports.WFM = WFM;

function WFMClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

WFMClient.prototype.performInitialClientSetup = function performInitialClientSetup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.PerformInitialClientSetup, {
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

WFMClient.prototype.createInitialDemoActivities = function createInitialDemoActivities(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateInitialDemoActivities, {
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

WFMClient.prototype.listSkillProfiles = function listSkillProfiles(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListSkillProfiles, {
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

WFMClient.prototype.updateSkillProfile = function updateSkillProfile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateSkillProfile, {
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

WFMClient.prototype.updateSkillProfileProficiencies = function updateSkillProfileProficiencies(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateSkillProfileProficiencies, {
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

WFMClient.prototype.getSkillProfile = function getSkillProfile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.GetSkillProfile, {
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

WFMClient.prototype.resyncSkillProfiles = function resyncSkillProfiles(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ResyncSkillProfiles, {
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

WFMClient.prototype.getLastSkillProfileResyncDate = function getLastSkillProfileResyncDate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.GetLastSkillProfileResyncDate, {
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

WFMClient.prototype.upsertForecastingParameters = function upsertForecastingParameters(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpsertForecastingParameters, {
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

WFMClient.prototype.getForecastingParameters = function getForecastingParameters(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.GetForecastingParameters, {
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

WFMClient.prototype.getClientHistoryCacheInfo = function getClientHistoryCacheInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.GetClientHistoryCacheInfo, {
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

WFMClient.prototype.listHistoricalData = function listHistoricalData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListHistoricalData, {
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

WFMClient.prototype.upsertHistoricalDataDelta = function upsertHistoricalDataDelta(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpsertHistoricalDataDelta, {
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

WFMClient.prototype.upsertHistoricalDataDeltas = function upsertHistoricalDataDeltas(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpsertHistoricalDataDeltas, {
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

WFMClient.prototype.listSkills = function listSkills(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListSkills, {
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

WFMClient.prototype.buildCallProfileTemplateForSkillProfile = function buildCallProfileTemplateForSkillProfile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.BuildCallProfileTemplateForSkillProfile, {
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

WFMClient.prototype.buildCallProfileTemplate = function buildCallProfileTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.BuildCallProfileTemplate, {
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

WFMClient.prototype.createInactiveSkillProfileMapping = function createInactiveSkillProfileMapping(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateInactiveSkillProfileMapping, {
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

WFMClient.prototype.getAvailableRegressionForecasterModelTypes = function getAvailableRegressionForecasterModelTypes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.GetAvailableRegressionForecasterModelTypes, {
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

WFMClient.prototype.disconnectInactiveSkillProfileMapping = function disconnectInactiveSkillProfileMapping(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DisconnectInactiveSkillProfileMapping, {
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

WFMClient.prototype.createSkillProfileGroup = function createSkillProfileGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateSkillProfileGroup, {
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

WFMClient.prototype.updateSkillProfileGroup = function updateSkillProfileGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateSkillProfileGroup, {
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

WFMClient.prototype.listSkillProfileGroups = function listSkillProfileGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListSkillProfileGroups, {
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

WFMClient.prototype.updateSkillProfileGroupAssociations = function updateSkillProfileGroupAssociations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateSkillProfileGroupAssociations, {
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

WFMClient.prototype.deleteHistoricalDataDeltas = function deleteHistoricalDataDeltas(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteHistoricalDataDeltas, {
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

WFMClient.prototype.listTopSkillProfiles = function listTopSkillProfiles(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListTopSkillProfiles, {
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

WFMClient.prototype.getSkillProfilesCount = function getSkillProfilesCount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.GetSkillProfilesCount, {
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

WFMClient.prototype.buildProfileForecastByInterval = function buildProfileForecastByInterval(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(WFM.BuildProfileForecastByInterval, {
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

WFMClient.prototype.buildProfileForecastByIntervalWithStats = function buildProfileForecastByIntervalWithStats(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(WFM.BuildProfileForecastByIntervalWithStats, {
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

WFMClient.prototype.upsertProfileForecast = function upsertProfileForecast(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpsertProfileForecast, {
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

WFMClient.prototype.createCallProfileTemplate = function createCallProfileTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateCallProfileTemplate, {
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

WFMClient.prototype.deleteCallProfileTemplate = function deleteCallProfileTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteCallProfileTemplate, {
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

WFMClient.prototype.createRegressionTemplate = function createRegressionTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateRegressionTemplate, {
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

WFMClient.prototype.deleteRegressionTemplate = function deleteRegressionTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteRegressionTemplate, {
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

WFMClient.prototype.listRegressionTemplates = function listRegressionTemplates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListRegressionTemplates, {
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

WFMClient.prototype.listForecastIntervalsForSkillProfile = function listForecastIntervalsForSkillProfile(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(WFM.ListForecastIntervalsForSkillProfile, {
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

WFMClient.prototype.listForecastIntervals = function listForecastIntervals(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(WFM.ListForecastIntervals, {
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

WFMClient.prototype.listForecastIntervalsV2 = function listForecastIntervalsV2(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListForecastIntervalsV2, {
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

WFMClient.prototype.buildRegressionForecastByInterval = function buildRegressionForecastByInterval(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(WFM.BuildRegressionForecastByInterval, {
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

WFMClient.prototype.buildRegressionForecastByIntervalWithStats = function buildRegressionForecastByIntervalWithStats(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(WFM.BuildRegressionForecastByIntervalWithStats, {
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

WFMClient.prototype.listCallProfileTemplates = function listCallProfileTemplates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListCallProfileTemplates, {
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

WFMClient.prototype.upsertRegressionForecast = function upsertRegressionForecast(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpsertRegressionForecast, {
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

WFMClient.prototype.upsertForecastDataDelta = function upsertForecastDataDelta(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpsertForecastDataDelta, {
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

WFMClient.prototype.upsertForecastDataDeltas = function upsertForecastDataDeltas(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpsertForecastDataDeltas, {
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

WFMClient.prototype.deleteForecastIntervals = function deleteForecastIntervals(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteForecastIntervals, {
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

WFMClient.prototype.listHistoricalDataForAllSkillProfiles = function listHistoricalDataForAllSkillProfiles(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListHistoricalDataForAllSkillProfiles, {
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

WFMClient.prototype.buildDOWAndMOYProfiles = function buildDOWAndMOYProfiles(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.BuildDOWAndMOYProfiles, {
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

WFMClient.prototype.calculateTrainingDataAveragesForSkillProfile = function calculateTrainingDataAveragesForSkillProfile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CalculateTrainingDataAveragesForSkillProfile, {
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

WFMClient.prototype.updateSkillProfileAveragesUsingHistoricalData = function updateSkillProfileAveragesUsingHistoricalData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateSkillProfileAveragesUsingHistoricalData, {
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

WFMClient.prototype.updateCallCenterNode = function updateCallCenterNode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateCallCenterNode, {
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

WFMClient.prototype.createClientNode = function createClientNode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateClientNode, {
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

WFMClient.prototype.updateClientNode = function updateClientNode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateClientNode, {
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

WFMClient.prototype.createLocationNode = function createLocationNode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateLocationNode, {
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

WFMClient.prototype.updateLocationNode = function updateLocationNode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateLocationNode, {
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

WFMClient.prototype.createProgramNode = function createProgramNode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateProgramNode, {
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

WFMClient.prototype.updateProgramNode = function updateProgramNode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateProgramNode, {
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

WFMClient.prototype.listProgramNodesBySid = function listProgramNodesBySid(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListProgramNodesBySid, {
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

WFMClient.prototype.createConstraintRule = function createConstraintRule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateConstraintRule, {
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

WFMClient.prototype.updateConstraintRule = function updateConstraintRule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateConstraintRule, {
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

WFMClient.prototype.deleteConstraintRule = function deleteConstraintRule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteConstraintRule, {
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

WFMClient.prototype.createNonSkillActivity = function createNonSkillActivity(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateNonSkillActivity, {
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

WFMClient.prototype.updateNonSkillActivity = function updateNonSkillActivity(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateNonSkillActivity, {
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

WFMClient.prototype.listNonSkillActivities = function listNonSkillActivities(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListNonSkillActivities, {
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

WFMClient.prototype.listNonSkillActivityAssociations = function listNonSkillActivityAssociations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListNonSkillActivityAssociations, {
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

WFMClient.prototype.listCandidateSchedulingActivities = function listCandidateSchedulingActivities(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListCandidateSchedulingActivities, {
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

WFMClient.prototype.listSchedulingActivities = function listSchedulingActivities(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListSchedulingActivities, {
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

WFMClient.prototype.getOnCallSchedulingActivity = function getOnCallSchedulingActivity(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.GetOnCallSchedulingActivity, {
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

WFMClient.prototype.createSchedulingActivityPauseCodes = function createSchedulingActivityPauseCodes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateSchedulingActivityPauseCodes, {
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

WFMClient.prototype.deleteSchedulingActivityPauseCodes = function deleteSchedulingActivityPauseCodes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteSchedulingActivityPauseCodes, {
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

WFMClient.prototype.listPatternsForSchedulingActivityClassifications = function listPatternsForSchedulingActivityClassifications(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListPatternsForSchedulingActivityClassifications, {
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

WFMClient.prototype.getTimeOffSchedulingActivity = function getTimeOffSchedulingActivity(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.GetTimeOffSchedulingActivity, {
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

WFMClient.prototype.createAgentGroup = function createAgentGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateAgentGroup, {
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

WFMClient.prototype.listAgentScheduleGroups = function listAgentScheduleGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListAgentScheduleGroups, {
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

WFMClient.prototype.updateAgentGroup = function updateAgentGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateAgentGroup, {
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

WFMClient.prototype.createUnassignedWFMAgent = function createUnassignedWFMAgent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateUnassignedWFMAgent, {
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

WFMClient.prototype.updateWFMAgent = function updateWFMAgent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateWFMAgent, {
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

WFMClient.prototype.listAllWFMAgents = function listAllWFMAgents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListAllWFMAgents, {
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

WFMClient.prototype.listCandidateWFMAgents = function listCandidateWFMAgents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListCandidateWFMAgents, {
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

WFMClient.prototype.listUngroupedWFMAgents = function listUngroupedWFMAgents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListUngroupedWFMAgents, {
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

WFMClient.prototype.listWFMAgentSids = function listWFMAgentSids(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListWFMAgentSids, {
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

WFMClient.prototype.listUnassignedWFMAgents = function listUnassignedWFMAgents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListUnassignedWFMAgents, {
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

WFMClient.prototype.listWFMAgentsAssociatedWithAgentGroup = function listWFMAgentsAssociatedWithAgentGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListWFMAgentsAssociatedWithAgentGroup, {
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

WFMClient.prototype.createWFMAgentMemberships = function createWFMAgentMemberships(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateWFMAgentMemberships, {
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

WFMClient.prototype.copyWFMAgentMemberships = function copyWFMAgentMemberships(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CopyWFMAgentMemberships, {
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

WFMClient.prototype.deleteWFMAgentMemberships = function deleteWFMAgentMemberships(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteWFMAgentMemberships, {
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

WFMClient.prototype.deleteWFMAgentsMemberships = function deleteWFMAgentsMemberships(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteWFMAgentsMemberships, {
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

WFMClient.prototype.removeAgentFromFutureShifts = function removeAgentFromFutureShifts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.RemoveAgentFromFutureShifts, {
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

WFMClient.prototype.buildAgentDiagnostics = function buildAgentDiagnostics(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.BuildAgentDiagnostics, {
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

WFMClient.prototype.createShiftTemplate = function createShiftTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateShiftTemplate, {
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

WFMClient.prototype.updateShiftTemplate = function updateShiftTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateShiftTemplate, {
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

WFMClient.prototype.listShiftTemplatesBySids = function listShiftTemplatesBySids(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListShiftTemplatesBySids, {
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

WFMClient.prototype.buildShiftTemplateDiagnostics = function buildShiftTemplateDiagnostics(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.BuildShiftTemplateDiagnostics, {
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

WFMClient.prototype.createPlacementRule = function createPlacementRule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreatePlacementRule, {
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

WFMClient.prototype.updatePlacementRule = function updatePlacementRule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdatePlacementRule, {
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

WFMClient.prototype.deletePlacementRule = function deletePlacementRule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeletePlacementRule, {
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

WFMClient.prototype.createOpenTimesPattern = function createOpenTimesPattern(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateOpenTimesPattern, {
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

WFMClient.prototype.updateOpenTimesPattern = function updateOpenTimesPattern(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateOpenTimesPattern, {
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

WFMClient.prototype.deleteOpenTimesPattern = function deleteOpenTimesPattern(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteOpenTimesPattern, {
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

WFMClient.prototype.getOpenTimesBitmaps = function getOpenTimesBitmaps(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.GetOpenTimesBitmaps, {
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

WFMClient.prototype.listOpenDateRangesForNodeOpenTimesBitmaps = function listOpenDateRangesForNodeOpenTimesBitmaps(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListOpenDateRangesForNodeOpenTimesBitmaps, {
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

WFMClient.prototype.createAgentAvailabilityPattern = function createAgentAvailabilityPattern(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateAgentAvailabilityPattern, {
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

WFMClient.prototype.updateAgentAvailabilityPattern = function updateAgentAvailabilityPattern(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateAgentAvailabilityPattern, {
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

WFMClient.prototype.deleteAgentAvailabilityPattern = function deleteAgentAvailabilityPattern(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteAgentAvailabilityPattern, {
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

WFMClient.prototype.getAvailabilityBitmaps = function getAvailabilityBitmaps(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.GetAvailabilityBitmaps, {
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

WFMClient.prototype.upsertNonSkillActivityAssociation = function upsertNonSkillActivityAssociation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpsertNonSkillActivityAssociation, {
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

WFMClient.prototype.createSkillProficiencies = function createSkillProficiencies(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateSkillProficiencies, {
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

WFMClient.prototype.updateSkillProficiencies = function updateSkillProficiencies(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateSkillProficiencies, {
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

WFMClient.prototype.deleteSkillProficiency = function deleteSkillProficiency(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteSkillProficiency, {
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

WFMClient.prototype.copyScenario = function copyScenario(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CopyScenario, {
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

WFMClient.prototype.createScheduleScenarioWithNodes = function createScheduleScenarioWithNodes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateScheduleScenarioWithNodes, {
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

WFMClient.prototype.updateScheduleScenario = function updateScheduleScenario(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateScheduleScenario, {
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

WFMClient.prototype.listConfigEntities = function listConfigEntities(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListConfigEntities, {
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

WFMClient.prototype.createReasonCode = function createReasonCode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateReasonCode, {
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

WFMClient.prototype.updateReasonCode = function updateReasonCode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateReasonCode, {
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

WFMClient.prototype.getDefaultReasonCode = function getDefaultReasonCode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.GetDefaultReasonCode, {
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

WFMClient.prototype.listReasonCodes = function listReasonCodes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListReasonCodes, {
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

WFMClient.prototype.deleteShiftInstances = function deleteShiftInstances(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteShiftInstances, {
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

WFMClient.prototype.buildNodeDiagnostics = function buildNodeDiagnostics(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.BuildNodeDiagnostics, {
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

WFMClient.prototype.buildGlobalDiagnostics = function buildGlobalDiagnostics(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.BuildGlobalDiagnostics, {
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

WFMClient.prototype.getPublishedSchedule = function getPublishedSchedule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.GetPublishedSchedule, {
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

WFMClient.prototype.getPublishedScheduleRequiredCalls = function getPublishedScheduleRequiredCalls(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.GetPublishedScheduleRequiredCalls, {
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

WFMClient.prototype.getDraftScheduleRequiredCalls = function getDraftScheduleRequiredCalls(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.GetDraftScheduleRequiredCalls, {
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

WFMClient.prototype.createDraftSchedule = function createDraftSchedule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateDraftSchedule, {
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

WFMClient.prototype.updateDraftSchedule = function updateDraftSchedule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateDraftSchedule, {
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

WFMClient.prototype.buildDraftSchedule = function buildDraftSchedule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.BuildDraftSchedule, {
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

WFMClient.prototype.pollBuildInProgress = function pollBuildInProgress(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.PollBuildInProgress, {
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

WFMClient.prototype.cancelBuildInProgress = function cancelBuildInProgress(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CancelBuildInProgress, {
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

WFMClient.prototype.publishDraftSchedule = function publishDraftSchedule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.PublishDraftSchedule, {
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

WFMClient.prototype.resetDraftSchedule = function resetDraftSchedule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ResetDraftSchedule, {
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

WFMClient.prototype.getDraftSchedule = function getDraftSchedule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.GetDraftSchedule, {
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

WFMClient.prototype.listDraftSchedules = function listDraftSchedules(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListDraftSchedules, {
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

WFMClient.prototype.clearSchedule = function clearSchedule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ClearSchedule, {
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

WFMClient.prototype.deleteDraftSchedule = function deleteDraftSchedule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteDraftSchedule, {
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

WFMClient.prototype.listShiftInstancesBySid = function listShiftInstancesBySid(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListShiftInstancesBySid, {
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

WFMClient.prototype.copyScheduleToSchedule = function copyScheduleToSchedule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CopyScheduleToSchedule, {
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

WFMClient.prototype.createShiftInstance = function createShiftInstance(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateShiftInstance, {
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

WFMClient.prototype.createShiftInstanceV2 = function createShiftInstanceV2(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateShiftInstanceV2, {
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

WFMClient.prototype.createShiftInstanceWithSegments = function createShiftInstanceWithSegments(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateShiftInstanceWithSegments, {
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

WFMClient.prototype.splitShiftInstance = function splitShiftInstance(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.SplitShiftInstance, {
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

WFMClient.prototype.swapShiftInstances = function swapShiftInstances(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.SwapShiftInstances, {
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

WFMClient.prototype.updateShiftInstance = function updateShiftInstance(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateShiftInstance, {
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

WFMClient.prototype.updateShiftInstanceV2 = function updateShiftInstanceV2(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateShiftInstanceV2, {
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

WFMClient.prototype.updateShiftInstanceWithSegments = function updateShiftInstanceWithSegments(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateShiftInstanceWithSegments, {
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

WFMClient.prototype.copyShiftInstancesToSchedule = function copyShiftInstancesToSchedule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CopyShiftInstancesToSchedule, {
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

WFMClient.prototype.listShiftInstanceSidsForAgent = function listShiftInstanceSidsForAgent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListShiftInstanceSidsForAgent, {
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

WFMClient.prototype.listShiftInstanceSidsForSchedule = function listShiftInstanceSidsForSchedule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListShiftInstanceSidsForSchedule, {
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

WFMClient.prototype.listShiftSegmentsByShiftInstanceSids = function listShiftSegmentsByShiftInstanceSids(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListShiftSegmentsByShiftInstanceSids, {
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

WFMClient.prototype.setSchedulingTarget = function setSchedulingTarget(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.SetSchedulingTarget, {
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

WFMClient.prototype.getSchedulingTarget = function getSchedulingTarget(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.GetSchedulingTarget, {
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

WFMClient.prototype.deleteSchedulingTarget = function deleteSchedulingTarget(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteSchedulingTarget, {
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

WFMClient.prototype.getDefaultSchedulingTarget = function getDefaultSchedulingTarget(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.GetDefaultSchedulingTarget, {
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

WFMClient.prototype.setDefaultSchedulingTarget = function setDefaultSchedulingTarget(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.SetDefaultSchedulingTarget, {
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

WFMClient.prototype.getPerformanceMetrics = function getPerformanceMetrics(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.GetPerformanceMetrics, {
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

WFMClient.prototype.listRequiredCallsIntervals = function listRequiredCallsIntervals(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListRequiredCallsIntervals, {
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

WFMClient.prototype.createTourPattern = function createTourPattern(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateTourPattern, {
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

WFMClient.prototype.getTourPatternDiagnostics = function getTourPatternDiagnostics(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.GetTourPatternDiagnostics, {
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

WFMClient.prototype.upsertTourPatternWithMembers = function upsertTourPatternWithMembers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpsertTourPatternWithMembers, {
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

WFMClient.prototype.getTourPattern = function getTourPattern(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.GetTourPattern, {
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

WFMClient.prototype.getTourPatternWithMembers = function getTourPatternWithMembers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.GetTourPatternWithMembers, {
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

WFMClient.prototype.deleteTourPattern = function deleteTourPattern(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteTourPattern, {
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

WFMClient.prototype.createTourWeekPattern = function createTourWeekPattern(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateTourWeekPattern, {
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

WFMClient.prototype.listTourWeekPatterns = function listTourWeekPatterns(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListTourWeekPatterns, {
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

WFMClient.prototype.deleteTourWeekPatterns = function deleteTourWeekPatterns(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteTourWeekPatterns, {
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

WFMClient.prototype.createTourShiftInstanceConfig = function createTourShiftInstanceConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateTourShiftInstanceConfig, {
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

WFMClient.prototype.updateTourShiftInstanceConfig = function updateTourShiftInstanceConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateTourShiftInstanceConfig, {
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

WFMClient.prototype.listTourShiftInstanceConfigs = function listTourShiftInstanceConfigs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListTourShiftInstanceConfigs, {
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

WFMClient.prototype.deleteTourShiftInstanceConfigs = function deleteTourShiftInstanceConfigs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteTourShiftInstanceConfigs, {
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

WFMClient.prototype.createTourShiftSegmentConfig = function createTourShiftSegmentConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateTourShiftSegmentConfig, {
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

WFMClient.prototype.updateTourShiftSegmentConfig = function updateTourShiftSegmentConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateTourShiftSegmentConfig, {
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

WFMClient.prototype.listTourShiftSegmentConfigs = function listTourShiftSegmentConfigs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListTourShiftSegmentConfigs, {
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

WFMClient.prototype.deleteTourShiftSegmentConfigs = function deleteTourShiftSegmentConfigs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteTourShiftSegmentConfigs, {
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

WFMClient.prototype.createTourAgentCollection = function createTourAgentCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateTourAgentCollection, {
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

WFMClient.prototype.updateTourAgentCollection = function updateTourAgentCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateTourAgentCollection, {
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

WFMClient.prototype.listTourAgentCollections = function listTourAgentCollections(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListTourAgentCollections, {
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

WFMClient.prototype.deleteTourAgentCollections = function deleteTourAgentCollections(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteTourAgentCollections, {
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

WFMClient.prototype.createTourAgentCollectionWFMAgents = function createTourAgentCollectionWFMAgents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateTourAgentCollectionWFMAgents, {
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

WFMClient.prototype.listTourAgentCollectionWFMAgents = function listTourAgentCollectionWFMAgents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListTourAgentCollectionWFMAgents, {
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

WFMClient.prototype.deleteTourAgentCollectionWFMAgents = function deleteTourAgentCollectionWFMAgents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteTourAgentCollectionWFMAgents, {
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

WFMClient.prototype.generateTourWeekPatterns = function generateTourWeekPatterns(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.GenerateTourWeekPatterns, {
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

WFMClient.prototype.listValidAgentsForReplacement = function listValidAgentsForReplacement(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListValidAgentsForReplacement, {
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

WFMClient.prototype.replaceAgentOnSchedule = function replaceAgentOnSchedule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ReplaceAgentOnSchedule, {
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

WFMClient.prototype.replaceAgentOnScheduleV1 = function replaceAgentOnScheduleV1(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ReplaceAgentOnScheduleV1, {
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

WFMClient.prototype.removeAgentFromSchedule = function removeAgentFromSchedule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.RemoveAgentFromSchedule, {
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

WFMClient.prototype.createPublishedShift = function createPublishedShift(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreatePublishedShift, {
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

WFMClient.prototype.createPublishedShiftWithSegments = function createPublishedShiftWithSegments(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreatePublishedShiftWithSegments, {
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

WFMClient.prototype.updatePublishedShift = function updatePublishedShift(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdatePublishedShift, {
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

WFMClient.prototype.updatePublishedShiftWithSegments = function updatePublishedShiftWithSegments(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdatePublishedShiftWithSegments, {
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

WFMClient.prototype.splitPublishedShift = function splitPublishedShift(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.SplitPublishedShift, {
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

WFMClient.prototype.swapPublishedShifts = function swapPublishedShifts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.SwapPublishedShifts, {
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

WFMClient.prototype.deletePublishedShifts = function deletePublishedShifts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeletePublishedShifts, {
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

WFMClient.prototype.replaceAgentOnPublishedSchedule = function replaceAgentOnPublishedSchedule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ReplaceAgentOnPublishedSchedule, {
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

WFMClient.prototype.removeAgentFromPublishedSchedule = function removeAgentFromPublishedSchedule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.RemoveAgentFromPublishedSchedule, {
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

WFMClient.prototype.copyShiftsToPublishedSchedule = function copyShiftsToPublishedSchedule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CopyShiftsToPublishedSchedule, {
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

WFMClient.prototype.createAgentLeavePetition = function createAgentLeavePetition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateAgentLeavePetition, {
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

WFMClient.prototype.listAgentLeavePetitions = function listAgentLeavePetitions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListAgentLeavePetitions, {
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

WFMClient.prototype.archiveAgentLeavePetition = function archiveAgentLeavePetition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ArchiveAgentLeavePetition, {
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

WFMClient.prototype.resolveAgentLeavePetition = function resolveAgentLeavePetition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ResolveAgentLeavePetition, {
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

WFMClient.prototype.cancelAgentLeavePetition = function cancelAgentLeavePetition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CancelAgentLeavePetition, {
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

WFMClient.prototype.helloWorldWFMAdherence = function helloWorldWFMAdherence(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.HelloWorldWFMAdherence, {
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

WFMClient.prototype.listAdherenceDiagnostics = function listAdherenceDiagnostics(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListAdherenceDiagnostics, {
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

WFMClient.prototype.listAgentStatesForDay = function listAgentStatesForDay(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListAgentStatesForDay, {
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

WFMClient.prototype.listRealTimeManagementStates = function listRealTimeManagementStates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListRealTimeManagementStates, {
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

WFMClient.prototype.listAdherenceAgentStates = function listAdherenceAgentStates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListAdherenceAgentStates, {
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

WFMClient.prototype.listAdherenceAgentStateViolations = function listAdherenceAgentStateViolations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListAdherenceAgentStateViolations, {
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

WFMClient.prototype.resolveAdherenceAgentStateViolation = function resolveAdherenceAgentStateViolation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ResolveAdherenceAgentStateViolation, {
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

WFMClient.prototype.upsertRealTimeManagementStateColor = function upsertRealTimeManagementStateColor(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpsertRealTimeManagementStateColor, {
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

WFMClient.prototype.listRealTimeManagementStateColors = function listRealTimeManagementStateColors(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListRealTimeManagementStateColors, {
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

WFMClient.prototype.deleteRealTimeManagementStateColor = function deleteRealTimeManagementStateColor(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteRealTimeManagementStateColor, {
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

WFMClient.prototype.createRgbaColor = function createRgbaColor(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateRgbaColor, {
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

WFMClient.prototype.listRgbaColors = function listRgbaColors(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListRgbaColors, {
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

WFMClient.prototype.updateRgbaColor = function updateRgbaColor(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateRgbaColor, {
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

WFMClient.prototype.deleteRgbaColor = function deleteRgbaColor(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteRgbaColor, {
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

WFMClient.prototype.createAdherenceRuleNotificationConfig = function createAdherenceRuleNotificationConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateAdherenceRuleNotificationConfig, {
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

WFMClient.prototype.updateAdherenceRuleNotificationConfig = function updateAdherenceRuleNotificationConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateAdherenceRuleNotificationConfig, {
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

WFMClient.prototype.createAdherenceRuleNotificationConfigEntry = function createAdherenceRuleNotificationConfigEntry(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateAdherenceRuleNotificationConfigEntry, {
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

WFMClient.prototype.updateAdherenceRuleNotificationConfigEntry = function updateAdherenceRuleNotificationConfigEntry(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateAdherenceRuleNotificationConfigEntry, {
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

WFMClient.prototype.deleteAdherenceRuleNotificationConfigEntry = function deleteAdherenceRuleNotificationConfigEntry(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteAdherenceRuleNotificationConfigEntry, {
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

WFMClient.prototype.listAdherenceRuleNotificationConfigs = function listAdherenceRuleNotificationConfigs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListAdherenceRuleNotificationConfigs, {
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

WFMClient.prototype.createAdherenceDepartmentalRule = function createAdherenceDepartmentalRule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateAdherenceDepartmentalRule, {
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

WFMClient.prototype.updateAdherenceDepartmentalRule = function updateAdherenceDepartmentalRule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateAdherenceDepartmentalRule, {
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

WFMClient.prototype.createAdherenceDepartmentalRuleClause = function createAdherenceDepartmentalRuleClause(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateAdherenceDepartmentalRuleClause, {
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

WFMClient.prototype.updateAdherenceDepartmentalRuleClause = function updateAdherenceDepartmentalRuleClause(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateAdherenceDepartmentalRuleClause, {
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

WFMClient.prototype.deleteAdherenceDepartmentalRuleClause = function deleteAdherenceDepartmentalRuleClause(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteAdherenceDepartmentalRuleClause, {
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

WFMClient.prototype.listAdherenceDepartmentalRules = function listAdherenceDepartmentalRules(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListAdherenceDepartmentalRules, {
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

WFMClient.prototype.createAdherenceAgentRule = function createAdherenceAgentRule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateAdherenceAgentRule, {
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

WFMClient.prototype.updateAdherenceAgentRule = function updateAdherenceAgentRule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateAdherenceAgentRule, {
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

WFMClient.prototype.createAdherenceAgentRuleClause = function createAdherenceAgentRuleClause(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.CreateAdherenceAgentRuleClause, {
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

WFMClient.prototype.updateAdherenceAgentRuleClause = function updateAdherenceAgentRuleClause(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.UpdateAdherenceAgentRuleClause, {
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

WFMClient.prototype.listAdherenceAgentRules = function listAdherenceAgentRules(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.ListAdherenceAgentRules, {
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

WFMClient.prototype.deleteAdherenceAgentRuleClause = function deleteAdherenceAgentRuleClause(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.DeleteAdherenceAgentRuleClause, {
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

WFMClient.prototype.agentGetSchedule = function agentGetSchedule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.AgentGetSchedule, {
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

WFMClient.prototype.agentListLeavePetitions = function agentListLeavePetitions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.AgentListLeavePetitions, {
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

WFMClient.prototype.agentCreateLeavePetition = function agentCreateLeavePetition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.AgentCreateLeavePetition, {
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

WFMClient.prototype.agentCancelLeavePetition = function agentCancelLeavePetition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.AgentCancelLeavePetition, {
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

WFMClient.prototype.setAgentStateSimulationLevelForOrg = function setAgentStateSimulationLevelForOrg(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WFM.SetAgentStateSimulationLevelForOrg, {
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

exports.WFMClient = WFMClient;

