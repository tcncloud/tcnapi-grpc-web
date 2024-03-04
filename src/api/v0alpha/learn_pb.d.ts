// package: api.v0alpha
// file: api/v0alpha/learn.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../annotations/authz_pb";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ExistReq extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getLocale(): string;
  setLocale(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExistReq.AsObject;
  static toObject(includeInstance: boolean, msg: ExistReq): ExistReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExistReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExistReq;
  static deserializeBinaryFromReader(message: ExistReq, reader: jspb.BinaryReader): ExistReq;
}

export namespace ExistReq {
  export type AsObject = {
    url: string,
    locale: string,
  }
}

export class ExistRes extends jspb.Message {
  getExist(): boolean;
  setExist(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExistRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExistRes): ExistRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExistRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExistRes;
  static deserializeBinaryFromReader(message: ExistRes, reader: jspb.BinaryReader): ExistRes;
}

export namespace ExistRes {
  export type AsObject = {
    exist: boolean,
  }
}

export class ContentReq extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getLocale(): string;
  setLocale(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentReq.AsObject;
  static toObject(includeInstance: boolean, msg: ContentReq): ContentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentReq;
  static deserializeBinaryFromReader(message: ContentReq, reader: jspb.BinaryReader): ContentReq;
}

export namespace ContentReq {
  export type AsObject = {
    url: string,
    locale: string,
  }
}

export class ContentRes extends jspb.Message {
  getContent(): string;
  setContent(value: string): void;

  hasLastEditedTimestamp(): boolean;
  clearLastEditedTimestamp(): void;
  getLastEditedTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastEditedTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearImagesList(): void;
  getImagesList(): Array<LearnImage>;
  setImagesList(value: Array<LearnImage>): void;
  addImages(value?: LearnImage, index?: number): LearnImage;

  getTitle(): string;
  setTitle(value: string): void;

  getTotalViewCount(): number;
  setTotalViewCount(value: number): void;

  getLastEditedUser(): string;
  setLastEditedUser(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentRes.AsObject;
  static toObject(includeInstance: boolean, msg: ContentRes): ContentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentRes;
  static deserializeBinaryFromReader(message: ContentRes, reader: jspb.BinaryReader): ContentRes;
}

export namespace ContentRes {
  export type AsObject = {
    content: string,
    lastEditedTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    imagesList: Array<LearnImage.AsObject>,
    title: string,
    totalViewCount: number,
    lastEditedUser: string,
  }
}

export class ContentEditorDataReq extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getLocale(): string;
  setLocale(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentEditorDataReq.AsObject;
  static toObject(includeInstance: boolean, msg: ContentEditorDataReq): ContentEditorDataReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContentEditorDataReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentEditorDataReq;
  static deserializeBinaryFromReader(message: ContentEditorDataReq, reader: jspb.BinaryReader): ContentEditorDataReq;
}

export namespace ContentEditorDataReq {
  export type AsObject = {
    url: string,
    locale: string,
  }
}

export class ContentEditorDataRes extends jspb.Message {
  getLastEditedUser(): string;
  setLastEditedUser(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentEditorDataRes.AsObject;
  static toObject(includeInstance: boolean, msg: ContentEditorDataRes): ContentEditorDataRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContentEditorDataRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentEditorDataRes;
  static deserializeBinaryFromReader(message: ContentEditorDataRes, reader: jspb.BinaryReader): ContentEditorDataRes;
}

export namespace ContentEditorDataRes {
  export type AsObject = {
    lastEditedUser: string,
  }
}

export class UpdateReq extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getLocale(): string;
  setLocale(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReq): UpdateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReq;
  static deserializeBinaryFromReader(message: UpdateReq, reader: jspb.BinaryReader): UpdateReq;
}

export namespace UpdateReq {
  export type AsObject = {
    url: string,
    locale: string,
    content: string,
    message: string,
    title: string,
  }
}

export class UpdateRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRes): UpdateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRes;
  static deserializeBinaryFromReader(message: UpdateRes, reader: jspb.BinaryReader): UpdateRes;
}

export namespace UpdateRes {
  export type AsObject = {
  }
}

export class ExportManyReq extends jspb.Message {
  clearUrlList(): void;
  getUrlList(): Array<string>;
  setUrlList(value: Array<string>): void;
  addUrl(value: string, index?: number): string;

