// package: api.commons
// file: api/commons/wfm.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

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
  getSkillProfileCategorySid(): string;
  setSkillProfileCategorySid(value: string): void;

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
    skillProfileCategorySid: string,
    skillProfileCategoryType: SkillProfileCategory.CategoryTypeMap[keyof SkillProfileCategory.CategoryTypeMap],
  }

  export interface CategoryTypeMap {
    SINGLE_SKILL_PROFILE: 0;
    SKILL_PROFILE_GROUP: 1;
  }

  export const CategoryType: CategoryTypeMap;
}

export class SchedulingResultMetricForSkillCollection extends jspb.Message {
  getTotalInternalIntervals(): number;
  setTotalInternalIntervals(value: number): void;

  getTotalIntervalsWithFteRequired(): number;
  setTotalIntervalsWithFteRequired(value: number): void;

  getTotalIntervalsWithFtesRemaining(): number;
  setTotalIntervalsWithFtesRemaining(value: number): void;

  getCoverage(): number;
  setCoverage(value: number): void;

  getRootMeanSquare(): number;
  setRootMeanSquare(value: number): void;

  getHasResult(): boolean;
  setHasResult(value: boolean): void;

  hasSkillCollection(): boolean;
  clearSkillCollection(): void;
  getSkillCollection(): SkillProfileCategory | undefined;
  setSkillCollection(value?: SkillProfileCategory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchedulingResultMetricForSkillCollection.AsObject;
  static toObject(includeInstance: boolean, msg: SchedulingResultMetricForSkillCollection): SchedulingResultMetricForSkillCollection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SchedulingResultMetricForSkillCollection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchedulingResultMetricForSkillCollection;
  static deserializeBinaryFromReader(message: SchedulingResultMetricForSkillCollection, reader: jspb.BinaryReader): SchedulingResultMetricForSkillCollection;
}

export namespace SchedulingResultMetricForSkillCollection {
  export type AsObject = {
    totalInternalIntervals: number,
    totalIntervalsWithFteRequired: number,
    totalIntervalsWithFtesRemaining: number,
    coverage: number,
    rootMeanSquare: number,
    hasResult: boolean,
    skillCollection?: SkillProfileCategory.AsObject,
  }
}

export class SchedulingResultMetric extends jspb.Message {
  getTotalInternalIntervals(): number;
  setTotalInternalIntervals(value: number): void;

  getTotalIntervalsWithFteRequired(): number;
  setTotalIntervalsWithFteRequired(value: number): void;

  getTotalIntervalsWithFtesRemaining(): number;
  setTotalIntervalsWithFtesRemaining(value: number): void;

  getCoverage(): number;
  setCoverage(value: number): void;

  getRootMeanSquare(): number;
  setRootMeanSquare(value: number): void;

  getHasResult(): boolean;
  setHasResult(value: boolean): void;

  clearMetricsBySkillCollectionList(): void;
  getMetricsBySkillCollectionList(): Array<SchedulingResultMetricForSkillCollection>;
  setMetricsBySkillCollectionList(value: Array<SchedulingResultMetricForSkillCollection>): void;
  addMetricsBySkillCollection(value?: SchedulingResultMetricForSkillCollection, index?: number): SchedulingResultMetricForSkillCollection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchedulingResultMetric.AsObject;
  static toObject(includeInstance: boolean, msg: SchedulingResultMetric): SchedulingResultMetric.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SchedulingResultMetric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchedulingResultMetric;
  static deserializeBinaryFromReader(message: SchedulingResultMetric, reader: jspb.BinaryReader): SchedulingResultMetric;
}

export namespace SchedulingResultMetric {
  export type AsObject = {
    totalInternalIntervals: number,
    totalIntervalsWithFteRequired: number,
    totalIntervalsWithFtesRemaining: number,
    coverage: number,
    rootMeanSquare: number,
    hasResult: boolean,
    metricsBySkillCollectionList: Array<SchedulingResultMetricForSkillCollection.AsObject>,
  }
}

export class ClientHistoryCacheInfo extends jspb.Message {
  getState(): HistoryCacheStateMap[keyof HistoryCacheStateMap];
  setState(value: HistoryCacheStateMap[keyof HistoryCacheStateMap]): void;

