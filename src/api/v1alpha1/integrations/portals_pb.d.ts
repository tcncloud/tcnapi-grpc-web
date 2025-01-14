// package: api.v1alpha1.integrations
// file: api/v1alpha1/integrations/portals.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../annotations/authz_pb";
import * as api_commons_integrations_integrations_pb from "../../../api/commons/integrations/integrations_pb";
import * as api_commons_perms_pb from "../../../api/commons/perms_pb";
import * as api_v1alpha1_integrations_service_pb from "../../../api/v1alpha1/integrations/service_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class UpsertPortalConfigReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.PortalConfig | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.PortalConfig): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertPortalConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertPortalConfigReq): UpsertPortalConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertPortalConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertPortalConfigReq;
  static deserializeBinaryFromReader(message: UpsertPortalConfigReq, reader: jspb.BinaryReader): UpsertPortalConfigReq;
}

export namespace UpsertPortalConfigReq {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.PortalConfig.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpsertPortalConfigRes extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.PortalConfigId | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.PortalConfigId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertPortalConfigRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertPortalConfigRes): UpsertPortalConfigRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertPortalConfigRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertPortalConfigRes;
  static deserializeBinaryFromReader(message: UpsertPortalConfigRes, reader: jspb.BinaryReader): UpsertPortalConfigRes;
}

export namespace UpsertPortalConfigRes {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.PortalConfigId.AsObject,
  }
}

export class GetPortalConfigRes extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.PortalConfig | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.PortalConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPortalConfigRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetPortalConfigRes): GetPortalConfigRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPortalConfigRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPortalConfigRes;
  static deserializeBinaryFromReader(message: GetPortalConfigRes, reader: jspb.BinaryReader): GetPortalConfigRes;
}

export namespace GetPortalConfigRes {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.PortalConfig.AsObject,
  }
}

export class DeletePortalConfigRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePortalConfigRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePortalConfigRes): DeletePortalConfigRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePortalConfigRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePortalConfigRes;
  static deserializeBinaryFromReader(message: DeletePortalConfigRes, reader: jspb.BinaryReader): DeletePortalConfigRes;
}

export namespace DeletePortalConfigRes {
  export type AsObject = {
  }
}

export class ListPortalConfigsRes extends jspb.Message {
  clearEntitiesList(): void;
  getEntitiesList(): Array<api_v1alpha1_integrations_service_pb.PortalConfig>;
  setEntitiesList(value: Array<api_v1alpha1_integrations_service_pb.PortalConfig>): void;
  addEntities(value?: api_v1alpha1_integrations_service_pb.PortalConfig, index?: number): api_v1alpha1_integrations_service_pb.PortalConfig;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPortalConfigsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListPortalConfigsRes): ListPortalConfigsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPortalConfigsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPortalConfigsRes;
  static deserializeBinaryFromReader(message: ListPortalConfigsRes, reader: jspb.BinaryReader): ListPortalConfigsRes;
}

export namespace ListPortalConfigsRes {
  export type AsObject = {
    entitiesList: Array<api_v1alpha1_integrations_service_pb.PortalConfig.AsObject>,
    nextPageToken: string,
  }
}

export class UpdatePortalConfigLogoReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.PortalConfig | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.PortalConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePortalConfigLogoReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePortalConfigLogoReq): UpdatePortalConfigLogoReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePortalConfigLogoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePortalConfigLogoReq;
  static deserializeBinaryFromReader(message: UpdatePortalConfigLogoReq, reader: jspb.BinaryReader): UpdatePortalConfigLogoReq;
}

export namespace UpdatePortalConfigLogoReq {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.PortalConfig.AsObject,
  }
}

export class UpdatePortalConfigLogoRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePortalConfigLogoRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePortalConfigLogoRes): UpdatePortalConfigLogoRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePortalConfigLogoRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePortalConfigLogoRes;
  static deserializeBinaryFromReader(message: UpdatePortalConfigLogoRes, reader: jspb.BinaryReader): UpdatePortalConfigLogoRes;
}

export namespace UpdatePortalConfigLogoRes {
  export type AsObject = {
  }
}

export class GetPortalConfigLogoReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.PortalConfigId | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.PortalConfigId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPortalConfigLogoReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetPortalConfigLogoReq): GetPortalConfigLogoReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPortalConfigLogoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPortalConfigLogoReq;
  static deserializeBinaryFromReader(message: GetPortalConfigLogoReq, reader: jspb.BinaryReader): GetPortalConfigLogoReq;
}

export namespace GetPortalConfigLogoReq {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.PortalConfigId.AsObject,
  }
}

export class GetPortalConfigLogoRes extends jspb.Message {
  getEntity(): Uint8Array | string;
  getEntity_asU8(): Uint8Array;
  getEntity_asB64(): string;
  setEntity(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPortalConfigLogoRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetPortalConfigLogoRes): GetPortalConfigLogoRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPortalConfigLogoRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPortalConfigLogoRes;
  static deserializeBinaryFromReader(message: GetPortalConfigLogoRes, reader: jspb.BinaryReader): GetPortalConfigLogoRes;
}

export namespace GetPortalConfigLogoRes {
  export type AsObject = {
    entity: Uint8Array | string,
  }
}

export class UpsertPortalReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.Portal | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.Portal): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertPortalReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertPortalReq): UpsertPortalReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertPortalReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertPortalReq;
  static deserializeBinaryFromReader(message: UpsertPortalReq, reader: jspb.BinaryReader): UpsertPortalReq;
}

