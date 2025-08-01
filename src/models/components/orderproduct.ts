/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  SubscriptionRecurringInterval,
  SubscriptionRecurringInterval$inboundSchema,
  SubscriptionRecurringInterval$outboundSchema,
} from "./subscriptionrecurringinterval.js";

export type OrderProductMetadata = string | number | number | boolean;

export type OrderProduct = {
  metadata: { [k: string]: string | number | number | boolean };
  /**
   * Creation timestamp of the object.
   */
  createdAt: Date;
  /**
   * Last modification timestamp of the object.
   */
  modifiedAt: Date | null;
  /**
   * The ID of the product.
   */
  id: string;
  /**
   * The name of the product.
   */
  name: string;
  /**
   * The description of the product.
   */
  description: string | null;
  /**
   * The recurring interval of the product. If `None`, the product is a one-time purchase.
   */
  recurringInterval: SubscriptionRecurringInterval | null;
  /**
   * Whether the product is a subscription.
   */
  isRecurring: boolean;
  /**
   * Whether the product is archived and no longer available.
   */
  isArchived: boolean;
  /**
   * The ID of the organization owning the product.
   */
  organizationId: string;
};

/** @internal */
export const OrderProductMetadata$inboundSchema: z.ZodType<
  OrderProductMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/** @internal */
export type OrderProductMetadata$Outbound = string | number | number | boolean;

/** @internal */
export const OrderProductMetadata$outboundSchema: z.ZodType<
  OrderProductMetadata$Outbound,
  z.ZodTypeDef,
  OrderProductMetadata
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrderProductMetadata$ {
  /** @deprecated use `OrderProductMetadata$inboundSchema` instead. */
  export const inboundSchema = OrderProductMetadata$inboundSchema;
  /** @deprecated use `OrderProductMetadata$outboundSchema` instead. */
  export const outboundSchema = OrderProductMetadata$outboundSchema;
  /** @deprecated use `OrderProductMetadata$Outbound` instead. */
  export type Outbound = OrderProductMetadata$Outbound;
}

export function orderProductMetadataToJSON(
  orderProductMetadata: OrderProductMetadata,
): string {
  return JSON.stringify(
    OrderProductMetadata$outboundSchema.parse(orderProductMetadata),
  );
}

export function orderProductMetadataFromJSON(
  jsonString: string,
): SafeParseResult<OrderProductMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OrderProductMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OrderProductMetadata' from JSON`,
  );
}

/** @internal */
export const OrderProduct$inboundSchema: z.ZodType<
  OrderProduct,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  name: z.string(),
  description: z.nullable(z.string()),
  recurring_interval: z.nullable(SubscriptionRecurringInterval$inboundSchema),
  is_recurring: z.boolean(),
  is_archived: z.boolean(),
  organization_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "recurring_interval": "recurringInterval",
    "is_recurring": "isRecurring",
    "is_archived": "isArchived",
    "organization_id": "organizationId",
  });
});

/** @internal */
export type OrderProduct$Outbound = {
  metadata: { [k: string]: string | number | number | boolean };
  created_at: string;
  modified_at: string | null;
  id: string;
  name: string;
  description: string | null;
  recurring_interval: string | null;
  is_recurring: boolean;
  is_archived: boolean;
  organization_id: string;
};

/** @internal */
export const OrderProduct$outboundSchema: z.ZodType<
  OrderProduct$Outbound,
  z.ZodTypeDef,
  OrderProduct
> = z.object({
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ),
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  name: z.string(),
  description: z.nullable(z.string()),
  recurringInterval: z.nullable(SubscriptionRecurringInterval$outboundSchema),
  isRecurring: z.boolean(),
  isArchived: z.boolean(),
  organizationId: z.string(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    recurringInterval: "recurring_interval",
    isRecurring: "is_recurring",
    isArchived: "is_archived",
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrderProduct$ {
  /** @deprecated use `OrderProduct$inboundSchema` instead. */
  export const inboundSchema = OrderProduct$inboundSchema;
  /** @deprecated use `OrderProduct$outboundSchema` instead. */
  export const outboundSchema = OrderProduct$outboundSchema;
  /** @deprecated use `OrderProduct$Outbound` instead. */
  export type Outbound = OrderProduct$Outbound;
}

export function orderProductToJSON(orderProduct: OrderProduct): string {
  return JSON.stringify(OrderProduct$outboundSchema.parse(orderProduct));
}

export function orderProductFromJSON(
  jsonString: string,
): SafeParseResult<OrderProduct, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OrderProduct$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OrderProduct' from JSON`,
  );
}
