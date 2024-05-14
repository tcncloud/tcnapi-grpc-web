// package: services.omnichannel.tasks.v1alpha1
// file: services/omnichannel/tasks/v1alpha1/entities.proto

import * as jspb from "google-protobuf";
import * as api_commons_omnichannel_pb from "../../../../api/commons/omnichannel_pb";

export class CancelTaskRequest extends jspb.Message {
  getTaskSid(): string;
  setTaskSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelTaskRequest): CancelTaskRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelTaskRequest;
  static deserializeBinaryFromReader(message: CancelTaskRequest, reader: jspb.BinaryReader): CancelTaskRequest;
}

export namespace CancelTaskRequest {
  export type AsObject = {
    taskSid: string,
  }
}

export class CancelTaskResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelTaskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelTaskResponse): CancelTaskResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelTaskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelTaskResponse;
  static deserializeBinaryFromReader(message: CancelTaskResponse, reader: jspb.BinaryReader): CancelTaskResponse;
}

export namespace CancelTaskResponse {
  export type AsObject = {
  }
}

