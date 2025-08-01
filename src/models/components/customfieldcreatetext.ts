/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CustomFieldTextProperties,
  CustomFieldTextProperties$inboundSchema,
  CustomFieldTextProperties$Outbound,
  CustomFieldTextProperties$outboundSchema,
} from "./customfieldtextproperties.js";

export type CustomFieldCreateTextMetadata = string | number | number | boolean;

/**
 * Schema to create a custom field of type text.
 */
export type CustomFieldCreateText = {
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
  type: "text";
  /**
   * Identifier of the custom field. It'll be used as key when storing the value. Must be unique across the organization.It can only contain ASCII letters, numbers and hyphens.
   */
  slug: string;
  /**
   * Name of the custom field.
   */
  name: string;
  /**
   * The ID of the organization owning the custom field. **Required unless you use an organization token.**
   */
  organizationId?: string | null | undefined;
  properties: CustomFieldTextProperties;
};

/** @internal */
export const CustomFieldCreateTextMetadata$inboundSchema: z.ZodType<
  CustomFieldCreateTextMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/** @internal */
export type CustomFieldCreateTextMetadata$Outbound =
  | string
  | number
  | number
  | boolean;

/** @internal */
export const CustomFieldCreateTextMetadata$outboundSchema: z.ZodType<
  CustomFieldCreateTextMetadata$Outbound,
  z.ZodTypeDef,
  CustomFieldCreateTextMetadata
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldCreateTextMetadata$ {
  /** @deprecated use `CustomFieldCreateTextMetadata$inboundSchema` instead. */
  export const inboundSchema = CustomFieldCreateTextMetadata$inboundSchema;
  /** @deprecated use `CustomFieldCreateTextMetadata$outboundSchema` instead. */
  export const outboundSchema = CustomFieldCreateTextMetadata$outboundSchema;
  /** @deprecated use `CustomFieldCreateTextMetadata$Outbound` instead. */
  export type Outbound = CustomFieldCreateTextMetadata$Outbound;
}

export function customFieldCreateTextMetadataToJSON(
  customFieldCreateTextMetadata: CustomFieldCreateTextMetadata,
): string {
  return JSON.stringify(
    CustomFieldCreateTextMetadata$outboundSchema.parse(
      customFieldCreateTextMetadata,
    ),
  );
}

export function customFieldCreateTextMetadataFromJSON(
  jsonString: string,
): SafeParseResult<CustomFieldCreateTextMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomFieldCreateTextMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomFieldCreateTextMetadata' from JSON`,
  );
}

/** @internal */
export const CustomFieldCreateText$inboundSchema: z.ZodType<
  CustomFieldCreateText,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ).optional(),
  type: z.literal("text"),
  slug: z.string(),
  name: z.string(),
  organization_id: z.nullable(z.string()).optional(),
  properties: CustomFieldTextProperties$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
  });
});

/** @internal */
export type CustomFieldCreateText$Outbound = {
  metadata?: { [k: string]: string | number | number | boolean } | undefined;
  type: "text";
  slug: string;
  name: string;
  organization_id?: string | null | undefined;
  properties: CustomFieldTextProperties$Outbound;
};

/** @internal */
export const CustomFieldCreateText$outboundSchema: z.ZodType<
  CustomFieldCreateText$Outbound,
  z.ZodTypeDef,
  CustomFieldCreateText
> = z.object({
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ).optional(),
  type: z.literal("text"),
  slug: z.string(),
  name: z.string(),
  organizationId: z.nullable(z.string()).optional(),
  properties: CustomFieldTextProperties$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldCreateText$ {
  /** @deprecated use `CustomFieldCreateText$inboundSchema` instead. */
  export const inboundSchema = CustomFieldCreateText$inboundSchema;
  /** @deprecated use `CustomFieldCreateText$outboundSchema` instead. */
  export const outboundSchema = CustomFieldCreateText$outboundSchema;
  /** @deprecated use `CustomFieldCreateText$Outbound` instead. */
  export type Outbound = CustomFieldCreateText$Outbound;
}

export function customFieldCreateTextToJSON(
  customFieldCreateText: CustomFieldCreateText,
): string {
  return JSON.stringify(
    CustomFieldCreateText$outboundSchema.parse(customFieldCreateText),
  );
}

export function customFieldCreateTextFromJSON(
  jsonString: string,
): SafeParseResult<CustomFieldCreateText, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomFieldCreateText$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomFieldCreateText' from JSON`,
  );
}
