import React, { useState } from 'react';
import Header from './components/Header';
import ProductShowcase from './components/ProductShowcase';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import SpecsSection from './components/SpecsSection';
import RetailGrid from './components/RetailGrid';
import Footer from './components/Footer';
import { products } from './data/products';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div className="w-full min-h-screen bg-[#0B0B0C] text-zinc-100 flex flex-col justify-start">
      {/* Premium Glass Header */}
      <Header />

      <main className="flex-grow">
        {/* Hero Product Showcase Section */}
        <ProductShowcase 
          selectedProduct={selectedProduct} 
          onSelectProduct={setSelectedProduct} 
        />

        {/* Interactive Before & After Gloss Comparison Slider */}
        <BeforeAfterSlider 
          selectedProduct={selectedProduct} 
        />

        {/* Scientific Detailing Mechanisms */}
        <SpecsSection />

        {/* Responsive Retailer Pricing & Availability Directory */}
        <RetailGrid 
          selectedProduct={selectedProduct} 
        />
      </main>

      {/* Luxury Brand Footer */}
      <Footer />
    </div>
  );
}

export default App;

