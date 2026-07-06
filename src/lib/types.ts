export type MagazinePage = {
  number: number;
  slug: string;
  title?: string;
  alt: string;
  thumbnail: string;
  full: string;
};

export type Issue = {
  slug: string;
  number: string;
  title: string;
  subtitle?: string;
  publicationDate: string;
  editor: string;
  coverImage: string;
  introShort: string;
  introLong: string;
  quote?: string;
  pageCount: number;
  pages: MagazinePage[];
};
