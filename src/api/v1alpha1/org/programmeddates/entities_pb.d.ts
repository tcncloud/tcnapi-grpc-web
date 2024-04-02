// package: api.v1alpha1.org.programmeddates
// file: api/v1alpha1/org/programmeddates/entities.proto

import * as jspb from "google-protobuf";
import * as api_commons_org_pb from "../../../../api/commons/org_pb";
import * as api_commons_org_preferences_pb from "../../../../api/commons/org/preferences_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class ListProgrammedDatesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProgrammedDatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProgrammedDatesRequest): ListProgrammedDatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProgrammedDatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProgrammedDatesRequest;
  static deserializeBinaryFromReader(message: ListProgrammedDatesRequest, reader: jspb.BinaryReader): ListProgrammedDatesRequest;
}

export namespace ListProgrammedDatesRequest {
  export type AsObject = {
  }
}

export class ListProgrammedDatesResponse extends jspb.Message {
  clearProgrammedDatesList(): void;
  getProgrammedDatesList(): Array<api_commons_org_preferences_pb.ProgrammedDates>;
  setProgrammedDatesList(value: Array<api_commons_org_preferences_pb.ProgrammedDates>): void;
  addProgrammedDates(value?: api_commons_org_preferences_pb.ProgrammedDates, index?: number): api_commons_org_preferences_pb.ProgrammedDates;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProgrammedDatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProgrammedDatesResponse): ListProgrammedDatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProgrammedDatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProgrammedDatesResponse;
  static deserializeBinaryFromReader(message: ListProgrammedDatesResponse, reader: jspb.BinaryReader): ListProgrammedDatesResponse;
}

export namespace ListProgrammedDatesResponse {
  export type AsObject = {
    programmedDatesList: Array<api_commons_org_preferences_pb.ProgrammedDates.AsObject>,
  }
}

export class GetProgrammedDatesRequest extends jspb.Message {
  getProgrammedDatesId(): string;
  setProgrammedDatesId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProgrammedDatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProgrammedDatesRequest): GetProgrammedDatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProgrammedDatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProgrammedDatesRequest;
  static deserializeBinaryFromReader(message: GetProgrammedDatesRequest, reader: jspb.BinaryReader): GetProgrammedDatesRequest;
}

export namespace GetProgrammedDatesRequest {
  export type AsObject = {
    programmedDatesId: string,
  }
}

export class GetProgrammedDatesResponse extends jspb.Message {
  hasProgrammedDates(): boolean;
  clearProgrammedDates(): void;
  getProgrammedDates(): api_commons_org_preferences_pb.ProgrammedDates | undefined;
  setProgrammedDates(value?: api_commons_org_preferences_pb.ProgrammedDates): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProgrammedDatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProgrammedDatesResponse): GetProgrammedDatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProgrammedDatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProgrammedDatesResponse;
  static deserializeBinaryFromReader(message: GetProgrammedDatesResponse, reader: jspb.BinaryReader): GetProgrammedDatesResponse;
}

export namespace GetProgrammedDatesResponse {
  export type AsObject = {
    programmedDates?: api_commons_org_preferences_pb.ProgrammedDates.AsObject,
  }
}

export class SetProgrammedDatesRequest extends jspb.Message {
  getProgrammedDatesName(): string;
  setProgrammedDatesName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getTimezone(): api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap];
  setTimezone(value: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap]): void;

  clearDaysList(): void;
  getDaysList(): Array<api_commons_org_preferences_pb.ProgrammedDay>;
  setDaysList(value: Array<api_commons_org_preferences_pb.ProgrammedDay>): void;
  addDays(value?: api_commons_org_preferences_pb.ProgrammedDay, index?: number): api_commons_org_preferences_pb.ProgrammedDay;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetProgrammedDatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetProgrammedDatesRequest): SetProgrammedDatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetProgrammedDatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetProgrammedDatesRequest;
  static deserializeBinaryFromReader(message: SetProgrammedDatesRequest, reader: jspb.BinaryReader): SetProgrammedDatesRequest;
}

export namespace SetProgrammedDatesRequest {
  export type AsObject = {
    programmedDatesName: string,
    description: string,
    timezone: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap],
    daysList: Array<api_commons_org_preferences_pb.ProgrammedDay.AsObject>,
  }
}

export class SetProgrammedDatesResponse extends jspb.Message {
  getProgrammedDatesId(): string;
  setProgrammedDatesId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetProgrammedDatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetProgrammedDatesResponse): SetProgrammedDatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetProgrammedDatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetProgrammedDatesResponse;
  static deserializeBinaryFromReader(message: SetProgrammedDatesResponse, reader: jspb.BinaryReader): SetProgrammedDatesResponse;
}

export namespace SetProgrammedDatesResponse {
  export type AsObject = {
    programmedDatesId: string,
  }
}

export class AddToProgrammedDatesRequest extends jspb.Message {
  getProgrammedDatesId(): string;
  setProgrammedDatesId(value: string): void;

  hasDay(): boolean;
  clearDay(): void;
  getDay(): api_commons_org_preferences_pb.ProgrammedDay | undefined;
  setDay(value?: api_commons_org_preferences_pb.ProgrammedDay): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddToProgrammedDatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddToProgrammedDatesRequest): AddToProgrammedDatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddToProgrammedDatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddToProgrammedDatesRequest;
  static deserializeBinaryFromReader(message: AddToProgrammedDatesRequest, reader: jspb.BinaryReader): AddToProgrammedDatesRequest;
}

