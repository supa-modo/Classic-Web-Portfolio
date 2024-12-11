// Import images for internships project
import eac1 from "../assets/images/eac/eac1.png";
import eac2 from "../assets/images/eac/eac2.png";
import eac3 from "../assets/images/eac/eac3.png";
import eac4 from "../assets/images/eac/eac4.png";
import eac5 from "../assets/images/eac/eac5.png";
import eac6 from "../assets/images/eac/eac6.png";
// Import images for msafiri project
import msafiri1 from "../assets/images/msafiri/msafiri1.jpg";
import msafiri2 from "../assets/images/msafiri/msafiri2.jpg";
import msafiri3 from "../assets/images/msafiri/msafiri3.jpg";
// Import images for farm project
import farm1 from "../assets/images/flutter-farm/farm1.jpg";
import farm2 from "../assets/images/flutter-farm/farm2.jpg";
import farm3 from "../assets/images/flutter-farm/farm3.jpg";
import farm4 from "../assets/images/flutter-farm/farm4.jpg";
import farm5 from "../assets/images/flutter-farm/farm5.jpg";
import farm6 from "../assets/images/flutter-farm/farm6.jpg";
import farm7 from "../assets/images/flutter-farm/farm7.jpg";
import farm8 from "../assets/images/flutter-farm/farm8.jpg";
import farm9 from "../assets/images/flutter-farm/farm9.jpg";
import farm10 from "../assets/images/flutter-farm/farm10.jpg";
// Import images for eSoko project
import esoko1 from "../assets/images/esoko/esoko1.png";
import esoko2 from "../assets/images/esoko/esoko2.png";
import esoko3 from "../assets/images/esoko/esoko3.png";
import esoko4 from "../assets/images/esoko/esoko4.png";
import esoko5 from "../assets/images/esoko/esoko5.png";
import esoko6 from "../assets/images/esoko/esoko6.png";
import esoko00 from "../assets/images/esoko/esoko00.png";
import esoko7 from "../assets/images/esoko/esoko7.png";
import esoko8 from "../assets/images/esoko/esoko8.png";
import esoko9 from "../assets/images/esoko/esoko9.png";
import esoko10 from "../assets/images/esoko/esoko10.png";
import esoko11 from "../assets/images/esoko/esoko11.png";
import esoko12 from "../assets/images/esoko/esoko12.png";
import esoko13 from "../assets/images/esoko/esoko13.png";
import esoko21 from "../assets/images/esoko/esoko21.png";

// Import images for Ilala College project
import ilala1 from "../assets/images/ilalaCollege/ilala1.png";
import ilala2 from "../assets/images/ilalaCollege/ilala2.png";
import ilala3 from "../assets/images/ilalaCollege/ilala3.png";
import ilala4 from "../assets/images/ilalaCollege/ilala4.png";
import ilala5 from "../assets/images/ilalaCollege/ilala5.png";
import ilala6 from "../assets/images/ilalaCollege/ilala6.png";
import ilala01 from "../assets/images/ilalaCollege/ilala01.png";
import ilala7 from "../assets/images/ilalaCollege/ilala7.png";
import ilala8 from "../assets/images/ilalaCollege/ilala8.png";
import ilala9 from "../assets/images/ilalaCollege/ilala9.png";
import ilala10 from "../assets/images/ilalaCollege/ilala10.png";
import ilala11 from "../assets/images/ilalaCollege/ilala11.png";
import ilala12 from "../assets/images/ilalaCollege/ilala12.png";
import ilala13 from "../assets/images/ilalaCollege/ilala13.png";
import ilala14 from "../assets/images/ilalaCollege/ilala14.png";

