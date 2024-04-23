// package: wfo.vanalytics.v2
// file: wfo/vanalytics/v2/dncl_list.proto

import * as jspb from "google-protobuf";
import * as api_commons_compliance_pb from "../../../api/commons/compliance_pb";

export class DnclList extends jspb.Message {
  getListId(): string;
  setListId(value: string): void;

  getContentType(): api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap];
  setContentType(value: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap]): void;

  getExpirePeriod(): DnclExpirePeriodMap[keyof DnclExpirePeriodMap];
  setExpirePeriod(value: DnclExpirePeriodMap[keyof DnclExpirePeriodMap]): void;

  getExpireOffset(): number;
  setExpireOffset(value: number): void;

  getAgentResponseKey(): string;
  setAgentResponseKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DnclList.AsObject;
  static toObject(includeInstance: boolean, msg: DnclList): DnclList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DnclList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DnclList;
  static deserializeBinaryFromReader(message: DnclList, reader: jspb.BinaryReader): DnclList;
}

export namespace DnclList {
  export type AsObject = {
    listId: string,
    contentType: api_commons_compliance_pb.ContentTypeMap[keyof api_commons_compliance_pb.ContentTypeMap],
    expirePeriod: DnclExpirePeriodMap[keyof DnclExpirePeriodMap],
    expireOffset: number,
    agentResponseKey: string,
  }
}

export interface DnclExpirePeriodMap {
  DNCL_EXPIRE_PERIOD_HOUR: 0;
  DNCL_EXPIRE_PERIOD_DAY: 1;
  DNCL_EXPIRE_PERIOD_WEEK: 2;
  DNCL_EXPIRE_PERIOD_NEVER: 3;
  DNCL_EXPIRE_PERIOD_MONTH: 4;
}

export const DnclExpirePeriod: DnclExpirePeriodMap;

