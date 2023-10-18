// package: api.v0alpha
// file: api/v0alpha/lms.proto

import * as api_v0alpha_lms_pb from "../../api/v0alpha/lms_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type LMSGetPublicKey = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.GetPublicKeyReq;
  readonly responseType: typeof api_v0alpha_lms_pb.PublicKey;
};

type LMSCreateFileTemplate = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.FileTemplate;
  readonly responseType: typeof api_v0alpha_lms_pb.FileTemplate;
};

type LMSListFileTemplates = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v0alpha_lms_pb.GetFileTemplatesReq;
  readonly responseType: typeof api_v0alpha_lms_pb.FileTemplate;
};

type LMSUpdateFileTemplate = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.FileTemplate;
  readonly responseType: typeof api_v0alpha_lms_pb.FileTemplate;
};

type LMSDeleteFileTemplate = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.FileTemplate;
  readonly responseType: typeof api_v0alpha_lms_pb.FileTemplate;
};

type LMSGetFileTemplate = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.FileTemplate;
  readonly responseType: typeof api_v0alpha_lms_pb.FileTemplate;
};

type LMSCreateField = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.Field;
  readonly responseType: typeof api_v0alpha_lms_pb.Field;
};

type LMSListFields = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.ListFieldsReq;
  readonly responseType: typeof api_v0alpha_lms_pb.Fields;
};

type LMSGetField = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.Field;
  readonly responseType: typeof api_v0alpha_lms_pb.Field;
};

type LMSUpdateField = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.UpdateFieldReq;
  readonly responseType: typeof api_v0alpha_lms_pb.Field;
};

type LMSDeleteField = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.Field;
  readonly responseType: typeof api_v0alpha_lms_pb.Field;
};

type LMSListAvailableFieldsByElementId = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.ListAvailableFieldsByElementIdReq;
  readonly responseType: typeof api_v0alpha_lms_pb.ProcessFields;
};

type LMSListFieldsForElement = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.ListFieldsForElementReq;
  readonly responseType: typeof api_v0alpha_lms_pb.ListFieldsForElementRes;
};

type LMSListAutocompleteFields = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.ListAutocompleteFieldsReq;
  readonly responseType: typeof api_v0alpha_lms_pb.ListAutocompleteFieldsRes;
};

type LMSListCampaignLinks = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof api_v0alpha_lms_pb.ListCampaignLinksRes;
};

type LMSPeekList = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.PeekListReq;
  readonly responseType: typeof api_v0alpha_lms_pb.PeekListRes;
};

type LMSGetHistory = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.GetHistoryReq;
  readonly responseType: typeof api_v0alpha_lms_pb.GetHistoryRes;
};

type LMSCreateElement = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.Element;
  readonly responseType: typeof api_v0alpha_lms_pb.Element;
};

type LMSListElements = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v0alpha_lms_pb.ListElementsReq;
  readonly responseType: typeof api_v0alpha_lms_pb.Element;
};

type LMSGetElement = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.ElementPK;
  readonly responseType: typeof api_v0alpha_lms_pb.Element;
};

type LMSUpdateElement = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.Element;
  readonly responseType: typeof api_v0alpha_lms_pb.Element;
};

type LMSDeleteElement = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.Element;
  readonly responseType: typeof api_v0alpha_lms_pb.Element;
};

type LMSCopyPipelineUpstream = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v0alpha_lms_pb.Element;
  readonly responseType: typeof api_v0alpha_lms_pb.Element;
};

type LMSCopyPipelineDownstream = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v0alpha_lms_pb.Element;
  readonly responseType: typeof api_v0alpha_lms_pb.Element;
};

type LMSProcessElement = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.ProcessElementReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type LMSProcessList = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.ProcessListRequest;
  readonly responseType: typeof api_v0alpha_lms_pb.ProcessListResponse;
};

type LMSStreamList = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.StreamListRequest;
  readonly responseType: typeof api_v0alpha_lms_pb.StreamListResponse;
};

type LMSGetAvailableFields = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof api_v0alpha_lms_pb.ProcessFields;
};

type LMSListNewEvents = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof api_v0alpha_lms_pb.Events;
};

