// package: api.v1alpha1.classifier
// file: api/v1alpha1/classifier/entities.proto

import * as jspb from "google-protobuf";
import * as api_commons_classifier_pb from "../../../api/commons/classifier_pb";

export class ClassifierEntityTypes extends jspb.Message {
  clearTypesList(): void;
  getTypesList(): Array<api_commons_classifier_pb.ClassifierEntityTypeMap[keyof api_commons_classifier_pb.ClassifierEntityTypeMap]>;
  setTypesList(value: Array<api_commons_classifier_pb.ClassifierEntityTypeMap[keyof api_commons_classifier_pb.ClassifierEntityTypeMap]>): void;
  addTypes(value: api_commons_classifier_pb.ClassifierEntityTypeMap[keyof api_commons_classifier_pb.ClassifierEntityTypeMap], index?: number): api_commons_classifier_pb.ClassifierEntityTypeMap[keyof api_commons_classifier_pb.ClassifierEntityTypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClassifierEntityTypes.AsObject;
  static toObject(includeInstance: boolean, msg: ClassifierEntityTypes): ClassifierEntityTypes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClassifierEntityTypes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClassifierEntityTypes;
  static deserializeBinaryFromReader(message: ClassifierEntityTypes, reader: jspb.BinaryReader): ClassifierEntityTypes;
}

export namespace ClassifierEntityTypes {
  export type AsObject = {
    typesList: Array<api_commons_classifier_pb.ClassifierEntityTypeMap[keyof api_commons_classifier_pb.ClassifierEntityTypeMap]>,
  }
}

export class FileTemplate extends jspb.Message {
  getFileTemplateId(): number;
  setFileTemplateId(value: number): void;

  getFilename(): string;
  setFilename(value: string): void;

  clearFieldsList(): void;
  getFieldsList(): Array<FileTemplate.Field>;
  setFieldsList(value: Array<FileTemplate.Field>): void;
  addFields(value?: FileTemplate.Field, index?: number): FileTemplate.Field;

  hasParseOpts(): boolean;
  clearParseOpts(): void;
  getParseOpts(): ParseOpts | undefined;
  setParseOpts(value?: ParseOpts): void;

  hasConstraints(): boolean;
  clearConstraints(): void;
  getConstraints(): Constraints | undefined;
  setConstraints(value?: Constraints): void;

  getFoid(): number;
  setFoid(value: number): void;

  hasOpts(): boolean;
  clearOpts(): void;
  getOpts(): Opts | undefined;
  setOpts(value?: Opts): void;

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
    fileTemplateId: number,
    filename: string,
    fieldsList: Array<FileTemplate.Field.AsObject>,
    parseOpts?: ParseOpts.AsObject,
    constraints?: Constraints.AsObject,
    foid: number,
    opts?: Opts.AsObject,
  }

  export class Field extends jspb.Message {
    getSyntaxType(): string;
    setSyntaxType(value: string): void;

    getEntityType(): api_commons_classifier_pb.ClassifierEntityTypeMap[keyof api_commons_classifier_pb.ClassifierEntityTypeMap];
    setEntityType(value: api_commons_classifier_pb.ClassifierEntityTypeMap[keyof api_commons_classifier_pb.ClassifierEntityTypeMap]): void;

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
      entityType: api_commons_classifier_pb.ClassifierEntityTypeMap[keyof api_commons_classifier_pb.ClassifierEntityTypeMap],
      name: string,
      format: string,
      rawValue: string,
    }
  }
}

export class Opts extends jspb.Message {
  getDateFormatsMap(): jspb.Map<string, string>;
  clearDateFormatsMap(): void;
  getRenameFieldsMap(): jspb.Map<string, string>;
  clearRenameFieldsMap(): void;
  hasParseOpts(): boolean;
  clearParseOpts(): void;
  getParseOpts(): ParseOpts | undefined;
  setParseOpts(value?: ParseOpts): void;

  hasConstraints(): boolean;
  clearConstraints(): void;
  getConstraints(): Constraints | undefined;
  setConstraints(value?: Constraints): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Opts.AsObject;
  static toObject(includeInstance: boolean, msg: Opts): Opts.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Opts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Opts;
  static deserializeBinaryFromReader(message: Opts, reader: jspb.BinaryReader): Opts;
}

export namespace Opts {
  export type AsObject = {
    dateFormatsMap: Array<[string, string]>,
    renameFieldsMap: Array<[string, string]>,
    parseOpts?: ParseOpts.AsObject,
    constraints?: Constraints.AsObject,
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
  getPositionsMap(): jspb.Map<string, OptsFixed.FieldOpts>;
  clearPositionsMap(): void;
  getHasHeader(): boolean;
  setHasHeader(value: boolean): void;

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
    positionsMap: Array<[string, OptsFixed.FieldOpts.AsObject]>,
    hasHeader: boolean,
  }

  export class FieldOpts extends jspb.Message {
    getStartingPosition(): number;
    setStartingPosition(value: number): void;

    getFieldLength(): number;
    setFieldLength(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FieldOpts.AsObject;
    static toObject(includeInstance: boolean, msg: FieldOpts): FieldOpts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FieldOpts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FieldOpts;
    static deserializeBinaryFromReader(message: FieldOpts, reader: jspb.BinaryReader): FieldOpts;
  }

  export namespace FieldOpts {
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

export class Constraints extends jspb.Message {
  getForbidMap(): jspb.Map<string, ClassifierEntityTypes>;
  clearForbidMap(): void;
  getAllowMap(): jspb.Map<string, ClassifierEntityTypes>;
  clearAllowMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Constraints.AsObject;
  static toObject(includeInstance: boolean, msg: Constraints): Constraints.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Constraints, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Constraints;
  static deserializeBinaryFromReader(message: Constraints, reader: jspb.BinaryReader): Constraints;
}

export namespace Constraints {
  export type AsObject = {
    forbidMap: Array<[string, ClassifierEntityTypes.AsObject]>,
    allowMap: Array<[string, ClassifierEntityTypes.AsObject]>,
  }
}

export class ParseHints extends jspb.Message {
  hasParseOpts(): boolean;
  clearParseOpts(): void;
  getParseOpts(): ParseOpts | undefined;
  setParseOpts(value?: ParseOpts): void;

  hasConstraints(): boolean;
  clearConstraints(): void;
  getConstraints(): Constraints | undefined;
  setConstraints(value?: Constraints): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParseHints.AsObject;
  static toObject(includeInstance: boolean, msg: ParseHints): ParseHints.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParseHints, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParseHints;
  static deserializeBinaryFromReader(message: ParseHints, reader: jspb.BinaryReader): ParseHints;
}

export namespace ParseHints {
  export type AsObject = {
    parseOpts?: ParseOpts.AsObject,
    constraints?: Constraints.AsObject,
  }
}

