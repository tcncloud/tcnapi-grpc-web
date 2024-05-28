// package: api.v1alpha1.org.observedholidays
// file: api/v1alpha1/org/observedholidays/entities.proto

import * as jspb from "google-protobuf";
import * as api_commons_org_pb from "../../../../api/commons/org_pb";
import * as api_commons_org_preferences_pb from "../../../../api/commons/org/preferences_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ListObservedHolidaysRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListObservedHolidaysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListObservedHolidaysRequest): ListObservedHolidaysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListObservedHolidaysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListObservedHolidaysRequest;
  static deserializeBinaryFromReader(message: ListObservedHolidaysRequest, reader: jspb.BinaryReader): ListObservedHolidaysRequest;
}

export namespace ListObservedHolidaysRequest {
  export type AsObject = {
  }
}

export class ListObservedHolidaysResponse extends jspb.Message {
  clearObservedHolidaysList(): void;
  getObservedHolidaysList(): Array<api_commons_org_preferences_pb.ObservedHolidays>;
  setObservedHolidaysList(value: Array<api_commons_org_preferences_pb.ObservedHolidays>): void;
  addObservedHolidays(value?: api_commons_org_preferences_pb.ObservedHolidays, index?: number): api_commons_org_preferences_pb.ObservedHolidays;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListObservedHolidaysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListObservedHolidaysResponse): ListObservedHolidaysResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListObservedHolidaysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListObservedHolidaysResponse;
  static deserializeBinaryFromReader(message: ListObservedHolidaysResponse, reader: jspb.BinaryReader): ListObservedHolidaysResponse;
}

export namespace ListObservedHolidaysResponse {
  export type AsObject = {
    observedHolidaysList: Array<api_commons_org_preferences_pb.ObservedHolidays.AsObject>,
  }
}

export class GetObservedHolidaysRequest extends jspb.Message {
  getObservedHolidaysId(): string;
  setObservedHolidaysId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObservedHolidaysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetObservedHolidaysRequest): GetObservedHolidaysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObservedHolidaysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObservedHolidaysRequest;
  static deserializeBinaryFromReader(message: GetObservedHolidaysRequest, reader: jspb.BinaryReader): GetObservedHolidaysRequest;
}

export namespace GetObservedHolidaysRequest {
  export type AsObject = {
    observedHolidaysId: string,
  }
}

export class GetObservedHolidaysResponse extends jspb.Message {
  hasObservedHolidays(): boolean;
  clearObservedHolidays(): void;
  getObservedHolidays(): api_commons_org_preferences_pb.ObservedHolidays | undefined;
  setObservedHolidays(value?: api_commons_org_preferences_pb.ObservedHolidays): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObservedHolidaysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetObservedHolidaysResponse): GetObservedHolidaysResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObservedHolidaysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObservedHolidaysResponse;
  static deserializeBinaryFromReader(message: GetObservedHolidaysResponse, reader: jspb.BinaryReader): GetObservedHolidaysResponse;
}

export namespace GetObservedHolidaysResponse {
  export type AsObject = {
    observedHolidays?: api_commons_org_preferences_pb.ObservedHolidays.AsObject,
  }
}

export class SetObservedHolidaysRequest extends jspb.Message {
  getObservedHolidaysName(): string;
  setObservedHolidaysName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getTimezone(): api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap];
  setTimezone(value: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap]): void;

  clearDaysList(): void;
  getDaysList(): Array<api_commons_org_preferences_pb.ObservedHoliday>;
  setDaysList(value: Array<api_commons_org_preferences_pb.ObservedHoliday>): void;
  addDays(value?: api_commons_org_preferences_pb.ObservedHoliday, index?: number): api_commons_org_preferences_pb.ObservedHoliday;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetObservedHolidaysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetObservedHolidaysRequest): SetObservedHolidaysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetObservedHolidaysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetObservedHolidaysRequest;
  static deserializeBinaryFromReader(message: SetObservedHolidaysRequest, reader: jspb.BinaryReader): SetObservedHolidaysRequest;
}

export namespace SetObservedHolidaysRequest {
  export type AsObject = {
    observedHolidaysName: string,
    description: string,
    timezone: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap],
    daysList: Array<api_commons_org_preferences_pb.ObservedHoliday.AsObject>,
  }
}

export class SetObservedHolidaysResponse extends jspb.Message {
  getObservedHolidaysId(): string;
  setObservedHolidaysId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetObservedHolidaysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetObservedHolidaysResponse): SetObservedHolidaysResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetObservedHolidaysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetObservedHolidaysResponse;
  static deserializeBinaryFromReader(message: SetObservedHolidaysResponse, reader: jspb.BinaryReader): SetObservedHolidaysResponse;
}

export namespace SetObservedHolidaysResponse {
  export type AsObject = {
    observedHolidaysId: string,
  }
}

export class AddToObservedHolidaysRequest extends jspb.Message {
  getObservedHolidaysId(): string;
  setObservedHolidaysId(value: string): void;

  hasDay(): boolean;
  clearDay(): void;
  getDay(): api_commons_org_preferences_pb.ObservedHoliday | undefined;
  setDay(value?: api_commons_org_preferences_pb.ObservedHoliday): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddToObservedHolidaysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddToObservedHolidaysRequest): AddToObservedHolidaysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddToObservedHolidaysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddToObservedHolidaysRequest;
  static deserializeBinaryFromReader(message: AddToObservedHolidaysRequest, reader: jspb.BinaryReader): AddToObservedHolidaysRequest;
}

export namespace AddToObservedHolidaysRequest {
  export type AsObject = {
    observedHolidaysId: string,
    day?: api_commons_org_preferences_pb.ObservedHoliday.AsObject,
  }
}

