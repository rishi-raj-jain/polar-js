/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BenefitLicenseKeyActivationProperties,
  BenefitLicenseKeyActivationProperties$inboundSchema,
  BenefitLicenseKeyActivationProperties$Outbound,
  BenefitLicenseKeyActivationProperties$outboundSchema,
} from "./benefitlicensekeyactivationproperties.js";
import {
  BenefitLicenseKeyExpirationProperties,
  BenefitLicenseKeyExpirationProperties$inboundSchema,
  BenefitLicenseKeyExpirationProperties$Outbound,
  BenefitLicenseKeyExpirationProperties$outboundSchema,
} from "./benefitlicensekeyexpirationproperties.js";

export type BenefitLicenseKeysProperties = {
  prefix: string | null;
  expires: BenefitLicenseKeyExpirationProperties | null;
  activations: BenefitLicenseKeyActivationProperties | null;
  limitUsage: number | null;
};

/** @internal */
export const BenefitLicenseKeysProperties$inboundSchema: z.ZodType<
  BenefitLicenseKeysProperties,
  z.ZodTypeDef,
  unknown
> = z.object({
  prefix: z.nullable(z.string()),
  expires: z.nullable(BenefitLicenseKeyExpirationProperties$inboundSchema),
  activations: z.nullable(BenefitLicenseKeyActivationProperties$inboundSchema),
  limit_usage: z.nullable(z.number().int()),
}).transform((v) => {
  return remap$(v, {
    "limit_usage": "limitUsage",
  });
});

/** @internal */
export type BenefitLicenseKeysProperties$Outbound = {
  prefix: string | null;
  expires: BenefitLicenseKeyExpirationProperties$Outbound | null;
  activations: BenefitLicenseKeyActivationProperties$Outbound | null;
  limit_usage: number | null;
};

/** @internal */
export const BenefitLicenseKeysProperties$outboundSchema: z.ZodType<
  BenefitLicenseKeysProperties$Outbound,
  z.ZodTypeDef,
  BenefitLicenseKeysProperties
> = z.object({
  prefix: z.nullable(z.string()),
  expires: z.nullable(BenefitLicenseKeyExpirationProperties$outboundSchema),
  activations: z.nullable(BenefitLicenseKeyActivationProperties$outboundSchema),
  limitUsage: z.nullable(z.number().int()),
}).transform((v) => {
  return remap$(v, {
    limitUsage: "limit_usage",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitLicenseKeysProperties$ {
  /** @deprecated use `BenefitLicenseKeysProperties$inboundSchema` instead. */
  export const inboundSchema = BenefitLicenseKeysProperties$inboundSchema;
  /** @deprecated use `BenefitLicenseKeysProperties$outboundSchema` instead. */
  export const outboundSchema = BenefitLicenseKeysProperties$outboundSchema;
  /** @deprecated use `BenefitLicenseKeysProperties$Outbound` instead. */
  export type Outbound = BenefitLicenseKeysProperties$Outbound;
}

export function benefitLicenseKeysPropertiesToJSON(
  benefitLicenseKeysProperties: BenefitLicenseKeysProperties,
): string {
  return JSON.stringify(
    BenefitLicenseKeysProperties$outboundSchema.parse(
      benefitLicenseKeysProperties,
    ),
  );
}

export function benefitLicenseKeysPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<BenefitLicenseKeysProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitLicenseKeysProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitLicenseKeysProperties' from JSON`,
  );
}
