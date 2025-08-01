/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CheckoutLinkCreateProductPriceMetadata =
  | string
  | number
  | number
  | boolean;

/**
 * Schema to create a new checkout link from a a single product price.
 *
 * @remarks
 *
 * **Deprecated**: Use `CheckoutLinkCreateProducts` instead.
 */
export type CheckoutLinkCreateProductPrice = {
  /**
   * Key-value object allowing you to store additional information.
   *
   * @remarks
   *
   * The key must be a string with a maximum length of **40 characters**.
   * The value must be either:
   *
   * * A string with a maximum length of **500 characters**
   * * An integer
   * * A floating-point number
   * * A boolean
   *
   * You can store up to **50 key-value pairs**.
   */
  metadata?: { [k: string]: string | number | number | boolean } | undefined;
  /**
   * Payment processor to use. Currently only Stripe is supported.
   */
  paymentProcessor: "stripe";
  /**
   * Optional label to distinguish links internally
   */
  label?: string | null | undefined;
  /**
   * Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it.
   */
  allowDiscountCodes?: boolean | undefined;
  /**
   * Whether to require the customer to fill their full billing address, instead of just the country. Customers in the US will always be required to fill their full address, regardless of this setting.
   */
  requireBillingAddress?: boolean | undefined;
  /**
   * ID of the discount to apply to the checkout. If the discount is not applicable anymore when opening the checkout link, it'll be ignored.
   */
  discountId?: string | null | undefined;
  /**
   * URL where the customer will be redirected after a successful payment.You can add the `checkout_id={CHECKOUT_ID}` query parameter to retrieve the checkout session id.
   */
  successUrl?: string | null | undefined;
  productPriceId: string;
};

/** @internal */
export const CheckoutLinkCreateProductPriceMetadata$inboundSchema: z.ZodType<
  CheckoutLinkCreateProductPriceMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/** @internal */
export type CheckoutLinkCreateProductPriceMetadata$Outbound =
  | string
  | number
  | number
  | boolean;

/** @internal */
export const CheckoutLinkCreateProductPriceMetadata$outboundSchema: z.ZodType<
  CheckoutLinkCreateProductPriceMetadata$Outbound,
  z.ZodTypeDef,
  CheckoutLinkCreateProductPriceMetadata
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutLinkCreateProductPriceMetadata$ {
  /** @deprecated use `CheckoutLinkCreateProductPriceMetadata$inboundSchema` instead. */
  export const inboundSchema =
    CheckoutLinkCreateProductPriceMetadata$inboundSchema;
  /** @deprecated use `CheckoutLinkCreateProductPriceMetadata$outboundSchema` instead. */
  export const outboundSchema =
    CheckoutLinkCreateProductPriceMetadata$outboundSchema;
  /** @deprecated use `CheckoutLinkCreateProductPriceMetadata$Outbound` instead. */
  export type Outbound = CheckoutLinkCreateProductPriceMetadata$Outbound;
}

export function checkoutLinkCreateProductPriceMetadataToJSON(
  checkoutLinkCreateProductPriceMetadata:
    CheckoutLinkCreateProductPriceMetadata,
): string {
  return JSON.stringify(
    CheckoutLinkCreateProductPriceMetadata$outboundSchema.parse(
      checkoutLinkCreateProductPriceMetadata,
    ),
  );
}

export function checkoutLinkCreateProductPriceMetadataFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutLinkCreateProductPriceMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CheckoutLinkCreateProductPriceMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutLinkCreateProductPriceMetadata' from JSON`,
  );
}

/** @internal */
export const CheckoutLinkCreateProductPrice$inboundSchema: z.ZodType<
  CheckoutLinkCreateProductPrice,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ).optional(),
  payment_processor: z.literal("stripe"),
  label: z.nullable(z.string()).optional(),
  allow_discount_codes: z.boolean().default(true),
  require_billing_address: z.boolean().default(false),
  discount_id: z.nullable(z.string()).optional(),
  success_url: z.nullable(z.string()).optional(),
  product_price_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "payment_processor": "paymentProcessor",
    "allow_discount_codes": "allowDiscountCodes",
    "require_billing_address": "requireBillingAddress",
    "discount_id": "discountId",
    "success_url": "successUrl",
    "product_price_id": "productPriceId",
  });
});

/** @internal */
export type CheckoutLinkCreateProductPrice$Outbound = {
  metadata?: { [k: string]: string | number | number | boolean } | undefined;
  payment_processor: "stripe";
  label?: string | null | undefined;
  allow_discount_codes: boolean;
  require_billing_address: boolean;
  discount_id?: string | null | undefined;
  success_url?: string | null | undefined;
  product_price_id: string;
};

/** @internal */
export const CheckoutLinkCreateProductPrice$outboundSchema: z.ZodType<
  CheckoutLinkCreateProductPrice$Outbound,
  z.ZodTypeDef,
  CheckoutLinkCreateProductPrice
> = z.object({
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ).optional(),
  paymentProcessor: z.literal("stripe"),
  label: z.nullable(z.string()).optional(),
  allowDiscountCodes: z.boolean().default(true),
  requireBillingAddress: z.boolean().default(false),
  discountId: z.nullable(z.string()).optional(),
  successUrl: z.nullable(z.string()).optional(),
  productPriceId: z.string(),
}).transform((v) => {
  return remap$(v, {
    paymentProcessor: "payment_processor",
    allowDiscountCodes: "allow_discount_codes",
    requireBillingAddress: "require_billing_address",
    discountId: "discount_id",
    successUrl: "success_url",
    productPriceId: "product_price_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutLinkCreateProductPrice$ {
  /** @deprecated use `CheckoutLinkCreateProductPrice$inboundSchema` instead. */
  export const inboundSchema = CheckoutLinkCreateProductPrice$inboundSchema;
  /** @deprecated use `CheckoutLinkCreateProductPrice$outboundSchema` instead. */
  export const outboundSchema = CheckoutLinkCreateProductPrice$outboundSchema;
  /** @deprecated use `CheckoutLinkCreateProductPrice$Outbound` instead. */
  export type Outbound = CheckoutLinkCreateProductPrice$Outbound;
}

export function checkoutLinkCreateProductPriceToJSON(
  checkoutLinkCreateProductPrice: CheckoutLinkCreateProductPrice,
): string {
  return JSON.stringify(
    CheckoutLinkCreateProductPrice$outboundSchema.parse(
      checkoutLinkCreateProductPrice,
    ),
  );
}

export function checkoutLinkCreateProductPriceFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutLinkCreateProductPrice, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutLinkCreateProductPrice$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutLinkCreateProductPrice' from JSON`,
  );
}
