export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  description: string;
  publishedYear: number;
  genre: string;
  pages: number;
}

export const books: Book[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverUrl: "https://picsum.photos/seed/gatsby/400/600",
    description: "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
    publishedYear: 1925,
    genre: "Classic Fiction",
    pages: 218,
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    coverUrl: "https://picsum.photos/seed/mockingbird/400/600",
    description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.",
    publishedYear: 1960,
    genre: "Southern Gothic",
    pages: 281,
  },
  {
    id: "3",
    title: "1984",
    author: "George Orwell",
    coverUrl: "https://picsum.photos/seed/1984/400/600",
    description: "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real.",
    publishedYear: 1949,
    genre: "Dystopian",
    pages: 328,
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    coverUrl: "https://picsum.photos/seed/pride/400/600",
    description: "Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language.",
    publishedYear: 1813,
    genre: "Romance",
    pages: 279,
  },
  {
    id: "5",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    coverUrl: "https://picsum.photos/seed/catcher/400/600",
    description: "The hero-narrator of The Catcher in the Rye is an ancient child of sixteen, a native New Yorker named Holden Caulfield.",
    publishedYear: 1951,
    genre: "Coming-of-age",
    pages: 277,
  },
  {
    id: "6",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    coverUrl: "https://picsum.photos/seed/hobbit/400/600",
    description: "A great modern classic and the prelude to The Lord of the Rings.",
    publishedYear: 1937,
    genre: "Fantasy",
    pages: 310,
  },
  {
    id: "7",
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    coverUrl: "https://picsum.photos/seed/fahrenheit/400/600",
    description: "Guy Montag is a fireman. His job is to destroy the most illegal of commodities, the printed book, along with the houses in which they are hidden.",
    publishedYear: 1953,
    genre: "Dystopian",
    pages: 194,
  },
  {
    id: "8",
    title: "Moby-Dick",
    author: "Herman Melville",
    coverUrl: "https://picsum.photos/seed/moby/400/600",
    description: "First published in 1851, Melville's masterpiece is, in Elizabeth Hardwick's words, 'the greatest novel in American literature.'",
    publishedYear: 1851,
    genre: "Adventure",
    pages: 635,
  }
];
