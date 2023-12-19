// package: api.v1alpha1.org
// file: api/v1alpha1/org/huntgroup.proto

import * as jspb from "google-protobuf";
import * as api_commons_org_pb from "../../../api/commons/org_pb";
import * as api_commons_org_huntgroup_pb from "../../../api/commons/org/huntgroup_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class GetHuntGroupSettingsRequest extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHuntGroupSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHuntGroupSettingsRequest): GetHuntGroupSettingsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHuntGroupSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHuntGroupSettingsRequest;
  static deserializeBinaryFromReader(message: GetHuntGroupSettingsRequest, reader: jspb.BinaryReader): GetHuntGroupSettingsRequest;
}

export namespace GetHuntGroupSettingsRequest {
  export type AsObject = {
    huntGroupSid: number,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetHuntGroupSettingsResponse extends jspb.Message {
  hasGeneralSettings(): boolean;
  clearGeneralSettings(): void;
  getGeneralSettings(): api_commons_org_huntgroup_pb.GeneralSettings | undefined;
  setGeneralSettings(value?: api_commons_org_huntgroup_pb.GeneralSettings): void;

  hasCommunicationSettings(): boolean;
  clearCommunicationSettings(): void;
  getCommunicationSettings(): api_commons_org_huntgroup_pb.CommunicationSettings | undefined;
  setCommunicationSettings(value?: api_commons_org_huntgroup_pb.CommunicationSettings): void;

  hasCallbackSettings(): boolean;
  clearCallbackSettings(): void;
  getCallbackSettings(): api_commons_org_huntgroup_pb.CallbackSettings | undefined;
  setCallbackSettings(value?: api_commons_org_huntgroup_pb.CallbackSettings): void;

  hasPreviewDialSettings(): boolean;
  clearPreviewDialSettings(): void;
  getPreviewDialSettings(): api_commons_org_huntgroup_pb.PreviewDialSettings | undefined;
  setPreviewDialSettings(value?: api_commons_org_huntgroup_pb.PreviewDialSettings): void;

  hasManualDialSettings(): boolean;
  clearManualDialSettings(): void;
  getManualDialSettings(): api_commons_org_huntgroup_pb.ManualDialSettings | undefined;
  setManualDialSettings(value?: api_commons_org_huntgroup_pb.ManualDialSettings): void;

  hasTransferCallSettings(): boolean;
  clearTransferCallSettings(): void;
  getTransferCallSettings(): api_commons_org_huntgroup_pb.TransferCallSettings | undefined;
  setTransferCallSettings(value?: api_commons_org_huntgroup_pb.TransferCallSettings): void;

  hasNumberHistorySettings(): boolean;
  clearNumberHistorySettings(): void;
  getNumberHistorySettings(): api_commons_org_huntgroup_pb.NumberHistorySettings | undefined;
  setNumberHistorySettings(value?: api_commons_org_huntgroup_pb.NumberHistorySettings): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHuntGroupSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHuntGroupSettingsResponse): GetHuntGroupSettingsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHuntGroupSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHuntGroupSettingsResponse;
  static deserializeBinaryFromReader(message: GetHuntGroupSettingsResponse, reader: jspb.BinaryReader): GetHuntGroupSettingsResponse;
}

export namespace GetHuntGroupSettingsResponse {
  export type AsObject = {
    generalSettings?: api_commons_org_huntgroup_pb.GeneralSettings.AsObject,
    communicationSettings?: api_commons_org_huntgroup_pb.CommunicationSettings.AsObject,
    callbackSettings?: api_commons_org_huntgroup_pb.CallbackSettings.AsObject,
    previewDialSettings?: api_commons_org_huntgroup_pb.PreviewDialSettings.AsObject,
    manualDialSettings?: api_commons_org_huntgroup_pb.ManualDialSettings.AsObject,
    transferCallSettings?: api_commons_org_huntgroup_pb.TransferCallSettings.AsObject,
    numberHistorySettings?: api_commons_org_huntgroup_pb.NumberHistorySettings.AsObject,
  }
}

export class UpdateHuntGroupSettingsRequest extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  hasGeneralSettings(): boolean;
  clearGeneralSettings(): void;
  getGeneralSettings(): api_commons_org_huntgroup_pb.GeneralSettings | undefined;
  setGeneralSettings(value?: api_commons_org_huntgroup_pb.GeneralSettings): void;

