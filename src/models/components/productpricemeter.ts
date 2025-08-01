/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * A meter associated to a metered price.
 */
export type ProductPriceMeter = {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The name of the meter.
   */
  name: string;
};

/** @internal */
export const ProductPriceMeter$inboundSchema: z.ZodType<
  ProductPriceMeter,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
});

/** @internal */
export type ProductPriceMeter$Outbound = {
  id: string;
  name: string;
};

/** @internal */
export const ProductPriceMeter$outboundSchema: z.ZodType<
  ProductPriceMeter$Outbound,
  z.ZodTypeDef,
  ProductPriceMeter
> = z.object({
  id: z.string(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceMeter$ {
  /** @deprecated use `ProductPriceMeter$inboundSchema` instead. */
  export const inboundSchema = ProductPriceMeter$inboundSchema;
  /** @deprecated use `ProductPriceMeter$outboundSchema` instead. */
  export const outboundSchema = ProductPriceMeter$outboundSchema;
  /** @deprecated use `ProductPriceMeter$Outbound` instead. */
  export type Outbound = ProductPriceMeter$Outbound;
}

export function productPriceMeterToJSON(
  productPriceMeter: ProductPriceMeter,
): string {
  return JSON.stringify(
    ProductPriceMeter$outboundSchema.parse(productPriceMeter),
  );
}

export function productPriceMeterFromJSON(
  jsonString: string,
): SafeParseResult<ProductPriceMeter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProductPriceMeter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductPriceMeter' from JSON`,
  );
}
