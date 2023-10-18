// package: api.v1alpha1.room303
// file: api/v1alpha1/room303/room.proto

import * as jspb from "google-protobuf";
import * as api_commons_room303_pb from "../../../api/commons/room303_pb";
import * as api_commons_user_pb from "../../../api/commons/user_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class CreateRoomRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): api_commons_room303_pb.RoomTypeMap[keyof api_commons_room303_pb.RoomTypeMap];
  setType(value: api_commons_room303_pb.RoomTypeMap[keyof api_commons_room303_pb.RoomTypeMap]): void;

  clearMembersList(): void;
  getMembersList(): Array<string>;
  setMembersList(value: Array<string>): void;
  addMembers(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomRequest): CreateRoomRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomRequest;
  static deserializeBinaryFromReader(message: CreateRoomRequest, reader: jspb.BinaryReader): CreateRoomRequest;
}

export namespace CreateRoomRequest {
  export type AsObject = {
    name: string,
    type: api_commons_room303_pb.RoomTypeMap[keyof api_commons_room303_pb.RoomTypeMap],
    membersList: Array<string>,
  }
}

export class GetRoomRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomRequest): GetRoomRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomRequest;
  static deserializeBinaryFromReader(message: GetRoomRequest, reader: jspb.BinaryReader): GetRoomRequest;
}

export namespace GetRoomRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class ListAllRoomsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllRoomsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllRoomsRequest): ListAllRoomsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAllRoomsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllRoomsRequest;
  static deserializeBinaryFromReader(message: ListAllRoomsRequest, reader: jspb.BinaryReader): ListAllRoomsRequest;
}

export namespace ListAllRoomsRequest {
  export type AsObject = {
  }
}

export class ListRoomsForMemberRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomsForMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomsForMemberRequest): ListRoomsForMemberRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRoomsForMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomsForMemberRequest;
  static deserializeBinaryFromReader(message: ListRoomsForMemberRequest, reader: jspb.BinaryReader): ListRoomsForMemberRequest;
}

export namespace ListRoomsForMemberRequest {
  export type AsObject = {
  }
}

export class ListRoomsResponse extends jspb.Message {
  clearRoomsList(): void;
  getRoomsList(): Array<api_commons_room303_pb.Room>;
  setRoomsList(value: Array<api_commons_room303_pb.Room>): void;
  addRooms(value?: api_commons_room303_pb.Room, index?: number): api_commons_room303_pb.Room;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomsResponse): ListRoomsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRoomsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomsResponse;
  static deserializeBinaryFromReader(message: ListRoomsResponse, reader: jspb.BinaryReader): ListRoomsResponse;
}

export namespace ListRoomsResponse {
  export type AsObject = {
    roomsList: Array<api_commons_room303_pb.Room.AsObject>,
  }
}

export class ArchiveRoomRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveRoomRequest): ArchiveRoomRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchiveRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveRoomRequest;
  static deserializeBinaryFromReader(message: ArchiveRoomRequest, reader: jspb.BinaryReader): ArchiveRoomRequest;
}

export namespace ArchiveRoomRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class ListUsersNamesRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getAgent(): boolean;
  setAgent(value: boolean): void;

  getArchivedFilter(): api_commons_user_pb.UserArchivedStateFilterMap[keyof api_commons_user_pb.UserArchivedStateFilterMap];
  setArchivedFilter(value: api_commons_user_pb.UserArchivedStateFilterMap[keyof api_commons_user_pb.UserArchivedStateFilterMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersNamesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersNamesRequest): ListUsersNamesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUsersNamesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersNamesRequest;
  static deserializeBinaryFromReader(message: ListUsersNamesRequest, reader: jspb.BinaryReader): ListUsersNamesRequest;
}

export namespace ListUsersNamesRequest {
  export type AsObject = {
    orgId: string,
    agent: boolean,
    archivedFilter: api_commons_user_pb.UserArchivedStateFilterMap[keyof api_commons_user_pb.UserArchivedStateFilterMap],
  }
}