type LMSViewQueue = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.ViewQueueReq;
  readonly responseType: typeof api_v0alpha_lms_pb.Events;
};

type LMSAutocomplete = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.ParseReq;
  readonly responseType: typeof api_v0alpha_lms_pb.ParseRes;
};

type LMSGetComplianceScrubLists = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.GetComplianceScrubListsReq;
  readonly responseType: typeof api_v0alpha_lms_pb.GetComplianceScrubListsRes;
};

type LMSFindFieldUsages = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.FindFieldUsagesReq;
  readonly responseType: typeof api_v0alpha_lms_pb.FindFieldUsagesRes;
};

type LMSFindInvalidElements = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.FindInvalidElementsReq;
  readonly responseType: typeof api_v0alpha_lms_pb.FindInvalidElementsRes;
};

type LMSCreateCollection = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.CollectionMetadata;
  readonly responseType: typeof api_v0alpha_lms_pb.CollectionMetadata;
};

type LMSGetCollection = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.GetCollectionReq;
  readonly responseType: typeof api_v0alpha_lms_pb.CollectionMetadata;
};

type LMSUpdateCollection = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.CollectionMetadata;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type LMSDeleteCollection = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.DeleteCollectionReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type LMSListCollections = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.ListCollectionsReq;
  readonly responseType: typeof api_v0alpha_lms_pb.ListCollectionsRes;
};

type LMSResetCollection = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.ResetCollectionReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type LMSAddCollectionEntry = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.CollectionEntry;
  readonly responseType: typeof api_v0alpha_lms_pb.CollectionEntry;
};

type LMSDeleteCollectionEntry = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.DeleteCollectionEntryReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type LMSUpdateCollectionEntry = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.CollectionEntry;
  readonly responseType: typeof api_v0alpha_lms_pb.CollectionEntry;
};

type LMSStreamCollection = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v0alpha_lms_pb.StreamCollectionReq;
  readonly responseType: typeof api_v0alpha_lms_pb.CollectionEntry;
};

type LMSSearchCollectionsPaginated = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.SearchCollectionsPaginatedReq;
  readonly responseType: typeof api_v0alpha_lms_pb.PaginatedSearchRes;
};

type LMSGetCollectionEntries = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.GetCollectionEntriesReq;
  readonly responseType: typeof api_v0alpha_lms_pb.GetCollectionEntriesRes;
};

type LMSCreateCjsSearchDefinition = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.CjsSearchDefinition;
  readonly responseType: typeof api_v0alpha_lms_pb.CjsSearchDefinition;
};

type LMSGetCjsSearchDefinition = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.GetCjsSearchDefinitionReq;
  readonly responseType: typeof api_v0alpha_lms_pb.CjsSearchDefinition;
};

type LMSUpdateCjsSearchDefinition = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.CjsSearchDefinition;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type LMSDeleteCjsSearchDefinition = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.DeleteCjsSearchDefinitionReq;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type LMSListCjsSearchDefinitions = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.ListCjsSearchDefinitionsReq;
  readonly responseType: typeof api_v0alpha_lms_pb.ListCjsSearchDefinitionsRes;
};

type LMSExecuteCjsSearchDefinition = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.ExecuteCjsSearchDefinitionReq;
  readonly responseType: typeof api_v0alpha_lms_pb.ExecuteCjsSearchDefinitionRes;
};

type LMSGetCjsSecureSearchCriteria = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.GetCjsSecureSearchCriteriaReq;
  readonly responseType: typeof api_v0alpha_lms_pb.CjsSecureSearchCriteria;
};

type LMSCreateCjsSecureSearchCriteria = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.CjsSecureSearchCriteria;
  readonly responseType: typeof api_v0alpha_lms_pb.CjsSecureSearchCriteria;
};

type LMSUpdateCjsSecureSearchCriteria = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.CjsSecureSearchCriteria;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type LMSTestByteField = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.TestingBytes;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type LMSGetQueuedEventsStatusByElementId = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_lms_pb.ElementPK;
  readonly responseType: typeof api_v0alpha_lms_pb.Events;
};

