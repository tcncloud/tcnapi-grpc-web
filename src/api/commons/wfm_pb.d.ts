// package: api.commons
// file: api/commons/wfm.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class SkillType extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkillType.AsObject;
  static toObject(includeInstance: boolean, msg: SkillType): SkillType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SkillType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkillType;
  static deserializeBinaryFromReader(message: SkillType, reader: jspb.BinaryReader): SkillType;
}

export namespace SkillType {
  export type AsObject = {
  }

  export interface EnumMap {
    AGENT_SKILL: 0;
    HUNT_GROUP: 1;
    AGENT_PBX: 2;
    HUNT_GROUP_PBX: 3;
    PBX: 4;
    AGENT: 5;
  }

  export const Enum: EnumMap;
}

export class DatetimeRange extends jspb.Message {
  hasStartDatetime(): boolean;
  clearStartDatetime(): void;
  getStartDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDatetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndDatetime(): boolean;
  clearEndDatetime(): void;
  getEndDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndDatetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatetimeRange.AsObject;
  static toObject(includeInstance: boolean, msg: DatetimeRange): DatetimeRange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DatetimeRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatetimeRange;
  static deserializeBinaryFromReader(message: DatetimeRange, reader: jspb.BinaryReader): DatetimeRange;
}

export namespace DatetimeRange {
  export type AsObject = {
    startDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ForecastingParameters extends jspb.Message {
  getIntervalWidthInMinutes(): number;
  setIntervalWidthInMinutes(value: number): void;

  hasHistoricalDataRangeInMonths(): boolean;
  clearHistoricalDataRangeInMonths(): void;
  getHistoricalDataRangeInMonths(): number;
  setHistoricalDataRangeInMonths(value: number): void;

  hasHistoricalDataRangeStartDatetime(): boolean;
  clearHistoricalDataRangeStartDatetime(): void;
  getHistoricalDataRangeStartDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setHistoricalDataRangeStartDatetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getForecastTestRangeInWeeks(): number;
  setForecastTestRangeInWeeks(value: number): void;

  hasForecastRangeInWeeks(): boolean;
  clearForecastRangeInWeeks(): void;
  getForecastRangeInWeeks(): number;
  setForecastRangeInWeeks(value: number): void;

  hasForecastDatetimeRange(): boolean;
  clearForecastDatetimeRange(): void;
  getForecastDatetimeRange(): DatetimeRange | undefined;
  setForecastDatetimeRange(value?: DatetimeRange): void;

  hasTrainingDataRangeInMonths(): boolean;
  clearTrainingDataRangeInMonths(): void;
  getTrainingDataRangeInMonths(): number;
  setTrainingDataRangeInMonths(value: number): void;

  hasTrainingDataDatetimeRange(): boolean;
  clearTrainingDataDatetimeRange(): void;
  getTrainingDataDatetimeRange(): DatetimeRange | undefined;
  setTrainingDataDatetimeRange(value?: DatetimeRange): void;

  getAveragesCalculationRangeInMonths(): number;
  setAveragesCalculationRangeInMonths(value: number): void;

  getHistoricalDataRangeCase(): ForecastingParameters.HistoricalDataRangeCase;
  getForecastRangeCase(): ForecastingParameters.ForecastRangeCase;
  getTrainingDataRangeCase(): ForecastingParameters.TrainingDataRangeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForecastingParameters.AsObject;
  static toObject(includeInstance: boolean, msg: ForecastingParameters): ForecastingParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ForecastingParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForecastingParameters;
  static deserializeBinaryFromReader(message: ForecastingParameters, reader: jspb.BinaryReader): ForecastingParameters;
}

export namespace ForecastingParameters {
  export type AsObject = {
    intervalWidthInMinutes: number,
    historicalDataRangeInMonths: number,
    historicalDataRangeStartDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    forecastTestRangeInWeeks: number,
    forecastRangeInWeeks: number,
    forecastDatetimeRange?: DatetimeRange.AsObject,
    trainingDataRangeInMonths: number,
    trainingDataDatetimeRange?: DatetimeRange.AsObject,
    averagesCalculationRangeInMonths: number,
  }

  export enum HistoricalDataRangeCase {
    HISTORICAL_DATA_RANGE_NOT_SET = 0,
    HISTORICAL_DATA_RANGE_IN_MONTHS = 6,
    HISTORICAL_DATA_RANGE_START_DATETIME = 7,
  }

  export enum ForecastRangeCase {
    FORECAST_RANGE_NOT_SET = 0,
    FORECAST_RANGE_IN_WEEKS = 9,
    FORECAST_DATETIME_RANGE = 10,
  }

  export enum TrainingDataRangeCase {
    TRAINING_DATA_RANGE_NOT_SET = 0,
    TRAINING_DATA_RANGE_IN_MONTHS = 11,
    TRAINING_DATA_DATETIME_RANGE = 12,
  }
}

export class ProfileTOD extends jspb.Message {
  clearSundayList(): void;
  getSundayList(): Array<number>;
  setSundayList(value: Array<number>): void;
  addSunday(value: number, index?: number): number;

  clearMondayList(): void;
  getMondayList(): Array<number>;
  setMondayList(value: Array<number>): void;
  addMonday(value: number, index?: number): number;

  clearTuesdayList(): void;
  getTuesdayList(): Array<number>;
  setTuesdayList(value: Array<number>): void;
  addTuesday(value: number, index?: number): number;

  clearWednesdayList(): void;
  getWednesdayList(): Array<number>;
  setWednesdayList(value: Array<number>): void;
  addWednesday(value: number, index?: number): number;

  clearThursdayList(): void;
  getThursdayList(): Array<number>;
  setThursdayList(value: Array<number>): void;
  addThursday(value: number, index?: number): number;

  clearFridayList(): void;
  getFridayList(): Array<number>;
  setFridayList(value: Array<number>): void;
  addFriday(value: number, index?: number): number;

  clearSaturdayList(): void;
  getSaturdayList(): Array<number>;
  setSaturdayList(value: Array<number>): void;
  addSaturday(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileTOD.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileTOD): ProfileTOD.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProfileTOD, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileTOD;
  static deserializeBinaryFromReader(message: ProfileTOD, reader: jspb.BinaryReader): ProfileTOD;
}

export namespace ProfileTOD {
  export type AsObject = {
    sundayList: Array<number>,
    mondayList: Array<number>,
    tuesdayList: Array<number>,
    wednesdayList: Array<number>,
    thursdayList: Array<number>,
    fridayList: Array<number>,
    saturdayList: Array<number>,
  }
}

export class ProfileWOMS extends jspb.Message {
  clearJanuaryList(): void;
  getJanuaryList(): Array<number>;
  setJanuaryList(value: Array<number>): void;
  addJanuary(value: number, index?: number): number;

  clearFebruaryList(): void;
  getFebruaryList(): Array<number>;
  setFebruaryList(value: Array<number>): void;
  addFebruary(value: number, index?: number): number;

  clearMarchList(): void;
  getMarchList(): Array<number>;
  setMarchList(value: Array<number>): void;
  addMarch(value: number, index?: number): number;

  clearAprilList(): void;
  getAprilList(): Array<number>;
  setAprilList(value: Array<number>): void;
  addApril(value: number, index?: number): number;

  clearMayList(): void;
  getMayList(): Array<number>;
  setMayList(value: Array<number>): void;
  addMay(value: number, index?: number): number;

  clearJuneList(): void;
  getJuneList(): Array<number>;
  setJuneList(value: Array<number>): void;
  addJune(value: number, index?: number): number;

  clearJulyList(): void;
  getJulyList(): Array<number>;
  setJulyList(value: Array<number>): void;
  addJuly(value: number, index?: number): number;

  clearAugustList(): void;
  getAugustList(): Array<number>;
  setAugustList(value: Array<number>): void;
  addAugust(value: number, index?: number): number;

  clearSeptemberList(): void;
  getSeptemberList(): Array<number>;
  setSeptemberList(value: Array<number>): void;
  addSeptember(value: number, index?: number): number;

  clearOctoberList(): void;
  getOctoberList(): Array<number>;
  setOctoberList(value: Array<number>): void;
  addOctober(value: number, index?: number): number;

  clearNovemberList(): void;
  getNovemberList(): Array<number>;
  setNovemberList(value: Array<number>): void;
  addNovember(value: number, index?: number): number;

  clearDecemberList(): void;
  getDecemberList(): Array<number>;
  setDecemberList(value: Array<number>): void;
  addDecember(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileWOMS.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileWOMS): ProfileWOMS.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProfileWOMS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileWOMS;
  static deserializeBinaryFromReader(message: ProfileWOMS, reader: jspb.BinaryReader): ProfileWOMS;
}

export namespace ProfileWOMS {
  export type AsObject = {
    januaryList: Array<number>,
    februaryList: Array<number>,
    marchList: Array<number>,
    aprilList: Array<number>,
    mayList: Array<number>,
    juneList: Array<number>,
    julyList: Array<number>,
    augustList: Array<number>,
    septemberList: Array<number>,
    octoberList: Array<number>,
    novemberList: Array<number>,
    decemberList: Array<number>,
  }
}

export class ProfileDOW extends jspb.Message {
  getSunday(): number;
  setSunday(value: number): void;

  getMonday(): number;
  setMonday(value: number): void;

  getTuesday(): number;
  setTuesday(value: number): void;

  getWednesday(): number;
  setWednesday(value: number): void;

  getThursday(): number;
  setThursday(value: number): void;

  getFriday(): number;
  setFriday(value: number): void;

  getSaturday(): number;
  setSaturday(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileDOW.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileDOW): ProfileDOW.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProfileDOW, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileDOW;
  static deserializeBinaryFromReader(message: ProfileDOW, reader: jspb.BinaryReader): ProfileDOW;
}

export namespace ProfileDOW {
  export type AsObject = {
    sunday: number,
    monday: number,
    tuesday: number,
    wednesday: number,
    thursday: number,
    friday: number,
    saturday: number,
  }
}

export class ProfileMOY extends jspb.Message {
  getJanuary(): number;
  setJanuary(value: number): void;

  getFebruary(): number;
  setFebruary(value: number): void;

  getMarch(): number;
  setMarch(value: number): void;

  getApril(): number;
  setApril(value: number): void;

  getMay(): number;
  setMay(value: number): void;

  getJune(): number;
  setJune(value: number): void;

  getJuly(): number;
  setJuly(value: number): void;

  getAugust(): number;
  setAugust(value: number): void;

  getSeptember(): number;
  setSeptember(value: number): void;

  getOctober(): number;
  setOctober(value: number): void;

  getNovember(): number;
  setNovember(value: number): void;

  getDecember(): number;
  setDecember(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileMOY.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileMOY): ProfileMOY.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProfileMOY, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileMOY;
  static deserializeBinaryFromReader(message: ProfileMOY, reader: jspb.BinaryReader): ProfileMOY;
}

export namespace ProfileMOY {
  export type AsObject = {
    january: number,
    february: number,
    march: number,
    april: number,
    may: number,
    june: number,
    july: number,
    august: number,
    september: number,
    october: number,
    november: number,
    december: number,
  }
}

export class DistributionProfile extends jspb.Message {
  hasProfileTod(): boolean;
  clearProfileTod(): void;
  getProfileTod(): ProfileTOD | undefined;
  setProfileTod(value?: ProfileTOD): void;

  hasProfileWoms(): boolean;
  clearProfileWoms(): void;
  getProfileWoms(): ProfileWOMS | undefined;
  setProfileWoms(value?: ProfileWOMS): void;

  hasProfileDow(): boolean;
  clearProfileDow(): void;
  getProfileDow(): ProfileDOW | undefined;
  setProfileDow(value?: ProfileDOW): void;

  hasProfileMoy(): boolean;
  clearProfileMoy(): void;
  getProfileMoy(): ProfileMOY | undefined;
  setProfileMoy(value?: ProfileMOY): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DistributionProfile.AsObject;
  static toObject(includeInstance: boolean, msg: DistributionProfile): DistributionProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DistributionProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DistributionProfile;
  static deserializeBinaryFromReader(message: DistributionProfile, reader: jspb.BinaryReader): DistributionProfile;
}

export namespace DistributionProfile {
  export type AsObject = {
    profileTod?: ProfileTOD.AsObject,
    profileWoms?: ProfileWOMS.AsObject,
    profileDow?: ProfileDOW.AsObject,
    profileMoy?: ProfileMOY.AsObject,
  }
}

export class CallProfileGroupCalls extends jspb.Message {
  getTotalCalls(): number;
  setTotalCalls(value: number): void;

  hasDistributionProfile(): boolean;
  clearDistributionProfile(): void;
  getDistributionProfile(): DistributionProfile | undefined;
  setDistributionProfile(value?: DistributionProfile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallProfileGroupCalls.AsObject;
  static toObject(includeInstance: boolean, msg: CallProfileGroupCalls): CallProfileGroupCalls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallProfileGroupCalls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallProfileGroupCalls;
  static deserializeBinaryFromReader(message: CallProfileGroupCalls, reader: jspb.BinaryReader): CallProfileGroupCalls;
}

export namespace CallProfileGroupCalls {
  export type AsObject = {
    totalCalls: number,
    distributionProfile?: DistributionProfile.AsObject,
  }
}

export class CallProfileGroupAvgs extends jspb.Message {
  getMinAverage(): number;
  setMinAverage(value: number): void;

  getMaxAverage(): number;
  setMaxAverage(value: number): void;

  hasDistributionProfile(): boolean;
  clearDistributionProfile(): void;
  getDistributionProfile(): DistributionProfile | undefined;
  setDistributionProfile(value?: DistributionProfile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallProfileGroupAvgs.AsObject;
  static toObject(includeInstance: boolean, msg: CallProfileGroupAvgs): CallProfileGroupAvgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallProfileGroupAvgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallProfileGroupAvgs;
  static deserializeBinaryFromReader(message: CallProfileGroupAvgs, reader: jspb.BinaryReader): CallProfileGroupAvgs;
}

export namespace CallProfileGroupAvgs {
  export type AsObject = {
    minAverage: number,
    maxAverage: number,
    distributionProfile?: DistributionProfile.AsObject,
  }
}

export class OptionTypes extends jspb.Message {
  hasOpenTimesOption(): boolean;
  clearOpenTimesOption(): void;
  getOpenTimesOption(): OpenTimesOptionMap[keyof OpenTimesOptionMap];
  setOpenTimesOption(value: OpenTimesOptionMap[keyof OpenTimesOptionMap]): void;

  hasAvailabilityOption(): boolean;
  clearAvailabilityOption(): void;
  getAvailabilityOption(): AvailabilityOptionMap[keyof AvailabilityOptionMap];
  setAvailabilityOption(value: AvailabilityOptionMap[keyof AvailabilityOptionMap]): void;

  getDesiredOptionCase(): OptionTypes.DesiredOptionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OptionTypes.AsObject;
  static toObject(includeInstance: boolean, msg: OptionTypes): OptionTypes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OptionTypes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OptionTypes;
  static deserializeBinaryFromReader(message: OptionTypes, reader: jspb.BinaryReader): OptionTypes;
}

export namespace OptionTypes {
  export type AsObject = {
    openTimesOption: OpenTimesOptionMap[keyof OpenTimesOptionMap],
    availabilityOption: AvailabilityOptionMap[keyof AvailabilityOptionMap],
  }

  export enum DesiredOptionCase {
    DESIRED_OPTION_NOT_SET = 0,
    OPEN_TIMES_OPTION = 1,
    AVAILABILITY_OPTION = 2,
  }
}

export class ScheduleSelector extends jspb.Message {
  getScheduleSid(): number;
  setScheduleSid(value: number): void;

  getScheduleType(): ScheduleTypeMap[keyof ScheduleTypeMap];
  setScheduleType(value: ScheduleTypeMap[keyof ScheduleTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleSelector.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleSelector): ScheduleSelector.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleSelector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleSelector;
  static deserializeBinaryFromReader(message: ScheduleSelector, reader: jspb.BinaryReader): ScheduleSelector;
}

export namespace ScheduleSelector {
  export type AsObject = {
    scheduleSid: number,
    scheduleType: ScheduleTypeMap[keyof ScheduleTypeMap],
  }
}

export class SkillProfileCategory extends jspb.Message {
  getSkillProfileCategorySid(): number;
  setSkillProfileCategorySid(value: number): void;

  getSkillProfileCategoryType(): SkillProfileCategory.CategoryTypeMap[keyof SkillProfileCategory.CategoryTypeMap];
  setSkillProfileCategoryType(value: SkillProfileCategory.CategoryTypeMap[keyof SkillProfileCategory.CategoryTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkillProfileCategory.AsObject;
  static toObject(includeInstance: boolean, msg: SkillProfileCategory): SkillProfileCategory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SkillProfileCategory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkillProfileCategory;
  static deserializeBinaryFromReader(message: SkillProfileCategory, reader: jspb.BinaryReader): SkillProfileCategory;
}

export namespace SkillProfileCategory {
  export type AsObject = {
    skillProfileCategorySid: number,
    skillProfileCategoryType: SkillProfileCategory.CategoryTypeMap[keyof SkillProfileCategory.CategoryTypeMap],
  }

  export interface CategoryTypeMap {
    SINGLE_SKILL_PROFILE: 0;
    SKILL_PROFILE_GROUP: 1;
  }

  export const CategoryType: CategoryTypeMap;
}

export class TourShiftSegmentConfig extends jspb.Message {
  getTourShiftSegmentConfigSid(): number;
  setTourShiftSegmentConfigSid(value: number): void;

  getTourShiftInstanceConfigSid(): number;
  setTourShiftInstanceConfigSid(value: number): void;

  getStartMinuteInShift(): number;
  setStartMinuteInShift(value: number): void;

  getWidthInMinutes(): number;
  setWidthInMinutes(value: number): void;

  getSchedulingActivitySid(): number;
  setSchedulingActivitySid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TourShiftSegmentConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TourShiftSegmentConfig): TourShiftSegmentConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TourShiftSegmentConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TourShiftSegmentConfig;
  static deserializeBinaryFromReader(message: TourShiftSegmentConfig, reader: jspb.BinaryReader): TourShiftSegmentConfig;
}

export namespace TourShiftSegmentConfig {
  export type AsObject = {
    tourShiftSegmentConfigSid: number,
    tourShiftInstanceConfigSid: number,
    startMinuteInShift: number,
    widthInMinutes: number,
    schedulingActivitySid: number,
  }
}

export class TourShiftInstanceConfig extends jspb.Message {
  getTourShiftInstanceConfigSid(): number;
  setTourShiftInstanceConfigSid(value: number): void;

  getTourWeekPatternSid(): number;
  setTourWeekPatternSid(value: number): void;

  getStartMinuteInWeek(): number;
  setStartMinuteInWeek(value: number): void;

  getWidthInMinutes(): number;
  setWidthInMinutes(value: number): void;

  clearMemberTourShiftSegmentConfigsList(): void;
  getMemberTourShiftSegmentConfigsList(): Array<TourShiftSegmentConfig>;
  setMemberTourShiftSegmentConfigsList(value: Array<TourShiftSegmentConfig>): void;
  addMemberTourShiftSegmentConfigs(value?: TourShiftSegmentConfig, index?: number): TourShiftSegmentConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TourShiftInstanceConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TourShiftInstanceConfig): TourShiftInstanceConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TourShiftInstanceConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TourShiftInstanceConfig;
  static deserializeBinaryFromReader(message: TourShiftInstanceConfig, reader: jspb.BinaryReader): TourShiftInstanceConfig;
}

export namespace TourShiftInstanceConfig {
  export type AsObject = {
    tourShiftInstanceConfigSid: number,
    tourWeekPatternSid: number,
    startMinuteInWeek: number,
    widthInMinutes: number,
    memberTourShiftSegmentConfigsList: Array<TourShiftSegmentConfig.AsObject>,
  }
}

export class TourWeekPattern extends jspb.Message {
  getTourWeekPatternSid(): number;
  setTourWeekPatternSid(value: number): void;

  getTourPatternSid(): number;
  setTourPatternSid(value: number): void;

  getWeekPatternNumber(): number;
  setWeekPatternNumber(value: number): void;

  clearMemberTourShiftInstanceConfigsList(): void;
  getMemberTourShiftInstanceConfigsList(): Array<TourShiftInstanceConfig>;
  setMemberTourShiftInstanceConfigsList(value: Array<TourShiftInstanceConfig>): void;
  addMemberTourShiftInstanceConfigs(value?: TourShiftInstanceConfig, index?: number): TourShiftInstanceConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TourWeekPattern.AsObject;
  static toObject(includeInstance: boolean, msg: TourWeekPattern): TourWeekPattern.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TourWeekPattern, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TourWeekPattern;
  static deserializeBinaryFromReader(message: TourWeekPattern, reader: jspb.BinaryReader): TourWeekPattern;
}

export namespace TourWeekPattern {
  export type AsObject = {
    tourWeekPatternSid: number,
    tourPatternSid: number,
    weekPatternNumber: number,
    memberTourShiftInstanceConfigsList: Array<TourShiftInstanceConfig.AsObject>,
  }
}

export class TourAgentCollection extends jspb.Message {
  getTourAgentCollectionSid(): number;
  setTourAgentCollectionSid(value: number): void;

  getTourPatternSid(): number;
  setTourPatternSid(value: number): void;

  getMinAgentsToSchedule(): number;
  setMinAgentsToSchedule(value: number): void;

  getMaxAgentsToSchedule(): number;
  setMaxAgentsToSchedule(value: number): void;

  getFirstWeekPatternNumber(): number;
  setFirstWeekPatternNumber(value: number): void;

  getName(): string;
  setName(value: string): void;

  clearWfmAgentSidsList(): void;
  getWfmAgentSidsList(): Array<number>;
  setWfmAgentSidsList(value: Array<number>): void;
  addWfmAgentSids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TourAgentCollection.AsObject;
  static toObject(includeInstance: boolean, msg: TourAgentCollection): TourAgentCollection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TourAgentCollection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TourAgentCollection;
  static deserializeBinaryFromReader(message: TourAgentCollection, reader: jspb.BinaryReader): TourAgentCollection;
}

export namespace TourAgentCollection {
  export type AsObject = {
    tourAgentCollectionSid: number,
    tourPatternSid: number,
    minAgentsToSchedule: number,
    maxAgentsToSchedule: number,
    firstWeekPatternNumber: number,
    name: string,
    wfmAgentSidsList: Array<number>,
  }
}

export class TourPattern extends jspb.Message {
  getTourPatternSid(): number;
  setTourPatternSid(value: number): void;

  getShiftTemplateSid(): number;
  setShiftTemplateSid(value: number): void;

  clearMemberTourWeekPatternsList(): void;
  getMemberTourWeekPatternsList(): Array<TourWeekPattern>;
  setMemberTourWeekPatternsList(value: Array<TourWeekPattern>): void;
  addMemberTourWeekPatterns(value?: TourWeekPattern, index?: number): TourWeekPattern;

  clearMemberTourAgentCollectionList(): void;
  getMemberTourAgentCollectionList(): Array<TourAgentCollection>;
  setMemberTourAgentCollectionList(value: Array<TourAgentCollection>): void;
  addMemberTourAgentCollection(value?: TourAgentCollection, index?: number): TourAgentCollection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TourPattern.AsObject;
  static toObject(includeInstance: boolean, msg: TourPattern): TourPattern.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TourPattern, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TourPattern;
  static deserializeBinaryFromReader(message: TourPattern, reader: jspb.BinaryReader): TourPattern;
}

export namespace TourPattern {
  export type AsObject = {
    tourPatternSid: number,
    shiftTemplateSid: number,
    memberTourWeekPatternsList: Array<TourWeekPattern.AsObject>,
    memberTourAgentCollectionList: Array<TourAgentCollection.AsObject>,
  }
}

export interface RegressionForecasterModelTypesMap {
  RANDOM_FOREST: 0;
  ADABOOST: 1;
  GRADIENT_BOOSTING: 2;
  LINEAR_REGRESSION: 3;
  LINEAR_AVG: 4;
  SEGMENTED_LINEAR: 5;
  MLP: 6;
  AUTO: 7;
}

export const RegressionForecasterModelTypes: RegressionForecasterModelTypesMap;

export interface RegressionForecasterAvgsProcessingTypeMap {
  FORECAST: 0;
  AVERAGES: 1;
  FIXED_AVERAGES: 2;
}

export const RegressionForecasterAvgsProcessingType: RegressionForecasterAvgsProcessingTypeMap;

export interface ConstraintTimeUnitMap {
  MINUTES: 0;
  HOURS: 1;
  SHIFTS: 2;
  DAYS: 3;
  WEEKS: 4;
  MONTHS: 5;
  YEARS: 6;
}

export const ConstraintTimeUnit: ConstraintTimeUnitMap;

export interface ConfigEntityTypeMap {
  CALL_CENTER_NODE: 0;
  CLIENT_NODE: 1;
  LOCATION_NODE: 2;
  PROGRAM_NODE: 3;
  AGENT_GROUP: 4;
  SHIFT_TEMPLATE: 5;
  WFM_AGENT: 6;
  PLACEMENT_RULE: 7;
  CONSTRAINT_RULE: 8;
  NON_SKILL_ACTIVITY: 9;
  AGENT_AVAILABILITY: 10;
  OPEN_TIMES: 11;
  SCHEDULING_ACTIVITY: 12;
  SKILL_PROFICIENCY: 13;
  SCHEDULE_SCENARIO: 14;
}

export const ConfigEntityType: ConfigEntityTypeMap;

export interface ConstraintRuleTypeMap {
  MIN_CONSEC_ON: 0;
  MAX_CONSEC_ON: 1;
  MIN_CONSEC_OFF: 2;
  MAX_CONSEC_OFF: 3;
  MIN_TOTAL_ON: 4;
  MAX_TOTAL_ON: 5;
  MIN_TOTAL_OFF: 6;
  MAX_TOTAL_OFF: 7;
  MIN_SKILL_LEVEL: 8;
}

export const ConstraintRuleType: ConstraintRuleTypeMap;

export interface DOWPlacementTypeMap {
  MUST_NOT: 0;
  MAY: 1;
  MUST: 2;
}

export const DOWPlacementType: DOWPlacementTypeMap;

export interface OpenTimesOptionMap {
  CLOSED: 0;
  OPEN: 1;
}

export const OpenTimesOption: OpenTimesOptionMap;

export interface AvailabilityOptionMap {
  AVAILABLE: 0;
  NOT_AVAILABLE: 1;
  PREFER_NOT_AVAILABLE: 2;
}

export const AvailabilityOption: AvailabilityOptionMap;

export interface DayOfWeekMap {
  MON: 0;
  TUE: 1;
  WED: 2;
  THU: 3;
  FRI: 4;
  SAT: 5;
  SUN: 6;
}

export const DayOfWeek: DayOfWeekMap;

export interface ConfigRelationshipTypeMap {
  IS_ASSOCIATED_WITH: 0;
  IS_NOT_ASSOCIATED_WITH: 1;
  IS_MEMBER_OF: 2;
}

export const ConfigRelationshipType: ConfigRelationshipTypeMap;

export interface DiagnosticLevelMap {
  INFORMATION: 0;
  SUGGESTION: 1;
  WARNING: 2;
  DIAGNOSTIC_ERROR: 3;
  INTERNAL_ERROR: 4;
}

export const DiagnosticLevel: DiagnosticLevelMap;

export interface DiagnosticCodeMap {
  GENERAL: 0;
  OK: 1;
  NO_SKILLS_IN_DICTIONARY: 2;
  AGENT_HAS_NO_SKILL_PROFICIENCIES: 3;
  AGENT_HAS_NO_SKILLS: 4;
  NO_SCHEDULING_ACTIVITIES_FOR_CONSTRAINT_RULES: 5;
  SCHEDULING_ACTIVITY_FOR_CONSTRAINT_RULE_NOT_FOUND: 6;
  SHIFT_TEMPLATE_CANNOT_BE_NONE: 7;
  SHIFT_TEMPLATE_HAS_NO_PLACEMENT_RULES: 8;
  NO_ONCALL_IN_SHIFT_TEMPLATE_PLACEMENT_RULES: 9;
  MIN_GT_MAX_DURATION_IN_SHIFT_TEMPLATE_PLACEMENT_RULES: 10;
  MIN_GT_MAX_AGENTS_IN_SHIFT_TEMPLATE: 11;
  NO_PLACEMENT_RULES_FOR_SHIFT_TEMPLATE: 12;
  ACTIVITIES_SHORTER_THAN_SHIFT: 13;
  NOT_ENOUGH_AGENTS_FOR_SHIFT: 14;
  PROGRAM_HAS_NO_AGENT_GROUPS: 15;
  PROGRAM_HAS_NO_SHIFT_TEMPLATES: 16;
  LOCATION_HAS_NO_PROGRAMS: 17;
  CLIENT_HAS_NO_LOCATIONS: 18;
  CALL_CENTER_HAS_NO_CLIENTS: 19;
  PROGRAM_HAS_INVALID_PARENT_LOCATION: 20;
  LOCATION_HAS_INVALID_PARENT_CLIENT: 21;
  CLIENT_HAS_INVALID_PARENT_CALL_CENTER: 22;
  AGENT_GROUP_HAS_INVALID_PARENT_NODE: 23;
  SHIFT_TEMPLATE_HAS_INVALID_PARENT_PROGRAM: 24;
  NO_SKILL_PROFICIENCY_FOR_MIN_SKILL_PROFICIENCY_CONSTRAINT_RULE: 25;
  TOO_MANY_AGENTS_WITH_LOCKED_SHIFTS_FOR_MIN_AGENTS: 26;
  AGENT_DOES_NOT_BELONG_TO_AN_AGENT_GROUP: 27;
  INVALID_CONSTRAINT_VAL_UNITS: 28;
  CONSTRAINT_GENERAL_FAILURE: 29;
  CANDIDATE_SHIFT_COLLISION_DETECTED: 30;
  CANDIDATE_SHIFT_AGENT_NOT_AVAILABLE: 31;
  CANDIDATE_CLOSED: 32;
  CONSTRAINT_ACTIVITY_NOT_FOUND: 33;
  CONSTRAINT_AGENT_DOES_NOT_HAVE_PROFICIENCY: 34;
  CONSTRAINT_AGENT_PROFICIENCY_TOO_LOW: 35;
  CONSTRAINT_MAX_TOTAL_ON_FAILURE: 36;
  CONSTRAINT_MIN_TOTAL_ON_FAILURE: 37;
  CONSTRAINT_MAX_TOTAL_OFF_FAILURE: 38;
  CONSTRAINT_MIN_TOTAL_OFF_FAILURE: 39;
  CONSTRAINT_MAX_CONSEC_ON_FAILURE: 40;
  CONSTRAINT_MIN_CONSEC_ON_FAILURE: 41;
  CONSTRAINT_MAX_CONSEC_OFF_FAILURE: 42;
  CONSTRAINT_MIN_CONSEC_OFF_FAILURE: 43;
  CONSTRAINT_CANNOT_HAVE_DAY_WEEK_MONTH_YEAR_SHIFT__PER_SHIFT: 44;
  CONSTRAINT_CANNOT_HAVE_DAY_WEEK_MONTH_YEAR__PER_MINUTES_HOURS: 45;
  CONSTRAINT_CONSECUTIVE_SHIFTS_RULE_NOT_ALLOWED: 46;
  CONSTRAINT_WITH_LARGER_PERIOD_PER_SMALL_PERIOD_NOT_ALLOWED: 47;
  CONSTRAINT_MIN_MAX_OFF_TIME_FOR_SHIFTS_NOT_ALLOWED: 48;
  CONSTRAINT_CANNOT_HAVE_CONSECUTIVE_TIME_PER_MULTIPLE_SHIFTS: 49;
}

export const DiagnosticCode: DiagnosticCodeMap;

export interface PerformanceMetricTypeMap {
  FTE_REQUIRED_VS_ACHIEVED_SIMPLE: 0;
  FTE_REQUIRED_VS_ACHIEVED_EXTENDED: 1;
  SERVICE_LEVEL_ANALYSIS: 2;
  SERVICE_LEVEL_MATRIX: 3;
  CONTACT_HANDLING_METRICS: 4;
  LOAD_FORECAST: 5;
}

export const PerformanceMetricType: PerformanceMetricTypeMap;

export interface ScheduleShouldIncludeMap {
  ONLY_SHIFT_INSTANCES: 0;
  ONLY_PERFORMANCE_METRICS: 1;
  SHIFT_INSTANCES_AND_PERFORMANCE_METRICS: 2;
}

export const ScheduleShouldInclude: ScheduleShouldIncludeMap;

export interface ScheduleTypeMap {
  DRAFT: 0;
  PUBLISHED: 1;
}

export const ScheduleType: ScheduleTypeMap;

export interface SchedulingTargetTypeMap {
  COVERAGE: 0;
  SERVICE_LEVEL: 1;
}

export const SchedulingTargetType: SchedulingTargetTypeMap;

export interface BitmapTypeMap {
  COMPLETE: 0;
  ONLY_WEEKMAPS: 1;
  ONLY_CALENDAR_ITEMS: 2;
}

export const BitmapType: BitmapTypeMap;

