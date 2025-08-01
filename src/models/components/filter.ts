/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  FilterClause,
  FilterClause$inboundSchema,
  FilterClause$Outbound,
  FilterClause$outboundSchema,
} from "./filterclause.js";
import {
  FilterConjunction,
  FilterConjunction$inboundSchema,
  FilterConjunction$outboundSchema,
} from "./filterconjunction.js";

export type Clauses = FilterClause | Filter;

export type Filter = {
  conjunction: FilterConjunction;
  clauses: Array<FilterClause | Filter>;
};

/** @internal */
export const Clauses$inboundSchema: z.ZodType<Clauses, z.ZodTypeDef, unknown> =
  z.union([FilterClause$inboundSchema, z.lazy(() => Filter$inboundSchema)]);

/** @internal */
export type Clauses$Outbound = FilterClause$Outbound | Filter$Outbound;

/** @internal */
export const Clauses$outboundSchema: z.ZodType<
  Clauses$Outbound,
  z.ZodTypeDef,
  Clauses
> = z.union([FilterClause$outboundSchema, z.lazy(() => Filter$outboundSchema)]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Clauses$ {
  /** @deprecated use `Clauses$inboundSchema` instead. */
  export const inboundSchema = Clauses$inboundSchema;
  /** @deprecated use `Clauses$outboundSchema` instead. */
  export const outboundSchema = Clauses$outboundSchema;
  /** @deprecated use `Clauses$Outbound` instead. */
  export type Outbound = Clauses$Outbound;
}

export function clausesToJSON(clauses: Clauses): string {
  return JSON.stringify(Clauses$outboundSchema.parse(clauses));
}

export function clausesFromJSON(
  jsonString: string,
): SafeParseResult<Clauses, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Clauses$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Clauses' from JSON`,
  );
}

/** @internal */
export const Filter$inboundSchema: z.ZodType<Filter, z.ZodTypeDef, unknown> = z
  .object({
    conjunction: FilterConjunction$inboundSchema,
    clauses: z.array(
      z.union([FilterClause$inboundSchema, z.lazy(() => Filter$inboundSchema)]),
    ),
  });

/** @internal */
export type Filter$Outbound = {
  conjunction: string;
  clauses: Array<FilterClause$Outbound | Filter$Outbound>;
};

/** @internal */
export const Filter$outboundSchema: z.ZodType<
  Filter$Outbound,
  z.ZodTypeDef,
  Filter
> = z.object({
  conjunction: FilterConjunction$outboundSchema,
  clauses: z.array(
    z.union([FilterClause$outboundSchema, z.lazy(() => Filter$outboundSchema)]),
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Filter$ {
  /** @deprecated use `Filter$inboundSchema` instead. */
  export const inboundSchema = Filter$inboundSchema;
  /** @deprecated use `Filter$outboundSchema` instead. */
  export const outboundSchema = Filter$outboundSchema;
  /** @deprecated use `Filter$Outbound` instead. */
  export type Outbound = Filter$Outbound;
}

export function filterToJSON(filter: Filter): string {
  return JSON.stringify(Filter$outboundSchema.parse(filter));
}

export function filterFromJSON(
  jsonString: string,
): SafeParseResult<Filter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Filter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Filter' from JSON`,
  );
}
