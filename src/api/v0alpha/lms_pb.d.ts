// package: api.v0alpha
// file: api/v0alpha/lms.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../annotations/authz_pb";
import * as api_commons_communication_pb from "../../api/commons/communication_pb";
import * as api_commons_compliance_pb from "../../api/commons/compliance_pb";
import * as api_commons_lms_pb from "../../api/commons/lms_pb";
import * as api_commons_perms_pb from "../../api/commons/perms_pb";
import * as api_commons_types_pb from "../../api/commons/types_pb";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class ListPoolsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPoolsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPoolsRequest): ListPoolsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPoolsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPoolsRequest;
  static deserializeBinaryFromReader(message: ListPoolsRequest, reader: jspb.BinaryReader): ListPoolsRequest;
}

export namespace ListPoolsRequest {
  export type AsObject = {
  }
}

export class ListPoolsResponse extends jspb.Message {
  clearPoolsList(): void;
  getPoolsList(): Array<Pool>;
  setPoolsList(value: Array<Pool>): void;
  addPools(value?: Pool, index?: number): Pool;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPoolsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPoolsResponse): ListPoolsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPoolsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPoolsResponse;
  static deserializeBinaryFromReader(message: ListPoolsResponse, reader: jspb.BinaryReader): ListPoolsResponse;
}

export namespace ListPoolsResponse {
  export type AsObject = {
    poolsList: Array<Pool.AsObject>,
  }
}

export class Pool extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDesc(): string;
  setDesc(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pool.AsObject;
  static toObject(includeInstance: boolean, msg: Pool): Pool.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Pool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pool;
  static deserializeBinaryFromReader(message: Pool, reader: jspb.BinaryReader): Pool;
}

export namespace Pool {
  export type AsObject = {
    id: string,
    desc: string,
  }
}

export class GetPublicKeyReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublicKeyReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublicKeyReq): GetPublicKeyReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPublicKeyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublicKeyReq;
  static deserializeBinaryFromReader(message: GetPublicKeyReq, reader: jspb.BinaryReader): GetPublicKeyReq;
}

export namespace GetPublicKeyReq {
  export type AsObject = {
  }
}

export class PublicKey extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicKey.AsObject;
  static toObject(includeInstance: boolean, msg: PublicKey): PublicKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublicKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicKey;
  static deserializeBinaryFromReader(message: PublicKey, reader: jspb.BinaryReader): PublicKey;
}

export namespace PublicKey {
  export type AsObject = {
    key: string,
  }
}

export class FindFieldUsagesReq extends jspb.Message {
  getFieldName(): string;
  setFieldName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindFieldUsagesReq.AsObject;
  static toObject(includeInstance: boolean, msg: FindFieldUsagesReq): FindFieldUsagesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindFieldUsagesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindFieldUsagesReq;
  static deserializeBinaryFromReader(message: FindFieldUsagesReq, reader: jspb.BinaryReader): FindFieldUsagesReq;
}

export namespace FindFieldUsagesReq {
  export type AsObject = {
    fieldName: string,
  }
}

export class NameAndId extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NameAndId.AsObject;
  static toObject(includeInstance: boolean, msg: NameAndId): NameAndId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NameAndId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NameAndId;
  static deserializeBinaryFromReader(message: NameAndId, reader: jspb.BinaryReader): NameAndId;
}

export namespace NameAndId {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class FindFieldUsagesRes extends jspb.Message {
  getFieldName(): string;
  setFieldName(value: string): void;

  clearFileTemplatesList(): void;
  getFileTemplatesList(): Array<NameAndId>;
  setFileTemplatesList(value: Array<NameAndId>): void;
  addFileTemplates(value?: NameAndId, index?: number): NameAndId;

  clearElementsList(): void;
  getElementsList(): Array<NameAndId>;
  setElementsList(value: Array<NameAndId>): void;
  addElements(value?: NameAndId, index?: number): NameAndId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindFieldUsagesRes.AsObject;
  static toObject(includeInstance: boolean, msg: FindFieldUsagesRes): FindFieldUsagesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindFieldUsagesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindFieldUsagesRes;
  static deserializeBinaryFromReader(message: FindFieldUsagesRes, reader: jspb.BinaryReader): FindFieldUsagesRes;
}

export namespace FindFieldUsagesRes {
  export type AsObject = {
    fieldName: string,
    fileTemplatesList: Array<NameAndId.AsObject>,
    elementsList: Array<NameAndId.AsObject>,
  }
}

export class ElementError extends jspb.Message {
  hasInvalidExpression(): boolean;
  clearInvalidExpression(): void;
  getInvalidExpression(): ElementError.InvalidExpression | undefined;
  setInvalidExpression(value?: ElementError.InvalidExpression): void;

  hasMissingField(): boolean;
  clearMissingField(): void;
  getMissingField(): ElementError.MissingField | undefined;
  setMissingField(value?: ElementError.MissingField): void;

  hasBadFieldType(): boolean;
  clearBadFieldType(): void;
  getBadFieldType(): ElementError.BadFieldType | undefined;
  setBadFieldType(value?: ElementError.BadFieldType): void;

  getReasonCase(): ElementError.ReasonCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementError.AsObject;
  static toObject(includeInstance: boolean, msg: ElementError): ElementError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementError;
  static deserializeBinaryFromReader(message: ElementError, reader: jspb.BinaryReader): ElementError;
}

export namespace ElementError {
  export type AsObject = {
    invalidExpression?: ElementError.InvalidExpression.AsObject,
    missingField?: ElementError.MissingField.AsObject,
    badFieldType?: ElementError.BadFieldType.AsObject,
  }

  export class InvalidExpression extends jspb.Message {
    getExpression(): string;
    setExpression(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvalidExpression.AsObject;
    static toObject(includeInstance: boolean, msg: InvalidExpression): InvalidExpression.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvalidExpression, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvalidExpression;
    static deserializeBinaryFromReader(message: InvalidExpression, reader: jspb.BinaryReader): InvalidExpression;
  }

  export namespace InvalidExpression {
    export type AsObject = {
      expression: string,
    }
  }

  export class MissingField extends jspb.Message {
    getFieldName(): string;
    setFieldName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MissingField.AsObject;
    static toObject(includeInstance: boolean, msg: MissingField): MissingField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MissingField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MissingField;
    static deserializeBinaryFromReader(message: MissingField, reader: jspb.BinaryReader): MissingField;
  }

  export namespace MissingField {
    export type AsObject = {
      fieldName: string,
    }
  }

  export class BadFieldType extends jspb.Message {
    getFieldName(): string;
    setFieldName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BadFieldType.AsObject;
    static toObject(includeInstance: boolean, msg: BadFieldType): BadFieldType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BadFieldType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BadFieldType;
    static deserializeBinaryFromReader(message: BadFieldType, reader: jspb.BinaryReader): BadFieldType;
  }

  export namespace BadFieldType {
    export type AsObject = {
      fieldName: string,
    }
  }

  export enum ReasonCase {
    REASON_NOT_SET = 0,
    INVALID_EXPRESSION = 4,
    MISSING_FIELD = 5,
    BAD_FIELD_TYPE = 6,
  }
}

export class ElementSummary extends jspb.Message {
  getElementId(): string;
  setElementId(value: string): void;

  getElementName(): string;
  setElementName(value: string): void;

  hasError(): boolean;
  clearError(): void;
  getError(): ElementError | undefined;
  setError(value?: ElementError): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementSummary.AsObject;
  static toObject(includeInstance: boolean, msg: ElementSummary): ElementSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementSummary;
  static deserializeBinaryFromReader(message: ElementSummary, reader: jspb.BinaryReader): ElementSummary;
}

export namespace ElementSummary {
  export type AsObject = {
    elementId: string,
    elementName: string,
    error?: ElementError.AsObject,
  }
}

export class FindInvalidElementsReq extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getRegionId(): string;
  setRegionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindInvalidElementsReq.AsObject;
  static toObject(includeInstance: boolean, msg: FindInvalidElementsReq): FindInvalidElementsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindInvalidElementsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindInvalidElementsReq;
  static deserializeBinaryFromReader(message: FindInvalidElementsReq, reader: jspb.BinaryReader): FindInvalidElementsReq;
}

export namespace FindInvalidElementsReq {
  export type AsObject = {
    orgId: string,
    regionId: string,
  }
}

export class FindInvalidElementsRes extends jspb.Message {
  clearInvalidElementsList(): void;
  getInvalidElementsList(): Array<ElementSummary>;
  setInvalidElementsList(value: Array<ElementSummary>): void;
  addInvalidElements(value?: ElementSummary, index?: number): ElementSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindInvalidElementsRes.AsObject;
  static toObject(includeInstance: boolean, msg: FindInvalidElementsRes): FindInvalidElementsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindInvalidElementsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindInvalidElementsRes;
  static deserializeBinaryFromReader(message: FindInvalidElementsRes, reader: jspb.BinaryReader): FindInvalidElementsRes;
}

export namespace FindInvalidElementsRes {
  export type AsObject = {
    invalidElementsList: Array<ElementSummary.AsObject>,
  }
}

export class GetComplianceScrubListsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetComplianceScrubListsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetComplianceScrubListsReq): GetComplianceScrubListsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetComplianceScrubListsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetComplianceScrubListsReq;
  static deserializeBinaryFromReader(message: GetComplianceScrubListsReq, reader: jspb.BinaryReader): GetComplianceScrubListsReq;
}

export namespace GetComplianceScrubListsReq {
  export type AsObject = {
  }
}

export class GetComplianceScrubListsRes extends jspb.Message {
  clearScrubListsList(): void;
  getScrubListsList(): Array<string>;
  setScrubListsList(value: Array<string>): void;
  addScrubLists(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetComplianceScrubListsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetComplianceScrubListsRes): GetComplianceScrubListsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetComplianceScrubListsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetComplianceScrubListsRes;
  static deserializeBinaryFromReader(message: GetComplianceScrubListsRes, reader: jspb.BinaryReader): GetComplianceScrubListsRes;
}

export namespace GetComplianceScrubListsRes {
  export type AsObject = {
    scrubListsList: Array<string>,
  }
}

export class ProcessElementReq extends jspb.Message {
  getElementId(): string;
  setElementId(value: string): void;

  getProcessMessage(): string;
  setProcessMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessElementReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessElementReq): ProcessElementReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessElementReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessElementReq;
  static deserializeBinaryFromReader(message: ProcessElementReq, reader: jspb.BinaryReader): ProcessElementReq;
}

export namespace ProcessElementReq {
  export type AsObject = {
    elementId: string,
    processMessage: string,
  }
}

export class ProcessListRequest extends jspb.Message {
  getElementId(): string;
  setElementId(value: string): void;

  getList(): Uint8Array | string;
  getList_asU8(): Uint8Array;
  getList_asB64(): string;
  setList(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessListRequest): ProcessListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessListRequest;
  static deserializeBinaryFromReader(message: ProcessListRequest, reader: jspb.BinaryReader): ProcessListRequest;
}

export namespace ProcessListRequest {
  export type AsObject = {
    elementId: string,
    list: Uint8Array | string,
  }
}

export class ProcessListResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessListResponse): ProcessListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessListResponse;
  static deserializeBinaryFromReader(message: ProcessListResponse, reader: jspb.BinaryReader): ProcessListResponse;
}

export namespace ProcessListResponse {
  export type AsObject = {
  }
}

export class StreamListRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getRegionId(): string;
  setRegionId(value: string): void;

  getElementId(): string;
  setElementId(value: string): void;

  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamListRequest): StreamListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamListRequest;
  static deserializeBinaryFromReader(message: StreamListRequest, reader: jspb.BinaryReader): StreamListRequest;
}

export namespace StreamListRequest {
  export type AsObject = {
    orgId: string,
    regionId: string,
    elementId: string,
    chunk: Uint8Array | string,
  }
}

export class StreamListResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamListResponse): StreamListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamListResponse;
  static deserializeBinaryFromReader(message: StreamListResponse, reader: jspb.BinaryReader): StreamListResponse;
}

export namespace StreamListResponse {
  export type AsObject = {
  }
}

export class ListAvailableFieldsByElementIdReq extends jspb.Message {
  getElementId(): string;
  setElementId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAvailableFieldsByElementIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListAvailableFieldsByElementIdReq): ListAvailableFieldsByElementIdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAvailableFieldsByElementIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAvailableFieldsByElementIdReq;
  static deserializeBinaryFromReader(message: ListAvailableFieldsByElementIdReq, reader: jspb.BinaryReader): ListAvailableFieldsByElementIdReq;
}

export namespace ListAvailableFieldsByElementIdReq {
  export type AsObject = {
    elementId: string,
  }
}

export class ListFieldsForElementReq extends jspb.Message {
  getElementId(): string;
  setElementId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFieldsForElementReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListFieldsForElementReq): ListFieldsForElementReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFieldsForElementReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFieldsForElementReq;
  static deserializeBinaryFromReader(message: ListFieldsForElementReq, reader: jspb.BinaryReader): ListFieldsForElementReq;
}

export namespace ListFieldsForElementReq {
  export type AsObject = {
    elementId: string,
  }
}

export class ListFieldsForElementRes extends jspb.Message {
  clearFieldsList(): void;
  getFieldsList(): Array<Field>;
  setFieldsList(value: Array<Field>): void;
  addFields(value?: Field, index?: number): Field;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFieldsForElementRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListFieldsForElementRes): ListFieldsForElementRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFieldsForElementRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFieldsForElementRes;
  static deserializeBinaryFromReader(message: ListFieldsForElementRes, reader: jspb.BinaryReader): ListFieldsForElementRes;
}

export namespace ListFieldsForElementRes {
  export type AsObject = {
    fieldsList: Array<Field.AsObject>,
  }
}

export class ListAutocompleteFieldsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAutocompleteFieldsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListAutocompleteFieldsReq): ListAutocompleteFieldsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAutocompleteFieldsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAutocompleteFieldsReq;
  static deserializeBinaryFromReader(message: ListAutocompleteFieldsReq, reader: jspb.BinaryReader): ListAutocompleteFieldsReq;
}

export namespace ListAutocompleteFieldsReq {
  export type AsObject = {
  }
}

export class ListAutocompleteFieldsRes extends jspb.Message {
  clearFieldsList(): void;
  getFieldsList(): Array<Field>;
  setFieldsList(value: Array<Field>): void;
  addFields(value?: Field, index?: number): Field;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAutocompleteFieldsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListAutocompleteFieldsRes): ListAutocompleteFieldsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAutocompleteFieldsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAutocompleteFieldsRes;
  static deserializeBinaryFromReader(message: ListAutocompleteFieldsRes, reader: jspb.BinaryReader): ListAutocompleteFieldsRes;
}

export namespace ListAutocompleteFieldsRes {
  export type AsObject = {
    fieldsList: Array<Field.AsObject>,
  }
}

export class ElementPK extends jspb.Message {
  getElementId(): string;
  setElementId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementPK.AsObject;
  static toObject(includeInstance: boolean, msg: ElementPK): ElementPK.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementPK, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementPK;
  static deserializeBinaryFromReader(message: ElementPK, reader: jspb.BinaryReader): ElementPK;
}

export namespace ElementPK {
  export type AsObject = {
    elementId: string,
  }
}

export class Element extends jspb.Message {
  getElementId(): string;
  setElementId(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearInputsList(): void;
  getInputsList(): Array<string>;
  setInputsList(value: Array<string>): void;
  addInputs(value: string, index?: number): string;

  clearInputIsDiscardList(): void;
  getInputIsDiscardList(): Array<boolean>;
  setInputIsDiscardList(value: Array<boolean>): void;
  addInputIsDiscard(value: boolean, index?: number): boolean;

  hasTransform(): boolean;
  clearTransform(): void;
  getTransform(): Process | undefined;
  setTransform(value?: Process): void;

  getLastStatus(): api_commons_lms_pb.PipelineElementStatusTypeMap[keyof api_commons_lms_pb.PipelineElementStatusTypeMap];
  setLastStatus(value: api_commons_lms_pb.PipelineElementStatusTypeMap[keyof api_commons_lms_pb.PipelineElementStatusTypeMap]): void;

  clearLabelsList(): void;
  getLabelsList(): Array<string>;
  setLabelsList(value: Array<string>): void;
  addLabels(value: string, index?: number): string;

  hasCreatedDate(): boolean;
  clearCreatedDate(): void;
  getCreatedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastEdited(): boolean;
  clearLastEdited(): void;
  getLastEdited(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastEdited(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Element.AsObject;
  static toObject(includeInstance: boolean, msg: Element): Element.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Element, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Element;
  static deserializeBinaryFromReader(message: Element, reader: jspb.BinaryReader): Element;
}

export namespace Element {
  export type AsObject = {
    elementId: string,
    name: string,
    inputsList: Array<string>,
    inputIsDiscardList: Array<boolean>,
    transform?: Process.AsObject,
    lastStatus: api_commons_lms_pb.PipelineElementStatusTypeMap[keyof api_commons_lms_pb.PipelineElementStatusTypeMap],
    labelsList: Array<string>,
    createdDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastEdited?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    description: string,
  }
}

export class PeekListReq extends jspb.Message {
  getElementId(): string;
  setElementId(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPage(): number;
  setPage(value: number): void;

  hasProcess(): boolean;
  clearProcess(): void;
  getProcess(): Process | undefined;
  setProcess(value?: Process): void;

  getPeekAtDiscards(): boolean;
  setPeekAtDiscards(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeekListReq.AsObject;
  static toObject(includeInstance: boolean, msg: PeekListReq): PeekListReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PeekListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeekListReq;
  static deserializeBinaryFromReader(message: PeekListReq, reader: jspb.BinaryReader): PeekListReq;
}

export namespace PeekListReq {
  export type AsObject = {
    elementId: string,
    version: number,
    pageSize: number,
    page: number,
    process?: Process.AsObject,
    peekAtDiscards: boolean,
  }
}

export class PeekListRes extends jspb.Message {
  clearRecordsList(): void;
  getRecordsList(): Array<RecordProto>;
  setRecordsList(value: Array<RecordProto>): void;
  addRecords(value?: RecordProto, index?: number): RecordProto;

  hasMetrics(): boolean;
  clearMetrics(): void;
  getMetrics(): ListMetrics | undefined;
  setMetrics(value?: ListMetrics): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeekListRes.AsObject;
  static toObject(includeInstance: boolean, msg: PeekListRes): PeekListRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PeekListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeekListRes;
  static deserializeBinaryFromReader(message: PeekListRes, reader: jspb.BinaryReader): PeekListRes;
}

export namespace PeekListRes {
  export type AsObject = {
    recordsList: Array<RecordProto.AsObject>,
    metrics?: ListMetrics.AsObject,
  }
}

export class GetHistoryReq extends jspb.Message {
  getElementId(): string;
  setElementId(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  getStartingId(): number;
  setStartingId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoryReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoryReq): GetHistoryReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHistoryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoryReq;
  static deserializeBinaryFromReader(message: GetHistoryReq, reader: jspb.BinaryReader): GetHistoryReq;
}

export namespace GetHistoryReq {
  export type AsObject = {
    elementId: string,
    count: number,
    startingId: number,
  }
}

export class GetHistoryRes extends jspb.Message {
  getElementId(): string;
  setElementId(value: string): void;

  clearCommitsList(): void;
  getCommitsList(): Array<HistoryAndCount>;
  setCommitsList(value: Array<HistoryAndCount>): void;
  addCommits(value?: HistoryAndCount, index?: number): HistoryAndCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoryRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoryRes): GetHistoryRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHistoryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoryRes;
  static deserializeBinaryFromReader(message: GetHistoryRes, reader: jspb.BinaryReader): GetHistoryRes;
}

export namespace GetHistoryRes {
  export type AsObject = {
    elementId: string,
    commitsList: Array<HistoryAndCount.AsObject>,
  }
}

export class History extends jspb.Message {
  getElementId(): string;
  setElementId(value: string): void;

  getHistoryId(): number;
  setHistoryId(value: number): void;

  hasProcess(): boolean;
  clearProcess(): void;
  getProcess(): Process | undefined;
  setProcess(value?: Process): void;

  getFailed(): boolean;
  setFailed(value: boolean): void;

  getAttemptNumber(): number;
  setAttemptNumber(value: number): void;

  hasReason(): boolean;
  clearReason(): void;
  getReason(): google_protobuf_wrappers_pb.StringValue | undefined;
  setReason(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasUploadTs(): boolean;
  clearUploadTs(): void;
  getUploadTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUploadTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStartedTs(): boolean;
  clearStartedTs(): void;
  getStartedTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartedTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFinishedTs(): boolean;
  clearFinishedTs(): void;
  getFinishedTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishedTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getEventId(): number;
  setEventId(value: number): void;

  getParentElementId(): string;
  setParentElementId(value: string): void;

  hasMetrics(): boolean;
  clearMetrics(): void;
  getMetrics(): ListMetrics | undefined;
  setMetrics(value?: ListMetrics): void;

  hasDiscardMetrics(): boolean;
  clearDiscardMetrics(): void;
  getDiscardMetrics(): ListMetrics | undefined;
  setDiscardMetrics(value?: ListMetrics): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): History.AsObject;
  static toObject(includeInstance: boolean, msg: History): History.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: History, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): History;
  static deserializeBinaryFromReader(message: History, reader: jspb.BinaryReader): History;
}

export namespace History {
  export type AsObject = {
    elementId: string,
    historyId: number,
    process?: Process.AsObject,
    failed: boolean,
    attemptNumber: number,
    reason?: google_protobuf_wrappers_pb.StringValue.AsObject,
    uploadTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startedTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishedTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    eventId: number,
    parentElementId: string,
    metrics?: ListMetrics.AsObject,
    discardMetrics?: ListMetrics.AsObject,
  }
}

export class HistoryAndCount extends jspb.Message {
  getElementId(): string;
  setElementId(value: string): void;

  getHistoryId(): number;
  setHistoryId(value: number): void;

  getEndingHistoryId(): number;
  setEndingHistoryId(value: number): void;

  hasProcess(): boolean;
  clearProcess(): void;
  getProcess(): Process | undefined;
  setProcess(value?: Process): void;

  getFailed(): boolean;
  setFailed(value: boolean): void;

  getAttemptNumber(): number;
  setAttemptNumber(value: number): void;

  hasReason(): boolean;
  clearReason(): void;
  getReason(): google_protobuf_wrappers_pb.StringValue | undefined;
  setReason(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasUploadTs(): boolean;
  clearUploadTs(): void;
  getUploadTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUploadTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStartedTs(): boolean;
  clearStartedTs(): void;
  getStartedTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartedTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFinishedTs(): boolean;
  clearFinishedTs(): void;
  getFinishedTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishedTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getEventId(): number;
  setEventId(value: number): void;

  getParentElementId(): string;
  setParentElementId(value: string): void;

  hasMetrics(): boolean;
  clearMetrics(): void;
  getMetrics(): ListMetrics | undefined;
  setMetrics(value?: ListMetrics): void;

  hasDiscardMetrics(): boolean;
  clearDiscardMetrics(): void;
  getDiscardMetrics(): ListMetrics | undefined;
  setDiscardMetrics(value?: ListMetrics): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistoryAndCount.AsObject;
  static toObject(includeInstance: boolean, msg: HistoryAndCount): HistoryAndCount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HistoryAndCount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistoryAndCount;
  static deserializeBinaryFromReader(message: HistoryAndCount, reader: jspb.BinaryReader): HistoryAndCount;
}

export namespace HistoryAndCount {
  export type AsObject = {
    elementId: string,
    historyId: number,
    endingHistoryId: number,
    process?: Process.AsObject,
    failed: boolean,
    attemptNumber: number,
    reason?: google_protobuf_wrappers_pb.StringValue.AsObject,
    uploadTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startedTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishedTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    eventId: number,
    parentElementId: string,
    metrics?: ListMetrics.AsObject,
    discardMetrics?: ListMetrics.AsObject,
    count: number,
  }
}

export class RecordProto extends jspb.Message {
  clearFieldsList(): void;
  getFieldsList(): Array<RecordFieldProto>;
  setFieldsList(value: Array<RecordFieldProto>): void;
  addFields(value?: RecordFieldProto, index?: number): RecordFieldProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordProto.AsObject;
  static toObject(includeInstance: boolean, msg: RecordProto): RecordProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordProto;
  static deserializeBinaryFromReader(message: RecordProto, reader: jspb.BinaryReader): RecordProto;
}

export namespace RecordProto {
  export type AsObject = {
    fieldsList: Array<RecordFieldProto.AsObject>,
  }
}

export class RecordProtoPair extends jspb.Message {
  hasOld(): boolean;
  clearOld(): void;
  getOld(): RecordProto | undefined;
  setOld(value?: RecordProto): void;

  hasNew(): boolean;
  clearNew(): void;
  getNew(): RecordProto | undefined;
  setNew(value?: RecordProto): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordProtoPair.AsObject;
  static toObject(includeInstance: boolean, msg: RecordProtoPair): RecordProtoPair.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordProtoPair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordProtoPair;
  static deserializeBinaryFromReader(message: RecordProtoPair, reader: jspb.BinaryReader): RecordProtoPair;
}

export namespace RecordProtoPair {
  export type AsObject = {
    old?: RecordProto.AsObject,
    pb_new?: RecordProto.AsObject,
  }
}

export class ProcessFields extends jspb.Message {
  clearFieldsList(): void;
  getFieldsList(): Array<ProcessFields.Field>;
  setFieldsList(value: Array<ProcessFields.Field>): void;
  addFields(value?: ProcessFields.Field, index?: number): ProcessFields.Field;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessFields.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessFields): ProcessFields.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessFields, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessFields;
  static deserializeBinaryFromReader(message: ProcessFields, reader: jspb.BinaryReader): ProcessFields;
}

export namespace ProcessFields {
  export type AsObject = {
    fieldsList: Array<ProcessFields.Field.AsObject>,
  }

  export class NestedField extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getFieldType(): api_commons_lms_pb.RecordTypeMap[keyof api_commons_lms_pb.RecordTypeMap];
    setFieldType(value: api_commons_lms_pb.RecordTypeMap[keyof api_commons_lms_pb.RecordTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NestedField.AsObject;
    static toObject(includeInstance: boolean, msg: NestedField): NestedField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NestedField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NestedField;
    static deserializeBinaryFromReader(message: NestedField, reader: jspb.BinaryReader): NestedField;
  }

  export namespace NestedField {
    export type AsObject = {
      name: string,
      fieldType: api_commons_lms_pb.RecordTypeMap[keyof api_commons_lms_pb.RecordTypeMap],
    }
  }

  export class Field extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getFieldType(): api_commons_lms_pb.RecordTypeMap[keyof api_commons_lms_pb.RecordTypeMap];
    setFieldType(value: api_commons_lms_pb.RecordTypeMap[keyof api_commons_lms_pb.RecordTypeMap]): void;

    clearNestedList(): void;
    getNestedList(): Array<ProcessFields.NestedField>;
    setNestedList(value: Array<ProcessFields.NestedField>): void;
    addNested(value?: ProcessFields.NestedField, index?: number): ProcessFields.NestedField;

    getFormat(): string;
    setFormat(value: string): void;

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
      name: string,
      fieldType: api_commons_lms_pb.RecordTypeMap[keyof api_commons_lms_pb.RecordTypeMap],
      nestedList: Array<ProcessFields.NestedField.AsObject>,
      format: string,
    }
  }
}

export class FieldPK extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldPK.AsObject;
  static toObject(includeInstance: boolean, msg: FieldPK): FieldPK.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldPK, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldPK;
  static deserializeBinaryFromReader(message: FieldPK, reader: jspb.BinaryReader): FieldPK;
}

export namespace FieldPK {
  export type AsObject = {
    name: string,
  }
}

export class Field extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap];
  setType(value: api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap]): void;

  hasDateModified(): boolean;
  clearDateModified(): void;
  getDateModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): FieldMetadata | undefined;
  setMetadata(value?: FieldMetadata): void;

  getDescription(): string;
  setDescription(value: string): void;

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
    name: string,
    type: api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap],
    dateModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    metadata?: FieldMetadata.AsObject,
    description: string,
  }
}

