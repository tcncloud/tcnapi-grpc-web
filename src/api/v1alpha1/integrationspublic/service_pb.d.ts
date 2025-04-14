// package: api.v1alpha1.integrationspublic
// file: api/v1alpha1/integrationspublic/service.proto

import * as jspb from "google-protobuf";
import * as api_commons_acd_pb from "../../../api/commons/acd_pb";
import * as api_commons_integrations_integrations_pb from "../../../api/commons/integrations/integrations_pb";
import * as api_v1alpha1_integrations_portals_pb from "../../../api/v1alpha1/integrations/portals_pb";
import * as api_v1alpha1_integrations_service_pb from "../../../api/v1alpha1/integrations/service_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_money_pb from "../../../google/type/money_pb";

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

export class GetLinkDataReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): PortalLinkId | undefined;
  setEntity(value?: PortalLinkId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLinkDataReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetLinkDataReq): GetLinkDataReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLinkDataReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLinkDataReq;
  static deserializeBinaryFromReader(message: GetLinkDataReq, reader: jspb.BinaryReader): GetLinkDataReq;
}

export namespace GetLinkDataReq {
  export type AsObject = {
    entity?: PortalLinkId.AsObject,
  }
}

export class GetLinkDataRes extends jspb.Message {
  getComplete(): boolean;
  setComplete(value: boolean): void;

  getExpired(): boolean;
  setExpired(value: boolean): void;

  hasPortalConfig(): boolean;
  clearPortalConfig(): void;
  getPortalConfig(): PortalConfig | undefined;
  setPortalConfig(value?: PortalConfig): void;

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

  clearFlowFormsList(): void;
  getFlowFormsList(): Array<GetLinkDataRes.FieldNames>;
  setFlowFormsList(value: Array<GetLinkDataRes.FieldNames>): void;
  addFlowForms(value?: GetLinkDataRes.FieldNames, index?: number): GetLinkDataRes.FieldNames;

  hasPortalText(): boolean;
  clearPortalText(): void;
  getPortalText(): PortalText | undefined;
  setPortalText(value?: PortalText): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLinkDataRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetLinkDataRes): GetLinkDataRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLinkDataRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLinkDataRes;
  static deserializeBinaryFromReader(message: GetLinkDataRes, reader: jspb.BinaryReader): GetLinkDataRes;
}

export namespace GetLinkDataRes {
  export type AsObject = {
    complete: boolean,
    expired: boolean,
    portalConfig?: PortalConfig.AsObject,
    verification?: api_commons_integrations_integrations_pb.VerificationFlow.AsObject,
    invoice?: api_commons_integrations_integrations_pb.InvoiceFlow.AsObject,
    paymentsList: Array<api_commons_integrations_integrations_pb.PaymentFlow.AsObject>,
    flowFormsList: Array<GetLinkDataRes.FieldNames.AsObject>,
    portalText?: PortalText.AsObject,
  }

  export class FieldNames extends jspb.Message {
    hasFlow(): boolean;
    clearFlow(): void;
    getFlow(): api_commons_integrations_integrations_pb.Flow | undefined;
    setFlow(value?: api_commons_integrations_integrations_pb.Flow): void;

    clearFieldNamesList(): void;
    getFieldNamesList(): Array<string>;
    setFieldNamesList(value: Array<string>): void;
    addFieldNames(value: string, index?: number): string;

    clearFieldsList(): void;
    getFieldsList(): Array<api_commons_integrations_integrations_pb.FieldDefinition>;
    setFieldsList(value: Array<api_commons_integrations_integrations_pb.FieldDefinition>): void;
    addFields(value?: api_commons_integrations_integrations_pb.FieldDefinition, index?: number): api_commons_integrations_integrations_pb.FieldDefinition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FieldNames.AsObject;
    static toObject(includeInstance: boolean, msg: FieldNames): FieldNames.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FieldNames, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FieldNames;
    static deserializeBinaryFromReader(message: FieldNames, reader: jspb.BinaryReader): FieldNames;
  }

  export namespace FieldNames {
    export type AsObject = {
      flow?: api_commons_integrations_integrations_pb.Flow.AsObject,
      fieldNamesList: Array<string>,
      fieldsList: Array<api_commons_integrations_integrations_pb.FieldDefinition.AsObject>,
    }
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

export class SubmitVerificationReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): PortalLinkId | undefined;
  setEntity(value?: PortalLinkId): void;

