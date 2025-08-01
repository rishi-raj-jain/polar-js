/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The permission level to grant. Read more about roles and their permissions on [GitHub documentation](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization#permissions-for-each-role).
 */
export const BenefitGitHubRepositoryCreatePropertiesPermission = {
  Pull: "pull",
  Triage: "triage",
  Push: "push",
  Maintain: "maintain",
  Admin: "admin",
} as const;
/**
 * The permission level to grant. Read more about roles and their permissions on [GitHub documentation](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization#permissions-for-each-role).
 */
export type BenefitGitHubRepositoryCreatePropertiesPermission = ClosedEnum<
  typeof BenefitGitHubRepositoryCreatePropertiesPermission
>;

/**
 * Properties to create a benefit of type `github_repository`.
 */
export type BenefitGitHubRepositoryCreateProperties = {
  /**
   * The owner of the repository.
   */
  repositoryOwner: string;
  /**
   * The name of the repository.
   */
  repositoryName: string;
  /**
   * The permission level to grant. Read more about roles and their permissions on [GitHub documentation](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization#permissions-for-each-role).
   */
  permission: BenefitGitHubRepositoryCreatePropertiesPermission;
};

/** @internal */
export const BenefitGitHubRepositoryCreatePropertiesPermission$inboundSchema:
  z.ZodNativeEnum<typeof BenefitGitHubRepositoryCreatePropertiesPermission> = z
    .nativeEnum(BenefitGitHubRepositoryCreatePropertiesPermission);

/** @internal */
export const BenefitGitHubRepositoryCreatePropertiesPermission$outboundSchema:
  z.ZodNativeEnum<typeof BenefitGitHubRepositoryCreatePropertiesPermission> =
    BenefitGitHubRepositoryCreatePropertiesPermission$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitGitHubRepositoryCreatePropertiesPermission$ {
  /** @deprecated use `BenefitGitHubRepositoryCreatePropertiesPermission$inboundSchema` instead. */
  export const inboundSchema =
    BenefitGitHubRepositoryCreatePropertiesPermission$inboundSchema;
  /** @deprecated use `BenefitGitHubRepositoryCreatePropertiesPermission$outboundSchema` instead. */
  export const outboundSchema =
    BenefitGitHubRepositoryCreatePropertiesPermission$outboundSchema;
}

/** @internal */
export const BenefitGitHubRepositoryCreateProperties$inboundSchema: z.ZodType<
  BenefitGitHubRepositoryCreateProperties,
  z.ZodTypeDef,
  unknown
> = z.object({
  repository_owner: z.string(),
  repository_name: z.string(),
  permission: BenefitGitHubRepositoryCreatePropertiesPermission$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "repository_owner": "repositoryOwner",
    "repository_name": "repositoryName",
  });
});

/** @internal */
export type BenefitGitHubRepositoryCreateProperties$Outbound = {
  repository_owner: string;
  repository_name: string;
  permission: string;
};

/** @internal */
export const BenefitGitHubRepositoryCreateProperties$outboundSchema: z.ZodType<
  BenefitGitHubRepositoryCreateProperties$Outbound,
  z.ZodTypeDef,
  BenefitGitHubRepositoryCreateProperties
> = z.object({
  repositoryOwner: z.string(),
  repositoryName: z.string(),
  permission: BenefitGitHubRepositoryCreatePropertiesPermission$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    repositoryOwner: "repository_owner",
    repositoryName: "repository_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitGitHubRepositoryCreateProperties$ {
  /** @deprecated use `BenefitGitHubRepositoryCreateProperties$inboundSchema` instead. */
  export const inboundSchema =
    BenefitGitHubRepositoryCreateProperties$inboundSchema;
  /** @deprecated use `BenefitGitHubRepositoryCreateProperties$outboundSchema` instead. */
  export const outboundSchema =
    BenefitGitHubRepositoryCreateProperties$outboundSchema;
  /** @deprecated use `BenefitGitHubRepositoryCreateProperties$Outbound` instead. */
  export type Outbound = BenefitGitHubRepositoryCreateProperties$Outbound;
}

export function benefitGitHubRepositoryCreatePropertiesToJSON(
  benefitGitHubRepositoryCreateProperties:
    BenefitGitHubRepositoryCreateProperties,
): string {
  return JSON.stringify(
    BenefitGitHubRepositoryCreateProperties$outboundSchema.parse(
      benefitGitHubRepositoryCreateProperties,
    ),
  );
}

export function benefitGitHubRepositoryCreatePropertiesFromJSON(
  jsonString: string,
): SafeParseResult<
  BenefitGitHubRepositoryCreateProperties,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      BenefitGitHubRepositoryCreateProperties$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'BenefitGitHubRepositoryCreateProperties' from JSON`,
  );
}
