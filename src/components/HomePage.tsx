import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Tools from './Tools';
import CaseStudies from './CaseStudies';
import FAQ from './FAQ';
import ContactForm from './ContactForm';
import Footer from './Footer';

export default function HomePage() {
  return (
    <div className="bg-slate-900">
      <Hero />
      <Services />
      <Tools />
      <CaseStudies />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}