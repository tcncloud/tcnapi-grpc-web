// package: api.commons.integrations
// file: api/commons/integrations/integrations.proto

import * as jspb from "google-protobuf";

export class Receipt extends jspb.Message {
  clearFieldsList(): void;
  getFieldsList(): Array<ReceiptField>;
  setFieldsList(value: Array<ReceiptField>): void;
  addFields(value?: ReceiptField, index?: number): ReceiptField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Receipt.AsObject;
  static toObject(includeInstance: boolean, msg: Receipt): Receipt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Receipt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Receipt;
  static deserializeBinaryFromReader(message: Receipt, reader: jspb.BinaryReader): Receipt;
}

export namespace Receipt {
  export type AsObject = {
    fieldsList: Array<ReceiptField.AsObject>,
  }
}

export class ReceiptField extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getValidationType(): ValidationMap[keyof ValidationMap];
  setValidationType(value: ValidationMap[keyof ValidationMap]): void;

  getFormat(): string;
  setFormat(value: string): void;

  getCopiable(): boolean;
  setCopiable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiptField.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiptField): ReceiptField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReceiptField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiptField;
  static deserializeBinaryFromReader(message: ReceiptField, reader: jspb.BinaryReader): ReceiptField;
}

export namespace ReceiptField {
  export type AsObject = {
    name: string,
    displayName: string,
    value: string,
    validationType: ValidationMap[keyof ValidationMap],
    format: string,
    copiable: boolean,
  }
}

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

  getValidationType(): ValidationMap[keyof ValidationMap];
  setValidationType(value: ValidationMap[keyof ValidationMap]): void;

  getFormat(): string;
  setFormat(value: string): void;

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
    validationType: ValidationMap[keyof ValidationMap],
    format: string,
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

  hasPriocommerceCc(): boolean;
  clearPriocommerceCc(): void;
  getPriocommerceCc(): PaymentPriocommerceCc | undefined;
  setPriocommerceCc(value?: PaymentPriocommerceCc): void;

  hasPriocommerceAch(): boolean;
  clearPriocommerceAch(): void;
  getPriocommerceAch(): PaymentPriocommerceAch | undefined;
  setPriocommerceAch(value?: PaymentPriocommerceAch): void;

  hasPaymentvisionCc(): boolean;
  clearPaymentvisionCc(): void;
  getPaymentvisionCc(): PaymentVisionCC | undefined;
  setPaymentvisionCc(value?: PaymentVisionCC): void;

  hasPaymentvisionAch(): boolean;
  clearPaymentvisionAch(): void;
  getPaymentvisionAch(): PaymentVisionACH | undefined;
  setPaymentvisionAch(value?: PaymentVisionACH): void;

  hasPaymentstellaCc(): boolean;
  clearPaymentstellaCc(): void;
  getPaymentstellaCc(): PaymentStellaCc | undefined;
  setPaymentstellaCc(value?: PaymentStellaCc): void;

  hasPaymentstellaEcheck(): boolean;
  clearPaymentstellaEcheck(): void;
  getPaymentstellaEcheck(): PaymentStellaECheck | undefined;
  setPaymentstellaEcheck(value?: PaymentStellaECheck): void;

  hasSwervepayCc(): boolean;
  clearSwervepayCc(): void;
  getSwervepayCc(): PaymentSwervePayCC | undefined;
  setSwervepayCc(value?: PaymentSwervePayCC): void;

  hasSwervepayAch(): boolean;
  clearSwervepayAch(): void;
  getSwervepayAch(): PaymentSwervePayACH | undefined;
  setSwervepayAch(value?: PaymentSwervePayACH): void;

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
    priocommerceCc?: PaymentPriocommerceCc.AsObject,
    priocommerceAch?: PaymentPriocommerceAch.AsObject,
    paymentvisionCc?: PaymentVisionCC.AsObject,
    paymentvisionAch?: PaymentVisionACH.AsObject,
    paymentstellaCc?: PaymentStellaCc.AsObject,
    paymentstellaEcheck?: PaymentStellaECheck.AsObject,
    swervepayCc?: PaymentSwervePayCC.AsObject,
    swervepayAch?: PaymentSwervePayACH.AsObject,
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
    PRIOCOMMERCE_CC = 13,
    PRIOCOMMERCE_ACH = 14,
    PAYMENTVISION_CC = 15,
    PAYMENTVISION_ACH = 16,
    PAYMENTSTELLA_CC = 17,
    PAYMENTSTELLA_ECHECK = 18,
    SWERVEPAY_CC = 19,
    SWERVEPAY_ACH = 21,
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

  getRequired(): boolean;
  setRequired(value: boolean): void;

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
    required: boolean,
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

  hasCircproLawGetPaymentTypes(): boolean;
  clearCircproLawGetPaymentTypes(): void;
  getCircproLawGetPaymentTypes(): ExecuteCircproLawGetPaymentTypes | undefined;
  setCircproLawGetPaymentTypes(value?: ExecuteCircproLawGetPaymentTypes): void;

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

  hasExperianStellaCardEntryTokenization(): boolean;
  clearExperianStellaCardEntryTokenization(): void;
  getExperianStellaCardEntryTokenization(): ExecuteExperianStellaCardEntryTokenization | undefined;
  setExperianStellaCardEntryTokenization(value?: ExecuteExperianStellaCardEntryTokenization): void;

  hasExperianStellaPaymentPlansByPatient(): boolean;
  clearExperianStellaPaymentPlansByPatient(): void;
  getExperianStellaPaymentPlansByPatient(): ExecuteExperianStellaPaymentPlansByPatient | undefined;
  setExperianStellaPaymentPlansByPatient(value?: ExecuteExperianStellaPaymentPlansByPatient): void;

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

  hasJourneyList(): boolean;
  clearJourneyList(): void;
  getJourneyList(): ExecuteJourneyList | undefined;
  setJourneyList(value?: ExecuteJourneyList): void;

  hasJourneyUpdate(): boolean;
  clearJourneyUpdate(): void;
  getJourneyUpdate(): ExecuteJourneyUpdate | undefined;
  setJourneyUpdate(value?: ExecuteJourneyUpdate): void;

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

  hasNtvbCompletePendingOrder(): boolean;
  clearNtvbCompletePendingOrder(): void;
  getNtvbCompletePendingOrder(): ExecuteNtvbCompletePendingOrder | undefined;
  setNtvbCompletePendingOrder(value?: ExecuteNtvbCompletePendingOrder): void;

  hasNtvbPlaceOrder(): boolean;
  clearNtvbPlaceOrder(): void;
  getNtvbPlaceOrder(): ExecuteNtvbPlaceOrder | undefined;
  setNtvbPlaceOrder(value?: ExecuteNtvbPlaceOrder): void;

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

  hasShift4AccessToken(): boolean;
  clearShift4AccessToken(): void;
  getShift4AccessToken(): ExecuteShift4CcPayments | undefined;
  setShift4AccessToken(value?: ExecuteShift4CcPayments): void;

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

  hasPianoUpdateSubscription(): boolean;
  clearPianoUpdateSubscription(): void;
  getPianoUpdateSubscription(): ExecutePianoUpdateSubscription | undefined;
  setPianoUpdateSubscription(value?: ExecutePianoUpdateSubscription): void;

  hasPianoGetPayment(): boolean;
  clearPianoGetPayment(): void;
  getPianoGetPayment(): ExecutePianoGetPayment | undefined;
  setPianoGetPayment(value?: ExecutePianoGetPayment): void;

  hasPianoListSubscription(): boolean;
  clearPianoListSubscription(): void;
  getPianoListSubscription(): ExecutePianoListSubscription | undefined;
  setPianoListSubscription(value?: ExecutePianoListSubscription): void;

  hasPianoLastaccessConversion(): boolean;
  clearPianoLastaccessConversion(): void;
  getPianoLastaccessConversion(): ExecutePianoLastAccessConversion | undefined;
  setPianoLastaccessConversion(value?: ExecutePianoLastAccessConversion): void;

  hasPianoAddPayment(): boolean;
  clearPianoAddPayment(): void;
  getPianoAddPayment(): ExacutePianoAddPayment | undefined;
  setPianoAddPayment(value?: ExacutePianoAddPayment): void;

  hasPianoUpdatePayment(): boolean;
  clearPianoUpdatePayment(): void;
  getPianoUpdatePayment(): ExacutePianoUpdatePayment | undefined;
  setPianoUpdatePayment(value?: ExacutePianoUpdatePayment): void;

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

  hasEpicReceiveCommunication2(): boolean;
  clearEpicReceiveCommunication2(): void;
  getEpicReceiveCommunication2(): ExecuteEpicReceiveCommunication2 | undefined;
  setEpicReceiveCommunication2(value?: ExecuteEpicReceiveCommunication2): void;

  hasEpicReceiveCommunication3(): boolean;
  clearEpicReceiveCommunication3(): void;
  getEpicReceiveCommunication3(): ExecuteEpicReceiveCommunication3 | undefined;
  setEpicReceiveCommunication3(value?: ExecuteEpicReceiveCommunication3): void;

  hasEpicPostPatientMadePayment(): boolean;
  clearEpicPostPatientMadePayment(): void;
  getEpicPostPatientMadePayment(): ExecuteEpicPostPatientMadePayment | undefined;
  setEpicPostPatientMadePayment(value?: ExecuteEpicPostPatientMadePayment): void;

  hasEpicGetPatientBillingDetails(): boolean;
  clearEpicGetPatientBillingDetails(): void;
  getEpicGetPatientBillingDetails(): ExecuteEpicGetPatientBillingDetails | undefined;
  setEpicGetPatientBillingDetails(value?: ExecuteEpicGetPatientBillingDetails): void;

  hasEpicCallPatient(): boolean;
  clearEpicCallPatient(): void;
  getEpicCallPatient(): ExecuteEpicCallPatient | undefined;
  setEpicCallPatient(value?: ExecuteEpicCallPatient): void;

  hasEpicHangupCall(): boolean;
  clearEpicHangupCall(): void;
  getEpicHangupCall(): ExecuteEpicHangupCall | undefined;
  setEpicHangupCall(value?: ExecuteEpicHangupCall): void;

  hasEpicGetAccountAccessIdentifiers(): boolean;
  clearEpicGetAccountAccessIdentifiers(): void;
  getEpicGetAccountAccessIdentifiers(): ExecuteEpicGetAccountAccessIdentifiers | undefined;
  setEpicGetAccountAccessIdentifiers(value?: ExecuteEpicGetAccountAccessIdentifiers): void;

  hasEpicGetAccountBillingSummary(): boolean;
  clearEpicGetAccountBillingSummary(): void;
  getEpicGetAccountBillingSummary(): ExecuteEpicGetAccountBillingSummary | undefined;
  setEpicGetAccountBillingSummary(value?: ExecuteEpicGetAccountBillingSummary): void;

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

  hasNewzwareComplaintHistory(): boolean;
  clearNewzwareComplaintHistory(): void;
  getNewzwareComplaintHistory(): ExecuteNewzwareComplaintHistory | undefined;
  setNewzwareComplaintHistory(value?: ExecuteNewzwareComplaintHistory): void;

  hasNewzwareComplaintUpdate(): boolean;
  clearNewzwareComplaintUpdate(): void;
  getNewzwareComplaintUpdate(): ExecuteNewzwareComplaintUpdate | undefined;
  setNewzwareComplaintUpdate(value?: ExecuteNewzwareComplaintUpdate): void;

  hasNewzwareVacationRestart(): boolean;
  clearNewzwareVacationRestart(): void;
  getNewzwareVacationRestart(): ExecuteNewzwareVacationRestart | undefined;
  setNewzwareVacationRestart(value?: ExecuteNewzwareVacationRestart): void;

  hasNewzwareVacationUpdate(): boolean;
  clearNewzwareVacationUpdate(): void;
  getNewzwareVacationUpdate(): ExecuteNewzwareVacationUpdate | undefined;
  setNewzwareVacationUpdate(value?: ExecuteNewzwareVacationUpdate): void;

  hasNewzwarePhoneLookupMulti(): boolean;
  clearNewzwarePhoneLookupMulti(): void;
  getNewzwarePhoneLookupMulti(): ExecuteNewzwarePhoneLookupMulti | undefined;
  setNewzwarePhoneLookupMulti(value?: ExecuteNewzwarePhoneLookupMulti): void;

  hasNewzwareSubscriptionRestart(): boolean;
  clearNewzwareSubscriptionRestart(): void;
  getNewzwareSubscriptionRestart(): ExecuteNewzwareSubscriptionRestart | undefined;
  setNewzwareSubscriptionRestart(value?: ExecuteNewzwareSubscriptionRestart): void;

  hasPriocommerceAchPayment(): boolean;
  clearPriocommerceAchPayment(): void;
  getPriocommerceAchPayment(): ExecutePriocommerceAchPayment | undefined;
  setPriocommerceAchPayment(value?: ExecutePriocommerceAchPayment): void;

  hasPriocommerceCcPayment(): boolean;
  clearPriocommerceCcPayment(): void;
  getPriocommerceCcPayment(): ExecutePriocommerceCcPayment | undefined;
  setPriocommerceCcPayment(value?: ExecutePriocommerceCcPayment): void;

  hasNavigaCreatePayment(): boolean;
  clearNavigaCreatePayment(): void;
  getNavigaCreatePayment(): ExecuteNavigaCreatePayment | undefined;
  setNavigaCreatePayment(value?: ExecuteNavigaCreatePayment): void;

  hasNavigaChangeBilling(): boolean;
  clearNavigaChangeBilling(): void;
  getNavigaChangeBilling(): ExecuteNavigaChangeBilling | undefined;
  setNavigaChangeBilling(value?: ExecuteNavigaChangeBilling): void;

  hasPaynsecondsTokenizeCard(): boolean;
  clearPaynsecondsTokenizeCard(): void;
  getPaynsecondsTokenizeCard(): ExecutePaynsecondsTokenizeCard | undefined;
  setPaynsecondsTokenizeCard(value?: ExecutePaynsecondsTokenizeCard): void;

  hasSutherlandrevPaymentConnect(): boolean;
  clearSutherlandrevPaymentConnect(): void;
  getSutherlandrevPaymentConnect(): ExecuteSutherlandrevPaymentConnect | undefined;
  setSutherlandrevPaymentConnect(value?: ExecuteSutherlandrevPaymentConnect): void;

  hasFinviExileQueryRecords(): boolean;
  clearFinviExileQueryRecords(): void;
  getFinviExileQueryRecords(): ExecuteFinviExileQueryRecords | undefined;
  setFinviExileQueryRecords(value?: ExecuteFinviExileQueryRecords): void;

  hasFinviExileReadFields(): boolean;
  clearFinviExileReadFields(): void;
  getFinviExileReadFields(): ExecuteFinviExileReadFields | undefined;
  setFinviExileReadFields(value?: ExecuteFinviExileReadFields): void;

  hasFinviExileWriteFields(): boolean;
  clearFinviExileWriteFields(): void;
  getFinviExileWriteFields(): ExecuteFinviExileWriteFields | undefined;
  setFinviExileWriteFields(value?: ExecuteFinviExileWriteFields): void;

  hasFinviExileExecuteLogic(): boolean;
  clearFinviExileExecuteLogic(): void;
  getFinviExileExecuteLogic(): ExecuteFinviExileExecuteLogic | undefined;
  setFinviExileExecuteLogic(value?: ExecuteFinviExileExecuteLogic): void;

  hasFinviExileCreatePayment(): boolean;
  clearFinviExileCreatePayment(): void;
  getFinviExileCreatePayment(): ExecuteFinviExileCreatePayment | undefined;
  setFinviExileCreatePayment(value?: ExecuteFinviExileCreatePayment): void;

  hasFinviExilePopAccount(): boolean;
  clearFinviExilePopAccount(): void;
  getFinviExilePopAccount(): ExecuteFinviExilePopAccount | undefined;
  setFinviExilePopAccount(value?: ExecuteFinviExilePopAccount): void;

  hasNavigaDtiCircCreatePayment(): boolean;
  clearNavigaDtiCircCreatePayment(): void;
  getNavigaDtiCircCreatePayment(): ExecuteNavigaDTICircCreatePayment | undefined;
  setNavigaDtiCircCreatePayment(value?: ExecuteNavigaDTICircCreatePayment): void;

  hasNavigaDtiCircChangeBilling(): boolean;
  clearNavigaDtiCircChangeBilling(): void;
  getNavigaDtiCircChangeBilling(): ExecuteNavigaDTICircChangeBilling | undefined;
  setNavigaDtiCircChangeBilling(value?: ExecuteNavigaDTICircChangeBilling): void;

  hasNavigaDtiCsAutoRenewInfo(): boolean;
  clearNavigaDtiCsAutoRenewInfo(): void;
  getNavigaDtiCsAutoRenewInfo(): ExecuteNavigaDTICSAutoRenewInfo | undefined;
  setNavigaDtiCsAutoRenewInfo(value?: ExecuteNavigaDTICSAutoRenewInfo): void;

  hasNavigaDtiCsAutoTran(): boolean;
  clearNavigaDtiCsAutoTran(): void;
  getNavigaDtiCsAutoTran(): ExecuteNavigaDTICSAutoTran | undefined;
  setNavigaDtiCsAutoTran(value?: ExecuteNavigaDTICSAutoTran): void;

  hasNavigaDtiCsBillingInfo(): boolean;
  clearNavigaDtiCsBillingInfo(): void;
  getNavigaDtiCsBillingInfo(): ExecuteNavigaDTICSBillingInfo | undefined;
  setNavigaDtiCsBillingInfo(value?: ExecuteNavigaDTICSBillingInfo): void;

  hasNavigaDtiCsLogin(): boolean;
  clearNavigaDtiCsLogin(): void;
  getNavigaDtiCsLogin(): ExecuteNavigaDTICSLogin | undefined;
  setNavigaDtiCsLogin(value?: ExecuteNavigaDTICSLogin): void;

  hasNavigaDtiCsPayInfo(): boolean;
  clearNavigaDtiCsPayInfo(): void;
  getNavigaDtiCsPayInfo(): ExecuteNavigaDTICSPayInfo | undefined;
  setNavigaDtiCsPayInfo(value?: ExecuteNavigaDTICSPayInfo): void;

  hasNavigaDtiCsPayTran(): boolean;
  clearNavigaDtiCsPayTran(): void;
  getNavigaDtiCsPayTran(): ExecuteNavigaDTICSPayTran | undefined;
  setNavigaDtiCsPayTran(value?: ExecuteNavigaDTICSPayTran): void;

  hasNavigaDtiCsRenewInfo(): boolean;
  clearNavigaDtiCsRenewInfo(): void;
  getNavigaDtiCsRenewInfo(): ExecuteNavigaDTICSRenewInfo | undefined;
  setNavigaDtiCsRenewInfo(value?: ExecuteNavigaDTICSRenewInfo): void;

  hasNavigaDtiCsSearchPage(): boolean;
  clearNavigaDtiCsSearchPage(): void;
  getNavigaDtiCsSearchPage(): ExecuteNavigaDTICSSearchPage | undefined;
  setNavigaDtiCsSearchPage(value?: ExecuteNavigaDTICSSearchPage): void;

  hasNavigaDtiCsServiceErrorInfo(): boolean;
  clearNavigaDtiCsServiceErrorInfo(): void;
  getNavigaDtiCsServiceErrorInfo(): ExecuteNavigaDTICSServiceErrorInfo | undefined;
  setNavigaDtiCsServiceErrorInfo(value?: ExecuteNavigaDTICSServiceErrorInfo): void;

  hasNavigaDtiCsServiceErrorTrans(): boolean;
  clearNavigaDtiCsServiceErrorTrans(): void;
  getNavigaDtiCsServiceErrorTrans(): ExecuteNavigaDTICSServiceErrorTrans | undefined;
  setNavigaDtiCsServiceErrorTrans(value?: ExecuteNavigaDTICSServiceErrorTrans): void;

  hasNavigaDtiCsStopInfo(): boolean;
  clearNavigaDtiCsStopInfo(): void;
  getNavigaDtiCsStopInfo(): ExecuteNavigaDTICSStopInfo | undefined;
  setNavigaDtiCsStopInfo(value?: ExecuteNavigaDTICSStopInfo): void;

  hasNavigaDtiCsStopTrans(): boolean;
  clearNavigaDtiCsStopTrans(): void;
  getNavigaDtiCsStopTrans(): ExecuteNavigaDTICSStopTrans | undefined;
  setNavigaDtiCsStopTrans(value?: ExecuteNavigaDTICSStopTrans): void;

  hasSwervepayCreateCustomer(): boolean;
  clearSwervepayCreateCustomer(): void;
  getSwervepayCreateCustomer(): ExecuteSwervepayCreateCustomer | undefined;
  setSwervepayCreateCustomer(value?: ExecuteSwervepayCreateCustomer): void;

  hasSwervepayQueryCustomerDetails(): boolean;
  clearSwervepayQueryCustomerDetails(): void;
  getSwervepayQueryCustomerDetails(): ExecuteSwervepayQueryCustomerDetails | undefined;
  setSwervepayQueryCustomerDetails(value?: ExecuteSwervepayQueryCustomerDetails): void;

  hasSwervepayQueryCustomerTokenDetails(): boolean;
  clearSwervepayQueryCustomerTokenDetails(): void;
  getSwervepayQueryCustomerTokenDetails(): ExecuteSwervepayQueryCustomerTokenDetails | undefined;
  setSwervepayQueryCustomerTokenDetails(value?: ExecuteSwervepayQueryCustomerTokenDetails): void;

  hasSwervepayQueryCustomerTokens(): boolean;
  clearSwervepayQueryCustomerTokens(): void;
  getSwervepayQueryCustomerTokens(): ExecuteSwervepayQueryQueryCustomerTokens | undefined;
  setSwervepayQueryCustomerTokens(value?: ExecuteSwervepayQueryQueryCustomerTokens): void;

  hasSwervepayQueryCustomerTransactions(): boolean;
  clearSwervepayQueryCustomerTransactions(): void;
  getSwervepayQueryCustomerTransactions(): ExecuteSwervepayQueryCustomerTransactions | undefined;
  setSwervepayQueryCustomerTransactions(value?: ExecuteSwervepayQueryCustomerTransactions): void;

  hasSwervepayQueryCustomers(): boolean;
  clearSwervepayQueryCustomers(): void;
  getSwervepayQueryCustomers(): ExecuteSwervepayQueryCustomers | undefined;
  setSwervepayQueryCustomers(value?: ExecuteSwervepayQueryCustomers): void;

  hasSwervepayQueryTransactionDetails(): boolean;
  clearSwervepayQueryTransactionDetails(): void;
  getSwervepayQueryTransactionDetails(): ExecuteSwervepayQueryQueryTransactionDetails | undefined;
  setSwervepayQueryTransactionDetails(value?: ExecuteSwervepayQueryQueryTransactionDetails): void;

  hasSwervepayQueryTransactions(): boolean;
  clearSwervepayQueryTransactions(): void;
  getSwervepayQueryTransactions(): ExecuteSwervepayQueryTransactions | undefined;
  setSwervepayQueryTransactions(value?: ExecuteSwervepayQueryTransactions): void;

  hasSwervepayRemoveCustomerToken(): boolean;
  clearSwervepayRemoveCustomerToken(): void;
  getSwervepayRemoveCustomerToken(): ExecuteSwervepayRemoveCustomerToken | undefined;
  setSwervepayRemoveCustomerToken(value?: ExecuteSwervepayRemoveCustomerToken): void;

  hasSwervepayUpdateCustomer(): boolean;
  clearSwervepayUpdateCustomer(): void;
  getSwervepayUpdateCustomer(): ExecuteSwervepayUpdateCustomer | undefined;
  setSwervepayUpdateCustomer(value?: ExecuteSwervepayUpdateCustomer): void;

  hasSwervepayCreateTransactionAuth(): boolean;
  clearSwervepayCreateTransactionAuth(): void;
  getSwervepayCreateTransactionAuth(): ExecuteSwervepayCreateTransactionAuth | undefined;
  setSwervepayCreateTransactionAuth(value?: ExecuteSwervepayCreateTransactionAuth): void;

  hasSwervepayCreateTransactionCapture(): boolean;
  clearSwervepayCreateTransactionCapture(): void;
  getSwervepayCreateTransactionCapture(): ExecuteSwervepayCreateTransactionCapture | undefined;
  setSwervepayCreateTransactionCapture(value?: ExecuteSwervepayCreateTransactionCapture): void;

  hasSwervepayCreateTransactionCredit(): boolean;
  clearSwervepayCreateTransactionCredit(): void;
  getSwervepayCreateTransactionCredit(): ExecuteSwervepayCreateTransactionCredit | undefined;
  setSwervepayCreateTransactionCredit(value?: ExecuteSwervepayCreateTransactionCredit): void;

  hasSwervepayCreateTransactionRefund(): boolean;
  clearSwervepayCreateTransactionRefund(): void;
  getSwervepayCreateTransactionRefund(): ExecuteSwervepayCreateTransactionRefund | undefined;
  setSwervepayCreateTransactionRefund(value?: ExecuteSwervepayCreateTransactionRefund): void;

  hasSwervepayCreateTransactionSale(): boolean;
  clearSwervepayCreateTransactionSale(): void;
  getSwervepayCreateTransactionSale(): ExecuteSwervepayCreateTransactionSale | undefined;
  setSwervepayCreateTransactionSale(value?: ExecuteSwervepayCreateTransactionSale): void;

  hasSwervepayCreateTransactionValidate(): boolean;
  clearSwervepayCreateTransactionValidate(): void;
  getSwervepayCreateTransactionValidate(): ExecuteSwervepayCreateTransactionValidate | undefined;
  setSwervepayCreateTransactionValidate(value?: ExecuteSwervepayCreateTransactionValidate): void;

  hasSwervepayProcessNewTransactionAuth(): boolean;
  clearSwervepayProcessNewTransactionAuth(): void;
  getSwervepayProcessNewTransactionAuth(): ExecuteSwervepayProcessNewTransactionAuth | undefined;
  setSwervepayProcessNewTransactionAuth(value?: ExecuteSwervepayProcessNewTransactionAuth): void;

  hasSwervepayProcessNewTransactionCapture(): boolean;
  clearSwervepayProcessNewTransactionCapture(): void;
  getSwervepayProcessNewTransactionCapture(): ExecuteSwervepayProcessNewTransactionCapture | undefined;
  setSwervepayProcessNewTransactionCapture(value?: ExecuteSwervepayProcessNewTransactionCapture): void;

  hasSwervepayProcessNewTransactionCredit(): boolean;
  clearSwervepayProcessNewTransactionCredit(): void;
  getSwervepayProcessNewTransactionCredit(): ExecuteSwervepayProcessNewTransactionCredit | undefined;
  setSwervepayProcessNewTransactionCredit(value?: ExecuteSwervepayProcessNewTransactionCredit): void;

  hasSwervepayProcessNewTransactionRefund(): boolean;
  clearSwervepayProcessNewTransactionRefund(): void;
  getSwervepayProcessNewTransactionRefund(): ExecuteSwervepayProcessNewTransactionRefund | undefined;
  setSwervepayProcessNewTransactionRefund(value?: ExecuteSwervepayProcessNewTransactionRefund): void;

  hasSwervepayProcessNewTransactionSale(): boolean;
  clearSwervepayProcessNewTransactionSale(): void;
  getSwervepayProcessNewTransactionSale(): ExecuteSwervepayProcessNewTransactionSale | undefined;
  setSwervepayProcessNewTransactionSale(value?: ExecuteSwervepayProcessNewTransactionSale): void;

  hasSwervepayProcessNewTransactionValidate(): boolean;
  clearSwervepayProcessNewTransactionValidate(): void;
  getSwervepayProcessNewTransactionValidate(): ExecuteSwervepayProcessNewTransactionValidate | undefined;
  setSwervepayProcessNewTransactionValidate(value?: ExecuteSwervepayProcessNewTransactionValidate): void;

  hasVeradigmGetLocations(): boolean;
  clearVeradigmGetLocations(): void;
  getVeradigmGetLocations(): ExecuteVeradigmGetLocations | undefined;
  setVeradigmGetLocations(value?: ExecuteVeradigmGetLocations): void;

  hasVeradigmGetPatientAccountBalance(): boolean;
  clearVeradigmGetPatientAccountBalance(): void;
  getVeradigmGetPatientAccountBalance(): ExecuteVeradigmGetPatientAccountBalance | undefined;
  setVeradigmGetPatientAccountBalance(value?: ExecuteVeradigmGetPatientAccountBalance): void;

  hasVeradigmGetPayments(): boolean;
  clearVeradigmGetPayments(): void;
  getVeradigmGetPayments(): ExecuteVeradigmGetPayments | undefined;
  setVeradigmGetPayments(value?: ExecuteVeradigmGetPayments): void;

  hasVeradigmGetPlacesOfService(): boolean;
  clearVeradigmGetPlacesOfService(): void;
  getVeradigmGetPlacesOfService(): ExecuteVeradigmGetPlacesOfService | undefined;
  setVeradigmGetPlacesOfService(value?: ExecuteVeradigmGetPlacesOfService): void;

  hasVeradigmSavePaymentTransaction(): boolean;
  clearVeradigmSavePaymentTransaction(): void;
  getVeradigmSavePaymentTransaction(): ExecuteVeradigmSavePaymentTransaction | undefined;
  setVeradigmSavePaymentTransaction(value?: ExecuteVeradigmSavePaymentTransaction): void;

  hasVeradigmSaveRefundTransaction(): boolean;
  clearVeradigmSaveRefundTransaction(): void;
  getVeradigmSaveRefundTransaction(): ExecuteVeradigmSaveRefundTransaction | undefined;
  setVeradigmSaveRefundTransaction(value?: ExecuteVeradigmSaveRefundTransaction): void;

  hasVeradigmSaveVoucherPayment(): boolean;
  clearVeradigmSaveVoucherPayment(): void;
  getVeradigmSaveVoucherPayment(): ExecuteVeradigmSaveVoucherPayment | undefined;
  setVeradigmSaveVoucherPayment(value?: ExecuteVeradigmSaveVoucherPayment): void;

  hasVeradigmPracticeManagementGetToken(): boolean;
  clearVeradigmPracticeManagementGetToken(): void;
  getVeradigmPracticeManagementGetToken(): ExecuteVeradigmPracticeManagementGetToken | undefined;
  setVeradigmPracticeManagementGetToken(value?: ExecuteVeradigmPracticeManagementGetToken): void;

  hasVeradigmPracticeManagementGetUserAuthentication(): boolean;
  clearVeradigmPracticeManagementGetUserAuthentication(): void;
  getVeradigmPracticeManagementGetUserAuthentication(): ExecuteVeradigmPracticeManagementGetUserAuthentication | undefined;
  setVeradigmPracticeManagementGetUserAuthentication(value?: ExecuteVeradigmPracticeManagementGetUserAuthentication): void;

  hasVeradigmPracticeManagementGetLocations(): boolean;
  clearVeradigmPracticeManagementGetLocations(): void;
  getVeradigmPracticeManagementGetLocations(): ExecuteVeradigmPracticeManagementGetLocations | undefined;
  setVeradigmPracticeManagementGetLocations(value?: ExecuteVeradigmPracticeManagementGetLocations): void;

  hasVeradigmPracticeManagementGetPatientAccountBalance(): boolean;
  clearVeradigmPracticeManagementGetPatientAccountBalance(): void;
  getVeradigmPracticeManagementGetPatientAccountBalance(): ExecuteVeradigmPracticeManagementGetPatientAccountBalance | undefined;
  setVeradigmPracticeManagementGetPatientAccountBalance(value?: ExecuteVeradigmPracticeManagementGetPatientAccountBalance): void;

  hasVeradigmPracticeManagementGetPayments(): boolean;
  clearVeradigmPracticeManagementGetPayments(): void;
  getVeradigmPracticeManagementGetPayments(): ExecuteVeradigmPracticeManagementGetPayments | undefined;
  setVeradigmPracticeManagementGetPayments(value?: ExecuteVeradigmPracticeManagementGetPayments): void;

  hasVeradigmPracticeManagementGetPlacesOfService(): boolean;
  clearVeradigmPracticeManagementGetPlacesOfService(): void;
  getVeradigmPracticeManagementGetPlacesOfService(): ExecuteVeradigmPracticeManagementGetPlacesOfService | undefined;
  setVeradigmPracticeManagementGetPlacesOfService(value?: ExecuteVeradigmPracticeManagementGetPlacesOfService): void;

  hasVeradigmPracticeManagementSavePaymentTransaction(): boolean;
  clearVeradigmPracticeManagementSavePaymentTransaction(): void;
  getVeradigmPracticeManagementSavePaymentTransaction(): ExecuteVeradigmPracticeManagementSavePaymentTransaction | undefined;
  setVeradigmPracticeManagementSavePaymentTransaction(value?: ExecuteVeradigmPracticeManagementSavePaymentTransaction): void;

  hasVeradigmPracticeManagementSaveRefundTransaction(): boolean;
  clearVeradigmPracticeManagementSaveRefundTransaction(): void;
  getVeradigmPracticeManagementSaveRefundTransaction(): ExecuteVeradigmPracticeManagementSaveRefundTransaction | undefined;
  setVeradigmPracticeManagementSaveRefundTransaction(value?: ExecuteVeradigmPracticeManagementSaveRefundTransaction): void;

  hasVeradigmPracticeManagementSaveVoucherPayment(): boolean;
  clearVeradigmPracticeManagementSaveVoucherPayment(): void;
  getVeradigmPracticeManagementSaveVoucherPayment(): ExecuteVeradigmPracticeManagementSaveVoucherPayment | undefined;
  setVeradigmPracticeManagementSaveVoucherPayment(value?: ExecuteVeradigmPracticeManagementSaveVoucherPayment): void;

  hasPdcflowTokenizeCreditCard(): boolean;
  clearPdcflowTokenizeCreditCard(): void;
  getPdcflowTokenizeCreditCard(): ExecutePDCFlowTokenizeCreditCard | undefined;
  setPdcflowTokenizeCreditCard(value?: ExecutePDCFlowTokenizeCreditCard): void;

  hasPdcflowCcTransaction(): boolean;
  clearPdcflowCcTransaction(): void;
  getPdcflowCcTransaction(): ExecutePDCFlowCCTransaction | undefined;
  setPdcflowCcTransaction(value?: ExecutePDCFlowCCTransaction): void;

  hasDebugEcho(): boolean;
  clearDebugEcho(): void;
  getDebugEcho(): ExecuteDebugEcho | undefined;
  setDebugEcho(value?: ExecuteDebugEcho): void;

  hasDebugValidate(): boolean;
  clearDebugValidate(): void;
  getDebugValidate(): ExecuteDebugValidate | undefined;
  setDebugValidate(value?: ExecuteDebugValidate): void;

  hasAcquiredProcessPayment(): boolean;
  clearAcquiredProcessPayment(): void;
  getAcquiredProcessPayment(): ExecuteAcquiredProcessPayment | undefined;
  setAcquiredProcessPayment(value?: ExecuteAcquiredProcessPayment): void;

  hasGenericRequest(): boolean;
  clearGenericRequest(): void;
  getGenericRequest(): ExecuteGenericRequest | undefined;
  setGenericRequest(value?: ExecuteGenericRequest): void;

  hasHealthpay24AccountsReceivable(): boolean;
  clearHealthpay24AccountsReceivable(): void;
  getHealthpay24AccountsReceivable(): ExecuteHealthpay24AccountsReceivable | undefined;
  setHealthpay24AccountsReceivable(value?: ExecuteHealthpay24AccountsReceivable): void;

  hasFinviFacsProcessPayment(): boolean;
  clearFinviFacsProcessPayment(): void;
  getFinviFacsProcessPayment(): ExecuteFinviFacsProcessPayment | undefined;
  setFinviFacsProcessPayment(value?: ExecuteFinviFacsProcessPayment): void;

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
    circproLawGetPaymentTypes?: ExecuteCircproLawGetPaymentTypes.AsObject,
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
    experianStellaCardEntryTokenization?: ExecuteExperianStellaCardEntryTokenization.AsObject,
    experianStellaPaymentPlansByPatient?: ExecuteExperianStellaPaymentPlansByPatient.AsObject,
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
    journeyList?: ExecuteJourneyList.AsObject,
    journeyUpdate?: ExecuteJourneyUpdate.AsObject,
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
    ntvbCompletePendingOrder?: ExecuteNtvbCompletePendingOrder.AsObject,
    ntvbPlaceOrder?: ExecuteNtvbPlaceOrder.AsObject,
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
    shift4AccessToken?: ExecuteShift4CcPayments.AsObject,
    poscorpAccesstoken?: ExecutePoscorpAccesstoken.AsObject,
    poscorpLookupGuarantor?: ExecutePoscorpLookupGuarantor.AsObject,
    poscorpUpdatePaymentStatus?: ExecutePoscorpUpdatePaymentStatus.AsObject,
    pianoGetUser?: ExecutePianoGetUser.AsObject,
    pianoUpdateUser?: ExecutePianoUpdateUser.AsObject,
    pianoUpdateSubscription?: ExecutePianoUpdateSubscription.AsObject,
    pianoGetPayment?: ExecutePianoGetPayment.AsObject,
    pianoListSubscription?: ExecutePianoListSubscription.AsObject,
    pianoLastaccessConversion?: ExecutePianoLastAccessConversion.AsObject,
    pianoAddPayment?: ExacutePianoAddPayment.AsObject,
    pianoUpdatePayment?: ExacutePianoUpdatePayment.AsObject,
    epicGetToken?: ExecuteEpicGetToken.AsObject,
    epicGetPatient?: ExecuteEpicGetPatient.AsObject,
    epicMatchPatient?: ExecuteEpicMatchPatient.AsObject,
    epicSearchAppointment?: ExecuteEpicSearchAppointment.AsObject,
    epicFindAppointment?: ExecuteEpicFindAppointment.AsObject,
    epicBookAppointment?: ExecuteEpicBookAppointment.AsObject,
    epicGetAccount?: ExecuteEpicGetAccount.AsObject,
    epicReceiveCommunication2?: ExecuteEpicReceiveCommunication2.AsObject,
    epicReceiveCommunication3?: ExecuteEpicReceiveCommunication3.AsObject,
    epicPostPatientMadePayment?: ExecuteEpicPostPatientMadePayment.AsObject,
    epicGetPatientBillingDetails?: ExecuteEpicGetPatientBillingDetails.AsObject,
    epicCallPatient?: ExecuteEpicCallPatient.AsObject,
    epicHangupCall?: ExecuteEpicHangupCall.AsObject,
    epicGetAccountAccessIdentifiers?: ExecuteEpicGetAccountAccessIdentifiers.AsObject,
    epicGetAccountBillingSummary?: ExecuteEpicGetAccountBillingSummary.AsObject,
    newzwarePhoneLookup?: ExecuteNewzwarePhoneLookup.AsObject,
    newzwareAccountInquiry?: ExecuteNewzwareAccountInquiry.AsObject,
    newzwareCcPayment?: ExecuteNewzwareCcPayment.AsObject,
    newzwareAchPayment?: ExecuteNewzwareAchPayment.AsObject,
    newzwareComplaintHistory?: ExecuteNewzwareComplaintHistory.AsObject,
    newzwareComplaintUpdate?: ExecuteNewzwareComplaintUpdate.AsObject,
    newzwareVacationRestart?: ExecuteNewzwareVacationRestart.AsObject,
    newzwareVacationUpdate?: ExecuteNewzwareVacationUpdate.AsObject,
    newzwarePhoneLookupMulti?: ExecuteNewzwarePhoneLookupMulti.AsObject,
    newzwareSubscriptionRestart?: ExecuteNewzwareSubscriptionRestart.AsObject,
    priocommerceAchPayment?: ExecutePriocommerceAchPayment.AsObject,
    priocommerceCcPayment?: ExecutePriocommerceCcPayment.AsObject,
    navigaCreatePayment?: ExecuteNavigaCreatePayment.AsObject,
    navigaChangeBilling?: ExecuteNavigaChangeBilling.AsObject,
    paynsecondsTokenizeCard?: ExecutePaynsecondsTokenizeCard.AsObject,
    sutherlandrevPaymentConnect?: ExecuteSutherlandrevPaymentConnect.AsObject,
    finviExileQueryRecords?: ExecuteFinviExileQueryRecords.AsObject,
    finviExileReadFields?: ExecuteFinviExileReadFields.AsObject,
    finviExileWriteFields?: ExecuteFinviExileWriteFields.AsObject,
    finviExileExecuteLogic?: ExecuteFinviExileExecuteLogic.AsObject,
    finviExileCreatePayment?: ExecuteFinviExileCreatePayment.AsObject,
    finviExilePopAccount?: ExecuteFinviExilePopAccount.AsObject,
    navigaDtiCircCreatePayment?: ExecuteNavigaDTICircCreatePayment.AsObject,
    navigaDtiCircChangeBilling?: ExecuteNavigaDTICircChangeBilling.AsObject,
    navigaDtiCsAutoRenewInfo?: ExecuteNavigaDTICSAutoRenewInfo.AsObject,
    navigaDtiCsAutoTran?: ExecuteNavigaDTICSAutoTran.AsObject,
    navigaDtiCsBillingInfo?: ExecuteNavigaDTICSBillingInfo.AsObject,
    navigaDtiCsLogin?: ExecuteNavigaDTICSLogin.AsObject,
    navigaDtiCsPayInfo?: ExecuteNavigaDTICSPayInfo.AsObject,
    navigaDtiCsPayTran?: ExecuteNavigaDTICSPayTran.AsObject,
    navigaDtiCsRenewInfo?: ExecuteNavigaDTICSRenewInfo.AsObject,
    navigaDtiCsSearchPage?: ExecuteNavigaDTICSSearchPage.AsObject,
    navigaDtiCsServiceErrorInfo?: ExecuteNavigaDTICSServiceErrorInfo.AsObject,
    navigaDtiCsServiceErrorTrans?: ExecuteNavigaDTICSServiceErrorTrans.AsObject,
    navigaDtiCsStopInfo?: ExecuteNavigaDTICSStopInfo.AsObject,
    navigaDtiCsStopTrans?: ExecuteNavigaDTICSStopTrans.AsObject,
    swervepayCreateCustomer?: ExecuteSwervepayCreateCustomer.AsObject,
    swervepayQueryCustomerDetails?: ExecuteSwervepayQueryCustomerDetails.AsObject,
    swervepayQueryCustomerTokenDetails?: ExecuteSwervepayQueryCustomerTokenDetails.AsObject,
    swervepayQueryCustomerTokens?: ExecuteSwervepayQueryQueryCustomerTokens.AsObject,
    swervepayQueryCustomerTransactions?: ExecuteSwervepayQueryCustomerTransactions.AsObject,
    swervepayQueryCustomers?: ExecuteSwervepayQueryCustomers.AsObject,
    swervepayQueryTransactionDetails?: ExecuteSwervepayQueryQueryTransactionDetails.AsObject,
    swervepayQueryTransactions?: ExecuteSwervepayQueryTransactions.AsObject,
    swervepayRemoveCustomerToken?: ExecuteSwervepayRemoveCustomerToken.AsObject,
    swervepayUpdateCustomer?: ExecuteSwervepayUpdateCustomer.AsObject,
    swervepayCreateTransactionAuth?: ExecuteSwervepayCreateTransactionAuth.AsObject,
    swervepayCreateTransactionCapture?: ExecuteSwervepayCreateTransactionCapture.AsObject,
    swervepayCreateTransactionCredit?: ExecuteSwervepayCreateTransactionCredit.AsObject,
    swervepayCreateTransactionRefund?: ExecuteSwervepayCreateTransactionRefund.AsObject,
    swervepayCreateTransactionSale?: ExecuteSwervepayCreateTransactionSale.AsObject,
    swervepayCreateTransactionValidate?: ExecuteSwervepayCreateTransactionValidate.AsObject,
    swervepayProcessNewTransactionAuth?: ExecuteSwervepayProcessNewTransactionAuth.AsObject,
    swervepayProcessNewTransactionCapture?: ExecuteSwervepayProcessNewTransactionCapture.AsObject,
    swervepayProcessNewTransactionCredit?: ExecuteSwervepayProcessNewTransactionCredit.AsObject,
    swervepayProcessNewTransactionRefund?: ExecuteSwervepayProcessNewTransactionRefund.AsObject,
    swervepayProcessNewTransactionSale?: ExecuteSwervepayProcessNewTransactionSale.AsObject,
    swervepayProcessNewTransactionValidate?: ExecuteSwervepayProcessNewTransactionValidate.AsObject,
    veradigmGetLocations?: ExecuteVeradigmGetLocations.AsObject,
    veradigmGetPatientAccountBalance?: ExecuteVeradigmGetPatientAccountBalance.AsObject,
    veradigmGetPayments?: ExecuteVeradigmGetPayments.AsObject,
    veradigmGetPlacesOfService?: ExecuteVeradigmGetPlacesOfService.AsObject,
    veradigmSavePaymentTransaction?: ExecuteVeradigmSavePaymentTransaction.AsObject,
    veradigmSaveRefundTransaction?: ExecuteVeradigmSaveRefundTransaction.AsObject,
    veradigmSaveVoucherPayment?: ExecuteVeradigmSaveVoucherPayment.AsObject,
    veradigmPracticeManagementGetToken?: ExecuteVeradigmPracticeManagementGetToken.AsObject,
    veradigmPracticeManagementGetUserAuthentication?: ExecuteVeradigmPracticeManagementGetUserAuthentication.AsObject,
    veradigmPracticeManagementGetLocations?: ExecuteVeradigmPracticeManagementGetLocations.AsObject,
    veradigmPracticeManagementGetPatientAccountBalance?: ExecuteVeradigmPracticeManagementGetPatientAccountBalance.AsObject,
    veradigmPracticeManagementGetPayments?: ExecuteVeradigmPracticeManagementGetPayments.AsObject,
    veradigmPracticeManagementGetPlacesOfService?: ExecuteVeradigmPracticeManagementGetPlacesOfService.AsObject,
    veradigmPracticeManagementSavePaymentTransaction?: ExecuteVeradigmPracticeManagementSavePaymentTransaction.AsObject,
    veradigmPracticeManagementSaveRefundTransaction?: ExecuteVeradigmPracticeManagementSaveRefundTransaction.AsObject,
    veradigmPracticeManagementSaveVoucherPayment?: ExecuteVeradigmPracticeManagementSaveVoucherPayment.AsObject,
    pdcflowTokenizeCreditCard?: ExecutePDCFlowTokenizeCreditCard.AsObject,
    pdcflowCcTransaction?: ExecutePDCFlowCCTransaction.AsObject,
    debugEcho?: ExecuteDebugEcho.AsObject,
    debugValidate?: ExecuteDebugValidate.AsObject,
    acquiredProcessPayment?: ExecuteAcquiredProcessPayment.AsObject,
    genericRequest?: ExecuteGenericRequest.AsObject,
    healthpay24AccountsReceivable?: ExecuteHealthpay24AccountsReceivable.AsObject,
    finviFacsProcessPayment?: ExecuteFinviFacsProcessPayment.AsObject,
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
    CIRCPRO_LAW_GET_PAYMENT_TYPES = 415,
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
    EXPERIAN_STELLA_CARD_ENTRY_TOKENIZATION = 2014,
    EXPERIAN_STELLA_PAYMENT_PLANS_BY_PATIENT = 2015,
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
    JOURNEY_LIST = 2402,
    JOURNEY_UPDATE = 2403,
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
    NTVB_COMPLETE_PENDING_ORDER = 2815,
    NTVB_PLACE_ORDER = 2816,
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
    SHIFT4_ACCESS_TOKEN = 3402,
    POSCORP_ACCESSTOKEN = 3501,
    POSCORP_LOOKUP_GUARANTOR = 3502,
    POSCORP_UPDATE_PAYMENT_STATUS = 3503,
    PIANO_GET_USER = 3601,
    PIANO_UPDATE_USER = 3602,
    PIANO_UPDATE_SUBSCRIPTION = 3603,
    PIANO_GET_PAYMENT = 3604,
    PIANO_LIST_SUBSCRIPTION = 3605,
    PIANO_LASTACCESS_CONVERSION = 3606,
    PIANO_ADD_PAYMENT = 3607,
    PIANO_UPDATE_PAYMENT = 3608,
    EPIC_GET_TOKEN = 3701,
    EPIC_GET_PATIENT = 3702,
    EPIC_MATCH_PATIENT = 3703,
    EPIC_SEARCH_APPOINTMENT = 3704,
    EPIC_FIND_APPOINTMENT = 3705,
    EPIC_BOOK_APPOINTMENT = 3706,
    EPIC_GET_ACCOUNT = 3707,
    EPIC_RECEIVE_COMMUNICATION_2 = 3708,
    EPIC_RECEIVE_COMMUNICATION_3 = 3709,
    EPIC_POST_PATIENT_MADE_PAYMENT = 3710,
    EPIC_GET_PATIENT_BILLING_DETAILS = 3711,
    EPIC_CALL_PATIENT = 3712,
    EPIC_HANGUP_CALL = 3713,
    EPIC_GET_ACCOUNT_ACCESS_IDENTIFIERS = 3714,
    EPIC_GET_ACCOUNT_BILLING_SUMMARY = 3715,
    NEWZWARE_PHONE_LOOKUP = 3801,
    NEWZWARE_ACCOUNT_INQUIRY = 3802,
    NEWZWARE_CC_PAYMENT = 3803,
    NEWZWARE_ACH_PAYMENT = 3804,
    NEWZWARE_COMPLAINT_HISTORY = 3805,
    NEWZWARE_COMPLAINT_UPDATE = 3806,
    NEWZWARE_VACATION_RESTART = 3807,
    NEWZWARE_VACATION_UPDATE = 3808,
    NEWZWARE_PHONE_LOOKUP_MULTI = 3809,
    NEWZWARE_SUBSCRIPTION_RESTART = 3810,
    PRIOCOMMERCE_ACH_PAYMENT = 3901,
    PRIOCOMMERCE_CC_PAYMENT = 3902,
    NAVIGA_CREATE_PAYMENT = 4001,
    NAVIGA_CHANGE_BILLING = 4002,
    PAYNSECONDS_TOKENIZE_CARD = 4101,
    SUTHERLANDREV_PAYMENT_CONNECT = 4201,
    FINVI_EXILE_QUERY_RECORDS = 4301,
    FINVI_EXILE_READ_FIELDS = 4302,
    FINVI_EXILE_WRITE_FIELDS = 4303,
    FINVI_EXILE_EXECUTE_LOGIC = 4304,
    FINVI_EXILE_CREATE_PAYMENT = 4305,
    FINVI_EXILE_POP_ACCOUNT = 4306,
    NAVIGA_DTI_CIRC_CREATE_PAYMENT = 4401,
    NAVIGA_DTI_CIRC_CHANGE_BILLING = 4402,
    NAVIGA_DTI_CS_AUTO_RENEW_INFO = 4501,
    NAVIGA_DTI_CS_AUTO_TRAN = 4502,
    NAVIGA_DTI_CS_BILLING_INFO = 4503,
    NAVIGA_DTI_CS_LOGIN = 4504,
    NAVIGA_DTI_CS_PAY_INFO = 4505,
    NAVIGA_DTI_CS_PAY_TRAN = 4506,
    NAVIGA_DTI_CS_RENEW_INFO = 4507,
    NAVIGA_DTI_CS_SEARCH_PAGE = 4508,
    NAVIGA_DTI_CS_SERVICE_ERROR_INFO = 4509,
    NAVIGA_DTI_CS_SERVICE_ERROR_TRANS = 4510,
    NAVIGA_DTI_CS_STOP_INFO = 4511,
    NAVIGA_DTI_CS_STOP_TRANS = 4512,
    SWERVEPAY_CREATE_CUSTOMER = 4601,
    SWERVEPAY_QUERY_CUSTOMER_DETAILS = 4602,
    SWERVEPAY_QUERY_CUSTOMER_TOKEN_DETAILS = 4603,
    SWERVEPAY_QUERY_CUSTOMER_TOKENS = 4604,
    SWERVEPAY_QUERY_CUSTOMER_TRANSACTIONS = 4605,
    SWERVEPAY_QUERY_CUSTOMERS = 4606,
    SWERVEPAY_QUERY_TRANSACTION_DETAILS = 4607,
    SWERVEPAY_QUERY_TRANSACTIONS = 4608,
    SWERVEPAY_REMOVE_CUSTOMER_TOKEN = 4609,
    SWERVEPAY_UPDATE_CUSTOMER = 4610,
    SWERVEPAY_CREATE_TRANSACTION_AUTH = 4611,
    SWERVEPAY_CREATE_TRANSACTION_CAPTURE = 4612,
    SWERVEPAY_CREATE_TRANSACTION_CREDIT = 4613,
    SWERVEPAY_CREATE_TRANSACTION_REFUND = 4614,
    SWERVEPAY_CREATE_TRANSACTION_SALE = 4615,
    SWERVEPAY_CREATE_TRANSACTION_VALIDATE = 4616,
    SWERVEPAY_PROCESS_NEW_TRANSACTION_AUTH = 4617,
    SWERVEPAY_PROCESS_NEW_TRANSACTION_CAPTURE = 4618,
    SWERVEPAY_PROCESS_NEW_TRANSACTION_CREDIT = 4619,
    SWERVEPAY_PROCESS_NEW_TRANSACTION_REFUND = 4620,
    SWERVEPAY_PROCESS_NEW_TRANSACTION_SALE = 4621,
    SWERVEPAY_PROCESS_NEW_TRANSACTION_VALIDATE = 4622,
    VERADIGM_GET_LOCATIONS = 4701,
    VERADIGM_GET_PATIENT_ACCOUNT_BALANCE = 4702,
    VERADIGM_GET_PAYMENTS = 4703,
    VERADIGM_GET_PLACES_OF_SERVICE = 4704,
    VERADIGM_SAVE_PAYMENT_TRANSACTION = 4705,
    VERADIGM_SAVE_REFUND_TRANSACTION = 4706,
    VERADIGM_SAVE_VOUCHER_PAYMENT = 4707,
    VERADIGM_PRACTICE_MANAGEMENT_GET_TOKEN = 4801,
    VERADIGM_PRACTICE_MANAGEMENT_GET_USER_AUTHENTICATION = 4802,
    VERADIGM_PRACTICE_MANAGEMENT_GET_LOCATIONS = 4803,
    VERADIGM_PRACTICE_MANAGEMENT_GET_PATIENT_ACCOUNT_BALANCE = 4804,
    VERADIGM_PRACTICE_MANAGEMENT_GET_PAYMENTS = 4805,
    VERADIGM_PRACTICE_MANAGEMENT_GET_PLACES_OF_SERVICE = 4806,
    VERADIGM_PRACTICE_MANAGEMENT_SAVE_PAYMENT_TRANSACTION = 4807,
    VERADIGM_PRACTICE_MANAGEMENT_SAVE_REFUND_TRANSACTION = 4808,
    VERADIGM_PRACTICE_MANAGEMENT_SAVE_VOUCHER_PAYMENT = 4809,
    PDCFLOW_TOKENIZE_CREDIT_CARD = 4901,
    PDCFLOW_CC_TRANSACTION = 4902,
    DEBUG_ECHO = 5001,
    DEBUG_VALIDATE = 5002,
    ACQUIRED_PROCESS_PAYMENT = 5101,
    GENERIC_REQUEST = 5201,
    HEALTHPAY24_ACCOUNTS_RECEIVABLE = 5301,
    FINVI_FACS_PROCESS_PAYMENT = 5401,
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
  getUseInvoiceAccountNumber(): boolean;
  setUseInvoiceAccountNumber(value: boolean): void;

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
    useInvoiceAccountNumber: boolean,
  }
}

