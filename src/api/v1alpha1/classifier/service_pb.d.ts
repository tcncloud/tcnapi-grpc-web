// package: api.v1alpha1.classifier
// file: api/v1alpha1/classifier/service.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../annotations/authz_pb";
import * as api_commons_classifier_pb from "../../../api/commons/classifier_pb";
import * as api_v1alpha1_classifier_entities_pb from "../../../api/v1alpha1/classifier/entities_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ParseFileRequest extends jspb.Message {
  hasRawData(): boolean;
  clearRawData(): void;
  getRawData(): Uint8Array | string;
  getRawData_asU8(): Uint8Array;
  getRawData_asB64(): string;
  setRawData(value: Uint8Array | string): void;

  hasReparseFile(): boolean;
  clearReparseFile(): void;
  getReparseFile(): ParseFileRequest.ReParseFile | undefined;
  setReparseFile(value?: ParseFileRequest.ReParseFile): void;

  hasParseWithHints(): boolean;
  clearParseWithHints(): void;
  getParseWithHints(): ParseFileRequest.ParseWithHints | undefined;
  setParseWithHints(value?: ParseFileRequest.ParseWithHints): void;

  getName(): string;
  setName(value: string): void;

  getOptCase(): ParseFileRequest.OptCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParseFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ParseFileRequest): ParseFileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParseFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParseFileRequest;
  static deserializeBinaryFromReader(message: ParseFileRequest, reader: jspb.BinaryReader): ParseFileRequest;
}

export namespace ParseFileRequest {
  export type AsObject = {
    rawData: Uint8Array | string,
    reparseFile?: ParseFileRequest.ReParseFile.AsObject,
    parseWithHints?: ParseFileRequest.ParseWithHints.AsObject,
    name: string,
  }

  export class ReParseFile extends jspb.Message {
    getFileTemplateId(): string;
    setFileTemplateId(value: string): void;

    hasHints(): boolean;
    clearHints(): void;
    getHints(): api_v1alpha1_classifier_entities_pb.ParseHints | undefined;
    setHints(value?: api_v1alpha1_classifier_entities_pb.ParseHints): void;

    hasOpts(): boolean;
    clearOpts(): void;
    getOpts(): api_v1alpha1_classifier_entities_pb.Opts | undefined;
    setOpts(value?: api_v1alpha1_classifier_entities_pb.Opts): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReParseFile.AsObject;
    static toObject(includeInstance: boolean, msg: ReParseFile): ReParseFile.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReParseFile, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReParseFile;
    static deserializeBinaryFromReader(message: ReParseFile, reader: jspb.BinaryReader): ReParseFile;
  }

  export namespace ReParseFile {
    export type AsObject = {
      fileTemplateId: string,
      hints?: api_v1alpha1_classifier_entities_pb.ParseHints.AsObject,
      opts?: api_v1alpha1_classifier_entities_pb.Opts.AsObject,
    }
  }

  export class ParseWithHints extends jspb.Message {
    getRawData(): Uint8Array | string;
    getRawData_asU8(): Uint8Array;
    getRawData_asB64(): string;
    setRawData(value: Uint8Array | string): void;

    hasOpts(): boolean;
    clearOpts(): void;
    getOpts(): api_v1alpha1_classifier_entities_pb.Opts | undefined;
    setOpts(value?: api_v1alpha1_classifier_entities_pb.Opts): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ParseWithHints.AsObject;
    static toObject(includeInstance: boolean, msg: ParseWithHints): ParseWithHints.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ParseWithHints, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ParseWithHints;
    static deserializeBinaryFromReader(message: ParseWithHints, reader: jspb.BinaryReader): ParseWithHints;
  }

  export namespace ParseWithHints {
    export type AsObject = {
      rawData: Uint8Array | string,
      opts?: api_v1alpha1_classifier_entities_pb.Opts.AsObject,
    }
  }

  export enum OptCase {
    OPT_NOT_SET = 0,
    RAW_DATA = 3,
    REPARSE_FILE = 4,
    PARSE_WITH_HINTS = 6,
  }
}

export class ParseFileResponse extends jspb.Message {
  hasFileTemplate(): boolean;
  clearFileTemplate(): void;
  getFileTemplate(): api_v1alpha1_classifier_entities_pb.FileTemplate | undefined;
  setFileTemplate(value?: api_v1alpha1_classifier_entities_pb.FileTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParseFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ParseFileResponse): ParseFileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParseFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParseFileResponse;
  static deserializeBinaryFromReader(message: ParseFileResponse, reader: jspb.BinaryReader): ParseFileResponse;
}

export namespace ParseFileResponse {
  export type AsObject = {
    fileTemplate?: api_v1alpha1_classifier_entities_pb.FileTemplate.AsObject,
  }
}

