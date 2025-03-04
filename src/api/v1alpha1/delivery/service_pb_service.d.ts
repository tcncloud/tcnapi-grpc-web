// package: api.v1alpha1.delivery
// file: api/v1alpha1/delivery/service.proto

import * as api_v1alpha1_delivery_service_pb from "../../../api/v1alpha1/delivery/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DeliveryApiCreateTransferConfig = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.CreateTransferConfigReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.CreateTransferConfigRes;
};

type DeliveryApiListTransferConfigs = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.ListTransferConfigsReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.ListTransferConfigsRes;
};

type DeliveryApiListTransferConfigsByCredentialID = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.ListTransferConfigsByCredentialIDReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.ListTransferConfigsByCredentialIDRes;
};

type DeliveryApiUpdateTransferConfig = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.UpdateTransferConfigReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.UpdateTransferConfigRes;
};

type DeliveryApiDeleteTransferConfig = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.DeleteTransferConfigReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.DeleteTransferConfigRes;
};

type DeliveryApiGetTransferConfig = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.GetTransferConfigReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.GetTransferConfigRes;
};

type DeliveryApiGetTransferConfigByName = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.GetTransferConfigByNameReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.GetTransferConfigByNameRes;
};

type DeliveryApiListHistory = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.ListHistoryReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.ListHistoryRes;
};

type DeliveryApiListHistoryByTransferConfig = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.ListHistoryByTransferConfigReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.ListHistoryByTransferConfigRes;
};

type DeliveryApiListCredentials = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.ListCredentialsReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.ListCredentialsRes;
};

type DeliveryApiGetCredential = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.GetCredentialReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.GetCredentialRes;
};

type DeliveryApiCreateCredential = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.CreateCredentialReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.CreateCredentialRes;
};

type DeliveryApiDeleteCredential = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.DeleteCredentialReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.DeleteCredentialRes;
};

type DeliveryApiUpdateCredential = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.UpdateCredentialReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.UpdateCredentialRes;
};

type DeliveryApiCreateDeliveryDefinition = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.CreateDeliveryDefinitionReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.CreateDeliveryDefinitionRes;
};

type DeliveryApiDeleteDeliveryDefinition = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.DeleteDeliveryDefinitionReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.DeleteDeliveryDefinitionRes;
};

type DeliveryApiGetDeliveryDefinition = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.GetDeliveryDefinitionReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.GetDeliveryDefinitionRes;
};

type DeliveryApiGetDeliveryDefinitionByName = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.GetDeliveryDefinitionByNameReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.GetDeliveryDefinitionByNameRes;
};

type DeliveryApiListDeliveryDefinitions = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.ListDeliveryDefinitionsReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.ListDeliveryDefinitionsRes;
};

type DeliveryApiListDeliveryDefinitionsByCredentialID = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.ListDeliveryDefinitionsByCredentialIDReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.ListDeliveryDefinitionsByCredentialIDRes;
};

type DeliveryApiUpdateDeliveryDefinition = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.UpdateDeliveryDefinitionReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.UpdateDeliveryDefinitionRes;
};

type DeliveryApiCreateEncryption = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.CreateEncryptionReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.CreateEncryptionRes;
};

type DeliveryApiDeleteEncryption = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.DeleteEncryptionReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.DeleteEncryptionRes;
};

type DeliveryApiGetEncryption = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.GetEncryptionReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.GetEncryptionRes;
};

type DeliveryApiListEncryptions = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.ListEncryptionsReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.ListEncryptionsRes;
};

type DeliveryApiUpdateEncryption = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.UpdateEncryptionReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.UpdateEncryptionRes;
};

type DeliveryApiListSMSNumbers = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.ListSMSNumbersReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.ListSMSNumbersRes;
};

type DeliveryApiTriggerDemoOutboundDelivery = {
  readonly methodName: string;
  readonly service: typeof DeliveryApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_delivery_service_pb.TriggerDemoOutboundDeliveryReq;
  readonly responseType: typeof api_v1alpha1_delivery_service_pb.TriggerDemoOutboundDeliveryRes;
};

