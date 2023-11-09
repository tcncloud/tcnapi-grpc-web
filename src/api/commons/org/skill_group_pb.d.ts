// package: api.commons.org
// file: api/commons/org/skill_group.proto

import * as jspb from "google-protobuf";

export class SkillGroup extends jspb.Message {
  getSkillGroupId(): string;
  setSkillGroupId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearSkillSetsList(): void;
  getSkillSetsList(): Array<SkillSet>;
  setSkillSetsList(value: Array<SkillSet>): void;
  addSkillSets(value?: SkillSet, index?: number): SkillSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkillGroup.AsObject;
  static toObject(includeInstance: boolean, msg: SkillGroup): SkillGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SkillGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkillGroup;
  static deserializeBinaryFromReader(message: SkillGroup, reader: jspb.BinaryReader): SkillGroup;
}

export namespace SkillGroup {
  export type AsObject = {
    skillGroupId: string,
    orgId: string,
    name: string,
    description: string,
    skillSetsList: Array<SkillSet.AsObject>,
  }
}

export class SkillSet extends jspb.Message {
  getProficiency(): number;
  setProficiency(value: number): void;

  getSkillSid(): number;
  setSkillSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkillSet.AsObject;
  static toObject(includeInstance: boolean, msg: SkillSet): SkillSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SkillSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkillSet;
  static deserializeBinaryFromReader(message: SkillSet, reader: jspb.BinaryReader): SkillSet;
}

export namespace SkillSet {
  export type AsObject = {
    proficiency: number,
    skillSid: number,
  }
}

