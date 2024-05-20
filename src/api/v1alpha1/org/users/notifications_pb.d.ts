// package: api.v1alpha1.org.users
// file: api/v1alpha1/org/users/notifications.proto

import * as jspb from "google-protobuf";
import * as api_commons_audit_event_types_pb from "../../../../api/commons/audit/event_types_pb";
import * as api_commons_notifications_pb from "../../../../api/commons/notifications_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class UserSubscription extends jspb.Message {
  getSubscriptionId(): string;
  setSubscriptionId(value: string): void;

  getEventType(): api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap];
  setEventType(value: api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap]): void;

  getUserId(): string;
  setUserId(value: string): void;

  hasRoom303(): boolean;
  clearRoom303(): void;
  getRoom303(): UserSubscription.Room303 | undefined;
  setRoom303(value?: UserSubscription.Room303): void;

  hasDelivery(): boolean;
  clearDelivery(): void;
  getDelivery(): UserSubscription.Delivery | undefined;
  setDelivery(value?: UserSubscription.Delivery): void;

  clearFiltersList(): void;
  getFiltersList(): Array<api_commons_notifications_pb.FieldValueFilter>;
  setFiltersList(value: Array<api_commons_notifications_pb.FieldValueFilter>): void;
  addFilters(value?: api_commons_notifications_pb.FieldValueFilter, index?: number): api_commons_notifications_pb.FieldValueFilter;

  getVersion(): number;
  setVersion(value: number): void;

  getDeliverMethodCase(): UserSubscription.DeliverMethodCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSubscription.AsObject;
  static toObject(includeInstance: boolean, msg: UserSubscription): UserSubscription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserSubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSubscription;
  static deserializeBinaryFromReader(message: UserSubscription, reader: jspb.BinaryReader): UserSubscription;
}

export namespace UserSubscription {
  export type AsObject = {
    subscriptionId: string,
    eventType: api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap],
    userId: string,
    room303?: UserSubscription.Room303.AsObject,
    delivery?: UserSubscription.Delivery.AsObject,
    filtersList: Array<api_commons_notifications_pb.FieldValueFilter.AsObject>,
    version: number,
  }

  export class Room303 extends jspb.Message {
    getRoomName(): string;
    setRoomName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Room303.AsObject;
    static toObject(includeInstance: boolean, msg: Room303): Room303.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Room303, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Room303;
    static deserializeBinaryFromReader(message: Room303, reader: jspb.BinaryReader): Room303;
  }

  export namespace Room303 {
    export type AsObject = {
      roomName: string,
    }
  }

  export class Delivery extends jspb.Message {
    getTransferConfigName(): string;
    setTransferConfigName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Delivery.AsObject;
    static toObject(includeInstance: boolean, msg: Delivery): Delivery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Delivery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Delivery;
    static deserializeBinaryFromReader(message: Delivery, reader: jspb.BinaryReader): Delivery;
  }

  export namespace Delivery {
    export type AsObject = {
      transferConfigName: string,
    }
  }

  export enum DeliverMethodCase {
    DELIVER_METHOD_NOT_SET = 0,
    ROOM303 = 100,
    DELIVERY = 200,
  }
}

export class AddUserSubscriptionRequest extends jspb.Message {
  hasSubscription(): boolean;
  clearSubscription(): void;
  getSubscription(): UserSubscription | undefined;
  setSubscription(value?: UserSubscription): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUserSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddUserSubscriptionRequest): AddUserSubscriptionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddUserSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUserSubscriptionRequest;
  static deserializeBinaryFromReader(message: AddUserSubscriptionRequest, reader: jspb.BinaryReader): AddUserSubscriptionRequest;
}

export namespace AddUserSubscriptionRequest {
  export type AsObject = {
    subscription?: UserSubscription.AsObject,
  }
}

export class AddUserSubscriptionResponse extends jspb.Message {
  hasSubscription(): boolean;
  clearSubscription(): void;
  getSubscription(): UserSubscription | undefined;
  setSubscription(value?: UserSubscription): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUserSubscriptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddUserSubscriptionResponse): AddUserSubscriptionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddUserSubscriptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUserSubscriptionResponse;
  static deserializeBinaryFromReader(message: AddUserSubscriptionResponse, reader: jspb.BinaryReader): AddUserSubscriptionResponse;
}