  getProgressPercentage(): number;
  setProgressPercentage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientHistoryCacheInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ClientHistoryCacheInfo): ClientHistoryCacheInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientHistoryCacheInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientHistoryCacheInfo;
  static deserializeBinaryFromReader(message: ClientHistoryCacheInfo, reader: jspb.BinaryReader): ClientHistoryCacheInfo;
}

export namespace ClientHistoryCacheInfo {
  export type AsObject = {
    state: HistoryCacheStateMap[keyof HistoryCacheStateMap],
    progressPercentage: number,
  }
}

export class ErrorTrace extends jspb.Message {
  getGrpcTraceBin(): string;
  setGrpcTraceBin(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorTrace.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorTrace): ErrorTrace.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorTrace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorTrace;
  static deserializeBinaryFromReader(message: ErrorTrace, reader: jspb.BinaryReader): ErrorTrace;
}

export namespace ErrorTrace {
  export type AsObject = {
    grpcTraceBin: string,
  }
}

export class InitialSetupStatus extends jspb.Message {
  getState(): InitialSetupStateMap[keyof InitialSetupStateMap];
  setState(value: InitialSetupStateMap[keyof InitialSetupStateMap]): void;

  getProgressPercentage(): number;
  setProgressPercentage(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitialSetupStatus.AsObject;
  static toObject(includeInstance: boolean, msg: InitialSetupStatus): InitialSetupStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitialSetupStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitialSetupStatus;
  static deserializeBinaryFromReader(message: InitialSetupStatus, reader: jspb.BinaryReader): InitialSetupStatus;
}

export namespace InitialSetupStatus {
  export type AsObject = {
    state: InitialSetupStateMap[keyof InitialSetupStateMap],
    progressPercentage: number,
    message: string,
  }
}

export class AgentStateSegment extends jspb.Message {
  getOrderInRts(): number;
  setOrderInRts(value: number): void;

  clearStatesList(): void;
  getStatesList(): Array<RealTimeManagementStateMap[keyof RealTimeManagementStateMap]>;
  setStatesList(value: Array<RealTimeManagementStateMap[keyof RealTimeManagementStateMap]>): void;
  addStates(value: RealTimeManagementStateMap[keyof RealTimeManagementStateMap], index?: number): RealTimeManagementStateMap[keyof RealTimeManagementStateMap];

  getWidthInMinutes(): number;
  setWidthInMinutes(value: number): void;

  getWidthInSeconds(): number;
  setWidthInSeconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentStateSegment.AsObject;
  static toObject(includeInstance: boolean, msg: AgentStateSegment): AgentStateSegment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentStateSegment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentStateSegment;
  static deserializeBinaryFromReader(message: AgentStateSegment, reader: jspb.BinaryReader): AgentStateSegment;
}

export namespace AgentStateSegment {
  export type AsObject = {
    orderInRts: number,
    statesList: Array<RealTimeManagementStateMap[keyof RealTimeManagementStateMap]>,
    widthInMinutes: number,
    widthInSeconds: number,
  }
}

export class AgentStateSequence extends jspb.Message {
  getWfmAgentSid(): number;
  setWfmAgentSid(value: number): void;

  hasStartDatetime(): boolean;
  clearStartDatetime(): void;
  getStartDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDatetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearStateSegmentsList(): void;
  getStateSegmentsList(): Array<AgentStateSegment>;
  setStateSegmentsList(value: Array<AgentStateSegment>): void;
  addStateSegments(value?: AgentStateSegment, index?: number): AgentStateSegment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentStateSequence.AsObject;
  static toObject(includeInstance: boolean, msg: AgentStateSequence): AgentStateSequence.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentStateSequence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentStateSequence;
  static deserializeBinaryFromReader(message: AgentStateSequence, reader: jspb.BinaryReader): AgentStateSequence;
}

export namespace AgentStateSequence {
  export type AsObject = {
    wfmAgentSid: number,
    startDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stateSegmentsList: Array<AgentStateSegment.AsObject>,
  }
}

export class AgentLeavePetition extends jspb.Message {
  getAgentLeavePetitionId(): string;
  setAgentLeavePetitionId(value: string): void;

