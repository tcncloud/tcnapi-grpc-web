// package: api.commons
// file: api/commons/compliance.proto

import * as jspb from "google-protobuf";
import * as api_commons_enums_pb from "../../api/commons/enums_pb";

export class Rule extends jspb.Message {
  getVerb(): VerbMap[keyof VerbMap];
  setVerb(value: VerbMap[keyof VerbMap]): void;

  getEntity(): EntityMap[keyof EntityMap];
  setEntity(value: EntityMap[keyof EntityMap]): void;

  getSubEntity(): SubEntityMap[keyof SubEntityMap];
  setSubEntity(value: SubEntityMap[keyof SubEntityMap]): void;

  clearSelectorsList(): void;
  getSelectorsList(): Array<Selector>;
  setSelectorsList(value: Array<Selector>): void;
  addSelectors(value?: Selector, index?: number): Selector;

  getRuleText(): string;
  setRuleText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rule.AsObject;
  static toObject(includeInstance: boolean, msg: Rule): Rule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Rule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rule;
  static deserializeBinaryFromReader(message: Rule, reader: jspb.BinaryReader): Rule;
}

export namespace Rule {
  export type AsObject = {
    verb: VerbMap[keyof VerbMap],
    entity: EntityMap[keyof EntityMap],
    subEntity: SubEntityMap[keyof SubEntityMap],
    selectorsList: Array<Selector.AsObject>,
    ruleText: string,
  }
}

export class Selector extends jspb.Message {
  hasTime(): boolean;
  clearTime(): void;
  getTime(): TimeExp | undefined;
  setTime(value?: TimeExp): void;

  hasWeek(): boolean;
  clearWeek(): void;
  getWeek(): WeekdayExp | undefined;
  setWeek(value?: WeekdayExp): void;

  hasDncl(): boolean;
  clearDncl(): void;
  getDncl(): DnclExp | undefined;
  setDncl(value?: DnclExp): void;

  hasFrequency(): boolean;
  clearFrequency(): void;
  getFrequency(): FrequencyExp | undefined;
  setFrequency(value?: FrequencyExp): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): LocationExp | undefined;
  setLocation(value?: LocationExp): void;

  hasPhoneType(): boolean;
  clearPhoneType(): void;
  getPhoneType(): PhoneTypeExp | undefined;
  setPhoneType(value?: PhoneTypeExp): void;

  hasMonth(): boolean;
  clearMonth(): void;
  getMonth(): MonthExp | undefined;
  setMonth(value?: MonthExp): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): DateExp | undefined;
  setDate(value?: DateExp): void;

  hasHoliday(): boolean;
  clearHoliday(): void;
  getHoliday(): HolidayExp | undefined;
  setHoliday(value?: HolidayExp): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): MetaFieldExp | undefined;
  setMeta(value?: MetaFieldExp): void;

  hasPlugin(): boolean;
  clearPlugin(): void;
  getPlugin(): PluginExp | undefined;
  setPlugin(value?: PluginExp): void;

  getSelectionRuleCase(): Selector.SelectionRuleCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Selector.AsObject;
  static toObject(includeInstance: boolean, msg: Selector): Selector.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Selector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Selector;
  static deserializeBinaryFromReader(message: Selector, reader: jspb.BinaryReader): Selector;
}

export namespace Selector {
  export type AsObject = {
    time?: TimeExp.AsObject,
    week?: WeekdayExp.AsObject,
    dncl?: DnclExp.AsObject,
    frequency?: FrequencyExp.AsObject,
    location?: LocationExp.AsObject,
    phoneType?: PhoneTypeExp.AsObject,
    month?: MonthExp.AsObject,
    date?: DateExp.AsObject,
    holiday?: HolidayExp.AsObject,
    meta?: MetaFieldExp.AsObject,
    plugin?: PluginExp.AsObject,
  }

