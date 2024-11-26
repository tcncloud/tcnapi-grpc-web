// package: api.v1alpha1.newsroom
// file: api/v1alpha1/newsroom/entities.proto

import * as jspb from "google-protobuf";
import * as api_commons_newsroom_pb from "../../../api/commons/newsroom_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class CreateNewsArticleRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getAuthor(): string;
  setAuthor(value: string): void;

  getImageReferenceId(): string;
  setImageReferenceId(value: string): void;

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
    author: string,
    imageReferenceId: string,
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

  getAuthor(): string;
  setAuthor(value: string): void;

  getImageReferenceId(): string;
  setImageReferenceId(value: string): void;

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
    author: string,
    imageReferenceId: string,
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

export class UserActivity extends jspb.Message {
  getUserActivityLogSid(): string;
  setUserActivityLogSid(value: string): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUserActivityDetails(): boolean;
  clearUserActivityDetails(): void;
  getUserActivityDetails(): UserActivity.UserActivityDetails | undefined;
  setUserActivityDetails(value?: UserActivity.UserActivityDetails): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserActivity.AsObject;
  static toObject(includeInstance: boolean, msg: UserActivity): UserActivity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserActivity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserActivity;
  static deserializeBinaryFromReader(message: UserActivity, reader: jspb.BinaryReader): UserActivity;
}

export namespace UserActivity {
  export type AsObject = {
    userActivityLogSid: string,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    userActivityDetails?: UserActivity.UserActivityDetails.AsObject,
  }

  export class UserActivityDetails extends jspb.Message {
    getPublishedArticleSid(): string;
    setPublishedArticleSid(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserActivityDetails.AsObject;
    static toObject(includeInstance: boolean, msg: UserActivityDetails): UserActivityDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserActivityDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserActivityDetails;
    static deserializeBinaryFromReader(message: UserActivityDetails, reader: jspb.BinaryReader): UserActivityDetails;
  }

  export namespace UserActivityDetails {
    export type AsObject = {
      publishedArticleSid: string,
    }
  }
}

export class CreatePublishedArticleRequest extends jspb.Message {
  getNewArticleSid(): string;
  setNewArticleSid(value: string): void;

  getDisplayToUser(): boolean;
  setDisplayToUser(value: boolean): void;

  getArticleLink(): string;
  setArticleLink(value: string): void;

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
    newArticleSid: string,
    displayToUser: boolean,
    articleLink: string,
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
  getNewArticleSid(): number;
  setNewArticleSid(value: number): void;

  getPublishedArticleSid(): string;
  setPublishedArticleSid(value: string): void;

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
    newArticleSid: number,
    publishedArticleSid: string,
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

export class UserActivityRequest extends jspb.Message {
  getPublishedArticleSid(): string;
  setPublishedArticleSid(value: string): void;

  getForce(): boolean;
  setForce(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserActivityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserActivityRequest): UserActivityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserActivityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserActivityRequest;
  static deserializeBinaryFromReader(message: UserActivityRequest, reader: jspb.BinaryReader): UserActivityRequest;
}

export namespace UserActivityRequest {
  export type AsObject = {
    publishedArticleSid: string,
    force: boolean,
  }
}

export class UserActivityResponse extends jspb.Message {
  hasUserActivity(): boolean;
  clearUserActivity(): void;
  getUserActivity(): UserActivity | undefined;
  setUserActivity(value?: UserActivity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserActivityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserActivityResponse): UserActivityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserActivityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserActivityResponse;
  static deserializeBinaryFromReader(message: UserActivityResponse, reader: jspb.BinaryReader): UserActivityResponse;
}

export namespace UserActivityResponse {
  export type AsObject = {
    userActivity?: UserActivity.AsObject,
  }
}

export class GetNewsForUserRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNewsForUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNewsForUserRequest): GetNewsForUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNewsForUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNewsForUserRequest;
  static deserializeBinaryFromReader(message: GetNewsForUserRequest, reader: jspb.BinaryReader): GetNewsForUserRequest;
}

export namespace GetNewsForUserRequest {
  export type AsObject = {
  }
}