export class PaymentExperianACH extends jspb.Message {
  getUseInvoiceAccountNumber(): boolean;
  setUseInvoiceAccountNumber(value: boolean): void;

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
    useInvoiceAccountNumber: boolean,
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

export class PaymentPriocommerceCc extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentPriocommerceCc.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentPriocommerceCc): PaymentPriocommerceCc.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentPriocommerceCc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentPriocommerceCc;
  static deserializeBinaryFromReader(message: PaymentPriocommerceCc, reader: jspb.BinaryReader): PaymentPriocommerceCc;
}

export namespace PaymentPriocommerceCc {
  export type AsObject = {
  }
}

export class PaymentPriocommerceAch extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentPriocommerceAch.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentPriocommerceAch): PaymentPriocommerceAch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentPriocommerceAch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentPriocommerceAch;
  static deserializeBinaryFromReader(message: PaymentPriocommerceAch, reader: jspb.BinaryReader): PaymentPriocommerceAch;
}

export namespace PaymentPriocommerceAch {
  export type AsObject = {
  }
}

export class PaymentVisionCC extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentVisionCC.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentVisionCC): PaymentVisionCC.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentVisionCC, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentVisionCC;
  static deserializeBinaryFromReader(message: PaymentVisionCC, reader: jspb.BinaryReader): PaymentVisionCC;
}

