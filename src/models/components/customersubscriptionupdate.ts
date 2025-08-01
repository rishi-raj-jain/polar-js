/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CustomerSubscriptionCancel,
  CustomerSubscriptionCancel$inboundSchema,
  CustomerSubscriptionCancel$Outbound,
  CustomerSubscriptionCancel$outboundSchema,
} from "./customersubscriptioncancel.js";
import {
  CustomerSubscriptionUpdateProduct,
  CustomerSubscriptionUpdateProduct$inboundSchema,
  CustomerSubscriptionUpdateProduct$Outbound,
  CustomerSubscriptionUpdateProduct$outboundSchema,
} from "./customersubscriptionupdateproduct.js";

export type CustomerSubscriptionUpdate =
  | CustomerSubscriptionUpdateProduct
  | CustomerSubscriptionCancel;

/** @internal */
export const CustomerSubscriptionUpdate$inboundSchema: z.ZodType<
  CustomerSubscriptionUpdate,
  z.ZodTypeDef,
  unknown
> = z.union([
  CustomerSubscriptionUpdateProduct$inboundSchema,
  CustomerSubscriptionCancel$inboundSchema,
]);

/** @internal */
export type CustomerSubscriptionUpdate$Outbound =
  | CustomerSubscriptionUpdateProduct$Outbound
  | CustomerSubscriptionCancel$Outbound;

/** @internal */
export const CustomerSubscriptionUpdate$outboundSchema: z.ZodType<
  CustomerSubscriptionUpdate$Outbound,
  z.ZodTypeDef,
  CustomerSubscriptionUpdate
> = z.union([
  CustomerSubscriptionUpdateProduct$outboundSchema,
  CustomerSubscriptionCancel$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerSubscriptionUpdate$ {
  /** @deprecated use `CustomerSubscriptionUpdate$inboundSchema` instead. */
  export const inboundSchema = CustomerSubscriptionUpdate$inboundSchema;
  /** @deprecated use `CustomerSubscriptionUpdate$outboundSchema` instead. */
  export const outboundSchema = CustomerSubscriptionUpdate$outboundSchema;
  /** @deprecated use `CustomerSubscriptionUpdate$Outbound` instead. */
  export type Outbound = CustomerSubscriptionUpdate$Outbound;
}

export function customerSubscriptionUpdateToJSON(
  customerSubscriptionUpdate: CustomerSubscriptionUpdate,
): string {
  return JSON.stringify(
    CustomerSubscriptionUpdate$outboundSchema.parse(customerSubscriptionUpdate),
  );
}

export function customerSubscriptionUpdateFromJSON(
  jsonString: string,
): SafeParseResult<CustomerSubscriptionUpdate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomerSubscriptionUpdate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerSubscriptionUpdate' from JSON`,
  );
}
