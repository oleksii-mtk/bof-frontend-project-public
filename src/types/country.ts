export interface Country {
  name: { official: string };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  capital: string[];
  flags: string[];
}

export interface CountryT {
  name: { official: string };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  capital: string[];
  flags: {
    png: string;
    svg: string;
  };
}

export type stateCountries = {
  countries: Country[];
  filtered: Country[];
  loading: boolean;
  singleCountry: CountryT[];
  sortName: "asc" | "desc";
};

export type stateFavorites = {
  countries: Country[];
};
