// package: api.v1alpha1.room303
// file: api/v1alpha1/room303/service.proto

import * as api_v1alpha1_room303_service_pb from "../../../api/v1alpha1/room303/service_pb";
import * as api_commons_room303_pb from "../../../api/commons/room303_pb";
import * as api_v1alpha1_room303_member_pb from "../../../api/v1alpha1/room303/member_pb";
import * as api_v1alpha1_room303_message_pb from "../../../api/v1alpha1/room303/message_pb";
import * as api_v1alpha1_room303_room_pb from "../../../api/v1alpha1/room303/room_pb";
import {grpc} from "@improbable-eng/grpc-web";

type Room303APIAddRoomMember = {
  readonly methodName: string;
  readonly service: typeof Room303API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_room303_member_pb.AddRoomMemberRequest;
  readonly responseType: typeof api_commons_room303_pb.Member;
};

type Room303APIRemoveRoomMember = {
  readonly methodName: string;
  readonly service: typeof Room303API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_room303_member_pb.RemoveRoomMemberRequest;
  readonly responseType: typeof api_v1alpha1_room303_member_pb.RemoveRoomMemberResponse;
};

type Room303APIListRoomMembers = {
  readonly methodName: string;
  readonly service: typeof Room303API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_room303_member_pb.ListRoomMembersRequest;
  readonly responseType: typeof api_v1alpha1_room303_member_pb.ListRoomMembersResponse;
};

type Room303APISetAdminForRoomMember = {
  readonly methodName: string;
  readonly service: typeof Room303API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_room303_member_pb.SetAdminForRoomMemberRequest;
  readonly responseType: typeof api_v1alpha1_room303_member_pb.SetAdminForRoomMemberResponse;
};

type Room303APIJoinRoom = {
  readonly methodName: string;
  readonly service: typeof Room303API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_room303_member_pb.JoinRoomRequest;
  readonly responseType: typeof api_commons_room303_pb.Room;
};

type Room303APIGetRoomMember = {
  readonly methodName: string;
  readonly service: typeof Room303API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_room303_member_pb.GetRoomMemberRequest;
  readonly responseType: typeof api_commons_room303_pb.Member;
};

type Room303APICreateMessage = {
  readonly methodName: string;
  readonly service: typeof Room303API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_room303_message_pb.CreateMessageRequest;
  readonly responseType: typeof api_v1alpha1_room303_message_pb.CreateMessageResponse;
};

type Room303APIEditMessage = {
  readonly methodName: string;
  readonly service: typeof Room303API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_room303_message_pb.EditMessageRequest;
  readonly responseType: typeof api_v1alpha1_room303_message_pb.EditMessageResponse;
};

type Room303APIDeleteMessage = {
  readonly methodName: string;
  readonly service: typeof Room303API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_room303_message_pb.DeleteMessageRequest;
  readonly responseType: typeof api_v1alpha1_room303_message_pb.DeleteMessageResponse;
};

type Room303APIGetMessages = {
  readonly methodName: string;
  readonly service: typeof Room303API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_room303_message_pb.GetMessagesRequest;
  readonly responseType: typeof api_v1alpha1_room303_message_pb.GetMessagesResponse;
};

type Room303APIStreamMessageUpdates = {
  readonly methodName: string;
  readonly service: typeof Room303API;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_room303_message_pb.StreamMessageUpdatesRequest;
  readonly responseType: typeof api_v1alpha1_room303_message_pb.StreamMessageUpdatesResponse;
};

type Room303APIGetUnreadStats = {
  readonly methodName: string;
  readonly service: typeof Room303API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_room303_message_pb.GetUnreadStatsRequest;
  readonly responseType: typeof api_v1alpha1_room303_message_pb.GetUnreadStatsResponse;
};

type Room303APIMarkMessageRead = {
  readonly methodName: string;
  readonly service: typeof Room303API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_room303_message_pb.MarkMessageReadRequest;
  readonly responseType: typeof api_v1alpha1_room303_message_pb.MarkMessageReadResponse;
};