export class DeliveryApi {
  static readonly serviceName: string;
  static readonly CreateTransferConfig: DeliveryApiCreateTransferConfig;
  static readonly ListTransferConfigs: DeliveryApiListTransferConfigs;
  static readonly ListTransferConfigsByCredentialID: DeliveryApiListTransferConfigsByCredentialID;
  static readonly UpdateTransferConfig: DeliveryApiUpdateTransferConfig;
  static readonly DeleteTransferConfig: DeliveryApiDeleteTransferConfig;
  static readonly GetTransferConfig: DeliveryApiGetTransferConfig;
  static readonly GetTransferConfigByName: DeliveryApiGetTransferConfigByName;
  static readonly ListHistory: DeliveryApiListHistory;
  static readonly ListHistoryByTransferConfig: DeliveryApiListHistoryByTransferConfig;
  static readonly ListCredentials: DeliveryApiListCredentials;
  static readonly GetCredential: DeliveryApiGetCredential;
  static readonly CreateCredential: DeliveryApiCreateCredential;
  static readonly DeleteCredential: DeliveryApiDeleteCredential;
  static readonly UpdateCredential: DeliveryApiUpdateCredential;
  static readonly CreateDeliveryDefinition: DeliveryApiCreateDeliveryDefinition;
  static readonly DeleteDeliveryDefinition: DeliveryApiDeleteDeliveryDefinition;
  static readonly GetDeliveryDefinition: DeliveryApiGetDeliveryDefinition;
  static readonly GetDeliveryDefinitionByName: DeliveryApiGetDeliveryDefinitionByName;
  static readonly ListDeliveryDefinitions: DeliveryApiListDeliveryDefinitions;
  static readonly ListDeliveryDefinitionsByCredentialID: DeliveryApiListDeliveryDefinitionsByCredentialID;
  static readonly UpdateDeliveryDefinition: DeliveryApiUpdateDeliveryDefinition;
  static readonly CreateEncryption: DeliveryApiCreateEncryption;
  static readonly DeleteEncryption: DeliveryApiDeleteEncryption;
  static readonly GetEncryption: DeliveryApiGetEncryption;
  static readonly ListEncryptions: DeliveryApiListEncryptions;
  static readonly UpdateEncryption: DeliveryApiUpdateEncryption;
  static readonly ListSMSNumbers: DeliveryApiListSMSNumbers;
  static readonly TriggerDemoOutboundDelivery: DeliveryApiTriggerDemoOutboundDelivery;
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

export class DeliveryApiClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createTransferConfig(
    requestMessage: api_v1alpha1_delivery_service_pb.CreateTransferConfigReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.CreateTransferConfigRes|null) => void
  ): UnaryResponse;
  createTransferConfig(
    requestMessage: api_v1alpha1_delivery_service_pb.CreateTransferConfigReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.CreateTransferConfigRes|null) => void
  ): UnaryResponse;
  listTransferConfigs(
    requestMessage: api_v1alpha1_delivery_service_pb.ListTransferConfigsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.ListTransferConfigsRes|null) => void
  ): UnaryResponse;
  listTransferConfigs(
    requestMessage: api_v1alpha1_delivery_service_pb.ListTransferConfigsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.ListTransferConfigsRes|null) => void
  ): UnaryResponse;
  listTransferConfigsByCredentialID(
    requestMessage: api_v1alpha1_delivery_service_pb.ListTransferConfigsByCredentialIDReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.ListTransferConfigsByCredentialIDRes|null) => void
  ): UnaryResponse;
  listTransferConfigsByCredentialID(
    requestMessage: api_v1alpha1_delivery_service_pb.ListTransferConfigsByCredentialIDReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.ListTransferConfigsByCredentialIDRes|null) => void
  ): UnaryResponse;
  updateTransferConfig(
    requestMessage: api_v1alpha1_delivery_service_pb.UpdateTransferConfigReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.UpdateTransferConfigRes|null) => void
  ): UnaryResponse;
  updateTransferConfig(
    requestMessage: api_v1alpha1_delivery_service_pb.UpdateTransferConfigReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.UpdateTransferConfigRes|null) => void
  ): UnaryResponse;
  deleteTransferConfig(
    requestMessage: api_v1alpha1_delivery_service_pb.DeleteTransferConfigReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.DeleteTransferConfigRes|null) => void
  ): UnaryResponse;
  deleteTransferConfig(
    requestMessage: api_v1alpha1_delivery_service_pb.DeleteTransferConfigReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.DeleteTransferConfigRes|null) => void
  ): UnaryResponse;
  getTransferConfig(
    requestMessage: api_v1alpha1_delivery_service_pb.GetTransferConfigReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.GetTransferConfigRes|null) => void
  ): UnaryResponse;
  getTransferConfig(
    requestMessage: api_v1alpha1_delivery_service_pb.GetTransferConfigReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.GetTransferConfigRes|null) => void
  ): UnaryResponse;
  getTransferConfigByName(
    requestMessage: api_v1alpha1_delivery_service_pb.GetTransferConfigByNameReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.GetTransferConfigByNameRes|null) => void
  ): UnaryResponse;
  getTransferConfigByName(
    requestMessage: api_v1alpha1_delivery_service_pb.GetTransferConfigByNameReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.GetTransferConfigByNameRes|null) => void
  ): UnaryResponse;
  listHistory(
    requestMessage: api_v1alpha1_delivery_service_pb.ListHistoryReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.ListHistoryRes|null) => void
  ): UnaryResponse;
  listHistory(
    requestMessage: api_v1alpha1_delivery_service_pb.ListHistoryReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.ListHistoryRes|null) => void
  ): UnaryResponse;
  listHistoryByTransferConfig(
    requestMessage: api_v1alpha1_delivery_service_pb.ListHistoryByTransferConfigReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.ListHistoryByTransferConfigRes|null) => void
  ): UnaryResponse;
  listHistoryByTransferConfig(
    requestMessage: api_v1alpha1_delivery_service_pb.ListHistoryByTransferConfigReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.ListHistoryByTransferConfigRes|null) => void
  ): UnaryResponse;
  listCredentials(
    requestMessage: api_v1alpha1_delivery_service_pb.ListCredentialsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.ListCredentialsRes|null) => void
  ): UnaryResponse;
  listCredentials(
    requestMessage: api_v1alpha1_delivery_service_pb.ListCredentialsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.ListCredentialsRes|null) => void
  ): UnaryResponse;
  getCredential(
    requestMessage: api_v1alpha1_delivery_service_pb.GetCredentialReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.GetCredentialRes|null) => void
  ): UnaryResponse;
  getCredential(
    requestMessage: api_v1alpha1_delivery_service_pb.GetCredentialReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.GetCredentialRes|null) => void
  ): UnaryResponse;
  createCredential(
    requestMessage: api_v1alpha1_delivery_service_pb.CreateCredentialReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.CreateCredentialRes|null) => void
  ): UnaryResponse;
  createCredential(
    requestMessage: api_v1alpha1_delivery_service_pb.CreateCredentialReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.CreateCredentialRes|null) => void
  ): UnaryResponse;
  deleteCredential(
    requestMessage: api_v1alpha1_delivery_service_pb.DeleteCredentialReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.DeleteCredentialRes|null) => void
  ): UnaryResponse;
  deleteCredential(
    requestMessage: api_v1alpha1_delivery_service_pb.DeleteCredentialReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.DeleteCredentialRes|null) => void
  ): UnaryResponse;
  updateCredential(
    requestMessage: api_v1alpha1_delivery_service_pb.UpdateCredentialReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.UpdateCredentialRes|null) => void
  ): UnaryResponse;
  updateCredential(
    requestMessage: api_v1alpha1_delivery_service_pb.UpdateCredentialReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.UpdateCredentialRes|null) => void
  ): UnaryResponse;
  createDeliveryDefinition(
    requestMessage: api_v1alpha1_delivery_service_pb.CreateDeliveryDefinitionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.CreateDeliveryDefinitionRes|null) => void
  ): UnaryResponse;
  createDeliveryDefinition(
    requestMessage: api_v1alpha1_delivery_service_pb.CreateDeliveryDefinitionReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.CreateDeliveryDefinitionRes|null) => void
  ): UnaryResponse;
  deleteDeliveryDefinition(
    requestMessage: api_v1alpha1_delivery_service_pb.DeleteDeliveryDefinitionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.DeleteDeliveryDefinitionRes|null) => void
  ): UnaryResponse;
  deleteDeliveryDefinition(
    requestMessage: api_v1alpha1_delivery_service_pb.DeleteDeliveryDefinitionReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.DeleteDeliveryDefinitionRes|null) => void
  ): UnaryResponse;
  getDeliveryDefinition(
    requestMessage: api_v1alpha1_delivery_service_pb.GetDeliveryDefinitionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.GetDeliveryDefinitionRes|null) => void
  ): UnaryResponse;
  getDeliveryDefinition(
    requestMessage: api_v1alpha1_delivery_service_pb.GetDeliveryDefinitionReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.GetDeliveryDefinitionRes|null) => void
  ): UnaryResponse;
  getDeliveryDefinitionByName(
    requestMessage: api_v1alpha1_delivery_service_pb.GetDeliveryDefinitionByNameReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.GetDeliveryDefinitionByNameRes|null) => void
  ): UnaryResponse;
  getDeliveryDefinitionByName(
    requestMessage: api_v1alpha1_delivery_service_pb.GetDeliveryDefinitionByNameReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.GetDeliveryDefinitionByNameRes|null) => void
  ): UnaryResponse;
  listDeliveryDefinitions(
    requestMessage: api_v1alpha1_delivery_service_pb.ListDeliveryDefinitionsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.ListDeliveryDefinitionsRes|null) => void
  ): UnaryResponse;
  listDeliveryDefinitions(
    requestMessage: api_v1alpha1_delivery_service_pb.ListDeliveryDefinitionsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.ListDeliveryDefinitionsRes|null) => void
  ): UnaryResponse;
  listDeliveryDefinitionsByCredentialID(
    requestMessage: api_v1alpha1_delivery_service_pb.ListDeliveryDefinitionsByCredentialIDReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.ListDeliveryDefinitionsByCredentialIDRes|null) => void
  ): UnaryResponse;
  listDeliveryDefinitionsByCredentialID(
    requestMessage: api_v1alpha1_delivery_service_pb.ListDeliveryDefinitionsByCredentialIDReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.ListDeliveryDefinitionsByCredentialIDRes|null) => void
  ): UnaryResponse;
  updateDeliveryDefinition(
    requestMessage: api_v1alpha1_delivery_service_pb.UpdateDeliveryDefinitionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.UpdateDeliveryDefinitionRes|null) => void
  ): UnaryResponse;
  updateDeliveryDefinition(
    requestMessage: api_v1alpha1_delivery_service_pb.UpdateDeliveryDefinitionReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.UpdateDeliveryDefinitionRes|null) => void
  ): UnaryResponse;
  createEncryption(
    requestMessage: api_v1alpha1_delivery_service_pb.CreateEncryptionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.CreateEncryptionRes|null) => void
  ): UnaryResponse;
  createEncryption(
    requestMessage: api_v1alpha1_delivery_service_pb.CreateEncryptionReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.CreateEncryptionRes|null) => void
  ): UnaryResponse;
  deleteEncryption(
    requestMessage: api_v1alpha1_delivery_service_pb.DeleteEncryptionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.DeleteEncryptionRes|null) => void
  ): UnaryResponse;
  deleteEncryption(
    requestMessage: api_v1alpha1_delivery_service_pb.DeleteEncryptionReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.DeleteEncryptionRes|null) => void
  ): UnaryResponse;
  getEncryption(
    requestMessage: api_v1alpha1_delivery_service_pb.GetEncryptionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.GetEncryptionRes|null) => void
  ): UnaryResponse;
  getEncryption(
    requestMessage: api_v1alpha1_delivery_service_pb.GetEncryptionReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.GetEncryptionRes|null) => void
  ): UnaryResponse;
  listEncryptions(
    requestMessage: api_v1alpha1_delivery_service_pb.ListEncryptionsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.ListEncryptionsRes|null) => void
  ): UnaryResponse;
  listEncryptions(
    requestMessage: api_v1alpha1_delivery_service_pb.ListEncryptionsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.ListEncryptionsRes|null) => void
  ): UnaryResponse;
  updateEncryption(
    requestMessage: api_v1alpha1_delivery_service_pb.UpdateEncryptionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.UpdateEncryptionRes|null) => void
  ): UnaryResponse;
  updateEncryption(
    requestMessage: api_v1alpha1_delivery_service_pb.UpdateEncryptionReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.UpdateEncryptionRes|null) => void
  ): UnaryResponse;
  listSMSNumbers(
    requestMessage: api_v1alpha1_delivery_service_pb.ListSMSNumbersReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.ListSMSNumbersRes|null) => void
  ): UnaryResponse;
  listSMSNumbers(
    requestMessage: api_v1alpha1_delivery_service_pb.ListSMSNumbersReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.ListSMSNumbersRes|null) => void
  ): UnaryResponse;
  triggerDemoOutboundDelivery(
    requestMessage: api_v1alpha1_delivery_service_pb.TriggerDemoOutboundDeliveryReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.TriggerDemoOutboundDeliveryRes|null) => void
  ): UnaryResponse;
  triggerDemoOutboundDelivery(
    requestMessage: api_v1alpha1_delivery_service_pb.TriggerDemoOutboundDeliveryReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_delivery_service_pb.TriggerDemoOutboundDeliveryRes|null) => void
  ): UnaryResponse;
}