  getVerificationFieldsMap(): jspb.Map<string, Value>;
  clearVerificationFieldsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitVerificationReq.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitVerificationReq): SubmitVerificationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubmitVerificationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitVerificationReq;
  static deserializeBinaryFromReader(message: SubmitVerificationReq, reader: jspb.BinaryReader): SubmitVerificationReq;
}

export namespace SubmitVerificationReq {
  export type AsObject = {
    entity?: PortalLinkId.AsObject,
    verificationFieldsMap: Array<[string, Value.AsObject]>,
  }
}

export class SubmitVerificationRes extends jspb.Message {
  getVerified(): boolean;
  setVerified(value: boolean): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitVerificationRes.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitVerificationRes): SubmitVerificationRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubmitVerificationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitVerificationRes;
  static deserializeBinaryFromReader(message: SubmitVerificationRes, reader: jspb.BinaryReader): SubmitVerificationRes;
}

export namespace SubmitVerificationRes {
  export type AsObject = {
    verified: boolean,
    sessionId: string,
  }
}

export class SessionKeepAliveReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): PortalLinkId | undefined;
  setEntity(value?: PortalLinkId): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionKeepAliveReq.AsObject;
  static toObject(includeInstance: boolean, msg: SessionKeepAliveReq): SessionKeepAliveReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SessionKeepAliveReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionKeepAliveReq;
  static deserializeBinaryFromReader(message: SessionKeepAliveReq, reader: jspb.BinaryReader): SessionKeepAliveReq;
}

export namespace SessionKeepAliveReq {
  export type AsObject = {
    entity?: PortalLinkId.AsObject,
    sessionId: string,
  }
}

export class SessionKeepAliveRes extends jspb.Message {
  getOk(): boolean;
  setOk(value: boolean): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionKeepAliveRes.AsObject;
  static toObject(includeInstance: boolean, msg: SessionKeepAliveRes): SessionKeepAliveRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SessionKeepAliveRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionKeepAliveRes;
  static deserializeBinaryFromReader(message: SessionKeepAliveRes, reader: jspb.BinaryReader): SessionKeepAliveRes;
}

export namespace SessionKeepAliveRes {
  export type AsObject = {
    ok: boolean,
    sessionId: string,
  }
}

export class GetInvoiceReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): PortalLinkId | undefined;
  setEntity(value?: PortalLinkId): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInvoiceReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetInvoiceReq): GetInvoiceReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInvoiceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInvoiceReq;
  static deserializeBinaryFromReader(message: GetInvoiceReq, reader: jspb.BinaryReader): GetInvoiceReq;
}

export namespace GetInvoiceReq {
  export type AsObject = {
    entity?: PortalLinkId.AsObject,
    sessionId: string,
  }
}

export class GetInvoiceRes extends jspb.Message {
  getFieldsMap(): jspb.Map<string, Value>;
  clearFieldsMap(): void;
  getAmountDue(): number;
  setAmountDue(value: number): void;

  getAmountDueKey(): string;
  setAmountDueKey(value: string): void;

  hasInvoices(): boolean;
  clearInvoices(): void;
  getInvoices(): api_commons_integrations_integrations_pb.Invoices | undefined;
  setInvoices(value?: api_commons_integrations_integrations_pb.Invoices): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInvoiceRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetInvoiceRes): GetInvoiceRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInvoiceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInvoiceRes;
  static deserializeBinaryFromReader(message: GetInvoiceRes, reader: jspb.BinaryReader): GetInvoiceRes;
}

export namespace GetInvoiceRes {
  export type AsObject = {
    fieldsMap: Array<[string, Value.AsObject]>,
    amountDue: number,
    amountDueKey: string,
    invoices?: api_commons_integrations_integrations_pb.Invoices.AsObject,
  }
}

export class SubmitPaymentReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): PortalLinkId | undefined;
  setEntity(value?: PortalLinkId): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  getPaymentFieldsMap(): jspb.Map<string, Value>;
  clearPaymentFieldsMap(): void;
  hasPaymentFlow(): boolean;
  clearPaymentFlow(): void;
  getPaymentFlow(): api_commons_integrations_integrations_pb.PaymentFlow | undefined;
  setPaymentFlow(value?: api_commons_integrations_integrations_pb.PaymentFlow): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitPaymentReq.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitPaymentReq): SubmitPaymentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubmitPaymentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitPaymentReq;
  static deserializeBinaryFromReader(message: SubmitPaymentReq, reader: jspb.BinaryReader): SubmitPaymentReq;
}

