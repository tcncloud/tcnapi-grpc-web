// package: services.billing.entities.v1alpha4
// file: services/billing/entities/v1alpha4/tags.proto

import * as jspb from "google-protobuf";

export class BillingTag extends jspb.Message {
  getBillingTagId(): string;
  setBillingTagId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingTag.AsObject;
  static toObject(includeInstance: boolean, msg: BillingTag): BillingTag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingTag;
  static deserializeBinaryFromReader(message: BillingTag, reader: jspb.BinaryReader): BillingTag;
}

export namespace BillingTag {
  export type AsObject = {
    billingTagId: string,
    name: string,
  }
}