export class GetNewsForUserResponse extends jspb.Message {
  clearPublishedArticleDetailsList(): void;
  getPublishedArticleDetailsList(): Array<PublishedArticleDetails>;
  setPublishedArticleDetailsList(value: Array<PublishedArticleDetails>): void;
  addPublishedArticleDetails(value?: PublishedArticleDetails, index?: number): PublishedArticleDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNewsForUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNewsForUserResponse): GetNewsForUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNewsForUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNewsForUserResponse;
  static deserializeBinaryFromReader(message: GetNewsForUserResponse, reader: jspb.BinaryReader): GetNewsForUserResponse;
}

export namespace GetNewsForUserResponse {
  export type AsObject = {
    publishedArticleDetailsList: Array<PublishedArticleDetails.AsObject>,
  }
}

export class StoreNewsArticleImageRequest extends jspb.Message {
  hasImage(): boolean;
  clearImage(): void;
  getImage(): NewsArticleImage | undefined;
  setImage(value?: NewsArticleImage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreNewsArticleImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StoreNewsArticleImageRequest): StoreNewsArticleImageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoreNewsArticleImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreNewsArticleImageRequest;
  static deserializeBinaryFromReader(message: StoreNewsArticleImageRequest, reader: jspb.BinaryReader): StoreNewsArticleImageRequest;
}

export namespace StoreNewsArticleImageRequest {
  export type AsObject = {
    image?: NewsArticleImage.AsObject,
  }
}

export class NewsArticleImage extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getNewArticleSid(): string;
  setNewArticleSid(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getDownloadUrl(): string;
  setDownloadUrl(value: string): void;

  getImageReferenceId(): string;
  setImageReferenceId(value: string): void;

  getImageType(): string;
  setImageType(value: string): void;

  hasTempId(): boolean;
  clearTempId(): void;
  getTempId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTempId(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewsArticleImage.AsObject;
  static toObject(includeInstance: boolean, msg: NewsArticleImage): NewsArticleImage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewsArticleImage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewsArticleImage;
  static deserializeBinaryFromReader(message: NewsArticleImage, reader: jspb.BinaryReader): NewsArticleImage;
}

export namespace NewsArticleImage {
  export type AsObject = {
    uuid: string,
    newArticleSid: string,
    content: string,
    downloadUrl: string,
    imageReferenceId: string,
    imageType: string,
    tempId?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class StoreNewsArticleImageResponse extends jspb.Message {
  hasImage(): boolean;
  clearImage(): void;
  getImage(): NewsArticleImage | undefined;
  setImage(value?: NewsArticleImage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreNewsArticleImageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StoreNewsArticleImageResponse): StoreNewsArticleImageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoreNewsArticleImageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreNewsArticleImageResponse;
  static deserializeBinaryFromReader(message: StoreNewsArticleImageResponse, reader: jspb.BinaryReader): StoreNewsArticleImageResponse;
}

export namespace StoreNewsArticleImageResponse {
  export type AsObject = {
    image?: NewsArticleImage.AsObject,
  }
}

export class ListImagesForNewsArticleRequest extends jspb.Message {
  getNewArticleSid(): string;
  setNewArticleSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListImagesForNewsArticleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListImagesForNewsArticleRequest): ListImagesForNewsArticleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListImagesForNewsArticleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListImagesForNewsArticleRequest;
  static deserializeBinaryFromReader(message: ListImagesForNewsArticleRequest, reader: jspb.BinaryReader): ListImagesForNewsArticleRequest;
}

export namespace ListImagesForNewsArticleRequest {
  export type AsObject = {
    newArticleSid: string,
  }
}

export class ListImagesForNewsArticleResponse extends jspb.Message {
  clearNewsArticleImagesList(): void;
  getNewsArticleImagesList(): Array<NewsArticleImage>;
  setNewsArticleImagesList(value: Array<NewsArticleImage>): void;
  addNewsArticleImages(value?: NewsArticleImage, index?: number): NewsArticleImage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListImagesForNewsArticleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListImagesForNewsArticleResponse): ListImagesForNewsArticleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListImagesForNewsArticleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListImagesForNewsArticleResponse;
  static deserializeBinaryFromReader(message: ListImagesForNewsArticleResponse, reader: jspb.BinaryReader): ListImagesForNewsArticleResponse;
}

export namespace ListImagesForNewsArticleResponse {
  export type AsObject = {
    newsArticleImagesList: Array<NewsArticleImage.AsObject>,
  }
}

export class UploadNewsArticleImageRequest extends jspb.Message {
  hasImage(): boolean;
  clearImage(): void;
  getImage(): NewsArticleImage | undefined;
  setImage(value?: NewsArticleImage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadNewsArticleImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadNewsArticleImageRequest): UploadNewsArticleImageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadNewsArticleImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadNewsArticleImageRequest;
  static deserializeBinaryFromReader(message: UploadNewsArticleImageRequest, reader: jspb.BinaryReader): UploadNewsArticleImageRequest;
}

export namespace UploadNewsArticleImageRequest {
  export type AsObject = {
    image?: NewsArticleImage.AsObject,
  }
}

export class UploadNewsArticleImageResponse extends jspb.Message {
  hasImage(): boolean;
  clearImage(): void;
  getImage(): NewsArticleImage | undefined;
  setImage(value?: NewsArticleImage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadNewsArticleImageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadNewsArticleImageResponse): UploadNewsArticleImageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadNewsArticleImageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadNewsArticleImageResponse;
  static deserializeBinaryFromReader(message: UploadNewsArticleImageResponse, reader: jspb.BinaryReader): UploadNewsArticleImageResponse;
}

export namespace UploadNewsArticleImageResponse {
  export type AsObject = {
    image?: NewsArticleImage.AsObject,
  }
}

export class CreateClientArticleRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getAuthor(): string;
  setAuthor(value: string): void;

  getImageReferenceId(): string;
  setImageReferenceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateClientArticleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateClientArticleRequest): CreateClientArticleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateClientArticleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateClientArticleRequest;
  static deserializeBinaryFromReader(message: CreateClientArticleRequest, reader: jspb.BinaryReader): CreateClientArticleRequest;
}