export namespace PaymentVisionCC {
  export type AsObject = {
  }
}

export class PaymentVisionACH extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentVisionACH.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentVisionACH): PaymentVisionACH.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentVisionACH, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentVisionACH;
  static deserializeBinaryFromReader(message: PaymentVisionACH, reader: jspb.BinaryReader): PaymentVisionACH;
}

export namespace PaymentVisionACH {
  export type AsObject = {
  }
}

export class PaymentStellaCc extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentStellaCc.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentStellaCc): PaymentStellaCc.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentStellaCc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentStellaCc;
  static deserializeBinaryFromReader(message: PaymentStellaCc, reader: jspb.BinaryReader): PaymentStellaCc;
}

export namespace PaymentStellaCc {
  export type AsObject = {
  }
}

export class PaymentStellaECheck extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentStellaECheck.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentStellaECheck): PaymentStellaECheck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentStellaECheck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentStellaECheck;
  static deserializeBinaryFromReader(message: PaymentStellaECheck, reader: jspb.BinaryReader): PaymentStellaECheck;
}

export namespace PaymentStellaECheck {
  export type AsObject = {
  }
}

export class PaymentFinviCC extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentFinviCC.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentFinviCC): PaymentFinviCC.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentFinviCC, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentFinviCC;
  static deserializeBinaryFromReader(message: PaymentFinviCC, reader: jspb.BinaryReader): PaymentFinviCC;
}

