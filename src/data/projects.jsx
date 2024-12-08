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
    ilala1,
    ilala01,
    ilala2,
    ilala3,
    ilala4,
    ilala5,
    ilala6,
    ilala7,
    ilala8,
    ilala9,
    ilala10,
    ilala11,
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
};

export const projects = [
  {
    name: "eSoko E-commerce Fashion Store",
    description:
      "A full-stack e-commerce platform for that connects buyers to eSoko's fashion collection of men's, women's and children's clothes and accessories.",
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
    githubLink: "https://github.com/yourusername/esoko",
    liveLink: "https://esoko-demo.com",
  },
  {
    name: "Health College Website",
    description:
      "A static frontend-only website as a landing page for a City Institue of Health and Allied Sciences to showcase their school and programmes offered with information on the application process and requirements, external links to the application portal and downloadable application documents and guides.",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO"],
    images: projectImages.ilala,
    githubLink: "https://github.com/yourusername/ilala-college",
    liveLink: "https://ilala-college.com",
  },
  {
    name: "Meeting Attendance Application",
    description:
      "An admin dashboard for managing meeting attendance and analytics, taking records of participant attendance with digital signing and attendance report generation. Also includes a participant directory with contact information and records of all meetings attended by each recorded participant",
    tags: ["React", "Express", "PostgreSQL", "Chart.js"],
    images: projectImages.meetings,
    githubLink: "https://github.com/yourusername/meeting-tracker",
    liveLink: "https://meeting-tracker-demo.com",
  },
  {
    name: "IT Assets Management App",
    description:
      "An admin dashboard for managing and tracking location of departmental assets, inventory, and stock. Has functionalities to notify admin on restcockable items with low inventory and also has a borrowing and return setup for lending of IT equipment for temporary usage. Notifies of overdue unreturned inventory witha clean dashboard ",
    tags: ["React", "Express", "PostgreSQL", "Chart.js"],
    images: [],
    githubLink: "https://github.com/yourusername/ecommerce-dashboard",
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
    images: [],
    githubLink: "https://github.com/yourusername/workout-tracker",
    liveLink: "https://workout-tracker-demo.com",
  },
  {
    name: "Sacco Welfare Loans & Savings App",
    description:
      "A full-stack web platform with features for managing, creating, editing loan applications and keeping track of member account savings records.",
    tags: ["Next.js", "Node.js", "PostgreSql", "Prisma"],
    images: [],
    githubLink: "https://github.com/yourusername/blog-platform",
    liveLink: "https://blog-platform-demo.com",
  },
  {
    name: "Msafiri Public Transport App",
    description:
      "A full-stack flutter application for managing and accesing payments in matatus in Kenya with integrated Mpesa payments and google maps to track and set your destinations. Matatu operators get notifications on alighting passengers on reaching destinations. Dashboard with stats and reports payments and amount made by operators.",
    tags: ["Next.js", "Node.js", "PostgreSql", "Prisma"],
    images: [],
    githubLink: "https://github.com/yourusername/blog-platform",
    liveLink: "https://blog-platform-demo.com",
  },
  {
    name: "Tours & Safaris Website",
    description:
      "A static webapp for a tours and safaris company to showcase their destinations and sites and receive enquiries and communications with potential clients",
    tags: ["Next.js", "Node.js", "PostgreSql", "Prisma"],
    images: [],
    githubLink: "https://github.com/yourusername/blog-platform",
    liveLink: "https://blog-platform-demo.com",
  },
  {
    name: "POS System with C#",
    description:
      "A desktop app created with C# and sql to manage point of sale records and sales with additional features of inventory and stock management.",
    tags: ["Next.js", "Node.js", "PostgreSql", "Prisma"],
    images: [],
    githubLink: "https://github.com/yourusername/blog-platform",
    liveLink: "https://blog-platform-demo.com",
  },
];