export class UpdateFieldReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap];
  setType(value: api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap]): void;

  hasDateModified(): boolean;
  clearDateModified(): void;
  getDateModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getNewName(): string;
  setNewName(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): FieldMetadata | undefined;
  setMetadata(value?: FieldMetadata): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFieldReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFieldReq): UpdateFieldReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFieldReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFieldReq;
  static deserializeBinaryFromReader(message: UpdateFieldReq, reader: jspb.BinaryReader): UpdateFieldReq;
}

export namespace UpdateFieldReq {
  export type AsObject = {
    name: string,
    type: api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap],
    dateModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    newName: string,
    metadata?: FieldMetadata.AsObject,
    description: string,
  }
}

export class FieldMetadata extends jspb.Message {
  getTimeFormat(): string;
  setTimeFormat(value: string): void;

  getPrecision(): api_commons_lms_pb.DateTimePrecisionMap[keyof api_commons_lms_pb.DateTimePrecisionMap];
  setPrecision(value: api_commons_lms_pb.DateTimePrecisionMap[keyof api_commons_lms_pb.DateTimePrecisionMap]): void;

  getRemoveCharacters(): string;
  setRemoveCharacters(value: string): void;

  getReplaceEmpty(): string;
  setReplaceEmpty(value: string): void;

  getReplaceError(): string;
  setReplaceError(value: string): void;

  getRemoveLetters(): boolean;
  setRemoveLetters(value: boolean): void;

  getRemoveNumbers(): boolean;
  setRemoveNumbers(value: boolean): void;

  getRemoveSymbols(): boolean;
  setRemoveSymbols(value: boolean): void;

  getLeaveCharacters(): string;
  setLeaveCharacters(value: string): void;

  getRemoveString(): string;
  setRemoveString(value: string): void;

  getJsonDotPath(): string;
  setJsonDotPath(value: string): void;

  getJsonForceTypeMatch(): boolean;
  setJsonForceTypeMatch(value: boolean): void;

  getStartingPosition(): number;
  setStartingPosition(value: number): void;

  getFieldLength(): number;
  setFieldLength(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: FieldMetadata): FieldMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldMetadata;
  static deserializeBinaryFromReader(message: FieldMetadata, reader: jspb.BinaryReader): FieldMetadata;
}

export namespace FieldMetadata {
  export type AsObject = {
    timeFormat: string,
    precision: api_commons_lms_pb.DateTimePrecisionMap[keyof api_commons_lms_pb.DateTimePrecisionMap],
    removeCharacters: string,
    replaceEmpty: string,
    replaceError: string,
    removeLetters: boolean,
    removeNumbers: boolean,
    removeSymbols: boolean,
    leaveCharacters: string,
    removeString: string,
    jsonDotPath: string,
    jsonForceTypeMatch: boolean,
    startingPosition: number,
    fieldLength: number,
  }
}

export class Fields extends jspb.Message {
  clearFieldsList(): void;
  getFieldsList(): Array<Field>;
  setFieldsList(value: Array<Field>): void;
  addFields(value?: Field, index?: number): Field;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fields.AsObject;
  static toObject(includeInstance: boolean, msg: Fields): Fields.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Fields, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fields;
  static deserializeBinaryFromReader(message: Fields, reader: jspb.BinaryReader): Fields;
}

export namespace Fields {
  export type AsObject = {
    fieldsList: Array<Field.AsObject>,
  }
}

export class FieldIndex extends jspb.Message {
  clearIndexList(): void;
  getIndexList(): Array<string>;
  setIndexList(value: Array<string>): void;
  addIndex(value: string, index?: number): string;

  hasDatetime(): boolean;
  clearDatetime(): void;
  getDatetime(): DateTimeModifier | undefined;
  setDatetime(value?: DateTimeModifier): void;

  getModifierCase(): FieldIndex.ModifierCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldIndex.AsObject;
  static toObject(includeInstance: boolean, msg: FieldIndex): FieldIndex.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldIndex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldIndex;
  static deserializeBinaryFromReader(message: FieldIndex, reader: jspb.BinaryReader): FieldIndex;
}

export namespace FieldIndex {
  export type AsObject = {
    indexList: Array<string>,
    datetime?: DateTimeModifier.AsObject,
  }

  export enum ModifierCase {
    MODIFIER_NOT_SET = 0,
    DATETIME = 2,
  }
}

export class ListFieldsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFieldsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListFieldsReq): ListFieldsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFieldsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFieldsReq;
  static deserializeBinaryFromReader(message: ListFieldsReq, reader: jspb.BinaryReader): ListFieldsReq;
}

export namespace ListFieldsReq {
  export type AsObject = {
  }
}

export class RecordFieldProto extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasStringValue(): boolean;
  clearStringValue(): void;
  getStringValue(): string;
  setStringValue(value: string): void;

  hasNumberValue(): boolean;
  clearNumberValue(): void;
  getNumberValue(): number;
  setNumberValue(value: number): void;

  hasBoolValue(): boolean;
  clearBoolValue(): void;
  getBoolValue(): boolean;
  setBoolValue(value: boolean): void;

  hasPhone(): boolean;
  clearPhone(): void;
  getPhone(): Phone | undefined;
  setPhone(value?: Phone): void;

  hasCurrency(): boolean;
  clearCurrency(): void;
  getCurrency(): Currency | undefined;
  setCurrency(value?: Currency): void;

  hasPostalCode(): boolean;
  clearPostalCode(): void;
  getPostalCode(): PostalCode | undefined;
  setPostalCode(value?: PostalCode): void;

  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): Email | undefined;
  setEmail(value?: Email): void;

  hasDateTime(): boolean;
  clearDateTime(): void;
  getDateTime(): DateTime | undefined;
  setDateTime(value?: DateTime): void;

  hasRepeatedRecords(): boolean;
  clearRepeatedRecords(): void;
  getRepeatedRecords(): RepeatedRecords | undefined;
  setRepeatedRecords(value?: RepeatedRecords): void;

  hasRecordFieldMap(): boolean;
  clearRecordFieldMap(): void;
  getRecordFieldMap(): RecordFieldMap | undefined;
  setRecordFieldMap(value?: RecordFieldMap): void;

  hasErr(): boolean;
  clearErr(): void;
  getErr(): Error | undefined;
  setErr(value?: Error): void;

  hasEnrichedPhone(): boolean;
  clearEnrichedPhone(): void;
  getEnrichedPhone(): EnrichedPhone | undefined;
  setEnrichedPhone(value?: EnrichedPhone): void;

  hasEnrichedZip(): boolean;
  clearEnrichedZip(): void;
  getEnrichedZip(): EnrichedZip | undefined;
  setEnrichedZip(value?: EnrichedZip): void;

  getPayloadCase(): RecordFieldProto.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordFieldProto.AsObject;
  static toObject(includeInstance: boolean, msg: RecordFieldProto): RecordFieldProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordFieldProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordFieldProto;
  static deserializeBinaryFromReader(message: RecordFieldProto, reader: jspb.BinaryReader): RecordFieldProto;
}

export namespace RecordFieldProto {
  export type AsObject = {
    name: string,
    stringValue: string,
    numberValue: number,
    boolValue: boolean,
    phone?: Phone.AsObject,
    currency?: Currency.AsObject,
    postalCode?: PostalCode.AsObject,
    email?: Email.AsObject,
    dateTime?: DateTime.AsObject,
    repeatedRecords?: RepeatedRecords.AsObject,
    recordFieldMap?: RecordFieldMap.AsObject,
    err?: Error.AsObject,
    enrichedPhone?: EnrichedPhone.AsObject,
    enrichedZip?: EnrichedZip.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    STRING_VALUE = 2,
    NUMBER_VALUE = 3,
    BOOL_VALUE = 4,
    PHONE = 5,
    CURRENCY = 6,
    POSTAL_CODE = 8,
    EMAIL = 9,
    DATE_TIME = 10,
    REPEATED_RECORDS = 13,
    RECORD_FIELD_MAP = 14,
    ERR = 15,
    ENRICHED_PHONE = 16,
    ENRICHED_ZIP = 17,
  }
}

export class RepeatedRecords extends jspb.Message {
  clearRecordsList(): void;
  getRecordsList(): Array<RecordProto>;
  setRecordsList(value: Array<RecordProto>): void;
  addRecords(value?: RecordProto, index?: number): RecordProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepeatedRecords.AsObject;
  static toObject(includeInstance: boolean, msg: RepeatedRecords): RepeatedRecords.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RepeatedRecords, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepeatedRecords;
  static deserializeBinaryFromReader(message: RepeatedRecords, reader: jspb.BinaryReader): RepeatedRecords;
}

export namespace RepeatedRecords {
  export type AsObject = {
    recordsList: Array<RecordProto.AsObject>,
  }
}

export class ListElementsReq extends jspb.Message {
  clearLabelsList(): void;
  getLabelsList(): Array<string>;
  setLabelsList(value: Array<string>): void;
  addLabels(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListElementsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListElementsReq): ListElementsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListElementsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListElementsReq;
  static deserializeBinaryFromReader(message: ListElementsReq, reader: jspb.BinaryReader): ListElementsReq;
}

export namespace ListElementsReq {
  export type AsObject = {
    labelsList: Array<string>,
  }
}

export class GetFileTemplatesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileTemplatesReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileTemplatesReq): GetFileTemplatesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFileTemplatesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileTemplatesReq;
  static deserializeBinaryFromReader(message: GetFileTemplatesReq, reader: jspb.BinaryReader): GetFileTemplatesReq;
}

export namespace GetFileTemplatesReq {
  export type AsObject = {
  }
}

export class FileTemplateField extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap];
  setType(value: api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileTemplateField.AsObject;
  static toObject(includeInstance: boolean, msg: FileTemplateField): FileTemplateField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileTemplateField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileTemplateField;
  static deserializeBinaryFromReader(message: FileTemplateField, reader: jspb.BinaryReader): FileTemplateField;
}

export namespace FileTemplateField {
  export type AsObject = {
    name: string,
    type: api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap],
  }
}

export class FileTemplateFields extends jspb.Message {
  clearFieldsList(): void;
  getFieldsList(): Array<FileTemplateField>;
  setFieldsList(value: Array<FileTemplateField>): void;
  addFields(value?: FileTemplateField, index?: number): FileTemplateField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileTemplateFields.AsObject;
  static toObject(includeInstance: boolean, msg: FileTemplateFields): FileTemplateFields.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileTemplateFields, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileTemplateFields;
  static deserializeBinaryFromReader(message: FileTemplateFields, reader: jspb.BinaryReader): FileTemplateFields;
}

export namespace FileTemplateFields {
  export type AsObject = {
    fieldsList: Array<FileTemplateField.AsObject>,
  }
}

export class FieldTypes extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap]>;
  setValuesList(value: Array<api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap]>): void;
  addValues(value: api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap], index?: number): api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldTypes.AsObject;
  static toObject(includeInstance: boolean, msg: FieldTypes): FieldTypes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldTypes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldTypes;
  static deserializeBinaryFromReader(message: FieldTypes, reader: jspb.BinaryReader): FieldTypes;
}

export namespace FieldTypes {
  export type AsObject = {
    valuesList: Array<api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap]>,
  }
}

export class FileTemplate extends jspb.Message {
  getFileTemplateId(): string;
  setFileTemplateId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearFieldNamesList(): void;
  getFieldNamesList(): Array<string>;
  setFieldNamesList(value: Array<string>): void;
  addFieldNames(value: string, index?: number): string;

  hasFileFormatParams(): boolean;
  clearFileFormatParams(): void;
  getFileFormatParams(): FileFormatParams | undefined;
  setFileFormatParams(value?: FileFormatParams): void;

  getFileFormat(): api_commons_lms_pb.FileFormatMap[keyof api_commons_lms_pb.FileFormatMap];
  setFileFormat(value: api_commons_lms_pb.FileFormatMap[keyof api_commons_lms_pb.FileFormatMap]): void;

  clearFieldsList(): void;
  getFieldsList(): Array<Field>;
  setFieldsList(value: Array<Field>): void;
  addFields(value?: Field, index?: number): Field;

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
    fileTemplateId: string,
    name: string,
    description: string,
    fieldNamesList: Array<string>,
    fileFormatParams?: FileFormatParams.AsObject,
    fileFormat: api_commons_lms_pb.FileFormatMap[keyof api_commons_lms_pb.FileFormatMap],
    fieldsList: Array<Field.AsObject>,
  }
}

export class LMSUploadReq extends jspb.Message {
  getElementId(): string;
  setElementId(value: string): void;

  getFileId(): string;
  setFileId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LMSUploadReq.AsObject;
  static toObject(includeInstance: boolean, msg: LMSUploadReq): LMSUploadReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LMSUploadReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LMSUploadReq;
  static deserializeBinaryFromReader(message: LMSUploadReq, reader: jspb.BinaryReader): LMSUploadReq;
}

export namespace LMSUploadReq {
  export type AsObject = {
    elementId: string,
    fileId: string,
  }
}

export class LMSUploadRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LMSUploadRes.AsObject;
  static toObject(includeInstance: boolean, msg: LMSUploadRes): LMSUploadRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LMSUploadRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LMSUploadRes;
  static deserializeBinaryFromReader(message: LMSUploadRes, reader: jspb.BinaryReader): LMSUploadRes;
}

export namespace LMSUploadRes {
  export type AsObject = {
  }
}

export class ReRunReq extends jspb.Message {
  getListId(): string;
  setListId(value: string): void;

  getRerunUrl(): string;
  setRerunUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReRunReq.AsObject;
  static toObject(includeInstance: boolean, msg: ReRunReq): ReRunReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReRunReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReRunReq;
  static deserializeBinaryFromReader(message: ReRunReq, reader: jspb.BinaryReader): ReRunReq;
}

export namespace ReRunReq {
  export type AsObject = {
    listId: string,
    rerunUrl: string,
  }
}

export class ReRunRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReRunRes.AsObject;
  static toObject(includeInstance: boolean, msg: ReRunRes): ReRunRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReRunRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReRunRes;
  static deserializeBinaryFromReader(message: ReRunRes, reader: jspb.BinaryReader): ReRunRes;
}

export namespace ReRunRes {
  export type AsObject = {
  }
}

export class Process extends jspb.Message {
  getExpression(): string;
  setExpression(value: string): void;

  hasAppend(): boolean;
  clearAppend(): void;
  getAppend(): AppendProcess | undefined;
  setAppend(value?: AppendProcess): void;

  hasSort(): boolean;
  clearSort(): void;
  getSort(): SortCriteria | undefined;
  setSort(value?: SortCriteria): void;

  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): FilterProcess | undefined;
  setFilter(value?: FilterProcess): void;

  hasGsExport(): boolean;
  clearGsExport(): void;
  getGsExport(): GSExportProcess | undefined;
  setGsExport(value?: GSExportProcess): void;

  hasP3Export(): boolean;
  clearP3Export(): void;
  getP3Export(): P3ExportProcess | undefined;
  setP3Export(value?: P3ExportProcess): void;

  hasCompl(): boolean;
  clearCompl(): void;
  getCompl(): ComplProcess | undefined;
  setCompl(value?: ComplProcess): void;

  hasDedup(): boolean;
  clearDedup(): void;
  getDedup(): DeDupCriteria | undefined;
  setDedup(value?: DeDupCriteria): void;

  hasCfsExport(): boolean;
  clearCfsExport(): void;
  getCfsExport(): CFSExportProcess | undefined;
  setCfsExport(value?: CFSExportProcess): void;

  hasSftpExport(): boolean;
  clearSftpExport(): void;
  getSftpExport(): SftpExportProcess | undefined;
  setSftpExport(value?: SftpExportProcess): void;

  hasReshape(): boolean;
  clearReshape(): void;
  getReshape(): ReshapeProcess | undefined;
  setReshape(value?: ReshapeProcess): void;

  hasLookup(): boolean;
  clearLookup(): void;
  getLookup(): LookupProcess | undefined;
  setLookup(value?: LookupProcess): void;

  hasEntrypoint(): boolean;
  clearEntrypoint(): void;
  getEntrypoint(): EntrypointProcess | undefined;
  setEntrypoint(value?: EntrypointProcess): void;

  hasComplianceExport(): boolean;
  clearComplianceExport(): void;
  getComplianceExport(): ComplianceExportProcess | undefined;
  setComplianceExport(value?: ComplianceExportProcess): void;

  hasApiEntrypoint(): boolean;
  clearApiEntrypoint(): void;
  getApiEntrypoint(): ApiEntrypoint | undefined;
  setApiEntrypoint(value?: ApiEntrypoint): void;

  hasSftpImport(): boolean;
  clearSftpImport(): void;
  getSftpImport(): SftpImport | undefined;
  setSftpImport(value?: SftpImport): void;

  hasScrub(): boolean;
  clearScrub(): void;
  getScrub(): ScrubProcess | undefined;
  setScrub(value?: ScrubProcess): void;

  hasFrequency(): boolean;
  clearFrequency(): void;
  getFrequency(): FrequencyProcess | undefined;
  setFrequency(value?: FrequencyProcess): void;

  hasCjsImport(): boolean;
  clearCjsImport(): void;
  getCjsImport(): CjsImportProcess | undefined;
  setCjsImport(value?: CjsImportProcess): void;

  hasCjsExport(): boolean;
  clearCjsExport(): void;
  getCjsExport(): CjsExportProcess | undefined;
  setCjsExport(value?: CjsExportProcess): void;

  hasCjsEnrich(): boolean;
  clearCjsEnrich(): void;
  getCjsEnrich(): CjsEnrichmentProcess | undefined;
  setCjsEnrich(value?: CjsEnrichmentProcess): void;

  hasWebEntrypoint(): boolean;
  clearWebEntrypoint(): void;
  getWebEntrypoint(): WebEntrypointProcess | undefined;
  setWebEntrypoint(value?: WebEntrypointProcess): void;

  hasDeleteScrubEntries(): boolean;
  clearDeleteScrubEntries(): void;
  getDeleteScrubEntries(): DeleteScrubEntriesProcess | undefined;
  setDeleteScrubEntries(value?: DeleteScrubEntriesProcess): void;

  hasWfmExport(): boolean;
  clearWfmExport(): void;
  getWfmExport(): WfmExportProcess | undefined;
  setWfmExport(value?: WfmExportProcess): void;

  hasLinkEnrich(): boolean;
  clearLinkEnrich(): void;
  getLinkEnrich(): PaymentLinkEnrichment | undefined;
  setLinkEnrich(value?: PaymentLinkEnrichment): void;

  hasRnd(): boolean;
  clearRnd(): void;
  getRnd(): RndEnrichmentProcess | undefined;
  setRnd(value?: RndEnrichmentProcess): void;

  hasConsentEnrich(): boolean;
  clearConsentEnrich(): void;
  getConsentEnrich(): ConsentEnrichmentProcess | undefined;
  setConsentEnrich(value?: ConsentEnrichmentProcess): void;

  hasConsentExport(): boolean;
  clearConsentExport(): void;
  getConsentExport(): ConsentExportProcess | undefined;
  setConsentExport(value?: ConsentExportProcess): void;

  hasComplianceProcessor(): boolean;
  clearComplianceProcessor(): void;
  getComplianceProcessor(): ComplianceProcessor | undefined;
  setComplianceProcessor(value?: ComplianceProcessor): void;

  hasConsentEntrypoint(): boolean;
  clearConsentEntrypoint(): void;
  getConsentEntrypoint(): ConsentEntrypointProcess | undefined;
  setConsentEntrypoint(value?: ConsentEntrypointProcess): void;

  hasPortalLinkEnrich(): boolean;
  clearPortalLinkEnrich(): void;
  getPortalLinkEnrich(): PortalLinkEnrichment | undefined;
  setPortalLinkEnrich(value?: PortalLinkEnrichment): void;

  hasBulkWebEntrypoint(): boolean;
  clearBulkWebEntrypoint(): void;
  getBulkWebEntrypoint(): BulkWebEntrypointProcess | undefined;
  setBulkWebEntrypoint(value?: BulkWebEntrypointProcess): void;

  hasOmniExchangeProcess(): boolean;
  clearOmniExchangeProcess(): void;
  getOmniExchangeProcess(): OmniExchangeProcess | undefined;
  setOmniExchangeProcess(value?: OmniExchangeProcess): void;

  hasWebExchangeProcess(): boolean;
  clearWebExchangeProcess(): void;
  getWebExchangeProcess(): WebExchangeProcess | undefined;
  setWebExchangeProcess(value?: WebExchangeProcess): void;

  hasSplit(): boolean;
  clearSplit(): void;
  getSplit(): SplitCriteria | undefined;
  setSplit(value?: SplitCriteria): void;

  hasEpicEntryPoint(): boolean;
  clearEpicEntryPoint(): void;
  getEpicEntryPoint(): EpicEntrypoint | undefined;
  setEpicEntryPoint(value?: EpicEntrypoint): void;

  hasContactManagerSink(): boolean;
  clearContactManagerSink(): void;
  getContactManagerSink(): ContactManagerSink | undefined;
  setContactManagerSink(value?: ContactManagerSink): void;

  hasSum(): boolean;
  clearSum(): void;
  getSum(): SumProcess | undefined;
  setSum(value?: SumProcess): void;

  hasFinviEntrypoint(): boolean;
  clearFinviEntrypoint(): void;
  getFinviEntrypoint(): FinviEntrypoint | undefined;
  setFinviEntrypoint(value?: FinviEntrypoint): void;

  getProcCase(): Process.ProcCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Process.AsObject;
  static toObject(includeInstance: boolean, msg: Process): Process.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Process, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Process;
  static deserializeBinaryFromReader(message: Process, reader: jspb.BinaryReader): Process;
}