  export enum SelectionRuleCase {
    SELECTION_RULE_NOT_SET = 0,
    TIME = 1,
    WEEK = 2,
    DNCL = 3,
    FREQUENCY = 4,
    LOCATION = 5,
    PHONE_TYPE = 6,
    MONTH = 7,
    DATE = 8,
    HOLIDAY = 9,
    META = 10,
    PLUGIN = 11,
  }
}

export class TimeExp extends jspb.Message {
  getStartHour(): string;
  setStartHour(value: string): void;

  getEndHour(): string;
  setEndHour(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeExp.AsObject;
  static toObject(includeInstance: boolean, msg: TimeExp): TimeExp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeExp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeExp;
  static deserializeBinaryFromReader(message: TimeExp, reader: jspb.BinaryReader): TimeExp;
}

export namespace TimeExp {
  export type AsObject = {
    startHour: string,
    endHour: string,
  }
}

export class WeekdayExp extends jspb.Message {
  hasDay(): boolean;
  clearDay(): void;
  getDay(): api_commons_enums_pb.Weekday | undefined;
  setDay(value?: api_commons_enums_pb.Weekday): void;

  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeekdayExp.AsObject;
  static toObject(includeInstance: boolean, msg: WeekdayExp): WeekdayExp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WeekdayExp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeekdayExp;
  static deserializeBinaryFromReader(message: WeekdayExp, reader: jspb.BinaryReader): WeekdayExp;
}

export namespace WeekdayExp {
  export type AsObject = {
    day?: api_commons_enums_pb.Weekday.AsObject,
    text: string,
  }
}

export class DnclExp extends jspb.Message {
  getListName(): string;
  setListName(value: string): void;

  hasFieldNames(): boolean;
  clearFieldNames(): void;
  getFieldNames(): FieldNamesMod | undefined;
  setFieldNames(value?: FieldNamesMod): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DnclExp.AsObject;
  static toObject(includeInstance: boolean, msg: DnclExp): DnclExp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DnclExp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DnclExp;
  static deserializeBinaryFromReader(message: DnclExp, reader: jspb.BinaryReader): DnclExp;
}

export namespace DnclExp {
  export type AsObject = {
    listName: string,
    fieldNames?: FieldNamesMod.AsObject,
  }
}

export class FrequencyExp extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  hasResults(): boolean;
  clearResults(): void;
  getResults(): ResultsMod | undefined;
  setResults(value?: ResultsMod): void;

  hasDispositions(): boolean;
  clearDispositions(): void;
  getDispositions(): DispositionMod | undefined;
  setDispositions(value?: DispositionMod): void;

  hasFieldNames(): boolean;
  clearFieldNames(): void;
  getFieldNames(): FieldNamesMod | undefined;
  setFieldNames(value?: FieldNamesMod): void;

  clearCheckingEntitiesList(): void;
  getCheckingEntitiesList(): Array<EntityExp>;
  setCheckingEntitiesList(value: Array<EntityExp>): void;
  addCheckingEntities(value?: EntityExp, index?: number): EntityExp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrequencyExp.AsObject;
  static toObject(includeInstance: boolean, msg: FrequencyExp): FrequencyExp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FrequencyExp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrequencyExp;
  static deserializeBinaryFromReader(message: FrequencyExp, reader: jspb.BinaryReader): FrequencyExp;
}

export namespace FrequencyExp {
  export type AsObject = {
    count: number,
    duration: number,
    results?: ResultsMod.AsObject,
    dispositions?: DispositionMod.AsObject,
    fieldNames?: FieldNamesMod.AsObject,
    checkingEntitiesList: Array<EntityExp.AsObject>,
  }
}

export class LocationExp extends jspb.Message {
  getCountry(): string;
  setCountry(value: string): void;

  getState(): string;
  setState(value: string): void;

  getCounty(): string;
  setCounty(value: string): void;

  getCity(): string;
  setCity(value: string): void;

  getProvince(): string;
  setProvince(value: string): void;

