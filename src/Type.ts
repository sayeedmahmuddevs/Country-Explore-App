export interface Type {
    
  name: {
    common: string;
    official: string;
  };

  ccn3: {
    ccn3: string;
  };

  currencies: {
    currencies: {
      BDT: {
        name: string;
        symbol: string;
      };
    };
  };

  capital: {
    capital: string[];
  };

  region: {
    region: string;
  };

  languages: {
    languages: {
      ben: string;
    };
  };

  area: {
    area: number;
  };

  cca3: {
    cca3: string;
  };

  population: {
    population: number;
  };

  continents: {
    continents: string[];
  };

  flags: {
    flags: {
      png: string;
      svg: string;
      alt: string;
    };
  };

  cca2: string;

  coatOfArms: {
    png: string;
    svg: string;
  };

  subregion: string;

  borders: string[];

  landlocked: boolean;

  coordinates: {
    lat: number;
    lng: number;
  };

  timezones: string[];

  populationDensity: number;

  demonyms: {
    eng: {
      male: string;
      female: string;
    };
  };

  independent: boolean;

  status: string;

  unMember: boolean;

  idd: {
    root: string;
    suffixes: string[];
  };

  tld: string[];

  map: {
    googleMaps: string;
    openStreetMaps: string;
  };
};

