/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Schema to create a fixed price.
 */
export type ProductPriceFixedCreate = {
  amountType: "fixed";
  /**
   * The price in cents.
   */
  priceAmount: number;
  /**
   * The currency. Currently, only `usd` is supported.
   */
  priceCurrency?: string | undefined;
};

/** @internal */
export const ProductPriceFixedCreate$inboundSchema: z.ZodType<
  ProductPriceFixedCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount_type: z.literal("fixed"),
  price_amount: z.number().int(),
  price_currency: z.string().default("usd"),
}).transform((v) => {
  return remap$(v, {
    "amount_type": "amountType",
    "price_amount": "priceAmount",
    "price_currency": "priceCurrency",
  });
});

/** @internal */
export type ProductPriceFixedCreate$Outbound = {
  amount_type: "fixed";
  price_amount: number;
  price_currency: string;
};

/** @internal */
export const ProductPriceFixedCreate$outboundSchema: z.ZodType<
  ProductPriceFixedCreate$Outbound,
  z.ZodTypeDef,
  ProductPriceFixedCreate
> = z.object({
  amountType: z.literal("fixed"),
  priceAmount: z.number().int(),
  priceCurrency: z.string().default("usd"),
}).transform((v) => {
  return remap$(v, {
    amountType: "amount_type",
    priceAmount: "price_amount",
    priceCurrency: "price_currency",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceFixedCreate$ {
  /** @deprecated use `ProductPriceFixedCreate$inboundSchema` instead. */
  export const inboundSchema = ProductPriceFixedCreate$inboundSchema;
  /** @deprecated use `ProductPriceFixedCreate$outboundSchema` instead. */
  export const outboundSchema = ProductPriceFixedCreate$outboundSchema;
  /** @deprecated use `ProductPriceFixedCreate$Outbound` instead. */
  export type Outbound = ProductPriceFixedCreate$Outbound;
}

export function productPriceFixedCreateToJSON(
  productPriceFixedCreate: ProductPriceFixedCreate,
): string {
  return JSON.stringify(
    ProductPriceFixedCreate$outboundSchema.parse(productPriceFixedCreate),
  );
}

export function productPriceFixedCreateFromJSON(
  jsonString: string,
): SafeParseResult<ProductPriceFixedCreate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProductPriceFixedCreate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductPriceFixedCreate' from JSON`,
  );
}
