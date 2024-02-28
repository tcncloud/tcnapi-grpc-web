// package: api.v1alpha1.wfm
// file: api/v1alpha1/wfm/wfm_adherence_app.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../annotations/authz_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";

export class HelloWorldWFMAdherenceRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloWorldWFMAdherenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HelloWorldWFMAdherenceRequest): HelloWorldWFMAdherenceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelloWorldWFMAdherenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloWorldWFMAdherenceRequest;
  static deserializeBinaryFromReader(message: HelloWorldWFMAdherenceRequest, reader: jspb.BinaryReader): HelloWorldWFMAdherenceRequest;
}

export namespace HelloWorldWFMAdherenceRequest {
  export type AsObject = {
  }
}

export class HelloWorldWFMAdherenceResponse extends jspb.Message {
  getHelloMessage(): string;
  setHelloMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloWorldWFMAdherenceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HelloWorldWFMAdherenceResponse): HelloWorldWFMAdherenceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelloWorldWFMAdherenceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloWorldWFMAdherenceResponse;
  static deserializeBinaryFromReader(message: HelloWorldWFMAdherenceResponse, reader: jspb.BinaryReader): HelloWorldWFMAdherenceResponse;
}

export namespace HelloWorldWFMAdherenceResponse {
  export type AsObject = {
    helloMessage: string,
  }
}

