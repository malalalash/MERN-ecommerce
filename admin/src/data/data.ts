export type ColourType = {
  readonly value: string;
  readonly label: string;
  readonly color: string;
};

export type SizeType = {
  readonly value: string;
  readonly label: string;
};

export const colors: readonly ColourType[] = [
  { value: "blue", label: "Blue", color: "#0052CC" },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630" },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "white", label: "White", color: "#FFFFFF" },
  { value: "gray", label: "Gray", color: "#868E96" },
  { value: "black", label: "Black", color: "#000000" },
];

export const sizes: readonly SizeType[] = [
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
];
