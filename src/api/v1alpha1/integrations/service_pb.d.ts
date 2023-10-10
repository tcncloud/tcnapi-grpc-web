// package: api.v1alpha1.integrations
// file: api/v1alpha1/integrations/service.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../annotations/authz_pb";
import * as api_commons_integrations_integrations_pb from "../../../api/commons/integrations/integrations_pb";
import * as api_commons_perms_pb from "../../../api/commons/perms_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ListJourneyConfigsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJourneyConfigsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListJourneyConfigsReq): ListJourneyConfigsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListJourneyConfigsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJourneyConfigsReq;
  static deserializeBinaryFromReader(message: ListJourneyConfigsReq, reader: jspb.BinaryReader): ListJourneyConfigsReq;
}

export namespace ListJourneyConfigsReq {
  export type AsObject = {
  }
}

export class ListNonJourneyConfigsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNonJourneyConfigsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListNonJourneyConfigsReq): ListNonJourneyConfigsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNonJourneyConfigsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNonJourneyConfigsReq;
  static deserializeBinaryFromReader(message: ListNonJourneyConfigsReq, reader: jspb.BinaryReader): ListNonJourneyConfigsReq;
}

export namespace ListNonJourneyConfigsReq {
  export type AsObject = {
  }
}

export class IntegrationConfigs extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<IntegrationConfig>;
  setValuesList(value: Array<IntegrationConfig>): void;
  addValues(value?: IntegrationConfig, index?: number): IntegrationConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntegrationConfigs.AsObject;
  static toObject(includeInstance: boolean, msg: IntegrationConfigs): IntegrationConfigs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntegrationConfigs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntegrationConfigs;
  static deserializeBinaryFromReader(message: IntegrationConfigs, reader: jspb.BinaryReader): IntegrationConfigs;
}

export namespace IntegrationConfigs {
  export type AsObject = {
    valuesList: Array<IntegrationConfig.AsObject>,
  }
}

export class GetIntegrationConfigReq extends jspb.Message {
  getIntegrationId(): api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap];
  setIntegrationId(value: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap]): void;

  getName(): string;
  setName(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIntegrationConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetIntegrationConfigReq): GetIntegrationConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIntegrationConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIntegrationConfigReq;
  static deserializeBinaryFromReader(message: GetIntegrationConfigReq, reader: jspb.BinaryReader): GetIntegrationConfigReq;
}

export namespace GetIntegrationConfigReq {
  export type AsObject = {
    integrationId: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap],
    name: string,
    id: string,
  }
}

export class UpdateIntegrationConfigReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getIntegrationId(): api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap];
  setIntegrationId(value: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap]): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): Values | undefined;
  setParams(value?: Values): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateIntegrationConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateIntegrationConfigReq): UpdateIntegrationConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateIntegrationConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateIntegrationConfigReq;
  static deserializeBinaryFromReader(message: UpdateIntegrationConfigReq, reader: jspb.BinaryReader): UpdateIntegrationConfigReq;
}

export namespace UpdateIntegrationConfigReq {
  export type AsObject = {
    id: string,
    integrationId: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap],
    name: string,
    description: string,
    params?: Values.AsObject,
  }
}

export class DeleteIntegrationConfigReq extends jspb.Message {
  getIntegrationId(): api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap];
  setIntegrationId(value: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap]): void;

  getName(): string;
  setName(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteIntegrationConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteIntegrationConfigReq): DeleteIntegrationConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteIntegrationConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteIntegrationConfigReq;
  static deserializeBinaryFromReader(message: DeleteIntegrationConfigReq, reader: jspb.BinaryReader): DeleteIntegrationConfigReq;
}

export namespace DeleteIntegrationConfigReq {
  export type AsObject = {
    integrationId: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap],
    name: string,
    id: string,
  }
}

export class ProcessReq extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  getIntegrationId(): api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap];
  setIntegrationId(value: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap]): void;

  getMethodId(): api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap];
  setMethodId(value: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap]): void;

  getConfigName(): string;
  setConfigName(value: string): void;

  getConfigId(): string;
  setConfigId(value: string): void;

  getParamsMap(): jspb.Map<string, Value>;
  clearParamsMap(): void;
  clearCondsList(): void;
  getCondsList(): Array<Condition>;
  setCondsList(value: Array<Condition>): void;
  addConds(value?: Condition, index?: number): Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessReq): ProcessReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessReq;
  static deserializeBinaryFromReader(message: ProcessReq, reader: jspb.BinaryReader): ProcessReq;
}

export namespace ProcessReq {
  export type AsObject = {
    requestId: string,
    integrationId: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap],
    methodId: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap],
    configName: string,
    configId: string,
    paramsMap: Array<[string, Value.AsObject]>,
    condsList: Array<Condition.AsObject>,
  }
}

export class ProcessRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  getDataMap(): jspb.Map<string, Value>;
  clearDataMap(): void;
  getIntegration(): string;
  setIntegration(value: string): void;

  getMethod(): string;
  setMethod(value: string): void;

  getTransactionId(): string;
  setTransactionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessRes.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessRes): ProcessRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessRes;
  static deserializeBinaryFromReader(message: ProcessRes, reader: jspb.BinaryReader): ProcessRes;
}

export namespace ProcessRes {
  export type AsObject = {
    result: boolean,
    dataMap: Array<[string, Value.AsObject]>,
    integration: string,
    method: string,
    transactionId: string,
  }
}

export class ListIntegrationsForOrgReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIntegrationsForOrgReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListIntegrationsForOrgReq): ListIntegrationsForOrgReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListIntegrationsForOrgReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIntegrationsForOrgReq;
  static deserializeBinaryFromReader(message: ListIntegrationsForOrgReq, reader: jspb.BinaryReader): ListIntegrationsForOrgReq;
}

export namespace ListIntegrationsForOrgReq {
  export type AsObject = {
  }
}

export class IntegrationInfos extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<IntegrationInfo>;
  setValuesList(value: Array<IntegrationInfo>): void;
  addValues(value?: IntegrationInfo, index?: number): IntegrationInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntegrationInfos.AsObject;
  static toObject(includeInstance: boolean, msg: IntegrationInfos): IntegrationInfos.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntegrationInfos, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntegrationInfos;
  static deserializeBinaryFromReader(message: IntegrationInfos, reader: jspb.BinaryReader): IntegrationInfos;
}

export namespace IntegrationInfos {
  export type AsObject = {
    valuesList: Array<IntegrationInfo.AsObject>,
  }
}

export class IntegrationInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getIntegrationId(): api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap];
  setIntegrationId(value: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap]): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearMethodsList(): void;
  getMethodsList(): Array<MethodInfo>;
  setMethodsList(value: Array<MethodInfo>): void;
  addMethods(value?: MethodInfo, index?: number): MethodInfo;

  getGroupParamsMap(): jspb.Map<number, Parameter>;
  clearGroupParamsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntegrationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: IntegrationInfo): IntegrationInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntegrationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntegrationInfo;
  static deserializeBinaryFromReader(message: IntegrationInfo, reader: jspb.BinaryReader): IntegrationInfo;
}

export namespace IntegrationInfo {
  export type AsObject = {
    name: string,
    integrationId: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap],
    description: string,
    methodsList: Array<MethodInfo.AsObject>,
    groupParamsMap: Array<[number, Parameter.AsObject]>,
  }
}

export class MethodInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getMethodId(): api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap];
  setMethodId(value: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap]): void;

  getTxType(): api_commons_integrations_integrations_pb.TransactionTypeMap[keyof api_commons_integrations_integrations_pb.TransactionTypeMap];
  setTxType(value: api_commons_integrations_integrations_pb.TransactionTypeMap[keyof api_commons_integrations_integrations_pb.TransactionTypeMap]): void;

  clearParamsList(): void;
  getParamsList(): Array<Parameter>;
  setParamsList(value: Array<Parameter>): void;
  addParams(value?: Parameter, index?: number): Parameter;

  getUrl(): string;
  setUrl(value: string): void;

  clearResponseList(): void;
  getResponseList(): Array<Parameter>;
  setResponseList(value: Array<Parameter>): void;
  addResponse(value?: Parameter, index?: number): Parameter;

  getRuntimeParamsMap(): jspb.Map<number, Parameter>;
  clearRuntimeParamsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MethodInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MethodInfo): MethodInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MethodInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MethodInfo;
  static deserializeBinaryFromReader(message: MethodInfo, reader: jspb.BinaryReader): MethodInfo;
}

export namespace MethodInfo {
  export type AsObject = {
    name: string,
    methodId: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap],
    txType: api_commons_integrations_integrations_pb.TransactionTypeMap[keyof api_commons_integrations_integrations_pb.TransactionTypeMap],
    paramsList: Array<Parameter.AsObject>,
    url: string,
    responseList: Array<Parameter.AsObject>,
    runtimeParamsMap: Array<[number, Parameter.AsObject]>,
  }
}

