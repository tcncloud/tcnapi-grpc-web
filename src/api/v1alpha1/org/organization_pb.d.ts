// package: api.v1alpha1.org
// file: api/v1alpha1/org/organization.proto

import * as jspb from "google-protobuf";
import * as api_commons_country_pb from "../../../api/commons/country_pb";
import * as api_commons_org_pb from "../../../api/commons/org_pb";
import * as api_commons_org_organization_pb from "../../../api/commons/org/organization_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CreateOrganizationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCrmId(): string;
  setCrmId(value: string): void;

  getTimeZone(): api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap];
  setTimeZone(value: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap]): void;

  getIsManualOnlyAccount(): boolean;
  setIsManualOnlyAccount(value: boolean): void;

  getBackofficeTheme(): api_commons_org_pb.ClientSkinMap[keyof api_commons_org_pb.ClientSkinMap];
  setBackofficeTheme(value: api_commons_org_pb.ClientSkinMap[keyof api_commons_org_pb.ClientSkinMap]): void;

  clearAllowedCountriesList(): void;
  getAllowedCountriesList(): Array<api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]>;
  setAllowedCountriesList(value: Array<api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]>): void;
  addAllowedCountries(value: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap], index?: number): api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap];

  getP3ParentAccount(): string;
  setP3ParentAccount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationRequest): CreateOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationRequest;
  static deserializeBinaryFromReader(message: CreateOrganizationRequest, reader: jspb.BinaryReader): CreateOrganizationRequest;
}

export namespace CreateOrganizationRequest {
  export type AsObject = {
    name: string,
    crmId: string,
    timeZone: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap],
    isManualOnlyAccount: boolean,
    backofficeTheme: api_commons_org_pb.ClientSkinMap[keyof api_commons_org_pb.ClientSkinMap],
    allowedCountriesList: Array<api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]>,
    p3ParentAccount: string,
  }
}

export class CreateOrganizationResponse extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationResponse): CreateOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationResponse;
  static deserializeBinaryFromReader(message: CreateOrganizationResponse, reader: jspb.BinaryReader): CreateOrganizationResponse;
}

export namespace CreateOrganizationResponse {
  export type AsObject = {
    orgId: string,
  }
}

export class GetOrganizationRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationRequest): GetOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationRequest;
  static deserializeBinaryFromReader(message: GetOrganizationRequest, reader: jspb.BinaryReader): GetOrganizationRequest;
}

export namespace GetOrganizationRequest {
  export type AsObject = {
  }
}

export class GetOrganizationResponse extends jspb.Message {
  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): api_commons_org_organization_pb.Organization | undefined;
  setOrganization(value?: api_commons_org_organization_pb.Organization): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationResponse): GetOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationResponse;
  static deserializeBinaryFromReader(message: GetOrganizationResponse, reader: jspb.BinaryReader): GetOrganizationResponse;
}

export namespace GetOrganizationResponse {
  export type AsObject = {
    organization?: api_commons_org_organization_pb.Organization.AsObject,
  }
}

export class GetOrganizationByIdRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationByIdRequest): GetOrganizationByIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationByIdRequest;
  static deserializeBinaryFromReader(message: GetOrganizationByIdRequest, reader: jspb.BinaryReader): GetOrganizationByIdRequest;
}

export namespace GetOrganizationByIdRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class GetOrganizationByIdResponse extends jspb.Message {
  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): api_commons_org_organization_pb.Organization | undefined;
  setOrganization(value?: api_commons_org_organization_pb.Organization): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationByIdResponse): GetOrganizationByIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationByIdResponse;
  static deserializeBinaryFromReader(message: GetOrganizationByIdResponse, reader: jspb.BinaryReader): GetOrganizationByIdResponse;
}

export namespace GetOrganizationByIdResponse {
  export type AsObject = {
    organization?: api_commons_org_organization_pb.Organization.AsObject,
  }
}

export class ListOrganizationsRequest extends jspb.Message {
  hasGlobal(): boolean;
  clearGlobal(): void;
  getGlobal(): boolean;
  setGlobal(value: boolean): void;

  hasRegionId(): boolean;
  clearRegionId(): void;
  getRegionId(): string;
  setRegionId(value: string): void;

  getArchived(): boolean;
  setArchived(value: boolean): void;

  getIdentifierCase(): ListOrganizationsRequest.IdentifierCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationsRequest): ListOrganizationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrganizationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationsRequest;
  static deserializeBinaryFromReader(message: ListOrganizationsRequest, reader: jspb.BinaryReader): ListOrganizationsRequest;
}

export namespace ListOrganizationsRequest {
  export type AsObject = {
    global: boolean,
    regionId: string,
    archived: boolean,
  }

