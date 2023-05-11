// package: api.commons.audit
// file: api/commons/audit/events.proto

import * as jspb from "google-protobuf";

export class DummyEvent extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DummyEvent.AsObject;
  static toObject(includeInstance: boolean, msg: DummyEvent): DummyEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DummyEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DummyEvent;
  static deserializeBinaryFromReader(message: DummyEvent, reader: jspb.BinaryReader): DummyEvent;
}

export namespace DummyEvent {
  export type AsObject = {
    message: string,
  }
}

