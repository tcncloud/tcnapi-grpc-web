// package: api.commons
// file: api/commons/call.proto

import * as jspb from "google-protobuf";
import * as api_commons_results_pb from "../../api/commons/results_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class SimpleCallData extends jspb.Message {
  getTaskSid(): number;
  setTaskSid(value: number): void;

  getCallSid(): number;
  setCallSid(value: number): void;

  getTaskGroupSid(): number;
  setTaskGroupSid(value: number): void;

  getClientSid(): number;
  setClientSid(value: number): void;

  getCountrySid(): number;
  setCountrySid(value: number): void;

  getAgentSid(): number;
  setAgentSid(value: number): void;

  getStartTime(): number;
  setStartTime(value: number): void;

  getCallerId(): string;
  setCallerId(value: string): void;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): void;

  getCountryCode(): string;
  setCountryCode(value: string): void;

  getDeliveryDuration(): number;
  setDeliveryDuration(value: number): void;

  getLinkCallDuration(): number;
  setLinkCallDuration(value: number): void;

  getResult(): api_commons_results_pb.CallResultMap[keyof api_commons_results_pb.CallResultMap];
  setResult(value: api_commons_results_pb.CallResultMap[keyof api_commons_results_pb.CallResultMap]): void;

  getSipCode(): number;
  setSipCode(value: number): void;

  getDoRecord(): boolean;
  setDoRecord(value: boolean): void;

  getRecordingFileName(): string;
  setRecordingFileName(value: string): void;

  getIsDialValidationOk(): boolean;
  setIsDialValidationOk(value: boolean): void;

  getIsTimeZoneScrubOk(): boolean;
  setIsTimeZoneScrubOk(value: boolean): void;

  getIsCellPhoneScrubOk(): boolean;
  setIsCellPhoneScrubOk(value: boolean): void;

  getIsCustomCallingRulesScrubOk(): boolean;
  setIsCustomCallingRulesScrubOk(value: boolean): void;

  getIsDnclScrubOk(): boolean;
  setIsDnclScrubOk(value: boolean): void;

  getUseGlobalTimeZoneScrub(): boolean;
  setUseGlobalTimeZoneScrub(value: boolean): void;

  getDoCellPhoneScrub(): boolean;
  setDoCellPhoneScrub(value: boolean): void;

  getDoDnclScrub(): boolean;
  setDoDnclScrub(value: boolean): void;

  getCallDataType(): string;
  setCallDataType(value: string): void;

  getCallerIdCountryCode(): string;
  setCallerIdCountryCode(value: string): void;

  getCallerIdCountrySid(): number;
  setCallerIdCountrySid(value: number): void;

  getZipCode(): string;
  setZipCode(value: string): void;

  getIsPreviewByRecord(): boolean;
  setIsPreviewByRecord(value: boolean): void;

  getRuleSetName(): string;
  setRuleSetName(value: string): void;

  getIsNaturalComplianceOk(): boolean;
  setIsNaturalComplianceOk(value: boolean): void;

  clearSimpleMetaDataList(): void;
  getSimpleMetaDataList(): Array<SimpleKeyValue>;
  setSimpleMetaDataList(value: Array<SimpleKeyValue>): void;
  addSimpleMetaData(value?: SimpleKeyValue, index?: number): SimpleKeyValue;

  clearSimpleResultMetaDataList(): void;
  getSimpleResultMetaDataList(): Array<SimpleKeyValue>;
  setSimpleResultMetaDataList(value: Array<SimpleKeyValue>): void;
  addSimpleResultMetaData(value?: SimpleKeyValue, index?: number): SimpleKeyValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleCallData.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleCallData): SimpleCallData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimpleCallData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleCallData;
  static deserializeBinaryFromReader(message: SimpleCallData, reader: jspb.BinaryReader): SimpleCallData;
}

export namespace SimpleCallData {
  export type AsObject = {
    taskSid: number,
    callSid: number,
    taskGroupSid: number,
    clientSid: number,
    countrySid: number,
    agentSid: number,
    startTime: number,
    callerId: string,
    phoneNumber: string,
    countryCode: string,
    deliveryDuration: number,
    linkCallDuration: number,
    result: api_commons_results_pb.CallResultMap[keyof api_commons_results_pb.CallResultMap],
    sipCode: number,
    doRecord: boolean,
    recordingFileName: string,
    isDialValidationOk: boolean,
    isTimeZoneScrubOk: boolean,
    isCellPhoneScrubOk: boolean,
    isCustomCallingRulesScrubOk: boolean,
    isDnclScrubOk: boolean,
    useGlobalTimeZoneScrub: boolean,
    doCellPhoneScrub: boolean,
    doDnclScrub: boolean,
    callDataType: string,
    callerIdCountryCode: string,
    callerIdCountrySid: number,
    zipCode: string,
    isPreviewByRecord: boolean,
    ruleSetName: string,
    isNaturalComplianceOk: boolean,
    simpleMetaDataList: Array<SimpleKeyValue.AsObject>,
    simpleResultMetaDataList: Array<SimpleKeyValue.AsObject>,
  }
}

export class SimpleKeyValue extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleKeyValue.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleKeyValue): SimpleKeyValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimpleKeyValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleKeyValue;
  static deserializeBinaryFromReader(message: SimpleKeyValue, reader: jspb.BinaryReader): SimpleKeyValue;
}

export namespace SimpleKeyValue {
  export type AsObject = {
    key: string,
    value: string,
  }
}

export class SimpleRecordData extends jspb.Message {
  getTaskSid(): number;
  setTaskSid(value: number): void;

  getTaskGroupSid(): number;
  setTaskGroupSid(value: number): void;

  getAgentSid(): number;
  setAgentSid(value: number): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStopTime(): boolean;
  clearStopTime(): void;
  getStopTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStopTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleRecordData.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleRecordData): SimpleRecordData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimpleRecordData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleRecordData;
  static deserializeBinaryFromReader(message: SimpleRecordData, reader: jspb.BinaryReader): SimpleRecordData;
}

export namespace SimpleRecordData {
  export type AsObject = {
    taskSid: number,
    taskGroupSid: number,
    agentSid: number,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stopTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export interface CallStatusMap {
  CALL_UNKNOWN: 0;
  CALL_SCHEDULED: 3100;
  CALL_RUNNING: 3200;
  CALL_COMPLETED: 3300;
}

export const CallStatus: CallStatusMap;

