// package: api.v1alpha1.explorer
// file: api/v1alpha1/explorer/pipeline.proto

import * as jspb from "google-protobuf";

export class Pipeline extends jspb.Message {
  clearNodesList(): void;
  getNodesList(): Array<Node>;
  setNodesList(value: Array<Node>): void;
  addNodes(value?: Node, index?: number): Node;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pipeline.AsObject;
  static toObject(includeInstance: boolean, msg: Pipeline): Pipeline.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Pipeline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pipeline;
  static deserializeBinaryFromReader(message: Pipeline, reader: jspb.BinaryReader): Pipeline;
}

export namespace Pipeline {
  export type AsObject = {
    nodesList: Array<Node.AsObject>,
  }
}

export class Node extends jspb.Message {
  getNodeId(): string;
  setNodeId(value: string): void;

  getType(): string;
  setType(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  clearInputIdsList(): void;
  getInputIdsList(): Array<string>;
  setInputIdsList(value: Array<string>): void;
  addInputIds(value: string, index?: number): string;

  clearOutputIdsList(): void;
  getOutputIdsList(): Array<string>;
  setOutputIdsList(value: Array<string>): void;
  addOutputIds(value: string, index?: number): string;

  hasFromNode(): boolean;
  clearFromNode(): void;
  getFromNode(): FromNode | undefined;
  setFromNode(value?: FromNode): void;

  hasFilterNode(): boolean;
  clearFilterNode(): void;
  getFilterNode(): FilterNode | undefined;
  setFilterNode(value?: FilterNode): void;

  hasDeriveNode(): boolean;
  clearDeriveNode(): void;
  getDeriveNode(): DeriveNode | undefined;
  setDeriveNode(value?: DeriveNode): void;

  hasGroupNode(): boolean;
  clearGroupNode(): void;
  getGroupNode(): GroupNode | undefined;
  setGroupNode(value?: GroupNode): void;

  hasJoinNode(): boolean;
  clearJoinNode(): void;
  getJoinNode(): JoinNode | undefined;
  setJoinNode(value?: JoinNode): void;

  hasSelectNode(): boolean;
  clearSelectNode(): void;
  getSelectNode(): SelectNode | undefined;
  setSelectNode(value?: SelectNode): void;

  hasAggregateNode(): boolean;
  clearAggregateNode(): void;
  getAggregateNode(): AggregateNode | undefined;
  setAggregateNode(value?: AggregateNode): void;

  hasTakeNode(): boolean;
  clearTakeNode(): void;
  getTakeNode(): TakeNode | undefined;
  setTakeNode(value?: TakeNode): void;

  hasJsonNode(): boolean;
  clearJsonNode(): void;
  getJsonNode(): JsonNode | undefined;
  setJsonNode(value?: JsonNode): void;

  hasMapNode(): boolean;
  clearMapNode(): void;
  getMapNode(): MapNode | undefined;
  setMapNode(value?: MapNode): void;

  hasReplaceNode(): boolean;
  clearReplaceNode(): void;
  getReplaceNode(): ReplaceNode | undefined;
  setReplaceNode(value?: ReplaceNode): void;

  hasSortNode(): boolean;
  clearSortNode(): void;
  getSortNode(): SortNode | undefined;
  setSortNode(value?: SortNode): void;

  hasStringManipulationNode(): boolean;
  clearStringManipulationNode(): void;
  getStringManipulationNode(): StringManipulationNode | undefined;
  setStringManipulationNode(value?: StringManipulationNode): void;

  hasTransposeNode(): boolean;
  clearTransposeNode(): void;
  getTransposeNode(): TransposeNode | undefined;
  setTransposeNode(value?: TransposeNode): void;

  getBodyCase(): Node.BodyCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Node.AsObject;
  static toObject(includeInstance: boolean, msg: Node): Node.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Node, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Node;
  static deserializeBinaryFromReader(message: Node, reader: jspb.BinaryReader): Node;
}

export namespace Node {
  export type AsObject = {
    nodeId: string,
    type: string,
    title: string,
    inputIdsList: Array<string>,
    outputIdsList: Array<string>,
    fromNode?: FromNode.AsObject,
    filterNode?: FilterNode.AsObject,
    deriveNode?: DeriveNode.AsObject,
    groupNode?: GroupNode.AsObject,
    joinNode?: JoinNode.AsObject,
    selectNode?: SelectNode.AsObject,
    aggregateNode?: AggregateNode.AsObject,
    takeNode?: TakeNode.AsObject,
    jsonNode?: JsonNode.AsObject,
    mapNode?: MapNode.AsObject,
    replaceNode?: ReplaceNode.AsObject,
    sortNode?: SortNode.AsObject,
    stringManipulationNode?: StringManipulationNode.AsObject,
    transposeNode?: TransposeNode.AsObject,
  }

