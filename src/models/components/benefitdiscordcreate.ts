/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BenefitDiscordCreateProperties,
  BenefitDiscordCreateProperties$inboundSchema,
  BenefitDiscordCreateProperties$Outbound,
  BenefitDiscordCreateProperties$outboundSchema,
} from "./benefitdiscordcreateproperties.js";

export type BenefitDiscordCreateMetadata = string | number | number | boolean;

export type BenefitDiscordCreate = {
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
  type: "discord";
  /**
   * The description of the benefit. Will be displayed on products having this benefit.
   */
  description: string;
  /**
   * The ID of the organization owning the benefit. **Required unless you use an organization token.**
   */
  organizationId?: string | null | undefined;
  /**
   * Properties to create a benefit of type `discord`.
   */
  properties: BenefitDiscordCreateProperties;
};

/** @internal */
export const BenefitDiscordCreateMetadata$inboundSchema: z.ZodType<
  BenefitDiscordCreateMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/** @internal */
export type BenefitDiscordCreateMetadata$Outbound =
  | string
  | number
  | number
  | boolean;

/** @internal */
export const BenefitDiscordCreateMetadata$outboundSchema: z.ZodType<
  BenefitDiscordCreateMetadata$Outbound,
  z.ZodTypeDef,
  BenefitDiscordCreateMetadata
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitDiscordCreateMetadata$ {
  /** @deprecated use `BenefitDiscordCreateMetadata$inboundSchema` instead. */
  export const inboundSchema = BenefitDiscordCreateMetadata$inboundSchema;
  /** @deprecated use `BenefitDiscordCreateMetadata$outboundSchema` instead. */
  export const outboundSchema = BenefitDiscordCreateMetadata$outboundSchema;
  /** @deprecated use `BenefitDiscordCreateMetadata$Outbound` instead. */
  export type Outbound = BenefitDiscordCreateMetadata$Outbound;
}

export function benefitDiscordCreateMetadataToJSON(
  benefitDiscordCreateMetadata: BenefitDiscordCreateMetadata,
): string {
  return JSON.stringify(
    BenefitDiscordCreateMetadata$outboundSchema.parse(
      benefitDiscordCreateMetadata,
    ),
  );
}

export function benefitDiscordCreateMetadataFromJSON(
  jsonString: string,
): SafeParseResult<BenefitDiscordCreateMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitDiscordCreateMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitDiscordCreateMetadata' from JSON`,
  );
}

/** @internal */
export const BenefitDiscordCreate$inboundSchema: z.ZodType<
  BenefitDiscordCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ).optional(),
  type: z.literal("discord"),
  description: z.string(),
  organization_id: z.nullable(z.string()).optional(),
  properties: BenefitDiscordCreateProperties$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
  });
});

/** @internal */
export type BenefitDiscordCreate$Outbound = {
  metadata?: { [k: string]: string | number | number | boolean } | undefined;
  type: "discord";
  description: string;
  organization_id?: string | null | undefined;
  properties: BenefitDiscordCreateProperties$Outbound;
};

/** @internal */
export const BenefitDiscordCreate$outboundSchema: z.ZodType<
  BenefitDiscordCreate$Outbound,
  z.ZodTypeDef,
  BenefitDiscordCreate
> = z.object({
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ).optional(),
  type: z.literal("discord"),
  description: z.string(),
  organizationId: z.nullable(z.string()).optional(),
  properties: BenefitDiscordCreateProperties$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitDiscordCreate$ {
  /** @deprecated use `BenefitDiscordCreate$inboundSchema` instead. */
  export const inboundSchema = BenefitDiscordCreate$inboundSchema;
  /** @deprecated use `BenefitDiscordCreate$outboundSchema` instead. */
  export const outboundSchema = BenefitDiscordCreate$outboundSchema;
  /** @deprecated use `BenefitDiscordCreate$Outbound` instead. */
  export type Outbound = BenefitDiscordCreate$Outbound;
}

export function benefitDiscordCreateToJSON(
  benefitDiscordCreate: BenefitDiscordCreate,
): string {
  return JSON.stringify(
    BenefitDiscordCreate$outboundSchema.parse(benefitDiscordCreate),
  );
}

export function benefitDiscordCreateFromJSON(
  jsonString: string,
): SafeParseResult<BenefitDiscordCreate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitDiscordCreate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitDiscordCreate' from JSON`,
  );
}