  getLocale(): string;
  setLocale(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportManyReq.AsObject;
  static toObject(includeInstance: boolean, msg: ExportManyReq): ExportManyReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportManyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportManyReq;
  static deserializeBinaryFromReader(message: ExportManyReq, reader: jspb.BinaryReader): ExportManyReq;
}

export namespace ExportManyReq {
  export type AsObject = {
    urlList: Array<string>,
    locale: string,
    content: string,
  }
}

export class ExportRes extends jspb.Message {
  getDownloadUrl(): string;
  setDownloadUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExportRes): ExportRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportRes;
  static deserializeBinaryFromReader(message: ExportRes, reader: jspb.BinaryReader): ExportRes;
}

export namespace ExportRes {
  export type AsObject = {
    downloadUrl: string,
  }
}

export class StoreStaticImageReq extends jspb.Message {
  hasImage(): boolean;
  clearImage(): void;
  getImage(): LearnImage | undefined;
  setImage(value?: LearnImage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreStaticImageReq.AsObject;
  static toObject(includeInstance: boolean, msg: StoreStaticImageReq): StoreStaticImageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoreStaticImageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreStaticImageReq;
  static deserializeBinaryFromReader(message: StoreStaticImageReq, reader: jspb.BinaryReader): StoreStaticImageReq;
}

export namespace StoreStaticImageReq {
  export type AsObject = {
    image?: LearnImage.AsObject,
  }
}

export class LearnImage extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getDownloadUrl(): string;
  setDownloadUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LearnImage.AsObject;
  static toObject(includeInstance: boolean, msg: LearnImage): LearnImage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LearnImage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LearnImage;
  static deserializeBinaryFromReader(message: LearnImage, reader: jspb.BinaryReader): LearnImage;
}

export namespace LearnImage {
  export type AsObject = {
    uuid: string,
    content: string,
    downloadUrl: string,
  }
}

export class StoreStaticImageRes extends jspb.Message {
  hasImage(): boolean;
  clearImage(): void;
  getImage(): LearnImage | undefined;
  setImage(value?: LearnImage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreStaticImageRes.AsObject;
  static toObject(includeInstance: boolean, msg: StoreStaticImageRes): StoreStaticImageRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoreStaticImageRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreStaticImageRes;
  static deserializeBinaryFromReader(message: StoreStaticImageRes, reader: jspb.BinaryReader): StoreStaticImageRes;
}

export namespace StoreStaticImageRes {
  export type AsObject = {
    image?: LearnImage.AsObject,
  }
}

export class SearchContentReq extends jspb.Message {
  getSearchContent(): string;
  setSearchContent(value: string): void;