export class UpdateFileTemplateRequest extends jspb.Message {
  hasFileTemplate(): boolean;
  clearFileTemplate(): void;
  getFileTemplate(): api_v1alpha1_classifier_entities_pb.FileTemplate | undefined;
  setFileTemplate(value?: api_v1alpha1_classifier_entities_pb.FileTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFileTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFileTemplateRequest): UpdateFileTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFileTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFileTemplateRequest;
  static deserializeBinaryFromReader(message: UpdateFileTemplateRequest, reader: jspb.BinaryReader): UpdateFileTemplateRequest;
}

export namespace UpdateFileTemplateRequest {
  export type AsObject = {
    fileTemplate?: api_v1alpha1_classifier_entities_pb.FileTemplate.AsObject,
  }
}

export class UpdateFileTemplateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFileTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFileTemplateResponse): UpdateFileTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFileTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFileTemplateResponse;
  static deserializeBinaryFromReader(message: UpdateFileTemplateResponse, reader: jspb.BinaryReader): UpdateFileTemplateResponse;
}

export namespace UpdateFileTemplateResponse {
  export type AsObject = {
  }
}

export class DeleteFileTemplateRequest extends jspb.Message {
  getFileTemplate(): string;
  setFileTemplate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFileTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFileTemplateRequest): DeleteFileTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFileTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFileTemplateRequest;
  static deserializeBinaryFromReader(message: DeleteFileTemplateRequest, reader: jspb.BinaryReader): DeleteFileTemplateRequest;
}

export namespace DeleteFileTemplateRequest {
  export type AsObject = {
    fileTemplate: string,
  }
}

export class DeleteFileTemplateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFileTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFileTemplateResponse): DeleteFileTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFileTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFileTemplateResponse;
  static deserializeBinaryFromReader(message: DeleteFileTemplateResponse, reader: jspb.BinaryReader): DeleteFileTemplateResponse;
}

export namespace DeleteFileTemplateResponse {
  export type AsObject = {
  }
}

export class ListFileTemplatesRequest extends jspb.Message {
  getPrevId(): string;
  setPrevId(value: string): void;

  getAsc(): boolean;
  setAsc(value: boolean): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFileTemplatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFileTemplatesRequest): ListFileTemplatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFileTemplatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFileTemplatesRequest;
  static deserializeBinaryFromReader(message: ListFileTemplatesRequest, reader: jspb.BinaryReader): ListFileTemplatesRequest;
}

export namespace ListFileTemplatesRequest {
  export type AsObject = {
    prevId: string,
    asc: boolean,
    pageSize: number,
  }
}

export class ListFileTemplatesResponse extends jspb.Message {
  clearFileTemplatesList(): void;
  getFileTemplatesList(): Array<api_v1alpha1_classifier_entities_pb.FileTemplate>;
  setFileTemplatesList(value: Array<api_v1alpha1_classifier_entities_pb.FileTemplate>): void;
  addFileTemplates(value?: api_v1alpha1_classifier_entities_pb.FileTemplate, index?: number): api_v1alpha1_classifier_entities_pb.FileTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFileTemplatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFileTemplatesResponse): ListFileTemplatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFileTemplatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFileTemplatesResponse;
  static deserializeBinaryFromReader(message: ListFileTemplatesResponse, reader: jspb.BinaryReader): ListFileTemplatesResponse;
}

export namespace ListFileTemplatesResponse {
  export type AsObject = {
    fileTemplatesList: Array<api_v1alpha1_classifier_entities_pb.FileTemplate.AsObject>,
  }
}

export class GetFileTemplateRequest extends jspb.Message {
  getFileTemplateId(): string;
  setFileTemplateId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileTemplateRequest): GetFileTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFileTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileTemplateRequest;
  static deserializeBinaryFromReader(message: GetFileTemplateRequest, reader: jspb.BinaryReader): GetFileTemplateRequest;
}

export namespace GetFileTemplateRequest {
  export type AsObject = {
    fileTemplateId: string,
  }
}

export class GetFileTemplateResponse extends jspb.Message {
  hasFileTemplate(): boolean;
  clearFileTemplate(): void;
  getFileTemplate(): api_v1alpha1_classifier_entities_pb.FileTemplate | undefined;
  setFileTemplate(value?: api_v1alpha1_classifier_entities_pb.FileTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileTemplateResponse): GetFileTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFileTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileTemplateResponse;
  static deserializeBinaryFromReader(message: GetFileTemplateResponse, reader: jspb.BinaryReader): GetFileTemplateResponse;
}

export namespace GetFileTemplateResponse {
  export type AsObject = {
    fileTemplate?: api_v1alpha1_classifier_entities_pb.FileTemplate.AsObject,
  }
}

export class ListEventsRequest extends jspb.Message {
  getElementId(): string;
  setElementId(value: string): void;

