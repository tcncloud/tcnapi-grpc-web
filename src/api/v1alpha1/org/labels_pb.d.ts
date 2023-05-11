// package: api.v1alpha1.org
// file: api/v1alpha1/org/labels.proto

import * as jspb from "google-protobuf";
import * as api_commons_auth_perms_pb from "../../../api/commons/auth/perms_pb";
import * as api_commons_labels_pb from "../../../api/commons/labels_pb";

export class Label extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getColor(): string;
  setColor(value: string): void;

  getLabelId(): string;
  setLabelId(value: string): void;

  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Label.AsObject;
  static toObject(includeInstance: boolean, msg: Label): Label.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Label, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Label;
  static deserializeBinaryFromReader(message: Label, reader: jspb.BinaryReader): Label;
}

export namespace Label {
  export type AsObject = {
    name: string,
    description: string,
    color: string,
    labelId: string,
    deleted: boolean,
  }
}

export class CreateLabelRequest extends jspb.Message {
  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): Label | undefined;
  setLabel(value?: Label): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLabelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLabelRequest): CreateLabelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLabelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLabelRequest;
  static deserializeBinaryFromReader(message: CreateLabelRequest, reader: jspb.BinaryReader): CreateLabelRequest;
}

export namespace CreateLabelRequest {
  export type AsObject = {
    label?: Label.AsObject,
  }
}

export class CreateLabelResponse extends jspb.Message {
  getLabelId(): string;
  setLabelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLabelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLabelResponse): CreateLabelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLabelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLabelResponse;
  static deserializeBinaryFromReader(message: CreateLabelResponse, reader: jspb.BinaryReader): CreateLabelResponse;
}

export namespace CreateLabelResponse {
  export type AsObject = {
    labelId: string,
  }
}

export class DeleteLabelRequest extends jspb.Message {
  getLabelId(): string;
  setLabelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLabelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLabelRequest): DeleteLabelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteLabelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLabelRequest;
  static deserializeBinaryFromReader(message: DeleteLabelRequest, reader: jspb.BinaryReader): DeleteLabelRequest;
}

export namespace DeleteLabelRequest {
  export type AsObject = {
    labelId: string,
  }
}

export class DeleteLabelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLabelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLabelResponse): DeleteLabelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteLabelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLabelResponse;
  static deserializeBinaryFromReader(message: DeleteLabelResponse, reader: jspb.BinaryReader): DeleteLabelResponse;
}

export namespace DeleteLabelResponse {
  export type AsObject = {
  }
}

export class ListLabelsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLabelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLabelsRequest): ListLabelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLabelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLabelsRequest;
  static deserializeBinaryFromReader(message: ListLabelsRequest, reader: jspb.BinaryReader): ListLabelsRequest;
}

export namespace ListLabelsRequest {
  export type AsObject = {
  }
}

export class ListLabelsResponse extends jspb.Message {
  clearLabelsList(): void;
  getLabelsList(): Array<Label>;
  setLabelsList(value: Array<Label>): void;
  addLabels(value?: Label, index?: number): Label;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLabelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLabelsResponse): ListLabelsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLabelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLabelsResponse;
  static deserializeBinaryFromReader(message: ListLabelsResponse, reader: jspb.BinaryReader): ListLabelsResponse;
}

export namespace ListLabelsResponse {
  export type AsObject = {
    labelsList: Array<Label.AsObject>,
  }
}

export class GetLabelRequest extends jspb.Message {
  getLabelId(): string;
  setLabelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLabelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLabelRequest): GetLabelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLabelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLabelRequest;
  static deserializeBinaryFromReader(message: GetLabelRequest, reader: jspb.BinaryReader): GetLabelRequest;
}

export namespace GetLabelRequest {
  export type AsObject = {
    labelId: string,
  }
}

export class GetLabelResponse extends jspb.Message {
  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): Label | undefined;
  setLabel(value?: Label): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLabelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLabelResponse): GetLabelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLabelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLabelResponse;
  static deserializeBinaryFromReader(message: GetLabelResponse, reader: jspb.BinaryReader): GetLabelResponse;
}

export namespace GetLabelResponse {
  export type AsObject = {
    label?: Label.AsObject,
  }
}

export class UpdateLabelRequest extends jspb.Message {
  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): Label | undefined;
  setLabel(value?: Label): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLabelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLabelRequest): UpdateLabelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLabelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLabelRequest;
  static deserializeBinaryFromReader(message: UpdateLabelRequest, reader: jspb.BinaryReader): UpdateLabelRequest;
}

export namespace UpdateLabelRequest {
  export type AsObject = {
    label?: Label.AsObject,
  }
}

export class UpdateLabelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLabelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLabelResponse): UpdateLabelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLabelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLabelResponse;
  static deserializeBinaryFromReader(message: UpdateLabelResponse, reader: jspb.BinaryReader): UpdateLabelResponse;
}

export namespace UpdateLabelResponse {
  export type AsObject = {
  }
}

export class LabelAssignment extends jspb.Message {
  getLabelId(): string;
  setLabelId(value: string): void;

