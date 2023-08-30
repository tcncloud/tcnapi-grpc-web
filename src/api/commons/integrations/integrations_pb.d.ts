// package: api.commons.integrations
// file: api/commons/integrations/integrations.proto

import * as jspb from "google-protobuf";

export class Invoices extends jspb.Message {
  clearTopLevelFieldsList(): void;
  getTopLevelFieldsList(): Array<InvoiceField>;
  setTopLevelFieldsList(value: Array<InvoiceField>): void;
  addTopLevelFields(value?: InvoiceField, index?: number): InvoiceField;

  clearInvoicesList(): void;
  getInvoicesList(): Array<Invoice>;
  setInvoicesList(value: Array<Invoice>): void;
  addInvoices(value?: Invoice, index?: number): Invoice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Invoices.AsObject;
  static toObject(includeInstance: boolean, msg: Invoices): Invoices.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Invoices, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Invoices;
  static deserializeBinaryFromReader(message: Invoices, reader: jspb.BinaryReader): Invoices;
}

export namespace Invoices {
  export type AsObject = {
    topLevelFieldsList: Array<InvoiceField.AsObject>,
    invoicesList: Array<Invoice.AsObject>,
  }
}

export class Invoice extends jspb.Message {
  clearTopLevelFieldsList(): void;
  getTopLevelFieldsList(): Array<InvoiceField>;
  setTopLevelFieldsList(value: Array<InvoiceField>): void;
  addTopLevelFields(value?: InvoiceField, index?: number): InvoiceField;

  clearItemsList(): void;
  getItemsList(): Array<Item>;
  setItemsList(value: Array<Item>): void;
  addItems(value?: Item, index?: number): Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Invoice.AsObject;
  static toObject(includeInstance: boolean, msg: Invoice): Invoice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Invoice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Invoice;
  static deserializeBinaryFromReader(message: Invoice, reader: jspb.BinaryReader): Invoice;
}

export namespace Invoice {
  export type AsObject = {
    topLevelFieldsList: Array<InvoiceField.AsObject>,
    itemsList: Array<Item.AsObject>,
  }
}

export class Item extends jspb.Message {
  clearFieldsList(): void;
  getFieldsList(): Array<InvoiceField>;
  setFieldsList(value: Array<InvoiceField>): void;
  addFields(value?: InvoiceField, index?: number): InvoiceField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Item.AsObject;
  static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Item;
  static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
}

export namespace Item {
  export type AsObject = {
    fieldsList: Array<InvoiceField.AsObject>,
  }
}

export class InvoiceField extends jspb.Message {
  getItemType(): InvoiceDisplayTypeMap[keyof InvoiceDisplayTypeMap];
  setItemType(value: InvoiceDisplayTypeMap[keyof InvoiceDisplayTypeMap]): void;

  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoiceField.AsObject;
  static toObject(includeInstance: boolean, msg: InvoiceField): InvoiceField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoiceField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoiceField;
  static deserializeBinaryFromReader(message: InvoiceField, reader: jspb.BinaryReader): InvoiceField;
}

export namespace InvoiceField {
  export type AsObject = {
    itemType: InvoiceDisplayTypeMap[keyof InvoiceDisplayTypeMap],
    name: string,
    displayName: string,
    value: string,
  }
}

export class InvoiceTemplate extends jspb.Message {
  clearAccountFieldsList(): void;
  getAccountFieldsList(): Array<FieldDefinition>;
  setAccountFieldsList(value: Array<FieldDefinition>): void;
  addAccountFields(value?: FieldDefinition, index?: number): FieldDefinition;

  clearInvoiceDescriptionsList(): void;
  getInvoiceDescriptionsList(): Array<InvoiceDescription>;
  setInvoiceDescriptionsList(value: Array<InvoiceDescription>): void;
  addInvoiceDescriptions(value?: InvoiceDescription, index?: number): InvoiceDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoiceTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: InvoiceTemplate): InvoiceTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoiceTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoiceTemplate;
  static deserializeBinaryFromReader(message: InvoiceTemplate, reader: jspb.BinaryReader): InvoiceTemplate;
}

export namespace InvoiceTemplate {
  export type AsObject = {
    accountFieldsList: Array<FieldDefinition.AsObject>,
    invoiceDescriptionsList: Array<InvoiceDescription.AsObject>,
  }
}

export class InvoiceDescription extends jspb.Message {
  clearInvoiceDescriptionFieldsList(): void;
  getInvoiceDescriptionFieldsList(): Array<FieldDefinition>;
  setInvoiceDescriptionFieldsList(value: Array<FieldDefinition>): void;
  addInvoiceDescriptionFields(value?: FieldDefinition, index?: number): FieldDefinition;

  clearLineItemsList(): void;
  getLineItemsList(): Array<LineItemGroup>;
  setLineItemsList(value: Array<LineItemGroup>): void;
  addLineItems(value?: LineItemGroup, index?: number): LineItemGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoiceDescription.AsObject;
  static toObject(includeInstance: boolean, msg: InvoiceDescription): InvoiceDescription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoiceDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoiceDescription;
  static deserializeBinaryFromReader(message: InvoiceDescription, reader: jspb.BinaryReader): InvoiceDescription;
}

export namespace InvoiceDescription {
  export type AsObject = {
    invoiceDescriptionFieldsList: Array<FieldDefinition.AsObject>,
    lineItemsList: Array<LineItemGroup.AsObject>,
  }
}

export class LineItemGroup extends jspb.Message {
  clearLineItemFieldsList(): void;
  getLineItemFieldsList(): Array<FieldDefinition>;
  setLineItemFieldsList(value: Array<FieldDefinition>): void;
  addLineItemFields(value?: FieldDefinition, index?: number): FieldDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LineItemGroup.AsObject;
  static toObject(includeInstance: boolean, msg: LineItemGroup): LineItemGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LineItemGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LineItemGroup;
  static deserializeBinaryFromReader(message: LineItemGroup, reader: jspb.BinaryReader): LineItemGroup;
}

export namespace LineItemGroup {
  export type AsObject = {
    lineItemFieldsList: Array<FieldDefinition.AsObject>,
  }
}

export class ListOfStrings extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): void;
  addValues(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOfStrings.AsObject;
  static toObject(includeInstance: boolean, msg: ListOfStrings): ListOfStrings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOfStrings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOfStrings;
  static deserializeBinaryFromReader(message: ListOfStrings, reader: jspb.BinaryReader): ListOfStrings;
}

export namespace ListOfStrings {
  export type AsObject = {
    valuesList: Array<string>,
  }
}

export class Flow extends jspb.Message {
  hasInvoiceFlow(): boolean;
  clearInvoiceFlow(): void;
  getInvoiceFlow(): InvoiceFlow | undefined;
  setInvoiceFlow(value?: InvoiceFlow): void;

  hasPaymentFlow(): boolean;
  clearPaymentFlow(): void;
  getPaymentFlow(): PaymentFlow | undefined;
  setPaymentFlow(value?: PaymentFlow): void;

  hasVerificationFlow(): boolean;
  clearVerificationFlow(): void;
  getVerificationFlow(): VerificationFlow | undefined;
  setVerificationFlow(value?: VerificationFlow): void;

  hasExecuteFlow(): boolean;
  clearExecuteFlow(): void;
  getExecuteFlow(): ExecuteFlow | undefined;
  setExecuteFlow(value?: ExecuteFlow): void;

  getValueCase(): Flow.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Flow.AsObject;
  static toObject(includeInstance: boolean, msg: Flow): Flow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Flow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Flow;
  static deserializeBinaryFromReader(message: Flow, reader: jspb.BinaryReader): Flow;
}

export namespace Flow {
  export type AsObject = {
    invoiceFlow?: InvoiceFlow.AsObject,
    paymentFlow?: PaymentFlow.AsObject,
    verificationFlow?: VerificationFlow.AsObject,
    executeFlow?: ExecuteFlow.AsObject,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    INVOICE_FLOW = 1,
    PAYMENT_FLOW = 2,
    VERIFICATION_FLOW = 3,
    EXECUTE_FLOW = 4,
  }
}

export class InvoiceFlow extends jspb.Message {
  getPluginInstanceId(): string;
  setPluginInstanceId(value: string): void;

  hasExperianQueryBalance(): boolean;
  clearExperianQueryBalance(): void;
  getExperianQueryBalance(): InvoiceExperianQueryBalance | undefined;
  setExperianQueryBalance(value?: InvoiceExperianQueryBalance): void;

  hasAuthorizeNetLinkData(): boolean;
  clearAuthorizeNetLinkData(): void;
  getAuthorizeNetLinkData(): InvoiceAuthorizeNetLinkData | undefined;
  setAuthorizeNetLinkData(value?: InvoiceAuthorizeNetLinkData): void;

  hasAuthorizeNetCustomHttp(): boolean;
  clearAuthorizeNetCustomHttp(): void;
  getAuthorizeNetCustomHttp(): InvoiceAuthorizeNetCustomHttp | undefined;
  setAuthorizeNetCustomHttp(value?: InvoiceAuthorizeNetCustomHttp): void;

  hasJourney(): boolean;
  clearJourney(): void;
  getJourney(): InvoiceJourney | undefined;
  setJourney(value?: InvoiceJourney): void;

  hasDynamicJourney(): boolean;
  clearDynamicJourney(): void;
  getDynamicJourney(): InvoiceDynamicJourney | undefined;
  setDynamicJourney(value?: InvoiceDynamicJourney): void;

  hasNewzwareAccountInquiry(): boolean;
  clearNewzwareAccountInquiry(): void;
  getNewzwareAccountInquiry(): InvoiceNewzwareAccountInquiry | undefined;
  setNewzwareAccountInquiry(value?: InvoiceNewzwareAccountInquiry): void;

  hasInvoiceTemplate(): boolean;
  clearInvoiceTemplate(): void;
  getInvoiceTemplate(): InvoiceTemplate | undefined;
  setInvoiceTemplate(value?: InvoiceTemplate): void;

  getValueCase(): InvoiceFlow.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoiceFlow.AsObject;
  static toObject(includeInstance: boolean, msg: InvoiceFlow): InvoiceFlow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoiceFlow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoiceFlow;
  static deserializeBinaryFromReader(message: InvoiceFlow, reader: jspb.BinaryReader): InvoiceFlow;
}

export namespace InvoiceFlow {
  export type AsObject = {
    pluginInstanceId: string,
    experianQueryBalance?: InvoiceExperianQueryBalance.AsObject,
    authorizeNetLinkData?: InvoiceAuthorizeNetLinkData.AsObject,
    authorizeNetCustomHttp?: InvoiceAuthorizeNetCustomHttp.AsObject,
    journey?: InvoiceJourney.AsObject,
    dynamicJourney?: InvoiceDynamicJourney.AsObject,
    newzwareAccountInquiry?: InvoiceNewzwareAccountInquiry.AsObject,
    invoiceTemplate?: InvoiceTemplate.AsObject,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    EXPERIAN_QUERY_BALANCE = 2,
    AUTHORIZE_NET_LINK_DATA = 10,
    AUTHORIZE_NET_CUSTOM_HTTP = 11,
    JOURNEY = 12,
    DYNAMIC_JOURNEY = 13,
    NEWZWARE_ACCOUNT_INQUIRY = 14,
  }
}

export class PaymentFlow extends jspb.Message {
  getPluginInstanceId(): string;
  setPluginInstanceId(value: string): void;

  hasExperianCc(): boolean;
  clearExperianCc(): void;
  getExperianCc(): PaymentExperianCC | undefined;
  setExperianCc(value?: PaymentExperianCC): void;

  hasExperianAch(): boolean;
  clearExperianAch(): void;
  getExperianAch(): PaymentExperianACH | undefined;
  setExperianAch(value?: PaymentExperianACH): void;

  hasAuthorizeNetCc(): boolean;
  clearAuthorizeNetCc(): void;
  getAuthorizeNetCc(): PaymentAuthorizeNetCC | undefined;
  setAuthorizeNetCc(value?: PaymentAuthorizeNetCC): void;

  hasAuthorizeNetAch(): boolean;
  clearAuthorizeNetAch(): void;
  getAuthorizeNetAch(): PaymentAuthorizeNetACH | undefined;
  setAuthorizeNetAch(value?: PaymentAuthorizeNetACH): void;

  hasAuthorizeNetPaypal(): boolean;
  clearAuthorizeNetPaypal(): void;
  getAuthorizeNetPaypal(): PaymentAuthorizeNetPaypal | undefined;
  setAuthorizeNetPaypal(value?: PaymentAuthorizeNetPaypal): void;

  hasAuthorizeNetApplePay(): boolean;
  clearAuthorizeNetApplePay(): void;
  getAuthorizeNetApplePay(): PaymentAuthorizeNetApplePay | undefined;
  setAuthorizeNetApplePay(value?: PaymentAuthorizeNetApplePay): void;

  hasAuthorizeNetGooglePay(): boolean;
  clearAuthorizeNetGooglePay(): void;
  getAuthorizeNetGooglePay(): PaymentAuthorizeNetGooglePay | undefined;
  setAuthorizeNetGooglePay(value?: PaymentAuthorizeNetGooglePay): void;

  hasPaywaySubmitCardSaleRequest(): boolean;
  clearPaywaySubmitCardSaleRequest(): void;
  getPaywaySubmitCardSaleRequest(): PaymentPaywaySubmitCardSaleRequest | undefined;
  setPaywaySubmitCardSaleRequest(value?: PaymentPaywaySubmitCardSaleRequest): void;

  hasPaywaySubmitAchAlertRequest(): boolean;
  clearPaywaySubmitAchAlertRequest(): void;
  getPaywaySubmitAchAlertRequest(): PaymentPaywaySubmitACHAlertRequest | undefined;
  setPaywaySubmitAchAlertRequest(value?: PaymentPaywaySubmitACHAlertRequest): void;

  hasNewzwareCc(): boolean;
  clearNewzwareCc(): void;
  getNewzwareCc(): PaymentNewzwareCc | undefined;
  setNewzwareCc(value?: PaymentNewzwareCc): void;

  hasNewzwareAch(): boolean;
  clearNewzwareAch(): void;
  getNewzwareAch(): PaymentNewzwareAch | undefined;
  setNewzwareAch(value?: PaymentNewzwareAch): void;

  clearPaymentFieldsList(): void;
  getPaymentFieldsList(): Array<FieldDefinition>;
  setPaymentFieldsList(value: Array<FieldDefinition>): void;
  addPaymentFields(value?: FieldDefinition, index?: number): FieldDefinition;

  getValueCase(): PaymentFlow.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentFlow.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentFlow): PaymentFlow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentFlow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentFlow;
  static deserializeBinaryFromReader(message: PaymentFlow, reader: jspb.BinaryReader): PaymentFlow;
}

export namespace PaymentFlow {
  export type AsObject = {
    pluginInstanceId: string,
    experianCc?: PaymentExperianCC.AsObject,
    experianAch?: PaymentExperianACH.AsObject,
    authorizeNetCc?: PaymentAuthorizeNetCC.AsObject,
    authorizeNetAch?: PaymentAuthorizeNetACH.AsObject,
    authorizeNetPaypal?: PaymentAuthorizeNetPaypal.AsObject,
    authorizeNetApplePay?: PaymentAuthorizeNetApplePay.AsObject,
    authorizeNetGooglePay?: PaymentAuthorizeNetGooglePay.AsObject,
    paywaySubmitCardSaleRequest?: PaymentPaywaySubmitCardSaleRequest.AsObject,
    paywaySubmitAchAlertRequest?: PaymentPaywaySubmitACHAlertRequest.AsObject,
    newzwareCc?: PaymentNewzwareCc.AsObject,
    newzwareAch?: PaymentNewzwareAch.AsObject,
    paymentFieldsList: Array<FieldDefinition.AsObject>,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    EXPERIAN_CC = 2,
    EXPERIAN_ACH = 3,
    AUTHORIZE_NET_CC = 4,
    AUTHORIZE_NET_ACH = 5,
    AUTHORIZE_NET_PAYPAL = 6,
    AUTHORIZE_NET_APPLE_PAY = 7,
    AUTHORIZE_NET_GOOGLE_PAY = 8,
    PAYWAY_SUBMIT_CARD_SALE_REQUEST = 9,
    PAYWAY_SUBMIT_ACH_ALERT_REQUEST = 10,
    NEWZWARE_CC = 11,
    NEWZWARE_ACH = 12,
  }
}

export class VerificationFlow extends jspb.Message {
  getPluginInstanceId(): string;
  setPluginInstanceId(value: string): void;

  hasExperianQueryBalance(): boolean;
  clearExperianQueryBalance(): void;
  getExperianQueryBalance(): VerificationExperianQueryBalance | undefined;
  setExperianQueryBalance(value?: VerificationExperianQueryBalance): void;

  hasExperianLinkData(): boolean;
  clearExperianLinkData(): void;
  getExperianLinkData(): VerificationExperianLinkData | undefined;
  setExperianLinkData(value?: VerificationExperianLinkData): void;

  hasExperianZipDob(): boolean;
  clearExperianZipDob(): void;
  getExperianZipDob(): VerificationExperianZipDob | undefined;
  setExperianZipDob(value?: VerificationExperianZipDob): void;

  hasAuthorizeNetCustomerProfile(): boolean;
  clearAuthorizeNetCustomerProfile(): void;
  getAuthorizeNetCustomerProfile(): VerificationAuthorizeNetCustomerProfile | undefined;
  setAuthorizeNetCustomerProfile(value?: VerificationAuthorizeNetCustomerProfile): void;

  hasAuthorizeNetLinkData(): boolean;
  clearAuthorizeNetLinkData(): void;
  getAuthorizeNetLinkData(): VerificationAuthorizeNetLinkData | undefined;
  setAuthorizeNetLinkData(value?: VerificationAuthorizeNetLinkData): void;

  hasJourney(): boolean;
  clearJourney(): void;
  getJourney(): VerificationJourney | undefined;
  setJourney(value?: VerificationJourney): void;

  hasNewzwareLookupPhone(): boolean;
  clearNewzwareLookupPhone(): void;
  getNewzwareLookupPhone(): VerificationNewzwareLookupPhone | undefined;
  setNewzwareLookupPhone(value?: VerificationNewzwareLookupPhone): void;

  hasNewzwareAccountInquiry(): boolean;
  clearNewzwareAccountInquiry(): void;
  getNewzwareAccountInquiry(): VerificationNewzwareAccountInquiry | undefined;
  setNewzwareAccountInquiry(value?: VerificationNewzwareAccountInquiry): void;

  clearVerificationFieldsList(): void;
  getVerificationFieldsList(): Array<FieldDefinition>;
  setVerificationFieldsList(value: Array<FieldDefinition>): void;
  addVerificationFields(value?: FieldDefinition, index?: number): FieldDefinition;

  getValueCase(): VerificationFlow.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerificationFlow.AsObject;
  static toObject(includeInstance: boolean, msg: VerificationFlow): VerificationFlow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerificationFlow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerificationFlow;
  static deserializeBinaryFromReader(message: VerificationFlow, reader: jspb.BinaryReader): VerificationFlow;
}

export namespace VerificationFlow {
  export type AsObject = {
    pluginInstanceId: string,
    experianQueryBalance?: VerificationExperianQueryBalance.AsObject,
    experianLinkData?: VerificationExperianLinkData.AsObject,
    experianZipDob?: VerificationExperianZipDob.AsObject,
    authorizeNetCustomerProfile?: VerificationAuthorizeNetCustomerProfile.AsObject,
    authorizeNetLinkData?: VerificationAuthorizeNetLinkData.AsObject,
    journey?: VerificationJourney.AsObject,
    newzwareLookupPhone?: VerificationNewzwareLookupPhone.AsObject,
    newzwareAccountInquiry?: VerificationNewzwareAccountInquiry.AsObject,
    verificationFieldsList: Array<FieldDefinition.AsObject>,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    EXPERIAN_QUERY_BALANCE = 2,
    EXPERIAN_LINK_DATA = 3,
    EXPERIAN_ZIP_DOB = 4,
    AUTHORIZE_NET_CUSTOMER_PROFILE = 6,
    AUTHORIZE_NET_LINK_DATA = 7,
    JOURNEY = 12,
    NEWZWARE_LOOKUP_PHONE = 13,
    NEWZWARE_ACCOUNT_INQUIRY = 14,
  }
}

export class FieldDefinition extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAltName(): string;
  setAltName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getFieldType(): ValueTypeMap[keyof ValueTypeMap];
  setFieldType(value: ValueTypeMap[keyof ValueTypeMap]): void;

  getValidationType(): ValidationMap[keyof ValidationMap];
  setValidationType(value: ValidationMap[keyof ValidationMap]): void;

  clearFormatsList(): void;
  getFormatsList(): Array<string>;
  setFormatsList(value: Array<string>): void;
  addFormats(value: string, index?: number): string;

  getInvoiceType(): InvoiceDisplayTypeMap[keyof InvoiceDisplayTypeMap];
  setInvoiceType(value: InvoiceDisplayTypeMap[keyof InvoiceDisplayTypeMap]): void;

  hasHelperText(): boolean;
  clearHelperText(): void;
  getHelperText(): HelperText | undefined;
  setHelperText(value?: HelperText): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: FieldDefinition): FieldDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldDefinition;
  static deserializeBinaryFromReader(message: FieldDefinition, reader: jspb.BinaryReader): FieldDefinition;
}

export namespace FieldDefinition {
  export type AsObject = {
    name: string,
    altName: string,
    displayName: string,
    fieldType: ValueTypeMap[keyof ValueTypeMap],
    validationType: ValidationMap[keyof ValidationMap],
    formatsList: Array<string>,
    invoiceType: InvoiceDisplayTypeMap[keyof InvoiceDisplayTypeMap],
    helperText?: HelperText.AsObject,
  }
}

export class HelperText extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelperText.AsObject;
  static toObject(includeInstance: boolean, msg: HelperText): HelperText.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelperText, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelperText;
  static deserializeBinaryFromReader(message: HelperText, reader: jspb.BinaryReader): HelperText;
}

export namespace HelperText {
  export type AsObject = {
    text: string,
  }
}

export class ExecuteFlow extends jspb.Message {
  getPluginInstanceId(): string;
  setPluginInstanceId(value: string): void;

  hasBraintreeCreditSale(): boolean;
  clearBraintreeCreditSale(): void;
  getBraintreeCreditSale(): ExecuteBraintreeCreditSale | undefined;
  setBraintreeCreditSale(value?: ExecuteBraintreeCreditSale): void;

  hasBraintreeBankSale(): boolean;
  clearBraintreeBankSale(): void;
  getBraintreeBankSale(): ExecuteBraintreeBankSale | undefined;
  setBraintreeBankSale(value?: ExecuteBraintreeBankSale): void;

  hasRelatientGetPatientBalance(): boolean;
  clearRelatientGetPatientBalance(): void;
  getRelatientGetPatientBalance(): ExecuteRelatientGetPatientBalance | undefined;
  setRelatientGetPatientBalance(value?: ExecuteRelatientGetPatientBalance): void;

  hasRelatientGetPatientCcTokens(): boolean;
  clearRelatientGetPatientCcTokens(): void;
  getRelatientGetPatientCcTokens(): ExecuteRelatientGetPatientCcTokens | undefined;
  setRelatientGetPatientCcTokens(value?: ExecuteRelatientGetPatientCcTokens): void;

  hasRelatientPostPatientToken(): boolean;
  clearRelatientPostPatientToken(): void;
  getRelatientPostPatientToken(): ExecuteRelatientPostPatientToken | undefined;
  setRelatientPostPatientToken(value?: ExecuteRelatientPostPatientToken): void;

  hasRelatientPostPatientBalance(): boolean;
  clearRelatientPostPatientBalance(): void;
  getRelatientPostPatientBalance(): ExecuteRelatientPostPatientBalance | undefined;
  setRelatientPostPatientBalance(value?: ExecuteRelatientPostPatientBalance): void;

  hasRelatientGetPatient(): boolean;
  clearRelatientGetPatient(): void;
  getRelatientGetPatient(): ExecuteRelatientGetPatient | undefined;
  setRelatientGetPatient(value?: ExecuteRelatientGetPatient): void;

  hasRelatientPostBalanceById(): boolean;
  clearRelatientPostBalanceById(): void;
  getRelatientPostBalanceById(): ExecuteRelatientPostBalanceById | undefined;
  setRelatientPostBalanceById(value?: ExecuteRelatientPostBalanceById): void;

  hasRelatientCreateFortisAchtoken(): boolean;
  clearRelatientCreateFortisAchtoken(): void;
  getRelatientCreateFortisAchtoken(): ExecuteRelatientCreateFortisAchtoken | undefined;
  setRelatientCreateFortisAchtoken(value?: ExecuteRelatientCreateFortisAchtoken): void;

  hasRelatientCreateFortisCctoken(): boolean;
  clearRelatientCreateFortisCctoken(): void;
  getRelatientCreateFortisCctoken(): ExecuteRelatientCreateFortisCctoken | undefined;
  setRelatientCreateFortisCctoken(value?: ExecuteRelatientCreateFortisCctoken): void;

  hasRelatientFortisTokenAchDebitPayment(): boolean;
  clearRelatientFortisTokenAchDebitPayment(): void;
  getRelatientFortisTokenAchDebitPayment(): ExecuteRelatientFortisTokenAchDebitPayment | undefined;
  setRelatientFortisTokenAchDebitPayment(value?: ExecuteRelatientFortisTokenAchDebitPayment): void;

  hasRelatientFortisTokenCcPayment(): boolean;
  clearRelatientFortisTokenCcPayment(): void;
  getRelatientFortisTokenCcPayment(): ExecuteRelatientFortisTokenCcPayment | undefined;
  setRelatientFortisTokenCcPayment(value?: ExecuteRelatientFortisTokenCcPayment): void;

  hasCybersourceCreditPayment(): boolean;
  clearCybersourceCreditPayment(): void;
  getCybersourceCreditPayment(): ExecuteCybersourceCreditPayment | undefined;
  setCybersourceCreditPayment(value?: ExecuteCybersourceCreditPayment): void;

  hasCybersourceEcheckPayment(): boolean;
  clearCybersourceEcheckPayment(): void;
  getCybersourceEcheckPayment(): ExecuteCybersourceEcheckPayment | undefined;
  setCybersourceEcheckPayment(value?: ExecuteCybersourceEcheckPayment): void;

  hasCircproPhoneLookupWithBundle(): boolean;
  clearCircproPhoneLookupWithBundle(): void;
  getCircproPhoneLookupWithBundle(): ExecuteCircproPhoneLookupWithBundle | undefined;
  setCircproPhoneLookupWithBundle(value?: ExecuteCircproPhoneLookupWithBundle): void;

  hasCircproPhoneLookup(): boolean;
  clearCircproPhoneLookup(): void;
  getCircproPhoneLookup(): ExecuteCircproPhoneLookup | undefined;
  setCircproPhoneLookup(value?: ExecuteCircproPhoneLookup): void;

  hasCircproVacationRestartInquiry(): boolean;
  clearCircproVacationRestartInquiry(): void;
  getCircproVacationRestartInquiry(): ExecuteCircproVacationRestartInquiry | undefined;
  setCircproVacationRestartInquiry(value?: ExecuteCircproVacationRestartInquiry): void;

  hasCircproComplaintInquiry(): boolean;
  clearCircproComplaintInquiry(): void;
  getCircproComplaintInquiry(): ExecuteCircproComplaintInquiry | undefined;
  setCircproComplaintInquiry(value?: ExecuteCircproComplaintInquiry): void;

  hasCircproAccountInquiry(): boolean;
  clearCircproAccountInquiry(): void;
  getCircproAccountInquiry(): ExecuteCircproAccountInquiry | undefined;
  setCircproAccountInquiry(value?: ExecuteCircproAccountInquiry): void;

  hasCircproAccountInquiryWithTax(): boolean;
  clearCircproAccountInquiryWithTax(): void;
  getCircproAccountInquiryWithTax(): ExecuteCircproAccountInquiryWithTax | undefined;
  setCircproAccountInquiryWithTax(value?: ExecuteCircproAccountInquiryWithTax): void;

  hasCircproAccountInquiryWithTaxBundle(): boolean;
  clearCircproAccountInquiryWithTaxBundle(): void;
  getCircproAccountInquiryWithTaxBundle(): ExecuteCircproAccountInquiryWithTaxBundle | undefined;
  setCircproAccountInquiryWithTaxBundle(value?: ExecuteCircproAccountInquiryWithTaxBundle): void;

  hasCircproComplaintCodes(): boolean;
  clearCircproComplaintCodes(): void;
  getCircproComplaintCodes(): ExecuteCircproComplaintCodes | undefined;
  setCircproComplaintCodes(value?: ExecuteCircproComplaintCodes): void;

  hasCircproComplaintUpdate(): boolean;
  clearCircproComplaintUpdate(): void;
  getCircproComplaintUpdate(): ExecuteCircproComplaintUpdate | undefined;
  setCircproComplaintUpdate(value?: ExecuteCircproComplaintUpdate): void;

  hasCircproVacationUpdate(): boolean;
  clearCircproVacationUpdate(): void;
  getCircproVacationUpdate(): ExecuteCircproVacationUpdate | undefined;
  setCircproVacationUpdate(value?: ExecuteCircproVacationUpdate): void;

  hasCircproRestartUpdate(): boolean;
  clearCircproRestartUpdate(): void;
  getCircproRestartUpdate(): ExecuteCircproRestartUpdate | undefined;
  setCircproRestartUpdate(value?: ExecuteCircproRestartUpdate): void;

