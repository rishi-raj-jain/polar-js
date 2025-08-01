/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Address,
  Address$inboundSchema,
  Address$Outbound,
  Address$outboundSchema,
} from "./address.js";

export type CheckoutCreateMetadata = string | number | number | boolean;

export type CheckoutCreateCustomFieldData = string | number | boolean | Date;

export type CheckoutCreateCustomerMetadata = string | number | number | boolean;

/**
 * Create a new checkout session from a list of products.
 *
 * @remarks
 * Customers will be able to switch between those products.
 *
 * Metadata set on the checkout will be copied
 * to the resulting order and/or subscription.
 */
export type CheckoutCreate = {
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
  /**
   * Key-value object storing custom field values.
   */
  customFieldData?:
    | { [k: string]: string | number | boolean | Date | null }
    | undefined;
  /**
   * ID of the discount to apply to the checkout.
   */
  discountId?: string | null | undefined;
  /**
   * Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it.
   */
  allowDiscountCodes?: boolean | undefined;
  /**
   * Whether to require the customer to fill their full billing address, instead of just the country. Customers in the US will always be required to fill their full address, regardless of this setting. If you preset the billing address, this setting will be automatically set to `true`.
   */
  requireBillingAddress?: boolean | undefined;
  amount?: number | null | undefined;
  /**
   * ID of an existing customer in the organization. The customer data will be pre-filled in the checkout form. The resulting order will be linked to this customer.
   */
  customerId?: string | null | undefined;
  /**
   * Whether the customer is a business or an individual. If `true`, the customer will be required to fill their full billing address and billing name.
   */
  isBusinessCustomer?: boolean | undefined;
  /**
   * ID of the customer in your system. If a matching customer exists on Polar, the resulting order will be linked to this customer. Otherwise, a new customer will be created with this external ID set.
   */
  externalCustomerId?: string | null | undefined;
  customerName?: string | null | undefined;
  customerEmail?: string | null | undefined;
  customerIpAddress?: string | null | undefined;
  customerBillingName?: string | null | undefined;
  customerBillingAddress?: Address | null | undefined;
  customerTaxId?: string | null | undefined;
  /**
   * Key-value object allowing you to store additional information that'll be copied to the created customer.
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
  customerMetadata?:
    | { [k: string]: string | number | number | boolean }
    | undefined;
  /**
   * ID of a subscription to upgrade. It must be on a free pricing. If checkout is successful, metadata set on this checkout will be copied to the subscription, and existing keys will be overwritten.
   */
  subscriptionId?: string | null | undefined;
  /**
   * URL where the customer will be redirected after a successful payment.You can add the `checkout_id={CHECKOUT_ID}` query parameter to retrieve the checkout session id.
   */
  successUrl?: string | null | undefined;
  /**
   * If you plan to embed the checkout session, set this to the Origin of the embedding page. It'll allow the Polar iframe to communicate with the parent page.
   */
  embedOrigin?: string | null | undefined;
  /**
   * List of product IDs available to select at that checkout. The first one will be selected by default.
   */
  products: Array<string>;
};

/** @internal */
export const CheckoutCreateMetadata$inboundSchema: z.ZodType<
  CheckoutCreateMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/** @internal */
export type CheckoutCreateMetadata$Outbound =
  | string
  | number
  | number
  | boolean;

/** @internal */
export const CheckoutCreateMetadata$outboundSchema: z.ZodType<
  CheckoutCreateMetadata$Outbound,
  z.ZodTypeDef,
  CheckoutCreateMetadata
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutCreateMetadata$ {
  /** @deprecated use `CheckoutCreateMetadata$inboundSchema` instead. */
  export const inboundSchema = CheckoutCreateMetadata$inboundSchema;
  /** @deprecated use `CheckoutCreateMetadata$outboundSchema` instead. */
  export const outboundSchema = CheckoutCreateMetadata$outboundSchema;
  /** @deprecated use `CheckoutCreateMetadata$Outbound` instead. */
  export type Outbound = CheckoutCreateMetadata$Outbound;
}

export function checkoutCreateMetadataToJSON(
  checkoutCreateMetadata: CheckoutCreateMetadata,
): string {
  return JSON.stringify(
    CheckoutCreateMetadata$outboundSchema.parse(checkoutCreateMetadata),
  );
}

export function checkoutCreateMetadataFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutCreateMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutCreateMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutCreateMetadata' from JSON`,
  );
}

/** @internal */
export const CheckoutCreateCustomFieldData$inboundSchema: z.ZodType<
  CheckoutCreateCustomFieldData,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.string(),
  z.number().int(),
  z.boolean(),
  z.string().datetime({ offset: true }).transform(v => new Date(v)),
]);

