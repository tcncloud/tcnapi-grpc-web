// package: services.billing.entities.v1alpha4
// file: services/billing/entities/v1alpha4/rates.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as services_billing_entities_v1alpha4_modules_pb from "../../../../services/billing/entities/v1alpha4/modules_pb";
import * as services_billing_entities_v1alpha4_omni_pb from "../../../../services/billing/entities/v1alpha4/omni_pb";

export class Sku extends jspb.Message {
  getSkuId(): string;
  setSkuId(value: string): void;

  hasProduct(): boolean;
  clearProduct(): void;
  getProduct(): Product | undefined;
  setProduct(value?: Product): void;

  getIsDraft(): boolean;
  setIsDraft(value: boolean): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDeleteTime(): boolean;
  clearDeleteTime(): void;
  getDeleteTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeleteTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sku.AsObject;
  static toObject(includeInstance: boolean, msg: Sku): Sku.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Sku, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sku;
  static deserializeBinaryFromReader(message: Sku, reader: jspb.BinaryReader): Sku;
}

export namespace Sku {
  export type AsObject = {
    skuId: string,
    product?: Product.AsObject,
    isDraft: boolean,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deleteTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class RateDefinition extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  getSkuId(): string;
  setSkuId(value: string): void;

  hasProduct(): boolean;
  clearProduct(): void;
  getProduct(): Product | undefined;
  setProduct(value?: Product): void;

  getIsDraft(): boolean;
  setIsDraft(value: boolean): void;

  getIsOverwrite(): boolean;
  setIsOverwrite(value: boolean): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDeleteTime(): boolean;
  clearDeleteTime(): void;
  getDeleteTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeleteTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RateDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: RateDefinition): RateDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RateDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RateDefinition;
  static deserializeBinaryFromReader(message: RateDefinition, reader: jspb.BinaryReader): RateDefinition;
}

