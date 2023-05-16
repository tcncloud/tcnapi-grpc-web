// package: api.v0alpha
// file: api/v0alpha/callqueue.proto

import * as api_v0alpha_callqueue_pb from "../../api/v0alpha/callqueue_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CallQueueDequeuePreviewRecordOrCall = {
  readonly methodName: string;
  readonly service: typeof CallQueue;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_callqueue_pb.DequeuePreviewRecordOrCallReq;
  readonly responseType: typeof api_v0alpha_callqueue_pb.DequeuePreviewRecordOrCallRes;
};

type CallQueueEnqueuePreviewRecord = {
  readonly methodName: string;
  readonly service: typeof CallQueue;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_callqueue_pb.EnqueuePreviewRecordReq;
  readonly responseType: typeof api_v0alpha_callqueue_pb.EnqueuePreviewRecordRes;
};

type CallQueueDequeueScrubbedCallForPreviewRecord = {
  readonly methodName: string;
  readonly service: typeof CallQueue;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_callqueue_pb.DequeueScrubbedCallForPreviewRecordReq;
  readonly responseType: typeof api_v0alpha_callqueue_pb.DequeueScrubbedCallForPreviewRecordRes;
};

type CallQueueClearPreviewRecordReturnQueue = {
  readonly methodName: string;
  readonly service: typeof CallQueue;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_callqueue_pb.ClearPreviewRecordReturnQueueReq;
  readonly responseType: typeof api_v0alpha_callqueue_pb.ClearPreviewRecordReturnQueueRes;
};

type CallQueueEnqueuePreviewDialCall = {
  readonly methodName: string;
  readonly service: typeof CallQueue;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_callqueue_pb.EnqueuePreviewDialCallReq;
  readonly responseType: typeof api_v0alpha_callqueue_pb.EnqueuePreviewDialCallRes;
};

type CallQueueClearManualDialQueue = {
  readonly methodName: string;
  readonly service: typeof CallQueue;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_callqueue_pb.ClearManualDialQueueReq;
  readonly responseType: typeof api_v0alpha_callqueue_pb.ClearManualDialQueueRes;
};

type CallQueueProcessManualDialCall = {
  readonly methodName: string;
  readonly service: typeof CallQueue;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_callqueue_pb.ProcessManualDialCallReq;
  readonly responseType: typeof api_v0alpha_callqueue_pb.ProcessManualDialCallRes;
};

type CallQueueDequeueCallForManualApproval = {
  readonly methodName: string;
  readonly service: typeof CallQueue;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_callqueue_pb.DequeueCallForManualApprovalReq;
  readonly responseType: typeof api_v0alpha_callqueue_pb.DequeueCallForManualApprovalRes;
};

type CallQueueEnqueueManuallyApprovedCall = {
  readonly methodName: string;
  readonly service: typeof CallQueue;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_callqueue_pb.EnqueueManuallyApprovedCallReq;
  readonly responseType: typeof api_v0alpha_callqueue_pb.EnqueueManuallyApprovedCallRes;
};

type CallQueueEnqueueManuallyRejectedCall = {
  readonly methodName: string;
  readonly service: typeof CallQueue;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_callqueue_pb.EnqueueManuallyRejectedCallReq;
  readonly responseType: typeof api_v0alpha_callqueue_pb.EnqueueManuallyRejectedCallRes;
};

type CallQueueRequeueManuallyApprovedCall = {
  readonly methodName: string;
  readonly service: typeof CallQueue;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_callqueue_pb.RequeueManuallyApprovedCallReq;
  readonly responseType: typeof api_v0alpha_callqueue_pb.RequeueManuallyApprovedCallRes;
};

type CallQueueEnqueueManuallyApprovedSms = {
  readonly methodName: string;
  readonly service: typeof CallQueue;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_callqueue_pb.EnqueueManuallyApprovedSmsReq;
  readonly responseType: typeof api_v0alpha_callqueue_pb.EnqueueManuallyApprovedSmsRes;
};

type CallQueueEnqueueManuallyRejectedSms = {
  readonly methodName: string;
  readonly service: typeof CallQueue;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_callqueue_pb.EnqueueManuallyRejectedSmsReq;
  readonly responseType: typeof api_v0alpha_callqueue_pb.EnqueueManuallyRejectedSmsRes;
};

type CallQueueRequeueManuallyApprovedSms = {
  readonly methodName: string;
  readonly service: typeof CallQueue;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_callqueue_pb.RequeueManuallyApprovedSmsReq;
  readonly responseType: typeof api_v0alpha_callqueue_pb.RequeueManuallyApprovedSmsRes;
};

