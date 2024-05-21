// package: api.v1alpha1.org.labels
// file: api/v1alpha1/org/labels/entities.proto

import * as jspb from "google-protobuf";
import * as api_commons_labels_pb from "../../../../api/commons/labels_pb";
import * as api_commons_org_labels_pb from "../../../../api/commons/org/labels_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class CreateLabelRequest extends jspb.Message {
  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): api_commons_org_labels_pb.Label | undefined;
  setLabel(value?: api_commons_org_labels_pb.Label): void;

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
    label?: api_commons_org_labels_pb.Label.AsObject,
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

export class UpdateLabelRequest extends jspb.Message {
  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): api_commons_org_labels_pb.Label | undefined;
  setLabel(value?: api_commons_org_labels_pb.Label): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

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
    label?: api_commons_org_labels_pb.Label.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateLabelResponse extends jspb.Message {
  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): api_commons_org_labels_pb.Label | undefined;
  setLabel(value?: api_commons_org_labels_pb.Label): void;

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
    label?: api_commons_org_labels_pb.Label.AsObject,
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
  getLabel(): api_commons_org_labels_pb.Label | undefined;
  setLabel(value?: api_commons_org_labels_pb.Label): void;

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
    label?: api_commons_org_labels_pb.Label.AsObject,
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
  clearLabelList(): void;
  getLabelList(): Array<api_commons_org_labels_pb.Label>;
  setLabelList(value: Array<api_commons_org_labels_pb.Label>): void;
  addLabel(value?: api_commons_org_labels_pb.Label, index?: number): api_commons_org_labels_pb.Label;

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
    labelList: Array<api_commons_org_labels_pb.Label.AsObject>,
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

export class AttachLabelRequest extends jspb.Message {
  getLabelId(): string;
  setLabelId(value: string): void;

  getEntityId(): string;
  setEntityId(value: string): void;

  getEntityType(): api_commons_labels_pb.LabeledEntityMap[keyof api_commons_labels_pb.LabeledEntityMap];
  setEntityType(value: api_commons_labels_pb.LabeledEntityMap[keyof api_commons_labels_pb.LabeledEntityMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachLabelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AttachLabelRequest): AttachLabelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AttachLabelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachLabelRequest;
  static deserializeBinaryFromReader(message: AttachLabelRequest, reader: jspb.BinaryReader): AttachLabelRequest;
}

export namespace AttachLabelRequest {
  export type AsObject = {
    labelId: string,
    entityId: string,
    entityType: api_commons_labels_pb.LabeledEntityMap[keyof api_commons_labels_pb.LabeledEntityMap],
  }
}

export class AttachLabelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachLabelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AttachLabelResponse): AttachLabelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AttachLabelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachLabelResponse;
  static deserializeBinaryFromReader(message: AttachLabelResponse, reader: jspb.BinaryReader): AttachLabelResponse;
}

export namespace AttachLabelResponse {
  export type AsObject = {
  }
}

export class DetachLabelRequest extends jspb.Message {
  getLabelId(): string;
  setLabelId(value: string): void;

  getEntityId(): string;
  setEntityId(value: string): void;

  getEntityType(): api_commons_labels_pb.LabeledEntityMap[keyof api_commons_labels_pb.LabeledEntityMap];
  setEntityType(value: api_commons_labels_pb.LabeledEntityMap[keyof api_commons_labels_pb.LabeledEntityMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetachLabelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DetachLabelRequest): DetachLabelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DetachLabelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetachLabelRequest;
  static deserializeBinaryFromReader(message: DetachLabelRequest, reader: jspb.BinaryReader): DetachLabelRequest;
}

export namespace DetachLabelRequest {
  export type AsObject = {
    labelId: string,
    entityId: string,
    entityType: api_commons_labels_pb.LabeledEntityMap[keyof api_commons_labels_pb.LabeledEntityMap],
  }
}

export class DetachLabelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetachLabelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DetachLabelResponse): DetachLabelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DetachLabelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetachLabelResponse;
  static deserializeBinaryFromReader(message: DetachLabelResponse, reader: jspb.BinaryReader): DetachLabelResponse;
}

export namespace DetachLabelResponse {
  export type AsObject = {
  }
}

