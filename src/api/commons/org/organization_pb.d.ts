// package: api.commons.org
// file: api/commons/org/organization.proto

import * as jspb from "google-protobuf";
import * as api_commons_org_pb from "../../../api/commons/org_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Organization extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getEnabledRegionsMap(): jspb.Map<string, number>;
  clearEnabledRegionsMap(): void;
  getRegionId(): string;
  setRegionId(value: string): void;

  getBillingId(): string;
  setBillingId(value: string): void;

  getClientSid(): number;
  setClientSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasAddDate(): boolean;
  clearAddDate(): void;
  getAddDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAddDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIsManualOnlyAccount(): boolean;
  setIsManualOnlyAccount(value: boolean): void;

  getBackofficeTheme(): api_commons_org_pb.ClientSkinMap[keyof api_commons_org_pb.ClientSkinMap];
  setBackofficeTheme(value: api_commons_org_pb.ClientSkinMap[keyof api_commons_org_pb.ClientSkinMap]): void;

  getArchived(): boolean;
  setArchived(value: boolean): void;

  getCrmId(): string;
  setCrmId(value: string): void;

  getTimeZone(): api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap];
  setTimeZone(value: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap]): void;

  getCallbacksServiceId(): string;
  setCallbacksServiceId(value: string): void;

  getP3OwnerId(): string;
  setP3OwnerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Organization.AsObject;
  static toObject(includeInstance: boolean, msg: Organization): Organization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Organization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Organization;
  static deserializeBinaryFromReader(message: Organization, reader: jspb.BinaryReader): Organization;
}

export namespace Organization {
  export type AsObject = {
    orgId: string,
    enabledRegionsMap: Array<[string, number]>,
    regionId: string,
    billingId: string,
    clientSid: number,
    name: string,
    addDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isManualOnlyAccount: boolean,
    backofficeTheme: api_commons_org_pb.ClientSkinMap[keyof api_commons_org_pb.ClientSkinMap],
    archived: boolean,
    crmId: string,
    timeZone: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap],
    callbacksServiceId: string,
    p3OwnerId: string,
  }
}

export class OrganizationDetails extends jspb.Message {
  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): Organization | undefined;
  setOrganization(value?: Organization): void;

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
    organization?: Organization.AsObject,
    lastScheduledDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