  getLocale(): string;
  setLocale(value: string): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchContentReq.AsObject;
  static toObject(includeInstance: boolean, msg: SearchContentReq): SearchContentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchContentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchContentReq;
  static deserializeBinaryFromReader(message: SearchContentReq, reader: jspb.BinaryReader): SearchContentReq;
}

export namespace SearchContentReq {
  export type AsObject = {
    searchContent: string,
    locale: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class SearchRes extends jspb.Message {
  clearSearchDetailsList(): void;
  getSearchDetailsList(): Array<LearnSearchDetails>;
  setSearchDetailsList(value: Array<LearnSearchDetails>): void;
  addSearchDetails(value?: LearnSearchDetails, index?: number): LearnSearchDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRes.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRes): SearchRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRes;
  static deserializeBinaryFromReader(message: SearchRes, reader: jspb.BinaryReader): SearchRes;
}

export namespace SearchRes {
  export type AsObject = {
    searchDetailsList: Array<LearnSearchDetails.AsObject>,
  }
}

export class LearnSearchDetails extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LearnSearchDetails.AsObject;
  static toObject(includeInstance: boolean, msg: LearnSearchDetails): LearnSearchDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LearnSearchDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LearnSearchDetails;
  static deserializeBinaryFromReader(message: LearnSearchDetails, reader: jspb.BinaryReader): LearnSearchDetails;
}

export namespace LearnSearchDetails {
  export type AsObject = {
    name: string,
    content: string,
  }
}

export class UploadDynamicScreenshotReq extends jspb.Message {
  getDataLearnId(): string;
  setDataLearnId(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  getLocale(): string;
  setLocale(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadDynamicScreenshotReq.AsObject;
  static toObject(includeInstance: boolean, msg: UploadDynamicScreenshotReq): UploadDynamicScreenshotReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadDynamicScreenshotReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadDynamicScreenshotReq;
  static deserializeBinaryFromReader(message: UploadDynamicScreenshotReq, reader: jspb.BinaryReader): UploadDynamicScreenshotReq;
}

export namespace UploadDynamicScreenshotReq {
  export type AsObject = {
    dataLearnId: string,
    version: number,
    locale: string,
    content: string,
  }
}

export class UploadDynamicScreenshotRes extends jspb.Message {
  getDataLearnId(): string;
  setDataLearnId(value: string): void;

  getDownloadUrl(): string;
  setDownloadUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadDynamicScreenshotRes.AsObject;
  static toObject(includeInstance: boolean, msg: UploadDynamicScreenshotRes): UploadDynamicScreenshotRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadDynamicScreenshotRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadDynamicScreenshotRes;
  static deserializeBinaryFromReader(message: UploadDynamicScreenshotRes, reader: jspb.BinaryReader): UploadDynamicScreenshotRes;
}

export namespace UploadDynamicScreenshotRes {
  export type AsObject = {
    dataLearnId: string,
    downloadUrl: string,
  }
}

export class StandaloneReq extends jspb.Message {
  getLocale(): string;
  setLocale(value: string): void;

  getCategory(): string;
  setCategory(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StandaloneReq.AsObject;
  static toObject(includeInstance: boolean, msg: StandaloneReq): StandaloneReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StandaloneReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StandaloneReq;
  static deserializeBinaryFromReader(message: StandaloneReq, reader: jspb.BinaryReader): StandaloneReq;
}

export namespace StandaloneReq {
  export type AsObject = {
    locale: string,
    category: string,
  }
}

export class StandaloneRes extends jspb.Message {
  clearStandaloneDetailsList(): void;
  getStandaloneDetailsList(): Array<LearnStandaloneDetails>;
  setStandaloneDetailsList(value: Array<LearnStandaloneDetails>): void;
  addStandaloneDetails(value?: LearnStandaloneDetails, index?: number): LearnStandaloneDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StandaloneRes.AsObject;
  static toObject(includeInstance: boolean, msg: StandaloneRes): StandaloneRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StandaloneRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StandaloneRes;
  static deserializeBinaryFromReader(message: StandaloneRes, reader: jspb.BinaryReader): StandaloneRes;
}

export namespace StandaloneRes {
  export type AsObject = {
    standaloneDetailsList: Array<LearnStandaloneDetails.AsObject>,
  }
}

export class LearnStandaloneDetails extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  hasLastEditedTimestamp(): boolean;
  clearLastEditedTimestamp(): void;
  getLastEditedTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastEditedTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTitle(): string;
  setTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LearnStandaloneDetails.AsObject;
  static toObject(includeInstance: boolean, msg: LearnStandaloneDetails): LearnStandaloneDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LearnStandaloneDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LearnStandaloneDetails;
  static deserializeBinaryFromReader(message: LearnStandaloneDetails, reader: jspb.BinaryReader): LearnStandaloneDetails;
}

export namespace LearnStandaloneDetails {
  export type AsObject = {
    name: string,
    content: string,
    lastEditedTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    title: string,
  }
}

export class DeleteStandaloneReq extends jspb.Message {
  getLocale(): string;
  setLocale(value: string): void;

  clearArticleNamesList(): void;
  getArticleNamesList(): Array<string>;
  setArticleNamesList(value: Array<string>): void;
  addArticleNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteStandaloneReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteStandaloneReq): DeleteStandaloneReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteStandaloneReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteStandaloneReq;
  static deserializeBinaryFromReader(message: DeleteStandaloneReq, reader: jspb.BinaryReader): DeleteStandaloneReq;
}

export namespace DeleteStandaloneReq {
  export type AsObject = {
    locale: string,
    articleNamesList: Array<string>,
  }
}

export class DeleteStandaloneRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteStandaloneRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteStandaloneRes): DeleteStandaloneRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteStandaloneRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteStandaloneRes;
  static deserializeBinaryFromReader(message: DeleteStandaloneRes, reader: jspb.BinaryReader): DeleteStandaloneRes;
}

export namespace DeleteStandaloneRes {
  export type AsObject = {
  }
}