export namespace Process {
  export type AsObject = {
    expression: string,
    append?: AppendProcess.AsObject,
    sort?: SortCriteria.AsObject,
    filter?: FilterProcess.AsObject,
    gsExport?: GSExportProcess.AsObject,
    p3Export?: P3ExportProcess.AsObject,
    compl?: ComplProcess.AsObject,
    dedup?: DeDupCriteria.AsObject,
    cfsExport?: CFSExportProcess.AsObject,
    sftpExport?: SftpExportProcess.AsObject,
    reshape?: ReshapeProcess.AsObject,
    lookup?: LookupProcess.AsObject,
    entrypoint?: EntrypointProcess.AsObject,
    complianceExport?: ComplianceExportProcess.AsObject,
    apiEntrypoint?: ApiEntrypoint.AsObject,
    sftpImport?: SftpImport.AsObject,
    scrub?: ScrubProcess.AsObject,
    frequency?: FrequencyProcess.AsObject,
    cjsImport?: CjsImportProcess.AsObject,
    cjsExport?: CjsExportProcess.AsObject,
    cjsEnrich?: CjsEnrichmentProcess.AsObject,
    webEntrypoint?: WebEntrypointProcess.AsObject,
    deleteScrubEntries?: DeleteScrubEntriesProcess.AsObject,
    wfmExport?: WfmExportProcess.AsObject,
    linkEnrich?: PaymentLinkEnrichment.AsObject,
    rnd?: RndEnrichmentProcess.AsObject,
    consentEnrich?: ConsentEnrichmentProcess.AsObject,
    consentExport?: ConsentExportProcess.AsObject,
    complianceProcessor?: ComplianceProcessor.AsObject,
    consentEntrypoint?: ConsentEntrypointProcess.AsObject,
    portalLinkEnrich?: PortalLinkEnrichment.AsObject,
    bulkWebEntrypoint?: BulkWebEntrypointProcess.AsObject,
    omniExchangeProcess?: OmniExchangeProcess.AsObject,
    webExchangeProcess?: WebExchangeProcess.AsObject,
    split?: SplitCriteria.AsObject,
    epicEntryPoint?: EpicEntrypoint.AsObject,
    contactManagerSink?: ContactManagerSink.AsObject,
    sum?: SumProcess.AsObject,
    finviEntrypoint?: FinviEntrypoint.AsObject,
  }

  export enum ProcCase {
    PROC_NOT_SET = 0,
    APPEND = 30,
    SORT = 31,
    FILTER = 32,
    GS_EXPORT = 42,
    P3_EXPORT = 44,
    COMPL = 45,
    DEDUP = 46,
    CFS_EXPORT = 47,
    SFTP_EXPORT = 48,
    RESHAPE = 49,
    LOOKUP = 50,
    ENTRYPOINT = 51,
    COMPLIANCE_EXPORT = 52,
    API_ENTRYPOINT = 53,
    SFTP_IMPORT = 54,
    SCRUB = 56,
    FREQUENCY = 57,
    CJS_IMPORT = 58,
    CJS_EXPORT = 59,
    CJS_ENRICH = 60,
    WEB_ENTRYPOINT = 61,
    DELETE_SCRUB_ENTRIES = 62,
    WFM_EXPORT = 63,
    LINK_ENRICH = 64,
    RND = 65,
    CONSENT_ENRICH = 66,
    CONSENT_EXPORT = 67,
    COMPLIANCE_PROCESSOR = 69,
    CONSENT_ENTRYPOINT = 70,
    PORTAL_LINK_ENRICH = 71,
    BULK_WEB_ENTRYPOINT = 72,
    OMNI_EXCHANGE_PROCESS = 73,
    WEB_EXCHANGE_PROCESS = 74,
    SPLIT = 75,
    EPIC_ENTRY_POINT = 76,
    CONTACT_MANAGER_SINK = 77,
    SUM = 78,
    FINVI_ENTRYPOINT = 79,
  }
}

export class ComplianceProcessor extends jspb.Message {
  getRuleSetId(): string;
  setRuleSetId(value: string): void;

  hasCommType(): boolean;
  clearCommType(): void;
  getCommType(): api_commons_communication_pb.CommType | undefined;
  setCommType(value?: api_commons_communication_pb.CommType): void;

  getCallType(): string;
  setCallType(value: string): void;

  getPhoneNumberField(): string;
  setPhoneNumberField(value: string): void;

  getEmailField(): string;
  setEmailField(value: string): void;

  getZipCodeField(): string;
  setZipCodeField(value: string): void;

  getCallMetadataMap(): jspb.Map<string, string>;
  clearCallMetadataMap(): void;
  getCountryCode(): string;
  setCountryCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComplianceProcessor.AsObject;
  static toObject(includeInstance: boolean, msg: ComplianceProcessor): ComplianceProcessor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComplianceProcessor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComplianceProcessor;
  static deserializeBinaryFromReader(message: ComplianceProcessor, reader: jspb.BinaryReader): ComplianceProcessor;
}

export namespace ComplianceProcessor {
  export type AsObject = {
    ruleSetId: string,
    commType?: api_commons_communication_pb.CommType.AsObject,
    callType: string,
    phoneNumberField: string,
    emailField: string,
    zipCodeField: string,
    callMetadataMap: Array<[string, string]>,
    countryCode: string,
  }
}

export class ConsentEntrypointProcess extends jspb.Message {
  getConsentProfileId(): string;
  setConsentProfileId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsentEntrypointProcess.AsObject;
  static toObject(includeInstance: boolean, msg: ConsentEntrypointProcess): ConsentEntrypointProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsentEntrypointProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsentEntrypointProcess;
  static deserializeBinaryFromReader(message: ConsentEntrypointProcess, reader: jspb.BinaryReader): ConsentEntrypointProcess;
}

export namespace ConsentEntrypointProcess {
  export type AsObject = {
    consentProfileId: string,
  }
}

export class ConsentEnrichmentProcess extends jspb.Message {
  getContentField(): string;
  setContentField(value: string): void;

  getConsentProfile(): string;
  setConsentProfile(value: string): void;

  getConsentProfileId(): string;
  setConsentProfileId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsentEnrichmentProcess.AsObject;
  static toObject(includeInstance: boolean, msg: ConsentEnrichmentProcess): ConsentEnrichmentProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsentEnrichmentProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsentEnrichmentProcess;
  static deserializeBinaryFromReader(message: ConsentEnrichmentProcess, reader: jspb.BinaryReader): ConsentEnrichmentProcess;
}

export namespace ConsentEnrichmentProcess {
  export type AsObject = {
    contentField: string,
    consentProfile: string,
    consentProfileId: string,
  }
}

export class ConsentExportProcess extends jspb.Message {
  getContentField(): string;
  setContentField(value: string): void;

  getConsentProfile(): string;
  setConsentProfile(value: string): void;

  getConsentProfileId(): string;
  setConsentProfileId(value: string): void;

  getRunType(): api_commons_lms_pb.RunTypeMap[keyof api_commons_lms_pb.RunTypeMap];
  setRunType(value: api_commons_lms_pb.RunTypeMap[keyof api_commons_lms_pb.RunTypeMap]): void;

  getAction(): api_commons_lms_pb.ConsentActionTypeMap[keyof api_commons_lms_pb.ConsentActionTypeMap];
  setAction(value: api_commons_lms_pb.ConsentActionTypeMap[keyof api_commons_lms_pb.ConsentActionTypeMap]): void;

  getReferringUrl(): string;
  setReferringUrl(value: string): void;

  getTopic(): string;
  setTopic(value: string): void;

  getRevokedReason(): string;
  setRevokedReason(value: string): void;

  getGrantedReason(): string;
  setGrantedReason(value: string): void;

  getProof(): string;
  setProof(value: string): void;

  getConditionTimeOfDayFrom(): string;
  setConditionTimeOfDayFrom(value: string): void;

  getConditionTimeOfDayTo(): string;
  setConditionTimeOfDayTo(value: string): void;

  getNotes(): string;
  setNotes(value: string): void;

  getExpire(): string;
  setExpire(value: string): void;

  getConditionFrom(): string;
  setConditionFrom(value: string): void;

  getConditionTo(): string;
  setConditionTo(value: string): void;

  hasContentTypeVal(): boolean;
  clearContentTypeVal(): void;
  getContentTypeVal(): api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap];
  setContentTypeVal(value: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap]): void;

  hasContentTypeFieldName(): boolean;
  clearContentTypeFieldName(): void;
  getContentTypeFieldName(): string;
  setContentTypeFieldName(value: string): void;

  hasChannelTypeVal(): boolean;
  clearChannelTypeVal(): void;
  getChannelTypeVal(): api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap];
  setChannelTypeVal(value: api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap]): void;

  hasChannelTypeFieldName(): boolean;
  clearChannelTypeFieldName(): void;
  getChannelTypeFieldName(): string;
  setChannelTypeFieldName(value: string): void;

  hasExpirationDate(): boolean;
  clearExpirationDate(): void;
  getExpirationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirationDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExpirationFieldName(): boolean;
  clearExpirationFieldName(): void;
  getExpirationFieldName(): string;
  setExpirationFieldName(value: string): void;

  hasExpirationAfterDuration(): boolean;
  clearExpirationAfterDuration(): void;
  getExpirationAfterDuration(): google_protobuf_duration_pb.Duration | undefined;
  setExpirationAfterDuration(value?: google_protobuf_duration_pb.Duration): void;

  getContentTypeCase(): ConsentExportProcess.ContentTypeCase;
  getChannelTypeCase(): ConsentExportProcess.ChannelTypeCase;
  getExpirationCase(): ConsentExportProcess.ExpirationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsentExportProcess.AsObject;
  static toObject(includeInstance: boolean, msg: ConsentExportProcess): ConsentExportProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsentExportProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsentExportProcess;
  static deserializeBinaryFromReader(message: ConsentExportProcess, reader: jspb.BinaryReader): ConsentExportProcess;
}

export namespace ConsentExportProcess {
  export type AsObject = {
    contentField: string,
    consentProfile: string,
    consentProfileId: string,
    runType: api_commons_lms_pb.RunTypeMap[keyof api_commons_lms_pb.RunTypeMap],
    action: api_commons_lms_pb.ConsentActionTypeMap[keyof api_commons_lms_pb.ConsentActionTypeMap],
    referringUrl: string,
    topic: string,
    revokedReason: string,
    grantedReason: string,
    proof: string,
    conditionTimeOfDayFrom: string,
    conditionTimeOfDayTo: string,
    notes: string,
    expire: string,
    conditionFrom: string,
    conditionTo: string,
    contentTypeVal: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap],
    contentTypeFieldName: string,
    channelTypeVal: api_commons_compliance_pb.ChannelMap[keyof api_commons_compliance_pb.ChannelMap],
    channelTypeFieldName: string,
    expirationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expirationFieldName: string,
    expirationAfterDuration?: google_protobuf_duration_pb.Duration.AsObject,
  }

  export enum ContentTypeCase {
    CONTENT_TYPE_NOT_SET = 0,
    CONTENT_TYPE_VAL = 27,
    CONTENT_TYPE_FIELD_NAME = 28,
  }

  export enum ChannelTypeCase {
    CHANNEL_TYPE_NOT_SET = 0,
    CHANNEL_TYPE_VAL = 29,
    CHANNEL_TYPE_FIELD_NAME = 30,
  }

  export enum ExpirationCase {
    EXPIRATION_NOT_SET = 0,
    EXPIRATION_DATE = 31,
    EXPIRATION_FIELD_NAME = 32,
    EXPIRATION_AFTER_DURATION = 33,
  }
}

export class PaymentLinkEnrichment extends jspb.Message {
  clearFieldsList(): void;
  getFieldsList(): Array<string>;
  setFieldsList(value: Array<string>): void;
  addFields(value: string, index?: number): string;

  getPaymentLinkConfigId(): string;
  setPaymentLinkConfigId(value: string): void;

  getDiscardOnMissingFields(): boolean;
  setDiscardOnMissingFields(value: boolean): void;

  getKeyMapMap(): jspb.Map<string, string>;
  clearKeyMapMap(): void;
  getPortalId(): string;
  setPortalId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentLinkEnrichment.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentLinkEnrichment): PaymentLinkEnrichment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentLinkEnrichment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentLinkEnrichment;
  static deserializeBinaryFromReader(message: PaymentLinkEnrichment, reader: jspb.BinaryReader): PaymentLinkEnrichment;
}

export namespace PaymentLinkEnrichment {
  export type AsObject = {
    fieldsList: Array<string>,
    paymentLinkConfigId: string,
    discardOnMissingFields: boolean,
    keyMapMap: Array<[string, string]>,
    portalId: string,
  }
}

export class PortalLinkEnrichment extends jspb.Message {
  getKeyMapMap(): jspb.Map<string, string>;
  clearKeyMapMap(): void;
  getPortalId(): string;
  setPortalId(value: string): void;

  hasExpiration(): boolean;
  clearExpiration(): void;
  getExpiration(): Expiration | undefined;
  setExpiration(value?: Expiration): void;

  getDemo(): boolean;
  setDemo(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortalLinkEnrichment.AsObject;
  static toObject(includeInstance: boolean, msg: PortalLinkEnrichment): PortalLinkEnrichment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PortalLinkEnrichment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortalLinkEnrichment;
  static deserializeBinaryFromReader(message: PortalLinkEnrichment, reader: jspb.BinaryReader): PortalLinkEnrichment;
}

export namespace PortalLinkEnrichment {
  export type AsObject = {
    keyMapMap: Array<[string, string]>,
    portalId: string,
    expiration?: Expiration.AsObject,
    demo: boolean,
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

export class EntrypointProcess extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntrypointProcess.AsObject;
  static toObject(includeInstance: boolean, msg: EntrypointProcess): EntrypointProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EntrypointProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntrypointProcess;
  static deserializeBinaryFromReader(message: EntrypointProcess, reader: jspb.BinaryReader): EntrypointProcess;
}

export namespace EntrypointProcess {
  export type AsObject = {
  }
}

export class ApiEntrypoint extends jspb.Message {
  getFtsId(): string;
  setFtsId(value: string): void;

  getFileTemplateId(): string;
  setFileTemplateId(value: string): void;

  getIncremental(): boolean;
  setIncremental(value: boolean): void;

  getEncrypted(): boolean;
  setEncrypted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiEntrypoint.AsObject;
  static toObject(includeInstance: boolean, msg: ApiEntrypoint): ApiEntrypoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApiEntrypoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiEntrypoint;
  static deserializeBinaryFromReader(message: ApiEntrypoint, reader: jspb.BinaryReader): ApiEntrypoint;
}

export namespace ApiEntrypoint {
  export type AsObject = {
    ftsId: string,
    fileTemplateId: string,
    incremental: boolean,
    encrypted: boolean,
  }
}

export class HttpReq extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getHeadersMap(): jspb.Map<string, string>;
  clearHeadersMap(): void;
  getBody(): string;
  setBody(value: string): void;

  getMethod(): api_commons_lms_pb.HttpVerbMap[keyof api_commons_lms_pb.HttpVerbMap];
  setMethod(value: api_commons_lms_pb.HttpVerbMap[keyof api_commons_lms_pb.HttpVerbMap]): void;

  getNamedResponseValuesMap(): jspb.Map<string, string>;
  clearNamedResponseValuesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HttpReq.AsObject;
  static toObject(includeInstance: boolean, msg: HttpReq): HttpReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HttpReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HttpReq;
  static deserializeBinaryFromReader(message: HttpReq, reader: jspb.BinaryReader): HttpReq;
}

export namespace HttpReq {
  export type AsObject = {
    url: string,
    headersMap: Array<[string, string]>,
    body: string,
    method: api_commons_lms_pb.HttpVerbMap[keyof api_commons_lms_pb.HttpVerbMap],
    namedResponseValuesMap: Array<[string, string]>,
  }
}

export class WebEntrypointProcess extends jspb.Message {
  clearHttpRequestsList(): void;
  getHttpRequestsList(): Array<HttpReq>;
  setHttpRequestsList(value: Array<HttpReq>): void;
  addHttpRequests(value?: HttpReq, index?: number): HttpReq;

  getFileTemplateId(): string;
  setFileTemplateId(value: string): void;

  hasFileTemplate(): boolean;
  clearFileTemplate(): void;
  getFileTemplate(): FileTemplate | undefined;
  setFileTemplate(value?: FileTemplate): void;

  getName(): string;
  setName(value: string): void;

  getCron(): string;
  setCron(value: string): void;

  getTimezone(): string;
  setTimezone(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebEntrypointProcess.AsObject;
  static toObject(includeInstance: boolean, msg: WebEntrypointProcess): WebEntrypointProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebEntrypointProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebEntrypointProcess;
  static deserializeBinaryFromReader(message: WebEntrypointProcess, reader: jspb.BinaryReader): WebEntrypointProcess;
}

export namespace WebEntrypointProcess {
  export type AsObject = {
    httpRequestsList: Array<HttpReq.AsObject>,
    fileTemplateId: string,
    fileTemplate?: FileTemplate.AsObject,
    name: string,
    cron: string,
    timezone: string,
    enabled: boolean,
  }
}

export class BulkWebEntrypointProcess extends jspb.Message {
  clearPreliminaryRequestsList(): void;
  getPreliminaryRequestsList(): Array<HttpReq>;
  setPreliminaryRequestsList(value: Array<HttpReq>): void;
  addPreliminaryRequests(value?: HttpReq, index?: number): HttpReq;

  hasPaginatedRequest(): boolean;
  clearPaginatedRequest(): void;
  getPaginatedRequest(): PaginatedHttpRequest | undefined;
  setPaginatedRequest(value?: PaginatedHttpRequest): void;

  getFileTemplateId(): string;
  setFileTemplateId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getCron(): string;
  setCron(value: string): void;

