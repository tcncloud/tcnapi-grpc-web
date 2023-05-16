// package: api.v1alpha1.srec
// file: api/v1alpha1/srec/service.proto

import * as api_v1alpha1_srec_service_pb from "../../../api/v1alpha1/srec/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SrecListScreenRecordings = {
  readonly methodName: string;
  readonly service: typeof Srec;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_srec_service_pb.ListScreenRecordingsRequest;
  readonly responseType: typeof api_v1alpha1_srec_service_pb.ListScreenRecordingsResponse;
};

type SrecGetScreenRecordingURL = {
  readonly methodName: string;
  readonly service: typeof Srec;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_srec_service_pb.GetScreenRecordingURLRequest;
  readonly responseType: typeof api_v1alpha1_srec_service_pb.GetScreenRecordingURLResponse;
};

type SrecDeleteScreenRecording = {
  readonly methodName: string;
  readonly service: typeof Srec;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_srec_service_pb.DeleteScreenRecordingRequest;
  readonly responseType: typeof api_v1alpha1_srec_service_pb.DeleteScreenRecordingResponse;
};

export class Srec {
  static readonly serviceName: string;
  static readonly ListScreenRecordings: SrecListScreenRecordings;
  static readonly GetScreenRecordingURL: SrecGetScreenRecordingURL;
  static readonly DeleteScreenRecording: SrecDeleteScreenRecording;
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

export class SrecClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listScreenRecordings(
    requestMessage: api_v1alpha1_srec_service_pb.ListScreenRecordingsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_srec_service_pb.ListScreenRecordingsResponse|null) => void
  ): UnaryResponse;
  listScreenRecordings(
    requestMessage: api_v1alpha1_srec_service_pb.ListScreenRecordingsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_srec_service_pb.ListScreenRecordingsResponse|null) => void
  ): UnaryResponse;
  getScreenRecordingURL(
    requestMessage: api_v1alpha1_srec_service_pb.GetScreenRecordingURLRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_srec_service_pb.GetScreenRecordingURLResponse|null) => void
  ): UnaryResponse;
  getScreenRecordingURL(
    requestMessage: api_v1alpha1_srec_service_pb.GetScreenRecordingURLRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_srec_service_pb.GetScreenRecordingURLResponse|null) => void
  ): UnaryResponse;
  deleteScreenRecording(
    requestMessage: api_v1alpha1_srec_service_pb.DeleteScreenRecordingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_srec_service_pb.DeleteScreenRecordingResponse|null) => void
  ): UnaryResponse;
  deleteScreenRecording(
    requestMessage: api_v1alpha1_srec_service_pb.DeleteScreenRecordingRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_srec_service_pb.DeleteScreenRecordingResponse|null) => void
  ): UnaryResponse;
}

