/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Meta = string | number | number | boolean;

export type LicenseKeyActivationBase = {
  id: string;
  licenseKeyId: string;
  label: string;
  meta: { [k: string]: string | number | number | boolean };
  createdAt: Date;
  modifiedAt: Date | null;
};

/** @internal */
export const Meta$inboundSchema: z.ZodType<Meta, z.ZodTypeDef, unknown> = z
  .union([z.string(), z.number().int(), z.number(), z.boolean()]);

/** @internal */
export type Meta$Outbound = string | number | number | boolean;

/** @internal */
export const Meta$outboundSchema: z.ZodType<Meta$Outbound, z.ZodTypeDef, Meta> =
  z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Meta$ {
  /** @deprecated use `Meta$inboundSchema` instead. */
  export const inboundSchema = Meta$inboundSchema;
  /** @deprecated use `Meta$outboundSchema` instead. */
  export const outboundSchema = Meta$outboundSchema;
  /** @deprecated use `Meta$Outbound` instead. */
  export type Outbound = Meta$Outbound;
}

export function metaToJSON(meta: Meta): string {
  return JSON.stringify(Meta$outboundSchema.parse(meta));
}

export function metaFromJSON(
  jsonString: string,
): SafeParseResult<Meta, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Meta$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Meta' from JSON`,
  );
}

/** @internal */
export const LicenseKeyActivationBase$inboundSchema: z.ZodType<
  LicenseKeyActivationBase,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  license_key_id: z.string(),
  label: z.string(),
  meta: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
}).transform((v) => {
  return remap$(v, {
    "license_key_id": "licenseKeyId",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
  });
});

/** @internal */
export type LicenseKeyActivationBase$Outbound = {
  id: string;
  license_key_id: string;
  label: string;
  meta: { [k: string]: string | number | number | boolean };
  created_at: string;
  modified_at: string | null;
};

/** @internal */
export const LicenseKeyActivationBase$outboundSchema: z.ZodType<
  LicenseKeyActivationBase$Outbound,
  z.ZodTypeDef,
  LicenseKeyActivationBase
> = z.object({
  id: z.string(),
  licenseKeyId: z.string(),
  label: z.string(),
  meta: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ),
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
}).transform((v) => {
  return remap$(v, {
    licenseKeyId: "license_key_id",
    createdAt: "created_at",
    modifiedAt: "modified_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LicenseKeyActivationBase$ {
  /** @deprecated use `LicenseKeyActivationBase$inboundSchema` instead. */
  export const inboundSchema = LicenseKeyActivationBase$inboundSchema;
  /** @deprecated use `LicenseKeyActivationBase$outboundSchema` instead. */
  export const outboundSchema = LicenseKeyActivationBase$outboundSchema;
  /** @deprecated use `LicenseKeyActivationBase$Outbound` instead. */
  export type Outbound = LicenseKeyActivationBase$Outbound;
}

export function licenseKeyActivationBaseToJSON(
  licenseKeyActivationBase: LicenseKeyActivationBase,
): string {
  return JSON.stringify(
    LicenseKeyActivationBase$outboundSchema.parse(licenseKeyActivationBase),
  );
}

export function licenseKeyActivationBaseFromJSON(
  jsonString: string,
): SafeParseResult<LicenseKeyActivationBase, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LicenseKeyActivationBase$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LicenseKeyActivationBase' from JSON`,
  );
}
