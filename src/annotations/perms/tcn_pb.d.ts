// package: annotations.perms
// file: annotations/perms/tcn.proto

import * as jspb from "google-protobuf";
import * as annotations_perms_license_pb from "../../annotations/perms/license_pb";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class Tcn extends jspb.Message {
  hasWip(): boolean;
  clearWip(): void;
  getWip(): boolean | undefined;
  setWip(value: boolean): void;

  hasApp(): boolean;
  clearApp(): void;
  getApp(): annotations_perms_license_pb.ApplicationMap[keyof annotations_perms_license_pb.ApplicationMap] | undefined;
  setApp(value: annotations_perms_license_pb.ApplicationMap[keyof annotations_perms_license_pb.ApplicationMap]): void;

  hasCard(): boolean;
  clearCard(): void;
  getCard(): annotations_perms_license_pb.CardMap[keyof annotations_perms_license_pb.CardMap] | undefined;
  setCard(value: annotations_perms_license_pb.CardMap[keyof annotations_perms_license_pb.CardMap]): void;

  clearFeaturesList(): void;
  getFeaturesList(): Array<string>;
  setFeaturesList(value: Array<string>): void;
  addFeatures(value: string, index?: number): string;

  hasBlacklisted(): boolean;
  clearBlacklisted(): void;
  getBlacklisted(): boolean | undefined;
  setBlacklisted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tcn.AsObject;
  static toObject(includeInstance: boolean, msg: Tcn): Tcn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tcn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tcn;
  static deserializeBinaryFromReader(message: Tcn, reader: jspb.BinaryReader): Tcn;
}

export namespace Tcn {
  export type AsObject = {
    wip?: boolean,
    app?: annotations_perms_license_pb.ApplicationMap[keyof annotations_perms_license_pb.ApplicationMap],
    card?: annotations_perms_license_pb.CardMap[keyof annotations_perms_license_pb.CardMap],
    featuresList: Array<string>,
    blacklisted?: boolean,
  }
}

  export const options: jspb.ExtensionFieldInfo<Tcn>;

