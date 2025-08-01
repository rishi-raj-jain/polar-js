/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type WebhooksGetWebhookEndpointRequest = {
  /**
   * The webhook endpoint ID.
   */
  id: string;
};

/** @internal */
export const WebhooksGetWebhookEndpointRequest$inboundSchema: z.ZodType<
  WebhooksGetWebhookEndpointRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type WebhooksGetWebhookEndpointRequest$Outbound = {
  id: string;
};

/** @internal */
export const WebhooksGetWebhookEndpointRequest$outboundSchema: z.ZodType<
  WebhooksGetWebhookEndpointRequest$Outbound,
  z.ZodTypeDef,
  WebhooksGetWebhookEndpointRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhooksGetWebhookEndpointRequest$ {
  /** @deprecated use `WebhooksGetWebhookEndpointRequest$inboundSchema` instead. */
  export const inboundSchema = WebhooksGetWebhookEndpointRequest$inboundSchema;
  /** @deprecated use `WebhooksGetWebhookEndpointRequest$outboundSchema` instead. */
  export const outboundSchema =
    WebhooksGetWebhookEndpointRequest$outboundSchema;
  /** @deprecated use `WebhooksGetWebhookEndpointRequest$Outbound` instead. */
  export type Outbound = WebhooksGetWebhookEndpointRequest$Outbound;
}

export function webhooksGetWebhookEndpointRequestToJSON(
  webhooksGetWebhookEndpointRequest: WebhooksGetWebhookEndpointRequest,
): string {
  return JSON.stringify(
    WebhooksGetWebhookEndpointRequest$outboundSchema.parse(
      webhooksGetWebhookEndpointRequest,
    ),
  );
}

export function webhooksGetWebhookEndpointRequestFromJSON(
  jsonString: string,
): SafeParseResult<WebhooksGetWebhookEndpointRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WebhooksGetWebhookEndpointRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebhooksGetWebhookEndpointRequest' from JSON`,
  );
}
