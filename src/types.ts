export type Book = {
  _id: string;
  title: string;
  author: {
    name: string;
    email: string;
  };
  genre: string;
  coverImage: string;
  pdfFile: string;
  createdAt: string;
};
