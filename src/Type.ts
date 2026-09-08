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
      [code: string]: {
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
      [code: string]: string;
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
};

