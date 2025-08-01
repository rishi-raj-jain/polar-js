/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CustomersGetStateRequest = {
  /**
   * The customer ID.
   */
  id: string;
};

/** @internal */
export const CustomersGetStateRequest$inboundSchema: z.ZodType<
  CustomersGetStateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type CustomersGetStateRequest$Outbound = {
  id: string;
};

/** @internal */
export const CustomersGetStateRequest$outboundSchema: z.ZodType<
  CustomersGetStateRequest$Outbound,
  z.ZodTypeDef,
  CustomersGetStateRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomersGetStateRequest$ {
  /** @deprecated use `CustomersGetStateRequest$inboundSchema` instead. */
  export const inboundSchema = CustomersGetStateRequest$inboundSchema;
  /** @deprecated use `CustomersGetStateRequest$outboundSchema` instead. */
  export const outboundSchema = CustomersGetStateRequest$outboundSchema;
  /** @deprecated use `CustomersGetStateRequest$Outbound` instead. */
  export type Outbound = CustomersGetStateRequest$Outbound;
}

export function customersGetStateRequestToJSON(
  customersGetStateRequest: CustomersGetStateRequest,
): string {
  return JSON.stringify(
    CustomersGetStateRequest$outboundSchema.parse(customersGetStateRequest),
  );
}

export function customersGetStateRequestFromJSON(
  jsonString: string,
): SafeParseResult<CustomersGetStateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomersGetStateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomersGetStateRequest' from JSON`,
  );
}