export namespace AddUserSubscriptionResponse {
  export type AsObject = {
    subscription?: UserSubscription.AsObject,
  }
}

export class AddUserSubscriptionByUserIdRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  hasSubscription(): boolean;
  clearSubscription(): void;
  getSubscription(): UserSubscription | undefined;
  setSubscription(value?: UserSubscription): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUserSubscriptionByUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddUserSubscriptionByUserIdRequest): AddUserSubscriptionByUserIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddUserSubscriptionByUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUserSubscriptionByUserIdRequest;
  static deserializeBinaryFromReader(message: AddUserSubscriptionByUserIdRequest, reader: jspb.BinaryReader): AddUserSubscriptionByUserIdRequest;
}

export namespace AddUserSubscriptionByUserIdRequest {
  export type AsObject = {
    userId: string,
    subscription?: UserSubscription.AsObject,
  }
}

export class AddUserSubscriptionByUserIdResponse extends jspb.Message {
  hasSubscription(): boolean;
  clearSubscription(): void;
  getSubscription(): UserSubscription | undefined;
  setSubscription(value?: UserSubscription): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUserSubscriptionByUserIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddUserSubscriptionByUserIdResponse): AddUserSubscriptionByUserIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddUserSubscriptionByUserIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUserSubscriptionByUserIdResponse;
  static deserializeBinaryFromReader(message: AddUserSubscriptionByUserIdResponse, reader: jspb.BinaryReader): AddUserSubscriptionByUserIdResponse;
}

export namespace AddUserSubscriptionByUserIdResponse {
  export type AsObject = {
    subscription?: UserSubscription.AsObject,
  }
}

export class GetUserSubscriptionRequest extends jspb.Message {
  getSubscriptionId(): string;
  setSubscriptionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserSubscriptionRequest): GetUserSubscriptionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserSubscriptionRequest;
  static deserializeBinaryFromReader(message: GetUserSubscriptionRequest, reader: jspb.BinaryReader): GetUserSubscriptionRequest;
}

export namespace GetUserSubscriptionRequest {
  export type AsObject = {
    subscriptionId: string,
  }
}

export class GetUserSubscriptionResponse extends jspb.Message {
  hasSubscription(): boolean;
  clearSubscription(): void;
  getSubscription(): UserSubscription | undefined;
  setSubscription(value?: UserSubscription): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserSubscriptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserSubscriptionResponse): GetUserSubscriptionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserSubscriptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserSubscriptionResponse;
  static deserializeBinaryFromReader(message: GetUserSubscriptionResponse, reader: jspb.BinaryReader): GetUserSubscriptionResponse;
}

export namespace GetUserSubscriptionResponse {
  export type AsObject = {
    subscription?: UserSubscription.AsObject,
  }
}

export class GetUserSubscriptionByUserIdRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getSubscriptionId(): string;
  setSubscriptionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserSubscriptionByUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserSubscriptionByUserIdRequest): GetUserSubscriptionByUserIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserSubscriptionByUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserSubscriptionByUserIdRequest;
  static deserializeBinaryFromReader(message: GetUserSubscriptionByUserIdRequest, reader: jspb.BinaryReader): GetUserSubscriptionByUserIdRequest;
}

export namespace GetUserSubscriptionByUserIdRequest {
  export type AsObject = {
    userId: string,
    subscriptionId: string,
  }
}

export class GetUserSubscriptionByUserIdResponse extends jspb.Message {
  hasSubscription(): boolean;
  clearSubscription(): void;
  getSubscription(): UserSubscription | undefined;
  setSubscription(value?: UserSubscription): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserSubscriptionByUserIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserSubscriptionByUserIdResponse): GetUserSubscriptionByUserIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserSubscriptionByUserIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserSubscriptionByUserIdResponse;
  static deserializeBinaryFromReader(message: GetUserSubscriptionByUserIdResponse, reader: jspb.BinaryReader): GetUserSubscriptionByUserIdResponse;
}

export namespace GetUserSubscriptionByUserIdResponse {
  export type AsObject = {
    subscription?: UserSubscription.AsObject,
  }
}

