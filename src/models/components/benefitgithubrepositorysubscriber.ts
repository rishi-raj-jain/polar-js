/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BenefitGitHubRepositorySubscriberProperties,
  BenefitGitHubRepositorySubscriberProperties$inboundSchema,
  BenefitGitHubRepositorySubscriberProperties$Outbound,
  BenefitGitHubRepositorySubscriberProperties$outboundSchema,
} from "./benefitgithubrepositorysubscriberproperties.js";
import {
  Organization,
  Organization$inboundSchema,
  Organization$Outbound,
  Organization$outboundSchema,
} from "./organization.js";

export type BenefitGitHubRepositorySubscriberMetadata =
  | string
  | number
  | number
  | boolean;

export type BenefitGitHubRepositorySubscriber = {
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
  type: "github_repository";
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
  organization: Organization;
  /**
   * Properties available to subscribers for a benefit of type `github_repository`.
   */
  properties: BenefitGitHubRepositorySubscriberProperties;
};

/** @internal */
export const BenefitGitHubRepositorySubscriberMetadata$inboundSchema: z.ZodType<
  BenefitGitHubRepositorySubscriberMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/** @internal */
export type BenefitGitHubRepositorySubscriberMetadata$Outbound =
  | string
  | number
  | number
  | boolean;

/** @internal */
export const BenefitGitHubRepositorySubscriberMetadata$outboundSchema:
  z.ZodType<
    BenefitGitHubRepositorySubscriberMetadata$Outbound,
    z.ZodTypeDef,
    BenefitGitHubRepositorySubscriberMetadata
  > = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitGitHubRepositorySubscriberMetadata$ {
  /** @deprecated use `BenefitGitHubRepositorySubscriberMetadata$inboundSchema` instead. */
  export const inboundSchema =
    BenefitGitHubRepositorySubscriberMetadata$inboundSchema;
  /** @deprecated use `BenefitGitHubRepositorySubscriberMetadata$outboundSchema` instead. */
  export const outboundSchema =
    BenefitGitHubRepositorySubscriberMetadata$outboundSchema;
  /** @deprecated use `BenefitGitHubRepositorySubscriberMetadata$Outbound` instead. */
  export type Outbound = BenefitGitHubRepositorySubscriberMetadata$Outbound;
}

export function benefitGitHubRepositorySubscriberMetadataToJSON(
  benefitGitHubRepositorySubscriberMetadata:
    BenefitGitHubRepositorySubscriberMetadata,
): string {
  return JSON.stringify(
    BenefitGitHubRepositorySubscriberMetadata$outboundSchema.parse(
      benefitGitHubRepositorySubscriberMetadata,
    ),
  );
}

export function benefitGitHubRepositorySubscriberMetadataFromJSON(
  jsonString: string,
): SafeParseResult<
  BenefitGitHubRepositorySubscriberMetadata,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      BenefitGitHubRepositorySubscriberMetadata$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'BenefitGitHubRepositorySubscriberMetadata' from JSON`,
  );
}

/** @internal */
export const BenefitGitHubRepositorySubscriber$inboundSchema: z.ZodType<
  BenefitGitHubRepositorySubscriber,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  type: z.literal("github_repository"),
  description: z.string(),
  selectable: z.boolean(),
  deletable: z.boolean(),
  organization_id: z.string(),
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ),
  organization: Organization$inboundSchema,
  properties: BenefitGitHubRepositorySubscriberProperties$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "organization_id": "organizationId",
  });
});

/** @internal */
export type BenefitGitHubRepositorySubscriber$Outbound = {
  id: string;
  created_at: string;
  modified_at: string | null;
  type: "github_repository";
  description: string;
  selectable: boolean;
  deletable: boolean;
  organization_id: string;
  metadata: { [k: string]: string | number | number | boolean };
  organization: Organization$Outbound;
  properties: BenefitGitHubRepositorySubscriberProperties$Outbound;
};

/** @internal */
export const BenefitGitHubRepositorySubscriber$outboundSchema: z.ZodType<
  BenefitGitHubRepositorySubscriber$Outbound,
  z.ZodTypeDef,
  BenefitGitHubRepositorySubscriber
> = z.object({
  id: z.string(),
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  type: z.literal("github_repository"),
  description: z.string(),
  selectable: z.boolean(),
  deletable: z.boolean(),
  organizationId: z.string(),
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ),
  organization: Organization$outboundSchema,
  properties: BenefitGitHubRepositorySubscriberProperties$outboundSchema,
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
export namespace BenefitGitHubRepositorySubscriber$ {
  /** @deprecated use `BenefitGitHubRepositorySubscriber$inboundSchema` instead. */
  export const inboundSchema = BenefitGitHubRepositorySubscriber$inboundSchema;
  /** @deprecated use `BenefitGitHubRepositorySubscriber$outboundSchema` instead. */
  export const outboundSchema =
    BenefitGitHubRepositorySubscriber$outboundSchema;
  /** @deprecated use `BenefitGitHubRepositorySubscriber$Outbound` instead. */
  export type Outbound = BenefitGitHubRepositorySubscriber$Outbound;
}

export function benefitGitHubRepositorySubscriberToJSON(
  benefitGitHubRepositorySubscriber: BenefitGitHubRepositorySubscriber,
): string {
  return JSON.stringify(
    BenefitGitHubRepositorySubscriber$outboundSchema.parse(
      benefitGitHubRepositorySubscriber,
    ),
  );
}

export function benefitGitHubRepositorySubscriberFromJSON(
  jsonString: string,
): SafeParseResult<BenefitGitHubRepositorySubscriber, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitGitHubRepositorySubscriber$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitGitHubRepositorySubscriber' from JSON`,
  );
}