  hasBegin(): boolean;
  clearBegin(): void;
  getBegin(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBegin(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTimeRange(): string;
  setTimeRange(value: string): void;

  getEntrypointId(): string;
  setEntrypointId(value: string): void;

  getParentId(): string;
  setParentId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventsRequest): ListEventsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventsRequest;
  static deserializeBinaryFromReader(message: ListEventsRequest, reader: jspb.BinaryReader): ListEventsRequest;
}

export namespace ListEventsRequest {
  export type AsObject = {
    elementId: string,
    begin?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    end?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timeRange: string,
    entrypointId: string,
    parentId: string,
  }
}

export class ListEventsResponse extends jspb.Message {
  clearRowsList(): void;
  getRowsList(): Array<ListEventsResponse.Row>;
  setRowsList(value: Array<ListEventsResponse.Row>): void;
  addRows(value?: ListEventsResponse.Row, index?: number): ListEventsResponse.Row;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventsResponse): ListEventsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventsResponse;
  static deserializeBinaryFromReader(message: ListEventsResponse, reader: jspb.BinaryReader): ListEventsResponse;
}

export namespace ListEventsResponse {
  export type AsObject = {
    rowsList: Array<ListEventsResponse.Row.AsObject>,
  }

  export class Row extends jspb.Message {
    getInputRecordCount(): number;
    setInputRecordCount(value: number): void;

    getOutputRecordCount(): number;
    setOutputRecordCount(value: number): void;

    getDiscardedRecordCount(): number;
    setDiscardedRecordCount(value: number): void;

    hasBegin(): boolean;
    clearBegin(): void;
    getBegin(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setBegin(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasEnd(): boolean;
    clearEnd(): void;
    getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getElementId(): string;
    setElementId(value: string): void;

    clearEntrypointsList(): void;
    getEntrypointsList(): Array<string>;
    setEntrypointsList(value: Array<string>): void;
    addEntrypoints(value: string, index?: number): string;

    clearParentIdsList(): void;
    getParentIdsList(): Array<string>;
    setParentIdsList(value: Array<string>): void;
    addParentIds(value: string, index?: number): string;

    clearColumnsList(): void;
    getColumnsList(): Array<string>;
    setColumnsList(value: Array<string>): void;
    addColumns(value: string, index?: number): string;

    getTotalQueueWaitSeconds(): number;
    setTotalQueueWaitSeconds(value: number): void;

    getTotalProcessingSeconds(): number;
    setTotalProcessingSeconds(value: number): void;

    clearMsgsList(): void;
    getMsgsList(): Array<string>;
    setMsgsList(value: Array<string>): void;
    addMsgs(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Row.AsObject;
    static toObject(includeInstance: boolean, msg: Row): Row.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Row, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Row;
    static deserializeBinaryFromReader(message: Row, reader: jspb.BinaryReader): Row;
  }

  export namespace Row {
    export type AsObject = {
      inputRecordCount: number,
      outputRecordCount: number,
      discardedRecordCount: number,
      begin?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      end?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      elementId: string,
      entrypointsList: Array<string>,
      parentIdsList: Array<string>,
      columnsList: Array<string>,
      totalQueueWaitSeconds: number,
      totalProcessingSeconds: number,
      msgsList: Array<string>,
    }
  }
}

export class PeekListRequest extends jspb.Message {
  hasBegin(): boolean;
  clearBegin(): void;
  getBegin(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBegin(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getExternalTag(): string;
  setExternalTag(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getAsc(): boolean;
  setAsc(value: boolean): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getElementId(): string;
  setElementId(value: string): void;

  clearColumnsList(): void;
  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): void;
  addColumns(value: string, index?: number): string;

  getEntrypointId(): string;
  setEntrypointId(value: string): void;

  getParentId(): string;
  setParentId(value: string): void;

  getViewDiscards(): boolean;
  setViewDiscards(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeekListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PeekListRequest): PeekListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PeekListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeekListRequest;
  static deserializeBinaryFromReader(message: PeekListRequest, reader: jspb.BinaryReader): PeekListRequest;
}

export namespace PeekListRequest {
  export type AsObject = {
    begin?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    end?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    externalTag: string,
    pageToken: string,
    asc: boolean,
    pageSize: number,
    elementId: string,
    columnsList: Array<string>,
    entrypointId: string,
    parentId: string,
    viewDiscards: boolean,
  }
}

export class PeekListResponse extends jspb.Message {
  clearJsonRecordsList(): void;
  getJsonRecordsList(): Array<string>;
  setJsonRecordsList(value: Array<string>): void;
  addJsonRecords(value: string, index?: number): string;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeekListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PeekListResponse): PeekListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PeekListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeekListResponse;
  static deserializeBinaryFromReader(message: PeekListResponse, reader: jspb.BinaryReader): PeekListResponse;
}

export namespace PeekListResponse {
  export type AsObject = {
    jsonRecordsList: Array<string>,
    pageToken: string,
  }
}

