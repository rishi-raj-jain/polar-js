/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";

export const EventNamesSortProperty = {
  Name: "name",
  MinusName: "-name",
  Occurrences: "occurrences",
  MinusOccurrences: "-occurrences",
  FirstSeen: "first_seen",
  MinusFirstSeen: "-first_seen",
  LastSeen: "last_seen",
  MinusLastSeen: "-last_seen",
} as const;
export type EventNamesSortProperty = ClosedEnum<typeof EventNamesSortProperty>;

/** @internal */
export const EventNamesSortProperty$inboundSchema: z.ZodNativeEnum<
  typeof EventNamesSortProperty
> = z.nativeEnum(EventNamesSortProperty);

/** @internal */
export const EventNamesSortProperty$outboundSchema: z.ZodNativeEnum<
  typeof EventNamesSortProperty
> = EventNamesSortProperty$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventNamesSortProperty$ {
  /** @deprecated use `EventNamesSortProperty$inboundSchema` instead. */
  export const inboundSchema = EventNamesSortProperty$inboundSchema;
  /** @deprecated use `EventNamesSortProperty$outboundSchema` instead. */
  export const outboundSchema = EventNamesSortProperty$outboundSchema;
}
