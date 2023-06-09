// package: api.v0alpha
// file: api/v0alpha/vmds.proto

import * as api_v0alpha_vmds_pb from "../../api/v0alpha/vmds_pb";
import {grpc} from "@improbable-eng/grpc-web";

type VmdsGetVoicemailMetadata = {
  readonly methodName: string;
  readonly service: typeof Vmds;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v0alpha_vmds_pb.GetVoicemailMetadataReq;
  readonly responseType: typeof api_v0alpha_vmds_pb.GetVoicemailMetadataRes;
};

type VmdsGetVoicemailMessageCount = {
  readonly methodName: string;
  readonly service: typeof Vmds;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_vmds_pb.GetVoicemailCountReq;
  readonly responseType: typeof api_v0alpha_vmds_pb.GetVoicemailCountRes;
};

type VmdsDeleteVoicemail = {
  readonly methodName: string;
  readonly service: typeof Vmds;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_vmds_pb.DeleteVoicemailReq;
  readonly responseType: typeof api_v0alpha_vmds_pb.DeleteVoicemailRes;
};

type VmdsDeleteGreeting = {
  readonly methodName: string;
  readonly service: typeof Vmds;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_vmds_pb.DeleteGreetingReq;
  readonly responseType: typeof api_v0alpha_vmds_pb.DeleteGreetingRes;
};

type VmdsUpdateUploadName = {
  readonly methodName: string;
  readonly service: typeof Vmds;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_vmds_pb.UpdateUploadNameReq;
  readonly responseType: typeof api_v0alpha_vmds_pb.UpdateUploadNameRes;
};

type VmdsUpdateVoicemailFlagRead = {
  readonly methodName: string;
  readonly service: typeof Vmds;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_vmds_pb.UpdateVoicemailFlagReadReq;
  readonly responseType: typeof api_v0alpha_vmds_pb.UpdateVoicemailFlagReadRes;
};

type VmdsDownloadMessage = {
  readonly methodName: string;
  readonly service: typeof Vmds;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_vmds_pb.DownloadMessageReq;
  readonly responseType: typeof api_v0alpha_vmds_pb.DownloadMessageRes;
};

type VmdsDownloadSpecifiedMessages = {
  readonly methodName: string;
  readonly service: typeof Vmds;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_vmds_pb.DownloadSpecifiedMessagesReq;
  readonly responseType: typeof api_v0alpha_vmds_pb.DownloadSpecifiedMessagesRes;
};

type VmdsDownloadMessages = {
  readonly methodName: string;
  readonly service: typeof Vmds;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_vmds_pb.DownloadMessagesReq;
  readonly responseType: typeof api_v0alpha_vmds_pb.DownloadMessagesRes;
};

type VmdsDownloadGreetingForExtension = {
  readonly methodName: string;
  readonly service: typeof Vmds;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_vmds_pb.DownloadGreetingForExtensionReq;
  readonly responseType: typeof api_v0alpha_vmds_pb.DownloadGreetingForExtensionRes;
};

type VmdsDownloadGreeting = {
  readonly methodName: string;
  readonly service: typeof Vmds;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_vmds_pb.DownloadGreetingReq;
  readonly responseType: typeof api_v0alpha_vmds_pb.DownloadGreetingRes;
};

type VmdsGetUploadGreetingUrl = {
  readonly methodName: string;
  readonly service: typeof Vmds;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_vmds_pb.GetUploadGreetingUrlReq;
  readonly responseType: typeof api_v0alpha_vmds_pb.GetUploadGreetingUrlRes;
};

type VmdsProcessGreetingUpload = {
  readonly methodName: string;
  readonly service: typeof Vmds;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_vmds_pb.ProcessGreetingUploadReq;
  readonly responseType: typeof api_v0alpha_vmds_pb.ProcessGreetingUploadRes;
};

type VmdsUpdateGreetingForExtension = {
  readonly methodName: string;
  readonly service: typeof Vmds;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_vmds_pb.UpdateGreetingForExtensionReq;
  readonly responseType: typeof api_v0alpha_vmds_pb.UpdateGreetingForExtensionRes;
};

type VmdsListAvailableGreetings = {
  readonly methodName: string;
  readonly service: typeof Vmds;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_vmds_pb.ListAvailableGreetingsReq;
  readonly responseType: typeof api_v0alpha_vmds_pb.ListAvailableGreetingsRes;
};

