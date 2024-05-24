// package: api.v1alpha1.org.businesshours
// file: api/v1alpha1/org/businesshours/entities.proto

import * as jspb from "google-protobuf";
import * as api_commons_org_pb from "../../../../api/commons/org_pb";
import * as api_commons_org_preferences_pb from "../../../../api/commons/org/preferences_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ListBusinessHoursRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBusinessHoursRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBusinessHoursRequest): ListBusinessHoursRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBusinessHoursRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBusinessHoursRequest;
  static deserializeBinaryFromReader(message: ListBusinessHoursRequest, reader: jspb.BinaryReader): ListBusinessHoursRequest;
}

export namespace ListBusinessHoursRequest {
  export type AsObject = {
  }
}

export class ListBusinessHoursResponse extends jspb.Message {
  clearBusinessHoursList(): void;
  getBusinessHoursList(): Array<api_commons_org_preferences_pb.BusinessHours>;
  setBusinessHoursList(value: Array<api_commons_org_preferences_pb.BusinessHours>): void;
  addBusinessHours(value?: api_commons_org_preferences_pb.BusinessHours, index?: number): api_commons_org_preferences_pb.BusinessHours;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBusinessHoursResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBusinessHoursResponse): ListBusinessHoursResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBusinessHoursResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBusinessHoursResponse;
  static deserializeBinaryFromReader(message: ListBusinessHoursResponse, reader: jspb.BinaryReader): ListBusinessHoursResponse;
}

export namespace ListBusinessHoursResponse {
  export type AsObject = {
    businessHoursList: Array<api_commons_org_preferences_pb.BusinessHours.AsObject>,
  }
}

export class GetBusinessHoursRequest extends jspb.Message {
  getBusinessHoursId(): string;
  setBusinessHoursId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessHoursRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessHoursRequest): GetBusinessHoursRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBusinessHoursRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessHoursRequest;
  static deserializeBinaryFromReader(message: GetBusinessHoursRequest, reader: jspb.BinaryReader): GetBusinessHoursRequest;
}

export namespace GetBusinessHoursRequest {
  export type AsObject = {
    businessHoursId: string,
  }
}

export class GetBusinessHoursResponse extends jspb.Message {
  hasBusinessHours(): boolean;
  clearBusinessHours(): void;
  getBusinessHours(): api_commons_org_preferences_pb.BusinessHours | undefined;
  setBusinessHours(value?: api_commons_org_preferences_pb.BusinessHours): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessHoursResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessHoursResponse): GetBusinessHoursResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBusinessHoursResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessHoursResponse;
  static deserializeBinaryFromReader(message: GetBusinessHoursResponse, reader: jspb.BinaryReader): GetBusinessHoursResponse;
}

export namespace GetBusinessHoursResponse {
  export type AsObject = {
    businessHours?: api_commons_org_preferences_pb.BusinessHours.AsObject,
  }
}

export class SetBusinessHoursRequest extends jspb.Message {
  getBusinessHoursName(): string;
  setBusinessHoursName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearDayIntervalsList(): void;
  getDayIntervalsList(): Array<api_commons_org_preferences_pb.DayInterval>;
  setDayIntervalsList(value: Array<api_commons_org_preferences_pb.DayInterval>): void;
  addDayIntervals(value?: api_commons_org_preferences_pb.DayInterval, index?: number): api_commons_org_preferences_pb.DayInterval;

  getTimezone(): api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap];
  setTimezone(value: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetBusinessHoursRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetBusinessHoursRequest): SetBusinessHoursRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetBusinessHoursRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetBusinessHoursRequest;
  static deserializeBinaryFromReader(message: SetBusinessHoursRequest, reader: jspb.BinaryReader): SetBusinessHoursRequest;
}

export namespace SetBusinessHoursRequest {
  export type AsObject = {
    businessHoursName: string,
    description: string,
    dayIntervalsList: Array<api_commons_org_preferences_pb.DayInterval.AsObject>,
    timezone: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap],
  }
}

export class SetBusinessHoursResponse extends jspb.Message {
  getBusinessHoursId(): string;
  setBusinessHoursId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetBusinessHoursResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetBusinessHoursResponse): SetBusinessHoursResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetBusinessHoursResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetBusinessHoursResponse;
  static deserializeBinaryFromReader(message: SetBusinessHoursResponse, reader: jspb.BinaryReader): SetBusinessHoursResponse;
}

export namespace SetBusinessHoursResponse {
  export type AsObject = {
    businessHoursId: string,
  }
}

export class AddIntervalToBusinessHoursRequest extends jspb.Message {
  getBusinessHoursId(): string;
  setBusinessHoursId(value: string): void;

  hasDayInterval(): boolean;
  clearDayInterval(): void;
  getDayInterval(): api_commons_org_preferences_pb.DayInterval | undefined;
  setDayInterval(value?: api_commons_org_preferences_pb.DayInterval): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddIntervalToBusinessHoursRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddIntervalToBusinessHoursRequest): AddIntervalToBusinessHoursRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddIntervalToBusinessHoursRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddIntervalToBusinessHoursRequest;
  static deserializeBinaryFromReader(message: AddIntervalToBusinessHoursRequest, reader: jspb.BinaryReader): AddIntervalToBusinessHoursRequest;
}

export namespace AddIntervalToBusinessHoursRequest {
  export type AsObject = {
    businessHoursId: string,
    dayInterval?: api_commons_org_preferences_pb.DayInterval.AsObject,
  }
}

export class AddIntervalToBusinessHoursResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddIntervalToBusinessHoursResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddIntervalToBusinessHoursResponse): AddIntervalToBusinessHoursResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddIntervalToBusinessHoursResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddIntervalToBusinessHoursResponse;
  static deserializeBinaryFromReader(message: AddIntervalToBusinessHoursResponse, reader: jspb.BinaryReader): AddIntervalToBusinessHoursResponse;
}

export namespace AddIntervalToBusinessHoursResponse {
  export type AsObject = {
  }
}

export class RemoveIntervalFromBusinessHoursRequest extends jspb.Message {
  getBusinessHoursId(): string;
  setBusinessHoursId(value: string): void;

  hasDayInterval(): boolean;
  clearDayInterval(): void;
  getDayInterval(): api_commons_org_preferences_pb.DayInterval | undefined;
  setDayInterval(value?: api_commons_org_preferences_pb.DayInterval): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveIntervalFromBusinessHoursRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveIntervalFromBusinessHoursRequest): RemoveIntervalFromBusinessHoursRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveIntervalFromBusinessHoursRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveIntervalFromBusinessHoursRequest;
  static deserializeBinaryFromReader(message: RemoveIntervalFromBusinessHoursRequest, reader: jspb.BinaryReader): RemoveIntervalFromBusinessHoursRequest;
}

export namespace RemoveIntervalFromBusinessHoursRequest {
  export type AsObject = {
    businessHoursId: string,
    dayInterval?: api_commons_org_preferences_pb.DayInterval.AsObject,
  }
}

export class RemoveIntervalFromBusinessHoursResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveIntervalFromBusinessHoursResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveIntervalFromBusinessHoursResponse): RemoveIntervalFromBusinessHoursResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveIntervalFromBusinessHoursResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveIntervalFromBusinessHoursResponse;
  static deserializeBinaryFromReader(message: RemoveIntervalFromBusinessHoursResponse, reader: jspb.BinaryReader): RemoveIntervalFromBusinessHoursResponse;
}

export namespace RemoveIntervalFromBusinessHoursResponse {
  export type AsObject = {
  }
}

export class UpdateBusinessHoursInfoRequest extends jspb.Message {
  getBusinessHoursId(): string;
  setBusinessHoursId(value: string): void;

  getBusinessHoursName(): string;
  setBusinessHoursName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getTimezone(): api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap];
  setTimezone(value: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap]): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessHoursInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessHoursInfoRequest): UpdateBusinessHoursInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBusinessHoursInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessHoursInfoRequest;
  static deserializeBinaryFromReader(message: UpdateBusinessHoursInfoRequest, reader: jspb.BinaryReader): UpdateBusinessHoursInfoRequest;
}

export namespace UpdateBusinessHoursInfoRequest {
  export type AsObject = {
    businessHoursId: string,
    businessHoursName: string,
    description: string,
    timezone: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap],
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateBusinessHoursInfoResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessHoursInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessHoursInfoResponse): UpdateBusinessHoursInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBusinessHoursInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessHoursInfoResponse;
  static deserializeBinaryFromReader(message: UpdateBusinessHoursInfoResponse, reader: jspb.BinaryReader): UpdateBusinessHoursInfoResponse;
}

export namespace UpdateBusinessHoursInfoResponse {
  export type AsObject = {
  }
}

export class DeleteBusinessHoursRequest extends jspb.Message {
  getBusinessHoursId(): string;
  setBusinessHoursId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBusinessHoursRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBusinessHoursRequest): DeleteBusinessHoursRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBusinessHoursRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBusinessHoursRequest;
  static deserializeBinaryFromReader(message: DeleteBusinessHoursRequest, reader: jspb.BinaryReader): DeleteBusinessHoursRequest;
}

export namespace DeleteBusinessHoursRequest {
  export type AsObject = {
    businessHoursId: string,
  }
}

export class DeleteBusinessHoursResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBusinessHoursResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBusinessHoursResponse): DeleteBusinessHoursResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBusinessHoursResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBusinessHoursResponse;
  static deserializeBinaryFromReader(message: DeleteBusinessHoursResponse, reader: jspb.BinaryReader): DeleteBusinessHoursResponse;
}

export namespace DeleteBusinessHoursResponse {
  export type AsObject = {
  }
}

export class EvaluateBusinessHoursRequest extends jspb.Message {
  getBusinessHoursId(): string;
  setBusinessHoursId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvaluateBusinessHoursRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EvaluateBusinessHoursRequest): EvaluateBusinessHoursRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EvaluateBusinessHoursRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvaluateBusinessHoursRequest;
  static deserializeBinaryFromReader(message: EvaluateBusinessHoursRequest, reader: jspb.BinaryReader): EvaluateBusinessHoursRequest;
}

export namespace EvaluateBusinessHoursRequest {
  export type AsObject = {
    businessHoursId: string,
  }
}

export class EvaluateBusinessHoursResponse extends jspb.Message {
  getWithinRange(): boolean;
  setWithinRange(value: boolean): void;

  hasEfficacyTimestamp(): boolean;
  clearEfficacyTimestamp(): void;
  getEfficacyTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEfficacyTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvaluateBusinessHoursResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EvaluateBusinessHoursResponse): EvaluateBusinessHoursResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EvaluateBusinessHoursResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvaluateBusinessHoursResponse;
  static deserializeBinaryFromReader(message: EvaluateBusinessHoursResponse, reader: jspb.BinaryReader): EvaluateBusinessHoursResponse;
}

export namespace EvaluateBusinessHoursResponse {
  export type AsObject = {
    withinRange: boolean,
    efficacyTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

