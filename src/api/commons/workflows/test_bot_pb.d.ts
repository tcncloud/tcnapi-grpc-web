// package: api.commons.workflows
// file: api/commons/workflows/test_bot.proto

import * as jspb from "google-protobuf";
import * as api_commons_auth_user_pb from "../../../api/commons/auth/user_pb";
import * as api_v0alpha_omniapi_pb from "../../../api/v0alpha/omniapi_pb";

export class TestBotNodeTestStart extends jspb.Message {
  getEntitiesMap(): jspb.Map<string, TestBotEntity>;
  clearEntitiesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestBotNodeTestStart.AsObject;
  static toObject(includeInstance: boolean, msg: TestBotNodeTestStart): TestBotNodeTestStart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestBotNodeTestStart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestBotNodeTestStart;
  static deserializeBinaryFromReader(message: TestBotNodeTestStart, reader: jspb.BinaryReader): TestBotNodeTestStart;
}

export namespace TestBotNodeTestStart {
  export type AsObject = {
    entitiesMap: Array<[string, TestBotEntity.AsObject]>,
  }
}

export class TestBotNodeTestStep extends jspb.Message {
  getShouldError(): boolean;
  setShouldError(value: boolean): void;

  getType(): TestBotTestStepTypeMap[keyof TestBotTestStepTypeMap];
  setType(value: TestBotTestStepTypeMap[keyof TestBotTestStepTypeMap]): void;

  clearEntityNamesList(): void;
  getEntityNamesList(): Array<string>;
  setEntityNamesList(value: Array<string>): void;
  addEntityNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestBotNodeTestStep.AsObject;
  static toObject(includeInstance: boolean, msg: TestBotNodeTestStep): TestBotNodeTestStep.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestBotNodeTestStep, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestBotNodeTestStep;
  static deserializeBinaryFromReader(message: TestBotNodeTestStep, reader: jspb.BinaryReader): TestBotNodeTestStep;
}

export namespace TestBotNodeTestStep {
  export type AsObject = {
    shouldError: boolean,
    type: TestBotTestStepTypeMap[keyof TestBotTestStepTypeMap],
    entityNamesList: Array<string>,
  }
}

export class TestBotNodeTestEnd extends jspb.Message {
  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestBotNodeTestEnd.AsObject;
  static toObject(includeInstance: boolean, msg: TestBotNodeTestEnd): TestBotNodeTestEnd.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestBotNodeTestEnd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestBotNodeTestEnd;
  static deserializeBinaryFromReader(message: TestBotNodeTestEnd, reader: jspb.BinaryReader): TestBotNodeTestEnd;
}

export namespace TestBotNodeTestEnd {
  export type AsObject = {
    error: string,
  }
}

export class TestBotEntity extends jspb.Message {
  getType(): TestBotEntityTypeMap[keyof TestBotEntityTypeMap];
  setType(value: TestBotEntityTypeMap[keyof TestBotEntityTypeMap]): void;

  getAtomic(): boolean;
  setAtomic(value: boolean): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): api_commons_auth_user_pb.AuthenticatedUser | undefined;
  setUser(value?: api_commons_auth_user_pb.AuthenticatedUser): void;

  hasOmnichannelProject(): boolean;
  clearOmnichannelProject(): void;
  getOmnichannelProject(): api_v0alpha_omniapi_pb.Project | undefined;
  setOmnichannelProject(value?: api_v0alpha_omniapi_pb.Project): void;

  getDataCase(): TestBotEntity.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestBotEntity.AsObject;
  static toObject(includeInstance: boolean, msg: TestBotEntity): TestBotEntity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestBotEntity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestBotEntity;
  static deserializeBinaryFromReader(message: TestBotEntity, reader: jspb.BinaryReader): TestBotEntity;
}

export namespace TestBotEntity {
  export type AsObject = {
    type: TestBotEntityTypeMap[keyof TestBotEntityTypeMap],
    atomic: boolean,
    user?: api_commons_auth_user_pb.AuthenticatedUser.AsObject,
    omnichannelProject?: api_v0alpha_omniapi_pb.Project.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    USER = 100,
    OMNICHANNEL_PROJECT = 300,
  }
}

export interface TestBotTestStepTypeMap {
  TEST_BOT_TEST_STEP_TYPE_UNSPECIFIED: 0;
  TEST_BOT_TEST_STEP_TYPE_OMNICHANNEL_CREATE_PROJECT: 1000;
  TEST_BOT_TEST_STEP_TYPE_OMNICHANNEL_GET_PROJECT: 1001;
}

export const TestBotTestStepType: TestBotTestStepTypeMap;

export interface TestBotEntityTypeMap {
  TEST_BOT_ENTITY_TYPE_UNSPECIFIED: 0;
  TEST_BOT_ENTITY_TYPE_USER: 100;
  TEST_BOT_ENTITY_TYPE_OMNICHANNEL_PROJECT: 300;
}

export const TestBotEntityType: TestBotEntityTypeMap;

