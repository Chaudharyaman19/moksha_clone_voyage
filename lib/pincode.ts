export interface PincodeLookupResult {
  city: string;
  state: string;
}

export async function lookupPincode(pincode: string): Promise<PincodeLookupResult | null> {
  if (!/^\d{6}$/.test(pincode)) return null;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!res.ok) throw new Error("API failed");

    const data = (await res.json()) as { Status: string; PostOffice: { District: string; State: string }[] | null }[];
    const postOffice = data[0]?.PostOffice?.[0];
    if (!postOffice) throw new Error("No PostOffice found");

    return { city: postOffice.District, state: postOffice.State };
  } catch {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const res = await fetch(`https://api.zippopotam.us/in/${pincode}`, {
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (!res.ok) return null;

      const data = await res.json();
      const place = data.places?.[0];
      if (!place) return null;

      return { city: place["place name"] || place.state, state: place.state };
    } catch {
      return null;
    }
  }
}
