export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Paws & Found - Website",
    description:
      "A user-friendly platform dedicated to connecting individuals with adoptable cats and dogs from animal shelters. The website offers comprehensive listings of various cat and dog breeds, allowing users to explore and find their ideal companion. By providing detailed information and search functionalities, Paws & Found facilitates the adoption process, helping animals find their forever homes",
    image: "/images/WebsitePhoto.png",
    link: "https://www.pawsandfound.org/",
  },
  {
    id: 2,
    title: "TrailBlitz - Phone App",
    description:
      "Effortlessly manage and shop for hiking and camping gear. Admins handle inventory, pricing, and users, while customers enjoy easy sign-up, cart checkout, order history, and account updates.",
    image: "/images/trailBlitz.png",
    link: "",
  },
  {
    id: 3,
    title: "triplify - Website",
    description:
      "A travel website that allows users to book flights, hotels, and car rentals. Users can also explore popular destinations and read travel guides.",
    image: "/images/travelWebsite.png",
    link: "",
  },
];

export default projectsData;
