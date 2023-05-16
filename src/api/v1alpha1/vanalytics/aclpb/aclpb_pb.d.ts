// package: api.v1alpha1.vanalytics.aclpb
// file: api/v1alpha1/vanalytics/aclpb/aclpb.proto

import * as jspb from "google-protobuf";

export class AgentCallLog extends jspb.Message {
  clearActionsList(): void;
  getActionsList(): Array<Action>;
  setActionsList(value: Array<Action>): void;
  addActions(value?: Action, index?: number): Action;

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
    actionsList: Array<Action.AsObject>,
  }
}

export class Action extends jspb.Message {
  hasCallSkillsInitial(): boolean;
  clearCallSkillsInitial(): void;
  getCallSkillsInitial(): CallSkillsInitial | undefined;
  setCallSkillsInitial(value?: CallSkillsInitial): void;

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
    callSkillsInitial?: CallSkillsInitial.AsObject,
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

