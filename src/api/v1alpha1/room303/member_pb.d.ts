// package: api.v1alpha1.room303
// file: api/v1alpha1/room303/member.proto

import * as jspb from "google-protobuf";
import * as api_commons_room303_pb from "../../../api/commons/room303_pb";

export class AddRoomMemberRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getAdmin(): boolean;
  setAdmin(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRoomMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddRoomMemberRequest): AddRoomMemberRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddRoomMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRoomMemberRequest;
  static deserializeBinaryFromReader(message: AddRoomMemberRequest, reader: jspb.BinaryReader): AddRoomMemberRequest;
}

export namespace AddRoomMemberRequest {
  export type AsObject = {
    roomId: string,
    userId: string,
    admin: boolean,
  }
}

export class RemoveRoomMemberRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getRoomId(): string;
  setRoomId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRoomMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRoomMemberRequest): RemoveRoomMemberRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveRoomMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRoomMemberRequest;
  static deserializeBinaryFromReader(message: RemoveRoomMemberRequest, reader: jspb.BinaryReader): RemoveRoomMemberRequest;
}

export namespace RemoveRoomMemberRequest {
  export type AsObject = {
    userId: string,
    roomId: string,
  }
}

export class RemoveRoomMemberResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRoomMemberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRoomMemberResponse): RemoveRoomMemberResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveRoomMemberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRoomMemberResponse;
  static deserializeBinaryFromReader(message: RemoveRoomMemberResponse, reader: jspb.BinaryReader): RemoveRoomMemberResponse;
}

export namespace RemoveRoomMemberResponse {
  export type AsObject = {
  }
}

export class ListRoomMembersRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomMembersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomMembersRequest): ListRoomMembersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRoomMembersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomMembersRequest;
  static deserializeBinaryFromReader(message: ListRoomMembersRequest, reader: jspb.BinaryReader): ListRoomMembersRequest;
}

export namespace ListRoomMembersRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class ListRoomMembersResponse extends jspb.Message {
  clearMembersList(): void;
  getMembersList(): Array<api_commons_room303_pb.Member>;
  setMembersList(value: Array<api_commons_room303_pb.Member>): void;
  addMembers(value?: api_commons_room303_pb.Member, index?: number): api_commons_room303_pb.Member;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomMembersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomMembersResponse): ListRoomMembersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRoomMembersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomMembersResponse;
  static deserializeBinaryFromReader(message: ListRoomMembersResponse, reader: jspb.BinaryReader): ListRoomMembersResponse;
}

export namespace ListRoomMembersResponse {
  export type AsObject = {
    membersList: Array<api_commons_room303_pb.Member.AsObject>,
  }
}

export class SetAdminForRoomMemberRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAdminForRoomMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetAdminForRoomMemberRequest): SetAdminForRoomMemberRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetAdminForRoomMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAdminForRoomMemberRequest;
  static deserializeBinaryFromReader(message: SetAdminForRoomMemberRequest, reader: jspb.BinaryReader): SetAdminForRoomMemberRequest;
}

export namespace SetAdminForRoomMemberRequest {
  export type AsObject = {
    roomId: string,
    userId: string,
  }
}

export class SetAdminForRoomMemberResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAdminForRoomMemberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetAdminForRoomMemberResponse): SetAdminForRoomMemberResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetAdminForRoomMemberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAdminForRoomMemberResponse;
  static deserializeBinaryFromReader(message: SetAdminForRoomMemberResponse, reader: jspb.BinaryReader): SetAdminForRoomMemberResponse;
}

export namespace SetAdminForRoomMemberResponse {
  export type AsObject = {
  }
}

export class JoinRoomRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinRoomRequest): JoinRoomRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinRoomRequest;
  static deserializeBinaryFromReader(message: JoinRoomRequest, reader: jspb.BinaryReader): JoinRoomRequest;
}

export namespace JoinRoomRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class GetRoomMemberRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomMemberRequest): GetRoomMemberRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRoomMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomMemberRequest;
  static deserializeBinaryFromReader(message: GetRoomMemberRequest, reader: jspb.BinaryReader): GetRoomMemberRequest;
}

export namespace GetRoomMemberRequest {
  export type AsObject = {
    roomId: string,
    userId: string,
  }
}

