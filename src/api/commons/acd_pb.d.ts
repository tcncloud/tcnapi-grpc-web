// package: api.commons
// file: api/commons/acd.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class AgentSession extends jspb.Message {
  getAgentSid(): number;
  setAgentSid(value: number): void;

  getTenantSid(): number;
  setTenantSid(value: number): void;

  getSessionSid(): number;
  setSessionSid(value: number): void;

  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getRegionId(): string;
  setRegionId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentSession.AsObject;
  static toObject(includeInstance: boolean, msg: AgentSession): AgentSession.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentSession, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentSession;
  static deserializeBinaryFromReader(message: AgentSession, reader: jspb.BinaryReader): AgentSession;
}

export namespace AgentSession {
  export type AsObject = {
    agentSid: number,
    tenantSid: number,
    sessionSid: number,
    asmSessionSid: number,
    orgId: string,
    regionId: string,
    userId: string,
  }
}

export class CallerSid extends jspb.Message {
  getCallerSid(): number;
  setCallerSid(value: number): void;

  getType(): CallType.EnumMap[keyof CallType.EnumMap];
  setType(value: CallType.EnumMap[keyof CallType.EnumMap]): void;

  getTenantSid(): number;
  setTenantSid(value: number): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallerSid.AsObject;
  static toObject(includeInstance: boolean, msg: CallerSid): CallerSid.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallerSid, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallerSid;
  static deserializeBinaryFromReader(message: CallerSid, reader: jspb.BinaryReader): CallerSid;
}

export namespace CallerSid {
  export type AsObject = {
    callerSid: number,
    type: CallType.EnumMap[keyof CallType.EnumMap],
    tenantSid: number,
    orgId: string,
  }
}

export class AgentStatus extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentStatus.AsObject;
  static toObject(includeInstance: boolean, msg: AgentStatus): AgentStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentStatus;
  static deserializeBinaryFromReader(message: AgentStatus, reader: jspb.BinaryReader): AgentStatus;
}

export namespace AgentStatus {
  export type AsObject = {
  }

  export interface EnumMap {
    UNAVALIABLE: 0;
    IDLE: 1;
    READY: 2;
    HUNGUP: 3;
    DESTROYED: 4;
    PEERED: 5;
    PAUSED: 6;
    WRAPUP: 7;
    PREPARING_AFTER_IDLE: 8;
    PREPARING_AFTER_WRAPUP: 9;
    PREPARING_AFTER_PAUSE: 10;
    PREPARING_AFTER_DIAL_CANCEL: 11;
    PREPARING_AFTER_PBX_REJECT: 12;
    PREPARING_AFTER_PBX_HANGUP: 13;
    PREPARING_AFTER_PBX_WAS_TAKEN: 14;
    PREPARING_AFTER_GUI_BUSY: 15;
    MANUAL_DIAL_PREPARED: 16;
    PREVIEW_DIAL_PREPARED: 17;
    MANUAL_DIAL_STARTED: 18;
    PREVIEW_DIAL_STARTED: 19;
    OUTBOUND_LOCKED: 20;
    WARM_AGENT_TRANSFER_STARTED_SOURCE: 21;
    WARM_AGENT_TRANSFER_STARTED_DESTINATION: 22;
    WARM_OUTBOUND_TRANSFER_STARTED: 23;
    WARM_OUTBOUND_TRANSFER_PEER_LOST: 24;
    PBX_POPUP_LOCKED: 25;
    PEERED_WITH_CALL_ON_HOLD: 26;
    CALLBACK_RESUMING: 27;
    GUI_BUSY: 28;
    INTERCOM: 29;
    INTERCOM_RINGING_SOURCE: 30;
    INTERCOM_RINGING_DESTINATION: 31;
    WARM_OUTBOUND_TRANSFER_OUTBOUND_LOST: 32;
    PREPARED_TO_PEER: 33;
    WARM_SKILL_TRANSFER_SOURCE_PENDING: 34;
    CALLER_TRANSFER_STARTED: 35;
    CALLER_TRANSFER_LOST_PEER: 36;
    CALLER_TRANSFER_LOST_MERGED_CALLER: 37;
    COLD_OUTBOUND_TRANSFER_STARTED: 38;
    COLD_AGENT_TRANSFER_STARTED: 39;
  }

  export const Enum: EnumMap;
}

