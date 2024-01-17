// package: api.v1alpha1.workflows
// file: api/v1alpha1/workflows/service.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../annotations/authz_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class PersistedWorkflowDefinition extends jspb.Message {
  getFlowDefinitionId(): string;
  setFlowDefinitionId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getApplication(): string;
  setApplication(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearLabelsList(): void;
  getLabelsList(): Array<string>;
  setLabelsList(value: Array<string>): void;
  addLabels(value: string, index?: number): string;

  getDescription(): string;
  setDescription(value: string): void;

  getDefinition(): string;
  setDefinition(value: string): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getExtra(): string;
  setExtra(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersistedWorkflowDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: PersistedWorkflowDefinition): PersistedWorkflowDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PersistedWorkflowDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersistedWorkflowDefinition;
  static deserializeBinaryFromReader(message: PersistedWorkflowDefinition, reader: jspb.BinaryReader): PersistedWorkflowDefinition;
}

export namespace PersistedWorkflowDefinition {
  export type AsObject = {
    flowDefinitionId: string,
    orgId: string,
    application: string,
    name: string,
    labelsList: Array<string>,
    description: string,
    definition: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    extra: string,
  }
}

export class CreateWorkflowDefinitionRequest extends jspb.Message {
  hasWorkflowDefinition(): boolean;
  clearWorkflowDefinition(): void;
  getWorkflowDefinition(): PersistedWorkflowDefinition | undefined;
  setWorkflowDefinition(value?: PersistedWorkflowDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWorkflowDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWorkflowDefinitionRequest): CreateWorkflowDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateWorkflowDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWorkflowDefinitionRequest;
  static deserializeBinaryFromReader(message: CreateWorkflowDefinitionRequest, reader: jspb.BinaryReader): CreateWorkflowDefinitionRequest;
}

export namespace CreateWorkflowDefinitionRequest {
  export type AsObject = {
    workflowDefinition?: PersistedWorkflowDefinition.AsObject,
  }
}

export class CreateWorkflowDefinitionResponse extends jspb.Message {
  hasWorkflowDefinition(): boolean;
  clearWorkflowDefinition(): void;
  getWorkflowDefinition(): PersistedWorkflowDefinition | undefined;
  setWorkflowDefinition(value?: PersistedWorkflowDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWorkflowDefinitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWorkflowDefinitionResponse): CreateWorkflowDefinitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateWorkflowDefinitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWorkflowDefinitionResponse;
  static deserializeBinaryFromReader(message: CreateWorkflowDefinitionResponse, reader: jspb.BinaryReader): CreateWorkflowDefinitionResponse;
}

export namespace CreateWorkflowDefinitionResponse {
  export type AsObject = {
    workflowDefinition?: PersistedWorkflowDefinition.AsObject,
  }
}

export class GetWorkflowDefinitionRequest extends jspb.Message {
  getWorkflowDefinitionId(): string;
  setWorkflowDefinitionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkflowDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkflowDefinitionRequest): GetWorkflowDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWorkflowDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkflowDefinitionRequest;
  static deserializeBinaryFromReader(message: GetWorkflowDefinitionRequest, reader: jspb.BinaryReader): GetWorkflowDefinitionRequest;
}

export namespace GetWorkflowDefinitionRequest {
  export type AsObject = {
    workflowDefinitionId: string,
  }
}

export class GetWorkflowDefinitionResponse extends jspb.Message {
  hasWorkflowDefinition(): boolean;
  clearWorkflowDefinition(): void;
  getWorkflowDefinition(): PersistedWorkflowDefinition | undefined;
  setWorkflowDefinition(value?: PersistedWorkflowDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkflowDefinitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkflowDefinitionResponse): GetWorkflowDefinitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWorkflowDefinitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkflowDefinitionResponse;
  static deserializeBinaryFromReader(message: GetWorkflowDefinitionResponse, reader: jspb.BinaryReader): GetWorkflowDefinitionResponse;
}

export namespace GetWorkflowDefinitionResponse {
  export type AsObject = {
    workflowDefinition?: PersistedWorkflowDefinition.AsObject,
  }
}

export class ListWorkflowDefinitionsRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getApplication(): string;
  setApplication(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkflowDefinitionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkflowDefinitionsRequest): ListWorkflowDefinitionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWorkflowDefinitionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkflowDefinitionsRequest;
  static deserializeBinaryFromReader(message: ListWorkflowDefinitionsRequest, reader: jspb.BinaryReader): ListWorkflowDefinitionsRequest;
}

export namespace ListWorkflowDefinitionsRequest {
  export type AsObject = {
    orgId: string,
    application: string,
  }
}