export class GetLabeledEntityMapRequest extends jspb.Message {
  getEntityType(): api_commons_labels_pb.LabeledEntityMap[keyof api_commons_labels_pb.LabeledEntityMap];
  setEntityType(value: api_commons_labels_pb.LabeledEntityMap[keyof api_commons_labels_pb.LabeledEntityMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLabeledEntityMapRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLabeledEntityMapRequest): GetLabeledEntityMapRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLabeledEntityMapRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLabeledEntityMapRequest;
  static deserializeBinaryFromReader(message: GetLabeledEntityMapRequest, reader: jspb.BinaryReader): GetLabeledEntityMapRequest;
}

export namespace GetLabeledEntityMapRequest {
  export type AsObject = {
    entityType: api_commons_labels_pb.LabeledEntityMap[keyof api_commons_labels_pb.LabeledEntityMap],
  }
}

export class GetLabeledEntityMapResponse extends jspb.Message {
  getEntityMapMap(): jspb.Map<string, GetLabeledEntityMapResponse.EntityLabels>;
  clearEntityMapMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLabeledEntityMapResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLabeledEntityMapResponse): GetLabeledEntityMapResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLabeledEntityMapResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLabeledEntityMapResponse;
  static deserializeBinaryFromReader(message: GetLabeledEntityMapResponse, reader: jspb.BinaryReader): GetLabeledEntityMapResponse;
}

export namespace GetLabeledEntityMapResponse {
  export type AsObject = {
    entityMapMap: Array<[string, GetLabeledEntityMapResponse.EntityLabels.AsObject]>,
  }

  export class EntityLabels extends jspb.Message {
    clearLabelsList(): void;
    getLabelsList(): Array<api_commons_org_labels_pb.Label>;
    setLabelsList(value: Array<api_commons_org_labels_pb.Label>): void;
    addLabels(value?: api_commons_org_labels_pb.Label, index?: number): api_commons_org_labels_pb.Label;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EntityLabels.AsObject;
    static toObject(includeInstance: boolean, msg: EntityLabels): EntityLabels.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EntityLabels, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EntityLabels;
    static deserializeBinaryFromReader(message: EntityLabels, reader: jspb.BinaryReader): EntityLabels;
  }

  export namespace EntityLabels {
    export type AsObject = {
      labelsList: Array<api_commons_org_labels_pb.Label.AsObject>,
    }
  }
}

export class AssignLabelsRequest extends jspb.Message {
  clearLabelIdsList(): void;
  getLabelIdsList(): Array<string>;
  setLabelIdsList(value: Array<string>): void;
  addLabelIds(value: string, index?: number): string;

  getPermissionGroupId(): string;
  setPermissionGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignLabelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignLabelsRequest): AssignLabelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignLabelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignLabelsRequest;
  static deserializeBinaryFromReader(message: AssignLabelsRequest, reader: jspb.BinaryReader): AssignLabelsRequest;
}

export namespace AssignLabelsRequest {
  export type AsObject = {
    labelIdsList: Array<string>,
    permissionGroupId: string,
  }
}

export class AssignLabelsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignLabelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignLabelsResponse): AssignLabelsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignLabelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignLabelsResponse;
  static deserializeBinaryFromReader(message: AssignLabelsResponse, reader: jspb.BinaryReader): AssignLabelsResponse;
}

export namespace AssignLabelsResponse {
  export type AsObject = {
  }
}

export class RevokeLabelsRequest extends jspb.Message {
  clearLabelIdsList(): void;
  getLabelIdsList(): Array<string>;
  setLabelIdsList(value: Array<string>): void;
  addLabelIds(value: string, index?: number): string;

  getPermissionGroupId(): string;
  setPermissionGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeLabelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeLabelsRequest): RevokeLabelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeLabelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeLabelsRequest;
  static deserializeBinaryFromReader(message: RevokeLabelsRequest, reader: jspb.BinaryReader): RevokeLabelsRequest;
}

export namespace RevokeLabelsRequest {
  export type AsObject = {
    labelIdsList: Array<string>,
    permissionGroupId: string,
  }
}

export class RevokeLabelsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeLabelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeLabelsResponse): RevokeLabelsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeLabelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeLabelsResponse;
  static deserializeBinaryFromReader(message: RevokeLabelsResponse, reader: jspb.BinaryReader): RevokeLabelsResponse;
}

export namespace RevokeLabelsResponse {
  export type AsObject = {
  }
}