  clearPostalCodesList(): void;
  getPostalCodesList(): Array<string>;
  setPostalCodesList(value: Array<string>): void;
  addPostalCodes(value: string, index?: number): string;

  clearAreaCodesList(): void;
  getAreaCodesList(): Array<string>;
  setAreaCodesList(value: Array<string>): void;
  addAreaCodes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationExp.AsObject;
  static toObject(includeInstance: boolean, msg: LocationExp): LocationExp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationExp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationExp;
  static deserializeBinaryFromReader(message: LocationExp, reader: jspb.BinaryReader): LocationExp;
}

export namespace LocationExp {
  export type AsObject = {
    country: string,
    state: string,
    county: string,
    city: string,
    province: string,
    postalCodesList: Array<string>,
    areaCodesList: Array<string>,
  }
}

export class PhoneTypeExp extends jspb.Message {
  getPhoneType(): PhoneTypeMap[keyof PhoneTypeMap];
  setPhoneType(value: PhoneTypeMap[keyof PhoneTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhoneTypeExp.AsObject;
  static toObject(includeInstance: boolean, msg: PhoneTypeExp): PhoneTypeExp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PhoneTypeExp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhoneTypeExp;
  static deserializeBinaryFromReader(message: PhoneTypeExp, reader: jspb.BinaryReader): PhoneTypeExp;
}

export namespace PhoneTypeExp {
  export type AsObject = {
    phoneType: PhoneTypeMap[keyof PhoneTypeMap],
  }
}

export class MonthExp extends jspb.Message {
  getMonth(): api_commons_enums_pb.MonthMap[keyof api_commons_enums_pb.MonthMap];
  setMonth(value: api_commons_enums_pb.MonthMap[keyof api_commons_enums_pb.MonthMap]): void;

  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonthExp.AsObject;
  static toObject(includeInstance: boolean, msg: MonthExp): MonthExp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MonthExp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonthExp;
  static deserializeBinaryFromReader(message: MonthExp, reader: jspb.BinaryReader): MonthExp;
}

export namespace MonthExp {
  export type AsObject = {
    month: api_commons_enums_pb.MonthMap[keyof api_commons_enums_pb.MonthMap],
    text: string,
  }
}

export class DateExp extends jspb.Message {
  getMonth(): api_commons_enums_pb.MonthMap[keyof api_commons_enums_pb.MonthMap];
  setMonth(value: api_commons_enums_pb.MonthMap[keyof api_commons_enums_pb.MonthMap]): void;

  getDay(): number;
  setDay(value: number): void;

  getYear(): number;
  setYear(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DateExp.AsObject;
  static toObject(includeInstance: boolean, msg: DateExp): DateExp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DateExp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DateExp;
  static deserializeBinaryFromReader(message: DateExp, reader: jspb.BinaryReader): DateExp;
}

export namespace DateExp {
  export type AsObject = {
    month: api_commons_enums_pb.MonthMap[keyof api_commons_enums_pb.MonthMap],
    day: number,
    year: number,
  }
}

export class HolidayExp extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HolidayExp.AsObject;
  static toObject(includeInstance: boolean, msg: HolidayExp): HolidayExp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HolidayExp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HolidayExp;
  static deserializeBinaryFromReader(message: HolidayExp, reader: jspb.BinaryReader): HolidayExp;
}

export namespace HolidayExp {
  export type AsObject = {
    name: string,
    country: string,
    type: string,
  }
}

export class MetaFieldExp extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetaFieldExp.AsObject;
  static toObject(includeInstance: boolean, msg: MetaFieldExp): MetaFieldExp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MetaFieldExp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetaFieldExp;
  static deserializeBinaryFromReader(message: MetaFieldExp, reader: jspb.BinaryReader): MetaFieldExp;
}

export namespace MetaFieldExp {
  export type AsObject = {
    field: string,
  }
}

export class PluginExp extends jspb.Message {
  getType(): PluginTypeMap[keyof PluginTypeMap];
  setType(value: PluginTypeMap[keyof PluginTypeMap]): void;