export class Parameter extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getParamType(): api_commons_integrations_integrations_pb.ValueTypeMap[keyof api_commons_integrations_integrations_pb.ValueTypeMap];
  setParamType(value: api_commons_integrations_integrations_pb.ValueTypeMap[keyof api_commons_integrations_integrations_pb.ValueTypeMap]): void;

  getRequired(): boolean;
  setRequired(value: boolean): void;

  hasDefaultValue(): boolean;
  clearDefaultValue(): void;
  getDefaultValue(): Value | undefined;
  setDefaultValue(value?: Value): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getSensitive(): boolean;
  setSensitive(value: boolean): void;

  getRuntimeParam(): boolean;
  setRuntimeParam(value: boolean): void;

  getHelperText(): string;
  setHelperText(value: string): void;

  getTemplateLocked(): boolean;
  setTemplateLocked(value: boolean): void;

  getValidation(): api_commons_integrations_integrations_pb.ValidationMap[keyof api_commons_integrations_integrations_pb.ValidationMap];
  setValidation(value: api_commons_integrations_integrations_pb.ValidationMap[keyof api_commons_integrations_integrations_pb.ValidationMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Parameter.AsObject;
  static toObject(includeInstance: boolean, msg: Parameter): Parameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Parameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Parameter;
  static deserializeBinaryFromReader(message: Parameter, reader: jspb.BinaryReader): Parameter;
}

export namespace Parameter {
  export type AsObject = {
    name: string,
    paramType: api_commons_integrations_integrations_pb.ValueTypeMap[keyof api_commons_integrations_integrations_pb.ValueTypeMap],
    required: boolean,
    defaultValue?: Value.AsObject,
    displayName: string,
    sensitive: boolean,
    runtimeParam: boolean,
    helperText: string,
    templateLocked: boolean,
    validation: api_commons_integrations_integrations_pb.ValidationMap[keyof api_commons_integrations_integrations_pb.ValidationMap],
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class GetIntegrationTransactionReq extends jspb.Message {
  getIntegrationTransactionId(): string;
  setIntegrationTransactionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIntegrationTransactionReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetIntegrationTransactionReq): GetIntegrationTransactionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIntegrationTransactionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIntegrationTransactionReq;
  static deserializeBinaryFromReader(message: GetIntegrationTransactionReq, reader: jspb.BinaryReader): GetIntegrationTransactionReq;
}

export namespace GetIntegrationTransactionReq {
  export type AsObject = {
    integrationTransactionId: string,
  }
}

export class GetAggregatedMetadataReq extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMethodId(): api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap];
  setMethodId(value: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAggregatedMetadataReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAggregatedMetadataReq): GetAggregatedMetadataReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAggregatedMetadataReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAggregatedMetadataReq;
  static deserializeBinaryFromReader(message: GetAggregatedMetadataReq, reader: jspb.BinaryReader): GetAggregatedMetadataReq;
}

export namespace GetAggregatedMetadataReq {
  export type AsObject = {
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    end?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    methodId: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap],
  }
}

export class GetAggregatedMetadataRes extends jspb.Message {
  getViews(): number;
  setViews(value: number): void;

  getVerifyAttempts(): number;
  setVerifyAttempts(value: number): void;

  getVerifySuccesses(): number;
  setVerifySuccesses(value: number): void;

  getPaymentAttempts(): number;
  setPaymentAttempts(value: number): void;

  getPaymentSuccesses(): number;
  setPaymentSuccesses(value: number): void;

  getPaymentAmount(): number;
  setPaymentAmount(value: number): void;

  clearFieldsList(): void;
  getFieldsList(): Array<string>;
  setFieldsList(value: Array<string>): void;
  addFields(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAggregatedMetadataRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetAggregatedMetadataRes): GetAggregatedMetadataRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAggregatedMetadataRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAggregatedMetadataRes;
  static deserializeBinaryFromReader(message: GetAggregatedMetadataRes, reader: jspb.BinaryReader): GetAggregatedMetadataRes;
}

export namespace GetAggregatedMetadataRes {
  export type AsObject = {
    views: number,
    verifyAttempts: number,
    verifySuccesses: number,
    paymentAttempts: number,
    paymentSuccesses: number,
    paymentAmount: number,
    fieldsList: Array<string>,
  }
}

export class GetIntegrationTransactionReportReq extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearGroupByList(): void;
  getGroupByList(): Array<string>;
  setGroupByList(value: Array<string>): void;
  addGroupBy(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIntegrationTransactionReportReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetIntegrationTransactionReportReq): GetIntegrationTransactionReportReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIntegrationTransactionReportReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIntegrationTransactionReportReq;
  static deserializeBinaryFromReader(message: GetIntegrationTransactionReportReq, reader: jspb.BinaryReader): GetIntegrationTransactionReportReq;
}

export namespace GetIntegrationTransactionReportReq {
  export type AsObject = {
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    end?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    groupByList: Array<string>,
  }
}

export class IntegrationTransactionReportRow extends jspb.Message {
  getIntegrationId(): api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap];
  setIntegrationId(value: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap]): void;

  getIntegrationName(): string;
  setIntegrationName(value: string): void;

  getMethodId(): api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap];
  setMethodId(value: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap]): void;

  getMethodName(): string;
  setMethodName(value: string): void;

  getTransactionType(): api_commons_integrations_integrations_pb.TransactionTypeMap[keyof api_commons_integrations_integrations_pb.TransactionTypeMap];
  setTransactionType(value: api_commons_integrations_integrations_pb.TransactionTypeMap[keyof api_commons_integrations_integrations_pb.TransactionTypeMap]): void;

  getRequestSource(): api_commons_integrations_integrations_pb.RequestSourceMap[keyof api_commons_integrations_integrations_pb.RequestSourceMap];
  setRequestSource(value: api_commons_integrations_integrations_pb.RequestSourceMap[keyof api_commons_integrations_integrations_pb.RequestSourceMap]): void;

  getFlowName(): string;
  setFlowName(value: string): void;

  getCampaignType(): string;
  setCampaignType(value: string): void;

  getGroupByValuesMap(): jspb.Map<string, string>;
  clearGroupByValuesMap(): void;
  getRevenue(): number;
  setRevenue(value: number): void;

  getRevenueSubtotalsMap(): jspb.Map<string, number>;
  clearRevenueSubtotalsMap(): void;
  getSuccessCount(): number;
  setSuccessCount(value: number): void;

  getFailureCount(): number;
  setFailureCount(value: number): void;

  getTotalCount(): number;
  setTotalCount(value: number): void;

  getHighestTrafficDate(): string;
  setHighestTrafficDate(value: string): void;

  getLowestTrafficDate(): string;
  setLowestTrafficDate(value: string): void;

  getCountMetricsMap(): jspb.Map<string, number>;
  clearCountMetricsMap(): void;
  clearFieldsList(): void;
  getFieldsList(): Array<string>;
  setFieldsList(value: Array<string>): void;
  addFields(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntegrationTransactionReportRow.AsObject;
  static toObject(includeInstance: boolean, msg: IntegrationTransactionReportRow): IntegrationTransactionReportRow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntegrationTransactionReportRow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntegrationTransactionReportRow;
  static deserializeBinaryFromReader(message: IntegrationTransactionReportRow, reader: jspb.BinaryReader): IntegrationTransactionReportRow;
}

export namespace IntegrationTransactionReportRow {
  export type AsObject = {
    integrationId: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap],
    integrationName: string,
    methodId: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap],
    methodName: string,
    transactionType: api_commons_integrations_integrations_pb.TransactionTypeMap[keyof api_commons_integrations_integrations_pb.TransactionTypeMap],
    requestSource: api_commons_integrations_integrations_pb.RequestSourceMap[keyof api_commons_integrations_integrations_pb.RequestSourceMap],
    flowName: string,
    campaignType: string,
    groupByValuesMap: Array<[string, string]>,
    revenue: number,
    revenueSubtotalsMap: Array<[string, number]>,
    successCount: number,
    failureCount: number,
    totalCount: number,
    highestTrafficDate: string,
    lowestTrafficDate: string,
    countMetricsMap: Array<[string, number]>,
    fieldsList: Array<string>,
  }
}

export class GetIntegrationTransactionReportRes extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<IntegrationTransactionReportRow>;
  setValuesList(value: Array<IntegrationTransactionReportRow>): void;
  addValues(value?: IntegrationTransactionReportRow, index?: number): IntegrationTransactionReportRow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIntegrationTransactionReportRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetIntegrationTransactionReportRes): GetIntegrationTransactionReportRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIntegrationTransactionReportRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIntegrationTransactionReportRes;
  static deserializeBinaryFromReader(message: GetIntegrationTransactionReportRes, reader: jspb.BinaryReader): GetIntegrationTransactionReportRes;
}

export namespace GetIntegrationTransactionReportRes {
  export type AsObject = {
    valuesList: Array<IntegrationTransactionReportRow.AsObject>,
  }
}

export class GetIntegrationTransactionReportDataReq extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getGroupByMap(): jspb.Map<string, string>;
  clearGroupByMap(): void;
  getPageSize(): number;
  setPageSize(value: number): void;

  getPageNum(): number;
  setPageNum(value: number): void;

  getIntegrationId(): api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap];
  setIntegrationId(value: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap]): void;

  getSearchAfterSid(): number;
  setSearchAfterSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIntegrationTransactionReportDataReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetIntegrationTransactionReportDataReq): GetIntegrationTransactionReportDataReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIntegrationTransactionReportDataReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIntegrationTransactionReportDataReq;
  static deserializeBinaryFromReader(message: GetIntegrationTransactionReportDataReq, reader: jspb.BinaryReader): GetIntegrationTransactionReportDataReq;
}

export namespace GetIntegrationTransactionReportDataReq {
  export type AsObject = {
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    end?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    groupByMap: Array<[string, string]>,
    pageSize: number,
    pageNum: number,
    integrationId: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap],
    searchAfterSid: number,
  }
}

export class GetIntegrationTransactionReportDataRow extends jspb.Message {
  getCountMetricsMap(): jspb.Map<string, number>;
  clearCountMetricsMap(): void;
  getLinkDataMap(): jspb.Map<string, string>;
  clearLinkDataMap(): void;
  hasDate(): boolean;
  clearDate(): void;
  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPaymentAmount(): number;
  setPaymentAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIntegrationTransactionReportDataRow.AsObject;
  static toObject(includeInstance: boolean, msg: GetIntegrationTransactionReportDataRow): GetIntegrationTransactionReportDataRow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIntegrationTransactionReportDataRow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIntegrationTransactionReportDataRow;
  static deserializeBinaryFromReader(message: GetIntegrationTransactionReportDataRow, reader: jspb.BinaryReader): GetIntegrationTransactionReportDataRow;
}

export namespace GetIntegrationTransactionReportDataRow {
  export type AsObject = {
    countMetricsMap: Array<[string, number]>,
    linkDataMap: Array<[string, string]>,
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    paymentAmount: number,
  }
}

export class GetIntegrationTransactionReportDataRes extends jspb.Message {
  clearEntitiesList(): void;
  getEntitiesList(): Array<GetIntegrationTransactionReportDataRow>;
  setEntitiesList(value: Array<GetIntegrationTransactionReportDataRow>): void;
  addEntities(value?: GetIntegrationTransactionReportDataRow, index?: number): GetIntegrationTransactionReportDataRow;

