import React from 'react';
import Divider from '../components/ui/Divider';
import ServiceCard from '../components/ui/ServiceCard';
import PackageCard from '../components/ui/PackageCard';
import Hero from '../components/ui/Hero';
import ImageBanner from '../components/ui/ImageBanner';
import '../styles/Services.css';

import terraceImg from '../assets/villa-carlotta.webp';
import img1 from '../assets/ceremony.webp';
import img2 from '../assets/villa-balbianello.webp';
import img3 from '../assets/dining.webp';

const Services = () => {
    return (
        <div className="full-width">

            <Hero
                eyebrow="Our Offerings"
                title="Services & Locations"
            />

            <div className="services-grid">
                <ServiceCard
                    image={img1}
                    imageLabel="Ceremony Design"
                    title="Ceremony Design"
                    description="Bespoke altar arrangements, floral archways, and aisle styling."
                    actionText="Explore service"
                />

                <ServiceCard
                    image={img2}
                    imageLabel="Villa Balbianello"
                    title="Villa Balbianello"
                    description="The iconic Como peninsula villa, draped in wisteria."
                    actionText="View location"
                />

                <ServiceCard
                    image={img3}
                    imageLabel="Fine Dining"
                    title="Dining Curation"
                    description="Michelin-starred menus and hand-selected wines."
                    actionText="Discover more"
                />
            </div>

            <div className="spotlight-grid">
                <ImageBanner
                    image={terraceImg}
                    caption="Terrace at sunset"
                    containerClass="flex-center"
                    style={{ minHeight: '200px' }}
                />
                <div className="spotlight-content">
                    <div className="text-eyebrow">Featured Venue</div>
                    <h2 className="spotlight-title">Villa Carlotta —<br /><em className="italic">the jewel of Como</em></h2>
                    <p className="text-muted" style={{ fontSize: '12px', marginBottom: '10px' }}>Commanding views of the Alps, terraced gardens descending to the water's edge, and interiors that whisper centuries of Italian opulence.</p>
                    <button className="btn" style={{ marginTop: '12px' }}>Request availability</button>
                </div>
            </div>

            <div className="packages-heading">
                <div className="text-eyebrow">Packages</div>
                <div className="packages-title">Choose your experience</div>
                <Divider className="flex-center mt-4" />
            </div>

            <div className="services-grid">
                <PackageCard
                    label="Essentials"
                    title="Classico"
                    price="€8,500"
                    priceSuffix=" / event"
                    features={["Venue liaison & booking", "Day-of coordination"]}
                />

                <PackageCard
                    label="Most Popular"
                    title="Lusso"
                    price="€18,000"
                    priceSuffix=" / event"
                    features={["Everything in Classico", "Full floral design"]}
                    dark={true}
                />

                <PackageCard
                    label="Ultimate"
                    title="Esclusivo"
                    price="€32,000"
                    priceSuffix="+"
                    features={["White-glove full service", "Private villa exclusivity"]}
                />
            </div>
        </div>
    );
};

export default Services;