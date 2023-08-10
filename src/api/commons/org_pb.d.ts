// package: api.commons
// file: api/commons/org.proto

import * as jspb from "google-protobuf";

export class TimeZoneWrapper extends jspb.Message {
  getValue(): TimeZoneMap[keyof TimeZoneMap];
  setValue(value: TimeZoneMap[keyof TimeZoneMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeZoneWrapper.AsObject;
  static toObject(includeInstance: boolean, msg: TimeZoneWrapper): TimeZoneWrapper.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeZoneWrapper, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeZoneWrapper;
  static deserializeBinaryFromReader(message: TimeZoneWrapper, reader: jspb.BinaryReader): TimeZoneWrapper;
}

export namespace TimeZoneWrapper {
  export type AsObject = {
    value: TimeZoneMap[keyof TimeZoneMap],
  }
}

export class DigitWrapper extends jspb.Message {
  getValue(): DigitMap[keyof DigitMap];
  setValue(value: DigitMap[keyof DigitMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DigitWrapper.AsObject;
  static toObject(includeInstance: boolean, msg: DigitWrapper): DigitWrapper.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DigitWrapper, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DigitWrapper;
  static deserializeBinaryFromReader(message: DigitWrapper, reader: jspb.BinaryReader): DigitWrapper;
}

export namespace DigitWrapper {
  export type AsObject = {
    value: DigitMap[keyof DigitMap],
  }
}

export interface TimeZoneMap {
  TIME_ZONE_AMERICA_PUERTO_RICO: 0;
  TIME_ZONE_AMERICA_NEW_YORK: 1;
  TIME_ZONE_AMERICA_INDIANAPOLIS: 2;
  TIME_ZONE_AMERICA_CHICAGO: 3;
  TIME_ZONE_AMERICA_PHOENIX: 4;
  TIME_ZONE_AMERICA_DENVER: 5;
  TIME_ZONE_AMERICA_LOS_ANGELES: 6;
  TIME_ZONE_AMERICA_ANCHORAGE: 7;
  TIME_ZONE_ASIA_MANILA: 8;
  TIME_ZONE_ASIA_CALCUTTA: 9;
  TIME_ZONE_ASIA_COLOMBO: 10;
  TIME_ZONE_PACIFIC_HONOLULU: 11;
  TIME_ZONE_CANADA_NEWFOUNDLAND: 12;
  TIME_ZONE_CANADA_ATLANTIC: 13;
  TIME_ZONE_CANADA_CENTRAL: 14;
  TIME_ZONE_CANADA_EAST_SASKATCHEWAN: 15;
  TIME_ZONE_CANADA_EASTERN: 16;
  TIME_ZONE_CANADA_MOUNTAIN: 17;
  TIME_ZONE_CANADA_PACIFIC: 18;
  TIME_ZONE_CANADA_SASKATCHEWAN: 19;
  TIME_ZONE_CANADA_YUKON: 20;
  TIME_ZONE_ETC_GREENWICH: 21;
  TIME_ZONE_ETC_UNIVERSAL: 22;
  TIME_ZONE_EUROPE_LONDON: 23;
  TIME_ZONE_EUROPE_MADRID: 24;
  TIME_ZONE_EUROPE_BERLIN: 25;
  TIME_ZONE_EUROPE_BUCHAREST: 26;
  TIME_ZONE_AMERICA_MEXICO_CITY: 27;
  TIME_ZONE_MEXICO_BAJASUR: 28;
  TIME_ZONE_MEXICO_BAJANORTE: 29;
  TIME_ZONE_BRAZIL_ACRE: 30;
  TIME_ZONE_BRAZIL_WEST: 31;
  TIME_ZONE_BRAZIL_EAST: 32;
  TIME_ZONE_BRAZIL_DENORONHA: 33;
  TIME_ZONE_AUSTRALIA_DARWIN: 34;
  TIME_ZONE_AUSTRALIA_ADELAIDE: 35;
  TIME_ZONE_AUSTRALIA_SYDNEY: 36;
  TIME_ZONE_AUSTRALIA_BRISBANE: 37;
  TIME_ZONE_AUSTRALIA_MELBOURNE: 38;
  TIME_ZONE_AUSTRALIA_PERTH: 39;
  TIME_ZONE_PACIFIC_AUCKLAND: 40;
  TIME_ZONE_PACIFIC_CHATHAM: 41;
  TIME_ZONE_ASIA_SINGAPORE: 42;
  TIME_ZONE_ASIA_JAPAN: 43;
}

export const TimeZone: TimeZoneMap;

export interface DisplayLanguageMap {
  DISPLAY_LANGUAGE_SPANISH: 0;
  DISPLAY_LANGUAGE_FRENCH_CANADA: 1;
  DISPLAY_LANGUAGE_PORTUGUESE: 2;
  DISPLAY_LANGUAGE_ENGLISH: 3;
}

export const DisplayLanguage: DisplayLanguageMap;

export interface DefaultDuplicateHandlingMap {
  DEFAULT_DUPLICATE_HANDLING_KEEP_RECORD_AND_DISCARD_NUMBER: 0;
  DEFAULT_DUPLICATE_HANDLING_DISCARD_RECORD: 1;
  DEFAULT_DUPLICATE_HANDLING_ALLOW_DUPLICATES: 2;
  DEFAULT_DUPLICATE_HANDLING_CREATE_DUPLICATES_LIST: 3;
}

export const DefaultDuplicateHandling: DefaultDuplicateHandlingMap;

export interface StandardImportFormatMap {
  STANDARD_IMPORT_FORMAT_TAB_DELIMITED: 0;
  STANDARD_IMPORT_FORMAT_EXCEL_COMMA_SEPARATED: 1;
  STANDARD_IMPORT_FORMAT_COMMA_SEPARATED: 2;
}

export const StandardImportFormat: StandardImportFormatMap;

export interface AgentInfoSortByMap {
  AGENT_INFO_SORT_BY_NONE: 0;
  AGENT_INFO_SORT_BY_AGENT: 1;
  AGENT_INFO_SORT_BY_AGENT_LAST_NAME: 2;
  AGENT_INFO_SORT_BY_AGENT_STATUS_SIMPLIFIER: 3;
  AGENT_INFO_SORT_BY_CALL_COUNT: 4;
  AGENT_INFO_SORT_BY_SECONDS_SINCE_STATUS_CHANGE: 5;
  AGENT_INFO_SORT_BY_HUNT_GROUP_NAME: 6;
  AGENT_INFO_SORT_BY_HUNT_GROUP_SID: 7;
  AGENT_INFO_SORT_BY_SESSION_LOGIN_TIME: 8;
  AGENT_INFO_SORT_BY_MULTI_HOLD_COUNT: 9;
  AGENT_INFO_SORT_BY_SIMPLE_HOLD_COUNT: 10;
  AGENT_INFO_SORT_BY_HOLD_COUNT: 11;
}

export const AgentInfoSortBy: AgentInfoSortByMap;

export interface QueueInfoSortByMap {
  QUEUE_INFO_SORT_BY_NONE: 0;
  QUEUE_INFO_SORT_BY_AVERAGE_LENGTH: 1;
  QUEUE_INFO_SORT_BY_CALL_COUNT: 4;
  QUEUE_INFO_SORT_BY_CALL_SKILLS: 5;
  QUEUE_INFO_SORT_BY_CALL_TYPE: 6;
  QUEUE_INFO_SORT_BY_MAXIMUM_LENGTH: 7;
  QUEUE_INFO_SORT_BY_QUEUED_NOTIFICATION_TYPE: 8;
}

export const QueueInfoSortBy: QueueInfoSortByMap;

export interface ClientSkinMap {
  CLIENT_SKIN_DEFAULT: 0;
  CLIENT_SKIN_TCN_BLUE: 1;
  CLIENT_SKIN_TCN_SEA_GREEN: 2;
  CLIENT_SKIN_RDS_ADVANTAGE: 3;
  CLIENT_SKIN_RSI: 4;
  CLIENT_SKIN_QUICK_CONNECT_SOLUTIONS: 5;
  CLIENT_SKIN_BRAND_BUILDER_SOLUTIONS: 6;
  CLIENT_SKIN_DEALER_SPIKE: 7;
  CLIENT_SKIN_ONTARIO_SYSTEMS: 8;
  CLIENT_SKIN_PEARSON: 9;
  CLIENT_SKIN_THE_DEBT_CORPORATION: 10;
  CLIENT_SKIN_TCN_CANADA: 11;
  CLIENT_SKIN_QUAD_CORP: 12;
  CLIENT_SKIN_BROADBAND_DYNAMICS: 13;
  CLIENT_SKIN_AKTIV_KAPITAL: 14;
  CLIENT_SKIN_COMMERCIAL_CREDIT_ADJUSTERS: 15;
  CLIENT_SKIN_NEPTUNE_INNOVATIONS: 16;
  CLIENT_SKIN_NEPTUNE_BILL_GOSLING: 17;
  CLIENT_SKIN_SOPRA: 18;
  CLIENT_SKIN_TCN_USA: 19;
  CLIENT_SKIN_TELSOLUTIONS: 20;
  CLIENT_SKIN_CREDIT_SOFT: 21;
  CLIENT_SKIN_VOICEMED: 22;
  CLIENT_SKIN_EXPERIAN: 23;
}

export const ClientSkin: ClientSkinMap;

export interface AutomaticSystemCodeMap {
  AUTOMATIC_SYSTEM_CODE_ADVANCE_STATUS: 0;
  AUTOMATIC_SYSTEM_CODE_CHANGE_PASSWORD: 2;
  AUTOMATIC_SYSTEM_CODE_CHECK_VOICE_MAIL: 3;
  AUTOMATIC_SYSTEM_CODE_MANUALLY_APPROVE_CALLS: 4;
}

export const AutomaticSystemCode: AutomaticSystemCodeMap;

export interface AdvanceStatusTypeMap {
  ADVANCE_STATUS_TYPE_PAUSED: 0;
  ADVANCE_STATUS_TYPE_WAITING: 1;
  ADVANCE_STATUS_TYPE_WRAP_UP: 2;
  ADVANCE_STATUS_TYPE_ON_CALL: 3;
}

export const AdvanceStatusType: AdvanceStatusTypeMap;

export interface AgentFieldOptionMap {
  AGENT_FIELD_OPTION_AGENT_FIRST_NAME: 0;
  AGENT_FIELD_OPTION_AGENT_ID: 1;
  AGENT_FIELD_OPTION_AGENT_LAST_NAME: 2;
  AGENT_FIELD_OPTION_AGENT_USERNAME: 3;
  AGENT_FIELD_OPTION_CALL_ID: 4;
  AGENT_FIELD_OPTION_CALLER_ID: 5;
  AGENT_FIELD_OPTION_CONSUMER_PHONE_NUMBER: 6;
  AGENT_FIELD_OPTION_GROUP_ID: 7;
  AGENT_FIELD_OPTION_HUNT_GROUP_ID: 8;
  AGENT_FIELD_OPTION_HUNT_GROUP_NAME: 9;
  AGENT_FIELD_OPTION_HUNT_GROUP_TYPE: 10;
  AGENT_FIELD_OPTION_PARTNER_AGENT_ID: 11;
}

export const AgentFieldOption: AgentFieldOptionMap;

export interface PostalFieldOptionMap {
  POSTAL_FIELD_OPTION_ADMIN_CODE_1: 0;
  POSTAL_FIELD_OPTION_ADMIN_CODE_2: 1;
  POSTAL_FIELD_OPTION_ADMIN_CODE_3: 2;
  POSTAL_FIELD_OPTION_ADMIN_NAME_1: 3;
  POSTAL_FIELD_OPTION_ADMIN_NAME_2: 4;
  POSTAL_FIELD_OPTION_ADMIN_NAME_3: 5;
  POSTAL_FIELD_OPTION_AREA_CODE: 6;
  POSTAL_FIELD_OPTION_CITY_NAME: 7;
  POSTAL_FIELD_OPTION_CITY_TYPE: 8;
  POSTAL_FIELD_OPTION_COUNRTY_CODE: 9;
  POSTAL_FIELD_OPTION_COUNTRY_ISO_2_CODE: 10;
  POSTAL_FIELD_OPTION_COUNTY_NAME: 11;
  POSTAL_FIELD_OPTION_COUNTY_FIPS_CODE: 12;
  POSTAL_FIELD_OPTION_LATITUDE: 13;
  POSTAL_FIELD_OPTION_LATITUDE_LONGITUDE_ACCURACY: 14;
  POSTAL_FIELD_OPTION_LONGITUDE: 15;
  POSTAL_FIELD_OPTION_METROPOLITAN_STATISTICAL_AREA: 16;
  POSTAL_FIELD_OPTION_OBSERVES_DAYLIGHT_SAVINGS: 17;
  POSTAL_FIELD_OPTION_PLACE_NAME: 18;
  POSTAL_FIELD_OPTION_POSTAL_CODE: 19;
  POSTAL_FIELD_OPTION_POSTAL_CODE_ALPHANUMERIC: 20;
  POSTAL_FIELD_OPTION_POSTAL_TYPE: 21;
  POSTAL_FIELD_OPTION_STATE_PROVINCE_ABBREVIATION: 22;
  POSTAL_FIELD_OPTION_STATE_PROVINCE_NAME: 23;
  POSTAL_FIELD_OPTION_STATE_FIPS_CODE: 24;
  POSTAL_FIELD_OPTION_TIME_ZONE: 25;
  POSTAL_FIELD_OPTION_UTC_OFFSET: 26;
}

export const PostalFieldOption: PostalFieldOptionMap;

export interface PhoneFieldOptionMap {
  PHONE_FIELD_OPTION_AREA_CODE: 0;
  PHONE_FIELD_OPTION_CARRIER: 1;
  PHONE_FIELD_OPTION_CENTRAL_OFFICE_CODE_TYPE: 2;
  PHONE_FIELD_OPTION_CITY: 3;
  PHONE_FIELD_OPTION_COUNTRY_CODE: 4;
  PHONE_FIELD_OPTION_COUNRTY_CODE_SUBSCRIBER_NUMBER: 5;
  PHONE_FIELD_OPTION_COUNTRY_ISO_2_CODE: 6;
  PHONE_FIELD_OPTION_INTERNATIONAL_PREFIX: 7;
  PHONE_FIELD_OPTION_LANGUAGE: 8;
  PHONE_FIELD_OPTION_LATITUDE: 9;
  PHONE_FIELD_OPTION_LONGITUDE: 10;
  PHONE_FIELD_OPTION_MAXIMUM_BLOCK_NUMBER: 11;
  PHONE_FIELD_OPTION_MINIMUM_BLOCK_NUMBER: 12;
  PHONE_FIELD_OPTION_NATIONAL_DESTINATION_CODE: 13;
  PHONE_FIELD_OPTION_NATIONAL_PREFIX: 14;
  PHONE_FIELD_OPTION_NUMBER_BLOCK_ID: 15;
  PHONE_FIELD_OPTION_NUMBER_TYPE: 16;
  PHONE_FIELD_OPTION_NUMBER_USES_NDC: 17;
  PHONE_FIELD_OPTION_OBSERVES_DAYLIGHT_SAVINGS: 18;
  PHONE_FIELD_OPTION_PREFIX: 19;
  PHONE_FIELD_OPTION_REGION_STATE_PROVINCE_CODE: 20;
  PHONE_FIELD_OPTION_REGION_STATE_PROVINCE_NAME: 21;
  PHONE_FIELD_OPTION_SPECIAL_SERVICE_CODE_1: 22;
  PHONE_FIELD_OPTION_SPECIAL_SERVICE_CODE_2: 23;
  PHONE_FIELD_OPTION_SPECIAL_SERVICE_CODE_3: 24;
  PHONE_FIELD_OPTION_SPECIAL_SERVICE_CODE_4: 25;
  PHONE_FIELD_OPTION_TIME_ZONE: 26;
  PHONE_FIELD_OPTION_UTC_OFFSET: 27;
}

export const PhoneFieldOption: PhoneFieldOptionMap;

export interface PhonePostalDisplayOptionsMap {
  DISPLAY_OPTION_ADMIN_CODE_1: 0;
  DISPLAY_OPTION_ADMIN_CODE_2: 1;
  DISPLAY_OPTION_ADMIN_CODE_3: 2;
  DISPLAY_OPTION_ADMIN_NAME_1: 3;
  DISPLAY_OPTION_ADMIN_NAME_2: 4;
  DISPLAY_OPTION_ADMIN_NAME_3: 5;
  DISPLAY_OPTION_AREA_CODE: 6;
  DISPLAY_OPTION_CARRIER: 7;
  DISPLAY_OPTION_CENTRAL_OFFICE_CODE_TYPE: 8;
  DISPLAY_OPTION_CITY: 9;
  DISPLAY_OPTION_CITY_NAME: 10;
  DISPLAY_OPTION_CITY_TYPE: 11;
  DISPLAY_OPTION_COUNTRY_CODE: 12;
  DISPLAY_OPTION_COUNTRY_CODE_SUBSCRIBER_NUMBER: 13;
  DISPLAY_OPTION_ISO_2: 14;
  DISPLAY_OPTION_COUNTY_NAME: 15;
  DISPLAY_OPTION_COUNTY_FIPS: 16;
  DISPLAY_OPTION_INTERNATIONAL_PREFIX: 17;
  DISPLAY_OPTION_LANGUAGE: 18;
  DISPLAY_OPTION_LATITUDE: 19;
  DISPLAY_OPTION_LONGITUDE_LATITUDE_ACCURACY: 20;
  DISPLAY_OPTION_LONGITUDE: 21;
  DISPLAY_OPTION_MAXIMUM_BLOCK_NUMBER: 22;
  DISPLAY_OPTION_METROPOLITAN_STATISTICAL_AREA: 23;
  DISPLAY_OPTION_MINIMUM_BLOCK_NUMBER: 24;
  DISPLAY_OPTION_NATIONAL_DESTINATION_CODE: 25;
  DISPLAY_OPTION_NATIONAL_PREFIX: 26;
  DISPLAY_OPTION_NUMBER_PREFIX: 27;
  DISPLAY_OPTION_NUMBER_TYPE: 28;
  DISPLAY_OPTION_NUMBER_USES_NDC: 29;
  DISPLAY_OPTION_OBSERVES_DAYLIGHT_SAVINGS_TIME: 30;
  DISPLAY_OPTION_PLACE_NAME: 31;
  DISPLAY_OPTION_POSTAL_CODE: 32;
  DISPLAY_OPTION_POSTAL_CODE_ALPHANUMERIC: 33;
  DISPLAY_OPTION_POSTAL_TYPE: 34;
  DISPLAY_OPTION_PROVINCE_ABBREVIATION: 35;
  DISPLAY_OPTION_PROVINCE_NAME: 36;
  DISPLAY_OPTION_SPECIAL_SERVICE_CODE_1: 37;
  DISPLAY_OPTION_SPECIAL_SERVICE_CODE_2: 38;
  DISPLAY_OPTION_SPECIAL_SERVICE_CODE_3: 39;
  DISPLAY_OPTION_SPECIAL_SERVICE_CODE_4: 40;
  DISPLAY_OPTION_PROVINCE_STATE_NAME: 41;
  DISPLAY_OPTION_STATE_FIPS_CODE: 42;
  DISPLAY_OPTION_TIME_ZONE: 43;
  DISPLAY_OPTION_UTC_OFFSET: 44;
}

export const PhonePostalDisplayOptions: PhonePostalDisplayOptionsMap;

export interface OperatorApplicationsMap {
  AGENT_APP: 0;
  ORGANIZATION_MANAGEMENT_APP: 1;
  CUSTOMER_JOURNEY_SERVICES_APP: 2;
  LIST_MANAGEMENT_SERVICES_APP: 3;
  AGENT_MANAGER_APP: 4;
  NATURAL_LANGUAGE_COMPLIANCE_APP: 6;
  VOICE_ANALYTICS_APP: 8;
  SCRIPTS_APP: 9;
  ROOM303_APP: 10;
  OMNI_BOSS_APP: 11;
  WFM_APP: 12;
  PAYMENTS_APP: 13;
  SUPPORT_APP: 15;
  BUSINESS_INTELLIGENCE_APP: 16;
  BACKOFFICE_APP: 17;
  SCORECARDS_APP: 19;
  DEV_TOOLS_APP: 20;
  LEARNING_CENTER_APP: 21;
  DELIVERY_SERVICE_APP: 22;
  PERFORMANCE_MANAGEMENT_APP: 23;
  TICKETS_APP: 31;
  AGENT_BETA_APP: 32;
  NEWSROOM_APP: 33;
}

export const OperatorApplications: OperatorApplicationsMap;

export interface AnnouncementMixingOptionMap {
  ANNOUNCEMENT_MIXING_OPTION_MUTE_HOLD_MUSIC: 0;
  ANNOUNCEMENT_MIXING_OPTION_PLAY_OVER_HOLD_MUSIC: 1;
}

export const AnnouncementMixingOption: AnnouncementMixingOptionMap;

export interface InboundOverrideOptionMap {
  INBOUND_OVERRIDE_OPTION_DO_NOTHING: 0;
  INBOUND_OVERRIDE_OPTION_OVERRIDE: 1;
  INBOUND_OVERRIDE_OPTION_HANG_UP: 2;
}

export const InboundOverrideOption: InboundOverrideOptionMap;

export interface DigitMap {
  DIGIT_ZERO: 0;
  DIGIT_ONE: 1;
  DIGIT_TWO: 2;
  DIGIT_THREE: 3;
  DIGIT_FOUR: 4;
  DIGIT_FIVE: 5;
  DIGIT_SIX: 6;
  DIGIT_SEVEN: 7;
  DIGIT_EIGHT: 8;
  DIGIT_NINE: 9;
}

export const Digit: DigitMap;

export interface IntercomConnectionMap {
  INTERCOM_CONNECTION_AUTOMATIC: 0;
  INTERCOM_CONNECTION_REQUIRE_ACCEPTANCE: 1;
}

export const IntercomConnection: IntercomConnectionMap;

export interface ConfigSoundMap {
  CONFIG_SOUND_ONE: 0;
  CONFIG_SOUND_NUMBER_1: 38;
  CONFIG_SOUND_NUMBER_2: 39;
  CONFIG_SOUND_NUMBER_3: 40;
  CONFIG_SOUND_NUMBER_4: 41;
  CONFIG_SOUND_NUMBER_5: 42;
  CONFIG_SOUND_NUMBER_6: 43;
  CONFIG_SOUND_NUMBER_7: 44;
  CONFIG_SOUND_NUMBER_8: 45;
  CONFIG_SOUND_NUMBER_9: 46;
  CONFIG_SOUND_NUMBER_10: 47;
  CONFIG_SOUND_NUMBER_11: 48;
  CONFIG_SOUND_NUMBER_12: 49;
  CONFIG_SOUND_NUMBER_13: 50;
  CONFIG_SOUND_NUMBER_14: 51;
  CONFIG_SOUND_NUMBER_15: 52;
  CONFIG_SOUND_NUMBER_16: 53;
  CONFIG_SOUND_NUMBER_17: 54;
  CONFIG_SOUND_NUMBER_18: 55;
  CONFIG_SOUND_NUMBER_19: 56;
  CONFIG_SOUND_NUMBER_20: 57;
  CONFIG_SOUND_NUMBER_21: 58;
  CONFIG_SOUND_NUMBER_22: 59;
  CONFIG_SOUND_NUMBER_23: 60;
  CONFIG_SOUND_NUMBER_24: 61;
  CONFIG_SOUND_NUMBER_25: 62;
  CONFIG_SOUND_NUMBER_26: 63;
  CONFIG_SOUND_NUMBER_27: 64;
  CONFIG_SOUND_NUMBER_28: 65;
  CONFIG_SOUND_NUMBER_29: 66;
  CONFIG_SOUND_NUMBER_30: 67;
  CONFIG_SOUND_NUMBER_31: 68;
  CONFIG_SOUND_NUMBER_32: 69;
  CONFIG_SOUND_NUMBER_33: 70;
  CONFIG_SOUND_NUMBER_34: 71;
  CONFIG_SOUND_NUMBER_35: 72;
  CONFIG_SOUND_NUMBER_36: 73;
  CONFIG_SOUND_NUMBER_37: 74;
  CONFIG_SOUND_NUMBER_38: 75;
  CONFIG_SOUND_NUMBER_39: 76;
  CONFIG_SOUND_NUMBER_40: 77;
  CONFIG_SOUND_NUMBER_41: 78;
  CONFIG_SOUND_NUMBER_42: 79;
  CONFIG_SOUND_NUMBER_43: 80;
  CONFIG_SOUND_NUMBER_44: 81;
  CONFIG_SOUND_NUMBER_45: 82;
  CONFIG_SOUND_NUMBER_46: 83;
  CONFIG_SOUND_NUMBER_47: 84;
  CONFIG_SOUND_NUMBER_48: 85;
  CONFIG_SOUND_NUMBER_49: 86;
  CONFIG_SOUND_NUMBER_50: 87;
  CONFIG_SOUND_NUMBER_51: 88;
  CONFIG_SOUND_NUMBER_52: 89;
  CONFIG_SOUND_NUMBER_53: 90;
  CONFIG_SOUND_NUMBER_54: 91;
  CONFIG_SOUND_NUMBER_55: 92;
  CONFIG_SOUND_NUMBER_56: 93;
  CONFIG_SOUND_NUMBER_57: 94;
  CONFIG_SOUND_NUMBER_58: 95;
  CONFIG_SOUND_NUMBER_59: 96;
  CONFIG_SOUND_NUMBER_60: 97;
  CONFIG_SOUND_NUMBER_61: 98;
  CONFIG_SOUND_NUMBER_62: 99;
  CONFIG_SOUND_NUMBER_63: 100;
  CONFIG_SOUND_NUMBER_64: 101;
  CONFIG_SOUND_NUMBER_65: 102;
  CONFIG_SOUND_NUMBER_66: 103;
  CONFIG_SOUND_NUMBER_67: 104;
  CONFIG_SOUND_NUMBER_68: 105;
  CONFIG_SOUND_NUMBER_69: 106;
  CONFIG_SOUND_NUMBER_70: 107;
  CONFIG_SOUND_NUMBER_71: 108;
  CONFIG_SOUND_NUMBER_72: 109;
  CONFIG_SOUND_NUMBER_73: 110;
  CONFIG_SOUND_NUMBER_74: 111;
  CONFIG_SOUND_NUMBER_75: 112;
  CONFIG_SOUND_NUMBER_76: 113;
  CONFIG_SOUND_NUMBER_77: 114;
  CONFIG_SOUND_NUMBER_78: 115;
  CONFIG_SOUND_NUMBER_79: 116;
  CONFIG_SOUND_NUMBER_80: 117;
  CONFIG_SOUND_NUMBER_81: 118;
  CONFIG_SOUND_NUMBER_82: 119;
  CONFIG_SOUND_NUMBER_83: 120;
  CONFIG_SOUND_NUMBER_84: 121;
  CONFIG_SOUND_NUMBER_85: 122;
  CONFIG_SOUND_NUMBER_86: 123;
  CONFIG_SOUND_NUMBER_87: 124;
  CONFIG_SOUND_NUMBER_88: 125;
  CONFIG_SOUND_NUMBER_89: 126;
  CONFIG_SOUND_NUMBER_90: 127;
  CONFIG_SOUND_NUMBER_91: 128;
  CONFIG_SOUND_NUMBER_92: 129;
  CONFIG_SOUND_NUMBER_93: 130;
  CONFIG_SOUND_NUMBER_94: 131;
  CONFIG_SOUND_NUMBER_95: 132;
  CONFIG_SOUND_NUMBER_96: 133;
  CONFIG_SOUND_NUMBER_97: 134;
  CONFIG_SOUND_NUMBER_98: 135;
  CONFIG_SOUND_NUMBER_99: 136;
  CONFIG_SOUND_NUMBER_100: 278;
  CONFIG_SOUND_ORDINAL_1: 137;
  CONFIG_SOUND_ORDINAL_2: 138;
  CONFIG_SOUND_ORDINAL_3: 139;
  CONFIG_SOUND_ORDINAL_4: 140;
  CONFIG_SOUND_ORDINAL_5: 141;
  CONFIG_SOUND_ORDINAL_6: 142;
  CONFIG_SOUND_ORDINAL_7: 143;
  CONFIG_SOUND_ORDINAL_8: 144;
  CONFIG_SOUND_ORDINAL_9: 145;
  CONFIG_SOUND_ORDINAL_10: 146;
  CONFIG_SOUND_ORDINAL_11: 147;
  CONFIG_SOUND_ORDINAL_12: 148;
  CONFIG_SOUND_ORDINAL_13: 149;
  CONFIG_SOUND_ORDINAL_14: 150;
  CONFIG_SOUND_ORDINAL_15: 151;
  CONFIG_SOUND_ORDINAL_16: 152;
  CONFIG_SOUND_ORDINAL_17: 153;
  CONFIG_SOUND_ORDINAL_18: 154;
  CONFIG_SOUND_ORDINAL_19: 155;
  CONFIG_SOUND_ORDINAL_20: 156;
  CONFIG_SOUND_ORDINAL_21: 157;
  CONFIG_SOUND_ORDINAL_22: 158;
  CONFIG_SOUND_ORDINAL_23: 159;
  CONFIG_SOUND_ORDINAL_24: 160;
  CONFIG_SOUND_ORDINAL_25: 161;
  CONFIG_SOUND_ORDINAL_26: 162;
  CONFIG_SOUND_ORDINAL_27: 163;
  CONFIG_SOUND_ORDINAL_28: 164;
  CONFIG_SOUND_ORDINAL_29: 165;
  CONFIG_SOUND_ORDINAL_30: 166;
  CONFIG_SOUND_ORDINAL_31: 167;
  CONFIG_SOUND_ORDINAL_32: 168;
  CONFIG_SOUND_ORDINAL_33: 169;
  CONFIG_SOUND_ORDINAL_34: 170;
  CONFIG_SOUND_ORDINAL_35: 171;
  CONFIG_SOUND_ORDINAL_36: 172;
  CONFIG_SOUND_ORDINAL_37: 173;
  CONFIG_SOUND_ORDINAL_38: 174;
  CONFIG_SOUND_ORDINAL_39: 175;
  CONFIG_SOUND_ORDINAL_40: 176;
  CONFIG_SOUND_ORDINAL_41: 177;
  CONFIG_SOUND_ORDINAL_42: 178;
  CONFIG_SOUND_ORDINAL_43: 179;
  CONFIG_SOUND_ORDINAL_44: 180;
  CONFIG_SOUND_ORDINAL_45: 181;
  CONFIG_SOUND_ORDINAL_46: 182;
  CONFIG_SOUND_ORDINAL_47: 183;
  CONFIG_SOUND_ORDINAL_48: 184;
  CONFIG_SOUND_ORDINAL_49: 185;
  CONFIG_SOUND_ORDINAL_50: 186;
  CONFIG_SOUND_ORDINAL_51: 187;
  CONFIG_SOUND_ORDINAL_52: 188;
  CONFIG_SOUND_ORDINAL_53: 189;
  CONFIG_SOUND_ORDINAL_54: 190;
  CONFIG_SOUND_ORDINAL_55: 191;
  CONFIG_SOUND_ORDINAL_56: 192;
  CONFIG_SOUND_ORDINAL_57: 193;
  CONFIG_SOUND_ORDINAL_58: 194;
  CONFIG_SOUND_ORDINAL_59: 195;
  CONFIG_SOUND_ORDINAL_60: 196;
  CONFIG_SOUND_ORDINAL_61: 197;
  CONFIG_SOUND_ORDINAL_62: 198;
  CONFIG_SOUND_ORDINAL_63: 199;
  CONFIG_SOUND_ORDINAL_64: 200;
  CONFIG_SOUND_ORDINAL_65: 201;
  CONFIG_SOUND_ORDINAL_66: 202;
  CONFIG_SOUND_ORDINAL_67: 203;
  CONFIG_SOUND_ORDINAL_68: 204;
  CONFIG_SOUND_ORDINAL_69: 205;
  CONFIG_SOUND_ORDINAL_70: 206;
  CONFIG_SOUND_ORDINAL_71: 207;
  CONFIG_SOUND_ORDINAL_72: 208;
  CONFIG_SOUND_ORDINAL_73: 209;
  CONFIG_SOUND_ORDINAL_74: 210;
  CONFIG_SOUND_ORDINAL_75: 211;
  CONFIG_SOUND_ORDINAL_76: 212;
  CONFIG_SOUND_ORDINAL_77: 213;
  CONFIG_SOUND_ORDINAL_78: 214;
  CONFIG_SOUND_ORDINAL_79: 215;
  CONFIG_SOUND_ORDINAL_80: 216;
  CONFIG_SOUND_ORDINAL_81: 217;
  CONFIG_SOUND_ORDINAL_82: 218;
  CONFIG_SOUND_ORDINAL_83: 219;
  CONFIG_SOUND_ORDINAL_84: 220;
  CONFIG_SOUND_ORDINAL_85: 221;
  CONFIG_SOUND_ORDINAL_86: 222;
  CONFIG_SOUND_ORDINAL_87: 223;
  CONFIG_SOUND_ORDINAL_88: 224;
  CONFIG_SOUND_ORDINAL_89: 225;
  CONFIG_SOUND_ORDINAL_90: 226;
  CONFIG_SOUND_ORDINAL_91: 227;
  CONFIG_SOUND_ORDINAL_92: 228;
  CONFIG_SOUND_ORDINAL_93: 229;
  CONFIG_SOUND_ORDINAL_94: 230;
  CONFIG_SOUND_ORDINAL_95: 231;
  CONFIG_SOUND_ORDINAL_96: 232;
  CONFIG_SOUND_ORDINAL_97: 233;
  CONFIG_SOUND_ORDINAL_98: 234;
  CONFIG_SOUND_ORDINAL_99: 235;
  CONFIG_SOUND_ORDINAL_100: 279;
  CONFIG_SOUND_AGENTLOGIN_CALL_ENDED: 236;
  CONFIG_SOUND_AGENTLOGIN_TRUMPET: 237;
  CONFIG_SOUND_ANNOUNCE_POSITION_END: 238;
  CONFIG_SOUND_ANNOUNCE_POSITION_SHORTLY: 239;
  CONFIG_SOUND_ANNOUNCE_POSITION_START: 240;
  CONFIG_SOUND_ANNOUNCE_TIME_END: 241;
  CONFIG_SOUND_ANNOUNCE_TIME_SHORTLY: 242;
  CONFIG_SOUND_ANNOUNCE_TIME_START: 243;
  CONFIG_SOUND_BEEP: 244;
  CONFIG_SOUND_FPM_CALM_RIVER: 245;
  CONFIG_SOUND_NBDY_AVAIL_TO_TAKE_CALL: 246;
  CONFIG_SOUND_PBX_AGENT_RING: 247;
  CONFIG_SOUND_INBOUND_AGENT_JOIN: 248;
  CONFIG_SOUND_INBOUND_AGENT_LEAVE: 249;
  CONFIG_SOUND_INBOUND_CALLER_JOIN: 250;
  CONFIG_SOUND_INBOUND_CALLER_LEAVE: 251;
  CONFIG_SOUND_INBOUND_MOH: 252;
  CONFIG_SOUND_INBOUND_NOBODY_AVAILABLE: 253;
  CONFIG_SOUND_INBOUND_QUEUE_CALLBACK: 254;
  CONFIG_SOUND_OUTBOUND_AGENT_JOIN: 255;
  CONFIG_SOUND_OUTBOUND_AGENT_LEAVE: 256;
  CONFIG_SOUND_OUTBOUND_CALLER_JOIN: 257;
  CONFIG_SOUND_OUTBOUND_CALLER_LEAVE: 258;
  CONFIG_SOUND_OUTBOUND_MOH: 259;
  CONFIG_SOUND_OUTBOUND_NOBODY_AVAILABLE: 260;
  CONFIG_SOUND_OUTBOUND_QUEUE_CALLBACK: 261;
  CONFIG_SOUND_PREVIEW_AGENT_JOIN: 262;
  CONFIG_SOUND_PREVIEW_AGENT_LEAVE: 263;
  CONFIG_SOUND_PREVIEW_AGENT_PREPARE: 264;
  CONFIG_SOUND_PREVIEW_CALLER_JOIN: 265;
  CONFIG_SOUND_PREVIEW_CALLER_LEAVE: 266;
  CONFIG_SOUND_PREVIEW_MOH: 267;
  CONFIG_SOUND_PREVIEW_NOBODY_AVAILABLE: 268;
  CONFIG_SOUND_PREVIEW_QUEUE_CALLBACK: 269;
  CONFIG_SOUND_MANUAL_AGENT_JOIN: 270;
  CONFIG_SOUND_MANUAL_AGENT_LEAVE: 271;
  CONFIG_SOUND_MANUAL_AGENT_PREPARE: 272;
  CONFIG_SOUND_MANUAL_CALLER_JOIN: 273;
  CONFIG_SOUND_MANUAL_CALLER_LEAVE: 274;
  CONFIG_SOUND_MANUAL_MOH: 275;
  CONFIG_SOUND_MANUAL_NOBODY_AVAILABLE: 276;
  CONFIG_SOUND_MANUAL_QUEUE_CALLBACK: 277;
  CONFIG_SOUND_OUTBOUND_MOH_HOLD: 280;
  CONFIG_SOUND_OUTBOUND_MOH_MULTIACCEPT: 281;
  CONFIG_SOUND_OUTBOUND_MOH_TRANSFER: 282;
  CONFIG_SOUND_INBOUND_MOH_HOLD: 283;
  CONFIG_SOUND_INBOUND_MOH_MULTIACCEPT: 284;
  CONFIG_SOUND_INBOUND_MOH_TRANSFER: 285;
  CONFIG_SOUND_PREVIEW_MOH_HOLD: 286;
  CONFIG_SOUND_PREVIEW_MOH_MULTIACCEPT: 287;
  CONFIG_SOUND_PREVIEW_MOH_TRANSFER: 288;
  CONFIG_SOUND_MANUAL_MOH_HOLD: 289;
  CONFIG_SOUND_MANUAL_MOH_MULTIACCEPT: 290;
  CONFIG_SOUND_MANUAL_MOH_TRANSFER: 291;
  CONFIG_SOUND_CALLBACK_QUEUED_ALREADY: 292;
}

export const ConfigSound: ConfigSoundMap;

export interface SoundLanguageMap {
  SOUND_LANGUAGE_ENGLISH: 0;
  SOUND_LANGUAGE_FRENCH: 1;
  SOUND_LANGUAGE_PORTUGUESE: 5;
  SOUND_LANGUAGE_SPANISH: 6;
  SOUND_LANGUAGE_AU_ENGLISH: 7;
}

export const SoundLanguage: SoundLanguageMap;

export interface SoundGenderMap {
  SOUND_GENDER_MALE: 0;
  SOUND_GENDER_FEMALE: 1;
}

export const SoundGender: SoundGenderMap;

export interface IdentityProviderMap {
  CONNECTION_TYPE_NONE: 0;
  CONNECTION_TYPE_OKTA: 1;
  CONNECTION_TYPE_AZURE: 2;
  CONNECTION_TYPE_ADFS: 3;
  CONNECTION_TYPE_OIDC: 4;
}

export const IdentityProvider: IdentityProviderMap;

export interface RecordingFileTypeMap {
  RECORDING_FILE_TYPE_WAV: 0;
  RECORDING_FILE_TYPE_MP3: 1;
}

export const RecordingFileType: RecordingFileTypeMap;

export interface InitialAgentStatusMap {
  INITIAL_AGENT_STATUS_READY: 0;
  INITIAL_AGENT_STATUS_PAUSED: 1;
}

export const InitialAgentStatus: InitialAgentStatusMap;

export interface AgentRoutingMap {
  AGENT_ROUTING_ANY_AGENT: 0;
  AGENT_ROUTING_ORIGINAL_AGENT_PREFERRED: 1;
  AGENT_ROUTING_ORIGINAL_AGENT_REQUIRED: 2;
}

export const AgentRouting: AgentRoutingMap;

export interface AlphanumericKeypadDelimiterMap {
  ALPHANUMERIC_KEYPAD_DELIMITER_ASTERISK: 0;
  ALPHANUMERIC_KEYPAD_DELIMITER_POUND: 1;
  ALPHANUMERIC_KEYPAD_DELIMITER_SPACE: 2;
}

export const AlphanumericKeypadDelimiter: AlphanumericKeypadDelimiterMap;

export interface AgentCallHistoryScopeMap {
  AGENT_CALL_HISTORY_SCOPE_NONE: 0;
  AGENT_CALL_HISTORY_SCOPE_AGENT_SESSION_STATISTICS: 1;
  AGENT_CALL_HISTORY_SCOPE_TODAYS_STATISTICS: 2;
}

export const AgentCallHistoryScope: AgentCallHistoryScopeMap;

export interface CommunicationExpirationMap {
  COMMUNICATION_EXPIRATION_NEVER: 0;
  COMMUNICATION_EXPIRATION_ONE_HOUR: 1;
  COMMUNICATION_EXPIRATION_TWO_HOURS: 2;
  COMMUNICATION_EXPIRATION_THREE_HOURS: 3;
  COMMUNICATION_EXPIRATION_FOUR_HOURS: 4;
  COMMUNICATION_EXPIRATION_FIVE_HOURS: 5;
  COMMUNICATION_EXPIRATION_SIX_HOURS: 6;
  COMMUNICATION_EXPIRATION_SEVEN_HOURS: 7;
  COMMUNICATION_EXPIRATION_EIGHT_HOURS: 8;
  COMMUNICATION_EXPIRATION_NINE_HOURS: 9;
  COMMUNICATION_EXPIRATION_TEN_HOURS: 10;
  COMMUNICATION_EXPIRATION_ELEVEN_HOURS: 11;
  COMMUNICATION_EXPIRATION_TWELVE_HOURS: 12;
  COMMUNICATION_EXPIRATION_THIRTEEN_HOURS: 13;
  COMMUNICATION_EXPIRATION_SIXTEEN_HOURS: 16;
  COMMUNICATION_EXPIRATION_TWENTY_HOURS: 20;
  COMMUNICATION_EXPIRATION_TWENTY_FOUR_HOURS: 24;
  COMMUNICATION_EXPIRATION_THIRTY_SIX_HOURS: 36;
  COMMUNICATION_EXPIRATION_TWO_DAYS: 48;
  COMMUNICATION_EXPIRATION_THREE_DAYS: 72;
  COMMUNICATION_EXPIRATION_FOUR_DAYS: 96;
  COMMUNICATION_EXPIRATION_FIVE_DAYS: 120;
  COMMUNICATION_EXPIRATION_SIX_DAYS: 144;
  COMMUNICATION_EXPIRATION_ONE_WEEK: 168;
  COMMUNICATION_EXPIRATION_TWO_WEEKS: 336;
  COMMUNICATION_EXPIRATION_THREE_WEEKS: 504;
  COMMUNICATION_EXPIRATION_FOUR_WEEKS: 672;
  COMMUNICATION_EXPIRATION_ONE_MONTH: 720;
  COMMUNICATION_EXPIRATION_TWO_MONTHS: 1440;
  COMMUNICATION_EXPIRATION_THREE_MONTHS: 2160;
  COMMUNICATION_EXPIRATION_SIX_MONTHS: 4320;
  COMMUNICATION_EXPIRATION_NINE_MONTHS: 6480;
  COMMUNICATION_EXPIRATION_ONE_YEAR: 8760;
  COMMUNICATION_EXPIRATION_THIRTEEN_MONTHS: 9360;
}

export const CommunicationExpiration: CommunicationExpirationMap;

export interface DefaultCallbackRoutingMap {
  DEFAULT_CALLBACK_ROUTING_NONE: 0;
  DEFAULT_CALLBACK_ROUTING_TO_AGENT: 1;
  DEFAULT_CALLBACK_ROUTING_AGENT_SKILLSET: 2;
}

export const DefaultCallbackRouting: DefaultCallbackRoutingMap;

export interface XMLPropertyKeyMap {
  XML_PROPERTY_KEY_NONE: 0;
  XML_PROPERTY_KEY_AGENT_DISPOSITION_CONDITIONAL_DNCL: 1;
  XML_PROPERTY_KEY_AGENT_LOGIN_GUI_STATISTICS_TEMPLATE: 2;
  XML_PROPERTY_KEY_AGENT_PAUSE_CODES: 3;
  XML_PROPERTY_KEY_AGENT_SKILLS_FILTER: 4;
  XML_PROPERTY_KEY_AGENT_STATUS_DASHBOARD_TEMPLATE: 5;
  XML_PROPERTY_KEY_AGENT_STATUS_DISPLAY_TEMPLATE: 6;
  XML_PROPERTY_KEY_CALLER_ID_BUCKET: 7;
  XML_PROPERTY_KEY_CAMPAIGN_LINK: 8;
  XML_PROPERTY_KEY_CONTACTS_SORTORDER_TEMPLATE: 9;
  XML_PROPERTY_KEY_CRITERIA_DATA: 10;
  XML_PROPERTY_KEY_CUSTOMER_CALL_CODES: 11;
  XML_PROPERTY_KEY_CUSTOM_REPORT_FILTER: 12;
  XML_PROPERTY_KEY_DATA_DIP_CONFIG: 13;
  XML_PROPERTY_KEY_EXTENDED_CONDITIONAL_DIALING: 14;
  XML_PROPERTY_KEY_GENERIC_STATISTICS_TABLE_FORMATTING_TEMPLATE: 15;
  XML_PROPERTY_KEY_HG_CLIENT_INFO_DISPLAY_TEMPLATE: 16;
  XML_PROPERTY_KEY_HUNT_GROUP_SCRIPT: 17;
  XML_PROPERTY_KEY_OPERATIONAL_RESPONSE_STATS_TEMPLATE: 18;
  XML_PROPERTY_KEY_QUEUE_HOLD_INFO_DASHBOARD_TEMPLATE: 19;
  XML_PROPERTY_KEY_REPORT_RESULT_MAPPING: 20;
  XML_PROPERTY_KEY_RESPONSE_EVALUATOR: 21;
  XML_PROPERTY_KEY_STOP_TRIGGER: 22;
  XML_PROPERTY_KEY_TASK_GROUP_REPORT_FILTER: 23;
}

export const XMLPropertyKey: XMLPropertyKeyMap;

export interface DefaultManualCallRecordingMap {
  DEFAULT_MANUAL_CALL_RECORDING_ORG_DEFAULT: 0;
  DEFAULT_MANUAL_CALL_RECORDING_ENABLED: 1;
  DEFAULT_MANUAL_CALL_RECORDING_DISABLED: 2;
}

export const DefaultManualCallRecording: DefaultManualCallRecordingMap;

export interface HuntGroupOrgDefaultCustomMap {
  HUNT_GROUP_USE_ORG_DEFAULT: 0;
  HUNT_GROUP_CUSTOM_ENABLED: 1;
  HUNT_GROUP_CUSTOM_DISABLED: 2;
}

export const HuntGroupOrgDefaultCustom: HuntGroupOrgDefaultCustomMap;

export interface ManualDialTimeZoneValidationMap {
  MANUAL_DIAL_TIME_ZONE_VALIDATION_DISABLED: 0;
  MANUAL_DIAL_TIME_ZONE_VALIDATION_OPTIONAL: 1;
  MANUAL_DIAL_TIME_ZONE_VALIDATION_REQUIRED: 2;
}

export const ManualDialTimeZoneValidation: ManualDialTimeZoneValidationMap;

export interface TransferRecordingStatusMap {
  TRANSFER_RECORDING_STATUS_KEEP_STATUS: 0;
  TRANSFER_RECORDING_STATUS_START_RECORDING: 1;
  TRANSFER_RECORDING_STATUS_STOP_RECORDING: 2;
}

export const TransferRecordingStatus: TransferRecordingStatusMap;

export interface RequeueTransferQueueConfigMap {
  REQUEUE_TRANSFER_QUEUE_CONFIG_CURRENT: 0;
  REQUEUE_TRANSFER_QUEUE_CONFIG_DEFAULT: 1;
  REQUEUE_TRANSFER_QUEUE_CONFIG_CUSTOM: 2;
}

export const RequeueTransferQueueConfig: RequeueTransferQueueConfigMap;

export interface DefaultTransferCallerIdMap {
  DEFAULT_CALLER_ID_NONE: 0;
  DEFAULT_CALLER_ID_CUSTOM: 1;
  DEFAULT_CALLER_ID_3RD_PARTY_NUMBER: 2;
}

export const DefaultTransferCallerId: DefaultTransferCallerIdMap;

export interface DefaultManualDialCallerIdMap {
  DEFAULT_MANUAL_DIAL_CALLER_ID_NONE: 0;
  DEFAULT_MANUAL_DIAL_CALLER_ID_CUSTOM: 1;
  DEFAULT_MANUAL_DIAL_CALLER_ID_AGENT_CALLER_ID: 2;
}

export const DefaultManualDialCallerId: DefaultManualDialCallerIdMap;

export interface ManualDialDataDipScopeMap {
  MANUAL_DIAL_DATA_DIP_SCOPE_DISABLED: 0;
  MANUAL_DIAL_DATA_DIP_SCOPE_STANDARD_CALLS: 1;
  MANUAL_DIAL_DATA_DIP_SCOPE_SCHEDULED_CALLBACKS: 2;
  MANUAL_DIAL_DATA_DIP_SCOPE_ALL: 3;
}

export const ManualDialDataDipScope: ManualDialDataDipScopeMap;

export interface ManualDialDataDipHandlingMap {
  MANUAL_DIAL_DATA_DIP_HANDLING_CANCEL: 0;
  MANUAL_DIAL_DATA_DIP_HANDLING_NOTIFY_AND_CANCEL: 1;
  MANUAL_DIAL_DATA_DIP_HANDLING_NOTIFY_AND_CALL: 2;
  MANUAL_DIAL_DATA_DIP_HANDLING_CALL_WITH_ORIGINAL_VALUES: 3;
}

export const ManualDialDataDipHandling: ManualDialDataDipHandlingMap;

export interface ManualDialDataDipIntegrationMap {
  MANUAL_DIAL_DATA_DIP_INTEGRATION_UNSPECIFIED: 0;
  MANUAL_DIAL_DATA_DIP_INTEGRATION_NUMBER: 1;
  MANUAL_DIAL_DATA_DIP_INTEGRATION_CALLER_ID: 2;
  MANUAL_DIAL_DATA_DIP_INTEGRATION_CONTACT_FIELD_DESCRIPTION: 3;
}

export const ManualDialDataDipIntegration: ManualDialDataDipIntegrationMap;

export interface DataDipTemplateFilterTypeMap {
  DATA_DIP_TEMPLATE_FILTER_TYPE_NONE: 0;
  DATA_DIP_TEMPLATE_FILTER_TYPE_BROADCAST: 1;
  DATA_DIP_TEMPLATE_FILTER_TYPE_MANUAL_DIAL: 2;
}

export const DataDipTemplateFilterType: DataDipTemplateFilterTypeMap;

export interface OrganizationArchivedStateFilterMap {
  ORGANIZATION_ARCHIVED_STATE_FILTER_UNARCHIVED: 0;
  ORGANIZATION_ARCHIVED_STATE_FILTER_ARCHIVED: 1;
  ORGANIZATION_ARCHIVED_STATE_FILTER_ALL: 2;
}

export const OrganizationArchivedStateFilter: OrganizationArchivedStateFilterMap;