  export enum BodyCase {
    BODY_NOT_SET = 0,
    FROM_NODE = 6,
    FILTER_NODE = 7,
    DERIVE_NODE = 8,
    GROUP_NODE = 9,
    JOIN_NODE = 10,
    SELECT_NODE = 11,
    AGGREGATE_NODE = 12,
    TAKE_NODE = 13,
    JSON_NODE = 14,
    MAP_NODE = 15,
    REPLACE_NODE = 16,
    SORT_NODE = 17,
    STRING_MANIPULATION_NODE = 18,
    TRANSPOSE_NODE = 19,
  }
}

export class FromNode extends jspb.Message {
  getDataset(): string;
  setDataset(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FromNode.AsObject;
  static toObject(includeInstance: boolean, msg: FromNode): FromNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FromNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FromNode;
  static deserializeBinaryFromReader(message: FromNode, reader: jspb.BinaryReader): FromNode;
}

export namespace FromNode {
  export type AsObject = {
    dataset: string,
  }
}

export class FilterNode extends jspb.Message {
  hasExpression(): boolean;
  clearExpression(): void;
  getExpression(): ExpressionNode | undefined;
  setExpression(value?: ExpressionNode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterNode.AsObject;
  static toObject(includeInstance: boolean, msg: FilterNode): FilterNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilterNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterNode;
  static deserializeBinaryFromReader(message: FilterNode, reader: jspb.BinaryReader): FilterNode;
}

export namespace FilterNode {
  export type AsObject = {
    expression?: ExpressionNode.AsObject,
  }
}

export class DeriveNode extends jspb.Message {
  getColumnName(): string;
  setColumnName(value: string): void;

  hasExpression(): boolean;
  clearExpression(): void;
  getExpression(): ExpressionNode | undefined;
  setExpression(value?: ExpressionNode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeriveNode.AsObject;
  static toObject(includeInstance: boolean, msg: DeriveNode): DeriveNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeriveNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeriveNode;
  static deserializeBinaryFromReader(message: DeriveNode, reader: jspb.BinaryReader): DeriveNode;
}

export namespace DeriveNode {
  export type AsObject = {
    columnName: string,
    expression?: ExpressionNode.AsObject,
  }
}

export class GroupNode extends jspb.Message {
  clearGroupByColumnsList(): void;
  getGroupByColumnsList(): Array<string>;
  setGroupByColumnsList(value: Array<string>): void;
  addGroupByColumns(value: string, index?: number): string;

