export const phoneRules = {
  AR: { lengths: [10], label: "10 dígitos" },
  BO: { lengths: [8], label: "8 dígitos" },
  BR: { lengths: [10, 11], label: "10 u 11 dígitos" },
  CL: { lengths: [9], label: "9 dígitos" },
  CO: { lengths: [10], label: "10 dígitos" },
  CR: { lengths: [8], label: "8 dígitos" },
  CU: { lengths: [8], label: "8 dígitos" },
  DO: { lengths: [10], label: "10 dígitos" },
  EC: { lengths: [9], label: "9 dígitos" },
  SV: { lengths: [8], label: "8 dígitos" },
  GT: { lengths: [8], label: "8 dígitos" },
  HT: { lengths: [8], label: "8 dígitos" },
  HN: { lengths: [8], label: "8 dígitos" },
  MX: { lengths: [10], label: "10 dígitos" },
  NI: { lengths: [8], label: "8 dígitos" },
  PA: { lengths: [7, 8], label: "7 u 8 dígitos" },
  PY: { lengths: [9], label: "9 dígitos" },
  PE: { lengths: [9], label: "9 dígitos" },
  PR: { lengths: [10], label: "10 dígitos" },
  UY: { lengths: [8], label: "8 dígitos" },
  VE: { lengths: [10], label: "10 dígitos" },
} as const;

export type PhoneCountryIso = keyof typeof phoneRules;

export function isPhoneCountryIso(value: string): value is PhoneCountryIso {
  return value in phoneRules;
}

export function isValidLocalPhone(
  countryIso: PhoneCountryIso,
  phone: string,
) {
  if (!/^\d+$/.test(phone)) return false;

  const validLengths: readonly number[] = phoneRules[countryIso].lengths;
  return validLengths.includes(phone.length);
}

export function sanitizePersonName(value: string) {
  return value.replace(/[^\p{L}\p{M}\s.'’\-]/gu, "").slice(0, 80);
}

export function sanitizeCompanyName(value: string) {
  return value
    .replace(/[^\p{L}\p{M}\p{N}\s&.,'’()\-]/gu, "")
    .slice(0, 120);
}