export namespace AddToProgrammedDatesRequest {
  export type AsObject = {
    programmedDatesId: string,
    day?: api_commons_org_preferences_pb.ProgrammedDay.AsObject,
  }
}

export class AddToProgrammedDatesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddToProgrammedDatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddToProgrammedDatesResponse): AddToProgrammedDatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddToProgrammedDatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddToProgrammedDatesResponse;
  static deserializeBinaryFromReader(message: AddToProgrammedDatesResponse, reader: jspb.BinaryReader): AddToProgrammedDatesResponse;
}

export namespace AddToProgrammedDatesResponse {
  export type AsObject = {
  }
}

export class RemoveFromProgrammedDatesRequest extends jspb.Message {
  getProgrammedDatesId(): string;
  setProgrammedDatesId(value: string): void;

  hasDay(): boolean;
  clearDay(): void;
  getDay(): api_commons_org_preferences_pb.ProgrammedDay | undefined;
  setDay(value?: api_commons_org_preferences_pb.ProgrammedDay): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveFromProgrammedDatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveFromProgrammedDatesRequest): RemoveFromProgrammedDatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveFromProgrammedDatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveFromProgrammedDatesRequest;
  static deserializeBinaryFromReader(message: RemoveFromProgrammedDatesRequest, reader: jspb.BinaryReader): RemoveFromProgrammedDatesRequest;
}

export namespace RemoveFromProgrammedDatesRequest {
  export type AsObject = {
    programmedDatesId: string,
    day?: api_commons_org_preferences_pb.ProgrammedDay.AsObject,
  }
}

export class RemoveFromProgrammedDatesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveFromProgrammedDatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveFromProgrammedDatesResponse): RemoveFromProgrammedDatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveFromProgrammedDatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveFromProgrammedDatesResponse;
  static deserializeBinaryFromReader(message: RemoveFromProgrammedDatesResponse, reader: jspb.BinaryReader): RemoveFromProgrammedDatesResponse;
}

export namespace RemoveFromProgrammedDatesResponse {
  export type AsObject = {
  }
}

export class UpdateProgrammedDatesInfoRequest extends jspb.Message {
  getProgrammedDatesId(): string;
  setProgrammedDatesId(value: string): void;

  getProgrammedDatesName(): string;
  setProgrammedDatesName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getTimezone(): api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap];
  setTimezone(value: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap]): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProgrammedDatesInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProgrammedDatesInfoRequest): UpdateProgrammedDatesInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProgrammedDatesInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProgrammedDatesInfoRequest;
  static deserializeBinaryFromReader(message: UpdateProgrammedDatesInfoRequest, reader: jspb.BinaryReader): UpdateProgrammedDatesInfoRequest;
}

export namespace UpdateProgrammedDatesInfoRequest {
  export type AsObject = {
    programmedDatesId: string,
    programmedDatesName: string,
    description: string,
    timezone: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap],
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateProgrammedDatesInfoResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProgrammedDatesInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProgrammedDatesInfoResponse): UpdateProgrammedDatesInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProgrammedDatesInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProgrammedDatesInfoResponse;
  static deserializeBinaryFromReader(message: UpdateProgrammedDatesInfoResponse, reader: jspb.BinaryReader): UpdateProgrammedDatesInfoResponse;
}

export namespace UpdateProgrammedDatesInfoResponse {
  export type AsObject = {
  }
}

export class DeleteProgrammedDatesRequest extends jspb.Message {
  getProgrammedDatesId(): string;
  setProgrammedDatesId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProgrammedDatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProgrammedDatesRequest): DeleteProgrammedDatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteProgrammedDatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProgrammedDatesRequest;
  static deserializeBinaryFromReader(message: DeleteProgrammedDatesRequest, reader: jspb.BinaryReader): DeleteProgrammedDatesRequest;
}

export namespace DeleteProgrammedDatesRequest {
  export type AsObject = {
    programmedDatesId: string,
  }
}

export class DeleteProgrammedDatesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProgrammedDatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProgrammedDatesResponse): DeleteProgrammedDatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteProgrammedDatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProgrammedDatesResponse;
  static deserializeBinaryFromReader(message: DeleteProgrammedDatesResponse, reader: jspb.BinaryReader): DeleteProgrammedDatesResponse;
}

export namespace DeleteProgrammedDatesResponse {
  export type AsObject = {
  }
}

export class EvaluateProgrammedDatesRequest extends jspb.Message {
  getProgrammedDatesId(): string;
  setProgrammedDatesId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvaluateProgrammedDatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EvaluateProgrammedDatesRequest): EvaluateProgrammedDatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EvaluateProgrammedDatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvaluateProgrammedDatesRequest;
  static deserializeBinaryFromReader(message: EvaluateProgrammedDatesRequest, reader: jspb.BinaryReader): EvaluateProgrammedDatesRequest;
}

export namespace EvaluateProgrammedDatesRequest {
  export type AsObject = {
    programmedDatesId: string,
  }
}

export class EvaluateProgrammedDatesResponse extends jspb.Message {
  getDateMatched(): boolean;
  setDateMatched(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvaluateProgrammedDatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EvaluateProgrammedDatesResponse): EvaluateProgrammedDatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EvaluateProgrammedDatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvaluateProgrammedDatesResponse;
  static deserializeBinaryFromReader(message: EvaluateProgrammedDatesResponse, reader: jspb.BinaryReader): EvaluateProgrammedDatesResponse;
}

export namespace EvaluateProgrammedDatesResponse {
  export type AsObject = {
    dateMatched: boolean,
  }
}

