// package: api.commons
// file: api/commons/agent_session.proto

import * as jspb from "google-protobuf";

export class AgentSessionStatus extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentSessionStatus.AsObject;
  static toObject(includeInstance: boolean, msg: AgentSessionStatus): AgentSessionStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentSessionStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentSessionStatus;
  static deserializeBinaryFromReader(message: AgentSessionStatus, reader: jspb.BinaryReader): AgentSessionStatus;
}

export namespace AgentSessionStatus {
  export type AsObject = {
  }

  export interface EnumMap {
    UNKNOWN: 0;
    LOGGING_IN: 4100;
    LOGGED_IN: 4110;
    COMPLETED: 4200;
    SUMMED: 4300;
    ACCOUNTING_EXPORT: 4400;
  }

  export const Enum: EnumMap;
}