  export enum IdentifierCase {
    IDENTIFIER_NOT_SET = 0,
    GLOBAL = 1,
    REGION_ID = 2,
  }
}

export class ListOrganizationsResponse extends jspb.Message {
  clearOrganizationDetailsList(): void;
  getOrganizationDetailsList(): Array<OrganizationDetails>;
  setOrganizationDetailsList(value: Array<OrganizationDetails>): void;
  addOrganizationDetails(value?: OrganizationDetails, index?: number): OrganizationDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationsResponse): ListOrganizationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrganizationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationsResponse;
  static deserializeBinaryFromReader(message: ListOrganizationsResponse, reader: jspb.BinaryReader): ListOrganizationsResponse;
}

export namespace ListOrganizationsResponse {
  export type AsObject = {
    organizationDetailsList: Array<OrganizationDetails.AsObject>,
  }
}

export class OrganizationDetails extends jspb.Message {
  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): api_commons_org_organization_pb.Organization | undefined;
  setOrganization(value?: api_commons_org_organization_pb.Organization): void;

  hasLastScheduledDate(): boolean;
  clearLastScheduledDate(): void;
  getLastScheduledDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastScheduledDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationDetails.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationDetails): OrganizationDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationDetails;
  static deserializeBinaryFromReader(message: OrganizationDetails, reader: jspb.BinaryReader): OrganizationDetails;
}

export namespace OrganizationDetails {
  export type AsObject = {
    organization?: api_commons_org_organization_pb.Organization.AsObject,
    lastScheduledDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ConvertOrgToManualRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConvertOrgToManualRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConvertOrgToManualRequest): ConvertOrgToManualRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConvertOrgToManualRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConvertOrgToManualRequest;
  static deserializeBinaryFromReader(message: ConvertOrgToManualRequest, reader: jspb.BinaryReader): ConvertOrgToManualRequest;
}

export namespace ConvertOrgToManualRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class ConvertOrgToManualResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConvertOrgToManualResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConvertOrgToManualResponse): ConvertOrgToManualResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConvertOrgToManualResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConvertOrgToManualResponse;
  static deserializeBinaryFromReader(message: ConvertOrgToManualResponse, reader: jspb.BinaryReader): ConvertOrgToManualResponse;
}

export namespace ConvertOrgToManualResponse {
  export type AsObject = {
  }
}

export class ListOwnedOrgsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOwnedOrgsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOwnedOrgsRequest): ListOwnedOrgsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOwnedOrgsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOwnedOrgsRequest;
  static deserializeBinaryFromReader(message: ListOwnedOrgsRequest, reader: jspb.BinaryReader): ListOwnedOrgsRequest;
}

export namespace ListOwnedOrgsRequest {
  export type AsObject = {
  }
}

export class ListOwnedOrgsResponse extends jspb.Message {
  clearOrganizationDetailsList(): void;
  getOrganizationDetailsList(): Array<OrganizationDetails>;
  setOrganizationDetailsList(value: Array<OrganizationDetails>): void;
  addOrganizationDetails(value?: OrganizationDetails, index?: number): OrganizationDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOwnedOrgsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOwnedOrgsResponse): ListOwnedOrgsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOwnedOrgsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOwnedOrgsResponse;
  static deserializeBinaryFromReader(message: ListOwnedOrgsResponse, reader: jspb.BinaryReader): ListOwnedOrgsResponse;
}

export namespace ListOwnedOrgsResponse {
  export type AsObject = {
    organizationDetailsList: Array<OrganizationDetails.AsObject>,
  }
}

export class UpdateOrganizationRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getTimeZone(): api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap];
  setTimeZone(value: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap]): void;

  getBillingId(): string;
  setBillingId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getP3OwnerId(): string;
  setP3OwnerId(value: string): void;

  getArchived(): boolean;
  setArchived(value: boolean): void;

  clearFieldMaskList(): void;
  getFieldMaskList(): Array<string>;
  setFieldMaskList(value: Array<string>): void;
  addFieldMask(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationRequest): UpdateOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationRequest;
  static deserializeBinaryFromReader(message: UpdateOrganizationRequest, reader: jspb.BinaryReader): UpdateOrganizationRequest;
}

export namespace UpdateOrganizationRequest {
  export type AsObject = {
    orgId: string,
    timeZone: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap],
    billingId: string,
    name: string,
    p3OwnerId: string,
    archived: boolean,
    fieldMaskList: Array<string>,
  }
}

