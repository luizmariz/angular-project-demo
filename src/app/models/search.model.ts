export interface SearchSuggestion {
  match: RegExpMatchArray;
  suggestion: string;
}

export interface SearchData {
  imgUrl: string;
  title: string;
  description: string;
}
