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
  title = "MetaForgeAI — Enterprise AI Agency | Pakistan & MENA",
  description = "MetaForgeAI builds RAG systems, AI agents, LLM fine-tuning pipelines, and automation workflows for enterprises in Pakistan and MENA. Trusted AI solutions, shipped fast.",
  canonical = "https://metaforgeai.vercel.app",
  ogType = "website",
  ogImage = "https://metaforgeai.vercel.app/og-image.png",
  twitterHandle = "@metaforgeai",
}: SEOProps) => {
  const siteTitle = title.includes("MetaForgeAI") ? title : `${title} | MetaForgeAI`;

  // Determine if homepage or inner page to route JSON-LD schemas correctly
  const path = canonical.replace(/\/$/, "");
  const isHomepage = path === "https://metaforgeai.vercel.app";

  // BreadcrumbList for list of inner pages
  const breadcrumbSchema = !isHomepage
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://metaforgeai.vercel.app"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": title,
            "item": canonical
          }
        ]
      }
    : null;

  // Assembly of structured data
  const schemas: Record<string, unknown>[] = [];

  if (isHomepage) {
    // 1. Organization Schema
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "MetaForgeAI",
      "url": "https://metaforgeai.vercel.app",
      "logo": "https://metaforgeai.vercel.app/og-image.png",
      "description": "MetaForgeAI is an enterprise AI agency offering RAG systems, AI agent workflows, LLM fine-tuning, AI chatbots, and business process automation for companies in Pakistan and the MENA region.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "PK",
        "addressRegion": "Punjab"
      },
      "sameAs": [
        "https://github.com/ibtesaamaslam",
        "https://www.instagram.com/metaforge.tech/"
      ],
      "areaServed": ["PK", "AE", "SA", "QA", "KW", "BH", "OM", "EG"],
      "knowsAbout": [
        "RAG Systems", "LLM Fine-tuning", "AI Agent Workflows",
        "Business Process Automation", "AI Chatbots", "Predictive Analytics"
      ]
    });

    // 2. WebSite Schema with SearchAction
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://metaforgeai.vercel.app/#website",
      "url": "https://metaforgeai.vercel.app/",
      "name": "MetaForgeAI",
      "description": "Enterprise AI Solutions & Automation Platform",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://metaforgeai.vercel.app/?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    });

    // 3. Person Schema for Founder
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Ibtesaam Aslam",
      "jobTitle": "Full-Stack Developer & Founder",
      "worksFor": {
        "@type": "Organization",
        "name": "MetaForgeAI",
        "url": "https://metaforgeai.vercel.app"
      },
      "sameAs": [
        "https://github.com/ibtesaamaslam",
        "https://www.instagram.com/metaforge.tech/"
      ]
    });

    // 4. HowTo Schema on AI workflow and deployment process
    schemas.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Deploy Enterprise AI with MetaForgeAI",
      "description": "A structural approach to planning, validating, tuning, and deploying production-grade neural networks, RAG arrays, and agents.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Free Consultation Assessment",
          "text": "Identify corporate business process constraints, define ROI indicators, and align on budget scope.",
          "url": "https://metaforgeai.vercel.app/book"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Chunking Strategy and Knowledge Base Engineering",
          "text": "Construct secure vector data chunks and connect private corporate file environments."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Aligning weights and LLM Fine-tuning",
          "text": "Align and calibrate pre-trained models on proprietary terminal files and databases."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "API deployment and 24/7 logging",
          "text": "Configure highly optimized middleware connectors and setup continuous uptime trackers."
        }
      ]
    });

    // 5. Service Schemas for each of our 9 services
    const servicesList = [
      { name: "RAG & Knowledge Base Systems", desc: "Custom Retrieval-Augmented Generation processes linking models directly to corporate documents." },
      { name: "AI Chatbots & Conversational Agents", desc: "Context-aware intelligent supports and multi-turn conversational agents for regional business needs." },
      { name: "AI Agent Workflows", desc: "Fully autonomous agents carrying out multi-step web research, file reviews, or invoice parsing." },
      { name: "LLM Fine-tuning & Custom Models", desc: "Proprietary alignment of weights using open-source engines for extreme local performance." },
      { name: "AI Integration & API Consulting", desc: "Connecting enterprise AI models to Salesforce, HubSpot, SAP, oracle, and custom DB structures." },
      { name: "Smart AI Web Apps & Personalization", desc: "Type-safe websites featuring real-time stream personalized components." },
      { name: "Predictive Analytics", desc: "Forecasting and demand planning models powered by machine learning architectures." },
      { name: "Business Process Automation", desc: "Replacing administrative back-office tasks with secure digital cognitive scripts." },
      { name: "Computer Vision Solutions", desc: "Visual shape patterns, defect spotters, and high-frequency tracking cameras for operations." }
    ];

    servicesList.forEach(srv => {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": srv.name,
        "description": srv.desc,
        "provider": {
          "@type": "Organization",
          "name": "MetaForgeAI",
          "url": "https://metaforgeai.vercel.app"
        },
        "areaServed": ["PK", "AE", "SA", "QA", "KW", "BH", "OM", "EG"]
      });
    });

    // 6. Comprehensive FAQPage Schema (combining homepage, about, and services FAQs)
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is MetaForgeAI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MetaForgeAI is an enterprise AI agency based in Pakistan that builds RAG systems, AI chatbots, LLM fine-tuning pipelines, and automation workflows for businesses in Pakistan and the MENA region."
          }
        },
        {
          "@type": "Question",
          "name": "What AI services does MetaForgeAI offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MetaForgeAI offers RAG system development, AI agent workflow design, LLM fine-tuning, custom AI chatbots, predictive analytics, and end-to-end business process automation."
          }
        },
        {
          "@type": "Question",
          "name": "Does MetaForgeAI work with businesses outside Pakistan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. MetaForgeAI serves clients across the MENA region including UAE, Saudi Arabia, Qatar, Kuwait, and Egypt."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started with MetaForgeAI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Visit https://metaforgeai.vercel.app and use the contact form or reach out directly to discuss your project requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can MetaForgeAI implement AI solutions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our rapid deployment methodology allows us to implement basic AI solutions within 2-4 weeks, while complex enterprise systems typically take 6-12 weeks. We use our proprietary AI frameworks and pre-trained models to accelerate development without compromising quality."
          }
        },
        {
          "@type": "Question",
          "name": "How does MetaForgeAI deploy custom RAG Systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We set up secure chunking pipelines, select high-density vector databases (like Pinecone, Qdrant, or PGVector), and connect your legacy local files/repos to deliver 100% accurate, hallucination-free answers mapped to your corporate guidelines."
          }
        },
        {
          "@type": "Question",
          "name": "Are AI agent workflows safe for core enterprise functions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our AI Agent Workflows rely on deterministic human-in-the-loop triggers for high-stakes actions, and operate on secured servers with isolated permissions, fully verifying inputs and logging every trace before finalizing activities."
          }
        },
        {
          "@type": "Question",
          "name": "What are the benefits of custom LLM Fine-tuning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fine-tuning allows a smaller, faster, open-source model (e.g., Llama 3 8B) to outperform global generic models on specific niche fields, maintaining total model ownership inside your private cloud while sharply cutting token API bills."
          }
        },
        {
          "@type": "Question",
          "name": "How does Business Process Automation connect with legacy ERPs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We program secure, compliant middleware and custom connectors that securely query or push structured data files directly to SAP, Salesforce, Oracle, or proprietary SQL servers under strict access protocols without breaking active procedures."
          }
        }
      ]
    });
  } else {
    // If we're on inner page, push breadcrumbs
    if (breadcrumbSchema) {
      schemas.push(breadcrumbSchema);
    }
  }

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="google-site-verification" content="KAExMB8yD6vpHE_-eMJfkPFwrrRqKHQJkdMmavpH4IE" />
      <meta name="description" content={description} />
      <meta name="keywords" content="MetaForgeAI, AI Agency, Enterprise AI, Business Process Automation, RAG Systems, Chatbots, AI Agents, LLM Fine-tuning, custom machine learning, workflow automation agency, AI agency Pakistan, enterprise AI MENA" />
      <link rel="canonical" href={canonical} />
      
      {/* Preconnect external assets */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
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

      {/* Inject Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(schemas)}
      </script>
    </Helmet>
  );
};

export default SEO;
