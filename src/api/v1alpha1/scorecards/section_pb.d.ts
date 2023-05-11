// package: api.v1alpha1.scorecards
// file: api/v1alpha1/scorecards/section.proto

import * as jspb from "google-protobuf";
import * as api_commons_scorecards_pb from "../../../api/commons/scorecards_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class CreateSectionRequest extends jspb.Message {
  hasSection(): boolean;
  clearSection(): void;
  getSection(): api_commons_scorecards_pb.Section | undefined;
  setSection(value?: api_commons_scorecards_pb.Section): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSectionRequest): CreateSectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSectionRequest;
  static deserializeBinaryFromReader(message: CreateSectionRequest, reader: jspb.BinaryReader): CreateSectionRequest;
}

export namespace CreateSectionRequest {
  export type AsObject = {
    section?: api_commons_scorecards_pb.Section.AsObject,
  }
}

export class CreateSectionResponse extends jspb.Message {
  hasSection(): boolean;
  clearSection(): void;
  getSection(): api_commons_scorecards_pb.Section | undefined;
  setSection(value?: api_commons_scorecards_pb.Section): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSectionResponse): CreateSectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSectionResponse;
  static deserializeBinaryFromReader(message: CreateSectionResponse, reader: jspb.BinaryReader): CreateSectionResponse;
}

export namespace CreateSectionResponse {
  export type AsObject = {
    section?: api_commons_scorecards_pb.Section.AsObject,
  }
}

export class ListSectionsRequest extends jspb.Message {
  getScorecardId(): number;
  setScorecardId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSectionsRequest): ListSectionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSectionsRequest;
  static deserializeBinaryFromReader(message: ListSectionsRequest, reader: jspb.BinaryReader): ListSectionsRequest;
}

export namespace ListSectionsRequest {
  export type AsObject = {
    scorecardId: number,
  }
}

export class ListSectionsResponse extends jspb.Message {
  clearSectionsList(): void;
  getSectionsList(): Array<api_commons_scorecards_pb.Section>;
  setSectionsList(value: Array<api_commons_scorecards_pb.Section>): void;
  addSections(value?: api_commons_scorecards_pb.Section, index?: number): api_commons_scorecards_pb.Section;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSectionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSectionsResponse): ListSectionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSectionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSectionsResponse;
  static deserializeBinaryFromReader(message: ListSectionsResponse, reader: jspb.BinaryReader): ListSectionsResponse;
}

export namespace ListSectionsResponse {
  export type AsObject = {
    sectionsList: Array<api_commons_scorecards_pb.Section.AsObject>,
  }
}

export class UpdateSectionRequest extends jspb.Message {
  hasSection(): boolean;
  clearSection(): void;
  getSection(): api_commons_scorecards_pb.Section | undefined;
  setSection(value?: api_commons_scorecards_pb.Section): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSectionRequest): UpdateSectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSectionRequest;
  static deserializeBinaryFromReader(message: UpdateSectionRequest, reader: jspb.BinaryReader): UpdateSectionRequest;
}

export namespace UpdateSectionRequest {
  export type AsObject = {
    section?: api_commons_scorecards_pb.Section.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateSectionResponse extends jspb.Message {
  hasSection(): boolean;
  clearSection(): void;
  getSection(): api_commons_scorecards_pb.Section | undefined;
  setSection(value?: api_commons_scorecards_pb.Section): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSectionResponse): UpdateSectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSectionResponse;
  static deserializeBinaryFromReader(message: UpdateSectionResponse, reader: jspb.BinaryReader): UpdateSectionResponse;
}

export namespace UpdateSectionResponse {
  export type AsObject = {
    section?: api_commons_scorecards_pb.Section.AsObject,
  }
}

export class DeleteSectionRequest extends jspb.Message {
  getSectionId(): number;
  setSectionId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSectionRequest): DeleteSectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSectionRequest;
  static deserializeBinaryFromReader(message: DeleteSectionRequest, reader: jspb.BinaryReader): DeleteSectionRequest;
}

export namespace DeleteSectionRequest {
  export type AsObject = {
    sectionId: number,
  }
}

export class DeleteSectionResponse extends jspb.Message {
  hasSection(): boolean;
  clearSection(): void;
  getSection(): api_commons_scorecards_pb.Section | undefined;
  setSection(value?: api_commons_scorecards_pb.Section): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSectionResponse): DeleteSectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSectionResponse;
  static deserializeBinaryFromReader(message: DeleteSectionResponse, reader: jspb.BinaryReader): DeleteSectionResponse;
}

export namespace DeleteSectionResponse {
  export type AsObject = {
    section?: api_commons_scorecards_pb.Section.AsObject,
  }
}

export class GetSectionRequest extends jspb.Message {
  getSectionId(): number;
  setSectionId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSectionRequest): GetSectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSectionRequest;
  static deserializeBinaryFromReader(message: GetSectionRequest, reader: jspb.BinaryReader): GetSectionRequest;
}

export namespace GetSectionRequest {
  export type AsObject = {
    sectionId: number,
  }
}

export class GetSectionResponse extends jspb.Message {
  hasSection(): boolean;
  clearSection(): void;
  getSection(): api_commons_scorecards_pb.Section | undefined;
  setSection(value?: api_commons_scorecards_pb.Section): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSectionResponse): GetSectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSectionResponse;
  static deserializeBinaryFromReader(message: GetSectionResponse, reader: jspb.BinaryReader): GetSectionResponse;
}

export namespace GetSectionResponse {
  export type AsObject = {
    section?: api_commons_scorecards_pb.Section.AsObject,
  }
}