export namespace UpsertPortalReq {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.Portal.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpsertPortalRes extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.PortalId | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.PortalId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertPortalRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertPortalRes): UpsertPortalRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertPortalRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertPortalRes;
  static deserializeBinaryFromReader(message: UpsertPortalRes, reader: jspb.BinaryReader): UpsertPortalRes;
}

export namespace UpsertPortalRes {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.PortalId.AsObject,
  }
}

export class GetPortalReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.PortalId | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.PortalId): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPortalReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetPortalReq): GetPortalReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPortalReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPortalReq;
  static deserializeBinaryFromReader(message: GetPortalReq, reader: jspb.BinaryReader): GetPortalReq;
}

export namespace GetPortalReq {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.PortalId.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetPortalRes extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.Portal | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.Portal): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPortalRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetPortalRes): GetPortalRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPortalRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPortalRes;
  static deserializeBinaryFromReader(message: GetPortalRes, reader: jspb.BinaryReader): GetPortalRes;
}

export namespace GetPortalRes {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.Portal.AsObject,
  }
}

export class DeletePortalReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.PortalId | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.PortalId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePortalReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePortalReq): DeletePortalReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePortalReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePortalReq;
  static deserializeBinaryFromReader(message: DeletePortalReq, reader: jspb.BinaryReader): DeletePortalReq;
}

export namespace DeletePortalReq {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.PortalId.AsObject,
  }
}

export class DeletePortalRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePortalRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePortalRes): DeletePortalRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePortalRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePortalRes;
  static deserializeBinaryFromReader(message: DeletePortalRes, reader: jspb.BinaryReader): DeletePortalRes;
}

export namespace DeletePortalRes {
  export type AsObject = {
  }
}

export class ListPortalsReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.PortalId | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.PortalId): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPage(): number;
  setPage(value: number): void;

  clearPtypesList(): void;
  getPtypesList(): Array<api_v1alpha1_integrations_service_pb.PortalType>;
  setPtypesList(value: Array<api_v1alpha1_integrations_service_pb.PortalType>): void;
  addPtypes(value?: api_v1alpha1_integrations_service_pb.PortalType, index?: number): api_v1alpha1_integrations_service_pb.PortalType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPortalsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListPortalsReq): ListPortalsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPortalsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPortalsReq;
  static deserializeBinaryFromReader(message: ListPortalsReq, reader: jspb.BinaryReader): ListPortalsReq;
}

export namespace ListPortalsReq {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.PortalId.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    pageSize: number,
    page: number,
    ptypesList: Array<api_v1alpha1_integrations_service_pb.PortalType.AsObject>,
  }
}

export class ListPortalsRes extends jspb.Message {
  clearEntitiesList(): void;
  getEntitiesList(): Array<api_v1alpha1_integrations_service_pb.Portal>;
  setEntitiesList(value: Array<api_v1alpha1_integrations_service_pb.Portal>): void;
  addEntities(value?: api_v1alpha1_integrations_service_pb.Portal, index?: number): api_v1alpha1_integrations_service_pb.Portal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPortalsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListPortalsRes): ListPortalsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPortalsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPortalsRes;
  static deserializeBinaryFromReader(message: ListPortalsRes, reader: jspb.BinaryReader): ListPortalsRes;
}

export namespace ListPortalsRes {
  export type AsObject = {
    entitiesList: Array<api_v1alpha1_integrations_service_pb.Portal.AsObject>,
  }
}

export class ListDetailedPortalsReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.PortalId | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.PortalId): void;

  hasPortalMask(): boolean;
  clearPortalMask(): void;
  getPortalMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setPortalMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasPortalConfigMask(): boolean;
  clearPortalConfigMask(): void;
  getPortalConfigMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setPortalConfigMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasPluginInstanceMask(): boolean;
  clearPluginInstanceMask(): void;
  getPluginInstanceMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setPluginInstanceMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPage(): number;
  setPage(value: number): void;

  clearPtypesList(): void;
  getPtypesList(): Array<api_v1alpha1_integrations_service_pb.PortalType>;
  setPtypesList(value: Array<api_v1alpha1_integrations_service_pb.PortalType>): void;
  addPtypes(value?: api_v1alpha1_integrations_service_pb.PortalType, index?: number): api_v1alpha1_integrations_service_pb.PortalType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDetailedPortalsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListDetailedPortalsReq): ListDetailedPortalsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDetailedPortalsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDetailedPortalsReq;
  static deserializeBinaryFromReader(message: ListDetailedPortalsReq, reader: jspb.BinaryReader): ListDetailedPortalsReq;
}

export namespace ListDetailedPortalsReq {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.PortalId.AsObject,
    portalMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    portalConfigMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    pluginInstanceMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    pageSize: number,
    page: number,
    ptypesList: Array<api_v1alpha1_integrations_service_pb.PortalType.AsObject>,
  }
}

export class ListDetailedPortalsRes extends jspb.Message {
  clearEntitiesList(): void;
  getEntitiesList(): Array<ListDetailedPortalsRes.Entity>;
  setEntitiesList(value: Array<ListDetailedPortalsRes.Entity>): void;
  addEntities(value?: ListDetailedPortalsRes.Entity, index?: number): ListDetailedPortalsRes.Entity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDetailedPortalsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListDetailedPortalsRes): ListDetailedPortalsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDetailedPortalsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDetailedPortalsRes;
  static deserializeBinaryFromReader(message: ListDetailedPortalsRes, reader: jspb.BinaryReader): ListDetailedPortalsRes;
}

