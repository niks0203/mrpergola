import Hero from '../components/Hero';
import QuickHighlights from '../components/QuickHighlights';
import ProductShowcase from '../components/ProductShowcase';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';


export default function Home() {
  return (
    <div className="lining-nums">
      <Hero />
      <QuickHighlights />
      <ProductShowcase />
      <Features />
      <Gallery />
      <Testimonials />
      
    </div>
  );
}
