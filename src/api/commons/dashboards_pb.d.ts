// package: api.commons
// file: api/commons/dashboards.proto

import * as jspb from "google-protobuf";

export class DashboardReference extends jspb.Message {
  getResourceId(): string;
  setResourceId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardReference.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardReference): DashboardReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardReference;
  static deserializeBinaryFromReader(message: DashboardReference, reader: jspb.BinaryReader): DashboardReference;
}

export namespace DashboardReference {
  export type AsObject = {
    resourceId: string,
    title: string,
  }
}