  clearAggregationColumnsList(): void;
  getAggregationColumnsList(): Array<AggregationColumn>;
  setAggregationColumnsList(value: Array<AggregationColumn>): void;
  addAggregationColumns(value?: AggregationColumn, index?: number): AggregationColumn;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupNode.AsObject;
  static toObject(includeInstance: boolean, msg: GroupNode): GroupNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupNode;
  static deserializeBinaryFromReader(message: GroupNode, reader: jspb.BinaryReader): GroupNode;
}

export namespace GroupNode {
  export type AsObject = {
    groupByColumnsList: Array<string>,
    aggregationColumnsList: Array<AggregationColumn.AsObject>,
  }
}

export class TakeNode extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TakeNode.AsObject;
  static toObject(includeInstance: boolean, msg: TakeNode): TakeNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TakeNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TakeNode;
  static deserializeBinaryFromReader(message: TakeNode, reader: jspb.BinaryReader): TakeNode;
}

export namespace TakeNode {
  export type AsObject = {
    limit: number,
  }
}

export class AggregateNode extends jspb.Message {
  clearAggregationColumnsList(): void;
  getAggregationColumnsList(): Array<AggregationColumn>;
  setAggregationColumnsList(value: Array<AggregationColumn>): void;
  addAggregationColumns(value?: AggregationColumn, index?: number): AggregationColumn;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AggregateNode.AsObject;
  static toObject(includeInstance: boolean, msg: AggregateNode): AggregateNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AggregateNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AggregateNode;
  static deserializeBinaryFromReader(message: AggregateNode, reader: jspb.BinaryReader): AggregateNode;
}

export namespace AggregateNode {
  export type AsObject = {
    aggregationColumnsList: Array<AggregationColumn.AsObject>,
  }
}

export class AggregationColumn extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearGroupByColumnsList(): void;
  getGroupByColumnsList(): Array<string>;
  setGroupByColumnsList(value: Array<string>): void;
  addGroupByColumns(value: string, index?: number): string;

  getColumnToAggregate(): string;
  setColumnToAggregate(value: string): void;

  getAggregationFunction(): string;
  setAggregationFunction(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AggregationColumn.AsObject;
  static toObject(includeInstance: boolean, msg: AggregationColumn): AggregationColumn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AggregationColumn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AggregationColumn;
  static deserializeBinaryFromReader(message: AggregationColumn, reader: jspb.BinaryReader): AggregationColumn;
}

export namespace AggregationColumn {
  export type AsObject = {
    name: string,
    groupByColumnsList: Array<string>,
    columnToAggregate: string,
    aggregationFunction: string,
  }
}

export class Column extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getDataType(): string;
  setDataType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Column.AsObject;
  static toObject(includeInstance: boolean, msg: Column): Column.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Column, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Column;
  static deserializeBinaryFromReader(message: Column, reader: jspb.BinaryReader): Column;
}

export namespace Column {
  export type AsObject = {
    key: string,
    dataType: string,
  }
}

export class ExpressionNode extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  clearChildrenList(): void;
  getChildrenList(): Array<ExpressionNode>;
  setChildrenList(value: Array<ExpressionNode>): void;
  addChildren(value?: ExpressionNode, index?: number): ExpressionNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpressionNode.AsObject;
  static toObject(includeInstance: boolean, msg: ExpressionNode): ExpressionNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExpressionNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpressionNode;
  static deserializeBinaryFromReader(message: ExpressionNode, reader: jspb.BinaryReader): ExpressionNode;
}

export namespace ExpressionNode {
  export type AsObject = {
    type: string,
    value: string,
    childrenList: Array<ExpressionNode.AsObject>,
  }
}

export class MapNode extends jspb.Message {
  hasNewColumn(): boolean;
  clearNewColumn(): void;
  getNewColumn(): Column | undefined;
  setNewColumn(value?: Column): void;

  hasColumnToMap(): boolean;
  clearColumnToMap(): void;
  getColumnToMap(): Column | undefined;
  setColumnToMap(value?: Column): void;

  clearMappingsList(): void;
  getMappingsList(): Array<MapNode.Mapping>;
  setMappingsList(value: Array<MapNode.Mapping>): void;
  addMappings(value?: MapNode.Mapping, index?: number): MapNode.Mapping;

  hasDefaultValue(): boolean;
  clearDefaultValue(): void;
  getDefaultValue(): ExpressionNode | undefined;
  setDefaultValue(value?: ExpressionNode): void;

