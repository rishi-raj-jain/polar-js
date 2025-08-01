/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type EventsGetRequest = {
  /**
   * The event ID.
   */
  id: string;
};

/** @internal */
export const EventsGetRequest$inboundSchema: z.ZodType<
  EventsGetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type EventsGetRequest$Outbound = {
  id: string;
};

/** @internal */
export const EventsGetRequest$outboundSchema: z.ZodType<
  EventsGetRequest$Outbound,
  z.ZodTypeDef,
  EventsGetRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsGetRequest$ {
  /** @deprecated use `EventsGetRequest$inboundSchema` instead. */
  export const inboundSchema = EventsGetRequest$inboundSchema;
  /** @deprecated use `EventsGetRequest$outboundSchema` instead. */
  export const outboundSchema = EventsGetRequest$outboundSchema;
  /** @deprecated use `EventsGetRequest$Outbound` instead. */
  export type Outbound = EventsGetRequest$Outbound;
}

export function eventsGetRequestToJSON(
  eventsGetRequest: EventsGetRequest,
): string {
  return JSON.stringify(
    EventsGetRequest$outboundSchema.parse(eventsGetRequest),
  );
}

export function eventsGetRequestFromJSON(
  jsonString: string,
): SafeParseResult<EventsGetRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EventsGetRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EventsGetRequest' from JSON`,
  );
}
