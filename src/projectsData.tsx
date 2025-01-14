export interface Project {
  id: number;
  title: string;
  summary: string;
  description: string;
  image: string;
  logo: string;
  link: string;
  icons: string[];
  stack: string[];
  documentation: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Paws & Found",
    summary:
      "Designed to help connect pets at animal shelters to loving homes.",
    description:
      "A user-friendly platform dedicated to connecting individuals with adoptable cats and dogs from animal shelters. The website offers comprehensive listings of various cat and dog breeds, allowing users to explore and find their ideal companion. By providing detailed information and search functionalities, Paws & Found facilitates the adoption process, helping animals find their forever homes",
    image: "/myPortfolio/images/WebsitePhoto.png",
    logo: "/myPortfolio/images/pawsIcon.png",
    link: "https://www.pawsandfound.org/",
    icons: ["fab fa-node-js", "fab fa-js", "fab fa-github", "fab fa-bootstrap"],
    stack: [
      "Node.js",
      "Express.js",
      "MySQL",
      "JavaScript",
      "API Integration",
      "Bootstrap",
      "GitHub",
    ],
    documentation: "",
  },
  {
    id: 2,
    title: "triplify",
    summary: "A travel website for planning your trip itinerary.",
    description:
      "A travel website that allows users to book flights, hotels, and car rentals. Users can also explore popular destinations and read travel guides.",
    image: "/myPortfolio/images/travelWebsite.png",
    logo: "",
    link: "",
    icons: [
      "fab fa-solid fa-database",
      "fab fa-js",
      "fab fa-github",
      "fab fa-bootstrap",
    ],
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
    documentation: "/myPortfolio/documents/triplify.pdf",
  },
  {
    id: 3,
    title: "TrailBlitz",
    summary: "A hiking and camping gear app for outdoor enthusiasts.",
    description:
      "Effortlessly manage and shop for hiking and camping gear. Admins handle inventory, pricing, and users, while customers enjoy easy sign-up, cart checkout, order history, and account updates.",
    image: "/myPortfolio/images/trailblitz.png",
    logo: "",
    link: "",
    icons: ["fa-brands fa-android", "fa-brands fa-java"],
    stack: [
      "Android SDK",
      "Java",
      "Android Jetpack Libraries",
      "Gradle",
      "Room (SQLite)",
      "Android Studio",
    ],
    documentation: "/myPortfolio/documents/trailblitz.pdf",
  },
  {
    id: 4,
    title: "ShelterConnect",
    summary:
      "An app concept designed to connect people with adoptable pets from local animal shelters.",
    description:
      "ShelterConnect is an app concept designed to connect people with adoptable pets from local animal shelters. Whether you're looking for a specific type of pet (cat, dog, other), searching by breed, or wanting to browse featured pets, ShelterConnect makes it easy to find a pet. Users can save their favorite pets to view later. With a simple and intuitive interface designed for all age groups, ShelterConnect centralizes animals for adoption from a variety of shelters.",
    image: "/myPortfolio/images/shelterConnect.png",
    logo: "",
    link: "",
    icons: [""],
    stack: ["Adobe Illustrator", "Adobe XD"],
    documentation: "/myPortfolio/documents/shelterConnect.pdf",
  },
  {
    id: 5,
    title: "American Technology Initiative",
    summary:
      "Participated in the development of a project management application for the American Technology Initiative.",
    description:
      "Primary responsiblities included designing the Entity Relationship Diagram, creating the database, and developing the front-end and back-end capability to add users to projects, ensuring data integrity.",
    image: "/myPortfolio/images/ATIProject.png",
    logo: "",
    link: "",
    icons: [
      "fa-brands fa-react",
      "fa-brands fa-python",
      "fa-brands fa-database",
      "fa-brands fa-gitlab",
    ],
    stack: ["Django", "PostgreSQL", "Python", "React", "GitLab"],
    documentation: "",
  },
  {
    id: 6,
    title: "My Portfolio",
    summary:
      "The design process of my portfolio website, showcasing my projects.",
    description: `A personal portfolio website that showcases my projects and skills. The website is designed to be user-friendly and visually appealing, providing visitors with an overview of my work and experience. The website features a clean and modern design, with easy navigation and clear information about my projects and background. <a class="link-opacity-10" href="https://xd.adobe.com/view/9cf5d5f4-2934-4e24-b5a3-02898d53f41d-c9a6/?fullscreen">View Prototype</a> `,
    image: "/myPortfolio/images/websiteScreenshot.png",
    logo: "",
    link: "",
    icons: ["fab fa-react", "fab fa-github", "fab fa-bootstrap"],
    stack: [
      "Bootstrap",
      "React",
      "React Router",
      "React-PDF",
      "GitHub",
      "GitHub Pages",
      "Vite",
    ],
    documentation: "/myPortfolio/documents/portfolioWireframe.pdf",
  },
];

export default projectsData;
