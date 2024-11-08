// package: services.org.exile_certificate_manager.v1alpha1
// file: services/org/exile_certificate_manager/v1alpha1/entities.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ExileCertificate extends jspb.Message {
  getExileCertificateId(): string;
  setExileCertificateId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getHash(): string;
  setHash(value: string): void;

  hasExpirationDate(): boolean;
  clearExpirationDate(): void;
  getExpirationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirationDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCreationDate(): boolean;
  clearCreationDate(): void;
  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getRequestBy(): string;
  setRequestBy(value: string): void;

  getRevoked(): boolean;
  setRevoked(value: boolean): void;

  getExileConfigurationId(): string;
  setExileConfigurationId(value: string): void;

  getRenewalInstance(): number;
  setRenewalInstance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExileCertificate.AsObject;
  static toObject(includeInstance: boolean, msg: ExileCertificate): ExileCertificate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExileCertificate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExileCertificate;
  static deserializeBinaryFromReader(message: ExileCertificate, reader: jspb.BinaryReader): ExileCertificate;
}

export namespace ExileCertificate {
  export type AsObject = {
    exileCertificateId: string,
    orgId: string,
    name: string,
    description: string,
    hash: string,
    expirationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    requestBy: string,
    revoked: boolean,
    exileConfigurationId: string,
    renewalInstance: number,
  }
}

export class ExileConfiguration extends jspb.Message {
  getExileConfigurationId(): string;
  setExileConfigurationId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getType(): ExileConfigurationTypeMap[keyof ExileConfigurationTypeMap];
  setType(value: ExileConfigurationTypeMap[keyof ExileConfigurationTypeMap]): void;

  getParameters(): string;
  setParameters(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExileConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: ExileConfiguration): ExileConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExileConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExileConfiguration;
  static deserializeBinaryFromReader(message: ExileConfiguration, reader: jspb.BinaryReader): ExileConfiguration;
}

export namespace ExileConfiguration {
  export type AsObject = {
    exileConfigurationId: string,
    orgId: string,
    name: string,
    description: string,
    type: ExileConfigurationTypeMap[keyof ExileConfigurationTypeMap],
    parameters: string,
  }
}

export interface ExileConfigurationTypeMap {
  EXILE_CONFIGURATION_TYPE_UNSPECIFIED: 0;
  EXILE_CONFIGURATION_TYPE_NONE: 1;
  EXILE_CONFIGURATION_TYPE_ARTIVA_HCX: 2;
  EXILE_CONFIGURATION_TYPE_ARTIVA_RM: 3;
  EXILE_CONFIGURATION_TYPE_FACS: 4;
  EXILE_CONFIGURATION_TYPE_VELOSIDY: 5;
  EXILE_CONFIGURATION_TYPE_LATITUDE_CLASSIC: 6;
  EXILE_CONFIGURATION_TYPE_LATITUDE_LIQUID: 7;
}

export const ExileConfigurationType: ExileConfigurationTypeMap;

