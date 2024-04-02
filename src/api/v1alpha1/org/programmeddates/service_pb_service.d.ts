// package: api.v1alpha1.org.programmeddates
// file: api/v1alpha1/org/programmeddates/service.proto

import * as api_v1alpha1_org_programmeddates_service_pb from "../../../../api/v1alpha1/org/programmeddates/service_pb";
import * as api_v1alpha1_org_programmeddates_entities_pb from "../../../../api/v1alpha1/org/programmeddates/entities_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ProgrammedDatesServiceListProgrammedDates = {
  readonly methodName: string;
  readonly service: typeof ProgrammedDatesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_programmeddates_entities_pb.ListProgrammedDatesRequest;
  readonly responseType: typeof api_v1alpha1_org_programmeddates_entities_pb.ListProgrammedDatesResponse;
};

type ProgrammedDatesServiceGetProgrammedDates = {
  readonly methodName: string;
  readonly service: typeof ProgrammedDatesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_programmeddates_entities_pb.GetProgrammedDatesRequest;
  readonly responseType: typeof api_v1alpha1_org_programmeddates_entities_pb.GetProgrammedDatesResponse;
};

type ProgrammedDatesServiceSetProgrammedDates = {
  readonly methodName: string;
  readonly service: typeof ProgrammedDatesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_programmeddates_entities_pb.SetProgrammedDatesRequest;
  readonly responseType: typeof api_v1alpha1_org_programmeddates_entities_pb.SetProgrammedDatesResponse;
};

type ProgrammedDatesServiceAddToProgrammedDates = {
  readonly methodName: string;
  readonly service: typeof ProgrammedDatesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_programmeddates_entities_pb.AddToProgrammedDatesRequest;
  readonly responseType: typeof api_v1alpha1_org_programmeddates_entities_pb.AddToProgrammedDatesResponse;
};

type ProgrammedDatesServiceRemoveFromProgrammedDates = {
  readonly methodName: string;
  readonly service: typeof ProgrammedDatesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_programmeddates_entities_pb.RemoveFromProgrammedDatesRequest;
  readonly responseType: typeof api_v1alpha1_org_programmeddates_entities_pb.RemoveFromProgrammedDatesResponse;
};

type ProgrammedDatesServiceUpdateProgrammedDatesInfo = {
  readonly methodName: string;
  readonly service: typeof ProgrammedDatesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_programmeddates_entities_pb.UpdateProgrammedDatesInfoRequest;
  readonly responseType: typeof api_v1alpha1_org_programmeddates_entities_pb.UpdateProgrammedDatesInfoResponse;
};

type ProgrammedDatesServiceDeleteProgrammedDates = {
  readonly methodName: string;
  readonly service: typeof ProgrammedDatesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_programmeddates_entities_pb.DeleteProgrammedDatesRequest;
  readonly responseType: typeof api_v1alpha1_org_programmeddates_entities_pb.DeleteProgrammedDatesResponse;
};

type ProgrammedDatesServiceEvaluateProgrammedDates = {
  readonly methodName: string;
  readonly service: typeof ProgrammedDatesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_programmeddates_entities_pb.EvaluateProgrammedDatesRequest;
  readonly responseType: typeof api_v1alpha1_org_programmeddates_entities_pb.EvaluateProgrammedDatesResponse;
};