export namespace PaymentFinviCC {
  export type AsObject = {
  }
}

export class PaymentFinviACH extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentFinviACH.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentFinviACH): PaymentFinviACH.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentFinviACH, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentFinviACH;
  static deserializeBinaryFromReader(message: PaymentFinviACH, reader: jspb.BinaryReader): PaymentFinviACH;
}

export namespace PaymentFinviACH {
  export type AsObject = {
  }
}

export class PaymentSwervePayCC extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentSwervePayCC.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentSwervePayCC): PaymentSwervePayCC.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentSwervePayCC, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentSwervePayCC;
  static deserializeBinaryFromReader(message: PaymentSwervePayCC, reader: jspb.BinaryReader): PaymentSwervePayCC;
}

export namespace PaymentSwervePayCC {
  export type AsObject = {
  }
}

export class PaymentSwervePayACH extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentSwervePayACH.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentSwervePayACH): PaymentSwervePayACH.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentSwervePayACH, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentSwervePayACH;
  static deserializeBinaryFromReader(message: PaymentSwervePayACH, reader: jspb.BinaryReader): PaymentSwervePayACH;
}

export namespace PaymentSwervePayACH {
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

export class ExecuteCircproLawGetPaymentTypes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteCircproLawGetPaymentTypes.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteCircproLawGetPaymentTypes): ExecuteCircproLawGetPaymentTypes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteCircproLawGetPaymentTypes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteCircproLawGetPaymentTypes;
  static deserializeBinaryFromReader(message: ExecuteCircproLawGetPaymentTypes, reader: jspb.BinaryReader): ExecuteCircproLawGetPaymentTypes;
}

export namespace ExecuteCircproLawGetPaymentTypes {
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

export class ExecuteExperianStellaCardEntryTokenization extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteExperianStellaCardEntryTokenization.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteExperianStellaCardEntryTokenization): ExecuteExperianStellaCardEntryTokenization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteExperianStellaCardEntryTokenization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteExperianStellaCardEntryTokenization;
  static deserializeBinaryFromReader(message: ExecuteExperianStellaCardEntryTokenization, reader: jspb.BinaryReader): ExecuteExperianStellaCardEntryTokenization;
}

export namespace ExecuteExperianStellaCardEntryTokenization {
  export type AsObject = {
  }
}

export class ExecuteExperianStellaPaymentPlansByPatient extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteExperianStellaPaymentPlansByPatient.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteExperianStellaPaymentPlansByPatient): ExecuteExperianStellaPaymentPlansByPatient.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteExperianStellaPaymentPlansByPatient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteExperianStellaPaymentPlansByPatient;
  static deserializeBinaryFromReader(message: ExecuteExperianStellaPaymentPlansByPatient, reader: jspb.BinaryReader): ExecuteExperianStellaPaymentPlansByPatient;
}

export namespace ExecuteExperianStellaPaymentPlansByPatient {
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

export class ExecuteJourneyList extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteJourneyList.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteJourneyList): ExecuteJourneyList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteJourneyList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteJourneyList;
  static deserializeBinaryFromReader(message: ExecuteJourneyList, reader: jspb.BinaryReader): ExecuteJourneyList;
}

export namespace ExecuteJourneyList {
  export type AsObject = {
  }
}

export class ExecuteJourneyUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteJourneyUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteJourneyUpdate): ExecuteJourneyUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteJourneyUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteJourneyUpdate;
  static deserializeBinaryFromReader(message: ExecuteJourneyUpdate, reader: jspb.BinaryReader): ExecuteJourneyUpdate;
}

export namespace ExecuteJourneyUpdate {
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

export class ExecuteNtvbCompletePendingOrder extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNtvbCompletePendingOrder.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNtvbCompletePendingOrder): ExecuteNtvbCompletePendingOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNtvbCompletePendingOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNtvbCompletePendingOrder;
  static deserializeBinaryFromReader(message: ExecuteNtvbCompletePendingOrder, reader: jspb.BinaryReader): ExecuteNtvbCompletePendingOrder;
}

export namespace ExecuteNtvbCompletePendingOrder {
  export type AsObject = {
  }
}

export class ExecuteNtvbPlaceOrder extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNtvbPlaceOrder.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNtvbPlaceOrder): ExecuteNtvbPlaceOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNtvbPlaceOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNtvbPlaceOrder;
  static deserializeBinaryFromReader(message: ExecuteNtvbPlaceOrder, reader: jspb.BinaryReader): ExecuteNtvbPlaceOrder;
}

