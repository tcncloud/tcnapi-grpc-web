// package: api.v0alpha
// file: api/v0alpha/compliance.proto

import * as api_v0alpha_compliance_pb from "../../api/v0alpha/compliance_pb";
import * as google_longrunning_operations_pb from "../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ComplianceRuleAutoComplete = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.RuleAutoCompleteReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.RuleAutoCompleteRes;
};

type ComplianceCheckRuleSet = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.CheckRuleSetReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.CheckRuleSetRes;
};

type ComplianceAssignRuleSet = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.AssignRuleSetReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.AssignRuleSetRes;
};

type ComplianceListRuleSets = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v0alpha_compliance_pb.ListRuleSetsReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.ListRuleSetsRes;
};

type ComplianceGetRuleSet = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.GetRuleSetReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.RuleSet;
};

type ComplianceGetRuleSetByName = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.GetRuleSetByNameReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.RuleSet;
};

type ComplianceCreateRuleSet = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.CreateRuleSetReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.RuleSet;
};

type ComplianceRenameRuleSet = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.RenameRuleSetReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.RenameRuleSetRes;
};

type ComplianceEnableRuleSet = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.EnableRuleSetReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.EnableRuleSetRes;
};

type ComplianceDisableRuleSet = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.DisableRuleSetReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.DisableRuleSetRes;
};

type ComplianceCreateScrubList = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.CreateScrubListReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.ScrubListRes;
};

type ComplianceUpdateScrubList = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.UpdateScrubListRequest;
  readonly responseType: typeof api_v0alpha_compliance_pb.UpdateScrubListResponse;
};

type ComplianceAddScrubListEntries = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.AddScrubListEntriesReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.ScrubListRes;
};

type ComplianceUpdateScrubEntry = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.UpdateScrubEntryReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.UpdateScrubEntryRes;
};

type ComplianceDeleteScrubListEntries = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.DeleteScrubListEntriesReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.ScrubListRes;
};

type ComplianceGetScrubList = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.GetScrubListReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.ScrubListRes;
};

type ComplianceDeleteScrubList = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.DeleteScrubListReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.ScrubListRes;
};

type ComplianceGetDefaultRules = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.GetDefaultRulesReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.GetDefaultRulesRes;
};

type ComplianceGetScrubLists = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.GetScrubListsReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.ScrubListsRes;
};

type ComplianceSearchScrubList = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.SearchScrubListReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.ScrubList;
};

type ComplianceGetScrubListUploadUrl = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.GetScrubListUploadUrlReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.GetScrubListUploadUrlRes;
};

type ComplianceProcessScrubListUpload = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.ProcessScrubListUploadReq;
  readonly responseType: typeof google_longrunning_operations_pb.Operation;
};

type ComplianceScrubListDownload = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.ScrubListDownloadRequest;
  readonly responseType: typeof google_longrunning_operations_pb.Operation;
};

type ComplianceProcessScrubListDeleteUpload = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.ProcessScrubListDeleteUploadReq;
  readonly responseType: typeof google_longrunning_operations_pb.Operation;
};

type ComplianceExportScrubList = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.ExportScrubListReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.ExportScrubListRes;
};

type CompliancePurgeScrubList = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.PurgeScrubListReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.PurgeScrubListRes;
};

type ComplianceCreateScenario = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.CreateScenarioReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.CreateScenarioRes;
};

type ComplianceGetScenario = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.GetScenarioReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.GetScenarioRes;
};

type ComplianceUpdateScenario = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.UpdateScenarioReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.UpdateScenarioRes;
};

type ComplianceDeleteScenario = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.DeleteScenarioReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.DeleteScenarioRes;
};

type ComplianceRunAssignedScenarios = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.RunAssignedScenariosReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.RunAssignedScenariosRes;
};

type ComplianceListAllScenarios = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.ListAllScenariosReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.ListAllScenariosRes;
};

type ComplianceListUnassignedScenarios = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.ListUnassignedScenariosReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.ListUnassignedScenariosRes;
};

type ComplianceListAssignedRuleSets = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.ListAssignedRuleSetsReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.ListAssignedRuleSetsRes;
};

type ComplianceListAssignedScenarios = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.ListAssignedScenariosReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.ListAssignedScenariosRes;
};

