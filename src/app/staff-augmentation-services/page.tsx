import StaffAugmentationContactBanner from "@/components/staff-augmentation-services/banner";
import Form from "@/components/staff-augmentation-services/form";
import Script from "next/script";

export default function StaffAugmentationContactPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Staff Augmentation Services in Europe | BharathaTechno IT EU",
    url: "https://bharathatechno.de/staff-augmentation-services",
    headline: "Contact Us for Staff Augmentation Services in Europe",
    description:
      "Get in touch with BharathaTechno IT EU for tailored staff augmentation and dedicated IT team solutions across Europe. We help startups and enterprises scale their development teams with top-tier tech talent.",
    publisher: {
      "@type": "Organization",
      name: "BharathaTechno IT EU",
      url: "https://bharathatechno.de",
      logo: {
        "@type": "ImageObject",
        url: "https://bharathatechno.de/logo.png",
      },
      sameAs: [
        "https://www.linkedin.com/company/bharatha-techno-it-europe/?trk=blended-typeahead",
      ],
    },
    mainEntity: {
      "@type": "ContactPoint",
      contactType: "Sales & Staffing",
      telephone: "+49-175-6502851",
      email: "kourosh.bagherian@bharathatechno.de",
      areaServed: "EU",
      availableLanguage: ["English", "German"],
    },
    about: {
      "@type": "Service",
      name: "IT Staff Augmentation",
      serviceType:
        "Dedicated Development Teams, IT Outsourcing, Nearshore Staffing",
      provider: {
        "@type": "Organization",
        name: "BharathaTechno IT EU",
      },
      areaServed: {
        "@type": "Place",
        name: "Europe",
      },
    },
    potentialAction: {
      "@type": "ContactAction",
      target: "https://bharathatechno.de/staff-augmentation-services",
      "query-input": "required name=contact_form_submission",
    },
  };

  return (
    <>
      <Script
        id="schema-webpage-contact"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <article className="pg_staff">
        <StaffAugmentationContactBanner />
        <Form />
      </article>
    </>
  );
}
