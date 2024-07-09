// package: api.v1alpha1.scorecards
// file: api/v1alpha1/scorecards/auto_evaluation.proto

import * as jspb from "google-protobuf";
import * as api_commons_scorecards_pb from "../../../api/commons/scorecards_pb";

export class GetAutoEvaluationRequest extends jspb.Message {
  getAutoEvaluationId(): number;
  setAutoEvaluationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAutoEvaluationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAutoEvaluationRequest): GetAutoEvaluationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAutoEvaluationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAutoEvaluationRequest;
  static deserializeBinaryFromReader(message: GetAutoEvaluationRequest, reader: jspb.BinaryReader): GetAutoEvaluationRequest;
}

export namespace GetAutoEvaluationRequest {
  export type AsObject = {
    autoEvaluationId: number,
  }
}

export class GetAutoEvaluationResponse extends jspb.Message {
  hasAutoEvaluation(): boolean;
  clearAutoEvaluation(): void;
  getAutoEvaluation(): api_commons_scorecards_pb.AutoEvaluation | undefined;
  setAutoEvaluation(value?: api_commons_scorecards_pb.AutoEvaluation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAutoEvaluationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAutoEvaluationResponse): GetAutoEvaluationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAutoEvaluationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAutoEvaluationResponse;
  static deserializeBinaryFromReader(message: GetAutoEvaluationResponse, reader: jspb.BinaryReader): GetAutoEvaluationResponse;
}

export namespace GetAutoEvaluationResponse {
  export type AsObject = {
    autoEvaluation?: api_commons_scorecards_pb.AutoEvaluation.AsObject,
  }
}

export class ListAutoEvaluationsRequest extends jspb.Message {
  clearScorecardIdsList(): void;
  getScorecardIdsList(): Array<number>;
  setScorecardIdsList(value: Array<number>): void;
  addScorecardIds(value: number, index?: number): number;

  hasCompletedAt(): boolean;
  clearCompletedAt(): void;
  getCompletedAt(): api_commons_scorecards_pb.TimeFilter | undefined;
  setCompletedAt(value?: api_commons_scorecards_pb.TimeFilter): void;

  clearCategoryIdsList(): void;
  getCategoryIdsList(): Array<number>;
  setCategoryIdsList(value: Array<number>): void;
  addCategoryIds(value: number, index?: number): number;

  hasCallSid(): boolean;
  clearCallSid(): void;
  getCallSid(): ListAutoEvaluationsRequest.CallSidFilter | undefined;
  setCallSid(value?: ListAutoEvaluationsRequest.CallSidFilter): void;

  clearAgentUserIdsList(): void;
  getAgentUserIdsList(): Array<string>;
  setAgentUserIdsList(value: Array<string>): void;
  addAgentUserIds(value: string, index?: number): string;

  getPageSize(): number;
  setPageSize(value: number): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  clearRiskLevelsList(): void;
  getRiskLevelsList(): Array<api_commons_scorecards_pb.RiskLevelMap[keyof api_commons_scorecards_pb.RiskLevelMap]>;
  setRiskLevelsList(value: Array<api_commons_scorecards_pb.RiskLevelMap[keyof api_commons_scorecards_pb.RiskLevelMap]>): void;
  addRiskLevels(value: api_commons_scorecards_pb.RiskLevelMap[keyof api_commons_scorecards_pb.RiskLevelMap], index?: number): api_commons_scorecards_pb.RiskLevelMap[keyof api_commons_scorecards_pb.RiskLevelMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAutoEvaluationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAutoEvaluationsRequest): ListAutoEvaluationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAutoEvaluationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAutoEvaluationsRequest;
  static deserializeBinaryFromReader(message: ListAutoEvaluationsRequest, reader: jspb.BinaryReader): ListAutoEvaluationsRequest;
}

