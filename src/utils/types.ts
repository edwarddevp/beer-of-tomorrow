export interface RequestType<T> {
  isLoading: boolean;
  data: T;
  errors: Array<{ message: string }>;
}

export interface RequestListType<T> {
  isLoading: boolean;
  data: T;
  errors: Array<{ message: string }>;
  filter: string;
  options: {
    page: number;
    per_page: number;
  };
  noMoreItems: boolean;
}

export interface Data {
  value: string;
  label: string;
}
export interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: {
    value: number;
    unit: string;
  };
  boil_volume: {
    value: number;
    unit: string;
  };
  method: {
    mash_temp: {
      temp: {
        value: number;
        unit: string;
      };
      duration: number | null;
    }[];
    fermentation: {
      temp: {
        value: number;
        unit: string;
      };
    };
    twist: null;
  };
  ingredients: {
    malt: {
      name: string;
      amount: {
        value: number;
        unit: string;
      };
    }[];
    hops: {
      name: string;
      amount: {
        value: number;
        unit: string;
      };
      add: string;
      attribute: string;
    }[];
    yeast: string;
  };
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}

export interface AnyObject {
  [prop: string]: any;
}
