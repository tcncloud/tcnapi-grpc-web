// package: api.v1alpha1.contactmanager
// file: api/v1alpha1/contactmanager/service.proto

import * as api_v1alpha1_contactmanager_service_pb from "../../../api/v1alpha1/contactmanager/service_pb";
import * as api_v1alpha1_contactmanager_contactmanager_pb from "../../../api/v1alpha1/contactmanager/contactmanager_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ContactManagerGetContactList = {
  readonly methodName: string;
  readonly service: typeof ContactManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_contactmanager_contactmanager_pb.GetContactListRequest;
  readonly responseType: typeof api_v1alpha1_contactmanager_contactmanager_pb.GetContactListResponse;
};

type ContactManagerListContactEntryList = {
  readonly methodName: string;
  readonly service: typeof ContactManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_contactmanager_contactmanager_pb.ListContactEntryListRequest;
  readonly responseType: typeof api_v1alpha1_contactmanager_contactmanager_pb.ListContactEntryListResponse;
};

type ContactManagerGetEncContactEntry = {
  readonly methodName: string;
  readonly service: typeof ContactManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_contactmanager_contactmanager_pb.GetEncContactEntryRequest;
  readonly responseType: typeof api_v1alpha1_contactmanager_contactmanager_pb.GetEncContactEntryResponse;
};

type ContactManagerGetKYCEncContactEntry = {
  readonly methodName: string;
  readonly service: typeof ContactManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_contactmanager_contactmanager_pb.GetKYCEncContactEntryRequest;
  readonly responseType: typeof api_v1alpha1_contactmanager_contactmanager_pb.GetKYCEncContactEntryResponse;
};

type ContactManagerGetKYCKeys = {
  readonly methodName: string;
  readonly service: typeof ContactManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_contactmanager_contactmanager_pb.GetKYCKeysRequest;
  readonly responseType: typeof api_v1alpha1_contactmanager_contactmanager_pb.GetKYCKeysResponse;
};

type ContactManagerAddContactEntry = {
  readonly methodName: string;
  readonly service: typeof ContactManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_contactmanager_contactmanager_pb.AddContactEntryRequest;
  readonly responseType: typeof api_v1alpha1_contactmanager_contactmanager_pb.AddContactEntryResponse;
};

type ContactManagerEditContactEntry = {
  readonly methodName: string;
  readonly service: typeof ContactManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_contactmanager_contactmanager_pb.EditContactEntryRequest;
  readonly responseType: typeof api_v1alpha1_contactmanager_contactmanager_pb.EditContactEntryResponse;
};

type ContactManagerListContactsByEntity = {
  readonly methodName: string;
  readonly service: typeof ContactManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_contactmanager_contactmanager_pb.ListContactsByEntityRequest;
  readonly responseType: typeof api_v1alpha1_contactmanager_contactmanager_pb.ListContactsByEntityResponse;
};

type ContactManagerGetContactFieldType = {
  readonly methodName: string;
  readonly service: typeof ContactManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_contactmanager_contactmanager_pb.GetContactFieldTypeRequest;
  readonly responseType: typeof api_v1alpha1_contactmanager_contactmanager_pb.GetContactFieldTypeResponse;
};

type ContactManagerListContactActivityLog = {
  readonly methodName: string;
  readonly service: typeof ContactManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_contactmanager_contactmanager_pb.ListContactActivityLogRequest;
  readonly responseType: typeof api_v1alpha1_contactmanager_contactmanager_pb.ListContactActivityLogResponse;
};