export namespace RateDefinition {
  export type AsObject = {
    rateDefinitionId: string,
    skuId: string,
    product?: Product.AsObject,
    isDraft: boolean,
    isOverwrite: boolean,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deleteTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Product extends jspb.Message {
  getCategory(): CategoryTypeMap[keyof CategoryTypeMap];
  setCategory(value: CategoryTypeMap[keyof CategoryTypeMap]): void;

  getProduct(): ProductTypeMap[keyof ProductTypeMap];
  setProduct(value: ProductTypeMap[keyof ProductTypeMap]): void;

  getFeature(): FeatureTypeMap[keyof FeatureTypeMap];
  setFeature(value: FeatureTypeMap[keyof FeatureTypeMap]): void;

  getItem(): ItemTypeMap[keyof ItemTypeMap];
  setItem(value: ItemTypeMap[keyof ItemTypeMap]): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): ProductConfig | undefined;
  setConfig(value?: ProductConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Product.AsObject;
  static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Product;
  static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
  export type AsObject = {
    category: CategoryTypeMap[keyof CategoryTypeMap],
    product: ProductTypeMap[keyof ProductTypeMap],
    feature: FeatureTypeMap[keyof FeatureTypeMap],
    item: ItemTypeMap[keyof ItemTypeMap],
    config?: ProductConfig.AsObject,
  }
}

export class ProductConfig extends jspb.Message {
  hasCommunicationsOmniChatAgentMessageUnit(): boolean;
  clearCommunicationsOmniChatAgentMessageUnit(): void;
  getCommunicationsOmniChatAgentMessageUnit(): services_billing_entities_v1alpha4_modules_pb.BasicConfig | undefined;
  setCommunicationsOmniChatAgentMessageUnit(value?: services_billing_entities_v1alpha4_modules_pb.BasicConfig): void;

  hasCommunicationsOmniChatAgentAttachment(): boolean;
  clearCommunicationsOmniChatAgentAttachment(): void;
  getCommunicationsOmniChatAgentAttachment(): services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig | undefined;
  setCommunicationsOmniChatAgentAttachment(value?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig): void;

  hasCommunicationsOmniChatAgentAccumulatedAttachments(): boolean;
  clearCommunicationsOmniChatAgentAccumulatedAttachments(): void;
  getCommunicationsOmniChatAgentAccumulatedAttachments(): services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig | undefined;
  setCommunicationsOmniChatAgentAccumulatedAttachments(value?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig): void;

  hasCommunicationsOmniChatCustomerMessageUnit(): boolean;
  clearCommunicationsOmniChatCustomerMessageUnit(): void;
  getCommunicationsOmniChatCustomerMessageUnit(): services_billing_entities_v1alpha4_modules_pb.BasicConfig | undefined;
  setCommunicationsOmniChatCustomerMessageUnit(value?: services_billing_entities_v1alpha4_modules_pb.BasicConfig): void;

  hasCommunicationsOmniChatCustomerAttachment(): boolean;
  clearCommunicationsOmniChatCustomerAttachment(): void;
  getCommunicationsOmniChatCustomerAttachment(): services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig | undefined;
  setCommunicationsOmniChatCustomerAttachment(value?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig): void;

  hasCommunicationsOmniChatCustomerAccumulatedAttachments(): boolean;
  clearCommunicationsOmniChatCustomerAccumulatedAttachments(): void;
  getCommunicationsOmniChatCustomerAccumulatedAttachments(): services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig | undefined;
  setCommunicationsOmniChatCustomerAccumulatedAttachments(value?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig): void;

  hasCommunicationsOmniChatManagerMessageUnit(): boolean;
  clearCommunicationsOmniChatManagerMessageUnit(): void;
  getCommunicationsOmniChatManagerMessageUnit(): services_billing_entities_v1alpha4_modules_pb.BasicConfig | undefined;
  setCommunicationsOmniChatManagerMessageUnit(value?: services_billing_entities_v1alpha4_modules_pb.BasicConfig): void;

  hasCommunicationsOmniChatManagerAttachment(): boolean;
  clearCommunicationsOmniChatManagerAttachment(): void;
  getCommunicationsOmniChatManagerAttachment(): services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig | undefined;
  setCommunicationsOmniChatManagerAttachment(value?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig): void;

  hasCommunicationsOmniChatManagerAccumulatedAttachments(): boolean;
  clearCommunicationsOmniChatManagerAccumulatedAttachments(): void;
  getCommunicationsOmniChatManagerAccumulatedAttachments(): services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig | undefined;
  setCommunicationsOmniChatManagerAccumulatedAttachments(value?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig): void;

  hasCommunicationsOmniChatSystemMessageUnit(): boolean;
  clearCommunicationsOmniChatSystemMessageUnit(): void;
  getCommunicationsOmniChatSystemMessageUnit(): services_billing_entities_v1alpha4_modules_pb.BasicConfig | undefined;
  setCommunicationsOmniChatSystemMessageUnit(value?: services_billing_entities_v1alpha4_modules_pb.BasicConfig): void;

  hasCommunicationsOmniChatSystemAttachment(): boolean;
  clearCommunicationsOmniChatSystemAttachment(): void;
  getCommunicationsOmniChatSystemAttachment(): services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig | undefined;
  setCommunicationsOmniChatSystemAttachment(value?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig): void;

  hasCommunicationsOmniChatSystemAccumulatedAttachments(): boolean;
  clearCommunicationsOmniChatSystemAccumulatedAttachments(): void;
  getCommunicationsOmniChatSystemAccumulatedAttachments(): services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig | undefined;
  setCommunicationsOmniChatSystemAccumulatedAttachments(value?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig): void;

  hasCommunicationsOmniEmailAgentMessageUnit(): boolean;
  clearCommunicationsOmniEmailAgentMessageUnit(): void;
  getCommunicationsOmniEmailAgentMessageUnit(): services_billing_entities_v1alpha4_modules_pb.BasicConfig | undefined;
  setCommunicationsOmniEmailAgentMessageUnit(value?: services_billing_entities_v1alpha4_modules_pb.BasicConfig): void;

  hasCommunicationsOmniEmailAgentSize(): boolean;
  clearCommunicationsOmniEmailAgentSize(): void;
  getCommunicationsOmniEmailAgentSize(): services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig | undefined;
  setCommunicationsOmniEmailAgentSize(value?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig): void;

  hasCommunicationsOmniEmailAgentAccumulatedSize(): boolean;
  clearCommunicationsOmniEmailAgentAccumulatedSize(): void;
  getCommunicationsOmniEmailAgentAccumulatedSize(): services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig | undefined;
  setCommunicationsOmniEmailAgentAccumulatedSize(value?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig): void;

  hasCommunicationsOmniEmailCustomerMessageUnit(): boolean;
  clearCommunicationsOmniEmailCustomerMessageUnit(): void;
  getCommunicationsOmniEmailCustomerMessageUnit(): services_billing_entities_v1alpha4_modules_pb.BasicConfig | undefined;
  setCommunicationsOmniEmailCustomerMessageUnit(value?: services_billing_entities_v1alpha4_modules_pb.BasicConfig): void;

  hasCommunicationsOmniEmailCustomerSize(): boolean;
  clearCommunicationsOmniEmailCustomerSize(): void;
  getCommunicationsOmniEmailCustomerSize(): services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig | undefined;
  setCommunicationsOmniEmailCustomerSize(value?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig): void;

  hasCommunicationsOmniEmailCustomerAccumulatedSize(): boolean;
  clearCommunicationsOmniEmailCustomerAccumulatedSize(): void;
  getCommunicationsOmniEmailCustomerAccumulatedSize(): services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig | undefined;
  setCommunicationsOmniEmailCustomerAccumulatedSize(value?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig): void;

  hasCommunicationsOmniEmailManagerMessageUnit(): boolean;
  clearCommunicationsOmniEmailManagerMessageUnit(): void;
  getCommunicationsOmniEmailManagerMessageUnit(): services_billing_entities_v1alpha4_modules_pb.BasicConfig | undefined;
  setCommunicationsOmniEmailManagerMessageUnit(value?: services_billing_entities_v1alpha4_modules_pb.BasicConfig): void;

  hasCommunicationsOmniEmailManagerSize(): boolean;
  clearCommunicationsOmniEmailManagerSize(): void;
  getCommunicationsOmniEmailManagerSize(): services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig | undefined;
  setCommunicationsOmniEmailManagerSize(value?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig): void;

  hasCommunicationsOmniEmailManagerAccumulatedSize(): boolean;
  clearCommunicationsOmniEmailManagerAccumulatedSize(): void;
  getCommunicationsOmniEmailManagerAccumulatedSize(): services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig | undefined;
  setCommunicationsOmniEmailManagerAccumulatedSize(value?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig): void;

  hasCommunicationsOmniEmailSystemMessageUnit(): boolean;
  clearCommunicationsOmniEmailSystemMessageUnit(): void;
  getCommunicationsOmniEmailSystemMessageUnit(): services_billing_entities_v1alpha4_modules_pb.BasicConfig | undefined;
  setCommunicationsOmniEmailSystemMessageUnit(value?: services_billing_entities_v1alpha4_modules_pb.BasicConfig): void;

  hasCommunicationsOmniEmailSystemSize(): boolean;
  clearCommunicationsOmniEmailSystemSize(): void;
  getCommunicationsOmniEmailSystemSize(): services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig | undefined;
  setCommunicationsOmniEmailSystemSize(value?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig): void;

  hasCommunicationsOmniEmailSystemAccumulatedSize(): boolean;
  clearCommunicationsOmniEmailSystemAccumulatedSize(): void;
  getCommunicationsOmniEmailSystemAccumulatedSize(): services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig | undefined;
  setCommunicationsOmniEmailSystemAccumulatedSize(value?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig): void;

  hasCommunicationsOmniSmsAgentMessageUnit(): boolean;
  clearCommunicationsOmniSmsAgentMessageUnit(): void;
  getCommunicationsOmniSmsAgentMessageUnit(): services_billing_entities_v1alpha4_omni_pb.OmniSmsConfig | undefined;
  setCommunicationsOmniSmsAgentMessageUnit(value?: services_billing_entities_v1alpha4_omni_pb.OmniSmsConfig): void;

  hasCommunicationsOmniSmsAgentAttatchment(): boolean;
  clearCommunicationsOmniSmsAgentAttatchment(): void;
  getCommunicationsOmniSmsAgentAttatchment(): services_billing_entities_v1alpha4_omni_pb.OmniSmsUnitConfig | undefined;
  setCommunicationsOmniSmsAgentAttatchment(value?: services_billing_entities_v1alpha4_omni_pb.OmniSmsUnitConfig): void;

  hasCommunicationsOmniSmsAgentAccumulatedAttatchments(): boolean;
  clearCommunicationsOmniSmsAgentAccumulatedAttatchments(): void;
  getCommunicationsOmniSmsAgentAccumulatedAttatchments(): services_billing_entities_v1alpha4_omni_pb.OmniSmsUnitConfig | undefined;
  setCommunicationsOmniSmsAgentAccumulatedAttatchments(value?: services_billing_entities_v1alpha4_omni_pb.OmniSmsUnitConfig): void;

  hasCommunicationsOmniSmsCustomerMessageUnit(): boolean;
  clearCommunicationsOmniSmsCustomerMessageUnit(): void;
  getCommunicationsOmniSmsCustomerMessageUnit(): services_billing_entities_v1alpha4_omni_pb.OmniSmsConfig | undefined;
  setCommunicationsOmniSmsCustomerMessageUnit(value?: services_billing_entities_v1alpha4_omni_pb.OmniSmsConfig): void;

  hasCommunicationsOmniSmsCustomerAttatchment(): boolean;
  clearCommunicationsOmniSmsCustomerAttatchment(): void;
  getCommunicationsOmniSmsCustomerAttatchment(): services_billing_entities_v1alpha4_omni_pb.OmniSmsUnitConfig | undefined;
  setCommunicationsOmniSmsCustomerAttatchment(value?: services_billing_entities_v1alpha4_omni_pb.OmniSmsUnitConfig): void;

  hasCommunicationsOmniSmsCustomerAccumulatedAttatchments(): boolean;
  clearCommunicationsOmniSmsCustomerAccumulatedAttatchments(): void;
  getCommunicationsOmniSmsCustomerAccumulatedAttatchments(): services_billing_entities_v1alpha4_omni_pb.OmniSmsUnitConfig | undefined;
  setCommunicationsOmniSmsCustomerAccumulatedAttatchments(value?: services_billing_entities_v1alpha4_omni_pb.OmniSmsUnitConfig): void;

  hasCommunicationsOmniSmsManagerMessageUnit(): boolean;
  clearCommunicationsOmniSmsManagerMessageUnit(): void;
  getCommunicationsOmniSmsManagerMessageUnit(): services_billing_entities_v1alpha4_omni_pb.OmniSmsConfig | undefined;
  setCommunicationsOmniSmsManagerMessageUnit(value?: services_billing_entities_v1alpha4_omni_pb.OmniSmsConfig): void;

  hasCommunicationsOmniSmsManagerAttatchment(): boolean;
  clearCommunicationsOmniSmsManagerAttatchment(): void;
  getCommunicationsOmniSmsManagerAttatchment(): services_billing_entities_v1alpha4_omni_pb.OmniSmsUnitConfig | undefined;
  setCommunicationsOmniSmsManagerAttatchment(value?: services_billing_entities_v1alpha4_omni_pb.OmniSmsUnitConfig): void;

  hasCommunicationsOmniSmsManagerAccumulatedAttatchments(): boolean;
  clearCommunicationsOmniSmsManagerAccumulatedAttatchments(): void;
  getCommunicationsOmniSmsManagerAccumulatedAttatchments(): services_billing_entities_v1alpha4_omni_pb.OmniSmsUnitConfig | undefined;
  setCommunicationsOmniSmsManagerAccumulatedAttatchments(value?: services_billing_entities_v1alpha4_omni_pb.OmniSmsUnitConfig): void;

  hasCommunicationsOmniSmsSystemMessageUnit(): boolean;
  clearCommunicationsOmniSmsSystemMessageUnit(): void;
  getCommunicationsOmniSmsSystemMessageUnit(): services_billing_entities_v1alpha4_omni_pb.OmniSmsConfig | undefined;
  setCommunicationsOmniSmsSystemMessageUnit(value?: services_billing_entities_v1alpha4_omni_pb.OmniSmsConfig): void;

  hasCommunicationsOmniSmsSystemAttatchment(): boolean;
  clearCommunicationsOmniSmsSystemAttatchment(): void;
  getCommunicationsOmniSmsSystemAttatchment(): services_billing_entities_v1alpha4_omni_pb.OmniSmsUnitConfig | undefined;
  setCommunicationsOmniSmsSystemAttatchment(value?: services_billing_entities_v1alpha4_omni_pb.OmniSmsUnitConfig): void;

  hasCommunicationsOmniSmsSystemAccumulatedAttatchments(): boolean;
  clearCommunicationsOmniSmsSystemAccumulatedAttatchments(): void;
  getCommunicationsOmniSmsSystemAccumulatedAttatchments(): services_billing_entities_v1alpha4_omni_pb.OmniSmsUnitConfig | undefined;
  setCommunicationsOmniSmsSystemAccumulatedAttatchments(value?: services_billing_entities_v1alpha4_omni_pb.OmniSmsUnitConfig): void;

  hasCommunicationsOmniAgentSeats(): boolean;
  clearCommunicationsOmniAgentSeats(): void;
  getCommunicationsOmniAgentSeats(): services_billing_entities_v1alpha4_modules_pb.BasicConfig | undefined;
  setCommunicationsOmniAgentSeats(value?: services_billing_entities_v1alpha4_modules_pb.BasicConfig): void;

  hasCommunicationsOmniResourcesConnectedInboxCreated(): boolean;
  clearCommunicationsOmniResourcesConnectedInboxCreated(): void;
  getCommunicationsOmniResourcesConnectedInboxCreated(): services_billing_entities_v1alpha4_modules_pb.BasicConfig | undefined;
  setCommunicationsOmniResourcesConnectedInboxCreated(value?: services_billing_entities_v1alpha4_modules_pb.BasicConfig): void;

  hasCommunicationsOmniResourcesConnectedInboxPoll(): boolean;
  clearCommunicationsOmniResourcesConnectedInboxPoll(): void;
  getCommunicationsOmniResourcesConnectedInboxPoll(): services_billing_entities_v1alpha4_modules_pb.BasicConfig | undefined;
  setCommunicationsOmniResourcesConnectedInboxPoll(value?: services_billing_entities_v1alpha4_modules_pb.BasicConfig): void;

  hasDataManagementComplianceComplianceRndQuery(): boolean;
  clearDataManagementComplianceComplianceRndQuery(): void;
  getDataManagementComplianceComplianceRndQuery(): services_billing_entities_v1alpha4_modules_pb.BasicConfig | undefined;
  setDataManagementComplianceComplianceRndQuery(value?: services_billing_entities_v1alpha4_modules_pb.BasicConfig): void;

  hasDataManagementComplianceComplianceRndQueryCached(): boolean;
  clearDataManagementComplianceComplianceRndQueryCached(): void;
  getDataManagementComplianceComplianceRndQueryCached(): services_billing_entities_v1alpha4_modules_pb.BasicConfig | undefined;
  setDataManagementComplianceComplianceRndQueryCached(value?: services_billing_entities_v1alpha4_modules_pb.BasicConfig): void;

  getConfigCase(): ProductConfig.ConfigCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ProductConfig): ProductConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductConfig;
  static deserializeBinaryFromReader(message: ProductConfig, reader: jspb.BinaryReader): ProductConfig;
}

export namespace ProductConfig {
  export type AsObject = {
    communicationsOmniChatAgentMessageUnit?: services_billing_entities_v1alpha4_modules_pb.BasicConfig.AsObject,
    communicationsOmniChatAgentAttachment?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig.AsObject,
    communicationsOmniChatAgentAccumulatedAttachments?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig.AsObject,
    communicationsOmniChatCustomerMessageUnit?: services_billing_entities_v1alpha4_modules_pb.BasicConfig.AsObject,
    communicationsOmniChatCustomerAttachment?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig.AsObject,
    communicationsOmniChatCustomerAccumulatedAttachments?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig.AsObject,
    communicationsOmniChatManagerMessageUnit?: services_billing_entities_v1alpha4_modules_pb.BasicConfig.AsObject,
    communicationsOmniChatManagerAttachment?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig.AsObject,
    communicationsOmniChatManagerAccumulatedAttachments?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig.AsObject,
    communicationsOmniChatSystemMessageUnit?: services_billing_entities_v1alpha4_modules_pb.BasicConfig.AsObject,
    communicationsOmniChatSystemAttachment?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig.AsObject,
    communicationsOmniChatSystemAccumulatedAttachments?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig.AsObject,
    communicationsOmniEmailAgentMessageUnit?: services_billing_entities_v1alpha4_modules_pb.BasicConfig.AsObject,
    communicationsOmniEmailAgentSize?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig.AsObject,
    communicationsOmniEmailAgentAccumulatedSize?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig.AsObject,
    communicationsOmniEmailCustomerMessageUnit?: services_billing_entities_v1alpha4_modules_pb.BasicConfig.AsObject,
    communicationsOmniEmailCustomerSize?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig.AsObject,
    communicationsOmniEmailCustomerAccumulatedSize?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig.AsObject,
    communicationsOmniEmailManagerMessageUnit?: services_billing_entities_v1alpha4_modules_pb.BasicConfig.AsObject,
    communicationsOmniEmailManagerSize?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig.AsObject,
    communicationsOmniEmailManagerAccumulatedSize?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig.AsObject,
    communicationsOmniEmailSystemMessageUnit?: services_billing_entities_v1alpha4_modules_pb.BasicConfig.AsObject,
    communicationsOmniEmailSystemSize?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig.AsObject,
    communicationsOmniEmailSystemAccumulatedSize?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig.AsObject,
    communicationsOmniSmsAgentMessageUnit?: services_billing_entities_v1alpha4_omni_pb.OmniSmsConfig.AsObject,
    communicationsOmniSmsAgentAttatchment?: services_billing_entities_v1alpha4_omni_pb.OmniSmsUnitConfig.AsObject,
    communicationsOmniSmsAgentAccumulatedAttatchments?: services_billing_entities_v1alpha4_omni_pb.OmniSmsUnitConfig.AsObject,
    communicationsOmniSmsCustomerMessageUnit?: services_billing_entities_v1alpha4_omni_pb.OmniSmsConfig.AsObject,
    communicationsOmniSmsCustomerAttatchment?: services_billing_entities_v1alpha4_omni_pb.OmniSmsUnitConfig.AsObject,
    communicationsOmniSmsCustomerAccumulatedAttatchments?: services_billing_entities_v1alpha4_omni_pb.OmniSmsUnitConfig.AsObject,
    communicationsOmniSmsManagerMessageUnit?: services_billing_entities_v1alpha4_omni_pb.OmniSmsConfig.AsObject,
    communicationsOmniSmsManagerAttatchment?: services_billing_entities_v1alpha4_omni_pb.OmniSmsUnitConfig.AsObject,
    communicationsOmniSmsManagerAccumulatedAttatchments?: services_billing_entities_v1alpha4_omni_pb.OmniSmsUnitConfig.AsObject,
    communicationsOmniSmsSystemMessageUnit?: services_billing_entities_v1alpha4_omni_pb.OmniSmsConfig.AsObject,
    communicationsOmniSmsSystemAttatchment?: services_billing_entities_v1alpha4_omni_pb.OmniSmsUnitConfig.AsObject,
    communicationsOmniSmsSystemAccumulatedAttatchments?: services_billing_entities_v1alpha4_omni_pb.OmniSmsUnitConfig.AsObject,
    communicationsOmniAgentSeats?: services_billing_entities_v1alpha4_modules_pb.BasicConfig.AsObject,
    communicationsOmniResourcesConnectedInboxCreated?: services_billing_entities_v1alpha4_modules_pb.BasicConfig.AsObject,
    communicationsOmniResourcesConnectedInboxPoll?: services_billing_entities_v1alpha4_modules_pb.BasicConfig.AsObject,
    dataManagementComplianceComplianceRndQuery?: services_billing_entities_v1alpha4_modules_pb.BasicConfig.AsObject,
    dataManagementComplianceComplianceRndQueryCached?: services_billing_entities_v1alpha4_modules_pb.BasicConfig.AsObject,
  }