export class ListUsersNamesResponse extends jspb.Message {
  clearUserDetailsList(): void;
  getUserDetailsList(): Array<UserDetails>;
  setUserDetailsList(value: Array<UserDetails>): void;
  addUserDetails(value?: UserDetails, index?: number): UserDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersNamesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersNamesResponse): ListUsersNamesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUsersNamesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersNamesResponse;
  static deserializeBinaryFromReader(message: ListUsersNamesResponse, reader: jspb.BinaryReader): ListUsersNamesResponse;
}

export namespace ListUsersNamesResponse {
  export type AsObject = {
    userDetailsList: Array<UserDetails.AsObject>,
  }
}

export class UserDetails extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getUserName(): string;
  setUserName(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDetails.AsObject;
  static toObject(includeInstance: boolean, msg: UserDetails): UserDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDetails;
  static deserializeBinaryFromReader(message: UserDetails, reader: jspb.BinaryReader): UserDetails;
}

export namespace UserDetails {
  export type AsObject = {
    userId: string,
    userName: string,
    firstName: string,
    lastName: string,
  }
}

export class UpdateRoomConfigRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): api_commons_room303_pb.RoomConfig | undefined;
  setConfig(value?: api_commons_room303_pb.RoomConfig): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomConfigRequest): UpdateRoomConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRoomConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomConfigRequest;
  static deserializeBinaryFromReader(message: UpdateRoomConfigRequest, reader: jspb.BinaryReader): UpdateRoomConfigRequest;
}

export namespace UpdateRoomConfigRequest {
  export type AsObject = {
    roomId: string,
    config?: api_commons_room303_pb.RoomConfig.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateGlobalConfigRequest extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): api_commons_room303_pb.GlobalConfig | undefined;
  setConfig(value?: api_commons_room303_pb.GlobalConfig): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGlobalConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGlobalConfigRequest): UpdateGlobalConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateGlobalConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGlobalConfigRequest;
  static deserializeBinaryFromReader(message: UpdateGlobalConfigRequest, reader: jspb.BinaryReader): UpdateGlobalConfigRequest;
}

export namespace UpdateGlobalConfigRequest {
  export type AsObject = {
    config?: api_commons_room303_pb.GlobalConfig.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateGlobalConfigResponse extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): api_commons_room303_pb.GlobalConfig | undefined;
  setConfig(value?: api_commons_room303_pb.GlobalConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGlobalConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGlobalConfigResponse): UpdateGlobalConfigResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateGlobalConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGlobalConfigResponse;
  static deserializeBinaryFromReader(message: UpdateGlobalConfigResponse, reader: jspb.BinaryReader): UpdateGlobalConfigResponse;
}

export namespace UpdateGlobalConfigResponse {
  export type AsObject = {
    config?: api_commons_room303_pb.GlobalConfig.AsObject,
  }
}

export class GetGlobalConfigRequest extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): api_commons_room303_pb.GlobalConfig | undefined;
  setConfig(value?: api_commons_room303_pb.GlobalConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGlobalConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGlobalConfigRequest): GetGlobalConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGlobalConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGlobalConfigRequest;
  static deserializeBinaryFromReader(message: GetGlobalConfigRequest, reader: jspb.BinaryReader): GetGlobalConfigRequest;
}

export namespace GetGlobalConfigRequest {
  export type AsObject = {
    config?: api_commons_room303_pb.GlobalConfig.AsObject,
  }
}

export class GetGlobalConfigResponse extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): api_commons_room303_pb.GlobalConfig | undefined;
  setConfig(value?: api_commons_room303_pb.GlobalConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGlobalConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGlobalConfigResponse): GetGlobalConfigResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGlobalConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGlobalConfigResponse;
  static deserializeBinaryFromReader(message: GetGlobalConfigResponse, reader: jspb.BinaryReader): GetGlobalConfigResponse;
}

export namespace GetGlobalConfigResponse {
  export type AsObject = {
    config?: api_commons_room303_pb.GlobalConfig.AsObject,
  }
}