export namespace ListAutoEvaluationsRequest {
  export type AsObject = {
    scorecardIdsList: Array<number>,
    completedAt?: api_commons_scorecards_pb.TimeFilter.AsObject,
    categoryIdsList: Array<number>,
    callSid?: ListAutoEvaluationsRequest.CallSidFilter.AsObject,
    agentUserIdsList: Array<string>,
    pageSize: number,
    orderBy: string,
    pageToken: string,
    riskLevelsList: Array<api_commons_scorecards_pb.RiskLevelMap[keyof api_commons_scorecards_pb.RiskLevelMap]>,
  }

  export class CallSidFilter extends jspb.Message {
    clearAnyOfList(): void;
    getAnyOfList(): Array<number>;
    setAnyOfList(value: Array<number>): void;
    addAnyOf(value: number, index?: number): number;

    getEq(): number;
    setEq(value: number): void;

    getGte(): number;
    setGte(value: number): void;

    getLte(): number;
    setLte(value: number): void;

    getGt(): number;
    setGt(value: number): void;

    getLt(): number;
    setLt(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallSidFilter.AsObject;
    static toObject(includeInstance: boolean, msg: CallSidFilter): CallSidFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallSidFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallSidFilter;
    static deserializeBinaryFromReader(message: CallSidFilter, reader: jspb.BinaryReader): CallSidFilter;
  }

  export namespace CallSidFilter {
    export type AsObject = {
      anyOfList: Array<number>,
      eq: number,
      gte: number,
      lte: number,
      gt: number,
      lt: number,
    }
  }
}

export class ListAutoEvaluationsResponse extends jspb.Message {
  clearAutoEvaluationsList(): void;
  getAutoEvaluationsList(): Array<api_commons_scorecards_pb.AutoEvaluation>;
  setAutoEvaluationsList(value: Array<api_commons_scorecards_pb.AutoEvaluation>): void;
  addAutoEvaluations(value?: api_commons_scorecards_pb.AutoEvaluation, index?: number): api_commons_scorecards_pb.AutoEvaluation;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAutoEvaluationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAutoEvaluationsResponse): ListAutoEvaluationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAutoEvaluationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAutoEvaluationsResponse;
  static deserializeBinaryFromReader(message: ListAutoEvaluationsResponse, reader: jspb.BinaryReader): ListAutoEvaluationsResponse;
}

export namespace ListAutoEvaluationsResponse {
  export type AsObject = {
    autoEvaluationsList: Array<api_commons_scorecards_pb.AutoEvaluation.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteAutoEvaluationRequest extends jspb.Message {
  getAutoEvaluationId(): number;
  setAutoEvaluationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAutoEvaluationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAutoEvaluationRequest): DeleteAutoEvaluationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAutoEvaluationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAutoEvaluationRequest;
  static deserializeBinaryFromReader(message: DeleteAutoEvaluationRequest, reader: jspb.BinaryReader): DeleteAutoEvaluationRequest;
}

export namespace DeleteAutoEvaluationRequest {
  export type AsObject = {
    autoEvaluationId: number,
  }
}

export class DeleteAutoEvaluationResponse extends jspb.Message {
  hasAutoEvaluation(): boolean;
  clearAutoEvaluation(): void;
  getAutoEvaluation(): api_commons_scorecards_pb.AutoEvaluation | undefined;
  setAutoEvaluation(value?: api_commons_scorecards_pb.AutoEvaluation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAutoEvaluationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAutoEvaluationResponse): DeleteAutoEvaluationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAutoEvaluationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAutoEvaluationResponse;
  static deserializeBinaryFromReader(message: DeleteAutoEvaluationResponse, reader: jspb.BinaryReader): DeleteAutoEvaluationResponse;
}

export namespace DeleteAutoEvaluationResponse {
  export type AsObject = {
    autoEvaluation?: api_commons_scorecards_pb.AutoEvaluation.AsObject,
  }
}

export class StreamAutoEvaluationsRequest extends jspb.Message {
  clearScorecardIdsList(): void;
  getScorecardIdsList(): Array<number>;
  setScorecardIdsList(value: Array<number>): void;
  addScorecardIds(value: number, index?: number): number;

