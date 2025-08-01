/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";

export const DiscountType = {
  Fixed: "fixed",
  Percentage: "percentage",
} as const;
export type DiscountType = ClosedEnum<typeof DiscountType>;

/** @internal */
export const DiscountType$inboundSchema: z.ZodNativeEnum<typeof DiscountType> =
  z.nativeEnum(DiscountType);

/** @internal */
export const DiscountType$outboundSchema: z.ZodNativeEnum<typeof DiscountType> =
  DiscountType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountType$ {
  /** @deprecated use `DiscountType$inboundSchema` instead. */
  export const inboundSchema = DiscountType$inboundSchema;
  /** @deprecated use `DiscountType$outboundSchema` instead. */
  export const outboundSchema = DiscountType$outboundSchema;
}
