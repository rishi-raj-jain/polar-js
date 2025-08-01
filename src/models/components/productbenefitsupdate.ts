/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Schema to update the benefits granted by a product.
 */
export type ProductBenefitsUpdate = {
  /**
   * List of benefit IDs. Each one must be on the same organization as the product.
   */
  benefits: Array<string>;
};

/** @internal */
export const ProductBenefitsUpdate$inboundSchema: z.ZodType<
  ProductBenefitsUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  benefits: z.array(z.string()),
});

/** @internal */
export type ProductBenefitsUpdate$Outbound = {
  benefits: Array<string>;
};

/** @internal */
export const ProductBenefitsUpdate$outboundSchema: z.ZodType<
  ProductBenefitsUpdate$Outbound,
  z.ZodTypeDef,
  ProductBenefitsUpdate
> = z.object({
  benefits: z.array(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductBenefitsUpdate$ {
  /** @deprecated use `ProductBenefitsUpdate$inboundSchema` instead. */
  export const inboundSchema = ProductBenefitsUpdate$inboundSchema;
  /** @deprecated use `ProductBenefitsUpdate$outboundSchema` instead. */
  export const outboundSchema = ProductBenefitsUpdate$outboundSchema;
  /** @deprecated use `ProductBenefitsUpdate$Outbound` instead. */
  export type Outbound = ProductBenefitsUpdate$Outbound;
}

export function productBenefitsUpdateToJSON(
  productBenefitsUpdate: ProductBenefitsUpdate,
): string {
  return JSON.stringify(
    ProductBenefitsUpdate$outboundSchema.parse(productBenefitsUpdate),
  );
}

export function productBenefitsUpdateFromJSON(
  jsonString: string,
): SafeParseResult<ProductBenefitsUpdate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProductBenefitsUpdate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductBenefitsUpdate' from JSON`,
  );
}
