// package: api.v0alpha
// file: api/v0alpha/ana.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../annotations/authz_pb";
import * as api_commons_ana_pb from "../../api/commons/ana_pb";
import * as api_commons_ana_charts_pb from "../../api/commons/ana_charts_pb";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class SetWeeksReq extends jspb.Message {
  getWeeks(): number;
  setWeeks(value: number): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetWeeksReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetWeeksReq): SetWeeksReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetWeeksReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetWeeksReq;
  static deserializeBinaryFromReader(message: SetWeeksReq, reader: jspb.BinaryReader): SetWeeksReq;
}

export namespace SetWeeksReq {
  export type AsObject = {
    weeks: number,
    orgId: string,
  }
}

export class SetWeeksRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetWeeksRes.AsObject;
  static toObject(includeInstance: boolean, msg: SetWeeksRes): SetWeeksRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetWeeksRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetWeeksRes;
  static deserializeBinaryFromReader(message: SetWeeksRes, reader: jspb.BinaryReader): SetWeeksRes;
}

export namespace SetWeeksRes {
  export type AsObject = {
  }
}

export class SetHomeDashboardReq extends jspb.Message {
  getHomeDashboard(): string;
  setHomeDashboard(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetHomeDashboardReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetHomeDashboardReq): SetHomeDashboardReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetHomeDashboardReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetHomeDashboardReq;
  static deserializeBinaryFromReader(message: SetHomeDashboardReq, reader: jspb.BinaryReader): SetHomeDashboardReq;
}

export namespace SetHomeDashboardReq {
  export type AsObject = {
    homeDashboard: string,
  }
}

export class SetHomeDashboardRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetHomeDashboardRes.AsObject;
  static toObject(includeInstance: boolean, msg: SetHomeDashboardRes): SetHomeDashboardRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetHomeDashboardRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetHomeDashboardRes;
  static deserializeBinaryFromReader(message: SetHomeDashboardRes, reader: jspb.BinaryReader): SetHomeDashboardRes;
}

export namespace SetHomeDashboardRes {
  export type AsObject = {
  }
}

export class SetDefaultTimeFilterReq extends jspb.Message {
  getDefaultTimeFilter(): string;
  setDefaultTimeFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDefaultTimeFilterReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetDefaultTimeFilterReq): SetDefaultTimeFilterReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDefaultTimeFilterReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDefaultTimeFilterReq;
  static deserializeBinaryFromReader(message: SetDefaultTimeFilterReq, reader: jspb.BinaryReader): SetDefaultTimeFilterReq;
}

export namespace SetDefaultTimeFilterReq {
  export type AsObject = {
    defaultTimeFilter: string,
  }
}

export class SetDefaultTimeFilterRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDefaultTimeFilterRes.AsObject;
  static toObject(includeInstance: boolean, msg: SetDefaultTimeFilterRes): SetDefaultTimeFilterRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDefaultTimeFilterRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDefaultTimeFilterRes;
  static deserializeBinaryFromReader(message: SetDefaultTimeFilterRes, reader: jspb.BinaryReader): SetDefaultTimeFilterRes;
}

export namespace SetDefaultTimeFilterRes {
  export type AsObject = {
  }
}

export class SetDefaultDashboardReq extends jspb.Message {
  getDashboardId(): string;
  setDashboardId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDefaultDashboardReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetDefaultDashboardReq): SetDefaultDashboardReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDefaultDashboardReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDefaultDashboardReq;
  static deserializeBinaryFromReader(message: SetDefaultDashboardReq, reader: jspb.BinaryReader): SetDefaultDashboardReq;
}

export namespace SetDefaultDashboardReq {
  export type AsObject = {
    dashboardId: string,
  }
}

export class SetDefaultDashboardRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDefaultDashboardRes.AsObject;
  static toObject(includeInstance: boolean, msg: SetDefaultDashboardRes): SetDefaultDashboardRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDefaultDashboardRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDefaultDashboardRes;
  static deserializeBinaryFromReader(message: SetDefaultDashboardRes, reader: jspb.BinaryReader): SetDefaultDashboardRes;
}

export namespace SetDefaultDashboardRes {
  export type AsObject = {
  }
}

export class GetAccountReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountReq): GetAccountReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountReq;
  static deserializeBinaryFromReader(message: GetAccountReq, reader: jspb.BinaryReader): GetAccountReq;
}

export namespace GetAccountReq {
  export type AsObject = {
  }
}

export class GetSpecifiedAccountReq extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSpecifiedAccountReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSpecifiedAccountReq): GetSpecifiedAccountReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSpecifiedAccountReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSpecifiedAccountReq;
  static deserializeBinaryFromReader(message: GetSpecifiedAccountReq, reader: jspb.BinaryReader): GetSpecifiedAccountReq;
}

export namespace GetSpecifiedAccountReq {
  export type AsObject = {
    orgId: string,
  }
}

export class GenerateMonthlyBillingReq extends jspb.Message {
  getMonth(): number;
  setMonth(value: number): void;

  getYear(): number;
  setYear(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateMonthlyBillingReq.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateMonthlyBillingReq): GenerateMonthlyBillingReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateMonthlyBillingReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateMonthlyBillingReq;
  static deserializeBinaryFromReader(message: GenerateMonthlyBillingReq, reader: jspb.BinaryReader): GenerateMonthlyBillingReq;
}

export namespace GenerateMonthlyBillingReq {
  export type AsObject = {
    month: number,
    year: number,
  }
}

export class GenerateMonthlyBillingRes extends jspb.Message {
  getMonth(): number;
  setMonth(value: number): void;

  getYear(): number;
  setYear(value: number): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateMonthlyBillingRes.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateMonthlyBillingRes): GenerateMonthlyBillingRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateMonthlyBillingRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateMonthlyBillingRes;
  static deserializeBinaryFromReader(message: GenerateMonthlyBillingRes, reader: jspb.BinaryReader): GenerateMonthlyBillingRes;
}

export namespace GenerateMonthlyBillingRes {
  export type AsObject = {
    month: number,
    year: number,
    url: string,
  }
}

export class AnaAccount extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getP3ClientSid(): number;
  setP3ClientSid(value: number): void;

  hasRegistrationDate(): boolean;
  clearRegistrationDate(): void;
  getRegistrationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRegistrationDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPricePerDoc(): number;
  setPricePerDoc(value: number): void;

  getAnaTimeZone(): api_commons_ana_pb.AnaTimeZoneMap[keyof api_commons_ana_pb.AnaTimeZoneMap];
  setAnaTimeZone(value: api_commons_ana_pb.AnaTimeZoneMap[keyof api_commons_ana_pb.AnaTimeZoneMap]): void;

  getHomeDashboard(): string;
  setHomeDashboard(value: string): void;

  getAdoptable(): boolean;
  setAdoptable(value: boolean): void;

  getDefaultTimeFilter(): string;
  setDefaultTimeFilter(value: string): void;

  getNeoHomeDashboard(): string;
  setNeoHomeDashboard(value: string): void;

  getCurrentMonthMaxDocCount(): number;
  setCurrentMonthMaxDocCount(value: number): void;

  getCurrentWeeks(): number;
  setCurrentWeeks(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnaAccount.AsObject;
  static toObject(includeInstance: boolean, msg: AnaAccount): AnaAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnaAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnaAccount;
  static deserializeBinaryFromReader(message: AnaAccount, reader: jspb.BinaryReader): AnaAccount;
}

export namespace AnaAccount {
  export type AsObject = {
    uuid: string,
    p3ClientSid: number,
    registrationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    pricePerDoc: number,
    anaTimeZone: api_commons_ana_pb.AnaTimeZoneMap[keyof api_commons_ana_pb.AnaTimeZoneMap],
    homeDashboard: string,
    adoptable: boolean,
    defaultTimeFilter: string,
    neoHomeDashboard: string,
    currentMonthMaxDocCount: number,
    currentWeeks: number,
  }
}

export class SetCustomReportsEnabledReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetCustomReportsEnabledReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetCustomReportsEnabledReq): SetCustomReportsEnabledReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetCustomReportsEnabledReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetCustomReportsEnabledReq;
  static deserializeBinaryFromReader(message: SetCustomReportsEnabledReq, reader: jspb.BinaryReader): SetCustomReportsEnabledReq;
}

export namespace SetCustomReportsEnabledReq {
  export type AsObject = {
  }
}

export class SetCustomReportsEnabledRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetCustomReportsEnabledRes.AsObject;
  static toObject(includeInstance: boolean, msg: SetCustomReportsEnabledRes): SetCustomReportsEnabledRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetCustomReportsEnabledRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetCustomReportsEnabledRes;
  static deserializeBinaryFromReader(message: SetCustomReportsEnabledRes, reader: jspb.BinaryReader): SetCustomReportsEnabledRes;
}

export namespace SetCustomReportsEnabledRes {
  export type AsObject = {
  }
}

export class RegisterAccountReq extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterAccountReq.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterAccountReq): RegisterAccountReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterAccountReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterAccountReq;
  static deserializeBinaryFromReader(message: RegisterAccountReq, reader: jspb.BinaryReader): RegisterAccountReq;
}

export namespace RegisterAccountReq {
  export type AsObject = {
    orgId: string,
  }
}

export class View extends jspb.Message {
  getClientSid(): number;
  setClientSid(value: number): void;

  getWeeks(): number;
  setWeeks(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): View.AsObject;
  static toObject(includeInstance: boolean, msg: View): View.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: View, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): View;
  static deserializeBinaryFromReader(message: View, reader: jspb.BinaryReader): View;
}

export namespace View {
  export type AsObject = {
    clientSid: number,
    weeks: number,
  }
}

export class AccountDataVisibility extends jspb.Message {
  getViewer(): number;
  setViewer(value: number): void;

  clearViewsList(): void;
  getViewsList(): Array<View>;
  setViewsList(value: Array<View>): void;
  addViews(value?: View, index?: number): View;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountDataVisibility.AsObject;
  static toObject(includeInstance: boolean, msg: AccountDataVisibility): AccountDataVisibility.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountDataVisibility, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountDataVisibility;
  static deserializeBinaryFromReader(message: AccountDataVisibility, reader: jspb.BinaryReader): AccountDataVisibility;
}

export namespace AccountDataVisibility {
  export type AsObject = {
    viewer: number,
    viewsList: Array<View.AsObject>,
  }
}

export class DataVisibility extends jspb.Message {
  clearVisibilitiesList(): void;
  getVisibilitiesList(): Array<AccountDataVisibility>;
  setVisibilitiesList(value: Array<AccountDataVisibility>): void;
  addVisibilities(value?: AccountDataVisibility, index?: number): AccountDataVisibility;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataVisibility.AsObject;
  static toObject(includeInstance: boolean, msg: DataVisibility): DataVisibility.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataVisibility, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataVisibility;
  static deserializeBinaryFromReader(message: DataVisibility, reader: jspb.BinaryReader): DataVisibility;
}

export namespace DataVisibility {
  export type AsObject = {
    visibilitiesList: Array<AccountDataVisibility.AsObject>,
  }
}

export class IndexVisibility extends jspb.Message {
  getClientSid(): number;
  setClientSid(value: number): void;

  getYear(): number;
  setYear(value: number): void;

  getWeek(): number;
  setWeek(value: number): void;

  clearViewersList(): void;
  getViewersList(): Array<number>;
  setViewersList(value: Array<number>): void;
  addViewers(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexVisibility.AsObject;
  static toObject(includeInstance: boolean, msg: IndexVisibility): IndexVisibility.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndexVisibility, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexVisibility;
  static deserializeBinaryFromReader(message: IndexVisibility, reader: jspb.BinaryReader): IndexVisibility;
}

export namespace IndexVisibility {
  export type AsObject = {
    clientSid: number,
    year: number,
    week: number,
    viewersList: Array<number>,
  }
}

export class IndicesVisibility extends jspb.Message {
  clearVisibilitiesList(): void;
  getVisibilitiesList(): Array<IndexVisibility>;
  setVisibilitiesList(value: Array<IndexVisibility>): void;
  addVisibilities(value?: IndexVisibility, index?: number): IndexVisibility;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndicesVisibility.AsObject;
  static toObject(includeInstance: boolean, msg: IndicesVisibility): IndicesVisibility.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndicesVisibility, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndicesVisibility;
  static deserializeBinaryFromReader(message: IndicesVisibility, reader: jspb.BinaryReader): IndicesVisibility;
}

export namespace IndicesVisibility {
  export type AsObject = {
    visibilitiesList: Array<IndexVisibility.AsObject>,
  }
}

export class GetVisualizationsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVisualizationsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetVisualizationsReq): GetVisualizationsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVisualizationsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVisualizationsReq;
  static deserializeBinaryFromReader(message: GetVisualizationsReq, reader: jspb.BinaryReader): GetVisualizationsReq;
}

export namespace GetVisualizationsReq {
  export type AsObject = {
  }
}

export class GenerateVizDataByIdReq extends jspb.Message {
  getVisualizationId(): string;
  setVisualizationId(value: string): void;

  getTimeFrom(): string;
  setTimeFrom(value: string): void;

  getTimeTo(): string;
  setTimeTo(value: string): void;

  getTimeZone(): string;
  setTimeZone(value: string): void;

  clearIncludedOrgIdsList(): void;
  getIncludedOrgIdsList(): Array<string>;
  setIncludedOrgIdsList(value: Array<string>): void;
  addIncludedOrgIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateVizDataByIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateVizDataByIdReq): GenerateVizDataByIdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateVizDataByIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateVizDataByIdReq;
  static deserializeBinaryFromReader(message: GenerateVizDataByIdReq, reader: jspb.BinaryReader): GenerateVizDataByIdReq;
}

export namespace GenerateVizDataByIdReq {
  export type AsObject = {
    visualizationId: string,
    timeFrom: string,
    timeTo: string,
    timeZone: string,
    includedOrgIdsList: Array<string>,
  }
}

export class GenerateVizDataByIdRes extends jspb.Message {
  getJsonString(): string;
  setJsonString(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateVizDataByIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateVizDataByIdRes): GenerateVizDataByIdRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateVizDataByIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateVizDataByIdRes;
  static deserializeBinaryFromReader(message: GenerateVizDataByIdRes, reader: jspb.BinaryReader): GenerateVizDataByIdRes;
}

export namespace GenerateVizDataByIdRes {
  export type AsObject = {
    jsonString: string,
  }
}

export class GetDashboardsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDashboardsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetDashboardsReq): GetDashboardsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDashboardsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDashboardsReq;
  static deserializeBinaryFromReader(message: GetDashboardsReq, reader: jspb.BinaryReader): GetDashboardsReq;
}

export namespace GetDashboardsReq {
  export type AsObject = {
  }
}

export class GetSpecifiedVisualizationsReq extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSpecifiedVisualizationsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSpecifiedVisualizationsReq): GetSpecifiedVisualizationsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSpecifiedVisualizationsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSpecifiedVisualizationsReq;
  static deserializeBinaryFromReader(message: GetSpecifiedVisualizationsReq, reader: jspb.BinaryReader): GetSpecifiedVisualizationsReq;
}

export namespace GetSpecifiedVisualizationsReq {
  export type AsObject = {
    orgId: string,
  }
}

export class Visualizations extends jspb.Message {
  clearVisualizationsList(): void;
  getVisualizationsList(): Array<Visualization>;
  setVisualizationsList(value: Array<Visualization>): void;
  addVisualizations(value?: Visualization, index?: number): Visualization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Visualizations.AsObject;
  static toObject(includeInstance: boolean, msg: Visualizations): Visualizations.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Visualizations, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Visualizations;
  static deserializeBinaryFromReader(message: Visualizations, reader: jspb.BinaryReader): Visualizations;
}

export namespace Visualizations {
  export type AsObject = {
    visualizationsList: Array<Visualization.AsObject>,
  }
}

export class Visualization extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Visualization.AsObject;
  static toObject(includeInstance: boolean, msg: Visualization): Visualization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Visualization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Visualization;
  static deserializeBinaryFromReader(message: Visualization, reader: jspb.BinaryReader): Visualization;
}

export namespace Visualization {
  export type AsObject = {
    id: string,
    title: string,
  }
}

export class TimeFilter extends jspb.Message {
  hasRelative(): boolean;
  clearRelative(): void;
  getRelative(): Relative | undefined;
  setRelative(value?: Relative): void;

  hasAbsolute(): boolean;
  clearAbsolute(): void;
  getAbsolute(): Absolute | undefined;
  setAbsolute(value?: Absolute): void;

  hasQuick(): boolean;
  clearQuick(): void;
  getQuick(): Quick | undefined;
  setQuick(value?: Quick): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeFilter.AsObject;
  static toObject(includeInstance: boolean, msg: TimeFilter): TimeFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeFilter;
  static deserializeBinaryFromReader(message: TimeFilter, reader: jspb.BinaryReader): TimeFilter;
}

export namespace TimeFilter {
  export type AsObject = {
    relative?: Relative.AsObject,
    absolute?: Absolute.AsObject,
    quick?: Quick.AsObject,
  }
}

export class Quick extends jspb.Message {
  getLabel(): string;
  setLabel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Quick.AsObject;
  static toObject(includeInstance: boolean, msg: Quick): Quick.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Quick, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Quick;
  static deserializeBinaryFromReader(message: Quick, reader: jspb.BinaryReader): Quick;
}

export namespace Quick {
  export type AsObject = {
    label: string,
  }
}

export class Relative extends jspb.Message {
  getToQuantityTime(): number;
  setToQuantityTime(value: number): void;

  getToFilterBy(): api_commons_ana_pb.FilterByMap[keyof api_commons_ana_pb.FilterByMap];
  setToFilterBy(value: api_commons_ana_pb.FilterByMap[keyof api_commons_ana_pb.FilterByMap]): void;

  getToRound(): boolean;
  setToRound(value: boolean): void;

  getFromQuantityTime(): number;
  setFromQuantityTime(value: number): void;

  getFromFilterBy(): api_commons_ana_pb.FilterByMap[keyof api_commons_ana_pb.FilterByMap];
  setFromFilterBy(value: api_commons_ana_pb.FilterByMap[keyof api_commons_ana_pb.FilterByMap]): void;

  getFromRound(): boolean;
  setFromRound(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Relative.AsObject;
  static toObject(includeInstance: boolean, msg: Relative): Relative.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Relative, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Relative;
  static deserializeBinaryFromReader(message: Relative, reader: jspb.BinaryReader): Relative;
}

export namespace Relative {
  export type AsObject = {
    toQuantityTime: number,
    toFilterBy: api_commons_ana_pb.FilterByMap[keyof api_commons_ana_pb.FilterByMap],
    toRound: boolean,
    fromQuantityTime: number,
    fromFilterBy: api_commons_ana_pb.FilterByMap[keyof api_commons_ana_pb.FilterByMap],
    fromRound: boolean,
  }
}

export class Absolute extends jspb.Message {
  hasTo(): boolean;
  clearTo(): void;
  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Absolute.AsObject;
  static toObject(includeInstance: boolean, msg: Absolute): Absolute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Absolute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Absolute;
  static deserializeBinaryFromReader(message: Absolute, reader: jspb.BinaryReader): Absolute;
}

export namespace Absolute {
  export type AsObject = {
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class DeleteDashboardReq extends jspb.Message {
  getDashboardId(): string;
  setDashboardId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDashboardReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDashboardReq): DeleteDashboardReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDashboardReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDashboardReq;
  static deserializeBinaryFromReader(message: DeleteDashboardReq, reader: jspb.BinaryReader): DeleteDashboardReq;
}

export namespace DeleteDashboardReq {
  export type AsObject = {
    dashboardId: string,
  }
}

export class DeleteDashboardRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDashboardRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDashboardRes): DeleteDashboardRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDashboardRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDashboardRes;
  static deserializeBinaryFromReader(message: DeleteDashboardRes, reader: jspb.BinaryReader): DeleteDashboardRes;
}

export namespace DeleteDashboardRes {
  export type AsObject = {
  }
}

export class DashboardHistoryEntry extends jspb.Message {
  getDashboardId(): string;
  setDashboardId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getEditingUserId(): string;
  setEditingUserId(value: string): void;

  getUserName(): string;
  setUserName(value: string): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardHistoryEntry.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardHistoryEntry): DashboardHistoryEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardHistoryEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardHistoryEntry;
  static deserializeBinaryFromReader(message: DashboardHistoryEntry, reader: jspb.BinaryReader): DashboardHistoryEntry;
}

