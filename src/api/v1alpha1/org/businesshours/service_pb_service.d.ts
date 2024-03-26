// package: api.v1alpha1.org.businesshours
// file: api/v1alpha1/org/businesshours/service.proto

import * as api_v1alpha1_org_businesshours_service_pb from "../../../../api/v1alpha1/org/businesshours/service_pb";
import * as api_v1alpha1_org_businesshours_entities_pb from "../../../../api/v1alpha1/org/businesshours/entities_pb";
import {grpc} from "@improbable-eng/grpc-web";

type BusinessHoursServiceListBusinessHours = {
  readonly methodName: string;
  readonly service: typeof BusinessHoursService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_businesshours_entities_pb.ListBusinessHoursRequest;
  readonly responseType: typeof api_v1alpha1_org_businesshours_entities_pb.ListBusinessHoursResponse;
};

type BusinessHoursServiceGetBusinessHours = {
  readonly methodName: string;
  readonly service: typeof BusinessHoursService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_businesshours_entities_pb.GetBusinessHoursRequest;
  readonly responseType: typeof api_v1alpha1_org_businesshours_entities_pb.GetBusinessHoursResponse;
};

type BusinessHoursServiceSetBusinessHours = {
  readonly methodName: string;
  readonly service: typeof BusinessHoursService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_businesshours_entities_pb.SetBusinessHoursRequest;
  readonly responseType: typeof api_v1alpha1_org_businesshours_entities_pb.SetBusinessHoursResponse;
};

type BusinessHoursServiceAddIntervalToBusinessHours = {
  readonly methodName: string;
  readonly service: typeof BusinessHoursService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_businesshours_entities_pb.AddIntervalToBusinessHoursRequest;
  readonly responseType: typeof api_v1alpha1_org_businesshours_entities_pb.AddIntervalToBusinessHoursResponse;
};

type BusinessHoursServiceRemoveIntervalFromBusinessHours = {
  readonly methodName: string;
  readonly service: typeof BusinessHoursService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_businesshours_entities_pb.RemoveIntervalFromBusinessHoursRequest;
  readonly responseType: typeof api_v1alpha1_org_businesshours_entities_pb.RemoveIntervalFromBusinessHoursResponse;
};

type BusinessHoursServiceUpdateBusinessHoursInfo = {
  readonly methodName: string;
  readonly service: typeof BusinessHoursService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_businesshours_entities_pb.UpdateBusinessHoursInfoRequest;
  readonly responseType: typeof api_v1alpha1_org_businesshours_entities_pb.UpdateBusinessHoursInfoResponse;
};

type BusinessHoursServiceDeleteBusinessHours = {
  readonly methodName: string;
  readonly service: typeof BusinessHoursService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_businesshours_entities_pb.DeleteBusinessHoursRequest;
  readonly responseType: typeof api_v1alpha1_org_businesshours_entities_pb.DeleteBusinessHoursResponse;
};

type BusinessHoursServiceEvaluateBusinessHours = {
  readonly methodName: string;
  readonly service: typeof BusinessHoursService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_businesshours_entities_pb.EvaluateBusinessHoursRequest;
  readonly responseType: typeof api_v1alpha1_org_businesshours_entities_pb.EvaluateBusinessHoursResponse;
};