export namespace CreateClientArticleRequest {
  export type AsObject = {
    title: string,
    content: string,
    author: string,
    imageReferenceId: string,
  }
}

export class CreateClientArticleResponse extends jspb.Message {
  hasArticleDetails(): boolean;
  clearArticleDetails(): void;
  getArticleDetails(): NewsArticleDetails | undefined;
  setArticleDetails(value?: NewsArticleDetails): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateClientArticleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateClientArticleResponse): CreateClientArticleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateClientArticleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateClientArticleResponse;
  static deserializeBinaryFromReader(message: CreateClientArticleResponse, reader: jspb.BinaryReader): CreateClientArticleResponse;
}

export namespace CreateClientArticleResponse {
  export type AsObject = {
    articleDetails?: NewsArticleDetails.AsObject,
  }
}

export class UpdateClientArticleRequest extends jspb.Message {
  hasArticleDetails(): boolean;
  clearArticleDetails(): void;
  getArticleDetails(): NewsArticleDetails | undefined;
  setArticleDetails(value?: NewsArticleDetails): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateClientArticleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateClientArticleRequest): UpdateClientArticleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateClientArticleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateClientArticleRequest;
  static deserializeBinaryFromReader(message: UpdateClientArticleRequest, reader: jspb.BinaryReader): UpdateClientArticleRequest;
}

export namespace UpdateClientArticleRequest {
  export type AsObject = {
    articleDetails?: NewsArticleDetails.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateClientArticleResponse extends jspb.Message {
  hasArticleDetails(): boolean;
  clearArticleDetails(): void;
  getArticleDetails(): NewsArticleDetails | undefined;
  setArticleDetails(value?: NewsArticleDetails): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateClientArticleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateClientArticleResponse): UpdateClientArticleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateClientArticleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateClientArticleResponse;
  static deserializeBinaryFromReader(message: UpdateClientArticleResponse, reader: jspb.BinaryReader): UpdateClientArticleResponse;
}

export namespace UpdateClientArticleResponse {
  export type AsObject = {
    articleDetails?: NewsArticleDetails.AsObject,
  }
}

