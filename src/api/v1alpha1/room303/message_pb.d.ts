// package: api.v1alpha1.room303
// file: api/v1alpha1/room303/message.proto

import * as jspb from "google-protobuf";
import * as api_commons_room303_pb from "../../../api/commons/room303_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CreateMessageRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): void;

  getPayload(): string;
  setPayload(value: string): void;

  getNonce(): string;
  setNonce(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMessageRequest): CreateMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMessageRequest;
  static deserializeBinaryFromReader(message: CreateMessageRequest, reader: jspb.BinaryReader): CreateMessageRequest;
}

export namespace CreateMessageRequest {
  export type AsObject = {
    roomId: string,
    payload: string,
    nonce: string,
  }
}

export class CreateMessageResponse extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): api_commons_room303_pb.Message | undefined;
  setMessage(value?: api_commons_room303_pb.Message): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMessageResponse): CreateMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMessageResponse;
  static deserializeBinaryFromReader(message: CreateMessageResponse, reader: jspb.BinaryReader): CreateMessageResponse;
}

export namespace CreateMessageResponse {
  export type AsObject = {
    message?: api_commons_room303_pb.Message.AsObject,
  }
}

export class EditMessageRequest extends jspb.Message {
  getMessageId(): string;
  setMessageId(value: string): void;

  getPayload(): string;
  setPayload(value: string): void;

  getRoomId(): string;
  setRoomId(value: string): void;

  getNonce(): string;
  setNonce(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditMessageRequest): EditMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditMessageRequest;
  static deserializeBinaryFromReader(message: EditMessageRequest, reader: jspb.BinaryReader): EditMessageRequest;
}

export namespace EditMessageRequest {
  export type AsObject = {
    messageId: string,
    payload: string,
    roomId: string,
    nonce: string,
  }
}

export class EditMessageResponse extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): api_commons_room303_pb.Message | undefined;
  setMessage(value?: api_commons_room303_pb.Message): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EditMessageResponse): EditMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditMessageResponse;
  static deserializeBinaryFromReader(message: EditMessageResponse, reader: jspb.BinaryReader): EditMessageResponse;
}

export namespace EditMessageResponse {
  export type AsObject = {
    message?: api_commons_room303_pb.Message.AsObject,
  }
}

export class GetMessagesRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): void;

  hasOffset(): boolean;
  clearOffset(): void;
  getOffset(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOffset(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMessagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMessagesRequest): GetMessagesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMessagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMessagesRequest;
  static deserializeBinaryFromReader(message: GetMessagesRequest, reader: jspb.BinaryReader): GetMessagesRequest;
}

export namespace GetMessagesRequest {
  export type AsObject = {
    roomId: string,
    offset?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetMessagesResponse extends jspb.Message {
  clearMessagesList(): void;
  getMessagesList(): Array<api_commons_room303_pb.Message>;
  setMessagesList(value: Array<api_commons_room303_pb.Message>): void;
  addMessages(value?: api_commons_room303_pb.Message, index?: number): api_commons_room303_pb.Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMessagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMessagesResponse): GetMessagesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMessagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMessagesResponse;
  static deserializeBinaryFromReader(message: GetMessagesResponse, reader: jspb.BinaryReader): GetMessagesResponse;
}

export namespace GetMessagesResponse {
  export type AsObject = {
    messagesList: Array<api_commons_room303_pb.Message.AsObject>,
  }
}

export class StreamMessageUpdatesRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): void;

  getMemberId(): string;
  setMemberId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamMessageUpdatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamMessageUpdatesRequest): StreamMessageUpdatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamMessageUpdatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamMessageUpdatesRequest;
  static deserializeBinaryFromReader(message: StreamMessageUpdatesRequest, reader: jspb.BinaryReader): StreamMessageUpdatesRequest;
}

export namespace StreamMessageUpdatesRequest {
  export type AsObject = {
    roomId: string,
    memberId: string,
  }
}

export class StreamMessageUpdatesResponse extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): api_commons_room303_pb.Message | undefined;
  setMessage(value?: api_commons_room303_pb.Message): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamMessageUpdatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamMessageUpdatesResponse): StreamMessageUpdatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamMessageUpdatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamMessageUpdatesResponse;
  static deserializeBinaryFromReader(message: StreamMessageUpdatesResponse, reader: jspb.BinaryReader): StreamMessageUpdatesResponse;
}

export namespace StreamMessageUpdatesResponse {
  export type AsObject = {
    message?: api_commons_room303_pb.Message.AsObject,
  }
}

export class MarkMessageReadRequest extends jspb.Message {
  getMessageId(): string;
  setMessageId(value: string): void;

  getMemberId(): string;
  setMemberId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkMessageReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarkMessageReadRequest): MarkMessageReadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkMessageReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkMessageReadRequest;
  static deserializeBinaryFromReader(message: MarkMessageReadRequest, reader: jspb.BinaryReader): MarkMessageReadRequest;
}

export namespace MarkMessageReadRequest {
  export type AsObject = {
    messageId: string,
    memberId: string,
  }
}

