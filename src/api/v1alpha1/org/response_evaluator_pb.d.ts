// package: api.v1alpha1.org
// file: api/v1alpha1/org/response_evaluator.proto

import * as jspb from "google-protobuf";

export class ResponseEvaluator extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getRegularExpression(): string;
  setRegularExpression(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseEvaluator.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseEvaluator): ResponseEvaluator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseEvaluator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseEvaluator;
  static deserializeBinaryFromReader(message: ResponseEvaluator, reader: jspb.BinaryReader): ResponseEvaluator;
}

export namespace ResponseEvaluator {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    regularExpression: string,
  }
}

export class ListResponseEvaluatorsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponseEvaluatorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponseEvaluatorsRequest): ListResponseEvaluatorsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListResponseEvaluatorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponseEvaluatorsRequest;
  static deserializeBinaryFromReader(message: ListResponseEvaluatorsRequest, reader: jspb.BinaryReader): ListResponseEvaluatorsRequest;
}

export namespace ListResponseEvaluatorsRequest {
  export type AsObject = {
  }
}

export class ListResponseEvaluatorsResponse extends jspb.Message {
  clearEvaluatorsList(): void;
  getEvaluatorsList(): Array<ResponseEvaluator>;
  setEvaluatorsList(value: Array<ResponseEvaluator>): void;
  addEvaluators(value?: ResponseEvaluator, index?: number): ResponseEvaluator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponseEvaluatorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponseEvaluatorsResponse): ListResponseEvaluatorsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListResponseEvaluatorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponseEvaluatorsResponse;
  static deserializeBinaryFromReader(message: ListResponseEvaluatorsResponse, reader: jspb.BinaryReader): ListResponseEvaluatorsResponse;
}

export namespace ListResponseEvaluatorsResponse {
  export type AsObject = {
    evaluatorsList: Array<ResponseEvaluator.AsObject>,
  }
}

export class GetResponseEvaluatorRequest extends jspb.Message {
  getEvaluatorId(): string;
  setEvaluatorId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponseEvaluatorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponseEvaluatorRequest): GetResponseEvaluatorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetResponseEvaluatorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponseEvaluatorRequest;
  static deserializeBinaryFromReader(message: GetResponseEvaluatorRequest, reader: jspb.BinaryReader): GetResponseEvaluatorRequest;
}

export namespace GetResponseEvaluatorRequest {
  export type AsObject = {
    evaluatorId: string,
  }
}

export class GetResponseEvaluatorResponse extends jspb.Message {
  hasEvaluator(): boolean;
  clearEvaluator(): void;
  getEvaluator(): ResponseEvaluator | undefined;
  setEvaluator(value?: ResponseEvaluator): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponseEvaluatorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponseEvaluatorResponse): GetResponseEvaluatorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetResponseEvaluatorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponseEvaluatorResponse;
  static deserializeBinaryFromReader(message: GetResponseEvaluatorResponse, reader: jspb.BinaryReader): GetResponseEvaluatorResponse;
}

export namespace GetResponseEvaluatorResponse {
  export type AsObject = {
    evaluator?: ResponseEvaluator.AsObject,
  }
}

export class CreateResponseEvaluatorRequest extends jspb.Message {
  hasEvaluator(): boolean;
  clearEvaluator(): void;
  getEvaluator(): ResponseEvaluator | undefined;
  setEvaluator(value?: ResponseEvaluator): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResponseEvaluatorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResponseEvaluatorRequest): CreateResponseEvaluatorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateResponseEvaluatorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResponseEvaluatorRequest;
  static deserializeBinaryFromReader(message: CreateResponseEvaluatorRequest, reader: jspb.BinaryReader): CreateResponseEvaluatorRequest;
}

export namespace CreateResponseEvaluatorRequest {
  export type AsObject = {
    evaluator?: ResponseEvaluator.AsObject,
  }
}

export class CreateResponseEvaluatorResponse extends jspb.Message {
  hasEvaluator(): boolean;
  clearEvaluator(): void;
  getEvaluator(): ResponseEvaluator | undefined;
  setEvaluator(value?: ResponseEvaluator): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResponseEvaluatorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResponseEvaluatorResponse): CreateResponseEvaluatorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateResponseEvaluatorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResponseEvaluatorResponse;
  static deserializeBinaryFromReader(message: CreateResponseEvaluatorResponse, reader: jspb.BinaryReader): CreateResponseEvaluatorResponse;
}

export namespace CreateResponseEvaluatorResponse {
  export type AsObject = {
    evaluator?: ResponseEvaluator.AsObject,
  }
}

export class UpdateResponseEvaluatorRequest extends jspb.Message {
  hasEvaluator(): boolean;
  clearEvaluator(): void;
  getEvaluator(): ResponseEvaluator | undefined;
  setEvaluator(value?: ResponseEvaluator): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResponseEvaluatorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResponseEvaluatorRequest): UpdateResponseEvaluatorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateResponseEvaluatorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResponseEvaluatorRequest;
  static deserializeBinaryFromReader(message: UpdateResponseEvaluatorRequest, reader: jspb.BinaryReader): UpdateResponseEvaluatorRequest;
}

export namespace UpdateResponseEvaluatorRequest {
  export type AsObject = {
    evaluator?: ResponseEvaluator.AsObject,
  }
}

export class UpdateResponseEvaluatorResponse extends jspb.Message {
  hasEvaluator(): boolean;
  clearEvaluator(): void;
  getEvaluator(): ResponseEvaluator | undefined;
  setEvaluator(value?: ResponseEvaluator): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResponseEvaluatorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResponseEvaluatorResponse): UpdateResponseEvaluatorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateResponseEvaluatorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResponseEvaluatorResponse;
  static deserializeBinaryFromReader(message: UpdateResponseEvaluatorResponse, reader: jspb.BinaryReader): UpdateResponseEvaluatorResponse;
}

export namespace UpdateResponseEvaluatorResponse {
  export type AsObject = {
    evaluator?: ResponseEvaluator.AsObject,
  }
}

export class DeleteResponseEvaluatorRequest extends jspb.Message {
  getEvaluatorId(): string;
  setEvaluatorId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponseEvaluatorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponseEvaluatorRequest): DeleteResponseEvaluatorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteResponseEvaluatorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponseEvaluatorRequest;
  static deserializeBinaryFromReader(message: DeleteResponseEvaluatorRequest, reader: jspb.BinaryReader): DeleteResponseEvaluatorRequest;
}

export namespace DeleteResponseEvaluatorRequest {
  export type AsObject = {
    evaluatorId: string,
  }
}

export class DeleteResponseEvaluatorResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponseEvaluatorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponseEvaluatorResponse): DeleteResponseEvaluatorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteResponseEvaluatorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponseEvaluatorResponse;
  static deserializeBinaryFromReader(message: DeleteResponseEvaluatorResponse, reader: jspb.BinaryReader): DeleteResponseEvaluatorResponse;
}

export namespace DeleteResponseEvaluatorResponse {
  export type AsObject = {
  }
}

