import { LibraryElementType, Status, ElementType } from '../../../comps/LibraryElement';
import onepiece from '../../../assets/thelibrary/onepiece.jpg';

export const mangas: LibraryElementType[] = [
  {
    title: 'One Piece',
    status: Status.In_Progress,
    image:
      'https://comicvine.gamespot.com/a/uploads/scale_small/11161/111610434/9002817-6125859241-97840.jpg',
    rating: 10,
    type: ElementType.Title,
  },
];
export const books: LibraryElementType[] = [
  {
    title: 'The Name of the Wind',
    status: Status.Not_Started,
    image:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1704917687i/186074.jpg',
    rating: 10,
    type: ElementType.Title,
  },
];
export const anime: LibraryElementType[] = [
  {
    title: 'Naruto',
    status: Status.Done,
    image:
      'https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=480,height=720,quality=85/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpe',
    rating: 10,
    type: ElementType.Title,
  },
];
export const movies: LibraryElementType[] = [
  {
    title: 'The Hateful Eight',
    status: Status.Done,
    image: 'https://upload.wikimedia.org/wikipedia/en/d/d4/The_Hateful_Eight.jpg',
    rating: 10,
    type: ElementType.Title,
  },
];
export const series: LibraryElementType[] = [
  {
    title: 'The Good Place',
    status: Status.Done,
    image: 'https://upload.wikimedia.org/wikipedia/en/8/84/The_Good_Place_season_1.jpg',
    rating: 10,
    type: ElementType.Title,
  },
];
export const music: LibraryElementType[] = [
  {
    title: 'Ravel',
    status: Status.In_Progress,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBsICVTXatRceTwuR22rI6TM2BaH9aVnfa-ZRdKlNo_A&s',
    rating: 10,
    type: ElementType.Title,
  },
];

export const content = { mangas, books, anime, movies, series, music };
