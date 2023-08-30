// package: api.commons.workflows
// file: api/commons/workflows/nodes.proto

import * as jspb from "google-protobuf";
import * as api_commons_workflows_example_pb from "../../../api/commons/workflows/example_pb";
import * as api_commons_workflows_omni_pb from "../../../api/commons/workflows/omni_pb";
import * as api_commons_workflows_omni_bot_pb from "../../../api/commons/workflows/omni_bot_pb";
import * as api_commons_workflows_test_bot_pb from "../../../api/commons/workflows/test_bot_pb";

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

  hasPrint(): boolean;
  clearPrint(): void;
  getPrint(): api_commons_workflows_example_pb.NodePrint | undefined;
  setPrint(value?: api_commons_workflows_example_pb.NodePrint): void;

  hasRandom(): boolean;
  clearRandom(): void;
  getRandom(): api_commons_workflows_example_pb.NodeRandom | undefined;
  setRandom(value?: api_commons_workflows_example_pb.NodeRandom): void;

  hasConsoleInput(): boolean;
  clearConsoleInput(): void;
  getConsoleInput(): api_commons_workflows_example_pb.NodeConsoleInput | undefined;
  setConsoleInput(value?: api_commons_workflows_example_pb.NodeConsoleInput): void;

  hasComparator(): boolean;
  clearComparator(): void;
  getComparator(): api_commons_workflows_example_pb.NodeComparator | undefined;
  setComparator(value?: api_commons_workflows_example_pb.NodeComparator): void;

  hasStoreInput(): boolean;
  clearStoreInput(): void;
  getStoreInput(): api_commons_workflows_example_pb.NodeStoreInput | undefined;
  setStoreInput(value?: api_commons_workflows_example_pb.NodeStoreInput): void;

  hasChatbot(): boolean;
  clearChatbot(): void;
  getChatbot(): api_commons_workflows_example_pb.NodeChatbot | undefined;
  setChatbot(value?: api_commons_workflows_example_pb.NodeChatbot): void;

  hasOmniPrompt(): boolean;
  clearOmniPrompt(): void;
  getOmniPrompt(): api_commons_workflows_omni_pb.OmniNodePrompt | undefined;
  setOmniPrompt(value?: api_commons_workflows_omni_pb.OmniNodePrompt): void;

  hasOmniSetSkill(): boolean;
  clearOmniSetSkill(): void;
  getOmniSetSkill(): api_commons_workflows_omni_pb.OmniNodeSetSkill | undefined;
  setOmniSetSkill(value?: api_commons_workflows_omni_pb.OmniNodeSetSkill): void;

  hasOmniToAgent(): boolean;
  clearOmniToAgent(): void;
  getOmniToAgent(): api_commons_workflows_omni_pb.OmniNodeToAgent | undefined;
  setOmniToAgent(value?: api_commons_workflows_omni_pb.OmniNodeToAgent): void;

  hasOmniError(): boolean;
  clearOmniError(): void;
  getOmniError(): api_commons_workflows_omni_pb.OmniNodeError | undefined;
  setOmniError(value?: api_commons_workflows_omni_pb.OmniNodeError): void;

  hasOmniSendMessage(): boolean;
  clearOmniSendMessage(): void;
  getOmniSendMessage(): api_commons_workflows_omni_pb.OmniNodeSendMessage | undefined;
  setOmniSendMessage(value?: api_commons_workflows_omni_pb.OmniNodeSendMessage): void;

  hasOmniUserInput(): boolean;
  clearOmniUserInput(): void;
  getOmniUserInput(): api_commons_workflows_omni_pb.OmniNodeUserInput | undefined;
  setOmniUserInput(value?: api_commons_workflows_omni_pb.OmniNodeUserInput): void;

  hasOmniBranching(): boolean;
  clearOmniBranching(): void;
  getOmniBranching(): api_commons_workflows_omni_pb.OmniNodeBranching | undefined;
  setOmniBranching(value?: api_commons_workflows_omni_pb.OmniNodeBranching): void;

  hasOmniToMatcher(): boolean;
  clearOmniToMatcher(): void;
  getOmniToMatcher(): api_commons_workflows_omni_pb.OmniNodeToMatcher | undefined;
  setOmniToMatcher(value?: api_commons_workflows_omni_pb.OmniNodeToMatcher): void;

  hasOmniWebhook(): boolean;
  clearOmniWebhook(): void;
  getOmniWebhook(): api_commons_workflows_omni_pb.OmniNodeWebhook | undefined;
  setOmniWebhook(value?: api_commons_workflows_omni_pb.OmniNodeWebhook): void;

  hasOmniScrublist(): boolean;
  clearOmniScrublist(): void;
  getOmniScrublist(): api_commons_workflows_omni_pb.OmniNodeScrublist | undefined;
  setOmniScrublist(value?: api_commons_workflows_omni_pb.OmniNodeScrublist): void;

  hasOmniEndConversation(): boolean;
  clearOmniEndConversation(): void;
  getOmniEndConversation(): api_commons_workflows_omni_pb.OmniNodeEndConversation | undefined;
  setOmniEndConversation(value?: api_commons_workflows_omni_pb.OmniNodeEndConversation): void;

  hasOmniBotTestStart(): boolean;
  clearOmniBotTestStart(): void;
  getOmniBotTestStart(): api_commons_workflows_omni_bot_pb.OmniBotNodeTestStart | undefined;
  setOmniBotTestStart(value?: api_commons_workflows_omni_bot_pb.OmniBotNodeTestStart): void;

  hasOmniBotTestStep(): boolean;
  clearOmniBotTestStep(): void;
  getOmniBotTestStep(): api_commons_workflows_omni_bot_pb.OmniBotNodeTestStep | undefined;
  setOmniBotTestStep(value?: api_commons_workflows_omni_bot_pb.OmniBotNodeTestStep): void;

  hasOmniBotTestEnd(): boolean;
  clearOmniBotTestEnd(): void;
  getOmniBotTestEnd(): api_commons_workflows_omni_bot_pb.OmniBotNodeTestEnd | undefined;
  setOmniBotTestEnd(value?: api_commons_workflows_omni_bot_pb.OmniBotNodeTestEnd): void;

  hasTestBotTestStart(): boolean;
  clearTestBotTestStart(): void;
  getTestBotTestStart(): api_commons_workflows_test_bot_pb.TestBotNodeTestStart | undefined;
  setTestBotTestStart(value?: api_commons_workflows_test_bot_pb.TestBotNodeTestStart): void;

  hasTestBotTestStep(): boolean;
  clearTestBotTestStep(): void;
  getTestBotTestStep(): api_commons_workflows_test_bot_pb.TestBotNodeTestStep | undefined;
  setTestBotTestStep(value?: api_commons_workflows_test_bot_pb.TestBotNodeTestStep): void;

  hasTestBotTestEnd(): boolean;
  clearTestBotTestEnd(): void;
  getTestBotTestEnd(): api_commons_workflows_test_bot_pb.TestBotNodeTestEnd | undefined;
  setTestBotTestEnd(value?: api_commons_workflows_test_bot_pb.TestBotNodeTestEnd): void;

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
    print?: api_commons_workflows_example_pb.NodePrint.AsObject,
    random?: api_commons_workflows_example_pb.NodeRandom.AsObject,
    consoleInput?: api_commons_workflows_example_pb.NodeConsoleInput.AsObject,
    comparator?: api_commons_workflows_example_pb.NodeComparator.AsObject,
    storeInput?: api_commons_workflows_example_pb.NodeStoreInput.AsObject,
    chatbot?: api_commons_workflows_example_pb.NodeChatbot.AsObject,
    omniPrompt?: api_commons_workflows_omni_pb.OmniNodePrompt.AsObject,
    omniSetSkill?: api_commons_workflows_omni_pb.OmniNodeSetSkill.AsObject,
    omniToAgent?: api_commons_workflows_omni_pb.OmniNodeToAgent.AsObject,
    omniError?: api_commons_workflows_omni_pb.OmniNodeError.AsObject,
    omniSendMessage?: api_commons_workflows_omni_pb.OmniNodeSendMessage.AsObject,
    omniUserInput?: api_commons_workflows_omni_pb.OmniNodeUserInput.AsObject,
    omniBranching?: api_commons_workflows_omni_pb.OmniNodeBranching.AsObject,
    omniToMatcher?: api_commons_workflows_omni_pb.OmniNodeToMatcher.AsObject,
    omniWebhook?: api_commons_workflows_omni_pb.OmniNodeWebhook.AsObject,
    omniScrublist?: api_commons_workflows_omni_pb.OmniNodeScrublist.AsObject,
    omniEndConversation?: api_commons_workflows_omni_pb.OmniNodeEndConversation.AsObject,
    omniBotTestStart?: api_commons_workflows_omni_bot_pb.OmniBotNodeTestStart.AsObject,
    omniBotTestStep?: api_commons_workflows_omni_bot_pb.OmniBotNodeTestStep.AsObject,
    omniBotTestEnd?: api_commons_workflows_omni_bot_pb.OmniBotNodeTestEnd.AsObject,
    testBotTestStart?: api_commons_workflows_test_bot_pb.TestBotNodeTestStart.AsObject,
    testBotTestStep?: api_commons_workflows_test_bot_pb.TestBotNodeTestStep.AsObject,
    testBotTestEnd?: api_commons_workflows_test_bot_pb.TestBotNodeTestEnd.AsObject,
  }

  export enum DefinitionCase {
    DEFINITION_NOT_SET = 0,
    PRINT = 101,
    RANDOM = 102,
    CONSOLE_INPUT = 103,
    COMPARATOR = 104,
    STORE_INPUT = 105,
    CHATBOT = 1000,
    OMNI_PROMPT = 201,
    OMNI_SET_SKILL = 202,
    OMNI_TO_AGENT = 203,
    OMNI_ERROR = 204,
    OMNI_SEND_MESSAGE = 206,
    OMNI_USER_INPUT = 207,
    OMNI_BRANCHING = 208,
    OMNI_TO_MATCHER = 209,
    OMNI_WEBHOOK = 210,
    OMNI_SCRUBLIST = 211,
    OMNI_END_CONVERSATION = 212,
    OMNI_BOT_TEST_START = 301,
    OMNI_BOT_TEST_STEP = 302,
    OMNI_BOT_TEST_END = 303,
    TEST_BOT_TEST_START = 401,
    TEST_BOT_TEST_STEP = 402,
    TEST_BOT_TEST_END = 403,
  }
}

