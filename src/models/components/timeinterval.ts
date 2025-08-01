/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";

export const TimeInterval = {
  Year: "year",
  Month: "month",
  Week: "week",
  Day: "day",
  Hour: "hour",
} as const;
export type TimeInterval = ClosedEnum<typeof TimeInterval>;

/** @internal */
export const TimeInterval$inboundSchema: z.ZodNativeEnum<typeof TimeInterval> =
  z.nativeEnum(TimeInterval);

/** @internal */
export const TimeInterval$outboundSchema: z.ZodNativeEnum<typeof TimeInterval> =
  TimeInterval$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimeInterval$ {
  /** @deprecated use `TimeInterval$inboundSchema` instead. */
  export const inboundSchema = TimeInterval$inboundSchema;
  /** @deprecated use `TimeInterval$outboundSchema` instead. */
  export const outboundSchema = TimeInterval$outboundSchema;
}
