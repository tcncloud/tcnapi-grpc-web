// package: api.v1alpha1.scorecards
// file: api/v1alpha1/scorecards/smart_evaluation.proto

import * as jspb from "google-protobuf";
import * as api_commons_omnichannel_pb from "../../../api/commons/omnichannel_pb";
import * as api_commons_scorecards_pb from "../../../api/commons/scorecards_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class CreateSmartEvaluationRequest extends jspb.Message {
  hasSmartEvaluation(): boolean;
  clearSmartEvaluation(): void;
  getSmartEvaluation(): api_commons_scorecards_pb.SmartEvaluation | undefined;
  setSmartEvaluation(value?: api_commons_scorecards_pb.SmartEvaluation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSmartEvaluationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSmartEvaluationRequest): CreateSmartEvaluationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSmartEvaluationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSmartEvaluationRequest;
  static deserializeBinaryFromReader(message: CreateSmartEvaluationRequest, reader: jspb.BinaryReader): CreateSmartEvaluationRequest;
}

export namespace CreateSmartEvaluationRequest {
  export type AsObject = {
    smartEvaluation?: api_commons_scorecards_pb.SmartEvaluation.AsObject,
  }
}

export class CreateSmartEvaluationResponse extends jspb.Message {
  hasSmartEvaluation(): boolean;
  clearSmartEvaluation(): void;
  getSmartEvaluation(): api_commons_scorecards_pb.SmartEvaluation | undefined;
  setSmartEvaluation(value?: api_commons_scorecards_pb.SmartEvaluation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSmartEvaluationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSmartEvaluationResponse): CreateSmartEvaluationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSmartEvaluationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSmartEvaluationResponse;
  static deserializeBinaryFromReader(message: CreateSmartEvaluationResponse, reader: jspb.BinaryReader): CreateSmartEvaluationResponse;
}

export namespace CreateSmartEvaluationResponse {
  export type AsObject = {
    smartEvaluation?: api_commons_scorecards_pb.SmartEvaluation.AsObject,
  }
}

export class ListSmartEvaluationsRequest extends jspb.Message {
  getOrderBy(): string;
  setOrderBy(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  hasReturnFields(): boolean;
  clearReturnFields(): void;
  getReturnFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReturnFields(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getFilter(): string;
  setFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSmartEvaluationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSmartEvaluationsRequest): ListSmartEvaluationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSmartEvaluationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSmartEvaluationsRequest;
  static deserializeBinaryFromReader(message: ListSmartEvaluationsRequest, reader: jspb.BinaryReader): ListSmartEvaluationsRequest;
}

export namespace ListSmartEvaluationsRequest {
  export type AsObject = {
    orderBy: string,
    pageSize: number,
    pageToken: string,
    returnFields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    filter: string,
  }
}

export class ListSmartEvaluationsResponse extends jspb.Message {
  clearSmartEvaluationsList(): void;
  getSmartEvaluationsList(): Array<api_commons_scorecards_pb.SmartEvaluation>;
  setSmartEvaluationsList(value: Array<api_commons_scorecards_pb.SmartEvaluation>): void;
  addSmartEvaluations(value?: api_commons_scorecards_pb.SmartEvaluation, index?: number): api_commons_scorecards_pb.SmartEvaluation;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSmartEvaluationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSmartEvaluationsResponse): ListSmartEvaluationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSmartEvaluationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSmartEvaluationsResponse;
  static deserializeBinaryFromReader(message: ListSmartEvaluationsResponse, reader: jspb.BinaryReader): ListSmartEvaluationsResponse;
}

export namespace ListSmartEvaluationsResponse {
  export type AsObject = {
    smartEvaluationsList: Array<api_commons_scorecards_pb.SmartEvaluation.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateSmartEvaluationRequest extends jspb.Message {
  hasSmartEvaluation(): boolean;
  clearSmartEvaluation(): void;
  getSmartEvaluation(): api_commons_scorecards_pb.SmartEvaluation | undefined;
  setSmartEvaluation(value?: api_commons_scorecards_pb.SmartEvaluation): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSmartEvaluationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSmartEvaluationRequest): UpdateSmartEvaluationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSmartEvaluationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSmartEvaluationRequest;
  static deserializeBinaryFromReader(message: UpdateSmartEvaluationRequest, reader: jspb.BinaryReader): UpdateSmartEvaluationRequest;
}

export namespace UpdateSmartEvaluationRequest {
  export type AsObject = {
    smartEvaluation?: api_commons_scorecards_pb.SmartEvaluation.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateSmartEvaluationResponse extends jspb.Message {
  hasSmartEvaluation(): boolean;
  clearSmartEvaluation(): void;
  getSmartEvaluation(): api_commons_scorecards_pb.SmartEvaluation | undefined;
  setSmartEvaluation(value?: api_commons_scorecards_pb.SmartEvaluation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSmartEvaluationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSmartEvaluationResponse): UpdateSmartEvaluationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSmartEvaluationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSmartEvaluationResponse;
  static deserializeBinaryFromReader(message: UpdateSmartEvaluationResponse, reader: jspb.BinaryReader): UpdateSmartEvaluationResponse;
}

export namespace UpdateSmartEvaluationResponse {
  export type AsObject = {
    smartEvaluation?: api_commons_scorecards_pb.SmartEvaluation.AsObject,
  }
}

export class DeleteSmartEvaluationRequest extends jspb.Message {
  getSmartEvaluationId(): number;
  setSmartEvaluationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSmartEvaluationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSmartEvaluationRequest): DeleteSmartEvaluationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSmartEvaluationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSmartEvaluationRequest;
  static deserializeBinaryFromReader(message: DeleteSmartEvaluationRequest, reader: jspb.BinaryReader): DeleteSmartEvaluationRequest;
}

export namespace DeleteSmartEvaluationRequest {
  export type AsObject = {
    smartEvaluationId: number,
  }
}

export class DeleteSmartEvaluationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSmartEvaluationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSmartEvaluationResponse): DeleteSmartEvaluationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSmartEvaluationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSmartEvaluationResponse;
  static deserializeBinaryFromReader(message: DeleteSmartEvaluationResponse, reader: jspb.BinaryReader): DeleteSmartEvaluationResponse;
}

export namespace DeleteSmartEvaluationResponse {
  export type AsObject = {
  }
}

export class GetSmartEvaluationRequest extends jspb.Message {
  getSmartEvaluationId(): number;
  setSmartEvaluationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSmartEvaluationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSmartEvaluationRequest): GetSmartEvaluationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSmartEvaluationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSmartEvaluationRequest;
  static deserializeBinaryFromReader(message: GetSmartEvaluationRequest, reader: jspb.BinaryReader): GetSmartEvaluationRequest;
}

export namespace GetSmartEvaluationRequest {
  export type AsObject = {
    smartEvaluationId: number,
  }
}

export class GetSmartEvaluationResponse extends jspb.Message {
  hasSmartEvaluation(): boolean;
  clearSmartEvaluation(): void;
  getSmartEvaluation(): api_commons_scorecards_pb.SmartEvaluation | undefined;
  setSmartEvaluation(value?: api_commons_scorecards_pb.SmartEvaluation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSmartEvaluationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSmartEvaluationResponse): GetSmartEvaluationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSmartEvaluationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSmartEvaluationResponse;
  static deserializeBinaryFromReader(message: GetSmartEvaluationResponse, reader: jspb.BinaryReader): GetSmartEvaluationResponse;
}

export namespace GetSmartEvaluationResponse {
  export type AsObject = {
    smartEvaluation?: api_commons_scorecards_pb.SmartEvaluation.AsObject,
  }
}