export namespace DashboardHistoryEntry {
  export type AsObject = {
    dashboardId: string,
    title: string,
    editingUserId: string,
    userName: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetDashboardHistoryReq extends jspb.Message {
  getDashboardId(): string;
  setDashboardId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDashboardHistoryReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetDashboardHistoryReq): GetDashboardHistoryReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDashboardHistoryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDashboardHistoryReq;
  static deserializeBinaryFromReader(message: GetDashboardHistoryReq, reader: jspb.BinaryReader): GetDashboardHistoryReq;
}

export namespace GetDashboardHistoryReq {
  export type AsObject = {
    dashboardId: string,
  }
}

export class GetDashboardHistoryRes extends jspb.Message {
  clearDashboardHistoryEntriesList(): void;
  getDashboardHistoryEntriesList(): Array<DashboardHistoryEntry>;
  setDashboardHistoryEntriesList(value: Array<DashboardHistoryEntry>): void;
  addDashboardHistoryEntries(value?: DashboardHistoryEntry, index?: number): DashboardHistoryEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDashboardHistoryRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetDashboardHistoryRes): GetDashboardHistoryRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDashboardHistoryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDashboardHistoryRes;
  static deserializeBinaryFromReader(message: GetDashboardHistoryRes, reader: jspb.BinaryReader): GetDashboardHistoryRes;
}

export namespace GetDashboardHistoryRes {
  export type AsObject = {
    dashboardHistoryEntriesList: Array<DashboardHistoryEntry.AsObject>,
  }
}

export class GetVisibilityReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVisibilityReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetVisibilityReq): GetVisibilityReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVisibilityReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVisibilityReq;
  static deserializeBinaryFromReader(message: GetVisibilityReq, reader: jspb.BinaryReader): GetVisibilityReq;
}

export namespace GetVisibilityReq {
  export type AsObject = {
  }
}

export class GetTimeZoneReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTimeZoneReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetTimeZoneReq): GetTimeZoneReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTimeZoneReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTimeZoneReq;
  static deserializeBinaryFromReader(message: GetTimeZoneReq, reader: jspb.BinaryReader): GetTimeZoneReq;
}

export namespace GetTimeZoneReq {
  export type AsObject = {
  }
}

export class SetTimeZoneReq extends jspb.Message {
  getAnaTimeZone(): api_commons_ana_pb.AnaTimeZoneMap[keyof api_commons_ana_pb.AnaTimeZoneMap];
  setAnaTimeZone(value: api_commons_ana_pb.AnaTimeZoneMap[keyof api_commons_ana_pb.AnaTimeZoneMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetTimeZoneReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetTimeZoneReq): SetTimeZoneReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetTimeZoneReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetTimeZoneReq;
  static deserializeBinaryFromReader(message: SetTimeZoneReq, reader: jspb.BinaryReader): SetTimeZoneReq;
}

export namespace SetTimeZoneReq {
  export type AsObject = {
    anaTimeZone: api_commons_ana_pb.AnaTimeZoneMap[keyof api_commons_ana_pb.AnaTimeZoneMap],
  }
}

export class SetTimeZoneRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetTimeZoneRes.AsObject;
  static toObject(includeInstance: boolean, msg: SetTimeZoneRes): SetTimeZoneRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetTimeZoneRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetTimeZoneRes;
  static deserializeBinaryFromReader(message: SetTimeZoneRes, reader: jspb.BinaryReader): SetTimeZoneRes;
}

export namespace SetTimeZoneRes {
  export type AsObject = {
  }
}

export class TimeZone extends jspb.Message {
  getAnaTimeZone(): api_commons_ana_pb.AnaTimeZoneMap[keyof api_commons_ana_pb.AnaTimeZoneMap];
  setAnaTimeZone(value: api_commons_ana_pb.AnaTimeZoneMap[keyof api_commons_ana_pb.AnaTimeZoneMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeZone.AsObject;
  static toObject(includeInstance: boolean, msg: TimeZone): TimeZone.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeZone, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeZone;
  static deserializeBinaryFromReader(message: TimeZone, reader: jspb.BinaryReader): TimeZone;
}

export namespace TimeZone {
  export type AsObject = {
    anaTimeZone: api_commons_ana_pb.AnaTimeZoneMap[keyof api_commons_ana_pb.AnaTimeZoneMap],
  }
}

export class CopyChartsAndDashboardsRes extends jspb.Message {
  clearConflictsList(): void;
  getConflictsList(): Array<CopyChartsAndDashboardsConflict>;
  setConflictsList(value: Array<CopyChartsAndDashboardsConflict>): void;
  addConflicts(value?: CopyChartsAndDashboardsConflict, index?: number): CopyChartsAndDashboardsConflict;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyChartsAndDashboardsRes.AsObject;
  static toObject(includeInstance: boolean, msg: CopyChartsAndDashboardsRes): CopyChartsAndDashboardsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyChartsAndDashboardsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyChartsAndDashboardsRes;
  static deserializeBinaryFromReader(message: CopyChartsAndDashboardsRes, reader: jspb.BinaryReader): CopyChartsAndDashboardsRes;
}

export namespace CopyChartsAndDashboardsRes {
  export type AsObject = {
    conflictsList: Array<CopyChartsAndDashboardsConflict.AsObject>,
  }
}

export class CopyChartsAndDashboardsConflict extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyChartsAndDashboardsConflict.AsObject;
  static toObject(includeInstance: boolean, msg: CopyChartsAndDashboardsConflict): CopyChartsAndDashboardsConflict.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyChartsAndDashboardsConflict, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyChartsAndDashboardsConflict;
  static deserializeBinaryFromReader(message: CopyChartsAndDashboardsConflict, reader: jspb.BinaryReader): CopyChartsAndDashboardsConflict;
}

export namespace CopyChartsAndDashboardsConflict {
  export type AsObject = {
    type: string,
    title: string,
  }
}

export class CopyDashVizReq extends jspb.Message {
  clearDashboardIdsList(): void;
  getDashboardIdsList(): Array<string>;
  setDashboardIdsList(value: Array<string>): void;
  addDashboardIds(value: string, index?: number): string;

  clearVisualizationIdsList(): void;
  getVisualizationIdsList(): Array<string>;
  setVisualizationIdsList(value: Array<string>): void;
  addVisualizationIds(value: string, index?: number): string;

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyDashVizReq.AsObject;
  static toObject(includeInstance: boolean, msg: CopyDashVizReq): CopyDashVizReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyDashVizReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyDashVizReq;
  static deserializeBinaryFromReader(message: CopyDashVizReq, reader: jspb.BinaryReader): CopyDashVizReq;
}

export namespace CopyDashVizReq {
  export type AsObject = {
    dashboardIdsList: Array<string>,
    visualizationIdsList: Array<string>,
    orgId: string,
  }
}

export class CopyDashVizConflict extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyDashVizConflict.AsObject;
  static toObject(includeInstance: boolean, msg: CopyDashVizConflict): CopyDashVizConflict.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyDashVizConflict, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyDashVizConflict;
  static deserializeBinaryFromReader(message: CopyDashVizConflict, reader: jspb.BinaryReader): CopyDashVizConflict;
}

export namespace CopyDashVizConflict {
  export type AsObject = {
    type: string,
    title: string,
  }
}

export class CopyDashVizRes extends jspb.Message {
  clearConflictsList(): void;
  getConflictsList(): Array<CopyDashVizConflict>;
  setConflictsList(value: Array<CopyDashVizConflict>): void;
  addConflicts(value?: CopyDashVizConflict, index?: number): CopyDashVizConflict;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyDashVizRes.AsObject;
  static toObject(includeInstance: boolean, msg: CopyDashVizRes): CopyDashVizRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyDashVizRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyDashVizRes;
  static deserializeBinaryFromReader(message: CopyDashVizRes, reader: jspb.BinaryReader): CopyDashVizRes;
}

export namespace CopyDashVizRes {
  export type AsObject = {
    conflictsList: Array<CopyDashVizConflict.AsObject>,
  }
}

export class GetSpecifiedBillingSummaryReq extends jspb.Message {
  hasTs(): boolean;
  clearTs(): void;
  getTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSpecifiedBillingSummaryReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSpecifiedBillingSummaryReq): GetSpecifiedBillingSummaryReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSpecifiedBillingSummaryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSpecifiedBillingSummaryReq;
  static deserializeBinaryFromReader(message: GetSpecifiedBillingSummaryReq, reader: jspb.BinaryReader): GetSpecifiedBillingSummaryReq;
}

export namespace GetSpecifiedBillingSummaryReq {
  export type AsObject = {
    ts?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    orgId: string,
  }
}

export class GetBillingSummaryReq extends jspb.Message {
  hasTs(): boolean;
  clearTs(): void;
  getTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillingSummaryReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillingSummaryReq): GetBillingSummaryReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillingSummaryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillingSummaryReq;
  static deserializeBinaryFromReader(message: GetBillingSummaryReq, reader: jspb.BinaryReader): GetBillingSummaryReq;
}

export namespace GetBillingSummaryReq {
  export type AsObject = {
    ts?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class BillingSummary extends jspb.Message {
  getClientSid(): number;
  setClientSid(value: number): void;

  getClientName(): string;
  setClientName(value: string): void;

  getProStatus(): boolean;
  setProStatus(value: boolean): void;

  hasWeeks(): boolean;
  clearWeeks(): void;
  getWeeks(): WeeksSummary | undefined;
  setWeeks(value?: WeeksSummary): void;

  hasCustomReports(): boolean;
  clearCustomReports(): void;
  getCustomReports(): CustomReportsSummary | undefined;
  setCustomReports(value?: CustomReportsSummary): void;

  hasReportJobs(): boolean;
  clearReportJobs(): void;
  getReportJobs(): ActiveReportJobsSummary | undefined;
  setReportJobs(value?: ActiveReportJobsSummary): void;

  hasWatchers(): boolean;
  clearWatchers(): void;
  getWatchers(): ActiveWatchersSummary | undefined;
  setWatchers(value?: ActiveWatchersSummary): void;

  hasMultiClient(): boolean;
  clearMultiClient(): void;
  getMultiClient(): MultiClientSummary | undefined;
  setMultiClient(value?: MultiClientSummary): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingSummary.AsObject;
  static toObject(includeInstance: boolean, msg: BillingSummary): BillingSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingSummary;
  static deserializeBinaryFromReader(message: BillingSummary, reader: jspb.BinaryReader): BillingSummary;
}

export namespace BillingSummary {
  export type AsObject = {
    clientSid: number,
    clientName: string,
    proStatus: boolean,
    weeks?: WeeksSummary.AsObject,
    customReports?: CustomReportsSummary.AsObject,
    reportJobs?: ActiveReportJobsSummary.AsObject,
    watchers?: ActiveWatchersSummary.AsObject,
    multiClient?: MultiClientSummary.AsObject,
  }
}

export class WeeksSummary extends jspb.Message {
  getWeeksCurrent(): number;
  setWeeksCurrent(value: number): void;

  getWeeksPeak(): number;
  setWeeksPeak(value: number): void;

  getWeeksEditor(): string;
  setWeeksEditor(value: string): void;

  getProStatus(): boolean;
  setProStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeeksSummary.AsObject;
  static toObject(includeInstance: boolean, msg: WeeksSummary): WeeksSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WeeksSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeeksSummary;
  static deserializeBinaryFromReader(message: WeeksSummary, reader: jspb.BinaryReader): WeeksSummary;
}

export namespace WeeksSummary {
  export type AsObject = {
    weeksCurrent: number,
    weeksPeak: number,
    weeksEditor: string,
    proStatus: boolean,
  }
}

export class CustomReportsSummary extends jspb.Message {
  hasEnabled(): boolean;
  clearEnabled(): void;
  getEnabled(): CustomReportsEnabledSummary | undefined;
  setEnabled(value?: CustomReportsEnabledSummary): void;

  hasVisualizations(): boolean;
  clearVisualizations(): void;
  getVisualizations(): CustomVisualizationsSummary | undefined;
  setVisualizations(value?: CustomVisualizationsSummary): void;

  hasDashboards(): boolean;
  clearDashboards(): void;
  getDashboards(): CustomDashboardsSummary | undefined;
  setDashboards(value?: CustomDashboardsSummary): void;

  getProStatus(): boolean;
  setProStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomReportsSummary.AsObject;
  static toObject(includeInstance: boolean, msg: CustomReportsSummary): CustomReportsSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomReportsSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomReportsSummary;
  static deserializeBinaryFromReader(message: CustomReportsSummary, reader: jspb.BinaryReader): CustomReportsSummary;
}

export namespace CustomReportsSummary {
  export type AsObject = {
    enabled?: CustomReportsEnabledSummary.AsObject,
    visualizations?: CustomVisualizationsSummary.AsObject,
    dashboards?: CustomDashboardsSummary.AsObject,
    proStatus: boolean,
  }
}

export class CustomVisualizationsSummary extends jspb.Message {
  getVisualizationsCurrent(): number;
  setVisualizationsCurrent(value: number): void;

  getVisualizationsPeak(): number;
  setVisualizationsPeak(value: number): void;

  getCustomVisualizationsEditor(): string;
  setCustomVisualizationsEditor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomVisualizationsSummary.AsObject;
  static toObject(includeInstance: boolean, msg: CustomVisualizationsSummary): CustomVisualizationsSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomVisualizationsSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomVisualizationsSummary;
  static deserializeBinaryFromReader(message: CustomVisualizationsSummary, reader: jspb.BinaryReader): CustomVisualizationsSummary;
}

export namespace CustomVisualizationsSummary {
  export type AsObject = {
    visualizationsCurrent: number,
    visualizationsPeak: number,
    customVisualizationsEditor: string,
  }
}

export class CustomDashboardsSummary extends jspb.Message {
  getDashboardsCurrent(): number;
  setDashboardsCurrent(value: number): void;

  getDashboardsPeak(): number;
  setDashboardsPeak(value: number): void;

  getCustomDashboardsEditor(): string;
  setCustomDashboardsEditor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomDashboardsSummary.AsObject;
  static toObject(includeInstance: boolean, msg: CustomDashboardsSummary): CustomDashboardsSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomDashboardsSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomDashboardsSummary;
  static deserializeBinaryFromReader(message: CustomDashboardsSummary, reader: jspb.BinaryReader): CustomDashboardsSummary;
}

export namespace CustomDashboardsSummary {
  export type AsObject = {
    dashboardsCurrent: number,
    dashboardsPeak: number,
    customDashboardsEditor: string,
  }
}

export class CustomReportsEnabledSummary extends jspb.Message {
  getCustomReportsEnabledCurrent(): boolean;
  setCustomReportsEnabledCurrent(value: boolean): void;

  getCustomReportsEnabledPeak(): boolean;
  setCustomReportsEnabledPeak(value: boolean): void;

  getCustomReportsEnabledEditor(): string;
  setCustomReportsEnabledEditor(value: string): void;

  getProStatus(): boolean;
  setProStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomReportsEnabledSummary.AsObject;
  static toObject(includeInstance: boolean, msg: CustomReportsEnabledSummary): CustomReportsEnabledSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomReportsEnabledSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomReportsEnabledSummary;
  static deserializeBinaryFromReader(message: CustomReportsEnabledSummary, reader: jspb.BinaryReader): CustomReportsEnabledSummary;
}

export namespace CustomReportsEnabledSummary {
  export type AsObject = {
    customReportsEnabledCurrent: boolean,
    customReportsEnabledPeak: boolean,
    customReportsEnabledEditor: string,
    proStatus: boolean,
  }
}

export class MultiClientSummary extends jspb.Message {
  getAdoptable(): boolean;
  setAdoptable(value: boolean): void;

  hasParents(): boolean;
  clearParents(): void;
  getParents(): Relations | undefined;
  setParents(value?: Relations): void;

  hasChildren(): boolean;
  clearChildren(): void;
  getChildren(): Relations | undefined;
  setChildren(value?: Relations): void;

  getProStatus(): boolean;
  setProStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiClientSummary.AsObject;
  static toObject(includeInstance: boolean, msg: MultiClientSummary): MultiClientSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiClientSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiClientSummary;
  static deserializeBinaryFromReader(message: MultiClientSummary, reader: jspb.BinaryReader): MultiClientSummary;
}

export namespace MultiClientSummary {
  export type AsObject = {
    adoptable: boolean,
    parents?: Relations.AsObject,
    children?: Relations.AsObject,
    proStatus: boolean,
  }
}

export class Relations extends jspb.Message {
  clearRelationsList(): void;
  getRelationsList(): Array<Relation>;
  setRelationsList(value: Array<Relation>): void;
  addRelations(value?: Relation, index?: number): Relation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Relations.AsObject;
  static toObject(includeInstance: boolean, msg: Relations): Relations.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Relations, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Relations;
  static deserializeBinaryFromReader(message: Relations, reader: jspb.BinaryReader): Relations;
}

export namespace Relations {
  export type AsObject = {
    relationsList: Array<Relation.AsObject>,
  }
}

export class Relation extends jspb.Message {
  getClientSid(): number;
  setClientSid(value: number): void;

  getClientName(): string;
  setClientName(value: string): void;

  hasRelationInitiation(): boolean;
  clearRelationInitiation(): void;
  getRelationInitiation(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRelationInitiation(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getRelationInitiator(): string;
  setRelationInitiator(value: string): void;

  hasRelationTermination(): boolean;
  clearRelationTermination(): void;
  getRelationTermination(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRelationTermination(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getRelationTerminator(): string;
  setRelationTerminator(value: string): void;

  getIsCurrent(): boolean;
  setIsCurrent(value: boolean): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Relation.AsObject;
  static toObject(includeInstance: boolean, msg: Relation): Relation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Relation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Relation;
  static deserializeBinaryFromReader(message: Relation, reader: jspb.BinaryReader): Relation;
}

export namespace Relation {
  export type AsObject = {
    clientSid: number,
    clientName: string,
    relationInitiation?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    relationInitiator: string,
    relationTermination?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    relationTerminator: string,
    isCurrent: boolean,
    orgId: string,
  }
}

export class Family extends jspb.Message {
  getClientSid(): number;
  setClientSid(value: number): void;

  getClientName(): string;
  setClientName(value: string): void;

  hasParents(): boolean;
  clearParents(): void;
  getParents(): Relations | undefined;
  setParents(value?: Relations): void;

  hasChildren(): boolean;
  clearChildren(): void;
  getChildren(): Relations | undefined;
  setChildren(value?: Relations): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Family.AsObject;
  static toObject(includeInstance: boolean, msg: Family): Family.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Family, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Family;
  static deserializeBinaryFromReader(message: Family, reader: jspb.BinaryReader): Family;
}

export namespace Family {
  export type AsObject = {
    clientSid: number,
    clientName: string,
    parents?: Relations.AsObject,
    children?: Relations.AsObject,
  }
}

export class GetAccessibleClientsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccessibleClientsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccessibleClientsReq): GetAccessibleClientsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccessibleClientsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccessibleClientsReq;
  static deserializeBinaryFromReader(message: GetAccessibleClientsReq, reader: jspb.BinaryReader): GetAccessibleClientsReq;
}

export namespace GetAccessibleClientsReq {
  export type AsObject = {
  }
}

export class GetFamilyReq extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFamilyReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetFamilyReq): GetFamilyReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFamilyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFamilyReq;
  static deserializeBinaryFromReader(message: GetFamilyReq, reader: jspb.BinaryReader): GetFamilyReq;
}

export namespace GetFamilyReq {
  export type AsObject = {
    orgId: string,
  }
}

export class MakeAdoptableReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MakeAdoptableReq.AsObject;
  static toObject(includeInstance: boolean, msg: MakeAdoptableReq): MakeAdoptableReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MakeAdoptableReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MakeAdoptableReq;
  static deserializeBinaryFromReader(message: MakeAdoptableReq, reader: jspb.BinaryReader): MakeAdoptableReq;
}

export namespace MakeAdoptableReq {
  export type AsObject = {
  }
}

export class MakeAdoptableRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MakeAdoptableRes.AsObject;
  static toObject(includeInstance: boolean, msg: MakeAdoptableRes): MakeAdoptableRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MakeAdoptableRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MakeAdoptableRes;
  static deserializeBinaryFromReader(message: MakeAdoptableRes, reader: jspb.BinaryReader): MakeAdoptableRes;
}

export namespace MakeAdoptableRes {
  export type AsObject = {
  }
}

export class SpecifiedMakeAdoptableRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpecifiedMakeAdoptableRes.AsObject;
  static toObject(includeInstance: boolean, msg: SpecifiedMakeAdoptableRes): SpecifiedMakeAdoptableRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpecifiedMakeAdoptableRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpecifiedMakeAdoptableRes;
  static deserializeBinaryFromReader(message: SpecifiedMakeAdoptableRes, reader: jspb.BinaryReader): SpecifiedMakeAdoptableRes;
}

export namespace SpecifiedMakeAdoptableRes {
  export type AsObject = {
  }
}

export class SetAnaAccountRelationReq extends jspb.Message {
  getParentOrgId(): string;
  setParentOrgId(value: string): void;

