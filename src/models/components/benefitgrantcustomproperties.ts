/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type BenefitGrantCustomProperties = {};

/** @internal */
export const BenefitGrantCustomProperties$inboundSchema: z.ZodType<
  BenefitGrantCustomProperties,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type BenefitGrantCustomProperties$Outbound = {};

/** @internal */
export const BenefitGrantCustomProperties$outboundSchema: z.ZodType<
  BenefitGrantCustomProperties$Outbound,
  z.ZodTypeDef,
  BenefitGrantCustomProperties
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitGrantCustomProperties$ {
  /** @deprecated use `BenefitGrantCustomProperties$inboundSchema` instead. */
  export const inboundSchema = BenefitGrantCustomProperties$inboundSchema;
  /** @deprecated use `BenefitGrantCustomProperties$outboundSchema` instead. */
  export const outboundSchema = BenefitGrantCustomProperties$outboundSchema;
  /** @deprecated use `BenefitGrantCustomProperties$Outbound` instead. */
  export type Outbound = BenefitGrantCustomProperties$Outbound;
}

export function benefitGrantCustomPropertiesToJSON(
  benefitGrantCustomProperties: BenefitGrantCustomProperties,
): string {
  return JSON.stringify(
    BenefitGrantCustomProperties$outboundSchema.parse(
      benefitGrantCustomProperties,
    ),
  );
}

export function benefitGrantCustomPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<BenefitGrantCustomProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitGrantCustomProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitGrantCustomProperties' from JSON`,
  );
}
