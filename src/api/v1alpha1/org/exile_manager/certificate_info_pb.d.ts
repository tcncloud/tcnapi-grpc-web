// package: api.v1alpha1.org.exile_manager
// file: api/v1alpha1/org/exile_manager/certificate_info.proto

import * as jspb from "google-protobuf";
import * as api_commons_org_preferences_pb from "../../../../api/commons/org/preferences_pb";

export class CreateCertificateInfoRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCertificateInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCertificateInfoRequest): CreateCertificateInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCertificateInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCertificateInfoRequest;
  static deserializeBinaryFromReader(message: CreateCertificateInfoRequest, reader: jspb.BinaryReader): CreateCertificateInfoRequest;
}

export namespace CreateCertificateInfoRequest {
  export type AsObject = {
    name: string,
    description: string,
  }
}

export class CreateCertificateInfoResponse extends jspb.Message {
  getEncodedCertificate(): string;
  setEncodedCertificate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCertificateInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCertificateInfoResponse): CreateCertificateInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCertificateInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCertificateInfoResponse;
  static deserializeBinaryFromReader(message: CreateCertificateInfoResponse, reader: jspb.BinaryReader): CreateCertificateInfoResponse;
}

export namespace CreateCertificateInfoResponse {
  export type AsObject = {
    encodedCertificate: string,
  }
}

export class DeleteCertificateInfoRequest extends jspb.Message {
  getCertificateInfoId(): string;
  setCertificateInfoId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCertificateInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCertificateInfoRequest): DeleteCertificateInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCertificateInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCertificateInfoRequest;
  static deserializeBinaryFromReader(message: DeleteCertificateInfoRequest, reader: jspb.BinaryReader): DeleteCertificateInfoRequest;
}

export namespace DeleteCertificateInfoRequest {
  export type AsObject = {
    certificateInfoId: string,
  }
}

export class DeleteCertificateInfoResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCertificateInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCertificateInfoResponse): DeleteCertificateInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCertificateInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCertificateInfoResponse;
  static deserializeBinaryFromReader(message: DeleteCertificateInfoResponse, reader: jspb.BinaryReader): DeleteCertificateInfoResponse;
}

export namespace DeleteCertificateInfoResponse {
  export type AsObject = {
  }
}

export class RevokeCertificateInfoRequest extends jspb.Message {
  getCertificateInfoId(): string;
  setCertificateInfoId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeCertificateInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeCertificateInfoRequest): RevokeCertificateInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeCertificateInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeCertificateInfoRequest;
  static deserializeBinaryFromReader(message: RevokeCertificateInfoRequest, reader: jspb.BinaryReader): RevokeCertificateInfoRequest;
}

export namespace RevokeCertificateInfoRequest {
  export type AsObject = {
    certificateInfoId: string,
  }
}

export class RevokeCertificateInfoResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeCertificateInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeCertificateInfoResponse): RevokeCertificateInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeCertificateInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeCertificateInfoResponse;
  static deserializeBinaryFromReader(message: RevokeCertificateInfoResponse, reader: jspb.BinaryReader): RevokeCertificateInfoResponse;
}

export namespace RevokeCertificateInfoResponse {
  export type AsObject = {
  }
}

export class ListCertificateInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCertificateInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCertificateInfoRequest): ListCertificateInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCertificateInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCertificateInfoRequest;
  static deserializeBinaryFromReader(message: ListCertificateInfoRequest, reader: jspb.BinaryReader): ListCertificateInfoRequest;
}

export namespace ListCertificateInfoRequest {
  export type AsObject = {
  }
}

export class ListCertificateInfoResponse extends jspb.Message {
  clearCertificateInfoListList(): void;
  getCertificateInfoListList(): Array<api_commons_org_preferences_pb.CertificateInfo>;
  setCertificateInfoListList(value: Array<api_commons_org_preferences_pb.CertificateInfo>): void;
  addCertificateInfoList(value?: api_commons_org_preferences_pb.CertificateInfo, index?: number): api_commons_org_preferences_pb.CertificateInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCertificateInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCertificateInfoResponse): ListCertificateInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCertificateInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCertificateInfoResponse;
  static deserializeBinaryFromReader(message: ListCertificateInfoResponse, reader: jspb.BinaryReader): ListCertificateInfoResponse;
}

export namespace ListCertificateInfoResponse {
  export type AsObject = {
    certificateInfoListList: Array<api_commons_org_preferences_pb.CertificateInfo.AsObject>,
  }
}