  hasCircproLawImmediatePayment(): boolean;
  clearCircproLawImmediatePayment(): void;
  getCircproLawImmediatePayment(): ExecuteCircproLawImmediatePayment | undefined;
  setCircproLawImmediatePayment(value?: ExecuteCircproLawImmediatePayment): void;

  hasCircproLawUpdateDataWithPac(): boolean;
  clearCircproLawUpdateDataWithPac(): void;
  getCircproLawUpdateDataWithPac(): ExecuteCircproLawUpdateDataWithPac | undefined;
  setCircproLawUpdateDataWithPac(value?: ExecuteCircproLawUpdateDataWithPac): void;

  hasCircproLawGetCustomers(): boolean;
  clearCircproLawGetCustomers(): void;
  getCircproLawGetCustomers(): ExecuteCircproLawGetCustomers | undefined;
  setCircproLawGetCustomers(value?: ExecuteCircproLawGetCustomers): void;

  hasAuthorizenetChargeCreditCard(): boolean;
  clearAuthorizenetChargeCreditCard(): void;
  getAuthorizenetChargeCreditCard(): ExecuteAuthorizenetChargeCreditCard | undefined;
  setAuthorizenetChargeCreditCard(value?: ExecuteAuthorizenetChargeCreditCard): void;

  hasAuthorizenetDebitBankAccount(): boolean;
  clearAuthorizenetDebitBankAccount(): void;
  getAuthorizenetDebitBankAccount(): ExecuteAuthorizenetDebitBankAccount | undefined;
  setAuthorizenetDebitBankAccount(value?: ExecuteAuthorizenetDebitBankAccount): void;

  hasAuthorizenetCreateCustomerPaymentProfile(): boolean;
  clearAuthorizenetCreateCustomerPaymentProfile(): void;
  getAuthorizenetCreateCustomerPaymentProfile(): ExecuteAuthorizenetCreateCustomerPaymentProfile | undefined;
  setAuthorizenetCreateCustomerPaymentProfile(value?: ExecuteAuthorizenetCreateCustomerPaymentProfile): void;

  hasAuthorizenetPaypalTransaction(): boolean;
  clearAuthorizenetPaypalTransaction(): void;
  getAuthorizenetPaypalTransaction(): ExecuteAuthorizenetPaypalTransaction | undefined;
  setAuthorizenetPaypalTransaction(value?: ExecuteAuthorizenetPaypalTransaction): void;

  hasAuthorizenetGooglePayTransaction(): boolean;
  clearAuthorizenetGooglePayTransaction(): void;
  getAuthorizenetGooglePayTransaction(): ExecuteAuthorizenetGooglePayTransaction | undefined;
  setAuthorizenetGooglePayTransaction(value?: ExecuteAuthorizenetGooglePayTransaction): void;

  hasAuthorizenetApplePayTransaction(): boolean;
  clearAuthorizenetApplePayTransaction(): void;
  getAuthorizenetApplePayTransaction(): ExecuteAuthorizenetApplePayTransaction | undefined;
  setAuthorizenetApplePayTransaction(value?: ExecuteAuthorizenetApplePayTransaction): void;

  hasAuthorizenetPayPalAuthCapture(): boolean;
  clearAuthorizenetPayPalAuthCapture(): void;
  getAuthorizenetPayPalAuthCapture(): ExecuteAuthorizenetPayPalAuthCapture | undefined;
  setAuthorizenetPayPalAuthCapture(value?: ExecuteAuthorizenetPayPalAuthCapture): void;

  hasExpitransCcTransaction(): boolean;
  clearExpitransCcTransaction(): void;
  getExpitransCcTransaction(): ExecuteExpitransCcTransaction | undefined;
  setExpitransCcTransaction(value?: ExecuteExpitransCcTransaction): void;

  hasExpitransAchTransaction(): boolean;
  clearExpitransAchTransaction(): void;
  getExpitransAchTransaction(): ExecuteExpitransAchTransaction | undefined;
  setExpitransAchTransaction(value?: ExecuteExpitransAchTransaction): void;

  hasAxiamedfusionCcTransaction(): boolean;
  clearAxiamedfusionCcTransaction(): void;
  getAxiamedfusionCcTransaction(): ExecuteAxiamedfusionCcTransaction | undefined;
  setAxiamedfusionCcTransaction(value?: ExecuteAxiamedfusionCcTransaction): void;

  hasAxiamedfusionAchTransaction(): boolean;
  clearAxiamedfusionAchTransaction(): void;
  getAxiamedfusionAchTransaction(): ExecuteAxiamedfusionAchTransaction | undefined;
  setAxiamedfusionAchTransaction(value?: ExecuteAxiamedfusionAchTransaction): void;

  hasAxiamedfusionCardVerify(): boolean;
  clearAxiamedfusionCardVerify(): void;
  getAxiamedfusionCardVerify(): ExecuteAxiamedfusionCardVerify | undefined;
  setAxiamedfusionCardVerify(value?: ExecuteAxiamedfusionCardVerify): void;

  hasInstamedPaymentSale(): boolean;
  clearInstamedPaymentSale(): void;
  getInstamedPaymentSale(): ExecuteInstamedPaymentSale | undefined;
  setInstamedPaymentSale(value?: ExecuteInstamedPaymentSale): void;

  hasInstamedVoidPayment(): boolean;
  clearInstamedVoidPayment(): void;
  getInstamedVoidPayment(): ExecuteInstamedVoidPayment | undefined;
  setInstamedVoidPayment(value?: ExecuteInstamedVoidPayment): void;

  hasUsaepaySubmitCcPayments(): boolean;
  clearUsaepaySubmitCcPayments(): void;
  getUsaepaySubmitCcPayments(): ExecuteUsaepaySubmitCcPayments | undefined;
  setUsaepaySubmitCcPayments(value?: ExecuteUsaepaySubmitCcPayments): void;

  hasUsaepaySubmitAchPayments(): boolean;
  clearUsaepaySubmitAchPayments(): void;
  getUsaepaySubmitAchPayments(): ExecuteUsaepaySubmitAchPayments | undefined;
  setUsaepaySubmitAchPayments(value?: ExecuteUsaepaySubmitAchPayments): void;

  hasUsaepayGetCcToken(): boolean;
  clearUsaepayGetCcToken(): void;
  getUsaepayGetCcToken(): ExecuteUsaepayGetCcToken | undefined;
  setUsaepayGetCcToken(value?: ExecuteUsaepayGetCcToken): void;

  hasEzidebitSubmitCcPayments(): boolean;
  clearEzidebitSubmitCcPayments(): void;
  getEzidebitSubmitCcPayments(): ExecuteEzidebitSubmitCcPayments | undefined;
  setEzidebitSubmitCcPayments(value?: ExecuteEzidebitSubmitCcPayments): void;

  hasEzidebitSubmitAchPayments(): boolean;
  clearEzidebitSubmitAchPayments(): void;
  getEzidebitSubmitAchPayments(): ExecuteEzidebitSubmitAchPayments | undefined;
  setEzidebitSubmitAchPayments(value?: ExecuteEzidebitSubmitAchPayments): void;

  hasBamboraSubmitCcPayments(): boolean;
  clearBamboraSubmitCcPayments(): void;
  getBamboraSubmitCcPayments(): ExecuteBamboraSubmitCcPayments | undefined;
  setBamboraSubmitCcPayments(value?: ExecuteBamboraSubmitCcPayments): void;

  hasBamboraSubmitAchPayments(): boolean;
  clearBamboraSubmitAchPayments(): void;
  getBamboraSubmitAchPayments(): ExecuteBamboraSubmitAchPayments | undefined;
  setBamboraSubmitAchPayments(value?: ExecuteBamboraSubmitAchPayments): void;

  hasRepayStoreCard(): boolean;
  clearRepayStoreCard(): void;
  getRepayStoreCard(): ExecuteRepayStoreCard | undefined;
  setRepayStoreCard(value?: ExecuteRepayStoreCard): void;

  hasRepayPaymentToken(): boolean;
  clearRepayPaymentToken(): void;
  getRepayPaymentToken(): ExecuteRepayPaymentToken | undefined;
  setRepayPaymentToken(value?: ExecuteRepayPaymentToken): void;

  hasRepayAchPaymentToken(): boolean;
  clearRepayAchPaymentToken(): void;
  getRepayAchPaymentToken(): ExecuteRepayAchPaymentToken | undefined;
  setRepayAchPaymentToken(value?: ExecuteRepayAchPaymentToken): void;

  hasAxiaSubmitSaleRequestByCc(): boolean;
  clearAxiaSubmitSaleRequestByCc(): void;
  getAxiaSubmitSaleRequestByCc(): ExecuteAxiaSubmitSaleRequestByCc | undefined;
  setAxiaSubmitSaleRequestByCc(value?: ExecuteAxiaSubmitSaleRequestByCc): void;

  hasAxiaSubmitSaleRequestByCheck(): boolean;
  clearAxiaSubmitSaleRequestByCheck(): void;
  getAxiaSubmitSaleRequestByCheck(): ExecuteAxiaSubmitSaleRequestByCheck | undefined;
  setAxiaSubmitSaleRequestByCheck(value?: ExecuteAxiaSubmitSaleRequestByCheck): void;

  hasSecuretradingSendPayment(): boolean;
  clearSecuretradingSendPayment(): void;
  getSecuretradingSendPayment(): ExecuteSecuretradingSendPayment | undefined;
  setSecuretradingSendPayment(value?: ExecuteSecuretradingSendPayment): void;

  hasPaymentVisionSubmitCardSaleRequestByCc(): boolean;
  clearPaymentVisionSubmitCardSaleRequestByCc(): void;
  getPaymentVisionSubmitCardSaleRequestByCc(): ExecutePaymentVisionSubmitCardSaleRequestByCc | undefined;
  setPaymentVisionSubmitCardSaleRequestByCc(value?: ExecutePaymentVisionSubmitCardSaleRequestByCc): void;

  hasPaymentVisionSubmitCardSaleRequestByAch(): boolean;
  clearPaymentVisionSubmitCardSaleRequestByAch(): void;
  getPaymentVisionSubmitCardSaleRequestByAch(): ExecutePaymentVisionSubmitCardSaleRequestByAch | undefined;
  setPaymentVisionSubmitCardSaleRequestByAch(value?: ExecutePaymentVisionSubmitCardSaleRequestByAch): void;

  hasInterproseLookupAccount(): boolean;
  clearInterproseLookupAccount(): void;
  getInterproseLookupAccount(): ExecuteInterproseLookupAccount | undefined;
  setInterproseLookupAccount(value?: ExecuteInterproseLookupAccount): void;

  hasInterproseSubmitCardSaleRequestByCc(): boolean;
  clearInterproseSubmitCardSaleRequestByCc(): void;
  getInterproseSubmitCardSaleRequestByCc(): ExecuteInterproseSubmitCardSaleRequestByCc | undefined;
  setInterproseSubmitCardSaleRequestByCc(value?: ExecuteInterproseSubmitCardSaleRequestByCc): void;

  hasInterproseSubmitCardSaleRequestByAch(): boolean;
  clearInterproseSubmitCardSaleRequestByAch(): void;
  getInterproseSubmitCardSaleRequestByAch(): ExecuteInterproseSubmitCardSaleRequestByAch | undefined;
  setInterproseSubmitCardSaleRequestByAch(value?: ExecuteInterproseSubmitCardSaleRequestByAch): void;

  hasInterproseLookupPaymentId(): boolean;
  clearInterproseLookupPaymentId(): void;
  getInterproseLookupPaymentId(): ExecuteInterproseLookupPaymentId | undefined;
  setInterproseLookupPaymentId(value?: ExecuteInterproseLookupPaymentId): void;

  hasInterproseLookupAccountByFormId(): boolean;
  clearInterproseLookupAccountByFormId(): void;
  getInterproseLookupAccountByFormId(): ExecuteInterproseLookupAccountByFormId | undefined;
  setInterproseLookupAccountByFormId(value?: ExecuteInterproseLookupAccountByFormId): void;

  hasDallasnewsSearchByPhone(): boolean;
  clearDallasnewsSearchByPhone(): void;
  getDallasnewsSearchByPhone(): ExecuteDallasnewsSearchByPhone | undefined;
  setDallasnewsSearchByPhone(value?: ExecuteDallasnewsSearchByPhone): void;

  hasDallasnewsSearchByZipStreet(): boolean;
  clearDallasnewsSearchByZipStreet(): void;
  getDallasnewsSearchByZipStreet(): ExecuteDallasnewsSearchByZipStreet | undefined;
  setDallasnewsSearchByZipStreet(value?: ExecuteDallasnewsSearchByZipStreet): void;

  hasDallasnewsSearchBy(): boolean;
  clearDallasnewsSearchBy(): void;
  getDallasnewsSearchBy(): ExecuteDallasnewsSearchBy | undefined;
  setDallasnewsSearchBy(value?: ExecuteDallasnewsSearchBy): void;

  hasDallasnewsCreateVacation(): boolean;
  clearDallasnewsCreateVacation(): void;
  getDallasnewsCreateVacation(): ExecuteDallasnewsCreateVacation | undefined;
  setDallasnewsCreateVacation(value?: ExecuteDallasnewsCreateVacation): void;

  hasDallasnewsGetVacation(): boolean;
  clearDallasnewsGetVacation(): void;
  getDallasnewsGetVacation(): ExecuteDallasnewsGetVacation | undefined;
  setDallasnewsGetVacation(value?: ExecuteDallasnewsGetVacation): void;

  hasDallasnewsGetVacationDaysBetween(): boolean;
  clearDallasnewsGetVacationDaysBetween(): void;
  getDallasnewsGetVacationDaysBetween(): ExecuteDallasnewsGetVacationDaysBetween | undefined;
  setDallasnewsGetVacationDaysBetween(value?: ExecuteDallasnewsGetVacationDaysBetween): void;

  hasDallasnewsGetVacationWithCutoff(): boolean;
  clearDallasnewsGetVacationWithCutoff(): void;
  getDallasnewsGetVacationWithCutoff(): ExecuteDallasnewsGetVacationWithCutoff | undefined;
  setDallasnewsGetVacationWithCutoff(value?: ExecuteDallasnewsGetVacationWithCutoff): void;

  hasDallasnewsDeleteVacation(): boolean;
  clearDallasnewsDeleteVacation(): void;
  getDallasnewsDeleteVacation(): ExecuteDallasnewsDeleteVacation | undefined;
  setDallasnewsDeleteVacation(value?: ExecuteDallasnewsDeleteVacation): void;

  hasDallasnewsAddComplaint(): boolean;
  clearDallasnewsAddComplaint(): void;
  getDallasnewsAddComplaint(): ExecuteDallasnewsAddComplaint | undefined;
  setDallasnewsAddComplaint(value?: ExecuteDallasnewsAddComplaint): void;

  hasDallasnewsUpdatePhoneNumber(): boolean;
  clearDallasnewsUpdatePhoneNumber(): void;
  getDallasnewsUpdatePhoneNumber(): ExecuteDallasnewsUpdatePhoneNumber | undefined;
  setDallasnewsUpdatePhoneNumber(value?: ExecuteDallasnewsUpdatePhoneNumber): void;

  hasDallasnewsStopAccount(): boolean;
  clearDallasnewsStopAccount(): void;
  getDallasnewsStopAccount(): ExecuteDallasnewsStopAccount | undefined;
  setDallasnewsStopAccount(value?: ExecuteDallasnewsStopAccount): void;

  hasDallasnewsCcPaymentToken(): boolean;
  clearDallasnewsCcPaymentToken(): void;
  getDallasnewsCcPaymentToken(): ExecuteDallasnewsCcPaymentToken | undefined;
  setDallasnewsCcPaymentToken(value?: ExecuteDallasnewsCcPaymentToken): void;

  hasDallasnewsAchPaymentToken(): boolean;
  clearDallasnewsAchPaymentToken(): void;
  getDallasnewsAchPaymentToken(): ExecuteDallasnewsAchPaymentToken | undefined;
  setDallasnewsAchPaymentToken(value?: ExecuteDallasnewsAchPaymentToken): void;

  hasPaywaySubmitCardSaleRequest(): boolean;
  clearPaywaySubmitCardSaleRequest(): void;
  getPaywaySubmitCardSaleRequest(): ExecutePaywaySubmitCardSaleRequest | undefined;
  setPaywaySubmitCardSaleRequest(value?: ExecutePaywaySubmitCardSaleRequest): void;

  hasPaywayCreateTokenRequest(): boolean;
  clearPaywayCreateTokenRequest(): void;
  getPaywayCreateTokenRequest(): ExecutePaywayCreateTokenRequest | undefined;
  setPaywayCreateTokenRequest(value?: ExecutePaywayCreateTokenRequest): void;

  hasPaywaySubmitAchSaleRequest(): boolean;
  clearPaywaySubmitAchSaleRequest(): void;
  getPaywaySubmitAchSaleRequest(): ExecutePaywaySubmitACHSaleRequest | undefined;
  setPaywaySubmitAchSaleRequest(value?: ExecutePaywaySubmitACHSaleRequest): void;

  hasBillingtreeSubmitCardSaleRequest(): boolean;
  clearBillingtreeSubmitCardSaleRequest(): void;
  getBillingtreeSubmitCardSaleRequest(): ExecuteBillingtreeSubmitCardSaleRequest | undefined;
  setBillingtreeSubmitCardSaleRequest(value?: ExecuteBillingtreeSubmitCardSaleRequest): void;

  hasExperianCcPaymentRequest(): boolean;
  clearExperianCcPaymentRequest(): void;
  getExperianCcPaymentRequest(): ExecuteExperianCcPaymentRequest | undefined;
  setExperianCcPaymentRequest(value?: ExecuteExperianCcPaymentRequest): void;

  hasExperianCcPaymentPlanRequest(): boolean;
  clearExperianCcPaymentPlanRequest(): void;
  getExperianCcPaymentPlanRequest(): ExecuteExperianCcPaymentPlanRequest | undefined;
  setExperianCcPaymentPlanRequest(value?: ExecuteExperianCcPaymentPlanRequest): void;

  hasExperianBalancerequest(): boolean;
  clearExperianBalancerequest(): void;
  getExperianBalancerequest(): ExecuteExperianBalancerequest | undefined;
  setExperianBalancerequest(value?: ExecuteExperianBalancerequest): void;

  hasExperianAchPaymentRequest(): boolean;
  clearExperianAchPaymentRequest(): void;
  getExperianAchPaymentRequest(): ExecuteExperianAchPaymentRequest | undefined;
  setExperianAchPaymentRequest(value?: ExecuteExperianAchPaymentRequest): void;

  hasExperianAchPaymentPlanRequest(): boolean;
  clearExperianAchPaymentPlanRequest(): void;
  getExperianAchPaymentPlanRequest(): ExecuteExperianAchPaymentPlanRequest | undefined;
  setExperianAchPaymentPlanRequest(value?: ExecuteExperianAchPaymentPlanRequest): void;

  hasExperianStellaCardEntry(): boolean;
  clearExperianStellaCardEntry(): void;
  getExperianStellaCardEntry(): ExecuteExperianStellaCardEntry | undefined;
  setExperianStellaCardEntry(value?: ExecuteExperianStellaCardEntry): void;

  hasExperianStellaEcheck(): boolean;
  clearExperianStellaEcheck(): void;
  getExperianStellaEcheck(): ExecuteExperianStellaECheck | undefined;
  setExperianStellaEcheck(value?: ExecuteExperianStellaECheck): void;

  hasExperianStellaCardDeviceTokenization(): boolean;
  clearExperianStellaCardDeviceTokenization(): void;
  getExperianStellaCardDeviceTokenization(): ExecuteExperianStellaCardDeviceTokenization | undefined;
  setExperianStellaCardDeviceTokenization(value?: ExecuteExperianStellaCardDeviceTokenization): void;

  hasExperianStellaTokenPayment(): boolean;
  clearExperianStellaTokenPayment(): void;
  getExperianStellaTokenPayment(): ExecuteExperianStellaTokenPayment | undefined;
  setExperianStellaTokenPayment(value?: ExecuteExperianStellaTokenPayment): void;

  hasExperianStellaAchTokenization(): boolean;
  clearExperianStellaAchTokenization(): void;
  getExperianStellaAchTokenization(): ExecuteExperianStellaAchTokenization | undefined;
  setExperianStellaAchTokenization(value?: ExecuteExperianStellaAchTokenization): void;

  hasExperianStellaAddUsaEpayToken(): boolean;
  clearExperianStellaAddUsaEpayToken(): void;
  getExperianStellaAddUsaEpayToken(): ExecuteExperianStellaAddusaepaytoken | undefined;
  setExperianStellaAddUsaEpayToken(value?: ExecuteExperianStellaAddusaepaytoken): void;

  hasExperianStellaPaymentPlans(): boolean;
  clearExperianStellaPaymentPlans(): void;
  getExperianStellaPaymentPlans(): ExecuteExperianStellaPaymentPlans | undefined;
  setExperianStellaPaymentPlans(value?: ExecuteExperianStellaPaymentPlans): void;

  hasExperianStellaAuth(): boolean;
  clearExperianStellaAuth(): void;
  getExperianStellaAuth(): ExecuteExperianStellaAuth | undefined;
  setExperianStellaAuth(value?: ExecuteExperianStellaAuth): void;

  hasNewscycleLogin(): boolean;
  clearNewscycleLogin(): void;
  getNewscycleLogin(): ExecuteNewscycleLogin | undefined;
  setNewscycleLogin(value?: ExecuteNewscycleLogin): void;

  hasNewscycleSearchPage(): boolean;
  clearNewscycleSearchPage(): void;
  getNewscycleSearchPage(): ExecuteNewscycleSearchPage | undefined;
  setNewscycleSearchPage(value?: ExecuteNewscycleSearchPage): void;

  hasNewscycleBillingInfo(): boolean;
  clearNewscycleBillingInfo(): void;
  getNewscycleBillingInfo(): ExecuteNewscycleBillingInfo | undefined;
  setNewscycleBillingInfo(value?: ExecuteNewscycleBillingInfo): void;

  hasNewscycleServiceErrorInfo(): boolean;
  clearNewscycleServiceErrorInfo(): void;
  getNewscycleServiceErrorInfo(): ExecuteNewscycleServiceErrorInfo | undefined;
  setNewscycleServiceErrorInfo(value?: ExecuteNewscycleServiceErrorInfo): void;

  hasNewscycleServiceErrorTrans(): boolean;
  clearNewscycleServiceErrorTrans(): void;
  getNewscycleServiceErrorTrans(): ExecuteNewscycleServiceErrorTrans | undefined;
  setNewscycleServiceErrorTrans(value?: ExecuteNewscycleServiceErrorTrans): void;

  hasNewscycleStopInfo(): boolean;
  clearNewscycleStopInfo(): void;
  getNewscycleStopInfo(): ExecuteNewscycleStopInfo | undefined;
  setNewscycleStopInfo(value?: ExecuteNewscycleStopInfo): void;

  hasNewscycleStopTrans(): boolean;
  clearNewscycleStopTrans(): void;
  getNewscycleStopTrans(): ExecuteNewscycleStopTrans | undefined;
  setNewscycleStopTrans(value?: ExecuteNewscycleStopTrans): void;

  hasNewscycleRenewInfo(): boolean;
  clearNewscycleRenewInfo(): void;
  getNewscycleRenewInfo(): ExecuteNewscycleRenewInfo | undefined;
  setNewscycleRenewInfo(value?: ExecuteNewscycleRenewInfo): void;

  hasNewscycleAutoRenewInfo(): boolean;
  clearNewscycleAutoRenewInfo(): void;
  getNewscycleAutoRenewInfo(): ExecuteNewscycleAutoRenewInfo | undefined;
  setNewscycleAutoRenewInfo(value?: ExecuteNewscycleAutoRenewInfo): void;

  hasNewscycleAutoTran(): boolean;
  clearNewscycleAutoTran(): void;
  getNewscycleAutoTran(): ExecuteNewscycleAutoTran | undefined;
  setNewscycleAutoTran(value?: ExecuteNewscycleAutoTran): void;

  hasNewscyclePayInfo(): boolean;
  clearNewscyclePayInfo(): void;
  getNewscyclePayInfo(): ExecuteNewscyclePayInfo | undefined;
  setNewscyclePayInfo(value?: ExecuteNewscyclePayInfo): void;

  hasNewscyclePayTran(): boolean;
  clearNewscyclePayTran(): void;
  getNewscyclePayTran(): ExecuteNewscyclePayTran | undefined;
  setNewscyclePayTran(value?: ExecuteNewscyclePayTran): void;

  hasTrustcommerceCreditSale(): boolean;
  clearTrustcommerceCreditSale(): void;
  getTrustcommerceCreditSale(): ExecuteTrustcommerceCreditSale | undefined;
  setTrustcommerceCreditSale(value?: ExecuteTrustcommerceCreditSale): void;

  hasTrustcommerceAchSale(): boolean;
  clearTrustcommerceAchSale(): void;
  getTrustcommerceAchSale(): ExecuteTrustcommerceAchSale | undefined;
  setTrustcommerceAchSale(value?: ExecuteTrustcommerceAchSale): void;

  hasVantivCreditSale(): boolean;
  clearVantivCreditSale(): void;
  getVantivCreditSale(): ExecuteVantivCreditSale | undefined;
  setVantivCreditSale(value?: ExecuteVantivCreditSale): void;

  hasVantivAchSale(): boolean;
  clearVantivAchSale(): void;
  getVantivAchSale(): ExecuteVantivAchSale | undefined;
  setVantivAchSale(value?: ExecuteVantivAchSale): void;

  hasJourneyLatest(): boolean;
  clearJourneyLatest(): void;
  getJourneyLatest(): ExecuteJourneyLatest | undefined;
  setJourneyLatest(value?: ExecuteJourneyLatest): void;

  hasAthenahealthGetPatients(): boolean;
  clearAthenahealthGetPatients(): void;
  getAthenahealthGetPatients(): ExecuteAthenahealthGetPatients | undefined;
  setAthenahealthGetPatients(value?: ExecuteAthenahealthGetPatients): void;

  hasAthenahealthGetPatientsWithId(): boolean;
  clearAthenahealthGetPatientsWithId(): void;
  getAthenahealthGetPatientsWithId(): ExecuteAthenahealthGetPatientsWithId | undefined;
  setAthenahealthGetPatientsWithId(value?: ExecuteAthenahealthGetPatientsWithId): void;

  hasAthenahealthCcPayment(): boolean;
  clearAthenahealthCcPayment(): void;
  getAthenahealthCcPayment(): ExecuteAthenahealthCcPayment | undefined;
  setAthenahealthCcPayment(value?: ExecuteAthenahealthCcPayment): void;

  hasBrainworksGetCustomersByPhone(): boolean;
  clearBrainworksGetCustomersByPhone(): void;
  getBrainworksGetCustomersByPhone(): ExecuteBrainworksGetCustomersByPhone | undefined;
  setBrainworksGetCustomersByPhone(value?: ExecuteBrainworksGetCustomersByPhone): void;

  hasBrainworksGetSuspends(): boolean;
  clearBrainworksGetSuspends(): void;
  getBrainworksGetSuspends(): ExecuteBrainworksGetSuspends | undefined;
  setBrainworksGetSuspends(value?: ExecuteBrainworksGetSuspends): void;

  hasBrainworksGetCustomerByCustIdV2(): boolean;
  clearBrainworksGetCustomerByCustIdV2(): void;
  getBrainworksGetCustomerByCustIdV2(): ExecuteBrainworksGetCustomerByCustIdV2 | undefined;
  setBrainworksGetCustomerByCustIdV2(value?: ExecuteBrainworksGetCustomerByCustIdV2): void;

  hasBrainworksGetComplaints(): boolean;
  clearBrainworksGetComplaints(): void;
  getBrainworksGetComplaints(): ExecuteBrainworksGetComplaints | undefined;
  setBrainworksGetComplaints(value?: ExecuteBrainworksGetComplaints): void;

  hasBrainworksGetCodesOrTypes(): boolean;
  clearBrainworksGetCodesOrTypes(): void;
  getBrainworksGetCodesOrTypes(): ExecuteBrainworksGetCodesOrTypes | undefined;
  setBrainworksGetCodesOrTypes(value?: ExecuteBrainworksGetCodesOrTypes): void;

  hasBrainworksStopSuspends(): boolean;
  clearBrainworksStopSuspends(): void;
  getBrainworksStopSuspends(): ExecuteBrainworksStopSuspends | undefined;
  setBrainworksStopSuspends(value?: ExecuteBrainworksStopSuspends): void;

  hasBrainworksStartSuspends(): boolean;
  clearBrainworksStartSuspends(): void;
  getBrainworksStartSuspends(): ExecuteBrainworksStartSuspends | undefined;
  setBrainworksStartSuspends(value?: ExecuteBrainworksStartSuspends): void;

  hasBrainworksSendComplaint(): boolean;
  clearBrainworksSendComplaint(): void;
  getBrainworksSendComplaint(): ExecuteBrainworksSendComplaint | undefined;
  setBrainworksSendComplaint(value?: ExecuteBrainworksSendComplaint): void;

  hasBrainworksGetCustomerByCustId(): boolean;
  clearBrainworksGetCustomerByCustId(): void;
  getBrainworksGetCustomerByCustId(): ExecuteBrainworksGetCustomerByCustId | undefined;
  setBrainworksGetCustomerByCustId(value?: ExecuteBrainworksGetCustomerByCustId): void;

  hasOsgconnectCcPayments(): boolean;
  clearOsgconnectCcPayments(): void;
  getOsgconnectCcPayments(): ExecuteOsgconnectCcPayments | undefined;
  setOsgconnectCcPayments(value?: ExecuteOsgconnectCcPayments): void;

