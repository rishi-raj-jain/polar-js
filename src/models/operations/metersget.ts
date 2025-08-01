/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type MetersGetRequest = {
  /**
   * The meter ID.
   */
  id: string;
};

/** @internal */
export const MetersGetRequest$inboundSchema: z.ZodType<
  MetersGetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type MetersGetRequest$Outbound = {
  id: string;
};

/** @internal */
export const MetersGetRequest$outboundSchema: z.ZodType<
  MetersGetRequest$Outbound,
  z.ZodTypeDef,
  MetersGetRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetersGetRequest$ {
  /** @deprecated use `MetersGetRequest$inboundSchema` instead. */
  export const inboundSchema = MetersGetRequest$inboundSchema;
  /** @deprecated use `MetersGetRequest$outboundSchema` instead. */
  export const outboundSchema = MetersGetRequest$outboundSchema;
  /** @deprecated use `MetersGetRequest$Outbound` instead. */
  export type Outbound = MetersGetRequest$Outbound;
}

export function metersGetRequestToJSON(
  metersGetRequest: MetersGetRequest,
): string {
  return JSON.stringify(
    MetersGetRequest$outboundSchema.parse(metersGetRequest),
  );
}

export function metersGetRequestFromJSON(
  jsonString: string,
): SafeParseResult<MetersGetRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MetersGetRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MetersGetRequest' from JSON`,
  );
}