export class ProgrammedDatesService {
  static readonly serviceName: string;
  static readonly ListProgrammedDates: ProgrammedDatesServiceListProgrammedDates;
  static readonly GetProgrammedDates: ProgrammedDatesServiceGetProgrammedDates;
  static readonly SetProgrammedDates: ProgrammedDatesServiceSetProgrammedDates;
  static readonly AddToProgrammedDates: ProgrammedDatesServiceAddToProgrammedDates;
  static readonly RemoveFromProgrammedDates: ProgrammedDatesServiceRemoveFromProgrammedDates;
  static readonly UpdateProgrammedDatesInfo: ProgrammedDatesServiceUpdateProgrammedDatesInfo;
  static readonly DeleteProgrammedDates: ProgrammedDatesServiceDeleteProgrammedDates;
  static readonly EvaluateProgrammedDates: ProgrammedDatesServiceEvaluateProgrammedDates;
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

export class ProgrammedDatesServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listProgrammedDates(
    requestMessage: api_v1alpha1_org_programmeddates_entities_pb.ListProgrammedDatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_programmeddates_entities_pb.ListProgrammedDatesResponse|null) => void
  ): UnaryResponse;
  listProgrammedDates(
    requestMessage: api_v1alpha1_org_programmeddates_entities_pb.ListProgrammedDatesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_programmeddates_entities_pb.ListProgrammedDatesResponse|null) => void
  ): UnaryResponse;
  getProgrammedDates(
    requestMessage: api_v1alpha1_org_programmeddates_entities_pb.GetProgrammedDatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_programmeddates_entities_pb.GetProgrammedDatesResponse|null) => void
  ): UnaryResponse;
  getProgrammedDates(
    requestMessage: api_v1alpha1_org_programmeddates_entities_pb.GetProgrammedDatesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_programmeddates_entities_pb.GetProgrammedDatesResponse|null) => void
  ): UnaryResponse;
  setProgrammedDates(
    requestMessage: api_v1alpha1_org_programmeddates_entities_pb.SetProgrammedDatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_programmeddates_entities_pb.SetProgrammedDatesResponse|null) => void
  ): UnaryResponse;
  setProgrammedDates(
    requestMessage: api_v1alpha1_org_programmeddates_entities_pb.SetProgrammedDatesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_programmeddates_entities_pb.SetProgrammedDatesResponse|null) => void
  ): UnaryResponse;
  addToProgrammedDates(
    requestMessage: api_v1alpha1_org_programmeddates_entities_pb.AddToProgrammedDatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_programmeddates_entities_pb.AddToProgrammedDatesResponse|null) => void
  ): UnaryResponse;
  addToProgrammedDates(
    requestMessage: api_v1alpha1_org_programmeddates_entities_pb.AddToProgrammedDatesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_programmeddates_entities_pb.AddToProgrammedDatesResponse|null) => void
  ): UnaryResponse;
  removeFromProgrammedDates(
    requestMessage: api_v1alpha1_org_programmeddates_entities_pb.RemoveFromProgrammedDatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_programmeddates_entities_pb.RemoveFromProgrammedDatesResponse|null) => void
  ): UnaryResponse;
  removeFromProgrammedDates(
    requestMessage: api_v1alpha1_org_programmeddates_entities_pb.RemoveFromProgrammedDatesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_programmeddates_entities_pb.RemoveFromProgrammedDatesResponse|null) => void
  ): UnaryResponse;
  updateProgrammedDatesInfo(
    requestMessage: api_v1alpha1_org_programmeddates_entities_pb.UpdateProgrammedDatesInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_programmeddates_entities_pb.UpdateProgrammedDatesInfoResponse|null) => void
  ): UnaryResponse;
  updateProgrammedDatesInfo(
    requestMessage: api_v1alpha1_org_programmeddates_entities_pb.UpdateProgrammedDatesInfoRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_programmeddates_entities_pb.UpdateProgrammedDatesInfoResponse|null) => void
  ): UnaryResponse;
  deleteProgrammedDates(
    requestMessage: api_v1alpha1_org_programmeddates_entities_pb.DeleteProgrammedDatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_programmeddates_entities_pb.DeleteProgrammedDatesResponse|null) => void
  ): UnaryResponse;
  deleteProgrammedDates(
    requestMessage: api_v1alpha1_org_programmeddates_entities_pb.DeleteProgrammedDatesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_programmeddates_entities_pb.DeleteProgrammedDatesResponse|null) => void
  ): UnaryResponse;
  evaluateProgrammedDates(
    requestMessage: api_v1alpha1_org_programmeddates_entities_pb.EvaluateProgrammedDatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_programmeddates_entities_pb.EvaluateProgrammedDatesResponse|null) => void
  ): UnaryResponse;
  evaluateProgrammedDates(
    requestMessage: api_v1alpha1_org_programmeddates_entities_pb.EvaluateProgrammedDatesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_programmeddates_entities_pb.EvaluateProgrammedDatesResponse|null) => void
  ): UnaryResponse;
}