  hasCommunicationSettings(): boolean;
  clearCommunicationSettings(): void;
  getCommunicationSettings(): api_commons_org_huntgroup_pb.CommunicationSettings | undefined;
  setCommunicationSettings(value?: api_commons_org_huntgroup_pb.CommunicationSettings): void;

  hasCallbackSettings(): boolean;
  clearCallbackSettings(): void;
  getCallbackSettings(): api_commons_org_huntgroup_pb.CallbackSettings | undefined;
  setCallbackSettings(value?: api_commons_org_huntgroup_pb.CallbackSettings): void;

  hasPreviewDialSettings(): boolean;
  clearPreviewDialSettings(): void;
  getPreviewDialSettings(): api_commons_org_huntgroup_pb.PreviewDialSettings | undefined;
  setPreviewDialSettings(value?: api_commons_org_huntgroup_pb.PreviewDialSettings): void;

  hasManualDialSettings(): boolean;
  clearManualDialSettings(): void;
  getManualDialSettings(): api_commons_org_huntgroup_pb.ManualDialSettings | undefined;
  setManualDialSettings(value?: api_commons_org_huntgroup_pb.ManualDialSettings): void;

  hasTransferCallSettings(): boolean;
  clearTransferCallSettings(): void;
  getTransferCallSettings(): api_commons_org_huntgroup_pb.TransferCallSettings | undefined;
  setTransferCallSettings(value?: api_commons_org_huntgroup_pb.TransferCallSettings): void;

  hasNumberHistorySettings(): boolean;
  clearNumberHistorySettings(): void;
  getNumberHistorySettings(): api_commons_org_huntgroup_pb.NumberHistorySettings | undefined;
  setNumberHistorySettings(value?: api_commons_org_huntgroup_pb.NumberHistorySettings): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateHuntGroupSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateHuntGroupSettingsRequest): UpdateHuntGroupSettingsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateHuntGroupSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateHuntGroupSettingsRequest;
  static deserializeBinaryFromReader(message: UpdateHuntGroupSettingsRequest, reader: jspb.BinaryReader): UpdateHuntGroupSettingsRequest;
}

export namespace UpdateHuntGroupSettingsRequest {
  export type AsObject = {
    huntGroupSid: number,
    generalSettings?: api_commons_org_huntgroup_pb.GeneralSettings.AsObject,
    communicationSettings?: api_commons_org_huntgroup_pb.CommunicationSettings.AsObject,
    callbackSettings?: api_commons_org_huntgroup_pb.CallbackSettings.AsObject,
    previewDialSettings?: api_commons_org_huntgroup_pb.PreviewDialSettings.AsObject,
    manualDialSettings?: api_commons_org_huntgroup_pb.ManualDialSettings.AsObject,
    transferCallSettings?: api_commons_org_huntgroup_pb.TransferCallSettings.AsObject,
    numberHistorySettings?: api_commons_org_huntgroup_pb.NumberHistorySettings.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateHuntGroupSettingsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateHuntGroupSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateHuntGroupSettingsResponse): UpdateHuntGroupSettingsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateHuntGroupSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateHuntGroupSettingsResponse;
  static deserializeBinaryFromReader(message: UpdateHuntGroupSettingsResponse, reader: jspb.BinaryReader): UpdateHuntGroupSettingsResponse;
}

export namespace UpdateHuntGroupSettingsResponse {
  export type AsObject = {
  }
}

export class ListCallerIdBucketsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCallerIdBucketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCallerIdBucketsRequest): ListCallerIdBucketsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCallerIdBucketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCallerIdBucketsRequest;
  static deserializeBinaryFromReader(message: ListCallerIdBucketsRequest, reader: jspb.BinaryReader): ListCallerIdBucketsRequest;
}

export namespace ListCallerIdBucketsRequest {
  export type AsObject = {
  }
}

export class ListCallerIdBucketsResponse extends jspb.Message {
  clearCallerIdBucketDataList(): void;
  getCallerIdBucketDataList(): Array<api_commons_org_huntgroup_pb.CallerIdBucketData>;
  setCallerIdBucketDataList(value: Array<api_commons_org_huntgroup_pb.CallerIdBucketData>): void;
  addCallerIdBucketData(value?: api_commons_org_huntgroup_pb.CallerIdBucketData, index?: number): api_commons_org_huntgroup_pb.CallerIdBucketData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCallerIdBucketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCallerIdBucketsResponse): ListCallerIdBucketsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCallerIdBucketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCallerIdBucketsResponse;
  static deserializeBinaryFromReader(message: ListCallerIdBucketsResponse, reader: jspb.BinaryReader): ListCallerIdBucketsResponse;
}

