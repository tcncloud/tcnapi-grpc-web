// package: api.v0alpha
// file: api/v0alpha/org.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../annotations/authz_pb";
import * as api_commons_ana_pb from "../../api/commons/ana_pb";
import * as api_commons_audit_event_types_pb from "../../api/commons/audit/event_types_pb";
import * as api_commons_auth_perms_pb from "../../api/commons/auth/perms_pb";
import * as api_commons_country_pb from "../../api/commons/country_pb";
import * as api_commons_lms_pb from "../../api/commons/lms_pb";
import * as api_commons_logging_pb from "../../api/commons/logging_pb";
import * as api_commons_notifications_pb from "../../api/commons/notifications_pb";
import * as api_commons_omnichannel_pb from "../../api/commons/omnichannel_pb";
import * as api_commons_org_pb from "../../api/commons/org_pb";
import * as api_commons_org_agent_profile_group_pb from "../../api/commons/org/agent_profile_group_pb";
import * as api_commons_org_trusts_pb from "../../api/commons/org/trusts_pb";
import * as api_commons_org_preferences_pb from "../../api/commons/org_preferences_pb";
import * as api_commons_perms_pb from "../../api/commons/perms_pb";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class GetAgentQuickViewPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentQuickViewPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentQuickViewPreferencesRequest): GetAgentQuickViewPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentQuickViewPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentQuickViewPreferencesRequest;
  static deserializeBinaryFromReader(message: GetAgentQuickViewPreferencesRequest, reader: jspb.BinaryReader): GetAgentQuickViewPreferencesRequest;
}

export namespace GetAgentQuickViewPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetAgentQuickViewPreferencesResponse extends jspb.Message {
  hasAgentStatusDisplayTemplate(): boolean;
  clearAgentStatusDisplayTemplate(): void;
  getAgentStatusDisplayTemplate(): AgentStatusDisplayTemplate | undefined;
  setAgentStatusDisplayTemplate(value?: AgentStatusDisplayTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentQuickViewPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentQuickViewPreferencesResponse): GetAgentQuickViewPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentQuickViewPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentQuickViewPreferencesResponse;
  static deserializeBinaryFromReader(message: GetAgentQuickViewPreferencesResponse, reader: jspb.BinaryReader): GetAgentQuickViewPreferencesResponse;
}

export namespace GetAgentQuickViewPreferencesResponse {
  export type AsObject = {
    agentStatusDisplayTemplate?: AgentStatusDisplayTemplate.AsObject,
  }
}

export class EditAgentQuickViewPreferencesRequest extends jspb.Message {
  hasAgentStatusDisplayTemplate(): boolean;
  clearAgentStatusDisplayTemplate(): void;
  getAgentStatusDisplayTemplate(): AgentStatusDisplayTemplate | undefined;
  setAgentStatusDisplayTemplate(value?: AgentStatusDisplayTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditAgentQuickViewPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditAgentQuickViewPreferencesRequest): EditAgentQuickViewPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditAgentQuickViewPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditAgentQuickViewPreferencesRequest;
  static deserializeBinaryFromReader(message: EditAgentQuickViewPreferencesRequest, reader: jspb.BinaryReader): EditAgentQuickViewPreferencesRequest;
}

export namespace EditAgentQuickViewPreferencesRequest {
  export type AsObject = {
    agentStatusDisplayTemplate?: AgentStatusDisplayTemplate.AsObject,
  }
}

export class EditAgentQuickViewPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditAgentQuickViewPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EditAgentQuickViewPreferencesResponse): EditAgentQuickViewPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditAgentQuickViewPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditAgentQuickViewPreferencesResponse;
  static deserializeBinaryFromReader(message: EditAgentQuickViewPreferencesResponse, reader: jspb.BinaryReader): EditAgentQuickViewPreferencesResponse;
}

export namespace EditAgentQuickViewPreferencesResponse {
  export type AsObject = {
  }
}

export class AgentStatusDisplayTemplate extends jspb.Message {
  clearReadyStylesList(): void;
  getReadyStylesList(): Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>;
  setReadyStylesList(value: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>): void;
  addReadyStyles(value?: AgentStatusDisplayTemplate.AgentStatusSinceStyle, index?: number): AgentStatusDisplayTemplate.AgentStatusSinceStyle;

  clearInConferenceStylesList(): void;
  getInConferenceStylesList(): Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>;
  setInConferenceStylesList(value: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>): void;
  addInConferenceStyles(value?: AgentStatusDisplayTemplate.AgentStatusSinceStyle, index?: number): AgentStatusDisplayTemplate.AgentStatusSinceStyle;

  clearWrapUpStylesList(): void;
  getWrapUpStylesList(): Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>;
  setWrapUpStylesList(value: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>): void;
  addWrapUpStyles(value?: AgentStatusDisplayTemplate.AgentStatusSinceStyle, index?: number): AgentStatusDisplayTemplate.AgentStatusSinceStyle;

  clearPausedStylesList(): void;
  getPausedStylesList(): Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>;
  setPausedStylesList(value: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>): void;
  addPausedStyles(value?: AgentStatusDisplayTemplate.AgentStatusSinceStyle, index?: number): AgentStatusDisplayTemplate.AgentStatusSinceStyle;

  clearTransferCallStylesList(): void;
  getTransferCallStylesList(): Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>;
  setTransferCallStylesList(value: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>): void;
  addTransferCallStyles(value?: AgentStatusDisplayTemplate.AgentStatusSinceStyle, index?: number): AgentStatusDisplayTemplate.AgentStatusSinceStyle;

  clearPreviewCallStylesList(): void;
  getPreviewCallStylesList(): Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>;
  setPreviewCallStylesList(value: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>): void;
  addPreviewCallStyles(value?: AgentStatusDisplayTemplate.AgentStatusSinceStyle, index?: number): AgentStatusDisplayTemplate.AgentStatusSinceStyle;

  clearManualCallStylesList(): void;
  getManualCallStylesList(): Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>;
  setManualCallStylesList(value: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>): void;
  addManualCallStyles(value?: AgentStatusDisplayTemplate.AgentStatusSinceStyle, index?: number): AgentStatusDisplayTemplate.AgentStatusSinceStyle;

  clearPbxCallStylesList(): void;
  getPbxCallStylesList(): Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>;
  setPbxCallStylesList(value: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>): void;
  addPbxCallStyles(value?: AgentStatusDisplayTemplate.AgentStatusSinceStyle, index?: number): AgentStatusDisplayTemplate.AgentStatusSinceStyle;

  clearAgentIntercomStylesList(): void;
  getAgentIntercomStylesList(): Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>;
  setAgentIntercomStylesList(value: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>): void;
  addAgentIntercomStyles(value?: AgentStatusDisplayTemplate.AgentStatusSinceStyle, index?: number): AgentStatusDisplayTemplate.AgentStatusSinceStyle;

  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  clearCallConnectingStylesList(): void;
  getCallConnectingStylesList(): Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>;
  setCallConnectingStylesList(value: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>): void;
  addCallConnectingStyles(value?: AgentStatusDisplayTemplate.AgentStatusSinceStyle, index?: number): AgentStatusDisplayTemplate.AgentStatusSinceStyle;

  clearIntercomSourceStylesList(): void;
  getIntercomSourceStylesList(): Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>;
  setIntercomSourceStylesList(value: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>): void;
  addIntercomSourceStyles(value?: AgentStatusDisplayTemplate.AgentStatusSinceStyle, index?: number): AgentStatusDisplayTemplate.AgentStatusSinceStyle;

  clearIntercomDestinationStylesList(): void;
  getIntercomDestinationStylesList(): Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>;
  setIntercomDestinationStylesList(value: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>): void;
  addIntercomDestinationStyles(value?: AgentStatusDisplayTemplate.AgentStatusSinceStyle, index?: number): AgentStatusDisplayTemplate.AgentStatusSinceStyle;

  clearTransferLostStylesList(): void;
  getTransferLostStylesList(): Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>;
  setTransferLostStylesList(value: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle>): void;
  addTransferLostStyles(value?: AgentStatusDisplayTemplate.AgentStatusSinceStyle, index?: number): AgentStatusDisplayTemplate.AgentStatusSinceStyle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentStatusDisplayTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: AgentStatusDisplayTemplate): AgentStatusDisplayTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentStatusDisplayTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentStatusDisplayTemplate;
  static deserializeBinaryFromReader(message: AgentStatusDisplayTemplate, reader: jspb.BinaryReader): AgentStatusDisplayTemplate;
}

export namespace AgentStatusDisplayTemplate {
  export type AsObject = {
    readyStylesList: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle.AsObject>,
    inConferenceStylesList: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle.AsObject>,
    wrapUpStylesList: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle.AsObject>,
    pausedStylesList: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle.AsObject>,
    transferCallStylesList: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle.AsObject>,
    previewCallStylesList: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle.AsObject>,
    manualCallStylesList: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle.AsObject>,
    pbxCallStylesList: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle.AsObject>,
    agentIntercomStylesList: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle.AsObject>,
    xmlClientPropertySid: number,
    callConnectingStylesList: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle.AsObject>,
    intercomSourceStylesList: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle.AsObject>,
    intercomDestinationStylesList: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle.AsObject>,
    transferLostStylesList: Array<AgentStatusDisplayTemplate.AgentStatusSinceStyle.AsObject>,
  }

  export class AgentStatusSinceStyle extends jspb.Message {
    getBgRed(): string;
    setBgRed(value: string): void;

    getBgGreen(): string;
    setBgGreen(value: string): void;

    getBgBlue(): string;
    setBgBlue(value: string): void;

    getFgRed(): string;
    setFgRed(value: string): void;

    getFgGreen(): string;
    setFgGreen(value: string): void;

    getFgBlue(): string;
    setFgBlue(value: string): void;

    getAgentGuiStatus(): number;
    setAgentGuiStatus(value: number): void;

    getDurationInStatus(): number;
    setDurationInStatus(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentStatusSinceStyle.AsObject;
    static toObject(includeInstance: boolean, msg: AgentStatusSinceStyle): AgentStatusSinceStyle.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentStatusSinceStyle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentStatusSinceStyle;
    static deserializeBinaryFromReader(message: AgentStatusSinceStyle, reader: jspb.BinaryReader): AgentStatusSinceStyle;
  }

  export namespace AgentStatusSinceStyle {
    export type AsObject = {
      bgRed: string,
      bgGreen: string,
      bgBlue: string,
      fgRed: string,
      fgGreen: string,
      fgBlue: string,
      agentGuiStatus: number,
      durationInStatus: number,
    }
  }
}

export class LocationDescription extends jspb.Message {
  getLocationName(): string;
  setLocationName(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getZip(): string;
  setZip(value: string): void;

  getState(): string;
  setState(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getFax(): string;
  setFax(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getContactFirstName(): string;
  setContactFirstName(value: string): void;

  getContactLastName(): string;
  setContactLastName(value: string): void;

  getCompanyName(): string;
  setCompanyName(value: string): void;

  getCity(): string;
  setCity(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationDescription.AsObject;
  static toObject(includeInstance: boolean, msg: LocationDescription): LocationDescription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationDescription;
  static deserializeBinaryFromReader(message: LocationDescription, reader: jspb.BinaryReader): LocationDescription;
}

export namespace LocationDescription {
  export type AsObject = {
    locationName: string,
    address: string,
    zip: string,
    state: string,
    phone: string,
    fax: string,
    email: string,
    contactFirstName: string,
    contactLastName: string,
    companyName: string,
    city: string,
    country: string,
  }
}

export class GetOrganizationProfileRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationProfileRequest): GetOrganizationProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationProfileRequest;
  static deserializeBinaryFromReader(message: GetOrganizationProfileRequest, reader: jspb.BinaryReader): GetOrganizationProfileRequest;
}

export namespace GetOrganizationProfileRequest {
  export type AsObject = {
  }
}

export class GetOrganizationProfileResponse extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getIsManualOnlyAccount(): boolean;
  setIsManualOnlyAccount(value: boolean): void;

  getRegionId(): string;
  setRegionId(value: string): void;

  getCrmId(): string;
  setCrmId(value: string): void;

  getBillingId(): string;
  setBillingId(value: string): void;

  getTimezone(): api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap];
  setTimezone(value: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap]): void;

  hasAddDate(): boolean;
  clearAddDate(): void;
  getAddDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAddDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAllowedRegionsMap(): jspb.Map<string, RegionUrls>;
  clearAllowedRegionsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationProfileResponse): GetOrganizationProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationProfileResponse;
  static deserializeBinaryFromReader(message: GetOrganizationProfileResponse, reader: jspb.BinaryReader): GetOrganizationProfileResponse;
}

export namespace GetOrganizationProfileResponse {
  export type AsObject = {
    orgId: string,
    name: string,
    isManualOnlyAccount: boolean,
    regionId: string,
    crmId: string,
    billingId: string,
    timezone: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap],
    addDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    allowedRegionsMap: Array<[string, RegionUrls.AsObject]>,
  }
}

export class RegionUrls extends jspb.Message {
  clearApiEndpointsList(): void;
  getApiEndpointsList(): Array<string>;
  setApiEndpointsList(value: Array<string>): void;
  addApiEndpoints(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegionUrls.AsObject;
  static toObject(includeInstance: boolean, msg: RegionUrls): RegionUrls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegionUrls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegionUrls;
  static deserializeBinaryFromReader(message: RegionUrls, reader: jspb.BinaryReader): RegionUrls;
}

export namespace RegionUrls {
  export type AsObject = {
    apiEndpointsList: Array<string>,
  }
}

export class GetOrganizationProfileByIdRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationProfileByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationProfileByIdRequest): GetOrganizationProfileByIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationProfileByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationProfileByIdRequest;
  static deserializeBinaryFromReader(message: GetOrganizationProfileByIdRequest, reader: jspb.BinaryReader): GetOrganizationProfileByIdRequest;
}

export namespace GetOrganizationProfileByIdRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class ListOrganizationDescriptionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationDescriptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationDescriptionsRequest): ListOrganizationDescriptionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrganizationDescriptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationDescriptionsRequest;
  static deserializeBinaryFromReader(message: ListOrganizationDescriptionsRequest, reader: jspb.BinaryReader): ListOrganizationDescriptionsRequest;
}

export namespace ListOrganizationDescriptionsRequest {
  export type AsObject = {
  }
}

export class OrganizationDescription extends jspb.Message {
  getBillingId(): string;
  setBillingId(value: string): void;

  hasAddDate(): boolean;
  clearAddDate(): void;
  getAddDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAddDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getClientSid(): number;
  setClientSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getRegionId(): string;
  setRegionId(value: string): void;

  hasLastScheduledDate(): boolean;
  clearLastScheduledDate(): void;
  getLastScheduledDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastScheduledDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationDescription.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationDescription): OrganizationDescription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationDescription;
  static deserializeBinaryFromReader(message: OrganizationDescription, reader: jspb.BinaryReader): OrganizationDescription;
}

export namespace OrganizationDescription {
  export type AsObject = {
    billingId: string,
    addDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    clientSid: number,
    name: string,
    orgId: string,
    regionId: string,
    lastScheduledDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListOrganizationDescriptionsResponse extends jspb.Message {
  clearOrganizationDescriptionsList(): void;
  getOrganizationDescriptionsList(): Array<OrganizationDescription>;
  setOrganizationDescriptionsList(value: Array<OrganizationDescription>): void;
  addOrganizationDescriptions(value?: OrganizationDescription, index?: number): OrganizationDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationDescriptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationDescriptionsResponse): ListOrganizationDescriptionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrganizationDescriptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationDescriptionsResponse;
  static deserializeBinaryFromReader(message: ListOrganizationDescriptionsResponse, reader: jspb.BinaryReader): ListOrganizationDescriptionsResponse;
}

export namespace ListOrganizationDescriptionsResponse {
  export type AsObject = {
    organizationDescriptionsList: Array<OrganizationDescription.AsObject>,
  }
}

export class UserDescription extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getUserName(): string;
  setUserName(value: string): void;

  getLoginDisabled(): boolean;
  setLoginDisabled(value: boolean): void;

  getAccountOwner(): boolean;
  setAccountOwner(value: boolean): void;

  getOrgName(): string;
  setOrgName(value: string): void;

  getOrgBillingId(): string;
  setOrgBillingId(value: string): void;

  clearLinkbackNumbersList(): void;
  getLinkbackNumbersList(): Array<string>;
  setLinkbackNumbersList(value: Array<string>): void;
  addLinkbackNumbers(value: string, index?: number): string;

  clearCallerIdsList(): void;
  getCallerIdsList(): Array<string>;
  setCallerIdsList(value: Array<string>): void;
  addCallerIds(value: string, index?: number): string;

  getLoginSid(): number;
  setLoginSid(value: number): void;

  clearPermissionGroupsList(): void;
  getPermissionGroupsList(): Array<PermissionGroup>;
  setPermissionGroupsList(value: Array<PermissionGroup>): void;
  addPermissionGroups(value?: PermissionGroup, index?: number): PermissionGroup;

  getAgentSid(): number;
  setAgentSid(value: number): void;

  getAgentProfileGroupId(): string;
  setAgentProfileGroupId(value: string): void;

  getAgentProfileGroupName(): string;
  setAgentProfileGroupName(value: string): void;

  getP3PermissionGroupId(): string;
  setP3PermissionGroupId(value: string): void;

  getP3PermissionGroupName(): string;
  setP3PermissionGroupName(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getStrikeCount(): number;
  setStrikeCount(value: number): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearLabelEntitiesList(): void;
  getLabelEntitiesList(): Array<Label>;
  setLabelEntitiesList(value: Array<Label>): void;
  addLabelEntities(value?: Label, index?: number): Label;

  getDelegated(): boolean;
  setDelegated(value: boolean): void;

  hasTimeZoneOverride(): boolean;
  clearTimeZoneOverride(): void;
  getTimeZoneOverride(): api_commons_org_pb.TimeZoneWrapper | undefined;
  setTimeZoneOverride(value?: api_commons_org_pb.TimeZoneWrapper): void;

  getEmail(): string;
  setEmail(value: string): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getHuntGroupName(): string;
  setHuntGroupName(value: string): void;

  clearTrustsList(): void;
  getTrustsList(): Array<api_commons_org_trusts_pb.Trust>;
  setTrustsList(value: Array<api_commons_org_trusts_pb.Trust>): void;
  addTrusts(value?: api_commons_org_trusts_pb.Trust, index?: number): api_commons_org_trusts_pb.Trust;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDescription.AsObject;
  static toObject(includeInstance: boolean, msg: UserDescription): UserDescription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDescription;
  static deserializeBinaryFromReader(message: UserDescription, reader: jspb.BinaryReader): UserDescription;
}

export namespace UserDescription {
  export type AsObject = {
    userId: string,
    orgId: string,
    userName: string,
    loginDisabled: boolean,
    accountOwner: boolean,
    orgName: string,
    orgBillingId: string,
    linkbackNumbersList: Array<string>,
    callerIdsList: Array<string>,
    loginSid: number,
    permissionGroupsList: Array<PermissionGroup.AsObject>,
    agentSid: number,
    agentProfileGroupId: string,
    agentProfileGroupName: string,
    p3PermissionGroupId: string,
    p3PermissionGroupName: string,
    firstName: string,
    lastName: string,
    strikeCount: number,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    labelEntitiesList: Array<Label.AsObject>,
    delegated: boolean,
    timeZoneOverride?: api_commons_org_pb.TimeZoneWrapper.AsObject,
    email: string,
    huntGroupSid: number,
    huntGroupName: string,
    trustsList: Array<api_commons_org_trusts_pb.Trust.AsObject>,
  }
}

export class ListOrganizationUserDescriptionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationUserDescriptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationUserDescriptionsRequest): ListOrganizationUserDescriptionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrganizationUserDescriptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationUserDescriptionsRequest;
  static deserializeBinaryFromReader(message: ListOrganizationUserDescriptionsRequest, reader: jspb.BinaryReader): ListOrganizationUserDescriptionsRequest;
}

export namespace ListOrganizationUserDescriptionsRequest {
  export type AsObject = {
  }
}

export class ListOrganizationUserDescriptionsResponse extends jspb.Message {
  clearUserDescriptionsList(): void;
  getUserDescriptionsList(): Array<UserDescription>;
  setUserDescriptionsList(value: Array<UserDescription>): void;
  addUserDescriptions(value?: UserDescription, index?: number): UserDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationUserDescriptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationUserDescriptionsResponse): ListOrganizationUserDescriptionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrganizationUserDescriptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationUserDescriptionsResponse;
  static deserializeBinaryFromReader(message: ListOrganizationUserDescriptionsResponse, reader: jspb.BinaryReader): ListOrganizationUserDescriptionsResponse;
}

export namespace ListOrganizationUserDescriptionsResponse {
  export type AsObject = {
    userDescriptionsList: Array<UserDescription.AsObject>,
  }
}

export class ListRegionalOrganizationsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRegionalOrganizationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRegionalOrganizationsRequest): ListRegionalOrganizationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRegionalOrganizationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRegionalOrganizationsRequest;
  static deserializeBinaryFromReader(message: ListRegionalOrganizationsRequest, reader: jspb.BinaryReader): ListRegionalOrganizationsRequest;
}

export namespace ListRegionalOrganizationsRequest {
  export type AsObject = {
  }
}

export class ListRegionalOrganizationsResponse extends jspb.Message {
  clearOrganizationDescriptionsList(): void;
  getOrganizationDescriptionsList(): Array<OrganizationDescription>;
  setOrganizationDescriptionsList(value: Array<OrganizationDescription>): void;
  addOrganizationDescriptions(value?: OrganizationDescription, index?: number): OrganizationDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRegionalOrganizationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRegionalOrganizationsResponse): ListRegionalOrganizationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRegionalOrganizationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRegionalOrganizationsResponse;
  static deserializeBinaryFromReader(message: ListRegionalOrganizationsResponse, reader: jspb.BinaryReader): ListRegionalOrganizationsResponse;
}

export namespace ListRegionalOrganizationsResponse {
  export type AsObject = {
    organizationDescriptionsList: Array<OrganizationDescription.AsObject>,
  }
}

export class GetUserDirectoryRequest extends jspb.Message {
  getAgentsOnly(): boolean;
  setAgentsOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserDirectoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserDirectoryRequest): GetUserDirectoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserDirectoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserDirectoryRequest;
  static deserializeBinaryFromReader(message: GetUserDirectoryRequest, reader: jspb.BinaryReader): GetUserDirectoryRequest;
}

export namespace GetUserDirectoryRequest {
  export type AsObject = {
    agentsOnly: boolean,
  }
}

export class GetUserDirectoryResponse extends jspb.Message {
  clearUserDirectoryList(): void;
  getUserDirectoryList(): Array<UserDirectoryEntry>;
  setUserDirectoryList(value: Array<UserDirectoryEntry>): void;
  addUserDirectory(value?: UserDirectoryEntry, index?: number): UserDirectoryEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserDirectoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserDirectoryResponse): GetUserDirectoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserDirectoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserDirectoryResponse;
  static deserializeBinaryFromReader(message: GetUserDirectoryResponse, reader: jspb.BinaryReader): GetUserDirectoryResponse;
}

export namespace GetUserDirectoryResponse {
  export type AsObject = {
    userDirectoryList: Array<UserDirectoryEntry.AsObject>,
  }
}

export class UserDirectoryEntry extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getFullName(): string;
  setFullName(value: string): void;

  getUserName(): string;
  setUserName(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDirectoryEntry.AsObject;
  static toObject(includeInstance: boolean, msg: UserDirectoryEntry): UserDirectoryEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserDirectoryEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDirectoryEntry;
  static deserializeBinaryFromReader(message: UserDirectoryEntry, reader: jspb.BinaryReader): UserDirectoryEntry;
}

export namespace UserDirectoryEntry {
  export type AsObject = {
    userId: string,
    fullName: string,
    userName: string,
    firstName: string,
    lastName: string,
  }
}

export class GetTempUserTokenReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTempUserTokenReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetTempUserTokenReq): GetTempUserTokenReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTempUserTokenReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTempUserTokenReq;
  static deserializeBinaryFromReader(message: GetTempUserTokenReq, reader: jspb.BinaryReader): GetTempUserTokenReq;
}

export namespace GetTempUserTokenReq {
  export type AsObject = {
  }
}

export class GetTempUserTokenRes extends jspb.Message {
  getRegionId(): string;
  setRegionId(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTempUserTokenRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetTempUserTokenRes): GetTempUserTokenRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTempUserTokenRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTempUserTokenRes;
  static deserializeBinaryFromReader(message: GetTempUserTokenRes, reader: jspb.BinaryReader): GetTempUserTokenRes;
}

export namespace GetTempUserTokenRes {
  export type AsObject = {
    regionId: string,
    token: string,
  }
}

export class GetTempUserTokenByUserIdReq extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTempUserTokenByUserIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetTempUserTokenByUserIdReq): GetTempUserTokenByUserIdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTempUserTokenByUserIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTempUserTokenByUserIdReq;
  static deserializeBinaryFromReader(message: GetTempUserTokenByUserIdReq, reader: jspb.BinaryReader): GetTempUserTokenByUserIdReq;
}

export namespace GetTempUserTokenByUserIdReq {
  export type AsObject = {
    userId: string,
  }
}

export class GetTempUserTokenByUserIdRes extends jspb.Message {
  getRegionId(): string;
  setRegionId(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTempUserTokenByUserIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetTempUserTokenByUserIdRes): GetTempUserTokenByUserIdRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTempUserTokenByUserIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTempUserTokenByUserIdRes;
  static deserializeBinaryFromReader(message: GetTempUserTokenByUserIdRes, reader: jspb.BinaryReader): GetTempUserTokenByUserIdRes;
}

export namespace GetTempUserTokenByUserIdRes {
  export type AsObject = {
    regionId: string,
    token: string,
  }
}

export class AdminListUserDescriptionsRequest extends jspb.Message {
  getRegionId(): string;
  setRegionId(value: string): void;

  getOrgIdFilter(): string;
  setOrgIdFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminListUserDescriptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminListUserDescriptionsRequest): AdminListUserDescriptionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdminListUserDescriptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminListUserDescriptionsRequest;
  static deserializeBinaryFromReader(message: AdminListUserDescriptionsRequest, reader: jspb.BinaryReader): AdminListUserDescriptionsRequest;
}

export namespace AdminListUserDescriptionsRequest {
  export type AsObject = {
    regionId: string,
    orgIdFilter: string,
  }
}

export class AdminListUserDescriptionsResponse extends jspb.Message {
  clearUserDescriptionsList(): void;
  getUserDescriptionsList(): Array<UserDescription>;
  setUserDescriptionsList(value: Array<UserDescription>): void;
  addUserDescriptions(value?: UserDescription, index?: number): UserDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminListUserDescriptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminListUserDescriptionsResponse): AdminListUserDescriptionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdminListUserDescriptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminListUserDescriptionsResponse;
  static deserializeBinaryFromReader(message: AdminListUserDescriptionsResponse, reader: jspb.BinaryReader): AdminListUserDescriptionsResponse;
}

export namespace AdminListUserDescriptionsResponse {
  export type AsObject = {
    userDescriptionsList: Array<UserDescription.AsObject>,
  }
}

export class ListUserDescriptionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserDescriptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserDescriptionsRequest): ListUserDescriptionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUserDescriptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserDescriptionsRequest;
  static deserializeBinaryFromReader(message: ListUserDescriptionsRequest, reader: jspb.BinaryReader): ListUserDescriptionsRequest;
}

export namespace ListUserDescriptionsRequest {
  export type AsObject = {
  }
}

export class ListUserDescriptionsResponse extends jspb.Message {
  clearUserDescriptionsList(): void;
  getUserDescriptionsList(): Array<UserDescription>;
  setUserDescriptionsList(value: Array<UserDescription>): void;
  addUserDescriptions(value?: UserDescription, index?: number): UserDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserDescriptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserDescriptionsResponse): ListUserDescriptionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUserDescriptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserDescriptionsResponse;
  static deserializeBinaryFromReader(message: ListUserDescriptionsResponse, reader: jspb.BinaryReader): ListUserDescriptionsResponse;
}

export namespace ListUserDescriptionsResponse {
  export type AsObject = {
    userDescriptionsList: Array<UserDescription.AsObject>,
  }
}

export class GetRegionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRegionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRegionsRequest): GetRegionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRegionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRegionsRequest;
  static deserializeBinaryFromReader(message: GetRegionsRequest, reader: jspb.BinaryReader): GetRegionsRequest;
}

export namespace GetRegionsRequest {
  export type AsObject = {
  }
}

export class GetRegionsResponse extends jspb.Message {
  clearRegionNamesList(): void;
  getRegionNamesList(): Array<string>;
  setRegionNamesList(value: Array<string>): void;
  addRegionNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRegionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRegionsResponse): GetRegionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRegionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRegionsResponse;
  static deserializeBinaryFromReader(message: GetRegionsResponse, reader: jspb.BinaryReader): GetRegionsResponse;
}

export namespace GetRegionsResponse {
  export type AsObject = {
    regionNamesList: Array<string>,
  }
}

export class GetUserDetailsRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserDetailsRequest): GetUserDetailsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserDetailsRequest;
  static deserializeBinaryFromReader(message: GetUserDetailsRequest, reader: jspb.BinaryReader): GetUserDetailsRequest;
}

export namespace GetUserDetailsRequest {
  export type AsObject = {
    userId: string,
  }
}

export class GetMyUserDetailsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyUserDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyUserDetailsRequest): GetMyUserDetailsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMyUserDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyUserDetailsRequest;
  static deserializeBinaryFromReader(message: GetMyUserDetailsRequest, reader: jspb.BinaryReader): GetMyUserDetailsRequest;
}

export namespace GetMyUserDetailsRequest {
  export type AsObject = {
  }
}

export class AdminGetUserDetailsRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminGetUserDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminGetUserDetailsRequest): AdminGetUserDetailsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdminGetUserDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminGetUserDetailsRequest;
  static deserializeBinaryFromReader(message: AdminGetUserDetailsRequest, reader: jspb.BinaryReader): AdminGetUserDetailsRequest;
}

export namespace AdminGetUserDetailsRequest {
  export type AsObject = {
    userId: string,
  }
}

export class Label extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getColor(): string;
  setColor(value: string): void;

  getLabelId(): string;
  setLabelId(value: string): void;

  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Label.AsObject;
  static toObject(includeInstance: boolean, msg: Label): Label.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Label, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Label;
  static deserializeBinaryFromReader(message: Label, reader: jspb.BinaryReader): Label;
}

export namespace Label {
  export type AsObject = {
    name: string,
    description: string,
    color: string,
    labelId: string,
    deleted: boolean,
  }
}

export class UserDetails extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getUserName(): string;
  setUserName(value: string): void;

  getOrganizationName(): string;
  setOrganizationName(value: string): void;

  getLocationName(): string;
  setLocationName(value: string): void;

  getP3PermissionGroup(): string;
  setP3PermissionGroup(value: string): void;

  clearPermissionGroupsList(): void;
  getPermissionGroupsList(): Array<PermissionGroup>;
  setPermissionGroupsList(value: Array<PermissionGroup>): void;
  addPermissionGroups(value?: PermissionGroup, index?: number): PermissionGroup;

  getDefaultRegion(): string;
  setDefaultRegion(value: string): void;

  clearAllowedRegionsList(): void;
  getAllowedRegionsList(): Array<string>;
  setAllowedRegionsList(value: Array<string>): void;
  addAllowedRegions(value: string, index?: number): string;

  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  getPartnerAgentId(): string;
  setPartnerAgentId(value: string): void;

  getAgentSid(): number;
  setAgentSid(value: number): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  clearLinkbackNumbersList(): void;
  getLinkbackNumbersList(): Array<string>;
  setLinkbackNumbersList(value: Array<string>): void;
  addLinkbackNumbers(value: string, index?: number): string;

  clearCallerIdsList(): void;
  getCallerIdsList(): Array<string>;
  setCallerIdsList(value: Array<string>): void;
  addCallerIds(value: string, index?: number): string;

  getLoginSid(): number;
  setLoginSid(value: number): void;

  getDefaultApp(): api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap];
  setDefaultApp(value: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap]): void;

  getUserCallerId(): string;
  setUserCallerId(value: string): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getHuntGroupName(): string;
  setHuntGroupName(value: string): void;

  clearSkillsList(): void;
  getSkillsList(): Array<Skill>;
  setSkillsList(value: Array<Skill>): void;
  addSkills(value?: Skill, index?: number): Skill;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPasswordResetRequired(): boolean;
  setPasswordResetRequired(value: boolean): void;

  getAgentProfileGroupId(): string;
  setAgentProfileGroupId(value: string): void;

  clearLabelEntitiesList(): void;
  getLabelEntitiesList(): Array<Label>;
  setLabelEntitiesList(value: Array<Label>): void;
  addLabelEntities(value?: Label, index?: number): Label;

  getDelegated(): boolean;
  setDelegated(value: boolean): void;

  hasTimeZoneOverride(): boolean;
  clearTimeZoneOverride(): void;
  getTimeZoneOverride(): api_commons_org_pb.TimeZoneWrapper | undefined;
  setTimeZoneOverride(value?: api_commons_org_pb.TimeZoneWrapper): void;

  getEmail(): string;
  setEmail(value: string): void;

  clearTrustsList(): void;
  getTrustsList(): Array<api_commons_org_trusts_pb.Trust>;
  setTrustsList(value: Array<api_commons_org_trusts_pb.Trust>): void;
  addTrusts(value?: api_commons_org_trusts_pb.Trust, index?: number): api_commons_org_trusts_pb.Trust;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDetails.AsObject;
  static toObject(includeInstance: boolean, msg: UserDetails): UserDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDetails;
  static deserializeBinaryFromReader(message: UserDetails, reader: jspb.BinaryReader): UserDetails;
}

export namespace UserDetails {
  export type AsObject = {
    userId: string,
    userName: string,
    organizationName: string,
    locationName: string,
    p3PermissionGroup: string,
    permissionGroupsList: Array<PermissionGroup.AsObject>,
    defaultRegion: string,
    allowedRegionsList: Array<string>,
    disabled: boolean,
    partnerAgentId: string,
    agentSid: number,
    orgId: string,
    linkbackNumbersList: Array<string>,
    callerIdsList: Array<string>,
    loginSid: number,
    defaultApp: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap],
    userCallerId: string,
    huntGroupSid: number,
    huntGroupName: string,
    skillsList: Array<Skill.AsObject>,
    firstName: string,
    lastName: string,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    passwordResetRequired: boolean,
    agentProfileGroupId: string,
    labelEntitiesList: Array<Label.AsObject>,
    delegated: boolean,
    timeZoneOverride?: api_commons_org_pb.TimeZoneWrapper.AsObject,
    email: string,
    trustsList: Array<api_commons_org_trusts_pb.Trust.AsObject>,
  }
}

export class AgentUser extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getUserName(): string;
  setUserName(value: string): void;

  getHuntGroupName(): string;
  setHuntGroupName(value: string): void;

  clearSkillsList(): void;
  getSkillsList(): Array<Skill>;
  setSkillsList(value: Array<Skill>): void;
  addSkills(value?: Skill, index?: number): Skill;

  getPartnerAgentId(): string;
  setPartnerAgentId(value: string): void;

  getCallbackExtension(): string;
  setCallbackExtension(value: string): void;

  getCallbackNumber(): string;
  setCallbackNumber(value: string): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getAgentSid(): number;
  setAgentSid(value: number): void;

  getUserCallerId(): string;
  setUserCallerId(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAgentProfileGroupId(): string;
  setAgentProfileGroupId(value: string): void;

  getDelegated(): boolean;
  setDelegated(value: boolean): void;

  getAgentProfileGroupName(): string;
  setAgentProfileGroupName(value: string): void;

  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  getHasAgentPerm(): boolean;
  setHasAgentPerm(value: boolean): void;

  hasTimeZoneOverride(): boolean;
  clearTimeZoneOverride(): void;
  getTimeZoneOverride(): api_commons_org_pb.TimeZoneWrapper | undefined;
  setTimeZoneOverride(value?: api_commons_org_pb.TimeZoneWrapper): void;

  getEmail(): string;
  setEmail(value: string): void;

  clearLabelEntitiesList(): void;
  getLabelEntitiesList(): Array<Label>;
  setLabelEntitiesList(value: Array<Label>): void;
  addLabelEntities(value?: Label, index?: number): Label;

  clearPermissionGroupsList(): void;
  getPermissionGroupsList(): Array<PermissionGroup>;
  setPermissionGroupsList(value: Array<PermissionGroup>): void;
  addPermissionGroups(value?: PermissionGroup, index?: number): PermissionGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentUser.AsObject;
  static toObject(includeInstance: boolean, msg: AgentUser): AgentUser.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentUser;
  static deserializeBinaryFromReader(message: AgentUser, reader: jspb.BinaryReader): AgentUser;
}

export namespace AgentUser {
  export type AsObject = {
    userId: string,
    name: string,
    userName: string,
    huntGroupName: string,
    skillsList: Array<Skill.AsObject>,
    partnerAgentId: string,
    callbackExtension: string,
    callbackNumber: string,
    huntGroupSid: number,
    agentSid: number,
    userCallerId: string,
    firstName: string,
    lastName: string,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    agentProfileGroupId: string,
    delegated: boolean,
    agentProfileGroupName: string,
    disabled: boolean,
    hasAgentPerm: boolean,
    timeZoneOverride?: api_commons_org_pb.TimeZoneWrapper.AsObject,
    email: string,
    labelEntitiesList: Array<Label.AsObject>,
    permissionGroupsList: Array<PermissionGroup.AsObject>,
  }
}

export class Skill extends jspb.Message {
  getLevel(): number;
  setLevel(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getSkillSid(): number;
  setSkillSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Skill.AsObject;
  static toObject(includeInstance: boolean, msg: Skill): Skill.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Skill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Skill;
  static deserializeBinaryFromReader(message: Skill, reader: jspb.BinaryReader): Skill;
}

export namespace Skill {
  export type AsObject = {
    level: number,
    name: string,
    description: string,
    skillSid: number,
  }
}

export class GetAgentUsersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentUsersRequest): GetAgentUsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentUsersRequest;
  static deserializeBinaryFromReader(message: GetAgentUsersRequest, reader: jspb.BinaryReader): GetAgentUsersRequest;
}

export namespace GetAgentUsersRequest {
  export type AsObject = {
  }
}

export class GetAgentUsersResponse extends jspb.Message {
  clearAgentUsersList(): void;
  getAgentUsersList(): Array<AgentUser>;
  setAgentUsersList(value: Array<AgentUser>): void;
  addAgentUsers(value?: AgentUser, index?: number): AgentUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentUsersResponse): GetAgentUsersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentUsersResponse;
  static deserializeBinaryFromReader(message: GetAgentUsersResponse, reader: jspb.BinaryReader): GetAgentUsersResponse;
}

export namespace GetAgentUsersResponse {
  export type AsObject = {
    agentUsersList: Array<AgentUser.AsObject>,
  }
}

export class GetAgentSettingsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentSettingsRequest): GetAgentSettingsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentSettingsRequest;
  static deserializeBinaryFromReader(message: GetAgentSettingsRequest, reader: jspb.BinaryReader): GetAgentSettingsRequest;
}

export namespace GetAgentSettingsRequest {
  export type AsObject = {
  }
}

export class GetAgentSettingsResponse extends jspb.Message {
  getUserCallerId(): string;
  setUserCallerId(value: string): void;

  clearPriorityGroupsList(): void;
  getPriorityGroupsList(): Array<PriorityGroup>;
  setPriorityGroupsList(value: Array<PriorityGroup>): void;
  addPriorityGroups(value?: PriorityGroup, index?: number): PriorityGroup;

  clearReservedCarriersList(): void;
  getReservedCarriersList(): Array<string>;
  setReservedCarriersList(value: Array<string>): void;
  addReservedCarriers(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentSettingsResponse): GetAgentSettingsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentSettingsResponse;
  static deserializeBinaryFromReader(message: GetAgentSettingsResponse, reader: jspb.BinaryReader): GetAgentSettingsResponse;
}

export namespace GetAgentSettingsResponse {
  export type AsObject = {
    userCallerId: string,
    priorityGroupsList: Array<PriorityGroup.AsObject>,
    reservedCarriersList: Array<string>,
  }
}

export class PriorityGroup extends jspb.Message {
  getThreshold(): number;
  setThreshold(value: number): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriorityGroup.AsObject;
  static toObject(includeInstance: boolean, msg: PriorityGroup): PriorityGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriorityGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriorityGroup;
  static deserializeBinaryFromReader(message: PriorityGroup, reader: jspb.BinaryReader): PriorityGroup;
}

export namespace PriorityGroup {
  export type AsObject = {
    threshold: number,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
  }
}

export class GetAgentProfileGroupRequest extends jspb.Message {
  getAgentProfileGroupId(): string;
  setAgentProfileGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentProfileGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentProfileGroupRequest): GetAgentProfileGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentProfileGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentProfileGroupRequest;
  static deserializeBinaryFromReader(message: GetAgentProfileGroupRequest, reader: jspb.BinaryReader): GetAgentProfileGroupRequest;
}

export namespace GetAgentProfileGroupRequest {
  export type AsObject = {
    agentProfileGroupId: string,
  }
}

export class GetAgentProfileGroupResponse extends jspb.Message {
  hasAgentProfileGroup(): boolean;
  clearAgentProfileGroup(): void;
  getAgentProfileGroup(): api_commons_org_agent_profile_group_pb.AgentProfileGroup | undefined;
  setAgentProfileGroup(value?: api_commons_org_agent_profile_group_pb.AgentProfileGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentProfileGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentProfileGroupResponse): GetAgentProfileGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentProfileGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentProfileGroupResponse;
  static deserializeBinaryFromReader(message: GetAgentProfileGroupResponse, reader: jspb.BinaryReader): GetAgentProfileGroupResponse;
}

export namespace GetAgentProfileGroupResponse {
  export type AsObject = {
    agentProfileGroup?: api_commons_org_agent_profile_group_pb.AgentProfileGroup.AsObject,
  }
}

export class UpdateAgentProfileGroupRequest extends jspb.Message {
  hasAgentProfileGroup(): boolean;
  clearAgentProfileGroup(): void;
  getAgentProfileGroup(): api_commons_org_agent_profile_group_pb.AgentProfileGroup | undefined;
  setAgentProfileGroup(value?: api_commons_org_agent_profile_group_pb.AgentProfileGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentProfileGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentProfileGroupRequest): UpdateAgentProfileGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentProfileGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentProfileGroupRequest;
  static deserializeBinaryFromReader(message: UpdateAgentProfileGroupRequest, reader: jspb.BinaryReader): UpdateAgentProfileGroupRequest;
}

export namespace UpdateAgentProfileGroupRequest {
  export type AsObject = {
    agentProfileGroup?: api_commons_org_agent_profile_group_pb.AgentProfileGroup.AsObject,
  }
}

export class UpdateAgentProfileGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentProfileGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentProfileGroupResponse): UpdateAgentProfileGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentProfileGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentProfileGroupResponse;
  static deserializeBinaryFromReader(message: UpdateAgentProfileGroupResponse, reader: jspb.BinaryReader): UpdateAgentProfileGroupResponse;
}

export namespace UpdateAgentProfileGroupResponse {
  export type AsObject = {
  }
}

export class CreateAgentProfileGroupRequest extends jspb.Message {
  hasAgentProfileGroup(): boolean;
  clearAgentProfileGroup(): void;
  getAgentProfileGroup(): api_commons_org_agent_profile_group_pb.AgentProfileGroup | undefined;
  setAgentProfileGroup(value?: api_commons_org_agent_profile_group_pb.AgentProfileGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAgentProfileGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAgentProfileGroupRequest): CreateAgentProfileGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAgentProfileGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAgentProfileGroupRequest;
  static deserializeBinaryFromReader(message: CreateAgentProfileGroupRequest, reader: jspb.BinaryReader): CreateAgentProfileGroupRequest;
}

export namespace CreateAgentProfileGroupRequest {
  export type AsObject = {
    agentProfileGroup?: api_commons_org_agent_profile_group_pb.AgentProfileGroup.AsObject,
  }
}

export class CreateAgentProfileGroupResponse extends jspb.Message {
  getAgentProfileGroupId(): string;
  setAgentProfileGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAgentProfileGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAgentProfileGroupResponse): CreateAgentProfileGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAgentProfileGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAgentProfileGroupResponse;
  static deserializeBinaryFromReader(message: CreateAgentProfileGroupResponse, reader: jspb.BinaryReader): CreateAgentProfileGroupResponse;
}

export namespace CreateAgentProfileGroupResponse {
  export type AsObject = {
    agentProfileGroupId: string,
  }
}

export class ListAgentProfileGroupsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentProfileGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentProfileGroupsRequest): ListAgentProfileGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentProfileGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentProfileGroupsRequest;
  static deserializeBinaryFromReader(message: ListAgentProfileGroupsRequest, reader: jspb.BinaryReader): ListAgentProfileGroupsRequest;
}

export namespace ListAgentProfileGroupsRequest {
  export type AsObject = {
  }
}

export class ListAgentProfileGroupsResponse extends jspb.Message {
  clearAgentProfileGroupsList(): void;
  getAgentProfileGroupsList(): Array<api_commons_org_agent_profile_group_pb.AgentProfileGroup>;
  setAgentProfileGroupsList(value: Array<api_commons_org_agent_profile_group_pb.AgentProfileGroup>): void;
  addAgentProfileGroups(value?: api_commons_org_agent_profile_group_pb.AgentProfileGroup, index?: number): api_commons_org_agent_profile_group_pb.AgentProfileGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentProfileGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentProfileGroupsResponse): ListAgentProfileGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentProfileGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentProfileGroupsResponse;
  static deserializeBinaryFromReader(message: ListAgentProfileGroupsResponse, reader: jspb.BinaryReader): ListAgentProfileGroupsResponse;
}

export namespace ListAgentProfileGroupsResponse {
  export type AsObject = {
    agentProfileGroupsList: Array<api_commons_org_agent_profile_group_pb.AgentProfileGroup.AsObject>,
  }
}

export class DeleteAgentProfileGroupRequest extends jspb.Message {
  getAgentProfileGroupId(): string;
  setAgentProfileGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAgentProfileGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAgentProfileGroupRequest): DeleteAgentProfileGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAgentProfileGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAgentProfileGroupRequest;
  static deserializeBinaryFromReader(message: DeleteAgentProfileGroupRequest, reader: jspb.BinaryReader): DeleteAgentProfileGroupRequest;
}

export namespace DeleteAgentProfileGroupRequest {
  export type AsObject = {
    agentProfileGroupId: string,
  }
}

export class DeleteAgentProfileGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAgentProfileGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAgentProfileGroupResponse): DeleteAgentProfileGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAgentProfileGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAgentProfileGroupResponse;
  static deserializeBinaryFromReader(message: DeleteAgentProfileGroupResponse, reader: jspb.BinaryReader): DeleteAgentProfileGroupResponse;
}

export namespace DeleteAgentProfileGroupResponse {
  export type AsObject = {
  }
}

export class AssignAgentProfileGroupsRequest extends jspb.Message {
  getAgentProfileGroupId(): string;
  setAgentProfileGroupId(value: string): void;

  clearUserIdsList(): void;
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  addUserIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignAgentProfileGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignAgentProfileGroupsRequest): AssignAgentProfileGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignAgentProfileGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignAgentProfileGroupsRequest;
  static deserializeBinaryFromReader(message: AssignAgentProfileGroupsRequest, reader: jspb.BinaryReader): AssignAgentProfileGroupsRequest;
}

export namespace AssignAgentProfileGroupsRequest {
  export type AsObject = {
    agentProfileGroupId: string,
    userIdsList: Array<string>,
  }
}

export class AssignAgentProfileGroupsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignAgentProfileGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignAgentProfileGroupsResponse): AssignAgentProfileGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignAgentProfileGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignAgentProfileGroupsResponse;
  static deserializeBinaryFromReader(message: AssignAgentProfileGroupsResponse, reader: jspb.BinaryReader): AssignAgentProfileGroupsResponse;
}

export namespace AssignAgentProfileGroupsResponse {
  export type AsObject = {
  }
}

export class UpdateUserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getPartnerAgentId(): string;
  setPartnerAgentId(value: string): void;

  hasTimeZoneOverride(): boolean;
  clearTimeZoneOverride(): void;
  getTimeZoneOverride(): api_commons_org_pb.TimeZoneWrapper | undefined;
  setTimeZoneOverride(value?: api_commons_org_pb.TimeZoneWrapper): void;

  clearLinkbackNumbersList(): void;
  getLinkbackNumbersList(): Array<string>;
  setLinkbackNumbersList(value: Array<string>): void;
  addLinkbackNumbers(value: string, index?: number): string;

  clearCallerIdsList(): void;
  getCallerIdsList(): Array<string>;
  setCallerIdsList(value: Array<string>): void;
  addCallerIds(value: string, index?: number): string;

  getUserName(): string;
  setUserName(value: string): void;

  getDefaultApp(): api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap];
  setDefaultApp(value: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap]): void;

  getPasswordResetRequired(): boolean;
  setPasswordResetRequired(value: boolean): void;

  getAgentProfileGroupId(): string;
  setAgentProfileGroupId(value: string): void;

  clearLabelEntitiesList(): void;
  getLabelEntitiesList(): Array<Label>;
  setLabelEntitiesList(value: Array<Label>): void;
  addLabelEntities(value?: Label, index?: number): Label;

  getEmail(): string;
  setEmail(value: string): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
  static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
  export type AsObject = {
    userId: string,
    firstName: string,
    lastName: string,
    partnerAgentId: string,
    timeZoneOverride?: api_commons_org_pb.TimeZoneWrapper.AsObject,
    linkbackNumbersList: Array<string>,
    callerIdsList: Array<string>,
    userName: string,
    defaultApp: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap],
    passwordResetRequired: boolean,
    agentProfileGroupId: string,
    labelEntitiesList: Array<Label.AsObject>,
    email: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateUserResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserResponse): UpdateUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserResponse;
  static deserializeBinaryFromReader(message: UpdateUserResponse, reader: jspb.BinaryReader): UpdateUserResponse;
}

export namespace UpdateUserResponse {
  export type AsObject = {
  }
}

export class UpdateMyUserRequest extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getPartnerAgentId(): string;
  setPartnerAgentId(value: string): void;

  hasTimeZoneOverride(): boolean;
  clearTimeZoneOverride(): void;
  getTimeZoneOverride(): api_commons_org_pb.TimeZoneWrapper | undefined;
  setTimeZoneOverride(value?: api_commons_org_pb.TimeZoneWrapper): void;

  clearLinkbackNumbersList(): void;
  getLinkbackNumbersList(): Array<string>;
  setLinkbackNumbersList(value: Array<string>): void;
  addLinkbackNumbers(value: string, index?: number): string;

  clearCallerIdsList(): void;
  getCallerIdsList(): Array<string>;
  setCallerIdsList(value: Array<string>): void;
  addCallerIds(value: string, index?: number): string;

  getUserName(): string;
  setUserName(value: string): void;

  getDefaultApp(): api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap];
  setDefaultApp(value: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap]): void;

  getPasswordResetRequired(): boolean;
  setPasswordResetRequired(value: boolean): void;

  getAgentProfileGroupId(): string;
  setAgentProfileGroupId(value: string): void;

  clearLabelEntitiesList(): void;
  getLabelEntitiesList(): Array<Label>;
  setLabelEntitiesList(value: Array<Label>): void;
  addLabelEntities(value?: Label, index?: number): Label;

  getEmail(): string;
  setEmail(value: string): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMyUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMyUserRequest): UpdateMyUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMyUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMyUserRequest;
  static deserializeBinaryFromReader(message: UpdateMyUserRequest, reader: jspb.BinaryReader): UpdateMyUserRequest;
}

export namespace UpdateMyUserRequest {
  export type AsObject = {
    firstName: string,
    lastName: string,
    partnerAgentId: string,
    timeZoneOverride?: api_commons_org_pb.TimeZoneWrapper.AsObject,
    linkbackNumbersList: Array<string>,
    callerIdsList: Array<string>,
    userName: string,
    defaultApp: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap],
    passwordResetRequired: boolean,
    agentProfileGroupId: string,
    labelEntitiesList: Array<Label.AsObject>,
    email: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateMyUserResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMyUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMyUserResponse): UpdateMyUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMyUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMyUserResponse;
  static deserializeBinaryFromReader(message: UpdateMyUserResponse, reader: jspb.BinaryReader): UpdateMyUserResponse;
}

export namespace UpdateMyUserResponse {
  export type AsObject = {
  }
}

export class UpdateUserByCallerIdRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getPartnerAgentId(): string;
  setPartnerAgentId(value: string): void;

  hasTimeZoneOverride(): boolean;
  clearTimeZoneOverride(): void;
  getTimeZoneOverride(): api_commons_org_pb.TimeZoneWrapper | undefined;
  setTimeZoneOverride(value?: api_commons_org_pb.TimeZoneWrapper): void;

  clearLinkbackNumbersList(): void;
  getLinkbackNumbersList(): Array<string>;
  setLinkbackNumbersList(value: Array<string>): void;
  addLinkbackNumbers(value: string, index?: number): string;

  clearCallerIdsList(): void;
  getCallerIdsList(): Array<string>;
  setCallerIdsList(value: Array<string>): void;
  addCallerIds(value: string, index?: number): string;

  getUserName(): string;
  setUserName(value: string): void;

  getDefaultApp(): api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap];
  setDefaultApp(value: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap]): void;

  getUserCallerId(): string;
  setUserCallerId(value: string): void;

  getPasswordResetRequired(): boolean;
  setPasswordResetRequired(value: boolean): void;

  getAgentProfileGroupId(): string;
  setAgentProfileGroupId(value: string): void;

  clearLabelEntitiesList(): void;
  getLabelEntitiesList(): Array<Label>;
  setLabelEntitiesList(value: Array<Label>): void;
  addLabelEntities(value?: Label, index?: number): Label;

  getEmail(): string;
  setEmail(value: string): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserByCallerIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserByCallerIdRequest): UpdateUserByCallerIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserByCallerIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserByCallerIdRequest;
  static deserializeBinaryFromReader(message: UpdateUserByCallerIdRequest, reader: jspb.BinaryReader): UpdateUserByCallerIdRequest;
}

export namespace UpdateUserByCallerIdRequest {
  export type AsObject = {
    userId: string,
    firstName: string,
    lastName: string,
    partnerAgentId: string,
    timeZoneOverride?: api_commons_org_pb.TimeZoneWrapper.AsObject,
    linkbackNumbersList: Array<string>,
    callerIdsList: Array<string>,
    userName: string,
    defaultApp: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap],
    userCallerId: string,
    passwordResetRequired: boolean,
    agentProfileGroupId: string,
    labelEntitiesList: Array<Label.AsObject>,
    email: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateUserByCallerIdResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserByCallerIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserByCallerIdResponse): UpdateUserByCallerIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserByCallerIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserByCallerIdResponse;
  static deserializeBinaryFromReader(message: UpdateUserByCallerIdResponse, reader: jspb.BinaryReader): UpdateUserByCallerIdResponse;
}

export namespace UpdateUserByCallerIdResponse {
  export type AsObject = {
  }
}

export class Country extends jspb.Message {
  getCountryId(): string;
  setCountryId(value: string): void;

  getCountrySid(): number;
  setCountrySid(value: number): void;

  getCountryName(): string;
  setCountryName(value: string): void;

  getPhoneDigits(): number;
  setPhoneDigits(value: number): void;

  getRegionDigits(): number;
  setRegionDigits(value: number): void;

  getTotalDigits(): number;
  setTotalDigits(value: number): void;

  getCountryCode(): number;
  setCountryCode(value: number): void;

  clearRegionCodesList(): void;
  getRegionCodesList(): Array<string>;
  setRegionCodesList(value: Array<string>): void;
  addRegionCodes(value: string, index?: number): string;

  getCountry(): api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap];
  setCountry(value: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Country.AsObject;
  static toObject(includeInstance: boolean, msg: Country): Country.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Country, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Country;
  static deserializeBinaryFromReader(message: Country, reader: jspb.BinaryReader): Country;
}

export namespace Country {
  export type AsObject = {
    countryId: string,
    countrySid: number,
    countryName: string,
    phoneDigits: number,
    regionDigits: number,
    totalDigits: number,
    countryCode: number,
    regionCodesList: Array<string>,
    country: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap],
  }
}

export class GetCountriesListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCountriesListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCountriesListRequest): GetCountriesListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCountriesListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCountriesListRequest;
  static deserializeBinaryFromReader(message: GetCountriesListRequest, reader: jspb.BinaryReader): GetCountriesListRequest;
}

export namespace GetCountriesListRequest {
  export type AsObject = {
  }
}

export class GetCountriesListResponse extends jspb.Message {
  clearCountriesList(): void;
  getCountriesList(): Array<Country>;
  setCountriesList(value: Array<Country>): void;
  addCountries(value?: Country, index?: number): Country;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCountriesListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCountriesListResponse): GetCountriesListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCountriesListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCountriesListResponse;
  static deserializeBinaryFromReader(message: GetCountriesListResponse, reader: jspb.BinaryReader): GetCountriesListResponse;
}

export namespace GetCountriesListResponse {
  export type AsObject = {
    countriesList: Array<Country.AsObject>,
  }
}

export class User extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getRegionId(): string;
  setRegionId(value: string): void;

  getPartnerAgentId(): string;
  setPartnerAgentId(value: string): void;

  getLoginSid(): number;
  setLoginSid(value: number): void;

  getAgentSid(): number;
  setAgentSid(value: number): void;

  clearRegionsList(): void;
  getRegionsList(): Array<string>;
  setRegionsList(value: Array<string>): void;
  addRegions(value: string, index?: number): string;

  getEmail(): string;
  setEmail(value: string): void;

  clearCallerIdsList(): void;
  getCallerIdsList(): Array<string>;
  setCallerIdsList(value: Array<string>): void;
  addCallerIds(value: string, index?: number): string;

  clearLinkbackNumbersList(): void;
  getLinkbackNumbersList(): Array<string>;
  setLinkbackNumbersList(value: Array<string>): void;
  addLinkbackNumbers(value: string, index?: number): string;

  getUserName(): string;
  setUserName(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPasswordResetRequired(): boolean;
  setPasswordResetRequired(value: boolean): void;

  hasConnectionId(): boolean;
  clearConnectionId(): void;
  getConnectionId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConnectionId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasTimeZoneOverride(): boolean;
  clearTimeZoneOverride(): void;
  getTimeZoneOverride(): api_commons_org_pb.TimeZoneWrapper | undefined;
  setTimeZoneOverride(value?: api_commons_org_pb.TimeZoneWrapper): void;

  clearLabelEntitiesList(): void;
  getLabelEntitiesList(): Array<Label>;
  setLabelEntitiesList(value: Array<Label>): void;
  addLabelEntities(value?: Label, index?: number): Label;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    userId: string,
    orgId: string,
    regionId: string,
    partnerAgentId: string,
    loginSid: number,
    agentSid: number,
    regionsList: Array<string>,
    email: string,
    callerIdsList: Array<string>,
    linkbackNumbersList: Array<string>,
    userName: string,
    firstName: string,
    lastName: string,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    passwordResetRequired: boolean,
    connectionId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    timeZoneOverride?: api_commons_org_pb.TimeZoneWrapper.AsObject,
    labelEntitiesList: Array<Label.AsObject>,
  }
}

export class GetPermissionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPermissionsRequest): GetPermissionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPermissionsRequest;
  static deserializeBinaryFromReader(message: GetPermissionsRequest, reader: jspb.BinaryReader): GetPermissionsRequest;
}

export namespace GetPermissionsRequest {
  export type AsObject = {
  }
}

export class GetPermissionsResponse extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  clearPermissionsList(): void;
  getPermissionsList(): Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>;
  setPermissionsList(value: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>): void;
  addPermissions(value: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap], index?: number): api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap];

  getUiLogLevel(): string;
  setUiLogLevel(value: string): void;

  getOrgName(): string;
  setOrgName(value: string): void;

  getLogLevel(): api_commons_logging_pb.LevelMap[keyof api_commons_logging_pb.LevelMap];
  setLogLevel(value: api_commons_logging_pb.LevelMap[keyof api_commons_logging_pb.LevelMap]): void;

  clearP3PermissionsList(): void;
  getP3PermissionsList(): Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>;
  setP3PermissionsList(value: Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>): void;
  addP3Permissions(value: api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap], index?: number): api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap];

  getOrgDefaultRegionId(): string;
  setOrgDefaultRegionId(value: string): void;

  getDefaultApp(): api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap];
  setDefaultApp(value: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPermissionsResponse): GetPermissionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPermissionsResponse;
  static deserializeBinaryFromReader(message: GetPermissionsResponse, reader: jspb.BinaryReader): GetPermissionsResponse;
}

export namespace GetPermissionsResponse {
  export type AsObject = {
    user?: User.AsObject,
    permissionsList: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>,
    uiLogLevel: string,
    orgName: string,
    logLevel: api_commons_logging_pb.LevelMap[keyof api_commons_logging_pb.LevelMap],
    p3PermissionsList: Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>,
    orgDefaultRegionId: string,
    defaultApp: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap],
  }
}

export class UpdateUserDisabledRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getDisable(): boolean;
  setDisable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserDisabledRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserDisabledRequest): UpdateUserDisabledRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserDisabledRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserDisabledRequest;
  static deserializeBinaryFromReader(message: UpdateUserDisabledRequest, reader: jspb.BinaryReader): UpdateUserDisabledRequest;
}

export namespace UpdateUserDisabledRequest {
  export type AsObject = {
    userId: string,
    disable: boolean,
  }
}

export class UpdateUserDisabledResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserDisabledResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserDisabledResponse): UpdateUserDisabledResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserDisabledResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserDisabledResponse;
  static deserializeBinaryFromReader(message: UpdateUserDisabledResponse, reader: jspb.BinaryReader): UpdateUserDisabledResponse;
}

export namespace UpdateUserDisabledResponse {
  export type AsObject = {
  }
}

export class UpdateUserDisabledByOrgIdRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getDisable(): boolean;
  setDisable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserDisabledByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserDisabledByOrgIdRequest): UpdateUserDisabledByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserDisabledByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserDisabledByOrgIdRequest;
  static deserializeBinaryFromReader(message: UpdateUserDisabledByOrgIdRequest, reader: jspb.BinaryReader): UpdateUserDisabledByOrgIdRequest;
}

export namespace UpdateUserDisabledByOrgIdRequest {
  export type AsObject = {
    userId: string,
    orgId: string,
    disable: boolean,
  }
}

export class UpdateUserDisabledByOrgIdResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserDisabledByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserDisabledByOrgIdResponse): UpdateUserDisabledByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserDisabledByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserDisabledByOrgIdResponse;
  static deserializeBinaryFromReader(message: UpdateUserDisabledByOrgIdResponse, reader: jspb.BinaryReader): UpdateUserDisabledByOrgIdResponse;
}

export namespace UpdateUserDisabledByOrgIdResponse {
  export type AsObject = {
  }
}

export class UpdateBulkUsersDisabledRequest extends jspb.Message {
  clearUserIdsList(): void;
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  addUserIds(value: string, index?: number): string;

  getDisable(): boolean;
  setDisable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBulkUsersDisabledRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBulkUsersDisabledRequest): UpdateBulkUsersDisabledRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBulkUsersDisabledRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBulkUsersDisabledRequest;
  static deserializeBinaryFromReader(message: UpdateBulkUsersDisabledRequest, reader: jspb.BinaryReader): UpdateBulkUsersDisabledRequest;
}

export namespace UpdateBulkUsersDisabledRequest {
  export type AsObject = {
    userIdsList: Array<string>,
    disable: boolean,
  }
}

export class UpdateBulkUsersDisabledResponse extends jspb.Message {
  clearUpdatedIdsList(): void;
  getUpdatedIdsList(): Array<string>;
  setUpdatedIdsList(value: Array<string>): void;
  addUpdatedIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBulkUsersDisabledResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBulkUsersDisabledResponse): UpdateBulkUsersDisabledResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBulkUsersDisabledResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBulkUsersDisabledResponse;
  static deserializeBinaryFromReader(message: UpdateBulkUsersDisabledResponse, reader: jspb.BinaryReader): UpdateBulkUsersDisabledResponse;
}

export namespace UpdateBulkUsersDisabledResponse {
  export type AsObject = {
    updatedIdsList: Array<string>,
  }
}

export class DeleteOrganizationPropertiesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOrganizationPropertiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOrganizationPropertiesResponse): DeleteOrganizationPropertiesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteOrganizationPropertiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOrganizationPropertiesResponse;
  static deserializeBinaryFromReader(message: DeleteOrganizationPropertiesResponse, reader: jspb.BinaryReader): DeleteOrganizationPropertiesResponse;
}

export namespace DeleteOrganizationPropertiesResponse {
  export type AsObject = {
  }
}

export class BillingRegion extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearPrefixesList(): void;
  getPrefixesList(): Array<string>;
  setPrefixesList(value: Array<string>): void;
  addPrefixes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingRegion.AsObject;
  static toObject(includeInstance: boolean, msg: BillingRegion): BillingRegion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingRegion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingRegion;
  static deserializeBinaryFromReader(message: BillingRegion, reader: jspb.BinaryReader): BillingRegion;
}

export namespace BillingRegion {
  export type AsObject = {
    name: string,
    description: string,
    prefixesList: Array<string>,
  }
}

export class BillingRate extends jspb.Message {
  getStandardPpi(): number;
  setStandardPpi(value: number): void;

  getLinkbackPpi(): number;
  setLinkbackPpi(value: number): void;

  getVocalDirectMsgRate(): number;
  setVocalDirectMsgRate(value: number): void;

  getSmsMsgRate(): number;
  setSmsMsgRate(value: number): void;

  getBillingIncrementSeconds(): number;
  setBillingIncrementSeconds(value: number): void;

  getMinBilledIncrements(): number;
  setMinBilledIncrements(value: number): void;

  getMinLinkbackBilledIncrements(): number;
  setMinLinkbackBilledIncrements(value: number): void;

  hasInboundPpi(): boolean;
  clearInboundPpi(): void;
  getInboundPpi(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setInboundPpi(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasMaxBilledIncrements(): boolean;
  clearMaxBilledIncrements(): void;
  getMaxBilledIncrements(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMaxBilledIncrements(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasMaxLinkbackBilledIncrements(): boolean;
  clearMaxLinkbackBilledIncrements(): void;
  getMaxLinkbackBilledIncrements(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMaxLinkbackBilledIncrements(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasMachineHangupIncrements(): boolean;
  clearMachineHangupIncrements(): void;
  getMachineHangupIncrements(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMachineHangupIncrements(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasHumanHangupIncrements(): boolean;
  clearHumanHangupIncrements(): void;
  getHumanHangupIncrements(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setHumanHangupIncrements(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingRate.AsObject;
  static toObject(includeInstance: boolean, msg: BillingRate): BillingRate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingRate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingRate;
  static deserializeBinaryFromReader(message: BillingRate, reader: jspb.BinaryReader): BillingRate;
}

export namespace BillingRate {
  export type AsObject = {
    standardPpi: number,
    linkbackPpi: number,
    vocalDirectMsgRate: number,
    smsMsgRate: number,
    billingIncrementSeconds: number,
    minBilledIncrements: number,
    minLinkbackBilledIncrements: number,
    inboundPpi?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    maxBilledIncrements?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    maxLinkbackBilledIncrements?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    machineHangupIncrements?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    humanHangupIncrements?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class BillingRegionRate extends jspb.Message {
  hasBillingRegion(): boolean;
  clearBillingRegion(): void;
  getBillingRegion(): BillingRegion | undefined;
  setBillingRegion(value?: BillingRegion): void;

  hasBillingRate(): boolean;
  clearBillingRate(): void;
  getBillingRate(): BillingRate | undefined;
  setBillingRate(value?: BillingRate): void;

  getBillingRegionId(): string;
  setBillingRegionId(value: string): void;

  getCountryId(): string;
  setCountryId(value: string): void;

  getIsCustom(): boolean;
  setIsCustom(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingRegionRate.AsObject;
  static toObject(includeInstance: boolean, msg: BillingRegionRate): BillingRegionRate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingRegionRate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingRegionRate;
  static deserializeBinaryFromReader(message: BillingRegionRate, reader: jspb.BinaryReader): BillingRegionRate;
}

export namespace BillingRegionRate {
  export type AsObject = {
    billingRegion?: BillingRegion.AsObject,
    billingRate?: BillingRate.AsObject,
    billingRegionId: string,
    countryId: string,
    isCustom: boolean,
  }
}

export class ListBillingRegionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBillingRegionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBillingRegionsRequest): ListBillingRegionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBillingRegionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBillingRegionsRequest;
  static deserializeBinaryFromReader(message: ListBillingRegionsRequest, reader: jspb.BinaryReader): ListBillingRegionsRequest;
}

export namespace ListBillingRegionsRequest {
  export type AsObject = {
  }
}

export class ListBillingRegionsResponse extends jspb.Message {
  clearBillingRegionRatesList(): void;
  getBillingRegionRatesList(): Array<BillingRegionRate>;
  setBillingRegionRatesList(value: Array<BillingRegionRate>): void;
  addBillingRegionRates(value?: BillingRegionRate, index?: number): BillingRegionRate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBillingRegionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBillingRegionsResponse): ListBillingRegionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBillingRegionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBillingRegionsResponse;
  static deserializeBinaryFromReader(message: ListBillingRegionsResponse, reader: jspb.BinaryReader): ListBillingRegionsResponse;
}

export namespace ListBillingRegionsResponse {
  export type AsObject = {
    billingRegionRatesList: Array<BillingRegionRate.AsObject>,
  }
}

export class PermissionGroup extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearPermissionsList(): void;
  getPermissionsList(): Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>;
  setPermissionsList(value: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>): void;
  addPermissions(value: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap], index?: number): api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap];

  getReadOnly(): boolean;
  setReadOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionGroup.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionGroup): PermissionGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PermissionGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionGroup;
  static deserializeBinaryFromReader(message: PermissionGroup, reader: jspb.BinaryReader): PermissionGroup;
}

export namespace PermissionGroup {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    permissionsList: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>,
    readOnly: boolean,
  }
}

export class ListPermissionGroupsByOrgIdRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPermissionGroupsByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPermissionGroupsByOrgIdRequest): ListPermissionGroupsByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPermissionGroupsByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPermissionGroupsByOrgIdRequest;
  static deserializeBinaryFromReader(message: ListPermissionGroupsByOrgIdRequest, reader: jspb.BinaryReader): ListPermissionGroupsByOrgIdRequest;
}

export namespace ListPermissionGroupsByOrgIdRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class ListPermissionGroupsByOrgIdResponse extends jspb.Message {
  clearPermissionGroupsList(): void;
  getPermissionGroupsList(): Array<PermissionGroup>;
  setPermissionGroupsList(value: Array<PermissionGroup>): void;
  addPermissionGroups(value?: PermissionGroup, index?: number): PermissionGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPermissionGroupsByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPermissionGroupsByOrgIdResponse): ListPermissionGroupsByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPermissionGroupsByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPermissionGroupsByOrgIdResponse;
  static deserializeBinaryFromReader(message: ListPermissionGroupsByOrgIdResponse, reader: jspb.BinaryReader): ListPermissionGroupsByOrgIdResponse;
}

export namespace ListPermissionGroupsByOrgIdResponse {
  export type AsObject = {
    permissionGroupsList: Array<PermissionGroup.AsObject>,
  }
}

export class ListPermissionGroupsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPermissionGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPermissionGroupsRequest): ListPermissionGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPermissionGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPermissionGroupsRequest;
  static deserializeBinaryFromReader(message: ListPermissionGroupsRequest, reader: jspb.BinaryReader): ListPermissionGroupsRequest;
}

export namespace ListPermissionGroupsRequest {
  export type AsObject = {
  }
}

export class ListPermissionGroupsResponse extends jspb.Message {
  clearPermissionGroupsList(): void;
  getPermissionGroupsList(): Array<PermissionGroup>;
  setPermissionGroupsList(value: Array<PermissionGroup>): void;
  addPermissionGroups(value?: PermissionGroup, index?: number): PermissionGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPermissionGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPermissionGroupsResponse): ListPermissionGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPermissionGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPermissionGroupsResponse;
  static deserializeBinaryFromReader(message: ListPermissionGroupsResponse, reader: jspb.BinaryReader): ListPermissionGroupsResponse;
}

export namespace ListPermissionGroupsResponse {
  export type AsObject = {
    permissionGroupsList: Array<PermissionGroup.AsObject>,
  }
}

export class CreatePermissionGroupRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearPermissionsList(): void;
  getPermissionsList(): Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>;
  setPermissionsList(value: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>): void;
  addPermissions(value: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap], index?: number): api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePermissionGroupRequest): CreatePermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePermissionGroupRequest;
  static deserializeBinaryFromReader(message: CreatePermissionGroupRequest, reader: jspb.BinaryReader): CreatePermissionGroupRequest;
}

export namespace CreatePermissionGroupRequest {
  export type AsObject = {
    name: string,
    description: string,
    permissionsList: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>,
  }
}

export class CreatePermissionGroupResponse extends jspb.Message {
  hasPermissionGroup(): boolean;
  clearPermissionGroup(): void;
  getPermissionGroup(): PermissionGroup | undefined;
  setPermissionGroup(value?: PermissionGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePermissionGroupResponse): CreatePermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePermissionGroupResponse;
  static deserializeBinaryFromReader(message: CreatePermissionGroupResponse, reader: jspb.BinaryReader): CreatePermissionGroupResponse;
}

export namespace CreatePermissionGroupResponse {
  export type AsObject = {
    permissionGroup?: PermissionGroup.AsObject,
  }
}

export class UpdatePermissionGroupRequest extends jspb.Message {
  hasPermissionGroup(): boolean;
  clearPermissionGroup(): void;
  getPermissionGroup(): PermissionGroup | undefined;
  setPermissionGroup(value?: PermissionGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePermissionGroupRequest): UpdatePermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePermissionGroupRequest;
  static deserializeBinaryFromReader(message: UpdatePermissionGroupRequest, reader: jspb.BinaryReader): UpdatePermissionGroupRequest;
}

export namespace UpdatePermissionGroupRequest {
  export type AsObject = {
    permissionGroup?: PermissionGroup.AsObject,
  }
}

export class UpdatePermissionGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePermissionGroupResponse): UpdatePermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePermissionGroupResponse;
  static deserializeBinaryFromReader(message: UpdatePermissionGroupResponse, reader: jspb.BinaryReader): UpdatePermissionGroupResponse;
}

export namespace UpdatePermissionGroupResponse {
  export type AsObject = {
  }
}

export class DeletePermissionGroupRequest extends jspb.Message {
  getPermissionGroupId(): string;
  setPermissionGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePermissionGroupRequest): DeletePermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePermissionGroupRequest;
  static deserializeBinaryFromReader(message: DeletePermissionGroupRequest, reader: jspb.BinaryReader): DeletePermissionGroupRequest;
}

export namespace DeletePermissionGroupRequest {
  export type AsObject = {
    permissionGroupId: string,
  }
}

export class DeletePermissionGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePermissionGroupResponse): DeletePermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePermissionGroupResponse;
  static deserializeBinaryFromReader(message: DeletePermissionGroupResponse, reader: jspb.BinaryReader): DeletePermissionGroupResponse;
}

export namespace DeletePermissionGroupResponse {
  export type AsObject = {
  }
}

export class AssignUserToAccountOwnerPermissionGroupRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignUserToAccountOwnerPermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignUserToAccountOwnerPermissionGroupRequest): AssignUserToAccountOwnerPermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignUserToAccountOwnerPermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignUserToAccountOwnerPermissionGroupRequest;
  static deserializeBinaryFromReader(message: AssignUserToAccountOwnerPermissionGroupRequest, reader: jspb.BinaryReader): AssignUserToAccountOwnerPermissionGroupRequest;
}

export namespace AssignUserToAccountOwnerPermissionGroupRequest {
  export type AsObject = {
    userId: string,
  }
}

export class AssignUserToAccountOwnerPermissionGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignUserToAccountOwnerPermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignUserToAccountOwnerPermissionGroupResponse): AssignUserToAccountOwnerPermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignUserToAccountOwnerPermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignUserToAccountOwnerPermissionGroupResponse;
  static deserializeBinaryFromReader(message: AssignUserToAccountOwnerPermissionGroupResponse, reader: jspb.BinaryReader): AssignUserToAccountOwnerPermissionGroupResponse;
}

export namespace AssignUserToAccountOwnerPermissionGroupResponse {
  export type AsObject = {
  }
}

export class AssignUserPermissionGroupRequest extends jspb.Message {
  getPermissionGroupId(): string;
  setPermissionGroupId(value: string): void;

  getAssignUserId(): string;
  setAssignUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignUserPermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignUserPermissionGroupRequest): AssignUserPermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignUserPermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignUserPermissionGroupRequest;
  static deserializeBinaryFromReader(message: AssignUserPermissionGroupRequest, reader: jspb.BinaryReader): AssignUserPermissionGroupRequest;
}

export namespace AssignUserPermissionGroupRequest {
  export type AsObject = {
    permissionGroupId: string,
    assignUserId: string,
  }
}

export class AssignUserPermissionGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignUserPermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignUserPermissionGroupResponse): AssignUserPermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignUserPermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignUserPermissionGroupResponse;
  static deserializeBinaryFromReader(message: AssignUserPermissionGroupResponse, reader: jspb.BinaryReader): AssignUserPermissionGroupResponse;
}

export namespace AssignUserPermissionGroupResponse {
  export type AsObject = {
  }
}

export class AssignUsersPermissionGroupRequest extends jspb.Message {
  getPermissionGroupId(): string;
  setPermissionGroupId(value: string): void;

  clearAssignUserIdsList(): void;
  getAssignUserIdsList(): Array<string>;
  setAssignUserIdsList(value: Array<string>): void;
  addAssignUserIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignUsersPermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignUsersPermissionGroupRequest): AssignUsersPermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignUsersPermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignUsersPermissionGroupRequest;
  static deserializeBinaryFromReader(message: AssignUsersPermissionGroupRequest, reader: jspb.BinaryReader): AssignUsersPermissionGroupRequest;
}

export namespace AssignUsersPermissionGroupRequest {
  export type AsObject = {
    permissionGroupId: string,
    assignUserIdsList: Array<string>,
  }
}

export class AssignUsersPermissionGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignUsersPermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignUsersPermissionGroupResponse): AssignUsersPermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignUsersPermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignUsersPermissionGroupResponse;
  static deserializeBinaryFromReader(message: AssignUsersPermissionGroupResponse, reader: jspb.BinaryReader): AssignUsersPermissionGroupResponse;
}

export namespace AssignUsersPermissionGroupResponse {
  export type AsObject = {
  }
}

export class UpdateUserNeoPermissionGroupsRequest extends jspb.Message {
  getAssignUserId(): string;
  setAssignUserId(value: string): void;

  clearPermissionGroupIdsList(): void;
  getPermissionGroupIdsList(): Array<string>;
  setPermissionGroupIdsList(value: Array<string>): void;
  addPermissionGroupIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserNeoPermissionGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserNeoPermissionGroupsRequest): UpdateUserNeoPermissionGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserNeoPermissionGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserNeoPermissionGroupsRequest;
  static deserializeBinaryFromReader(message: UpdateUserNeoPermissionGroupsRequest, reader: jspb.BinaryReader): UpdateUserNeoPermissionGroupsRequest;
}

export namespace UpdateUserNeoPermissionGroupsRequest {
  export type AsObject = {
    assignUserId: string,
    permissionGroupIdsList: Array<string>,
  }
}

export class UpdateUserNeoPermissionGroupsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserNeoPermissionGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserNeoPermissionGroupsResponse): UpdateUserNeoPermissionGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserNeoPermissionGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserNeoPermissionGroupsResponse;
  static deserializeBinaryFromReader(message: UpdateUserNeoPermissionGroupsResponse, reader: jspb.BinaryReader): UpdateUserNeoPermissionGroupsResponse;
}

export namespace UpdateUserNeoPermissionGroupsResponse {
  export type AsObject = {
  }
}

export class RevokeUserPermissionGroupRequest extends jspb.Message {
  getPermissionGroupId(): string;
  setPermissionGroupId(value: string): void;

  getRevokeUserId(): string;
  setRevokeUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeUserPermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeUserPermissionGroupRequest): RevokeUserPermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeUserPermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeUserPermissionGroupRequest;
  static deserializeBinaryFromReader(message: RevokeUserPermissionGroupRequest, reader: jspb.BinaryReader): RevokeUserPermissionGroupRequest;
}

export namespace RevokeUserPermissionGroupRequest {
  export type AsObject = {
    permissionGroupId: string,
    revokeUserId: string,
  }
}

export class RevokeUserPermissionGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeUserPermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeUserPermissionGroupResponse): RevokeUserPermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeUserPermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeUserPermissionGroupResponse;
  static deserializeBinaryFromReader(message: RevokeUserPermissionGroupResponse, reader: jspb.BinaryReader): RevokeUserPermissionGroupResponse;
}

export namespace RevokeUserPermissionGroupResponse {
  export type AsObject = {
  }
}

export class RevokeUsersPermissionGroupRequest extends jspb.Message {
  getPermissionGroupId(): string;
  setPermissionGroupId(value: string): void;

  clearRevokeUserIdsList(): void;
  getRevokeUserIdsList(): Array<string>;
  setRevokeUserIdsList(value: Array<string>): void;
  addRevokeUserIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeUsersPermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeUsersPermissionGroupRequest): RevokeUsersPermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeUsersPermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeUsersPermissionGroupRequest;
  static deserializeBinaryFromReader(message: RevokeUsersPermissionGroupRequest, reader: jspb.BinaryReader): RevokeUsersPermissionGroupRequest;
}

export namespace RevokeUsersPermissionGroupRequest {
  export type AsObject = {
    permissionGroupId: string,
    revokeUserIdsList: Array<string>,
  }
}

export class RevokeUsersPermissionGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeUsersPermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeUsersPermissionGroupResponse): RevokeUsersPermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeUsersPermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeUsersPermissionGroupResponse;
  static deserializeBinaryFromReader(message: RevokeUsersPermissionGroupResponse, reader: jspb.BinaryReader): RevokeUsersPermissionGroupResponse;
}

export namespace RevokeUsersPermissionGroupResponse {
  export type AsObject = {
  }
}

export class ListP3PermissionGroupsByOrgIdRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListP3PermissionGroupsByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListP3PermissionGroupsByOrgIdRequest): ListP3PermissionGroupsByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListP3PermissionGroupsByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListP3PermissionGroupsByOrgIdRequest;
  static deserializeBinaryFromReader(message: ListP3PermissionGroupsByOrgIdRequest, reader: jspb.BinaryReader): ListP3PermissionGroupsByOrgIdRequest;
}

export namespace ListP3PermissionGroupsByOrgIdRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class ListP3PermissionGroupsByOrgIdResponse extends jspb.Message {
  clearPermissionGroupsList(): void;
  getPermissionGroupsList(): Array<P3PermissionGroup>;
  setPermissionGroupsList(value: Array<P3PermissionGroup>): void;
  addPermissionGroups(value?: P3PermissionGroup, index?: number): P3PermissionGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListP3PermissionGroupsByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListP3PermissionGroupsByOrgIdResponse): ListP3PermissionGroupsByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListP3PermissionGroupsByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListP3PermissionGroupsByOrgIdResponse;
  static deserializeBinaryFromReader(message: ListP3PermissionGroupsByOrgIdResponse, reader: jspb.BinaryReader): ListP3PermissionGroupsByOrgIdResponse;
}

export namespace ListP3PermissionGroupsByOrgIdResponse {
  export type AsObject = {
    permissionGroupsList: Array<P3PermissionGroup.AsObject>,
  }
}

export class ListP3PermissionGroupsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListP3PermissionGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListP3PermissionGroupsRequest): ListP3PermissionGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListP3PermissionGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListP3PermissionGroupsRequest;
  static deserializeBinaryFromReader(message: ListP3PermissionGroupsRequest, reader: jspb.BinaryReader): ListP3PermissionGroupsRequest;
}

export namespace ListP3PermissionGroupsRequest {
  export type AsObject = {
  }
}

export class ListP3PermissionGroupsResponse extends jspb.Message {
  clearPermissionGroupsList(): void;
  getPermissionGroupsList(): Array<P3PermissionGroup>;
  setPermissionGroupsList(value: Array<P3PermissionGroup>): void;
  addPermissionGroups(value?: P3PermissionGroup, index?: number): P3PermissionGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListP3PermissionGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListP3PermissionGroupsResponse): ListP3PermissionGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListP3PermissionGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListP3PermissionGroupsResponse;
  static deserializeBinaryFromReader(message: ListP3PermissionGroupsResponse, reader: jspb.BinaryReader): ListP3PermissionGroupsResponse;
}

export namespace ListP3PermissionGroupsResponse {
  export type AsObject = {
    permissionGroupsList: Array<P3PermissionGroup.AsObject>,
  }
}

export class P3PermissionGroup extends jspb.Message {
  getPermissionGroupId(): string;
  setPermissionGroupId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearPermissionsList(): void;
  getPermissionsList(): Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>;
  setPermissionsList(value: Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>): void;
  addPermissions(value: api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap], index?: number): api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap];

  getPermissionGroupSid(): number;
  setPermissionGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): P3PermissionGroup.AsObject;
  static toObject(includeInstance: boolean, msg: P3PermissionGroup): P3PermissionGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: P3PermissionGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): P3PermissionGroup;
  static deserializeBinaryFromReader(message: P3PermissionGroup, reader: jspb.BinaryReader): P3PermissionGroup;
}

export namespace P3PermissionGroup {
  export type AsObject = {
    permissionGroupId: string,
    name: string,
    description: string,
    permissionsList: Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>,
    permissionGroupSid: number,
  }
}

export class CreateP3PermissionGroupRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearPermissionsList(): void;
  getPermissionsList(): Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>;
  setPermissionsList(value: Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>): void;
  addPermissions(value: api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap], index?: number): api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateP3PermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateP3PermissionGroupRequest): CreateP3PermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateP3PermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateP3PermissionGroupRequest;
  static deserializeBinaryFromReader(message: CreateP3PermissionGroupRequest, reader: jspb.BinaryReader): CreateP3PermissionGroupRequest;
}

export namespace CreateP3PermissionGroupRequest {
  export type AsObject = {
    name: string,
    description: string,
    permissionsList: Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>,
  }
}

export class CreateP3PermissionGroupResponse extends jspb.Message {
  hasP3PermissionGroup(): boolean;
  clearP3PermissionGroup(): void;
  getP3PermissionGroup(): P3PermissionGroup | undefined;
  setP3PermissionGroup(value?: P3PermissionGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateP3PermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateP3PermissionGroupResponse): CreateP3PermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateP3PermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateP3PermissionGroupResponse;
  static deserializeBinaryFromReader(message: CreateP3PermissionGroupResponse, reader: jspb.BinaryReader): CreateP3PermissionGroupResponse;
}

export namespace CreateP3PermissionGroupResponse {
  export type AsObject = {
    p3PermissionGroup?: P3PermissionGroup.AsObject,
  }
}

export class UpdateP3PermissionGroupByOrgIdRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getPermissionGroupId(): string;
  setPermissionGroupId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearPermissionsList(): void;
  getPermissionsList(): Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>;
  setPermissionsList(value: Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>): void;
  addPermissions(value: api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap], index?: number): api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateP3PermissionGroupByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateP3PermissionGroupByOrgIdRequest): UpdateP3PermissionGroupByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateP3PermissionGroupByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateP3PermissionGroupByOrgIdRequest;
  static deserializeBinaryFromReader(message: UpdateP3PermissionGroupByOrgIdRequest, reader: jspb.BinaryReader): UpdateP3PermissionGroupByOrgIdRequest;
}

export namespace UpdateP3PermissionGroupByOrgIdRequest {
  export type AsObject = {
    orgId: string,
    permissionGroupId: string,
    name: string,
    description: string,
    permissionsList: Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>,
  }
}

export class UpdateP3PermissionGroupByOrgIdResponse extends jspb.Message {
  hasP3PermissionGroup(): boolean;
  clearP3PermissionGroup(): void;
  getP3PermissionGroup(): P3PermissionGroup | undefined;
  setP3PermissionGroup(value?: P3PermissionGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateP3PermissionGroupByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateP3PermissionGroupByOrgIdResponse): UpdateP3PermissionGroupByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateP3PermissionGroupByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateP3PermissionGroupByOrgIdResponse;
  static deserializeBinaryFromReader(message: UpdateP3PermissionGroupByOrgIdResponse, reader: jspb.BinaryReader): UpdateP3PermissionGroupByOrgIdResponse;
}

export namespace UpdateP3PermissionGroupByOrgIdResponse {
  export type AsObject = {
    p3PermissionGroup?: P3PermissionGroup.AsObject,
  }
}

export class UpdateP3PermissionGroupRequest extends jspb.Message {
  getPermissionGroupId(): string;
  setPermissionGroupId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearPermissionsList(): void;
  getPermissionsList(): Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>;
  setPermissionsList(value: Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>): void;
  addPermissions(value: api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap], index?: number): api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateP3PermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateP3PermissionGroupRequest): UpdateP3PermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateP3PermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateP3PermissionGroupRequest;
  static deserializeBinaryFromReader(message: UpdateP3PermissionGroupRequest, reader: jspb.BinaryReader): UpdateP3PermissionGroupRequest;
}

export namespace UpdateP3PermissionGroupRequest {
  export type AsObject = {
    permissionGroupId: string,
    name: string,
    description: string,
    permissionsList: Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>,
  }
}

export class UpdateP3PermissionGroupResponse extends jspb.Message {
  hasP3PermissionGroup(): boolean;
  clearP3PermissionGroup(): void;
  getP3PermissionGroup(): P3PermissionGroup | undefined;
  setP3PermissionGroup(value?: P3PermissionGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateP3PermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateP3PermissionGroupResponse): UpdateP3PermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateP3PermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateP3PermissionGroupResponse;
  static deserializeBinaryFromReader(message: UpdateP3PermissionGroupResponse, reader: jspb.BinaryReader): UpdateP3PermissionGroupResponse;
}

export namespace UpdateP3PermissionGroupResponse {
  export type AsObject = {
    p3PermissionGroup?: P3PermissionGroup.AsObject,
  }
}

export class DeleteP3PermissionGroupRequest extends jspb.Message {
  getPermissionGroupId(): string;
  setPermissionGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteP3PermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteP3PermissionGroupRequest): DeleteP3PermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteP3PermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteP3PermissionGroupRequest;
  static deserializeBinaryFromReader(message: DeleteP3PermissionGroupRequest, reader: jspb.BinaryReader): DeleteP3PermissionGroupRequest;
}

export namespace DeleteP3PermissionGroupRequest {
  export type AsObject = {
    permissionGroupId: string,
  }
}

export class DeleteP3PermissionGroupResponse extends jspb.Message {
  getPermissionGroupId(): string;
  setPermissionGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteP3PermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteP3PermissionGroupResponse): DeleteP3PermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteP3PermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteP3PermissionGroupResponse;
  static deserializeBinaryFromReader(message: DeleteP3PermissionGroupResponse, reader: jspb.BinaryReader): DeleteP3PermissionGroupResponse;
}

export namespace DeleteP3PermissionGroupResponse {
  export type AsObject = {
    permissionGroupId: string,
  }
}

export class AddLoginToUserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddLoginToUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddLoginToUserRequest): AddLoginToUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddLoginToUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddLoginToUserRequest;
  static deserializeBinaryFromReader(message: AddLoginToUserRequest, reader: jspb.BinaryReader): AddLoginToUserRequest;
}

export namespace AddLoginToUserRequest {
  export type AsObject = {
    userId: string,
  }
}

export class AddLoginToUserResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddLoginToUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddLoginToUserResponse): AddLoginToUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddLoginToUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddLoginToUserResponse;
  static deserializeBinaryFromReader(message: AddLoginToUserResponse, reader: jspb.BinaryReader): AddLoginToUserResponse;
}

export namespace AddLoginToUserResponse {
  export type AsObject = {
  }
}

export class AssignUsersP3PermissionGroupRequest extends jspb.Message {
  clearUserIdsList(): void;
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  addUserIds(value: string, index?: number): string;

  getPermissionGroupId(): string;
  setPermissionGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignUsersP3PermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignUsersP3PermissionGroupRequest): AssignUsersP3PermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignUsersP3PermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignUsersP3PermissionGroupRequest;
  static deserializeBinaryFromReader(message: AssignUsersP3PermissionGroupRequest, reader: jspb.BinaryReader): AssignUsersP3PermissionGroupRequest;
}

export namespace AssignUsersP3PermissionGroupRequest {
  export type AsObject = {
    userIdsList: Array<string>,
    permissionGroupId: string,
  }
}

export class AssignUsersP3PermissionGroupResponse extends jspb.Message {
  clearUserIdsList(): void;
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  addUserIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignUsersP3PermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignUsersP3PermissionGroupResponse): AssignUsersP3PermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignUsersP3PermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignUsersP3PermissionGroupResponse;
  static deserializeBinaryFromReader(message: AssignUsersP3PermissionGroupResponse, reader: jspb.BinaryReader): AssignUsersP3PermissionGroupResponse;
}

export namespace AssignUsersP3PermissionGroupResponse {
  export type AsObject = {
    userIdsList: Array<string>,
  }
}

export class RevokeUsersP3PermissionGroupRequest extends jspb.Message {
  clearUserIdsList(): void;
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  addUserIds(value: string, index?: number): string;

  getPermissionGroupId(): string;
  setPermissionGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeUsersP3PermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeUsersP3PermissionGroupRequest): RevokeUsersP3PermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeUsersP3PermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeUsersP3PermissionGroupRequest;
  static deserializeBinaryFromReader(message: RevokeUsersP3PermissionGroupRequest, reader: jspb.BinaryReader): RevokeUsersP3PermissionGroupRequest;
}

export namespace RevokeUsersP3PermissionGroupRequest {
  export type AsObject = {
    userIdsList: Array<string>,
    permissionGroupId: string,
  }
}

export class RevokeUsersP3PermissionGroupResponse extends jspb.Message {
  clearUserIdsList(): void;
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  addUserIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeUsersP3PermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeUsersP3PermissionGroupResponse): RevokeUsersP3PermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeUsersP3PermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeUsersP3PermissionGroupResponse;
  static deserializeBinaryFromReader(message: RevokeUsersP3PermissionGroupResponse, reader: jspb.BinaryReader): RevokeUsersP3PermissionGroupResponse;
}

export namespace RevokeUsersP3PermissionGroupResponse {
  export type AsObject = {
    userIdsList: Array<string>,
  }
}

export class SyncP3PermissionGroupRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncP3PermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SyncP3PermissionGroupRequest): SyncP3PermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SyncP3PermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncP3PermissionGroupRequest;
  static deserializeBinaryFromReader(message: SyncP3PermissionGroupRequest, reader: jspb.BinaryReader): SyncP3PermissionGroupRequest;
}

export namespace SyncP3PermissionGroupRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class SyncP3PermissionGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncP3PermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SyncP3PermissionGroupResponse): SyncP3PermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SyncP3PermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncP3PermissionGroupResponse;
  static deserializeBinaryFromReader(message: SyncP3PermissionGroupResponse, reader: jspb.BinaryReader): SyncP3PermissionGroupResponse;
}

export namespace SyncP3PermissionGroupResponse {
  export type AsObject = {
  }
}

export class RegisterOrganizationRequest extends jspb.Message {
  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): Organization | undefined;
  setOrganization(value?: Organization): void;

  clearAllowedCountriesList(): void;
  getAllowedCountriesList(): Array<api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]>;
  setAllowedCountriesList(value: Array<api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]>): void;
  addAllowedCountries(value: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap], index?: number): api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap];

  getP3ParentAccount(): string;
  setP3ParentAccount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterOrganizationRequest): RegisterOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterOrganizationRequest;
  static deserializeBinaryFromReader(message: RegisterOrganizationRequest, reader: jspb.BinaryReader): RegisterOrganizationRequest;
}

export namespace RegisterOrganizationRequest {
  export type AsObject = {
    organization?: Organization.AsObject,
    allowedCountriesList: Array<api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]>,
    p3ParentAccount: string,
  }
}

export class Organization extends jspb.Message {
  getIsManualOnlyAccount(): boolean;
  setIsManualOnlyAccount(value: boolean): void;

  getBackofficeTheme(): api_commons_org_pb.ClientSkinMap[keyof api_commons_org_pb.ClientSkinMap];
  setBackofficeTheme(value: api_commons_org_pb.ClientSkinMap[keyof api_commons_org_pb.ClientSkinMap]): void;

  getContractNumber(): string;
  setContractNumber(value: string): void;

  getCrmId(): string;
  setCrmId(value: string): void;

  getTimeZoneEnum(): api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap];
  setTimeZoneEnum(value: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap]): void;

  getName(): string;
  setName(value: string): void;

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
    isManualOnlyAccount: boolean,
    backofficeTheme: api_commons_org_pb.ClientSkinMap[keyof api_commons_org_pb.ClientSkinMap],
    contractNumber: string,
    crmId: string,
    timeZoneEnum: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap],
    name: string,
  }
}

export class RegisterOrganizationResponse extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterOrganizationResponse): RegisterOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterOrganizationResponse;
  static deserializeBinaryFromReader(message: RegisterOrganizationResponse, reader: jspb.BinaryReader): RegisterOrganizationResponse;
}

export namespace RegisterOrganizationResponse {
  export type AsObject = {
    orgId: string,
  }
}

export class UpdateOrganizationRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getTimeZone(): api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap];
  setTimeZone(value: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap]): void;

  getName(): string;
  setName(value: string): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

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
    name: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateOrganizationResponse extends jspb.Message {
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
  hasOrganizationDescription(): boolean;
  clearOrganizationDescription(): void;
  getOrganizationDescription(): OrganizationDescription | undefined;
  setOrganizationDescription(value?: OrganizationDescription): void;

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
    organizationDescription?: OrganizationDescription.AsObject,
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
  clearArchivedOrganizationDescriptionsList(): void;
  getArchivedOrganizationDescriptionsList(): Array<OrganizationDescription>;
  setArchivedOrganizationDescriptionsList(value: Array<OrganizationDescription>): void;
  addArchivedOrganizationDescriptions(value?: OrganizationDescription, index?: number): OrganizationDescription;

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
    archivedOrganizationDescriptionsList: Array<OrganizationDescription.AsObject>,
  }
}

export class AddUserRegionRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getRegionId(): string;
  setRegionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUserRegionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddUserRegionRequest): AddUserRegionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddUserRegionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUserRegionRequest;
  static deserializeBinaryFromReader(message: AddUserRegionRequest, reader: jspb.BinaryReader): AddUserRegionRequest;
}

export namespace AddUserRegionRequest {
  export type AsObject = {
    userId: string,
    regionId: string,
  }
}

export class AddUserRegionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUserRegionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddUserRegionResponse): AddUserRegionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddUserRegionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUserRegionResponse;
  static deserializeBinaryFromReader(message: AddUserRegionResponse, reader: jspb.BinaryReader): AddUserRegionResponse;
}

export namespace AddUserRegionResponse {
  export type AsObject = {
  }
}

export class RemoveUserRegionRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getRegionId(): string;
  setRegionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveUserRegionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveUserRegionRequest): RemoveUserRegionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveUserRegionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveUserRegionRequest;
  static deserializeBinaryFromReader(message: RemoveUserRegionRequest, reader: jspb.BinaryReader): RemoveUserRegionRequest;
}

export namespace RemoveUserRegionRequest {
  export type AsObject = {
    userId: string,
    regionId: string,
  }
}

export class RemoveUserRegionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveUserRegionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveUserRegionResponse): RemoveUserRegionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveUserRegionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveUserRegionResponse;
  static deserializeBinaryFromReader(message: RemoveUserRegionResponse, reader: jspb.BinaryReader): RemoveUserRegionResponse;
}

export namespace RemoveUserRegionResponse {
  export type AsObject = {
  }
}

export class InitDefaultPermissionGroupsRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitDefaultPermissionGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitDefaultPermissionGroupsRequest): InitDefaultPermissionGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitDefaultPermissionGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitDefaultPermissionGroupsRequest;
  static deserializeBinaryFromReader(message: InitDefaultPermissionGroupsRequest, reader: jspb.BinaryReader): InitDefaultPermissionGroupsRequest;
}

export namespace InitDefaultPermissionGroupsRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class InitDefaultPermissionGroupsResponse extends jspb.Message {
  clearDefaultPermissionGroupsList(): void;
  getDefaultPermissionGroupsList(): Array<PermissionGroup>;
  setDefaultPermissionGroupsList(value: Array<PermissionGroup>): void;
  addDefaultPermissionGroups(value?: PermissionGroup, index?: number): PermissionGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitDefaultPermissionGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitDefaultPermissionGroupsResponse): InitDefaultPermissionGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitDefaultPermissionGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitDefaultPermissionGroupsResponse;
  static deserializeBinaryFromReader(message: InitDefaultPermissionGroupsResponse, reader: jspb.BinaryReader): InitDefaultPermissionGroupsResponse;
}

export namespace InitDefaultPermissionGroupsResponse {
  export type AsObject = {
    defaultPermissionGroupsList: Array<PermissionGroup.AsObject>,
  }
}

export class AddPermissionToAccountOwnerPermissionGroupRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  clearPermissionsList(): void;
  getPermissionsList(): Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>;
  setPermissionsList(value: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>): void;
  addPermissions(value: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap], index?: number): api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPermissionToAccountOwnerPermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddPermissionToAccountOwnerPermissionGroupRequest): AddPermissionToAccountOwnerPermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddPermissionToAccountOwnerPermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPermissionToAccountOwnerPermissionGroupRequest;
  static deserializeBinaryFromReader(message: AddPermissionToAccountOwnerPermissionGroupRequest, reader: jspb.BinaryReader): AddPermissionToAccountOwnerPermissionGroupRequest;
}

export namespace AddPermissionToAccountOwnerPermissionGroupRequest {
  export type AsObject = {
    orgId: string,
    permissionsList: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>,
  }
}

export class AddPermissionToAccountOwnerPermissionGroupResponse extends jspb.Message {
  hasDefaultPermissionGroup(): boolean;
  clearDefaultPermissionGroup(): void;
  getDefaultPermissionGroup(): PermissionGroup | undefined;
  setDefaultPermissionGroup(value?: PermissionGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPermissionToAccountOwnerPermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddPermissionToAccountOwnerPermissionGroupResponse): AddPermissionToAccountOwnerPermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddPermissionToAccountOwnerPermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPermissionToAccountOwnerPermissionGroupResponse;
  static deserializeBinaryFromReader(message: AddPermissionToAccountOwnerPermissionGroupResponse, reader: jspb.BinaryReader): AddPermissionToAccountOwnerPermissionGroupResponse;
}

export namespace AddPermissionToAccountOwnerPermissionGroupResponse {
  export type AsObject = {
    defaultPermissionGroup?: PermissionGroup.AsObject,
  }
}

export class RevokePermissionToAccountOwnerPermissionGroupRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  clearPermissionsList(): void;
  getPermissionsList(): Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>;
  setPermissionsList(value: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>): void;
  addPermissions(value: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap], index?: number): api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokePermissionToAccountOwnerPermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RevokePermissionToAccountOwnerPermissionGroupRequest): RevokePermissionToAccountOwnerPermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokePermissionToAccountOwnerPermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokePermissionToAccountOwnerPermissionGroupRequest;
  static deserializeBinaryFromReader(message: RevokePermissionToAccountOwnerPermissionGroupRequest, reader: jspb.BinaryReader): RevokePermissionToAccountOwnerPermissionGroupRequest;
}

export namespace RevokePermissionToAccountOwnerPermissionGroupRequest {
  export type AsObject = {
    orgId: string,
    permissionsList: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>,
  }
}

export class RevokePermissionToAccountOwnerPermissionGroupResponse extends jspb.Message {
  hasDefaultPermissionGroup(): boolean;
  clearDefaultPermissionGroup(): void;
  getDefaultPermissionGroup(): PermissionGroup | undefined;
  setDefaultPermissionGroup(value?: PermissionGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokePermissionToAccountOwnerPermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RevokePermissionToAccountOwnerPermissionGroupResponse): RevokePermissionToAccountOwnerPermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokePermissionToAccountOwnerPermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokePermissionToAccountOwnerPermissionGroupResponse;
  static deserializeBinaryFromReader(message: RevokePermissionToAccountOwnerPermissionGroupResponse, reader: jspb.BinaryReader): RevokePermissionToAccountOwnerPermissionGroupResponse;
}

export namespace RevokePermissionToAccountOwnerPermissionGroupResponse {
  export type AsObject = {
    defaultPermissionGroup?: PermissionGroup.AsObject,
  }
}

export class AddPermissionToOrgDefaultGroupRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getPermission(): api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap];
  setPermission(value: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPermissionToOrgDefaultGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddPermissionToOrgDefaultGroupRequest): AddPermissionToOrgDefaultGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddPermissionToOrgDefaultGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPermissionToOrgDefaultGroupRequest;
  static deserializeBinaryFromReader(message: AddPermissionToOrgDefaultGroupRequest, reader: jspb.BinaryReader): AddPermissionToOrgDefaultGroupRequest;
}

export namespace AddPermissionToOrgDefaultGroupRequest {
  export type AsObject = {
    orgId: string,
    permission: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap],
  }
}

export class AddPermissionToOrgDefaultGroupResponse extends jspb.Message {
  hasDefaultPermissionGroup(): boolean;
  clearDefaultPermissionGroup(): void;
  getDefaultPermissionGroup(): PermissionGroup | undefined;
  setDefaultPermissionGroup(value?: PermissionGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPermissionToOrgDefaultGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddPermissionToOrgDefaultGroupResponse): AddPermissionToOrgDefaultGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddPermissionToOrgDefaultGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPermissionToOrgDefaultGroupResponse;
  static deserializeBinaryFromReader(message: AddPermissionToOrgDefaultGroupResponse, reader: jspb.BinaryReader): AddPermissionToOrgDefaultGroupResponse;
}

export namespace AddPermissionToOrgDefaultGroupResponse {
  export type AsObject = {
    defaultPermissionGroup?: PermissionGroup.AsObject,
  }
}

export class RemovePermissionFromOrgDefaultGroupRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getPermission(): api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap];
  setPermission(value: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemovePermissionFromOrgDefaultGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemovePermissionFromOrgDefaultGroupRequest): RemovePermissionFromOrgDefaultGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemovePermissionFromOrgDefaultGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemovePermissionFromOrgDefaultGroupRequest;
  static deserializeBinaryFromReader(message: RemovePermissionFromOrgDefaultGroupRequest, reader: jspb.BinaryReader): RemovePermissionFromOrgDefaultGroupRequest;
}

export namespace RemovePermissionFromOrgDefaultGroupRequest {
  export type AsObject = {
    orgId: string,
    permission: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap],
  }
}

export class RemovePermissionFromOrgDefaultGroupResponse extends jspb.Message {
  hasDefaultPermissionGroup(): boolean;
  clearDefaultPermissionGroup(): void;
  getDefaultPermissionGroup(): PermissionGroup | undefined;
  setDefaultPermissionGroup(value?: PermissionGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemovePermissionFromOrgDefaultGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemovePermissionFromOrgDefaultGroupResponse): RemovePermissionFromOrgDefaultGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemovePermissionFromOrgDefaultGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemovePermissionFromOrgDefaultGroupResponse;
  static deserializeBinaryFromReader(message: RemovePermissionFromOrgDefaultGroupResponse, reader: jspb.BinaryReader): RemovePermissionFromOrgDefaultGroupResponse;
}

export namespace RemovePermissionFromOrgDefaultGroupResponse {
  export type AsObject = {
    defaultPermissionGroup?: PermissionGroup.AsObject,
  }
}

export class GetOrgDefaultSuperUserGroupRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrgDefaultSuperUserGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrgDefaultSuperUserGroupRequest): GetOrgDefaultSuperUserGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrgDefaultSuperUserGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrgDefaultSuperUserGroupRequest;
  static deserializeBinaryFromReader(message: GetOrgDefaultSuperUserGroupRequest, reader: jspb.BinaryReader): GetOrgDefaultSuperUserGroupRequest;
}

export namespace GetOrgDefaultSuperUserGroupRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class GetOrgDefaultSuperUserGroupResponse extends jspb.Message {
  hasDefaultPermissionGroup(): boolean;
  clearDefaultPermissionGroup(): void;
  getDefaultPermissionGroup(): PermissionGroup | undefined;
  setDefaultPermissionGroup(value?: PermissionGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrgDefaultSuperUserGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrgDefaultSuperUserGroupResponse): GetOrgDefaultSuperUserGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrgDefaultSuperUserGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrgDefaultSuperUserGroupResponse;
  static deserializeBinaryFromReader(message: GetOrgDefaultSuperUserGroupResponse, reader: jspb.BinaryReader): GetOrgDefaultSuperUserGroupResponse;
}

export namespace GetOrgDefaultSuperUserGroupResponse {
  export type AsObject = {
    defaultPermissionGroup?: PermissionGroup.AsObject,
  }
}

export class GetOrganizationPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationPreferencesRequest): GetOrganizationPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationPreferencesRequest;
  static deserializeBinaryFromReader(message: GetOrganizationPreferencesRequest, reader: jspb.BinaryReader): GetOrganizationPreferencesRequest;
}

export namespace GetOrganizationPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetOrganizationPreferencesResponse extends jspb.Message {
  hasOrganizationPreferences(): boolean;
  clearOrganizationPreferences(): void;
  getOrganizationPreferences(): OrganizationPreferences | undefined;
  setOrganizationPreferences(value?: OrganizationPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationPreferencesResponse): GetOrganizationPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationPreferencesResponse;
  static deserializeBinaryFromReader(message: GetOrganizationPreferencesResponse, reader: jspb.BinaryReader): GetOrganizationPreferencesResponse;
}

export namespace GetOrganizationPreferencesResponse {
  export type AsObject = {
    organizationPreferences?: OrganizationPreferences.AsObject,
  }
}

export class UpdateOrganizationPreferencesRequest extends jspb.Message {
  hasOrganizationPreferences(): boolean;
  clearOrganizationPreferences(): void;
  getOrganizationPreferences(): OrganizationPreferences | undefined;
  setOrganizationPreferences(value?: OrganizationPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationPreferencesRequest): UpdateOrganizationPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrganizationPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateOrganizationPreferencesRequest, reader: jspb.BinaryReader): UpdateOrganizationPreferencesRequest;
}

export namespace UpdateOrganizationPreferencesRequest {
  export type AsObject = {
    organizationPreferences?: OrganizationPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateOrganizationPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationPreferencesResponse): UpdateOrganizationPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrganizationPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateOrganizationPreferencesResponse, reader: jspb.BinaryReader): UpdateOrganizationPreferencesResponse;
}

export namespace UpdateOrganizationPreferencesResponse {
  export type AsObject = {
  }
}

export class OrganizationPreferences extends jspb.Message {
  clearAllowedCountriesList(): void;
  getAllowedCountriesList(): Array<api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]>;
  setAllowedCountriesList(value: Array<api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]>): void;
  addAllowedCountries(value: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap], index?: number): api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap];

  getDefaultCountry(): api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap];
  setDefaultCountry(value: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]): void;

  getTimeZone(): api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap];
  setTimeZone(value: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap]): void;

  getDisplayLanguage(): api_commons_org_pb.DisplayLanguageMap[keyof api_commons_org_pb.DisplayLanguageMap];
  setDisplayLanguage(value: api_commons_org_pb.DisplayLanguageMap[keyof api_commons_org_pb.DisplayLanguageMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationPreferences): OrganizationPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationPreferences;
  static deserializeBinaryFromReader(message: OrganizationPreferences, reader: jspb.BinaryReader): OrganizationPreferences;
}

export namespace OrganizationPreferences {
  export type AsObject = {
    allowedCountriesList: Array<api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]>,
    defaultCountry: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap],
    timeZone: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap],
    displayLanguage: api_commons_org_pb.DisplayLanguageMap[keyof api_commons_org_pb.DisplayLanguageMap],
  }
}

export class GetAgentPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentPreferencesRequest): GetAgentPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentPreferencesRequest;
  static deserializeBinaryFromReader(message: GetAgentPreferencesRequest, reader: jspb.BinaryReader): GetAgentPreferencesRequest;
}

export namespace GetAgentPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetAgentPreferencesResponse extends jspb.Message {
  hasAgentPreferences(): boolean;
  clearAgentPreferences(): void;
  getAgentPreferences(): AgentPreferences | undefined;
  setAgentPreferences(value?: AgentPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentPreferencesResponse): GetAgentPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentPreferencesResponse;
  static deserializeBinaryFromReader(message: GetAgentPreferencesResponse, reader: jspb.BinaryReader): GetAgentPreferencesResponse;
}

export namespace GetAgentPreferencesResponse {
  export type AsObject = {
    agentPreferences?: AgentPreferences.AsObject,
  }
}

export class UpdateAgentPreferencesRequest extends jspb.Message {
  hasAgentPreferences(): boolean;
  clearAgentPreferences(): void;
  getAgentPreferences(): AgentPreferences | undefined;
  setAgentPreferences(value?: AgentPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentPreferencesRequest): UpdateAgentPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateAgentPreferencesRequest, reader: jspb.BinaryReader): UpdateAgentPreferencesRequest;
}

export namespace UpdateAgentPreferencesRequest {
  export type AsObject = {
    agentPreferences?: AgentPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateAgentPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentPreferencesResponse): UpdateAgentPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateAgentPreferencesResponse, reader: jspb.BinaryReader): UpdateAgentPreferencesResponse;
}

export namespace UpdateAgentPreferencesResponse {
  export type AsObject = {
  }
}

export class AgentPreferences extends jspb.Message {
  getDefaultAgentDialIn(): string;
  setDefaultAgentDialIn(value: string): void;

  getPbxExtensionLength(): number;
  setPbxExtensionLength(value: number): void;

  getDefaultSoftphoneVolumeIn(): number;
  setDefaultSoftphoneVolumeIn(value: number): void;

  getDefaultSoftphoneVolumeOut(): number;
  setDefaultSoftphoneVolumeOut(value: number): void;

  clearConfigDialInNumbersList(): void;
  getConfigDialInNumbersList(): Array<string>;
  setConfigDialInNumbersList(value: Array<string>): void;
  addConfigDialInNumbers(value: string, index?: number): string;

  clearClientDialInNumbersList(): void;
  getClientDialInNumbersList(): Array<string>;
  setClientDialInNumbersList(value: Array<string>): void;
  addClientDialInNumbers(value: string, index?: number): string;

  getManualDialCallerIdPrivacy(): boolean;
  setManualDialCallerIdPrivacy(value: boolean): void;

  getUseManualDialCallerIdPrivacy(): boolean;
  setUseManualDialCallerIdPrivacy(value: boolean): void;

  getMessageNotificationsDisabled(): boolean;
  setMessageNotificationsDisabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: AgentPreferences): AgentPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentPreferences;
  static deserializeBinaryFromReader(message: AgentPreferences, reader: jspb.BinaryReader): AgentPreferences;
}

export namespace AgentPreferences {
  export type AsObject = {
    defaultAgentDialIn: string,
    pbxExtensionLength: number,
    defaultSoftphoneVolumeIn: number,
    defaultSoftphoneVolumeOut: number,
    configDialInNumbersList: Array<string>,
    clientDialInNumbersList: Array<string>,
    manualDialCallerIdPrivacy: boolean,
    useManualDialCallerIdPrivacy: boolean,
    messageNotificationsDisabled: boolean,
  }
}

export class GetContactPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContactPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContactPreferencesRequest): GetContactPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContactPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContactPreferencesRequest;
  static deserializeBinaryFromReader(message: GetContactPreferencesRequest, reader: jspb.BinaryReader): GetContactPreferencesRequest;
}

export namespace GetContactPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetContactPreferencesResponse extends jspb.Message {
  hasContactPreferences(): boolean;
  clearContactPreferences(): void;
  getContactPreferences(): ContactPreferences | undefined;
  setContactPreferences(value?: ContactPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContactPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContactPreferencesResponse): GetContactPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContactPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContactPreferencesResponse;
  static deserializeBinaryFromReader(message: GetContactPreferencesResponse, reader: jspb.BinaryReader): GetContactPreferencesResponse;
}

export namespace GetContactPreferencesResponse {
  export type AsObject = {
    contactPreferences?: ContactPreferences.AsObject,
  }
}

export class UpdateContactPreferencesRequest extends jspb.Message {
  hasContactPreferences(): boolean;
  clearContactPreferences(): void;
  getContactPreferences(): ContactPreferences | undefined;
  setContactPreferences(value?: ContactPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateContactPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateContactPreferencesRequest): UpdateContactPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateContactPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateContactPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateContactPreferencesRequest, reader: jspb.BinaryReader): UpdateContactPreferencesRequest;
}

export namespace UpdateContactPreferencesRequest {
  export type AsObject = {
    contactPreferences?: ContactPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateContactPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateContactPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateContactPreferencesResponse): UpdateContactPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateContactPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateContactPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateContactPreferencesResponse, reader: jspb.BinaryReader): UpdateContactPreferencesResponse;
}

export namespace UpdateContactPreferencesResponse {
  export type AsObject = {
  }
}

export class ContactPreferences extends jspb.Message {
  hasDefaultContactImportFormat(): boolean;
  clearDefaultContactImportFormat(): void;
  getDefaultContactImportFormat(): ImportFormat | undefined;
  setDefaultContactImportFormat(value?: ImportFormat): void;

  getUseContactImportFormat(): boolean;
  setUseContactImportFormat(value: boolean): void;

  hasDefaultContactAreaCode(): boolean;
  clearDefaultContactAreaCode(): void;
  getDefaultContactAreaCode(): ContactAreaCode | undefined;
  setDefaultContactAreaCode(value?: ContactAreaCode): void;

  getUseContactAreaCode(): boolean;
  setUseContactAreaCode(value: boolean): void;

  getDiscardRecordDefaultAbsentNumbersHandling(): boolean;
  setDiscardRecordDefaultAbsentNumbersHandling(value: boolean): void;

  getDefaultContactsImportRandomization(): boolean;
  setDefaultContactsImportRandomization(value: boolean): void;

  getDefaultEmailColumn(): string;
  setDefaultEmailColumn(value: string): void;

  getDefaultDuplicateHandling(): api_commons_org_pb.DefaultDuplicateHandlingMap[keyof api_commons_org_pb.DefaultDuplicateHandlingMap];
  setDefaultDuplicateHandling(value: api_commons_org_pb.DefaultDuplicateHandlingMap[keyof api_commons_org_pb.DefaultDuplicateHandlingMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: ContactPreferences): ContactPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactPreferences;
  static deserializeBinaryFromReader(message: ContactPreferences, reader: jspb.BinaryReader): ContactPreferences;
}

export namespace ContactPreferences {
  export type AsObject = {
    defaultContactImportFormat?: ImportFormat.AsObject,
    useContactImportFormat: boolean,
    defaultContactAreaCode?: ContactAreaCode.AsObject,
    useContactAreaCode: boolean,
    discardRecordDefaultAbsentNumbersHandling: boolean,
    defaultContactsImportRandomization: boolean,
    defaultEmailColumn: string,
    defaultDuplicateHandling: api_commons_org_pb.DefaultDuplicateHandlingMap[keyof api_commons_org_pb.DefaultDuplicateHandlingMap],
  }
}

export class ImportFormat extends jspb.Message {
  hasCustom(): boolean;
  clearCustom(): void;
  getCustom(): CustomImportFormat | undefined;
  setCustom(value?: CustomImportFormat): void;

  hasStandard(): boolean;
  clearStandard(): void;
  getStandard(): api_commons_org_pb.StandardImportFormatMap[keyof api_commons_org_pb.StandardImportFormatMap];
  setStandard(value: api_commons_org_pb.StandardImportFormatMap[keyof api_commons_org_pb.StandardImportFormatMap]): void;

  getFormatCase(): ImportFormat.FormatCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportFormat.AsObject;
  static toObject(includeInstance: boolean, msg: ImportFormat): ImportFormat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImportFormat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportFormat;
  static deserializeBinaryFromReader(message: ImportFormat, reader: jspb.BinaryReader): ImportFormat;
}

export namespace ImportFormat {
  export type AsObject = {
    custom?: CustomImportFormat.AsObject,
    standard: api_commons_org_pb.StandardImportFormatMap[keyof api_commons_org_pb.StandardImportFormatMap],
  }

  export enum FormatCase {
    FORMAT_NOT_SET = 0,
    CUSTOM = 1,
    STANDARD = 2,
  }
}

export class CustomImportFormat extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomImportFormat.AsObject;
  static toObject(includeInstance: boolean, msg: CustomImportFormat): CustomImportFormat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomImportFormat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomImportFormat;
  static deserializeBinaryFromReader(message: CustomImportFormat, reader: jspb.BinaryReader): CustomImportFormat;
}

export namespace CustomImportFormat {
  export type AsObject = {
    name: string,
    id: number,
  }
}

export class ContactAreaCode extends jspb.Message {
  hasCustom(): boolean;
  clearCustom(): void;
  getCustom(): number;
  setCustom(value: number): void;

  hasContactField(): boolean;
  clearContactField(): void;
  getContactField(): ContactFieldDesc | undefined;
  setContactField(value?: ContactFieldDesc): void;

  getAreaCodeCase(): ContactAreaCode.AreaCodeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactAreaCode.AsObject;
  static toObject(includeInstance: boolean, msg: ContactAreaCode): ContactAreaCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactAreaCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactAreaCode;
  static deserializeBinaryFromReader(message: ContactAreaCode, reader: jspb.BinaryReader): ContactAreaCode;
}

export namespace ContactAreaCode {
  export type AsObject = {
    custom: number,
    contactField?: ContactFieldDesc.AsObject,
  }

  export enum AreaCodeCase {
    AREA_CODE_NOT_SET = 0,
    CUSTOM = 1,
    CONTACT_FIELD = 2,
  }
}

export class ContactFieldDesc extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getFieldName(): string;
  setFieldName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactFieldDesc.AsObject;
  static toObject(includeInstance: boolean, msg: ContactFieldDesc): ContactFieldDesc.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactFieldDesc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactFieldDesc;
  static deserializeBinaryFromReader(message: ContactFieldDesc, reader: jspb.BinaryReader): ContactFieldDesc;
}

export namespace ContactFieldDesc {
  export type AsObject = {
    id: number,
    fieldName: string,
  }
}

export class GetAuthenticationPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuthenticationPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuthenticationPreferencesRequest): GetAuthenticationPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuthenticationPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuthenticationPreferencesRequest;
  static deserializeBinaryFromReader(message: GetAuthenticationPreferencesRequest, reader: jspb.BinaryReader): GetAuthenticationPreferencesRequest;
}

export namespace GetAuthenticationPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetAuthenticationPreferencesResponse extends jspb.Message {
  hasAuthenticationPreferences(): boolean;
  clearAuthenticationPreferences(): void;
  getAuthenticationPreferences(): AuthenticationPreferences | undefined;
  setAuthenticationPreferences(value?: AuthenticationPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuthenticationPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuthenticationPreferencesResponse): GetAuthenticationPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuthenticationPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuthenticationPreferencesResponse;
  static deserializeBinaryFromReader(message: GetAuthenticationPreferencesResponse, reader: jspb.BinaryReader): GetAuthenticationPreferencesResponse;
}

export namespace GetAuthenticationPreferencesResponse {
  export type AsObject = {
    authenticationPreferences?: AuthenticationPreferences.AsObject,
  }
}

export class UpdateAuthenticationPreferencesRequest extends jspb.Message {
  hasAuthenticationPreferences(): boolean;
  clearAuthenticationPreferences(): void;
  getAuthenticationPreferences(): AuthenticationPreferences | undefined;
  setAuthenticationPreferences(value?: AuthenticationPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAuthenticationPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAuthenticationPreferencesRequest): UpdateAuthenticationPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAuthenticationPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAuthenticationPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateAuthenticationPreferencesRequest, reader: jspb.BinaryReader): UpdateAuthenticationPreferencesRequest;
}

export namespace UpdateAuthenticationPreferencesRequest {
  export type AsObject = {
    authenticationPreferences?: AuthenticationPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateAuthenticationPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAuthenticationPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAuthenticationPreferencesResponse): UpdateAuthenticationPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAuthenticationPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAuthenticationPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateAuthenticationPreferencesResponse, reader: jspb.BinaryReader): UpdateAuthenticationPreferencesResponse;
}

export namespace UpdateAuthenticationPreferencesResponse {
  export type AsObject = {
  }
}

export class AuthenticationPreferences extends jspb.Message {
  getAuthorizationViaIp(): boolean;
  setAuthorizationViaIp(value: boolean): void;

  clearAllowedIpsList(): void;
  getAllowedIpsList(): Array<string>;
  setAllowedIpsList(value: Array<string>): void;
  addAllowedIps(value: string, index?: number): string;

  getAgentApiKey(): string;
  setAgentApiKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationPreferences): AuthenticationPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthenticationPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationPreferences;
  static deserializeBinaryFromReader(message: AuthenticationPreferences, reader: jspb.BinaryReader): AuthenticationPreferences;
}

export namespace AuthenticationPreferences {
  export type AsObject = {
    authorizationViaIp: boolean,
    allowedIpsList: Array<string>,
    agentApiKey: string,
  }
}

export class GetWebhookPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWebhookPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWebhookPreferencesRequest): GetWebhookPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWebhookPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWebhookPreferencesRequest;
  static deserializeBinaryFromReader(message: GetWebhookPreferencesRequest, reader: jspb.BinaryReader): GetWebhookPreferencesRequest;
}

export namespace GetWebhookPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetWebhookPreferencesResponse extends jspb.Message {
  hasWebhookPreferences(): boolean;
  clearWebhookPreferences(): void;
  getWebhookPreferences(): WebhookPreferences | undefined;
  setWebhookPreferences(value?: WebhookPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWebhookPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWebhookPreferencesResponse): GetWebhookPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWebhookPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWebhookPreferencesResponse;
  static deserializeBinaryFromReader(message: GetWebhookPreferencesResponse, reader: jspb.BinaryReader): GetWebhookPreferencesResponse;
}

export namespace GetWebhookPreferencesResponse {
  export type AsObject = {
    webhookPreferences?: WebhookPreferences.AsObject,
  }
}

export class UpdateWebhookPreferencesRequest extends jspb.Message {
  hasWebhookPreferences(): boolean;
  clearWebhookPreferences(): void;
  getWebhookPreferences(): WebhookPreferences | undefined;
  setWebhookPreferences(value?: WebhookPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWebhookPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWebhookPreferencesRequest): UpdateWebhookPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateWebhookPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWebhookPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateWebhookPreferencesRequest, reader: jspb.BinaryReader): UpdateWebhookPreferencesRequest;
}

export namespace UpdateWebhookPreferencesRequest {
  export type AsObject = {
    webhookPreferences?: WebhookPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateWebhookPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWebhookPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWebhookPreferencesResponse): UpdateWebhookPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateWebhookPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWebhookPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateWebhookPreferencesResponse, reader: jspb.BinaryReader): UpdateWebhookPreferencesResponse;
}

export namespace UpdateWebhookPreferencesResponse {
  export type AsObject = {
  }
}

export class WebhookPreferences extends jspb.Message {
  getPushUrlsEnabled(): boolean;
  setPushUrlsEnabled(value: boolean): void;

  getCallResultPushUrl(): string;
  setCallResultPushUrl(value: string): void;

  getAgentResponsePushUrl(): string;
  setAgentResponsePushUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebhookPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: WebhookPreferences): WebhookPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebhookPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebhookPreferences;
  static deserializeBinaryFromReader(message: WebhookPreferences, reader: jspb.BinaryReader): WebhookPreferences;
}

export namespace WebhookPreferences {
  export type AsObject = {
    pushUrlsEnabled: boolean,
    callResultPushUrl: string,
    agentResponsePushUrl: string,
  }
}

export class GetDashboardGeneralPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDashboardGeneralPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDashboardGeneralPreferencesRequest): GetDashboardGeneralPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDashboardGeneralPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDashboardGeneralPreferencesRequest;
  static deserializeBinaryFromReader(message: GetDashboardGeneralPreferencesRequest, reader: jspb.BinaryReader): GetDashboardGeneralPreferencesRequest;
}

export namespace GetDashboardGeneralPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetDashboardGeneralPreferencesResponse extends jspb.Message {
  hasDashboardPreferences(): boolean;
  clearDashboardPreferences(): void;
  getDashboardPreferences(): DashboardPreferences | undefined;
  setDashboardPreferences(value?: DashboardPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDashboardGeneralPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDashboardGeneralPreferencesResponse): GetDashboardGeneralPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDashboardGeneralPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDashboardGeneralPreferencesResponse;
  static deserializeBinaryFromReader(message: GetDashboardGeneralPreferencesResponse, reader: jspb.BinaryReader): GetDashboardGeneralPreferencesResponse;
}

export namespace GetDashboardGeneralPreferencesResponse {
  export type AsObject = {
    dashboardPreferences?: DashboardPreferences.AsObject,
  }
}

export class UpdateDashboardGeneralPreferencesRequest extends jspb.Message {
  hasDashboardPreferences(): boolean;
  clearDashboardPreferences(): void;
  getDashboardPreferences(): DashboardPreferences | undefined;
  setDashboardPreferences(value?: DashboardPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDashboardGeneralPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDashboardGeneralPreferencesRequest): UpdateDashboardGeneralPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDashboardGeneralPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDashboardGeneralPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateDashboardGeneralPreferencesRequest, reader: jspb.BinaryReader): UpdateDashboardGeneralPreferencesRequest;
}

export namespace UpdateDashboardGeneralPreferencesRequest {
  export type AsObject = {
    dashboardPreferences?: DashboardPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateDashboardGeneralPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDashboardGeneralPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDashboardGeneralPreferencesResponse): UpdateDashboardGeneralPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDashboardGeneralPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDashboardGeneralPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateDashboardGeneralPreferencesResponse, reader: jspb.BinaryReader): UpdateDashboardGeneralPreferencesResponse;
}

export namespace UpdateDashboardGeneralPreferencesResponse {
  export type AsObject = {
  }
}

export class DashboardPreferences extends jspb.Message {
  getDefaultInfoView(): boolean;
  setDefaultInfoView(value: boolean): void;

  getDefaultTableInclusion(): boolean;
  setDefaultTableInclusion(value: boolean): void;

  getDefaultInfoGrouping(): boolean;
  setDefaultInfoGrouping(value: boolean): void;

  getDefaultSmallIcon(): boolean;
  setDefaultSmallIcon(value: boolean): void;

  getDefaultDescendingSort(): boolean;
  setDefaultDescendingSort(value: boolean): void;

  getTableTemplateSid(): number;
  setTableTemplateSid(value: number): void;

  hasDefaultCallTypes(): boolean;
  clearDefaultCallTypes(): void;
  getDefaultCallTypes(): IncludedCallTypes | undefined;
  setDefaultCallTypes(value?: IncludedCallTypes): void;

  getDefaultInfoSortByValue(): api_commons_org_pb.AgentInfoSortByMap[keyof api_commons_org_pb.AgentInfoSortByMap];
  setDefaultInfoSortByValue(value: api_commons_org_pb.AgentInfoSortByMap[keyof api_commons_org_pb.AgentInfoSortByMap]): void;

  hasDefaultBargeInFiltering(): boolean;
  clearDefaultBargeInFiltering(): void;
  getDefaultBargeInFiltering(): BargeInFiltering | undefined;
  setDefaultBargeInFiltering(value?: BargeInFiltering): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardPreferences): DashboardPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardPreferences;
  static deserializeBinaryFromReader(message: DashboardPreferences, reader: jspb.BinaryReader): DashboardPreferences;
}

export namespace DashboardPreferences {
  export type AsObject = {
    defaultInfoView: boolean,
    defaultTableInclusion: boolean,
    defaultInfoGrouping: boolean,
    defaultSmallIcon: boolean,
    defaultDescendingSort: boolean,
    tableTemplateSid: number,
    defaultCallTypes?: IncludedCallTypes.AsObject,
    defaultInfoSortByValue: api_commons_org_pb.AgentInfoSortByMap[keyof api_commons_org_pb.AgentInfoSortByMap],
    defaultBargeInFiltering?: BargeInFiltering.AsObject,
  }
}

export class IncludedCallTypes extends jspb.Message {
  getOutbound(): boolean;
  setOutbound(value: boolean): void;

  getInbound(): boolean;
  setInbound(value: boolean): void;

  getManualDial(): boolean;
  setManualDial(value: boolean): void;

  getPreviewDial(): boolean;
  setPreviewDial(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncludedCallTypes.AsObject;
  static toObject(includeInstance: boolean, msg: IncludedCallTypes): IncludedCallTypes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IncludedCallTypes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncludedCallTypes;
  static deserializeBinaryFromReader(message: IncludedCallTypes, reader: jspb.BinaryReader): IncludedCallTypes;
}

export namespace IncludedCallTypes {
  export type AsObject = {
    outbound: boolean,
    inbound: boolean,
    manualDial: boolean,
    previewDial: boolean,
  }
}

export class BargeInFiltering extends jspb.Message {
  hasHuntGroup(): boolean;
  clearHuntGroup(): void;
  getHuntGroup(): BargeInFiltering.HuntGroup | undefined;
  setHuntGroup(value?: BargeInFiltering.HuntGroup): void;

  hasAgentStatus(): boolean;
  clearAgentStatus(): void;
  getAgentStatus(): BargeInFiltering.AgentStatus | undefined;
  setAgentStatus(value?: BargeInFiltering.AgentStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BargeInFiltering.AsObject;
  static toObject(includeInstance: boolean, msg: BargeInFiltering): BargeInFiltering.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BargeInFiltering, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BargeInFiltering;
  static deserializeBinaryFromReader(message: BargeInFiltering, reader: jspb.BinaryReader): BargeInFiltering;
}

export namespace BargeInFiltering {
  export type AsObject = {
    huntGroup?: BargeInFiltering.HuntGroup.AsObject,
    agentStatus?: BargeInFiltering.AgentStatus.AsObject,
  }

  export class HuntGroup extends jspb.Message {
    getAny(): boolean;
    setAny(value: boolean): void;

    getHuntGroupSid(): number;
    setHuntGroupSid(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HuntGroup.AsObject;
    static toObject(includeInstance: boolean, msg: HuntGroup): HuntGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HuntGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HuntGroup;
    static deserializeBinaryFromReader(message: HuntGroup, reader: jspb.BinaryReader): HuntGroup;
  }

  export namespace HuntGroup {
    export type AsObject = {
      any: boolean,
      huntGroupSid: number,
    }
  }

  export class AgentStatus extends jspb.Message {
    getAny(): boolean;
    setAny(value: boolean): void;

    getWaiting(): boolean;
    setWaiting(value: boolean): void;

    getOnCall(): boolean;
    setOnCall(value: boolean): void;

    getWrapUp(): boolean;
    setWrapUp(value: boolean): void;

    getPaused(): boolean;
    setPaused(value: boolean): void;

    getTransfer(): boolean;
    setTransfer(value: boolean): void;

    getPreview(): boolean;
    setPreview(value: boolean): void;

    getManual(): boolean;
    setManual(value: boolean): void;

    getPbx(): boolean;
    setPbx(value: boolean): void;

    getIntercom(): boolean;
    setIntercom(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentStatus.AsObject;
    static toObject(includeInstance: boolean, msg: AgentStatus): AgentStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentStatus;
    static deserializeBinaryFromReader(message: AgentStatus, reader: jspb.BinaryReader): AgentStatus;
  }

  export namespace AgentStatus {
    export type AsObject = {
      any: boolean,
      waiting: boolean,
      onCall: boolean,
      wrapUp: boolean,
      paused: boolean,
      transfer: boolean,
      preview: boolean,
      manual: boolean,
      pbx: boolean,
      intercom: boolean,
    }
  }
}

export class GetDashboardQueuePreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDashboardQueuePreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDashboardQueuePreferencesRequest): GetDashboardQueuePreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDashboardQueuePreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDashboardQueuePreferencesRequest;
  static deserializeBinaryFromReader(message: GetDashboardQueuePreferencesRequest, reader: jspb.BinaryReader): GetDashboardQueuePreferencesRequest;
}

export namespace GetDashboardQueuePreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetDashboardQueuePreferencesResponse extends jspb.Message {
  hasDashboardQueuePreferences(): boolean;
  clearDashboardQueuePreferences(): void;
  getDashboardQueuePreferences(): DashboardQueuePreferences | undefined;
  setDashboardQueuePreferences(value?: DashboardQueuePreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDashboardQueuePreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDashboardQueuePreferencesResponse): GetDashboardQueuePreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDashboardQueuePreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDashboardQueuePreferencesResponse;
  static deserializeBinaryFromReader(message: GetDashboardQueuePreferencesResponse, reader: jspb.BinaryReader): GetDashboardQueuePreferencesResponse;
}

export namespace GetDashboardQueuePreferencesResponse {
  export type AsObject = {
    dashboardQueuePreferences?: DashboardQueuePreferences.AsObject,
  }
}

export class UpdateDashboardQueuePreferencesRequest extends jspb.Message {
  hasDashboardQueuePreferences(): boolean;
  clearDashboardQueuePreferences(): void;
  getDashboardQueuePreferences(): DashboardQueuePreferences | undefined;
  setDashboardQueuePreferences(value?: DashboardQueuePreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDashboardQueuePreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDashboardQueuePreferencesRequest): UpdateDashboardQueuePreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDashboardQueuePreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDashboardQueuePreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateDashboardQueuePreferencesRequest, reader: jspb.BinaryReader): UpdateDashboardQueuePreferencesRequest;
}

export namespace UpdateDashboardQueuePreferencesRequest {
  export type AsObject = {
    dashboardQueuePreferences?: DashboardQueuePreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateDashboardQueuePreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDashboardQueuePreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDashboardQueuePreferencesResponse): UpdateDashboardQueuePreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDashboardQueuePreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDashboardQueuePreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateDashboardQueuePreferencesResponse, reader: jspb.BinaryReader): UpdateDashboardQueuePreferencesResponse;
}

export namespace UpdateDashboardQueuePreferencesResponse {
  export type AsObject = {
  }
}

export class DashboardQueuePreferences extends jspb.Message {
  getDefaultInfoView(): boolean;
  setDefaultInfoView(value: boolean): void;

  getDefaultInfoGrouping(): boolean;
  setDefaultInfoGrouping(value: boolean): void;

  getDefaultSmallIcon(): boolean;
  setDefaultSmallIcon(value: boolean): void;

  getDefaultDescendingSort(): boolean;
  setDefaultDescendingSort(value: boolean): void;

  getDefaultAgentSkillsFilter(): number;
  setDefaultAgentSkillsFilter(value: number): void;

  getDefaultInfoTableTemplate(): number;
  setDefaultInfoTableTemplate(value: number): void;

  getDefaultInfoSortByValue(): api_commons_org_pb.QueueInfoSortByMap[keyof api_commons_org_pb.QueueInfoSortByMap];
  setDefaultInfoSortByValue(value: api_commons_org_pb.QueueInfoSortByMap[keyof api_commons_org_pb.QueueInfoSortByMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardQueuePreferences.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardQueuePreferences): DashboardQueuePreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardQueuePreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardQueuePreferences;
  static deserializeBinaryFromReader(message: DashboardQueuePreferences, reader: jspb.BinaryReader): DashboardQueuePreferences;
}

export namespace DashboardQueuePreferences {
  export type AsObject = {
    defaultInfoView: boolean,
    defaultInfoGrouping: boolean,
    defaultSmallIcon: boolean,
    defaultDescendingSort: boolean,
    defaultAgentSkillsFilter: number,
    defaultInfoTableTemplate: number,
    defaultInfoSortByValue: api_commons_org_pb.QueueInfoSortByMap[keyof api_commons_org_pb.QueueInfoSortByMap],
  }
}

export class GetPhonePreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPhonePreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPhonePreferencesRequest): GetPhonePreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPhonePreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPhonePreferencesRequest;
  static deserializeBinaryFromReader(message: GetPhonePreferencesRequest, reader: jspb.BinaryReader): GetPhonePreferencesRequest;
}

export namespace GetPhonePreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetPhonePreferencesResponse extends jspb.Message {
  hasPhonePreferences(): boolean;
  clearPhonePreferences(): void;
  getPhonePreferences(): PhonePreferences | undefined;
  setPhonePreferences(value?: PhonePreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPhonePreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPhonePreferencesResponse): GetPhonePreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPhonePreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPhonePreferencesResponse;
  static deserializeBinaryFromReader(message: GetPhonePreferencesResponse, reader: jspb.BinaryReader): GetPhonePreferencesResponse;
}

export namespace GetPhonePreferencesResponse {
  export type AsObject = {
    phonePreferences?: PhonePreferences.AsObject,
  }
}

export class UpdatePhonePreferencesRequest extends jspb.Message {
  hasPhonePreferences(): boolean;
  clearPhonePreferences(): void;
  getPhonePreferences(): PhonePreferences | undefined;
  setPhonePreferences(value?: PhonePreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePhonePreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePhonePreferencesRequest): UpdatePhonePreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePhonePreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePhonePreferencesRequest;
  static deserializeBinaryFromReader(message: UpdatePhonePreferencesRequest, reader: jspb.BinaryReader): UpdatePhonePreferencesRequest;
}

export namespace UpdatePhonePreferencesRequest {
  export type AsObject = {
    phonePreferences?: PhonePreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdatePhonePreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePhonePreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePhonePreferencesResponse): UpdatePhonePreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePhonePreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePhonePreferencesResponse;
  static deserializeBinaryFromReader(message: UpdatePhonePreferencesResponse, reader: jspb.BinaryReader): UpdatePhonePreferencesResponse;
}

export namespace UpdatePhonePreferencesResponse {
  export type AsObject = {
  }
}

export class PhonePreferences extends jspb.Message {
  getAgentPreviewDialing(): boolean;
  setAgentPreviewDialing(value: boolean): void;

  getDefaultRingLengthThreshold(): number;
  setDefaultRingLengthThreshold(value: number): void;

  getDisplayRingLengthThreshold(): boolean;
  setDisplayRingLengthThreshold(value: boolean): void;

  getShowCallerId(): boolean;
  setShowCallerId(value: boolean): void;

  getDefaultUseCallerId(): boolean;
  setDefaultUseCallerId(value: boolean): void;

  getOverrideLinkbackRecording(): boolean;
  setOverrideLinkbackRecording(value: boolean): void;

  getCallerIdCfdSid(): number;
  setCallerIdCfdSid(value: number): void;

  hasDefaultDialOrder(): boolean;
  clearDefaultDialOrder(): void;
  getDefaultDialOrder(): DialOrder | undefined;
  setDefaultDialOrder(value?: DialOrder): void;

  getAnsweringMachineDetection(): api_commons_org_preferences_pb.AnsweringMachineDetectionMap[keyof api_commons_org_preferences_pb.AnsweringMachineDetectionMap];
  setAnsweringMachineDetection(value: api_commons_org_preferences_pb.AnsweringMachineDetectionMap[keyof api_commons_org_preferences_pb.AnsweringMachineDetectionMap]): void;

  getLinkbackRecording(): boolean;
  setLinkbackRecording(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhonePreferences.AsObject;
  static toObject(includeInstance: boolean, msg: PhonePreferences): PhonePreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PhonePreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhonePreferences;
  static deserializeBinaryFromReader(message: PhonePreferences, reader: jspb.BinaryReader): PhonePreferences;
}

export namespace PhonePreferences {
  export type AsObject = {
    agentPreviewDialing: boolean,
    defaultRingLengthThreshold: number,
    displayRingLengthThreshold: boolean,
    showCallerId: boolean,
    defaultUseCallerId: boolean,
    overrideLinkbackRecording: boolean,
    callerIdCfdSid: number,
    defaultDialOrder?: DialOrder.AsObject,
    answeringMachineDetection: api_commons_org_preferences_pb.AnsweringMachineDetectionMap[keyof api_commons_org_preferences_pb.AnsweringMachineDetectionMap],
    linkbackRecording: boolean,
  }
}

export class DialOrder extends jspb.Message {
  hasStandardOrder(): boolean;
  clearStandardOrder(): void;
  getStandardOrder(): api_commons_lms_pb.DialOrderTypeMap[keyof api_commons_lms_pb.DialOrderTypeMap];
  setStandardOrder(value: api_commons_lms_pb.DialOrderTypeMap[keyof api_commons_lms_pb.DialOrderTypeMap]): void;

  hasCustomOrder(): boolean;
  clearCustomOrder(): void;
  getCustomOrder(): CustomDialOrder | undefined;
  setCustomOrder(value?: CustomDialOrder): void;

  getTypeCase(): DialOrder.TypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DialOrder.AsObject;
  static toObject(includeInstance: boolean, msg: DialOrder): DialOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DialOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DialOrder;
  static deserializeBinaryFromReader(message: DialOrder, reader: jspb.BinaryReader): DialOrder;
}

export namespace DialOrder {
  export type AsObject = {
    standardOrder: api_commons_lms_pb.DialOrderTypeMap[keyof api_commons_lms_pb.DialOrderTypeMap],
    customOrder?: CustomDialOrder.AsObject,
  }

  export enum TypeCase {
    TYPE_NOT_SET = 0,
    STANDARD_ORDER = 1,
    CUSTOM_ORDER = 2,
  }
}

export class CustomDialOrder extends jspb.Message {
  clearDialOrderFieldsList(): void;
  getDialOrderFieldsList(): Array<DialOrderField>;
  setDialOrderFieldsList(value: Array<DialOrderField>): void;
  addDialOrderFields(value?: DialOrderField, index?: number): DialOrderField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomDialOrder.AsObject;
  static toObject(includeInstance: boolean, msg: CustomDialOrder): CustomDialOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomDialOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomDialOrder;
  static deserializeBinaryFromReader(message: CustomDialOrder, reader: jspb.BinaryReader): CustomDialOrder;
}

export namespace CustomDialOrder {
  export type AsObject = {
    dialOrderFieldsList: Array<DialOrderField.AsObject>,
  }
}

export class DialOrderField extends jspb.Message {
  getCfdSid(): number;
  setCfdSid(value: number): void;

  getFieldName(): string;
  setFieldName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DialOrderField.AsObject;
  static toObject(includeInstance: boolean, msg: DialOrderField): DialOrderField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DialOrderField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DialOrderField;
  static deserializeBinaryFromReader(message: DialOrderField, reader: jspb.BinaryReader): DialOrderField;
}

export namespace DialOrderField {
  export type AsObject = {
    cfdSid: number,
    fieldName: string,
  }
}

export class GetCompliancePreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompliancePreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCompliancePreferencesRequest): GetCompliancePreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCompliancePreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompliancePreferencesRequest;
  static deserializeBinaryFromReader(message: GetCompliancePreferencesRequest, reader: jspb.BinaryReader): GetCompliancePreferencesRequest;
}

export namespace GetCompliancePreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetCompliancePreferencesResponse extends jspb.Message {
  hasCompliancePreferences(): boolean;
  clearCompliancePreferences(): void;
  getCompliancePreferences(): CompliancePreferences | undefined;
  setCompliancePreferences(value?: CompliancePreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompliancePreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCompliancePreferencesResponse): GetCompliancePreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCompliancePreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompliancePreferencesResponse;
  static deserializeBinaryFromReader(message: GetCompliancePreferencesResponse, reader: jspb.BinaryReader): GetCompliancePreferencesResponse;
}

export namespace GetCompliancePreferencesResponse {
  export type AsObject = {
    compliancePreferences?: CompliancePreferences.AsObject,
  }
}

export class UpdateCompliancePreferencesRequest extends jspb.Message {
  hasCompliancePreferences(): boolean;
  clearCompliancePreferences(): void;
  getCompliancePreferences(): CompliancePreferences | undefined;
  setCompliancePreferences(value?: CompliancePreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCompliancePreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCompliancePreferencesRequest): UpdateCompliancePreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCompliancePreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCompliancePreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateCompliancePreferencesRequest, reader: jspb.BinaryReader): UpdateCompliancePreferencesRequest;
}

export namespace UpdateCompliancePreferencesRequest {
  export type AsObject = {
    compliancePreferences?: CompliancePreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateCompliancePreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCompliancePreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCompliancePreferencesResponse): UpdateCompliancePreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCompliancePreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCompliancePreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateCompliancePreferencesResponse, reader: jspb.BinaryReader): UpdateCompliancePreferencesResponse;
}

export namespace UpdateCompliancePreferencesResponse {
  export type AsObject = {
  }
}

export class CompliancePreferences extends jspb.Message {
  getDisplayAfterHoursCalls(): boolean;
  setDisplayAfterHoursCalls(value: boolean): void;

  getAfterHoursCalls(): boolean;
  setAfterHoursCalls(value: boolean): void;

  getDisplayNaturalCompliance(): boolean;
  setDisplayNaturalCompliance(value: boolean): void;

  getUseNaturalCompliance(): boolean;
  setUseNaturalCompliance(value: boolean): void;

  getDefaultComplianceRuleSet(): string;
  setDefaultComplianceRuleSet(value: string): void;

  getDisplayCellPhoneScrub(): boolean;
  setDisplayCellPhoneScrub(value: boolean): void;

  getCellPhoneScrub(): boolean;
  setCellPhoneScrub(value: boolean): void;

  getDisplayScheduleRules(): boolean;
  setDisplayScheduleRules(value: boolean): void;

  getUseScheduleRules(): boolean;
  setUseScheduleRules(value: boolean): void;

  hasDefaultScheduleRule(): boolean;
  clearDefaultScheduleRule(): void;
  getDefaultScheduleRule(): ScheduleRuleField | undefined;
  setDefaultScheduleRule(value?: ScheduleRuleField): void;

  getDoZipCodeScrub(): boolean;
  setDoZipCodeScrub(value: boolean): void;

  hasZipCodeScrub(): boolean;
  clearZipCodeScrub(): void;
  getZipCodeScrub(): ZipCodeField | undefined;
  setZipCodeScrub(value?: ZipCodeField): void;

  getDefaultEmailComplianceList(): string;
  setDefaultEmailComplianceList(value: string): void;

  getDefaultSmsComplianceList(): string;
  setDefaultSmsComplianceList(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompliancePreferences.AsObject;
  static toObject(includeInstance: boolean, msg: CompliancePreferences): CompliancePreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompliancePreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompliancePreferences;
  static deserializeBinaryFromReader(message: CompliancePreferences, reader: jspb.BinaryReader): CompliancePreferences;
}

export namespace CompliancePreferences {
  export type AsObject = {
    displayAfterHoursCalls: boolean,
    afterHoursCalls: boolean,
    displayNaturalCompliance: boolean,
    useNaturalCompliance: boolean,
    defaultComplianceRuleSet: string,
    displayCellPhoneScrub: boolean,
    cellPhoneScrub: boolean,
    displayScheduleRules: boolean,
    useScheduleRules: boolean,
    defaultScheduleRule?: ScheduleRuleField.AsObject,
    doZipCodeScrub: boolean,
    zipCodeScrub?: ZipCodeField.AsObject,
    defaultEmailComplianceList: string,
    defaultSmsComplianceList: string,
  }
}

export class ScheduleRuleField extends jspb.Message {
  getRuleId(): number;
  setRuleId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleRuleField.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleRuleField): ScheduleRuleField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleRuleField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleRuleField;
  static deserializeBinaryFromReader(message: ScheduleRuleField, reader: jspb.BinaryReader): ScheduleRuleField;
}

export namespace ScheduleRuleField {
  export type AsObject = {
    ruleId: number,
    name: string,
  }
}

export class ZipCodeField extends jspb.Message {
  getCfdSid(): number;
  setCfdSid(value: number): void;

  getFieldName(): string;
  setFieldName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZipCodeField.AsObject;
  static toObject(includeInstance: boolean, msg: ZipCodeField): ZipCodeField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ZipCodeField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZipCodeField;
  static deserializeBinaryFromReader(message: ZipCodeField, reader: jspb.BinaryReader): ZipCodeField;
}

export namespace ZipCodeField {
  export type AsObject = {
    cfdSid: number,
    fieldName: string,
  }
}

export class GetBroadcastPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBroadcastPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBroadcastPreferencesRequest): GetBroadcastPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBroadcastPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBroadcastPreferencesRequest;
  static deserializeBinaryFromReader(message: GetBroadcastPreferencesRequest, reader: jspb.BinaryReader): GetBroadcastPreferencesRequest;
}

export namespace GetBroadcastPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetBroadcastPreferencesResponse extends jspb.Message {
  hasBroadcastPreferences(): boolean;
  clearBroadcastPreferences(): void;
  getBroadcastPreferences(): BroadcastPreferences | undefined;
  setBroadcastPreferences(value?: BroadcastPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBroadcastPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBroadcastPreferencesResponse): GetBroadcastPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBroadcastPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBroadcastPreferencesResponse;
  static deserializeBinaryFromReader(message: GetBroadcastPreferencesResponse, reader: jspb.BinaryReader): GetBroadcastPreferencesResponse;
}

export namespace GetBroadcastPreferencesResponse {
  export type AsObject = {
    broadcastPreferences?: BroadcastPreferences.AsObject,
  }
}

export class UpdateBroadcastPreferencesRequest extends jspb.Message {
  hasBroadcastPreferences(): boolean;
  clearBroadcastPreferences(): void;
  getBroadcastPreferences(): BroadcastPreferences | undefined;
  setBroadcastPreferences(value?: BroadcastPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBroadcastPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBroadcastPreferencesRequest): UpdateBroadcastPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBroadcastPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBroadcastPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateBroadcastPreferencesRequest, reader: jspb.BinaryReader): UpdateBroadcastPreferencesRequest;
}

export namespace UpdateBroadcastPreferencesRequest {
  export type AsObject = {
    broadcastPreferences?: BroadcastPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateBroadcastPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBroadcastPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBroadcastPreferencesResponse): UpdateBroadcastPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBroadcastPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBroadcastPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateBroadcastPreferencesResponse, reader: jspb.BinaryReader): UpdateBroadcastPreferencesResponse;
}

export namespace UpdateBroadcastPreferencesResponse {
  export type AsObject = {
  }
}

export class BroadcastPreferences extends jspb.Message {
  getDialListPenetrationStrategy(): boolean;
  setDialListPenetrationStrategy(value: boolean): void;

  getDisplayListPenetrationStrategy(): boolean;
  setDisplayListPenetrationStrategy(value: boolean): void;

  getDisplayFollowTheSun(): boolean;
  setDisplayFollowTheSun(value: boolean): void;

  getFollowTheSun(): boolean;
  setFollowTheSun(value: boolean): void;

  getSequenceTerminatorOverride(): boolean;
  setSequenceTerminatorOverride(value: boolean): void;

  getBroadcastTemplateOrdering(): api_commons_org_preferences_pb.BroadcastTemplateOrderingMap[keyof api_commons_org_preferences_pb.BroadcastTemplateOrderingMap];
  setBroadcastTemplateOrdering(value: api_commons_org_preferences_pb.BroadcastTemplateOrderingMap[keyof api_commons_org_preferences_pb.BroadcastTemplateOrderingMap]): void;

  clearEmailFromAddressesList(): void;
  getEmailFromAddressesList(): Array<string>;
  setEmailFromAddressesList(value: Array<string>): void;
  addEmailFromAddresses(value: string, index?: number): string;

  getStartTimeEnabled(): boolean;
  setStartTimeEnabled(value: boolean): void;

  hasDefaultStartTime(): boolean;
  clearDefaultStartTime(): void;
  getDefaultStartTime(): BroadcastTime | undefined;
  setDefaultStartTime(value?: BroadcastTime): void;

  getStopTimeEnabled(): boolean;
  setStopTimeEnabled(value: boolean): void;

  hasDefaultStopTime(): boolean;
  clearDefaultStopTime(): void;
  getDefaultStopTime(): BroadcastTime | undefined;
  setDefaultStopTime(value?: BroadcastTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: BroadcastPreferences): BroadcastPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BroadcastPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastPreferences;
  static deserializeBinaryFromReader(message: BroadcastPreferences, reader: jspb.BinaryReader): BroadcastPreferences;
}

export namespace BroadcastPreferences {
  export type AsObject = {
    dialListPenetrationStrategy: boolean,
    displayListPenetrationStrategy: boolean,
    displayFollowTheSun: boolean,
    followTheSun: boolean,
    sequenceTerminatorOverride: boolean,
    broadcastTemplateOrdering: api_commons_org_preferences_pb.BroadcastTemplateOrderingMap[keyof api_commons_org_preferences_pb.BroadcastTemplateOrderingMap],
    emailFromAddressesList: Array<string>,
    startTimeEnabled: boolean,
    defaultStartTime?: BroadcastTime.AsObject,
    stopTimeEnabled: boolean,
    defaultStopTime?: BroadcastTime.AsObject,
  }
}

export class BroadcastTime extends jspb.Message {
  getHours(): number;
  setHours(value: number): void;

  getMinutes(): number;
  setMinutes(value: number): void;

  getTimezone(): api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap];
  setTimezone(value: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastTime.AsObject;
  static toObject(includeInstance: boolean, msg: BroadcastTime): BroadcastTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BroadcastTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastTime;
  static deserializeBinaryFromReader(message: BroadcastTime, reader: jspb.BinaryReader): BroadcastTime;
}

export namespace BroadcastTime {
  export type AsObject = {
    hours: number,
    minutes: number,
    timezone: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap],
  }
}

export class GetSchedulePreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSchedulePreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSchedulePreferencesRequest): GetSchedulePreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSchedulePreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSchedulePreferencesRequest;
  static deserializeBinaryFromReader(message: GetSchedulePreferencesRequest, reader: jspb.BinaryReader): GetSchedulePreferencesRequest;
}

export namespace GetSchedulePreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetSchedulePreferencesResponse extends jspb.Message {
  hasSchedulePreferences(): boolean;
  clearSchedulePreferences(): void;
  getSchedulePreferences(): SchedulePreferences | undefined;
  setSchedulePreferences(value?: SchedulePreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSchedulePreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSchedulePreferencesResponse): GetSchedulePreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSchedulePreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSchedulePreferencesResponse;
  static deserializeBinaryFromReader(message: GetSchedulePreferencesResponse, reader: jspb.BinaryReader): GetSchedulePreferencesResponse;
}

export namespace GetSchedulePreferencesResponse {
  export type AsObject = {
    schedulePreferences?: SchedulePreferences.AsObject,
  }
}

export class UpdateSchedulePreferencesRequest extends jspb.Message {
  hasSchedulePreferences(): boolean;
  clearSchedulePreferences(): void;
  getSchedulePreferences(): SchedulePreferences | undefined;
  setSchedulePreferences(value?: SchedulePreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSchedulePreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSchedulePreferencesRequest): UpdateSchedulePreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSchedulePreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSchedulePreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateSchedulePreferencesRequest, reader: jspb.BinaryReader): UpdateSchedulePreferencesRequest;
}

export namespace UpdateSchedulePreferencesRequest {
  export type AsObject = {
    schedulePreferences?: SchedulePreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateSchedulePreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSchedulePreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSchedulePreferencesResponse): UpdateSchedulePreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSchedulePreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSchedulePreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateSchedulePreferencesResponse, reader: jspb.BinaryReader): UpdateSchedulePreferencesResponse;
}

export namespace UpdateSchedulePreferencesResponse {
  export type AsObject = {
  }
}

export class SchedulePreferences extends jspb.Message {
  getDisplayScheduleByTimeZone(): boolean;
  setDisplayScheduleByTimeZone(value: boolean): void;

  getUseScheduleByTimeZone(): boolean;
  setUseScheduleByTimeZone(value: boolean): void;

  getScheduleByTimeZoneScope(): api_commons_org_preferences_pb.ScheduleByTimeZoneScopeMap[keyof api_commons_org_preferences_pb.ScheduleByTimeZoneScopeMap];
  setScheduleByTimeZoneScope(value: api_commons_org_preferences_pb.ScheduleByTimeZoneScopeMap[keyof api_commons_org_preferences_pb.ScheduleByTimeZoneScopeMap]): void;

  getDisplayScheduleAsPaused(): boolean;
  setDisplayScheduleAsPaused(value: boolean): void;

  getScheduleAsPaused(): boolean;
  setScheduleAsPaused(value: boolean): void;

  getDefaultCompletionThreshold(): number;
  setDefaultCompletionThreshold(value: number): void;

  getDisplayCampaignLinking(): boolean;
  setDisplayCampaignLinking(value: boolean): void;

  getUseCampaignLinking(): boolean;
  setUseCampaignLinking(value: boolean): void;

  getCampaignLinksMap(): jspb.Map<string, string>;
  clearCampaignLinksMap(): void;
  getDefaultCampaignLinkId(): string;
  setDefaultCampaignLinkId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchedulePreferences.AsObject;
  static toObject(includeInstance: boolean, msg: SchedulePreferences): SchedulePreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SchedulePreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchedulePreferences;
  static deserializeBinaryFromReader(message: SchedulePreferences, reader: jspb.BinaryReader): SchedulePreferences;
}

export namespace SchedulePreferences {
  export type AsObject = {
    displayScheduleByTimeZone: boolean,
    useScheduleByTimeZone: boolean,
    scheduleByTimeZoneScope: api_commons_org_preferences_pb.ScheduleByTimeZoneScopeMap[keyof api_commons_org_preferences_pb.ScheduleByTimeZoneScopeMap],
    displayScheduleAsPaused: boolean,
    scheduleAsPaused: boolean,
    defaultCompletionThreshold: number,
    displayCampaignLinking: boolean,
    useCampaignLinking: boolean,
    campaignLinksMap: Array<[string, string]>,
    defaultCampaignLinkId: string,
  }
}

export class GetEmailSmsPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmailSmsPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmailSmsPreferencesRequest): GetEmailSmsPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmailSmsPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmailSmsPreferencesRequest;
  static deserializeBinaryFromReader(message: GetEmailSmsPreferencesRequest, reader: jspb.BinaryReader): GetEmailSmsPreferencesRequest;
}

export namespace GetEmailSmsPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetEmailSmsPreferencesResponse extends jspb.Message {
  hasEmailSmsPreferences(): boolean;
  clearEmailSmsPreferences(): void;
  getEmailSmsPreferences(): EmailSmsPreferences | undefined;
  setEmailSmsPreferences(value?: EmailSmsPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmailSmsPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmailSmsPreferencesResponse): GetEmailSmsPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmailSmsPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmailSmsPreferencesResponse;
  static deserializeBinaryFromReader(message: GetEmailSmsPreferencesResponse, reader: jspb.BinaryReader): GetEmailSmsPreferencesResponse;
}

export namespace GetEmailSmsPreferencesResponse {
  export type AsObject = {
    emailSmsPreferences?: EmailSmsPreferences.AsObject,
  }
}

export class UpdateEmailSmsPreferencesRequest extends jspb.Message {
  hasEmailSmsPreferences(): boolean;
  clearEmailSmsPreferences(): void;
  getEmailSmsPreferences(): EmailSmsPreferences | undefined;
  setEmailSmsPreferences(value?: EmailSmsPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEmailSmsPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEmailSmsPreferencesRequest): UpdateEmailSmsPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEmailSmsPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEmailSmsPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateEmailSmsPreferencesRequest, reader: jspb.BinaryReader): UpdateEmailSmsPreferencesRequest;
}

export namespace UpdateEmailSmsPreferencesRequest {
  export type AsObject = {
    emailSmsPreferences?: EmailSmsPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateEmailSmsPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEmailSmsPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEmailSmsPreferencesResponse): UpdateEmailSmsPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEmailSmsPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEmailSmsPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateEmailSmsPreferencesResponse, reader: jspb.BinaryReader): UpdateEmailSmsPreferencesResponse;
}

export namespace UpdateEmailSmsPreferencesResponse {
  export type AsObject = {
  }
}

export class EmailSmsPreferences extends jspb.Message {
  getUseCustomLinks(): boolean;
  setUseCustomLinks(value: boolean): void;

  getClientAcknowledgement(): boolean;
  setClientAcknowledgement(value: boolean): void;

  clearEmailFromAddressesList(): void;
  getEmailFromAddressesList(): Array<string>;
  setEmailFromAddressesList(value: Array<string>): void;
  addEmailFromAddresses(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailSmsPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: EmailSmsPreferences): EmailSmsPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailSmsPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailSmsPreferences;
  static deserializeBinaryFromReader(message: EmailSmsPreferences, reader: jspb.BinaryReader): EmailSmsPreferences;
}

export namespace EmailSmsPreferences {
  export type AsObject = {
    useCustomLinks: boolean,
    clientAcknowledgement: boolean,
    emailFromAddressesList: Array<string>,
  }
}

export class GetBusinessPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessPreferencesRequest): GetBusinessPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBusinessPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessPreferencesRequest;
  static deserializeBinaryFromReader(message: GetBusinessPreferencesRequest, reader: jspb.BinaryReader): GetBusinessPreferencesRequest;
}

export namespace GetBusinessPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetBusinessPreferencesResponse extends jspb.Message {
  hasBusinessPreferences(): boolean;
  clearBusinessPreferences(): void;
  getBusinessPreferences(): BusinessPreferences | undefined;
  setBusinessPreferences(value?: BusinessPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessPreferencesResponse): GetBusinessPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBusinessPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessPreferencesResponse;
  static deserializeBinaryFromReader(message: GetBusinessPreferencesResponse, reader: jspb.BinaryReader): GetBusinessPreferencesResponse;
}

export namespace GetBusinessPreferencesResponse {
  export type AsObject = {
    businessPreferences?: BusinessPreferences.AsObject,
  }
}

export class UpdateBusinessPreferencesRequest extends jspb.Message {
  hasBusinessPreferences(): boolean;
  clearBusinessPreferences(): void;
  getBusinessPreferences(): BusinessPreferences | undefined;
  setBusinessPreferences(value?: BusinessPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessPreferencesRequest): UpdateBusinessPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBusinessPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateBusinessPreferencesRequest, reader: jspb.BinaryReader): UpdateBusinessPreferencesRequest;
}

export namespace UpdateBusinessPreferencesRequest {
  export type AsObject = {
    businessPreferences?: BusinessPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateBusinessPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessPreferencesResponse): UpdateBusinessPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBusinessPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateBusinessPreferencesResponse, reader: jspb.BinaryReader): UpdateBusinessPreferencesResponse;
}

export namespace UpdateBusinessPreferencesResponse {
  export type AsObject = {
  }
}

export class BusinessPreferences extends jspb.Message {
  getWeeksOfData(): number;
  setWeeksOfData(value: number): void;

  getTimeZone(): api_commons_ana_pb.AnaTimeZoneMap[keyof api_commons_ana_pb.AnaTimeZoneMap];
  setTimeZone(value: api_commons_ana_pb.AnaTimeZoneMap[keyof api_commons_ana_pb.AnaTimeZoneMap]): void;

  getMultiClientAccess(): boolean;
  setMultiClientAccess(value: boolean): void;

  getCustomVisualizations(): boolean;
  setCustomVisualizations(value: boolean): void;

  getTimeFilter(): string;
  setTimeFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessPreferences): BusinessPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BusinessPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessPreferences;
  static deserializeBinaryFromReader(message: BusinessPreferences, reader: jspb.BinaryReader): BusinessPreferences;
}

export namespace BusinessPreferences {
  export type AsObject = {
    weeksOfData: number,
    timeZone: api_commons_ana_pb.AnaTimeZoneMap[keyof api_commons_ana_pb.AnaTimeZoneMap],
    multiClientAccess: boolean,
    customVisualizations: boolean,
    timeFilter: string,
  }
}

export class GetVoiceAnalyticsPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVoiceAnalyticsPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVoiceAnalyticsPreferencesRequest): GetVoiceAnalyticsPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVoiceAnalyticsPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVoiceAnalyticsPreferencesRequest;
  static deserializeBinaryFromReader(message: GetVoiceAnalyticsPreferencesRequest, reader: jspb.BinaryReader): GetVoiceAnalyticsPreferencesRequest;
}

export namespace GetVoiceAnalyticsPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetVoiceAnalyticsPreferencesResponse extends jspb.Message {
  hasVoiceAnalyticsPreferences(): boolean;
  clearVoiceAnalyticsPreferences(): void;
  getVoiceAnalyticsPreferences(): VoiceAnalyticsPreferences | undefined;
  setVoiceAnalyticsPreferences(value?: VoiceAnalyticsPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVoiceAnalyticsPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVoiceAnalyticsPreferencesResponse): GetVoiceAnalyticsPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVoiceAnalyticsPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVoiceAnalyticsPreferencesResponse;
  static deserializeBinaryFromReader(message: GetVoiceAnalyticsPreferencesResponse, reader: jspb.BinaryReader): GetVoiceAnalyticsPreferencesResponse;
}

export namespace GetVoiceAnalyticsPreferencesResponse {
  export type AsObject = {
    voiceAnalyticsPreferences?: VoiceAnalyticsPreferences.AsObject,
  }
}

export class UpdateVoiceAnalyticsPreferencesRequest extends jspb.Message {
  hasVoiceAnalyticsPreferences(): boolean;
  clearVoiceAnalyticsPreferences(): void;
  getVoiceAnalyticsPreferences(): VoiceAnalyticsPreferences | undefined;
  setVoiceAnalyticsPreferences(value?: VoiceAnalyticsPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVoiceAnalyticsPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVoiceAnalyticsPreferencesRequest): UpdateVoiceAnalyticsPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateVoiceAnalyticsPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVoiceAnalyticsPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateVoiceAnalyticsPreferencesRequest, reader: jspb.BinaryReader): UpdateVoiceAnalyticsPreferencesRequest;
}

export namespace UpdateVoiceAnalyticsPreferencesRequest {
  export type AsObject = {
    voiceAnalyticsPreferences?: VoiceAnalyticsPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateVoiceAnalyticsPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVoiceAnalyticsPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVoiceAnalyticsPreferencesResponse): UpdateVoiceAnalyticsPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateVoiceAnalyticsPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVoiceAnalyticsPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateVoiceAnalyticsPreferencesResponse, reader: jspb.BinaryReader): UpdateVoiceAnalyticsPreferencesResponse;
}

export namespace UpdateVoiceAnalyticsPreferencesResponse {
  export type AsObject = {
  }
}

export class UpdateVoiceAnalyticsPreferencesEnabledRequest extends jspb.Message {
  hasVoiceAnalyticsPreferences(): boolean;
  clearVoiceAnalyticsPreferences(): void;
  getVoiceAnalyticsPreferences(): VoiceAnalyticsPreferences | undefined;
  setVoiceAnalyticsPreferences(value?: VoiceAnalyticsPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVoiceAnalyticsPreferencesEnabledRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVoiceAnalyticsPreferencesEnabledRequest): UpdateVoiceAnalyticsPreferencesEnabledRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateVoiceAnalyticsPreferencesEnabledRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVoiceAnalyticsPreferencesEnabledRequest;
  static deserializeBinaryFromReader(message: UpdateVoiceAnalyticsPreferencesEnabledRequest, reader: jspb.BinaryReader): UpdateVoiceAnalyticsPreferencesEnabledRequest;
}

export namespace UpdateVoiceAnalyticsPreferencesEnabledRequest {
  export type AsObject = {
    voiceAnalyticsPreferences?: VoiceAnalyticsPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateVoiceAnalyticsPreferencesEnabledResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVoiceAnalyticsPreferencesEnabledResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVoiceAnalyticsPreferencesEnabledResponse): UpdateVoiceAnalyticsPreferencesEnabledResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateVoiceAnalyticsPreferencesEnabledResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVoiceAnalyticsPreferencesEnabledResponse;
  static deserializeBinaryFromReader(message: UpdateVoiceAnalyticsPreferencesEnabledResponse, reader: jspb.BinaryReader): UpdateVoiceAnalyticsPreferencesEnabledResponse;
}

export namespace UpdateVoiceAnalyticsPreferencesEnabledResponse {
  export type AsObject = {
  }
}

export class VoiceAnalyticsPreferences extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  clearRedactList(): void;
  getRedactList(): Array<VoiceAnalytics.Redact>;
  setRedactList(value: Array<VoiceAnalytics.Redact>): void;
  addRedact(value?: VoiceAnalytics.Redact, index?: number): VoiceAnalytics.Redact;

  hasNotify(): boolean;
  clearNotify(): void;
  getNotify(): VoiceAnalytics.Notify | undefined;
  setNotify(value?: VoiceAnalytics.Notify): void;

  hasBillingNotify(): boolean;
  clearBillingNotify(): void;
  getBillingNotify(): VoiceAnalytics.Notify | undefined;
  setBillingNotify(value?: VoiceAnalytics.Notify): void;

  getNumberFormat(): string;
  setNumberFormat(value: string): void;

  getRedactAllDigits(): boolean;
  setRedactAllDigits(value: boolean): void;

  getSilenceThreshold(): number;
  setSilenceThreshold(value: number): void;

  getTalkOverThreshold(): number;
  setTalkOverThreshold(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoiceAnalyticsPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: VoiceAnalyticsPreferences): VoiceAnalyticsPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VoiceAnalyticsPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoiceAnalyticsPreferences;
  static deserializeBinaryFromReader(message: VoiceAnalyticsPreferences, reader: jspb.BinaryReader): VoiceAnalyticsPreferences;
}

export namespace VoiceAnalyticsPreferences {
  export type AsObject = {
    enabled: boolean,
    redactList: Array<VoiceAnalytics.Redact.AsObject>,
    notify?: VoiceAnalytics.Notify.AsObject,
    billingNotify?: VoiceAnalytics.Notify.AsObject,
    numberFormat: string,
    redactAllDigits: boolean,
    silenceThreshold: number,
    talkOverThreshold: number,
  }
}

export class VoiceAnalytics extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoiceAnalytics.AsObject;
  static toObject(includeInstance: boolean, msg: VoiceAnalytics): VoiceAnalytics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VoiceAnalytics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoiceAnalytics;
  static deserializeBinaryFromReader(message: VoiceAnalytics, reader: jspb.BinaryReader): VoiceAnalytics;
}

export namespace VoiceAnalytics {
  export type AsObject = {
  }

  export class Redact extends jspb.Message {
    hasNumber(): boolean;
    clearNumber(): void;
    getNumber(): VoiceAnalytics.Number | undefined;
    setNumber(value?: VoiceAnalytics.Number): void;

    getWhereCase(): Redact.WhereCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Redact.AsObject;
    static toObject(includeInstance: boolean, msg: Redact): Redact.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Redact, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Redact;
    static deserializeBinaryFromReader(message: Redact, reader: jspb.BinaryReader): Redact;
  }

  export namespace Redact {
    export type AsObject = {
      number?: VoiceAnalytics.Number.AsObject,
    }

    export enum WhereCase {
      WHERE_NOT_SET = 0,
      NUMBER = 1,
    }
  }

  export class Number extends jspb.Message {
    getKind(): VoiceAnalytics.Number.KindMap[keyof VoiceAnalytics.Number.KindMap];
    setKind(value: VoiceAnalytics.Number.KindMap[keyof VoiceAnalytics.Number.KindMap]): void;

    getMinConsecutive(): number;
    setMinConsecutive(value: number): void;

    getMaxConsecutive(): number;
    setMaxConsecutive(value: number): void;

    getSlop(): number;
    setSlop(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Number.AsObject;
    static toObject(includeInstance: boolean, msg: Number): Number.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Number, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Number;
    static deserializeBinaryFromReader(message: Number, reader: jspb.BinaryReader): Number;
  }

  export namespace Number {
    export type AsObject = {
      kind: VoiceAnalytics.Number.KindMap[keyof VoiceAnalytics.Number.KindMap],
      minConsecutive: number,
      maxConsecutive: number,
      slop: number,
    }

    export interface KindMap {
      CARDINAL: 0;
      ORDINAL: 1;
      ANY: 2;
    }

    export const Kind: KindMap;
  }

  export class Notify extends jspb.Message {
    getCron(): string;
    setCron(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Notify.AsObject;
    static toObject(includeInstance: boolean, msg: Notify): Notify.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Notify, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Notify;
    static deserializeBinaryFromReader(message: Notify, reader: jspb.BinaryReader): Notify;
  }

  export namespace Notify {
    export type AsObject = {
      cron: string,
    }
  }
}

export class GetScorecardsPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScorecardsPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetScorecardsPreferencesRequest): GetScorecardsPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScorecardsPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScorecardsPreferencesRequest;
  static deserializeBinaryFromReader(message: GetScorecardsPreferencesRequest, reader: jspb.BinaryReader): GetScorecardsPreferencesRequest;
}

export namespace GetScorecardsPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetScorecardsPreferencesResponse extends jspb.Message {
  hasScorecardsPreferences(): boolean;
  clearScorecardsPreferences(): void;
  getScorecardsPreferences(): ScorecardsPreferences | undefined;
  setScorecardsPreferences(value?: ScorecardsPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScorecardsPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetScorecardsPreferencesResponse): GetScorecardsPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScorecardsPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScorecardsPreferencesResponse;
  static deserializeBinaryFromReader(message: GetScorecardsPreferencesResponse, reader: jspb.BinaryReader): GetScorecardsPreferencesResponse;
}

export namespace GetScorecardsPreferencesResponse {
  export type AsObject = {
    scorecardsPreferences?: ScorecardsPreferences.AsObject,
  }
}

export class UpdateScorecardsPreferencesRequest extends jspb.Message {
  hasScorecardsPreferences(): boolean;
  clearScorecardsPreferences(): void;
  getScorecardsPreferences(): ScorecardsPreferences | undefined;
  setScorecardsPreferences(value?: ScorecardsPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScorecardsPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScorecardsPreferencesRequest): UpdateScorecardsPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScorecardsPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScorecardsPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateScorecardsPreferencesRequest, reader: jspb.BinaryReader): UpdateScorecardsPreferencesRequest;
}

export namespace UpdateScorecardsPreferencesRequest {
  export type AsObject = {
    scorecardsPreferences?: ScorecardsPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateScorecardsPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScorecardsPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScorecardsPreferencesResponse): UpdateScorecardsPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScorecardsPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScorecardsPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateScorecardsPreferencesResponse, reader: jspb.BinaryReader): UpdateScorecardsPreferencesResponse;
}

export namespace UpdateScorecardsPreferencesResponse {
  export type AsObject = {
  }
}

export class ScorecardsPreferences extends jspb.Message {
  getCallSamplePercentage(): number;
  setCallSamplePercentage(value: number): void;

  getMaxUserEvaluations(): number;
  setMaxUserEvaluations(value: number): void;

  getEvaluationInterval(): Scorecards.EvaluationIntervalMap[keyof Scorecards.EvaluationIntervalMap];
  setEvaluationInterval(value: Scorecards.EvaluationIntervalMap[keyof Scorecards.EvaluationIntervalMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsPreferences): ScorecardsPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsPreferences;
  static deserializeBinaryFromReader(message: ScorecardsPreferences, reader: jspb.BinaryReader): ScorecardsPreferences;
}

export namespace ScorecardsPreferences {
  export type AsObject = {
    callSamplePercentage: number,
    maxUserEvaluations: number,
    evaluationInterval: Scorecards.EvaluationIntervalMap[keyof Scorecards.EvaluationIntervalMap],
  }
}

export class Scorecards extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Scorecards.AsObject;
  static toObject(includeInstance: boolean, msg: Scorecards): Scorecards.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Scorecards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Scorecards;
  static deserializeBinaryFromReader(message: Scorecards, reader: jspb.BinaryReader): Scorecards;
}

export namespace Scorecards {
  export type AsObject = {
  }

  export interface EvaluationIntervalMap {
    DAY: 0;
    WEEK: 1;
    MONTH: 2;
  }

  export const EvaluationInterval: EvaluationIntervalMap;
}

export class GetEndOfDayPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEndOfDayPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEndOfDayPreferencesRequest): GetEndOfDayPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEndOfDayPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEndOfDayPreferencesRequest;
  static deserializeBinaryFromReader(message: GetEndOfDayPreferencesRequest, reader: jspb.BinaryReader): GetEndOfDayPreferencesRequest;
}

export namespace GetEndOfDayPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetEndOfDayPreferencesResponse extends jspb.Message {
  hasEndOfDayPreferences(): boolean;
  clearEndOfDayPreferences(): void;
  getEndOfDayPreferences(): EndOfDayPreferences | undefined;
  setEndOfDayPreferences(value?: EndOfDayPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEndOfDayPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEndOfDayPreferencesResponse): GetEndOfDayPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEndOfDayPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEndOfDayPreferencesResponse;
  static deserializeBinaryFromReader(message: GetEndOfDayPreferencesResponse, reader: jspb.BinaryReader): GetEndOfDayPreferencesResponse;
}

export namespace GetEndOfDayPreferencesResponse {
  export type AsObject = {
    endOfDayPreferences?: EndOfDayPreferences.AsObject,
  }
}

export class UpdateEndOfDayPreferencesRequest extends jspb.Message {
  hasEndOfDayPreferences(): boolean;
  clearEndOfDayPreferences(): void;
  getEndOfDayPreferences(): EndOfDayPreferences | undefined;
  setEndOfDayPreferences(value?: EndOfDayPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEndOfDayPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEndOfDayPreferencesRequest): UpdateEndOfDayPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEndOfDayPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEndOfDayPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateEndOfDayPreferencesRequest, reader: jspb.BinaryReader): UpdateEndOfDayPreferencesRequest;
}

export namespace UpdateEndOfDayPreferencesRequest {
  export type AsObject = {
    endOfDayPreferences?: EndOfDayPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateEndOfDayPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEndOfDayPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEndOfDayPreferencesResponse): UpdateEndOfDayPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEndOfDayPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEndOfDayPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateEndOfDayPreferencesResponse, reader: jspb.BinaryReader): UpdateEndOfDayPreferencesResponse;
}

export namespace UpdateEndOfDayPreferencesResponse {
  export type AsObject = {
  }
}

export class EndOfDayPreferences extends jspb.Message {
  getEodMonday(): number;
  setEodMonday(value: number): void;

  getEodTuesday(): number;
  setEodTuesday(value: number): void;

  getEodWednesday(): number;
  setEodWednesday(value: number): void;

  getEodThursday(): number;
  setEodThursday(value: number): void;

  getEodFriday(): number;
  setEodFriday(value: number): void;

  getEodSaturday(): number;
  setEodSaturday(value: number): void;

  getEodSunday(): number;
  setEodSunday(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndOfDayPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: EndOfDayPreferences): EndOfDayPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndOfDayPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndOfDayPreferences;
  static deserializeBinaryFromReader(message: EndOfDayPreferences, reader: jspb.BinaryReader): EndOfDayPreferences;
}

export namespace EndOfDayPreferences {
  export type AsObject = {
    eodMonday: number,
    eodTuesday: number,
    eodWednesday: number,
    eodThursday: number,
    eodFriday: number,
    eodSaturday: number,
    eodSunday: number,
  }
}

export class GetFilterPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFilterPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFilterPreferencesRequest): GetFilterPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFilterPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFilterPreferencesRequest;
  static deserializeBinaryFromReader(message: GetFilterPreferencesRequest, reader: jspb.BinaryReader): GetFilterPreferencesRequest;
}

export namespace GetFilterPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetFilterPreferencesResponse extends jspb.Message {
  hasFilterPreferences(): boolean;
  clearFilterPreferences(): void;
  getFilterPreferences(): FilterPreferences | undefined;
  setFilterPreferences(value?: FilterPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFilterPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFilterPreferencesResponse): GetFilterPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFilterPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFilterPreferencesResponse;
  static deserializeBinaryFromReader(message: GetFilterPreferencesResponse, reader: jspb.BinaryReader): GetFilterPreferencesResponse;
}

export namespace GetFilterPreferencesResponse {
  export type AsObject = {
    filterPreferences?: FilterPreferences.AsObject,
  }
}

export class UpdateFilterPreferencesRequest extends jspb.Message {
  hasFilterPreferences(): boolean;
  clearFilterPreferences(): void;
  getFilterPreferences(): FilterPreferences | undefined;
  setFilterPreferences(value?: FilterPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFilterPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFilterPreferencesRequest): UpdateFilterPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFilterPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFilterPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateFilterPreferencesRequest, reader: jspb.BinaryReader): UpdateFilterPreferencesRequest;
}

export namespace UpdateFilterPreferencesRequest {
  export type AsObject = {
    filterPreferences?: FilterPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateFilterPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFilterPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFilterPreferencesResponse): UpdateFilterPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFilterPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFilterPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateFilterPreferencesResponse, reader: jspb.BinaryReader): UpdateFilterPreferencesResponse;
}

export namespace UpdateFilterPreferencesResponse {
  export type AsObject = {
  }
}

export class FilterPreferences extends jspb.Message {
  hasDefaultAutoReportFilter(): boolean;
  clearDefaultAutoReportFilter(): void;
  getDefaultAutoReportFilter(): ReportFilter | undefined;
  setDefaultAutoReportFilter(value?: ReportFilter): void;

  getSendEmptyAutoReports(): boolean;
  setSendEmptyAutoReports(value: boolean): void;

  getDisplayBroadcastResendFilter(): boolean;
  setDisplayBroadcastResendFilter(value: boolean): void;

  hasDefaultBroadcastResendFilter(): boolean;
  clearDefaultBroadcastResendFilter(): void;
  getDefaultBroadcastResendFilter(): ReportFilter | undefined;
  setDefaultBroadcastResendFilter(value?: ReportFilter): void;

  clearCustomReportFiltersList(): void;
  getCustomReportFiltersList(): Array<CustomReportFilter>;
  setCustomReportFiltersList(value: Array<CustomReportFilter>): void;
  addCustomReportFilters(value?: CustomReportFilter, index?: number): CustomReportFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: FilterPreferences): FilterPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilterPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterPreferences;
  static deserializeBinaryFromReader(message: FilterPreferences, reader: jspb.BinaryReader): FilterPreferences;
}

export namespace FilterPreferences {
  export type AsObject = {
    defaultAutoReportFilter?: ReportFilter.AsObject,
    sendEmptyAutoReports: boolean,
    displayBroadcastResendFilter: boolean,
    defaultBroadcastResendFilter?: ReportFilter.AsObject,
    customReportFiltersList: Array<CustomReportFilter.AsObject>,
  }
}

export class ReportFilter extends jspb.Message {
  hasStandard(): boolean;
  clearStandard(): void;
  getStandard(): api_commons_org_preferences_pb.StandardReportFilterMap[keyof api_commons_org_preferences_pb.StandardReportFilterMap];
  setStandard(value: api_commons_org_preferences_pb.StandardReportFilterMap[keyof api_commons_org_preferences_pb.StandardReportFilterMap]): void;

  hasCustom(): boolean;
  clearCustom(): void;
  getCustom(): number;
  setCustom(value: number): void;

  getChoiceCase(): ReportFilter.ChoiceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ReportFilter): ReportFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportFilter;
  static deserializeBinaryFromReader(message: ReportFilter, reader: jspb.BinaryReader): ReportFilter;
}

export namespace ReportFilter {
  export type AsObject = {
    standard: api_commons_org_preferences_pb.StandardReportFilterMap[keyof api_commons_org_preferences_pb.StandardReportFilterMap],
    custom: number,
  }

  export enum ChoiceCase {
    CHOICE_NOT_SET = 0,
    STANDARD = 1,
    CUSTOM = 2,
  }
}

export class CustomReportFilter extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getConjunction(): CustomReportFilter.FilterConjunctionMap[keyof CustomReportFilter.FilterConjunctionMap];
  setConjunction(value: CustomReportFilter.FilterConjunctionMap[keyof CustomReportFilter.FilterConjunctionMap]): void;

  clearCallResultsFilterListList(): void;
  getCallResultsFilterListList(): Array<number>;
  setCallResultsFilterListList(value: Array<number>): void;
  addCallResultsFilterList(value: number, index?: number): number;

  clearDtmfExpressionListList(): void;
  getDtmfExpressionListList(): Array<ComplexBooleanExpr>;
  setDtmfExpressionListList(value: Array<ComplexBooleanExpr>): void;
  addDtmfExpressionList(value?: ComplexBooleanExpr, index?: number): ComplexBooleanExpr;

  clearAgentResponseExpressionListList(): void;
  getAgentResponseExpressionListList(): Array<ComplexBooleanExpr>;
  setAgentResponseExpressionListList(value: Array<ComplexBooleanExpr>): void;
  addAgentResponseExpressionList(value?: ComplexBooleanExpr, index?: number): ComplexBooleanExpr;

  clearLastTemplateElementExpressionListList(): void;
  getLastTemplateElementExpressionListList(): Array<ComplexBooleanExpr>;
  setLastTemplateElementExpressionListList(value: Array<ComplexBooleanExpr>): void;
  addLastTemplateElementExpressionList(value?: ComplexBooleanExpr, index?: number): ComplexBooleanExpr;

  clearExcludeDtmfExpressionListList(): void;
  getExcludeDtmfExpressionListList(): Array<ComplexBooleanExpr>;
  setExcludeDtmfExpressionListList(value: Array<ComplexBooleanExpr>): void;
  addExcludeDtmfExpressionList(value?: ComplexBooleanExpr, index?: number): ComplexBooleanExpr;

  clearHuntGroupSidIncludeListList(): void;
  getHuntGroupSidIncludeListList(): Array<number>;
  setHuntGroupSidIncludeListList(value: Array<number>): void;
  addHuntGroupSidIncludeList(value: number, index?: number): number;

  clearHuntGroupSidExcludeListList(): void;
  getHuntGroupSidExcludeListList(): Array<number>;
  setHuntGroupSidExcludeListList(value: Array<number>): void;
  addHuntGroupSidExcludeList(value: number, index?: number): number;

  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomReportFilter.AsObject;
  static toObject(includeInstance: boolean, msg: CustomReportFilter): CustomReportFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomReportFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomReportFilter;
  static deserializeBinaryFromReader(message: CustomReportFilter, reader: jspb.BinaryReader): CustomReportFilter;
}

export namespace CustomReportFilter {
  export type AsObject = {
    name: string,
    description: string,
    conjunction: CustomReportFilter.FilterConjunctionMap[keyof CustomReportFilter.FilterConjunctionMap],
    callResultsFilterListList: Array<number>,
    dtmfExpressionListList: Array<ComplexBooleanExpr.AsObject>,
    agentResponseExpressionListList: Array<ComplexBooleanExpr.AsObject>,
    lastTemplateElementExpressionListList: Array<ComplexBooleanExpr.AsObject>,
    excludeDtmfExpressionListList: Array<ComplexBooleanExpr.AsObject>,
    huntGroupSidIncludeListList: Array<number>,
    huntGroupSidExcludeListList: Array<number>,
    xmlClientPropertySid: number,
  }

  export interface FilterConjunctionMap {
    AND: 0;
    OR: 1;
  }

  export const FilterConjunction: FilterConjunctionMap;
}

export class ComplexBooleanExpr extends jspb.Message {
  hasCompareExpressionList(): boolean;
  clearCompareExpressionList(): void;
  getCompareExpressionList(): CompareExprList | undefined;
  setCompareExpressionList(value?: CompareExprList): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComplexBooleanExpr.AsObject;
  static toObject(includeInstance: boolean, msg: ComplexBooleanExpr): ComplexBooleanExpr.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComplexBooleanExpr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComplexBooleanExpr;
  static deserializeBinaryFromReader(message: ComplexBooleanExpr, reader: jspb.BinaryReader): ComplexBooleanExpr;
}

export namespace ComplexBooleanExpr {
  export type AsObject = {
    compareExpressionList?: CompareExprList.AsObject,
  }
}

export class CompareExprList extends jspb.Message {
  clearSimpleCompareExpressionList(): void;
  getSimpleCompareExpressionList(): Array<SimpleCompareExpression>;
  setSimpleCompareExpressionList(value: Array<SimpleCompareExpression>): void;
  addSimpleCompareExpression(value?: SimpleCompareExpression, index?: number): SimpleCompareExpression;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompareExprList.AsObject;
  static toObject(includeInstance: boolean, msg: CompareExprList): CompareExprList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompareExprList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompareExprList;
  static deserializeBinaryFromReader(message: CompareExprList, reader: jspb.BinaryReader): CompareExprList;
}

export namespace CompareExprList {
  export type AsObject = {
    simpleCompareExpressionList: Array<SimpleCompareExpression.AsObject>,
  }
}

export class SimpleCompareExpression extends jspb.Message {
  getOperatorType(): string;
  setOperatorType(value: string): void;

  getValueKey(): string;
  setValueKey(value: string): void;

  getCompareValue(): string;
  setCompareValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleCompareExpression.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleCompareExpression): SimpleCompareExpression.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimpleCompareExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleCompareExpression;
  static deserializeBinaryFromReader(message: SimpleCompareExpression, reader: jspb.BinaryReader): SimpleCompareExpression;
}

export namespace SimpleCompareExpression {
  export type AsObject = {
    operatorType: string,
    valueKey: string,
    compareValue: string,
  }
}

export class GetRecordingPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecordingPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecordingPreferencesRequest): GetRecordingPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRecordingPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecordingPreferencesRequest;
  static deserializeBinaryFromReader(message: GetRecordingPreferencesRequest, reader: jspb.BinaryReader): GetRecordingPreferencesRequest;
}

export namespace GetRecordingPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetRecordingPreferencesResponse extends jspb.Message {
  hasRecordingPreferences(): boolean;
  clearRecordingPreferences(): void;
  getRecordingPreferences(): RecordingPreferences | undefined;
  setRecordingPreferences(value?: RecordingPreferences): void;

  getCallRecordingRedaction(): boolean;
  setCallRecordingRedaction(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecordingPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecordingPreferencesResponse): GetRecordingPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRecordingPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecordingPreferencesResponse;
  static deserializeBinaryFromReader(message: GetRecordingPreferencesResponse, reader: jspb.BinaryReader): GetRecordingPreferencesResponse;
}

export namespace GetRecordingPreferencesResponse {
  export type AsObject = {
    recordingPreferences?: RecordingPreferences.AsObject,
    callRecordingRedaction: boolean,
  }
}

export class UpdateRecordingPreferencesRequest extends jspb.Message {
  hasRecordingPreferences(): boolean;
  clearRecordingPreferences(): void;
  getRecordingPreferences(): RecordingPreferences | undefined;
  setRecordingPreferences(value?: RecordingPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRecordingPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRecordingPreferencesRequest): UpdateRecordingPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRecordingPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRecordingPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateRecordingPreferencesRequest, reader: jspb.BinaryReader): UpdateRecordingPreferencesRequest;
}

export namespace UpdateRecordingPreferencesRequest {
  export type AsObject = {
    recordingPreferences?: RecordingPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateRecordingPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRecordingPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRecordingPreferencesResponse): UpdateRecordingPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRecordingPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRecordingPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateRecordingPreferencesResponse, reader: jspb.BinaryReader): UpdateRecordingPreferencesResponse;
}

export namespace UpdateRecordingPreferencesResponse {
  export type AsObject = {
  }
}

export class RecordingPreferences extends jspb.Message {
  getConventionEnabled(): boolean;
  setConventionEnabled(value: boolean): void;

  hasFileNameConvention(): boolean;
  clearFileNameConvention(): void;
  getFileNameConvention(): RecordingsFileNamingConvention | undefined;
  setFileNameConvention(value?: RecordingsFileNamingConvention): void;

  getZipConventionEnabled(): boolean;
  setZipConventionEnabled(value: boolean): void;

  hasZipFileNameConvention(): boolean;
  clearZipFileNameConvention(): void;
  getZipFileNameConvention(): RecordingsZipFileNamingConvention | undefined;
  setZipFileNameConvention(value?: RecordingsZipFileNamingConvention): void;

  getExportFileType(): api_commons_org_pb.RecordingFileTypeMap[keyof api_commons_org_pb.RecordingFileTypeMap];
  setExportFileType(value: api_commons_org_pb.RecordingFileTypeMap[keyof api_commons_org_pb.RecordingFileTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingPreferences): RecordingPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingPreferences;
  static deserializeBinaryFromReader(message: RecordingPreferences, reader: jspb.BinaryReader): RecordingPreferences;
}

export namespace RecordingPreferences {
  export type AsObject = {
    conventionEnabled: boolean,
    fileNameConvention?: RecordingsFileNamingConvention.AsObject,
    zipConventionEnabled: boolean,
    zipFileNameConvention?: RecordingsZipFileNamingConvention.AsObject,
    exportFileType: api_commons_org_pb.RecordingFileTypeMap[keyof api_commons_org_pb.RecordingFileTypeMap],
  }
}

export class RecordingsFileNamingConvention extends jspb.Message {
  hasInbound(): boolean;
  clearInbound(): void;
  getInbound(): FileNamingConvention | undefined;
  setInbound(value?: FileNamingConvention): void;

  hasManual(): boolean;
  clearManual(): void;
  getManual(): FileNamingConvention | undefined;
  setManual(value?: FileNamingConvention): void;

  hasOutbound(): boolean;
  clearOutbound(): void;
  getOutbound(): FileNamingConvention | undefined;
  setOutbound(value?: FileNamingConvention): void;

  hasPreview(): boolean;
  clearPreview(): void;
  getPreview(): FileNamingConvention | undefined;
  setPreview(value?: FileNamingConvention): void;

  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingsFileNamingConvention.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingsFileNamingConvention): RecordingsFileNamingConvention.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingsFileNamingConvention, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingsFileNamingConvention;
  static deserializeBinaryFromReader(message: RecordingsFileNamingConvention, reader: jspb.BinaryReader): RecordingsFileNamingConvention;
}

export namespace RecordingsFileNamingConvention {
  export type AsObject = {
    inbound?: FileNamingConvention.AsObject,
    manual?: FileNamingConvention.AsObject,
    outbound?: FileNamingConvention.AsObject,
    preview?: FileNamingConvention.AsObject,
    xmlClientPropertySid: number,
  }
}

export class RecordingsZipFileNamingConvention extends jspb.Message {
  hasInbound(): boolean;
  clearInbound(): void;
  getInbound(): FileNamingConvention | undefined;
  setInbound(value?: FileNamingConvention): void;

  hasManual(): boolean;
  clearManual(): void;
  getManual(): FileNamingConvention | undefined;
  setManual(value?: FileNamingConvention): void;

  hasOutbound(): boolean;
  clearOutbound(): void;
  getOutbound(): FileNamingConvention | undefined;
  setOutbound(value?: FileNamingConvention): void;

  hasCombined(): boolean;
  clearCombined(): void;
  getCombined(): FileNamingConvention | undefined;
  setCombined(value?: FileNamingConvention): void;

  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingsZipFileNamingConvention.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingsZipFileNamingConvention): RecordingsZipFileNamingConvention.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingsZipFileNamingConvention, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingsZipFileNamingConvention;
  static deserializeBinaryFromReader(message: RecordingsZipFileNamingConvention, reader: jspb.BinaryReader): RecordingsZipFileNamingConvention;
}

export namespace RecordingsZipFileNamingConvention {
  export type AsObject = {
    inbound?: FileNamingConvention.AsObject,
    manual?: FileNamingConvention.AsObject,
    outbound?: FileNamingConvention.AsObject,
    combined?: FileNamingConvention.AsObject,
    xmlClientPropertySid: number,
  }
}

export class FileNamingConvention extends jspb.Message {
  clearSegmentsList(): void;
  getSegmentsList(): Array<FileNameSegment>;
  setSegmentsList(value: Array<FileNameSegment>): void;
  addSegments(value?: FileNameSegment, index?: number): FileNameSegment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileNamingConvention.AsObject;
  static toObject(includeInstance: boolean, msg: FileNamingConvention): FileNamingConvention.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileNamingConvention, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileNamingConvention;
  static deserializeBinaryFromReader(message: FileNamingConvention, reader: jspb.BinaryReader): FileNamingConvention;
}

export namespace FileNamingConvention {
  export type AsObject = {
    segmentsList: Array<FileNameSegment.AsObject>,
  }
}

export class FileNameSegment extends jspb.Message {
  getSegmentType(): string;
  setSegmentType(value: string): void;

  getFormatPattern(): string;
  setFormatPattern(value: string): void;

  getTimeZoneId(): string;
  setTimeZoneId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileNameSegment.AsObject;
  static toObject(includeInstance: boolean, msg: FileNameSegment): FileNameSegment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileNameSegment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileNameSegment;
  static deserializeBinaryFromReader(message: FileNameSegment, reader: jspb.BinaryReader): FileNameSegment;
}

export namespace FileNameSegment {
  export type AsObject = {
    segmentType: string,
    formatPattern: string,
    timeZoneId: string,
  }
}

export class GetAdminClientPreferencesRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdminClientPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdminClientPreferencesRequest): GetAdminClientPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAdminClientPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdminClientPreferencesRequest;
  static deserializeBinaryFromReader(message: GetAdminClientPreferencesRequest, reader: jspb.BinaryReader): GetAdminClientPreferencesRequest;
}

export namespace GetAdminClientPreferencesRequest {
  export type AsObject = {
    orgId: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetAdminClientPreferencesResponse extends jspb.Message {
  hasAdminClientPreferences(): boolean;
  clearAdminClientPreferences(): void;
  getAdminClientPreferences(): AdminClientPreferences | undefined;
  setAdminClientPreferences(value?: AdminClientPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdminClientPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdminClientPreferencesResponse): GetAdminClientPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAdminClientPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdminClientPreferencesResponse;
  static deserializeBinaryFromReader(message: GetAdminClientPreferencesResponse, reader: jspb.BinaryReader): GetAdminClientPreferencesResponse;
}

export namespace GetAdminClientPreferencesResponse {
  export type AsObject = {
    adminClientPreferences?: AdminClientPreferences.AsObject,
  }
}

export class UpdateAdminClientPreferencesRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  hasAdminClientPreferences(): boolean;
  clearAdminClientPreferences(): void;
  getAdminClientPreferences(): AdminClientPreferences | undefined;
  setAdminClientPreferences(value?: AdminClientPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAdminClientPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAdminClientPreferencesRequest): UpdateAdminClientPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAdminClientPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAdminClientPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateAdminClientPreferencesRequest, reader: jspb.BinaryReader): UpdateAdminClientPreferencesRequest;
}

export namespace UpdateAdminClientPreferencesRequest {
  export type AsObject = {
    orgId: string,
    adminClientPreferences?: AdminClientPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateAdminClientPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAdminClientPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAdminClientPreferencesResponse): UpdateAdminClientPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAdminClientPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAdminClientPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateAdminClientPreferencesResponse, reader: jspb.BinaryReader): UpdateAdminClientPreferencesResponse;
}

export namespace UpdateAdminClientPreferencesResponse {
  export type AsObject = {
  }
}

export class AdminClientPreferences extends jspb.Message {
  getUseReservedCarrier(): boolean;
  setUseReservedCarrier(value: boolean): void;

  clearReservedCarriersList(): void;
  getReservedCarriersList(): Array<string>;
  setReservedCarriersList(value: Array<string>): void;
  addReservedCarriers(value: string, index?: number): string;

  getEmailKey(): string;
  setEmailKey(value: string): void;

  getEmailId(): string;
  setEmailId(value: string): void;

  getEmailName(): string;
  setEmailName(value: string): void;

  clearWhitelistIpsList(): void;
  getWhitelistIpsList(): Array<string>;
  setWhitelistIpsList(value: Array<string>): void;
  addWhitelistIps(value: string, index?: number): string;

  clearWhitelistDomainsList(): void;
  getWhitelistDomainsList(): Array<string>;
  setWhitelistDomainsList(value: Array<string>): void;
  addWhitelistDomains(value: string, index?: number): string;

  getCallbacksServiceId(): string;
  setCallbacksServiceId(value: string): void;

  getAgentScreenRecording(): boolean;
  setAgentScreenRecording(value: boolean): void;

  clearAllowedCountriesList(): void;
  getAllowedCountriesList(): Array<api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]>;
  setAllowedCountriesList(value: Array<api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]>): void;
  addAllowedCountries(value: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap], index?: number): api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminClientPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: AdminClientPreferences): AdminClientPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdminClientPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminClientPreferences;
  static deserializeBinaryFromReader(message: AdminClientPreferences, reader: jspb.BinaryReader): AdminClientPreferences;
}

export namespace AdminClientPreferences {
  export type AsObject = {
    useReservedCarrier: boolean,
    reservedCarriersList: Array<string>,
    emailKey: string,
    emailId: string,
    emailName: string,
    whitelistIpsList: Array<string>,
    whitelistDomainsList: Array<string>,
    callbacksServiceId: string,
    agentScreenRecording: boolean,
    allowedCountriesList: Array<api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]>,
  }
}

export class AcceptLinkbackRecordingTermsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptLinkbackRecordingTermsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptLinkbackRecordingTermsRequest): AcceptLinkbackRecordingTermsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AcceptLinkbackRecordingTermsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptLinkbackRecordingTermsRequest;
  static deserializeBinaryFromReader(message: AcceptLinkbackRecordingTermsRequest, reader: jspb.BinaryReader): AcceptLinkbackRecordingTermsRequest;
}

export namespace AcceptLinkbackRecordingTermsRequest {
  export type AsObject = {
  }
}

export class AcceptLinkbackRecordingTermsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptLinkbackRecordingTermsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptLinkbackRecordingTermsResponse): AcceptLinkbackRecordingTermsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AcceptLinkbackRecordingTermsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptLinkbackRecordingTermsResponse;
  static deserializeBinaryFromReader(message: AcceptLinkbackRecordingTermsResponse, reader: jspb.BinaryReader): AcceptLinkbackRecordingTermsResponse;
}

export namespace AcceptLinkbackRecordingTermsResponse {
  export type AsObject = {
  }
}

export class LinkbackUpdateBroadcastTemplatesRequest extends jspb.Message {
  getValue(): boolean;
  setValue(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkbackUpdateBroadcastTemplatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LinkbackUpdateBroadcastTemplatesRequest): LinkbackUpdateBroadcastTemplatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinkbackUpdateBroadcastTemplatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkbackUpdateBroadcastTemplatesRequest;
  static deserializeBinaryFromReader(message: LinkbackUpdateBroadcastTemplatesRequest, reader: jspb.BinaryReader): LinkbackUpdateBroadcastTemplatesRequest;
}

export namespace LinkbackUpdateBroadcastTemplatesRequest {
  export type AsObject = {
    value: boolean,
  }
}

export class LinkbackUpdateBroadcastTemplatesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkbackUpdateBroadcastTemplatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LinkbackUpdateBroadcastTemplatesResponse): LinkbackUpdateBroadcastTemplatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinkbackUpdateBroadcastTemplatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkbackUpdateBroadcastTemplatesResponse;
  static deserializeBinaryFromReader(message: LinkbackUpdateBroadcastTemplatesResponse, reader: jspb.BinaryReader): LinkbackUpdateBroadcastTemplatesResponse;
}

export namespace LinkbackUpdateBroadcastTemplatesResponse {
  export type AsObject = {
  }
}

export class RecordEmailUnsubscribeAcknowledgementRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordEmailUnsubscribeAcknowledgementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordEmailUnsubscribeAcknowledgementRequest): RecordEmailUnsubscribeAcknowledgementRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordEmailUnsubscribeAcknowledgementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordEmailUnsubscribeAcknowledgementRequest;
  static deserializeBinaryFromReader(message: RecordEmailUnsubscribeAcknowledgementRequest, reader: jspb.BinaryReader): RecordEmailUnsubscribeAcknowledgementRequest;
}

export namespace RecordEmailUnsubscribeAcknowledgementRequest {
  export type AsObject = {
  }
}

export class RecordEmailUnsubscribeAcknowledgementResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordEmailUnsubscribeAcknowledgementResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RecordEmailUnsubscribeAcknowledgementResponse): RecordEmailUnsubscribeAcknowledgementResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordEmailUnsubscribeAcknowledgementResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordEmailUnsubscribeAcknowledgementResponse;
  static deserializeBinaryFromReader(message: RecordEmailUnsubscribeAcknowledgementResponse, reader: jspb.BinaryReader): RecordEmailUnsubscribeAcknowledgementResponse;
}

export namespace RecordEmailUnsubscribeAcknowledgementResponse {
  export type AsObject = {
  }
}

export class ClearEmailUnsubscribeAcknowledgementRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearEmailUnsubscribeAcknowledgementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClearEmailUnsubscribeAcknowledgementRequest): ClearEmailUnsubscribeAcknowledgementRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClearEmailUnsubscribeAcknowledgementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearEmailUnsubscribeAcknowledgementRequest;
  static deserializeBinaryFromReader(message: ClearEmailUnsubscribeAcknowledgementRequest, reader: jspb.BinaryReader): ClearEmailUnsubscribeAcknowledgementRequest;
}

export namespace ClearEmailUnsubscribeAcknowledgementRequest {
  export type AsObject = {
  }
}

export class ClearEmailUnsubscribeAcknowledgementResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearEmailUnsubscribeAcknowledgementResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClearEmailUnsubscribeAcknowledgementResponse): ClearEmailUnsubscribeAcknowledgementResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClearEmailUnsubscribeAcknowledgementResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearEmailUnsubscribeAcknowledgementResponse;
  static deserializeBinaryFromReader(message: ClearEmailUnsubscribeAcknowledgementResponse, reader: jspb.BinaryReader): ClearEmailUnsubscribeAcknowledgementResponse;
}

export namespace ClearEmailUnsubscribeAcknowledgementResponse {
  export type AsObject = {
  }
}

export class CustomReportFilterPreferences extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomReportFilterPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: CustomReportFilterPreferences): CustomReportFilterPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomReportFilterPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomReportFilterPreferences;
  static deserializeBinaryFromReader(message: CustomReportFilterPreferences, reader: jspb.BinaryReader): CustomReportFilterPreferences;
}

export namespace CustomReportFilterPreferences {
  export type AsObject = {
    name: string,
    xmlClientPropertySid: number,
  }
}

export class GetBackofficeThemePreferenceRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBackofficeThemePreferenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBackofficeThemePreferenceRequest): GetBackofficeThemePreferenceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBackofficeThemePreferenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBackofficeThemePreferenceRequest;
  static deserializeBinaryFromReader(message: GetBackofficeThemePreferenceRequest, reader: jspb.BinaryReader): GetBackofficeThemePreferenceRequest;
}

export namespace GetBackofficeThemePreferenceRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class GetBackofficeThemePreferenceResponse extends jspb.Message {
  getBackofficeTheme(): api_commons_org_pb.ClientSkinMap[keyof api_commons_org_pb.ClientSkinMap];
  setBackofficeTheme(value: api_commons_org_pb.ClientSkinMap[keyof api_commons_org_pb.ClientSkinMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBackofficeThemePreferenceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBackofficeThemePreferenceResponse): GetBackofficeThemePreferenceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBackofficeThemePreferenceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBackofficeThemePreferenceResponse;
  static deserializeBinaryFromReader(message: GetBackofficeThemePreferenceResponse, reader: jspb.BinaryReader): GetBackofficeThemePreferenceResponse;
}

export namespace GetBackofficeThemePreferenceResponse {
  export type AsObject = {
    backofficeTheme: api_commons_org_pb.ClientSkinMap[keyof api_commons_org_pb.ClientSkinMap],
  }
}

export class EditBackofficeThemePreferenceRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getBackofficeTheme(): api_commons_org_pb.ClientSkinMap[keyof api_commons_org_pb.ClientSkinMap];
  setBackofficeTheme(value: api_commons_org_pb.ClientSkinMap[keyof api_commons_org_pb.ClientSkinMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditBackofficeThemePreferenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditBackofficeThemePreferenceRequest): EditBackofficeThemePreferenceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditBackofficeThemePreferenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditBackofficeThemePreferenceRequest;
  static deserializeBinaryFromReader(message: EditBackofficeThemePreferenceRequest, reader: jspb.BinaryReader): EditBackofficeThemePreferenceRequest;
}

export namespace EditBackofficeThemePreferenceRequest {
  export type AsObject = {
    orgId: string,
    backofficeTheme: api_commons_org_pb.ClientSkinMap[keyof api_commons_org_pb.ClientSkinMap],
  }
}

export class EditBackofficeThemePreferenceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditBackofficeThemePreferenceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EditBackofficeThemePreferenceResponse): EditBackofficeThemePreferenceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditBackofficeThemePreferenceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditBackofficeThemePreferenceResponse;
  static deserializeBinaryFromReader(message: EditBackofficeThemePreferenceResponse, reader: jspb.BinaryReader): EditBackofficeThemePreferenceResponse;
}

export namespace EditBackofficeThemePreferenceResponse {
  export type AsObject = {
  }
}

export class WebLinkTemplate extends jspb.Message {
  getWebLinkTemplateId(): string;
  setWebLinkTemplateId(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getIsJsLink(): boolean;
  setIsJsLink(value: boolean): void;

  clearBaseUrlList(): void;
  getBaseUrlList(): Array<WebLinkBaseOption>;
  setBaseUrlList(value: Array<WebLinkBaseOption>): void;
  addBaseUrl(value?: WebLinkBaseOption, index?: number): WebLinkBaseOption;

  clearParametersList(): void;
  getParametersList(): Array<WebLinkParameter>;
  setParametersList(value: Array<WebLinkParameter>): void;
  addParameters(value?: WebLinkParameter, index?: number): WebLinkParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebLinkTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: WebLinkTemplate): WebLinkTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebLinkTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebLinkTemplate;
  static deserializeBinaryFromReader(message: WebLinkTemplate, reader: jspb.BinaryReader): WebLinkTemplate;
}

export namespace WebLinkTemplate {
  export type AsObject = {
    webLinkTemplateId: string,
    displayName: string,
    description: string,
    isJsLink: boolean,
    baseUrlList: Array<WebLinkBaseOption.AsObject>,
    parametersList: Array<WebLinkParameter.AsObject>,
  }
}

export class WebLinkParameter extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  clearValueList(): void;
  getValueList(): Array<WebLinkBaseOption>;
  setValueList(value: Array<WebLinkBaseOption>): void;
  addValue(value?: WebLinkBaseOption, index?: number): WebLinkBaseOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebLinkParameter.AsObject;
  static toObject(includeInstance: boolean, msg: WebLinkParameter): WebLinkParameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebLinkParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebLinkParameter;
  static deserializeBinaryFromReader(message: WebLinkParameter, reader: jspb.BinaryReader): WebLinkParameter;
}

export namespace WebLinkParameter {
  export type AsObject = {
    key: string,
    valueList: Array<WebLinkBaseOption.AsObject>,
  }
}

export class WebLinkBaseOption extends jspb.Message {
  hasStaticText(): boolean;
  clearStaticText(): void;
  getStaticText(): WebLinkBaseOption.StaticText | undefined;
  setStaticText(value?: WebLinkBaseOption.StaticText): void;

  hasTtsField(): boolean;
  clearTtsField(): void;
  getTtsField(): WebLinkBaseOption.TtsField | undefined;
  setTtsField(value?: WebLinkBaseOption.TtsField): void;

  hasAgentField(): boolean;
  clearAgentField(): void;
  getAgentField(): WebLinkBaseOption.AgentField | undefined;
  setAgentField(value?: WebLinkBaseOption.AgentField): void;

  hasDataKeyField(): boolean;
  clearDataKeyField(): void;
  getDataKeyField(): WebLinkBaseOption.DataKeyField | undefined;
  setDataKeyField(value?: WebLinkBaseOption.DataKeyField): void;

  hasDataCollect(): boolean;
  clearDataCollect(): void;
  getDataCollect(): WebLinkBaseOption.DataCollect | undefined;
  setDataCollect(value?: WebLinkBaseOption.DataCollect): void;

  hasDataDip(): boolean;
  clearDataDip(): void;
  getDataDip(): WebLinkBaseOption.DataDip | undefined;
  setDataDip(value?: WebLinkBaseOption.DataDip): void;

  hasIvrData(): boolean;
  clearIvrData(): void;
  getIvrData(): WebLinkBaseOption.IvrData | undefined;
  setIvrData(value?: WebLinkBaseOption.IvrData): void;

  hasPhoneField(): boolean;
  clearPhoneField(): void;
  getPhoneField(): WebLinkBaseOption.PhoneField | undefined;
  setPhoneField(value?: WebLinkBaseOption.PhoneField): void;

  hasSipHeaderData(): boolean;
  clearSipHeaderData(): void;
  getSipHeaderData(): WebLinkBaseOption.SipHeaderData | undefined;
  setSipHeaderData(value?: WebLinkBaseOption.SipHeaderData): void;

  hasPostalField(): boolean;
  clearPostalField(): void;
  getPostalField(): WebLinkBaseOption.PostalField | undefined;
  setPostalField(value?: WebLinkBaseOption.PostalField): void;

  getOptionCase(): WebLinkBaseOption.OptionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebLinkBaseOption.AsObject;
  static toObject(includeInstance: boolean, msg: WebLinkBaseOption): WebLinkBaseOption.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebLinkBaseOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebLinkBaseOption;
  static deserializeBinaryFromReader(message: WebLinkBaseOption, reader: jspb.BinaryReader): WebLinkBaseOption;
}

export namespace WebLinkBaseOption {
  export type AsObject = {
    staticText?: WebLinkBaseOption.StaticText.AsObject,
    ttsField?: WebLinkBaseOption.TtsField.AsObject,
    agentField?: WebLinkBaseOption.AgentField.AsObject,
    dataKeyField?: WebLinkBaseOption.DataKeyField.AsObject,
    dataCollect?: WebLinkBaseOption.DataCollect.AsObject,
    dataDip?: WebLinkBaseOption.DataDip.AsObject,
    ivrData?: WebLinkBaseOption.IvrData.AsObject,
    phoneField?: WebLinkBaseOption.PhoneField.AsObject,
    sipHeaderData?: WebLinkBaseOption.SipHeaderData.AsObject,
    postalField?: WebLinkBaseOption.PostalField.AsObject,
  }

  export class StaticText extends jspb.Message {
    getValue(): string;
    setValue(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StaticText.AsObject;
    static toObject(includeInstance: boolean, msg: StaticText): StaticText.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StaticText, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StaticText;
    static deserializeBinaryFromReader(message: StaticText, reader: jspb.BinaryReader): StaticText;
  }

  export namespace StaticText {
    export type AsObject = {
      value: string,
    }
  }

  export class TtsField extends jspb.Message {
    getContactFieldDescriptionSid(): number;
    setContactFieldDescriptionSid(value: number): void;

    getFieldName(): string;
    setFieldName(value: string): void;

    getDisplayFormatString(): string;
    setDisplayFormatString(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TtsField.AsObject;
    static toObject(includeInstance: boolean, msg: TtsField): TtsField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TtsField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TtsField;
    static deserializeBinaryFromReader(message: TtsField, reader: jspb.BinaryReader): TtsField;
  }

  export namespace TtsField {
    export type AsObject = {
      contactFieldDescriptionSid: number,
      fieldName: string,
      displayFormatString: string,
    }
  }

  export class AgentField extends jspb.Message {
    getOption(): api_commons_org_pb.AgentFieldOptionMap[keyof api_commons_org_pb.AgentFieldOptionMap];
    setOption(value: api_commons_org_pb.AgentFieldOptionMap[keyof api_commons_org_pb.AgentFieldOptionMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentField.AsObject;
    static toObject(includeInstance: boolean, msg: AgentField): AgentField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentField;
    static deserializeBinaryFromReader(message: AgentField, reader: jspb.BinaryReader): AgentField;
  }

  export namespace AgentField {
    export type AsObject = {
      option: api_commons_org_pb.AgentFieldOptionMap[keyof api_commons_org_pb.AgentFieldOptionMap],
    }
  }

  export class DataKeyField extends jspb.Message {
    getClientPropertiesSid(): number;
    setClientPropertiesSid(value: number): void;

    getPropertyKey(): string;
    setPropertyKey(value: string): void;

    getPropertyValue(): string;
    setPropertyValue(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataKeyField.AsObject;
    static toObject(includeInstance: boolean, msg: DataKeyField): DataKeyField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataKeyField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataKeyField;
    static deserializeBinaryFromReader(message: DataKeyField, reader: jspb.BinaryReader): DataKeyField;
  }

  export namespace DataKeyField {
    export type AsObject = {
      clientPropertiesSid: number,
      propertyKey: string,
      propertyValue: string,
    }
  }

  export class DataCollect extends jspb.Message {
    getValue(): string;
    setValue(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataCollect.AsObject;
    static toObject(includeInstance: boolean, msg: DataCollect): DataCollect.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataCollect, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataCollect;
    static deserializeBinaryFromReader(message: DataCollect, reader: jspb.BinaryReader): DataCollect;
  }

  export namespace DataCollect {
    export type AsObject = {
      value: string,
    }
  }

  export class DataDip extends jspb.Message {
    getValue(): string;
    setValue(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataDip.AsObject;
    static toObject(includeInstance: boolean, msg: DataDip): DataDip.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataDip, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataDip;
    static deserializeBinaryFromReader(message: DataDip, reader: jspb.BinaryReader): DataDip;
  }

  export namespace DataDip {
    export type AsObject = {
      value: string,
    }
  }

  export class IvrData extends jspb.Message {
    getValue(): string;
    setValue(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IvrData.AsObject;
    static toObject(includeInstance: boolean, msg: IvrData): IvrData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IvrData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IvrData;
    static deserializeBinaryFromReader(message: IvrData, reader: jspb.BinaryReader): IvrData;
  }

  export namespace IvrData {
    export type AsObject = {
      value: string,
    }
  }

  export class PhoneField extends jspb.Message {
    getOption(): api_commons_org_pb.PhoneFieldOptionMap[keyof api_commons_org_pb.PhoneFieldOptionMap];
    setOption(value: api_commons_org_pb.PhoneFieldOptionMap[keyof api_commons_org_pb.PhoneFieldOptionMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PhoneField.AsObject;
    static toObject(includeInstance: boolean, msg: PhoneField): PhoneField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PhoneField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PhoneField;
    static deserializeBinaryFromReader(message: PhoneField, reader: jspb.BinaryReader): PhoneField;
  }

  export namespace PhoneField {
    export type AsObject = {
      option: api_commons_org_pb.PhoneFieldOptionMap[keyof api_commons_org_pb.PhoneFieldOptionMap],
    }
  }

  export class SipHeaderData extends jspb.Message {
    getValue(): string;
    setValue(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SipHeaderData.AsObject;
    static toObject(includeInstance: boolean, msg: SipHeaderData): SipHeaderData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SipHeaderData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SipHeaderData;
    static deserializeBinaryFromReader(message: SipHeaderData, reader: jspb.BinaryReader): SipHeaderData;
  }

  export namespace SipHeaderData {
    export type AsObject = {
      value: string,
    }
  }

  export class PostalField extends jspb.Message {
    getOption(): api_commons_org_pb.PostalFieldOptionMap[keyof api_commons_org_pb.PostalFieldOptionMap];
    setOption(value: api_commons_org_pb.PostalFieldOptionMap[keyof api_commons_org_pb.PostalFieldOptionMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostalField.AsObject;
    static toObject(includeInstance: boolean, msg: PostalField): PostalField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostalField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostalField;
    static deserializeBinaryFromReader(message: PostalField, reader: jspb.BinaryReader): PostalField;
  }

  export namespace PostalField {
    export type AsObject = {
      option: api_commons_org_pb.PostalFieldOptionMap[keyof api_commons_org_pb.PostalFieldOptionMap],
    }
  }

  export enum OptionCase {
    OPTION_NOT_SET = 0,
    STATIC_TEXT = 1,
    TTS_FIELD = 2,
    AGENT_FIELD = 3,
    DATA_KEY_FIELD = 4,
    DATA_COLLECT = 5,
    DATA_DIP = 6,
    IVR_DATA = 7,
    PHONE_FIELD = 8,
    SIP_HEADER_DATA = 9,
    POSTAL_FIELD = 10,
  }
}

export class CreateWebLinkTemplateRequest extends jspb.Message {
  hasWebLinkTemplate(): boolean;
  clearWebLinkTemplate(): void;
  getWebLinkTemplate(): WebLinkTemplate | undefined;
  setWebLinkTemplate(value?: WebLinkTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebLinkTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebLinkTemplateRequest): CreateWebLinkTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateWebLinkTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebLinkTemplateRequest;
  static deserializeBinaryFromReader(message: CreateWebLinkTemplateRequest, reader: jspb.BinaryReader): CreateWebLinkTemplateRequest;
}

export namespace CreateWebLinkTemplateRequest {
  export type AsObject = {
    webLinkTemplate?: WebLinkTemplate.AsObject,
  }
}

export class CreateWebLinkTemplateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebLinkTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebLinkTemplateResponse): CreateWebLinkTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateWebLinkTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebLinkTemplateResponse;
  static deserializeBinaryFromReader(message: CreateWebLinkTemplateResponse, reader: jspb.BinaryReader): CreateWebLinkTemplateResponse;
}

export namespace CreateWebLinkTemplateResponse {
  export type AsObject = {
  }
}

export class ListWebLinkTemplatesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebLinkTemplatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebLinkTemplatesRequest): ListWebLinkTemplatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWebLinkTemplatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebLinkTemplatesRequest;
  static deserializeBinaryFromReader(message: ListWebLinkTemplatesRequest, reader: jspb.BinaryReader): ListWebLinkTemplatesRequest;
}

export namespace ListWebLinkTemplatesRequest {
  export type AsObject = {
  }
}

export class ListWebLinkTemplatesResponse extends jspb.Message {
  clearWebLinkTemplatesList(): void;
  getWebLinkTemplatesList(): Array<WebLinkTemplate>;
  setWebLinkTemplatesList(value: Array<WebLinkTemplate>): void;
  addWebLinkTemplates(value?: WebLinkTemplate, index?: number): WebLinkTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebLinkTemplatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebLinkTemplatesResponse): ListWebLinkTemplatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWebLinkTemplatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebLinkTemplatesResponse;
  static deserializeBinaryFromReader(message: ListWebLinkTemplatesResponse, reader: jspb.BinaryReader): ListWebLinkTemplatesResponse;
}

export namespace ListWebLinkTemplatesResponse {
  export type AsObject = {
    webLinkTemplatesList: Array<WebLinkTemplate.AsObject>,
  }
}

export class GetWebLinkTemplateRequest extends jspb.Message {
  getWebLinkTemplateId(): string;
  setWebLinkTemplateId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWebLinkTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWebLinkTemplateRequest): GetWebLinkTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWebLinkTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWebLinkTemplateRequest;
  static deserializeBinaryFromReader(message: GetWebLinkTemplateRequest, reader: jspb.BinaryReader): GetWebLinkTemplateRequest;
}

export namespace GetWebLinkTemplateRequest {
  export type AsObject = {
    webLinkTemplateId: string,
  }
}

export class GetWebLinkTemplateResponse extends jspb.Message {
  hasWebLinkTemplate(): boolean;
  clearWebLinkTemplate(): void;
  getWebLinkTemplate(): WebLinkTemplate | undefined;
  setWebLinkTemplate(value?: WebLinkTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWebLinkTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWebLinkTemplateResponse): GetWebLinkTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWebLinkTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWebLinkTemplateResponse;
  static deserializeBinaryFromReader(message: GetWebLinkTemplateResponse, reader: jspb.BinaryReader): GetWebLinkTemplateResponse;
}

export namespace GetWebLinkTemplateResponse {
  export type AsObject = {
    webLinkTemplate?: WebLinkTemplate.AsObject,
  }
}

export class UpdateWebLinkTemplateRequest extends jspb.Message {
  hasWebLinkTemplate(): boolean;
  clearWebLinkTemplate(): void;
  getWebLinkTemplate(): WebLinkTemplate | undefined;
  setWebLinkTemplate(value?: WebLinkTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWebLinkTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWebLinkTemplateRequest): UpdateWebLinkTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateWebLinkTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWebLinkTemplateRequest;
  static deserializeBinaryFromReader(message: UpdateWebLinkTemplateRequest, reader: jspb.BinaryReader): UpdateWebLinkTemplateRequest;
}

export namespace UpdateWebLinkTemplateRequest {
  export type AsObject = {
    webLinkTemplate?: WebLinkTemplate.AsObject,
  }
}

export class UpdateWebLinkTemplateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWebLinkTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWebLinkTemplateResponse): UpdateWebLinkTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateWebLinkTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWebLinkTemplateResponse;
  static deserializeBinaryFromReader(message: UpdateWebLinkTemplateResponse, reader: jspb.BinaryReader): UpdateWebLinkTemplateResponse;
}

export namespace UpdateWebLinkTemplateResponse {
  export type AsObject = {
  }
}

export class DeleteWebLinkTemplateRequest extends jspb.Message {
  getWebLinkTemplateId(): string;
  setWebLinkTemplateId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebLinkTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebLinkTemplateRequest): DeleteWebLinkTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteWebLinkTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebLinkTemplateRequest;
  static deserializeBinaryFromReader(message: DeleteWebLinkTemplateRequest, reader: jspb.BinaryReader): DeleteWebLinkTemplateRequest;
}

export namespace DeleteWebLinkTemplateRequest {
  export type AsObject = {
    webLinkTemplateId: string,
  }
}

export class DeleteWebLinkTemplateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebLinkTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebLinkTemplateResponse): DeleteWebLinkTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteWebLinkTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebLinkTemplateResponse;
  static deserializeBinaryFromReader(message: DeleteWebLinkTemplateResponse, reader: jspb.BinaryReader): DeleteWebLinkTemplateResponse;
}

export namespace DeleteWebLinkTemplateResponse {
  export type AsObject = {
  }
}

export class AgentTriggerTemplate extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): void;

  hasLoggedIn(): boolean;
  clearLoggedIn(): void;
  getLoggedIn(): AgentTriggerTemplate.LoggedIn | undefined;
  setLoggedIn(value?: AgentTriggerTemplate.LoggedIn): void;

  hasWaiting(): boolean;
  clearWaiting(): void;
  getWaiting(): AgentTriggerTemplate.Waiting | undefined;
  setWaiting(value?: AgentTriggerTemplate.Waiting): void;

  hasPaused(): boolean;
  clearPaused(): void;
  getPaused(): AgentTriggerTemplate.Paused | undefined;
  setPaused(value?: AgentTriggerTemplate.Paused): void;

  hasOnCall(): boolean;
  clearOnCall(): void;
  getOnCall(): AgentTriggerTemplate.OnCall | undefined;
  setOnCall(value?: AgentTriggerTemplate.OnCall): void;

  hasTransferCall(): boolean;
  clearTransferCall(): void;
  getTransferCall(): AgentTriggerTemplate.TransferCall | undefined;
  setTransferCall(value?: AgentTriggerTemplate.TransferCall): void;

  hasTransferLost(): boolean;
  clearTransferLost(): void;
  getTransferLost(): AgentTriggerTemplate.TransferLost | undefined;
  setTransferLost(value?: AgentTriggerTemplate.TransferLost): void;

  hasTransferTargetLost(): boolean;
  clearTransferTargetLost(): void;
  getTransferTargetLost(): AgentTriggerTemplate.TransferTargetLost | undefined;
  setTransferTargetLost(value?: AgentTriggerTemplate.TransferTargetLost): void;

  hasPreviewCall(): boolean;
  clearPreviewCall(): void;
  getPreviewCall(): AgentTriggerTemplate.PreviewCall | undefined;
  setPreviewCall(value?: AgentTriggerTemplate.PreviewCall): void;

  hasManualDialCall(): boolean;
  clearManualDialCall(): void;
  getManualDialCall(): AgentTriggerTemplate.ManualDialCall | undefined;
  setManualDialCall(value?: AgentTriggerTemplate.ManualDialCall): void;

  hasWrapUp(): boolean;
  clearWrapUp(): void;
  getWrapUp(): AgentTriggerTemplate.WrapUp | undefined;
  setWrapUp(value?: AgentTriggerTemplate.WrapUp): void;

  getId(): string;
  setId(value: string): void;

  getStatusCase(): AgentTriggerTemplate.StatusCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentTriggerTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: AgentTriggerTemplate): AgentTriggerTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentTriggerTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentTriggerTemplate;
  static deserializeBinaryFromReader(message: AgentTriggerTemplate, reader: jspb.BinaryReader): AgentTriggerTemplate;
}

export namespace AgentTriggerTemplate {
  export type AsObject = {
    description: string,
    loggedIn?: AgentTriggerTemplate.LoggedIn.AsObject,
    waiting?: AgentTriggerTemplate.Waiting.AsObject,
    paused?: AgentTriggerTemplate.Paused.AsObject,
    onCall?: AgentTriggerTemplate.OnCall.AsObject,
    transferCall?: AgentTriggerTemplate.TransferCall.AsObject,
    transferLost?: AgentTriggerTemplate.TransferLost.AsObject,
    transferTargetLost?: AgentTriggerTemplate.TransferTargetLost.AsObject,
    previewCall?: AgentTriggerTemplate.PreviewCall.AsObject,
    manualDialCall?: AgentTriggerTemplate.ManualDialCall.AsObject,
    wrapUp?: AgentTriggerTemplate.WrapUp.AsObject,
    id: string,
  }

  export class LoggedIn extends jspb.Message {
    hasDisplayMessage(): boolean;
    clearDisplayMessage(): void;
    getDisplayMessage(): AgentTriggerTemplate.DisplayMessage | undefined;
    setDisplayMessage(value?: AgentTriggerTemplate.DisplayMessage): void;

    hasEjectAgent(): boolean;
    clearEjectAgent(): void;
    getEjectAgent(): AgentTriggerTemplate.EjectAgent | undefined;
    setEjectAgent(value?: AgentTriggerTemplate.EjectAgent): void;

    hasExecuteWebLink(): boolean;
    clearExecuteWebLink(): void;
    getExecuteWebLink(): AgentTriggerTemplate.ExecuteWebLink | undefined;
    setExecuteWebLink(value?: AgentTriggerTemplate.ExecuteWebLink): void;

    getResultCase(): LoggedIn.ResultCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoggedIn.AsObject;
    static toObject(includeInstance: boolean, msg: LoggedIn): LoggedIn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoggedIn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoggedIn;
    static deserializeBinaryFromReader(message: LoggedIn, reader: jspb.BinaryReader): LoggedIn;
  }

  export namespace LoggedIn {
    export type AsObject = {
      displayMessage?: AgentTriggerTemplate.DisplayMessage.AsObject,
      ejectAgent?: AgentTriggerTemplate.EjectAgent.AsObject,
      executeWebLink?: AgentTriggerTemplate.ExecuteWebLink.AsObject,
    }

    export enum ResultCase {
      RESULT_NOT_SET = 0,
      DISPLAY_MESSAGE = 1,
      EJECT_AGENT = 2,
      EXECUTE_WEB_LINK = 3,
    }
  }

  export class Waiting extends jspb.Message {
    getDuration(): number;
    setDuration(value: number): void;

    hasAdvanceStatus(): boolean;
    clearAdvanceStatus(): void;
    getAdvanceStatus(): AgentTriggerTemplate.AdvanceStatus | undefined;
    setAdvanceStatus(value?: AgentTriggerTemplate.AdvanceStatus): void;

    hasDisplayMessage(): boolean;
    clearDisplayMessage(): void;
    getDisplayMessage(): AgentTriggerTemplate.DisplayMessage | undefined;
    setDisplayMessage(value?: AgentTriggerTemplate.DisplayMessage): void;

    hasEjectAgent(): boolean;
    clearEjectAgent(): void;
    getEjectAgent(): AgentTriggerTemplate.EjectAgent | undefined;
    setEjectAgent(value?: AgentTriggerTemplate.EjectAgent): void;

    hasExecuteWebLink(): boolean;
    clearExecuteWebLink(): void;
    getExecuteWebLink(): AgentTriggerTemplate.ExecuteWebLink | undefined;
    setExecuteWebLink(value?: AgentTriggerTemplate.ExecuteWebLink): void;

    getResultCase(): Waiting.ResultCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Waiting.AsObject;
    static toObject(includeInstance: boolean, msg: Waiting): Waiting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Waiting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Waiting;
    static deserializeBinaryFromReader(message: Waiting, reader: jspb.BinaryReader): Waiting;
  }

  export namespace Waiting {
    export type AsObject = {
      duration: number,
      advanceStatus?: AgentTriggerTemplate.AdvanceStatus.AsObject,
      displayMessage?: AgentTriggerTemplate.DisplayMessage.AsObject,
      ejectAgent?: AgentTriggerTemplate.EjectAgent.AsObject,
      executeWebLink?: AgentTriggerTemplate.ExecuteWebLink.AsObject,
    }

    export enum ResultCase {
      RESULT_NOT_SET = 0,
      ADVANCE_STATUS = 2,
      DISPLAY_MESSAGE = 3,
      EJECT_AGENT = 4,
      EXECUTE_WEB_LINK = 5,
    }
  }

  export class Paused extends jspb.Message {
    getDuration(): number;
    setDuration(value: number): void;

    hasCustomPauseCodeSid(): boolean;
    clearCustomPauseCodeSid(): void;
    getCustomPauseCodeSid(): number;
    setCustomPauseCodeSid(value: number): void;

    hasAutomaticSystemCode(): boolean;
    clearAutomaticSystemCode(): void;
    getAutomaticSystemCode(): api_commons_org_pb.AutomaticSystemCodeMap[keyof api_commons_org_pb.AutomaticSystemCodeMap];
    setAutomaticSystemCode(value: api_commons_org_pb.AutomaticSystemCodeMap[keyof api_commons_org_pb.AutomaticSystemCodeMap]): void;

    hasAdvanceStatus(): boolean;
    clearAdvanceStatus(): void;
    getAdvanceStatus(): AgentTriggerTemplate.AdvanceStatus | undefined;
    setAdvanceStatus(value?: AgentTriggerTemplate.AdvanceStatus): void;

    hasDisplayMessage(): boolean;
    clearDisplayMessage(): void;
    getDisplayMessage(): AgentTriggerTemplate.DisplayMessage | undefined;
    setDisplayMessage(value?: AgentTriggerTemplate.DisplayMessage): void;

    hasEjectAgent(): boolean;
    clearEjectAgent(): void;
    getEjectAgent(): AgentTriggerTemplate.EjectAgent | undefined;
    setEjectAgent(value?: AgentTriggerTemplate.EjectAgent): void;

    hasExecuteWebLink(): boolean;
    clearExecuteWebLink(): void;
    getExecuteWebLink(): AgentTriggerTemplate.ExecuteWebLink | undefined;
    setExecuteWebLink(value?: AgentTriggerTemplate.ExecuteWebLink): void;

    hasPauseCode(): boolean;
    clearPauseCode(): void;
    getPauseCode(): PauseCode | undefined;
    setPauseCode(value?: PauseCode): void;

    getPauseCodeTypeCase(): Paused.PauseCodeTypeCase;
    getResultCase(): Paused.ResultCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Paused.AsObject;
    static toObject(includeInstance: boolean, msg: Paused): Paused.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Paused, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Paused;
    static deserializeBinaryFromReader(message: Paused, reader: jspb.BinaryReader): Paused;
  }

  export namespace Paused {
    export type AsObject = {
      duration: number,
      customPauseCodeSid: number,
      automaticSystemCode: api_commons_org_pb.AutomaticSystemCodeMap[keyof api_commons_org_pb.AutomaticSystemCodeMap],
      advanceStatus?: AgentTriggerTemplate.AdvanceStatus.AsObject,
      displayMessage?: AgentTriggerTemplate.DisplayMessage.AsObject,
      ejectAgent?: AgentTriggerTemplate.EjectAgent.AsObject,
      executeWebLink?: AgentTriggerTemplate.ExecuteWebLink.AsObject,
      pauseCode?: PauseCode.AsObject,
    }

    export enum PauseCodeTypeCase {
      PAUSE_CODE_TYPE_NOT_SET = 0,
      CUSTOM_PAUSE_CODE_SID = 2,
      AUTOMATIC_SYSTEM_CODE = 3,
    }

    export enum ResultCase {
      RESULT_NOT_SET = 0,
      ADVANCE_STATUS = 4,
      DISPLAY_MESSAGE = 5,
      EJECT_AGENT = 6,
      EXECUTE_WEB_LINK = 7,
    }
  }

  export class OnCall extends jspb.Message {
    getOutbound(): boolean;
    setOutbound(value: boolean): void;

    getInbound(): boolean;
    setInbound(value: boolean): void;

    getManual(): boolean;
    setManual(value: boolean): void;

    getPreview(): boolean;
    setPreview(value: boolean): void;

    getDuration(): number;
    setDuration(value: number): void;

    hasAdvanceStatus(): boolean;
    clearAdvanceStatus(): void;
    getAdvanceStatus(): AgentTriggerTemplate.AdvanceStatus | undefined;
    setAdvanceStatus(value?: AgentTriggerTemplate.AdvanceStatus): void;

    hasDisplayMessage(): boolean;
    clearDisplayMessage(): void;
    getDisplayMessage(): AgentTriggerTemplate.DisplayMessage | undefined;
    setDisplayMessage(value?: AgentTriggerTemplate.DisplayMessage): void;

    hasEjectAgent(): boolean;
    clearEjectAgent(): void;
    getEjectAgent(): AgentTriggerTemplate.EjectAgent | undefined;
    setEjectAgent(value?: AgentTriggerTemplate.EjectAgent): void;

    hasExecuteWebLink(): boolean;
    clearExecuteWebLink(): void;
    getExecuteWebLink(): AgentTriggerTemplate.ExecuteWebLink | undefined;
    setExecuteWebLink(value?: AgentTriggerTemplate.ExecuteWebLink): void;

    getResultCase(): OnCall.ResultCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OnCall.AsObject;
    static toObject(includeInstance: boolean, msg: OnCall): OnCall.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OnCall, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OnCall;
    static deserializeBinaryFromReader(message: OnCall, reader: jspb.BinaryReader): OnCall;
  }

  export namespace OnCall {
    export type AsObject = {
      outbound: boolean,
      inbound: boolean,
      manual: boolean,
      preview: boolean,
      duration: number,
      advanceStatus?: AgentTriggerTemplate.AdvanceStatus.AsObject,
      displayMessage?: AgentTriggerTemplate.DisplayMessage.AsObject,
      ejectAgent?: AgentTriggerTemplate.EjectAgent.AsObject,
      executeWebLink?: AgentTriggerTemplate.ExecuteWebLink.AsObject,
    }

    export enum ResultCase {
      RESULT_NOT_SET = 0,
      ADVANCE_STATUS = 6,
      DISPLAY_MESSAGE = 7,
      EJECT_AGENT = 8,
      EXECUTE_WEB_LINK = 9,
    }
  }

  export class TransferCall extends jspb.Message {
    getDuration(): number;
    setDuration(value: number): void;

    hasDisplayMessage(): boolean;
    clearDisplayMessage(): void;
    getDisplayMessage(): AgentTriggerTemplate.DisplayMessage | undefined;
    setDisplayMessage(value?: AgentTriggerTemplate.DisplayMessage): void;

    hasEjectAgent(): boolean;
    clearEjectAgent(): void;
    getEjectAgent(): AgentTriggerTemplate.EjectAgent | undefined;
    setEjectAgent(value?: AgentTriggerTemplate.EjectAgent): void;

    hasExecuteWebLink(): boolean;
    clearExecuteWebLink(): void;
    getExecuteWebLink(): AgentTriggerTemplate.ExecuteWebLink | undefined;
    setExecuteWebLink(value?: AgentTriggerTemplate.ExecuteWebLink): void;

    getResultCase(): TransferCall.ResultCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferCall.AsObject;
    static toObject(includeInstance: boolean, msg: TransferCall): TransferCall.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferCall, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferCall;
    static deserializeBinaryFromReader(message: TransferCall, reader: jspb.BinaryReader): TransferCall;
  }

  export namespace TransferCall {
    export type AsObject = {
      duration: number,
      displayMessage?: AgentTriggerTemplate.DisplayMessage.AsObject,
      ejectAgent?: AgentTriggerTemplate.EjectAgent.AsObject,
      executeWebLink?: AgentTriggerTemplate.ExecuteWebLink.AsObject,
    }

    export enum ResultCase {
      RESULT_NOT_SET = 0,
      DISPLAY_MESSAGE = 2,
      EJECT_AGENT = 3,
      EXECUTE_WEB_LINK = 4,
    }
  }

  export class TransferLost extends jspb.Message {
    getDuration(): number;
    setDuration(value: number): void;

    hasDisplayMessage(): boolean;
    clearDisplayMessage(): void;
    getDisplayMessage(): AgentTriggerTemplate.DisplayMessage | undefined;
    setDisplayMessage(value?: AgentTriggerTemplate.DisplayMessage): void;

    hasEjectAgent(): boolean;
    clearEjectAgent(): void;
    getEjectAgent(): AgentTriggerTemplate.EjectAgent | undefined;
    setEjectAgent(value?: AgentTriggerTemplate.EjectAgent): void;

    hasExecuteWebLink(): boolean;
    clearExecuteWebLink(): void;
    getExecuteWebLink(): AgentTriggerTemplate.ExecuteWebLink | undefined;
    setExecuteWebLink(value?: AgentTriggerTemplate.ExecuteWebLink): void;

    getResultCase(): TransferLost.ResultCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferLost.AsObject;
    static toObject(includeInstance: boolean, msg: TransferLost): TransferLost.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferLost, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferLost;
    static deserializeBinaryFromReader(message: TransferLost, reader: jspb.BinaryReader): TransferLost;
  }

  export namespace TransferLost {
    export type AsObject = {
      duration: number,
      displayMessage?: AgentTriggerTemplate.DisplayMessage.AsObject,
      ejectAgent?: AgentTriggerTemplate.EjectAgent.AsObject,
      executeWebLink?: AgentTriggerTemplate.ExecuteWebLink.AsObject,
    }

    export enum ResultCase {
      RESULT_NOT_SET = 0,
      DISPLAY_MESSAGE = 2,
      EJECT_AGENT = 3,
      EXECUTE_WEB_LINK = 4,
    }
  }

  export class TransferTargetLost extends jspb.Message {
    getDuration(): number;
    setDuration(value: number): void;

    hasDisplayMessage(): boolean;
    clearDisplayMessage(): void;
    getDisplayMessage(): AgentTriggerTemplate.DisplayMessage | undefined;
    setDisplayMessage(value?: AgentTriggerTemplate.DisplayMessage): void;

    hasEjectAgent(): boolean;
    clearEjectAgent(): void;
    getEjectAgent(): AgentTriggerTemplate.EjectAgent | undefined;
    setEjectAgent(value?: AgentTriggerTemplate.EjectAgent): void;

    hasExecuteWebLink(): boolean;
    clearExecuteWebLink(): void;
    getExecuteWebLink(): AgentTriggerTemplate.ExecuteWebLink | undefined;
    setExecuteWebLink(value?: AgentTriggerTemplate.ExecuteWebLink): void;

    getResultCase(): TransferTargetLost.ResultCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferTargetLost.AsObject;
    static toObject(includeInstance: boolean, msg: TransferTargetLost): TransferTargetLost.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferTargetLost, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferTargetLost;
    static deserializeBinaryFromReader(message: TransferTargetLost, reader: jspb.BinaryReader): TransferTargetLost;
  }

  export namespace TransferTargetLost {
    export type AsObject = {
      duration: number,
      displayMessage?: AgentTriggerTemplate.DisplayMessage.AsObject,
      ejectAgent?: AgentTriggerTemplate.EjectAgent.AsObject,
      executeWebLink?: AgentTriggerTemplate.ExecuteWebLink.AsObject,
    }

    export enum ResultCase {
      RESULT_NOT_SET = 0,
      DISPLAY_MESSAGE = 2,
      EJECT_AGENT = 3,
      EXECUTE_WEB_LINK = 4,
    }
  }

  export class PreviewCall extends jspb.Message {
    getDuration(): number;
    setDuration(value: number): void;

    hasAdvanceStatus(): boolean;
    clearAdvanceStatus(): void;
    getAdvanceStatus(): AgentTriggerTemplate.AdvanceStatus | undefined;
    setAdvanceStatus(value?: AgentTriggerTemplate.AdvanceStatus): void;

    hasDisplayMessage(): boolean;
    clearDisplayMessage(): void;
    getDisplayMessage(): AgentTriggerTemplate.DisplayMessage | undefined;
    setDisplayMessage(value?: AgentTriggerTemplate.DisplayMessage): void;

    hasEjectAgent(): boolean;
    clearEjectAgent(): void;
    getEjectAgent(): AgentTriggerTemplate.EjectAgent | undefined;
    setEjectAgent(value?: AgentTriggerTemplate.EjectAgent): void;

    hasExecuteWebLink(): boolean;
    clearExecuteWebLink(): void;
    getExecuteWebLink(): AgentTriggerTemplate.ExecuteWebLink | undefined;
    setExecuteWebLink(value?: AgentTriggerTemplate.ExecuteWebLink): void;

    getResultCase(): PreviewCall.ResultCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PreviewCall.AsObject;
    static toObject(includeInstance: boolean, msg: PreviewCall): PreviewCall.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PreviewCall, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PreviewCall;
    static deserializeBinaryFromReader(message: PreviewCall, reader: jspb.BinaryReader): PreviewCall;
  }

  export namespace PreviewCall {
    export type AsObject = {
      duration: number,
      advanceStatus?: AgentTriggerTemplate.AdvanceStatus.AsObject,
      displayMessage?: AgentTriggerTemplate.DisplayMessage.AsObject,
      ejectAgent?: AgentTriggerTemplate.EjectAgent.AsObject,
      executeWebLink?: AgentTriggerTemplate.ExecuteWebLink.AsObject,
    }

    export enum ResultCase {
      RESULT_NOT_SET = 0,
      ADVANCE_STATUS = 2,
      DISPLAY_MESSAGE = 3,
      EJECT_AGENT = 4,
      EXECUTE_WEB_LINK = 5,
    }
  }

  export class ManualDialCall extends jspb.Message {
    getDuration(): number;
    setDuration(value: number): void;

    getScheduledCallbackPresent(): boolean;
    setScheduledCallbackPresent(value: boolean): void;

    hasAdvanceStatus(): boolean;
    clearAdvanceStatus(): void;
    getAdvanceStatus(): AgentTriggerTemplate.AdvanceStatus | undefined;
    setAdvanceStatus(value?: AgentTriggerTemplate.AdvanceStatus): void;

    hasDisplayMessage(): boolean;
    clearDisplayMessage(): void;
    getDisplayMessage(): AgentTriggerTemplate.DisplayMessage | undefined;
    setDisplayMessage(value?: AgentTriggerTemplate.DisplayMessage): void;

    hasEjectAgent(): boolean;
    clearEjectAgent(): void;
    getEjectAgent(): AgentTriggerTemplate.EjectAgent | undefined;
    setEjectAgent(value?: AgentTriggerTemplate.EjectAgent): void;

    hasExecuteWebLink(): boolean;
    clearExecuteWebLink(): void;
    getExecuteWebLink(): AgentTriggerTemplate.ExecuteWebLink | undefined;
    setExecuteWebLink(value?: AgentTriggerTemplate.ExecuteWebLink): void;

    getResultCase(): ManualDialCall.ResultCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ManualDialCall.AsObject;
    static toObject(includeInstance: boolean, msg: ManualDialCall): ManualDialCall.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ManualDialCall, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ManualDialCall;
    static deserializeBinaryFromReader(message: ManualDialCall, reader: jspb.BinaryReader): ManualDialCall;
  }

  export namespace ManualDialCall {
    export type AsObject = {
      duration: number,
      scheduledCallbackPresent: boolean,
      advanceStatus?: AgentTriggerTemplate.AdvanceStatus.AsObject,
      displayMessage?: AgentTriggerTemplate.DisplayMessage.AsObject,
      ejectAgent?: AgentTriggerTemplate.EjectAgent.AsObject,
      executeWebLink?: AgentTriggerTemplate.ExecuteWebLink.AsObject,
    }

    export enum ResultCase {
      RESULT_NOT_SET = 0,
      ADVANCE_STATUS = 3,
      DISPLAY_MESSAGE = 4,
      EJECT_AGENT = 5,
      EXECUTE_WEB_LINK = 6,
    }
  }

  export class WrapUp extends jspb.Message {
    getOutbound(): boolean;
    setOutbound(value: boolean): void;

    getInbound(): boolean;
    setInbound(value: boolean): void;

    getManual(): boolean;
    setManual(value: boolean): void;

    getPreview(): boolean;
    setPreview(value: boolean): void;

    getDuration(): number;
    setDuration(value: number): void;

    hasAdvanceStatus(): boolean;
    clearAdvanceStatus(): void;
    getAdvanceStatus(): AgentTriggerTemplate.AdvanceStatus | undefined;
    setAdvanceStatus(value?: AgentTriggerTemplate.AdvanceStatus): void;

    hasDisplayMessage(): boolean;
    clearDisplayMessage(): void;
    getDisplayMessage(): AgentTriggerTemplate.DisplayMessage | undefined;
    setDisplayMessage(value?: AgentTriggerTemplate.DisplayMessage): void;

    hasEjectAgent(): boolean;
    clearEjectAgent(): void;
    getEjectAgent(): AgentTriggerTemplate.EjectAgent | undefined;
    setEjectAgent(value?: AgentTriggerTemplate.EjectAgent): void;

    hasExecuteWebLink(): boolean;
    clearExecuteWebLink(): void;
    getExecuteWebLink(): AgentTriggerTemplate.ExecuteWebLink | undefined;
    setExecuteWebLink(value?: AgentTriggerTemplate.ExecuteWebLink): void;

    getResultCase(): WrapUp.ResultCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WrapUp.AsObject;
    static toObject(includeInstance: boolean, msg: WrapUp): WrapUp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WrapUp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WrapUp;
    static deserializeBinaryFromReader(message: WrapUp, reader: jspb.BinaryReader): WrapUp;
  }

  export namespace WrapUp {
    export type AsObject = {
      outbound: boolean,
      inbound: boolean,
      manual: boolean,
      preview: boolean,
      duration: number,
      advanceStatus?: AgentTriggerTemplate.AdvanceStatus.AsObject,
      displayMessage?: AgentTriggerTemplate.DisplayMessage.AsObject,
      ejectAgent?: AgentTriggerTemplate.EjectAgent.AsObject,
      executeWebLink?: AgentTriggerTemplate.ExecuteWebLink.AsObject,
    }

    export enum ResultCase {
      RESULT_NOT_SET = 0,
      ADVANCE_STATUS = 6,
      DISPLAY_MESSAGE = 7,
      EJECT_AGENT = 8,
      EXECUTE_WEB_LINK = 9,
    }
  }

  export class AdvanceStatus extends jspb.Message {
    getStatusType(): api_commons_org_pb.AdvanceStatusTypeMap[keyof api_commons_org_pb.AdvanceStatusTypeMap];
    setStatusType(value: api_commons_org_pb.AdvanceStatusTypeMap[keyof api_commons_org_pb.AdvanceStatusTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AdvanceStatus.AsObject;
    static toObject(includeInstance: boolean, msg: AdvanceStatus): AdvanceStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AdvanceStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AdvanceStatus;
    static deserializeBinaryFromReader(message: AdvanceStatus, reader: jspb.BinaryReader): AdvanceStatus;
  }

  export namespace AdvanceStatus {
    export type AsObject = {
      statusType: api_commons_org_pb.AdvanceStatusTypeMap[keyof api_commons_org_pb.AdvanceStatusTypeMap],
    }
  }

  export class DisplayMessage extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DisplayMessage.AsObject;
    static toObject(includeInstance: boolean, msg: DisplayMessage): DisplayMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DisplayMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DisplayMessage;
    static deserializeBinaryFromReader(message: DisplayMessage, reader: jspb.BinaryReader): DisplayMessage;
  }

  export namespace DisplayMessage {
    export type AsObject = {
      message: string,
    }
  }

  export class EjectAgent extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EjectAgent.AsObject;
    static toObject(includeInstance: boolean, msg: EjectAgent): EjectAgent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EjectAgent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EjectAgent;
    static deserializeBinaryFromReader(message: EjectAgent, reader: jspb.BinaryReader): EjectAgent;
  }

  export namespace EjectAgent {
    export type AsObject = {
    }
  }

  export class ExecuteWebLink extends jspb.Message {
    getWebLinkId(): string;
    setWebLinkId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecuteWebLink.AsObject;
    static toObject(includeInstance: boolean, msg: ExecuteWebLink): ExecuteWebLink.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecuteWebLink, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecuteWebLink;
    static deserializeBinaryFromReader(message: ExecuteWebLink, reader: jspb.BinaryReader): ExecuteWebLink;
  }

  export namespace ExecuteWebLink {
    export type AsObject = {
      webLinkId: string,
    }
  }

  export enum StatusCase {
    STATUS_NOT_SET = 0,
    LOGGED_IN = 2,
    WAITING = 3,
    PAUSED = 4,
    ON_CALL = 5,
    TRANSFER_CALL = 6,
    TRANSFER_LOST = 7,
    TRANSFER_TARGET_LOST = 8,
    PREVIEW_CALL = 9,
    MANUAL_DIAL_CALL = 10,
    WRAP_UP = 11,
  }
}

export class CreateAgentTriggerTemplateRequest extends jspb.Message {
  hasAgentTriggerTemplate(): boolean;
  clearAgentTriggerTemplate(): void;
  getAgentTriggerTemplate(): AgentTriggerTemplate | undefined;
  setAgentTriggerTemplate(value?: AgentTriggerTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAgentTriggerTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAgentTriggerTemplateRequest): CreateAgentTriggerTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAgentTriggerTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAgentTriggerTemplateRequest;
  static deserializeBinaryFromReader(message: CreateAgentTriggerTemplateRequest, reader: jspb.BinaryReader): CreateAgentTriggerTemplateRequest;
}

export namespace CreateAgentTriggerTemplateRequest {
  export type AsObject = {
    agentTriggerTemplate?: AgentTriggerTemplate.AsObject,
  }
}

export class CreateAgentTriggerTemplateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAgentTriggerTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAgentTriggerTemplateResponse): CreateAgentTriggerTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAgentTriggerTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAgentTriggerTemplateResponse;
  static deserializeBinaryFromReader(message: CreateAgentTriggerTemplateResponse, reader: jspb.BinaryReader): CreateAgentTriggerTemplateResponse;
}

export namespace CreateAgentTriggerTemplateResponse {
  export type AsObject = {
  }
}

export class ListAgentTriggerTemplatesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentTriggerTemplatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentTriggerTemplatesRequest): ListAgentTriggerTemplatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentTriggerTemplatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentTriggerTemplatesRequest;
  static deserializeBinaryFromReader(message: ListAgentTriggerTemplatesRequest, reader: jspb.BinaryReader): ListAgentTriggerTemplatesRequest;
}

export namespace ListAgentTriggerTemplatesRequest {
  export type AsObject = {
  }
}

export class ListAgentTriggerTemplatesResponse extends jspb.Message {
  clearAgentTriggerTemplatesList(): void;
  getAgentTriggerTemplatesList(): Array<AgentTriggerTemplate>;
  setAgentTriggerTemplatesList(value: Array<AgentTriggerTemplate>): void;
  addAgentTriggerTemplates(value?: AgentTriggerTemplate, index?: number): AgentTriggerTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentTriggerTemplatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentTriggerTemplatesResponse): ListAgentTriggerTemplatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentTriggerTemplatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentTriggerTemplatesResponse;
  static deserializeBinaryFromReader(message: ListAgentTriggerTemplatesResponse, reader: jspb.BinaryReader): ListAgentTriggerTemplatesResponse;
}

export namespace ListAgentTriggerTemplatesResponse {
  export type AsObject = {
    agentTriggerTemplatesList: Array<AgentTriggerTemplate.AsObject>,
  }
}

export class UpdateAgentTriggerTemplateRequest extends jspb.Message {
  hasAgentTriggerTemplate(): boolean;
  clearAgentTriggerTemplate(): void;
  getAgentTriggerTemplate(): AgentTriggerTemplate | undefined;
  setAgentTriggerTemplate(value?: AgentTriggerTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentTriggerTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentTriggerTemplateRequest): UpdateAgentTriggerTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentTriggerTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentTriggerTemplateRequest;
  static deserializeBinaryFromReader(message: UpdateAgentTriggerTemplateRequest, reader: jspb.BinaryReader): UpdateAgentTriggerTemplateRequest;
}

export namespace UpdateAgentTriggerTemplateRequest {
  export type AsObject = {
    agentTriggerTemplate?: AgentTriggerTemplate.AsObject,
  }
}

export class UpdateAgentTriggerTemplateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentTriggerTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentTriggerTemplateResponse): UpdateAgentTriggerTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentTriggerTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentTriggerTemplateResponse;
  static deserializeBinaryFromReader(message: UpdateAgentTriggerTemplateResponse, reader: jspb.BinaryReader): UpdateAgentTriggerTemplateResponse;
}

export namespace UpdateAgentTriggerTemplateResponse {
  export type AsObject = {
  }
}

export class DeleteAgentTriggerTemplateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAgentTriggerTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAgentTriggerTemplateRequest): DeleteAgentTriggerTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAgentTriggerTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAgentTriggerTemplateRequest;
  static deserializeBinaryFromReader(message: DeleteAgentTriggerTemplateRequest, reader: jspb.BinaryReader): DeleteAgentTriggerTemplateRequest;
}

export namespace DeleteAgentTriggerTemplateRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteAgentTriggerTemplateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAgentTriggerTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAgentTriggerTemplateResponse): DeleteAgentTriggerTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAgentTriggerTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAgentTriggerTemplateResponse;
  static deserializeBinaryFromReader(message: DeleteAgentTriggerTemplateResponse, reader: jspb.BinaryReader): DeleteAgentTriggerTemplateResponse;
}

export namespace DeleteAgentTriggerTemplateResponse {
  export type AsObject = {
  }
}

export class GetAgentTriggerTemplateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentTriggerTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentTriggerTemplateRequest): GetAgentTriggerTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentTriggerTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentTriggerTemplateRequest;
  static deserializeBinaryFromReader(message: GetAgentTriggerTemplateRequest, reader: jspb.BinaryReader): GetAgentTriggerTemplateRequest;
}

export namespace GetAgentTriggerTemplateRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetAgentTriggerTemplateResponse extends jspb.Message {
  hasAgentTriggerTemplate(): boolean;
  clearAgentTriggerTemplate(): void;
  getAgentTriggerTemplate(): AgentTriggerTemplate | undefined;
  setAgentTriggerTemplate(value?: AgentTriggerTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentTriggerTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentTriggerTemplateResponse): GetAgentTriggerTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentTriggerTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentTriggerTemplateResponse;
  static deserializeBinaryFromReader(message: GetAgentTriggerTemplateResponse, reader: jspb.BinaryReader): GetAgentTriggerTemplateResponse;
}

export namespace GetAgentTriggerTemplateResponse {
  export type AsObject = {
    agentTriggerTemplate?: AgentTriggerTemplate.AsObject,
  }
}

export class ListAgentPauseCodesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentPauseCodesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentPauseCodesRequest): ListAgentPauseCodesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentPauseCodesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentPauseCodesRequest;
  static deserializeBinaryFromReader(message: ListAgentPauseCodesRequest, reader: jspb.BinaryReader): ListAgentPauseCodesRequest;
}

export namespace ListAgentPauseCodesRequest {
  export type AsObject = {
  }
}

export class ListAgentPauseCodesResponse extends jspb.Message {
  clearPauseCodesList(): void;
  getPauseCodesList(): Array<PauseCode>;
  setPauseCodesList(value: Array<PauseCode>): void;
  addPauseCodes(value?: PauseCode, index?: number): PauseCode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentPauseCodesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentPauseCodesResponse): ListAgentPauseCodesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentPauseCodesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentPauseCodesResponse;
  static deserializeBinaryFromReader(message: ListAgentPauseCodesResponse, reader: jspb.BinaryReader): ListAgentPauseCodesResponse;
}

export namespace ListAgentPauseCodesResponse {
  export type AsObject = {
    pauseCodesList: Array<PauseCode.AsObject>,
  }
}

export class CreateAgentPauseCodeRequest extends jspb.Message {
  hasPauseCode(): boolean;
  clearPauseCode(): void;
  getPauseCode(): PauseCode | undefined;
  setPauseCode(value?: PauseCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAgentPauseCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAgentPauseCodeRequest): CreateAgentPauseCodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAgentPauseCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAgentPauseCodeRequest;
  static deserializeBinaryFromReader(message: CreateAgentPauseCodeRequest, reader: jspb.BinaryReader): CreateAgentPauseCodeRequest;
}

export namespace CreateAgentPauseCodeRequest {
  export type AsObject = {
    pauseCode?: PauseCode.AsObject,
  }
}

export class CreateAgentPauseCodeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAgentPauseCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAgentPauseCodeResponse): CreateAgentPauseCodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAgentPauseCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAgentPauseCodeResponse;
  static deserializeBinaryFromReader(message: CreateAgentPauseCodeResponse, reader: jspb.BinaryReader): CreateAgentPauseCodeResponse;
}

export namespace CreateAgentPauseCodeResponse {
  export type AsObject = {
  }
}

export class UpdateAgentPauseCodeRequest extends jspb.Message {
  hasPauseCode(): boolean;
  clearPauseCode(): void;
  getPauseCode(): PauseCode | undefined;
  setPauseCode(value?: PauseCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentPauseCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentPauseCodeRequest): UpdateAgentPauseCodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentPauseCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentPauseCodeRequest;
  static deserializeBinaryFromReader(message: UpdateAgentPauseCodeRequest, reader: jspb.BinaryReader): UpdateAgentPauseCodeRequest;
}

export namespace UpdateAgentPauseCodeRequest {
  export type AsObject = {
    pauseCode?: PauseCode.AsObject,
  }
}

export class UpdateAgentPauseCodeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentPauseCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentPauseCodeResponse): UpdateAgentPauseCodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentPauseCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentPauseCodeResponse;
  static deserializeBinaryFromReader(message: UpdateAgentPauseCodeResponse, reader: jspb.BinaryReader): UpdateAgentPauseCodeResponse;
}

export namespace UpdateAgentPauseCodeResponse {
  export type AsObject = {
  }
}

export class DeleteAgentPauseCodeRequest extends jspb.Message {
  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAgentPauseCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAgentPauseCodeRequest): DeleteAgentPauseCodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAgentPauseCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAgentPauseCodeRequest;
  static deserializeBinaryFromReader(message: DeleteAgentPauseCodeRequest, reader: jspb.BinaryReader): DeleteAgentPauseCodeRequest;
}

export namespace DeleteAgentPauseCodeRequest {
  export type AsObject = {
    xmlClientPropertySid: number,
  }
}

export class DeleteAgentPauseCodeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAgentPauseCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAgentPauseCodeResponse): DeleteAgentPauseCodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAgentPauseCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAgentPauseCodeResponse;
  static deserializeBinaryFromReader(message: DeleteAgentPauseCodeResponse, reader: jspb.BinaryReader): DeleteAgentPauseCodeResponse;
}

export namespace DeleteAgentPauseCodeResponse {
  export type AsObject = {
  }
}

export class PauseCode extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearCodesList(): void;
  getCodesList(): Array<string>;
  setCodesList(value: Array<string>): void;
  addCodes(value: string, index?: number): string;

  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseCode.AsObject;
  static toObject(includeInstance: boolean, msg: PauseCode): PauseCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PauseCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseCode;
  static deserializeBinaryFromReader(message: PauseCode, reader: jspb.BinaryReader): PauseCode;
}

export namespace PauseCode {
  export type AsObject = {
    name: string,
    description: string,
    codesList: Array<string>,
    xmlClientPropertySid: number,
  }
}

export class ListCustomReportFiltersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomReportFiltersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomReportFiltersRequest): ListCustomReportFiltersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCustomReportFiltersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomReportFiltersRequest;
  static deserializeBinaryFromReader(message: ListCustomReportFiltersRequest, reader: jspb.BinaryReader): ListCustomReportFiltersRequest;
}

export namespace ListCustomReportFiltersRequest {
  export type AsObject = {
  }
}

export class ListCustomReportFiltersResponse extends jspb.Message {
  clearFiltersList(): void;
  getFiltersList(): Array<CustomReportFilter>;
  setFiltersList(value: Array<CustomReportFilter>): void;
  addFilters(value?: CustomReportFilter, index?: number): CustomReportFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomReportFiltersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomReportFiltersResponse): ListCustomReportFiltersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCustomReportFiltersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomReportFiltersResponse;
  static deserializeBinaryFromReader(message: ListCustomReportFiltersResponse, reader: jspb.BinaryReader): ListCustomReportFiltersResponse;
}

export namespace ListCustomReportFiltersResponse {
  export type AsObject = {
    filtersList: Array<CustomReportFilter.AsObject>,
  }
}

export class GetCustomReportFilterRequest extends jspb.Message {
  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomReportFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomReportFilterRequest): GetCustomReportFilterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomReportFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomReportFilterRequest;
  static deserializeBinaryFromReader(message: GetCustomReportFilterRequest, reader: jspb.BinaryReader): GetCustomReportFilterRequest;
}

export namespace GetCustomReportFilterRequest {
  export type AsObject = {
    xmlClientPropertySid: number,
  }
}

export class GetCustomReportFilterResponse extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): CustomReportFilter | undefined;
  setFilter(value?: CustomReportFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomReportFilterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomReportFilterResponse): GetCustomReportFilterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomReportFilterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomReportFilterResponse;
  static deserializeBinaryFromReader(message: GetCustomReportFilterResponse, reader: jspb.BinaryReader): GetCustomReportFilterResponse;
}

export namespace GetCustomReportFilterResponse {
  export type AsObject = {
    filter?: CustomReportFilter.AsObject,
  }
}

export class CreateCustomReportFilterRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): CustomReportFilter | undefined;
  setFilter(value?: CustomReportFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomReportFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomReportFilterRequest): CreateCustomReportFilterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCustomReportFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomReportFilterRequest;
  static deserializeBinaryFromReader(message: CreateCustomReportFilterRequest, reader: jspb.BinaryReader): CreateCustomReportFilterRequest;
}

export namespace CreateCustomReportFilterRequest {
  export type AsObject = {
    filter?: CustomReportFilter.AsObject,
  }
}

export class CreateCustomReportFilterResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomReportFilterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomReportFilterResponse): CreateCustomReportFilterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCustomReportFilterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomReportFilterResponse;
  static deserializeBinaryFromReader(message: CreateCustomReportFilterResponse, reader: jspb.BinaryReader): CreateCustomReportFilterResponse;
}

export namespace CreateCustomReportFilterResponse {
  export type AsObject = {
  }
}

export class UpdateCustomReportFilterRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): CustomReportFilter | undefined;
  setFilter(value?: CustomReportFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomReportFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomReportFilterRequest): UpdateCustomReportFilterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCustomReportFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomReportFilterRequest;
  static deserializeBinaryFromReader(message: UpdateCustomReportFilterRequest, reader: jspb.BinaryReader): UpdateCustomReportFilterRequest;
}

export namespace UpdateCustomReportFilterRequest {
  export type AsObject = {
    filter?: CustomReportFilter.AsObject,
  }
}

export class UpdateCustomReportFilterResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomReportFilterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomReportFilterResponse): UpdateCustomReportFilterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCustomReportFilterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomReportFilterResponse;
  static deserializeBinaryFromReader(message: UpdateCustomReportFilterResponse, reader: jspb.BinaryReader): UpdateCustomReportFilterResponse;
}

export namespace UpdateCustomReportFilterResponse {
  export type AsObject = {
  }
}

export class DeleteCustomReportFilterRequest extends jspb.Message {
  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomReportFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomReportFilterRequest): DeleteCustomReportFilterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCustomReportFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomReportFilterRequest;
  static deserializeBinaryFromReader(message: DeleteCustomReportFilterRequest, reader: jspb.BinaryReader): DeleteCustomReportFilterRequest;
}

export namespace DeleteCustomReportFilterRequest {
  export type AsObject = {
    xmlClientPropertySid: number,
  }
}

export class DeleteCustomReportFilterResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomReportFilterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomReportFilterResponse): DeleteCustomReportFilterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCustomReportFilterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomReportFilterResponse;
  static deserializeBinaryFromReader(message: DeleteCustomReportFilterResponse, reader: jspb.BinaryReader): DeleteCustomReportFilterResponse;
}

export namespace DeleteCustomReportFilterResponse {
  export type AsObject = {
  }
}

export class ListAgentResponseGroupsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentResponseGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentResponseGroupsRequest): ListAgentResponseGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentResponseGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentResponseGroupsRequest;
  static deserializeBinaryFromReader(message: ListAgentResponseGroupsRequest, reader: jspb.BinaryReader): ListAgentResponseGroupsRequest;
}

export namespace ListAgentResponseGroupsRequest {
  export type AsObject = {
  }
}

export class ListAgentResponseGroupsResponse extends jspb.Message {
  clearAgentResponsesList(): void;
  getAgentResponsesList(): Array<string>;
  setAgentResponsesList(value: Array<string>): void;
  addAgentResponses(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentResponseGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentResponseGroupsResponse): ListAgentResponseGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentResponseGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentResponseGroupsResponse;
  static deserializeBinaryFromReader(message: ListAgentResponseGroupsResponse, reader: jspb.BinaryReader): ListAgentResponseGroupsResponse;
}

export namespace ListAgentResponseGroupsResponse {
  export type AsObject = {
    agentResponsesList: Array<string>,
  }
}

export class ListLastTemplateElementsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLastTemplateElementsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLastTemplateElementsRequest): ListLastTemplateElementsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLastTemplateElementsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLastTemplateElementsRequest;
  static deserializeBinaryFromReader(message: ListLastTemplateElementsRequest, reader: jspb.BinaryReader): ListLastTemplateElementsRequest;
}

export namespace ListLastTemplateElementsRequest {
  export type AsObject = {
  }
}

export class ListLastTemplateElementsResponse extends jspb.Message {
  clearTemplateElementsList(): void;
  getTemplateElementsList(): Array<string>;
  setTemplateElementsList(value: Array<string>): void;
  addTemplateElements(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLastTemplateElementsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLastTemplateElementsResponse): ListLastTemplateElementsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLastTemplateElementsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLastTemplateElementsResponse;
  static deserializeBinaryFromReader(message: ListLastTemplateElementsResponse, reader: jspb.BinaryReader): ListLastTemplateElementsResponse;
}

export namespace ListLastTemplateElementsResponse {
  export type AsObject = {
    templateElementsList: Array<string>,
  }
}

export class ClientInfoDisplayTemplate extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDisplayAllFields(): boolean;
  setDisplayAllFields(value: boolean): void;

  hasDialedNumberFieldStyle(): boolean;
  clearDialedNumberFieldStyle(): void;
  getDialedNumberFieldStyle(): DialedNumberFieldStyle | undefined;
  setDialedNumberFieldStyle(value?: DialedNumberFieldStyle): void;

  clearContactFieldStylesList(): void;
  getContactFieldStylesList(): Array<ContactFieldStyle>;
  setContactFieldStylesList(value: Array<ContactFieldStyle>): void;
  addContactFieldStyles(value?: ContactFieldStyle, index?: number): ContactFieldStyle;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientInfoDisplayTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: ClientInfoDisplayTemplate): ClientInfoDisplayTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientInfoDisplayTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientInfoDisplayTemplate;
  static deserializeBinaryFromReader(message: ClientInfoDisplayTemplate, reader: jspb.BinaryReader): ClientInfoDisplayTemplate;
}

export namespace ClientInfoDisplayTemplate {
  export type AsObject = {
    name: string,
    description: string,
    displayAllFields: boolean,
    dialedNumberFieldStyle?: DialedNumberFieldStyle.AsObject,
    contactFieldStylesList: Array<ContactFieldStyle.AsObject>,
    id: string,
  }
}

export class DialedNumberFieldStyle extends jspb.Message {
  hasTextColor(): boolean;
  clearTextColor(): void;
  getTextColor(): Color | undefined;
  setTextColor(value?: Color): void;

  hasBackgroundColor(): boolean;
  clearBackgroundColor(): void;
  getBackgroundColor(): Color | undefined;
  setBackgroundColor(value?: Color): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DialedNumberFieldStyle.AsObject;
  static toObject(includeInstance: boolean, msg: DialedNumberFieldStyle): DialedNumberFieldStyle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DialedNumberFieldStyle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DialedNumberFieldStyle;
  static deserializeBinaryFromReader(message: DialedNumberFieldStyle, reader: jspb.BinaryReader): DialedNumberFieldStyle;
}

export namespace DialedNumberFieldStyle {
  export type AsObject = {
    textColor?: Color.AsObject,
    backgroundColor?: Color.AsObject,
  }
}

export class ContactFieldStyle extends jspb.Message {
  getContactFieldDescriptionSid(): number;
  setContactFieldDescriptionSid(value: number): void;

  hasTextColor(): boolean;
  clearTextColor(): void;
  getTextColor(): Color | undefined;
  setTextColor(value?: Color): void;

  hasBackgroundColor(): boolean;
  clearBackgroundColor(): void;
  getBackgroundColor(): Color | undefined;
  setBackgroundColor(value?: Color): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactFieldStyle.AsObject;
  static toObject(includeInstance: boolean, msg: ContactFieldStyle): ContactFieldStyle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactFieldStyle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactFieldStyle;
  static deserializeBinaryFromReader(message: ContactFieldStyle, reader: jspb.BinaryReader): ContactFieldStyle;
}

export namespace ContactFieldStyle {
  export type AsObject = {
    contactFieldDescriptionSid: number,
    textColor?: Color.AsObject,
    backgroundColor?: Color.AsObject,
  }
}

export class Color extends jspb.Message {
  getRed(): number;
  setRed(value: number): void;

  getGreen(): number;
  setGreen(value: number): void;

  getBlue(): number;
  setBlue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Color.AsObject;
  static toObject(includeInstance: boolean, msg: Color): Color.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Color, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Color;
  static deserializeBinaryFromReader(message: Color, reader: jspb.BinaryReader): Color;
}

export namespace Color {
  export type AsObject = {
    red: number,
    green: number,
    blue: number,
  }
}

export class CreateClientInfoDisplayTemplateRequest extends jspb.Message {
  hasClientInfoDisplayTemplate(): boolean;
  clearClientInfoDisplayTemplate(): void;
  getClientInfoDisplayTemplate(): ClientInfoDisplayTemplate | undefined;
  setClientInfoDisplayTemplate(value?: ClientInfoDisplayTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateClientInfoDisplayTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateClientInfoDisplayTemplateRequest): CreateClientInfoDisplayTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateClientInfoDisplayTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateClientInfoDisplayTemplateRequest;
  static deserializeBinaryFromReader(message: CreateClientInfoDisplayTemplateRequest, reader: jspb.BinaryReader): CreateClientInfoDisplayTemplateRequest;
}

export namespace CreateClientInfoDisplayTemplateRequest {
  export type AsObject = {
    clientInfoDisplayTemplate?: ClientInfoDisplayTemplate.AsObject,
  }
}

export class CreateClientInfoDisplayTemplateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateClientInfoDisplayTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateClientInfoDisplayTemplateResponse): CreateClientInfoDisplayTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateClientInfoDisplayTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateClientInfoDisplayTemplateResponse;
  static deserializeBinaryFromReader(message: CreateClientInfoDisplayTemplateResponse, reader: jspb.BinaryReader): CreateClientInfoDisplayTemplateResponse;
}

export namespace CreateClientInfoDisplayTemplateResponse {
  export type AsObject = {
  }
}

export class ListClientInfoDisplayTemplatesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListClientInfoDisplayTemplatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListClientInfoDisplayTemplatesRequest): ListClientInfoDisplayTemplatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListClientInfoDisplayTemplatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListClientInfoDisplayTemplatesRequest;
  static deserializeBinaryFromReader(message: ListClientInfoDisplayTemplatesRequest, reader: jspb.BinaryReader): ListClientInfoDisplayTemplatesRequest;
}

export namespace ListClientInfoDisplayTemplatesRequest {
  export type AsObject = {
  }
}

export class ListClientInfoDisplayTemplatesResponse extends jspb.Message {
  clearClientInfoDisplayTemplatesList(): void;
  getClientInfoDisplayTemplatesList(): Array<ClientInfoDisplayTemplate>;
  setClientInfoDisplayTemplatesList(value: Array<ClientInfoDisplayTemplate>): void;
  addClientInfoDisplayTemplates(value?: ClientInfoDisplayTemplate, index?: number): ClientInfoDisplayTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListClientInfoDisplayTemplatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListClientInfoDisplayTemplatesResponse): ListClientInfoDisplayTemplatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListClientInfoDisplayTemplatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListClientInfoDisplayTemplatesResponse;
  static deserializeBinaryFromReader(message: ListClientInfoDisplayTemplatesResponse, reader: jspb.BinaryReader): ListClientInfoDisplayTemplatesResponse;
}

export namespace ListClientInfoDisplayTemplatesResponse {
  export type AsObject = {
    clientInfoDisplayTemplatesList: Array<ClientInfoDisplayTemplate.AsObject>,
  }
}

export class UpdateClientInfoDisplayTemplateRequest extends jspb.Message {
  hasClientInfoDisplayTemplate(): boolean;
  clearClientInfoDisplayTemplate(): void;
  getClientInfoDisplayTemplate(): ClientInfoDisplayTemplate | undefined;
  setClientInfoDisplayTemplate(value?: ClientInfoDisplayTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateClientInfoDisplayTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateClientInfoDisplayTemplateRequest): UpdateClientInfoDisplayTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateClientInfoDisplayTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateClientInfoDisplayTemplateRequest;
  static deserializeBinaryFromReader(message: UpdateClientInfoDisplayTemplateRequest, reader: jspb.BinaryReader): UpdateClientInfoDisplayTemplateRequest;
}

export namespace UpdateClientInfoDisplayTemplateRequest {
  export type AsObject = {
    clientInfoDisplayTemplate?: ClientInfoDisplayTemplate.AsObject,
  }
}

export class UpdateClientInfoDisplayTemplateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateClientInfoDisplayTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateClientInfoDisplayTemplateResponse): UpdateClientInfoDisplayTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateClientInfoDisplayTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateClientInfoDisplayTemplateResponse;
  static deserializeBinaryFromReader(message: UpdateClientInfoDisplayTemplateResponse, reader: jspb.BinaryReader): UpdateClientInfoDisplayTemplateResponse;
}

export namespace UpdateClientInfoDisplayTemplateResponse {
  export type AsObject = {
  }
}

export class DeleteClientInfoDisplayTemplateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteClientInfoDisplayTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteClientInfoDisplayTemplateRequest): DeleteClientInfoDisplayTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteClientInfoDisplayTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteClientInfoDisplayTemplateRequest;
  static deserializeBinaryFromReader(message: DeleteClientInfoDisplayTemplateRequest, reader: jspb.BinaryReader): DeleteClientInfoDisplayTemplateRequest;
}

export namespace DeleteClientInfoDisplayTemplateRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteClientInfoDisplayTemplateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteClientInfoDisplayTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteClientInfoDisplayTemplateResponse): DeleteClientInfoDisplayTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteClientInfoDisplayTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteClientInfoDisplayTemplateResponse;
  static deserializeBinaryFromReader(message: DeleteClientInfoDisplayTemplateResponse, reader: jspb.BinaryReader): DeleteClientInfoDisplayTemplateResponse;
}

export namespace DeleteClientInfoDisplayTemplateResponse {
  export type AsObject = {
  }
}

export class GetClientInfoDisplayTemplateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClientInfoDisplayTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetClientInfoDisplayTemplateRequest): GetClientInfoDisplayTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetClientInfoDisplayTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClientInfoDisplayTemplateRequest;
  static deserializeBinaryFromReader(message: GetClientInfoDisplayTemplateRequest, reader: jspb.BinaryReader): GetClientInfoDisplayTemplateRequest;
}

export namespace GetClientInfoDisplayTemplateRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetClientInfoDisplayTemplateResponse extends jspb.Message {
  hasClientInfoDisplayTemplate(): boolean;
  clearClientInfoDisplayTemplate(): void;
  getClientInfoDisplayTemplate(): ClientInfoDisplayTemplate | undefined;
  setClientInfoDisplayTemplate(value?: ClientInfoDisplayTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClientInfoDisplayTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetClientInfoDisplayTemplateResponse): GetClientInfoDisplayTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetClientInfoDisplayTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClientInfoDisplayTemplateResponse;
  static deserializeBinaryFromReader(message: GetClientInfoDisplayTemplateResponse, reader: jspb.BinaryReader): GetClientInfoDisplayTemplateResponse;
}

export namespace GetClientInfoDisplayTemplateResponse {
  export type AsObject = {
    clientInfoDisplayTemplate?: ClientInfoDisplayTemplate.AsObject,
  }
}

export class CreateUserRequest extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getUserName(): string;
  setUserName(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  clearPermissionGroupIdsList(): void;
  getPermissionGroupIdsList(): Array<string>;
  setPermissionGroupIdsList(value: Array<string>): void;
  addPermissionGroupIds(value: string, index?: number): string;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getPartnerAgentId(): string;
  setPartnerAgentId(value: string): void;

  getP3PermissionGroupId(): string;
  setP3PermissionGroupId(value: string): void;

  clearLinkbackNumbersList(): void;
  getLinkbackNumbersList(): Array<string>;
  setLinkbackNumbersList(value: Array<string>): void;
  addLinkbackNumbers(value: string, index?: number): string;

  clearCallerIdsList(): void;
  getCallerIdsList(): Array<string>;
  setCallerIdsList(value: Array<string>): void;
  addCallerIds(value: string, index?: number): string;

  getDefaultApp(): api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap];
  setDefaultApp(value: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap]): void;

  getUserCallerId(): string;
  setUserCallerId(value: string): void;

  getAgentProfileGroupId(): string;
  setAgentProfileGroupId(value: string): void;

  clearLabelsList(): void;
  getLabelsList(): Array<string>;
  setLabelsList(value: Array<string>): void;
  addLabels(value: string, index?: number): string;

  hasTimeZoneOverride(): boolean;
  clearTimeZoneOverride(): void;
  getTimeZoneOverride(): api_commons_org_pb.TimeZoneWrapper | undefined;
  setTimeZoneOverride(value?: api_commons_org_pb.TimeZoneWrapper): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
  static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
    firstName: string,
    lastName: string,
    email: string,
    userName: string,
    password: string,
    permissionGroupIdsList: Array<string>,
    huntGroupSid: number,
    partnerAgentId: string,
    p3PermissionGroupId: string,
    linkbackNumbersList: Array<string>,
    callerIdsList: Array<string>,
    defaultApp: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap],
    userCallerId: string,
    agentProfileGroupId: string,
    labelsList: Array<string>,
    timeZoneOverride?: api_commons_org_pb.TimeZoneWrapper.AsObject,
  }
}

export class CreateUserResponse extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserResponse): CreateUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserResponse;
  static deserializeBinaryFromReader(message: CreateUserResponse, reader: jspb.BinaryReader): CreateUserResponse;
}

export namespace CreateUserResponse {
  export type AsObject = {
    userId: string,
  }
}

export class CreateUserByOrgIdRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getUserName(): string;
  setUserName(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  clearPermissionGroupIdsList(): void;
  getPermissionGroupIdsList(): Array<string>;
  setPermissionGroupIdsList(value: Array<string>): void;
  addPermissionGroupIds(value: string, index?: number): string;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getPartnerAgentId(): string;
  setPartnerAgentId(value: string): void;

  getP3PermissionGroupId(): string;
  setP3PermissionGroupId(value: string): void;

  clearLinkbackNumbersList(): void;
  getLinkbackNumbersList(): Array<string>;
  setLinkbackNumbersList(value: Array<string>): void;
  addLinkbackNumbers(value: string, index?: number): string;

  clearCallerIdsList(): void;
  getCallerIdsList(): Array<string>;
  setCallerIdsList(value: Array<string>): void;
  addCallerIds(value: string, index?: number): string;

  getDefaultApp(): api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap];
  setDefaultApp(value: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap]): void;

  getUserCallerId(): string;
  setUserCallerId(value: string): void;

  getAgentProfileGroupId(): string;
  setAgentProfileGroupId(value: string): void;

  clearLabelsList(): void;
  getLabelsList(): Array<string>;
  setLabelsList(value: Array<string>): void;
  addLabels(value: string, index?: number): string;

  hasTimeZoneOverride(): boolean;
  clearTimeZoneOverride(): void;
  getTimeZoneOverride(): api_commons_org_pb.TimeZoneWrapper | undefined;
  setTimeZoneOverride(value?: api_commons_org_pb.TimeZoneWrapper): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserByOrgIdRequest): CreateUserByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUserByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserByOrgIdRequest;
  static deserializeBinaryFromReader(message: CreateUserByOrgIdRequest, reader: jspb.BinaryReader): CreateUserByOrgIdRequest;
}

export namespace CreateUserByOrgIdRequest {
  export type AsObject = {
    orgId: string,
    firstName: string,
    lastName: string,
    email: string,
    userName: string,
    password: string,
    permissionGroupIdsList: Array<string>,
    huntGroupSid: number,
    partnerAgentId: string,
    p3PermissionGroupId: string,
    linkbackNumbersList: Array<string>,
    callerIdsList: Array<string>,
    defaultApp: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap],
    userCallerId: string,
    agentProfileGroupId: string,
    labelsList: Array<string>,
    timeZoneOverride?: api_commons_org_pb.TimeZoneWrapper.AsObject,
  }
}

export class CreateUserByOrgIdResponse extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserByOrgIdResponse): CreateUserByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUserByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserByOrgIdResponse;
  static deserializeBinaryFromReader(message: CreateUserByOrgIdResponse, reader: jspb.BinaryReader): CreateUserByOrgIdResponse;
}

export namespace CreateUserByOrgIdResponse {
  export type AsObject = {
    userId: string,
  }
}

export class UpdateUserPasswordRequest extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): void;

  getCurrentPassword(): string;
  setCurrentPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserPasswordRequest): UpdateUserPasswordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserPasswordRequest;
  static deserializeBinaryFromReader(message: UpdateUserPasswordRequest, reader: jspb.BinaryReader): UpdateUserPasswordRequest;
}

export namespace UpdateUserPasswordRequest {
  export type AsObject = {
    password: string,
    currentPassword: string,
  }
}

export class UpdateUserPasswordResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserPasswordResponse): UpdateUserPasswordResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserPasswordResponse;
  static deserializeBinaryFromReader(message: UpdateUserPasswordResponse, reader: jspb.BinaryReader): UpdateUserPasswordResponse;
}

export namespace UpdateUserPasswordResponse {
  export type AsObject = {
  }
}

export class UpdateUserPasswordByUserIdRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getCurrentPassword(): string;
  setCurrentPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserPasswordByUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserPasswordByUserIdRequest): UpdateUserPasswordByUserIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserPasswordByUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserPasswordByUserIdRequest;
  static deserializeBinaryFromReader(message: UpdateUserPasswordByUserIdRequest, reader: jspb.BinaryReader): UpdateUserPasswordByUserIdRequest;
}

export namespace UpdateUserPasswordByUserIdRequest {
  export type AsObject = {
    userId: string,
    password: string,
    currentPassword: string,
  }
}

export class UpdateUserPasswordByUserIdResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserPasswordByUserIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserPasswordByUserIdResponse): UpdateUserPasswordByUserIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserPasswordByUserIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserPasswordByUserIdResponse;
  static deserializeBinaryFromReader(message: UpdateUserPasswordByUserIdResponse, reader: jspb.BinaryReader): UpdateUserPasswordByUserIdResponse;
}

export namespace UpdateUserPasswordByUserIdResponse {
  export type AsObject = {
  }
}

export class UpdateUserPasswordByOrgIdRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getCurrentPassword(): string;
  setCurrentPassword(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserPasswordByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserPasswordByOrgIdRequest): UpdateUserPasswordByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserPasswordByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserPasswordByOrgIdRequest;
  static deserializeBinaryFromReader(message: UpdateUserPasswordByOrgIdRequest, reader: jspb.BinaryReader): UpdateUserPasswordByOrgIdRequest;
}

export namespace UpdateUserPasswordByOrgIdRequest {
  export type AsObject = {
    userId: string,
    password: string,
    currentPassword: string,
    orgId: string,
  }
}

export class UpdateUserPasswordByOrgIdResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserPasswordByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserPasswordByOrgIdResponse): UpdateUserPasswordByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserPasswordByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserPasswordByOrgIdResponse;
  static deserializeBinaryFromReader(message: UpdateUserPasswordByOrgIdResponse, reader: jspb.BinaryReader): UpdateUserPasswordByOrgIdResponse;
}

export namespace UpdateUserPasswordByOrgIdResponse {
  export type AsObject = {
  }
}

export class GetMyUserPasswordResetLinkRequest extends jspb.Message {
  getTtl(): number;
  setTtl(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyUserPasswordResetLinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyUserPasswordResetLinkRequest): GetMyUserPasswordResetLinkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMyUserPasswordResetLinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyUserPasswordResetLinkRequest;
  static deserializeBinaryFromReader(message: GetMyUserPasswordResetLinkRequest, reader: jspb.BinaryReader): GetMyUserPasswordResetLinkRequest;
}

export namespace GetMyUserPasswordResetLinkRequest {
  export type AsObject = {
    ttl: number,
  }
}

export class GetMyUserPasswordResetLinkResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyUserPasswordResetLinkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyUserPasswordResetLinkResponse): GetMyUserPasswordResetLinkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMyUserPasswordResetLinkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyUserPasswordResetLinkResponse;
  static deserializeBinaryFromReader(message: GetMyUserPasswordResetLinkResponse, reader: jspb.BinaryReader): GetMyUserPasswordResetLinkResponse;
}

export namespace GetMyUserPasswordResetLinkResponse {
  export type AsObject = {
    url: string,
  }
}

export class GetUserPasswordResetLinkRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getTtl(): number;
  setTtl(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserPasswordResetLinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserPasswordResetLinkRequest): GetUserPasswordResetLinkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserPasswordResetLinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserPasswordResetLinkRequest;
  static deserializeBinaryFromReader(message: GetUserPasswordResetLinkRequest, reader: jspb.BinaryReader): GetUserPasswordResetLinkRequest;
}

export namespace GetUserPasswordResetLinkRequest {
  export type AsObject = {
    userId: string,
    ttl: number,
  }
}

export class GetUserPasswordResetLinkResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserPasswordResetLinkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserPasswordResetLinkResponse): GetUserPasswordResetLinkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserPasswordResetLinkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserPasswordResetLinkResponse;
  static deserializeBinaryFromReader(message: GetUserPasswordResetLinkResponse, reader: jspb.BinaryReader): GetUserPasswordResetLinkResponse;
}

export namespace GetUserPasswordResetLinkResponse {
  export type AsObject = {
    url: string,
  }
}

export class GetUserPasswordResetLinkByOrgIdRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getTtl(): number;
  setTtl(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserPasswordResetLinkByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserPasswordResetLinkByOrgIdRequest): GetUserPasswordResetLinkByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserPasswordResetLinkByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserPasswordResetLinkByOrgIdRequest;
  static deserializeBinaryFromReader(message: GetUserPasswordResetLinkByOrgIdRequest, reader: jspb.BinaryReader): GetUserPasswordResetLinkByOrgIdRequest;
}

export namespace GetUserPasswordResetLinkByOrgIdRequest {
  export type AsObject = {
    userId: string,
    orgId: string,
    ttl: number,
  }
}

export class GetUserPasswordResetLinkByOrgIdResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserPasswordResetLinkByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserPasswordResetLinkByOrgIdResponse): GetUserPasswordResetLinkByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserPasswordResetLinkByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserPasswordResetLinkByOrgIdResponse;
  static deserializeBinaryFromReader(message: GetUserPasswordResetLinkByOrgIdResponse, reader: jspb.BinaryReader): GetUserPasswordResetLinkByOrgIdResponse;
}

export namespace GetUserPasswordResetLinkByOrgIdResponse {
  export type AsObject = {
    url: string,
  }
}

export class ResetUserRequirePasswordResetRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetUserRequirePasswordResetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetUserRequirePasswordResetRequest): ResetUserRequirePasswordResetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetUserRequirePasswordResetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetUserRequirePasswordResetRequest;
  static deserializeBinaryFromReader(message: ResetUserRequirePasswordResetRequest, reader: jspb.BinaryReader): ResetUserRequirePasswordResetRequest;
}

export namespace ResetUserRequirePasswordResetRequest {
  export type AsObject = {
    userId: string,
  }
}

export class ResetUserRequirePasswordResetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetUserRequirePasswordResetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetUserRequirePasswordResetResponse): ResetUserRequirePasswordResetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetUserRequirePasswordResetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetUserRequirePasswordResetResponse;
  static deserializeBinaryFromReader(message: ResetUserRequirePasswordResetResponse, reader: jspb.BinaryReader): ResetUserRequirePasswordResetResponse;
}

export namespace ResetUserRequirePasswordResetResponse {
  export type AsObject = {
  }
}

export class UpdateP3OwningOrgRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getOwnerId(): string;
  setOwnerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateP3OwningOrgRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateP3OwningOrgRequest): UpdateP3OwningOrgRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateP3OwningOrgRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateP3OwningOrgRequest;
  static deserializeBinaryFromReader(message: UpdateP3OwningOrgRequest, reader: jspb.BinaryReader): UpdateP3OwningOrgRequest;
}

export namespace UpdateP3OwningOrgRequest {
  export type AsObject = {
    orgId: string,
    ownerId: string,
  }
}

export class UpdateP3OwningOrgResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateP3OwningOrgResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateP3OwningOrgResponse): UpdateP3OwningOrgResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateP3OwningOrgResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateP3OwningOrgResponse;
  static deserializeBinaryFromReader(message: UpdateP3OwningOrgResponse, reader: jspb.BinaryReader): UpdateP3OwningOrgResponse;
}

export namespace UpdateP3OwningOrgResponse {
  export type AsObject = {
  }
}

export class GetP3OwningOrgRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetP3OwningOrgRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetP3OwningOrgRequest): GetP3OwningOrgRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetP3OwningOrgRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetP3OwningOrgRequest;
  static deserializeBinaryFromReader(message: GetP3OwningOrgRequest, reader: jspb.BinaryReader): GetP3OwningOrgRequest;
}

export namespace GetP3OwningOrgRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class GetP3OwningOrgResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetP3OwningOrgResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetP3OwningOrgResponse): GetP3OwningOrgResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetP3OwningOrgResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetP3OwningOrgResponse;
  static deserializeBinaryFromReader(message: GetP3OwningOrgResponse, reader: jspb.BinaryReader): GetP3OwningOrgResponse;
}

export namespace GetP3OwningOrgResponse {
  export type AsObject = {
    id: string,
  }
}

export class RevokeAccountOwnerPermissionFromUserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeAccountOwnerPermissionFromUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeAccountOwnerPermissionFromUserRequest): RevokeAccountOwnerPermissionFromUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeAccountOwnerPermissionFromUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeAccountOwnerPermissionFromUserRequest;
  static deserializeBinaryFromReader(message: RevokeAccountOwnerPermissionFromUserRequest, reader: jspb.BinaryReader): RevokeAccountOwnerPermissionFromUserRequest;
}

export namespace RevokeAccountOwnerPermissionFromUserRequest {
  export type AsObject = {
    userId: string,
  }
}

export class RevokeAccountOwnerPermissionFromUserResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeAccountOwnerPermissionFromUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeAccountOwnerPermissionFromUserResponse): RevokeAccountOwnerPermissionFromUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeAccountOwnerPermissionFromUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeAccountOwnerPermissionFromUserResponse;
  static deserializeBinaryFromReader(message: RevokeAccountOwnerPermissionFromUserResponse, reader: jspb.BinaryReader): RevokeAccountOwnerPermissionFromUserResponse;
}

export namespace RevokeAccountOwnerPermissionFromUserResponse {
  export type AsObject = {
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

export class ListQueueConfigsReq extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListQueueConfigsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListQueueConfigsReq): ListQueueConfigsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListQueueConfigsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListQueueConfigsReq;
  static deserializeBinaryFromReader(message: ListQueueConfigsReq, reader: jspb.BinaryReader): ListQueueConfigsReq;
}

export namespace ListQueueConfigsReq {
  export type AsObject = {
    orgId: string,
  }
}

export class ListQueueConfigsRes extends jspb.Message {
  clearConfigsList(): void;
  getConfigsList(): Array<QueueConfig>;
  setConfigsList(value: Array<QueueConfig>): void;
  addConfigs(value?: QueueConfig, index?: number): QueueConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListQueueConfigsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListQueueConfigsRes): ListQueueConfigsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListQueueConfigsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListQueueConfigsRes;
  static deserializeBinaryFromReader(message: ListQueueConfigsRes, reader: jspb.BinaryReader): ListQueueConfigsRes;
}

export namespace ListQueueConfigsRes {
  export type AsObject = {
    configsList: Array<QueueConfig.AsObject>,
  }
}

export class DeleteQueueConfigReq extends jspb.Message {
  getConfigName(): string;
  setConfigName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteQueueConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteQueueConfigReq): DeleteQueueConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteQueueConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteQueueConfigReq;
  static deserializeBinaryFromReader(message: DeleteQueueConfigReq, reader: jspb.BinaryReader): DeleteQueueConfigReq;
}

export namespace DeleteQueueConfigReq {
  export type AsObject = {
    configName: string,
  }
}

export class DeleteQueueConfigRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteQueueConfigRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteQueueConfigRes): DeleteQueueConfigRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteQueueConfigRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteQueueConfigRes;
  static deserializeBinaryFromReader(message: DeleteQueueConfigRes, reader: jspb.BinaryReader): DeleteQueueConfigRes;
}

export namespace DeleteQueueConfigRes {
  export type AsObject = {
  }
}

export class GetQueueConfigReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getMerge(): boolean;
  setMerge(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQueueConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetQueueConfigReq): GetQueueConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetQueueConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQueueConfigReq;
  static deserializeBinaryFromReader(message: GetQueueConfigReq, reader: jspb.BinaryReader): GetQueueConfigReq;
}

export namespace GetQueueConfigReq {
  export type AsObject = {
    name: string,
    merge: boolean,
  }
}

export class GetQueueConfigRes extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): QueueConfig | undefined;
  setConfig(value?: QueueConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQueueConfigRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetQueueConfigRes): GetQueueConfigRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetQueueConfigRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQueueConfigRes;
  static deserializeBinaryFromReader(message: GetQueueConfigRes, reader: jspb.BinaryReader): GetQueueConfigRes;
}

export namespace GetQueueConfigRes {
  export type AsObject = {
    config?: QueueConfig.AsObject,
  }
}

export class UpdateQueueConfigReq extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): QueueConfig | undefined;
  setConfig(value?: QueueConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateQueueConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateQueueConfigReq): UpdateQueueConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateQueueConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateQueueConfigReq;
  static deserializeBinaryFromReader(message: UpdateQueueConfigReq, reader: jspb.BinaryReader): UpdateQueueConfigReq;
}

export namespace UpdateQueueConfigReq {
  export type AsObject = {
    config?: QueueConfig.AsObject,
  }
}

export class UpdateQueueConfigRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateQueueConfigRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateQueueConfigRes): UpdateQueueConfigRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateQueueConfigRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateQueueConfigRes;
  static deserializeBinaryFromReader(message: UpdateQueueConfigRes, reader: jspb.BinaryReader): UpdateQueueConfigRes;
}

export namespace UpdateQueueConfigRes {
  export type AsObject = {
  }
}

export class CreateQueueConfigReq extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): QueueConfig | undefined;
  setConfig(value?: QueueConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateQueueConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateQueueConfigReq): CreateQueueConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateQueueConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateQueueConfigReq;
  static deserializeBinaryFromReader(message: CreateQueueConfigReq, reader: jspb.BinaryReader): CreateQueueConfigReq;
}

export namespace CreateQueueConfigReq {
  export type AsObject = {
    config?: QueueConfig.AsObject,
  }
}

export class CreateQueueConfigRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateQueueConfigRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateQueueConfigRes): CreateQueueConfigRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateQueueConfigRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateQueueConfigRes;
  static deserializeBinaryFromReader(message: CreateQueueConfigRes, reader: jspb.BinaryReader): CreateQueueConfigRes;
}

export namespace CreateQueueConfigRes {
  export type AsObject = {
  }
}

export class CopyQueueConfigReq extends jspb.Message {
  getFromOrgId(): string;
  setFromOrgId(value: string): void;

  getToOrgId(): string;
  setToOrgId(value: string): void;

  getFromName(): string;
  setFromName(value: string): void;

  getToName(): string;
  setToName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyQueueConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: CopyQueueConfigReq): CopyQueueConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyQueueConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyQueueConfigReq;
  static deserializeBinaryFromReader(message: CopyQueueConfigReq, reader: jspb.BinaryReader): CopyQueueConfigReq;
}

export namespace CopyQueueConfigReq {
  export type AsObject = {
    fromOrgId: string,
    toOrgId: string,
    fromName: string,
    toName: string,
  }
}

export class CopyQueueConfigRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyQueueConfigRes.AsObject;
  static toObject(includeInstance: boolean, msg: CopyQueueConfigRes): CopyQueueConfigRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyQueueConfigRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyQueueConfigRes;
  static deserializeBinaryFromReader(message: CopyQueueConfigRes, reader: jspb.BinaryReader): CopyQueueConfigRes;
}

export namespace CopyQueueConfigRes {
  export type AsObject = {
  }
}

export class QueueConfig extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasConfigModified(): boolean;
  clearConfigModified(): void;
  getConfigModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setConfigModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasSoundsModified(): boolean;
  clearSoundsModified(): void;
  getSoundsModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSoundsModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSoundsLanguage(): string;
  setSoundsLanguage(value: string): void;

  getSoundsGender(): string;
  setSoundsGender(value: string): void;

  hasAnnouncementMixing(): boolean;
  clearAnnouncementMixing(): void;
  getAnnouncementMixing(): QueueConfig.AnnouncementMixing | undefined;
  setAnnouncementMixing(value?: QueueConfig.AnnouncementMixing): void;

  hasPositionAnnouncements(): boolean;
  clearPositionAnnouncements(): void;
  getPositionAnnouncements(): QueueConfig.PositionAnnouncements | undefined;
  setPositionAnnouncements(value?: QueueConfig.PositionAnnouncements): void;

  hasWaitTimeAnnouncements(): boolean;
  clearWaitTimeAnnouncements(): void;
  getWaitTimeAnnouncements(): QueueConfig.WaitTimeAnnouncements | undefined;
  setWaitTimeAnnouncements(value?: QueueConfig.WaitTimeAnnouncements): void;

  hasAttentionTones(): boolean;
  clearAttentionTones(): void;
  getAttentionTones(): QueueConfig.AttentionTones | undefined;
  setAttentionTones(value?: QueueConfig.AttentionTones): void;

  hasInQueueConditions(): boolean;
  clearInQueueConditions(): void;
  getInQueueConditions(): QueueConfig.InQueueConditions | undefined;
  setInQueueConditions(value?: QueueConfig.InQueueConditions): void;

  hasKeyPressEvents(): boolean;
  clearKeyPressEvents(): void;
  getKeyPressEvents(): QueueConfig.KeyPressEvents | undefined;
  setKeyPressEvents(value?: QueueConfig.KeyPressEvents): void;

  hasPbxRingStrategy(): boolean;
  clearPbxRingStrategy(): void;
  getPbxRingStrategy(): QueueConfig.PbxRingStrategy | undefined;
  setPbxRingStrategy(value?: QueueConfig.PbxRingStrategy): void;

  hasQueueMonitoringSilenceWaitTimes(): boolean;
  clearQueueMonitoringSilenceWaitTimes(): void;
  getQueueMonitoringSilenceWaitTimes(): QueueConfig.QueueMonitoringSilenceWaitTimes | undefined;
  setQueueMonitoringSilenceWaitTimes(value?: QueueConfig.QueueMonitoringSilenceWaitTimes): void;

  getCallbackTimeoutMinutes(): number;
  setCallbackTimeoutMinutes(value: number): void;

  getNumberUpdate(): boolean;
  setNumberUpdate(value: boolean): void;

  getInboundOverride(): api_commons_org_pb.InboundOverrideOptionMap[keyof api_commons_org_pb.InboundOverrideOptionMap];
  setInboundOverride(value: api_commons_org_pb.InboundOverrideOptionMap[keyof api_commons_org_pb.InboundOverrideOptionMap]): void;

  getIntercomConnection(): api_commons_org_pb.IntercomConnectionMap[keyof api_commons_org_pb.IntercomConnectionMap];
  setIntercomConnection(value: api_commons_org_pb.IntercomConnectionMap[keyof api_commons_org_pb.IntercomConnectionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueConfig.AsObject;
  static toObject(includeInstance: boolean, msg: QueueConfig): QueueConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueConfig;
  static deserializeBinaryFromReader(message: QueueConfig, reader: jspb.BinaryReader): QueueConfig;
}

export namespace QueueConfig {
  export type AsObject = {
    name: string,
    configModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    soundsModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    soundsLanguage: string,
    soundsGender: string,
    announcementMixing?: QueueConfig.AnnouncementMixing.AsObject,
    positionAnnouncements?: QueueConfig.PositionAnnouncements.AsObject,
    waitTimeAnnouncements?: QueueConfig.WaitTimeAnnouncements.AsObject,
    attentionTones?: QueueConfig.AttentionTones.AsObject,
    inQueueConditions?: QueueConfig.InQueueConditions.AsObject,
    keyPressEvents?: QueueConfig.KeyPressEvents.AsObject,
    pbxRingStrategy?: QueueConfig.PbxRingStrategy.AsObject,
    queueMonitoringSilenceWaitTimes?: QueueConfig.QueueMonitoringSilenceWaitTimes.AsObject,
    callbackTimeoutMinutes: number,
    numberUpdate: boolean,
    inboundOverride: api_commons_org_pb.InboundOverrideOptionMap[keyof api_commons_org_pb.InboundOverrideOptionMap],
    intercomConnection: api_commons_org_pb.IntercomConnectionMap[keyof api_commons_org_pb.IntercomConnectionMap],
  }

  export class AnnouncementMixing extends jspb.Message {
    hasInbound(): boolean;
    clearInbound(): void;
    getInbound(): QueueConfig.AnnouncementMixing.Config | undefined;
    setInbound(value?: QueueConfig.AnnouncementMixing.Config): void;

    hasOutbound(): boolean;
    clearOutbound(): void;
    getOutbound(): QueueConfig.AnnouncementMixing.Config | undefined;
    setOutbound(value?: QueueConfig.AnnouncementMixing.Config): void;

    hasManual(): boolean;
    clearManual(): void;
    getManual(): QueueConfig.AnnouncementMixing.Config | undefined;
    setManual(value?: QueueConfig.AnnouncementMixing.Config): void;

    hasPreview(): boolean;
    clearPreview(): void;
    getPreview(): QueueConfig.AnnouncementMixing.Config | undefined;
    setPreview(value?: QueueConfig.AnnouncementMixing.Config): void;

    hasAny(): boolean;
    clearAny(): void;
    getAny(): QueueConfig.AnnouncementMixing.Config | undefined;
    setAny(value?: QueueConfig.AnnouncementMixing.Config): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnnouncementMixing.AsObject;
    static toObject(includeInstance: boolean, msg: AnnouncementMixing): AnnouncementMixing.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnnouncementMixing, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnnouncementMixing;
    static deserializeBinaryFromReader(message: AnnouncementMixing, reader: jspb.BinaryReader): AnnouncementMixing;
  }

  export namespace AnnouncementMixing {
    export type AsObject = {
      inbound?: QueueConfig.AnnouncementMixing.Config.AsObject,
      outbound?: QueueConfig.AnnouncementMixing.Config.AsObject,
      manual?: QueueConfig.AnnouncementMixing.Config.AsObject,
      preview?: QueueConfig.AnnouncementMixing.Config.AsObject,
      any?: QueueConfig.AnnouncementMixing.Config.AsObject,
    }

    export class Config extends jspb.Message {
      getOption(): api_commons_org_pb.AnnouncementMixingOptionMap[keyof api_commons_org_pb.AnnouncementMixingOptionMap];
      setOption(value: api_commons_org_pb.AnnouncementMixingOptionMap[keyof api_commons_org_pb.AnnouncementMixingOptionMap]): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Config.AsObject;
      static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Config;
      static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
    }

    export namespace Config {
      export type AsObject = {
        option: api_commons_org_pb.AnnouncementMixingOptionMap[keyof api_commons_org_pb.AnnouncementMixingOptionMap],
      }
    }
  }

  export class PositionAnnouncements extends jspb.Message {
    hasInbound(): boolean;
    clearInbound(): void;
    getInbound(): QueueConfig.PositionAnnouncements.Disableable | undefined;
    setInbound(value?: QueueConfig.PositionAnnouncements.Disableable): void;

    hasOutbound(): boolean;
    clearOutbound(): void;
    getOutbound(): QueueConfig.PositionAnnouncements.Disableable | undefined;
    setOutbound(value?: QueueConfig.PositionAnnouncements.Disableable): void;

    hasManual(): boolean;
    clearManual(): void;
    getManual(): QueueConfig.PositionAnnouncements.Disableable | undefined;
    setManual(value?: QueueConfig.PositionAnnouncements.Disableable): void;

    hasPreview(): boolean;
    clearPreview(): void;
    getPreview(): QueueConfig.PositionAnnouncements.Disableable | undefined;
    setPreview(value?: QueueConfig.PositionAnnouncements.Disableable): void;

    hasAny(): boolean;
    clearAny(): void;
    getAny(): QueueConfig.PositionAnnouncements.Disableable | undefined;
    setAny(value?: QueueConfig.PositionAnnouncements.Disableable): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionAnnouncements.AsObject;
    static toObject(includeInstance: boolean, msg: PositionAnnouncements): PositionAnnouncements.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionAnnouncements, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionAnnouncements;
    static deserializeBinaryFromReader(message: PositionAnnouncements, reader: jspb.BinaryReader): PositionAnnouncements;
  }

  export namespace PositionAnnouncements {
    export type AsObject = {
      inbound?: QueueConfig.PositionAnnouncements.Disableable.AsObject,
      outbound?: QueueConfig.PositionAnnouncements.Disableable.AsObject,
      manual?: QueueConfig.PositionAnnouncements.Disableable.AsObject,
      preview?: QueueConfig.PositionAnnouncements.Disableable.AsObject,
      any?: QueueConfig.PositionAnnouncements.Disableable.AsObject,
    }

    export class Disableable extends jspb.Message {
      hasConfig(): boolean;
      clearConfig(): void;
      getConfig(): QueueConfig.PositionAnnouncements.Config | undefined;
      setConfig(value?: QueueConfig.PositionAnnouncements.Config): void;

      hasDisable(): boolean;
      clearDisable(): void;
      getDisable(): QueueConfig.Disable | undefined;
      setDisable(value?: QueueConfig.Disable): void;

      getOptionCase(): Disableable.OptionCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Disableable.AsObject;
      static toObject(includeInstance: boolean, msg: Disableable): Disableable.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Disableable, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Disableable;
      static deserializeBinaryFromReader(message: Disableable, reader: jspb.BinaryReader): Disableable;
    }

    export namespace Disableable {
      export type AsObject = {
        config?: QueueConfig.PositionAnnouncements.Config.AsObject,
        disable?: QueueConfig.Disable.AsObject,
      }

      export enum OptionCase {
        OPTION_NOT_SET = 0,
        CONFIG = 1,
        DISABLE = 2,
      }
    }

    export class Config extends jspb.Message {
      getFirstSeconds(): number;
      setFirstSeconds(value: number): void;

      getRepeatingSeconds(): number;
      setRepeatingSeconds(value: number): void;

      getThreshold(): number;
      setThreshold(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Config.AsObject;
      static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Config;
      static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
    }

    export namespace Config {
      export type AsObject = {
        firstSeconds: number,
        repeatingSeconds: number,
        threshold: number,
      }
    }
  }

  export class WaitTimeAnnouncements extends jspb.Message {
    hasInbound(): boolean;
    clearInbound(): void;
    getInbound(): QueueConfig.WaitTimeAnnouncements.Disableable | undefined;
    setInbound(value?: QueueConfig.WaitTimeAnnouncements.Disableable): void;

    hasOutbound(): boolean;
    clearOutbound(): void;
    getOutbound(): QueueConfig.WaitTimeAnnouncements.Disableable | undefined;
    setOutbound(value?: QueueConfig.WaitTimeAnnouncements.Disableable): void;

    hasManual(): boolean;
    clearManual(): void;
    getManual(): QueueConfig.WaitTimeAnnouncements.Disableable | undefined;
    setManual(value?: QueueConfig.WaitTimeAnnouncements.Disableable): void;

    hasPreview(): boolean;
    clearPreview(): void;
    getPreview(): QueueConfig.WaitTimeAnnouncements.Disableable | undefined;
    setPreview(value?: QueueConfig.WaitTimeAnnouncements.Disableable): void;

    hasAny(): boolean;
    clearAny(): void;
    getAny(): QueueConfig.WaitTimeAnnouncements.Disableable | undefined;
    setAny(value?: QueueConfig.WaitTimeAnnouncements.Disableable): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WaitTimeAnnouncements.AsObject;
    static toObject(includeInstance: boolean, msg: WaitTimeAnnouncements): WaitTimeAnnouncements.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WaitTimeAnnouncements, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WaitTimeAnnouncements;
    static deserializeBinaryFromReader(message: WaitTimeAnnouncements, reader: jspb.BinaryReader): WaitTimeAnnouncements;
  }

  export namespace WaitTimeAnnouncements {
    export type AsObject = {
      inbound?: QueueConfig.WaitTimeAnnouncements.Disableable.AsObject,
      outbound?: QueueConfig.WaitTimeAnnouncements.Disableable.AsObject,
      manual?: QueueConfig.WaitTimeAnnouncements.Disableable.AsObject,
      preview?: QueueConfig.WaitTimeAnnouncements.Disableable.AsObject,
      any?: QueueConfig.WaitTimeAnnouncements.Disableable.AsObject,
    }

    export class Disableable extends jspb.Message {
      hasConfig(): boolean;
      clearConfig(): void;
      getConfig(): QueueConfig.WaitTimeAnnouncements.Config | undefined;
      setConfig(value?: QueueConfig.WaitTimeAnnouncements.Config): void;

      hasDisable(): boolean;
      clearDisable(): void;
      getDisable(): QueueConfig.Disable | undefined;
      setDisable(value?: QueueConfig.Disable): void;

      getOptionCase(): Disableable.OptionCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Disableable.AsObject;
      static toObject(includeInstance: boolean, msg: Disableable): Disableable.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Disableable, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Disableable;
      static deserializeBinaryFromReader(message: Disableable, reader: jspb.BinaryReader): Disableable;
    }

    export namespace Disableable {
      export type AsObject = {
        config?: QueueConfig.WaitTimeAnnouncements.Config.AsObject,
        disable?: QueueConfig.Disable.AsObject,
      }

      export enum OptionCase {
        OPTION_NOT_SET = 0,
        CONFIG = 1,
        DISABLE = 2,
      }
    }

    export class Config extends jspb.Message {
      getFirstSeconds(): number;
      setFirstSeconds(value: number): void;

      getRepeatingSeconds(): number;
      setRepeatingSeconds(value: number): void;

      getThreshold(): number;
      setThreshold(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Config.AsObject;
      static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Config;
      static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
    }

    export namespace Config {
      export type AsObject = {
        firstSeconds: number,
        repeatingSeconds: number,
        threshold: number,
      }
    }
  }

  export class AttentionTones extends jspb.Message {
    hasInbound(): boolean;
    clearInbound(): void;
    getInbound(): QueueConfig.AttentionTones.Disableable | undefined;
    setInbound(value?: QueueConfig.AttentionTones.Disableable): void;

    hasOutbound(): boolean;
    clearOutbound(): void;
    getOutbound(): QueueConfig.AttentionTones.Disableable | undefined;
    setOutbound(value?: QueueConfig.AttentionTones.Disableable): void;

    hasManual(): boolean;
    clearManual(): void;
    getManual(): QueueConfig.AttentionTones.Disableable | undefined;
    setManual(value?: QueueConfig.AttentionTones.Disableable): void;

    hasPreview(): boolean;
    clearPreview(): void;
    getPreview(): QueueConfig.AttentionTones.Disableable | undefined;
    setPreview(value?: QueueConfig.AttentionTones.Disableable): void;

    hasAny(): boolean;
    clearAny(): void;
    getAny(): QueueConfig.AttentionTones.Disableable | undefined;
    setAny(value?: QueueConfig.AttentionTones.Disableable): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttentionTones.AsObject;
    static toObject(includeInstance: boolean, msg: AttentionTones): AttentionTones.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttentionTones, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttentionTones;
    static deserializeBinaryFromReader(message: AttentionTones, reader: jspb.BinaryReader): AttentionTones;
  }

  export namespace AttentionTones {
    export type AsObject = {
      inbound?: QueueConfig.AttentionTones.Disableable.AsObject,
      outbound?: QueueConfig.AttentionTones.Disableable.AsObject,
      manual?: QueueConfig.AttentionTones.Disableable.AsObject,
      preview?: QueueConfig.AttentionTones.Disableable.AsObject,
      any?: QueueConfig.AttentionTones.Disableable.AsObject,
    }

    export class Disableable extends jspb.Message {
      hasConfig(): boolean;
      clearConfig(): void;
      getConfig(): QueueConfig.AttentionTones.Config | undefined;
      setConfig(value?: QueueConfig.AttentionTones.Config): void;

      hasDisable(): boolean;
      clearDisable(): void;
      getDisable(): QueueConfig.Disable | undefined;
      setDisable(value?: QueueConfig.Disable): void;

      getOptionCase(): Disableable.OptionCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Disableable.AsObject;
      static toObject(includeInstance: boolean, msg: Disableable): Disableable.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Disableable, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Disableable;
      static deserializeBinaryFromReader(message: Disableable, reader: jspb.BinaryReader): Disableable;
    }

    export namespace Disableable {
      export type AsObject = {
        config?: QueueConfig.AttentionTones.Config.AsObject,
        disable?: QueueConfig.Disable.AsObject,
      }

      export enum OptionCase {
        OPTION_NOT_SET = 0,
        CONFIG = 1,
        DISABLE = 2,
      }
    }

    export class Config extends jspb.Message {
      getAgentStatusPaused(): boolean;
      setAgentStatusPaused(value: boolean): void;

      getAgentStatusWrapUp(): boolean;
      setAgentStatusWrapUp(value: boolean): void;

      clearTonesList(): void;
      getTonesList(): Array<QueueConfig.AttentionTones.Tones>;
      setTonesList(value: Array<QueueConfig.AttentionTones.Tones>): void;
      addTones(value?: QueueConfig.AttentionTones.Tones, index?: number): QueueConfig.AttentionTones.Tones;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Config.AsObject;
      static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Config;
      static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
    }

    export namespace Config {
      export type AsObject = {
        agentStatusPaused: boolean,
        agentStatusWrapUp: boolean,
        tonesList: Array<QueueConfig.AttentionTones.Tones.AsObject>,
      }
    }

    export class Tones extends jspb.Message {
      hasTone(): boolean;
      clearTone(): void;
      getTone(): google_protobuf_wrappers_pb.Int64Value | undefined;
      setTone(value?: google_protobuf_wrappers_pb.Int64Value): void;

      hasPause(): boolean;
      clearPause(): void;
      getPause(): google_protobuf_wrappers_pb.DoubleValue | undefined;
      setPause(value?: google_protobuf_wrappers_pb.DoubleValue): void;

      getOptionCase(): Tones.OptionCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Tones.AsObject;
      static toObject(includeInstance: boolean, msg: Tones): Tones.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Tones, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Tones;
      static deserializeBinaryFromReader(message: Tones, reader: jspb.BinaryReader): Tones;
    }

    export namespace Tones {
      export type AsObject = {
        tone?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        pause?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      }

      export enum OptionCase {
        OPTION_NOT_SET = 0,
        TONE = 1,
        PAUSE = 2,
      }
    }
  }

  export class InQueueConditions extends jspb.Message {
    hasNoAgentsLoggedIn(): boolean;
    clearNoAgentsLoggedIn(): void;
    getNoAgentsLoggedIn(): QueueConfig.InQueueConditions.LimitedCondition | undefined;
    setNoAgentsLoggedIn(value?: QueueConfig.InQueueConditions.LimitedCondition): void;

    hasNoAgentsWithRequiredSkillsLoggedIn(): boolean;
    clearNoAgentsWithRequiredSkillsLoggedIn(): void;
    getNoAgentsWithRequiredSkillsLoggedIn(): QueueConfig.InQueueConditions.Condition | undefined;
    setNoAgentsWithRequiredSkillsLoggedIn(value?: QueueConfig.InQueueConditions.Condition): void;

    hasNoAgentsAvailable(): boolean;
    clearNoAgentsAvailable(): void;
    getNoAgentsAvailable(): QueueConfig.InQueueConditions.LimitedCondition | undefined;
    setNoAgentsAvailable(value?: QueueConfig.InQueueConditions.LimitedCondition): void;

    hasNoAgentsWithRequiredSkillsAvailable(): boolean;
    clearNoAgentsWithRequiredSkillsAvailable(): void;
    getNoAgentsWithRequiredSkillsAvailable(): QueueConfig.InQueueConditions.Condition | undefined;
    setNoAgentsWithRequiredSkillsAvailable(value?: QueueConfig.InQueueConditions.Condition): void;

    hasPbxRinging(): boolean;
    clearPbxRinging(): void;
    getPbxRinging(): QueueConfig.InQueueConditions.Condition | undefined;
    setPbxRinging(value?: QueueConfig.InQueueConditions.Condition): void;

    hasAgentLost(): boolean;
    clearAgentLost(): void;
    getAgentLost(): QueueConfig.InQueueConditions.Condition | undefined;
    setAgentLost(value?: QueueConfig.InQueueConditions.Condition): void;

    hasDefault(): boolean;
    clearDefault(): void;
    getDefault(): QueueConfig.InQueueConditions.LimitedCondition | undefined;
    setDefault(value?: QueueConfig.InQueueConditions.LimitedCondition): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InQueueConditions.AsObject;
    static toObject(includeInstance: boolean, msg: InQueueConditions): InQueueConditions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InQueueConditions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InQueueConditions;
    static deserializeBinaryFromReader(message: InQueueConditions, reader: jspb.BinaryReader): InQueueConditions;
  }

  export namespace InQueueConditions {
    export type AsObject = {
      noAgentsLoggedIn?: QueueConfig.InQueueConditions.LimitedCondition.AsObject,
      noAgentsWithRequiredSkillsLoggedIn?: QueueConfig.InQueueConditions.Condition.AsObject,
      noAgentsAvailable?: QueueConfig.InQueueConditions.LimitedCondition.AsObject,
      noAgentsWithRequiredSkillsAvailable?: QueueConfig.InQueueConditions.Condition.AsObject,
      pbxRinging?: QueueConfig.InQueueConditions.Condition.AsObject,
      agentLost?: QueueConfig.InQueueConditions.Condition.AsObject,
      pb_default?: QueueConfig.InQueueConditions.LimitedCondition.AsObject,
    }

    export class Condition extends jspb.Message {
      hasInbound(): boolean;
      clearInbound(): void;
      getInbound(): QueueConfig.InQueueConditions.Config | undefined;
      setInbound(value?: QueueConfig.InQueueConditions.Config): void;

      hasOutbound(): boolean;
      clearOutbound(): void;
      getOutbound(): QueueConfig.InQueueConditions.Config | undefined;
      setOutbound(value?: QueueConfig.InQueueConditions.Config): void;

      hasManual(): boolean;
      clearManual(): void;
      getManual(): QueueConfig.InQueueConditions.Config | undefined;
      setManual(value?: QueueConfig.InQueueConditions.Config): void;

      hasPreview(): boolean;
      clearPreview(): void;
      getPreview(): QueueConfig.InQueueConditions.Config | undefined;
      setPreview(value?: QueueConfig.InQueueConditions.Config): void;

      hasAny(): boolean;
      clearAny(): void;
      getAny(): QueueConfig.InQueueConditions.Config | undefined;
      setAny(value?: QueueConfig.InQueueConditions.Config): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Condition.AsObject;
      static toObject(includeInstance: boolean, msg: Condition): Condition.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Condition, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Condition;
      static deserializeBinaryFromReader(message: Condition, reader: jspb.BinaryReader): Condition;
    }

    export namespace Condition {
      export type AsObject = {
        inbound?: QueueConfig.InQueueConditions.Config.AsObject,
        outbound?: QueueConfig.InQueueConditions.Config.AsObject,
        manual?: QueueConfig.InQueueConditions.Config.AsObject,
        preview?: QueueConfig.InQueueConditions.Config.AsObject,
        any?: QueueConfig.InQueueConditions.Config.AsObject,
      }
    }

    export class LimitedCondition extends jspb.Message {
      hasInbound(): boolean;
      clearInbound(): void;
      getInbound(): QueueConfig.InQueueConditions.LimitedConfig | undefined;
      setInbound(value?: QueueConfig.InQueueConditions.LimitedConfig): void;

      hasOutbound(): boolean;
      clearOutbound(): void;
      getOutbound(): QueueConfig.InQueueConditions.LimitedConfig | undefined;
      setOutbound(value?: QueueConfig.InQueueConditions.LimitedConfig): void;

      hasManual(): boolean;
      clearManual(): void;
      getManual(): QueueConfig.InQueueConditions.LimitedConfig | undefined;
      setManual(value?: QueueConfig.InQueueConditions.LimitedConfig): void;

      hasPreview(): boolean;
      clearPreview(): void;
      getPreview(): QueueConfig.InQueueConditions.LimitedConfig | undefined;
      setPreview(value?: QueueConfig.InQueueConditions.LimitedConfig): void;

      hasAny(): boolean;
      clearAny(): void;
      getAny(): QueueConfig.InQueueConditions.LimitedConfig | undefined;
      setAny(value?: QueueConfig.InQueueConditions.LimitedConfig): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): LimitedCondition.AsObject;
      static toObject(includeInstance: boolean, msg: LimitedCondition): LimitedCondition.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: LimitedCondition, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): LimitedCondition;
      static deserializeBinaryFromReader(message: LimitedCondition, reader: jspb.BinaryReader): LimitedCondition;
    }

    export namespace LimitedCondition {
      export type AsObject = {
        inbound?: QueueConfig.InQueueConditions.LimitedConfig.AsObject,
        outbound?: QueueConfig.InQueueConditions.LimitedConfig.AsObject,
        manual?: QueueConfig.InQueueConditions.LimitedConfig.AsObject,
        preview?: QueueConfig.InQueueConditions.LimitedConfig.AsObject,
        any?: QueueConfig.InQueueConditions.LimitedConfig.AsObject,
      }
    }

    export class Config extends jspb.Message {
      clearActionsList(): void;
      getActionsList(): Array<QueueConfig.InQueueConditions.Action>;
      setActionsList(value: Array<QueueConfig.InQueueConditions.Action>): void;
      addActions(value?: QueueConfig.InQueueConditions.Action, index?: number): QueueConfig.InQueueConditions.Action;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Config.AsObject;
      static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Config;
      static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
    }

    export namespace Config {
      export type AsObject = {
        actionsList: Array<QueueConfig.InQueueConditions.Action.AsObject>,
      }
    }

    export class LimitedConfig extends jspb.Message {
      clearActionsList(): void;
      getActionsList(): Array<QueueConfig.InQueueConditions.LimitedAction>;
      setActionsList(value: Array<QueueConfig.InQueueConditions.LimitedAction>): void;
      addActions(value?: QueueConfig.InQueueConditions.LimitedAction, index?: number): QueueConfig.InQueueConditions.LimitedAction;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): LimitedConfig.AsObject;
      static toObject(includeInstance: boolean, msg: LimitedConfig): LimitedConfig.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: LimitedConfig, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): LimitedConfig;
      static deserializeBinaryFromReader(message: LimitedConfig, reader: jspb.BinaryReader): LimitedConfig;
    }

    export namespace LimitedConfig {
      export type AsObject = {
        actionsList: Array<QueueConfig.InQueueConditions.LimitedAction.AsObject>,
      }
    }

    export class Action extends jspb.Message {
      getAfterSeconds(): number;
      setAfterSeconds(value: number): void;

      hasHangUp(): boolean;
      clearHangUp(): void;
      getHangUp(): QueueConfig.Optionless | undefined;
      setHangUp(value?: QueueConfig.Optionless): void;

      hasVoicemail(): boolean;
      clearVoicemail(): void;
      getVoicemail(): QueueConfig.Optionless | undefined;
      setVoicemail(value?: QueueConfig.Optionless): void;

      hasQueuedCallback(): boolean;
      clearQueuedCallback(): void;
      getQueuedCallback(): QueueConfig.Optionless | undefined;
      setQueuedCallback(value?: QueueConfig.Optionless): void;

      hasTriggerIvr(): boolean;
      clearTriggerIvr(): void;
      getTriggerIvr(): api_commons_org_pb.DigitWrapper | undefined;
      setTriggerIvr(value?: api_commons_org_pb.DigitWrapper): void;

      hasAddSkills(): boolean;
      clearAddSkills(): void;
      getAddSkills(): QueueConfig.Skills | undefined;
      setAddSkills(value?: QueueConfig.Skills): void;

      hasDropSkills(): boolean;
      clearDropSkills(): void;
      getDropSkills(): QueueConfig.Skills | undefined;
      setDropSkills(value?: QueueConfig.Skills): void;

      getActionCase(): Action.ActionCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Action.AsObject;
      static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Action;
      static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
    }

    export namespace Action {
      export type AsObject = {
        afterSeconds: number,
        hangUp?: QueueConfig.Optionless.AsObject,
        voicemail?: QueueConfig.Optionless.AsObject,
        queuedCallback?: QueueConfig.Optionless.AsObject,
        triggerIvr?: api_commons_org_pb.DigitWrapper.AsObject,
        addSkills?: QueueConfig.Skills.AsObject,
        dropSkills?: QueueConfig.Skills.AsObject,
      }

      export enum ActionCase {
        ACTION_NOT_SET = 0,
        HANG_UP = 2,
        VOICEMAIL = 3,
        QUEUED_CALLBACK = 4,
        TRIGGER_IVR = 5,
        ADD_SKILLS = 6,
        DROP_SKILLS = 7,
      }
    }

    export class LimitedAction extends jspb.Message {
      getAfterSeconds(): number;
      setAfterSeconds(value: number): void;

      hasHangUp(): boolean;
      clearHangUp(): void;
      getHangUp(): QueueConfig.Optionless | undefined;
      setHangUp(value?: QueueConfig.Optionless): void;

      hasVoicemail(): boolean;
      clearVoicemail(): void;
      getVoicemail(): QueueConfig.Optionless | undefined;
      setVoicemail(value?: QueueConfig.Optionless): void;

      hasQueuedCallback(): boolean;
      clearQueuedCallback(): void;
      getQueuedCallback(): QueueConfig.Optionless | undefined;
      setQueuedCallback(value?: QueueConfig.Optionless): void;

      hasTriggerIvr(): boolean;
      clearTriggerIvr(): void;
      getTriggerIvr(): api_commons_org_pb.DigitWrapper | undefined;
      setTriggerIvr(value?: api_commons_org_pb.DigitWrapper): void;

      getActionCase(): LimitedAction.ActionCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): LimitedAction.AsObject;
      static toObject(includeInstance: boolean, msg: LimitedAction): LimitedAction.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: LimitedAction, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): LimitedAction;
      static deserializeBinaryFromReader(message: LimitedAction, reader: jspb.BinaryReader): LimitedAction;
    }

    export namespace LimitedAction {
      export type AsObject = {
        afterSeconds: number,
        hangUp?: QueueConfig.Optionless.AsObject,
        voicemail?: QueueConfig.Optionless.AsObject,
        queuedCallback?: QueueConfig.Optionless.AsObject,
        triggerIvr?: api_commons_org_pb.DigitWrapper.AsObject,
      }

      export enum ActionCase {
        ACTION_NOT_SET = 0,
        HANG_UP = 2,
        VOICEMAIL = 3,
        QUEUED_CALLBACK = 4,
        TRIGGER_IVR = 5,
      }
    }
  }

  export class KeyPressEvents extends jspb.Message {
    hasZero(): boolean;
    clearZero(): void;
    getZero(): QueueConfig.KeyPressEvents.Action | undefined;
    setZero(value?: QueueConfig.KeyPressEvents.Action): void;

    hasOne(): boolean;
    clearOne(): void;
    getOne(): QueueConfig.KeyPressEvents.Action | undefined;
    setOne(value?: QueueConfig.KeyPressEvents.Action): void;

    hasTwo(): boolean;
    clearTwo(): void;
    getTwo(): QueueConfig.KeyPressEvents.Action | undefined;
    setTwo(value?: QueueConfig.KeyPressEvents.Action): void;

    hasThree(): boolean;
    clearThree(): void;
    getThree(): QueueConfig.KeyPressEvents.Action | undefined;
    setThree(value?: QueueConfig.KeyPressEvents.Action): void;

    hasFour(): boolean;
    clearFour(): void;
    getFour(): QueueConfig.KeyPressEvents.Action | undefined;
    setFour(value?: QueueConfig.KeyPressEvents.Action): void;

    hasFive(): boolean;
    clearFive(): void;
    getFive(): QueueConfig.KeyPressEvents.Action | undefined;
    setFive(value?: QueueConfig.KeyPressEvents.Action): void;

    hasSix(): boolean;
    clearSix(): void;
    getSix(): QueueConfig.KeyPressEvents.Action | undefined;
    setSix(value?: QueueConfig.KeyPressEvents.Action): void;

    hasSeven(): boolean;
    clearSeven(): void;
    getSeven(): QueueConfig.KeyPressEvents.Action | undefined;
    setSeven(value?: QueueConfig.KeyPressEvents.Action): void;

    hasEight(): boolean;
    clearEight(): void;
    getEight(): QueueConfig.KeyPressEvents.Action | undefined;
    setEight(value?: QueueConfig.KeyPressEvents.Action): void;

    hasNine(): boolean;
    clearNine(): void;
    getNine(): QueueConfig.KeyPressEvents.Action | undefined;
    setNine(value?: QueueConfig.KeyPressEvents.Action): void;

    hasAsterisk(): boolean;
    clearAsterisk(): void;
    getAsterisk(): QueueConfig.KeyPressEvents.Action | undefined;
    setAsterisk(value?: QueueConfig.KeyPressEvents.Action): void;

    hasHashtag(): boolean;
    clearHashtag(): void;
    getHashtag(): QueueConfig.KeyPressEvents.Action | undefined;
    setHashtag(value?: QueueConfig.KeyPressEvents.Action): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyPressEvents.AsObject;
    static toObject(includeInstance: boolean, msg: KeyPressEvents): KeyPressEvents.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyPressEvents, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyPressEvents;
    static deserializeBinaryFromReader(message: KeyPressEvents, reader: jspb.BinaryReader): KeyPressEvents;
  }

  export namespace KeyPressEvents {
    export type AsObject = {
      zero?: QueueConfig.KeyPressEvents.Action.AsObject,
      one?: QueueConfig.KeyPressEvents.Action.AsObject,
      two?: QueueConfig.KeyPressEvents.Action.AsObject,
      three?: QueueConfig.KeyPressEvents.Action.AsObject,
      four?: QueueConfig.KeyPressEvents.Action.AsObject,
      five?: QueueConfig.KeyPressEvents.Action.AsObject,
      six?: QueueConfig.KeyPressEvents.Action.AsObject,
      seven?: QueueConfig.KeyPressEvents.Action.AsObject,
      eight?: QueueConfig.KeyPressEvents.Action.AsObject,
      nine?: QueueConfig.KeyPressEvents.Action.AsObject,
      asterisk?: QueueConfig.KeyPressEvents.Action.AsObject,
      hashtag?: QueueConfig.KeyPressEvents.Action.AsObject,
    }

    export class Action extends jspb.Message {
      hasInbound(): boolean;
      clearInbound(): void;
      getInbound(): QueueConfig.KeyPressEvents.Config | undefined;
      setInbound(value?: QueueConfig.KeyPressEvents.Config): void;

      hasOutbound(): boolean;
      clearOutbound(): void;
      getOutbound(): QueueConfig.KeyPressEvents.Config | undefined;
      setOutbound(value?: QueueConfig.KeyPressEvents.Config): void;

      hasManual(): boolean;
      clearManual(): void;
      getManual(): QueueConfig.KeyPressEvents.Config | undefined;
      setManual(value?: QueueConfig.KeyPressEvents.Config): void;

      hasPreview(): boolean;
      clearPreview(): void;
      getPreview(): QueueConfig.KeyPressEvents.Config | undefined;
      setPreview(value?: QueueConfig.KeyPressEvents.Config): void;

      hasAny(): boolean;
      clearAny(): void;
      getAny(): QueueConfig.KeyPressEvents.Config | undefined;
      setAny(value?: QueueConfig.KeyPressEvents.Config): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Action.AsObject;
      static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Action;
      static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
    }

    export namespace Action {
      export type AsObject = {
        inbound?: QueueConfig.KeyPressEvents.Config.AsObject,
        outbound?: QueueConfig.KeyPressEvents.Config.AsObject,
        manual?: QueueConfig.KeyPressEvents.Config.AsObject,
        preview?: QueueConfig.KeyPressEvents.Config.AsObject,
        any?: QueueConfig.KeyPressEvents.Config.AsObject,
      }
    }

    export class Config extends jspb.Message {
      hasHangUp(): boolean;
      clearHangUp(): void;
      getHangUp(): QueueConfig.Optionless | undefined;
      setHangUp(value?: QueueConfig.Optionless): void;

      hasTriggerIvr(): boolean;
      clearTriggerIvr(): void;
      getTriggerIvr(): QueueConfig.Optionless | undefined;
      setTriggerIvr(value?: QueueConfig.Optionless): void;

      hasVoicemail(): boolean;
      clearVoicemail(): void;
      getVoicemail(): QueueConfig.Optionless | undefined;
      setVoicemail(value?: QueueConfig.Optionless): void;

      hasQueuedCallback(): boolean;
      clearQueuedCallback(): void;
      getQueuedCallback(): QueueConfig.Optionless | undefined;
      setQueuedCallback(value?: QueueConfig.Optionless): void;

      hasAddSkills(): boolean;
      clearAddSkills(): void;
      getAddSkills(): QueueConfig.Skills | undefined;
      setAddSkills(value?: QueueConfig.Skills): void;

      hasDropSkills(): boolean;
      clearDropSkills(): void;
      getDropSkills(): QueueConfig.Skills | undefined;
      setDropSkills(value?: QueueConfig.Skills): void;

      getOptionCase(): Config.OptionCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Config.AsObject;
      static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Config;
      static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
    }

    export namespace Config {
      export type AsObject = {
        hangUp?: QueueConfig.Optionless.AsObject,
        triggerIvr?: QueueConfig.Optionless.AsObject,
        voicemail?: QueueConfig.Optionless.AsObject,
        queuedCallback?: QueueConfig.Optionless.AsObject,
        addSkills?: QueueConfig.Skills.AsObject,
        dropSkills?: QueueConfig.Skills.AsObject,
      }

      export enum OptionCase {
        OPTION_NOT_SET = 0,
        HANG_UP = 1,
        TRIGGER_IVR = 7,
        VOICEMAIL = 3,
        QUEUED_CALLBACK = 4,
        ADD_SKILLS = 5,
        DROP_SKILLS = 6,
      }
    }
  }

  export class PbxRingStrategy extends jspb.Message {
    hasInbound(): boolean;
    clearInbound(): void;
    getInbound(): QueueConfig.PbxRingStrategy.Config | undefined;
    setInbound(value?: QueueConfig.PbxRingStrategy.Config): void;

    hasOutbound(): boolean;
    clearOutbound(): void;
    getOutbound(): QueueConfig.PbxRingStrategy.Config | undefined;
    setOutbound(value?: QueueConfig.PbxRingStrategy.Config): void;

    hasAny(): boolean;
    clearAny(): void;
    getAny(): QueueConfig.PbxRingStrategy.Config | undefined;
    setAny(value?: QueueConfig.PbxRingStrategy.Config): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PbxRingStrategy.AsObject;
    static toObject(includeInstance: boolean, msg: PbxRingStrategy): PbxRingStrategy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PbxRingStrategy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PbxRingStrategy;
    static deserializeBinaryFromReader(message: PbxRingStrategy, reader: jspb.BinaryReader): PbxRingStrategy;
  }

  export namespace PbxRingStrategy {
    export type AsObject = {
      inbound?: QueueConfig.PbxRingStrategy.Config.AsObject,
      outbound?: QueueConfig.PbxRingStrategy.Config.AsObject,
      any?: QueueConfig.PbxRingStrategy.Config.AsObject,
    }

    export class Config extends jspb.Message {
      hasRingAll(): boolean;
      clearRingAll(): void;
      getRingAll(): QueueConfig.Optionless | undefined;
      setRingAll(value?: QueueConfig.Optionless): void;

      hasHighestScoreOnly(): boolean;
      clearHighestScoreOnly(): void;
      getHighestScoreOnly(): QueueConfig.Optionless | undefined;
      setHighestScoreOnly(value?: QueueConfig.Optionless): void;

      hasRandom(): boolean;
      clearRandom(): void;
      getRandom(): QueueConfig.Optionless | undefined;
      setRandom(value?: QueueConfig.Optionless): void;

      hasAgentScore(): boolean;
      clearAgentScore(): void;
      getAgentScore(): number;
      setAgentScore(value: number): void;

      hasAgentScoreMemory(): boolean;
      clearAgentScoreMemory(): void;
      getAgentScoreMemory(): number;
      setAgentScoreMemory(value: number): void;

      getStrategyCase(): Config.StrategyCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Config.AsObject;
      static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Config;
      static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
    }

    export namespace Config {
      export type AsObject = {
        ringAll?: QueueConfig.Optionless.AsObject,
        highestScoreOnly?: QueueConfig.Optionless.AsObject,
        random?: QueueConfig.Optionless.AsObject,
        agentScore: number,
        agentScoreMemory: number,
      }

      export enum StrategyCase {
        STRATEGY_NOT_SET = 0,
        RING_ALL = 1,
        HIGHEST_SCORE_ONLY = 2,
        RANDOM = 3,
        AGENT_SCORE = 4,
        AGENT_SCORE_MEMORY = 5,
      }
    }
  }

  export class QueueMonitoringSilenceWaitTimes extends jspb.Message {
    getFirstMilliseconds(): number;
    setFirstMilliseconds(value: number): void;

    getSecondMilliseconds(): number;
    setSecondMilliseconds(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueueMonitoringSilenceWaitTimes.AsObject;
    static toObject(includeInstance: boolean, msg: QueueMonitoringSilenceWaitTimes): QueueMonitoringSilenceWaitTimes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueueMonitoringSilenceWaitTimes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueueMonitoringSilenceWaitTimes;
    static deserializeBinaryFromReader(message: QueueMonitoringSilenceWaitTimes, reader: jspb.BinaryReader): QueueMonitoringSilenceWaitTimes;
  }

  export namespace QueueMonitoringSilenceWaitTimes {
    export type AsObject = {
      firstMilliseconds: number,
      secondMilliseconds: number,
    }
  }

  export class Disable extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Disable.AsObject;
    static toObject(includeInstance: boolean, msg: Disable): Disable.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Disable, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Disable;
    static deserializeBinaryFromReader(message: Disable, reader: jspb.BinaryReader): Disable;
  }

  export namespace Disable {
    export type AsObject = {
    }
  }

  export class Optionless extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Optionless.AsObject;
    static toObject(includeInstance: boolean, msg: Optionless): Optionless.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Optionless, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Optionless;
    static deserializeBinaryFromReader(message: Optionless, reader: jspb.BinaryReader): Optionless;
  }

  export namespace Optionless {
    export type AsObject = {
    }
  }

  export class Skills extends jspb.Message {
    clearP3IdsList(): void;
    getP3IdsList(): Array<string>;
    setP3IdsList(value: Array<string>): void;
    addP3Ids(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Skills.AsObject;
    static toObject(includeInstance: boolean, msg: Skills): Skills.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Skills, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Skills;
    static deserializeBinaryFromReader(message: Skills, reader: jspb.BinaryReader): Skills;
  }

  export namespace Skills {
    export type AsObject = {
      p3IdsList: Array<string>,
    }
  }
}

export class GetAllQueueConfigSoundsReq extends jspb.Message {
  getConfigName(): string;
  setConfigName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllQueueConfigSoundsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllQueueConfigSoundsReq): GetAllQueueConfigSoundsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllQueueConfigSoundsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllQueueConfigSoundsReq;
  static deserializeBinaryFromReader(message: GetAllQueueConfigSoundsReq, reader: jspb.BinaryReader): GetAllQueueConfigSoundsReq;
}

export namespace GetAllQueueConfigSoundsReq {
  export type AsObject = {
    configName: string,
  }
}

export class GetAllQueueConfigSoundsRes extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllQueueConfigSoundsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllQueueConfigSoundsRes): GetAllQueueConfigSoundsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllQueueConfigSoundsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllQueueConfigSoundsRes;
  static deserializeBinaryFromReader(message: GetAllQueueConfigSoundsRes, reader: jspb.BinaryReader): GetAllQueueConfigSoundsRes;
}

export namespace GetAllQueueConfigSoundsRes {
  export type AsObject = {
    url: string,
  }
}

export class ListOwnedUsersRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOwnedUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOwnedUsersRequest): ListOwnedUsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOwnedUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOwnedUsersRequest;
  static deserializeBinaryFromReader(message: ListOwnedUsersRequest, reader: jspb.BinaryReader): ListOwnedUsersRequest;
}

export namespace ListOwnedUsersRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class ListOwnedUsersResponse extends jspb.Message {
  clearUserDescriptionsList(): void;
  getUserDescriptionsList(): Array<UserDescription>;
  setUserDescriptionsList(value: Array<UserDescription>): void;
  addUserDescriptions(value?: UserDescription, index?: number): UserDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOwnedUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOwnedUsersResponse): ListOwnedUsersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOwnedUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOwnedUsersResponse;
  static deserializeBinaryFromReader(message: ListOwnedUsersResponse, reader: jspb.BinaryReader): ListOwnedUsersResponse;
}

export namespace ListOwnedUsersResponse {
  export type AsObject = {
    userDescriptionsList: Array<UserDescription.AsObject>,
  }
}

export class ListOwnedOrgsByOrgIdRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOwnedOrgsByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOwnedOrgsByOrgIdRequest): ListOwnedOrgsByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOwnedOrgsByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOwnedOrgsByOrgIdRequest;
  static deserializeBinaryFromReader(message: ListOwnedOrgsByOrgIdRequest, reader: jspb.BinaryReader): ListOwnedOrgsByOrgIdRequest;
}

export namespace ListOwnedOrgsByOrgIdRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class ListOwnedOrgsByOrgIdResponse extends jspb.Message {
  clearOrganizationDescriptionsList(): void;
  getOrganizationDescriptionsList(): Array<OrganizationDescription>;
  setOrganizationDescriptionsList(value: Array<OrganizationDescription>): void;
  addOrganizationDescriptions(value?: OrganizationDescription, index?: number): OrganizationDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOwnedOrgsByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOwnedOrgsByOrgIdResponse): ListOwnedOrgsByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOwnedOrgsByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOwnedOrgsByOrgIdResponse;
  static deserializeBinaryFromReader(message: ListOwnedOrgsByOrgIdResponse, reader: jspb.BinaryReader): ListOwnedOrgsByOrgIdResponse;
}

export namespace ListOwnedOrgsByOrgIdResponse {
  export type AsObject = {
    organizationDescriptionsList: Array<OrganizationDescription.AsObject>,
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
  clearOrganizationDescriptionsList(): void;
  getOrganizationDescriptionsList(): Array<OrganizationDescription>;
  setOrganizationDescriptionsList(value: Array<OrganizationDescription>): void;
  addOrganizationDescriptions(value?: OrganizationDescription, index?: number): OrganizationDescription;

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
    organizationDescriptionsList: Array<OrganizationDescription.AsObject>,
  }
}

export class GetUserBlockedRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserBlockedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserBlockedRequest): GetUserBlockedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserBlockedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserBlockedRequest;
  static deserializeBinaryFromReader(message: GetUserBlockedRequest, reader: jspb.BinaryReader): GetUserBlockedRequest;
}

export namespace GetUserBlockedRequest {
  export type AsObject = {
    userId: string,
  }
}

export class GetUserBlockedResponse extends jspb.Message {
  getBlocked(): boolean;
  setBlocked(value: boolean): void;

  getLastIp(): string;
  setLastIp(value: string): void;

  hasLastLogin(): boolean;
  clearLastLogin(): void;
  getLastLogin(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastLogin(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastPasswordReset(): boolean;
  clearLastPasswordReset(): void;
  getLastPasswordReset(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastPasswordReset(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getLoginsCount(): number;
  setLoginsCount(value: number): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getHasBlockedIps(): boolean;
  setHasBlockedIps(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserBlockedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserBlockedResponse): GetUserBlockedResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserBlockedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserBlockedResponse;
  static deserializeBinaryFromReader(message: GetUserBlockedResponse, reader: jspb.BinaryReader): GetUserBlockedResponse;
}

export namespace GetUserBlockedResponse {
  export type AsObject = {
    blocked: boolean,
    lastIp: string,
    lastLogin?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastPasswordReset?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    loginsCount: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    hasBlockedIps: boolean,
  }
}

export class UnblockUserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnblockUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnblockUserRequest): UnblockUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnblockUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnblockUserRequest;
  static deserializeBinaryFromReader(message: UnblockUserRequest, reader: jspb.BinaryReader): UnblockUserRequest;
}

export namespace UnblockUserRequest {
  export type AsObject = {
    userId: string,
  }
}

export class UnblockUserResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnblockUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnblockUserResponse): UnblockUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnblockUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnblockUserResponse;
  static deserializeBinaryFromReader(message: UnblockUserResponse, reader: jspb.BinaryReader): UnblockUserResponse;
}

export namespace UnblockUserResponse {
  export type AsObject = {
  }
}

export class UnMigratedUser extends jspb.Message {
  getAgentSid(): number;
  setAgentSid(value: number): void;

  getLoginSid(): number;
  setLoginSid(value: number): void;

  getClientSid(): number;
  setClientSid(value: number): void;

  getUserName(): string;
  setUserName(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getLoginDisabled(): boolean;
  setLoginDisabled(value: boolean): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnMigratedUser.AsObject;
  static toObject(includeInstance: boolean, msg: UnMigratedUser): UnMigratedUser.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnMigratedUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnMigratedUser;
  static deserializeBinaryFromReader(message: UnMigratedUser, reader: jspb.BinaryReader): UnMigratedUser;
}

export namespace UnMigratedUser {
  export type AsObject = {
    agentSid: number,
    loginSid: number,
    clientSid: number,
    userName: string,
    userId: string,
    loginDisabled: boolean,
    firstName: string,
    lastName: string,
  }
}

export class ListP3UnMigratedUsersRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListP3UnMigratedUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListP3UnMigratedUsersRequest): ListP3UnMigratedUsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListP3UnMigratedUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListP3UnMigratedUsersRequest;
  static deserializeBinaryFromReader(message: ListP3UnMigratedUsersRequest, reader: jspb.BinaryReader): ListP3UnMigratedUsersRequest;
}

export namespace ListP3UnMigratedUsersRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class ListP3UnMigratedUsersResponse extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<UnMigratedUser>;
  setUsersList(value: Array<UnMigratedUser>): void;
  addUsers(value?: UnMigratedUser, index?: number): UnMigratedUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListP3UnMigratedUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListP3UnMigratedUsersResponse): ListP3UnMigratedUsersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListP3UnMigratedUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListP3UnMigratedUsersResponse;
  static deserializeBinaryFromReader(message: ListP3UnMigratedUsersResponse, reader: jspb.BinaryReader): ListP3UnMigratedUsersResponse;
}

export namespace ListP3UnMigratedUsersResponse {
  export type AsObject = {
    usersList: Array<UnMigratedUser.AsObject>,
  }
}

export class MigrateP3UserRequest extends jspb.Message {
  getAgentSid(): number;
  setAgentSid(value: number): void;

  getLoginSid(): number;
  setLoginSid(value: number): void;

  getClientSid(): number;
  setClientSid(value: number): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MigrateP3UserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MigrateP3UserRequest): MigrateP3UserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MigrateP3UserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MigrateP3UserRequest;
  static deserializeBinaryFromReader(message: MigrateP3UserRequest, reader: jspb.BinaryReader): MigrateP3UserRequest;
}

export namespace MigrateP3UserRequest {
  export type AsObject = {
    agentSid: number,
    loginSid: number,
    clientSid: number,
    password: string,
  }
}

export class MigrateP3UserResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MigrateP3UserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MigrateP3UserResponse): MigrateP3UserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MigrateP3UserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MigrateP3UserResponse;
  static deserializeBinaryFromReader(message: MigrateP3UserResponse, reader: jspb.BinaryReader): MigrateP3UserResponse;
}

export namespace MigrateP3UserResponse {
  export type AsObject = {
  }
}

export class UpdateP3UserNameRequest extends jspb.Message {
  getAgentSid(): number;
  setAgentSid(value: number): void;

  getLoginSid(): number;
  setLoginSid(value: number): void;

  getUserName(): string;
  setUserName(value: string): void;

  getClientSid(): number;
  setClientSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateP3UserNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateP3UserNameRequest): UpdateP3UserNameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateP3UserNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateP3UserNameRequest;
  static deserializeBinaryFromReader(message: UpdateP3UserNameRequest, reader: jspb.BinaryReader): UpdateP3UserNameRequest;
}

export namespace UpdateP3UserNameRequest {
  export type AsObject = {
    agentSid: number,
    loginSid: number,
    userName: string,
    clientSid: number,
  }
}

export class UpdateP3UserNameResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateP3UserNameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateP3UserNameResponse): UpdateP3UserNameResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateP3UserNameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateP3UserNameResponse;
  static deserializeBinaryFromReader(message: UpdateP3UserNameResponse, reader: jspb.BinaryReader): UpdateP3UserNameResponse;
}

export namespace UpdateP3UserNameResponse {
  export type AsObject = {
  }
}

export class GetQueueConfigSoundReq extends jspb.Message {
  getConfig(): string;
  setConfig(value: string): void;

  getSound(): api_commons_org_pb.ConfigSoundMap[keyof api_commons_org_pb.ConfigSoundMap];
  setSound(value: api_commons_org_pb.ConfigSoundMap[keyof api_commons_org_pb.ConfigSoundMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQueueConfigSoundReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetQueueConfigSoundReq): GetQueueConfigSoundReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetQueueConfigSoundReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQueueConfigSoundReq;
  static deserializeBinaryFromReader(message: GetQueueConfigSoundReq, reader: jspb.BinaryReader): GetQueueConfigSoundReq;
}

export namespace GetQueueConfigSoundReq {
  export type AsObject = {
    config: string,
    sound: api_commons_org_pb.ConfigSoundMap[keyof api_commons_org_pb.ConfigSoundMap],
  }
}

export class GetQueueConfigSoundRes extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQueueConfigSoundRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetQueueConfigSoundRes): GetQueueConfigSoundRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetQueueConfigSoundRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQueueConfigSoundRes;
  static deserializeBinaryFromReader(message: GetQueueConfigSoundRes, reader: jspb.BinaryReader): GetQueueConfigSoundRes;
}

export namespace GetQueueConfigSoundRes {
  export type AsObject = {
    url: string,
  }
}

export class SetQueueConfigSoundReq extends jspb.Message {
  getConfig(): string;
  setConfig(value: string): void;

  getSound(): api_commons_org_pb.ConfigSoundMap[keyof api_commons_org_pb.ConfigSoundMap];
  setSound(value: api_commons_org_pb.ConfigSoundMap[keyof api_commons_org_pb.ConfigSoundMap]): void;

  getFileName(): string;
  setFileName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetQueueConfigSoundReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetQueueConfigSoundReq): SetQueueConfigSoundReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetQueueConfigSoundReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetQueueConfigSoundReq;
  static deserializeBinaryFromReader(message: SetQueueConfigSoundReq, reader: jspb.BinaryReader): SetQueueConfigSoundReq;
}

export namespace SetQueueConfigSoundReq {
  export type AsObject = {
    config: string,
    sound: api_commons_org_pb.ConfigSoundMap[keyof api_commons_org_pb.ConfigSoundMap],
    fileName: string,
  }
}

export class SetQueueConfigSoundRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetQueueConfigSoundRes.AsObject;
  static toObject(includeInstance: boolean, msg: SetQueueConfigSoundRes): SetQueueConfigSoundRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetQueueConfigSoundRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetQueueConfigSoundRes;
  static deserializeBinaryFromReader(message: SetQueueConfigSoundRes, reader: jspb.BinaryReader): SetQueueConfigSoundRes;
}

export namespace SetQueueConfigSoundRes {
  export type AsObject = {
  }
}

export class SetAllQueueConfigSoundsFromSourceReq extends jspb.Message {
  getToConfig(): string;
  setToConfig(value: string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConfig(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasDefaultProfile(): boolean;
  clearDefaultProfile(): void;
  getDefaultProfile(): SetAllQueueConfigSoundsFromSourceReq.DefaultProfile | undefined;
  setDefaultProfile(value?: SetAllQueueConfigSoundsFromSourceReq.DefaultProfile): void;

  getFromCase(): SetAllQueueConfigSoundsFromSourceReq.FromCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAllQueueConfigSoundsFromSourceReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetAllQueueConfigSoundsFromSourceReq): SetAllQueueConfigSoundsFromSourceReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetAllQueueConfigSoundsFromSourceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAllQueueConfigSoundsFromSourceReq;
  static deserializeBinaryFromReader(message: SetAllQueueConfigSoundsFromSourceReq, reader: jspb.BinaryReader): SetAllQueueConfigSoundsFromSourceReq;
}

export namespace SetAllQueueConfigSoundsFromSourceReq {
  export type AsObject = {
    toConfig: string,
    config?: google_protobuf_wrappers_pb.StringValue.AsObject,
    defaultProfile?: SetAllQueueConfigSoundsFromSourceReq.DefaultProfile.AsObject,
  }

  export class DefaultProfile extends jspb.Message {
    getLanguage(): api_commons_org_pb.SoundLanguageMap[keyof api_commons_org_pb.SoundLanguageMap];
    setLanguage(value: api_commons_org_pb.SoundLanguageMap[keyof api_commons_org_pb.SoundLanguageMap]): void;

    getGender(): api_commons_org_pb.SoundGenderMap[keyof api_commons_org_pb.SoundGenderMap];
    setGender(value: api_commons_org_pb.SoundGenderMap[keyof api_commons_org_pb.SoundGenderMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DefaultProfile.AsObject;
    static toObject(includeInstance: boolean, msg: DefaultProfile): DefaultProfile.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DefaultProfile, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DefaultProfile;
    static deserializeBinaryFromReader(message: DefaultProfile, reader: jspb.BinaryReader): DefaultProfile;
  }

  export namespace DefaultProfile {
    export type AsObject = {
      language: api_commons_org_pb.SoundLanguageMap[keyof api_commons_org_pb.SoundLanguageMap],
      gender: api_commons_org_pb.SoundGenderMap[keyof api_commons_org_pb.SoundGenderMap],
    }
  }

  export enum FromCase {
    FROM_NOT_SET = 0,
    CONFIG = 2,
    DEFAULT_PROFILE = 3,
  }
}

export class SetAllQueueConfigSoundsFromSourceRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAllQueueConfigSoundsFromSourceRes.AsObject;
  static toObject(includeInstance: boolean, msg: SetAllQueueConfigSoundsFromSourceRes): SetAllQueueConfigSoundsFromSourceRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetAllQueueConfigSoundsFromSourceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAllQueueConfigSoundsFromSourceRes;
  static deserializeBinaryFromReader(message: SetAllQueueConfigSoundsFromSourceRes, reader: jspb.BinaryReader): SetAllQueueConfigSoundsFromSourceRes;
}

export namespace SetAllQueueConfigSoundsFromSourceRes {
  export type AsObject = {
  }
}

export class RemoveLoginStrikesRequest extends jspb.Message {
  clearLoginLogSidsList(): void;
  getLoginLogSidsList(): Array<number>;
  setLoginLogSidsList(value: Array<number>): void;
  addLoginLogSids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveLoginStrikesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveLoginStrikesRequest): RemoveLoginStrikesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveLoginStrikesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveLoginStrikesRequest;
  static deserializeBinaryFromReader(message: RemoveLoginStrikesRequest, reader: jspb.BinaryReader): RemoveLoginStrikesRequest;
}

export namespace RemoveLoginStrikesRequest {
  export type AsObject = {
    loginLogSidsList: Array<number>,
  }
}

export class RemoveLoginStrikesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveLoginStrikesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveLoginStrikesResponse): RemoveLoginStrikesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveLoginStrikesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveLoginStrikesResponse;
  static deserializeBinaryFromReader(message: RemoveLoginStrikesResponse, reader: jspb.BinaryReader): RemoveLoginStrikesResponse;
}

export namespace RemoveLoginStrikesResponse {
  export type AsObject = {
  }
}

export class RemoveUserLoginStrikesRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveUserLoginStrikesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveUserLoginStrikesRequest): RemoveUserLoginStrikesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveUserLoginStrikesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveUserLoginStrikesRequest;
  static deserializeBinaryFromReader(message: RemoveUserLoginStrikesRequest, reader: jspb.BinaryReader): RemoveUserLoginStrikesRequest;
}

export namespace RemoveUserLoginStrikesRequest {
  export type AsObject = {
    userId: string,
  }
}

export class RemoveUserLoginStrikesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveUserLoginStrikesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveUserLoginStrikesResponse): RemoveUserLoginStrikesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveUserLoginStrikesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveUserLoginStrikesResponse;
  static deserializeBinaryFromReader(message: RemoveUserLoginStrikesResponse, reader: jspb.BinaryReader): RemoveUserLoginStrikesResponse;
}

export namespace RemoveUserLoginStrikesResponse {
  export type AsObject = {
  }
}

export class ListLoginHistoryRequest extends jspb.Message {
  hasUserId(): boolean;
  clearUserId(): void;
  getUserId(): string;
  setUserId(value: string): void;

  hasOriginationIp(): boolean;
  clearOriginationIp(): void;
  getOriginationIp(): string;
  setOriginationIp(value: string): void;

  getDuration(): number;
  setDuration(value: number): void;

  getStrikesOnly(): boolean;
  setStrikesOnly(value: boolean): void;

  getFilterTypeCase(): ListLoginHistoryRequest.FilterTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLoginHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLoginHistoryRequest): ListLoginHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLoginHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLoginHistoryRequest;
  static deserializeBinaryFromReader(message: ListLoginHistoryRequest, reader: jspb.BinaryReader): ListLoginHistoryRequest;
}

export namespace ListLoginHistoryRequest {
  export type AsObject = {
    userId: string,
    originationIp: string,
    duration: number,
    strikesOnly: boolean,
  }

  export enum FilterTypeCase {
    FILTER_TYPE_NOT_SET = 0,
    USER_ID = 1,
    ORIGINATION_IP = 2,
  }
}

export class ListLoginHistoryResponse extends jspb.Message {
  clearLoginEventsList(): void;
  getLoginEventsList(): Array<LoginEvent>;
  setLoginEventsList(value: Array<LoginEvent>): void;
  addLoginEvents(value?: LoginEvent, index?: number): LoginEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLoginHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLoginHistoryResponse): ListLoginHistoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLoginHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLoginHistoryResponse;
  static deserializeBinaryFromReader(message: ListLoginHistoryResponse, reader: jspb.BinaryReader): ListLoginHistoryResponse;
}

export namespace ListLoginHistoryResponse {
  export type AsObject = {
    loginEventsList: Array<LoginEvent.AsObject>,
  }
}

export class LoginEvent extends jspb.Message {
  getLoginLogSid(): number;
  setLoginLogSid(value: number): void;

  getUserName(): string;
  setUserName(value: string): void;

  getOriginationIp(): string;
  setOriginationIp(value: string): void;

  getLoginSuccess(): boolean;
  setLoginSuccess(value: boolean): void;

  getStrike(): boolean;
  setStrike(value: boolean): void;

  getNotes(): string;
  setNotes(value: string): void;

  hasDateAttempted(): boolean;
  clearDateAttempted(): void;
  getDateAttempted(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateAttempted(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginEvent.AsObject;
  static toObject(includeInstance: boolean, msg: LoginEvent): LoginEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginEvent;
  static deserializeBinaryFromReader(message: LoginEvent, reader: jspb.BinaryReader): LoginEvent;
}

export namespace LoginEvent {
  export type AsObject = {
    loginLogSid: number,
    userName: string,
    originationIp: string,
    loginSuccess: boolean,
    strike: boolean,
    notes: string,
    dateAttempted?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class OrgBillingSettings extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getVoiceAnalyticsPricePerHour(): number;
  setVoiceAnalyticsPricePerHour(value: number): void;

  getAnalyticsPricePerDoc(): number;
  setAnalyticsPricePerDoc(value: number): void;

  hasDefault(): boolean;
  clearDefault(): void;
  getDefault(): PhoneBillingRates | undefined;
  setDefault(value?: PhoneBillingRates): void;

  getCountryRegionOverridesMap(): jspb.Map<number, BillingRegionMap>;
  clearCountryRegionOverridesMap(): void;
  hasAgentRates(): boolean;
  clearAgentRates(): void;
  getAgentRates(): AgentBillingRates | undefined;
  setAgentRates(value?: AgentBillingRates): void;

  hasEmailPricePerMessage(): boolean;
  clearEmailPricePerMessage(): void;
  getEmailPricePerMessage(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setEmailPricePerMessage(value?: google_protobuf_wrappers_pb.FloatValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrgBillingSettings.AsObject;
  static toObject(includeInstance: boolean, msg: OrgBillingSettings): OrgBillingSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrgBillingSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrgBillingSettings;
  static deserializeBinaryFromReader(message: OrgBillingSettings, reader: jspb.BinaryReader): OrgBillingSettings;
}

export namespace OrgBillingSettings {
  export type AsObject = {
    orgId: string,
    voiceAnalyticsPricePerHour: number,
    analyticsPricePerDoc: number,
    pb_default?: PhoneBillingRates.AsObject,
    countryRegionOverridesMap: Array<[number, BillingRegionMap.AsObject]>,
    agentRates?: AgentBillingRates.AsObject,
    emailPricePerMessage?: google_protobuf_wrappers_pb.FloatValue.AsObject,
  }
}

export class BillingRegionMap extends jspb.Message {
  getRegionRatesMap(): jspb.Map<string, PhoneBillingRates>;
  clearRegionRatesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingRegionMap.AsObject;
  static toObject(includeInstance: boolean, msg: BillingRegionMap): BillingRegionMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingRegionMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingRegionMap;
  static deserializeBinaryFromReader(message: BillingRegionMap, reader: jspb.BinaryReader): BillingRegionMap;
}

export namespace BillingRegionMap {
  export type AsObject = {
    regionRatesMap: Array<[string, PhoneBillingRates.AsObject]>,
  }
}

export class AgentBillingRates extends jspb.Message {
  getAgentTollFreePpi(): number;
  setAgentTollFreePpi(value: number): void;

  getAgentSoftphonePpi(): number;
  setAgentSoftphonePpi(value: number): void;

  getAgentLocalPpi(): number;
  setAgentLocalPpi(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentBillingRates.AsObject;
  static toObject(includeInstance: boolean, msg: AgentBillingRates): AgentBillingRates.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentBillingRates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentBillingRates;
  static deserializeBinaryFromReader(message: AgentBillingRates, reader: jspb.BinaryReader): AgentBillingRates;
}

export namespace AgentBillingRates {
  export type AsObject = {
    agentTollFreePpi: number,
    agentSoftphonePpi: number,
    agentLocalPpi: number,
  }
}

export class PhoneBillingRates extends jspb.Message {
  getBillingIncrementSeconds(): number;
  setBillingIncrementSeconds(value: number): void;

  getInboundPpi(): number;
  setInboundPpi(value: number): void;

  getSmsPricePerAttempt(): number;
  setSmsPricePerAttempt(value: number): void;

  getVocalDirectPricePerMessage(): number;
  setVocalDirectPricePerMessage(value: number): void;

  hasSeconds(): boolean;
  clearSeconds(): void;
  getSeconds(): PhoneBillingRates.Seconds | undefined;
  setSeconds(value?: PhoneBillingRates.Seconds): void;

  hasAttempts(): boolean;
  clearAttempts(): void;
  getAttempts(): PhoneBillingRates.Attempts | undefined;
  setAttempts(value?: PhoneBillingRates.Attempts): void;

  hasConnectedCalls(): boolean;
  clearConnectedCalls(): void;
  getConnectedCalls(): PhoneBillingRates.ConnectedCalls | undefined;
  setConnectedCalls(value?: PhoneBillingRates.ConnectedCalls): void;

  getUnitsCase(): PhoneBillingRates.UnitsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhoneBillingRates.AsObject;
  static toObject(includeInstance: boolean, msg: PhoneBillingRates): PhoneBillingRates.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PhoneBillingRates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhoneBillingRates;
  static deserializeBinaryFromReader(message: PhoneBillingRates, reader: jspb.BinaryReader): PhoneBillingRates;
}

export namespace PhoneBillingRates {
  export type AsObject = {
    billingIncrementSeconds: number,
    inboundPpi: number,
    smsPricePerAttempt: number,
    vocalDirectPricePerMessage: number,
    seconds?: PhoneBillingRates.Seconds.AsObject,
    attempts?: PhoneBillingRates.Attempts.AsObject,
    connectedCalls?: PhoneBillingRates.ConnectedCalls.AsObject,
  }

  export class Seconds extends jspb.Message {
    getPpi(): number;
    setPpi(value: number): void;

    getLinkbackPpi(): number;
    setLinkbackPpi(value: number): void;

    getAgentLinkcallPpi(): number;
    setAgentLinkcallPpi(value: number): void;

    getMinimumBilledIncrements(): number;
    setMinimumBilledIncrements(value: number): void;

    hasMaximumBilledIncrements(): boolean;
    clearMaximumBilledIncrements(): void;
    getMaximumBilledIncrements(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaximumBilledIncrements(value?: google_protobuf_wrappers_pb.Int64Value): void;

    getMinimumLinkbackBilledIncrements(): number;
    setMinimumLinkbackBilledIncrements(value: number): void;

    hasMaximumLinkbackBilledIncrements(): boolean;
    clearMaximumLinkbackBilledIncrements(): void;
    getMaximumLinkbackBilledIncrements(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaximumLinkbackBilledIncrements(value?: google_protobuf_wrappers_pb.Int64Value): void;

    hasMachineHangupIncrementsBilled(): boolean;
    clearMachineHangupIncrementsBilled(): void;
    getMachineHangupIncrementsBilled(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMachineHangupIncrementsBilled(value?: google_protobuf_wrappers_pb.Int64Value): void;

    hasHumanHangupIncrementsBilled(): boolean;
    clearHumanHangupIncrementsBilled(): void;
    getHumanHangupIncrementsBilled(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setHumanHangupIncrementsBilled(value?: google_protobuf_wrappers_pb.Int64Value): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Seconds.AsObject;
    static toObject(includeInstance: boolean, msg: Seconds): Seconds.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Seconds, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Seconds;
    static deserializeBinaryFromReader(message: Seconds, reader: jspb.BinaryReader): Seconds;
  }

  export namespace Seconds {
    export type AsObject = {
      ppi: number,
      linkbackPpi: number,
      agentLinkcallPpi: number,
      minimumBilledIncrements: number,
      maximumBilledIncrements?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      minimumLinkbackBilledIncrements: number,
      maximumLinkbackBilledIncrements?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      machineHangupIncrementsBilled?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      humanHangupIncrementsBilled?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }

  export class Attempts extends jspb.Message {
    getPpa(): number;
    setPpa(value: number): void;

    getLinkbackPpa(): number;
    setLinkbackPpa(value: number): void;

    getAgentLinkcallPpa(): number;
    setAgentLinkcallPpa(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Attempts.AsObject;
    static toObject(includeInstance: boolean, msg: Attempts): Attempts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Attempts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Attempts;
    static deserializeBinaryFromReader(message: Attempts, reader: jspb.BinaryReader): Attempts;
  }

  export namespace Attempts {
    export type AsObject = {
      ppa: number,
      linkbackPpa: number,
      agentLinkcallPpa: number,
    }
  }

  export class ConnectedCalls extends jspb.Message {
    getPpc(): number;
    setPpc(value: number): void;

    getLinkbackPpc(): number;
    setLinkbackPpc(value: number): void;

    getAgentLinkcallPpc(): number;
    setAgentLinkcallPpc(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectedCalls.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectedCalls): ConnectedCalls.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConnectedCalls, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectedCalls;
    static deserializeBinaryFromReader(message: ConnectedCalls, reader: jspb.BinaryReader): ConnectedCalls;
  }

  export namespace ConnectedCalls {
    export type AsObject = {
      ppc: number,
      linkbackPpc: number,
      agentLinkcallPpc: number,
    }
  }

  export enum UnitsCase {
    UNITS_NOT_SET = 0,
    SECONDS = 6,
    ATTEMPTS = 7,
    CONNECTED_CALLS = 8,
  }
}

export class GetOrgBillingSettingsByOrgIdRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrgBillingSettingsByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrgBillingSettingsByOrgIdRequest): GetOrgBillingSettingsByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrgBillingSettingsByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrgBillingSettingsByOrgIdRequest;
  static deserializeBinaryFromReader(message: GetOrgBillingSettingsByOrgIdRequest, reader: jspb.BinaryReader): GetOrgBillingSettingsByOrgIdRequest;
}

export namespace GetOrgBillingSettingsByOrgIdRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class GetOrgBillingSettingsByOrgIdResponse extends jspb.Message {
  hasSettings(): boolean;
  clearSettings(): void;
  getSettings(): OrgBillingSettings | undefined;
  setSettings(value?: OrgBillingSettings): void;

  getCountryDefaultRegionsMap(): jspb.Map<number, BillingRegionMap>;
  clearCountryDefaultRegionsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrgBillingSettingsByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrgBillingSettingsByOrgIdResponse): GetOrgBillingSettingsByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrgBillingSettingsByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrgBillingSettingsByOrgIdResponse;
  static deserializeBinaryFromReader(message: GetOrgBillingSettingsByOrgIdResponse, reader: jspb.BinaryReader): GetOrgBillingSettingsByOrgIdResponse;
}

export namespace GetOrgBillingSettingsByOrgIdResponse {
  export type AsObject = {
    settings?: OrgBillingSettings.AsObject,
    countryDefaultRegionsMap: Array<[number, BillingRegionMap.AsObject]>,
  }
}

export class GetOrgBillingSettingsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrgBillingSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrgBillingSettingsRequest): GetOrgBillingSettingsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrgBillingSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrgBillingSettingsRequest;
  static deserializeBinaryFromReader(message: GetOrgBillingSettingsRequest, reader: jspb.BinaryReader): GetOrgBillingSettingsRequest;
}

export namespace GetOrgBillingSettingsRequest {
  export type AsObject = {
  }
}

export class GetOrgBillingSettingsResponse extends jspb.Message {
  hasSettings(): boolean;
  clearSettings(): void;
  getSettings(): OrgBillingSettings | undefined;
  setSettings(value?: OrgBillingSettings): void;

  getCountryDefaultRegionsMap(): jspb.Map<number, BillingRegionMap>;
  clearCountryDefaultRegionsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrgBillingSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrgBillingSettingsResponse): GetOrgBillingSettingsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrgBillingSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrgBillingSettingsResponse;
  static deserializeBinaryFromReader(message: GetOrgBillingSettingsResponse, reader: jspb.BinaryReader): GetOrgBillingSettingsResponse;
}

export namespace GetOrgBillingSettingsResponse {
  export type AsObject = {
    settings?: OrgBillingSettings.AsObject,
    countryDefaultRegionsMap: Array<[number, BillingRegionMap.AsObject]>,
  }
}

export class SetOrgBillingSettingsRequest extends jspb.Message {
  hasSettings(): boolean;
  clearSettings(): void;
  getSettings(): OrgBillingSettings | undefined;
  setSettings(value?: OrgBillingSettings): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetOrgBillingSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetOrgBillingSettingsRequest): SetOrgBillingSettingsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetOrgBillingSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetOrgBillingSettingsRequest;
  static deserializeBinaryFromReader(message: SetOrgBillingSettingsRequest, reader: jspb.BinaryReader): SetOrgBillingSettingsRequest;
}

export namespace SetOrgBillingSettingsRequest {
  export type AsObject = {
    settings?: OrgBillingSettings.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class SetOrgBillingSettingsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetOrgBillingSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetOrgBillingSettingsResponse): SetOrgBillingSettingsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetOrgBillingSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetOrgBillingSettingsResponse;
  static deserializeBinaryFromReader(message: SetOrgBillingSettingsResponse, reader: jspb.BinaryReader): SetOrgBillingSettingsResponse;
}

export namespace SetOrgBillingSettingsResponse {
  export type AsObject = {
  }
}

export class AddOrgBillingOverrideRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  hasRates(): boolean;
  clearRates(): void;
  getRates(): PhoneBillingRates | undefined;
  setRates(value?: PhoneBillingRates): void;

  getCountry(): api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap];
  setCountry(value: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddOrgBillingOverrideRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddOrgBillingOverrideRequest): AddOrgBillingOverrideRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddOrgBillingOverrideRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddOrgBillingOverrideRequest;
  static deserializeBinaryFromReader(message: AddOrgBillingOverrideRequest, reader: jspb.BinaryReader): AddOrgBillingOverrideRequest;
}

export namespace AddOrgBillingOverrideRequest {
  export type AsObject = {
    orgId: string,
    region: string,
    rates?: PhoneBillingRates.AsObject,
    country: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap],
  }
}

export class AddOrgBillingOverrideResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddOrgBillingOverrideResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddOrgBillingOverrideResponse): AddOrgBillingOverrideResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddOrgBillingOverrideResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddOrgBillingOverrideResponse;
  static deserializeBinaryFromReader(message: AddOrgBillingOverrideResponse, reader: jspb.BinaryReader): AddOrgBillingOverrideResponse;
}

export namespace AddOrgBillingOverrideResponse {
  export type AsObject = {
  }
}

export class RemoveOrgBillingOverrideRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  getCountry(): api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap];
  setCountry(value: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveOrgBillingOverrideRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveOrgBillingOverrideRequest): RemoveOrgBillingOverrideRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveOrgBillingOverrideRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveOrgBillingOverrideRequest;
  static deserializeBinaryFromReader(message: RemoveOrgBillingOverrideRequest, reader: jspb.BinaryReader): RemoveOrgBillingOverrideRequest;
}

export namespace RemoveOrgBillingOverrideRequest {
  export type AsObject = {
    orgId: string,
    region: string,
    country: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap],
  }
}

export class RemoveOrgBillingOverrideResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveOrgBillingOverrideResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveOrgBillingOverrideResponse): RemoveOrgBillingOverrideResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveOrgBillingOverrideResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveOrgBillingOverrideResponse;
  static deserializeBinaryFromReader(message: RemoveOrgBillingOverrideResponse, reader: jspb.BinaryReader): RemoveOrgBillingOverrideResponse;
}

export namespace RemoveOrgBillingOverrideResponse {
  export type AsObject = {
  }
}

export class GetSystemDefaultBillingRatesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSystemDefaultBillingRatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSystemDefaultBillingRatesRequest): GetSystemDefaultBillingRatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSystemDefaultBillingRatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSystemDefaultBillingRatesRequest;
  static deserializeBinaryFromReader(message: GetSystemDefaultBillingRatesRequest, reader: jspb.BinaryReader): GetSystemDefaultBillingRatesRequest;
}

export namespace GetSystemDefaultBillingRatesRequest {
  export type AsObject = {
  }
}

export class GetSystemDefaultBillingRatesResponse extends jspb.Message {
  getEmailPricePerMessage(): number;
  setEmailPricePerMessage(value: number): void;

  hasPhoneRates(): boolean;
  clearPhoneRates(): void;
  getPhoneRates(): PhoneBillingRates | undefined;
  setPhoneRates(value?: PhoneBillingRates): void;

  hasAgentRates(): boolean;
  clearAgentRates(): void;
  getAgentRates(): AgentBillingRates | undefined;
  setAgentRates(value?: AgentBillingRates): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSystemDefaultBillingRatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSystemDefaultBillingRatesResponse): GetSystemDefaultBillingRatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSystemDefaultBillingRatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSystemDefaultBillingRatesResponse;
  static deserializeBinaryFromReader(message: GetSystemDefaultBillingRatesResponse, reader: jspb.BinaryReader): GetSystemDefaultBillingRatesResponse;
}

export namespace GetSystemDefaultBillingRatesResponse {
  export type AsObject = {
    emailPricePerMessage: number,
    phoneRates?: PhoneBillingRates.AsObject,
    agentRates?: AgentBillingRates.AsObject,
  }
}

export class UpdateP3UserSidsRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getAgentSid(): number;
  setAgentSid(value: number): void;

  getLoginSid(): number;
  setLoginSid(value: number): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateP3UserSidsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateP3UserSidsRequest): UpdateP3UserSidsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateP3UserSidsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateP3UserSidsRequest;
  static deserializeBinaryFromReader(message: UpdateP3UserSidsRequest, reader: jspb.BinaryReader): UpdateP3UserSidsRequest;
}

export namespace UpdateP3UserSidsRequest {
  export type AsObject = {
    userId: string,
    agentSid: number,
    loginSid: number,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateP3UserSidsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateP3UserSidsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateP3UserSidsResponse): UpdateP3UserSidsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateP3UserSidsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateP3UserSidsResponse;
  static deserializeBinaryFromReader(message: UpdateP3UserSidsResponse, reader: jspb.BinaryReader): UpdateP3UserSidsResponse;
}

export namespace UpdateP3UserSidsResponse {
  export type AsObject = {
  }
}

export class AuthConnectionSettings extends jspb.Message {
  getProvider(): api_commons_org_pb.IdentityProviderMap[keyof api_commons_org_pb.IdentityProviderMap];
  setProvider(value: api_commons_org_pb.IdentityProviderMap[keyof api_commons_org_pb.IdentityProviderMap]): void;

  getIssuerUrl(): string;
  setIssuerUrl(value: string): void;

  getTenantUrl(): string;
  setTenantUrl(value: string): void;

  getClientId(): string;
  setClientId(value: string): void;

  getConnectionId(): string;
  setConnectionId(value: string): void;

  hasSecretExpiration(): boolean;
  clearSecretExpiration(): void;
  getSecretExpiration(): AuthConnectionSettings.SecretExpiration | undefined;
  setSecretExpiration(value?: AuthConnectionSettings.SecretExpiration): void;

  hasDefaultGroup(): boolean;
  clearDefaultGroup(): void;
  getDefaultGroup(): GroupItem | undefined;
  setDefaultGroup(value?: GroupItem): void;

  clearCustomGroupsList(): void;
  getCustomGroupsList(): Array<GroupItem>;
  setCustomGroupsList(value: Array<GroupItem>): void;
  addCustomGroups(value?: GroupItem, index?: number): GroupItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthConnectionSettings.AsObject;
  static toObject(includeInstance: boolean, msg: AuthConnectionSettings): AuthConnectionSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthConnectionSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthConnectionSettings;
  static deserializeBinaryFromReader(message: AuthConnectionSettings, reader: jspb.BinaryReader): AuthConnectionSettings;
}

export namespace AuthConnectionSettings {
  export type AsObject = {
    provider: api_commons_org_pb.IdentityProviderMap[keyof api_commons_org_pb.IdentityProviderMap],
    issuerUrl: string,
    tenantUrl: string,
    clientId: string,
    connectionId: string,
    secretExpiration?: AuthConnectionSettings.SecretExpiration.AsObject,
    defaultGroup?: GroupItem.AsObject,
    customGroupsList: Array<GroupItem.AsObject>,
  }

  export class SecretExpiration extends jspb.Message {
    hasDate(): boolean;
    clearDate(): void;
    getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecretExpiration.AsObject;
    static toObject(includeInstance: boolean, msg: SecretExpiration): SecretExpiration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecretExpiration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecretExpiration;
    static deserializeBinaryFromReader(message: SecretExpiration, reader: jspb.BinaryReader): SecretExpiration;
  }

  export namespace SecretExpiration {
    export type AsObject = {
      date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }
}

export class GroupItem extends jspb.Message {
  getGroupName(): string;
  setGroupName(value: string): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getAgentProfileGroupId(): string;
  setAgentProfileGroupId(value: string): void;

  getP3PermissionGroupId(): string;
  setP3PermissionGroupId(value: string): void;

  clearPermissionGroupIdsList(): void;
  getPermissionGroupIdsList(): Array<string>;
  setPermissionGroupIdsList(value: Array<string>): void;
  addPermissionGroupIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupItem.AsObject;
  static toObject(includeInstance: boolean, msg: GroupItem): GroupItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupItem;
  static deserializeBinaryFromReader(message: GroupItem, reader: jspb.BinaryReader): GroupItem;
}

export namespace GroupItem {
  export type AsObject = {
    groupName: string,
    huntGroupSid: number,
    agentProfileGroupId: string,
    p3PermissionGroupId: string,
    permissionGroupIdsList: Array<string>,
  }
}

export class CreateAuthConnectionRequest extends jspb.Message {
  hasSettings(): boolean;
  clearSettings(): void;
  getSettings(): AuthConnectionSettings | undefined;
  setSettings(value?: AuthConnectionSettings): void;

  getClientSecret(): string;
  setClientSecret(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAuthConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAuthConnectionRequest): CreateAuthConnectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAuthConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAuthConnectionRequest;
  static deserializeBinaryFromReader(message: CreateAuthConnectionRequest, reader: jspb.BinaryReader): CreateAuthConnectionRequest;
}

export namespace CreateAuthConnectionRequest {
  export type AsObject = {
    settings?: AuthConnectionSettings.AsObject,
    clientSecret: string,
  }
}

export class CreateAuthConnectionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAuthConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAuthConnectionResponse): CreateAuthConnectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAuthConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAuthConnectionResponse;
  static deserializeBinaryFromReader(message: CreateAuthConnectionResponse, reader: jspb.BinaryReader): CreateAuthConnectionResponse;
}

export namespace CreateAuthConnectionResponse {
  export type AsObject = {
  }
}

export class GetAuthConnectionSettingsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuthConnectionSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuthConnectionSettingsRequest): GetAuthConnectionSettingsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuthConnectionSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuthConnectionSettingsRequest;
  static deserializeBinaryFromReader(message: GetAuthConnectionSettingsRequest, reader: jspb.BinaryReader): GetAuthConnectionSettingsRequest;
}

export namespace GetAuthConnectionSettingsRequest {
  export type AsObject = {
  }
}

export class GetAuthConnectionSettingsResponse extends jspb.Message {
  hasSettings(): boolean;
  clearSettings(): void;
  getSettings(): AuthConnectionSettings | undefined;
  setSettings(value?: AuthConnectionSettings): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuthConnectionSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuthConnectionSettingsResponse): GetAuthConnectionSettingsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuthConnectionSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuthConnectionSettingsResponse;
  static deserializeBinaryFromReader(message: GetAuthConnectionSettingsResponse, reader: jspb.BinaryReader): GetAuthConnectionSettingsResponse;
}

export namespace GetAuthConnectionSettingsResponse {
  export type AsObject = {
    settings?: AuthConnectionSettings.AsObject,
  }
}

export class UpdateAuthConnectionSettingsRequest extends jspb.Message {
  hasSettings(): boolean;
  clearSettings(): void;
  getSettings(): AuthConnectionSettings | undefined;
  setSettings(value?: AuthConnectionSettings): void;

  getClientSecret(): string;
  setClientSecret(value: string): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAuthConnectionSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAuthConnectionSettingsRequest): UpdateAuthConnectionSettingsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAuthConnectionSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAuthConnectionSettingsRequest;
  static deserializeBinaryFromReader(message: UpdateAuthConnectionSettingsRequest, reader: jspb.BinaryReader): UpdateAuthConnectionSettingsRequest;
}

export namespace UpdateAuthConnectionSettingsRequest {
  export type AsObject = {
    settings?: AuthConnectionSettings.AsObject,
    clientSecret: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateAuthConnectionSettingsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAuthConnectionSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAuthConnectionSettingsResponse): UpdateAuthConnectionSettingsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAuthConnectionSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAuthConnectionSettingsResponse;
  static deserializeBinaryFromReader(message: UpdateAuthConnectionSettingsResponse, reader: jspb.BinaryReader): UpdateAuthConnectionSettingsResponse;
}

export namespace UpdateAuthConnectionSettingsResponse {
  export type AsObject = {
  }
}

export class DeleteAuthConnectionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAuthConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAuthConnectionRequest): DeleteAuthConnectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAuthConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAuthConnectionRequest;
  static deserializeBinaryFromReader(message: DeleteAuthConnectionRequest, reader: jspb.BinaryReader): DeleteAuthConnectionRequest;
}

export namespace DeleteAuthConnectionRequest {
  export type AsObject = {
  }
}

export class DeleteAuthConnectionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAuthConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAuthConnectionResponse): DeleteAuthConnectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAuthConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAuthConnectionResponse;
  static deserializeBinaryFromReader(message: DeleteAuthConnectionResponse, reader: jspb.BinaryReader): DeleteAuthConnectionResponse;
}

export namespace DeleteAuthConnectionResponse {
  export type AsObject = {
  }
}

export class UserSubscription extends jspb.Message {
  getSubscriptionId(): string;
  setSubscriptionId(value: string): void;

  getEventType(): api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap];
  setEventType(value: api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap]): void;

  getUserId(): string;
  setUserId(value: string): void;

  hasRoom303(): boolean;
  clearRoom303(): void;
  getRoom303(): UserSubscription.Room303 | undefined;
  setRoom303(value?: UserSubscription.Room303): void;

  getVersion(): number;
  setVersion(value: number): void;

  clearFiltersList(): void;
  getFiltersList(): Array<api_commons_notifications_pb.FieldValueFilter>;
  setFiltersList(value: Array<api_commons_notifications_pb.FieldValueFilter>): void;
  addFilters(value?: api_commons_notifications_pb.FieldValueFilter, index?: number): api_commons_notifications_pb.FieldValueFilter;

  getDeliverMethodCase(): UserSubscription.DeliverMethodCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSubscription.AsObject;
  static toObject(includeInstance: boolean, msg: UserSubscription): UserSubscription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserSubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSubscription;
  static deserializeBinaryFromReader(message: UserSubscription, reader: jspb.BinaryReader): UserSubscription;
}

export namespace UserSubscription {
  export type AsObject = {
    subscriptionId: string,
    eventType: api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap],
    userId: string,
    room303?: UserSubscription.Room303.AsObject,
    version: number,
    filtersList: Array<api_commons_notifications_pb.FieldValueFilter.AsObject>,
  }

  export class Room303 extends jspb.Message {
    getRoomName(): string;
    setRoomName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Room303.AsObject;
    static toObject(includeInstance: boolean, msg: Room303): Room303.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Room303, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Room303;
    static deserializeBinaryFromReader(message: Room303, reader: jspb.BinaryReader): Room303;
  }

  export namespace Room303 {
    export type AsObject = {
      roomName: string,
    }
  }

  export enum DeliverMethodCase {
    DELIVER_METHOD_NOT_SET = 0,
    ROOM303 = 100,
  }
}

export class AddUserSubscriptionRequest extends jspb.Message {
  hasSubscription(): boolean;
  clearSubscription(): void;
  getSubscription(): UserSubscription | undefined;
  setSubscription(value?: UserSubscription): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUserSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddUserSubscriptionRequest): AddUserSubscriptionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddUserSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUserSubscriptionRequest;
  static deserializeBinaryFromReader(message: AddUserSubscriptionRequest, reader: jspb.BinaryReader): AddUserSubscriptionRequest;
}

export namespace AddUserSubscriptionRequest {
  export type AsObject = {
    subscription?: UserSubscription.AsObject,
  }
}

export class AddUserSubscriptionResponse extends jspb.Message {
  hasSubscription(): boolean;
  clearSubscription(): void;
  getSubscription(): UserSubscription | undefined;
  setSubscription(value?: UserSubscription): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUserSubscriptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddUserSubscriptionResponse): AddUserSubscriptionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddUserSubscriptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUserSubscriptionResponse;
  static deserializeBinaryFromReader(message: AddUserSubscriptionResponse, reader: jspb.BinaryReader): AddUserSubscriptionResponse;
}

export namespace AddUserSubscriptionResponse {
  export type AsObject = {
    subscription?: UserSubscription.AsObject,
  }
}

export class GetUserSubscriptionRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getSubscriptionId(): string;
  setSubscriptionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserSubscriptionRequest): GetUserSubscriptionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserSubscriptionRequest;
  static deserializeBinaryFromReader(message: GetUserSubscriptionRequest, reader: jspb.BinaryReader): GetUserSubscriptionRequest;
}

export namespace GetUserSubscriptionRequest {
  export type AsObject = {
    userId: string,
    subscriptionId: string,
  }
}

export class GetUserSubscriptionResponse extends jspb.Message {
  hasSubscription(): boolean;
  clearSubscription(): void;
  getSubscription(): UserSubscription | undefined;
  setSubscription(value?: UserSubscription): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserSubscriptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserSubscriptionResponse): GetUserSubscriptionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserSubscriptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserSubscriptionResponse;
  static deserializeBinaryFromReader(message: GetUserSubscriptionResponse, reader: jspb.BinaryReader): GetUserSubscriptionResponse;
}

export namespace GetUserSubscriptionResponse {
  export type AsObject = {
    subscription?: UserSubscription.AsObject,
  }
}

export class UpdateUserSubscriptionRequest extends jspb.Message {
  hasSubscription(): boolean;
  clearSubscription(): void;
  getSubscription(): UserSubscription | undefined;
  setSubscription(value?: UserSubscription): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserSubscriptionRequest): UpdateUserSubscriptionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserSubscriptionRequest;
  static deserializeBinaryFromReader(message: UpdateUserSubscriptionRequest, reader: jspb.BinaryReader): UpdateUserSubscriptionRequest;
}

export namespace UpdateUserSubscriptionRequest {
  export type AsObject = {
    subscription?: UserSubscription.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateUserSubscriptionResponse extends jspb.Message {
  hasSubscription(): boolean;
  clearSubscription(): void;
  getSubscription(): UserSubscription | undefined;
  setSubscription(value?: UserSubscription): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserSubscriptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserSubscriptionResponse): UpdateUserSubscriptionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserSubscriptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserSubscriptionResponse;
  static deserializeBinaryFromReader(message: UpdateUserSubscriptionResponse, reader: jspb.BinaryReader): UpdateUserSubscriptionResponse;
}

export namespace UpdateUserSubscriptionResponse {
  export type AsObject = {
    subscription?: UserSubscription.AsObject,
  }
}

export class RemoveUserSubscriptionRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getSubscriptionId(): string;
  setSubscriptionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveUserSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveUserSubscriptionRequest): RemoveUserSubscriptionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveUserSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveUserSubscriptionRequest;
  static deserializeBinaryFromReader(message: RemoveUserSubscriptionRequest, reader: jspb.BinaryReader): RemoveUserSubscriptionRequest;
}

export namespace RemoveUserSubscriptionRequest {
  export type AsObject = {
    userId: string,
    subscriptionId: string,
  }
}

export class RemoveUserSubscriptionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveUserSubscriptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveUserSubscriptionResponse): RemoveUserSubscriptionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveUserSubscriptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveUserSubscriptionResponse;
  static deserializeBinaryFromReader(message: RemoveUserSubscriptionResponse, reader: jspb.BinaryReader): RemoveUserSubscriptionResponse;
}

export namespace RemoveUserSubscriptionResponse {
  export type AsObject = {
  }
}

export class RemoveMyUserSubscriptionRequest extends jspb.Message {
  getSubscriptionId(): string;
  setSubscriptionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveMyUserSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveMyUserSubscriptionRequest): RemoveMyUserSubscriptionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveMyUserSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveMyUserSubscriptionRequest;
  static deserializeBinaryFromReader(message: RemoveMyUserSubscriptionRequest, reader: jspb.BinaryReader): RemoveMyUserSubscriptionRequest;
}

export namespace RemoveMyUserSubscriptionRequest {
  export type AsObject = {
    subscriptionId: string,
  }
}

export class RemoveMyUserSubscriptionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveMyUserSubscriptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveMyUserSubscriptionResponse): RemoveMyUserSubscriptionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveMyUserSubscriptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveMyUserSubscriptionResponse;
  static deserializeBinaryFromReader(message: RemoveMyUserSubscriptionResponse, reader: jspb.BinaryReader): RemoveMyUserSubscriptionResponse;
}

export namespace RemoveMyUserSubscriptionResponse {
  export type AsObject = {
  }
}

export class ListUserSubscriptionsRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserSubscriptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserSubscriptionsRequest): ListUserSubscriptionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUserSubscriptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserSubscriptionsRequest;
  static deserializeBinaryFromReader(message: ListUserSubscriptionsRequest, reader: jspb.BinaryReader): ListUserSubscriptionsRequest;
}

export namespace ListUserSubscriptionsRequest {
  export type AsObject = {
    userId: string,
  }
}

export class ListUserSubscriptionsResponse extends jspb.Message {
  clearSubscriptionsList(): void;
  getSubscriptionsList(): Array<UserSubscription>;
  setSubscriptionsList(value: Array<UserSubscription>): void;
  addSubscriptions(value?: UserSubscription, index?: number): UserSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserSubscriptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserSubscriptionsResponse): ListUserSubscriptionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUserSubscriptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserSubscriptionsResponse;
  static deserializeBinaryFromReader(message: ListUserSubscriptionsResponse, reader: jspb.BinaryReader): ListUserSubscriptionsResponse;
}

export namespace ListUserSubscriptionsResponse {
  export type AsObject = {
    subscriptionsList: Array<UserSubscription.AsObject>,
  }
}

export class ListOrgSubscriptionsRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getEventType(): api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap];
  setEventType(value: api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrgSubscriptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrgSubscriptionsRequest): ListOrgSubscriptionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrgSubscriptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrgSubscriptionsRequest;
  static deserializeBinaryFromReader(message: ListOrgSubscriptionsRequest, reader: jspb.BinaryReader): ListOrgSubscriptionsRequest;
}

export namespace ListOrgSubscriptionsRequest {
  export type AsObject = {
    orgId: string,
    eventType: api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap],
  }
}

export class ListOrgSubscriptionsResponse extends jspb.Message {
  clearSubscriptionsList(): void;
  getSubscriptionsList(): Array<UserSubscription>;
  setSubscriptionsList(value: Array<UserSubscription>): void;
  addSubscriptions(value?: UserSubscription, index?: number): UserSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrgSubscriptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrgSubscriptionsResponse): ListOrgSubscriptionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrgSubscriptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrgSubscriptionsResponse;
  static deserializeBinaryFromReader(message: ListOrgSubscriptionsResponse, reader: jspb.BinaryReader): ListOrgSubscriptionsResponse;
}

export namespace ListOrgSubscriptionsResponse {
  export type AsObject = {
    subscriptionsList: Array<UserSubscription.AsObject>,
  }
}

export class GetSystemEnvironmentDetailsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSystemEnvironmentDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSystemEnvironmentDetailsRequest): GetSystemEnvironmentDetailsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSystemEnvironmentDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSystemEnvironmentDetailsRequest;
  static deserializeBinaryFromReader(message: GetSystemEnvironmentDetailsRequest, reader: jspb.BinaryReader): GetSystemEnvironmentDetailsRequest;
}

export namespace GetSystemEnvironmentDetailsRequest {
  export type AsObject = {
  }
}

export class GetSystemEnvironmentDetailsResponse extends jspb.Message {
  getRegionId(): string;
  setRegionId(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSystemEnvironmentDetailsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSystemEnvironmentDetailsResponse): GetSystemEnvironmentDetailsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSystemEnvironmentDetailsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSystemEnvironmentDetailsResponse;
  static deserializeBinaryFromReader(message: GetSystemEnvironmentDetailsResponse, reader: jspb.BinaryReader): GetSystemEnvironmentDetailsResponse;
}

export namespace GetSystemEnvironmentDetailsResponse {
  export type AsObject = {
    regionId: string,
    clusterId: string,
  }
}

export class CreateDelegatedUserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getUserName(): string;
  setUserName(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  clearGroupsList(): void;
  getGroupsList(): Array<string>;
  setGroupsList(value: Array<string>): void;
  addGroups(value: string, index?: number): string;

  getConnectionId(): string;
  setConnectionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDelegatedUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDelegatedUserRequest): CreateDelegatedUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDelegatedUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDelegatedUserRequest;
  static deserializeBinaryFromReader(message: CreateDelegatedUserRequest, reader: jspb.BinaryReader): CreateDelegatedUserRequest;
}

export namespace CreateDelegatedUserRequest {
  export type AsObject = {
    userId: string,
    orgId: string,
    email: string,
    userName: string,
    firstName: string,
    lastName: string,
    groupsList: Array<string>,
    connectionId: string,
  }
}

export class CreateDelegatedUserResponse extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDelegatedUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDelegatedUserResponse): CreateDelegatedUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDelegatedUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDelegatedUserResponse;
  static deserializeBinaryFromReader(message: CreateDelegatedUserResponse, reader: jspb.BinaryReader): CreateDelegatedUserResponse;
}

export namespace CreateDelegatedUserResponse {
  export type AsObject = {
    userId: string,
  }
}

export class GetUserEmailVerifiedRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserEmailVerifiedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserEmailVerifiedRequest): GetUserEmailVerifiedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserEmailVerifiedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserEmailVerifiedRequest;
  static deserializeBinaryFromReader(message: GetUserEmailVerifiedRequest, reader: jspb.BinaryReader): GetUserEmailVerifiedRequest;
}

export namespace GetUserEmailVerifiedRequest {
  export type AsObject = {
    userId: string,
  }
}

export class GetUserEmailVerifiedResponse extends jspb.Message {
  getVerified(): boolean;
  setVerified(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserEmailVerifiedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserEmailVerifiedResponse): GetUserEmailVerifiedResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserEmailVerifiedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserEmailVerifiedResponse;
  static deserializeBinaryFromReader(message: GetUserEmailVerifiedResponse, reader: jspb.BinaryReader): GetUserEmailVerifiedResponse;
}

export namespace GetUserEmailVerifiedResponse {
  export type AsObject = {
    verified: boolean,
  }
}

export class GetUserEmailVerifiedByOrgIdRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserEmailVerifiedByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserEmailVerifiedByOrgIdRequest): GetUserEmailVerifiedByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserEmailVerifiedByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserEmailVerifiedByOrgIdRequest;
  static deserializeBinaryFromReader(message: GetUserEmailVerifiedByOrgIdRequest, reader: jspb.BinaryReader): GetUserEmailVerifiedByOrgIdRequest;
}

export namespace GetUserEmailVerifiedByOrgIdRequest {
  export type AsObject = {
    userId: string,
    orgId: string,
  }
}

export class GetUserEmailVerifiedByOrgIdResponse extends jspb.Message {
  getVerified(): boolean;
  setVerified(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserEmailVerifiedByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserEmailVerifiedByOrgIdResponse): GetUserEmailVerifiedByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserEmailVerifiedByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserEmailVerifiedByOrgIdResponse;
  static deserializeBinaryFromReader(message: GetUserEmailVerifiedByOrgIdResponse, reader: jspb.BinaryReader): GetUserEmailVerifiedByOrgIdResponse;
}

export namespace GetUserEmailVerifiedByOrgIdResponse {
  export type AsObject = {
    verified: boolean,
  }
}

export class SendUserVerificationEmailByOrgIdRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendUserVerificationEmailByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendUserVerificationEmailByOrgIdRequest): SendUserVerificationEmailByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendUserVerificationEmailByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendUserVerificationEmailByOrgIdRequest;
  static deserializeBinaryFromReader(message: SendUserVerificationEmailByOrgIdRequest, reader: jspb.BinaryReader): SendUserVerificationEmailByOrgIdRequest;
}

export namespace SendUserVerificationEmailByOrgIdRequest {
  export type AsObject = {
    userId: string,
    orgId: string,
  }
}

export class SendUserVerificationEmailByOrgIdResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendUserVerificationEmailByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendUserVerificationEmailByOrgIdResponse): SendUserVerificationEmailByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendUserVerificationEmailByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendUserVerificationEmailByOrgIdResponse;
  static deserializeBinaryFromReader(message: SendUserVerificationEmailByOrgIdResponse, reader: jspb.BinaryReader): SendUserVerificationEmailByOrgIdResponse;
}

export namespace SendUserVerificationEmailByOrgIdResponse {
  export type AsObject = {
  }
}

export class SendUserVerificationEmailRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendUserVerificationEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendUserVerificationEmailRequest): SendUserVerificationEmailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendUserVerificationEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendUserVerificationEmailRequest;
  static deserializeBinaryFromReader(message: SendUserVerificationEmailRequest, reader: jspb.BinaryReader): SendUserVerificationEmailRequest;
}

export namespace SendUserVerificationEmailRequest {
  export type AsObject = {
    userId: string,
  }
}

export class SendUserVerificationEmailResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendUserVerificationEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendUserVerificationEmailResponse): SendUserVerificationEmailResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendUserVerificationEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendUserVerificationEmailResponse;
  static deserializeBinaryFromReader(message: SendUserVerificationEmailResponse, reader: jspb.BinaryReader): SendUserVerificationEmailResponse;
}

export namespace SendUserVerificationEmailResponse {
  export type AsObject = {
  }
}

export class ManualUserEmailVerificationByOrgIdRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualUserEmailVerificationByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ManualUserEmailVerificationByOrgIdRequest): ManualUserEmailVerificationByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManualUserEmailVerificationByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualUserEmailVerificationByOrgIdRequest;
  static deserializeBinaryFromReader(message: ManualUserEmailVerificationByOrgIdRequest, reader: jspb.BinaryReader): ManualUserEmailVerificationByOrgIdRequest;
}

export namespace ManualUserEmailVerificationByOrgIdRequest {
  export type AsObject = {
    userId: string,
    orgId: string,
  }
}

export class ManualUserEmailVerificationByOrgIdResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualUserEmailVerificationByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ManualUserEmailVerificationByOrgIdResponse): ManualUserEmailVerificationByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManualUserEmailVerificationByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualUserEmailVerificationByOrgIdResponse;
  static deserializeBinaryFromReader(message: ManualUserEmailVerificationByOrgIdResponse, reader: jspb.BinaryReader): ManualUserEmailVerificationByOrgIdResponse;
}

export namespace ManualUserEmailVerificationByOrgIdResponse {
  export type AsObject = {
  }
}

export class ManualUserEmailVerificationRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualUserEmailVerificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ManualUserEmailVerificationRequest): ManualUserEmailVerificationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManualUserEmailVerificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualUserEmailVerificationRequest;
  static deserializeBinaryFromReader(message: ManualUserEmailVerificationRequest, reader: jspb.BinaryReader): ManualUserEmailVerificationRequest;
}

export namespace ManualUserEmailVerificationRequest {
  export type AsObject = {
    userId: string,
  }
}

export class ManualUserEmailVerificationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualUserEmailVerificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ManualUserEmailVerificationResponse): ManualUserEmailVerificationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManualUserEmailVerificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualUserEmailVerificationResponse;
  static deserializeBinaryFromReader(message: ManualUserEmailVerificationResponse, reader: jspb.BinaryReader): ManualUserEmailVerificationResponse;
}

export namespace ManualUserEmailVerificationResponse {
  export type AsObject = {
  }
}

export class ListAgentStatisticsTemplatesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentStatisticsTemplatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentStatisticsTemplatesRequest): ListAgentStatisticsTemplatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentStatisticsTemplatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentStatisticsTemplatesRequest;
  static deserializeBinaryFromReader(message: ListAgentStatisticsTemplatesRequest, reader: jspb.BinaryReader): ListAgentStatisticsTemplatesRequest;
}

export namespace ListAgentStatisticsTemplatesRequest {
  export type AsObject = {
  }
}

export class ListAgentStatisticsTemplatesResponse extends jspb.Message {
  clearTemplatesList(): void;
  getTemplatesList(): Array<AgentLoginGuiStatisticsTemplate>;
  setTemplatesList(value: Array<AgentLoginGuiStatisticsTemplate>): void;
  addTemplates(value?: AgentLoginGuiStatisticsTemplate, index?: number): AgentLoginGuiStatisticsTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentStatisticsTemplatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentStatisticsTemplatesResponse): ListAgentStatisticsTemplatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentStatisticsTemplatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentStatisticsTemplatesResponse;
  static deserializeBinaryFromReader(message: ListAgentStatisticsTemplatesResponse, reader: jspb.BinaryReader): ListAgentStatisticsTemplatesResponse;
}

export namespace ListAgentStatisticsTemplatesResponse {
  export type AsObject = {
    templatesList: Array<AgentLoginGuiStatisticsTemplate.AsObject>,
  }
}

export class CreateAgentStatisticsTemplateRequest extends jspb.Message {
  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): AgentLoginGuiStatisticsTemplate | undefined;
  setTemplate(value?: AgentLoginGuiStatisticsTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAgentStatisticsTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAgentStatisticsTemplateRequest): CreateAgentStatisticsTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAgentStatisticsTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAgentStatisticsTemplateRequest;
  static deserializeBinaryFromReader(message: CreateAgentStatisticsTemplateRequest, reader: jspb.BinaryReader): CreateAgentStatisticsTemplateRequest;
}

export namespace CreateAgentStatisticsTemplateRequest {
  export type AsObject = {
    template?: AgentLoginGuiStatisticsTemplate.AsObject,
  }
}

export class CreateAgentStatisticsTemplateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAgentStatisticsTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAgentStatisticsTemplateResponse): CreateAgentStatisticsTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAgentStatisticsTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAgentStatisticsTemplateResponse;
  static deserializeBinaryFromReader(message: CreateAgentStatisticsTemplateResponse, reader: jspb.BinaryReader): CreateAgentStatisticsTemplateResponse;
}

export namespace CreateAgentStatisticsTemplateResponse {
  export type AsObject = {
  }
}

export class UpdateAgentStatisticsTemplateRequest extends jspb.Message {
  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): AgentLoginGuiStatisticsTemplate | undefined;
  setTemplate(value?: AgentLoginGuiStatisticsTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentStatisticsTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentStatisticsTemplateRequest): UpdateAgentStatisticsTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentStatisticsTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentStatisticsTemplateRequest;
  static deserializeBinaryFromReader(message: UpdateAgentStatisticsTemplateRequest, reader: jspb.BinaryReader): UpdateAgentStatisticsTemplateRequest;
}

export namespace UpdateAgentStatisticsTemplateRequest {
  export type AsObject = {
    template?: AgentLoginGuiStatisticsTemplate.AsObject,
  }
}

export class UpdateAgentStatisticsTemplateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentStatisticsTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentStatisticsTemplateResponse): UpdateAgentStatisticsTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentStatisticsTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentStatisticsTemplateResponse;
  static deserializeBinaryFromReader(message: UpdateAgentStatisticsTemplateResponse, reader: jspb.BinaryReader): UpdateAgentStatisticsTemplateResponse;
}

export namespace UpdateAgentStatisticsTemplateResponse {
  export type AsObject = {
  }
}

export class DeleteAgentStatisticsTemplateRequest extends jspb.Message {
  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAgentStatisticsTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAgentStatisticsTemplateRequest): DeleteAgentStatisticsTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAgentStatisticsTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAgentStatisticsTemplateRequest;
  static deserializeBinaryFromReader(message: DeleteAgentStatisticsTemplateRequest, reader: jspb.BinaryReader): DeleteAgentStatisticsTemplateRequest;
}

export namespace DeleteAgentStatisticsTemplateRequest {
  export type AsObject = {
    xmlClientPropertySid: number,
  }
}

export class DeleteAgentStatisticsTemplateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAgentStatisticsTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAgentStatisticsTemplateResponse): DeleteAgentStatisticsTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAgentStatisticsTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAgentStatisticsTemplateResponse;
  static deserializeBinaryFromReader(message: DeleteAgentStatisticsTemplateResponse, reader: jspb.BinaryReader): DeleteAgentStatisticsTemplateResponse;
}

export namespace DeleteAgentStatisticsTemplateResponse {
  export type AsObject = {
  }
}

export class AgentLoginGuiStatisticsTemplate extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): void;

  clearGenericStatisticFormatRuleList(): void;
  getGenericStatisticFormatRuleList(): Array<GenericStatisticFormatRule>;
  setGenericStatisticFormatRuleList(value: Array<GenericStatisticFormatRule>): void;
  addGenericStatisticFormatRule(value?: GenericStatisticFormatRule, index?: number): GenericStatisticFormatRule;

  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  getInclusionType(): string;
  setInclusionType(value: string): void;

  getStatisticTableId(): string;
  setStatisticTableId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentLoginGuiStatisticsTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: AgentLoginGuiStatisticsTemplate): AgentLoginGuiStatisticsTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentLoginGuiStatisticsTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentLoginGuiStatisticsTemplate;
  static deserializeBinaryFromReader(message: AgentLoginGuiStatisticsTemplate, reader: jspb.BinaryReader): AgentLoginGuiStatisticsTemplate;
}

export namespace AgentLoginGuiStatisticsTemplate {
  export type AsObject = {
    description: string,
    genericStatisticFormatRuleList: Array<GenericStatisticFormatRule.AsObject>,
    xmlClientPropertySid: number,
    inclusionType: string,
    statisticTableId: string,
    name: string,
  }
}

export class GenericStatisticFormatRule extends jspb.Message {
  getStatisticId(): string;
  setStatisticId(value: string): void;

  getDatabaseFieldName(): string;
  setDatabaseFieldName(value: string): void;

  getHeaderText(): string;
  setHeaderText(value: string): void;

  getHeaderTooltipText(): string;
  setHeaderTooltipText(value: string): void;

  getSimpleDateFormatString(): string;
  setSimpleDateFormatString(value: string): void;

  getTimezoneIdString(): string;
  setTimezoneIdString(value: string): void;

  getTimeZoneEnum(): api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap];
  setTimeZoneEnum(value: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenericStatisticFormatRule.AsObject;
  static toObject(includeInstance: boolean, msg: GenericStatisticFormatRule): GenericStatisticFormatRule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenericStatisticFormatRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenericStatisticFormatRule;
  static deserializeBinaryFromReader(message: GenericStatisticFormatRule, reader: jspb.BinaryReader): GenericStatisticFormatRule;
}

export namespace GenericStatisticFormatRule {
  export type AsObject = {
    statisticId: string,
    databaseFieldName: string,
    headerText: string,
    headerTooltipText: string,
    simpleDateFormatString: string,
    timezoneIdString: string,
    timeZoneEnum: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap],
  }
}

