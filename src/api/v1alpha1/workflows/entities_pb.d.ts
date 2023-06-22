// package: api.v1alpha1.workflows
// file: api/v1alpha1/workflows/entities.proto

import * as jspb from "google-protobuf";
import * as api_v1alpha1_workflows_nodes_pb from "../../../api/v1alpha1/workflows/nodes_pb";

export class FlowDefinition extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getEntryNodeId(): string;
  setEntryNodeId(value: string): void;

  clearNodesList(): void;
  getNodesList(): Array<api_v1alpha1_workflows_nodes_pb.NodeDefinition>;
  setNodesList(value: Array<api_v1alpha1_workflows_nodes_pb.NodeDefinition>): void;
  addNodes(value?: api_v1alpha1_workflows_nodes_pb.NodeDefinition, index?: number): api_v1alpha1_workflows_nodes_pb.NodeDefinition;

  getErrorNodeId(): string;
  setErrorNodeId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlowDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: FlowDefinition): FlowDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlowDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlowDefinition;
  static deserializeBinaryFromReader(message: FlowDefinition, reader: jspb.BinaryReader): FlowDefinition;
}

export namespace FlowDefinition {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    entryNodeId: string,
    nodesList: Array<api_v1alpha1_workflows_nodes_pb.NodeDefinition.AsObject>,
    errorNodeId: string,
  }
}

export class FlowState extends jspb.Message {
  hasEnvelope(): boolean;
  clearEnvelope(): void;
  getEnvelope(): Envelope | undefined;
  setEnvelope(value?: Envelope): void;

  hasState(): boolean;
  clearState(): void;
  getState(): State | undefined;
  setState(value?: State): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): Payload | undefined;
  setPayload(value?: Payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlowState.AsObject;
  static toObject(includeInstance: boolean, msg: FlowState): FlowState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlowState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlowState;
  static deserializeBinaryFromReader(message: FlowState, reader: jspb.BinaryReader): FlowState;
}

export namespace FlowState {
  export type AsObject = {
    envelope?: Envelope.AsObject,
    state?: State.AsObject,
    payload?: Payload.AsObject,
  }
}

export class Envelope extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Envelope.AsObject;
  static toObject(includeInstance: boolean, msg: Envelope): Envelope.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Envelope, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Envelope;
  static deserializeBinaryFromReader(message: Envelope, reader: jspb.BinaryReader): Envelope;
}

export namespace Envelope {
  export type AsObject = {
    id: string,
    orgId: string,
  }
}

export class State extends jspb.Message {
  getFlowDone(): boolean;
  setFlowDone(value: boolean): void;

  getFlowId(): string;
  setFlowId(value: string): void;

  getCurrentNode(): string;
  setCurrentNode(value: string): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): State.AsObject;
  static toObject(includeInstance: boolean, msg: State): State.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: State, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): State;
  static deserializeBinaryFromReader(message: State, reader: jspb.BinaryReader): State;
}

export namespace State {
  export type AsObject = {
    flowDone: boolean,
    flowId: string,
    currentNode: string,
    error: string,
  }
}

export class Payload extends jspb.Message {
  getData(): string;
  setData(value: string): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Payload.AsObject;
  static toObject(includeInstance: boolean, msg: Payload): Payload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Payload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Payload;
  static deserializeBinaryFromReader(message: Payload, reader: jspb.BinaryReader): Payload;
}

export namespace Payload {
  export type AsObject = {
    data: string,
    error: string,
  }
}

export class Message extends jspb.Message {
  hasText(): boolean;
  clearText(): void;
  getText(): string;
  setText(value: string): void;

  getPayloadCase(): Message.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    text: string,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    TEXT = 1,
  }
}

