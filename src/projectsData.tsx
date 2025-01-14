export interface Project {
  id: number;
  title: string;
  summary: string;
  description: string[];
  image: string;
  logo: string;
  link: string;
  linkDescription: string;
  icons: string[];
  stack: string[];
  documentation: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Paws & Found",
    summary:
      "A platform to explore pet breeds, connect with local shelters, and chat with an AI assistant for adoption guidance.",
    description: [
      "Paws & Found is a passion project I have worked on to help people connect with their perfect furry companions while supporting local animal shelters.",
      "The platform allows users to learn about different dog and cat breeds, create an account, and chat with an AI assistant trained to provide valuable pet information and adoption guidance. It is currently set up to view the availability of adoptable pets at shelters in Orange County.",
      "Future enhancements will include the ability to save favorite animals and search for animal shelters by ZIP code, making it even easier for users to find their ideal pets.",
    ],
    image: "/myPortfolio/images/WebsitePhoto.png",
    logo: "/myPortfolio/images/pawsIcon.png",
    link: "https://www.pawsandfound.org/",
    linkDescription: "Visit Website",
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
    summary:
      "A travel planning platform that allows users to create itineraries, manage activities, and explore destinations with secure user authentication.",
    description: [
      "Triplify is a web application designed to simplify travel planning by allowing users to explore destinations, create customized itineraries, and manage daily travel activities. This project was developed in collaboration with three team members to provide users with an intuitive and engaging experience for planning their trips.",
      "The platform enables users to sign up, log in, and securely manage their accounts. User sessions are maintained across pages to ensure a seamless experience. Once logged in, users can add or remove activities from specific travel days, helping them organize their itinerary with ease. The website also provides detailed information on various points of interest, including sites, restaurants, and accommodations, displayed alongside an interactive map for better navigation.",
      "My primary contributions included developing full-stack features and CRUD operations for user authentication (sign-up, log-in, and log-out). I implemented sessions to maintain user state across the website and built functionality for adding and removing activities from travel days. To ensure user data security, I used Bcrypt to hash passwords.",
      "Triplify is a dynamic and user-friendly platform designed to enhance the travel experience and help users make the most of their journeys.",
    ],
    image: "/myPortfolio/images/travelWebsite.png",
    logo: "/myPortfolio/images/triplifyIcon.png",
    link: "",
    linkDescription: "",
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
    title: "Project Manager Application - American Technology Initiative Inc.",
    summary:
      "A project management tool for creating and organizing team-based projects.",
    description: [
      "This Project Manager application was developed in collaboration with three team members for the American Technology Initiative, a nonprofit organization, to streamline project management and foster team collaboration.",
      "The application allows users to create projects, assign team members, and manage tasks efficiently. It was completed within a 6-week timeline under the guidance of the company's director.",
      "My primary tasks included designing the Entity-Relationship Diagram (ERD) and focusing on the database structure, particularly for managing files and team members, ensuring data integrity and efficient relationships between entities.",
      "Additionally, I implemented the front-end functionality for adding and removing team members to a project, enabling seamless team management.",
    ],
    image: "/myPortfolio/images/ATIProject.png",
    logo: "",
    link: "https://www.americantechnologydevelopment.org/",
    linkDescription: "Learn about the American Technology Initiative",
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
    id: 4,
    title: "ShelterConnect",
    summary:
      "A mobile app concept that connects users with adoptable pets, featuring pet profiles, shelter locators, and personalized adoption assistance.",
    description: [
      "ShelterConnect is a mobile app concept designed to connect users with adoptable pets from local animal shelters. The app provides a user-friendly interface to streamline the process of finding a furry companion and enhancing the adoption experience.",
      "Users can securely log in or create an account to personalize their experience. Once logged in, they can explore a wide range of adoptable pets in their area, complete with detailed profiles that include information such as age, gender, and weight.",
      "The app also features a shelter locator, allowing users to find nearby shelters, view their contact information, and even get directions or call them directly. Additionally, users can save their favorite pets to easily revisit their profiles and keep track of potential adoption choices.",
      "Each pet profile provides in-depth details, including the pet's story, health status, and personality traits. Users also have the option to schedule visits or learn more about the shelter housing their potential new pet.",
      "This prototype offers a modern and accessible solution to improve the pet adoption process, fostering a stronger connection between adopters and shelters. Future updates will expand its features to make it an even more comprehensive tool for pet lovers and adopters alike.",
    ],
    image: "/myPortfolio/images/shelterConnect.png",
    logo: "/myPortfolio/images/shelterConnectLogo.png",
    link: "https://xd.adobe.com/view/d78c8dff-de43-440c-96de-d7445830933f-82df/?fullscreen&hints=off",
    linkDescription: "View Prototype",
    icons: [""],
    stack: ["Adobe Illustrator", "Adobe XD"],
    documentation: "/myPortfolio/documents/shelterConnect.pdf",
  },

  {
    id: 5,
    title: "TrailBlitz",
    summary:
      "A dual-interface app where admins manage inventory and users, while users can browse items, place orders, and update their profiles.",
    description: [
      "This app provides a dual-interface system tailored to both administrators and users. It offers a streamlined experience for managing inventory, placing orders, and maintaining user accounts.",
      "Administrators have full control over the inventory, with the ability to add, update, or remove items. They can also manage user accounts, ensuring smooth operations and account security.",
      "On the user side, the app allows customers to browse inventory, add items to their cart, view order history, and place orders efficiently. Users can also update their profile information and reset their passwords as needed.",
      "This app is designed to enhance operational efficiency for administrators while providing a seamless and intuitive shopping experience for users.",
    ],
    image: "/myPortfolio/images/trailblitz.png",
    logo: "/myPortfolio/images/trailblitzLogo.png",
    link: "",
    linkDescription: "",
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
    id: 6,
    title: "My Portfolio",
    summary:
      "A personal portfolio showcasing my skills, projects, and experience as a Junior Fullstack Developer, featuring a clean and modern design.",
    description: [
      "This portfolio website serves as a personal showcase of my work as a Junior Fullstack Developer. It highlights my skills, projects, and experience in web development, offering visitors an interactive and professional way to learn more about me.",
      "The website features a clean, modern design and includes sections for my projects, about me, and contact information, along with a downloadable resume. Each project is presented with detailed descriptions, highlighting my role, technologies used, and key outcomes.",
      "This platform reflects my dedication to creating functional, visually appealing, and user-friendly web applications while sharing my passion for software development with potential employers and collaborators.",
    ],
    image: "/myPortfolio/images/websiteScreenshot.png",
    logo: "/myPortfolio/images/initialImg.png",
    link: "https://xd.adobe.com/view/9cf5d5f4-2934-4e24-b5a3-02898d53f41d-c9a6/?fullscreen",
    linkDescription: "View Prototype",
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