  getType(): api_commons_labels_pb.EntityTypeMap[keyof api_commons_labels_pb.EntityTypeMap];
  setType(value: api_commons_labels_pb.EntityTypeMap[keyof api_commons_labels_pb.EntityTypeMap]): void;

  getEntityId(): string;
  setEntityId(value: string): void;

  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): Label | undefined;
  setLabel(value?: Label): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelAssignment.AsObject;
  static toObject(includeInstance: boolean, msg: LabelAssignment): LabelAssignment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelAssignment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelAssignment;
  static deserializeBinaryFromReader(message: LabelAssignment, reader: jspb.BinaryReader): LabelAssignment;
}

export namespace LabelAssignment {
  export type AsObject = {
    labelId: string,
    type: api_commons_labels_pb.EntityTypeMap[keyof api_commons_labels_pb.EntityTypeMap],
    entityId: string,
    label?: Label.AsObject,
  }
}

export class AssignLabelRequest extends jspb.Message {
  clearAssignmentsList(): void;
  getAssignmentsList(): Array<LabelAssignment>;
  setAssignmentsList(value: Array<LabelAssignment>): void;
  addAssignments(value?: LabelAssignment, index?: number): LabelAssignment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignLabelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignLabelRequest): AssignLabelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignLabelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignLabelRequest;
  static deserializeBinaryFromReader(message: AssignLabelRequest, reader: jspb.BinaryReader): AssignLabelRequest;
}

export namespace AssignLabelRequest {
  export type AsObject = {
    assignmentsList: Array<LabelAssignment.AsObject>,
  }
}

export class AssignLabelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignLabelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignLabelResponse): AssignLabelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignLabelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignLabelResponse;
  static deserializeBinaryFromReader(message: AssignLabelResponse, reader: jspb.BinaryReader): AssignLabelResponse;
}

export namespace AssignLabelResponse {
  export type AsObject = {
  }
}

export class UnassignLabelRequest extends jspb.Message {
  clearAssignmentsList(): void;
  getAssignmentsList(): Array<LabelAssignment>;
  setAssignmentsList(value: Array<LabelAssignment>): void;
  addAssignments(value?: LabelAssignment, index?: number): LabelAssignment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnassignLabelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnassignLabelRequest): UnassignLabelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnassignLabelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnassignLabelRequest;
  static deserializeBinaryFromReader(message: UnassignLabelRequest, reader: jspb.BinaryReader): UnassignLabelRequest;
}

export namespace UnassignLabelRequest {
  export type AsObject = {
    assignmentsList: Array<LabelAssignment.AsObject>,
  }
}

export class UnassignLabelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnassignLabelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnassignLabelResponse): UnassignLabelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnassignLabelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnassignLabelResponse;
  static deserializeBinaryFromReader(message: UnassignLabelResponse, reader: jspb.BinaryReader): UnassignLabelResponse;
}

export namespace UnassignLabelResponse {
  export type AsObject = {
  }
}

export class GetAssignmentCountsRequest extends jspb.Message {
  getLabelId(): string;
  setLabelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssignmentCountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssignmentCountsRequest): GetAssignmentCountsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssignmentCountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssignmentCountsRequest;
  static deserializeBinaryFromReader(message: GetAssignmentCountsRequest, reader: jspb.BinaryReader): GetAssignmentCountsRequest;
}

export namespace GetAssignmentCountsRequest {
  export type AsObject = {
    labelId: string,
  }
}

export class GetAssignmentCountsResponse extends jspb.Message {
  getCountsMap(): jspb.Map<number, number>;
  clearCountsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssignmentCountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssignmentCountsResponse): GetAssignmentCountsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssignmentCountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssignmentCountsResponse;
  static deserializeBinaryFromReader(message: GetAssignmentCountsResponse, reader: jspb.BinaryReader): GetAssignmentCountsResponse;
}

export namespace GetAssignmentCountsResponse {
  export type AsObject = {
    countsMap: Array<[number, number]>,
  }
}

export class GetAssignableLabelsRequest extends jspb.Message {
  getPermission(): api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap];
  setPermission(value: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssignableLabelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssignableLabelsRequest): GetAssignableLabelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssignableLabelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssignableLabelsRequest;
  static deserializeBinaryFromReader(message: GetAssignableLabelsRequest, reader: jspb.BinaryReader): GetAssignableLabelsRequest;
}

export namespace GetAssignableLabelsRequest {
  export type AsObject = {
    permission: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap],
  }
}

export class GetAssignableLabelsResponse extends jspb.Message {
  clearLabelsList(): void;
  getLabelsList(): Array<Label>;
  setLabelsList(value: Array<Label>): void;
  addLabels(value?: Label, index?: number): Label;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssignableLabelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssignableLabelsResponse): GetAssignableLabelsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssignableLabelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssignableLabelsResponse;
  static deserializeBinaryFromReader(message: GetAssignableLabelsResponse, reader: jspb.BinaryReader): GetAssignableLabelsResponse;
}

export namespace GetAssignableLabelsResponse {
  export type AsObject = {
    labelsList: Array<Label.AsObject>,
  }
}

