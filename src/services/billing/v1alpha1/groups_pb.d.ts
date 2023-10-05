// package: services.billing.v1alpha1
// file: services/billing/v1alpha1/groups.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as services_billing_entities_v1alpha1_groups_pb from "../../../services/billing/entities/v1alpha1/groups_pb";
import * as services_billing_v1alpha1_core_pb from "../../../services/billing/v1alpha1/core_pb";

export class CreateRateDefinitionGroupRequest extends jspb.Message {
  getRateDefinitionGroupId(): string;
  setRateDefinitionGroupId(value: string): void;

  hasRateDefinitionGroup(): boolean;
  clearRateDefinitionGroup(): void;
  getRateDefinitionGroup(): services_billing_entities_v1alpha1_groups_pb.RateDefinitionGroup | undefined;
  setRateDefinitionGroup(value?: services_billing_entities_v1alpha1_groups_pb.RateDefinitionGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRateDefinitionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRateDefinitionGroupRequest): CreateRateDefinitionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRateDefinitionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRateDefinitionGroupRequest;
  static deserializeBinaryFromReader(message: CreateRateDefinitionGroupRequest, reader: jspb.BinaryReader): CreateRateDefinitionGroupRequest;
}

export namespace CreateRateDefinitionGroupRequest {
  export type AsObject = {
    rateDefinitionGroupId: string,
    rateDefinitionGroup?: services_billing_entities_v1alpha1_groups_pb.RateDefinitionGroup.AsObject,
  }
}

export class CreateRateDefinitionGroupResponse extends jspb.Message {
  getRateDefinitionGroupId(): string;
  setRateDefinitionGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRateDefinitionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRateDefinitionGroupResponse): CreateRateDefinitionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRateDefinitionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRateDefinitionGroupResponse;
  static deserializeBinaryFromReader(message: CreateRateDefinitionGroupResponse, reader: jspb.BinaryReader): CreateRateDefinitionGroupResponse;
}

export namespace CreateRateDefinitionGroupResponse {
  export type AsObject = {
    rateDefinitionGroupId: string,
  }
}

export class DeleteRateDefinitionGroupRequest extends jspb.Message {
  getRateDefinitionGroupId(): string;
  setRateDefinitionGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRateDefinitionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRateDefinitionGroupRequest): DeleteRateDefinitionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRateDefinitionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRateDefinitionGroupRequest;
  static deserializeBinaryFromReader(message: DeleteRateDefinitionGroupRequest, reader: jspb.BinaryReader): DeleteRateDefinitionGroupRequest;
}

export namespace DeleteRateDefinitionGroupRequest {
  export type AsObject = {
    rateDefinitionGroupId: string,
  }
}

export class DeleteRateDefinitionGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRateDefinitionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRateDefinitionGroupResponse): DeleteRateDefinitionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRateDefinitionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRateDefinitionGroupResponse;
  static deserializeBinaryFromReader(message: DeleteRateDefinitionGroupResponse, reader: jspb.BinaryReader): DeleteRateDefinitionGroupResponse;
}

export namespace DeleteRateDefinitionGroupResponse {
  export type AsObject = {
  }
}

export class GetRateDefinitionGroupRequest extends jspb.Message {
  getRateDefinitionGroupId(): string;
  setRateDefinitionGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRateDefinitionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRateDefinitionGroupRequest): GetRateDefinitionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRateDefinitionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRateDefinitionGroupRequest;
  static deserializeBinaryFromReader(message: GetRateDefinitionGroupRequest, reader: jspb.BinaryReader): GetRateDefinitionGroupRequest;
}

export namespace GetRateDefinitionGroupRequest {
  export type AsObject = {
    rateDefinitionGroupId: string,
  }
}

export class GetRateDefinitionGroupResponse extends jspb.Message {
  hasRateDefinitionGroup(): boolean;
  clearRateDefinitionGroup(): void;
  getRateDefinitionGroup(): services_billing_entities_v1alpha1_groups_pb.RateDefinitionGroup | undefined;
  setRateDefinitionGroup(value?: services_billing_entities_v1alpha1_groups_pb.RateDefinitionGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRateDefinitionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRateDefinitionGroupResponse): GetRateDefinitionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRateDefinitionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRateDefinitionGroupResponse;
  static deserializeBinaryFromReader(message: GetRateDefinitionGroupResponse, reader: jspb.BinaryReader): GetRateDefinitionGroupResponse;
}

