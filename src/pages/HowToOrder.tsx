import { FaWhatsapp, FaMotorcycle, FaPeopleCarry, FaMoneyBillWave } from 'react-icons/fa';
import SectionHeading from '../components/ui/SectionHeading';

const HowToOrder = () => {
  return (
    <div className="bg-secondary min-h-screen">
      <div className="bg-primary text-white py-16">
        <div className="container-custom">
          <SectionHeading 
            title="Cara Order" 
            subtitle="Panduan lengkap cara memesan masakan Bu Nani"
            centered
          />
        </div>
      </div>
      
      <div className="container-custom py-16">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Step by step guide */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8 p-8">
            <h3 className="text-2xl font-bold mb-6 text-primary">Langkah-langkah Pemesanan</h3>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start">
                <div className="mr-5">
                  <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-semibold">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Lihat Menu Kami</h4>
                  <p className="text-gray-700 mb-3">
                    Pilih menu yang tersedia di website kami. Anda bisa melihat menu lengkap di halaman Menu kami.
                  </p>
                  <a 
                    href="/menu" 
                    className="text-accent font-medium hover:underline"
                  >
                    Lihat Menu
                  </a>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start">
                <div className="mr-5">
                  <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-semibold">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Hubungi Kami via WhatsApp</h4>
                  <p className="text-gray-700 mb-3">
                    Kirim pesan WhatsApp untuk memesan makanan. Sebutkan menu yang ingin dipesan, jumlah porsi, dan alamat pengiriman (jika perlu diantar).
                  </p>
                  <a 
                    href="https://wa.me/628123456789?text=Halo%20Bu%20Nani%2C%20saya%20mau%20pesan%20Nasi%20Uduk%20%2B%20Ayam%20Goreng%201%20porsi%20ya%20%F0%9F%99%8F" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 font-medium hover:underline"
                  >
                    <FaWhatsapp className="mr-2" />
                    Chat WhatsApp
                  </a>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex items-start">
                <div className="mr-5">
                  <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-semibold">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Konfirmasi Pesanan</h4>
                  <p className="text-gray-700">
                    Kami akan mengkonfirmasi pesanan Anda, memberitahu total harga, dan estimasi waktu pengiriman atau pengambilan.
                  </p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex items-start">
                <div className="mr-5">
                  <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-semibold">
                    4
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Terima Pesanan & Lakukan Pembayaran</h4>
                  <p className="text-gray-700">
                    Terima pesanan Anda dan lakukan pembayaran secara tunai saat pengiriman atau pengambilan. Kami juga menerima transfer bank.
                  </p>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="flex items-start">
                <div className="mr-5">
                  <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-semibold">
                    5
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Nikmati Makanan Bu Nani!</h4>
                  <p className="text-gray-700">
                    Nikmati masakan rumahan yang lezat dari Bu Nani. Jangan lupa berbagi pengalaman Anda dengan kami ya!
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Order Methods */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8 p-8">
            <h3 className="text-2xl font-bold mb-6 text-primary">Metode Pengambilan</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="bg-primary rounded-lg p-4 text-white mr-5">
                  <FaMotorcycle size={26} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Pengantaran</h4>
                  <p className="text-gray-700 text-sm">
                    Gratis ongkir untuk daerah Cibubur dan sekitarnya. Untuk daerah lain, ongkir menyesuaikan jarak.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary rounded-lg p-4 text-white mr-5">
                  <FaPeopleCarry size={26} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Ambil Sendiri</h4>
                  <p className="text-gray-700 text-sm">
                    Anda juga bisa mengambil pesanan langsung di lokasi kami di Jl. Cibubur Raya No. 123.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Payment */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8 p-8">
            <h3 className="text-2xl font-bold mb-6 text-primary">Metode Pembayaran</h3>
            
            <div className="flex items-start mb-6">
              <div className="bg-green-500 rounded-lg p-4 text-white mr-5">
                <FaMoneyBillWave size={26} />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2">Cash on Delivery</h4>
                <p className="text-gray-700">
                  Bayar tunai saat pesanan diantar ke lokasi Anda atau saat mengambil di toko kami.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-500 rounded-lg p-4 text-white mr-5">
                <FaMoneyBillWave size={26} />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2">Transfer Bank</h4>
                <p className="text-gray-700">
                  Kami juga menerima pembayaran via transfer bank. Detail rekening akan diberikan saat konfirmasi pesanan.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-10 text-center">
            <p className="text-lg mb-5">Siap untuk memesan? Hubungi kami sekarang!</p>
            <a
              href="https://wa.me/628123456789?text=Halo%20Bu%20Nani%2C%20saya%20mau%20pesan%20makanan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-green-600 hover:bg-green-700 text-white inline-flex items-center"
            >
              <FaWhatsapp className="mr-2" size={20} /> Pesan via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToOrder;
