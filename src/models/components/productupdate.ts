/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AttachedCustomFieldCreate,
  AttachedCustomFieldCreate$inboundSchema,
  AttachedCustomFieldCreate$Outbound,
  AttachedCustomFieldCreate$outboundSchema,
} from "./attachedcustomfieldcreate.js";
import {
  ExistingProductPrice,
  ExistingProductPrice$inboundSchema,
  ExistingProductPrice$Outbound,
  ExistingProductPrice$outboundSchema,
} from "./existingproductprice.js";
import {
  ProductPriceCustomCreate,
  ProductPriceCustomCreate$inboundSchema,
  ProductPriceCustomCreate$Outbound,
  ProductPriceCustomCreate$outboundSchema,
} from "./productpricecustomcreate.js";
import {
  ProductPriceFixedCreate,
  ProductPriceFixedCreate$inboundSchema,
  ProductPriceFixedCreate$Outbound,
  ProductPriceFixedCreate$outboundSchema,
} from "./productpricefixedcreate.js";
import {
  ProductPriceFreeCreate,
  ProductPriceFreeCreate$inboundSchema,
  ProductPriceFreeCreate$Outbound,
  ProductPriceFreeCreate$outboundSchema,
} from "./productpricefreecreate.js";
import {
  ProductPriceMeteredUnitCreate,
  ProductPriceMeteredUnitCreate$inboundSchema,
  ProductPriceMeteredUnitCreate$Outbound,
  ProductPriceMeteredUnitCreate$outboundSchema,
} from "./productpricemeteredunitcreate.js";
import {
  SubscriptionRecurringInterval,
  SubscriptionRecurringInterval$inboundSchema,
  SubscriptionRecurringInterval$outboundSchema,
} from "./subscriptionrecurringinterval.js";

export type ProductUpdateMetadata = string | number | number | boolean;

export type ProductUpdatePrices =
  | ProductPriceMeteredUnitCreate
  | ProductPriceFixedCreate
  | ExistingProductPrice
  | ProductPriceCustomCreate
  | ProductPriceFreeCreate;

/**
 * Schema to update a product.
 */
export type ProductUpdate = {
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
  name?: string | null | undefined;
  /**
   * The description of the product.
   */
  description?: string | null | undefined;
  /**
   * The recurring interval of the product. If `None`, the product is a one-time purchase. **Can only be set on legacy recurring products. Once set, it can't be changed.**
   */
  recurringInterval?: SubscriptionRecurringInterval | null | undefined;
  /**
   * Whether the product is archived. If `true`, the product won't be available for purchase anymore. Existing customers will still have access to their benefits, and subscriptions will continue normally.
   */
  isArchived?: boolean | null | undefined;
  /**
   * List of available prices for this product. If you want to keep existing prices, include them in the list as an `ExistingProductPrice` object.
   */
  prices?:
    | Array<
      | ProductPriceMeteredUnitCreate
      | ProductPriceFixedCreate
      | ExistingProductPrice
      | ProductPriceCustomCreate
      | ProductPriceFreeCreate
    >
    | null
    | undefined;
  /**
   * List of file IDs. Each one must be on the same organization as the product, of type `product_media` and correctly uploaded.
   */
  medias?: Array<string> | null | undefined;
  attachedCustomFields?: Array<AttachedCustomFieldCreate> | null | undefined;
};

/** @internal */
export const ProductUpdateMetadata$inboundSchema: z.ZodType<
  ProductUpdateMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/** @internal */
export type ProductUpdateMetadata$Outbound = string | number | number | boolean;

/** @internal */
export const ProductUpdateMetadata$outboundSchema: z.ZodType<
  ProductUpdateMetadata$Outbound,
  z.ZodTypeDef,
  ProductUpdateMetadata
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductUpdateMetadata$ {
  /** @deprecated use `ProductUpdateMetadata$inboundSchema` instead. */
  export const inboundSchema = ProductUpdateMetadata$inboundSchema;
  /** @deprecated use `ProductUpdateMetadata$outboundSchema` instead. */
  export const outboundSchema = ProductUpdateMetadata$outboundSchema;
  /** @deprecated use `ProductUpdateMetadata$Outbound` instead. */
  export type Outbound = ProductUpdateMetadata$Outbound;
}

export function productUpdateMetadataToJSON(
  productUpdateMetadata: ProductUpdateMetadata,
): string {
  return JSON.stringify(
    ProductUpdateMetadata$outboundSchema.parse(productUpdateMetadata),
  );
}

export function productUpdateMetadataFromJSON(
  jsonString: string,
): SafeParseResult<ProductUpdateMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProductUpdateMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductUpdateMetadata' from JSON`,
  );
}

/** @internal */
export const ProductUpdatePrices$inboundSchema: z.ZodType<
  ProductUpdatePrices,
  z.ZodTypeDef,
  unknown
> = z.union([
  ProductPriceMeteredUnitCreate$inboundSchema,
  ProductPriceFixedCreate$inboundSchema,
  ExistingProductPrice$inboundSchema,
  ProductPriceCustomCreate$inboundSchema,
  ProductPriceFreeCreate$inboundSchema,
]);