export class ListWorkflowDefinitionsResponse extends jspb.Message {
  hasWorkflowDefinition(): boolean;
  clearWorkflowDefinition(): void;
  getWorkflowDefinition(): PersistedWorkflowDefinition | undefined;
  setWorkflowDefinition(value?: PersistedWorkflowDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkflowDefinitionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkflowDefinitionsResponse): ListWorkflowDefinitionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWorkflowDefinitionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkflowDefinitionsResponse;
  static deserializeBinaryFromReader(message: ListWorkflowDefinitionsResponse, reader: jspb.BinaryReader): ListWorkflowDefinitionsResponse;
}

export namespace ListWorkflowDefinitionsResponse {
  export type AsObject = {
    workflowDefinition?: PersistedWorkflowDefinition.AsObject,
  }
}

export class UpdateWorkflowDefinitionRequest extends jspb.Message {
  hasWorkflowDefinition(): boolean;
  clearWorkflowDefinition(): void;
  getWorkflowDefinition(): PersistedWorkflowDefinition | undefined;
  setWorkflowDefinition(value?: PersistedWorkflowDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorkflowDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorkflowDefinitionRequest): UpdateWorkflowDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateWorkflowDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorkflowDefinitionRequest;
  static deserializeBinaryFromReader(message: UpdateWorkflowDefinitionRequest, reader: jspb.BinaryReader): UpdateWorkflowDefinitionRequest;
}

export namespace UpdateWorkflowDefinitionRequest {
  export type AsObject = {
    workflowDefinition?: PersistedWorkflowDefinition.AsObject,
  }
}

export class UpdateWorkflowDefinitionResponse extends jspb.Message {
  hasWorkflowDefinition(): boolean;
  clearWorkflowDefinition(): void;
  getWorkflowDefinition(): PersistedWorkflowDefinition | undefined;
  setWorkflowDefinition(value?: PersistedWorkflowDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorkflowDefinitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorkflowDefinitionResponse): UpdateWorkflowDefinitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateWorkflowDefinitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorkflowDefinitionResponse;
  static deserializeBinaryFromReader(message: UpdateWorkflowDefinitionResponse, reader: jspb.BinaryReader): UpdateWorkflowDefinitionResponse;
}

export namespace UpdateWorkflowDefinitionResponse {
  export type AsObject = {
    workflowDefinition?: PersistedWorkflowDefinition.AsObject,
  }
}

export class DeleteWorkflowDefinitionRequest extends jspb.Message {
  getWorkflowDefinitionId(): string;
  setWorkflowDefinitionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWorkflowDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWorkflowDefinitionRequest): DeleteWorkflowDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteWorkflowDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWorkflowDefinitionRequest;
  static deserializeBinaryFromReader(message: DeleteWorkflowDefinitionRequest, reader: jspb.BinaryReader): DeleteWorkflowDefinitionRequest;
}

export namespace DeleteWorkflowDefinitionRequest {
  export type AsObject = {
    workflowDefinitionId: string,
  }
}

export class DeleteWorkflowDefinitionResponse extends jspb.Message {
  hasWorkflowDefinition(): boolean;
  clearWorkflowDefinition(): void;
  getWorkflowDefinition(): PersistedWorkflowDefinition | undefined;
  setWorkflowDefinition(value?: PersistedWorkflowDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWorkflowDefinitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWorkflowDefinitionResponse): DeleteWorkflowDefinitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteWorkflowDefinitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWorkflowDefinitionResponse;
  static deserializeBinaryFromReader(message: DeleteWorkflowDefinitionResponse, reader: jspb.BinaryReader): DeleteWorkflowDefinitionResponse;
}

export namespace DeleteWorkflowDefinitionResponse {
  export type AsObject = {
    workflowDefinition?: PersistedWorkflowDefinition.AsObject,
  }
}

export class ValidateWorkflowDefinitionRequest extends jspb.Message {
  hasWorkflowDefinition(): boolean;
  clearWorkflowDefinition(): void;
  getWorkflowDefinition(): PersistedWorkflowDefinition | undefined;
  setWorkflowDefinition(value?: PersistedWorkflowDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateWorkflowDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateWorkflowDefinitionRequest): ValidateWorkflowDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidateWorkflowDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateWorkflowDefinitionRequest;
  static deserializeBinaryFromReader(message: ValidateWorkflowDefinitionRequest, reader: jspb.BinaryReader): ValidateWorkflowDefinitionRequest;
}

export namespace ValidateWorkflowDefinitionRequest {
  export type AsObject = {
    workflowDefinition?: PersistedWorkflowDefinition.AsObject,
  }
}

export class ValidateWorkflowDefinitionResponse extends jspb.Message {
  getValid(): boolean;
  setValid(value: boolean): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateWorkflowDefinitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateWorkflowDefinitionResponse): ValidateWorkflowDefinitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidateWorkflowDefinitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateWorkflowDefinitionResponse;
  static deserializeBinaryFromReader(message: ValidateWorkflowDefinitionResponse, reader: jspb.BinaryReader): ValidateWorkflowDefinitionResponse;
}

export namespace ValidateWorkflowDefinitionResponse {
  export type AsObject = {
    valid: boolean,
    error: string,
  }
}

