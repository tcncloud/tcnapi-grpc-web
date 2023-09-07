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

export class PublishedArticleDetails extends jspb.Message {
  getPublishedArticleSid(): string;
  setPublishedArticleSid(value: string): void;

  hasNewsArticleDetails(): boolean;
  clearNewsArticleDetails(): void;
  getNewsArticleDetails(): NewsArticleDetails | undefined;
  setNewsArticleDetails(value?: NewsArticleDetails): void;

  hasDatePublished(): boolean;
  clearDatePublished(): void;
  getDatePublished(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDatePublished(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDisplayToUser(): boolean;
  setDisplayToUser(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishedArticleDetails.AsObject;
  static toObject(includeInstance: boolean, msg: PublishedArticleDetails): PublishedArticleDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishedArticleDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishedArticleDetails;
  static deserializeBinaryFromReader(message: PublishedArticleDetails, reader: jspb.BinaryReader): PublishedArticleDetails;
}

export namespace PublishedArticleDetails {
  export type AsObject = {
    publishedArticleSid: string,
    newsArticleDetails?: NewsArticleDetails.AsObject,
    datePublished?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    displayToUser: boolean,
  }
}

export class CreatePublishedArticleRequest extends jspb.Message {
  getNewArticleSid(): number;
  setNewArticleSid(value: number): void;

  getDisplayToUser(): boolean;
  setDisplayToUser(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePublishedArticleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePublishedArticleRequest): CreatePublishedArticleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePublishedArticleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePublishedArticleRequest;
  static deserializeBinaryFromReader(message: CreatePublishedArticleRequest, reader: jspb.BinaryReader): CreatePublishedArticleRequest;
}

export namespace CreatePublishedArticleRequest {
  export type AsObject = {
    newArticleSid: number,
    displayToUser: boolean,
  }
}

export class CreatePublishedArticleResponse extends jspb.Message {
  hasPublishedArticleDetails(): boolean;
  clearPublishedArticleDetails(): void;
  getPublishedArticleDetails(): PublishedArticleDetails | undefined;
  setPublishedArticleDetails(value?: PublishedArticleDetails): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePublishedArticleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePublishedArticleResponse): CreatePublishedArticleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePublishedArticleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePublishedArticleResponse;
  static deserializeBinaryFromReader(message: CreatePublishedArticleResponse, reader: jspb.BinaryReader): CreatePublishedArticleResponse;
}

export namespace CreatePublishedArticleResponse {
  export type AsObject = {
    publishedArticleDetails?: PublishedArticleDetails.AsObject,
  }
}

export class ListPublishedArticlesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPublishedArticlesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPublishedArticlesRequest): ListPublishedArticlesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPublishedArticlesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPublishedArticlesRequest;
  static deserializeBinaryFromReader(message: ListPublishedArticlesRequest, reader: jspb.BinaryReader): ListPublishedArticlesRequest;
}

export namespace ListPublishedArticlesRequest {
  export type AsObject = {
  }
}

export class ListPublishedArticlesResponse extends jspb.Message {
  clearPublishedArticleDetailsList(): void;
  getPublishedArticleDetailsList(): Array<PublishedArticleDetails>;
  setPublishedArticleDetailsList(value: Array<PublishedArticleDetails>): void;
  addPublishedArticleDetails(value?: PublishedArticleDetails, index?: number): PublishedArticleDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPublishedArticlesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPublishedArticlesResponse): ListPublishedArticlesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPublishedArticlesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPublishedArticlesResponse;
  static deserializeBinaryFromReader(message: ListPublishedArticlesResponse, reader: jspb.BinaryReader): ListPublishedArticlesResponse;
}

export namespace ListPublishedArticlesResponse {
  export type AsObject = {
    publishedArticleDetailsList: Array<PublishedArticleDetails.AsObject>,
  }
}

export class GetPublishedArticleByIdRequest extends jspb.Message {
  getNewArticleSid(): string;
  setNewArticleSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublishedArticleByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublishedArticleByIdRequest): GetPublishedArticleByIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPublishedArticleByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublishedArticleByIdRequest;
  static deserializeBinaryFromReader(message: GetPublishedArticleByIdRequest, reader: jspb.BinaryReader): GetPublishedArticleByIdRequest;
}

export namespace GetPublishedArticleByIdRequest {
  export type AsObject = {
    newArticleSid: string,
  }
}

export class GetPublishedArticleByIdResponse extends jspb.Message {
  hasPublishedArticleDetails(): boolean;
  clearPublishedArticleDetails(): void;
  getPublishedArticleDetails(): PublishedArticleDetails | undefined;
  setPublishedArticleDetails(value?: PublishedArticleDetails): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublishedArticleByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublishedArticleByIdResponse): GetPublishedArticleByIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPublishedArticleByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublishedArticleByIdResponse;
  static deserializeBinaryFromReader(message: GetPublishedArticleByIdResponse, reader: jspb.BinaryReader): GetPublishedArticleByIdResponse;
}

export namespace GetPublishedArticleByIdResponse {
  export type AsObject = {
    publishedArticleDetails?: PublishedArticleDetails.AsObject,
  }
}

export class UpdatePublishedArticleRequest extends jspb.Message {
  hasPublishedArticleDetails(): boolean;
  clearPublishedArticleDetails(): void;
  getPublishedArticleDetails(): PublishedArticleDetails | undefined;
  setPublishedArticleDetails(value?: PublishedArticleDetails): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePublishedArticleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePublishedArticleRequest): UpdatePublishedArticleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePublishedArticleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePublishedArticleRequest;
  static deserializeBinaryFromReader(message: UpdatePublishedArticleRequest, reader: jspb.BinaryReader): UpdatePublishedArticleRequest;
}

export namespace UpdatePublishedArticleRequest {
  export type AsObject = {
    publishedArticleDetails?: PublishedArticleDetails.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdatePublishedArticleResponse extends jspb.Message {
  hasPublishedArticleDetails(): boolean;
  clearPublishedArticleDetails(): void;
  getPublishedArticleDetails(): PublishedArticleDetails | undefined;
  setPublishedArticleDetails(value?: PublishedArticleDetails): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePublishedArticleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePublishedArticleResponse): UpdatePublishedArticleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePublishedArticleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePublishedArticleResponse;
  static deserializeBinaryFromReader(message: UpdatePublishedArticleResponse, reader: jspb.BinaryReader): UpdatePublishedArticleResponse;
}

export namespace UpdatePublishedArticleResponse {
  export type AsObject = {
    publishedArticleDetails?: PublishedArticleDetails.AsObject,
  }
}

