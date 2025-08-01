/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ProductPriceMeter,
  ProductPriceMeter$inboundSchema,
  ProductPriceMeter$Outbound,
  ProductPriceMeter$outboundSchema,
} from "./productpricemeter.js";
import {
  ProductPriceType,
  ProductPriceType$inboundSchema,
  ProductPriceType$outboundSchema,
} from "./productpricetype.js";
import {
  SubscriptionRecurringInterval,
  SubscriptionRecurringInterval$inboundSchema,
  SubscriptionRecurringInterval$outboundSchema,
} from "./subscriptionrecurringinterval.js";

/**
 * A metered, usage-based, price for a product, with a fixed unit price.
 */
export type ProductPriceMeteredUnit = {
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
  amountType: "metered_unit";
  /**
   * Whether the price is archived and no longer available.
   */
  isArchived: boolean;
  /**
   * The ID of the product owning the price.
   */
  productId: string;
  type: ProductPriceType;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  recurringInterval: SubscriptionRecurringInterval | null;
  /**
   * The currency.
   */
  priceCurrency: string;
  /**
   * The price per unit in cents.
   */
  unitAmount: string;
  /**
   * The maximum amount in cents that can be charged, regardless of the number of units consumed.
   */
  capAmount: number | null;
  /**
   * The ID of the meter associated to the price.
   */
  meterId: string;
  /**
   * A meter associated to a metered price.
   */
  meter: ProductPriceMeter;
};

/** @internal */
export const ProductPriceMeteredUnit$inboundSchema: z.ZodType<
  ProductPriceMeteredUnit,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  amount_type: z.literal("metered_unit"),
  is_archived: z.boolean(),
  product_id: z.string(),
  type: ProductPriceType$inboundSchema,
  recurring_interval: z.nullable(SubscriptionRecurringInterval$inboundSchema),
  price_currency: z.string(),
  unit_amount: z.string(),
  cap_amount: z.nullable(z.number().int()),
  meter_id: z.string(),
  meter: ProductPriceMeter$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "amount_type": "amountType",
    "is_archived": "isArchived",
    "product_id": "productId",
    "recurring_interval": "recurringInterval",
    "price_currency": "priceCurrency",
    "unit_amount": "unitAmount",
    "cap_amount": "capAmount",
    "meter_id": "meterId",
  });
});

/** @internal */
export type ProductPriceMeteredUnit$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  amount_type: "metered_unit";
  is_archived: boolean;
  product_id: string;
  type: string;
  recurring_interval: string | null;
  price_currency: string;
  unit_amount: string;
  cap_amount: number | null;
  meter_id: string;
  meter: ProductPriceMeter$Outbound;
};

/** @internal */
export const ProductPriceMeteredUnit$outboundSchema: z.ZodType<
  ProductPriceMeteredUnit$Outbound,
  z.ZodTypeDef,
  ProductPriceMeteredUnit
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  amountType: z.literal("metered_unit"),
  isArchived: z.boolean(),
  productId: z.string(),
  type: ProductPriceType$outboundSchema,
  recurringInterval: z.nullable(SubscriptionRecurringInterval$outboundSchema),
  priceCurrency: z.string(),
  unitAmount: z.string(),
  capAmount: z.nullable(z.number().int()),
  meterId: z.string(),
  meter: ProductPriceMeter$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    amountType: "amount_type",
    isArchived: "is_archived",
    productId: "product_id",
    recurringInterval: "recurring_interval",
    priceCurrency: "price_currency",
    unitAmount: "unit_amount",
    capAmount: "cap_amount",
    meterId: "meter_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceMeteredUnit$ {
  /** @deprecated use `ProductPriceMeteredUnit$inboundSchema` instead. */
  export const inboundSchema = ProductPriceMeteredUnit$inboundSchema;
  /** @deprecated use `ProductPriceMeteredUnit$outboundSchema` instead. */
  export const outboundSchema = ProductPriceMeteredUnit$outboundSchema;
  /** @deprecated use `ProductPriceMeteredUnit$Outbound` instead. */
  export type Outbound = ProductPriceMeteredUnit$Outbound;
}

export function productPriceMeteredUnitToJSON(
  productPriceMeteredUnit: ProductPriceMeteredUnit,
): string {
  return JSON.stringify(
    ProductPriceMeteredUnit$outboundSchema.parse(productPriceMeteredUnit),
  );
}

export function productPriceMeteredUnitFromJSON(
  jsonString: string,
): SafeParseResult<ProductPriceMeteredUnit, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProductPriceMeteredUnit$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductPriceMeteredUnit' from JSON`,
  );
}