export namespace ListDetailedPortalsRes {
  export type AsObject = {
    entitiesList: Array<ListDetailedPortalsRes.Entity.AsObject>,
  }

  export class Entity extends jspb.Message {
    hasPortal(): boolean;
    clearPortal(): void;
    getPortal(): api_v1alpha1_integrations_service_pb.Portal | undefined;
    setPortal(value?: api_v1alpha1_integrations_service_pb.Portal): void;

    hasPortalConfig(): boolean;
    clearPortalConfig(): void;
    getPortalConfig(): api_v1alpha1_integrations_service_pb.PortalConfig | undefined;
    setPortalConfig(value?: api_v1alpha1_integrations_service_pb.PortalConfig): void;

    clearPluginInstancesList(): void;
    getPluginInstancesList(): Array<api_v1alpha1_integrations_service_pb.PluginInstance>;
    setPluginInstancesList(value: Array<api_v1alpha1_integrations_service_pb.PluginInstance>): void;
    addPluginInstances(value?: api_v1alpha1_integrations_service_pb.PluginInstance, index?: number): api_v1alpha1_integrations_service_pb.PluginInstance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entity.AsObject;
    static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entity;
    static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
  }

  export namespace Entity {
    export type AsObject = {
      portal?: api_v1alpha1_integrations_service_pb.Portal.AsObject,
      portalConfig?: api_v1alpha1_integrations_service_pb.PortalConfig.AsObject,
      pluginInstancesList: Array<api_v1alpha1_integrations_service_pb.PluginInstance.AsObject>,
    }
  }
}

export class GetDetailedPortalReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.PortalId | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.PortalId): void;

  hasPortalMask(): boolean;
  clearPortalMask(): void;
  getPortalMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setPortalMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasPortalConfigMask(): boolean;
  clearPortalConfigMask(): void;
  getPortalConfigMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setPortalConfigMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasPluginInstanceMask(): boolean;
  clearPluginInstanceMask(): void;
  getPluginInstanceMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setPluginInstanceMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDetailedPortalReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetDetailedPortalReq): GetDetailedPortalReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDetailedPortalReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDetailedPortalReq;
  static deserializeBinaryFromReader(message: GetDetailedPortalReq, reader: jspb.BinaryReader): GetDetailedPortalReq;
}

export namespace GetDetailedPortalReq {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.PortalId.AsObject,
    portalMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    portalConfigMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    pluginInstanceMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetDetailedPortalRes extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): GetDetailedPortalRes.Entity | undefined;
  setEntity(value?: GetDetailedPortalRes.Entity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDetailedPortalRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetDetailedPortalRes): GetDetailedPortalRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDetailedPortalRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDetailedPortalRes;
  static deserializeBinaryFromReader(message: GetDetailedPortalRes, reader: jspb.BinaryReader): GetDetailedPortalRes;
}

export namespace GetDetailedPortalRes {
  export type AsObject = {
    entity?: GetDetailedPortalRes.Entity.AsObject,
  }

  export class Entity extends jspb.Message {
    hasPortal(): boolean;
    clearPortal(): void;
    getPortal(): api_v1alpha1_integrations_service_pb.Portal | undefined;
    setPortal(value?: api_v1alpha1_integrations_service_pb.Portal): void;

    hasPortalConfig(): boolean;
    clearPortalConfig(): void;
    getPortalConfig(): api_v1alpha1_integrations_service_pb.PortalConfig | undefined;
    setPortalConfig(value?: api_v1alpha1_integrations_service_pb.PortalConfig): void;

    clearPluginInstancesList(): void;
    getPluginInstancesList(): Array<api_v1alpha1_integrations_service_pb.PluginInstance>;
    setPluginInstancesList(value: Array<api_v1alpha1_integrations_service_pb.PluginInstance>): void;
    addPluginInstances(value?: api_v1alpha1_integrations_service_pb.PluginInstance, index?: number): api_v1alpha1_integrations_service_pb.PluginInstance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entity.AsObject;
    static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entity;
    static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
  }

  export namespace Entity {
    export type AsObject = {
      portal?: api_v1alpha1_integrations_service_pb.Portal.AsObject,
      portalConfig?: api_v1alpha1_integrations_service_pb.PortalConfig.AsObject,
      pluginInstancesList: Array<api_v1alpha1_integrations_service_pb.PluginInstance.AsObject>,
    }
  }
}

export class UpsertPluginInstanceReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.PluginInstance | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.PluginInstance): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertPluginInstanceReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertPluginInstanceReq): UpsertPluginInstanceReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertPluginInstanceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertPluginInstanceReq;
  static deserializeBinaryFromReader(message: UpsertPluginInstanceReq, reader: jspb.BinaryReader): UpsertPluginInstanceReq;
}

export namespace UpsertPluginInstanceReq {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.PluginInstance.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpsertPluginInstanceRes extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.PluginInstanceId | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.PluginInstanceId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertPluginInstanceRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertPluginInstanceRes): UpsertPluginInstanceRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertPluginInstanceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertPluginInstanceRes;
  static deserializeBinaryFromReader(message: UpsertPluginInstanceRes, reader: jspb.BinaryReader): UpsertPluginInstanceRes;
}

export namespace UpsertPluginInstanceRes {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.PluginInstanceId.AsObject,
  }
}