  getWfmAgentSid(): number;
  setWfmAgentSid(value: number): void;

  getPetitionStatus(): AgentLeavePetitionStatusMap[keyof AgentLeavePetitionStatusMap];
  setPetitionStatus(value: AgentLeavePetitionStatusMap[keyof AgentLeavePetitionStatusMap]): void;

  getPetitionComment(): string;
  setPetitionComment(value: string): void;

  getResponseComment(): string;
  setResponseComment(value: string): void;

  clearRequestedDatetimeRangesList(): void;
  getRequestedDatetimeRangesList(): Array<DatetimeRange>;
  setRequestedDatetimeRangesList(value: Array<DatetimeRange>): void;
  addRequestedDatetimeRanges(value?: DatetimeRange, index?: number): DatetimeRange;

  hasCreatedTime(): boolean;
  clearCreatedTime(): void;
  getCreatedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasArchivedTime(): boolean;
  clearArchivedTime(): void;
  getArchivedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setArchivedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasResolvedTime(): boolean;
  clearResolvedTime(): void;
  getResolvedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setResolvedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getResolvedByUserId(): string;
  setResolvedByUserId(value: string): void;

  getRequestedHoursOff(): number;
  setRequestedHoursOff(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentLeavePetition.AsObject;
  static toObject(includeInstance: boolean, msg: AgentLeavePetition): AgentLeavePetition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentLeavePetition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentLeavePetition;
  static deserializeBinaryFromReader(message: AgentLeavePetition, reader: jspb.BinaryReader): AgentLeavePetition;
}

export namespace AgentLeavePetition {
  export type AsObject = {
    agentLeavePetitionId: string,
    wfmAgentSid: number,
    petitionStatus: AgentLeavePetitionStatusMap[keyof AgentLeavePetitionStatusMap],
    petitionComment: string,
    responseComment: string,
    requestedDatetimeRangesList: Array<DatetimeRange.AsObject>,
    createdTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    archivedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    resolvedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    resolvedByUserId: string,
    requestedHoursOff: number,
  }
}

export class ConfigEntity extends jspb.Message {
  getEntitySid(): string;
  setEntitySid(value: string): void;

  getEntityType(): ConfigEntityTypeMap[keyof ConfigEntityTypeMap];
  setEntityType(value: ConfigEntityTypeMap[keyof ConfigEntityTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigEntity.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigEntity): ConfigEntity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigEntity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigEntity;
  static deserializeBinaryFromReader(message: ConfigEntity, reader: jspb.BinaryReader): ConfigEntity;
}

export namespace ConfigEntity {
  export type AsObject = {
    entitySid: string,
    entityType: ConfigEntityTypeMap[keyof ConfigEntityTypeMap],
  }
}

export class AdherenceRuleNotificationConfig extends jspb.Message {
  getAdherenceRuleNotificationConfigId(): string;
  setAdherenceRuleNotificationConfigId(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearEntriesList(): void;
  getEntriesList(): Array<AdherenceRuleNotificationConfigEntry>;
  setEntriesList(value: Array<AdherenceRuleNotificationConfigEntry>): void;
  addEntries(value?: AdherenceRuleNotificationConfigEntry, index?: number): AdherenceRuleNotificationConfigEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdherenceRuleNotificationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AdherenceRuleNotificationConfig): AdherenceRuleNotificationConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdherenceRuleNotificationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdherenceRuleNotificationConfig;
  static deserializeBinaryFromReader(message: AdherenceRuleNotificationConfig, reader: jspb.BinaryReader): AdherenceRuleNotificationConfig;
}

export namespace AdherenceRuleNotificationConfig {
  export type AsObject = {
    adherenceRuleNotificationConfigId: string,
    name: string,
    entriesList: Array<AdherenceRuleNotificationConfigEntry.AsObject>,
  }
}

export class AdherenceRuleNotificationConfigEntry extends jspb.Message {
  getAdherenceRuleNotificationConfigEntryId(): string;
  setAdherenceRuleNotificationConfigEntryId(value: string): void;