export class CallerStatus extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallerStatus.AsObject;
  static toObject(includeInstance: boolean, msg: CallerStatus): CallerStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallerStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallerStatus;
  static deserializeBinaryFromReader(message: CallerStatus, reader: jspb.BinaryReader): CallerStatus;
}

export namespace CallerStatus {
  export type AsObject = {
  }

  export interface EnumMap {
    UNAVALIABLE: 0;
    IDLE: 1;
    READY: 2;
    HUNGUP: 3;
    DESTROYED: 4;
    PEERED: 5;
    OUTBOUND_LOCKED: 6;
    OUTBOUND_PEERED: 7;
    PBX_POPUP_LOCKED: 8;
    VOICEMAIL: 9;
    PEERED_WITH_CALL_ON_HOLD: 10;
    CALLBACK_SUSPENDED: 11;
    WARM_AGENT_TRANSFER_STARTED: 12;
    WARM_OUTBOUND_TRANSFER_STARTED: 13;
    OUTBOUND_DIAL_TRANSFER_STARTED: 14;
    PREPARED_TO_PEER: 15;
    WARM_SKILL_TRANSFER_PENDING: 16;
    CALLER_TRANSFER_PEER: 17;
    CALLER_TRANSFER_MERGED_CALLER: 18;
    CALLER_PEERED: 19;
  }

  export const Enum: EnumMap;
}

export class CallType extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallType.AsObject;
  static toObject(includeInstance: boolean, msg: CallType): CallType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallType;
  static deserializeBinaryFromReader(message: CallType, reader: jspb.BinaryReader): CallType;
}

export namespace CallType {
  export type AsObject = {
  }

  export interface EnumMap {
    INBOUND: 0;
    OUTBOUND: 1;
    PREVIEW: 2;
    MANUAL: 3;
    MAC: 4;
  }

  export const Enum: EnumMap;
}

export class AgentDialIn extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentDialIn.AsObject;
  static toObject(includeInstance: boolean, msg: AgentDialIn): AgentDialIn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentDialIn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentDialIn;
  static deserializeBinaryFromReader(message: AgentDialIn, reader: jspb.BinaryReader): AgentDialIn;
}

export namespace AgentDialIn {
  export type AsObject = {
  }

  export interface EnumMap {
    TOLL_FREE: 0;
    SOFTPHONE: 1;
    LOCAL: 2;
  }

  export const Enum: EnumMap;
}

export class HuntGroupType extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HuntGroupType.AsObject;
  static toObject(includeInstance: boolean, msg: HuntGroupType): HuntGroupType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HuntGroupType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HuntGroupType;
  static deserializeBinaryFromReader(message: HuntGroupType, reader: jspb.BinaryReader): HuntGroupType;
}

export namespace HuntGroupType {
  export type AsObject = {
  }

  export interface EnumMap {
    UNCONNECTED: 0;
    CONNECTED: 1;
    SOFTPHONE: 2;
  }

  export const Enum: EnumMap;
}

export class AgentSessionLogActionKey extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentSessionLogActionKey.AsObject;
  static toObject(includeInstance: boolean, msg: AgentSessionLogActionKey): AgentSessionLogActionKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentSessionLogActionKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentSessionLogActionKey;
  static deserializeBinaryFromReader(message: AgentSessionLogActionKey, reader: jspb.BinaryReader): AgentSessionLogActionKey;
}

export namespace AgentSessionLogActionKey {
  export type AsObject = {
  }

