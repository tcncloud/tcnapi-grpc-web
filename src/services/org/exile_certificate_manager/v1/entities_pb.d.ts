// package: services.org.exile_certificate_manager.v1
// file: services/org/exile_certificate_manager/v1/entities.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CertificateInfo extends jspb.Message {
  getCertificateInfoId(): string;
  setCertificateInfoId(value: string): void;

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

  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  getRevoked(): boolean;
  setRevoked(value: boolean): void;

  getConfigurationInfoId(): string;
  setConfigurationInfoId(value: string): void;

  getRenewalInstance(): number;
  setRenewalInstance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CertificateInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CertificateInfo): CertificateInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CertificateInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CertificateInfo;
  static deserializeBinaryFromReader(message: CertificateInfo, reader: jspb.BinaryReader): CertificateInfo;
}

export namespace CertificateInfo {
  export type AsObject = {
    certificateInfoId: string,
    orgId: string,
    name: string,
    description: string,
    hash: string,
    expirationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    requestBy: string,
    deleted: boolean,
    revoked: boolean,
    configurationInfoId: string,
    renewalInstance: number,
  }
}

export class CertificateConfiguration extends jspb.Message {
  getConfigurationInfoId(): string;
  setConfigurationInfoId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getType(): CertificateConfigurationTypeMap[keyof CertificateConfigurationTypeMap];
  setType(value: CertificateConfigurationTypeMap[keyof CertificateConfigurationTypeMap]): void;

  getParameters(): string;
  setParameters(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CertificateConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: CertificateConfiguration): CertificateConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CertificateConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CertificateConfiguration;
  static deserializeBinaryFromReader(message: CertificateConfiguration, reader: jspb.BinaryReader): CertificateConfiguration;
}

export namespace CertificateConfiguration {
  export type AsObject = {
    configurationInfoId: string,
    orgId: string,
    name: string,
    description: string,
    type: CertificateConfigurationTypeMap[keyof CertificateConfigurationTypeMap],
    parameters: string,
  }
}

export interface CertificateConfigurationTypeMap {
  CERTIFICATE_CONFIGURATION_TYPE_UNSPECIFIED: 0;
  CERTIFICATE_CONFIGURATION_TYPE_NONE: 1;
  CERTIFICATE_CONFIGURATION_TYPE_ARTIVA_HCX: 2;
  CERTIFICATE_CONFIGURATION_TYPE_ARTIVA_RM: 3;
  CERTIFICATE_CONFIGURATION_TYPE_FACS: 4;
}

export const CertificateConfigurationType: CertificateConfigurationTypeMap;

