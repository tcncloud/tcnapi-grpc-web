// package: api.v1alpha1.wfm
// file: api/v1alpha1/wfm/wfm.proto

var api_v1alpha1_wfm_wfm_pb = require("../../../api/v1alpha1/wfm/wfm_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WFM = (function () {
  function WFM() {}
  WFM.serviceName = "api.v1alpha1.wfm.WFM";
  return WFM;
}());

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

WFM.CreateAgentGroup = {
  methodName: "CreateAgentGroup",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateAgentGroupReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateAgentGroupRes
};

WFM.UpdateAgentGroup = {
  methodName: "UpdateAgentGroup",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.UpdateAgentGroupReq,
  responseType: api_v1alpha1_wfm_wfm_pb.UpdateAgentGroupRes
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

WFM.DeleteWFMAgentMemberships = {
  methodName: "DeleteWFMAgentMemberships",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteWFMAgentMembershipsReq,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteWFMAgentMembershipsRes
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

WFM.BuildDraftSchedule = {
  methodName: "BuildDraftSchedule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.BuildDraftScheduleReq,
  responseType: api_v1alpha1_wfm_wfm_pb.BuildDraftScheduleRes
};

WFM.PublishDraftSchedule = {
  methodName: "PublishDraftSchedule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.PublishDraftScheduleReq,
  responseType: api_v1alpha1_wfm_wfm_pb.PublishDraftScheduleRes
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

WFM.DeleteDraftSchedule = {
  methodName: "DeleteDraftSchedule",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.DeleteDraftScheduleReq,
  responseType: api_v1alpha1_wfm_wfm_pb.DeleteDraftScheduleRes
};

WFM.CreateShiftInstance = {
  methodName: "CreateShiftInstance",
  service: WFM,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceReq,
  responseType: api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceRes
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

exports.WFM = WFM;

function WFMClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

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

exports.WFMClient = WFMClient;

