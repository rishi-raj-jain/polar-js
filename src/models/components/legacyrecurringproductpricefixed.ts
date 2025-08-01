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

/**
 * A recurring price for a product, i.e. a subscription.
 *
 * @remarks
 *
 * **Deprecated**: The recurring interval should be set on the product itself.
 */
export type LegacyRecurringProductPriceFixed = {
  /**
   * Creation timestamp of the object.
   */
  createdAt: Date;
  /**
   * Last modification timestamp of the object.
   */
  modifiedAt: Date | null;
  /**
   * The ID of the price.
   */
  id: string;
  amountType: "fixed";
  /**
   * Whether the price is archived and no longer available.
   */
  isArchived: boolean;
  /**
   * The ID of the product owning the price.
   */
  productId: string;
  /**
   * The type of the price.
   */
  type: "recurring";
  recurringInterval: SubscriptionRecurringInterval;
  /**
   * The currency.
   */
  priceCurrency: string;
  /**
   * The price in cents.
   */
  priceAmount: number;
  legacy: true;
};

/** @internal */
export const LegacyRecurringProductPriceFixed$inboundSchema: z.ZodType<
  LegacyRecurringProductPriceFixed,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  amount_type: z.literal("fixed"),
  is_archived: z.boolean(),
  product_id: z.string(),
  type: z.literal("recurring"),
  recurring_interval: SubscriptionRecurringInterval$inboundSchema,
  price_currency: z.string(),
  price_amount: z.number().int(),
  legacy: z.literal(true),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "amount_type": "amountType",
    "is_archived": "isArchived",
    "product_id": "productId",
    "recurring_interval": "recurringInterval",
    "price_currency": "priceCurrency",
    "price_amount": "priceAmount",
  });
});

/** @internal */
export type LegacyRecurringProductPriceFixed$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  amount_type: "fixed";
  is_archived: boolean;
  product_id: string;
  type: "recurring";
  recurring_interval: string;
  price_currency: string;
  price_amount: number;
  legacy: true;
};

/** @internal */
export const LegacyRecurringProductPriceFixed$outboundSchema: z.ZodType<
  LegacyRecurringProductPriceFixed$Outbound,
  z.ZodTypeDef,
  LegacyRecurringProductPriceFixed
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  amountType: z.literal("fixed"),
  isArchived: z.boolean(),
  productId: z.string(),
  type: z.literal("recurring"),
  recurringInterval: SubscriptionRecurringInterval$outboundSchema,
  priceCurrency: z.string(),
  priceAmount: z.number().int(),
  legacy: z.literal(true),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    amountType: "amount_type",
    isArchived: "is_archived",
    productId: "product_id",
    recurringInterval: "recurring_interval",
    priceCurrency: "price_currency",
    priceAmount: "price_amount",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LegacyRecurringProductPriceFixed$ {
  /** @deprecated use `LegacyRecurringProductPriceFixed$inboundSchema` instead. */
  export const inboundSchema = LegacyRecurringProductPriceFixed$inboundSchema;
  /** @deprecated use `LegacyRecurringProductPriceFixed$outboundSchema` instead. */
  export const outboundSchema = LegacyRecurringProductPriceFixed$outboundSchema;
  /** @deprecated use `LegacyRecurringProductPriceFixed$Outbound` instead. */
  export type Outbound = LegacyRecurringProductPriceFixed$Outbound;
}

export function legacyRecurringProductPriceFixedToJSON(
  legacyRecurringProductPriceFixed: LegacyRecurringProductPriceFixed,
): string {
  return JSON.stringify(
    LegacyRecurringProductPriceFixed$outboundSchema.parse(
      legacyRecurringProductPriceFixed,
    ),
  );
}

export function legacyRecurringProductPriceFixedFromJSON(
  jsonString: string,
): SafeParseResult<LegacyRecurringProductPriceFixed, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LegacyRecurringProductPriceFixed$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LegacyRecurringProductPriceFixed' from JSON`,
  );
}