  hasCompletedAt(): boolean;
  clearCompletedAt(): void;
  getCompletedAt(): api_commons_scorecards_pb.TimeFilter | undefined;
  setCompletedAt(value?: api_commons_scorecards_pb.TimeFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamAutoEvaluationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamAutoEvaluationsRequest): StreamAutoEvaluationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamAutoEvaluationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamAutoEvaluationsRequest;
  static deserializeBinaryFromReader(message: StreamAutoEvaluationsRequest, reader: jspb.BinaryReader): StreamAutoEvaluationsRequest;
}

export namespace StreamAutoEvaluationsRequest {
  export type AsObject = {
    scorecardIdsList: Array<number>,
    completedAt?: api_commons_scorecards_pb.TimeFilter.AsObject,
  }
}

export class StreamAutoEvaluationsResponse extends jspb.Message {
  hasAutoEvaluation(): boolean;
  clearAutoEvaluation(): void;
  getAutoEvaluation(): api_commons_scorecards_pb.AutoEvaluation | undefined;
  setAutoEvaluation(value?: api_commons_scorecards_pb.AutoEvaluation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamAutoEvaluationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamAutoEvaluationsResponse): StreamAutoEvaluationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamAutoEvaluationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamAutoEvaluationsResponse;
  static deserializeBinaryFromReader(message: StreamAutoEvaluationsResponse, reader: jspb.BinaryReader): StreamAutoEvaluationsResponse;
}

export namespace StreamAutoEvaluationsResponse {
  export type AsObject = {
    autoEvaluation?: api_commons_scorecards_pb.AutoEvaluation.AsObject,
  }
}

export class ListAutoEvaluationsByOrgIdRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  clearScorecardIdsList(): void;
  getScorecardIdsList(): Array<number>;
  setScorecardIdsList(value: Array<number>): void;
  addScorecardIds(value: number, index?: number): number;

  hasCompletedAt(): boolean;
  clearCompletedAt(): void;
  getCompletedAt(): api_commons_scorecards_pb.TimeFilter | undefined;
  setCompletedAt(value?: api_commons_scorecards_pb.TimeFilter): void;

  clearCategoryIdsList(): void;
  getCategoryIdsList(): Array<number>;
  setCategoryIdsList(value: Array<number>): void;
  addCategoryIds(value: number, index?: number): number;

  hasCallSid(): boolean;
  clearCallSid(): void;
  getCallSid(): ListAutoEvaluationsByOrgIdRequest.CallSidFilter | undefined;
  setCallSid(value?: ListAutoEvaluationsByOrgIdRequest.CallSidFilter): void;

  clearAgentUserIdsList(): void;
  getAgentUserIdsList(): Array<string>;
  setAgentUserIdsList(value: Array<string>): void;
  addAgentUserIds(value: string, index?: number): string;

  getPageSize(): number;
  setPageSize(value: number): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  clearRiskLevelsList(): void;
  getRiskLevelsList(): Array<api_commons_scorecards_pb.RiskLevelMap[keyof api_commons_scorecards_pb.RiskLevelMap]>;
  setRiskLevelsList(value: Array<api_commons_scorecards_pb.RiskLevelMap[keyof api_commons_scorecards_pb.RiskLevelMap]>): void;
  addRiskLevels(value: api_commons_scorecards_pb.RiskLevelMap[keyof api_commons_scorecards_pb.RiskLevelMap], index?: number): api_commons_scorecards_pb.RiskLevelMap[keyof api_commons_scorecards_pb.RiskLevelMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAutoEvaluationsByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAutoEvaluationsByOrgIdRequest): ListAutoEvaluationsByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAutoEvaluationsByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAutoEvaluationsByOrgIdRequest;
  static deserializeBinaryFromReader(message: ListAutoEvaluationsByOrgIdRequest, reader: jspb.BinaryReader): ListAutoEvaluationsByOrgIdRequest;
}