type CallQueueDequeueSmsMamForManualApproval = {
  readonly methodName: string;
  readonly service: typeof CallQueue;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_callqueue_pb.DequeueSmsMamForManualApprovalReq;
  readonly responseType: typeof api_v0alpha_callqueue_pb.DequeueSmsMamForManualApprovalRes;
};

export class CallQueue {
  static readonly serviceName: string;
  static readonly DequeuePreviewRecordOrCall: CallQueueDequeuePreviewRecordOrCall;
  static readonly EnqueuePreviewRecord: CallQueueEnqueuePreviewRecord;
  static readonly DequeueScrubbedCallForPreviewRecord: CallQueueDequeueScrubbedCallForPreviewRecord;
  static readonly ClearPreviewRecordReturnQueue: CallQueueClearPreviewRecordReturnQueue;
  static readonly EnqueuePreviewDialCall: CallQueueEnqueuePreviewDialCall;
  static readonly ClearManualDialQueue: CallQueueClearManualDialQueue;
  static readonly ProcessManualDialCall: CallQueueProcessManualDialCall;
  static readonly DequeueCallForManualApproval: CallQueueDequeueCallForManualApproval;
  static readonly EnqueueManuallyApprovedCall: CallQueueEnqueueManuallyApprovedCall;
  static readonly EnqueueManuallyRejectedCall: CallQueueEnqueueManuallyRejectedCall;
  static readonly RequeueManuallyApprovedCall: CallQueueRequeueManuallyApprovedCall;
  static readonly EnqueueManuallyApprovedSms: CallQueueEnqueueManuallyApprovedSms;
  static readonly EnqueueManuallyRejectedSms: CallQueueEnqueueManuallyRejectedSms;
  static readonly RequeueManuallyApprovedSms: CallQueueRequeueManuallyApprovedSms;
  static readonly DequeueSmsMamForManualApproval: CallQueueDequeueSmsMamForManualApproval;
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

export class CallQueueClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  dequeuePreviewRecordOrCall(
    requestMessage: api_v0alpha_callqueue_pb.DequeuePreviewRecordOrCallReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.DequeuePreviewRecordOrCallRes|null) => void
  ): UnaryResponse;
  dequeuePreviewRecordOrCall(
    requestMessage: api_v0alpha_callqueue_pb.DequeuePreviewRecordOrCallReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.DequeuePreviewRecordOrCallRes|null) => void
  ): UnaryResponse;
  enqueuePreviewRecord(
    requestMessage: api_v0alpha_callqueue_pb.EnqueuePreviewRecordReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.EnqueuePreviewRecordRes|null) => void
  ): UnaryResponse;
  enqueuePreviewRecord(
    requestMessage: api_v0alpha_callqueue_pb.EnqueuePreviewRecordReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.EnqueuePreviewRecordRes|null) => void
  ): UnaryResponse;
  dequeueScrubbedCallForPreviewRecord(
    requestMessage: api_v0alpha_callqueue_pb.DequeueScrubbedCallForPreviewRecordReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.DequeueScrubbedCallForPreviewRecordRes|null) => void
  ): UnaryResponse;
  dequeueScrubbedCallForPreviewRecord(
    requestMessage: api_v0alpha_callqueue_pb.DequeueScrubbedCallForPreviewRecordReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.DequeueScrubbedCallForPreviewRecordRes|null) => void
  ): UnaryResponse;
  clearPreviewRecordReturnQueue(
    requestMessage: api_v0alpha_callqueue_pb.ClearPreviewRecordReturnQueueReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.ClearPreviewRecordReturnQueueRes|null) => void
  ): UnaryResponse;
  clearPreviewRecordReturnQueue(
    requestMessage: api_v0alpha_callqueue_pb.ClearPreviewRecordReturnQueueReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.ClearPreviewRecordReturnQueueRes|null) => void
  ): UnaryResponse;
  enqueuePreviewDialCall(
    requestMessage: api_v0alpha_callqueue_pb.EnqueuePreviewDialCallReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.EnqueuePreviewDialCallRes|null) => void
  ): UnaryResponse;
  enqueuePreviewDialCall(
    requestMessage: api_v0alpha_callqueue_pb.EnqueuePreviewDialCallReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.EnqueuePreviewDialCallRes|null) => void
  ): UnaryResponse;
  clearManualDialQueue(
    requestMessage: api_v0alpha_callqueue_pb.ClearManualDialQueueReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.ClearManualDialQueueRes|null) => void
  ): UnaryResponse;
  clearManualDialQueue(
    requestMessage: api_v0alpha_callqueue_pb.ClearManualDialQueueReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.ClearManualDialQueueRes|null) => void
  ): UnaryResponse;
  processManualDialCall(
    requestMessage: api_v0alpha_callqueue_pb.ProcessManualDialCallReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.ProcessManualDialCallRes|null) => void
  ): UnaryResponse;
  processManualDialCall(
    requestMessage: api_v0alpha_callqueue_pb.ProcessManualDialCallReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.ProcessManualDialCallRes|null) => void
  ): UnaryResponse;
  dequeueCallForManualApproval(
    requestMessage: api_v0alpha_callqueue_pb.DequeueCallForManualApprovalReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.DequeueCallForManualApprovalRes|null) => void
  ): UnaryResponse;
  dequeueCallForManualApproval(
    requestMessage: api_v0alpha_callqueue_pb.DequeueCallForManualApprovalReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.DequeueCallForManualApprovalRes|null) => void
  ): UnaryResponse;
  enqueueManuallyApprovedCall(
    requestMessage: api_v0alpha_callqueue_pb.EnqueueManuallyApprovedCallReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.EnqueueManuallyApprovedCallRes|null) => void
  ): UnaryResponse;
  enqueueManuallyApprovedCall(
    requestMessage: api_v0alpha_callqueue_pb.EnqueueManuallyApprovedCallReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.EnqueueManuallyApprovedCallRes|null) => void
  ): UnaryResponse;
  enqueueManuallyRejectedCall(
    requestMessage: api_v0alpha_callqueue_pb.EnqueueManuallyRejectedCallReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.EnqueueManuallyRejectedCallRes|null) => void
  ): UnaryResponse;
  enqueueManuallyRejectedCall(
    requestMessage: api_v0alpha_callqueue_pb.EnqueueManuallyRejectedCallReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.EnqueueManuallyRejectedCallRes|null) => void
  ): UnaryResponse;
  requeueManuallyApprovedCall(
    requestMessage: api_v0alpha_callqueue_pb.RequeueManuallyApprovedCallReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.RequeueManuallyApprovedCallRes|null) => void
  ): UnaryResponse;
  requeueManuallyApprovedCall(
    requestMessage: api_v0alpha_callqueue_pb.RequeueManuallyApprovedCallReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.RequeueManuallyApprovedCallRes|null) => void
  ): UnaryResponse;
  enqueueManuallyApprovedSms(
    requestMessage: api_v0alpha_callqueue_pb.EnqueueManuallyApprovedSmsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.EnqueueManuallyApprovedSmsRes|null) => void
  ): UnaryResponse;
  enqueueManuallyApprovedSms(
    requestMessage: api_v0alpha_callqueue_pb.EnqueueManuallyApprovedSmsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.EnqueueManuallyApprovedSmsRes|null) => void
  ): UnaryResponse;
  enqueueManuallyRejectedSms(
    requestMessage: api_v0alpha_callqueue_pb.EnqueueManuallyRejectedSmsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.EnqueueManuallyRejectedSmsRes|null) => void
  ): UnaryResponse;
  enqueueManuallyRejectedSms(
    requestMessage: api_v0alpha_callqueue_pb.EnqueueManuallyRejectedSmsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.EnqueueManuallyRejectedSmsRes|null) => void
  ): UnaryResponse;
  requeueManuallyApprovedSms(
    requestMessage: api_v0alpha_callqueue_pb.RequeueManuallyApprovedSmsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.RequeueManuallyApprovedSmsRes|null) => void
  ): UnaryResponse;
  requeueManuallyApprovedSms(
    requestMessage: api_v0alpha_callqueue_pb.RequeueManuallyApprovedSmsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.RequeueManuallyApprovedSmsRes|null) => void
  ): UnaryResponse;
  dequeueSmsMamForManualApproval(
    requestMessage: api_v0alpha_callqueue_pb.DequeueSmsMamForManualApprovalReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.DequeueSmsMamForManualApprovalRes|null) => void
  ): UnaryResponse;
  dequeueSmsMamForManualApproval(
    requestMessage: api_v0alpha_callqueue_pb.DequeueSmsMamForManualApprovalReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_callqueue_pb.DequeueSmsMamForManualApprovalRes|null) => void
  ): UnaryResponse;
}

