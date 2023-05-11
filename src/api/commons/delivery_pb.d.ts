// package: api.commons
// file: api/commons/delivery.proto

import * as jspb from "google-protobuf";

export class Encryption extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Encryption.AsObject;
  static toObject(includeInstance: boolean, msg: Encryption): Encryption.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Encryption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Encryption;
  static deserializeBinaryFromReader(message: Encryption, reader: jspb.BinaryReader): Encryption;
}

export namespace Encryption {
  export type AsObject = {
  }
}

export interface TransferStatusMap {
  TRANSFER_STATUS_WAITING: 0;
  TRANSFER_STATUS_RUNNING: 1;
  TRANSFER_STATUS_DONE_SUCCESS: 2;
  TRANSFER_STATUS_DONE_PARTIAL_FAILURE: 3;
  TRANSFER_STATUS_DONE_TOTAL_FAILURE: 4;
}

export const TransferStatus: TransferStatusMap;

