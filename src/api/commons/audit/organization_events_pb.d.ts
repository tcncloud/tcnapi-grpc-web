// package: api.commons.audit
// file: api/commons/audit/organization_events.proto

import * as jspb from "google-protobuf";

export class UsersAccessTokensExpiringEvent extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getReport(): string;
  setReport(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsersAccessTokensExpiringEvent.AsObject;
  static toObject(includeInstance: boolean, msg: UsersAccessTokensExpiringEvent): UsersAccessTokensExpiringEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsersAccessTokensExpiringEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsersAccessTokensExpiringEvent;
  static deserializeBinaryFromReader(message: UsersAccessTokensExpiringEvent, reader: jspb.BinaryReader): UsersAccessTokensExpiringEvent;
}

export namespace UsersAccessTokensExpiringEvent {
  export type AsObject = {
    orgId: string,
    report: string,
  }
}

