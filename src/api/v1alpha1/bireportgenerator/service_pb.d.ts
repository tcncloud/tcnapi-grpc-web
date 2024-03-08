// package: api.v1alpha1.bireportgenerator
// file: api/v1alpha1/bireportgenerator/service.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../annotations/authz_pb";
import * as api_v1alpha1_bireportgenerator_entities_pb from "../../../api/v1alpha1/bireportgenerator/entities_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class CreateReportJobRequest extends jspb.Message {
  hasReportJob(): boolean;
  clearReportJob(): void;
  getReportJob(): api_v1alpha1_bireportgenerator_entities_pb.ReportJob | undefined;
  setReportJob(value?: api_v1alpha1_bireportgenerator_entities_pb.ReportJob): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReportJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReportJobRequest): CreateReportJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateReportJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReportJobRequest;
  static deserializeBinaryFromReader(message: CreateReportJobRequest, reader: jspb.BinaryReader): CreateReportJobRequest;
}

export namespace CreateReportJobRequest {
  export type AsObject = {
    reportJob?: api_v1alpha1_bireportgenerator_entities_pb.ReportJob.AsObject,
  }
}

export class CreateReportJobResponse extends jspb.Message {
  hasReportJob(): boolean;
  clearReportJob(): void;
  getReportJob(): api_v1alpha1_bireportgenerator_entities_pb.ReportJob | undefined;
  setReportJob(value?: api_v1alpha1_bireportgenerator_entities_pb.ReportJob): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReportJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReportJobResponse): CreateReportJobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateReportJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReportJobResponse;
  static deserializeBinaryFromReader(message: CreateReportJobResponse, reader: jspb.BinaryReader): CreateReportJobResponse;
}

export namespace CreateReportJobResponse {
  export type AsObject = {
    reportJob?: api_v1alpha1_bireportgenerator_entities_pb.ReportJob.AsObject,
  }
}

export class ListReportJobsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReportJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListReportJobsRequest): ListReportJobsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListReportJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReportJobsRequest;
  static deserializeBinaryFromReader(message: ListReportJobsRequest, reader: jspb.BinaryReader): ListReportJobsRequest;
}

export namespace ListReportJobsRequest {
  export type AsObject = {
  }
}

export class ListReportJobsResponse extends jspb.Message {
  clearReportJobsList(): void;
  getReportJobsList(): Array<api_v1alpha1_bireportgenerator_entities_pb.ReportJob>;
  setReportJobsList(value: Array<api_v1alpha1_bireportgenerator_entities_pb.ReportJob>): void;
  addReportJobs(value?: api_v1alpha1_bireportgenerator_entities_pb.ReportJob, index?: number): api_v1alpha1_bireportgenerator_entities_pb.ReportJob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReportJobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListReportJobsResponse): ListReportJobsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListReportJobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReportJobsResponse;
  static deserializeBinaryFromReader(message: ListReportJobsResponse, reader: jspb.BinaryReader): ListReportJobsResponse;
}

export namespace ListReportJobsResponse {
  export type AsObject = {
    reportJobsList: Array<api_v1alpha1_bireportgenerator_entities_pb.ReportJob.AsObject>,
  }
}

export class UpdateReportJobRequest extends jspb.Message {
  hasReportJob(): boolean;
  clearReportJob(): void;
  getReportJob(): api_v1alpha1_bireportgenerator_entities_pb.ReportJob | undefined;
  setReportJob(value?: api_v1alpha1_bireportgenerator_entities_pb.ReportJob): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReportJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReportJobRequest): UpdateReportJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateReportJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReportJobRequest;
  static deserializeBinaryFromReader(message: UpdateReportJobRequest, reader: jspb.BinaryReader): UpdateReportJobRequest;
}

export namespace UpdateReportJobRequest {
  export type AsObject = {
    reportJob?: api_v1alpha1_bireportgenerator_entities_pb.ReportJob.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateReportJobResponse extends jspb.Message {
  hasReportJob(): boolean;
  clearReportJob(): void;
  getReportJob(): api_v1alpha1_bireportgenerator_entities_pb.ReportJob | undefined;
  setReportJob(value?: api_v1alpha1_bireportgenerator_entities_pb.ReportJob): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReportJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReportJobResponse): UpdateReportJobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateReportJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReportJobResponse;
  static deserializeBinaryFromReader(message: UpdateReportJobResponse, reader: jspb.BinaryReader): UpdateReportJobResponse;
}

export namespace UpdateReportJobResponse {
  export type AsObject = {
    reportJob?: api_v1alpha1_bireportgenerator_entities_pb.ReportJob.AsObject,
  }
}

export class DeleteReportJobRequest extends jspb.Message {
  getReportJobId(): string;
  setReportJobId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteReportJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteReportJobRequest): DeleteReportJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteReportJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteReportJobRequest;
  static deserializeBinaryFromReader(message: DeleteReportJobRequest, reader: jspb.BinaryReader): DeleteReportJobRequest;
}

export namespace DeleteReportJobRequest {
  export type AsObject = {
    reportJobId: string,
  }
}

export class DeleteReportJobResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteReportJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteReportJobResponse): DeleteReportJobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteReportJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteReportJobResponse;
  static deserializeBinaryFromReader(message: DeleteReportJobResponse, reader: jspb.BinaryReader): DeleteReportJobResponse;
}

export namespace DeleteReportJobResponse {
  export type AsObject = {
  }
}

export class GetReportJobRequest extends jspb.Message {
  getReportJobId(): string;
  setReportJobId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReportJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReportJobRequest): GetReportJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReportJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReportJobRequest;
  static deserializeBinaryFromReader(message: GetReportJobRequest, reader: jspb.BinaryReader): GetReportJobRequest;
}

export namespace GetReportJobRequest {
  export type AsObject = {
    reportJobId: string,
  }
}

export class GetReportJobResponse extends jspb.Message {
  hasReportJob(): boolean;
  clearReportJob(): void;
  getReportJob(): api_v1alpha1_bireportgenerator_entities_pb.ReportJob | undefined;
  setReportJob(value?: api_v1alpha1_bireportgenerator_entities_pb.ReportJob): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReportJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetReportJobResponse): GetReportJobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReportJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReportJobResponse;
  static deserializeBinaryFromReader(message: GetReportJobResponse, reader: jspb.BinaryReader): GetReportJobResponse;
}

export namespace GetReportJobResponse {
  export type AsObject = {
    reportJob?: api_v1alpha1_bireportgenerator_entities_pb.ReportJob.AsObject,
  }
}

export class GenerateReportRequest extends jspb.Message {
  hasReportJob(): boolean;
  clearReportJob(): void;
  getReportJob(): api_v1alpha1_bireportgenerator_entities_pb.ReportJob | undefined;
  setReportJob(value?: api_v1alpha1_bireportgenerator_entities_pb.ReportJob): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateReportRequest): GenerateReportRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateReportRequest;
  static deserializeBinaryFromReader(message: GenerateReportRequest, reader: jspb.BinaryReader): GenerateReportRequest;
}

export namespace GenerateReportRequest {
  export type AsObject = {
    reportJob?: api_v1alpha1_bireportgenerator_entities_pb.ReportJob.AsObject,
  }
}

export class GenerateReportResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateReportResponse): GenerateReportResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateReportResponse;
  static deserializeBinaryFromReader(message: GenerateReportResponse, reader: jspb.BinaryReader): GenerateReportResponse;
}

export namespace GenerateReportResponse {
  export type AsObject = {
  }
}