export namespace ListCallerIdBucketsResponse {
  export type AsObject = {
    callerIdBucketDataList: Array<api_commons_org_huntgroup_pb.CallerIdBucketData.AsObject>,
  }
}

export class GetDataDipTemplateRequest extends jspb.Message {
  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataDipTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataDipTemplateRequest): GetDataDipTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDataDipTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataDipTemplateRequest;
  static deserializeBinaryFromReader(message: GetDataDipTemplateRequest, reader: jspb.BinaryReader): GetDataDipTemplateRequest;
}

export namespace GetDataDipTemplateRequest {
  export type AsObject = {
    xmlClientPropertySid: number,
  }
}

export class GetDataDipTemplateResponse extends jspb.Message {
  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): api_commons_org_huntgroup_pb.DataDipConfig | undefined;
  setTemplate(value?: api_commons_org_huntgroup_pb.DataDipConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataDipTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataDipTemplateResponse): GetDataDipTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDataDipTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataDipTemplateResponse;
  static deserializeBinaryFromReader(message: GetDataDipTemplateResponse, reader: jspb.BinaryReader): GetDataDipTemplateResponse;
}

export namespace GetDataDipTemplateResponse {
  export type AsObject = {
    template?: api_commons_org_huntgroup_pb.DataDipConfig.AsObject,
  }
}

export class ListDataDipTemplatesRequest extends jspb.Message {
  getFilter(): api_commons_org_pb.DataDipTemplateFilterTypeMap[keyof api_commons_org_pb.DataDipTemplateFilterTypeMap];
  setFilter(value: api_commons_org_pb.DataDipTemplateFilterTypeMap[keyof api_commons_org_pb.DataDipTemplateFilterTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataDipTemplatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataDipTemplatesRequest): ListDataDipTemplatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDataDipTemplatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataDipTemplatesRequest;
  static deserializeBinaryFromReader(message: ListDataDipTemplatesRequest, reader: jspb.BinaryReader): ListDataDipTemplatesRequest;
}

export namespace ListDataDipTemplatesRequest {
  export type AsObject = {
    filter: api_commons_org_pb.DataDipTemplateFilterTypeMap[keyof api_commons_org_pb.DataDipTemplateFilterTypeMap],
  }
}

export class ListDataDipTemplatesResponse extends jspb.Message {
  clearTemplatesList(): void;
  getTemplatesList(): Array<api_commons_org_huntgroup_pb.DataDipConfig>;
  setTemplatesList(value: Array<api_commons_org_huntgroup_pb.DataDipConfig>): void;
  addTemplates(value?: api_commons_org_huntgroup_pb.DataDipConfig, index?: number): api_commons_org_huntgroup_pb.DataDipConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataDipTemplatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataDipTemplatesResponse): ListDataDipTemplatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDataDipTemplatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataDipTemplatesResponse;
  static deserializeBinaryFromReader(message: ListDataDipTemplatesResponse, reader: jspb.BinaryReader): ListDataDipTemplatesResponse;
}

export namespace ListDataDipTemplatesResponse {
  export type AsObject = {
    templatesList: Array<api_commons_org_huntgroup_pb.DataDipConfig.AsObject>,
  }
}

export class CreateDataDipTemplateRequest extends jspb.Message {
  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): api_commons_org_huntgroup_pb.DataDipConfig | undefined;
  setTemplate(value?: api_commons_org_huntgroup_pb.DataDipConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataDipTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataDipTemplateRequest): CreateDataDipTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDataDipTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataDipTemplateRequest;
  static deserializeBinaryFromReader(message: CreateDataDipTemplateRequest, reader: jspb.BinaryReader): CreateDataDipTemplateRequest;
}

export namespace CreateDataDipTemplateRequest {
  export type AsObject = {
    template?: api_commons_org_huntgroup_pb.DataDipConfig.AsObject,
  }
}

