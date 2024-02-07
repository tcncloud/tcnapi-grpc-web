// package: api.v1alpha1.org.idp
// file: api/v1alpha1/org/idp/entities.proto

import * as jspb from "google-protobuf";
import * as api_commons_org_idp_pb from "../../../../api/commons/org/idp_pb";

export class CreateClientRequest extends jspb.Message {
  hasClient(): boolean;
  clearClient(): void;
  getClient(): api_commons_org_idp_pb.IdpClient | undefined;
  setClient(value?: api_commons_org_idp_pb.IdpClient): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateClientRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateClientRequest): CreateClientRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateClientRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateClientRequest;
  static deserializeBinaryFromReader(message: CreateClientRequest, reader: jspb.BinaryReader): CreateClientRequest;
}

export namespace CreateClientRequest {
  export type AsObject = {
    client?: api_commons_org_idp_pb.IdpClient.AsObject,
  }
}

export class CreateClientResponse extends jspb.Message {
  getAlreadyExists(): boolean;
  setAlreadyExists(value: boolean): void;

  hasClient(): boolean;
  clearClient(): void;
  getClient(): api_commons_org_idp_pb.IdpClient | undefined;
  setClient(value?: api_commons_org_idp_pb.IdpClient): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateClientResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateClientResponse): CreateClientResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateClientResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateClientResponse;
  static deserializeBinaryFromReader(message: CreateClientResponse, reader: jspb.BinaryReader): CreateClientResponse;
}

export namespace CreateClientResponse {
  export type AsObject = {
    alreadyExists: boolean,
    client?: api_commons_org_idp_pb.IdpClient.AsObject,
  }
}

export class DeleteClientRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteClientRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteClientRequest): DeleteClientRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteClientRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteClientRequest;
  static deserializeBinaryFromReader(message: DeleteClientRequest, reader: jspb.BinaryReader): DeleteClientRequest;
}

export namespace DeleteClientRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteClientResponse extends jspb.Message {
  getNotFound(): boolean;
  setNotFound(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteClientResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteClientResponse): DeleteClientResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteClientResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteClientResponse;
  static deserializeBinaryFromReader(message: DeleteClientResponse, reader: jspb.BinaryReader): DeleteClientResponse;
}

export namespace DeleteClientResponse {
  export type AsObject = {
    notFound: boolean,
  }
}

export class UpdateClientRequest extends jspb.Message {
  hasClient(): boolean;
  clearClient(): void;
  getClient(): api_commons_org_idp_pb.IdpClient | undefined;
  setClient(value?: api_commons_org_idp_pb.IdpClient): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateClientRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateClientRequest): UpdateClientRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateClientRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateClientRequest;
  static deserializeBinaryFromReader(message: UpdateClientRequest, reader: jspb.BinaryReader): UpdateClientRequest;
}

export namespace UpdateClientRequest {
  export type AsObject = {
    client?: api_commons_org_idp_pb.IdpClient.AsObject,
  }
}

export class UpdateClientResponse extends jspb.Message {
  getNotFound(): boolean;
  setNotFound(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateClientResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateClientResponse): UpdateClientResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateClientResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateClientResponse;
  static deserializeBinaryFromReader(message: UpdateClientResponse, reader: jspb.BinaryReader): UpdateClientResponse;
}

export namespace UpdateClientResponse {
  export type AsObject = {
    notFound: boolean,
  }
}

export class ListClientsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListClientsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListClientsRequest): ListClientsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListClientsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListClientsRequest;
  static deserializeBinaryFromReader(message: ListClientsRequest, reader: jspb.BinaryReader): ListClientsRequest;
}

export namespace ListClientsRequest {
  export type AsObject = {
  }
}

export class ListClientsResponse extends jspb.Message {
  clearClientsList(): void;
  getClientsList(): Array<api_commons_org_idp_pb.IdpClient>;
  setClientsList(value: Array<api_commons_org_idp_pb.IdpClient>): void;
  addClients(value?: api_commons_org_idp_pb.IdpClient, index?: number): api_commons_org_idp_pb.IdpClient;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListClientsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListClientsResponse): ListClientsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListClientsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListClientsResponse;
  static deserializeBinaryFromReader(message: ListClientsResponse, reader: jspb.BinaryReader): ListClientsResponse;
}

export namespace ListClientsResponse {
  export type AsObject = {
    clientsList: Array<api_commons_org_idp_pb.IdpClient.AsObject>,
  }
}

