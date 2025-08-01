/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  CheckoutUpdate,
  CheckoutUpdate$inboundSchema,
  CheckoutUpdate$Outbound,
  CheckoutUpdate$outboundSchema,
} from "../components/checkoutupdate.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CheckoutsUpdateRequest = {
  /**
   * The checkout session ID.
   */
  id: string;
  checkoutUpdate: CheckoutUpdate;
};

/** @internal */
export const CheckoutsUpdateRequest$inboundSchema: z.ZodType<
  CheckoutsUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  CheckoutUpdate: CheckoutUpdate$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "CheckoutUpdate": "checkoutUpdate",
  });
});

/** @internal */
export type CheckoutsUpdateRequest$Outbound = {
  id: string;
  CheckoutUpdate: CheckoutUpdate$Outbound;
};

/** @internal */
export const CheckoutsUpdateRequest$outboundSchema: z.ZodType<
  CheckoutsUpdateRequest$Outbound,
  z.ZodTypeDef,
  CheckoutsUpdateRequest
> = z.object({
  id: z.string(),
  checkoutUpdate: CheckoutUpdate$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    checkoutUpdate: "CheckoutUpdate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutsUpdateRequest$ {
  /** @deprecated use `CheckoutsUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = CheckoutsUpdateRequest$inboundSchema;
  /** @deprecated use `CheckoutsUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = CheckoutsUpdateRequest$outboundSchema;
  /** @deprecated use `CheckoutsUpdateRequest$Outbound` instead. */
  export type Outbound = CheckoutsUpdateRequest$Outbound;
}

export function checkoutsUpdateRequestToJSON(
  checkoutsUpdateRequest: CheckoutsUpdateRequest,
): string {
  return JSON.stringify(
    CheckoutsUpdateRequest$outboundSchema.parse(checkoutsUpdateRequest),
  );
}

export function checkoutsUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutsUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutsUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutsUpdateRequest' from JSON`,
  );
}
