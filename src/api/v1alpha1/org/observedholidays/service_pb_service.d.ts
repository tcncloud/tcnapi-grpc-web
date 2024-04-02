// package: api.v1alpha1.org.observedholidays
// file: api/v1alpha1/org/observedholidays/service.proto

import * as api_v1alpha1_org_observedholidays_service_pb from "../../../../api/v1alpha1/org/observedholidays/service_pb";
import * as api_v1alpha1_org_observedholidays_entities_pb from "../../../../api/v1alpha1/org/observedholidays/entities_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ObservedHolidaysServiceListObservedHolidays = {
  readonly methodName: string;
  readonly service: typeof ObservedHolidaysService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_observedholidays_entities_pb.ListObservedHolidaysRequest;
  readonly responseType: typeof api_v1alpha1_org_observedholidays_entities_pb.ListObservedHolidaysResponse;
};

type ObservedHolidaysServiceGetObservedHolidays = {
  readonly methodName: string;
  readonly service: typeof ObservedHolidaysService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_observedholidays_entities_pb.GetObservedHolidaysRequest;
  readonly responseType: typeof api_v1alpha1_org_observedholidays_entities_pb.GetObservedHolidaysResponse;
};

type ObservedHolidaysServiceSetObservedHolidays = {
  readonly methodName: string;
  readonly service: typeof ObservedHolidaysService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_observedholidays_entities_pb.SetObservedHolidaysRequest;
  readonly responseType: typeof api_v1alpha1_org_observedholidays_entities_pb.SetObservedHolidaysResponse;
};

type ObservedHolidaysServiceAddToObservedHolidays = {
  readonly methodName: string;
  readonly service: typeof ObservedHolidaysService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_observedholidays_entities_pb.AddToObservedHolidaysRequest;
  readonly responseType: typeof api_v1alpha1_org_observedholidays_entities_pb.AddToObservedHolidaysResponse;
};

type ObservedHolidaysServiceRemoveObservedHolidays = {
  readonly methodName: string;
  readonly service: typeof ObservedHolidaysService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_observedholidays_entities_pb.RemoveFromObservedHolidaysRequest;
  readonly responseType: typeof api_v1alpha1_org_observedholidays_entities_pb.RemoveFromObservedHolidaysResponse;
};

type ObservedHolidaysServiceUpdateObservedHolidaysInfo = {
  readonly methodName: string;
  readonly service: typeof ObservedHolidaysService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_observedholidays_entities_pb.UpdateObservedHolidaysInfoRequest;
  readonly responseType: typeof api_v1alpha1_org_observedholidays_entities_pb.UpdateObservedHolidaysInfoResponse;
};

type ObservedHolidaysServiceDeleteObservedHolidays = {
  readonly methodName: string;
  readonly service: typeof ObservedHolidaysService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_observedholidays_entities_pb.DeleteObservedHolidaysRequest;
  readonly responseType: typeof api_v1alpha1_org_observedholidays_entities_pb.DeleteObservedHolidaysResponse;
};

type ObservedHolidaysServiceEvaluateObservedHolidays = {
  readonly methodName: string;
  readonly service: typeof ObservedHolidaysService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_observedholidays_entities_pb.EvaluateObservedHolidaysRequest;
  readonly responseType: typeof api_v1alpha1_org_observedholidays_entities_pb.EvaluateObservedHolidaysResponse;
};