  getIsComplex(): boolean;
  setIsComplex(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapNode.AsObject;
  static toObject(includeInstance: boolean, msg: MapNode): MapNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapNode;
  static deserializeBinaryFromReader(message: MapNode, reader: jspb.BinaryReader): MapNode;
}

export namespace MapNode {
  export type AsObject = {
    newColumn?: Column.AsObject,
    columnToMap?: Column.AsObject,
    mappingsList: Array<MapNode.Mapping.AsObject>,
    defaultValue?: ExpressionNode.AsObject,
    isComplex: boolean,
  }

  export class Mapping extends jspb.Message {
    hasCondition(): boolean;
    clearCondition(): void;
    getCondition(): ExpressionNode | undefined;
    setCondition(value?: ExpressionNode): void;

    hasResult(): boolean;
    clearResult(): void;
    getResult(): ExpressionNode | undefined;
    setResult(value?: ExpressionNode): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Mapping.AsObject;
    static toObject(includeInstance: boolean, msg: Mapping): Mapping.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Mapping, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Mapping;
    static deserializeBinaryFromReader(message: Mapping, reader: jspb.BinaryReader): Mapping;
  }

  export namespace Mapping {
    export type AsObject = {
      condition?: ExpressionNode.AsObject,
      result?: ExpressionNode.AsObject,
    }
  }
}

export class JoinNode extends jspb.Message {
  getSide(): string;
  setSide(value: string): void;

  clearJoinColumnsList(): void;
  getJoinColumnsList(): Array<JoinColumn>;
  setJoinColumnsList(value: Array<JoinColumn>): void;
  addJoinColumns(value?: JoinColumn, index?: number): JoinColumn;

  hasFirstParent(): boolean;
  clearFirstParent(): void;
  getFirstParent(): Parent | undefined;
  setFirstParent(value?: Parent): void;

  hasSecondParent(): boolean;
  clearSecondParent(): void;
  getSecondParent(): Parent | undefined;
  setSecondParent(value?: Parent): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinNode.AsObject;
  static toObject(includeInstance: boolean, msg: JoinNode): JoinNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinNode;
  static deserializeBinaryFromReader(message: JoinNode, reader: jspb.BinaryReader): JoinNode;
}

export namespace JoinNode {
  export type AsObject = {
    side: string,
    joinColumnsList: Array<JoinColumn.AsObject>,
    firstParent?: Parent.AsObject,
    secondParent?: Parent.AsObject,
  }
}

export class JoinColumn extends jspb.Message {
  getFirstParentColumn(): string;
  setFirstParentColumn(value: string): void;

  getSecondParentColumn(): string;
  setSecondParentColumn(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinColumn.AsObject;
  static toObject(includeInstance: boolean, msg: JoinColumn): JoinColumn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinColumn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinColumn;
  static deserializeBinaryFromReader(message: JoinColumn, reader: jspb.BinaryReader): JoinColumn;
}

export namespace JoinColumn {
  export type AsObject = {
    firstParentColumn: string,
    secondParentColumn: string,
  }
}

export class Parent extends jspb.Message {
  getParentId(): string;
  setParentId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getRenamedColumnsMap(): jspb.Map<string, string>;
  clearRenamedColumnsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Parent.AsObject;
  static toObject(includeInstance: boolean, msg: Parent): Parent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Parent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Parent;
  static deserializeBinaryFromReader(message: Parent, reader: jspb.BinaryReader): Parent;
}

export namespace Parent {
  export type AsObject = {
    parentId: string,
    title: string,
    renamedColumnsMap: Array<[string, string]>,
  }
}

export class SelectNode extends jspb.Message {
  clearColumnsList(): void;
  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): void;
  addColumns(value: string, index?: number): string;

