export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isBestseller?: boolean;
  isSpicy?: boolean;
  isFavorite?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Nasi Uduk Komplit",
    description: "Nasi uduk dengan ayam goreng, tempe orek, telur dadar, dan sambal",
    price: 25000,
    image: "../src/assets/nasi-uduk-komplit.jpg", // Placeholder, ganti dengan gambar asli
    isBestseller: true,
    isFavorite: true
  },
  {
    id: 2,
    name: "Ayam Goreng Rempah",
    description: "Ayam kampung goreng dengan bumbu rempah khas Bu Nani",
    price: 18000,
    image: "../src/assets/ayam-goreng-rempah.jpg", // Placeholder, ganti dengan gambar asli
    isBestseller: true
  },
  {
    id: 3,
    name: "Rendang Sapi",
    description: "Rendang sapi empuk dengan bumbu kaya rempah",
    price: 30000,
    image: "../src/assets/rendang-sapi.jpg", // Placeholder, ganti dengan gambar asli
    isFavorite: true
  },
  {
    id: 4,
    name: "Sayur Asem",
    description: "Sayur asem segar dengan bahan-bahan pilihan",
    price: 10000,
    image: "../src/assets/sayur-asem.jpg" // Placeholder, ganti dengan gambar asli
  },
  {
    id: 5,
    name: "Nasi Bakar Teri",
    description: "Nasi bakar dengan ikan teri dan petai",
    price: 15000,
    image: "../src/assets/nasi-bakar-teri.jpg", // Placeholder, ganti dengan gambar asli
    isSpicy: true
  },
  {
    id: 6,
    name: "Pepes Tahu Jamur",
    description: "Pepes tahu dengan jamur dan bumbu lengkap",
    price: 12000,
    image: "../src/assets/pepes-tahu-jamur.jpg" // Placeholder, ganti dengan gambar asli
  }
];