  getChildOrgId(): string;
  setChildOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAnaAccountRelationReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetAnaAccountRelationReq): SetAnaAccountRelationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetAnaAccountRelationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAnaAccountRelationReq;
  static deserializeBinaryFromReader(message: SetAnaAccountRelationReq, reader: jspb.BinaryReader): SetAnaAccountRelationReq;
}

export namespace SetAnaAccountRelationReq {
  export type AsObject = {
    parentOrgId: string,
    childOrgId: string,
  }
}

export class SetAnaAccountRelationRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAnaAccountRelationRes.AsObject;
  static toObject(includeInstance: boolean, msg: SetAnaAccountRelationRes): SetAnaAccountRelationRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetAnaAccountRelationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAnaAccountRelationRes;
  static deserializeBinaryFromReader(message: SetAnaAccountRelationRes, reader: jspb.BinaryReader): SetAnaAccountRelationRes;
}

export namespace SetAnaAccountRelationRes {
  export type AsObject = {
  }
}

export class ActiveReportJobsSummary extends jspb.Message {
  getActiveReportJobsCurrent(): number;
  setActiveReportJobsCurrent(value: number): void;

  getProcessedReportJobs(): number;
  setProcessedReportJobs(value: number): void;

  getReportJobsActivator(): string;
  setReportJobsActivator(value: string): void;

  getProStatus(): boolean;
  setProStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActiveReportJobsSummary.AsObject;
  static toObject(includeInstance: boolean, msg: ActiveReportJobsSummary): ActiveReportJobsSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActiveReportJobsSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActiveReportJobsSummary;
  static deserializeBinaryFromReader(message: ActiveReportJobsSummary, reader: jspb.BinaryReader): ActiveReportJobsSummary;
}

export namespace ActiveReportJobsSummary {
  export type AsObject = {
    activeReportJobsCurrent: number,
    processedReportJobs: number,
    reportJobsActivator: string,
    proStatus: boolean,
  }
}

export class ActiveWatchersSummary extends jspb.Message {
  getActiveWatchersCurrent(): number;
  setActiveWatchersCurrent(value: number): void;

  getProcessedWatchers(): number;
  setProcessedWatchers(value: number): void;

  getWatchersActivator(): string;
  setWatchersActivator(value: string): void;

  getProStatus(): boolean;
  setProStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActiveWatchersSummary.AsObject;
  static toObject(includeInstance: boolean, msg: ActiveWatchersSummary): ActiveWatchersSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActiveWatchersSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActiveWatchersSummary;
  static deserializeBinaryFromReader(message: ActiveWatchersSummary, reader: jspb.BinaryReader): ActiveWatchersSummary;
}

export namespace ActiveWatchersSummary {
  export type AsObject = {
    activeWatchersCurrent: number,
    processedWatchers: number,
    watchersActivator: string,
    proStatus: boolean,
  }
}

export class SimpleRelations extends jspb.Message {
  clearSimpleRelationsList(): void;
  getSimpleRelationsList(): Array<SimpleRelation>;
  setSimpleRelationsList(value: Array<SimpleRelation>): void;
  addSimpleRelations(value?: SimpleRelation, index?: number): SimpleRelation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleRelations.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleRelations): SimpleRelations.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimpleRelations, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleRelations;
  static deserializeBinaryFromReader(message: SimpleRelations, reader: jspb.BinaryReader): SimpleRelations;
}

export namespace SimpleRelations {
  export type AsObject = {
    simpleRelationsList: Array<SimpleRelation.AsObject>,
  }
}

export class SimpleRelation extends jspb.Message {
  getClientName(): string;
  setClientName(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleRelation.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleRelation): SimpleRelation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimpleRelation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleRelation;
  static deserializeBinaryFromReader(message: SimpleRelation, reader: jspb.BinaryReader): SimpleRelation;
}

export namespace SimpleRelation {
  export type AsObject = {
    clientName: string,
    orgId: string,
  }
}

export class GetOrganizationNamesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationNamesReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationNamesReq): GetOrganizationNamesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationNamesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationNamesReq;
  static deserializeBinaryFromReader(message: GetOrganizationNamesReq, reader: jspb.BinaryReader): GetOrganizationNamesReq;
}

export namespace GetOrganizationNamesReq {
  export type AsObject = {
  }
}

export class GetOrganizationNamesRes extends jspb.Message {
  getNamesMap(): jspb.Map<number, string>;
  clearNamesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationNamesRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationNamesRes): GetOrganizationNamesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationNamesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationNamesRes;
  static deserializeBinaryFromReader(message: GetOrganizationNamesRes, reader: jspb.BinaryReader): GetOrganizationNamesRes;
}

export namespace GetOrganizationNamesRes {
  export type AsObject = {
    namesMap: Array<[number, string]>,
  }
}

export class Datapoint extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearLabelsList(): void;
  getLabelsList(): Array<string>;
  setLabelsList(value: Array<string>): void;
  addLabels(value: string, index?: number): string;

  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Datapoint.AsObject;
  static toObject(includeInstance: boolean, msg: Datapoint): Datapoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Datapoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Datapoint;
  static deserializeBinaryFromReader(message: Datapoint, reader: jspb.BinaryReader): Datapoint;
}

export namespace Datapoint {
  export type AsObject = {
    id: string,
    labelsList: Array<string>,
    type: string,
  }
}

export class GetDatapointsReq extends jspb.Message {
  getType(): api_commons_ana_pb.TagMap[keyof api_commons_ana_pb.TagMap];
  setType(value: api_commons_ana_pb.TagMap[keyof api_commons_ana_pb.TagMap]): void;

  getGroupId(): string;
  setGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatapointsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatapointsReq): GetDatapointsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDatapointsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatapointsReq;
  static deserializeBinaryFromReader(message: GetDatapointsReq, reader: jspb.BinaryReader): GetDatapointsReq;
}

export namespace GetDatapointsReq {
  export type AsObject = {
    type: api_commons_ana_pb.TagMap[keyof api_commons_ana_pb.TagMap],
    groupId: string,
  }
}

export class GetDatapointsRes extends jspb.Message {
  clearDatapointsList(): void;
  getDatapointsList(): Array<Datapoint>;
  setDatapointsList(value: Array<Datapoint>): void;
  addDatapoints(value?: Datapoint, index?: number): Datapoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatapointsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatapointsRes): GetDatapointsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDatapointsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatapointsRes;
  static deserializeBinaryFromReader(message: GetDatapointsRes, reader: jspb.BinaryReader): GetDatapointsRes;
}

export namespace GetDatapointsRes {
  export type AsObject = {
    datapointsList: Array<Datapoint.AsObject>,
  }
}

export class NewDatapoint extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  getFilterId(): string;
  setFilterId(value: string): void;

  hasFloat(): boolean;
  clearFloat(): void;
  getFloat(): NewDatapoint.Float | undefined;
  setFloat(value?: NewDatapoint.Float): void;

  hasString(): boolean;
  clearString(): void;
  getString(): NewDatapoint.String | undefined;
  setString(value?: NewDatapoint.String): void;

  hasBool(): boolean;
  clearBool(): void;
  getBool(): NewDatapoint.Bool | undefined;
  setBool(value?: NewDatapoint.Bool): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): NewDatapoint.Date | undefined;
  setDate(value?: NewDatapoint.Date): void;

  getDatapointId(): string;
  setDatapointId(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<api_commons_ana_pb.TagMap[keyof api_commons_ana_pb.TagMap]>;
  setTagsList(value: Array<api_commons_ana_pb.TagMap[keyof api_commons_ana_pb.TagMap]>): void;
  addTags(value: api_commons_ana_pb.TagMap[keyof api_commons_ana_pb.TagMap], index?: number): api_commons_ana_pb.TagMap[keyof api_commons_ana_pb.TagMap];

  getActionCase(): NewDatapoint.ActionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewDatapoint.AsObject;
  static toObject(includeInstance: boolean, msg: NewDatapoint): NewDatapoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewDatapoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewDatapoint;
  static deserializeBinaryFromReader(message: NewDatapoint, reader: jspb.BinaryReader): NewDatapoint;
}

export namespace NewDatapoint {
  export type AsObject = {
    uuid: string,
    label: string,
    filterId: string,
    pb_float?: NewDatapoint.Float.AsObject,
    string?: NewDatapoint.String.AsObject,
    bool?: NewDatapoint.Bool.AsObject,
    date?: NewDatapoint.Date.AsObject,
    datapointId: string,
    tagsList: Array<api_commons_ana_pb.TagMap[keyof api_commons_ana_pb.TagMap]>,
  }

  export class Float extends jspb.Message {
    getAggregation(): api_commons_ana_pb.NumericAggregationMap[keyof api_commons_ana_pb.NumericAggregationMap];
    setAggregation(value: api_commons_ana_pb.NumericAggregationMap[keyof api_commons_ana_pb.NumericAggregationMap]): void;

    hasDatapoint(): boolean;
    clearDatapoint(): void;
    getDatapoint(): string;
    setDatapoint(value: string): void;

    hasConstant(): boolean;
    clearConstant(): void;
    getConstant(): number;
    setConstant(value: number): void;

    getOperation(): api_commons_ana_pb.OperationMap[keyof api_commons_ana_pb.OperationMap];
    setOperation(value: api_commons_ana_pb.OperationMap[keyof api_commons_ana_pb.OperationMap]): void;

    getPercentile(): number;
    setPercentile(value: number): void;

    getOperandCase(): Float.OperandCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Float.AsObject;
    static toObject(includeInstance: boolean, msg: Float): Float.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Float, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Float;
    static deserializeBinaryFromReader(message: Float, reader: jspb.BinaryReader): Float;
  }

  export namespace Float {
    export type AsObject = {
      aggregation: api_commons_ana_pb.NumericAggregationMap[keyof api_commons_ana_pb.NumericAggregationMap],
      datapoint: string,
      constant: number,
      operation: api_commons_ana_pb.OperationMap[keyof api_commons_ana_pb.OperationMap],
      percentile: number,
    }

    export enum OperandCase {
      OPERAND_NOT_SET = 0,
      DATAPOINT = 2,
      CONSTANT = 5,
    }
  }

  export class String extends jspb.Message {
    getAggregation(): api_commons_ana_pb.NonNumericAggregationMap[keyof api_commons_ana_pb.NonNumericAggregationMap];
    setAggregation(value: api_commons_ana_pb.NonNumericAggregationMap[keyof api_commons_ana_pb.NonNumericAggregationMap]): void;

    getPrepend(): string;
    setPrepend(value: string): void;

    getAppend(): string;
    setAppend(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): String.AsObject;
    static toObject(includeInstance: boolean, msg: String): String.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: String, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): String;
    static deserializeBinaryFromReader(message: String, reader: jspb.BinaryReader): String;
  }

  export namespace String {
    export type AsObject = {
      aggregation: api_commons_ana_pb.NonNumericAggregationMap[keyof api_commons_ana_pb.NonNumericAggregationMap],
      prepend: string,
      append: string,
    }
  }

  export class Bool extends jspb.Message {
    getAggregation(): api_commons_ana_pb.NonNumericAggregationMap[keyof api_commons_ana_pb.NonNumericAggregationMap];
    setAggregation(value: api_commons_ana_pb.NonNumericAggregationMap[keyof api_commons_ana_pb.NonNumericAggregationMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Bool.AsObject;
    static toObject(includeInstance: boolean, msg: Bool): Bool.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Bool, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Bool;
    static deserializeBinaryFromReader(message: Bool, reader: jspb.BinaryReader): Bool;
  }

  export namespace Bool {
    export type AsObject = {
      aggregation: api_commons_ana_pb.NonNumericAggregationMap[keyof api_commons_ana_pb.NonNumericAggregationMap],
    }
  }

  export class Date extends jspb.Message {
    getAggregation(): api_commons_ana_pb.NumericAggregationMap[keyof api_commons_ana_pb.NumericAggregationMap];
    setAggregation(value: api_commons_ana_pb.NumericAggregationMap[keyof api_commons_ana_pb.NumericAggregationMap]): void;

    getFormat(): string;
    setFormat(value: string): void;

    getPercentile(): number;
    setPercentile(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Date.AsObject;
    static toObject(includeInstance: boolean, msg: Date): Date.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Date, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Date;
    static deserializeBinaryFromReader(message: Date, reader: jspb.BinaryReader): Date;
  }

  export namespace Date {
    export type AsObject = {
      aggregation: api_commons_ana_pb.NumericAggregationMap[keyof api_commons_ana_pb.NumericAggregationMap],
      format: string,
      percentile: number,
    }
  }

  export enum ActionCase {
    ACTION_NOT_SET = 0,
    FLOAT = 6,
    STRING = 7,
    BOOL = 8,
    DATE = 9,
  }
}

export class GetDatapointReq extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatapointReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatapointReq): GetDatapointReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDatapointReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatapointReq;
  static deserializeBinaryFromReader(message: GetDatapointReq, reader: jspb.BinaryReader): GetDatapointReq;
}

export namespace GetDatapointReq {
  export type AsObject = {
    uuid: string,
  }
}

export class GetDatapointResp extends jspb.Message {
  hasDatapoint(): boolean;
  clearDatapoint(): void;
  getDatapoint(): NewDatapoint | undefined;
  setDatapoint(value?: NewDatapoint): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatapointResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatapointResp): GetDatapointResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDatapointResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatapointResp;
  static deserializeBinaryFromReader(message: GetDatapointResp, reader: jspb.BinaryReader): GetDatapointResp;
}

export namespace GetDatapointResp {
  export type AsObject = {
    datapoint?: NewDatapoint.AsObject,
  }
}

export class CreateDatapointReq extends jspb.Message {
  hasDatapoint(): boolean;
  clearDatapoint(): void;
  getDatapoint(): NewDatapoint | undefined;
  setDatapoint(value?: NewDatapoint): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatapointReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatapointReq): CreateDatapointReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDatapointReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatapointReq;
  static deserializeBinaryFromReader(message: CreateDatapointReq, reader: jspb.BinaryReader): CreateDatapointReq;
}

export namespace CreateDatapointReq {
  export type AsObject = {
    datapoint?: NewDatapoint.AsObject,
  }
}

export class CreateDatapointResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatapointResp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatapointResp): CreateDatapointResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDatapointResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatapointResp;
  static deserializeBinaryFromReader(message: CreateDatapointResp, reader: jspb.BinaryReader): CreateDatapointResp;
}

export namespace CreateDatapointResp {
  export type AsObject = {
  }
}

export class DeleteDatapointReq extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDatapointReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDatapointReq): DeleteDatapointReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDatapointReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDatapointReq;
  static deserializeBinaryFromReader(message: DeleteDatapointReq, reader: jspb.BinaryReader): DeleteDatapointReq;
}

export namespace DeleteDatapointReq {
  export type AsObject = {
    uuid: string,
  }
}

export class DeleteDatapointResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDatapointResp.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDatapointResp): DeleteDatapointResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDatapointResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDatapointResp;
  static deserializeBinaryFromReader(message: DeleteDatapointResp, reader: jspb.BinaryReader): DeleteDatapointResp;
}

export namespace DeleteDatapointResp {
  export type AsObject = {
  }
}

export class CategoryData extends jspb.Message {
  getCategory(): string;
  setCategory(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryData.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryData): CategoryData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CategoryData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryData;
  static deserializeBinaryFromReader(message: CategoryData, reader: jspb.BinaryReader): CategoryData;
}

export namespace CategoryData {
  export type AsObject = {
    category: string,
    value: number,
  }
}

export class Filter extends jspb.Message {
  hasTimeFrom(): boolean;
  clearTimeFrom(): void;
  getTimeFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTimeTo(): boolean;
  clearTimeTo(): void;
  getTimeTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTimeZone(): api_commons_ana_pb.AnaTimeZoneMap[keyof api_commons_ana_pb.AnaTimeZoneMap];
  setTimeZone(value: api_commons_ana_pb.AnaTimeZoneMap[keyof api_commons_ana_pb.AnaTimeZoneMap]): void;

  getFilterId(): string;
  setFilterId(value: string): void;

  clearOrgIdsList(): void;
  getOrgIdsList(): Array<string>;
  setOrgIdsList(value: Array<string>): void;
  addOrgIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filter.AsObject;
  static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filter;
  static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
  export type AsObject = {
    timeFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timeTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timeZone: api_commons_ana_pb.AnaTimeZoneMap[keyof api_commons_ana_pb.AnaTimeZoneMap],
    filterId: string,
    orgIdsList: Array<string>,
  }
}

export class GetFiltersReq extends jspb.Message {
  getTag(): api_commons_ana_pb.TagMap[keyof api_commons_ana_pb.TagMap];
  setTag(value: api_commons_ana_pb.TagMap[keyof api_commons_ana_pb.TagMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFiltersReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetFiltersReq): GetFiltersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFiltersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFiltersReq;
  static deserializeBinaryFromReader(message: GetFiltersReq, reader: jspb.BinaryReader): GetFiltersReq;
}

export namespace GetFiltersReq {
  export type AsObject = {
    tag: api_commons_ana_pb.TagMap[keyof api_commons_ana_pb.TagMap],
  }
}

export class NewFilter extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewFilter.AsObject;
  static toObject(includeInstance: boolean, msg: NewFilter): NewFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewFilter;
  static deserializeBinaryFromReader(message: NewFilter, reader: jspb.BinaryReader): NewFilter;
}

export namespace NewFilter {
  export type AsObject = {
    uuid: string,
    label: string,
  }
}

export class GetFiltersResp extends jspb.Message {
  clearFiltersList(): void;
  getFiltersList(): Array<NewFilter>;
  setFiltersList(value: Array<NewFilter>): void;
  addFilters(value?: NewFilter, index?: number): NewFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFiltersResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetFiltersResp): GetFiltersResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFiltersResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFiltersResp;
  static deserializeBinaryFromReader(message: GetFiltersResp, reader: jspb.BinaryReader): GetFiltersResp;
}

export namespace GetFiltersResp {
  export type AsObject = {
    filtersList: Array<NewFilter.AsObject>,
  }
}

export class CreateFilterReq extends jspb.Message {
  hasCompound(): boolean;
  clearCompound(): void;
  getCompound(): CreateFilterReq.Compound | undefined;
  setCompound(value?: CreateFilterReq.Compound): void;

  hasSimple(): boolean;
  clearSimple(): void;
  getSimple(): CreateFilterReq.Simple | undefined;
  setSimple(value?: CreateFilterReq.Simple): void;

  getLabel(): string;
  setLabel(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<api_commons_ana_pb.TagMap[keyof api_commons_ana_pb.TagMap]>;
  setTagsList(value: Array<api_commons_ana_pb.TagMap[keyof api_commons_ana_pb.TagMap]>): void;
  addTags(value: api_commons_ana_pb.TagMap[keyof api_commons_ana_pb.TagMap], index?: number): api_commons_ana_pb.TagMap[keyof api_commons_ana_pb.TagMap];

  getCreationTypeCase(): CreateFilterReq.CreationTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFilterReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFilterReq): CreateFilterReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFilterReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFilterReq;
  static deserializeBinaryFromReader(message: CreateFilterReq, reader: jspb.BinaryReader): CreateFilterReq;
}

export namespace CreateFilterReq {
  export type AsObject = {
    compound?: CreateFilterReq.Compound.AsObject,
    simple?: CreateFilterReq.Simple.AsObject,
    label: string,
    tagsList: Array<api_commons_ana_pb.TagMap[keyof api_commons_ana_pb.TagMap]>,
  }

  export class Compound extends jspb.Message {
    getJoin(): api_commons_ana_pb.CompoundFilterJoinMap[keyof api_commons_ana_pb.CompoundFilterJoinMap];
    setJoin(value: api_commons_ana_pb.CompoundFilterJoinMap[keyof api_commons_ana_pb.CompoundFilterJoinMap]): void;

    getLeftFilterId(): string;
    setLeftFilterId(value: string): void;

    getRightFilterId(): string;
    setRightFilterId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Compound.AsObject;
    static toObject(includeInstance: boolean, msg: Compound): Compound.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Compound, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Compound;
    static deserializeBinaryFromReader(message: Compound, reader: jspb.BinaryReader): Compound;
  }

  export namespace Compound {
    export type AsObject = {
      join: api_commons_ana_pb.CompoundFilterJoinMap[keyof api_commons_ana_pb.CompoundFilterJoinMap],
      leftFilterId: string,
      rightFilterId: string,
    }
  }

  export class Simple extends jspb.Message {
    getDatapointId(): string;
    setDatapointId(value: string): void;

    hasComparison(): boolean;
    clearComparison(): void;
    getComparison(): Comparison | undefined;
    setComparison(value?: Comparison): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Simple.AsObject;
    static toObject(includeInstance: boolean, msg: Simple): Simple.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Simple, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Simple;
    static deserializeBinaryFromReader(message: Simple, reader: jspb.BinaryReader): Simple;
  }

  export namespace Simple {
    export type AsObject = {
      datapointId: string,
      comparison?: Comparison.AsObject,
    }
  }

