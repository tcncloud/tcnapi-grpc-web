// package: api.v1alpha1.classifier
// file: api/v1alpha1/classifier/service.proto

import * as jspb from "google-protobuf";
import * as api_v1alpha1_classifier_entities_pb from "../../../api/v1alpha1/classifier/entities_pb";

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
    getFileTemplateId(): number;
    setFileTemplateId(value: number): void;

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
      fileTemplateId: number,
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
  getFileTemplate(): number;
  setFileTemplate(value: number): void;

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
    fileTemplate: number,
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
  getPrevId(): number;
  setPrevId(value: number): void;

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
    prevId: number,
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
  getFileTemplateId(): number;
  setFileTemplateId(value: number): void;

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
    fileTemplateId: number,
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