  getLastTransactionSid(): number;
  setLastTransactionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIntegrationTransactionReportDataRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetIntegrationTransactionReportDataRes): GetIntegrationTransactionReportDataRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIntegrationTransactionReportDataRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIntegrationTransactionReportDataRes;
  static deserializeBinaryFromReader(message: GetIntegrationTransactionReportDataRes, reader: jspb.BinaryReader): GetIntegrationTransactionReportDataRes;
}

export namespace GetIntegrationTransactionReportDataRes {
  export type AsObject = {
    entitiesList: Array<GetIntegrationTransactionReportDataRow.AsObject>,
    lastTransactionSid: number,
  }
}

export class SearchIntegrationTransactionsReq extends jspb.Message {
  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndDate(): boolean;
  clearEndDate(): void;
  getEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasIntegrationType(): boolean;
  clearIntegrationType(): void;
  getIntegrationType(): IntegrationType | undefined;
  setIntegrationType(value?: IntegrationType): void;

  hasRequestMethod(): boolean;
  clearRequestMethod(): void;
  getRequestMethod(): RequestMethod | undefined;
  setRequestMethod(value?: RequestMethod): void;

  hasTransactionType(): boolean;
  clearTransactionType(): void;
  getTransactionType(): TransactionType | undefined;
  setTransactionType(value?: TransactionType): void;

  hasRequestSource(): boolean;
  clearRequestSource(): void;
  getRequestSource(): RequestSource | undefined;
  setRequestSource(value?: RequestSource): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): TransactionResult | undefined;
  setResult(value?: TransactionResult): void;

  getTaskId(): string;
  setTaskId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchIntegrationTransactionsReq.AsObject;
  static toObject(includeInstance: boolean, msg: SearchIntegrationTransactionsReq): SearchIntegrationTransactionsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchIntegrationTransactionsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchIntegrationTransactionsReq;
  static deserializeBinaryFromReader(message: SearchIntegrationTransactionsReq, reader: jspb.BinaryReader): SearchIntegrationTransactionsReq;
}

export namespace SearchIntegrationTransactionsReq {
  export type AsObject = {
    startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    integrationType?: IntegrationType.AsObject,
    requestMethod?: RequestMethod.AsObject,
    transactionType?: TransactionType.AsObject,
    requestSource?: RequestSource.AsObject,
    result?: TransactionResult.AsObject,
    taskId: string,
  }
}

export class SearchIntegrationTransactionsRes extends jspb.Message {
  clearTransactionsList(): void;
  getTransactionsList(): Array<IntegrationTransaction>;
  setTransactionsList(value: Array<IntegrationTransaction>): void;
  addTransactions(value?: IntegrationTransaction, index?: number): IntegrationTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchIntegrationTransactionsRes.AsObject;
  static toObject(includeInstance: boolean, msg: SearchIntegrationTransactionsRes): SearchIntegrationTransactionsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchIntegrationTransactionsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchIntegrationTransactionsRes;
  static deserializeBinaryFromReader(message: SearchIntegrationTransactionsRes, reader: jspb.BinaryReader): SearchIntegrationTransactionsRes;
}

export namespace SearchIntegrationTransactionsRes {
  export type AsObject = {
    transactionsList: Array<IntegrationTransaction.AsObject>,
  }
}

export class IntegrationType extends jspb.Message {
  getIntegrationId(): api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap];
  setIntegrationId(value: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntegrationType.AsObject;
  static toObject(includeInstance: boolean, msg: IntegrationType): IntegrationType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntegrationType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntegrationType;
  static deserializeBinaryFromReader(message: IntegrationType, reader: jspb.BinaryReader): IntegrationType;
}

export namespace IntegrationType {
  export type AsObject = {
    integrationId: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap],
  }
}

export class RequestMethod extends jspb.Message {
  getMethodId(): api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap];
  setMethodId(value: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestMethod.AsObject;
  static toObject(includeInstance: boolean, msg: RequestMethod): RequestMethod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestMethod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestMethod;
  static deserializeBinaryFromReader(message: RequestMethod, reader: jspb.BinaryReader): RequestMethod;
}

export namespace RequestMethod {
  export type AsObject = {
    methodId: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap],
  }
}

export class TransactionType extends jspb.Message {
  getTransactionType(): api_commons_integrations_integrations_pb.TransactionTypeMap[keyof api_commons_integrations_integrations_pb.TransactionTypeMap];
  setTransactionType(value: api_commons_integrations_integrations_pb.TransactionTypeMap[keyof api_commons_integrations_integrations_pb.TransactionTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionType.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionType): TransactionType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionType;
  static deserializeBinaryFromReader(message: TransactionType, reader: jspb.BinaryReader): TransactionType;
}

export namespace TransactionType {
  export type AsObject = {
    transactionType: api_commons_integrations_integrations_pb.TransactionTypeMap[keyof api_commons_integrations_integrations_pb.TransactionTypeMap],
  }
}

export class RequestSource extends jspb.Message {
  getRequestSource(): api_commons_integrations_integrations_pb.RequestSourceMap[keyof api_commons_integrations_integrations_pb.RequestSourceMap];
  setRequestSource(value: api_commons_integrations_integrations_pb.RequestSourceMap[keyof api_commons_integrations_integrations_pb.RequestSourceMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestSource.AsObject;
  static toObject(includeInstance: boolean, msg: RequestSource): RequestSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestSource;
  static deserializeBinaryFromReader(message: RequestSource, reader: jspb.BinaryReader): RequestSource;
}

export namespace RequestSource {
  export type AsObject = {
    requestSource: api_commons_integrations_integrations_pb.RequestSourceMap[keyof api_commons_integrations_integrations_pb.RequestSourceMap],
  }
}

export class TransactionResult extends jspb.Message {
  getResult(): api_commons_integrations_integrations_pb.TransactionResultMap[keyof api_commons_integrations_integrations_pb.TransactionResultMap];
  setResult(value: api_commons_integrations_integrations_pb.TransactionResultMap[keyof api_commons_integrations_integrations_pb.TransactionResultMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionResult.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionResult): TransactionResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionResult;
  static deserializeBinaryFromReader(message: TransactionResult, reader: jspb.BinaryReader): TransactionResult;
}

export namespace TransactionResult {
  export type AsObject = {
    result: api_commons_integrations_integrations_pb.TransactionResultMap[keyof api_commons_integrations_integrations_pb.TransactionResultMap],
  }
}

export class ListIntegrationConfigNamesReq extends jspb.Message {
  getIntegrationId(): api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap];
  setIntegrationId(value: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIntegrationConfigNamesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListIntegrationConfigNamesReq): ListIntegrationConfigNamesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListIntegrationConfigNamesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIntegrationConfigNamesReq;
  static deserializeBinaryFromReader(message: ListIntegrationConfigNamesReq, reader: jspb.BinaryReader): ListIntegrationConfigNamesReq;
}

export namespace ListIntegrationConfigNamesReq {
  export type AsObject = {
    integrationId: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap],
  }
}

export class ListIntegrationConfigNamesRes extends jspb.Message {
  getIntegrationId(): api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap];
  setIntegrationId(value: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap]): void;

  clearNamesList(): void;
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): void;
  addNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIntegrationConfigNamesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListIntegrationConfigNamesRes): ListIntegrationConfigNamesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListIntegrationConfigNamesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIntegrationConfigNamesRes;
  static deserializeBinaryFromReader(message: ListIntegrationConfigNamesRes, reader: jspb.BinaryReader): ListIntegrationConfigNamesRes;
}

export namespace ListIntegrationConfigNamesRes {
  export type AsObject = {
    integrationId: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap],
    namesList: Array<string>,
  }
}

export class GetPaymentLinkConfigReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentLinkConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentLinkConfigReq): GetPaymentLinkConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPaymentLinkConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentLinkConfigReq;
  static deserializeBinaryFromReader(message: GetPaymentLinkConfigReq, reader: jspb.BinaryReader): GetPaymentLinkConfigReq;
}

export namespace GetPaymentLinkConfigReq {
  export type AsObject = {
    id: string,
  }
}

export class DeletePaymentLinkConfigReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePaymentLinkConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePaymentLinkConfigReq): DeletePaymentLinkConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePaymentLinkConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePaymentLinkConfigReq;
  static deserializeBinaryFromReader(message: DeletePaymentLinkConfigReq, reader: jspb.BinaryReader): DeletePaymentLinkConfigReq;
}

export namespace DeletePaymentLinkConfigReq {
  export type AsObject = {
    id: string,
  }
}

export class Logo extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Logo.AsObject;
  static toObject(includeInstance: boolean, msg: Logo): Logo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Logo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Logo;
  static deserializeBinaryFromReader(message: Logo, reader: jspb.BinaryReader): Logo;
}

export namespace Logo {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class ListPortalConfigsReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): PortalConfigId | undefined;
  setEntity(value?: PortalConfigId): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPage(): number;
  setPage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPortalConfigsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListPortalConfigsReq): ListPortalConfigsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPortalConfigsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPortalConfigsReq;
  static deserializeBinaryFromReader(message: ListPortalConfigsReq, reader: jspb.BinaryReader): ListPortalConfigsReq;
}

export namespace ListPortalConfigsReq {
  export type AsObject = {
    entity?: PortalConfigId.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    pageSize: number,
    page: number,
  }
}

export class GetPortalConfigReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): PortalConfigId | undefined;
  setEntity(value?: PortalConfigId): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPortalConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetPortalConfigReq): GetPortalConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPortalConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPortalConfigReq;
  static deserializeBinaryFromReader(message: GetPortalConfigReq, reader: jspb.BinaryReader): GetPortalConfigReq;
}

export namespace GetPortalConfigReq {
  export type AsObject = {
    entity?: PortalConfigId.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    id: string,
  }
}

export class DeletePortalConfigReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): PortalConfigId | undefined;
  setEntity(value?: PortalConfigId): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePortalConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePortalConfigReq): DeletePortalConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePortalConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePortalConfigReq;
  static deserializeBinaryFromReader(message: DeletePortalConfigReq, reader: jspb.BinaryReader): DeletePortalConfigReq;
}

export namespace DeletePortalConfigReq {
  export type AsObject = {
    entity?: PortalConfigId.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    id: string,
  }
}