export class UpdateUserSubscriptionRequest extends jspb.Message {
  hasSubscription(): boolean;
  clearSubscription(): void;
  getSubscription(): UserSubscription | undefined;
  setSubscription(value?: UserSubscription): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserSubscriptionRequest): UpdateUserSubscriptionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserSubscriptionRequest;
  static deserializeBinaryFromReader(message: UpdateUserSubscriptionRequest, reader: jspb.BinaryReader): UpdateUserSubscriptionRequest;
}

export namespace UpdateUserSubscriptionRequest {
  export type AsObject = {
    subscription?: UserSubscription.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateUserSubscriptionResponse extends jspb.Message {
  hasSubscription(): boolean;
  clearSubscription(): void;
  getSubscription(): UserSubscription | undefined;
  setSubscription(value?: UserSubscription): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserSubscriptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserSubscriptionResponse): UpdateUserSubscriptionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserSubscriptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserSubscriptionResponse;
  static deserializeBinaryFromReader(message: UpdateUserSubscriptionResponse, reader: jspb.BinaryReader): UpdateUserSubscriptionResponse;
}

export namespace UpdateUserSubscriptionResponse {
  export type AsObject = {
    subscription?: UserSubscription.AsObject,
  }
}

export class UpdateUserSubscriptionByUserIdRequest extends jspb.Message {
  hasSubscription(): boolean;
  clearSubscription(): void;
  getSubscription(): UserSubscription | undefined;
  setSubscription(value?: UserSubscription): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserSubscriptionByUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserSubscriptionByUserIdRequest): UpdateUserSubscriptionByUserIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserSubscriptionByUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserSubscriptionByUserIdRequest;
  static deserializeBinaryFromReader(message: UpdateUserSubscriptionByUserIdRequest, reader: jspb.BinaryReader): UpdateUserSubscriptionByUserIdRequest;
}

export namespace UpdateUserSubscriptionByUserIdRequest {
  export type AsObject = {
    subscription?: UserSubscription.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateUserSubscriptionByUserIdResponse extends jspb.Message {
  hasSubscription(): boolean;
  clearSubscription(): void;
  getSubscription(): UserSubscription | undefined;
  setSubscription(value?: UserSubscription): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserSubscriptionByUserIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserSubscriptionByUserIdResponse): UpdateUserSubscriptionByUserIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserSubscriptionByUserIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserSubscriptionByUserIdResponse;
  static deserializeBinaryFromReader(message: UpdateUserSubscriptionByUserIdResponse, reader: jspb.BinaryReader): UpdateUserSubscriptionByUserIdResponse;
}

export namespace UpdateUserSubscriptionByUserIdResponse {
  export type AsObject = {
    subscription?: UserSubscription.AsObject,
  }
}

export class RemoveUserSubscriptionRequest extends jspb.Message {
  getSubscriptionId(): string;
  setSubscriptionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveUserSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveUserSubscriptionRequest): RemoveUserSubscriptionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveUserSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveUserSubscriptionRequest;
  static deserializeBinaryFromReader(message: RemoveUserSubscriptionRequest, reader: jspb.BinaryReader): RemoveUserSubscriptionRequest;
}

export namespace RemoveUserSubscriptionRequest {
  export type AsObject = {
    subscriptionId: string,
  }
}

export class RemoveUserSubscriptionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveUserSubscriptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveUserSubscriptionResponse): RemoveUserSubscriptionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveUserSubscriptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveUserSubscriptionResponse;
  static deserializeBinaryFromReader(message: RemoveUserSubscriptionResponse, reader: jspb.BinaryReader): RemoveUserSubscriptionResponse;
}

export namespace RemoveUserSubscriptionResponse {
  export type AsObject = {
  }
}

export class RemoveUserSubscriptionByUserIdRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getSubscriptionId(): string;
  setSubscriptionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveUserSubscriptionByUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveUserSubscriptionByUserIdRequest): RemoveUserSubscriptionByUserIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveUserSubscriptionByUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveUserSubscriptionByUserIdRequest;
  static deserializeBinaryFromReader(message: RemoveUserSubscriptionByUserIdRequest, reader: jspb.BinaryReader): RemoveUserSubscriptionByUserIdRequest;
}

export namespace RemoveUserSubscriptionByUserIdRequest {
  export type AsObject = {
    userId: string,
    subscriptionId: string,
  }
}

export class RemoveUserSubscriptionByUserIdResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveUserSubscriptionByUserIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveUserSubscriptionByUserIdResponse): RemoveUserSubscriptionByUserIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveUserSubscriptionByUserIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveUserSubscriptionByUserIdResponse;
  static deserializeBinaryFromReader(message: RemoveUserSubscriptionByUserIdResponse, reader: jspb.BinaryReader): RemoveUserSubscriptionByUserIdResponse;
}

export namespace RemoveUserSubscriptionByUserIdResponse {
  export type AsObject = {
  }
}

export class ListUserSubscriptionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserSubscriptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserSubscriptionsRequest): ListUserSubscriptionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUserSubscriptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserSubscriptionsRequest;
  static deserializeBinaryFromReader(message: ListUserSubscriptionsRequest, reader: jspb.BinaryReader): ListUserSubscriptionsRequest;
}

export namespace ListUserSubscriptionsRequest {
  export type AsObject = {
  }
}

export class ListUserSubscriptionsResponse extends jspb.Message {
  clearSubscriptionsList(): void;
  getSubscriptionsList(): Array<UserSubscription>;
  setSubscriptionsList(value: Array<UserSubscription>): void;
  addSubscriptions(value?: UserSubscription, index?: number): UserSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserSubscriptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserSubscriptionsResponse): ListUserSubscriptionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUserSubscriptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserSubscriptionsResponse;
  static deserializeBinaryFromReader(message: ListUserSubscriptionsResponse, reader: jspb.BinaryReader): ListUserSubscriptionsResponse;
}

export namespace ListUserSubscriptionsResponse {
  export type AsObject = {
    subscriptionsList: Array<UserSubscription.AsObject>,
  }
}

export class ListUserSubscriptionsByUserIdRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserSubscriptionsByUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserSubscriptionsByUserIdRequest): ListUserSubscriptionsByUserIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUserSubscriptionsByUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserSubscriptionsByUserIdRequest;
  static deserializeBinaryFromReader(message: ListUserSubscriptionsByUserIdRequest, reader: jspb.BinaryReader): ListUserSubscriptionsByUserIdRequest;
}

export namespace ListUserSubscriptionsByUserIdRequest {
  export type AsObject = {
    userId: string,
  }
}

export class ListUserSubscriptionsByUserIdResponse extends jspb.Message {
  clearSubscriptionsList(): void;
  getSubscriptionsList(): Array<UserSubscription>;
  setSubscriptionsList(value: Array<UserSubscription>): void;
  addSubscriptions(value?: UserSubscription, index?: number): UserSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserSubscriptionsByUserIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserSubscriptionsByUserIdResponse): ListUserSubscriptionsByUserIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUserSubscriptionsByUserIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserSubscriptionsByUserIdResponse;
  static deserializeBinaryFromReader(message: ListUserSubscriptionsByUserIdResponse, reader: jspb.BinaryReader): ListUserSubscriptionsByUserIdResponse;
}

export namespace ListUserSubscriptionsByUserIdResponse {
  export type AsObject = {
    subscriptionsList: Array<UserSubscription.AsObject>,
  }
}

export class ListOrgSubscriptionsRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getEventType(): api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap];
  setEventType(value: api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrgSubscriptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrgSubscriptionsRequest): ListOrgSubscriptionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrgSubscriptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrgSubscriptionsRequest;
  static deserializeBinaryFromReader(message: ListOrgSubscriptionsRequest, reader: jspb.BinaryReader): ListOrgSubscriptionsRequest;
}

export namespace ListOrgSubscriptionsRequest {
  export type AsObject = {
    orgId: string,
    eventType: api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap],
  }
}

export class ListOrgSubscriptionsResponse extends jspb.Message {
  clearSubscriptionsList(): void;
  getSubscriptionsList(): Array<UserSubscription>;
  setSubscriptionsList(value: Array<UserSubscription>): void;
  addSubscriptions(value?: UserSubscription, index?: number): UserSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrgSubscriptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrgSubscriptionsResponse): ListOrgSubscriptionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrgSubscriptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrgSubscriptionsResponse;
  static deserializeBinaryFromReader(message: ListOrgSubscriptionsResponse, reader: jspb.BinaryReader): ListOrgSubscriptionsResponse;
}

export namespace ListOrgSubscriptionsResponse {
  export type AsObject = {
    subscriptionsList: Array<UserSubscription.AsObject>,
  }
}

