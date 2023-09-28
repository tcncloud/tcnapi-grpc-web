// package: api.v1alpha1.workflows
// file: api/v1alpha1/workflows/service.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../annotations/authz_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class PersistedFlowDefinition extends jspb.Message {
  getFlowDefinitionId(): string;
  setFlowDefinitionId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getApplication(): string;
  setApplication(value: string): void;

  getName(): string;
  setName(value: string): void;

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
  toObject(includeInstance?: boolean): PersistedFlowDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: PersistedFlowDefinition): PersistedFlowDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PersistedFlowDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersistedFlowDefinition;
  static deserializeBinaryFromReader(message: PersistedFlowDefinition, reader: jspb.BinaryReader): PersistedFlowDefinition;
}

export namespace PersistedFlowDefinition {
  export type AsObject = {
    flowDefinitionId: string,
    orgId: string,
    application: string,
    name: string,
    description: string,
    definition: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    extra: string,
  }
}

export class CreateFlowDefinitionRequest extends jspb.Message {
  hasFlowDefinition(): boolean;
  clearFlowDefinition(): void;
  getFlowDefinition(): PersistedFlowDefinition | undefined;
  setFlowDefinition(value?: PersistedFlowDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFlowDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFlowDefinitionRequest): CreateFlowDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFlowDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFlowDefinitionRequest;
  static deserializeBinaryFromReader(message: CreateFlowDefinitionRequest, reader: jspb.BinaryReader): CreateFlowDefinitionRequest;
}

export namespace CreateFlowDefinitionRequest {
  export type AsObject = {
    flowDefinition?: PersistedFlowDefinition.AsObject,
  }
}

export class CreateFlowDefinitionResponse extends jspb.Message {
  hasFlowDefinition(): boolean;
  clearFlowDefinition(): void;
  getFlowDefinition(): PersistedFlowDefinition | undefined;
  setFlowDefinition(value?: PersistedFlowDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFlowDefinitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFlowDefinitionResponse): CreateFlowDefinitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFlowDefinitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFlowDefinitionResponse;
  static deserializeBinaryFromReader(message: CreateFlowDefinitionResponse, reader: jspb.BinaryReader): CreateFlowDefinitionResponse;
}

export namespace CreateFlowDefinitionResponse {
  export type AsObject = {
    flowDefinition?: PersistedFlowDefinition.AsObject,
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
  getFlowDefinition(): PersistedFlowDefinition | undefined;
  setFlowDefinition(value?: PersistedFlowDefinition): void;

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
    flowDefinition?: PersistedFlowDefinition.AsObject,
  }
}

export class ListFlowDefinitionsRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getApplication(): string;
  setApplication(value: string): void;

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
    orgId: string,
    application: string,
  }
}

export class ListFlowDefinitionsResponse extends jspb.Message {
  hasFlowDefinition(): boolean;
  clearFlowDefinition(): void;
  getFlowDefinition(): PersistedFlowDefinition | undefined;
  setFlowDefinition(value?: PersistedFlowDefinition): void;

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
    flowDefinition?: PersistedFlowDefinition.AsObject,
  }
}

export class UpdateFlowDefinitionRequest extends jspb.Message {
  hasFlowDefinition(): boolean;
  clearFlowDefinition(): void;
  getFlowDefinition(): PersistedFlowDefinition | undefined;
  setFlowDefinition(value?: PersistedFlowDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFlowDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFlowDefinitionRequest): UpdateFlowDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFlowDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFlowDefinitionRequest;
  static deserializeBinaryFromReader(message: UpdateFlowDefinitionRequest, reader: jspb.BinaryReader): UpdateFlowDefinitionRequest;
}

export namespace UpdateFlowDefinitionRequest {
  export type AsObject = {
    flowDefinition?: PersistedFlowDefinition.AsObject,
  }
}

export class UpdateFlowDefinitionResponse extends jspb.Message {
  hasFlowDefinition(): boolean;
  clearFlowDefinition(): void;
  getFlowDefinition(): PersistedFlowDefinition | undefined;
  setFlowDefinition(value?: PersistedFlowDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFlowDefinitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFlowDefinitionResponse): UpdateFlowDefinitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFlowDefinitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFlowDefinitionResponse;
  static deserializeBinaryFromReader(message: UpdateFlowDefinitionResponse, reader: jspb.BinaryReader): UpdateFlowDefinitionResponse;
}

export namespace UpdateFlowDefinitionResponse {
  export type AsObject = {
    flowDefinition?: PersistedFlowDefinition.AsObject,
  }
}

export class ValidateFlowDefinitionRequest extends jspb.Message {
  hasFlowDefinition(): boolean;
  clearFlowDefinition(): void;
  getFlowDefinition(): PersistedFlowDefinition | undefined;
  setFlowDefinition(value?: PersistedFlowDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateFlowDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateFlowDefinitionRequest): ValidateFlowDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidateFlowDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateFlowDefinitionRequest;
  static deserializeBinaryFromReader(message: ValidateFlowDefinitionRequest, reader: jspb.BinaryReader): ValidateFlowDefinitionRequest;
}

export namespace ValidateFlowDefinitionRequest {
  export type AsObject = {
    flowDefinition?: PersistedFlowDefinition.AsObject,
  }
}

export class ValidateFlowDefinitionResponse extends jspb.Message {
  getValid(): boolean;
  setValid(value: boolean): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateFlowDefinitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateFlowDefinitionResponse): ValidateFlowDefinitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidateFlowDefinitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateFlowDefinitionResponse;
  static deserializeBinaryFromReader(message: ValidateFlowDefinitionResponse, reader: jspb.BinaryReader): ValidateFlowDefinitionResponse;
}

export namespace ValidateFlowDefinitionResponse {
  export type AsObject = {
    valid: boolean,
    error: string,
  }
}