export class UpdateOrganizationResponse extends jspb.Message {
  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): api_commons_org_organization_pb.Organization | undefined;
  setOrganization(value?: api_commons_org_organization_pb.Organization): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationResponse): UpdateOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationResponse;
  static deserializeBinaryFromReader(message: UpdateOrganizationResponse, reader: jspb.BinaryReader): UpdateOrganizationResponse;
}

export namespace UpdateOrganizationResponse {
  export type AsObject = {
    organization?: api_commons_org_organization_pb.Organization.AsObject,
  }
}

export class ArchiveOrganizationRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveOrganizationRequest): ArchiveOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchiveOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveOrganizationRequest;
  static deserializeBinaryFromReader(message: ArchiveOrganizationRequest, reader: jspb.BinaryReader): ArchiveOrganizationRequest;
}

export namespace ArchiveOrganizationRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class ArchiveOrganizationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveOrganizationResponse): ArchiveOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchiveOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveOrganizationResponse;
  static deserializeBinaryFromReader(message: ArchiveOrganizationResponse, reader: jspb.BinaryReader): ArchiveOrganizationResponse;
}

export namespace ArchiveOrganizationResponse {
  export type AsObject = {
  }
}

export class UnArchiveOrganizationRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnArchiveOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnArchiveOrganizationRequest): UnArchiveOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnArchiveOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnArchiveOrganizationRequest;
  static deserializeBinaryFromReader(message: UnArchiveOrganizationRequest, reader: jspb.BinaryReader): UnArchiveOrganizationRequest;
}

export namespace UnArchiveOrganizationRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class UnArchiveOrganizationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnArchiveOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnArchiveOrganizationResponse): UnArchiveOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnArchiveOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnArchiveOrganizationResponse;
  static deserializeBinaryFromReader(message: UnArchiveOrganizationResponse, reader: jspb.BinaryReader): UnArchiveOrganizationResponse;
}

export namespace UnArchiveOrganizationResponse {
  export type AsObject = {
  }
}

export class ListAllOrganizationsGloballyRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllOrganizationsGloballyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllOrganizationsGloballyRequest): ListAllOrganizationsGloballyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAllOrganizationsGloballyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllOrganizationsGloballyRequest;
  static deserializeBinaryFromReader(message: ListAllOrganizationsGloballyRequest, reader: jspb.BinaryReader): ListAllOrganizationsGloballyRequest;
}

export namespace ListAllOrganizationsGloballyRequest {
  export type AsObject = {
  }
}

export class ListAllOrganizationsGloballyResponse extends jspb.Message {
  clearOrganizationDetailsList(): void;
  getOrganizationDetailsList(): Array<ListAllOrganizationsGloballyResponse.OrganizationDetails>;
  setOrganizationDetailsList(value: Array<ListAllOrganizationsGloballyResponse.OrganizationDetails>): void;
  addOrganizationDetails(value?: ListAllOrganizationsGloballyResponse.OrganizationDetails, index?: number): ListAllOrganizationsGloballyResponse.OrganizationDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllOrganizationsGloballyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllOrganizationsGloballyResponse): ListAllOrganizationsGloballyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAllOrganizationsGloballyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllOrganizationsGloballyResponse;
  static deserializeBinaryFromReader(message: ListAllOrganizationsGloballyResponse, reader: jspb.BinaryReader): ListAllOrganizationsGloballyResponse;
}

export namespace ListAllOrganizationsGloballyResponse {
  export type AsObject = {
    organizationDetailsList: Array<ListAllOrganizationsGloballyResponse.OrganizationDetails.AsObject>,
  }

  export class OrganizationDetails extends jspb.Message {
    getOrgId(): string;
    setOrgId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getClientSid(): number;
    setClientSid(value: number): void;

    getBillingId(): string;
    setBillingId(value: string): void;

    getRegionId(): string;
    setRegionId(value: string): void;

    hasAddDate(): boolean;
    clearAddDate(): void;
    getAddDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setAddDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasLastScheduledDate(): boolean;
    clearLastScheduledDate(): void;
    getLastScheduledDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastScheduledDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getArchived(): boolean;
    setArchived(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrganizationDetails.AsObject;
    static toObject(includeInstance: boolean, msg: OrganizationDetails): OrganizationDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrganizationDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrganizationDetails;
    static deserializeBinaryFromReader(message: OrganizationDetails, reader: jspb.BinaryReader): OrganizationDetails;
  }

  export namespace OrganizationDetails {
    export type AsObject = {
      orgId: string,
      name: string,
      clientSid: number,
      billingId: string,
      regionId: string,
      addDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      lastScheduledDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      archived: boolean,
    }
  }
}

export class ListOrganizationsByRegionRequest extends jspb.Message {
  getRegionId(): string;
  setRegionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationsByRegionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationsByRegionRequest): ListOrganizationsByRegionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrganizationsByRegionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationsByRegionRequest;
  static deserializeBinaryFromReader(message: ListOrganizationsByRegionRequest, reader: jspb.BinaryReader): ListOrganizationsByRegionRequest;
}

