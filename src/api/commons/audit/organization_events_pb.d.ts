// package: api.commons.audit
// file: api/commons/audit/organization_events.proto

import * as jspb from "google-protobuf";

export class UserAccessTokenExpiringEvent extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserAccessTokenExpiringEvent.AsObject;
  static toObject(includeInstance: boolean, msg: UserAccessTokenExpiringEvent): UserAccessTokenExpiringEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserAccessTokenExpiringEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserAccessTokenExpiringEvent;
  static deserializeBinaryFromReader(message: UserAccessTokenExpiringEvent, reader: jspb.BinaryReader): UserAccessTokenExpiringEvent;
}

export namespace UserAccessTokenExpiringEvent {
  export type AsObject = {
  }
}

