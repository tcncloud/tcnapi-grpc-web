// package: api.commons
// file: api/commons/ana_charts.proto

import * as jspb from "google-protobuf";

export interface BarChartOrientationMap {
  BAR_CHART_ORIENTATION_BAR: 0;
  BAR_CHART_ORIENTATION_COLUMN: 1;
}

export const BarChartOrientation: BarChartOrientationMap;

export interface ChartOrientationMap {
  CHART_ORIENTATION_HORIZONTAL: 0;
  CHART_ORIENTATION_VERTICAL: 1;
}

export const ChartOrientation: ChartOrientationMap;

export interface AreaChartChoiceMap {
  AREA_CHART_CHOICE_AREA: 0;
  AREA_CHART_CHOICE_AREASPLINE: 1;
}

export const AreaChartChoice: AreaChartChoiceMap;

export interface LineChartStepMap {
  LINE_CHART_STEP_LEFT: 0;
  LINE_CHART_STEP_CENTER: 1;
  LINE_CHART_STEP_RIGHT: 2;
  LINE_CHART_STEP_NOLINE: 3;
}

export const LineChartStep: LineChartStepMap;

export interface ChartDisplayLabelsMap {
  CHART_DISPLAY_LABELS_NEVER: 0;
  CHART_DISPLAY_LABELS_ALWAYS: 1;
}

export const ChartDisplayLabels: ChartDisplayLabelsMap;

export interface ThresholdTypeMap {
  THRESHOLD_TYPE_STATIC: 0;
  THRESHOLD_TYPE_DATA_POINT: 1;
  THRESHOLD_TYPE_NOT_SET: 2;
}

export const ThresholdType: ThresholdTypeMap;

export interface PackedBubbleChoiceMap {
  PACKED_BUBBLE_CHOICE_PACKED: 0;
  PACKED_BUBBLE_CHOICE_SPLIT: 1;
}

export const PackedBubbleChoice: PackedBubbleChoiceMap;

export interface SuffixChoicesMap {
  SUFFIX_CHOICES_NOSUFFIX: 0;
  SUFFIX_CHOICES_DOLLARS: 1;
  SUFFIX_CHOICES_PERCENTAGE: 2;
}

export const SuffixChoices: SuffixChoicesMap;

