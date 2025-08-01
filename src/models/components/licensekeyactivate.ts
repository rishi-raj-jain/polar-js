/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LicenseKeyActivateConditions = string | number | number | boolean;

export type LicenseKeyActivateMeta = string | number | number | boolean;

export type LicenseKeyActivate = {
  key: string;
  organizationId: string;
  label: string;
  /**
   * Key-value object allowing you to set conditions that must match when validating the license key.
   *
   * @remarks
   *
   * The key must be a string with a maximum length of **40 characters**.
   * The value must be either:
   *
   * * A string with a maximum length of **500 characters**
   * * An integer
   * * A floating-point number
   * * A boolean
   *
   * You can store up to **50 key-value pairs**.
   */
  conditions?: { [k: string]: string | number | number | boolean } | undefined;
  /**
   * Key-value object allowing you to store additional information about the activation
   *
   * @remarks
   *
   * The key must be a string with a maximum length of **40 characters**.
   * The value must be either:
   *
   * * A string with a maximum length of **500 characters**
   * * An integer
   * * A floating-point number
   * * A boolean
   *
   * You can store up to **50 key-value pairs**.
   */
  meta?: { [k: string]: string | number | number | boolean } | undefined;
};

/** @internal */
export const LicenseKeyActivateConditions$inboundSchema: z.ZodType<
  LicenseKeyActivateConditions,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/** @internal */
export type LicenseKeyActivateConditions$Outbound =
  | string
  | number
  | number
  | boolean;

/** @internal */
export const LicenseKeyActivateConditions$outboundSchema: z.ZodType<
  LicenseKeyActivateConditions$Outbound,
  z.ZodTypeDef,
  LicenseKeyActivateConditions
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LicenseKeyActivateConditions$ {
  /** @deprecated use `LicenseKeyActivateConditions$inboundSchema` instead. */
  export const inboundSchema = LicenseKeyActivateConditions$inboundSchema;
  /** @deprecated use `LicenseKeyActivateConditions$outboundSchema` instead. */
  export const outboundSchema = LicenseKeyActivateConditions$outboundSchema;
  /** @deprecated use `LicenseKeyActivateConditions$Outbound` instead. */
  export type Outbound = LicenseKeyActivateConditions$Outbound;
}

export function licenseKeyActivateConditionsToJSON(
  licenseKeyActivateConditions: LicenseKeyActivateConditions,
): string {
  return JSON.stringify(
    LicenseKeyActivateConditions$outboundSchema.parse(
      licenseKeyActivateConditions,
    ),
  );
}

export function licenseKeyActivateConditionsFromJSON(
  jsonString: string,
): SafeParseResult<LicenseKeyActivateConditions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LicenseKeyActivateConditions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LicenseKeyActivateConditions' from JSON`,
  );
}

/** @internal */
export const LicenseKeyActivateMeta$inboundSchema: z.ZodType<
  LicenseKeyActivateMeta,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/** @internal */
export type LicenseKeyActivateMeta$Outbound =
  | string
  | number
  | number
  | boolean;

/** @internal */
export const LicenseKeyActivateMeta$outboundSchema: z.ZodType<
  LicenseKeyActivateMeta$Outbound,
  z.ZodTypeDef,
  LicenseKeyActivateMeta
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LicenseKeyActivateMeta$ {
  /** @deprecated use `LicenseKeyActivateMeta$inboundSchema` instead. */
  export const inboundSchema = LicenseKeyActivateMeta$inboundSchema;
  /** @deprecated use `LicenseKeyActivateMeta$outboundSchema` instead. */
  export const outboundSchema = LicenseKeyActivateMeta$outboundSchema;
  /** @deprecated use `LicenseKeyActivateMeta$Outbound` instead. */
  export type Outbound = LicenseKeyActivateMeta$Outbound;
}

export function licenseKeyActivateMetaToJSON(
  licenseKeyActivateMeta: LicenseKeyActivateMeta,
): string {
  return JSON.stringify(
    LicenseKeyActivateMeta$outboundSchema.parse(licenseKeyActivateMeta),
  );
}

export function licenseKeyActivateMetaFromJSON(
  jsonString: string,
): SafeParseResult<LicenseKeyActivateMeta, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LicenseKeyActivateMeta$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LicenseKeyActivateMeta' from JSON`,
  );
}

/** @internal */
export const LicenseKeyActivate$inboundSchema: z.ZodType<
  LicenseKeyActivate,
  z.ZodTypeDef,
  unknown
> = z.object({
  key: z.string(),
  organization_id: z.string(),
  label: z.string(),
  conditions: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ).optional(),
  meta: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
  });
});

/** @internal */
export type LicenseKeyActivate$Outbound = {
  key: string;
  organization_id: string;
  label: string;
  conditions?: { [k: string]: string | number | number | boolean } | undefined;
  meta?: { [k: string]: string | number | number | boolean } | undefined;
};

/** @internal */
export const LicenseKeyActivate$outboundSchema: z.ZodType<
  LicenseKeyActivate$Outbound,
  z.ZodTypeDef,
  LicenseKeyActivate
> = z.object({
  key: z.string(),
  organizationId: z.string(),
  label: z.string(),
  conditions: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ).optional(),
  meta: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LicenseKeyActivate$ {
  /** @deprecated use `LicenseKeyActivate$inboundSchema` instead. */
  export const inboundSchema = LicenseKeyActivate$inboundSchema;
  /** @deprecated use `LicenseKeyActivate$outboundSchema` instead. */
  export const outboundSchema = LicenseKeyActivate$outboundSchema;
  /** @deprecated use `LicenseKeyActivate$Outbound` instead. */
  export type Outbound = LicenseKeyActivate$Outbound;
}

export function licenseKeyActivateToJSON(
  licenseKeyActivate: LicenseKeyActivate,
): string {
  return JSON.stringify(
    LicenseKeyActivate$outboundSchema.parse(licenseKeyActivate),
  );
}

export function licenseKeyActivateFromJSON(
  jsonString: string,
): SafeParseResult<LicenseKeyActivate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LicenseKeyActivate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LicenseKeyActivate' from JSON`,
  );
}