export class UpdatePortalLogoReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getLogo(): Uint8Array | string;
  getLogo_asU8(): Uint8Array;
  getLogo_asB64(): string;
  setLogo(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePortalLogoReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePortalLogoReq): UpdatePortalLogoReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePortalLogoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePortalLogoReq;
  static deserializeBinaryFromReader(message: UpdatePortalLogoReq, reader: jspb.BinaryReader): UpdatePortalLogoReq;
}

export namespace UpdatePortalLogoReq {
  export type AsObject = {
    id: string,
    logo: Uint8Array | string,
  }
}

export class GetPortalLogoReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPortalLogoReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetPortalLogoReq): GetPortalLogoReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPortalLogoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPortalLogoReq;
  static deserializeBinaryFromReader(message: GetPortalLogoReq, reader: jspb.BinaryReader): GetPortalLogoReq;
}

export namespace GetPortalLogoReq {
  export type AsObject = {
    id: string,
  }
}

export class RefreshLinkReq extends jspb.Message {
  getLinkId(): string;
  setLinkId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshLinkReq.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshLinkReq): RefreshLinkReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RefreshLinkReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshLinkReq;
  static deserializeBinaryFromReader(message: RefreshLinkReq, reader: jspb.BinaryReader): RefreshLinkReq;
}

export namespace RefreshLinkReq {
  export type AsObject = {
    linkId: string,
  }
}

export class RefreshLinkRes extends jspb.Message {
  hasNewExpiry(): boolean;
  clearNewExpiry(): void;
  getNewExpiry(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setNewExpiry(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshLinkRes.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshLinkRes): RefreshLinkRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RefreshLinkRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshLinkRes;
  static deserializeBinaryFromReader(message: RefreshLinkRes, reader: jspb.BinaryReader): RefreshLinkRes;
}

export namespace RefreshLinkRes {
  export type AsObject = {
    newExpiry?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class PaymentLinkConfig extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getCollectionId(): string;
  setCollectionId(value: string): void;

  getIntegrationId(): api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap];
  setIntegrationId(value: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap]): void;

  getVerificationMethodId(): api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap];
  setVerificationMethodId(value: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap]): void;

  getInvoiceMethodId(): api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap];
  setInvoiceMethodId(value: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap]): void;

  getPaymentMethodId(): api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap];
  setPaymentMethodId(value: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap]): void;

  getNameMappingMap(): jspb.Map<string, string>;
  clearNameMappingMap(): void;
  clearVerificationFieldsList(): void;
  getVerificationFieldsList(): Array<string>;
  setVerificationFieldsList(value: Array<string>): void;
  addVerificationFields(value: string, index?: number): string;

  getPaymentPortalId(): string;
  setPaymentPortalId(value: string): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getExpiryDays(): number;
  setExpiryDays(value: number): void;

  getLinksRefreshable(): boolean;
  setLinksRefreshable(value: boolean): void;

  getRefreshLinkValidHours(): number;
  setRefreshLinkValidHours(value: number): void;

  getMaxRefreshTimes(): number;
  setMaxRefreshTimes(value: number): void;

  hasVerificationRequest(): boolean;
  clearVerificationRequest(): void;
  getVerificationRequest(): VerificationRequest | undefined;
  setVerificationRequest(value?: VerificationRequest): void;

  hasInvoiceRequest(): boolean;
  clearInvoiceRequest(): void;
  getInvoiceRequest(): InvoiceRequest | undefined;
  setInvoiceRequest(value?: InvoiceRequest): void;

  clearPaymentRequestsList(): void;
  getPaymentRequestsList(): Array<PaymentRequest>;
  setPaymentRequestsList(value: Array<PaymentRequest>): void;
  addPaymentRequests(value?: PaymentRequest, index?: number): PaymentRequest;

  getBaseDataMap(): jspb.Map<string, Value>;
  clearBaseDataMap(): void;
  hasTemplates(): boolean;
  clearTemplates(): void;
  getTemplates(): PaymentLinkConfigTemplates | undefined;
  setTemplates(value?: PaymentLinkConfigTemplates): void;

  getPaymentProfileName(): string;
  setPaymentProfileName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentLinkConfig.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentLinkConfig): PaymentLinkConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentLinkConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentLinkConfig;
  static deserializeBinaryFromReader(message: PaymentLinkConfig, reader: jspb.BinaryReader): PaymentLinkConfig;
}

export namespace PaymentLinkConfig {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    collectionId: string,
    integrationId: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap],
    verificationMethodId: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap],
    invoiceMethodId: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap],
    paymentMethodId: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap],
    nameMappingMap: Array<[string, string]>,
    verificationFieldsList: Array<string>,
    paymentPortalId: string,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expiryDays: number,
    linksRefreshable: boolean,
    refreshLinkValidHours: number,
    maxRefreshTimes: number,
    verificationRequest?: VerificationRequest.AsObject,
    invoiceRequest?: InvoiceRequest.AsObject,
    paymentRequestsList: Array<PaymentRequest.AsObject>,
    baseDataMap: Array<[string, Value.AsObject]>,
    templates?: PaymentLinkConfigTemplates.AsObject,
    paymentProfileName: string,
  }
}

export class PaymentLinkConfigTemplates extends jspb.Message {
  getReceiptSmsTemplate(): string;
  setReceiptSmsTemplate(value: string): void;

  getReceiptSmsSourcePhone(): string;
  setReceiptSmsSourcePhone(value: string): void;

  getReceiptEmailTemplate(): string;
  setReceiptEmailTemplate(value: string): void;

  getReceiptEmailFromAddr(): string;
  setReceiptEmailFromAddr(value: string): void;

  getReceiptTemplate(): string;
  setReceiptTemplate(value: string): void;

  getInvoiceTemplate(): string;
  setInvoiceTemplate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentLinkConfigTemplates.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentLinkConfigTemplates): PaymentLinkConfigTemplates.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentLinkConfigTemplates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentLinkConfigTemplates;
  static deserializeBinaryFromReader(message: PaymentLinkConfigTemplates, reader: jspb.BinaryReader): PaymentLinkConfigTemplates;
}

export namespace PaymentLinkConfigTemplates {
  export type AsObject = {
    receiptSmsTemplate: string,
    receiptSmsSourcePhone: string,
    receiptEmailTemplate: string,
    receiptEmailFromAddr: string,
    receiptTemplate: string,
    invoiceTemplate: string,
  }
}

export class VerificationRequest extends jspb.Message {
  clearVerificationRequestsList(): void;
  getVerificationRequestsList(): Array<Request>;
  setVerificationRequestsList(value: Array<Request>): void;
  addVerificationRequests(value?: Request, index?: number): Request;

  clearVerificationFieldsList(): void;
  getVerificationFieldsList(): Array<Parameter>;
  setVerificationFieldsList(value: Array<Parameter>): void;
  addVerificationFields(value?: Parameter, index?: number): Parameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerificationRequest): VerificationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerificationRequest;
  static deserializeBinaryFromReader(message: VerificationRequest, reader: jspb.BinaryReader): VerificationRequest;
}

export namespace VerificationRequest {
  export type AsObject = {
    verificationRequestsList: Array<Request.AsObject>,
    verificationFieldsList: Array<Parameter.AsObject>,
  }
}

export class PaymentRequest extends jspb.Message {
  clearPaymentFieldsList(): void;
  getPaymentFieldsList(): Array<Parameter>;
  setPaymentFieldsList(value: Array<Parameter>): void;
  addPaymentFields(value?: Parameter, index?: number): Parameter;

  clearPaymentRequestPayloadList(): void;
  getPaymentRequestPayloadList(): Array<Request>;
  setPaymentRequestPayloadList(value: Array<Request>): void;
  addPaymentRequestPayload(value?: Request, index?: number): Request;

  hasPaymentRequest(): boolean;
  clearPaymentRequest(): void;
  getPaymentRequest(): Request | undefined;
  setPaymentRequest(value?: Request): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentRequest): PaymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentRequest;
  static deserializeBinaryFromReader(message: PaymentRequest, reader: jspb.BinaryReader): PaymentRequest;
}

export namespace PaymentRequest {
  export type AsObject = {
    paymentFieldsList: Array<Parameter.AsObject>,
    paymentRequestPayloadList: Array<Request.AsObject>,
    paymentRequest?: Request.AsObject,
    name: string,
    description: string,
  }
}

export class InvoiceRequest extends jspb.Message {
  clearInvoiceRequestPayloadList(): void;
  getInvoiceRequestPayloadList(): Array<Request>;
  setInvoiceRequestPayloadList(value: Array<Request>): void;
  addInvoiceRequestPayload(value?: Request, index?: number): Request;

  hasInvoiceRequest(): boolean;
  clearInvoiceRequest(): void;
  getInvoiceRequest(): Request | undefined;
  setInvoiceRequest(value?: Request): void;

  clearFilterResponseKeysList(): void;
  getFilterResponseKeysList(): Array<string>;
  setFilterResponseKeysList(value: Array<string>): void;
  addFilterResponseKeys(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InvoiceRequest): InvoiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoiceRequest;
  static deserializeBinaryFromReader(message: InvoiceRequest, reader: jspb.BinaryReader): InvoiceRequest;
}

export namespace InvoiceRequest {
  export type AsObject = {
    invoiceRequestPayloadList: Array<Request.AsObject>,
    invoiceRequest?: Request.AsObject,
    filterResponseKeysList: Array<string>,
  }
}

export class Request extends jspb.Message {
  hasJourneyCollectionId(): boolean;
  clearJourneyCollectionId(): void;
  getJourneyCollectionId(): string;
  setJourneyCollectionId(value: string): void;

  hasMethodCall(): boolean;
  clearMethodCall(): void;
  getMethodCall(): MethodCall | undefined;
  setMethodCall(value?: MethodCall): void;

  hasConfigId(): boolean;
  clearConfigId(): void;
  getConfigId(): string;
  setConfigId(value: string): void;

