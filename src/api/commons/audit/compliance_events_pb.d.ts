// package: api.commons.audit
// file: api/commons/audit/compliance_events.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ComplianceRndQueryEvent extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): void;

  getResult(): string;
  setResult(value: string): void;

  hasDateLastContact(): boolean;
  clearDateLastContact(): void;
  getDateLastContact(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateLastContact(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComplianceRndQueryEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ComplianceRndQueryEvent): ComplianceRndQueryEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComplianceRndQueryEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComplianceRndQueryEvent;
  static deserializeBinaryFromReader(message: ComplianceRndQueryEvent, reader: jspb.BinaryReader): ComplianceRndQueryEvent;
}

export namespace ComplianceRndQueryEvent {
  export type AsObject = {
    orgId: string,
    phoneNumber: string,
    result: string,
    dateLastContact?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