export class SnippetReq extends jspb.Message {
  getLocale(): string;
  setLocale(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnippetReq.AsObject;
  static toObject(includeInstance: boolean, msg: SnippetReq): SnippetReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SnippetReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnippetReq;
  static deserializeBinaryFromReader(message: SnippetReq, reader: jspb.BinaryReader): SnippetReq;
}

export namespace SnippetReq {
  export type AsObject = {
    locale: string,
  }
}

export class SnippetRes extends jspb.Message {
  clearSnippetDetailsList(): void;
  getSnippetDetailsList(): Array<LearnSnippetDetails>;
  setSnippetDetailsList(value: Array<LearnSnippetDetails>): void;
  addSnippetDetails(value?: LearnSnippetDetails, index?: number): LearnSnippetDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnippetRes.AsObject;
  static toObject(includeInstance: boolean, msg: SnippetRes): SnippetRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SnippetRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnippetRes;
  static deserializeBinaryFromReader(message: SnippetRes, reader: jspb.BinaryReader): SnippetRes;
}

export namespace SnippetRes {
  export type AsObject = {
    snippetDetailsList: Array<LearnSnippetDetails.AsObject>,
  }
}

export class LearnSnippetDetails extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  hasLastEditedTimestamp(): boolean;
  clearLastEditedTimestamp(): void;
  getLastEditedTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastEditedTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTitle(): string;
  setTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LearnSnippetDetails.AsObject;
  static toObject(includeInstance: boolean, msg: LearnSnippetDetails): LearnSnippetDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LearnSnippetDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LearnSnippetDetails;
  static deserializeBinaryFromReader(message: LearnSnippetDetails, reader: jspb.BinaryReader): LearnSnippetDetails;
}

export namespace LearnSnippetDetails {
  export type AsObject = {
    name: string,
    content: string,
    lastEditedTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    title: string,
  }
}

export class DeleteLearnPagesReq extends jspb.Message {
  getLocale(): string;
  setLocale(value: string): void;

  clearUrlList(): void;
  getUrlList(): Array<string>;
  setUrlList(value: Array<string>): void;
  addUrl(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLearnPagesReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLearnPagesReq): DeleteLearnPagesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteLearnPagesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLearnPagesReq;
  static deserializeBinaryFromReader(message: DeleteLearnPagesReq, reader: jspb.BinaryReader): DeleteLearnPagesReq;
}

export namespace DeleteLearnPagesReq {
  export type AsObject = {
    locale: string,
    urlList: Array<string>,
  }
}

export class DeleteLearnPagesRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLearnPagesRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLearnPagesRes): DeleteLearnPagesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteLearnPagesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLearnPagesRes;
  static deserializeBinaryFromReader(message: DeleteLearnPagesRes, reader: jspb.BinaryReader): DeleteLearnPagesRes;
}

export namespace DeleteLearnPagesRes {
  export type AsObject = {
  }
}

export class CreateEditVersionReq extends jspb.Message {
  getSrcVersion(): string;
  setSrcVersion(value: string): void;

  getDestVersion(): string;
  setDestVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEditVersionReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEditVersionReq): CreateEditVersionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEditVersionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEditVersionReq;
  static deserializeBinaryFromReader(message: CreateEditVersionReq, reader: jspb.BinaryReader): CreateEditVersionReq;
}

export namespace CreateEditVersionReq {
  export type AsObject = {
    srcVersion: string,
    destVersion: string,
  }
}

export class CreateEditVersionRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEditVersionRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEditVersionRes): CreateEditVersionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEditVersionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEditVersionRes;
  static deserializeBinaryFromReader(message: CreateEditVersionRes, reader: jspb.BinaryReader): CreateEditVersionRes;
}

export namespace CreateEditVersionRes {
  export type AsObject = {
  }
}

export class PublishVersionReq extends jspb.Message {
  getPublishVersion(): string;
  setPublishVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishVersionReq.AsObject;
  static toObject(includeInstance: boolean, msg: PublishVersionReq): PublishVersionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishVersionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishVersionReq;
  static deserializeBinaryFromReader(message: PublishVersionReq, reader: jspb.BinaryReader): PublishVersionReq;
}

export namespace PublishVersionReq {
  export type AsObject = {
    publishVersion: string,
  }
}

export class PublishVersionRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishVersionRes.AsObject;
  static toObject(includeInstance: boolean, msg: PublishVersionRes): PublishVersionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishVersionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishVersionRes;
  static deserializeBinaryFromReader(message: PublishVersionRes, reader: jspb.BinaryReader): PublishVersionRes;
}

