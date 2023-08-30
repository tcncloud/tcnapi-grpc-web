// package: api.v1alpha1.newsroom
// file: api/v1alpha1/newsroom/entities.proto

import * as jspb from "google-protobuf";
import * as api_commons_newsroom_pb from "../../../api/commons/newsroom_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CreateNewsArticleRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNewsArticleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNewsArticleRequest): CreateNewsArticleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateNewsArticleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNewsArticleRequest;
  static deserializeBinaryFromReader(message: CreateNewsArticleRequest, reader: jspb.BinaryReader): CreateNewsArticleRequest;
}

export namespace CreateNewsArticleRequest {
  export type AsObject = {
    title: string,
    content: string,
  }
}

export class CreateNewsArticleResponse extends jspb.Message {
  hasArticleDetails(): boolean;
  clearArticleDetails(): void;
  getArticleDetails(): NewsArticleDetails | undefined;
  setArticleDetails(value?: NewsArticleDetails): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNewsArticleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNewsArticleResponse): CreateNewsArticleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateNewsArticleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNewsArticleResponse;
  static deserializeBinaryFromReader(message: CreateNewsArticleResponse, reader: jspb.BinaryReader): CreateNewsArticleResponse;
}

export namespace CreateNewsArticleResponse {
  export type AsObject = {
    articleDetails?: NewsArticleDetails.AsObject,
  }
}

export class ListNewsArticlesRequest extends jspb.Message {
  clearStatusesList(): void;
  getStatusesList(): Array<api_commons_newsroom_pb.ArticleStatusMap[keyof api_commons_newsroom_pb.ArticleStatusMap]>;
  setStatusesList(value: Array<api_commons_newsroom_pb.ArticleStatusMap[keyof api_commons_newsroom_pb.ArticleStatusMap]>): void;
  addStatuses(value: api_commons_newsroom_pb.ArticleStatusMap[keyof api_commons_newsroom_pb.ArticleStatusMap], index?: number): api_commons_newsroom_pb.ArticleStatusMap[keyof api_commons_newsroom_pb.ArticleStatusMap];

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNewsArticlesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNewsArticlesRequest): ListNewsArticlesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNewsArticlesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNewsArticlesRequest;
  static deserializeBinaryFromReader(message: ListNewsArticlesRequest, reader: jspb.BinaryReader): ListNewsArticlesRequest;
}

export namespace ListNewsArticlesRequest {
  export type AsObject = {
    statusesList: Array<api_commons_newsroom_pb.ArticleStatusMap[keyof api_commons_newsroom_pb.ArticleStatusMap]>,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListNewsArticlesResponse extends jspb.Message {
  clearArticleDetailsList(): void;
  getArticleDetailsList(): Array<NewsArticleDetails>;
  setArticleDetailsList(value: Array<NewsArticleDetails>): void;
  addArticleDetails(value?: NewsArticleDetails, index?: number): NewsArticleDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNewsArticlesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNewsArticlesResponse): ListNewsArticlesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNewsArticlesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNewsArticlesResponse;
  static deserializeBinaryFromReader(message: ListNewsArticlesResponse, reader: jspb.BinaryReader): ListNewsArticlesResponse;
}

export namespace ListNewsArticlesResponse {
  export type AsObject = {
    articleDetailsList: Array<NewsArticleDetails.AsObject>,
  }
}

export class GetNewsArticleByIdRequest extends jspb.Message {
  getNewArticleSid(): string;
  setNewArticleSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNewsArticleByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNewsArticleByIdRequest): GetNewsArticleByIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNewsArticleByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNewsArticleByIdRequest;
  static deserializeBinaryFromReader(message: GetNewsArticleByIdRequest, reader: jspb.BinaryReader): GetNewsArticleByIdRequest;
}

export namespace GetNewsArticleByIdRequest {
  export type AsObject = {
    newArticleSid: string,
  }
}

export class GetNewsArticleByIdResponse extends jspb.Message {
  hasArticleDetails(): boolean;
  clearArticleDetails(): void;
  getArticleDetails(): NewsArticleDetails | undefined;
  setArticleDetails(value?: NewsArticleDetails): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNewsArticleByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNewsArticleByIdResponse): GetNewsArticleByIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNewsArticleByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNewsArticleByIdResponse;
  static deserializeBinaryFromReader(message: GetNewsArticleByIdResponse, reader: jspb.BinaryReader): GetNewsArticleByIdResponse;
}

export namespace GetNewsArticleByIdResponse {
  export type AsObject = {
    articleDetails?: NewsArticleDetails.AsObject,
  }
}

export class UpdateNewsArticleRequest extends jspb.Message {
  hasArticleDetails(): boolean;
  clearArticleDetails(): void;
  getArticleDetails(): NewsArticleDetails | undefined;
  setArticleDetails(value?: NewsArticleDetails): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNewsArticleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNewsArticleRequest): UpdateNewsArticleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNewsArticleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNewsArticleRequest;
  static deserializeBinaryFromReader(message: UpdateNewsArticleRequest, reader: jspb.BinaryReader): UpdateNewsArticleRequest;
}

export namespace UpdateNewsArticleRequest {
  export type AsObject = {
    articleDetails?: NewsArticleDetails.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateNewsArticleResponse extends jspb.Message {
  hasArticleDetails(): boolean;
  clearArticleDetails(): void;
  getArticleDetails(): NewsArticleDetails | undefined;
  setArticleDetails(value?: NewsArticleDetails): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNewsArticleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNewsArticleResponse): UpdateNewsArticleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNewsArticleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNewsArticleResponse;
  static deserializeBinaryFromReader(message: UpdateNewsArticleResponse, reader: jspb.BinaryReader): UpdateNewsArticleResponse;
}

export namespace UpdateNewsArticleResponse {
  export type AsObject = {
    articleDetails?: NewsArticleDetails.AsObject,
  }
}

export class NewsArticleDetails extends jspb.Message {
  getNewArticleSid(): string;
  setNewArticleSid(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getStatus(): api_commons_newsroom_pb.ArticleStatusMap[keyof api_commons_newsroom_pb.ArticleStatusMap];
  setStatus(value: api_commons_newsroom_pb.ArticleStatusMap[keyof api_commons_newsroom_pb.ArticleStatusMap]): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastEdited(): boolean;
  clearLastEdited(): void;
  getLastEdited(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastEdited(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewsArticleDetails.AsObject;
  static toObject(includeInstance: boolean, msg: NewsArticleDetails): NewsArticleDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewsArticleDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewsArticleDetails;
  static deserializeBinaryFromReader(message: NewsArticleDetails, reader: jspb.BinaryReader): NewsArticleDetails;
}

export namespace NewsArticleDetails {
  export type AsObject = {
    newArticleSid: string,
    title: string,
    content: string,
    status: api_commons_newsroom_pb.ArticleStatusMap[keyof api_commons_newsroom_pb.ArticleStatusMap],
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastEdited?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

