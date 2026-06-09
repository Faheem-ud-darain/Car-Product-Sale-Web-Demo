import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductShowcase from './components/ProductShowcase';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import SpecsSection from './components/SpecsSection';
import RetailGrid from './components/RetailGrid';
import Footer from './components/Footer';
import { products } from './data/products';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Auto-play interval: cycles products every 4 seconds when autoplay is active
  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setSelectedProduct((currentProduct) => {
        const currentIndex = products.findIndex((p) => p.id === currentProduct.id);
        const nextIndex = (currentIndex + 1) % products.length;
        return products[nextIndex];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  // Handle manual product selection (pauses autoplay so the user can inspect)
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setIsAutoplay(false); // Pause autoplay on manual click
  };

  return (
    <div className="w-full min-h-screen bg-[#0B0B0C] text-zinc-100 flex flex-col justify-start">
      {/* Premium Glass Header */}
      <Header />

      <main className="flex-grow">
        {/* Hero Product Showcase Section */}
        <ProductShowcase 
          selectedProduct={selectedProduct} 
          onSelectProduct={handleSelectProduct}
          isAutoplay={isAutoplay}
          onToggleAutoplay={() => setIsAutoplay(!isAutoplay)}
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

