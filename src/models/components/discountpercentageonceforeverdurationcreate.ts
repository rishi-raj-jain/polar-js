/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DiscountDuration,
  DiscountDuration$inboundSchema,
  DiscountDuration$outboundSchema,
} from "./discountduration.js";
import {
  DiscountType,
  DiscountType$inboundSchema,
  DiscountType$outboundSchema,
} from "./discounttype.js";

export type DiscountPercentageOnceForeverDurationCreateMetadata =
  | string
  | number
  | number
  | boolean;

/**
 * Schema to create a percentage discount that is applied once or forever.
 */
export type DiscountPercentageOnceForeverDurationCreate = {
  duration: DiscountDuration;
  type: DiscountType;
  /**
   * Discount percentage in basis points.
   *
   * @remarks
   *
   * A basis point is 1/100th of a percent.
   * For example, to create a 25.5% discount, set this to 2550.
   */
  basisPoints: number;
  /**
   * Key-value object allowing you to store additional information.
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
  metadata?: { [k: string]: string | number | number | boolean } | undefined;
  /**
   * Name of the discount. Will be displayed to the customer when the discount is applied.
   */
  name: string;
  /**
   * Code customers can use to apply the discount during checkout. Must be between 3 and 256 characters long and contain only alphanumeric characters.If not provided, the discount can only be applied via the API.
   */
  code?: string | null | undefined;
  /**
   * Optional timestamp after which the discount is redeemable.
   */
  startsAt?: Date | null | undefined;
  /**
   * Optional timestamp after which the discount is no longer redeemable.
   */
  endsAt?: Date | null | undefined;
  /**
   * Optional maximum number of times the discount can be redeemed.
   */
  maxRedemptions?: number | null | undefined;
  products?: Array<string> | null | undefined;
  /**
   * The ID of the organization owning the discount. **Required unless you use an organization token.**
   */
  organizationId?: string | null | undefined;
};

/** @internal */
export const DiscountPercentageOnceForeverDurationCreateMetadata$inboundSchema:
  z.ZodType<
    DiscountPercentageOnceForeverDurationCreateMetadata,
    z.ZodTypeDef,
    unknown
  > = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/** @internal */
export type DiscountPercentageOnceForeverDurationCreateMetadata$Outbound =
  | string
  | number
  | number
  | boolean;

/** @internal */
export const DiscountPercentageOnceForeverDurationCreateMetadata$outboundSchema:
  z.ZodType<
    DiscountPercentageOnceForeverDurationCreateMetadata$Outbound,
    z.ZodTypeDef,
    DiscountPercentageOnceForeverDurationCreateMetadata
  > = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountPercentageOnceForeverDurationCreateMetadata$ {
  /** @deprecated use `DiscountPercentageOnceForeverDurationCreateMetadata$inboundSchema` instead. */
  export const inboundSchema =
    DiscountPercentageOnceForeverDurationCreateMetadata$inboundSchema;
  /** @deprecated use `DiscountPercentageOnceForeverDurationCreateMetadata$outboundSchema` instead. */
  export const outboundSchema =
    DiscountPercentageOnceForeverDurationCreateMetadata$outboundSchema;
  /** @deprecated use `DiscountPercentageOnceForeverDurationCreateMetadata$Outbound` instead. */
  export type Outbound =
    DiscountPercentageOnceForeverDurationCreateMetadata$Outbound;
}

export function discountPercentageOnceForeverDurationCreateMetadataToJSON(
  discountPercentageOnceForeverDurationCreateMetadata:
    DiscountPercentageOnceForeverDurationCreateMetadata,
): string {
  return JSON.stringify(
    DiscountPercentageOnceForeverDurationCreateMetadata$outboundSchema.parse(
      discountPercentageOnceForeverDurationCreateMetadata,
    ),
  );
}