export class GetPluginInstanceReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.PluginInstanceId | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.PluginInstanceId): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPluginInstanceReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetPluginInstanceReq): GetPluginInstanceReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPluginInstanceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPluginInstanceReq;
  static deserializeBinaryFromReader(message: GetPluginInstanceReq, reader: jspb.BinaryReader): GetPluginInstanceReq;
}

export namespace GetPluginInstanceReq {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.PluginInstanceId.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetPluginInstanceRes extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.PluginInstance | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.PluginInstance): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPluginInstanceRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetPluginInstanceRes): GetPluginInstanceRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPluginInstanceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPluginInstanceRes;
  static deserializeBinaryFromReader(message: GetPluginInstanceRes, reader: jspb.BinaryReader): GetPluginInstanceRes;
}

export namespace GetPluginInstanceRes {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.PluginInstance.AsObject,
  }
}

export class DeletePluginInstanceReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.PluginInstanceId | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.PluginInstanceId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePluginInstanceReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePluginInstanceReq): DeletePluginInstanceReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePluginInstanceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePluginInstanceReq;
  static deserializeBinaryFromReader(message: DeletePluginInstanceReq, reader: jspb.BinaryReader): DeletePluginInstanceReq;
}

export namespace DeletePluginInstanceReq {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.PluginInstanceId.AsObject,
  }
}

export class DeletePluginInstanceRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePluginInstanceRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePluginInstanceRes): DeletePluginInstanceRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePluginInstanceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePluginInstanceRes;
  static deserializeBinaryFromReader(message: DeletePluginInstanceRes, reader: jspb.BinaryReader): DeletePluginInstanceRes;
}

export namespace DeletePluginInstanceRes {
  export type AsObject = {
  }
}

export class ClonePluginInstanceReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.PluginInstanceId | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.PluginInstanceId): void;

  getNewPluginName(): string;
  setNewPluginName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClonePluginInstanceReq.AsObject;
  static toObject(includeInstance: boolean, msg: ClonePluginInstanceReq): ClonePluginInstanceReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClonePluginInstanceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClonePluginInstanceReq;
  static deserializeBinaryFromReader(message: ClonePluginInstanceReq, reader: jspb.BinaryReader): ClonePluginInstanceReq;
}

export namespace ClonePluginInstanceReq {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.PluginInstanceId.AsObject,
    newPluginName: string,
  }
}

export class ClonePluginInstanceRes extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.PluginInstanceId | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.PluginInstanceId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClonePluginInstanceRes.AsObject;
  static toObject(includeInstance: boolean, msg: ClonePluginInstanceRes): ClonePluginInstanceRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClonePluginInstanceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClonePluginInstanceRes;
  static deserializeBinaryFromReader(message: ClonePluginInstanceRes, reader: jspb.BinaryReader): ClonePluginInstanceRes;
}

export namespace ClonePluginInstanceRes {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.PluginInstanceId.AsObject,
  }
}

export class ListPluginInstanceReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.PluginInstance | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.PluginInstance): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPage(): number;
  setPage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPluginInstanceReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListPluginInstanceReq): ListPluginInstanceReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPluginInstanceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPluginInstanceReq;
  static deserializeBinaryFromReader(message: ListPluginInstanceReq, reader: jspb.BinaryReader): ListPluginInstanceReq;
}

export namespace ListPluginInstanceReq {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.PluginInstance.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    pageSize: number,
    page: number,
  }
}

export class ListPluginInstanceRes extends jspb.Message {
  clearEntitiesList(): void;
  getEntitiesList(): Array<api_v1alpha1_integrations_service_pb.PluginInstance>;
  setEntitiesList(value: Array<api_v1alpha1_integrations_service_pb.PluginInstance>): void;
  addEntities(value?: api_v1alpha1_integrations_service_pb.PluginInstance, index?: number): api_v1alpha1_integrations_service_pb.PluginInstance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPluginInstanceRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListPluginInstanceRes): ListPluginInstanceRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPluginInstanceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPluginInstanceRes;
  static deserializeBinaryFromReader(message: ListPluginInstanceRes, reader: jspb.BinaryReader): ListPluginInstanceRes;
}

export namespace ListPluginInstanceRes {
  export type AsObject = {
    entitiesList: Array<api_v1alpha1_integrations_service_pb.PluginInstance.AsObject>,
  }
}

export class ListPluginsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPluginsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListPluginsReq): ListPluginsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPluginsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPluginsReq;
  static deserializeBinaryFromReader(message: ListPluginsReq, reader: jspb.BinaryReader): ListPluginsReq;
}

export namespace ListPluginsReq {
  export type AsObject = {
  }
}

export class ListPluginsRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPluginsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListPluginsRes): ListPluginsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPluginsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPluginsRes;
  static deserializeBinaryFromReader(message: ListPluginsRes, reader: jspb.BinaryReader): ListPluginsRes;
}

export namespace ListPluginsRes {
  export type AsObject = {
  }
}

export class ListPortalLinksReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.PortalLinkId | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.PortalLinkId): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPage(): number;
  setPage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPortalLinksReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListPortalLinksReq): ListPortalLinksReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPortalLinksReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPortalLinksReq;
  static deserializeBinaryFromReader(message: ListPortalLinksReq, reader: jspb.BinaryReader): ListPortalLinksReq;
}

export namespace ListPortalLinksReq {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.PortalLinkId.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    pageSize: number,
    page: number,
  }
}

