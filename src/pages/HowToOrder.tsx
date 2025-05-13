import { useState, useEffect } from 'react';
import { FaWhatsapp, FaPeopleCarry, FaMoneyBillWave, FaRegCheckCircle, FaPlay } from 'react-icons/fa';
import { MdOutlineMenuBook, MdDeliveryDining, MdPayment, MdRestaurantMenu } from 'react-icons/md';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';

const HowToOrder = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const steps = [
    {
      number: 1,
      title: "Lihat Menu Kami",
      description: "Pilih dari berbagai menu autentik rumahan. Tersedia menu bestseller dan menu spesial harian.",
      icon: <MdOutlineMenuBook size={28} />,
      color: "from-pink-500 to-rose-600",
      link: "/menu",
      linkText: "Lihat Menu"
    },
    {
      number: 2,
      title: "Hubungi Kami via WhatsApp",
      description: "Pesan dengan mudah melalui WhatsApp. Sebutkan menu, jumlah porsi, dan alamat pengiriman Anda.",
      icon: <FaWhatsapp size={28} />,
      color: "from-green-500 to-emerald-600",
      link: "https://wa.me/628123456789?text=Halo%20Bu%20Nani%2C%20saya%20mau%20pesan%20Nasi%20Uduk%20%2B%20Ayam%20Goreng%201%20porsi%20ya%20%F0%9F%99%8F",
      linkText: "Chat WhatsApp",
      isExternal: true
    },
    {
      number: 3,
      title: "Konfirmasi Pesanan",
      description: "Kami akan mengkonfirmasi pesanan, memberitahu harga total, dan estimasi waktu pengiriman.",
      icon: <FaRegCheckCircle size={28} />,
      color: "from-blue-500 to-indigo-600",
      animate: true
    },
    {
      number: 4,
      title: "Pilih Pengiriman & Pembayaran",
      description: "Pilih cara pengiriman (antar atau ambil sendiri) dan metode pembayaran yang nyaman untuk Anda.",
      icon: <MdPayment size={28} />,
      color: "from-violet-500 to-purple-600",
    },
    {
      number: 5,
      title: "Nikmati Masakan Bu Nani",
      description: "Nikmati kelezatan masakan rumahan autentik dari Bu Nani. Jangan lupa berbagi pengalaman Anda!",
      icon: <MdRestaurantMenu size={28} />,
      color: "from-amber-500 to-orange-600"
    }
  ];

  const deliveryMethods = [
    {
      title: "Pengantaran",
      icon: <MdDeliveryDining size={32} />,
      description: "Gratis ongkir untuk daerah Cibubur dan sekitarnya (radius 5km). Untuk daerah lain, ongkir menyesuaikan jarak.",
      color: "bg-gradient-to-br from-indigo-500 to-blue-600",
    },
    {
      title: "Ambil Sendiri",
      icon: <FaPeopleCarry size={28} />,
      description: "Hemat ongkir dengan mengambil pesanan langsung di lokasi kami di Jl. Cibubur Raya No. 123.",
      color: "bg-gradient-to-br from-emerald-500 to-teal-600",
    }
  ];

  const paymentMethods = [
    {
      title: "Cash on Delivery",
      icon: <FaMoneyBillWave size={28} />,
      description: "Bayar tunai saat pesanan diantar ke lokasi Anda atau saat mengambil di toko kami.",
      color: "bg-gradient-to-br from-green-500 to-lime-600",
    },
    {
      title: "Transfer Bank",
      icon: <FaMoneyBillWave size={28} />,
      description: "Kami menerima transfer via BCA, Mandiri, BNI & BRI. Detail rekening akan diberikan saat konfirmasi.",
      color: "bg-gradient-to-br from-blue-500 to-sky-600",
    },
    {
      title: "QRIS",
      icon: <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm4 6h4v-4h2v4h4v2h-4v4h-2v-4H7v-2z" />
            </svg>,
      description: "Scan kode QR untuk pembayaran instan melalui semua aplikasi e-wallet dan mobile banking.",
      color: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
    }
  ];

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white pb-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-gray-900/90"></div>
          <img 
            src="src/assets/food-bg-menu.jpg" 
            alt="Food background" 
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
              title="Cara Pemesanan" 
              subtitle="Ikuti langkah mudah ini untuk menikmati kelezatan masakan Bu Nani"
              centered
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8"
            >
              <button 
                onClick={() => setShowVideo(true)} 
                className="inline-flex items-center bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full transition-all shadow-lg group"
              >
                <span className="mr-3 bg-white text-accent rounded-full p-1 group-hover:scale-110 transition-transform">
                  <FaPlay size={12} />
                </span>
                Tonton Video Cara Order
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Steps Section */}
      <div className="container mx-auto px-4 -mt-6 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute left-[26px] top-[70px] bottom-[70px] w-1 bg-gray-700 rounded-full hidden md:block" />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 md:space-y-0 md:grid md:grid-cols-[auto_1fr] max-w-3xl mx-auto"
          >
            {steps.map((step) => (
              <motion.div 
                key={step.number}
                variants={itemVariants}
                transition={{ duration: 0.4 }}
                className="md:col-span-2 grid md:grid-cols-[auto_1fr] gap-4 md:gap-8"
                onMouseEnter={() => setActiveStep(step.number)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className="relative z-10">
                  <motion.div 
                    animate={activeStep === step.number ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    {step.icon}
                  </motion.div>
                </div>
                
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="text-accent mr-2">#{step.number}</span> 
                    {step.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{step.description}</p>
                  
                  {step.link && (
                    <a 
                      href={step.link} 
                      target={step.isExternal ? "_blank" : undefined}
                      rel={step.isExternal ? "noopener noreferrer" : undefined}
                      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        step.number === 2 
                          ? "bg-green-600 hover:bg-green-700 text-white" 
                          : "bg-accent hover:bg-accent/90 text-white"
                      }`}
                    >
                      {step.number === 2 && <FaWhatsapp className="mr-2" />}
                      {step.linkText}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Delivery Methods */}
      <div className="container mx-auto px-4 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Metode Pengambilan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {deliveryMethods.map((method, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg"
              >
                <div className={`${method.color} p-6 flex justify-between items-center`}>
                  <h3 className="text-xl font-bold">{method.title}</h3>
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                    {method.icon}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Payment Methods */}
      <div className="container mx-auto px-4 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Metode Pembayaran</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg"
              >
                <div className={`${method.color} p-5 text-center`}>
                  <div className="mx-auto p-3 bg-white/20 backdrop-blur-sm rounded-full inline-flex">
                    {method.icon}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 text-center">{method.title}</h3>
                  <p className="text-gray-300 text-sm text-center">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* FAQ - Collapsible */}
      <div className="container mx-auto px-4 mt-20 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Pertanyaan Umum</h2>
          
          <div className="space-y-4">
            <FAQ 
              question="Berapa lama waktu pengiriman pesanan?"
              answer="Waktu pengiriman bergantung pada jarak dan kepadatan lalu lintas. Untuk area Cibubur sekitar 15-30 menit, sedangkan area lain bisa mencapai 30-60 menit. Kami selalu berusaha mengirim secepat mungkin."
            />
            <FAQ 
              question="Apakah ada minimum order untuk delivery gratis?"
              answer="Ya, minimum order untuk mendapatkan gratis ongkir di area Cibubur (radius 5km) adalah Rp 50.000. Untuk pesanan di bawah nominal tersebut dikenakan biaya pengiriman sebesar Rp 10.000."
            />
            <FAQ 
              question="Apakah bisa memesan untuk acara atau katering?"
              answer="Tentu saja! Kami menyediakan layanan catering untuk berbagai acara seperti arisan, rapat, atau acara keluarga. Silakan hubungi kami minimal 3 hari sebelumnya untuk pemesanan catering."
            />
            <FAQ 
              question="Jam berapa saya bisa memesan?"
              answer="Kami melayani pemesanan setiap hari mulai pukul 08.00 - 20.00 WIB. Namun untuk pengiriman, kami melayani mulai pukul 10.00 - 19.00 WIB."
            />
          </div>
        </motion.div>
      </div>
      
      {/* CTA */}
      <div className="container mx-auto px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-accent/80 to-accent rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Siap Menikmati Masakan Bu Nani?</h2>
          <p className="text-lg mb-8 max-w-lg mx-auto">Pesan sekarang dan rasakan kelezatan masakan rumahan autentik yang akan membuat Anda ketagihan!</p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/628123456789?text=Halo%20Bu%20Nani%2C%20saya%20mau%20pesan%20makanan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-all"
          >
            <FaWhatsapp className="mr-2" size={22} /> Pesan via WhatsApp
          </motion.a>
        </motion.div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-800 rounded-xl overflow-hidden max-w-3xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <div className="aspect-video bg-black flex items-center justify-center">
              <p className="text-gray-300">
                Video tutorial cara pemesanan akan ditampilkan di sini.
              </p>
            </div>
            <div className="p-4 flex justify-between items-center">
              <h3 className="font-bold text-lg">Cara Pemesanan Masakan Bu Nani</h3>
              <button 
                onClick={() => setShowVideo(false)}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg"
              >
                Tutup
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
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
          className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
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

export default HowToOrder;