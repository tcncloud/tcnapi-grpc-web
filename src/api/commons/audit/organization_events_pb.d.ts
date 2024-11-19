// package: api.commons.audit
// file: api/commons/audit/organization_events.proto

import * as jspb from "google-protobuf";

export class AccessTokensExpiringEvent extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getReport(): string;
  setReport(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccessTokensExpiringEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AccessTokensExpiringEvent): AccessTokensExpiringEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccessTokensExpiringEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccessTokensExpiringEvent;
  static deserializeBinaryFromReader(message: AccessTokensExpiringEvent, reader: jspb.BinaryReader): AccessTokensExpiringEvent;
}

export namespace AccessTokensExpiringEvent {
  export type AsObject = {
    orgId: string,
    report: string,
  }
}

