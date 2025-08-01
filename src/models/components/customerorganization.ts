/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CustomerProduct,
  CustomerProduct$inboundSchema,
  CustomerProduct$Outbound,
  CustomerProduct$outboundSchema,
} from "./customerproduct.js";
import {
  Organization,
  Organization$inboundSchema,
  Organization$Outbound,
  Organization$outboundSchema,
} from "./organization.js";

/**
 * Schema of an organization and related data for customer portal.
 */
export type CustomerOrganization = {
  organization: Organization;
  products: Array<CustomerProduct>;
};

/** @internal */
export const CustomerOrganization$inboundSchema: z.ZodType<
  CustomerOrganization,
  z.ZodTypeDef,
  unknown
> = z.object({
  organization: Organization$inboundSchema,
  products: z.array(CustomerProduct$inboundSchema),
});

/** @internal */
export type CustomerOrganization$Outbound = {
  organization: Organization$Outbound;
  products: Array<CustomerProduct$Outbound>;
};

/** @internal */
export const CustomerOrganization$outboundSchema: z.ZodType<
  CustomerOrganization$Outbound,
  z.ZodTypeDef,
  CustomerOrganization
> = z.object({
  organization: Organization$outboundSchema,
  products: z.array(CustomerProduct$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerOrganization$ {
  /** @deprecated use `CustomerOrganization$inboundSchema` instead. */
  export const inboundSchema = CustomerOrganization$inboundSchema;
  /** @deprecated use `CustomerOrganization$outboundSchema` instead. */
  export const outboundSchema = CustomerOrganization$outboundSchema;
  /** @deprecated use `CustomerOrganization$Outbound` instead. */
  export type Outbound = CustomerOrganization$Outbound;
}

export function customerOrganizationToJSON(
  customerOrganization: CustomerOrganization,
): string {
  return JSON.stringify(
    CustomerOrganization$outboundSchema.parse(customerOrganization),
  );
}

export function customerOrganizationFromJSON(
  jsonString: string,
): SafeParseResult<CustomerOrganization, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomerOrganization$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerOrganization' from JSON`,
  );
}
