/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Properties available to subscribers for a benefit of type `custom`.
 */
export type BenefitCustomSubscriberProperties = {
  note: string | null;
};

/** @internal */
export const BenefitCustomSubscriberProperties$inboundSchema: z.ZodType<
  BenefitCustomSubscriberProperties,
  z.ZodTypeDef,
  unknown
> = z.object({
  note: z.nullable(z.string()),
});

/** @internal */
export type BenefitCustomSubscriberProperties$Outbound = {
  note: string | null;
};

/** @internal */
export const BenefitCustomSubscriberProperties$outboundSchema: z.ZodType<
  BenefitCustomSubscriberProperties$Outbound,
  z.ZodTypeDef,
  BenefitCustomSubscriberProperties
> = z.object({
  note: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitCustomSubscriberProperties$ {
  /** @deprecated use `BenefitCustomSubscriberProperties$inboundSchema` instead. */
  export const inboundSchema = BenefitCustomSubscriberProperties$inboundSchema;
  /** @deprecated use `BenefitCustomSubscriberProperties$outboundSchema` instead. */
  export const outboundSchema =
    BenefitCustomSubscriberProperties$outboundSchema;
  /** @deprecated use `BenefitCustomSubscriberProperties$Outbound` instead. */
  export type Outbound = BenefitCustomSubscriberProperties$Outbound;
}

export function benefitCustomSubscriberPropertiesToJSON(
  benefitCustomSubscriberProperties: BenefitCustomSubscriberProperties,
): string {
  return JSON.stringify(
    BenefitCustomSubscriberProperties$outboundSchema.parse(
      benefitCustomSubscriberProperties,
    ),
  );
}

export function benefitCustomSubscriberPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<BenefitCustomSubscriberProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitCustomSubscriberProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitCustomSubscriberProperties' from JSON`,
  );
}
