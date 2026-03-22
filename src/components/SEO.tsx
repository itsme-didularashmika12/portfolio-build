import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Snap Vibe",
    "image": "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=1200&auto=format&fit=crop",
    "@id": "",
    "url": "https://snapvibe.com",
    "telephone": "0720649128",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Anuradhapura",
      "addressCountry": "LK"
    },
    "sameAs": [
      "https://www.tiktok.com/@snap_vibe3",
      "https://www.instagram.com/nadeesha_chthuranga",
      "https://www.facebook.com/profile.php?id=61577487506628"
    ],
    "description": "Snap Vibe by Nadeesha Chathuranga offers affordable photography in Anuradhapura. Book mini shoots, couple shoots, events, and fashion photography in Sri Lanka."
  };

  return (
    <Helmet>
      <title>Snap Vibe Photography | Photographer in Anuradhapura Sri Lanka</title>
      <meta name="description" content="Snap Vibe by Nadeesha Chathuranga offers affordable photography in Anuradhapura. Book mini shoots, couple shoots, events, and fashion photography in Sri Lanka." />
      <meta name="keywords" content="photographer Anuradhapura, photography Sri Lanka, cheap photoshoot Sri Lanka, Snap Vibe, couple photoshoot Sri Lanka, birthday photoshoot Sri Lanka" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Snap Vibe Photography" />
      <meta property="og:description" content="Affordable photographer in Sri Lanka" />
      <meta property="og:image" content="/og-image.jpg" />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Snap Vibe Photography" />
      <meta name="twitter:description" content="Affordable photographer in Sri Lanka" />
      <meta name="twitter:image" content="/og-image.jpg" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
