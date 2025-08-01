/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { PolarError } from "./polarerror.js";

export type NotPermittedData = {
  error: "NotPermitted";
  detail: string;
};

export class NotPermitted extends PolarError {
  error: "NotPermitted";
  detail: string;

  /** The original data that was passed to this error instance. */
  data$: NotPermittedData;

  constructor(
    err: NotPermittedData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.error = err.error;
    this.detail = err.detail;

    this.name = "NotPermitted";
  }
}

/** @internal */
export const NotPermitted$inboundSchema: z.ZodType<
  NotPermitted,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.literal("NotPermitted"),
  detail: z.string(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new NotPermitted(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type NotPermitted$Outbound = {
  error: "NotPermitted";
  detail: string;
};

/** @internal */
export const NotPermitted$outboundSchema: z.ZodType<
  NotPermitted$Outbound,
  z.ZodTypeDef,
  NotPermitted
> = z.instanceof(NotPermitted)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.literal("NotPermitted"),
    detail: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotPermitted$ {
  /** @deprecated use `NotPermitted$inboundSchema` instead. */
  export const inboundSchema = NotPermitted$inboundSchema;
  /** @deprecated use `NotPermitted$outboundSchema` instead. */
  export const outboundSchema = NotPermitted$outboundSchema;
  /** @deprecated use `NotPermitted$Outbound` instead. */
  export type Outbound = NotPermitted$Outbound;
}
