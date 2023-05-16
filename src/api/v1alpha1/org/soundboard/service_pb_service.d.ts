// package: api.v1alpha1.soundboard
// file: api/v1alpha1/org/soundboard/service.proto

import * as api_v1alpha1_org_soundboard_service_pb from "../../../../api/v1alpha1/org/soundboard/service_pb";
import * as api_v1alpha1_org_soundboard_entities_pb from "../../../../api/v1alpha1/org/soundboard/entities_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SoundboardGetSoundboardFile = {
  readonly methodName: string;
  readonly service: typeof Soundboard;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_org_soundboard_entities_pb.GetSoundboardFileReq;
  readonly responseType: typeof api_v1alpha1_org_soundboard_entities_pb.GetSoundboardFileRes;
};

type SoundboardCreateSoundboard = {
  readonly methodName: string;
  readonly service: typeof Soundboard;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_soundboard_entities_pb.CreateSoundboardReq;
  readonly responseType: typeof api_v1alpha1_org_soundboard_entities_pb.CreateSoundboardRes;
};

type SoundboardListSoundboards = {
  readonly methodName: string;
  readonly service: typeof Soundboard;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_soundboard_entities_pb.ListSoundboardsReq;
  readonly responseType: typeof api_v1alpha1_org_soundboard_entities_pb.ListSoundboardsRes;
};

type SoundboardUpdateSoundboard = {
  readonly methodName: string;
  readonly service: typeof Soundboard;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_soundboard_entities_pb.UpdateSoundboardReq;
  readonly responseType: typeof api_v1alpha1_org_soundboard_entities_pb.UpdateSoundboardRes;
};

type SoundboardDeleteSoundboard = {
  readonly methodName: string;
  readonly service: typeof Soundboard;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_soundboard_entities_pb.DeleteSoundboardReq;
  readonly responseType: typeof api_v1alpha1_org_soundboard_entities_pb.DeleteSoundboardRes;
};

export class Soundboard {
  static readonly serviceName: string;
  static readonly GetSoundboardFile: SoundboardGetSoundboardFile;
  static readonly CreateSoundboard: SoundboardCreateSoundboard;
  static readonly ListSoundboards: SoundboardListSoundboards;
  static readonly UpdateSoundboard: SoundboardUpdateSoundboard;
  static readonly DeleteSoundboard: SoundboardDeleteSoundboard;
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

export class SoundboardClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getSoundboardFile(requestMessage: api_v1alpha1_org_soundboard_entities_pb.GetSoundboardFileReq, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_org_soundboard_entities_pb.GetSoundboardFileRes>;
  createSoundboard(
    requestMessage: api_v1alpha1_org_soundboard_entities_pb.CreateSoundboardReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_soundboard_entities_pb.CreateSoundboardRes|null) => void
  ): UnaryResponse;
  createSoundboard(
    requestMessage: api_v1alpha1_org_soundboard_entities_pb.CreateSoundboardReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_soundboard_entities_pb.CreateSoundboardRes|null) => void
  ): UnaryResponse;
  listSoundboards(
    requestMessage: api_v1alpha1_org_soundboard_entities_pb.ListSoundboardsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_soundboard_entities_pb.ListSoundboardsRes|null) => void
  ): UnaryResponse;
  listSoundboards(
    requestMessage: api_v1alpha1_org_soundboard_entities_pb.ListSoundboardsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_soundboard_entities_pb.ListSoundboardsRes|null) => void
  ): UnaryResponse;
  updateSoundboard(
    requestMessage: api_v1alpha1_org_soundboard_entities_pb.UpdateSoundboardReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_soundboard_entities_pb.UpdateSoundboardRes|null) => void
  ): UnaryResponse;
  updateSoundboard(
    requestMessage: api_v1alpha1_org_soundboard_entities_pb.UpdateSoundboardReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_soundboard_entities_pb.UpdateSoundboardRes|null) => void
  ): UnaryResponse;
  deleteSoundboard(
    requestMessage: api_v1alpha1_org_soundboard_entities_pb.DeleteSoundboardReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_soundboard_entities_pb.DeleteSoundboardRes|null) => void
  ): UnaryResponse;
  deleteSoundboard(
    requestMessage: api_v1alpha1_org_soundboard_entities_pb.DeleteSoundboardReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_soundboard_entities_pb.DeleteSoundboardRes|null) => void
  ): UnaryResponse;
}

