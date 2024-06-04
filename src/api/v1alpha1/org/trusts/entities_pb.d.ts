// package: api.v1alpha1.org.trusts
// file: api/v1alpha1/org/trusts/entities.proto

import * as jspb from "google-protobuf";
import * as api_commons_auth_perms_pb from "../../../../api/commons/auth/perms_pb";
import * as api_commons_org_trusts_pb from "../../../../api/commons/org/trusts_pb";

export class CreateTrustRequest extends jspb.Message {
  getGrantee(): string;
  setGrantee(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearPermissionsList(): void;
  getPermissionsList(): Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>;
  setPermissionsList(value: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>): void;
  addPermissions(value: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap], index?: number): api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap];

  clearLabelIdsList(): void;
  getLabelIdsList(): Array<string>;
  setLabelIdsList(value: Array<string>): void;
  addLabelIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTrustRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTrustRequest): CreateTrustRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTrustRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTrustRequest;
  static deserializeBinaryFromReader(message: CreateTrustRequest, reader: jspb.BinaryReader): CreateTrustRequest;
}

export namespace CreateTrustRequest {
  export type AsObject = {
    grantee: string,
    name: string,
    description: string,
    permissionsList: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>,
    labelIdsList: Array<string>,
  }
}

export class CreateTrustResponse extends jspb.Message {
  getTrustId(): string;
  setTrustId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTrustResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTrustResponse): CreateTrustResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTrustResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTrustResponse;
  static deserializeBinaryFromReader(message: CreateTrustResponse, reader: jspb.BinaryReader): CreateTrustResponse;
}

export namespace CreateTrustResponse {
  export type AsObject = {
    trustId: string,
  }
}

export class AcceptTrustRequest extends jspb.Message {
  getTrustId(): string;
  setTrustId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptTrustRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptTrustRequest): AcceptTrustRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AcceptTrustRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptTrustRequest;
  static deserializeBinaryFromReader(message: AcceptTrustRequest, reader: jspb.BinaryReader): AcceptTrustRequest;
}

export namespace AcceptTrustRequest {
  export type AsObject = {
    trustId: string,
  }
}

export class AcceptTrustResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptTrustResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptTrustResponse): AcceptTrustResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AcceptTrustResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptTrustResponse;
  static deserializeBinaryFromReader(message: AcceptTrustResponse, reader: jspb.BinaryReader): AcceptTrustResponse;
}

export namespace AcceptTrustResponse {
  export type AsObject = {
  }
}

export class RejectTrustRequest extends jspb.Message {
  getTrustId(): string;
  setTrustId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RejectTrustRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RejectTrustRequest): RejectTrustRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RejectTrustRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RejectTrustRequest;
  static deserializeBinaryFromReader(message: RejectTrustRequest, reader: jspb.BinaryReader): RejectTrustRequest;
}

export namespace RejectTrustRequest {
  export type AsObject = {
    trustId: string,
  }
}

export class RejectTrustResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RejectTrustResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RejectTrustResponse): RejectTrustResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RejectTrustResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RejectTrustResponse;
  static deserializeBinaryFromReader(message: RejectTrustResponse, reader: jspb.BinaryReader): RejectTrustResponse;
}

export namespace RejectTrustResponse {
  export type AsObject = {
  }
}

export class GetTrustRequest extends jspb.Message {
  getTrustId(): string;
  setTrustId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTrustRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTrustRequest): GetTrustRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTrustRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTrustRequest;
  static deserializeBinaryFromReader(message: GetTrustRequest, reader: jspb.BinaryReader): GetTrustRequest;
}

export namespace GetTrustRequest {
  export type AsObject = {
    trustId: string,
  }
}

export class GetTrustResponse extends jspb.Message {
  hasTrust(): boolean;
  clearTrust(): void;
  getTrust(): api_commons_org_trusts_pb.Trust | undefined;
  setTrust(value?: api_commons_org_trusts_pb.Trust): void;

  getGrantorName(): string;
  setGrantorName(value: string): void;

  getGranteeName(): string;
  setGranteeName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTrustResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTrustResponse): GetTrustResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTrustResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTrustResponse;
  static deserializeBinaryFromReader(message: GetTrustResponse, reader: jspb.BinaryReader): GetTrustResponse;
}

export namespace GetTrustResponse {
  export type AsObject = {
    trust?: api_commons_org_trusts_pb.Trust.AsObject,
    grantorName: string,
    granteeName: string,
  }
}

export class ListTrustsResponsePayload extends jspb.Message {
  hasTrust(): boolean;
  clearTrust(): void;
  getTrust(): api_commons_org_trusts_pb.Trust | undefined;
  setTrust(value?: api_commons_org_trusts_pb.Trust): void;

  getGrantorName(): string;
  setGrantorName(value: string): void;

  getGranteeName(): string;
  setGranteeName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTrustsResponsePayload.AsObject;
  static toObject(includeInstance: boolean, msg: ListTrustsResponsePayload): ListTrustsResponsePayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTrustsResponsePayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTrustsResponsePayload;
  static deserializeBinaryFromReader(message: ListTrustsResponsePayload, reader: jspb.BinaryReader): ListTrustsResponsePayload;
}

export namespace ListTrustsResponsePayload {
  export type AsObject = {
    trust?: api_commons_org_trusts_pb.Trust.AsObject,
    grantorName: string,
    granteeName: string,
  }
}

export class ListIncomingTrustsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIncomingTrustsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListIncomingTrustsRequest): ListIncomingTrustsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListIncomingTrustsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIncomingTrustsRequest;
  static deserializeBinaryFromReader(message: ListIncomingTrustsRequest, reader: jspb.BinaryReader): ListIncomingTrustsRequest;
}

