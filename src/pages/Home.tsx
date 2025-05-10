import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaWhatsapp, FaMapMarkerAlt, FaClock, FaMotorcycle, FaStar } from 'react-icons/fa';
import { MdRestaurantMenu, MdDeliveryDining, MdFavorite } from 'react-icons/md';
import { menuItems } from '../data/menuData';
import { testimonials } from '../data/testimonialsData';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Home = () => {
  const featuredMenu = menuItems.filter(item => item.isBestseller || item.isFavorite).slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => 
        prevIndex === featuredTestimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredTestimonials.length]);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Modernized with parallax effect and gradient overlay */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-fixed"
          style={{ 
            backgroundImage: "url('src/assets/nasi-uduk-komplit.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-8 relative z-20 py-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto md:mx-0"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Masakan Rumahan <br /> 
              <span className="text-yellow-400">Rasa Sayang Ibu</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Nikmati masakan tradisional Indonesia dengan cita rasa autentik yang mengingatkan pada kasih sayang ibu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/menu"
                className="btn bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105"
              >
                <MdRestaurantMenu className="mr-2" size={20} /> Lihat Menu
              </Link>
              <a
                href="https://wa.me/628123456789?text=Halo%20Bu%20Nani%2C%20saya%20mau%20pesan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105"
              >
                <FaWhatsapp className="mr-2" size={20} /> Pesan Sekarang
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-10"></div>
      </section>

      {/* Highlight Features - New Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:bg-yellow-50"
            >
              <div className="bg-yellow-100 p-4 rounded-full mb-5">
                <MdFavorite className="text-red-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Resep Autentik</h3>
              <p className="text-gray-600">Masakan rumahan dengan resep turun-temurun dan bahan-bahan premium pilihan</p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:bg-yellow-50"
            >
              <div className="bg-yellow-100 p-4 rounded-full mb-5">
                <MdDeliveryDining className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Pengantaran Cepat</h3>
              <p className="text-gray-600">Gratis ongkir untuk area Cibubur dengan waktu pengantaran kurang dari 30 menit</p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:bg-yellow-50"
            >
              <div className="bg-yellow-100 p-4 rounded-full mb-5">
                <FaStar className="text-yellow-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Pelanggan Puas</h3>
              <p className="text-gray-600">Ribuan pelanggan setia dengan rating bintang 5 untuk rasa dan pelayanan kami</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section - With improved cards and hover effects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Menu Favorit Pilihan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cicipi menu favorit pelanggan kami yang dibuat dengan penuh cinta dan dedikasi untuk kepuasan Anda
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMenu.map((item, index) => (
              <motion.div 
                key={item.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-yellow-500 text-black font-bold px-4 py-1 rounded-bl-lg">
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price)}
                  </div>
                  {item.isBestseller && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white font-bold px-3 py-1 rounded-full text-sm flex items-center">
                      <FaStar className="mr-1" /> Bestseller
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Link
                    to={`/menu/${item.id}`}
                    className="inline-flex items-center font-medium text-yellow-600 hover:text-yellow-500"
                  >
                    Lihat Detail <span className="ml-1">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-12 text-center"
          >
            <Link
              to="/menu"
              className="btn bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center transition-all duration-300"
            >
              <FaUtensils className="mr-2" /> Lihat Menu Lengkap
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Redesigned with slider */}
      <section className="py-20 bg-yellow-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Apa Kata Pelanggan Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pengalaman autentik dari pelanggan setia Bu Nani yang telah merasakan kenikmatan masakan rumahan kami
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Testimonial slider */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
              >
                {featuredTestimonials.map(testimonial => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            className="w-16 h-16 rounded-full object-cover border-4 border-yellow-200"
                          />
                          <div className="ml-4">
                            <h4 className="font-bold text-lg">{testimonial.name}</h4>
                            <p className="text-gray-500 text-sm">{testimonial.date}</p>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <FaStar 
                              key={i} 
                              className={i < testimonial.rating ? "text-yellow-500" : "text-gray-300"} 
                              size={18} 
                            />
                          ))}
                        </div>
                      </div>
                      <blockquote className="italic text-lg text-gray-700">"{testimonial.content}"</blockquote>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {featuredTestimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonialIndex ? 'bg-yellow-500 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-12 text-center"
          >
            <Link
              to="/testimonials"
              className="text-yellow-600 hover:text-yellow-700 font-semibold inline-flex items-center"
            >
              Lihat Semua Testimoni <span className="ml-1">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How to Order Section - With modern design and icons */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Cara Pesan Mudah</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pesan makanan Bu Nani dengan mudah dalam 3 langkah sederhana
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MdRestaurantMenu size={32} className="text-yellow-500" />,
                title: "Pilih Menu",
                description: "Pilih menu favorit Anda dari berbagai pilihan masakan rumahan yang lezat"
              },
              {
                icon: <FaWhatsapp size={32} className="text-green-500" />,
                title: "Pesan via WhatsApp",
                description: "Hubungi kami melalui WhatsApp dengan format pemesanan yang mudah"
              },
              {
                icon: <FaMotorcycle size={32} className="text-blue-500" />,
                title: "Terima Pesanan",
                description: "Tunggu pesanan Anda diantar atau ambil langsung di lokasi kami"
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-12 text-center"
          >
            <a
              href="https://wa.me/628123456789?text=Halo%20Bu%20Nani%2C%20saya%20mau%20pesan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center transition-all duration-300 transform hover:scale-105"
            >
              <FaWhatsapp className="mr-2" size={20} /> Pesan Sekarang via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Location & Hours Section - Redesigned and modernized */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="md:w-1/2 mb-12 md:mb-0 md:pr-12"
            >
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Kunjungi Kami</h2>
                <p className="text-gray-300 mb-8">
                  Nikmati pengalaman makan langsung di tempat kami atau pesan untuk diantar ke lokasi Anda
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
                  <div className="flex items-start mb-4">
                    <FaMapMarkerAlt className="text-yellow-500 mt-1 mr-3" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1 text-white">Alamat</h4>
                      <p className="text-gray-300">Jl. Cibubur Raya No. 123, Jakarta Timur</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
                  <div className="flex items-start">
                    <FaWhatsapp className="text-green-500 mt-1 mr-3" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1 text-white">Hubungi Kami</h4>
                      <p className="text-gray-300">+62 812-3456-789</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 rounded-xl mb-6">
                <div className="flex items-start">
                  <FaClock className="text-black mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-semibold mb-2 text-black">Jam Operasional</h4>
                    <p className="text-black mb-1">
                      <span className="font-medium">Senin–Sabtu:</span> 08.00–13.00 WIB
                    </p>
                    <p className="text-black mb-0">
                      <span className="font-medium">Minggu:</span> Tutup
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-600 p-4 rounded-xl text-center">
                <p className="font-medium text-white flex items-center justify-center">
                  <FaMotorcycle className="mr-2" /> Gratis ongkir sekitar Cibubur & sekitarnya
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:w-1/2 h-96 rounded-xl overflow-hidden"
            >
              {/* Google Map placeholder - would be replaced with actual map */}
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 mb-4 mx-auto text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                  </svg>
                  <span className="text-gray-400">Google Maps akan ditampilkan di sini</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call To Action - New section */}
      <section className="py-12 bg-yellow-500">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-6 md:mb-0"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-black">Ingin mencicipi masakan Bu Nani hari ini?</h2>
              <p className="text-black/80">Pesan sekarang dan dapatkan pengalaman masakan rumahan terbaik!</p>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <a
                href="https://wa.me/628123456789?text=Halo%20Bu%20Nani%2C%20saya%20mau%20pesan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center justify-center transition-all duration-300"
              >
                <FaWhatsapp className="mr-2" size={20} /> Pesan Sekarang
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;