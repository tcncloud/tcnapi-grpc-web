// package: api.commons.org
// file: api/commons/org/idp.proto

import * as jspb from "google-protobuf";

export class IdpClient extends jspb.Message {
  getIdpClientId(): string;
  setIdpClientId(value: string): void;

  getSecret(): string;
  setSecret(value: string): void;

  clearRedirectUrisList(): void;
  getRedirectUrisList(): Array<string>;
  setRedirectUrisList(value: Array<string>): void;
  addRedirectUris(value: string, index?: number): string;

  clearTrustedPeersList(): void;
  getTrustedPeersList(): Array<string>;
  setTrustedPeersList(value: Array<string>): void;
  addTrustedPeers(value: string, index?: number): string;

  getPublic(): boolean;
  setPublic(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  getLogoUrl(): string;
  setLogoUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdpClient.AsObject;
  static toObject(includeInstance: boolean, msg: IdpClient): IdpClient.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdpClient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdpClient;
  static deserializeBinaryFromReader(message: IdpClient, reader: jspb.BinaryReader): IdpClient;
}

export namespace IdpClient {
  export type AsObject = {
    idpClientId: string,
    secret: string,
    redirectUrisList: Array<string>,
    trustedPeersList: Array<string>,
    pb_public: boolean,
    name: string,
    logoUrl: string,
  }
}

