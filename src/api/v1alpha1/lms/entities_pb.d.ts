// package: api.v1alpha1.lms
// file: api/v1alpha1/lms/entities.proto

import * as jspb from "google-protobuf";
import * as api_v0alpha_lms_pb from "../../../api/v0alpha/lms_pb";

export class FileTemplateV2 extends jspb.Message {
  hasLegacyTemplate(): boolean;
  clearLegacyTemplate(): void;
  getLegacyTemplate(): api_v0alpha_lms_pb.FileTemplate | undefined;
  setLegacyTemplate(value?: api_v0alpha_lms_pb.FileTemplate): void;

  hasDockTemplate(): boolean;
  clearDockTemplate(): void;
  getDockTemplate(): FileTemplate | undefined;
  setDockTemplate(value?: FileTemplate): void;

  getTemplateCase(): FileTemplateV2.TemplateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileTemplateV2.AsObject;
  static toObject(includeInstance: boolean, msg: FileTemplateV2): FileTemplateV2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileTemplateV2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileTemplateV2;
  static deserializeBinaryFromReader(message: FileTemplateV2, reader: jspb.BinaryReader): FileTemplateV2;
}

export namespace FileTemplateV2 {
  export type AsObject = {
    legacyTemplate?: api_v0alpha_lms_pb.FileTemplate.AsObject,
    dockTemplate?: FileTemplate.AsObject,
  }

  export enum TemplateCase {
    TEMPLATE_NOT_SET = 0,
    LEGACY_TEMPLATE = 1,
    DOCK_TEMPLATE = 2,
  }
}

export class FileTemplates extends jspb.Message {
  clearTemplatesList(): void;
  getTemplatesList(): Array<FileTemplateV2>;
  setTemplatesList(value: Array<FileTemplateV2>): void;
  addTemplates(value?: FileTemplateV2, index?: number): FileTemplateV2;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileTemplates.AsObject;
  static toObject(includeInstance: boolean, msg: FileTemplates): FileTemplates.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileTemplates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileTemplates;
  static deserializeBinaryFromReader(message: FileTemplates, reader: jspb.BinaryReader): FileTemplates;
}

export namespace FileTemplates {
  export type AsObject = {
    templatesList: Array<FileTemplateV2.AsObject>,
  }
}

export class FileTemplate extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getFileTemplateId(): number;
  setFileTemplateId(value: number): void;

  getFilename(): string;
  setFilename(value: string): void;

  clearFieldsList(): void;
  getFieldsList(): Array<Field>;
  setFieldsList(value: Array<Field>): void;
  addFields(value?: Field, index?: number): Field;

  hasParseOpts(): boolean;
  clearParseOpts(): void;
  getParseOpts(): ParseOpts | undefined;
  setParseOpts(value?: ParseOpts): void;

  getFoid(): number;
  setFoid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: FileTemplate): FileTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileTemplate;
  static deserializeBinaryFromReader(message: FileTemplate, reader: jspb.BinaryReader): FileTemplate;
}

export namespace FileTemplate {
  export type AsObject = {
    orgId: string,
    fileTemplateId: number,
    filename: string,
    fieldsList: Array<Field.AsObject>,
    parseOpts?: ParseOpts.AsObject,
    foid: number,
  }
}

export class Field extends jspb.Message {
  getSyntaxType(): string;
  setSyntaxType(value: string): void;

  getPresiType(): string;
  setPresiType(value: string): void;

  getName(): string;
  setName(value: string): void;

  getFormat(): string;
  setFormat(value: string): void;

  getRawValue(): string;
  setRawValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Field.AsObject;
  static toObject(includeInstance: boolean, msg: Field): Field.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Field, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Field;
  static deserializeBinaryFromReader(message: Field, reader: jspb.BinaryReader): Field;
}

export namespace Field {
  export type AsObject = {
    syntaxType: string,
    presiType: string,
    name: string,
    format: string,
    rawValue: string,
  }
}

export class ParseOpts extends jspb.Message {
  hasCsv(): boolean;
  clearCsv(): void;
  getCsv(): OptsCsv | undefined;
  setCsv(value?: OptsCsv): void;

  hasJson(): boolean;
  clearJson(): void;
  getJson(): OptsJson | undefined;
  setJson(value?: OptsJson): void;

  hasJsonl(): boolean;
  clearJsonl(): void;
  getJsonl(): OptsJsonL | undefined;
  setJsonl(value?: OptsJsonL): void;

  hasFixed(): boolean;
  clearFixed(): void;
  getFixed(): OptsFixed | undefined;
  setFixed(value?: OptsFixed): void;

  hasParquet(): boolean;
  clearParquet(): void;
  getParquet(): OptsParquet | undefined;
  setParquet(value?: OptsParquet): void;

  getFtypeCase(): ParseOpts.FtypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParseOpts.AsObject;
  static toObject(includeInstance: boolean, msg: ParseOpts): ParseOpts.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParseOpts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParseOpts;
  static deserializeBinaryFromReader(message: ParseOpts, reader: jspb.BinaryReader): ParseOpts;
}