  getStaticDataMap(): jspb.Map<string, Value>;
  clearStaticDataMap(): void;
  getRenameResponseKeysMap(): jspb.Map<string, string>;
  clearRenameResponseKeysMap(): void;
  getReassignValidationsMap(): jspb.Map<string, Validation>;
  clearReassignValidationsMap(): void;
  getValCase(): Request.ValCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request.AsObject;
  static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
  export type AsObject = {
    journeyCollectionId: string,
    methodCall?: MethodCall.AsObject,
    configId: string,
    staticDataMap: Array<[string, Value.AsObject]>,
    renameResponseKeysMap: Array<[string, string]>,
    reassignValidationsMap: Array<[string, Validation.AsObject]>,
  }

  export enum ValCase {
    VAL_NOT_SET = 0,
    JOURNEY_COLLECTION_ID = 3,
    METHOD_CALL = 4,
    CONFIG_ID = 5,
  }
}

export class Validation extends jspb.Message {
  getEnum(): api_commons_integrations_integrations_pb.ValidationMap[keyof api_commons_integrations_integrations_pb.ValidationMap];
  setEnum(value: api_commons_integrations_integrations_pb.ValidationMap[keyof api_commons_integrations_integrations_pb.ValidationMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Validation.AsObject;
  static toObject(includeInstance: boolean, msg: Validation): Validation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Validation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Validation;
  static deserializeBinaryFromReader(message: Validation, reader: jspb.BinaryReader): Validation;
}

export namespace Validation {
  export type AsObject = {
    pb_enum: api_commons_integrations_integrations_pb.ValidationMap[keyof api_commons_integrations_integrations_pb.ValidationMap],
  }
}

export class MethodCall extends jspb.Message {
  getIntegrationId(): api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap];
  setIntegrationId(value: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap]): void;

  getMethodId(): api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap];
  setMethodId(value: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MethodCall.AsObject;
  static toObject(includeInstance: boolean, msg: MethodCall): MethodCall.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MethodCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MethodCall;
  static deserializeBinaryFromReader(message: MethodCall, reader: jspb.BinaryReader): MethodCall;
}

export namespace MethodCall {
  export type AsObject = {
    integrationId: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap],
    methodId: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap],
  }
}

export class PortalConfigs extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<PortalConfig>;
  setValuesList(value: Array<PortalConfig>): void;
  addValues(value?: PortalConfig, index?: number): PortalConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortalConfigs.AsObject;
  static toObject(includeInstance: boolean, msg: PortalConfigs): PortalConfigs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PortalConfigs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortalConfigs;
  static deserializeBinaryFromReader(message: PortalConfigs, reader: jspb.BinaryReader): PortalConfigs;
}

export namespace PortalConfigs {
  export type AsObject = {
    valuesList: Array<PortalConfig.AsObject>,
  }
}

export class ListPaymentLinkConfigsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPaymentLinkConfigsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListPaymentLinkConfigsReq): ListPaymentLinkConfigsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPaymentLinkConfigsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPaymentLinkConfigsReq;
  static deserializeBinaryFromReader(message: ListPaymentLinkConfigsReq, reader: jspb.BinaryReader): ListPaymentLinkConfigsReq;
}

export namespace ListPaymentLinkConfigsReq {
  export type AsObject = {
  }
}

export class PaymentLinkConfigs extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<PaymentLinkConfig>;
  setValuesList(value: Array<PaymentLinkConfig>): void;
  addValues(value?: PaymentLinkConfig, index?: number): PaymentLinkConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentLinkConfigs.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentLinkConfigs): PaymentLinkConfigs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentLinkConfigs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentLinkConfigs;
  static deserializeBinaryFromReader(message: PaymentLinkConfigs, reader: jspb.BinaryReader): PaymentLinkConfigs;
}

export namespace PaymentLinkConfigs {
  export type AsObject = {
    valuesList: Array<PaymentLinkConfig.AsObject>,
  }
}

export class ListLinksReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLinksReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListLinksReq): ListLinksReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLinksReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLinksReq;
  static deserializeBinaryFromReader(message: ListLinksReq, reader: jspb.BinaryReader): ListLinksReq;
}

export namespace ListLinksReq {
  export type AsObject = {
  }
}

export class CreatePaymentPortalLinksReq extends jspb.Message {
  getLinkConfigId(): string;
  setLinkConfigId(value: string): void;

  hasExpiry(): boolean;
  clearExpiry(): void;
  getExpiry(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiry(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearUserDataList(): void;
  getUserDataList(): Array<Task>;
  setUserDataList(value: Array<Task>): void;
  addUserData(value?: Task, index?: number): Task;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePaymentPortalLinksReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePaymentPortalLinksReq): CreatePaymentPortalLinksReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePaymentPortalLinksReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePaymentPortalLinksReq;
  static deserializeBinaryFromReader(message: CreatePaymentPortalLinksReq, reader: jspb.BinaryReader): CreatePaymentPortalLinksReq;
}

export namespace CreatePaymentPortalLinksReq {
  export type AsObject = {
    linkConfigId: string,
    expiry?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    userDataList: Array<Task.AsObject>,
  }
}

export class CreatePaymentPortalLinksRes extends jspb.Message {
  clearUrlsList(): void;
  getUrlsList(): Array<string>;
  setUrlsList(value: Array<string>): void;
  addUrls(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePaymentPortalLinksRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePaymentPortalLinksRes): CreatePaymentPortalLinksRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePaymentPortalLinksRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePaymentPortalLinksRes;
  static deserializeBinaryFromReader(message: CreatePaymentPortalLinksRes, reader: jspb.BinaryReader): CreatePaymentPortalLinksRes;
}

export namespace CreatePaymentPortalLinksRes {
  export type AsObject = {
    urlsList: Array<string>,
  }
}

export class SummaryReq extends jspb.Message {
  getYear(): number;
  setYear(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SummaryReq.AsObject;
  static toObject(includeInstance: boolean, msg: SummaryReq): SummaryReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SummaryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SummaryReq;
  static deserializeBinaryFromReader(message: SummaryReq, reader: jspb.BinaryReader): SummaryReq;
}

export namespace SummaryReq {
  export type AsObject = {
    year: number,
  }
}

export class SummaryRes extends jspb.Message {
  hasYearSummary(): boolean;
  clearYearSummary(): void;
  getYearSummary(): CalendarSummary | undefined;
  setYearSummary(value?: CalendarSummary): void;

  clearMonthSummariesList(): void;
  getMonthSummariesList(): Array<CalendarSummary>;
  setMonthSummariesList(value: Array<CalendarSummary>): void;
  addMonthSummaries(value?: CalendarSummary, index?: number): CalendarSummary;

  clearWeekSummariesList(): void;
  getWeekSummariesList(): Array<CalendarSummary>;
  setWeekSummariesList(value: Array<CalendarSummary>): void;
  addWeekSummaries(value?: CalendarSummary, index?: number): CalendarSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SummaryRes.AsObject;
  static toObject(includeInstance: boolean, msg: SummaryRes): SummaryRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SummaryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SummaryRes;
  static deserializeBinaryFromReader(message: SummaryRes, reader: jspb.BinaryReader): SummaryRes;
}

export namespace SummaryRes {
  export type AsObject = {
    yearSummary?: CalendarSummary.AsObject,
    monthSummariesList: Array<CalendarSummary.AsObject>,
    weekSummariesList: Array<CalendarSummary.AsObject>,
  }
}

export class CalendarSummary extends jspb.Message {
  getCalendarNum(): number;
  setCalendarNum(value: number): void;

  hasSummary(): boolean;
  clearSummary(): void;
  getSummary(): TransactionSummary | undefined;
  setSummary(value?: TransactionSummary): void;

  clearTypeSummariesList(): void;
  getTypeSummariesList(): Array<IntegrationTypeSummary>;
  setTypeSummariesList(value: Array<IntegrationTypeSummary>): void;
  addTypeSummaries(value?: IntegrationTypeSummary, index?: number): IntegrationTypeSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalendarSummary.AsObject;
  static toObject(includeInstance: boolean, msg: CalendarSummary): CalendarSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalendarSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalendarSummary;
  static deserializeBinaryFromReader(message: CalendarSummary, reader: jspb.BinaryReader): CalendarSummary;
}

export namespace CalendarSummary {
  export type AsObject = {
    calendarNum: number,
    summary?: TransactionSummary.AsObject,
    typeSummariesList: Array<IntegrationTypeSummary.AsObject>,
  }
}

export class IntegrationTypeSummary extends jspb.Message {
  getIntegrationType(): api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap];
  setIntegrationType(value: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap]): void;

  hasIntegrationSummary(): boolean;
  clearIntegrationSummary(): void;
  getIntegrationSummary(): TransactionSummary | undefined;
  setIntegrationSummary(value?: TransactionSummary): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntegrationTypeSummary.AsObject;
  static toObject(includeInstance: boolean, msg: IntegrationTypeSummary): IntegrationTypeSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntegrationTypeSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntegrationTypeSummary;
  static deserializeBinaryFromReader(message: IntegrationTypeSummary, reader: jspb.BinaryReader): IntegrationTypeSummary;
}

export namespace IntegrationTypeSummary {
  export type AsObject = {
    integrationType: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap],
    integrationSummary?: TransactionSummary.AsObject,
  }
}

export class TransactionSummary extends jspb.Message {
  getTotalTransactionsAttempted(): number;
  setTotalTransactionsAttempted(value: number): void;

  getTotalTransactionsCompleted(): number;
  setTotalTransactionsCompleted(value: number): void;

  getTotalTransactionsFailed(): number;
  setTotalTransactionsFailed(value: number): void;

  getTotalAmountCollected(): number;
  setTotalAmountCollected(value: number): void;

  getAvgAmountCollected(): number;
  setAvgAmountCollected(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionSummary.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionSummary): TransactionSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionSummary;
  static deserializeBinaryFromReader(message: TransactionSummary, reader: jspb.BinaryReader): TransactionSummary;
}

export namespace TransactionSummary {
  export type AsObject = {
    totalTransactionsAttempted: number,
    totalTransactionsCompleted: number,
    totalTransactionsFailed: number,
    totalAmountCollected: number,
    avgAmountCollected: number,
  }
}

export class ListIntegrationTemplatesByConfigReq extends jspb.Message {
  getIntegrationConfigName(): string;
  setIntegrationConfigName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIntegrationTemplatesByConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListIntegrationTemplatesByConfigReq): ListIntegrationTemplatesByConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListIntegrationTemplatesByConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIntegrationTemplatesByConfigReq;
  static deserializeBinaryFromReader(message: ListIntegrationTemplatesByConfigReq, reader: jspb.BinaryReader): ListIntegrationTemplatesByConfigReq;
}