  export interface EnumMap {
    AGENT_PAUSE_START: 0;
    AGENT_PAUSE_STOP: 1;
    AGENT_SKILLS_INITIAL: 2;
    AGENT_LOGOUT: 3;
    EXECUTED_AGENT_TRIGGER: 4;
    DURATION_SINCE_LAST_LOGON: 5;
    AGENT_LOGIN_IP: 6;
    MAC_DECISION: 7;
    MAC_10_KEY_DECISION: 8;
    MAC_10_KEY_CONFIRM: 9;
    HUNT_GROUP_REASSIGNMENT: 10;
    PBX_ACCEPT: 11;
    PBX_HANGUP: 12;
    PBX_LOST: 13;
    PBX_REJECT: 14;
    PBX_TIMEOUT: 15;
    WARM_TRANSFER_AGENT_INVITE_CALLER_INITIAL: 16;
    WARM_TRANSFER_AGENT_INVITE_CALLER: 17;
    WARM_TRANSFER_AGENT_START_SOURCE: 18;
    WARM_TRANSFER_AGENT_END_SOURCE: 19;
    WARM_TRANSFER_AGENT_START_DESTINATION: 20;
    WARM_TRANSFER_AGENT_END_DESTINATION: 21;
    WARM_TRANSFER_OUTBOUND_INVITE_CALLER_INITIAL: 22;
    WARM_TRANSFER_OUTBOUND_INVITE_CALLER: 23;
    WARM_TRANSFER_OUTBOUND_START: 24;
    WARM_TRANSFER_OUTBOUND_END: 25;
    COLD_TRANSFER_OUTBOUND_START: 26;
    COLD_TRANSFER_AGENT_START_SOURCE: 27;
    COLD_TRANSFER_AGENT_END_SOURCE: 28;
    COLD_TRANSFER_AGENT_START_DESTINATION: 29;
    COLD_TRANSFER_AGENT_END_DESTINATION: 30;
    HOLD_START: 31;
    HOLD_END: 32;
    REQUEUE: 33;
    CALLER_SENT_TO_VOICEMAIL: 34;
    RECORDING_START: 35;
    RECORDING_STOP: 36;
    PBR_STARTED_RECORD: 37;
    PBR_FINISHED_RECORD: 38;
    ACD_LOGOUT: 39;
    ACD_REGISTER: 40;
    EXECUTED_AGENT_WEBLINK: 41;
    TRANSFER_HOLD_CALLER: 42;
    TRANSFER_UNHOLD_CALLER: 43;
    TRANSFER_HOLD_AGENT: 44;
    TRANSFER_UNHOLD_AGENT: 45;
    TRANSFER_HOLD: 46;
    TRANSFER_UNHOLD: 47;
    TRANSFER_HOLD_OUTBOUND: 48;
    TRANSFER_UNHOLD_OUTBOUND: 49;
    TRANSFER_ADD_OUTBOUND: 50;
    TRANSFER_REMOVE_OUTBOUND: 51;
    WARM_CALLER_TRANSFER_START: 52;
    WARM_CALLER_TRANSFER_INVITE_CALLER_INITIAL: 53;
    WARM_CALLER_TRANSFER_INVITE_CALLER: 54;
    WARM_CALLER_TRANSFER_END: 55;
    BARGE_IN_START: 56;
    BARGE_IN_STOP: 57;
    BARGEINCALLJOINED: 58;
    BARGEINCALLLEFT: 59;
  }

  export const Enum: EnumMap;
}

export class AgentCallLogActionKey extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentCallLogActionKey.AsObject;
  static toObject(includeInstance: boolean, msg: AgentCallLogActionKey): AgentCallLogActionKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentCallLogActionKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentCallLogActionKey;
  static deserializeBinaryFromReader(message: AgentCallLogActionKey, reader: jspb.BinaryReader): AgentCallLogActionKey;
}

export namespace AgentCallLogActionKey {
  export type AsObject = {
  }

  export interface EnumMap {
    DNCL_ADD: 0;
    CALL_ENDED: 1;
    CALL_DISCONNECT: 2;
    CALLER_HUNGUP: 3;
    WARM_TRANSFER_AGENT_INVITE_CALLER_INITIAL: 4;
    WARM_TRANSFER_AGENT_INVITE_CALLER: 5;
    WARM_TRANSFER_AGENT_START: 6;
    WARM_TRANSFER_AGENT_END: 7;
    WARM_TRANSFER_OUTBOUND_INVITE_CALLER: 8;
    WARM_TRANSFER_OUTBOUND_INVITE_CALLER_INITIAL: 9;
    WARM_TRANSFER_OUTBOUND_START: 10;
    WARM_TRANSFER_OUTBOUND_END: 11;
    COLD_TRANSFER_AGENT_START: 12;
    COLD_TRANSFER_AGENT_END: 13;
    COLD_TRANSFER_OUTBOUND_START: 14;
    CALLBACK_SUSPEND_START: 15;
    CALLBACK_RESUMING: 16;
    VOICEMAIL_END: 17;
    CALLER_SENT_TO_VOICEMAIL: 18;
    HOLD_START: 19;
    HOLD_END: 20;
    RECORDING_START: 21;
    RECORDING_STOP: 22;
    CALL_SKILLS_SCORE: 23;
    CALL_SKILLS_MATCHED: 24;
    CALL_SKILLS_CURRENT: 25;
    CALL_SKILLS_INITIAL: 26;
    SKILLS_CHANGED_DROPSKILLS: 27;
    SKILLS_CHANGED_ADDSKILLS: 28;
    REQUEUE: 29;
    SKILLS_CHANGED_REQUEUE: 30;
    SCRUB_OVERRIDE: 31;
    CALLBACK_RESUMING_WITH_MANUAL_CALL_START: 32;
    CALLBACK_RESUMING_WITH_MANUAL_CALL_FINISH: 33;
    CALLBACK_RESUMING_WITH_MANUAL_CALL_TIMEDOUT: 34;
    CALLBACK_RESUMING_WITH_MANUAL_CALL_REPLACED: 35;
    TRANSFER_HOLD: 36;
    TRANSFER_UNHOLD: 37;
    WARM_CALLER_TRANSFER_SOURCE_START: 38;
    WARM_CALLER_TRANSFER_DESTINATION_START: 39;
    WARM_CALLER_TRANSFER_INVITE_CALLER_INITIAL: 40;
    WARM_CALLER_TRANSFER_INVITE_CALLER: 41;
    WARM_CALLER_TRANSFER_END: 42;
    BARGE_IN_START: 43;
    BARGE_IN_STOP: 44;
  }

