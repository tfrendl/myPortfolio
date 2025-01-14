export interface Trip {
  id: number;
  title: string;
  image: string;
}

const tripsData: Trip[] = [
  {
    id: 1,
    title: "Amalfi Coast, Italy",
    image: "/images/amalfi.jpeg",
  },
  {
    id: 2,
    title: "Austria",
    image: "/images/austria1.jpeg",
  },
  {
    id: 3,
    title: "Austria",
    image: "/images/austria3.jpeg",
  },
  {
    id: 4,
    title: "Austria",
    image: "/images/austria4.jpeg",
  },
  {
    id: 5,
    title: "Austria",
    image: "/images/austriaflower.jpeg",
  },
  {
    id: 6,
    title: "Austria",
    image: "/images/chicken.jpeg",
  },
  {
    id: 7,
    title: "Natural Hot Springs, Japan",
    image: "/images/japan.jpeg",
  },
  {
    id: 8,
    title: "London, England",
    image: "/images/pigeon.jpeg",
  },
  {
    id: 9,
    title: "Rome, Italy",
    image: "/images/rome.jpeg",
  },
];

export default tripsData;