export namespace ListIncomingTrustsRequest {
  export type AsObject = {
  }
}

export class ListIncomingTrustsResponse extends jspb.Message {
  clearTrustsList(): void;
  getTrustsList(): Array<ListTrustsResponsePayload>;
  setTrustsList(value: Array<ListTrustsResponsePayload>): void;
  addTrusts(value?: ListTrustsResponsePayload, index?: number): ListTrustsResponsePayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIncomingTrustsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListIncomingTrustsResponse): ListIncomingTrustsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListIncomingTrustsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIncomingTrustsResponse;
  static deserializeBinaryFromReader(message: ListIncomingTrustsResponse, reader: jspb.BinaryReader): ListIncomingTrustsResponse;
}

export namespace ListIncomingTrustsResponse {
  export type AsObject = {
    trustsList: Array<ListTrustsResponsePayload.AsObject>,
  }
}

export class ListGivenTrustsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGivenTrustsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListGivenTrustsRequest): ListGivenTrustsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListGivenTrustsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGivenTrustsRequest;
  static deserializeBinaryFromReader(message: ListGivenTrustsRequest, reader: jspb.BinaryReader): ListGivenTrustsRequest;
}

export namespace ListGivenTrustsRequest {
  export type AsObject = {
  }
}

export class ListGivenTrustsResponse extends jspb.Message {
  clearTrustsList(): void;
  getTrustsList(): Array<ListTrustsResponsePayload>;
  setTrustsList(value: Array<ListTrustsResponsePayload>): void;
  addTrusts(value?: ListTrustsResponsePayload, index?: number): ListTrustsResponsePayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGivenTrustsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListGivenTrustsResponse): ListGivenTrustsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListGivenTrustsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGivenTrustsResponse;
  static deserializeBinaryFromReader(message: ListGivenTrustsResponse, reader: jspb.BinaryReader): ListGivenTrustsResponse;
}

export namespace ListGivenTrustsResponse {
  export type AsObject = {
    trustsList: Array<ListTrustsResponsePayload.AsObject>,
  }
}

export class ListAssignableTrustsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAssignableTrustsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAssignableTrustsRequest): ListAssignableTrustsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAssignableTrustsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAssignableTrustsRequest;
  static deserializeBinaryFromReader(message: ListAssignableTrustsRequest, reader: jspb.BinaryReader): ListAssignableTrustsRequest;
}

export namespace ListAssignableTrustsRequest {
  export type AsObject = {
  }
}

export class ListAssignableTrustsResponse extends jspb.Message {
  clearTrustsList(): void;
  getTrustsList(): Array<ListTrustsResponsePayload>;
  setTrustsList(value: Array<ListTrustsResponsePayload>): void;
  addTrusts(value?: ListTrustsResponsePayload, index?: number): ListTrustsResponsePayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAssignableTrustsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAssignableTrustsResponse): ListAssignableTrustsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAssignableTrustsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAssignableTrustsResponse;
  static deserializeBinaryFromReader(message: ListAssignableTrustsResponse, reader: jspb.BinaryReader): ListAssignableTrustsResponse;
}

export namespace ListAssignableTrustsResponse {
  export type AsObject = {
    trustsList: Array<ListTrustsResponsePayload.AsObject>,
  }
}

export class DeleteTrustRequest extends jspb.Message {
  getTrustId(): string;
  setTrustId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTrustRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTrustRequest): DeleteTrustRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTrustRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTrustRequest;
  static deserializeBinaryFromReader(message: DeleteTrustRequest, reader: jspb.BinaryReader): DeleteTrustRequest;
}

export namespace DeleteTrustRequest {
  export type AsObject = {
    trustId: string,
  }
}

export class DeleteTrustResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTrustResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTrustResponse): DeleteTrustResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTrustResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTrustResponse;
  static deserializeBinaryFromReader(message: DeleteTrustResponse, reader: jspb.BinaryReader): DeleteTrustResponse;
}

export namespace DeleteTrustResponse {
  export type AsObject = {
  }
}

export class AssignTrustRequest extends jspb.Message {
  getTrustId(): string;
  setTrustId(value: string): void;

  clearUserIdsList(): void;
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  addUserIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignTrustRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignTrustRequest): AssignTrustRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignTrustRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignTrustRequest;
  static deserializeBinaryFromReader(message: AssignTrustRequest, reader: jspb.BinaryReader): AssignTrustRequest;
}

export namespace AssignTrustRequest {
  export type AsObject = {
    trustId: string,
    userIdsList: Array<string>,
  }
}

export class AssignTrustResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignTrustResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignTrustResponse): AssignTrustResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignTrustResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignTrustResponse;
  static deserializeBinaryFromReader(message: AssignTrustResponse, reader: jspb.BinaryReader): AssignTrustResponse;
}

export namespace AssignTrustResponse {
  export type AsObject = {
  }
}

export class UnassignTrustRequest extends jspb.Message {
  getTrustId(): string;
  setTrustId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnassignTrustRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnassignTrustRequest): UnassignTrustRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnassignTrustRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnassignTrustRequest;
  static deserializeBinaryFromReader(message: UnassignTrustRequest, reader: jspb.BinaryReader): UnassignTrustRequest;
}

export namespace UnassignTrustRequest {
  export type AsObject = {
    trustId: string,
    userId: string,
  }
}

export class UnassignTrustResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnassignTrustResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnassignTrustResponse): UnassignTrustResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnassignTrustResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnassignTrustResponse;
  static deserializeBinaryFromReader(message: UnassignTrustResponse, reader: jspb.BinaryReader): UnassignTrustResponse;
}

export namespace UnassignTrustResponse {
  export type AsObject = {
  }
}

