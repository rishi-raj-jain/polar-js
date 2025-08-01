/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type S3FileCreatePart = {
  number: number;
  chunkStart: number;
  chunkEnd: number;
  checksumSha256Base64?: string | null | undefined;
};

/** @internal */
export const S3FileCreatePart$inboundSchema: z.ZodType<
  S3FileCreatePart,
  z.ZodTypeDef,
  unknown
> = z.object({
  number: z.number().int(),
  chunk_start: z.number().int(),
  chunk_end: z.number().int(),
  checksum_sha256_base64: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "chunk_start": "chunkStart",
    "chunk_end": "chunkEnd",
    "checksum_sha256_base64": "checksumSha256Base64",
  });
});

/** @internal */
export type S3FileCreatePart$Outbound = {
  number: number;
  chunk_start: number;
  chunk_end: number;
  checksum_sha256_base64?: string | null | undefined;
};

/** @internal */
export const S3FileCreatePart$outboundSchema: z.ZodType<
  S3FileCreatePart$Outbound,
  z.ZodTypeDef,
  S3FileCreatePart
> = z.object({
  number: z.number().int(),
  chunkStart: z.number().int(),
  chunkEnd: z.number().int(),
  checksumSha256Base64: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    chunkStart: "chunk_start",
    chunkEnd: "chunk_end",
    checksumSha256Base64: "checksum_sha256_base64",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace S3FileCreatePart$ {
  /** @deprecated use `S3FileCreatePart$inboundSchema` instead. */
  export const inboundSchema = S3FileCreatePart$inboundSchema;
  /** @deprecated use `S3FileCreatePart$outboundSchema` instead. */
  export const outboundSchema = S3FileCreatePart$outboundSchema;
  /** @deprecated use `S3FileCreatePart$Outbound` instead. */
  export type Outbound = S3FileCreatePart$Outbound;
}

export function s3FileCreatePartToJSON(
  s3FileCreatePart: S3FileCreatePart,
): string {
  return JSON.stringify(
    S3FileCreatePart$outboundSchema.parse(s3FileCreatePart),
  );
}

export function s3FileCreatePartFromJSON(
  jsonString: string,
): SafeParseResult<S3FileCreatePart, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => S3FileCreatePart$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'S3FileCreatePart' from JSON`,
  );
}