type Room303APIMarkAllMessagesRead = {
  readonly methodName: string;
  readonly service: typeof Room303API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_room303_message_pb.MarkAllMessagesReadRequest;
  readonly responseType: typeof api_v1alpha1_room303_message_pb.MarkAllMessagesReadResponse;
};

type Room303APIBulkMarkMessageRead = {
  readonly methodName: string;
  readonly service: typeof Room303API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_room303_message_pb.BulkMarkMessageReadRequest;
  readonly responseType: typeof api_v1alpha1_room303_message_pb.BulkMarkMessageReadResponse;
};

type Room303APICreateRoom = {
  readonly methodName: string;
  readonly service: typeof Room303API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_room303_room_pb.CreateRoomRequest;
  readonly responseType: typeof api_commons_room303_pb.Room;
};

type Room303APIGetRoom = {
  readonly methodName: string;
  readonly service: typeof Room303API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_room303_room_pb.GetRoomRequest;
  readonly responseType: typeof api_commons_room303_pb.Room;
};

type Room303APIListAllRooms = {
  readonly methodName: string;
  readonly service: typeof Room303API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_room303_room_pb.ListAllRoomsRequest;
  readonly responseType: typeof api_v1alpha1_room303_room_pb.ListRoomsResponse;
};

type Room303APIListRoomsForMember = {
  readonly methodName: string;
  readonly service: typeof Room303API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_room303_room_pb.ListRoomsForMemberRequest;
  readonly responseType: typeof api_v1alpha1_room303_room_pb.ListRoomsResponse;
};

type Room303APIArchiveRoom = {
  readonly methodName: string;
  readonly service: typeof Room303API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_room303_room_pb.ArchiveRoomRequest;
  readonly responseType: typeof api_commons_room303_pb.Room;
};

type Room303APIListUsersByOrgId = {
  readonly methodName: string;
  readonly service: typeof Room303API;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_room303_room_pb.ListUsersByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_room303_room_pb.ListUsersByOrgIdResponse;
};