export class AddToObservedHolidaysResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddToObservedHolidaysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddToObservedHolidaysResponse): AddToObservedHolidaysResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddToObservedHolidaysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddToObservedHolidaysResponse;
  static deserializeBinaryFromReader(message: AddToObservedHolidaysResponse, reader: jspb.BinaryReader): AddToObservedHolidaysResponse;
}

export namespace AddToObservedHolidaysResponse {
  export type AsObject = {
  }
}

export class RemoveFromObservedHolidaysRequest extends jspb.Message {
  getObservedHolidaysId(): string;
  setObservedHolidaysId(value: string): void;

  hasDay(): boolean;
  clearDay(): void;
  getDay(): api_commons_org_preferences_pb.ObservedHoliday | undefined;
  setDay(value?: api_commons_org_preferences_pb.ObservedHoliday): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveFromObservedHolidaysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveFromObservedHolidaysRequest): RemoveFromObservedHolidaysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveFromObservedHolidaysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveFromObservedHolidaysRequest;
  static deserializeBinaryFromReader(message: RemoveFromObservedHolidaysRequest, reader: jspb.BinaryReader): RemoveFromObservedHolidaysRequest;
}

export namespace RemoveFromObservedHolidaysRequest {
  export type AsObject = {
    observedHolidaysId: string,
    day?: api_commons_org_preferences_pb.ObservedHoliday.AsObject,
  }
}

export class RemoveFromObservedHolidaysResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveFromObservedHolidaysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveFromObservedHolidaysResponse): RemoveFromObservedHolidaysResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveFromObservedHolidaysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveFromObservedHolidaysResponse;
  static deserializeBinaryFromReader(message: RemoveFromObservedHolidaysResponse, reader: jspb.BinaryReader): RemoveFromObservedHolidaysResponse;
}

export namespace RemoveFromObservedHolidaysResponse {
  export type AsObject = {
  }
}

export class UpdateObservedHolidaysInfoRequest extends jspb.Message {
  getObservedHolidaysId(): string;
  setObservedHolidaysId(value: string): void;

  getObservedHolidaysName(): string;
  setObservedHolidaysName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getTimezone(): api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap];
  setTimezone(value: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap]): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateObservedHolidaysInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateObservedHolidaysInfoRequest): UpdateObservedHolidaysInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateObservedHolidaysInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateObservedHolidaysInfoRequest;
  static deserializeBinaryFromReader(message: UpdateObservedHolidaysInfoRequest, reader: jspb.BinaryReader): UpdateObservedHolidaysInfoRequest;
}

export namespace UpdateObservedHolidaysInfoRequest {
  export type AsObject = {
    observedHolidaysId: string,
    observedHolidaysName: string,
    description: string,
    timezone: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap],
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateObservedHolidaysInfoResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateObservedHolidaysInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateObservedHolidaysInfoResponse): UpdateObservedHolidaysInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateObservedHolidaysInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateObservedHolidaysInfoResponse;
  static deserializeBinaryFromReader(message: UpdateObservedHolidaysInfoResponse, reader: jspb.BinaryReader): UpdateObservedHolidaysInfoResponse;
}

export namespace UpdateObservedHolidaysInfoResponse {
  export type AsObject = {
  }
}

export class DeleteObservedHolidaysRequest extends jspb.Message {
  getObservedHolidaysId(): string;
  setObservedHolidaysId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteObservedHolidaysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteObservedHolidaysRequest): DeleteObservedHolidaysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteObservedHolidaysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteObservedHolidaysRequest;
  static deserializeBinaryFromReader(message: DeleteObservedHolidaysRequest, reader: jspb.BinaryReader): DeleteObservedHolidaysRequest;
}

export namespace DeleteObservedHolidaysRequest {
  export type AsObject = {
    observedHolidaysId: string,
  }
}

export class DeleteObservedHolidaysResponse extends jspb.Message {
  getObservedHolidaysId(): string;
  setObservedHolidaysId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteObservedHolidaysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteObservedHolidaysResponse): DeleteObservedHolidaysResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteObservedHolidaysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteObservedHolidaysResponse;
  static deserializeBinaryFromReader(message: DeleteObservedHolidaysResponse, reader: jspb.BinaryReader): DeleteObservedHolidaysResponse;
}

export namespace DeleteObservedHolidaysResponse {
  export type AsObject = {
    observedHolidaysId: string,
  }
}

export class EvaluateObservedHolidaysRequest extends jspb.Message {
  getObservedHolidaysId(): string;
  setObservedHolidaysId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvaluateObservedHolidaysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EvaluateObservedHolidaysRequest): EvaluateObservedHolidaysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EvaluateObservedHolidaysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvaluateObservedHolidaysRequest;
  static deserializeBinaryFromReader(message: EvaluateObservedHolidaysRequest, reader: jspb.BinaryReader): EvaluateObservedHolidaysRequest;
}

export namespace EvaluateObservedHolidaysRequest {
  export type AsObject = {
    observedHolidaysId: string,
  }
}

export class EvaluateObservedHolidaysResponse extends jspb.Message {
  getDateMatched(): boolean;
  setDateMatched(value: boolean): void;

  hasResultExpiration(): boolean;
  clearResultExpiration(): void;
  getResultExpiration(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setResultExpiration(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvaluateObservedHolidaysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EvaluateObservedHolidaysResponse): EvaluateObservedHolidaysResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EvaluateObservedHolidaysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvaluateObservedHolidaysResponse;
  static deserializeBinaryFromReader(message: EvaluateObservedHolidaysResponse, reader: jspb.BinaryReader): EvaluateObservedHolidaysResponse;
}

export namespace EvaluateObservedHolidaysResponse {
  export type AsObject = {
    dateMatched: boolean,
    resultExpiration?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

