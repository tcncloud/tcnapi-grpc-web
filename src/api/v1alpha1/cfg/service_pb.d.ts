// package: api.v1alpha1.cfg
// file: api/v1alpha1/cfg/service.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../annotations/authz_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";

export class GetWebAgentConfigReq extends jspb.Message {
  getRegionId(): string;
  setRegionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWebAgentConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetWebAgentConfigReq): GetWebAgentConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWebAgentConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWebAgentConfigReq;
  static deserializeBinaryFromReader(message: GetWebAgentConfigReq, reader: jspb.BinaryReader): GetWebAgentConfigReq;
}

export namespace GetWebAgentConfigReq {
  export type AsObject = {
    regionId: string,
  }
}

export class WebAgent extends jspb.Message {
  hasOpenSips(): boolean;
  clearOpenSips(): void;
  getOpenSips(): WebAgent.OpenSips | undefined;
  setOpenSips(value?: WebAgent.OpenSips): void;

  hasEnginePriority(): boolean;
  clearEnginePriority(): void;
  getEnginePriority(): WebAgent.EnginePriority | undefined;
  setEnginePriority(value?: WebAgent.EnginePriority): void;

  getLogLevel(): number;
  setLogLevel(value: number): void;

  getUseStun(): number;
  setUseStun(value: number): void;

  getUseFastStun(): number;
  setUseFastStun(value: number): void;

  getUseFastIce(): number;
  setUseFastIce(value: number): void;

  getIceTimeout(): number;
  setIceTimeout(value: number): void;

  getSetFinalCodec(): number;
  setSetFinalCodec(value: number): void;

  getUseRport(): number;
  setUseRport(value: number): void;

  hasServer(): boolean;
  clearServer(): void;
  getServer(): WebAgent.Server | undefined;
  setServer(value?: WebAgent.Server): void;

  getBaseUrl(): string;
  setBaseUrl(value: string): void;

  getStunServerAddress(): string;
  setStunServerAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebAgent.AsObject;
  static toObject(includeInstance: boolean, msg: WebAgent): WebAgent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebAgent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebAgent;
  static deserializeBinaryFromReader(message: WebAgent, reader: jspb.BinaryReader): WebAgent;
}

export namespace WebAgent {
  export type AsObject = {
    openSips?: WebAgent.OpenSips.AsObject,
    enginePriority?: WebAgent.EnginePriority.AsObject,
    logLevel: number,
    useStun: number,
    useFastStun: number,
    useFastIce: number,
    iceTimeout: number,
    setFinalCodec: number,
    useRport: number,
    server?: WebAgent.Server.AsObject,
    baseUrl: string,
    stunServerAddress: string,
  }

  export class OpenSips extends jspb.Message {
    getAddress(): string;
    setAddress(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OpenSips.AsObject;
    static toObject(includeInstance: boolean, msg: OpenSips): OpenSips.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OpenSips, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OpenSips;
    static deserializeBinaryFromReader(message: OpenSips, reader: jspb.BinaryReader): OpenSips;
  }

  export namespace OpenSips {
    export type AsObject = {
      address: string,
    }
  }

  export class EnginePriority extends jspb.Message {
    getJava(): number;
    setJava(value: number): void;

    getWebrtc(): number;
    setWebrtc(value: number): void;

    getNs(): number;
    setNs(value: number): void;

    getFlash(): number;
    setFlash(value: number): void;

    getApp(): number;
    setApp(value: number): void;

    getP2p(): number;
    setP2p(value: number): void;

    getAccessNum(): number;
    setAccessNum(value: number): void;

    getNative(): number;
    setNative(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnginePriority.AsObject;
    static toObject(includeInstance: boolean, msg: EnginePriority): EnginePriority.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EnginePriority, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnginePriority;
    static deserializeBinaryFromReader(message: EnginePriority, reader: jspb.BinaryReader): EnginePriority;
  }

  export namespace EnginePriority {
    export type AsObject = {
      java: number,
      webrtc: number,
      ns: number,
      flash: number,
      app: number,
      p2p: number,
      accessNum: number,
      pb_native: number,
    }
  }

  export class Server extends jspb.Message {
    getSip(): string;
    setSip(value: string): void;

    getWebrtc(): string;
    setWebrtc(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Server.AsObject;
    static toObject(includeInstance: boolean, msg: Server): Server.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Server, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Server;
    static deserializeBinaryFromReader(message: Server, reader: jspb.BinaryReader): Server;
  }

  export namespace Server {
    export type AsObject = {
      sip: string,
      webrtc: string,
    }
  }
}

