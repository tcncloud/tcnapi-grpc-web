// package: api.commons
// file: api/commons/lms.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class RecordField extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): RecordTypeMap[keyof RecordTypeMap];
  setType(value: RecordTypeMap[keyof RecordTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordField.AsObject;
  static toObject(includeInstance: boolean, msg: RecordField): RecordField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordField;
  static deserializeBinaryFromReader(message: RecordField, reader: jspb.BinaryReader): RecordField;
}

export namespace RecordField {
  export type AsObject = {
    name: string,
    type: RecordTypeMap[keyof RecordTypeMap],
  }
}

export class FilePattern extends jspb.Message {
  getType(): FilePatternTypeMap[keyof FilePatternTypeMap];
  setType(value: FilePatternTypeMap[keyof FilePatternTypeMap]): void;

  getDirectory(): string;
  setDirectory(value: string): void;

  getFilename(): string;
  setFilename(value: string): void;

  clearPrefixesList(): void;
  getPrefixesList(): Array<string>;
  setPrefixesList(value: Array<string>): void;
  addPrefixes(value: string, index?: number): string;

  getDateFormat(): string;
  setDateFormat(value: string): void;

  getSuffix(): string;
  setSuffix(value: string): void;

  getFileExtension(): string;
  setFileExtension(value: string): void;

  getDatePrefix(): boolean;
  setDatePrefix(value: boolean): void;

  getDayToUse(): RelativeDayMap[keyof RelativeDayMap];
  setDayToUse(value: RelativeDayMap[keyof RelativeDayMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilePattern.AsObject;
  static toObject(includeInstance: boolean, msg: FilePattern): FilePattern.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilePattern, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilePattern;
  static deserializeBinaryFromReader(message: FilePattern, reader: jspb.BinaryReader): FilePattern;
}

export namespace FilePattern {
  export type AsObject = {
    type: FilePatternTypeMap[keyof FilePatternTypeMap],
    directory: string,
    filename: string,
    prefixesList: Array<string>,
    dateFormat: string,
    suffix: string,
    fileExtension: string,
    datePrefix: boolean,
    dayToUse: RelativeDayMap[keyof RelativeDayMap],
  }
}

export class ConstructedFilename extends jspb.Message {
  hasOverrideFilename(): boolean;
  clearOverrideFilename(): void;
  getOverrideFilename(): google_protobuf_wrappers_pb.StringValue | undefined;
  setOverrideFilename(value?: google_protobuf_wrappers_pb.StringValue): void;

  getPrefix(): string;
  setPrefix(value: string): void;

  getDateFormat(): string;
  setDateFormat(value: string): void;

  getSuffix(): string;
  setSuffix(value: string): void;

  getFileExtension(): string;
  setFileExtension(value: string): void;

  getDatePosition(): DatePositionMap[keyof DatePositionMap];
  setDatePosition(value: DatePositionMap[keyof DatePositionMap]): void;

  getDayToUse(): RelativeDayMap[keyof RelativeDayMap];
  setDayToUse(value: RelativeDayMap[keyof RelativeDayMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConstructedFilename.AsObject;
  static toObject(includeInstance: boolean, msg: ConstructedFilename): ConstructedFilename.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConstructedFilename, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConstructedFilename;
  static deserializeBinaryFromReader(message: ConstructedFilename, reader: jspb.BinaryReader): ConstructedFilename;
}

export namespace ConstructedFilename {
  export type AsObject = {
    overrideFilename?: google_protobuf_wrappers_pb.StringValue.AsObject,
    prefix: string,
    dateFormat: string,
    suffix: string,
    fileExtension: string,
    datePosition: DatePositionMap[keyof DatePositionMap],
    dayToUse: RelativeDayMap[keyof RelativeDayMap],
  }
}

export class PaginationTerminator extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getNegate(): boolean;
  setNegate(value: boolean): void;

  hasExistsCheck(): boolean;
  clearExistsCheck(): void;
  getExistsCheck(): boolean;
  setExistsCheck(value: boolean): void;

  hasNumGreaterThan(): boolean;
  clearNumGreaterThan(): void;
  getNumGreaterThan(): number;
  setNumGreaterThan(value: number): void;

  hasNumLessThan(): boolean;
  clearNumLessThan(): void;
  getNumLessThan(): number;
  setNumLessThan(value: number): void;

  hasNumEquals(): boolean;
  clearNumEquals(): void;
  getNumEquals(): number;
  setNumEquals(value: number): void;

  hasCountLessThan(): boolean;
  clearCountLessThan(): void;
  getCountLessThan(): number;
  setCountLessThan(value: number): void;

  hasStrEquals(): boolean;
  clearStrEquals(): void;
  getStrEquals(): string;
  setStrEquals(value: string): void;

  hasStrContains(): boolean;
  clearStrContains(): void;
  getStrContains(): string;
  setStrContains(value: string): void;

  hasBoolEquals(): boolean;
  clearBoolEquals(): void;
  getBoolEquals(): boolean;
  setBoolEquals(value: boolean): void;

  getOpCase(): PaginationTerminator.OpCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginationTerminator.AsObject;
  static toObject(includeInstance: boolean, msg: PaginationTerminator): PaginationTerminator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaginationTerminator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginationTerminator;
  static deserializeBinaryFromReader(message: PaginationTerminator, reader: jspb.BinaryReader): PaginationTerminator;
}

export namespace PaginationTerminator {
  export type AsObject = {
    key: string,
    negate: boolean,
    existsCheck: boolean,
    numGreaterThan: number,
    numLessThan: number,
    numEquals: number,
    countLessThan: number,
    strEquals: string,
    strContains: string,
    boolEquals: boolean,
  }

  export enum OpCase {
    OP_NOT_SET = 0,
    EXISTS_CHECK = 3,
    NUM_GREATER_THAN = 4,
    NUM_LESS_THAN = 5,
    NUM_EQUALS = 6,
    COUNT_LESS_THAN = 7,
    STR_EQUALS = 8,
    STR_CONTAINS = 9,
    BOOL_EQUALS = 10,
  }
}

export class Expiration extends jspb.Message {
  getUnits(): TimeUnitMap[keyof TimeUnitMap];
  setUnits(value: TimeUnitMap[keyof TimeUnitMap]): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Expiration.AsObject;
  static toObject(includeInstance: boolean, msg: Expiration): Expiration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Expiration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Expiration;
  static deserializeBinaryFromReader(message: Expiration, reader: jspb.BinaryReader): Expiration;
}

export namespace Expiration {
  export type AsObject = {
    units: TimeUnitMap[keyof TimeUnitMap],
    quantity: number,
  }
}

export interface CronTypeMap {
  CRON_TYPE_LMS: 0;
  CRON_TYPE_JOURNEY: 1;
}

export const CronType: CronTypeMap;

export interface EnrichmentTypeMap {
  ENRICHMENT_TYPE_OR: 0;
  ENRICHMENT_TYPE_XOR: 1;
  ENRICHMENT_TYPE_AND: 2;
  ENRICHMENT_TYPE_JOIN: 3;
  ENRICHMENT_TYPE_NOT: 4;
}

export const EnrichmentType: EnrichmentTypeMap;

export interface PrimarySourceMap {
  PRIMARY_SOURCE_LMS: 0;
  PRIMARY_SOURCE_CJS: 1;
}

export const PrimarySource: PrimarySourceMap;

export interface DedupKeyPolicyMap {
  KEEP_FIRST: 0;
  KEEP_LAST: 1;
  KEEP_ALL: 2;
}

export const DedupKeyPolicy: DedupKeyPolicyMap;

export interface RunTypeMap {
  RUN_TYPE_ENABLED: 0;
  RUN_TYPE_DISABLED: 1;
  RUN_TYPE_TEST: 2;
}

export const RunType: RunTypeMap;

export interface ConsentActionTypeMap {
  CONSENT_ACTION_TYPE_ADD: 0;
  CONSENT_ACTION_TYPE_REVOKE: 1;
}

export const ConsentActionType: ConsentActionTypeMap;

export interface RecordTypeMap {
  RECORD_TYPE_ALL: 0;
  RECORD_TYPE_STRING: 1;
  RECORD_TYPE_NUMBER: 2;
  RECORD_TYPE_BOOL: 3;
  RECORD_TYPE_PHONE: 4;
  RECORD_TYPE_CURRENCY: 5;
  RECORD_TYPE_ENRICHED_PHONE: 6;
  RECORD_TYPE_ENRICHED_ZIP: 18;
  RECORD_TYPE_POSTAL_CODE: 7;
  RECORD_TYPE_EMAIL: 8;
  RECORD_TYPE_DATETIME_NOW: 9;
  RECORD_TYPE_DATETIME_TIMESTAMP: 10;
  RECORD_TYPE_DATETIME_DATE: 11;
  RECORD_TYPE_DATETIME_MONTH_AND_DAY: 12;
  RECORD_TYPE_DATETIME_TIME_OF_DAY: 13;
  RECORD_TYPE_REPEATED_RECORDS: 15;
  RECORD_TYPE_RECORD_MAP: 16;
  RECORD_TYPE_ERROR: 17;
  RECORD_TYPE_SOCIAL: 19;
  RECORD_TYPE_DATE_OF_BIRTH: 20;
  RECORD_TYPE_FULL_NAME: 21;
  RECORD_TYPE_ACCOUNT_NUMBER: 22;
  RECORD_TYPE_STRUCT_VALUE: 23;
  RECORD_TYPE_EHR_DETAILS: 24;
}

export const RecordType: RecordTypeMap;

export interface FieldTypeMap {
  FIELD_TYPE_STRING: 0;
  FIELD_TYPE_NUMBER: 1;
  FIELD_TYPE_BOOLEAN: 2;
  FIELD_TYPE_PHONE: 3;
  FIELD_TYPE_CURRENCY: 4;
  FIELD_TYPE_EMAIL: 5;
  FIELD_TYPE_DATETIME_NOW: 6;
  FIELD_TYPE_DATETIME_TIMESTAMP: 7;
  FIELD_TYPE_DATETIME_DATE: 8;
  FIELD_TYPE_DATETIME_MONTH_AND_DAY: 9;
  FIELD_TYPE_DATETIME_TIME_OF_DAY: 10;
  FIELD_TYPE_POSTAL_CODE: 12;
  FIELD_TYPE_ENRICHED_PHONE: 13;
  FIELD_TYPE_ENRICHED_ZIP: 14;
  FIELD_TYPE_SOCIAL: 15;
  FIELD_TYPE_DATE_OF_BIRTH: 16;
  FIELD_TYPE_FULL_NAME: 17;
  FIELD_TYPE_ACCOUNT_NUMBER: 18;
  FIELD_TYPE_ERROR: 19;
  FIELD_TYPE_STRUCT_VALUE: 20;
  FIELD_TYPE_EHR_DETAILS: 21;
}

export const FieldType: FieldTypeMap;

export interface FileFormatMap {
  FILE_FORMAT_CSV: 0;
  FILE_FORMAT_CUSTOM_DELIM: 1;
  FILE_FORMAT_FIXED_FORMAT: 2;
  FILE_FORMAT_TAB: 3;
  FILE_FORMAT_JSON: 4;
}

export const FileFormat: FileFormatMap;

export interface PipelineElementStatusTypeMap {
  PIPELINE_ELEMENT_STATUS_TYPE_INITIALIZED: 0;
  PIPELINE_ELEMENT_STATUS_TYPE_RUNNING: 1;
  PIPELINE_ELEMENT_STATUS_TYPE_STOPPED: 2;
  PIPELINE_ELEMENT_STATUS_TYPE_FAILED: 3;
}

export const PipelineElementStatusType: PipelineElementStatusTypeMap;

export interface EntrypointTypeMap {
  ENTRYPOINT_TYPE_NON: 0;
  ENTRYPOINT_TYPE_API: 1;
  ENTRYPOINT_TYPE_SFTP: 2;
}

export const EntrypointType: EntrypointTypeMap;

export interface DuplicatePolicyTypeMap {
  DUPLICATE_POLICY_TYPE_KEEP_RECORD_DISCARD_NUMBER: 0;
  DUPLICATE_POLICY_TYPE_ALLOW_RECORD_KEEP_NUMBER: 1;
  DUPLICATE_POLICY_TYPE_DISCARD_RECORD: 2;
  DUPLICATE_POLICY_TYPE_DUPLICATE_LIST: 3;
}

export const DuplicatePolicyType: DuplicatePolicyTypeMap;

export interface AbsentPolicyTypeMap {
  ABSENT_POLICY_TYPE_KEEP: 0;
  ABSENT_POLICY_TYPE_DISCARD: 1;
}

export const AbsentPolicyType: AbsentPolicyTypeMap;

export interface DialOrderTypeMap {
  DIAL_ORDER_TYPE_FIRST: 0;
  DIAL_ORDER_TYPE_NATURAL: 1;
  DIAL_ORDER_TYPE_CUSTOM: 2;
}

export const DialOrderType: DialOrderTypeMap;

export interface ExportTypeMap {
  EXPORT_TYPE_FILENAME: 0;
  EXPORT_TYPE_SFTP: 1;
}

export const ExportType: ExportTypeMap;

export interface SortOrderMap {
  SORT_ORDER_ASCENDING: 0;
  SORT_ORDER_DESCENDING: 1;
}

export const SortOrder: SortOrderMap;

export interface CompareTypeMap {
  COMPARE_TYPE_STRING: 0;
  COMPARE_TYPE_NUMBER: 1;
  COMPARE_TYPE_BOOL: 2;
}

export const CompareType: CompareTypeMap;

export interface CompareOperatorMap {
  COMPARE_OPERATOR_EQUAL_TO: 0;
  COMPARE_OPERATOR_GREATER: 1;
  COMPARE_OPERATOR_GREATER_EQUAL: 2;
  COMPARE_OPERATOR_LESS: 3;
  COMPARE_OPERATOR_LESS_EQUAL: 4;
  COMPARE_OPERATOR_STARTS_WITH: 5;
  COMPARE_OPERATOR_ENDS_WITH: 6;
  COMPARE_OPERATOR_CONTAINS: 7;
}

export const CompareOperator: CompareOperatorMap;

export interface ChainOperatorMap {
  CHAIN_OPERATOR_AND: 0;
  CHAIN_OPERATOR_OR: 1;
}

export const ChainOperator: ChainOperatorMap;

export interface DeDupActionsMap {
  DE_DUP_ACTIONS_KEEP_FIRST: 0;
  DE_DUP_ACTIONS_KEEP_BOTH: 3;
  DE_DUP_ACTIONS_KEEP_LAST: 4;
  DE_DUP_ACTIONS_KEEP_NEITHER: 5;
}

export const DeDupActions: DeDupActionsMap;

export interface DatePositionMap {
  DATE_POSITION_FIRST: 0;
  DATE_POSITION_BEFORE_FILENAME: 1;
  DATE_POSITION_AFTER_FILENAME: 2;
  DATE_POSITION_LAST: 3;
}

export const DatePosition: DatePositionMap;

export interface RelativeDayMap {
  RELATIVE_DAY_TODAY: 0;
  RELATIVE_DAY_YESTERDAY: 1;
  RELATIVE_DAY_LAST_FRIDAY: 2;
}

export const RelativeDay: RelativeDayMap;

export interface FilePatternTypeMap {
  FILE_PATTERN_TYPE_GLOB: 0;
  FILE_PATTERN_TYPE_CONSTRUCTED: 1;
  FILE_PATTERN_TYPE_ORIGINAL: 2;
}

export const FilePatternType: FilePatternTypeMap;

export interface DateTimePrecisionMap {
  DATETIME_PRECISION_NOW: 0;
  DATETIME_PRECISION_TIMESTAMP: 1;
  DATETIME_PRECISION_DATE: 2;
  DATETIME_PRECISION_MONTH_AND_DAY: 3;
  DATETIME_PRECISION_TIME_OF_DAY: 4;
}

export const DateTimePrecision: DateTimePrecisionMap;

export interface HttpVerbMap {
  HTTP_VERB_GET: 0;
  HTTP_VERB_POST: 1;
}

export const HttpVerb: HttpVerbMap;

export interface ComplianceListTypeMap {
  COMPLIANCE_LIST_TYPE_SCRUB: 0;
  COMPLIANCE_LIST_TYPE_CONSENT: 1;
}

export const ComplianceListType: ComplianceListTypeMap;

export interface EventStateMap {
  EVENT_STATE_NONE: 0;
  EVENT_STATE_KICKOFF: 1;
  EVENT_STATE_CHECK: 2;
  EVENT_STATE_PROCESS: 3;
  EVENT_STATE_CLEANUP: 4;
  EVENT_STATE_FINISHED: 5;
}

export const EventState: EventStateMap;

export interface TimeUnitMap {
  DEFAULT: 0;
  TIME_WEEKS: 1;
  TIME_DAYS: 2;
  TIME_HOURS: 3;
}

export const TimeUnit: TimeUnitMap;

