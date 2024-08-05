// package: api.v1alpha1.projects
// file: api/v1alpha1/projects/projects.proto

import * as jspb from "google-protobuf";
import * as google_api_expr_v1alpha1_syntax_pb from "../../../google/api/expr/v1alpha1/syntax_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class ListProjectsRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): google_api_expr_v1alpha1_syntax_pb.ParsedExpr | undefined;
  setFilter(value?: google_api_expr_v1alpha1_syntax_pb.ParsedExpr): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectsRequest): ListProjectsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProjectsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectsRequest;
  static deserializeBinaryFromReader(message: ListProjectsRequest, reader: jspb.BinaryReader): ListProjectsRequest;
}

export namespace ListProjectsRequest {
  export type AsObject = {
    filter?: google_api_expr_v1alpha1_syntax_pb.ParsedExpr.AsObject,
  }
}

export class ListProjectsResponse extends jspb.Message {
  clearProjectsList(): void;
  getProjectsList(): Array<Project>;
  setProjectsList(value: Array<Project>): void;
  addProjects(value?: Project, index?: number): Project;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectsResponse): ListProjectsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProjectsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectsResponse;
  static deserializeBinaryFromReader(message: ListProjectsResponse, reader: jspb.BinaryReader): ListProjectsResponse;
}

export namespace ListProjectsResponse {
  export type AsObject = {
    projectsList: Array<Project.AsObject>,
  }
}

export class GetProjectByIdRequest extends jspb.Message {
  getProjectSid(): string;
  setProjectSid(value: string): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectByIdRequest): GetProjectByIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProjectByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectByIdRequest;
  static deserializeBinaryFromReader(message: GetProjectByIdRequest, reader: jspb.BinaryReader): GetProjectByIdRequest;
}

export namespace GetProjectByIdRequest {
  export type AsObject = {
    projectSid: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetProjectByIdResponse extends jspb.Message {
  hasProject(): boolean;
  clearProject(): void;
  getProject(): Project | undefined;
  setProject(value?: Project): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectByIdResponse): GetProjectByIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProjectByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectByIdResponse;
  static deserializeBinaryFromReader(message: GetProjectByIdResponse, reader: jspb.BinaryReader): GetProjectByIdResponse;
}

export namespace GetProjectByIdResponse {
  export type AsObject = {
    project?: Project.AsObject,
  }
}

export class Project extends jspb.Message {
  getProjectSid(): string;
  setProjectSid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getStatus(): ProjectStatusMap[keyof ProjectStatusMap];
  setStatus(value: ProjectStatusMap[keyof ProjectStatusMap]): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasComplianceConfig(): boolean;
  clearComplianceConfig(): void;
  getComplianceConfig(): OmniProjectComplianceConfig | undefined;
  setComplianceConfig(value?: OmniProjectComplianceConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Project.AsObject;
  static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Project;
  static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

export namespace Project {
  export type AsObject = {
    projectSid: string,
    name: string,
    description: string,
    status: ProjectStatusMap[keyof ProjectStatusMap],
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    complianceConfig?: OmniProjectComplianceConfig.AsObject,
  }
}

export class OmniProjectComplianceConfig extends jspb.Message {
  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): OmniComplianceConfig | undefined;
  setEmail(value?: OmniComplianceConfig): void;

  hasSms(): boolean;
  clearSms(): void;
  getSms(): OmniComplianceConfig | undefined;
  setSms(value?: OmniComplianceConfig): void;

  hasWhatsapp(): boolean;
  clearWhatsapp(): void;
  getWhatsapp(): OmniComplianceConfig | undefined;
  setWhatsapp(value?: OmniComplianceConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniProjectComplianceConfig.AsObject;
  static toObject(includeInstance: boolean, msg: OmniProjectComplianceConfig): OmniProjectComplianceConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniProjectComplianceConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniProjectComplianceConfig;
  static deserializeBinaryFromReader(message: OmniProjectComplianceConfig, reader: jspb.BinaryReader): OmniProjectComplianceConfig;
}

export namespace OmniProjectComplianceConfig {
  export type AsObject = {
    email?: OmniComplianceConfig.AsObject,
    sms?: OmniComplianceConfig.AsObject,
    whatsapp?: OmniComplianceConfig.AsObject,
  }
}

export class OmniComplianceConfig extends jspb.Message {
  hasOptIn(): boolean;
  clearOptIn(): void;
  getOptIn(): OmniComplianceAction | undefined;
  setOptIn(value?: OmniComplianceAction): void;

  hasOptOut(): boolean;
  clearOptOut(): void;
  getOptOut(): OmniComplianceAction | undefined;
  setOptOut(value?: OmniComplianceAction): void;

  hasHelp(): boolean;
  clearHelp(): void;
  getHelp(): OmniComplianceAction | undefined;
  setHelp(value?: OmniComplianceAction): void;

  hasInformation(): boolean;
  clearInformation(): void;
  getInformation(): OmniComplianceAction | undefined;
  setInformation(value?: OmniComplianceAction): void;

  getScrubListId(): string;
  setScrubListId(value: string): void;

  hasRuleSetId(): boolean;
  clearRuleSetId(): void;
  getRuleSetId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setRuleSetId(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniComplianceConfig.AsObject;
  static toObject(includeInstance: boolean, msg: OmniComplianceConfig): OmniComplianceConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniComplianceConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniComplianceConfig;
  static deserializeBinaryFromReader(message: OmniComplianceConfig, reader: jspb.BinaryReader): OmniComplianceConfig;
}

export namespace OmniComplianceConfig {
  export type AsObject = {
    optIn?: OmniComplianceAction.AsObject,
    optOut?: OmniComplianceAction.AsObject,
    help?: OmniComplianceAction.AsObject,
    information?: OmniComplianceAction.AsObject,
    scrubListId: string,
    ruleSetId?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class OmniComplianceAction extends jspb.Message {
  clearKeywordsList(): void;
  getKeywordsList(): Array<string>;
  setKeywordsList(value: Array<string>): void;
  addKeywords(value: string, index?: number): string;

  getConfirmationMessage(): string;
  setConfirmationMessage(value: string): void;

  getIsFuzzyMatch(): boolean;
  setIsFuzzyMatch(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniComplianceAction.AsObject;
  static toObject(includeInstance: boolean, msg: OmniComplianceAction): OmniComplianceAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniComplianceAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniComplianceAction;
  static deserializeBinaryFromReader(message: OmniComplianceAction, reader: jspb.BinaryReader): OmniComplianceAction;
}

export namespace OmniComplianceAction {
  export type AsObject = {
    keywordsList: Array<string>,
    confirmationMessage: string,
    isFuzzyMatch: boolean,
  }
}

export interface ProjectStatusMap {
  PROJECT_STATUS_UNKNOWN: 0;
  PROJECT_STATUS_OPEN: 17000;
  PROJECT_STATUS_CLOSED: 17010;
}

export const ProjectStatus: ProjectStatusMap;