  getTcnStrict(): boolean;
  setTcnStrict(value: boolean): void;

  getLicenseId(): string;
  setLicenseId(value: string): void;

  getReferenceKey(): string;
  setReferenceKey(value: string): void;

  getFromNumber(): string;
  setFromNumber(value: string): void;

  getEnv(): EnvironmentMap[keyof EnvironmentMap];
  setEnv(value: EnvironmentMap[keyof EnvironmentMap]): void;

  getProfileName(): string;
  setProfileName(value: string): void;

  getContentField(): string;
  setContentField(value: string): void;

  getTopic(): string;
  setTopic(value: string): void;

  getAbsentAction(): ConsentAbsentActionMap[keyof ConsentAbsentActionMap];
  setAbsentAction(value: ConsentAbsentActionMap[keyof ConsentAbsentActionMap]): void;

  getDateLastContact(): string;
  setDateLastContact(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PluginExp.AsObject;
  static toObject(includeInstance: boolean, msg: PluginExp): PluginExp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PluginExp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PluginExp;
  static deserializeBinaryFromReader(message: PluginExp, reader: jspb.BinaryReader): PluginExp;
}

export namespace PluginExp {
  export type AsObject = {
    type: PluginTypeMap[keyof PluginTypeMap],
    tcnStrict: boolean,
    licenseId: string,
    referenceKey: string,
    fromNumber: string,
    env: EnvironmentMap[keyof EnvironmentMap],
    profileName: string,
    contentField: string,
    topic: string,
    absentAction: ConsentAbsentActionMap[keyof ConsentAbsentActionMap],
    dateLastContact: string,
  }
}

export class EntityExp extends jspb.Message {
  getSubEntity(): SubEntityMap[keyof SubEntityMap];
  setSubEntity(value: SubEntityMap[keyof SubEntityMap]): void;

