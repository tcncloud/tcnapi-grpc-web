// package: api.v1alpha1.wfm
// file: api/v1alpha1/wfm/wfm.proto

import * as api_v1alpha1_wfm_wfm_pb from "../../../api/v1alpha1/wfm/wfm_pb";
import {grpc} from "@improbable-eng/grpc-web";

type WFMPerformInitialClientSetup = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.PerformInitialClientSetupRequest;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.PerformInitialClientSetupResponse;
};

type WFMListSkillProfiles = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListSkillProfilesReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListSkillProfilesRes;
};

type WFMUpdateSkillProfile = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileRes;
};

type WFMUpdateSkillProfileProficiencies = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileProficienciesReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileProficienciesRes;
};

type WFMGetSkillProfile = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.GetSkillProfileReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.GetSkillProfileRes;
};

type WFMResyncSkillProfiles = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ResyncSkillProfilesReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ResyncSkillProfilesRes;
};

type WFMGetLastSkillProfileResyncDate = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.GetLastSkillProfileResyncDateReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.GetLastSkillProfileResyncDateRes;
};

type WFMUpsertForecastingParameters = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpsertForecastingParametersReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpsertForecastingParametersRes;
};

type WFMGetForecastingParameters = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.GetForecastingParametersReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.GetForecastingParametersRes;
};

type WFMGetClientHistoryCacheInfo = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.GetClientHistoryCacheInfoReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.GetClientHistoryCacheInfoRes;
};

type WFMListHistoricalData = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListHistoricalDataReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListHistoricalDataRes;
};

type WFMUpsertHistoricalDataDelta = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpsertHistoricalDataDeltaReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpsertHistoricalDataDeltaRes;
};

type WFMUpsertHistoricalDataDeltas = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpsertHistoricalDataDeltasReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpsertHistoricalDataDeltasRes;
};

type WFMListSkills = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListSkillsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListSkillsRes;
};

type WFMBuildCallProfileTemplateForSkillProfile = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.BuildCallProfileTemplateForSkillProfileReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.BuildCallProfileTemplateForSkillProfileRes;
};

type WFMBuildCallProfileTemplate = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.BuildCallProfileTemplateReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.BuildCallProfileTemplateRes;
};

type WFMCreateInactiveSkillProfileMapping = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateInactiveSkillProfileMappingReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateInactiveSkillProfileMappingRes;
};

type WFMGetAvailableRegressionForecasterModelTypes = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.GetAvailableRegressionForecasterModelTypesReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.GetAvailableRegressionForecasterModelTypesRes;
};

type WFMDisconnectInactiveSkillProfileMapping = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.DisconnectInactiveSkillProfileMappingReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.DisconnectInactiveSkillProfileMappingRes;
};

type WFMCreateSkillProfileGroup = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateSkillProfileGroupReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateSkillProfileGroupRes;
};

type WFMUpdateSkillProfileGroup = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileGroupReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileGroupRes;
};

type WFMListSkillProfileGroups = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListSkillProfileGroupsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListSkillProfileGroupsRes;
};

type WFMUpdateSkillProfileGroupAssociations = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileGroupAssociationsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileGroupAssociationsRes;
};

type WFMDeleteHistoricalDataDeltas = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.DeleteHistoricalDataDeltasReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.DeleteHistoricalDataDeltasRes;
};

type WFMListTopSkillProfiles = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListTopSkillProfilesReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListTopSkillProfilesRes;
};

type WFMGetSkillProfilesCount = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.GetSkillProfilesCountReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.GetSkillProfilesCountRes;
};

type WFMBuildProfileForecastByInterval = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.BuildProfileForecastByIntervalReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CallDataByInterval;
};

type WFMBuildProfileForecastByIntervalWithStats = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.BuildProfileForecastByIntervalWithStatsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.BuildProfileForecastByIntervalWithStatsRes;
};

type WFMUpsertProfileForecast = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpsertProfileForecastReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpsertProfileForecastRes;
};

type WFMCreateCallProfileTemplate = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateCallProfileTemplateReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateCallProfileTemplateRes;
};

type WFMDeleteCallProfileTemplate = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.DeleteCallProfileTemplateReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.DeleteCallProfileTemplateRes;
};

type WFMCreateRegressionTemplate = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateRegressionTemplateReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateRegressionTemplateRes;
};

type WFMDeleteRegressionTemplate = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.DeleteRegressionTemplateReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.DeleteRegressionTemplateRes;
};

type WFMListRegressionTemplates = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListRegressionTemplatesReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListRegressionTemplatesRes;
};

type WFMListForecastIntervalsForSkillProfile = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListForecastIntervalsForSkillProfileReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CallDataByInterval;
};

type WFMListForecastIntervals = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListForecastIntervalsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CallDataByInterval;
};

type WFMBuildRegressionForecastByInterval = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.BuildRegressionForecastByIntervalReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CallDataByInterval;
};

type WFMBuildRegressionForecastByIntervalWithStats = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.BuildRegressionForecastByIntervalWithStatsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.BuildRegressionForecastByIntervalWithStatsRes;
};

type WFMListCallProfileTemplates = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListCallProfileTemplatesReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListCallProfileTemplatesRes;
};

type WFMUpsertRegressionForecast = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpsertRegressionForecastReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpsertRegressionForecastRes;
};

type WFMUpsertForecastDataDelta = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpsertForecastDataDeltaReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpsertForecastDataDeltaRes;
};

type WFMUpsertForecastDataDeltas = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpsertForecastDataDeltasReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpsertForecastDataDeltasRes;
};

type WFMDeleteForecastIntervals = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.DeleteForecastIntervalsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.DeleteForecastIntervalsRes;
};

type WFMListHistoricalDataForAllSkillProfiles = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListHistoricalDataForAllSkillProfilesReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListHistoricalDataForAllSkillProfilesRes;
};

type WFMBuildDOWAndMOYProfiles = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.BuildDOWAndMOYProfilesReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.BuildDOWAndMOYProfilesRes;
};

type WFMCalculateTrainingDataAveragesForSkillProfile = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CalculateTrainingDataAveragesForSkillProfileReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CalculateTrainingDataAveragesForSkillProfileRes;
};

type WFMUpdateSkillProfileAveragesUsingHistoricalData = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileAveragesUsingHistoricalDataReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileAveragesUsingHistoricalDataRes;
};

type WFMUpdateCallCenterNode = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateCallCenterNodeReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateCallCenterNodeRes;
};

type WFMCreateClientNode = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateClientNodeReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateClientNodeRes;
};

type WFMUpdateClientNode = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateClientNodeReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateClientNodeRes;
};

type WFMCreateLocationNode = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateLocationNodeReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateLocationNodeRes;
};

type WFMUpdateLocationNode = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateLocationNodeReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateLocationNodeRes;
};

type WFMCreateProgramNode = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateProgramNodeReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateProgramNodeRes;
};

type WFMUpdateProgramNode = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateProgramNodeReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateProgramNodeRes;
};

type WFMListProgramNodesBySid = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListProgramNodesBySidReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListProgramNodesBySidRes;
};

type WFMCreateConstraintRule = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateConstraintRuleReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateConstraintRuleRes;
};

type WFMUpdateConstraintRule = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateConstraintRuleReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateConstraintRuleRes;
};

type WFMDeleteConstraintRule = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.DeleteConstraintRuleReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.DeleteConstraintRuleRes;
};

type WFMCreateNonSkillActivity = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateNonSkillActivityReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateNonSkillActivityRes;
};

type WFMUpdateNonSkillActivity = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateNonSkillActivityReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateNonSkillActivityRes;
};

type WFMListNonSkillActivities = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListNonSkillActivitiesReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListNonSkillActivitiesRes;
};

type WFMListNonSkillActivityAssociations = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListNonSkillActivityAssociationsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListNonSkillActivityAssociationsRes;
};

type WFMListCandidateSchedulingActivities = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListCandidateSchedulingActivitiesReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListCandidateSchedulingActivitiesRes;
};

type WFMCreateAgentGroup = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateAgentGroupReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateAgentGroupRes;
};

type WFMListAgentScheduleGroups = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListAgentScheduleGroupsRequest;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListAgentScheduleGroupsResponse;
};

type WFMUpdateAgentGroup = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateAgentGroupReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateAgentGroupRes;
};

type WFMCreateUnassignedWFMAgent = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateUnassignedWFMAgentRequest;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateUnassignedWFMAgentResponse;
};

type WFMUpdateWFMAgent = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateWFMAgentReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateWFMAgentRes;
};

type WFMListAllWFMAgents = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListAllWFMAgentsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListAllWFMAgentsRes;
};

type WFMListCandidateWFMAgents = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListCandidateWFMAgentsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListCandidateWFMAgentsRes;
};

type WFMListUngroupedWFMAgents = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListUngroupedWFMAgentsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListUngroupedWFMAgentsRes;
};

type WFMListWFMAgentSids = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListWFMAgentSidsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListWFMAgentSidsRes;
};

type WFMListUnassignedWFMAgents = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListUnassignedWFMAgentsRequest;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListUnassignedWFMAgentsResponse;
};

type WFMListWFMAgentsAssociatedWithAgentGroup = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListWFMAgentsAssociatedWithAgentGroupReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListWFMAgentsAssociatedWithAgentGroupRes;
};

type WFMCreateWFMAgentMemberships = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateWFMAgentMembershipsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateWFMAgentMembershipsRes;
};

type WFMCopyWFMAgentMemberships = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CopyWFMAgentMembershipsRequest;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CopyWFMAgentMembershipsResponse;
};

type WFMDeleteWFMAgentMemberships = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.DeleteWFMAgentMembershipsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.DeleteWFMAgentMembershipsRes;
};

type WFMDeleteWFMAgentsMemberships = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.DeleteWFMAgentsMembershipsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.DeleteWFMAgentsMembershipsRes;
};

type WFMRemoveAgentFromFutureShifts = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.RemoveAgentFromFutureShiftsRequest;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.RemoveAgentFromFutureShiftsResponse;
};

type WFMBuildAgentDiagnostics = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.BuildAgentDiagnosticsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.BuildAgentDiagnosticsRes;
};

type WFMCreateShiftTemplate = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateShiftTemplateReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateShiftTemplateRes;
};

type WFMUpdateShiftTemplate = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateShiftTemplateReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateShiftTemplateRes;
};

type WFMListShiftTemplatesBySids = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListShiftTemplatesBySidsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListShiftTemplatesBySidsRes;
};

type WFMBuildShiftTemplateDiagnostics = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.BuildShiftTemplateDiagnosticsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.BuildShiftTemplateDiagnosticsRes;
};

type WFMCreatePlacementRule = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreatePlacementRuleReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreatePlacementRuleRes;
};

type WFMUpdatePlacementRule = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdatePlacementRuleReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdatePlacementRuleRes;
};

type WFMDeletePlacementRule = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.DeletePlacementRuleReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.DeletePlacementRuleRes;
};

type WFMCreateOpenTimesPattern = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateOpenTimesPatternReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateOpenTimesPatternRes;
};

