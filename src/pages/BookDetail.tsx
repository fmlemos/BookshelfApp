import { useParams, Link, useNavigate } from "react-router-dom";
import { books } from "../data";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, BookOpen, Tag } from "lucide-react";

export default function BookDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-sans font-bold text-stone-900 mb-4">Book not found</h2>
        <button 
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-white border-b border-stone-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors font-medium text-sm"
          >
            <ArrowLeft size={16} />
            Back to Bookshelf
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            {/* Cover Image Section */}
            <div className="md:col-span-4 lg:col-span-3 bg-stone-100 p-8 flex items-center justify-center">
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                src={book.coverUrl}
                alt={`Cover of ${book.title}`}
                referrerPolicy="no-referrer"
                className="w-full max-w-[240px] rounded-lg shadow-xl"
              />
            </div>

            {/* Details Section */}
            <div className="md:col-span-8 lg:col-span-9 p-8 md:p-12 flex flex-col">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-stone-900 tracking-tight mb-2">
                  {book.title}
                </h1>
                <p className="text-xl text-stone-500 font-sans">
                  by <span className="text-stone-900 font-medium">{book.author}</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-stone-100">
                <div className="flex items-center gap-2 text-stone-600">
                  <Calendar size={18} className="text-stone-400" />
                  <span className="font-mono text-sm">{book.publishedYear}</span>
                </div>
                <div className="flex items-center gap-2 text-stone-600">
                  <Tag size={18} className="text-stone-400" />
                  <span className="font-sans text-sm font-medium">{book.genre}</span>
                </div>
                <div className="flex items-center gap-2 text-stone-600">
                  <BookOpen size={18} className="text-stone-400" />
                  <span className="font-sans text-sm">{book.pages} pages</span>
                </div>
              </div>

              <div className="prose prose-stone max-w-none">
                <h3 className="text-lg font-semibold text-stone-900 mb-3">Synopsis</h3>
                <p className="text-stone-600 leading-relaxed text-lg">
                  {book.description}
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-stone-100 flex gap-4">
                <button className="px-8 py-3 bg-stone-900 text-white rounded-xl font-medium hover:bg-stone-800 transition-colors shadow-sm">
                  Read Now
                </button>
                <button className="px-8 py-3 bg-white text-stone-900 border border-stone-200 rounded-xl font-medium hover:bg-stone-50 transition-colors">
                  Add to List
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