  export enum CreationTypeCase {
    CREATION_TYPE_NOT_SET = 0,
    COMPOUND = 1,
    SIMPLE = 2,
  }
}

export class Comparison extends jspb.Message {
  hasString(): boolean;
  clearString(): void;
  getString(): Comparison.String | undefined;
  setString(value?: Comparison.String): void;

  hasFloat(): boolean;
  clearFloat(): void;
  getFloat(): Comparison.Float | undefined;
  setFloat(value?: Comparison.Float): void;

  hasBool(): boolean;
  clearBool(): void;
  getBool(): Comparison.Bool | undefined;
  setBool(value?: Comparison.Bool): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): Comparison.Date | undefined;
  setDate(value?: Comparison.Date): void;

  getComparisonTypeCase(): Comparison.ComparisonTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Comparison.AsObject;
  static toObject(includeInstance: boolean, msg: Comparison): Comparison.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Comparison, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Comparison;
  static deserializeBinaryFromReader(message: Comparison, reader: jspb.BinaryReader): Comparison;
}

export namespace Comparison {
  export type AsObject = {
    string?: Comparison.String.AsObject,
    pb_float?: Comparison.Float.AsObject,
    bool?: Comparison.Bool.AsObject,
    date?: Comparison.Date.AsObject,
  }

  export class String extends jspb.Message {
    getValue(): string;
    setValue(value: string): void;

    getComparison(): api_commons_ana_pb.StringComparisonMap[keyof api_commons_ana_pb.StringComparisonMap];
    setComparison(value: api_commons_ana_pb.StringComparisonMap[keyof api_commons_ana_pb.StringComparisonMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): String.AsObject;
    static toObject(includeInstance: boolean, msg: String): String.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: String, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): String;
    static deserializeBinaryFromReader(message: String, reader: jspb.BinaryReader): String;
  }

  export namespace String {
    export type AsObject = {
      value: string,
      comparison: api_commons_ana_pb.StringComparisonMap[keyof api_commons_ana_pb.StringComparisonMap],
    }
  }

  export class Float extends jspb.Message {
    getValue(): number;
    setValue(value: number): void;