  getTimezone(): string;
  setTimezone(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getFlushPageCount(): number;
  setFlushPageCount(value: number): void;

  getFlushMinuteCount(): number;
  setFlushMinuteCount(value: number): void;

  getFlushDuringCheck(): boolean;
  setFlushDuringCheck(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulkWebEntrypointProcess.AsObject;
  static toObject(includeInstance: boolean, msg: BulkWebEntrypointProcess): BulkWebEntrypointProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BulkWebEntrypointProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulkWebEntrypointProcess;
  static deserializeBinaryFromReader(message: BulkWebEntrypointProcess, reader: jspb.BinaryReader): BulkWebEntrypointProcess;
}

export namespace BulkWebEntrypointProcess {
  export type AsObject = {
    preliminaryRequestsList: Array<HttpReq.AsObject>,
    paginatedRequest?: PaginatedHttpRequest.AsObject,
    fileTemplateId: string,
    name: string,
    cron: string,
    timezone: string,
    enabled: boolean,
    flushPageCount: number,
    flushMinuteCount: number,
    flushDuringCheck: boolean,
  }
}

export class OmniExchangeProcess extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getCampaignId(): string;
  setCampaignId(value: string): void;

  getTimeZone(): string;
  setTimeZone(value: string): void;

  getDays(): number;
  setDays(value: number): void;

  getHour(): number;
  setHour(value: number): void;

  getMinute(): number;
  setMinute(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniExchangeProcess.AsObject;
  static toObject(includeInstance: boolean, msg: OmniExchangeProcess): OmniExchangeProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniExchangeProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniExchangeProcess;
  static deserializeBinaryFromReader(message: OmniExchangeProcess, reader: jspb.BinaryReader): OmniExchangeProcess;
}

export namespace OmniExchangeProcess {
  export type AsObject = {
    projectId: string,
    campaignId: string,
    timeZone: string,
    days: number,
    hour: number,
    minute: number,
  }
}

export class WebExchangeProcess extends jspb.Message {
  clearHttpRequestsList(): void;
  getHttpRequestsList(): Array<HttpReq>;
  setHttpRequestsList(value: Array<HttpReq>): void;
  addHttpRequests(value?: HttpReq, index?: number): HttpReq;

  getErrorThreshold(): number;
  setErrorThreshold(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebExchangeProcess.AsObject;
  static toObject(includeInstance: boolean, msg: WebExchangeProcess): WebExchangeProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebExchangeProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebExchangeProcess;
  static deserializeBinaryFromReader(message: WebExchangeProcess, reader: jspb.BinaryReader): WebExchangeProcess;
}

export namespace WebExchangeProcess {
  export type AsObject = {
    httpRequestsList: Array<HttpReq.AsObject>,
    errorThreshold: number,
  }
}

export class PaginatedHttpRequest extends jspb.Message {
  hasIterationRequest(): boolean;
  clearIterationRequest(): void;
  getIterationRequest(): HttpReq | undefined;
  setIterationRequest(value?: HttpReq): void;

  getStartIndex(): number;
  setStartIndex(value: number): void;

  clearEndForAnyList(): void;
  getEndForAnyList(): Array<api_commons_lms_pb.PaginationTerminator>;
  setEndForAnyList(value: Array<api_commons_lms_pb.PaginationTerminator>): void;
  addEndForAny(value?: api_commons_lms_pb.PaginationTerminator, index?: number): api_commons_lms_pb.PaginationTerminator;

  clearEndForAllList(): void;
  getEndForAllList(): Array<api_commons_lms_pb.PaginationTerminator>;
  setEndForAllList(value: Array<api_commons_lms_pb.PaginationTerminator>): void;
  addEndForAll(value?: api_commons_lms_pb.PaginationTerminator, index?: number): api_commons_lms_pb.PaginationTerminator;

  hasRequestNotReady(): boolean;
  clearRequestNotReady(): void;
  getRequestNotReady(): api_commons_lms_pb.PaginationTerminator | undefined;
  setRequestNotReady(value?: api_commons_lms_pb.PaginationTerminator): void;

  getNotReadyWaitSeconds(): number;
  setNotReadyWaitSeconds(value: number): void;

  getNotReadyRedoPreliminary(): boolean;
  setNotReadyRedoPreliminary(value: boolean): void;

  getNotReadySkipIteration(): boolean;
  setNotReadySkipIteration(value: boolean): void;

  getProcessStopPage(): boolean;
  setProcessStopPage(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginatedHttpRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PaginatedHttpRequest): PaginatedHttpRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaginatedHttpRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginatedHttpRequest;
  static deserializeBinaryFromReader(message: PaginatedHttpRequest, reader: jspb.BinaryReader): PaginatedHttpRequest;
}

export namespace PaginatedHttpRequest {
  export type AsObject = {
    iterationRequest?: HttpReq.AsObject,
    startIndex: number,
    endForAnyList: Array<api_commons_lms_pb.PaginationTerminator.AsObject>,
    endForAllList: Array<api_commons_lms_pb.PaginationTerminator.AsObject>,
    requestNotReady?: api_commons_lms_pb.PaginationTerminator.AsObject,
    notReadyWaitSeconds: number,
    notReadyRedoPreliminary: boolean,
    notReadySkipIteration: boolean,
    processStopPage: boolean,
  }
}

export class SftpImport extends jspb.Message {
  getUser(): string;
  setUser(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getPrivateKey(): string;
  setPrivateKey(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getPort(): string;
  setPort(value: string): void;

  hasFilePattern(): boolean;
  clearFilePattern(): void;
  getFilePattern(): api_commons_lms_pb.FilePattern | undefined;
  setFilePattern(value?: api_commons_lms_pb.FilePattern): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getFileTemplateId(): string;
  setFileTemplateId(value: string): void;

  getIncremental(): boolean;
  setIncremental(value: boolean): void;

  getEncrypted(): boolean;
  setEncrypted(value: boolean): void;

  getCron(): string;
  setCron(value: string): void;

  getTimezone(): string;
  setTimezone(value: string): void;

  getTransferConfigName(): string;
  setTransferConfigName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SftpImport.AsObject;
  static toObject(includeInstance: boolean, msg: SftpImport): SftpImport.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SftpImport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SftpImport;
  static deserializeBinaryFromReader(message: SftpImport, reader: jspb.BinaryReader): SftpImport;
}

export namespace SftpImport {
  export type AsObject = {
    user: string,
    password: string,
    privateKey: string,
    address: string,
    port: string,
    filePattern?: api_commons_lms_pb.FilePattern.AsObject,
    enabled: boolean,
    fileTemplateId: string,
    incremental: boolean,
    encrypted: boolean,
    cron: string,
    timezone: string,
    transferConfigName: string,
  }
}

export class RndEnrichmentProcess extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getField(): string;
  setField(value: string): void;

  getDateLastContactField(): string;
  setDateLastContactField(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RndEnrichmentProcess.AsObject;
  static toObject(includeInstance: boolean, msg: RndEnrichmentProcess): RndEnrichmentProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RndEnrichmentProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RndEnrichmentProcess;
  static deserializeBinaryFromReader(message: RndEnrichmentProcess, reader: jspb.BinaryReader): RndEnrichmentProcess;
}

export namespace RndEnrichmentProcess {
  export type AsObject = {
    orgId: string,
    field: string,
    dateLastContactField: string,
  }
}

export class CjsImportProcess extends jspb.Message {
  getCjsCollectionId(): string;
  setCjsCollectionId(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getCron(): string;
  setCron(value: string): void;

  getTimezone(): string;
  setTimezone(value: string): void;

  getDedup(): boolean;
  setDedup(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CjsImportProcess.AsObject;
  static toObject(includeInstance: boolean, msg: CjsImportProcess): CjsImportProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CjsImportProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CjsImportProcess;
  static deserializeBinaryFromReader(message: CjsImportProcess, reader: jspb.BinaryReader): CjsImportProcess;
}

export namespace CjsImportProcess {
  export type AsObject = {
    cjsCollectionId: string,
    enabled: boolean,
    cron: string,
    timezone: string,
    dedup: boolean,
  }
}

export class CjsExportProcess extends jspb.Message {
  getCjsCollectionId(): string;
  setCjsCollectionId(value: string): void;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ExportHeader | undefined;
  setHeader(value?: ExportHeader): void;

  getRunType(): api_commons_lms_pb.RunTypeMap[keyof api_commons_lms_pb.RunTypeMap];
  setRunType(value: api_commons_lms_pb.RunTypeMap[keyof api_commons_lms_pb.RunTypeMap]): void;

  getCjsCollectionName(): string;
  setCjsCollectionName(value: string): void;

  getOverwrite(): boolean;
  setOverwrite(value: boolean): void;

  getUpdate(): boolean;
  setUpdate(value: boolean): void;

  getUpdateKeyField(): string;
  setUpdateKeyField(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CjsExportProcess.AsObject;
  static toObject(includeInstance: boolean, msg: CjsExportProcess): CjsExportProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CjsExportProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CjsExportProcess;
  static deserializeBinaryFromReader(message: CjsExportProcess, reader: jspb.BinaryReader): CjsExportProcess;
}

export namespace CjsExportProcess {
  export type AsObject = {
    cjsCollectionId: string,
    header?: ExportHeader.AsObject,
    runType: api_commons_lms_pb.RunTypeMap[keyof api_commons_lms_pb.RunTypeMap],
    cjsCollectionName: string,
    overwrite: boolean,
    update: boolean,
    updateKeyField: string,
  }
}

export class CjsEnrichmentProcess extends jspb.Message {
  getCjsCollectionId(): string;
  setCjsCollectionId(value: string): void;

  getKeyField(): string;
  setKeyField(value: string): void;

  getEnrichType(): api_commons_lms_pb.EnrichmentTypeMap[keyof api_commons_lms_pb.EnrichmentTypeMap];
  setEnrichType(value: api_commons_lms_pb.EnrichmentTypeMap[keyof api_commons_lms_pb.EnrichmentTypeMap]): void;

  getPrimarySource(): api_commons_lms_pb.PrimarySourceMap[keyof api_commons_lms_pb.PrimarySourceMap];
  setPrimarySource(value: api_commons_lms_pb.PrimarySourceMap[keyof api_commons_lms_pb.PrimarySourceMap]): void;

  getCjsKeyFieldName(): string;
  setCjsKeyFieldName(value: string): void;

  getColumnOverwrite(): boolean;
  setColumnOverwrite(value: boolean): void;

  getDedupKeyPolicy(): api_commons_lms_pb.DedupKeyPolicyMap[keyof api_commons_lms_pb.DedupKeyPolicyMap];
  setDedupKeyPolicy(value: api_commons_lms_pb.DedupKeyPolicyMap[keyof api_commons_lms_pb.DedupKeyPolicyMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CjsEnrichmentProcess.AsObject;
  static toObject(includeInstance: boolean, msg: CjsEnrichmentProcess): CjsEnrichmentProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CjsEnrichmentProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CjsEnrichmentProcess;
  static deserializeBinaryFromReader(message: CjsEnrichmentProcess, reader: jspb.BinaryReader): CjsEnrichmentProcess;
}

export namespace CjsEnrichmentProcess {
  export type AsObject = {
    cjsCollectionId: string,
    keyField: string,
    enrichType: api_commons_lms_pb.EnrichmentTypeMap[keyof api_commons_lms_pb.EnrichmentTypeMap],
    primarySource: api_commons_lms_pb.PrimarySourceMap[keyof api_commons_lms_pb.PrimarySourceMap],
    cjsKeyFieldName: string,
    columnOverwrite: boolean,
    dedupKeyPolicy: api_commons_lms_pb.DedupKeyPolicyMap[keyof api_commons_lms_pb.DedupKeyPolicyMap],
  }
}

export class AppendProcess extends jspb.Message {
  getFtsId(): string;
  setFtsId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppendProcess.AsObject;
  static toObject(includeInstance: boolean, msg: AppendProcess): AppendProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppendProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppendProcess;
  static deserializeBinaryFromReader(message: AppendProcess, reader: jspb.BinaryReader): AppendProcess;
}

export namespace AppendProcess {
  export type AsObject = {
    ftsId: string,
  }
}

export class LookupProcess extends jspb.Message {
  clearFieldNamesList(): void;
  getFieldNamesList(): Array<string>;
  setFieldNamesList(value: Array<string>): void;
  addFieldNames(value: string, index?: number): string;

  hasCompl(): boolean;
  clearCompl(): void;
  getCompl(): LookupProcess.ComplProcess | undefined;
  setCompl(value?: LookupProcess.ComplProcess): void;

  hasList(): boolean;
  clearList(): void;
  getList(): LookupProcess.ListLookup | undefined;
  setList(value?: LookupProcess.ListLookup): void;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): LookupProcess.UrlLookup | undefined;
  setUrl(value?: LookupProcess.UrlLookup): void;

  getProcCase(): LookupProcess.ProcCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookupProcess.AsObject;
  static toObject(includeInstance: boolean, msg: LookupProcess): LookupProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LookupProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookupProcess;
  static deserializeBinaryFromReader(message: LookupProcess, reader: jspb.BinaryReader): LookupProcess;
}

export namespace LookupProcess {
  export type AsObject = {
    fieldNamesList: Array<string>,
    compl?: LookupProcess.ComplProcess.AsObject,
    list?: LookupProcess.ListLookup.AsObject,
    url?: LookupProcess.UrlLookup.AsObject,
  }

  export class ComplProcess extends jspb.Message {
    getCountryCode(): string;
    setCountryCode(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComplProcess.AsObject;
    static toObject(includeInstance: boolean, msg: ComplProcess): ComplProcess.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComplProcess, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComplProcess;
    static deserializeBinaryFromReader(message: ComplProcess, reader: jspb.BinaryReader): ComplProcess;
  }

  export namespace ComplProcess {
    export type AsObject = {
      countryCode: string,
    }
  }

  export class ListLookup extends jspb.Message {
    getOrgId(): string;
    setOrgId(value: string): void;

    getRegionId(): string;
    setRegionId(value: string): void;

    getElementId(): string;
    setElementId(value: string): void;

    getVersion(): number;
    setVersion(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLookup.AsObject;
    static toObject(includeInstance: boolean, msg: ListLookup): ListLookup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLookup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLookup;
    static deserializeBinaryFromReader(message: ListLookup, reader: jspb.BinaryReader): ListLookup;
  }

  export namespace ListLookup {
    export type AsObject = {
      orgId: string,
      regionId: string,
      elementId: string,
      version: number,
    }
  }

  export class UrlLookup extends jspb.Message {
    getUrl(): string;
    setUrl(value: string): void;

    hasFileTemplate(): boolean;
    clearFileTemplate(): void;
    getFileTemplate(): FileTemplate | undefined;
    setFileTemplate(value?: FileTemplate): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UrlLookup.AsObject;
    static toObject(includeInstance: boolean, msg: UrlLookup): UrlLookup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UrlLookup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UrlLookup;
    static deserializeBinaryFromReader(message: UrlLookup, reader: jspb.BinaryReader): UrlLookup;
  }

  export namespace UrlLookup {
    export type AsObject = {
      url: string,
      fileTemplate?: FileTemplate.AsObject,
    }
  }

  export enum ProcCase {
    PROC_NOT_SET = 0,
    COMPL = 7,
    LIST = 8,
    URL = 9,
  }
}

export class ComplProcess extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComplProcess.AsObject;
  static toObject(includeInstance: boolean, msg: ComplProcess): ComplProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComplProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComplProcess;
  static deserializeBinaryFromReader(message: ComplProcess, reader: jspb.BinaryReader): ComplProcess;
}

export namespace ComplProcess {
  export type AsObject = {
  }
}

export class CFSExportConfig extends jspb.Message {
  getType(): api_commons_lms_pb.ExportTypeMap[keyof api_commons_lms_pb.ExportTypeMap];
  setType(value: api_commons_lms_pb.ExportTypeMap[keyof api_commons_lms_pb.ExportTypeMap]): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CFSExportConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CFSExportConfig): CFSExportConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CFSExportConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CFSExportConfig;
  static deserializeBinaryFromReader(message: CFSExportConfig, reader: jspb.BinaryReader): CFSExportConfig;
}

export namespace CFSExportConfig {
  export type AsObject = {
    type: api_commons_lms_pb.ExportTypeMap[keyof api_commons_lms_pb.ExportTypeMap],
    value: string,
  }
}

export class CFSExportReqHeader extends jspb.Message {
  hasExportHeader(): boolean;
  clearExportHeader(): void;
  getExportHeader(): ExportHeader | undefined;
  setExportHeader(value?: ExportHeader): void;

  clearConfigsList(): void;
  getConfigsList(): Array<CFSExportConfig>;
  setConfigsList(value: Array<CFSExportConfig>): void;
  addConfigs(value?: CFSExportConfig, index?: number): CFSExportConfig;

  getOrgId(): string;
  setOrgId(value: string): void;

  getRegionId(): string;
  setRegionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CFSExportReqHeader.AsObject;
  static toObject(includeInstance: boolean, msg: CFSExportReqHeader): CFSExportReqHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CFSExportReqHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CFSExportReqHeader;
  static deserializeBinaryFromReader(message: CFSExportReqHeader, reader: jspb.BinaryReader): CFSExportReqHeader;
}

export namespace CFSExportReqHeader {
  export type AsObject = {
    exportHeader?: ExportHeader.AsObject,
    configsList: Array<CFSExportConfig.AsObject>,
    orgId: string,
    regionId: string,
  }
}

export class CFSExportProcess extends jspb.Message {
  hasExportHeader(): boolean;
  clearExportHeader(): void;
  getExportHeader(): ExportHeader | undefined;
  setExportHeader(value?: ExportHeader): void;

  clearConfigsList(): void;
  getConfigsList(): Array<CFSExportConfig>;
  setConfigsList(value: Array<CFSExportConfig>): void;
  addConfigs(value?: CFSExportConfig, index?: number): CFSExportConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CFSExportProcess.AsObject;
  static toObject(includeInstance: boolean, msg: CFSExportProcess): CFSExportProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CFSExportProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CFSExportProcess;
  static deserializeBinaryFromReader(message: CFSExportProcess, reader: jspb.BinaryReader): CFSExportProcess;
}

export namespace CFSExportProcess {
  export type AsObject = {
    exportHeader?: ExportHeader.AsObject,
    configsList: Array<CFSExportConfig.AsObject>,
  }
}

export class FilterProcess extends jspb.Message {
  getExpression(): string;
  setExpression(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<FilterOperation>;
  setOperationsList(value: Array<FilterOperation>): void;
  addOperations(value?: FilterOperation, index?: number): FilterOperation;

  getNegate(): boolean;
  setNegate(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterProcess.AsObject;
  static toObject(includeInstance: boolean, msg: FilterProcess): FilterProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilterProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterProcess;
  static deserializeBinaryFromReader(message: FilterProcess, reader: jspb.BinaryReader): FilterProcess;
}

export namespace FilterProcess {
  export type AsObject = {
    expression: string,
    operationsList: Array<FilterOperation.AsObject>,
    negate: boolean,
  }
}

export class FilterOperation extends jspb.Message {
  clearChecksList(): void;
  getChecksList(): Array<FilterCheck>;
  setChecksList(value: Array<FilterCheck>): void;
  addChecks(value?: FilterCheck, index?: number): FilterCheck;

  getOperator(): api_commons_lms_pb.ChainOperatorMap[keyof api_commons_lms_pb.ChainOperatorMap];
  setOperator(value: api_commons_lms_pb.ChainOperatorMap[keyof api_commons_lms_pb.ChainOperatorMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterOperation.AsObject;
  static toObject(includeInstance: boolean, msg: FilterOperation): FilterOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilterOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterOperation;
  static deserializeBinaryFromReader(message: FilterOperation, reader: jspb.BinaryReader): FilterOperation;
}

export namespace FilterOperation {
  export type AsObject = {
    checksList: Array<FilterCheck.AsObject>,
    operator: api_commons_lms_pb.ChainOperatorMap[keyof api_commons_lms_pb.ChainOperatorMap],
  }
}

export class FilterCheck extends jspb.Message {
  hasValComp(): boolean;
  clearValComp(): void;
  getValComp(): FilterCheck.ValueComparison | undefined;
  setValComp(value?: FilterCheck.ValueComparison): void;

  hasTypeComp(): boolean;
  clearTypeComp(): void;
  getTypeComp(): FilterCheck.TypeComparison | undefined;
  setTypeComp(value?: FilterCheck.TypeComparison): void;

  hasListComp(): boolean;
  clearListComp(): void;
  getListComp(): FilterCheck.ListComparison | undefined;
  setListComp(value?: FilterCheck.ListComparison): void;

  getCheckCase(): FilterCheck.CheckCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterCheck.AsObject;
  static toObject(includeInstance: boolean, msg: FilterCheck): FilterCheck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilterCheck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterCheck;
  static deserializeBinaryFromReader(message: FilterCheck, reader: jspb.BinaryReader): FilterCheck;
}

export namespace FilterCheck {
  export type AsObject = {
    valComp?: FilterCheck.ValueComparison.AsObject,
    typeComp?: FilterCheck.TypeComparison.AsObject,
    listComp?: FilterCheck.ListComparison.AsObject,
  }

  export class Value extends jspb.Message {
    hasStringVal(): boolean;
    clearStringVal(): void;
    getStringVal(): string;
    setStringVal(value: string): void;

    hasNumberVal(): boolean;
    clearNumberVal(): void;
    getNumberVal(): number;
    setNumberVal(value: number): void;

    hasBoolVal(): boolean;
    clearBoolVal(): void;
    getBoolVal(): boolean;
    setBoolVal(value: boolean): void;

    hasFieldName(): boolean;
    clearFieldName(): void;
    getFieldName(): FieldIndex | undefined;
    setFieldName(value?: FieldIndex): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): DateTime | undefined;
    setDateTime(value?: DateTime): void;

    getValCase(): Value.ValCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
  }

  export namespace Value {
    export type AsObject = {
      stringVal: string,
      numberVal: number,
      boolVal: boolean,
      fieldName?: FieldIndex.AsObject,
      dateTime?: DateTime.AsObject,
    }

    export enum ValCase {
      VAL_NOT_SET = 0,
      STRING_VAL = 1,
      NUMBER_VAL = 2,
      BOOL_VAL = 3,
      FIELD_NAME = 5,
      DATE_TIME = 14,
    }
  }

  export class ValueComparison extends jspb.Message {
    hasFieldName(): boolean;
    clearFieldName(): void;
    getFieldName(): FieldIndex | undefined;
    setFieldName(value?: FieldIndex): void;

    getOp(): api_commons_lms_pb.CompareOperatorMap[keyof api_commons_lms_pb.CompareOperatorMap];
    setOp(value: api_commons_lms_pb.CompareOperatorMap[keyof api_commons_lms_pb.CompareOperatorMap]): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): FilterCheck.Value | undefined;
    setValue(value?: FilterCheck.Value): void;

    getNegate(): boolean;
    setNegate(value: boolean): void;

    getExists(): boolean;
    setExists(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueComparison.AsObject;
    static toObject(includeInstance: boolean, msg: ValueComparison): ValueComparison.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueComparison, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueComparison;
    static deserializeBinaryFromReader(message: ValueComparison, reader: jspb.BinaryReader): ValueComparison;
  }

  export namespace ValueComparison {
    export type AsObject = {
      fieldName?: FieldIndex.AsObject,
      op: api_commons_lms_pb.CompareOperatorMap[keyof api_commons_lms_pb.CompareOperatorMap],
      value?: FilterCheck.Value.AsObject,
      negate: boolean,
      exists: boolean,
    }
  }

  export class TypeComparison extends jspb.Message {
    hasFieldName(): boolean;
    clearFieldName(): void;
    getFieldName(): FieldIndex | undefined;
    setFieldName(value?: FieldIndex): void;

    getMatchesFieldType(): api_commons_lms_pb.RecordTypeMap[keyof api_commons_lms_pb.RecordTypeMap];
    setMatchesFieldType(value: api_commons_lms_pb.RecordTypeMap[keyof api_commons_lms_pb.RecordTypeMap]): void;

    getNegate(): boolean;
    setNegate(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TypeComparison.AsObject;
    static toObject(includeInstance: boolean, msg: TypeComparison): TypeComparison.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TypeComparison, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TypeComparison;
    static deserializeBinaryFromReader(message: TypeComparison, reader: jspb.BinaryReader): TypeComparison;
  }

  export namespace TypeComparison {
    export type AsObject = {
      fieldName?: FieldIndex.AsObject,
      matchesFieldType: api_commons_lms_pb.RecordTypeMap[keyof api_commons_lms_pb.RecordTypeMap],
      negate: boolean,
    }
  }

  export class ListComparison extends jspb.Message {
    hasFieldName(): boolean;
    clearFieldName(): void;
    getFieldName(): FieldIndex | undefined;
    setFieldName(value?: FieldIndex): void;

    clearDataList(): void;
    getDataList(): Array<FilterCheck.ListComparison.FieldOrVal>;
    setDataList(value: Array<FilterCheck.ListComparison.FieldOrVal>): void;
    addData(value?: FilterCheck.ListComparison.FieldOrVal, index?: number): FilterCheck.ListComparison.FieldOrVal;

    getNegate(): boolean;
    setNegate(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListComparison.AsObject;
    static toObject(includeInstance: boolean, msg: ListComparison): ListComparison.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListComparison, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListComparison;
    static deserializeBinaryFromReader(message: ListComparison, reader: jspb.BinaryReader): ListComparison;
  }

  export namespace ListComparison {
    export type AsObject = {
      fieldName?: FieldIndex.AsObject,
      dataList: Array<FilterCheck.ListComparison.FieldOrVal.AsObject>,
      negate: boolean,
    }

    export class FieldOrVal extends jspb.Message {
      hasField(): boolean;
      clearField(): void;
      getField(): FieldIndex | undefined;
      setField(value?: FieldIndex): void;

      hasValue(): boolean;
      clearValue(): void;
      getValue(): FilterCheck.Value | undefined;
      setValue(value?: FilterCheck.Value): void;

      getValCase(): FieldOrVal.ValCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): FieldOrVal.AsObject;
      static toObject(includeInstance: boolean, msg: FieldOrVal): FieldOrVal.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: FieldOrVal, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): FieldOrVal;
      static deserializeBinaryFromReader(message: FieldOrVal, reader: jspb.BinaryReader): FieldOrVal;
    }

    export namespace FieldOrVal {
      export type AsObject = {
        field?: FieldIndex.AsObject,
        value?: FilterCheck.Value.AsObject,
      }

      export enum ValCase {
        VAL_NOT_SET = 0,
        FIELD = 6,
        VALUE = 7,
      }
    }
  }

  export enum CheckCase {
    CHECK_NOT_SET = 0,
    VAL_COMP = 12,
    TYPE_COMP = 13,
    LIST_COMP = 14,
  }
}

export class GSExportProcess extends jspb.Message {
  getBucket(): string;
  setBucket(value: string): void;

  getFile(): string;
  setFile(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GSExportProcess.AsObject;
  static toObject(includeInstance: boolean, msg: GSExportProcess): GSExportProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GSExportProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GSExportProcess;
  static deserializeBinaryFromReader(message: GSExportProcess, reader: jspb.BinaryReader): GSExportProcess;
}

export namespace GSExportProcess {
  export type AsObject = {
    bucket: string,
    file: string,
  }
}

export class P3ExportProcess extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ExportHeader | undefined;
  setHeader(value?: ExportHeader): void;

  getContactListPrefix(): string;
  setContactListPrefix(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getAccessToken(): string;
  setAccessToken(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  getDupePolicy(): api_commons_lms_pb.DuplicatePolicyTypeMap[keyof api_commons_lms_pb.DuplicatePolicyTypeMap];
  setDupePolicy(value: api_commons_lms_pb.DuplicatePolicyTypeMap[keyof api_commons_lms_pb.DuplicatePolicyTypeMap]): void;

  getAbsentPolicy(): api_commons_lms_pb.AbsentPolicyTypeMap[keyof api_commons_lms_pb.AbsentPolicyTypeMap];
  setAbsentPolicy(value: api_commons_lms_pb.AbsentPolicyTypeMap[keyof api_commons_lms_pb.AbsentPolicyTypeMap]): void;

  getTemplateId(): number;
  setTemplateId(value: number): void;

  getDefaultAreaCode(): number;
  setDefaultAreaCode(value: number): void;

  getScheduleTemplateNumber(): number;
  setScheduleTemplateNumber(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  getRunType(): api_commons_lms_pb.RunTypeMap[keyof api_commons_lms_pb.RunTypeMap];
  setRunType(value: api_commons_lms_pb.RunTypeMap[keyof api_commons_lms_pb.RunTypeMap]): void;

  hasFilePattern(): boolean;
  clearFilePattern(): void;
  getFilePattern(): api_commons_lms_pb.FilePattern | undefined;
  setFilePattern(value?: api_commons_lms_pb.FilePattern): void;

  hasFilename(): boolean;
  clearFilename(): void;
  getFilename(): api_commons_lms_pb.ConstructedFilename | undefined;
  setFilename(value?: api_commons_lms_pb.ConstructedFilename): void;

  clearCallerIdsList(): void;
  getCallerIdsList(): Array<number>;
  setCallerIdsList(value: Array<number>): void;
  addCallerIds(value: number, index?: number): number;

  getCellScrub(): boolean;
  setCellScrub(value: boolean): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDialOrder(): api_commons_lms_pb.DialOrderTypeMap[keyof api_commons_lms_pb.DialOrderTypeMap];
  setDialOrder(value: api_commons_lms_pb.DialOrderTypeMap[keyof api_commons_lms_pb.DialOrderTypeMap]): void;

  getEmailField(): string;
  setEmailField(value: string): void;

  getEmailFrom(): string;
  setEmailFrom(value: string): void;

  getFollowTheSun(): boolean;
  setFollowTheSun(value: boolean): void;

  getMessagesPerMinute(): number;
  setMessagesPerMinute(value: number): void;

  getRandomizeContacts(): boolean;
  setRandomizeContacts(value: boolean): void;

  getScheduleAsPaused(): boolean;
  setScheduleAsPaused(value: boolean): void;

  getScheduleRule(): string;
  setScheduleRule(value: string): void;

  getShaDigestOverride(): boolean;
  setShaDigestOverride(value: boolean): void;

  getSmsField(): string;
  setSmsField(value: string): void;

  getSmsSourceNumber(): number;
  setSmsSourceNumber(value: number): void;

  getTimezoneOverride(): boolean;
  setTimezoneOverride(value: boolean): void;

  getZipScrub(): boolean;
  setZipScrub(value: boolean): void;

  getCompletionThreshold(): number;
  setCompletionThreshold(value: number): void;

  getTimezone(): string;
  setTimezone(value: string): void;

  getComplianceRule(): string;
  setComplianceRule(value: string): void;

  getFieldDelimiter(): string;
  setFieldDelimiter(value: string): void;

  getRecordDelimiter(): string;
  setRecordDelimiter(value: string): void;

  getQuoteFields(): boolean;
  setQuoteFields(value: boolean): void;

  getUseCustomDateFormat(): boolean;
  setUseCustomDateFormat(value: boolean): void;

  getFileFormat(): api_commons_lms_pb.FileFormatMap[keyof api_commons_lms_pb.FileFormatMap];
  setFileFormat(value: api_commons_lms_pb.FileFormatMap[keyof api_commons_lms_pb.FileFormatMap]): void;

  getDaysIntoFuture(): number;
  setDaysIntoFuture(value: number): void;

  getStartHour(): string;
  setStartHour(value: string): void;

  getEndHour(): string;
  setEndHour(value: string): void;

  getScheduleByTimezone(): boolean;
  setScheduleByTimezone(value: boolean): void;

  getShiftPhoneFields(): boolean;
  setShiftPhoneFields(value: boolean): void;

  getDoCampaignLinking(): boolean;
  setDoCampaignLinking(value: boolean): void;

  getCampaignLinkId(): string;
  setCampaignLinkId(value: string): void;

  getStopTrigger(): string;
  setStopTrigger(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): P3ExportProcess.AsObject;
  static toObject(includeInstance: boolean, msg: P3ExportProcess): P3ExportProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: P3ExportProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): P3ExportProcess;
  static deserializeBinaryFromReader(message: P3ExportProcess, reader: jspb.BinaryReader): P3ExportProcess;
}

export namespace P3ExportProcess {
  export type AsObject = {
    header?: ExportHeader.AsObject,
    contactListPrefix: string,
    username: string,
    password: string,
    accessToken: string,
    country: string,
    dupePolicy: api_commons_lms_pb.DuplicatePolicyTypeMap[keyof api_commons_lms_pb.DuplicatePolicyTypeMap],
    absentPolicy: api_commons_lms_pb.AbsentPolicyTypeMap[keyof api_commons_lms_pb.AbsentPolicyTypeMap],
    templateId: number,
    defaultAreaCode: number,
    scheduleTemplateNumber: number,
    description: string,
    runType: api_commons_lms_pb.RunTypeMap[keyof api_commons_lms_pb.RunTypeMap],
    filePattern?: api_commons_lms_pb.FilePattern.AsObject,
    filename?: api_commons_lms_pb.ConstructedFilename.AsObject,
    callerIdsList: Array<number>,
    cellScrub: boolean,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dialOrder: api_commons_lms_pb.DialOrderTypeMap[keyof api_commons_lms_pb.DialOrderTypeMap],
    emailField: string,
    emailFrom: string,
    followTheSun: boolean,
    messagesPerMinute: number,
    randomizeContacts: boolean,
    scheduleAsPaused: boolean,
    scheduleRule: string,
    shaDigestOverride: boolean,
    smsField: string,
    smsSourceNumber: number,
    timezoneOverride: boolean,
    zipScrub: boolean,
    completionThreshold: number,
    timezone: string,
    complianceRule: string,
    fieldDelimiter: string,
    recordDelimiter: string,
    quoteFields: boolean,
    useCustomDateFormat: boolean,
    fileFormat: api_commons_lms_pb.FileFormatMap[keyof api_commons_lms_pb.FileFormatMap],
    daysIntoFuture: number,
    startHour: string,
    endHour: string,
    scheduleByTimezone: boolean,
    shiftPhoneFields: boolean,
    doCampaignLinking: boolean,
    campaignLinkId: string,
    stopTrigger: string,
  }
}

export class ComplianceExportProcess extends jspb.Message {
  getListName(): string;
  setListName(value: string): void;

  getField(): string;
  setField(value: string): void;

  getExpirationField(): string;
  setExpirationField(value: string): void;

  getCountryCode(): string;
  setCountryCode(value: string): void;

  getRunType(): api_commons_lms_pb.RunTypeMap[keyof api_commons_lms_pb.RunTypeMap];
  setRunType(value: api_commons_lms_pb.RunTypeMap[keyof api_commons_lms_pb.RunTypeMap]): void;

  getComplianceListType(): api_commons_lms_pb.ComplianceListTypeMap[keyof api_commons_lms_pb.ComplianceListTypeMap];
  setComplianceListType(value: api_commons_lms_pb.ComplianceListTypeMap[keyof api_commons_lms_pb.ComplianceListTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComplianceExportProcess.AsObject;
  static toObject(includeInstance: boolean, msg: ComplianceExportProcess): ComplianceExportProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComplianceExportProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComplianceExportProcess;
  static deserializeBinaryFromReader(message: ComplianceExportProcess, reader: jspb.BinaryReader): ComplianceExportProcess;
}

export namespace ComplianceExportProcess {
  export type AsObject = {
    listName: string,
    field: string,
    expirationField: string,
    countryCode: string,
    runType: api_commons_lms_pb.RunTypeMap[keyof api_commons_lms_pb.RunTypeMap],
    complianceListType: api_commons_lms_pb.ComplianceListTypeMap[keyof api_commons_lms_pb.ComplianceListTypeMap],
  }
}

export class ScrubProcess extends jspb.Message {
  getListId(): string;
  setListId(value: string): void;

  getField(): string;
  setField(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScrubProcess.AsObject;
  static toObject(includeInstance: boolean, msg: ScrubProcess): ScrubProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScrubProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScrubProcess;
  static deserializeBinaryFromReader(message: ScrubProcess, reader: jspb.BinaryReader): ScrubProcess;
}

export namespace ScrubProcess {
  export type AsObject = {
    listId: string,
    field: string,
  }
}

export class DeleteScrubEntriesProcess extends jspb.Message {
  getListId(): string;
  setListId(value: string): void;

  getField(): string;
  setField(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteScrubEntriesProcess.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteScrubEntriesProcess): DeleteScrubEntriesProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteScrubEntriesProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteScrubEntriesProcess;
  static deserializeBinaryFromReader(message: DeleteScrubEntriesProcess, reader: jspb.BinaryReader): DeleteScrubEntriesProcess;
}

export namespace DeleteScrubEntriesProcess {
  export type AsObject = {
    listId: string,
    field: string,
  }
}

export class FrequencyProcess extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  getDays(): number;
  setDays(value: number): void;

  getCountryCode(): string;
  setCountryCode(value: string): void;

  getMetaField(): string;
  setMetaField(value: string): void;

  clearDispositionsList(): void;
  getDispositionsList(): Array<DispositionPair>;
  setDispositionsList(value: Array<DispositionPair>): void;
  addDispositions(value?: DispositionPair, index?: number): DispositionPair;

  clearResultsList(): void;
  getResultsList(): Array<string>;
  setResultsList(value: Array<string>): void;
  addResults(value: string, index?: number): string;

  clearDispositionSetsList(): void;
  getDispositionSetsList(): Array<DispositionSet>;
  setDispositionSetsList(value: Array<DispositionSet>): void;
  addDispositionSets(value?: DispositionSet, index?: number): DispositionSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrequencyProcess.AsObject;
  static toObject(includeInstance: boolean, msg: FrequencyProcess): FrequencyProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FrequencyProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrequencyProcess;
  static deserializeBinaryFromReader(message: FrequencyProcess, reader: jspb.BinaryReader): FrequencyProcess;
}

export namespace FrequencyProcess {
  export type AsObject = {
    field: string,
    days: number,
    countryCode: string,
    metaField: string,
    dispositionsList: Array<DispositionPair.AsObject>,
    resultsList: Array<string>,
    dispositionSetsList: Array<DispositionSet.AsObject>,
  }
}

export class DispositionSet extends jspb.Message {
  clearDispositionsList(): void;
  getDispositionsList(): Array<DispositionPair>;
  setDispositionsList(value: Array<DispositionPair>): void;
  addDispositions(value?: DispositionPair, index?: number): DispositionPair;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DispositionSet.AsObject;
  static toObject(includeInstance: boolean, msg: DispositionSet): DispositionSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DispositionSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DispositionSet;
  static deserializeBinaryFromReader(message: DispositionSet, reader: jspb.BinaryReader): DispositionSet;
}

export namespace DispositionSet {
  export type AsObject = {
    dispositionsList: Array<DispositionPair.AsObject>,
  }
}

export class DispositionPair extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DispositionPair.AsObject;
  static toObject(includeInstance: boolean, msg: DispositionPair): DispositionPair.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DispositionPair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DispositionPair;
  static deserializeBinaryFromReader(message: DispositionPair, reader: jspb.BinaryReader): DispositionPair;
}

export namespace DispositionPair {
  export type AsObject = {
    key: string,
    value: string,
  }
}

export class SftpExportProcess extends jspb.Message {
  getDestFilepath(): string;
  setDestFilepath(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  getFileformat(): api_commons_lms_pb.FileFormatMap[keyof api_commons_lms_pb.FileFormatMap];
  setFileformat(value: api_commons_lms_pb.FileFormatMap[keyof api_commons_lms_pb.FileFormatMap]): void;

  getPrependHeaders(): boolean;
  setPrependHeaders(value: boolean): void;

  getFieldDelimiter(): string;
  setFieldDelimiter(value: string): void;

  getRecordDelimiter(): string;
  setRecordDelimiter(value: string): void;

  hasFilePattern(): boolean;
  clearFilePattern(): void;
  getFilePattern(): api_commons_lms_pb.FilePattern | undefined;
  setFilePattern(value?: api_commons_lms_pb.FilePattern): void;

  getRunType(): api_commons_lms_pb.RunTypeMap[keyof api_commons_lms_pb.RunTypeMap];
  setRunType(value: api_commons_lms_pb.RunTypeMap[keyof api_commons_lms_pb.RunTypeMap]): void;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ExportHeader | undefined;
  setHeader(value?: ExportHeader): void;

  getQuoteFields(): boolean;
  setQuoteFields(value: boolean): void;

  getUseCustomDateFormat(): boolean;
  setUseCustomDateFormat(value: boolean): void;

  getDirectory(): string;
  setDirectory(value: string): void;

  hasFilename(): boolean;
  clearFilename(): void;
  getFilename(): api_commons_lms_pb.ConstructedFilename | undefined;
  setFilename(value?: api_commons_lms_pb.ConstructedFilename): void;

  getShiftPhoneFields(): boolean;
  setShiftPhoneFields(value: boolean): void;

  getTransferConfigName(): string;
  setTransferConfigName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SftpExportProcess.AsObject;
  static toObject(includeInstance: boolean, msg: SftpExportProcess): SftpExportProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SftpExportProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SftpExportProcess;
  static deserializeBinaryFromReader(message: SftpExportProcess, reader: jspb.BinaryReader): SftpExportProcess;
}

export namespace SftpExportProcess {
  export type AsObject = {
    destFilepath: string,
    password: string,
    address: string,
    username: string,
    port: number,
    fileformat: api_commons_lms_pb.FileFormatMap[keyof api_commons_lms_pb.FileFormatMap],
    prependHeaders: boolean,
    fieldDelimiter: string,
    recordDelimiter: string,
    filePattern?: api_commons_lms_pb.FilePattern.AsObject,
    runType: api_commons_lms_pb.RunTypeMap[keyof api_commons_lms_pb.RunTypeMap],
    header?: ExportHeader.AsObject,
    quoteFields: boolean,
    useCustomDateFormat: boolean,
    directory: string,
    filename?: api_commons_lms_pb.ConstructedFilename.AsObject,
    shiftPhoneFields: boolean,
    transferConfigName: string,
  }
}

export class WfmMultiSkill extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WfmMultiSkill.AsObject;
  static toObject(includeInstance: boolean, msg: WfmMultiSkill): WfmMultiSkill.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WfmMultiSkill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WfmMultiSkill;
  static deserializeBinaryFromReader(message: WfmMultiSkill, reader: jspb.BinaryReader): WfmMultiSkill;
}

export namespace WfmMultiSkill {
  export type AsObject = {
  }
}

export class WfmExportProcess extends jspb.Message {
  hasSingle(): boolean;
  clearSingle(): void;
  getSingle(): number;
  setSingle(value: number): void;

  hasMulti(): boolean;
  clearMulti(): void;
  getMulti(): WfmMultiSkill | undefined;
  setMulti(value?: WfmMultiSkill): void;

  getSkillProfileCase(): WfmExportProcess.SkillProfileCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WfmExportProcess.AsObject;
  static toObject(includeInstance: boolean, msg: WfmExportProcess): WfmExportProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WfmExportProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WfmExportProcess;
  static deserializeBinaryFromReader(message: WfmExportProcess, reader: jspb.BinaryReader): WfmExportProcess;
}

export namespace WfmExportProcess {
  export type AsObject = {
    single: number,
    multi?: WfmMultiSkill.AsObject,
  }

  export enum SkillProfileCase {
    SKILL_PROFILE_NOT_SET = 0,
    SINGLE = 1,
    MULTI = 2,
  }
}

export class ExportHeader extends jspb.Message {
  clearNamesList(): void;
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): void;
  addNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportHeader.AsObject;
  static toObject(includeInstance: boolean, msg: ExportHeader): ExportHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportHeader;
  static deserializeBinaryFromReader(message: ExportHeader, reader: jspb.BinaryReader): ExportHeader;
}

export namespace ExportHeader {
  export type AsObject = {
    namesList: Array<string>,
  }
}

export class SortReq extends jspb.Message {
  hasCriteria(): boolean;
  clearCriteria(): void;
  getCriteria(): SortCriteria | undefined;
  setCriteria(value?: SortCriteria): void;

  hasRecord(): boolean;
  clearRecord(): void;
  getRecord(): RecordProto | undefined;
  setRecord(value?: RecordProto): void;

  getRequestCase(): SortReq.RequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SortReq.AsObject;
  static toObject(includeInstance: boolean, msg: SortReq): SortReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SortReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SortReq;
  static deserializeBinaryFromReader(message: SortReq, reader: jspb.BinaryReader): SortReq;
}

export namespace SortReq {
  export type AsObject = {
    criteria?: SortCriteria.AsObject,
    record?: RecordProto.AsObject,
  }

  export enum RequestCase {
    REQUEST_NOT_SET = 0,
    CRITERIA = 1,
    RECORD = 2,
  }
}

export class CFSExportReq extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): CFSExportReqHeader | undefined;
  setHeader(value?: CFSExportReqHeader): void;

  hasRecord(): boolean;
  clearRecord(): void;
  getRecord(): RecordProto | undefined;
  setRecord(value?: RecordProto): void;

  getRequestCase(): CFSExportReq.RequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CFSExportReq.AsObject;
  static toObject(includeInstance: boolean, msg: CFSExportReq): CFSExportReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CFSExportReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CFSExportReq;
  static deserializeBinaryFromReader(message: CFSExportReq, reader: jspb.BinaryReader): CFSExportReq;
}

export namespace CFSExportReq {
  export type AsObject = {
    header?: CFSExportReqHeader.AsObject,
    record?: RecordProto.AsObject,
  }

  export enum RequestCase {
    REQUEST_NOT_SET = 0,
    HEADER = 1,
    RECORD = 2,
  }
}

export class DeDupCriteria extends jspb.Message {
  getAction(): api_commons_lms_pb.DeDupActionsMap[keyof api_commons_lms_pb.DeDupActionsMap];
  setAction(value: api_commons_lms_pb.DeDupActionsMap[keyof api_commons_lms_pb.DeDupActionsMap]): void;

  clearFieldsList(): void;
  getFieldsList(): Array<FieldIndex>;
  setFieldsList(value: Array<FieldIndex>): void;
  addFields(value?: FieldIndex, index?: number): FieldIndex;

  hasUnless(): boolean;
  clearUnless(): void;
  getUnless(): FilterCheck | undefined;
  setUnless(value?: FilterCheck): void;

  getDisjunctKeys(): boolean;
  setDisjunctKeys(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeDupCriteria.AsObject;
  static toObject(includeInstance: boolean, msg: DeDupCriteria): DeDupCriteria.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeDupCriteria, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeDupCriteria;
  static deserializeBinaryFromReader(message: DeDupCriteria, reader: jspb.BinaryReader): DeDupCriteria;
}

export namespace DeDupCriteria {
  export type AsObject = {
    action: api_commons_lms_pb.DeDupActionsMap[keyof api_commons_lms_pb.DeDupActionsMap],
    fieldsList: Array<FieldIndex.AsObject>,
    unless?: FilterCheck.AsObject,
    disjunctKeys: boolean,
  }
}

export class SortCriteria extends jspb.Message {
  clearOrderingList(): void;
  getOrderingList(): Array<api_commons_lms_pb.SortOrderMap[keyof api_commons_lms_pb.SortOrderMap]>;
  setOrderingList(value: Array<api_commons_lms_pb.SortOrderMap[keyof api_commons_lms_pb.SortOrderMap]>): void;
  addOrdering(value: api_commons_lms_pb.SortOrderMap[keyof api_commons_lms_pb.SortOrderMap], index?: number): api_commons_lms_pb.SortOrderMap[keyof api_commons_lms_pb.SortOrderMap];

  clearFieldOrderList(): void;
  getFieldOrderList(): Array<FieldIndex>;
  setFieldOrderList(value: Array<FieldIndex>): void;
  addFieldOrder(value?: FieldIndex, index?: number): FieldIndex;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SortCriteria.AsObject;
  static toObject(includeInstance: boolean, msg: SortCriteria): SortCriteria.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SortCriteria, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SortCriteria;
  static deserializeBinaryFromReader(message: SortCriteria, reader: jspb.BinaryReader): SortCriteria;
}

export namespace SortCriteria {
  export type AsObject = {
    orderingList: Array<api_commons_lms_pb.SortOrderMap[keyof api_commons_lms_pb.SortOrderMap]>,
    fieldOrderList: Array<FieldIndex.AsObject>,
  }
}

export class Error extends jspb.Message {
  getError(): string;
  setError(value: string): void;

  getRawValue(): string;
  setRawValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Error.AsObject;
  static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Error;
  static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
  export type AsObject = {
    error: string,
    rawValue: string,
  }
}

export class RecordFieldMap extends jspb.Message {
  getFieldsMap(): jspb.Map<string, RecordFieldProto>;
  clearFieldsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordFieldMap.AsObject;
  static toObject(includeInstance: boolean, msg: RecordFieldMap): RecordFieldMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordFieldMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordFieldMap;
  static deserializeBinaryFromReader(message: RecordFieldMap, reader: jspb.BinaryReader): RecordFieldMap;
}

export namespace RecordFieldMap {
  export type AsObject = {
    fieldsMap: Array<[string, RecordFieldProto.AsObject]>,
  }
}

export class Currency extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  getRawValue(): string;
  setRawValue(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  getName(): string;
  setName(value: string): void;

  getInvalid(): boolean;
  setInvalid(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Currency.AsObject;
  static toObject(includeInstance: boolean, msg: Currency): Currency.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Currency, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Currency;
  static deserializeBinaryFromReader(message: Currency, reader: jspb.BinaryReader): Currency;
}

export namespace Currency {
  export type AsObject = {
    symbol: string,
    rawValue: string,
    value: number,
    name: string,
    invalid: boolean,
  }
}

export class Phone extends jspb.Message {
  getRawValue(): string;
  setRawValue(value: string): void;

  getFullNumber(): string;
  setFullNumber(value: string): void;

  getInvalid(): boolean;
  setInvalid(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Phone.AsObject;
  static toObject(includeInstance: boolean, msg: Phone): Phone.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Phone, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Phone;
  static deserializeBinaryFromReader(message: Phone, reader: jspb.BinaryReader): Phone;
}

export namespace Phone {
  export type AsObject = {
    rawValue: string,
    fullNumber: string,
    invalid: boolean,
  }
}

export class PostalCode extends jspb.Message {
  getPostalCode(): string;
  setPostalCode(value: string): void;

  getInvalid(): boolean;
  setInvalid(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostalCode.AsObject;
  static toObject(includeInstance: boolean, msg: PostalCode): PostalCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostalCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostalCode;
  static deserializeBinaryFromReader(message: PostalCode, reader: jspb.BinaryReader): PostalCode;
}

export namespace PostalCode {
  export type AsObject = {
    postalCode: string,
    invalid: boolean,
  }
}

export class Email extends jspb.Message {
  getLocalPart(): string;
  setLocalPart(value: string): void;

  getDomain(): string;
  setDomain(value: string): void;

  getFullAddress(): string;
  setFullAddress(value: string): void;

  getInvalid(): boolean;
  setInvalid(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Email.AsObject;
  static toObject(includeInstance: boolean, msg: Email): Email.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Email, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Email;
  static deserializeBinaryFromReader(message: Email, reader: jspb.BinaryReader): Email;
}

export namespace Email {
  export type AsObject = {
    localPart: string,
    domain: string,
    fullAddress: string,
    invalid: boolean,
  }
}

export class DateTimeModifier extends jspb.Message {
  getYears(): number;
  setYears(value: number): void;

  getWeeks(): number;
  setWeeks(value: number): void;

  getDays(): number;
  setDays(value: number): void;

  getHours(): number;
  setHours(value: number): void;

  getMinutes(): number;
  setMinutes(value: number): void;

  getSeconds(): number;
  setSeconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DateTimeModifier.AsObject;
  static toObject(includeInstance: boolean, msg: DateTimeModifier): DateTimeModifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DateTimeModifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DateTimeModifier;
  static deserializeBinaryFromReader(message: DateTimeModifier, reader: jspb.BinaryReader): DateTimeModifier;
}

export namespace DateTimeModifier {
  export type AsObject = {
    years: number,
    weeks: number,
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
  }
}

export class DateTime extends jspb.Message {
  getRawValue(): string;
  setRawValue(value: string): void;

  getFormat(): string;
  setFormat(value: string): void;

  getPrecision(): api_commons_lms_pb.DateTimePrecisionMap[keyof api_commons_lms_pb.DateTimePrecisionMap];
  setPrecision(value: api_commons_lms_pb.DateTimePrecisionMap[keyof api_commons_lms_pb.DateTimePrecisionMap]): void;

  hasModifier(): boolean;
  clearModifier(): void;
  getModifier(): DateTimeModifier | undefined;
  setModifier(value?: DateTimeModifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DateTime.AsObject;
  static toObject(includeInstance: boolean, msg: DateTime): DateTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DateTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DateTime;
  static deserializeBinaryFromReader(message: DateTime, reader: jspb.BinaryReader): DateTime;
}

export namespace DateTime {
  export type AsObject = {
    rawValue: string,
    format: string,
    precision: api_commons_lms_pb.DateTimePrecisionMap[keyof api_commons_lms_pb.DateTimePrecisionMap],
    modifier?: DateTimeModifier.AsObject,
  }
}

export class EnrichedPhone extends jspb.Message {
  getAreaCode(): string;
  setAreaCode(value: string): void;

  getBlockId(): string;
  setBlockId(value: string): void;

  getCarrier(): string;
  setCarrier(value: string): void;

  getCc(): string;
  setCc(value: string): void;

  getCcnsn(): string;
  setCcnsn(value: string): void;

  getCellPrefix(): string;
  setCellPrefix(value: string): void;

  getCity(): string;
  setCity(value: string): void;

  getCocType(): string;
  setCocType(value: string): void;

  getDst(): boolean;
  setDst(value: boolean): void;

  getInternationalPrefix(): string;
  setInternationalPrefix(value: string): void;

  getIso2(): string;
  setIso2(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getMax(): string;
  setMax(value: string): void;

  getMin(): string;
  setMin(value: string): void;

  getNationalPrefix(): string;
  setNationalPrefix(value: string): void;

  getNdc(): string;
  setNdc(value: string): void;

  getPrefix(): string;
  setPrefix(value: string): void;

  getRegionCode(): string;
  setRegionCode(value: string): void;

  getRegionName(): string;
  setRegionName(value: string): void;

  getSsc1(): string;
  setSsc1(value: string): void;

  getSsc2(): string;
  setSsc2(value: string): void;

  getSsc3(): string;
  setSsc3(value: string): void;

  getSsc4(): string;
  setSsc4(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  getTimeZone(): string;
  setTimeZone(value: string): void;

  getType(): string;
  setType(value: string): void;

  getUsesNdc(): boolean;
  setUsesNdc(value: boolean): void;

  getUtc(): number;
  setUtc(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnrichedPhone.AsObject;
  static toObject(includeInstance: boolean, msg: EnrichedPhone): EnrichedPhone.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnrichedPhone, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnrichedPhone;
  static deserializeBinaryFromReader(message: EnrichedPhone, reader: jspb.BinaryReader): EnrichedPhone;
}

export namespace EnrichedPhone {
  export type AsObject = {
    areaCode: string,
    blockId: string,
    carrier: string,
    cc: string,
    ccnsn: string,
    cellPrefix: string,
    city: string,
    cocType: string,
    dst: boolean,
    internationalPrefix: string,
    iso2: string,
    language: string,
    max: string,
    min: string,
    nationalPrefix: string,
    ndc: string,
    prefix: string,
    regionCode: string,
    regionName: string,
    ssc1: string,
    ssc2: string,
    ssc3: string,
    ssc4: string,
    source: string,
    timeZone: string,
    type: string,
    usesNdc: boolean,
    utc: number,
  }
}

export class EnrichedZip extends jspb.Message {
  getAccuracy(): number;
  setAccuracy(value: number): void;

  getAdminCode1(): string;
  setAdminCode1(value: string): void;

  getAdminCode2(): string;
  setAdminCode2(value: string): void;

  getAdminCode3(): string;
  setAdminCode3(value: string): void;

  getAdminName1(): string;
  setAdminName1(value: string): void;

  getAdminName2(): string;
  setAdminName2(value: string): void;

  getAdminName3(): string;
  setAdminName3(value: string): void;

  getAreaCode(): string;
  setAreaCode(value: string): void;

  getCityName(): string;
  setCityName(value: string): void;

  getCityType(): string;
  setCityType(value: string): void;

  getCountryCode(): string;
  setCountryCode(value: string): void;

  getCountyFips(): string;
  setCountyFips(value: string): void;

  getCountyName(): string;
  setCountyName(value: string): void;

  getDst(): boolean;
  setDst(value: boolean): void;

  getIso2(): string;
  setIso2(value: string): void;

  getMsaCode(): string;
  setMsaCode(value: string): void;

  getPlaceName(): string;
  setPlaceName(value: string): void;

  getPostalCode(): string;
  setPostalCode(value: string): void;

  getPostalCodeKey(): string;
  setPostalCodeKey(value: string): void;

  getPostalType(): string;
  setPostalType(value: string): void;

  getProvinceAbbr(): string;
  setProvinceAbbr(value: string): void;

  getProvinceName(): string;
  setProvinceName(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  getStateFips(): string;
  setStateFips(value: string): void;

  getTimeZone(): string;
  setTimeZone(value: string): void;

  getUtc(): number;
  setUtc(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnrichedZip.AsObject;
  static toObject(includeInstance: boolean, msg: EnrichedZip): EnrichedZip.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnrichedZip, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnrichedZip;
  static deserializeBinaryFromReader(message: EnrichedZip, reader: jspb.BinaryReader): EnrichedZip;
}

export namespace EnrichedZip {
  export type AsObject = {
    accuracy: number,
    adminCode1: string,
    adminCode2: string,
    adminCode3: string,
    adminName1: string,
    adminName2: string,
    adminName3: string,
    areaCode: string,
    cityName: string,
    cityType: string,
    countryCode: string,
    countyFips: string,
    countyName: string,
    dst: boolean,
    iso2: string,
    msaCode: string,
    placeName: string,
    postalCode: string,
    postalCodeKey: string,
    postalType: string,
    provinceAbbr: string,
    provinceName: string,
    source: string,
    stateFips: string,
    timeZone: string,
    utc: number,
  }
}

export class Now extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Now.AsObject;
  static toObject(includeInstance: boolean, msg: Now): Now.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Now, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Now;
  static deserializeBinaryFromReader(message: Now, reader: jspb.BinaryReader): Now;
}

export namespace Now {
  export type AsObject = {
  }
}

export class Timestamp extends jspb.Message {
  getYear(): number;
  setYear(value: number): void;

  getMonth(): number;
  setMonth(value: number): void;

  getWeek(): number;
  setWeek(value: number): void;

  getDayOfMonth(): number;
  setDayOfMonth(value: number): void;

  getDayOfWeek(): number;
  setDayOfWeek(value: number): void;

  getDayOfYear(): number;
  setDayOfYear(value: number): void;

  getHour(): number;
  setHour(value: number): void;

  getMinute(): number;
  setMinute(value: number): void;

  getSecond(): number;
  setSecond(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Timestamp.AsObject;
  static toObject(includeInstance: boolean, msg: Timestamp): Timestamp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Timestamp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Timestamp;
  static deserializeBinaryFromReader(message: Timestamp, reader: jspb.BinaryReader): Timestamp;
}

export namespace Timestamp {
  export type AsObject = {
    year: number,
    month: number,
    week: number,
    dayOfMonth: number,
    dayOfWeek: number,
    dayOfYear: number,
    hour: number,
    minute: number,
    second: number,
  }
}

export class Date extends jspb.Message {
  getYear(): number;
  setYear(value: number): void;

  getMonth(): number;
  setMonth(value: number): void;

  getWeek(): number;
  setWeek(value: number): void;

  getDayOfMonth(): number;
  setDayOfMonth(value: number): void;

  getDayOfWeek(): number;
  setDayOfWeek(value: number): void;

  getDayOfYear(): number;
  setDayOfYear(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Date.AsObject;
  static toObject(includeInstance: boolean, msg: Date): Date.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Date, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Date;
  static deserializeBinaryFromReader(message: Date, reader: jspb.BinaryReader): Date;
}

export namespace Date {
  export type AsObject = {
    year: number,
    month: number,
    week: number,
    dayOfMonth: number,
    dayOfWeek: number,
    dayOfYear: number,
  }
}

export class MonthAndDay extends jspb.Message {
  getMonth(): number;
  setMonth(value: number): void;

  getWeek(): number;
  setWeek(value: number): void;

  getDayOfMonth(): number;
  setDayOfMonth(value: number): void;

  getDayOfWeek(): number;
  setDayOfWeek(value: number): void;

  getDayOfYear(): number;
  setDayOfYear(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonthAndDay.AsObject;
  static toObject(includeInstance: boolean, msg: MonthAndDay): MonthAndDay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MonthAndDay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonthAndDay;
  static deserializeBinaryFromReader(message: MonthAndDay, reader: jspb.BinaryReader): MonthAndDay;
}

export namespace MonthAndDay {
  export type AsObject = {
    month: number,
    week: number,
    dayOfMonth: number,
    dayOfWeek: number,
    dayOfYear: number,
  }
}

export class DayOfWeek extends jspb.Message {
  getDayOfWeek(): number;
  setDayOfWeek(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DayOfWeek.AsObject;
  static toObject(includeInstance: boolean, msg: DayOfWeek): DayOfWeek.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DayOfWeek, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DayOfWeek;
  static deserializeBinaryFromReader(message: DayOfWeek, reader: jspb.BinaryReader): DayOfWeek;
}

export namespace DayOfWeek {
  export type AsObject = {
    dayOfWeek: number,
  }
}

export class TimeOfDay extends jspb.Message {
  getHour(): number;
  setHour(value: number): void;

  getMinute(): number;
  setMinute(value: number): void;

  getSecond(): number;
  setSecond(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeOfDay.AsObject;
  static toObject(includeInstance: boolean, msg: TimeOfDay): TimeOfDay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeOfDay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeOfDay;
  static deserializeBinaryFromReader(message: TimeOfDay, reader: jspb.BinaryReader): TimeOfDay;
}

export namespace TimeOfDay {
  export type AsObject = {
    hour: number,
    minute: number,
    second: number,
  }
}

export class FileFormatParams extends jspb.Message {
  getSkipFirstNoLines(): number;
  setSkipFirstNoLines(value: number): void;

  getSkipLinesMatchRegex(): string;
  setSkipLinesMatchRegex(value: string): void;

  getTrimSpaces(): boolean;
  setTrimSpaces(value: boolean): void;

  getCustomDelimiter(): string;
  setCustomDelimiter(value: string): void;

  getSkipFirstLine(): boolean;
  setSkipFirstLine(value: boolean): void;

  getJsonDotPath(): string;
  setJsonDotPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileFormatParams.AsObject;
  static toObject(includeInstance: boolean, msg: FileFormatParams): FileFormatParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileFormatParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileFormatParams;
  static deserializeBinaryFromReader(message: FileFormatParams, reader: jspb.BinaryReader): FileFormatParams;
}

export namespace FileFormatParams {
  export type AsObject = {
    skipFirstNoLines: number,
    skipLinesMatchRegex: string,
    trimSpaces: boolean,
    customDelimiter: string,
    skipFirstLine: boolean,
    jsonDotPath: string,
  }
}

export class ReshapeProcess extends jspb.Message {
  clearActionsList(): void;
  getActionsList(): Array<ReshapeAction>;
  setActionsList(value: Array<ReshapeAction>): void;
  addActions(value?: ReshapeAction, index?: number): ReshapeAction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReshapeProcess.AsObject;
  static toObject(includeInstance: boolean, msg: ReshapeProcess): ReshapeProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReshapeProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReshapeProcess;
  static deserializeBinaryFromReader(message: ReshapeProcess, reader: jspb.BinaryReader): ReshapeProcess;
}

export namespace ReshapeProcess {
  export type AsObject = {
    actionsList: Array<ReshapeAction.AsObject>,
  }
}

export class ReshapeAction extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  getMatchingType(): api_commons_lms_pb.RecordTypeMap[keyof api_commons_lms_pb.RecordTypeMap];
  setMatchingType(value: api_commons_lms_pb.RecordTypeMap[keyof api_commons_lms_pb.RecordTypeMap]): void;

  hasPredicate(): boolean;
  clearPredicate(): void;
  getPredicate(): FilterCheck | undefined;
  setPredicate(value?: FilterCheck): void;

  hasRename(): boolean;
  clearRename(): void;
  getRename(): ReshapeAction.Rename | undefined;
  setRename(value?: ReshapeAction.Rename): void;

  hasAddValue(): boolean;
  clearAddValue(): void;
  getAddValue(): ReshapeAction.AddValue | undefined;
  setAddValue(value?: ReshapeAction.AddValue): void;

  hasAddField(): boolean;
  clearAddField(): void;
  getAddField(): ReshapeAction.AddField | undefined;
  setAddField(value?: ReshapeAction.AddField): void;

  hasAddDate(): boolean;
  clearAddDate(): void;
  getAddDate(): ReshapeAction.AddDate | undefined;
  setAddDate(value?: ReshapeAction.AddDate): void;

  hasSubtractValue(): boolean;
  clearSubtractValue(): void;
  getSubtractValue(): ReshapeAction.SubtractValue | undefined;
  setSubtractValue(value?: ReshapeAction.SubtractValue): void;

  hasSubtractField(): boolean;
  clearSubtractField(): void;
  getSubtractField(): ReshapeAction.SubtractField | undefined;
  setSubtractField(value?: ReshapeAction.SubtractField): void;

  hasConvert(): boolean;
  clearConvert(): void;
  getConvert(): ReshapeAction.Convert | undefined;
  setConvert(value?: ReshapeAction.Convert): void;

  hasRemoveField(): boolean;
  clearRemoveField(): void;
  getRemoveField(): ReshapeAction.RemoveField | undefined;
  setRemoveField(value?: ReshapeAction.RemoveField): void;

  hasAddNewField(): boolean;
  clearAddNewField(): void;
  getAddNewField(): ReshapeAction.AddNewField | undefined;
  setAddNewField(value?: ReshapeAction.AddNewField): void;

  hasChangeCurrencyType(): boolean;
  clearChangeCurrencyType(): void;
  getChangeCurrencyType(): ReshapeAction.ChangeCurrencyType | undefined;
  setChangeCurrencyType(value?: ReshapeAction.ChangeCurrencyType): void;

  hasDivide(): boolean;
  clearDivide(): void;
  getDivide(): ReshapeAction.Divide | undefined;
  setDivide(value?: ReshapeAction.Divide): void;

  hasMultiply(): boolean;
  clearMultiply(): void;
  getMultiply(): ReshapeAction.Multiply | undefined;
  setMultiply(value?: ReshapeAction.Multiply): void;

  hasModulo(): boolean;
  clearModulo(): void;
  getModulo(): ReshapeAction.Modulo | undefined;
  setModulo(value?: ReshapeAction.Modulo): void;

  hasMerge(): boolean;
  clearMerge(): void;
  getMerge(): ReshapeAction.Merge | undefined;
  setMerge(value?: ReshapeAction.Merge): void;

  hasSetFieldValue(): boolean;
  clearSetFieldValue(): void;
  getSetFieldValue(): ReshapeAction.SetFieldValue | undefined;
  setSetFieldValue(value?: ReshapeAction.SetFieldValue): void;

  hasAddNewFieldFromField(): boolean;
  clearAddNewFieldFromField(): void;
  getAddNewFieldFromField(): ReshapeAction.AddNewFieldFromField | undefined;
  setAddNewFieldFromField(value?: ReshapeAction.AddNewFieldFromField): void;

  hasSetFieldFromField(): boolean;
  clearSetFieldFromField(): void;
  getSetFieldFromField(): ReshapeAction.SetFieldFromField | undefined;
  setSetFieldFromField(value?: ReshapeAction.SetFieldFromField): void;

  hasPad(): boolean;
  clearPad(): void;
  getPad(): ReshapeAction.Pad | undefined;
  setPad(value?: ReshapeAction.Pad): void;

  hasTrim(): boolean;
  clearTrim(): void;
  getTrim(): ReshapeAction.Trim | undefined;
  setTrim(value?: ReshapeAction.Trim): void;

  hasExtract(): boolean;
  clearExtract(): void;
  getExtract(): ReshapeAction.Extract | undefined;
  setExtract(value?: ReshapeAction.Extract): void;

  getActionCase(): ReshapeAction.ActionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReshapeAction.AsObject;
  static toObject(includeInstance: boolean, msg: ReshapeAction): ReshapeAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReshapeAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReshapeAction;
  static deserializeBinaryFromReader(message: ReshapeAction, reader: jspb.BinaryReader): ReshapeAction;
}

export namespace ReshapeAction {
  export type AsObject = {
    field: string,
    matchingType: api_commons_lms_pb.RecordTypeMap[keyof api_commons_lms_pb.RecordTypeMap],
    predicate?: FilterCheck.AsObject,
    rename?: ReshapeAction.Rename.AsObject,
    addValue?: ReshapeAction.AddValue.AsObject,
    addField?: ReshapeAction.AddField.AsObject,
    addDate?: ReshapeAction.AddDate.AsObject,
    subtractValue?: ReshapeAction.SubtractValue.AsObject,
    subtractField?: ReshapeAction.SubtractField.AsObject,
    convert?: ReshapeAction.Convert.AsObject,
    removeField?: ReshapeAction.RemoveField.AsObject,
    addNewField?: ReshapeAction.AddNewField.AsObject,
    changeCurrencyType?: ReshapeAction.ChangeCurrencyType.AsObject,
    divide?: ReshapeAction.Divide.AsObject,
    multiply?: ReshapeAction.Multiply.AsObject,
    modulo?: ReshapeAction.Modulo.AsObject,
    merge?: ReshapeAction.Merge.AsObject,
    setFieldValue?: ReshapeAction.SetFieldValue.AsObject,
    addNewFieldFromField?: ReshapeAction.AddNewFieldFromField.AsObject,
    setFieldFromField?: ReshapeAction.SetFieldFromField.AsObject,
    pad?: ReshapeAction.Pad.AsObject,
    trim?: ReshapeAction.Trim.AsObject,
    extract?: ReshapeAction.Extract.AsObject,
  }

  export class Rename extends jspb.Message {
    getNewName(): string;
    setNewName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Rename.AsObject;
    static toObject(includeInstance: boolean, msg: Rename): Rename.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Rename, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Rename;
    static deserializeBinaryFromReader(message: Rename, reader: jspb.BinaryReader): Rename;
  }

  export namespace Rename {
    export type AsObject = {
      newName: string,
    }
  }

  export class AddValue extends jspb.Message {
    getValue(): number;
    setValue(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddValue.AsObject;
    static toObject(includeInstance: boolean, msg: AddValue): AddValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddValue;
    static deserializeBinaryFromReader(message: AddValue, reader: jspb.BinaryReader): AddValue;
  }

  export namespace AddValue {
    export type AsObject = {
      value: number,
    }
  }

  export class AddDate extends jspb.Message {
    hasDatetime(): boolean;
    clearDatetime(): void;
    getDatetime(): DateTimeModifier | undefined;
    setDatetime(value?: DateTimeModifier): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddDate.AsObject;
    static toObject(includeInstance: boolean, msg: AddDate): AddDate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddDate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddDate;
    static deserializeBinaryFromReader(message: AddDate, reader: jspb.BinaryReader): AddDate;
  }

  export namespace AddDate {
    export type AsObject = {
      datetime?: DateTimeModifier.AsObject,
    }
  }

  export class AddField extends jspb.Message {
    hasOtherField(): boolean;
    clearOtherField(): void;
    getOtherField(): FieldIndex | undefined;
    setOtherField(value?: FieldIndex): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddField.AsObject;
    static toObject(includeInstance: boolean, msg: AddField): AddField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddField;
    static deserializeBinaryFromReader(message: AddField, reader: jspb.BinaryReader): AddField;
  }

  export namespace AddField {
    export type AsObject = {
      otherField?: FieldIndex.AsObject,
    }
  }

  export class SubtractValue extends jspb.Message {
    getValue(): number;
    setValue(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubtractValue.AsObject;
    static toObject(includeInstance: boolean, msg: SubtractValue): SubtractValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubtractValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubtractValue;
    static deserializeBinaryFromReader(message: SubtractValue, reader: jspb.BinaryReader): SubtractValue;
  }

  export namespace SubtractValue {
    export type AsObject = {
      value: number,
    }
  }

  export class SubtractField extends jspb.Message {
    hasOtherField(): boolean;
    clearOtherField(): void;
    getOtherField(): FieldIndex | undefined;
    setOtherField(value?: FieldIndex): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubtractField.AsObject;
    static toObject(includeInstance: boolean, msg: SubtractField): SubtractField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubtractField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubtractField;
    static deserializeBinaryFromReader(message: SubtractField, reader: jspb.BinaryReader): SubtractField;
  }

  export namespace SubtractField {
    export type AsObject = {
      otherField?: FieldIndex.AsObject,
    }
  }

  export class Convert extends jspb.Message {
    getNewtype(): api_commons_lms_pb.RecordTypeMap[keyof api_commons_lms_pb.RecordTypeMap];
    setNewtype(value: api_commons_lms_pb.RecordTypeMap[keyof api_commons_lms_pb.RecordTypeMap]): void;

    hasNewField(): boolean;
    clearNewField(): void;
    getNewField(): Field | undefined;
    setNewField(value?: Field): void;

    hasDefaultValue(): boolean;
    clearDefaultValue(): void;
    getDefaultValue(): RecordFieldProto | undefined;
    setDefaultValue(value?: RecordFieldProto): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Convert.AsObject;
    static toObject(includeInstance: boolean, msg: Convert): Convert.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Convert, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Convert;
    static deserializeBinaryFromReader(message: Convert, reader: jspb.BinaryReader): Convert;
  }

  export namespace Convert {
    export type AsObject = {
      newtype: api_commons_lms_pb.RecordTypeMap[keyof api_commons_lms_pb.RecordTypeMap],
      newField?: Field.AsObject,
      defaultValue?: RecordFieldProto.AsObject,
    }
  }

  export class Divide extends jspb.Message {
    getDefaultValue(): number;
    setDefaultValue(value: number): void;

    getDivisor(): number;
    setDivisor(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Divide.AsObject;
    static toObject(includeInstance: boolean, msg: Divide): Divide.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Divide, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Divide;
    static deserializeBinaryFromReader(message: Divide, reader: jspb.BinaryReader): Divide;
  }

  export namespace Divide {
    export type AsObject = {
      defaultValue: number,
      divisor: number,
    }
  }

  export class Multiply extends jspb.Message {
    getDefaultValue(): number;
    setDefaultValue(value: number): void;

    getMultiplier(): number;
    setMultiplier(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Multiply.AsObject;
    static toObject(includeInstance: boolean, msg: Multiply): Multiply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Multiply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Multiply;
    static deserializeBinaryFromReader(message: Multiply, reader: jspb.BinaryReader): Multiply;
  }

  export namespace Multiply {
    export type AsObject = {
      defaultValue: number,
      multiplier: number,
    }
  }

  export class Modulo extends jspb.Message {
    getDefaultValue(): number;
    setDefaultValue(value: number): void;

    getModulus(): number;
    setModulus(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Modulo.AsObject;
    static toObject(includeInstance: boolean, msg: Modulo): Modulo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Modulo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Modulo;
    static deserializeBinaryFromReader(message: Modulo, reader: jspb.BinaryReader): Modulo;
  }

  export namespace Modulo {
    export type AsObject = {
      defaultValue: number,
      modulus: number,
    }
  }

  export class RemoveField extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveField.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveField): RemoveField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveField;
    static deserializeBinaryFromReader(message: RemoveField, reader: jspb.BinaryReader): RemoveField;
  }

  export namespace RemoveField {
    export type AsObject = {
    }
  }

  export class AddNewField extends jspb.Message {
    hasStartingValue(): boolean;
    clearStartingValue(): void;
    getStartingValue(): RecordFieldProto | undefined;
    setStartingValue(value?: RecordFieldProto): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddNewField.AsObject;
    static toObject(includeInstance: boolean, msg: AddNewField): AddNewField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddNewField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddNewField;
    static deserializeBinaryFromReader(message: AddNewField, reader: jspb.BinaryReader): AddNewField;
  }

  export namespace AddNewField {
    export type AsObject = {
      startingValue?: RecordFieldProto.AsObject,
    }
  }

  export class AddNewFieldFromField extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    hasOtherField(): boolean;
    clearOtherField(): void;
    getOtherField(): FieldIndex | undefined;
    setOtherField(value?: FieldIndex): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddNewFieldFromField.AsObject;
    static toObject(includeInstance: boolean, msg: AddNewFieldFromField): AddNewFieldFromField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddNewFieldFromField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddNewFieldFromField;
    static deserializeBinaryFromReader(message: AddNewFieldFromField, reader: jspb.BinaryReader): AddNewFieldFromField;
  }

  export namespace AddNewFieldFromField {
    export type AsObject = {
      name: string,
      otherField?: FieldIndex.AsObject,
    }
  }

  export class ChangeCurrencyType extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangeCurrencyType.AsObject;
    static toObject(includeInstance: boolean, msg: ChangeCurrencyType): ChangeCurrencyType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangeCurrencyType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangeCurrencyType;
    static deserializeBinaryFromReader(message: ChangeCurrencyType, reader: jspb.BinaryReader): ChangeCurrencyType;
  }

  export namespace ChangeCurrencyType {
    export type AsObject = {
    }
  }

  export class SetFieldValue extends jspb.Message {
    hasValue(): boolean;
    clearValue(): void;
    getValue(): RecordFieldProto | undefined;
    setValue(value?: RecordFieldProto): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetFieldValue.AsObject;
    static toObject(includeInstance: boolean, msg: SetFieldValue): SetFieldValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetFieldValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetFieldValue;
    static deserializeBinaryFromReader(message: SetFieldValue, reader: jspb.BinaryReader): SetFieldValue;
  }

  export namespace SetFieldValue {
    export type AsObject = {
      value?: RecordFieldProto.AsObject,
    }
  }

  export class SetFieldFromField extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    hasOtherField(): boolean;
    clearOtherField(): void;
    getOtherField(): FieldIndex | undefined;
    setOtherField(value?: FieldIndex): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetFieldFromField.AsObject;
    static toObject(includeInstance: boolean, msg: SetFieldFromField): SetFieldFromField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetFieldFromField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetFieldFromField;
    static deserializeBinaryFromReader(message: SetFieldFromField, reader: jspb.BinaryReader): SetFieldFromField;
  }

  export namespace SetFieldFromField {
    export type AsObject = {
      name: string,
      otherField?: FieldIndex.AsObject,
    }
  }

  export class Merge extends jspb.Message {
    clearDataList(): void;
    getDataList(): Array<ReshapeAction.Merge.FieldOrVal>;
    setDataList(value: Array<ReshapeAction.Merge.FieldOrVal>): void;
    addData(value?: ReshapeAction.Merge.FieldOrVal, index?: number): ReshapeAction.Merge.FieldOrVal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Merge.AsObject;
    static toObject(includeInstance: boolean, msg: Merge): Merge.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Merge, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Merge;
    static deserializeBinaryFromReader(message: Merge, reader: jspb.BinaryReader): Merge;
  }

  export namespace Merge {
    export type AsObject = {
      dataList: Array<ReshapeAction.Merge.FieldOrVal.AsObject>,
    }

    export class FieldOrVal extends jspb.Message {
      hasField(): boolean;
      clearField(): void;
      getField(): FieldIndex | undefined;
      setField(value?: FieldIndex): void;

      hasValue(): boolean;
      clearValue(): void;
      getValue(): string;
      setValue(value: string): void;

      getValCase(): FieldOrVal.ValCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): FieldOrVal.AsObject;
      static toObject(includeInstance: boolean, msg: FieldOrVal): FieldOrVal.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: FieldOrVal, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): FieldOrVal;
      static deserializeBinaryFromReader(message: FieldOrVal, reader: jspb.BinaryReader): FieldOrVal;
    }

    export namespace FieldOrVal {
      export type AsObject = {
        field?: FieldIndex.AsObject,
        value: string,
      }

      export enum ValCase {
        VAL_NOT_SET = 0,
        FIELD = 38,
        VALUE = 43,
      }
    }
  }

  export class Pad extends jspb.Message {
    getChar(): string;
    setChar(value: string): void;

    getAmount(): number;
    setAmount(value: number): void;

    getPrefix(): boolean;
    setPrefix(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Pad.AsObject;
    static toObject(includeInstance: boolean, msg: Pad): Pad.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Pad, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Pad;
    static deserializeBinaryFromReader(message: Pad, reader: jspb.BinaryReader): Pad;
  }

  export namespace Pad {
    export type AsObject = {
      pb_char: string,
      amount: number,
      prefix: boolean,
    }
  }

  export class Trim extends jspb.Message {
    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): number;
    setAmount(value: number): void;

    hasData(): boolean;
    clearData(): void;
    getData(): string;
    setData(value: string): void;

    hasMarker(): boolean;
    clearMarker(): void;
    getMarker(): string;
    setMarker(value: string): void;

    getSuffix(): boolean;
    setSuffix(value: boolean): void;

    getOptCase(): Trim.OptCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Trim.AsObject;
    static toObject(includeInstance: boolean, msg: Trim): Trim.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Trim, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Trim;
    static deserializeBinaryFromReader(message: Trim, reader: jspb.BinaryReader): Trim;
  }

  export namespace Trim {
    export type AsObject = {
      amount: number,
      data: string,
      marker: string,
      suffix: boolean,
    }

    export enum OptCase {
      OPT_NOT_SET = 0,
      AMOUNT = 1,
      DATA = 2,
      MARKER = 3,
    }
  }

  export class Extract extends jspb.Message {
    clearPartsList(): void;
    getPartsList(): Array<ReshapeAction.Extract.Slice>;
    setPartsList(value: Array<ReshapeAction.Extract.Slice>): void;
    addParts(value?: ReshapeAction.Extract.Slice, index?: number): ReshapeAction.Extract.Slice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Extract.AsObject;
    static toObject(includeInstance: boolean, msg: Extract): Extract.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Extract, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Extract;
    static deserializeBinaryFromReader(message: Extract, reader: jspb.BinaryReader): Extract;
  }

  export namespace Extract {
    export type AsObject = {
      partsList: Array<ReshapeAction.Extract.Slice.AsObject>,
    }

    export class Index extends jspb.Message {
      hasPosition(): boolean;
      clearPosition(): void;
      getPosition(): number;
      setPosition(value: number): void;

      hasMatch(): boolean;
      clearMatch(): void;
      getMatch(): string;
      setMatch(value: string): void;

      getValCase(): Index.ValCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Index.AsObject;
      static toObject(includeInstance: boolean, msg: Index): Index.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Index, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Index;
      static deserializeBinaryFromReader(message: Index, reader: jspb.BinaryReader): Index;
    }

    export namespace Index {
      export type AsObject = {
        position: number,
        match: string,
      }

      export enum ValCase {
        VAL_NOT_SET = 0,
        POSITION = 12,
        MATCH = 43,
      }
    }

    export class Slice extends jspb.Message {
      getStartIsExclusive(): boolean;
      setStartIsExclusive(value: boolean): void;

      getEndIsInclusive(): boolean;
      setEndIsInclusive(value: boolean): void;

      clearStartIndexList(): void;
      getStartIndexList(): Array<ReshapeAction.Extract.Index>;
      setStartIndexList(value: Array<ReshapeAction.Extract.Index>): void;
      addStartIndex(value?: ReshapeAction.Extract.Index, index?: number): ReshapeAction.Extract.Index;

      clearEndIndexList(): void;
      getEndIndexList(): Array<ReshapeAction.Extract.Index>;
      setEndIndexList(value: Array<ReshapeAction.Extract.Index>): void;
      addEndIndex(value?: ReshapeAction.Extract.Index, index?: number): ReshapeAction.Extract.Index;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Slice.AsObject;
      static toObject(includeInstance: boolean, msg: Slice): Slice.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Slice, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Slice;
      static deserializeBinaryFromReader(message: Slice, reader: jspb.BinaryReader): Slice;
    }

    export namespace Slice {
      export type AsObject = {
        startIsExclusive: boolean,
        endIsInclusive: boolean,
        startIndexList: Array<ReshapeAction.Extract.Index.AsObject>,
        endIndexList: Array<ReshapeAction.Extract.Index.AsObject>,
      }
    }
  }

  export enum ActionCase {
    ACTION_NOT_SET = 0,
    RENAME = 22,
    ADD_VALUE = 23,
    ADD_FIELD = 24,
    ADD_DATE = 47,
    SUBTRACT_VALUE = 25,
    SUBTRACT_FIELD = 26,
    CONVERT = 28,
    REMOVE_FIELD = 29,
    ADD_NEW_FIELD = 30,
    CHANGE_CURRENCY_TYPE = 31,
    DIVIDE = 32,
    MULTIPLY = 33,
    MODULO = 34,
    MERGE = 40,
    SET_FIELD_VALUE = 41,
    ADD_NEW_FIELD_FROM_FIELD = 45,
    SET_FIELD_FROM_FIELD = 46,
    PAD = 52,
    TRIM = 53,
    EXTRACT = 54,
  }
}

export class ContactManagerSink extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getContactListName(): string;
  setContactListName(value: string): void;

  getContactListDescription(): string;
  setContactListDescription(value: string): void;

  clearFieldsList(): void;
  getFieldsList(): Array<string>;
  setFieldsList(value: Array<string>): void;
  addFields(value: string, index?: number): string;

  getTtl(): number;
  setTtl(value: number): void;

  hasLifetime(): boolean;
  clearLifetime(): void;
  getLifetime(): google_protobuf_duration_pb.Duration | undefined;
  setLifetime(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactManagerSink.AsObject;
  static toObject(includeInstance: boolean, msg: ContactManagerSink): ContactManagerSink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactManagerSink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactManagerSink;
  static deserializeBinaryFromReader(message: ContactManagerSink, reader: jspb.BinaryReader): ContactManagerSink;
}

export namespace ContactManagerSink {
  export type AsObject = {
    projectId: string,
    contactListName: string,
    contactListDescription: string,
    fieldsList: Array<string>,
    ttl: number,
    lifetime?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class SumProcess extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  getNewName(): string;
  setNewName(value: string): void;

  hasGroupBy(): boolean;
  clearGroupBy(): void;
  getGroupBy(): GroupBy | undefined;
  setGroupBy(value?: GroupBy): void;

  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): FilterOperation | undefined;
  setFilter(value?: FilterOperation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SumProcess.AsObject;
  static toObject(includeInstance: boolean, msg: SumProcess): SumProcess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SumProcess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SumProcess;
  static deserializeBinaryFromReader(message: SumProcess, reader: jspb.BinaryReader): SumProcess;
}

export namespace SumProcess {
  export type AsObject = {
    field: string,
    newName: string,
    groupBy?: GroupBy.AsObject,
    filter?: FilterOperation.AsObject,
  }
}

export class GroupBy extends jspb.Message {
  clearFieldsList(): void;
  getFieldsList(): Array<string>;
  setFieldsList(value: Array<string>): void;
  addFields(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupBy.AsObject;
  static toObject(includeInstance: boolean, msg: GroupBy): GroupBy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupBy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupBy;
  static deserializeBinaryFromReader(message: GroupBy, reader: jspb.BinaryReader): GroupBy;
}

export namespace GroupBy {
  export type AsObject = {
    fieldsList: Array<string>,
  }
}

export class ListMetrics extends jspb.Message {
  getInputRecordCount(): number;
  setInputRecordCount(value: number): void;

  getOutputRecordCount(): number;
  setOutputRecordCount(value: number): void;

  clearFieldNamesList(): void;
  getFieldNamesList(): Array<string>;
  setFieldNamesList(value: Array<string>): void;
  addFieldNames(value: string, index?: number): string;

  clearFieldTypesList(): void;
  getFieldTypesList(): Array<api_commons_lms_pb.RecordTypeMap[keyof api_commons_lms_pb.RecordTypeMap]>;
  setFieldTypesList(value: Array<api_commons_lms_pb.RecordTypeMap[keyof api_commons_lms_pb.RecordTypeMap]>): void;
  addFieldTypes(value: api_commons_lms_pb.RecordTypeMap[keyof api_commons_lms_pb.RecordTypeMap], index?: number): api_commons_lms_pb.RecordTypeMap[keyof api_commons_lms_pb.RecordTypeMap];

  clearFtypesList(): void;
  getFtypesList(): Array<api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap]>;
  setFtypesList(value: Array<api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap]>): void;
  addFtypes(value: api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap], index?: number): api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap];

  clearFieldCountsList(): void;
  getFieldCountsList(): Array<number>;
  setFieldCountsList(value: Array<number>): void;
  addFieldCounts(value: number, index?: number): number;

  getRunType(): api_commons_lms_pb.RunTypeMap[keyof api_commons_lms_pb.RunTypeMap];
  setRunType(value: api_commons_lms_pb.RunTypeMap[keyof api_commons_lms_pb.RunTypeMap]): void;

  getSuccessMessage(): string;
  setSuccessMessage(value: string): void;

  getMaxRecordWidth(): number;
  setMaxRecordWidth(value: number): void;

  getMinRecordWidth(): number;
  setMinRecordWidth(value: number): void;

  getMaxRecordIndex(): number;
  setMaxRecordIndex(value: number): void;

  getMinRecordIndex(): number;
  setMinRecordIndex(value: number): void;

  clearFilesList(): void;
  getFilesList(): Array<string>;
  setFilesList(value: Array<string>): void;
  addFiles(value: string, index?: number): string;

  clearGroupsList(): void;
  getGroupsList(): Array<string>;
  setGroupsList(value: Array<string>): void;
  addGroups(value: string, index?: number): string;

  clearMissingFieldsList(): void;
  getMissingFieldsList(): Array<string>;
  setMissingFieldsList(value: Array<string>): void;
  addMissingFields(value: string, index?: number): string;

  getSecondsToStart(): number;
  setSecondsToStart(value: number): void;

  getSecondsToProcess(): number;
  setSecondsToProcess(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: ListMetrics): ListMetrics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMetrics;
  static deserializeBinaryFromReader(message: ListMetrics, reader: jspb.BinaryReader): ListMetrics;
}

export namespace ListMetrics {
  export type AsObject = {
    inputRecordCount: number,
    outputRecordCount: number,
    fieldNamesList: Array<string>,
    fieldTypesList: Array<api_commons_lms_pb.RecordTypeMap[keyof api_commons_lms_pb.RecordTypeMap]>,
    ftypesList: Array<api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap]>,
    fieldCountsList: Array<number>,
    runType: api_commons_lms_pb.RunTypeMap[keyof api_commons_lms_pb.RunTypeMap],
    successMessage: string,
    maxRecordWidth: number,
    minRecordWidth: number,
    maxRecordIndex: number,
    minRecordIndex: number,
    filesList: Array<string>,
    groupsList: Array<string>,
    missingFieldsList: Array<string>,
    secondsToStart: number,
    secondsToProcess: number,
  }
}

export class ParseReq extends jspb.Message {
  getElementId(): string;
  setElementId(value: string): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  getExpression(): string;
  setExpression(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParseReq.AsObject;
  static toObject(includeInstance: boolean, msg: ParseReq): ParseReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParseReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParseReq;
  static deserializeBinaryFromReader(message: ParseReq, reader: jspb.BinaryReader): ParseReq;
}

export namespace ParseReq {
  export type AsObject = {
    elementId: string,
    sessionId: string,
    expression: string,
  }
}

export class ParseRes extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  getExpression(): string;
  setExpression(value: string): void;

  clearNextTokensList(): void;
  getNextTokensList(): Array<string>;
  setNextTokensList(value: Array<string>): void;
  addNextTokens(value: string, index?: number): string;

  getError(): string;
  setError(value: string): void;

  getComplete(): boolean;
  setComplete(value: boolean): void;

  hasProcess(): boolean;
  clearProcess(): void;
  getProcess(): Process | undefined;
  setProcess(value?: Process): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParseRes.AsObject;
  static toObject(includeInstance: boolean, msg: ParseRes): ParseRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParseRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParseRes;
  static deserializeBinaryFromReader(message: ParseRes, reader: jspb.BinaryReader): ParseRes;
}

export namespace ParseRes {
  export type AsObject = {
    sessionId: string,
    expression: string,
    nextTokensList: Array<string>,
    error: string,
    complete: boolean,
    process?: Process.AsObject,
  }
}

export class Event extends jspb.Message {
  getEventId(): number;
  setEventId(value: number): void;

  hasParentId(): boolean;
  clearParentId(): void;
  getParentId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setParentId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasInputIds(): boolean;
  clearInputIds(): void;
  getInputIds(): api_commons_types_pb.StringArraySql | undefined;
  setInputIds(value?: api_commons_types_pb.StringArraySql): void;

  getElementId(): string;
  setElementId(value: string): void;

  hasProcess(): boolean;
  clearProcess(): void;
  getProcess(): Process | undefined;
  setProcess(value?: Process): void;

  hasUploadTs(): boolean;
  clearUploadTs(): void;
  getUploadTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUploadTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStartedTs(): boolean;
  clearStartedTs(): void;
  getStartedTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartedTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFinishedTs(): boolean;
  clearFinishedTs(): void;
  getFinishedTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishedTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasBackoffTill(): boolean;
  clearBackoffTill(): void;
  getBackoffTill(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBackoffTill(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAttempts(): number;
  setAttempts(value: number): void;

  hasLatestHistory(): boolean;
  clearLatestHistory(): void;
  getLatestHistory(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setLatestHistory(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    eventId: number,
    parentId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    inputIds?: api_commons_types_pb.StringArraySql.AsObject,
    elementId: string,
    process?: Process.AsObject,
    uploadTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startedTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishedTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    backoffTill?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    attempts: number,
    latestHistory?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class Events extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<Event>;
  setEventsList(value: Array<Event>): void;
  addEvents(value?: Event, index?: number): Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Events.AsObject;
  static toObject(includeInstance: boolean, msg: Events): Events.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Events, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Events;
  static deserializeBinaryFromReader(message: Events, reader: jspb.BinaryReader): Events;
}

export namespace Events {
  export type AsObject = {
    eventsList: Array<Event.AsObject>,
  }
}

export class ViewQueueReq extends jspb.Message {
  hasNewerThan(): boolean;
  clearNewerThan(): void;
  getNewerThan(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setNewerThan(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasNoNewerThan(): boolean;
  clearNoNewerThan(): void;
  getNoNewerThan(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setNoNewerThan(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAfterEventId(): number;
  setAfterEventId(value: number): void;

  getNumberOfRecords(): number;
  setNumberOfRecords(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViewQueueReq.AsObject;
  static toObject(includeInstance: boolean, msg: ViewQueueReq): ViewQueueReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ViewQueueReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViewQueueReq;
  static deserializeBinaryFromReader(message: ViewQueueReq, reader: jspb.BinaryReader): ViewQueueReq;
}

export namespace ViewQueueReq {
  export type AsObject = {
    newerThan?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    noNewerThan?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    afterEventId: number,
    numberOfRecords: number,
  }
}

export class CollectionMetadata extends jspb.Message {
  getCollectionId(): string;
  setCollectionId(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  clearFieldsList(): void;
  getFieldsList(): Array<CollectionFieldMetadata>;
  setFieldsList(value: Array<CollectionFieldMetadata>): void;
  addFields(value?: CollectionFieldMetadata, index?: number): CollectionFieldMetadata;

  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  getCreatedBy(): string;
  setCreatedBy(value: string): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastQueried(): boolean;
  clearLastQueried(): void;
  getLastQueried(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastQueried(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getQueryCount(): number;
  setQueryCount(value: number): void;

  getEntryCount(): number;
  setEntryCount(value: number): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSearchCount(): number;
  setSearchCount(value: number): void;

  hasLastSearched(): boolean;
  clearLastSearched(): void;
  getLastSearched(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastSearched(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearPrimaryKeyList(): void;
  getPrimaryKeyList(): Array<string>;
  setPrimaryKeyList(value: Array<string>): void;
  addPrimaryKey(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionMetadata): CollectionMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionMetadata;
  static deserializeBinaryFromReader(message: CollectionMetadata, reader: jspb.BinaryReader): CollectionMetadata;
}

export namespace CollectionMetadata {
  export type AsObject = {
    collectionId: string,
    collectionName: string,
    fieldsList: Array<CollectionFieldMetadata.AsObject>,
    deleted: boolean,
    createdBy: string,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastQueried?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    queryCount: number,
    entryCount: number,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    searchCount: number,
    lastSearched?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    primaryKeyList: Array<string>,
  }
}

export class CollectionEntry extends jspb.Message {
  getCollectionId(): string;
  setCollectionId(value: string): void;

  getEntryId(): string;
  setEntryId(value: string): void;

  clearFieldsList(): void;
  getFieldsList(): Array<CollectionField>;
  setFieldsList(value: Array<CollectionField>): void;
  addFields(value?: CollectionField, index?: number): CollectionField;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionEntry.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionEntry): CollectionEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionEntry;
  static deserializeBinaryFromReader(message: CollectionEntry, reader: jspb.BinaryReader): CollectionEntry;
}

export namespace CollectionEntry {
  export type AsObject = {
    collectionId: string,
    entryId: string,
    fieldsList: Array<CollectionField.AsObject>,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class MatchReq extends jspb.Message {
  getCollectionId(): string;
  setCollectionId(value: string): void;

  clearFieldsList(): void;
  getFieldsList(): Array<CollectionField>;
  setFieldsList(value: Array<CollectionField>): void;
  addFields(value?: CollectionField, index?: number): CollectionField;

  getBatchSize(): number;
  setBatchSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchReq.AsObject;
  static toObject(includeInstance: boolean, msg: MatchReq): MatchReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchReq;
  static deserializeBinaryFromReader(message: MatchReq, reader: jspb.BinaryReader): MatchReq;
}

export namespace MatchReq {
  export type AsObject = {
    collectionId: string,
    fieldsList: Array<CollectionField.AsObject>,
    batchSize: number,
  }
}

export class MatchRes extends jspb.Message {
  clearEntriesList(): void;
  getEntriesList(): Array<CollectionEntry>;
  setEntriesList(value: Array<CollectionEntry>): void;
  addEntries(value?: CollectionEntry, index?: number): CollectionEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchRes.AsObject;
  static toObject(includeInstance: boolean, msg: MatchRes): MatchRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchRes;
  static deserializeBinaryFromReader(message: MatchRes, reader: jspb.BinaryReader): MatchRes;
}

export namespace MatchRes {
  export type AsObject = {
    entriesList: Array<CollectionEntry.AsObject>,
  }
}

export class CollectionFieldMetadata extends jspb.Message {
  getFieldName(): string;
  setFieldName(value: string): void;

  getFieldType(): api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap];
  setFieldType(value: api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap]): void;

  getFieldFormat(): string;
  setFieldFormat(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionFieldMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionFieldMetadata): CollectionFieldMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionFieldMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionFieldMetadata;
  static deserializeBinaryFromReader(message: CollectionFieldMetadata, reader: jspb.BinaryReader): CollectionFieldMetadata;
}

export namespace CollectionFieldMetadata {
  export type AsObject = {
    fieldName: string,
    fieldType: api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap],
    fieldFormat: string,
  }
}

export class CollectionField extends jspb.Message {
  getFieldName(): string;
  setFieldName(value: string): void;

  getFieldValue(): string;
  setFieldValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionField.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionField): CollectionField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionField;
  static deserializeBinaryFromReader(message: CollectionField, reader: jspb.BinaryReader): CollectionField;
}

export namespace CollectionField {
  export type AsObject = {
    fieldName: string,
    fieldValue: string,
  }
}

export class GetCollectionReq extends jspb.Message {
  getCollectionId(): string;
  setCollectionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCollectionReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCollectionReq): GetCollectionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCollectionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCollectionReq;
  static deserializeBinaryFromReader(message: GetCollectionReq, reader: jspb.BinaryReader): GetCollectionReq;
}

export namespace GetCollectionReq {
  export type AsObject = {
    collectionId: string,
  }
}

export class StreamCollectionReq extends jspb.Message {
  getCollectionId(): string;
  setCollectionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamCollectionReq.AsObject;
  static toObject(includeInstance: boolean, msg: StreamCollectionReq): StreamCollectionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamCollectionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamCollectionReq;
  static deserializeBinaryFromReader(message: StreamCollectionReq, reader: jspb.BinaryReader): StreamCollectionReq;
}

export namespace StreamCollectionReq {
  export type AsObject = {
    collectionId: string,
  }
}

export class DeleteCollectionReq extends jspb.Message {
  getCollectionId(): string;
  setCollectionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCollectionReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCollectionReq): DeleteCollectionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCollectionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCollectionReq;
  static deserializeBinaryFromReader(message: DeleteCollectionReq, reader: jspb.BinaryReader): DeleteCollectionReq;
}

export namespace DeleteCollectionReq {
  export type AsObject = {
    collectionId: string,
  }
}

export class ResetCollectionReq extends jspb.Message {
  getCollectionId(): string;
  setCollectionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetCollectionReq.AsObject;
  static toObject(includeInstance: boolean, msg: ResetCollectionReq): ResetCollectionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetCollectionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetCollectionReq;
  static deserializeBinaryFromReader(message: ResetCollectionReq, reader: jspb.BinaryReader): ResetCollectionReq;
}

export namespace ResetCollectionReq {
  export type AsObject = {
    collectionId: string,
  }
}

export class ListCollectionsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCollectionsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListCollectionsReq): ListCollectionsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCollectionsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCollectionsReq;
  static deserializeBinaryFromReader(message: ListCollectionsReq, reader: jspb.BinaryReader): ListCollectionsReq;
}

export namespace ListCollectionsReq {
  export type AsObject = {
  }
}

export class ListCollectionsRes extends jspb.Message {
  clearCollectionsList(): void;
  getCollectionsList(): Array<CollectionMetadata>;
  setCollectionsList(value: Array<CollectionMetadata>): void;
  addCollections(value?: CollectionMetadata, index?: number): CollectionMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCollectionsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListCollectionsRes): ListCollectionsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCollectionsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCollectionsRes;
  static deserializeBinaryFromReader(message: ListCollectionsRes, reader: jspb.BinaryReader): ListCollectionsRes;
}

export namespace ListCollectionsRes {
  export type AsObject = {
    collectionsList: Array<CollectionMetadata.AsObject>,
  }
}

export class SearchCollectionsPaginatedReq extends jspb.Message {
  clearCollectionIdsList(): void;
  getCollectionIdsList(): Array<string>;
  setCollectionIdsList(value: Array<string>): void;
  addCollectionIds(value: string, index?: number): string;

  hasSearch(): boolean;
  clearSearch(): void;
  getSearch(): Search | undefined;
  setSearch(value?: Search): void;

  getFrom(): number;
  setFrom(value: number): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getLastId(): string;
  setLastId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchCollectionsPaginatedReq.AsObject;
  static toObject(includeInstance: boolean, msg: SearchCollectionsPaginatedReq): SearchCollectionsPaginatedReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchCollectionsPaginatedReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchCollectionsPaginatedReq;
  static deserializeBinaryFromReader(message: SearchCollectionsPaginatedReq, reader: jspb.BinaryReader): SearchCollectionsPaginatedReq;
}

export namespace SearchCollectionsPaginatedReq {
  export type AsObject = {
    collectionIdsList: Array<string>,
    search?: Search.AsObject,
    from: number,
    pageSize: number,
    lastId: string,
  }
}

export class Search extends jspb.Message {
  getTerm(): string;
  setTerm(value: string): void;

  getFuzziness(): number;
  setFuzziness(value: number): void;

  getSubstring(): boolean;
  setSubstring(value: boolean): void;

  getNegate(): boolean;
  setNegate(value: boolean): void;

  getCaseSensitive(): boolean;
  setCaseSensitive(value: boolean): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Search.AsObject;
  static toObject(includeInstance: boolean, msg: Search): Search.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Search, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Search;
  static deserializeBinaryFromReader(message: Search, reader: jspb.BinaryReader): Search;
}

export namespace Search {
  export type AsObject = {
    term: string,
    fuzziness: number,
    substring: boolean,
    negate: boolean,
    caseSensitive: boolean,
    value: string,
  }
}

export class PaginatedSearchRes extends jspb.Message {
  clearEntriesList(): void;
  getEntriesList(): Array<CollectionEntry>;
  setEntriesList(value: Array<CollectionEntry>): void;
  addEntries(value?: CollectionEntry, index?: number): CollectionEntry;

  getTotal(): number;
  setTotal(value: number): void;

  getMoreResults(): boolean;
  setMoreResults(value: boolean): void;

  getLastId(): string;
  setLastId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginatedSearchRes.AsObject;
  static toObject(includeInstance: boolean, msg: PaginatedSearchRes): PaginatedSearchRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaginatedSearchRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginatedSearchRes;
  static deserializeBinaryFromReader(message: PaginatedSearchRes, reader: jspb.BinaryReader): PaginatedSearchRes;
}

export namespace PaginatedSearchRes {
  export type AsObject = {
    entriesList: Array<CollectionEntry.AsObject>,
    total: number,
    moreResults: boolean,
    lastId: string,
  }
}

export class GetCollectionEntriesReq extends jspb.Message {
  getCollectionId(): string;
  setCollectionId(value: string): void;

  getFrom(): number;
  setFrom(value: number): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getSearchAfterId(): string;
  setSearchAfterId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCollectionEntriesReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCollectionEntriesReq): GetCollectionEntriesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCollectionEntriesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCollectionEntriesReq;
  static deserializeBinaryFromReader(message: GetCollectionEntriesReq, reader: jspb.BinaryReader): GetCollectionEntriesReq;
}

export namespace GetCollectionEntriesReq {
  export type AsObject = {
    collectionId: string,
    from: number,
    pageSize: number,
    searchAfterId: string,
  }
}

export class GetCollectionEntriesRes extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): CollectionMetadata | undefined;
  setMetadata(value?: CollectionMetadata): void;

  clearEntriesList(): void;
  getEntriesList(): Array<CollectionEntry>;
  setEntriesList(value: Array<CollectionEntry>): void;
  addEntries(value?: CollectionEntry, index?: number): CollectionEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCollectionEntriesRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetCollectionEntriesRes): GetCollectionEntriesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCollectionEntriesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCollectionEntriesRes;
  static deserializeBinaryFromReader(message: GetCollectionEntriesRes, reader: jspb.BinaryReader): GetCollectionEntriesRes;
}

export namespace GetCollectionEntriesRes {
  export type AsObject = {
    metadata?: CollectionMetadata.AsObject,
    entriesList: Array<CollectionEntry.AsObject>,
  }
}

export class DeleteCollectionEntryReq extends jspb.Message {
  getCollectionId(): string;
  setCollectionId(value: string): void;

  getEntryId(): string;
  setEntryId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCollectionEntryReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCollectionEntryReq): DeleteCollectionEntryReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCollectionEntryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCollectionEntryReq;
  static deserializeBinaryFromReader(message: DeleteCollectionEntryReq, reader: jspb.BinaryReader): DeleteCollectionEntryReq;
}

export namespace DeleteCollectionEntryReq {
  export type AsObject = {
    collectionId: string,
    entryId: string,
  }
}

export class ListCampaignLinksRes extends jspb.Message {
  clearLinksList(): void;
  getLinksList(): Array<Link>;
  setLinksList(value: Array<Link>): void;
  addLinks(value?: Link, index?: number): Link;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCampaignLinksRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListCampaignLinksRes): ListCampaignLinksRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCampaignLinksRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCampaignLinksRes;
  static deserializeBinaryFromReader(message: ListCampaignLinksRes, reader: jspb.BinaryReader): ListCampaignLinksRes;
}

export namespace ListCampaignLinksRes {
  export type AsObject = {
    linksList: Array<Link.AsObject>,
  }
}

export class Link extends jspb.Message {
  getXmlClientPropSid(): number;
  setXmlClientPropSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Link.AsObject;
  static toObject(includeInstance: boolean, msg: Link): Link.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Link, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Link;
  static deserializeBinaryFromReader(message: Link, reader: jspb.BinaryReader): Link;
}

export namespace Link {
  export type AsObject = {
    xmlClientPropSid: number,
    name: string,
    description: string,
  }
}

export class CjsSearchField extends jspb.Message {
  getCjsSearchFieldId(): string;
  setCjsSearchFieldId(value: string): void;

  getCjsSearchDefinitionId(): string;
  setCjsSearchDefinitionId(value: string): void;

  getFieldName(): string;
  setFieldName(value: string): void;

  getFieldType(): api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap];
  setFieldType(value: api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap]): void;

  getFieldValue(): string;
  setFieldValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CjsSearchField.AsObject;
  static toObject(includeInstance: boolean, msg: CjsSearchField): CjsSearchField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CjsSearchField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CjsSearchField;
  static deserializeBinaryFromReader(message: CjsSearchField, reader: jspb.BinaryReader): CjsSearchField;
}

export namespace CjsSearchField {
  export type AsObject = {
    cjsSearchFieldId: string,
    cjsSearchDefinitionId: string,
    fieldName: string,
    fieldType: api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap],
    fieldValue: string,
  }
}

export class CjsSearchDefinitionMetadata extends jspb.Message {
  getCjsSearchDefinitionId(): string;
  setCjsSearchDefinitionId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  getExecCount(): number;
  setExecCount(value: number): void;

  getExecSuccess(): number;
  setExecSuccess(value: number): void;

  getExecFail(): number;
  setExecFail(value: number): void;

  hasCreatedDate(): boolean;
  clearCreatedDate(): void;
  getCreatedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastEdited(): boolean;
  clearLastEdited(): void;
  getLastEdited(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastEdited(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CjsSearchDefinitionMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CjsSearchDefinitionMetadata): CjsSearchDefinitionMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CjsSearchDefinitionMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CjsSearchDefinitionMetadata;
  static deserializeBinaryFromReader(message: CjsSearchDefinitionMetadata, reader: jspb.BinaryReader): CjsSearchDefinitionMetadata;
}

export namespace CjsSearchDefinitionMetadata {
  export type AsObject = {
    cjsSearchDefinitionId: string,
    name: string,
    description: string,
    deleted: boolean,
    execCount: number,
    execSuccess: number,
    execFail: number,
    createdDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastEdited?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CjsSearchDefinition extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): CjsSearchDefinitionMetadata | undefined;
  setMetadata(value?: CjsSearchDefinitionMetadata): void;

  clearSearchFieldsList(): void;
  getSearchFieldsList(): Array<CjsSearchField>;
  setSearchFieldsList(value: Array<CjsSearchField>): void;
  addSearchFields(value?: CjsSearchField, index?: number): CjsSearchField;

  clearWhitelistedReturnFieldsList(): void;
  getWhitelistedReturnFieldsList(): Array<CjsSearchField>;
  setWhitelistedReturnFieldsList(value: Array<CjsSearchField>): void;
  addWhitelistedReturnFields(value?: CjsSearchField, index?: number): CjsSearchField;

  clearBlacklistedReturnFieldsList(): void;
  getBlacklistedReturnFieldsList(): Array<CjsSearchField>;
  setBlacklistedReturnFieldsList(value: Array<CjsSearchField>): void;
  addBlacklistedReturnFields(value?: CjsSearchField, index?: number): CjsSearchField;

  clearUniqueIdentifiersList(): void;
  getUniqueIdentifiersList(): Array<CjsSearchField>;
  setUniqueIdentifiersList(value: Array<CjsSearchField>): void;
  addUniqueIdentifiers(value?: CjsSearchField, index?: number): CjsSearchField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CjsSearchDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: CjsSearchDefinition): CjsSearchDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CjsSearchDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CjsSearchDefinition;
  static deserializeBinaryFromReader(message: CjsSearchDefinition, reader: jspb.BinaryReader): CjsSearchDefinition;
}

export namespace CjsSearchDefinition {
  export type AsObject = {
    metadata?: CjsSearchDefinitionMetadata.AsObject,
    searchFieldsList: Array<CjsSearchField.AsObject>,
    whitelistedReturnFieldsList: Array<CjsSearchField.AsObject>,
    blacklistedReturnFieldsList: Array<CjsSearchField.AsObject>,
    uniqueIdentifiersList: Array<CjsSearchField.AsObject>,
  }
}

export class GetCjsSearchDefinitionReq extends jspb.Message {
  getCjsSearchDefinitionId(): string;
  setCjsSearchDefinitionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCjsSearchDefinitionReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCjsSearchDefinitionReq): GetCjsSearchDefinitionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCjsSearchDefinitionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCjsSearchDefinitionReq;
  static deserializeBinaryFromReader(message: GetCjsSearchDefinitionReq, reader: jspb.BinaryReader): GetCjsSearchDefinitionReq;
}

export namespace GetCjsSearchDefinitionReq {
  export type AsObject = {
    cjsSearchDefinitionId: string,
  }
}

export class DeleteCjsSearchDefinitionReq extends jspb.Message {
  getCjsSearchDefinitionId(): string;
  setCjsSearchDefinitionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCjsSearchDefinitionReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCjsSearchDefinitionReq): DeleteCjsSearchDefinitionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCjsSearchDefinitionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCjsSearchDefinitionReq;
  static deserializeBinaryFromReader(message: DeleteCjsSearchDefinitionReq, reader: jspb.BinaryReader): DeleteCjsSearchDefinitionReq;
}

export namespace DeleteCjsSearchDefinitionReq {
  export type AsObject = {
    cjsSearchDefinitionId: string,
  }
}

export class ListCjsSearchDefinitionsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCjsSearchDefinitionsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListCjsSearchDefinitionsReq): ListCjsSearchDefinitionsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCjsSearchDefinitionsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCjsSearchDefinitionsReq;
  static deserializeBinaryFromReader(message: ListCjsSearchDefinitionsReq, reader: jspb.BinaryReader): ListCjsSearchDefinitionsReq;
}

export namespace ListCjsSearchDefinitionsReq {
  export type AsObject = {
  }
}

export class ListCjsSearchDefinitionsRes extends jspb.Message {
  clearDefinitionsList(): void;
  getDefinitionsList(): Array<CjsSearchDefinitionMetadata>;
  setDefinitionsList(value: Array<CjsSearchDefinitionMetadata>): void;
  addDefinitions(value?: CjsSearchDefinitionMetadata, index?: number): CjsSearchDefinitionMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCjsSearchDefinitionsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListCjsSearchDefinitionsRes): ListCjsSearchDefinitionsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCjsSearchDefinitionsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCjsSearchDefinitionsRes;
  static deserializeBinaryFromReader(message: ListCjsSearchDefinitionsRes, reader: jspb.BinaryReader): ListCjsSearchDefinitionsRes;
}

export namespace ListCjsSearchDefinitionsRes {
  export type AsObject = {
    definitionsList: Array<CjsSearchDefinitionMetadata.AsObject>,
  }
}

export class ExecuteCjsSearchDefinitionReq extends jspb.Message {
  getSearchDefinitionId(): string;
  setSearchDefinitionId(value: string): void;

  clearSearchFieldsList(): void;
  getSearchFieldsList(): Array<CjsExecuteSearchField>;
  setSearchFieldsList(value: Array<CjsExecuteSearchField>): void;
  addSearchFields(value?: CjsExecuteSearchField, index?: number): CjsExecuteSearchField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteCjsSearchDefinitionReq.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteCjsSearchDefinitionReq): ExecuteCjsSearchDefinitionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteCjsSearchDefinitionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteCjsSearchDefinitionReq;
  static deserializeBinaryFromReader(message: ExecuteCjsSearchDefinitionReq, reader: jspb.BinaryReader): ExecuteCjsSearchDefinitionReq;
}

export namespace ExecuteCjsSearchDefinitionReq {
  export type AsObject = {
    searchDefinitionId: string,
    searchFieldsList: Array<CjsExecuteSearchField.AsObject>,
  }
}

export class ExecuteCjsSearchDefinitionRes extends jspb.Message {
  clearCollectionEntriesList(): void;
  getCollectionEntriesList(): Array<CollectionEntries>;
  setCollectionEntriesList(value: Array<CollectionEntries>): void;
  addCollectionEntries(value?: CollectionEntries, index?: number): CollectionEntries;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteCjsSearchDefinitionRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteCjsSearchDefinitionRes): ExecuteCjsSearchDefinitionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteCjsSearchDefinitionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteCjsSearchDefinitionRes;
  static deserializeBinaryFromReader(message: ExecuteCjsSearchDefinitionRes, reader: jspb.BinaryReader): ExecuteCjsSearchDefinitionRes;
}

export namespace ExecuteCjsSearchDefinitionRes {
  export type AsObject = {
    collectionEntriesList: Array<CollectionEntries.AsObject>,
  }
}

export class CollectionEntries extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): CollectionMetadata | undefined;
  setMetadata(value?: CollectionMetadata): void;

  clearEntriesList(): void;
  getEntriesList(): Array<CollectionEntry>;
  setEntriesList(value: Array<CollectionEntry>): void;
  addEntries(value?: CollectionEntry, index?: number): CollectionEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionEntries.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionEntries): CollectionEntries.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionEntries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionEntries;
  static deserializeBinaryFromReader(message: CollectionEntries, reader: jspb.BinaryReader): CollectionEntries;
}

export namespace CollectionEntries {
  export type AsObject = {
    metadata?: CollectionMetadata.AsObject,
    entriesList: Array<CollectionEntry.AsObject>,
  }
}

export class CjsExecuteSearchField extends jspb.Message {
  hasFieldName(): boolean;
  clearFieldName(): void;
  getFieldName(): string;
  setFieldName(value: string): void;

  hasFieldType(): boolean;
  clearFieldType(): void;
  getFieldType(): api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap];
  setFieldType(value: api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap]): void;

  getFieldValue(): string;
  setFieldValue(value: string): void;

  getFieldCase(): CjsExecuteSearchField.FieldCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CjsExecuteSearchField.AsObject;
  static toObject(includeInstance: boolean, msg: CjsExecuteSearchField): CjsExecuteSearchField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CjsExecuteSearchField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CjsExecuteSearchField;
  static deserializeBinaryFromReader(message: CjsExecuteSearchField, reader: jspb.BinaryReader): CjsExecuteSearchField;
}

export namespace CjsExecuteSearchField {
  export type AsObject = {
    fieldName: string,
    fieldType: api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap],
    fieldValue: string,
  }

  export enum FieldCase {
    FIELD_NOT_SET = 0,
    FIELD_NAME = 1,
    FIELD_TYPE = 2,
  }
}

export class CjsSecureSearchCriteriaMetadata extends jspb.Message {
  getCjsSecureSearchCriteriaId(): string;
  setCjsSecureSearchCriteriaId(value: string): void;

  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CjsSecureSearchCriteriaMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CjsSecureSearchCriteriaMetadata): CjsSecureSearchCriteriaMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CjsSecureSearchCriteriaMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CjsSecureSearchCriteriaMetadata;
  static deserializeBinaryFromReader(message: CjsSecureSearchCriteriaMetadata, reader: jspb.BinaryReader): CjsSecureSearchCriteriaMetadata;
}

export namespace CjsSecureSearchCriteriaMetadata {
  export type AsObject = {
    cjsSecureSearchCriteriaId: string,
    deleted: boolean,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CjsSecureSearchCriteria extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): CjsSecureSearchCriteriaMetadata | undefined;
  setMetadata(value?: CjsSecureSearchCriteriaMetadata): void;

  clearFieldsList(): void;
  getFieldsList(): Array<CjsSecureSearchCriteriaField>;
  setFieldsList(value: Array<CjsSecureSearchCriteriaField>): void;
  addFields(value?: CjsSecureSearchCriteriaField, index?: number): CjsSecureSearchCriteriaField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CjsSecureSearchCriteria.AsObject;
  static toObject(includeInstance: boolean, msg: CjsSecureSearchCriteria): CjsSecureSearchCriteria.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CjsSecureSearchCriteria, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CjsSecureSearchCriteria;
  static deserializeBinaryFromReader(message: CjsSecureSearchCriteria, reader: jspb.BinaryReader): CjsSecureSearchCriteria;
}

export namespace CjsSecureSearchCriteria {
  export type AsObject = {
    metadata?: CjsSecureSearchCriteriaMetadata.AsObject,
    fieldsList: Array<CjsSecureSearchCriteriaField.AsObject>,
  }
}

export class GetCjsSecureSearchCriteriaReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCjsSecureSearchCriteriaReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCjsSecureSearchCriteriaReq): GetCjsSecureSearchCriteriaReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCjsSecureSearchCriteriaReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCjsSecureSearchCriteriaReq;
  static deserializeBinaryFromReader(message: GetCjsSecureSearchCriteriaReq, reader: jspb.BinaryReader): GetCjsSecureSearchCriteriaReq;
}

export namespace GetCjsSecureSearchCriteriaReq {
  export type AsObject = {
  }
}

export class CjsSecureSearchCriteriaField extends jspb.Message {
  getCjsSecureSearchCriteriaFieldId(): string;
  setCjsSecureSearchCriteriaFieldId(value: string): void;

  getCjsSecureSearchCriteriaId(): string;
  setCjsSecureSearchCriteriaId(value: string): void;

  getFieldType(): api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap];
  setFieldType(value: api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CjsSecureSearchCriteriaField.AsObject;
  static toObject(includeInstance: boolean, msg: CjsSecureSearchCriteriaField): CjsSecureSearchCriteriaField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CjsSecureSearchCriteriaField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CjsSecureSearchCriteriaField;
  static deserializeBinaryFromReader(message: CjsSecureSearchCriteriaField, reader: jspb.BinaryReader): CjsSecureSearchCriteriaField;
}

export namespace CjsSecureSearchCriteriaField {
  export type AsObject = {
    cjsSecureSearchCriteriaFieldId: string,
    cjsSecureSearchCriteriaId: string,
    fieldType: api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap],
  }
}

export class SplitCriteria extends jspb.Message {
  hasUnique(): boolean;
  clearUnique(): void;
  getUnique(): SplitByUnique | undefined;
  setUnique(value?: SplitByUnique): void;

