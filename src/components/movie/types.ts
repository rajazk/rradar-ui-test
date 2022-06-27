export interface movieListProps {
  movieData: Movie[];
  searchData: string;
  order: string;
}

export interface Movie {
  budget: number;
  genres: string;
  homepage: string;
  id: number;
  keywords: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  production_companies: string;
  production_countries: string;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: string;
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
  image?: string;
  like?: boolean;
  dislike?: boolean;
}
