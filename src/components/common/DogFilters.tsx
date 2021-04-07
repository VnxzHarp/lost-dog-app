//type
type dogFilterType = {
  name: string;
  label: string;
  num: number;
  value?: string | number;
};

export const dogFilters: dogFilterType[] = [
  {
    name: "status",
    label: "Status",
    num: 0,
  },
  { name: "size", label: "Size", num: 1 },
  { name: "color", label: "Color", num: 2 },
  { name: "breed", label: "Breed", num: 3 },
  { name: "location", label: "Location", num: 4 },
];