    getComparison(): api_commons_ana_pb.FloatComparisonMap[keyof api_commons_ana_pb.FloatComparisonMap];
    setComparison(value: api_commons_ana_pb.FloatComparisonMap[keyof api_commons_ana_pb.FloatComparisonMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Float.AsObject;
    static toObject(includeInstance: boolean, msg: Float): Float.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Float, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Float;
    static deserializeBinaryFromReader(message: Float, reader: jspb.BinaryReader): Float;
  }

  export namespace Float {
    export type AsObject = {
      value: number,
      comparison: api_commons_ana_pb.FloatComparisonMap[keyof api_commons_ana_pb.FloatComparisonMap],
    }
  }

  export class Bool extends jspb.Message {
    getValue(): boolean;
    setValue(value: boolean): void;

    getComparison(): api_commons_ana_pb.BoolComparisonMap[keyof api_commons_ana_pb.BoolComparisonMap];
    setComparison(value: api_commons_ana_pb.BoolComparisonMap[keyof api_commons_ana_pb.BoolComparisonMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Bool.AsObject;
    static toObject(includeInstance: boolean, msg: Bool): Bool.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Bool, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Bool;
    static deserializeBinaryFromReader(message: Bool, reader: jspb.BinaryReader): Bool;
  }

  export namespace Bool {
    export type AsObject = {
      value: boolean,
      comparison: api_commons_ana_pb.BoolComparisonMap[keyof api_commons_ana_pb.BoolComparisonMap],
    }
  }

  export class Date extends jspb.Message {
    hasValue(): boolean;
    clearValue(): void;
    getValue(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setValue(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getComparison(): api_commons_ana_pb.DateComparisonMap[keyof api_commons_ana_pb.DateComparisonMap];
    setComparison(value: api_commons_ana_pb.DateComparisonMap[keyof api_commons_ana_pb.DateComparisonMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Date.AsObject;
    static toObject(includeInstance: boolean, msg: Date): Date.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Date, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Date;
    static deserializeBinaryFromReader(message: Date, reader: jspb.BinaryReader): Date;
  }

  export namespace Date {
    export type AsObject = {
      value?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      comparison: api_commons_ana_pb.DateComparisonMap[keyof api_commons_ana_pb.DateComparisonMap],
    }
  }

  export enum ComparisonTypeCase {
    COMPARISON_TYPE_NOT_SET = 0,
    STRING = 2,
    FLOAT = 3,
    BOOL = 4,
    DATE = 5,
  }
}

export class CreateFilterResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFilterResp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFilterResp): CreateFilterResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFilterResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFilterResp;
  static deserializeBinaryFromReader(message: CreateFilterResp, reader: jspb.BinaryReader): CreateFilterResp;
}

export namespace CreateFilterResp {
  export type AsObject = {
  }
}

export class MultiValueCategoryData extends jspb.Message {
  getCategory(): string;
  setCategory(value: string): void;

  clearValuesList(): void;
  getValuesList(): Array<number>;
  setValuesList(value: Array<number>): void;
  addValues(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiValueCategoryData.AsObject;
  static toObject(includeInstance: boolean, msg: MultiValueCategoryData): MultiValueCategoryData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiValueCategoryData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiValueCategoryData;
  static deserializeBinaryFromReader(message: MultiValueCategoryData, reader: jspb.BinaryReader): MultiValueCategoryData;
}

export namespace MultiValueCategoryData {
  export type AsObject = {
    category: string,
    valuesList: Array<number>,
  }
}

export class GetDataReq extends jspb.Message {
  clearGroupingsList(): void;
  getGroupingsList(): Array<Grouping>;
  setGroupingsList(value: Array<Grouping>): void;
  addGroupings(value?: Grouping, index?: number): Grouping;

  clearFieldDatapointIdsList(): void;
  getFieldDatapointIdsList(): Array<string>;
  setFieldDatapointIdsList(value: Array<string>): void;
  addFieldDatapointIds(value: string, index?: number): string;

  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): Filter | undefined;
  setFilter(value?: Filter): void;

  getResultsOnEveryLevel(): boolean;
  setResultsOnEveryLevel(value: boolean): void;

  clearOrdersList(): void;
  getOrdersList(): Array<Order>;
  setOrdersList(value: Array<Order>): void;
  addOrders(value?: Order, index?: number): Order;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataReq): GetDataReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDataReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataReq;
  static deserializeBinaryFromReader(message: GetDataReq, reader: jspb.BinaryReader): GetDataReq;
}

export namespace GetDataReq {
  export type AsObject = {
    groupingsList: Array<Grouping.AsObject>,
    fieldDatapointIdsList: Array<string>,
    filter?: Filter.AsObject,
    resultsOnEveryLevel: boolean,
    ordersList: Array<Order.AsObject>,
    limit: number,
  }
}

export class Order extends jspb.Message {
  getDatapointId(): string;
  setDatapointId(value: string): void;

  getDesc(): boolean;
  setDesc(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    datapointId: string,
    desc: boolean,
  }
}

export class Grouping extends jspb.Message {
  hasDatapointId(): boolean;
  clearDatapointId(): void;
  getDatapointId(): string;
  setDatapointId(value: string): void;

  hasTimeScope(): boolean;
  clearTimeScope(): void;
  getTimeScope(): api_commons_ana_pb.TimeScopeMap[keyof api_commons_ana_pb.TimeScopeMap];
  setTimeScope(value: api_commons_ana_pb.TimeScopeMap[keyof api_commons_ana_pb.TimeScopeMap]): void;

  getFormatCase(): Grouping.FormatCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Grouping.AsObject;
  static toObject(includeInstance: boolean, msg: Grouping): Grouping.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Grouping, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Grouping;
  static deserializeBinaryFromReader(message: Grouping, reader: jspb.BinaryReader): Grouping;
}

export namespace Grouping {
  export type AsObject = {
    datapointId: string,
    timeScope: api_commons_ana_pb.TimeScopeMap[keyof api_commons_ana_pb.TimeScopeMap],
  }

  export enum FormatCase {
    FORMAT_NOT_SET = 0,
    DATAPOINT_ID = 1,
    TIME_SCOPE = 2,
  }
}

export class GetDataResp extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<MultiCategoryMultiValueData>;
  setDataList(value: Array<MultiCategoryMultiValueData>): void;
  addData(value?: MultiCategoryMultiValueData, index?: number): MultiCategoryMultiValueData;

  clearWarningsList(): void;
  getWarningsList(): Array<Warning>;
  setWarningsList(value: Array<Warning>): void;
  addWarnings(value?: Warning, index?: number): Warning;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataResp): GetDataResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDataResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataResp;
  static deserializeBinaryFromReader(message: GetDataResp, reader: jspb.BinaryReader): GetDataResp;
}

export namespace GetDataResp {
  export type AsObject = {
    dataList: Array<MultiCategoryMultiValueData.AsObject>,
    warningsList: Array<Warning.AsObject>,
  }
}

export class Warning extends jspb.Message {
  hasMissingFields(): boolean;
  clearMissingFields(): void;
  getMissingFields(): MissingFields | undefined;
  setMissingFields(value?: MissingFields): void;

  hasMissingLocations(): boolean;
  clearMissingLocations(): void;
  getMissingLocations(): MissingLocations | undefined;
  setMissingLocations(value?: MissingLocations): void;

  getWarningTypeCase(): Warning.WarningTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Warning.AsObject;
  static toObject(includeInstance: boolean, msg: Warning): Warning.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Warning, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Warning;
  static deserializeBinaryFromReader(message: Warning, reader: jspb.BinaryReader): Warning;
}

export namespace Warning {
  export type AsObject = {
    missingFields?: MissingFields.AsObject,
    missingLocations?: MissingLocations.AsObject,
  }

  export enum WarningTypeCase {
    WARNING_TYPE_NOT_SET = 0,
    MISSING_FIELDS = 1,
    MISSING_LOCATIONS = 2,
  }
}

export class MissingFields extends jspb.Message {
  clearFieldsList(): void;
  getFieldsList(): Array<string>;
  setFieldsList(value: Array<string>): void;
  addFields(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissingFields.AsObject;
  static toObject(includeInstance: boolean, msg: MissingFields): MissingFields.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MissingFields, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissingFields;
  static deserializeBinaryFromReader(message: MissingFields, reader: jspb.BinaryReader): MissingFields;
}

export namespace MissingFields {
  export type AsObject = {
    fieldsList: Array<string>,
  }
}

export class MissingLocations extends jspb.Message {
  clearFieldsList(): void;
  getFieldsList(): Array<MissingLocation>;
  setFieldsList(value: Array<MissingLocation>): void;
  addFields(value?: MissingLocation, index?: number): MissingLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissingLocations.AsObject;
  static toObject(includeInstance: boolean, msg: MissingLocations): MissingLocations.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MissingLocations, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissingLocations;
  static deserializeBinaryFromReader(message: MissingLocations, reader: jspb.BinaryReader): MissingLocations;
}

export namespace MissingLocations {
  export type AsObject = {
    fieldsList: Array<MissingLocation.AsObject>,
  }
}

export class MissingLocation extends jspb.Message {
  getDatapointId(): string;
  setDatapointId(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissingLocation.AsObject;
  static toObject(includeInstance: boolean, msg: MissingLocation): MissingLocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MissingLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissingLocation;
  static deserializeBinaryFromReader(message: MissingLocation, reader: jspb.BinaryReader): MissingLocation;
}

export namespace MissingLocation {
  export type AsObject = {
    datapointId: string,
    message: string,
    label: string,
  }
}

export class MultiCategoryMultiValueData extends jspb.Message {
  clearCategoriesList(): void;
  getCategoriesList(): Array<Category>;
  setCategoriesList(value: Array<Category>): void;
  addCategories(value?: Category, index?: number): Category;

  clearValuesList(): void;
  getValuesList(): Array<Value>;
  setValuesList(value: Array<Value>): void;
  addValues(value?: Value, index?: number): Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiCategoryMultiValueData.AsObject;
  static toObject(includeInstance: boolean, msg: MultiCategoryMultiValueData): MultiCategoryMultiValueData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiCategoryMultiValueData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiCategoryMultiValueData;
  static deserializeBinaryFromReader(message: MultiCategoryMultiValueData, reader: jspb.BinaryReader): MultiCategoryMultiValueData;
}

export namespace MultiCategoryMultiValueData {
  export type AsObject = {
    categoriesList: Array<Category.AsObject>,
    valuesList: Array<Value.AsObject>,
  }
}

export class Category extends jspb.Message {
  hasStringValue(): boolean;
  clearStringValue(): void;
  getStringValue(): string;
  setStringValue(value: string): void;

  hasTimestampValue(): boolean;
  clearTimestampValue(): void;
  getTimestampValue(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestampValue(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDataTypeCase(): Category.DataTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Category.AsObject;
  static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Category;
  static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
  export type AsObject = {
    stringValue: string,
    timestampValue?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum DataTypeCase {
    DATA_TYPE_NOT_SET = 0,
    STRING_VALUE = 1,
    TIMESTAMP_VALUE = 2,
  }
}

export class Value extends jspb.Message {
  hasStringValue(): boolean;
  clearStringValue(): void;
  getStringValue(): string;
  setStringValue(value: string): void;

  hasFloatValue(): boolean;
  clearFloatValue(): void;
  getFloatValue(): number;
  setFloatValue(value: number): void;

  hasTimestampValue(): boolean;
  clearTimestampValue(): void;
  getTimestampValue(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestampValue(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEmpty(): boolean;
  clearEmpty(): void;
  getEmpty(): google_protobuf_empty_pb.Empty | undefined;
  setEmpty(value?: google_protobuf_empty_pb.Empty): void;

  hasBoolValue(): boolean;
  clearBoolValue(): void;
  getBoolValue(): boolean;
  setBoolValue(value: boolean): void;

  getDataTypeCase(): Value.DataTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Value.AsObject;
  static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Value;
  static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
  export type AsObject = {
    stringValue: string,
    floatValue: number,
    timestampValue?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    empty?: google_protobuf_empty_pb.Empty.AsObject,
    boolValue: boolean,
  }

  export enum DataTypeCase {
    DATA_TYPE_NOT_SET = 0,
    STRING_VALUE = 1,
    FLOAT_VALUE = 2,
    TIMESTAMP_VALUE = 3,
    EMPTY = 4,
    BOOL_VALUE = 5,
  }
}

export class GetDataTimeIncrementResp extends jspb.Message {
  clearTimeIncrementsList(): void;
  getTimeIncrementsList(): Array<TimeIncrement>;
  setTimeIncrementsList(value: Array<TimeIncrement>): void;
  addTimeIncrements(value?: TimeIncrement, index?: number): TimeIncrement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataTimeIncrementResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataTimeIncrementResp): GetDataTimeIncrementResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDataTimeIncrementResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataTimeIncrementResp;
  static deserializeBinaryFromReader(message: GetDataTimeIncrementResp, reader: jspb.BinaryReader): GetDataTimeIncrementResp;
}

export namespace GetDataTimeIncrementResp {
  export type AsObject = {
    timeIncrementsList: Array<TimeIncrement.AsObject>,
  }
}

export class TimeIncrement extends jspb.Message {
  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Value | undefined;
  setValue(value?: Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeIncrement.AsObject;
  static toObject(includeInstance: boolean, msg: TimeIncrement): TimeIncrement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeIncrement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeIncrement;
  static deserializeBinaryFromReader(message: TimeIncrement, reader: jspb.BinaryReader): TimeIncrement;
}

export namespace TimeIncrement {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    value?: Value.AsObject,
  }
}

export class Charts extends jspb.Message {
  clearChartsList(): void;
  getChartsList(): Array<Chart>;
  setChartsList(value: Array<Chart>): void;
  addCharts(value?: Chart, index?: number): Chart;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Charts.AsObject;
  static toObject(includeInstance: boolean, msg: Charts): Charts.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Charts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Charts;
  static deserializeBinaryFromReader(message: Charts, reader: jspb.BinaryReader): Charts;
}

export namespace Charts {
  export type AsObject = {
    chartsList: Array<Chart.AsObject>,
  }
}

export class Chart extends jspb.Message {
  getChartId(): string;
  setChartId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  hasChartDetails(): boolean;
  clearChartDetails(): void;
  getChartDetails(): ChartDetails | undefined;
  setChartDetails(value?: ChartDetails): void;

  getRootId(): string;
  setRootId(value: string): void;

  getDisplayLabels(): api_commons_ana_charts_pb.ChartDisplayLabelsMap[keyof api_commons_ana_charts_pb.ChartDisplayLabelsMap];
  setDisplayLabels(value: api_commons_ana_charts_pb.ChartDisplayLabelsMap[keyof api_commons_ana_charts_pb.ChartDisplayLabelsMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chart.AsObject;
  static toObject(includeInstance: boolean, msg: Chart): Chart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Chart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chart;
  static deserializeBinaryFromReader(message: Chart, reader: jspb.BinaryReader): Chart;
}

export namespace Chart {
  export type AsObject = {
    chartId: string,
    title: string,
    chartDetails?: ChartDetails.AsObject,
    rootId: string,
    displayLabels: api_commons_ana_charts_pb.ChartDisplayLabelsMap[keyof api_commons_ana_charts_pb.ChartDisplayLabelsMap],
  }
}

export class ChartDetails extends jspb.Message {
  hasSingleValueChart(): boolean;
  clearSingleValueChart(): void;
  getSingleValueChart(): SingleValueChart | undefined;
  setSingleValueChart(value?: SingleValueChart): void;

  hasPieChart(): boolean;
  clearPieChart(): void;
  getPieChart(): PieChart | undefined;
  setPieChart(value?: PieChart): void;

  hasRadarFixedChart(): boolean;
  clearRadarFixedChart(): void;
  getRadarFixedChart(): RadarFixedChart | undefined;
  setRadarFixedChart(value?: RadarFixedChart): void;

  hasBarChart(): boolean;
  clearBarChart(): void;
  getBarChart(): BarChart | undefined;
  setBarChart(value?: BarChart): void;

  hasBulletChart(): boolean;
  clearBulletChart(): void;
  getBulletChart(): BulletChart | undefined;
  setBulletChart(value?: BulletChart): void;

  hasMultiValueChart(): boolean;
  clearMultiValueChart(): void;
  getMultiValueChart(): MultiValueChart | undefined;
  setMultiValueChart(value?: MultiValueChart): void;

  hasTreeMapChart(): boolean;
  clearTreeMapChart(): void;
  getTreeMapChart(): TreeMapChart | undefined;
  setTreeMapChart(value?: TreeMapChart): void;

  hasActivityGaugeChart(): boolean;
  clearActivityGaugeChart(): void;
  getActivityGaugeChart(): ActivityGaugeChart | undefined;
  setActivityGaugeChart(value?: ActivityGaugeChart): void;

  hasArcChart(): boolean;
  clearArcChart(): void;
  getArcChart(): ArcChart | undefined;
  setArcChart(value?: ArcChart): void;

  hasScatterChart(): boolean;
  clearScatterChart(): void;
  getScatterChart(): ScatterChart | undefined;
  setScatterChart(value?: ScatterChart): void;

  hasTimeHistogramChart(): boolean;
  clearTimeHistogramChart(): void;
  getTimeHistogramChart(): TimeHistogramChart | undefined;
  setTimeHistogramChart(value?: TimeHistogramChart): void;

  hasTreeTableChart(): boolean;
  clearTreeTableChart(): void;
  getTreeTableChart(): TreeTableChart | undefined;
  setTreeTableChart(value?: TreeTableChart): void;

  hasInfoPanelChart(): boolean;
  clearInfoPanelChart(): void;
  getInfoPanelChart(): InfoPanelChart | undefined;
  setInfoPanelChart(value?: InfoPanelChart): void;

  hasRankedListChart(): boolean;
  clearRankedListChart(): void;
  getRankedListChart(): RankedListChart | undefined;
  setRankedListChart(value?: RankedListChart): void;

  hasSpeedometerChart(): boolean;
  clearSpeedometerChart(): void;
  getSpeedometerChart(): SpeedometerChart | undefined;
  setSpeedometerChart(value?: SpeedometerChart): void;

  hasLineChart(): boolean;
  clearLineChart(): void;
  getLineChart(): LineChart | undefined;
  setLineChart(value?: LineChart): void;

  hasSplineChart(): boolean;
  clearSplineChart(): void;
  getSplineChart(): SplineChart | undefined;
  setSplineChart(value?: SplineChart): void;

  hasAreaChart(): boolean;
  clearAreaChart(): void;
  getAreaChart(): AreaChart | undefined;
  setAreaChart(value?: AreaChart): void;

  hasTableChart(): boolean;
  clearTableChart(): void;
  getTableChart(): TableChart | undefined;
  setTableChart(value?: TableChart): void;

  hasBubbleChart(): boolean;
  clearBubbleChart(): void;
  getBubbleChart(): BubbleChart | undefined;
  setBubbleChart(value?: BubbleChart): void;

  hasPackedBubbleChart(): boolean;
  clearPackedBubbleChart(): void;
  getPackedBubbleChart(): PackedBubbleChart | undefined;
  setPackedBubbleChart(value?: PackedBubbleChart): void;

  hasSunburstChart(): boolean;
  clearSunburstChart(): void;
  getSunburstChart(): SunburstChart | undefined;
  setSunburstChart(value?: SunburstChart): void;

  getDetailsCase(): ChartDetails.DetailsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChartDetails.AsObject;
  static toObject(includeInstance: boolean, msg: ChartDetails): ChartDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChartDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChartDetails;
  static deserializeBinaryFromReader(message: ChartDetails, reader: jspb.BinaryReader): ChartDetails;
}

export namespace ChartDetails {
  export type AsObject = {
    singleValueChart?: SingleValueChart.AsObject,
    pieChart?: PieChart.AsObject,
    radarFixedChart?: RadarFixedChart.AsObject,
    barChart?: BarChart.AsObject,
    bulletChart?: BulletChart.AsObject,
    multiValueChart?: MultiValueChart.AsObject,
    treeMapChart?: TreeMapChart.AsObject,
    activityGaugeChart?: ActivityGaugeChart.AsObject,
    arcChart?: ArcChart.AsObject,
    scatterChart?: ScatterChart.AsObject,
    timeHistogramChart?: TimeHistogramChart.AsObject,
    treeTableChart?: TreeTableChart.AsObject,
    infoPanelChart?: InfoPanelChart.AsObject,
    rankedListChart?: RankedListChart.AsObject,
    speedometerChart?: SpeedometerChart.AsObject,
    lineChart?: LineChart.AsObject,
    splineChart?: SplineChart.AsObject,
    areaChart?: AreaChart.AsObject,
    tableChart?: TableChart.AsObject,
    bubbleChart?: BubbleChart.AsObject,
    packedBubbleChart?: PackedBubbleChart.AsObject,
    sunburstChart?: SunburstChart.AsObject,
  }

  export enum DetailsCase {
    DETAILS_NOT_SET = 0,
    SINGLE_VALUE_CHART = 1,
    PIE_CHART = 2,
    RADAR_FIXED_CHART = 3,
    BAR_CHART = 4,
    BULLET_CHART = 5,
    MULTI_VALUE_CHART = 6,
    TREE_MAP_CHART = 7,
    ACTIVITY_GAUGE_CHART = 8,
    ARC_CHART = 9,
    SCATTER_CHART = 10,
    TIME_HISTOGRAM_CHART = 11,
    TREE_TABLE_CHART = 12,
    INFO_PANEL_CHART = 13,
    RANKED_LIST_CHART = 14,
    SPEEDOMETER_CHART = 15,
    LINE_CHART = 16,
    SPLINE_CHART = 17,
    AREA_CHART = 18,
    TABLE_CHART = 19,
    BUBBLE_CHART = 20,
    PACKED_BUBBLE_CHART = 21,
    SUNBURST_CHART = 22,
  }
}

export class SingleValueChart extends jspb.Message {
  getDataPointId(): string;
  setDataPointId(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  getSuffix(): api_commons_ana_charts_pb.SuffixChoicesMap[keyof api_commons_ana_charts_pb.SuffixChoicesMap];
  setSuffix(value: api_commons_ana_charts_pb.SuffixChoicesMap[keyof api_commons_ana_charts_pb.SuffixChoicesMap]): void;

  getShowLabel(): boolean;
  setShowLabel(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleValueChart.AsObject;
  static toObject(includeInstance: boolean, msg: SingleValueChart): SingleValueChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SingleValueChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleValueChart;
  static deserializeBinaryFromReader(message: SingleValueChart, reader: jspb.BinaryReader): SingleValueChart;
}

export namespace SingleValueChart {
  export type AsObject = {
    dataPointId: string,
    label: string,
    suffix: api_commons_ana_charts_pb.SuffixChoicesMap[keyof api_commons_ana_charts_pb.SuffixChoicesMap],
    showLabel: boolean,
  }
}

export class PieChart extends jspb.Message {
  getFieldDataPointId(): string;
  setFieldDataPointId(value: string): void;

  getGroupingDataPointId(): string;
  setGroupingDataPointId(value: string): void;

  getHoleRadius(): number;
  setHoleRadius(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PieChart.AsObject;
  static toObject(includeInstance: boolean, msg: PieChart): PieChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PieChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PieChart;
  static deserializeBinaryFromReader(message: PieChart, reader: jspb.BinaryReader): PieChart;
}

export namespace PieChart {
  export type AsObject = {
    fieldDataPointId: string,
    groupingDataPointId: string,
    holeRadius: number,
  }
}

export class RadarFixedChart extends jspb.Message {
  getGroupingDataPointId(): string;
  setGroupingDataPointId(value: string): void;

  clearRadarFixedInnerChartsList(): void;
  getRadarFixedInnerChartsList(): Array<RadarFixedInnerChart>;
  setRadarFixedInnerChartsList(value: Array<RadarFixedInnerChart>): void;
  addRadarFixedInnerCharts(value?: RadarFixedInnerChart, index?: number): RadarFixedInnerChart;

  getDataLabels(): string;
  setDataLabels(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RadarFixedChart.AsObject;
  static toObject(includeInstance: boolean, msg: RadarFixedChart): RadarFixedChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RadarFixedChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RadarFixedChart;
  static deserializeBinaryFromReader(message: RadarFixedChart, reader: jspb.BinaryReader): RadarFixedChart;
}

export namespace RadarFixedChart {
  export type AsObject = {
    groupingDataPointId: string,
    radarFixedInnerChartsList: Array<RadarFixedInnerChart.AsObject>,
    dataLabels: string,
  }
}

export class RadarFixedInnerChart extends jspb.Message {
  getDataPointId(): string;
  setDataPointId(value: string): void;

  getCategoryName(): string;
  setCategoryName(value: string): void;

  hasArea(): boolean;
  clearArea(): void;
  getArea(): RadarFixedInnerChart.Area | undefined;
  setArea(value?: RadarFixedInnerChart.Area): void;

  hasBar(): boolean;
  clearBar(): void;
  getBar(): RadarFixedInnerChart.Bar | undefined;
  setBar(value?: RadarFixedInnerChart.Bar): void;

  hasLine(): boolean;
  clearLine(): void;
  getLine(): RadarFixedInnerChart.Line | undefined;
  setLine(value?: RadarFixedInnerChart.Line): void;

  hasSpline(): boolean;
  clearSpline(): void;
  getSpline(): RadarFixedInnerChart.Spline | undefined;
  setSpline(value?: RadarFixedInnerChart.Spline): void;

  getInnerChartDetailsCase(): RadarFixedInnerChart.InnerChartDetailsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RadarFixedInnerChart.AsObject;
  static toObject(includeInstance: boolean, msg: RadarFixedInnerChart): RadarFixedInnerChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RadarFixedInnerChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RadarFixedInnerChart;
  static deserializeBinaryFromReader(message: RadarFixedInnerChart, reader: jspb.BinaryReader): RadarFixedInnerChart;
}

export namespace RadarFixedInnerChart {
  export type AsObject = {
    dataPointId: string,
    categoryName: string,
    area?: RadarFixedInnerChart.Area.AsObject,
    bar?: RadarFixedInnerChart.Bar.AsObject,
    line?: RadarFixedInnerChart.Line.AsObject,
    spline?: RadarFixedInnerChart.Spline.AsObject,
  }

  export class Area extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Area.AsObject;
    static toObject(includeInstance: boolean, msg: Area): Area.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Area, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Area;
    static deserializeBinaryFromReader(message: Area, reader: jspb.BinaryReader): Area;
  }

  export namespace Area {
    export type AsObject = {
    }
  }

  export class Bar extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Bar.AsObject;
    static toObject(includeInstance: boolean, msg: Bar): Bar.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Bar, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Bar;
    static deserializeBinaryFromReader(message: Bar, reader: jspb.BinaryReader): Bar;
  }

  export namespace Bar {
    export type AsObject = {
    }
  }

  export class Line extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Line.AsObject;
    static toObject(includeInstance: boolean, msg: Line): Line.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Line, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Line;
    static deserializeBinaryFromReader(message: Line, reader: jspb.BinaryReader): Line;
  }

  export namespace Line {
    export type AsObject = {
    }
  }

  export class Spline extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Spline.AsObject;
    static toObject(includeInstance: boolean, msg: Spline): Spline.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Spline, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Spline;
    static deserializeBinaryFromReader(message: Spline, reader: jspb.BinaryReader): Spline;
  }

  export namespace Spline {
    export type AsObject = {
    }
  }

  export enum InnerChartDetailsCase {
    INNER_CHART_DETAILS_NOT_SET = 0,
    AREA = 3,
    BAR = 4,
    LINE = 5,
    SPLINE = 6,
  }
}

export class BarChart extends jspb.Message {
  getFieldDataPointId(): string;
  setFieldDataPointId(value: string): void;

  getGroupingDataPointId(): string;
  setGroupingDataPointId(value: string): void;

  getOrientation(): api_commons_ana_charts_pb.BarChartOrientationMap[keyof api_commons_ana_charts_pb.BarChartOrientationMap];
  setOrientation(value: api_commons_ana_charts_pb.BarChartOrientationMap[keyof api_commons_ana_charts_pb.BarChartOrientationMap]): void;

  hasThreshold(): boolean;
  clearThreshold(): void;
  getThreshold(): Threshold | undefined;
  setThreshold(value?: Threshold): void;

  getXLabel(): string;
  setXLabel(value: string): void;

  getYLabel(): string;
  setYLabel(value: string): void;

  getLegend(): string;
  setLegend(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BarChart.AsObject;
  static toObject(includeInstance: boolean, msg: BarChart): BarChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BarChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BarChart;
  static deserializeBinaryFromReader(message: BarChart, reader: jspb.BinaryReader): BarChart;
}

export namespace BarChart {
  export type AsObject = {
    fieldDataPointId: string,
    groupingDataPointId: string,
    orientation: api_commons_ana_charts_pb.BarChartOrientationMap[keyof api_commons_ana_charts_pb.BarChartOrientationMap],
    threshold?: Threshold.AsObject,
    xLabel: string,
    yLabel: string,
    legend: string,
  }
}

export class BulletChart extends jspb.Message {
  getFieldDataPointId(): string;
  setFieldDataPointId(value: string): void;

  getOrientation(): api_commons_ana_charts_pb.ChartOrientationMap[keyof api_commons_ana_charts_pb.ChartOrientationMap];
  setOrientation(value: api_commons_ana_charts_pb.ChartOrientationMap[keyof api_commons_ana_charts_pb.ChartOrientationMap]): void;

  hasThreshold(): boolean;
  clearThreshold(): void;
  getThreshold(): Threshold | undefined;
  setThreshold(value?: Threshold): void;

  getLegend(): string;
  setLegend(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulletChart.AsObject;
  static toObject(includeInstance: boolean, msg: BulletChart): BulletChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BulletChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulletChart;
  static deserializeBinaryFromReader(message: BulletChart, reader: jspb.BinaryReader): BulletChart;
}

export namespace BulletChart {
  export type AsObject = {
    fieldDataPointId: string,
    orientation: api_commons_ana_charts_pb.ChartOrientationMap[keyof api_commons_ana_charts_pb.ChartOrientationMap],
    threshold?: Threshold.AsObject,
    legend: string,
  }
}

export class MultiValueChart extends jspb.Message {
  clearDataValuesList(): void;
  getDataValuesList(): Array<DataValue>;
  setDataValuesList(value: Array<DataValue>): void;
  addDataValues(value?: DataValue, index?: number): DataValue;

  getColumns(): number;
  setColumns(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiValueChart.AsObject;
  static toObject(includeInstance: boolean, msg: MultiValueChart): MultiValueChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiValueChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiValueChart;
  static deserializeBinaryFromReader(message: MultiValueChart, reader: jspb.BinaryReader): MultiValueChart;
}

export namespace MultiValueChart {
  export type AsObject = {
    dataValuesList: Array<DataValue.AsObject>,
    columns: number,
  }
}

export class DataValue extends jspb.Message {
  getDataPointId(): string;
  setDataPointId(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataValue.AsObject;
  static toObject(includeInstance: boolean, msg: DataValue): DataValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataValue;
  static deserializeBinaryFromReader(message: DataValue, reader: jspb.BinaryReader): DataValue;
}

export namespace DataValue {
  export type AsObject = {
    dataPointId: string,
    label: string,
  }
}

export class TreeMapChart extends jspb.Message {
  getFieldDataPointId(): string;
  setFieldDataPointId(value: string): void;

  getGroupingDataPointId(): string;
  setGroupingDataPointId(value: string): void;

  getMinColor(): string;
  setMinColor(value: string): void;

  getMaxColor(): string;
  setMaxColor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TreeMapChart.AsObject;
  static toObject(includeInstance: boolean, msg: TreeMapChart): TreeMapChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TreeMapChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TreeMapChart;
  static deserializeBinaryFromReader(message: TreeMapChart, reader: jspb.BinaryReader): TreeMapChart;
}

export namespace TreeMapChart {
  export type AsObject = {
    fieldDataPointId: string,
    groupingDataPointId: string,
    minColor: string,
    maxColor: string,
  }
}

export class ActivityGaugeChart extends jspb.Message {
  clearActivityGaugeRingsList(): void;
  getActivityGaugeRingsList(): Array<ActivityGaugeRing>;
  setActivityGaugeRingsList(value: Array<ActivityGaugeRing>): void;
  addActivityGaugeRings(value?: ActivityGaugeRing, index?: number): ActivityGaugeRing;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityGaugeChart.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityGaugeChart): ActivityGaugeChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivityGaugeChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityGaugeChart;
  static deserializeBinaryFromReader(message: ActivityGaugeChart, reader: jspb.BinaryReader): ActivityGaugeChart;
}

export namespace ActivityGaugeChart {
  export type AsObject = {
    activityGaugeRingsList: Array<ActivityGaugeRing.AsObject>,
  }
}

export class ActivityGaugeRing extends jspb.Message {
  getDataPointId(): string;
  setDataPointId(value: string): void;

  hasThreshold(): boolean;
  clearThreshold(): void;
  getThreshold(): Threshold | undefined;
  setThreshold(value?: Threshold): void;

  getLabel(): string;
  setLabel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityGaugeRing.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityGaugeRing): ActivityGaugeRing.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivityGaugeRing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityGaugeRing;
  static deserializeBinaryFromReader(message: ActivityGaugeRing, reader: jspb.BinaryReader): ActivityGaugeRing;
}

export namespace ActivityGaugeRing {
  export type AsObject = {
    dataPointId: string,
    threshold?: Threshold.AsObject,
    label: string,
  }
}

export class ArcChart extends jspb.Message {
  getDataPointId(): string;
  setDataPointId(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  hasThreshold(): boolean;
  clearThreshold(): void;
  getThreshold(): Threshold | undefined;
  setThreshold(value?: Threshold): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArcChart.AsObject;
  static toObject(includeInstance: boolean, msg: ArcChart): ArcChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArcChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArcChart;
  static deserializeBinaryFromReader(message: ArcChart, reader: jspb.BinaryReader): ArcChart;
}

export namespace ArcChart {
  export type AsObject = {
    dataPointId: string,
    label: string,
    threshold?: Threshold.AsObject,
  }
}

export class Threshold extends jspb.Message {
  hasStaticThreshold(): boolean;
  clearStaticThreshold(): void;
  getStaticThreshold(): number;
  setStaticThreshold(value: number): void;

  hasDataPointThreshold(): boolean;
  clearDataPointThreshold(): void;
  getDataPointThreshold(): string;
  setDataPointThreshold(value: string): void;

  getThresholdTypeCase(): Threshold.ThresholdTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Threshold.AsObject;
  static toObject(includeInstance: boolean, msg: Threshold): Threshold.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Threshold, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Threshold;
  static deserializeBinaryFromReader(message: Threshold, reader: jspb.BinaryReader): Threshold;
}

export namespace Threshold {
  export type AsObject = {
    staticThreshold: number,
    dataPointThreshold: string,
  }

  export enum ThresholdTypeCase {
    THRESHOLD_TYPE_NOT_SET = 0,
    STATIC_THRESHOLD = 3,
    DATA_POINT_THRESHOLD = 4,
  }
}

export class ScatterChart extends jspb.Message {
  getGroupingDataPointId(): string;
  setGroupingDataPointId(value: string): void;

  getXDataPointId(): string;
  setXDataPointId(value: string): void;

  getYDataPointId(): string;
  setYDataPointId(value: string): void;

  getXLabel(): string;
  setXLabel(value: string): void;

  getYLabel(): string;
  setYLabel(value: string): void;

  getLegend(): string;
  setLegend(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScatterChart.AsObject;
  static toObject(includeInstance: boolean, msg: ScatterChart): ScatterChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScatterChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScatterChart;
  static deserializeBinaryFromReader(message: ScatterChart, reader: jspb.BinaryReader): ScatterChart;
}

export namespace ScatterChart {
  export type AsObject = {
    groupingDataPointId: string,
    xDataPointId: string,
    yDataPointId: string,
    xLabel: string,
    yLabel: string,
    legend: string,
  }
}

export class TimeHistogramChart extends jspb.Message {
  getDataPointId(): string;
  setDataPointId(value: string): void;

  getTimeScope(): api_commons_ana_pb.TimeScopeMap[keyof api_commons_ana_pb.TimeScopeMap];
  setTimeScope(value: api_commons_ana_pb.TimeScopeMap[keyof api_commons_ana_pb.TimeScopeMap]): void;

  hasThreshold(): boolean;
  clearThreshold(): void;
  getThreshold(): Threshold | undefined;
  setThreshold(value?: Threshold): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeHistogramChart.AsObject;
  static toObject(includeInstance: boolean, msg: TimeHistogramChart): TimeHistogramChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeHistogramChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeHistogramChart;
  static deserializeBinaryFromReader(message: TimeHistogramChart, reader: jspb.BinaryReader): TimeHistogramChart;
}

export namespace TimeHistogramChart {
  export type AsObject = {
    dataPointId: string,
    timeScope: api_commons_ana_pb.TimeScopeMap[keyof api_commons_ana_pb.TimeScopeMap],
    threshold?: Threshold.AsObject,
  }
}

export class InfoPanelChart extends jspb.Message {
  clearDataValuesList(): void;
  getDataValuesList(): Array<InfoPanelDataValue>;
  setDataValuesList(value: Array<InfoPanelDataValue>): void;
  addDataValues(value?: InfoPanelDataValue, index?: number): InfoPanelDataValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoPanelChart.AsObject;
  static toObject(includeInstance: boolean, msg: InfoPanelChart): InfoPanelChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InfoPanelChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoPanelChart;
  static deserializeBinaryFromReader(message: InfoPanelChart, reader: jspb.BinaryReader): InfoPanelChart;
}

export namespace InfoPanelChart {
  export type AsObject = {
    dataValuesList: Array<InfoPanelDataValue.AsObject>,
  }
}

export class InfoPanelDataValue extends jspb.Message {
  getDataPointId(): string;
  setDataPointId(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoPanelDataValue.AsObject;
  static toObject(includeInstance: boolean, msg: InfoPanelDataValue): InfoPanelDataValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InfoPanelDataValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoPanelDataValue;
  static deserializeBinaryFromReader(message: InfoPanelDataValue, reader: jspb.BinaryReader): InfoPanelDataValue;
}

export namespace InfoPanelDataValue {
  export type AsObject = {
    dataPointId: string,
    label: string,
  }
}

export class TreeTableChart extends jspb.Message {
  clearDataValuesList(): void;
  getDataValuesList(): Array<TreeTableDataValue>;
  setDataValuesList(value: Array<TreeTableDataValue>): void;
  addDataValues(value?: TreeTableDataValue, index?: number): TreeTableDataValue;

  clearGroupingValuesList(): void;
  getGroupingValuesList(): Array<TreeTableGroupingValue>;
  setGroupingValuesList(value: Array<TreeTableGroupingValue>): void;
  addGroupingValues(value?: TreeTableGroupingValue, index?: number): TreeTableGroupingValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TreeTableChart.AsObject;
  static toObject(includeInstance: boolean, msg: TreeTableChart): TreeTableChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TreeTableChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TreeTableChart;
  static deserializeBinaryFromReader(message: TreeTableChart, reader: jspb.BinaryReader): TreeTableChart;
}

export namespace TreeTableChart {
  export type AsObject = {
    dataValuesList: Array<TreeTableDataValue.AsObject>,
    groupingValuesList: Array<TreeTableGroupingValue.AsObject>,
  }
}

export class TreeTableDataValue extends jspb.Message {
  getDataPointId(): string;
  setDataPointId(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TreeTableDataValue.AsObject;
  static toObject(includeInstance: boolean, msg: TreeTableDataValue): TreeTableDataValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TreeTableDataValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TreeTableDataValue;
  static deserializeBinaryFromReader(message: TreeTableDataValue, reader: jspb.BinaryReader): TreeTableDataValue;
}

export namespace TreeTableDataValue {
  export type AsObject = {
    dataPointId: string,
    label: string,
  }
}

export class TreeTableGroupingValue extends jspb.Message {
  getGroupingDataPointId(): string;
  setGroupingDataPointId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TreeTableGroupingValue.AsObject;
  static toObject(includeInstance: boolean, msg: TreeTableGroupingValue): TreeTableGroupingValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TreeTableGroupingValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TreeTableGroupingValue;
  static deserializeBinaryFromReader(message: TreeTableGroupingValue, reader: jspb.BinaryReader): TreeTableGroupingValue;
}

export namespace TreeTableGroupingValue {
  export type AsObject = {
    groupingDataPointId: string,
  }
}

export class RankedListChart extends jspb.Message {
  getFieldDataPointId(): string;
  setFieldDataPointId(value: string): void;

  getGroupingDataPointId(): string;
  setGroupingDataPointId(value: string): void;

  hasThreshold(): boolean;
  clearThreshold(): void;
  getThreshold(): Threshold | undefined;
  setThreshold(value?: Threshold): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RankedListChart.AsObject;
  static toObject(includeInstance: boolean, msg: RankedListChart): RankedListChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RankedListChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RankedListChart;
  static deserializeBinaryFromReader(message: RankedListChart, reader: jspb.BinaryReader): RankedListChart;
}

export namespace RankedListChart {
  export type AsObject = {
    fieldDataPointId: string,
    groupingDataPointId: string,
    threshold?: Threshold.AsObject,
  }
}

export class SpeedometerChart extends jspb.Message {
  getDataPointId(): string;
  setDataPointId(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  hasWarningThreshold(): boolean;
  clearWarningThreshold(): void;
  getWarningThreshold(): Threshold | undefined;
  setWarningThreshold(value?: Threshold): void;

  hasDangerThreshold(): boolean;
  clearDangerThreshold(): void;
  getDangerThreshold(): Threshold | undefined;
  setDangerThreshold(value?: Threshold): void;

  hasMaxThreshold(): boolean;
  clearMaxThreshold(): void;
  getMaxThreshold(): Threshold | undefined;
  setMaxThreshold(value?: Threshold): void;

  getSuffixLabel(): string;
  setSuffixLabel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeedometerChart.AsObject;
  static toObject(includeInstance: boolean, msg: SpeedometerChart): SpeedometerChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpeedometerChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeedometerChart;
  static deserializeBinaryFromReader(message: SpeedometerChart, reader: jspb.BinaryReader): SpeedometerChart;
}

export namespace SpeedometerChart {
  export type AsObject = {
    dataPointId: string,
    label: string,
    warningThreshold?: Threshold.AsObject,
    dangerThreshold?: Threshold.AsObject,
    maxThreshold?: Threshold.AsObject,
    suffixLabel: string,
  }
}

export class LineChart extends jspb.Message {
  getFieldDataPointId(): string;
  setFieldDataPointId(value: string): void;

  getGroupingDataPointId(): string;
  setGroupingDataPointId(value: string): void;

  getOrientation(): api_commons_ana_charts_pb.ChartOrientationMap[keyof api_commons_ana_charts_pb.ChartOrientationMap];
  setOrientation(value: api_commons_ana_charts_pb.ChartOrientationMap[keyof api_commons_ana_charts_pb.ChartOrientationMap]): void;

  hasThreshold(): boolean;
  clearThreshold(): void;
  getThreshold(): Threshold | undefined;
  setThreshold(value?: Threshold): void;

  getStep(): api_commons_ana_charts_pb.LineChartStepMap[keyof api_commons_ana_charts_pb.LineChartStepMap];
  setStep(value: api_commons_ana_charts_pb.LineChartStepMap[keyof api_commons_ana_charts_pb.LineChartStepMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LineChart.AsObject;
  static toObject(includeInstance: boolean, msg: LineChart): LineChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LineChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LineChart;
  static deserializeBinaryFromReader(message: LineChart, reader: jspb.BinaryReader): LineChart;
}

export namespace LineChart {
  export type AsObject = {
    fieldDataPointId: string,
    groupingDataPointId: string,
    orientation: api_commons_ana_charts_pb.ChartOrientationMap[keyof api_commons_ana_charts_pb.ChartOrientationMap],
    threshold?: Threshold.AsObject,
    step: api_commons_ana_charts_pb.LineChartStepMap[keyof api_commons_ana_charts_pb.LineChartStepMap],
  }
}

export class SplineChart extends jspb.Message {
  getFieldDataPointId(): string;
  setFieldDataPointId(value: string): void;

  getGroupingDataPointId(): string;
  setGroupingDataPointId(value: string): void;

  getOrientation(): api_commons_ana_charts_pb.ChartOrientationMap[keyof api_commons_ana_charts_pb.ChartOrientationMap];
  setOrientation(value: api_commons_ana_charts_pb.ChartOrientationMap[keyof api_commons_ana_charts_pb.ChartOrientationMap]): void;

  hasThreshold(): boolean;
  clearThreshold(): void;
  getThreshold(): Threshold | undefined;
  setThreshold(value?: Threshold): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SplineChart.AsObject;
  static toObject(includeInstance: boolean, msg: SplineChart): SplineChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SplineChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SplineChart;
  static deserializeBinaryFromReader(message: SplineChart, reader: jspb.BinaryReader): SplineChart;
}

export namespace SplineChart {
  export type AsObject = {
    fieldDataPointId: string,
    groupingDataPointId: string,
    orientation: api_commons_ana_charts_pb.ChartOrientationMap[keyof api_commons_ana_charts_pb.ChartOrientationMap],
    threshold?: Threshold.AsObject,
  }
}

export class AreaChart extends jspb.Message {
  getFieldDataPointId(): string;
  setFieldDataPointId(value: string): void;

  getGroupingDataPointId(): string;
  setGroupingDataPointId(value: string): void;

  getOrientation(): api_commons_ana_charts_pb.ChartOrientationMap[keyof api_commons_ana_charts_pb.ChartOrientationMap];
  setOrientation(value: api_commons_ana_charts_pb.ChartOrientationMap[keyof api_commons_ana_charts_pb.ChartOrientationMap]): void;

  hasThreshold(): boolean;
  clearThreshold(): void;
  getThreshold(): Threshold | undefined;
  setThreshold(value?: Threshold): void;

  getAreaType(): api_commons_ana_charts_pb.AreaChartChoiceMap[keyof api_commons_ana_charts_pb.AreaChartChoiceMap];
  setAreaType(value: api_commons_ana_charts_pb.AreaChartChoiceMap[keyof api_commons_ana_charts_pb.AreaChartChoiceMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AreaChart.AsObject;
  static toObject(includeInstance: boolean, msg: AreaChart): AreaChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AreaChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AreaChart;
  static deserializeBinaryFromReader(message: AreaChart, reader: jspb.BinaryReader): AreaChart;
}

export namespace AreaChart {
  export type AsObject = {
    fieldDataPointId: string,
    groupingDataPointId: string,
    orientation: api_commons_ana_charts_pb.ChartOrientationMap[keyof api_commons_ana_charts_pb.ChartOrientationMap],
    threshold?: Threshold.AsObject,
    areaType: api_commons_ana_charts_pb.AreaChartChoiceMap[keyof api_commons_ana_charts_pb.AreaChartChoiceMap],
  }
}

export class TableChart extends jspb.Message {
  clearDataValuesList(): void;
  getDataValuesList(): Array<TableDataValue>;
  setDataValuesList(value: Array<TableDataValue>): void;
  addDataValues(value?: TableDataValue, index?: number): TableDataValue;

  clearGroupingValuesList(): void;
  getGroupingValuesList(): Array<TableGroupingValue>;
  setGroupingValuesList(value: Array<TableGroupingValue>): void;
  addGroupingValues(value?: TableGroupingValue, index?: number): TableGroupingValue;

  clearOrderByValuesList(): void;
  getOrderByValuesList(): Array<TableOrderByValue>;
  setOrderByValuesList(value: Array<TableOrderByValue>): void;
  addOrderByValues(value?: TableOrderByValue, index?: number): TableOrderByValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableChart.AsObject;
  static toObject(includeInstance: boolean, msg: TableChart): TableChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableChart;
  static deserializeBinaryFromReader(message: TableChart, reader: jspb.BinaryReader): TableChart;
}

export namespace TableChart {
  export type AsObject = {
    dataValuesList: Array<TableDataValue.AsObject>,
    groupingValuesList: Array<TableGroupingValue.AsObject>,
    orderByValuesList: Array<TableOrderByValue.AsObject>,
  }
}

export class TableDataValue extends jspb.Message {
  getDataPointId(): string;
  setDataPointId(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableDataValue.AsObject;
  static toObject(includeInstance: boolean, msg: TableDataValue): TableDataValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableDataValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableDataValue;
  static deserializeBinaryFromReader(message: TableDataValue, reader: jspb.BinaryReader): TableDataValue;
}

export namespace TableDataValue {
  export type AsObject = {
    dataPointId: string,
    label: string,
  }
}

export class TableGroupingValue extends jspb.Message {
  getGroupingDataPointId(): string;
  setGroupingDataPointId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableGroupingValue.AsObject;
  static toObject(includeInstance: boolean, msg: TableGroupingValue): TableGroupingValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableGroupingValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableGroupingValue;
  static deserializeBinaryFromReader(message: TableGroupingValue, reader: jspb.BinaryReader): TableGroupingValue;
}

export namespace TableGroupingValue {
  export type AsObject = {
    groupingDataPointId: string,
  }
}

export class TableOrderByValue extends jspb.Message {
  getOrderBy(): string;
  setOrderBy(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableOrderByValue.AsObject;
  static toObject(includeInstance: boolean, msg: TableOrderByValue): TableOrderByValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableOrderByValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableOrderByValue;
  static deserializeBinaryFromReader(message: TableOrderByValue, reader: jspb.BinaryReader): TableOrderByValue;
}

export namespace TableOrderByValue {
  export type AsObject = {
    orderBy: string,
  }
}

export class BubbleChart extends jspb.Message {
  getGroupingDataPointId(): string;
  setGroupingDataPointId(value: string): void;

  getGroupingLabel(): string;
  setGroupingLabel(value: string): void;

  getXDataPointId(): string;
  setXDataPointId(value: string): void;

  getXLabel(): string;
  setXLabel(value: string): void;

  getYDataPointId(): string;
  setYDataPointId(value: string): void;

  getYLabel(): string;
  setYLabel(value: string): void;

  getZDataPointId(): string;
  setZDataPointId(value: string): void;

  getZLabel(): string;
  setZLabel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BubbleChart.AsObject;
  static toObject(includeInstance: boolean, msg: BubbleChart): BubbleChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BubbleChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BubbleChart;
  static deserializeBinaryFromReader(message: BubbleChart, reader: jspb.BinaryReader): BubbleChart;
}

export namespace BubbleChart {
  export type AsObject = {
    groupingDataPointId: string,
    groupingLabel: string,
    xDataPointId: string,
    xLabel: string,
    yDataPointId: string,
    yLabel: string,
    zDataPointId: string,
    zLabel: string,
  }
}

export class PackedBubbleChart extends jspb.Message {
  getFieldDataPointId(): string;
  setFieldDataPointId(value: string): void;

  getFieldLabel(): string;
  setFieldLabel(value: string): void;

  clearGroupingValuesList(): void;
  getGroupingValuesList(): Array<PackedBubbleGroupingValue>;
  setGroupingValuesList(value: Array<PackedBubbleGroupingValue>): void;
  addGroupingValues(value?: PackedBubbleGroupingValue, index?: number): PackedBubbleGroupingValue;

  getPackedChoice(): api_commons_ana_charts_pb.PackedBubbleChoiceMap[keyof api_commons_ana_charts_pb.PackedBubbleChoiceMap];
  setPackedChoice(value: api_commons_ana_charts_pb.PackedBubbleChoiceMap[keyof api_commons_ana_charts_pb.PackedBubbleChoiceMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PackedBubbleChart.AsObject;
  static toObject(includeInstance: boolean, msg: PackedBubbleChart): PackedBubbleChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PackedBubbleChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PackedBubbleChart;
  static deserializeBinaryFromReader(message: PackedBubbleChart, reader: jspb.BinaryReader): PackedBubbleChart;
}

export namespace PackedBubbleChart {
  export type AsObject = {
    fieldDataPointId: string,
    fieldLabel: string,
    groupingValuesList: Array<PackedBubbleGroupingValue.AsObject>,
    packedChoice: api_commons_ana_charts_pb.PackedBubbleChoiceMap[keyof api_commons_ana_charts_pb.PackedBubbleChoiceMap],
  }
}

export class PackedBubbleGroupingValue extends jspb.Message {
  getGroupingDataPointId(): string;
  setGroupingDataPointId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PackedBubbleGroupingValue.AsObject;
  static toObject(includeInstance: boolean, msg: PackedBubbleGroupingValue): PackedBubbleGroupingValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PackedBubbleGroupingValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PackedBubbleGroupingValue;
  static deserializeBinaryFromReader(message: PackedBubbleGroupingValue, reader: jspb.BinaryReader): PackedBubbleGroupingValue;
}

export namespace PackedBubbleGroupingValue {
  export type AsObject = {
    groupingDataPointId: string,
  }
}

export class SunburstChart extends jspb.Message {
  getFieldDataPointId(): string;
  setFieldDataPointId(value: string): void;

  clearGroupingValuesList(): void;
  getGroupingValuesList(): Array<SunburstGroupingValue>;
  setGroupingValuesList(value: Array<SunburstGroupingValue>): void;
  addGroupingValues(value?: SunburstGroupingValue, index?: number): SunburstGroupingValue;

  getCenterLabel(): string;
  setCenterLabel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SunburstChart.AsObject;
  static toObject(includeInstance: boolean, msg: SunburstChart): SunburstChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SunburstChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SunburstChart;
  static deserializeBinaryFromReader(message: SunburstChart, reader: jspb.BinaryReader): SunburstChart;
}

export namespace SunburstChart {
  export type AsObject = {
    fieldDataPointId: string,
    groupingValuesList: Array<SunburstGroupingValue.AsObject>,
    centerLabel: string,
  }
}

export class SunburstGroupingValue extends jspb.Message {
  getGroupingDataPointId(): string;
  setGroupingDataPointId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SunburstGroupingValue.AsObject;
  static toObject(includeInstance: boolean, msg: SunburstGroupingValue): SunburstGroupingValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SunburstGroupingValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SunburstGroupingValue;
  static deserializeBinaryFromReader(message: SunburstGroupingValue, reader: jspb.BinaryReader): SunburstGroupingValue;
}

export namespace SunburstGroupingValue {
  export type AsObject = {
    groupingDataPointId: string,
  }
}

export class CreateChartReq extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  hasChartDetails(): boolean;
  clearChartDetails(): void;
  getChartDetails(): ChartDetails | undefined;
  setChartDetails(value?: ChartDetails): void;

  getDisplayLabels(): api_commons_ana_charts_pb.ChartDisplayLabelsMap[keyof api_commons_ana_charts_pb.ChartDisplayLabelsMap];
  setDisplayLabels(value: api_commons_ana_charts_pb.ChartDisplayLabelsMap[keyof api_commons_ana_charts_pb.ChartDisplayLabelsMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChartReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChartReq): CreateChartReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateChartReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChartReq;
  static deserializeBinaryFromReader(message: CreateChartReq, reader: jspb.BinaryReader): CreateChartReq;
}

export namespace CreateChartReq {
  export type AsObject = {
    title: string,
    chartDetails?: ChartDetails.AsObject,
    displayLabels: api_commons_ana_charts_pb.ChartDisplayLabelsMap[keyof api_commons_ana_charts_pb.ChartDisplayLabelsMap],
  }
}

export class CreateChartRes extends jspb.Message {
  getChartId(): string;
  setChartId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChartRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChartRes): CreateChartRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateChartRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChartRes;
  static deserializeBinaryFromReader(message: CreateChartRes, reader: jspb.BinaryReader): CreateChartRes;
}

export namespace CreateChartRes {
  export type AsObject = {
    chartId: string,
  }
}

export class GetChartReq extends jspb.Message {
  getChartId(): string;
  setChartId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChartReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetChartReq): GetChartReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetChartReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChartReq;
  static deserializeBinaryFromReader(message: GetChartReq, reader: jspb.BinaryReader): GetChartReq;
}

export namespace GetChartReq {
  export type AsObject = {
    chartId: string,
  }
}

export class DeleteChartReq extends jspb.Message {
  getChartId(): string;
  setChartId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteChartReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteChartReq): DeleteChartReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteChartReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteChartReq;
  static deserializeBinaryFromReader(message: DeleteChartReq, reader: jspb.BinaryReader): DeleteChartReq;
}

export namespace DeleteChartReq {
  export type AsObject = {
    chartId: string,
  }
}

export class DeleteChartRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteChartRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteChartRes): DeleteChartRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteChartRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteChartRes;
  static deserializeBinaryFromReader(message: DeleteChartRes, reader: jspb.BinaryReader): DeleteChartRes;
}

export namespace DeleteChartRes {
  export type AsObject = {
  }
}

export class DashPage extends jspb.Message {
  hasDashboard(): boolean;
  clearDashboard(): void;
  getDashboard(): DashPageDashboard | undefined;
  setDashboard(value?: DashPageDashboard): void;

  hasVisualizationLegacy(): boolean;
  clearVisualizationLegacy(): void;
  getVisualizationLegacy(): DashPageVisualizationLegacy | undefined;
  setVisualizationLegacy(value?: DashPageVisualizationLegacy): void;

  hasChart(): boolean;
  clearChart(): void;
  getChart(): DashPageChart | undefined;
  setChart(value?: DashPageChart): void;

  getDashPageTypeCase(): DashPage.DashPageTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashPage.AsObject;
  static toObject(includeInstance: boolean, msg: DashPage): DashPage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashPage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashPage;
  static deserializeBinaryFromReader(message: DashPage, reader: jspb.BinaryReader): DashPage;
}

export namespace DashPage {
  export type AsObject = {
    dashboard?: DashPageDashboard.AsObject,
    visualizationLegacy?: DashPageVisualizationLegacy.AsObject,
    chart?: DashPageChart.AsObject,
  }

  export enum DashPageTypeCase {
    DASH_PAGE_TYPE_NOT_SET = 0,
    DASHBOARD = 1,
    VISUALIZATION_LEGACY = 2,
    CHART = 3,
  }
}

export class DashPageDashboard extends jspb.Message {
  getDashboardId(): string;
  setDashboardId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getRootId(): string;
  setRootId(value: string): void;

  getTcnStandard(): boolean;
  setTcnStandard(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashPageDashboard.AsObject;
  static toObject(includeInstance: boolean, msg: DashPageDashboard): DashPageDashboard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashPageDashboard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashPageDashboard;
  static deserializeBinaryFromReader(message: DashPageDashboard, reader: jspb.BinaryReader): DashPageDashboard;
}

export namespace DashPageDashboard {
  export type AsObject = {
    dashboardId: string,
    title: string,
    rootId: string,
    tcnStandard: boolean,
  }
}

export class DashPageVisualizationLegacy extends jspb.Message {
  getVisualizationId(): string;
  setVisualizationId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getRootId(): string;
  setRootId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashPageVisualizationLegacy.AsObject;
  static toObject(includeInstance: boolean, msg: DashPageVisualizationLegacy): DashPageVisualizationLegacy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashPageVisualizationLegacy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashPageVisualizationLegacy;
  static deserializeBinaryFromReader(message: DashPageVisualizationLegacy, reader: jspb.BinaryReader): DashPageVisualizationLegacy;
}

export namespace DashPageVisualizationLegacy {
  export type AsObject = {
    visualizationId: string,
    title: string,
    rootId: string,
  }
}

export class DashPageChart extends jspb.Message {
  getChartId(): string;
  setChartId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getRootId(): string;
  setRootId(value: string): void;

  getTcnStandard(): boolean;
  setTcnStandard(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashPageChart.AsObject;
  static toObject(includeInstance: boolean, msg: DashPageChart): DashPageChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashPageChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashPageChart;
  static deserializeBinaryFromReader(message: DashPageChart, reader: jspb.BinaryReader): DashPageChart;
}

export namespace DashPageChart {
  export type AsObject = {
    chartId: string,
    title: string,
    rootId: string,
    tcnStandard: boolean,
  }
}

export class GetAccessibleDashPagesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccessibleDashPagesReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccessibleDashPagesReq): GetAccessibleDashPagesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccessibleDashPagesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccessibleDashPagesReq;
  static deserializeBinaryFromReader(message: GetAccessibleDashPagesReq, reader: jspb.BinaryReader): GetAccessibleDashPagesReq;
}

export namespace GetAccessibleDashPagesReq {
  export type AsObject = {
  }
}

export class GetAccessibleDashPagesRes extends jspb.Message {
  clearDashPagesList(): void;
  getDashPagesList(): Array<DashPage>;
  setDashPagesList(value: Array<DashPage>): void;
  addDashPages(value?: DashPage, index?: number): DashPage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccessibleDashPagesRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccessibleDashPagesRes): GetAccessibleDashPagesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccessibleDashPagesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccessibleDashPagesRes;
  static deserializeBinaryFromReader(message: GetAccessibleDashPagesRes, reader: jspb.BinaryReader): GetAccessibleDashPagesRes;
}

export namespace GetAccessibleDashPagesRes {
  export type AsObject = {
    dashPagesList: Array<DashPage.AsObject>,
  }
}

export class RecommendedDashPage extends jspb.Message {
  hasDashboard(): boolean;
  clearDashboard(): void;
  getDashboard(): RecommendedDashboard | undefined;
  setDashboard(value?: RecommendedDashboard): void;

  hasVisualizationLegacy(): boolean;
  clearVisualizationLegacy(): void;
  getVisualizationLegacy(): RecommendedVisualizationLegacy | undefined;
  setVisualizationLegacy(value?: RecommendedVisualizationLegacy): void;

  hasChart(): boolean;
  clearChart(): void;
  getChart(): RecommendedChart | undefined;
  setChart(value?: RecommendedChart): void;

  getDashPageTypeCase(): RecommendedDashPage.DashPageTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecommendedDashPage.AsObject;
  static toObject(includeInstance: boolean, msg: RecommendedDashPage): RecommendedDashPage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecommendedDashPage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecommendedDashPage;
  static deserializeBinaryFromReader(message: RecommendedDashPage, reader: jspb.BinaryReader): RecommendedDashPage;
}

export namespace RecommendedDashPage {
  export type AsObject = {
    dashboard?: RecommendedDashboard.AsObject,
    visualizationLegacy?: RecommendedVisualizationLegacy.AsObject,
    chart?: RecommendedChart.AsObject,
  }

  export enum DashPageTypeCase {
    DASH_PAGE_TYPE_NOT_SET = 0,
    DASHBOARD = 1,
    VISUALIZATION_LEGACY = 2,
    CHART = 3,
  }
}

export class RecommendedDashboard extends jspb.Message {
  getDashboardId(): string;
  setDashboardId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getRootId(): string;
  setRootId(value: string): void;

  getTcnStandard(): boolean;
  setTcnStandard(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecommendedDashboard.AsObject;
  static toObject(includeInstance: boolean, msg: RecommendedDashboard): RecommendedDashboard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecommendedDashboard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecommendedDashboard;
  static deserializeBinaryFromReader(message: RecommendedDashboard, reader: jspb.BinaryReader): RecommendedDashboard;
}

export namespace RecommendedDashboard {
  export type AsObject = {
    dashboardId: string,
    title: string,
    rootId: string,
    tcnStandard: boolean,
  }
}

export class RecommendedVisualizationLegacy extends jspb.Message {
  getVisualizationId(): string;
  setVisualizationId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getRootId(): string;
  setRootId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecommendedVisualizationLegacy.AsObject;
  static toObject(includeInstance: boolean, msg: RecommendedVisualizationLegacy): RecommendedVisualizationLegacy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecommendedVisualizationLegacy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecommendedVisualizationLegacy;
  static deserializeBinaryFromReader(message: RecommendedVisualizationLegacy, reader: jspb.BinaryReader): RecommendedVisualizationLegacy;
}

export namespace RecommendedVisualizationLegacy {
  export type AsObject = {
    visualizationId: string,
    title: string,
    rootId: string,
  }
}

export class RecommendedChart extends jspb.Message {
  getChartId(): string;
  setChartId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getRootId(): string;
  setRootId(value: string): void;

  getTcnStandard(): boolean;
  setTcnStandard(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecommendedChart.AsObject;
  static toObject(includeInstance: boolean, msg: RecommendedChart): RecommendedChart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecommendedChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecommendedChart;
  static deserializeBinaryFromReader(message: RecommendedChart, reader: jspb.BinaryReader): RecommendedChart;
}

export namespace RecommendedChart {
  export type AsObject = {
    chartId: string,
    title: string,
    rootId: string,
    tcnStandard: boolean,
  }
}

export class RecommendedDashPageReq extends jspb.Message {
  hasDashboard(): boolean;
  clearDashboard(): void;
  getDashboard(): RecommendedDashboardReq | undefined;
  setDashboard(value?: RecommendedDashboardReq): void;

  hasVisualizationLegacy(): boolean;
  clearVisualizationLegacy(): void;
  getVisualizationLegacy(): RecommendedVisualizationLegacyReq | undefined;
  setVisualizationLegacy(value?: RecommendedVisualizationLegacyReq): void;

  hasChart(): boolean;
  clearChart(): void;
  getChart(): RecommendedChartReq | undefined;
  setChart(value?: RecommendedChartReq): void;

  getDashPageTypeCase(): RecommendedDashPageReq.DashPageTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecommendedDashPageReq.AsObject;
  static toObject(includeInstance: boolean, msg: RecommendedDashPageReq): RecommendedDashPageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecommendedDashPageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecommendedDashPageReq;
  static deserializeBinaryFromReader(message: RecommendedDashPageReq, reader: jspb.BinaryReader): RecommendedDashPageReq;
}

export namespace RecommendedDashPageReq {
  export type AsObject = {
    dashboard?: RecommendedDashboardReq.AsObject,
    visualizationLegacy?: RecommendedVisualizationLegacyReq.AsObject,
    chart?: RecommendedChartReq.AsObject,
  }

  export enum DashPageTypeCase {
    DASH_PAGE_TYPE_NOT_SET = 0,
    DASHBOARD = 1,
    VISUALIZATION_LEGACY = 2,
    CHART = 3,
  }
}

export class RecommendedDashboardReq extends jspb.Message {
  getDashboardId(): string;
  setDashboardId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecommendedDashboardReq.AsObject;
  static toObject(includeInstance: boolean, msg: RecommendedDashboardReq): RecommendedDashboardReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecommendedDashboardReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecommendedDashboardReq;
  static deserializeBinaryFromReader(message: RecommendedDashboardReq, reader: jspb.BinaryReader): RecommendedDashboardReq;
}

export namespace RecommendedDashboardReq {
  export type AsObject = {
    dashboardId: string,
  }
}

export class RecommendedVisualizationLegacyReq extends jspb.Message {
  getVisualizationId(): string;
  setVisualizationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecommendedVisualizationLegacyReq.AsObject;
  static toObject(includeInstance: boolean, msg: RecommendedVisualizationLegacyReq): RecommendedVisualizationLegacyReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecommendedVisualizationLegacyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecommendedVisualizationLegacyReq;
  static deserializeBinaryFromReader(message: RecommendedVisualizationLegacyReq, reader: jspb.BinaryReader): RecommendedVisualizationLegacyReq;
}

export namespace RecommendedVisualizationLegacyReq {
  export type AsObject = {
    visualizationId: string,
  }
}

export class RecommendedChartReq extends jspb.Message {
  getChartId(): string;
  setChartId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecommendedChartReq.AsObject;
  static toObject(includeInstance: boolean, msg: RecommendedChartReq): RecommendedChartReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecommendedChartReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecommendedChartReq;
  static deserializeBinaryFromReader(message: RecommendedChartReq, reader: jspb.BinaryReader): RecommendedChartReq;
}

export namespace RecommendedChartReq {
  export type AsObject = {
    chartId: string,
  }
}

export class GetRecommendedDashPagesHomeReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecommendedDashPagesHomeReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecommendedDashPagesHomeReq): GetRecommendedDashPagesHomeReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRecommendedDashPagesHomeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecommendedDashPagesHomeReq;
  static deserializeBinaryFromReader(message: GetRecommendedDashPagesHomeReq, reader: jspb.BinaryReader): GetRecommendedDashPagesHomeReq;
}

export namespace GetRecommendedDashPagesHomeReq {
  export type AsObject = {
  }
}

export class GetRecommendedDashPagesReq extends jspb.Message {
  hasSourceDashPage(): boolean;
  clearSourceDashPage(): void;
  getSourceDashPage(): RecommendedDashPageReq | undefined;
  setSourceDashPage(value?: RecommendedDashPageReq): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecommendedDashPagesReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecommendedDashPagesReq): GetRecommendedDashPagesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRecommendedDashPagesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecommendedDashPagesReq;
  static deserializeBinaryFromReader(message: GetRecommendedDashPagesReq, reader: jspb.BinaryReader): GetRecommendedDashPagesReq;
}

export namespace GetRecommendedDashPagesReq {
  export type AsObject = {
    sourceDashPage?: RecommendedDashPageReq.AsObject,
  }
}

export class GetRecommendedDashPagesRes extends jspb.Message {
  clearRecommendedDashPagesList(): void;
  getRecommendedDashPagesList(): Array<RecommendedDashPage>;
  setRecommendedDashPagesList(value: Array<RecommendedDashPage>): void;
  addRecommendedDashPages(value?: RecommendedDashPage, index?: number): RecommendedDashPage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecommendedDashPagesRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecommendedDashPagesRes): GetRecommendedDashPagesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRecommendedDashPagesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecommendedDashPagesRes;
  static deserializeBinaryFromReader(message: GetRecommendedDashPagesRes, reader: jspb.BinaryReader): GetRecommendedDashPagesRes;
}

export namespace GetRecommendedDashPagesRes {
  export type AsObject = {
    recommendedDashPagesList: Array<RecommendedDashPage.AsObject>,
  }
}

export class DashPageSelectEventReq extends jspb.Message {
  hasSelectionDashPage(): boolean;
  clearSelectionDashPage(): void;
  getSelectionDashPage(): RecommendedDashPageReq | undefined;
  setSelectionDashPage(value?: RecommendedDashPageReq): void;

  hasSourceDashPage(): boolean;
  clearSourceDashPage(): void;
  getSourceDashPage(): RecommendedDashPageReq | undefined;
  setSourceDashPage(value?: RecommendedDashPageReq): void;

  getFromHome(): boolean;
  setFromHome(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashPageSelectEventReq.AsObject;
  static toObject(includeInstance: boolean, msg: DashPageSelectEventReq): DashPageSelectEventReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashPageSelectEventReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashPageSelectEventReq;
  static deserializeBinaryFromReader(message: DashPageSelectEventReq, reader: jspb.BinaryReader): DashPageSelectEventReq;
}

export namespace DashPageSelectEventReq {
  export type AsObject = {
    selectionDashPage?: RecommendedDashPageReq.AsObject,
    sourceDashPage?: RecommendedDashPageReq.AsObject,
    fromHome: boolean,
  }
}

export class DashPageSelectEventRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashPageSelectEventRes.AsObject;
  static toObject(includeInstance: boolean, msg: DashPageSelectEventRes): DashPageSelectEventRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashPageSelectEventRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashPageSelectEventRes;
  static deserializeBinaryFromReader(message: DashPageSelectEventRes, reader: jspb.BinaryReader): DashPageSelectEventRes;
}

export namespace DashPageSelectEventRes {
  export type AsObject = {
  }
}

export class VisualizationEventRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VisualizationEventRes.AsObject;
  static toObject(includeInstance: boolean, msg: VisualizationEventRes): VisualizationEventRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VisualizationEventRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VisualizationEventRes;
  static deserializeBinaryFromReader(message: VisualizationEventRes, reader: jspb.BinaryReader): VisualizationEventRes;
}

export namespace VisualizationEventRes {
  export type AsObject = {
  }
}

export class GetRecommendedTimeFiltersReq extends jspb.Message {
  getDashPageId(): string;
  setDashPageId(value: string): void;

  hasDashPageType(): boolean;
  clearDashPageType(): void;
  getDashPageType(): RecommendedDashPageReq | undefined;
  setDashPageType(value?: RecommendedDashPageReq): void;

  getCurrentFilter(): string;
  setCurrentFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecommendedTimeFiltersReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecommendedTimeFiltersReq): GetRecommendedTimeFiltersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRecommendedTimeFiltersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecommendedTimeFiltersReq;
  static deserializeBinaryFromReader(message: GetRecommendedTimeFiltersReq, reader: jspb.BinaryReader): GetRecommendedTimeFiltersReq;
}

export namespace GetRecommendedTimeFiltersReq {
  export type AsObject = {
    dashPageId: string,
    dashPageType?: RecommendedDashPageReq.AsObject,
    currentFilter: string,
  }
}

export class GetRecommendedTimeFiltersRes extends jspb.Message {
  clearFiltersList(): void;
  getFiltersList(): Array<string>;
  setFiltersList(value: Array<string>): void;
  addFilters(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecommendedTimeFiltersRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecommendedTimeFiltersRes): GetRecommendedTimeFiltersRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRecommendedTimeFiltersRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecommendedTimeFiltersRes;
  static deserializeBinaryFromReader(message: GetRecommendedTimeFiltersRes, reader: jspb.BinaryReader): GetRecommendedTimeFiltersRes;
}

export namespace GetRecommendedTimeFiltersRes {
  export type AsObject = {
    filtersList: Array<string>,
  }
}

export class TimeFilterEventReq extends jspb.Message {
  getTimeFilterType(): api_commons_ana_pb.TimeFilterTypeMap[keyof api_commons_ana_pb.TimeFilterTypeMap];
  setTimeFilterType(value: api_commons_ana_pb.TimeFilterTypeMap[keyof api_commons_ana_pb.TimeFilterTypeMap]): void;

  getTimeFilterName(): string;
  setTimeFilterName(value: string): void;

  hasDashPageType(): boolean;
  clearDashPageType(): void;
  getDashPageType(): RecommendedDashPageReq | undefined;
  setDashPageType(value?: RecommendedDashPageReq): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeFilterEventReq.AsObject;
  static toObject(includeInstance: boolean, msg: TimeFilterEventReq): TimeFilterEventReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeFilterEventReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeFilterEventReq;
  static deserializeBinaryFromReader(message: TimeFilterEventReq, reader: jspb.BinaryReader): TimeFilterEventReq;
}

export namespace TimeFilterEventReq {
  export type AsObject = {
    timeFilterType: api_commons_ana_pb.TimeFilterTypeMap[keyof api_commons_ana_pb.TimeFilterTypeMap],
    timeFilterName: string,
    dashPageType?: RecommendedDashPageReq.AsObject,
  }
}

export class TimeFilterEventRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeFilterEventRes.AsObject;
  static toObject(includeInstance: boolean, msg: TimeFilterEventRes): TimeFilterEventRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeFilterEventRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeFilterEventRes;
  static deserializeBinaryFromReader(message: TimeFilterEventRes, reader: jspb.BinaryReader): TimeFilterEventRes;
}

export namespace TimeFilterEventRes {
  export type AsObject = {
  }
}

export class ExportJob extends jspb.Message {
  getExportJobId(): string;
  setExportJobId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  hasExportDelivery(): boolean;
  clearExportDelivery(): void;
  getExportDelivery(): ExportDelivery | undefined;
  setExportDelivery(value?: ExportDelivery): void;

  hasExportOptions(): boolean;
  clearExportOptions(): void;
  getExportOptions(): ExportOptions | undefined;
  setExportOptions(value?: ExportOptions): void;

  hasExportSchedule(): boolean;
  clearExportSchedule(): void;
  getExportSchedule(): ExportSchedule | undefined;
  setExportSchedule(value?: ExportSchedule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportJob.AsObject;
  static toObject(includeInstance: boolean, msg: ExportJob): ExportJob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportJob;
  static deserializeBinaryFromReader(message: ExportJob, reader: jspb.BinaryReader): ExportJob;
}

export namespace ExportJob {
  export type AsObject = {
    exportJobId: string,
    title: string,
    exportDelivery?: ExportDelivery.AsObject,
    exportOptions?: ExportOptions.AsObject,
    exportSchedule?: ExportSchedule.AsObject,
  }
}

export class ExportSchedule extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  hasCampaignComplete(): boolean;
  clearCampaignComplete(): void;
  getCampaignComplete(): CampaignCompleteSchedule | undefined;
  setCampaignComplete(value?: CampaignCompleteSchedule): void;

  hasEndOfDay(): boolean;
  clearEndOfDay(): void;
  getEndOfDay(): EndOfDaySchedule | undefined;
  setEndOfDay(value?: EndOfDaySchedule): void;

  getScheduleTypeCase(): ExportSchedule.ScheduleTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportSchedule.AsObject;
  static toObject(includeInstance: boolean, msg: ExportSchedule): ExportSchedule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportSchedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportSchedule;
  static deserializeBinaryFromReader(message: ExportSchedule, reader: jspb.BinaryReader): ExportSchedule;
}

export namespace ExportSchedule {
  export type AsObject = {
    enabled: boolean,
    campaignComplete?: CampaignCompleteSchedule.AsObject,
    endOfDay?: EndOfDaySchedule.AsObject,
  }

  export enum ScheduleTypeCase {
    SCHEDULE_TYPE_NOT_SET = 0,
    CAMPAIGN_COMPLETE = 100,
    END_OF_DAY = 101,
  }
}

export class CampaignCompleteSchedule extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignCompleteSchedule.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignCompleteSchedule): CampaignCompleteSchedule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignCompleteSchedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignCompleteSchedule;
  static deserializeBinaryFromReader(message: CampaignCompleteSchedule, reader: jspb.BinaryReader): CampaignCompleteSchedule;
}

export namespace CampaignCompleteSchedule {
  export type AsObject = {
  }
}

export class EndOfDaySchedule extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndOfDaySchedule.AsObject;
  static toObject(includeInstance: boolean, msg: EndOfDaySchedule): EndOfDaySchedule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndOfDaySchedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndOfDaySchedule;
  static deserializeBinaryFromReader(message: EndOfDaySchedule, reader: jspb.BinaryReader): EndOfDaySchedule;
}

export namespace EndOfDaySchedule {
  export type AsObject = {
  }
}

export class ExportOptions extends jspb.Message {
  getZip(): boolean;
  setZip(value: boolean): void;

  hasCsvOptions(): boolean;
  clearCsvOptions(): void;
  getCsvOptions(): CsvOptions | undefined;
  setCsvOptions(value?: CsvOptions): void;

  getExportTypeCase(): ExportOptions.ExportTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportOptions.AsObject;
  static toObject(includeInstance: boolean, msg: ExportOptions): ExportOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportOptions;
  static deserializeBinaryFromReader(message: ExportOptions, reader: jspb.BinaryReader): ExportOptions;
}

export namespace ExportOptions {
  export type AsObject = {
    zip: boolean,
    csvOptions?: CsvOptions.AsObject,
  }

  export enum ExportTypeCase {
    EXPORT_TYPE_NOT_SET = 0,
    CSV_OPTIONS = 2,
  }
}

export class CsvOptions extends jspb.Message {
  getFixedWidth(): boolean;
  setFixedWidth(value: boolean): void;

  getCsvQuoteType(): api_commons_ana_pb.CsvQuoteTypeMap[keyof api_commons_ana_pb.CsvQuoteTypeMap];
  setCsvQuoteType(value: api_commons_ana_pb.CsvQuoteTypeMap[keyof api_commons_ana_pb.CsvQuoteTypeMap]): void;

  getIncludeHeaders(): boolean;
  setIncludeHeaders(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsvOptions.AsObject;
  static toObject(includeInstance: boolean, msg: CsvOptions): CsvOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsvOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsvOptions;
  static deserializeBinaryFromReader(message: CsvOptions, reader: jspb.BinaryReader): CsvOptions;
}

export namespace CsvOptions {
  export type AsObject = {
    fixedWidth: boolean,
    csvQuoteType: api_commons_ana_pb.CsvQuoteTypeMap[keyof api_commons_ana_pb.CsvQuoteTypeMap],
    includeHeaders: boolean,
  }
}

export class ExportDelivery extends jspb.Message {
  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): EmailDelivery | undefined;
  setEmail(value?: EmailDelivery): void;

  hasSftp(): boolean;
  clearSftp(): void;
  getSftp(): SftpDelivery | undefined;
  setSftp(value?: SftpDelivery): void;

  hasHttps(): boolean;
  clearHttps(): void;
  getHttps(): HttpsDelivery | undefined;
  setHttps(value?: HttpsDelivery): void;

  clearFailureEmailAddresesList(): void;
  getFailureEmailAddresesList(): Array<string>;
  setFailureEmailAddresesList(value: Array<string>): void;
  addFailureEmailAddreses(value: string, index?: number): string;

  getDeliveryTypeCase(): ExportDelivery.DeliveryTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportDelivery.AsObject;
  static toObject(includeInstance: boolean, msg: ExportDelivery): ExportDelivery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportDelivery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportDelivery;
  static deserializeBinaryFromReader(message: ExportDelivery, reader: jspb.BinaryReader): ExportDelivery;
}

export namespace ExportDelivery {
  export type AsObject = {
    email?: EmailDelivery.AsObject,
    sftp?: SftpDelivery.AsObject,
    https?: HttpsDelivery.AsObject,
    failureEmailAddresesList: Array<string>,
  }

  export enum DeliveryTypeCase {
    DELIVERY_TYPE_NOT_SET = 0,
    EMAIL = 1,
    SFTP = 2,
    HTTPS = 3,
  }
}

export class HttpsDelivery extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getPostParameter(): string;
  setPostParameter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HttpsDelivery.AsObject;
  static toObject(includeInstance: boolean, msg: HttpsDelivery): HttpsDelivery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HttpsDelivery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HttpsDelivery;
  static deserializeBinaryFromReader(message: HttpsDelivery, reader: jspb.BinaryReader): HttpsDelivery;
}

export namespace HttpsDelivery {
  export type AsObject = {
    url: string,
    postParameter: string,
  }
}

export class SftpDelivery extends jspb.Message {
  hasPassword(): boolean;
  clearPassword(): void;
  getPassword(): string;
  setPassword(value: string): void;

  hasPrivateKey(): boolean;
  clearPrivateKey(): void;
  getPrivateKey(): string;
  setPrivateKey(value: string): void;

  getUserName(): string;
  setUserName(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getAuthTypeCase(): SftpDelivery.AuthTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SftpDelivery.AsObject;
  static toObject(includeInstance: boolean, msg: SftpDelivery): SftpDelivery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SftpDelivery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SftpDelivery;
  static deserializeBinaryFromReader(message: SftpDelivery, reader: jspb.BinaryReader): SftpDelivery;
}

export namespace SftpDelivery {
  export type AsObject = {
    password: string,
    privateKey: string,
    userName: string,
    url: string,
    path: string,
  }

  export enum AuthTypeCase {
    AUTH_TYPE_NOT_SET = 0,
    PASSWORD = 1,
    PRIVATE_KEY = 2,
  }
}

export class EmailDelivery extends jspb.Message {
  clearAddressesList(): void;
  getAddressesList(): Array<string>;
  setAddressesList(value: Array<string>): void;
  addAddresses(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailDelivery.AsObject;
  static toObject(includeInstance: boolean, msg: EmailDelivery): EmailDelivery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailDelivery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailDelivery;
  static deserializeBinaryFromReader(message: EmailDelivery, reader: jspb.BinaryReader): EmailDelivery;
}

export namespace EmailDelivery {
  export type AsObject = {
    addressesList: Array<string>,
  }
}

export class DataSelection extends jspb.Message {
  hasChartId(): boolean;
  clearChartId(): void;
  getChartId(): string;
  setChartId(value: string): void;

  hasCustom(): boolean;
  clearCustom(): void;
  getCustom(): api_commons_ana_pb.CustomDataSelecitonMap[keyof api_commons_ana_pb.CustomDataSelecitonMap];
  setCustom(value: api_commons_ana_pb.CustomDataSelecitonMap[keyof api_commons_ana_pb.CustomDataSelecitonMap]): void;

  hasTableDataPoints(): boolean;
  clearTableDataPoints(): void;
  getTableDataPoints(): TableDataPoints | undefined;
  setTableDataPoints(value?: TableDataPoints): void;

  clearFilterIdsList(): void;
  getFilterIdsList(): Array<string>;
  setFilterIdsList(value: Array<string>): void;
  addFilterIds(value: string, index?: number): string;

  getDataSelectionTypeCase(): DataSelection.DataSelectionTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSelection.AsObject;
  static toObject(includeInstance: boolean, msg: DataSelection): DataSelection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataSelection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSelection;
  static deserializeBinaryFromReader(message: DataSelection, reader: jspb.BinaryReader): DataSelection;
}

export namespace DataSelection {
  export type AsObject = {
    chartId: string,
    custom: api_commons_ana_pb.CustomDataSelecitonMap[keyof api_commons_ana_pb.CustomDataSelecitonMap],
    tableDataPoints?: TableDataPoints.AsObject,
    filterIdsList: Array<string>,
  }

  export enum DataSelectionTypeCase {
    DATA_SELECTION_TYPE_NOT_SET = 0,
    CHART_ID = 1,
    CUSTOM = 2,
    TABLE_DATA_POINTS = 3,
  }
}

export class TableDataPoints extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  clearDataValuesList(): void;
  getDataValuesList(): Array<ExporterTableDataValue>;
  setDataValuesList(value: Array<ExporterTableDataValue>): void;
  addDataValues(value?: ExporterTableDataValue, index?: number): ExporterTableDataValue;

  clearGroupingDataPointIdsList(): void;
  getGroupingDataPointIdsList(): Array<string>;
  setGroupingDataPointIdsList(value: Array<string>): void;
  addGroupingDataPointIds(value: string, index?: number): string;

  clearOrderByList(): void;
  getOrderByList(): Array<string>;
  setOrderByList(value: Array<string>): void;
  addOrderBy(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableDataPoints.AsObject;
  static toObject(includeInstance: boolean, msg: TableDataPoints): TableDataPoints.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableDataPoints, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableDataPoints;
  static deserializeBinaryFromReader(message: TableDataPoints, reader: jspb.BinaryReader): TableDataPoints;
}

export namespace TableDataPoints {
  export type AsObject = {
    title: string,
    dataValuesList: Array<ExporterTableDataValue.AsObject>,
    groupingDataPointIdsList: Array<string>,
    orderByList: Array<string>,
  }
}

export class ExporterTableDataValue extends jspb.Message {
  getDataPointId(): string;
  setDataPointId(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExporterTableDataValue.AsObject;
  static toObject(includeInstance: boolean, msg: ExporterTableDataValue): ExporterTableDataValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExporterTableDataValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExporterTableDataValue;
  static deserializeBinaryFromReader(message: ExporterTableDataValue, reader: jspb.BinaryReader): ExporterTableDataValue;
}

export namespace ExporterTableDataValue {
  export type AsObject = {
    dataPointId: string,
    label: string,
  }
}

export class CreateExportJobReq extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  hasDataSelection(): boolean;
  clearDataSelection(): void;
  getDataSelection(): DataSelection | undefined;
  setDataSelection(value?: DataSelection): void;

  hasExportDelivery(): boolean;
  clearExportDelivery(): void;
  getExportDelivery(): ExportDelivery | undefined;
  setExportDelivery(value?: ExportDelivery): void;

  hasExportOptions(): boolean;
  clearExportOptions(): void;
  getExportOptions(): ExportOptions | undefined;
  setExportOptions(value?: ExportOptions): void;

  hasExportSchedule(): boolean;
  clearExportSchedule(): void;
  getExportSchedule(): ExportSchedule | undefined;
  setExportSchedule(value?: ExportSchedule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateExportJobReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateExportJobReq): CreateExportJobReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateExportJobReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateExportJobReq;
  static deserializeBinaryFromReader(message: CreateExportJobReq, reader: jspb.BinaryReader): CreateExportJobReq;
}

export namespace CreateExportJobReq {
  export type AsObject = {
    title: string,
    dataSelection?: DataSelection.AsObject,
    exportDelivery?: ExportDelivery.AsObject,
    exportOptions?: ExportOptions.AsObject,
    exportSchedule?: ExportSchedule.AsObject,
  }
}

export class CreateExportJobRes extends jspb.Message {
  getExportJobId(): string;
  setExportJobId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateExportJobRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateExportJobRes): CreateExportJobRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateExportJobRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateExportJobRes;
  static deserializeBinaryFromReader(message: CreateExportJobRes, reader: jspb.BinaryReader): CreateExportJobRes;
}

export namespace CreateExportJobRes {
  export type AsObject = {
    exportJobId: string,
  }
}

export class GetExportJobsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetExportJobsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetExportJobsReq): GetExportJobsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetExportJobsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetExportJobsReq;
  static deserializeBinaryFromReader(message: GetExportJobsReq, reader: jspb.BinaryReader): GetExportJobsReq;
}

export namespace GetExportJobsReq {
  export type AsObject = {
  }
}

export class GetExportJobsRes extends jspb.Message {
  clearExportJobsList(): void;
  getExportJobsList(): Array<ExportJob>;
  setExportJobsList(value: Array<ExportJob>): void;
  addExportJobs(value?: ExportJob, index?: number): ExportJob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetExportJobsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetExportJobsRes): GetExportJobsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetExportJobsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetExportJobsRes;
  static deserializeBinaryFromReader(message: GetExportJobsRes, reader: jspb.BinaryReader): GetExportJobsRes;
}

export namespace GetExportJobsRes {
  export type AsObject = {
    exportJobsList: Array<ExportJob.AsObject>,
  }
}

export class SendExportReq extends jspb.Message {
  getExportJobId(): string;
  setExportJobId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendExportReq.AsObject;
  static toObject(includeInstance: boolean, msg: SendExportReq): SendExportReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendExportReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendExportReq;
  static deserializeBinaryFromReader(message: SendExportReq, reader: jspb.BinaryReader): SendExportReq;
}

export namespace SendExportReq {
  export type AsObject = {
    exportJobId: string,
  }
}

export class SendExportRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendExportRes.AsObject;
  static toObject(includeInstance: boolean, msg: SendExportRes): SendExportRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendExportRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendExportRes;
  static deserializeBinaryFromReader(message: SendExportRes, reader: jspb.BinaryReader): SendExportRes;
}

export namespace SendExportRes {
  export type AsObject = {
  }
}

export class DeleteExportJobReq extends jspb.Message {
  getExportJobId(): string;
  setExportJobId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteExportJobReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteExportJobReq): DeleteExportJobReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteExportJobReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteExportJobReq;
  static deserializeBinaryFromReader(message: DeleteExportJobReq, reader: jspb.BinaryReader): DeleteExportJobReq;
}

export namespace DeleteExportJobReq {
  export type AsObject = {
    exportJobId: string,
  }
}

export class DeleteExportJobRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteExportJobRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteExportJobRes): DeleteExportJobRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteExportJobRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteExportJobRes;
  static deserializeBinaryFromReader(message: DeleteExportJobRes, reader: jspb.BinaryReader): DeleteExportJobRes;
}

export namespace DeleteExportJobRes {
  export type AsObject = {
  }
}

export class SetExportJobActiveReq extends jspb.Message {
  getExportJobId(): string;
  setExportJobId(value: string): void;

  getSetActive(): boolean;
  setSetActive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetExportJobActiveReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetExportJobActiveReq): SetExportJobActiveReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetExportJobActiveReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetExportJobActiveReq;
  static deserializeBinaryFromReader(message: SetExportJobActiveReq, reader: jspb.BinaryReader): SetExportJobActiveReq;
}

export namespace SetExportJobActiveReq {
  export type AsObject = {
    exportJobId: string,
    setActive: boolean,
  }
}

export class SetExportJobActiveRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetExportJobActiveRes.AsObject;
  static toObject(includeInstance: boolean, msg: SetExportJobActiveRes): SetExportJobActiveRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetExportJobActiveRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetExportJobActiveRes;
  static deserializeBinaryFromReader(message: SetExportJobActiveRes, reader: jspb.BinaryReader): SetExportJobActiveRes;
}

export namespace SetExportJobActiveRes {
  export type AsObject = {
  }
}

export class GetExportHistoryDetailsReq extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  hasTimeFrom(): boolean;
  clearTimeFrom(): void;
  getTimeFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTimeTo(): boolean;
  clearTimeTo(): void;
  getTimeTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetExportHistoryDetailsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetExportHistoryDetailsReq): GetExportHistoryDetailsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetExportHistoryDetailsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetExportHistoryDetailsReq;
  static deserializeBinaryFromReader(message: GetExportHistoryDetailsReq, reader: jspb.BinaryReader): GetExportHistoryDetailsReq;
}

export namespace GetExportHistoryDetailsReq {
  export type AsObject = {
    orgId: string,
    timeFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timeTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetExportHistoryDetailsRes extends jspb.Message {
  getResultCount(): number;
  setResultCount(value: number): void;

  clearExportsList(): void;
  getExportsList(): Array<Export>;
  setExportsList(value: Array<Export>): void;
  addExports(value?: Export, index?: number): Export;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetExportHistoryDetailsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetExportHistoryDetailsRes): GetExportHistoryDetailsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetExportHistoryDetailsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetExportHistoryDetailsRes;
  static deserializeBinaryFromReader(message: GetExportHistoryDetailsRes, reader: jspb.BinaryReader): GetExportHistoryDetailsRes;
}

export namespace GetExportHistoryDetailsRes {
  export type AsObject = {
    resultCount: number,
    exportsList: Array<Export.AsObject>,
  }
}

export class Export extends jspb.Message {
  getExportJobId(): string;
  setExportJobId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  hasRunTime(): boolean;
  clearRunTime(): void;
  getRunTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRunTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): api_commons_ana_pb.ExportStatusMap[keyof api_commons_ana_pb.ExportStatusMap];
  setStatus(value: api_commons_ana_pb.ExportStatusMap[keyof api_commons_ana_pb.ExportStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Export.AsObject;
  static toObject(includeInstance: boolean, msg: Export): Export.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Export, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Export;
  static deserializeBinaryFromReader(message: Export, reader: jspb.BinaryReader): Export;
}

export namespace Export {
  export type AsObject = {
    exportJobId: string,
    title: string,
    runTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: api_commons_ana_pb.ExportStatusMap[keyof api_commons_ana_pb.ExportStatusMap],
  }
}

export class DownloadExportReq extends jspb.Message {
  getExportId(): string;
  setExportId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadExportReq.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadExportReq): DownloadExportReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadExportReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadExportReq;
  static deserializeBinaryFromReader(message: DownloadExportReq, reader: jspb.BinaryReader): DownloadExportReq;
}

export namespace DownloadExportReq {
  export type AsObject = {
    exportId: string,
  }
}

export class DownloadExportRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadExportRes.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadExportRes): DownloadExportRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadExportRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadExportRes;
  static deserializeBinaryFromReader(message: DownloadExportRes, reader: jspb.BinaryReader): DownloadExportRes;
}