export class ObservedHolidaysService {
  static readonly serviceName: string;
  static readonly ListObservedHolidays: ObservedHolidaysServiceListObservedHolidays;
  static readonly GetObservedHolidays: ObservedHolidaysServiceGetObservedHolidays;
  static readonly SetObservedHolidays: ObservedHolidaysServiceSetObservedHolidays;
  static readonly AddToObservedHolidays: ObservedHolidaysServiceAddToObservedHolidays;
  static readonly RemoveObservedHolidays: ObservedHolidaysServiceRemoveObservedHolidays;
  static readonly UpdateObservedHolidaysInfo: ObservedHolidaysServiceUpdateObservedHolidaysInfo;
  static readonly DeleteObservedHolidays: ObservedHolidaysServiceDeleteObservedHolidays;
  static readonly EvaluateObservedHolidays: ObservedHolidaysServiceEvaluateObservedHolidays;
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

export class ObservedHolidaysServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listObservedHolidays(
    requestMessage: api_v1alpha1_org_observedholidays_entities_pb.ListObservedHolidaysRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_observedholidays_entities_pb.ListObservedHolidaysResponse|null) => void
  ): UnaryResponse;
  listObservedHolidays(
    requestMessage: api_v1alpha1_org_observedholidays_entities_pb.ListObservedHolidaysRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_observedholidays_entities_pb.ListObservedHolidaysResponse|null) => void
  ): UnaryResponse;
  getObservedHolidays(
    requestMessage: api_v1alpha1_org_observedholidays_entities_pb.GetObservedHolidaysRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_observedholidays_entities_pb.GetObservedHolidaysResponse|null) => void
  ): UnaryResponse;
  getObservedHolidays(
    requestMessage: api_v1alpha1_org_observedholidays_entities_pb.GetObservedHolidaysRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_observedholidays_entities_pb.GetObservedHolidaysResponse|null) => void
  ): UnaryResponse;
  setObservedHolidays(
    requestMessage: api_v1alpha1_org_observedholidays_entities_pb.SetObservedHolidaysRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_observedholidays_entities_pb.SetObservedHolidaysResponse|null) => void
  ): UnaryResponse;
  setObservedHolidays(
    requestMessage: api_v1alpha1_org_observedholidays_entities_pb.SetObservedHolidaysRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_observedholidays_entities_pb.SetObservedHolidaysResponse|null) => void
  ): UnaryResponse;
  addToObservedHolidays(
    requestMessage: api_v1alpha1_org_observedholidays_entities_pb.AddToObservedHolidaysRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_observedholidays_entities_pb.AddToObservedHolidaysResponse|null) => void
  ): UnaryResponse;
  addToObservedHolidays(
    requestMessage: api_v1alpha1_org_observedholidays_entities_pb.AddToObservedHolidaysRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_observedholidays_entities_pb.AddToObservedHolidaysResponse|null) => void
  ): UnaryResponse;
  removeObservedHolidays(
    requestMessage: api_v1alpha1_org_observedholidays_entities_pb.RemoveFromObservedHolidaysRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_observedholidays_entities_pb.RemoveFromObservedHolidaysResponse|null) => void
  ): UnaryResponse;
  removeObservedHolidays(
    requestMessage: api_v1alpha1_org_observedholidays_entities_pb.RemoveFromObservedHolidaysRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_observedholidays_entities_pb.RemoveFromObservedHolidaysResponse|null) => void
  ): UnaryResponse;
  updateObservedHolidaysInfo(
    requestMessage: api_v1alpha1_org_observedholidays_entities_pb.UpdateObservedHolidaysInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_observedholidays_entities_pb.UpdateObservedHolidaysInfoResponse|null) => void
  ): UnaryResponse;
  updateObservedHolidaysInfo(
    requestMessage: api_v1alpha1_org_observedholidays_entities_pb.UpdateObservedHolidaysInfoRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_observedholidays_entities_pb.UpdateObservedHolidaysInfoResponse|null) => void
  ): UnaryResponse;
  deleteObservedHolidays(
    requestMessage: api_v1alpha1_org_observedholidays_entities_pb.DeleteObservedHolidaysRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_observedholidays_entities_pb.DeleteObservedHolidaysResponse|null) => void
  ): UnaryResponse;
  deleteObservedHolidays(
    requestMessage: api_v1alpha1_org_observedholidays_entities_pb.DeleteObservedHolidaysRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_observedholidays_entities_pb.DeleteObservedHolidaysResponse|null) => void
  ): UnaryResponse;
  evaluateObservedHolidays(
    requestMessage: api_v1alpha1_org_observedholidays_entities_pb.EvaluateObservedHolidaysRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_observedholidays_entities_pb.EvaluateObservedHolidaysResponse|null) => void
  ): UnaryResponse;
  evaluateObservedHolidays(
    requestMessage: api_v1alpha1_org_observedholidays_entities_pb.EvaluateObservedHolidaysRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_observedholidays_entities_pb.EvaluateObservedHolidaysResponse|null) => void
  ): UnaryResponse;
}

