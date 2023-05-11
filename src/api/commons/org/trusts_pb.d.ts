// package: api.commons.org
// file: api/commons/org/trusts.proto

import * as jspb from "google-protobuf";
import * as api_commons_auth_perms_pb from "../../../api/commons/auth/perms_pb";
import * as api_commons_org_labels_pb from "../../../api/commons/org/labels_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class Trust extends jspb.Message {
  getTrustId(): string;
  setTrustId(value: string): void;

  getGrantor(): string;
  setGrantor(value: string): void;

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

  clearLabelsList(): void;
  getLabelsList(): Array<api_commons_org_labels_pb.Label>;
  setLabelsList(value: Array<api_commons_org_labels_pb.Label>): void;
  addLabels(value?: api_commons_org_labels_pb.Label, index?: number): api_commons_org_labels_pb.Label;

  getStatus(): StatusMap[keyof StatusMap];
  setStatus(value: StatusMap[keyof StatusMap]): void;

  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Trust.AsObject;
  static toObject(includeInstance: boolean, msg: Trust): Trust.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Trust, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Trust;
  static deserializeBinaryFromReader(message: Trust, reader: jspb.BinaryReader): Trust;
}

export namespace Trust {
  export type AsObject = {
    trustId: string,
    grantor: string,
    grantee: string,
    name: string,
    description: string,
    permissionsList: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>,
    labelsList: Array<api_commons_org_labels_pb.Label.AsObject>,
    status: StatusMap[keyof StatusMap],
    deleted: boolean,
  }
}

export class TrustGroup extends jspb.Message {
  getGrantor(): string;
  setGrantor(value: string): void;

  clearLabeledPermissionsList(): void;
  getLabeledPermissionsList(): Array<TrustGroup.LabeledPermissions>;
  setLabeledPermissionsList(value: Array<TrustGroup.LabeledPermissions>): void;
  addLabeledPermissions(value?: TrustGroup.LabeledPermissions, index?: number): TrustGroup.LabeledPermissions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrustGroup.AsObject;
  static toObject(includeInstance: boolean, msg: TrustGroup): TrustGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrustGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrustGroup;
  static deserializeBinaryFromReader(message: TrustGroup, reader: jspb.BinaryReader): TrustGroup;
}

export namespace TrustGroup {
  export type AsObject = {
    grantor: string,
    labeledPermissionsList: Array<TrustGroup.LabeledPermissions.AsObject>,
  }

  export class LabeledPermissions extends jspb.Message {
    clearPermissionsList(): void;
    getPermissionsList(): Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>;
    setPermissionsList(value: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>): void;
    addPermissions(value: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap], index?: number): api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap];

    clearLabelsList(): void;
    getLabelsList(): Array<api_commons_org_labels_pb.Label>;
    setLabelsList(value: Array<api_commons_org_labels_pb.Label>): void;
    addLabels(value?: api_commons_org_labels_pb.Label, index?: number): api_commons_org_labels_pb.Label;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LabeledPermissions.AsObject;
    static toObject(includeInstance: boolean, msg: LabeledPermissions): LabeledPermissions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LabeledPermissions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LabeledPermissions;
    static deserializeBinaryFromReader(message: LabeledPermissions, reader: jspb.BinaryReader): LabeledPermissions;
  }

  export namespace LabeledPermissions {
    export type AsObject = {
      permissionsList: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>,
      labelsList: Array<api_commons_org_labels_pb.Label.AsObject>,
    }
  }
}

export class TrustFilter extends jspb.Message {
  hasGrantor(): boolean;
  clearGrantor(): void;
  getGrantor(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGrantor(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasGrantee(): boolean;
  clearGrantee(): void;
  getGrantee(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGrantee(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasStatusFilter(): boolean;
  clearStatusFilter(): void;
  getStatusFilter(): TrustFilter.StatusFilter | undefined;
  setStatusFilter(value?: TrustFilter.StatusFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrustFilter.AsObject;
  static toObject(includeInstance: boolean, msg: TrustFilter): TrustFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrustFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrustFilter;
  static deserializeBinaryFromReader(message: TrustFilter, reader: jspb.BinaryReader): TrustFilter;
}

export namespace TrustFilter {
  export type AsObject = {
    grantor?: google_protobuf_wrappers_pb.StringValue.AsObject,
    grantee?: google_protobuf_wrappers_pb.StringValue.AsObject,
    statusFilter?: TrustFilter.StatusFilter.AsObject,
  }

  export class StatusFilter extends jspb.Message {
    clearValuesList(): void;
    getValuesList(): Array<StatusMap[keyof StatusMap]>;
    setValuesList(value: Array<StatusMap[keyof StatusMap]>): void;
    addValues(value: StatusMap[keyof StatusMap], index?: number): StatusMap[keyof StatusMap];

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatusFilter.AsObject;
    static toObject(includeInstance: boolean, msg: StatusFilter): StatusFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatusFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatusFilter;
    static deserializeBinaryFromReader(message: StatusFilter, reader: jspb.BinaryReader): StatusFilter;
  }

  export namespace StatusFilter {
    export type AsObject = {
      valuesList: Array<StatusMap[keyof StatusMap]>,
    }
  }
}

export interface StatusMap {
  PENDING: 0;
  REJECTED: 1;
  ACCEPTED: 2;
}

export const Status: StatusMap;

