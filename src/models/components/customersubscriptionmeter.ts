/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CustomerSubscriptionMeterMeter,
  CustomerSubscriptionMeterMeter$inboundSchema,
  CustomerSubscriptionMeterMeter$Outbound,
  CustomerSubscriptionMeterMeter$outboundSchema,
} from "./customersubscriptionmetermeter.js";

export type CustomerSubscriptionMeter = {
  /**
   * Creation timestamp of the object.
   */
  createdAt: Date;
  /**
   * Last modification timestamp of the object.
   */
  modifiedAt: Date | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The number of consumed units so far in this billing period.
   */
  consumedUnits: number;
  /**
   * The number of credited units so far in this billing period.
   */
  creditedUnits: number;
  /**
   * The amount due in cents so far in this billing period.
   */
  amount: number;
  /**
   * The ID of the meter.
   */
  meterId: string;
  meter: CustomerSubscriptionMeterMeter;
};

/** @internal */
export const CustomerSubscriptionMeter$inboundSchema: z.ZodType<
  CustomerSubscriptionMeter,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  consumed_units: z.number(),
  credited_units: z.number().int(),
  amount: z.number().int(),
  meter_id: z.string(),
  meter: CustomerSubscriptionMeterMeter$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "consumed_units": "consumedUnits",
    "credited_units": "creditedUnits",
    "meter_id": "meterId",
  });
});

/** @internal */
export type CustomerSubscriptionMeter$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  consumed_units: number;
  credited_units: number;
  amount: number;
  meter_id: string;
  meter: CustomerSubscriptionMeterMeter$Outbound;
};

/** @internal */
export const CustomerSubscriptionMeter$outboundSchema: z.ZodType<
  CustomerSubscriptionMeter$Outbound,
  z.ZodTypeDef,
  CustomerSubscriptionMeter
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  consumedUnits: z.number(),
  creditedUnits: z.number().int(),
  amount: z.number().int(),
  meterId: z.string(),
  meter: CustomerSubscriptionMeterMeter$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    consumedUnits: "consumed_units",
    creditedUnits: "credited_units",
    meterId: "meter_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerSubscriptionMeter$ {
  /** @deprecated use `CustomerSubscriptionMeter$inboundSchema` instead. */
  export const inboundSchema = CustomerSubscriptionMeter$inboundSchema;
  /** @deprecated use `CustomerSubscriptionMeter$outboundSchema` instead. */
  export const outboundSchema = CustomerSubscriptionMeter$outboundSchema;
  /** @deprecated use `CustomerSubscriptionMeter$Outbound` instead. */
  export type Outbound = CustomerSubscriptionMeter$Outbound;
}

export function customerSubscriptionMeterToJSON(
  customerSubscriptionMeter: CustomerSubscriptionMeter,
): string {
  return JSON.stringify(
    CustomerSubscriptionMeter$outboundSchema.parse(customerSubscriptionMeter),
  );
}

export function customerSubscriptionMeterFromJSON(
  jsonString: string,
): SafeParseResult<CustomerSubscriptionMeter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomerSubscriptionMeter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerSubscriptionMeter' from JSON`,
  );
}