export class ContactManager {
  static readonly serviceName: string;
  static readonly GetContactList: ContactManagerGetContactList;
  static readonly ListContactEntryList: ContactManagerListContactEntryList;
  static readonly GetEncContactEntry: ContactManagerGetEncContactEntry;
  static readonly GetKYCEncContactEntry: ContactManagerGetKYCEncContactEntry;
  static readonly GetKYCKeys: ContactManagerGetKYCKeys;
  static readonly AddContactEntry: ContactManagerAddContactEntry;
  static readonly EditContactEntry: ContactManagerEditContactEntry;
  static readonly ListContactsByEntity: ContactManagerListContactsByEntity;
  static readonly GetContactFieldType: ContactManagerGetContactFieldType;
  static readonly ListContactActivityLog: ContactManagerListContactActivityLog;
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

export class ContactManagerClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getContactList(
    requestMessage: api_v1alpha1_contactmanager_contactmanager_pb.GetContactListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_contactmanager_contactmanager_pb.GetContactListResponse|null) => void
  ): UnaryResponse;
  getContactList(
    requestMessage: api_v1alpha1_contactmanager_contactmanager_pb.GetContactListRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_contactmanager_contactmanager_pb.GetContactListResponse|null) => void
  ): UnaryResponse;
  listContactEntryList(
    requestMessage: api_v1alpha1_contactmanager_contactmanager_pb.ListContactEntryListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_contactmanager_contactmanager_pb.ListContactEntryListResponse|null) => void
  ): UnaryResponse;
  listContactEntryList(
    requestMessage: api_v1alpha1_contactmanager_contactmanager_pb.ListContactEntryListRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_contactmanager_contactmanager_pb.ListContactEntryListResponse|null) => void
  ): UnaryResponse;
  getEncContactEntry(
    requestMessage: api_v1alpha1_contactmanager_contactmanager_pb.GetEncContactEntryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_contactmanager_contactmanager_pb.GetEncContactEntryResponse|null) => void
  ): UnaryResponse;
  getEncContactEntry(
    requestMessage: api_v1alpha1_contactmanager_contactmanager_pb.GetEncContactEntryRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_contactmanager_contactmanager_pb.GetEncContactEntryResponse|null) => void
  ): UnaryResponse;
  getKYCEncContactEntry(
    requestMessage: api_v1alpha1_contactmanager_contactmanager_pb.GetKYCEncContactEntryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_contactmanager_contactmanager_pb.GetKYCEncContactEntryResponse|null) => void
  ): UnaryResponse;
  getKYCEncContactEntry(
    requestMessage: api_v1alpha1_contactmanager_contactmanager_pb.GetKYCEncContactEntryRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_contactmanager_contactmanager_pb.GetKYCEncContactEntryResponse|null) => void
  ): UnaryResponse;
  getKYCKeys(
    requestMessage: api_v1alpha1_contactmanager_contactmanager_pb.GetKYCKeysRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_contactmanager_contactmanager_pb.GetKYCKeysResponse|null) => void
  ): UnaryResponse;
  getKYCKeys(
    requestMessage: api_v1alpha1_contactmanager_contactmanager_pb.GetKYCKeysRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_contactmanager_contactmanager_pb.GetKYCKeysResponse|null) => void
  ): UnaryResponse;
  addContactEntry(
    requestMessage: api_v1alpha1_contactmanager_contactmanager_pb.AddContactEntryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_contactmanager_contactmanager_pb.AddContactEntryResponse|null) => void
  ): UnaryResponse;
  addContactEntry(
    requestMessage: api_v1alpha1_contactmanager_contactmanager_pb.AddContactEntryRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_contactmanager_contactmanager_pb.AddContactEntryResponse|null) => void
  ): UnaryResponse;
  editContactEntry(
    requestMessage: api_v1alpha1_contactmanager_contactmanager_pb.EditContactEntryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_contactmanager_contactmanager_pb.EditContactEntryResponse|null) => void
  ): UnaryResponse;
  editContactEntry(
    requestMessage: api_v1alpha1_contactmanager_contactmanager_pb.EditContactEntryRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_contactmanager_contactmanager_pb.EditContactEntryResponse|null) => void
  ): UnaryResponse;
  listContactsByEntity(
    requestMessage: api_v1alpha1_contactmanager_contactmanager_pb.ListContactsByEntityRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_contactmanager_contactmanager_pb.ListContactsByEntityResponse|null) => void
  ): UnaryResponse;
  listContactsByEntity(
    requestMessage: api_v1alpha1_contactmanager_contactmanager_pb.ListContactsByEntityRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_contactmanager_contactmanager_pb.ListContactsByEntityResponse|null) => void
  ): UnaryResponse;
  getContactFieldType(
    requestMessage: api_v1alpha1_contactmanager_contactmanager_pb.GetContactFieldTypeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_contactmanager_contactmanager_pb.GetContactFieldTypeResponse|null) => void
  ): UnaryResponse;
  getContactFieldType(
    requestMessage: api_v1alpha1_contactmanager_contactmanager_pb.GetContactFieldTypeRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_contactmanager_contactmanager_pb.GetContactFieldTypeResponse|null) => void
  ): UnaryResponse;
  listContactActivityLog(
    requestMessage: api_v1alpha1_contactmanager_contactmanager_pb.ListContactActivityLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_contactmanager_contactmanager_pb.ListContactActivityLogResponse|null) => void
  ): UnaryResponse;
  listContactActivityLog(
    requestMessage: api_v1alpha1_contactmanager_contactmanager_pb.ListContactActivityLogRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_contactmanager_contactmanager_pb.ListContactActivityLogResponse|null) => void
  ): UnaryResponse;
}

