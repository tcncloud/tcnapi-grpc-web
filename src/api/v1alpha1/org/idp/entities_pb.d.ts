// package: api.v1alpha1.org.idp
// file: api/v1alpha1/org/idp/entities.proto

import * as jspb from "google-protobuf";
import * as api_commons_org_idp_pb from "../../../../api/commons/org/idp_pb";

export class CreateClientReq extends jspb.Message {
  hasClient(): boolean;
  clearClient(): void;
  getClient(): api_commons_org_idp_pb.IdpClient | undefined;
  setClient(value?: api_commons_org_idp_pb.IdpClient): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateClientReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateClientReq): CreateClientReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateClientReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateClientReq;
  static deserializeBinaryFromReader(message: CreateClientReq, reader: jspb.BinaryReader): CreateClientReq;
}

export namespace CreateClientReq {
  export type AsObject = {
    client?: api_commons_org_idp_pb.IdpClient.AsObject,
  }
}

export class CreateClientResp extends jspb.Message {
  getAlreadyExists(): boolean;
  setAlreadyExists(value: boolean): void;

  hasClient(): boolean;
  clearClient(): void;
  getClient(): api_commons_org_idp_pb.IdpClient | undefined;
  setClient(value?: api_commons_org_idp_pb.IdpClient): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateClientResp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateClientResp): CreateClientResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateClientResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateClientResp;
  static deserializeBinaryFromReader(message: CreateClientResp, reader: jspb.BinaryReader): CreateClientResp;
}

export namespace CreateClientResp {
  export type AsObject = {
    alreadyExists: boolean,
    client?: api_commons_org_idp_pb.IdpClient.AsObject,
  }
}

export class DeleteClientReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteClientReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteClientReq): DeleteClientReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteClientReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteClientReq;
  static deserializeBinaryFromReader(message: DeleteClientReq, reader: jspb.BinaryReader): DeleteClientReq;
}

export namespace DeleteClientReq {
  export type AsObject = {
    id: string,
  }
}

export class DeleteClientResp extends jspb.Message {
  getNotFound(): boolean;
  setNotFound(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteClientResp.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteClientResp): DeleteClientResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteClientResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteClientResp;
  static deserializeBinaryFromReader(message: DeleteClientResp, reader: jspb.BinaryReader): DeleteClientResp;
}

export namespace DeleteClientResp {
  export type AsObject = {
    notFound: boolean,
  }
}

export class UpdateClientReq extends jspb.Message {
  hasClient(): boolean;
  clearClient(): void;
  getClient(): api_commons_org_idp_pb.IdpClient | undefined;
  setClient(value?: api_commons_org_idp_pb.IdpClient): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateClientReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateClientReq): UpdateClientReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateClientReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateClientReq;
  static deserializeBinaryFromReader(message: UpdateClientReq, reader: jspb.BinaryReader): UpdateClientReq;
}

export namespace UpdateClientReq {
  export type AsObject = {
    client?: api_commons_org_idp_pb.IdpClient.AsObject,
  }
}

export class UpdateClientResp extends jspb.Message {
  getNotFound(): boolean;
  setNotFound(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateClientResp.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateClientResp): UpdateClientResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateClientResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateClientResp;
  static deserializeBinaryFromReader(message: UpdateClientResp, reader: jspb.BinaryReader): UpdateClientResp;
}

export namespace UpdateClientResp {
  export type AsObject = {
    notFound: boolean,
  }
}

export class ListClientsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListClientsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListClientsReq): ListClientsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListClientsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListClientsReq;
  static deserializeBinaryFromReader(message: ListClientsReq, reader: jspb.BinaryReader): ListClientsReq;
}

export namespace ListClientsReq {
  export type AsObject = {
  }
}

export class ListClientsResp extends jspb.Message {
  clearClientsList(): void;
  getClientsList(): Array<api_commons_org_idp_pb.IdpClient>;
  setClientsList(value: Array<api_commons_org_idp_pb.IdpClient>): void;
  addClients(value?: api_commons_org_idp_pb.IdpClient, index?: number): api_commons_org_idp_pb.IdpClient;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListClientsResp.AsObject;
  static toObject(includeInstance: boolean, msg: ListClientsResp): ListClientsResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListClientsResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListClientsResp;
  static deserializeBinaryFromReader(message: ListClientsResp, reader: jspb.BinaryReader): ListClientsResp;
}

export namespace ListClientsResp {
  export type AsObject = {
    clientsList: Array<api_commons_org_idp_pb.IdpClient.AsObject>,
  }
}

