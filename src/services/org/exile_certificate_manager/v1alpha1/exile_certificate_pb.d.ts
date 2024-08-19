// package: services.org.exile_certificate_manager.v1alpha1
// file: services/org/exile_certificate_manager/v1alpha1/exile_certificate.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as services_org_exile_certificate_manager_v1alpha1_entities_pb from "../../../../services/org/exile_certificate_manager/v1alpha1/entities_pb";

export class CreateExileCertificateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateExileCertificateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateExileCertificateRequest): CreateExileCertificateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateExileCertificateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateExileCertificateRequest;
  static deserializeBinaryFromReader(message: CreateExileCertificateRequest, reader: jspb.BinaryReader): CreateExileCertificateRequest;
}

export namespace CreateExileCertificateRequest {
  export type AsObject = {
    name: string,
    description: string,
  }
}

export class CreateExileCertificateResponse extends jspb.Message {
  getEncodedExileCertificate(): string;
  setEncodedExileCertificate(value: string): void;

  getExileCertificateId(): string;
  setExileCertificateId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateExileCertificateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateExileCertificateResponse): CreateExileCertificateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateExileCertificateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateExileCertificateResponse;
  static deserializeBinaryFromReader(message: CreateExileCertificateResponse, reader: jspb.BinaryReader): CreateExileCertificateResponse;
}

export namespace CreateExileCertificateResponse {
  export type AsObject = {
    encodedExileCertificate: string,
    exileCertificateId: string,
  }
}

export class RevokeExileCertificateRequest extends jspb.Message {
  getExileCertificateId(): string;
  setExileCertificateId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeExileCertificateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeExileCertificateRequest): RevokeExileCertificateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeExileCertificateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeExileCertificateRequest;
  static deserializeBinaryFromReader(message: RevokeExileCertificateRequest, reader: jspb.BinaryReader): RevokeExileCertificateRequest;
}

export namespace RevokeExileCertificateRequest {
  export type AsObject = {
    exileCertificateId: string,
  }
}

export class RevokeExileCertificateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeExileCertificateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeExileCertificateResponse): RevokeExileCertificateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeExileCertificateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeExileCertificateResponse;
  static deserializeBinaryFromReader(message: RevokeExileCertificateResponse, reader: jspb.BinaryReader): RevokeExileCertificateResponse;
}

export namespace RevokeExileCertificateResponse {
  export type AsObject = {
  }
}

export class AssignExileConfigurationRequest extends jspb.Message {
  getExileCertificateId(): string;
  setExileCertificateId(value: string): void;

  getExileConfigurationId(): string;
  setExileConfigurationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignExileConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignExileConfigurationRequest): AssignExileConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignExileConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignExileConfigurationRequest;
  static deserializeBinaryFromReader(message: AssignExileConfigurationRequest, reader: jspb.BinaryReader): AssignExileConfigurationRequest;
}

export namespace AssignExileConfigurationRequest {
  export type AsObject = {
    exileCertificateId: string,
    exileConfigurationId: string,
  }
}

export class AssignExileConfigurationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignExileConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignExileConfigurationResponse): AssignExileConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignExileConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignExileConfigurationResponse;
  static deserializeBinaryFromReader(message: AssignExileConfigurationResponse, reader: jspb.BinaryReader): AssignExileConfigurationResponse;
}

export namespace AssignExileConfigurationResponse {
  export type AsObject = {
  }
}

export class UnassignExileConfigurationRequest extends jspb.Message {
  getExileCertificateId(): string;
  setExileCertificateId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnassignExileConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnassignExileConfigurationRequest): UnassignExileConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnassignExileConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnassignExileConfigurationRequest;
  static deserializeBinaryFromReader(message: UnassignExileConfigurationRequest, reader: jspb.BinaryReader): UnassignExileConfigurationRequest;
}

export namespace UnassignExileConfigurationRequest {
  export type AsObject = {
    exileCertificateId: string,
  }
}

export class UnassignExileConfigurationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnassignExileConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnassignExileConfigurationResponse): UnassignExileConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnassignExileConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnassignExileConfigurationResponse;
  static deserializeBinaryFromReader(message: UnassignExileConfigurationResponse, reader: jspb.BinaryReader): UnassignExileConfigurationResponse;
}

export namespace UnassignExileConfigurationResponse {
  export type AsObject = {
  }
}

export class ListExileCertificatesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExileCertificatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListExileCertificatesRequest): ListExileCertificatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListExileCertificatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExileCertificatesRequest;
  static deserializeBinaryFromReader(message: ListExileCertificatesRequest, reader: jspb.BinaryReader): ListExileCertificatesRequest;
}

export namespace ListExileCertificatesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListExileCertificatesResponse extends jspb.Message {
  clearExileCertificatesList(): void;
  getExileCertificatesList(): Array<services_org_exile_certificate_manager_v1alpha1_entities_pb.ExileCertificate>;
  setExileCertificatesList(value: Array<services_org_exile_certificate_manager_v1alpha1_entities_pb.ExileCertificate>): void;
  addExileCertificates(value?: services_org_exile_certificate_manager_v1alpha1_entities_pb.ExileCertificate, index?: number): services_org_exile_certificate_manager_v1alpha1_entities_pb.ExileCertificate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExileCertificatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListExileCertificatesResponse): ListExileCertificatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListExileCertificatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExileCertificatesResponse;
  static deserializeBinaryFromReader(message: ListExileCertificatesResponse, reader: jspb.BinaryReader): ListExileCertificatesResponse;
}

export namespace ListExileCertificatesResponse {
  export type AsObject = {
    exileCertificatesList: Array<services_org_exile_certificate_manager_v1alpha1_entities_pb.ExileCertificate.AsObject>,
  }
}

