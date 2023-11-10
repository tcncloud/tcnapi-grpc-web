// package: api.commons
// file: api/commons/room303.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class UserSid extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getFullName(): string;
  setFullName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSid.AsObject;
  static toObject(includeInstance: boolean, msg: UserSid): UserSid.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserSid, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSid;
  static deserializeBinaryFromReader(message: UserSid, reader: jspb.BinaryReader): UserSid;
}

export namespace UserSid {
  export type AsObject = {
    userId: string,
    fullName: string,
    displayName: string,
  }
}

export class Member extends jspb.Message {
  hasUserSid(): boolean;
  clearUserSid(): void;
  getUserSid(): UserSid | undefined;
  setUserSid(value?: UserSid): void;

  hasAddedBy(): boolean;
  clearAddedBy(): void;
  getAddedBy(): UserSid | undefined;
  setAddedBy(value?: UserSid): void;

  hasAddedAt(): boolean;
  clearAddedAt(): void;
  getAddedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAddedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getRoomId(): string;
  setRoomId(value: string): void;

  getAdmin(): boolean;
  setAdmin(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Member.AsObject;
  static toObject(includeInstance: boolean, msg: Member): Member.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Member, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Member;
  static deserializeBinaryFromReader(message: Member, reader: jspb.BinaryReader): Member;
}

export namespace Member {
  export type AsObject = {
    userSid?: UserSid.AsObject,
    addedBy?: UserSid.AsObject,
    addedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    roomId: string,
    admin: boolean,
  }
}

export class Room extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getRoomId(): string;
  setRoomId(value: string): void;

  getType(): RoomTypeMap[keyof RoomTypeMap];
  setType(value: RoomTypeMap[keyof RoomTypeMap]): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): RoomStatusMap[keyof RoomStatusMap];
  setStatus(value: RoomStatusMap[keyof RoomStatusMap]): void;

  getId(): string;
  setId(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): RoomConfig | undefined;
  setConfig(value?: RoomConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Room.AsObject;
  static toObject(includeInstance: boolean, msg: Room): Room.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Room, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Room;
  static deserializeBinaryFromReader(message: Room, reader: jspb.BinaryReader): Room;
}

export namespace Room {
  export type AsObject = {
    orgId: string,
    roomId: string,
    type: RoomTypeMap[keyof RoomTypeMap],
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: RoomStatusMap[keyof RoomStatusMap],
    id: string,
    displayName: string,
    config?: RoomConfig.AsObject,
  }
}

export class Message extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getMessageId(): string;
  setMessageId(value: string): void;

  getRoomId(): string;
  setRoomId(value: string): void;

  hasFromUser(): boolean;
  clearFromUser(): void;
  getFromUser(): UserSid | undefined;
  setFromUser(value?: UserSid): void;

  getStatus(): MessageStatusMap[keyof MessageStatusMap];
  setStatus(value: MessageStatusMap[keyof MessageStatusMap]): void;

  hasReceivedAt(): boolean;
  clearReceivedAt(): void;
  getReceivedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReceivedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPayload(): string;
  setPayload(value: string): void;

  getUnread(): boolean;
  setUnread(value: boolean): void;

  getNonce(): string;
  setNonce(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    orgId: string,
    messageId: string,
    roomId: string,
    fromUser?: UserSid.AsObject,
    status: MessageStatusMap[keyof MessageStatusMap],
    receivedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    payload: string,
    unread: boolean,
    nonce: string,
  }
}

export class MessageStat extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): void;

  getUnreadMessages(): number;
  setUnreadMessages(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageStat.AsObject;
  static toObject(includeInstance: boolean, msg: MessageStat): MessageStat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageStat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageStat;
  static deserializeBinaryFromReader(message: MessageStat, reader: jspb.BinaryReader): MessageStat;
}

export namespace MessageStat {
  export type AsObject = {
    roomId: string,
    unreadMessages: number,
  }
}

export class GlobalConfig extends jspb.Message {
  getCreateRoom(): ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap];
  setCreateRoom(value: ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap]): void;

  getJoinExistingRoom(): ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap];
  setJoinExistingRoom(value: ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap]): void;

  getSendMessageToSupervisor(): ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap];
  setSendMessageToSupervisor(value: ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap]): void;

  getSendMessageToNonSupervisor(): ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap];
  setSendMessageToNonSupervisor(value: ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GlobalConfig.AsObject;
  static toObject(includeInstance: boolean, msg: GlobalConfig): GlobalConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GlobalConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GlobalConfig;
  static deserializeBinaryFromReader(message: GlobalConfig, reader: jspb.BinaryReader): GlobalConfig;
}

export namespace GlobalConfig {
  export type AsObject = {
    createRoom: ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap],
    joinExistingRoom: ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap],
    sendMessageToSupervisor: ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap],
    sendMessageToNonSupervisor: ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap],
  }
}

export class RoomConfig extends jspb.Message {
  getAddUser(): ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap];
  setAddUser(value: ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap]): void;

  getRemoveUser(): ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap];
  setRemoveUser(value: ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap]): void;

  getPromoteToAdmin(): ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap];
  setPromoteToAdmin(value: ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap]): void;

  getReadMessages(): ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap];
  setReadMessages(value: ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap]): void;

  getSendMessage(): ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap];
  setSendMessage(value: ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap]): void;

  getArchiveRoom(): ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap];
  setArchiveRoom(value: ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RoomConfig): RoomConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoomConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomConfig;
  static deserializeBinaryFromReader(message: RoomConfig, reader: jspb.BinaryReader): RoomConfig;
}

export namespace RoomConfig {
  export type AsObject = {
    addUser: ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap],
    removeUser: ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap],
    promoteToAdmin: ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap],
    readMessages: ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap],
    sendMessage: ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap],
    archiveRoom: ConfigPermissionEnumMap[keyof ConfigPermissionEnumMap],
  }
}

export interface RoomTypeMap {
  ROOM_TYPE_DIRECT: 0;
  ROOM_TYPE_MULTI: 1;
  ROOM_TYPE_SYSTEM: 2;
  ROOM_TYPE_GLOBAL_SYSTEM: 3;
}

export const RoomType: RoomTypeMap;

export interface MessageStatusMap {
  MESSAGE_STATUS_ACTIVE: 0;
  MESSAGE_STATUS_EDITED: 1;
  MESSAGE_STATUS_ARCHIVED: 2;
}

export const MessageStatus: MessageStatusMap;

export interface RoomStatusMap {
  ROOM_STATUS_ACTIVE: 0;
  ROOM_STATUS_ARCHIVED: 1;
  ROOM_STATUS_DELETED: 2;
}

export const RoomStatus: RoomStatusMap;

export interface ConfigPermissionEnumMap {
  LIMITED: 0;
  ROOM303_MEMBER: 1;
  ROOM303_SUPERVISOR: 2;
}

export const ConfigPermissionEnum: ConfigPermissionEnumMap;