  export const Enum: EnumMap;
}

export class AgentCallLogActionValue extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentCallLogActionValue.AsObject;
  static toObject(includeInstance: boolean, msg: AgentCallLogActionValue): AgentCallLogActionValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentCallLogActionValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentCallLogActionValue;
  static deserializeBinaryFromReader(message: AgentCallLogActionValue, reader: jspb.BinaryReader): AgentCallLogActionValue;
}

export namespace AgentCallLogActionValue {
  export type AsObject = {
  }

  export interface EnumMap {
    UNSPECIFIED: 0;
    DNCL_RESULT_FAILED: 1;
    CALL_ENDED_CALLER_DISCONNECTED: 2;
  }

  export const Enum: EnumMap;
}

export class HuntGroupParamKey extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HuntGroupParamKey.AsObject;
  static toObject(includeInstance: boolean, msg: HuntGroupParamKey): HuntGroupParamKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HuntGroupParamKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HuntGroupParamKey;
  static deserializeBinaryFromReader(message: HuntGroupParamKey, reader: jspb.BinaryReader): HuntGroupParamKey;
}

export namespace HuntGroupParamKey {
  export type AsObject = {
  }

  export interface EnumMap {
    AGENT_DIAL_IN_NUMBER: 0;
    AGENT_LOGIN_GUI_STATISTICS_TEMPLATE: 1;
    AGENT_PASSWORD_REQUIRES_LETTER: 2;
    AGENT_PASSWORD_REQUIRES_NUMBER: 3;
    AGENT_PASSWORD_REQUIRES_SYMBOL: 4;
    AGENT_PASSWORD_REQUIRES_UPPER_LOWER: 5;
    AGENT_SKILLS_REASSIGNMENT: 6;
    AGENT_STATS_CALL_HISTORY: 7;
    AGENT_TRIGGER: 8;
    AGENT_DISPOSITION_CONDITIONAL_DNCL: 9;
    ALLOWED_IPS: 10;
    ALLOW_AGENT_HOLD: 11;
    ALLOW_AGENT_INTERCOM: 12;
    ALLOW_AGENT_PASSWORD_RESET: 13;
    ALLOW_AGENT_PAUSE_CODE_RESET: 14;
    ALLOW_AGENT_TO_PAUSE: 15;
    ALLOW_CALLBACK_SCHEDULING: 16;
    ALLOW_EXPORT_PHONE_NUMBER_ACTIVITY: 17;
    ALLOW_MANUAL_APPROVAL_OF_CALLS: 18;
    ALLOW_MANUAL_DIALING: 19;
    ALLOW_PHONE_NUMBER_ACTIVITY: 20;
    ALLOW_PREVIEW_DIAL_CANCEL: 21;
    ALLOW_SCHEDULED_CALLBACK_CALLING: 22;
    ALLOW_TRANSFER_CALLS: 23;
    ALPHANUMERIC_KEYPAD: 24;
    AUTO_PAUSE_ON_MULTI_HOLD: 25;
    AUTO_PAUSE_ON_PREVIEW_CANCEL: 26;
    DEFAULT_AGENT_PAUSE_CODE: 27;
    DEFAULT_AGENT_TRANSFERS_FILTERING: 28;
    DEFAULT_DNCL_COUNTRY: 29;
    DEFAULT_DNCL_EXPIRATION: 30;
    DEFAULT_INBOUND_CALL_DNCL_EXPIRATION: 31;
    DEFAULT_MANUAL_CALL_DNCL_EXPIRATION: 32;
    DEFAULT_OUTBOUND_CALL_DNCL_EXPIRATION: 33;
    DEFAULT_PREVIEW_CALL_DNCL_EXPIRATION: 34;
    DEFAULT_SCHEDULED_CALLBACK_ROUTING: 35;
    DISCONNECT_CALL_CONFIRMATION: 36;
    DISPLAY_AGENT_TRANSFERS_FILTERING: 37;
    DISPLAY_DATA_COLLECT_DATA: 38;
    DISPLAY_DATA_DIPPED_DATA: 39;
    DISPLAY_IVR_KEYS_PRESSED: 40;
    DISPLAY_PHONE_ZIP_METADATA: 41;
    DISPLAY_RECORDING_INDICATOR: 42;
    DO_ALLOW_ADD_DNCL: 43;
    ENABLE_RECORDING_PAUSE: 44;
    HOLD_QUEUE_MONITORING: 45;
    HOLD_QUEUE_MONITORING_AGENT_ROUTING: 46;
    HOLD_QUEUE_MONITORING_PREFERRED_HUNT_GROUP_ROUTING: 47;
    HOLD_QUEUE_MONITORING_REQUIRED_HUNT_GROUP_ROUTING: 48;
    HUNT_GROUP_CLIENT_INFO_DISPLAY_TEMPLATE: 49;
    HUNT_GROUP_SCRIPT: 50;
    HUNT_GROUP_WEB_LINK: 51;
    MANUAL_APPROVAL_NUMBER_CONFIRMATION: 52;
    MANUAL_DIAL_AUTO_DNCL_ADD: 53;
    MANUAL_DIAL_DEFAULT_CALLER_ID: 54;
    MANUAL_DIAL_DEFAULT_COUNTRY: 55;
    MANUAL_DIAL_DISPLAY_COUNTRY_SELECT_MENU: 56;
    MANUAL_DIAL_DEFAULT_CALLER_ID_COUNTRY: 57;
    MANUAL_DIAL_DISPLAY_CALLER_ID_COUNTRY_SELECT_MENU: 58;
    MANUAL_DIAL_DISPLAY_OUTBOUND_NUMBER_PHONE_BOOK: 59;
    MANUAL_DIAL_DISPLAY_PHONE_BOOK: 60;
    MANUAL_DIAL_NUMBER_WHITE_LIST: 61;
    MANUAL_DIAL_OVERRIDE_CELL_SCRUB: 62;
    MANUAL_DIAL_OVERRIDE_RECORDING_SETTINGS: 64;
    MANUAL_DIAL_SCRUB_OVERRIDE: 65;
    MANUAL_DIAL_TIMEZONE_OVERRIDE: 66;
    MANUAL_DIAL_USER_EDITABLE_CALLER_ID: 67;
    MANUAL_QUEUE_CONFIGURATION_NAME: 68;
    MINIMUM_AGENT_PASSWORD_LENGTH: 69;
    PHONE_NUMBER_ACTIVITY_EDIT_RESPONSES: 70;
    PHONE_NUMBER_ACTIVITY_RECORDINGS_DOWNLOAD: 71;
    PREVIEW_DIAL_AUTO_DNCL_ADD: 72;
    PREVIEW_DIAL_CALL_TIMEOUT: 73;
    PREVIEW_DIAL_CONFIRMATION: 74;
    PREVIEW_QUEUE_CONFIGURATION_NAME: 75;
    RECORDING_DELAY: 76;
    REQUEUE_TRANSFER_QUEUE_CONFIGURATION_NAME: 77;
    SCHEDULED_CALLBACKS_RETRIEVAL_MODE: 78;
    SCHEDULED_CALLBACK_ROUTING_DISALLOWED: 79;
    TRANSFER_CALLS_DEFAULT_CALLER_ID: 80;
    TRANSFER_CALLS_DEFAULT_COUNTRY: 81;
    TRANSFER_CALLS_DEFAULT_TRANSFER_NUMBER: 82;
    TRANSFER_CALLS_DISPLAY_CALLER_ID_PHONE_BOOK: 83;
    TRANSFER_CALLS_DISPLAY_COUNTRY_SELECT_MENU: 84;
    TRANSFER_CALLS_DISPLAY_TRANSFER_NUMBER_PHONE_BOOK: 85;
    TRANSFER_CALLS_HAND_OFF_TYPE: 86;
    TRANSFER_CALLS_TRANSFER_TYPE: 87;
    TRANSFER_CALLS_USER_EDITABLE_CALLER_ID: 88;
    TRANSFER_CALLS_USER_EDITABLE_TRANSFER_NUMBER: 89;
    TRANSFER_RECORDING_STATUS: 90;
    USE_ADVANCED_GATEWAY_TITLE: 91;
    USE_AGENT_PAUSE_CODES: 92;
    USE_IP_BASED_AUTH: 93;
    HUNT_GROUP_REASSIGNMENT_DISALLOWED: 94;
    REQUEUE_TRANSFER_DISALLOWED_SKILLS: 95;
    ALLOW_MANUAL_APPROVAL_FOR_MESSAGING: 96;
    DISPLAY_SKILLS: 97;
    PBX_TRANSFER_DISALLOWED_EXTENSIONS: 98;
  }