export class MarkMessageReadResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkMessageReadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarkMessageReadResponse): MarkMessageReadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkMessageReadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkMessageReadResponse;
  static deserializeBinaryFromReader(message: MarkMessageReadResponse, reader: jspb.BinaryReader): MarkMessageReadResponse;
}

export namespace MarkMessageReadResponse {
  export type AsObject = {
  }
}

export class MarkAllMessagesReadRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkAllMessagesReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarkAllMessagesReadRequest): MarkAllMessagesReadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkAllMessagesReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkAllMessagesReadRequest;
  static deserializeBinaryFromReader(message: MarkAllMessagesReadRequest, reader: jspb.BinaryReader): MarkAllMessagesReadRequest;
}

export namespace MarkAllMessagesReadRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class MarkAllMessagesReadResponse extends jspb.Message {
  clearRowsUpdatedList(): void;
  getRowsUpdatedList(): Array<api_commons_room303_pb.Message>;
  setRowsUpdatedList(value: Array<api_commons_room303_pb.Message>): void;
  addRowsUpdated(value?: api_commons_room303_pb.Message, index?: number): api_commons_room303_pb.Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkAllMessagesReadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarkAllMessagesReadResponse): MarkAllMessagesReadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkAllMessagesReadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkAllMessagesReadResponse;
  static deserializeBinaryFromReader(message: MarkAllMessagesReadResponse, reader: jspb.BinaryReader): MarkAllMessagesReadResponse;
}

export namespace MarkAllMessagesReadResponse {
  export type AsObject = {
    rowsUpdatedList: Array<api_commons_room303_pb.Message.AsObject>,
  }
}

export class GetUnreadStatsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnreadStatsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnreadStatsRequest): GetUnreadStatsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUnreadStatsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnreadStatsRequest;
  static deserializeBinaryFromReader(message: GetUnreadStatsRequest, reader: jspb.BinaryReader): GetUnreadStatsRequest;
}

export namespace GetUnreadStatsRequest {
  export type AsObject = {
  }
}

export class GetUnreadStatsResponse extends jspb.Message {
  clearStatsList(): void;
  getStatsList(): Array<api_commons_room303_pb.MessageStat>;
  setStatsList(value: Array<api_commons_room303_pb.MessageStat>): void;
  addStats(value?: api_commons_room303_pb.MessageStat, index?: number): api_commons_room303_pb.MessageStat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnreadStatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnreadStatsResponse): GetUnreadStatsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUnreadStatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnreadStatsResponse;
  static deserializeBinaryFromReader(message: GetUnreadStatsResponse, reader: jspb.BinaryReader): GetUnreadStatsResponse;
}

export namespace GetUnreadStatsResponse {
  export type AsObject = {
    statsList: Array<api_commons_room303_pb.MessageStat.AsObject>,
  }
}

export class DeleteMessageRequest extends jspb.Message {
  getMessageId(): string;
  setMessageId(value: string): void;

  getRoomId(): string;
  setRoomId(value: string): void;

  getNonce(): string;
  setNonce(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMessageRequest): DeleteMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMessageRequest;
  static deserializeBinaryFromReader(message: DeleteMessageRequest, reader: jspb.BinaryReader): DeleteMessageRequest;
}

export namespace DeleteMessageRequest {
  export type AsObject = {
    messageId: string,
    roomId: string,
    nonce: string,
  }
}

export class DeleteMessageResponse extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): api_commons_room303_pb.Message | undefined;
  setMessage(value?: api_commons_room303_pb.Message): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMessageResponse): DeleteMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMessageResponse;
  static deserializeBinaryFromReader(message: DeleteMessageResponse, reader: jspb.BinaryReader): DeleteMessageResponse;
}

export namespace DeleteMessageResponse {
  export type AsObject = {
    message?: api_commons_room303_pb.Message.AsObject,
  }
}

export class BulkMarkMessageReadRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): void;

  clearMessageIdsList(): void;
  getMessageIdsList(): Array<string>;
  setMessageIdsList(value: Array<string>): void;
  addMessageIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulkMarkMessageReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BulkMarkMessageReadRequest): BulkMarkMessageReadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BulkMarkMessageReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulkMarkMessageReadRequest;
  static deserializeBinaryFromReader(message: BulkMarkMessageReadRequest, reader: jspb.BinaryReader): BulkMarkMessageReadRequest;
}

export namespace BulkMarkMessageReadRequest {
  export type AsObject = {
    roomId: string,
    messageIdsList: Array<string>,
  }
}

export class BulkMarkMessageReadResponse extends jspb.Message {
  clearMessagesList(): void;
  getMessagesList(): Array<api_commons_room303_pb.Message>;
  setMessagesList(value: Array<api_commons_room303_pb.Message>): void;
  addMessages(value?: api_commons_room303_pb.Message, index?: number): api_commons_room303_pb.Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulkMarkMessageReadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BulkMarkMessageReadResponse): BulkMarkMessageReadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BulkMarkMessageReadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulkMarkMessageReadResponse;
  static deserializeBinaryFromReader(message: BulkMarkMessageReadResponse, reader: jspb.BinaryReader): BulkMarkMessageReadResponse;
}

export namespace BulkMarkMessageReadResponse {
  export type AsObject = {
    messagesList: Array<api_commons_room303_pb.Message.AsObject>,
  }
}