  hasOsgconnectAchPayments(): boolean;
  clearOsgconnectAchPayments(): void;
  getOsgconnectAchPayments(): ExecuteOsgconnectAchPayments | undefined;
  setOsgconnectAchPayments(value?: ExecuteOsgconnectAchPayments): void;

  hasOsgconnectValidateAccountNo(): boolean;
  clearOsgconnectValidateAccountNo(): void;
  getOsgconnectValidateAccountNo(): ExecuteOsgconnectValidateAccountNo | undefined;
  setOsgconnectValidateAccountNo(value?: ExecuteOsgconnectValidateAccountNo): void;

  hasNtvbCreditMissedDelivery(): boolean;
  clearNtvbCreditMissedDelivery(): void;
  getNtvbCreditMissedDelivery(): ExecuteNtvbCreditMissedDelivery | undefined;
  setNtvbCreditMissedDelivery(value?: ExecuteNtvbCreditMissedDelivery): void;

  hasNtvbCustomerSearch(): boolean;
  clearNtvbCustomerSearch(): void;
  getNtvbCustomerSearch(): ExecuteNtvbCustomerSearch | undefined;
  setNtvbCustomerSearch(value?: ExecuteNtvbCustomerSearch): void;

  hasNtvbEndCall(): boolean;
  clearNtvbEndCall(): void;
  getNtvbEndCall(): ExecuteNtvbEndCall | undefined;
  setNtvbEndCall(value?: ExecuteNtvbEndCall): void;

  hasNtvbIntegrationDefinition(): boolean;
  clearNtvbIntegrationDefinition(): void;
  getNtvbIntegrationDefinition(): ExecuteNtvbIntegrationDefinition | undefined;
  setNtvbIntegrationDefinition(value?: ExecuteNtvbIntegrationDefinition): void;

  hasNtvbMissedDelivery(): boolean;
  clearNtvbMissedDelivery(): void;
  getNtvbMissedDelivery(): ExecuteNtvbMissedDelivery | undefined;
  setNtvbMissedDelivery(value?: ExecuteNtvbMissedDelivery): void;

  hasNtvbRemoveAutorenewal(): boolean;
  clearNtvbRemoveAutorenewal(): void;
  getNtvbRemoveAutorenewal(): ExecuteNtvbRemoveAutorenewal | undefined;
  setNtvbRemoveAutorenewal(value?: ExecuteNtvbRemoveAutorenewal): void;

  hasNtvbRenewSubscription(): boolean;
  clearNtvbRenewSubscription(): void;
  getNtvbRenewSubscription(): ExecuteNtvbRenewSubscription | undefined;
  setNtvbRenewSubscription(value?: ExecuteNtvbRenewSubscription): void;

  hasNtvbRenewalOffers(): boolean;
  clearNtvbRenewalOffers(): void;
  getNtvbRenewalOffers(): ExecuteNtvbRenewalOffers | undefined;
  setNtvbRenewalOffers(value?: ExecuteNtvbRenewalOffers): void;

  hasNtvbSetAutorenewal(): boolean;
  clearNtvbSetAutorenewal(): void;
  getNtvbSetAutorenewal(): ExecuteNtvbSetAutorenewal | undefined;
  setNtvbSetAutorenewal(value?: ExecuteNtvbSetAutorenewal): void;

  hasNtvbStartIncomingCall(): boolean;
  clearNtvbStartIncomingCall(): void;
  getNtvbStartIncomingCall(): ExecuteNtvbStartIncomingCall | undefined;
  setNtvbStartIncomingCall(value?: ExecuteNtvbStartIncomingCall): void;

  hasNtvbStartOutgoingCall(): boolean;
  clearNtvbStartOutgoingCall(): void;
  getNtvbStartOutgoingCall(): ExecuteNtvbStartOutgoingCall | undefined;
  setNtvbStartOutgoingCall(value?: ExecuteNtvbStartOutgoingCall): void;

  hasNtvbSubscriptionInfo(): boolean;
  clearNtvbSubscriptionInfo(): void;
  getNtvbSubscriptionInfo(): ExecuteNtvbSubscriptionInfo | undefined;
  setNtvbSubscriptionInfo(value?: ExecuteNtvbSubscriptionInfo): void;

  hasNtvbVacationStop(): boolean;
  clearNtvbVacationStop(): void;
  getNtvbVacationStop(): ExecuteNtvbVacationStop | undefined;
  setNtvbVacationStop(value?: ExecuteNtvbVacationStop): void;

  hasNtvbAuthtest(): boolean;
  clearNtvbAuthtest(): void;
  getNtvbAuthtest(): ExecuteNtvbAuthtest | undefined;
  setNtvbAuthtest(value?: ExecuteNtvbAuthtest): void;

  hasElavonCreditCardSale(): boolean;
  clearElavonCreditCardSale(): void;
  getElavonCreditCardSale(): ExecuteElavonCreditCardSale | undefined;
  setElavonCreditCardSale(value?: ExecuteElavonCreditCardSale): void;

  hasElavonAddRecurring(): boolean;
  clearElavonAddRecurring(): void;
  getElavonAddRecurring(): ExecuteElavonAddRecurring | undefined;
  setElavonAddRecurring(value?: ExecuteElavonAddRecurring): void;

  hasElavonDccResponse(): boolean;
  clearElavonDccResponse(): void;
  getElavonDccResponse(): ExecuteElavonDccResponse | undefined;
  setElavonDccResponse(value?: ExecuteElavonDccResponse): void;

  hasElavonDeleteRecurring(): boolean;
  clearElavonDeleteRecurring(): void;
  getElavonDeleteRecurring(): ExecuteElavonDeleteRecurring | undefined;
  setElavonDeleteRecurring(value?: ExecuteElavonDeleteRecurring): void;

  hasElavonUpdateRecurring(): boolean;
  clearElavonUpdateRecurring(): void;
  getElavonUpdateRecurring(): ExecuteElavonUpdateRecurring | undefined;
  setElavonUpdateRecurring(value?: ExecuteElavonUpdateRecurring): void;

  hasElavonHealthCareCcSale(): boolean;
  clearElavonHealthCareCcSale(): void;
  getElavonHealthCareCcSale(): ExecuteElavonHealthCareCCSale | undefined;
  setElavonHealthCareCcSale(value?: ExecuteElavonHealthCareCCSale): void;

  hasElavonAddInstallment(): boolean;
  clearElavonAddInstallment(): void;
  getElavonAddInstallment(): ExecuteElavonAddInstallment | undefined;
  setElavonAddInstallment(value?: ExecuteElavonAddInstallment): void;

  hasElavonUpdateInstallment(): boolean;
  clearElavonUpdateInstallment(): void;
  getElavonUpdateInstallment(): ExecuteElavonUpdateInstallment | undefined;
  setElavonUpdateInstallment(value?: ExecuteElavonUpdateInstallment): void;

  hasElavonDeleteInstallment(): boolean;
  clearElavonDeleteInstallment(): void;
  getElavonDeleteInstallment(): ExecuteElavonDeleteInstallment | undefined;
  setElavonDeleteInstallment(value?: ExecuteElavonDeleteInstallment): void;

  hasElavonMccCreditCardSale(): boolean;
  clearElavonMccCreditCardSale(): void;
  getElavonMccCreditCardSale(): ExecuteElavonMccCreditCardSale | undefined;
  setElavonMccCreditCardSale(value?: ExecuteElavonMccCreditCardSale): void;

  hasGlobalpaymentsCardSale(): boolean;
  clearGlobalpaymentsCardSale(): void;
  getGlobalpaymentsCardSale(): ExecuteGlobalPaymentsCardSale | undefined;
  setGlobalpaymentsCardSale(value?: ExecuteGlobalPaymentsCardSale): void;

  hasGlobalpaymentsGetTransactionById(): boolean;
  clearGlobalpaymentsGetTransactionById(): void;
  getGlobalpaymentsGetTransactionById(): ExecuteGlobalPaymentsGetTransactionByID | undefined;
  setGlobalpaymentsGetTransactionById(value?: ExecuteGlobalPaymentsGetTransactionByID): void;

  hasGlobalpaymentsListTransactions(): boolean;
  clearGlobalpaymentsListTransactions(): void;
  getGlobalpaymentsListTransactions(): ExecuteGlobalPaymentsListTransactions | undefined;
  setGlobalpaymentsListTransactions(value?: ExecuteGlobalPaymentsListTransactions): void;

  hasGlobalpaymentsRefundSale(): boolean;
  clearGlobalpaymentsRefundSale(): void;
  getGlobalpaymentsRefundSale(): ExecuteGlobalPaymentsRefundSale | undefined;
  setGlobalpaymentsRefundSale(value?: ExecuteGlobalPaymentsRefundSale): void;

  hasGlobalpaymentsReverseSaleOrRefund(): boolean;
  clearGlobalpaymentsReverseSaleOrRefund(): void;
  getGlobalpaymentsReverseSaleOrRefund(): ExecuteGlobalPaymentsReverseSaleOrRefund | undefined;
  setGlobalpaymentsReverseSaleOrRefund(value?: ExecuteGlobalPaymentsReverseSaleOrRefund): void;

  hasPayscoutCreditSale(): boolean;
  clearPayscoutCreditSale(): void;
  getPayscoutCreditSale(): ExecutePayScoutCreditCardSale | undefined;
  setPayscoutCreditSale(value?: ExecutePayScoutCreditCardSale): void;

  hasPayscoutEcheckSale(): boolean;
  clearPayscoutEcheckSale(): void;
  getPayscoutEcheckSale(): ExecutePayScoutEcheckSale | undefined;
  setPayscoutEcheckSale(value?: ExecutePayScoutEcheckSale): void;

  hasI2cEcho(): boolean;
  clearI2cEcho(): void;
  getI2cEcho(): ExecuteI2cEcho | undefined;
  setI2cEcho(value?: ExecuteI2cEcho): void;

  hasI2cBalanceInquiry(): boolean;
  clearI2cBalanceInquiry(): void;
  getI2cBalanceInquiry(): ExecuteI2cBalanceInquiry | undefined;
  setI2cBalanceInquiry(value?: ExecuteI2cBalanceInquiry): void;

  hasI2cVerifyUser(): boolean;
  clearI2cVerifyUser(): void;
  getI2cVerifyUser(): ExecuteI2cVerifyUser | undefined;
  setI2cVerifyUser(value?: ExecuteI2cVerifyUser): void;

  hasI2cSearchCustomer(): boolean;
  clearI2cSearchCustomer(): void;
  getI2cSearchCustomer(): ExecuteI2cSearchCustomer | undefined;
  setI2cSearchCustomer(value?: ExecuteI2cSearchCustomer): void;

  hasI2cMakePayment(): boolean;
  clearI2cMakePayment(): void;
  getI2cMakePayment(): ExecuteI2cMakePayment | undefined;
  setI2cMakePayment(value?: ExecuteI2cMakePayment): void;

  hasI2cGetCardholderProfile(): boolean;
  clearI2cGetCardholderProfile(): void;
  getI2cGetCardholderProfile(): ExecuteI2cGetCardholderProfile | undefined;
  setI2cGetCardholderProfile(value?: ExecuteI2cGetCardholderProfile): void;

  hasI2cGetCardholderStatement(): boolean;
  clearI2cGetCardholderStatement(): void;
  getI2cGetCardholderStatement(): ExecuteI2cGetCardholderStatement | undefined;
  setI2cGetCardholderStatement(value?: ExecuteI2cGetCardholderStatement): void;

  hasI2cGetCardholderBalance(): boolean;
  clearI2cGetCardholderBalance(): void;
  getI2cGetCardholderBalance(): ExecuteI2cGetCardholderBalance | undefined;
  setI2cGetCardholderBalance(value?: ExecuteI2cGetCardholderBalance): void;

  hasI2cGetCreditpaymentInfo(): boolean;
  clearI2cGetCreditpaymentInfo(): void;
  getI2cGetCreditpaymentInfo(): ExecuteI2cGetCreditPaymentInfo | undefined;
  setI2cGetCreditpaymentInfo(value?: ExecuteI2cGetCreditPaymentInfo): void;

  hasI2cTransactionHistory(): boolean;
  clearI2cTransactionHistory(): void;
  getI2cTransactionHistory(): ExecuteI2cTransactionHistory | undefined;
  setI2cTransactionHistory(value?: ExecuteI2cTransactionHistory): void;

  hasOpayoCcPayment(): boolean;
  clearOpayoCcPayment(): void;
  getOpayoCcPayment(): ExecuteOpayoCcPayments | undefined;
  setOpayoCcPayment(value?: ExecuteOpayoCcPayments): void;

  hasShift4CcPayment(): boolean;
  clearShift4CcPayment(): void;
  getShift4CcPayment(): ExecuteShift4CcPayments | undefined;
  setShift4CcPayment(value?: ExecuteShift4CcPayments): void;

  hasPoscorpAccesstoken(): boolean;
  clearPoscorpAccesstoken(): void;
  getPoscorpAccesstoken(): ExecutePoscorpAccesstoken | undefined;
  setPoscorpAccesstoken(value?: ExecutePoscorpAccesstoken): void;

  hasPoscorpLookupGuarantor(): boolean;
  clearPoscorpLookupGuarantor(): void;
  getPoscorpLookupGuarantor(): ExecutePoscorpLookupGuarantor | undefined;
  setPoscorpLookupGuarantor(value?: ExecutePoscorpLookupGuarantor): void;

  hasPoscorpUpdatePaymentStatus(): boolean;
  clearPoscorpUpdatePaymentStatus(): void;
  getPoscorpUpdatePaymentStatus(): ExecutePoscorpUpdatePaymentStatus | undefined;
  setPoscorpUpdatePaymentStatus(value?: ExecutePoscorpUpdatePaymentStatus): void;

  hasPianoGetUser(): boolean;
  clearPianoGetUser(): void;
  getPianoGetUser(): ExecutePianoGetUser | undefined;
  setPianoGetUser(value?: ExecutePianoGetUser): void;

  hasPianoUpdateUser(): boolean;
  clearPianoUpdateUser(): void;
  getPianoUpdateUser(): ExecutePianoUpdateUser | undefined;
  setPianoUpdateUser(value?: ExecutePianoUpdateUser): void;

  hasEpicGetToken(): boolean;
  clearEpicGetToken(): void;
  getEpicGetToken(): ExecuteEpicGetToken | undefined;
  setEpicGetToken(value?: ExecuteEpicGetToken): void;

  hasEpicGetPatient(): boolean;
  clearEpicGetPatient(): void;
  getEpicGetPatient(): ExecuteEpicGetPatient | undefined;
  setEpicGetPatient(value?: ExecuteEpicGetPatient): void;

  hasEpicMatchPatient(): boolean;
  clearEpicMatchPatient(): void;
  getEpicMatchPatient(): ExecuteEpicMatchPatient | undefined;
  setEpicMatchPatient(value?: ExecuteEpicMatchPatient): void;

  hasEpicSearchAppointment(): boolean;
  clearEpicSearchAppointment(): void;
  getEpicSearchAppointment(): ExecuteEpicSearchAppointment | undefined;
  setEpicSearchAppointment(value?: ExecuteEpicSearchAppointment): void;

  hasEpicFindAppointment(): boolean;
  clearEpicFindAppointment(): void;
  getEpicFindAppointment(): ExecuteEpicFindAppointment | undefined;
  setEpicFindAppointment(value?: ExecuteEpicFindAppointment): void;

  hasEpicBookAppointment(): boolean;
  clearEpicBookAppointment(): void;
  getEpicBookAppointment(): ExecuteEpicBookAppointment | undefined;
  setEpicBookAppointment(value?: ExecuteEpicBookAppointment): void;

  hasEpicGetAccount(): boolean;
  clearEpicGetAccount(): void;
  getEpicGetAccount(): ExecuteEpicGetAccount | undefined;
  setEpicGetAccount(value?: ExecuteEpicGetAccount): void;

  hasNewzwarePhoneLookup(): boolean;
  clearNewzwarePhoneLookup(): void;
  getNewzwarePhoneLookup(): ExecuteNewzwarePhoneLookup | undefined;
  setNewzwarePhoneLookup(value?: ExecuteNewzwarePhoneLookup): void;

  hasNewzwareAccountInquiry(): boolean;
  clearNewzwareAccountInquiry(): void;
  getNewzwareAccountInquiry(): ExecuteNewzwareAccountInquiry | undefined;
  setNewzwareAccountInquiry(value?: ExecuteNewzwareAccountInquiry): void;

  hasNewzwareCcPayment(): boolean;
  clearNewzwareCcPayment(): void;
  getNewzwareCcPayment(): ExecuteNewzwareCcPayment | undefined;
  setNewzwareCcPayment(value?: ExecuteNewzwareCcPayment): void;

  hasNewzwareAchPayment(): boolean;
  clearNewzwareAchPayment(): void;
  getNewzwareAchPayment(): ExecuteNewzwareAchPayment | undefined;
  setNewzwareAchPayment(value?: ExecuteNewzwareAchPayment): void;

  getValueCase(): ExecuteFlow.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteFlow.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteFlow): ExecuteFlow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteFlow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteFlow;
  static deserializeBinaryFromReader(message: ExecuteFlow, reader: jspb.BinaryReader): ExecuteFlow;
}