  export const Enum: EnumMap;
}

export class ReplaceConfig extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplaceConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ReplaceConfig): ReplaceConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReplaceConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplaceConfig;
  static deserializeBinaryFromReader(message: ReplaceConfig, reader: jspb.BinaryReader): ReplaceConfig;
}

export namespace ReplaceConfig {
  export type AsObject = {
  }

  export interface EnumMap {
    NO_CHANGE: 0;
    TENANT: 1;
    REPLACE: 2;
  }

  export const Enum: EnumMap;
}

export class TransferMember extends jspb.Message {
  getIdentifier(): string;
  setIdentifier(value: string): void;

  getDisplayLabel(): string;
  setDisplayLabel(value: string): void;

  getMemberType(): TransferMemberTypeMap[keyof TransferMemberTypeMap];
  setMemberType(value: TransferMemberTypeMap[keyof TransferMemberTypeMap]): void;

  hasAgentSession(): boolean;
  clearAgentSession(): void;
  getAgentSession(): AgentSession | undefined;
  setAgentSession(value?: AgentSession): void;

  hasCallerSid(): boolean;
  clearCallerSid(): void;
  getCallerSid(): CallerSid | undefined;
  setCallerSid(value?: CallerSid): void;

  hasOutboundId(): boolean;
  clearOutboundId(): void;
  getOutboundId(): string;
  setOutboundId(value: string): void;