export namespace ListIntegrationTemplatesByConfigReq {
  export type AsObject = {
    integrationConfigName: string,
  }
}

export class ListIntegrationTemplatesByConfigRes extends jspb.Message {
  clearIntegrationTemplatesList(): void;
  getIntegrationTemplatesList(): Array<IntegrationTemplateInfo>;
  setIntegrationTemplatesList(value: Array<IntegrationTemplateInfo>): void;
  addIntegrationTemplates(value?: IntegrationTemplateInfo, index?: number): IntegrationTemplateInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIntegrationTemplatesByConfigRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListIntegrationTemplatesByConfigRes): ListIntegrationTemplatesByConfigRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListIntegrationTemplatesByConfigRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIntegrationTemplatesByConfigRes;
  static deserializeBinaryFromReader(message: ListIntegrationTemplatesByConfigRes, reader: jspb.BinaryReader): ListIntegrationTemplatesByConfigRes;
}

export namespace ListIntegrationTemplatesByConfigRes {
  export type AsObject = {
    integrationTemplatesList: Array<IntegrationTemplateInfo.AsObject>,
  }
}

export class IntegrationTemplateInfo extends jspb.Message {
  getBroadcastTemplateSid(): number;
  setBroadcastTemplateSid(value: number): void;

  getTemplateName(): string;
  setTemplateName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntegrationTemplateInfo.AsObject;
  static toObject(includeInstance: boolean, msg: IntegrationTemplateInfo): IntegrationTemplateInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntegrationTemplateInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntegrationTemplateInfo;
  static deserializeBinaryFromReader(message: IntegrationTemplateInfo, reader: jspb.BinaryReader): IntegrationTemplateInfo;
}

export namespace IntegrationTemplateInfo {
  export type AsObject = {
    broadcastTemplateSid: number,
    templateName: string,
  }
}

export class CopyPaymentLinkConfigReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyPaymentLinkConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: CopyPaymentLinkConfigReq): CopyPaymentLinkConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyPaymentLinkConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyPaymentLinkConfigReq;
  static deserializeBinaryFromReader(message: CopyPaymentLinkConfigReq, reader: jspb.BinaryReader): CopyPaymentLinkConfigReq;
}

export namespace CopyPaymentLinkConfigReq {
  export type AsObject = {
    id: string,
  }
}

export class CopyPaymentLinkConfigRes extends jspb.Message {
  getNewName(): string;
  setNewName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyPaymentLinkConfigRes.AsObject;
  static toObject(includeInstance: boolean, msg: CopyPaymentLinkConfigRes): CopyPaymentLinkConfigRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyPaymentLinkConfigRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyPaymentLinkConfigRes;
  static deserializeBinaryFromReader(message: CopyPaymentLinkConfigRes, reader: jspb.BinaryReader): CopyPaymentLinkConfigRes;
}

export namespace CopyPaymentLinkConfigRes {
  export type AsObject = {
    newName: string,
  }
}

export class ProfileName extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileName.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileName): ProfileName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProfileName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileName;
  static deserializeBinaryFromReader(message: ProfileName, reader: jspb.BinaryReader): ProfileName;
}

export namespace ProfileName {
  export type AsObject = {
    name: string,
  }
}

export class PaymentProfiles extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<PaymentProfile>;
  setValuesList(value: Array<PaymentProfile>): void;
  addValues(value?: PaymentProfile, index?: number): PaymentProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentProfiles.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentProfiles): PaymentProfiles.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentProfiles, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentProfiles;
  static deserializeBinaryFromReader(message: PaymentProfiles, reader: jspb.BinaryReader): PaymentProfiles;
}

export namespace PaymentProfiles {
  export type AsObject = {
    valuesList: Array<PaymentProfile.AsObject>,
  }
}

export class PaymentProfile extends jspb.Message {
  getVerification(): string;
  setVerification(value: string): void;

  getInvoice(): string;
  setInvoice(value: string): void;

  clearPaymentsList(): void;
  getPaymentsList(): Array<string>;
  setPaymentsList(value: Array<string>): void;
  addPayments(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentProfile.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentProfile): PaymentProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentProfile;
  static deserializeBinaryFromReader(message: PaymentProfile, reader: jspb.BinaryReader): PaymentProfile;
}

export namespace PaymentProfile {
  export type AsObject = {
    verification: string,
    invoice: string,
    paymentsList: Array<string>,
  }
}

export class UnknownField extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getReasonNeeded(): string;
  setReasonNeeded(value: string): void;

  clearPotentialSourcesList(): void;
  getPotentialSourcesList(): Array<api_commons_integrations_integrations_pb.FieldSourceMap[keyof api_commons_integrations_integrations_pb.FieldSourceMap]>;
  setPotentialSourcesList(value: Array<api_commons_integrations_integrations_pb.FieldSourceMap[keyof api_commons_integrations_integrations_pb.FieldSourceMap]>): void;
  addPotentialSources(value: api_commons_integrations_integrations_pb.FieldSourceMap[keyof api_commons_integrations_integrations_pb.FieldSourceMap], index?: number): api_commons_integrations_integrations_pb.FieldSourceMap[keyof api_commons_integrations_integrations_pb.FieldSourceMap];

  clearSuggestedFieldsList(): void;
  getSuggestedFieldsList(): Array<ProvidedField>;
  setSuggestedFieldsList(value: Array<ProvidedField>): void;
  addSuggestedFields(value?: ProvidedField, index?: number): ProvidedField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnknownField.AsObject;
  static toObject(includeInstance: boolean, msg: UnknownField): UnknownField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnknownField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnknownField;
  static deserializeBinaryFromReader(message: UnknownField, reader: jspb.BinaryReader): UnknownField;
}

export namespace UnknownField {
  export type AsObject = {
    name: string,
    displayName: string,
    reasonNeeded: string,
    potentialSourcesList: Array<api_commons_integrations_integrations_pb.FieldSourceMap[keyof api_commons_integrations_integrations_pb.FieldSourceMap]>,
    suggestedFieldsList: Array<ProvidedField.AsObject>,
  }
}

export class ProvidedField extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getAltName(): string;
  setAltName(value: string): void;

  getProvidedBy(): api_commons_integrations_integrations_pb.FieldSourceMap[keyof api_commons_integrations_integrations_pb.FieldSourceMap];
  setProvidedBy(value: api_commons_integrations_integrations_pb.FieldSourceMap[keyof api_commons_integrations_integrations_pb.FieldSourceMap]): void;

  getProvidedByDetailsNum(): number;
  setProvidedByDetailsNum(value: number): void;

  getProvidedByDetailsStr(): string;
  setProvidedByDetailsStr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProvidedField.AsObject;
  static toObject(includeInstance: boolean, msg: ProvidedField): ProvidedField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProvidedField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProvidedField;
  static deserializeBinaryFromReader(message: ProvidedField, reader: jspb.BinaryReader): ProvidedField;
}

export namespace ProvidedField {
  export type AsObject = {
    name: string,
    displayName: string,
    altName: string,
    providedBy: api_commons_integrations_integrations_pb.FieldSourceMap[keyof api_commons_integrations_integrations_pb.FieldSourceMap],
    providedByDetailsNum: number,
    providedByDetailsStr: string,
  }
}

export class Values extends jspb.Message {
  getValuesMap(): jspb.Map<string, Value>;
  clearValuesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Values.AsObject;
  static toObject(includeInstance: boolean, msg: Values): Values.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Values, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Values;
  static deserializeBinaryFromReader(message: Values, reader: jspb.BinaryReader): Values;
}

export namespace Values {
  export type AsObject = {
    valuesMap: Array<[string, Value.AsObject]>,
  }
}

export class Value extends jspb.Message {
  hasStrVal(): boolean;
  clearStrVal(): void;
  getStrVal(): string;
  setStrVal(value: string): void;

  hasNumVal(): boolean;
  clearNumVal(): void;
  getNumVal(): number;
  setNumVal(value: number): void;

  hasBoolVal(): boolean;
  clearBoolVal(): void;
  getBoolVal(): boolean;
  setBoolVal(value: boolean): void;

  hasTimeVal(): boolean;
  clearTimeVal(): void;
  getTimeVal(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeVal(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCompVal(): boolean;
  clearCompVal(): void;
  getCompVal(): CompositeVal | undefined;
  setCompVal(value?: CompositeVal): void;

  hasIntVal(): boolean;
  clearIntVal(): void;
  getIntVal(): number;
  setIntVal(value: number): void;

  getSensitive(): boolean;
  setSensitive(value: boolean): void;

  getValidation(): api_commons_integrations_integrations_pb.ValidationMap[keyof api_commons_integrations_integrations_pb.ValidationMap];
  setValidation(value: api_commons_integrations_integrations_pb.ValidationMap[keyof api_commons_integrations_integrations_pb.ValidationMap]): void;

  getValCase(): Value.ValCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Value.AsObject;
  static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Value;
  static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
  export type AsObject = {
    strVal: string,
    numVal: number,
    boolVal: boolean,
    timeVal?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    compVal?: CompositeVal.AsObject,
    intVal: number,
    sensitive: boolean,
    validation: api_commons_integrations_integrations_pb.ValidationMap[keyof api_commons_integrations_integrations_pb.ValidationMap],
  }

  export enum ValCase {
    VAL_NOT_SET = 0,
    STR_VAL = 1,
    NUM_VAL = 2,
    BOOL_VAL = 3,
    TIME_VAL = 4,
    COMP_VAL = 6,
    INT_VAL = 7,
  }
}

export class FieldOrStr extends jspb.Message {
  hasField(): boolean;
  clearField(): void;
  getField(): string;
  setField(value: string): void;

  hasStrVal(): boolean;
  clearStrVal(): void;
  getStrVal(): string;
  setStrVal(value: string): void;

  getValCase(): FieldOrStr.ValCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldOrStr.AsObject;
  static toObject(includeInstance: boolean, msg: FieldOrStr): FieldOrStr.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldOrStr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldOrStr;
  static deserializeBinaryFromReader(message: FieldOrStr, reader: jspb.BinaryReader): FieldOrStr;
}

export namespace FieldOrStr {
  export type AsObject = {
    field: string,
    strVal: string,
  }

  export enum ValCase {
    VAL_NOT_SET = 0,
    FIELD = 1,
    STR_VAL = 2,
  }
}

export class CompositeVal extends jspb.Message {
  clearPartsList(): void;
  getPartsList(): Array<FieldOrStr>;
  setPartsList(value: Array<FieldOrStr>): void;
  addParts(value?: FieldOrStr, index?: number): FieldOrStr;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompositeVal.AsObject;
  static toObject(includeInstance: boolean, msg: CompositeVal): CompositeVal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompositeVal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompositeVal;
  static deserializeBinaryFromReader(message: CompositeVal, reader: jspb.BinaryReader): CompositeVal;
}

export namespace CompositeVal {
  export type AsObject = {
    partsList: Array<FieldOrStr.AsObject>,
  }
}

export class Condition extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getOp(): api_commons_integrations_integrations_pb.CompareOperationMap[keyof api_commons_integrations_integrations_pb.CompareOperationMap];
  setOp(value: api_commons_integrations_integrations_pb.CompareOperationMap[keyof api_commons_integrations_integrations_pb.CompareOperationMap]): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Value | undefined;
  setValue(value?: Value): void;

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
    key: string,
    op: api_commons_integrations_integrations_pb.CompareOperationMap[keyof api_commons_integrations_integrations_pb.CompareOperationMap],
    value?: Value.AsObject,
  }
}