export namespace ExecuteFlow {
  export type AsObject = {
    pluginInstanceId: string,
    braintreeCreditSale?: ExecuteBraintreeCreditSale.AsObject,
    braintreeBankSale?: ExecuteBraintreeBankSale.AsObject,
    relatientGetPatientBalance?: ExecuteRelatientGetPatientBalance.AsObject,
    relatientGetPatientCcTokens?: ExecuteRelatientGetPatientCcTokens.AsObject,
    relatientPostPatientToken?: ExecuteRelatientPostPatientToken.AsObject,
    relatientPostPatientBalance?: ExecuteRelatientPostPatientBalance.AsObject,
    relatientGetPatient?: ExecuteRelatientGetPatient.AsObject,
    relatientPostBalanceById?: ExecuteRelatientPostBalanceById.AsObject,
    relatientCreateFortisAchtoken?: ExecuteRelatientCreateFortisAchtoken.AsObject,
    relatientCreateFortisCctoken?: ExecuteRelatientCreateFortisCctoken.AsObject,
    relatientFortisTokenAchDebitPayment?: ExecuteRelatientFortisTokenAchDebitPayment.AsObject,
    relatientFortisTokenCcPayment?: ExecuteRelatientFortisTokenCcPayment.AsObject,
    cybersourceCreditPayment?: ExecuteCybersourceCreditPayment.AsObject,
    cybersourceEcheckPayment?: ExecuteCybersourceEcheckPayment.AsObject,
    circproPhoneLookupWithBundle?: ExecuteCircproPhoneLookupWithBundle.AsObject,
    circproPhoneLookup?: ExecuteCircproPhoneLookup.AsObject,
    circproVacationRestartInquiry?: ExecuteCircproVacationRestartInquiry.AsObject,
    circproComplaintInquiry?: ExecuteCircproComplaintInquiry.AsObject,
    circproAccountInquiry?: ExecuteCircproAccountInquiry.AsObject,
    circproAccountInquiryWithTax?: ExecuteCircproAccountInquiryWithTax.AsObject,
    circproAccountInquiryWithTaxBundle?: ExecuteCircproAccountInquiryWithTaxBundle.AsObject,
    circproComplaintCodes?: ExecuteCircproComplaintCodes.AsObject,
    circproComplaintUpdate?: ExecuteCircproComplaintUpdate.AsObject,
    circproVacationUpdate?: ExecuteCircproVacationUpdate.AsObject,
    circproRestartUpdate?: ExecuteCircproRestartUpdate.AsObject,
    circproLawImmediatePayment?: ExecuteCircproLawImmediatePayment.AsObject,
    circproLawUpdateDataWithPac?: ExecuteCircproLawUpdateDataWithPac.AsObject,
    circproLawGetCustomers?: ExecuteCircproLawGetCustomers.AsObject,
    authorizenetChargeCreditCard?: ExecuteAuthorizenetChargeCreditCard.AsObject,
    authorizenetDebitBankAccount?: ExecuteAuthorizenetDebitBankAccount.AsObject,
    authorizenetCreateCustomerPaymentProfile?: ExecuteAuthorizenetCreateCustomerPaymentProfile.AsObject,
    authorizenetPaypalTransaction?: ExecuteAuthorizenetPaypalTransaction.AsObject,
    authorizenetGooglePayTransaction?: ExecuteAuthorizenetGooglePayTransaction.AsObject,
    authorizenetApplePayTransaction?: ExecuteAuthorizenetApplePayTransaction.AsObject,
    authorizenetPayPalAuthCapture?: ExecuteAuthorizenetPayPalAuthCapture.AsObject,
    expitransCcTransaction?: ExecuteExpitransCcTransaction.AsObject,
    expitransAchTransaction?: ExecuteExpitransAchTransaction.AsObject,
    axiamedfusionCcTransaction?: ExecuteAxiamedfusionCcTransaction.AsObject,
    axiamedfusionAchTransaction?: ExecuteAxiamedfusionAchTransaction.AsObject,
    axiamedfusionCardVerify?: ExecuteAxiamedfusionCardVerify.AsObject,
    instamedPaymentSale?: ExecuteInstamedPaymentSale.AsObject,
    instamedVoidPayment?: ExecuteInstamedVoidPayment.AsObject,
    usaepaySubmitCcPayments?: ExecuteUsaepaySubmitCcPayments.AsObject,
    usaepaySubmitAchPayments?: ExecuteUsaepaySubmitAchPayments.AsObject,
    usaepayGetCcToken?: ExecuteUsaepayGetCcToken.AsObject,
    ezidebitSubmitCcPayments?: ExecuteEzidebitSubmitCcPayments.AsObject,
    ezidebitSubmitAchPayments?: ExecuteEzidebitSubmitAchPayments.AsObject,
    bamboraSubmitCcPayments?: ExecuteBamboraSubmitCcPayments.AsObject,
    bamboraSubmitAchPayments?: ExecuteBamboraSubmitAchPayments.AsObject,
    repayStoreCard?: ExecuteRepayStoreCard.AsObject,
    repayPaymentToken?: ExecuteRepayPaymentToken.AsObject,
    repayAchPaymentToken?: ExecuteRepayAchPaymentToken.AsObject,
    axiaSubmitSaleRequestByCc?: ExecuteAxiaSubmitSaleRequestByCc.AsObject,
    axiaSubmitSaleRequestByCheck?: ExecuteAxiaSubmitSaleRequestByCheck.AsObject,
    securetradingSendPayment?: ExecuteSecuretradingSendPayment.AsObject,
    paymentVisionSubmitCardSaleRequestByCc?: ExecutePaymentVisionSubmitCardSaleRequestByCc.AsObject,
    paymentVisionSubmitCardSaleRequestByAch?: ExecutePaymentVisionSubmitCardSaleRequestByAch.AsObject,
    interproseLookupAccount?: ExecuteInterproseLookupAccount.AsObject,
    interproseSubmitCardSaleRequestByCc?: ExecuteInterproseSubmitCardSaleRequestByCc.AsObject,
    interproseSubmitCardSaleRequestByAch?: ExecuteInterproseSubmitCardSaleRequestByAch.AsObject,
    interproseLookupPaymentId?: ExecuteInterproseLookupPaymentId.AsObject,
    interproseLookupAccountByFormId?: ExecuteInterproseLookupAccountByFormId.AsObject,
    dallasnewsSearchByPhone?: ExecuteDallasnewsSearchByPhone.AsObject,
    dallasnewsSearchByZipStreet?: ExecuteDallasnewsSearchByZipStreet.AsObject,
    dallasnewsSearchBy?: ExecuteDallasnewsSearchBy.AsObject,
    dallasnewsCreateVacation?: ExecuteDallasnewsCreateVacation.AsObject,
    dallasnewsGetVacation?: ExecuteDallasnewsGetVacation.AsObject,
    dallasnewsGetVacationDaysBetween?: ExecuteDallasnewsGetVacationDaysBetween.AsObject,
    dallasnewsGetVacationWithCutoff?: ExecuteDallasnewsGetVacationWithCutoff.AsObject,
    dallasnewsDeleteVacation?: ExecuteDallasnewsDeleteVacation.AsObject,
    dallasnewsAddComplaint?: ExecuteDallasnewsAddComplaint.AsObject,
    dallasnewsUpdatePhoneNumber?: ExecuteDallasnewsUpdatePhoneNumber.AsObject,
    dallasnewsStopAccount?: ExecuteDallasnewsStopAccount.AsObject,
    dallasnewsCcPaymentToken?: ExecuteDallasnewsCcPaymentToken.AsObject,
    dallasnewsAchPaymentToken?: ExecuteDallasnewsAchPaymentToken.AsObject,
    paywaySubmitCardSaleRequest?: ExecutePaywaySubmitCardSaleRequest.AsObject,
    paywayCreateTokenRequest?: ExecutePaywayCreateTokenRequest.AsObject,
    paywaySubmitAchSaleRequest?: ExecutePaywaySubmitACHSaleRequest.AsObject,
    billingtreeSubmitCardSaleRequest?: ExecuteBillingtreeSubmitCardSaleRequest.AsObject,
    experianCcPaymentRequest?: ExecuteExperianCcPaymentRequest.AsObject,
    experianCcPaymentPlanRequest?: ExecuteExperianCcPaymentPlanRequest.AsObject,
    experianBalancerequest?: ExecuteExperianBalancerequest.AsObject,
    experianAchPaymentRequest?: ExecuteExperianAchPaymentRequest.AsObject,
    experianAchPaymentPlanRequest?: ExecuteExperianAchPaymentPlanRequest.AsObject,
    experianStellaCardEntry?: ExecuteExperianStellaCardEntry.AsObject,
    experianStellaEcheck?: ExecuteExperianStellaECheck.AsObject,
    experianStellaCardDeviceTokenization?: ExecuteExperianStellaCardDeviceTokenization.AsObject,
    experianStellaTokenPayment?: ExecuteExperianStellaTokenPayment.AsObject,
    experianStellaAchTokenization?: ExecuteExperianStellaAchTokenization.AsObject,
    experianStellaAddUsaEpayToken?: ExecuteExperianStellaAddusaepaytoken.AsObject,
    experianStellaPaymentPlans?: ExecuteExperianStellaPaymentPlans.AsObject,
    experianStellaAuth?: ExecuteExperianStellaAuth.AsObject,
    newscycleLogin?: ExecuteNewscycleLogin.AsObject,
    newscycleSearchPage?: ExecuteNewscycleSearchPage.AsObject,
    newscycleBillingInfo?: ExecuteNewscycleBillingInfo.AsObject,
    newscycleServiceErrorInfo?: ExecuteNewscycleServiceErrorInfo.AsObject,
    newscycleServiceErrorTrans?: ExecuteNewscycleServiceErrorTrans.AsObject,
    newscycleStopInfo?: ExecuteNewscycleStopInfo.AsObject,
    newscycleStopTrans?: ExecuteNewscycleStopTrans.AsObject,
    newscycleRenewInfo?: ExecuteNewscycleRenewInfo.AsObject,
    newscycleAutoRenewInfo?: ExecuteNewscycleAutoRenewInfo.AsObject,
    newscycleAutoTran?: ExecuteNewscycleAutoTran.AsObject,
    newscyclePayInfo?: ExecuteNewscyclePayInfo.AsObject,
    newscyclePayTran?: ExecuteNewscyclePayTran.AsObject,
    trustcommerceCreditSale?: ExecuteTrustcommerceCreditSale.AsObject,
    trustcommerceAchSale?: ExecuteTrustcommerceAchSale.AsObject,
    vantivCreditSale?: ExecuteVantivCreditSale.AsObject,
    vantivAchSale?: ExecuteVantivAchSale.AsObject,
    journeyLatest?: ExecuteJourneyLatest.AsObject,
    athenahealthGetPatients?: ExecuteAthenahealthGetPatients.AsObject,
    athenahealthGetPatientsWithId?: ExecuteAthenahealthGetPatientsWithId.AsObject,
    athenahealthCcPayment?: ExecuteAthenahealthCcPayment.AsObject,
    brainworksGetCustomersByPhone?: ExecuteBrainworksGetCustomersByPhone.AsObject,
    brainworksGetSuspends?: ExecuteBrainworksGetSuspends.AsObject,
    brainworksGetCustomerByCustIdV2?: ExecuteBrainworksGetCustomerByCustIdV2.AsObject,
    brainworksGetComplaints?: ExecuteBrainworksGetComplaints.AsObject,
    brainworksGetCodesOrTypes?: ExecuteBrainworksGetCodesOrTypes.AsObject,
    brainworksStopSuspends?: ExecuteBrainworksStopSuspends.AsObject,
    brainworksStartSuspends?: ExecuteBrainworksStartSuspends.AsObject,
    brainworksSendComplaint?: ExecuteBrainworksSendComplaint.AsObject,
    brainworksGetCustomerByCustId?: ExecuteBrainworksGetCustomerByCustId.AsObject,
    osgconnectCcPayments?: ExecuteOsgconnectCcPayments.AsObject,
    osgconnectAchPayments?: ExecuteOsgconnectAchPayments.AsObject,
    osgconnectValidateAccountNo?: ExecuteOsgconnectValidateAccountNo.AsObject,
    ntvbCreditMissedDelivery?: ExecuteNtvbCreditMissedDelivery.AsObject,
    ntvbCustomerSearch?: ExecuteNtvbCustomerSearch.AsObject,
    ntvbEndCall?: ExecuteNtvbEndCall.AsObject,
    ntvbIntegrationDefinition?: ExecuteNtvbIntegrationDefinition.AsObject,
    ntvbMissedDelivery?: ExecuteNtvbMissedDelivery.AsObject,
    ntvbRemoveAutorenewal?: ExecuteNtvbRemoveAutorenewal.AsObject,
    ntvbRenewSubscription?: ExecuteNtvbRenewSubscription.AsObject,
    ntvbRenewalOffers?: ExecuteNtvbRenewalOffers.AsObject,
    ntvbSetAutorenewal?: ExecuteNtvbSetAutorenewal.AsObject,
    ntvbStartIncomingCall?: ExecuteNtvbStartIncomingCall.AsObject,
    ntvbStartOutgoingCall?: ExecuteNtvbStartOutgoingCall.AsObject,
    ntvbSubscriptionInfo?: ExecuteNtvbSubscriptionInfo.AsObject,
    ntvbVacationStop?: ExecuteNtvbVacationStop.AsObject,
    ntvbAuthtest?: ExecuteNtvbAuthtest.AsObject,
    elavonCreditCardSale?: ExecuteElavonCreditCardSale.AsObject,
    elavonAddRecurring?: ExecuteElavonAddRecurring.AsObject,
    elavonDccResponse?: ExecuteElavonDccResponse.AsObject,
    elavonDeleteRecurring?: ExecuteElavonDeleteRecurring.AsObject,
    elavonUpdateRecurring?: ExecuteElavonUpdateRecurring.AsObject,
    elavonHealthCareCcSale?: ExecuteElavonHealthCareCCSale.AsObject,
    elavonAddInstallment?: ExecuteElavonAddInstallment.AsObject,
    elavonUpdateInstallment?: ExecuteElavonUpdateInstallment.AsObject,
    elavonDeleteInstallment?: ExecuteElavonDeleteInstallment.AsObject,
    elavonMccCreditCardSale?: ExecuteElavonMccCreditCardSale.AsObject,
    globalpaymentsCardSale?: ExecuteGlobalPaymentsCardSale.AsObject,
    globalpaymentsGetTransactionById?: ExecuteGlobalPaymentsGetTransactionByID.AsObject,
    globalpaymentsListTransactions?: ExecuteGlobalPaymentsListTransactions.AsObject,
    globalpaymentsRefundSale?: ExecuteGlobalPaymentsRefundSale.AsObject,
    globalpaymentsReverseSaleOrRefund?: ExecuteGlobalPaymentsReverseSaleOrRefund.AsObject,
    payscoutCreditSale?: ExecutePayScoutCreditCardSale.AsObject,
    payscoutEcheckSale?: ExecutePayScoutEcheckSale.AsObject,
    i2cEcho?: ExecuteI2cEcho.AsObject,
    i2cBalanceInquiry?: ExecuteI2cBalanceInquiry.AsObject,
    i2cVerifyUser?: ExecuteI2cVerifyUser.AsObject,
    i2cSearchCustomer?: ExecuteI2cSearchCustomer.AsObject,
    i2cMakePayment?: ExecuteI2cMakePayment.AsObject,
    i2cGetCardholderProfile?: ExecuteI2cGetCardholderProfile.AsObject,
    i2cGetCardholderStatement?: ExecuteI2cGetCardholderStatement.AsObject,
    i2cGetCardholderBalance?: ExecuteI2cGetCardholderBalance.AsObject,
    i2cGetCreditpaymentInfo?: ExecuteI2cGetCreditPaymentInfo.AsObject,
    i2cTransactionHistory?: ExecuteI2cTransactionHistory.AsObject,
    opayoCcPayment?: ExecuteOpayoCcPayments.AsObject,
    shift4CcPayment?: ExecuteShift4CcPayments.AsObject,
    poscorpAccesstoken?: ExecutePoscorpAccesstoken.AsObject,
    poscorpLookupGuarantor?: ExecutePoscorpLookupGuarantor.AsObject,
    poscorpUpdatePaymentStatus?: ExecutePoscorpUpdatePaymentStatus.AsObject,
    pianoGetUser?: ExecutePianoGetUser.AsObject,
    pianoUpdateUser?: ExecutePianoUpdateUser.AsObject,
    epicGetToken?: ExecuteEpicGetToken.AsObject,
    epicGetPatient?: ExecuteEpicGetPatient.AsObject,
    epicMatchPatient?: ExecuteEpicMatchPatient.AsObject,
    epicSearchAppointment?: ExecuteEpicSearchAppointment.AsObject,
    epicFindAppointment?: ExecuteEpicFindAppointment.AsObject,
    epicBookAppointment?: ExecuteEpicBookAppointment.AsObject,
    epicGetAccount?: ExecuteEpicGetAccount.AsObject,
    newzwarePhoneLookup?: ExecuteNewzwarePhoneLookup.AsObject,
    newzwareAccountInquiry?: ExecuteNewzwareAccountInquiry.AsObject,
    newzwareCcPayment?: ExecuteNewzwareCcPayment.AsObject,
    newzwareAchPayment?: ExecuteNewzwareAchPayment.AsObject,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    BRAINTREE_CREDIT_SALE = 101,
    BRAINTREE_BANK_SALE = 102,
    RELATIENT_GET_PATIENT_BALANCE = 201,
    RELATIENT_GET_PATIENT_CC_TOKENS = 202,
    RELATIENT_POST_PATIENT_TOKEN = 203,
    RELATIENT_POST_PATIENT_BALANCE = 204,
    RELATIENT_GET_PATIENT = 205,
    RELATIENT_POST_BALANCE_BY_ID = 206,
    RELATIENT_CREATE_FORTIS_ACHTOKEN = 207,
    RELATIENT_CREATE_FORTIS_CCTOKEN = 208,
    RELATIENT_FORTIS_TOKEN_ACH_DEBIT_PAYMENT = 209,
    RELATIENT_FORTIS_TOKEN_CC_PAYMENT = 210,
    CYBERSOURCE_CREDIT_PAYMENT = 301,
    CYBERSOURCE_ECHECK_PAYMENT = 302,
    CIRCPRO_PHONE_LOOKUP_WITH_BUNDLE = 401,
    CIRCPRO_PHONE_LOOKUP = 402,
    CIRCPRO_VACATION_RESTART_INQUIRY = 403,
    CIRCPRO_COMPLAINT_INQUIRY = 404,
    CIRCPRO_ACCOUNT_INQUIRY = 405,
    CIRCPRO_ACCOUNT_INQUIRY_WITH_TAX = 406,
    CIRCPRO_ACCOUNT_INQUIRY_WITH_TAX_BUNDLE = 407,
    CIRCPRO_COMPLAINT_CODES = 408,
    CIRCPRO_COMPLAINT_UPDATE = 409,
    CIRCPRO_VACATION_UPDATE = 410,
    CIRCPRO_RESTART_UPDATE = 411,
    CIRCPRO_LAW_IMMEDIATE_PAYMENT = 412,
    CIRCPRO_LAW_UPDATE_DATA_WITH_PAC = 413,
    CIRCPRO_LAW_GET_CUSTOMERS = 414,
    AUTHORIZENET_CHARGE_CREDIT_CARD = 501,
    AUTHORIZENET_DEBIT_BANK_ACCOUNT = 502,
    AUTHORIZENET_CREATE_CUSTOMER_PAYMENT_PROFILE = 503,
    AUTHORIZENET_PAYPAL_TRANSACTION = 504,
    AUTHORIZENET_GOOGLE_PAY_TRANSACTION = 505,
    AUTHORIZENET_APPLE_PAY_TRANSACTION = 506,
    AUTHORIZENET_PAY_PAL_AUTH_CAPTURE = 507,
    EXPITRANS_CC_TRANSACTION = 601,
    EXPITRANS_ACH_TRANSACTION = 602,
    AXIAMEDFUSION_CC_TRANSACTION = 701,
    AXIAMEDFUSION_ACH_TRANSACTION = 702,
    AXIAMEDFUSION_CARD_VERIFY = 703,
    INSTAMED_PAYMENT_SALE = 801,
    INSTAMED_VOID_PAYMENT = 802,
    USAEPAY_SUBMIT_CC_PAYMENTS = 901,
    USAEPAY_SUBMIT_ACH_PAYMENTS = 902,
    USAEPAY_GET_CC_TOKEN = 903,
    EZIDEBIT_SUBMIT_CC_PAYMENTS = 1001,
    EZIDEBIT_SUBMIT_ACH_PAYMENTS = 1002,
    BAMBORA_SUBMIT_CC_PAYMENTS = 1101,
    BAMBORA_SUBMIT_ACH_PAYMENTS = 1102,
    REPAY_STORE_CARD = 1201,
    REPAY_PAYMENT_TOKEN = 1202,
    REPAY_ACH_PAYMENT_TOKEN = 1203,
    AXIA_SUBMIT_SALE_REQUEST_BY_CC = 1301,
    AXIA_SUBMIT_SALE_REQUEST_BY_CHECK = 1302,
    SECURETRADING_SEND_PAYMENT = 1401,
    PAYMENT_VISION_SUBMIT_CARD_SALE_REQUEST_BY_CC = 1501,
    PAYMENT_VISION_SUBMIT_CARD_SALE_REQUEST_BY_ACH = 1502,
    INTERPROSE_LOOKUP_ACCOUNT = 1601,
    INTERPROSE_SUBMIT_CARD_SALE_REQUEST_BY_CC = 1602,
    INTERPROSE_SUBMIT_CARD_SALE_REQUEST_BY_ACH = 1603,
    INTERPROSE_LOOKUP_PAYMENT_ID = 1604,
    INTERPROSE_LOOKUP_ACCOUNT_BY_FORM_ID = 1605,
    DALLASNEWS_SEARCH_BY_PHONE = 1701,
    DALLASNEWS_SEARCH_BY_ZIP_STREET = 1702,
    DALLASNEWS_SEARCH_BY = 1703,
    DALLASNEWS_CREATE_VACATION = 1704,
    DALLASNEWS_GET_VACATION = 1705,
    DALLASNEWS_GET_VACATION_DAYS_BETWEEN = 1706,
    DALLASNEWS_GET_VACATION_WITH_CUTOFF = 1707,
    DALLASNEWS_DELETE_VACATION = 1708,
    DALLASNEWS_ADD_COMPLAINT = 1709,
    DALLASNEWS_UPDATE_PHONE_NUMBER = 1710,
    DALLASNEWS_STOP_ACCOUNT = 1711,
    DALLASNEWS_CC_PAYMENT_TOKEN = 1712,
    DALLASNEWS_ACH_PAYMENT_TOKEN = 1713,
    PAYWAY_SUBMIT_CARD_SALE_REQUEST = 1801,
    PAYWAY_CREATE_TOKEN_REQUEST = 1802,
    PAYWAY_SUBMIT_ACH_SALE_REQUEST = 1803,
    BILLINGTREE_SUBMIT_CARD_SALE_REQUEST = 1901,
    EXPERIAN_CC_PAYMENT_REQUEST = 2001,
    EXPERIAN_CC_PAYMENT_PLAN_REQUEST = 2002,
    EXPERIAN_BALANCEREQUEST = 2003,
    EXPERIAN_ACH_PAYMENT_REQUEST = 2004,
    EXPERIAN_ACH_PAYMENT_PLAN_REQUEST = 2005,
    EXPERIAN_STELLA_CARD_ENTRY = 2006,
    EXPERIAN_STELLA_ECHECK = 2007,
    EXPERIAN_STELLA_CARD_DEVICE_TOKENIZATION = 2008,
    EXPERIAN_STELLA_TOKEN_PAYMENT = 2009,
    EXPERIAN_STELLA_ACH_TOKENIZATION = 2010,
    EXPERIAN_STELLA_ADD_USA_EPAY_TOKEN = 2011,
    EXPERIAN_STELLA_PAYMENT_PLANS = 2012,
    EXPERIAN_STELLA_AUTH = 2013,
    NEWSCYCLE_LOGIN = 2101,
    NEWSCYCLE_SEARCH_PAGE = 2102,
    NEWSCYCLE_BILLING_INFO = 2103,
    NEWSCYCLE_SERVICE_ERROR_INFO = 2104,
    NEWSCYCLE_SERVICE_ERROR_TRANS = 2105,
    NEWSCYCLE_STOP_INFO = 2106,
    NEWSCYCLE_STOP_TRANS = 2107,
    NEWSCYCLE_RENEW_INFO = 2108,
    NEWSCYCLE_AUTO_RENEW_INFO = 2109,
    NEWSCYCLE_AUTO_TRAN = 2110,
    NEWSCYCLE_PAY_INFO = 2111,
    NEWSCYCLE_PAY_TRAN = 2112,
    TRUSTCOMMERCE_CREDIT_SALE = 2201,
    TRUSTCOMMERCE_ACH_SALE = 2202,
    VANTIV_CREDIT_SALE = 2301,
    VANTIV_ACH_SALE = 2302,
    JOURNEY_LATEST = 2401,
    ATHENAHEALTH_GET_PATIENTS = 2501,
    ATHENAHEALTH_GET_PATIENTS_WITH_ID = 2502,
    ATHENAHEALTH_CC_PAYMENT = 2503,
    BRAINWORKS_GET_CUSTOMERS_BY_PHONE = 2601,
    BRAINWORKS_GET_SUSPENDS = 2602,
    BRAINWORKS_GET_CUSTOMER_BY_CUST_ID_V2 = 2603,
    BRAINWORKS_GET_COMPLAINTS = 2604,
    BRAINWORKS_GET_CODES_OR_TYPES = 2605,
    BRAINWORKS_STOP_SUSPENDS = 2606,
    BRAINWORKS_START_SUSPENDS = 2607,
    BRAINWORKS_SEND_COMPLAINT = 2608,
    BRAINWORKS_GET_CUSTOMER_BY_CUST_ID = 2609,
    OSGCONNECT_CC_PAYMENTS = 2701,
    OSGCONNECT_ACH_PAYMENTS = 2702,
    OSGCONNECT_VALIDATE_ACCOUNT_NO = 2703,
    NTVB_CREDIT_MISSED_DELIVERY = 2801,
    NTVB_CUSTOMER_SEARCH = 2802,
    NTVB_END_CALL = 2803,
    NTVB_INTEGRATION_DEFINITION = 2804,
    NTVB_MISSED_DELIVERY = 2805,
    NTVB_REMOVE_AUTORENEWAL = 2806,
    NTVB_RENEW_SUBSCRIPTION = 2807,
    NTVB_RENEWAL_OFFERS = 2808,
    NTVB_SET_AUTORENEWAL = 2809,
    NTVB_START_INCOMING_CALL = 2810,
    NTVB_START_OUTGOING_CALL = 2811,
    NTVB_SUBSCRIPTION_INFO = 2812,
    NTVB_VACATION_STOP = 2813,
    NTVB_AUTHTEST = 2814,
    ELAVON_CREDIT_CARD_SALE = 2901,
    ELAVON_ADD_RECURRING = 2902,
    ELAVON_DCC_RESPONSE = 2903,
    ELAVON_DELETE_RECURRING = 2904,
    ELAVON_UPDATE_RECURRING = 2905,
    ELAVON_HEALTH_CARE_CC_SALE = 2906,
    ELAVON_ADD_INSTALLMENT = 2907,
    ELAVON_UPDATE_INSTALLMENT = 2908,
    ELAVON_DELETE_INSTALLMENT = 2909,
    ELAVON_MCC_CREDIT_CARD_SALE = 2910,
    GLOBALPAYMENTS_CARD_SALE = 3001,
    GLOBALPAYMENTS_GET_TRANSACTION_BY_ID = 3002,
    GLOBALPAYMENTS_LIST_TRANSACTIONS = 3003,
    GLOBALPAYMENTS_REFUND_SALE = 3004,
    GLOBALPAYMENTS_REVERSE_SALE_OR_REFUND = 3005,
    PAYSCOUT_CREDIT_SALE = 3101,
    PAYSCOUT_ECHECK_SALE = 3102,
    I2C_ECHO = 3201,
    I2C_BALANCE_INQUIRY = 3202,
    I2C_VERIFY_USER = 3203,
    I2C_SEARCH_CUSTOMER = 3204,
    I2C_MAKE_PAYMENT = 3205,
    I2C_GET_CARDHOLDER_PROFILE = 3206,
    I2C_GET_CARDHOLDER_STATEMENT = 3207,
    I2C_GET_CARDHOLDER_BALANCE = 3208,
    I2C_GET_CREDITPAYMENT_INFO = 3209,
    I2C_TRANSACTION_HISTORY = 3210,
    OPAYO_CC_PAYMENT = 3301,
    SHIFT4_CC_PAYMENT = 3401,
    POSCORP_ACCESSTOKEN = 3501,
    POSCORP_LOOKUP_GUARANTOR = 3502,
    POSCORP_UPDATE_PAYMENT_STATUS = 3503,
    PIANO_GET_USER = 3601,
    PIANO_UPDATE_USER = 3602,
    EPIC_GET_TOKEN = 3701,
    EPIC_GET_PATIENT = 3702,
    EPIC_MATCH_PATIENT = 3703,
    EPIC_SEARCH_APPOINTMENT = 3704,
    EPIC_FIND_APPOINTMENT = 3705,
    EPIC_BOOK_APPOINTMENT = 3706,
    EPIC_GET_ACCOUNT = 3707,
    NEWZWARE_PHONE_LOOKUP = 3801,
    NEWZWARE_ACCOUNT_INQUIRY = 3802,
    NEWZWARE_CC_PAYMENT = 3803,
    NEWZWARE_ACH_PAYMENT = 3804,
  }
}

export class InvoiceExperianQueryBalance extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoiceExperianQueryBalance.AsObject;
  static toObject(includeInstance: boolean, msg: InvoiceExperianQueryBalance): InvoiceExperianQueryBalance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoiceExperianQueryBalance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoiceExperianQueryBalance;
  static deserializeBinaryFromReader(message: InvoiceExperianQueryBalance, reader: jspb.BinaryReader): InvoiceExperianQueryBalance;
}

export namespace InvoiceExperianQueryBalance {
  export type AsObject = {
  }
}

export class InvoiceAuthorizeNetAuthorizedTransactionIdLookup extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoiceAuthorizeNetAuthorizedTransactionIdLookup.AsObject;
  static toObject(includeInstance: boolean, msg: InvoiceAuthorizeNetAuthorizedTransactionIdLookup): InvoiceAuthorizeNetAuthorizedTransactionIdLookup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoiceAuthorizeNetAuthorizedTransactionIdLookup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoiceAuthorizeNetAuthorizedTransactionIdLookup;
  static deserializeBinaryFromReader(message: InvoiceAuthorizeNetAuthorizedTransactionIdLookup, reader: jspb.BinaryReader): InvoiceAuthorizeNetAuthorizedTransactionIdLookup;
}

export namespace InvoiceAuthorizeNetAuthorizedTransactionIdLookup {
  export type AsObject = {
  }
}

export class InvoiceAuthorizeNetLinkData extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoiceAuthorizeNetLinkData.AsObject;
  static toObject(includeInstance: boolean, msg: InvoiceAuthorizeNetLinkData): InvoiceAuthorizeNetLinkData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoiceAuthorizeNetLinkData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoiceAuthorizeNetLinkData;
  static deserializeBinaryFromReader(message: InvoiceAuthorizeNetLinkData, reader: jspb.BinaryReader): InvoiceAuthorizeNetLinkData;
}

export namespace InvoiceAuthorizeNetLinkData {
  export type AsObject = {
  }
}

export class InvoiceAuthorizeNetCustomHttp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoiceAuthorizeNetCustomHttp.AsObject;
  static toObject(includeInstance: boolean, msg: InvoiceAuthorizeNetCustomHttp): InvoiceAuthorizeNetCustomHttp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoiceAuthorizeNetCustomHttp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoiceAuthorizeNetCustomHttp;
  static deserializeBinaryFromReader(message: InvoiceAuthorizeNetCustomHttp, reader: jspb.BinaryReader): InvoiceAuthorizeNetCustomHttp;
}

export namespace InvoiceAuthorizeNetCustomHttp {
  export type AsObject = {
  }
}

export class InvoiceJourney extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoiceJourney.AsObject;
  static toObject(includeInstance: boolean, msg: InvoiceJourney): InvoiceJourney.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoiceJourney, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoiceJourney;
  static deserializeBinaryFromReader(message: InvoiceJourney, reader: jspb.BinaryReader): InvoiceJourney;
}

export namespace InvoiceJourney {
  export type AsObject = {
  }
}

export class InvoiceDynamicJourney extends jspb.Message {
  clearMatchFieldsList(): void;
  getMatchFieldsList(): Array<string>;
  setMatchFieldsList(value: Array<string>): void;
  addMatchFields(value: string, index?: number): string;

  getTotalField(): string;
  setTotalField(value: string): void;

  getJourneyFieldsMap(): jspb.Map<string, ListOfStrings>;
  clearJourneyFieldsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoiceDynamicJourney.AsObject;
  static toObject(includeInstance: boolean, msg: InvoiceDynamicJourney): InvoiceDynamicJourney.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoiceDynamicJourney, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoiceDynamicJourney;
  static deserializeBinaryFromReader(message: InvoiceDynamicJourney, reader: jspb.BinaryReader): InvoiceDynamicJourney;
}

export namespace InvoiceDynamicJourney {
  export type AsObject = {
    matchFieldsList: Array<string>,
    totalField: string,
    journeyFieldsMap: Array<[string, ListOfStrings.AsObject]>,
  }
}

export class InvoiceNewzwareAccountInquiry extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoiceNewzwareAccountInquiry.AsObject;
  static toObject(includeInstance: boolean, msg: InvoiceNewzwareAccountInquiry): InvoiceNewzwareAccountInquiry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoiceNewzwareAccountInquiry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoiceNewzwareAccountInquiry;
  static deserializeBinaryFromReader(message: InvoiceNewzwareAccountInquiry, reader: jspb.BinaryReader): InvoiceNewzwareAccountInquiry;
}

export namespace InvoiceNewzwareAccountInquiry {
  export type AsObject = {
  }
}

export class VerificationExperianQueryBalance extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerificationExperianQueryBalance.AsObject;
  static toObject(includeInstance: boolean, msg: VerificationExperianQueryBalance): VerificationExperianQueryBalance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerificationExperianQueryBalance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerificationExperianQueryBalance;
  static deserializeBinaryFromReader(message: VerificationExperianQueryBalance, reader: jspb.BinaryReader): VerificationExperianQueryBalance;
}

export namespace VerificationExperianQueryBalance {
  export type AsObject = {
  }
}

export class VerificationExperianLinkData extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerificationExperianLinkData.AsObject;
  static toObject(includeInstance: boolean, msg: VerificationExperianLinkData): VerificationExperianLinkData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerificationExperianLinkData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerificationExperianLinkData;
  static deserializeBinaryFromReader(message: VerificationExperianLinkData, reader: jspb.BinaryReader): VerificationExperianLinkData;
}

export namespace VerificationExperianLinkData {
  export type AsObject = {
  }
}

export class VerificationExperianZipDob extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerificationExperianZipDob.AsObject;
  static toObject(includeInstance: boolean, msg: VerificationExperianZipDob): VerificationExperianZipDob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerificationExperianZipDob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerificationExperianZipDob;
  static deserializeBinaryFromReader(message: VerificationExperianZipDob, reader: jspb.BinaryReader): VerificationExperianZipDob;
}

export namespace VerificationExperianZipDob {
  export type AsObject = {
  }
}

export class VerificationAuthorizeNetCustomerProfile extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerificationAuthorizeNetCustomerProfile.AsObject;
  static toObject(includeInstance: boolean, msg: VerificationAuthorizeNetCustomerProfile): VerificationAuthorizeNetCustomerProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerificationAuthorizeNetCustomerProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerificationAuthorizeNetCustomerProfile;
  static deserializeBinaryFromReader(message: VerificationAuthorizeNetCustomerProfile, reader: jspb.BinaryReader): VerificationAuthorizeNetCustomerProfile;
}

export namespace VerificationAuthorizeNetCustomerProfile {
  export type AsObject = {
  }
}

export class VerificationAuthorizeNetLinkData extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerificationAuthorizeNetLinkData.AsObject;
  static toObject(includeInstance: boolean, msg: VerificationAuthorizeNetLinkData): VerificationAuthorizeNetLinkData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerificationAuthorizeNetLinkData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerificationAuthorizeNetLinkData;
  static deserializeBinaryFromReader(message: VerificationAuthorizeNetLinkData, reader: jspb.BinaryReader): VerificationAuthorizeNetLinkData;
}

export namespace VerificationAuthorizeNetLinkData {
  export type AsObject = {
  }
}

export class VerificationJourney extends jspb.Message {
  getDateOfBirthField(): string;
  setDateOfBirthField(value: string): void;

  getLastNameField(): string;
  setLastNameField(value: string): void;

  getFirstNameField(): string;
  setFirstNameField(value: string): void;

  getZipField(): string;
  setZipField(value: string): void;

  getLast4Ssn(): string;
  setLast4Ssn(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerificationJourney.AsObject;
  static toObject(includeInstance: boolean, msg: VerificationJourney): VerificationJourney.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerificationJourney, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerificationJourney;
  static deserializeBinaryFromReader(message: VerificationJourney, reader: jspb.BinaryReader): VerificationJourney;
}

export namespace VerificationJourney {
  export type AsObject = {
    dateOfBirthField: string,
    lastNameField: string,
    firstNameField: string,
    zipField: string,
    last4Ssn: string,
  }
}

export class VerificationNewzwareLookupPhone extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerificationNewzwareLookupPhone.AsObject;
  static toObject(includeInstance: boolean, msg: VerificationNewzwareLookupPhone): VerificationNewzwareLookupPhone.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerificationNewzwareLookupPhone, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerificationNewzwareLookupPhone;
  static deserializeBinaryFromReader(message: VerificationNewzwareLookupPhone, reader: jspb.BinaryReader): VerificationNewzwareLookupPhone;
}

export namespace VerificationNewzwareLookupPhone {
  export type AsObject = {
  }
}

export class VerificationNewzwareAccountInquiry extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerificationNewzwareAccountInquiry.AsObject;
  static toObject(includeInstance: boolean, msg: VerificationNewzwareAccountInquiry): VerificationNewzwareAccountInquiry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerificationNewzwareAccountInquiry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerificationNewzwareAccountInquiry;
  static deserializeBinaryFromReader(message: VerificationNewzwareAccountInquiry, reader: jspb.BinaryReader): VerificationNewzwareAccountInquiry;
}

export namespace VerificationNewzwareAccountInquiry {
  export type AsObject = {
  }
}

export class PaymentExperianCC extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentExperianCC.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentExperianCC): PaymentExperianCC.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentExperianCC, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentExperianCC;
  static deserializeBinaryFromReader(message: PaymentExperianCC, reader: jspb.BinaryReader): PaymentExperianCC;
}

export namespace PaymentExperianCC {
  export type AsObject = {
  }
}

export class PaymentExperianACH extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentExperianACH.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentExperianACH): PaymentExperianACH.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentExperianACH, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentExperianACH;
  static deserializeBinaryFromReader(message: PaymentExperianACH, reader: jspb.BinaryReader): PaymentExperianACH;
}

export namespace PaymentExperianACH {
  export type AsObject = {
  }
}

export class PaymentAuthorizeNetCC extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentAuthorizeNetCC.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentAuthorizeNetCC): PaymentAuthorizeNetCC.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentAuthorizeNetCC, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentAuthorizeNetCC;
  static deserializeBinaryFromReader(message: PaymentAuthorizeNetCC, reader: jspb.BinaryReader): PaymentAuthorizeNetCC;
}

export namespace PaymentAuthorizeNetCC {
  export type AsObject = {
  }
}

export class PaymentAuthorizeNetACH extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentAuthorizeNetACH.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentAuthorizeNetACH): PaymentAuthorizeNetACH.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentAuthorizeNetACH, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentAuthorizeNetACH;
  static deserializeBinaryFromReader(message: PaymentAuthorizeNetACH, reader: jspb.BinaryReader): PaymentAuthorizeNetACH;
}

export namespace PaymentAuthorizeNetACH {
  export type AsObject = {
  }
}

export class PaymentAuthorizeNetPaypal extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentAuthorizeNetPaypal.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentAuthorizeNetPaypal): PaymentAuthorizeNetPaypal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentAuthorizeNetPaypal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentAuthorizeNetPaypal;
  static deserializeBinaryFromReader(message: PaymentAuthorizeNetPaypal, reader: jspb.BinaryReader): PaymentAuthorizeNetPaypal;
}

export namespace PaymentAuthorizeNetPaypal {
  export type AsObject = {
  }
}

export class PaymentAuthorizeNetApplePay extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentAuthorizeNetApplePay.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentAuthorizeNetApplePay): PaymentAuthorizeNetApplePay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentAuthorizeNetApplePay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentAuthorizeNetApplePay;
  static deserializeBinaryFromReader(message: PaymentAuthorizeNetApplePay, reader: jspb.BinaryReader): PaymentAuthorizeNetApplePay;
}

export namespace PaymentAuthorizeNetApplePay {
  export type AsObject = {
  }
}

export class PaymentAuthorizeNetGooglePay extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentAuthorizeNetGooglePay.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentAuthorizeNetGooglePay): PaymentAuthorizeNetGooglePay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentAuthorizeNetGooglePay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentAuthorizeNetGooglePay;
  static deserializeBinaryFromReader(message: PaymentAuthorizeNetGooglePay, reader: jspb.BinaryReader): PaymentAuthorizeNetGooglePay;
}

