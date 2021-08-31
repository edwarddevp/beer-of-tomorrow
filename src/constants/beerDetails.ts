interface BeerDetails {
  label: string;
  value: string;
  render?: JSX.Element | string;
  suffix?: string;
}

export const beerDetails: BeerDetails[] = [
  {
    label: "Company",
    render: "Venta Distribution",
    value: "",
  },
  {
    label: "Attenuation Level",
    value: "attenuation_level",
  },
  {
    label: "abv",
    value: "attenuation_level",
  },
  {
    label: "ibu",
    value: "attenuation_level",
  },
  {
    label: "Volume",
    value: "volume.value",
    suffix: "lt",
  },
  {
    label: "Boil Volume",
    value: "boil_volume.value",
    suffix: "lt",
  },
  {
    label: "ph",
    value: "ph",
  },
  {
    label: "First Brewed ",
    value: "first_brewed",
  },
];
