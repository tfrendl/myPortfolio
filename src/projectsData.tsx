export interface Project {
  id: number;
  title: string;
  summary: string;
  description: string;
  image: string;
  link: string;
  icons: string[];
  stack: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Paws & Found - Website",
    summary:
      "Designed to help connect pets at animal shelters to loving homes.",
    description:
      "A user-friendly platform dedicated to connecting individuals with adoptable cats and dogs from animal shelters. The website offers comprehensive listings of various cat and dog breeds, allowing users to explore and find their ideal companion. By providing detailed information and search functionalities, Paws & Found facilitates the adoption process, helping animals find their forever homes",
    image: "/myPortfolio/images/WebsitePhoto.png",
    link: "https://www.pawsandfound.org/",
    icons: ["fab fa-node-js", "fab fa-js", "fab fa-bootstrap"],
    stack: [
      "Node.js",
      "Express.js",
      "MySQL",
      "JavaScript",
      "API Integration",
      "Bootstrap",
      "GitHub",
    ],
  },
  {
    id: 2,
    title: "triplify - Website",
    summary: "A travel website for booking flights, hotels, and car rentals.",
    description:
      "A travel website that allows users to book flights, hotels, and car rentals. Users can also explore popular destinations and read travel guides.",
    image: "/myPortfolio/images/travelWebsite.png",
    link: "",
    icons: [""],
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "EJS",
      "Client-Side JavaScript",
      "Node.js",
      "Express.js",
      "OpenAI API",
      "Google Maps APIs",
      "MySQL",
      "Bcrypt",
      "GitHub",
    ],
  },
  {
    id: 3,
    title: "TrailBlitz - Phone App",
    summary: "A hiking and camping gear app for outdoor enthusiasts.",
    description:
      "Effortlessly manage and shop for hiking and camping gear. Admins handle inventory, pricing, and users, while customers enjoy easy sign-up, cart checkout, order history, and account updates.",
    image: "/myPortfolio/images/trailBlitz.png",
    link: "",
    icons: [""],
    stack: [
      "Android SDK",
      "Java",
      "Android Jetpack Libraries",
      "Gradle",
      "Room (SQLite)",
      "Android Studio",
    ],
  },
];

export default projectsData;