export namespace GetRateDefinitionGroupResponse {
  export type AsObject = {
    rateDefinitionGroup?: services_billing_entities_v1alpha1_groups_pb.RateDefinitionGroup.AsObject,
  }
}

export class ListRateDefinitionGroupsRequest extends jspb.Message {
  getRateDefinitionGroupId(): string;
  setRateDefinitionGroupId(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  hasFields(): boolean;
  clearFields(): void;
  getFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFields(value?: google_protobuf_field_mask_pb.FieldMask): void;

  clearSortList(): void;
  getSortList(): Array<services_billing_v1alpha1_core_pb.Sort>;
  setSortList(value: Array<services_billing_v1alpha1_core_pb.Sort>): void;
  addSort(value?: services_billing_v1alpha1_core_pb.Sort, index?: number): services_billing_v1alpha1_core_pb.Sort;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): services_billing_v1alpha1_core_pb.Page | undefined;
  setPage(value?: services_billing_v1alpha1_core_pb.Page): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRateDefinitionGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRateDefinitionGroupsRequest): ListRateDefinitionGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRateDefinitionGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRateDefinitionGroupsRequest;
  static deserializeBinaryFromReader(message: ListRateDefinitionGroupsRequest, reader: jspb.BinaryReader): ListRateDefinitionGroupsRequest;
}

export namespace ListRateDefinitionGroupsRequest {
  export type AsObject = {
    rateDefinitionGroupId: string,
    filter: string,
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    sortList: Array<services_billing_v1alpha1_core_pb.Sort.AsObject>,
    page?: services_billing_v1alpha1_core_pb.Page.AsObject,
  }
}

export class ListRateDefinitionGroupsResponse extends jspb.Message {
  clearRateDefinitionGroupsList(): void;
  getRateDefinitionGroupsList(): Array<services_billing_entities_v1alpha1_groups_pb.RateDefinitionGroup>;
  setRateDefinitionGroupsList(value: Array<services_billing_entities_v1alpha1_groups_pb.RateDefinitionGroup>): void;
  addRateDefinitionGroups(value?: services_billing_entities_v1alpha1_groups_pb.RateDefinitionGroup, index?: number): services_billing_entities_v1alpha1_groups_pb.RateDefinitionGroup;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRateDefinitionGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRateDefinitionGroupsResponse): ListRateDefinitionGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRateDefinitionGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRateDefinitionGroupsResponse;
  static deserializeBinaryFromReader(message: ListRateDefinitionGroupsResponse, reader: jspb.BinaryReader): ListRateDefinitionGroupsResponse;
}

export namespace ListRateDefinitionGroupsResponse {
  export type AsObject = {
    rateDefinitionGroupsList: Array<services_billing_entities_v1alpha1_groups_pb.RateDefinitionGroup.AsObject>,
    token: string,
  }
}

export class UpdateRateDefinitionGroupRequest extends jspb.Message {
  getRateDefinitionGroupId(): string;
  setRateDefinitionGroupId(value: string): void;

  hasRateDefinitionGroup(): boolean;
  clearRateDefinitionGroup(): void;
  getRateDefinitionGroup(): services_billing_entities_v1alpha1_groups_pb.RateDefinitionGroup | undefined;
  setRateDefinitionGroup(value?: services_billing_entities_v1alpha1_groups_pb.RateDefinitionGroup): void;

  hasUpdateFields(): boolean;
  clearUpdateFields(): void;
  getUpdateFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateFields(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRateDefinitionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRateDefinitionGroupRequest): UpdateRateDefinitionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRateDefinitionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRateDefinitionGroupRequest;
  static deserializeBinaryFromReader(message: UpdateRateDefinitionGroupRequest, reader: jspb.BinaryReader): UpdateRateDefinitionGroupRequest;
}

export namespace UpdateRateDefinitionGroupRequest {
  export type AsObject = {
    rateDefinitionGroupId: string,
    rateDefinitionGroup?: services_billing_entities_v1alpha1_groups_pb.RateDefinitionGroup.AsObject,
    updateFields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateRateDefinitionGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRateDefinitionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRateDefinitionGroupResponse): UpdateRateDefinitionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRateDefinitionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRateDefinitionGroupResponse;
  static deserializeBinaryFromReader(message: UpdateRateDefinitionGroupResponse, reader: jspb.BinaryReader): UpdateRateDefinitionGroupResponse;
}

export namespace UpdateRateDefinitionGroupResponse {
  export type AsObject = {
  }
}

