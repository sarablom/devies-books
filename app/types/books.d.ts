type Book = {
  id: string;
  name: string;
  genre: string;
  coverUrl: string;
  description: string;
  averageRating: number;
  haveRead: 0 | 1;
  currentlyReading: 0 | 1;
  wantToRead: 0 | 1;
  userRating: number;
};