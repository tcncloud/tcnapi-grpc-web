// package: services.org.exile_certificate_manager.v1alpha1
// file: services/org/exile_certificate_manager/v1alpha1/exile_configuration.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as services_org_exile_certificate_manager_v1alpha1_entities_pb from "../../../../services/org/exile_certificate_manager/v1alpha1/entities_pb";

export class CreateExileConfigurationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getType(): services_org_exile_certificate_manager_v1alpha1_entities_pb.ExileConfigurationTypeMap[keyof services_org_exile_certificate_manager_v1alpha1_entities_pb.ExileConfigurationTypeMap];
  setType(value: services_org_exile_certificate_manager_v1alpha1_entities_pb.ExileConfigurationTypeMap[keyof services_org_exile_certificate_manager_v1alpha1_entities_pb.ExileConfigurationTypeMap]): void;

  getParameters(): string;
  setParameters(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateExileConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateExileConfigurationRequest): CreateExileConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateExileConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateExileConfigurationRequest;
  static deserializeBinaryFromReader(message: CreateExileConfigurationRequest, reader: jspb.BinaryReader): CreateExileConfigurationRequest;
}

export namespace CreateExileConfigurationRequest {
  export type AsObject = {
    name: string,
    description: string,
    type: services_org_exile_certificate_manager_v1alpha1_entities_pb.ExileConfigurationTypeMap[keyof services_org_exile_certificate_manager_v1alpha1_entities_pb.ExileConfigurationTypeMap],
    parameters: string,
  }
}

export class CreateExileConfigurationResponse extends jspb.Message {
  getExileConfigurationId(): string;
  setExileConfigurationId(value: string): void;

  hasExileConfiguration(): boolean;
  clearExileConfiguration(): void;
  getExileConfiguration(): services_org_exile_certificate_manager_v1alpha1_entities_pb.ExileConfiguration | undefined;
  setExileConfiguration(value?: services_org_exile_certificate_manager_v1alpha1_entities_pb.ExileConfiguration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateExileConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateExileConfigurationResponse): CreateExileConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateExileConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateExileConfigurationResponse;
  static deserializeBinaryFromReader(message: CreateExileConfigurationResponse, reader: jspb.BinaryReader): CreateExileConfigurationResponse;
}

export namespace CreateExileConfigurationResponse {
  export type AsObject = {
    exileConfigurationId: string,
    exileConfiguration?: services_org_exile_certificate_manager_v1alpha1_entities_pb.ExileConfiguration.AsObject,
  }
}

export class UpdateExileConfigurationRequest extends jspb.Message {
  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): services_org_exile_certificate_manager_v1alpha1_entities_pb.ExileConfiguration | undefined;
  setConfiguration(value?: services_org_exile_certificate_manager_v1alpha1_entities_pb.ExileConfiguration): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateExileConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateExileConfigurationRequest): UpdateExileConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateExileConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateExileConfigurationRequest;
  static deserializeBinaryFromReader(message: UpdateExileConfigurationRequest, reader: jspb.BinaryReader): UpdateExileConfigurationRequest;
}

export namespace UpdateExileConfigurationRequest {
  export type AsObject = {
    configuration?: services_org_exile_certificate_manager_v1alpha1_entities_pb.ExileConfiguration.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateExileConfigurationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateExileConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateExileConfigurationResponse): UpdateExileConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateExileConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateExileConfigurationResponse;
  static deserializeBinaryFromReader(message: UpdateExileConfigurationResponse, reader: jspb.BinaryReader): UpdateExileConfigurationResponse;
}

export namespace UpdateExileConfigurationResponse {
  export type AsObject = {
  }
}

export class DeleteExileConfigurationRequest extends jspb.Message {
  getExileConfigurationId(): string;
  setExileConfigurationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteExileConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteExileConfigurationRequest): DeleteExileConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteExileConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteExileConfigurationRequest;
  static deserializeBinaryFromReader(message: DeleteExileConfigurationRequest, reader: jspb.BinaryReader): DeleteExileConfigurationRequest;
}

export namespace DeleteExileConfigurationRequest {
  export type AsObject = {
    exileConfigurationId: string,
  }
}

export class DeleteExileConfigurationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteExileConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteExileConfigurationResponse): DeleteExileConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteExileConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteExileConfigurationResponse;
  static deserializeBinaryFromReader(message: DeleteExileConfigurationResponse, reader: jspb.BinaryReader): DeleteExileConfigurationResponse;
}

export namespace DeleteExileConfigurationResponse {
  export type AsObject = {
  }
}

export class ListExileConfigurationsRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExileConfigurationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListExileConfigurationsRequest): ListExileConfigurationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListExileConfigurationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExileConfigurationsRequest;
  static deserializeBinaryFromReader(message: ListExileConfigurationsRequest, reader: jspb.BinaryReader): ListExileConfigurationsRequest;
}

export namespace ListExileConfigurationsRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListExileConfigurationsResponse extends jspb.Message {
  clearExileConfigurationsList(): void;
  getExileConfigurationsList(): Array<services_org_exile_certificate_manager_v1alpha1_entities_pb.ExileConfiguration>;
  setExileConfigurationsList(value: Array<services_org_exile_certificate_manager_v1alpha1_entities_pb.ExileConfiguration>): void;
  addExileConfigurations(value?: services_org_exile_certificate_manager_v1alpha1_entities_pb.ExileConfiguration, index?: number): services_org_exile_certificate_manager_v1alpha1_entities_pb.ExileConfiguration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExileConfigurationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListExileConfigurationsResponse): ListExileConfigurationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListExileConfigurationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExileConfigurationsResponse;
  static deserializeBinaryFromReader(message: ListExileConfigurationsResponse, reader: jspb.BinaryReader): ListExileConfigurationsResponse;
}

export namespace ListExileConfigurationsResponse {
  export type AsObject = {
    exileConfigurationsList: Array<services_org_exile_certificate_manager_v1alpha1_entities_pb.ExileConfiguration.AsObject>,
  }
}