export class ListPortalLinksRes extends jspb.Message {
  clearEntitiesList(): void;
  getEntitiesList(): Array<api_v1alpha1_integrations_service_pb.PortalLink>;
  setEntitiesList(value: Array<api_v1alpha1_integrations_service_pb.PortalLink>): void;
  addEntities(value?: api_v1alpha1_integrations_service_pb.PortalLink, index?: number): api_v1alpha1_integrations_service_pb.PortalLink;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPortalLinksRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListPortalLinksRes): ListPortalLinksRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPortalLinksRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPortalLinksRes;
  static deserializeBinaryFromReader(message: ListPortalLinksRes, reader: jspb.BinaryReader): ListPortalLinksRes;
}

export namespace ListPortalLinksRes {
  export type AsObject = {
    entitiesList: Array<api_v1alpha1_integrations_service_pb.PortalLink.AsObject>,
  }
}

export class GetPortalLinkReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.PortalLinkId | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.PortalLinkId): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPortalLinkReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetPortalLinkReq): GetPortalLinkReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPortalLinkReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPortalLinkReq;
  static deserializeBinaryFromReader(message: GetPortalLinkReq, reader: jspb.BinaryReader): GetPortalLinkReq;
}

export namespace GetPortalLinkReq {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.PortalLinkId.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetPortalLinkRes extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.PortalLink | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.PortalLink): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPortalLinkRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetPortalLinkRes): GetPortalLinkRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPortalLinkRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPortalLinkRes;
  static deserializeBinaryFromReader(message: GetPortalLinkRes, reader: jspb.BinaryReader): GetPortalLinkRes;
}

export namespace GetPortalLinkRes {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.PortalLink.AsObject,
  }
}

export class DeletePortalLinkReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.PortalLinkId | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.PortalLinkId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePortalLinkReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePortalLinkReq): DeletePortalLinkReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePortalLinkReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePortalLinkReq;
  static deserializeBinaryFromReader(message: DeletePortalLinkReq, reader: jspb.BinaryReader): DeletePortalLinkReq;
}

export namespace DeletePortalLinkReq {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.PortalLinkId.AsObject,
  }
}

export class DeletePortalLinkRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePortalLinkRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePortalLinkRes): DeletePortalLinkRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePortalLinkRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePortalLinkRes;
  static deserializeBinaryFromReader(message: DeletePortalLinkRes, reader: jspb.BinaryReader): DeletePortalLinkRes;
}

export namespace DeletePortalLinkRes {
  export type AsObject = {
  }
}

export class CreatePortalLinksReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): api_v1alpha1_integrations_service_pb.PortalId | undefined;
  setEntity(value?: api_v1alpha1_integrations_service_pb.PortalId): void;

  clearLinkDatasList(): void;
  getLinkDatasList(): Array<api_v1alpha1_integrations_service_pb.Task>;
  setLinkDatasList(value: Array<api_v1alpha1_integrations_service_pb.Task>): void;
  addLinkDatas(value?: api_v1alpha1_integrations_service_pb.Task, index?: number): api_v1alpha1_integrations_service_pb.Task;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePortalLinksReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePortalLinksReq): CreatePortalLinksReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePortalLinksReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePortalLinksReq;
  static deserializeBinaryFromReader(message: CreatePortalLinksReq, reader: jspb.BinaryReader): CreatePortalLinksReq;
}

export namespace CreatePortalLinksReq {
  export type AsObject = {
    entity?: api_v1alpha1_integrations_service_pb.PortalId.AsObject,
    linkDatasList: Array<api_v1alpha1_integrations_service_pb.Task.AsObject>,
  }
}

export class CreatePortalLinksRes extends jspb.Message {
  clearUrlsList(): void;
  getUrlsList(): Array<string>;
  setUrlsList(value: Array<string>): void;
  addUrls(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePortalLinksRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePortalLinksRes): CreatePortalLinksRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePortalLinksRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePortalLinksRes;
  static deserializeBinaryFromReader(message: CreatePortalLinksRes, reader: jspb.BinaryReader): CreatePortalLinksRes;
}

export namespace CreatePortalLinksRes {
  export type AsObject = {
    urlsList: Array<string>,
  }
}

export class ListFlowFieldNamesReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): ListFlowFieldNamesReq.Entity | undefined;
  setEntity(value?: ListFlowFieldNamesReq.Entity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFlowFieldNamesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListFlowFieldNamesReq): ListFlowFieldNamesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFlowFieldNamesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFlowFieldNamesReq;
  static deserializeBinaryFromReader(message: ListFlowFieldNamesReq, reader: jspb.BinaryReader): ListFlowFieldNamesReq;
}

export namespace ListFlowFieldNamesReq {
  export type AsObject = {
    entity?: ListFlowFieldNamesReq.Entity.AsObject,
  }

  export class Entity extends jspb.Message {
    hasFlow(): boolean;
    clearFlow(): void;
    getFlow(): api_commons_integrations_integrations_pb.Flow | undefined;
    setFlow(value?: api_commons_integrations_integrations_pb.Flow): void;