type ComplianceAssignScenario = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.AssignScenarioReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ComplianceUnassignScenario = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.UnassignScenarioReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ComplianceEnableScenario = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.EnableScenarioReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ComplianceDisableScenario = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.DisableScenarioReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ComplianceGetFieldNames = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.GetFieldNamesReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.FieldNames;
};

type ComplianceGetResultDescriptions = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.GetResultDescriptionsReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.FieldNames;
};

type ComplianceCreateConsentProfile = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.CreateConsentProfileReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.CreateConsentProfileRes;
};

type ComplianceCreateConsent = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.CreateConsentReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.CreateConsentRes;
};

type ComplianceGetConsentProfile = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.GetConsentProfileReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.ConsentProfile;
};

type ComplianceGetConsent = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.GetConsentReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.Consent;
};

type ComplianceGetConsentByProfileAndContent = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.GetConsentByProfileAndContentReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.GetConsentByProfileAndContentRes;
};

type ComplianceGetConsentByContent = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.GetConsentByContentReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.GetConsentByContentRes;
};

type ComplianceSearchConsentByContent = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.SearchConsentByContentReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.SearchConsentByContentRes;
};

type ComplianceUpdateConsent = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.UpdateConsentReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ComplianceExpireConsent = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.ExpireConsentReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ComplianceRevokeConsent = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.RevokeConsentReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ComplianceDeleteConsent = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.DeleteConsentReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ComplianceProcessConsentListDeleteUpload = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.ProcessConsentListDeleteUploadReq;
  readonly responseType: typeof google_longrunning_operations_pb.Operation;
};

type ComplianceConsentListDownload = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.ConsentListDownloadRequest;
  readonly responseType: typeof google_longrunning_operations_pb.Operation;
};

type ComplianceEnableConsentProfile = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.EnableConsentProfileReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ComplianceDisableConsentProfile = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.DisableConsentProfileReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ComplianceListConsentProfiles = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.ListConsentProfilesReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.ListConsentProfilesRes;
};

type ComplianceGetConsentUploadUrl = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.GetConsentUploadUrlReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.GetConsentUploadUrlRes;
};

type ComplianceProcessConsentUpload = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.ProcessConsentUploadReq;
  readonly responseType: typeof google_longrunning_operations_pb.Operation;
};

type ComplianceExportConsentList = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.ExportConsentListRequest;
  readonly responseType: typeof api_v0alpha_compliance_pb.ExportConsentListResponse;
};

type ComplianceListConsentTopics = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.ListConsentTopicsReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.ListConsentTopicsRes;
};

type ComplianceGetConsentTopic = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.GetConsentTopicReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.ConsentTopic;
};

type ComplianceCreateConsentTopic = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.ConsentTopic;
  readonly responseType: typeof api_v0alpha_compliance_pb.Empty;
};

type ComplianceDeleteConsentTopic = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.ConsentTopic;
  readonly responseType: typeof api_v0alpha_compliance_pb.Empty;
};

type ComplianceUpdateConsentTopic = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.UpdateConsentTopicReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.Empty;
};

type ComplianceProcessOutboundCall = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.ProcessOutboundCallReq;
  readonly responseType: typeof api_v0alpha_compliance_pb.ProcessRes;
};

type ComplianceQueryHolidays = {
  readonly methodName: string;
  readonly service: typeof Compliance;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_compliance_pb.QueryHolidaysRequest;
  readonly responseType: typeof api_v0alpha_compliance_pb.QueryHolidaysResponse;
};

