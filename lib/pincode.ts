/**
 * Free Indian pincode → state/city lookup via India Post's public API (no key, CORS-enabled for
 * direct browser calls) — used so a form only needs a 6-digit pincode typed once, instead of
 * asking someone to type their own state and city by hand.
 */
export interface PincodeLookupResult {
  city: string;
  state: string;
}

export async function lookupPincode(pincode: string): Promise<PincodeLookupResult | null> {
  if (!/^\d{6}$/.test(pincode)) return null;

  try {
    const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
    if (!res.ok) return null;

    const data = (await res.json()) as { Status: string; PostOffice: { District: string; State: string }[] | null }[];
    const postOffice = data[0]?.PostOffice?.[0];
    if (!postOffice) return null;

    return { city: postOffice.District, state: postOffice.State };
  } catch {
    return null;
  }
}
