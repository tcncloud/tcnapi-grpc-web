// package: services.org.exile_certificate_manager.v1alpha1
// file: services/org/exile_certificate_manager/v1alpha1/certificate_configuration.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as services_org_exile_certificate_manager_v1alpha1_entities_pb from "../../../../services/org/exile_certificate_manager/v1alpha1/entities_pb";

export class CreateCertificateConfigurationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getType(): services_org_exile_certificate_manager_v1alpha1_entities_pb.CertificateConfigurationTypeMap[keyof services_org_exile_certificate_manager_v1alpha1_entities_pb.CertificateConfigurationTypeMap];
  setType(value: services_org_exile_certificate_manager_v1alpha1_entities_pb.CertificateConfigurationTypeMap[keyof services_org_exile_certificate_manager_v1alpha1_entities_pb.CertificateConfigurationTypeMap]): void;

  getParameters(): string;
  setParameters(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCertificateConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCertificateConfigurationRequest): CreateCertificateConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCertificateConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCertificateConfigurationRequest;
  static deserializeBinaryFromReader(message: CreateCertificateConfigurationRequest, reader: jspb.BinaryReader): CreateCertificateConfigurationRequest;
}

export namespace CreateCertificateConfigurationRequest {
  export type AsObject = {
    name: string,
    description: string,
    type: services_org_exile_certificate_manager_v1alpha1_entities_pb.CertificateConfigurationTypeMap[keyof services_org_exile_certificate_manager_v1alpha1_entities_pb.CertificateConfigurationTypeMap],
    parameters: string,
  }
}

export class CreateCertificateConfigurationResponse extends jspb.Message {
  getCertificateConfigurationId(): string;
  setCertificateConfigurationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCertificateConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCertificateConfigurationResponse): CreateCertificateConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCertificateConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCertificateConfigurationResponse;
  static deserializeBinaryFromReader(message: CreateCertificateConfigurationResponse, reader: jspb.BinaryReader): CreateCertificateConfigurationResponse;
}

export namespace CreateCertificateConfigurationResponse {
  export type AsObject = {
    certificateConfigurationId: string,
  }
}

export class UpdateCertificateConfigurationRequest extends jspb.Message {
  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): services_org_exile_certificate_manager_v1alpha1_entities_pb.CertificateConfiguration | undefined;
  setConfiguration(value?: services_org_exile_certificate_manager_v1alpha1_entities_pb.CertificateConfiguration): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCertificateConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCertificateConfigurationRequest): UpdateCertificateConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCertificateConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCertificateConfigurationRequest;
  static deserializeBinaryFromReader(message: UpdateCertificateConfigurationRequest, reader: jspb.BinaryReader): UpdateCertificateConfigurationRequest;
}

export namespace UpdateCertificateConfigurationRequest {
  export type AsObject = {
    configuration?: services_org_exile_certificate_manager_v1alpha1_entities_pb.CertificateConfiguration.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateCertificateConfigurationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCertificateConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCertificateConfigurationResponse): UpdateCertificateConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCertificateConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCertificateConfigurationResponse;
  static deserializeBinaryFromReader(message: UpdateCertificateConfigurationResponse, reader: jspb.BinaryReader): UpdateCertificateConfigurationResponse;
}

export namespace UpdateCertificateConfigurationResponse {
  export type AsObject = {
  }
}

export class DeleteCertificateConfigurationRequest extends jspb.Message {
  getCertificateConfigurationId(): string;
  setCertificateConfigurationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCertificateConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCertificateConfigurationRequest): DeleteCertificateConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCertificateConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCertificateConfigurationRequest;
  static deserializeBinaryFromReader(message: DeleteCertificateConfigurationRequest, reader: jspb.BinaryReader): DeleteCertificateConfigurationRequest;
}

export namespace DeleteCertificateConfigurationRequest {
  export type AsObject = {
    certificateConfigurationId: string,
  }
}

export class DeleteCertificateConfigurationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCertificateConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCertificateConfigurationResponse): DeleteCertificateConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCertificateConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCertificateConfigurationResponse;
  static deserializeBinaryFromReader(message: DeleteCertificateConfigurationResponse, reader: jspb.BinaryReader): DeleteCertificateConfigurationResponse;
}

export namespace DeleteCertificateConfigurationResponse {
  export type AsObject = {
  }
}

export class ListCertificateConfigurationsRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCertificateConfigurationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCertificateConfigurationsRequest): ListCertificateConfigurationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCertificateConfigurationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCertificateConfigurationsRequest;
  static deserializeBinaryFromReader(message: ListCertificateConfigurationsRequest, reader: jspb.BinaryReader): ListCertificateConfigurationsRequest;
}

export namespace ListCertificateConfigurationsRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListCertificateConfigurationsResponse extends jspb.Message {
  clearCertificateConfigurationsList(): void;
  getCertificateConfigurationsList(): Array<services_org_exile_certificate_manager_v1alpha1_entities_pb.CertificateConfiguration>;
  setCertificateConfigurationsList(value: Array<services_org_exile_certificate_manager_v1alpha1_entities_pb.CertificateConfiguration>): void;
  addCertificateConfigurations(value?: services_org_exile_certificate_manager_v1alpha1_entities_pb.CertificateConfiguration, index?: number): services_org_exile_certificate_manager_v1alpha1_entities_pb.CertificateConfiguration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCertificateConfigurationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCertificateConfigurationsResponse): ListCertificateConfigurationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCertificateConfigurationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCertificateConfigurationsResponse;
  static deserializeBinaryFromReader(message: ListCertificateConfigurationsResponse, reader: jspb.BinaryReader): ListCertificateConfigurationsResponse;
}

export namespace ListCertificateConfigurationsResponse {
  export type AsObject = {
    certificateConfigurationsList: Array<services_org_exile_certificate_manager_v1alpha1_entities_pb.CertificateConfiguration.AsObject>,
  }
}