  getLocatableDataCase(): TransferMember.LocatableDataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferMember.AsObject;
  static toObject(includeInstance: boolean, msg: TransferMember): TransferMember.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferMember, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferMember;
  static deserializeBinaryFromReader(message: TransferMember, reader: jspb.BinaryReader): TransferMember;
}

export namespace TransferMember {
  export type AsObject = {
    identifier: string,
    displayLabel: string,
    memberType: TransferMemberTypeMap[keyof TransferMemberTypeMap],
    agentSession?: AgentSession.AsObject,
    callerSid?: CallerSid.AsObject,
    outboundId: string,
  }

  export enum LocatableDataCase {
    LOCATABLE_DATA_NOT_SET = 0,
    AGENT_SESSION = 100,
    CALLER_SID = 101,
    OUTBOUND_ID = 102,
  }
}

export class AgentAlert extends jspb.Message {
  hasBackofficeMessage(): boolean;
  clearBackofficeMessage(): void;
  getBackofficeMessage(): AgentBackofficeMessageAlert | undefined;
  setBackofficeMessage(value?: AgentBackofficeMessageAlert): void;

  hasDirectedCallRinging(): boolean;
  clearDirectedCallRinging(): void;
  getDirectedCallRinging(): AgentDirectedCallRingingAlert | undefined;
  setDirectedCallRinging(value?: AgentDirectedCallRingingAlert): void;

  hasDirectedCallHangup(): boolean;
  clearDirectedCallHangup(): void;
  getDirectedCallHangup(): AgentDirectedCallHangupAlert | undefined;
  setDirectedCallHangup(value?: AgentDirectedCallHangupAlert): void;

  getAlertCase(): AgentAlert.AlertCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentAlert.AsObject;
  static toObject(includeInstance: boolean, msg: AgentAlert): AgentAlert.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentAlert, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentAlert;
  static deserializeBinaryFromReader(message: AgentAlert, reader: jspb.BinaryReader): AgentAlert;
}

export namespace AgentAlert {
  export type AsObject = {
    backofficeMessage?: AgentBackofficeMessageAlert.AsObject,
    directedCallRinging?: AgentDirectedCallRingingAlert.AsObject,
    directedCallHangup?: AgentDirectedCallHangupAlert.AsObject,
  }

