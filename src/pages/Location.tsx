import { FaMapMarkerAlt, FaClock, FaPhone, FaMotorcycle, FaWhatsapp } from 'react-icons/fa';
import SectionHeading from '../components/ui/SectionHeading';

const Location = () => {
  return (
    <div>
      {/* Banner */}
      <div className="bg-primary text-white py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Lokasi & Jam Operasional</h1>
          <p className="text-lg text-secondary-dark">
            Temukan lokasi warung Bu Nani dan jam operasional kami
          </p>
        </div>
      </div>

      {/* Map Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="bg-secondary p-6 md:p-8 rounded-lg shadow-md mb-12">
            <div className="flex flex-col md:flex-row items-start">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                {/* Google Maps Embed Placeholder */}
                <div className="rounded-lg overflow-hidden shadow-md h-96 bg-gray-200 flex items-center justify-center">
                  {/* Dalam proyek nyata, ganti dengan iframe Google Maps */}
                  <div className="text-center p-4">
                    <FaMapMarkerAlt className="mx-auto text-4xl text-primary mb-3" />
                    <p className="text-gray-600">Google Maps akan ditampilkan di sini</p>
                    <p className="text-sm text-gray-500 mt-2">Jl. Cibubur Raya No. 123, Jakarta Timur</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-4">Informasi Kontak</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="text-accent mr-3 mt-1">
                        <FaMapMarkerAlt />
                      </div>
                      <div>
                        <h4 className="font-semibold">Alamat</h4>
                        <p className="text-gray-600">Jl. Cibubur Raya No. 123, Jakarta Timur, DKI Jakarta 13720</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-accent mr-3 mt-1">
                        <FaClock />
                      </div>
                      <div>
                        <h4 className="font-semibold">Jam Operasional</h4>
                        <p className="text-gray-600">Senin–Sabtu: 08.00–13.00 WIB</p>
                        <p className="text-gray-600">Minggu: Tutup</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-accent mr-3 mt-1">
                        <FaPhone />
                      </div>
                      <div>
                        <h4 className="font-semibold">Telepon</h4>
                        <p className="text-gray-600">+62 812-3456-789</p>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/628123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full flex items-center justify-center mt-4"
                    >
                      <FaWhatsapp className="mr-2" /> Hubungi via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="section bg-secondary">
        <div className="container-custom">
          <SectionHeading 
            title="Area Pengantaran" 
            subtitle="Kami melayani pengantaran ke area-area berikut"
            centered
          />
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                <div className="flex items-center mb-4">
                  <FaMotorcycle className="text-2xl text-accent mr-3" />
                  <h3 className="text-xl font-semibold">Gratis Ongkir</h3>
                </div>
                <ul className="space-y-2 pl-8 list-disc text-gray-700">
                  <li>Cibubur</li>
                  <li>Ciracas</li>
                  <li>Cipayung</li>
                  <li>Taman Mini</li>
                  <li>Cililitan</li>
                </ul>
                <p className="mt-4 text-sm italic text-gray-600">
                  * Minimal pembelian Rp 50.000 untuk area gratis ongkir
                </p>
              </div>
              <div className="md:w-1/2 md:pl-6 md:border-l border-gray-200">
                <div className="flex items-center mb-4">
                  <FaMotorcycle className="text-2xl text-accent mr-3" />
                  <h3 className="text-xl font-semibold">Berbayar Rp 5.000 - 10.000</h3>
                </div>
                <ul className="space-y-2 pl-8 list-disc text-gray-700">
                  <li>Cijantung</li>
                  <li>Kampung Rambutan</li>
                  <li>Pasar Rebo</li>
                  <li>Condet</li>
                  <li>Kramat Jati</li>
                </ul>
                <p className="mt-4 text-sm italic text-gray-600">
                  * Biaya pengantaran tergantung jarak dan volume pesanan
                </p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-start">
                <div className="text-accent mr-3 mt-1 flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <p className="text-gray-600">
                  Untuk area lain di luar yang disebutkan, mohon hubungi kami untuk konfirmasi ketersediaan pengantaran dan biaya tambahan yang mungkin dikenakan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Pertanyaan Umum" 
            subtitle="Informasi tambahan yang mungkin Anda butuhkan"
            centered
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Apakah tersedia makan di tempat?</h3>
              <p className="text-gray-700">
                Ya, kami memiliki beberapa meja untuk pelanggan yang ingin menikmati hidangan langsung di warung. Namun, tempat terbatas dan tidak bisa untuk rombongan besar.
              </p>
            </div>
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Berapa lama waktu pengantaran?</h3>
              <p className="text-gray-700">
                Untuk area Cibubur dan sekitarnya, pengantaran biasanya memakan waktu 15-30 menit tergantung jarak dan kondisi lalu lintas.
              </p>
            </div>
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Bisakah memesan untuk acara/katering?</h3>
              <p className="text-gray-700">
                Ya, kami menerima pesanan untuk acara/katering dengan minimal order tertentu. Silakan hubungi kami minimal 2 hari sebelumnya untuk pemesanan.
              </p>
            </div>
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Metode pembayaran apa yang diterima?</h3>
              <p className="text-gray-700">
                Kami menerima pembayaran tunai, transfer bank, QRIS, dan e-wallet populer seperti GoPay, OVO, dan Dana.
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://wa.me/628123456789?text=Halo%20Bu%20Nani%2C%20saya%20mau%20bertanya..."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-flex items-center"
            >
              <FaWhatsapp className="mr-2" /> Ada Pertanyaan Lain? Hubungi Kami
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;