type WFMUpdateOpenTimesPattern = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateOpenTimesPatternReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateOpenTimesPatternRes;
};

type WFMDeleteOpenTimesPattern = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.DeleteOpenTimesPatternReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.DeleteOpenTimesPatternRes;
};

type WFMGetOpenTimesBitmaps = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.GetOpenTimesBitmapsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.GetOpenTimesBitmapsRes;
};

type WFMListOpenDateRangesForNodeOpenTimesBitmaps = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListOpenDateRangesForNodeOpenTimesBitmapsRequest;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListOpenDateRangesForNodeOpenTimesBitmapsResponse;
};

type WFMCreateAgentAvailabilityPattern = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateAgentAvailabilityPatternReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateAgentAvailabilityPatternRes;
};

type WFMUpdateAgentAvailabilityPattern = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateAgentAvailabilityPatternReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateAgentAvailabilityPatternRes;
};

type WFMDeleteAgentAvailabilityPattern = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.DeleteAgentAvailabilityPatternReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.DeleteAgentAvailabilityPatternRes;
};

type WFMGetAvailabilityBitmaps = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.GetAvailabilityBitmapsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.GetAvailabilityBitmapsRes;
};

type WFMUpsertNonSkillActivityAssociation = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpsertNonSkillActivityAssociationReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpsertNonSkillActivityAssociationRes;
};

type WFMCreateSkillProficiencies = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateSkillProficienciesReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateSkillProficienciesRes;
};

type WFMUpdateSkillProficiencies = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateSkillProficienciesReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateSkillProficienciesRes;
};

type WFMDeleteSkillProficiency = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.DeleteSkillProficiencyReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.DeleteSkillProficiencyRes;
};

type WFMCopyScenario = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CopyScenarioReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CopyScenarioRes;
};

type WFMCreateScheduleScenarioWithNodes = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateScheduleScenarioWithNodesReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateScheduleScenarioWithNodesRes;
};

type WFMUpdateScheduleScenario = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateScheduleScenarioReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateScheduleScenarioRes;
};

type WFMListConfigEntities = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListConfigEntitiesReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListConfigEntitiesRes;
};

type WFMDeleteShiftInstances = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.DeleteShiftInstancesReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.DeleteShiftInstancesRes;
};

type WFMBuildNodeDiagnostics = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.BuildNodeDiagnosticsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.BuildNodeDiagnosticsRes;
};

type WFMBuildGlobalDiagnostics = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.BuildGlobalDiagnosticsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.BuildGlobalDiagnosticsRes;
};

type WFMGetPublishedSchedule = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.GetPublishedScheduleReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.GetPublishedScheduleRes;
};

type WFMGetPublishedScheduleRequiredCalls = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.GetPublishedScheduleRequiredCallsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.GetPublishedScheduleRequiredCallsRes;
};

type WFMGetDraftScheduleRequiredCalls = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.GetDraftScheduleRequiredCallsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.GetDraftScheduleRequiredCallsRes;
};

type WFMCreateDraftSchedule = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateDraftScheduleReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateDraftScheduleRes;
};

type WFMUpdateDraftSchedule = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateDraftScheduleReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateDraftScheduleRes;
};

type WFMBuildDraftSchedule = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.BuildDraftScheduleReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.BuildDraftScheduleRes;
};

type WFMPublishDraftSchedule = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.PublishDraftScheduleReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.PublishDraftScheduleRes;
};

type WFMResetDraftSchedule = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ResetDraftScheduleReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ResetDraftScheduleRes;
};

type WFMGetDraftSchedule = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.GetDraftScheduleReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.GetDraftScheduleRes;
};

type WFMListDraftSchedules = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListDraftSchedulesReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListDraftSchedulesRes;
};

type WFMClearSchedule = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ClearScheduleReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ClearScheduleRes;
};

type WFMDeleteDraftSchedule = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.DeleteDraftScheduleReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.DeleteDraftScheduleRes;
};

type WFMListShiftInstancesBySid = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListShiftInstancesBySidReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListShiftInstancesBySidRes;
};

type WFMCopyScheduleToSchedule = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CopyScheduleToScheduleReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CopyScheduleToScheduleRes;
};

type WFMCreateShiftInstance = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceRes;
};

type WFMCreateShiftInstanceV2 = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceV2Req;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceV2Res;
};

type WFMCreateShiftInstanceWithSegments = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceWithSegmentsRequest;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceWithSegmentsResponse;
};

type WFMSplitShiftInstance = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.SplitShiftInstanceReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.SplitShiftInstanceRes;
};

type WFMSwapShiftInstances = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.SwapShiftInstancesReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.SwapShiftInstancesRes;
};

type WFMUpdateShiftInstance = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateShiftInstanceReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateShiftInstanceRes;
};

type WFMUpdateShiftInstanceV2 = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateShiftInstanceV2Req;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateShiftInstanceV2Res;
};

type WFMUpdateShiftInstanceWithSegments = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateShiftInstanceWithSegmentsRequest;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateShiftInstanceWithSegmentsResponse;
};

type WFMCopyShiftInstancesToSchedule = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CopyShiftInstancesToScheduleReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CopyShiftInstancesToScheduleRes;
};

type WFMListShiftInstanceSidsForAgent = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListShiftInstanceSidsForAgentReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListShiftInstanceSidsForAgentRes;
};

type WFMListShiftSegmentsByShiftInstanceSids = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListShiftSegmentsByShiftInstanceSidsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListShiftSegmentsByShiftInstanceSidsRes;
};

type WFMSetSchedulingTarget = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.SetSchedulingTargetReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.SetSchedulingTargetRes;
};

type WFMGetSchedulingTarget = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.GetSchedulingTargetReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.GetSchedulingTargetRes;
};

type WFMDeleteSchedulingTarget = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.DeleteSchedulingTargetReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.DeleteSchedulingTargetRes;
};

type WFMGetDefaultSchedulingTarget = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.GetDefaultSchedulingTargetReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.GetDefaultSchedulingTargetRes;
};

type WFMSetDefaultSchedulingTarget = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.SetDefaultSchedulingTargetReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.SetDefaultSchedulingTargetRes;
};

type WFMGetPerformanceMetrics = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.GetPerformanceMetricsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.GetPerformanceMetricsRes;
};

type WFMListRequiredCallsIntervals = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListRequiredCallsIntervalsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListRequiredCallsIntervalsRes;
};

type WFMCreateTourPattern = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateTourPatternReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateTourPatternRes;
};

type WFMGetTourPatternDiagnostics = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.GetTourPatternDiagnosticsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.GetTourPatternDiagnosticsRes;
};

type WFMUpsertTourPatternWithMembers = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpsertTourPatternWithMembersReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpsertTourPatternWithMembersRes;
};

type WFMGetTourPattern = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.GetTourPatternReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.GetTourPatternRes;
};

type WFMGetTourPatternWithMembers = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.GetTourPatternWithMembersReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.GetTourPatternWithMembersRes;
};

type WFMDeleteTourPattern = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.DeleteTourPatternReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.DeleteTourPatternRes;
};

type WFMCreateTourWeekPattern = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateTourWeekPatternReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateTourWeekPatternRes;
};

type WFMListTourWeekPatterns = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListTourWeekPatternsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListTourWeekPatternsRes;
};

type WFMDeleteTourWeekPatterns = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.DeleteTourWeekPatternsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.DeleteTourWeekPatternsRes;
};

type WFMCreateTourShiftInstanceConfig = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateTourShiftInstanceConfigReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateTourShiftInstanceConfigRes;
};

type WFMUpdateTourShiftInstanceConfig = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateTourShiftInstanceConfigReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateTourShiftInstanceConfigRes;
};

type WFMListTourShiftInstanceConfigs = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListTourShiftInstanceConfigsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListTourShiftInstanceConfigsRes;
};

type WFMDeleteTourShiftInstanceConfigs = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.DeleteTourShiftInstanceConfigsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.DeleteTourShiftInstanceConfigsRes;
};

type WFMCreateTourShiftSegmentConfig = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateTourShiftSegmentConfigReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateTourShiftSegmentConfigRes;
};

type WFMUpdateTourShiftSegmentConfig = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateTourShiftSegmentConfigReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateTourShiftSegmentConfigRes;
};

type WFMListTourShiftSegmentConfigs = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListTourShiftSegmentConfigsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListTourShiftSegmentConfigsRes;
};

type WFMDeleteTourShiftSegmentConfigs = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.DeleteTourShiftSegmentConfigsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.DeleteTourShiftSegmentConfigsRes;
};

type WFMCreateTourAgentCollection = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateTourAgentCollectionReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateTourAgentCollectionRes;
};

type WFMUpdateTourAgentCollection = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.UpdateTourAgentCollectionReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.UpdateTourAgentCollectionRes;
};

type WFMListTourAgentCollections = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListTourAgentCollectionsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListTourAgentCollectionsRes;
};

type WFMDeleteTourAgentCollections = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.DeleteTourAgentCollectionsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.DeleteTourAgentCollectionsRes;
};

type WFMCreateTourAgentCollectionWFMAgents = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateTourAgentCollectionWFMAgentsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateTourAgentCollectionWFMAgentsRes;
};

type WFMListTourAgentCollectionWFMAgents = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListTourAgentCollectionWFMAgentsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListTourAgentCollectionWFMAgentsRes;
};

type WFMDeleteTourAgentCollectionWFMAgents = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.DeleteTourAgentCollectionWFMAgentsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.DeleteTourAgentCollectionWFMAgentsRes;
};

type WFMGenerateTourWeekPatterns = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.GenerateTourWeekPatternsReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.GenerateTourWeekPatternsRes;
};

type WFMListValidAgentsForReplacement = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListValidAgentsForReplacementReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListValidAgentsForReplacementRes;
};

type WFMReplaceAgentOnSchedule = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ReplaceAgentOnScheduleRes;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ReplaceAgentOnScheduleRes;
};

type WFMReplaceAgentOnScheduleV1 = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ReplaceAgentOnScheduleReq;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ReplaceAgentOnScheduleRes;
};

type WFMRemoveAgentFromSchedule = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.RemoveAgentFromScheduleRequest;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.RemoveAgentFromScheduleResponse;
};

type WFMCreateAgentLeavePetition = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.CreateAgentLeavePetitionRequest;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.CreateAgentLeavePetitionResponse;
};

type WFMListAgentLeavePetitions = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListAgentLeavePetitionsRequest;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListAgentLeavePetitionsResponse;
};

type WFMHelloWorldWFMAdherence = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.HelloWorldWFMAdherenceRequest;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.HelloWorldWFMAdherenceResponse;
};

type WFMListAgentStatesForDay = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListAgentStatesForDayRequest;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListAgentStatesForDayResponse;
};

type WFMListRealTimeManagementStates = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListRealTimeManagementStatesRequest;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListRealTimeManagementStatesResponse;
};

type WFMListRealTimeManagementStateColors = {
  readonly methodName: string;
  readonly service: typeof WFM;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_pb.ListRealTimeManagementStateColorsRequest;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_pb.ListRealTimeManagementStateColorsResponse;
};