/** @internal */
export type CheckoutCreateCustomFieldData$Outbound =
  | string
  | number
  | boolean
  | string;

/** @internal */
export const CheckoutCreateCustomFieldData$outboundSchema: z.ZodType<
  CheckoutCreateCustomFieldData$Outbound,
  z.ZodTypeDef,
  CheckoutCreateCustomFieldData
> = z.union([
  z.string(),
  z.number().int(),
  z.boolean(),
  z.date().transform(v => v.toISOString()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutCreateCustomFieldData$ {
  /** @deprecated use `CheckoutCreateCustomFieldData$inboundSchema` instead. */
  export const inboundSchema = CheckoutCreateCustomFieldData$inboundSchema;
  /** @deprecated use `CheckoutCreateCustomFieldData$outboundSchema` instead. */
  export const outboundSchema = CheckoutCreateCustomFieldData$outboundSchema;
  /** @deprecated use `CheckoutCreateCustomFieldData$Outbound` instead. */
  export type Outbound = CheckoutCreateCustomFieldData$Outbound;
}

export function checkoutCreateCustomFieldDataToJSON(
  checkoutCreateCustomFieldData: CheckoutCreateCustomFieldData,
): string {
  return JSON.stringify(
    CheckoutCreateCustomFieldData$outboundSchema.parse(
      checkoutCreateCustomFieldData,
    ),
  );
}

export function checkoutCreateCustomFieldDataFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutCreateCustomFieldData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutCreateCustomFieldData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutCreateCustomFieldData' from JSON`,
  );
}

/** @internal */
export const CheckoutCreateCustomerMetadata$inboundSchema: z.ZodType<
  CheckoutCreateCustomerMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/** @internal */
export type CheckoutCreateCustomerMetadata$Outbound =
  | string
  | number
  | number
  | boolean;

/** @internal */
export const CheckoutCreateCustomerMetadata$outboundSchema: z.ZodType<
  CheckoutCreateCustomerMetadata$Outbound,
  z.ZodTypeDef,
  CheckoutCreateCustomerMetadata
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutCreateCustomerMetadata$ {
  /** @deprecated use `CheckoutCreateCustomerMetadata$inboundSchema` instead. */
  export const inboundSchema = CheckoutCreateCustomerMetadata$inboundSchema;
  /** @deprecated use `CheckoutCreateCustomerMetadata$outboundSchema` instead. */
  export const outboundSchema = CheckoutCreateCustomerMetadata$outboundSchema;
  /** @deprecated use `CheckoutCreateCustomerMetadata$Outbound` instead. */
  export type Outbound = CheckoutCreateCustomerMetadata$Outbound;
}

export function checkoutCreateCustomerMetadataToJSON(
  checkoutCreateCustomerMetadata: CheckoutCreateCustomerMetadata,
): string {
  return JSON.stringify(
    CheckoutCreateCustomerMetadata$outboundSchema.parse(
      checkoutCreateCustomerMetadata,
    ),
  );
}

export function checkoutCreateCustomerMetadataFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutCreateCustomerMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutCreateCustomerMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutCreateCustomerMetadata' from JSON`,
  );
}

/** @internal */
export const CheckoutCreate$inboundSchema: z.ZodType<
  CheckoutCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ).optional(),
  custom_field_data: z.record(
    z.nullable(
      z.union([
        z.string(),
        z.number().int(),
        z.boolean(),
        z.string().datetime({ offset: true }).transform(v => new Date(v)),
      ]),
    ),
  ).optional(),
  discount_id: z.nullable(z.string()).optional(),
  allow_discount_codes: z.boolean().default(true),
  require_billing_address: z.boolean().default(false),
  amount: z.nullable(z.number().int()).optional(),
  customer_id: z.nullable(z.string()).optional(),
  is_business_customer: z.boolean().default(false),
  external_customer_id: z.nullable(z.string()).optional(),
  customer_name: z.nullable(z.string()).optional(),
  customer_email: z.nullable(z.string()).optional(),
  customer_ip_address: z.nullable(z.string()).optional(),
  customer_billing_name: z.nullable(z.string()).optional(),
  customer_billing_address: z.nullable(Address$inboundSchema).optional(),
  customer_tax_id: z.nullable(z.string()).optional(),
  customer_metadata: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ).optional(),
  subscription_id: z.nullable(z.string()).optional(),
  success_url: z.nullable(z.string()).optional(),
  embed_origin: z.nullable(z.string()).optional(),
  products: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    "custom_field_data": "customFieldData",
    "discount_id": "discountId",
    "allow_discount_codes": "allowDiscountCodes",
    "require_billing_address": "requireBillingAddress",
    "customer_id": "customerId",
    "is_business_customer": "isBusinessCustomer",
    "external_customer_id": "externalCustomerId",
    "customer_name": "customerName",
    "customer_email": "customerEmail",
    "customer_ip_address": "customerIpAddress",
    "customer_billing_name": "customerBillingName",
    "customer_billing_address": "customerBillingAddress",
    "customer_tax_id": "customerTaxId",
    "customer_metadata": "customerMetadata",
    "subscription_id": "subscriptionId",
    "success_url": "successUrl",
    "embed_origin": "embedOrigin",
  });
});

