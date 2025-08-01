/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * File to be used as an organization avatar.
 */
export type OrganizationAvatarFileRead = {
  /**
   * The ID of the object.
   */
  id: string;
  organizationId: string;
  name: string;
  path: string;
  mimeType: string;
  size: number;
  storageVersion: string | null;
  checksumEtag: string | null;
  checksumSha256Base64: string | null;
  checksumSha256Hex: string | null;
  lastModifiedAt: Date | null;
  version: string | null;
  service: "organization_avatar";
  isUploaded: boolean;
  createdAt: Date;
  sizeReadable: string;
  publicUrl: string;
};

/** @internal */
export const OrganizationAvatarFileRead$inboundSchema: z.ZodType<
  OrganizationAvatarFileRead,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  organization_id: z.string(),
  name: z.string(),
  path: z.string(),
  mime_type: z.string(),
  size: z.number().int(),
  storage_version: z.nullable(z.string()),
  checksum_etag: z.nullable(z.string()),
  checksum_sha256_base64: z.nullable(z.string()),
  checksum_sha256_hex: z.nullable(z.string()),
  last_modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  version: z.nullable(z.string()),
  service: z.literal("organization_avatar"),
  is_uploaded: z.boolean(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  size_readable: z.string(),
  public_url: z.string(),
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
    "mime_type": "mimeType",
    "storage_version": "storageVersion",
    "checksum_etag": "checksumEtag",
    "checksum_sha256_base64": "checksumSha256Base64",
    "checksum_sha256_hex": "checksumSha256Hex",
    "last_modified_at": "lastModifiedAt",
    "is_uploaded": "isUploaded",
    "created_at": "createdAt",
    "size_readable": "sizeReadable",
    "public_url": "publicUrl",
  });
});

/** @internal */
export type OrganizationAvatarFileRead$Outbound = {
  id: string;
  organization_id: string;
  name: string;
  path: string;
  mime_type: string;
  size: number;
  storage_version: string | null;
  checksum_etag: string | null;
  checksum_sha256_base64: string | null;
  checksum_sha256_hex: string | null;
  last_modified_at: string | null;
  version: string | null;
  service: "organization_avatar";
  is_uploaded: boolean;
  created_at: string;
  size_readable: string;
  public_url: string;
};

/** @internal */
export const OrganizationAvatarFileRead$outboundSchema: z.ZodType<
  OrganizationAvatarFileRead$Outbound,
  z.ZodTypeDef,
  OrganizationAvatarFileRead
> = z.object({
  id: z.string(),
  organizationId: z.string(),
  name: z.string(),
  path: z.string(),
  mimeType: z.string(),
  size: z.number().int(),
  storageVersion: z.nullable(z.string()),
  checksumEtag: z.nullable(z.string()),
  checksumSha256Base64: z.nullable(z.string()),
  checksumSha256Hex: z.nullable(z.string()),
  lastModifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  version: z.nullable(z.string()),
  service: z.literal("organization_avatar"),
  isUploaded: z.boolean(),
  createdAt: z.date().transform(v => v.toISOString()),
  sizeReadable: z.string(),
  publicUrl: z.string(),
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
    mimeType: "mime_type",
    storageVersion: "storage_version",
    checksumEtag: "checksum_etag",
    checksumSha256Base64: "checksum_sha256_base64",
    checksumSha256Hex: "checksum_sha256_hex",
    lastModifiedAt: "last_modified_at",
    isUploaded: "is_uploaded",
    createdAt: "created_at",
    sizeReadable: "size_readable",
    publicUrl: "public_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrganizationAvatarFileRead$ {
  /** @deprecated use `OrganizationAvatarFileRead$inboundSchema` instead. */
  export const inboundSchema = OrganizationAvatarFileRead$inboundSchema;
  /** @deprecated use `OrganizationAvatarFileRead$outboundSchema` instead. */
  export const outboundSchema = OrganizationAvatarFileRead$outboundSchema;
  /** @deprecated use `OrganizationAvatarFileRead$Outbound` instead. */
  export type Outbound = OrganizationAvatarFileRead$Outbound;
}

export function organizationAvatarFileReadToJSON(
  organizationAvatarFileRead: OrganizationAvatarFileRead,
): string {
  return JSON.stringify(
    OrganizationAvatarFileRead$outboundSchema.parse(organizationAvatarFileRead),
  );
}

export function organizationAvatarFileReadFromJSON(
  jsonString: string,
): SafeParseResult<OrganizationAvatarFileRead, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OrganizationAvatarFileRead$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OrganizationAvatarFileRead' from JSON`,
  );
}