export class Compliance {
  static readonly serviceName: string;
  static readonly RuleAutoComplete: ComplianceRuleAutoComplete;
  static readonly CheckRuleSet: ComplianceCheckRuleSet;
  static readonly AssignRuleSet: ComplianceAssignRuleSet;
  static readonly ListRuleSets: ComplianceListRuleSets;
  static readonly GetRuleSet: ComplianceGetRuleSet;
  static readonly GetRuleSetByName: ComplianceGetRuleSetByName;
  static readonly CreateRuleSet: ComplianceCreateRuleSet;
  static readonly RenameRuleSet: ComplianceRenameRuleSet;
  static readonly EnableRuleSet: ComplianceEnableRuleSet;
  static readonly DisableRuleSet: ComplianceDisableRuleSet;
  static readonly CreateScrubList: ComplianceCreateScrubList;
  static readonly UpdateScrubList: ComplianceUpdateScrubList;
  static readonly AddScrubListEntries: ComplianceAddScrubListEntries;
  static readonly UpdateScrubEntry: ComplianceUpdateScrubEntry;
  static readonly DeleteScrubListEntries: ComplianceDeleteScrubListEntries;
  static readonly GetScrubList: ComplianceGetScrubList;
  static readonly DeleteScrubList: ComplianceDeleteScrubList;
  static readonly GetDefaultRules: ComplianceGetDefaultRules;
  static readonly GetScrubLists: ComplianceGetScrubLists;
  static readonly SearchScrubList: ComplianceSearchScrubList;
  static readonly GetScrubListUploadUrl: ComplianceGetScrubListUploadUrl;
  static readonly ProcessScrubListUpload: ComplianceProcessScrubListUpload;
  static readonly ScrubListDownload: ComplianceScrubListDownload;
  static readonly ProcessScrubListDeleteUpload: ComplianceProcessScrubListDeleteUpload;
  static readonly ExportScrubList: ComplianceExportScrubList;
  static readonly PurgeScrubList: CompliancePurgeScrubList;
  static readonly CreateScenario: ComplianceCreateScenario;
  static readonly GetScenario: ComplianceGetScenario;
  static readonly UpdateScenario: ComplianceUpdateScenario;
  static readonly DeleteScenario: ComplianceDeleteScenario;
  static readonly RunAssignedScenarios: ComplianceRunAssignedScenarios;
  static readonly ListAllScenarios: ComplianceListAllScenarios;
  static readonly ListUnassignedScenarios: ComplianceListUnassignedScenarios;
  static readonly ListAssignedRuleSets: ComplianceListAssignedRuleSets;
  static readonly ListAssignedScenarios: ComplianceListAssignedScenarios;
  static readonly AssignScenario: ComplianceAssignScenario;
  static readonly UnassignScenario: ComplianceUnassignScenario;
  static readonly EnableScenario: ComplianceEnableScenario;
  static readonly DisableScenario: ComplianceDisableScenario;
  static readonly GetFieldNames: ComplianceGetFieldNames;
  static readonly GetResultDescriptions: ComplianceGetResultDescriptions;
  static readonly CreateConsentProfile: ComplianceCreateConsentProfile;
  static readonly CreateConsent: ComplianceCreateConsent;
  static readonly GetConsentProfile: ComplianceGetConsentProfile;
  static readonly GetConsent: ComplianceGetConsent;
  static readonly GetConsentByProfileAndContent: ComplianceGetConsentByProfileAndContent;
  static readonly GetConsentByContent: ComplianceGetConsentByContent;
  static readonly SearchConsentByContent: ComplianceSearchConsentByContent;
  static readonly UpdateConsent: ComplianceUpdateConsent;
  static readonly ExpireConsent: ComplianceExpireConsent;
  static readonly RevokeConsent: ComplianceRevokeConsent;
  static readonly DeleteConsent: ComplianceDeleteConsent;
  static readonly ProcessConsentListDeleteUpload: ComplianceProcessConsentListDeleteUpload;
  static readonly ConsentListDownload: ComplianceConsentListDownload;
  static readonly EnableConsentProfile: ComplianceEnableConsentProfile;
  static readonly DisableConsentProfile: ComplianceDisableConsentProfile;
  static readonly ListConsentProfiles: ComplianceListConsentProfiles;
  static readonly GetConsentUploadUrl: ComplianceGetConsentUploadUrl;
  static readonly ProcessConsentUpload: ComplianceProcessConsentUpload;
  static readonly ExportConsentList: ComplianceExportConsentList;
  static readonly ListConsentTopics: ComplianceListConsentTopics;
  static readonly GetConsentTopic: ComplianceGetConsentTopic;
  static readonly CreateConsentTopic: ComplianceCreateConsentTopic;
  static readonly DeleteConsentTopic: ComplianceDeleteConsentTopic;
  static readonly UpdateConsentTopic: ComplianceUpdateConsentTopic;
  static readonly ProcessOutboundCall: ComplianceProcessOutboundCall;
  static readonly QueryHolidays: ComplianceQueryHolidays;
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

export class ComplianceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  ruleAutoComplete(
    requestMessage: api_v0alpha_compliance_pb.RuleAutoCompleteReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.RuleAutoCompleteRes|null) => void
  ): UnaryResponse;
  ruleAutoComplete(
    requestMessage: api_v0alpha_compliance_pb.RuleAutoCompleteReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.RuleAutoCompleteRes|null) => void
  ): UnaryResponse;
  checkRuleSet(
    requestMessage: api_v0alpha_compliance_pb.CheckRuleSetReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.CheckRuleSetRes|null) => void
  ): UnaryResponse;
  checkRuleSet(
    requestMessage: api_v0alpha_compliance_pb.CheckRuleSetReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.CheckRuleSetRes|null) => void
  ): UnaryResponse;
  assignRuleSet(
    requestMessage: api_v0alpha_compliance_pb.AssignRuleSetReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.AssignRuleSetRes|null) => void
  ): UnaryResponse;
  assignRuleSet(
    requestMessage: api_v0alpha_compliance_pb.AssignRuleSetReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.AssignRuleSetRes|null) => void
  ): UnaryResponse;
  listRuleSets(requestMessage: api_v0alpha_compliance_pb.ListRuleSetsReq, metadata?: grpc.Metadata): ResponseStream<api_v0alpha_compliance_pb.ListRuleSetsRes>;
  getRuleSet(
    requestMessage: api_v0alpha_compliance_pb.GetRuleSetReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.RuleSet|null) => void
  ): UnaryResponse;
  getRuleSet(
    requestMessage: api_v0alpha_compliance_pb.GetRuleSetReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.RuleSet|null) => void
  ): UnaryResponse;
  getRuleSetByName(
    requestMessage: api_v0alpha_compliance_pb.GetRuleSetByNameReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.RuleSet|null) => void
  ): UnaryResponse;
  getRuleSetByName(
    requestMessage: api_v0alpha_compliance_pb.GetRuleSetByNameReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.RuleSet|null) => void
  ): UnaryResponse;
  createRuleSet(
    requestMessage: api_v0alpha_compliance_pb.CreateRuleSetReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.RuleSet|null) => void
  ): UnaryResponse;
  createRuleSet(
    requestMessage: api_v0alpha_compliance_pb.CreateRuleSetReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.RuleSet|null) => void
  ): UnaryResponse;
  renameRuleSet(
    requestMessage: api_v0alpha_compliance_pb.RenameRuleSetReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.RenameRuleSetRes|null) => void
  ): UnaryResponse;
  renameRuleSet(
    requestMessage: api_v0alpha_compliance_pb.RenameRuleSetReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.RenameRuleSetRes|null) => void
  ): UnaryResponse;
  enableRuleSet(
    requestMessage: api_v0alpha_compliance_pb.EnableRuleSetReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.EnableRuleSetRes|null) => void
  ): UnaryResponse;
  enableRuleSet(
    requestMessage: api_v0alpha_compliance_pb.EnableRuleSetReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.EnableRuleSetRes|null) => void
  ): UnaryResponse;
  disableRuleSet(
    requestMessage: api_v0alpha_compliance_pb.DisableRuleSetReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.DisableRuleSetRes|null) => void
  ): UnaryResponse;
  disableRuleSet(
    requestMessage: api_v0alpha_compliance_pb.DisableRuleSetReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.DisableRuleSetRes|null) => void
  ): UnaryResponse;
  createScrubList(
    requestMessage: api_v0alpha_compliance_pb.CreateScrubListReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ScrubListRes|null) => void
  ): UnaryResponse;
  createScrubList(
    requestMessage: api_v0alpha_compliance_pb.CreateScrubListReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ScrubListRes|null) => void
  ): UnaryResponse;
  updateScrubList(
    requestMessage: api_v0alpha_compliance_pb.UpdateScrubListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.UpdateScrubListResponse|null) => void
  ): UnaryResponse;
  updateScrubList(
    requestMessage: api_v0alpha_compliance_pb.UpdateScrubListRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.UpdateScrubListResponse|null) => void
  ): UnaryResponse;
  addScrubListEntries(
    requestMessage: api_v0alpha_compliance_pb.AddScrubListEntriesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ScrubListRes|null) => void
  ): UnaryResponse;
  addScrubListEntries(
    requestMessage: api_v0alpha_compliance_pb.AddScrubListEntriesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ScrubListRes|null) => void
  ): UnaryResponse;
  updateScrubEntry(
    requestMessage: api_v0alpha_compliance_pb.UpdateScrubEntryReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.UpdateScrubEntryRes|null) => void
  ): UnaryResponse;
  updateScrubEntry(
    requestMessage: api_v0alpha_compliance_pb.UpdateScrubEntryReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.UpdateScrubEntryRes|null) => void
  ): UnaryResponse;
  deleteScrubListEntries(
    requestMessage: api_v0alpha_compliance_pb.DeleteScrubListEntriesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ScrubListRes|null) => void
  ): UnaryResponse;
  deleteScrubListEntries(
    requestMessage: api_v0alpha_compliance_pb.DeleteScrubListEntriesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ScrubListRes|null) => void
  ): UnaryResponse;
  getScrubList(
    requestMessage: api_v0alpha_compliance_pb.GetScrubListReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ScrubListRes|null) => void
  ): UnaryResponse;
  getScrubList(
    requestMessage: api_v0alpha_compliance_pb.GetScrubListReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ScrubListRes|null) => void
  ): UnaryResponse;
  deleteScrubList(
    requestMessage: api_v0alpha_compliance_pb.DeleteScrubListReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ScrubListRes|null) => void
  ): UnaryResponse;
  deleteScrubList(
    requestMessage: api_v0alpha_compliance_pb.DeleteScrubListReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ScrubListRes|null) => void
  ): UnaryResponse;
  getDefaultRules(
    requestMessage: api_v0alpha_compliance_pb.GetDefaultRulesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.GetDefaultRulesRes|null) => void
  ): UnaryResponse;
  getDefaultRules(
    requestMessage: api_v0alpha_compliance_pb.GetDefaultRulesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.GetDefaultRulesRes|null) => void
  ): UnaryResponse;
  getScrubLists(
    requestMessage: api_v0alpha_compliance_pb.GetScrubListsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ScrubListsRes|null) => void
  ): UnaryResponse;
  getScrubLists(
    requestMessage: api_v0alpha_compliance_pb.GetScrubListsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ScrubListsRes|null) => void
  ): UnaryResponse;
  searchScrubList(
    requestMessage: api_v0alpha_compliance_pb.SearchScrubListReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ScrubList|null) => void
  ): UnaryResponse;
  searchScrubList(
    requestMessage: api_v0alpha_compliance_pb.SearchScrubListReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ScrubList|null) => void
  ): UnaryResponse;
  getScrubListUploadUrl(
    requestMessage: api_v0alpha_compliance_pb.GetScrubListUploadUrlReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.GetScrubListUploadUrlRes|null) => void
  ): UnaryResponse;
  getScrubListUploadUrl(
    requestMessage: api_v0alpha_compliance_pb.GetScrubListUploadUrlReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.GetScrubListUploadUrlRes|null) => void
  ): UnaryResponse;
  processScrubListUpload(
    requestMessage: api_v0alpha_compliance_pb.ProcessScrubListUploadReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_longrunning_operations_pb.Operation|null) => void
  ): UnaryResponse;
  processScrubListUpload(
    requestMessage: api_v0alpha_compliance_pb.ProcessScrubListUploadReq,
    callback: (error: ServiceError|null, responseMessage: google_longrunning_operations_pb.Operation|null) => void
  ): UnaryResponse;
  scrubListDownload(
    requestMessage: api_v0alpha_compliance_pb.ScrubListDownloadRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_longrunning_operations_pb.Operation|null) => void
  ): UnaryResponse;
  scrubListDownload(
    requestMessage: api_v0alpha_compliance_pb.ScrubListDownloadRequest,
    callback: (error: ServiceError|null, responseMessage: google_longrunning_operations_pb.Operation|null) => void
  ): UnaryResponse;
  processScrubListDeleteUpload(
    requestMessage: api_v0alpha_compliance_pb.ProcessScrubListDeleteUploadReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_longrunning_operations_pb.Operation|null) => void
  ): UnaryResponse;
  processScrubListDeleteUpload(
    requestMessage: api_v0alpha_compliance_pb.ProcessScrubListDeleteUploadReq,
    callback: (error: ServiceError|null, responseMessage: google_longrunning_operations_pb.Operation|null) => void
  ): UnaryResponse;
  exportScrubList(
    requestMessage: api_v0alpha_compliance_pb.ExportScrubListReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ExportScrubListRes|null) => void
  ): UnaryResponse;
  exportScrubList(
    requestMessage: api_v0alpha_compliance_pb.ExportScrubListReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ExportScrubListRes|null) => void
  ): UnaryResponse;
  purgeScrubList(
    requestMessage: api_v0alpha_compliance_pb.PurgeScrubListReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.PurgeScrubListRes|null) => void
  ): UnaryResponse;
  purgeScrubList(
    requestMessage: api_v0alpha_compliance_pb.PurgeScrubListReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.PurgeScrubListRes|null) => void
  ): UnaryResponse;
  createScenario(
    requestMessage: api_v0alpha_compliance_pb.CreateScenarioReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.CreateScenarioRes|null) => void
  ): UnaryResponse;
  createScenario(
    requestMessage: api_v0alpha_compliance_pb.CreateScenarioReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.CreateScenarioRes|null) => void
  ): UnaryResponse;
  getScenario(
    requestMessage: api_v0alpha_compliance_pb.GetScenarioReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.GetScenarioRes|null) => void
  ): UnaryResponse;
  getScenario(
    requestMessage: api_v0alpha_compliance_pb.GetScenarioReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.GetScenarioRes|null) => void
  ): UnaryResponse;
  updateScenario(
    requestMessage: api_v0alpha_compliance_pb.UpdateScenarioReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.UpdateScenarioRes|null) => void
  ): UnaryResponse;
  updateScenario(
    requestMessage: api_v0alpha_compliance_pb.UpdateScenarioReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.UpdateScenarioRes|null) => void
  ): UnaryResponse;
  deleteScenario(
    requestMessage: api_v0alpha_compliance_pb.DeleteScenarioReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.DeleteScenarioRes|null) => void
  ): UnaryResponse;
  deleteScenario(
    requestMessage: api_v0alpha_compliance_pb.DeleteScenarioReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.DeleteScenarioRes|null) => void
  ): UnaryResponse;
  runAssignedScenarios(
    requestMessage: api_v0alpha_compliance_pb.RunAssignedScenariosReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.RunAssignedScenariosRes|null) => void
  ): UnaryResponse;
  runAssignedScenarios(
    requestMessage: api_v0alpha_compliance_pb.RunAssignedScenariosReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.RunAssignedScenariosRes|null) => void
  ): UnaryResponse;
  listAllScenarios(
    requestMessage: api_v0alpha_compliance_pb.ListAllScenariosReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ListAllScenariosRes|null) => void
  ): UnaryResponse;
  listAllScenarios(
    requestMessage: api_v0alpha_compliance_pb.ListAllScenariosReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ListAllScenariosRes|null) => void
  ): UnaryResponse;
  listUnassignedScenarios(
    requestMessage: api_v0alpha_compliance_pb.ListUnassignedScenariosReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ListUnassignedScenariosRes|null) => void
  ): UnaryResponse;
  listUnassignedScenarios(
    requestMessage: api_v0alpha_compliance_pb.ListUnassignedScenariosReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ListUnassignedScenariosRes|null) => void
  ): UnaryResponse;
  listAssignedRuleSets(
    requestMessage: api_v0alpha_compliance_pb.ListAssignedRuleSetsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ListAssignedRuleSetsRes|null) => void
  ): UnaryResponse;
  listAssignedRuleSets(
    requestMessage: api_v0alpha_compliance_pb.ListAssignedRuleSetsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ListAssignedRuleSetsRes|null) => void
  ): UnaryResponse;
  listAssignedScenarios(
    requestMessage: api_v0alpha_compliance_pb.ListAssignedScenariosReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ListAssignedScenariosRes|null) => void
  ): UnaryResponse;
  listAssignedScenarios(
    requestMessage: api_v0alpha_compliance_pb.ListAssignedScenariosReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ListAssignedScenariosRes|null) => void
  ): UnaryResponse;
  assignScenario(
    requestMessage: api_v0alpha_compliance_pb.AssignScenarioReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  assignScenario(
    requestMessage: api_v0alpha_compliance_pb.AssignScenarioReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  unassignScenario(
    requestMessage: api_v0alpha_compliance_pb.UnassignScenarioReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  unassignScenario(
    requestMessage: api_v0alpha_compliance_pb.UnassignScenarioReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  enableScenario(
    requestMessage: api_v0alpha_compliance_pb.EnableScenarioReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  enableScenario(
    requestMessage: api_v0alpha_compliance_pb.EnableScenarioReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  disableScenario(
    requestMessage: api_v0alpha_compliance_pb.DisableScenarioReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  disableScenario(
    requestMessage: api_v0alpha_compliance_pb.DisableScenarioReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getFieldNames(
    requestMessage: api_v0alpha_compliance_pb.GetFieldNamesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.FieldNames|null) => void
  ): UnaryResponse;
  getFieldNames(
    requestMessage: api_v0alpha_compliance_pb.GetFieldNamesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.FieldNames|null) => void
  ): UnaryResponse;
  getResultDescriptions(
    requestMessage: api_v0alpha_compliance_pb.GetResultDescriptionsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.FieldNames|null) => void
  ): UnaryResponse;
  getResultDescriptions(
    requestMessage: api_v0alpha_compliance_pb.GetResultDescriptionsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.FieldNames|null) => void
  ): UnaryResponse;
  createConsentProfile(
    requestMessage: api_v0alpha_compliance_pb.CreateConsentProfileReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.CreateConsentProfileRes|null) => void
  ): UnaryResponse;
  createConsentProfile(
    requestMessage: api_v0alpha_compliance_pb.CreateConsentProfileReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.CreateConsentProfileRes|null) => void
  ): UnaryResponse;
  createConsent(
    requestMessage: api_v0alpha_compliance_pb.CreateConsentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.CreateConsentRes|null) => void
  ): UnaryResponse;
  createConsent(
    requestMessage: api_v0alpha_compliance_pb.CreateConsentReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.CreateConsentRes|null) => void
  ): UnaryResponse;
  getConsentProfile(
    requestMessage: api_v0alpha_compliance_pb.GetConsentProfileReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ConsentProfile|null) => void
  ): UnaryResponse;
  getConsentProfile(
    requestMessage: api_v0alpha_compliance_pb.GetConsentProfileReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ConsentProfile|null) => void
  ): UnaryResponse;
  getConsent(
    requestMessage: api_v0alpha_compliance_pb.GetConsentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.Consent|null) => void
  ): UnaryResponse;
  getConsent(
    requestMessage: api_v0alpha_compliance_pb.GetConsentReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.Consent|null) => void
  ): UnaryResponse;
  getConsentByProfileAndContent(
    requestMessage: api_v0alpha_compliance_pb.GetConsentByProfileAndContentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.GetConsentByProfileAndContentRes|null) => void
  ): UnaryResponse;
  getConsentByProfileAndContent(
    requestMessage: api_v0alpha_compliance_pb.GetConsentByProfileAndContentReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.GetConsentByProfileAndContentRes|null) => void
  ): UnaryResponse;
  getConsentByContent(
    requestMessage: api_v0alpha_compliance_pb.GetConsentByContentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.GetConsentByContentRes|null) => void
  ): UnaryResponse;
  getConsentByContent(
    requestMessage: api_v0alpha_compliance_pb.GetConsentByContentReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.GetConsentByContentRes|null) => void
  ): UnaryResponse;
  searchConsentByContent(
    requestMessage: api_v0alpha_compliance_pb.SearchConsentByContentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.SearchConsentByContentRes|null) => void
  ): UnaryResponse;
  searchConsentByContent(
    requestMessage: api_v0alpha_compliance_pb.SearchConsentByContentReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.SearchConsentByContentRes|null) => void
  ): UnaryResponse;
  updateConsent(
    requestMessage: api_v0alpha_compliance_pb.UpdateConsentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateConsent(
    requestMessage: api_v0alpha_compliance_pb.UpdateConsentReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  expireConsent(
    requestMessage: api_v0alpha_compliance_pb.ExpireConsentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  expireConsent(
    requestMessage: api_v0alpha_compliance_pb.ExpireConsentReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  revokeConsent(
    requestMessage: api_v0alpha_compliance_pb.RevokeConsentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  revokeConsent(
    requestMessage: api_v0alpha_compliance_pb.RevokeConsentReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteConsent(
    requestMessage: api_v0alpha_compliance_pb.DeleteConsentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteConsent(
    requestMessage: api_v0alpha_compliance_pb.DeleteConsentReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  processConsentListDeleteUpload(
    requestMessage: api_v0alpha_compliance_pb.ProcessConsentListDeleteUploadReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_longrunning_operations_pb.Operation|null) => void
  ): UnaryResponse;
  processConsentListDeleteUpload(
    requestMessage: api_v0alpha_compliance_pb.ProcessConsentListDeleteUploadReq,
    callback: (error: ServiceError|null, responseMessage: google_longrunning_operations_pb.Operation|null) => void
  ): UnaryResponse;
  consentListDownload(
    requestMessage: api_v0alpha_compliance_pb.ConsentListDownloadRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_longrunning_operations_pb.Operation|null) => void
  ): UnaryResponse;
  consentListDownload(
    requestMessage: api_v0alpha_compliance_pb.ConsentListDownloadRequest,
    callback: (error: ServiceError|null, responseMessage: google_longrunning_operations_pb.Operation|null) => void
  ): UnaryResponse;
  enableConsentProfile(
    requestMessage: api_v0alpha_compliance_pb.EnableConsentProfileReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  enableConsentProfile(
    requestMessage: api_v0alpha_compliance_pb.EnableConsentProfileReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  disableConsentProfile(
    requestMessage: api_v0alpha_compliance_pb.DisableConsentProfileReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  disableConsentProfile(
    requestMessage: api_v0alpha_compliance_pb.DisableConsentProfileReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  listConsentProfiles(
    requestMessage: api_v0alpha_compliance_pb.ListConsentProfilesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ListConsentProfilesRes|null) => void
  ): UnaryResponse;
  listConsentProfiles(
    requestMessage: api_v0alpha_compliance_pb.ListConsentProfilesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ListConsentProfilesRes|null) => void
  ): UnaryResponse;
  getConsentUploadUrl(
    requestMessage: api_v0alpha_compliance_pb.GetConsentUploadUrlReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.GetConsentUploadUrlRes|null) => void
  ): UnaryResponse;
  getConsentUploadUrl(
    requestMessage: api_v0alpha_compliance_pb.GetConsentUploadUrlReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.GetConsentUploadUrlRes|null) => void
  ): UnaryResponse;
  processConsentUpload(
    requestMessage: api_v0alpha_compliance_pb.ProcessConsentUploadReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_longrunning_operations_pb.Operation|null) => void
  ): UnaryResponse;
  processConsentUpload(
    requestMessage: api_v0alpha_compliance_pb.ProcessConsentUploadReq,
    callback: (error: ServiceError|null, responseMessage: google_longrunning_operations_pb.Operation|null) => void
  ): UnaryResponse;
  exportConsentList(
    requestMessage: api_v0alpha_compliance_pb.ExportConsentListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ExportConsentListResponse|null) => void
  ): UnaryResponse;
  exportConsentList(
    requestMessage: api_v0alpha_compliance_pb.ExportConsentListRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ExportConsentListResponse|null) => void
  ): UnaryResponse;
  listConsentTopics(
    requestMessage: api_v0alpha_compliance_pb.ListConsentTopicsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ListConsentTopicsRes|null) => void
  ): UnaryResponse;
  listConsentTopics(
    requestMessage: api_v0alpha_compliance_pb.ListConsentTopicsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ListConsentTopicsRes|null) => void
  ): UnaryResponse;
  getConsentTopic(
    requestMessage: api_v0alpha_compliance_pb.GetConsentTopicReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ConsentTopic|null) => void
  ): UnaryResponse;
  getConsentTopic(
    requestMessage: api_v0alpha_compliance_pb.GetConsentTopicReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ConsentTopic|null) => void
  ): UnaryResponse;
  createConsentTopic(
    requestMessage: api_v0alpha_compliance_pb.ConsentTopic,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.Empty|null) => void
  ): UnaryResponse;
  createConsentTopic(
    requestMessage: api_v0alpha_compliance_pb.ConsentTopic,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.Empty|null) => void
  ): UnaryResponse;
  deleteConsentTopic(
    requestMessage: api_v0alpha_compliance_pb.ConsentTopic,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.Empty|null) => void
  ): UnaryResponse;
  deleteConsentTopic(
    requestMessage: api_v0alpha_compliance_pb.ConsentTopic,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.Empty|null) => void
  ): UnaryResponse;
  updateConsentTopic(
    requestMessage: api_v0alpha_compliance_pb.UpdateConsentTopicReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.Empty|null) => void
  ): UnaryResponse;
  updateConsentTopic(
    requestMessage: api_v0alpha_compliance_pb.UpdateConsentTopicReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.Empty|null) => void
  ): UnaryResponse;
  processOutboundCall(
    requestMessage: api_v0alpha_compliance_pb.ProcessOutboundCallReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ProcessRes|null) => void
  ): UnaryResponse;
  processOutboundCall(
    requestMessage: api_v0alpha_compliance_pb.ProcessOutboundCallReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.ProcessRes|null) => void
  ): UnaryResponse;
  queryHolidays(
    requestMessage: api_v0alpha_compliance_pb.QueryHolidaysRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.QueryHolidaysResponse|null) => void
  ): UnaryResponse;
  queryHolidays(
    requestMessage: api_v0alpha_compliance_pb.QueryHolidaysRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_compliance_pb.QueryHolidaysResponse|null) => void
  ): UnaryResponse;
}