export function discountPercentageOnceForeverDurationCreateMetadataFromJSON(
  jsonString: string,
): SafeParseResult<
  DiscountPercentageOnceForeverDurationCreateMetadata,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DiscountPercentageOnceForeverDurationCreateMetadata$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DiscountPercentageOnceForeverDurationCreateMetadata' from JSON`,
  );
}

/** @internal */
export const DiscountPercentageOnceForeverDurationCreate$inboundSchema:
  z.ZodType<
    DiscountPercentageOnceForeverDurationCreate,
    z.ZodTypeDef,
    unknown
  > = z.object({
    duration: DiscountDuration$inboundSchema,
    type: DiscountType$inboundSchema,
    basis_points: z.number().int(),
    metadata: z.record(
      z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
    ).optional(),
    name: z.string(),
    code: z.nullable(z.string()).optional(),
    starts_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
    ends_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
    max_redemptions: z.nullable(z.number().int()).optional(),
    products: z.nullable(z.array(z.string())).optional(),
    organization_id: z.nullable(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "basis_points": "basisPoints",
      "starts_at": "startsAt",
      "ends_at": "endsAt",
      "max_redemptions": "maxRedemptions",
      "organization_id": "organizationId",
    });
  });

/** @internal */
export type DiscountPercentageOnceForeverDurationCreate$Outbound = {
  duration: string;
  type: string;
  basis_points: number;
  metadata?: { [k: string]: string | number | number | boolean } | undefined;
  name: string;
  code?: string | null | undefined;
  starts_at?: string | null | undefined;
  ends_at?: string | null | undefined;
  max_redemptions?: number | null | undefined;
  products?: Array<string> | null | undefined;
  organization_id?: string | null | undefined;
};

/** @internal */
export const DiscountPercentageOnceForeverDurationCreate$outboundSchema:
  z.ZodType<
    DiscountPercentageOnceForeverDurationCreate$Outbound,
    z.ZodTypeDef,
    DiscountPercentageOnceForeverDurationCreate
  > = z.object({
    duration: DiscountDuration$outboundSchema,
    type: DiscountType$outboundSchema,
    basisPoints: z.number().int(),
    metadata: z.record(
      z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
    ).optional(),
    name: z.string(),
    code: z.nullable(z.string()).optional(),
    startsAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
    endsAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
    maxRedemptions: z.nullable(z.number().int()).optional(),
    products: z.nullable(z.array(z.string())).optional(),
    organizationId: z.nullable(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      basisPoints: "basis_points",
      startsAt: "starts_at",
      endsAt: "ends_at",
      maxRedemptions: "max_redemptions",
      organizationId: "organization_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountPercentageOnceForeverDurationCreate$ {
  /** @deprecated use `DiscountPercentageOnceForeverDurationCreate$inboundSchema` instead. */
  export const inboundSchema =
    DiscountPercentageOnceForeverDurationCreate$inboundSchema;
  /** @deprecated use `DiscountPercentageOnceForeverDurationCreate$outboundSchema` instead. */
  export const outboundSchema =
    DiscountPercentageOnceForeverDurationCreate$outboundSchema;
  /** @deprecated use `DiscountPercentageOnceForeverDurationCreate$Outbound` instead. */
  export type Outbound = DiscountPercentageOnceForeverDurationCreate$Outbound;
}

export function discountPercentageOnceForeverDurationCreateToJSON(
  discountPercentageOnceForeverDurationCreate:
    DiscountPercentageOnceForeverDurationCreate,
): string {
  return JSON.stringify(
    DiscountPercentageOnceForeverDurationCreate$outboundSchema.parse(
      discountPercentageOnceForeverDurationCreate,
    ),
  );
}

export function discountPercentageOnceForeverDurationCreateFromJSON(
  jsonString: string,
): SafeParseResult<
  DiscountPercentageOnceForeverDurationCreate,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DiscountPercentageOnceForeverDurationCreate$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DiscountPercentageOnceForeverDurationCreate' from JSON`,
  );
}
