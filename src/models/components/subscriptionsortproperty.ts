/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";

export const SubscriptionSortProperty = {
  Customer: "customer",
  MinusCustomer: "-customer",
  Status: "status",
  MinusStatus: "-status",
  StartedAt: "started_at",
  MinusStartedAt: "-started_at",
  CurrentPeriodEnd: "current_period_end",
  MinusCurrentPeriodEnd: "-current_period_end",
  Amount: "amount",
  MinusAmount: "-amount",
  Product: "product",
  MinusProduct: "-product",
  Discount: "discount",
  MinusDiscount: "-discount",
} as const;
export type SubscriptionSortProperty = ClosedEnum<
  typeof SubscriptionSortProperty
>;

/** @internal */
export const SubscriptionSortProperty$inboundSchema: z.ZodNativeEnum<
  typeof SubscriptionSortProperty
> = z.nativeEnum(SubscriptionSortProperty);

/** @internal */
export const SubscriptionSortProperty$outboundSchema: z.ZodNativeEnum<
  typeof SubscriptionSortProperty
> = SubscriptionSortProperty$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscriptionSortProperty$ {
  /** @deprecated use `SubscriptionSortProperty$inboundSchema` instead. */
  export const inboundSchema = SubscriptionSortProperty$inboundSchema;
  /** @deprecated use `SubscriptionSortProperty$outboundSchema` instead. */
  export const outboundSchema = SubscriptionSortProperty$outboundSchema;
}
