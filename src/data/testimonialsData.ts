export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  content: string;
  rating: number;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Budi Santoso",
    avatar: "src/assets/pevita.jpeg", // Placeholder, ganti dengan gambar asli
    content: "Rasa masakan Bu Nani selalu ngingetin masakan Ibu saya di kampung 😭 Tiap kali makan nasi uduknya, serasa pulang kampung!",
    rating: 5,
    date: "3 Mei 2025"
  },
  {
    id: 2,
    name: "Dewi Lestari",
    avatar: "/api/placeholder/60/60", // Placeholder, ganti dengan gambar asli
    content: "Langganan tiap hari ke kantor, pengantaran cepat & makanan selalu hangat! Harga bersahabat untuk kualitas yang luar biasa.",
    rating: 5,
    date: "28 April 2025"
  },
  {
    id: 3,
    name: "Ahmad Fadli",
    avatar: "/api/placeholder/60/60", // Placeholder, ganti dengan gambar asli
    content: "Ayam goreng Bu Nani juara satu di Cibubur! Bumbunya meresap sampai ke tulang. Wajib coba juga sambalnya yang mantap.",
    rating: 5,
    date: "15 April 2025"
  },
  {
    id: 4,
    name: "Siti Nurhaliza",
    avatar: "/api/placeholder/60/60", // Placeholder, ganti dengan gambar asli
    content: "Menu-menu Bu Nani selalu bikin kangen. Sayur asemnya seger banget, jadi pengen makan terus tiap hari!",
    rating: 4,
    date: "5 April 2025"
  }
];