  getEntity(): EntityMap[keyof EntityMap];
  setEntity(value: EntityMap[keyof EntityMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityExp.AsObject;
  static toObject(includeInstance: boolean, msg: EntityExp): EntityExp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EntityExp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityExp;
  static deserializeBinaryFromReader(message: EntityExp, reader: jspb.BinaryReader): EntityExp;
}

export namespace EntityExp {
  export type AsObject = {
    subEntity: SubEntityMap[keyof SubEntityMap],
    entity: EntityMap[keyof EntityMap],
  }
}

export class FieldNamesMod extends jspb.Message {
  clearFieldNamesList(): void;
  getFieldNamesList(): Array<Field>;
  setFieldNamesList(value: Array<Field>): void;
  addFieldNames(value?: Field, index?: number): Field;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldNamesMod.AsObject;
  static toObject(includeInstance: boolean, msg: FieldNamesMod): FieldNamesMod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldNamesMod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldNamesMod;
  static deserializeBinaryFromReader(message: FieldNamesMod, reader: jspb.BinaryReader): FieldNamesMod;
}

export namespace FieldNamesMod {
  export type AsObject = {
    fieldNamesList: Array<Field.AsObject>,
  }
}

export class ResultsMod extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<string>;
  setResultsList(value: Array<string>): void;
  addResults(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResultsMod.AsObject;
  static toObject(includeInstance: boolean, msg: ResultsMod): ResultsMod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResultsMod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResultsMod;
  static deserializeBinaryFromReader(message: ResultsMod, reader: jspb.BinaryReader): ResultsMod;
}

export namespace ResultsMod {
  export type AsObject = {
    resultsList: Array<string>,
  }
}

export class DispositionMod extends jspb.Message {
  clearDispositionsList(): void;
  getDispositionsList(): Array<DispositionField>;
  setDispositionsList(value: Array<DispositionField>): void;
  addDispositions(value?: DispositionField, index?: number): DispositionField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DispositionMod.AsObject;
  static toObject(includeInstance: boolean, msg: DispositionMod): DispositionMod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DispositionMod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DispositionMod;
  static deserializeBinaryFromReader(message: DispositionMod, reader: jspb.BinaryReader): DispositionMod;
}

export namespace DispositionMod {
  export type AsObject = {
    dispositionsList: Array<DispositionField.AsObject>,
  }
}

export class DispositionField extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  clearPairsList(): void;
  getPairsList(): Array<DispositionPair>;
  setPairsList(value: Array<DispositionPair>): void;
  addPairs(value?: DispositionPair, index?: number): DispositionPair;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DispositionField.AsObject;
  static toObject(includeInstance: boolean, msg: DispositionField): DispositionField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DispositionField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DispositionField;
  static deserializeBinaryFromReader(message: DispositionField, reader: jspb.BinaryReader): DispositionField;
}

export namespace DispositionField {
  export type AsObject = {
    key: string,
    value: string,
    pairsList: Array<DispositionPair.AsObject>,
  }
}

export class DispositionPair extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DispositionPair.AsObject;
  static toObject(includeInstance: boolean, msg: DispositionPair): DispositionPair.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DispositionPair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DispositionPair;
  static deserializeBinaryFromReader(message: DispositionPair, reader: jspb.BinaryReader): DispositionPair;
}

export namespace DispositionPair {
  export type AsObject = {
    key: string,
    value: string,
  }
}

export class Field extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Field.AsObject;
  static toObject(includeInstance: boolean, msg: Field): Field.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Field, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Field;
  static deserializeBinaryFromReader(message: Field, reader: jspb.BinaryReader): Field;
}

export namespace Field {
  export type AsObject = {
    field: string,
    content: string,
  }
}

export interface VerbMap {
  V_UNKNOWN: 0;
  V_ALLOW: 1;
  V_DENY: 2;
  V_SCRUB: 3;
  V_OVERRIDE: 4;
}

export const Verb: VerbMap;

export interface EntityMap {
  E_UNKNOWN: 0;
  E_CALL: 1;
  E_EMAIL: 2;
  E_SMS: 3;
}

export const Entity: EntityMap;

export interface SubEntityMap {
  SE_ALL: 0;
  SE_INBOUND: 1;
  SE_OUTBOUND: 2;
  SE_MANUAL: 3;
  SE_PREVIEW: 4;
  SE_MAC: 5;
  SE_BROADCAST: 6;
}

export const SubEntity: SubEntityMap;

export interface PhoneTypeMap {
  CELL: 0;
  LAND: 1;
  TOLL_FREE: 2;
}

export const PhoneType: PhoneTypeMap;

export interface ContentTypeMap {
  CT_PHONE_NUMBER: 0;
  CT_EMAIL: 1;
  CT_SMS: 2;
  CT_OTHER: 3;
  CT_ACCOUNT_NUMBER: 4;
}

export const ContentType: ContentTypeMap;

export interface ChannelMap {
  CHANNEL_CALL: 0;
  CHANNEL_EMAIL: 1;
  CHANNEL_SMS: 2;
}

export const Channel: ChannelMap;

export interface PluginTypeMap {
  UNKNOWN_PLUGIN: 0;
  GRYPHON: 1;
  TCN_CONSENT: 2;
  RND: 3;
}

export const PluginType: PluginTypeMap;

export interface EnvironmentMap {
  INVALID_ENV: 0;
  TEST: 1;
  PRODUCTION: 2;
}

export const Environment: EnvironmentMap;

export interface ConsentAbsentActionMap {
  CONSENT_ABSENT_ACTION_ALLOW: 0;
  CONSENT_ABSENT_ACTION_DENY: 1;
}

export const ConsentAbsentAction: ConsentAbsentActionMap;