export namespace PaymentAuthorizeNetGooglePay {
  export type AsObject = {
  }
}

export class PaymentPaywaySubmitCardSaleRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentPaywaySubmitCardSaleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentPaywaySubmitCardSaleRequest): PaymentPaywaySubmitCardSaleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentPaywaySubmitCardSaleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentPaywaySubmitCardSaleRequest;
  static deserializeBinaryFromReader(message: PaymentPaywaySubmitCardSaleRequest, reader: jspb.BinaryReader): PaymentPaywaySubmitCardSaleRequest;
}

export namespace PaymentPaywaySubmitCardSaleRequest {
  export type AsObject = {
  }
}

export class PaymentPaywaySubmitACHAlertRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentPaywaySubmitACHAlertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentPaywaySubmitACHAlertRequest): PaymentPaywaySubmitACHAlertRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentPaywaySubmitACHAlertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentPaywaySubmitACHAlertRequest;
  static deserializeBinaryFromReader(message: PaymentPaywaySubmitACHAlertRequest, reader: jspb.BinaryReader): PaymentPaywaySubmitACHAlertRequest;
}

export namespace PaymentPaywaySubmitACHAlertRequest {
  export type AsObject = {
  }
}

export class PaymentNewzwareCc extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentNewzwareCc.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentNewzwareCc): PaymentNewzwareCc.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentNewzwareCc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentNewzwareCc;
  static deserializeBinaryFromReader(message: PaymentNewzwareCc, reader: jspb.BinaryReader): PaymentNewzwareCc;
}

export namespace PaymentNewzwareCc {
  export type AsObject = {
  }
}

export class PaymentNewzwareAch extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentNewzwareAch.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentNewzwareAch): PaymentNewzwareAch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentNewzwareAch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentNewzwareAch;
  static deserializeBinaryFromReader(message: PaymentNewzwareAch, reader: jspb.BinaryReader): PaymentNewzwareAch;
}

export namespace PaymentNewzwareAch {
  export type AsObject = {
  }
}

export class ExecuteBraintreeCreditSale extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteBraintreeCreditSale.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteBraintreeCreditSale): ExecuteBraintreeCreditSale.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteBraintreeCreditSale, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteBraintreeCreditSale;
  static deserializeBinaryFromReader(message: ExecuteBraintreeCreditSale, reader: jspb.BinaryReader): ExecuteBraintreeCreditSale;
}

export namespace ExecuteBraintreeCreditSale {
  export type AsObject = {
  }
}

export class ExecuteBraintreeBankSale extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteBraintreeBankSale.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteBraintreeBankSale): ExecuteBraintreeBankSale.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteBraintreeBankSale, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteBraintreeBankSale;
  static deserializeBinaryFromReader(message: ExecuteBraintreeBankSale, reader: jspb.BinaryReader): ExecuteBraintreeBankSale;
}

export namespace ExecuteBraintreeBankSale {
  export type AsObject = {
  }
}

export class ExecuteRelatientGetPatientBalance extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteRelatientGetPatientBalance.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteRelatientGetPatientBalance): ExecuteRelatientGetPatientBalance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteRelatientGetPatientBalance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteRelatientGetPatientBalance;
  static deserializeBinaryFromReader(message: ExecuteRelatientGetPatientBalance, reader: jspb.BinaryReader): ExecuteRelatientGetPatientBalance;
}

export namespace ExecuteRelatientGetPatientBalance {
  export type AsObject = {
  }
}

export class ExecuteRelatientGetPatientCcTokens extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteRelatientGetPatientCcTokens.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteRelatientGetPatientCcTokens): ExecuteRelatientGetPatientCcTokens.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteRelatientGetPatientCcTokens, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteRelatientGetPatientCcTokens;
  static deserializeBinaryFromReader(message: ExecuteRelatientGetPatientCcTokens, reader: jspb.BinaryReader): ExecuteRelatientGetPatientCcTokens;
}

export namespace ExecuteRelatientGetPatientCcTokens {
  export type AsObject = {
  }
}

export class ExecuteRelatientPostPatientToken extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteRelatientPostPatientToken.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteRelatientPostPatientToken): ExecuteRelatientPostPatientToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteRelatientPostPatientToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteRelatientPostPatientToken;
  static deserializeBinaryFromReader(message: ExecuteRelatientPostPatientToken, reader: jspb.BinaryReader): ExecuteRelatientPostPatientToken;
}

export namespace ExecuteRelatientPostPatientToken {
  export type AsObject = {
  }
}

export class ExecuteRelatientPostPatientBalance extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteRelatientPostPatientBalance.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteRelatientPostPatientBalance): ExecuteRelatientPostPatientBalance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteRelatientPostPatientBalance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteRelatientPostPatientBalance;
  static deserializeBinaryFromReader(message: ExecuteRelatientPostPatientBalance, reader: jspb.BinaryReader): ExecuteRelatientPostPatientBalance;
}

export namespace ExecuteRelatientPostPatientBalance {
  export type AsObject = {
  }
}

export class ExecuteRelatientGetPatient extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteRelatientGetPatient.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteRelatientGetPatient): ExecuteRelatientGetPatient.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteRelatientGetPatient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteRelatientGetPatient;
  static deserializeBinaryFromReader(message: ExecuteRelatientGetPatient, reader: jspb.BinaryReader): ExecuteRelatientGetPatient;
}

export namespace ExecuteRelatientGetPatient {
  export type AsObject = {
  }
}

export class ExecuteRelatientPostBalanceById extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteRelatientPostBalanceById.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteRelatientPostBalanceById): ExecuteRelatientPostBalanceById.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteRelatientPostBalanceById, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteRelatientPostBalanceById;
  static deserializeBinaryFromReader(message: ExecuteRelatientPostBalanceById, reader: jspb.BinaryReader): ExecuteRelatientPostBalanceById;
}

export namespace ExecuteRelatientPostBalanceById {
  export type AsObject = {
  }
}

export class ExecuteRelatientCreateFortisAchtoken extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteRelatientCreateFortisAchtoken.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteRelatientCreateFortisAchtoken): ExecuteRelatientCreateFortisAchtoken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteRelatientCreateFortisAchtoken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteRelatientCreateFortisAchtoken;
  static deserializeBinaryFromReader(message: ExecuteRelatientCreateFortisAchtoken, reader: jspb.BinaryReader): ExecuteRelatientCreateFortisAchtoken;
}

export namespace ExecuteRelatientCreateFortisAchtoken {
  export type AsObject = {
  }
}

export class ExecuteRelatientCreateFortisCctoken extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteRelatientCreateFortisCctoken.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteRelatientCreateFortisCctoken): ExecuteRelatientCreateFortisCctoken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteRelatientCreateFortisCctoken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteRelatientCreateFortisCctoken;
  static deserializeBinaryFromReader(message: ExecuteRelatientCreateFortisCctoken, reader: jspb.BinaryReader): ExecuteRelatientCreateFortisCctoken;
}

export namespace ExecuteRelatientCreateFortisCctoken {
  export type AsObject = {
  }
}

export class ExecuteRelatientFortisTokenAchDebitPayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteRelatientFortisTokenAchDebitPayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteRelatientFortisTokenAchDebitPayment): ExecuteRelatientFortisTokenAchDebitPayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteRelatientFortisTokenAchDebitPayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteRelatientFortisTokenAchDebitPayment;
  static deserializeBinaryFromReader(message: ExecuteRelatientFortisTokenAchDebitPayment, reader: jspb.BinaryReader): ExecuteRelatientFortisTokenAchDebitPayment;
}

export namespace ExecuteRelatientFortisTokenAchDebitPayment {
  export type AsObject = {
  }
}

export class ExecuteRelatientFortisTokenCcPayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteRelatientFortisTokenCcPayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteRelatientFortisTokenCcPayment): ExecuteRelatientFortisTokenCcPayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteRelatientFortisTokenCcPayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteRelatientFortisTokenCcPayment;
  static deserializeBinaryFromReader(message: ExecuteRelatientFortisTokenCcPayment, reader: jspb.BinaryReader): ExecuteRelatientFortisTokenCcPayment;
}

export namespace ExecuteRelatientFortisTokenCcPayment {
  export type AsObject = {
  }
}

export class ExecuteCybersourceCreditPayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteCybersourceCreditPayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteCybersourceCreditPayment): ExecuteCybersourceCreditPayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteCybersourceCreditPayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteCybersourceCreditPayment;
  static deserializeBinaryFromReader(message: ExecuteCybersourceCreditPayment, reader: jspb.BinaryReader): ExecuteCybersourceCreditPayment;
}

export namespace ExecuteCybersourceCreditPayment {
  export type AsObject = {
  }
}

export class ExecuteCybersourceEcheckPayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteCybersourceEcheckPayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteCybersourceEcheckPayment): ExecuteCybersourceEcheckPayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteCybersourceEcheckPayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteCybersourceEcheckPayment;
  static deserializeBinaryFromReader(message: ExecuteCybersourceEcheckPayment, reader: jspb.BinaryReader): ExecuteCybersourceEcheckPayment;
}

export namespace ExecuteCybersourceEcheckPayment {
  export type AsObject = {
  }
}

export class ExecuteCircproPhoneLookupWithBundle extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteCircproPhoneLookupWithBundle.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteCircproPhoneLookupWithBundle): ExecuteCircproPhoneLookupWithBundle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteCircproPhoneLookupWithBundle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteCircproPhoneLookupWithBundle;
  static deserializeBinaryFromReader(message: ExecuteCircproPhoneLookupWithBundle, reader: jspb.BinaryReader): ExecuteCircproPhoneLookupWithBundle;
}

export namespace ExecuteCircproPhoneLookupWithBundle {
  export type AsObject = {
  }
}

export class ExecuteCircproPhoneLookup extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteCircproPhoneLookup.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteCircproPhoneLookup): ExecuteCircproPhoneLookup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteCircproPhoneLookup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteCircproPhoneLookup;
  static deserializeBinaryFromReader(message: ExecuteCircproPhoneLookup, reader: jspb.BinaryReader): ExecuteCircproPhoneLookup;
}

export namespace ExecuteCircproPhoneLookup {
  export type AsObject = {
  }
}

export class ExecuteCircproVacationRestartInquiry extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteCircproVacationRestartInquiry.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteCircproVacationRestartInquiry): ExecuteCircproVacationRestartInquiry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteCircproVacationRestartInquiry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteCircproVacationRestartInquiry;
  static deserializeBinaryFromReader(message: ExecuteCircproVacationRestartInquiry, reader: jspb.BinaryReader): ExecuteCircproVacationRestartInquiry;
}

export namespace ExecuteCircproVacationRestartInquiry {
  export type AsObject = {
  }
}

export class ExecuteCircproComplaintInquiry extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteCircproComplaintInquiry.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteCircproComplaintInquiry): ExecuteCircproComplaintInquiry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteCircproComplaintInquiry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteCircproComplaintInquiry;
  static deserializeBinaryFromReader(message: ExecuteCircproComplaintInquiry, reader: jspb.BinaryReader): ExecuteCircproComplaintInquiry;
}

export namespace ExecuteCircproComplaintInquiry {
  export type AsObject = {
  }
}

export class ExecuteCircproAccountInquiry extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteCircproAccountInquiry.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteCircproAccountInquiry): ExecuteCircproAccountInquiry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteCircproAccountInquiry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteCircproAccountInquiry;
  static deserializeBinaryFromReader(message: ExecuteCircproAccountInquiry, reader: jspb.BinaryReader): ExecuteCircproAccountInquiry;
}

export namespace ExecuteCircproAccountInquiry {
  export type AsObject = {
  }
}

export class ExecuteCircproAccountInquiryWithTax extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteCircproAccountInquiryWithTax.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteCircproAccountInquiryWithTax): ExecuteCircproAccountInquiryWithTax.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteCircproAccountInquiryWithTax, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteCircproAccountInquiryWithTax;
  static deserializeBinaryFromReader(message: ExecuteCircproAccountInquiryWithTax, reader: jspb.BinaryReader): ExecuteCircproAccountInquiryWithTax;
}

export namespace ExecuteCircproAccountInquiryWithTax {
  export type AsObject = {
  }
}

export class ExecuteCircproAccountInquiryWithTaxBundle extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteCircproAccountInquiryWithTaxBundle.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteCircproAccountInquiryWithTaxBundle): ExecuteCircproAccountInquiryWithTaxBundle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteCircproAccountInquiryWithTaxBundle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteCircproAccountInquiryWithTaxBundle;
  static deserializeBinaryFromReader(message: ExecuteCircproAccountInquiryWithTaxBundle, reader: jspb.BinaryReader): ExecuteCircproAccountInquiryWithTaxBundle;
}

export namespace ExecuteCircproAccountInquiryWithTaxBundle {
  export type AsObject = {
  }
}

export class ExecuteCircproComplaintCodes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteCircproComplaintCodes.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteCircproComplaintCodes): ExecuteCircproComplaintCodes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteCircproComplaintCodes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteCircproComplaintCodes;
  static deserializeBinaryFromReader(message: ExecuteCircproComplaintCodes, reader: jspb.BinaryReader): ExecuteCircproComplaintCodes;
}

export namespace ExecuteCircproComplaintCodes {
  export type AsObject = {
  }
}

export class ExecuteCircproComplaintUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteCircproComplaintUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteCircproComplaintUpdate): ExecuteCircproComplaintUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteCircproComplaintUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteCircproComplaintUpdate;
  static deserializeBinaryFromReader(message: ExecuteCircproComplaintUpdate, reader: jspb.BinaryReader): ExecuteCircproComplaintUpdate;
}

export namespace ExecuteCircproComplaintUpdate {
  export type AsObject = {
  }
}

export class ExecuteCircproVacationUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteCircproVacationUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteCircproVacationUpdate): ExecuteCircproVacationUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteCircproVacationUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteCircproVacationUpdate;
  static deserializeBinaryFromReader(message: ExecuteCircproVacationUpdate, reader: jspb.BinaryReader): ExecuteCircproVacationUpdate;
}

export namespace ExecuteCircproVacationUpdate {
  export type AsObject = {
  }
}

export class ExecuteCircproRestartUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteCircproRestartUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteCircproRestartUpdate): ExecuteCircproRestartUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteCircproRestartUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteCircproRestartUpdate;
  static deserializeBinaryFromReader(message: ExecuteCircproRestartUpdate, reader: jspb.BinaryReader): ExecuteCircproRestartUpdate;
}

export namespace ExecuteCircproRestartUpdate {
  export type AsObject = {
  }
}

export class ExecuteCircproLawImmediatePayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteCircproLawImmediatePayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteCircproLawImmediatePayment): ExecuteCircproLawImmediatePayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteCircproLawImmediatePayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteCircproLawImmediatePayment;
  static deserializeBinaryFromReader(message: ExecuteCircproLawImmediatePayment, reader: jspb.BinaryReader): ExecuteCircproLawImmediatePayment;
}

export namespace ExecuteCircproLawImmediatePayment {
  export type AsObject = {
  }
}

export class ExecuteCircproLawUpdateDataWithPac extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteCircproLawUpdateDataWithPac.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteCircproLawUpdateDataWithPac): ExecuteCircproLawUpdateDataWithPac.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteCircproLawUpdateDataWithPac, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteCircproLawUpdateDataWithPac;
  static deserializeBinaryFromReader(message: ExecuteCircproLawUpdateDataWithPac, reader: jspb.BinaryReader): ExecuteCircproLawUpdateDataWithPac;
}

export namespace ExecuteCircproLawUpdateDataWithPac {
  export type AsObject = {
  }
}

export class ExecuteCircproLawGetCustomers extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteCircproLawGetCustomers.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteCircproLawGetCustomers): ExecuteCircproLawGetCustomers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteCircproLawGetCustomers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteCircproLawGetCustomers;
  static deserializeBinaryFromReader(message: ExecuteCircproLawGetCustomers, reader: jspb.BinaryReader): ExecuteCircproLawGetCustomers;
}

export namespace ExecuteCircproLawGetCustomers {
  export type AsObject = {
  }
}

export class ExecuteAuthorizenetChargeCreditCard extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteAuthorizenetChargeCreditCard.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteAuthorizenetChargeCreditCard): ExecuteAuthorizenetChargeCreditCard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteAuthorizenetChargeCreditCard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteAuthorizenetChargeCreditCard;
  static deserializeBinaryFromReader(message: ExecuteAuthorizenetChargeCreditCard, reader: jspb.BinaryReader): ExecuteAuthorizenetChargeCreditCard;
}

export namespace ExecuteAuthorizenetChargeCreditCard {
  export type AsObject = {
  }
}

export class ExecuteAuthorizenetDebitBankAccount extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteAuthorizenetDebitBankAccount.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteAuthorizenetDebitBankAccount): ExecuteAuthorizenetDebitBankAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteAuthorizenetDebitBankAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteAuthorizenetDebitBankAccount;
  static deserializeBinaryFromReader(message: ExecuteAuthorizenetDebitBankAccount, reader: jspb.BinaryReader): ExecuteAuthorizenetDebitBankAccount;
}

export namespace ExecuteAuthorizenetDebitBankAccount {
  export type AsObject = {
  }
}

export class ExecuteAuthorizenetCreateCustomerPaymentProfile extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteAuthorizenetCreateCustomerPaymentProfile.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteAuthorizenetCreateCustomerPaymentProfile): ExecuteAuthorizenetCreateCustomerPaymentProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteAuthorizenetCreateCustomerPaymentProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteAuthorizenetCreateCustomerPaymentProfile;
  static deserializeBinaryFromReader(message: ExecuteAuthorizenetCreateCustomerPaymentProfile, reader: jspb.BinaryReader): ExecuteAuthorizenetCreateCustomerPaymentProfile;
}

export namespace ExecuteAuthorizenetCreateCustomerPaymentProfile {
  export type AsObject = {
  }
}

export class ExecuteAuthorizenetPaypalTransaction extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteAuthorizenetPaypalTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteAuthorizenetPaypalTransaction): ExecuteAuthorizenetPaypalTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteAuthorizenetPaypalTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteAuthorizenetPaypalTransaction;
  static deserializeBinaryFromReader(message: ExecuteAuthorizenetPaypalTransaction, reader: jspb.BinaryReader): ExecuteAuthorizenetPaypalTransaction;
}

export namespace ExecuteAuthorizenetPaypalTransaction {
  export type AsObject = {
  }
}

export class ExecuteAuthorizenetGooglePayTransaction extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteAuthorizenetGooglePayTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteAuthorizenetGooglePayTransaction): ExecuteAuthorizenetGooglePayTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteAuthorizenetGooglePayTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteAuthorizenetGooglePayTransaction;
  static deserializeBinaryFromReader(message: ExecuteAuthorizenetGooglePayTransaction, reader: jspb.BinaryReader): ExecuteAuthorizenetGooglePayTransaction;
}

export namespace ExecuteAuthorizenetGooglePayTransaction {
  export type AsObject = {
  }
}

export class ExecuteAuthorizenetApplePayTransaction extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteAuthorizenetApplePayTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteAuthorizenetApplePayTransaction): ExecuteAuthorizenetApplePayTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteAuthorizenetApplePayTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteAuthorizenetApplePayTransaction;
  static deserializeBinaryFromReader(message: ExecuteAuthorizenetApplePayTransaction, reader: jspb.BinaryReader): ExecuteAuthorizenetApplePayTransaction;
}

export namespace ExecuteAuthorizenetApplePayTransaction {
  export type AsObject = {
  }
}

export class ExecuteAuthorizenetPayPalAuthCapture extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteAuthorizenetPayPalAuthCapture.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteAuthorizenetPayPalAuthCapture): ExecuteAuthorizenetPayPalAuthCapture.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteAuthorizenetPayPalAuthCapture, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteAuthorizenetPayPalAuthCapture;
  static deserializeBinaryFromReader(message: ExecuteAuthorizenetPayPalAuthCapture, reader: jspb.BinaryReader): ExecuteAuthorizenetPayPalAuthCapture;
}

export namespace ExecuteAuthorizenetPayPalAuthCapture {
  export type AsObject = {
  }
}

export class ExecuteExpitransCcTransaction extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteExpitransCcTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteExpitransCcTransaction): ExecuteExpitransCcTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteExpitransCcTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteExpitransCcTransaction;
  static deserializeBinaryFromReader(message: ExecuteExpitransCcTransaction, reader: jspb.BinaryReader): ExecuteExpitransCcTransaction;
}

export namespace ExecuteExpitransCcTransaction {
  export type AsObject = {
  }
}

export class ExecuteExpitransAchTransaction extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteExpitransAchTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteExpitransAchTransaction): ExecuteExpitransAchTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteExpitransAchTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteExpitransAchTransaction;
  static deserializeBinaryFromReader(message: ExecuteExpitransAchTransaction, reader: jspb.BinaryReader): ExecuteExpitransAchTransaction;
}

export namespace ExecuteExpitransAchTransaction {
  export type AsObject = {
  }
}

export class ExecuteAxiamedfusionCcTransaction extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteAxiamedfusionCcTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteAxiamedfusionCcTransaction): ExecuteAxiamedfusionCcTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteAxiamedfusionCcTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteAxiamedfusionCcTransaction;
  static deserializeBinaryFromReader(message: ExecuteAxiamedfusionCcTransaction, reader: jspb.BinaryReader): ExecuteAxiamedfusionCcTransaction;
}

export namespace ExecuteAxiamedfusionCcTransaction {
  export type AsObject = {
  }
}

export class ExecuteAxiamedfusionAchTransaction extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteAxiamedfusionAchTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteAxiamedfusionAchTransaction): ExecuteAxiamedfusionAchTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteAxiamedfusionAchTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteAxiamedfusionAchTransaction;
  static deserializeBinaryFromReader(message: ExecuteAxiamedfusionAchTransaction, reader: jspb.BinaryReader): ExecuteAxiamedfusionAchTransaction;
}

export namespace ExecuteAxiamedfusionAchTransaction {
  export type AsObject = {
  }
}

export class ExecuteAxiamedfusionCardVerify extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteAxiamedfusionCardVerify.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteAxiamedfusionCardVerify): ExecuteAxiamedfusionCardVerify.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteAxiamedfusionCardVerify, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteAxiamedfusionCardVerify;
  static deserializeBinaryFromReader(message: ExecuteAxiamedfusionCardVerify, reader: jspb.BinaryReader): ExecuteAxiamedfusionCardVerify;
}

export namespace ExecuteAxiamedfusionCardVerify {
  export type AsObject = {
  }
}

export class ExecuteInstamedPaymentSale extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteInstamedPaymentSale.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteInstamedPaymentSale): ExecuteInstamedPaymentSale.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteInstamedPaymentSale, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteInstamedPaymentSale;
  static deserializeBinaryFromReader(message: ExecuteInstamedPaymentSale, reader: jspb.BinaryReader): ExecuteInstamedPaymentSale;
}

export namespace ExecuteInstamedPaymentSale {
  export type AsObject = {
  }
}

export class ExecuteInstamedVoidPayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteInstamedVoidPayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteInstamedVoidPayment): ExecuteInstamedVoidPayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteInstamedVoidPayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteInstamedVoidPayment;
  static deserializeBinaryFromReader(message: ExecuteInstamedVoidPayment, reader: jspb.BinaryReader): ExecuteInstamedVoidPayment;
}

export namespace ExecuteInstamedVoidPayment {
  export type AsObject = {
  }
}

export class ExecuteUsaepaySubmitCcPayments extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteUsaepaySubmitCcPayments.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteUsaepaySubmitCcPayments): ExecuteUsaepaySubmitCcPayments.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteUsaepaySubmitCcPayments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteUsaepaySubmitCcPayments;
  static deserializeBinaryFromReader(message: ExecuteUsaepaySubmitCcPayments, reader: jspb.BinaryReader): ExecuteUsaepaySubmitCcPayments;
}

export namespace ExecuteUsaepaySubmitCcPayments {
  export type AsObject = {
  }
}

export class ExecuteUsaepaySubmitAchPayments extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteUsaepaySubmitAchPayments.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteUsaepaySubmitAchPayments): ExecuteUsaepaySubmitAchPayments.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteUsaepaySubmitAchPayments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteUsaepaySubmitAchPayments;
  static deserializeBinaryFromReader(message: ExecuteUsaepaySubmitAchPayments, reader: jspb.BinaryReader): ExecuteUsaepaySubmitAchPayments;
}

export namespace ExecuteUsaepaySubmitAchPayments {
  export type AsObject = {
  }
}

export class ExecuteUsaepayGetCcToken extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteUsaepayGetCcToken.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteUsaepayGetCcToken): ExecuteUsaepayGetCcToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteUsaepayGetCcToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteUsaepayGetCcToken;
  static deserializeBinaryFromReader(message: ExecuteUsaepayGetCcToken, reader: jspb.BinaryReader): ExecuteUsaepayGetCcToken;
}

export namespace ExecuteUsaepayGetCcToken {
  export type AsObject = {
  }
}

export class ExecuteEzidebitSubmitCcPayments extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteEzidebitSubmitCcPayments.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteEzidebitSubmitCcPayments): ExecuteEzidebitSubmitCcPayments.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteEzidebitSubmitCcPayments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteEzidebitSubmitCcPayments;
  static deserializeBinaryFromReader(message: ExecuteEzidebitSubmitCcPayments, reader: jspb.BinaryReader): ExecuteEzidebitSubmitCcPayments;
}

export namespace ExecuteEzidebitSubmitCcPayments {
  export type AsObject = {
  }
}

export class ExecuteEzidebitSubmitAchPayments extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteEzidebitSubmitAchPayments.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteEzidebitSubmitAchPayments): ExecuteEzidebitSubmitAchPayments.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteEzidebitSubmitAchPayments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteEzidebitSubmitAchPayments;
  static deserializeBinaryFromReader(message: ExecuteEzidebitSubmitAchPayments, reader: jspb.BinaryReader): ExecuteEzidebitSubmitAchPayments;
}

export namespace ExecuteEzidebitSubmitAchPayments {
  export type AsObject = {
  }
}

export class ExecuteBamboraSubmitCcPayments extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteBamboraSubmitCcPayments.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteBamboraSubmitCcPayments): ExecuteBamboraSubmitCcPayments.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteBamboraSubmitCcPayments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteBamboraSubmitCcPayments;
  static deserializeBinaryFromReader(message: ExecuteBamboraSubmitCcPayments, reader: jspb.BinaryReader): ExecuteBamboraSubmitCcPayments;
}

export namespace ExecuteBamboraSubmitCcPayments {
  export type AsObject = {
  }
}

export class ExecuteBamboraSubmitAchPayments extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteBamboraSubmitAchPayments.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteBamboraSubmitAchPayments): ExecuteBamboraSubmitAchPayments.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteBamboraSubmitAchPayments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteBamboraSubmitAchPayments;
  static deserializeBinaryFromReader(message: ExecuteBamboraSubmitAchPayments, reader: jspb.BinaryReader): ExecuteBamboraSubmitAchPayments;
}

export namespace ExecuteBamboraSubmitAchPayments {
  export type AsObject = {
  }
}

export class ExecuteRepayStoreCard extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteRepayStoreCard.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteRepayStoreCard): ExecuteRepayStoreCard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteRepayStoreCard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteRepayStoreCard;
  static deserializeBinaryFromReader(message: ExecuteRepayStoreCard, reader: jspb.BinaryReader): ExecuteRepayStoreCard;
}

export namespace ExecuteRepayStoreCard {
  export type AsObject = {
  }
}

export class ExecuteRepayPaymentToken extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteRepayPaymentToken.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteRepayPaymentToken): ExecuteRepayPaymentToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteRepayPaymentToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteRepayPaymentToken;
  static deserializeBinaryFromReader(message: ExecuteRepayPaymentToken, reader: jspb.BinaryReader): ExecuteRepayPaymentToken;
}

export namespace ExecuteRepayPaymentToken {
  export type AsObject = {
  }
}

export class ExecuteRepayAchPaymentToken extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteRepayAchPaymentToken.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteRepayAchPaymentToken): ExecuteRepayAchPaymentToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteRepayAchPaymentToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteRepayAchPaymentToken;
  static deserializeBinaryFromReader(message: ExecuteRepayAchPaymentToken, reader: jspb.BinaryReader): ExecuteRepayAchPaymentToken;
}

export namespace ExecuteRepayAchPaymentToken {
  export type AsObject = {
  }
}

export class ExecuteAxiaSubmitSaleRequestByCc extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteAxiaSubmitSaleRequestByCc.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteAxiaSubmitSaleRequestByCc): ExecuteAxiaSubmitSaleRequestByCc.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteAxiaSubmitSaleRequestByCc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteAxiaSubmitSaleRequestByCc;
  static deserializeBinaryFromReader(message: ExecuteAxiaSubmitSaleRequestByCc, reader: jspb.BinaryReader): ExecuteAxiaSubmitSaleRequestByCc;
}

export namespace ExecuteAxiaSubmitSaleRequestByCc {
  export type AsObject = {
  }
}

export class ExecuteAxiaSubmitSaleRequestByCheck extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteAxiaSubmitSaleRequestByCheck.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteAxiaSubmitSaleRequestByCheck): ExecuteAxiaSubmitSaleRequestByCheck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteAxiaSubmitSaleRequestByCheck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteAxiaSubmitSaleRequestByCheck;
  static deserializeBinaryFromReader(message: ExecuteAxiaSubmitSaleRequestByCheck, reader: jspb.BinaryReader): ExecuteAxiaSubmitSaleRequestByCheck;
}

