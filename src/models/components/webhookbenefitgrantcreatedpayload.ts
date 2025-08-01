/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BenefitGrantWebhook,
  BenefitGrantWebhook$inboundSchema,
  BenefitGrantWebhook$Outbound,
  BenefitGrantWebhook$outboundSchema,
} from "./benefitgrantwebhook.js";

/**
 * Sent when a new benefit grant is created.
 *
 * @remarks
 *
 * **Discord & Slack support:** Basic
 */
export type WebhookBenefitGrantCreatedPayload = {
  type: "benefit_grant.created";
  data: BenefitGrantWebhook;
};

/** @internal */
export const WebhookBenefitGrantCreatedPayload$inboundSchema: z.ZodType<
  WebhookBenefitGrantCreatedPayload,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("benefit_grant.created"),
  data: BenefitGrantWebhook$inboundSchema,
});

/** @internal */
export type WebhookBenefitGrantCreatedPayload$Outbound = {
  type: "benefit_grant.created";
  data: BenefitGrantWebhook$Outbound;
};

/** @internal */
export const WebhookBenefitGrantCreatedPayload$outboundSchema: z.ZodType<
  WebhookBenefitGrantCreatedPayload$Outbound,
  z.ZodTypeDef,
  WebhookBenefitGrantCreatedPayload
> = z.object({
  type: z.literal("benefit_grant.created"),
  data: BenefitGrantWebhook$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookBenefitGrantCreatedPayload$ {
  /** @deprecated use `WebhookBenefitGrantCreatedPayload$inboundSchema` instead. */
  export const inboundSchema = WebhookBenefitGrantCreatedPayload$inboundSchema;
  /** @deprecated use `WebhookBenefitGrantCreatedPayload$outboundSchema` instead. */
  export const outboundSchema =
    WebhookBenefitGrantCreatedPayload$outboundSchema;
  /** @deprecated use `WebhookBenefitGrantCreatedPayload$Outbound` instead. */
  export type Outbound = WebhookBenefitGrantCreatedPayload$Outbound;
}

export function webhookBenefitGrantCreatedPayloadToJSON(
  webhookBenefitGrantCreatedPayload: WebhookBenefitGrantCreatedPayload,
): string {
  return JSON.stringify(
    WebhookBenefitGrantCreatedPayload$outboundSchema.parse(
      webhookBenefitGrantCreatedPayload,
    ),
  );
}

export function webhookBenefitGrantCreatedPayloadFromJSON(
  jsonString: string,
): SafeParseResult<WebhookBenefitGrantCreatedPayload, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WebhookBenefitGrantCreatedPayload$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebhookBenefitGrantCreatedPayload' from JSON`,
  );
}