export class BusinessHoursService {
  static readonly serviceName: string;
  static readonly ListBusinessHours: BusinessHoursServiceListBusinessHours;
  static readonly GetBusinessHours: BusinessHoursServiceGetBusinessHours;
  static readonly SetBusinessHours: BusinessHoursServiceSetBusinessHours;
  static readonly AddIntervalToBusinessHours: BusinessHoursServiceAddIntervalToBusinessHours;
  static readonly RemoveIntervalFromBusinessHours: BusinessHoursServiceRemoveIntervalFromBusinessHours;
  static readonly UpdateBusinessHoursInfo: BusinessHoursServiceUpdateBusinessHoursInfo;
  static readonly DeleteBusinessHours: BusinessHoursServiceDeleteBusinessHours;
  static readonly EvaluateBusinessHours: BusinessHoursServiceEvaluateBusinessHours;
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

export class BusinessHoursServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listBusinessHours(
    requestMessage: api_v1alpha1_org_businesshours_entities_pb.ListBusinessHoursRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_businesshours_entities_pb.ListBusinessHoursResponse|null) => void
  ): UnaryResponse;
  listBusinessHours(
    requestMessage: api_v1alpha1_org_businesshours_entities_pb.ListBusinessHoursRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_businesshours_entities_pb.ListBusinessHoursResponse|null) => void
  ): UnaryResponse;
  getBusinessHours(
    requestMessage: api_v1alpha1_org_businesshours_entities_pb.GetBusinessHoursRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_businesshours_entities_pb.GetBusinessHoursResponse|null) => void
  ): UnaryResponse;
  getBusinessHours(
    requestMessage: api_v1alpha1_org_businesshours_entities_pb.GetBusinessHoursRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_businesshours_entities_pb.GetBusinessHoursResponse|null) => void
  ): UnaryResponse;
  setBusinessHours(
    requestMessage: api_v1alpha1_org_businesshours_entities_pb.SetBusinessHoursRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_businesshours_entities_pb.SetBusinessHoursResponse|null) => void
  ): UnaryResponse;
  setBusinessHours(
    requestMessage: api_v1alpha1_org_businesshours_entities_pb.SetBusinessHoursRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_businesshours_entities_pb.SetBusinessHoursResponse|null) => void
  ): UnaryResponse;
  addIntervalToBusinessHours(
    requestMessage: api_v1alpha1_org_businesshours_entities_pb.AddIntervalToBusinessHoursRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_businesshours_entities_pb.AddIntervalToBusinessHoursResponse|null) => void
  ): UnaryResponse;
  addIntervalToBusinessHours(
    requestMessage: api_v1alpha1_org_businesshours_entities_pb.AddIntervalToBusinessHoursRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_businesshours_entities_pb.AddIntervalToBusinessHoursResponse|null) => void
  ): UnaryResponse;
  removeIntervalFromBusinessHours(
    requestMessage: api_v1alpha1_org_businesshours_entities_pb.RemoveIntervalFromBusinessHoursRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_businesshours_entities_pb.RemoveIntervalFromBusinessHoursResponse|null) => void
  ): UnaryResponse;
  removeIntervalFromBusinessHours(
    requestMessage: api_v1alpha1_org_businesshours_entities_pb.RemoveIntervalFromBusinessHoursRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_businesshours_entities_pb.RemoveIntervalFromBusinessHoursResponse|null) => void
  ): UnaryResponse;
  updateBusinessHoursInfo(
    requestMessage: api_v1alpha1_org_businesshours_entities_pb.UpdateBusinessHoursInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_businesshours_entities_pb.UpdateBusinessHoursInfoResponse|null) => void
  ): UnaryResponse;
  updateBusinessHoursInfo(
    requestMessage: api_v1alpha1_org_businesshours_entities_pb.UpdateBusinessHoursInfoRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_businesshours_entities_pb.UpdateBusinessHoursInfoResponse|null) => void
  ): UnaryResponse;
  deleteBusinessHours(
    requestMessage: api_v1alpha1_org_businesshours_entities_pb.DeleteBusinessHoursRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_businesshours_entities_pb.DeleteBusinessHoursResponse|null) => void
  ): UnaryResponse;
  deleteBusinessHours(
    requestMessage: api_v1alpha1_org_businesshours_entities_pb.DeleteBusinessHoursRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_businesshours_entities_pb.DeleteBusinessHoursResponse|null) => void
  ): UnaryResponse;
  evaluateBusinessHours(
    requestMessage: api_v1alpha1_org_businesshours_entities_pb.EvaluateBusinessHoursRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_businesshours_entities_pb.EvaluateBusinessHoursResponse|null) => void
  ): UnaryResponse;
  evaluateBusinessHours(
    requestMessage: api_v1alpha1_org_businesshours_entities_pb.EvaluateBusinessHoursRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_businesshours_entities_pb.EvaluateBusinessHoursResponse|null) => void
  ): UnaryResponse;
}