export namespace ExecuteNtvbPlaceOrder {
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

export class ExecuteShift4AccessToken extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteShift4AccessToken.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteShift4AccessToken): ExecuteShift4AccessToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteShift4AccessToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteShift4AccessToken;
  static deserializeBinaryFromReader(message: ExecuteShift4AccessToken, reader: jspb.BinaryReader): ExecuteShift4AccessToken;
}

export namespace ExecuteShift4AccessToken {
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

export class ExecutePianoUpdateSubscription extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePianoUpdateSubscription.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePianoUpdateSubscription): ExecutePianoUpdateSubscription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePianoUpdateSubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePianoUpdateSubscription;
  static deserializeBinaryFromReader(message: ExecutePianoUpdateSubscription, reader: jspb.BinaryReader): ExecutePianoUpdateSubscription;
}

export namespace ExecutePianoUpdateSubscription {
  export type AsObject = {
  }
}

export class ExecutePianoGetPayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePianoGetPayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePianoGetPayment): ExecutePianoGetPayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePianoGetPayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePianoGetPayment;
  static deserializeBinaryFromReader(message: ExecutePianoGetPayment, reader: jspb.BinaryReader): ExecutePianoGetPayment;
}

export namespace ExecutePianoGetPayment {
  export type AsObject = {
  }
}

export class ExecutePianoListSubscription extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePianoListSubscription.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePianoListSubscription): ExecutePianoListSubscription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePianoListSubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePianoListSubscription;
  static deserializeBinaryFromReader(message: ExecutePianoListSubscription, reader: jspb.BinaryReader): ExecutePianoListSubscription;
}

export namespace ExecutePianoListSubscription {
  export type AsObject = {
  }
}

export class ExecutePianoLastAccessConversion extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePianoLastAccessConversion.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePianoLastAccessConversion): ExecutePianoLastAccessConversion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePianoLastAccessConversion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePianoLastAccessConversion;
  static deserializeBinaryFromReader(message: ExecutePianoLastAccessConversion, reader: jspb.BinaryReader): ExecutePianoLastAccessConversion;
}

export namespace ExecutePianoLastAccessConversion {
  export type AsObject = {
  }
}

export class ExacutePianoAddPayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExacutePianoAddPayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExacutePianoAddPayment): ExacutePianoAddPayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExacutePianoAddPayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExacutePianoAddPayment;
  static deserializeBinaryFromReader(message: ExacutePianoAddPayment, reader: jspb.BinaryReader): ExacutePianoAddPayment;
}

export namespace ExacutePianoAddPayment {
  export type AsObject = {
  }
}

export class ExacutePianoUpdatePayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExacutePianoUpdatePayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExacutePianoUpdatePayment): ExacutePianoUpdatePayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExacutePianoUpdatePayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExacutePianoUpdatePayment;
  static deserializeBinaryFromReader(message: ExacutePianoUpdatePayment, reader: jspb.BinaryReader): ExacutePianoUpdatePayment;
}

export namespace ExacutePianoUpdatePayment {
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

export class ExecuteEpicReceiveCommunication2 extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteEpicReceiveCommunication2.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteEpicReceiveCommunication2): ExecuteEpicReceiveCommunication2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteEpicReceiveCommunication2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteEpicReceiveCommunication2;
  static deserializeBinaryFromReader(message: ExecuteEpicReceiveCommunication2, reader: jspb.BinaryReader): ExecuteEpicReceiveCommunication2;
}

export namespace ExecuteEpicReceiveCommunication2 {
  export type AsObject = {
  }
}

export class ExecuteEpicReceiveCommunication3 extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteEpicReceiveCommunication3.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteEpicReceiveCommunication3): ExecuteEpicReceiveCommunication3.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteEpicReceiveCommunication3, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteEpicReceiveCommunication3;
  static deserializeBinaryFromReader(message: ExecuteEpicReceiveCommunication3, reader: jspb.BinaryReader): ExecuteEpicReceiveCommunication3;
}

export namespace ExecuteEpicReceiveCommunication3 {
  export type AsObject = {
  }
}

export class ExecuteEpicPostPatientMadePayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteEpicPostPatientMadePayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteEpicPostPatientMadePayment): ExecuteEpicPostPatientMadePayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteEpicPostPatientMadePayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteEpicPostPatientMadePayment;
  static deserializeBinaryFromReader(message: ExecuteEpicPostPatientMadePayment, reader: jspb.BinaryReader): ExecuteEpicPostPatientMadePayment;
}

export namespace ExecuteEpicPostPatientMadePayment {
  export type AsObject = {
  }
}

export class ExecuteEpicGetPatientBillingDetails extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteEpicGetPatientBillingDetails.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteEpicGetPatientBillingDetails): ExecuteEpicGetPatientBillingDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteEpicGetPatientBillingDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteEpicGetPatientBillingDetails;
  static deserializeBinaryFromReader(message: ExecuteEpicGetPatientBillingDetails, reader: jspb.BinaryReader): ExecuteEpicGetPatientBillingDetails;
}

export namespace ExecuteEpicGetPatientBillingDetails {
  export type AsObject = {
  }
}

export class ExecuteEpicCallPatient extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteEpicCallPatient.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteEpicCallPatient): ExecuteEpicCallPatient.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteEpicCallPatient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteEpicCallPatient;
  static deserializeBinaryFromReader(message: ExecuteEpicCallPatient, reader: jspb.BinaryReader): ExecuteEpicCallPatient;
}

export namespace ExecuteEpicCallPatient {
  export type AsObject = {
  }
}

export class ExecuteEpicHangupCall extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteEpicHangupCall.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteEpicHangupCall): ExecuteEpicHangupCall.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteEpicHangupCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteEpicHangupCall;
  static deserializeBinaryFromReader(message: ExecuteEpicHangupCall, reader: jspb.BinaryReader): ExecuteEpicHangupCall;
}

export namespace ExecuteEpicHangupCall {
  export type AsObject = {
  }
}

export class ExecuteEpicGetAccountAccessIdentifiers extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteEpicGetAccountAccessIdentifiers.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteEpicGetAccountAccessIdentifiers): ExecuteEpicGetAccountAccessIdentifiers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteEpicGetAccountAccessIdentifiers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteEpicGetAccountAccessIdentifiers;
  static deserializeBinaryFromReader(message: ExecuteEpicGetAccountAccessIdentifiers, reader: jspb.BinaryReader): ExecuteEpicGetAccountAccessIdentifiers;
}

export namespace ExecuteEpicGetAccountAccessIdentifiers {
  export type AsObject = {
  }
}

export class ExecuteEpicGetAccountBillingSummary extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteEpicGetAccountBillingSummary.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteEpicGetAccountBillingSummary): ExecuteEpicGetAccountBillingSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteEpicGetAccountBillingSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteEpicGetAccountBillingSummary;
  static deserializeBinaryFromReader(message: ExecuteEpicGetAccountBillingSummary, reader: jspb.BinaryReader): ExecuteEpicGetAccountBillingSummary;
}

export namespace ExecuteEpicGetAccountBillingSummary {
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

export class ExecuteNewzwareComplaintHistory extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNewzwareComplaintHistory.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNewzwareComplaintHistory): ExecuteNewzwareComplaintHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNewzwareComplaintHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNewzwareComplaintHistory;
  static deserializeBinaryFromReader(message: ExecuteNewzwareComplaintHistory, reader: jspb.BinaryReader): ExecuteNewzwareComplaintHistory;
}

export namespace ExecuteNewzwareComplaintHistory {
  export type AsObject = {
  }
}

export class ExecuteNewzwareComplaintUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNewzwareComplaintUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNewzwareComplaintUpdate): ExecuteNewzwareComplaintUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNewzwareComplaintUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNewzwareComplaintUpdate;
  static deserializeBinaryFromReader(message: ExecuteNewzwareComplaintUpdate, reader: jspb.BinaryReader): ExecuteNewzwareComplaintUpdate;
}

export namespace ExecuteNewzwareComplaintUpdate {
  export type AsObject = {
  }
}

export class ExecuteNewzwareVacationRestart extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNewzwareVacationRestart.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNewzwareVacationRestart): ExecuteNewzwareVacationRestart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNewzwareVacationRestart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNewzwareVacationRestart;
  static deserializeBinaryFromReader(message: ExecuteNewzwareVacationRestart, reader: jspb.BinaryReader): ExecuteNewzwareVacationRestart;
}

export namespace ExecuteNewzwareVacationRestart {
  export type AsObject = {
  }
}

export class ExecuteNewzwareVacationUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNewzwareVacationUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNewzwareVacationUpdate): ExecuteNewzwareVacationUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNewzwareVacationUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNewzwareVacationUpdate;
  static deserializeBinaryFromReader(message: ExecuteNewzwareVacationUpdate, reader: jspb.BinaryReader): ExecuteNewzwareVacationUpdate;
}

export namespace ExecuteNewzwareVacationUpdate {
  export type AsObject = {
  }
}

export class ExecuteNewzwarePhoneLookupMulti extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNewzwarePhoneLookupMulti.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNewzwarePhoneLookupMulti): ExecuteNewzwarePhoneLookupMulti.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNewzwarePhoneLookupMulti, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNewzwarePhoneLookupMulti;
  static deserializeBinaryFromReader(message: ExecuteNewzwarePhoneLookupMulti, reader: jspb.BinaryReader): ExecuteNewzwarePhoneLookupMulti;
}

export namespace ExecuteNewzwarePhoneLookupMulti {
  export type AsObject = {
  }
}

export class ExecuteNewzwareSubscriptionRestart extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNewzwareSubscriptionRestart.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNewzwareSubscriptionRestart): ExecuteNewzwareSubscriptionRestart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNewzwareSubscriptionRestart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNewzwareSubscriptionRestart;
  static deserializeBinaryFromReader(message: ExecuteNewzwareSubscriptionRestart, reader: jspb.BinaryReader): ExecuteNewzwareSubscriptionRestart;
}

export namespace ExecuteNewzwareSubscriptionRestart {
  export type AsObject = {
  }
}

export class ExecutePriocommerceAchPayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePriocommerceAchPayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePriocommerceAchPayment): ExecutePriocommerceAchPayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePriocommerceAchPayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePriocommerceAchPayment;
  static deserializeBinaryFromReader(message: ExecutePriocommerceAchPayment, reader: jspb.BinaryReader): ExecutePriocommerceAchPayment;
}

export namespace ExecutePriocommerceAchPayment {
  export type AsObject = {
  }
}

export class ExecutePriocommerceCcPayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePriocommerceCcPayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePriocommerceCcPayment): ExecutePriocommerceCcPayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePriocommerceCcPayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePriocommerceCcPayment;
  static deserializeBinaryFromReader(message: ExecutePriocommerceCcPayment, reader: jspb.BinaryReader): ExecutePriocommerceCcPayment;
}

export namespace ExecutePriocommerceCcPayment {
  export type AsObject = {
  }
}

export class ExecuteNavigaCreatePayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNavigaCreatePayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNavigaCreatePayment): ExecuteNavigaCreatePayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNavigaCreatePayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNavigaCreatePayment;
  static deserializeBinaryFromReader(message: ExecuteNavigaCreatePayment, reader: jspb.BinaryReader): ExecuteNavigaCreatePayment;
}

export namespace ExecuteNavigaCreatePayment {
  export type AsObject = {
  }
}

export class ExecuteNavigaChangeBilling extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNavigaChangeBilling.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNavigaChangeBilling): ExecuteNavigaChangeBilling.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNavigaChangeBilling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNavigaChangeBilling;
  static deserializeBinaryFromReader(message: ExecuteNavigaChangeBilling, reader: jspb.BinaryReader): ExecuteNavigaChangeBilling;
}

export namespace ExecuteNavigaChangeBilling {
  export type AsObject = {
  }
}

export class ExecutePaynsecondsTokenizeCard extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePaynsecondsTokenizeCard.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePaynsecondsTokenizeCard): ExecutePaynsecondsTokenizeCard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePaynsecondsTokenizeCard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePaynsecondsTokenizeCard;
  static deserializeBinaryFromReader(message: ExecutePaynsecondsTokenizeCard, reader: jspb.BinaryReader): ExecutePaynsecondsTokenizeCard;
}

export namespace ExecutePaynsecondsTokenizeCard {
  export type AsObject = {
  }
}

export class ExecuteSutherlandrevPaymentConnect extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSutherlandrevPaymentConnect.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSutherlandrevPaymentConnect): ExecuteSutherlandrevPaymentConnect.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSutherlandrevPaymentConnect, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSutherlandrevPaymentConnect;
  static deserializeBinaryFromReader(message: ExecuteSutherlandrevPaymentConnect, reader: jspb.BinaryReader): ExecuteSutherlandrevPaymentConnect;
}

export namespace ExecuteSutherlandrevPaymentConnect {
  export type AsObject = {
  }
}

export class ExecuteDebugEcho extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteDebugEcho.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteDebugEcho): ExecuteDebugEcho.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteDebugEcho, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteDebugEcho;
  static deserializeBinaryFromReader(message: ExecuteDebugEcho, reader: jspb.BinaryReader): ExecuteDebugEcho;
}

export namespace ExecuteDebugEcho {
  export type AsObject = {
  }
}

export class ExecuteDebugValidate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteDebugValidate.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteDebugValidate): ExecuteDebugValidate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteDebugValidate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteDebugValidate;
  static deserializeBinaryFromReader(message: ExecuteDebugValidate, reader: jspb.BinaryReader): ExecuteDebugValidate;
}

export namespace ExecuteDebugValidate {
  export type AsObject = {
  }
}

export class ExecuteFinviExileQueryRecords extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteFinviExileQueryRecords.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteFinviExileQueryRecords): ExecuteFinviExileQueryRecords.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteFinviExileQueryRecords, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteFinviExileQueryRecords;
  static deserializeBinaryFromReader(message: ExecuteFinviExileQueryRecords, reader: jspb.BinaryReader): ExecuteFinviExileQueryRecords;
}

export namespace ExecuteFinviExileQueryRecords {
  export type AsObject = {
  }
}

export class ExecuteFinviExileReadFields extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteFinviExileReadFields.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteFinviExileReadFields): ExecuteFinviExileReadFields.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteFinviExileReadFields, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteFinviExileReadFields;
  static deserializeBinaryFromReader(message: ExecuteFinviExileReadFields, reader: jspb.BinaryReader): ExecuteFinviExileReadFields;
}

export namespace ExecuteFinviExileReadFields {
  export type AsObject = {
  }
}

export class ExecuteFinviExileWriteFields extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteFinviExileWriteFields.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteFinviExileWriteFields): ExecuteFinviExileWriteFields.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteFinviExileWriteFields, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteFinviExileWriteFields;
  static deserializeBinaryFromReader(message: ExecuteFinviExileWriteFields, reader: jspb.BinaryReader): ExecuteFinviExileWriteFields;
}

export namespace ExecuteFinviExileWriteFields {
  export type AsObject = {
  }
}

export class ExecuteFinviExileExecuteLogic extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteFinviExileExecuteLogic.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteFinviExileExecuteLogic): ExecuteFinviExileExecuteLogic.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteFinviExileExecuteLogic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteFinviExileExecuteLogic;
  static deserializeBinaryFromReader(message: ExecuteFinviExileExecuteLogic, reader: jspb.BinaryReader): ExecuteFinviExileExecuteLogic;
}

export namespace ExecuteFinviExileExecuteLogic {
  export type AsObject = {
  }
}

export class ExecuteFinviExileCreatePayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteFinviExileCreatePayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteFinviExileCreatePayment): ExecuteFinviExileCreatePayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteFinviExileCreatePayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteFinviExileCreatePayment;
  static deserializeBinaryFromReader(message: ExecuteFinviExileCreatePayment, reader: jspb.BinaryReader): ExecuteFinviExileCreatePayment;
}

export namespace ExecuteFinviExileCreatePayment {
  export type AsObject = {
  }
}

export class ExecuteFinviExilePopAccount extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteFinviExilePopAccount.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteFinviExilePopAccount): ExecuteFinviExilePopAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteFinviExilePopAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteFinviExilePopAccount;
  static deserializeBinaryFromReader(message: ExecuteFinviExilePopAccount, reader: jspb.BinaryReader): ExecuteFinviExilePopAccount;
}

export namespace ExecuteFinviExilePopAccount {
  export type AsObject = {
  }
}

export class ExecuteSwervepayCreateCustomer extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSwervepayCreateCustomer.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSwervepayCreateCustomer): ExecuteSwervepayCreateCustomer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSwervepayCreateCustomer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSwervepayCreateCustomer;
  static deserializeBinaryFromReader(message: ExecuteSwervepayCreateCustomer, reader: jspb.BinaryReader): ExecuteSwervepayCreateCustomer;
}

export namespace ExecuteSwervepayCreateCustomer {
  export type AsObject = {
  }
}

export class ExecuteSwervepayQueryCustomerDetails extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSwervepayQueryCustomerDetails.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSwervepayQueryCustomerDetails): ExecuteSwervepayQueryCustomerDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSwervepayQueryCustomerDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSwervepayQueryCustomerDetails;
  static deserializeBinaryFromReader(message: ExecuteSwervepayQueryCustomerDetails, reader: jspb.BinaryReader): ExecuteSwervepayQueryCustomerDetails;
}

export namespace ExecuteSwervepayQueryCustomerDetails {
  export type AsObject = {
  }
}

export class ExecuteSwervepayQueryCustomerTokenDetails extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSwervepayQueryCustomerTokenDetails.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSwervepayQueryCustomerTokenDetails): ExecuteSwervepayQueryCustomerTokenDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSwervepayQueryCustomerTokenDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSwervepayQueryCustomerTokenDetails;
  static deserializeBinaryFromReader(message: ExecuteSwervepayQueryCustomerTokenDetails, reader: jspb.BinaryReader): ExecuteSwervepayQueryCustomerTokenDetails;
}

export namespace ExecuteSwervepayQueryCustomerTokenDetails {
  export type AsObject = {
  }
}

export class ExecuteSwervepayQueryQueryCustomerTokens extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSwervepayQueryQueryCustomerTokens.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSwervepayQueryQueryCustomerTokens): ExecuteSwervepayQueryQueryCustomerTokens.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSwervepayQueryQueryCustomerTokens, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSwervepayQueryQueryCustomerTokens;
  static deserializeBinaryFromReader(message: ExecuteSwervepayQueryQueryCustomerTokens, reader: jspb.BinaryReader): ExecuteSwervepayQueryQueryCustomerTokens;
}

export namespace ExecuteSwervepayQueryQueryCustomerTokens {
  export type AsObject = {
  }
}

export class ExecuteSwervepayQueryCustomerTransactions extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSwervepayQueryCustomerTransactions.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSwervepayQueryCustomerTransactions): ExecuteSwervepayQueryCustomerTransactions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSwervepayQueryCustomerTransactions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSwervepayQueryCustomerTransactions;
  static deserializeBinaryFromReader(message: ExecuteSwervepayQueryCustomerTransactions, reader: jspb.BinaryReader): ExecuteSwervepayQueryCustomerTransactions;
}

export namespace ExecuteSwervepayQueryCustomerTransactions {
  export type AsObject = {
  }
}

export class ExecuteSwervepayQueryCustomers extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSwervepayQueryCustomers.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSwervepayQueryCustomers): ExecuteSwervepayQueryCustomers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSwervepayQueryCustomers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSwervepayQueryCustomers;
  static deserializeBinaryFromReader(message: ExecuteSwervepayQueryCustomers, reader: jspb.BinaryReader): ExecuteSwervepayQueryCustomers;
}

export namespace ExecuteSwervepayQueryCustomers {
  export type AsObject = {
  }
}

export class ExecuteSwervepayQueryQueryTransactionDetails extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSwervepayQueryQueryTransactionDetails.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSwervepayQueryQueryTransactionDetails): ExecuteSwervepayQueryQueryTransactionDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSwervepayQueryQueryTransactionDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSwervepayQueryQueryTransactionDetails;
  static deserializeBinaryFromReader(message: ExecuteSwervepayQueryQueryTransactionDetails, reader: jspb.BinaryReader): ExecuteSwervepayQueryQueryTransactionDetails;
}

export namespace ExecuteSwervepayQueryQueryTransactionDetails {
  export type AsObject = {
  }
}

export class ExecuteSwervepayQueryTransactions extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSwervepayQueryTransactions.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSwervepayQueryTransactions): ExecuteSwervepayQueryTransactions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSwervepayQueryTransactions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSwervepayQueryTransactions;
  static deserializeBinaryFromReader(message: ExecuteSwervepayQueryTransactions, reader: jspb.BinaryReader): ExecuteSwervepayQueryTransactions;
}

export namespace ExecuteSwervepayQueryTransactions {
  export type AsObject = {
  }
}

export class ExecuteSwervepayRemoveCustomerToken extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSwervepayRemoveCustomerToken.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSwervepayRemoveCustomerToken): ExecuteSwervepayRemoveCustomerToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSwervepayRemoveCustomerToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSwervepayRemoveCustomerToken;
  static deserializeBinaryFromReader(message: ExecuteSwervepayRemoveCustomerToken, reader: jspb.BinaryReader): ExecuteSwervepayRemoveCustomerToken;
}

export namespace ExecuteSwervepayRemoveCustomerToken {
  export type AsObject = {
  }
}

export class ExecuteSwervepayUpdateCustomer extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSwervepayUpdateCustomer.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSwervepayUpdateCustomer): ExecuteSwervepayUpdateCustomer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSwervepayUpdateCustomer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSwervepayUpdateCustomer;
  static deserializeBinaryFromReader(message: ExecuteSwervepayUpdateCustomer, reader: jspb.BinaryReader): ExecuteSwervepayUpdateCustomer;
}

export namespace ExecuteSwervepayUpdateCustomer {
  export type AsObject = {
  }
}

export class ExecuteSwervepayCreateTransactionAuth extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSwervepayCreateTransactionAuth.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSwervepayCreateTransactionAuth): ExecuteSwervepayCreateTransactionAuth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSwervepayCreateTransactionAuth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSwervepayCreateTransactionAuth;
  static deserializeBinaryFromReader(message: ExecuteSwervepayCreateTransactionAuth, reader: jspb.BinaryReader): ExecuteSwervepayCreateTransactionAuth;
}

export namespace ExecuteSwervepayCreateTransactionAuth {
  export type AsObject = {
  }
}

export class ExecuteSwervepayCreateTransactionCapture extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSwervepayCreateTransactionCapture.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSwervepayCreateTransactionCapture): ExecuteSwervepayCreateTransactionCapture.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSwervepayCreateTransactionCapture, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSwervepayCreateTransactionCapture;
  static deserializeBinaryFromReader(message: ExecuteSwervepayCreateTransactionCapture, reader: jspb.BinaryReader): ExecuteSwervepayCreateTransactionCapture;
}

export namespace ExecuteSwervepayCreateTransactionCapture {
  export type AsObject = {
  }
}

export class ExecuteSwervepayCreateTransactionCredit extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSwervepayCreateTransactionCredit.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSwervepayCreateTransactionCredit): ExecuteSwervepayCreateTransactionCredit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSwervepayCreateTransactionCredit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSwervepayCreateTransactionCredit;
  static deserializeBinaryFromReader(message: ExecuteSwervepayCreateTransactionCredit, reader: jspb.BinaryReader): ExecuteSwervepayCreateTransactionCredit;
}

export namespace ExecuteSwervepayCreateTransactionCredit {
  export type AsObject = {
  }
}

export class ExecuteSwervepayCreateTransactionRefund extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSwervepayCreateTransactionRefund.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSwervepayCreateTransactionRefund): ExecuteSwervepayCreateTransactionRefund.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSwervepayCreateTransactionRefund, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSwervepayCreateTransactionRefund;
  static deserializeBinaryFromReader(message: ExecuteSwervepayCreateTransactionRefund, reader: jspb.BinaryReader): ExecuteSwervepayCreateTransactionRefund;
}

export namespace ExecuteSwervepayCreateTransactionRefund {
  export type AsObject = {
  }
}

export class ExecuteSwervepayCreateTransactionSale extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSwervepayCreateTransactionSale.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSwervepayCreateTransactionSale): ExecuteSwervepayCreateTransactionSale.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSwervepayCreateTransactionSale, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSwervepayCreateTransactionSale;
  static deserializeBinaryFromReader(message: ExecuteSwervepayCreateTransactionSale, reader: jspb.BinaryReader): ExecuteSwervepayCreateTransactionSale;
}

export namespace ExecuteSwervepayCreateTransactionSale {
  export type AsObject = {
  }
}

export class ExecuteSwervepayCreateTransactionValidate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSwervepayCreateTransactionValidate.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSwervepayCreateTransactionValidate): ExecuteSwervepayCreateTransactionValidate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSwervepayCreateTransactionValidate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSwervepayCreateTransactionValidate;
  static deserializeBinaryFromReader(message: ExecuteSwervepayCreateTransactionValidate, reader: jspb.BinaryReader): ExecuteSwervepayCreateTransactionValidate;
}

export namespace ExecuteSwervepayCreateTransactionValidate {
  export type AsObject = {
  }
}

export class ExecuteSwervepayProcessNewTransactionAuth extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSwervepayProcessNewTransactionAuth.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSwervepayProcessNewTransactionAuth): ExecuteSwervepayProcessNewTransactionAuth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSwervepayProcessNewTransactionAuth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSwervepayProcessNewTransactionAuth;
  static deserializeBinaryFromReader(message: ExecuteSwervepayProcessNewTransactionAuth, reader: jspb.BinaryReader): ExecuteSwervepayProcessNewTransactionAuth;
}

export namespace ExecuteSwervepayProcessNewTransactionAuth {
  export type AsObject = {
  }
}

export class ExecuteSwervepayProcessNewTransactionCapture extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSwervepayProcessNewTransactionCapture.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSwervepayProcessNewTransactionCapture): ExecuteSwervepayProcessNewTransactionCapture.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSwervepayProcessNewTransactionCapture, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSwervepayProcessNewTransactionCapture;
  static deserializeBinaryFromReader(message: ExecuteSwervepayProcessNewTransactionCapture, reader: jspb.BinaryReader): ExecuteSwervepayProcessNewTransactionCapture;
}

export namespace ExecuteSwervepayProcessNewTransactionCapture {
  export type AsObject = {
  }
}

export class ExecuteSwervepayProcessNewTransactionCredit extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSwervepayProcessNewTransactionCredit.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSwervepayProcessNewTransactionCredit): ExecuteSwervepayProcessNewTransactionCredit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSwervepayProcessNewTransactionCredit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSwervepayProcessNewTransactionCredit;
  static deserializeBinaryFromReader(message: ExecuteSwervepayProcessNewTransactionCredit, reader: jspb.BinaryReader): ExecuteSwervepayProcessNewTransactionCredit;
}

export namespace ExecuteSwervepayProcessNewTransactionCredit {
  export type AsObject = {
  }
}

export class ExecuteSwervepayProcessNewTransactionRefund extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSwervepayProcessNewTransactionRefund.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSwervepayProcessNewTransactionRefund): ExecuteSwervepayProcessNewTransactionRefund.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSwervepayProcessNewTransactionRefund, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSwervepayProcessNewTransactionRefund;
  static deserializeBinaryFromReader(message: ExecuteSwervepayProcessNewTransactionRefund, reader: jspb.BinaryReader): ExecuteSwervepayProcessNewTransactionRefund;
}

export namespace ExecuteSwervepayProcessNewTransactionRefund {
  export type AsObject = {
  }
}

export class ExecuteSwervepayProcessNewTransactionSale extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSwervepayProcessNewTransactionSale.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSwervepayProcessNewTransactionSale): ExecuteSwervepayProcessNewTransactionSale.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSwervepayProcessNewTransactionSale, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSwervepayProcessNewTransactionSale;
  static deserializeBinaryFromReader(message: ExecuteSwervepayProcessNewTransactionSale, reader: jspb.BinaryReader): ExecuteSwervepayProcessNewTransactionSale;
}

export namespace ExecuteSwervepayProcessNewTransactionSale {
  export type AsObject = {
  }
}

export class ExecuteSwervepayProcessNewTransactionValidate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSwervepayProcessNewTransactionValidate.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSwervepayProcessNewTransactionValidate): ExecuteSwervepayProcessNewTransactionValidate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSwervepayProcessNewTransactionValidate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSwervepayProcessNewTransactionValidate;
  static deserializeBinaryFromReader(message: ExecuteSwervepayProcessNewTransactionValidate, reader: jspb.BinaryReader): ExecuteSwervepayProcessNewTransactionValidate;
}

export namespace ExecuteSwervepayProcessNewTransactionValidate {
  export type AsObject = {
  }
}

export class ExecuteNavigaDTICircCreatePayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNavigaDTICircCreatePayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNavigaDTICircCreatePayment): ExecuteNavigaDTICircCreatePayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNavigaDTICircCreatePayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNavigaDTICircCreatePayment;
  static deserializeBinaryFromReader(message: ExecuteNavigaDTICircCreatePayment, reader: jspb.BinaryReader): ExecuteNavigaDTICircCreatePayment;
}

export namespace ExecuteNavigaDTICircCreatePayment {
  export type AsObject = {
  }
}

export class ExecuteNavigaDTICircChangeBilling extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNavigaDTICircChangeBilling.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNavigaDTICircChangeBilling): ExecuteNavigaDTICircChangeBilling.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNavigaDTICircChangeBilling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNavigaDTICircChangeBilling;
  static deserializeBinaryFromReader(message: ExecuteNavigaDTICircChangeBilling, reader: jspb.BinaryReader): ExecuteNavigaDTICircChangeBilling;
}

export namespace ExecuteNavigaDTICircChangeBilling {
  export type AsObject = {
  }
}

export class ExecuteNavigaDTICSAutoRenewInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNavigaDTICSAutoRenewInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNavigaDTICSAutoRenewInfo): ExecuteNavigaDTICSAutoRenewInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNavigaDTICSAutoRenewInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNavigaDTICSAutoRenewInfo;
  static deserializeBinaryFromReader(message: ExecuteNavigaDTICSAutoRenewInfo, reader: jspb.BinaryReader): ExecuteNavigaDTICSAutoRenewInfo;
}

export namespace ExecuteNavigaDTICSAutoRenewInfo {
  export type AsObject = {
  }
}

export class ExecuteNavigaDTICSAutoTran extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNavigaDTICSAutoTran.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNavigaDTICSAutoTran): ExecuteNavigaDTICSAutoTran.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNavigaDTICSAutoTran, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNavigaDTICSAutoTran;
  static deserializeBinaryFromReader(message: ExecuteNavigaDTICSAutoTran, reader: jspb.BinaryReader): ExecuteNavigaDTICSAutoTran;
}

export namespace ExecuteNavigaDTICSAutoTran {
  export type AsObject = {
  }
}

export class ExecuteNavigaDTICSBillingInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNavigaDTICSBillingInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNavigaDTICSBillingInfo): ExecuteNavigaDTICSBillingInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNavigaDTICSBillingInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNavigaDTICSBillingInfo;
  static deserializeBinaryFromReader(message: ExecuteNavigaDTICSBillingInfo, reader: jspb.BinaryReader): ExecuteNavigaDTICSBillingInfo;
}