export namespace DownloadExportRes {
  export type AsObject = {
  }
}

export class GetBillingReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillingReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillingReq): GetBillingReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillingReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillingReq;
  static deserializeBinaryFromReader(message: GetBillingReq, reader: jspb.BinaryReader): GetBillingReq;
}

export namespace GetBillingReq {
  export type AsObject = {
  }
}

export class GetBillingRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillingRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillingRes): GetBillingRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillingRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillingRes;
  static deserializeBinaryFromReader(message: GetBillingRes, reader: jspb.BinaryReader): GetBillingRes;
}

export namespace GetBillingRes {
  export type AsObject = {
  }
}

export class GetAuthorizedAnalyticsLinkReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuthorizedAnalyticsLinkReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuthorizedAnalyticsLinkReq): GetAuthorizedAnalyticsLinkReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuthorizedAnalyticsLinkReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuthorizedAnalyticsLinkReq;
  static deserializeBinaryFromReader(message: GetAuthorizedAnalyticsLinkReq, reader: jspb.BinaryReader): GetAuthorizedAnalyticsLinkReq;
}

export namespace GetAuthorizedAnalyticsLinkReq {
  export type AsObject = {
  }
}

export class GetAuthorizedAnalyticsLinkRes extends jspb.Message {
  getLink(): string;
  setLink(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuthorizedAnalyticsLinkRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuthorizedAnalyticsLinkRes): GetAuthorizedAnalyticsLinkRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuthorizedAnalyticsLinkRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuthorizedAnalyticsLinkRes;
  static deserializeBinaryFromReader(message: GetAuthorizedAnalyticsLinkRes, reader: jspb.BinaryReader): GetAuthorizedAnalyticsLinkRes;
}