export namespace ParseOpts {
  export type AsObject = {
    csv?: OptsCsv.AsObject,
    json?: OptsJson.AsObject,
    jsonl?: OptsJsonL.AsObject,
    fixed?: OptsFixed.AsObject,
    parquet?: OptsParquet.AsObject,
  }

  export enum FtypeCase {
    FTYPE_NOT_SET = 0,
    CSV = 1,
    JSON = 2,
    JSONL = 3,
    FIXED = 4,
    PARQUET = 5,
  }
}

export class OptsCsv extends jspb.Message {
  getHasHeader(): boolean;
  setHasHeader(value: boolean): void;

  getSkipRows(): number;
  setSkipRows(value: number): void;

  clearHeaderList(): void;
  getHeaderList(): Array<string>;
  setHeaderList(value: Array<string>): void;
  addHeader(value: string, index?: number): string;

  getSeparator(): string;
  setSeparator(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OptsCsv.AsObject;
  static toObject(includeInstance: boolean, msg: OptsCsv): OptsCsv.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OptsCsv, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OptsCsv;
  static deserializeBinaryFromReader(message: OptsCsv, reader: jspb.BinaryReader): OptsCsv;
}

export namespace OptsCsv {
  export type AsObject = {
    hasHeader: boolean,
    skipRows: number,
    headerList: Array<string>,
    separator: string,
  }
}

export class OptsJson extends jspb.Message {
  getRecordsRoot(): string;
  setRecordsRoot(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OptsJson.AsObject;
  static toObject(includeInstance: boolean, msg: OptsJson): OptsJson.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OptsJson, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OptsJson;
  static deserializeBinaryFromReader(message: OptsJson, reader: jspb.BinaryReader): OptsJson;
}

export namespace OptsJson {
  export type AsObject = {
    recordsRoot: string,
  }
}

export class OptsJsonL extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OptsJsonL.AsObject;
  static toObject(includeInstance: boolean, msg: OptsJsonL): OptsJsonL.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OptsJsonL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OptsJsonL;
  static deserializeBinaryFromReader(message: OptsJsonL, reader: jspb.BinaryReader): OptsJsonL;
}

export namespace OptsJsonL {
  export type AsObject = {
  }
}

export class OptsFixed extends jspb.Message {
  getHasHeader(): boolean;
  setHasHeader(value: boolean): void;

  clearHeaderList(): void;
  getHeaderList(): Array<OptsFixed.Field>;
  setHeaderList(value: Array<OptsFixed.Field>): void;
  addHeader(value?: OptsFixed.Field, index?: number): OptsFixed.Field;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OptsFixed.AsObject;
  static toObject(includeInstance: boolean, msg: OptsFixed): OptsFixed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OptsFixed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OptsFixed;
  static deserializeBinaryFromReader(message: OptsFixed, reader: jspb.BinaryReader): OptsFixed;
}

export namespace OptsFixed {
  export type AsObject = {
    hasHeader: boolean,
    headerList: Array<OptsFixed.Field.AsObject>,
  }

  export class Field extends jspb.Message {
    getStartingPosition(): number;
    setStartingPosition(value: number): void;

    getFieldLength(): number;
    setFieldLength(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Field.AsObject;
    static toObject(includeInstance: boolean, msg: Field): Field.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Field, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Field;
    static deserializeBinaryFromReader(message: Field, reader: jspb.BinaryReader): Field;
  }

  export namespace Field {
    export type AsObject = {
      startingPosition: number,
      fieldLength: number,
    }
  }
}

export class OptsParquet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OptsParquet.AsObject;
  static toObject(includeInstance: boolean, msg: OptsParquet): OptsParquet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OptsParquet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OptsParquet;
  static deserializeBinaryFromReader(message: OptsParquet, reader: jspb.BinaryReader): OptsParquet;
}

export namespace OptsParquet {
  export type AsObject = {
  }
}

export class NewTemplate extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getFilename(): string;
  setFilename(value: string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: NewTemplate): NewTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewTemplate;
  static deserializeBinaryFromReader(message: NewTemplate, reader: jspb.BinaryReader): NewTemplate;
}

export namespace NewTemplate {
  export type AsObject = {
    orgId: string,
    filename: string,
    data: Uint8Array | string,
  }
}

export class ExistingTemplate extends jspb.Message {
  getFileTemplateId(): number;
  setFileTemplateId(value: number): void;

  hasParseOpts(): boolean;
  clearParseOpts(): void;
  getParseOpts(): ParseOpts | undefined;
  setParseOpts(value?: ParseOpts): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExistingTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: ExistingTemplate): ExistingTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExistingTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExistingTemplate;
  static deserializeBinaryFromReader(message: ExistingTemplate, reader: jspb.BinaryReader): ExistingTemplate;
}

export namespace ExistingTemplate {
  export type AsObject = {
    fileTemplateId: number,
    parseOpts?: ParseOpts.AsObject,
  }
}