  hasMaxSize(): boolean;
  clearMaxSize(): void;
  getMaxSize(): SplitByMaxSize | undefined;
  setMaxSize(value?: SplitByMaxSize): void;

  hasEqualParts(): boolean;
  clearEqualParts(): void;
  getEqualParts(): SplitByEqualParts | undefined;
  setEqualParts(value?: SplitByEqualParts): void;

  getActionCase(): SplitCriteria.ActionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SplitCriteria.AsObject;
  static toObject(includeInstance: boolean, msg: SplitCriteria): SplitCriteria.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SplitCriteria, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SplitCriteria;
  static deserializeBinaryFromReader(message: SplitCriteria, reader: jspb.BinaryReader): SplitCriteria;
}

export namespace SplitCriteria {
  export type AsObject = {
    unique?: SplitByUnique.AsObject,
    maxSize?: SplitByMaxSize.AsObject,
    equalParts?: SplitByEqualParts.AsObject,
  }

  export enum ActionCase {
    ACTION_NOT_SET = 0,
    UNIQUE = 1,
    MAX_SIZE = 2,
    EQUAL_PARTS = 3,
  }
}

export class UniquePair extends jspb.Message {
  hasSplitOnFields(): boolean;
  clearSplitOnFields(): void;
  getSplitOnFields(): FieldIndex | undefined;
  setSplitOnFields(value?: FieldIndex): void;