/** @internal */
export type ProductUpdatePrices$Outbound =
  | ProductPriceMeteredUnitCreate$Outbound
  | ProductPriceFixedCreate$Outbound
  | ExistingProductPrice$Outbound
  | ProductPriceCustomCreate$Outbound
  | ProductPriceFreeCreate$Outbound;

/** @internal */
export const ProductUpdatePrices$outboundSchema: z.ZodType<
  ProductUpdatePrices$Outbound,
  z.ZodTypeDef,
  ProductUpdatePrices
> = z.union([
  ProductPriceMeteredUnitCreate$outboundSchema,
  ProductPriceFixedCreate$outboundSchema,
  ExistingProductPrice$outboundSchema,
  ProductPriceCustomCreate$outboundSchema,
  ProductPriceFreeCreate$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductUpdatePrices$ {
  /** @deprecated use `ProductUpdatePrices$inboundSchema` instead. */
  export const inboundSchema = ProductUpdatePrices$inboundSchema;
  /** @deprecated use `ProductUpdatePrices$outboundSchema` instead. */
  export const outboundSchema = ProductUpdatePrices$outboundSchema;
  /** @deprecated use `ProductUpdatePrices$Outbound` instead. */
  export type Outbound = ProductUpdatePrices$Outbound;
}

export function productUpdatePricesToJSON(
  productUpdatePrices: ProductUpdatePrices,
): string {
  return JSON.stringify(
    ProductUpdatePrices$outboundSchema.parse(productUpdatePrices),
  );
}

export function productUpdatePricesFromJSON(
  jsonString: string,
): SafeParseResult<ProductUpdatePrices, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProductUpdatePrices$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductUpdatePrices' from JSON`,
  );
}

/** @internal */
export const ProductUpdate$inboundSchema: z.ZodType<
  ProductUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ).optional(),
  name: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  recurring_interval: z.nullable(SubscriptionRecurringInterval$inboundSchema)
    .optional(),
  is_archived: z.nullable(z.boolean()).optional(),
  prices: z.nullable(
    z.array(
      z.union([
        ProductPriceMeteredUnitCreate$inboundSchema,
        ProductPriceFixedCreate$inboundSchema,
        ExistingProductPrice$inboundSchema,
        ProductPriceCustomCreate$inboundSchema,
        ProductPriceFreeCreate$inboundSchema,
      ]),
    ),
  ).optional(),
  medias: z.nullable(z.array(z.string())).optional(),
  attached_custom_fields: z.nullable(
    z.array(AttachedCustomFieldCreate$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "recurring_interval": "recurringInterval",
    "is_archived": "isArchived",
    "attached_custom_fields": "attachedCustomFields",
  });
});

/** @internal */
export type ProductUpdate$Outbound = {
  metadata?: { [k: string]: string | number | number | boolean } | undefined;
  name?: string | null | undefined;
  description?: string | null | undefined;
  recurring_interval?: string | null | undefined;
  is_archived?: boolean | null | undefined;
  prices?:
    | Array<
      | ProductPriceMeteredUnitCreate$Outbound
      | ProductPriceFixedCreate$Outbound
      | ExistingProductPrice$Outbound
      | ProductPriceCustomCreate$Outbound
      | ProductPriceFreeCreate$Outbound
    >
    | null
    | undefined;
  medias?: Array<string> | null | undefined;
  attached_custom_fields?:
    | Array<AttachedCustomFieldCreate$Outbound>
    | null
    | undefined;
};

/** @internal */
export const ProductUpdate$outboundSchema: z.ZodType<
  ProductUpdate$Outbound,
  z.ZodTypeDef,
  ProductUpdate
> = z.object({
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ).optional(),
  name: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  recurringInterval: z.nullable(SubscriptionRecurringInterval$outboundSchema)
    .optional(),
  isArchived: z.nullable(z.boolean()).optional(),
  prices: z.nullable(
    z.array(
      z.union([
        ProductPriceMeteredUnitCreate$outboundSchema,
        ProductPriceFixedCreate$outboundSchema,
        ExistingProductPrice$outboundSchema,
        ProductPriceCustomCreate$outboundSchema,
        ProductPriceFreeCreate$outboundSchema,
      ]),
    ),
  ).optional(),
  medias: z.nullable(z.array(z.string())).optional(),
  attachedCustomFields: z.nullable(
    z.array(AttachedCustomFieldCreate$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    recurringInterval: "recurring_interval",
    isArchived: "is_archived",
    attachedCustomFields: "attached_custom_fields",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductUpdate$ {
  /** @deprecated use `ProductUpdate$inboundSchema` instead. */
  export const inboundSchema = ProductUpdate$inboundSchema;
  /** @deprecated use `ProductUpdate$outboundSchema` instead. */
  export const outboundSchema = ProductUpdate$outboundSchema;
  /** @deprecated use `ProductUpdate$Outbound` instead. */
  export type Outbound = ProductUpdate$Outbound;
}

export function productUpdateToJSON(productUpdate: ProductUpdate): string {
  return JSON.stringify(ProductUpdate$outboundSchema.parse(productUpdate));
}

export function productUpdateFromJSON(
  jsonString: string,
): SafeParseResult<ProductUpdate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProductUpdate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductUpdate' from JSON`,
  );
}
