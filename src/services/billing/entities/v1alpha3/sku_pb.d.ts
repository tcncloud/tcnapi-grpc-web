// package: services.billing.entities.v1alpha3
// file: services/billing/entities/v1alpha3/sku.proto

import * as jspb from "google-protobuf";
import * as services_billing_entities_v1alpha3_matching_pb from "../../../../services/billing/entities/v1alpha3/matching_pb";

export class Sku extends jspb.Message {
  getSkuId(): string;
  setSkuId(value: string): void;

  hasRatingModule(): boolean;
  clearRatingModule(): void;
  getRatingModule(): RatingModule | undefined;
  setRatingModule(value?: RatingModule): void;

  hasMatchingConfig(): boolean;
  clearMatchingConfig(): void;
  getMatchingConfig(): services_billing_entities_v1alpha3_matching_pb.MatchingConfig | undefined;
  setMatchingConfig(value?: services_billing_entities_v1alpha3_matching_pb.MatchingConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sku.AsObject;
  static toObject(includeInstance: boolean, msg: Sku): Sku.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Sku, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sku;
  static deserializeBinaryFromReader(message: Sku, reader: jspb.BinaryReader): Sku;
}

export namespace Sku {
  export type AsObject = {
    skuId: string,
    ratingModule?: RatingModule.AsObject,
    matchingConfig?: services_billing_entities_v1alpha3_matching_pb.MatchingConfig.AsObject,
  }
}

export class RatingModule extends jspb.Message {
  getRatingModuleId(): string;
  setRatingModuleId(value: string): void;

  getCategoryOne(): string;
  setCategoryOne(value: string): void;

  getCategoryTwo(): string;
  setCategoryTwo(value: string): void;

  getCategoryThree(): string;
  setCategoryThree(value: string): void;

  getRatingModule(): string;
  setRatingModule(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RatingModule.AsObject;
  static toObject(includeInstance: boolean, msg: RatingModule): RatingModule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RatingModule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RatingModule;
  static deserializeBinaryFromReader(message: RatingModule, reader: jspb.BinaryReader): RatingModule;
}

export namespace RatingModule {
  export type AsObject = {
    ratingModuleId: string,
    categoryOne: string,
    categoryTwo: string,
    categoryThree: string,
    ratingModule: string,
  }
}