    getLoc(): api_commons_integrations_integrations_pb.FlowFieldLocMap[keyof api_commons_integrations_integrations_pb.FlowFieldLocMap];
    setLoc(value: api_commons_integrations_integrations_pb.FlowFieldLocMap[keyof api_commons_integrations_integrations_pb.FlowFieldLocMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entity.AsObject;
    static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entity;
    static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
  }

  export namespace Entity {
    export type AsObject = {
      flow?: api_commons_integrations_integrations_pb.Flow.AsObject,
      loc: api_commons_integrations_integrations_pb.FlowFieldLocMap[keyof api_commons_integrations_integrations_pb.FlowFieldLocMap],
    }
  }
}

export class ListFlowFieldNamesRes extends jspb.Message {
  clearFieldNamesList(): void;
  getFieldNamesList(): Array<string>;
  setFieldNamesList(value: Array<string>): void;
  addFieldNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFlowFieldNamesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListFlowFieldNamesRes): ListFlowFieldNamesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFlowFieldNamesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFlowFieldNamesRes;
  static deserializeBinaryFromReader(message: ListFlowFieldNamesRes, reader: jspb.BinaryReader): ListFlowFieldNamesRes;
}

export namespace ListFlowFieldNamesRes {
  export type AsObject = {
    fieldNamesList: Array<string>,
  }
}

export class ListAvailableVerificationFieldsReq extends jspb.Message {
  hasVerification(): boolean;
  clearVerification(): void;
  getVerification(): api_commons_integrations_integrations_pb.VerificationFlow | undefined;
  setVerification(value?: api_commons_integrations_integrations_pb.VerificationFlow): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAvailableVerificationFieldsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListAvailableVerificationFieldsReq): ListAvailableVerificationFieldsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAvailableVerificationFieldsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAvailableVerificationFieldsReq;
  static deserializeBinaryFromReader(message: ListAvailableVerificationFieldsReq, reader: jspb.BinaryReader): ListAvailableVerificationFieldsReq;
}

export namespace ListAvailableVerificationFieldsReq {
  export type AsObject = {
    verification?: api_commons_integrations_integrations_pb.VerificationFlow.AsObject,
  }
}

export class ListAvailableVerificationFieldsRes extends jspb.Message {
  clearVerificationFieldsList(): void;
  getVerificationFieldsList(): Array<api_commons_integrations_integrations_pb.FieldDefinition>;
  setVerificationFieldsList(value: Array<api_commons_integrations_integrations_pb.FieldDefinition>): void;
  addVerificationFields(value?: api_commons_integrations_integrations_pb.FieldDefinition, index?: number): api_commons_integrations_integrations_pb.FieldDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAvailableVerificationFieldsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListAvailableVerificationFieldsRes): ListAvailableVerificationFieldsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAvailableVerificationFieldsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAvailableVerificationFieldsRes;
  static deserializeBinaryFromReader(message: ListAvailableVerificationFieldsRes, reader: jspb.BinaryReader): ListAvailableVerificationFieldsRes;
}

export namespace ListAvailableVerificationFieldsRes {
  export type AsObject = {
    verificationFieldsList: Array<api_commons_integrations_integrations_pb.FieldDefinition.AsObject>,
  }
}

export class ListAvailablePaymentFieldsReq extends jspb.Message {
  hasPayment(): boolean;
  clearPayment(): void;
  getPayment(): api_commons_integrations_integrations_pb.PaymentFlow | undefined;
  setPayment(value?: api_commons_integrations_integrations_pb.PaymentFlow): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAvailablePaymentFieldsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListAvailablePaymentFieldsReq): ListAvailablePaymentFieldsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAvailablePaymentFieldsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAvailablePaymentFieldsReq;
  static deserializeBinaryFromReader(message: ListAvailablePaymentFieldsReq, reader: jspb.BinaryReader): ListAvailablePaymentFieldsReq;
}

export namespace ListAvailablePaymentFieldsReq {
  export type AsObject = {
    payment?: api_commons_integrations_integrations_pb.PaymentFlow.AsObject,
  }
}

export class ListAvailablePaymentFieldsRes extends jspb.Message {
  clearPaymentFieldsList(): void;
  getPaymentFieldsList(): Array<api_commons_integrations_integrations_pb.FieldDefinition>;
  setPaymentFieldsList(value: Array<api_commons_integrations_integrations_pb.FieldDefinition>): void;
  addPaymentFields(value?: api_commons_integrations_integrations_pb.FieldDefinition, index?: number): api_commons_integrations_integrations_pb.FieldDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAvailablePaymentFieldsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListAvailablePaymentFieldsRes): ListAvailablePaymentFieldsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAvailablePaymentFieldsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAvailablePaymentFieldsRes;
  static deserializeBinaryFromReader(message: ListAvailablePaymentFieldsRes, reader: jspb.BinaryReader): ListAvailablePaymentFieldsRes;
}

export namespace ListAvailablePaymentFieldsRes {
  export type AsObject = {
    paymentFieldsList: Array<api_commons_integrations_integrations_pb.FieldDefinition.AsObject>,
  }
}

export class ListPortalTypesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPortalTypesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListPortalTypesReq): ListPortalTypesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPortalTypesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPortalTypesReq;
  static deserializeBinaryFromReader(message: ListPortalTypesReq, reader: jspb.BinaryReader): ListPortalTypesReq;
}

export namespace ListPortalTypesReq {
  export type AsObject = {
  }
}

export class ListPortalTypesResponse extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<PortalDefinition>;
  setValuesList(value: Array<PortalDefinition>): void;
  addValues(value?: PortalDefinition, index?: number): PortalDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPortalTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPortalTypesResponse): ListPortalTypesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPortalTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPortalTypesResponse;
  static deserializeBinaryFromReader(message: ListPortalTypesResponse, reader: jspb.BinaryReader): ListPortalTypesResponse;
}

export namespace ListPortalTypesResponse {
  export type AsObject = {
    valuesList: Array<PortalDefinition.AsObject>,
  }
}

export class ListPortalWorkflowsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPortalWorkflowsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListPortalWorkflowsReq): ListPortalWorkflowsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPortalWorkflowsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPortalWorkflowsReq;
  static deserializeBinaryFromReader(message: ListPortalWorkflowsReq, reader: jspb.BinaryReader): ListPortalWorkflowsReq;
}

