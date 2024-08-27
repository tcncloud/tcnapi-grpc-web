// package: api.commons
// file: api/commons/labels.proto

import * as jspb from "google-protobuf";

export interface EntityTypeMap {
  ENTITY_TYPE_INVALID: 0;
  ENTITY_TYPE_USER: 1;
  ENTITY_TYPE_LMS_PIPELINE: 2;
}

export const EntityType: EntityTypeMap;

export interface LabeledEntityMap {
  LABELED_ENTITY_UNSPECIFIED: 0;
  LABELED_ENTITY_SKILL_GROUP: 1;
  LABELED_ENTITY_USER: 2;
  LABELED_ENTITY_TICKET: 3;
}

export const LabeledEntity: LabeledEntityMap;