export namespace GetAuthorizedAnalyticsLinkRes {
  export type AsObject = {
    link: string,
  }
}

export class ClientGroup extends jspb.Message {
  getCampaignType(): string;
  setCampaignType(value: string): void;

  getProcessedCallCount(): number;
  setProcessedCallCount(value: number): void;

  getBaselineCallCount(): number;
  setBaselineCallCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientGroup.AsObject;
  static toObject(includeInstance: boolean, msg: ClientGroup): ClientGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientGroup;
  static deserializeBinaryFromReader(message: ClientGroup, reader: jspb.BinaryReader): ClientGroup;
}

export namespace ClientGroup {
  export type AsObject = {
    campaignType: string,
    processedCallCount: number,
    baselineCallCount: number,
  }
}

export class GetClientStatusReq extends jspb.Message {
  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClientStatusReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetClientStatusReq): GetClientStatusReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetClientStatusReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClientStatusReq;
  static deserializeBinaryFromReader(message: GetClientStatusReq, reader: jspb.BinaryReader): GetClientStatusReq;
}

export namespace GetClientStatusReq {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    orgId: string,
  }
}

export class GetClientStatusResp extends jspb.Message {
  clearClientGroupsList(): void;
  getClientGroupsList(): Array<ClientGroup>;
  setClientGroupsList(value: Array<ClientGroup>): void;
  addClientGroups(value?: ClientGroup, index?: number): ClientGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClientStatusResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetClientStatusResp): GetClientStatusResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetClientStatusResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClientStatusResp;
  static deserializeBinaryFromReader(message: GetClientStatusResp, reader: jspb.BinaryReader): GetClientStatusResp;
}