export namespace ExecuteNavigaDTICSBillingInfo {
  export type AsObject = {
  }
}

export class ExecuteNavigaDTICSLogin extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNavigaDTICSLogin.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNavigaDTICSLogin): ExecuteNavigaDTICSLogin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNavigaDTICSLogin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNavigaDTICSLogin;
  static deserializeBinaryFromReader(message: ExecuteNavigaDTICSLogin, reader: jspb.BinaryReader): ExecuteNavigaDTICSLogin;
}

export namespace ExecuteNavigaDTICSLogin {
  export type AsObject = {
  }
}

export class ExecuteNavigaDTICSPayInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNavigaDTICSPayInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNavigaDTICSPayInfo): ExecuteNavigaDTICSPayInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNavigaDTICSPayInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNavigaDTICSPayInfo;
  static deserializeBinaryFromReader(message: ExecuteNavigaDTICSPayInfo, reader: jspb.BinaryReader): ExecuteNavigaDTICSPayInfo;
}

export namespace ExecuteNavigaDTICSPayInfo {
  export type AsObject = {
  }
}

export class ExecuteNavigaDTICSPayTran extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNavigaDTICSPayTran.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNavigaDTICSPayTran): ExecuteNavigaDTICSPayTran.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNavigaDTICSPayTran, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNavigaDTICSPayTran;
  static deserializeBinaryFromReader(message: ExecuteNavigaDTICSPayTran, reader: jspb.BinaryReader): ExecuteNavigaDTICSPayTran;
}

export namespace ExecuteNavigaDTICSPayTran {
  export type AsObject = {
  }
}

export class ExecuteNavigaDTICSRenewInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNavigaDTICSRenewInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNavigaDTICSRenewInfo): ExecuteNavigaDTICSRenewInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNavigaDTICSRenewInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNavigaDTICSRenewInfo;
  static deserializeBinaryFromReader(message: ExecuteNavigaDTICSRenewInfo, reader: jspb.BinaryReader): ExecuteNavigaDTICSRenewInfo;
}

export namespace ExecuteNavigaDTICSRenewInfo {
  export type AsObject = {
  }
}

export class ExecuteNavigaDTICSSearchPage extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNavigaDTICSSearchPage.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNavigaDTICSSearchPage): ExecuteNavigaDTICSSearchPage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNavigaDTICSSearchPage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNavigaDTICSSearchPage;
  static deserializeBinaryFromReader(message: ExecuteNavigaDTICSSearchPage, reader: jspb.BinaryReader): ExecuteNavigaDTICSSearchPage;
}

export namespace ExecuteNavigaDTICSSearchPage {
  export type AsObject = {
  }
}

export class ExecuteNavigaDTICSServiceErrorInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNavigaDTICSServiceErrorInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNavigaDTICSServiceErrorInfo): ExecuteNavigaDTICSServiceErrorInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNavigaDTICSServiceErrorInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNavigaDTICSServiceErrorInfo;
  static deserializeBinaryFromReader(message: ExecuteNavigaDTICSServiceErrorInfo, reader: jspb.BinaryReader): ExecuteNavigaDTICSServiceErrorInfo;
}

export namespace ExecuteNavigaDTICSServiceErrorInfo {
  export type AsObject = {
  }
}

export class ExecuteNavigaDTICSServiceErrorTrans extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNavigaDTICSServiceErrorTrans.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNavigaDTICSServiceErrorTrans): ExecuteNavigaDTICSServiceErrorTrans.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNavigaDTICSServiceErrorTrans, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNavigaDTICSServiceErrorTrans;
  static deserializeBinaryFromReader(message: ExecuteNavigaDTICSServiceErrorTrans, reader: jspb.BinaryReader): ExecuteNavigaDTICSServiceErrorTrans;
}

export namespace ExecuteNavigaDTICSServiceErrorTrans {
  export type AsObject = {
  }
}

export class ExecuteNavigaDTICSStopInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNavigaDTICSStopInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNavigaDTICSStopInfo): ExecuteNavigaDTICSStopInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNavigaDTICSStopInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNavigaDTICSStopInfo;
  static deserializeBinaryFromReader(message: ExecuteNavigaDTICSStopInfo, reader: jspb.BinaryReader): ExecuteNavigaDTICSStopInfo;
}

export namespace ExecuteNavigaDTICSStopInfo {
  export type AsObject = {
  }
}

export class ExecuteNavigaDTICSStopTrans extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNavigaDTICSStopTrans.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNavigaDTICSStopTrans): ExecuteNavigaDTICSStopTrans.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNavigaDTICSStopTrans, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNavigaDTICSStopTrans;
  static deserializeBinaryFromReader(message: ExecuteNavigaDTICSStopTrans, reader: jspb.BinaryReader): ExecuteNavigaDTICSStopTrans;
}

export namespace ExecuteNavigaDTICSStopTrans {
  export type AsObject = {
  }
}

export class ExecuteVeradigmGetLocations extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteVeradigmGetLocations.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteVeradigmGetLocations): ExecuteVeradigmGetLocations.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteVeradigmGetLocations, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteVeradigmGetLocations;
  static deserializeBinaryFromReader(message: ExecuteVeradigmGetLocations, reader: jspb.BinaryReader): ExecuteVeradigmGetLocations;
}

export namespace ExecuteVeradigmGetLocations {
  export type AsObject = {
  }
}

export class ExecuteVeradigmGetPatientAccountBalance extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteVeradigmGetPatientAccountBalance.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteVeradigmGetPatientAccountBalance): ExecuteVeradigmGetPatientAccountBalance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteVeradigmGetPatientAccountBalance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteVeradigmGetPatientAccountBalance;
  static deserializeBinaryFromReader(message: ExecuteVeradigmGetPatientAccountBalance, reader: jspb.BinaryReader): ExecuteVeradigmGetPatientAccountBalance;
}

export namespace ExecuteVeradigmGetPatientAccountBalance {
  export type AsObject = {
  }
}

export class ExecuteVeradigmGetPayments extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteVeradigmGetPayments.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteVeradigmGetPayments): ExecuteVeradigmGetPayments.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteVeradigmGetPayments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteVeradigmGetPayments;
  static deserializeBinaryFromReader(message: ExecuteVeradigmGetPayments, reader: jspb.BinaryReader): ExecuteVeradigmGetPayments;
}

export namespace ExecuteVeradigmGetPayments {
  export type AsObject = {
  }
}

export class ExecuteVeradigmGetPlacesOfService extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteVeradigmGetPlacesOfService.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteVeradigmGetPlacesOfService): ExecuteVeradigmGetPlacesOfService.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteVeradigmGetPlacesOfService, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteVeradigmGetPlacesOfService;
  static deserializeBinaryFromReader(message: ExecuteVeradigmGetPlacesOfService, reader: jspb.BinaryReader): ExecuteVeradigmGetPlacesOfService;
}

export namespace ExecuteVeradigmGetPlacesOfService {
  export type AsObject = {
  }
}

export class ExecuteVeradigmSavePaymentTransaction extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteVeradigmSavePaymentTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteVeradigmSavePaymentTransaction): ExecuteVeradigmSavePaymentTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteVeradigmSavePaymentTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteVeradigmSavePaymentTransaction;
  static deserializeBinaryFromReader(message: ExecuteVeradigmSavePaymentTransaction, reader: jspb.BinaryReader): ExecuteVeradigmSavePaymentTransaction;
}

export namespace ExecuteVeradigmSavePaymentTransaction {
  export type AsObject = {
  }
}

export class ExecuteVeradigmSaveRefundTransaction extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteVeradigmSaveRefundTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteVeradigmSaveRefundTransaction): ExecuteVeradigmSaveRefundTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteVeradigmSaveRefundTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteVeradigmSaveRefundTransaction;
  static deserializeBinaryFromReader(message: ExecuteVeradigmSaveRefundTransaction, reader: jspb.BinaryReader): ExecuteVeradigmSaveRefundTransaction;
}

export namespace ExecuteVeradigmSaveRefundTransaction {
  export type AsObject = {
  }
}

export class ExecuteVeradigmSaveVoucherPayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteVeradigmSaveVoucherPayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteVeradigmSaveVoucherPayment): ExecuteVeradigmSaveVoucherPayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteVeradigmSaveVoucherPayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteVeradigmSaveVoucherPayment;
  static deserializeBinaryFromReader(message: ExecuteVeradigmSaveVoucherPayment, reader: jspb.BinaryReader): ExecuteVeradigmSaveVoucherPayment;
}

export namespace ExecuteVeradigmSaveVoucherPayment {
  export type AsObject = {
  }
}

export class ExecuteVeradigmPracticeManagementGetToken extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteVeradigmPracticeManagementGetToken.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteVeradigmPracticeManagementGetToken): ExecuteVeradigmPracticeManagementGetToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteVeradigmPracticeManagementGetToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteVeradigmPracticeManagementGetToken;
  static deserializeBinaryFromReader(message: ExecuteVeradigmPracticeManagementGetToken, reader: jspb.BinaryReader): ExecuteVeradigmPracticeManagementGetToken;
}

export namespace ExecuteVeradigmPracticeManagementGetToken {
  export type AsObject = {
  }
}

export class ExecuteVeradigmPracticeManagementGetUserAuthentication extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteVeradigmPracticeManagementGetUserAuthentication.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteVeradigmPracticeManagementGetUserAuthentication): ExecuteVeradigmPracticeManagementGetUserAuthentication.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteVeradigmPracticeManagementGetUserAuthentication, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteVeradigmPracticeManagementGetUserAuthentication;
  static deserializeBinaryFromReader(message: ExecuteVeradigmPracticeManagementGetUserAuthentication, reader: jspb.BinaryReader): ExecuteVeradigmPracticeManagementGetUserAuthentication;
}

export namespace ExecuteVeradigmPracticeManagementGetUserAuthentication {
  export type AsObject = {
  }
}

export class ExecuteVeradigmPracticeManagementGetLocations extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteVeradigmPracticeManagementGetLocations.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteVeradigmPracticeManagementGetLocations): ExecuteVeradigmPracticeManagementGetLocations.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteVeradigmPracticeManagementGetLocations, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteVeradigmPracticeManagementGetLocations;
  static deserializeBinaryFromReader(message: ExecuteVeradigmPracticeManagementGetLocations, reader: jspb.BinaryReader): ExecuteVeradigmPracticeManagementGetLocations;
}

export namespace ExecuteVeradigmPracticeManagementGetLocations {
  export type AsObject = {
  }
}

export class ExecuteVeradigmPracticeManagementGetPatientAccountBalance extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteVeradigmPracticeManagementGetPatientAccountBalance.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteVeradigmPracticeManagementGetPatientAccountBalance): ExecuteVeradigmPracticeManagementGetPatientAccountBalance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteVeradigmPracticeManagementGetPatientAccountBalance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteVeradigmPracticeManagementGetPatientAccountBalance;
  static deserializeBinaryFromReader(message: ExecuteVeradigmPracticeManagementGetPatientAccountBalance, reader: jspb.BinaryReader): ExecuteVeradigmPracticeManagementGetPatientAccountBalance;
}

export namespace ExecuteVeradigmPracticeManagementGetPatientAccountBalance {
  export type AsObject = {
  }
}

export class ExecuteVeradigmPracticeManagementGetPayments extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteVeradigmPracticeManagementGetPayments.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteVeradigmPracticeManagementGetPayments): ExecuteVeradigmPracticeManagementGetPayments.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteVeradigmPracticeManagementGetPayments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteVeradigmPracticeManagementGetPayments;
  static deserializeBinaryFromReader(message: ExecuteVeradigmPracticeManagementGetPayments, reader: jspb.BinaryReader): ExecuteVeradigmPracticeManagementGetPayments;
}

export namespace ExecuteVeradigmPracticeManagementGetPayments {
  export type AsObject = {
  }
}

export class ExecuteVeradigmPracticeManagementGetPlacesOfService extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteVeradigmPracticeManagementGetPlacesOfService.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteVeradigmPracticeManagementGetPlacesOfService): ExecuteVeradigmPracticeManagementGetPlacesOfService.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteVeradigmPracticeManagementGetPlacesOfService, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteVeradigmPracticeManagementGetPlacesOfService;
  static deserializeBinaryFromReader(message: ExecuteVeradigmPracticeManagementGetPlacesOfService, reader: jspb.BinaryReader): ExecuteVeradigmPracticeManagementGetPlacesOfService;
}

export namespace ExecuteVeradigmPracticeManagementGetPlacesOfService {
  export type AsObject = {
  }
}

export class ExecuteVeradigmPracticeManagementSavePaymentTransaction extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteVeradigmPracticeManagementSavePaymentTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteVeradigmPracticeManagementSavePaymentTransaction): ExecuteVeradigmPracticeManagementSavePaymentTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteVeradigmPracticeManagementSavePaymentTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteVeradigmPracticeManagementSavePaymentTransaction;
  static deserializeBinaryFromReader(message: ExecuteVeradigmPracticeManagementSavePaymentTransaction, reader: jspb.BinaryReader): ExecuteVeradigmPracticeManagementSavePaymentTransaction;
}

export namespace ExecuteVeradigmPracticeManagementSavePaymentTransaction {
  export type AsObject = {
  }
}

export class ExecuteVeradigmPracticeManagementSaveRefundTransaction extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteVeradigmPracticeManagementSaveRefundTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteVeradigmPracticeManagementSaveRefundTransaction): ExecuteVeradigmPracticeManagementSaveRefundTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteVeradigmPracticeManagementSaveRefundTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteVeradigmPracticeManagementSaveRefundTransaction;
  static deserializeBinaryFromReader(message: ExecuteVeradigmPracticeManagementSaveRefundTransaction, reader: jspb.BinaryReader): ExecuteVeradigmPracticeManagementSaveRefundTransaction;
}

export namespace ExecuteVeradigmPracticeManagementSaveRefundTransaction {
  export type AsObject = {
  }
}

export class ExecuteVeradigmPracticeManagementSaveVoucherPayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteVeradigmPracticeManagementSaveVoucherPayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteVeradigmPracticeManagementSaveVoucherPayment): ExecuteVeradigmPracticeManagementSaveVoucherPayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteVeradigmPracticeManagementSaveVoucherPayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteVeradigmPracticeManagementSaveVoucherPayment;
  static deserializeBinaryFromReader(message: ExecuteVeradigmPracticeManagementSaveVoucherPayment, reader: jspb.BinaryReader): ExecuteVeradigmPracticeManagementSaveVoucherPayment;
}

export namespace ExecuteVeradigmPracticeManagementSaveVoucherPayment {
  export type AsObject = {
  }
}

export class ExecutePDCFlowTokenizeCreditCard extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePDCFlowTokenizeCreditCard.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePDCFlowTokenizeCreditCard): ExecutePDCFlowTokenizeCreditCard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePDCFlowTokenizeCreditCard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePDCFlowTokenizeCreditCard;
  static deserializeBinaryFromReader(message: ExecutePDCFlowTokenizeCreditCard, reader: jspb.BinaryReader): ExecutePDCFlowTokenizeCreditCard;
}

export namespace ExecutePDCFlowTokenizeCreditCard {
  export type AsObject = {
  }
}

export class ExecutePDCFlowCCTransaction extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePDCFlowCCTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePDCFlowCCTransaction): ExecutePDCFlowCCTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePDCFlowCCTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePDCFlowCCTransaction;
  static deserializeBinaryFromReader(message: ExecutePDCFlowCCTransaction, reader: jspb.BinaryReader): ExecutePDCFlowCCTransaction;
}

export namespace ExecutePDCFlowCCTransaction {
  export type AsObject = {
  }
}

export class ExecuteAcquiredProcessPayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteAcquiredProcessPayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteAcquiredProcessPayment): ExecuteAcquiredProcessPayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteAcquiredProcessPayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteAcquiredProcessPayment;
  static deserializeBinaryFromReader(message: ExecuteAcquiredProcessPayment, reader: jspb.BinaryReader): ExecuteAcquiredProcessPayment;
}

export namespace ExecuteAcquiredProcessPayment {
  export type AsObject = {
  }
}

export class ExecuteGenericRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteGenericRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteGenericRequest): ExecuteGenericRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteGenericRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteGenericRequest;
  static deserializeBinaryFromReader(message: ExecuteGenericRequest, reader: jspb.BinaryReader): ExecuteGenericRequest;
}

export namespace ExecuteGenericRequest {
  export type AsObject = {
  }
}

export class ExecuteHealthpay24AccountsReceivable extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteHealthpay24AccountsReceivable.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteHealthpay24AccountsReceivable): ExecuteHealthpay24AccountsReceivable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteHealthpay24AccountsReceivable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteHealthpay24AccountsReceivable;
  static deserializeBinaryFromReader(message: ExecuteHealthpay24AccountsReceivable, reader: jspb.BinaryReader): ExecuteHealthpay24AccountsReceivable;
}

export namespace ExecuteHealthpay24AccountsReceivable {
  export type AsObject = {
  }
}

export class ExecuteFinviFacsProcessPayment extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteFinviFacsProcessPayment.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteFinviFacsProcessPayment): ExecuteFinviFacsProcessPayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteFinviFacsProcessPayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteFinviFacsProcessPayment;
  static deserializeBinaryFromReader(message: ExecuteFinviFacsProcessPayment, reader: jspb.BinaryReader): ExecuteFinviFacsProcessPayment;
}

export namespace ExecuteFinviFacsProcessPayment {
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
  INTEGRATION_TYPE_PRIOCOMMERCE: 3900;
  INTEGRATION_TYPE_NAVIGA: 4000;
  INTEGRATION_TYPE_PAYNSECONDS: 4100;
  INTEGRATION_TYPE_SUTHERLANDREV: 4200;
  INTEGRATION_TYPE_FINVI: 4300;
  INTEGRATION_TYPE_NAVIGA_DTI_CIRC: 4400;
  INTEGRATION_TYPE_NAVIGA_DTI_CS: 4500;
  INTEGRATION_TYPE_SWERVEPAY: 4600;
  INTEGRATION_TYPE_VERADIGM: 4700;
  INTEGRATION_TYPE_VERADIGM_PRACTICE_MANAGEMENT: 4800;
  INTEGRATION_TYPE_PDCFLOW: 4900;
  INTEGRATION_TYPE_DEBUG: 5000;
  INTEGRATION_TYPE_ACQUIRED: 5100;
  INTEGRATION_TYPE_GENERIC: 5200;
  INTEGRATION_TYPE_HEALTHPAY24: 5300;
  INTEGRATION_TYPE_FINVI_FACS: 5400;
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
  REQUEST_METHOD_CIRCPRO_LAW_GET_PAYMENT_TYPES: 415;
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
  REQUEST_METHOD_EXPERIAN_STELLA_CARD_ENTRY_TOKENIZATION: 2014;
  REQUEST_METHOD_EXPERIAN_STELLA_PAYMENT_PLANS_BY_PATIENT: 2015;
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
  REQUEST_METHOD_JOURNEY_LIST: 2402;
  REQUEST_METHOD_JOURNEY_UPDATE: 2403;
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
  REQUEST_METHOD_NTVB_COMPLETE_PENDING_ORDER: 2815;
  REQUEST_METHOD_NTVB_PLACE_ORDER: 2816;
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
  REQUEST_METHOD_SHIFT4_ACCESSTOKEN: 3402;
  REQUEST_METHOD_POSCORP_ACCESSTOKEN: 3501;
  REQUEST_METHOD_POSCORP_LOOKUP_GUARANTOR: 3502;
  REQUEST_METHOD_POSCORP_UPDATE_PAYMENT_STATUS: 3503;
  REQUEST_METHOD_PIANO_GET_USER: 3601;
  REQUEST_METHOD_PIANO_UPDATE_USER: 3602;
  REQUEST_METHOD_PIANO_UPDATE_SUBSCRIPTION: 3603;
  REQUEST_METHOD_PIANO_GET_PAYMENT: 3604;
  REQUEST_METHOD_PIANO_LIST_SUBSCRIPTION: 3605;
  REQUEST_METHOD_PIANO_LASTACCESS_CONVERSION: 3606;
  REQUST_METHOD_PIANO_ADD_PAYMENT: 3607;
  REQUEST_METHOD_PIANO_UPDATE_PAYMENT: 3608;
  REQUEST_METHOD_EPIC_GET_TOKEN: 3701;
  REQUEST_METHOD_EPIC_GET_PATIENT: 3702;
  REQUEST_METHOD_EPIC_MATCH_PATIENT: 3703;
  REQUEST_METHOD_EPIC_SEARCH_APPOINTMENT: 3704;
  REQUEST_METHOD_EPIC_FIND_APPOINTMENT: 3705;
  REQUEST_METHOD_EPIC_BOOK_APPOINTMENT: 3706;
  REQUEST_METHOD_EPIC_GET_ACCOUNT: 3707;
  REQUEST_METHOD_EPIC_RECEIVE_COMMUNICATION_2: 3708;
  REQUEST_METHOD_EPIC_RECEIVE_COMMUNICATION_3: 3709;
  REQUEST_METHOD_EPIC_POST_PATIENT_MADE_PAYMENT: 3710;
  REQUEST_METHOD_EPIC_GET_PATIENT_BILLING_DETAILS: 3711;
  REQUEST_METHOD_EPIC_CALL_PATIENT: 3712;
  REQUEST_METHOD_EPIC_HANGUP_CALL: 3713;
  REQUEST_METHOD_EPIC_GET_ACCOUNT_ACCESS_IDENTIFIERS: 3714;
  REQUEST_METHOD_EPIC_GET_ACCOUNT_BILLING_SUMMARY: 3715;
  REQUEST_METHOD_NEWZWARE_PHONE_LOOKUP: 3801;
  REQUEST_METHOD_NEWZWARE_ACCOUNT_INQUIRY: 3802;
  REQUEST_METHOD_NEWZWARE_CC_PAYMENT: 3803;
  REQUEST_METHOD_NEWZWARE_ACH_PAYMENT: 3804;
  REQUEST_METHOD_NEWZWARE_COMPLAINT_HISTORY: 3805;
  REQUEST_METHOD_NEWZWARE_COMPLAINT_UPDATE: 3806;
  REQUEST_METHOD_NEWZWARE_VACATION_RESTART: 3807;
  REQUEST_METHOD_NEWZWARE_VACATION_UPDATE: 3808;
  REQUEST_METHOD_NEWZWARE_PHONE_LOOKUP_MULTI: 3809;
  REQUEST_METHOD_NEWZWARE_SUBSCRIPTION_RESTART: 3810;
  REQUEST_METHOD_PRIOCOMMERCE_ACH_PAYMENT: 3901;
  REQUEST_METHOD_PRIOCOMMERCE_CC_PAYMENT: 3902;
  REQUEST_METHOD_NAVIGA_CREATE_PAYMENT: 4001;
  REQUEST_METHOD_NAVIGA_CHANGE_BILLING: 4002;
  REQUEST_METHOD_PAYNSECONDS_TOKENIZE_CARD: 4101;
  REQUEST_METHOD_SUTHERLANDREV_PAYMENT_CONNECT: 4201;
  REQUEST_METHOD_FINVI_EXILE_QUERY_RECORDS: 4301;
  REQUEST_METHOD_FINVI_EXILE_READ_FIELDS: 4302;
  REQUEST_METHOD_FINVI_EXILE_WRITE_FIELDS: 4303;
  REQUEST_METHOD_FINVI_EXILE_EXECUTE_LOGIC: 4304;
  REQUEST_METHOD_FINVI_EXILE_CREATE_PAYMENT: 4305;
  REQUEST_METHOD_FINVI_EXILE_POP_ACCOUNT: 4306;
  REQUEST_METHOD_NAVIGA_DTI_CIRC_CREATE_PAYMENT: 4401;
  REQUEST_METHOD_NAVIGA_DTI_CIRC_CHANGE_BILLING: 4402;
  REQUEST_METHOD_NAVIGA_DTI_CS_AUTO_RENEW_INFO: 4501;
  REQUEST_METHOD_NAVIGA_DTI_CS_AUTO_TRAN: 4502;
  REQUEST_METHOD_NAVIGA_DTI_CS_BILLING_INFO: 4503;
  REQUEST_METHOD_NAVIGA_DTI_CS_LOGIN: 4504;
  REQUEST_METHOD_NAVIGA_DTI_CS_PAY_INFO: 4505;
  REQUEST_METHOD_NAVIGA_DTI_CS_PAY_TRAN: 4506;
  REQUEST_METHOD_NAVIGA_DTI_CS_RENEW_INFO: 4507;
  REQUEST_METHOD_NAVIGA_DTI_CS_SEARCH_PAGE: 4508;
  REQUEST_METHOD_NAVIGA_DTI_CS_SERVICE_ERROR_INFO: 4509;
  REQUEST_METHOD_NAVIGA_DTI_CS_SERVICE_ERROR_TRANS: 4510;
  REQUEST_METHOD_NAVIGA_DTI_CS_STOP_INFO: 4511;
  REQUEST_METHOD_NAVIGA_DTI_CS_STOP_TRANS: 4512;
  REQUEST_METHOD_SWERVEPAY_CREATE_CUSTOMER: 4601;
  REQUEST_METHOD_SWERVEPAY_QUERY_CUSTOMER_DETAILS: 4602;
  REQUEST_METHOD_SWERVEPAY_QUERY_CUSTOMER_TOKEN_DETAILS: 4603;
  REQUEST_METHOD_SWERVEPAY_QUERY_CUSTOMER_TOKENS: 4604;
  REQUEST_METHOD_SWERVEPAY_QUERY_CUSTOMER_TRANSACTIONS: 4605;
  REQUEST_METHOD_SWERVEPAY_QUERY_CUSTOMERS: 4606;
  REQUEST_METHOD_SWERVEPAY_QUERY_TRANSACTION_DETAILS: 4607;
  REQUEST_METHOD_SWERVEPAY_QUERY_TRANSACTIONS: 4608;
  REQUEST_METHOD_SWERVEPAY_REMOVE_CUSTOMER_TOKEN: 4609;
  REQUEST_METHOD_SWERVEPAY_UPDATE_CUSTOMER: 4610;
  REQUEST_METHOD_SWERVEPAY_CREATE_TRANSACTION_AUTH: 4611;
  REQUEST_METHOD_SWERVEPAY_CREATE_TRANSACTION_CAPTURE: 4612;
  REQUEST_METHOD_SWERVEPAY_CREATE_TRANSACTION_CREDIT: 4613;
  REQUEST_METHOD_SWERVEPAY_CREATE_TRANSACTION_REFUND: 4614;
  REQUEST_METHOD_SWERVEPAY_CREATE_TRANSACTION_SALE: 4615;
  REQUEST_METHOD_SWERVEPAY_CREATE_TRANSACTION_VALIDATE: 4616;
  REQUEST_METHOD_SWERVEPAY_PROCESS_NEW_TRANSACTION_AUTH: 4617;
  REQUEST_METHOD_SWERVEPAY_PROCESS_NEW_TRANSACTION_CAPTURE: 4618;
  REQUEST_METHOD_SWERVEPAY_PROCESS_NEW_TRANSACTION_CREDIT: 4619;
  REQUEST_METHOD_SWERVEPAY_PROCESS_NEW_TRANSACTION_REFUND: 4620;
  REQUEST_METHOD_SWERVEPAY_PROCESS_NEW_TRANSACTION_SALE: 4621;
  REQUEST_METHOD_SWERVEPAY_PROCESS_NEW_TRANSACTION_VALIDATE: 4622;
  REQUEST_METHOD_VERADIGM_GET_TOKEN: 4701;
  REQUEST_METHOD_VERADIGM_GET_USER_AUTHENTICATION: 4702;
  REQUEST_METHOD_VERADIGM_GET_LOCATIONS: 4703;
  REQUEST_METHOD_VERADIGM_GET_PATIENT_ACCOUNT_BALANCE: 4704;
  REQUEST_METHOD_VERADIGM_GET_PAYMENTS: 4705;
  REQUEST_METHOD_VERADIGM_GET_PLACES_OF_SERVICE: 4706;
  REQUEST_METHOD_VERADIGM_SAVE_PAYMENT_TRANSACTION: 4707;
  REQUEST_METHOD_VERADIGM_SAVE_REFUND_TRANSACTION: 4708;
  REQUEST_METHOD_VERADIGM_SAVE_VOUCHER_PAYMENT: 4709;
  REQUEST_METHOD_VERADIGM_PRACTICE_MANAGEMENT_GET_TOKEN: 4801;
  REQUEST_METHOD_VERADIGM_PRACTICE_MANAGEMENT_GET_USER_AUTHENTICATION: 4802;
  REQUEST_METHOD_VERADIGM_PRACTICE_MANAGEMENT_GET_LOCATIONS: 4803;
  REQUEST_METHOD_VERADIGM_PRACTICE_MANAGEMENT_GET_PATIENT_ACCOUNT_BALANCE: 4804;
  REQUEST_METHOD_VERADIGM_PRACTICE_MANAGEMENT_GET_PAYMENTS: 4805;
  REQUEST_METHOD_VERADIGM_PRACTICE_MANAGEMENT_GET_PLACES_OF_SERVICE: 4806;
  REQUEST_METHOD_VERADIGM_PRACTICE_MANAGEMENT_SAVE_PAYMENT_TRANSACTION: 4807;
  REQUEST_METHOD_VERADIGM_PRACTICE_MANAGEMENT_SAVE_REFUND_TRANSACTION: 4808;
  REQUEST_METHOD_VERADIGM_PRACTICE_MANAGEMENT_SAVE_VOUCHER_PAYMENT: 4809;
  REQUEST_METHOD_PDCFLOW_TOKENIZE_CREDIT_CARD: 4901;
  REQUEST_METHOD_PDCFLOW_CC_TRANSACTION: 4902;
  REQUEST_METHOD_DEBUG_ECHO: 5001;
  REQUESET_METHOD_DEBUG_VALIDATE: 5002;
  REQUEST_METHOD_ACQUIRED_PROCESS_PAYMENT: 5101;
  REQUEST_METHOD_GENERIC_REQUEST: 5201;
  REQUEST_METHOD_HEALTHPAY24_ACCOUNTS_RECEIVABLE: 5301;
  REQUEST_METHOD_FINVI_FACS_PROCESS_PAYMENT: 5401;
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

export interface RequestOriginMap {
  REQUEST_ORIGIN_UNKNOWN: 0;
  REQUEST_ORIGIN_IVR: 1;
  REQUEST_ORIGIN_AGENT_ASSISTED: 2;
  REQUEST_ORIGIN_INTEGRATION_LINK: 3;
  REQUEST_ORIGIN_FLOWS: 4;
  REQUEST_ORIGIN_TEXT_2_PAY: 5;
}

export const RequestOrigin: RequestOriginMap;

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
  VALIDATION_CC_EXPIRATION_DATE: 107;
  VALIDATION_INTEGER: 201;
  VALIDATION_FLOAT: 202;
  VALIDATION_CURRENCY_USD: 203;
  VALIDATION_DATE: 301;
  VALIDATION_DOB: 302;
  VALIDATION_BOOL: 401;
  VALIDATION_REGEX: 402;
  VALIDATION_ROUTING: 501;
  VALIDATION_ACCOUNT: 502;
  VALIDATION_TRANSACTION_ID: 601;
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