export class WFM {
  static readonly serviceName: string;
  static readonly PerformInitialClientSetup: WFMPerformInitialClientSetup;
  static readonly ListSkillProfiles: WFMListSkillProfiles;
  static readonly UpdateSkillProfile: WFMUpdateSkillProfile;
  static readonly UpdateSkillProfileProficiencies: WFMUpdateSkillProfileProficiencies;
  static readonly GetSkillProfile: WFMGetSkillProfile;
  static readonly ResyncSkillProfiles: WFMResyncSkillProfiles;
  static readonly GetLastSkillProfileResyncDate: WFMGetLastSkillProfileResyncDate;
  static readonly UpsertForecastingParameters: WFMUpsertForecastingParameters;
  static readonly GetForecastingParameters: WFMGetForecastingParameters;
  static readonly GetClientHistoryCacheInfo: WFMGetClientHistoryCacheInfo;
  static readonly ListHistoricalData: WFMListHistoricalData;
  static readonly UpsertHistoricalDataDelta: WFMUpsertHistoricalDataDelta;
  static readonly UpsertHistoricalDataDeltas: WFMUpsertHistoricalDataDeltas;
  static readonly ListSkills: WFMListSkills;
  static readonly BuildCallProfileTemplateForSkillProfile: WFMBuildCallProfileTemplateForSkillProfile;
  static readonly BuildCallProfileTemplate: WFMBuildCallProfileTemplate;
  static readonly CreateInactiveSkillProfileMapping: WFMCreateInactiveSkillProfileMapping;
  static readonly GetAvailableRegressionForecasterModelTypes: WFMGetAvailableRegressionForecasterModelTypes;
  static readonly DisconnectInactiveSkillProfileMapping: WFMDisconnectInactiveSkillProfileMapping;
  static readonly CreateSkillProfileGroup: WFMCreateSkillProfileGroup;
  static readonly UpdateSkillProfileGroup: WFMUpdateSkillProfileGroup;
  static readonly ListSkillProfileGroups: WFMListSkillProfileGroups;
  static readonly UpdateSkillProfileGroupAssociations: WFMUpdateSkillProfileGroupAssociations;
  static readonly DeleteHistoricalDataDeltas: WFMDeleteHistoricalDataDeltas;
  static readonly ListTopSkillProfiles: WFMListTopSkillProfiles;
  static readonly GetSkillProfilesCount: WFMGetSkillProfilesCount;
  static readonly BuildProfileForecastByInterval: WFMBuildProfileForecastByInterval;
  static readonly BuildProfileForecastByIntervalWithStats: WFMBuildProfileForecastByIntervalWithStats;
  static readonly UpsertProfileForecast: WFMUpsertProfileForecast;
  static readonly CreateCallProfileTemplate: WFMCreateCallProfileTemplate;
  static readonly DeleteCallProfileTemplate: WFMDeleteCallProfileTemplate;
  static readonly CreateRegressionTemplate: WFMCreateRegressionTemplate;
  static readonly DeleteRegressionTemplate: WFMDeleteRegressionTemplate;
  static readonly ListRegressionTemplates: WFMListRegressionTemplates;
  static readonly ListForecastIntervalsForSkillProfile: WFMListForecastIntervalsForSkillProfile;
  static readonly ListForecastIntervals: WFMListForecastIntervals;
  static readonly BuildRegressionForecastByInterval: WFMBuildRegressionForecastByInterval;
  static readonly BuildRegressionForecastByIntervalWithStats: WFMBuildRegressionForecastByIntervalWithStats;
  static readonly ListCallProfileTemplates: WFMListCallProfileTemplates;
  static readonly UpsertRegressionForecast: WFMUpsertRegressionForecast;
  static readonly UpsertForecastDataDelta: WFMUpsertForecastDataDelta;
  static readonly UpsertForecastDataDeltas: WFMUpsertForecastDataDeltas;
  static readonly DeleteForecastIntervals: WFMDeleteForecastIntervals;
  static readonly ListHistoricalDataForAllSkillProfiles: WFMListHistoricalDataForAllSkillProfiles;
  static readonly BuildDOWAndMOYProfiles: WFMBuildDOWAndMOYProfiles;
  static readonly CalculateTrainingDataAveragesForSkillProfile: WFMCalculateTrainingDataAveragesForSkillProfile;
  static readonly UpdateSkillProfileAveragesUsingHistoricalData: WFMUpdateSkillProfileAveragesUsingHistoricalData;
  static readonly UpdateCallCenterNode: WFMUpdateCallCenterNode;
  static readonly CreateClientNode: WFMCreateClientNode;
  static readonly UpdateClientNode: WFMUpdateClientNode;
  static readonly CreateLocationNode: WFMCreateLocationNode;
  static readonly UpdateLocationNode: WFMUpdateLocationNode;
  static readonly CreateProgramNode: WFMCreateProgramNode;
  static readonly UpdateProgramNode: WFMUpdateProgramNode;
  static readonly ListProgramNodesBySid: WFMListProgramNodesBySid;
  static readonly CreateConstraintRule: WFMCreateConstraintRule;
  static readonly UpdateConstraintRule: WFMUpdateConstraintRule;
  static readonly DeleteConstraintRule: WFMDeleteConstraintRule;
  static readonly CreateNonSkillActivity: WFMCreateNonSkillActivity;
  static readonly UpdateNonSkillActivity: WFMUpdateNonSkillActivity;
  static readonly ListNonSkillActivities: WFMListNonSkillActivities;
  static readonly ListNonSkillActivityAssociations: WFMListNonSkillActivityAssociations;
  static readonly ListCandidateSchedulingActivities: WFMListCandidateSchedulingActivities;
  static readonly CreateAgentGroup: WFMCreateAgentGroup;
  static readonly ListAgentScheduleGroups: WFMListAgentScheduleGroups;
  static readonly UpdateAgentGroup: WFMUpdateAgentGroup;
  static readonly CreateUnassignedWFMAgent: WFMCreateUnassignedWFMAgent;
  static readonly UpdateWFMAgent: WFMUpdateWFMAgent;
  static readonly ListAllWFMAgents: WFMListAllWFMAgents;
  static readonly ListCandidateWFMAgents: WFMListCandidateWFMAgents;
  static readonly ListUngroupedWFMAgents: WFMListUngroupedWFMAgents;
  static readonly ListWFMAgentSids: WFMListWFMAgentSids;
  static readonly ListUnassignedWFMAgents: WFMListUnassignedWFMAgents;
  static readonly ListWFMAgentsAssociatedWithAgentGroup: WFMListWFMAgentsAssociatedWithAgentGroup;
  static readonly CreateWFMAgentMemberships: WFMCreateWFMAgentMemberships;
  static readonly CopyWFMAgentMemberships: WFMCopyWFMAgentMemberships;
  static readonly DeleteWFMAgentMemberships: WFMDeleteWFMAgentMemberships;
  static readonly DeleteWFMAgentsMemberships: WFMDeleteWFMAgentsMemberships;
  static readonly RemoveAgentFromFutureShifts: WFMRemoveAgentFromFutureShifts;
  static readonly BuildAgentDiagnostics: WFMBuildAgentDiagnostics;
  static readonly CreateShiftTemplate: WFMCreateShiftTemplate;
  static readonly UpdateShiftTemplate: WFMUpdateShiftTemplate;
  static readonly ListShiftTemplatesBySids: WFMListShiftTemplatesBySids;
  static readonly BuildShiftTemplateDiagnostics: WFMBuildShiftTemplateDiagnostics;
  static readonly CreatePlacementRule: WFMCreatePlacementRule;
  static readonly UpdatePlacementRule: WFMUpdatePlacementRule;
  static readonly DeletePlacementRule: WFMDeletePlacementRule;
  static readonly CreateOpenTimesPattern: WFMCreateOpenTimesPattern;
  static readonly UpdateOpenTimesPattern: WFMUpdateOpenTimesPattern;
  static readonly DeleteOpenTimesPattern: WFMDeleteOpenTimesPattern;
  static readonly GetOpenTimesBitmaps: WFMGetOpenTimesBitmaps;
  static readonly ListOpenDateRangesForNodeOpenTimesBitmaps: WFMListOpenDateRangesForNodeOpenTimesBitmaps;
  static readonly CreateAgentAvailabilityPattern: WFMCreateAgentAvailabilityPattern;
  static readonly UpdateAgentAvailabilityPattern: WFMUpdateAgentAvailabilityPattern;
  static readonly DeleteAgentAvailabilityPattern: WFMDeleteAgentAvailabilityPattern;
  static readonly GetAvailabilityBitmaps: WFMGetAvailabilityBitmaps;
  static readonly UpsertNonSkillActivityAssociation: WFMUpsertNonSkillActivityAssociation;
  static readonly CreateSkillProficiencies: WFMCreateSkillProficiencies;
  static readonly UpdateSkillProficiencies: WFMUpdateSkillProficiencies;
  static readonly DeleteSkillProficiency: WFMDeleteSkillProficiency;
  static readonly CopyScenario: WFMCopyScenario;
  static readonly CreateScheduleScenarioWithNodes: WFMCreateScheduleScenarioWithNodes;
  static readonly UpdateScheduleScenario: WFMUpdateScheduleScenario;
  static readonly ListConfigEntities: WFMListConfigEntities;
  static readonly DeleteShiftInstances: WFMDeleteShiftInstances;
  static readonly BuildNodeDiagnostics: WFMBuildNodeDiagnostics;
  static readonly BuildGlobalDiagnostics: WFMBuildGlobalDiagnostics;
  static readonly GetPublishedSchedule: WFMGetPublishedSchedule;
  static readonly GetPublishedScheduleRequiredCalls: WFMGetPublishedScheduleRequiredCalls;
  static readonly GetDraftScheduleRequiredCalls: WFMGetDraftScheduleRequiredCalls;
  static readonly CreateDraftSchedule: WFMCreateDraftSchedule;
  static readonly UpdateDraftSchedule: WFMUpdateDraftSchedule;
  static readonly BuildDraftSchedule: WFMBuildDraftSchedule;
  static readonly PublishDraftSchedule: WFMPublishDraftSchedule;
  static readonly ResetDraftSchedule: WFMResetDraftSchedule;
  static readonly GetDraftSchedule: WFMGetDraftSchedule;
  static readonly ListDraftSchedules: WFMListDraftSchedules;
  static readonly ClearSchedule: WFMClearSchedule;
  static readonly DeleteDraftSchedule: WFMDeleteDraftSchedule;
  static readonly ListShiftInstancesBySid: WFMListShiftInstancesBySid;
  static readonly CopyScheduleToSchedule: WFMCopyScheduleToSchedule;
  static readonly CreateShiftInstance: WFMCreateShiftInstance;
  static readonly CreateShiftInstanceV2: WFMCreateShiftInstanceV2;
  static readonly CreateShiftInstanceWithSegments: WFMCreateShiftInstanceWithSegments;
  static readonly SplitShiftInstance: WFMSplitShiftInstance;
  static readonly SwapShiftInstances: WFMSwapShiftInstances;
  static readonly UpdateShiftInstance: WFMUpdateShiftInstance;
  static readonly UpdateShiftInstanceV2: WFMUpdateShiftInstanceV2;
  static readonly UpdateShiftInstanceWithSegments: WFMUpdateShiftInstanceWithSegments;
  static readonly CopyShiftInstancesToSchedule: WFMCopyShiftInstancesToSchedule;
  static readonly ListShiftInstanceSidsForAgent: WFMListShiftInstanceSidsForAgent;
  static readonly ListShiftSegmentsByShiftInstanceSids: WFMListShiftSegmentsByShiftInstanceSids;
  static readonly SetSchedulingTarget: WFMSetSchedulingTarget;
  static readonly GetSchedulingTarget: WFMGetSchedulingTarget;
  static readonly DeleteSchedulingTarget: WFMDeleteSchedulingTarget;
  static readonly GetDefaultSchedulingTarget: WFMGetDefaultSchedulingTarget;
  static readonly SetDefaultSchedulingTarget: WFMSetDefaultSchedulingTarget;
  static readonly GetPerformanceMetrics: WFMGetPerformanceMetrics;
  static readonly ListRequiredCallsIntervals: WFMListRequiredCallsIntervals;
  static readonly CreateTourPattern: WFMCreateTourPattern;
  static readonly GetTourPatternDiagnostics: WFMGetTourPatternDiagnostics;
  static readonly UpsertTourPatternWithMembers: WFMUpsertTourPatternWithMembers;
  static readonly GetTourPattern: WFMGetTourPattern;
  static readonly GetTourPatternWithMembers: WFMGetTourPatternWithMembers;
  static readonly DeleteTourPattern: WFMDeleteTourPattern;
  static readonly CreateTourWeekPattern: WFMCreateTourWeekPattern;
  static readonly ListTourWeekPatterns: WFMListTourWeekPatterns;
  static readonly DeleteTourWeekPatterns: WFMDeleteTourWeekPatterns;
  static readonly CreateTourShiftInstanceConfig: WFMCreateTourShiftInstanceConfig;
  static readonly UpdateTourShiftInstanceConfig: WFMUpdateTourShiftInstanceConfig;
  static readonly ListTourShiftInstanceConfigs: WFMListTourShiftInstanceConfigs;
  static readonly DeleteTourShiftInstanceConfigs: WFMDeleteTourShiftInstanceConfigs;
  static readonly CreateTourShiftSegmentConfig: WFMCreateTourShiftSegmentConfig;
  static readonly UpdateTourShiftSegmentConfig: WFMUpdateTourShiftSegmentConfig;
  static readonly ListTourShiftSegmentConfigs: WFMListTourShiftSegmentConfigs;
  static readonly DeleteTourShiftSegmentConfigs: WFMDeleteTourShiftSegmentConfigs;
  static readonly CreateTourAgentCollection: WFMCreateTourAgentCollection;
  static readonly UpdateTourAgentCollection: WFMUpdateTourAgentCollection;
  static readonly ListTourAgentCollections: WFMListTourAgentCollections;
  static readonly DeleteTourAgentCollections: WFMDeleteTourAgentCollections;
  static readonly CreateTourAgentCollectionWFMAgents: WFMCreateTourAgentCollectionWFMAgents;
  static readonly ListTourAgentCollectionWFMAgents: WFMListTourAgentCollectionWFMAgents;
  static readonly DeleteTourAgentCollectionWFMAgents: WFMDeleteTourAgentCollectionWFMAgents;
  static readonly GenerateTourWeekPatterns: WFMGenerateTourWeekPatterns;
  static readonly ListValidAgentsForReplacement: WFMListValidAgentsForReplacement;
  static readonly ReplaceAgentOnSchedule: WFMReplaceAgentOnSchedule;
  static readonly ReplaceAgentOnScheduleV1: WFMReplaceAgentOnScheduleV1;
  static readonly RemoveAgentFromSchedule: WFMRemoveAgentFromSchedule;
  static readonly CreateAgentLeavePetition: WFMCreateAgentLeavePetition;
  static readonly ListAgentLeavePetitions: WFMListAgentLeavePetitions;
  static readonly HelloWorldWFMAdherence: WFMHelloWorldWFMAdherence;
  static readonly ListAgentStatesForDay: WFMListAgentStatesForDay;
  static readonly ListRealTimeManagementStates: WFMListRealTimeManagementStates;
  static readonly ListRealTimeManagementStateColors: WFMListRealTimeManagementStateColors;
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

export class WFMClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  performInitialClientSetup(
    requestMessage: api_v1alpha1_wfm_wfm_pb.PerformInitialClientSetupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.PerformInitialClientSetupResponse|null) => void
  ): UnaryResponse;
  performInitialClientSetup(
    requestMessage: api_v1alpha1_wfm_wfm_pb.PerformInitialClientSetupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.PerformInitialClientSetupResponse|null) => void
  ): UnaryResponse;
  listSkillProfiles(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListSkillProfilesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListSkillProfilesRes|null) => void
  ): UnaryResponse;
  listSkillProfiles(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListSkillProfilesReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListSkillProfilesRes|null) => void
  ): UnaryResponse;
  updateSkillProfile(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileRes|null) => void
  ): UnaryResponse;
  updateSkillProfile(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileRes|null) => void
  ): UnaryResponse;
  updateSkillProfileProficiencies(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileProficienciesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileProficienciesRes|null) => void
  ): UnaryResponse;
  updateSkillProfileProficiencies(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileProficienciesReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileProficienciesRes|null) => void
  ): UnaryResponse;
  getSkillProfile(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetSkillProfileReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetSkillProfileRes|null) => void
  ): UnaryResponse;
  getSkillProfile(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetSkillProfileReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetSkillProfileRes|null) => void
  ): UnaryResponse;
  resyncSkillProfiles(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ResyncSkillProfilesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ResyncSkillProfilesRes|null) => void
  ): UnaryResponse;
  resyncSkillProfiles(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ResyncSkillProfilesReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ResyncSkillProfilesRes|null) => void
  ): UnaryResponse;
  getLastSkillProfileResyncDate(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetLastSkillProfileResyncDateReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetLastSkillProfileResyncDateRes|null) => void
  ): UnaryResponse;
  getLastSkillProfileResyncDate(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetLastSkillProfileResyncDateReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetLastSkillProfileResyncDateRes|null) => void
  ): UnaryResponse;
  upsertForecastingParameters(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpsertForecastingParametersReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpsertForecastingParametersRes|null) => void
  ): UnaryResponse;
  upsertForecastingParameters(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpsertForecastingParametersReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpsertForecastingParametersRes|null) => void
  ): UnaryResponse;
  getForecastingParameters(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetForecastingParametersReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetForecastingParametersRes|null) => void
  ): UnaryResponse;
  getForecastingParameters(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetForecastingParametersReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetForecastingParametersRes|null) => void
  ): UnaryResponse;
  getClientHistoryCacheInfo(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetClientHistoryCacheInfoReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetClientHistoryCacheInfoRes|null) => void
  ): UnaryResponse;
  getClientHistoryCacheInfo(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetClientHistoryCacheInfoReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetClientHistoryCacheInfoRes|null) => void
  ): UnaryResponse;
  listHistoricalData(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListHistoricalDataReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListHistoricalDataRes|null) => void
  ): UnaryResponse;
  listHistoricalData(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListHistoricalDataReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListHistoricalDataRes|null) => void
  ): UnaryResponse;
  upsertHistoricalDataDelta(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpsertHistoricalDataDeltaReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpsertHistoricalDataDeltaRes|null) => void
  ): UnaryResponse;
  upsertHistoricalDataDelta(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpsertHistoricalDataDeltaReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpsertHistoricalDataDeltaRes|null) => void
  ): UnaryResponse;
  upsertHistoricalDataDeltas(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpsertHistoricalDataDeltasReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpsertHistoricalDataDeltasRes|null) => void
  ): UnaryResponse;
  upsertHistoricalDataDeltas(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpsertHistoricalDataDeltasReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpsertHistoricalDataDeltasRes|null) => void
  ): UnaryResponse;
  listSkills(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListSkillsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListSkillsRes|null) => void
  ): UnaryResponse;
  listSkills(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListSkillsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListSkillsRes|null) => void
  ): UnaryResponse;
  buildCallProfileTemplateForSkillProfile(
    requestMessage: api_v1alpha1_wfm_wfm_pb.BuildCallProfileTemplateForSkillProfileReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.BuildCallProfileTemplateForSkillProfileRes|null) => void
  ): UnaryResponse;
  buildCallProfileTemplateForSkillProfile(
    requestMessage: api_v1alpha1_wfm_wfm_pb.BuildCallProfileTemplateForSkillProfileReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.BuildCallProfileTemplateForSkillProfileRes|null) => void
  ): UnaryResponse;
  buildCallProfileTemplate(
    requestMessage: api_v1alpha1_wfm_wfm_pb.BuildCallProfileTemplateReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.BuildCallProfileTemplateRes|null) => void
  ): UnaryResponse;
  buildCallProfileTemplate(
    requestMessage: api_v1alpha1_wfm_wfm_pb.BuildCallProfileTemplateReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.BuildCallProfileTemplateRes|null) => void
  ): UnaryResponse;
  createInactiveSkillProfileMapping(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateInactiveSkillProfileMappingReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateInactiveSkillProfileMappingRes|null) => void
  ): UnaryResponse;
  createInactiveSkillProfileMapping(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateInactiveSkillProfileMappingReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateInactiveSkillProfileMappingRes|null) => void
  ): UnaryResponse;
  getAvailableRegressionForecasterModelTypes(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetAvailableRegressionForecasterModelTypesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetAvailableRegressionForecasterModelTypesRes|null) => void
  ): UnaryResponse;
  getAvailableRegressionForecasterModelTypes(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetAvailableRegressionForecasterModelTypesReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetAvailableRegressionForecasterModelTypesRes|null) => void
  ): UnaryResponse;
  disconnectInactiveSkillProfileMapping(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DisconnectInactiveSkillProfileMappingReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DisconnectInactiveSkillProfileMappingRes|null) => void
  ): UnaryResponse;
  disconnectInactiveSkillProfileMapping(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DisconnectInactiveSkillProfileMappingReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DisconnectInactiveSkillProfileMappingRes|null) => void
  ): UnaryResponse;
  createSkillProfileGroup(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateSkillProfileGroupReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateSkillProfileGroupRes|null) => void
  ): UnaryResponse;
  createSkillProfileGroup(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateSkillProfileGroupReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateSkillProfileGroupRes|null) => void
  ): UnaryResponse;
  updateSkillProfileGroup(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileGroupReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileGroupRes|null) => void
  ): UnaryResponse;
  updateSkillProfileGroup(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileGroupReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileGroupRes|null) => void
  ): UnaryResponse;
  listSkillProfileGroups(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListSkillProfileGroupsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListSkillProfileGroupsRes|null) => void
  ): UnaryResponse;
  listSkillProfileGroups(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListSkillProfileGroupsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListSkillProfileGroupsRes|null) => void
  ): UnaryResponse;
  updateSkillProfileGroupAssociations(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileGroupAssociationsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileGroupAssociationsRes|null) => void
  ): UnaryResponse;
  updateSkillProfileGroupAssociations(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileGroupAssociationsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileGroupAssociationsRes|null) => void
  ): UnaryResponse;
  deleteHistoricalDataDeltas(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteHistoricalDataDeltasReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteHistoricalDataDeltasRes|null) => void
  ): UnaryResponse;
  deleteHistoricalDataDeltas(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteHistoricalDataDeltasReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteHistoricalDataDeltasRes|null) => void
  ): UnaryResponse;
  listTopSkillProfiles(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListTopSkillProfilesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListTopSkillProfilesRes|null) => void
  ): UnaryResponse;
  listTopSkillProfiles(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListTopSkillProfilesReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListTopSkillProfilesRes|null) => void
  ): UnaryResponse;
  getSkillProfilesCount(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetSkillProfilesCountReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetSkillProfilesCountRes|null) => void
  ): UnaryResponse;
  getSkillProfilesCount(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetSkillProfilesCountReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetSkillProfilesCountRes|null) => void
  ): UnaryResponse;
  buildProfileForecastByInterval(requestMessage: api_v1alpha1_wfm_wfm_pb.BuildProfileForecastByIntervalReq, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_wfm_wfm_pb.CallDataByInterval>;
  buildProfileForecastByIntervalWithStats(requestMessage: api_v1alpha1_wfm_wfm_pb.BuildProfileForecastByIntervalWithStatsReq, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_wfm_wfm_pb.BuildProfileForecastByIntervalWithStatsRes>;
  upsertProfileForecast(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpsertProfileForecastReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpsertProfileForecastRes|null) => void
  ): UnaryResponse;
  upsertProfileForecast(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpsertProfileForecastReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpsertProfileForecastRes|null) => void
  ): UnaryResponse;
  createCallProfileTemplate(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateCallProfileTemplateReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateCallProfileTemplateRes|null) => void
  ): UnaryResponse;
  createCallProfileTemplate(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateCallProfileTemplateReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateCallProfileTemplateRes|null) => void
  ): UnaryResponse;
  deleteCallProfileTemplate(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteCallProfileTemplateReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteCallProfileTemplateRes|null) => void
  ): UnaryResponse;
  deleteCallProfileTemplate(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteCallProfileTemplateReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteCallProfileTemplateRes|null) => void
  ): UnaryResponse;
  createRegressionTemplate(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateRegressionTemplateReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateRegressionTemplateRes|null) => void
  ): UnaryResponse;
  createRegressionTemplate(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateRegressionTemplateReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateRegressionTemplateRes|null) => void
  ): UnaryResponse;
  deleteRegressionTemplate(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteRegressionTemplateReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteRegressionTemplateRes|null) => void
  ): UnaryResponse;
  deleteRegressionTemplate(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteRegressionTemplateReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteRegressionTemplateRes|null) => void
  ): UnaryResponse;
  listRegressionTemplates(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListRegressionTemplatesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListRegressionTemplatesRes|null) => void
  ): UnaryResponse;
  listRegressionTemplates(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListRegressionTemplatesReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListRegressionTemplatesRes|null) => void
  ): UnaryResponse;
  listForecastIntervalsForSkillProfile(requestMessage: api_v1alpha1_wfm_wfm_pb.ListForecastIntervalsForSkillProfileReq, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_wfm_wfm_pb.CallDataByInterval>;
  listForecastIntervals(requestMessage: api_v1alpha1_wfm_wfm_pb.ListForecastIntervalsReq, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_wfm_wfm_pb.CallDataByInterval>;
  buildRegressionForecastByInterval(requestMessage: api_v1alpha1_wfm_wfm_pb.BuildRegressionForecastByIntervalReq, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_wfm_wfm_pb.CallDataByInterval>;
  buildRegressionForecastByIntervalWithStats(requestMessage: api_v1alpha1_wfm_wfm_pb.BuildRegressionForecastByIntervalWithStatsReq, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_wfm_wfm_pb.BuildRegressionForecastByIntervalWithStatsRes>;
  listCallProfileTemplates(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListCallProfileTemplatesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListCallProfileTemplatesRes|null) => void
  ): UnaryResponse;
  listCallProfileTemplates(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListCallProfileTemplatesReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListCallProfileTemplatesRes|null) => void
  ): UnaryResponse;
  upsertRegressionForecast(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpsertRegressionForecastReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpsertRegressionForecastRes|null) => void
  ): UnaryResponse;
  upsertRegressionForecast(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpsertRegressionForecastReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpsertRegressionForecastRes|null) => void
  ): UnaryResponse;
  upsertForecastDataDelta(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpsertForecastDataDeltaReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpsertForecastDataDeltaRes|null) => void
  ): UnaryResponse;
  upsertForecastDataDelta(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpsertForecastDataDeltaReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpsertForecastDataDeltaRes|null) => void
  ): UnaryResponse;
  upsertForecastDataDeltas(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpsertForecastDataDeltasReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpsertForecastDataDeltasRes|null) => void
  ): UnaryResponse;
  upsertForecastDataDeltas(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpsertForecastDataDeltasReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpsertForecastDataDeltasRes|null) => void
  ): UnaryResponse;
  deleteForecastIntervals(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteForecastIntervalsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteForecastIntervalsRes|null) => void
  ): UnaryResponse;
  deleteForecastIntervals(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteForecastIntervalsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteForecastIntervalsRes|null) => void
  ): UnaryResponse;
  listHistoricalDataForAllSkillProfiles(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListHistoricalDataForAllSkillProfilesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListHistoricalDataForAllSkillProfilesRes|null) => void
  ): UnaryResponse;
  listHistoricalDataForAllSkillProfiles(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListHistoricalDataForAllSkillProfilesReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListHistoricalDataForAllSkillProfilesRes|null) => void
  ): UnaryResponse;
  buildDOWAndMOYProfiles(
    requestMessage: api_v1alpha1_wfm_wfm_pb.BuildDOWAndMOYProfilesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.BuildDOWAndMOYProfilesRes|null) => void
  ): UnaryResponse;
  buildDOWAndMOYProfiles(
    requestMessage: api_v1alpha1_wfm_wfm_pb.BuildDOWAndMOYProfilesReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.BuildDOWAndMOYProfilesRes|null) => void
  ): UnaryResponse;
  calculateTrainingDataAveragesForSkillProfile(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CalculateTrainingDataAveragesForSkillProfileReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CalculateTrainingDataAveragesForSkillProfileRes|null) => void
  ): UnaryResponse;
  calculateTrainingDataAveragesForSkillProfile(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CalculateTrainingDataAveragesForSkillProfileReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CalculateTrainingDataAveragesForSkillProfileRes|null) => void
  ): UnaryResponse;
  updateSkillProfileAveragesUsingHistoricalData(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileAveragesUsingHistoricalDataReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileAveragesUsingHistoricalDataRes|null) => void
  ): UnaryResponse;
  updateSkillProfileAveragesUsingHistoricalData(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileAveragesUsingHistoricalDataReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateSkillProfileAveragesUsingHistoricalDataRes|null) => void
  ): UnaryResponse;
  updateCallCenterNode(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateCallCenterNodeReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateCallCenterNodeRes|null) => void
  ): UnaryResponse;
  updateCallCenterNode(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateCallCenterNodeReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateCallCenterNodeRes|null) => void
  ): UnaryResponse;
  createClientNode(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateClientNodeReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateClientNodeRes|null) => void
  ): UnaryResponse;
  createClientNode(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateClientNodeReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateClientNodeRes|null) => void
  ): UnaryResponse;
  updateClientNode(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateClientNodeReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateClientNodeRes|null) => void
  ): UnaryResponse;
  updateClientNode(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateClientNodeReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateClientNodeRes|null) => void
  ): UnaryResponse;
  createLocationNode(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateLocationNodeReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateLocationNodeRes|null) => void
  ): UnaryResponse;
  createLocationNode(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateLocationNodeReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateLocationNodeRes|null) => void
  ): UnaryResponse;
  updateLocationNode(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateLocationNodeReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateLocationNodeRes|null) => void
  ): UnaryResponse;
  updateLocationNode(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateLocationNodeReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateLocationNodeRes|null) => void
  ): UnaryResponse;
  createProgramNode(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateProgramNodeReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateProgramNodeRes|null) => void
  ): UnaryResponse;
  createProgramNode(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateProgramNodeReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateProgramNodeRes|null) => void
  ): UnaryResponse;
  updateProgramNode(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateProgramNodeReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateProgramNodeRes|null) => void
  ): UnaryResponse;
  updateProgramNode(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateProgramNodeReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateProgramNodeRes|null) => void
  ): UnaryResponse;
  listProgramNodesBySid(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListProgramNodesBySidReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListProgramNodesBySidRes|null) => void
  ): UnaryResponse;
  listProgramNodesBySid(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListProgramNodesBySidReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListProgramNodesBySidRes|null) => void
  ): UnaryResponse;
  createConstraintRule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateConstraintRuleReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateConstraintRuleRes|null) => void
  ): UnaryResponse;
  createConstraintRule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateConstraintRuleReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateConstraintRuleRes|null) => void
  ): UnaryResponse;
  updateConstraintRule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateConstraintRuleReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateConstraintRuleRes|null) => void
  ): UnaryResponse;
  updateConstraintRule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateConstraintRuleReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateConstraintRuleRes|null) => void
  ): UnaryResponse;
  deleteConstraintRule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteConstraintRuleReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteConstraintRuleRes|null) => void
  ): UnaryResponse;
  deleteConstraintRule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteConstraintRuleReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteConstraintRuleRes|null) => void
  ): UnaryResponse;
  createNonSkillActivity(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateNonSkillActivityReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateNonSkillActivityRes|null) => void
  ): UnaryResponse;
  createNonSkillActivity(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateNonSkillActivityReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateNonSkillActivityRes|null) => void
  ): UnaryResponse;
  updateNonSkillActivity(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateNonSkillActivityReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateNonSkillActivityRes|null) => void
  ): UnaryResponse;
  updateNonSkillActivity(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateNonSkillActivityReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateNonSkillActivityRes|null) => void
  ): UnaryResponse;
  listNonSkillActivities(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListNonSkillActivitiesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListNonSkillActivitiesRes|null) => void
  ): UnaryResponse;
  listNonSkillActivities(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListNonSkillActivitiesReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListNonSkillActivitiesRes|null) => void
  ): UnaryResponse;
  listNonSkillActivityAssociations(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListNonSkillActivityAssociationsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListNonSkillActivityAssociationsRes|null) => void
  ): UnaryResponse;
  listNonSkillActivityAssociations(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListNonSkillActivityAssociationsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListNonSkillActivityAssociationsRes|null) => void
  ): UnaryResponse;
  listCandidateSchedulingActivities(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListCandidateSchedulingActivitiesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListCandidateSchedulingActivitiesRes|null) => void
  ): UnaryResponse;
  listCandidateSchedulingActivities(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListCandidateSchedulingActivitiesReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListCandidateSchedulingActivitiesRes|null) => void
  ): UnaryResponse;
  createAgentGroup(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateAgentGroupReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateAgentGroupRes|null) => void
  ): UnaryResponse;
  createAgentGroup(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateAgentGroupReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateAgentGroupRes|null) => void
  ): UnaryResponse;
  listAgentScheduleGroups(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListAgentScheduleGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListAgentScheduleGroupsResponse|null) => void
  ): UnaryResponse;
  listAgentScheduleGroups(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListAgentScheduleGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListAgentScheduleGroupsResponse|null) => void
  ): UnaryResponse;
  updateAgentGroup(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateAgentGroupReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateAgentGroupRes|null) => void
  ): UnaryResponse;
  updateAgentGroup(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateAgentGroupReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateAgentGroupRes|null) => void
  ): UnaryResponse;
  createUnassignedWFMAgent(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateUnassignedWFMAgentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateUnassignedWFMAgentResponse|null) => void
  ): UnaryResponse;
  createUnassignedWFMAgent(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateUnassignedWFMAgentRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateUnassignedWFMAgentResponse|null) => void
  ): UnaryResponse;
  updateWFMAgent(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateWFMAgentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateWFMAgentRes|null) => void
  ): UnaryResponse;
  updateWFMAgent(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateWFMAgentReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateWFMAgentRes|null) => void
  ): UnaryResponse;
  listAllWFMAgents(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListAllWFMAgentsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListAllWFMAgentsRes|null) => void
  ): UnaryResponse;
  listAllWFMAgents(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListAllWFMAgentsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListAllWFMAgentsRes|null) => void
  ): UnaryResponse;
  listCandidateWFMAgents(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListCandidateWFMAgentsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListCandidateWFMAgentsRes|null) => void
  ): UnaryResponse;
  listCandidateWFMAgents(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListCandidateWFMAgentsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListCandidateWFMAgentsRes|null) => void
  ): UnaryResponse;
  listUngroupedWFMAgents(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListUngroupedWFMAgentsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListUngroupedWFMAgentsRes|null) => void
  ): UnaryResponse;
  listUngroupedWFMAgents(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListUngroupedWFMAgentsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListUngroupedWFMAgentsRes|null) => void
  ): UnaryResponse;
  listWFMAgentSids(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListWFMAgentSidsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListWFMAgentSidsRes|null) => void
  ): UnaryResponse;
  listWFMAgentSids(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListWFMAgentSidsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListWFMAgentSidsRes|null) => void
  ): UnaryResponse;
  listUnassignedWFMAgents(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListUnassignedWFMAgentsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListUnassignedWFMAgentsResponse|null) => void
  ): UnaryResponse;
  listUnassignedWFMAgents(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListUnassignedWFMAgentsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListUnassignedWFMAgentsResponse|null) => void
  ): UnaryResponse;
  listWFMAgentsAssociatedWithAgentGroup(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListWFMAgentsAssociatedWithAgentGroupReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListWFMAgentsAssociatedWithAgentGroupRes|null) => void
  ): UnaryResponse;
  listWFMAgentsAssociatedWithAgentGroup(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListWFMAgentsAssociatedWithAgentGroupReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListWFMAgentsAssociatedWithAgentGroupRes|null) => void
  ): UnaryResponse;
  createWFMAgentMemberships(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateWFMAgentMembershipsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateWFMAgentMembershipsRes|null) => void
  ): UnaryResponse;
  createWFMAgentMemberships(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateWFMAgentMembershipsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateWFMAgentMembershipsRes|null) => void
  ): UnaryResponse;
  copyWFMAgentMemberships(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CopyWFMAgentMembershipsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CopyWFMAgentMembershipsResponse|null) => void
  ): UnaryResponse;
  copyWFMAgentMemberships(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CopyWFMAgentMembershipsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CopyWFMAgentMembershipsResponse|null) => void
  ): UnaryResponse;
  deleteWFMAgentMemberships(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteWFMAgentMembershipsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteWFMAgentMembershipsRes|null) => void
  ): UnaryResponse;
  deleteWFMAgentMemberships(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteWFMAgentMembershipsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteWFMAgentMembershipsRes|null) => void
  ): UnaryResponse;
  deleteWFMAgentsMemberships(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteWFMAgentsMembershipsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteWFMAgentsMembershipsRes|null) => void
  ): UnaryResponse;
  deleteWFMAgentsMemberships(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteWFMAgentsMembershipsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteWFMAgentsMembershipsRes|null) => void
  ): UnaryResponse;
  removeAgentFromFutureShifts(
    requestMessage: api_v1alpha1_wfm_wfm_pb.RemoveAgentFromFutureShiftsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.RemoveAgentFromFutureShiftsResponse|null) => void
  ): UnaryResponse;
  removeAgentFromFutureShifts(
    requestMessage: api_v1alpha1_wfm_wfm_pb.RemoveAgentFromFutureShiftsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.RemoveAgentFromFutureShiftsResponse|null) => void
  ): UnaryResponse;
  buildAgentDiagnostics(
    requestMessage: api_v1alpha1_wfm_wfm_pb.BuildAgentDiagnosticsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.BuildAgentDiagnosticsRes|null) => void
  ): UnaryResponse;
  buildAgentDiagnostics(
    requestMessage: api_v1alpha1_wfm_wfm_pb.BuildAgentDiagnosticsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.BuildAgentDiagnosticsRes|null) => void
  ): UnaryResponse;
  createShiftTemplate(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateShiftTemplateReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateShiftTemplateRes|null) => void
  ): UnaryResponse;
  createShiftTemplate(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateShiftTemplateReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateShiftTemplateRes|null) => void
  ): UnaryResponse;
  updateShiftTemplate(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateShiftTemplateReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateShiftTemplateRes|null) => void
  ): UnaryResponse;
  updateShiftTemplate(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateShiftTemplateReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateShiftTemplateRes|null) => void
  ): UnaryResponse;
  listShiftTemplatesBySids(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListShiftTemplatesBySidsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListShiftTemplatesBySidsRes|null) => void
  ): UnaryResponse;
  listShiftTemplatesBySids(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListShiftTemplatesBySidsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListShiftTemplatesBySidsRes|null) => void
  ): UnaryResponse;
  buildShiftTemplateDiagnostics(
    requestMessage: api_v1alpha1_wfm_wfm_pb.BuildShiftTemplateDiagnosticsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.BuildShiftTemplateDiagnosticsRes|null) => void
  ): UnaryResponse;
  buildShiftTemplateDiagnostics(
    requestMessage: api_v1alpha1_wfm_wfm_pb.BuildShiftTemplateDiagnosticsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.BuildShiftTemplateDiagnosticsRes|null) => void
  ): UnaryResponse;
  createPlacementRule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreatePlacementRuleReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreatePlacementRuleRes|null) => void
  ): UnaryResponse;
  createPlacementRule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreatePlacementRuleReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreatePlacementRuleRes|null) => void
  ): UnaryResponse;
  updatePlacementRule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdatePlacementRuleReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdatePlacementRuleRes|null) => void
  ): UnaryResponse;
  updatePlacementRule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdatePlacementRuleReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdatePlacementRuleRes|null) => void
  ): UnaryResponse;
  deletePlacementRule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeletePlacementRuleReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeletePlacementRuleRes|null) => void
  ): UnaryResponse;
  deletePlacementRule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeletePlacementRuleReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeletePlacementRuleRes|null) => void
  ): UnaryResponse;
  createOpenTimesPattern(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateOpenTimesPatternReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateOpenTimesPatternRes|null) => void
  ): UnaryResponse;
  createOpenTimesPattern(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateOpenTimesPatternReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateOpenTimesPatternRes|null) => void
  ): UnaryResponse;
  updateOpenTimesPattern(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateOpenTimesPatternReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateOpenTimesPatternRes|null) => void
  ): UnaryResponse;
  updateOpenTimesPattern(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateOpenTimesPatternReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateOpenTimesPatternRes|null) => void
  ): UnaryResponse;
  deleteOpenTimesPattern(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteOpenTimesPatternReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteOpenTimesPatternRes|null) => void
  ): UnaryResponse;
  deleteOpenTimesPattern(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteOpenTimesPatternReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteOpenTimesPatternRes|null) => void
  ): UnaryResponse;
  getOpenTimesBitmaps(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetOpenTimesBitmapsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetOpenTimesBitmapsRes|null) => void
  ): UnaryResponse;
  getOpenTimesBitmaps(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetOpenTimesBitmapsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetOpenTimesBitmapsRes|null) => void
  ): UnaryResponse;
  listOpenDateRangesForNodeOpenTimesBitmaps(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListOpenDateRangesForNodeOpenTimesBitmapsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListOpenDateRangesForNodeOpenTimesBitmapsResponse|null) => void
  ): UnaryResponse;
  listOpenDateRangesForNodeOpenTimesBitmaps(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListOpenDateRangesForNodeOpenTimesBitmapsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListOpenDateRangesForNodeOpenTimesBitmapsResponse|null) => void
  ): UnaryResponse;
  createAgentAvailabilityPattern(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateAgentAvailabilityPatternReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateAgentAvailabilityPatternRes|null) => void
  ): UnaryResponse;
  createAgentAvailabilityPattern(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateAgentAvailabilityPatternReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateAgentAvailabilityPatternRes|null) => void
  ): UnaryResponse;
  updateAgentAvailabilityPattern(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateAgentAvailabilityPatternReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateAgentAvailabilityPatternRes|null) => void
  ): UnaryResponse;
  updateAgentAvailabilityPattern(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateAgentAvailabilityPatternReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateAgentAvailabilityPatternRes|null) => void
  ): UnaryResponse;
  deleteAgentAvailabilityPattern(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteAgentAvailabilityPatternReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteAgentAvailabilityPatternRes|null) => void
  ): UnaryResponse;
  deleteAgentAvailabilityPattern(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteAgentAvailabilityPatternReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteAgentAvailabilityPatternRes|null) => void
  ): UnaryResponse;
  getAvailabilityBitmaps(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetAvailabilityBitmapsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetAvailabilityBitmapsRes|null) => void
  ): UnaryResponse;
  getAvailabilityBitmaps(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetAvailabilityBitmapsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetAvailabilityBitmapsRes|null) => void
  ): UnaryResponse;
  upsertNonSkillActivityAssociation(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpsertNonSkillActivityAssociationReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpsertNonSkillActivityAssociationRes|null) => void
  ): UnaryResponse;
  upsertNonSkillActivityAssociation(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpsertNonSkillActivityAssociationReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpsertNonSkillActivityAssociationRes|null) => void
  ): UnaryResponse;
  createSkillProficiencies(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateSkillProficienciesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateSkillProficienciesRes|null) => void
  ): UnaryResponse;
  createSkillProficiencies(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateSkillProficienciesReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateSkillProficienciesRes|null) => void
  ): UnaryResponse;
  updateSkillProficiencies(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateSkillProficienciesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateSkillProficienciesRes|null) => void
  ): UnaryResponse;
  updateSkillProficiencies(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateSkillProficienciesReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateSkillProficienciesRes|null) => void
  ): UnaryResponse;
  deleteSkillProficiency(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteSkillProficiencyReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteSkillProficiencyRes|null) => void
  ): UnaryResponse;
  deleteSkillProficiency(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteSkillProficiencyReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteSkillProficiencyRes|null) => void
  ): UnaryResponse;
  copyScenario(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CopyScenarioReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CopyScenarioRes|null) => void
  ): UnaryResponse;
  copyScenario(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CopyScenarioReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CopyScenarioRes|null) => void
  ): UnaryResponse;
  createScheduleScenarioWithNodes(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateScheduleScenarioWithNodesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateScheduleScenarioWithNodesRes|null) => void
  ): UnaryResponse;
  createScheduleScenarioWithNodes(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateScheduleScenarioWithNodesReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateScheduleScenarioWithNodesRes|null) => void
  ): UnaryResponse;
  updateScheduleScenario(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateScheduleScenarioReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateScheduleScenarioRes|null) => void
  ): UnaryResponse;
  updateScheduleScenario(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateScheduleScenarioReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateScheduleScenarioRes|null) => void
  ): UnaryResponse;
  listConfigEntities(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListConfigEntitiesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListConfigEntitiesRes|null) => void
  ): UnaryResponse;
  listConfigEntities(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListConfigEntitiesReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListConfigEntitiesRes|null) => void
  ): UnaryResponse;
  deleteShiftInstances(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteShiftInstancesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteShiftInstancesRes|null) => void
  ): UnaryResponse;
  deleteShiftInstances(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteShiftInstancesReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteShiftInstancesRes|null) => void
  ): UnaryResponse;
  buildNodeDiagnostics(
    requestMessage: api_v1alpha1_wfm_wfm_pb.BuildNodeDiagnosticsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.BuildNodeDiagnosticsRes|null) => void
  ): UnaryResponse;
  buildNodeDiagnostics(
    requestMessage: api_v1alpha1_wfm_wfm_pb.BuildNodeDiagnosticsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.BuildNodeDiagnosticsRes|null) => void
  ): UnaryResponse;
  buildGlobalDiagnostics(
    requestMessage: api_v1alpha1_wfm_wfm_pb.BuildGlobalDiagnosticsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.BuildGlobalDiagnosticsRes|null) => void
  ): UnaryResponse;
  buildGlobalDiagnostics(
    requestMessage: api_v1alpha1_wfm_wfm_pb.BuildGlobalDiagnosticsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.BuildGlobalDiagnosticsRes|null) => void
  ): UnaryResponse;
  getPublishedSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetPublishedScheduleReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetPublishedScheduleRes|null) => void
  ): UnaryResponse;
  getPublishedSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetPublishedScheduleReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetPublishedScheduleRes|null) => void
  ): UnaryResponse;
  getPublishedScheduleRequiredCalls(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetPublishedScheduleRequiredCallsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetPublishedScheduleRequiredCallsRes|null) => void
  ): UnaryResponse;
  getPublishedScheduleRequiredCalls(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetPublishedScheduleRequiredCallsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetPublishedScheduleRequiredCallsRes|null) => void
  ): UnaryResponse;
  getDraftScheduleRequiredCalls(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetDraftScheduleRequiredCallsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetDraftScheduleRequiredCallsRes|null) => void
  ): UnaryResponse;
  getDraftScheduleRequiredCalls(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetDraftScheduleRequiredCallsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetDraftScheduleRequiredCallsRes|null) => void
  ): UnaryResponse;
  createDraftSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateDraftScheduleReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateDraftScheduleRes|null) => void
  ): UnaryResponse;
  createDraftSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateDraftScheduleReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateDraftScheduleRes|null) => void
  ): UnaryResponse;
  updateDraftSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateDraftScheduleReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateDraftScheduleRes|null) => void
  ): UnaryResponse;
  updateDraftSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateDraftScheduleReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateDraftScheduleRes|null) => void
  ): UnaryResponse;
  buildDraftSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.BuildDraftScheduleReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.BuildDraftScheduleRes|null) => void
  ): UnaryResponse;
  buildDraftSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.BuildDraftScheduleReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.BuildDraftScheduleRes|null) => void
  ): UnaryResponse;
  publishDraftSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.PublishDraftScheduleReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.PublishDraftScheduleRes|null) => void
  ): UnaryResponse;
  publishDraftSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.PublishDraftScheduleReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.PublishDraftScheduleRes|null) => void
  ): UnaryResponse;
  resetDraftSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ResetDraftScheduleReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ResetDraftScheduleRes|null) => void
  ): UnaryResponse;
  resetDraftSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ResetDraftScheduleReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ResetDraftScheduleRes|null) => void
  ): UnaryResponse;
  getDraftSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetDraftScheduleReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetDraftScheduleRes|null) => void
  ): UnaryResponse;
  getDraftSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetDraftScheduleReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetDraftScheduleRes|null) => void
  ): UnaryResponse;
  listDraftSchedules(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListDraftSchedulesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListDraftSchedulesRes|null) => void
  ): UnaryResponse;
  listDraftSchedules(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListDraftSchedulesReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListDraftSchedulesRes|null) => void
  ): UnaryResponse;
  clearSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ClearScheduleReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ClearScheduleRes|null) => void
  ): UnaryResponse;
  clearSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ClearScheduleReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ClearScheduleRes|null) => void
  ): UnaryResponse;
  deleteDraftSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteDraftScheduleReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteDraftScheduleRes|null) => void
  ): UnaryResponse;
  deleteDraftSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteDraftScheduleReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteDraftScheduleRes|null) => void
  ): UnaryResponse;
  listShiftInstancesBySid(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListShiftInstancesBySidReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListShiftInstancesBySidRes|null) => void
  ): UnaryResponse;
  listShiftInstancesBySid(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListShiftInstancesBySidReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListShiftInstancesBySidRes|null) => void
  ): UnaryResponse;
  copyScheduleToSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CopyScheduleToScheduleReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CopyScheduleToScheduleRes|null) => void
  ): UnaryResponse;
  copyScheduleToSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CopyScheduleToScheduleReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CopyScheduleToScheduleRes|null) => void
  ): UnaryResponse;
  createShiftInstance(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceRes|null) => void
  ): UnaryResponse;
  createShiftInstance(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceRes|null) => void
  ): UnaryResponse;
  createShiftInstanceV2(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceV2Req,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceV2Res|null) => void
  ): UnaryResponse;
  createShiftInstanceV2(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceV2Req,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceV2Res|null) => void
  ): UnaryResponse;
  createShiftInstanceWithSegments(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceWithSegmentsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceWithSegmentsResponse|null) => void
  ): UnaryResponse;
  createShiftInstanceWithSegments(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceWithSegmentsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateShiftInstanceWithSegmentsResponse|null) => void
  ): UnaryResponse;
  splitShiftInstance(
    requestMessage: api_v1alpha1_wfm_wfm_pb.SplitShiftInstanceReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.SplitShiftInstanceRes|null) => void
  ): UnaryResponse;
  splitShiftInstance(
    requestMessage: api_v1alpha1_wfm_wfm_pb.SplitShiftInstanceReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.SplitShiftInstanceRes|null) => void
  ): UnaryResponse;
  swapShiftInstances(
    requestMessage: api_v1alpha1_wfm_wfm_pb.SwapShiftInstancesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.SwapShiftInstancesRes|null) => void
  ): UnaryResponse;
  swapShiftInstances(
    requestMessage: api_v1alpha1_wfm_wfm_pb.SwapShiftInstancesReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.SwapShiftInstancesRes|null) => void
  ): UnaryResponse;
  updateShiftInstance(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateShiftInstanceReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateShiftInstanceRes|null) => void
  ): UnaryResponse;
  updateShiftInstance(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateShiftInstanceReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateShiftInstanceRes|null) => void
  ): UnaryResponse;
  updateShiftInstanceV2(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateShiftInstanceV2Req,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateShiftInstanceV2Res|null) => void
  ): UnaryResponse;
  updateShiftInstanceV2(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateShiftInstanceV2Req,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateShiftInstanceV2Res|null) => void
  ): UnaryResponse;
  updateShiftInstanceWithSegments(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateShiftInstanceWithSegmentsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateShiftInstanceWithSegmentsResponse|null) => void
  ): UnaryResponse;
  updateShiftInstanceWithSegments(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateShiftInstanceWithSegmentsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateShiftInstanceWithSegmentsResponse|null) => void
  ): UnaryResponse;
  copyShiftInstancesToSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CopyShiftInstancesToScheduleReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CopyShiftInstancesToScheduleRes|null) => void
  ): UnaryResponse;
  copyShiftInstancesToSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CopyShiftInstancesToScheduleReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CopyShiftInstancesToScheduleRes|null) => void
  ): UnaryResponse;
  listShiftInstanceSidsForAgent(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListShiftInstanceSidsForAgentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListShiftInstanceSidsForAgentRes|null) => void
  ): UnaryResponse;
  listShiftInstanceSidsForAgent(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListShiftInstanceSidsForAgentReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListShiftInstanceSidsForAgentRes|null) => void
  ): UnaryResponse;
  listShiftSegmentsByShiftInstanceSids(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListShiftSegmentsByShiftInstanceSidsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListShiftSegmentsByShiftInstanceSidsRes|null) => void
  ): UnaryResponse;
  listShiftSegmentsByShiftInstanceSids(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListShiftSegmentsByShiftInstanceSidsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListShiftSegmentsByShiftInstanceSidsRes|null) => void
  ): UnaryResponse;
  setSchedulingTarget(
    requestMessage: api_v1alpha1_wfm_wfm_pb.SetSchedulingTargetReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.SetSchedulingTargetRes|null) => void
  ): UnaryResponse;
  setSchedulingTarget(
    requestMessage: api_v1alpha1_wfm_wfm_pb.SetSchedulingTargetReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.SetSchedulingTargetRes|null) => void
  ): UnaryResponse;
  getSchedulingTarget(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetSchedulingTargetReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetSchedulingTargetRes|null) => void
  ): UnaryResponse;
  getSchedulingTarget(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetSchedulingTargetReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetSchedulingTargetRes|null) => void
  ): UnaryResponse;
  deleteSchedulingTarget(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteSchedulingTargetReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteSchedulingTargetRes|null) => void
  ): UnaryResponse;
  deleteSchedulingTarget(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteSchedulingTargetReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteSchedulingTargetRes|null) => void
  ): UnaryResponse;
  getDefaultSchedulingTarget(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetDefaultSchedulingTargetReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetDefaultSchedulingTargetRes|null) => void
  ): UnaryResponse;
  getDefaultSchedulingTarget(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetDefaultSchedulingTargetReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetDefaultSchedulingTargetRes|null) => void
  ): UnaryResponse;
  setDefaultSchedulingTarget(
    requestMessage: api_v1alpha1_wfm_wfm_pb.SetDefaultSchedulingTargetReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.SetDefaultSchedulingTargetRes|null) => void
  ): UnaryResponse;
  setDefaultSchedulingTarget(
    requestMessage: api_v1alpha1_wfm_wfm_pb.SetDefaultSchedulingTargetReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.SetDefaultSchedulingTargetRes|null) => void
  ): UnaryResponse;
  getPerformanceMetrics(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetPerformanceMetricsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetPerformanceMetricsRes|null) => void
  ): UnaryResponse;
  getPerformanceMetrics(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetPerformanceMetricsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetPerformanceMetricsRes|null) => void
  ): UnaryResponse;
  listRequiredCallsIntervals(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListRequiredCallsIntervalsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListRequiredCallsIntervalsRes|null) => void
  ): UnaryResponse;
  listRequiredCallsIntervals(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListRequiredCallsIntervalsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListRequiredCallsIntervalsRes|null) => void
  ): UnaryResponse;
  createTourPattern(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateTourPatternReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateTourPatternRes|null) => void
  ): UnaryResponse;
  createTourPattern(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateTourPatternReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateTourPatternRes|null) => void
  ): UnaryResponse;
  getTourPatternDiagnostics(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetTourPatternDiagnosticsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetTourPatternDiagnosticsRes|null) => void
  ): UnaryResponse;
  getTourPatternDiagnostics(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetTourPatternDiagnosticsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetTourPatternDiagnosticsRes|null) => void
  ): UnaryResponse;
  upsertTourPatternWithMembers(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpsertTourPatternWithMembersReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpsertTourPatternWithMembersRes|null) => void
  ): UnaryResponse;
  upsertTourPatternWithMembers(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpsertTourPatternWithMembersReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpsertTourPatternWithMembersRes|null) => void
  ): UnaryResponse;
  getTourPattern(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetTourPatternReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetTourPatternRes|null) => void
  ): UnaryResponse;
  getTourPattern(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetTourPatternReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetTourPatternRes|null) => void
  ): UnaryResponse;
  getTourPatternWithMembers(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetTourPatternWithMembersReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetTourPatternWithMembersRes|null) => void
  ): UnaryResponse;
  getTourPatternWithMembers(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GetTourPatternWithMembersReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GetTourPatternWithMembersRes|null) => void
  ): UnaryResponse;
  deleteTourPattern(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteTourPatternReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteTourPatternRes|null) => void
  ): UnaryResponse;
  deleteTourPattern(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteTourPatternReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteTourPatternRes|null) => void
  ): UnaryResponse;
  createTourWeekPattern(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateTourWeekPatternReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateTourWeekPatternRes|null) => void
  ): UnaryResponse;
  createTourWeekPattern(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateTourWeekPatternReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateTourWeekPatternRes|null) => void
  ): UnaryResponse;
  listTourWeekPatterns(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListTourWeekPatternsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListTourWeekPatternsRes|null) => void
  ): UnaryResponse;
  listTourWeekPatterns(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListTourWeekPatternsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListTourWeekPatternsRes|null) => void
  ): UnaryResponse;
  deleteTourWeekPatterns(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteTourWeekPatternsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteTourWeekPatternsRes|null) => void
  ): UnaryResponse;
  deleteTourWeekPatterns(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteTourWeekPatternsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteTourWeekPatternsRes|null) => void
  ): UnaryResponse;
  createTourShiftInstanceConfig(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateTourShiftInstanceConfigReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateTourShiftInstanceConfigRes|null) => void
  ): UnaryResponse;
  createTourShiftInstanceConfig(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateTourShiftInstanceConfigReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateTourShiftInstanceConfigRes|null) => void
  ): UnaryResponse;
  updateTourShiftInstanceConfig(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateTourShiftInstanceConfigReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateTourShiftInstanceConfigRes|null) => void
  ): UnaryResponse;
  updateTourShiftInstanceConfig(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateTourShiftInstanceConfigReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateTourShiftInstanceConfigRes|null) => void
  ): UnaryResponse;
  listTourShiftInstanceConfigs(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListTourShiftInstanceConfigsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListTourShiftInstanceConfigsRes|null) => void
  ): UnaryResponse;
  listTourShiftInstanceConfigs(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListTourShiftInstanceConfigsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListTourShiftInstanceConfigsRes|null) => void
  ): UnaryResponse;
  deleteTourShiftInstanceConfigs(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteTourShiftInstanceConfigsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteTourShiftInstanceConfigsRes|null) => void
  ): UnaryResponse;
  deleteTourShiftInstanceConfigs(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteTourShiftInstanceConfigsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteTourShiftInstanceConfigsRes|null) => void
  ): UnaryResponse;
  createTourShiftSegmentConfig(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateTourShiftSegmentConfigReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateTourShiftSegmentConfigRes|null) => void
  ): UnaryResponse;
  createTourShiftSegmentConfig(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateTourShiftSegmentConfigReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateTourShiftSegmentConfigRes|null) => void
  ): UnaryResponse;
  updateTourShiftSegmentConfig(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateTourShiftSegmentConfigReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateTourShiftSegmentConfigRes|null) => void
  ): UnaryResponse;
  updateTourShiftSegmentConfig(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateTourShiftSegmentConfigReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateTourShiftSegmentConfigRes|null) => void
  ): UnaryResponse;
  listTourShiftSegmentConfigs(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListTourShiftSegmentConfigsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListTourShiftSegmentConfigsRes|null) => void
  ): UnaryResponse;
  listTourShiftSegmentConfigs(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListTourShiftSegmentConfigsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListTourShiftSegmentConfigsRes|null) => void
  ): UnaryResponse;
  deleteTourShiftSegmentConfigs(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteTourShiftSegmentConfigsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteTourShiftSegmentConfigsRes|null) => void
  ): UnaryResponse;
  deleteTourShiftSegmentConfigs(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteTourShiftSegmentConfigsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteTourShiftSegmentConfigsRes|null) => void
  ): UnaryResponse;
  createTourAgentCollection(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateTourAgentCollectionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateTourAgentCollectionRes|null) => void
  ): UnaryResponse;
  createTourAgentCollection(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateTourAgentCollectionReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateTourAgentCollectionRes|null) => void
  ): UnaryResponse;
  updateTourAgentCollection(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateTourAgentCollectionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateTourAgentCollectionRes|null) => void
  ): UnaryResponse;
  updateTourAgentCollection(
    requestMessage: api_v1alpha1_wfm_wfm_pb.UpdateTourAgentCollectionReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.UpdateTourAgentCollectionRes|null) => void
  ): UnaryResponse;
  listTourAgentCollections(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListTourAgentCollectionsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListTourAgentCollectionsRes|null) => void
  ): UnaryResponse;
  listTourAgentCollections(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListTourAgentCollectionsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListTourAgentCollectionsRes|null) => void
  ): UnaryResponse;
  deleteTourAgentCollections(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteTourAgentCollectionsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteTourAgentCollectionsRes|null) => void
  ): UnaryResponse;
  deleteTourAgentCollections(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteTourAgentCollectionsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteTourAgentCollectionsRes|null) => void
  ): UnaryResponse;
  createTourAgentCollectionWFMAgents(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateTourAgentCollectionWFMAgentsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateTourAgentCollectionWFMAgentsRes|null) => void
  ): UnaryResponse;
  createTourAgentCollectionWFMAgents(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateTourAgentCollectionWFMAgentsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateTourAgentCollectionWFMAgentsRes|null) => void
  ): UnaryResponse;
  listTourAgentCollectionWFMAgents(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListTourAgentCollectionWFMAgentsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListTourAgentCollectionWFMAgentsRes|null) => void
  ): UnaryResponse;
  listTourAgentCollectionWFMAgents(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListTourAgentCollectionWFMAgentsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListTourAgentCollectionWFMAgentsRes|null) => void
  ): UnaryResponse;
  deleteTourAgentCollectionWFMAgents(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteTourAgentCollectionWFMAgentsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteTourAgentCollectionWFMAgentsRes|null) => void
  ): UnaryResponse;
  deleteTourAgentCollectionWFMAgents(
    requestMessage: api_v1alpha1_wfm_wfm_pb.DeleteTourAgentCollectionWFMAgentsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.DeleteTourAgentCollectionWFMAgentsRes|null) => void
  ): UnaryResponse;
  generateTourWeekPatterns(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GenerateTourWeekPatternsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GenerateTourWeekPatternsRes|null) => void
  ): UnaryResponse;
  generateTourWeekPatterns(
    requestMessage: api_v1alpha1_wfm_wfm_pb.GenerateTourWeekPatternsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.GenerateTourWeekPatternsRes|null) => void
  ): UnaryResponse;
  listValidAgentsForReplacement(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListValidAgentsForReplacementReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListValidAgentsForReplacementRes|null) => void
  ): UnaryResponse;
  listValidAgentsForReplacement(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListValidAgentsForReplacementReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListValidAgentsForReplacementRes|null) => void
  ): UnaryResponse;
  replaceAgentOnSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ReplaceAgentOnScheduleRes,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ReplaceAgentOnScheduleRes|null) => void
  ): UnaryResponse;
  replaceAgentOnSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ReplaceAgentOnScheduleRes,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ReplaceAgentOnScheduleRes|null) => void
  ): UnaryResponse;
  replaceAgentOnScheduleV1(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ReplaceAgentOnScheduleReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ReplaceAgentOnScheduleRes|null) => void
  ): UnaryResponse;
  replaceAgentOnScheduleV1(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ReplaceAgentOnScheduleReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ReplaceAgentOnScheduleRes|null) => void
  ): UnaryResponse;
  removeAgentFromSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.RemoveAgentFromScheduleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.RemoveAgentFromScheduleResponse|null) => void
  ): UnaryResponse;
  removeAgentFromSchedule(
    requestMessage: api_v1alpha1_wfm_wfm_pb.RemoveAgentFromScheduleRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.RemoveAgentFromScheduleResponse|null) => void
  ): UnaryResponse;
  createAgentLeavePetition(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateAgentLeavePetitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateAgentLeavePetitionResponse|null) => void
  ): UnaryResponse;
  createAgentLeavePetition(
    requestMessage: api_v1alpha1_wfm_wfm_pb.CreateAgentLeavePetitionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.CreateAgentLeavePetitionResponse|null) => void
  ): UnaryResponse;
  listAgentLeavePetitions(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListAgentLeavePetitionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListAgentLeavePetitionsResponse|null) => void
  ): UnaryResponse;
  listAgentLeavePetitions(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListAgentLeavePetitionsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListAgentLeavePetitionsResponse|null) => void
  ): UnaryResponse;
  helloWorldWFMAdherence(
    requestMessage: api_v1alpha1_wfm_wfm_pb.HelloWorldWFMAdherenceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.HelloWorldWFMAdherenceResponse|null) => void
  ): UnaryResponse;
  helloWorldWFMAdherence(
    requestMessage: api_v1alpha1_wfm_wfm_pb.HelloWorldWFMAdherenceRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.HelloWorldWFMAdherenceResponse|null) => void
  ): UnaryResponse;
  listAgentStatesForDay(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListAgentStatesForDayRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListAgentStatesForDayResponse|null) => void
  ): UnaryResponse;
  listAgentStatesForDay(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListAgentStatesForDayRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListAgentStatesForDayResponse|null) => void
  ): UnaryResponse;
  listRealTimeManagementStates(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListRealTimeManagementStatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListRealTimeManagementStatesResponse|null) => void
  ): UnaryResponse;
  listRealTimeManagementStates(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListRealTimeManagementStatesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListRealTimeManagementStatesResponse|null) => void
  ): UnaryResponse;
  listRealTimeManagementStateColors(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListRealTimeManagementStateColorsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListRealTimeManagementStateColorsResponse|null) => void
  ): UnaryResponse;
  listRealTimeManagementStateColors(
    requestMessage: api_v1alpha1_wfm_wfm_pb.ListRealTimeManagementStateColorsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_pb.ListRealTimeManagementStateColorsResponse|null) => void
  ): UnaryResponse;
}

