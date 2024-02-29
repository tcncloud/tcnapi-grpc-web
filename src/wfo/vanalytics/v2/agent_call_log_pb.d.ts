// package: wfo.vanalytics.v2
// file: wfo/vanalytics/v2/agent_call_log.proto

import * as jspb from "google-protobuf";
import * as api_commons_acd_pb from "../../../api/commons/acd_pb";

export class AgentCallLog extends jspb.Message {
  clearActionsList(): void;
  getActionsList(): Array<AgentCallLog.Action>;
  setActionsList(value: Array<AgentCallLog.Action>): void;
  addActions(value?: AgentCallLog.Action, index?: number): AgentCallLog.Action;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentCallLog.AsObject;
  static toObject(includeInstance: boolean, msg: AgentCallLog): AgentCallLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentCallLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentCallLog;
  static deserializeBinaryFromReader(message: AgentCallLog, reader: jspb.BinaryReader): AgentCallLog;
}

export namespace AgentCallLog {
  export type AsObject = {
    actionsList: Array<AgentCallLog.Action.AsObject>,
  }

  export class Action extends jspb.Message {
    hasCallSkillsInitial(): boolean;
    clearCallSkillsInitial(): void;
    getCallSkillsInitial(): AgentCallLog.CallSkillsInitial | undefined;
    setCallSkillsInitial(value?: AgentCallLog.CallSkillsInitial): void;

    hasCallEnded(): boolean;
    clearCallEnded(): void;
    getCallEnded(): string;
    setCallEnded(value: string): void;

    getKindCase(): Action.KindCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Action.AsObject;
    static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Action;
    static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
  }

  export namespace Action {
    export type AsObject = {
      callSkillsInitial?: AgentCallLog.CallSkillsInitial.AsObject,
      callEnded: string,
    }

    export enum KindCase {
      KIND_NOT_SET = 0,
      CALL_SKILLS_INITIAL = 1,
      CALL_ENDED = 2,
    }
  }

  export class CallSkillsInitial extends jspb.Message {
    clearNeedList(): void;
    getNeedList(): Array<string>;
    setNeedList(value: Array<string>): void;
    addNeed(value: string, index?: number): string;

    clearWantList(): void;
    getWantList(): Array<string>;
    setWantList(value: Array<string>): void;
    addWant(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallSkillsInitial.AsObject;
    static toObject(includeInstance: boolean, msg: CallSkillsInitial): CallSkillsInitial.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallSkillsInitial, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallSkillsInitial;
    static deserializeBinaryFromReader(message: CallSkillsInitial, reader: jspb.BinaryReader): CallSkillsInitial;
  }

  export namespace CallSkillsInitial {
    export type AsObject = {
      needList: Array<string>,
      wantList: Array<string>,
    }
  }
}

export class AgentCallLogQuery extends jspb.Message {
  hasCallSkillsInitial(): boolean;
  clearCallSkillsInitial(): void;
  getCallSkillsInitial(): AgentCallLogQuery.CallSkillsInitial | undefined;
  setCallSkillsInitial(value?: AgentCallLogQuery.CallSkillsInitial): void;

  hasCallEnded(): boolean;
  clearCallEnded(): void;
  getCallEnded(): AgentCallLogQuery.CallEnded | undefined;
  setCallEnded(value?: AgentCallLogQuery.CallEnded): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentCallLogQuery.AsObject;
  static toObject(includeInstance: boolean, msg: AgentCallLogQuery): AgentCallLogQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentCallLogQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentCallLogQuery;
  static deserializeBinaryFromReader(message: AgentCallLogQuery, reader: jspb.BinaryReader): AgentCallLogQuery;
}

export namespace AgentCallLogQuery {
  export type AsObject = {
    callSkillsInitial?: AgentCallLogQuery.CallSkillsInitial.AsObject,
    callEnded?: AgentCallLogQuery.CallEnded.AsObject,
  }

  export class CallSkillsInitial extends jspb.Message {
    hasNeed(): boolean;
    clearNeed(): void;
    getNeed(): AgentCallLogQuery.CallSkillsInitial.Need | undefined;
    setNeed(value?: AgentCallLogQuery.CallSkillsInitial.Need): void;

    hasWant(): boolean;
    clearWant(): void;
    getWant(): AgentCallLogQuery.CallSkillsInitial.Want | undefined;
    setWant(value?: AgentCallLogQuery.CallSkillsInitial.Want): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallSkillsInitial.AsObject;
    static toObject(includeInstance: boolean, msg: CallSkillsInitial): CallSkillsInitial.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallSkillsInitial, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallSkillsInitial;
    static deserializeBinaryFromReader(message: CallSkillsInitial, reader: jspb.BinaryReader): CallSkillsInitial;
  }

  export namespace CallSkillsInitial {
    export type AsObject = {
      need?: AgentCallLogQuery.CallSkillsInitial.Need.AsObject,
      want?: AgentCallLogQuery.CallSkillsInitial.Want.AsObject,
    }

    export class Need extends jspb.Message {
      clearValuesList(): void;
      getValuesList(): Array<string>;
      setValuesList(value: Array<string>): void;
      addValues(value: string, index?: number): string;

      getAll(): boolean;
      setAll(value: boolean): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Need.AsObject;
      static toObject(includeInstance: boolean, msg: Need): Need.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Need, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Need;
      static deserializeBinaryFromReader(message: Need, reader: jspb.BinaryReader): Need;
    }

    export namespace Need {
      export type AsObject = {
        valuesList: Array<string>,
        all: boolean,
      }
    }

    export class Want extends jspb.Message {
      clearValuesList(): void;
      getValuesList(): Array<string>;
      setValuesList(value: Array<string>): void;
      addValues(value: string, index?: number): string;

      getAll(): boolean;
      setAll(value: boolean): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Want.AsObject;
      static toObject(includeInstance: boolean, msg: Want): Want.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Want, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Want;
      static deserializeBinaryFromReader(message: Want, reader: jspb.BinaryReader): Want;
    }

    export namespace Want {
      export type AsObject = {
        valuesList: Array<string>,
        all: boolean,
      }
    }
  }

  export class CallEnded extends jspb.Message {
    clearReasonsList(): void;
    getReasonsList(): Array<api_commons_acd_pb.AgentCallLogCallEndedMap[keyof api_commons_acd_pb.AgentCallLogCallEndedMap]>;
    setReasonsList(value: Array<api_commons_acd_pb.AgentCallLogCallEndedMap[keyof api_commons_acd_pb.AgentCallLogCallEndedMap]>): void;
    addReasons(value: api_commons_acd_pb.AgentCallLogCallEndedMap[keyof api_commons_acd_pb.AgentCallLogCallEndedMap], index?: number): api_commons_acd_pb.AgentCallLogCallEndedMap[keyof api_commons_acd_pb.AgentCallLogCallEndedMap];

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallEnded.AsObject;
    static toObject(includeInstance: boolean, msg: CallEnded): CallEnded.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallEnded, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallEnded;
    static deserializeBinaryFromReader(message: CallEnded, reader: jspb.BinaryReader): CallEnded;
  }

  export namespace CallEnded {
    export type AsObject = {
      reasonsList: Array<api_commons_acd_pb.AgentCallLogCallEndedMap[keyof api_commons_acd_pb.AgentCallLogCallEndedMap]>,
    }
  }
}