export namespace SubmitPaymentReq {
  export type AsObject = {
    entity?: PortalLinkId.AsObject,
    sessionId: string,
    paymentFieldsMap: Array<[string, Value.AsObject]>,
    paymentFlow?: api_commons_integrations_integrations_pb.PaymentFlow.AsObject,
  }
}

export class SubmitPaymentRes extends jspb.Message {
  getFieldsMap(): jspb.Map<string, Value>;
  clearFieldsMap(): void;
  getAmountPaid(): number;
  setAmountPaid(value: number): void;

  getAmountPaidKey(): string;
  setAmountPaidKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitPaymentRes.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitPaymentRes): SubmitPaymentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubmitPaymentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitPaymentRes;
  static deserializeBinaryFromReader(message: SubmitPaymentRes, reader: jspb.BinaryReader): SubmitPaymentRes;
}

export namespace SubmitPaymentRes {
  export type AsObject = {
    fieldsMap: Array<[string, Value.AsObject]>,
    amountPaid: number,
    amountPaidKey: string,
  }
}

export class GetReceiptReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): PortalLinkId | undefined;
  setEntity(value?: PortalLinkId): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReceiptReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetReceiptReq): GetReceiptReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReceiptReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReceiptReq;
  static deserializeBinaryFromReader(message: GetReceiptReq, reader: jspb.BinaryReader): GetReceiptReq;
}

export namespace GetReceiptReq {
  export type AsObject = {
    entity?: PortalLinkId.AsObject,
    sessionId: string,
  }
}

export class GetReceiptRes extends jspb.Message {
  getReceiptId(): string;
  setReceiptId(value: string): void;

  getRequestMap(): jspb.Map<string, Value>;
  clearRequestMap(): void;
  getResponseMap(): jspb.Map<string, Value>;
  clearResponseMap(): void;
  getAmountPaid(): number;
  setAmountPaid(value: number): void;

  getAmountPaidKey(): string;
  setAmountPaidKey(value: string): void;

  hasPaymentFlow(): boolean;
  clearPaymentFlow(): void;
  getPaymentFlow(): api_commons_integrations_integrations_pb.PaymentFlow | undefined;
  setPaymentFlow(value?: api_commons_integrations_integrations_pb.PaymentFlow): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReceiptRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetReceiptRes): GetReceiptRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReceiptRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReceiptRes;
  static deserializeBinaryFromReader(message: GetReceiptRes, reader: jspb.BinaryReader): GetReceiptRes;
}

export namespace GetReceiptRes {
  export type AsObject = {
    receiptId: string,
    requestMap: Array<[string, Value.AsObject]>,
    responseMap: Array<[string, Value.AsObject]>,
    amountPaid: number,
    amountPaidKey: string,
    paymentFlow?: api_commons_integrations_integrations_pb.PaymentFlow.AsObject,
  }
}

export class ProcessWorkflowReq extends jspb.Message {
  getPortalLinkId(): string;
  setPortalLinkId(value: string): void;

  getPortalId(): string;
  setPortalId(value: string): void;

  getSegment(): number;
  setSegment(value: number): void;

  getChoice(): number;
  setChoice(value: number): void;

  getParamsMap(): jspb.Map<string, Value>;
  clearParamsMap(): void;
  getRequestOrigin(): api_commons_integrations_integrations_pb.RequestOriginMap[keyof api_commons_integrations_integrations_pb.RequestOriginMap];
  setRequestOrigin(value: api_commons_integrations_integrations_pb.RequestOriginMap[keyof api_commons_integrations_integrations_pb.RequestOriginMap]): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessWorkflowReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessWorkflowReq): ProcessWorkflowReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessWorkflowReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessWorkflowReq;
  static deserializeBinaryFromReader(message: ProcessWorkflowReq, reader: jspb.BinaryReader): ProcessWorkflowReq;
}