export class CreateDataDipTemplateResponse extends jspb.Message {
  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataDipTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataDipTemplateResponse): CreateDataDipTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDataDipTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataDipTemplateResponse;
  static deserializeBinaryFromReader(message: CreateDataDipTemplateResponse, reader: jspb.BinaryReader): CreateDataDipTemplateResponse;
}

export namespace CreateDataDipTemplateResponse {
  export type AsObject = {
    xmlClientPropertySid: number,
  }
}

export class UpdateDataDipTemplateRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): api_commons_org_huntgroup_pb.DataDipConfig | undefined;
  setTemplate(value?: api_commons_org_huntgroup_pb.DataDipConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDataDipTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDataDipTemplateRequest): UpdateDataDipTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDataDipTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDataDipTemplateRequest;
  static deserializeBinaryFromReader(message: UpdateDataDipTemplateRequest, reader: jspb.BinaryReader): UpdateDataDipTemplateRequest;
}

export namespace UpdateDataDipTemplateRequest {
  export type AsObject = {
    orgId: string,
    template?: api_commons_org_huntgroup_pb.DataDipConfig.AsObject,
  }
}

export class UpdateDataDipTemplateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDataDipTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDataDipTemplateResponse): UpdateDataDipTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDataDipTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDataDipTemplateResponse;
  static deserializeBinaryFromReader(message: UpdateDataDipTemplateResponse, reader: jspb.BinaryReader): UpdateDataDipTemplateResponse;
}

export namespace UpdateDataDipTemplateResponse {
  export type AsObject = {
  }
}

export class DeleteDataDipTemplateRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDataDipTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDataDipTemplateRequest): DeleteDataDipTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDataDipTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDataDipTemplateRequest;
  static deserializeBinaryFromReader(message: DeleteDataDipTemplateRequest, reader: jspb.BinaryReader): DeleteDataDipTemplateRequest;
}

export namespace DeleteDataDipTemplateRequest {
  export type AsObject = {
    orgId: string,
    xmlClientPropertySid: number,
  }
}

export class DeleteDataDipTemplateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDataDipTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDataDipTemplateResponse): DeleteDataDipTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDataDipTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDataDipTemplateResponse;
  static deserializeBinaryFromReader(message: DeleteDataDipTemplateResponse, reader: jspb.BinaryReader): DeleteDataDipTemplateResponse;
}

export namespace DeleteDataDipTemplateResponse {
  export type AsObject = {
  }
}

export class CopyDataDipTemplateRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  getConfigName(): string;
  setConfigName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyDataDipTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CopyDataDipTemplateRequest): CopyDataDipTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyDataDipTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyDataDipTemplateRequest;
  static deserializeBinaryFromReader(message: CopyDataDipTemplateRequest, reader: jspb.BinaryReader): CopyDataDipTemplateRequest;
}

export namespace CopyDataDipTemplateRequest {
  export type AsObject = {
    orgId: string,
    xmlClientPropertySid: number,
    configName: string,
  }
}

export class CopyDataDipTemplateResponse extends jspb.Message {
  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyDataDipTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CopyDataDipTemplateResponse): CopyDataDipTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyDataDipTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyDataDipTemplateResponse;
  static deserializeBinaryFromReader(message: CopyDataDipTemplateResponse, reader: jspb.BinaryReader): CopyDataDipTemplateResponse;
}

export namespace CopyDataDipTemplateResponse {
  export type AsObject = {
    xmlClientPropertySid: number,
  }
}

export class CopyDataDipTemplateToOrganizationRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  getConfigName(): string;
  setConfigName(value: string): void;

  getDestinationOrgId(): string;
  setDestinationOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyDataDipTemplateToOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CopyDataDipTemplateToOrganizationRequest): CopyDataDipTemplateToOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyDataDipTemplateToOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyDataDipTemplateToOrganizationRequest;
  static deserializeBinaryFromReader(message: CopyDataDipTemplateToOrganizationRequest, reader: jspb.BinaryReader): CopyDataDipTemplateToOrganizationRequest;
}

export namespace CopyDataDipTemplateToOrganizationRequest {
  export type AsObject = {
    orgId: string,
    xmlClientPropertySid: number,
    configName: string,
    destinationOrgId: string,
  }
}

export class CopyDataDipTemplateToOrganizationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyDataDipTemplateToOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CopyDataDipTemplateToOrganizationResponse): CopyDataDipTemplateToOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyDataDipTemplateToOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyDataDipTemplateToOrganizationResponse;
  static deserializeBinaryFromReader(message: CopyDataDipTemplateToOrganizationResponse, reader: jspb.BinaryReader): CopyDataDipTemplateToOrganizationResponse;
}

export namespace CopyDataDipTemplateToOrganizationResponse {
  export type AsObject = {
  }
}

export class ListAgentResponseAutoRulesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentResponseAutoRulesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentResponseAutoRulesRequest): ListAgentResponseAutoRulesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentResponseAutoRulesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentResponseAutoRulesRequest;
  static deserializeBinaryFromReader(message: ListAgentResponseAutoRulesRequest, reader: jspb.BinaryReader): ListAgentResponseAutoRulesRequest;
}

export namespace ListAgentResponseAutoRulesRequest {
  export type AsObject = {
  }
}

export class ListAgentResponseAutoRulesResponse extends jspb.Message {
  clearRulesetsList(): void;
  getRulesetsList(): Array<api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet>;
  setRulesetsList(value: Array<api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet>): void;
  addRulesets(value?: api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet, index?: number): api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentResponseAutoRulesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentResponseAutoRulesResponse): ListAgentResponseAutoRulesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentResponseAutoRulesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentResponseAutoRulesResponse;
  static deserializeBinaryFromReader(message: ListAgentResponseAutoRulesResponse, reader: jspb.BinaryReader): ListAgentResponseAutoRulesResponse;
}

export namespace ListAgentResponseAutoRulesResponse {
  export type AsObject = {
    rulesetsList: Array<api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet.AsObject>,
  }
}

export class CreateAgentResponseAutoRulesRequest extends jspb.Message {
  hasRuleset(): boolean;
  clearRuleset(): void;
  getRuleset(): api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet | undefined;
  setRuleset(value?: api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAgentResponseAutoRulesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAgentResponseAutoRulesRequest): CreateAgentResponseAutoRulesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAgentResponseAutoRulesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAgentResponseAutoRulesRequest;
  static deserializeBinaryFromReader(message: CreateAgentResponseAutoRulesRequest, reader: jspb.BinaryReader): CreateAgentResponseAutoRulesRequest;
}

export namespace CreateAgentResponseAutoRulesRequest {
  export type AsObject = {
    ruleset?: api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet.AsObject,
  }
}

export class CreateAgentResponseAutoRulesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAgentResponseAutoRulesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAgentResponseAutoRulesResponse): CreateAgentResponseAutoRulesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAgentResponseAutoRulesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAgentResponseAutoRulesResponse;
  static deserializeBinaryFromReader(message: CreateAgentResponseAutoRulesResponse, reader: jspb.BinaryReader): CreateAgentResponseAutoRulesResponse;
}

export namespace CreateAgentResponseAutoRulesResponse {
  export type AsObject = {
  }
}

export class UpdateAgentResponseAutoRulesRequest extends jspb.Message {
  getRulesetsid(): number;
  setRulesetsid(value: number): void;

  hasRuleset(): boolean;
  clearRuleset(): void;
  getRuleset(): api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet | undefined;
  setRuleset(value?: api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentResponseAutoRulesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentResponseAutoRulesRequest): UpdateAgentResponseAutoRulesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentResponseAutoRulesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentResponseAutoRulesRequest;
  static deserializeBinaryFromReader(message: UpdateAgentResponseAutoRulesRequest, reader: jspb.BinaryReader): UpdateAgentResponseAutoRulesRequest;
}

export namespace UpdateAgentResponseAutoRulesRequest {
  export type AsObject = {
    rulesetsid: number,
    ruleset?: api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet.AsObject,
  }
}

export class UpdateAgentResponseAutoRulesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentResponseAutoRulesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentResponseAutoRulesResponse): UpdateAgentResponseAutoRulesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentResponseAutoRulesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentResponseAutoRulesResponse;
  static deserializeBinaryFromReader(message: UpdateAgentResponseAutoRulesResponse, reader: jspb.BinaryReader): UpdateAgentResponseAutoRulesResponse;
}

export namespace UpdateAgentResponseAutoRulesResponse {
  export type AsObject = {
  }
}