  export enum AlertCase {
    ALERT_NOT_SET = 0,
    BACKOFFICE_MESSAGE = 1,
    DIRECTED_CALL_RINGING = 2,
    DIRECTED_CALL_HANGUP = 3,
  }
}

export class AgentBackofficeMessageAlert extends jspb.Message {
  getExpireDuration(): number;
  setExpireDuration(value: number): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTargetAgentSession(): boolean;
  clearTargetAgentSession(): void;
  getTargetAgentSession(): AgentSession | undefined;
  setTargetAgentSession(value?: AgentSession): void;

  getMessage(): string;
  setMessage(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentBackofficeMessageAlert.AsObject;
  static toObject(includeInstance: boolean, msg: AgentBackofficeMessageAlert): AgentBackofficeMessageAlert.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentBackofficeMessageAlert, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentBackofficeMessageAlert;
  static deserializeBinaryFromReader(message: AgentBackofficeMessageAlert, reader: jspb.BinaryReader): AgentBackofficeMessageAlert;
}

export namespace AgentBackofficeMessageAlert {
  export type AsObject = {
    expireDuration: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    targetAgentSession?: AgentSession.AsObject,
    message: string,
    id: string,
  }
}

export class AgentDirectedCallRingingAlert extends jspb.Message {
  getExpireDuration(): number;
  setExpireDuration(value: number): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTargetAgentSession(): boolean;
  clearTargetAgentSession(): void;
  getTargetAgentSession(): AgentSession | undefined;
  setTargetAgentSession(value?: AgentSession): void;

  hasCallerSid(): boolean;
  clearCallerSid(): void;
  getCallerSid(): CallerSid | undefined;
  setCallerSid(value?: CallerSid): void;

  getCallerId(): string;
  setCallerId(value: string): void;

  getDestinationNumber(): string;
  setDestinationNumber(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentDirectedCallRingingAlert.AsObject;
  static toObject(includeInstance: boolean, msg: AgentDirectedCallRingingAlert): AgentDirectedCallRingingAlert.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentDirectedCallRingingAlert, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentDirectedCallRingingAlert;
  static deserializeBinaryFromReader(message: AgentDirectedCallRingingAlert, reader: jspb.BinaryReader): AgentDirectedCallRingingAlert;
}

export namespace AgentDirectedCallRingingAlert {
  export type AsObject = {
    expireDuration: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    targetAgentSession?: AgentSession.AsObject,
    callerSid?: CallerSid.AsObject,
    callerId: string,
    destinationNumber: string,
    id: string,
  }
}

export class AgentDirectedCallHangupAlert extends jspb.Message {
  getExpireDuration(): number;
  setExpireDuration(value: number): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTargetAgentSession(): boolean;
  clearTargetAgentSession(): void;
  getTargetAgentSession(): AgentSession | undefined;
  setTargetAgentSession(value?: AgentSession): void;

  hasCallerSid(): boolean;
  clearCallerSid(): void;
  getCallerSid(): CallerSid | undefined;
  setCallerSid(value?: CallerSid): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentDirectedCallHangupAlert.AsObject;
  static toObject(includeInstance: boolean, msg: AgentDirectedCallHangupAlert): AgentDirectedCallHangupAlert.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentDirectedCallHangupAlert, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentDirectedCallHangupAlert;
  static deserializeBinaryFromReader(message: AgentDirectedCallHangupAlert, reader: jspb.BinaryReader): AgentDirectedCallHangupAlert;
}

export namespace AgentDirectedCallHangupAlert {
  export type AsObject = {
    expireDuration: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    targetAgentSession?: AgentSession.AsObject,
    callerSid?: CallerSid.AsObject,
    id: string,
  }
}

export class AgentState extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getStatusDesc(): AgentStatus.EnumMap[keyof AgentStatus.EnumMap];
  setStatusDesc(value: AgentStatus.EnumMap[keyof AgentStatus.EnumMap]): void;

  getPaused(): boolean;
  setPaused(value: boolean): void;

  getQueue(): string;
  setQueue(value: string): void;

  getCurrentSessionId(): number;
  setCurrentSessionId(value: number): void;

  getLastStatusChange(): number;
  setLastStatusChange(value: number): void;

  getMonitoring(): boolean;
  setMonitoring(value: boolean): void;

  getCallsCount(): number;
  setCallsCount(value: number): void;