  export enum ConfigCase {
    CONFIG_NOT_SET = 0,
    COMMUNICATIONS_OMNI_CHAT_AGENT_MESSAGE_UNIT = 65536,
    COMMUNICATIONS_OMNI_CHAT_AGENT_ATTACHMENT = 65537,
    COMMUNICATIONS_OMNI_CHAT_AGENT_ACCUMULATED_ATTACHMENTS = 65538,
    COMMUNICATIONS_OMNI_CHAT_CUSTOMER_MESSAGE_UNIT = 65552,
    COMMUNICATIONS_OMNI_CHAT_CUSTOMER_ATTACHMENT = 65553,
    COMMUNICATIONS_OMNI_CHAT_CUSTOMER_ACCUMULATED_ATTACHMENTS = 65554,
    COMMUNICATIONS_OMNI_CHAT_MANAGER_MESSAGE_UNIT = 65568,
    COMMUNICATIONS_OMNI_CHAT_MANAGER_ATTACHMENT = 65569,
    COMMUNICATIONS_OMNI_CHAT_MANAGER_ACCUMULATED_ATTACHMENTS = 65570,
    COMMUNICATIONS_OMNI_CHAT_SYSTEM_MESSAGE_UNIT = 65584,
    COMMUNICATIONS_OMNI_CHAT_SYSTEM_ATTACHMENT = 65585,
    COMMUNICATIONS_OMNI_CHAT_SYSTEM_ACCUMULATED_ATTACHMENTS = 65586,
    COMMUNICATIONS_OMNI_EMAIL_AGENT_MESSAGE_UNIT = 65792,
    COMMUNICATIONS_OMNI_EMAIL_AGENT_SIZE = 65793,
    COMMUNICATIONS_OMNI_EMAIL_AGENT_ACCUMULATED_SIZE = 65794,
    COMMUNICATIONS_OMNI_EMAIL_CUSTOMER_MESSAGE_UNIT = 65808,
    COMMUNICATIONS_OMNI_EMAIL_CUSTOMER_SIZE = 65809,
    COMMUNICATIONS_OMNI_EMAIL_CUSTOMER_ACCUMULATED_SIZE = 65810,
    COMMUNICATIONS_OMNI_EMAIL_MANAGER_MESSAGE_UNIT = 65824,
    COMMUNICATIONS_OMNI_EMAIL_MANAGER_SIZE = 65825,
    COMMUNICATIONS_OMNI_EMAIL_MANAGER_ACCUMULATED_SIZE = 65826,
    COMMUNICATIONS_OMNI_EMAIL_SYSTEM_MESSAGE_UNIT = 65840,
    COMMUNICATIONS_OMNI_EMAIL_SYSTEM_SIZE = 65841,
    COMMUNICATIONS_OMNI_EMAIL_SYSTEM_ACCUMULATED_SIZE = 65842,
    COMMUNICATIONS_OMNI_SMS_AGENT_MESSAGE_UNIT = 66048,
    COMMUNICATIONS_OMNI_SMS_AGENT_ATTATCHMENT = 66049,
    COMMUNICATIONS_OMNI_SMS_AGENT_ACCUMULATED_ATTATCHMENTS = 66050,
    COMMUNICATIONS_OMNI_SMS_CUSTOMER_MESSAGE_UNIT = 66064,
    COMMUNICATIONS_OMNI_SMS_CUSTOMER_ATTATCHMENT = 66065,
    COMMUNICATIONS_OMNI_SMS_CUSTOMER_ACCUMULATED_ATTATCHMENTS = 66066,
    COMMUNICATIONS_OMNI_SMS_MANAGER_MESSAGE_UNIT = 66080,
    COMMUNICATIONS_OMNI_SMS_MANAGER_ATTATCHMENT = 66081,
    COMMUNICATIONS_OMNI_SMS_MANAGER_ACCUMULATED_ATTATCHMENTS = 66082,
    COMMUNICATIONS_OMNI_SMS_SYSTEM_MESSAGE_UNIT = 66096,
    COMMUNICATIONS_OMNI_SMS_SYSTEM_ATTATCHMENT = 66097,
    COMMUNICATIONS_OMNI_SMS_SYSTEM_ACCUMULATED_ATTATCHMENTS = 66098,
    COMMUNICATIONS_OMNI_AGENT_SEATS = 66304,
    COMMUNICATIONS_OMNI_RESOURCES_CONNECTED_INBOX_CREATED = 66560,
    COMMUNICATIONS_OMNI_RESOURCES_CONNECTED_INBOX_POLL = 66561,
    DATA_MANAGEMENT_COMPLIANCE_COMPLIANCE_RND_QUERY = 131072,
    DATA_MANAGEMENT_COMPLIANCE_COMPLIANCE_RND_QUERY_CACHED = 131073,
  }
}

export interface CategoryTypeMap {
  CATEGORY_TYPE_UNSPECIFIED: 0;
  CATEGORY_TYPE_COMMUNICATIONS: 1;
  CATEGORY_TYPE_DATA_MANAGEMENT: 2;
}

export const CategoryType: CategoryTypeMap;

export interface ProductTypeMap {
  PRODUCT_TYPE_UNSPECIFIED: 0;
  PRODUCT_TYPE_OMNICHANNEL: 256;
  PRODUCT_TYPE_COMPLIANCE: 512;
}

export const ProductType: ProductTypeMap;

export interface FeatureTypeMap {
  FEATURE_TYPE_UNSPECIFIED: 0;
  FEATURE_TYPE_OMNI_CHAT: 4096;
  FEATURE_TYPE_OMNI_EMAIL: 4112;
  FEATURE_TYPE_OMNI_SMS: 4128;
  FEATURE_TYPE_OMNI_AGENT: 4144;
  FEATURE_TYPE_OMNI_RESOURCES: 4160;
  FEATURE_TYPE_COMPLIANCE: 8192;
}

export const FeatureType: FeatureTypeMap;

export interface ItemTypeMap {
  ITEM_TYPE_UNSPECIFIED: 0;
  ITEM_TYPE_OMNI_CHAT_AGENT_MESSAGE_UNIT: 65536;
  ITEM_TYPE_OMNI_CHAT_AGENT_ATTACHMENT: 65537;
  ITEM_TYPE_OMNI_CHAT_AGENT_ACCUMULATED_ATTACHMENTS: 65538;
  ITEM_TYPE_OMNI_CHAT_CUSTOMER_MESSAGE_UNIT: 65552;
  ITEM_TYPE_OMNI_CHAT_CUSTOMER_ATTACHMENT: 65553;
  ITEM_TYPE_OMNI_CHAT_CUSTOMER_ACCUMULATED_ATTACHMENTS: 65554;
  ITEM_TYPE_OMNI_CHAT_MANAGER_MESSAGE_UNIT: 65568;
  ITEM_TYPE_OMNI_CHAT_MANAGER_ATTACHMENT: 65569;
  ITEM_TYPE_OMNI_CHAT_MANAGER_ACCUMULATED_ATTACHMENTS: 65570;
  ITEM_TYPE_OMNI_CHAT_SYSTEM_MESSAGE_UNIT: 65584;
  ITEM_TYPE_OMNI_CHAT_SYSTEM_ATTACHMENT: 65585;
  ITEM_TYPE_OMNI_CHAT_SYSTEM_ACCUMULATED_ATTACHMENTS: 65586;
  ITEM_TYPE_OMNI_EMAIL_AGENT_MESSAGE_UNIT: 65792;
  ITEM_TYPE_OMNI_EMAIL_AGENT_SIZE: 65793;
  ITEM_TYPE_OMNI_EMAIL_AGENT_ACCUMULATED_SIZE: 65794;
  ITEM_TYPE_OMNI_EMAIL_CUSTOMER_MESSAGE_UNIT: 65808;
  ITEM_TYPE_OMNI_EMAIL_CUSTOMER_SIZE: 65809;
  ITEM_TYPE_OMNI_EMAIL_CUSTOMER_ACCUMULATED_SIZE: 65810;
  ITEM_TYPE_OMNI_EMAIL_MANAGER_MESSAGE_UNIT: 65824;
  ITEM_TYPE_OMNI_EMAIL_MANAGER_SIZE: 65825;
  ITEM_TYPE_OMNI_EMAIL_MANAGER_ACCUMULATED_SIZE: 65826;
  ITEM_TYPE_OMNI_EMAIL_SYSTEM_MESSAGE_UNIT: 65840;
  ITEM_TYPE_OMNI_EMAIL_SYSTEM_SIZE: 65841;
  ITEM_TYPE_OMNI_EMAIL_SYSTEM_ACCUMULATED_SIZE: 65842;
  ITEM_TYPE_OMNI_SMS_AGENT_MESSAGE_UNIT: 66048;
  ITEM_TYPE_OMNI_SMS_AGENT_ATTATCHMENT: 66049;
  ITEM_TYPE_OMNI_SMS_AGENT_ACCUMULATED_ATTATCHMENTS: 66050;
  ITEM_TYPE_OMNI_SMS_CUSTOMER_MESSAGE_UNIT: 66064;
  ITEM_TYPE_OMNI_SMS_CUSTOMER_ATTATCHMENT: 66065;
  ITEM_TYPE_OMNI_SMS_CUSTOMER_ACCUMULATED_ATTATCHMENTS: 66066;
  ITEM_TYPE_OMNI_SMS_MANAGER_MESSAGE_UNIT: 66080;
  ITEM_TYPE_OMNI_SMS_MANAGER_ATTATCHMENT: 66081;
  ITEM_TYPE_OMNI_SMS_MANAGER_ACCUMULATED_ATTATCHMENTS: 66082;
  ITEM_TYPE_OMNI_SMS_SYSTEM_MESSAGE_UNIT: 66096;
  ITEM_TYPE_OMNI_SMS_SYSTEM_ATTATCHMENT: 66097;
  ITEM_TYPE_OMNI_SMS_SYSTEM_ACCUMULATED_ATTATCHMENTS: 66098;
  ITEM_TYPE_OMNI_AGENT_SEATS: 66304;
  ITEM_TYPE_OMNI_RESOURCES_CONNECTED_INBOX_CREATED: 66560;
  ITEM_TYPE_OMNI_RESOURCES_CONNECTED_INBOX_POLL: 66561;
  ITEM_TYPE_COMPLIANCE_COMPLIANCE_RND_QUERY: 131072;
  ITEM_TYPE_COMPLIANCE_COMPLIANCE_RND_QUERY_CACHED: 131073;
}

export const ItemType: ItemTypeMap;