  getRenamedColumnsMap(): jspb.Map<string, string>;
  clearRenamedColumnsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SelectNode.AsObject;
  static toObject(includeInstance: boolean, msg: SelectNode): SelectNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SelectNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SelectNode;
  static deserializeBinaryFromReader(message: SelectNode, reader: jspb.BinaryReader): SelectNode;
}

export namespace SelectNode {
  export type AsObject = {
    columnsList: Array<string>,
    renamedColumnsMap: Array<[string, string]>,
  }
}

export class JsonTarget extends jspb.Message {
  clearPathPartsList(): void;
  getPathPartsList(): Array<string>;
  setPathPartsList(value: Array<string>): void;
  addPathParts(value: string, index?: number): string;

  getColumnName(): string;
  setColumnName(value: string): void;

  getResultType(): string;
  setResultType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JsonTarget.AsObject;
  static toObject(includeInstance: boolean, msg: JsonTarget): JsonTarget.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JsonTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JsonTarget;
  static deserializeBinaryFromReader(message: JsonTarget, reader: jspb.BinaryReader): JsonTarget;
}

export namespace JsonTarget {
  export type AsObject = {
    pathPartsList: Array<string>,
    columnName: string,
    resultType: string,
  }
}

export class JsonNode extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getJsonColumn(): string;
  setJsonColumn(value: string): void;

  clearTargetsList(): void;
  getTargetsList(): Array<JsonTarget>;
  setTargetsList(value: Array<JsonTarget>): void;
  addTargets(value?: JsonTarget, index?: number): JsonTarget;

  hasUnnestToColumnsNode(): boolean;
  clearUnnestToColumnsNode(): void;
  getUnnestToColumnsNode(): UnnestToColumnsNode | undefined;
  setUnnestToColumnsNode(value?: UnnestToColumnsNode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JsonNode.AsObject;
  static toObject(includeInstance: boolean, msg: JsonNode): JsonNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JsonNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JsonNode;
  static deserializeBinaryFromReader(message: JsonNode, reader: jspb.BinaryReader): JsonNode;
}

export namespace JsonNode {
  export type AsObject = {
    type: string,
    jsonColumn: string,
    targetsList: Array<JsonTarget.AsObject>,
    unnestToColumnsNode?: UnnestToColumnsNode.AsObject,
  }
}

export class UnnestToColumnsNode extends jspb.Message {
  hasUnnestTarget(): boolean;
  clearUnnestTarget(): void;
  getUnnestTarget(): JsonTarget | undefined;
  setUnnestTarget(value?: JsonTarget): void;

  hasKeyTarget(): boolean;
  clearKeyTarget(): void;
  getKeyTarget(): JsonTarget | undefined;
  setKeyTarget(value?: JsonTarget): void;

  hasValueTarget(): boolean;
  clearValueTarget(): void;
  getValueTarget(): JsonTarget | undefined;
  setValueTarget(value?: JsonTarget): void;

  clearColumnsList(): void;
  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): void;
  addColumns(value: string, index?: number): string;

  clearPrimaryKeysList(): void;
  getPrimaryKeysList(): Array<string>;
  setPrimaryKeysList(value: Array<string>): void;
  addPrimaryKeys(value: string, index?: number): string;

  clearJsonColumnsList(): void;
  getJsonColumnsList(): Array<Column>;
  setJsonColumnsList(value: Array<Column>): void;
  addJsonColumns(value?: Column, index?: number): Column;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnnestToColumnsNode.AsObject;
  static toObject(includeInstance: boolean, msg: UnnestToColumnsNode): UnnestToColumnsNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnnestToColumnsNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnnestToColumnsNode;
  static deserializeBinaryFromReader(message: UnnestToColumnsNode, reader: jspb.BinaryReader): UnnestToColumnsNode;
}

export namespace UnnestToColumnsNode {
  export type AsObject = {
    unnestTarget?: JsonTarget.AsObject,
    keyTarget?: JsonTarget.AsObject,
    valueTarget?: JsonTarget.AsObject,
    columnsList: Array<string>,
    primaryKeysList: Array<string>,
    jsonColumnsList: Array<Column.AsObject>,
  }
}

export class ValuesReplacement extends jspb.Message {
  getTargetValue(): string;
  setTargetValue(value: string): void;

