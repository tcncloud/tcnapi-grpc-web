// package: api.v1alpha1.workflows
// file: api/v1alpha1/workflows/service.proto

import * as jspb from "google-protobuf";
import * as api_v1alpha1_workflows_entities_pb from "../../../api/v1alpha1/workflows/entities_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class SaveFlowStateRequest extends jspb.Message {
  hasFlowState(): boolean;
  clearFlowState(): void;
  getFlowState(): api_v1alpha1_workflows_entities_pb.FlowState | undefined;
  setFlowState(value?: api_v1alpha1_workflows_entities_pb.FlowState): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveFlowStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveFlowStateRequest): SaveFlowStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveFlowStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveFlowStateRequest;
  static deserializeBinaryFromReader(message: SaveFlowStateRequest, reader: jspb.BinaryReader): SaveFlowStateRequest;
}

export namespace SaveFlowStateRequest {
  export type AsObject = {
    flowState?: api_v1alpha1_workflows_entities_pb.FlowState.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class SaveFlowStateResponse extends jspb.Message {
  hasFlowState(): boolean;
  clearFlowState(): void;
  getFlowState(): api_v1alpha1_workflows_entities_pb.FlowState | undefined;
  setFlowState(value?: api_v1alpha1_workflows_entities_pb.FlowState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveFlowStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SaveFlowStateResponse): SaveFlowStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveFlowStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveFlowStateResponse;
  static deserializeBinaryFromReader(message: SaveFlowStateResponse, reader: jspb.BinaryReader): SaveFlowStateResponse;
}

export namespace SaveFlowStateResponse {
  export type AsObject = {
    flowState?: api_v1alpha1_workflows_entities_pb.FlowState.AsObject,
  }
}

export class GetFlowStateRequest extends jspb.Message {
  getFlowStateId(): string;
  setFlowStateId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFlowStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFlowStateRequest): GetFlowStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFlowStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFlowStateRequest;
  static deserializeBinaryFromReader(message: GetFlowStateRequest, reader: jspb.BinaryReader): GetFlowStateRequest;
}

export namespace GetFlowStateRequest {
  export type AsObject = {
    flowStateId: string,
  }
}

export class GetFlowStateResponse extends jspb.Message {
  hasFlowState(): boolean;
  clearFlowState(): void;
  getFlowState(): api_v1alpha1_workflows_entities_pb.FlowState | undefined;
  setFlowState(value?: api_v1alpha1_workflows_entities_pb.FlowState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFlowStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFlowStateResponse): GetFlowStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFlowStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFlowStateResponse;
  static deserializeBinaryFromReader(message: GetFlowStateResponse, reader: jspb.BinaryReader): GetFlowStateResponse;
}

export namespace GetFlowStateResponse {
  export type AsObject = {
    flowState?: api_v1alpha1_workflows_entities_pb.FlowState.AsObject,
  }
}

export class SaveFlowDefinitionRequest extends jspb.Message {
  hasFlowDefinition(): boolean;
  clearFlowDefinition(): void;
  getFlowDefinition(): api_v1alpha1_workflows_entities_pb.FlowDefinition | undefined;
  setFlowDefinition(value?: api_v1alpha1_workflows_entities_pb.FlowDefinition): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveFlowDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveFlowDefinitionRequest): SaveFlowDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveFlowDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveFlowDefinitionRequest;
  static deserializeBinaryFromReader(message: SaveFlowDefinitionRequest, reader: jspb.BinaryReader): SaveFlowDefinitionRequest;
}

export namespace SaveFlowDefinitionRequest {
  export type AsObject = {
    flowDefinition?: api_v1alpha1_workflows_entities_pb.FlowDefinition.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class SaveFlowDefinitionResponse extends jspb.Message {
  getFlowDefinitionId(): string;
  setFlowDefinitionId(value: string): void;

  hasFlowDefinition(): boolean;
  clearFlowDefinition(): void;
  getFlowDefinition(): api_v1alpha1_workflows_entities_pb.FlowDefinition | undefined;
  setFlowDefinition(value?: api_v1alpha1_workflows_entities_pb.FlowDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveFlowDefinitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SaveFlowDefinitionResponse): SaveFlowDefinitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveFlowDefinitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveFlowDefinitionResponse;
  static deserializeBinaryFromReader(message: SaveFlowDefinitionResponse, reader: jspb.BinaryReader): SaveFlowDefinitionResponse;
}

export namespace SaveFlowDefinitionResponse {
  export type AsObject = {
    flowDefinitionId: string,
    flowDefinition?: api_v1alpha1_workflows_entities_pb.FlowDefinition.AsObject,
  }
}

export class GetFlowDefinitionRequest extends jspb.Message {
  getFlowDefinitionId(): string;
  setFlowDefinitionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFlowDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFlowDefinitionRequest): GetFlowDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFlowDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFlowDefinitionRequest;
  static deserializeBinaryFromReader(message: GetFlowDefinitionRequest, reader: jspb.BinaryReader): GetFlowDefinitionRequest;
}

export namespace GetFlowDefinitionRequest {
  export type AsObject = {
    flowDefinitionId: string,
  }
}

export class GetFlowDefinitionResponse extends jspb.Message {
  hasFlowDefinition(): boolean;
  clearFlowDefinition(): void;
  getFlowDefinition(): api_v1alpha1_workflows_entities_pb.FlowDefinition | undefined;
  setFlowDefinition(value?: api_v1alpha1_workflows_entities_pb.FlowDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFlowDefinitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFlowDefinitionResponse): GetFlowDefinitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFlowDefinitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFlowDefinitionResponse;
  static deserializeBinaryFromReader(message: GetFlowDefinitionResponse, reader: jspb.BinaryReader): GetFlowDefinitionResponse;
}

export namespace GetFlowDefinitionResponse {
  export type AsObject = {
    flowDefinition?: api_v1alpha1_workflows_entities_pb.FlowDefinition.AsObject,
  }
}