export class IntegrationConfig extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getIntegrationId(): api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap];
  setIntegrationId(value: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap]): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): Values | undefined;
  setParams(value?: Values): void;

  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasAlias(): boolean;
  clearAlias(): void;
  getAlias(): MapString | undefined;
  setAlias(value?: MapString): void;

  hasConds(): boolean;
  clearConds(): void;
  getConds(): Conditions | undefined;
  setConds(value?: Conditions): void;

  getMethodId(): api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap];
  setMethodId(value: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntegrationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: IntegrationConfig): IntegrationConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntegrationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntegrationConfig;
  static deserializeBinaryFromReader(message: IntegrationConfig, reader: jspb.BinaryReader): IntegrationConfig;
}

export namespace IntegrationConfig {
  export type AsObject = {
    id: string,
    integrationId: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap],
    name: string,
    description: string,
    params?: Values.AsObject,
    deleted: boolean,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    alias?: MapString.AsObject,
    conds?: Conditions.AsObject,
    methodId: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap],
  }
}

export class IntegrationTransaction extends jspb.Message {
  getIntegrationTransactionId(): string;
  setIntegrationTransactionId(value: string): void;

  getTaskId(): string;
  setTaskId(value: string): void;

  getIntegrationId(): api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap];
  setIntegrationId(value: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap]): void;

  getMethodId(): api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap];
  setMethodId(value: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap]): void;

  getTransactionType(): api_commons_integrations_integrations_pb.TransactionTypeMap[keyof api_commons_integrations_integrations_pb.TransactionTypeMap];
  setTransactionType(value: api_commons_integrations_integrations_pb.TransactionTypeMap[keyof api_commons_integrations_integrations_pb.TransactionTypeMap]): void;

  getRequestSource(): api_commons_integrations_integrations_pb.RequestSourceMap[keyof api_commons_integrations_integrations_pb.RequestSourceMap];
  setRequestSource(value: api_commons_integrations_integrations_pb.RequestSourceMap[keyof api_commons_integrations_integrations_pb.RequestSourceMap]): void;

  getResult(): api_commons_integrations_integrations_pb.TransactionResultMap[keyof api_commons_integrations_integrations_pb.TransactionResultMap];
  setResult(value: api_commons_integrations_integrations_pb.TransactionResultMap[keyof api_commons_integrations_integrations_pb.TransactionResultMap]): void;

  getAmountCollected(): number;
  setAmountCollected(value: number): void;

  hasRequestData(): boolean;
  clearRequestData(): void;
  getRequestData(): Values | undefined;
  setRequestData(value?: Values): void;

  hasResponseData(): boolean;
  clearResponseData(): void;
  getResponseData(): Values | undefined;
  setResponseData(value?: Values): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getConfigName(): string;
  setConfigName(value: string): void;

  hasConds(): boolean;
  clearConds(): void;
  getConds(): Conditions | undefined;
  setConds(value?: Conditions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntegrationTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: IntegrationTransaction): IntegrationTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntegrationTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntegrationTransaction;
  static deserializeBinaryFromReader(message: IntegrationTransaction, reader: jspb.BinaryReader): IntegrationTransaction;
}

export namespace IntegrationTransaction {
  export type AsObject = {
    integrationTransactionId: string,
    taskId: string,
    integrationId: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap],
    methodId: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap],
    transactionType: api_commons_integrations_integrations_pb.TransactionTypeMap[keyof api_commons_integrations_integrations_pb.TransactionTypeMap],
    requestSource: api_commons_integrations_integrations_pb.RequestSourceMap[keyof api_commons_integrations_integrations_pb.RequestSourceMap],
    result: api_commons_integrations_integrations_pb.TransactionResultMap[keyof api_commons_integrations_integrations_pb.TransactionResultMap],
    amountCollected: number,
    requestData?: Values.AsObject,
    responseData?: Values.AsObject,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    configName: string,
    conds?: Conditions.AsObject,
  }
}

export class MapString extends jspb.Message {
  getValuesMap(): jspb.Map<string, string>;
  clearValuesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapString.AsObject;
  static toObject(includeInstance: boolean, msg: MapString): MapString.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapString, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapString;
  static deserializeBinaryFromReader(message: MapString, reader: jspb.BinaryReader): MapString;
}

export namespace MapString {
  export type AsObject = {
    valuesMap: Array<[string, string]>,
  }
}

export class Conditions extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<Condition>;
  setValuesList(value: Array<Condition>): void;
  addValues(value?: Condition, index?: number): Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Conditions.AsObject;
  static toObject(includeInstance: boolean, msg: Conditions): Conditions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Conditions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Conditions;
  static deserializeBinaryFromReader(message: Conditions, reader: jspb.BinaryReader): Conditions;
}

export namespace Conditions {
  export type AsObject = {
    valuesList: Array<Condition.AsObject>,
  }
}

export class Task extends jspb.Message {
  getValuesMap(): jspb.Map<string, Value>;
  clearValuesMap(): void;
  getTaskId(): string;
  setTaskId(value: string): void;

  getSrc(): api_commons_integrations_integrations_pb.RequestSourceMap[keyof api_commons_integrations_integrations_pb.RequestSourceMap];
  setSrc(value: api_commons_integrations_integrations_pb.RequestSourceMap[keyof api_commons_integrations_integrations_pb.RequestSourceMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Task.AsObject;
  static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Task;
  static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
  export type AsObject = {
    valuesMap: Array<[string, Value.AsObject]>,
    taskId: string,
    src: api_commons_integrations_integrations_pb.RequestSourceMap[keyof api_commons_integrations_integrations_pb.RequestSourceMap],
  }
}

export class PortalConfigId extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortalConfigId.AsObject;
  static toObject(includeInstance: boolean, msg: PortalConfigId): PortalConfigId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PortalConfigId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortalConfigId;
  static deserializeBinaryFromReader(message: PortalConfigId, reader: jspb.BinaryReader): PortalConfigId;
}

export namespace PortalConfigId {
  export type AsObject = {
    id: string,
  }
}

export class PortalConfig extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getChatClientLink(): string;
  setChatClientLink(value: string): void;

  getContactEmail(): string;
  setContactEmail(value: string): void;

  getContactPhone(): string;
  setContactPhone(value: string): void;

  getPostalCode(): string;
  setPostalCode(value: string): void;

  getCity(): string;
  setCity(value: string): void;

  getState(): string;
  setState(value: string): void;

  getCompanyName(): string;
  setCompanyName(value: string): void;

  getLogo(): Uint8Array | string;
  getLogo_asU8(): Uint8Array;
  getLogo_asB64(): string;
  setLogo(value: Uint8Array | string): void;

  getPrimaryColor(): string;
  setPrimaryColor(value: string): void;

  getSecondaryColor(): string;
  setSecondaryColor(value: string): void;

  getStreetAddress(): string;
  setStreetAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortalConfig.AsObject;
  static toObject(includeInstance: boolean, msg: PortalConfig): PortalConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PortalConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortalConfig;
  static deserializeBinaryFromReader(message: PortalConfig, reader: jspb.BinaryReader): PortalConfig;
}

export namespace PortalConfig {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    chatClientLink: string,
    contactEmail: string,
    contactPhone: string,
    postalCode: string,
    city: string,
    state: string,
    companyName: string,
    logo: Uint8Array | string,
    primaryColor: string,
    secondaryColor: string,
    streetAddress: string,
  }
}

export class PortalLinkId extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortalLinkId.AsObject;
  static toObject(includeInstance: boolean, msg: PortalLinkId): PortalLinkId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PortalLinkId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortalLinkId;
  static deserializeBinaryFromReader(message: PortalLinkId, reader: jspb.BinaryReader): PortalLinkId;
}

export namespace PortalLinkId {
  export type AsObject = {
    id: string,
  }
}