export namespace ListAutoEvaluationsByOrgIdRequest {
  export type AsObject = {
    orgId: string,
    scorecardIdsList: Array<number>,
    completedAt?: api_commons_scorecards_pb.TimeFilter.AsObject,
    categoryIdsList: Array<number>,
    callSid?: ListAutoEvaluationsByOrgIdRequest.CallSidFilter.AsObject,
    agentUserIdsList: Array<string>,
    pageSize: number,
    orderBy: string,
    pageToken: string,
    riskLevelsList: Array<api_commons_scorecards_pb.RiskLevelMap[keyof api_commons_scorecards_pb.RiskLevelMap]>,
  }

  export class CallSidFilter extends jspb.Message {
    clearAnyOfList(): void;
    getAnyOfList(): Array<number>;
    setAnyOfList(value: Array<number>): void;
    addAnyOf(value: number, index?: number): number;

    getEq(): number;
    setEq(value: number): void;

    getGte(): number;
    setGte(value: number): void;

    getLte(): number;
    setLte(value: number): void;

    getGt(): number;
    setGt(value: number): void;

    getLt(): number;
    setLt(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallSidFilter.AsObject;
    static toObject(includeInstance: boolean, msg: CallSidFilter): CallSidFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallSidFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallSidFilter;
    static deserializeBinaryFromReader(message: CallSidFilter, reader: jspb.BinaryReader): CallSidFilter;
  }

  export namespace CallSidFilter {
    export type AsObject = {
      anyOfList: Array<number>,
      eq: number,
      gte: number,
      lte: number,
      gt: number,
      lt: number,
    }
  }
}

export class DeleteAutoEvaluationByOrgIdRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getAutoEvaluationId(): number;
  setAutoEvaluationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAutoEvaluationByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAutoEvaluationByOrgIdRequest): DeleteAutoEvaluationByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAutoEvaluationByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAutoEvaluationByOrgIdRequest;
  static deserializeBinaryFromReader(message: DeleteAutoEvaluationByOrgIdRequest, reader: jspb.BinaryReader): DeleteAutoEvaluationByOrgIdRequest;
}

export namespace DeleteAutoEvaluationByOrgIdRequest {
  export type AsObject = {
    orgId: string,
    autoEvaluationId: number,
  }
}

export class BulkDeleteAutoEvaluationsRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  clearAutoEvaluationIdsList(): void;
  getAutoEvaluationIdsList(): Array<number>;
  setAutoEvaluationIdsList(value: Array<number>): void;
  addAutoEvaluationIds(value: number, index?: number): number;

  hasCompletedAt(): boolean;
  clearCompletedAt(): void;
  getCompletedAt(): api_commons_scorecards_pb.TimeFilter | undefined;
  setCompletedAt(value?: api_commons_scorecards_pb.TimeFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulkDeleteAutoEvaluationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BulkDeleteAutoEvaluationsRequest): BulkDeleteAutoEvaluationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BulkDeleteAutoEvaluationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulkDeleteAutoEvaluationsRequest;
  static deserializeBinaryFromReader(message: BulkDeleteAutoEvaluationsRequest, reader: jspb.BinaryReader): BulkDeleteAutoEvaluationsRequest;
}

export namespace BulkDeleteAutoEvaluationsRequest {
  export type AsObject = {
    orgId: string,
    autoEvaluationIdsList: Array<number>,
    completedAt?: api_commons_scorecards_pb.TimeFilter.AsObject,
  }
}

export class BulkDeleteAutoEvaluationsResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulkDeleteAutoEvaluationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BulkDeleteAutoEvaluationsResponse): BulkDeleteAutoEvaluationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BulkDeleteAutoEvaluationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulkDeleteAutoEvaluationsResponse;
  static deserializeBinaryFromReader(message: BulkDeleteAutoEvaluationsResponse, reader: jspb.BinaryReader): BulkDeleteAutoEvaluationsResponse;
}

export namespace BulkDeleteAutoEvaluationsResponse {
  export type AsObject = {
    count: number,
  }
}