export namespace ProcessWorkflowReq {
  export type AsObject = {
    portalLinkId: string,
    portalId: string,
    segment: number,
    choice: number,
    paramsMap: Array<[string, Value.AsObject]>,
    requestOrigin: api_commons_integrations_integrations_pb.RequestOriginMap[keyof api_commons_integrations_integrations_pb.RequestOriginMap],
    sessionId: string,
  }
}

export class ProcessWorkflowRes extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getDataMap(): jspb.Map<string, Value>;
  clearDataMap(): void;
  getSessionId(): string;
  setSessionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessWorkflowRes.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessWorkflowRes): ProcessWorkflowRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessWorkflowRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessWorkflowRes;
  static deserializeBinaryFromReader(message: ProcessWorkflowRes, reader: jspb.BinaryReader): ProcessWorkflowRes;
}

export namespace ProcessWorkflowRes {
  export type AsObject = {
    success: boolean,
    dataMap: Array<[string, Value.AsObject]>,
    sessionId: string,
  }
}

export class GetLinkDetailsReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): PortalLinkId | undefined;
  setEntity(value?: PortalLinkId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLinkDetailsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetLinkDetailsReq): GetLinkDetailsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLinkDetailsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLinkDetailsReq;
  static deserializeBinaryFromReader(message: GetLinkDetailsReq, reader: jspb.BinaryReader): GetLinkDetailsReq;
}

export namespace GetLinkDetailsReq {
  export type AsObject = {
    entity?: PortalLinkId.AsObject,
  }
}

export class GetLinkDetailsRes extends jspb.Message {
  hasPortal(): boolean;
  clearPortal(): void;
  getPortal(): api_v1alpha1_integrations_service_pb.Portal | undefined;
  setPortal(value?: api_v1alpha1_integrations_service_pb.Portal): void;

  hasPortalConfig(): boolean;
  clearPortalConfig(): void;
  getPortalConfig(): PortalConfig | undefined;
  setPortalConfig(value?: PortalConfig): void;

  getExpired(): boolean;
  setExpired(value: boolean): void;

  getCompleted(): boolean;
  setCompleted(value: boolean): void;

  hasPortalDefinition(): boolean;
  clearPortalDefinition(): void;
  getPortalDefinition(): api_v1alpha1_integrations_portals_pb.PortalDefinition | undefined;
  setPortalDefinition(value?: api_v1alpha1_integrations_portals_pb.PortalDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLinkDetailsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetLinkDetailsRes): GetLinkDetailsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLinkDetailsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLinkDetailsRes;
  static deserializeBinaryFromReader(message: GetLinkDetailsRes, reader: jspb.BinaryReader): GetLinkDetailsRes;
}

export namespace GetLinkDetailsRes {
  export type AsObject = {
    portal?: api_v1alpha1_integrations_service_pb.Portal.AsObject,
    portalConfig?: PortalConfig.AsObject,
    expired: boolean,
    completed: boolean,
    portalDefinition?: api_v1alpha1_integrations_portals_pb.PortalDefinition.AsObject,
  }
}

