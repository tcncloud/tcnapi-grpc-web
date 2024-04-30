// package: api.v1alpha1.org.labels
// file: api/v1alpha1/org/labels/service.proto

import * as api_v1alpha1_org_labels_service_pb from "../../../../api/v1alpha1/org/labels/service_pb";
import * as api_v1alpha1_org_labels_entities_pb from "../../../../api/v1alpha1/org/labels/entities_pb";
import {grpc} from "@improbable-eng/grpc-web";

type LabelsServiceCreateLabel = {
  readonly methodName: string;
  readonly service: typeof LabelsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_labels_entities_pb.CreateLabelRequest;
  readonly responseType: typeof api_v1alpha1_org_labels_entities_pb.CreateLabelResponse;
};

type LabelsServiceGetLabel = {
  readonly methodName: string;
  readonly service: typeof LabelsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_labels_entities_pb.GetLabelRequest;
  readonly responseType: typeof api_v1alpha1_org_labels_entities_pb.GetLabelResponse;
};

type LabelsServiceUpdateLabel = {
  readonly methodName: string;
  readonly service: typeof LabelsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_labels_entities_pb.UpdateLabelRequest;
  readonly responseType: typeof api_v1alpha1_org_labels_entities_pb.UpdateLabelResponse;
};

type LabelsServiceListLabels = {
  readonly methodName: string;
  readonly service: typeof LabelsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_labels_entities_pb.ListLabelsRequest;
  readonly responseType: typeof api_v1alpha1_org_labels_entities_pb.ListLabelsResponse;
};

type LabelsServiceDeleteLabel = {
  readonly methodName: string;
  readonly service: typeof LabelsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_labels_entities_pb.DeleteLabelRequest;
  readonly responseType: typeof api_v1alpha1_org_labels_entities_pb.DeleteLabelResponse;
};

type LabelsServiceAttachLabel = {
  readonly methodName: string;
  readonly service: typeof LabelsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_labels_entities_pb.AttachLabelRequest;
  readonly responseType: typeof api_v1alpha1_org_labels_entities_pb.AttachLabelResponse;
};

type LabelsServiceGetLabeledEntityMap = {
  readonly methodName: string;
  readonly service: typeof LabelsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_labels_entities_pb.GetLabeledEntityMapRequest;
  readonly responseType: typeof api_v1alpha1_org_labels_entities_pb.GetLabeledEntityMapResponse;
};

export class LabelsService {
  static readonly serviceName: string;
  static readonly CreateLabel: LabelsServiceCreateLabel;
  static readonly GetLabel: LabelsServiceGetLabel;
  static readonly UpdateLabel: LabelsServiceUpdateLabel;
  static readonly ListLabels: LabelsServiceListLabels;
  static readonly DeleteLabel: LabelsServiceDeleteLabel;
  static readonly AttachLabel: LabelsServiceAttachLabel;
  static readonly GetLabeledEntityMap: LabelsServiceGetLabeledEntityMap;
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

export class LabelsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createLabel(
    requestMessage: api_v1alpha1_org_labels_entities_pb.CreateLabelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_entities_pb.CreateLabelResponse|null) => void
  ): UnaryResponse;
  createLabel(
    requestMessage: api_v1alpha1_org_labels_entities_pb.CreateLabelRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_entities_pb.CreateLabelResponse|null) => void
  ): UnaryResponse;
  getLabel(
    requestMessage: api_v1alpha1_org_labels_entities_pb.GetLabelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_entities_pb.GetLabelResponse|null) => void
  ): UnaryResponse;
  getLabel(
    requestMessage: api_v1alpha1_org_labels_entities_pb.GetLabelRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_entities_pb.GetLabelResponse|null) => void
  ): UnaryResponse;
  updateLabel(
    requestMessage: api_v1alpha1_org_labels_entities_pb.UpdateLabelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_entities_pb.UpdateLabelResponse|null) => void
  ): UnaryResponse;
  updateLabel(
    requestMessage: api_v1alpha1_org_labels_entities_pb.UpdateLabelRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_entities_pb.UpdateLabelResponse|null) => void
  ): UnaryResponse;
  listLabels(
    requestMessage: api_v1alpha1_org_labels_entities_pb.ListLabelsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_entities_pb.ListLabelsResponse|null) => void
  ): UnaryResponse;
  listLabels(
    requestMessage: api_v1alpha1_org_labels_entities_pb.ListLabelsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_entities_pb.ListLabelsResponse|null) => void
  ): UnaryResponse;
  deleteLabel(
    requestMessage: api_v1alpha1_org_labels_entities_pb.DeleteLabelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_entities_pb.DeleteLabelResponse|null) => void
  ): UnaryResponse;
  deleteLabel(
    requestMessage: api_v1alpha1_org_labels_entities_pb.DeleteLabelRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_entities_pb.DeleteLabelResponse|null) => void
  ): UnaryResponse;
  attachLabel(
    requestMessage: api_v1alpha1_org_labels_entities_pb.AttachLabelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_entities_pb.AttachLabelResponse|null) => void
  ): UnaryResponse;
  attachLabel(
    requestMessage: api_v1alpha1_org_labels_entities_pb.AttachLabelRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_entities_pb.AttachLabelResponse|null) => void
  ): UnaryResponse;
  getLabeledEntityMap(
    requestMessage: api_v1alpha1_org_labels_entities_pb.GetLabeledEntityMapRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_entities_pb.GetLabeledEntityMapResponse|null) => void
  ): UnaryResponse;
  getLabeledEntityMap(
    requestMessage: api_v1alpha1_org_labels_entities_pb.GetLabeledEntityMapRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_entities_pb.GetLabeledEntityMapResponse|null) => void
  ): UnaryResponse;
}

