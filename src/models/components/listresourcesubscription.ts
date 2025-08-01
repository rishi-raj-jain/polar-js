/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Pagination,
  Pagination$inboundSchema,
  Pagination$Outbound,
  Pagination$outboundSchema,
} from "./pagination.js";
import {
  Subscription,
  Subscription$inboundSchema,
  Subscription$Outbound,
  Subscription$outboundSchema,
} from "./subscription.js";

export type ListResourceSubscription = {
  items: Array<Subscription>;
  pagination: Pagination;
};

/** @internal */
export const ListResourceSubscription$inboundSchema: z.ZodType<
  ListResourceSubscription,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(Subscription$inboundSchema),
  pagination: Pagination$inboundSchema,
});

/** @internal */
export type ListResourceSubscription$Outbound = {
  items: Array<Subscription$Outbound>;
  pagination: Pagination$Outbound;
};

/** @internal */
export const ListResourceSubscription$outboundSchema: z.ZodType<
  ListResourceSubscription$Outbound,
  z.ZodTypeDef,
  ListResourceSubscription
> = z.object({
  items: z.array(Subscription$outboundSchema),
  pagination: Pagination$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListResourceSubscription$ {
  /** @deprecated use `ListResourceSubscription$inboundSchema` instead. */
  export const inboundSchema = ListResourceSubscription$inboundSchema;
  /** @deprecated use `ListResourceSubscription$outboundSchema` instead. */
  export const outboundSchema = ListResourceSubscription$outboundSchema;
  /** @deprecated use `ListResourceSubscription$Outbound` instead. */
  export type Outbound = ListResourceSubscription$Outbound;
}

export function listResourceSubscriptionToJSON(
  listResourceSubscription: ListResourceSubscription,
): string {
  return JSON.stringify(
    ListResourceSubscription$outboundSchema.parse(listResourceSubscription),
  );
}

export function listResourceSubscriptionFromJSON(
  jsonString: string,
): SafeParseResult<ListResourceSubscription, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListResourceSubscription$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListResourceSubscription' from JSON`,
  );
}
