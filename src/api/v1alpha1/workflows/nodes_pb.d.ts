// package: api.v1alpha1.workflows
// file: api/v1alpha1/workflows/nodes.proto

import * as jspb from "google-protobuf";
import * as api_v1alpha1_workflows_omni_pb from "../../../api/v1alpha1/workflows/omni_pb";

export class NodeDefinition extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearOutputsList(): void;
  getOutputsList(): Array<string>;
  setOutputsList(value: Array<string>): void;
  addOutputs(value: string, index?: number): string;

  getErrorNodeId(): string;
  setErrorNodeId(value: string): void;

  hasOmniPrompt(): boolean;
  clearOmniPrompt(): void;
  getOmniPrompt(): api_v1alpha1_workflows_omni_pb.OmniNodePrompt | undefined;
  setOmniPrompt(value?: api_v1alpha1_workflows_omni_pb.OmniNodePrompt): void;

  hasOmniSetSkill(): boolean;
  clearOmniSetSkill(): void;
  getOmniSetSkill(): api_v1alpha1_workflows_omni_pb.OmniNodeSetSkill | undefined;
  setOmniSetSkill(value?: api_v1alpha1_workflows_omni_pb.OmniNodeSetSkill): void;

  hasOmniToAgent(): boolean;
  clearOmniToAgent(): void;
  getOmniToAgent(): api_v1alpha1_workflows_omni_pb.OmniNodeToAgent | undefined;
  setOmniToAgent(value?: api_v1alpha1_workflows_omni_pb.OmniNodeToAgent): void;

  hasOmniError(): boolean;
  clearOmniError(): void;
  getOmniError(): api_v1alpha1_workflows_omni_pb.OmniNodeError | undefined;
  setOmniError(value?: api_v1alpha1_workflows_omni_pb.OmniNodeError): void;

  getDefinitionCase(): NodeDefinition.DefinitionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: NodeDefinition): NodeDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeDefinition;
  static deserializeBinaryFromReader(message: NodeDefinition, reader: jspb.BinaryReader): NodeDefinition;
}

export namespace NodeDefinition {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    outputsList: Array<string>,
    errorNodeId: string,
    omniPrompt?: api_v1alpha1_workflows_omni_pb.OmniNodePrompt.AsObject,
    omniSetSkill?: api_v1alpha1_workflows_omni_pb.OmniNodeSetSkill.AsObject,
    omniToAgent?: api_v1alpha1_workflows_omni_pb.OmniNodeToAgent.AsObject,
    omniError?: api_v1alpha1_workflows_omni_pb.OmniNodeError.AsObject,
  }

  export enum DefinitionCase {
    DEFINITION_NOT_SET = 0,
    OMNI_PROMPT = 201,
    OMNI_SET_SKILL = 202,
    OMNI_TO_AGENT = 203,
    OMNI_ERROR = 204,
  }
}

