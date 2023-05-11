// package: api.v1alpha1.scorecards
// file: api/v1alpha1/scorecards/scorecard.proto

import * as jspb from "google-protobuf";
import * as api_commons_scorecards_pb from "../../../api/commons/scorecards_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class CreateScorecardRequest extends jspb.Message {
  hasScorecard(): boolean;
  clearScorecard(): void;
  getScorecard(): api_commons_scorecards_pb.Scorecard | undefined;
  setScorecard(value?: api_commons_scorecards_pb.Scorecard): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateScorecardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateScorecardRequest): CreateScorecardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateScorecardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateScorecardRequest;
  static deserializeBinaryFromReader(message: CreateScorecardRequest, reader: jspb.BinaryReader): CreateScorecardRequest;
}

export namespace CreateScorecardRequest {
  export type AsObject = {
    scorecard?: api_commons_scorecards_pb.Scorecard.AsObject,
  }
}

export class CreateScorecardResponse extends jspb.Message {
  hasScorecard(): boolean;
  clearScorecard(): void;
  getScorecard(): api_commons_scorecards_pb.Scorecard | undefined;
  setScorecard(value?: api_commons_scorecards_pb.Scorecard): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateScorecardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateScorecardResponse): CreateScorecardResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateScorecardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateScorecardResponse;
  static deserializeBinaryFromReader(message: CreateScorecardResponse, reader: jspb.BinaryReader): CreateScorecardResponse;
}

export namespace CreateScorecardResponse {
  export type AsObject = {
    scorecard?: api_commons_scorecards_pb.Scorecard.AsObject,
  }
}

export class ListScorecardsRequest extends jspb.Message {
  clearAuthorIdsList(): void;
  getAuthorIdsList(): Array<string>;
  setAuthorIdsList(value: Array<string>): void;
  addAuthorIds(value: string, index?: number): string;

  clearCategoryIdsList(): void;
  getCategoryIdsList(): Array<number>;
  setCategoryIdsList(value: Array<number>): void;
  addCategoryIds(value: number, index?: number): number;

  clearStatesList(): void;
  getStatesList(): Array<api_commons_scorecards_pb.ScorecardStateMap[keyof api_commons_scorecards_pb.ScorecardStateMap]>;
  setStatesList(value: Array<api_commons_scorecards_pb.ScorecardStateMap[keyof api_commons_scorecards_pb.ScorecardStateMap]>): void;
  addStates(value: api_commons_scorecards_pb.ScorecardStateMap[keyof api_commons_scorecards_pb.ScorecardStateMap], index?: number): api_commons_scorecards_pb.ScorecardStateMap[keyof api_commons_scorecards_pb.ScorecardStateMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListScorecardsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListScorecardsRequest): ListScorecardsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListScorecardsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListScorecardsRequest;
  static deserializeBinaryFromReader(message: ListScorecardsRequest, reader: jspb.BinaryReader): ListScorecardsRequest;
}

export namespace ListScorecardsRequest {
  export type AsObject = {
    authorIdsList: Array<string>,
    categoryIdsList: Array<number>,
    statesList: Array<api_commons_scorecards_pb.ScorecardStateMap[keyof api_commons_scorecards_pb.ScorecardStateMap]>,
  }
}

export class ListScorecardsResponse extends jspb.Message {
  clearScorecardsList(): void;
  getScorecardsList(): Array<api_commons_scorecards_pb.Scorecard>;
  setScorecardsList(value: Array<api_commons_scorecards_pb.Scorecard>): void;
  addScorecards(value?: api_commons_scorecards_pb.Scorecard, index?: number): api_commons_scorecards_pb.Scorecard;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListScorecardsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListScorecardsResponse): ListScorecardsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListScorecardsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListScorecardsResponse;
  static deserializeBinaryFromReader(message: ListScorecardsResponse, reader: jspb.BinaryReader): ListScorecardsResponse;
}

export namespace ListScorecardsResponse {
  export type AsObject = {
    scorecardsList: Array<api_commons_scorecards_pb.Scorecard.AsObject>,
  }
}

export class UpdateScorecardRequest extends jspb.Message {
  hasScorecard(): boolean;
  clearScorecard(): void;
  getScorecard(): api_commons_scorecards_pb.Scorecard | undefined;
  setScorecard(value?: api_commons_scorecards_pb.Scorecard): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScorecardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScorecardRequest): UpdateScorecardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScorecardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScorecardRequest;
  static deserializeBinaryFromReader(message: UpdateScorecardRequest, reader: jspb.BinaryReader): UpdateScorecardRequest;
}

export namespace UpdateScorecardRequest {
  export type AsObject = {
    scorecard?: api_commons_scorecards_pb.Scorecard.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateScorecardResponse extends jspb.Message {
  hasScorecard(): boolean;
  clearScorecard(): void;
  getScorecard(): api_commons_scorecards_pb.Scorecard | undefined;
  setScorecard(value?: api_commons_scorecards_pb.Scorecard): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScorecardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScorecardResponse): UpdateScorecardResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScorecardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScorecardResponse;
  static deserializeBinaryFromReader(message: UpdateScorecardResponse, reader: jspb.BinaryReader): UpdateScorecardResponse;
}

export namespace UpdateScorecardResponse {
  export type AsObject = {
    scorecard?: api_commons_scorecards_pb.Scorecard.AsObject,
  }
}

export class DeleteScorecardRequest extends jspb.Message {
  getScorecardId(): number;
  setScorecardId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteScorecardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteScorecardRequest): DeleteScorecardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteScorecardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteScorecardRequest;
  static deserializeBinaryFromReader(message: DeleteScorecardRequest, reader: jspb.BinaryReader): DeleteScorecardRequest;
}

export namespace DeleteScorecardRequest {
  export type AsObject = {
    scorecardId: number,
  }
}

export class DeleteScorecardResponse extends jspb.Message {
  hasScorecard(): boolean;
  clearScorecard(): void;
  getScorecard(): api_commons_scorecards_pb.Scorecard | undefined;
  setScorecard(value?: api_commons_scorecards_pb.Scorecard): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteScorecardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteScorecardResponse): DeleteScorecardResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteScorecardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteScorecardResponse;
  static deserializeBinaryFromReader(message: DeleteScorecardResponse, reader: jspb.BinaryReader): DeleteScorecardResponse;
}

export namespace DeleteScorecardResponse {
  export type AsObject = {
    scorecard?: api_commons_scorecards_pb.Scorecard.AsObject,
  }
}

export class GetScorecardRequest extends jspb.Message {
  getScorecardId(): number;
  setScorecardId(value: number): void;

  getUseDefault(): boolean;
  setUseDefault(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScorecardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetScorecardRequest): GetScorecardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScorecardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScorecardRequest;
  static deserializeBinaryFromReader(message: GetScorecardRequest, reader: jspb.BinaryReader): GetScorecardRequest;
}

export namespace GetScorecardRequest {
  export type AsObject = {
    scorecardId: number,
    useDefault: boolean,
  }
}

export class GetScorecardResponse extends jspb.Message {
  hasScorecard(): boolean;
  clearScorecard(): void;
  getScorecard(): api_commons_scorecards_pb.Scorecard | undefined;
  setScorecard(value?: api_commons_scorecards_pb.Scorecard): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScorecardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetScorecardResponse): GetScorecardResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScorecardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScorecardResponse;
  static deserializeBinaryFromReader(message: GetScorecardResponse, reader: jspb.BinaryReader): GetScorecardResponse;
}

export namespace GetScorecardResponse {
  export type AsObject = {
    scorecard?: api_commons_scorecards_pb.Scorecard.AsObject,
  }
}

