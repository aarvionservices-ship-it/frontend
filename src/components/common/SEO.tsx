import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
    canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonicalUrl }) => {
    const siteTitle = 'Aarvion Services';
    const fullTitle = `${title} | ${siteTitle}`;
    const defaultDescription = 'A diversified service-based company delivering modern, reliable and efficient solutions across multiple domains. Specializing in back-office, financial services, IT support, and more.';
    const actualDescription = description || defaultDescription;
    const currentUrl = canonicalUrl || window.location.href;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={actualDescription} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={actualDescription} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={currentUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={actualDescription} />
        </Helmet>
    );
};

export default SEO;
