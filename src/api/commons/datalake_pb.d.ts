// package: api.commons
// file: api/commons/datalake.proto

import * as jspb from "google-protobuf";

export class DLFSDef extends jspb.Message {
  getVfsId(): number;
  setVfsId(value: number): void;

  getIncremental(): boolean;
  setIncremental(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DLFSDef.AsObject;
  static toObject(includeInstance: boolean, msg: DLFSDef): DLFSDef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DLFSDef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DLFSDef;
  static deserializeBinaryFromReader(message: DLFSDef, reader: jspb.BinaryReader): DLFSDef;
}

export namespace DLFSDef {
  export type AsObject = {
    vfsId: number,
    incremental: boolean,
  }
}

export class DLFSDefs extends jspb.Message {
  clearDefsList(): void;
  getDefsList(): Array<DLFSDef>;
  setDefsList(value: Array<DLFSDef>): void;
  addDefs(value?: DLFSDef, index?: number): DLFSDef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DLFSDefs.AsObject;
  static toObject(includeInstance: boolean, msg: DLFSDefs): DLFSDefs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DLFSDefs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DLFSDefs;
  static deserializeBinaryFromReader(message: DLFSDefs, reader: jspb.BinaryReader): DLFSDefs;
}

export namespace DLFSDefs {
  export type AsObject = {
    defsList: Array<DLFSDef.AsObject>,
  }
}

