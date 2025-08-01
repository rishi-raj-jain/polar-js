/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  MissingInvoiceBillingDetails,
  MissingInvoiceBillingDetails$inboundSchema,
  MissingInvoiceBillingDetails$Outbound,
  MissingInvoiceBillingDetails$outboundSchema,
} from "./missinginvoicebillingdetails.js";
import {
  NotPaidOrder,
  NotPaidOrder$inboundSchema,
  NotPaidOrder$Outbound,
  NotPaidOrder$outboundSchema,
} from "./notpaidorder.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

/**
 * Order is not paid or is missing billing name or address.
 */
export type CustomerPortalOrdersGenerateInvoiceResponse422CustomerPortalOrdersGenerateInvoice =
  | MissingInvoiceBillingDetails
  | NotPaidOrder;

/** @internal */
export const CustomerPortalOrdersGenerateInvoiceResponse422CustomerPortalOrdersGenerateInvoice$inboundSchema:
  z.ZodType<
    CustomerPortalOrdersGenerateInvoiceResponse422CustomerPortalOrdersGenerateInvoice,
    z.ZodTypeDef,
    unknown
  > = z.union([
    MissingInvoiceBillingDetails$inboundSchema,
    NotPaidOrder$inboundSchema,
  ]);

/** @internal */
export type CustomerPortalOrdersGenerateInvoiceResponse422CustomerPortalOrdersGenerateInvoice$Outbound =
  | MissingInvoiceBillingDetails$Outbound
  | NotPaidOrder$Outbound;

/** @internal */
export const CustomerPortalOrdersGenerateInvoiceResponse422CustomerPortalOrdersGenerateInvoice$outboundSchema:
  z.ZodType<
    CustomerPortalOrdersGenerateInvoiceResponse422CustomerPortalOrdersGenerateInvoice$Outbound,
    z.ZodTypeDef,
    CustomerPortalOrdersGenerateInvoiceResponse422CustomerPortalOrdersGenerateInvoice
  > = z.union([
    MissingInvoiceBillingDetails$outboundSchema,
    NotPaidOrder$outboundSchema,
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerPortalOrdersGenerateInvoiceResponse422CustomerPortalOrdersGenerateInvoice$ {
  /** @deprecated use `CustomerPortalOrdersGenerateInvoiceResponse422CustomerPortalOrdersGenerateInvoice$inboundSchema` instead. */
  export const inboundSchema =
    CustomerPortalOrdersGenerateInvoiceResponse422CustomerPortalOrdersGenerateInvoice$inboundSchema;
  /** @deprecated use `CustomerPortalOrdersGenerateInvoiceResponse422CustomerPortalOrdersGenerateInvoice$outboundSchema` instead. */
  export const outboundSchema =
    CustomerPortalOrdersGenerateInvoiceResponse422CustomerPortalOrdersGenerateInvoice$outboundSchema;
  /** @deprecated use `CustomerPortalOrdersGenerateInvoiceResponse422CustomerPortalOrdersGenerateInvoice$Outbound` instead. */
  export type Outbound =
    CustomerPortalOrdersGenerateInvoiceResponse422CustomerPortalOrdersGenerateInvoice$Outbound;
}

export function customerPortalOrdersGenerateInvoiceResponse422CustomerPortalOrdersGenerateInvoiceToJSON(
  customerPortalOrdersGenerateInvoiceResponse422CustomerPortalOrdersGenerateInvoice:
    CustomerPortalOrdersGenerateInvoiceResponse422CustomerPortalOrdersGenerateInvoice,
): string {
  return JSON.stringify(
    CustomerPortalOrdersGenerateInvoiceResponse422CustomerPortalOrdersGenerateInvoice$outboundSchema
      .parse(
        customerPortalOrdersGenerateInvoiceResponse422CustomerPortalOrdersGenerateInvoice,
      ),
  );
}

export function customerPortalOrdersGenerateInvoiceResponse422CustomerPortalOrdersGenerateInvoiceFromJSON(
  jsonString: string,
): SafeParseResult<
  CustomerPortalOrdersGenerateInvoiceResponse422CustomerPortalOrdersGenerateInvoice,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CustomerPortalOrdersGenerateInvoiceResponse422CustomerPortalOrdersGenerateInvoice$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'CustomerPortalOrdersGenerateInvoiceResponse422CustomerPortalOrdersGenerateInvoice' from JSON`,
  );
}