export class DeleteAgentResponseAutoRulesRequest extends jspb.Message {
  getRulesetsid(): number;
  setRulesetsid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAgentResponseAutoRulesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAgentResponseAutoRulesRequest): DeleteAgentResponseAutoRulesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAgentResponseAutoRulesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAgentResponseAutoRulesRequest;
  static deserializeBinaryFromReader(message: DeleteAgentResponseAutoRulesRequest, reader: jspb.BinaryReader): DeleteAgentResponseAutoRulesRequest;
}

export namespace DeleteAgentResponseAutoRulesRequest {
  export type AsObject = {
    rulesetsid: number,
  }
}

export class DeleteAgentResponseAutoRulesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAgentResponseAutoRulesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAgentResponseAutoRulesResponse): DeleteAgentResponseAutoRulesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAgentResponseAutoRulesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAgentResponseAutoRulesResponse;
  static deserializeBinaryFromReader(message: DeleteAgentResponseAutoRulesResponse, reader: jspb.BinaryReader): DeleteAgentResponseAutoRulesResponse;
}

export namespace DeleteAgentResponseAutoRulesResponse {
  export type AsObject = {
  }
}

export class GetHuntGroupClientInfoDisplayTemplateRequest extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHuntGroupClientInfoDisplayTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHuntGroupClientInfoDisplayTemplateRequest): GetHuntGroupClientInfoDisplayTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHuntGroupClientInfoDisplayTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHuntGroupClientInfoDisplayTemplateRequest;
  static deserializeBinaryFromReader(message: GetHuntGroupClientInfoDisplayTemplateRequest, reader: jspb.BinaryReader): GetHuntGroupClientInfoDisplayTemplateRequest;
}

export namespace GetHuntGroupClientInfoDisplayTemplateRequest {
  export type AsObject = {
    huntGroupSid: number,
  }
}

export class GetHuntGroupClientInfoDisplayTemplateResponse extends jspb.Message {
  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate | undefined;
  setTemplate(value?: api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHuntGroupClientInfoDisplayTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHuntGroupClientInfoDisplayTemplateResponse): GetHuntGroupClientInfoDisplayTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHuntGroupClientInfoDisplayTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHuntGroupClientInfoDisplayTemplateResponse;
  static deserializeBinaryFromReader(message: GetHuntGroupClientInfoDisplayTemplateResponse, reader: jspb.BinaryReader): GetHuntGroupClientInfoDisplayTemplateResponse;
}

export namespace GetHuntGroupClientInfoDisplayTemplateResponse {
  export type AsObject = {
    template?: api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.AsObject,
  }
}

export class CreateHuntGroupClientInfoDisplayTemplateRequest extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate | undefined;
  setTemplate(value?: api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateHuntGroupClientInfoDisplayTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateHuntGroupClientInfoDisplayTemplateRequest): CreateHuntGroupClientInfoDisplayTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateHuntGroupClientInfoDisplayTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateHuntGroupClientInfoDisplayTemplateRequest;
  static deserializeBinaryFromReader(message: CreateHuntGroupClientInfoDisplayTemplateRequest, reader: jspb.BinaryReader): CreateHuntGroupClientInfoDisplayTemplateRequest;
}

export namespace CreateHuntGroupClientInfoDisplayTemplateRequest {
  export type AsObject = {
    huntGroupSid: number,
    template?: api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.AsObject,
  }
}

export class CreateHuntGroupClientInfoDisplayTemplateResponse extends jspb.Message {
  getTemplateSid(): number;
  setTemplateSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateHuntGroupClientInfoDisplayTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateHuntGroupClientInfoDisplayTemplateResponse): CreateHuntGroupClientInfoDisplayTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateHuntGroupClientInfoDisplayTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateHuntGroupClientInfoDisplayTemplateResponse;
  static deserializeBinaryFromReader(message: CreateHuntGroupClientInfoDisplayTemplateResponse, reader: jspb.BinaryReader): CreateHuntGroupClientInfoDisplayTemplateResponse;
}

export namespace CreateHuntGroupClientInfoDisplayTemplateResponse {
  export type AsObject = {
    templateSid: number,
  }
}

