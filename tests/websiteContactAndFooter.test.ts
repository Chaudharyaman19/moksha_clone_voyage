/// <reference types="../../moksha-backend-v1/node_modules/@types/jest" />
import { splitLastWord } from "../lib/contactFields";
import { defaultContactSections, mergeContactSections } from "../lib/extraPagesContent";
import { defaultLandingSections, mainFooterFields, mergeLandingSections } from "../lib/landingContent";
import { getMergedWebsiteSections } from "../lib/websiteSettingsApi";

describe("Website Dynamic Data & Admin Sync Tests (moksha_clone_voyage)", () => {
  describe("1. splitLastWord Utility", () => {
    it("should split headings so the last word is styled orange", () => {
      expect(splitLastWord("Contact Us")).toEqual(["Contact", "Us"]);
      expect(splitLastWord("We’re Here to Support You")).toEqual(["We’re Here to Support", "You"]);
      expect(splitLastWord("Single")).toEqual(["", "Single"]);
      expect(splitLastWord("  Trimmed Title Here  ")).toEqual(["Trimmed Title", "Here"]);
    });
  });

  describe("2. Default Content Consistency on the Website", () => {
    it("should provide exact fallback values for Contact page when admin has not overridden them", () => {
      const hero = defaultContactSections.find((s) => s.key === "contact-hero");
      expect(hero).toBeDefined();

      const getHeroField = (k: string) => hero?.fields?.find((f) => f.key === k)?.value;
      expect(getHeroField("hero.title")).toBe("Contact Us");
      expect(getHeroField("hero.phone")).toBe("9220147229");
      expect(getHeroField("hero.callLabel")).toBe("Call Helpline");
      expect(getHeroField("hero.callNote")).toBe("(24×7)");
      expect(getHeroField("hero.requestLabel")).toBe("Request Sewa");

      const support = defaultContactSections.find((s) => s.key === "contact-support");
      const getSupportField = (k: string) => support?.fields?.find((f) => f.key === k)?.value;
      expect(getSupportField("support.title1")).toBe("We’re Here to");
      expect(getSupportField("support.title2")).toBe("Support You");
      expect(getSupportField("strip.callTitle")).toBe("Call Our Helpline");
      expect(getSupportField("strip.email")).toBe("info@mokshasewa.org");

      const form = defaultContactSections.find((s) => s.key === "contact-form");
      const getFormField = (k: string) => form?.fields?.find((f) => f.key === k)?.value;
      expect(getFormField("form.title")).toBe("Get in Touch with Us");
      expect(getFormField("form.namePlaceholder")).toBe("Your Name *");
      expect(getFormField("form.phonePlaceholder")).toBe("Mobile Number *");
      expect(getFormField("form.successMessage")).toBe(
        "Message sent. Our team will get back to you shortly."
      );

      const offices = defaultContactSections.find((s) => s.key === "contact-offices");
      const getOfficeField = (k: string) => offices?.fields?.find((f) => f.key === k)?.value;
      expect(getOfficeField("office1.head1")).toBe("Head Office");
      expect(getOfficeField("office1.head2")).toBe("Delhi–NCR");
      expect(getOfficeField("office2.head2")).toBe("Visakhapatnam");
      expect(getOfficeField("office3.head1")).toBe("Global Office");
      expect(getOfficeField("presence.title")).toBe("Our Presence\nat a Glance");

      const contactFooter = defaultContactSections.find((s) => s.key === "contact-footer");
      const getFooterField = (k: string) => contactFooter?.fields?.find((f) => f.key === k)?.value;
      expect(getFooterField("footer.tagline")).toBe("Stand with dignity. Serve with compassion.");
      expect(getFooterField("footer.quickTitle")).toBe("Quick Links");
      expect(getFooterField("footer.servicesTitle")).toBe("Our Services");
      expect(getFooterField("footer.initiativesTitle")).toBe("Our Seva Initiatives");
      expect(getFooterField("footer.value1.title")).toBe("Compassion");
      expect(getFooterField("footer.copyright")).toContain("Moksha Sewa");
    });

    it("should provide exact fallback values for Main Website Footer (FooterNew)", () => {
      const getField = (k: string) => mainFooterFields.find((f) => f.key === k)?.value;

      expect(getField("band.tagline")).toBe("Stand with dignity. Serve with compassion.");
      expect(getField("band.btn1.label")).toBe("Request Help");
      expect(getField("band.btn2.label")).toBe("Donate Now");
      expect(getField("band.btn3.label")).toBe("Become a Volunteer");
      expect(getField("brand.name")).toBe("Moksha Sewa");
      expect(getField("brand.tagline")).toBe("A Namo Gange Trust Initiative");
      expect(getField("quick.title")).toBe("Quick Links");
      expect(getField("quick.1.label")).toBe("Home");
      expect(getField("services.title")).toBe("Our Services");
      expect(getField("initiatives.title")).toBe("Our Seva Initiatives");
      expect(getField("presence.title")).toBe("Our Global Presence");
      expect(getField("value1.title")).toBe("Compassion");
      expect(getField("bottom.copyright")).toBe("Moksha Sewa – Dignified Last Rites & Support");
      expect(getField("bottom.designedBy")).toBe("Designed & Developed by");
    });
  });

  describe("3. Admin Overrides Reflection on the Website", () => {
    it("should reflect updated Contact page text when admin saves changes", () => {
      const adminSavedContact = [
        {
          key: "contact-hero",
          fields: [
            { key: "hero.title", value: "24x7 Help Center" },
            { key: "hero.phone", value: "9876543210" },
          ],
        },
        {
          key: "contact-form",
          fields: [
            { key: "form.title", value: "Send Direct Enquiry" },
            { key: "form.locationOptions", value: "Delhi NCR\nHaridwar\nVaranasi" },
            { key: "form.successMessage", value: "We have received your enquiry immediately." },
          ],
        },
        {
          key: "contact-footer",
          fields: [
            { key: "footer.tagline", value: "Committed to every soul's dignified journey." },
            { key: "footer.quick.1.label", value: "Moksha Home" },
          ],
        },
      ];

      const merged = mergeContactSections(adminSavedContact as any);

      // Hero check
      const hero = merged.find((s) => s.key === "contact-hero");
      const heroTitle = hero?.fields?.find((f) => f.key === "hero.title")?.value;
      const heroPhone = hero?.fields?.find((f) => f.key === "hero.phone")?.value;
      const heroEyebrow = hero?.fields?.find((f) => f.key === "hero.eyebrow")?.value;
      expect(heroTitle).toBe("24x7 Help Center");
      expect(heroPhone).toBe("9876543210");
      expect(heroEyebrow).toBe("Get in Touch"); // default kept

      const [head, tail] = splitLastWord(heroTitle || "");
      expect(head).toBe("24x7 Help");
      expect(tail).toBe("Center");

      // Form check
      const form = merged.find((s) => s.key === "contact-form");
      const formTitle = form?.fields?.find((f) => f.key === "form.title")?.value;
      const formLocations = form?.fields
        ?.find((f) => f.key === "form.locationOptions")
        ?.value.split("\n")
        .map((l) => l.trim());
      const successMsg = form?.fields?.find((f) => f.key === "form.successMessage")?.value;
      expect(formTitle).toBe("Send Direct Enquiry");
      expect(formLocations).toEqual(["Delhi NCR", "Haridwar", "Varanasi"]);
      expect(successMsg).toBe("We have received your enquiry immediately.");

      // Contact Footer check
      const footer = merged.find((s) => s.key === "contact-footer");
      expect(footer?.fields?.find((f) => f.key === "footer.tagline")?.value).toBe(
        "Committed to every soul's dignified journey."
      );
      expect(footer?.fields?.find((f) => f.key === "footer.quick.1.label")?.value).toBe(
        "Moksha Home"
      );
      // Untouched link keeps default
      expect(footer?.fields?.find((f) => f.key === "footer.quick.2.label")?.value).toBe(
        "About Us"
      );
    });

    it("should reflect updated Main Website Footer when admin saves changes", () => {
      const adminSavedLanding = [
        {
          key: "footer",
          fields: [
            { key: "band.tagline", value: "Dedicated to eternal peace and compassion." },
            { key: "band.btn1.label", value: "Immediate Assistance" },
            { key: "brand.name", value: "Moksha Sewa NGO" },
            { key: "quick.1.label", value: "Main Portal" },
          ],
        },
      ];

      const merged = mergeLandingSections(adminSavedLanding as any);
      const footer = merged.find((s) => s.key === "footer");
      expect(footer).toBeDefined();

      const getVal = (k: string) => footer?.fields?.find((f) => f.key === k)?.value;
      expect(getVal("band.tagline")).toBe("Dedicated to eternal peace and compassion.");
      expect(getVal("band.btn1.label")).toBe("Immediate Assistance");
      expect(getVal("brand.name")).toBe("Moksha Sewa NGO");
      expect(getVal("quick.1.label")).toBe("Main Portal");
      expect(getVal("quick.1.href")).toBe("/");
      expect(getVal("bottom.designedBy")).toBe("Designed & Developed by");
    });
  });

  describe("4. getMergedWebsiteSections & Global Office Presence", () => {
    it("should make contact-locations available on both Contact page and Landing page", () => {
      const mockSettings = {
        contactPage: {
          sections: [
            {
              key: "contact-locations",
              items: [
                {
                  title: "Admin Edited Head Office - Delhi",
                  subtitle: "Delhi NCR",
                  company: "Namo Gange Trust",
                  value: "+91 9999988888",
                  description: "123 Mohan Nagar, Ghaziabad",
                },
                {
                  title: "Admin Edited Regional Office - Vizag",
                  subtitle: "Visakhapatnam",
                  company: "Namo Gange Wellness",
                  value: "+91 8888877777",
                  description: "Kancharapalem, Vizag",
                },
                {
                  title: "Admin Edited Global Office - London",
                  subtitle: "London, UK",
                  company: "Namo Gange Wellness Ltd",
                  value: "+44 7000000000",
                  description: "6 Liddel Close, Luton",
                },
              ],
            },
          ],
        },
        landingPage: {
          sections: [
            {
              key: "footer",
              name: "Main Footer",
              fields: [
                { key: "band.tagline", value: "Global Compassion" },
              ],
            },
          ],
        },
      };

      // 1. Verify on Contact page
      const contactSections = getMergedWebsiteSections("contact", mockSettings as any);
      const contactLocations = contactSections.find((s) => s.key === "contact-locations");
      expect(contactLocations).toBeDefined();
      expect(contactLocations?.items?.[0].title).toBe("Admin Edited Head Office - Delhi");
      expect(contactLocations?.items?.[0].value).toBe("+91 9999988888");

      // 2. Verify on Landing page (used by FooterNew.tsx)
      const landingSections = getMergedWebsiteSections("landing", mockSettings as any);
      const landingLocations = landingSections.find((s) => s.key === "contact-locations");
      expect(landingLocations).toBeDefined();
      expect(landingLocations?.items?.[0].title).toBe("Admin Edited Head Office - Delhi");
      expect(landingLocations?.items?.[1].title).toBe("Admin Edited Regional Office - Vizag");
      expect(landingLocations?.items?.[2].title).toBe("Admin Edited Global Office - London");

      // 3. Verify on an extra page (e.g. "about" or "services")
      const aboutSections = getMergedWebsiteSections("about", mockSettings as any);
      const aboutLocations = aboutSections.find((s) => s.key === "contact-locations");
      expect(aboutLocations).toBeDefined();
      expect(aboutLocations?.items?.[0].title).toBe("Admin Edited Head Office - Delhi");
    });
  });
});