// Import images for Meeting Attendance project
import meetings1 from "../assets/images/meetingAttendance/meetings1.png";
import meetings2 from "../assets/images/meetingAttendance/meetings2.png";
import meetings3 from "../assets/images/meetingAttendance/meetings3.png";
import meetings4 from "../assets/images/meetingAttendance/meetings4.png";
import meetings5 from "../assets/images/meetingAttendance/meetings5.png";
import meetings6 from "../assets/images/meetingAttendance/meetings6.png";
import meetings7 from "../assets/images/meetingAttendance/meetings7.png";
import meetings8 from "../assets/images/meetingAttendance/meetings8.png";
import meetings9 from "../assets/images/meetingAttendance/meetings9.png";
import meetings10 from "../assets/images/meetingAttendance/meetings10.png";
import meetings11 from "../assets/images/meetingAttendance/meetings11.png";
// Import images for Meeting Attendance project
import rent1 from "../assets/images/rent/rent01.png";
import rent2 from "../assets/images/rent/rent1.png";
import rent3 from "../assets/images/rent/rent2.png";
import rent4 from "../assets/images/rent/rent3.png";
import rent5 from "../assets/images/rent/rent4.png";
import rent6 from "../assets/images/rent/rent5.png";
import rent7 from "../assets/images/rent/rent7.png";
import rent8 from "../assets/images/rent/rent8.png";
import rent9 from "../assets/images/rent/rent9.png";

// Project data structure
const projectImages = {
  esoko: [
    esoko1,
    esoko21,
    esoko2,
    esoko3,
    esoko4,
    esoko5,
    esoko6,
    esoko7,
    esoko8,
    esoko9,
    esoko10,
    esoko11,
    esoko12,
    esoko13,
    esoko00,
  ],
  ilala: [
    ilala01,
    ilala1,
    ilala3,
    ilala4,
    ilala5,
    ilala6,
    ilala7,
    ilala8,
    ilala9,
    ilala10,
    ilala11,
    ilala2,
    ilala12,
    ilala13,
    ilala14,
  ],
  meetings: [
    meetings1,
    meetings2,
    meetings3,
    meetings4,
    meetings5,
    meetings6,
    meetings7,
    meetings8,
    meetings9,
    meetings10,
    meetings11,
  ],
  eac: [eac1, eac2, eac3, eac4, eac5, eac6],
  msafiri: [msafiri1, msafiri2, msafiri3],
  farm: [farm1, farm2, farm3, farm4, farm5, farm6, farm7, farm8, farm9, farm10],
  rent: [rent1, rent2, rent3, rent4, rent5, rent6, rent7, rent8, rent9],
};

