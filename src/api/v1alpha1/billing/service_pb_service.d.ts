// package: api.v1alpha1.billing
// file: api/v1alpha1/billing/service.proto

import * as api_v1alpha1_billing_service_pb from "../../../api/v1alpha1/billing/service_pb";
import * as api_v1alpha1_billing_entities_pb from "../../../api/v1alpha1/billing/entities_pb";
import {grpc} from "@improbable-eng/grpc-web";

type BillingCreateBillingPlan = {
  readonly methodName: string;
  readonly service: typeof Billing;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_billing_entities_pb.CreateBillingPlanReq;
  readonly responseType: typeof api_v1alpha1_billing_entities_pb.CreateBillingPlanRes;
};

type BillingGetBillingPlan = {
  readonly methodName: string;
  readonly service: typeof Billing;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_billing_entities_pb.GetBillingPlanReq;
  readonly responseType: typeof api_v1alpha1_billing_entities_pb.GetBillingPlanRes;
};

type BillingUpdateBillingPlan = {
  readonly methodName: string;
  readonly service: typeof Billing;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_billing_entities_pb.UpdateBillingPlanReq;
  readonly responseType: typeof api_v1alpha1_billing_entities_pb.UpdateBillingPlanRes;
};

type BillingDeleteBillingDetails = {
  readonly methodName: string;
  readonly service: typeof Billing;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_billing_entities_pb.DeleteBillingDetailsReq;
  readonly responseType: typeof api_v1alpha1_billing_entities_pb.DeleteBillingDetailsRes;
};

type BillingGetInvoice = {
  readonly methodName: string;
  readonly service: typeof Billing;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_billing_entities_pb.GetInvoiceReq;
  readonly responseType: typeof api_v1alpha1_billing_entities_pb.GetInvoiceRes;
};

export class Billing {
  static readonly serviceName: string;
  static readonly CreateBillingPlan: BillingCreateBillingPlan;
  static readonly GetBillingPlan: BillingGetBillingPlan;
  static readonly UpdateBillingPlan: BillingUpdateBillingPlan;
  static readonly DeleteBillingDetails: BillingDeleteBillingDetails;
  static readonly GetInvoice: BillingGetInvoice;
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

export class BillingClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createBillingPlan(
    requestMessage: api_v1alpha1_billing_entities_pb.CreateBillingPlanReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_billing_entities_pb.CreateBillingPlanRes|null) => void
  ): UnaryResponse;
  createBillingPlan(
    requestMessage: api_v1alpha1_billing_entities_pb.CreateBillingPlanReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_billing_entities_pb.CreateBillingPlanRes|null) => void
  ): UnaryResponse;
  getBillingPlan(
    requestMessage: api_v1alpha1_billing_entities_pb.GetBillingPlanReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_billing_entities_pb.GetBillingPlanRes|null) => void
  ): UnaryResponse;
  getBillingPlan(
    requestMessage: api_v1alpha1_billing_entities_pb.GetBillingPlanReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_billing_entities_pb.GetBillingPlanRes|null) => void
  ): UnaryResponse;
  updateBillingPlan(
    requestMessage: api_v1alpha1_billing_entities_pb.UpdateBillingPlanReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_billing_entities_pb.UpdateBillingPlanRes|null) => void
  ): UnaryResponse;
  updateBillingPlan(
    requestMessage: api_v1alpha1_billing_entities_pb.UpdateBillingPlanReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_billing_entities_pb.UpdateBillingPlanRes|null) => void
  ): UnaryResponse;
  deleteBillingDetails(
    requestMessage: api_v1alpha1_billing_entities_pb.DeleteBillingDetailsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_billing_entities_pb.DeleteBillingDetailsRes|null) => void
  ): UnaryResponse;
  deleteBillingDetails(
    requestMessage: api_v1alpha1_billing_entities_pb.DeleteBillingDetailsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_billing_entities_pb.DeleteBillingDetailsRes|null) => void
  ): UnaryResponse;
  getInvoice(
    requestMessage: api_v1alpha1_billing_entities_pb.GetInvoiceReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_billing_entities_pb.GetInvoiceRes|null) => void
  ): UnaryResponse;
  getInvoice(
    requestMessage: api_v1alpha1_billing_entities_pb.GetInvoiceReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_billing_entities_pb.GetInvoiceRes|null) => void
  ): UnaryResponse;
}