export namespace ExecuteAxiaSubmitSaleRequestByCheck {
  export type AsObject = {
  }
}

export class ExecuteSecuretradingSendPayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSecuretradingSendPayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSecuretradingSendPayment): ExecuteSecuretradingSendPayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSecuretradingSendPayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSecuretradingSendPayment;
  static deserializeBinaryFromReader(message: ExecuteSecuretradingSendPayment, reader: jspb.BinaryReader): ExecuteSecuretradingSendPayment;
}

export namespace ExecuteSecuretradingSendPayment {
  export type AsObject = {
  }
}

export class ExecutePaymentVisionSubmitCardSaleRequestByCc extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePaymentVisionSubmitCardSaleRequestByCc.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePaymentVisionSubmitCardSaleRequestByCc): ExecutePaymentVisionSubmitCardSaleRequestByCc.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePaymentVisionSubmitCardSaleRequestByCc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePaymentVisionSubmitCardSaleRequestByCc;
  static deserializeBinaryFromReader(message: ExecutePaymentVisionSubmitCardSaleRequestByCc, reader: jspb.BinaryReader): ExecutePaymentVisionSubmitCardSaleRequestByCc;
}

export namespace ExecutePaymentVisionSubmitCardSaleRequestByCc {
  export type AsObject = {
  }
}

export class ExecutePaymentVisionSubmitCardSaleRequestByAch extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePaymentVisionSubmitCardSaleRequestByAch.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePaymentVisionSubmitCardSaleRequestByAch): ExecutePaymentVisionSubmitCardSaleRequestByAch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePaymentVisionSubmitCardSaleRequestByAch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePaymentVisionSubmitCardSaleRequestByAch;
  static deserializeBinaryFromReader(message: ExecutePaymentVisionSubmitCardSaleRequestByAch, reader: jspb.BinaryReader): ExecutePaymentVisionSubmitCardSaleRequestByAch;
}

export namespace ExecutePaymentVisionSubmitCardSaleRequestByAch {
  export type AsObject = {
  }
}

export class ExecuteInterproseLookupAccount extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteInterproseLookupAccount.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteInterproseLookupAccount): ExecuteInterproseLookupAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteInterproseLookupAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteInterproseLookupAccount;
  static deserializeBinaryFromReader(message: ExecuteInterproseLookupAccount, reader: jspb.BinaryReader): ExecuteInterproseLookupAccount;
}

export namespace ExecuteInterproseLookupAccount {
  export type AsObject = {
  }
}

export class ExecuteInterproseSubmitCardSaleRequestByCc extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteInterproseSubmitCardSaleRequestByCc.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteInterproseSubmitCardSaleRequestByCc): ExecuteInterproseSubmitCardSaleRequestByCc.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteInterproseSubmitCardSaleRequestByCc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteInterproseSubmitCardSaleRequestByCc;
  static deserializeBinaryFromReader(message: ExecuteInterproseSubmitCardSaleRequestByCc, reader: jspb.BinaryReader): ExecuteInterproseSubmitCardSaleRequestByCc;
}

export namespace ExecuteInterproseSubmitCardSaleRequestByCc {
  export type AsObject = {
  }
}

export class ExecuteInterproseSubmitCardSaleRequestByAch extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteInterproseSubmitCardSaleRequestByAch.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteInterproseSubmitCardSaleRequestByAch): ExecuteInterproseSubmitCardSaleRequestByAch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteInterproseSubmitCardSaleRequestByAch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteInterproseSubmitCardSaleRequestByAch;
  static deserializeBinaryFromReader(message: ExecuteInterproseSubmitCardSaleRequestByAch, reader: jspb.BinaryReader): ExecuteInterproseSubmitCardSaleRequestByAch;
}

export namespace ExecuteInterproseSubmitCardSaleRequestByAch {
  export type AsObject = {
  }
}

export class ExecuteInterproseLookupPaymentId extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteInterproseLookupPaymentId.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteInterproseLookupPaymentId): ExecuteInterproseLookupPaymentId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteInterproseLookupPaymentId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteInterproseLookupPaymentId;
  static deserializeBinaryFromReader(message: ExecuteInterproseLookupPaymentId, reader: jspb.BinaryReader): ExecuteInterproseLookupPaymentId;
}

export namespace ExecuteInterproseLookupPaymentId {
  export type AsObject = {
  }
}

export class ExecuteInterproseLookupAccountByFormId extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteInterproseLookupAccountByFormId.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteInterproseLookupAccountByFormId): ExecuteInterproseLookupAccountByFormId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteInterproseLookupAccountByFormId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteInterproseLookupAccountByFormId;
  static deserializeBinaryFromReader(message: ExecuteInterproseLookupAccountByFormId, reader: jspb.BinaryReader): ExecuteInterproseLookupAccountByFormId;
}

export namespace ExecuteInterproseLookupAccountByFormId {
  export type AsObject = {
  }
}

export class ExecuteDallasnewsSearchByPhone extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteDallasnewsSearchByPhone.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteDallasnewsSearchByPhone): ExecuteDallasnewsSearchByPhone.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteDallasnewsSearchByPhone, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteDallasnewsSearchByPhone;
  static deserializeBinaryFromReader(message: ExecuteDallasnewsSearchByPhone, reader: jspb.BinaryReader): ExecuteDallasnewsSearchByPhone;
}

export namespace ExecuteDallasnewsSearchByPhone {
  export type AsObject = {
  }
}

export class ExecuteDallasnewsSearchByZipStreet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteDallasnewsSearchByZipStreet.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteDallasnewsSearchByZipStreet): ExecuteDallasnewsSearchByZipStreet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteDallasnewsSearchByZipStreet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteDallasnewsSearchByZipStreet;
  static deserializeBinaryFromReader(message: ExecuteDallasnewsSearchByZipStreet, reader: jspb.BinaryReader): ExecuteDallasnewsSearchByZipStreet;
}

export namespace ExecuteDallasnewsSearchByZipStreet {
  export type AsObject = {
  }
}

export class ExecuteDallasnewsSearchBy extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteDallasnewsSearchBy.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteDallasnewsSearchBy): ExecuteDallasnewsSearchBy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteDallasnewsSearchBy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteDallasnewsSearchBy;
  static deserializeBinaryFromReader(message: ExecuteDallasnewsSearchBy, reader: jspb.BinaryReader): ExecuteDallasnewsSearchBy;
}

export namespace ExecuteDallasnewsSearchBy {
  export type AsObject = {
  }
}

export class ExecuteDallasnewsCreateVacation extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteDallasnewsCreateVacation.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteDallasnewsCreateVacation): ExecuteDallasnewsCreateVacation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteDallasnewsCreateVacation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteDallasnewsCreateVacation;
  static deserializeBinaryFromReader(message: ExecuteDallasnewsCreateVacation, reader: jspb.BinaryReader): ExecuteDallasnewsCreateVacation;
}

export namespace ExecuteDallasnewsCreateVacation {
  export type AsObject = {
  }
}

export class ExecuteDallasnewsGetVacation extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteDallasnewsGetVacation.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteDallasnewsGetVacation): ExecuteDallasnewsGetVacation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteDallasnewsGetVacation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteDallasnewsGetVacation;
  static deserializeBinaryFromReader(message: ExecuteDallasnewsGetVacation, reader: jspb.BinaryReader): ExecuteDallasnewsGetVacation;
}

export namespace ExecuteDallasnewsGetVacation {
  export type AsObject = {
  }
}

export class ExecuteDallasnewsGetVacationDaysBetween extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteDallasnewsGetVacationDaysBetween.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteDallasnewsGetVacationDaysBetween): ExecuteDallasnewsGetVacationDaysBetween.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteDallasnewsGetVacationDaysBetween, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteDallasnewsGetVacationDaysBetween;
  static deserializeBinaryFromReader(message: ExecuteDallasnewsGetVacationDaysBetween, reader: jspb.BinaryReader): ExecuteDallasnewsGetVacationDaysBetween;
}

export namespace ExecuteDallasnewsGetVacationDaysBetween {
  export type AsObject = {
  }
}

export class ExecuteDallasnewsGetVacationWithCutoff extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteDallasnewsGetVacationWithCutoff.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteDallasnewsGetVacationWithCutoff): ExecuteDallasnewsGetVacationWithCutoff.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteDallasnewsGetVacationWithCutoff, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteDallasnewsGetVacationWithCutoff;
  static deserializeBinaryFromReader(message: ExecuteDallasnewsGetVacationWithCutoff, reader: jspb.BinaryReader): ExecuteDallasnewsGetVacationWithCutoff;
}

export namespace ExecuteDallasnewsGetVacationWithCutoff {
  export type AsObject = {
  }
}

export class ExecuteDallasnewsDeleteVacation extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteDallasnewsDeleteVacation.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteDallasnewsDeleteVacation): ExecuteDallasnewsDeleteVacation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteDallasnewsDeleteVacation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteDallasnewsDeleteVacation;
  static deserializeBinaryFromReader(message: ExecuteDallasnewsDeleteVacation, reader: jspb.BinaryReader): ExecuteDallasnewsDeleteVacation;
}

export namespace ExecuteDallasnewsDeleteVacation {
  export type AsObject = {
  }
}

export class ExecuteDallasnewsAddComplaint extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteDallasnewsAddComplaint.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteDallasnewsAddComplaint): ExecuteDallasnewsAddComplaint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteDallasnewsAddComplaint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteDallasnewsAddComplaint;
  static deserializeBinaryFromReader(message: ExecuteDallasnewsAddComplaint, reader: jspb.BinaryReader): ExecuteDallasnewsAddComplaint;
}

export namespace ExecuteDallasnewsAddComplaint {
  export type AsObject = {
  }
}

export class ExecuteDallasnewsUpdatePhoneNumber extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteDallasnewsUpdatePhoneNumber.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteDallasnewsUpdatePhoneNumber): ExecuteDallasnewsUpdatePhoneNumber.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteDallasnewsUpdatePhoneNumber, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteDallasnewsUpdatePhoneNumber;
  static deserializeBinaryFromReader(message: ExecuteDallasnewsUpdatePhoneNumber, reader: jspb.BinaryReader): ExecuteDallasnewsUpdatePhoneNumber;
}

export namespace ExecuteDallasnewsUpdatePhoneNumber {
  export type AsObject = {
  }
}

export class ExecuteDallasnewsStopAccount extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteDallasnewsStopAccount.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteDallasnewsStopAccount): ExecuteDallasnewsStopAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteDallasnewsStopAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteDallasnewsStopAccount;
  static deserializeBinaryFromReader(message: ExecuteDallasnewsStopAccount, reader: jspb.BinaryReader): ExecuteDallasnewsStopAccount;
}

export namespace ExecuteDallasnewsStopAccount {
  export type AsObject = {
  }
}

export class ExecuteDallasnewsCcPaymentToken extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteDallasnewsCcPaymentToken.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteDallasnewsCcPaymentToken): ExecuteDallasnewsCcPaymentToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteDallasnewsCcPaymentToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteDallasnewsCcPaymentToken;
  static deserializeBinaryFromReader(message: ExecuteDallasnewsCcPaymentToken, reader: jspb.BinaryReader): ExecuteDallasnewsCcPaymentToken;
}

export namespace ExecuteDallasnewsCcPaymentToken {
  export type AsObject = {
  }
}

export class ExecuteDallasnewsAchPaymentToken extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteDallasnewsAchPaymentToken.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteDallasnewsAchPaymentToken): ExecuteDallasnewsAchPaymentToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteDallasnewsAchPaymentToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteDallasnewsAchPaymentToken;
  static deserializeBinaryFromReader(message: ExecuteDallasnewsAchPaymentToken, reader: jspb.BinaryReader): ExecuteDallasnewsAchPaymentToken;
}

export namespace ExecuteDallasnewsAchPaymentToken {
  export type AsObject = {
  }
}

export class ExecutePaywaySubmitCardSaleRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePaywaySubmitCardSaleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePaywaySubmitCardSaleRequest): ExecutePaywaySubmitCardSaleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePaywaySubmitCardSaleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePaywaySubmitCardSaleRequest;
  static deserializeBinaryFromReader(message: ExecutePaywaySubmitCardSaleRequest, reader: jspb.BinaryReader): ExecutePaywaySubmitCardSaleRequest;
}

export namespace ExecutePaywaySubmitCardSaleRequest {
  export type AsObject = {
  }
}

export class ExecutePaywayCreateTokenRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePaywayCreateTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePaywayCreateTokenRequest): ExecutePaywayCreateTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePaywayCreateTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePaywayCreateTokenRequest;
  static deserializeBinaryFromReader(message: ExecutePaywayCreateTokenRequest, reader: jspb.BinaryReader): ExecutePaywayCreateTokenRequest;
}

export namespace ExecutePaywayCreateTokenRequest {
  export type AsObject = {
  }
}

export class ExecutePaywaySubmitACHSaleRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePaywaySubmitACHSaleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePaywaySubmitACHSaleRequest): ExecutePaywaySubmitACHSaleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePaywaySubmitACHSaleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePaywaySubmitACHSaleRequest;
  static deserializeBinaryFromReader(message: ExecutePaywaySubmitACHSaleRequest, reader: jspb.BinaryReader): ExecutePaywaySubmitACHSaleRequest;
}

export namespace ExecutePaywaySubmitACHSaleRequest {
  export type AsObject = {
  }
}

export class ExecuteBillingtreeSubmitCardSaleRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteBillingtreeSubmitCardSaleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteBillingtreeSubmitCardSaleRequest): ExecuteBillingtreeSubmitCardSaleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteBillingtreeSubmitCardSaleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteBillingtreeSubmitCardSaleRequest;
  static deserializeBinaryFromReader(message: ExecuteBillingtreeSubmitCardSaleRequest, reader: jspb.BinaryReader): ExecuteBillingtreeSubmitCardSaleRequest;
}

export namespace ExecuteBillingtreeSubmitCardSaleRequest {
  export type AsObject = {
  }
}

export class ExecuteExperianCcPaymentRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteExperianCcPaymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteExperianCcPaymentRequest): ExecuteExperianCcPaymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteExperianCcPaymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteExperianCcPaymentRequest;
  static deserializeBinaryFromReader(message: ExecuteExperianCcPaymentRequest, reader: jspb.BinaryReader): ExecuteExperianCcPaymentRequest;
}

export namespace ExecuteExperianCcPaymentRequest {
  export type AsObject = {
  }
}

export class ExecuteExperianCcPaymentPlanRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteExperianCcPaymentPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteExperianCcPaymentPlanRequest): ExecuteExperianCcPaymentPlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteExperianCcPaymentPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteExperianCcPaymentPlanRequest;
  static deserializeBinaryFromReader(message: ExecuteExperianCcPaymentPlanRequest, reader: jspb.BinaryReader): ExecuteExperianCcPaymentPlanRequest;
}

export namespace ExecuteExperianCcPaymentPlanRequest {
  export type AsObject = {
  }
}

export class ExecuteExperianBalancerequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteExperianBalancerequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteExperianBalancerequest): ExecuteExperianBalancerequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteExperianBalancerequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteExperianBalancerequest;
  static deserializeBinaryFromReader(message: ExecuteExperianBalancerequest, reader: jspb.BinaryReader): ExecuteExperianBalancerequest;
}

export namespace ExecuteExperianBalancerequest {
  export type AsObject = {
  }
}

export class ExecuteExperianAchPaymentRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteExperianAchPaymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteExperianAchPaymentRequest): ExecuteExperianAchPaymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteExperianAchPaymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteExperianAchPaymentRequest;
  static deserializeBinaryFromReader(message: ExecuteExperianAchPaymentRequest, reader: jspb.BinaryReader): ExecuteExperianAchPaymentRequest;
}

export namespace ExecuteExperianAchPaymentRequest {
  export type AsObject = {
  }
}

export class ExecuteExperianAchPaymentPlanRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteExperianAchPaymentPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteExperianAchPaymentPlanRequest): ExecuteExperianAchPaymentPlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteExperianAchPaymentPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteExperianAchPaymentPlanRequest;
  static deserializeBinaryFromReader(message: ExecuteExperianAchPaymentPlanRequest, reader: jspb.BinaryReader): ExecuteExperianAchPaymentPlanRequest;
}

export namespace ExecuteExperianAchPaymentPlanRequest {
  export type AsObject = {
  }
}

export class ExecuteExperianStellaCardEntry extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteExperianStellaCardEntry.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteExperianStellaCardEntry): ExecuteExperianStellaCardEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteExperianStellaCardEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteExperianStellaCardEntry;
  static deserializeBinaryFromReader(message: ExecuteExperianStellaCardEntry, reader: jspb.BinaryReader): ExecuteExperianStellaCardEntry;
}

export namespace ExecuteExperianStellaCardEntry {
  export type AsObject = {
  }
}

export class ExecuteExperianStellaECheck extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteExperianStellaECheck.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteExperianStellaECheck): ExecuteExperianStellaECheck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteExperianStellaECheck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteExperianStellaECheck;
  static deserializeBinaryFromReader(message: ExecuteExperianStellaECheck, reader: jspb.BinaryReader): ExecuteExperianStellaECheck;
}

export namespace ExecuteExperianStellaECheck {
  export type AsObject = {
  }
}

export class ExecuteExperianStellaCardDeviceTokenization extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteExperianStellaCardDeviceTokenization.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteExperianStellaCardDeviceTokenization): ExecuteExperianStellaCardDeviceTokenization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteExperianStellaCardDeviceTokenization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteExperianStellaCardDeviceTokenization;
  static deserializeBinaryFromReader(message: ExecuteExperianStellaCardDeviceTokenization, reader: jspb.BinaryReader): ExecuteExperianStellaCardDeviceTokenization;
}

export namespace ExecuteExperianStellaCardDeviceTokenization {
  export type AsObject = {
  }
}

export class ExecuteExperianStellaTokenPayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteExperianStellaTokenPayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteExperianStellaTokenPayment): ExecuteExperianStellaTokenPayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteExperianStellaTokenPayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteExperianStellaTokenPayment;
  static deserializeBinaryFromReader(message: ExecuteExperianStellaTokenPayment, reader: jspb.BinaryReader): ExecuteExperianStellaTokenPayment;
}

export namespace ExecuteExperianStellaTokenPayment {
  export type AsObject = {
  }
}

export class ExecuteExperianStellaAchTokenization extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteExperianStellaAchTokenization.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteExperianStellaAchTokenization): ExecuteExperianStellaAchTokenization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteExperianStellaAchTokenization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteExperianStellaAchTokenization;
  static deserializeBinaryFromReader(message: ExecuteExperianStellaAchTokenization, reader: jspb.BinaryReader): ExecuteExperianStellaAchTokenization;
}

export namespace ExecuteExperianStellaAchTokenization {
  export type AsObject = {
  }
}

export class ExecuteExperianStellaAddusaepaytoken extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteExperianStellaAddusaepaytoken.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteExperianStellaAddusaepaytoken): ExecuteExperianStellaAddusaepaytoken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteExperianStellaAddusaepaytoken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteExperianStellaAddusaepaytoken;
  static deserializeBinaryFromReader(message: ExecuteExperianStellaAddusaepaytoken, reader: jspb.BinaryReader): ExecuteExperianStellaAddusaepaytoken;
}

export namespace ExecuteExperianStellaAddusaepaytoken {
  export type AsObject = {
  }
}

export class ExecuteExperianStellaPaymentPlans extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteExperianStellaPaymentPlans.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteExperianStellaPaymentPlans): ExecuteExperianStellaPaymentPlans.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteExperianStellaPaymentPlans, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteExperianStellaPaymentPlans;
  static deserializeBinaryFromReader(message: ExecuteExperianStellaPaymentPlans, reader: jspb.BinaryReader): ExecuteExperianStellaPaymentPlans;
}

export namespace ExecuteExperianStellaPaymentPlans {
  export type AsObject = {
  }
}

export class ExecuteExperianStellaAuth extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteExperianStellaAuth.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteExperianStellaAuth): ExecuteExperianStellaAuth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteExperianStellaAuth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteExperianStellaAuth;
  static deserializeBinaryFromReader(message: ExecuteExperianStellaAuth, reader: jspb.BinaryReader): ExecuteExperianStellaAuth;
}

export namespace ExecuteExperianStellaAuth {
  export type AsObject = {
  }
}

export class ExecuteNewscycleLogin extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNewscycleLogin.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNewscycleLogin): ExecuteNewscycleLogin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNewscycleLogin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNewscycleLogin;
  static deserializeBinaryFromReader(message: ExecuteNewscycleLogin, reader: jspb.BinaryReader): ExecuteNewscycleLogin;
}

export namespace ExecuteNewscycleLogin {
  export type AsObject = {
  }
}

export class ExecuteNewscycleSearchPage extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNewscycleSearchPage.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNewscycleSearchPage): ExecuteNewscycleSearchPage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNewscycleSearchPage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNewscycleSearchPage;
  static deserializeBinaryFromReader(message: ExecuteNewscycleSearchPage, reader: jspb.BinaryReader): ExecuteNewscycleSearchPage;
}

export namespace ExecuteNewscycleSearchPage {
  export type AsObject = {
  }
}

export class ExecuteNewscycleBillingInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNewscycleBillingInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNewscycleBillingInfo): ExecuteNewscycleBillingInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNewscycleBillingInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNewscycleBillingInfo;
  static deserializeBinaryFromReader(message: ExecuteNewscycleBillingInfo, reader: jspb.BinaryReader): ExecuteNewscycleBillingInfo;
}

export namespace ExecuteNewscycleBillingInfo {
  export type AsObject = {
  }
}

export class ExecuteNewscycleServiceErrorInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNewscycleServiceErrorInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNewscycleServiceErrorInfo): ExecuteNewscycleServiceErrorInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNewscycleServiceErrorInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNewscycleServiceErrorInfo;
  static deserializeBinaryFromReader(message: ExecuteNewscycleServiceErrorInfo, reader: jspb.BinaryReader): ExecuteNewscycleServiceErrorInfo;
}

export namespace ExecuteNewscycleServiceErrorInfo {
  export type AsObject = {
  }
}

export class ExecuteNewscycleServiceErrorTrans extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNewscycleServiceErrorTrans.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNewscycleServiceErrorTrans): ExecuteNewscycleServiceErrorTrans.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNewscycleServiceErrorTrans, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNewscycleServiceErrorTrans;
  static deserializeBinaryFromReader(message: ExecuteNewscycleServiceErrorTrans, reader: jspb.BinaryReader): ExecuteNewscycleServiceErrorTrans;
}

export namespace ExecuteNewscycleServiceErrorTrans {
  export type AsObject = {
  }
}

export class ExecuteNewscycleStopInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNewscycleStopInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNewscycleStopInfo): ExecuteNewscycleStopInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNewscycleStopInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNewscycleStopInfo;
  static deserializeBinaryFromReader(message: ExecuteNewscycleStopInfo, reader: jspb.BinaryReader): ExecuteNewscycleStopInfo;
}

export namespace ExecuteNewscycleStopInfo {
  export type AsObject = {
  }
}

export class ExecuteNewscycleStopTrans extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNewscycleStopTrans.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNewscycleStopTrans): ExecuteNewscycleStopTrans.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNewscycleStopTrans, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNewscycleStopTrans;
  static deserializeBinaryFromReader(message: ExecuteNewscycleStopTrans, reader: jspb.BinaryReader): ExecuteNewscycleStopTrans;
}

export namespace ExecuteNewscycleStopTrans {
  export type AsObject = {
  }
}

export class ExecuteNewscycleRenewInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNewscycleRenewInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNewscycleRenewInfo): ExecuteNewscycleRenewInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNewscycleRenewInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNewscycleRenewInfo;
  static deserializeBinaryFromReader(message: ExecuteNewscycleRenewInfo, reader: jspb.BinaryReader): ExecuteNewscycleRenewInfo;
}

export namespace ExecuteNewscycleRenewInfo {
  export type AsObject = {
  }
}

export class ExecuteNewscycleAutoRenewInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNewscycleAutoRenewInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNewscycleAutoRenewInfo): ExecuteNewscycleAutoRenewInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNewscycleAutoRenewInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNewscycleAutoRenewInfo;
  static deserializeBinaryFromReader(message: ExecuteNewscycleAutoRenewInfo, reader: jspb.BinaryReader): ExecuteNewscycleAutoRenewInfo;
}

export namespace ExecuteNewscycleAutoRenewInfo {
  export type AsObject = {
  }
}

export class ExecuteNewscycleAutoTran extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNewscycleAutoTran.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNewscycleAutoTran): ExecuteNewscycleAutoTran.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNewscycleAutoTran, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNewscycleAutoTran;
  static deserializeBinaryFromReader(message: ExecuteNewscycleAutoTran, reader: jspb.BinaryReader): ExecuteNewscycleAutoTran;
}

export namespace ExecuteNewscycleAutoTran {
  export type AsObject = {
  }
}

export class ExecuteNewscyclePayInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNewscyclePayInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNewscyclePayInfo): ExecuteNewscyclePayInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNewscyclePayInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNewscyclePayInfo;
  static deserializeBinaryFromReader(message: ExecuteNewscyclePayInfo, reader: jspb.BinaryReader): ExecuteNewscyclePayInfo;
}

export namespace ExecuteNewscyclePayInfo {
  export type AsObject = {
  }
}

export class ExecuteNewscyclePayTran extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNewscyclePayTran.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNewscyclePayTran): ExecuteNewscyclePayTran.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNewscyclePayTran, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNewscyclePayTran;
  static deserializeBinaryFromReader(message: ExecuteNewscyclePayTran, reader: jspb.BinaryReader): ExecuteNewscyclePayTran;
}

export namespace ExecuteNewscyclePayTran {
  export type AsObject = {
  }
}

export class ExecuteTrustcommerceCreditSale extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteTrustcommerceCreditSale.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteTrustcommerceCreditSale): ExecuteTrustcommerceCreditSale.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteTrustcommerceCreditSale, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteTrustcommerceCreditSale;
  static deserializeBinaryFromReader(message: ExecuteTrustcommerceCreditSale, reader: jspb.BinaryReader): ExecuteTrustcommerceCreditSale;
}

export namespace ExecuteTrustcommerceCreditSale {
  export type AsObject = {
  }
}

export class ExecuteTrustcommerceAchSale extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteTrustcommerceAchSale.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteTrustcommerceAchSale): ExecuteTrustcommerceAchSale.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteTrustcommerceAchSale, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteTrustcommerceAchSale;
  static deserializeBinaryFromReader(message: ExecuteTrustcommerceAchSale, reader: jspb.BinaryReader): ExecuteTrustcommerceAchSale;
}

export namespace ExecuteTrustcommerceAchSale {
  export type AsObject = {
  }
}

export class ExecuteVantivCreditSale extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteVantivCreditSale.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteVantivCreditSale): ExecuteVantivCreditSale.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteVantivCreditSale, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteVantivCreditSale;
  static deserializeBinaryFromReader(message: ExecuteVantivCreditSale, reader: jspb.BinaryReader): ExecuteVantivCreditSale;
}

export namespace ExecuteVantivCreditSale {
  export type AsObject = {
  }
}

export class ExecuteVantivAchSale extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteVantivAchSale.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteVantivAchSale): ExecuteVantivAchSale.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteVantivAchSale, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteVantivAchSale;
  static deserializeBinaryFromReader(message: ExecuteVantivAchSale, reader: jspb.BinaryReader): ExecuteVantivAchSale;
}

export namespace ExecuteVantivAchSale {
  export type AsObject = {
  }
}

export class ExecuteJourneyLatest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteJourneyLatest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteJourneyLatest): ExecuteJourneyLatest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteJourneyLatest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteJourneyLatest;
  static deserializeBinaryFromReader(message: ExecuteJourneyLatest, reader: jspb.BinaryReader): ExecuteJourneyLatest;
}

export namespace ExecuteJourneyLatest {
  export type AsObject = {
  }
}

export class ExecuteAthenahealthGetPatients extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteAthenahealthGetPatients.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteAthenahealthGetPatients): ExecuteAthenahealthGetPatients.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteAthenahealthGetPatients, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteAthenahealthGetPatients;
  static deserializeBinaryFromReader(message: ExecuteAthenahealthGetPatients, reader: jspb.BinaryReader): ExecuteAthenahealthGetPatients;
}

export namespace ExecuteAthenahealthGetPatients {
  export type AsObject = {
  }
}

export class ExecuteAthenahealthGetPatientsWithId extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteAthenahealthGetPatientsWithId.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteAthenahealthGetPatientsWithId): ExecuteAthenahealthGetPatientsWithId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteAthenahealthGetPatientsWithId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteAthenahealthGetPatientsWithId;
  static deserializeBinaryFromReader(message: ExecuteAthenahealthGetPatientsWithId, reader: jspb.BinaryReader): ExecuteAthenahealthGetPatientsWithId;
}

export namespace ExecuteAthenahealthGetPatientsWithId {
  export type AsObject = {
  }
}

export class ExecuteAthenahealthCcPayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteAthenahealthCcPayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteAthenahealthCcPayment): ExecuteAthenahealthCcPayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteAthenahealthCcPayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteAthenahealthCcPayment;
  static deserializeBinaryFromReader(message: ExecuteAthenahealthCcPayment, reader: jspb.BinaryReader): ExecuteAthenahealthCcPayment;
}

export namespace ExecuteAthenahealthCcPayment {
  export type AsObject = {
  }
}