export class CalculateFeesReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): PortalLinkId | undefined;
  setEntity(value?: PortalLinkId): void;

  clearFeesList(): void;
  getFeesList(): Array<api_commons_integrations_integrations_pb.Fee>;
  setFeesList(value: Array<api_commons_integrations_integrations_pb.Fee>): void;
  addFees(value?: api_commons_integrations_integrations_pb.Fee, index?: number): api_commons_integrations_integrations_pb.Fee;

  getParamsMap(): jspb.Map<string, Value>;
  clearParamsMap(): void;
  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getRequestOrigin(): api_commons_integrations_integrations_pb.RequestOriginMap[keyof api_commons_integrations_integrations_pb.RequestOriginMap];
  setRequestOrigin(value: api_commons_integrations_integrations_pb.RequestOriginMap[keyof api_commons_integrations_integrations_pb.RequestOriginMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalculateFeesReq.AsObject;
  static toObject(includeInstance: boolean, msg: CalculateFeesReq): CalculateFeesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalculateFeesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalculateFeesReq;
  static deserializeBinaryFromReader(message: CalculateFeesReq, reader: jspb.BinaryReader): CalculateFeesReq;
}

export namespace CalculateFeesReq {
  export type AsObject = {
    entity?: PortalLinkId.AsObject,
    feesList: Array<api_commons_integrations_integrations_pb.Fee.AsObject>,
    paramsMap: Array<[string, Value.AsObject]>,
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    requestOrigin: api_commons_integrations_integrations_pb.RequestOriginMap[keyof api_commons_integrations_integrations_pb.RequestOriginMap],
  }
}

export class CalculateFeesRes extends jspb.Message {
  getCalculatedFeesMap(): jspb.Map<string, google_type_money_pb.Money>;
  clearCalculatedFeesMap(): void;
  hasTotalAmountDue(): boolean;
  clearTotalAmountDue(): void;
  getTotalAmountDue(): google_type_money_pb.Money | undefined;
  setTotalAmountDue(value?: google_type_money_pb.Money): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalculateFeesRes.AsObject;
  static toObject(includeInstance: boolean, msg: CalculateFeesRes): CalculateFeesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalculateFeesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalculateFeesRes;
  static deserializeBinaryFromReader(message: CalculateFeesRes, reader: jspb.BinaryReader): CalculateFeesRes;
}

export namespace CalculateFeesRes {
  export type AsObject = {
    calculatedFeesMap: Array<[string, google_type_money_pb.Money.AsObject]>,
    totalAmountDue?: google_type_money_pb.Money.AsObject,
  }
}

export class IntegrationSettings extends jspb.Message {
  clearAllowedIntegrationsList(): void;
  getAllowedIntegrationsList(): Array<api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap]>;
  setAllowedIntegrationsList(value: Array<api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap]>): void;
  addAllowedIntegrations(value: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap], index?: number): api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntegrationSettings.AsObject;
  static toObject(includeInstance: boolean, msg: IntegrationSettings): IntegrationSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntegrationSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntegrationSettings;
  static deserializeBinaryFromReader(message: IntegrationSettings, reader: jspb.BinaryReader): IntegrationSettings;
}

export namespace IntegrationSettings {
  export type AsObject = {
    allowedIntegrationsList: Array<api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap]>,
  }
}

export class GetIntegrationSettingsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIntegrationSettingsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetIntegrationSettingsReq): GetIntegrationSettingsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIntegrationSettingsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIntegrationSettingsReq;
  static deserializeBinaryFromReader(message: GetIntegrationSettingsReq, reader: jspb.BinaryReader): GetIntegrationSettingsReq;
}

export namespace GetIntegrationSettingsReq {
  export type AsObject = {
  }
}

export class GetIntegrationSettingsRes extends jspb.Message {
  clearAllowedIntegrationsList(): void;
  getAllowedIntegrationsList(): Array<api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap]>;
  setAllowedIntegrationsList(value: Array<api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap]>): void;
  addAllowedIntegrations(value: api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap], index?: number): api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIntegrationSettingsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetIntegrationSettingsRes): GetIntegrationSettingsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIntegrationSettingsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIntegrationSettingsRes;
  static deserializeBinaryFromReader(message: GetIntegrationSettingsRes, reader: jspb.BinaryReader): GetIntegrationSettingsRes;
}

export namespace GetIntegrationSettingsRes {
  export type AsObject = {
    allowedIntegrationsList: Array<api_commons_integrations_integrations_pb.IntegrationTypeMap[keyof api_commons_integrations_integrations_pb.IntegrationTypeMap]>,
  }
}

export class UpsertIntegrationSettingsReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): IntegrationSettings | undefined;
  setEntity(value?: IntegrationSettings): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertIntegrationSettingsReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertIntegrationSettingsReq): UpsertIntegrationSettingsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertIntegrationSettingsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertIntegrationSettingsReq;
  static deserializeBinaryFromReader(message: UpsertIntegrationSettingsReq, reader: jspb.BinaryReader): UpsertIntegrationSettingsReq;
}

export namespace UpsertIntegrationSettingsReq {
  export type AsObject = {
    entity?: IntegrationSettings.AsObject,
  }
}

export class UpsertIntegrationSettingsRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertIntegrationSettingsRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertIntegrationSettingsRes): UpsertIntegrationSettingsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertIntegrationSettingsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertIntegrationSettingsRes;
  static deserializeBinaryFromReader(message: UpsertIntegrationSettingsRes, reader: jspb.BinaryReader): UpsertIntegrationSettingsRes;
}

export namespace UpsertIntegrationSettingsRes {
  export type AsObject = {
  }
}