export namespace ListPortalWorkflowsReq {
  export type AsObject = {
  }
}

export class ListPortalWorkflowsResponse extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<WorkflowDefinition>;
  setValuesList(value: Array<WorkflowDefinition>): void;
  addValues(value?: WorkflowDefinition, index?: number): WorkflowDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPortalWorkflowsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPortalWorkflowsResponse): ListPortalWorkflowsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPortalWorkflowsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPortalWorkflowsResponse;
  static deserializeBinaryFromReader(message: ListPortalWorkflowsResponse, reader: jspb.BinaryReader): ListPortalWorkflowsResponse;
}

export namespace ListPortalWorkflowsResponse {
  export type AsObject = {
    valuesList: Array<WorkflowDefinition.AsObject>,
  }
}

export class PortalDefinition extends jspb.Message {
  getDefinitionName(): string;
  setDefinitionName(value: string): void;

  clearWorkflowRequirementsList(): void;
  getWorkflowRequirementsList(): Array<WorkflowRequirement>;
  setWorkflowRequirementsList(value: Array<WorkflowRequirement>): void;
  addWorkflowRequirements(value?: WorkflowRequirement, index?: number): WorkflowRequirement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortalDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: PortalDefinition): PortalDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PortalDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortalDefinition;
  static deserializeBinaryFromReader(message: PortalDefinition, reader: jspb.BinaryReader): PortalDefinition;
}

export namespace PortalDefinition {
  export type AsObject = {
    definitionName: string,
    workflowRequirementsList: Array<WorkflowRequirement.AsObject>,
  }
}

export class WorkflowRequirement extends jspb.Message {
  getMaxChoices(): number;
  setMaxChoices(value: number): void;

  getFlowType(): api_commons_integrations_integrations_pb.FlowTypeMap[keyof api_commons_integrations_integrations_pb.FlowTypeMap];
  setFlowType(value: api_commons_integrations_integrations_pb.FlowTypeMap[keyof api_commons_integrations_integrations_pb.FlowTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowRequirement.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowRequirement): WorkflowRequirement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowRequirement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowRequirement;
  static deserializeBinaryFromReader(message: WorkflowRequirement, reader: jspb.BinaryReader): WorkflowRequirement;
}

export namespace WorkflowRequirement {
  export type AsObject = {
    maxChoices: number,
    flowType: api_commons_integrations_integrations_pb.FlowTypeMap[keyof api_commons_integrations_integrations_pb.FlowTypeMap],
  }
}

export class ListAllActionDefinitionsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllActionDefinitionsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllActionDefinitionsReq): ListAllActionDefinitionsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAllActionDefinitionsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllActionDefinitionsReq;
  static deserializeBinaryFromReader(message: ListAllActionDefinitionsReq, reader: jspb.BinaryReader): ListAllActionDefinitionsReq;
}

export namespace ListAllActionDefinitionsReq {
  export type AsObject = {
  }
}

export class ListAllActionDefinitionsResponse extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<ActionDefinition>;
  setValuesList(value: Array<ActionDefinition>): void;
  addValues(value?: ActionDefinition, index?: number): ActionDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllActionDefinitionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllActionDefinitionsResponse): ListAllActionDefinitionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAllActionDefinitionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllActionDefinitionsResponse;
  static deserializeBinaryFromReader(message: ListAllActionDefinitionsResponse, reader: jspb.BinaryReader): ListAllActionDefinitionsResponse;
}

export namespace ListAllActionDefinitionsResponse {
  export type AsObject = {
    valuesList: Array<ActionDefinition.AsObject>,
  }
}

export class WorkflowDefinition extends jspb.Message {
  getFlowType(): api_commons_integrations_integrations_pb.FlowTypeMap[keyof api_commons_integrations_integrations_pb.FlowTypeMap];
  setFlowType(value: api_commons_integrations_integrations_pb.FlowTypeMap[keyof api_commons_integrations_integrations_pb.FlowTypeMap]): void;

  getDefinitionName(): string;
  setDefinitionName(value: string): void;

  clearActionDefinitionsList(): void;
  getActionDefinitionsList(): Array<ActionDefinition>;
  setActionDefinitionsList(value: Array<ActionDefinition>): void;
  addActionDefinitions(value?: ActionDefinition, index?: number): ActionDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowDefinition): WorkflowDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowDefinition;
  static deserializeBinaryFromReader(message: WorkflowDefinition, reader: jspb.BinaryReader): WorkflowDefinition;
}

export namespace WorkflowDefinition {
  export type AsObject = {
    flowType: api_commons_integrations_integrations_pb.FlowTypeMap[keyof api_commons_integrations_integrations_pb.FlowTypeMap],
    definitionName: string,
    actionDefinitionsList: Array<ActionDefinition.AsObject>,
  }
}

export class ActionDefinition extends jspb.Message {
  getFlowType(): api_commons_integrations_integrations_pb.FlowTypeMap[keyof api_commons_integrations_integrations_pb.FlowTypeMap];
  setFlowType(value: api_commons_integrations_integrations_pb.FlowTypeMap[keyof api_commons_integrations_integrations_pb.FlowTypeMap]): void;

  getDefinitionName(): string;
  setDefinitionName(value: string): void;

