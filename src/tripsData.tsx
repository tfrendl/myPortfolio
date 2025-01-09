export interface Trip {
  id: number;
  title: string;
  image: string;
}

const tripsData: Trip[] = [
  {
    id: 1,
    title: "Amalfi Coast, Italy",
    image: "/myPortfolio/images/amalfi.jpeg",
  },
  {
    id: 2,
    title: "Austria",
    image: "/myPortfolio/images/austria1.jpeg",
  },
  {
    id: 3,
    title: "Austria",
    image: "/myPortfolio/images/austria3.jpeg",
  },
  {
    id: 4,
    title: "Austria",
    image: "/myPortfolio/images/austria4.jpeg",
  },
  {
    id: 5,
    title: "Austria",
    image: "/myPortfolio/images/austriaflower.jpeg",
  },
  {
    id: 6,
    title: "Austria",
    image: "/myPortfolio/images/chicken.jpeg",
  },
  {
    id: 7,
    title: "Natural Hot Springs, Japan",
    image: "/myPortfolio/images/japan.jpeg",
  },
  {
    id: 8,
    title: "London, England",
    image: "/myPortfolio/images/pigeon.jpeg",
  },
  {
    id: 9,
    title: "Rome, Italy",
    image: "/myPortfolio/images/rome.jpeg",
  },
];

export default tripsData;
