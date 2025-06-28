// src/components/Seo.tsx

const structuredData: object[] = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "W Relacji - Psychologia z Jolantą Dominiak-Konderak",
    url: "https://wrelacji.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://wrelacji.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: "https://wrelacji.com/",
    name: "W Relacji - Psycholog online i stacjonarnie",
    description: "Psycholog Jolanta Dominiak-Konderak: konsultacje, terapia i mentoring w nurcie ACT, RTZ, Gestalt."
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "O MNIE", item: "https://wrelacji.com/#about" },
      { "@type": "ListItem", position: 2, name: "OFERUJĘ", item: "https://wrelacji.com/#services" },
      { "@type": "ListItem", position: 3, name: "PRAKTYKA", item: "https://wrelacji.com/#practice" },
      { "@type": "ListItem", position: 4, name: "OBSZARY POMOCY", item: "https://wrelacji.com/#help" },
      { "@type": "ListItem", position: 5, name: "GABINET", item: "https://wrelacji.com/#office" },
      { "@type": "ListItem", position: 6, name: "KONTAKT", item: "https://wrelacji.com/#contact" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Therapist",
    name: "W Relacji - Jolanta Dominiak-Konderak",
    url: "https://wrelacji.com/",
    logo: "https://wrelacji.com/logo-no-bg.png",
    image: "https://wrelacji.com/jola_portret_round_corners.png",
    description: "Psycholog Jolanta Dominiak-Konderak oferuje konsultacje i terapię online: Zoom, Google Meets.",
    telephone: "+48690328246",
    email: "kontakt@wrelacji.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Przykładowa 12",
      postalCode: "44-190",
      addressLocality: "Knurów",
      addressCountry: "PL"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.2869,
      longitude: 18.7161
    },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00"
    }],
    sameAs: ["https://instagram.com/jolanta_psychology"]
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jolanta Dominiak-Konderak",
    jobTitle: "Psycholog kliniczny",
    url: "https://wrelacji.com/",
    sameAs: [
      "https://instagram.com/jolanta_psychology",
      "https://www.linkedin.com/in/jolanta-dominiak-konderak"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Usługi psychologiczne - W Relacji",
    url: "https://wrelacji.com/#services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Konsultacja psychologiczna",
          description: "Spotkanie wprowadzające lub jednorazowa konsultacja online lub stacjonarnie w Knurowie."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Terapia psychologiczna",
          description: "Regularne sesje terapeutyczne wspierające zmianę schematów i lepsze funkcjonowanie."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mentoring",
          description: "Wsparcie w realizacji konkretnych celów, wzmacnianiu zasobów i tworzeniu nowych nawyków."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "W Relacji - Gabinet Psychologiczny",
    url: "https://wrelacji.com/#office",
    telephone: "+48690328246",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Przykładowa 12",
      postalCode: "44-190",
      addressLocality: "Knurów",
      addressCountry: "PL"
    },
    priceRange: "150 PLN",
    makesOffer: {
      "@type": "Offer",
      price: 150,
      priceCurrency: "PLN",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: 150,
        priceCurrency: "PLN",
        valueAddedTaxIncluded: true
      }
    }
  }
]

export function SeoJsonLd() {
  return (
    <>
      {structuredData.map((entry, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </>
  )
}
