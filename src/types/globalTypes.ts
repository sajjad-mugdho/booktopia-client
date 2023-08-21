export type IBook = {
  _id: string;
  title: string;
  author: string;
  details: string;
  genre: string;
  pblicationDate?: string;
  image: string;
  userId: string;
  review?: [];
};