export namespace GetClientStatusResp {
  export type AsObject = {
    clientGroupsList: Array<ClientGroup.AsObject>,
  }
}

export class ReloadClientDataReq extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReloadClientDataReq.AsObject;
  static toObject(includeInstance: boolean, msg: ReloadClientDataReq): ReloadClientDataReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReloadClientDataReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReloadClientDataReq;
  static deserializeBinaryFromReader(message: ReloadClientDataReq, reader: jspb.BinaryReader): ReloadClientDataReq;
}

export namespace ReloadClientDataReq {
  export type AsObject = {
    orgId: string,
  }
}

export class ReloadClientDataResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReloadClientDataResp.AsObject;
  static toObject(includeInstance: boolean, msg: ReloadClientDataResp): ReloadClientDataResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReloadClientDataResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReloadClientDataResp;
  static deserializeBinaryFromReader(message: ReloadClientDataResp, reader: jspb.BinaryReader): ReloadClientDataResp;
}

export namespace ReloadClientDataResp {
  export type AsObject = {
  }
}

export class ListVisualizationsLegacyReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVisualizationsLegacyReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListVisualizationsLegacyReq): ListVisualizationsLegacyReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListVisualizationsLegacyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVisualizationsLegacyReq;
  static deserializeBinaryFromReader(message: ListVisualizationsLegacyReq, reader: jspb.BinaryReader): ListVisualizationsLegacyReq;
}

export namespace ListVisualizationsLegacyReq {
  export type AsObject = {
  }
}

export class ListVisualizationsLegacyRes extends jspb.Message {
  clearDescriptionsList(): void;
  getDescriptionsList(): Array<VizDescription>;
  setDescriptionsList(value: Array<VizDescription>): void;
  addDescriptions(value?: VizDescription, index?: number): VizDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVisualizationsLegacyRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListVisualizationsLegacyRes): ListVisualizationsLegacyRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListVisualizationsLegacyRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVisualizationsLegacyRes;
  static deserializeBinaryFromReader(message: ListVisualizationsLegacyRes, reader: jspb.BinaryReader): ListVisualizationsLegacyRes;
}

export namespace ListVisualizationsLegacyRes {
  export type AsObject = {
    descriptionsList: Array<VizDescription.AsObject>,
  }
}

export class VizDescription extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getShowThe(): string;
  setShowThe(value: string): void;

  getWatcher(): boolean;
  setWatcher(value: boolean): void;

  getTcnModifiedDate(): number;
  setTcnModifiedDate(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VizDescription.AsObject;
  static toObject(includeInstance: boolean, msg: VizDescription): VizDescription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VizDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VizDescription;
  static deserializeBinaryFromReader(message: VizDescription, reader: jspb.BinaryReader): VizDescription;
}

export namespace VizDescription {
  export type AsObject = {
    id: string,
    title: string,
    showThe: string,
    watcher: boolean,
    tcnModifiedDate: number,
    description: string,
  }
}