  getAdherenceRuleNotificationConfigId(): string;
  setAdherenceRuleNotificationConfigId(value: string): void;

  getRecipientUserId(): string;
  setRecipientUserId(value: string): void;

  getNotificationMedium(): AdherenceRuleNotificationMediumMap[keyof AdherenceRuleNotificationMediumMap];
  setNotificationMedium(value: AdherenceRuleNotificationMediumMap[keyof AdherenceRuleNotificationMediumMap]): void;

  getSecondsToWaitForNoResponse(): number;
  setSecondsToWaitForNoResponse(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdherenceRuleNotificationConfigEntry.AsObject;
  static toObject(includeInstance: boolean, msg: AdherenceRuleNotificationConfigEntry): AdherenceRuleNotificationConfigEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdherenceRuleNotificationConfigEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdherenceRuleNotificationConfigEntry;
  static deserializeBinaryFromReader(message: AdherenceRuleNotificationConfigEntry, reader: jspb.BinaryReader): AdherenceRuleNotificationConfigEntry;
}

export namespace AdherenceRuleNotificationConfigEntry {
  export type AsObject = {
    adherenceRuleNotificationConfigEntryId: string,
    adherenceRuleNotificationConfigId: string,
    recipientUserId: string,
    notificationMedium: AdherenceRuleNotificationMediumMap[keyof AdherenceRuleNotificationMediumMap],
    secondsToWaitForNoResponse: number,
  }
}

export class AdherenceDepartmentalRuleAction extends jspb.Message {
  getActionType(): AdherenceDepartmentalRuleActionTypeMap[keyof AdherenceDepartmentalRuleActionTypeMap];
  setActionType(value: AdherenceDepartmentalRuleActionTypeMap[keyof AdherenceDepartmentalRuleActionTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdherenceDepartmentalRuleAction.AsObject;
  static toObject(includeInstance: boolean, msg: AdherenceDepartmentalRuleAction): AdherenceDepartmentalRuleAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdherenceDepartmentalRuleAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdherenceDepartmentalRuleAction;
  static deserializeBinaryFromReader(message: AdherenceDepartmentalRuleAction, reader: jspb.BinaryReader): AdherenceDepartmentalRuleAction;
}

export namespace AdherenceDepartmentalRuleAction {
  export type AsObject = {
    actionType: AdherenceDepartmentalRuleActionTypeMap[keyof AdherenceDepartmentalRuleActionTypeMap],
  }
}

export class AdherenceDepartmentalRule extends jspb.Message {
  getAdherenceDepartmentalRuleId(): string;
  setAdherenceDepartmentalRuleId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasSelectedEntity(): boolean;
  clearSelectedEntity(): void;
  getSelectedEntity(): ConfigEntity | undefined;
  setSelectedEntity(value?: ConfigEntity): void;

  getRuleRequirementType(): AdherenceRuleRequirementTypeMap[keyof AdherenceRuleRequirementTypeMap];
  setRuleRequirementType(value: AdherenceRuleRequirementTypeMap[keyof AdherenceRuleRequirementTypeMap]): void;

  getAdherenceRuleNotificationConfigId(): string;
  setAdherenceRuleNotificationConfigId(value: string): void;

  getRuleRange(): AdherenceRuleRangeMap[keyof AdherenceRuleRangeMap];
  setRuleRange(value: AdherenceRuleRangeMap[keyof AdherenceRuleRangeMap]): void;

  hasCustomRange(): boolean;
  clearCustomRange(): void;
  getCustomRange(): DatetimeRange | undefined;
  setCustomRange(value?: DatetimeRange): void;

  clearClausesList(): void;
  getClausesList(): Array<AdherenceDepartmentalRule>;
  setClausesList(value: Array<AdherenceDepartmentalRule>): void;
  addClauses(value?: AdherenceDepartmentalRule, index?: number): AdherenceDepartmentalRule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdherenceDepartmentalRule.AsObject;
  static toObject(includeInstance: boolean, msg: AdherenceDepartmentalRule): AdherenceDepartmentalRule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdherenceDepartmentalRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdherenceDepartmentalRule;
  static deserializeBinaryFromReader(message: AdherenceDepartmentalRule, reader: jspb.BinaryReader): AdherenceDepartmentalRule;
}

export namespace AdherenceDepartmentalRule {
  export type AsObject = {
    adherenceDepartmentalRuleId: string,
    name: string,
    selectedEntity?: ConfigEntity.AsObject,
    ruleRequirementType: AdherenceRuleRequirementTypeMap[keyof AdherenceRuleRequirementTypeMap],
    adherenceRuleNotificationConfigId: string,
    ruleRange: AdherenceRuleRangeMap[keyof AdherenceRuleRangeMap],
    customRange?: DatetimeRange.AsObject,
    clausesList: Array<AdherenceDepartmentalRule.AsObject>,
  }
}

export class AdherenceDepartmentalRuleClause extends jspb.Message {
  getAdherenceDepartmentalRuleClauseId(): string;
  setAdherenceDepartmentalRuleClauseId(value: string): void;

  getAdherenceDepartmentalRuleId(): string;
  setAdherenceDepartmentalRuleId(value: string): void;

  hasAction(): boolean;
  clearAction(): void;
  getAction(): AdherenceDepartmentalRuleAction | undefined;
  setAction(value?: AdherenceDepartmentalRuleAction): void;

  getCondition(): AdherenceRuleConditionMap[keyof AdherenceRuleConditionMap];
  setCondition(value: AdherenceRuleConditionMap[keyof AdherenceRuleConditionMap]): void;

  getAmount(): number;
  setAmount(value: number): void;

  getUnit(): AdherenceRuleUnitMap[keyof AdherenceRuleUnitMap];
  setUnit(value: AdherenceRuleUnitMap[keyof AdherenceRuleUnitMap]): void;

  hasPerAmount(): boolean;
  clearPerAmount(): void;
  getPerAmount(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setPerAmount(value?: google_protobuf_wrappers_pb.Int32Value): void;

  getPerUnit(): AdherenceRuleUnitMap[keyof AdherenceRuleUnitMap];
  setPerUnit(value: AdherenceRuleUnitMap[keyof AdherenceRuleUnitMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdherenceDepartmentalRuleClause.AsObject;
  static toObject(includeInstance: boolean, msg: AdherenceDepartmentalRuleClause): AdherenceDepartmentalRuleClause.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdherenceDepartmentalRuleClause, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdherenceDepartmentalRuleClause;
  static deserializeBinaryFromReader(message: AdherenceDepartmentalRuleClause, reader: jspb.BinaryReader): AdherenceDepartmentalRuleClause;
}

export namespace AdherenceDepartmentalRuleClause {
  export type AsObject = {
    adherenceDepartmentalRuleClauseId: string,
    adherenceDepartmentalRuleId: string,
    action?: AdherenceDepartmentalRuleAction.AsObject,
    condition: AdherenceRuleConditionMap[keyof AdherenceRuleConditionMap],
    amount: number,
    unit: AdherenceRuleUnitMap[keyof AdherenceRuleUnitMap],
    perAmount?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    perUnit: AdherenceRuleUnitMap[keyof AdherenceRuleUnitMap],
  }
}

export class AdherenceAgentRule extends jspb.Message {
  getAdherenceAgentRuleId(): string;
  setAdherenceAgentRuleId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasSelectedEntity(): boolean;
  clearSelectedEntity(): void;
  getSelectedEntity(): ConfigEntity | undefined;
  setSelectedEntity(value?: ConfigEntity): void;

  getRuleRequirementType(): AdherenceRuleRequirementTypeMap[keyof AdherenceRuleRequirementTypeMap];
  setRuleRequirementType(value: AdherenceRuleRequirementTypeMap[keyof AdherenceRuleRequirementTypeMap]): void;

  getAdherenceRuleNotificationConfigId(): string;
  setAdherenceRuleNotificationConfigId(value: string): void;

  clearClausesList(): void;
  getClausesList(): Array<AdherenceAgentRuleClause>;
  setClausesList(value: Array<AdherenceAgentRuleClause>): void;
  addClauses(value?: AdherenceAgentRuleClause, index?: number): AdherenceAgentRuleClause;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdherenceAgentRule.AsObject;
  static toObject(includeInstance: boolean, msg: AdherenceAgentRule): AdherenceAgentRule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdherenceAgentRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdherenceAgentRule;
  static deserializeBinaryFromReader(message: AdherenceAgentRule, reader: jspb.BinaryReader): AdherenceAgentRule;
}

export namespace AdherenceAgentRule {
  export type AsObject = {
    adherenceAgentRuleId: string,
    name: string,
    selectedEntity?: ConfigEntity.AsObject,
    ruleRequirementType: AdherenceRuleRequirementTypeMap[keyof AdherenceRuleRequirementTypeMap],
    adherenceRuleNotificationConfigId: string,
    clausesList: Array<AdherenceAgentRuleClause.AsObject>,
  }
}

export class AdherenceAgentRuleAction extends jspb.Message {
  getActionType(): AdherenceAgentRuleActionTypeMap[keyof AdherenceAgentRuleActionTypeMap];
  setActionType(value: AdherenceAgentRuleActionTypeMap[keyof AdherenceAgentRuleActionTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdherenceAgentRuleAction.AsObject;
  static toObject(includeInstance: boolean, msg: AdherenceAgentRuleAction): AdherenceAgentRuleAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdherenceAgentRuleAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdherenceAgentRuleAction;
  static deserializeBinaryFromReader(message: AdherenceAgentRuleAction, reader: jspb.BinaryReader): AdherenceAgentRuleAction;
}

export namespace AdherenceAgentRuleAction {
  export type AsObject = {
    actionType: AdherenceAgentRuleActionTypeMap[keyof AdherenceAgentRuleActionTypeMap],
  }
}

export class AdherenceAgentRuleClause extends jspb.Message {
  getAdherenceAgentRuleClauseId(): string;
  setAdherenceAgentRuleClauseId(value: string): void;

  getAdherenceAgentRuleId(): string;
  setAdherenceAgentRuleId(value: string): void;

  hasAction(): boolean;
  clearAction(): void;
  getAction(): AdherenceAgentRuleAction | undefined;
  setAction(value?: AdherenceAgentRuleAction): void;

  getCondition(): AdherenceRuleConditionMap[keyof AdherenceRuleConditionMap];
  setCondition(value: AdherenceRuleConditionMap[keyof AdherenceRuleConditionMap]): void;

  getAmount(): number;
  setAmount(value: number): void;

  getUnit(): AdherenceRuleUnitMap[keyof AdherenceRuleUnitMap];
  setUnit(value: AdherenceRuleUnitMap[keyof AdherenceRuleUnitMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdherenceAgentRuleClause.AsObject;
  static toObject(includeInstance: boolean, msg: AdherenceAgentRuleClause): AdherenceAgentRuleClause.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdherenceAgentRuleClause, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdherenceAgentRuleClause;
  static deserializeBinaryFromReader(message: AdherenceAgentRuleClause, reader: jspb.BinaryReader): AdherenceAgentRuleClause;
}

export namespace AdherenceAgentRuleClause {
  export type AsObject = {
    adherenceAgentRuleClauseId: string,
    adherenceAgentRuleId: string,
    action?: AdherenceAgentRuleAction.AsObject,
    condition: AdherenceRuleConditionMap[keyof AdherenceRuleConditionMap],
    amount: number,
    unit: AdherenceRuleUnitMap[keyof AdherenceRuleUnitMap],
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
  SKILL: 15;
  TOUR_PATTERN: 16;
  TOUR_WEEK_PATTERN: 17;
  TOUR_SHIFT_INSTANCE_CONFIG: 18;
  TOUR_SHIFT_SEGMENT_CONFIG: 19;
  TOUR_AGENT_COLLECTION: 20;
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
  CANNOT_GENERATE_TOUR_PATTERNS_FOR_NON_TOUR_SHIFT_TEMPLATE: 50;
  TOUR_PATTERNS_NEEDED_TO_SCHEDULE_TOUR: 51;
  SHIFT_TEMPLATE_ACTIVITY_PLACEMENT_MIN_MAX_MUST_BE_MULTIPLE_OF_5_MINUTES: 52;
  NO_SHIFT_TEMPLATE_ACTIVITY_PLACEMENT_SEQUENCES_MATCH_SHIFT_MIN_MAX_WIDTH: 53;
  INVALID_TOUR_PATTERN: 54;
  INVALID_TOUR_AGENT_COLLECTION: 55;
  INVALID_TOUR_SHIFT_INSTANCE_CONFIG: 56;
  INVALID_TOUR_SHIFT_SEGMENT_CONFIG: 57;
  TOUR_SHIFT_SEGMENT_CONFIG_OVERLAP: 58;
  TOUR_SHIFT_SEGMENT_CONFIG_DOES_NOT_FIT: 59;
  TOUR_SHIFT_INSTANCE_CONFIG_OVERLAP: 60;
  WEEK_PATTERN_NUMBERS_NOT_UNIQUE_IN_TOUR_WEEK_PATTERNS: 61;
  WFM_AGENT_SIDS_NOT_UNIQUE_IN_TOUR_AGENT_COLLECTIONS: 62;
  FIST_WEEK_PATTERN_NUMBERS_NOT_UNIQUE_IN_TOUR_AGENT_COLLECTIONS: 63;
  FIRST_WEEK_PATTERN_NUMBERS_NOT_FOUND_IN_TOUR_WEEK_PATTERNS: 64;
  SHIFT_TEMPLATE_HAS_NO_ASSOCIATED_SCHEDULING_AGENT_GROUPS: 65;
  ATTEMPT_TO_BUILD_SCHEDULES_FOR_INVALID_PARENT_NODE: 66;
  SCHEDULABLE_AGENTS_DO_NOT_MEET_TEMPLATE_MINIMUM: 67;
  SCHEDULABLE_AGENTS_DO_NOT_MEET_TEMPLATE_MAXIMUM: 68;
  NO_OPEN_TIMES_SET_OR_INHERITED_BY_PROGRAM: 69;
  TOUR_AGENT_COLLECTIONS_NEEDED_TO_SCHEDULE_TOUR: 70;
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

export interface HistoryCacheStateMap {
  NOT_LOADED: 0;
  LOADING: 1;
  LOADING_COMPLETE: 2;
  LOADING_FAILED: 3;
}

export const HistoryCacheState: HistoryCacheStateMap;

export interface InitialSetupStateMap {
  NOT_SETUP: 0;
  SETTING_UP: 1;
  SETUP_COMPLETE: 2;
  FAILURE: 3;
}

export const InitialSetupState: InitialSetupStateMap;

export interface RealTimeManagementStateMap {
  UNSPECIFIED: 0;
  LOGGED_IN: 1;
  CALL_ON_HOLD: 4;
  OUTBOUND_CALL: 5;
  TRANSFER: 7;
  CONFERENCE: 8;
  READY: 9;
  NOT_READY: 10;
  WRAP_UP: 11;
  LOGGED_OUT: 13;
}

export const RealTimeManagementState: RealTimeManagementStateMap;

export interface AgentLeavePetitionStatusMap {
  UNSPECIFIED_PETITION_STATUS: 0;
  PENDING_PETITION: 1;
  APPROVED_PETITION: 2;
  DENIED_PETITION: 3;
  CANCELLED_PETITION: 4;
}

export const AgentLeavePetitionStatus: AgentLeavePetitionStatusMap;

export interface SchedulingActivityClassificationMap {
  STANDARD_SCHEDULING_ACTIVITY: 0;
  ON_CALL_ACTIVITY: 1;
  TIME_OFF_ACTIVITY: 2;
  MEETING_ACTIVITY: 3;
}

export const SchedulingActivityClassification: SchedulingActivityClassificationMap;

export interface AdherenceRuleNotificationMediumMap {
  ADHERENCE_RULE_NOTIFICATION_MEDIUM_IN_PRODUCT: 0;
  ADHERENCE_RULE_NOTIFICATION_MEDIUM_EMAIL: 1;
}

export const AdherenceRuleNotificationMedium: AdherenceRuleNotificationMediumMap;

export interface AdherenceRuleRequirementTypeMap {
  ADHERENCE_RULE_REQUIREMENT_TYPE_NOT_USED: 0;
  ADHERENCE_RULE_REQUIREMENT_TYPE_OPTIONAL: 1;
  ADHERENCE_RULE_REQUIREMENT_TYPE_MANDATORY: 2;
}

export const AdherenceRuleRequirementType: AdherenceRuleRequirementTypeMap;

export interface AdherenceRuleRangeMap {
  ADHERENCE_RULE_RANGE_START_OF_DAY: 0;
  ADHERENCE_RULE_RANGE_START_OF_WEEK: 1;
  ADHERENCE_RULE_RANGE_START_OF_MONTH: 2;
  ADHERENCE_RULE_RANGE_REST_OF_DAY: 3;
  ADHERENCE_RULE_RANGE_CUSTOM_DATE_RANGE: 4;
}

export const AdherenceRuleRange: AdherenceRuleRangeMap;

export interface AdherenceDepartmentalRuleActionTypeMap {
  ADHERENCE_DEPARTMENTAL_RULE_ACTION_TYPE_CALLS_ANSWERED: 0;
}

export const AdherenceDepartmentalRuleActionType: AdherenceDepartmentalRuleActionTypeMap;

export interface AdherenceRuleConditionMap {
  ADHERENCE_RULE_CONDITION_GREATER_THAN: 0;
  ADHERENCE_RULE_CONDITION_GREATER_THAN_EQUAL: 1;
  ADHERENCE_RULE_CONDITION_LESS_THAN: 2;
  ADHERENCE_RULE_CONDITION_LESS_THAN_EQUAL: 3;
}

export const AdherenceRuleCondition: AdherenceRuleConditionMap;

export interface AdherenceRuleUnitMap {
  ADHERENCE_RULE_UNIT_SECONDS: 0;
  ADHERENCE_RULE_UNIT_MINUTES: 1;
  ADHERENCE_RULE_UNIT_CALLS: 2;
  ADHERENCE_RULE_UNIT_PERCENTAGE: 3;
}

export const AdherenceRuleUnit: AdherenceRuleUnitMap;

export interface AdherenceAgentRuleActionTypeMap {
  ADHERENCE_AGENT_RULE_ACTION_TYPE_WRAP_UP: 0;
  ADHERENCE_AGENT_RULE_ACTION_TYPE_WAITING: 1;
  ADHERENCE_AGENT_RULE_ACTION_TYPE_MANUAL_DIAL: 2;
  ADHERENCE_AGENT_RULE_ACTION_TYPE_PREVIEW_DIAL: 3;
  ADHERENCE_AGENT_RULE_ACTION_TYPE_ANSWER_CALLS: 4;
  ADHERENCE_AGENT_RULE_ACTION_TYPE_ON_CALL: 5;
  ADHERENCE_AGENT_RULE_ACTION_TYPE_ON_HOLD: 6;
  ADHERENCE_AGENT_RULE_ACTION_TYPE_SHIFT_START: 7;
  ADHERENCE_AGENT_RULE_ACTION_TYPE_SHIFT_START_LATE: 8;
  ADHERENCE_AGENT_RULE_ACTION_TYPE_SHIFT_END_EARLY: 9;
}

export const AdherenceAgentRuleActionType: AdherenceAgentRuleActionTypeMap;