  getSplitValue(): string;
  setSplitValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UniquePair.AsObject;
  static toObject(includeInstance: boolean, msg: UniquePair): UniquePair.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UniquePair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UniquePair;
  static deserializeBinaryFromReader(message: UniquePair, reader: jspb.BinaryReader): UniquePair;
}

export namespace UniquePair {
  export type AsObject = {
    splitOnFields?: FieldIndex.AsObject,
    splitValue: string,
  }
}

export class SplitByNamedUnique extends jspb.Message {
  clearNamedFieldsList(): void;
  getNamedFieldsList(): Array<UniquePair>;
  setNamedFieldsList(value: Array<UniquePair>): void;
  addNamedFields(value?: UniquePair, index?: number): UniquePair;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SplitByNamedUnique.AsObject;
  static toObject(includeInstance: boolean, msg: SplitByNamedUnique): SplitByNamedUnique.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SplitByNamedUnique, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SplitByNamedUnique;
  static deserializeBinaryFromReader(message: SplitByNamedUnique, reader: jspb.BinaryReader): SplitByNamedUnique;
}

export namespace SplitByNamedUnique {
  export type AsObject = {
    namedFieldsList: Array<UniquePair.AsObject>,
  }
}

export class SplitByUnique extends jspb.Message {
  clearSplitOnFieldsList(): void;
  getSplitOnFieldsList(): Array<FieldIndex>;
  setSplitOnFieldsList(value: Array<FieldIndex>): void;
  addSplitOnFields(value?: FieldIndex, index?: number): FieldIndex;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SplitByUnique.AsObject;
  static toObject(includeInstance: boolean, msg: SplitByUnique): SplitByUnique.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SplitByUnique, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SplitByUnique;
  static deserializeBinaryFromReader(message: SplitByUnique, reader: jspb.BinaryReader): SplitByUnique;
}

export namespace SplitByUnique {
  export type AsObject = {
    splitOnFieldsList: Array<FieldIndex.AsObject>,
  }
}

export class SplitByMaxSize extends jspb.Message {
  getMaxSize(): number;
  setMaxSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SplitByMaxSize.AsObject;
  static toObject(includeInstance: boolean, msg: SplitByMaxSize): SplitByMaxSize.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SplitByMaxSize, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SplitByMaxSize;
  static deserializeBinaryFromReader(message: SplitByMaxSize, reader: jspb.BinaryReader): SplitByMaxSize;
}

export namespace SplitByMaxSize {
  export type AsObject = {
    maxSize: number,
  }
}

export class SplitByEqualParts extends jspb.Message {
  getPartSize(): number;
  setPartSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SplitByEqualParts.AsObject;
  static toObject(includeInstance: boolean, msg: SplitByEqualParts): SplitByEqualParts.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SplitByEqualParts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SplitByEqualParts;
  static deserializeBinaryFromReader(message: SplitByEqualParts, reader: jspb.BinaryReader): SplitByEqualParts;
}

export namespace SplitByEqualParts {
  export type AsObject = {
    partSize: number,
  }
}

export class EpicEntrypoint extends jspb.Message {
  getCron(): string;
  setCron(value: string): void;

