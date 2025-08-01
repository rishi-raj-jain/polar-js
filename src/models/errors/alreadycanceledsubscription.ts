/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { PolarError } from "./polarerror.js";

export type AlreadyCanceledSubscriptionData = {
  error: "AlreadyCanceledSubscription";
  detail: string;
};

export class AlreadyCanceledSubscription extends PolarError {
  error: "AlreadyCanceledSubscription";
  detail: string;

  /** The original data that was passed to this error instance. */
  data$: AlreadyCanceledSubscriptionData;

  constructor(
    err: AlreadyCanceledSubscriptionData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.error = err.error;
    this.detail = err.detail;

    this.name = "AlreadyCanceledSubscription";
  }
}

/** @internal */
export const AlreadyCanceledSubscription$inboundSchema: z.ZodType<
  AlreadyCanceledSubscription,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.literal("AlreadyCanceledSubscription"),
  detail: z.string(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new AlreadyCanceledSubscription(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type AlreadyCanceledSubscription$Outbound = {
  error: "AlreadyCanceledSubscription";
  detail: string;
};

/** @internal */
export const AlreadyCanceledSubscription$outboundSchema: z.ZodType<
  AlreadyCanceledSubscription$Outbound,
  z.ZodTypeDef,
  AlreadyCanceledSubscription
> = z.instanceof(AlreadyCanceledSubscription)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.literal("AlreadyCanceledSubscription"),
    detail: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AlreadyCanceledSubscription$ {
  /** @deprecated use `AlreadyCanceledSubscription$inboundSchema` instead. */
  export const inboundSchema = AlreadyCanceledSubscription$inboundSchema;
  /** @deprecated use `AlreadyCanceledSubscription$outboundSchema` instead. */
  export const outboundSchema = AlreadyCanceledSubscription$outboundSchema;
  /** @deprecated use `AlreadyCanceledSubscription$Outbound` instead. */
  export type Outbound = AlreadyCanceledSubscription$Outbound;
}