export const projects = [
  {
    name: "eSoko E-commerce Fashion Store",
    description:
      "A full-stack e-commerce platform that connects buyers to eSoko's fashion collection of men's, women's and children's clothes and accessories.",
    tags: [
      "React",
      "Vite",
      "Redux",
      "Node.Js",
      "Express",
      "PostgreSQL",
      "Sequelize",
    ],
    images: projectImages.esoko,
    githubLink: "https://github.com/private-repo/esoko",
    liveLink: "https://icy-smoke-09e427410.4.azurestaticapps.net/",
  },
  {
    name: "Ilala City College Website",
    description:
      "A static frontend-only website as a landing page for a City Institue of Health and Allied Sciences to showcase their school and programmes offered with information on the application process and requirements, external links to the application portal and downloadable application documents and guides.",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO"],
    images: projectImages.ilala,
    githubLink: "https://github.com/supa-modo/Ilala-College-Website",
    liveLink: "https://polite-pond-007a7b010.4.azurestaticapps.net/",
  },
  {
    name: "Meeting Attendance Application",
    description:
      "An admin dashboard for managing meeting attendance and analytics, taking records of participant attendance with digital signing and attendance report generation. Also includes a participant directory with contact information and records of all meetings attended by each recorded participant",
    tags: ["React", "Express", "PostgreSQL", "Chart.js"],
    images: projectImages.meetings,
    githubLink: "https://github.com/supa-modo/meetings-app",
    liveLink: "https://ashy-moss-0764c4a10.4.azurestaticapps.net/",
  },
  {
    name: "IT Assets Management App",
    description:
      "An admin dashboard for managing and tracking location of departmental assets, inventory, and stock. Has functionalities to notify admin on restcockable items with low inventory and also has a borrowing and return setup for lending of IT equipment for temporary usage. Notifies of overdue unreturned inventory witha clean dashboard ",
    tags: ["React", "Express", "PostgreSQL", "Chart.js"],
    images: [],
    githubLink:
      "https://github.com/supa-modo/IT-Assets-Inventory-and-Borrowing",
    liveLink: "https://ecommerce-dashboard-demo.com",
  },
  {
    name: "Internships Web Portal Mngmt",
    description:
      "A portal for accepting internship applications from applicants with an admin side for managing the recieved applications. Admin console has functionalities to review, approve, archive and extend ongoing and new internships to the organization. Acceptance and Extension Letters are automatically system generated on approval with the correct applicant's details set. Generates reports of all applications on request.",
    tags: [
      "React",
      "Node.Js",
      "Tailwind",
      "SqlServer",
      "Express",
      "JsPDF",
      "Sequelize",
    ],
    images: projectImages.eac,
    githubLink: "https://github.com/supa-modo/internship-web-portal",
    liveLink: "https://eac-internship-applications-portal.vercel.app",
  },
  {
    name: "Rental Property Management",
    description:
      "Currently an ongoing frontend development of a rental property listing and management that serves to easen the processes of keeping records of rental income, tenant management, maintenance and notifying tenants of upcoming payments.",
    tags: ["React", "Node.js", "PostgreSql", "Sequelize", "ChartJs"],
    images: projectImages.rent,
    githubLink: "https://github.com/supa-modo/Rental-Property-Listings-Portal",
    liveLink: "https://brave-rock-0afd13110.4.azurestaticapps.net/",
  },
  {
    name: "Flutter Farm Adverts App",
    description:
      "My very first flutter application designed to help farmers advertise their crops and livestock products for sale to potential buyers. Connected it to the government's agriculture website that regulates standard prices of agricultural produce so farmers and buyers could check on the regulated prices from the app and adjust their prices.",
    tags: ["Flutter", "Node.js", "Express", "Firebase ", "FireStore"],
    images: projectImages.farm,
    githubLink: "https://github.com/supa-modo/FlutterAppProject-4.0",
    liveLink: "https://pos-system-demo.com",
  },
  {
    name: "Sacco Welfare Loans & Savings App",
    description:
      "A full-stack web platform with features for managing, creating, editing loan applications and keeping track of member account savings records.",
    tags: ["Next.js", "Node.js", "PostgreSql", "Prisma"],
    images: [],
    githubLink: "https://github.com/supa-modo/sacco-welfare",
    liveLink: "https://sacco-welfare-demo.com",
  },
  {
    name: "Msafiri Public Transport App",
    description:
      "A full-stack flutter application for managing and accesing payments in matatus in Kenya with integrated Mpesa payments and google maps to track and set your destinations. Matatu operators get notifications on alighting passengers on reaching destinations. Dashboard with stats and reports payments and amount made by operators.",
    tags: ["Flutter", "Node.js", "Express", "Firebase", "FireStore"],
    images: projectImages.msafiri,
    githubLink: "https://github.com/supa-modo/Msafiri-Flutter-App-Project",
    liveLink: "https://msafiri-demo.com",
  },
  {
    name: "Tours & Safaris Website",
    description:
      "A static webapp for a tours and safaris company to showcase their destinations and sites and receive enquiries and communications with potential clients",
    tags: ["Next.js", "Node.js", "PostgreSql", "Prisma"],
    images: [],
    githubLink: "https://github.com/supa-modo/tours-travel",
    liveLink: "https://tours11-demo.com",
  },
  {
    name: "POS System with C#",
    description:
      "A desktop app created with C# and sql to manage point of sale records and sales with additional features of inventory and stock management.",
    tags: ["Next.js", "Node.js", "PostgreSql", "Prisma"],
    images: [],
    githubLink: "https://github.com/supa-modo/POSales-System",
    liveLink: "https://pos-system-demo.com",
  },
];
