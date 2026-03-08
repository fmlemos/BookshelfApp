import { books } from "../data";
import BookCard from "../components/BookCard";
import { motion } from "motion/react";
import { Library } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-white border-b border-stone-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center gap-3">
          <div className="p-2 bg-stone-900 rounded-xl text-white">
            <Library size={24} />
          </div>
          <h1 className="text-2xl font-sans font-bold text-stone-900 tracking-tight">
            My Bookshelf
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-sans font-semibold text-stone-900 mb-2">
            Discover your next read
          </h2>
          <p className="text-stone-500 font-sans max-w-2xl">
            Explore our curated collection of classic literature, modern masterpieces, and unforgettable stories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <BookCard book={book} />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
