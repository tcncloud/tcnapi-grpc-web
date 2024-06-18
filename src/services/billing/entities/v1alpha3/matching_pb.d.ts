// package: services.billing.entities.v1alpha3
// file: services/billing/entities/v1alpha3/matching.proto

import * as jspb from "google-protobuf";

export class CountryCodePrefix extends jspb.Message {
  getCountryCode(): number;
  setCountryCode(value: number): void;

  clearPrefixesList(): void;
  getPrefixesList(): Array<string>;
  setPrefixesList(value: Array<string>): void;
  addPrefixes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountryCodePrefix.AsObject;
  static toObject(includeInstance: boolean, msg: CountryCodePrefix): CountryCodePrefix.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CountryCodePrefix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountryCodePrefix;
  static deserializeBinaryFromReader(message: CountryCodePrefix, reader: jspb.BinaryReader): CountryCodePrefix;
}

export namespace CountryCodePrefix {
  export type AsObject = {
    countryCode: number,
    prefixesList: Array<string>,
  }
}