  getTargetDataType(): string;
  setTargetDataType(value: string): void;

  hasReplacementValue(): boolean;
  clearReplacementValue(): void;
  getReplacementValue(): ExpressionNode | undefined;
  setReplacementValue(value?: ExpressionNode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValuesReplacement.AsObject;
  static toObject(includeInstance: boolean, msg: ValuesReplacement): ValuesReplacement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValuesReplacement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValuesReplacement;
  static deserializeBinaryFromReader(message: ValuesReplacement, reader: jspb.BinaryReader): ValuesReplacement;
}

export namespace ValuesReplacement {
  export type AsObject = {
    targetValue: string,
    targetDataType: string,
    replacementValue?: ExpressionNode.AsObject,
  }
}

export class ColumnReplacement extends jspb.Message {
  clearColumnNamesList(): void;
  getColumnNamesList(): Array<string>;
  setColumnNamesList(value: Array<string>): void;
  addColumnNames(value: string, index?: number): string;

  clearValuesReplacementsList(): void;
  getValuesReplacementsList(): Array<ValuesReplacement>;
  setValuesReplacementsList(value: Array<ValuesReplacement>): void;
  addValuesReplacements(value?: ValuesReplacement, index?: number): ValuesReplacement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColumnReplacement.AsObject;
  static toObject(includeInstance: boolean, msg: ColumnReplacement): ColumnReplacement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ColumnReplacement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColumnReplacement;
  static deserializeBinaryFromReader(message: ColumnReplacement, reader: jspb.BinaryReader): ColumnReplacement;
}

export namespace ColumnReplacement {
  export type AsObject = {
    columnNamesList: Array<string>,
    valuesReplacementsList: Array<ValuesReplacement.AsObject>,
  }
}

export class ReplaceNode extends jspb.Message {
  clearColumnReplacementsList(): void;
  getColumnReplacementsList(): Array<ColumnReplacement>;
  setColumnReplacementsList(value: Array<ColumnReplacement>): void;
  addColumnReplacements(value?: ColumnReplacement, index?: number): ColumnReplacement;

  getIsComplex(): boolean;
  setIsComplex(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplaceNode.AsObject;
  static toObject(includeInstance: boolean, msg: ReplaceNode): ReplaceNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReplaceNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplaceNode;
  static deserializeBinaryFromReader(message: ReplaceNode, reader: jspb.BinaryReader): ReplaceNode;
}

export namespace ReplaceNode {
  export type AsObject = {
    columnReplacementsList: Array<ColumnReplacement.AsObject>,
    isComplex: boolean,
  }
}

export class SortColumn extends jspb.Message {
  getColumnName(): string;
  setColumnName(value: string): void;

  getAscending(): boolean;
  setAscending(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SortColumn.AsObject;
  static toObject(includeInstance: boolean, msg: SortColumn): SortColumn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SortColumn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SortColumn;
  static deserializeBinaryFromReader(message: SortColumn, reader: jspb.BinaryReader): SortColumn;
}

export namespace SortColumn {
  export type AsObject = {
    columnName: string,
    ascending: boolean,
  }
}

export class SortNode extends jspb.Message {
  clearSortColumnsList(): void;
  getSortColumnsList(): Array<SortColumn>;
  setSortColumnsList(value: Array<SortColumn>): void;
  addSortColumns(value?: SortColumn, index?: number): SortColumn;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SortNode.AsObject;
  static toObject(includeInstance: boolean, msg: SortNode): SortNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SortNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SortNode;
  static deserializeBinaryFromReader(message: SortNode, reader: jspb.BinaryReader): SortNode;
}

export namespace SortNode {
  export type AsObject = {
    sortColumnsList: Array<SortColumn.AsObject>,
  }
}

export class StringManipulationSplit extends jspb.Message {
  getSplitBy(): string;
  setSplitBy(value: string): void;

  getIsIndexExtraction(): boolean;
  setIsIndexExtraction(value: boolean): void;

