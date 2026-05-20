import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterHandle?: string;
}

const SEO = ({
  title = "MetaForgeAI | Enterprise AI Solutions & Automation",
  description = "MetaForgeAI provides cutting-edge enterprise AI solutions, intelligent process automation, RAG systems, private LLMs, and predictive analytics to transform your business operations in 2026.",
  canonical = "https://metaforgeai.vercel.app",
  ogType = "website",
  ogImage = "https://metaforgeai.vercel.app/og-image.png",
  twitterHandle = "@metaforgeai",
}: SEOProps) => {
  const siteTitle = title.includes("MetaForgeAI") ? title : `${title} | MetaForgeAI`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="google-site-verification" content="KAExMB8yD6vpHE_-eMJfkPFwrrRqKHQJkdMmavpH4IE" />
      <meta name="description" content={description} />
      <meta name="keywords" content="MetaForgeAI, AI Agency, Enterprise AI, Business Process Automation, RAG Systems, Chatbots, AI Agents, LLM Fine-tuning, custom machine learning, workflow automation agency" />
      <link rel="canonical" href={canonical} />
      
      {/* Robots tags for Google */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-static-image-preview:large" />

      {/* Open Graph tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="MetaForgeAI" />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (JSON-LD) - Combined WebSite & Organization for top tier google rich results */}
      <script type="application/ld+json">
        {JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://metaforgeai.vercel.app/#organization",
            "name": "MetaForgeAI",
            "url": "https://metaforgeai.vercel.app",
            "logo": {
              "@type": "ImageObject",
              "url": "https://metaforgeai.vercel.app/logo.png"
            },
            "sameAs": [
              "https://twitter.com/metaforgeai",
              "https://linkedin.com/company/metaforgeai",
              "https://www.instagram.com/meta_forge.ai"
            ],
            "description": "Enterprise AI Solutions & Intelligent Process Automation Agency specializing in custom RAG architectures and multi-agent systems."
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://metaforgeai.vercel.app/#website",
            "url": "https://metaforgeai.vercel.app",
            "name": "MetaForgeAI",
            "description": "Enterprise AI Solutions & Automation Platform",
            "publisher": {
              "@id": "https://metaforgeai.vercel.app/#organization"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://metaforgeai.vercel.app/#service",
            "name": "MetaForgeAI",
            "image": "https://metaforgeai.vercel.app/og-image.png",
            "priceRange": "$$$$",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            }
          }
        ])}
      </script>
    </Helmet>
  );
};

export default SEO;
