const siteUrl = 'https://wrelacji.com/';
const practitionerId = `${siteUrl}#jolanta-dominiak-konderak`;

const offers = [
  {
    name: 'Konsultacja psychologiczna online',
    description:
      'Jednorazowe lub wprowadzające spotkanie psychologiczne online dla osób dorosłych.',
  },
  {
    name: 'Terapia psychologiczna online',
    description:
      'Regularne sesje terapeutyczne online wspierające lepsze rozumienie trudności i zmianę sposobów reagowania.',
  },
  {
    name: 'Mentoring online',
    description:
      'Wsparcie w pracy nad konkretnymi celami, zasobami i bardziej świadomymi decyzjami.',
  },
] as const;

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
      name: 'W Relacji',
      url: siteUrl,
      inLanguage: 'pl-PL',
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}#webpage`,
      url: siteUrl,
      name: 'W Relacji - psycholog online',
      isPartOf: { '@id': `${siteUrl}#website` },
      about: { '@id': practitionerId },
      inLanguage: 'pl-PL',
      description:
        'Psycholog Jolanta Dominiak-Konderak oferuje konsultacje, terapię psychologiczną i mentoring online dla osób dorosłych.',
    },
    {
      '@type': 'Person',
      '@id': practitionerId,
      name: 'Jolanta Dominiak-Konderak',
      jobTitle: 'Psycholog',
      url: siteUrl,
      image: `${siteUrl}jola_portret_round_corners.png`,
      email: 'kontakt.wrelacji@gmail.com',
      telephone: '+48690328246',
      sameAs: ['https://instagram.com/jolanta_psychology'],
      knowsAbout: [
        'psychologia',
        'terapia psychologiczna',
        'interwencja kryzysowa',
        'ACT',
        'RTZ',
        'Gestalt',
      ],
    },
    {
      '@type': 'OfferCatalog',
      '@id': `${siteUrl}#services`,
      name: 'Usługi psychologiczne online - W Relacji',
      url: `${siteUrl}#services`,
      itemListElement: offers.map((offer) => ({
        '@type': 'Offer',
        price: '180',
        priceCurrency: 'PLN',
        itemOffered: {
          '@type': 'Service',
          name: offer.name,
          description: offer.description,
          provider: { '@id': practitionerId },
          areaServed: 'Polska',
          availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: siteUrl,
          },
        },
      })),
    },
  ],
};

export function SeoJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
