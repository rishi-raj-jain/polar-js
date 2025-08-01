/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BenefitDownloadablesProperties,
  BenefitDownloadablesProperties$inboundSchema,
  BenefitDownloadablesProperties$Outbound,
  BenefitDownloadablesProperties$outboundSchema,
} from "./benefitdownloadablesproperties.js";

export type BenefitDownloadablesMetadata = string | number | number | boolean;

export type BenefitDownloadables = {
  /**
   * The ID of the benefit.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  createdAt: Date;
  /**
   * Last modification timestamp of the object.
   */
  modifiedAt: Date | null;
  type: "downloadables";
  /**
   * The description of the benefit.
   */
  description: string;
  /**
   * Whether the benefit is selectable when creating a product.
   */
  selectable: boolean;
  /**
   * Whether the benefit is deletable.
   */
  deletable: boolean;
  /**
   * The ID of the organization owning the benefit.
   */
  organizationId: string;
  metadata: { [k: string]: string | number | number | boolean };
  properties: BenefitDownloadablesProperties;
};

/** @internal */
export const BenefitDownloadablesMetadata$inboundSchema: z.ZodType<
  BenefitDownloadablesMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/** @internal */
export type BenefitDownloadablesMetadata$Outbound =
  | string
  | number
  | number
  | boolean;

/** @internal */
export const BenefitDownloadablesMetadata$outboundSchema: z.ZodType<
  BenefitDownloadablesMetadata$Outbound,
  z.ZodTypeDef,
  BenefitDownloadablesMetadata
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitDownloadablesMetadata$ {
  /** @deprecated use `BenefitDownloadablesMetadata$inboundSchema` instead. */
  export const inboundSchema = BenefitDownloadablesMetadata$inboundSchema;
  /** @deprecated use `BenefitDownloadablesMetadata$outboundSchema` instead. */
  export const outboundSchema = BenefitDownloadablesMetadata$outboundSchema;
  /** @deprecated use `BenefitDownloadablesMetadata$Outbound` instead. */
  export type Outbound = BenefitDownloadablesMetadata$Outbound;
}

export function benefitDownloadablesMetadataToJSON(
  benefitDownloadablesMetadata: BenefitDownloadablesMetadata,
): string {
  return JSON.stringify(
    BenefitDownloadablesMetadata$outboundSchema.parse(
      benefitDownloadablesMetadata,
    ),
  );
}

export function benefitDownloadablesMetadataFromJSON(
  jsonString: string,
): SafeParseResult<BenefitDownloadablesMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitDownloadablesMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitDownloadablesMetadata' from JSON`,
  );
}

/** @internal */
export const BenefitDownloadables$inboundSchema: z.ZodType<
  BenefitDownloadables,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  type: z.literal("downloadables"),
  description: z.string(),
  selectable: z.boolean(),
  deletable: z.boolean(),
  organization_id: z.string(),
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ),
  properties: BenefitDownloadablesProperties$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "organization_id": "organizationId",
  });
});

/** @internal */
export type BenefitDownloadables$Outbound = {
  id: string;
  created_at: string;
  modified_at: string | null;
  type: "downloadables";
  description: string;
  selectable: boolean;
  deletable: boolean;
  organization_id: string;
  metadata: { [k: string]: string | number | number | boolean };
  properties: BenefitDownloadablesProperties$Outbound;
};

/** @internal */
export const BenefitDownloadables$outboundSchema: z.ZodType<
  BenefitDownloadables$Outbound,
  z.ZodTypeDef,
  BenefitDownloadables
> = z.object({
  id: z.string(),
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  type: z.literal("downloadables"),
  description: z.string(),
  selectable: z.boolean(),
  deletable: z.boolean(),
  organizationId: z.string(),
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ),
  properties: BenefitDownloadablesProperties$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitDownloadables$ {
  /** @deprecated use `BenefitDownloadables$inboundSchema` instead. */
  export const inboundSchema = BenefitDownloadables$inboundSchema;
  /** @deprecated use `BenefitDownloadables$outboundSchema` instead. */
  export const outboundSchema = BenefitDownloadables$outboundSchema;
  /** @deprecated use `BenefitDownloadables$Outbound` instead. */
  export type Outbound = BenefitDownloadables$Outbound;
}

export function benefitDownloadablesToJSON(
  benefitDownloadables: BenefitDownloadables,
): string {
  return JSON.stringify(
    BenefitDownloadables$outboundSchema.parse(benefitDownloadables),
  );
}

export function benefitDownloadablesFromJSON(
  jsonString: string,
): SafeParseResult<BenefitDownloadables, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitDownloadables$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitDownloadables' from JSON`,
  );
}
