// package: api.v1alpha1.room303
// file: api/v1alpha1/room303/room.proto

import * as jspb from "google-protobuf";
import * as api_commons_room303_pb from "../../../api/commons/room303_pb";

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

