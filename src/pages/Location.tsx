import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaClock, 
  FaPhone, 
  FaMotorcycle, 
  FaWhatsapp,
  FaDirections
} from 'react-icons/fa';
import SectionHeading from '../components/ui/SectionHeading';

const Location = () => {
  const [activeDeliveryArea, setActiveDeliveryArea] = useState<'free' | 'paid'>('free');

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
              title="Lokasi & Kontak" 
              subtitle="Temukan kami dan nikmati kelezatan masakan rumahan"
              centered
            />
          </motion.div>
        </div>
      </div>

      {/* Location & Contact Section */}
      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Map Placeholder */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-gradient-to-br from-accent/80 to-accent p-4 flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <h3 className="font-bold">Lokasi Kami</h3>
            </div>
            <div className="h-96 bg-gray-700 flex items-center justify-center">
              <div className="text-center">
                <FaDirections className="mx-auto text-4xl text-gray-400 mb-4" />
                <p className="text-gray-300">Placeholder untuk Google Maps</p>
              </div>
            </div>
            <div className="p-6 bg-gray-800">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-accent" />
                <p className="text-gray-300">
                  Jl. Cibubur Raya No. 123, Jakarta Timur, DKI Jakarta 13720
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg"
            >
              <div className="bg-gradient-to-br from-accent/80 to-accent p-4 flex items-center">
                <FaClock className="mr-2" />
                <h3 className="font-bold">Jam Operasional</h3>
              </div>
              <div className="p-6">
                <motion.div variants={itemVariants} className="flex justify-between mb-2">
                  <span>Senin - Jumat</span>
                  <span className="text-gray-300">08.00 - 20.00 WIB</span>
                </motion.div>
                <motion.div variants={itemVariants} className="flex justify-between mb-2">
                  <span>Sabtu</span>
                  <span className="text-gray-300">08.00 - 15.00 WIB</span>
                </motion.div>
                <motion.div variants={itemVariants} className="flex justify-between">
                  <span>Minggu</span>
                  <span className="text-red-400">Tutup</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg"
            >
              <div className="bg-gradient-to-br from-accent/80 to-accent p-4 flex items-center">
                <FaPhone className="mr-2" />
                <h3 className="font-bold">Kontak Kami</h3>
              </div>
              <div className="p-6 space-y-4">
                <motion.div variants={itemVariants} className="flex items-center">
                  <FaPhone className="mr-3 text-accent" />
                  <div>
                    <span className="block text-gray-300">Telepon</span>
                    <span>+62 812-3456-789</span>
                  </div>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center">
                  <FaWhatsapp className="mr-3 text-green-500" />
                  <div>
                    <span className="block text-gray-300">WhatsApp</span>
                    <span>+62 812-3456-789</span>
                  </div>
                </motion.div>
                <motion.a
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/628123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full flex items-center justify-center"
                >
                  <FaWhatsapp className="mr-2" /> Hubungi Kami
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Delivery Areas Section */}
      <div className="container mx-auto px-4 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Area Pengantaran</h2>
          
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800 rounded-full p-1 flex">
              <button 
                onClick={() => setActiveDeliveryArea('free')}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeDeliveryArea === 'free' 
                    ? 'bg-accent text-white' 
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                Gratis Ongkir
              </button>
              <button 
                onClick={() => setActiveDeliveryArea('paid')}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeDeliveryArea === 'paid' 
                    ? 'bg-accent text-white' 
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                Berbayar
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center mb-4">
                  <FaMotorcycle className="text-2xl text-accent mr-3" />
                  <h3 className="text-xl font-semibold">
                    {activeDeliveryArea === 'free' 
                      ? 'Area Gratis Ongkir' 
                      : 'Area Berbayar'}
                  </h3>
                </div>
                <ul className="space-y-2 pl-8 list-disc text-gray-300">
                  {activeDeliveryArea === 'free' ? (
                    <>
                      <li>Cibubur</li>
                      <li>Ciracas</li>
                      <li>Cipayung</li>
                      <li>Taman Mini</li>
                      <li>Cililitan</li>
                    </>
                  ) : (
                    <>
                      <li>Cijantung</li>
                      <li>Kampung Rambutan</li>
                      <li>Pasar Rebo</li>
                      <li>Condet</li>
                      <li>Kramat Jati</li>
                    </>
                  )}
                </ul>
                <p className="mt-4 text-sm italic text-gray-500">
                  {activeDeliveryArea === 'free' 
                    ? '* Minimal pembelian Rp 50.000' 
                    : '* Biaya Rp 5.000 - 10.000'}
                </p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-xl">
                <h4 className="font-bold mb-3 text-accent">Informasi Pengantaran</h4>
                <p className="text-gray-300 text-sm">
                  {activeDeliveryArea === 'free'
                    ? 'Gratis ongkir untuk area terdekat dengan minimal pembelian Rp 50.000.'
                    : 'Untuk area yang lebih jauh, ongkos kirim disesuaikan dengan jarak dan volume pesanan.'}
                </p>
                <div className="mt-4 flex items-center text-yellow-400">
                  <FaMotorcycle className="mr-2" />
                  <span className="text-sm">Estimasi waktu: 15-45 menit</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 mt-16 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Pertanyaan Umum</h2>
          
          <div className="space-y-4">
            <FAQ 
              question="Apakah bisa makan di tempat?"
              answer="Ya, kami menyediakan beberapa meja untuk pelanggan yang ingin menikmati hidangan langsung di warung. Namun, tempat terbatas dan tidak cocok untuk rombongan besar."
            />
            <FAQ 
              question="Berapa lama waktu pengantaran?"
              answer="Waktu pengantaran bervariasi tergantung area. Untuk area terdekat sekitar 15-30 menit, sedangkan area lebih jauh bisa mencapai 30-45 menit."
            />
            <FAQ 
              question="Apakah tersedia layanan katering?"
              answer="Kami menerima pesanan katering untuk berbagai acara. Silakan hubungi kami minimal 3 hari sebelumnya untuk pemesanan dan detail lebih lanjut."
            />
            <FAQ 
              question="Metode pembayaran apa saja yang diterima?"
              answer="Kami menerima berbagai metode pembayaran: tunai, transfer bank (BCA, Mandiri, BNI), QRIS, dan e-wallet populer seperti GoPay, OVO, dan Dana."
            />
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-accent/80 to-accent rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Masih Ada Pertanyaan?</h2>
          <p className="text-lg mb-8 max-w-lg mx-auto">
            Jangan ragu untuk menghubungi kami. Kami siap membantu Anda dengan senang hati!
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/628123456789?text=Halo%20Bu%20Nani%2C%20saya%20mau%20bertanya..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-all"
          >
            <FaWhatsapp className="mr-2" size={22} /> Hubungi Kami
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

// FAQ Component
const FAQ = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 text-left flex justify-between items-center"
      >
        <h3 className="font-medium text-lg">{question}</h3>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-5 w-5 text-accent transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="p-5 pt-0 border-t border-gray-700">
          <p className="text-gray-300">{answer}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Location;