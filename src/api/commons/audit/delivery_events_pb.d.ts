// package: api.commons.audit
// file: api/commons/audit/delivery_events.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class DeliveryFailureEvent extends jspb.Message {
  getDeliveryDefinitionName(): number;
  setDeliveryDefinitionName(value: number): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getTransactionSid(): number;
  setTransactionSid(value: number): void;

  clearAttachmentNamesList(): void;
  getAttachmentNamesList(): Array<string>;
  setAttachmentNamesList(value: Array<string>): void;
  addAttachmentNames(value: string, index?: number): string;

  hasFailureTime(): boolean;
  clearFailureTime(): void;
  getFailureTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFailureTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getFailureErrorMessage(): string;
  setFailureErrorMessage(value: string): void;

  getDefinition(): string;
  setDefinition(value: string): void;

  getOriginalPayload(): string;
  setOriginalPayload(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeliveryFailureEvent.AsObject;
  static toObject(includeInstance: boolean, msg: DeliveryFailureEvent): DeliveryFailureEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeliveryFailureEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeliveryFailureEvent;
  static deserializeBinaryFromReader(message: DeliveryFailureEvent, reader: jspb.BinaryReader): DeliveryFailureEvent;
}

export namespace DeliveryFailureEvent {
  export type AsObject = {
    deliveryDefinitionName: number,
    orgId: string,
    transactionSid: number,
    attachmentNamesList: Array<string>,
    failureTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    failureErrorMessage: string,
    definition: string,
    originalPayload: string,
  }
}

export class DeliverySuccessEvent extends jspb.Message {
  getDeliveryDefinitionName(): string;
  setDeliveryDefinitionName(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getTransactionSid(): number;
  setTransactionSid(value: number): void;

  clearAttachmentNamesList(): void;
  getAttachmentNamesList(): Array<string>;
  setAttachmentNamesList(value: Array<string>): void;
  addAttachmentNames(value: string, index?: number): string;

  hasSuccessTime(): boolean;
  clearSuccessTime(): void;
  getSuccessTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSuccessTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSuccessMessage(): string;
  setSuccessMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeliverySuccessEvent.AsObject;
  static toObject(includeInstance: boolean, msg: DeliverySuccessEvent): DeliverySuccessEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeliverySuccessEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeliverySuccessEvent;
  static deserializeBinaryFromReader(message: DeliverySuccessEvent, reader: jspb.BinaryReader): DeliverySuccessEvent;
}

export namespace DeliverySuccessEvent {
  export type AsObject = {
    deliveryDefinitionName: string,
    orgId: string,
    transactionSid: number,
    attachmentNamesList: Array<string>,
    successTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    successMessage: string,
  }
}