export class ExecuteBrainworksGetCustomersByPhone extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteBrainworksGetCustomersByPhone.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteBrainworksGetCustomersByPhone): ExecuteBrainworksGetCustomersByPhone.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteBrainworksGetCustomersByPhone, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteBrainworksGetCustomersByPhone;
  static deserializeBinaryFromReader(message: ExecuteBrainworksGetCustomersByPhone, reader: jspb.BinaryReader): ExecuteBrainworksGetCustomersByPhone;
}

export namespace ExecuteBrainworksGetCustomersByPhone {
  export type AsObject = {
  }
}

export class ExecuteBrainworksGetSuspends extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteBrainworksGetSuspends.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteBrainworksGetSuspends): ExecuteBrainworksGetSuspends.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteBrainworksGetSuspends, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteBrainworksGetSuspends;
  static deserializeBinaryFromReader(message: ExecuteBrainworksGetSuspends, reader: jspb.BinaryReader): ExecuteBrainworksGetSuspends;
}

export namespace ExecuteBrainworksGetSuspends {
  export type AsObject = {
  }
}

export class ExecuteBrainworksGetCustomerByCustIdV2 extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteBrainworksGetCustomerByCustIdV2.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteBrainworksGetCustomerByCustIdV2): ExecuteBrainworksGetCustomerByCustIdV2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteBrainworksGetCustomerByCustIdV2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteBrainworksGetCustomerByCustIdV2;
  static deserializeBinaryFromReader(message: ExecuteBrainworksGetCustomerByCustIdV2, reader: jspb.BinaryReader): ExecuteBrainworksGetCustomerByCustIdV2;
}

export namespace ExecuteBrainworksGetCustomerByCustIdV2 {
  export type AsObject = {
  }
}

export class ExecuteBrainworksGetComplaints extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteBrainworksGetComplaints.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteBrainworksGetComplaints): ExecuteBrainworksGetComplaints.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteBrainworksGetComplaints, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteBrainworksGetComplaints;
  static deserializeBinaryFromReader(message: ExecuteBrainworksGetComplaints, reader: jspb.BinaryReader): ExecuteBrainworksGetComplaints;
}

export namespace ExecuteBrainworksGetComplaints {
  export type AsObject = {
  }
}

export class ExecuteBrainworksGetCodesOrTypes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteBrainworksGetCodesOrTypes.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteBrainworksGetCodesOrTypes): ExecuteBrainworksGetCodesOrTypes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteBrainworksGetCodesOrTypes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteBrainworksGetCodesOrTypes;
  static deserializeBinaryFromReader(message: ExecuteBrainworksGetCodesOrTypes, reader: jspb.BinaryReader): ExecuteBrainworksGetCodesOrTypes;
}

export namespace ExecuteBrainworksGetCodesOrTypes {
  export type AsObject = {
  }
}

export class ExecuteBrainworksStopSuspends extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteBrainworksStopSuspends.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteBrainworksStopSuspends): ExecuteBrainworksStopSuspends.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteBrainworksStopSuspends, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteBrainworksStopSuspends;
  static deserializeBinaryFromReader(message: ExecuteBrainworksStopSuspends, reader: jspb.BinaryReader): ExecuteBrainworksStopSuspends;
}

export namespace ExecuteBrainworksStopSuspends {
  export type AsObject = {
  }
}

export class ExecuteBrainworksStartSuspends extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteBrainworksStartSuspends.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteBrainworksStartSuspends): ExecuteBrainworksStartSuspends.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteBrainworksStartSuspends, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteBrainworksStartSuspends;
  static deserializeBinaryFromReader(message: ExecuteBrainworksStartSuspends, reader: jspb.BinaryReader): ExecuteBrainworksStartSuspends;
}

export namespace ExecuteBrainworksStartSuspends {
  export type AsObject = {
  }
}

export class ExecuteBrainworksSendComplaint extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteBrainworksSendComplaint.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteBrainworksSendComplaint): ExecuteBrainworksSendComplaint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteBrainworksSendComplaint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteBrainworksSendComplaint;
  static deserializeBinaryFromReader(message: ExecuteBrainworksSendComplaint, reader: jspb.BinaryReader): ExecuteBrainworksSendComplaint;
}

export namespace ExecuteBrainworksSendComplaint {
  export type AsObject = {
  }
}

export class ExecuteBrainworksGetCustomerByCustId extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteBrainworksGetCustomerByCustId.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteBrainworksGetCustomerByCustId): ExecuteBrainworksGetCustomerByCustId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteBrainworksGetCustomerByCustId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteBrainworksGetCustomerByCustId;
  static deserializeBinaryFromReader(message: ExecuteBrainworksGetCustomerByCustId, reader: jspb.BinaryReader): ExecuteBrainworksGetCustomerByCustId;
}

export namespace ExecuteBrainworksGetCustomerByCustId {
  export type AsObject = {
  }
}

export class ExecuteOsgconnectCcPayments extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteOsgconnectCcPayments.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteOsgconnectCcPayments): ExecuteOsgconnectCcPayments.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteOsgconnectCcPayments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteOsgconnectCcPayments;
  static deserializeBinaryFromReader(message: ExecuteOsgconnectCcPayments, reader: jspb.BinaryReader): ExecuteOsgconnectCcPayments;
}

export namespace ExecuteOsgconnectCcPayments {
  export type AsObject = {
  }
}

export class ExecuteOsgconnectAchPayments extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteOsgconnectAchPayments.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteOsgconnectAchPayments): ExecuteOsgconnectAchPayments.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteOsgconnectAchPayments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteOsgconnectAchPayments;
  static deserializeBinaryFromReader(message: ExecuteOsgconnectAchPayments, reader: jspb.BinaryReader): ExecuteOsgconnectAchPayments;
}

export namespace ExecuteOsgconnectAchPayments {
  export type AsObject = {
  }
}

export class ExecuteOsgconnectValidateAccountNo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteOsgconnectValidateAccountNo.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteOsgconnectValidateAccountNo): ExecuteOsgconnectValidateAccountNo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteOsgconnectValidateAccountNo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteOsgconnectValidateAccountNo;
  static deserializeBinaryFromReader(message: ExecuteOsgconnectValidateAccountNo, reader: jspb.BinaryReader): ExecuteOsgconnectValidateAccountNo;
}

export namespace ExecuteOsgconnectValidateAccountNo {
  export type AsObject = {
  }
}

export class ExecuteNtvbCreditMissedDelivery extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNtvbCreditMissedDelivery.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNtvbCreditMissedDelivery): ExecuteNtvbCreditMissedDelivery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNtvbCreditMissedDelivery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNtvbCreditMissedDelivery;
  static deserializeBinaryFromReader(message: ExecuteNtvbCreditMissedDelivery, reader: jspb.BinaryReader): ExecuteNtvbCreditMissedDelivery;
}

export namespace ExecuteNtvbCreditMissedDelivery {
  export type AsObject = {
  }
}

export class ExecuteNtvbCustomerSearch extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNtvbCustomerSearch.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNtvbCustomerSearch): ExecuteNtvbCustomerSearch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNtvbCustomerSearch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNtvbCustomerSearch;
  static deserializeBinaryFromReader(message: ExecuteNtvbCustomerSearch, reader: jspb.BinaryReader): ExecuteNtvbCustomerSearch;
}

export namespace ExecuteNtvbCustomerSearch {
  export type AsObject = {
  }
}

export class ExecuteNtvbEndCall extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNtvbEndCall.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNtvbEndCall): ExecuteNtvbEndCall.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNtvbEndCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNtvbEndCall;
  static deserializeBinaryFromReader(message: ExecuteNtvbEndCall, reader: jspb.BinaryReader): ExecuteNtvbEndCall;
}

export namespace ExecuteNtvbEndCall {
  export type AsObject = {
  }
}

export class ExecuteNtvbIntegrationDefinition extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNtvbIntegrationDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNtvbIntegrationDefinition): ExecuteNtvbIntegrationDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNtvbIntegrationDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNtvbIntegrationDefinition;
  static deserializeBinaryFromReader(message: ExecuteNtvbIntegrationDefinition, reader: jspb.BinaryReader): ExecuteNtvbIntegrationDefinition;
}

export namespace ExecuteNtvbIntegrationDefinition {
  export type AsObject = {
  }
}

export class ExecuteNtvbMissedDelivery extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNtvbMissedDelivery.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNtvbMissedDelivery): ExecuteNtvbMissedDelivery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNtvbMissedDelivery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNtvbMissedDelivery;
  static deserializeBinaryFromReader(message: ExecuteNtvbMissedDelivery, reader: jspb.BinaryReader): ExecuteNtvbMissedDelivery;
}

export namespace ExecuteNtvbMissedDelivery {
  export type AsObject = {
  }
}

export class ExecuteNtvbRemoveAutorenewal extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNtvbRemoveAutorenewal.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNtvbRemoveAutorenewal): ExecuteNtvbRemoveAutorenewal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNtvbRemoveAutorenewal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNtvbRemoveAutorenewal;
  static deserializeBinaryFromReader(message: ExecuteNtvbRemoveAutorenewal, reader: jspb.BinaryReader): ExecuteNtvbRemoveAutorenewal;
}

export namespace ExecuteNtvbRemoveAutorenewal {
  export type AsObject = {
  }
}

export class ExecuteNtvbRenewSubscription extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNtvbRenewSubscription.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNtvbRenewSubscription): ExecuteNtvbRenewSubscription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNtvbRenewSubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNtvbRenewSubscription;
  static deserializeBinaryFromReader(message: ExecuteNtvbRenewSubscription, reader: jspb.BinaryReader): ExecuteNtvbRenewSubscription;
}

export namespace ExecuteNtvbRenewSubscription {
  export type AsObject = {
  }
}

export class ExecuteNtvbRenewalOffers extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNtvbRenewalOffers.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNtvbRenewalOffers): ExecuteNtvbRenewalOffers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNtvbRenewalOffers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNtvbRenewalOffers;
  static deserializeBinaryFromReader(message: ExecuteNtvbRenewalOffers, reader: jspb.BinaryReader): ExecuteNtvbRenewalOffers;
}

export namespace ExecuteNtvbRenewalOffers {
  export type AsObject = {
  }
}

export class ExecuteNtvbSetAutorenewal extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNtvbSetAutorenewal.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNtvbSetAutorenewal): ExecuteNtvbSetAutorenewal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNtvbSetAutorenewal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNtvbSetAutorenewal;
  static deserializeBinaryFromReader(message: ExecuteNtvbSetAutorenewal, reader: jspb.BinaryReader): ExecuteNtvbSetAutorenewal;
}

export namespace ExecuteNtvbSetAutorenewal {
  export type AsObject = {
  }
}

export class ExecuteNtvbStartIncomingCall extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNtvbStartIncomingCall.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNtvbStartIncomingCall): ExecuteNtvbStartIncomingCall.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNtvbStartIncomingCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNtvbStartIncomingCall;
  static deserializeBinaryFromReader(message: ExecuteNtvbStartIncomingCall, reader: jspb.BinaryReader): ExecuteNtvbStartIncomingCall;
}

export namespace ExecuteNtvbStartIncomingCall {
  export type AsObject = {
  }
}

export class ExecuteNtvbStartOutgoingCall extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNtvbStartOutgoingCall.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNtvbStartOutgoingCall): ExecuteNtvbStartOutgoingCall.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNtvbStartOutgoingCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNtvbStartOutgoingCall;
  static deserializeBinaryFromReader(message: ExecuteNtvbStartOutgoingCall, reader: jspb.BinaryReader): ExecuteNtvbStartOutgoingCall;
}

export namespace ExecuteNtvbStartOutgoingCall {
  export type AsObject = {
  }
}

export class ExecuteNtvbSubscriptionInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNtvbSubscriptionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNtvbSubscriptionInfo): ExecuteNtvbSubscriptionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNtvbSubscriptionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNtvbSubscriptionInfo;
  static deserializeBinaryFromReader(message: ExecuteNtvbSubscriptionInfo, reader: jspb.BinaryReader): ExecuteNtvbSubscriptionInfo;
}

export namespace ExecuteNtvbSubscriptionInfo {
  export type AsObject = {
  }
}

export class ExecuteNtvbVacationStop extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNtvbVacationStop.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNtvbVacationStop): ExecuteNtvbVacationStop.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNtvbVacationStop, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNtvbVacationStop;
  static deserializeBinaryFromReader(message: ExecuteNtvbVacationStop, reader: jspb.BinaryReader): ExecuteNtvbVacationStop;
}

export namespace ExecuteNtvbVacationStop {
  export type AsObject = {
  }
}

export class ExecuteNtvbAuthtest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNtvbAuthtest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNtvbAuthtest): ExecuteNtvbAuthtest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNtvbAuthtest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNtvbAuthtest;
  static deserializeBinaryFromReader(message: ExecuteNtvbAuthtest, reader: jspb.BinaryReader): ExecuteNtvbAuthtest;
}

export namespace ExecuteNtvbAuthtest {
  export type AsObject = {
  }
}

export class ExecuteElavonCreditCardSale extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteElavonCreditCardSale.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteElavonCreditCardSale): ExecuteElavonCreditCardSale.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteElavonCreditCardSale, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteElavonCreditCardSale;
  static deserializeBinaryFromReader(message: ExecuteElavonCreditCardSale, reader: jspb.BinaryReader): ExecuteElavonCreditCardSale;
}

export namespace ExecuteElavonCreditCardSale {
  export type AsObject = {
  }
}

export class ExecuteElavonAddRecurring extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteElavonAddRecurring.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteElavonAddRecurring): ExecuteElavonAddRecurring.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteElavonAddRecurring, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteElavonAddRecurring;
  static deserializeBinaryFromReader(message: ExecuteElavonAddRecurring, reader: jspb.BinaryReader): ExecuteElavonAddRecurring;
}

export namespace ExecuteElavonAddRecurring {
  export type AsObject = {
  }
}

export class ExecuteElavonDccResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteElavonDccResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteElavonDccResponse): ExecuteElavonDccResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteElavonDccResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteElavonDccResponse;
  static deserializeBinaryFromReader(message: ExecuteElavonDccResponse, reader: jspb.BinaryReader): ExecuteElavonDccResponse;
}

export namespace ExecuteElavonDccResponse {
  export type AsObject = {
  }
}

export class ExecuteElavonUpdateRecurring extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteElavonUpdateRecurring.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteElavonUpdateRecurring): ExecuteElavonUpdateRecurring.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteElavonUpdateRecurring, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteElavonUpdateRecurring;
  static deserializeBinaryFromReader(message: ExecuteElavonUpdateRecurring, reader: jspb.BinaryReader): ExecuteElavonUpdateRecurring;
}

export namespace ExecuteElavonUpdateRecurring {
  export type AsObject = {
  }
}

export class ExecuteElavonDeleteRecurring extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteElavonDeleteRecurring.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteElavonDeleteRecurring): ExecuteElavonDeleteRecurring.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteElavonDeleteRecurring, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteElavonDeleteRecurring;
  static deserializeBinaryFromReader(message: ExecuteElavonDeleteRecurring, reader: jspb.BinaryReader): ExecuteElavonDeleteRecurring;
}

export namespace ExecuteElavonDeleteRecurring {
  export type AsObject = {
  }
}

export class ExecuteElavonMccCreditCardSale extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteElavonMccCreditCardSale.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteElavonMccCreditCardSale): ExecuteElavonMccCreditCardSale.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteElavonMccCreditCardSale, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteElavonMccCreditCardSale;
  static deserializeBinaryFromReader(message: ExecuteElavonMccCreditCardSale, reader: jspb.BinaryReader): ExecuteElavonMccCreditCardSale;
}

export namespace ExecuteElavonMccCreditCardSale {
  export type AsObject = {
  }
}

export class ExecuteElavonHealthCareCCSale extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteElavonHealthCareCCSale.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteElavonHealthCareCCSale): ExecuteElavonHealthCareCCSale.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteElavonHealthCareCCSale, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteElavonHealthCareCCSale;
  static deserializeBinaryFromReader(message: ExecuteElavonHealthCareCCSale, reader: jspb.BinaryReader): ExecuteElavonHealthCareCCSale;
}

export namespace ExecuteElavonHealthCareCCSale {
  export type AsObject = {
  }
}

export class ExecuteElavonAddInstallment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteElavonAddInstallment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteElavonAddInstallment): ExecuteElavonAddInstallment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteElavonAddInstallment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteElavonAddInstallment;
  static deserializeBinaryFromReader(message: ExecuteElavonAddInstallment, reader: jspb.BinaryReader): ExecuteElavonAddInstallment;
}

export namespace ExecuteElavonAddInstallment {
  export type AsObject = {
  }
}

export class ExecuteElavonDeleteInstallment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteElavonDeleteInstallment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteElavonDeleteInstallment): ExecuteElavonDeleteInstallment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteElavonDeleteInstallment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteElavonDeleteInstallment;
  static deserializeBinaryFromReader(message: ExecuteElavonDeleteInstallment, reader: jspb.BinaryReader): ExecuteElavonDeleteInstallment;
}

export namespace ExecuteElavonDeleteInstallment {
  export type AsObject = {
  }
}

export class ExecuteElavonUpdateInstallment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteElavonUpdateInstallment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteElavonUpdateInstallment): ExecuteElavonUpdateInstallment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteElavonUpdateInstallment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteElavonUpdateInstallment;
  static deserializeBinaryFromReader(message: ExecuteElavonUpdateInstallment, reader: jspb.BinaryReader): ExecuteElavonUpdateInstallment;
}

export namespace ExecuteElavonUpdateInstallment {
  export type AsObject = {
  }
}

export class ExecuteGlobalPaymentsCardSale extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteGlobalPaymentsCardSale.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteGlobalPaymentsCardSale): ExecuteGlobalPaymentsCardSale.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteGlobalPaymentsCardSale, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteGlobalPaymentsCardSale;
  static deserializeBinaryFromReader(message: ExecuteGlobalPaymentsCardSale, reader: jspb.BinaryReader): ExecuteGlobalPaymentsCardSale;
}

export namespace ExecuteGlobalPaymentsCardSale {
  export type AsObject = {
  }
}

export class ExecuteGlobalPaymentsGetTransactionByID extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteGlobalPaymentsGetTransactionByID.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteGlobalPaymentsGetTransactionByID): ExecuteGlobalPaymentsGetTransactionByID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteGlobalPaymentsGetTransactionByID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteGlobalPaymentsGetTransactionByID;
  static deserializeBinaryFromReader(message: ExecuteGlobalPaymentsGetTransactionByID, reader: jspb.BinaryReader): ExecuteGlobalPaymentsGetTransactionByID;
}

export namespace ExecuteGlobalPaymentsGetTransactionByID {
  export type AsObject = {
  }
}

export class ExecuteGlobalPaymentsListTransactions extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteGlobalPaymentsListTransactions.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteGlobalPaymentsListTransactions): ExecuteGlobalPaymentsListTransactions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteGlobalPaymentsListTransactions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteGlobalPaymentsListTransactions;
  static deserializeBinaryFromReader(message: ExecuteGlobalPaymentsListTransactions, reader: jspb.BinaryReader): ExecuteGlobalPaymentsListTransactions;
}

export namespace ExecuteGlobalPaymentsListTransactions {
  export type AsObject = {
  }
}

export class ExecuteGlobalPaymentsRefundSale extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteGlobalPaymentsRefundSale.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteGlobalPaymentsRefundSale): ExecuteGlobalPaymentsRefundSale.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteGlobalPaymentsRefundSale, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteGlobalPaymentsRefundSale;
  static deserializeBinaryFromReader(message: ExecuteGlobalPaymentsRefundSale, reader: jspb.BinaryReader): ExecuteGlobalPaymentsRefundSale;
}

export namespace ExecuteGlobalPaymentsRefundSale {
  export type AsObject = {
  }
}

export class ExecuteGlobalPaymentsReverseSaleOrRefund extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteGlobalPaymentsReverseSaleOrRefund.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteGlobalPaymentsReverseSaleOrRefund): ExecuteGlobalPaymentsReverseSaleOrRefund.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteGlobalPaymentsReverseSaleOrRefund, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteGlobalPaymentsReverseSaleOrRefund;
  static deserializeBinaryFromReader(message: ExecuteGlobalPaymentsReverseSaleOrRefund, reader: jspb.BinaryReader): ExecuteGlobalPaymentsReverseSaleOrRefund;
}

export namespace ExecuteGlobalPaymentsReverseSaleOrRefund {
  export type AsObject = {
  }
}

export class ExecutePayScoutCreditCardSale extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePayScoutCreditCardSale.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePayScoutCreditCardSale): ExecutePayScoutCreditCardSale.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePayScoutCreditCardSale, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePayScoutCreditCardSale;
  static deserializeBinaryFromReader(message: ExecutePayScoutCreditCardSale, reader: jspb.BinaryReader): ExecutePayScoutCreditCardSale;
}

export namespace ExecutePayScoutCreditCardSale {
  export type AsObject = {
  }
}

export class ExecutePayScoutEcheckSale extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePayScoutEcheckSale.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePayScoutEcheckSale): ExecutePayScoutEcheckSale.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePayScoutEcheckSale, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePayScoutEcheckSale;
  static deserializeBinaryFromReader(message: ExecutePayScoutEcheckSale, reader: jspb.BinaryReader): ExecutePayScoutEcheckSale;
}

export namespace ExecutePayScoutEcheckSale {
  export type AsObject = {
  }
}

export class ExecuteI2cEcho extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteI2cEcho.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteI2cEcho): ExecuteI2cEcho.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteI2cEcho, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteI2cEcho;
  static deserializeBinaryFromReader(message: ExecuteI2cEcho, reader: jspb.BinaryReader): ExecuteI2cEcho;
}

export namespace ExecuteI2cEcho {
  export type AsObject = {
  }
}

export class ExecuteI2cBalanceInquiry extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteI2cBalanceInquiry.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteI2cBalanceInquiry): ExecuteI2cBalanceInquiry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteI2cBalanceInquiry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteI2cBalanceInquiry;
  static deserializeBinaryFromReader(message: ExecuteI2cBalanceInquiry, reader: jspb.BinaryReader): ExecuteI2cBalanceInquiry;
}

export namespace ExecuteI2cBalanceInquiry {
  export type AsObject = {
  }
}

export class ExecuteI2cVerifyUser extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteI2cVerifyUser.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteI2cVerifyUser): ExecuteI2cVerifyUser.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteI2cVerifyUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteI2cVerifyUser;
  static deserializeBinaryFromReader(message: ExecuteI2cVerifyUser, reader: jspb.BinaryReader): ExecuteI2cVerifyUser;
}

export namespace ExecuteI2cVerifyUser {
  export type AsObject = {
  }
}

export class ExecuteI2cSearchCustomer extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteI2cSearchCustomer.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteI2cSearchCustomer): ExecuteI2cSearchCustomer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteI2cSearchCustomer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteI2cSearchCustomer;
  static deserializeBinaryFromReader(message: ExecuteI2cSearchCustomer, reader: jspb.BinaryReader): ExecuteI2cSearchCustomer;
}

export namespace ExecuteI2cSearchCustomer {
  export type AsObject = {
  }
}

export class ExecuteI2cMakePayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteI2cMakePayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteI2cMakePayment): ExecuteI2cMakePayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteI2cMakePayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteI2cMakePayment;
  static deserializeBinaryFromReader(message: ExecuteI2cMakePayment, reader: jspb.BinaryReader): ExecuteI2cMakePayment;
}

export namespace ExecuteI2cMakePayment {
  export type AsObject = {
  }
}

export class ExecuteI2cGetCardholderProfile extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteI2cGetCardholderProfile.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteI2cGetCardholderProfile): ExecuteI2cGetCardholderProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteI2cGetCardholderProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteI2cGetCardholderProfile;
  static deserializeBinaryFromReader(message: ExecuteI2cGetCardholderProfile, reader: jspb.BinaryReader): ExecuteI2cGetCardholderProfile;
}

export namespace ExecuteI2cGetCardholderProfile {
  export type AsObject = {
  }
}

export class ExecuteI2cGetCardholderStatement extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteI2cGetCardholderStatement.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteI2cGetCardholderStatement): ExecuteI2cGetCardholderStatement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteI2cGetCardholderStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteI2cGetCardholderStatement;
  static deserializeBinaryFromReader(message: ExecuteI2cGetCardholderStatement, reader: jspb.BinaryReader): ExecuteI2cGetCardholderStatement;
}

export namespace ExecuteI2cGetCardholderStatement {
  export type AsObject = {
  }
}

export class ExecuteI2cGetCardholderBalance extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteI2cGetCardholderBalance.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteI2cGetCardholderBalance): ExecuteI2cGetCardholderBalance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteI2cGetCardholderBalance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteI2cGetCardholderBalance;
  static deserializeBinaryFromReader(message: ExecuteI2cGetCardholderBalance, reader: jspb.BinaryReader): ExecuteI2cGetCardholderBalance;
}

export namespace ExecuteI2cGetCardholderBalance {
  export type AsObject = {
  }
}

export class ExecuteI2cGetCreditPaymentInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteI2cGetCreditPaymentInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteI2cGetCreditPaymentInfo): ExecuteI2cGetCreditPaymentInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteI2cGetCreditPaymentInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteI2cGetCreditPaymentInfo;
  static deserializeBinaryFromReader(message: ExecuteI2cGetCreditPaymentInfo, reader: jspb.BinaryReader): ExecuteI2cGetCreditPaymentInfo;
}

export namespace ExecuteI2cGetCreditPaymentInfo {
  export type AsObject = {
  }
}

export class ExecuteI2cTransactionHistory extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteI2cTransactionHistory.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteI2cTransactionHistory): ExecuteI2cTransactionHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteI2cTransactionHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteI2cTransactionHistory;
  static deserializeBinaryFromReader(message: ExecuteI2cTransactionHistory, reader: jspb.BinaryReader): ExecuteI2cTransactionHistory;
}

export namespace ExecuteI2cTransactionHistory {
  export type AsObject = {
  }
}

export class ExecuteOpayoCcPayments extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteOpayoCcPayments.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteOpayoCcPayments): ExecuteOpayoCcPayments.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteOpayoCcPayments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteOpayoCcPayments;
  static deserializeBinaryFromReader(message: ExecuteOpayoCcPayments, reader: jspb.BinaryReader): ExecuteOpayoCcPayments;
}

export namespace ExecuteOpayoCcPayments {
  export type AsObject = {
  }
}

export class ExecuteShift4CcPayments extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteShift4CcPayments.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteShift4CcPayments): ExecuteShift4CcPayments.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteShift4CcPayments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteShift4CcPayments;
  static deserializeBinaryFromReader(message: ExecuteShift4CcPayments, reader: jspb.BinaryReader): ExecuteShift4CcPayments;
}

export namespace ExecuteShift4CcPayments {
  export type AsObject = {
  }
}

export class ExecutePoscorpAccesstoken extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePoscorpAccesstoken.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePoscorpAccesstoken): ExecutePoscorpAccesstoken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePoscorpAccesstoken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePoscorpAccesstoken;
  static deserializeBinaryFromReader(message: ExecutePoscorpAccesstoken, reader: jspb.BinaryReader): ExecutePoscorpAccesstoken;
}

export namespace ExecutePoscorpAccesstoken {
  export type AsObject = {
  }
}

export class ExecutePoscorpLookupGuarantor extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePoscorpLookupGuarantor.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePoscorpLookupGuarantor): ExecutePoscorpLookupGuarantor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePoscorpLookupGuarantor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePoscorpLookupGuarantor;
  static deserializeBinaryFromReader(message: ExecutePoscorpLookupGuarantor, reader: jspb.BinaryReader): ExecutePoscorpLookupGuarantor;
}

export namespace ExecutePoscorpLookupGuarantor {
  export type AsObject = {
  }
}

export class ExecutePoscorpUpdatePaymentStatus extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePoscorpUpdatePaymentStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePoscorpUpdatePaymentStatus): ExecutePoscorpUpdatePaymentStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePoscorpUpdatePaymentStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePoscorpUpdatePaymentStatus;
  static deserializeBinaryFromReader(message: ExecutePoscorpUpdatePaymentStatus, reader: jspb.BinaryReader): ExecutePoscorpUpdatePaymentStatus;
}

export namespace ExecutePoscorpUpdatePaymentStatus {
  export type AsObject = {
  }
}

export class ExecutePianoGetUser extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePianoGetUser.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePianoGetUser): ExecutePianoGetUser.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePianoGetUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePianoGetUser;
  static deserializeBinaryFromReader(message: ExecutePianoGetUser, reader: jspb.BinaryReader): ExecutePianoGetUser;
}

export namespace ExecutePianoGetUser {
  export type AsObject = {
  }
}

export class ExecutePianoUpdateUser extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePianoUpdateUser.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePianoUpdateUser): ExecutePianoUpdateUser.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePianoUpdateUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePianoUpdateUser;
  static deserializeBinaryFromReader(message: ExecutePianoUpdateUser, reader: jspb.BinaryReader): ExecutePianoUpdateUser;
}

export namespace ExecutePianoUpdateUser {
  export type AsObject = {
  }
}

export class ExecuteEpicGetToken extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteEpicGetToken.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteEpicGetToken): ExecuteEpicGetToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteEpicGetToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteEpicGetToken;
  static deserializeBinaryFromReader(message: ExecuteEpicGetToken, reader: jspb.BinaryReader): ExecuteEpicGetToken;
}