  getMaxWaitTime(): number;
  setMaxWaitTime(value: number): void;

  clearEntityTypesList(): void;
  getEntityTypesList(): Array<EpicEntityTypeMap[keyof EpicEntityTypeMap]>;
  setEntityTypesList(value: Array<EpicEntityTypeMap[keyof EpicEntityTypeMap]>): void;
  addEntityTypes(value: EpicEntityTypeMap[keyof EpicEntityTypeMap], index?: number): EpicEntityTypeMap[keyof EpicEntityTypeMap];

  getGroupBaseUrl(): string;
  setGroupBaseUrl(value: string): void;

  getGroupFhirId(): string;
  setGroupFhirId(value: string): void;

  hasRuntimeValues(): boolean;
  clearRuntimeValues(): void;
  getRuntimeValues(): RuntimeValues | undefined;
  setRuntimeValues(value?: RuntimeValues): void;

  getFlushPageCount(): number;
  setFlushPageCount(value: number): void;

  getFlushMinuteCount(): number;
  setFlushMinuteCount(value: number): void;

  getFlushDuringCheck(): boolean;
  setFlushDuringCheck(value: boolean): void;

  getTimezone(): string;
  setTimezone(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  clearFieldsList(): void;
  getFieldsList(): Array<Field>;
  setFieldsList(value: Array<Field>): void;
  addFields(value?: Field, index?: number): Field;

  getRawJson(): boolean;
  setRawJson(value: boolean): void;

  getNonProd(): boolean;
  setNonProd(value: boolean): void;

  getAuthServer(): string;
  setAuthServer(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EpicEntrypoint.AsObject;
  static toObject(includeInstance: boolean, msg: EpicEntrypoint): EpicEntrypoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EpicEntrypoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EpicEntrypoint;
  static deserializeBinaryFromReader(message: EpicEntrypoint, reader: jspb.BinaryReader): EpicEntrypoint;
}

export namespace EpicEntrypoint {
  export type AsObject = {
    cron: string,
    maxWaitTime: number,
    entityTypesList: Array<EpicEntityTypeMap[keyof EpicEntityTypeMap]>,
    groupBaseUrl: string,
    groupFhirId: string,
    runtimeValues?: RuntimeValues.AsObject,
    flushPageCount: number,
    flushMinuteCount: number,
    flushDuringCheck: boolean,
    timezone: string,
    enabled: boolean,
    fieldsList: Array<Field.AsObject>,
    rawJson: boolean,
    nonProd: boolean,
    authServer: string,
  }
}

export class RuntimeValues extends jspb.Message {
  getState(): api_commons_lms_pb.EventStateMap[keyof api_commons_lms_pb.EventStateMap];
  setState(value: api_commons_lms_pb.EventStateMap[keyof api_commons_lms_pb.EventStateMap]): void;

  getAccessToken(): string;
  setAccessToken(value: string): void;

  getCheckUrl(): string;
  setCheckUrl(value: string): void;

  clearDataUrlsList(): void;
  getDataUrlsList(): Array<EntityURL>;
  setDataUrlsList(value: Array<EntityURL>): void;
  addDataUrls(value?: EntityURL, index?: number): EntityURL;

  getCurrentIteration(): number;
  setCurrentIteration(value: number): void;

  getTotalSecondsSpent(): number;
  setTotalSecondsSpent(value: number): void;

  clearErrorsList(): void;
  getErrorsList(): Array<string>;
  setErrorsList(value: Array<string>): void;
  addErrors(value: string, index?: number): string;

  getTotalNotReadyCount(): number;
  setTotalNotReadyCount(value: number): void;

  getFileIdsMap(): jspb.Map<string, number>;
  clearFileIdsMap(): void;
  getPreliminaryVarsMap(): jspb.Map<string, string>;
  clearPreliminaryVarsMap(): void;
  clearParentEventIdsList(): void;
  getParentEventIdsList(): Array<number>;
  setParentEventIdsList(value: Array<number>): void;
  addParentEventIds(value: number, index?: number): number;

  getNoMorePages(): boolean;
  setNoMorePages(value: boolean): void;

  clearTotalFtsIdsList(): void;
  getTotalFtsIdsList(): Array<string>;
  setTotalFtsIdsList(value: Array<string>): void;
  addTotalFtsIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RuntimeValues.AsObject;
  static toObject(includeInstance: boolean, msg: RuntimeValues): RuntimeValues.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RuntimeValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RuntimeValues;
  static deserializeBinaryFromReader(message: RuntimeValues, reader: jspb.BinaryReader): RuntimeValues;
}

export namespace RuntimeValues {
  export type AsObject = {
    state: api_commons_lms_pb.EventStateMap[keyof api_commons_lms_pb.EventStateMap],
    accessToken: string,
    checkUrl: string,
    dataUrlsList: Array<EntityURL.AsObject>,
    currentIteration: number,
    totalSecondsSpent: number,
    errorsList: Array<string>,
    totalNotReadyCount: number,
    fileIdsMap: Array<[string, number]>,
    preliminaryVarsMap: Array<[string, string]>,
    parentEventIdsList: Array<number>,
    noMorePages: boolean,
    totalFtsIdsList: Array<string>,
  }
}

export class EntityURL extends jspb.Message {
  getEntityType(): EpicEntityTypeMap[keyof EpicEntityTypeMap];
  setEntityType(value: EpicEntityTypeMap[keyof EpicEntityTypeMap]): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityURL.AsObject;
  static toObject(includeInstance: boolean, msg: EntityURL): EntityURL.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EntityURL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityURL;
  static deserializeBinaryFromReader(message: EntityURL, reader: jspb.BinaryReader): EntityURL;
}

export namespace EntityURL {
  export type AsObject = {
    entityType: EpicEntityTypeMap[keyof EpicEntityTypeMap],
    url: string,
  }
}

export class SampleRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SampleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SampleRequest): SampleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SampleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SampleRequest;
  static deserializeBinaryFromReader(message: SampleRequest, reader: jspb.BinaryReader): SampleRequest;
}

export namespace SampleRequest {
  export type AsObject = {
  }
}

export class EHREntityType extends jspb.Message {
  getEpicEntity(): EpicEntityTypeMap[keyof EpicEntityTypeMap];
  setEpicEntity(value: EpicEntityTypeMap[keyof EpicEntityTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EHREntityType.AsObject;
  static toObject(includeInstance: boolean, msg: EHREntityType): EHREntityType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EHREntityType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EHREntityType;
  static deserializeBinaryFromReader(message: EHREntityType, reader: jspb.BinaryReader): EHREntityType;
}

export namespace EHREntityType {
  export type AsObject = {
    epicEntity: EpicEntityTypeMap[keyof EpicEntityTypeMap],
  }
}

export class FinviEntrypoint extends jspb.Message {
  getPoolId(): string;
  setPoolId(value: string): void;

  getCronInterval(): string;
  setCronInterval(value: string): void;

  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  getTimezone(): string;
  setTimezone(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinviEntrypoint.AsObject;
  static toObject(includeInstance: boolean, msg: FinviEntrypoint): FinviEntrypoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FinviEntrypoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinviEntrypoint;
  static deserializeBinaryFromReader(message: FinviEntrypoint, reader: jspb.BinaryReader): FinviEntrypoint;
}

export namespace FinviEntrypoint {
  export type AsObject = {
    poolId: string,
    cronInterval: string,
    disabled: boolean,
    timezone: string,
  }
}

export interface TimeUnitMap {
  DEFAULT: 0;
  TIME_WEEKS: 1;
  TIME_DAYS: 2;
  TIME_HOURS: 3;
}

export const TimeUnit: TimeUnitMap;

export interface EpicEntityTypeMap {
  EPIC_UNKNOWN_TYPE: 0;
  EPIC_ENTITY_TYPE_PATIENT: 1;
  EPIC_ENTITY_TYPE_APPOINTMENT: 2;
  EPIC_ENTITY_TYPE_MEDICATION: 3;
  EPIC_ENTITY_TYPE_MEDICATION_REQUEST: 4;
  EPIC_ENTITY_TYPE_ACCOUNT: 5;
}

export const EpicEntityType: EpicEntityTypeMap;