  getLastSipCode(): number;
  setLastSipCode(value: number): void;

  getAgentPeerIsLostCall(): boolean;
  setAgentPeerIsLostCall(value: boolean): void;

  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  getCallerWasSuspended(): boolean;
  setCallerWasSuspended(value: boolean): void;

  clearTransferMembersList(): void;
  getTransferMembersList(): Array<TransferMember>;
  setTransferMembersList(value: Array<TransferMember>): void;
  addTransferMembers(value?: TransferMember, index?: number): TransferMember;

  getAgentPeerIsDirectToAgent(): boolean;
  setAgentPeerIsDirectToAgent(value: boolean): void;

  getUserId(): string;
  setUserId(value: string): void;

  getAgentSid(): number;
  setAgentSid(value: number): void;

  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  getAgentIsMuted(): boolean;
  setAgentIsMuted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentState.AsObject;
  static toObject(includeInstance: boolean, msg: AgentState): AgentState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentState;
  static deserializeBinaryFromReader(message: AgentState, reader: jspb.BinaryReader): AgentState;
}

export namespace AgentState {
  export type AsObject = {
    status: number,
    statusDesc: AgentStatus.EnumMap[keyof AgentStatus.EnumMap],
    paused: boolean,
    queue: string,
    currentSessionId: number,
    lastStatusChange: number,
    monitoring: boolean,
    callsCount: number,
    lastSipCode: number,
    agentPeerIsLostCall: boolean,
    disabled: boolean,
    callerWasSuspended: boolean,
    transferMembersList: Array<TransferMember.AsObject>,
    agentPeerIsDirectToAgent: boolean,
    userId: string,
    agentSid: number,
    asmSessionSid: number,
    agentIsMuted: boolean,
  }
}

export interface ACDStatusMap {
  ACD_UNKNOWN: 0;
  AGENT_SESSION_LOGGING_IN: 4100;
  AGENT_SESSION_LOGGED_IN: 4110;
  AGENT_SESSION_COMPLETED: 4200;
  AGENT_SESSION_SUMMED: 4300;
  AGENT_SESSION_ACCOUNTINGEXPORT: 4400;
}

export const ACDStatus: ACDStatusMap;

export interface AgentCallLogCallEndedMap {
  AGENT_CANCELLED: 0;
  CALLER_DISCONNECTED: 1;
  NOT_CONNECTED: 2;
  AGENT_LOST: 3;
  AGENT_HANGUP: 4;
  CALLER_HANGUP: 5;
  CALL_END_ESTIMATE: 6;
}

export const AgentCallLogCallEnded: AgentCallLogCallEndedMap;

export interface HoldTypeMap {
  UNKNOWN: 0;
  SIMPLE: 1;
  MULTI: 2;
}

export const HoldType: HoldTypeMap;

export interface QueuedNotificationTypeMap {
  QUEUEDNOTIFICATIONTYPE_GENERAL_INITIAL: 0;
  QUEUEDNOTIFICATIONTYPE_PBX_INITIAL: 1;
  QUEUEDNOTIFICATIONTYPE_AGENT_BOUND_INITIAL: 2;
  QUEUEDNOTIFICATIONTYPE_GENERAL_REQUEUED: 3;
  QUEUEDNOTIFICATIONTYPE_AGENT_BOUND_REQUEUED: 4;
}

export const QueuedNotificationType: QueuedNotificationTypeMap;

export interface TransferMemberTypeMap {
  TRANSFERMEMBERTYPE_AGENT: 0;
  TRANSFERMEMBERTYPE_CALLER: 1;
  TRANSFERMEMBERTYPE_OUTBOUND: 2;
}

export const TransferMemberType: TransferMemberTypeMap;

export interface DTMFDigitMap {
  DTMFDIGIT_0: 0;
  DTMFDIGIT_1: 1;
  DTMFDIGIT_2: 2;
  DTMFDIGIT_3: 3;
  DTMFDIGIT_4: 4;
  DTMFDIGIT_5: 5;
  DTMFDIGIT_6: 6;
  DTMFDIGIT_7: 7;
  DTMFDIGIT_8: 8;
  DTMFDIGIT_9: 9;
  DTMFDIGIT_A: 10;
  DTMFDIGIT_B: 11;
  DTMFDIGIT_C: 12;
  DTMFDIGIT_D: 13;
  DTMFDIGIT_STAR: 14;
  DTMFDIGIT_POUND: 15;
}

export const DTMFDigit: DTMFDigitMap;