export class LMS {
  static readonly serviceName: string;
  static readonly GetPublicKey: LMSGetPublicKey;
  static readonly CreateFileTemplate: LMSCreateFileTemplate;
  static readonly ListFileTemplates: LMSListFileTemplates;
  static readonly UpdateFileTemplate: LMSUpdateFileTemplate;
  static readonly DeleteFileTemplate: LMSDeleteFileTemplate;
  static readonly GetFileTemplate: LMSGetFileTemplate;
  static readonly CreateField: LMSCreateField;
  static readonly ListFields: LMSListFields;
  static readonly GetField: LMSGetField;
  static readonly UpdateField: LMSUpdateField;
  static readonly DeleteField: LMSDeleteField;
  static readonly ListAvailableFieldsByElementId: LMSListAvailableFieldsByElementId;
  static readonly ListFieldsForElement: LMSListFieldsForElement;
  static readonly ListAutocompleteFields: LMSListAutocompleteFields;
  static readonly ListCampaignLinks: LMSListCampaignLinks;
  static readonly PeekList: LMSPeekList;
  static readonly GetHistory: LMSGetHistory;
  static readonly CreateElement: LMSCreateElement;
  static readonly ListElements: LMSListElements;
  static readonly GetElement: LMSGetElement;
  static readonly UpdateElement: LMSUpdateElement;
  static readonly DeleteElement: LMSDeleteElement;
  static readonly CopyPipelineUpstream: LMSCopyPipelineUpstream;
  static readonly CopyPipelineDownstream: LMSCopyPipelineDownstream;
  static readonly ProcessElement: LMSProcessElement;
  static readonly ProcessList: LMSProcessList;
  static readonly StreamList: LMSStreamList;
  static readonly GetAvailableFields: LMSGetAvailableFields;
  static readonly ListNewEvents: LMSListNewEvents;
  static readonly ViewQueue: LMSViewQueue;
  static readonly Autocomplete: LMSAutocomplete;
  static readonly GetComplianceScrubLists: LMSGetComplianceScrubLists;
  static readonly FindFieldUsages: LMSFindFieldUsages;
  static readonly FindInvalidElements: LMSFindInvalidElements;
  static readonly CreateCollection: LMSCreateCollection;
  static readonly GetCollection: LMSGetCollection;
  static readonly UpdateCollection: LMSUpdateCollection;
  static readonly DeleteCollection: LMSDeleteCollection;
  static readonly ListCollections: LMSListCollections;
  static readonly ResetCollection: LMSResetCollection;
  static readonly AddCollectionEntry: LMSAddCollectionEntry;
  static readonly DeleteCollectionEntry: LMSDeleteCollectionEntry;
  static readonly UpdateCollectionEntry: LMSUpdateCollectionEntry;
  static readonly StreamCollection: LMSStreamCollection;
  static readonly SearchCollectionsPaginated: LMSSearchCollectionsPaginated;
  static readonly GetCollectionEntries: LMSGetCollectionEntries;
  static readonly CreateCjsSearchDefinition: LMSCreateCjsSearchDefinition;
  static readonly GetCjsSearchDefinition: LMSGetCjsSearchDefinition;
  static readonly UpdateCjsSearchDefinition: LMSUpdateCjsSearchDefinition;
  static readonly DeleteCjsSearchDefinition: LMSDeleteCjsSearchDefinition;
  static readonly ListCjsSearchDefinitions: LMSListCjsSearchDefinitions;
  static readonly ExecuteCjsSearchDefinition: LMSExecuteCjsSearchDefinition;
  static readonly GetCjsSecureSearchCriteria: LMSGetCjsSecureSearchCriteria;
  static readonly CreateCjsSecureSearchCriteria: LMSCreateCjsSecureSearchCriteria;
  static readonly UpdateCjsSecureSearchCriteria: LMSUpdateCjsSecureSearchCriteria;
  static readonly TestByteField: LMSTestByteField;
  static readonly GetQueuedEventsStatusByElementId: LMSGetQueuedEventsStatusByElementId;
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

export class LMSClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getPublicKey(
    requestMessage: api_v0alpha_lms_pb.GetPublicKeyReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.PublicKey|null) => void
  ): UnaryResponse;
  getPublicKey(
    requestMessage: api_v0alpha_lms_pb.GetPublicKeyReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.PublicKey|null) => void
  ): UnaryResponse;
  createFileTemplate(
    requestMessage: api_v0alpha_lms_pb.FileTemplate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.FileTemplate|null) => void
  ): UnaryResponse;
  createFileTemplate(
    requestMessage: api_v0alpha_lms_pb.FileTemplate,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.FileTemplate|null) => void
  ): UnaryResponse;
  listFileTemplates(requestMessage: api_v0alpha_lms_pb.GetFileTemplatesReq, metadata?: grpc.Metadata): ResponseStream<api_v0alpha_lms_pb.FileTemplate>;
  updateFileTemplate(
    requestMessage: api_v0alpha_lms_pb.FileTemplate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.FileTemplate|null) => void
  ): UnaryResponse;
  updateFileTemplate(
    requestMessage: api_v0alpha_lms_pb.FileTemplate,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.FileTemplate|null) => void
  ): UnaryResponse;
  deleteFileTemplate(
    requestMessage: api_v0alpha_lms_pb.FileTemplate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.FileTemplate|null) => void
  ): UnaryResponse;
  deleteFileTemplate(
    requestMessage: api_v0alpha_lms_pb.FileTemplate,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.FileTemplate|null) => void
  ): UnaryResponse;
  getFileTemplate(
    requestMessage: api_v0alpha_lms_pb.FileTemplate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.FileTemplate|null) => void
  ): UnaryResponse;
  getFileTemplate(
    requestMessage: api_v0alpha_lms_pb.FileTemplate,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.FileTemplate|null) => void
  ): UnaryResponse;
  createField(
    requestMessage: api_v0alpha_lms_pb.Field,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.Field|null) => void
  ): UnaryResponse;
  createField(
    requestMessage: api_v0alpha_lms_pb.Field,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.Field|null) => void
  ): UnaryResponse;
  listFields(
    requestMessage: api_v0alpha_lms_pb.ListFieldsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.Fields|null) => void
  ): UnaryResponse;
  listFields(
    requestMessage: api_v0alpha_lms_pb.ListFieldsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.Fields|null) => void
  ): UnaryResponse;
  getField(
    requestMessage: api_v0alpha_lms_pb.Field,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.Field|null) => void
  ): UnaryResponse;
  getField(
    requestMessage: api_v0alpha_lms_pb.Field,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.Field|null) => void
  ): UnaryResponse;
  updateField(
    requestMessage: api_v0alpha_lms_pb.UpdateFieldReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.Field|null) => void
  ): UnaryResponse;
  updateField(
    requestMessage: api_v0alpha_lms_pb.UpdateFieldReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.Field|null) => void
  ): UnaryResponse;
  deleteField(
    requestMessage: api_v0alpha_lms_pb.Field,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.Field|null) => void
  ): UnaryResponse;
  deleteField(
    requestMessage: api_v0alpha_lms_pb.Field,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.Field|null) => void
  ): UnaryResponse;
  listAvailableFieldsByElementId(
    requestMessage: api_v0alpha_lms_pb.ListAvailableFieldsByElementIdReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.ProcessFields|null) => void
  ): UnaryResponse;
  listAvailableFieldsByElementId(
    requestMessage: api_v0alpha_lms_pb.ListAvailableFieldsByElementIdReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.ProcessFields|null) => void
  ): UnaryResponse;
  listFieldsForElement(
    requestMessage: api_v0alpha_lms_pb.ListFieldsForElementReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.ListFieldsForElementRes|null) => void
  ): UnaryResponse;
  listFieldsForElement(
    requestMessage: api_v0alpha_lms_pb.ListFieldsForElementReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.ListFieldsForElementRes|null) => void
  ): UnaryResponse;
  listAutocompleteFields(
    requestMessage: api_v0alpha_lms_pb.ListAutocompleteFieldsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.ListAutocompleteFieldsRes|null) => void
  ): UnaryResponse;
  listAutocompleteFields(
    requestMessage: api_v0alpha_lms_pb.ListAutocompleteFieldsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.ListAutocompleteFieldsRes|null) => void
  ): UnaryResponse;
  listCampaignLinks(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.ListCampaignLinksRes|null) => void
  ): UnaryResponse;
  listCampaignLinks(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.ListCampaignLinksRes|null) => void
  ): UnaryResponse;
  peekList(
    requestMessage: api_v0alpha_lms_pb.PeekListReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.PeekListRes|null) => void
  ): UnaryResponse;
  peekList(
    requestMessage: api_v0alpha_lms_pb.PeekListReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.PeekListRes|null) => void
  ): UnaryResponse;
  getHistory(
    requestMessage: api_v0alpha_lms_pb.GetHistoryReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.GetHistoryRes|null) => void
  ): UnaryResponse;
  getHistory(
    requestMessage: api_v0alpha_lms_pb.GetHistoryReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.GetHistoryRes|null) => void
  ): UnaryResponse;
  createElement(
    requestMessage: api_v0alpha_lms_pb.Element,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.Element|null) => void
  ): UnaryResponse;
  createElement(
    requestMessage: api_v0alpha_lms_pb.Element,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.Element|null) => void
  ): UnaryResponse;
  listElements(requestMessage: api_v0alpha_lms_pb.ListElementsReq, metadata?: grpc.Metadata): ResponseStream<api_v0alpha_lms_pb.Element>;
  getElement(
    requestMessage: api_v0alpha_lms_pb.ElementPK,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.Element|null) => void
  ): UnaryResponse;
  getElement(
    requestMessage: api_v0alpha_lms_pb.ElementPK,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.Element|null) => void
  ): UnaryResponse;
  updateElement(
    requestMessage: api_v0alpha_lms_pb.Element,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.Element|null) => void
  ): UnaryResponse;
  updateElement(
    requestMessage: api_v0alpha_lms_pb.Element,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.Element|null) => void
  ): UnaryResponse;
  deleteElement(
    requestMessage: api_v0alpha_lms_pb.Element,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.Element|null) => void
  ): UnaryResponse;
  deleteElement(
    requestMessage: api_v0alpha_lms_pb.Element,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.Element|null) => void
  ): UnaryResponse;
  copyPipelineUpstream(requestMessage: api_v0alpha_lms_pb.Element, metadata?: grpc.Metadata): ResponseStream<api_v0alpha_lms_pb.Element>;
  copyPipelineDownstream(requestMessage: api_v0alpha_lms_pb.Element, metadata?: grpc.Metadata): ResponseStream<api_v0alpha_lms_pb.Element>;
  processElement(
    requestMessage: api_v0alpha_lms_pb.ProcessElementReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  processElement(
    requestMessage: api_v0alpha_lms_pb.ProcessElementReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  processList(
    requestMessage: api_v0alpha_lms_pb.ProcessListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.ProcessListResponse|null) => void
  ): UnaryResponse;
  processList(
    requestMessage: api_v0alpha_lms_pb.ProcessListRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.ProcessListResponse|null) => void
  ): UnaryResponse;
  streamList(metadata?: grpc.Metadata): RequestStream<api_v0alpha_lms_pb.StreamListRequest>;
  getAvailableFields(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.ProcessFields|null) => void
  ): UnaryResponse;
  getAvailableFields(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.ProcessFields|null) => void
  ): UnaryResponse;
  listNewEvents(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.Events|null) => void
  ): UnaryResponse;
  listNewEvents(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.Events|null) => void
  ): UnaryResponse;
  viewQueue(
    requestMessage: api_v0alpha_lms_pb.ViewQueueReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.Events|null) => void
  ): UnaryResponse;
  viewQueue(
    requestMessage: api_v0alpha_lms_pb.ViewQueueReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.Events|null) => void
  ): UnaryResponse;
  autocomplete(
    requestMessage: api_v0alpha_lms_pb.ParseReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.ParseRes|null) => void
  ): UnaryResponse;
  autocomplete(
    requestMessage: api_v0alpha_lms_pb.ParseReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.ParseRes|null) => void
  ): UnaryResponse;
  getComplianceScrubLists(
    requestMessage: api_v0alpha_lms_pb.GetComplianceScrubListsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.GetComplianceScrubListsRes|null) => void
  ): UnaryResponse;
  getComplianceScrubLists(
    requestMessage: api_v0alpha_lms_pb.GetComplianceScrubListsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.GetComplianceScrubListsRes|null) => void
  ): UnaryResponse;
  findFieldUsages(
    requestMessage: api_v0alpha_lms_pb.FindFieldUsagesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.FindFieldUsagesRes|null) => void
  ): UnaryResponse;
  findFieldUsages(
    requestMessage: api_v0alpha_lms_pb.FindFieldUsagesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.FindFieldUsagesRes|null) => void
  ): UnaryResponse;
  findInvalidElements(
    requestMessage: api_v0alpha_lms_pb.FindInvalidElementsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.FindInvalidElementsRes|null) => void
  ): UnaryResponse;
  findInvalidElements(
    requestMessage: api_v0alpha_lms_pb.FindInvalidElementsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.FindInvalidElementsRes|null) => void
  ): UnaryResponse;
  createCollection(
    requestMessage: api_v0alpha_lms_pb.CollectionMetadata,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.CollectionMetadata|null) => void
  ): UnaryResponse;
  createCollection(
    requestMessage: api_v0alpha_lms_pb.CollectionMetadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.CollectionMetadata|null) => void
  ): UnaryResponse;
  getCollection(
    requestMessage: api_v0alpha_lms_pb.GetCollectionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.CollectionMetadata|null) => void
  ): UnaryResponse;
  getCollection(
    requestMessage: api_v0alpha_lms_pb.GetCollectionReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.CollectionMetadata|null) => void
  ): UnaryResponse;
  updateCollection(
    requestMessage: api_v0alpha_lms_pb.CollectionMetadata,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateCollection(
    requestMessage: api_v0alpha_lms_pb.CollectionMetadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteCollection(
    requestMessage: api_v0alpha_lms_pb.DeleteCollectionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteCollection(
    requestMessage: api_v0alpha_lms_pb.DeleteCollectionReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  listCollections(
    requestMessage: api_v0alpha_lms_pb.ListCollectionsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.ListCollectionsRes|null) => void
  ): UnaryResponse;
  listCollections(
    requestMessage: api_v0alpha_lms_pb.ListCollectionsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.ListCollectionsRes|null) => void
  ): UnaryResponse;
  resetCollection(
    requestMessage: api_v0alpha_lms_pb.ResetCollectionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  resetCollection(
    requestMessage: api_v0alpha_lms_pb.ResetCollectionReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  addCollectionEntry(
    requestMessage: api_v0alpha_lms_pb.CollectionEntry,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.CollectionEntry|null) => void
  ): UnaryResponse;
  addCollectionEntry(
    requestMessage: api_v0alpha_lms_pb.CollectionEntry,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.CollectionEntry|null) => void
  ): UnaryResponse;
  deleteCollectionEntry(
    requestMessage: api_v0alpha_lms_pb.DeleteCollectionEntryReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteCollectionEntry(
    requestMessage: api_v0alpha_lms_pb.DeleteCollectionEntryReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateCollectionEntry(
    requestMessage: api_v0alpha_lms_pb.CollectionEntry,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.CollectionEntry|null) => void
  ): UnaryResponse;
  updateCollectionEntry(
    requestMessage: api_v0alpha_lms_pb.CollectionEntry,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.CollectionEntry|null) => void
  ): UnaryResponse;
  streamCollection(requestMessage: api_v0alpha_lms_pb.StreamCollectionReq, metadata?: grpc.Metadata): ResponseStream<api_v0alpha_lms_pb.CollectionEntry>;
  searchCollectionsPaginated(
    requestMessage: api_v0alpha_lms_pb.SearchCollectionsPaginatedReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.PaginatedSearchRes|null) => void
  ): UnaryResponse;
  searchCollectionsPaginated(
    requestMessage: api_v0alpha_lms_pb.SearchCollectionsPaginatedReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.PaginatedSearchRes|null) => void
  ): UnaryResponse;
  getCollectionEntries(
    requestMessage: api_v0alpha_lms_pb.GetCollectionEntriesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.GetCollectionEntriesRes|null) => void
  ): UnaryResponse;
  getCollectionEntries(
    requestMessage: api_v0alpha_lms_pb.GetCollectionEntriesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.GetCollectionEntriesRes|null) => void
  ): UnaryResponse;
  createCjsSearchDefinition(
    requestMessage: api_v0alpha_lms_pb.CjsSearchDefinition,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.CjsSearchDefinition|null) => void
  ): UnaryResponse;
  createCjsSearchDefinition(
    requestMessage: api_v0alpha_lms_pb.CjsSearchDefinition,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.CjsSearchDefinition|null) => void
  ): UnaryResponse;
  getCjsSearchDefinition(
    requestMessage: api_v0alpha_lms_pb.GetCjsSearchDefinitionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.CjsSearchDefinition|null) => void
  ): UnaryResponse;
  getCjsSearchDefinition(
    requestMessage: api_v0alpha_lms_pb.GetCjsSearchDefinitionReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.CjsSearchDefinition|null) => void
  ): UnaryResponse;
  updateCjsSearchDefinition(
    requestMessage: api_v0alpha_lms_pb.CjsSearchDefinition,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateCjsSearchDefinition(
    requestMessage: api_v0alpha_lms_pb.CjsSearchDefinition,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteCjsSearchDefinition(
    requestMessage: api_v0alpha_lms_pb.DeleteCjsSearchDefinitionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteCjsSearchDefinition(
    requestMessage: api_v0alpha_lms_pb.DeleteCjsSearchDefinitionReq,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  listCjsSearchDefinitions(
    requestMessage: api_v0alpha_lms_pb.ListCjsSearchDefinitionsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.ListCjsSearchDefinitionsRes|null) => void
  ): UnaryResponse;
  listCjsSearchDefinitions(
    requestMessage: api_v0alpha_lms_pb.ListCjsSearchDefinitionsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.ListCjsSearchDefinitionsRes|null) => void
  ): UnaryResponse;
  executeCjsSearchDefinition(
    requestMessage: api_v0alpha_lms_pb.ExecuteCjsSearchDefinitionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.ExecuteCjsSearchDefinitionRes|null) => void
  ): UnaryResponse;
  executeCjsSearchDefinition(
    requestMessage: api_v0alpha_lms_pb.ExecuteCjsSearchDefinitionReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.ExecuteCjsSearchDefinitionRes|null) => void
  ): UnaryResponse;
  getCjsSecureSearchCriteria(
    requestMessage: api_v0alpha_lms_pb.GetCjsSecureSearchCriteriaReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.CjsSecureSearchCriteria|null) => void
  ): UnaryResponse;
  getCjsSecureSearchCriteria(
    requestMessage: api_v0alpha_lms_pb.GetCjsSecureSearchCriteriaReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.CjsSecureSearchCriteria|null) => void
  ): UnaryResponse;
  createCjsSecureSearchCriteria(
    requestMessage: api_v0alpha_lms_pb.CjsSecureSearchCriteria,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.CjsSecureSearchCriteria|null) => void
  ): UnaryResponse;
  createCjsSecureSearchCriteria(
    requestMessage: api_v0alpha_lms_pb.CjsSecureSearchCriteria,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.CjsSecureSearchCriteria|null) => void
  ): UnaryResponse;
  updateCjsSecureSearchCriteria(
    requestMessage: api_v0alpha_lms_pb.CjsSecureSearchCriteria,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateCjsSecureSearchCriteria(
    requestMessage: api_v0alpha_lms_pb.CjsSecureSearchCriteria,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  testByteField(
    requestMessage: api_v0alpha_lms_pb.TestingBytes,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  testByteField(
    requestMessage: api_v0alpha_lms_pb.TestingBytes,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getQueuedEventsStatusByElementId(
    requestMessage: api_v0alpha_lms_pb.ElementPK,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.Events|null) => void
  ): UnaryResponse;
  getQueuedEventsStatusByElementId(
    requestMessage: api_v0alpha_lms_pb.ElementPK,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_lms_pb.Events|null) => void
  ): UnaryResponse;
}

