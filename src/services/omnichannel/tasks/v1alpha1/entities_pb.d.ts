// package: services.omnichannel.tasks.v1alpha1
// file: services/omnichannel/tasks/v1alpha1/entities.proto

import * as jspb from "google-protobuf";
import * as api_commons_omnichannel_pb from "../../../../api/commons/omnichannel_pb";

export class CancelTasksRequest extends jspb.Message {
  clearTaskSidList(): void;
  getTaskSidList(): Array<string>;
  setTaskSidList(value: Array<string>): void;
  addTaskSid(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelTasksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelTasksRequest): CancelTasksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelTasksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelTasksRequest;
  static deserializeBinaryFromReader(message: CancelTasksRequest, reader: jspb.BinaryReader): CancelTasksRequest;
}

export namespace CancelTasksRequest {
  export type AsObject = {
    taskSidList: Array<string>,
  }
}

export class CancelTasksResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelTasksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelTasksResponse): CancelTasksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelTasksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelTasksResponse;
  static deserializeBinaryFromReader(message: CancelTasksResponse, reader: jspb.BinaryReader): CancelTasksResponse;
}

export namespace CancelTasksResponse {
  export type AsObject = {
  }
}