export namespace ListOrganizationsByRegionRequest {
  export type AsObject = {
    regionId: string,
  }
}

export class ListOrganizationsByRegionResponse extends jspb.Message {
  clearOrganizationDetailsList(): void;
  getOrganizationDetailsList(): Array<ListOrganizationsByRegionResponse.OrganizationDetails>;
  setOrganizationDetailsList(value: Array<ListOrganizationsByRegionResponse.OrganizationDetails>): void;
  addOrganizationDetails(value?: ListOrganizationsByRegionResponse.OrganizationDetails, index?: number): ListOrganizationsByRegionResponse.OrganizationDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationsByRegionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationsByRegionResponse): ListOrganizationsByRegionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrganizationsByRegionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationsByRegionResponse;
  static deserializeBinaryFromReader(message: ListOrganizationsByRegionResponse, reader: jspb.BinaryReader): ListOrganizationsByRegionResponse;
}

export namespace ListOrganizationsByRegionResponse {
  export type AsObject = {
    organizationDetailsList: Array<ListOrganizationsByRegionResponse.OrganizationDetails.AsObject>,
  }

  export class OrganizationDetails extends jspb.Message {
    getOrgId(): string;
    setOrgId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getClientSid(): number;
    setClientSid(value: number): void;

    getBillingId(): string;
    setBillingId(value: string): void;

    getRegionId(): string;
    setRegionId(value: string): void;

    hasAddDate(): boolean;
    clearAddDate(): void;
    getAddDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setAddDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasLastScheduledDate(): boolean;
    clearLastScheduledDate(): void;
    getLastScheduledDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastScheduledDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrganizationDetails.AsObject;
    static toObject(includeInstance: boolean, msg: OrganizationDetails): OrganizationDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrganizationDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrganizationDetails;
    static deserializeBinaryFromReader(message: OrganizationDetails, reader: jspb.BinaryReader): OrganizationDetails;
  }

  export namespace OrganizationDetails {
    export type AsObject = {
      orgId: string,
      name: string,
      clientSid: number,
      billingId: string,
      regionId: string,
      addDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      lastScheduledDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }
}

export class ListArchivedOrganizationsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListArchivedOrganizationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListArchivedOrganizationsRequest): ListArchivedOrganizationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListArchivedOrganizationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListArchivedOrganizationsRequest;
  static deserializeBinaryFromReader(message: ListArchivedOrganizationsRequest, reader: jspb.BinaryReader): ListArchivedOrganizationsRequest;
}

export namespace ListArchivedOrganizationsRequest {
  export type AsObject = {
  }
}

export class ListArchivedOrganizationsResponse extends jspb.Message {
  clearOrganizationDetailsList(): void;
  getOrganizationDetailsList(): Array<ListArchivedOrganizationsResponse.OrganizationDetails>;
  setOrganizationDetailsList(value: Array<ListArchivedOrganizationsResponse.OrganizationDetails>): void;
  addOrganizationDetails(value?: ListArchivedOrganizationsResponse.OrganizationDetails, index?: number): ListArchivedOrganizationsResponse.OrganizationDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListArchivedOrganizationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListArchivedOrganizationsResponse): ListArchivedOrganizationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListArchivedOrganizationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListArchivedOrganizationsResponse;
  static deserializeBinaryFromReader(message: ListArchivedOrganizationsResponse, reader: jspb.BinaryReader): ListArchivedOrganizationsResponse;
}

export namespace ListArchivedOrganizationsResponse {
  export type AsObject = {
    organizationDetailsList: Array<ListArchivedOrganizationsResponse.OrganizationDetails.AsObject>,
  }

  export class OrganizationDetails extends jspb.Message {
    getOrgId(): string;
    setOrgId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getBillingId(): string;
    setBillingId(value: string): void;

    hasAddDate(): boolean;
    clearAddDate(): void;
    getAddDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setAddDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasLastScheduledDate(): boolean;
    clearLastScheduledDate(): void;
    getLastScheduledDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastScheduledDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrganizationDetails.AsObject;
    static toObject(includeInstance: boolean, msg: OrganizationDetails): OrganizationDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrganizationDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrganizationDetails;
    static deserializeBinaryFromReader(message: OrganizationDetails, reader: jspb.BinaryReader): OrganizationDetails;
  }

  export namespace OrganizationDetails {
    export type AsObject = {
      orgId: string,
      name: string,
      billingId: string,
      addDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      lastScheduledDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }
}

