/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  EventCreateCustomer,
  EventCreateCustomer$inboundSchema,
  EventCreateCustomer$Outbound,
  EventCreateCustomer$outboundSchema,
} from "./eventcreatecustomer.js";
import {
  EventCreateExternalCustomer,
  EventCreateExternalCustomer$inboundSchema,
  EventCreateExternalCustomer$Outbound,
  EventCreateExternalCustomer$outboundSchema,
} from "./eventcreateexternalcustomer.js";

export type Events = EventCreateCustomer | EventCreateExternalCustomer;

export type EventsIngest = {
  /**
   * List of events to ingest.
   */
  events: Array<EventCreateCustomer | EventCreateExternalCustomer>;
};

/** @internal */
export const Events$inboundSchema: z.ZodType<Events, z.ZodTypeDef, unknown> = z
  .union([
    EventCreateCustomer$inboundSchema,
    EventCreateExternalCustomer$inboundSchema,
  ]);

/** @internal */
export type Events$Outbound =
  | EventCreateCustomer$Outbound
  | EventCreateExternalCustomer$Outbound;

/** @internal */
export const Events$outboundSchema: z.ZodType<
  Events$Outbound,
  z.ZodTypeDef,
  Events
> = z.union([
  EventCreateCustomer$outboundSchema,
  EventCreateExternalCustomer$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Events$ {
  /** @deprecated use `Events$inboundSchema` instead. */
  export const inboundSchema = Events$inboundSchema;
  /** @deprecated use `Events$outboundSchema` instead. */
  export const outboundSchema = Events$outboundSchema;
  /** @deprecated use `Events$Outbound` instead. */
  export type Outbound = Events$Outbound;
}

export function eventsToJSON(events: Events): string {
  return JSON.stringify(Events$outboundSchema.parse(events));
}

export function eventsFromJSON(
  jsonString: string,
): SafeParseResult<Events, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Events$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Events' from JSON`,
  );
}

/** @internal */
export const EventsIngest$inboundSchema: z.ZodType<
  EventsIngest,
  z.ZodTypeDef,
  unknown
> = z.object({
  events: z.array(
    z.union([
      EventCreateCustomer$inboundSchema,
      EventCreateExternalCustomer$inboundSchema,
    ]),
  ),
});

/** @internal */
export type EventsIngest$Outbound = {
  events: Array<
    EventCreateCustomer$Outbound | EventCreateExternalCustomer$Outbound
  >;
};

/** @internal */
export const EventsIngest$outboundSchema: z.ZodType<
  EventsIngest$Outbound,
  z.ZodTypeDef,
  EventsIngest
> = z.object({
  events: z.array(
    z.union([
      EventCreateCustomer$outboundSchema,
      EventCreateExternalCustomer$outboundSchema,
    ]),
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsIngest$ {
  /** @deprecated use `EventsIngest$inboundSchema` instead. */
  export const inboundSchema = EventsIngest$inboundSchema;
  /** @deprecated use `EventsIngest$outboundSchema` instead. */
  export const outboundSchema = EventsIngest$outboundSchema;
  /** @deprecated use `EventsIngest$Outbound` instead. */
  export type Outbound = EventsIngest$Outbound;
}

export function eventsIngestToJSON(eventsIngest: EventsIngest): string {
  return JSON.stringify(EventsIngest$outboundSchema.parse(eventsIngest));
}

export function eventsIngestFromJSON(
  jsonString: string,
): SafeParseResult<EventsIngest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EventsIngest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EventsIngest' from JSON`,
  );
}
