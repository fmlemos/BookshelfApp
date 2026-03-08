import { Link } from "react-router-dom";
import { Book } from "../data";
import { motion } from "motion/react";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col"
    >
      <Link to={`/book/${book.id}`} className="flex-1 flex flex-col">
        <div className="aspect-[2/3] w-full overflow-hidden bg-stone-100">
          <img
            src={book.coverUrl}
            alt={`Cover of ${book.title}`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-sans font-semibold text-lg text-stone-900 line-clamp-1 mb-1">
            {book.title}
          </h3>
          <p className="font-sans text-sm text-stone-500 mb-3">
            {book.author}
          </p>
          <div className="mt-auto flex items-center justify-between">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-800">
              {book.genre}
            </span>
            <span className="font-mono text-xs text-stone-400">
              {book.publishedYear}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