export namespace PublishVersionRes {
  export type AsObject = {
  }
}

export class ContentByVersionReq extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getLocale(): string;
  setLocale(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentByVersionReq.AsObject;
  static toObject(includeInstance: boolean, msg: ContentByVersionReq): ContentByVersionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContentByVersionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentByVersionReq;
  static deserializeBinaryFromReader(message: ContentByVersionReq, reader: jspb.BinaryReader): ContentByVersionReq;
}

export namespace ContentByVersionReq {
  export type AsObject = {
    url: string,
    locale: string,
    version: string,
  }
}

export class UpdateByVersionReq extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getLocale(): string;
  setLocale(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateByVersionReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateByVersionReq): UpdateByVersionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateByVersionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateByVersionReq;
  static deserializeBinaryFromReader(message: UpdateByVersionReq, reader: jspb.BinaryReader): UpdateByVersionReq;
}

export namespace UpdateByVersionReq {
  export type AsObject = {
    url: string,
    locale: string,
    content: string,
    version: string,
    message: string,
    title: string,
  }
}

export class SearchContentByVersionReq extends jspb.Message {
  getSearchContent(): string;
  setSearchContent(value: string): void;

  getLocale(): string;
  setLocale(value: string): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchContentByVersionReq.AsObject;
  static toObject(includeInstance: boolean, msg: SearchContentByVersionReq): SearchContentByVersionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchContentByVersionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchContentByVersionReq;
  static deserializeBinaryFromReader(message: SearchContentByVersionReq, reader: jspb.BinaryReader): SearchContentByVersionReq;
}

export namespace SearchContentByVersionReq {
  export type AsObject = {
    searchContent: string,
    locale: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    version: string,
  }
}

export class ReviewFileVersionsReq extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getLocale(): string;
  setLocale(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReviewFileVersionsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ReviewFileVersionsReq): ReviewFileVersionsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReviewFileVersionsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReviewFileVersionsReq;
  static deserializeBinaryFromReader(message: ReviewFileVersionsReq, reader: jspb.BinaryReader): ReviewFileVersionsReq;
}

export namespace ReviewFileVersionsReq {
  export type AsObject = {
    url: string,
    version: string,
    locale: string,
  }
}

export class ReviewFileVersionsRes extends jspb.Message {
  getContent(): string;
  setContent(value: string): void;

  getDiffContent(): string;
  setDiffContent(value: string): void;

  clearImagesList(): void;
  getImagesList(): Array<LearnImage>;
  setImagesList(value: Array<LearnImage>): void;
  addImages(value?: LearnImage, index?: number): LearnImage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReviewFileVersionsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ReviewFileVersionsRes): ReviewFileVersionsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReviewFileVersionsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReviewFileVersionsRes;
  static deserializeBinaryFromReader(message: ReviewFileVersionsRes, reader: jspb.BinaryReader): ReviewFileVersionsRes;
}

export namespace ReviewFileVersionsRes {
  export type AsObject = {
    content: string,
    diffContent: string,
    imagesList: Array<LearnImage.AsObject>,
  }
}

export class ReviewVersionReq extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  getLocale(): string;
  setLocale(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReviewVersionReq.AsObject;
  static toObject(includeInstance: boolean, msg: ReviewVersionReq): ReviewVersionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReviewVersionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReviewVersionReq;
  static deserializeBinaryFromReader(message: ReviewVersionReq, reader: jspb.BinaryReader): ReviewVersionReq;
}

export namespace ReviewVersionReq {
  export type AsObject = {
    version: string,
    locale: string,
  }
}

export class ReviewVersionRes extends jspb.Message {
  getDiffUrls(): string;
  setDiffUrls(value: string): void;

  getDiffFileNames(): string;
  setDiffFileNames(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReviewVersionRes.AsObject;
  static toObject(includeInstance: boolean, msg: ReviewVersionRes): ReviewVersionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReviewVersionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReviewVersionRes;
  static deserializeBinaryFromReader(message: ReviewVersionRes, reader: jspb.BinaryReader): ReviewVersionRes;
}

export namespace ReviewVersionRes {
  export type AsObject = {
    diffUrls: string,
    diffFileNames: string,
  }
}

