import { useState } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import SectionHeading from '../components/ui/SectionHeading';
import TestimonialCard from '../components/ui/TestimonialsCard';
import { testimonials } from '../data/testimonialsData';

const Testimonials = () => {
  const [sortBy, setSortBy] = useState('newest');

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  // Sort testimonials based on the selected sorting option
  const sortedTestimonials = [...testimonials].sort((a, b) => {
    if (sortBy === 'newest') {
      // For simplicity, using the date string directly. In real-world app, convert to Date first
      return a.date > b.date ? -1 : 1;
    } else if (sortBy === 'highest') {
      return b.rating - a.rating;
    } else {
      // Default sorting
      return 0;
    }
  });

  return (
    <div className="bg-secondary min-h-screen">
      <div className="bg-primary text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FaQuoteLeft size={40} className="text-secondary mx-auto mb-6" />
            <SectionHeading 
              title="Testimoni Pelanggan" 
              subtitle="Apa yang pelanggan kami katakan tentang masakan Bu Nani"
              centered
            />
            <p className="mt-6">
              Kami selalu berusaha menyajikan makanan terbaik dengan rasa autentik seperti masakan rumahan. 
              Kepuasan Anda adalah prioritas kami.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container-custom py-12">
        {/* Sort options */}
        <div className="flex justify-end mb-6">
          <div className="w-full md:w-48">
            <select
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="newest">Terbaru</option>
              <option value="highest">Rating Tertinggi</option>
            </select>
          </div>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedTestimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        {/* Overall Rating */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-primary text-center">Rating Keseluruhan</h3>
          
          <div className="flex justify-center items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500 w-8 h-8" />
            ))}
          </div>
          
          <p className="text-center text-3xl font-bold text-accent mb-2">
            {(testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1)}/5
          </p>
          <p className="text-center text-gray-600">
            Berdasarkan {testimonials.length} ulasan pelanggan
          </p>
        </div>
        
        {/* Submit Testimonial CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-lg">Sudah mencoba masakan Bu Nani? Bagikan pengalaman Anda!</p>
          <a
            href="https://wa.me/628123456789?text=Halo%20Bu%20Nani%2C%20saya%20ingin%20memberikan%20testimonial%20untuk%20masakan%20Anda"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Kirim Testimoni Anda
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;