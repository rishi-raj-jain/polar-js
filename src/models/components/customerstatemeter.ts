/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * An active meter for a customer, with latest consumed and credited units.
 */
export type CustomerStateMeter = {
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Creation timestamp of the object.
   */
  createdAt: Date;
  /**
   * Last modification timestamp of the object.
   */
  modifiedAt: Date | null;
  /**
   * The ID of the meter.
   */
  meterId: string;
  /**
   * The number of consumed units.
   */
  consumedUnits: number;
  /**
   * The number of credited units.
   */
  creditedUnits: number;
  /**
   * The balance of the meter, i.e. the difference between credited and consumed units.
   */
  balance: number;
};

/** @internal */
export const CustomerStateMeter$inboundSchema: z.ZodType<
  CustomerStateMeter,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  meter_id: z.string(),
  consumed_units: z.number(),
  credited_units: z.number().int(),
  balance: z.number(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "meter_id": "meterId",
    "consumed_units": "consumedUnits",
    "credited_units": "creditedUnits",
  });
});

/** @internal */
export type CustomerStateMeter$Outbound = {
  id: string;
  created_at: string;
  modified_at: string | null;
  meter_id: string;
  consumed_units: number;
  credited_units: number;
  balance: number;
};

/** @internal */
export const CustomerStateMeter$outboundSchema: z.ZodType<
  CustomerStateMeter$Outbound,
  z.ZodTypeDef,
  CustomerStateMeter
> = z.object({
  id: z.string(),
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  meterId: z.string(),
  consumedUnits: z.number(),
  creditedUnits: z.number().int(),
  balance: z.number(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    meterId: "meter_id",
    consumedUnits: "consumed_units",
    creditedUnits: "credited_units",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerStateMeter$ {
  /** @deprecated use `CustomerStateMeter$inboundSchema` instead. */
  export const inboundSchema = CustomerStateMeter$inboundSchema;
  /** @deprecated use `CustomerStateMeter$outboundSchema` instead. */
  export const outboundSchema = CustomerStateMeter$outboundSchema;
  /** @deprecated use `CustomerStateMeter$Outbound` instead. */
  export type Outbound = CustomerStateMeter$Outbound;
}

export function customerStateMeterToJSON(
  customerStateMeter: CustomerStateMeter,
): string {
  return JSON.stringify(
    CustomerStateMeter$outboundSchema.parse(customerStateMeter),
  );
}

export function customerStateMeterFromJSON(
  jsonString: string,
): SafeParseResult<CustomerStateMeter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomerStateMeter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerStateMeter' from JSON`,
  );
}