export class Vmds {
  static readonly serviceName: string;
  static readonly GetVoicemailMetadata: VmdsGetVoicemailMetadata;
  static readonly GetVoicemailMessageCount: VmdsGetVoicemailMessageCount;
  static readonly DeleteVoicemail: VmdsDeleteVoicemail;
  static readonly DeleteGreeting: VmdsDeleteGreeting;
  static readonly UpdateUploadName: VmdsUpdateUploadName;
  static readonly UpdateVoicemailFlagRead: VmdsUpdateVoicemailFlagRead;
  static readonly DownloadMessage: VmdsDownloadMessage;
  static readonly DownloadSpecifiedMessages: VmdsDownloadSpecifiedMessages;
  static readonly DownloadMessages: VmdsDownloadMessages;
  static readonly DownloadGreetingForExtension: VmdsDownloadGreetingForExtension;
  static readonly DownloadGreeting: VmdsDownloadGreeting;
  static readonly GetUploadGreetingUrl: VmdsGetUploadGreetingUrl;
  static readonly ProcessGreetingUpload: VmdsProcessGreetingUpload;
  static readonly UpdateGreetingForExtension: VmdsUpdateGreetingForExtension;
  static readonly ListAvailableGreetings: VmdsListAvailableGreetings;
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

export class VmdsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getVoicemailMetadata(requestMessage: api_v0alpha_vmds_pb.GetVoicemailMetadataReq, metadata?: grpc.Metadata): ResponseStream<api_v0alpha_vmds_pb.GetVoicemailMetadataRes>;
  getVoicemailMessageCount(
    requestMessage: api_v0alpha_vmds_pb.GetVoicemailCountReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.GetVoicemailCountRes|null) => void
  ): UnaryResponse;
  getVoicemailMessageCount(
    requestMessage: api_v0alpha_vmds_pb.GetVoicemailCountReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.GetVoicemailCountRes|null) => void
  ): UnaryResponse;
  deleteVoicemail(
    requestMessage: api_v0alpha_vmds_pb.DeleteVoicemailReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.DeleteVoicemailRes|null) => void
  ): UnaryResponse;
  deleteVoicemail(
    requestMessage: api_v0alpha_vmds_pb.DeleteVoicemailReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.DeleteVoicemailRes|null) => void
  ): UnaryResponse;
  deleteGreeting(
    requestMessage: api_v0alpha_vmds_pb.DeleteGreetingReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.DeleteGreetingRes|null) => void
  ): UnaryResponse;
  deleteGreeting(
    requestMessage: api_v0alpha_vmds_pb.DeleteGreetingReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.DeleteGreetingRes|null) => void
  ): UnaryResponse;
  updateUploadName(
    requestMessage: api_v0alpha_vmds_pb.UpdateUploadNameReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.UpdateUploadNameRes|null) => void
  ): UnaryResponse;
  updateUploadName(
    requestMessage: api_v0alpha_vmds_pb.UpdateUploadNameReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.UpdateUploadNameRes|null) => void
  ): UnaryResponse;
  updateVoicemailFlagRead(
    requestMessage: api_v0alpha_vmds_pb.UpdateVoicemailFlagReadReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.UpdateVoicemailFlagReadRes|null) => void
  ): UnaryResponse;
  updateVoicemailFlagRead(
    requestMessage: api_v0alpha_vmds_pb.UpdateVoicemailFlagReadReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.UpdateVoicemailFlagReadRes|null) => void
  ): UnaryResponse;
  downloadMessage(
    requestMessage: api_v0alpha_vmds_pb.DownloadMessageReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.DownloadMessageRes|null) => void
  ): UnaryResponse;
  downloadMessage(
    requestMessage: api_v0alpha_vmds_pb.DownloadMessageReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.DownloadMessageRes|null) => void
  ): UnaryResponse;
  downloadSpecifiedMessages(
    requestMessage: api_v0alpha_vmds_pb.DownloadSpecifiedMessagesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.DownloadSpecifiedMessagesRes|null) => void
  ): UnaryResponse;
  downloadSpecifiedMessages(
    requestMessage: api_v0alpha_vmds_pb.DownloadSpecifiedMessagesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.DownloadSpecifiedMessagesRes|null) => void
  ): UnaryResponse;
  downloadMessages(
    requestMessage: api_v0alpha_vmds_pb.DownloadMessagesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.DownloadMessagesRes|null) => void
  ): UnaryResponse;
  downloadMessages(
    requestMessage: api_v0alpha_vmds_pb.DownloadMessagesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.DownloadMessagesRes|null) => void
  ): UnaryResponse;
  downloadGreetingForExtension(
    requestMessage: api_v0alpha_vmds_pb.DownloadGreetingForExtensionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.DownloadGreetingForExtensionRes|null) => void
  ): UnaryResponse;
  downloadGreetingForExtension(
    requestMessage: api_v0alpha_vmds_pb.DownloadGreetingForExtensionReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.DownloadGreetingForExtensionRes|null) => void
  ): UnaryResponse;
  downloadGreeting(
    requestMessage: api_v0alpha_vmds_pb.DownloadGreetingReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.DownloadGreetingRes|null) => void
  ): UnaryResponse;
  downloadGreeting(
    requestMessage: api_v0alpha_vmds_pb.DownloadGreetingReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.DownloadGreetingRes|null) => void
  ): UnaryResponse;
  getUploadGreetingUrl(
    requestMessage: api_v0alpha_vmds_pb.GetUploadGreetingUrlReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.GetUploadGreetingUrlRes|null) => void
  ): UnaryResponse;
  getUploadGreetingUrl(
    requestMessage: api_v0alpha_vmds_pb.GetUploadGreetingUrlReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.GetUploadGreetingUrlRes|null) => void
  ): UnaryResponse;
  processGreetingUpload(
    requestMessage: api_v0alpha_vmds_pb.ProcessGreetingUploadReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.ProcessGreetingUploadRes|null) => void
  ): UnaryResponse;
  processGreetingUpload(
    requestMessage: api_v0alpha_vmds_pb.ProcessGreetingUploadReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.ProcessGreetingUploadRes|null) => void
  ): UnaryResponse;
  updateGreetingForExtension(
    requestMessage: api_v0alpha_vmds_pb.UpdateGreetingForExtensionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.UpdateGreetingForExtensionRes|null) => void
  ): UnaryResponse;
  updateGreetingForExtension(
    requestMessage: api_v0alpha_vmds_pb.UpdateGreetingForExtensionReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.UpdateGreetingForExtensionRes|null) => void
  ): UnaryResponse;
  listAvailableGreetings(
    requestMessage: api_v0alpha_vmds_pb.ListAvailableGreetingsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.ListAvailableGreetingsRes|null) => void
  ): UnaryResponse;
  listAvailableGreetings(
    requestMessage: api_v0alpha_vmds_pb.ListAvailableGreetingsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_vmds_pb.ListAvailableGreetingsRes|null) => void
  ): UnaryResponse;
}