/** @internal */
export type CheckoutCreate$Outbound = {
  metadata?: { [k: string]: string | number | number | boolean } | undefined;
  custom_field_data?:
    | { [k: string]: string | number | boolean | string | null }
    | undefined;
  discount_id?: string | null | undefined;
  allow_discount_codes: boolean;
  require_billing_address: boolean;
  amount?: number | null | undefined;
  customer_id?: string | null | undefined;
  is_business_customer: boolean;
  external_customer_id?: string | null | undefined;
  customer_name?: string | null | undefined;
  customer_email?: string | null | undefined;
  customer_ip_address?: string | null | undefined;
  customer_billing_name?: string | null | undefined;
  customer_billing_address?: Address$Outbound | null | undefined;
  customer_tax_id?: string | null | undefined;
  customer_metadata?:
    | { [k: string]: string | number | number | boolean }
    | undefined;
  subscription_id?: string | null | undefined;
  success_url?: string | null | undefined;
  embed_origin?: string | null | undefined;
  products: Array<string>;
};

/** @internal */
export const CheckoutCreate$outboundSchema: z.ZodType<
  CheckoutCreate$Outbound,
  z.ZodTypeDef,
  CheckoutCreate
> = z.object({
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ).optional(),
  customFieldData: z.record(
    z.nullable(
      z.union([
        z.string(),
        z.number().int(),
        z.boolean(),
        z.date().transform(v => v.toISOString()),
      ]),
    ),
  ).optional(),
  discountId: z.nullable(z.string()).optional(),
  allowDiscountCodes: z.boolean().default(true),
  requireBillingAddress: z.boolean().default(false),
  amount: z.nullable(z.number().int()).optional(),
  customerId: z.nullable(z.string()).optional(),
  isBusinessCustomer: z.boolean().default(false),
  externalCustomerId: z.nullable(z.string()).optional(),
  customerName: z.nullable(z.string()).optional(),
  customerEmail: z.nullable(z.string()).optional(),
  customerIpAddress: z.nullable(z.string()).optional(),
  customerBillingName: z.nullable(z.string()).optional(),
  customerBillingAddress: z.nullable(Address$outboundSchema).optional(),
  customerTaxId: z.nullable(z.string()).optional(),
  customerMetadata: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ).optional(),
  subscriptionId: z.nullable(z.string()).optional(),
  successUrl: z.nullable(z.string()).optional(),
  embedOrigin: z.nullable(z.string()).optional(),
  products: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    customFieldData: "custom_field_data",
    discountId: "discount_id",
    allowDiscountCodes: "allow_discount_codes",
    requireBillingAddress: "require_billing_address",
    customerId: "customer_id",
    isBusinessCustomer: "is_business_customer",
    externalCustomerId: "external_customer_id",
    customerName: "customer_name",
    customerEmail: "customer_email",
    customerIpAddress: "customer_ip_address",
    customerBillingName: "customer_billing_name",
    customerBillingAddress: "customer_billing_address",
    customerTaxId: "customer_tax_id",
    customerMetadata: "customer_metadata",
    subscriptionId: "subscription_id",
    successUrl: "success_url",
    embedOrigin: "embed_origin",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutCreate$ {
  /** @deprecated use `CheckoutCreate$inboundSchema` instead. */
  export const inboundSchema = CheckoutCreate$inboundSchema;
  /** @deprecated use `CheckoutCreate$outboundSchema` instead. */
  export const outboundSchema = CheckoutCreate$outboundSchema;
  /** @deprecated use `CheckoutCreate$Outbound` instead. */
  export type Outbound = CheckoutCreate$Outbound;
}

export function checkoutCreateToJSON(checkoutCreate: CheckoutCreate): string {
  return JSON.stringify(CheckoutCreate$outboundSchema.parse(checkoutCreate));
}

export function checkoutCreateFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutCreate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutCreate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutCreate' from JSON`,
  );
}