export class UpdateHuntGroupClientInfoDisplayTemplateRequest extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate | undefined;
  setTemplate(value?: api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateHuntGroupClientInfoDisplayTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateHuntGroupClientInfoDisplayTemplateRequest): UpdateHuntGroupClientInfoDisplayTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateHuntGroupClientInfoDisplayTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateHuntGroupClientInfoDisplayTemplateRequest;
  static deserializeBinaryFromReader(message: UpdateHuntGroupClientInfoDisplayTemplateRequest, reader: jspb.BinaryReader): UpdateHuntGroupClientInfoDisplayTemplateRequest;
}

export namespace UpdateHuntGroupClientInfoDisplayTemplateRequest {
  export type AsObject = {
    huntGroupSid: number,
    template?: api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.AsObject,
  }
}

export class UpdateHuntGroupClientInfoDisplayTemplateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateHuntGroupClientInfoDisplayTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateHuntGroupClientInfoDisplayTemplateResponse): UpdateHuntGroupClientInfoDisplayTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateHuntGroupClientInfoDisplayTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateHuntGroupClientInfoDisplayTemplateResponse;
  static deserializeBinaryFromReader(message: UpdateHuntGroupClientInfoDisplayTemplateResponse, reader: jspb.BinaryReader): UpdateHuntGroupClientInfoDisplayTemplateResponse;
}

export namespace UpdateHuntGroupClientInfoDisplayTemplateResponse {
  export type AsObject = {
  }
}

export class DeleteHuntGroupClientInfoDisplayTemplateRequest extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getTemplateSid(): number;
  setTemplateSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteHuntGroupClientInfoDisplayTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteHuntGroupClientInfoDisplayTemplateRequest): DeleteHuntGroupClientInfoDisplayTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteHuntGroupClientInfoDisplayTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteHuntGroupClientInfoDisplayTemplateRequest;
  static deserializeBinaryFromReader(message: DeleteHuntGroupClientInfoDisplayTemplateRequest, reader: jspb.BinaryReader): DeleteHuntGroupClientInfoDisplayTemplateRequest;
}

export namespace DeleteHuntGroupClientInfoDisplayTemplateRequest {
  export type AsObject = {
    huntGroupSid: number,
    templateSid: number,
  }
}

export class DeleteHuntGroupClientInfoDisplayTemplateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteHuntGroupClientInfoDisplayTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteHuntGroupClientInfoDisplayTemplateResponse): DeleteHuntGroupClientInfoDisplayTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteHuntGroupClientInfoDisplayTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteHuntGroupClientInfoDisplayTemplateResponse;
  static deserializeBinaryFromReader(message: DeleteHuntGroupClientInfoDisplayTemplateResponse, reader: jspb.BinaryReader): DeleteHuntGroupClientInfoDisplayTemplateResponse;
}

export namespace DeleteHuntGroupClientInfoDisplayTemplateResponse {
  export type AsObject = {
  }
}

export class ListHuntGroupIntegrationLinksRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHuntGroupIntegrationLinksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListHuntGroupIntegrationLinksRequest): ListHuntGroupIntegrationLinksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListHuntGroupIntegrationLinksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHuntGroupIntegrationLinksRequest;
  static deserializeBinaryFromReader(message: ListHuntGroupIntegrationLinksRequest, reader: jspb.BinaryReader): ListHuntGroupIntegrationLinksRequest;
}

export namespace ListHuntGroupIntegrationLinksRequest {
  export type AsObject = {
    orgId: string,
    huntGroupSid: number,
  }
}

export class ListHuntGroupIntegrationLinksResponse extends jspb.Message {
  clearLinksList(): void;
  getLinksList(): Array<api_commons_org_huntgroup_pb.IntegrationLink>;
  setLinksList(value: Array<api_commons_org_huntgroup_pb.IntegrationLink>): void;
  addLinks(value?: api_commons_org_huntgroup_pb.IntegrationLink, index?: number): api_commons_org_huntgroup_pb.IntegrationLink;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHuntGroupIntegrationLinksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListHuntGroupIntegrationLinksResponse): ListHuntGroupIntegrationLinksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListHuntGroupIntegrationLinksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHuntGroupIntegrationLinksResponse;
  static deserializeBinaryFromReader(message: ListHuntGroupIntegrationLinksResponse, reader: jspb.BinaryReader): ListHuntGroupIntegrationLinksResponse;
}

export namespace ListHuntGroupIntegrationLinksResponse {
  export type AsObject = {
    linksList: Array<api_commons_org_huntgroup_pb.IntegrationLink.AsObject>,
  }
}

