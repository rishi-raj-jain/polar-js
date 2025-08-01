/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
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
 * A free price for a product.
 */
export type ProductPriceFree = {
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
  amountType: "free";
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
};

/** @internal */
export const ProductPriceFree$inboundSchema: z.ZodType<
  ProductPriceFree,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  amount_type: z.literal("free"),
  is_archived: z.boolean(),
  product_id: z.string(),
  type: ProductPriceType$inboundSchema,
  recurring_interval: z.nullable(SubscriptionRecurringInterval$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "amount_type": "amountType",
    "is_archived": "isArchived",
    "product_id": "productId",
    "recurring_interval": "recurringInterval",
  });
});

/** @internal */
export type ProductPriceFree$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  amount_type: "free";
  is_archived: boolean;
  product_id: string;
  type: string;
  recurring_interval: string | null;
};

/** @internal */
export const ProductPriceFree$outboundSchema: z.ZodType<
  ProductPriceFree$Outbound,
  z.ZodTypeDef,
  ProductPriceFree
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  amountType: z.literal("free"),
  isArchived: z.boolean(),
  productId: z.string(),
  type: ProductPriceType$outboundSchema,
  recurringInterval: z.nullable(SubscriptionRecurringInterval$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    amountType: "amount_type",
    isArchived: "is_archived",
    productId: "product_id",
    recurringInterval: "recurring_interval",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceFree$ {
  /** @deprecated use `ProductPriceFree$inboundSchema` instead. */
  export const inboundSchema = ProductPriceFree$inboundSchema;
  /** @deprecated use `ProductPriceFree$outboundSchema` instead. */
  export const outboundSchema = ProductPriceFree$outboundSchema;
  /** @deprecated use `ProductPriceFree$Outbound` instead. */
  export type Outbound = ProductPriceFree$Outbound;
}

export function productPriceFreeToJSON(
  productPriceFree: ProductPriceFree,
): string {
  return JSON.stringify(
    ProductPriceFree$outboundSchema.parse(productPriceFree),
  );
}

export function productPriceFreeFromJSON(
  jsonString: string,
): SafeParseResult<ProductPriceFree, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProductPriceFree$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductPriceFree' from JSON`,
  );
}
