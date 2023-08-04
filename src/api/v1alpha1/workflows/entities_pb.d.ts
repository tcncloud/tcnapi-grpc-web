// package: api.v1alpha1.workflows
// file: api/v1alpha1/workflows/entities.proto

import * as jspb from "google-protobuf";
import * as api_commons_workflows_entities_pb from "../../../api/commons/workflows/entities_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class ListFlowDefinitionsRequest extends jspb.Message {
  getFilter(): string;
  setFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFlowDefinitionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFlowDefinitionsRequest): ListFlowDefinitionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFlowDefinitionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFlowDefinitionsRequest;
  static deserializeBinaryFromReader(message: ListFlowDefinitionsRequest, reader: jspb.BinaryReader): ListFlowDefinitionsRequest;
}

export namespace ListFlowDefinitionsRequest {
  export type AsObject = {
    filter: string,
  }
}

export class ListFlowDefinitionsResponse extends jspb.Message {
  clearFlowDefinitionsList(): void;
  getFlowDefinitionsList(): Array<api_commons_workflows_entities_pb.FlowDefinition>;
  setFlowDefinitionsList(value: Array<api_commons_workflows_entities_pb.FlowDefinition>): void;
  addFlowDefinitions(value?: api_commons_workflows_entities_pb.FlowDefinition, index?: number): api_commons_workflows_entities_pb.FlowDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFlowDefinitionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFlowDefinitionsResponse): ListFlowDefinitionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFlowDefinitionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFlowDefinitionsResponse;
  static deserializeBinaryFromReader(message: ListFlowDefinitionsResponse, reader: jspb.BinaryReader): ListFlowDefinitionsResponse;
}

export namespace ListFlowDefinitionsResponse {
  export type AsObject = {
    flowDefinitionsList: Array<api_commons_workflows_entities_pb.FlowDefinition.AsObject>,
  }
}

export class SaveFlowDefinitionRequest extends jspb.Message {
  hasFlowDefinition(): boolean;
  clearFlowDefinition(): void;
  getFlowDefinition(): api_commons_workflows_entities_pb.FlowDefinition | undefined;
  setFlowDefinition(value?: api_commons_workflows_entities_pb.FlowDefinition): void;

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
    flowDefinition?: api_commons_workflows_entities_pb.FlowDefinition.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class SaveFlowDefinitionResponse extends jspb.Message {
  getFlowDefinitionId(): string;
  setFlowDefinitionId(value: string): void;

  hasFlowDefinition(): boolean;
  clearFlowDefinition(): void;
  getFlowDefinition(): api_commons_workflows_entities_pb.FlowDefinition | undefined;
  setFlowDefinition(value?: api_commons_workflows_entities_pb.FlowDefinition): void;

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
    flowDefinition?: api_commons_workflows_entities_pb.FlowDefinition.AsObject,
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
  getFlowDefinition(): api_commons_workflows_entities_pb.FlowDefinition | undefined;
  setFlowDefinition(value?: api_commons_workflows_entities_pb.FlowDefinition): void;

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
    flowDefinition?: api_commons_workflows_entities_pb.FlowDefinition.AsObject,
  }
}

export class DeleteFlowDefinitionRequest extends jspb.Message {
  getFlowDefinitionId(): string;
  setFlowDefinitionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFlowDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFlowDefinitionRequest): DeleteFlowDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFlowDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFlowDefinitionRequest;
  static deserializeBinaryFromReader(message: DeleteFlowDefinitionRequest, reader: jspb.BinaryReader): DeleteFlowDefinitionRequest;
}

export namespace DeleteFlowDefinitionRequest {
  export type AsObject = {
    flowDefinitionId: string,
  }
}

export class DeleteFlowDefinitionResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFlowDefinitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFlowDefinitionResponse): DeleteFlowDefinitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFlowDefinitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFlowDefinitionResponse;
  static deserializeBinaryFromReader(message: DeleteFlowDefinitionResponse, reader: jspb.BinaryReader): DeleteFlowDefinitionResponse;
}

export namespace DeleteFlowDefinitionResponse {
  export type AsObject = {
    result: boolean,
  }
}