export class PortalLink extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getPortalId(): string;
  setPortalId(value: string): void;

  getPluginInstanceId(): string;
  setPluginInstanceId(value: string): void;

  getPortalConfigId(): string;
  setPortalConfigId(value: string): void;

  getTaskId(): string;
  setTaskId(value: string): void;

  getDataMap(): jspb.Map<string, Value>;
  clearDataMap(): void;
  getMetadataMap(): jspb.Map<string, Value>;
  clearMetadataMap(): void;
  hasLastEdited(): boolean;
  clearLastEdited(): void;
  getLastEdited(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastEdited(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortalLink.AsObject;
  static toObject(includeInstance: boolean, msg: PortalLink): PortalLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PortalLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortalLink;
  static deserializeBinaryFromReader(message: PortalLink, reader: jspb.BinaryReader): PortalLink;
}

export namespace PortalLink {
  export type AsObject = {
    id: string,
    portalId: string,
    pluginInstanceId: string,
    portalConfigId: string,
    taskId: string,
    dataMap: Array<[string, Value.AsObject]>,
    metadataMap: Array<[string, Value.AsObject]>,
    lastEdited?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class PortalId extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortalId.AsObject;
  static toObject(includeInstance: boolean, msg: PortalId): PortalId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PortalId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortalId;
  static deserializeBinaryFromReader(message: PortalId, reader: jspb.BinaryReader): PortalId;
}

export namespace PortalId {
  export type AsObject = {
    id: string,
  }
}

export class Portal extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getPortalConfigId(): string;
  setPortalConfigId(value: string): void;

  clearPluginInstIdsList(): void;
  getPluginInstIdsList(): Array<string>;
  setPluginInstIdsList(value: Array<string>): void;
  addPluginInstIds(value: string, index?: number): string;

  hasPtype(): boolean;
  clearPtype(): void;
  getPtype(): PortalType | undefined;
  setPtype(value?: PortalType): void;

  hasLastEdited(): boolean;
  clearLastEdited(): void;
  getLastEdited(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastEdited(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Portal.AsObject;
  static toObject(includeInstance: boolean, msg: Portal): Portal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Portal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Portal;
  static deserializeBinaryFromReader(message: Portal, reader: jspb.BinaryReader): Portal;
}

export namespace Portal {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    portalConfigId: string,
    pluginInstIdsList: Array<string>,
    ptype?: PortalType.AsObject,
    lastEdited?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class PortalText extends jspb.Message {
  getVerificationHeader(): string;
  setVerificationHeader(value: string): void;

  getVerificationFooter(): string;
  setVerificationFooter(value: string): void;

  getPaymentHeader(): string;
  setPaymentHeader(value: string): void;

  getPaymentFooter(): string;
  setPaymentFooter(value: string): void;

  getReceiptHeader(): string;
  setReceiptHeader(value: string): void;

  getReceiptFooter(): string;
  setReceiptFooter(value: string): void;

  getInvoiceHeader(): string;
  setInvoiceHeader(value: string): void;

  getInvoiceFooter(): string;
  setInvoiceFooter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortalText.AsObject;
  static toObject(includeInstance: boolean, msg: PortalText): PortalText.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PortalText, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortalText;
  static deserializeBinaryFromReader(message: PortalText, reader: jspb.BinaryReader): PortalText;
}

export namespace PortalText {
  export type AsObject = {
    verificationHeader: string,
    verificationFooter: string,
    paymentHeader: string,
    paymentFooter: string,
    receiptHeader: string,
    receiptFooter: string,
    invoiceHeader: string,
    invoiceFooter: string,
  }
}

export class PortalType extends jspb.Message {
  hasPaymentPortal(): boolean;
  clearPaymentPortal(): void;
  getPaymentPortal(): PaymentPortal | undefined;
  setPaymentPortal(value?: PaymentPortal): void;

  hasIvrPortal(): boolean;
  clearIvrPortal(): void;
  getIvrPortal(): IVRPortal | undefined;
  setIvrPortal(value?: IVRPortal): void;

  getDataCase(): PortalType.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortalType.AsObject;
  static toObject(includeInstance: boolean, msg: PortalType): PortalType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PortalType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortalType;
  static deserializeBinaryFromReader(message: PortalType, reader: jspb.BinaryReader): PortalType;
}

export namespace PortalType {
  export type AsObject = {
    paymentPortal?: PaymentPortal.AsObject,
    ivrPortal?: IVRPortal.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    PAYMENT_PORTAL = 1,
    IVR_PORTAL = 2,
  }
}

export class PaymentPortal extends jspb.Message {
  hasVerification(): boolean;
  clearVerification(): void;
  getVerification(): api_commons_integrations_integrations_pb.VerificationFlow | undefined;
  setVerification(value?: api_commons_integrations_integrations_pb.VerificationFlow): void;

  hasInvoice(): boolean;
  clearInvoice(): void;
  getInvoice(): api_commons_integrations_integrations_pb.InvoiceFlow | undefined;
  setInvoice(value?: api_commons_integrations_integrations_pb.InvoiceFlow): void;

  clearPaymentsList(): void;
  getPaymentsList(): Array<api_commons_integrations_integrations_pb.PaymentFlow>;
  setPaymentsList(value: Array<api_commons_integrations_integrations_pb.PaymentFlow>): void;
  addPayments(value?: api_commons_integrations_integrations_pb.PaymentFlow, index?: number): api_commons_integrations_integrations_pb.PaymentFlow;

  hasPortalText(): boolean;
  clearPortalText(): void;
  getPortalText(): PortalText | undefined;
  setPortalText(value?: PortalText): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentPortal.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentPortal): PaymentPortal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentPortal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentPortal;
  static deserializeBinaryFromReader(message: PaymentPortal, reader: jspb.BinaryReader): PaymentPortal;
}

export namespace PaymentPortal {
  export type AsObject = {
    verification?: api_commons_integrations_integrations_pb.VerificationFlow.AsObject,
    invoice?: api_commons_integrations_integrations_pb.InvoiceFlow.AsObject,
    paymentsList: Array<api_commons_integrations_integrations_pb.PaymentFlow.AsObject>,
    portalText?: PortalText.AsObject,
  }
}

export class IVRPortal extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IVRPortal.AsObject;
  static toObject(includeInstance: boolean, msg: IVRPortal): IVRPortal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IVRPortal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IVRPortal;
  static deserializeBinaryFromReader(message: IVRPortal, reader: jspb.BinaryReader): IVRPortal;
}

export namespace IVRPortal {
  export type AsObject = {
  }
}

export class PluginInstanceId extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PluginInstanceId.AsObject;
  static toObject(includeInstance: boolean, msg: PluginInstanceId): PluginInstanceId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PluginInstanceId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PluginInstanceId;
  static deserializeBinaryFromReader(message: PluginInstanceId, reader: jspb.BinaryReader): PluginInstanceId;
}

export namespace PluginInstanceId {
  export type AsObject = {
    id: string,
  }
}

export class PluginInstance extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getPluginDefinition(): string;
  setPluginDefinition(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Values | undefined;
  setData(value?: Values): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): Values | undefined;
  setMetadata(value?: Values): void;

  hasLastEdited(): boolean;
  clearLastEdited(): void;
  getLastEdited(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastEdited(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMethodId(): api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap];
  setMethodId(value: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap]): void;

  clearDisplayMethodsList(): void;
  getDisplayMethodsList(): Array<api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap]>;
  setDisplayMethodsList(value: Array<api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap]>): void;
  addDisplayMethods(value: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap], index?: number): api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PluginInstance.AsObject;
  static toObject(includeInstance: boolean, msg: PluginInstance): PluginInstance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PluginInstance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PluginInstance;
  static deserializeBinaryFromReader(message: PluginInstance, reader: jspb.BinaryReader): PluginInstance;
}

export namespace PluginInstance {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    pluginDefinition: string,
    data?: Values.AsObject,
    metadata?: Values.AsObject,
    lastEdited?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    methodId: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap],
    displayMethodsList: Array<api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap]>,
  }
}

export class PortalLinkTransactionRow extends jspb.Message {
  getViews(): number;
  setViews(value: number): void;

  getVerifyAttempts(): number;
  setVerifyAttempts(value: number): void;

  getVerifySuccesses(): number;
  setVerifySuccesses(value: number): void;

  getPaymentAttempts(): number;
  setPaymentAttempts(value: number): void;

  getPaymentSuccesses(): number;
  setPaymentSuccesses(value: number): void;

  getPaymentAmount(): number;
  setPaymentAmount(value: number): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getLinkDataMap(): jspb.Map<string, Value>;
  clearLinkDataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortalLinkTransactionRow.AsObject;
  static toObject(includeInstance: boolean, msg: PortalLinkTransactionRow): PortalLinkTransactionRow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PortalLinkTransactionRow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortalLinkTransactionRow;
  static deserializeBinaryFromReader(message: PortalLinkTransactionRow, reader: jspb.BinaryReader): PortalLinkTransactionRow;
}

export namespace PortalLinkTransactionRow {
  export type AsObject = {
    views: number,
    verifyAttempts: number,
    verifySuccesses: number,
    paymentAttempts: number,
    paymentSuccesses: number,
    paymentAmount: number,
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    linkDataMap: Array<[string, Value.AsObject]>,
  }
}

export class GetPortalLinksByDateRangeReq extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getRegionId(): string;
  setRegionId(value: string): void;

  hasStart(): boolean;
  clearStart(): void;
  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageNum(): number;
  setPageNum(value: number): void;

  getMethodId(): api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap];
  setMethodId(value: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPortalLinksByDateRangeReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetPortalLinksByDateRangeReq): GetPortalLinksByDateRangeReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPortalLinksByDateRangeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPortalLinksByDateRangeReq;
  static deserializeBinaryFromReader(message: GetPortalLinksByDateRangeReq, reader: jspb.BinaryReader): GetPortalLinksByDateRangeReq;
}

export namespace GetPortalLinksByDateRangeReq {
  export type AsObject = {
    orgId: string,
    regionId: string,
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    end?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    pageSize: number,
    pageNum: number,
    methodId: api_commons_integrations_integrations_pb.RequestMethodMap[keyof api_commons_integrations_integrations_pb.RequestMethodMap],
  }
}

export class GetPortalLinksByDateRangeRes extends jspb.Message {
  clearRowsList(): void;
  getRowsList(): Array<PortalLinkTransactionRow>;
  setRowsList(value: Array<PortalLinkTransactionRow>): void;
  addRows(value?: PortalLinkTransactionRow, index?: number): PortalLinkTransactionRow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPortalLinksByDateRangeRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetPortalLinksByDateRangeRes): GetPortalLinksByDateRangeRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPortalLinksByDateRangeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPortalLinksByDateRangeRes;
  static deserializeBinaryFromReader(message: GetPortalLinksByDateRangeRes, reader: jspb.BinaryReader): GetPortalLinksByDateRangeRes;
}

export namespace GetPortalLinksByDateRangeRes {
  export type AsObject = {
    rowsList: Array<PortalLinkTransactionRow.AsObject>,
  }
}