export class Room303API {
  static readonly serviceName: string;
  static readonly AddRoomMember: Room303APIAddRoomMember;
  static readonly RemoveRoomMember: Room303APIRemoveRoomMember;
  static readonly ListRoomMembers: Room303APIListRoomMembers;
  static readonly SetAdminForRoomMember: Room303APISetAdminForRoomMember;
  static readonly JoinRoom: Room303APIJoinRoom;
  static readonly GetRoomMember: Room303APIGetRoomMember;
  static readonly CreateMessage: Room303APICreateMessage;
  static readonly EditMessage: Room303APIEditMessage;
  static readonly DeleteMessage: Room303APIDeleteMessage;
  static readonly GetMessages: Room303APIGetMessages;
  static readonly StreamMessageUpdates: Room303APIStreamMessageUpdates;
  static readonly GetUnreadStats: Room303APIGetUnreadStats;
  static readonly MarkMessageRead: Room303APIMarkMessageRead;
  static readonly MarkAllMessagesRead: Room303APIMarkAllMessagesRead;
  static readonly BulkMarkMessageRead: Room303APIBulkMarkMessageRead;
  static readonly CreateRoom: Room303APICreateRoom;
  static readonly GetRoom: Room303APIGetRoom;
  static readonly ListAllRooms: Room303APIListAllRooms;
  static readonly ListRoomsForMember: Room303APIListRoomsForMember;
  static readonly ArchiveRoom: Room303APIArchiveRoom;
  static readonly ListUsersByOrgId: Room303APIListUsersByOrgId;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class Room303APIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  addRoomMember(
    requestMessage: api_v1alpha1_room303_member_pb.AddRoomMemberRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_room303_pb.Member|null) => void
  ): UnaryResponse;
  addRoomMember(
    requestMessage: api_v1alpha1_room303_member_pb.AddRoomMemberRequest,
    callback: (error: ServiceError|null, responseMessage: api_commons_room303_pb.Member|null) => void
  ): UnaryResponse;
  removeRoomMember(
    requestMessage: api_v1alpha1_room303_member_pb.RemoveRoomMemberRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_member_pb.RemoveRoomMemberResponse|null) => void
  ): UnaryResponse;
  removeRoomMember(
    requestMessage: api_v1alpha1_room303_member_pb.RemoveRoomMemberRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_member_pb.RemoveRoomMemberResponse|null) => void
  ): UnaryResponse;
  listRoomMembers(
    requestMessage: api_v1alpha1_room303_member_pb.ListRoomMembersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_member_pb.ListRoomMembersResponse|null) => void
  ): UnaryResponse;
  listRoomMembers(
    requestMessage: api_v1alpha1_room303_member_pb.ListRoomMembersRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_member_pb.ListRoomMembersResponse|null) => void
  ): UnaryResponse;
  setAdminForRoomMember(
    requestMessage: api_v1alpha1_room303_member_pb.SetAdminForRoomMemberRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_member_pb.SetAdminForRoomMemberResponse|null) => void
  ): UnaryResponse;
  setAdminForRoomMember(
    requestMessage: api_v1alpha1_room303_member_pb.SetAdminForRoomMemberRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_member_pb.SetAdminForRoomMemberResponse|null) => void
  ): UnaryResponse;
  joinRoom(
    requestMessage: api_v1alpha1_room303_member_pb.JoinRoomRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_room303_pb.Room|null) => void
  ): UnaryResponse;
  joinRoom(
    requestMessage: api_v1alpha1_room303_member_pb.JoinRoomRequest,
    callback: (error: ServiceError|null, responseMessage: api_commons_room303_pb.Room|null) => void
  ): UnaryResponse;
  getRoomMember(
    requestMessage: api_v1alpha1_room303_member_pb.GetRoomMemberRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_room303_pb.Member|null) => void
  ): UnaryResponse;
  getRoomMember(
    requestMessage: api_v1alpha1_room303_member_pb.GetRoomMemberRequest,
    callback: (error: ServiceError|null, responseMessage: api_commons_room303_pb.Member|null) => void
  ): UnaryResponse;
  createMessage(
    requestMessage: api_v1alpha1_room303_message_pb.CreateMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_message_pb.CreateMessageResponse|null) => void
  ): UnaryResponse;
  createMessage(
    requestMessage: api_v1alpha1_room303_message_pb.CreateMessageRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_message_pb.CreateMessageResponse|null) => void
  ): UnaryResponse;
  editMessage(
    requestMessage: api_v1alpha1_room303_message_pb.EditMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_message_pb.EditMessageResponse|null) => void
  ): UnaryResponse;
  editMessage(
    requestMessage: api_v1alpha1_room303_message_pb.EditMessageRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_message_pb.EditMessageResponse|null) => void
  ): UnaryResponse;
  deleteMessage(
    requestMessage: api_v1alpha1_room303_message_pb.DeleteMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_message_pb.DeleteMessageResponse|null) => void
  ): UnaryResponse;
  deleteMessage(
    requestMessage: api_v1alpha1_room303_message_pb.DeleteMessageRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_message_pb.DeleteMessageResponse|null) => void
  ): UnaryResponse;
  getMessages(
    requestMessage: api_v1alpha1_room303_message_pb.GetMessagesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_message_pb.GetMessagesResponse|null) => void
  ): UnaryResponse;
  getMessages(
    requestMessage: api_v1alpha1_room303_message_pb.GetMessagesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_message_pb.GetMessagesResponse|null) => void
  ): UnaryResponse;
  streamMessageUpdates(requestMessage: api_v1alpha1_room303_message_pb.StreamMessageUpdatesRequest, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_room303_message_pb.StreamMessageUpdatesResponse>;
  getUnreadStats(
    requestMessage: api_v1alpha1_room303_message_pb.GetUnreadStatsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_message_pb.GetUnreadStatsResponse|null) => void
  ): UnaryResponse;
  getUnreadStats(
    requestMessage: api_v1alpha1_room303_message_pb.GetUnreadStatsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_message_pb.GetUnreadStatsResponse|null) => void
  ): UnaryResponse;
  markMessageRead(
    requestMessage: api_v1alpha1_room303_message_pb.MarkMessageReadRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_message_pb.MarkMessageReadResponse|null) => void
  ): UnaryResponse;
  markMessageRead(
    requestMessage: api_v1alpha1_room303_message_pb.MarkMessageReadRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_message_pb.MarkMessageReadResponse|null) => void
  ): UnaryResponse;
  markAllMessagesRead(
    requestMessage: api_v1alpha1_room303_message_pb.MarkAllMessagesReadRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_message_pb.MarkAllMessagesReadResponse|null) => void
  ): UnaryResponse;
  markAllMessagesRead(
    requestMessage: api_v1alpha1_room303_message_pb.MarkAllMessagesReadRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_message_pb.MarkAllMessagesReadResponse|null) => void
  ): UnaryResponse;
  bulkMarkMessageRead(
    requestMessage: api_v1alpha1_room303_message_pb.BulkMarkMessageReadRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_message_pb.BulkMarkMessageReadResponse|null) => void
  ): UnaryResponse;
  bulkMarkMessageRead(
    requestMessage: api_v1alpha1_room303_message_pb.BulkMarkMessageReadRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_message_pb.BulkMarkMessageReadResponse|null) => void
  ): UnaryResponse;
  createRoom(
    requestMessage: api_v1alpha1_room303_room_pb.CreateRoomRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_room303_pb.Room|null) => void
  ): UnaryResponse;
  createRoom(
    requestMessage: api_v1alpha1_room303_room_pb.CreateRoomRequest,
    callback: (error: ServiceError|null, responseMessage: api_commons_room303_pb.Room|null) => void
  ): UnaryResponse;
  getRoom(
    requestMessage: api_v1alpha1_room303_room_pb.GetRoomRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_room303_pb.Room|null) => void
  ): UnaryResponse;
  getRoom(
    requestMessage: api_v1alpha1_room303_room_pb.GetRoomRequest,
    callback: (error: ServiceError|null, responseMessage: api_commons_room303_pb.Room|null) => void
  ): UnaryResponse;
  listAllRooms(
    requestMessage: api_v1alpha1_room303_room_pb.ListAllRoomsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_room_pb.ListRoomsResponse|null) => void
  ): UnaryResponse;
  listAllRooms(
    requestMessage: api_v1alpha1_room303_room_pb.ListAllRoomsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_room_pb.ListRoomsResponse|null) => void
  ): UnaryResponse;
  listRoomsForMember(
    requestMessage: api_v1alpha1_room303_room_pb.ListRoomsForMemberRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_room_pb.ListRoomsResponse|null) => void
  ): UnaryResponse;
  listRoomsForMember(
    requestMessage: api_v1alpha1_room303_room_pb.ListRoomsForMemberRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_room303_room_pb.ListRoomsResponse|null) => void
  ): UnaryResponse;
  archiveRoom(
    requestMessage: api_v1alpha1_room303_room_pb.ArchiveRoomRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_room303_pb.Room|null) => void
  ): UnaryResponse;
  archiveRoom(
    requestMessage: api_v1alpha1_room303_room_pb.ArchiveRoomRequest,
    callback: (error: ServiceError|null, responseMessage: api_commons_room303_pb.Room|null) => void
  ): UnaryResponse;
  listUsersByOrgId(requestMessage: api_v1alpha1_room303_room_pb.ListUsersByOrgIdRequest, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_room303_room_pb.ListUsersByOrgIdResponse>;
}

