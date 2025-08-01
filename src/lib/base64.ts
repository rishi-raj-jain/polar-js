/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod/v3";

export function bytesToBase64(u8arr: Uint8Array): string {
  return btoa(String.fromCodePoint(...u8arr));
}

export function bytesFromBase64(encoded: string): Uint8Array {
  return Uint8Array.from(atob(encoded), (c) => c.charCodeAt(0));
}

export function stringToBytes(str: string): Uint8Array {
  return new TextEncoder().encode(str);
}

export function stringFromBytes(u8arr: Uint8Array): string {
  return new TextDecoder().decode(u8arr);
}

export function stringToBase64(str: string): string {
  return bytesToBase64(stringToBytes(str));
}

export function stringFromBase64(b64str: string): string {
  return stringFromBytes(bytesFromBase64(b64str));
}

export const zodOutbound = z
  .instanceof(Uint8Array)
  .or(z.string().transform(stringToBytes));

export const zodInbound = z
  .instanceof(Uint8Array)
  .or(z.string().transform(bytesFromBase64));
