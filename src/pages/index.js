import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
      <h1 className="text-4xl font-bold mb-6">Garena Shop</h1>
      <p className="mb-6">Хуш омадед ба мағозаи расмӣ 🚀</p>
      <Link href="/checkout">
        <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl shadow-lg hover:scale-105 transition">
          Оғози Checkout
        </button>
      </Link>
    </div>
  );
}
