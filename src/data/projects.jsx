import esoko1 from "../assets/images/esoko/esoko1.png";
import esoko2 from "../assets/images/esoko/esoko2.png";
import ilala1 from "../assets/images/ilalaCollege/ilala1.png";
import meetings1 from "../assets/images/meetingAttendance/meetings1.png";

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
    images: [esoko1, esoko2],
    githubLink: "https://github.com/yourusername/esoko",
    liveLink: "https://esoko-demo.com",
  },
  {
    name: "Health College Website",
    description:
      "A static frontend-only website as a landing page for a City Institue of Health and Allied Sciences to showcase their school and programmes offered with information on the application process and requirements, external links to the application portal and downloadable application documents and guides.",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO"],
    images: [ilala1],
    githubLink: "https://github.com/yourusername/ilala-college",
    liveLink: "https://ilala-college.com",
  },
  {
    name: "Meeting Attendance Application",
    description:
      "An admin dashboard for managing meeting attendance and analytics, taking records of participant attendance with digital signing and attendance report generation. Also includes a participant directory with contact information and records of all meetings attended by each recorded participant",
    tags: ["React", "Express", "PostgreSQL", "Chart.js"],
    images: [meetings1],
    githubLink: "https://github.com/yourusername/meeting-tracker",
    liveLink: "https://meeting-tracker-demo.com",
  },
  {
    name: "IT Assets Management App",
    description:
      "An admin dashboard for managing and tracking location of departmental assets, inventory, and stock. Has functionalities to notify admin on restcockable items with low inventory and also has a borrowing and return setup for lending of IT equipment for temporary usage. Notifies of overdue unreturned inventory witha clean dashboard ",
    tags: ["React", "Express", "PostgreSQL", "Chart.js"],
    images: [esoko2],
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
];