  getMethod(): api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap];
  setMethod(value: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap]): void;

  clearReqFieldsList(): void;
  getReqFieldsList(): Array<api_commons_integrations_integrations_pb.FieldDefinition>;
  setReqFieldsList(value: Array<api_commons_integrations_integrations_pb.FieldDefinition>): void;
  addReqFields(value?: api_commons_integrations_integrations_pb.FieldDefinition, index?: number): api_commons_integrations_integrations_pb.FieldDefinition;

  clearResFieldsList(): void;
  getResFieldsList(): Array<api_commons_integrations_integrations_pb.FieldDefinition>;
  setResFieldsList(value: Array<api_commons_integrations_integrations_pb.FieldDefinition>): void;
  addResFields(value?: api_commons_integrations_integrations_pb.FieldDefinition, index?: number): api_commons_integrations_integrations_pb.FieldDefinition;

  clearPluginFieldsList(): void;
  getPluginFieldsList(): Array<api_commons_integrations_integrations_pb.FieldDefinition>;
  setPluginFieldsList(value: Array<api_commons_integrations_integrations_pb.FieldDefinition>): void;
  addPluginFields(value?: api_commons_integrations_integrations_pb.FieldDefinition, index?: number): api_commons_integrations_integrations_pb.FieldDefinition;

  clearLinkFieldsList(): void;
  getLinkFieldsList(): Array<api_commons_integrations_integrations_pb.FieldDefinition>;
  setLinkFieldsList(value: Array<api_commons_integrations_integrations_pb.FieldDefinition>): void;
  addLinkFields(value?: api_commons_integrations_integrations_pb.FieldDefinition, index?: number): api_commons_integrations_integrations_pb.FieldDefinition;

  clearPrevFieldsList(): void;
  getPrevFieldsList(): Array<api_commons_integrations_integrations_pb.FieldDefinition>;
  setPrevFieldsList(value: Array<api_commons_integrations_integrations_pb.FieldDefinition>): void;
  addPrevFields(value?: api_commons_integrations_integrations_pb.FieldDefinition, index?: number): api_commons_integrations_integrations_pb.FieldDefinition;

  clearFormFieldsList(): void;
  getFormFieldsList(): Array<api_commons_integrations_integrations_pb.FieldDefinition>;
  setFormFieldsList(value: Array<api_commons_integrations_integrations_pb.FieldDefinition>): void;
  addFormFields(value?: api_commons_integrations_integrations_pb.FieldDefinition, index?: number): api_commons_integrations_integrations_pb.FieldDefinition;

  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): api_v1alpha1_integrations_service_pb.Template | undefined;
  setTemplate(value?: api_v1alpha1_integrations_service_pb.Template): void;

  clearOptsList(): void;
  getOptsList(): Array<api_commons_integrations_integrations_pb.FieldDefinition>;
  setOptsList(value: Array<api_commons_integrations_integrations_pb.FieldDefinition>): void;
  addOpts(value?: api_commons_integrations_integrations_pb.FieldDefinition, index?: number): api_commons_integrations_integrations_pb.FieldDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: ActionDefinition): ActionDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionDefinition;
  static deserializeBinaryFromReader(message: ActionDefinition, reader: jspb.BinaryReader): ActionDefinition;
}

export namespace ActionDefinition {
  export type AsObject = {
    flowType: api_commons_integrations_integrations_pb.FlowTypeMap[keyof api_commons_integrations_integrations_pb.FlowTypeMap],
    definitionName: string,
    method: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap],
    reqFieldsList: Array<api_commons_integrations_integrations_pb.FieldDefinition.AsObject>,
    resFieldsList: Array<api_commons_integrations_integrations_pb.FieldDefinition.AsObject>,
    pluginFieldsList: Array<api_commons_integrations_integrations_pb.FieldDefinition.AsObject>,
    linkFieldsList: Array<api_commons_integrations_integrations_pb.FieldDefinition.AsObject>,
    prevFieldsList: Array<api_commons_integrations_integrations_pb.FieldDefinition.AsObject>,
    formFieldsList: Array<api_commons_integrations_integrations_pb.FieldDefinition.AsObject>,
    template?: api_v1alpha1_integrations_service_pb.Template.AsObject,
    optsList: Array<api_commons_integrations_integrations_pb.FieldDefinition.AsObject>,
  }
}

export class ListPluginsByMethodReq extends jspb.Message {
  getMethodId(): api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap];
  setMethodId(value: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPluginsByMethodReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListPluginsByMethodReq): ListPluginsByMethodReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPluginsByMethodReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPluginsByMethodReq;
  static deserializeBinaryFromReader(message: ListPluginsByMethodReq, reader: jspb.BinaryReader): ListPluginsByMethodReq;
}

export namespace ListPluginsByMethodReq {
  export type AsObject = {
    methodId: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap],
  }
}

export class ListPluginsByMethodRes extends jspb.Message {
  clearEntitiesList(): void;
  getEntitiesList(): Array<api_v1alpha1_integrations_service_pb.PluginInstance>;
  setEntitiesList(value: Array<api_v1alpha1_integrations_service_pb.PluginInstance>): void;
  addEntities(value?: api_v1alpha1_integrations_service_pb.PluginInstance, index?: number): api_v1alpha1_integrations_service_pb.PluginInstance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPluginsByMethodRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListPluginsByMethodRes): ListPluginsByMethodRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPluginsByMethodRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPluginsByMethodRes;
  static deserializeBinaryFromReader(message: ListPluginsByMethodRes, reader: jspb.BinaryReader): ListPluginsByMethodRes;
}

export namespace ListPluginsByMethodRes {
  export type AsObject = {
    entitiesList: Array<api_v1alpha1_integrations_service_pb.PluginInstance.AsObject>,
  }
}

