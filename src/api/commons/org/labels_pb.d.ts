// package: api.commons.org
// file: api/commons/org/labels.proto

import * as jspb from "google-protobuf";
import * as api_commons_labels_pb from "../../../api/commons/labels_pb";

export class Label extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

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
    orgId: string,
    name: string,
    description: string,
    color: string,
    labelId: string,
    deleted: boolean,
  }
}

export class LabelAssignment extends jspb.Message {
  getLabelId(): string;
  setLabelId(value: string): void;

  getType(): api_commons_labels_pb.EntityTypeMap[keyof api_commons_labels_pb.EntityTypeMap];
  setType(value: api_commons_labels_pb.EntityTypeMap[keyof api_commons_labels_pb.EntityTypeMap]): void;

  getEntityId(): string;
  setEntityId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

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
    orgId: string,
    label?: Label.AsObject,
  }
}