export namespace ExecuteEpicGetToken {
  export type AsObject = {
  }
}

export class ExecuteEpicGetPatient extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteEpicGetPatient.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteEpicGetPatient): ExecuteEpicGetPatient.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteEpicGetPatient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteEpicGetPatient;
  static deserializeBinaryFromReader(message: ExecuteEpicGetPatient, reader: jspb.BinaryReader): ExecuteEpicGetPatient;
}

export namespace ExecuteEpicGetPatient {
  export type AsObject = {
  }
}

export class ExecuteEpicMatchPatient extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteEpicMatchPatient.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteEpicMatchPatient): ExecuteEpicMatchPatient.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteEpicMatchPatient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteEpicMatchPatient;
  static deserializeBinaryFromReader(message: ExecuteEpicMatchPatient, reader: jspb.BinaryReader): ExecuteEpicMatchPatient;
}

export namespace ExecuteEpicMatchPatient {
  export type AsObject = {
  }
}

export class ExecuteEpicSearchAppointment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteEpicSearchAppointment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteEpicSearchAppointment): ExecuteEpicSearchAppointment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteEpicSearchAppointment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteEpicSearchAppointment;
  static deserializeBinaryFromReader(message: ExecuteEpicSearchAppointment, reader: jspb.BinaryReader): ExecuteEpicSearchAppointment;
}

export namespace ExecuteEpicSearchAppointment {
  export type AsObject = {
  }
}

export class ExecuteEpicFindAppointment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteEpicFindAppointment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteEpicFindAppointment): ExecuteEpicFindAppointment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteEpicFindAppointment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteEpicFindAppointment;
  static deserializeBinaryFromReader(message: ExecuteEpicFindAppointment, reader: jspb.BinaryReader): ExecuteEpicFindAppointment;
}

export namespace ExecuteEpicFindAppointment {
  export type AsObject = {
  }
}

export class ExecuteEpicBookAppointment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteEpicBookAppointment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteEpicBookAppointment): ExecuteEpicBookAppointment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteEpicBookAppointment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteEpicBookAppointment;
  static deserializeBinaryFromReader(message: ExecuteEpicBookAppointment, reader: jspb.BinaryReader): ExecuteEpicBookAppointment;
}

export namespace ExecuteEpicBookAppointment {
  export type AsObject = {
  }
}

export class ExecuteEpicGetAccount extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteEpicGetAccount.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteEpicGetAccount): ExecuteEpicGetAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteEpicGetAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteEpicGetAccount;
  static deserializeBinaryFromReader(message: ExecuteEpicGetAccount, reader: jspb.BinaryReader): ExecuteEpicGetAccount;
}

export namespace ExecuteEpicGetAccount {
  export type AsObject = {
  }
}

export class ExecuteNewzwarePhoneLookup extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNewzwarePhoneLookup.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNewzwarePhoneLookup): ExecuteNewzwarePhoneLookup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNewzwarePhoneLookup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNewzwarePhoneLookup;
  static deserializeBinaryFromReader(message: ExecuteNewzwarePhoneLookup, reader: jspb.BinaryReader): ExecuteNewzwarePhoneLookup;
}

export namespace ExecuteNewzwarePhoneLookup {
  export type AsObject = {
  }
}

export class ExecuteNewzwareAccountInquiry extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNewzwareAccountInquiry.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNewzwareAccountInquiry): ExecuteNewzwareAccountInquiry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNewzwareAccountInquiry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNewzwareAccountInquiry;
  static deserializeBinaryFromReader(message: ExecuteNewzwareAccountInquiry, reader: jspb.BinaryReader): ExecuteNewzwareAccountInquiry;
}

export namespace ExecuteNewzwareAccountInquiry {
  export type AsObject = {
  }
}

export class ExecuteNewzwareCcPayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNewzwareCcPayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNewzwareCcPayment): ExecuteNewzwareCcPayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNewzwareCcPayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNewzwareCcPayment;
  static deserializeBinaryFromReader(message: ExecuteNewzwareCcPayment, reader: jspb.BinaryReader): ExecuteNewzwareCcPayment;
}

export namespace ExecuteNewzwareCcPayment {
  export type AsObject = {
  }
}

export class ExecuteNewzwareAchPayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNewzwareAchPayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNewzwareAchPayment): ExecuteNewzwareAchPayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNewzwareAchPayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNewzwareAchPayment;
  static deserializeBinaryFromReader(message: ExecuteNewzwareAchPayment, reader: jspb.BinaryReader): ExecuteNewzwareAchPayment;
}

export namespace ExecuteNewzwareAchPayment {
  export type AsObject = {
  }
}

export interface IntegrationTypeMap {
  INTEGRATION_TYPE_UNKNOWN: 0;
  INTEGRATION_TYPE_BRAINTREE: 100;
  INTEGRATION_TYPE_RELATIENT: 200;
  INTEGRATION_TYPE_CYBERSOURCE: 300;
  INTEGRATION_TYPE_CIRCPRO: 400;
  INTEGRATION_TYPE_AUTHORIZENET: 500;
  INTEGRATION_TYPE_EXPITRANS: 600;
  INTEGRATION_TYPE_AXIAMEDFUSION: 700;
  INTEGRATION_TYPE_INSTAMED: 800;
  INTEGRATION_TYPE_USAEPAY: 900;
  INTEGRATION_TYPE_EZIDEBIT: 1000;
  INTEGRATION_TYPE_BAMBORA: 1100;
  INTEGRATION_TYPE_REPAY: 1200;
  INTEGRATION_TYPE_AXIA: 1300;
  INTEGRATION_TYPE_SECURETRADING: 1400;
  INTEGRATION_TYPE_PAYMENTVISION: 1500;
  INTEGRATION_TYPE_INTERPROSE: 1600;
  INTEGRATION_TYPE_DALLASNEWS: 1700;
  INTEGRATION_TYPE_PAYWAY: 1800;
  INTEGRATION_TYPE_BILLINGTREE: 1900;
  INTEGRATION_TYPE_EXPERIAN: 2000;
  INTEGRATION_TYPE_NEWSCYCLE: 2100;
  INTEGRATION_TYPE_TRUSTCOMMERCE: 2200;
  INTEGRATION_TYPE_VANTIV: 2300;
  INTEGRATION_TYPE_JOURNEY: 2400;
  INTEGRATION_TYPE_ATHENAHEALTH: 2500;
  INTEGRATION_TYPE_BRAINWORKS: 2600;
  INTEGRATION_TYPE_OSGCONNECT: 2700;
  INTEGRATION_TYPE_NTVB: 2800;
  INTEGRATION_TYPE_ELAVON: 2900;
  INTEGRATION_TYPE_GLOBALPAYMENTS: 3000;
  INTEGRATION_TYPE_PAY_SCOUT: 3100;
  INTEGRATION_TYPE_I2C: 3200;
  INTEGRATION_TYPE_OPAYO: 3300;
  INTEGRATION_TYPE_SHIFT4: 3400;
  INTEGRATION_TYPE_POSCORP: 3500;
  INTEGRATION_TYPE_PIANO: 3600;
  INTEGRATION_TYPE_EPIC: 3700;
  INTEGRATION_TYPE_NEWZWARE: 3800;
}

export const IntegrationType: IntegrationTypeMap;

export interface RequestMethodMap {
  REQUEST_METHOD_UNKNOWN: 0;
  REQUEST_METHOD_BRAINTREE_CREDITSALE: 101;
  REQUEST_METHOD_BRAINTREE_BANKSALE: 102;
  REQUEST_METHOD_RELATIENT_GETPATIENTBALANCE: 201;
  REQUEST_METHOD_RELATIENT_GETPATIENTCCTOKENS: 202;
  REQUEST_METHOD_RELATIENT_POSTPATIENTTOKEN: 203;
  REQUEST_METHOD_RELATIENT_POSTPATIENTBALANCE: 204;
  REQUEST_METHOD_RELATIENT_GETPATIENT: 205;
  REQUEST_METHOD_RELATIENT_POSTBALANCEBYID: 206;
  REQUEST_METHOD_RELATIENT_CREATE_FORTIS_ACHTOKEN: 207;
  REQUEST_METHOD_RELATIENT_CREATE_FORTIS_CCTOKEN: 208;
  REQUEST_METHOD_RELATIENT_FORTIS_TOKEN_ACH_DEBIT_PAYMENT: 209;
  REQUEST_METHOD_RELATIENT_FORTIS_TOKEN_CC_PAYMENT: 210;
  REQUEST_METHOD_CYBERSOURCE_CREDITPAYMENT: 301;
  REQUEST_METHOD_CYBERSOURCE_ECHECKPAYMENT: 302;
  REQUEST_METHOD_CIRCPRO_PHONELOOKUPWITHBUNDLE: 401;
  REQUEST_METHOD_CIRCPRO_PHONELOOKUP: 402;
  REQUEST_METHOD_CIRCPRO_VACATIONRESTARTINQUIRY: 403;
  REQUEST_METHOD_CIRCPRO_COMPLAINTINQUIRY: 404;
  REQUEST_METHOD_CIRCPRO_ACCOUNTINQUIRY: 405;
  REQUEST_METHOD_CIRCPRO_ACCOUNTINQUIRYWITHTAX: 406;
  REQUEST_METHOD_CIRCPRO_ACCOUNTINQUIRYWITHTAXBUNDLE: 407;
  REQUEST_METHOD_CIRCPRO_COMPLAINTCODES: 408;
  REQUEST_METHOD_CIRCPRO_COMPLAINTUPDATE: 409;
  REQUEST_METHOD_CIRCPRO_VACATIONUPDATE: 410;
  REQUEST_METHOD_CIRCPRO_RESTARTUPDATE: 411;
  REQUEST_METHOD_CIRCPRO_LAW_IMMEDIATEPAYMENT: 412;
  REQUEST_METHOD_CIRCPRO_LAW_UPDATEDATAWITHPAC: 413;
  REQUEST_METHOD_CIRCPRO_LAW_GETCUSTOMERS: 414;
  REQUEST_METHOD_AUTHORIZENET_CHARGECREDITCARD: 501;
  REQUEST_METHOD_AUTHORIZENET_DEBITBANKACCOUNT: 502;
  REQUEST_METHOD_AUTHORIZENET_CREATECUSTOMERPAYMENTPROFILE: 503;
  REQUEST_METHOD_AUTHORIZENET_PAYPALTRANSACTION: 504;
  REQUEST_METHOD_AUTHORIZENET_GOOGLEPAYTRANSACTION: 505;
  REQUEST_METHOD_AUTHORIZENET_APPLEPAYTRANSACTION: 506;
  REQUEST_METHOD_AUTHORIZENET_PAYPALAUTHCAPTURE: 507;
  REQUEST_METHOD_EXPITRANS_CCTRANSACTION: 601;
  REQUEST_METHOD_EXPITRANS_ACHTRANSACTION: 602;
  REQUEST_METHOD_AXIAMEDFUSION_CCTRANSACTION: 701;
  REQUEST_METHOD_AXIAMEDFUSION_ACHTRANSACTION: 702;
  REQUEST_METHOD_AXIAMEDFUSION_CARDVERIFY: 703;
  REQUEST_METHOD_INSTAMED_PAYMENTSALE: 801;
  REQUEST_METHOD_INSTAMED_VOIDPAYMENT: 802;
  REQUEST_METHOD_USAEPAY_SUBMITCCPAYMENTS: 901;
  REQUEST_METHOD_USAEPAY_SUBMITACHPAYMENTS: 902;
  REQUEST_METHOD_USAEPAY_GETCCTOKEN: 903;
  REQUEST_METHOD_EZIDEBIT_SUBMITCCPAYMENTS: 1001;
  REQUEST_METHOD_EZIDEBIT_SUBMITACHPAYMENTS: 1002;
  REQUEST_METHOD_BAMBORA_SUBMITCCPAYMENTS: 1101;
  REQUEST_METHOD_BAMBORA_SUBMITACHPAYMENTS: 1102;
  REQUEST_METHOD_REPAY_STORECARD: 1201;
  REQUEST_METHOD_REPAY_PAYMENTTOKEN: 1202;
  REQUEST_METHOD_REPAY_ACHPAYMENTTOKEN: 1203;
  REQUEST_METHOD_AXIA_SUBMITSALEREQUESTBYCC: 1301;
  REQUEST_METHOD_AXIA_SUBMITSALEREQUESTBYCHECK: 1302;
  REQUEST_METHOD_SECURETRADING_SENDPAYMENT: 1401;
  REQUEST_METHOD_PAYMENTVISION_SUBMITCARDSALEREQUESTBYCC: 1501;
  REQUEST_METHOD_PAYMENTVISION_SUBMITCARDSALEREQUESTBYACH: 1502;
  REQUEST_METHOD_INTERPROSE_LOOKUPACCOUNT: 1601;
  REQUEST_METHOD_INTERPROSE_SUBMITCARDSALEREQUESTBYCC: 1602;
  REQUEST_METHOD_INTERPROSE_SUBMITCARDSALEREQUESTBYACH: 1603;
  REQUEST_METHOD_INTERPROSE_LOOKUPPAYMENTID: 1604;
  REQUEST_METHOD_INTERPROSE_LOOKUPACCOUNTBYFORMID: 1605;
  REQUEST_METHOD_DALLASNEWS_SEARCHBYPHONE: 1701;
  REQUEST_METHOD_DALLASNEWS_SEARCHBYZIPSTREET: 1702;
  REQUEST_METHOD_DALLASNEWS_SEARCHBY: 1703;
  REQUEST_METHOD_DALLASNEWS_CREATEVACATION: 1704;
  REQUEST_METHOD_DALLASNEWS_GETVACATION: 1705;
  REQUEST_METHOD_DALLASNEWS_GETVACATIONDAYSBETWEEN: 1706;
  REQUEST_METHOD_DALLASNEWS_GETVACATIONWITHCUTOFF: 1707;
  REQUEST_METHOD_DALLASNEWS_DELETEVACATION: 1708;
  REQUEST_METHOD_DALLASNEWS_ADDCOMPLAINT: 1709;
  REQUEST_METHOD_DALLASNEWS_UPDATEPHONENUMBER: 1710;
  REQUEST_METHOD_DALLASNEWS_STOPACCOUNT: 1711;
  REQUEST_METHOD_DALLASNEWS_CCPAYMENTTOKEN: 1712;
  REQUEST_METHOD_DALLASNEWS_ACHPAYMENTTOKEN: 1713;
  REQUEST_METHOD_PAYWAY_SUBMITCARDSALEREQUEST: 1801;
  REQUEST_METHOD_PAYWAY_CREATETOKENREQUEST: 1802;
  REQUEST_METHOD_PAYWAY_SUBMITACHSALEREQUEST: 1803;
  REQUEST_METHOD_BILLINGTREE_SUBMITCARDSALEREQUEST: 1901;
  REQUEST_METHOD_EXPERIAN_CC_PAYMENT_REQUEST: 2001;
  REQUEST_METHOD_EXPERIAN_CC_PAYMENTPLANREQUEST: 2002;
  REQUEST_METHOD_EXPERIAN_BALANCEREQUEST: 2003;
  REQUEST_METHOD_EXPERIAN_ACH_PAYMENT_REQUEST: 2004;
  REQUEST_METHOD_EXPERIAN_ACH_PAYMENTPLANREQUEST: 2005;
  REQUEST_METHOD_EXPERIAN_STELLA_CARD_ENTRY: 2006;
  REQUEST_METHOD_EXPERIAN_STELLA_ECHECK: 2007;
  REQUEST_METHOD_EXPERIAN_STELLA_CARD_DEVICE_TOKENIZATION: 2008;
  REQUEST_METHOD_EXPERIAN_STELLA_TOKEN_PAYMENT: 2009;
  REQUEST_METHOD_EXPERIAN_STELLA_ACH_TOKENIZATION: 2010;
  REQUEST_METHOD_EXPERIAN_STELLA_ADD_USA_EPAY_TOKEN: 2011;
  REQUEST_METHOD_EXPERIAN_STELLA_PAYMENT_PLANS: 2012;
  REQUEST_METHOD_EXPERIAN_STELLA_AUTH: 2013;
  REQUEST_METHOD_NEWSCYCLE_LOGIN: 2101;
  REQUEST_METHOD_NEWSCYCLE_SEARCHPAGE: 2102;
  REQUEST_METHOD_NEWSCYCLE_BILLINGINFO: 2103;
  REQUEST_METHOD_NEWSCYCLE_SERVICEERRORINFO: 2104;
  REQUEST_METHOD_NEWSCYCLE_SERVICEERRORTRANS: 2105;
  REQUEST_METHOD_NEWSCYCLE_STOPINFO: 2106;
  REQUEST_METHOD_NEWSCYCLE_STOPTRANS: 2107;
  REQUEST_METHOD_NEWSCYCLE_RENEWINFO: 2108;
  REQUEST_METHOD_NEWSCYCLE_AUTORENEWINFO: 2109;
  REQUEST_METHOD_NEWSCYCLE_AUTOTRAN: 2110;
  REQUEST_METHOD_NEWSCYCLE_PAYINFO: 2111;
  REQUEST_METHOD_NEWSCYCLE_PAYTRAN: 2112;
  REQUEST_METHOD_TRUSTCOMMERCE_CREDITSALE: 2201;
  REQUEST_METHOD_TRUSTCOMMERCE_ACHSALE: 2202;
  REQUEST_METHOD_VANTIV_CREDITSALE: 2301;
  REQUEST_METHOD_VANTIV_ACHSALE: 2302;
  REQUEST_METHOD_JOURNEY_LATEST: 2401;
  REQUEST_METHOD_ATHENAHEALTH_GETPATIENTS: 2501;
  REQUEST_METHOD_ATHENAHEALTH_GETPATIENTSWITHID: 2502;
  REQUEST_METHOD_ATHENAHEALTH_CCPAYMENT: 2503;
  REQUEST_METHOD_BRAINWORKS_GETCUSTOMERSBYPHONE: 2601;
  REQUEST_METHOD_BRAINWORKS_GETSUSPENDS: 2602;
  REQUEST_METHOD_BRAINWORKS_GETCUSTOMERBYCUSTIDV2: 2603;
  REQUEST_METHOD_BRAINWORKS_GETCOMPLAINTS: 2604;
  REQUEST_METHOD_BRAINWORKS_GETCODESORTYPES: 2605;
  REQUEST_METHOD_BRAINWORKS_STOPSUSPENDS: 2606;
  REQUEST_METHOD_BRAINWORKS_STARTSUSPENDS: 2607;
  REQUEST_METHOD_BRAINWORKS_SENDCOMPLAINT: 2608;
  REQUEST_METHOD_BRAINWORKS_GETCUSTOMERBYCUSTID: 2609;
  REQUEST_METHOD_OSGCONNECT_CCPAYMENTS: 2701;
  REQUEST_METHOD_OSGCONNECT_ACHPAYMENTS: 2702;
  REQUEST_METHOD_OSGCONNECT_VALIDATEACCOUNTNO: 2703;
  REQUEST_METHOD_NTVB_CREDIT_MISSED_DELIVERY: 2801;
  REQUEST_METHOD_NTVB_CUSTOMER_SEARCH: 2802;
  REQUEST_METHOD_NTVB_END_CALL: 2803;
  REQUEST_METHOD_NTVB_INTEGRATION_DEFINITION: 2804;
  REQUEST_METHOD_NTVB_MISSED_DELIVERY: 2805;
  REQUEST_METHOD_NTVB_REMOVE_AUTORENEWAL: 2806;
  REQUEST_METHOD_NTVB_RENEW_SUBSCRIPTION: 2807;
  REQUEST_METHOD_NTVB_RENEWAL_OFFERS: 2808;
  REQUEST_METHOD_NTVB_SET_AUTORENEWAL: 2809;
  REQUEST_METHOD_NTVB_START_INCOMING_CALL: 2810;
  REQUEST_METHOD_NTVB_START_OUTGOING_CALL: 2811;
  REQUEST_METHOD_NTVB_SUBSCRIPTION_INFO: 2812;
  REQUEST_METHOD_NTVB_VACATION_STOP: 2813;
  REQUEST_METHOD_NTVB_AUTHTEST: 2814;
  REQUEST_METHOD_ELAVON_CREDIT_CARD_SALE: 2901;
  REQUEST_METHOD_ELAVON_ADD_RECURRING: 2902;
  REQUEST_METHOD_ELAVON_DCC_RESPONSE: 2903;
  REQUEST_METHOD_ELAVON_DELETE_RECURRING: 2904;
  REQUEST_METHOD_ELAVON_UPDATE_RECURRING: 2905;
  REQUEST_METHOD_ELAVON_HEALTH_CARE_CC_SALE: 2906;
  REQUEST_METHOD_ELAVON_ADD_INSTALLMENT: 2907;
  REQUEST_METHOD_ELAVON_UPDATE_INSTALLMENT: 2908;
  REQUEST_METHOD_ELAVON_DELETE_INSTALLMENT: 2909;
  REQUEST_METHOD_ELAVON_MCC_CREDIT_CARD_SALE: 2910;
  REQUEST_METHOD_GLOBALPAYMENTS_CARDSALE: 3001;
  REQUEST_METHOD_GLOBALPAYMENTS_GET_TRANSACTION_BY_ID: 3002;
  REQUEST_METHOD_GLOBALPAYMENTS_LIST_TRANSACTIONS: 3003;
  REQUEST_METHOD_GLOBALPAYMENTS_REFUND_SALE: 3004;
  REQUEST_METHOD_GLOBALPAYMENTS_REVERSE_SALE_OR_REFUND: 3005;
  REQUEST_METHOD_PAY_SCOUT_CREDIT_CARD_SALE: 3101;
  REQUEST_METHOD_PAY_SCOUT_ECHECK_SALE: 3102;
  REQUEST_METHOD_I2C_ECHO: 3201;
  REQUEST_METHOD_I2C_BALANCE_INQUIRY: 3202;
  REQUEST_METHOD_I2C_VERIFY_USER: 3203;
  REQUEST_METHOD_I2C_SEARCH_CUSTOMER: 3204;
  REQUEST_METHOD_I2C_MAKE_PAYMENT: 3205;
  REQUEST_METHOD_I2C_GET_CARDHOLDER_PROFILE: 3206;
  REQUEST_METHOD_I2C_GET_CARDHOLDER_STATEMENT: 3207;
  REQUEST_METHOD_I2C_GET_CARDHOLDER_BALANCE: 3208;
  REQUEST_METHOD_I2C_GET_CREDITPAYMENT_INFO: 3209;
  REQUEST_METHOD_I2C_TRANSACTION_HISTORY: 3210;
  REQUEST_METHOD_OPAYO_CCPAYMENTS: 3301;
  REQUEST_METHOD_SHIFT4_CCPAYMENTS: 3401;
  REQUEST_METHOD_POSCORP_ACCESSTOKEN: 3501;
  REQUEST_METHOD_POSCORP_LOOKUP_GUARANTOR: 3502;
  REQUEST_METHOD_POSCORP_UPDATE_PAYMENT_STATUS: 3503;
  REQUEST_METHOD_PIANO_GET_USER: 3601;
  REQUEST_METHOD_PIANO_UPDATE_USER: 3602;
  REQUEST_METHOD_EPIC_GET_TOKEN: 3701;
  REQUEST_METHOD_EPIC_GET_PATIENT: 3702;
  REQUEST_METHOD_EPIC_MATCH_PATIENT: 3703;
  REQUEST_METHOD_EPIC_SEARCH_APPOINTMENT: 3704;
  REQUEST_METHOD_EPIC_FIND_APPOINTMENT: 3705;
  REQUEST_METHOD_EPIC_BOOK_APPOINTMENT: 3706;
  REQUEST_METHOD_EPIC_GET_ACCOUNT: 3707;
  REQUEST_METHOD_NEWZWARE_PHONE_LOOKUP: 3801;
  REQUEST_METHOD_NEWZWARE_ACCOUNT_INQUIRY: 3802;
  REQUEST_METHOD_NEWZWARE_CC_PAYMENT: 3803;
  REQUEST_METHOD_NEWZWARE_ACH_PAYMENT: 3804;
}

export const RequestMethod: RequestMethodMap;

export interface TransactionTypeMap {
  TRANSACTION_TYPE_PAYMENT: 0;
  TRANSACTION_TYPE_DATA_INQUIRY: 1;
  TRANSACTION_TYPE_ACCOUNT_VERIFY: 2;
}

export const TransactionType: TransactionTypeMap;

export interface RequestSourceMap {
  REQUEST_SOURCE_IVR: 0;
  REQUEST_SOURCE_EMAIL: 1;
  REQUEST_SOURCE_WEB: 2;
  REQUEST_SOURCE_SMS: 3;
  REQUEST_SOURCE_CHAT: 4;
  REQUEST_SOURCE_LMS: 5;
}

export const RequestSource: RequestSourceMap;

export interface TransactionResultMap {
  TRANSACTION_RESULT_SUCCESS: 0;
  TRANSACTION_RESULT_FAILED: 1;
}

export const TransactionResult: TransactionResultMap;

export interface ValueTypeMap {
  VALUE_TYPE_UNKNOWN: 0;
  VALUE_TYPE_NUMBER: 1;
  VALUE_TYPE_BOOL: 2;
  VALUE_TYPE_MAP: 3;
  VALUE_TYPE_ARRAY: 4;
  VALUE_TYPE_INT: 5;
  VALUE_TYPE_STRING: 6;
  VALUE_TYPE_TIME: 7;
  VALUE_TYPE_COMPOSITE_VAL: 8;
}

export const ValueType: ValueTypeMap;

export interface VisibilityMap {
  VISIBILITY_INVISIBLE: 0;
  VISIBILITY_UNRESTRICTED: 1;
  VISIBILITY_RUNTIME: 100;
  VISIBILITY_BY_METHOD: 150;
  VISIBILITY_PLUGIN: 200;
}

export const Visibility: VisibilityMap;

export interface CompareOperationMap {
  COMPARE_OPERATION_EQ: 0;
  COMPARE_OPERATION_GT: 1;
  COMPARE_OPERATION_LT: 2;
  COMPARE_OPERATION_GE: 3;
  COMPARE_OPERATION_LE: 4;
  COMPARE_OPERATION_NE: 5;
}

export const CompareOperation: CompareOperationMap;

export interface FlowFieldLocMap {
  FFL_ANY: 0;
  FFL_LINK: 1;
  FFL_PLUGIN_INST: 2;
  FFL_SUBMIT: 3;
}

export const FlowFieldLoc: FlowFieldLocMap;

export interface ValidationMap {
  VALIDATION_NONE: 0;
  VALIDATION_CREDITCARD: 101;
  VALIDATION_CVC: 102;
  VALIDATION_MONTH_2_DIGIT: 103;
  VALIDATION_YEAR_4_DIGIT: 104;
  VALIDATION_LAST_4_SSN: 105;
  VALIDATION_US_ZIP: 106;
  VALIDATION_INTEGER: 201;
  VALIDATION_FLOAT: 202;
  VALIDATION_CURRENCY_USD: 203;
  VALIDATION_DATE: 301;
  VALIDATION_DOB: 302;
  VALIDATION_BOOL: 401;
  VALIDATION_REGEX: 402;
}

export const Validation: ValidationMap;

export interface InvoiceDisplayTypeMap {
  UNSPECIFIED: 0;
  AMOUNT_DUE: 1;
  SERVICE_DATE: 2;
  INVOICE_NUMBER: 3;
  ITEM_QUANTITY: 4;
  ITEM_NAME: 5;
  ITEM_DESCRIPTION: 6;
  ITEM_AMOUNT: 7;
  PAYOR_ACCOUNT_NUMBER: 101;
  PAYOR_FIRST_NAME: 102;
  PAYOR_LAST_NAME: 103;
  PAYOR_DATE_OF_BIRTH: 104;
  PAYOR_SSN_R4: 105;
  PAYOR_CELL_PHONE: 106;
  PAYOR_HOME_PHONE: 107;
  PAYOR_WORK_PHONE: 108;
  PAYOR_ZIP_CODE: 109;
  PATIENT_ACCOUNT_NUMBER: 201;
  PATIENT_FIRST_NAME: 202;
  PATIENT_LAST_NAME: 203;
  PATIENT_DATE_OF_BIRTH: 204;
  PATIENT_SSN_R4: 205;
  PATIENT_CELL_PHONE: 206;
  PATIENT_HOME_PHONE: 207;
  PATIENT_WORK_PHONE: 208;
  PATIENT_ZIP_CODE: 209;
}

export const InvoiceDisplayType: InvoiceDisplayTypeMap;

export interface FieldSourceMap {
  FIELD_SOURCE_NONE: 0;
  FIELD_SOURCE_LINK: 1;
  FIELD_SOURCE_VERIFICATION_DATA: 2;
  FIELD_SOURCE_VERIFICATION_API: 3;
  FIELD_SOURCE_INVOICE_DATA: 4;
  FIELD_SOURCE_INVOICE_API: 5;
  FIELD_SOURCE_PAYMENT_DATA: 6;
  FIELD_SOURCE_PAYMENT_API: 7;
  FIELD_SOURCE_PAYMENT_FORM: 8;
}

export const FieldSource: FieldSourceMap;

export interface FlowTypeMap {
  FLOW_TYPE_UNKNOWN: 0;
  FLOW_TYPE_INVOICE: 1;
  FLOW_TYPE_PAYMENT: 2;
  FLOW_TYPE_VERIFICATION: 3;
  FLOW_TYPE_EXECUTE: 4;
}

export const FlowType: FlowTypeMap;