  getIndexExtraction(): number;
  setIndexExtraction(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringManipulationSplit.AsObject;
  static toObject(includeInstance: boolean, msg: StringManipulationSplit): StringManipulationSplit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringManipulationSplit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringManipulationSplit;
  static deserializeBinaryFromReader(message: StringManipulationSplit, reader: jspb.BinaryReader): StringManipulationSplit;
}

export namespace StringManipulationSplit {
  export type AsObject = {
    splitBy: string,
    isIndexExtraction: boolean,
    indexExtraction: number,
  }
}

export class StringManipulationReplace extends jspb.Message {
  getTarget(): string;
  setTarget(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringManipulationReplace.AsObject;
  static toObject(includeInstance: boolean, msg: StringManipulationReplace): StringManipulationReplace.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringManipulationReplace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringManipulationReplace;
  static deserializeBinaryFromReader(message: StringManipulationReplace, reader: jspb.BinaryReader): StringManipulationReplace;
}

export namespace StringManipulationReplace {
  export type AsObject = {
    target: string,
    value: string,
  }
}

export class StringManipulationNode extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getSourceColumnName(): string;
  setSourceColumnName(value: string): void;

  getTargetColumnName(): string;
  setTargetColumnName(value: string): void;

  hasStringManipulationSplit(): boolean;
  clearStringManipulationSplit(): void;
  getStringManipulationSplit(): StringManipulationSplit | undefined;
  setStringManipulationSplit(value?: StringManipulationSplit): void;

  hasStringManipulationReplace(): boolean;
  clearStringManipulationReplace(): void;
  getStringManipulationReplace(): StringManipulationReplace | undefined;
  setStringManipulationReplace(value?: StringManipulationReplace): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringManipulationNode.AsObject;
  static toObject(includeInstance: boolean, msg: StringManipulationNode): StringManipulationNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringManipulationNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringManipulationNode;
  static deserializeBinaryFromReader(message: StringManipulationNode, reader: jspb.BinaryReader): StringManipulationNode;
}

export namespace StringManipulationNode {
  export type AsObject = {
    type: string,
    sourceColumnName: string,
    targetColumnName: string,
    stringManipulationSplit?: StringManipulationSplit.AsObject,
    stringManipulationReplace?: StringManipulationReplace.AsObject,
  }
}

export class TransposeNode extends jspb.Message {
  clearGroupByColumnsList(): void;
  getGroupByColumnsList(): Array<string>;
  setGroupByColumnsList(value: Array<string>): void;
  addGroupByColumns(value: string, index?: number): string;

  getKeyColumn(): string;
  setKeyColumn(value: string): void;

  clearOptionsList(): void;
  getOptionsList(): Array<TransposeNode.Option>;
  setOptionsList(value: Array<TransposeNode.Option>): void;
  addOptions(value?: TransposeNode.Option, index?: number): TransposeNode.Option;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransposeNode.AsObject;
  static toObject(includeInstance: boolean, msg: TransposeNode): TransposeNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransposeNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransposeNode;
  static deserializeBinaryFromReader(message: TransposeNode, reader: jspb.BinaryReader): TransposeNode;
}

export namespace TransposeNode {
  export type AsObject = {
    groupByColumnsList: Array<string>,
    keyColumn: string,
    optionsList: Array<TransposeNode.Option.AsObject>,
  }

  export class Option extends jspb.Message {
    getKeyName(): string;
    setKeyName(value: string): void;

    getValueColumn(): string;
    setValueColumn(value: string): void;

    getValueType(): string;
    setValueType(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Option.AsObject;
    static toObject(includeInstance: boolean, msg: Option): Option.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Option, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Option;
    static deserializeBinaryFromReader(message: Option, reader: jspb.BinaryReader): Option;
  }

  export namespace Option {
    export type AsObject = {
      keyName: string,
      valueColumn: string,
      valueType: string,
    }
  }
}

