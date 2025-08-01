/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RevokeTokenResponse = {};

/** @internal */
export const RevokeTokenResponse$inboundSchema: z.ZodType<
  RevokeTokenResponse,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type RevokeTokenResponse$Outbound = {};

/** @internal */
export const RevokeTokenResponse$outboundSchema: z.ZodType<
  RevokeTokenResponse$Outbound,
  z.ZodTypeDef,
  RevokeTokenResponse
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RevokeTokenResponse$ {
  /** @deprecated use `RevokeTokenResponse$inboundSchema` instead. */
  export const inboundSchema = RevokeTokenResponse$inboundSchema;
  /** @deprecated use `RevokeTokenResponse$outboundSchema` instead. */
  export const outboundSchema = RevokeTokenResponse$outboundSchema;
  /** @deprecated use `RevokeTokenResponse$Outbound` instead. */
  export type Outbound = RevokeTokenResponse$Outbound;
}

export function revokeTokenResponseToJSON(
  revokeTokenResponse: RevokeTokenResponse,
): string {
  return JSON.stringify(
    RevokeTokenResponse$outboundSchema.parse(revokeTokenResponse),
  );
}

export function revokeTokenResponseFromJSON(
  jsonString: string,
): SafeParseResult<RevokeTokenResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RevokeTokenResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RevokeTokenResponse' from JSON`,
  );
}
