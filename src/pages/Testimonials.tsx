import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonialsData';
import SectionHeading from '../components/ui/SectionHeading';

const Testimonials = () => {
  const [sortBy, setSortBy] = useState<'newest' | 'highest'>('newest');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Handle sorting change
  const handleSortChange = (value: 'newest' | 'highest') => {
    setSortBy(value);
  };

  // Helper function to parse Indonesian date format
  const parseIndonesianDate = (dateStr: string): Date => {
    const monthMap: Record<string, number> = {
      'Januari': 0, 'Februari': 1, 'Maret': 2, 'April': 3, 'Mei': 4, 'Juni': 5,
      'Juli': 6, 'Agustus': 7, 'September': 8, 'Oktober': 9, 'November': 10, 'Desember': 11
    };

    const parts = dateStr.split(' ');
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = monthMap[parts[1]] || 0;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
    }
    return new Date(); // Default fallback
  };

  // Sort testimonials based on the selected sorting option
  const sortedTestimonials = [...testimonials].sort((a, b) => {
    if (sortBy === 'newest') {
      return parseIndonesianDate(b.date).getTime() - parseIndonesianDate(a.date).getTime();
    } else {
      return b.rating - a.rating;
    }
  });

  // Calculate average rating
  const averageRating = (testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1);
  const averageRatingNumber = parseFloat(averageRating);

  // Navigation functions for carousel
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === sortedTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? sortedTestimonials.length - 1 : prevIndex - 1
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white pb-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-gray-900/90"></div>
          <img
            src="src/assets/food-bg-menu.jpg"
            alt="Bu Nani Restaurant Location"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="container mx-auto px-4 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <SectionHeading
              title="Testimoni Pelanggan"
              subtitle="Kami selalu berusaha menyajikan makanan terbaik dengan rasa autentik seperti masakan rumahan. Kepuasan Anda adalah prioritas kami."
              centered
            />
          </motion.div>
        </div>
      </div>

      {/* Sorting Controls */}
      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="flex bg-gray-800 rounded-full shadow-md p-1">
            <button
              onClick={() => handleSortChange('newest')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${sortBy === 'newest'
                  ? 'bg-accent text-white'
                  : 'text-gray-300 hover:bg-gray-700'
                }`}
            >
              Terbaru
            </button>
            <button
              onClick={() => handleSortChange('highest')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${sortBy === 'highest'
                  ? 'bg-accent text-white'
                  : 'text-gray-300 hover:bg-gray-700'
                }`}
            >
              Rating Tertinggi
            </button>
          </div>
        </motion.div>

        {/* Mobile Carousel View */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mb-12"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-accent">
                    <img
                      src={sortedTestimonials[activeIndex].avatar}
                      alt={sortedTestimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">
                      {sortedTestimonials[activeIndex].name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {sortedTestimonials[activeIndex].date}
                    </p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < sortedTestimonials[activeIndex].rating ? "text-accent fill-accent" : "text-gray-600"}
                    />
                  ))}
                </div>

                <p className="text-gray-300 italic">
                  "{sortedTestimonials[activeIndex].content}"
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-4 gap-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-gray-800 shadow-md flex items-center justify-center text-white hover:bg-gray-700"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-gray-800 shadow-md flex items-center justify-center text-white hover:bg-gray-700"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="flex justify-center mt-4">
              {sortedTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 mx-1 rounded-full ${idx === activeIndex ? "bg-accent" : "bg-gray-600"
                    }`}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Desktop Grid View */}
        {!isMobile && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {sortedTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-accent">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{testimonial.name}</h3>
                      <p className="text-gray-400 text-sm">{testimonial.date}</p>
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? "text-accent fill-accent" : "text-gray-600"}
                      />
                    ))}
                  </div>

                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Overall Rating Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex flex-col items-center md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-4">Rating Keseluruhan</h3>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-accent mr-2">{averageRating}</span>
                <span className="text-xl text-gray-500">/5</span>
              </div>
              <div className="flex mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.round(averageRatingNumber) ? "text-accent fill-accent" : "text-gray-600"}
                  />
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Berdasarkan {testimonials.length} ulasan
              </p>
            </div>

            <div className="bg-gray-700 h-32 w-px hidden md:block mx-8" />

            <div className="md:w-2/3">
              <div className="space-y-3">
                {[5, 4, 3, 2, 1].map((rating) => {
                  const count = testimonials.filter(t => t.rating === rating).length;
                  const percentage = (count / testimonials.length) * 100;

                  return (
                    <div key={rating} className="flex items-center">
                      <div className="flex items-center w-12">
                        <span className="text-sm text-gray-300 mr-1">{rating}</span>
                        <Star size={12} className="text-accent fill-accent" />
                      </div>

                      <div className="flex-1 h-2 bg-gray-700 rounded-full mx-3">
                        <div
                          className="h-2 bg-accent rounded-full"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>

                      <div className="w-10 text-right text-sm text-gray-400">
                        {count}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-accent/80 to-accent rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Sudah Mencoba Masakan Bu Nani?</h2>
          <p className="text-lg mb-8 max-w-lg mx-auto">Bagikan pengalaman Anda dan bantu kami terus meningkatkan kualitas pelayanan.</p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/628123456789?text=Halo%20Bu%20Nani%2C%20saya%20ingin%20berbagi%20testimoni"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-all"
          >
            <MessageSquare className="mr-2" size={22} /> Kirim Testimoni
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;